import { usePushWalletContext } from '@pushchain/ui-kit';

import { Alert, Box } from '../../../blocks';
import { useGetQuests, useGetQuestsProgress, useGetRewardActivityStatus, useGetSeasonThreeUserByWallet } from '../../../queries';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';
import { css } from 'styled-components';
import lastOneBg from '../../../../static/assets/website/rewards/last-one-bg.webp';
import ramenBg from '../../../../static/assets/website/rewards/ramen-bg.webp';
import { useState } from 'react';

const ActivityStatsCards = () => {
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

  const { data: lastOneQuestsProgress } = useGetQuestsProgress({
    appId: "lastone",
    userId: userDetails?.userId
  });

  const { data: ramenSwapQuestsProgress } = useGetQuestsProgress({
    appId: "ramen-swap",
    userId: userDetails?.userId
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

  const lastOneCompletedMap: Record<string, boolean> = {};
  lastOneQuestsProgress?.data?.quests?.forEach((q) => {
    lastOneCompletedMap[q.questId] = q.completed;
  });

  const ramenSwapCompletedMap: Record<string, boolean> = {};
  ramenSwapQuestsProgress?.data?.quests?.forEach((q) => {
    ramenSwapCompletedMap[q.questId] = q.completed;
  });

  return (
    <Box
      // backgroundColor="red"
      width="100%">
      {errorMessage &&
        <Box position='relative' margin="spacing-none spacing-none spacing-md spacing-none">
          <Alert variant='error' description={ errorMessage?.message || 'Please, try again!' } />
        </Box>}

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
            resetTime="New Quests in 6D 23H"
            quests={lastOneQuests?.data.quests}
            activityStatus={activityStatuses}
            isLoading={isLoadingActivities}
            refetchActivities={refetchActivities}
            userId={userDetails?.userId}
            completedMap={lastOneCompletedMap}
            setErrorMessage={setErrorMessage}
          />

          <AppQuestCard
            appName="Ramen Swap"
            appUrl="unimarket.xyz"
            bgImage={ramenBg}
            description="Complete quests on unimarket.xyz and claim to level up and earn rewards"
            resetTime="New Quests in 6D 23H"
            quests={ramenSwapQuests?.data.quests}
            activityStatus={activityStatuses}
            isLoading={isLoadingActivities}
            refetchActivities={refetchActivities}
            userId={userDetails?.userId}
            completedMap={ramenSwapCompletedMap}
            setErrorMessage={setErrorMessage}
            gradient="linear-gradient(241deg, rgba(221, 245, 255, 1) 0%, rgba(127, 231, 169, 1) 100%)"
            titleGradient="linear-gradient(180deg, rgba(0, 0, 0, 1) 8%, rgba(34, 132, 68, 1) 100%)"
            linkColor="#0d663b"
            blurColor="#40ee8b"
          />
          </Box>
    </Box>
  );
};

export default ActivityStatsCards;
