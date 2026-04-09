import axios from "axios";
import { getQuestsModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { GetQuestsParams } from "../../types/quests";

export const getQuests = (params: GetQuestsParams) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/apps/${params.appId}/quests`,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => getQuestsModel(response.data));
