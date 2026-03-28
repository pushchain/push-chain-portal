import axios from "axios";

import { advancedSybilCheckModel } from "../../models";
import { AdvancedSybilCheckParams } from "../../types/rewards";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { WalletChainType } from "../../../components/Rewards/utils/wallet";

export const callAdvancedSybilCheck = ({
  address,
  chainId,
  authHeaders,
}: AdvancedSybilCheckParams) => {
  const isSolana = chainId === WalletChainType.SOLANA;
  const endpoint = isSolana ? "check-solana" : "check-evm";
  const data = isSolana ? { address } : { address, chainId };

  return axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/advanced-sybil/${endpoint}`,
    data,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => advancedSybilCheckModel(response.data.data));
};
