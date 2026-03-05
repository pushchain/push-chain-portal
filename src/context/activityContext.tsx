import { usePushWalletContext } from "@pushchain/ui-kit";
import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import {
  useGetSeasonThreeUserByWallet,
	useGetRewardsActivity,
	SeasonThreeUserByWalletResponse,
} from "../queries";
import { walletToFullCAIP10 } from "../helpers/web3helper";

interface RewardsContextType {
  isVerified: boolean;
	isLoading: boolean;
	userDetails: SeasonThreeUserByWalletResponse | null;
  refetch: () => void;
}

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const ActivityContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
	const { universalAccount } = usePushWalletContext('wallet1');

	const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const {
		data: userActivity,
		isLoading: isLoadingActivity,
		refetch,
	} = useGetRewardsActivity(
		{ userId: userDetails?.userId, activityTypes: ['follow_push_on_discord'] },
		{ enabled: !!userDetails?.userId },
    );

  console.log('dummy');

  return (
    <RewardsContext.Provider
      value={{
        refetch,
				userDetails,
				isLoading: isLoadingActivity,
				isVerified: !!userActivity?.follow_push_on_discord,
      }}
    >
      {children}
    </RewardsContext.Provider>
  );
};

export const useActivityContext = () => {
  const context = useContext(RewardsContext);
  if (context === undefined) {
    throw new Error(
      "useActivityContext must be used within an ActivityContextProvider",
    );
  }
  return context;
};
