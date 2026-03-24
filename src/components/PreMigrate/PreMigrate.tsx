import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

import { Box, Text } from "../../blocks";
import { CountdownBanner } from "./CountdownBanner";
import { DepositForm } from "./DepositForm";
import { FAQSection } from "./FAQSection";

export const PreMigrate = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const isWalletConnected = Boolean(universalAccount?.address);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="spacing-xl"
      padding="spacing-xl"
      width="100%"
      maxWidth="1200px"
      css={css`
        min-height: 100%;
        box-sizing: border-box;
        position: relative;
        margin: 0 auto;
        z-index: 1;
      `}
    >
      <CountdownBanner />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-xl"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing-xxs"
          textAlign="center"
          width="100%"
        >
          <Text variant="h2-semibold" color="text-primary">
            Pre-Migrate your $PUSH to $PC
          </Text>
          <Text
            variant="h4-regular"
            color="text-secondary"
            css={css`max-width: 707px;`}
          >
            Deposit your tokens to migrate in advance and secure additional allocation from a dedicated pre-migration pool.
          </Text>
        </Box>

        <DepositForm isWalletConnected={isWalletConnected} />
      </Box>

      <FAQSection />
    </Box>
  );
};
