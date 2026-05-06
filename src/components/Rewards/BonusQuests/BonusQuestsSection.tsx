import { useState } from 'react';
import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { Alert, BonusQuests, Box, Button, Lock, Multiplier, RarePass, ReferralQuestsIcon, Text, Twitter } from '../../../blocks';
import { useRewardStatus } from '../../../context/rewardStatusContext';
import { useGetRewardsActivity, useGetSeasonThreeUserByWallet } from '../../../queries';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';
import { fadeInCss } from '../utils/FadeIn';
import { RewardsActivityTitle } from '../RewardsActivity/RewardsActivityTitle';
import { ActivityButton } from '../RewardsActivity/ActivityButton';

const INVITE_ACTIVITY_ID = 'bonus_non_cult_invites_rare_pass';
const TWEET_ACTIVITY_ID = 'bonus_non_cult_share_on_x_xp_boost';

const BonusQuestsSection = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const { universalAccount } = usePushWalletContext('wallet1');
  const { isLocked, isLockedStatusLoading } = useRewardStatus();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({ walletAddress: caip10WalletAddress });

  const { data: activityStatuses, isLoading: isLoadingActivities, refetch: refetchActivity } = useGetRewardsActivity(
    { userId: userDetails?.userId as string, activityTypes: [INVITE_ACTIVITY_ID, TWEET_ACTIVITY_ID] },
    { enabled: !!userDetails?.userId },
  );

  const isWalletConnected = Boolean(universalAccount?.address);
  const rewardsLocked = isLocked && !isLockedStatusLoading;
  const canInteract = isWalletConnected && !rewardsLocked;

  return (
    <Box width="100%" css={css`${fadeInCss(200)}`}>
      {errorMessage && (
        <Box position="relative" margin="spacing-none spacing-none spacing-md spacing-none">
          <Alert variant="error" description={errorMessage} />
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-md"
        padding={{ initial: 'spacing-md', ml: 'spacing-sm' }}
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
            padding={{ initial: 'spacing-sm spacing-md', ml: 'spacing-xs spacing-sm' }}
            borderRadius="radius-md"
            gap="spacing-xs"
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
              <Box css={css`
                  flex-shrink: 0;
                  box-sizing: border-box;
                `}>
                <ReferralQuestsIcon width={36} height={36} />
              </Box>
              <RewardsActivityTitle activityTitle="Invite 3 people to Season 3 using your [invite codes](/rewards/squads)" variant="bl-semibold" isLoading={false} color="#fff"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={{ initial: 'spacing-sm', ml: 'spacing-xs' }}
              css={css`flex-shrink: 0;`}
            >
              <RarePass />

              {!canInteract ? (
                <Button size="small" variant="outline" leadingIcon={<Lock />} disabled>
                  Locked
                </Button>
              ) : (
                <ActivityButton
                  userId={userDetails?.userId as string}
                  activityTypeId={INVITE_ACTIVITY_ID}
                  activityType={INVITE_ACTIVITY_ID as any}
                  refetchActivity={refetchActivity}
                  setErrorMessage={setErrorMessage}
                  usersSingleActivity={activityStatuses?.[INVITE_ACTIVITY_ID]}
                  isLoadingActivity={isLoadingActivities}
                  buttonVariant="primary"
                  buttonSize="small"
                  label="Claim"
                />
              )}
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding={{ initial: 'spacing-sm spacing-md', ml: 'spacing-xs spacing-sm' }}
            borderRadius="radius-md"
            gap="spacing-xs"
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
                <Twitter width={26} height={26} />
              </Box>
              <RewardsActivityTitle activityTitle="Tweet about [@PushChain](https://x.com/PushChain) Season 3 with #pushchainmainnet" variant="bl-semibold" isLoading={false} color="#fff"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={{ initial: 'spacing-sm', ml: 'spacing-xs' }}
              css={css`flex-shrink: 0;`}
            >
              <Box
                display={{ ml: 'none', initial: 'flex' }}
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxs"
              >
                <Box css={css``
                }>
                  <Multiplier width={30} height={30} />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap="spacing-none">
                  <Text
                    variant="c-bold"
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
                  <Text variant="bm-semibold" color="text-primary">
                    25% XP
                  </Text>
                </Box>
              </Box>

              {!canInteract ? (
                <Button size="small" variant="outline" leadingIcon={<Lock />} disabled>
                  Locked
                </Button>
              ) : (
                <ActivityButton
                  userId={userDetails?.userId as string}
                  activityTypeId={TWEET_ACTIVITY_ID}
                  activityType={TWEET_ACTIVITY_ID as any}
                  refetchActivity={refetchActivity}
                  setErrorMessage={setErrorMessage}
                  usersSingleActivity={activityStatuses?.[TWEET_ACTIVITY_ID]}
                  isLoadingActivity={isLoadingActivities}
                  buttonVariant="primary"
                  buttonSize="small"
                  label="Claim"
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BonusQuestsSection;
