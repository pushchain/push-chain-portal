import React, { useMemo } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

import { useVerifyTwitter } from "../hooks/useVerifyTwitter";
import { useVerifyDiscord } from "../hooks/useVerifyDiscord";
import { useVerifyRewards } from "../hooks/useVerifyRewards";
import { otherRewardActivities } from "../utils/activityTypeArray";
import { ActvityType } from "../../../queries/types";
import { Button } from "../../../blocks";

type ActivityVerificationButtonProps = {
  userId: string;
  activityTypeId: string;
  activityTypeIndex?: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  isLoadingActivity: boolean;
  label?: string;
  onStartClaim?: () => void;
  buttonVariant?: "primary" | "secondary" | "tertiary" | "outline";
  buttonSize?: "small" | "medium" | "large";
  buttonCss?: FlattenSimpleInterpolation;
};

export const ActivityVerificationButton = ({
  activityType,
  activityTypeId,
  activityTypeIndex,
  refetchActivity,
  setErrorMessage,
  userId,
  isLoadingActivity,
  label,
  onStartClaim,
  buttonVariant = "tertiary",
  buttonSize = "small",
  buttonCss,
}: ActivityVerificationButtonProps) => {
  const { universalAccount, handleConnectToPushWallet } = usePushWalletContext('wallet1');
  const isWalletConnected = Boolean(universalAccount?.address);

  const { handleTwitterVerification, verifyingTwitter, twitterActivityStatus } =
    useVerifyTwitter({
      activityTypeId,
      refetchActivity,
      setErrorMessage,
    });

  const { handleDiscordVerification, verifyingDiscord, discordActivityStatus } =
    useVerifyDiscord({
      activityTypeId,
      refetchActivity,
      setErrorMessage,
    });

  const { handleRewardsVerification, verifyingRewards, rewardsActivityStatus } =
    useVerifyRewards({
      activityTypeId,
      refetchActivity,
      setErrorMessage,
      activityTypeIndex,
      onStartClaim,
    });

  const activityData = useMemo(() => {
    if (activityType === "follow_push_on_discord") {
      return {
        isLoading: verifyingDiscord,
        label: "Verify",
        action: handleDiscordVerification,
        isComplete: discordActivityStatus === "Claimed",
      };
    }

    if (activityType === "follow_push_on_twitter") {
      return {
        isLoading: verifyingTwitter,
        label: "Verify",
        action: handleTwitterVerification,
        isComplete: twitterActivityStatus === "Claimed" || twitterActivityStatus === "Pending",
      };
    }

    if (otherRewardActivities.includes(activityType)) {
      return {
        isLoading: verifyingRewards,
        label: "Claim",
        action: handleRewardsVerification,
        isComplete: rewardsActivityStatus === "Claimed" || rewardsActivityStatus === "Pending",
      };
    }

    return null;
  }, [
    activityType,
    twitterActivityStatus,
    discordActivityStatus,
    rewardsActivityStatus,
    verifyingRewards,
    verifyingTwitter,
    verifyingDiscord,
  ]);

  const handleClick = () => {
    if (!isWalletConnected) {
      handleConnectToPushWallet();
      return;
    }

    activityData?.action(userId);
  };

  console.log(activityData, 'test loading state')

  const isLoading = isLoadingActivity || activityData?.isLoading;
  const buttonLabel = activityData?.isComplete
    ? "Verifying..."
    : label || activityData?.label || "Verify";

  return (
    <Button
      variant={buttonVariant}
      size={buttonSize}
      css={buttonCss}
      loading={isLoading}
      onClick={handleClick}
      disabled={isLoading || activityData?.isComplete}
    >
      {buttonLabel}
    </Button>
  );
};
