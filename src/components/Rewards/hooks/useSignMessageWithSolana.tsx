import { useCallback, useState } from "react";
import bs58 from "bs58";
import { generateNonce } from "siwe"; // nonce generator is fine to reuse
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useRewardsContext } from "../../../context/rewardsContext";
import { parseCAIP } from "../../../helpers/web3helper";

interface SolanaSignInMessageData {
  [key: string]: string | undefined;
  domain: string;
  address: string; // base58 pubkey
  uri: string;
  nonce: string;
  issuedAt: string;
  statement?: string;
  discord?: string;
  discord_token?: string;
  twitter?: string;
}

interface SignMessageResult {
  signature?: string; // base58
  messageToSend?: SolanaSignInMessageData;
  messageToSign?: string;
  error?: string;
  isLoading: boolean;
}

const buildSolanaSignInMessage = (payload: SolanaSignInMessageData) => {
  const { domain, address, uri, nonce, issuedAt, statement, ...extra } = payload;

  const lines: string[] = [
    `${domain} wants you to sign in with your Solana account:`,
    `${address}`,
    ``,
    statement ?? `Sign in to Push.`,
    ``,
    `URI: ${uri}`,
    `Nonce: ${nonce}`,
    `Issued At: ${issuedAt}`,
  ];

  // Optional: include extra fields as key/value lines (keep it stable for verification)
  Object.entries(extra).forEach(([k, v]) => {
    if (v != null) lines.push(`${k}: ${v}`);
  });

  return lines.join("\n");
};

export const useSignMessageWithSolana = () => {
  const { universalAccount, handleSignMessage } = usePushWalletContext("wallet1");
  const { setSignature } = useRewardsContext();
  const [isLoading, setIsLoading] = useState(false);

  const signMessage = useCallback(
    async (extraData?: Record<string, string>): Promise<SignMessageResult> => {
      setIsLoading(true);

      try {
        if (!universalAccount?.address || !universalAccount?.chain) {
          throw new Error("Push Wallet is not connected");
        }

        const { chainId } = parseCAIP(universalAccount.chain);
        if (chainId !== "solana") {
          throw new Error(`Not a Solana chain: ${chainId}`);
        }

        const domain = window.location.hostname;
        const nonce = generateNonce();
        const uri = window.location.origin;

        const messageToSend: SolanaSignInMessageData = {
          domain,
          address: universalAccount.address, // base58
          uri,
          nonce,
          issuedAt: new Date().toISOString(),
          ...extraData,
        };

        const messageToSign = buildSolanaSignInMessage(messageToSend);

        const messageBytes = new TextEncoder().encode(messageToSign);
        const signedMessageBytes = await handleSignMessage(messageBytes);

        const signature = bs58.encode(signedMessageBytes);
        setSignature(signature);

        return { signature, messageToSend, messageToSign, isLoading: false };
      } catch (error) {
        return {
          error: error instanceof Error ? error.message : "Unknown error occurred",
          isLoading: false,
        };
      } finally {
        setIsLoading(false);
      }
    },
    [universalAccount, handleSignMessage, setSignature]
  );

  return { signMessage, isLoading };
};