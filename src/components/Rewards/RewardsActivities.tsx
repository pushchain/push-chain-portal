import HeroBannerCards from './HeroBanner/HeroBannerCards';
import ActivityStatsCards from './ActivityStats/ActivityStatsCards';
import BossQuestsSection from './BossQuests/BossQuestsSection';
import { Box, Lock, LockFilled, Text } from '../../blocks';
import { DailyRewardsSection } from './DailyRewards/DailyRewardsSection';
import { StreakDays } from './StreakDays';
import { css } from 'styled-components';
import { LevelUp } from './LevelUp';
import { useRewardsContext } from '../../context/rewardsContext';

const RewardsActivities = () => {
  const { isLocked, isLockedStatusLoading } = useRewardsContext();

  const rewardsLocked = isLocked && !isLockedStatusLoading;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-xl">

      <HeroBannerCards />

      {rewardsLocked &&
        <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        margin={{initial: "spacing-sm spacing-none", lp: "spacing-none"}}
        gap="spacing-xxs"
        css={css`
          z-index: 999;

          &:before,
          &:after {
            content: "";
            flex: 1 1;
            border-bottom: 1px solid #4F4072;
            margin: auto;
          }
          &:before {
            margin-right: var(--s3);
          }
          &:after {
            margin-left: var(--s3);
          }
        `}
      >
        <LockFilled size={28} color="icon-tertiary" />
        <Text variant="bs-semibold" color="#FFFFFF">
          Login & Verify to Unlock Quests
        </Text>
      </Box>}

      <Box
        display="flex"
        flexDirection={{ initial: 'row', tb: 'column' }}
        alignItems="stretch"
        gap="spacing-md"
        width="100%"
        height={{ initial: '230px', tb: 'auto' }}
        css={css`
        box-sizing: border-box;
        & > * {
          min-width: 0;
        }
        `}>
        <LevelUp />
        <StreakDays />
        <DailyRewardsSection />
      </Box>

      <ActivityStatsCards />

      <BossQuestsSection />
    </Box>
  );
};

export default RewardsActivities;
