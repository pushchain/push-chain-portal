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
