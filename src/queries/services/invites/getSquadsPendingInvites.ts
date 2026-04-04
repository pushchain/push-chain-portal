import axios from "axios";
import { getSquadsPendingInvitesModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSquadsPendingInvites = () =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/invites/pending`,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => getSquadsPendingInvitesModel(response.data));
