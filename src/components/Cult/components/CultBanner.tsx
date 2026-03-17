import { css } from 'styled-components';
import { Box, Text } from '../../../blocks';

type CultBannerProps = {
    color1: string;
    color2: string;
    title: string;
    description: string; 
}

const CultBanner: React.FC<CultBannerProps> = ({ color1, color2, title, description }) => {
  return (
    <Box
      width="100%"
      gap="spacing-sm"
      padding="spacing-md"
      borderRadius="radius-md"
      border="border-xs solid stroke-tertiary"
      overflow="hidden"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        background: linear-gradient(82.48deg, ${color1} 26.52%, ${color2} 71.68%);
        box-sizing: border-box;
      `}
    >

      <Box
        gap="spacing-lg"
        css={css`
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        `}
      >
        <Box
          gap="spacing-xxs"
          css={css`
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            text-align: left;
          `}
        >
          <Text
            variant="h3-semibold"
            css={css`
              width: 100%;
              background: linear-gradient(180deg, rgba(0, 0, 0, 1) 30%, rgba(133, 83, 44, 1) 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            {title}
          </Text>

          <Text
            variant="bm-semibold"
            css={css`
              width: 100%;
              background: #000000BF;
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
            color='#000000BF'
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CultBanner;
