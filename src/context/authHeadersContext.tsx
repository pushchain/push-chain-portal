// AuthHeadersContext.tsx
import { createContext, useContext, useState, useEffect, useCallback, ReactNode, useRef } from "react";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useSignMessageWithEthereum } from "../components/Rewards/hooks/useSignMessage";
import { useSignMessageWithSolana } from "../components/Rewards/hooks/useSignMessageWithSolana";
import { AuthHeaders, useGetSeasonThreeUserByWallet } from "../queries";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";
import { WalletChainType } from "../components/Rewards/utils/wallet";
import { FLAGS } from "../config/flags";

const AUTH_HEADERS_KEY = "push_auth_headers";

const getStoredAuthHeaders = (walletAddress: string): AuthHeaders | null => {
  try {
    const stored = sessionStorage.getItem(AUTH_HEADERS_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (parsed.walletAddress?.includes(walletAddress)) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
};

const storeAuthHeaders = (authHeaders: AuthHeaders) => {
  try {
    sessionStorage.setItem(AUTH_HEADERS_KEY, JSON.stringify(authHeaders));
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
  isSigningMessage: boolean;
  hasSigned: boolean;
  clearAuthHeaders: () => void;
};

const AuthHeadersContext = createContext<AuthHeadersContextType | null>(null);

export const AuthHeadersProvider = ({ children }: { children: ReactNode }) => {
  const [authHeaders, setAuthHeaders] = useState<AuthHeaders | undefined>();
  const [isSigningMessage, setIsSigningMessage] = useState(false);
  const hasAttemptedSign = useRef(false);

  const { universalAccount } = usePushWalletContext('wallet1');
  const { signMessage: signMessageEthereum } = useSignMessageWithEthereum();
  const { signMessage: signMessageSolana } = useSignMessageWithSolana();

  const walletAddress = universalAccount?.address;
  const chain = universalAccount?.chain;
  const { chainId } = parseCAIP(chain);

  const isSolana = chainId === WalletChainType.SOLANA;
  const signMessage = isSolana ? signMessageSolana : signMessageEthereum;

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const hasSigned = !!authHeaders;

  // Load from sessionStorage on wallet connect
  useEffect(() => {
    if (walletAddress) {
      const stored = getStoredAuthHeaders(walletAddress);
      if (stored) {
        setAuthHeaders(stored);
        hasAttemptedSign.current = true;
      }
    }
  }, [walletAddress]);

  // Clear on disconnect
  useEffect(() => {
    if (!universalAccount) {
      setAuthHeaders(undefined);
      clearStoredAuthHeaders();
      hasAttemptedSign.current = false;
    }
  }, [universalAccount]);

  useEffect(() => {
    if (!userDetails) return;
    if (!universalAccount) return;
    if (authHeaders) return;
    if (hasAttemptedSign.current) return;
    // no signings needed for cult
    if (FLAGS.CULT) return;

    hasAttemptedSign.current = true;

    const signOnce = async () => {
      setIsSigningMessage(true);
      try {
        const { signature, messageToSend, messageToSign, error } = await signMessage();
        if (error || !signature) return;

        const messagePayload = isSolana ? messageToSign : messageToSend;
        if (!messagePayload) return;

        const newAuthHeaders: AuthHeaders = {
          message: messagePayload as AuthHeaders['message'],
          signature,
          walletAddress: caip10WalletAddress,
        };

        setAuthHeaders(newAuthHeaders);
        storeAuthHeaders(newAuthHeaders);
      } catch (err) {
        console.error("Failed to sign:", err);
      } finally {
        setIsSigningMessage(false);
      }
    };

    signOnce();
  }, [userDetails, universalAccount, authHeaders, signMessage, isSolana, caip10WalletAddress]);

  const clearAuthHeaders = useCallback(() => {
    setAuthHeaders(undefined);
    clearStoredAuthHeaders();
    hasAttemptedSign.current = false;
  }, []);

  return (
    <AuthHeadersContext.Provider
      value={{
        authHeaders,
        isSigningMessage,
        hasSigned,
        clearAuthHeaders,
      }}
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
