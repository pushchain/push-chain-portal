import axios from "axios";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { resolveInviteLinkModel } from "../../models";
import { ResolveInviteLinkResponse } from "../../types/invites";

export const resolveInviteLink = (userId: string): Promise<ResolveInviteLinkResponse> =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/invites/resolve/${userId}`,
  }).then((res) => resolveInviteLinkModel(res.data));
