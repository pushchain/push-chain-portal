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

export type GetQuestsProgressParams = {
  appId: string;
  userId: string;
};

export type QuestProgress = {
  questId: string;
  questIndex: number;
  title: string;
  description: string;
  baseXP: number;
  basePoints: number;
  frequency: "ONCE" | "REPEATABLE";
  status: "ENABLED" | "DISABLED";
  completed: boolean;
  completionCount: number;
};

export type GetQuestsProgressResponse = {
  success: boolean;
  data: {
    appId: string;
    appName: string;
    appStatus: string;
    quests: QuestProgress[];
    totalCompleted: number;
    totalQuests: number;
  };
};
