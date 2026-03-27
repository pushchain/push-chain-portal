import axios from "axios";

import { advancedSybilCheckModel } from "../../models";
import { AdvancedSybilCheckParams } from "../../types/rewards";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const callAdvancedSybilCheck = ({
  address,
  chainId,
  authHeaders,
}: AdvancedSybilCheckParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/advanced-sybil/check-evm`,
    data: { address, chainId },
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => advancedSybilCheckModel(response.data.data));
