import axios from 'axios';

import { reshuffleCharacterModel } from '../../models';
import { CharacterReshuffleParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';

export const reshuffleCharacter = ({ userWallet, characterId, feeType, feeProof }: CharacterReshuffleParams) =>
  axios({
    method: 'POST',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/reshuffle`,
    data: {
      userWallet,
      characterId,
      ...(feeType && { feeType }),
      ...(feeProof && { feeProof }),
    },
  }).then((response) => reshuffleCharacterModel(response.data));
