import { FC } from 'react';

import {
  Noobie,
  Sidekick,
  Underdog,
  Hotshot,
  Ace,
  Ninja,
  Rockstar,
  Wizard,
  Superhero,
  Immortal,
} from '../blocks';
import { IllustrationProps } from '../blocks/illustrations/Illustrations.types';

type LevelBadge = {
  name: string;
  Icon: FC<IllustrationProps>;
};

const LEVEL_BADGES: { minLevel: number; name: string; Icon: FC<IllustrationProps> }[] = [
  { minLevel: 50, name: 'Immortal', Icon: Immortal },
  { minLevel: 43, name: 'Superhero', Icon: Superhero },
  { minLevel: 36, name: 'Wizard', Icon: Wizard },
  { minLevel: 30, name: 'Rockstar', Icon: Rockstar },
  { minLevel: 25, name: 'Ninja', Icon: Ninja },
  { minLevel: 20, name: 'Ace', Icon: Ace },
  { minLevel: 15, name: 'Hotshot', Icon: Hotshot },
  { minLevel: 10, name: 'Underdog', Icon: Underdog },
  { minLevel: 5, name: 'Sidekick', Icon: Sidekick },
  { minLevel: 1, name: 'Noobie', Icon: Noobie },
];

export const getLevelBadge = (level: number | undefined): LevelBadge => {
  if (!level || level < 1) return { name: 'Noobie', Icon: Noobie };

  for (const badge of LEVEL_BADGES) {
    if (level >= badge.minLevel) {
      return { name: badge.name, Icon: badge.Icon };
    }
  }

  return { name: 'Noobie', Icon: Noobie };
};
