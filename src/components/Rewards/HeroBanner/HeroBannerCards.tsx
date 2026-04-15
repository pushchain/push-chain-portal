import { css } from 'styled-components';
import { Box } from '../../../blocks';
import SpinToWinCard from './SpinToWinCard';
import CollectRaresCard from './CollectRaresCard';
import { RarePassSection } from '../Dashboard/LoggedInVerified/RarePassSection';

const HeroBannerCards = () => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      width="100%"
    >

      <Box
        display="flex"
        flexDirection={{ initial: 'row', tb: 'column' }}
        alignItems="stretch"
        gap="spacing-md"
        width="100%"
        css={css`
          @media (max-width: 1200px) and (min-width: 769px) {
            flex-wrap: wrap;
            & > * {
              flex: 1 1 calc(50% - var(--spacing-md));
              min-width: 0;
            }
          }
        `}
      >
        <SpinToWinCard />
        <CollectRaresCard />
        <RarePassSection />
      </Box>
    </Box>
  );
};

export default HeroBannerCards;
