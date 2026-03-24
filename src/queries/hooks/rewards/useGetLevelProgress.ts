import { useQuery } from "@tanstack/react-query";
import { levelProgress } from "../../queryKeys";
import { getLevelProgress } from "../../services";
import { AuthHeaders } from "../../types";

export const useGetLevelProgress = (authHeaders?: AuthHeaders) => {
  const isValid = authHeaders?.message && authHeaders?.signature && authHeaders?.walletAddress;

  return useQuery({
    queryKey: [levelProgress, authHeaders?.walletAddress],
    queryFn: () => getLevelProgress(authHeaders!),
    retry: false,
    enabled: !!isValid,
  });
};
