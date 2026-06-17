import axios from "axios";
import { getDailyCheckInDetailsModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getDailyCheckInDetails = (userId: string) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/check-in/status`,
    params: { userId },
    headers: { "Content-Type": "application/json" },
  }).then((response) => getDailyCheckInDetailsModel(response.data));
