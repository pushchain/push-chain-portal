import { useQuery } from "@tanstack/react-query";
import { sybilStatus } from "../../queryKeys";
import { getSybilStatus } from "../../services";
import { AuthHeaders } from "../../types";

export const useGetSybilStatus = ({
  walletAddress,
  authHeaders,
}: {
  walletAddress?: string;
  authHeaders?: AuthHeaders;
} = {}) => {
  const isValid =
    walletAddress &&
    authHeaders?.message &&
    authHeaders?.signature &&
    authHeaders?.walletAddress;

  console.log(isValid, 'isValid', walletAddress, authHeaders)

  return useQuery({
    queryKey: [sybilStatus, walletAddress],
    queryFn: () => getSybilStatus({ walletAddress: walletAddress!, authHeaders: authHeaders! }),
    retry: false,
    enabled: !!isValid,
  });
};
