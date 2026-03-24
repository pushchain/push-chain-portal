// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from "react";
import { css } from "styled-components";
import BlockiesSvg from "blockies-react-svg";

import { useResolveWeb3Name } from "../../../hooks/useResolveWeb3Name";
import { shortenText, fullCAIP10ToWallet } from "../../../helpers/web3helper";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { device } from "../../../config/globals";
import { Box, Skeleton, Text } from "../../../blocks";

export type CultLeaderboardItemProps = {
  rank: number;
  userId: string;
  userWallet: string;
  totalPoints: number;
  isLoading: boolean;
};

const CultLeaderboardItem: FC<CultLeaderboardItemProps> = ({
  rank,
  userId,
  userWallet,
  totalPoints,
  isLoading,
}) => {
  const address = fullCAIP10ToWallet(userWallet);
  const web3NameList = useResolveWeb3Name(address);
  const isMobile = useMediaQuery(device.mobileL);

  const web3Name = web3NameList?.[address];
  const displayName = web3Name
    ? web3Name
    : shortenText(address, isMobile ? 4 : 10, isMobile ? 4 : 10);

  return (
    <Box
      height="56px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      css={css`
        border-bottom: var(--border-sm) solid var(--stroke-secondary);
      `}
    >
      <Skeleton isLoading={isLoading} width={{ initial: "250px", tb: "auto" }}>
        <Box display="flex" gap="spacing-xs" alignItems="center">
          <Box minWidth="48px" justifyContent="center" display="flex">
            <Text variant="bm-bold" color="text-primary">
              {rank > 0 && rank?.toLocaleString()}
            </Text>
          </Box>
          <Box display="flex" gap="spacing-xs" alignItems="center">
            <Box width="32px" height="32px" borderRadius="radius-xl" overflow="hidden">
              <BlockiesSvg address={address} size={8} scale={4} />
            </Box>
            <Text
              variant="bm-bold"
              display={{ ml: "none", initial: "block" }}
              color="text-primary"
            >
              {displayName}
            </Text>
            <Text
              variant="bs-bold"
              display={{ ml: "block", initial: "none" }}
              color="text-primary"
            >
              {displayName}
            </Text>
          </Box>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box display="flex" alignItems="center" gap="spacing-md">
          <Text
            variant="bs-semibold"
            color="text-tertiary"
            display={{ ml: "none", initial: "block" }}
          >
            {userId}
          </Text>
          <Box
            width="88px"
            minWidth="88px"
            minHeight="22px"
            display="flex"
            justifyContent="center"
          >
            <Text
              variant="bm-bold"
              display={{ ml: "none", initial: "block" }}
              color="text-primary"
            >
              {totalPoints?.toLocaleString()}
            </Text>
            <Text
              variant="bs-bold"
              display={{ ml: "block", initial: "none" }}
              color="text-primary"
            >
              {totalPoints?.toLocaleString()}
            </Text>
          </Box>
        </Box>
      </Skeleton>
    </Box>
  );
};

export { CultLeaderboardItem };
