export type SquadLevel = {
  level: number;
  totalXPRequired: number;
};

export const SQUAD_LEVELS: SquadLevel[] = [
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

export const MAX_SQUAD_LEVEL = SQUAD_LEVELS[SQUAD_LEVELS.length - 1].level;

export const deriveSquadLevel = (totalXp: number): number => {
  let level = 1;
  for (const entry of SQUAD_LEVELS) {
    if (totalXp >= entry.totalXPRequired) {
      level = entry.level;
    } else {
      break;
    }
  }
  return level;
};

export const getSquadLevelProgress = (totalXp: number) => {
  const level = deriveSquadLevel(totalXp);
  const isMaxLevel = level >= MAX_SQUAD_LEVEL;

  const currentLevelData = SQUAD_LEVELS.find((l) => l.level === level);
  const currentLevelXP = currentLevelData?.totalXPRequired ?? 0;

  if (isMaxLevel) {
    return {
      level,
      xpInLevel: totalXp - currentLevelXP,
      xpNeededForLevel: 0,
      progressPercent: 100,
      nextLevel: null,
      isMaxLevel: true,
    };
  }

  const nextLevelData = SQUAD_LEVELS.find((l) => l.level === level + 1);
  const nextLevelXP = nextLevelData?.totalXPRequired ?? 0;

  const xpNeededForLevel = nextLevelXP - currentLevelXP;
  const xpInLevel = totalXp - currentLevelXP;
  const progressPercent = xpNeededForLevel > 0
    ? Math.min((xpInLevel / xpNeededForLevel) * 100, 100)
    : 0;

  return {
    level,
    xpInLevel,
    xpNeededForLevel,
    progressPercent,
    nextLevel: level + 1,
    isMaxLevel: false,
  };
};
