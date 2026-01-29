import { useState } from "react";
import { css } from "styled-components";
import { useSendSquadInvite } from "../../../queries/hooks";

import ModalBg from "../../../../static/assets/website/shared/modal-bg.webp";
import { Box, Modal, Text, TextInput } from "../../../blocks";
import { useAuthHeaders } from "../../../context/authHeadersContext";

type InviteMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  squadId: string;
};

export const InviteMemberModal = ({ isOpen, onClose, squadId }: InviteMemberModalProps) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");
  const { authHeaders } = useAuthHeaders();

  const { mutate: sendInvite, isPending } = useSendSquadInvite();

  const handleInvite = () => {
    if (!walletAddress.trim()) {
      setError("User address is required");
      return;
    }

    setError("");
    sendInvite(
      {
        params: {
          squadId,
          walletAddress: `${walletAddress.trim()}`,
        },
        authHeaders: authHeaders,
      },
      {
        onSuccess: () => {
          setWalletAddress("");
          onClose();
        },
        onError: (err: any) => {
          setError(err?.response?.data?.message || "Failed to send invite");
        },
      }
    );
  };

  const handleClose = () => {
    setWalletAddress("");
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
        children: isPending ? "Sending..." : "Send Invite",
        onClick: handleInvite,
        disabled: isPending,
        loading: isPending,
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
        <TextInput
          label="Push Address"
          placeholder="Enter User address"
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
          Please ensure you add the users Push address and not an external address.
        </Text>
      </Box>
    </Modal>
  );
};
