import { useMutation } from "@tanstack/react-query";
import { verifySybilWallet as verifySybilWalletKey } from "../../queryKeys";
import { verifySybilWallet } from "../../services";

export const useVerifySybilWallet = () =>
  useMutation({
    mutationKey: [verifySybilWalletKey],
    mutationFn: verifySybilWallet,
  });
