import { useQuery } from "@tanstack/react-query";
import { userLevelConfig } from "../../queryKeys";
import { getUserLevelConfig } from "../../services";

export const useGetUserLevelConfig = () => {
  return useQuery({
    queryKey: [userLevelConfig],
    queryFn: () => getUserLevelConfig(),
    staleTime: 1000 * 60 * 60,
  });
};
