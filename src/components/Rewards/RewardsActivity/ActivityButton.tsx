// React and other libraries
import React, { FC } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

//Queries
import { ActvityType, UsersActivity } from "../../../queries";
import { Button } from "../../../blocks";
import { ActivityVerificationButton } from "./ActivityVerificationButton";
// import { useCountdown } from "./hooks/useCountdown";

type ActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  activityTypeIndex?: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  usersSingleActivity?: UsersActivity | any;
  isLoadingActivity: boolean;
  label?: string;
  currentLevel?: string;
  setCurrentLevel?: (currentLevel: string) => void;
  onStartClaim?: () => void;
  buttonVariant?: "primary" | "secondary" | "tertiary" | "outline";
  buttonSize?: "small" | "medium" | "large";
  buttonCss?: FlattenSimpleInterpolation;
};

const ActivityButton: FC<ActivityButtonProps> = ({
  userId,
  activityTypeId,
  activityTypeIndex,
  refetchActivity,
  activityType,
  setErrorMessage,
  usersSingleActivity,
  isLoadingActivity,
  label,
  // currentLevel,
  // setCurrentLevel,
  onStartClaim,
  buttonVariant = "tertiary",
  buttonSize = "small",
  buttonCss,
}) => {
  // current finish date
  // const targetDate = "2025-07-31T23:59:59";
  // const { isExpired } = useCountdown(targetDate);

  // const hasRewardsExpired = isExpired;

  // if (hasRewardsExpired) {
  //   return (
  //     <Button variant="tertiary" size="small" disabled>
  //       Ended
  //     </Button>
  //   );
  // }
  const isSybilRelated = activityType === "follow_push_on_discord" || activityType === "follow_push_on_twitter";

  if (usersSingleActivity?.status === "COMPLETED" && isSybilRelated) {
    return (
      <Button variant={buttonVariant} size={buttonSize} css={buttonCss} disabled>
        Verified
      </Button>
    );
  }

if (usersSingleActivity?.status === "COMPLETED") {
    return (
      <Button variant={buttonVariant} size={buttonSize} css={buttonCss} disabled>
        Claimed
      </Button>
    );
  }

  if (usersSingleActivity?.status === "PENDING") {
    return (
      <Button variant={buttonVariant} size={buttonSize} css={buttonCss} disabled>
        Pending
      </Button>
    );
  }

  return (
    // default verify button
    <ActivityVerificationButton
      activityType={activityType}
      userId={userId}
      activityTypeId={activityTypeId}
      activityTypeIndex={activityTypeIndex}
      refetchActivity={refetchActivity}
      setErrorMessage={setErrorMessage}
      isLoadingActivity={isLoadingActivity}
      label={label}
      // currentLevel={currentLevel}
      // setCurrentLevel={setCurrentLevel}
      onStartClaim={onStartClaim}
      buttonVariant={buttonVariant}
      buttonSize={buttonSize}
      buttonCss={buttonCss}
    />
  );
};

export { ActivityButton };
