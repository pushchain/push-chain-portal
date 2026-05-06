import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { BonusQuests, Box, Button, Lock, Multiplier, Quests, RarePass, Referral, Text, Twitter, XP } from '../../../blocks';
import { useRewardStatus } from '../../../context/rewardStatusContext';
import { fadeInCss } from '../utils/FadeIn';
import { RewardsActivityTitle } from '../RewardsActivity/RewardsActivityTitle';

const TWEET_URL =
  'https://twitter.com/intent/tweet?text=Tweet%20about%20%40PushChain%20Season%203%20with%20%23pushchainmainnet';

const BonusQuestsSection = () => {
  const navigate = useNavigate();
  const { universalAccount } = usePushWalletContext('wallet1');
  const { isLocked, isLockedStatusLoading } = useRewardStatus();

  const isWalletConnected = Boolean(universalAccount?.address);
  const rewardsLocked = isLocked && !isLockedStatusLoading;
  const canInteract = isWalletConnected && !rewardsLocked;

  return (
    <Box width="100%" css={css`${fadeInCss(200)}`}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-md"
        padding="spacing-md"
        position="relative"
        borderRadius="radius-md"
        width="100%"
        css={css`
          border: 1px solid rgba(248, 192, 70, 0.40);
          background: rgba(0, 0, 0, 0.10);
          background-blend-mode: plus-lighter;
          box-shadow: 0 11px 35.1px 0 rgba(229, 183, 54, 0.25), 2.788px -8px 12px 0 rgba(255, 234, 189, 0.15) inset, 1.858px 1.732px 6px 0 rgba(242, 223, 151, 0.15) inset;
          backdrop-filter: blur(10px);
          flex: 1;
          box-sizing: border-box;
          -webkit-backdrop-filter: blur(10px);

          &::before {
            content: "";
            position: absolute;
            inset: 0;
            padding: 1px;
            border-radius: 24px;
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
        <Box display="flex" alignItems="center" gap="spacing-xs">
          <Box width="48px" height="48px">
            <BonusQuests/>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start" gap="spacing-none">
            <Text
              variant="h4-semibold"
              css={css`
                background: linear-gradient(180deg, #FFF 28.57%, #DBA237 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                white-space: nowrap;
              `}
            >
              Bonus Quests
            </Text>
            <Text variant="bs-regular" color="text-secondary">
              Complete the bonus quests before timer runs out
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignSelf="stretch"
          gap="spacing-xs"
          width="100%"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="spacing-sm spacing-md"
            borderRadius="radius-md"
            gap="spacing-sm"
            css={css`
              box-sizing: border-box;
              border: 1px solid rgba(255, 255, 140, 0.25);
              background: radial-gradient(109.87% 94.08% at 50% 5.92%, #100D0A 20.67%, #392F1D 100%);
            `}
          >
            <Box
              display="flex"
              alignItems="center"
              gap="spacing-sm"
              css={css`
                  flex: 1;
                  min-width: 0;
                `}
            >
              <Box css={css`width: 40px; height: 40px; flex-shrink: 0;`}>
                <Referral width={40} height={40} />
              </Box>
              <RewardsActivityTitle activityTitle="Invite 3 people to Season 3 using your [invite codes](/rewards/squads)" variant="bl-semibold" isLoading={false} color="#fff"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="spacing-sm"
              css={css`
                  flex-shrink: 0;
                `}
            >
            <RarePass />

              {canInteract ? (
                <Button
                  size="small"
                  variant="outline"
                  onClick={() => navigate('/rewards/squads')}
                >
                  Invite
                </Button>
              ) : (
                <Button
                  size="small"
                  variant="outline"
                  leadingIcon={<Lock />}
                  disabled
                >
                  Locked
                </Button>
              )}
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="spacing-sm spacing-md"
            borderRadius="radius-md"
            gap="spacing-sm"
            css={css`
              box-sizing: border-box;
              border: 1px solid rgba(255, 255, 140, 0.25);
              background: radial-gradient(109.87% 94.08% at 50% 5.92%, #100D0A 20.67%, #392F1D 100%);
            `}
          >
            <Box
              display="flex"
              alignItems="center"
              gap="spacing-sm"
              css={css`flex: 1; min-width: 0;`}
            >
              <Box css={css`
                  padding: 2px;
                  flex-shrink: 0;
                  box-sizing: border-box;
                `}>
                <Twitter width={30} height={30} />
              </Box>
              <RewardsActivityTitle activityTitle="Tweet about [@PushChain](https://x.com/PushChain) Season 3 with #pushchainmainnet" variant="bl-semibold" isLoading={false} color="#fff"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="spacing-sm"
              css={css`
                  flex-shrink: 0;
                `}
            >
              <Box
                display={{ ml: 'none', initial: 'flex' }}
                flexDirection="column"
                alignItems="center"
                gap="spacing-none"
              >
                <Text
                  variant="c-bold"
                  color="text-secondary"
                  css={css`
                      white-space: nowrap;
                      color: #FBE18C;
                      font-size: 10px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 16px;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                `}
                >
                  PERMANENT
                </Text>
                <Box display="flex" alignItems="center" gap="spacing-xxxs">
                  <Box css={css`width: 20px; height: 20px;`}>
                    <Multiplier width={20} height={20} />
                  </Box>
                  <Text variant="bm-semibold" color="text-primary">
                    25% XP
                  </Text>
                </Box>
              </Box>

              {canInteract ? (
                <Button
                  size="small"
                  variant="outline"
                  onClick={() => window.open(TWEET_URL, '_blank', 'noopener,noreferrer')}
                >
                  Tweet
                </Button>
              ) : (
                <Button
                  size="small"
                  variant="outline"
                  leadingIcon={<Lock />}
                  disabled
                >
                  Locked
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BonusQuestsSection;
