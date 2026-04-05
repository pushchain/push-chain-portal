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
import { useSignPushMessage } from "./useSignPushMessage";
import { WalletChainType } from "../utils/wallet";
import { SKIP_VERIFICATION_ACTIVITIES } from "../utils/skipVerificationActivities";

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
  const [progressPercent, setProgressPercent] = useState<number | null>(null);
  const [rewardsActivityStatus, setRewardsActivityStatus] = useState<
    "Claimed" | "Pending" | null
  >(null);
  const [claimResponse, setClaimResponse] = useState<any>(null);

  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { universalAccount, connectionType } = usePushWalletContext('wallet1');
  const { chainId } = parseCAIP(universalAccount?.chain);
  const { signMessage } = useSignMessageWithEthereum();
  const { signMessage: signMessageWithSolana } = useSignMessageWithSolana();
  const { signMessage: signMessageWithPush } = useSignPushMessage();

  const isPushSocialWallet = connectionType === 'social';

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

    const skipVerification = SKIP_VERIFICATION_ACTIVITIES.some(
      (prefix) => activityTypeId.startsWith(prefix)
    );

    let verificationProof: string | undefined;
    let messageToSend: Record<string, string | undefined> = {};

    if (!skipVerification) {
      const isSolana = chainId == WalletChainType.SOLANA;

      const signFn = isPushSocialWallet
        ? signMessageWithPush
        : isSolana
          ? signMessageWithSolana
          : signMessage;

      const {
        signature,
        messageToSend: signedMessage,
        messageString,
        error,
      } = await signFn();

      if (error || !signature) {
        console.log(error);
        setErrorMessage(error);
        setVerifyingRewards(false);
        return;
      }

      verificationProof = signature;
      messageToSend = (isPushSocialWallet
        ? signedMessage
        : isSolana
          ? signedMessage
          : signedMessage) as Record<string, string | undefined>;

      if (!verificationProof) {
        setErrorMessage('Invalid Verification Proof');
        setVerifyingRewards(false);
        return;
      }
    }

    claimRewardsActivity(
      {
        userId: updatedId || (userId as string),
        activityTypeId,
        ...(skipVerification ? {} : { data: messageToSend, verificationProof }),
      },
      {
        onSuccess: (response) => {
          // TODO: fix this later
          if (response.data.status === "COMPLETED" || response?.status === "COMPLETED") {
            setRewardsActivityStatus("Claimed");
            setClaimResponse(response.data || response);
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
          const errorData = error?.response?.data?.error;
          console.log(errorData?.progress_percent, 'error')
          if (errorData) {
            setErrorMessage(typeof errorData === 'string' ? errorData : errorData?.message);
            if (errorData?.progress_percent != null) {
              setProgressPercent(errorData.progress_percent);
            }
          }
        },
      },
    );
  };

  return {
    verifyingRewards,
    rewardsActivityStatus,
    handleRewardsVerification,
    progressPercent,
    claimResponse,
  };
};

export { useVerifyRewards };
