import { useMutation } from "@tanstack/react-query";
import { AdvancedSybilCheckParams } from "../../types";
import { callPushWalletSybilCheck } from "../../services";
import { pushWalletSybilCheck } from "../../queryKeys";

export const usePushWalletSybilCheck = () => {
  return useMutation({
    mutationKey: [pushWalletSybilCheck],
    mutationFn: (params: AdvancedSybilCheckParams) => callPushWalletSybilCheck(params),
  });
};
