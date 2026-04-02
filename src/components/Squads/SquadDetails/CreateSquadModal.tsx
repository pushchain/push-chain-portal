import { useState } from "react";
import { css } from "styled-components";
import { AxiosError } from "axios";
import { useCreateSquad, useGetSquadsDetails } from "../../../queries/hooks";

import ModalBg from "../../../../static/assets/website/shared/modal-bg.webp";
import { Box, Modal, Text, TextInput } from "../../../blocks";
import { useAuthHeaders } from "../../../context/authHeadersContext";



type CreateSquadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateSquadModal = ({ isOpen, onClose }: CreateSquadModalProps) => {
  const [squadName, setSquadName] = useState("");
  const [error, setError] = useState("");
  const { authHeaders } = useAuthHeaders();

  const { mutate: createSquad, isPending } = useCreateSquad();
  const { refetch } = useGetSquadsDetails(authHeaders);

  const handleCreate = () => {
    if (!squadName.trim()) {
      setError("Squad name is required");
      return;
    }

    setError("");
    if (!authHeaders) return;
    createSquad(
      { params: { name: squadName }, authHeaders },
      {
        onSuccess: () => {
          setSquadName("");
          refetch();
          onClose();
        },
        onError: (err: AxiosError<{ message?: string }>) => {
          setError(err?.response?.data?.message || "Failed to create squad");
        },
      }
    );
  };

  const handleClose = () => {
    setSquadName("");
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
          margin-bottom: 16px;
        }
      `}
      acceptButtonProps={{
        children: isPending ? "Creating..." : "Create Squad",
        onClick: handleCreate,
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
            Create Squad
        </Text>
        <TextInput
          label="Squad Name"
          placeholder="Enter squad name"
          value={squadName}
          onChange={(e) => setSquadName(e.target.value)}
          error={!!error}
          errorMessage={error}
          backgroundColor={"rgba(0, 0, 0, 0.25)"}
          totalCount={24}
        />

        <Text
          variant="bs-semibold"
          textAlign="center"
          css={css`
              color: var(--text-secondary);
        `}
        >
          Squads are permanent. You will be unable to join other squads after creating your own.
        </Text>
      </Box>
    </Modal>
  );
};
