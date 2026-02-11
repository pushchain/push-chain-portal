import axios from 'axios';

import { reshuffleCharacterModel } from '../../models';
import { CharacterReshuffleParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';

export const reshuffleCharacter = ({ walletAddress }: CharacterReshuffleParams) =>
  axios({
    method: 'POST',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/reshuffle`,
    data: { walletAddress },
  }).then((response) => reshuffleCharacterModel(response.data));
