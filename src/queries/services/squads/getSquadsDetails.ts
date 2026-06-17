import axios from "axios";
import { getSquadsDetailsModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSquadsDetails = (userId: string) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/me`,
    params: { userId },
    headers: { "Content-Type": "application/json" },
  }).then((response) => getSquadsDetailsModel(response.data));
