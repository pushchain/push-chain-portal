import { useMutation } from "@tanstack/react-query";
import { acceptSquadInvite as acceptSquadInviteKey } from "../../queryKeys";
import { acceptSquadInvite } from "../../services";

export const useAcceptSquadInvite = () => {
  return useMutation({
    mutationKey: [acceptSquadInviteKey],
    mutationFn: acceptSquadInvite,
  });
};
