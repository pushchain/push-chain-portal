import { useMutation } from "@tanstack/react-query";
import { claimPCTokens, ClaimPCTokensPayload } from "../../services";

export const useClaimPCTokens = () => {
  return useMutation({
    mutationFn: (payload: ClaimPCTokensPayload) => claimPCTokens(payload),
  });
};
