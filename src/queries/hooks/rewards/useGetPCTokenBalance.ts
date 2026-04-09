import { useQuery } from "@tanstack/react-query";
import { pcTokenBalance } from "../../queryKeys";
import { getPCTokenBalance } from "../../services";

export const useGetPCTokenBalance = (userId?: string) => {
  return useQuery({
    queryKey: [pcTokenBalance, userId],
    queryFn: () => getPCTokenBalance(userId!),
    retry: false,
    enabled: !!userId,
  });
};
