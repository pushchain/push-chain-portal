import { usePushWalletContext } from '@pushchain/ui-kit';

import { Alert, Box } from '../../../blocks';
import { useGetQuests, useGetQuestsProgress, useGetRewardsActivity, useGetSeasonThreeUserByWallet, useGetQuestActivities } from '../../../queries';
import { QuestProgress } from '../../../queries/types/quests';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';
import { fadeInCss } from '../utils/FadeIn';
import { css } from 'styled-components';
import lastOneBg from '../../../../static/assets/website/rewards/last-one-bg.webp';
import ramenBg from '../../../../static/assets/website/rewards/ramen-bg.webp';
import { useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';

const AppQuestSection = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { universalAccount } = usePushWalletContext('wallet1');

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  })

  const { data: lastOneQuests } = useGetQuests({
    appId: "lastone"
  });

  const { data: ramenSwapQuests } = useGetQuests({
    appId: "ramen-swap"
  });

  const { data: lastOneQuestsProgress, refetch: refetchLastOneProgress } = useGetQuestsProgress({
    appId: "lastone",
    userId: userDetails?.userId
  });

  const { data: ramenSwapQuestsProgress, refetch: refetchRamenProgress } = useGetQuestsProgress({
    appId: "ramen-swap",
    userId: userDetails?.userId
  });

  const lastOneQuestIds = lastOneQuests?.data?.quests?.map((q) => q.id) || [];
  const ramenSwapQuestIds = ramenSwapQuests?.data?.quests?.map((q) => q.id) || [];

  const allActivityIds = [
    ...lastOneQuestIds,
    ...ramenSwapQuestIds,
  ];

  const { data: activityStatuses, isLoading: isLoadingActivities, refetch: refetchActivities } = useGetRewardsActivity(
    {
      userId: userDetails?.userId as string,
      activityTypes: allActivityIds,
    },
    { enabled: !!userDetails?.userId && allActivityIds.length > 0 }
  );

  const { data: questActivitiesData, refetch: refetchQuestActivities } = useGetQuestActivities(userDetails?.userId);

  // Build a flat map: activityTypeId -> { progress, status }
  const questProgressMap: Record<string, { progress: number; status: string }> = {};
  questActivitiesData?.activities?.forEach((app) => {
    app.quests.forEach((q) => {
      questProgressMap[q.activityTypeId] = { progress: q.progress, status: q.status };
    });
  });

  const refetchAll = () => {
    refetchActivities();
    refetchLastOneProgress();
    refetchRamenProgress();
    refetchQuestActivities();
  };

  const targetDate = "2026-04-17T14:00:00Z";
  const { timeLeft } = useCountdown(targetDate);

  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

  const buildCompletedMap = (quests: QuestProgress[] | undefined) => {
    const map: Record<string, boolean> = {};
    // disable completion status temp
    // quests?.forEach((q) => {
    //   const activityCompleted = activityStatuses?.[q.questId]?.status === 'COMPLETED';
    //   if (activityCompleted) {
    //     map[q.questId] = true;
    //   } else if (q.frequency === 'REPEATABLE' && q.completed && q.completedAt) {
    //     const timeSinceCompleted = Date.now() - new Date(q.completedAt).getTime();
    //     map[q.questId] = timeSinceCompleted < ONE_WEEK_MS;
    //   } else {
    //     map[q.questId] = q.completed;
    //   }
    // });
    return map;
  };

  const lastOneCompletedMap = buildCompletedMap(lastOneQuestsProgress?.data?.quests);
  const ramenSwapCompletedMap = buildCompletedMap(ramenSwapQuestsProgress?.data?.quests);

  const hiddenLastOneQuestIds = ['lastone_win_50pc_claim', 'lastone_win_3_rounds_claim', 'lastone_participate_25_rounds'];
  const enabledLastOneQuests = lastOneQuests?.data?.quests?.filter((q) => q.status === 'ENABLED' && !hiddenLastOneQuestIds.includes(q.id));
  const enabledRamenSwapQuests = ramenSwapQuests?.data?.quests?.filter((q) => q.status === 'ENABLED');

  return (
    <Box
      width="100%"
      css={css`${fadeInCss(100)}`}>
      {/*{errorMessage &&
        <Box position='relative' margin="spacing-none spacing-none spacing-md spacing-none">
          <Alert variant='error' description={ errorMessage?.message || 'Please, try again!' } />
        </Box>}*/}

        <Box
          display="flex"
          gap="spacing-md"
          width="100%"
          flexDirection={{ initial: 'row', tb: 'column' }}
          css={css`
              box-sizing: border-box;
              `}
        >
            <AppQuestCard
              appName="Last One"
              appUrl="lastone.fun"
              bgImage={lastOneBg}
              description="Complete quests on lastone.fun and claim to level up and earn rewards"
              resetTime={timeLeft}
              quests={enabledLastOneQuests}
              activityStatus={activityStatuses}
              isLoading={isLoadingActivities}
              refetchActivities={refetchAll}
              userId={userDetails?.userId}
              completedMap={lastOneCompletedMap}
              questProgressMap={questProgressMap}
              setErrorMessage={setErrorMessage}
              linkColor="#653468"
              titleGradient='linear-gradient(180deg, #000 16.15%, #6B30B2 89.06%);'
            />

            <AppQuestCard
              appName="Ramen Swap"
              appUrl="ramenfi.xyz"
              bgImage={ramenBg}
              description="Complete quests on ramenfi.xyz and claim to level up and earn rewards"
              resetTime={timeLeft}
              quests={enabledRamenSwapQuests}
              activityStatus={activityStatuses}
              isLoading={isLoadingActivities}
              refetchActivities={refetchAll}
              userId={userDetails?.userId}
              completedMap={ramenSwapCompletedMap}
              questProgressMap={questProgressMap}
              setErrorMessage={setErrorMessage}
              gradient="linear-gradient(241deg, rgba(221, 245, 255, 1) 0%, rgba(127, 231, 169, 1) 100%)"
              titleGradient="linear-gradient(180deg, #000 16.15%, #ED2027 89.06%)"
              linkColor="#DB2D33"
              blurColor="#40ee8b"
            />
          </Box>
    </Box>
  );
};

export default AppQuestSection;
