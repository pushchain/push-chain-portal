import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Text } from '../../../../blocks';
import { useGetSeasonThreeUserByWallet } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { usePushWalletContext } from '@pushchain/ui-kit';
import TotalMultiplierBg from '../../../../../static/assets/website/rewards/total-multiplier-bg.webp';
import { device } from '../../../../config/globals';
import { fadeInCss } from '../../utils/FadeIn';

const formatTimeLeft = (ms: number): string => {
  if (ms <= 0) return '0H';
  const hours = Math.ceil(ms / 3600000);
  return `${hours}H`;
};

export const MultiplierCard: FC = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails, isLoading } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });

  const now = new Date();

  const permaBoostPercent = Math.round(((userDetails?.permaXPMultiplier ?? 1) - 1) * 100);

  const activeBoosts = (userDetails?.xpTempBoosts ?? [])?.filter(
    (b: { expiresAt: string }) => new Date(b.expiresAt) > now
  );

  const tempBoostPercent = Math.round(
    activeBoosts?.reduce((sum: number, b: { amount: number }) => sum + b.amount, 0) * 100
  );

  const earliestExpiry = activeBoosts.length > 0
    ? activeBoosts.reduce(
        (earliest: Date, b: { expiresAt: string }) => {
          const exp = new Date(b.expiresAt);
          return exp < earliest ? exp : earliest;
        },
        new Date(activeBoosts[0].expiresAt)
      )
    : null;

  return (
    <Box
      height="196px"
      borderRadius="radius-md"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      padding="spacing-sm spacing-sm"
      position="relative"
      css={css`
        flex: 1;
        border: none;
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 53.87%, #143C23 100%);
        ${fadeInCss(160)}

        @media ${device.mobileL} {
          grid-column: span 2;
        }
        box-sizing: border-box;
        position: relative;

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
      <Box
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
          width: 65%;
          height: 65%;
          background: url(${TotalMultiplierBg}) no-repeat bottom right;
          background-size: contain;
          pointer-events: none;
          z-index: 0;
        `}
      />

      <Box display="flex" flexDirection="column" alignItems="flex-start" position="relative" css={css`z-index: 1;`}>
              <Text variant="h1-bold" color="text-primary" css={css`
                @media ${device.mobileL} {
                    font-size: 30px;
                }
                `}>
          { userDetails?.permaMultiplier }x
        </Text>
        {permaBoostPercent > 0 && (
          <Text variant='h5-regular' color='#68FFB4'>
            +{permaBoostPercent}% permanent
          </Text>
        )}
        {tempBoostPercent > 0 && earliestExpiry && (
          <Text variant='h5-regular' color='#68FFB4'>
            +{tempBoostPercent}% ({formatTimeLeft(earliestExpiry.getTime() - now.getTime())})
          </Text>
        )}
        <Text variant="h5-semibold" color="text-tertiary">
          XP
          <br />
          Multiplier
        </Text>
      </Box>
    </Box>
  );
};
