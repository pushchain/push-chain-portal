import { FC, useState } from 'react';
import { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { Box, Copy, Text } from '../../../../blocks';
import ReferralImage from '../../../../../static/assets/website/rewards/ReferralCard.webp';
import { Image } from '../../../../css/SharedStyling';
import { fadeInCss } from '../../utils/FadeIn';
import { useGetSeasonThreeUserByWallet } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';


export const ReferralCard: FC = () => {
  const [copied, setCopied] = useState(false);

  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );
  const { data: userDetails } = useGetSeasonThreeUserByWallet({ walletAddress: caip10WalletAddress });

  const referralUrl = userDetails?.userId
    ? `portal.push.org/rewards?ref=${userDetails.userId}`
    : null;

  const handleCopy = () => {
    if (!referralUrl) return;
    navigator.clipboard.writeText(`https://${referralUrl}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Box
      borderRadius="radius-md"
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-between"
      padding={{initial: "spacing-md", ml: "spacing-sm"}}
      width="100%"
      css={css`
        flex: 1;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
        box-sizing: border-box;
        ${fadeInCss(240)}
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-xs"
        justifyContent="space-between"
        width="100%"
        height="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="272px">
          <Text variant="h3-semibold" color="text-brand-medium">
            Invite <Text as="span" variant="h3-semibold" color="text-primary">your friends</Text>
          </Text>
          <Text variant="bm-regular" color="rgba(255, 255, 255, 0.75)">
            Enjoy & share rewards with your friends with our rewards system*
          </Text>
        </Box>

        {referralUrl && (
          <Box
            display="flex"
            alignItems="center"
            gap="spacing-xxs"
            onClick={handleCopy}
            css={css`
              cursor: pointer;
              padding: 12px;
              border-radius: 16px;
              border: 1px solid rgba(255, 255, 255, 0.25);
              transition: background 0.15s ease;
              max-width: 100%;
              &:hover {
                background: rgba(255, 255, 255, 0.05);
              }
            `}
          >
            <Text
              variant="bs-regular"
              color="#ffff"
              css={css`
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex: 1;
                min-width: 0;
              `}
            >
              {referralUrl}
            </Text>
            <Text variant="c-regular" color={copied ? '#68FFB4' : 'text-tertiary'} css={css`flex-shrink: 0; font-size: 11px;`}>
              {copied ? 'Copied!' : <Copy color='white' size={15} />}
            </Text>
          </Box>
        )}
      </Box>
      <Box
        position="relative"
        css={css`
          width: 200px;
          flex-shrink: 0;
          align-self: stretch;
          overflow: hidden;
        `}
      >
        <Image src={ReferralImage}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'right center',
            }} />
      </Box>
    </Box>
  );
};
