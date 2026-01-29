export type SquadMember = {
  memberId: string;
  joinDate: string;
  xpCollected: number;
  isCurrentUser?: boolean;
};

export type SquadsDetailsResponse = {
  success: boolean;
  data: {
    id: string;
    name: string;
    leaderId: string;
    memberCount: number;
    maxMembers: number;
    squadLevel: number;
    squadLuckProb: number;
    totalXPSquad: number;
    perfectCheckInDays: number;
    todayCheckInCount: number;
    lastCheckInDate: string | null;
    isLocked: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    leader: {
      userId: string;
      userWallet: string;
      [key: string]: any;
    };
    squadMembers: Array<{
      id: string;
      squadId: string;
      userId: string;
      [key: string]: any;
    }>;
  };
};

export type CreateSquadParams = {
  name: string;
};

export type CreateSquadResponse = {
  squadId: string;
  squadName: string;
};

export type SendSquadInviteParams = {
  squadId: string;
  walletAddress: string;
};

export type SendSquadInviteResponse = {
  inviteId: string;
  squadId: string;
};

// Accept Squad Invite
export type AcceptSquadInviteParams = {
  inviteId: string;
};

export type AcceptSquadInviteResponse = {
  success: boolean;
};

// Reject Squad Invite
export type RejectSquadInviteParams = {
  inviteId: string;
};

export type RejectSquadInviteResponse = {
  success: boolean;
};

// Squads Leaderboard
export type SquadsLeaderboardParams = {
  order?: string;
  pageSize?: number;
  pageNumber?: number;
};

export type SquadLeaderboardEntry = {
  squadId: string;
  squadName: string;
  level: number;
  totalXp: number;
  totalMembers: number;
  rank: number;
};

export type SquadsLeaderboardResponse = {
  squads: SquadLeaderboardEntry[];
  page: number;
  pageSize: number;
  total: number;
};
