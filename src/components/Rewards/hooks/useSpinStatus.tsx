import { useAuthHeaders } from "../../../context/authHeadersContext";
import { useGetSpinStatus } from "../../../queries/hooks";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { walletToFullCAIP10 } from "../../../helpers/web3helper";
import { useGetSeasonThreeUserByWallet } from "../../../queries";

export const useSpinStatus = () => {
  const { isSigningMessage } = useAuthHeaders();
  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(universalAccount?.address as string, universalAccount?.chain);
  const { data: userDetails } = useGetSeasonThreeUserByWallet({ walletAddress: caip10WalletAddress });

  const {
    data: spinStatus,
    isLoading: isLoadingSpinStatus,
    refetch,
    error,
  } = useGetSpinStatus(userDetails?.userId);

  return {
    spinStatus,
    isLoading: isLoadingSpinStatus || isSigningMessage,
    error,
    refetch,
  };
};
