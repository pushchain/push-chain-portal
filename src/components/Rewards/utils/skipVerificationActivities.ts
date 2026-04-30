const SKIP_VERIFICATION_PREFIXES = ['unichess_', 'push_ninja_', 'moleswap_', 'boss_'];

export const shouldSkipVerification = (activityTypeId: string): boolean =>
  SKIP_VERIFICATION_PREFIXES.some((prefix) => activityTypeId?.startsWith(prefix));
