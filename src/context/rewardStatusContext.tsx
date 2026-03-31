import { usePushWalletContext } from "@pushchain/ui-kit";
import React, {
  createContext,
  useContext,
  ReactNode,
} from "react";

import {
  GetSybilStatusResponse,
  useGetSybilStatus,
} from "../queries";
import { walletToFullCAIP10 } from "../helpers/web3helper";
import { useAuthHeaders } from "./authHeadersContext";

interface RewardStatusContextType {
  isLocked: boolean;
  isLockedStatusLoading: boolean;
  sybilStatusData: GetSybilStatusResponse;
  refetchSybilStatus: () => void;
}

const RewardStatusContext = createContext<RewardStatusContextType | undefined>(undefined);

export const RewardStatusContextProvider = ({ children }: { children: ReactNode }) => {
  const { authHeaders } = useAuthHeaders();

  const { universalAccount } = usePushWalletContext("wallet1");
  const account = universalAccount?.address as string;
  const isWalletConnected = Boolean(universalAccount?.address);

  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );

  const { data: sybilStatusData, isFetched, refetch: refetchSybilStatus } = useGetSybilStatus({
    walletAddress: caip10WalletAddress,
    authHeaders,
  });

  // const sybilData = {
  //     passed: true,
  //     reason: "",
  //     isCultMember: false,
  //     cultBypass: false,
  //     summary: { completedCriteria: 3, totalCriteria: 4 },
  //     basic: {
  //       twitter: { completed: true },
  //       discord: { completed: true },
  //       level: { completed: true, currentLevel: 10, requiredLevel: 10, remainingLevels: 0 },
  //     },
  //     advanced: {
  //       completed: true,
  //       connectedWalletAddress: "0x1234567890abcdef1234567890abcdef12345678",
  //     },
  // };


  const isLockedStatusLoading = isWalletConnected && !isFetched;

  const sybilData = sybilStatusData?.data;

  const isLocked = !isWalletConnected || (!(
    (sybilData?.summary?.completedCriteria ?? 0) >= 3 &&
    sybilData?.advanced?.completed === true &&
    sybilData?.basic?.twitter?.completed === true &&
    sybilData?.basic?.discord?.completed === true
  ) && isFetched);

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
