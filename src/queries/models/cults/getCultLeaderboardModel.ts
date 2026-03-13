import { CultLeaderboardApiResponse, CultLeaderboardResponse } from '../../types/cults';

export const getCultLeaderboardModel = (
  response: CultLeaderboardApiResponse
): CultLeaderboardResponse => ({
  users: response.data.entries,
  page: response.data.page,
  pageSize: response.data.limit,
  total: response.data.total,
});
