import {
  AptosLogo,
  ArbitrumLogo,
  AvalancheLogo,
  BaseLogo,
  BnbLogo,
  EthereumLogo,
  OptimismLogo,
  PolygonLogo,
  PushChainLogo,
  SolanaLogo,
  SuiLogo,
  zKsyncLogo as ZKsyncLogo,
} from "../../../blocks";

export const getChainLogo = (chainId: number | string | null) => {
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
      case 97:
      return <BnbLogo size={18} />;
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
