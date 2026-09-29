import { useState } from "react";
import { css } from "styled-components";
import { Add, ArrowRight, ArrowUpRight, Box, Button, Minus, Text } from "../../blocks";

const faqs = [
  {
    question: "What is Push?",
    answer:
      "Push is the world's first blockchain-agnostic decentralised communication protocol for Web3. It is an open network for validating and indexing all sorts of communication (notifications, chats, etc) that can then be integrated by any crypto frontend (dApps, wallets, etc).\n\nAny smart contract, dApp, or backend service can integrate Push to provide a communication layer through notifications or chats that are tied to the wallet addresses of users.",
  },
  {
    question: "What is Push trying to solve?", answer:
    `- Fragmentation
    Unites EVM & non-EVM chains under one shared-state L1, so users never need to hop networks or wallets.

    - Interoperability
    Native support for transactions from any blockchain and on-chain shared state.

    - Finality
    Instant, irreversible native finality in ~1-2 seconds – no more waiting or reorgs.

    - Onboarding & UX
    Social/email login, gas-in-any-token & any-wallet support for zero-friction access across chains.

    - Universal Apps
    Build once, deploy everywhere — any web3 app works seamlessly for any user on any chain.`
  },
  { question: "What are the web3 communication products launched by Push?", answer: null },
  { question: "How can I use Push as an end-user?", answer: null },
  { question: "Is Push a blockchain? Is Push decentralised?", answer: null },
];

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Box display="flex" flexDirection="row" alignItems="flex-start" gap="spacing-md" width="100%">
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
        alignItems="flex-start"
        css={css`
          width: 383px;
          flex-shrink: 0;
        `}
      >
        <Text variant="h2-semibold" color="text-primary">
          Frequently Asked Questions
        </Text>
        <Button variant="primary" size="large" trailingIcon={<ArrowUpRight size={24} />}>
          Ask us on Discord
        </Button>
      </Box>

      <Box display="flex" flexDirection="column" gap="spacing-xxs" alignItems="flex-end" css={css`flex: 1; min-width: 0;`}>
        <Box display="flex" flexDirection="column" width="100%">
          {faqs.map((faq, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              padding="spacing-md"
              css={css`
                padding-left: 0;
                padding-right: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.12);
                width: 100%;
              `}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="spacing-md"
                cursor="pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                css={css`
                  &:hover { opacity: 0.8; }
                `}
              >
                <Text variant="h4-regular" color="text-primary">
                  {faq.question}
                </Text>
                {openFaq === index ? (
                  <Minus size={28} color="icon-primary" />
                ) : (
                  <Add size={28} color="icon-primary" />
                )}
              </Box>
              {openFaq === index && faq.answer && (
                <Box display="flex" flexDirection="column" margin="spacing-sm spacing-none">
                  {faq.answer.split("\n\n").map((para, i) => (
                    <Text key={i} variant="bl-regular" color="text-secondary">
                      {para}
                    </Text>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xxs"
          cursor="pointer"
          css={css`
            margin-top: 8px;
            &:hover { opacity: 0.8; }
          `}
        >
          <Text variant="bm-semibold" color="text-primary">
            Explore FAQs
          </Text>
          <ArrowRight size={16} color="icon-secondary" />
        </Box>
      </Box>
    </Box>
  );
};
