import axios from "axios";
import { sendSquadInviteModel } from "../../models";
import { SendSquadInviteParams, AuthHeaders } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const sendSquadInvite = (params: SendSquadInviteParams, authHeaders: AuthHeaders) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/${params.squadId}/invites`,
    data: {
      inviteeId: params.userId,
    },
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => sendSquadInviteModel(response.data));
