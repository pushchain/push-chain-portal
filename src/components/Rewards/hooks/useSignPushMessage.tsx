import { useCallback, useState } from "react";
import { ethers } from "ethers";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { SiweMessage, generateNonce } from "siwe";
import { useRewardsContext } from "../../../context/rewardsContext";
import { parseCAIP } from "../../../helpers/web3helper";

interface PushMessageData {
  [key: string]: string | undefined;
  domain: string;
  address: string;
  uri: string;
  version: string;
  chainId: string;
  nonce: string;
  issuedAt: string;
}

interface SignMessageResult {
  signature?: string;
  messageToSend?: PushMessageData | string;
  messageString?: string;
  error?: string;
  isLoading: boolean;
}

export const useSignPushMessage = () => {
  const { universalAccount, handleSignMessage } = usePushWalletContext("wallet1");
  const { setSignature } = useRewardsContext();
  const [isLoading, setIsLoading] = useState(false);

  const signMessage = useCallback(
    async (extraData?: Record<string, string>): Promise<SignMessageResult> => {
      setIsLoading(true);

      try {
        if (!universalAccount) {
          throw new Error("Push Wallet is not connected");
        }

        const domain = window.location.hostname;
        const nonce = generateNonce();
        const origin = window.location.origin;
        const rawAddress = universalAccount.address;
        const { chainId } = parseCAIP(universalAccount?.chain);

        const address = ethers.utils.isAddress(rawAddress)
          ? ethers.utils.getAddress(rawAddress)
          : rawAddress;

        const messageToSend: PushMessageData = {
          domain,
          address,
          uri: origin,
          version: "1",
          chainId: String(chainId),
          nonce,
          issuedAt: new Date().toISOString(),
          ...extraData,
        };

        const siweMessage = new SiweMessage(messageToSend);
        const messageString = siweMessage.prepareMessage();
        const messageBytes = new TextEncoder().encode(messageString);
        const signedMessageBytes = await handleSignMessage(messageBytes);
        const signature = ethers.utils.hexlify(signedMessageBytes);

        setSignature(signature);

        return { signature, messageToSend, messageString, isLoading: false };
      } catch (error) {
        console.error("Sign error:", error);
        return {
          error: error instanceof Error ? error.message : "Unknown error occurred",
          isLoading: false,
        };
      } finally {
        setIsLoading(false);
      }
    },
    [universalAccount, handleSignMessage, setSignature],
  );

  return { signMessage, isLoading };
};
