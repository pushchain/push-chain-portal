import { useAuthHeaders } from "../../../context/authHeadersContext";
import { useGetSpinStatus } from "../../../queries/hooks";

export const useSpinStatus = () => {
  const { authHeaders, isSigningMessage } = useAuthHeaders();

  const {
    data: spinStatus,
    isLoading: isLoadingSpinStatus,
    refetch,
    error,
  } = useGetSpinStatus(authHeaders);

  return {
    spinStatus,
    isLoading: isLoadingSpinStatus || isSigningMessage,
    error,
    refetch,
    authHeaders,
  };
};
