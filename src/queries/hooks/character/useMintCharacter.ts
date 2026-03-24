import { useMutation } from '@tanstack/react-query';

import { CharacterMintParams } from '../../types';
import { characterMint } from '../../queryKeys';
import { mintCharacter } from '../../services';

export const useMintCharacter = () => {
  return useMutation({
    mutationFn: (params: CharacterMintParams) => mintCharacter(params),
    mutationKey: [characterMint]
  });
};
