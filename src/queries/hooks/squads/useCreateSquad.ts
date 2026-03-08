import { useMutation } from "@tanstack/react-query";
import { createSquad as createSquadKey } from "../../queryKeys";
import { createSquad } from "../../services";
import { CreateSquadParams, AuthHeaders } from "../../types";

export const useCreateSquad = () => {
  return useMutation({
    mutationKey: [createSquadKey],
    mutationFn: ({ params, authHeaders }: { params: CreateSquadParams; authHeaders: AuthHeaders }) =>
      createSquad(params, authHeaders),
  });
};
