import axios from 'axios';

import { GetUserCultStatusParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';
import { getUserCultStatusModel } from '../../models';

export const getUserCultStatus = (params: GetUserCultStatusParams) => {
  const query = 'userId' in params ? `userId=${params.userId}` : `wallet=${params.wallet}`;

  return axios({
    method: 'GET',
    url: `${getSeasonThreeBaseURL()}/api/v3/cult/member-status?${query}`,
  }).then((response) => getUserCultStatusModel(response.data));
};
