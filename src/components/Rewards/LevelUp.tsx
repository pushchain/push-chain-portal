import { useState } from "react";
import { css } from "styled-components";
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetLevelProgress, useGetSeasonThreeUserByWallet } from "../../queries";
import { useGetNewLevelStatus } from "./hooks/useGetNewLevelStatus";
import useMediaQuery from "../../hooks/useMediaQuery";

import { device } from "../../config/globals";
import { walletToFullCAIP10 } from "../../helpers/web3helper";

import { Box, Button, LevelUpIcon, ProgressBar, RewardsStarGradient, Skeleton, Text } from "../../blocks"
import LevelUpModal from "./LevelUpModal";
import ClaimPCTokenModal from "./ClaimPCTokenModal";
import { useRewardStatus } from "../../context/rewardStatusContext";
import { useGetPCTokenBalance } from "../../queries/hooks/rewards/useGetPCTokenBalance";
import { FALLBACK_LEVEL_CONFIG } from "./utils/levelConfig";
import { fadeInCss } from "./utils/FadeIn";
import { getLevelBadge } from "../../helpers/getLevelBadge";

export const LevelUp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
    const isMobile = useMediaQuery(device.mobileL);
    const { universalAccount } = usePushWalletContext('wallet1');
    const caip10WalletAddress = walletToFullCAIP10(
      universalAccount?.address as string,
      universalAccount?.chain,
    );
    const { isLocked, isLockedStatusLoading } = useRewardStatus();
    const rewardsLocked = (isLocked && !isLockedStatusLoading);

    const { data: userDetails } = useGetSeasonThreeUserByWallet({
      walletAddress: caip10WalletAddress
    });

    const { data: levelProgress, isLoading } = useGetLevelProgress(userDetails?.userId);
    const { hasLevelledUp, dismiss } = useGetNewLevelStatus(levelProgress?.level, caip10WalletAddress);

  const { data: getTokenBalance, isLoading: isLoadingPCTokens } = useGetPCTokenBalance(userDetails?.userId);

  const { name: badgeName, Icon: BadgeIcon } = getLevelBadge(userDetails?.level);


    const canClaimPCTokens = getTokenBalance?.claimableTokens > 0 && !rewardsLocked;
    const isLoadingClaimButton = isLoadingPCTokens && isLockedStatusLoading;

    const xpNeededToLevelUp =
      levelProgress?.xpProgress?.xpNeededForNextLevel != null
        ? levelProgress.xpProgress.xpNeededForNextLevel - levelProgress.xpProgress.currentXPInLevel
        : 0;

    const progressPercentage = levelProgress?.xpProgress?.progressPercentage ?? 0;

    const levelConfigData = FALLBACK_LEVEL_CONFIG;
    const currentLevelConfig = levelConfigData.find(
      (config) => config.level === levelProgress?.level
    );

  const levelUpRewards = [
      {
        id: 1,
        value: String(currentLevelConfig?.pcTokensReward),
        label: "PC Tokens",
        type: "pc_tokens"
      },
      {
        id: 2,
        value: String(currentLevelConfig?.pointsReward),
        label: "Points",
        type: "points"
      },
      ...(currentLevelConfig?.milestones?.questXPMultiplier
           ? [
               {
                 id: 3,
                 value: `+${currentLevelConfig?.milestones.questXPMultiplier}%`,
                 label: "XP 24h",
                 type: "xp_boost",
               },
             ]
           : []),
    ];

  return(
    <Box
      borderRadius="radius-md"
      padding="spacing-md"
      height={{ initial: '100%', tb: 'auto' }}
      minHeight={{ tb: '200px' }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width={{ initial: 'auto', tb: '100%' }}
      css={css`
            border: 1px solid rgba(171, 70, 248, 0.40);
            background: rgba(0, 0, 0, 0.10);
            background-blend-mode: plus-lighter;
            box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
            backdrop-filter: blur(10px);
            min-width: 296px;
            max-width: 296px;
            box-sizing: border-box;
            ${fadeInCss(0)}

            @media (max-width: 768px) {
              min-width: 100%;
              max-width: 100%;
            }
        `}>

      <Box>
          <Box display="flex" flexDirection="row" justifyContent="center" gap="spacing-xs" alignItems="center">
              {userDetails && <BadgeIcon width={45} height={45} />}
              <Skeleton isLoading={isLoading}>
                <Text variant="h2-semibold">Lv. {levelProgress?.level} </Text>
              </Skeleton>
            </Box>

            <Skeleton isLoading={isLoading}>
                <Text
                  variant="bs-semibold"
                  textAlign="center"
                  css={css`
                    color: rgba(255, 255, 255, 0.75);
                    margin: 8px;
                  `}>
                  Earn { xpNeededToLevelUp || '-' } XP to level up
              </Text>
            </Skeleton>
      </Box>

        <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
            width="100%"
            css={css`
              box-sizing: border-box;
              padding-bottom: 24px;
            `}
          >


            <ProgressBar
              progress={(progressPercentage) || null}
              max={100}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
            />
      </Box>

      <Skeleton isLoading={isLoadingClaimButton}>
      {canClaimPCTokens &&
        <Button
        onClick={() => setIsClaimModalOpen(true)}
        css={css`
            width: fit-content;
            margin: 0 auto;
        `}>
        Claim PC Token Rewards
        </Button>
        }
      </Skeleton>

      <ClaimPCTokenModal
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
      />


      <LevelUpModal
        isOpen={isModalOpen || hasLevelledUp}
        onClose={() => { setIsModalOpen(false); dismiss(); }}
        level={levelProgress?.level || 0}
        rewards={levelUpRewards}
      />
    </Box>
  )
}
