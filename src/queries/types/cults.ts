export type GetUserCultStatusParams =
  | { userId: string; wallet?: never }
  | { wallet: string; userId?: never };

export interface GetUserCultStatusResponse {
  success: boolean;
  data: {
    userId: string;
    userWallet: string;
    isCultMember: boolean;
    memberSince: string | null;
    memberSinceDuration: string | null;
    level: number;
  };
}

export interface CultLeaderboardParams {
  pageSize?: number;
  pageNumber?: number;
}

export interface CultLeaderboardUser {
  rank: number;
  userId: string;
  userWallet: string;
  totalPoints: number;
}

export interface CultLeaderboardApiResponse {
  success: boolean;
  data: {
    entries: CultLeaderboardUser[];
    total: number;
    page: number;
    limit: number;
  };
}

// Shape returned by the model (flattened for the hook)
export interface CultLeaderboardResponse {
  users: CultLeaderboardUser[];
  page: number;
  pageSize: number;
  total: number;
}
