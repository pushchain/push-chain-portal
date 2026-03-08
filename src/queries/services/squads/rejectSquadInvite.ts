import axios from "axios";
import { rejectSquadInviteModel } from "../../models";
import { RejectSquadInviteParams, AuthHeaders } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const rejectSquadInvite = ({ inviteId }: RejectSquadInviteParams, authHeaders: AuthHeaders) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/invites/${inviteId}/reject`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => rejectSquadInviteModel(response.data));
