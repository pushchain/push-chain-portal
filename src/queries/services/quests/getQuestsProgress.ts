import axios from "axios";
import { getQuestsProgressModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { GetQuestsProgressParams } from "../../types/quests";

export const getQuestsProgress = (params: GetQuestsProgressParams) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/apps/${params.appId}/users/${params.userId}/progress`,
  }).then((response) => getQuestsProgressModel(response.data));
