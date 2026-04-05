import axios from "axios";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders } from "../../types";

export type ClaimPCTokensPayload = {
  authHeaders: AuthHeaders;
  amount?: number;
};

export type ClaimPCTokensResponse = {
  success: boolean;
  claim: {
    claimId: string;
    userId: string;
    recipientWallet: string;
    amountClaimed: number;
    amountInUPC: string;
    txHash: string;
    txReceipt: Record<string, any>;
    status: string;
    claimedAt: string;
    confirmedAt: string;
  };
};

export const claimPCTokens = ({ authHeaders, amount }: ClaimPCTokensPayload) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/pc-tokens/claim`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
    ...(amount ? { data: { amount } } : {}),
  }).then((response) => response.data as ClaimPCTokensResponse);
