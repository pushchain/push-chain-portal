import { useState } from "react";
import styled, { css } from "styled-components";
import { AxiosError } from "axios";
import { useResolveWallet, useSendSquadInvite } from "../../../queries/hooks";

import ModalBg from "../../../../static/assets/website/shared/modal-bg.webp";
import { Box, Modal, Text, TextInput } from "../../../blocks";
import { useAuthHeaders } from "../../../context/authHeadersContext";

const CHAIN_OPTIONS = [
  { label: "Push Chain", value: "42101" },
  { label: "Sepolia", value: "11155111" },
  { label: "Ethereum", value: "1" },
  { label: "Polygon", value: "137" },
  { label: "BNB Chain", value: "56" },
  { label: "Arbitrum", value: "42161" },
  { label: "Optimism", value: "10" },
  { label: "Solana", value: "900" },
  { label: "Base", value: "8453" },
];

type InviteMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  squadId: string;
};

export const InviteMemberModal = ({ isOpen, onClose, squadId }: InviteMemberModalProps) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [chainId, setChainId] = useState(CHAIN_OPTIONS[0].value);
  const [error, setError] = useState("");
  const { authHeaders } = useAuthHeaders();

  const { mutate: resolveWallet, isPending: isResolving } = useResolveWallet();
  const { mutate: sendInvite, isPending: isSending } = useSendSquadInvite();

  const isLoading = isResolving || isSending;

  const handleInvite = () => {
    if (!walletAddress.trim()) {
      setError("User address is required");
      return;
    }

    if (!chainId) {
      setError("Please select a chain");
      return;
    }

    setError("");

    resolveWallet(
      {
        params: {
          chainId,
          walletAddress: walletAddress.trim(),
        },
        authHeaders,
      },
      {
        onSuccess: (response) => {
          console.log(response, 'res res');
          const userId = response?.data?.userId;
          if (!userId) {
            setError("Could not resolve wallet address");
            return;
          }

          sendInvite(
            {
              params: {
                squadId,
                userId,
              },
              authHeaders,
            },
            {
              onSuccess: () => {
                setWalletAddress("");
                setChainId(CHAIN_OPTIONS[0].value);
                onClose();
              },
              onError: (err: AxiosError<{ message?: string }>) => {
                setError(err?.response?.data?.message || "Failed to send invite");
              },
            }
          );
        },
        onError: (err: AxiosError<{ message?: string }>) => {
          setError(err?.response?.data?.message || "Could not resolve wallet address");
        },
      }
    );
  };

  const handleClose = () => {
    setWalletAddress("");
    setChainId(CHAIN_OPTIONS[0].value);
    setError("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="small"
      css={css`
        border-radius: var(--radius-lg, 32px);
        outline: none;
        background: url(${ModalBg}) no-repeat center center;
        background-size: cover;

        & > div:last-child {
          width: 100%;
        }
      `}
      acceptButtonProps={{
        children: isResolving ? "Resolving..." : isSending ? "Sending..." : "Send Invite",
        onClick: handleInvite,
        disabled: isLoading,
        loading: isLoading,
        block: true,
      }}
      cancelButtonProps={null}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
        width="100%"
      >
        <Text
          variant="h2-semibold"
          textAlign="center"
          css={css`
            background: linear-gradient(180deg, #FFF 0%, #FFE397 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Invite Member
        </Text>

        <SelectContainer>
          <SelectLabel>Chain</SelectLabel>
          <StyledSelect
            value={chainId}
            onChange={(e) => setChainId(e.target.value)}
          >
            {CHAIN_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </SelectContainer>

        <TextInput
          label="Wallet Address"
          placeholder="Enter wallet address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          error={!!error}
          errorMessage={error}
          backgroundColor={"rgba(0, 0, 0, 0.25)"}
        />

        <Text
          variant="bs-semibold"
          textAlign="center"
          css={css`
            color: var(--text-secondary);
          `}
        >
          Select the chain and enter the wallet address of the user you want to invite.
        </Text>
      </Box>
    </Modal>
  );
};


const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs, 4px);
  width: 100%;
`;

const SelectLabel = styled.label`
  color: var(--components-inputs-text-default);
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const StyledSelect = styled.select`
  appearance: none;
  background: rgba(0, 0, 0, 0.25);
  border: 1.5px solid var(--components-inputs-stroke-default);
  border-radius: var(--radius-xs, 12px);
  padding: var(--spacing-xs, 12px);
  color: var(--components-inputs-text-default, #fff);
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
  cursor: pointer;
  outline: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  box-sizing: border-box;

  &:hover {
    border-color: var(--components-inputs-stroke-hover, #c4cbd5);
  }

  &:focus {
    border-color: var(--components-inputs-stroke-focus);
  }

  option {
    background: #1a1a2e;
    color: #fff;
  }
`
