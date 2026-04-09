import { useState, useEffect, useCallback, useRef } from "react";
import { usePushWalletContext } from "@pushchain/ui-kit";
import {
  useGetRewardActivityStatus,
  useGetSeasonThreeUserByWallet,
  usePushWalletSybilCheck,
} from "../../../queries";
import { walletToFullCAIP10, parseCAIP } from "../../../helpers/web3helper";
import { useRewardsContext } from "../../../context/rewardsContext";
import { useAuthHeaders } from "../../../context/authHeadersContext";
import { useRewardStatus } from "../../../context/rewardStatusContext";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../../../helpers/analytics";
import { FAILED_CHECK_MESSAGES } from "../utils/sybilCheckMessages";
import { useLinkedWallet } from "../../../context/linkedWalletContext";
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

  const { authHeaders, getAuthHeaders } = useAuthHeaders();
  const { refetchActivityStatus } = useRewardsContext();
  const { refetchSybilStatus } = useRewardStatus();
  const { data: linkedWalletData, handleLinkedWalletConnection, setData, handleLogOut } = useLinkedWallet();
  const { chainId: linkedChainId } = parseCAIP(linkedWalletData?.account?.chain);
  const isSolana = linkedChainId === WalletChainType.SOLANA;


  const location = useLocation();

  const { chainId } = parseCAIP(universalAccount?.chain);
  const isPushWalletUser = PUSH_CHAIN_IDS.includes(chainId);

  const caip10 = universalAccount?.address
    ? walletToFullCAIP10(universalAccount.address, universalAccount.chain)
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

      if (eligible) {
         refetchSybilStatus();
         return;
      }

      setIsVerifying(false);
    },
    [universalAccount?.address, isPushWalletUser, refetchSybilStatus]
  );

  const handleSybilError = (error: any) => {
    const failedChecks: string[] = error?.response?.data?.error?.failedChecks || error?.response?.data?.data?.summary?.failedChecks || [];
    if (failedChecks.length > 0) {
      const messages = failedChecks?.map((check) => FAILED_CHECK_MESSAGES[check] || check);
      setErrorMessage(messages.length === 1 ? messages[0] : messages.map((m) => `• ${m}`).join("\n"));
    }
    saveResult(false);
  };

  // EVM user → advancedSybilCheck
  const runEvmCheck = async () => {
    setIsVerifying(true);
    const headers = authHeaders ?? (await getAuthHeaders());
    if (!universalAccount?.address || !headers) {
      setIsVerifying(false);
      return;
    }

    pushCheck(
      {
        address: caip10,
        authHeaders: headers,
        ...(headers.signature && { verificationProof: headers.signature }),
        ...(headers.message && { message: headers.message as string }),
        ...(chainId && { chainId }),
      },
      {
        onSuccess: (res) => saveResult(!!res?.eligible),
        onError: handleSybilError,
      }
    );
  };

  const isLinkedWalletReady = !!linkedWalletData?.signature && !!linkedWalletData?.account?.address;

  // Push wallet user → pushWalletSybilCheck (uses linked wallet)
  const runPushCheck = async () => {
    setIsVerifying(true);
    const headers = authHeaders ?? (await getAuthHeaders());
    if (!isLinkedWalletReady || !headers) {
      clearSybil();
      setIsVerifying(false);
      return;
    }

    pushCheck(
      {
        address: linkedWalletData.account.address,
        authHeaders: headers,
        ...(linkedWalletData.signature && { verificationProof: linkedWalletData.signature }),
        ...(linkedWalletData.messageToSend && { message: isSolana ? linkedWalletData?.messageString : linkedWalletData.messageToSend }),
        ...(linkedChainId && { chainId: linkedChainId }),
      },
      {
        onSuccess: (res) => saveResult(!!res?.eligible),
        onError: handleSybilError,
      }
    );
  };

  // If iframe returned an error (address but no signature), clear stale data
  useEffect(() => {
    if (linkedWalletData?.error && !linkedWalletData?.signature) {
      setData(null);
    }
  }, [linkedWalletData]);

  // Auto-trigger push check when linkedWalletData arrives from iframe
  useEffect(() => {
    if (!isLinkedWalletReady) return;
    if (sybilEligible !== null) return;
    runPushCheck();
  }, [linkedWalletData]);

  // Clear on disconnect / route change
  useEffect(() => {
    if (!universalAccount?.address || sybilEligible !== true) {
      clearSybil();
    }
  }, [universalAccount?.address, location.pathname]);

  const clearSybil = useCallback(() => {
    setData(null);
    handleLogOut();
    clearEvmSybil(universalAccount?.address);
    clearPushSybil(universalAccount?.address);
    setSybilEligible(null);
  }, []);

  const verify = () => {
    setErrorMessage("");
    trackEvent('sybil_verify_wallet_clicked', { event_category: 'verification', event_label: isPushWalletUser ? 'push_wallet' : 'evm_wallet' });
    if (isPushWalletUser) {
      if (!isLinkedWalletReady) {
        handleLinkedWalletConnection();
        return;
      }
      runPushCheck();
    } else {
      runEvmCheck();
    }
  };

  return {
    universalAccount,
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
