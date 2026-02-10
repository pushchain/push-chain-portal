export type RarePassHistoryItem = {
  [key: string]: unknown;
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
