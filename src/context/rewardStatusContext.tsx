import { usePushWalletContext } from "@pushchain/ui-kit";
import React, {
  createContext,
  useContext,
  ReactNode,
} from "react";

import {
  GetSybilStatusResponse,
  useGetSeasonThreeUserByWallet,
  useGetSybilStatus,
  useGetUserCultStatus,
} from "../queries";
import { walletToFullCAIP10 } from "../helpers/web3helper";

interface RewardStatusContextType {
  isLocked: boolean;
  isLockedStatusLoading: boolean;
  sybilStatusData: GetSybilStatusResponse;
  refetchSybilStatus: () => void;
}

const RewardStatusContext = createContext<RewardStatusContextType | undefined>(undefined);

export const RewardStatusContextProvider = ({ children }: { children: ReactNode }) => {

  const { universalAccount } = usePushWalletContext("wallet1");
  const isWalletConnected = Boolean(universalAccount?.address);

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userCultStatus, isLoading } = useGetUserCultStatus({
		wallet: caip10WalletAddress
	});

   const isCultUser = userCultStatus?.data?.isCultMember && !isLoading;


  const { data: userSeasonThreeDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  })

  const { data: sybilStatusData, isFetched, refetch: refetchSybilStatus } = useGetSybilStatus({
    userId: userSeasonThreeDetails?.userId
  });

  const isLockedStatusLoading = isWalletConnected && !isFetched;

  const sybilData = sybilStatusData?.data;

  const isLocked = !isWalletConnected || (isCultUser ? false : (!(
    (sybilData?.summary?.completedCriteria ?? 0) >= 2 &&
    sybilData?.advanced?.completed === true &&
    sybilData?.basic?.twitter?.completed === true &&
    sybilData?.basic?.discord?.completed === true
  ) && isFetched));

  return (
    <RewardStatusContext.Provider
      value={{
        isLocked,
        isLockedStatusLoading,
        sybilStatusData,
        refetchSybilStatus,
      }}
    >
      {children}
    </RewardStatusContext.Provider>
  );
};

export const useRewardStatus = () => {
  const context = useContext(RewardStatusContext);
  if (context === undefined) {
    throw new Error("useRewardStatus must be used within a RewardStatusContextProvider");
  }
  return context;
};
