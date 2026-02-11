import axios from 'axios';

import { CharacterGenerateParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';
import { generateCharacterModel } from '../../models';

export const generateCharacter = ({ walletAddress }: CharacterGenerateParams) =>
  axios({
    method: 'POST',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/generate`,
    data: { walletAddress },
  }).then((response) => generateCharacterModel(response.data));
