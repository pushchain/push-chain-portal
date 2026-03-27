import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { usePushChainClient, usePushWalletContext } from "@pushchain/ui-kit";

import { useSignMessageWithEthereum } from "../components/Rewards/hooks/useSignMessage";
import { useSignMessageWithSolana } from "../components/Rewards/hooks/useSignMessageWithSolana";
import { AuthHeaders } from "../queries";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";
import { WalletChainType } from "../components/Rewards/utils/wallet";
import { FLAGS } from "../config/flags";

const AUTH_HEADERS_KEY = "push_auth_headers";

const getStoredAuthHeaders = (walletAddress: string): AuthHeaders | null => {
  try {
    const stored = sessionStorage.getItem(AUTH_HEADERS_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (parsed.walletAddress?.includes(walletAddress)) return parsed;
    return null;
  } catch {
    return null;
  }
};

const storeAuthHeaders = (headers: AuthHeaders) => {
  try {
    sessionStorage.setItem(AUTH_HEADERS_KEY, JSON.stringify(headers));
  } catch (err) {
    console.error("Failed to store auth headers:", err);
  }
};

const clearStoredAuthHeaders = () => {
  try {
    sessionStorage.removeItem(AUTH_HEADERS_KEY);
  } catch (err) {
    console.error("Failed to clear auth headers:", err);
  }
};

type AuthHeadersContextType = {
  authHeaders: AuthHeaders | undefined;
  getAuthHeaders: () => Promise<AuthHeaders | null>;
  /** True while the signing prompt is active. */
  isSigningMessage: boolean;
  /** Clear auth (e.g. on disconnect). */
  clearAuthHeaders: () => void;
};

const AuthHeadersContext = createContext<AuthHeadersContextType | null>(null);

export const AuthHeadersProvider = ({ children }: { children: ReactNode }) => {
  const [authHeaders, setAuthHeaders] = useState<AuthHeaders | undefined>();
  const [isSigningMessage, setIsSigningMessage] = useState(false);

  const { universalAccount } = usePushWalletContext("wallet1");
  const { pushChainClient } = usePushChainClient('wallet1');
  const { signMessage: signMessageEthereum } = useSignMessageWithEthereum();
  const { signMessage: signMessageSolana } = useSignMessageWithSolana();

  const walletAddress = universalAccount?.address;
  const chain = universalAccount?.chain;
  const isSolana = chain
    ? parseCAIP(chain).chainId === WalletChainType.SOLANA
    : false;

  const caip10WalletAddress =
    universalAccount?.address && universalAccount?.chain
      ? walletToFullCAIP10(universalAccount.address, universalAccount.chain)
      : null;

   const isSignerReady = !!pushChainClient?.universal;

  // Restore from sessionStorage on wallet-connect
  useEffect(() => {
    if (walletAddress) {
      const stored = getStoredAuthHeaders(walletAddress);
      if (stored) setAuthHeaders(stored);
    }
  }, [walletAddress]);

  // Clear on disconnect
  useEffect(() => {
    if (!universalAccount) {
      setAuthHeaders(undefined);
      clearStoredAuthHeaders();
    }
  }, [universalAccount]);

  const getAuthHeaders = async (): Promise<AuthHeaders | null> => {

    if (walletAddress) {
      const stored = getStoredAuthHeaders(walletAddress);
      if (stored) {
        setAuthHeaders(stored);
        return stored;
      }
    }

    if (!universalAccount || !caip10WalletAddress) return null;
    if (FLAGS.CULT) return null;


    const signFn = isSolana ? signMessageSolana : signMessageEthereum;

      setIsSigningMessage(true);


      try {
        const { signature, messageToSend, messageString, error } =
          await signFn();

        if (error || !signature) return null;

        const messagePayload = isSolana ? messageString : messageToSend;

        if (!messagePayload) return null;

        const newHeaders: AuthHeaders = {
          message: messagePayload as AuthHeaders["message"],
          signature,
          walletAddress: caip10WalletAddress,
        };


        setAuthHeaders(newHeaders);
        storeAuthHeaders(newHeaders);

        return newHeaders;
      } catch (err) {
        return null;
      } finally {
        setIsSigningMessage(false);
      }
  }

  // Auto-sign on wallet connect so authHeaders is ready before user interaction
  //
  useEffect(() => {
      if (!walletAddress || FLAGS.CULT) return;
      if (!isSignerReady) return;
      if (authHeaders) return;

      const stored = getStoredAuthHeaders(walletAddress);
      if (stored) {
        setAuthHeaders(stored);
        return;
      }
      getAuthHeaders();
    }, [walletAddress, isSignerReady]);

  const clearAuthHeaders = useCallback(() => {
    setAuthHeaders(undefined);
    clearStoredAuthHeaders();
  }, []);


  return (
    <AuthHeadersContext.Provider
      value={{ authHeaders, getAuthHeaders, isSigningMessage, clearAuthHeaders }}
    >
      {children}
    </AuthHeadersContext.Provider>
  );
};

export const useAuthHeaders = () => {
  const context = useContext(AuthHeadersContext);
  if (!context) {
    throw new Error("useAuthHeaders must be used within AuthHeadersProvider");
  }
  return context;
};
