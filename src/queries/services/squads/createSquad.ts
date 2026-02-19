import axios from "axios";
import { createSquadModel } from "../../models";
import { AuthHeaders } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export interface CreateSquadRequest {
  name?: string;
}

export const createSquad = (params: CreateSquadRequest, authHeaders: AuthHeaders) =>
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
