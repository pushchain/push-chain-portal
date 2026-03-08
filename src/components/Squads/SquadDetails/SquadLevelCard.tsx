import { css } from "styled-components"
import { Box, ProgressBar, RewardsStarGradient, Text } from "../../../blocks"

const squadLevels = [
  { level: 1, totalXPRequired: 0 },
  { level: 2, totalXPRequired: 2000 },
  { level: 3, totalXPRequired: 10000 },
  { level: 4, totalXPRequired: 35000 },
  { level: 5, totalXPRequired: 75000 },
  { level: 6, totalXPRequired: 115000 },
  { level: 7, totalXPRequired: 160000 },
  { level: 8, totalXPRequired: 215000 },
  { level: 9, totalXPRequired: 280000 },
  { level: 10, totalXPRequired: 350000 },
];

const MAX_LEVEL = squadLevels[squadLevels.length - 1].level;

const getLevelProgress = (level: number, totalXp: number) => {
  const isMaxLevel = level >= MAX_LEVEL;

  const currentLevelData = squadLevels.find((l) => l.level === level);
  const currentLevelXP = currentLevelData?.totalXPRequired ?? 0;

  if (isMaxLevel) {
    return {
      xpInLevel: totalXp - currentLevelXP,
      xpNeededForLevel: 0,
      progressPercent: 100,
      nextLevel: null,
      isMaxLevel: true,
    };
  }

  const nextLevelData = squadLevels.find((l) => l.level === level + 1);
  const nextLevelXP = nextLevelData?.totalXPRequired ?? 0;

  const xpNeededForLevel = nextLevelXP - currentLevelXP;
  const xpInLevel = totalXp - currentLevelXP;
  const progressPercent = xpNeededForLevel > 0
    ? Math.min((totalXp / xpNeededForLevel) * 100, 100)
    : 0;

  return {
    xpInLevel,
    xpNeededForLevel,
    progressPercent,
    nextLevel: level + 1,
    isMaxLevel: false,
  };
};

type SquadLevelCardProps = {
  squadName: string;
  level: number;
  totalXp: number;
}


export const SquadLevelCard = ({ squadName, level, totalXp }: SquadLevelCardProps) => {
  const { xpNeededForLevel, progressPercent, isMaxLevel } = getLevelProgress(level, totalXp);

  const remainingXP = xpNeededForLevel - totalXp;


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="spacing-xxs"
      padding="spacing-md"
      borderRadius="radius-md"
      css={css`
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(171, 70, 248, 0.4);
        box-shadow: inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
                    inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        overflow: hidden;
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-xs"
        width="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="spacing-xxs"
        >
          <Text
            variant="h4-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            {squadName}
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            Lv. {level}
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing-xs"
          width="100%"
        >
          <Text
            variant="bs-semibold"
            css={css`
              color: rgba(255, 255, 255, 0.75);
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            `}
          >
            {isMaxLevel
              ? "Max Level Reached"
              : `Earn ${remainingXP?.toLocaleString()} XP to level up`}
          </Text>

          <Box width="100%" height="8px" margin="spacing-sm spacing-none">
            <ProgressBar
              progress={progressPercent}
              max={100}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
