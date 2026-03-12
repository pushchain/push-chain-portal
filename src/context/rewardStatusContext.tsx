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
  useAdvancedSybilCheck,
  usePushWalletSybilCheck,
  useGetSybilStatus,
} from "../queries";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";
import { useAuthHeaders } from "./authHeadersContext";

interface RewardStatusContextType {
  isLocked: boolean;
  isLockedStatusLoading: boolean;
}

const RewardStatusContext = createContext<RewardStatusContextType | undefined>(undefined);

export const RewardStatusContextProvider = ({ children }: { children: ReactNode }) => {
  const [isSybilEligible, setIsSybilEligible] = useState<boolean | null>(null);

  const { authHeaders } = useAuthHeaders();
  const { universalAccount } = usePushWalletContext("wallet1");
  const account = universalAccount?.address as string;
  const { chainId } = parseCAIP(universalAccount?.chain);

  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );

  const { data: sybilStatusData, isLoading: isLockedStatusLoading } = useGetSybilStatus({
    walletAddress: caip10WalletAddress,
    authHeaders,
  });


  const sybilData = sybilStatusData?.data;

  const isLocked = !(
    (sybilData?.summary?.completedCriteria ?? 0) >= 3 &&
    sybilData?.advanced?.completed === true &&
    sybilData?.basic?.twitter?.completed === true &&
    sybilData?.basic?.discord?.completed === true
  );

  // console.log(sybilStatusData, 'syb', isLocked)


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
