import { useState, useEffect, useRef, useCallback } from "react";
import { usePushWalletContext } from "@pushchain/ui-kit";
import {
  useGetRewardActivityStatus,
  useGetSeasonThreeUserByWallet,
  useAdvancedSybilCheck,
  usePushWalletSybilCheck,
} from "../../../queries";
import { walletToFullCAIP10, parseCAIP } from "../../../helpers/web3helper";
import { useRewardsContext } from "../../../context/rewardsContext";
import { useAuthHeaders } from "../../../context/authHeadersContext";
import { useRewardStatus } from "../../../context/rewardStatusContext";
import { useLocation } from "react-router-dom";
import { WalletChainType } from "../utils/wallet";

const PUSH_CHAIN_IDS = ["42101", "42102"];

// EVM results → session (persist until logout)
// Push results → sessionStorage (clear on refresh so user can retry)
const evmKey = (addr: string) => `sybil_evm_${addr}`;
const pushKey = (addr: string) => `sybil_push_${addr}`;

const readSybil = (addr: string, isPush: boolean): boolean | null => {
  const v = isPush
    ? sessionStorage.getItem(pushKey(addr))
    : sessionStorage.getItem(evmKey(addr));
  return v !== null ? JSON.parse(v) : null;
};

const writeSybil = (addr: string, isPush: boolean, eligible: boolean) => {
  if (isPush) sessionStorage.setItem(pushKey(addr), JSON.stringify(eligible));
  else sessionStorage.setItem(evmKey(addr), JSON.stringify(eligible));
};

const clearPushSybil = (addr: string) => sessionStorage.removeItem(pushKey(addr));
const clearEvmSybil = (addr: string) => sessionStorage.removeItem(evmKey(addr));

export const useUnverifiedStateLogic = () => {
  const { universalAccount } = usePushWalletContext("wallet1");
  const {
    universalAccount: linkedAccount,
    handleConnectToPushWallet: handleConnectToLinkedWallet,
    handleUserLogOutEvent: disconnectLinkedWallet,
  } = usePushWalletContext("wallet2");

  const { authHeaders, getAuthHeaders } = useAuthHeaders();
  const { refetchActivityStatus } = useRewardsContext();
  const { refetchSybilStatus } = useRewardStatus();
  const location = useLocation();

  const { chainId } = parseCAIP(universalAccount?.chain);
  const isPushWalletUser = PUSH_CHAIN_IDS.includes(chainId);

  const caip10 = universalAccount?.address
    ? walletToFullCAIP10(universalAccount.address, universalAccount.chain)
    : "";

  const linkedWalletAddress = linkedAccount?.address
    ? walletToFullCAIP10(linkedAccount.address, linkedAccount.chain)
    : "";

  const { data: user } = useGetSeasonThreeUserByWallet({ walletAddress: caip10 });
  const { data: activityStatuses, isLoading: isLoadingActivities } =
    useGetRewardActivityStatus(
      {
        userId: user?.userId as string,
        activities: ["follow_push_on_twitter", "follow_push_on_discord"],
      },
      !!user?.userId
    );

  const { mutate: evmCheck } = useAdvancedSybilCheck();
  const { mutate: pushCheck } = usePushWalletSybilCheck();

  const [errorMessage, setErrorMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [sybilEligible, setSybilEligible] = useState<boolean | null>(() => {
    if (!universalAccount?.address) return null;
    return readSybil(universalAccount.address, isPushWalletUser);
  });

  const saveResult = useCallback(
    (eligible: boolean) => {
      if (universalAccount?.address) {
        writeSybil(universalAccount.address, isPushWalletUser, eligible);
      }
      setSybilEligible(eligible);
      setIsVerifying(false);
      refetchSybilStatus();
    },
    [universalAccount?.address, isPushWalletUser, refetchSybilStatus]
  );

  // EVM user → advancedSybilCheck
  const runEvmCheck = async () => {
    const headers = authHeaders ?? await getAuthHeaders();
    if (!universalAccount?.address || !headers) return;
    setIsVerifying(true);

    const { chainId: evmChainId } = parseCAIP(universalAccount.chain);
    const resolvedChainId = evmChainId === WalletChainType.SEPOLIA ? WalletChainType.ETH : evmChainId;

    evmCheck(
      { address: universalAccount.address, chainId: resolvedChainId, authHeaders: headers },
      {
        onSuccess: (res) => saveResult(!!res?.eligible),
        onError: () => saveResult(false),
      }
    );
  };

  // Push wallet user → pushWalletSybilCheck (uses linked wallet2)
  const runPushCheck = async () => {
    const headers = authHeaders ?? await getAuthHeaders();
    if (!linkedAccount?.address || !headers) return;
    setIsVerifying(true);

    pushCheck(
      { address: linkedWalletAddress, authHeaders: headers },
      {
        onSuccess: (res) => saveResult(!!res?.eligible),
        onError: () => saveResult(false),
      }
    );
  };

  // Auto-trigger push check when wallet2 connects
  const hasAutoTriggered = useRef(false);
  useEffect(() => {
    if (!isPushWalletUser || !linkedAccount?.address) return;
    if (sybilEligible !== null || hasAutoTriggered.current) return;
    hasAutoTriggered.current = true;
    runPushCheck();
  }, [linkedAccount?.address, isPushWalletUser]);

  // Clear on disconnect
  useEffect(() => {
    if (!universalAccount?.address || sybilEligible !== true) {
      clearSybil();
      disconnectLinkedWallet();
      console.log('clear them')
    }

  }, [universalAccount?.address, location.pathname]);

  const clearSybil = useCallback(() => {
    clearEvmSybil(universalAccount?.address)
    clearPushSybil(universalAccount?.address)
    setSybilEligible(null);
  }, []);


  const verify = () => {
    setErrorMessage("");
    if (isPushWalletUser) {
      if (!linkedAccount?.address) {
        handleConnectToLinkedWallet();
        return;
      }
      runPushCheck();
    } else {
      runEvmCheck();
    }
  };

  return {
    universalAccount,
    linkedAccount,
    isPushWalletUser,
    sybilEligible,
    isVerifying,
    verify,
    errorMessage,
    setErrorMessage,
    user,
    activityStatuses,
    isLoadingActivities,
    refetchActivityStatus,
  };
};
