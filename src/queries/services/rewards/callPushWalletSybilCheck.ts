import axios from "axios";

import { pushWalletSybilCheckModel } from "../../models";
import { AdvancedSybilCheckParams } from "../../types/rewards";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const callPushWalletSybilCheck = ({
  address,
  chainId,
}: AdvancedSybilCheckParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/advanced-sybil/check`,
    data: {
      address,
      chainId,
    },
  }).then((response) => pushWalletSybilCheckModel(response.data.data));
