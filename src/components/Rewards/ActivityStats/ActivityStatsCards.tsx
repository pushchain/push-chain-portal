import { usePushWalletContext } from '@pushchain/ui-kit';

import { Box } from '../../../blocks';
import { useGetQuests, useGetRewardActivityStatus, useGetUserRewardsDetails } from '../../../queries';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';

const ActivityStatsCards = () => {
  const { universalAccount } = usePushWalletContext();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress,
  })

  const { data: lastOneQuests } = useGetQuests({
    appId: "lastone"
  });

  const { data: ramenSwapQuests } = useGetQuests({
    appId: "ramen-swap"
  });

  const lastOneQuestIds = lastOneQuests?.data?.quests?.map((q) => q.id) || [];
  const ramenSwapQuestIds = ramenSwapQuests?.data?.quests?.map((q) => q.id) || [];

  const allActivityIds = [
    ...lastOneQuestIds,
    ...ramenSwapQuestIds,
  ];

  const { data: activityStatuses, isLoading: isLoadingActivities, refetch: refetchActivities } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: allActivityIds,
    },
    !!userDetails?.userId
  );

  return (
    <Box
      display="flex"
      gap="spacing-md"
      width="100%"
      flexDirection={{ initial: 'row', tb: 'column' }}
    >
      <AppQuestCard
        appName="Degen Chess"
        appUrl="degenchess.fun"
        description="Complete quests on degenchess.fun and claim to level up and earn rewards"
        resetTime="New Quests in 6D 23H"
        quests={lastOneQuests?.data.quests}
        activityStatus={activityStatuses}
        isLoading={isLoadingActivities}
        refetchActivities={refetchActivities}
        userId={userDetails?.userId}


      />

      <AppQuestCard
        appName="Uni Market"
        appUrl="unimarket.xyz"
        description="Complete quests on unimarket.xyz and claim to level up and earn rewards"
        resetTime="New Quests in 6D 23H"
        quests={ramenSwapQuests?.data.quests}
        activityStatus={activityStatuses}
        isLoading={isLoadingActivities}
        refetchActivities={refetchActivities}
        userId={userDetails?.userId}
        gradient="linear-gradient(241deg, rgba(221, 245, 255, 1) 0%, rgba(127, 231, 169, 1) 100%)"
        titleGradient="linear-gradient(180deg, rgba(0, 0, 0, 1) 8%, rgba(34, 132, 68, 1) 100%)"
        linkColor="#0d663b"
        blurColor="#40ee8b"
      />
    </Box>
  );
};

export default ActivityStatsCards;
