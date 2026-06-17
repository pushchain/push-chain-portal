import { useQuery } from '@tanstack/react-query';
import { questActivities } from '../../queryKeys';
import { getQuestActivities, QuestActivitiesResponse } from '../../services/rewards/getQuestActivities';

export const useGetQuestActivities = (userId: string | undefined) =>
  useQuery<QuestActivitiesResponse>({
    queryKey: [questActivities, userId],
    queryFn: () => getQuestActivities(userId as string),
    enabled: !!userId,
  });
