import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

import { Box, Text } from "../../blocks";
import { DepositForm } from "../PreMigrate/DepositForm";
import { MIGRATION_LOCKER_ADDRESS } from "../../config/migration";

export const Migrate = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const isWalletConnected = Boolean(universalAccount?.address);
  const userAddress = universalAccount?.address;

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
            Migrate your $PUSH to $PC
          </Text>
          <Text
            variant="h4-regular"
            color="text-secondary"
            css={css`max-width: 707px;`}
          >
            Lock your old PUSH tokens on Ethereum and claim your new native $PUSH tokens on Push Chain at a 1:15 ratio.
          </Text>
        </Box>

        <DepositForm
          isWalletConnected={isWalletConnected}
          userAddress={userAddress}
          lockerAddress={MIGRATION_LOCKER_ADDRESS}
        />
      </Box>
    </Box>
  );
};
