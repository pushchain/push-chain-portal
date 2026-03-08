import { useCallback, useEffect, useRef, useState } from "react";
import { generateNonce } from "siwe";
import bs58 from "bs58";
import { usePushChainClient, usePushWalletContext } from "@pushchain/ui-kit";
import { useRewardsContext } from "../../../context/rewardsContext";
import { parseCAIP } from "../../../helpers/web3helper";
import { WalletChainType } from "../utils/wallet";

interface SolanaSignInMessageData {
  [key: string]: string | undefined;
  domain: string;
  address: string;
  uri: string;
  nonce: string;
  issuedAt: string;
  statement?: string;
  discord?: string;
  discord_token?: string;
  twitter?: string;
}

interface SignMessageResult {
  signature?: string;
  messageToSend?: Record<string, string | undefined>; // object — for activity endpoints
  messageString?: string; // raw signed string — for createUser endpoint
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

  Object.entries(extra).forEach(([k, v]) => {
    if (v != null) lines.push(`${k}: ${v}`);
  });

  return lines.join("\n");
};

const waitForUniversal = (
  ref: React.MutableRefObject<any>,
  timeoutMs = 3000,
): Promise<void> =>
  new Promise((resolve, reject) => {
    if (ref.current?.universal) return resolve();
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += 200;
      if (ref.current?.universal) {
        clearInterval(interval);
        resolve();
      } else if (elapsed >= timeoutMs) {
        clearInterval(interval);
        reject(new Error("Push Chain client universal signer not available. Please try again."));
      }
    }, 200);
  });

export const useSignMessageWithSolana = () => {
  const { universalAccount } = usePushWalletContext("wallet1");
  const { pushChainClient } = usePushChainClient("wallet1");

  // pushChainClient may be the same object reference even when .universal is populated,
  // so we track it via a ref that's always current, regardless of React's re-render cycle.
  const clientRef = useRef(pushChainClient);
  useEffect(() => {
    clientRef.current = pushChainClient;
  }, [pushChainClient]);

  // Ref so the async poll inside signMessage always sees the latest client
  const pushChainClientRef = useRef(pushChainClient);
  useEffect(() => {
    pushChainClientRef.current = pushChainClient;
  }, [pushChainClient]);


  const { setSignature } = useRewardsContext();
  const [isLoading, setIsLoading] = useState(false);

  const signMessage = useCallback(
    async (extraData?: Record<string, string>): Promise<SignMessageResult> => {
      setIsLoading(true);
      try {
        if (!universalAccount?.address || !universalAccount?.chain) {
          throw new Error("Push Wallet is not connected");
        }

        if (!clientRef.current?.universal) {
          throw new Error("Wallet is still initializing. Please try again.");
        }

        const { chainId } = parseCAIP(universalAccount.chain);

        if (chainId !== WalletChainType.SOLANA) {
          throw new Error(`Not a Solana chain: ${chainId}`);
        }

        const domain = window.location.hostname;
        const nonce = generateNonce();
        const uri = window.location.origin;

        const rawAddress = universalAccount.address.includes(":")
          ? universalAccount.address.split(":").pop()!
          : universalAccount.address;

        const messageToSend: SolanaSignInMessageData = {
          domain,
          address: rawAddress,
          uri,
          nonce,
          issuedAt: new Date().toISOString(),
          statement: "Sign in to Push.",
          ...extraData,
        };

        const messageToSign = buildSolanaSignInMessage(messageToSend);
        const messageBytes = new TextEncoder().encode(messageToSign);
        const signatureRaw = await clientRef.current.universal.signMessage(messageBytes);

        const signature: string =
          typeof signatureRaw === "string"
            ? signatureRaw
            : bs58.encode(Buffer?.from(signatureRaw));

        setSignature(signature);
        return { signature, messageToSend, messageString: messageToSign, isLoading: false };
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
    [universalAccount, setSignature]
  );

  return { signMessage, isLoading };
};
