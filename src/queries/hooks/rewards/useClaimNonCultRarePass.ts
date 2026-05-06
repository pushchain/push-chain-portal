import { useMutation } from "@tanstack/react-query";
import { claimNonCultRarePass } from "../../services/rewards/claimNonCultRarePass";
import { AuthHeaders } from "../../types";

export const useClaimNonCultRarePass = () =>
  useMutation({
    mutationFn: (authHeaders: AuthHeaders) => claimNonCultRarePass(authHeaders),
  });
