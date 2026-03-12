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
  isSybilEligible: boolean | null;
  setIsSybilEligible: React.Dispatch<React.SetStateAction<boolean | null>>;
  isSybilCheckPending: boolean;
  sybilStatusData: ReturnType<typeof useGetSybilStatus>["data"];
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

  const { data: sybilStatusData } = useGetSybilStatus({
    walletAddress: caip10WalletAddress,
    authHeaders,
  });

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

  useEffect(() => {
    if (!universalAccount) {
      setIsSybilEligible(null);
      hasSybilCheckRun.current = false;
    }
  }, [universalAccount]);

  return (
    <RewardStatusContext.Provider
      value={{
        isSybilEligible,
        setIsSybilEligible,
        isSybilCheckPending,
        sybilStatusData,
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
