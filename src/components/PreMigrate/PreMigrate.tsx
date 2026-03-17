import { useState } from "react";
import styled, { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

import {
  Add,
  ArrowUpRight,
  Box,
  Button,
  CaretRight,
  Cross,
  ExternalLink,
  Info,
  PushMonotone,
  Text,
} from "../../blocks";

const faqs = [
  {
    question: "What is Push?",
    answer:
      "Push is the world's first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc).\n\nAny smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.",
  },
  { question: "What is Push trying to solve?", answer: null },
  {
    question: "What are the web3 communication products launched by Push?",
    answer: null,
  },
  { question: "How can I use Push as an end-user?", answer: null },
  { question: "Is Push a blockchain? Is Push decentralised?", answer: null },
];

export const PreMigrate = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { universalAccount } = usePushWalletContext();

  const isWalletConnected = Boolean(universalAccount?.address);

  return (
    <PageWrapper>
      {/* Countdown Banner */}
      <CountdownBanner>
        <CountdownText>
          <Text variant="h3-semibold" color="text-primary">
            $PUSH Pre-Migration ends in
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            &nbsp;24D : 10H : 59M : 12S
          </Text>
        </CountdownText>
        <Button
          variant="tertiary"
          size="medium"
          trailingIcon={<Info size={16} />}
        >
          Learn More
        </Button>
      </CountdownBanner>

      {/* Hero + Form */}
      <HeroSection>
        {/* Title + Subtitle */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing-xxs"
          css={css`
            text-align: center;
            width: 100%;
          `}
        >
          <Text variant="h2-semibold" color="text-primary">
            Pre-Migrate your $PUSH to $PC
          </Text>
          <SubtitleText variant="h4-regular" color="text-secondary">
            Deposit your tokens to migrate in advance and secure additional
            allocation from a dedicated pre-migration pool.
          </SubtitleText>
        </Box>

        {/* Form Card */}
        <FormCard>
          {/* Deposit Input Box */}
          <DepositInputWrapper>
            <DepositInner>
              <Box
                display="flex"
                flexDirection="column"
                gap="spacing-xxs"
              >
                <Text variant="c-semibold" color="text-tertiary">
                  PUSH to be deposited
                </Text>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="spacing-xxs"
                >
                  <PushMonotone size={24} />
                  <Text variant="h4-bold" color="text-primary">
                    0 PUSH
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                width="100%"
              >
                <Text variant="bes-semibold" color="text-tertiary">
                  Current Holdings: 0
                </Text>
              </Box>
            </DepositInner>
          </DepositInputWrapper>

          {/* Connect Wallet Button */}
          <Button variant="primary" size="medium" block>
            {isWalletConnected ? "Deposit" : "Connect Wallet"}
          </Button>

          {/* Conversion Rate + Total Deposited */}
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-lg"
            width="100%"
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              padding="spacing-xxs"
            >
              <Text variant="h6-regular" color="text-tertiary">
                Conversion rate
              </Text>
              <Text variant="bs-semibold" color="text-secondary">
                1 PUSH=45 PC
              </Text>
            </Box>

            <TotalDepositedCard>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Text variant="bm-semibold" color="text-primary">
                  Total Deposited
                </Text>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="spacing-xxs"
                >
                  <PushMonotone size={24} />
                  <Text variant="bs-semibold" color="text-primary">
                    0 PUSH
                  </Text>
                </Box>
              </Box>
            </TotalDepositedCard>
          </Box>
        </FormCard>
      </HeroSection>

      {/* FAQ Section */}
      <FAQSection>
        <FAQLeft>
          <Text variant="h2-semibold" color="text-primary">
            Frequently Asked Questions
          </Text>
          <Button
            variant="primary"
            size="large"
            trailingIcon={<ArrowUpRight size={24} />}
          >
            Ask us on Discord
          </Button>
        </FAQLeft>

        <FAQRight>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                isLast={index === faqs.length - 1}
              >
                <FAQHeader
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                >
                  <Text variant="h4-regular" color="text-primary">
                    {faq.question}
                  </Text>
                  {openFaq === index ? (
                    <Cross size={28} color="icon-primary" />
                  ) : (
                    <Add size={28} color="icon-primary" />
                  )}
                </FAQHeader>
                {openFaq === index && faq.answer && (
                  <FAQAnswer>
                    {faq.answer.split("\n\n").map((para, i) => (
                      <Text
                        key={i}
                        variant="bl-regular"
                        color="text-secondary"
                        css={i > 0 ? css`margin-top: 16px; display: block;` : undefined}
                      >
                        {para}
                      </Text>
                    ))}
                  </FAQAnswer>
                )}
              </FAQItem>
            ))}
          </FAQList>
          <ExploreFAQs>
            <Text variant="bm-semibold" color="text-primary">
              Explore FAQs
            </Text>
            <CaretRight size={16} color="icon-primary" />
          </ExploreFAQs>
        </FAQRight>
      </FAQSection>
    </PageWrapper>
  );
};

/* ── Styled Components ─────────────────────────────────────────────────── */

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  padding: 48px 0;
  box-sizing: border-box;
  min-height: 100%;
  font-family: "DM Sans", sans-serif;
  position: relative;
  z-index: 1;
`;

const CountdownBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 16px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const CountdownText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

const SubtitleText = styled(Text)`
  max-width: 707px;
`;

const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  width: 376px;
`;

const DepositInputWrapper = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const DepositInner = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 12px 16px;
  gap: 0;
  width: 100%;
  box-sizing: border-box;
`;

const TotalDepositedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
`;

const FAQSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
`;

const FAQLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  width: 383px;
  flex-shrink: 0;
`;

const FAQRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  flex: 1;
  min-width: 0;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FAQItem = styled.div<{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  width: 100%;
`;

const FAQHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

const FAQAnswer = styled.div`
  margin-top: 16px;
`;

const ExploreFAQs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    opacity: 0.8;
  }
`;
