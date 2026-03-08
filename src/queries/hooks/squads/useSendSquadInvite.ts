import { useMutation } from "@tanstack/react-query";
import { sendSquadInvite as sendSquadInviteKey } from "../../queryKeys";
import { sendSquadInvite } from "../../services";
import { SendSquadInviteParams, AuthHeaders } from "../../types";

export const useSendSquadInvite = () => {
  return useMutation({
    mutationKey: [sendSquadInviteKey],
    mutationFn: ({ params, authHeaders }: { params: SendSquadInviteParams; authHeaders: AuthHeaders }) =>
      sendSquadInvite(params, authHeaders),
  });
};
