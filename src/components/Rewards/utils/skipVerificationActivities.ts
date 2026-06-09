const SKIP_VERIFICATION_PREFIXES = ['zappi_', 'pusd_', 'moleswap_', 'boss_','bonus_non_cult_share_on_x_xp_boost'];

export const shouldSkipVerification = (activityTypeId: string): boolean =>
  SKIP_VERIFICATION_PREFIXES.some((prefix) => activityTypeId?.startsWith(prefix));
