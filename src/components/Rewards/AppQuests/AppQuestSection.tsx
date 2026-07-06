import { useState } from 'react';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetQuests, useGetQuestsProgress, useGetRewardsActivity, useGetSeasonThreeUserByWallet, useGetQuestActivities } from '../../../queries';
import { QuestProgress } from '../../../queries/types/quests';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';
import { fadeInCss } from '../utils/FadeIn';
import { css } from 'styled-components';
import zappiBg from '../../../../static/assets/website/rewards/zappi-bg.webp';
import pusdBg from '../../../../static/assets/website/rewards/pusd-bg.webp';
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

  const { data: app1Quests } = useGetQuests({
    appId: "zappi"
  });

  const { data: app2Quests } = useGetQuests({
    appId: "cetra"
  });

  const { data: app1QuestsProgress, refetch: refetchApp1QuestsProgress } = useGetQuestsProgress({
    appId: "zappi",
    userId: userDetails?.userId
  });

  const { data: app2QuestsProgress, refetch: refetchApp2QuestsProgress } = useGetQuestsProgress({
    appId: "cetra",
    userId: userDetails?.userId
  });

  const filteredApp1QuestIds = app1Quests?.data?.quests?.filter((q) => q.status == 'ENABLED') || [];
  const filteredApp2QuestIds = app2Quests?.data?.quests?.filter((q) => q.status == 'ENABLED') || [];

  const app1QuestIds = filteredApp1QuestIds?.map((q) => q.id) || [];
  const app2QuestIds = filteredApp2QuestIds?.map((q) => q.id) || [];

  const allActivityIds = [
    ...app1QuestIds,
    ...app2QuestIds,
  ];

  const { data: activityStatuses, isLoading: isLoadingActivities, refetch: refetchActivities } = useGetRewardsActivity(
    {
      userId: userDetails?.userId as string,
      activityTypes: allActivityIds,
    },
    { enabled: !!userDetails?.userId && allActivityIds.length > 0 }
  );

  const { data: questActivitiesData, refetch: refetchQuestActivities } = useGetQuestActivities(userDetails?.userId);

  const questProgressMap: Record<string, { progress: number; status: string }> = {};
  questActivitiesData?.activities?.forEach((app) => {
    app.quests.forEach((q) => {
      questProgressMap[q.activityTypeId] = { progress: q.progress, status: q.status };
    });
  });

  const refetchAll = () => {
    refetchActivities();
    refetchApp1QuestsProgress();
    refetchApp2QuestsProgress();
    refetchQuestActivities();
  };

  const targetDate = "2026-07-07T14:00:00Z";
  const { timeLeft } = useCountdown(targetDate);

  const buildCompletedMap = (quests: QuestProgress[] | undefined) => {
    const map: Record<string, boolean> = {};
    return map;
  };

  const app1CompletedMap = buildCompletedMap(app1QuestsProgress?.data?.quests);
  const app2CompletedMap = buildCompletedMap(app2QuestsProgress?.data?.quests);

  const enabledApp1Quests = app1Quests?.data?.quests?.filter((q) => q.status === 'ENABLED');
  const enabledApp2Quests = app2Quests?.data?.quests?.filter((q) => q.status === 'ENABLED');

  return (
    <Box
      width="100%"
      css={css`${fadeInCss(100)}`}>
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
          appName="Zappi.to"
          appUrl="zappi.to"
          bgImage={zappiBg}
          description=""
          resetTime={timeLeft}
          quests={enabledApp1Quests}
          activityStatus={activityStatuses}
          isLoading={isLoadingActivities}
          refetchActivities={refetchAll}
          userId={userDetails?.userId}
          completedMap={app1CompletedMap}
          questProgressMap={questProgressMap}
          setErrorMessage={setErrorMessage}
          titleGradient="linear-gradient(180deg, #000 16.15%, #730BE3 89.06%);"
          linkColor="#4D2783"
        />

        <AppQuestCard
          appName="Cetra.app"
          appUrl="cetra.app"
          bgImage={pusdBg}
          description=""
          resetTime={timeLeft}
          quests={enabledApp2Quests}
          activityStatus={activityStatuses}
          isLoading={isLoadingActivities}
          refetchActivities={refetchAll}
          userId={userDetails?.userId}
          completedMap={app2CompletedMap}
          questProgressMap={questProgressMap}
          setErrorMessage={setErrorMessage}
          titleGradient="linear-gradient(180deg, #000 16.15%, #6B30B2 89.06%);"
          linkColor="#653468"
        />
      </Box>
    </Box>
  );
};

export default AppQuestSection;
