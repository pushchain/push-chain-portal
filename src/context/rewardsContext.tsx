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
  useGetRewardActivityStatus,
  useAdvancedSybilCheck,
  usePushWalletSybilCheck,
  useGetSeasonThreeUserByWallet,
} from "../queries";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";

interface RewardsContextType {
  isAuthModalVisible: boolean;
  setIsAuthModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [isSybilEligible, setIsSybilEligible] = useState<boolean | null>(null);
  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const [isXPRefreshCompleted, setIsXPRefreshCompleted] = useState(false);
  const [signature, setSignature] = useState(null);

  const { universalAccount } = usePushWalletContext('wallet1');
  const account = universalAccount?.address as string;
  const { chainId } = parseCAIP(universalAccount?.chain);

  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );

  const {
    data: userDetails,
  } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });


  const {
    refetch: refetchActivityStatus,
  } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: ["follow_push_on_discord", "follow_push_on_twitter"],
    },
    !!userDetails?.userId,
  );

  const { mutate: evmSybilCheck, isPending: isEvmSybilPending } = useAdvancedSybilCheck();
  const { mutate: pushWalletSybilCheck, isPending: isPushWalletSybilPending } = usePushWalletSybilCheck();

  const isSybilCheckPending = isEvmSybilPending || isPushWalletSybilPending;

  const hasSybilCheckRun = useRef(false);

  useEffect(() => {
    if (!account || !chainId || hasSybilCheckRun.current) return;

    hasSybilCheckRun.current = true;

    const mutate = chainId === "42101" ? pushWalletSybilCheck : evmSybilCheck;

    mutate(
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
  }, [account, chainId, evmSybilCheck, pushWalletSybilCheck]);

  return (
    <RewardsContext.Provider
      value={{
        isAuthModalVisible,
        setIsAuthModalVisible,
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
