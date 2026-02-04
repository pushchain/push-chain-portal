export type ResolveWalletParams = {
  chainId: string;
  walletAddress: string;
};

export type ResolveWalletResponse = {
  success: boolean;
  data: {
    userId: string;
    [key: string]: any;
  };
};
