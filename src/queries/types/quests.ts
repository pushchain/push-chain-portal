export type AppStatus = 'ENABLED' | 'DISABLED';
export type QuestStatus = 'ENABLED' | 'DISABLED';
export type QuestFrequency = 'ONCE' | 'REPEATABLE';

export interface Quest {
  id: string;
  appId: string;
  questIndex: number;
  title: string;
  description?: string | null;
  baseXP: number;
  basePoints: number;
  verificationHandler: string;
  frequency: QuestFrequency;
  requiresUniqueData: boolean;
  status: QuestStatus;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

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
  completedAt: string | null;
};

export type GetQuestsProgressResponse = {
  success: boolean;
  data: {
    appId: string;
    appName: string;
    appStatus: string;
    quests: QuestProgress[];
    totalCompleted: number;
    progressPercentage?: number;
    totalQuests: number;
  };
};
