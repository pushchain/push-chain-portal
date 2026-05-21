const OTHER_ACTIVITY_PREFIXES = ['ramen_swap_', 'pusd_', 'moleswap_', 'boss_', 'bonus_'];

export const isOtherRewardActivity = (activityTypeId: string): boolean =>
  OTHER_ACTIVITY_PREFIXES.some((prefix) => activityTypeId?.startsWith(prefix));
