import { useQuery } from '@tanstack/react-query';
import { getRarePassHistory } from '../../services/character/getRarePassHistory';
import { GetRarePassHistoryParams } from '../../types/character';
import { rarePassHistory } from '../../queryKeys';

export const useGetRarePassHistory = (params: GetRarePassHistoryParams) => {
  return useQuery({
    queryKey: [rarePassHistory, params.userId, params.page, params.pageSize],
    queryFn: () => getRarePassHistory(params),
    enabled: !!params.userId,
  });
};
