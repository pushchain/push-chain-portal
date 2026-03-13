import axios from "axios";

import { getSybilStatusModel } from "../../models";
import { AuthHeaders } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSybilStatus = ({
  walletAddress,
  authHeaders,
}: {
  walletAddress: string;
  authHeaders: AuthHeaders;
}) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/sybil/status`,
    params: { walletAddress },
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => getSybilStatusModel(response.data));
