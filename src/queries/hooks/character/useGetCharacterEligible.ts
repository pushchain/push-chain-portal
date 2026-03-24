import { useQuery } from "@tanstack/react-query";

import { CharacterEligibleParams } from "../../types/character";
import { characterEligible } from "../../queryKeys";
import { getCharacterEligible } from "../../services";

export const useGetCharacterEligible = (options?: CharacterEligibleParams) => {
  const isInvalidWallet = !options?.userWallet;

  return useQuery({
    queryKey: isInvalidWallet ? undefined : [characterEligible, options.userWallet],
    queryFn: () => getCharacterEligible(options!),
    retry: false,
    enabled: !isInvalidWallet,
  });
};
