import pusdBg from '../../../../static/assets/website/rewards/pusd-bg.webp';
import zappiBg from '../../../../static/assets/website/rewards/zappi-bg.webp';
import ramenBg from '../../../../static/assets/website/rewards/ramen-bg.webp';
import lastOneBg from '../../../../static/assets/website/rewards/last-one-bg.webp';
import moleswapBg from '../../../../static/assets/website/rewards/moleswap-bg.webp';
import bridgeBg from '../../../../static/assets/website/rewards/bridgeapp-bg.webp';
import pushNinjaBg from '../../../../static/assets/website/rewards/Push-Ninja-bg.webp';
import degenChessBg from '../../../../static/assets/website/rewards/Degen-Chess-bg.webp';

export type AppQuestMetadata = {
  appName: string;
  appUrl: string;
  bgImage?: string;
  titleGradient?: string;
  linkColor?: string;
};

export const APP_QUEST_METADATA: Record<string, AppQuestMetadata> = {
  pusd: {
    appName: "PUSD Stablecoin",
    appUrl: "pusd.push.org",
    bgImage: pusdBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #A056E2 89.06%);",
    linkColor: "#4D2783",
  },
  zappi: {
    appName: "Zappi.to",
    appUrl: "zappi.to",
    bgImage: zappiBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #730BE3 89.06%);",
    linkColor: "#551798",
  },
  "ramen-swap": {
    appName: "Ramen Swap",
    appUrl: "ramenfi.xyz",
    bgImage: ramenBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #ED2027 89.06%)",
    linkColor: "#DB2D33",
  },
  lastone: {
    appName: "Last One",
    appUrl: "lastone.fun",
    bgImage: lastOneBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #6B30B2 89.06%);",
    linkColor: "#653468",
  },
  moleswap: {
    appName: "MoleSwap",
    appUrl: "moleswap.com",
    bgImage: moleswapBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #5562F3 89.06%)",
    linkColor: "#184581",
  },
  "push-chain-bridge": {
    appName: "Push Chain Bridge",
    appUrl: "bridge.push.org",
    bgImage: bridgeBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #9C60E4 89.06%)",
    linkColor: "#5A1881",
  },
  "push-ninja": {
    appName: "Push Ninja",
    appUrl: "pushninja.fun",
    bgImage: pushNinjaBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #B53838 89.06%)",
    linkColor: "#771B1D",
  },
  unichess: {
    appName: "Degen Chess",
    appUrl: "degenchess.fun",
    bgImage: degenChessBg,
    titleGradient: "linear-gradient(180deg, #000 16.15%, #40278D 89.06%)",
    linkColor: "#40278D",
  },
};
