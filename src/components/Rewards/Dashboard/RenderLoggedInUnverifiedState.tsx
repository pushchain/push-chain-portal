import { css } from "styled-components";

import { RewardsActivityIcon } from "../RewardsActivity/RewardsActivityIcon";
import { RewardsActivityTitle } from "../RewardsActivity/RewardsActivityTitle";
import { ActvityType, GetSybilStatusResponse } from "../../../queries/types";
import { ActivityButton } from "../RewardsActivity/ActivityButton";
import { useUnverifiedStateLogic } from "../hooks/useUnverifiedStateLogic";

import {
  Alert,
  ArrowDown,
  Box,
  Button,
  CrossFilled,
  GlowStreaks,
  Lock,
  SealCheckFilled,
  Text,
} from "../../../blocks";
import { useRewardStatus } from "../../../context/rewardStatusContext";
import { useGetRewardsActivity } from "../../../queries";
import { useActivityContext } from "../../../context/activityContext";
import { useLinkedWallet } from "../../../context/linkedWalletContext";

const ACTIVITY_LIST = [
  {
    icon: "follow_push_on_twitter",
    activityTitle: "Follow [@PushChain](https://x.com/PushChain) on X",
    activityType: "follow_push_on_twitter" as ActvityType,
    activityTypeId: "follow_push_on_twitter",
  },
  {
    icon: "follow_push_on_discord",
    activityTitle: "Join [Push Chain Discord](https://discord.com/invite/pushchain)",
    activityType: "follow_push_on_discord" as ActvityType,
    activityTypeId: "follow_push_on_discord",
  },
] as const;

const WALLET_ACTIVITY = {
  icon: "link_an_active_wallet",
  activityTitle: "Link an active wallet ($15+ balance & history) to verify",
} as const;

const EVM_WALLET_ACTIVITY = {
  icon: "link_an_active_wallet",
  activityTitle: "Verify your wallet ($15+ balance & on-chain transaction history)",
} as const;

const WalletVerificationAction = ({
  sybilEligible,
  isVerifying,
  isPushWalletUser,
  hasLinkedAccount,
  verify,
  sybilStatusData
}: {
  sybilEligible: boolean | null;
  isVerifying: boolean;
  isPushWalletUser: boolean;
  hasLinkedAccount: boolean;
  verify: () => void;
    sybilStatusData: GetSybilStatusResponse;
}) => {
const { handleLinkedWalletConnection } = useLinkedWallet();

if (sybilStatusData?.data?.advanced?.completed) {
    return (
      <Box display="flex" alignItems="center" gap="spacing-xxs" padding="spacing-xs spacing-md" css={css`margin-left: auto;`}>
        <SealCheckFilled color="#00A47F" size={16} />
        <Text color="#00A47F" css={css`white-space: nowrap; font-size: 14px; font-weight: 600; line-height: 16px;`}>
          Account Verified
        </Text>
      </Box>
    );
  }

  if (sybilEligible === false) {
    return (
      <Box display="flex" alignItems="center" gap="spacing-xxs" padding="spacing-xs spacing-md" css={css`margin-left: auto;`}>
        <CrossFilled color="#E53935" size={16} />
        <Text color="#E53935" css={css`white-space: nowrap; font-size: 14px; font-weight: 600; line-height: 16px;`}>
          Not Eligible
        </Text>
      </Box>
    );
  }

  if (isVerifying) {
    return (
      <Box css={css`margin-left: auto;`}>
        <Button variant="tertiary" size="small" disabled>
          Verifying…
        </Button>
      </Box>
    );
  }

  if (isPushWalletUser && !hasLinkedAccount) {
    return (
      <Box css={css`margin-left: auto;`}>
        <Button onClick={handleLinkedWalletConnection} variant="tertiary" size="small">
          Link Account To Verify
        </Button>
      </Box>
    );
  }

  return (
    <Box css={css`margin-left: auto;`}>
      <Button variant="tertiary" size="small" onClick={verify}>
        Verify
      </Button>
    </Box>
  );
};

export const RenderLoggedInUnverifiedState = () => {
  const { refetch, isLoading, userDetails } = useActivityContext();

  const {
    isPushWalletUser,
    sybilEligible,
    isVerifying,
    errorMessage,
    setErrorMessage,
    verify,
  } = useUnverifiedStateLogic();

  const { sybilStatusData, refetchSybilStatus } = useRewardStatus();
  const { data: linkedWalletData } = useLinkedWallet();

  const {
		data: userActivity,
    isLoading: isLoadingActivities,
    refetch: refetchActivities
	} = useGetRewardsActivity(
		{ userId: userDetails?.userId, activityTypes: ['follow_push_on_discord','follow_push_on_twitter'] },
		{ enabled: !!userDetails?.userId },
    );

  const isStep1Complete = !!sybilStatusData?.data?.advanced?.completed;
  const isStep2Complete = userActivity?.follow_push_on_twitter?.status === 'COMPLETED';

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      borderRadius="radius-md"
      css={css`
        flex: 1;
        border: 1px solid rgba(171, 70, 248, 0.4);
        background: rgba(0, 0, 0, 0.1);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
          1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
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
        padding="spacing-md"
        overflow="hidden"
        width="100%"
        height="auto"
        css={css`background: #f1d5ff; box-sizing: border-box;`}
      >
        <Box css={css`position: absolute; bottom: 0; left: -50px; width: 230px; height: 230px; pointer-events: none; z-index: 0; background: #e58cf6; filter: blur(50px);`} />
        <Box css={css`position: absolute; bottom: 0; left: 0; right: 0; height: 50%; display: flex; justify-content: space-evenly; pointer-events: none; z-index: 0;`}>
          <GlowStreaks /><GlowStreaks /><GlowStreaks />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" gap="spacing-lg" css={css`position: relative; z-index: 1; max-width: 680px;`}>
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <Text variant="h1-bold" color="#000000"> Crush quests. Claim XP, Points & Rare Passes.</Text>
            <Text variant="h5-regular" color="#000000">Explore Universal Apps. Gain XP. Unlock Spins & Earn Rewards!</Text>
          </Box>
        </Box>

        {errorMessage && (
          <Box width="100%" margin="spacing-sm spacing-none spacing-none spacing-none">
            <Alert variant="error" description={errorMessage} />
          </Box>
        )}

        <Box display="flex" flexDirection="column" width="100%" margin="spacing-sm spacing-none spacing-none spacing-none" gap="spacing-sm" css={css`z-index: 1;`}>

          <Box
            display="flex"
            flexDirection={{ initial: "row", tb: "column" }}
            alignItems="center"
            width="100%"
            padding="spacing-sm spacing-md"
            gap="spacing-xs"
            css={css`
              border-radius: var(--radius-md, 24px);
              border: ${isStep1Complete ? '1px solid #fff' : '2px solid var(--stroke-brand-medium, #D548EC)'};
              background: rgba(255, 255, 255, 0.4);
              box-sizing: border-box;
            `}
          >
            <RewardsActivityIcon type={WALLET_ACTIVITY.icon} />
            <Box margin="spacing-none spacing-none spacing-none spacing-xs">
              <Text variant="bes-bold" color="#C742DD">STEP 1</Text>
              <RewardsActivityTitle activityTitle={isPushWalletUser ? WALLET_ACTIVITY.activityTitle : EVM_WALLET_ACTIVITY.activityTitle} variant="h4-semibold" isLoading={false} color="#17181B" />
              <Text variant="bm-regular" color="#313338">Linked wallet will be bound to Push account for Season 3</Text>
            </Box>

            <WalletVerificationAction
              sybilEligible={sybilEligible}
              isVerifying={isVerifying}
              isPushWalletUser={isPushWalletUser}
              hasLinkedAccount={!!linkedWalletData?.signature && !!linkedWalletData?.account?.address}
              verify={verify}
              sybilStatusData={sybilStatusData}
            />
          </Box>

          {/* Step 2 & 3: Social Verifications */}
          <Box display="flex" flexDirection={{ initial: "row", tb: "column" }} gap="spacing-sm" width="100%">
            {ACTIVITY_LIST.map((item, index) => {
              const stepNumber = index + 2;
              const isStep2 = stepNumber === 2;
              const isLocked = isStep2
                ? !isStep1Complete
                : !isStep2Complete;
              const isCompleted = isStep2 ? isStep2Complete : userActivity?.follow_push_on_discord?.status === 'COMPLETED';
              const isActive = !isLocked && !isCompleted;

              return (
                <Box
                  key={index}
                  display="flex"
                  flexDirection={{ initial: "row", tb: "column" }}
                  alignItems="center"
                  padding="spacing-md"
                  // padding="spacing-sm spacing-md"
                  gap="spacing-xs"
                  css={css`
                    flex: 1;
                    border-radius: var(--radius-md, 24px);
                    border: ${isActive ? '2px solid var(--stroke-brand-medium, #D548EC)' : '1px solid #fff'};
                    background: rgba(255, 255, 255, ${isLocked ? '0.2' : '0.4'});
                    box-sizing: border-box;
                    transition: opacity 0.3s ease;
                  `}
                >
                  <RewardsActivityIcon type={item.icon} />
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <Text variant="bes-bold" color="#C742DD">STEP {stepNumber}</Text>
                    <RewardsActivityTitle activityTitle={item.activityTitle} variant="h4-semibold" isLoading={false} color="#17181B" />
                  </Box>
                  <Box css={css`margin-left: auto;`}>
                    {isLocked ? (
                      <Button variant="secondary" leadingIcon={<Lock />} size="small" disabled>
                        Verify
                      </Button>
                    ) : (
                      <ActivityButton
                        activityType={item.activityType as ActvityType}
                        activityTypeId={item.activityTypeId}
                        userId={userDetails?.userId as string}
                        refetchActivity={() => {
                          refetch();
                          refetchActivities();
                          refetchSybilStatus();
                        }}
                        usersSingleActivity={userActivity?.[item.activityType]}
                        setErrorMessage={setErrorMessage}
                        isLoadingActivity={isLoading || isLoadingActivities}
                        label="Verify"
                      />
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" gap="spacing-xxxs" css={css`padding: var(--spacing-xs) var(--spacing-md); cursor: pointer;`}>
        <Text variant="h5-regular">Complete verifications to unlock Season 3</Text>
        <ArrowDown size={20} color="white" />
      </Box>
    </Box>
  );
};
