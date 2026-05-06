import { css } from "styled-components";

import {
  PushUniversalAccountButton,
  usePushWalletContext,
} from "@pushchain/ui-kit";

import { Box, Text, ArrowDown, GlowStreaks, Spinner } from "../../blocks";
import { trackEvent } from "../../helpers/analytics";
import { RenderLoggedInVerifiedState } from "./Dashboard/RenderLoggedInVerifiedState";
import { RenderLoggedInUnverifiedState } from "./Dashboard/RenderLoggedInUnverifiedState";
import { useRewardStatus } from "../../context/rewardStatusContext";
import { device } from "../../config/globals";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useCountdown } from "./hooks/useCountdown";

export const BONUS_QUEST_DEADLINE = "2026-05-19T14:00:00Z";

const pad = (n: number) => String(n).padStart(2, '0');

export const RewardsUpdatedDashboard = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const isTablet = useMediaQuery(device.tablet)
  const isWalletConnected = Boolean(universalAccount?.address);
  const { isLocked, isLockedStatusLoading } = useRewardStatus();
  const { timeLeft, isExpired: isBonusExpired } = useCountdown(BONUS_QUEST_DEADLINE);
  const countdownString = `${pad(timeLeft.days)}D : ${pad(timeLeft.hours)}H : ${pad(timeLeft.minutes)}M : ${pad(timeLeft.seconds)}S`;

  const rewardsLocked = isLocked && !isLockedStatusLoading;

  const renderLoggedOutState = () => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      borderRadius="radius-md"
      css={css`
        flex: 1;
        border: 1px solid rgba(171, 70, 248, 0.40);
        background: rgba(0, 0, 0, 0.10);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(10px);
      `}
      >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      borderRadius="radius-md"
      padding="spacing-xxxl spacing-md"
      overflow="hidden"
      width="100%"
      css={css`
        min-height: 333px;
        max-height: 333px;
        background: #F1D5FF;
        box-sizing: border-box;

        @media ${device.tablet}{
            min-height: fit-content;
            max-height: fit-content;
        }
      `}
    >

      <Box
          css={css`
            position: absolute;
            bottom: -50px;
            left: -50px;
            width: 230px;
            height: 230px;
            pointer-events: none;
            z-index: 0;

            background: #E58CF6;
            filter: blur(50px);
          `}
        >
        </Box>



        {!isTablet &&
        <>
          <Box
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
              `}
            >
              <GlowStreaks />
          </Box>

        <Box
            css={css`
              position: absolute;
              top: 0px;
              left: 150px;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 0;
            `}
          >
            <GlowStreaks />
          </Box>

          <Box
              css={css`
                position: absolute;
                top: 0px;
                left: 300px;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
              `}
            >
              <GlowStreaks />
         </Box>
        </>}

        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        css={css`
          position: relative;
          z-index: 1;
          max-width: 680px;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Text variant="h1-bold" color="#000000">
              Crush quests. Claim XP, Points & Rare Passes.
          </Text>
          <Text variant="h5-regular" color="#000000">
              Explore Universal Apps. Gain XP. Unlock Spins & Earn Rewards!
          </Text>
        </Box>

        <Box onClick={() => trackEvent('wallet_connect_clicked', { event_category: 'auth', event_label: 'dashboard' })}>
          <PushUniversalAccountButton uid='wallet1' />
        </Box>
      </Box>
      </Box>

      {isBonusExpired ? (
        <Box display="flex" alignItems="center" justifyContent="center" gap="spacing-xxxs" css={css`padding: var(--spacing-xs) var(--spacing-md); cursor: pointer;`}>
          <Text variant="h5-regular">Explore Season 3</Text>
          <ArrowDown size={20} color="white" />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="spacing-xxs"
          css={css`padding: 16px 24px; cursor: pointer;`}
        >
          <Text variant="h5-regular" css={css`
              color: #FFF;
              font-family: "DM Sans";
              font-size: 32px;
              font-style: normal;
              font-weight: 500;
              line-height: 110%;
              letter-spacing: -0.64px;
            `}>
            Invite Only Access Ends {countdownString}
          </Text>
          <Text variant="h5-regular" color="#FFE489">
            Complete the 2 bonus quests before time runs out.
          </Text>
        </Box>
      )}
    </Box>
  );

  const renderLoggedInUnverifiedState = () => (
    <RenderLoggedInUnverifiedState />
  );

  const renderLoggedInVerifiedState = () => (
    <RenderLoggedInVerifiedState />
  );

  if (isWalletConnected && isLockedStatusLoading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        borderRadius="radius-md"
        css={css`
          z-index: 99;
          flex: 1;
          border: 1px solid rgba(171, 70, 248, 0.40);
          background: rgba(0, 0, 0, 0.10);
          background-blend-mode: plus-lighter;
          box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
          backdrop-filter: blur(10px);
        `}
        >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        borderRadius="radius-md"
        padding="spacing-xxxl spacing-md"
        overflow="hidden"
        width="100%"
        css={css`
          min-height: 333px;
          max-height: 333px;
          background: #F1D5FF;
          box-sizing: border-box;

          @media ${device.tablet}{
              min-height: fit-content;
              max-height: fit-content;
          }
        `}
      >

        <Box
            css={css`
              position: absolute;
              bottom: -50px;
              left: -50px;
              width: 230px;
              height: 230px;
              pointer-events: none;
              z-index: 0;

              background: #E58CF6;
              filter: blur(50px);
            `}
          >
          </Box>

          {!isTablet &&
          <>
            <Box
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  pointer-events: none;
                  z-index: 0;
                `}
              >
                <GlowStreaks />
              </Box>

              <Box
                  css={css`
                    position: absolute;
                    top: 0px;
                    left: 150px;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                  `}
                >
                  <GlowStreaks />
                </Box>

                <Box
                    css={css`
                      position: absolute;
                      top: 0px;
                      left: 300px;
                      width: 100%;
                      height: 100%;
                      pointer-events: none;
                      z-index: 0;
                    `}
                  >
                    <GlowStreaks />
                </Box>
              </>
            }

          <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing-lg"
          css={css`
            position: relative;
            z-index: 1;
            max-width: 900px;
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Text variant="h1-bold" color="#000000">
               Crush quests. Claim XP, Points & Rare Passes.
            </Text>
            <Text variant="h5-regular" color="#000000">
              Explore Universal Apps. Gain XP. Unlock Spins & Earn Rewards!
            </Text>
            </Box>

            <Box>
              <Spinner variant="primary" size="extraLarge" />
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
              Invite Only Access Ends {countdownString}
            </Text>
            <Text variant="h5-regular" color="#FFE489">
              Complete the 2 bonus quests before time runs out.
            </Text>
          </Box>
        )}
      </Box>

    );
  }

  if(isWalletConnected && !rewardsLocked) return renderLoggedInVerifiedState();

  if(isWalletConnected) return renderLoggedInUnverifiedState()

  return renderLoggedOutState();
};
