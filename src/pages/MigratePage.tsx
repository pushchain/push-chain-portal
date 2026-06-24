import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Migrate } from "../components/Migrate/Migrate";

const MigratePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Migrate | Push Chain</title>
        <meta property="og:title" content="Migrate | Push Chain" />
        <meta
          property="og:description"
          content="Migrate your PUSH tokens to Push Chain"
        />
      </Helmet>

      <MigrateWrapper>
        <Migrate />
      </MigrateWrapper>
    </>
  );
};

export default MigratePage;

const MigrateWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: "DM Sans", sans-serif;
`;
