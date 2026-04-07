import { FC, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Alert, Box, RarePassIcon, Text } from '../../../blocks';
import RarePassCard from './RarePassCard';
import { device } from '../../../config/globals';
import OpenPassImage from '../../../../static/assets/website/pushpass/OpenPass.webp';

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const SkeletonCard = styled.div`
  height: 379px;
  width: 100%;
  border-radius: var(--radius-xs);
  overflow: hidden;
  position: relative;
  background: url(${OpenPassImage}) center/cover;
  filter: brightness(0.4) saturate(0.5);

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

type Pass = {
  id: number;
  isLocked: boolean;
  lockMessage?: string;
  character?: {
    characterId: string;
    status: string;
    [key: string]: any;
  };
};

type UnopenedPassesContentProps = {
  passes: Pass[];
  isLoading?: boolean;
  hasUnminted?: boolean;
};

const UnopenedPassesContent: FC<UnopenedPassesContentProps> = ({ passes, isLoading, hasUnminted }) => {
  const [showUnmintedAlert, setShowUnmintedAlert] = useState(false);

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
      alignItems={{initial: "center", tb: "flex-start"}}
      css={css`
        display: flex;
        position: relative;
      `}
    >
      <RarePassIcon />

      <Box
        gap="spacing-none"
        width="100%"
        alignItems="flex-start"
        css={css`
          display: flex;
          flex-direction: column;
          position: relative;
          flex: 1;
          box-sizing: border-box;
        `}
      >
        <Box
          gap="spacing-xxs"
          display="flex"
          alignItems="center"
          position='relative'
        >
          <Text
            variant="h3-semibold"
            css={css`
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(201, 104, 231, 1) 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              white-space: nowrap;
            `}
          >
            Rare Pass
          </Text>
          {passes?.length > 0 && (
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
                {passes.length}
              </Text>
            </Box>
          )}
        </Box>

        <Text
          variant="bm-regular"
          color="text-secondary"
        >
          Collect and open as many passes as possible before the burn event. More Rare Pass = Higher Chance to score a Shiny
        </Text>
      </Box>
      </Box>

      {showUnmintedAlert && (
        <Box width="100%">
          <Alert
            variant="error"
            description="You must confirm and claim your pass before opening another one."
            onClose={() => setShowUnmintedAlert(false)}
          />
        </Box>
      )}

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

      {!isLoading && !passes.length &&
      <Box
        width="100%"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 125px;
        `}
      >
        <Text
          variant="bm-semibold"
          textAlign="center"
          css={css`
            color: rgba(255, 255, 255, 0.25);
          `}
        >
          Play Spins, Level up or complete quests for a chance to win Rare Pass.
        </Text>
      </Box>}

      {!isLoading && passes.length > 0 &&
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
        {passes?.map((pass) => (
          <RarePassCard
            key={pass.id}
            isLocked={pass.isLocked}
            lockMessage={pass.lockMessage}
            id={pass.id}
            onBlockedOpen={hasUnminted ? () => setShowUnmintedAlert(true) : undefined}
          />
        ))}
      </Box>}
    </Box>
  );
};

export default UnopenedPassesContent;
