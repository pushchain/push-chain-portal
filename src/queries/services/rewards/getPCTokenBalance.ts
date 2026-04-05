import axios from "axios";
import { getSeasonThreeBaseURL } from "../../baseURL";

export type PCTokenBalanceResponse = {
  success: boolean;
  userId: string;
  cachePCTokens: number;
  claimableTokens: number;
  hasUEAWallet: boolean;
  uEAWallet: string;
};

export const getPCTokenBalance = (userId: string) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/pc-tokens/balance`,
    params: { userId },
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.data as PCTokenBalanceResponse);
