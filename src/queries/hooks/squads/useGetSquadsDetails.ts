import { useQuery } from "@tanstack/react-query";
import { squadsDetails } from "../../queryKeys";
import { getSquadsDetails } from "../../services";
import { AuthHeaders } from "../../types";

export const useGetSquadsDetails = (authHeaders: AuthHeaders) => {
  return useQuery({
    queryKey: [squadsDetails],
    queryFn: () => getSquadsDetails(authHeaders),
    retry: false,
    enabled: !!authHeaders?.walletAddress,
  });
};
