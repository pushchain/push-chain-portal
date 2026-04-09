import axios from "axios";

import { verifySybilWalletModel } from "../../models";
import { VerifySybilWalletParams } from "../../types/rewards";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const verifySybilWallet = ({ userId, verificationProof }: VerifySybilWalletParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/v3/users/${userId}/activity/sybil_wallet_verified`,
    data: {
      verificationProof: verificationProof
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => verifySybilWalletModel(response.data));
