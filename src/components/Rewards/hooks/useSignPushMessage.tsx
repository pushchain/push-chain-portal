import { useCallback, useState } from "react";
import { ethers } from "ethers";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { generateNonce } from "siwe";
import { useRewardsContext } from "../../../context/rewardsContext";
import { parseCAIP } from "../../../helpers/web3helper";

export const getSiweDomainAndUri = () => {
  if (typeof window === "undefined") {
    return { domain: "wallet.push.org", uri: "https://wallet.push.org" };
  }
  const host = window.location.hostname;
  const isLocalhost =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".localhost");
  if (isLocalhost) {
    return { domain: "wallet.push.org", uri: "https://wallet.push.org" };
  }
  return { domain: host, uri: window.location.origin };
};

interface PushMessageData {
  [key: string]: string | undefined;
  domain: string;
  address: string;
  uri: string;
  version: string;
  chainId: string;
  nonce: string;
  issuedAt: string;
  statement: string;
}

interface SignMessageResult {
  signature?: string;
  messageToSend?: PushMessageData | string;
  messageString?: string;
  error?: string;
  isLoading: boolean;
}

const buildPushSignInMessage = (payload: PushMessageData): string => {
  const { domain, address, uri, version, chainId, nonce, issuedAt, statement, ...extra } = payload;

  const lines = [
    `${domain} wants you to sign in with your Push account:`,
    address,
    "",
    statement,
    "",
    `URI: ${uri}`,
    `Version: ${version}`,
    `Chain ID: ${chainId}`,
    `Nonce: ${nonce}`,
    `Issued At: ${issuedAt}`,
  ];

  Object.entries(extra).forEach(([k, v]) => {
    if (v != null) lines.push(`${k}: ${v}`);
  });

  return lines.join("\n");
};

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

        const { domain, uri } = getSiweDomainAndUri();
        const nonce = generateNonce();
        const rawAddress = universalAccount.address;
        const { chainId } = parseCAIP(universalAccount?.chain);

        const address = ethers.utils.isAddress(rawAddress)
          ? ethers.utils.getAddress(rawAddress)
          : rawAddress;

        const messageToSend: PushMessageData = {
          domain,
          address,
          uri,
          version: "1",
          chainId: String(chainId),
          nonce,
          issuedAt: new Date().toISOString(),
          statement: "Sign in to Push Chain",
          ...extraData,
        };

        const messageString = buildPushSignInMessage(messageToSend);
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
