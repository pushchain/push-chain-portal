import { useQuery } from "@tanstack/react-query";
import { levelProgress } from "../../queryKeys";
import { getLevelProgress } from "../../services";

export const useGetLevelProgress = (userId?: string) => {
  return useQuery({
    queryKey: [levelProgress, userId],
    queryFn: () => getLevelProgress(userId!),
    retry: false,
    enabled: !!userId,
  });
};
