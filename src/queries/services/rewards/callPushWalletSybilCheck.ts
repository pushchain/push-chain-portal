import axios from "axios";

import { pushWalletSybilCheckModel } from "../../models";
import { AdvancedSybilCheckParams } from "../../types/rewards";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const callPushWalletSybilCheck = ({
  address,
  chainId,
  authHeaders,
}: AdvancedSybilCheckParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/advanced-sybil/check`,
    data: { address },
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => pushWalletSybilCheckModel(response.data.data));
