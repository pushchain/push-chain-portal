export type CharacterStatus = 'UNMINTED' | 'MINTED' | 'RESERVED';

export interface CharacterInfoParams {
  walletAddress: string;
}

export interface CharacterGenerateParams {
  walletAddress: string;
}

export interface CharacterMintParams {
  walletAddress: string;
}

export interface CharacterReshuffleParams {
  walletAddress: string;
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
}
