export type GetUserCultStatusParams =
  | { userId: string; wallet?: never }
  | { wallet: string; userId?: never };

// TODO: Update with actual response shape once API is confirmed
export interface GetUserCultStatusResponse {
  [key: string]: unknown;
}
