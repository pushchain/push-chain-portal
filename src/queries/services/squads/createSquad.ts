import axios from "axios";
import { createSquadModel } from "../../models";
import { AuthHeaders } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const createSquad = (params, authHeaders: AuthHeaders) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads`,
    data: params,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => createSquadModel(response.data));
