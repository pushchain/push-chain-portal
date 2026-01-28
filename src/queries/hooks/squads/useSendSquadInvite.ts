import { useMutation } from "@tanstack/react-query";
import { sendSquadInvite as sendSquadInviteKey } from "../../queryKeys";
import { sendSquadInvite } from "../../services";

export const useSendSquadInvite = () => {
  return useMutation({
    mutationKey: [sendSquadInviteKey],
    mutationFn: sendSquadInvite
  });
};
