import { useState } from "react";
import { css } from "styled-components";
import { usePushChainClient, usePushWalletContext } from "@pushchain/ui-kit";


import { useCreateSeasonThreeUser, useGetSeasonThreeUserByWallet, useGetUserCultStatus } from "../queries";
import { useSignMessageWithEthereum } from "./Rewards/hooks/useSignMessage";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";
import { useSignMessageWithSolana } from "./Rewards/hooks/useSignMessageWithSolana";
import { WalletChainType } from "./Rewards/utils/wallet";
import { useSignPushMessage } from "./Rewards/hooks/useSignPushMessage";

import { Image } from "../css/SharedStyling";
import { Box, Button, Link, Modal, Text, TextInput, Logout } from "../blocks";
import ModalBg from "../../static/assets/website/shared/modal-bg.webp";
import BottomSectionBG from '../../static/assets/website/rewards/bottomsectionbg.webp';
import PepperedCodesImg from '../../static/assets/website/rewards/codes-peppered.webp'
import FollowPushImg from '../../static/assets/website/rewards/invitecode-follow.webp'
import PepperCodeText from '../../static/assets/website/rewards/peppered-codetext.webp';
import FollowText from '../../static/assets/website/rewards/followtext.webp';


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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

    setIsLoading(true);

    try {
        if (isPushSocialWalletUser) {
          const { signature: newSignature, messageToSend ,error } = await signMessageWithPush();

          if (error || !newSignature) {
            setError(error || "Failed to sign message");
            setIsLoading(false);
            return;
          }

          signature = newSignature;
          dataPayload = messageToSend;
        } else {
          const { signature: newSignature, messageToSend, messageString, error } = isSolana
            ? await signMessageWithSolana()
            : await signMessage();

          if (error || !newSignature) {
            setIsLoading(false);
            setError(error || "Failed to sign message");
            return;
          }

          signature = newSignature;
          dataPayload = isSolana ? messageString : messageToSend;
        }
      } catch (err) {
        console.error("Signing failed. Please try again", err)
        setIsLoading(false);
        setError("Signing failed. Please try again.");
        return;
      }


    if (!signature || !dataPayload) {
        setIsLoading(false);
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
            setIsLoading(false);
          },
          onError: (error: any) => {
            console.log("Error in creating activity", error);
            setError(error?.response?.data?.error);
            setIsLoading(false);
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
        border-radius: var(--radius-lg, 0px);
        outline: none;
        background: transparent;
        border: none;
        padding: 0px;
        gap: 0px;
        width: 402px;
        box-sizing: border-box;

        & > div:last-child {
            display: none;
        }
      `}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >


      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-md"
        padding="spacing-lg spacing-md spacing-md spacing-md"
        borderRadius="radius-md"
        position="relative"
        width="100%"
        css={css`
            background: url(${ModalBg}) no-repeat center center;
            background-size: cover;
            border: 1px solid rgba(255, 255, 255, 0.20);
            box-sizing: border-box;
            z-index: 9;
        `}
      >
        <Box
          onClick={handleLogout}
          css={css`
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            color: white;
            z-index: 2;
          `}
        >
          <Logout size={18} />
        </Box>

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

        <Box display="flex" flexDirection="column" gap="spacing-sm" width="100%">
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

          <Button
            variant="primary"
            size="medium"
            block
            onClick={handleSubmit}
            disabled={isLoading}
            loading={isLoading}
            css={css`
              margin-top: 8px;
            `}
          >
            Get Started
          </Button>

          <Text variant="bs-semibold" textAlign="center" css={css`color: rgba(255, 255, 255, 0.75);`}>
            Season 3 is invite only. Exclusive Access!
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        height="100%"
        margin="spacing-md spacing-none spacing-none spacing-none"
        padding="spacing-sm"
        borderRadius="radius-md"
        css={css`
          background: url(${BottomSectionBG}) no-repeat center center;
          background-size: cover;
          border: 1px solid rgba(255, 255, 255, 0.20);
          box-sizing: border-box;
        `}
      >
        <Text variant="bs-semibold" textAlign="center">
          Don't have an invite code? Do this now!
        </Text>

        <a
          // TODO: update correct link
          href="https://x.com/pushchain"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            padding="spacing-md"
            margin="spacing-sm spacing-none spacing-none spacing-none"
            css={css`
              border-radius: 14.863px;
              border: 1px solid rgba(255, 255, 255, 0.20);
              background: rgba(0, 0, 0, 0.50);
              backdrop-filter: blur(8.050000190734863px);
              box-sizing: border-box;
              cursor: pointer;
            `}
          >
            <Box display="flex">
              <Image src={FollowPushImg} width="100%"  />
            </Box>

            <Box css={css`
                  margin: 8px 0 4px 0;
              `}>
              <Image src={FollowText} width="70%"  />
            </Box>

            <Box width="80%">
              <Text variant="bes-regular" css={css`color: rgba(255, 255, 255, 0.6);`}>
                Drop a comment to get invite codes. Limited codes per week.
              </Text>
            </Box>
          </Box>
        </a>

        <a
          href="https://push.org/blog"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Box
            display="flex"
            flexDirection="row"
            gap="spacing-sm"
            margin="spacing-sm spacing-none spacing-none spacing-none"
            alignItems="center"
            css={css`
              border-radius: 14.863px;
              border: 1px solid rgba(255, 255, 255, 0.20);
              background: rgba(0, 0, 0, 0.50);
              backdrop-filter: blur(8.050000190734863px);
              box-sizing: border-box;
              cursor: pointer;
            `}
          >
            <Image src={PepperedCodesImg} width={83} />

            <Box>
              <Image src={PepperCodeText} width="80%"  />
            </Box>
          </Box>
        </a>
      </Box>
    </Modal>
  );
};
