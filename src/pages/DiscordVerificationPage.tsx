import styled from "styled-components";
import { DiscordVerification } from "../../src/components/discordVerification/DiscordVerification";

export const DiscordVerificationPage = () => {
  return (
    <Wrapper>
      <DiscordVerification />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: DM Sans, sans-serif;
  flex: 1;
`;
