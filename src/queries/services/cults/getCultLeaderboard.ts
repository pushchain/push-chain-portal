import axios from 'axios';

import { CultLeaderboardParams } from '../../types';
import { getSeasonThreeBaseURL } from '../../baseURL';
import { getCultLeaderboardModel } from '../../models';

export const getCultLeaderboard = ({ pageSize, pageNumber }: CultLeaderboardParams) =>
  axios({
    method: 'GET',
    url: `${getSeasonThreeBaseURL()}/api/v3/cult/leaderboard`,
    params: {
      page: pageNumber || 1,
      limit: pageSize || 20,
    },
  }).then((response) => getCultLeaderboardModel(response.data));
