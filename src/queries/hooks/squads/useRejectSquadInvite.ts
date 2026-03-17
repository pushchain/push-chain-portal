import { useMutation } from "@tanstack/react-query";
import { rejectSquadInvite as rejectSquadInviteKey } from "../../queryKeys";
import { rejectSquadInvite } from "../../services";
import { RejectSquadInviteParams, AuthHeaders } from "../../types";

export const useRejectSquadInvite = () => {
  return useMutation({
    mutationKey: [rejectSquadInviteKey],
    mutationFn: ({ params, authHeaders }: { params: RejectSquadInviteParams; authHeaders: AuthHeaders }) =>
      rejectSquadInvite(params, authHeaders),
  });
};
