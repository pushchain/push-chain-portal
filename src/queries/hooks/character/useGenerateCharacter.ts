import { useMutation } from '@tanstack/react-query';

import { CharacterGenerateParams } from '../../types';
import { generateCharacter } from '../../services';
import { characterGenerate } from '../../queryKeys';

export const useGenerateCharacter = () => {
  return useMutation({
    mutationFn: (params: CharacterGenerateParams) => generateCharacter(params),
    mutationKey: [characterGenerate]
  });
};
