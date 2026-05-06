import { FC } from 'react';
import { css } from 'styled-components';

import { ArrowDown, Box, Text } from '../../../blocks';
import { StatsCards } from './LoggedInVerified/StatsCards';
import { ReferralCard } from './LoggedInVerified/ReferralCard';
import { device } from '../../../config/globals';
import QuestBannerCard from '../HeroBanner/QuestBannerCard';
import { fadeInCss } from '../utils/FadeIn';
import { useCountdown } from '../hooks/useCountdown';
import { BONUS_QUEST_DEADLINE } from '../RewardsUpdatedDashboard';

const pad = (n: number) => String(n).padStart(2, '0');

export const RenderLoggedInVerifiedState: FC = () => {
  const { timeLeft, isExpired: isBonusExpired } = useCountdown(BONUS_QUEST_DEADLINE);
  const countdownString = `${pad(timeLeft.days)}D : ${pad(timeLeft.hours)}H : ${pad(timeLeft.minutes)}M : ${pad(timeLeft.seconds)}S`;

  return (
    <Box
      width="100%"
      borderRadius="radius-lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={{ initial: "spacing-md", ml: "spacing-sm"}}
      gap={{ initial: "spacing-md", ml: "spacing-sm" }}
      position="relative"
      css={css`
        background: rgba(0, 0, 0, 0.1);
        box-shadow:
          2.8px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
          1.9px 1.7px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(6px);
        isolation: isolate;
        border: 1px solid rgba(171, 70, 248, 0.40);
        box-sizing: border-box;
        ${fadeInCss(0)}
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={{ initial: "spacing-lg", ml: "spacing-sm"}}
        width="100%"
        css={css`
          z-index: 1;
        `}
      >
        <Box
          display="flex"
          alignItems="flex-start"
          gap="spacing-md"
          width="100%"
          flexDirection={{ initial: 'row', tb: 'column' }}
          css={css`
            min-height: 420px;
            max-height: 420px;
            overflow: hidden;
            flex: 1;

            @media (max-width: 1200px) and (min-width: 769px) {
              min-height: initial;
              max-height: initial;
              overflow: visible;
            }

            @media ${device.tablet} {
              height: auto;
              min-height: initial;
              max-height: initial;
              overflow: visible;
            }
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={{ initial: "spacing-md", ml: "spacing-sm"}}
            position="relative"
            height="-webkit-fill-available"
            width="100%"
            css={css`
              flex: 1;
              min-height: 0;
              overflow: hidden;
            `}
          >
            <StatsCards />
            <ReferralCard />
          </Box>

          <Box
            height="-webkit-fill-available"
            css={css`
              width: 41%;

              @media (max-width: 1200px) and (min-width: 769px) {
                width: 50%;
              }

              @media ${device.tablet} {
                  width: 100%;
              }
            `}
          >
            <QuestBannerCard />
          </Box>
        </Box>
      </Box>

      {isBonusExpired ? (
        <Box display="flex" alignItems="center" justifyContent="center" gap="spacing-xxxs" css={css`padding: var(--spacing-xs) var(--spacing-md); cursor: pointer;`}>
          <Text variant="h5-regular">Explore Season 3</Text>
          <ArrowDown size={20} color="white" />
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="spacing-xxs" css={css`padding: 16px 24px; cursor: pointer;`}>
          <Text variant="h5-regular" css={css`color: #FFF; font-family: "DM Sans"; font-size: 32px; font-style: normal; font-weight: 500; line-height: 110%; letter-spacing: -0.64px;`}>
            Invite Only Access Ends <span style={{ color: '#D548EC' }}>{countdownString}</span>
          </Text>
          <Text variant="h5-regular" color="#FFE489">
            Complete the 2 bonus quests before time runs out.
          </Text>
        </Box>
      )}
    </Box>
  );
};
