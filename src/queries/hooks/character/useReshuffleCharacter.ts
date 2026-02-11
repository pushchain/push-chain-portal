import { useMutation } from '@tanstack/react-query';

import { CharacterReshuffleParams } from '../../types';
import { reshuffleCharacter } from '../../services';
import { characterReshuffle } from '../../queryKeys';

export const useReshuffleCharacter = () => {
  return useMutation({
    mutationFn: (params: CharacterReshuffleParams) => reshuffleCharacter(params),
    mutationKey: [characterReshuffle]
  });
};
