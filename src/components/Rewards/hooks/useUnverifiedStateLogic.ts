import { useState, useEffect, useRef } from "react"
import { usePushWalletContext } from "@pushchain/ui-kit"
import { useGetRewardActivityStatus, useGetSeasonThreeUserByWallet, useAdvancedSybilCheck, usePushWalletSybilCheck } from "../../../queries"
import { walletToFullCAIP10, parseCAIP } from "../../../helpers/web3helper"
import { useRewardsContext } from "../../../context/rewardsContext"

const PUSH_CHAIN_IDS = ["42101", "42102"];

export const useUnverifiedStateLogic = () => {
  // wallet1 = primary wallet, wallet2 = EVM wallet linked by Push wallet users for sybil verification
  const { universalAccount } = usePushWalletContext('wallet1');
  const {
    universalAccount: linkedAccount,
    handleConnectToPushWallet: connectLinkedWallet,
    handleUserLogOutEvent: disconnectLinkedWallet,
  } = usePushWalletContext('wallet2');

  const { refetchActivityStatus } = useRewardsContext();
  const [errorMessage, setErrorMessage] = useState("");

  const sybilStorageKey = universalAccount?.address ? `sybil_eligible_${universalAccount.address}` : null;

  const [localSybilEligible, setLocalSybilEligible] = useState<boolean | null>(() => {
    if (!sybilStorageKey) return null;
    const stored = localStorage.getItem(sybilStorageKey);
    return stored !== null ? JSON.parse(stored) : null;
  });

  const persistSybilResult = (result: boolean, persist = false) => {
    if (persist && sybilStorageKey) localStorage.setItem(sybilStorageKey, JSON.stringify(result));
    setLocalSybilEligible(result);
  };

  const { mutate: evmSybilCheck, isPending: isEvmPending } = useAdvancedSybilCheck();
  const { mutate: pushWalletSybilCheck, isPending: isPushWalletPending } = usePushWalletSybilCheck();

  const { chainId } = parseCAIP(universalAccount?.chain);
  const isPushWalletUser = PUSH_CHAIN_IDS.includes(chainId);
  const isLocalSybilCheckPending = isEvmPending || isPushWalletPending;

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({ walletAddress: caip10WalletAddress });

  const { data: activityStatuses, isLoading: isLoadingActivities } = useGetRewardActivityStatus(
    { userId: userDetails?.userId as string, activities: ["follow_push_on_twitter", "follow_push_on_discord"] },
    !!userDetails?.userId
  );

  // Shared helper: runs the EVM sybil check and clears the wallet2 session from localStorage afterwards
  const runEvmSybilCheck = (address: string, evmChainId: string) => {
    evmSybilCheck(
      { address, chainId: parseInt(evmChainId) },
      {
        onSuccess: (response) => {
          persistSybilResult(response?.eligible, true);
          localStorage.removeItem("walletInfo");
        },
        onError: () => {
          persistSybilResult(false, true);
          localStorage.removeItem("walletInfo");
        },
      }
    );
  };

  // Auto-trigger sybil check as soon as wallet2 connects (Push wallet users only)
  useEffect(() => {
    if (!isPushWalletUser || !linkedAccount?.address || localSybilEligible !== null) return;
    const { chainId: linkedChainId } = parseCAIP(linkedAccount.chain);
    runEvmSybilCheck(linkedAccount.address, linkedChainId);
  }, [linkedAccount?.address]);

  const cleanupRef = useRef({ isPushWalletUser, linkedAccount, disconnectLinkedWallet });
  useEffect(() => {
    cleanupRef.current = { isPushWalletUser, linkedAccount, disconnectLinkedWallet };
  });

  // On page change / unmount: disconnect wallet2 only if the user is a Push wallet user and wallet2 was actually connected
  useEffect(() => {
    return () => {
      const { isPushWalletUser, linkedAccount, disconnectLinkedWallet } = cleanupRef.current;
      if (isPushWalletUser && linkedAccount?.address) disconnectLinkedWallet();
    };
  }, []);

  const handleVerifyWallet = () => {
    if (isPushWalletUser) {
      // Push wallet users must link an EVM wallet (wallet2) to verify
      if (!linkedAccount?.address) {
        connectLinkedWallet();
        return;
      }
      const { chainId: linkedChainId } = parseCAIP(linkedAccount.chain);
      runEvmSybilCheck(linkedAccount.address, linkedChainId);
      return;
    }

    // EVM users verify directly with their own wallet
    if (!universalAccount?.address || !chainId) return;
    pushWalletSybilCheck(
      { address: universalAccount.address, chainId: parseInt(chainId) },
      {
        onSuccess: (response) => persistSybilResult(response?.eligible, true),
        onError: () => persistSybilResult(false),
      }
    );
  };

  console.log(isPushWalletUser, 'isPushWalletUser')

  return {
    universalAccount,
    linkedAccount,
    isPushWalletUser,
    errorMessage,
    setErrorMessage,
    localSybilEligible,
    isLocalSybilCheckPending,
    userDetails,
    activityStatuses,
    isLoadingActivities,
    refetchActivityStatus,
    handleVerifyWallet,
  };
};
