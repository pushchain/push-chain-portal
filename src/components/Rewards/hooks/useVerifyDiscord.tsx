// React and other libraries
import { useEffect, useState, useCallback } from "react";

// Third-party libraries
import { usePushWalletContext } from "@pushchain/ui-kit";

// hooks
import appConfig from "../../../config";
import {
  useClaimRewardsActivity,
  useGetSeasonThreeUserByWallet,
} from "../../../queries";

// helpers
import { parseCAIP, walletToFullCAIP10 } from "../../../helpers/web3helper";
import { useSignMessageWithEthereum } from "./useSignMessage";
import { WalletChainType } from "../utils/wallet";
import { useSignMessageWithSolana } from "./useSignMessageWithSolana";

type UseDiscordActivityVerificationProps = {
  activityTypeId: string;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const useVerifyDiscord = ({
  activityTypeId,
  refetchActivity,
  setErrorMessage,
}: UseDiscordActivityVerificationProps) => {
  const token = localStorage.getItem("access_token");

  const [discordActivityStatus, setDiscordActivityStatus] = useState<
    "Claimed" | null
  >(null);
  const [verifyingDiscord, setVerifyingDiscord] = useState(
    token ? true : false,
  );
  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { universalAccount } = usePushWalletContext('wallet1');
  const { signMessage } = useSignMessageWithEthereum();
  const { signMessage: signMessageWithSolana } = useSignMessageWithSolana();

  const account = universalAccount?.address;
  const { chainId } = parseCAIP(universalAccount?.chain);
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  const { refetch: refetchUserDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity();

  const handleDiscordVerification = (userId: string) => {
    setUpdatedId(userId);
    setErrorMessage("");
    setVerifyingDiscord(true);

    handleConnect(userId);
  };

  const handleConnect = (userId: string) => {
    const clientID = appConfig.discord_client_id;
    const baseURL = import.meta.env.VITE_PR_PREVIEW_BASE // GitHub PR Preview
      ? `https://pushchain.github.io/push-chain-portal/pr-preview/${import.meta.env.VITE_PR_PREVIEW_BASE}`
      : window.location.origin;
    const redirectURI = `${baseURL}/discord/verification`;
    const scope = "identify email guilds.members.read";

    const authURL = `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=${scope}`;

    const newWindow = window.open(authURL, "_blank");

    if (!newWindow) {
      setErrorMessage("Popup was blocked. Please allow popups for this site and try again.");
      setVerifyingDiscord(false);
      return;
    }

    const checkAuth = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(checkAuth);
        handleVerify(userId);
      }
    }, 1000);
  };

  const handleVerify = useCallback(
    async (userId: string) => {
      const token = localStorage.getItem("access_token");
      const username = localStorage.getItem("username");

      if (!username || !token) {
        setErrorMessage("Discord verification was not completed. Please try again.");
        setVerifyingDiscord(false);
        return;
      }

      if (username && token) {
        let verificationProof;
        let messageToSend: Record<string, string | undefined> = {
          discord_token: token,
        };

        const isSolana = chainId == WalletChainType.SOLANA;

        if (isSolana) {
          const {
            signature,
            messageToSend: signedMessage,
            error,
          } = await signMessageWithSolana({
            discord_token: token,
          });

          if (error || !signature) {
            console.log(error);
            setErrorMessage(error);
            setVerifyingDiscord(false);
            return;
          }

          verificationProof = signature;
          messageToSend = signedMessage;
        } else {
          const {
            signature,
            messageToSend: signedMessage,
            error,
          } = await signMessage({
            discord_token: token,
          });

          if (error || !signature) {
            console.log(error);
            setErrorMessage(error);
            setVerifyingDiscord(false);
            return;
          }
          verificationProof = signature;
          messageToSend = signedMessage;
        }

        if (!verificationProof) {
          setErrorMessage('Invalid Verification Proof');
        }

        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
        localStorage.removeItem("expires_in");

        claimRewardsActivity(
          {
            userId: updatedId || (userId as string),
            activityTypeId,
            data: messageToSend,
            verificationProof,
          },
          {
            onSuccess: (response) => {
              console.log(response)
              if (response.data.status === "COMPLETED") {
                setDiscordActivityStatus("Claimed");
                refetchActivity();
                refetchUserDetails();
                setErrorMessage("");
              }
              setVerifyingDiscord(false);
            },
            onError: (error: any) => {
              console.log("Error in creating activity", error);
              setVerifyingDiscord(false);
              const rawMessage = error?.response?.data?.error?.message;
              if (rawMessage) {
                setErrorMessage(rawMessage);
              }
            },
          },
        );
      }
    },
    [account, chainId, signMessage, claimRewardsActivity, updatedId, activityTypeId],
  );

  return {
    verifyingDiscord,
    discordActivityStatus,
    handleDiscordVerification,
  };
};

export { useVerifyDiscord };
