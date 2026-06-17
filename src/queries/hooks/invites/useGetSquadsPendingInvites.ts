import { useQuery } from "@tanstack/react-query";
import { squadsPendingInvites } from "../../queryKeys";
import { getSquadsPendingInvites } from "../../services";

export const useGetSquadsPendingInvites = (userId?: string) => {
  return useQuery({
    queryKey: [squadsPendingInvites, userId],
    queryFn: () => getSquadsPendingInvites(userId!),
    retry: false,
    enabled: !!userId,
  });
};
