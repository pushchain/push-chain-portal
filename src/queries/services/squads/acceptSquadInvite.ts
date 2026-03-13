import axios from "axios";
import { acceptSquadInviteModel } from "../../models";
import { AcceptSquadInviteParams, AuthHeaders } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const acceptSquadInvite = ({ inviteId }: AcceptSquadInviteParams, authHeaders: AuthHeaders) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/invites/${inviteId}/accept`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => acceptSquadInviteModel(response.data));
