import axios from "axios";
import { getLevelProgressModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders } from "../../types";

export const getLevelProgress = (authHeaders: AuthHeaders) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/level`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => getLevelProgressModel(response.data));
