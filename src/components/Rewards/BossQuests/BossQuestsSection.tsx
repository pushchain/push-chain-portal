import { useState } from 'react';
import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import BossQuestCard from './BossQuestCard';
import { useGetQuests, useGetQuestsProgress, useGetRarePassHistory, useGetRewardActivityStatus, useGetRewardsActivity, useGetSeasonThreeUserByWallet } from '../../../queries';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';
import { useRewardStatus } from '../../../context/rewardStatusContext';

import { Alert, Box, Quests, Text } from '../../../blocks';
import contentBossQuestImg from '../../../../static/assets/website/rewards/ContentBossQuest.webp';
import rarePassBossQuestImg from '../../../../static/assets/website/rewards/RarePassBossQuest.webp';
import fiveBossQuestsImg from '../../../../static/assets/website/rewards/FiveBossQuests.webp';
import { useCountdown } from '../hooks/useCountdown';
import { fadeInCss } from '../utils/FadeIn';

const BossQuestsSection = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { universalAccount } = usePushWalletContext('wallet1');
  const { isLocked, isLockedStatusLoading } = useRewardStatus();


  const rewardsLocked = (isLocked && !isLockedStatusLoading);

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { data: bossQuests } = useGetQuests({
    appId:'boss-quests'
  })

  const bossQuestIds = bossQuests?.data?.quests?.map((q) => q.id) || [];

  const { data: activityStatuses, isLoading: isLoadingActivities, refetch: refetchActivities } = useGetRewardsActivity(
    {
      userId: userDetails?.userId as string,
      activityTypes: bossQuestIds,
    },
    { enabled: !!userDetails?.userId && bossQuestIds.length > 0 }
  );

  const { data: bossQuestsProgress } = useGetQuestsProgress({
    appId: "boss-quests",
    userId: userDetails?.userId,
  });

  const { data: lastOneQuestsProgress } = useGetQuestsProgress({
    appId: "lastone",
    userId: userDetails?.userId
  });

  const { data: bridgeAppQuestsProgress } = useGetQuestsProgress({
    appId: "push-chain-bridge",
    userId: userDetails?.userId
  });

  const { data: rarePassHistory, isLoading: isLoadingHistory } = useGetRarePassHistory({
    userId: userDetails?.userId ?? '',
  });

  const rarePassesProgress = (rarePassHistory?.summary?.currentBalance?.rareActiveCount + rarePassHistory?.summary?.currentBalance?.rareDormantCount);

  const questsProgress = Math.max(lastOneQuestsProgress?.data?.progressPercentage ?? 0,bridgeAppQuestsProgress?.data?.progressPercentage ?? 0);

  const bossCompletedMap: Record<string, boolean> = {};
  bossQuestsProgress?.data?.quests?.forEach((q) => {
    bossCompletedMap[q.questId] = q.completed;
  });

  const targetDate = "2026-04-30T14:00:00Z";
  const { timeLeft } = useCountdown(targetDate);

  const finishFiveQuestDescription = "Earn XP by completing 5 quests on a single app in a week";
  const holdFiveDescription = "Earn a Rare Pass by collecting 5 Rare Passes during Season 3";

  return (
    <Box width={"100%"} css={css`${fadeInCss(200)}`}>
      {errorMessage &&
        <Box position='relative' margin="spacing-none spacing-none spacing-md spacing-none">
          <Alert variant='error' description={ errorMessage?.message || 'Please, try again!' } />
        </Box>}

    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="spacing-xs"
      padding="spacing-md"
      position="relative"
      borderRadius="radius-lg"
      width="100%"
      css={css`
        box-shadow:
          inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
          inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        flex: 1;
        box-sizing: border-box;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: 32px 32px;
          background: conic-gradient(
            from 90deg at 100% 100%,
            rgba(171, 70, 248, 0.4) 12%,
            rgba(171, 70, 248, 0) 37%,
            rgba(171, 70, 248, 0.4) 62%,
            rgba(171, 70, 248, 0) 87%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 1;
          pointer-events: none;
        }
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-md"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="spacing-xs"
        >
          <Box width="48px" height="48px">
            <Quests />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="spacing-none"
            css={css`
              flex: 1;
            `}
          >
            <Box>
              <Text
                variant="h3-semibold"
                css={css`
                  background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 1) 50%,
                    rgba(201, 104, 231, 1) 100%
                  );
                  -webkit-background-clip: text;
                  background-clip: text;
                  -webkit-text-fill-color: transparent;
                  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  white-space: nowrap;
                `}
              >
                Boss Quests
              </Text>
            </Box>

            <Text variant="bm-regular" color="text-secondary">
              Bag the rarest rewards in Push Chain Testnet Donut by completing boss quests
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ initial: 'row', tb: 'column' }}
          alignItems="flex-start"
          alignSelf="stretch"
          gap="spacing-sm"
          css={css`
            height: auto;
            & > * {
              min-width: 0;
            }
          `}
        >
          <BossQuestCard
            title="Create content and tag @PushChain on X"
            description="Post a meme, thread or video about Push Chain"
            resetTime={timeLeft}
            unlocks={{ rarePass: true }}
            isLocked={false}
            ctaText="10x Weekly winners on @PushChain"
            ctaLink="https://x.com/PushChain"
            image={contentBossQuestImg}
            />

          {bossQuests?.data.quests.filter((q) => q.status === 'ENABLED').map((item) => {
            const isRarePass = item.baseXP == 0 && item.basePoints == 0;
            return (
              <BossQuestCard
                key={item.id}
                questId={item.id}
                title={item?.title}
                description={isRarePass ? holdFiveDescription :  finishFiveQuestDescription}
                resetTime={!isRarePass && timeLeft}
                progress={isRarePass ? rarePassesProgress : questsProgress}
                maxProgress={isRarePass ? 5 : 100}
                unlocks={{ rarePass: isRarePass, xp: (item.baseXP > 0 && item?.baseXP) }}
                isLocked={rewardsLocked}
                isLockedStatusLoading={isLockedStatusLoading}
                ctaText="Locked"
                activityStatus={activityStatuses}
                isLoadingActivity={isLoadingActivities}
                refetchActivities={refetchActivities}
                userId={userDetails?.userId}
                completedMap={bossCompletedMap}
                icon={true}
                image={isRarePass ? rarePassBossQuestImg : fiveBossQuestsImg}
                setErrorMessage={setErrorMessage}
                imageFullWidth
              />
            );
          })}
        </Box>
      </Box>
     </Box>
    </Box>
  );
};

export default BossQuestsSection;
