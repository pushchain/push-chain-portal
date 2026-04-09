import { useQuery } from "@tanstack/react-query";
import { sybilStatus } from "../../queryKeys";
import { getSybilStatus } from "../../services";

export const useGetSybilStatus = ({
  walletAddress,
  userId
}: {
    walletAddress?: string;
    userId?: string
} = {}) => {
  const isValid =
    walletAddress || userId

  return useQuery({
    queryKey: [sybilStatus, walletAddress],
    queryFn: () => getSybilStatus({ walletAddress: walletAddress, userId: userId }),
    retry: false,
    enabled: !!isValid,
  });
};
