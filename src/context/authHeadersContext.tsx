// AuthHeadersContext.tsx
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useSignMessageWithEthereum } from "../components/Rewards/hooks/useSignMessage";
import { AuthHeaders, useGetSeasonThreeUserByWallet } from "../queries";
import { parseCAIP, walletToFullCAIP10 } from "../helpers/web3helper";

const AUTH_HEADERS_KEY = "push_auth_headers";

let isSigningInProgress = false;

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
  signAndStore: () => Promise<AuthHeaders | null>;
  clearAuthHeaders: () => void;
};

const AuthHeadersContext = createContext<AuthHeadersContextType | null>(null);

export const AuthHeadersProvider = ({ children }: { children: ReactNode }) => {
  const [authHeaders, setAuthHeaders] = useState<AuthHeaders | undefined>();
  const [isSigningMessage, setIsSigningMessage] = useState(false);

  const { universalAccount } = usePushWalletContext('wallet1');
  const { signMessage } = useSignMessageWithEthereum();

  const walletAddress = universalAccount?.address;
  const chain = universalAccount?.chain;
  const { chainId } = parseCAIP(chain);

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const hasSigned = !!authHeaders;

  useEffect(() => {
    if (walletAddress) {
      const stored = getStoredAuthHeaders(walletAddress);
      if (stored) {
        setAuthHeaders(stored);
      }
    }
  }, [walletAddress]);

  useEffect(() => {
    if (!universalAccount) {
      setAuthHeaders(undefined);
      clearStoredAuthHeaders();
      isSigningInProgress = false;
    }
  }, [universalAccount]);

  const signAndStore = useCallback(async () => {
    if (!universalAccount || authHeaders) return null;

    setIsSigningMessage(true);
    try {
      const { signature, messageToSend, error } = await signMessage();
      if (error || !signature || !messageToSend) return null;

      const newAuthHeaders: AuthHeaders = {
        message: messageToSend,
        signature,
        walletAddress: `eip155:${chainId}:${walletAddress}`,
      };

      setAuthHeaders(newAuthHeaders);
      storeAuthHeaders(newAuthHeaders);
      return newAuthHeaders;
    } finally {
      setIsSigningMessage(false);
      isSigningInProgress = false;
    }
  }, [universalAccount, authHeaders, signMessage, chainId, walletAddress]);

  useEffect(() => {
    if (!userDetails) return;
    if (!universalAccount) return;
    if (authHeaders) return;
    if (isSigningInProgress) return;

    isSigningInProgress = true;
    signAndStore();
  }, [universalAccount, authHeaders, userDetails, signAndStore]);

  const clearAuthHeaders = useCallback(() => {
    setAuthHeaders(undefined);
    clearStoredAuthHeaders();
    isSigningInProgress = false;
  }, []);

  return (
    <AuthHeadersContext.Provider
      value={{
        authHeaders,
        isSigningMessage,
        hasSigned,
        signAndStore,
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
