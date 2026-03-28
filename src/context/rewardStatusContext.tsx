import { usePushWalletContext } from "@pushchain/ui-kit";
import React, {
  createContext,
  useContext,
  ReactNode,
} from "react";

import {
  useGetSybilStatus,
} from "../queries";
import { walletToFullCAIP10 } from "../helpers/web3helper";
import { useAuthHeaders } from "./authHeadersContext";

interface RewardStatusContextType {
  isLocked: boolean;
  isLockedStatusLoading: boolean;
}

const RewardStatusContext = createContext<RewardStatusContextType | undefined>(undefined);

export const RewardStatusContextProvider = ({ children }: { children: ReactNode }) => {
  const { authHeaders, isSigningMessage } = useAuthHeaders();

  const { universalAccount } = usePushWalletContext("wallet1");
  const account = universalAccount?.address as string;

  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );

  const { data: sybilStatusData, isLoading: isSybilQueryLoading, isFetched } = useGetSybilStatus({
    walletAddress: caip10WalletAddress,
    authHeaders,
  });


  const isLockedStatusLoading = !isFetched;

  const sybilData = sybilStatusData?.data;

  const isLocked = !(
    (sybilData?.summary?.completedCriteria ?? 0) >= 3 &&
    sybilData?.advanced?.completed === true &&
    sybilData?.basic?.twitter?.completed === true &&
    sybilData?.basic?.discord?.completed === true
  ) && isFetched;

  return (
    <RewardStatusContext.Provider
      value={{
        isLocked,
        isLockedStatusLoading
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
