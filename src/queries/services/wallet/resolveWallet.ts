import axios from "axios";
import { resolveWalletModel } from "../../models";
import { ResolveWalletParams, AuthHeaders } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const resolveWallet = (params: ResolveWalletParams, authHeaders: AuthHeaders) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/wallet/resolve`,
    params: {
      chainId: params.chainId,
      walletAddress: params.walletAddress,
    },
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => resolveWalletModel(response.data));
