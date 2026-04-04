import axios from "axios";

import { getSybilStatusModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSybilStatus = ({
  walletAddress,
  userId
}: {
    walletAddress: string;
    userId: string
}) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/sybil/status`,
    params: { walletAddress, userId },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => getSybilStatusModel(response.data));
