import { FC } from 'react';
import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetSeasonThreeUserByWallet } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { device } from '../../../../config/globals';

import { Box, Skeleton, Text } from '../../../../blocks';
import { getLevelBadge } from '../../../../helpers/getLevelBadge';
import { fadeInCss } from '../../utils/FadeIn';


export const LevelCard: FC = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails, isLoading } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });

  const { name: badgeName, Icon: BadgeIcon } = getLevelBadge(userDetails?.level);

  return (
    <Box
      height="165px"
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-end"
      padding={{ initial: "spacing-md", tb: "spacing-xxxs"}}
      css={css`
        position: relative;
        flex: 1;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
        box-sizing: border-box;
        ${fadeInCss(0)}

        @media ${device.mobileL}{
            height: 120px;
            width: 100%;
        }
      `}
    >
      <Box
        css={css`
            position: absolute;
            top: -31px;
            left: 50%;
            transform: translateX(-50%) scale(1);
            transform-origin: top center;
            z-index: 99;

            @media ${device.mobileL}{
                transform: translateX(-50%) scale(0.7);
            }

        `}>
        <BadgeIcon />
      </Box>
      <Skeleton isLoading={ isLoading }>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
          <Text
            variant="h5-semibold"
            color="text-tertiary"
            textAlign="center">
            {badgeName}
          </Text>
          <Text
            variant="h1-bold"
            color="text-primary"
            textAlign="center"
            css={css`
              @media ${device.mobileL} {
                  font-size: 23px;
              }
              `}
          >
            Lv. {userDetails?.level || '-'}
          </Text>
          </Box>
      </Skeleton>
    </Box>
  );
};
