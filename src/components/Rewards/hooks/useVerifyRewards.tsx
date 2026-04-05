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
  const [progressPercent, setProgressPercent] = useState<number | null>(null);
  const [rewardsActivityStatus, setRewardsActivityStatus] = useState<
    "Claimed" | "Pending" | null
  >(null);
  const [claimResponse, setClaimResponse] = useState<any>(null);

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

  const SKIP_VERIFICATION_ACTIVITIES = [
      "lastone_place_bid",
      "lastone_win_50pc_claim",
      "lastone_win_3_rounds_claim",
      "lastone_bid_10_single_round",
      "lastone_participate_25_rounds",
      "ramen_swap_one_swap",
      "ramen_swap_stablecoin_to_push",
      "ramen_swap_five_swaps",
      "ramen_swap_hold_three_chain_tokens"
  ];

  const handleVerify = async (userId: string | null) => {
    setErrorMessage("");

    const skipVerification = SKIP_VERIFICATION_ACTIVITIES.some(
      (prefix) => activityTypeId.startsWith(prefix)
    );

    let verificationProof: string | undefined;
    let messageToSend: Record<string, string | undefined> = {};

    if (!skipVerification) {
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
