import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { device } from '../../../config/globals';

import RarePassBg from '../../../../static/assets/website/pushpass/RarePassBG.webp';
import { Box, Button, RarePassIcon, Text } from '../../../blocks';
import { CharacterImage } from '../CharacterImage';

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const SkeletonCard = styled.div`
  aspect-ratio: 249 / 329;
  width: 100%;
  max-width: 249px;
  border-radius: var(--radius-xs);
  overflow: hidden;
  position: relative;
  background: url(${RarePassBg}) center/cover;
  filter: grayscale(100%);
  opacity: 0.5;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(171, 70, 248, 0.08) 25%,
      rgba(255, 255, 255, 0.12) 50%,
      rgba(171, 70, 248, 0.08) 75%,
      transparent 100%
    );
    animation: ${shimmer} 1.8s ease-in-out infinite;
  }
`;

type Character = {
  characterId: string;
  status: string;
  [key: string]: any;
};

type MyCollectionContentProps = {
  characters: Character[];
  isLoading: boolean;
};

const MyCollectionContent: FC<MyCollectionContentProps> = ({ characters, isLoading }) => {
  const navigate = useNavigate();

  // Show unminted first, then minted
  const sortedCharacters = [...characters].sort((a, b) => {
    if (a.status === 'UNMINTED' && b.status !== 'UNMINTED') return -1;
    if (a.status !== 'UNMINTED' && b.status === 'UNMINTED') return 1;
    return 0;
  });

  const hasCharacters = sortedCharacters.length > 0;

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
            gap="spacing-xxs"
            css={css`
              display: flex;
              align-items: center;
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
            {sortedCharacters.length > 0 && (
              <Box
                css={css`
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  background: #D548EC;
                  border-radius: 24px;
                  width: 24px;
                  height: 24px;
                  min-width: 24px;
                `}
              >
                <Text variant="bes-semibold" color="text-on-dark-bg">
                  {sortedCharacters.length}
                </Text>
              </Box>
            )}
          </Box>

          <Text variant="bm-regular" color="text-secondary">
            Collect and open as many passes as possible before the burn event. More Rare Pass =
            Higher Chance to score a Shiny
          </Text>
        </Box>
      </Box>

      {isLoading && (
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
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
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
          {sortedCharacters?.map((character) => {
            const isUnminted = character.status === 'UNMINTED';
            return (
              <Box
                key={character.characterId}
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                `}
              >
                <Box
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    background: url(${RarePassBg}) center/cover;
                    width: 100%;
                    max-width: 248px;
                    aspect-ratio: 248 / 328;
                    overflow: hidden;
                    position: relative;
                    ${isUnminted ? 'filter: grayscale(100%); opacity: 0.5;' : ''}
                  `}
                >
                  <CharacterImage
                    characterId={character.characterId}
                    width="100%"
                    height="100%"
                  />
                </Box>

                {isUnminted && (
                  <Box
                    css={css`
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      z-index: 2;
                    `}
                  >
                    <Button
                      size="medium"
                      variant="primary"
                      onClick={() => navigate(`/rewards/pushpass/${character.characterId}`)}
                      css={css`
                        background: #d548ec;
                        box-shadow: 0px 4px 18.9px rgba(0, 0, 0, 0.5);
                        min-width: 100px;
                        height: 48px;
                      `}
                    >
                      Confirm/Reroll Pass
                    </Button>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default MyCollectionContent;
