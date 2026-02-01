import axios from 'axios';

import { generateCharacterModel } from '../../models';
import { CharacterGenerateParams } from '../../types/character';
import { getSeasonThreeBaseURL } from '../../baseURL';

export const generateCharacter = ({ walletAddress }: CharacterGenerateParams) =>
  axios({
    method: 'POST',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/generate`,
    data: { walletAddress },
  }).then((response) => generateCharacterModel(response.data));
