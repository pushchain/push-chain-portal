import { useInfiniteQuery } from '@tanstack/react-query';

import { cultLeaderboard } from '../../queryKeys';
import { getCultLeaderboard } from '../../services';
import { CultLeaderboardParams, CultLeaderboardResponse } from '../../types';

export const useGetCultLeaderboard = ({ pageSize }: CultLeaderboardParams = {}) =>
  useInfiniteQuery<CultLeaderboardResponse>({
    queryKey: [cultLeaderboard],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getCultLeaderboard({ pageSize, pageNumber: pageParam as number }),
    getNextPageParam: ({ page, total, pageSize: size }) => {
      if ((size ?? 20) * page >= total) return null;
      return page + 1;
    },
  });
