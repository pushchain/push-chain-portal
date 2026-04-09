import { useState } from 'react';
import { css } from 'styled-components';
import { Alert, Box } from '../../../blocks';
import SpinToWinCard from './SpinToWinCard';
import CollectRaresCard from './CollectRaresCard';
import { RarePassSection } from '../Dashboard/LoggedInVerified/RarePassSection';

const HeroBannerCards = () => {
  const [showUnmintedAlert, setShowUnmintedAlert] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      width="100%"
    >
      {showUnmintedAlert && (
        <Alert
          variant="error"
          description="You must confirm and claim your pass before opening another one."
          onClose={() => setShowUnmintedAlert(false)}
        />
      )}

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
        <RarePassSection onBlockedOpen={() => setShowUnmintedAlert(true)} />
      </Box>
    </Box>
  );
};

export default HeroBannerCards;
