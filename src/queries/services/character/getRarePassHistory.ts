import axios from 'axios';
import { getRarePassHistoryModel } from '../../models';
import { GetRarePassHistoryParams, GetRarePassHistoryResponse } from '../../types/character';
import { getRewardsBaseURL } from '../../baseURL';

export const getRarePassHistory = async (
  params: GetRarePassHistoryParams
): Promise<GetRarePassHistoryResponse> => {
  const { userId, page = 1, pageSize = 20 } = params;

  const response = await axios.get(
    `${getRewardsBaseURL()}/v3/users/${userId}/rare-passes`,
    {
      params: {
        page,
        pageSize,
      },
    }
  );

  return getRarePassHistoryModel(response.data);
};
