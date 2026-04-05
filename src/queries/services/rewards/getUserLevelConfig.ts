import axios from "axios";
import { getSeasonThreeBaseURL } from "../../baseURL";

export type UserLevelConfigResponse = {
  success: boolean;
  data: UserLevelConfigItem[];
};

export type UserLevelConfigItem = {
  level: number;
  xpNeeded: number;
  pointsReward: number;
  pcTokensReward: number;
  milestones?: {
    rarePassDormant?: boolean;
    rarePassActive?: boolean;
    eternalTorch?: boolean;
    referralThaw?: boolean;
    questXPMultiplier?: string;
    cashInjection?: string;
    paragonMode?: boolean;
  };
};

export const getUserLevelConfig = () =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/admin/config/user-levels`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.data as UserLevelConfigResponse);
