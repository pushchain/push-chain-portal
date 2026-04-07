import { FC } from 'react';
import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { Box, Text, ArrowRight, Link, Lock, Button, Skeleton } from '../../../../blocks';
import { LockedPassCard } from './LockedPassCard';
import { useGetCharacterInfo, useGetRarePassHistory, useGetSeasonThreeUserByWallet } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { useNavigate } from 'react-router-dom';
import OpenPassImage from '../../../../../static/assets/website/pushpass/OpenPass.webp';
import OpenPassLockedImage from '../../../../../static/assets/website/pushpass/OpenPassLocked.webp';
import { device } from '../../../../config/globals';

type RarePassSectionProps = {
  onBlockedOpen?: () => void;
};

export const RarePassSection: FC<RarePassSectionProps> = ({ onBlockedOpen }) => {
  const navigate = useNavigate();
  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userCharacterInfo, isLoading: isLoadingCharacters } = useGetCharacterInfo({
    walletAddress: caip10WalletAddress,
  });

  const { data: userDetails, isLoading: isLoadingUserDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { data: rarePassHistory, isLoading: isLoadingHistory } = useGetRarePassHistory({
    userId: userDetails?.userId ?? '',
  });

  const isLoading = isLoadingCharacters || isLoadingUserDetails || isLoadingHistory;

  const rareActiveCount = rarePassHistory?.summary?.currentBalance?.rareActiveCount ?? 0;
  const rareDormantCount = rarePassHistory?.summary?.currentBalance?.rareDormantCount ?? 0;
  const characters = userCharacterInfo?.characters || [];
  const unmintedCharacters = characters?.filter((c) => c.status === 'UNMINTED');

  const passes = [
    // Active rare passes — all openable
    ...Array.from({ length: rareActiveCount }, (_, index) => ({
      id: index + 1,
      isLocked: false,
      lockMessage: 'Open Pass',
    })),

    // Dormant passes — locked until Level 25
    ...Array.from({ length: rareDormantCount }, (_, index) => ({
      id: rareActiveCount + unmintedCharacters.length + index + 1,
      isLocked: true,
      lockMessage: 'Unlocks at Lv. 25',
    })),
  ];

  const displayPasses = passes.slice(0, 2);

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
          css={css`
            z-index: 99;
          `}
        >
          {isLoading ? (
            <>
              <Skeleton isLoading width="100%" height="230px" borderRadius="radius-xs" />
              <Skeleton isLoading width="100%" height="230px" borderRadius="radius-xs" />
            </>
          ) : displayPasses.length > 0 ? (
            displayPasses?.map((pass) => (
              <Box
                key={pass.id}
                borderRadius="radius-xs"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="spacing-sm"
                cursor={!pass.isLocked ? 'pointer' : 'default'}
                onClick={() => {
                  if (!pass.isLocked) {
                    if (unmintedCharacters.length > 0 && onBlockedOpen) {
                      onBlockedOpen();
                      return;
                    }
                    navigate('/rewards/pushpass/open');
                  }
                }}
                css={css`
                  flex: 1;
                  width: 100%;
                  height: 230px;
                  background: url(${pass.isLocked ? OpenPassLockedImage : OpenPassImage}) center center/cover no-repeat;
                  background-size: contain;
                  box-sizing: border-box;

                  @media ${device.tablet} {
                    height: 300px;
                  }

                  @media ${device.mobileL} {
                    height: 200px;
                  }
                `}
              >
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="spacing-xxs" height="100%" width="100%">
                  {pass.isLocked ? (
                    <>
                      <Lock size={32} color="icon-primary" />
                      <Text variant="bs-bold" color="text-primary" textAlign="center" css={css`text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);`}>
                        {pass.lockMessage}
                      </Text>
                    </>
                  ) : (
                    <Button
                      size="small"
                      variant="primary"
                      css={css`
                      background: #d548ec;
                      box-shadow: 0px 4px 18.9px rgba(0, 0, 0, 0.5);
                      `}
                    >
                      {pass.lockMessage}
                    </Button>
                  )}
                </Box>
              </Box>
            ))
          ) : (
            <>
              <LockedPassCard message="Unlocks at Lv. 15" />
              <LockedPassCard message="Spin to Unlock" />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
