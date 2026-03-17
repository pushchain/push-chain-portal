import { FC } from 'react';
import { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Box, Text, ArrowRight } from '../../../../blocks';
import { LockedPassCard } from './LockedPassCard';

export const RarePassSection: FC = () => {
  return (
    <Box
      borderRadius="radius-md"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-end"
      padding="spacing-md"
      height="-webkit-fill-available"
      position='relative'
      css={css`
        flex: 1;
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: rgba(255, 255, 255, 0.10);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap="spacing-md" width="100%">
        <Box display="flex" alignItems="center" gap="spacing-md" width="100%" justifyContent="space-between" flexDirection='row'>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Text variant="h4-semibold" color="text-primary">
              Rare Pass
            </Text>
            <Text variant="bm-regular" color="text-tertiary">
              Claim and Burn for a chance to mint Legendary Shiny
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            minWidth="90px"
            gap="spacing-xxs"
          >
            <NavLink
              to="/rewards/squads"
              style={{
                textDecoration: 'none',
                color: "#C742DD"
              }}
            >
              View All
              </NavLink>
              <ArrowRight size={14} />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          gap="spacing-xxs"
          width="100%"
          flexDirection='row'
        >
          <LockedPassCard message="Unlocks at Lv. 15" />
          <LockedPassCard message="Spin to Unlock" />
        </Box>
      </Box>
    </Box>
  );
};
