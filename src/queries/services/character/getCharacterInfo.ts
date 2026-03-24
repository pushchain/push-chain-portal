import axios from 'axios';

import { CharacterInfoParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';
import { getCharacterInfoModel } from '../../models';

export const getCharacterInfo = ({ walletAddress }: CharacterInfoParams) =>
  axios({
    method: 'GET',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/info?userWallet=${walletAddress}`,
  }).then((response) => getCharacterInfoModel(response.data));
