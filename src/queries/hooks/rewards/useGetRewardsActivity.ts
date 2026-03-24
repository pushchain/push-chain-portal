import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { rewardsActivity } from '../../queryKeys';
import { getRewardsActivity } from '../../services/rewards';
import { StakeActivityResponse } from '../../types';

export const useGetRewardsActivity = (
  { userId, activityTypes }: { userId: string; activityTypes: string[] },
  config?: Partial<UseQueryOptions<Record<string, unknown>>>
) =>
  useQuery<Record<string, unknown>>({
    queryKey: [rewardsActivity, userId, activityTypes],
    queryFn: () => getRewardsActivity(userId, activityTypes),
    ...config,
  });
