import { useQuery } from "@tanstack/react-query";
import { usePushWalletContext } from '@pushchain/ui-kit';
import { squadsPendingInvites } from "../../queryKeys";
import { getSquadsPendingInvites } from "../../services";

export const useGetSquadsPendingInvites = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const isWalletConnected = Boolean(universalAccount?.address)

  return useQuery({
    queryKey: [squadsPendingInvites],
    queryFn: () => getSquadsPendingInvites(),
    retry: false,
    enabled: !!isWalletConnected,
  });
};
