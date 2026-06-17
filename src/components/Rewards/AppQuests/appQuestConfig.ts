import pusdBg from '../../../../static/assets/website/rewards/pusd-bg.webp';
import zappiBg from '../../../../static/assets/website/rewards/zappi-bg.webp';
import ramenBg from '../../../../static/assets/website/rewards/ramen-bg.webp';
import lastOneBg from '../../../../static/assets/website/rewards/last-one-bg.webp';
import moleswapBg from '../../../../static/assets/website/rewards/moleswap-bg.webp';
import bridgeBg from '../../../../static/assets/website/rewards/bridgeapp-bg.webp';
import pushNinjaBg from '../../../../static/assets/website/rewards/Push-Ninja-bg.webp';

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
    appUrl: "",
    bgImage: ramenBg,
  },
  lastone: {
    appName: "Last One",
    appUrl: "",
    bgImage: lastOneBg,
  },
  moleswap: {
    appName: "MoleSwap",
    appUrl: "",
    bgImage: moleswapBg,
  },
  "push-chain-bridge": {
    appName: "Push Chain Bridge",
    appUrl: "",
    bgImage: bridgeBg,
  },
  "push-ninja": {
    appName: "Push Ninja",
    appUrl: "",
    bgImage: pushNinjaBg,
  },
  unichess: {
    appName: "Unichess",
    appUrl: "",
  },
  cetra: {
    appName: "Cetra",
    appUrl: "",
  },
};
