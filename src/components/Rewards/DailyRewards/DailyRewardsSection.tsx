// React and other libraries
import React, { FC, useState } from "react";
import { css } from "styled-components";

// hooks
import { useRewardsContext } from "../../../context/rewardsContext";

// type
import { useClaimDailyRewardsSeasonThree, useGetDailyCheckInDetails } from "../../../queries";

// components
import { Alert, Box, Button, Lock, SeasonThreePoints, Skeleton, Text } from "../../../blocks";
import { DailyRewardsItem } from "./DailyRewardsItem";

import { useAuthHeaders } from "../../../context/authHeadersContext";
import { useRewardStatus } from "../../../context/rewardStatusContext";

export type DailyRewardsSectionProps = Record<string, never>;

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { authHeaders } = useAuthHeaders();
  const { isLocked, isLockedStatusLoading } = useRewardsContext();
  useRewardStatus();
  console.log(authHeaders, 'authHeadersssss')

  const rewardsLocked = isLocked && !isLockedStatusLoading;


  const { data: getDailyCheckInDetails, refetch, isLoading: isLoadingRewards } = useGetDailyCheckInDetails(authHeaders);
  const { mutate: claimDailyRewards, isPending: isClaimingRewards } = useClaimDailyRewardsSeasonThree();

  const canClaimRewards = getDailyCheckInDetails?.canCheckInToday;


  const handleClaimRewards = () => {
    claimDailyRewards(authHeaders, {
      onSuccess: (data) => {
        refetch();
      },
      onError: (error) => {
        console.error(error);
      }
    });
}

  const dailyRewardsActivities = [
    { id: 1, text: "Day 1", points: 100 },
    { id: 2, text: "Day 2", points: 130 },
    { id: 3, text: "Day 3", points: 160 },
    { id: 4, text: "Day 4", points: 200 },
    { id: 5, text: "Day 5", points: 240 },
    { id: 6, text: "Day 6", points: 280 },
    { id: 7, text: "Day 7", points: 300 },
  ];

  console.log(getDailyCheckInDetails)

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="spacing-md"
      borderRadius="radius-md"
      justifyContent="space-between"
      height="100%"
      css={css`
        border: 1px solid rgba(171, 70, 248, 0.40);
        background: rgba(0, 0, 0, 0.10);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(10px);
        box-sizing: border-box;
        min-width: 0;
      `}
    >
      <Box
        display="flex"
        flexDirection="row"
        width="-webkit-fill-available"
        justifyContent="space-between"
      >
        <Box>
          <Text variant="h4-semibold" color="text-primary">
            Daily Check-In
          </Text>
          <Text variant="bs-regular" color="text-tertiary">
            Stack your streak bonus, check-in daily
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="spacing-md"
        >


        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="spacing-md"
          >
            {dailyRewardsActivities[(getDailyCheckInDetails?.streak)]?.points && <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              gap="spacing-xxs"
            >
              <SeasonThreePoints width={28} height={28} />
              <Text variant="bm-bold">{ dailyRewardsActivities[(getDailyCheckInDetails?.streak)]?.points }</Text>
          </Box>}
        </Box>

        {rewardsLocked && (
          <Button
            variant="outline"
            size="small"
            leadingIcon={< Lock />}
            disabled
          >
            Locked
          </Button>
        )}

        {!rewardsLocked && (
          <>
            {!canClaimRewards && (
              <Skeleton isLoading={isLockedStatusLoading}>
                <Button variant="tertiary" size="small" disabled>
                  Claimed
                </Button>
              </Skeleton>
            )}

            {canClaimRewards && (
              <Skeleton isLoading={isLockedStatusLoading}>
              <Button
                variant="primary"
                size="small"
                onClick={handleClaimRewards}
                disabled={isClaimingRewards}
                loading={isClaimingRewards}
              >
                Claim
                </Button>
              </Skeleton>
            )}
          </>
          )}
        </Box>
      </Box>

      {errorMessage && (
        <Box width="-webkit-fill-available">
          <Alert
            heading={errorMessage}
            variant="error"
            onClose={() => setErrorMessage("")}
          />
        </Box>
      )}

      <Box
        display="grid"
        gap={{ ml: "spacing-xs", initial: "spacing-xxs" }}
        css={css`
          grid-template-columns: repeat(7, minmax(0, 1fr));
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;

          @media (max-width: 1200px) {
            grid-template-columns: repeat(7, minmax(80px, 1fr));
          }

          @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            .item:last-child {
              grid-column: span 2;
            }
          }
        `}
      >
        {dailyRewardsActivities?.map((activity) => (
          <DailyRewardsItem
            dailyCheckInDetails={getDailyCheckInDetails}
            isLoading={isLoadingRewards}
            activity={activity}
          />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
