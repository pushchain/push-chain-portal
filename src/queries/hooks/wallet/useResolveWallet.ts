import { useMutation } from "@tanstack/react-query";
import { resolveWallet } from "../../services";
import { ResolveWalletParams, AuthHeaders } from "../../types";

export const useResolveWallet = () => {
  return useMutation({
    mutationFn: ({ params, authHeaders }: { params: ResolveWalletParams; authHeaders: AuthHeaders }) =>
      resolveWallet(params, authHeaders),
  });
};
