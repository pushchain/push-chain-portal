import { useQuery } from '@tanstack/react-query';

import { GetUserCultStatusParams } from '../../types';
import { userCultStatus } from '../../queryKeys';
import { getUserCultStatus } from '../../services';

export const useGetUserCultStatus = (options?: GetUserCultStatusParams) => {
  const identifier = options && ('userId' in options ? options.userId : options.wallet);
  const isEnabled = !!identifier;

  return useQuery({
    queryKey: isEnabled ? [userCultStatus, identifier] : undefined,
    queryFn: () => getUserCultStatus(options!),
    retry: false,
    enabled: isEnabled,
  });
};
