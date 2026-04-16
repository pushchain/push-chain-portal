// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from "react";

import { css } from "styled-components";
import BlockiesSvg from "blockies-react-svg";

import { useResolveWeb3Name } from "../../../hooks/useResolveWeb3Name";
import { getChainIdFromFullCaip, shortenText } from "../../../helpers/web3helper";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { device } from "../../../config/globals";

import {
  AptosLogo,
  ArbitrumLogo,
  AvalancheLogo,
  BaseLogo,
  BnbLogo,
  Box,
  EthereumLogo,
  OptimismLogo,
  PolygonLogo,
  PushChainLogo,
  Skeleton,
  SolanaLogo,
  SuiLogo,
  Text,
  zKsyncLogo as ZKsyncLogo,
} from "../../../blocks";
import { WalletChainType } from "../../Rewards/utils/wallet";

export type LeaderboardListItemProps = {
  rank: number;
  address: string;
  points: number;
  isLoading: boolean;
  userWallet: string;
  highlighted?: boolean;
};

const LeaderboardListItem: FC<LeaderboardListItemProps> = ({
  rank,
  address,
  points,
  isLoading,
  userWallet,
  highlighted,
}) => {
  const web3NameList = useResolveWeb3Name(address);
  const isMobile = useMediaQuery(device.mobileL);
  const chainId = getChainIdFromFullCaip(userWallet);

  const web3Name = web3NameList?.[address];
  const displayName = web3Name
    ? web3Name
    : shortenText(address, isMobile ? 4 : 10, isMobile ? 4 : 10);

  const textColor = highlighted ? '#D548EC' : 'text-primary';



  const getChainLogo = () => {
    switch (chainId) {
      case 1:
        return <EthereumLogo size={18} />;
      case 11155111:
        return <EthereumLogo size={16} />;
      case 42101:
        return <PushChainLogo size={16} />;
      case 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1':
        return <SolanaLogo size={16} />;
      case 42161:
        return <ArbitrumLogo size={16} />;
      case 43114:
        return <AvalancheLogo size={16} />;
      case 8453:
      case 84532:
        return <BaseLogo size={11} />;
      case 56:
        return <BnbLogo size={16} />;
      case 10:
        return <OptimismLogo size={16} />;
      case 137:
        return <PolygonLogo size={16} />;
      case 324:
        return <ZKsyncLogo size={16} />;
      case 'aptos':
        return <AptosLogo size={16} />;
      case 'sui':
        return <SuiLogo size={16} />;
      default:
        return null;
    }
  };

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
            <Text variant="bm-bold" color={textColor}>
              {rank > 0 && rank?.toLocaleString()}
            </Text>
          </Box>
          <Box display="flex" gap="spacing-xs" alignItems="center">
            {getChainLogo() ? <Box
              width="24px"
              height="24px"
              overflow="hidden"
              css={css`
                background: #EAEBF2;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
            `}
            >
              {getChainLogo()}
            </Box> :
            <Box
              width="32px"
              height="32px"
              borderRadius="radius-xl"
              overflow="hidden">
                <BlockiesSvg address={address} size={8} scale={4} />
            </Box>}
            <Text
              variant="bm-bold"
              display={{ ml: "none", initial: "block" }}
              color={textColor}
            >
              {displayName}
            </Text>
            <Text
              variant="bs-bold"
              display={{ ml: "block", initial: "none" }}
              color={textColor}
            >
              {displayName}
            </Text>
          </Box>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
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
            color={textColor}
          >
            {points?.toLocaleString()}
          </Text>
          <Text
            variant="bs-bold"
            display={{ ml: "block", initial: "none" }}
            color={textColor}
          >
            {points?.toLocaleString()}
          </Text>
        </Box>
      </Skeleton>
    </Box>
  );
};

export { LeaderboardListItem };
