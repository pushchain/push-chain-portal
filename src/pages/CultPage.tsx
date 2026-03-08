import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Cult } from "../components/Cult/Cult";

const CultPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Push Cult</title>
        <meta property="og:title" content="Push Cult Leaderboard" />
        <meta property="og:description" content="Earn rewards on Push Protocol" />
        <meta
          property="og:image"
          content="https://portal.push.org/static/assets/previews/og-preview.webp"
        />
        <meta property="og:url" content="https://portal.push.com/cult/leaderboard/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://portal.push.org/static/assets/previews/twitter-preview.webp"
        />
        <meta name="twitter:title" />
        <meta name="twitter:description" content="Earn rewards on Push Protocol" />
      </Helmet>

      <CultPageWrapper>
        <Cult />
      </CultPageWrapper>
    </>
  );
};

export default CultPage;

const CultPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: DM Sans, sans-serif;
`;
