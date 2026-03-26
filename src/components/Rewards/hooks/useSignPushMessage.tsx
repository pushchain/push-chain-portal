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

export type SIWEMessageParams = {
  domain: string;
  address: string;
  uri: string;
  version?: string;
  chainId: number;
  nonce?: string;
  issuedAt?: string;
  statement?: string;
};

/**
 * Builds a EIP-4361 (SIWE) compliant message string.
 * https://eips.ethereum.org/EIPS/eip-4361
 */
export const generateSIWEMessage = (params: SIWEMessageParams): string => {
  const {
    domain,
    address,
    uri,
    version = "1",
    chainId,
    nonce = Date.now().toString(),
    issuedAt = new Date().toISOString(),
    statement = "Sign in to Push Chain",
  } = params;

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

  return lines.join("\n");
};
