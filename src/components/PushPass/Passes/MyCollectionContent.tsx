import { css } from 'styled-components';
import { usePushWalletContext } from '@pushchain/ui-kit';

import { Box, RarePassIcon, Spinner, Text } from '../../../blocks';
import { CharacterImage } from '../CharacterImage';
import { useGetCharacterInfo } from '../../../queries';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';
import { device } from '../../../config/globals';

const MyCollectionContent = () => {
  const { universalAccount } = usePushWalletContext('wallet1');

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain
  );

  const { data: characterInfo, isLoading } = useGetCharacterInfo({
    walletAddress: caip10WalletAddress,
  });



  const characters = characterInfo?.characters || [];
  const mintedCharacters = characters?.filter((c) => c.status === 'MINTED');
  const hasCharacters = mintedCharacters?.length > 0;

  return (
    <Box
      width="100%"
      gap="spacing-md"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >
      <Box
        gap="spacing-xs"
        alignItems={{ initial: 'center', tb: 'flex-start' }}
        css={css`
          display: flex;
          position: relative;
        `}
      >
        <RarePassIcon />

        <Box
          gap="spacing-none"
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            flex: 1;
          `}
        >
          <Box
            gap="spacing-xxxs"
            css={css`
              display: flex;
              align-items: flex-start;
              position: relative;
            `}
          >
            <Text
              variant="h3-semibold"
              css={css`
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                background: linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 1) 50%,
                  rgba(201, 104, 231, 1) 100%
                );
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                white-space: nowrap;
              `}
            >
              My Collection
            </Text>
          </Box>

          <Text variant="bm-regular" color="text-secondary">
            Collect and open as many passes as possible before the burn event. More Rare Pass =
            Higher Chance to score a Shiny
          </Text>
        </Box>
      </Box>

      {isLoading && (
        <Box
          width="100%"
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 169px;
          `}
        >
          <Spinner size="medium" />
        </Box>
      )}

      {!isLoading && !hasCharacters && (
        <Box
          width="100%"
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            min-height: 169px;
          `}
        >
          <Text
            variant="bm-semibold"
            textAlign="center"
            css={css`
              color: rgba(255, 255, 255, 0.25);
            `}
          >
            You don't have any open passes in your collection. <br />
            Play Spins, Level up or complete quests for a chance to win Rare Pass.
          </Text>
        </Box>
      )}

      {!isLoading && hasCharacters && (
        <Box
          gap="spacing-md"
          width="100%"
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: var(--spacing-lg);
            position: relative;

            @media ${device.tablet} {
                grid-template-columns: repeat(2, 1fr);
            }

            @media ${device.mobileL} {
                grid-template-columns: repeat(1, 1fr);
            }
          `}
        >
          {mintedCharacters?.map((character) => (
            <Box
              key={character.characterId}
            >
              <Box
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 8px;
                `}
              >
                <Box
                  borderRadius="radius-md"
                  css={css`
                    background: #ececb4;
                    width: 100%;
                    overflow: hidden;
                  `}
                >
                  <CharacterImage
                    characterId={character.characterId}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MyCollectionContent;
