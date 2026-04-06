// React and other libraries
import React, { FC, useState } from "react";
import { css } from "styled-components";

// hooks
import { useRewardStatus } from "../../../context/rewardStatusContext";

// type
import { useClaimDailyRewardsSeasonThree, useGetDailyCheckInDetails, useGetSeasonThreeUserByWallet } from "../../../queries";

// components
import { Alert, Box, Button, Lock, SeasonThreePoints, Skeleton, Text, XP } from "../../../blocks";
import { DailyRewardsItem } from "./DailyRewardsItem";

import { useAuthHeaders } from "../../../context/authHeadersContext";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { walletToFullCAIP10 } from "../../../helpers/web3helper";
import { DAILY_REWARDS } from "../utils/dailyRewardsConfig";

export type DailyRewardsSectionProps = Record<string, never>;

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { authHeaders, getAuthHeaders } = useAuthHeaders();
  const [isSigning, setIsSigning] = useState(false);
  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(universalAccount?.address as string, universalAccount?.chain);
  const { data: userDetails } = useGetSeasonThreeUserByWallet({ walletAddress: caip10WalletAddress });
  const { isLocked, isLockedStatusLoading } = useRewardStatus();

  const rewardsLocked = isLocked && !isLockedStatusLoading;

  const { data: getDailyCheckInDetails, refetch, isLoading: isLoadingRewards, isRefetching } = useGetDailyCheckInDetails(userDetails?.userId);
  const { mutate: claimDailyRewards, isPending: isClaimingRewards } = useClaimDailyRewardsSeasonThree();

  const canClaimRewards = getDailyCheckInDetails?.canCheckInToday;

  const handleClaimRewards = async () => {
    if (!authHeaders) setIsSigning(true);
    const headers = authHeaders ?? await getAuthHeaders();
    setIsSigning(false);
    if (!headers) return;
    claimDailyRewards(headers, {
      onSuccess: () => { refetch(); },
      onError: (error) => { console.error(error); },
    });
  };

  const dailyRewardsActivities = DAILY_REWARDS;

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
            Stack your streak bonus daily
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

            {dailyRewardsActivities[(getDailyCheckInDetails?.streak)]?.xp && <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              gap="spacing-xxs"
            >
              <XP width={36} height={14} />
              <Text variant="bm-bold">{ dailyRewardsActivities[(getDailyCheckInDetails?.streak)]?.xp }</Text>
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
          <Skeleton isLoading={isLockedStatusLoading || isLoadingRewards || isRefetching}>
            {canClaimRewards ? (
              <Button
                variant="tertiary"
                size="small"
                onClick={handleClaimRewards}
                disabled={isClaimingRewards || isSigning}
                loading={isClaimingRewards || isSigning}
              >
                Claim
              </Button>
            ) : (
              <Button variant="tertiary" size="small" disabled>
                Claimed
              </Button>
            )}
          </Skeleton>
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
