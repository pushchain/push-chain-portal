import axios from "axios";
import { getSquadsPendingInvitesModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSquadsPendingInvites = (userId: string) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/invites/pending`,
    params: { userId },
    headers: { "Content-Type": "application/json" },
  }).then((response) => getSquadsPendingInvitesModel(response.data));
