export type AuthHeaders = {
  message: Record<string, string | undefined> | string;
  signature: string;
  walletAddress: string;
};

export type RewardsAcitivitesResponse = {
  activities: Activity[];
  total: number;
  page: number;
  size: number;
};

export type ActvityType =
  | "follow_push_on_discord"
  | "follow_push_on_twitter"
  | `unichess_${string}`
  | `push_ninja_${string}`
  | `moleswap_${string}`
  | `boss_${string}`


export type Activity = {
  id: string;
  activityType: ActvityType;
  activityTitle: string;
  activityDesc: string;
  points: number;
  multiplier: number;
  expiryType: number;
  name?: string;
  JoinURL: string;
  index: string;
  status: "ENABLED" | "DISABLED";
  tags: [];
  isExpired?: boolean;
};

export type UsersAllActivitiesResponse = {
  activities: UsersActivity[];
  total: number;
  page: number;
  size: number;
};

export type UsersActivity = {
  activityId: string;
  userId?: string;
  activityTypeId: string;
  data?:
    | { twitter?: string; discord?: string }
    | {
        currentEpoch?: number;
        fromBlock?: number;
        toBlock?: number;
        fromTimestamp?: number;
        toTimestamp?: number;
      }
    | any;
  status: "COMPLETED" | "PENDING" | "REJECTED";
  points: number;
  multiplier: number;
  verificationProof?: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

export type UsersActivityError = {
  error: string;
};

// The key can be any string, and the value can be either StakeActivitySuccess or StakeActivityError
export type StakeActivityResponse = {
  [key: string]: UsersActivity | UsersActivityError;
};

type Prop = {
  [key: string]: string;
};

export type ClaimRewardsActivityProps = {
  userId: string;
  activityTypeId: string;
  data?: Prop | {};
  verificationProof?: string;
};

export type RewardActivityStatusProps = {
  userId: string;
  activities: string[];
};

export type PointsVaultUserLoginProps = {
  username: string;
  password: string;
};
export type PointsVaultUserLoginPayload = {
  token: string;
};

export type ClaimActivitesResponse = {
  success: boolean;
    data?: {
      activityId?: string;
      status?: string;
      points?: number;
      multiplier?: number;
      createdAt?: string;
    };
};

export type DiscordDetails = {
  id: string;
  username: string;
  avatar: null | string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: null | string;
  accent_color: null | string;
  global_name: string;
  avatar_decoration_data: null | object;
  banner_color: null | string;
  clan: null | object;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
};

export type UserRewardsDetailParams = {
  caip10WalletAddress: string;
};

export type UserSeasonOneResponse = {
  userId: string;
  userWallet: string;
  refPrimary: string;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  totalPoints: number;
  multiplier: number;
  previousMultiplier: number;
  lastUpdated: string;
  pgpPublicKey: string;
  rank: number;
  createdAt: string | null;
  discordEmail: string | null;
  secondaryDiscordUserName: string | null;
  discordReverified: boolean;
  usersInvited: number;
};

export type UserRewardsDetailResponse = {
  userId: string;
  userWallet: string;
  refPrimary: string | null;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  totalPoints: number;
  multiplier: number;
  previousMultiplier: number;
  rank: number;
  lastUpdated: string;
  createdAt: string;
  usersInvited: number;
  discordEmail: string;
  discordReverified: boolean;
  secondaryDiscordUserName: string;
  isSeasonOneUser: boolean;
  pgpPublicKey?: string;
};

export type UserRewardsStatsResponse = {
  seasonOne: {
    totalUsers: number;
    totalUsersWithEmail: number;
  };
  seasonTwo: {
    totalUsers: number;
    totalUsersWithEmail: number;
  };
  allSeasons: {
    totalUniqueUsers: number;
    totalUniqueUsersWithEmail: number;
  };
};

export type createUserRewardsDetailsProps = {
  userWallet: string;
  pgpPublicKey: string;
  verificationProof: string;
  refPrimary?: string;
};

export type createUserRewardsDetailsResponse = {};

export type RewardsStakeParams = {
  currentEpoch: number;
  fromBlock: number;
  toBlock: number;
  fromTimestamp: number;
  toTimestamp: number;
};

export type ActivityData = {
  discord?: string;
  discord_token?: string;
  twitter?: string;
};

export type RewardActivityStatus = {
  activityId: string;
  activityTypeId: string;
  createdAt: string;
  data: ActivityData | {};
  multiplier: number;
  points: number;
  status: string;
  updatedAt: string;
  userId: string;
  verificationProof: string;
};

export type RewardActivityStatusResponse = {
  [key: string]: RewardActivityStatus | {};
};

type LeaderBoardUser = {
  userId: string;
  userWallet: string;
  refPrimary: string | null;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  totalPoints: number;
  totalRarePass?: number;
  lifetimePointsEarned?: number;
  multiplier: number;
  lastUpdated: string;
  pgpPublicKey: string;
  rank: number;
};

export type ModelledLeaderBoardUser = {
  userId: string;
  userWallet: string;
  totalPoints: number;
  totalRarePass?: number;
  lifetimePointsEarned: number;
  rank: number;
};

export type LeaderboardResponse = {
  users: Array<LeaderBoardUser>;
  page: number;
  pageSize: number;
  total: number;
};

export type LeaderboardModelledResponse = {
  users: Array<ModelledLeaderBoardUser>;
  page: number;
  pageSize: number;
  total: number;
};

export type LeaderboardParams = {
  order?: string;
  pageSize?: number;
  pageNumber?: number;
};

export type UserEligibilityForPreLaunchParams = {
  address: string;
};

export type UserEligibilityForPreLaunchResponse = {
  discordVerified: boolean;
  exists: boolean;
  season: string;
};

export type SeasonThreeUserByWalletParams = {
  walletAddress: string;
};

export type SeasonThreeUserByWalletResponse = {
  userId: string;
  userWallet: string;
  userUEAWallet: string;
  activityPoints: number;
  referralPoints: number;
  frozenPoints: number;
  totalPoints: number;
  cachePCTokens: number;
  xp: number;
  level: number;
  paragonModeEnabled: boolean;
  rareActiveCount: number;
  rareDormantCount: number;
  shinyCount: number;
  ashCount: number;
  streak: number;
  lastCheckIn: string | null;
  spinCount: number;
  spinDate: string | null;
  totalSpins: number;
  permaMultiplier: number;
  permaXPMultiplier: number;
  previousPermaMultiplier: number;
  xpTempBoosts: number;
  tempMultiplier: number;
  hasEternalTorch: boolean;
  inviteCodes: number;
  inviteCodeUsed: string;
  phase: string;
  rank: number;
  createdAt: string;
  lastUpdated: string;
  isSeasonOneUser: boolean;
  isSeasonTwoUser: boolean;
};

export type AdvancedSybilCheckParams = {
  address: string;
  authHeaders?: AuthHeaders;
  chainId?: number | string;
  verificationProof?: string;
  message?: string;
};

export type WalletAgeCheck = {
  passed: boolean;
  reason: string;
  details: {
    firstTxTimestamp: number;
    firstTxHash: string;
    walletCreationDate: string;
    walletAgeDays: number;
    cutoffDate: string;
    requiredAgeDays: number;
  };
};

export type MinimumBalanceCheck = {
  passed: boolean;
  reason: string;
  usdCheck: {
    passed: boolean;
    reason: string;
    details: {
      error?: string;
    };
  };
  nativeTokenCheck: {
    passed: boolean;
    reason: string;
    details: {
      blockNumber: number;
      checkDate: string;
      balanceWei: string;
      balanceInNative: string;
      requiredNativeToken: number;
      shortfall: number;
    };
  };
};

export type TransactionCountCheck = {
  passed: boolean;
  reason: string;
  details: {
    blockNumber: number;
    cutoffDate: string;
    transactionCount: number;
    requiredCount: number;
    shortfall: number;
    firstTxDate: string;
    lastTxDate: string;
  };
};

export type AdvancedSybilCheckResponse = {
  eligible: boolean;
  address: string;
  chainId: number;
  chainName: string;
  checks: {
    walletAge: WalletAgeCheck;
    minimumBalance: MinimumBalanceCheck;
    transactionCount: TransactionCountCheck;
  };
  checkedAt: string;
  duration: string;
};


export type SpinStatusResponse = {
  success: boolean;
  currentSpinCount: number;
  remainingSpins: number;
  maxSpinsPerDay: number;
  nextSpinCost: number;
  canSpin: boolean;
  hasEnoughPoints: boolean;
  userPoints: number;
  totalLifetimeSpins: number;
  rarePassCount: number;
  squadInfo?: {
    isInSquad: boolean;
    squadLevel?: number;
    squadLuckProb?: number;
  };
  needsReset: boolean;
  resetsAt: string;
};

export interface SpinTheWheelResponse {
  success: boolean;
  spinNumber: number;
  spinCost: number;
  slotId: number;
  rewardType: string;
  rewardValue: number;
  rewardLabel: string;
  rewardDetails?: {
    xpMultiplierAwarded?: number;
    xpMultiplierExpiresAt?: string;
    pointsAwarded?: number;
    pcTokensAwarded?: number;
    rarePassAwarded?: boolean;
  };
  remainingSpins: number;
  nextSpinCost: number;
  userState: {
    totalPoints: number;
    cachePCTokens: number;
    rareActiveCount: number;
    tempXPMultiplier?: number;
    tempXPMultiplierExpiresAt?: string;
  };
}

export type ClaimSeasonThreePayload = {
  userWallet: string;
  discordEmail: string;
  discordUsername: string;
  data: Record<string, string>;
  verificationProof: string;
};

export type ClaimSeasonThreeResponse = {
  success: boolean;
  created: boolean;
  status?: string;
  user?: UserRewardsDetailResponse;
};

export type CreateSeasonThreeUserPayload = {
  userWallet: string;
  userUEAWallet?: string;
  email?: string;
  inviteCodeUsed?: string;
  phase?: string;
  verificationProof: string;
  data: Record<string, string> | string;
};

export interface CreateSeasonThreeUserResponse {
  userId: string;
  userWallet: string;
  userUEAWallet?: string;
  phase: string;
  createdAt: string;
}

export interface DailyCheckInDetailsResponse {
  success: boolean;
  streak: number;
  lastCheckIn: string;
  canCheckInToday: boolean;
  nextCheckInAvailable: string;
}

export interface ClaimDailyRewardsSeasonThreeResponse {
  success: boolean;
  streak: number;
  points: number;
  xp: number;
  isStreakReset: boolean;
  message: string;
}

export type LevelConfigItem = {
  level: number;
  xpNeeded: number;
  pointsReward: number;
  pcTokensReward: number;
};

export type LevelProgressResponse = {
  success: boolean;
  level: number;
  xp: number;
  xpProgress: {
    currentXPInLevel: number;
    xpNeededForNextLevel: number;
    progressPercentage: number;
  };
  currentLevelConfig: LevelConfigItem;
  nextLevelConfig: LevelConfigItem;
  paragonModeEnabled: boolean;
};

export type VerifySybilWalletParams = {
  userId: string;
  verificationProof: string;
};

export type VerifySybilWalletResponse = {
  // success: boolean;
  // data?: {
  //   activityId?: string;
  //   status?: string;
  //   points?: number;
  //   multiplier?: number;
  //   createdAt?: string;
  // };
};

export type SybilStatusResponse = {
  isSybil: boolean;
  status: string;
  walletAddress: string;
};

export type GetSybilStatusResponse = {
  success: boolean;
  data: {
    passed: boolean;
    reason: string | null;
    isCultMember: boolean;
    cultBypass: boolean;
    completed: boolean;
    summary: {
      completedCriteria: number;
      totalCriteria: number;
    };
    basic: {
      twitter: { completed: boolean };
      discord: { completed: boolean };
      level: {
        completed: boolean;
        currentLevel: number;
        requiredLevel: number;
        remainingLevels: number;
      };
    };
    advanced: {
      completed: boolean;
      connectedWalletAddress: string | null;
    };
  };

};
