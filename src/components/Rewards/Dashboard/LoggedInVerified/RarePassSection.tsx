import { FC } from 'react';
import { css } from 'styled-components';

import { Box, Text, ArrowRight, Link } from '../../../../blocks';
import { LockedPassCard } from './LockedPassCard';

export const RarePassSection: FC = () => {
  return (
    <Box
      borderRadius="radius-lg"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-end"
      padding={{ initial: "spacing-md", ml: "spacing-sm" }}
      // height={{ initial: '374px' }}
      minHeight={{ tb: '300px' }}
      overflow='hidden'
      position='relative'
      css={css`
        flex: 1;
        border: 1px solid rgba(171, 70, 248, 0.40);
        background: rgba(0, 0, 0, 0.10);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(3px);


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
        <Box display="flex" alignItems="center" gap="spacing-md" width="100%" justifyContent="space-between" flexDirection={{initial: 'row', ms: 'column'}}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Text variant="h4-semibold" color="text-primary">
              Rare Pass
            </Text>
            <Text variant="bm-regular" color="text-tertiary">
              Collect and Open Rare Passes for a special reveal on Mainnet
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            minWidth={{initial: "90px", ms: '100%'}}
            gap="spacing-xxs"
            css={css`
              z-index: 90;
            `}
          >
            <Link
              to="/rewards/pushpass"
              textProps={{ variant: 'bm-bold', color: '#C742DD'}}
            >
              View All
              </Link>
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
