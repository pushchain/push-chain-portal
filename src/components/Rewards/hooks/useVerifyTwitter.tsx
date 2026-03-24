/* eslint-disable @typescript-eslint/no-explicit-any */
// react and other libraries
import { useCallback, useEffect, useState } from "react";

// third party libraries
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
  User,
} from "firebase/auth";
import { usePushWalletContext } from "@pushchain/ui-kit";

// hooks
import {
  useClaimRewardsActivity,
  useGetSeasonThreeUserByWallet,
} from "../../../queries";

// helpers
import appConfig from "../../../config";

const firebaseApp = getApps().length === 0 ? initializeApp(appConfig.firebaseConfig) : getApps()[0];
import { parseCAIP, walletToFullCAIP10 } from "../../../helpers/web3helper";
import { useSignMessageWithEthereum } from "./useSignMessage";
import { useSignMessageWithSolana } from "./useSignMessageWithSolana";
import { WalletChainType } from "../utils/wallet";

export type UseTwitterVerifyParams = {
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
  refetchActivity: () => void;
};

const useVerifyTwitter = ({
  activityTypeId,
  setErrorMessage,
  refetchActivity,
}: UseTwitterVerifyParams) => {
  const [verifyingTwitter, setVerifyingTwitter] = useState(false);
  const [twitterActivityStatus, setTwitterActivityStatus] = useState<
    "Claimed" | "Pending" | null
  >(null);
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

  const { refetch: refetchUserDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage, account]);

  const provider = new TwitterAuthProvider();
  const auth = getAuth(firebaseApp);

  const handleTwitterVerification = (userId: string) => {
    setUpdatedId(userId);
    setVerifyingTwitter(true);

    handleVerify(userId);
  };

  const handleConnect = (): Promise<User | null> => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        if (credential) {
          const user = result.user;
          return user;
        } else {
          return null;
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        const credential = TwitterAuthProvider.credentialFromError(error);
        console.log(
          "Error in connecting twitter >>>",
          errorCode,
          errorMessage,
          credential,
        );
        setVerifyingTwitter(false);
        return null;
      });
  };

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity();

  const formatTwitterVerificationError = (rawMessage: string): string => {
    if (!rawMessage) return "Twitter verification failed. Please try again.";

    const lines = rawMessage.split("\n").map(l => l.trim());

    const reasons: string[] = [];

    lines.forEach(line => {
      if (line.includes("Not following")) {
        reasons.push("Follow @pushchain on Twitter.");
      }

      if (line.includes("Insufficient followers")) {
        reasons.push("Your account must have at least 100 followers.");
      }

      if (line.includes("Unable to verify account age")) {
        reasons.push("Your Twitter account must be at least 6 months old.");
      }
    });

    if (reasons.length === 0) {
      return "Twitter verification failed. Please try again later.";
    }

    return `Twitter verification failed:\n• ${reasons.join("\n• ")}`;
  };

  const handleVerify = useCallback(
    async (userId: string | null) => {
      setErrorMessage("");

      const userTwitterDetails = await handleConnect();

      if (userTwitterDetails) {
        const twitterHandle = (userTwitterDetails as any)?.reloadUserInfo
          ?.screenName;

        // let verificationProof;
        const messageToSend: Record<string, string | undefined> = {
          twitter: twitterHandle,
        };

        // const isSolana = chainId == WalletChainType.SOLANA;

        // if (isSolana) {
        //   const {
        //     signature,
        //     messageToSend: signedMessage,
        //     error,
        //   } = await signMessageWithSolana({
        //     twitter: twitterHandle,
        //   });

        //   if (error || !signature) {
        //     console.log(error);
        //     setErrorMessage(error);
        //     setVerifyingTwitter(false);
        //     return;
        //   }

        //   verificationProof = signature;
        //   messageToSend = signedMessage;
        // } else {
        //   const {
        //     signature,
        //     messageToSend: signedMessage,
        //     error,
        //   } = await signMessage({
        //     twitter: twitterHandle,
        //   });

        //   if (error || !signature) {
        //     console.log(error);
        //     setErrorMessage(error);
        //     setVerifyingTwitter(false);
        //     return;
        //   }

        //   verificationProof = signature;
        //   messageToSend = signedMessage;
        // }

        // if (!verificationProof) {
        //   setErrorMessage('Invalid Verification Proof');
        //   setVerifyingTwitter(false);
        // }

        claimRewardsActivity(
          {
            userId: updatedId || (userId as string),
            activityTypeId,
            data: messageToSend,
            // verificationProof,
          },
          {
            onSuccess: (response) => {
              if (response.data.status === "COMPLETED") {
                setTwitterActivityStatus("Claimed");
                refetchActivity();
                refetchUserDetails();
                setVerifyingTwitter(false);
              }
              if (response.data.status === "PENDING") {
                setTwitterActivityStatus("Pending");
                refetchActivity();
                setVerifyingTwitter(false);
              }
            },
            onError: (error: any) => {
              console.log("Error in creating activity", error);
              setVerifyingTwitter(false);

              const rawMessage = error?.response?.data?.error?.message;
              setErrorMessage(formatTwitterVerificationError(rawMessage));

            },
          },
        );
      }
    },
    [handleConnect, chainId, signMessage, signMessageWithSolana, claimRewardsActivity, updatedId, activityTypeId],
  );

  return {
    verifyingTwitter,
    twitterActivityStatus,
    handleTwitterVerification,
  };
};

export { useVerifyTwitter };
