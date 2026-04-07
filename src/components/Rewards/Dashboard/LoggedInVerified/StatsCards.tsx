import { FC } from 'react';
import { css } from 'styled-components';
import { Box } from '../../../../blocks';
import { device } from '../../../../config/globals';
import { LevelCard } from './LevelCard';
import { PointsCard } from './PointsCard';
import { MultiplierCard } from './MultiplierCard';

export const StatsCards: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      gap={{ initial: "spacing-md", ml: "spacing-sm"}}
      width="100%"
      flexDirection='row'
      css={css`
        @media (max-width: 1200px) and (min-width: 769px) {
          flex-wrap: wrap;
          & > * {
            flex: 1 1 calc(50% - var(--spacing-md));
            min-width: 0;
          }
        }
        @media ${device.mobileL} {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}
    >
      <LevelCard />
      <PointsCard />
      <MultiplierCard />
    </Box>
  );
};
