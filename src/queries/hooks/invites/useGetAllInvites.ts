import { useQuery } from "@tanstack/react-query";
import { getAllInvites as getAllInvitesKey } from "../../queryKeys";
import { getAllInvites } from "../../services";

export const useGetAllInvites = (userId?: string) => {
  return useQuery({
    queryKey: [getAllInvitesKey, userId],
    queryFn: () => getAllInvites(userId!),
    enabled: !!userId,
  });
};
