import { usePushWalletContext } from "@pushchain/ui-kit";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";

import {
  RewardActivityStatus,
  RewardActivityStatusResponse,
  useGetRewardActivityStatus,
  useAdvancedSybilCheck,
  useGetSeasonThreeUserByWallet,
} from "../queries";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";

interface RewardsContextType {
  isAuthModalVisible: boolean;
  setIsAuthModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isLocked: boolean;
  isLockedStatusLoading: boolean;
  isSybilEligible: boolean | null;
  isSybilCheckPending: boolean;
  isVerifyClicked: boolean;
  setIsVerifyClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isXPRefreshCompleted: boolean;
  setIsXPRefreshCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  signature: string | null;
  setSignature: React.Dispatch<React.SetStateAction<string | null>>;
  refetchActivityStatus: () => void;
}

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const RewardsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [isSybilEligible, setIsSybilEligible] = useState<boolean | null>(null);
  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const [isXPRefreshCompleted, setIsXPRefreshCompleted] = useState(false);
  const [signature, setSignature] = useState(null);

  const { universalAccount } = usePushWalletContext();
  const account = universalAccount?.address as string;
  const isWalletConnected = Boolean(universalAccount?.address);
  const { chainId } = parseCAIP(universalAccount?.chain);

  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );

  const {
    data: userDetails,
    isLoading: isLoadingUserDetails,
  } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });

  const {
    data: activityStatus,
    refetch: refetchActivityStatus,
    isLoading: isLoadingActivityStatus,
  } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: ["follow_push_on_discord", "follow_push_on_twitter"],
    },
    !!userDetails?.userId,
  );

  const { mutate: sybilCheckMutate, isPending: isSybilCheckPending } = useAdvancedSybilCheck();

  const hasSybilCheckRun = useRef(false);

  useEffect(() => {
    if (!account || !chainId || hasSybilCheckRun.current) return;

    hasSybilCheckRun.current = true;

    sybilCheckMutate(
      {
        address: account,
        chainId: parseInt(chainId),
      },
      {
        onSuccess: (response) => {
          setIsSybilEligible(response?.eligible);
        },
        onError: (error) => {
          console.error("Sybil check error:", error);
        },
      }
    );
  }, [account, chainId, sybilCheckMutate]);

  const isLockedStatusLoading = isLoadingUserDetails || isLoadingActivityStatus;

  useEffect(() => {
    if (!isWalletConnected) {
      setIsLocked(true);
      setIsSybilEligible(null);
      return;
    }

    if (!activityStatus || Object.keys(activityStatus).length === 0) return;

    const activities = activityStatus?.activities as RewardActivityStatusResponse;
    const discordStatus = activities?.follow_push_on_discord as RewardActivityStatus;
    const twitterStatus = activities?.follow_push_on_twitter as RewardActivityStatus;

    const isDiscordCompleted = discordStatus?.status === "COMPLETED";
    const isTwitterCompletedOrPending =
      twitterStatus?.status === "COMPLETED" || twitterStatus?.status === "PENDING";

    const shouldUnlock = isDiscordCompleted && isTwitterCompletedOrPending && isSybilEligible === true;
    setIsLocked(!shouldUnlock);
  }, [
    isWalletConnected,
    activityStatus,
    isSybilEligible,
  ]);

  return (
    <RewardsContext.Provider
      value={{
        isAuthModalVisible,
        setIsAuthModalVisible,
        isLocked,
        isLockedStatusLoading,
        isSybilEligible,
        isSybilCheckPending,
        isVerifyClicked,
        setIsVerifyClicked,
        isXPRefreshCompleted,
        setIsXPRefreshCompleted,
        signature,
        setSignature,
        refetchActivityStatus,
      }}
    >
      {children}
    </RewardsContext.Provider>
  );
};

export const useRewardsContext = () => {
  const context = useContext(RewardsContext);
  if (context === undefined) {
    throw new Error(
      "useRewardsContext must be used within an RewardsContextProvider",
    );
  }
  return context;
};
