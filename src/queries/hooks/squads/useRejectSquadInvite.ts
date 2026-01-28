import { useMutation } from "@tanstack/react-query";
import { rejectSquadInvite as rejectSquadInviteKey } from "../../queryKeys";
import { rejectSquadInvite } from "../../services";

export const useRejectSquadInvite = () => {
  return useMutation({
    mutationKey: [rejectSquadInviteKey],
    mutationFn: rejectSquadInvite,
  });
};
