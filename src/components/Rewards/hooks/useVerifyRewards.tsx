// react and other libraries
import { useEffect, useState } from "react";

// third party libraries
import { usePushWalletContext } from "@pushchain/ui-kit";

// helpers
import {
  useClaimRewardsActivity,
  useGetSeasonThreeUserByWallet,
} from "../../../queries";
import { parseCAIP, walletToFullCAIP10 } from "../../../helpers/web3helper";
import { useSignMessageWithEthereum } from "./useSignMessage";
import { useSignMessageWithSolana } from "./useSignMessageWithSolana";
import { WalletChainType } from "../utils/wallet";

export type UseVerifyRewardsParams = {
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
  refetchActivity: () => void;
  activityTypeIndex?: string;
  onStartClaim?: () => void;
};

const useVerifyRewards = ({
  activityTypeId,
  setErrorMessage,
  refetchActivity,
  activityTypeIndex,
  setCurrentLevel,
  onStartClaim,
}: UseVerifyRewardsParams) => {
  const [verifyingRewards, setVerifyingRewards] = useState(false);
  const [rewardsActivityStatus, setRewardsActivityStatus] = useState<
    "Claimed" | "Pending" | null
  >(null);

  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { universalAccount } = usePushWalletContext('wallet1');
  const { chainId } = parseCAIP(universalAccount?.chain);
  const { signMessage } = useSignMessageWithEthereum();
  const { signMessage: signMessageWithSolana } = useSignMessageWithSolana();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  const handleRewardsVerification = (userId: string) => {
    setUpdatedId(userId);
    setVerifyingRewards(true);

    // Signal that we're starting the claim process
    if (onStartClaim) {
      onStartClaim();
    }

    handleVerify(userId);
  };

  const { refetch: refetchUserDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity();

  const handleVerify = async (userId: string | null) => {
    setErrorMessage("");

    let verificationProof;
    let messageToSend: Record<string, string | undefined> = {};

    const isSolana = chainId == WalletChainType.SOLANA;

    if (isSolana) {
      const {
        signature,
        messageToSend: signedMessage,
        error,
      } = await signMessageWithSolana();
      if (error || !signature) {
        console.log(error);
        setErrorMessage(error);
        setVerifyingRewards(false);
        return;
      }

      verificationProof = signature;
      messageToSend = signedMessage;
    } else {
      const {
        signature,
        messageToSend: signedMessage,
        error,
      } = await signMessage();
      if (error || !signature) {
        console.log(error);
        setErrorMessage(error);
        setVerifyingRewards(false);
        return;
      }

      verificationProof = signature;
      messageToSend = signedMessage as Record<string, string | undefined>;
    }

    if (!verificationProof) {
      setErrorMessage('Invalid Verification Proof');
      setVerifyingRewards(false);
    }

    console.log(verificationProof, messageToSend, 'got here')

    claimRewardsActivity(
      {
        userId: updatedId || (userId as string),
        activityTypeId,
        data: messageToSend,
        verificationProof,
      },
      {
        onSuccess: (response) => {
          // TODO: fix this later
          if (response.data.status === "COMPLETED" || response?.status === "COMPLETED") {
            setRewardsActivityStatus("Claimed");
            // if (setCurrentLevel) {
            //   setCurrentLevel(activityTypeId);
            // }
            refetchActivity();
            refetchUserDetails();
            setVerifyingRewards(false);
          }
          if (response.data.status === "PENDING" || response?.status === "COMPLETED") {
            setRewardsActivityStatus("Pending");
            refetchActivity();
            setVerifyingRewards(false);
          }
        },
        onError: (error: any) => {
          console.log("Error in creating activity", error);
          setVerifyingRewards(false);
          if (error?.name) {
            setErrorMessage(error?.response?.data?.error);
          }
        },
      },
    );
  };

  return {
    verifyingRewards,
    rewardsActivityStatus,
    handleRewardsVerification,
  };
};

export { useVerifyRewards };
