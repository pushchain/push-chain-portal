import styled from "styled-components";
import { Helmet } from "react-helmet";
import { PreMigrate } from "../components/PreMigrate/PreMigrate";

const PreMigratePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pre-Migrate | Push Chain</title>
        <meta property="og:title" content="Pre-Migrate | Push Chain" />
        <meta
          property="og:description"
          content="Migrate your PUSH tokens to Push Chain"
        />
      </Helmet>

      <PreMigrateWrapper>
        <PreMigrate />
      </PreMigrateWrapper>
    </>
  );
};

export default PreMigratePage;

const PreMigrateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "DM Sans", sans-serif;
`;
