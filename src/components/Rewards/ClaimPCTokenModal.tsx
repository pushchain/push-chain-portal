import { useState } from "react";
import { css } from "styled-components";

import { Alert, Box, Button, Modal, PCTokens, Text } from "../../blocks";
import ModalBg from "../../../static/assets/website/shared/modal-bg.webp";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { walletToFullCAIP10 } from "../../helpers/web3helper";
import { useGetSeasonThreeUserByWallet } from "../../queries";
import { useGetPCTokenBalance } from "../../queries/hooks/rewards/useGetPCTokenBalance";
import { useClaimPCTokens } from "../../queries/hooks/rewards/useClaimPCTokens";
import { useAuthHeaders } from "../../context/authHeadersContext";
import { trackEvent } from "../../helpers/analytics";

type ClaimPCTokenModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ClaimPCTokenModal = ({ isOpen, onClose }: ClaimPCTokenModalProps) => {
  const [claimError, setClaimError] = useState("");
  const [claimed, setClaimed] = useState(false);

  const { universalAccount } = usePushWalletContext('wallet1');
  const { authHeaders, getAuthHeaders } = useAuthHeaders();
  const [isSigning, setIsSigning] = useState(false);

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userSeasonThreeDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });
  const { data: tokenBalance, refetch: refetchBalance } = useGetPCTokenBalance(userSeasonThreeDetails?.userId);
  const { mutate: claimTokens, isPending: isClaiming } = useClaimPCTokens();

  const handleClaim = async () => {
    if (!authHeaders) setIsSigning(true);
    const headers = authHeaders ?? await getAuthHeaders();
    setIsSigning(false);
    if (!headers || !tokenBalance?.claimableTokens) return;
    setClaimError("");
    trackEvent('pc_token_claim_clicked', { event_category: 'rewards', value: tokenBalance.claimableTokens });

    claimTokens(
      {
        authHeaders: headers,
        amount: tokenBalance.claimableTokens,
      },
      {
        onSuccess: () => {
          setClaimed(true);
          trackEvent('pc_token_claimed', { event_category: 'rewards', value: tokenBalance.claimableTokens });
          refetchBalance();
        },
        onError: (error: any) => {
          const message = error?.response?.data?.error?.message || error?.response?.data?.error || "Failed to claim. Please try again.";
          setClaimError(typeof message === 'string' ? message : "Failed to claim. Please try again.");
        },
      }
    );
  };

  const handleClose = () => {
    setClaimed(false);
    setClaimError("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="large"
      css={css`
        border-radius: var(--radius-lg, 37px);
        outline: none;
        background: linear-gradient(180deg, #000 0%, #4C2A6B 100%);
        background-image: url(${ModalBg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;

        & > div:last-child:empty {
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
        width="100%"
        position="relative"
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
          Reward
        </Text>

        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          css={css`
            margin: 80px 0 40px 0;
          `}
        >
          <Box
            css={css`
              position: absolute;
              top: -5%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 1;
              filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.50));
            `}
          >
            <PCTokens width={120}  />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
            css={css`
              width: 226px;
              height: 127px;
              border-radius: 20px;
              border: 0.84px solid rgba(255, 255, 255, 0.40);
              background: radial-gradient(80% 80% at 31% 23%, #C35FF5 0%, #935DDE 50%, #635CC8 100%);
              padding: 24px;
              box-sizing: border-box;
            `}
          >
            <Text
              variant="h2-semibold"
              textAlign="center"
              css={css`
                font-size: 54px;
                line-height: 1;
              `}
            >
              {tokenBalance?.claimableTokens}
            </Text>
            <Text
              variant="h4-semibold"
              textAlign="center"
              css={css`
                font-size: 20px;
              `}
            >
              PC Tokens
            </Text>
          </Box>
        </Box>

        {claimError && (
          <Box width="100%">
            <Alert variant="error" description={claimError} />
          </Box>
        )}

        <Button
          size="medium"
          variant="primary"
          onClick={claimed ? handleClose : handleClaim}
          disabled={isClaiming || isSigning || (!claimed && !tokenBalance?.claimableTokens)}
          loading={isClaiming || isSigning}
          css={css`
            width: 100%;
          `}
        >
          {claimed ? "Close" : "Claim Reward"}
        </Button>
      </Box>
    </Modal>
  );
};

export default ClaimPCTokenModal;
