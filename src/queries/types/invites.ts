export type RequestInviteCodePayload = {
  count: number;
};

export interface RequestInviteCodesResponse {
  codes: string[];
  remainingCodes: number | "unlimited";
}

export interface UserInvite {
  code: string;
  isUsed: boolean;
  usedAt: string | null;
  expiresAt: string | null;
  usedBy: {
    wallet: string;
    userId: string;
  } | null;
}

export interface UserInvitesStats {
  totalCreated: number;
  used: number;
  unused: number;
  remainingCodes: number | "unlimited";
  hasEternalTorch: boolean;
}

export interface UserInvitesResponse {
  invites: UserInvite[];
  stats: UserInvitesStats;
}


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
