import axios from "axios";
import { getQuestsModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders } from "../../types";
import { GetQuestsParams } from "../../types/quests";

export const getQuests = (params: GetQuestsParams, authHeaders?: AuthHeaders) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/apps/${params.appId}/quests`,
    headers: authHeaders ? {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    } : {
      "Content-Type": "application/json",
    },
  }).then((response) => getQuestsModel(response.data));
