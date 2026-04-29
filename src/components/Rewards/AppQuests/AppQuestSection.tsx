import { useState } from 'react';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetQuests, useGetQuestsProgress, useGetRewardsActivity, useGetSeasonThreeUserByWallet, useGetQuestActivities } from '../../../queries';
import { QuestProgress } from '../../../queries/types/quests';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';
import { fadeInCss } from '../utils/FadeIn';
import { css } from 'styled-components';
import unichessBg from '../../../../static/assets/website/rewards/Degen-Chess-bg.webp';
import pushNinjaBg from '../../../../static/assets/website/rewards/Push-Ninja-bg.webp';
// import moleSwapBg from '../../../../static/assets/website/rewards/moleswap-bg.webp';
import { useCountdown } from '../hooks/useCountdown';

import { Box } from '../../../blocks';


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

  const { data: unichessQuests } = useGetQuests({
    appId: "unichess"
  });

  // const { data: moleSwapQuests } = useGetQuests({
  //   appId: "moleswap"
  // });

  const { data: pushNinjaQuests } = useGetQuests({
    appId: "push-ninja"
  });

  const { data: unichessQuestsProgress, refetch: refetchUnichessProgress } = useGetQuestsProgress({
    appId: "unichess",
    userId: userDetails?.userId
  });

  const { data: pushNinjaQuestsProgress, refetch: refetchPushNinjaProgress } = useGetQuestsProgress({
    appId: "push-ninja",
    userId: userDetails?.userId
  });

  // const { data: moleSwapQuestsProgress, refetch: refetchMoleProgress } = useGetQuestsProgress({
  //   appId: "moleswap",
  //   userId: userDetails?.userId
  // });

  const unichessQuestIds = unichessQuests?.data?.quests?.map((q) => q.id) || [];
  const pushNinjaQuestIds = pushNinjaQuests?.data?.quests?.map((q) => q.id) || [];

  const allActivityIds = [
    ...unichessQuestIds,
    ...pushNinjaQuestIds,
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
    refetchUnichessProgress();
    refetchPushNinjaProgress();
    refetchQuestActivities();
  };

  const targetDate = "2026-05-07T14:00:00Z";
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

  const unichessCompletedMap = buildCompletedMap(unichessQuestsProgress?.data?.quests);
  const pushNinjaCompletedMap = buildCompletedMap(pushNinjaQuestsProgress?.data?.quests);

  const enabledUnichessQuests = unichessQuests?.data?.quests?.filter((q) => q.status === 'ENABLED');
  const enabledPushNinjaQuests = pushNinjaQuests?.data?.quests?.filter((q) => q.status === 'ENABLED');

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
              appName="Degen Chess"
              appUrl="degenchess.fun"
              bgImage={unichessBg}
              description=""
              resetTime={timeLeft}
              quests={enabledUnichessQuests}
              activityStatus={activityStatuses}
              isLoading={isLoadingActivities}
              refetchActivities={refetchAll}
              userId={userDetails?.userId}
              completedMap={unichessCompletedMap}
              questProgressMap={questProgressMap}
              setErrorMessage={setErrorMessage}
              linkColor="#40278D"
              titleGradient="linear-gradient(180deg, #000 16.15%, #40278D 89.06%)"
        />


            <AppQuestCard
              appName="Push Ninja"
              appUrl="pushninja.fun"
              bgImage={pushNinjaBg}
              description=""
              resetTime={timeLeft}
              quests={enabledPushNinjaQuests}
              activityStatus={activityStatuses}
              isLoading={isLoadingActivities}
              refetchActivities={refetchAll}
              userId={userDetails?.userId}
              completedMap={pushNinjaCompletedMap}
              questProgressMap={questProgressMap}
              setErrorMessage={setErrorMessage}
              titleGradient="linear-gradient(180deg, #000 16.15%, #B53838 89.06%)"
              linkColor="#771B1D"
        />

        {/*<AppQuestCard
          appName="MoleSwap"
          appUrl="moleswap.com"
          bgImage={moleSwapBg}
          description="Complete quests on moleswap.com and claim to level up and earn rewards"
          resetTime={timeLeft}
          quests={enabledMoleSwapQuests}
          activityStatus={activityStatuses}
          isLoading={isLoadingActivities}
          refetchActivities={refetchAll}
          userId={userDetails?.userId}
          completedMap={moleSwapCompletedMap}
          questProgressMap={questProgressMap}
          setErrorMessage={setErrorMessage}
          gradient="linear-gradient(241deg, rgba(221, 245, 255, 1) 0%, rgba(127, 231, 169, 1) 100%)"
          titleGradient="linear-gradient(180deg, #000 16.15%, #5562F3 89.06%)"
          linkColor="#184581"
          blurColor="#80D597"
        />*/}
          </Box>
    </Box>
  );
};

export default AppQuestSection;
