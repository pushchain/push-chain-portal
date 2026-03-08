import axios from "axios";
import { getRewardsBaseURL } from "../../../queries/baseURL";
import { claimSeasonThreeModel } from "../../../queries/models/rewards";
import { ClaimSeasonThreePayload } from "../../types";

export const claimSeasonThree = (payload: ClaimSeasonThreePayload) =>
  axios({
    method: "POST",
    url: `${getRewardsBaseURL()}/v2/users/discord-reverify`,
    data: {
      userWallet: payload.userWallet,
      discordEmail: payload.discordEmail,
      discordUsername: payload.discordUsername,
      data: payload.data,
      verificationProof: payload.verificationProof,
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => claimSeasonThreeModel(response.data));
