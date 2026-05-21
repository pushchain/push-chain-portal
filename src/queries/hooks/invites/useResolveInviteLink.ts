import { useQuery } from "@tanstack/react-query";
import { resolveInviteLink as resolveInviteLinkKey } from "../../queryKeys";
import { resolveInviteLink } from "../../services";

export const useResolveInviteLink = (userId?: string | null) => {
  return useQuery({
    queryKey: [resolveInviteLinkKey, userId],
    queryFn: () => resolveInviteLink(userId!),
    enabled: !!userId,
    staleTime: 0,
    gcTime: 0,
    retry: false,
  });
};
