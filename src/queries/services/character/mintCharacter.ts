import axios from 'axios';

import { mintCharacterModel } from '../../models';
import { CharacterMintParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';

export const mintCharacter = ({ userWallet, characterId  }: CharacterMintParams) =>
  axios({
    method: 'POST',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/mint`,
    data: {
      userWallet,
      characterId
    },
  }).then((response) => mintCharacterModel(response.data));
