import { useState } from 'react';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetQuests, useGetQuestsProgress, useGetRewardsActivity, useGetSeasonThreeUserByWallet, useGetQuestActivities } from '../../../queries';
import { QuestProgress } from '../../../queries/types/quests';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';
import { fadeInCss } from '../utils/FadeIn';
import { css } from 'styled-components';
import ramenBg from '../../../../static/assets/website/rewards/ramen-bg.webp';
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

  const { data: ramenSwapQuests } = useGetQuests({
    appId: "ramen-swap"
  });

  const { data: pusdQuests } = useGetQuests({
    appId: "pusd"
  });

  const { data: ramenSwapQuestsProgress, refetch: refetchRamenProgress } = useGetQuestsProgress({
    appId: "ramen-swap",
    userId: userDetails?.userId
  });

  const { data: pusdQuestsProgress, refetch: refetchPusdProgress } = useGetQuestsProgress({
    appId: "pusd",
    userId: userDetails?.userId
  });

  const ramenSwapQuestIds = ramenSwapQuests?.data?.quests?.map((q) => q.id) || [];
  const pusdQuestIds = pusdQuests?.data?.quests?.map((q) => q.id) || [];

  const allActivityIds = [
    ...ramenSwapQuestIds,
    ...pusdQuestIds,
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
    refetchRamenProgress();
    refetchPusdProgress();
    refetchQuestActivities();
  };

  const targetDate = "2026-05-21T14:00:00Z";
  const { timeLeft } = useCountdown(targetDate);

  const buildCompletedMap = (quests: QuestProgress[] | undefined) => {
    const map: Record<string, boolean> = {};
    return map;
  };

  const ramenSwapCompletedMap = buildCompletedMap(ramenSwapQuestsProgress?.data?.quests);
  const pusdCompletedMap = buildCompletedMap(pusdQuestsProgress?.data?.quests);

  const enabledRamenSwapQuests = ramenSwapQuests?.data?.quests?.filter((q) => q.status === 'ENABLED');
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
          titleGradient="linear-gradient(180deg, #000 16.15%, #A056E2 89.06%);"
          linkColor="#4D2783"
        />

        <AppQuestCard
          appName="Ramen Swap"
          appUrl="ramenfi.xyz"
          bgImage={ramenBg}
          description=""
          resetTime={timeLeft}
          quests={enabledRamenSwapQuests}
          activityStatus={activityStatuses}
          isLoading={isLoadingActivities}
          refetchActivities={refetchAll}
          userId={userDetails?.userId}
          completedMap={ramenSwapCompletedMap}
          questProgressMap={questProgressMap}
          setErrorMessage={setErrorMessage}
          titleGradient="linear-gradient(180deg, #000 16.15%, #ED2027 89.06%);"
          linkColor="#DB2D33"
        />
      </Box>
    </Box>
  );
};

export default AppQuestSection;
