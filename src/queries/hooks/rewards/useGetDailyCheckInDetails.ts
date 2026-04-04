import { useQuery } from "@tanstack/react-query";
import { getDailyCheckInDetails as getDailyCheckInDetailsKey } from "../../queryKeys";
import { getDailyCheckInDetails } from "../../services";

export const useGetDailyCheckInDetails = (userId?: string) => {
  return useQuery({
    queryKey: [getDailyCheckInDetailsKey, userId],
    queryFn: () => getDailyCheckInDetails(userId!),
    enabled: !!userId,
  });
};
