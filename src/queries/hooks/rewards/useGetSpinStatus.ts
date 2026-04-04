import { useQuery } from "@tanstack/react-query";
import { spinStatus } from "../../queryKeys";
import { getSpinStatus } from "../../services";

export const useGetSpinStatus = (userId?: string) => {
  return useQuery({
    queryKey: [spinStatus, userId],
    queryFn: () => getSpinStatus(userId!),
    retry: false,
    enabled: !!userId,
  });
};
