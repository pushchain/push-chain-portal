import { useState } from 'react';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetQuests, useGetQuestsProgress, useGetRewardsActivity, useGetSeasonThreeUserByWallet, useGetQuestActivities } from '../../../queries';
import { QuestProgress } from '../../../queries/types/quests';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';
import { fadeInCss } from '../utils/FadeIn';
import { css } from 'styled-components';
import lastOneBg from '../../../../static/assets/website/rewards/last-one-bg.webp';
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

  const { data: lastOneQuests } = useGetQuests({
    appId: "lastone"
  });

  const { data: pusdQuests } = useGetQuests({
    appId: "pusd"
  });

  const { data: lastOneQuestsProgress, refetch: refetchLastOneProgress } = useGetQuestsProgress({
    appId: "lastone",
    userId: userDetails?.userId
  });

  const { data: pusdQuestsProgress, refetch: refetchPusdProgress } = useGetQuestsProgress({
    appId: "pusd",
    userId: userDetails?.userId
  });

  const filteredLastOneQuestIds = lastOneQuests?.data?.quests?.filter((q) => q.status == 'ENABLED') || [];
  const filteredPusdQuestIds = pusdQuests?.data?.quests?.filter((q) => q.status == 'ENABLED') || [];

  const lastOneQuestIds = filteredLastOneQuestIds?.map((q) => q.id) || [];
  const pusdQuestIds = filteredPusdQuestIds?.map((q) => q.id) || [];

  const allActivityIds = [
    ...lastOneQuestIds,
    ...pusdQuestIds,
  ];

  console.log(lastOneQuestIds, pusdQuestIds, 'kokokok')

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
    refetchLastOneProgress();
    refetchPusdProgress();
    refetchQuestActivities();
  };

  const targetDate = "2026-07-07T14:00:00Z";
  const { timeLeft } = useCountdown(targetDate);

  const buildCompletedMap = (quests: QuestProgress[] | undefined) => {
    const map: Record<string, boolean> = {};
    return map;
  };

  const lastOneCompletedMap = buildCompletedMap(lastOneQuestsProgress?.data?.quests);
  const pusdCompletedMap = buildCompletedMap(pusdQuestsProgress?.data?.quests);

  const enabledlastOneQuests = lastOneQuests?.data?.quests?.filter((q) => q.status === 'ENABLED');
  const enabledPusdQuests = pusdQuests?.data?.quests?.filter((q) => q.status === 'ENABLED');

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
          appName="PUSD Stablecoin"
          appUrl="pusd.push.org"
          bgImage={pusdBg}
          description=""
          resetTime={timeLeft}
          quests={enabledPusdQuests}
          activityStatus={activityStatuses}
          isLoading={isLoadingActivities}
          refetchActivities={refetchAll}
          userId={userDetails?.userId}
          completedMap={pusdCompletedMap}
          questProgressMap={questProgressMap}
          setErrorMessage={setErrorMessage}
          titleGradient="linear-gradient(180deg, #000 16.15%, #730BE3 89.06%);"
          linkColor="#4D2783"
        />

        <AppQuestCard
          appName="Last One"
          appUrl="lastone.fun"
          bgImage={lastOneBg}
          description=""
          resetTime={timeLeft}
          quests={enabledlastOneQuests}
          activityStatus={activityStatuses}
          isLoading={isLoadingActivities}
          refetchActivities={refetchAll}
          userId={userDetails?.userId}
          completedMap={lastOneCompletedMap}
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
