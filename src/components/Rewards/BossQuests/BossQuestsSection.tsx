import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';
import { Box, Quests, Text } from '../../../blocks';
import BossQuestCard from './BossQuestCard';
import { useGetQuests, useGetQuestsProgress, useGetRewardActivityStatus, useGetSeasonThreeUserByWallet } from '../../../queries';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

const BossQuestsSection = () => {
  const { universalAccount } = usePushWalletContext();

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

  const { data: activityStatuses, isLoading: isLoadingActivities, refetch: refetchActivities } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: bossQuestIds,
    },
    !!userDetails?.userId && bossQuestIds.length > 0
  );

  const { data: bossQuestsProgress } = useGetQuestsProgress({
    appId: "boss-quests",
    userId: userDetails?.userId,
  });

  const bossCompletedMap: Record<string, boolean> = {};
  bossQuestsProgress?.data?.quests?.forEach((q) => {
    bossCompletedMap[q.questId] = q.completed;
  });

  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="spacing-xs"
      padding="spacing-md"
      position="relative"
      borderRadius="radius-lg"
      css={css`
        box-shadow:
          inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
          inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        flex: 1;

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
          `}
        >
          <BossQuestCard
            title="Create content and tag @PushChain on X"
            description="Post a meme, thread or video about Push Chain"
            resetTime="Resets in 6D 23H"
            unlocks={{ rarePass: true }}
            isLocked={false}
            ctaText="10x Weekly winners on @PushChain"
          />

          {/*<BossQuestCard
            title="Complete and Claim 25 App Quests"
            description="Earn a Rare Pass by completing 25 quests on any apps"
            resetTime="Resets in 29D 23H"
            progress={0}
            maxProgress={25}
            unlocks={{ rarePass: true, xp: 250 }}
            isLocked={true}
            ctaText="Locked"
          />

          <BossQuestCard
            title="Obtain & Scratch a total of 5 Rare Passes"
            description="Earn a Rare Pass by scratching 5 Rare Passes during Season 3"
            resetTime="Resets in 29D 23H"
            progress={0}
            maxProgress={5}
            unlocks={{ rarePass: true }}
            isLocked={true}
            ctaText="Locked"
          />*/}
          {bossQuests?.data.quests.map((item) => (
            <BossQuestCard
              key={item.id}
              questId={item.id}
              title={item?.title}
              description={item.description}
              resetTime="Resets in 29D 23H"
              progress={0}
              maxProgress={25}
              unlocks={{ rarePass: (item.baseXP == 0 && item.basePoints == 0), xp: (item.baseXP > 0 && item?.baseXP) }}
              isLocked={true}
              ctaText="Locked"
              activityStatus={activityStatuses}
              isLoadingActivity={isLoadingActivities}
              refetchActivities={refetchActivities}
              userId={userDetails?.userId}
              completedMap={bossCompletedMap}
              icon={true}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BossQuestsSection;
