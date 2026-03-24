import { useQuery } from "@tanstack/react-query";
import { squadsPendingInvites } from "../../queryKeys";
import { getSquadsPendingInvites } from "../../services";
import { AuthHeaders } from "../../types";

export const useGetSquadsPendingInvites = (authHeaders: AuthHeaders) => {
  return useQuery({
    queryKey: [squadsPendingInvites],
    queryFn: () => getSquadsPendingInvites(authHeaders),
    retry: false,
    enabled: !!authHeaders?.walletAddress,
  });
};
