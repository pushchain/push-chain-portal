import axios from "axios";
import { getSeasonThreeBaseURL } from "../../../queries/baseURL";
import { getRewardActivityStatusModel } from "../../models";
import { RewardActivityStatusProps } from "../../types";

export const getRewardActivityStatus = (payload: RewardActivityStatusProps) => {
  // Join the activities array into a string
  const activitiesString = payload.activities.join(",");

  return axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/${payload.userId}/recent-activities?types=${activitiesString}`,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => getRewardActivityStatusModel(response.data));
};
