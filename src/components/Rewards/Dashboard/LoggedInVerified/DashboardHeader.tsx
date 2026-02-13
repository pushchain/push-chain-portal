import { FC } from 'react';
import { css, keyframes } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import useMediaQuery from '../../../../hooks/useMediaQuery';
import { device } from '../../../../config/globals';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { useGetSeasonThreeUserByWallet } from '../../../../queries';

import { Box, HoverableSVG, Refresh, Text } from '../../../../blocks';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const DashboardHeader: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const { universalAccount } = usePushWalletContext();
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { isFetching, refetch } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        position="relative">
        <Text
          variant="h2-semibold"
          css={css`
            background: linear-gradient(180deg, #fff 30.29%, #c968e7 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Build, Test, & Earn Rare Rewards
        </Text>
        <Text variant="bs-regular" color="text-tertiary">
          Explore Universal Apps. Gain XP. Unlock Spins & Earn Rewards!
        </Text>
      </Box>

      {!isMobile && (<Box
        display="flex"
        alignItems="center"
        cursor="pointer"
        gap="spacing-xxs"
        onClick={()=> refetch()}
        css={css`
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(66, 67, 103, 0.20);
          padding: 8px 12px;
        `}
      >
        <HoverableSVG
          defaultBackground="#FBE8FF"
          hoverBackground="#FBE8FF"
          padding="spacing-xxxs"
          borderRadius="radius-sm"
          icon={
            <Box
              css={css`
                display: flex;
                ${isFetching && css`animation: ${spin} 0.5s linear infinite;`}
              `}
            >
              <Refresh color="icon-brand-medium" />
            </Box>
          }
        ></HoverableSVG>
        <Box margin="spacing-none spacing-none spacing-none spacing-xxxs">
          <Text variant="bs-semibold" color="text-tertiary">
            Update
          </Text>
        </Box>
      </Box>)}
    </Box>
  );
};
