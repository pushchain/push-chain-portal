import axios from "axios";
import { getSquadsPendingInvitesModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders } from "../../types";

export const getSquadsPendingInvites = (authHeaders: AuthHeaders) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/invites/pending`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => getSquadsPendingInvitesModel(response.data));
