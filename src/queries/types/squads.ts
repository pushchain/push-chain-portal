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
  userId: string;
};

export type SendSquadInviteResponse = {
  inviteId: string;
  squadId: string;
};

export type AcceptSquadInviteParams = {
  inviteId: string;
};

export interface SquadInvite {
  id: string;
  squadId: string;
  inviterId: string;
  inviteeId: string;
  inviter?: {
    userId: string;
    userWallet: string;
  };
  invitee?: {
    userId: string;
    userWallet: string;
  };
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  respondedAt: string | null;
  expiresAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PendingSquadInvite extends SquadInvite {
  squad: {
    id: string;
    name: string | null;
    leaderId: string;
    memberCount: number;
    maxMembers: number;
    isLocked: boolean;
    status: string;
    totalXPSquad: number;
    squadLevel: number;
    squadLuckProb: number;
    createdAt: string;
    updatedAt: string;
  };
  inviter: {
    userId: string;
    userWallet: string;
  };
  invitee: {
    userId: string;
    userWallet: string;
  };
}

export interface Squad {
  id: string;
  name: string | null;
  leaderId: string;
  leader?: {
    userId: string;
    userWallet: string;
    totalPoints: number;
  };
  squadMembers: SquadMember[];
  memberCount: number;
  maxMembers: number;
  isLocked: boolean;
  totalXP?: number;
  totalXPSquad?: number; // Sum of all member XP (updated via background job)
  squadLevel?: number; // Squad level (0-10 based on totalXPSquad and memberCount)
  squadLuckProb?: number; // Luck probability % (0.5, 0.8, 1.2, 1.5)
  luckBuffLevel?: number;
  todayCheckInCount: number;
  lastCheckInDate: string | null;
  perfectCheckInDays: number;
  status: 'ACTIVE' | 'DISBANDED';
  invites?: SquadInvite[];
  createdAt: string;
  updatedAt: string;
}

export type RejectSquadInviteParams = {
  inviteId: string;
};

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
  squads: Squad[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
};
