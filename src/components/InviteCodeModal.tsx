import { useState } from "react";
import { css } from "styled-components";
import { usePushChainClient, usePushWalletContext } from "@pushchain/ui-kit";

import { Box, Modal, Text, TextInput, Logout } from "../blocks";
import ModalBg from "../../static/assets/website/shared/modal-bg.webp";
import { useCreateSeasonThreeUser, useGetSeasonThreeUserByWallet, useGetUserCultStatus } from "../queries";
import { useSignMessageWithEthereum } from "./Rewards/hooks/useSignMessage";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";
import { useSignMessageWithSolana } from "./Rewards/hooks/useSignMessageWithSolana";
import { WalletChainType } from "./Rewards/utils/wallet";
import { useSignPushMessage } from "./Rewards/hooks/useSignPushMessage";

const PUSH_CHAIN_IDS = ["42101", "42102"];

type InviteCodeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const InviteCodeModal = ({ isOpen, onClose }: InviteCodeModalProps) => {
  const { universalAccount, handleUserLogOutEvent, connectionType } = usePushWalletContext('wallet1');
  const { pushChainClient } = usePushChainClient('wallet1');
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const { mutate: createUser, isPending } = useCreateSeasonThreeUser();

  const { chainId } = parseCAIP(universalAccount?.chain);
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const {
    refetch
  } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { refetch: refetchCultStatus } = useGetUserCultStatus({
		wallet: caip10WalletAddress
  });

  const ueaAccount = pushChainClient?.universal?.account;
  const { signMessage } = useSignMessageWithEthereum();
  const { signMessage: signMessageWithSolana } = useSignMessageWithSolana();
  const { signMessage: signMessageWithPush } = useSignPushMessage();

  const isPushSocialWalletUser = connectionType === 'social';
  const isSolana = chainId === WalletChainType.SOLANA;

  const handleSubmit = async () => {
      if (!inviteCode.trim()) {
        setError("Invite code is required");
        return;
      }

    let signature: string;
    let dataPayload: string;


    try {
        if (isPushSocialWalletUser) {
          const { signature: newSignature, messageToSend ,error } = await signMessageWithPush();

          if (error || !newSignature) {
            setError(error || "Failed to sign message");
            return;
          }

          signature = newSignature;
          dataPayload = messageToSend;
        } else {
          const { signature: newSignature, messageToSend, messageString, error } = isSolana
            ? await signMessageWithSolana()
            : await signMessage();

          if (error || !newSignature) {
            setError(error || "Failed to sign message");
            return;
          }

          signature = newSignature;
          dataPayload = isSolana ? messageString : messageToSend;
        }
      } catch (err) {
        console.error("Signing failed. Please try again", err)
        setError("Signing failed. Please try again.");
        return;
      }


      if (!signature || !dataPayload) {
        setError("Failed to sign message");
        return;
      }

      createUser(
        {
          userWallet: caip10WalletAddress,
          userUEAWallet: `eip155:42101:${ueaAccount}`,
          phase: "HYPE",
          data: dataPayload,
          inviteCodeUsed: inviteCode,
          verificationProof: signature,
        },
        {
          onSuccess: () => {
            refetch();
            refetchCultStatus();
            onClose();
          },
          onError: (error: any) => {
            console.log("Error in creating activity", error);
            setError(error?.response?.data?.error);
          },
        }
      );
    };

  const handleClose = () => {
    setInviteCode("");
    setError("");
    onClose();
  };

  const handleLogout = () => {
    handleClose();
    handleUserLogOutEvent();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="small"
      showCloseButton={false}
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
        children: "Get Started",
        onClick: handleSubmit,
        block: true,
        disabled: isPending,
        loading: isPending
        }}
      cancelButtonProps={null}
    >
      <Box
        onClick={handleLogout}
        css={css`
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          color: white;
        `}
      >
        <Logout size={18} />
      </Box>

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
         Invite Code
        </Text>
        <TextInput
          placeholder="Enter your code"
          value={inviteCode}
          onChange={(e) => {
            setInviteCode(e.target.value);
            setError("");
          }}
          error={!!error}
          errorMessage={error}
          backgroundColor={"rgba(0, 0, 0, 0.25)"}
        />
      </Box>

      <Box
        maxWidth="250px"
        textAlign="center"
        css={css`
            margin: 24px auto 0 auto;
          `}
      >
        <Text textAlign="center" variant="bes-semibold">
          Chosen Disciples have received a secret invite code in their email.
        </Text>
      </Box>

      {/*TODO: for regular season three holders only*/}
      {/*<Box
        margin="spacing-sm spacing-none spacing-none spacing-none"
        width="100%">
        <Text textAlign="center" variant="bes-semibold">
          Season 3: Exclusive Access.
        </Text>
        <Text textAlign="center" variant="bes-semibold">
          Check
          <Link
            to="https://x.com/pushchain"
            textProps={{ variant: "bes-semibold", color: "#C742DD" }}
          >
            {' '}X{' '}
          </Link> and
          <Link
            to="https://discord.com/invite/pushchain"
            textProps={{ variant: "bes-semibold", color: "#C742DD" }}
          >
            {' '}Discord{' '}
          </Link> for invites.
        </Text>
      </Box>*/}
    </Modal>
  );
};
