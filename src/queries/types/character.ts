export type CharacterStatus = 'UNMINTED' | 'MINTED' | 'RESERVED';

export interface CharacterInfoParams {
  walletAddress: string;
}

export interface CharacterGenerateParams {
  userWallet: string;
}

export interface CharacterMintParams {
  userWallet: string;
  characterId: string;
}

export interface CharacterReshuffleParams {
  userWallet: string;
  characterId: string;
}

type CharacterDetails = {
  characterId: string;
  status: string;
}

export interface CharacterInfoResponse {
  characters: Array<CharacterDetails>;
  wallet: string;
}

export interface CharacterGenerateResponse {
  success: boolean;
  characterId: string;
  status: CharacterStatus;
}

export interface CharacterMintResponse {
  success: boolean;
  characterId: string;
  status: CharacterStatus;
}

export interface CharacterReshuffleResponse {
  success: boolean;
  newCharacterId: string;
  status: CharacterStatus;
}

export interface CharacterEligibleParams {
  userWallet: string;
}

export interface CharacterEligibleResponse {
  eligible: boolean;
  rareActiveCount: number;
}

export type RarePassHistoryItem = {
  activityId: string;
  activityTypeId: string;
  source: string;
  sourceLabel: string;
  type: 'acquisition' | 'consumption';
  rewardType?: string;
  quantity: number;
  status: string;
  timestamp: string;
  createdAt: string;
  details: Record<string, unknown>;
};

export type RarePassBalanceSummary = {
  rareActiveCount: number;
  rareDormantCount: number;
};

export type RarePassSummary = {
  totalAcquired: number;
  totalConsumed: number;
  currentBalance: RarePassBalanceSummary;
};

export type GetRarePassHistoryParams = {
  userId: string;
  page?: number;
  pageSize?: number;
};

export type GetRarePassHistoryResponse = {
  userId: string;
  history: RarePassHistoryItem[];
  page: number;
  pageSize: number;
  summary: RarePassSummary;
  total: number;
  totalPages: number;
};
