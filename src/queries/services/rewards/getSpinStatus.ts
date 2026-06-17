import axios from "axios";
import { getSpinStatusModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSpinStatus = (userId: string) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/spin/status`,
    params: { userId },
    headers: { "Content-Type": "application/json" },
  }).then((response) => getSpinStatusModel(response.data));
