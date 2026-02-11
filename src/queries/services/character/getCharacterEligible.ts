import axios from "axios";

import { getCharacterEligibleModel } from "../../models";
import { CharacterEligibleParams } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getCharacterEligible = ({ userWallet }: CharacterEligibleParams) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/character/eligible?userWallet=${userWallet}`,
  }).then((response) => getCharacterEligibleModel(response.data));
