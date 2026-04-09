import { useState } from "react";
import styled, { css } from "styled-components";
import { Box, PushIcon, Text } from "../../blocks";
import { PushUniversalAccountButton } from "@pushchain/ui-kit";

const AmountInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
  color: #fff;
  width: auto;
  min-width: 1ch;
  field-sizing: content;

  &::placeholder {
    color: var(--text-tertiary);
  }
`;

type DepositFormProps = {
  isWalletConnected: boolean;
};

export const DepositForm = ({ isWalletConnected }: DepositFormProps) => {
  const [amount, setAmount] = useState("");

  return (
  <Box
    display="flex"
    flexDirection="column"
    gap="spacing-md"
    alignItems="flex-start"
    css={css`
      width: 376px;
    `}
  >
    <Box
      width="100%"
      padding="spacing-xxs"
      css={css`
        background: #313338;
        border: 1px solid #484D58;
        border-radius: 24px;
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        padding="spacing-xs"
        width="100%"
        css={css`
          background: #202124;
          border-radius: 16px;
          box-sizing: border-box;
        `}
      >
        <Box display="flex" flexDirection="column" gap="spacing-xxs">
          <Text variant="c-semibold" color="text-tertiary">
            PUSH to be deposited
          </Text>
          <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs">
            <PushIcon size={24} />
            <AmountInput
              // type="number"
              // min="0"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Text variant="h4-bold" color="text-primary">
              PUSH
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="flex-end" width="100%">
          <Text variant="bes-semibold" color="text-tertiary">
            Current Holdings: 0
          </Text>
        </Box>
      </Box>
    </Box>

    <PushUniversalAccountButton uid="wallet1" />

    <Box display="flex" flexDirection="column" gap="spacing-lg" width="100%">
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

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="spacing-md"
        width="100%"
        css={css`
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          box-sizing: border-box;
        `}
      >
        <Text variant="bm-semibold" color="text-primary">
          Total Deposited
        </Text>
        <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs">
          <PushIcon size={24} />
          <Text variant="bs-semibold" color="text-primary">
            0 PUSH
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};
