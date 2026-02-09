export type Quest = {
  id: string;
  appId: string;
  questIndex: number;
  title: string;
  description: string;
  baseXP: number;
  basePoints: number;
  verificationHandler: string;
  frequency: "ONCE" | "REPEATABLE";
  requiresUniqueData: boolean;
  status: "ENABLED" | "DISABLED";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type QuestsResponse = {
  success: boolean;
  data: {
    quests: Quest[];
    count: number;
  };
};

export type GetQuestsParams = {
  appId: string;
};
