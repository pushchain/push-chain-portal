import { useState } from 'react';
import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { useGetCharacterEligible, useGetCharacterInfo, useGetRarePassHistory, useGetSeasonThreeUserByWallet } from '../../queries';

import PushPassHeroBanner from './HeroBanner/PushPassHeroBanner';
import PushPassTabs from './Tabs/PushPassTabs';
import UnopenedPassesContent from './Passes/UnopenedPassesContent';
import MyCollectionContent from './Passes/MyCollectionContent';
import { Box, Link, Text } from '../../blocks';
import { walletToFullCAIP10 } from '../../helpers/web3helper';


type TabType = 'unopened' | 'collection';

const PushPass = () => {
  const [activeTab, setActiveTab] = useState<TabType>('unopened');
  const { universalAccount } = usePushWalletContext('wallet1');

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userCharacterInfo, isLoading } = useGetCharacterInfo({
    walletAddress: caip10WalletAddress,
  });

  const { data: userDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { data: isUserEligible } = useGetCharacterEligible({
    userWallet: caip10WalletAddress
  });

  const { data: rarePassHistory } = useGetRarePassHistory({
    userId: userDetails?.userId ?? '',
  });

  const rareActiveCount = rarePassHistory?.summary?.currentBalance?.rareActiveCount ?? 0;
  const rareDormantCount = rarePassHistory?.summary?.currentBalance?.rareDormantCount ?? 0;
  const characters = userCharacterInfo?.characters || [];
  const unmintedCharacters = characters.filter((c) => c.status === 'UNMINTED');

  // Use history to get lock messages (level info) for dormant passes
  const dormantHistory = (rarePassHistory?.history ?? [])
    .filter((item) => item.activityTypeId === 'rare_pass_dormant_grant')
    .slice(0, rareDormantCount);

  const passes = [
    // Cards for unminted characters (already generated, waiting to be minted)
    ...unmintedCharacters.map((char, index) => ({
      id: index + 1,
      isLocked: false,
      lockMessage: 'View Pass',
      character: char,
    })),

    // Cards for active passes the user can claim (not yet generated)
    ...Array.from({ length: rareActiveCount }, (_, index) => ({
      id: unmintedCharacters.length + index + 1,
      isLocked: false,
      lockMessage: 'Open Now',
    })),

    // Cards for dormant (locked) passes
    ...dormantHistory.map((item, index) => {
      const level = (item.details as { level?: number })?.level;
      return {
        id: unmintedCharacters.length + rareActiveCount + index + 1,
        isLocked: true,
        lockMessage: `Unlocks at Lv. ${level}`,
      };
    }),
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
            <PushPassTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === 'unopened' && <UnopenedPassesContent passes={passes} />}
            {activeTab === 'collection' && <MyCollectionContent />}
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
