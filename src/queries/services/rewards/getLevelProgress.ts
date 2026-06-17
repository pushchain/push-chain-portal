import axios from "axios";
import { getLevelProgressModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getLevelProgress = (userId: string) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/level`,
    params: { userId },
    headers: { "Content-Type": "application/json" },
  }).then((response) => getLevelProgressModel(response.data));
