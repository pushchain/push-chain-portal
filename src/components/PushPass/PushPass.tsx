import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetCharacterInfo, useGetRarePassHistory, useGetSeasonThreeUserByWallet } from '../../queries';

import PushPassHeroBanner from './HeroBanner/PushPassHeroBanner';
import UnopenedPassesContent from './Passes/UnopenedPassesContent';
import MyCollectionContent from './Passes/MyCollectionContent';
import { Box, Link, Text } from '../../blocks';
import { walletToFullCAIP10 } from '../../helpers/web3helper';

const PushPass = () => {
  const { universalAccount } = usePushWalletContext('wallet1');

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userCharacterInfo, isFetching: isLoadingCharacters } = useGetCharacterInfo({
    walletAddress: caip10WalletAddress,
  });

  const { data: userDetails, isLoading: isLoadingUserDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { data: rarePassHistory, isFetching: isLoadingHistory } = useGetRarePassHistory({
    userId: userDetails?.userId ?? '',
  });

  const isLoading = isLoadingCharacters || isLoadingUserDetails || isLoadingHistory;


  const rareActiveCount = rarePassHistory?.summary?.currentBalance?.rareActiveCount ?? 0;
  const rareDormantCount = rarePassHistory?.summary?.currentBalance?.rareDormantCount ?? 0;
  const userLevel = userDetails?.level ?? 0;
  const characters = userCharacterInfo?.characters || [];
  const unmintedCharacters = characters?.filter((c) => c.status === 'UNMINTED');

  const passes = [
    // Active rare passes — all openable
    ...Array.from({ length: rareActiveCount }, (_, index) => ({
      id: index + 1,
      isLocked: false,
      lockMessage: 'Open Pass',
    })),

    // Dormant passes — revealable at Level 25
    ...Array.from({ length: rareDormantCount }, (_, index) => ({
      id: rareActiveCount + index + 1,
      isLocked: true,
      isDormant: true,
      lockMessage: 'Reveal at Lv. 25',
    })),

    // Placeholder: "Unlock at Level 10" — hidden once user has dormant passes
    ...(rareDormantCount === 0
      ? [{
          id: rareActiveCount + 1,
          isLocked: true,
          lockMessage: 'Unlocks at Lv. 10',
        }]
      : []),

    // Placeholder: "Spin to Win"
    {
      id: rareActiveCount + rareDormantCount + 2,
      isLocked: true,
      lockMessage: 'Spin to Win',
    },

    // Placeholder: "Unlock at Level 50" — hidden once user reaches Level 50
    ...(userLevel < 50
      ? [{
          id: rareActiveCount + rareDormantCount + 3,
          isLocked: true,
          lockMessage: 'Unlocks at Lv. 50',
        }]
      : []),
  ];


  return (
    <Box
      width="100%"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
      `}
    >
      <Box
        alignSelf="stretch"
        width="100%"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          gap: 100px;
          z-index: 1;
        `}
      >
        <PushPassHeroBanner />
      </Box>

      <Box
        width="100%"
        borderRadius="radius-none radius-none radius-xl radius-xl"
        css={css`
          position: relative;
          margin-top: -28px;
          z-index: 0;
          box-shadow:
            inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
            inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-sizing: border-box;
        `}
      >
        <Box
          gap="spacing-xxs"
          padding="spacing-xxl spacing-md spacing-md spacing-md"
          borderRadius="radius-none radius-none radius-xl radius-xl"
          width="100%"
          css={css`
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            margin: -1px;
            background: rgba(0, 0, 0, 0.1);
            border: none;
            box-sizing: border-box;

            &::before {
              content: "";
              position: absolute;
              inset: 0;
              padding: 1px;
              border-radius: 0px 0px 32px 32px;
              background: conic-gradient(
                from 90deg at 100% 100%,
                rgba(171, 70, 248, 0.4) 12%,
                rgba(171, 70, 248, 0) 37%,
                rgba(171, 70, 248, 0.4) 62%,
                rgba(171, 70, 248, 0) 87%
              );
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              z-index: 1;
              pointer-events: none;
            }
          `}
        >
          <Box
            gap="spacing-lg"
            alignSelf="stretch"
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              position: relative;
            `}
          >
            <MyCollectionContent
              characters={characters}
              isLoading={isLoading}
            />
            <UnopenedPassesContent
              passes={passes}
              isLoading={isLoading}
              hasUnminted={unmintedCharacters.length > 0}
            />
          </Box>
        </Box>
      </Box>


      <Box
        width="100%"
        padding="spacing-md spacing-none"
      >
        <Text
          variant='h5-regular'
          textAlign='center'>Keep an eye on
            <Link
              to="https://x.com/pushchain"
              textProps={{ variant: "bm-semibold", color: "#C742DD" }}
            >
              {' '}@PushChain{' '}
            </Link>
            for more ways to score more Rare Passes</Text>
      </Box>
    </Box>
  );
};

export default PushPass;
