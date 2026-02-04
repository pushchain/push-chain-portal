import { useMutation } from "@tanstack/react-query";
import { acceptSquadInvite as acceptSquadInviteKey } from "../../queryKeys";
import { acceptSquadInvite } from "../../services";
import { AcceptSquadInviteParams, AuthHeaders } from "../../types";

export const useAcceptSquadInvite = () => {
  return useMutation({
    mutationKey: [acceptSquadInviteKey],
    mutationFn: ({ params, authHeaders }: { params: AcceptSquadInviteParams; authHeaders: AuthHeaders }) =>
      acceptSquadInvite(params, authHeaders),
  });
};
