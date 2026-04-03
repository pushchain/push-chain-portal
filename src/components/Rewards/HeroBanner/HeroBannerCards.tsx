import { Box } from '../../../blocks';
import SpinToWinCard from './SpinToWinCard';
import CollectRaresCard from './CollectRaresCard';
import { RarePassSection } from '../Dashboard/LoggedInVerified/RarePassSection';

const HeroBannerCards = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ initial: 'row', tb: 'column' }}
      alignItems="stretch"
      gap="spacing-md"
      width="100%"
    >
      <SpinToWinCard />
      <CollectRaresCard />
      <RarePassSection />
    </Box>
  );
};

export default HeroBannerCards;
