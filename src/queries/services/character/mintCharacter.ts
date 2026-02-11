import axios from 'axios';

import { mintCharacterModel } from '../../models';
import { CharacterMintParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';

export const mintCharacter = ({ walletAddress }: CharacterMintParams) =>
  axios({
    method: 'POST',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/mint`,
    data: { walletAddress },
  }).then((response) => mintCharacterModel(response.data));
