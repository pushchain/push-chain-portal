import { useQuery } from '@tanstack/react-query';

import { GetNextReshuffleFeeParams } from '../../types';
import { getNextReshuffleFee } from '../../services';
import { nextReshuffleFee } from '../../queryKeys';

export const useGetNextReshuffleFee = (params: GetNextReshuffleFeeParams) => {
  return useQuery({
    queryKey: [nextReshuffleFee, params.characterId],
    queryFn: () => getNextReshuffleFee(params),
    enabled: !!params.characterId,
  });
};
