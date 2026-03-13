import axios from 'axios';

import { getNextReshuffleFeeModel } from '../../models';
import { GetNextReshuffleFeeParams } from '../../types/character';
import { getSeasonThreeBaseURL } from '../../baseURL';

export const getNextReshuffleFee = ({ characterId }: GetNextReshuffleFeeParams) =>
  axios({
    method: 'GET',
    url: `${getSeasonThreeBaseURL()}/api/v3/character/next-reshuffle-fee`,
    params: {
      characterId,
    },
  }).then((response) => getNextReshuffleFeeModel(response.data.data));
