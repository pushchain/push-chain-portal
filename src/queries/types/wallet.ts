import { SeasonThreeUserByWalletResponse } from "./rewards";

export type ResolveWalletParams = {
  chainId: string;
  walletAddress: string;
};

export type ResolveWalletResponse = {
  success: boolean;
  data: SeasonThreeUserByWalletResponse;
};
