import { css } from 'styled-components';
import { Box, GlowStreaks, Text } from '../../../blocks';

import QuestBannerImage from '../../../../static/assets/website/rewards/QuestsBannerCardImg.webp'
import { Image } from '../../../css/SharedStyling';
import { fadeInCss } from '../utils/FadeIn';

const QuestBannerCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ initial: 'auto', tb: '100%' }}
      minWidth={{ initial: '280px', tb: 'auto' }}
      height={{ initial: '100%', tb: 'auto' }}
      minHeight={{ tb: '300px' }}
      padding="spacing-md"
      borderRadius="radius-lg"
      border="border-xs solid stroke-tertiary"
      position="relative"
      overflow="hidden"
      css={css`
        background: #F1D5FF;
        flex: 1;
        box-sizing: border-box;
        gap: 12px;
        ${fadeInCss(300)}
      `}
    >

      <Box css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        pointer-events: none;
        z-index: 0;
      `}>
        <Box css={css`position: absolute; bottom: 0; left: -250px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: -200px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: -150px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: -100px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: 0px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: 150px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>
      </Box>

      <Box
        width="100%"
        height="100%"
        css={css`
          flex: 1;
          min-height: 0;
          z-index: 1;
          overflow: hidden;
        `}
      >
        <Image
          src={QuestBannerImage}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>


      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        gap="spacing-xs"
        position="relative"
        css={css`
          z-index: 1;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs">
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xxs"
            maxWidth="390px"
          >
            <Text
              variant="h3-semibold"
              css={css`
                background: linear-gradient(180deg, rgba(0, 0, 0, 1) 59%, rgba(48, 50, 178, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              Crush quests. Claim XP, Points &amp; hard to get Rare Passes.
            </Text>

            <Text
              variant="bm-regular"
              css={css`
                color: rgba(0, 0, 0, 0.75);
                max-width: 298px;
              `}
            >
              Play and test featured Push Chain apps to level up and earn rewards.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestBannerCard;
