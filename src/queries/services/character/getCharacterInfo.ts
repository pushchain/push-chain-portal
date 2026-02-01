import axios from 'axios';

import { getCharacterInfoModel } from '../../models';
import { CharacterInfoParams } from '../../types/character';
import { getSeasonThreeBaseURL } from '../../baseURL';

export const getCharacterInfo = ({ walletAddress }: CharacterInfoParams) =>
  axios({
    method: 'GET',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/info?userWallet=${walletAddress}`,
  }).then((response) => getCharacterInfoModel(response.data));
