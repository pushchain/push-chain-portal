import { useQuery } from "@tanstack/react-query";
import { squadsDetails } from "../../queryKeys";
import { getSquadsDetails } from "../../services";

export const useGetSquadsDetails = (userId?: string) => {
  return useQuery({
    queryKey: [squadsDetails, userId],
    queryFn: () => getSquadsDetails(userId!),
    retry: false,
    enabled: !!userId,
  });
};
