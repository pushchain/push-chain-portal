import { useState } from "react";
import { css } from "styled-components";

import { useAuthHeaders } from "../../context/authHeadersContext";
import { useGetLevelProgress } from "../../queries";

import { Box, LevelUpIcon, ProgressBar, RewardsStarGradient, Skeleton, Text } from "../../blocks"
import LevelUpModal from "./LevelUpModal";
import { useGetNewLevelStatus } from "./hooks/useGetNewLevelStatus";

interface UserLevelConfigItem {
  level: number;
  xpNeeded: number;
  pointsReward: number;
  pcTokensReward: number;
  milestones?: {
    rarePassDormant?: boolean;
    rarePassActive?: boolean;
    eternalTorch?: boolean;
    referralThaw?: boolean;
    questXPMultiplier?: number;
    cashInjection?: string;
    paragonMode?: boolean;
  };
}

const DEFAULT_USER_LEVEL_CONFIG: UserLevelConfigItem[] = [
  { level: 1, xpNeeded: 0, pointsReward: 500, pcTokensReward: 0, milestones: {} },
  { level: 2, xpNeeded: 500, pointsReward: 1100, pcTokensReward: 10 },
  { level: 3, xpNeeded: 1000, pointsReward: 1150, pcTokensReward: 10 },
  { level: 4, xpNeeded: 1500, pointsReward: 1200, pcTokensReward: 10 },
  { level: 5, xpNeeded: 2000, pointsReward: 1250, pcTokensReward: 10 },
  { level: 6, xpNeeded: 2500, pointsReward: 1300, pcTokensReward: 10 },
  { level: 7, xpNeeded: 3000, pointsReward: 1350, pcTokensReward: 10 },
  { level: 8, xpNeeded: 3500, pointsReward: 1400, pcTokensReward: 10 },
  { level: 9, xpNeeded: 4000, pointsReward: 1450, pcTokensReward: 10 },
  { level: 10, xpNeeded: 4500, pointsReward: 1500, pcTokensReward: 70, milestones: { referralThaw: true, rarePassDormant: true } },
  { level: 11, xpNeeded: 5300, pointsReward: 1550, pcTokensReward: 10 },
  { level: 12, xpNeeded: 6100, pointsReward: 1600, pcTokensReward: 10 },
  { level: 13, xpNeeded: 6900, pointsReward: 1650, pcTokensReward: 10 },
  { level: 14, xpNeeded: 7700, pointsReward: 1700, pcTokensReward: 10 },
  { level: 15, xpNeeded: 8500, pointsReward: 1750, pcTokensReward: 10 },
  { level: 16, xpNeeded: 9500, pointsReward: 1800, pcTokensReward: 10 },
  { level: 17, xpNeeded: 10500, pointsReward: 1850, pcTokensReward: 10 },
  { level: 18, xpNeeded: 11500, pointsReward: 1900, pcTokensReward: 10 },
  { level: 19, xpNeeded: 12500, pointsReward: 1950, pcTokensReward: 10 },
  { level: 20, xpNeeded: 13700, pointsReward: 2000, pcTokensReward: 70, milestones: { questXPMultiplier: 1.05, cashInjection: "small" } },
  { level: 21, xpNeeded: 14900, pointsReward: 2050, pcTokensReward: 10 },
  { level: 22, xpNeeded: 16100, pointsReward: 2100, pcTokensReward: 10 },
  { level: 23, xpNeeded: 17300, pointsReward: 2150, pcTokensReward: 10 },
  { level: 24, xpNeeded: 18500, pointsReward: 2200, pcTokensReward: 10 },
  { level: 25, xpNeeded: 19700, pointsReward: 2250, pcTokensReward: 10, milestones: { rarePassActive: true } },
  { level: 26, xpNeeded: 20700, pointsReward: 2300, pcTokensReward: 10 },
  { level: 27, xpNeeded: 21700, pointsReward: 2350, pcTokensReward: 10 },
  { level: 28, xpNeeded: 22700, pointsReward: 2400, pcTokensReward: 10 },
  { level: 29, xpNeeded: 23700, pointsReward: 2450, pcTokensReward: 10 },
  { level: 30, xpNeeded: 24700, pointsReward: 2500, pcTokensReward: 100, milestones: { questXPMultiplier: 1.10, cashInjection: "mid" } },
  { level: 31, xpNeeded: 25700, pointsReward: 2550, pcTokensReward: 10 },
  { level: 32, xpNeeded: 26700, pointsReward: 2600, pcTokensReward: 10 },
  { level: 33, xpNeeded: 27700, pointsReward: 2650, pcTokensReward: 10 },
  { level: 34, xpNeeded: 28700, pointsReward: 2700, pcTokensReward: 10 },
  { level: 35, xpNeeded: 29700, pointsReward: 2750, pcTokensReward: 10 },
  { level: 36, xpNeeded: 30700, pointsReward: 2800, pcTokensReward: 10 },
  { level: 37, xpNeeded: 31700, pointsReward: 2850, pcTokensReward: 10 },
  { level: 38, xpNeeded: 32700, pointsReward: 2900, pcTokensReward: 10 },
  { level: 39, xpNeeded: 33700, pointsReward: 2950, pcTokensReward: 10 },
  { level: 40, xpNeeded: 34700, pointsReward: 3000, pcTokensReward: 100, milestones: { questXPMultiplier: 1.15, cashInjection: "large" } },
  { level: 41, xpNeeded: 35700, pointsReward: 3050, pcTokensReward: 10 },
  { level: 42, xpNeeded: 36700, pointsReward: 3100, pcTokensReward: 10 },
  { level: 43, xpNeeded: 37500, pointsReward: 3150, pcTokensReward: 10 },
  { level: 44, xpNeeded: 38300, pointsReward: 3200, pcTokensReward: 10 },
  { level: 45, xpNeeded: 39100, pointsReward: 3250, pcTokensReward: 10 },
  { level: 46, xpNeeded: 39900, pointsReward: 3300, pcTokensReward: 10 },
  { level: 47, xpNeeded: 40700, pointsReward: 3350, pcTokensReward: 10 },
  { level: 48, xpNeeded: 41500, pointsReward: 3400, pcTokensReward: 10 },
  { level: 49, xpNeeded: 42300, pointsReward: 3450, pcTokensReward: 10 },
  {   level: 50, xpNeeded: 44500, pointsReward: 3500, pcTokensReward: 210, milestones: { rarePassActive: true, paragonMode: true } },
];

export const LevelUp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { authHeaders } = useAuthHeaders();
    const { data: levelProgress, isLoading } = useGetLevelProgress(authHeaders);
    const { hasLevelledUp, dismiss } = useGetNewLevelStatus(levelProgress?.level, authHeaders?.walletAddress);


    const xpNeededToLevelUp =
      levelProgress?.nextLevelConfig?.xpNeeded - levelProgress?.xp;

    const progressPercentage =
      levelProgress?.nextLevelConfig?.xpNeeded
        ? (levelProgress?.xp / levelProgress?.nextLevelConfig?.xpNeeded) * 100
        : 0;

    const currentLevelConfig = DEFAULT_USER_LEVEL_CONFIG.find(
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

            @media (max-width: 768px) {
              min-width: 100%;
              max-width: 100%;
            }
        `}>

      <Box>
          <Box display="flex" flexDirection="row" justifyContent="center" gap="spacing-xs" alignItems="center">
          <LevelUpIcon />
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


      <LevelUpModal
        isOpen={isModalOpen || hasLevelledUp}
        onClose={() => { setIsModalOpen(false); dismiss(); }}
        level={levelProgress?.level || 0}
        rewards={levelUpRewards}
      />
    </Box>
  )
}
