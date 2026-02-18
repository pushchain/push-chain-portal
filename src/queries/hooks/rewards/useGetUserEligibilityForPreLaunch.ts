import { useQuery } from "@tanstack/react-query";
import { UserEligibilityForPreLaunchParams } from "../../types";
import { eligibleForPreLaunch } from "../../queryKeys";
import { getUserEligibilityForPreLaunch } from "../../services";

const GuestModeWalletAddress =
  "eip155:0x0000000000000000000000000000000000000001";

export const useGetUserEligibilityForPreLaunch = (options?: UserEligibilityForPreLaunchParams) => {
  const address = options?.address;
  const isInvalidAddress =
    !address ||
    address === GuestModeWalletAddress ||
    address.includes("undefined") ||
    address.includes("0x0000000000000000000000000000000000000001");

  return useQuery({
    queryKey: [eligibleForPreLaunch, address ?? ""],
    queryFn: () => getUserEligibilityForPreLaunch(options!),
    retry: false,
    enabled: !isInvalidAddress,
  });
};
