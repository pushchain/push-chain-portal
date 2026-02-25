const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BfvYm53x.js","assets/main-DKlTuIns.js","assets/main-ROtoQviO.css","assets/ccip-BgXeHNou.js","assets/features-R4UuKmd7.js","assets/basic-C7EwvSDA.js","assets/index-DRIxPGgt.js","assets/w3m-modal-CZUfWYoS.js"])))=>i.map(i=>d[i]);
var _d;
import { bk as createTransport, aQ as TransactionRejectedRpcError, b0 as UserRejectedRequestError$1, cR as WalletConnectSessionSettlementError, U as ExecutionRevertedError, cS as wait, cT as process$1, bK as formatUnits, cQ as __vitePreload, by as erc20Abi, cU as Ge, cV as Ue, h as http, cC as toHex, cW as N$1 } from "./main-DKlTuIns.js";
function fallback(transports_, config = {}) {
  const { key = "fallback", name = "Fallback", rank = false, shouldThrow: shouldThrow_ = shouldThrow, retryCount, retryDelay } = config;
  return (({ chain, pollingInterval = 4e3, timeout, ...rest }) => {
    let transports = transports_;
    let onResponse = () => {
    };
    const transport = createTransport({
      key,
      name,
      async request({ method, params }) {
        let includes;
        const fetch2 = async (i2 = 0) => {
          const transport2 = transports[i2]({
            ...rest,
            chain,
            retryCount: 0,
            timeout
          });
          try {
            const response = await transport2.request({
              method,
              params
            });
            onResponse({
              method,
              params,
              response,
              transport: transport2,
              status: "success"
            });
            return response;
          } catch (err) {
            onResponse({
              error: err,
              method,
              params,
              transport: transport2,
              status: "error"
            });
            if (shouldThrow_(err))
              throw err;
            if (i2 === transports.length - 1)
              throw err;
            includes ?? (includes = transports.slice(i2 + 1).some((transport3) => {
              const { include, exclude } = transport3({ chain }).config.methods || {};
              if (include)
                return include.includes(method);
              if (exclude)
                return !exclude.includes(method);
              return true;
            }));
            if (!includes)
              throw err;
            return fetch2(i2 + 1);
          }
        };
        return fetch2();
      },
      retryCount,
      retryDelay,
      type: "fallback"
    }, {
      onResponse: (fn) => onResponse = fn,
      transports: transports.map((fn) => fn({ chain, retryCount: 0 }))
    });
    if (rank) {
      const rankOptions = typeof rank === "object" ? rank : {};
      rankTransports({
        chain,
        interval: rankOptions.interval ?? pollingInterval,
        onTransports: (transports_2) => transports = transports_2,
        ping: rankOptions.ping,
        sampleCount: rankOptions.sampleCount,
        timeout: rankOptions.timeout,
        transports,
        weights: rankOptions.weights
      });
    }
    return transport;
  });
}
function shouldThrow(error) {
  if ("code" in error && typeof error.code === "number") {
    if (error.code === TransactionRejectedRpcError.code || error.code === UserRejectedRequestError$1.code || error.code === WalletConnectSessionSettlementError.code || ExecutionRevertedError.nodeMessage.test(error.message) || error.code === 5e3)
      return true;
  }
  return false;
}
function rankTransports({ chain, interval = 4e3, onTransports, ping, sampleCount = 10, timeout = 1e3, transports, weights = {} }) {
  const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
  const samples = [];
  const rankTransports_ = async () => {
    const sample = await Promise.all(transports.map(async (transport) => {
      const transport_ = transport({ chain, retryCount: 0, timeout });
      const start = Date.now();
      let end;
      let success;
      try {
        await (ping ? ping({ transport: transport_ }) : transport_.request({ method: "net_listening" }));
        success = 1;
      } catch {
        success = 0;
      } finally {
        end = Date.now();
      }
      const latency = end - start;
      return { latency, success };
    }));
    samples.push(sample);
    if (samples.length > sampleCount)
      samples.shift();
    const maxLatency = Math.max(...samples.map((sample2) => Math.max(...sample2.map(({ latency }) => latency))));
    const scores = transports.map((_2, i2) => {
      const latencies = samples.map((sample2) => sample2[i2].latency);
      const meanLatency = latencies.reduce((acc, latency) => acc + latency, 0) / latencies.length;
      const latencyScore = 1 - meanLatency / maxLatency;
      const successes = samples.map((sample2) => sample2[i2].success);
      const stabilityScore = successes.reduce((acc, success) => acc + success, 0) / successes.length;
      if (stabilityScore === 0)
        return [0, i2];
      return [
        latencyWeight * latencyScore + stabilityWeight * stabilityScore,
        i2
      ];
    }).sort((a2, b2) => b2[0] - a2[0]);
    onTransports(scores.map(([, i2]) => transports[i2]));
    await wait(interval);
    rankTransports_();
  };
  rankTransports_();
}
const HelpersUtil$1 = {
  isLowerCaseMatch(str1, str2) {
    return (str1 == null ? void 0 : str1.toLowerCase()) === (str2 == null ? void 0 : str2.toLowerCase());
  }
};
var define_process_env_default$1 = {};
const ConstantsUtil$2 = {
  WC_NAME_SUFFIX: ".reown.id",
  WC_NAME_SUFFIX_LEGACY: ".wcn.id",
  BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
  PULSE_API_URL: "https://pulse.walletconnect.org",
  W3M_API_URL: "https://api.web3modal.org",
  CONNECTOR_ID: {
    WALLET_CONNECT: "walletConnect",
    INJECTED: "injected",
    WALLET_STANDARD: "announced",
    COINBASE: "coinbaseWallet",
    COINBASE_SDK: "coinbaseWalletSDK",
    BASE_ACCOUNT: "baseAccount",
    SAFE: "safe",
    LEDGER: "ledger",
    OKX: "okx",
    EIP6963: "eip6963",
    AUTH: "AUTH"
  },
  CONNECTOR_NAMES: {
    AUTH: "Auth"
  },
  AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
  LIMITS: {
    PENDING_TRANSACTIONS: 99
  },
  CHAIN: {
    EVM: "eip155",
    SOLANA: "solana",
    POLKADOT: "polkadot",
    BITCOIN: "bip122",
    TON: "ton"
  },
  CHAIN_NAME_MAP: {
    eip155: "EVM Networks",
    solana: "Solana",
    polkadot: "Polkadot",
    bip122: "Bitcoin",
    cosmos: "Cosmos",
    sui: "Sui",
    stacks: "Stacks",
    ton: "TON"
  },
  ADAPTER_TYPES: {
    BITCOIN: "bitcoin",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5",
    TON: "ton"
  },
  USDT_CONTRACT_ADDRESSES: [
    "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    "0x919C1c267BC06a7039e03fcc2eF738525769109c",
    "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
    "0x55d398326f99059fF775485246999027B3197955",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
  ],
  SOLANA_SPL_TOKEN_ADDRESSES: {
    SOL: "So11111111111111111111111111111111111111112"
  },
  NATIVE_IMAGE_IDS_BY_NAMESPACE: {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "3e8119e5-2a6f-4818-c50c-1937011d5900",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00"
  },
  TOKEN_SYMBOLS_BY_ADDRESS: {
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "USDC",
    "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": "USDC",
    "0x0b2c639c533813f4aa9d7837caf62653d097ff85": "USDC",
    "0xaf88d065e77c8cc2239327c5edb3a432268e5831": "USDC",
    "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": "USDC",
    "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "USDC",
    EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: "USDC",
    "0xdac17f958d2ee523a2206206994597c13d831ec7": "USDT",
    "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": "USDT",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "USDT",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "USDT",
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: "USDT"
  },
  HTTP_STATUS_CODES: {
    SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
    SERVICE_UNAVAILABLE: 503,
    FORBIDDEN: 403
  },
  UNSUPPORTED_NETWORK_NAME: "Unknown Network",
  SECURE_SITE_SDK_ORIGIN: (typeof process$1 !== "undefined" && typeof define_process_env_default$1 !== "undefined" ? define_process_env_default$1["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org",
  REMOTE_FEATURES_ALERTS: {
    MULTI_WALLET_NOT_ENABLED: {
      DEFAULT: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."
      },
      CONNECTIONS_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."
      },
      CONNECTION_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."
      }
    },
    HEADLESS_NOT_ENABLED: {
      DEFAULT: {
        displayMessage: "",
        debugMessage: "Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."
      }
    }
  },
  IS_DEVELOPMENT: typeof process$1 !== "undefined" && false,
  DEFAULT_ALLOWED_ANCESTORS: [
    "http://localhost:*",
    "https://localhost:*",
    "http://127.0.0.1:*",
    "https://127.0.0.1:*",
    "https://*.pages.dev",
    "https://*.vercel.app",
    "https://*.ngrok-free.app",
    "https://secure-mobile.walletconnect.com",
    "https://secure-mobile.walletconnect.org"
  ],
  METMASK_CONNECTOR_NAME: "MetaMask",
  TRUST_CONNECTOR_NAME: "Trust Wallet",
  SOLFLARE_CONNECTOR_NAME: "Solflare",
  PHANTOM_CONNECTOR_NAME: "Phantom",
  COIN98_CONNECTOR_NAME: "Coin98",
  MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
  BACKPACK_CONNECTOR_NAME: "Backpack",
  BITGET_CONNECTOR_NAME: "Bitget Wallet",
  FRONTIER_CONNECTOR_NAME: "Frontier",
  XVERSE_CONNECTOR_NAME: "Xverse Wallet",
  LEATHER_CONNECTOR_NAME: "Leather",
  OKX_CONNECTOR_NAME: "OKX Wallet",
  BINANCE_CONNECTOR_NAME: "Binance Wallet",
  EIP155: "eip155",
  ADD_CHAIN_METHOD: "wallet_addEthereumChain",
  EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
  EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
  CONNECTOR_RDNS_MAP: {
    coinbaseWallet: "com.coinbase.wallet",
    coinbaseWalletSDK: "com.coinbase.wallet"
  },
  CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
  CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
  CONNECTOR_TYPE_INJECTED: "INJECTED",
  CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
  CONNECTOR_TYPE_AUTH: "AUTH",
  CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
  CONNECTOR_TYPE_W3M_AUTH: "AUTH"
};
const NetworkUtil$1 = {
  caipNetworkIdToNumber(caipnetworkId) {
    return caipnetworkId ? Number(caipnetworkId.split(":")[1]) : void 0;
  },
  parseEvmChainId(chainId) {
    return typeof chainId === "string" ? this.caipNetworkIdToNumber(chainId) : chainId;
  },
  getNetworksByNamespace(networks, namespace) {
    return (networks == null ? void 0 : networks.filter((network) => network.chainNamespace === namespace)) || [];
  },
  getFirstNetworkByNamespace(networks, namespace) {
    return this.getNetworksByNamespace(networks, namespace)[0];
  },
  getNetworkNameByCaipNetworkId(caipNetworks, caipNetworkId) {
    var _a;
    if (!caipNetworkId) {
      return void 0;
    }
    const caipNetwork = caipNetworks.find((network) => network.caipNetworkId === caipNetworkId);
    if (caipNetwork) {
      return caipNetwork.name;
    }
    const [namespace] = caipNetworkId.split(":");
    return ((_a = ConstantsUtil$2.CHAIN_NAME_MAP) == null ? void 0 : _a[namespace]) || void 0;
  }
};
const AVAILABLE_NAMESPACES = [
  "eip155",
  "solana",
  "polkadot",
  "bip122",
  "cosmos",
  "sui",
  "stacks"
];
var DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -7, PE = 21, STRICT = false, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", P$1 = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function _Big_() {
  function Big2(n3) {
    var x2 = this;
    if (!(x2 instanceof Big2)) return n3 === UNDEFINED ? _Big_() : new Big2(n3);
    if (n3 instanceof Big2) {
      x2.s = n3.s;
      x2.e = n3.e;
      x2.c = n3.c.slice();
    } else {
      if (typeof n3 !== "string") {
        if (Big2.strict === true && typeof n3 !== "bigint") {
          throw TypeError(INVALID + "value");
        }
        n3 = n3 === 0 && 1 / n3 < 0 ? "-0" : String(n3);
      }
      parse(x2, n3);
    }
    x2.constructor = Big2;
  }
  Big2.prototype = P$1;
  Big2.DP = DP;
  Big2.RM = RM;
  Big2.NE = NE;
  Big2.PE = PE;
  Big2.strict = STRICT;
  Big2.roundDown = 0;
  Big2.roundHalfUp = 1;
  Big2.roundHalfEven = 2;
  Big2.roundUp = 3;
  return Big2;
}
function parse(x2, n3) {
  var e2, i2, nl;
  if (!NUMERIC.test(n3)) {
    throw Error(INVALID + "number");
  }
  x2.s = n3.charAt(0) == "-" ? (n3 = n3.slice(1), -1) : 1;
  if ((e2 = n3.indexOf(".")) > -1) n3 = n3.replace(".", "");
  if ((i2 = n3.search(/e/i)) > 0) {
    if (e2 < 0) e2 = i2;
    e2 += +n3.slice(i2 + 1);
    n3 = n3.substring(0, i2);
  } else if (e2 < 0) {
    e2 = n3.length;
  }
  nl = n3.length;
  for (i2 = 0; i2 < nl && n3.charAt(i2) == "0"; ) ++i2;
  if (i2 == nl) {
    x2.c = [x2.e = 0];
  } else {
    for (; nl > 0 && n3.charAt(--nl) == "0"; ) ;
    x2.e = e2 - i2 - 1;
    x2.c = [];
    for (e2 = 0; i2 <= nl; ) x2.c[e2++] = +n3.charAt(i2++);
  }
  return x2;
}
function round(x2, sd, rm, more) {
  var xc = x2.c;
  if (rm === UNDEFINED) rm = x2.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
    xc.length = 1;
    if (more) {
      x2.e = x2.e - sd + 1;
      xc[0] = 1;
    } else {
      xc[0] = x2.e = 0;
    }
  } else if (sd < xc.length) {
    more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
    xc.length = sd;
    if (more) {
      for (; ++xc[--sd] > 9; ) {
        xc[sd] = 0;
        if (sd === 0) {
          ++x2.e;
          xc.unshift(1);
          break;
        }
      }
    }
    for (sd = xc.length; !xc[--sd]; ) xc.pop();
  }
  return x2;
}
function stringify(x2, doExponential, isNonzero) {
  var e2 = x2.e, s2 = x2.c.join(""), n3 = s2.length;
  if (doExponential) {
    s2 = s2.charAt(0) + (n3 > 1 ? "." + s2.slice(1) : "") + (e2 < 0 ? "e" : "e+") + e2;
  } else if (e2 < 0) {
    for (; ++e2; ) s2 = "0" + s2;
    s2 = "0." + s2;
  } else if (e2 > 0) {
    if (++e2 > n3) {
      for (e2 -= n3; e2--; ) s2 += "0";
    } else if (e2 < n3) {
      s2 = s2.slice(0, e2) + "." + s2.slice(e2);
    }
  } else if (n3 > 1) {
    s2 = s2.charAt(0) + "." + s2.slice(1);
  }
  return x2.s < 0 && isNonzero ? "-" + s2 : s2;
}
P$1.abs = function() {
  var x2 = new this.constructor(this);
  x2.s = 1;
  return x2;
};
P$1.cmp = function(y3) {
  var isneg, x2 = this, xc = x2.c, yc = (y3 = new x2.constructor(y3)).c, i2 = x2.s, j = y3.s, k2 = x2.e, l2 = y3.e;
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i2;
  if (i2 != j) return i2;
  isneg = i2 < 0;
  if (k2 != l2) return k2 > l2 ^ isneg ? 1 : -1;
  j = (k2 = xc.length) < (l2 = yc.length) ? k2 : l2;
  for (i2 = -1; ++i2 < j; ) {
    if (xc[i2] != yc[i2]) return xc[i2] > yc[i2] ^ isneg ? 1 : -1;
  }
  return k2 == l2 ? 0 : k2 > l2 ^ isneg ? 1 : -1;
};
P$1.div = function(y3) {
  var x2 = this, Big2 = x2.constructor, a2 = x2.c, b2 = (y3 = new Big2(y3)).c, k2 = x2.s == y3.s ? 1 : -1, dp = Big2.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  if (!b2[0]) {
    throw Error(DIV_BY_ZERO);
  }
  if (!a2[0]) {
    y3.s = k2;
    y3.c = [y3.e = 0];
    return y3;
  }
  var bl, bt, n3, cmp, ri, bz = b2.slice(), ai = bl = b2.length, al = a2.length, r2 = a2.slice(0, bl), rl = r2.length, q = y3, qc = q.c = [], qi = 0, p2 = dp + (q.e = x2.e - y3.e) + 1;
  q.s = k2;
  k2 = p2 < 0 ? 0 : p2;
  bz.unshift(0);
  for (; rl++ < bl; ) r2.push(0);
  do {
    for (n3 = 0; n3 < 10; n3++) {
      if (bl != (rl = r2.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl; ) {
          if (b2[ri] != r2[ri]) {
            cmp = b2[ri] > r2[ri] ? 1 : -1;
            break;
          }
        }
      }
      if (cmp < 0) {
        for (bt = rl == bl ? b2 : bz; rl; ) {
          if (r2[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r2[--ri]; ) r2[ri] = 9;
            --r2[ri];
            r2[rl] += 10;
          }
          r2[rl] -= bt[rl];
        }
        for (; !r2[0]; ) r2.shift();
      } else {
        break;
      }
    }
    qc[qi++] = cmp ? n3 : ++n3;
    if (r2[0] && cmp) r2[rl] = a2[ai] || 0;
    else r2 = [a2[ai]];
  } while ((ai++ < al || r2[0] !== UNDEFINED) && k2--);
  if (!qc[0] && qi != 1) {
    qc.shift();
    q.e--;
    p2--;
  }
  if (qi > p2) round(q, p2, Big2.RM, r2[0] !== UNDEFINED);
  return q;
};
P$1.eq = function(y3) {
  return this.cmp(y3) === 0;
};
P$1.gt = function(y3) {
  return this.cmp(y3) > 0;
};
P$1.gte = function(y3) {
  return this.cmp(y3) > -1;
};
P$1.lt = function(y3) {
  return this.cmp(y3) < 0;
};
P$1.lte = function(y3) {
  return this.cmp(y3) < 1;
};
P$1.minus = P$1.sub = function(y3) {
  var i2, j, t2, xlty, x2 = this, Big2 = x2.constructor, a2 = x2.s, b2 = (y3 = new Big2(y3)).s;
  if (a2 != b2) {
    y3.s = -b2;
    return x2.plus(y3);
  }
  var xc = x2.c.slice(), xe = x2.e, yc = y3.c, ye = y3.e;
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y3.s = -b2;
    } else if (xc[0]) {
      y3 = new Big2(x2);
    } else {
      y3.s = 1;
    }
    return y3;
  }
  if (a2 = xe - ye) {
    if (xlty = a2 < 0) {
      a2 = -a2;
      t2 = xc;
    } else {
      ye = xe;
      t2 = yc;
    }
    t2.reverse();
    for (b2 = a2; b2--; ) t2.push(0);
    t2.reverse();
  } else {
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;
    for (a2 = b2 = 0; b2 < j; b2++) {
      if (xc[b2] != yc[b2]) {
        xlty = xc[b2] < yc[b2];
        break;
      }
    }
  }
  if (xlty) {
    t2 = xc;
    xc = yc;
    yc = t2;
    y3.s = -y3.s;
  }
  if ((b2 = (j = yc.length) - (i2 = xc.length)) > 0) for (; b2--; ) xc[i2++] = 0;
  for (b2 = i2; j > a2; ) {
    if (xc[--j] < yc[j]) {
      for (i2 = j; i2 && !xc[--i2]; ) xc[i2] = 9;
      --xc[i2];
      xc[j] += 10;
    }
    xc[j] -= yc[j];
  }
  for (; xc[--b2] === 0; ) xc.pop();
  for (; xc[0] === 0; ) {
    xc.shift();
    --ye;
  }
  if (!xc[0]) {
    y3.s = 1;
    xc = [ye = 0];
  }
  y3.c = xc;
  y3.e = ye;
  return y3;
};
P$1.mod = function(y3) {
  var ygtx, x2 = this, Big2 = x2.constructor, a2 = x2.s, b2 = (y3 = new Big2(y3)).s;
  if (!y3.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x2.s = y3.s = 1;
  ygtx = y3.cmp(x2) == 1;
  x2.s = a2;
  y3.s = b2;
  if (ygtx) return new Big2(x2);
  a2 = Big2.DP;
  b2 = Big2.RM;
  Big2.DP = Big2.RM = 0;
  x2 = x2.div(y3);
  Big2.DP = a2;
  Big2.RM = b2;
  return this.minus(x2.times(y3));
};
P$1.neg = function() {
  var x2 = new this.constructor(this);
  x2.s = -x2.s;
  return x2;
};
P$1.plus = P$1.add = function(y3) {
  var e2, k2, t2, x2 = this, Big2 = x2.constructor;
  y3 = new Big2(y3);
  if (x2.s != y3.s) {
    y3.s = -y3.s;
    return x2.minus(y3);
  }
  var xe = x2.e, xc = x2.c, ye = y3.e, yc = y3.c;
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y3 = new Big2(x2);
      } else {
        y3.s = x2.s;
      }
    }
    return y3;
  }
  xc = xc.slice();
  if (e2 = xe - ye) {
    if (e2 > 0) {
      ye = xe;
      t2 = yc;
    } else {
      e2 = -e2;
      t2 = xc;
    }
    t2.reverse();
    for (; e2--; ) t2.push(0);
    t2.reverse();
  }
  if (xc.length - yc.length < 0) {
    t2 = yc;
    yc = xc;
    xc = t2;
  }
  e2 = yc.length;
  for (k2 = 0; e2; xc[e2] %= 10) k2 = (xc[--e2] = xc[e2] + yc[e2] + k2) / 10 | 0;
  if (k2) {
    xc.unshift(k2);
    ++ye;
  }
  for (e2 = xc.length; xc[--e2] === 0; ) xc.pop();
  y3.c = xc;
  y3.e = ye;
  return y3;
};
P$1.pow = function(n3) {
  var x2 = this, one = new x2.constructor("1"), y3 = one, isneg = n3 < 0;
  if (n3 !== ~~n3 || n3 < -MAX_POWER || n3 > MAX_POWER) {
    throw Error(INVALID + "exponent");
  }
  if (isneg) n3 = -n3;
  for (; ; ) {
    if (n3 & 1) y3 = y3.times(x2);
    n3 >>= 1;
    if (!n3) break;
    x2 = x2.times(x2);
  }
  return isneg ? one.div(y3) : y3;
};
P$1.prec = function(sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + "precision");
  }
  return round(new this.constructor(this), sd, rm);
};
P$1.round = function(dp, rm) {
  if (dp === UNDEFINED) dp = 0;
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};
P$1.sqrt = function() {
  var r2, c2, t2, x2 = this, Big2 = x2.constructor, s2 = x2.s, e2 = x2.e, half = new Big2("0.5");
  if (!x2.c[0]) return new Big2(x2);
  if (s2 < 0) {
    throw Error(NAME + "No square root");
  }
  s2 = Math.sqrt(+stringify(x2, true, true));
  if (s2 === 0 || s2 === 1 / 0) {
    c2 = x2.c.join("");
    if (!(c2.length + e2 & 1)) c2 += "0";
    s2 = Math.sqrt(c2);
    e2 = ((e2 + 1) / 2 | 0) - (e2 < 0 || e2 & 1);
    r2 = new Big2((s2 == 1 / 0 ? "5e" : (s2 = s2.toExponential()).slice(0, s2.indexOf("e") + 1)) + e2);
  } else {
    r2 = new Big2(s2 + "");
  }
  e2 = r2.e + (Big2.DP += 4);
  do {
    t2 = r2;
    r2 = half.times(t2.plus(x2.div(t2)));
  } while (t2.c.slice(0, e2).join("") !== r2.c.slice(0, e2).join(""));
  return round(r2, (Big2.DP -= 4) + r2.e + 1, Big2.RM);
};
P$1.times = P$1.mul = function(y3) {
  var c2, x2 = this, Big2 = x2.constructor, xc = x2.c, yc = (y3 = new Big2(y3)).c, a2 = xc.length, b2 = yc.length, i2 = x2.e, j = y3.e;
  y3.s = x2.s == y3.s ? 1 : -1;
  if (!xc[0] || !yc[0]) {
    y3.c = [y3.e = 0];
    return y3;
  }
  y3.e = i2 + j;
  if (a2 < b2) {
    c2 = xc;
    xc = yc;
    yc = c2;
    j = a2;
    a2 = b2;
    b2 = j;
  }
  for (c2 = new Array(j = a2 + b2); j--; ) c2[j] = 0;
  for (i2 = b2; i2--; ) {
    b2 = 0;
    for (j = a2 + i2; j > i2; ) {
      b2 = c2[j] + yc[i2] * xc[j - i2 - 1] + b2;
      c2[j--] = b2 % 10;
      b2 = b2 / 10 | 0;
    }
    c2[j] = b2;
  }
  if (b2) ++y3.e;
  else c2.shift();
  for (i2 = c2.length; !c2[--i2]; ) c2.pop();
  y3.c = c2;
  return y3;
};
P$1.toExponential = function(dp, rm) {
  var x2 = this, n3 = x2.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x2 = round(new x2.constructor(x2), ++dp, rm);
    for (; x2.c.length < dp; ) x2.c.push(0);
  }
  return stringify(x2, true, !!n3);
};
P$1.toFixed = function(dp, rm) {
  var x2 = this, n3 = x2.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x2 = round(new x2.constructor(x2), dp + x2.e + 1, rm);
    for (dp = dp + x2.e + 1; x2.c.length < dp; ) x2.c.push(0);
  }
  return stringify(x2, false, !!n3);
};
P$1[Symbol.for("nodejs.util.inspect.custom")] = P$1.toJSON = P$1.toString = function() {
  var x2 = this, Big2 = x2.constructor;
  return stringify(x2, x2.e <= Big2.NE || x2.e >= Big2.PE, !!x2.c[0]);
};
P$1.toNumber = function() {
  var n3 = +stringify(this, true, true);
  if (this.constructor.strict === true && !this.eq(n3.toString())) {
    throw Error(NAME + "Imprecise conversion");
  }
  return n3;
};
P$1.toPrecision = function(sd, rm) {
  var x2 = this, Big2 = x2.constructor, n3 = x2.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + "precision");
    }
    x2 = round(new Big2(x2), sd, rm);
    for (; x2.c.length < sd; ) x2.c.push(0);
  }
  return stringify(x2, sd <= x2.e || x2.e <= Big2.NE || x2.e >= Big2.PE, !!n3);
};
P$1.valueOf = function() {
  var x2 = this, Big2 = x2.constructor;
  if (Big2.strict === true) {
    throw Error(NAME + "valueOf disallowed");
  }
  return stringify(x2, x2.e <= Big2.NE || x2.e >= Big2.PE, true);
};
var Big = _Big_();
const NumberUtil = {
  bigNumber(value, params = {
    safe: false
  }) {
    try {
      if (!value) {
        return new Big(0);
      }
      return new Big(value);
    } catch (err) {
      if (params.safe) {
        return new Big(0);
      }
      throw err;
    }
  },
  formatNumber(value, params) {
    const { decimals, round: round2 = 8, safe = true } = params;
    const bigNumber = NumberUtil.bigNumber(value, { safe });
    return bigNumber.div(new Big(10).pow(decimals)).round(round2);
  },
  multiply(a2, b2) {
    if (a2 === void 0 || b2 === void 0) {
      return new Big(0);
    }
    const aBigNumber = new Big(a2);
    const bBigNumber = new Big(b2);
    return aBigNumber.times(bBigNumber);
  },
  toFixed(value, decimals = 2) {
    if (value === void 0 || value === "") {
      return new Big(0).toFixed(decimals);
    }
    return new Big(value).toFixed(decimals);
  },
  formatNumberToLocalString(value, decimals = 2) {
    if (value === void 0 || value === "") {
      return "0.00";
    }
    if (typeof value === "number") {
      return value.toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
        roundingMode: "floor"
      });
    }
    return parseFloat(value).toLocaleString("en-US", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
      roundingMode: "floor"
    });
  },
  parseLocalStringToNumber(value) {
    if (value === void 0 || value === "") {
      return 0;
    }
    const sanitizedValue = value.replace(/,/gu, "");
    return new Big(sanitizedValue).toNumber();
  }
};
const erc20ABI = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];
const swapABI = [
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: [{ type: "bool" }]
  }
];
const usdtABI = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];
const ContractUtil = {
  getERC20Abi: (tokenAddress) => {
    if (ConstantsUtil$2.USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
      return usdtABI;
    }
    return erc20ABI;
  },
  getSwapAbi: () => swapABI
};
const PresetsUtil$1 = {
  ConnectorExplorerIds: {
    [ConstantsUtil$2.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [ConstantsUtil$2.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [ConstantsUtil$2.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [ConstantsUtil$2.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    [ConstantsUtil$2.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
    [ConstantsUtil$2.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
    [ConstantsUtil$2.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    [ConstantsUtil$2.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    [ConstantsUtil$2.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    [ConstantsUtil$2.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    [ConstantsUtil$2.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
    [ConstantsUtil$2.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
    [ConstantsUtil$2.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
    [ConstantsUtil$2.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
    [ConstantsUtil$2.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
    [ConstantsUtil$2.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
    [ConstantsUtil$2.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
    [ConstantsUtil$2.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
    [ConstantsUtil$2.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
  }
};
const ParseUtil = {
  validateCaipAddress(address) {
    var _a;
    if (((_a = address.split(":")) == null ? void 0 : _a.length) !== 3) {
      throw new Error("Invalid CAIP Address");
    }
    return address;
  },
  parseCaipAddress(caipAddress) {
    const parts = caipAddress.split(":");
    if (parts.length !== 3) {
      throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
    }
    const [chainNamespace, chainId, address] = parts;
    if (!chainNamespace || !chainId || !address) {
      throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
    }
    return {
      chainNamespace,
      chainId,
      address
    };
  },
  parseCaipNetworkId(caipNetworkId) {
    const parts = caipNetworkId.split(":");
    if (parts.length !== 2) {
      throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
    }
    const [chainNamespace, chainId] = parts;
    if (!chainNamespace || !chainId) {
      throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
    }
    return {
      chainNamespace,
      chainId
    };
  }
};
const ErrorUtil$1 = {
  RPC_ERROR_CODE: {
    USER_REJECTED_REQUEST: 4001,
    USER_REJECTED_METHODS: 5002,
    USER_REJECTED: 5e3,
    SEND_TRANSACTION_ERROR: 5001
  },
  PROVIDER_RPC_ERROR_NAME: {
    PROVIDER_RPC: "ProviderRpcError",
    USER_REJECTED_REQUEST: "UserRejectedRequestError",
    SEND_TRANSACTION_ERROR: "SendTransactionError"
  },
  isRpcProviderError(error) {
    try {
      if (typeof error === "object" && error !== null) {
        const objErr = error;
        const hasMessage = typeof objErr["message"] === "string";
        const hasCode = typeof objErr["code"] === "number";
        return hasMessage && hasCode;
      }
      return false;
    } catch {
      return false;
    }
  },
  isUserRejectedMessage(message) {
    return message.toLowerCase().includes("user rejected") || message.toLowerCase().includes("user cancelled") || message.toLowerCase().includes("user canceled");
  },
  isUserRejectedRequestError(error) {
    if (ErrorUtil$1.isRpcProviderError(error)) {
      const isUserRejectedCode = error.code === ErrorUtil$1.RPC_ERROR_CODE.USER_REJECTED_REQUEST;
      const isUserRejectedMethodsCode = error.code === ErrorUtil$1.RPC_ERROR_CODE.USER_REJECTED_METHODS;
      return isUserRejectedCode || isUserRejectedMethodsCode || ErrorUtil$1.isUserRejectedMessage(error.message);
    }
    if (error instanceof Error) {
      return ErrorUtil$1.isUserRejectedMessage(error.message);
    }
    return false;
  }
};
class ProviderRpcError extends Error {
  constructor(cause, options) {
    super(options.message, { cause });
    this.name = ErrorUtil$1.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC;
    this.code = options.code;
  }
}
class UserRejectedRequestError extends ProviderRpcError {
  constructor(cause) {
    super(cause, {
      code: ErrorUtil$1.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
      message: "User rejected the request"
    });
    this.name = ErrorUtil$1.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
  }
}
const SafeLocalStorageKeys = {
  WALLET_ID: "@appkit/wallet_id",
  WALLET_NAME: "@appkit/wallet_name",
  SOLANA_WALLET: "@appkit/solana_wallet",
  SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
  ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
  CONNECTED_SOCIAL: "@appkit/connected_social",
  CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
  RECENT_WALLETS: "@appkit/recent_wallets",
  RECENT_WALLET: "@appkit/recent_wallet",
  DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  ACTIVE_NAMESPACE: "@appkit/active_namespace",
  CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
  CONNECTION_STATUS: "@appkit/connection_status",
  SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
  SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
  TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
  NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
  PORTFOLIO_CACHE: "@appkit/portfolio_cache",
  ENS_CACHE: "@appkit/ens_cache",
  IDENTITY_CACHE: "@appkit/identity_cache",
  PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
  CONNECTIONS: "@appkit/connections",
  DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
  HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
  TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
  RECENT_EMAILS: "@appkit/recent_emails",
  LATEST_APPKIT_VERSION: "@appkit/latest_version",
  TON_WALLETS_CACHE: "@appkit/ton_wallets_cache"
};
function getSafeConnectorIdKey(namespace) {
  if (!namespace) {
    throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  }
  return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage = {
  setItem(key, value) {
    if (isSafe() && value !== void 0) {
      localStorage.setItem(key, value);
    }
  },
  getItem(key) {
    if (isSafe()) {
      return localStorage.getItem(key) || void 0;
    }
    return void 0;
  },
  removeItem(key) {
    if (isSafe()) {
      localStorage.removeItem(key);
    }
  },
  clear() {
    if (isSafe()) {
      localStorage.clear();
    }
  }
};
function isSafe() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}
function getW3mThemeVariables(themeVariables, themeType) {
  const accent = (themeVariables == null ? void 0 : themeVariables["--apkt-accent"]) ?? (themeVariables == null ? void 0 : themeVariables["--w3m-accent"]);
  if (themeType === "light") {
    return {
      "--w3m-accent": accent || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    };
  }
  return {
    "--w3m-accent": accent || "hsla(230, 100%, 67%, 1)",
    "--w3m-background": "#202020"
  };
}
const GET_ORIGINAL_SYMBOL = Symbol();
const getProto = Object.getPrototypeOf;
const objectsToTrack = /* @__PURE__ */ new WeakMap();
const isObjectToTrack = (obj) => obj && (objectsToTrack.has(obj) ? objectsToTrack.get(obj) : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
const getUntracked = (obj) => {
  if (isObjectToTrack(obj)) {
    return obj[GET_ORIGINAL_SYMBOL] || null;
  }
  return null;
};
const markToTrack = (obj, mark = true) => {
  objectsToTrack.set(obj, mark);
};
const __vite_import_meta_env__ = {};
const isObject = (x2) => typeof x2 === "object" && x2 !== null;
const canProxyDefault = (x2) => isObject(x2) && !refSet.has(x2) && (Array.isArray(x2) || !(Symbol.iterator in x2)) && !(x2 instanceof WeakMap) && !(x2 instanceof WeakSet) && !(x2 instanceof Error) && !(x2 instanceof Number) && !(x2 instanceof Date) && !(x2 instanceof String) && !(x2 instanceof RegExp) && !(x2 instanceof ArrayBuffer) && !(x2 instanceof Promise);
const createSnapshotDefault = (target, version) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  markToTrack(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const { enumerable } = Reflect.getOwnPropertyDescriptor(
      target,
      key
    );
    const desc = {
      value,
      enumerable,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      markToTrack(value, false);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshotDefault(target2, ensureVersion());
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
};
const createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
  deleteProperty(target, prop) {
    const prevValue = Reflect.get(target, prop);
    removePropListener(prop);
    const deleted = Reflect.deleteProperty(target, prop);
    if (deleted) {
      notifyUpdate(["delete", [prop], prevValue]);
    }
    return deleted;
  },
  set(target, prop, value, receiver) {
    const hasPrevValue = !isInitializing() && Reflect.has(target, prop);
    const prevValue = Reflect.get(target, prop, receiver);
    if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
      return true;
    }
    removePropListener(prop);
    if (isObject(value)) {
      value = getUntracked(value) || value;
    }
    const nextValue = !proxyStateMap.has(value) && canProxy(value) ? proxy(value) : value;
    addPropListener(prop, nextValue);
    Reflect.set(target, prop, nextValue, receiver);
    notifyUpdate(["set", [prop], value, prevValue]);
    return true;
  }
});
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const snapCache = /* @__PURE__ */ new WeakMap();
const versionHolder = [1];
const proxyCache = /* @__PURE__ */ new WeakMap();
let objectIs = Object.is;
let newProxy = (target, handler) => new Proxy(target, handler);
let canProxy = canProxyDefault;
let createSnapshot = createSnapshotDefault;
let createHandler = createHandlerDefault;
function proxy(baseObject = {}) {
  if (!isObject(baseObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(baseObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      checkVersion = version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = version;
  const ensureVersion = (nextCheckVersion = versionHolder[0]) => {
    if (checkVersion !== nextCheckVersion) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propValue) => {
    const propProxyState = !refSet.has(propValue) && proxyStateMap.get(propValue);
    if (propProxyState) {
      if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  let initializing = true;
  const handler = createHandler(
    () => initializing,
    addPropListener,
    removePropListener,
    notifyUpdate
  );
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(baseObject, proxyObject);
  const proxyState = [baseObject, ensureVersion, addListener];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(baseObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      baseObject,
      key
    );
    if ("value" in desc && desc.writable) {
      proxyObject[key] = baseObject[key];
    }
  });
  initializing = false;
  return proxyObject;
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[2];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion] = proxyState;
  return createSnapshot(target, ensureVersion());
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
function unstable_getInternalStates() {
  return {
    proxyStateMap,
    refSet,
    snapCache,
    versionHolder,
    proxyCache
  };
}
function subscribeKey(proxyObject, key, callback, notifyInSync) {
  let prevValue = proxyObject[key];
  return subscribe(
    proxyObject,
    () => {
      const nextValue = proxyObject[key];
      if (!Object.is(prevValue, nextValue)) {
        callback(prevValue = nextValue);
      }
    }
  );
}
const { proxyStateMap: proxyStateMap$1, snapCache: snapCache$1 } = unstable_getInternalStates();
const isProxy$1 = (x2) => proxyStateMap$1.has(x2);
function proxyMap(entries2) {
  const initialData = [];
  let initialIndex = 0;
  const indexMap = /* @__PURE__ */ new Map();
  const snapMapCache = /* @__PURE__ */ new WeakMap();
  const registerSnapMap = () => {
    const cache = snapCache$1.get(vObject);
    const latestSnap = cache == null ? void 0 : cache[1];
    if (latestSnap && !snapMapCache.has(latestSnap)) {
      const clonedMap = new Map(indexMap);
      snapMapCache.set(latestSnap, clonedMap);
    }
  };
  const getMapForThis = (x2) => snapMapCache.get(x2) || indexMap;
  const vObject = {
    data: initialData,
    index: initialIndex,
    epoch: 0,
    get size() {
      if (!isProxy$1(this)) {
        registerSnapMap();
      }
      const map = getMapForThis(this);
      return map.size;
    },
    get(key) {
      const map = getMapForThis(this);
      const index = map.get(key);
      if (index === void 0) {
        this.epoch;
        return void 0;
      }
      return this.data[index];
    },
    has(key) {
      const map = getMapForThis(this);
      this.epoch;
      return map.has(key);
    },
    set(key, value) {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const index = indexMap.get(key);
      if (index === void 0) {
        indexMap.set(key, this.index);
        this.data[this.index++] = value;
      } else {
        this.data[index] = value;
      }
      this.epoch++;
      return this;
    },
    delete(key) {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const index = indexMap.get(key);
      if (index === void 0) {
        return false;
      }
      delete this.data[index];
      indexMap.delete(key);
      this.epoch++;
      return true;
    },
    clear() {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      this.data.length = 0;
      this.index = 0;
      this.epoch++;
      indexMap.clear();
    },
    forEach(cb) {
      this.epoch;
      const map = getMapForThis(this);
      map.forEach((index, key) => {
        cb(this.data[index], key, this);
      });
    },
    *entries() {
      this.epoch;
      const map = getMapForThis(this);
      for (const [key, index] of map) {
        yield [key, this.data[index]];
      }
    },
    *keys() {
      this.epoch;
      const map = getMapForThis(this);
      for (const key of map.keys()) {
        yield key;
      }
    },
    *values() {
      this.epoch;
      const map = getMapForThis(this);
      for (const index of map.values()) {
        yield this.data[index];
      }
    },
    [Symbol.iterator]() {
      return this.entries();
    },
    get [Symbol.toStringTag]() {
      return "Map";
    },
    toJSON() {
      return new Map(this.entries());
    }
  };
  const proxiedObject = proxy(vObject);
  Object.defineProperties(proxiedObject, {
    size: { enumerable: false },
    index: { enumerable: false },
    epoch: { enumerable: false },
    data: { enumerable: false },
    toJSON: { enumerable: false }
  });
  Object.seal(proxiedObject);
  return proxiedObject;
}
var define_process_env_default = {};
const SECURE_SITE = (
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  (typeof process$1 !== "undefined" && typeof define_process_env_default !== "undefined" ? define_process_env_default["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org"
);
const ONRAMP_PROVIDERS = [
  {
    label: "Meld.io",
    name: "meld",
    feeRange: "1-2%",
    url: "https://meldcrypto.com",
    supportedChains: ["eip155", "solana"]
  }
];
const MELD_PUBLIC_KEY = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
const ConstantsUtil$1 = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  FIVE_SEC_MS: 5e3,
  THREE_SEC_MS: 3e3,
  ONE_SEC_MS: 1e3,
  SECURE_SITE,
  SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
  SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
  SOLANA_NATIVE_TOKEN_ADDRESS: "So11111111111111111111111111111111111111111",
  RESTRICTED_TIMEZONES: [
    "ASIA/SHANGHAI",
    "ASIA/URUMQI",
    "ASIA/CHONGQING",
    "ASIA/HARBIN",
    "ASIA/KASHGAR",
    "ASIA/MACAU",
    "ASIA/HONG_KONG",
    "ASIA/MACAO",
    "ASIA/BEIJING",
    "ASIA/HARBIN"
  ],
  SWAP_SUGGESTED_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP"
  ],
  SWAP_POPULAR_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP",
    "METAL",
    "DAI",
    "CHAMP",
    "WOLF",
    "SALE",
    "BAL",
    "BUSD",
    "MUST",
    "BTCpx",
    "ROUTE",
    "HEX",
    "WELT",
    "amDAI",
    "VSQ",
    "VISION",
    "AURUM",
    "pSP",
    "SNX",
    "VC",
    "LINK",
    "CHP",
    "amUSDT",
    "SPHERE",
    "FOX",
    "GIDDY",
    "GFC",
    "OMEN",
    "OX_OLD",
    "DE",
    "WNT"
  ],
  SUGGESTED_TOKENS_BY_CHAIN: {
    // Arbitrum One
    "eip155:42161": ["USD₮0"]
  },
  BALANCE_SUPPORTED_CHAINS: [
    ConstantsUtil$2.CHAIN.EVM,
    ConstantsUtil$2.CHAIN.SOLANA
  ],
  SEND_PARAMS_SUPPORTED_CHAINS: [ConstantsUtil$2.CHAIN.EVM],
  SWAP_SUPPORTED_NETWORKS: [
    // Ethereum'
    "eip155:1",
    // Arbitrum One'
    "eip155:42161",
    // Optimism'
    "eip155:10",
    // ZKSync Era'
    "eip155:324",
    // Base'
    "eip155:8453",
    // BNB Smart Chain'
    "eip155:56",
    // Polygon'
    "eip155:137",
    // Gnosis'
    "eip155:100",
    // Avalanche'
    "eip155:43114",
    // Fantom'
    "eip155:250",
    // Klaytn'
    "eip155:8217",
    // Aurora
    "eip155:1313161554"
  ],
  NAMES_SUPPORTED_CHAIN_NAMESPACES: [ConstantsUtil$2.CHAIN.EVM],
  ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
    ConstantsUtil$2.CHAIN.EVM,
    ConstantsUtil$2.CHAIN.SOLANA
  ],
  PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
    ConstantsUtil$2.CHAIN.EVM,
    ConstantsUtil$2.CHAIN.SOLANA
  ],
  ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
    ConstantsUtil$2.CHAIN.EVM,
    ConstantsUtil$2.CHAIN.TON
  ],
  NATIVE_TOKEN_ADDRESS: {
    eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    solana: "So11111111111111111111111111111111111111111",
    polkadot: "0x",
    bip122: "0x",
    cosmos: "0x",
    sui: "0x",
    stacks: "0x",
    ton: "0x"
  },
  CONVERT_SLIPPAGE_TOLERANCE: 1,
  CONNECT_LABELS: {
    MOBILE: "Open and continue in the wallet app",
    WEB: "Open and continue in the wallet app"
  },
  SEND_SUPPORTED_NAMESPACES: [
    ConstantsUtil$2.CHAIN.EVM,
    ConstantsUtil$2.CHAIN.SOLANA
  ],
  DEFAULT_REMOTE_FEATURES: {
    swaps: ["1inch"],
    onramp: ["meld"],
    email: true,
    socials: [
      "google",
      "x",
      "discord",
      "farcaster",
      "github",
      "apple",
      "facebook"
    ],
    activity: true,
    reownBranding: true,
    multiWallet: false,
    emailCapture: false,
    payWithExchange: false,
    payments: false,
    reownAuthentication: false,
    headless: false
  },
  DEFAULT_REMOTE_FEATURES_DISABLED: {
    email: false,
    socials: false,
    swaps: false,
    onramp: false,
    activity: false,
    reownBranding: false,
    emailCapture: false,
    reownAuthentication: false,
    headless: false
  },
  DEFAULT_FEATURES: {
    receive: true,
    send: true,
    emailShowWallets: true,
    connectorTypeOrder: [
      "walletConnect",
      "recent",
      "injected",
      "featured",
      "custom",
      "external",
      "recommended"
    ],
    analytics: true,
    allWallets: true,
    legalCheckbox: false,
    smartSessions: false,
    collapseWallets: false,
    walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
    connectMethodsOrder: void 0,
    pay: false,
    reownAuthentication: false,
    headless: false
  },
  DEFAULT_SOCIALS: [
    "google",
    "x",
    "farcaster",
    "discord",
    "apple",
    "github",
    "facebook"
  ],
  DEFAULT_ACCOUNT_TYPES: {
    bip122: "payment",
    eip155: "smartAccount",
    polkadot: "eoa",
    solana: "eoa",
    ton: "eoa"
  },
  ADAPTER_TYPES: {
    UNIVERSAL: "universal",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5",
    BITCOIN: "bitcoin"
  },
  SIWX_DEFAULTS: {
    signOutOnDisconnect: true
  },
  MANDATORY_WALLET_IDS_ON_MOBILE: [
    PresetsUtil$1.ConnectorExplorerIds[ConstantsUtil$2.CONNECTOR_ID.COINBASE],
    PresetsUtil$1.ConnectorExplorerIds[ConstantsUtil$2.CONNECTOR_ID.COINBASE_SDK],
    PresetsUtil$1.ConnectorExplorerIds[ConstantsUtil$2.CONNECTOR_ID.BASE_ACCOUNT],
    PresetsUtil$1.ConnectorExplorerIds[ConstantsUtil$2.SOLFLARE_CONNECTOR_NAME],
    PresetsUtil$1.ConnectorExplorerIds[ConstantsUtil$2.PHANTOM_CONNECTOR_NAME],
    PresetsUtil$1.ConnectorExplorerIds[ConstantsUtil$2.BINANCE_CONNECTOR_NAME]
  ],
  DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"]
};
const StorageUtil = {
  // Cache expiry in milliseconds
  cacheExpiry: {
    portfolio: 3e4,
    nativeBalance: 3e4,
    ens: 3e5,
    identity: 3e5,
    transactionsHistory: 15e3,
    tokenPrice: 15e3,
    // 7 Days
    latestAppKitVersion: 6048e5,
    // 1 Day
    tonWallets: 864e5
  },
  isCacheExpired(timestamp, cacheExpiry) {
    return Date.now() - timestamp > cacheExpiry;
  },
  getActiveNetworkProps() {
    const namespace = StorageUtil.getActiveNamespace();
    const caipNetworkId = StorageUtil.getActiveCaipNetworkId();
    const stringChainId = caipNetworkId ? caipNetworkId.split(":")[1] : void 0;
    const chainId = stringChainId ? isNaN(Number(stringChainId)) ? stringChainId : Number(stringChainId) : void 0;
    return {
      namespace,
      caipNetworkId,
      chainId
    };
  },
  setWalletConnectDeepLink({ name, href }) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.DEEPLINK_CHOICE, JSON.stringify({ href, name }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const deepLink = SafeLocalStorage.getItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
      if (deepLink) {
        return JSON.parse(deepLink);
      }
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
    return void 0;
  },
  deleteWalletConnectDeepLink() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setActiveNamespace(namespace) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE, namespace);
    } catch {
      console.info("Unable to set active namespace");
    }
  },
  setActiveCaipNetworkId(caipNetworkId) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
      StorageUtil.setActiveNamespace(caipNetworkId.split(":")[0]);
    } catch {
      console.info("Unable to set active caip network id");
    }
  },
  getActiveCaipNetworkId() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to get active caip network id");
      return void 0;
    }
  },
  deleteActiveCaipNetworkId() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to delete active caip network id");
    }
  },
  deleteConnectedConnectorId(namespace) {
    try {
      const key = getSafeConnectorIdKey(namespace);
      SafeLocalStorage.removeItem(key);
    } catch {
      console.info("Unable to delete connected connector id");
    }
  },
  setAppKitRecent(wallet) {
    try {
      const recentWallets = StorageUtil.getRecentWallets();
      const exists = recentWallets.find((w2) => w2.id === wallet.id);
      if (!exists) {
        recentWallets.unshift(wallet);
        if (recentWallets.length > 2) {
          recentWallets.pop();
        }
        SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLETS, JSON.stringify(recentWallets));
        SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLET, JSON.stringify(wallet));
      }
    } catch {
      console.info("Unable to set AppKit recent");
    }
  },
  getRecentWallets() {
    try {
      const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLETS);
      return recent ? JSON.parse(recent) : [];
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return [];
  },
  getRecentWallet() {
    try {
      const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLET);
      return recent ? JSON.parse(recent) : null;
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return null;
  },
  deleteRecentWallet() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.RECENT_WALLET);
    } catch {
      console.info("Unable to delete AppKit recent");
    }
  },
  setConnectedConnectorId(namespace, connectorId) {
    try {
      const key = getSafeConnectorIdKey(namespace);
      SafeLocalStorage.setItem(key, connectorId);
    } catch {
      console.info("Unable to set Connected Connector Id");
    }
  },
  getActiveNamespace() {
    try {
      const activeNamespace = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE);
      return activeNamespace;
    } catch {
      console.info("Unable to get active namespace");
    }
    return void 0;
  },
  getConnectedConnectorId(namespace) {
    if (!namespace) {
      return void 0;
    }
    try {
      const key = getSafeConnectorIdKey(namespace);
      return SafeLocalStorage.getItem(key);
    } catch (e2) {
      console.info("Unable to get connected connector id in namespace", namespace);
    }
    return void 0;
  },
  setConnectedSocialProvider(socialProvider) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_SOCIAL, socialProvider);
    } catch {
      console.info("Unable to set connected social provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get connected social provider");
    }
    return void 0;
  },
  deleteConnectedSocialProvider() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to delete connected social provider");
    }
  },
  getConnectedSocialUsername() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get connected social username");
    }
    return void 0;
  },
  getStoredActiveCaipNetworkId() {
    var _a;
    const storedCaipNetworkId = SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
    const networkId = (_a = storedCaipNetworkId == null ? void 0 : storedCaipNetworkId.split(":")) == null ? void 0 : _a[1];
    return networkId;
  },
  setConnectionStatus(status) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTION_STATUS, status);
    } catch {
      console.info("Unable to set connection status");
    }
  },
  getConnectionStatus() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTION_STATUS);
    } catch {
      return void 0;
    }
  },
  getConnectedNamespaces() {
    try {
      const namespaces = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES);
      if (!(namespaces == null ? void 0 : namespaces.length)) {
        return [];
      }
      return namespaces.split(",");
    } catch {
      return [];
    }
  },
  setConnectedNamespaces(namespaces) {
    try {
      const uniqueNamespaces = Array.from(new Set(namespaces));
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES, uniqueNamespaces.join(","));
    } catch {
      console.info("Unable to set namespaces in storage");
    }
  },
  addConnectedNamespace(namespace) {
    try {
      const namespaces = StorageUtil.getConnectedNamespaces();
      if (!namespaces.includes(namespace)) {
        namespaces.push(namespace);
        StorageUtil.setConnectedNamespaces(namespaces);
      }
    } catch {
      console.info("Unable to add connected namespace");
    }
  },
  removeConnectedNamespace(namespace) {
    try {
      const namespaces = StorageUtil.getConnectedNamespaces();
      const index = namespaces.indexOf(namespace);
      if (index > -1) {
        namespaces.splice(index, 1);
        StorageUtil.setConnectedNamespaces(namespaces);
      }
    } catch {
      console.info("Unable to remove connected namespace");
    }
  },
  getTelegramSocialProvider() {
    try {
      return SafeLocalStorage.getItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to get telegram social provider");
      return null;
    }
  },
  setTelegramSocialProvider(socialProvider) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER, socialProvider);
    } catch {
      console.info("Unable to set telegram social provider");
    }
  },
  removeTelegramSocialProvider() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to remove telegram social provider");
    }
  },
  getBalanceCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return cache;
  },
  removeAddressFromBalanceCache(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify({ ...cache, [caipAddress]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", caipAddress);
    }
  },
  getBalanceCacheForCaipAddress(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      const balanceCache = cache[caipAddress];
      if (balanceCache && !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) {
        return balanceCache.balance;
      }
      StorageUtil.removeAddressFromBalanceCache(caipAddress);
    } catch {
      console.info("Unable to get balance cache for address", caipAddress);
    }
    return void 0;
  },
  updateBalanceCache(params) {
    try {
      const cache = StorageUtil.getBalanceCache();
      cache[params.caipAddress] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update balance cache", params);
    }
  },
  getNativeBalanceCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return cache;
  },
  removeAddressFromNativeBalanceCache(caipAddress) {
    try {
      const cache = StorageUtil.getBalanceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify({ ...cache, [caipAddress]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", caipAddress);
    }
  },
  getNativeBalanceCacheForCaipAddress(caipAddress) {
    try {
      const cache = StorageUtil.getNativeBalanceCache();
      const nativeBalanceCache = cache[caipAddress];
      if (nativeBalanceCache && !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) {
        return nativeBalanceCache;
      }
      console.info("Discarding cache for address", caipAddress);
      StorageUtil.removeAddressFromBalanceCache(caipAddress);
    } catch {
      console.info("Unable to get balance cache for address", caipAddress);
    }
    return void 0;
  },
  updateNativeBalanceCache(params) {
    try {
      const cache = StorageUtil.getNativeBalanceCache();
      cache[params.caipAddress] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update balance cache", params);
    }
  },
  getEnsCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.ENS_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get ens name cache");
    }
    return cache;
  },
  getEnsFromCacheForAddress(address) {
    try {
      const cache = StorageUtil.getEnsCache();
      const ensCache = cache[address];
      if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) {
        return ensCache.ens;
      }
      StorageUtil.removeEnsFromCache(address);
    } catch {
      console.info("Unable to get ens name from cache", address);
    }
    return void 0;
  },
  updateEnsCache(params) {
    try {
      const cache = StorageUtil.getEnsCache();
      cache[params.address] = params;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update ens name cache", params);
    }
  },
  removeEnsFromCache(address) {
    try {
      const cache = StorageUtil.getEnsCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify({ ...cache, [address]: void 0 }));
    } catch {
      console.info("Unable to remove ens name from cache", address);
    }
  },
  getIdentityCache() {
    let cache = {};
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.IDENTITY_CACHE);
      cache = result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get identity cache");
    }
    return cache;
  },
  getIdentityFromCacheForAddress(address) {
    try {
      const cache = StorageUtil.getIdentityCache();
      const identityCache = cache[address];
      if (identityCache && !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) {
        return identityCache.identity;
      }
      StorageUtil.removeIdentityFromCache(address);
    } catch {
      console.info("Unable to get identity from cache", address);
    }
    return void 0;
  },
  updateIdentityCache(params) {
    try {
      const cache = StorageUtil.getIdentityCache();
      cache[params.address] = {
        identity: params.identity,
        timestamp: params.timestamp
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update identity cache", params);
    }
  },
  removeIdentityFromCache(address) {
    try {
      const cache = StorageUtil.getIdentityCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify({ ...cache, [address]: void 0 }));
    } catch {
      console.info("Unable to remove identity from cache", address);
    }
  },
  getTonWalletsCache() {
    try {
      const cache = SafeLocalStorage.getItem(SafeLocalStorageKeys.TON_WALLETS_CACHE);
      const parsedCache = cache ? JSON.parse(cache) : void 0;
      if (parsedCache && !this.isCacheExpired(parsedCache.timestamp, this.cacheExpiry.tonWallets)) {
        return parsedCache;
      }
      StorageUtil.removeTonWalletsCache();
    } catch {
      console.info("Unable to get ton wallets cache");
    }
    return void 0;
  },
  updateTonWalletsCache(wallets) {
    try {
      const cache = StorageUtil.getTonWalletsCache() || { timestamp: 0, wallets: [] };
      cache.timestamp = (/* @__PURE__ */ new Date()).getTime();
      cache.wallets = wallets;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TON_WALLETS_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update ton wallets cache", wallets);
    }
  },
  removeTonWalletsCache() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.TON_WALLETS_CACHE);
    } catch {
      console.info("Unable to remove ton wallets cache");
    }
  },
  clearAddressCache() {
    try {
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.ENS_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.IDENTITY_CACHE);
      SafeLocalStorage.removeItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
    } catch {
      console.info("Unable to clear address cache");
    }
  },
  setPreferredAccountTypes(accountTypes) {
    try {
      SafeLocalStorage.setItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
    } catch {
      console.info("Unable to set preferred account types", accountTypes);
    }
  },
  getPreferredAccountTypes() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);
      if (!result) {
        return {};
      }
      return JSON.parse(result);
    } catch {
      console.info("Unable to get preferred account types");
    }
    return {};
  },
  setConnections(connections, chainNamespace) {
    try {
      const existingConnections = StorageUtil.getConnections();
      const existing = existingConnections[chainNamespace] ?? [];
      const connectorConnectionMap = /* @__PURE__ */ new Map();
      for (const conn of existing) {
        connectorConnectionMap.set(conn.connectorId, { ...conn });
      }
      for (const conn of connections) {
        const existingConn = connectorConnectionMap.get(conn.connectorId);
        const isAuth = conn.connectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH;
        if (existingConn && !isAuth) {
          const existingAddrs = new Set(existingConn.accounts.map((a2) => a2.address.toLowerCase()));
          const newAccounts = conn.accounts.filter((a2) => !existingAddrs.has(a2.address.toLowerCase()));
          existingConn.accounts.push(...newAccounts);
        } else {
          connectorConnectionMap.set(conn.connectorId, { ...conn });
        }
      }
      const dedupedConnections = {
        ...existingConnections,
        [chainNamespace]: Array.from(connectorConnectionMap.values())
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify(dedupedConnections));
    } catch (error) {
      console.error("Unable to sync connections to storage", error);
    }
  },
  getConnections() {
    try {
      const connectionsStorage = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTIONS);
      if (!connectionsStorage) {
        return {};
      }
      return JSON.parse(connectionsStorage);
    } catch (error) {
      console.error("Unable to get connections from storage", error);
      return {};
    }
  },
  deleteAddressFromConnection({ connectorId, address, namespace }) {
    try {
      const connections = StorageUtil.getConnections();
      const namespaceConnections = connections[namespace] ?? [];
      const connectionMap = new Map(namespaceConnections.map((conn) => [conn.connectorId, conn]));
      const connector = connectionMap.get(connectorId);
      if (connector) {
        const updatedAccounts = connector.accounts.filter((acc) => acc.address.toLowerCase() !== address.toLowerCase());
        if (updatedAccounts.length === 0) {
          connectionMap.delete(connectorId);
        } else {
          connectionMap.set(connectorId, {
            ...connector,
            accounts: connector.accounts.filter((acc) => acc.address.toLowerCase() !== address.toLowerCase())
          });
        }
      }
      SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify({
        ...connections,
        [namespace]: Array.from(connectionMap.values())
      }));
    } catch {
      console.error(`Unable to remove address "${address}" from connector "${connectorId}" in namespace "${namespace}"`);
    }
  },
  getDisconnectedConnectorIds() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS);
      if (!result) {
        return {};
      }
      return JSON.parse(result);
    } catch {
      console.info("Unable to get disconnected connector ids");
    }
    return {};
  },
  addDisconnectedConnectorId(connectorId, chainNamespace) {
    try {
      const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
      const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
      disconnectedConnectorIdsByNamespace.push(connectorId);
      SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
        ...currentDisconnectedConnectorIds,
        [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
      }));
    } catch {
      console.error(`Unable to set disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
    }
  },
  removeDisconnectedConnectorId(connectorId, chainNamespace) {
    try {
      const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
      let disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
      disconnectedConnectorIdsByNamespace = disconnectedConnectorIdsByNamespace.filter((id) => id.toLowerCase() !== connectorId.toLowerCase());
      SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
        ...currentDisconnectedConnectorIds,
        [chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
      }));
    } catch {
      console.error(`Unable to remove disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
    }
  },
  isConnectorDisconnected(connectorId, chainNamespace) {
    try {
      const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
      const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
      return disconnectedConnectorIdsByNamespace.some((id) => id.toLowerCase() === connectorId.toLowerCase());
    } catch {
      console.info(`Unable to get disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
    }
    return false;
  },
  getTransactionsCache() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
      return result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get transactions cache");
    }
    return {};
  },
  getTransactionsCacheForAddress({ address, chainId = "" }) {
    var _a;
    try {
      const cache = StorageUtil.getTransactionsCache();
      const transactionsCache = (_a = cache[address]) == null ? void 0 : _a[chainId];
      if (transactionsCache && !this.isCacheExpired(transactionsCache.timestamp, this.cacheExpiry.transactionsHistory)) {
        return transactionsCache.transactions;
      }
      StorageUtil.removeTransactionsCache({ address, chainId });
    } catch {
      console.info("Unable to get transactions cache");
    }
    return void 0;
  },
  updateTransactionsCache({ address, chainId = "", timestamp, transactions }) {
    try {
      const cache = StorageUtil.getTransactionsCache();
      cache[address] = {
        ...cache[address],
        [chainId]: {
          timestamp,
          transactions
        }
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update transactions cache", {
        address,
        chainId,
        timestamp,
        transactions
      });
    }
  },
  removeTransactionsCache({ address, chainId }) {
    try {
      const cache = StorageUtil.getTransactionsCache();
      const addressCache = (cache == null ? void 0 : cache[address]) || {};
      const { [chainId]: _removed, ...updatedChainData } = addressCache;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
        ...cache,
        [address]: updatedChainData
      }));
    } catch {
      console.info("Unable to remove transactions cache", { address, chainId });
    }
  },
  getTokenPriceCache() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE);
      return result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get token price cache");
    }
    return {};
  },
  getTokenPriceCacheForAddresses(addresses) {
    try {
      const cache = StorageUtil.getTokenPriceCache();
      const tokenPriceCache = cache[addresses.join(",")];
      if (tokenPriceCache && !this.isCacheExpired(tokenPriceCache.timestamp, this.cacheExpiry.tokenPrice)) {
        return tokenPriceCache.tokenPrice;
      }
      StorageUtil.removeTokenPriceCache(addresses);
    } catch {
      console.info("Unable to get token price cache for addresses", addresses);
    }
    return void 0;
  },
  updateTokenPriceCache(params) {
    try {
      const cache = StorageUtil.getTokenPriceCache();
      cache[params.addresses.join(",")] = {
        timestamp: params.timestamp,
        tokenPrice: params.tokenPrice
      };
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify(cache));
    } catch {
      console.info("Unable to update token price cache", params);
    }
  },
  removeTokenPriceCache(addresses) {
    try {
      const cache = StorageUtil.getTokenPriceCache();
      SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify({ ...cache, [addresses.join(",")]: void 0 }));
    } catch {
      console.info("Unable to remove token price cache", addresses);
    }
  },
  /* ----- AppKit Latest Version ------------------------- */
  getLatestAppKitVersion() {
    try {
      const result = this.getLatestAppKitVersionCache();
      const version = result == null ? void 0 : result.version;
      if (version && !this.isCacheExpired(result.timestamp, this.cacheExpiry.latestAppKitVersion)) {
        return version;
      }
      return void 0;
    } catch {
      console.info("Unable to get latest AppKit version");
    }
    return void 0;
  },
  getLatestAppKitVersionCache() {
    try {
      const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION);
      return result ? JSON.parse(result) : {};
    } catch {
      console.info("Unable to get latest AppKit version cache");
    }
    return {};
  },
  updateLatestAppKitVersion(params) {
    try {
      const cache = StorageUtil.getLatestAppKitVersionCache();
      cache.timestamp = params.timestamp;
      cache.version = params.version;
      SafeLocalStorage.setItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION, JSON.stringify(cache));
    } catch {
      console.info("Unable to update latest AppKit version on local storage", params);
    }
  }
};
const CoreHelperUtil = {
  getWindow() {
    if (typeof window === "undefined") {
      return void 0;
    }
    return window;
  },
  isMobile() {
    var _a;
    if (this.isClient()) {
      return Boolean((window == null ? void 0 : window.matchMedia) && typeof window.matchMedia === "function" && ((_a = window.matchMedia("(pointer:coarse)")) == null ? void 0 : _a.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
    }
    return false;
  },
  checkCaipNetwork(network, networkName = "") {
    return network == null ? void 0 : network.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
  },
  isAndroid() {
    if (!this.isMobile()) {
      return false;
    }
    const ua = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return CoreHelperUtil.isMobile() && ua.includes("android");
  },
  isIos() {
    if (!this.isMobile()) {
      return false;
    }
    const ua = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return ua.includes("iphone") || ua.includes("ipad");
  },
  isSafari() {
    if (!this.isClient()) {
      return false;
    }
    const ua = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return ua.includes("safari");
  },
  isClient() {
    return typeof window !== "undefined";
  },
  isPairingExpired(expiry) {
    return expiry ? expiry - Date.now() <= ConstantsUtil$1.TEN_SEC_MS : true;
  },
  isAllowedRetry(lastRetry, differenceMs = ConstantsUtil$1.ONE_SEC_MS) {
    return Date.now() - lastRetry >= differenceMs;
  },
  copyToClopboard(text) {
    navigator.clipboard.writeText(text);
  },
  isIframe() {
    try {
      return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
    } catch (e2) {
      return false;
    }
  },
  isSafeApp() {
    var _a, _b;
    if (CoreHelperUtil.isClient() && window.self !== window.top) {
      try {
        const ancestor = (_b = (_a = window == null ? void 0 : window.location) == null ? void 0 : _a.ancestorOrigins) == null ? void 0 : _b[0];
        const safeAppUrl = "https://app.safe.global";
        if (ancestor) {
          const ancestorUrl = new URL(ancestor);
          const safeUrl = new URL(safeAppUrl);
          return ancestorUrl.hostname === safeUrl.hostname;
        }
      } catch {
        return false;
      }
    }
    return false;
  },
  getPairingExpiry() {
    return Date.now() + ConstantsUtil$1.FOUR_MINUTES_MS;
  },
  getNetworkId(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[1];
  },
  getPlainAddress(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[2];
  },
  async wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce(func, timeout = 500) {
    let timer = void 0;
    return (...args) => {
      function next() {
        func(...args);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(next, timeout);
    };
  },
  isHttpUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  },
  formatNativeUrl(appUrl, wcUri, universalLink = null) {
    if (CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    let safeUniversalLink = universalLink;
    if (!safeAppUrl.includes("://")) {
      safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      safeAppUrl = `${safeAppUrl}://`;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    if (safeUniversalLink && !(safeUniversalLink == null ? void 0 : safeUniversalLink.endsWith("/"))) {
      safeUniversalLink = `${safeUniversalLink}/`;
    }
    if (this.isTelegram() && this.isAndroid()) {
      wcUri = encodeURIComponent(wcUri);
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      redirectUniversalLink: safeUniversalLink ? `${safeUniversalLink}wc?uri=${encodedWcUrl}` : void 0,
      href: safeAppUrl
    };
  },
  formatUniversalUrl(appUrl, wcUri) {
    if (!CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      href: safeAppUrl
    };
  },
  getOpenTargetForPlatform(target) {
    if (target === "popupWindow") {
      return target;
    }
    if (this.isTelegram()) {
      if (StorageUtil.getTelegramSocialProvider()) {
        return "_top";
      }
      return "_blank";
    }
    return target;
  },
  openHref(href, target, features) {
    window == null ? void 0 : window.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
  },
  returnOpenHref(href, target, features) {
    return window == null ? void 0 : window.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
  },
  isTelegram() {
    return typeof window !== "undefined" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Boolean(window.TelegramWebviewProxy) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.Telegram) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.TelegramWebviewProxyProto));
  },
  isPWA() {
    var _a, _b;
    if (typeof window === "undefined") {
      return false;
    }
    const isStandaloneDisplayMode = (window == null ? void 0 : window.matchMedia) && typeof window.matchMedia === "function" ? (_a = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : _a.matches : false;
    const isIOSStandalone = (_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.standalone;
    return Boolean(isStandaloneDisplayMode || isIOSStandalone);
  },
  async preloadImage(src) {
    const imagePromise = new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.crossOrigin = "anonymous";
      image.src = src;
    });
    return Promise.race([imagePromise, CoreHelperUtil.wait(2e3)]);
  },
  parseBalance(balance, symbol) {
    let formattedBalance = "0.000";
    if (typeof balance === "string") {
      const number = Number(balance);
      if (!isNaN(number)) {
        const formattedValue = (Math.floor(number * 1e3) / 1e3).toFixed(3);
        if (formattedValue) {
          formattedBalance = formattedValue;
        }
      }
    }
    const [valueString, decimalsString] = formattedBalance.split(".");
    const value = valueString || "0";
    const decimals = decimalsString || "000";
    const formattedText = `${value}.${decimals}${symbol ? ` ${symbol}` : ""}`;
    return {
      formattedText,
      value,
      decimals,
      symbol
    };
  },
  getApiUrl() {
    return ConstantsUtil$2.W3M_API_URL;
  },
  getBlockchainApiUrl() {
    return ConstantsUtil$2.BLOCKCHAIN_API_RPC_URL;
  },
  getAnalyticsUrl() {
    return ConstantsUtil$2.PULSE_API_URL;
  },
  getUUID() {
    if (crypto == null ? void 0 : crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (c2) => {
      const r2 = Math.random() * 16 | 0;
      const v2 = c2 === "x" ? r2 : r2 & 3 | 8;
      return v2.toString(16);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseError(error) {
    var _a, _b;
    if (typeof error === "string") {
      return error;
    } else if (typeof ((_b = (_a = error == null ? void 0 : error.issues) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) === "string") {
      return error.issues[0].message;
    } else if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error";
  },
  sortRequestedNetworks(approvedIds, requestedNetworks = []) {
    const approvedIndexMap = {};
    if (requestedNetworks && approvedIds) {
      approvedIds.forEach((id, index) => {
        approvedIndexMap[id] = index;
      });
      requestedNetworks.sort((a2, b2) => {
        const indexA = approvedIndexMap[a2.id];
        const indexB = approvedIndexMap[b2.id];
        if (indexA !== void 0 && indexB !== void 0) {
          return indexA - indexB;
        } else if (indexA !== void 0) {
          return -1;
        } else if (indexB !== void 0) {
          return 1;
        }
        return 0;
      });
    }
    return requestedNetworks;
  },
  calculateBalance(array) {
    let sum = 0;
    for (const item of array) {
      sum += item.value ?? 0;
    }
    return sum;
  },
  formatTokenBalance(number) {
    const roundedNumber = number.toFixed(2);
    const [dollars, pennies] = roundedNumber.split(".");
    return { dollars, pennies };
  },
  isAddress(address, chain = "eip155") {
    switch (chain) {
      case "eip155":
        if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
          return false;
        } else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
          return true;
        }
        return false;
      case "solana":
        return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
      case "bip122": {
        const isP2PKH = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
        const isP2SH = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
        const isBech32 = /^bc1[a-z0-9]{39,87}$/u.test(address);
        const isBech32m = /^bc1p[a-z0-9]{58}$/u.test(address);
        return isP2PKH || isP2SH || isBech32 || isBech32m;
      }
      default:
        return false;
    }
  },
  uniqueBy(arr, key) {
    const set = /* @__PURE__ */ new Set();
    return arr.filter((item) => {
      const keyValue = item[key];
      if (set.has(keyValue)) {
        return false;
      }
      set.add(keyValue);
      return true;
    });
  },
  generateSdkVersion(adapters, platform, version) {
    const hasNoAdapters = adapters.length === 0;
    const adapterNames = hasNoAdapters ? ConstantsUtil$1.ADAPTER_TYPES.UNIVERSAL : adapters.map((adapter) => adapter.adapterType).join(",");
    return `${platform}-${adapterNames}-${version}`;
  },
  // eslint-disable-next-line max-params
  createAccount(namespace, address, type, publicKey, path) {
    return {
      namespace,
      address,
      type,
      publicKey,
      path
    };
  },
  isCaipAddress(address) {
    if (typeof address !== "string") {
      return false;
    }
    const sections = address.split(":");
    const namespace = sections[0];
    return sections.filter(Boolean).length === 3 && namespace in ConstantsUtil$2.CHAIN_NAME_MAP;
  },
  getAccount(account) {
    if (!account) {
      return {
        address: void 0,
        chainId: void 0
      };
    }
    if (typeof account === "string") {
      return {
        address: account,
        chainId: void 0
      };
    }
    return {
      address: account.address,
      chainId: account.chainId
    };
  },
  isMac() {
    const ua = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return ua.includes("macintosh") && !ua.includes("safari");
  },
  formatTelegramSocialLoginUrl(url) {
    const valueToInject = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`;
    const paramToInject = "state=";
    const parsedUrl = new URL(url);
    if (parsedUrl.host === "auth.magic.link") {
      const providerParam = "provider_authorization_url=";
      const providerUrl = url.substring(url.indexOf(providerParam) + providerParam.length);
      const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
      return url.replace(providerUrl, encodeURIComponent(resultUrl));
    }
    return this.injectIntoUrl(url, paramToInject, valueToInject);
  },
  injectIntoUrl(url, key, appendString) {
    const keyIndex = url.indexOf(key);
    if (keyIndex === -1) {
      throw new Error(`${key} parameter not found in the URL: ${url}`);
    }
    const keyEndIndex = url.indexOf("&", keyIndex);
    const keyLength = key.length;
    const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
    const beforeKeyValue = url.substring(0, keyIndex + keyLength);
    const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
    const afterKeyValue = url.substring(keyEndIndex);
    const newKeyValue = currentKeyValue + appendString;
    const newUrl = beforeKeyValue + newKeyValue + afterKeyValue;
    return newUrl;
  },
  isNumber(value) {
    if (typeof value !== "number" && typeof value !== "string") {
      return false;
    }
    return !isNaN(Number(value));
  }
};
const W3mFrameConstants = {
  STORAGE_KEY: "@appkit-wallet/",
  SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
};
const W3mFrameRpcConstants = {
  SAFE_RPC_METHODS: [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getAccount",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_sendRawTransaction",
    "eth_syncing",
    "eth_uninstallFilter",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "eth_getUserOperationReceipt",
    "eth_estimateUserOperationGas",
    "eth_getUserOperationByHash",
    "eth_supportedEntryPoints",
    "wallet_getAssets"
  ],
  NOT_SAFE_RPC_METHODS: [
    "personal_sign",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "solana_signMessage",
    "solana_signTransaction",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction",
    "wallet_sendCalls",
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    "eth_sendUserOperation"
  ],
  GET_CHAIN_ID: "eth_chainId",
  RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
  ACCOUNT_TYPES: {
    EOA: "eoa",
    SMART_ACCOUNT: "smartAccount"
  }
};
const W3mFrameStorage = {
  set(key, value) {
    if (W3mFrameHelpers.isClient) {
      localStorage.setItem(`${W3mFrameConstants.STORAGE_KEY}${key}`, value);
    }
  },
  get(key) {
    if (W3mFrameHelpers.isClient) {
      return localStorage.getItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
    }
    return null;
  },
  delete(key, social) {
    if (W3mFrameHelpers.isClient) {
      if (social) {
        localStorage.removeItem(key);
      } else {
        localStorage.removeItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
      }
    }
  }
};
const W3mFrameHelpers = {
  isClient: typeof window !== "undefined"
};
async function fetchData(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const err = new Error(`HTTP status code: ${response.status}`, {
      cause: response
    });
    throw err;
  }
  return response;
}
class FetchUtil {
  constructor({ baseUrl: baseUrl2, clientId }) {
    this.baseUrl = baseUrl2;
    this.clientId = clientId;
  }
  async get({ headers, signal, cache, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal, cache });
    return response.json();
  }
  async getBlob({ headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal });
    return response.blob();
  }
  async post({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "POST",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async put({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "PUT",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async delete({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "DELETE",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  createUrl({ path, params }) {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          url.searchParams.append(key, value);
        }
      });
    }
    if (this.clientId) {
      url.searchParams.append("clientId", this.clientId);
    }
    return url;
  }
  sendBeacon({ body, ...args }) {
    const url = this.createUrl(args);
    return navigator.sendBeacon(url.toString(), body ? JSON.stringify(body) : void 0);
  }
}
const OptionsUtil = {
  getFeatureValue(key, features) {
    const optionValue = features == null ? void 0 : features[key];
    if (optionValue === void 0) {
      return ConstantsUtil$1.DEFAULT_FEATURES[key];
    }
    return optionValue;
  },
  filterSocialsByPlatform(socials) {
    if (!socials || !socials.length) {
      return socials;
    }
    let filteredSocials = socials;
    if (CoreHelperUtil.isTelegram()) {
      if (CoreHelperUtil.isIos()) {
        filteredSocials = filteredSocials.filter((s2) => s2 !== "google");
      }
      if (CoreHelperUtil.isMac()) {
        filteredSocials = filteredSocials.filter((s2) => s2 !== "x");
      }
      if (CoreHelperUtil.isAndroid()) {
        filteredSocials = filteredSocials.filter((s2) => !["facebook", "x"].includes(s2));
      }
    }
    if (CoreHelperUtil.isMobile()) {
      filteredSocials = filteredSocials.filter((s2) => s2 !== "facebook");
    }
    return filteredSocials;
  },
  isSocialsEnabled() {
    var _a, _b, _c, _d2;
    return Array.isArray((_a = OptionsController.state.features) == null ? void 0 : _a.socials) && ((_b = OptionsController.state.features) == null ? void 0 : _b.socials.length) > 0 || Array.isArray((_c = OptionsController.state.remoteFeatures) == null ? void 0 : _c.socials) && ((_d2 = OptionsController.state.remoteFeatures) == null ? void 0 : _d2.socials.length) > 0;
  },
  isEmailEnabled() {
    var _a, _b;
    return Boolean(((_a = OptionsController.state.features) == null ? void 0 : _a.email) || ((_b = OptionsController.state.remoteFeatures) == null ? void 0 : _b.email));
  }
};
const state$l = proxy({
  features: ConstantsUtil$1.DEFAULT_FEATURES,
  projectId: "",
  sdkType: "appkit",
  sdkVersion: "html-wagmi-undefined",
  defaultAccountTypes: ConstantsUtil$1.DEFAULT_ACCOUNT_TYPES,
  enableNetworkSwitch: true,
  experimental_preferUniversalLinks: false,
  remoteFeatures: {},
  enableMobileFullScreen: false,
  coinbasePreference: "all"
});
const OptionsController = {
  state: state$l,
  subscribeKey(key, callback) {
    return subscribeKey(state$l, key, callback);
  },
  setOptions(options) {
    Object.assign(state$l, options);
  },
  setRemoteFeatures(remoteFeatures) {
    var _a, _b;
    if (!remoteFeatures) {
      return;
    }
    const newRemoteFeatures = { ...state$l.remoteFeatures, ...remoteFeatures };
    state$l.remoteFeatures = newRemoteFeatures;
    if ((_a = state$l.remoteFeatures) == null ? void 0 : _a.socials) {
      state$l.remoteFeatures.socials = OptionsUtil.filterSocialsByPlatform(state$l.remoteFeatures.socials);
    }
    if ((_b = state$l.features) == null ? void 0 : _b.pay) {
      state$l.remoteFeatures.email = false;
      state$l.remoteFeatures.socials = false;
    }
  },
  setFeatures(features) {
    var _a;
    if (!features) {
      return;
    }
    if (!state$l.features) {
      state$l.features = ConstantsUtil$1.DEFAULT_FEATURES;
    }
    const newFeatures = { ...state$l.features, ...features };
    state$l.features = newFeatures;
    if (((_a = state$l.features) == null ? void 0 : _a.pay) && state$l.remoteFeatures) {
      state$l.remoteFeatures.email = false;
      state$l.remoteFeatures.socials = false;
    }
  },
  setProjectId(projectId) {
    state$l.projectId = projectId;
  },
  setCustomRpcUrls(customRpcUrls) {
    state$l.customRpcUrls = customRpcUrls;
  },
  setAllWallets(allWallets) {
    state$l.allWallets = allWallets;
  },
  setIncludeWalletIds(includeWalletIds) {
    state$l.includeWalletIds = includeWalletIds;
  },
  setExcludeWalletIds(excludeWalletIds) {
    state$l.excludeWalletIds = excludeWalletIds;
  },
  setFeaturedWalletIds(featuredWalletIds) {
    state$l.featuredWalletIds = featuredWalletIds;
  },
  setTokens(tokens2) {
    state$l.tokens = tokens2;
  },
  setTermsConditionsUrl(termsConditionsUrl) {
    state$l.termsConditionsUrl = termsConditionsUrl;
  },
  setPrivacyPolicyUrl(privacyPolicyUrl) {
    state$l.privacyPolicyUrl = privacyPolicyUrl;
  },
  setCustomWallets(customWallets) {
    state$l.customWallets = customWallets;
  },
  setIsSiweEnabled(isSiweEnabled) {
    state$l.isSiweEnabled = isSiweEnabled;
  },
  setIsUniversalProvider(isUniversalProvider) {
    state$l.isUniversalProvider = isUniversalProvider;
  },
  setSdkVersion(sdkVersion) {
    state$l.sdkVersion = sdkVersion;
  },
  setMetadata(metadata) {
    state$l.metadata = metadata;
  },
  setDisableAppend(disableAppend) {
    state$l.disableAppend = disableAppend;
  },
  setEIP6963Enabled(enableEIP6963) {
    state$l.enableEIP6963 = enableEIP6963;
  },
  setDebug(debug) {
    state$l.debug = debug;
  },
  setEnableWalletGuide(enableWalletGuide) {
    state$l.enableWalletGuide = enableWalletGuide;
  },
  setEnableAuthLogger(enableAuthLogger) {
    state$l.enableAuthLogger = enableAuthLogger;
  },
  setEnableWallets(enableWallets) {
    state$l.enableWallets = enableWallets;
  },
  setPreferUniversalLinks(preferUniversalLinks) {
    state$l.experimental_preferUniversalLinks = preferUniversalLinks;
  },
  setSIWX(siwx) {
    if (siwx) {
      for (const [key, isVal] of Object.entries(ConstantsUtil$1.SIWX_DEFAULTS)) {
        siwx[key] ?? (siwx[key] = isVal);
      }
    }
    state$l.siwx = siwx;
  },
  setConnectMethodsOrder(connectMethodsOrder) {
    state$l.features = {
      ...state$l.features,
      connectMethodsOrder
    };
  },
  setWalletFeaturesOrder(walletFeaturesOrder) {
    state$l.features = {
      ...state$l.features,
      walletFeaturesOrder
    };
  },
  setSocialsOrder(socialsOrder) {
    state$l.remoteFeatures = {
      ...state$l.remoteFeatures,
      socials: socialsOrder
    };
  },
  setCollapseWallets(collapseWallets) {
    state$l.features = {
      ...state$l.features,
      collapseWallets
    };
  },
  setEnableEmbedded(enableEmbedded) {
    state$l.enableEmbedded = enableEmbedded;
  },
  setAllowUnsupportedChain(allowUnsupportedChain) {
    state$l.allowUnsupportedChain = allowUnsupportedChain;
  },
  setManualWCControl(manualWCControl) {
    state$l.manualWCControl = manualWCControl;
  },
  setEnableNetworkSwitch(enableNetworkSwitch) {
    state$l.enableNetworkSwitch = enableNetworkSwitch;
  },
  setEnableMobileFullScreen(enableMobileFullScreen) {
    state$l.enableMobileFullScreen = CoreHelperUtil.isMobile() && enableMobileFullScreen;
  },
  setEnableReconnect(enableReconnect) {
    state$l.enableReconnect = enableReconnect;
  },
  setCoinbasePreference(coinbasePreference) {
    state$l.coinbasePreference = coinbasePreference;
  },
  setDefaultAccountTypes(defaultAccountType = {}) {
    Object.entries(defaultAccountType).forEach(([namespace, accountType]) => {
      if (accountType) {
        state$l.defaultAccountTypes[namespace] = accountType;
      }
    });
  },
  setUniversalProviderConfigOverride(universalProviderConfigOverride) {
    state$l.universalProviderConfigOverride = universalProviderConfigOverride;
  },
  getUniversalProviderConfigOverride() {
    return state$l.universalProviderConfigOverride;
  },
  getSnapshot() {
    return snapshot(state$l);
  }
};
const DEFAULT_STATE$1 = Object.freeze({
  message: "",
  variant: "success",
  svg: void 0,
  open: false,
  autoClose: true
});
const state$k = proxy({
  ...DEFAULT_STATE$1
});
const controller$c = {
  state: state$k,
  subscribeKey(key, callback) {
    return subscribeKey(state$k, key, callback);
  },
  showLoading(message, options = {}) {
    this._showMessage({ message, variant: "loading", ...options });
  },
  showSuccess(message) {
    this._showMessage({ message, variant: "success" });
  },
  showSvg(message, svg) {
    this._showMessage({ message, svg });
  },
  showError(message) {
    const errorMessage = CoreHelperUtil.parseError(message);
    this._showMessage({ message: errorMessage, variant: "error" });
  },
  hide() {
    state$k.message = DEFAULT_STATE$1.message;
    state$k.variant = DEFAULT_STATE$1.variant;
    state$k.svg = DEFAULT_STATE$1.svg;
    state$k.open = DEFAULT_STATE$1.open;
    state$k.autoClose = DEFAULT_STATE$1.autoClose;
  },
  _showMessage({ message, svg, variant = "success", autoClose = DEFAULT_STATE$1.autoClose }) {
    if (state$k.open) {
      state$k.open = false;
      setTimeout(() => {
        state$k.message = message;
        state$k.variant = variant;
        state$k.svg = svg;
        state$k.open = true;
        state$k.autoClose = autoClose;
      }, 150);
    } else {
      state$k.message = message;
      state$k.variant = variant;
      state$k.svg = svg;
      state$k.open = true;
      state$k.autoClose = autoClose;
    }
  }
};
const SnackController = controller$c;
const DEFAULT_OPTIONS = {
  purchaseCurrencies: [
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "USD Coin",
      symbol: "USDC",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    },
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "Ether",
      symbol: "ETH",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    }
  ],
  paymentCurrencies: [
    {
      id: "USD",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    },
    {
      id: "EUR",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    }
  ]
};
const baseUrl$2 = CoreHelperUtil.getBlockchainApiUrl();
const state$j = proxy({
  clientId: null,
  api: new FetchUtil({ baseUrl: baseUrl$2, clientId: null }),
  supportedChains: { http: [], ws: [] }
});
const BlockchainApiController = {
  state: state$j,
  async get(request) {
    const { st, sv } = BlockchainApiController.getSdkProperties();
    const projectId = OptionsController.state.projectId;
    const params = {
      ...request.params || {},
      st,
      sv,
      projectId
    };
    return state$j.api.get({
      ...request,
      params
    });
  },
  getSdkProperties() {
    const { sdkType, sdkVersion } = OptionsController.state;
    return {
      st: sdkType || "unknown",
      sv: sdkVersion || "unknown"
    };
  },
  async isNetworkSupported(networkId) {
    if (!networkId) {
      return false;
    }
    try {
      if (!state$j.supportedChains.http.length) {
        await BlockchainApiController.getSupportedNetworks();
      }
    } catch (e2) {
      return false;
    }
    return state$j.supportedChains.http.includes(networkId);
  },
  async getSupportedNetworks() {
    try {
      const supportedChains = await BlockchainApiController.get({
        path: "v1/supported-chains"
      });
      state$j.supportedChains = supportedChains;
      return supportedChains;
    } catch {
      return state$j.supportedChains;
    }
  },
  async fetchIdentity({ address }) {
    const identityCache = StorageUtil.getIdentityFromCacheForAddress(address);
    if (identityCache) {
      return identityCache;
    }
    const result = await BlockchainApiController.get({
      path: `/v1/identity/${address}`,
      params: {
        sender: ChainController.state.activeCaipAddress ? CoreHelperUtil.getPlainAddress(ChainController.state.activeCaipAddress) : void 0
      }
    });
    StorageUtil.updateIdentityCache({
      address,
      identity: result,
      timestamp: Date.now()
    });
    return result;
  },
  async fetchTransactions({ account, cursor, signal, cache, chainId }) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { data: [], next: void 0 };
    }
    const transactionsCache = StorageUtil.getTransactionsCacheForAddress({
      address: account,
      chainId
    });
    if (transactionsCache) {
      return transactionsCache;
    }
    const result = await BlockchainApiController.get({
      path: `/v1/account/${account}/history`,
      params: {
        cursor,
        chainId
      },
      signal,
      cache
    });
    StorageUtil.updateTransactionsCache({
      address: account,
      chainId,
      timestamp: Date.now(),
      transactions: result
    });
    return result;
  },
  async fetchSwapQuote({ amount, userAddress, from, to, gasPrice }) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { quotes: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/quotes`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        amount,
        userAddress,
        from,
        to,
        gasPrice
      }
    });
  },
  async fetchSwapTokens({ chainId }) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { tokens: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/tokens`,
      params: { chainId }
    });
  },
  async getAddressBalance({ caipNetworkId, address }) {
    return state$j.api.post({
      path: `/v1?chainId=${caipNetworkId}&projectId=${OptionsController.state.projectId}`,
      body: {
        id: "1",
        jsonrpc: "2.0",
        method: "getAddressBalance",
        params: { address }
      }
    }).then((result) => result.result);
  },
  async fetchTokenPrice({ addresses, caipNetworkId = ((_a) => (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId)() }) {
    const isSupported = await BlockchainApiController.isNetworkSupported(caipNetworkId);
    if (!isSupported) {
      return { fungibles: [] };
    }
    const tokenPriceCache = StorageUtil.getTokenPriceCacheForAddresses(addresses);
    if (tokenPriceCache) {
      return tokenPriceCache;
    }
    const result = await state$j.api.post({
      path: "/v1/fungible/price",
      body: {
        currency: "usd",
        addresses,
        projectId: OptionsController.state.projectId
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
    StorageUtil.updateTokenPriceCache({
      addresses,
      timestamp: Date.now(),
      tokenPrice: result
    });
    return result;
  },
  async fetchSwapAllowance({ tokenAddress, userAddress }) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { allowance: "0" };
    }
    return BlockchainApiController.get({
      path: `/v1/convert/allowance`,
      params: {
        tokenAddress,
        userAddress
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async fetchGasPrice({ chainId }) {
    var _a;
    const { st, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Gas Price");
    }
    return BlockchainApiController.get({
      path: `/v1/convert/gas-price`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        chainId,
        st,
        sv
      }
    });
  },
  async generateSwapCalldata({ amount, from, to, userAddress, disableEstimate }) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Swaps");
    }
    return state$j.api.post({
      path: "/v1/convert/build-transaction",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        amount,
        eip155: {
          slippage: ConstantsUtil$1.CONVERT_SLIPPAGE_TOLERANCE
        },
        projectId: OptionsController.state.projectId,
        from,
        to,
        userAddress,
        disableEstimate
      }
    });
  },
  async generateApproveCalldata({ from, to, userAddress }) {
    var _a;
    const { st, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      throw new Error("Network not supported for Swaps");
    }
    return BlockchainApiController.get({
      path: `/v1/convert/build-approve`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        userAddress,
        from,
        to,
        st,
        sv
      }
    });
  },
  async getBalance(address, chainId, forceUpdate) {
    var _a;
    const { st, sv } = BlockchainApiController.getSdkProperties();
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      SnackController.showError("Token Balance Unavailable");
      return { balances: [] };
    }
    const caipAddress = `${chainId}:${address}`;
    const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
    if (cachedBalance) {
      return cachedBalance;
    }
    const balance = await BlockchainApiController.get({
      path: `/v1/account/${address}/balance`,
      params: {
        currency: "usd",
        chainId,
        forceUpdate,
        st,
        sv
      }
    });
    StorageUtil.updateBalanceCache({
      caipAddress,
      balance,
      timestamp: Date.now()
    });
    return balance;
  },
  async lookupEnsName(name) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { addresses: {}, attributes: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/profile/account/${name}`,
      params: { apiVersion: "2" }
    });
  },
  async reverseLookupEnsName({ address }) {
    var _a, _b;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return [];
    }
    const sender = (_b = ChainController.getAccountData()) == null ? void 0 : _b.address;
    return BlockchainApiController.get({
      path: `/v1/profile/reverse/${address}`,
      params: {
        sender,
        apiVersion: "2"
      }
    });
  },
  async getEnsNameSuggestions(name) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { suggestions: [] };
    }
    return BlockchainApiController.get({
      path: `/v1/profile/suggestions/${name}`,
      params: { zone: "reown.id" }
    });
  },
  async registerEnsName({ coinType, address, message, signature }) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { success: false };
    }
    return state$j.api.post({
      path: `/v1/profile/account`,
      body: { coin_type: coinType, address, message, signature },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return "";
    }
    const response = await state$j.api.post({
      path: `/v1/generators/onrampurl`,
      params: {
        projectId: OptionsController.state.projectId
      },
      body: {
        destinationWallets,
        defaultNetwork,
        partnerUserId,
        defaultExperience: "buy",
        presetCryptoAmount: purchaseAmount,
        presetFiatAmount: paymentAmount
      }
    });
    return response.url;
  },
  async getOnrampOptions() {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { paymentCurrencies: [], purchaseCurrencies: [] };
    }
    try {
      const response = await BlockchainApiController.get({
        path: `/v1/onramp/options`
      });
      return response;
    } catch (e2) {
      return DEFAULT_OPTIONS;
    }
  },
  async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
    var _a;
    try {
      const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
      if (!isSupported) {
        return null;
      }
      const response = await state$j.api.post({
        path: `/v1/onramp/quote`,
        params: {
          projectId: OptionsController.state.projectId
        },
        body: {
          purchaseCurrency,
          paymentCurrency,
          amount,
          network
        }
      });
      return response;
    } catch (e2) {
      return {
        networkFee: { amount, currency: paymentCurrency.id },
        paymentSubtotal: { amount, currency: paymentCurrency.id },
        paymentTotal: { amount, currency: paymentCurrency.id },
        purchaseAmount: { amount, currency: paymentCurrency.id },
        quoteId: "mocked-quote-id"
      };
    }
  },
  async getSmartSessions(caipAddress) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return [];
    }
    return BlockchainApiController.get({
      path: `/v1/sessions/${caipAddress}`
    });
  },
  async revokeSmartSession(address, pci, signature) {
    var _a;
    const isSupported = await BlockchainApiController.isNetworkSupported((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    if (!isSupported) {
      return { success: false };
    }
    return state$j.api.post({
      path: `/v1/sessions/${address}/revoke`,
      params: {
        projectId: OptionsController.state.projectId
      },
      body: {
        pci,
        signature
      }
    });
  },
  setClientId(clientId) {
    state$j.clientId = clientId;
    state$j.api = new FetchUtil({ baseUrl: baseUrl$2, clientId });
  }
};
const DEFAULT_STATE = Object.freeze({
  enabled: true,
  events: []
});
const api$2 = new FetchUtil({ baseUrl: CoreHelperUtil.getAnalyticsUrl(), clientId: null });
const MAX_ERRORS_PER_MINUTE = 5;
const ONE_MINUTE_MS = 60 * 1e3;
const state$i = proxy({
  ...DEFAULT_STATE
});
const TelemetryController = {
  state: state$i,
  subscribeKey(key, callback) {
    return subscribeKey(state$i, key, callback);
  },
  async sendError(error, category) {
    if (!state$i.enabled) {
      return;
    }
    const now = Date.now();
    const recentErrors = state$i.events.filter((event) => {
      const eventTime = new Date(event.properties.timestamp || "").getTime();
      return now - eventTime < ONE_MINUTE_MS;
    });
    if (recentErrors.length >= MAX_ERRORS_PER_MINUTE) {
      return;
    }
    const errorEvent = {
      type: "error",
      event: category,
      properties: {
        errorType: error.name,
        errorMessage: error.message,
        stackTrace: error.stack,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    state$i.events.push(errorEvent);
    try {
      if (typeof window === "undefined") {
        return;
      }
      const { projectId, sdkType, sdkVersion } = OptionsController.state;
      await api$2.post({
        path: "/e",
        params: {
          projectId,
          st: sdkType,
          sv: sdkVersion || "html-wagmi-4.2.2"
        },
        body: {
          eventId: CoreHelperUtil.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          props: {
            type: "error",
            event: category,
            errorType: error.name,
            errorMessage: error.message,
            stackTrace: error.stack
          }
        }
      });
    } catch {
    }
  },
  enable() {
    state$i.enabled = true;
  },
  disable() {
    state$i.enabled = false;
  },
  clearEvents() {
    state$i.events = [];
  }
};
class AppKitError extends Error {
  constructor(message, category, originalError) {
    super(message);
    this.originalName = "AppKitError";
    this.name = "AppKitError";
    this.category = category;
    this.originalError = originalError;
    if (originalError && originalError instanceof Error) {
      this.originalName = originalError.name;
    }
    Object.setPrototypeOf(this, AppKitError.prototype);
    let isStackConstructedFromOriginal = false;
    if (originalError instanceof Error && typeof originalError.stack === "string" && originalError.stack) {
      const originalErrorStack = originalError.stack;
      const firstNewlineIndex = originalErrorStack.indexOf("\n");
      if (firstNewlineIndex > -1) {
        const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
        this.stack = `${this.name}: ${this.message}
${originalFrames}`;
        isStackConstructedFromOriginal = true;
      }
    }
    if (!isStackConstructedFromOriginal) {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, AppKitError);
      } else if (!this.stack) {
        this.stack = `${this.name}: ${this.message}`;
      }
    }
  }
}
function errorHandler(err, defaultCategory) {
  let errMessage = "";
  try {
    if (err instanceof Error) {
      errMessage = err.message;
    } else if (typeof err === "string") {
      errMessage = err;
    } else if (typeof err === "object" && err !== null) {
      if (Object.keys(err).length === 0) {
        errMessage = "Unknown error";
      } else {
        errMessage = (err == null ? void 0 : err.message) || JSON.stringify(err);
      }
    } else {
      errMessage = String(err);
    }
  } catch (_error) {
    errMessage = "Unknown error";
    console.error("Error parsing error message", _error);
  }
  const error = err instanceof AppKitError ? err : new AppKitError(errMessage, defaultCategory, err);
  TelemetryController.sendError(error, error.category);
  throw error;
}
function withErrorBoundary(controller2, defaultCategory = "INTERNAL_SDK_ERROR") {
  const newController = {};
  Object.keys(controller2).forEach((key) => {
    const original = controller2[key];
    if (typeof original === "function") {
      let wrapped = original;
      if (original.constructor.name === "AsyncFunction") {
        wrapped = async (...args) => {
          try {
            return await original(...args);
          } catch (err) {
            return errorHandler(err, defaultCategory);
          }
        };
      } else {
        wrapped = (...args) => {
          try {
            return original(...args);
          } catch (err) {
            return errorHandler(err, defaultCategory);
          }
        };
      }
      newController[key] = wrapped;
    } else {
      newController[key] = original;
    }
  });
  return newController;
}
const state$h = proxy({
  walletImages: {},
  networkImages: {},
  chainImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
});
const controller$b = {
  state: state$h,
  subscribeNetworkImages(callback) {
    return subscribe(state$h.networkImages, () => callback(state$h.networkImages));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$h, key, callback);
  },
  subscribe(callback) {
    return subscribe(state$h, () => callback(state$h));
  },
  setWalletImage(key, value) {
    state$h.walletImages[key] = value;
  },
  setNetworkImage(key, value) {
    state$h.networkImages[key] = value;
  },
  setChainImage(key, value) {
    state$h.chainImages[key] = value;
  },
  setConnectorImage(key, value) {
    state$h.connectorImages = { ...state$h.connectorImages, [key]: value };
  },
  setTokenImage(key, value) {
    state$h.tokenImages[key] = value;
  },
  setCurrencyImage(key, value) {
    state$h.currencyImages[key] = value;
  }
};
const AssetController = withErrorBoundary(controller$b);
const namespaceImageIds = {
  // Ethereum
  eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
  // Solana
  solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
  // Polkadot
  polkadot: "",
  // Bitcoin
  bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
  // Cosmos
  cosmos: "",
  // Sui
  sui: "",
  // Stacks
  stacks: "",
  // TON
  ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
};
const state$g = proxy({
  networkImagePromises: {},
  tokenImagePromises: {}
});
const AssetUtil = {
  async fetchWalletImage(imageId) {
    if (!imageId) {
      return void 0;
    }
    await ApiController._fetchWalletImage(imageId);
    return this.getWalletImageById(imageId);
  },
  async fetchNetworkImage(imageId) {
    if (!imageId) {
      return void 0;
    }
    const existingImage = this.getNetworkImageById(imageId);
    if (existingImage) {
      return existingImage;
    }
    if (!state$g.networkImagePromises[imageId]) {
      state$g.networkImagePromises[imageId] = ApiController._fetchNetworkImage(imageId);
    }
    await state$g.networkImagePromises[imageId];
    return this.getNetworkImageById(imageId);
  },
  /**
   * Fetches the token image for the given image ID.
   * @param imageId - The image id of the token.
   * @returns The token image.
   */
  async fetchTokenImage(imageId) {
    if (!imageId) {
      return void 0;
    }
    if (!state$g.tokenImagePromises[imageId]) {
      state$g.tokenImagePromises[imageId] = ApiController._fetchTokenImage(imageId);
    }
    await state$g.tokenImagePromises[imageId];
    return this.getTokenImage(imageId);
  },
  getWalletImageById(imageId) {
    if (!imageId) {
      return void 0;
    }
    return AssetController.state.walletImages[imageId];
  },
  getWalletImage(wallet) {
    if (wallet == null ? void 0 : wallet.image_url) {
      return wallet == null ? void 0 : wallet.image_url;
    }
    if (wallet == null ? void 0 : wallet.image_id) {
      return AssetController.state.walletImages[wallet.image_id];
    }
    return void 0;
  },
  getNetworkImage(network) {
    var _a, _b, _c;
    if ((_a = network == null ? void 0 : network.assets) == null ? void 0 : _a.imageUrl) {
      return (_b = network == null ? void 0 : network.assets) == null ? void 0 : _b.imageUrl;
    }
    if ((_c = network == null ? void 0 : network.assets) == null ? void 0 : _c.imageId) {
      return AssetController.state.networkImages[network.assets.imageId];
    }
    return void 0;
  },
  getNetworkImageById(imageId) {
    if (!imageId) {
      return void 0;
    }
    return AssetController.state.networkImages[imageId];
  },
  getConnectorImage(connector) {
    var _a;
    if (connector == null ? void 0 : connector.imageUrl) {
      return connector.imageUrl;
    }
    if ((_a = connector == null ? void 0 : connector.info) == null ? void 0 : _a.icon) {
      return connector.info.icon;
    }
    if (connector == null ? void 0 : connector.imageId) {
      return AssetController.state.connectorImages[connector.imageId];
    }
    return void 0;
  },
  getChainImage(chain) {
    return AssetController.state.networkImages[namespaceImageIds[chain]];
  },
  getTokenImage(symbol) {
    if (!symbol) {
      return void 0;
    }
    return AssetController.state.tokenImages[symbol];
  },
  /**
   * Get the explorer wallet's image URL for the given image ID.
   * @param imageId - The image id of the wallet.
   * @returns The image URL for the wallet.
   */
  getWalletImageUrl(imageId) {
    if (!imageId) {
      return "";
    }
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    const url = new URL(`${ConstantsUtil$2.W3M_API_URL}/getWalletImage/${imageId}`);
    url.searchParams.set("projectId", projectId);
    url.searchParams.set("st", sdkType);
    url.searchParams.set("sv", sdkVersion);
    return url.toString();
  },
  /**
   * Get the public asset's image URL with the given image ID.
   * @param imageId - The image id of the asset.
   * @returns The image URL for the asset.
   */
  getAssetImageUrl(imageId) {
    if (!imageId) {
      return "";
    }
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    const url = new URL(`${ConstantsUtil$2.W3M_API_URL}/public/getAssetImage/${imageId}`);
    url.searchParams.set("projectId", projectId);
    url.searchParams.set("st", sdkType);
    url.searchParams.set("sv", sdkVersion);
    return url.toString();
  },
  /**
   * Get the image URL for the given chain namespace.
   * @param chainNamespace - The chain namespace to get the image URL for.
   * @returns The image URL for the chain namespace.
   */
  getChainNamespaceImageUrl(chainNamespace) {
    return this.getAssetImageUrl(namespaceImageIds[chainNamespace]);
  },
  /**
   * Get the image id for the given token and namespace.
   * @param token - The token address or 'native' to get the image id for.
   * @param namespace - The namespace to get the image id for.
   * @returns The image URL for the token.
   */
  async getImageByToken(token, namespace) {
    if (token === "native") {
      const imageId = ConstantsUtil$2.NATIVE_IMAGE_IDS_BY_NAMESPACE[namespace] ?? null;
      if (!imageId) {
        return void 0;
      }
      return AssetUtil.fetchNetworkImage(imageId);
    }
    const [, symbol] = Object.entries(ConstantsUtil$2.TOKEN_SYMBOLS_BY_ADDRESS).find(([address]) => address.toLowerCase() === token.toLowerCase()) ?? [];
    if (!symbol) {
      return void 0;
    }
    return AssetUtil.fetchTokenImage(symbol);
  }
};
const CUSTOM_DEEPLINK_WALLETS = {
  PHANTOM: {
    id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    url: "https://phantom.app"
  },
  SOLFLARE: {
    id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    url: "https://solflare.com"
  },
  COINBASE: {
    id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    url: "https://go.cb-w.com"
  },
  /*
   * Got details from their npm package:
   * https://www.npmjs.com/package/@binance/w3w-utils?activeTab=code
   * https://developers.binance.com/docs/binance-w3w/evm-compatible-provider#getdeeplink
   */
  BINANCE: {
    id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
    appId: "yFK5FCqYprrXDiVFbhyRx7",
    deeplink: "bnc://app.binance.com/mp/app",
    url: "https://app.binance.com/en/download"
  }
};
const MobileWalletUtil = {
  /**
   * Handles mobile wallet redirection for wallets that have Universal Links and doesn't support WalletConnect Deep Links.
   *
   * @param {string} id - The id of the wallet.
   * @param {ChainNamespace} namespace - The namespace of the chain.
   */
  handleMobileDeeplinkRedirect(id, namespace) {
    const href = window.location.href;
    const encodedHref = encodeURIComponent(href);
    if (id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id && !("phantom" in window)) {
      const protocol = href.startsWith("https") ? "https" : "http";
      const host = href.split("/")[2];
      const encodedRef = encodeURIComponent(`${protocol}://${host}`);
      window.location.href = `${CUSTOM_DEEPLINK_WALLETS.PHANTOM.url}/ul/browse/${encodedHref}?ref=${encodedRef}`;
    }
    if (id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id && !("solflare" in window)) {
      window.location.href = `${CUSTOM_DEEPLINK_WALLETS.SOLFLARE.url}/ul/v1/browse/${encodedHref}?ref=${encodedHref}`;
    }
    if (namespace === ConstantsUtil$2.CHAIN.SOLANA) {
      if (id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id && !("coinbaseSolana" in window)) {
        window.location.href = `${CUSTOM_DEEPLINK_WALLETS.COINBASE.url}/dapp?cb_url=${encodedHref}`;
      }
    }
    if (namespace === ConstantsUtil$2.CHAIN.BITCOIN) {
      if (id === CUSTOM_DEEPLINK_WALLETS.BINANCE.id && !("binancew3w" in window)) {
        const activeCaipNetwork = ChainController.state.activeCaipNetwork;
        const startPagePath = window.btoa("/pages/browser/index");
        const startPageQuery = window.btoa(`url=${encodedHref}&defaultChainId=${(activeCaipNetwork == null ? void 0 : activeCaipNetwork.id) ?? 1}`);
        const deeplink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.deeplink);
        deeplink.searchParams.set("appId", CUSTOM_DEEPLINK_WALLETS.BINANCE.appId);
        deeplink.searchParams.set("startPagePath", startPagePath);
        deeplink.searchParams.set("startPageQuery", startPageQuery);
        const universalLink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.url);
        universalLink.searchParams.set("_dp", window.btoa(deeplink.toString()));
        window.location.href = universalLink.toString();
      }
    }
  }
};
const baseUrl$1 = CoreHelperUtil.getAnalyticsUrl();
const api$1 = new FetchUtil({ baseUrl: baseUrl$1, clientId: null });
const excluded = ["MODAL_CREATED"];
const MAX_PENDING_EVENTS_KB = 45;
const FLUSH_EVENTS_INTERVAL_MS = 1e3 * 10;
const state$f = proxy({
  timestamp: Date.now(),
  lastFlush: Date.now(),
  reportedErrors: {},
  data: {
    type: "track",
    event: "MODAL_CREATED"
  },
  pendingEvents: [],
  subscribedToVisibilityChange: false,
  walletImpressions: []
});
const EventsController = {
  state: state$f,
  subscribe(callback) {
    return subscribe(state$f, () => callback(state$f));
  },
  getSdkProperties() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      projectId,
      st: sdkType,
      sv: sdkVersion || "html-wagmi-4.2.2"
    };
  },
  shouldFlushEvents() {
    const isOverMaxSize = JSON.stringify(state$f.pendingEvents).length / 1024 > MAX_PENDING_EVENTS_KB;
    const isExpired = state$f.lastFlush + FLUSH_EVENTS_INTERVAL_MS < Date.now();
    return isOverMaxSize || isExpired;
  },
  _setPendingEvent(payload) {
    var _a, _b;
    try {
      let address = (_a = ChainController.getAccountData()) == null ? void 0 : _a.address;
      if ("address" in payload.data && payload.data.address) {
        address = payload.data.address;
      }
      if (excluded.includes(payload.data.event) || typeof window === "undefined") {
        return;
      }
      const caipNetworkId = (_b = ChainController.getActiveCaipNetwork()) == null ? void 0 : _b.caipNetworkId;
      this.state.pendingEvents.push({
        eventId: CoreHelperUtil.getUUID(),
        url: window.location.href,
        domain: window.location.hostname,
        timestamp: payload.timestamp,
        props: {
          ...payload.data,
          address,
          properties: {
            ..."properties" in payload.data ? payload.data.properties : {},
            caipNetworkId
          }
        }
      });
      state$f.reportedErrors["FORBIDDEN"] = false;
      const shouldFlush = EventsController.shouldFlushEvents();
      if (shouldFlush) {
        EventsController._submitPendingEvents();
      }
    } catch (err) {
      console.warn("_setPendingEvent", err);
    }
  },
  sendEvent(data) {
    var _a;
    state$f.timestamp = Date.now();
    state$f.data = data;
    const MANDATORY_EVENTS = [
      "INITIALIZE",
      "CONNECT_SUCCESS",
      "SOCIAL_LOGIN_SUCCESS"
    ];
    if (((_a = OptionsController.state.features) == null ? void 0 : _a.analytics) || MANDATORY_EVENTS.includes(data.event)) {
      EventsController._setPendingEvent(state$f);
    }
    this.subscribeToFlushTriggers();
  },
  /**
   * Adds a wallet impression item to the aggregated list. These are flushed as a single
   * WALLET_IMPRESSION_V2 batch in _submitPendingEvents.
   */
  sendWalletImpressionEvent(item) {
    state$f.walletImpressions.push(item);
  },
  _transformPendingEventsForBatch(events) {
    try {
      return events.filter((evt) => {
        const eventName = evt.props.event;
        return eventName !== "WALLET_IMPRESSION_V2";
      });
    } catch {
      return events;
    }
  },
  _submitPendingEvents() {
    state$f.lastFlush = Date.now();
    if (state$f.pendingEvents.length === 0 && state$f.walletImpressions.length === 0) {
      return;
    }
    try {
      const batch = EventsController._transformPendingEventsForBatch(state$f.pendingEvents);
      if (state$f.walletImpressions.length) {
        batch.push({
          eventId: CoreHelperUtil.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [...state$f.walletImpressions]
          }
        });
      }
      api$1.sendBeacon({
        path: "/batch",
        params: EventsController.getSdkProperties(),
        body: batch
      });
      state$f.reportedErrors["FORBIDDEN"] = false;
      state$f.pendingEvents = [];
      state$f.walletImpressions = [];
    } catch (err) {
      state$f.reportedErrors["FORBIDDEN"] = true;
    }
  },
  subscribeToFlushTriggers() {
    var _a, _b, _c;
    if (state$f.subscribedToVisibilityChange) {
      return;
    }
    if (typeof document === "undefined") {
      return;
    }
    state$f.subscribedToVisibilityChange = true;
    (_a = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a.call(document, "visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        EventsController._submitPendingEvents();
      }
    });
    (_b = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b.call(document, "freeze", () => {
      EventsController._submitPendingEvents();
    });
    (_c = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c.call(window, "pagehide", () => {
      EventsController._submitPendingEvents();
    });
    setInterval(() => {
      EventsController._submitPendingEvents();
    }, FLUSH_EVENTS_INTERVAL_MS);
  }
};
const baseUrl = CoreHelperUtil.getApiUrl();
const api = new FetchUtil({
  baseUrl,
  clientId: null
});
const entries = 40;
const recommendedEntries = 4;
const imageCountToFetch = 20;
const state$e = proxy({
  promises: {},
  page: 1,
  count: 0,
  featured: [],
  allFeatured: [],
  recommended: [],
  allRecommended: [],
  wallets: [],
  filteredWallets: [],
  search: [],
  isAnalyticsEnabled: false,
  excludedWallets: [],
  isFetchingRecommendedWallets: false,
  explorerWallets: [],
  explorerFilteredWallets: [],
  plan: {
    tier: "none",
    hasExceededUsageLimit: false,
    limits: {
      isAboveRpcLimit: false,
      isAboveMauLimit: false
    }
  }
});
const ApiController = {
  state: state$e,
  subscribeKey(key, callback) {
    return subscribeKey(state$e, key, callback);
  },
  _getSdkProperties() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      projectId,
      st: sdkType || "appkit",
      sv: sdkVersion || "html-wagmi-4.2.2"
    };
  },
  _filterOutExtensions(wallets) {
    if (OptionsController.state.isUniversalProvider) {
      return wallets.filter((w2) => Boolean(w2.mobile_link || w2.desktop_link || w2.webapp_link));
    }
    return wallets;
  },
  async _fetchWalletImage(imageId) {
    const imageUrl = `${api.baseUrl}/getWalletImage/${imageId}`;
    const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setWalletImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchNetworkImage(imageId) {
    const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setNetworkImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchConnectorImage(imageId) {
    const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setConnectorImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchCurrencyImage(countryCode) {
    const imageUrl = `${api.baseUrl}/public/getCurrencyImage/${countryCode}`;
    const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setCurrencyImage(countryCode, URL.createObjectURL(blob));
  },
  async _fetchTokenImage(symbol) {
    const imageUrl = `${api.baseUrl}/public/getTokenImage/${symbol}`;
    const blob = await api.getBlob({ path: imageUrl, params: ApiController._getSdkProperties() });
    AssetController.setTokenImage(symbol, URL.createObjectURL(blob));
  },
  _filterWalletsByPlatform(wallets) {
    const walletsLength = wallets.length;
    const filteredWallets = CoreHelperUtil.isMobile() ? wallets == null ? void 0 : wallets.filter((w2) => {
      if (w2.mobile_link || w2.webapp_link) {
        return true;
      }
      const customDeeplinkWalletIds = Object.values(CUSTOM_DEEPLINK_WALLETS).map((wallet) => wallet.id);
      return customDeeplinkWalletIds.includes(w2.id);
    }) : wallets;
    const mobileFilteredOutWalletsLength = walletsLength - filteredWallets.length;
    return { filteredWallets, mobileFilteredOutWalletsLength };
  },
  async fetchProjectConfig() {
    const response = await api.get({
      path: "/appkit/v1/config",
      params: ApiController._getSdkProperties()
    });
    return response.features;
  },
  async fetchUsage() {
    try {
      const response = await api.get({
        path: "/appkit/v1/project-limits",
        params: ApiController._getSdkProperties()
      });
      const { tier, isAboveMauLimit, isAboveRpcLimit } = response.planLimits;
      const isStarterPlan = tier === "starter";
      const isAboveUsageLimit = isAboveMauLimit || isAboveRpcLimit;
      ApiController.state.plan = {
        tier,
        hasExceededUsageLimit: isStarterPlan && isAboveUsageLimit,
        limits: {
          isAboveRpcLimit,
          isAboveMauLimit
        }
      };
    } catch (e2) {
      console.warn("Failed to fetch usage", e2);
    }
  },
  async fetchAllowedOrigins() {
    try {
      const { allowedOrigins } = await api.get({
        path: "/projects/v1/origins",
        params: ApiController._getSdkProperties()
      });
      return allowedOrigins;
    } catch (error) {
      if (error instanceof Error && error.cause instanceof Response) {
        const status = error.cause.status;
        if (status === ConstantsUtil$2.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) {
          throw new Error("RATE_LIMITED", { cause: error });
        }
        if (status >= ConstantsUtil$2.HTTP_STATUS_CODES.SERVER_ERROR && status < 600) {
          throw new Error("SERVER_ERROR", { cause: error });
        }
        return [];
      }
      return [];
    }
  },
  async fetchNetworkImages() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const ids = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.map(({ assets }) => assets == null ? void 0 : assets.imageId).filter(Boolean).filter((imageId) => !AssetUtil.getNetworkImageById(imageId));
    if (ids) {
      await Promise.allSettled(ids.map((id) => ApiController._fetchNetworkImage(id)));
    }
  },
  async fetchConnectorImages() {
    const { connectors } = ConnectorController.state;
    const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
    await Promise.allSettled(ids.map((id) => ApiController._fetchConnectorImage(id)));
  },
  async fetchCurrencyImages(currencies = []) {
    await Promise.allSettled(currencies.map((currency) => ApiController._fetchCurrencyImage(currency)));
  },
  async fetchTokenImages(tokens2 = []) {
    await Promise.allSettled(tokens2.map((token) => ApiController._fetchTokenImage(token)));
  },
  async fetchWallets(params) {
    var _a;
    const exclude = params.exclude ?? [];
    const sdkProperties = ApiController._getSdkProperties();
    if (sdkProperties.sv.startsWith("html-core-")) {
      exclude.push(...Object.values(CUSTOM_DEEPLINK_WALLETS).map((w2) => w2.id));
    }
    const wallets = await api.get({
      path: "/getWallets",
      params: {
        ...ApiController._getSdkProperties(),
        ...params,
        page: String(params.page),
        entries: String(params.entries),
        include: (_a = params.include) == null ? void 0 : _a.join(","),
        exclude: exclude.join(",")
      }
    });
    const { filteredWallets, mobileFilteredOutWalletsLength } = ApiController._filterWalletsByPlatform(wallets == null ? void 0 : wallets.data);
    return {
      data: filteredWallets || [],
      // Keep original count for display on main page
      count: wallets == null ? void 0 : wallets.count,
      mobileFilteredOutWalletsLength
    };
  },
  async prefetchWalletRanks() {
    const connectors = ConnectorController.state.connectors;
    if (!(connectors == null ? void 0 : connectors.length)) {
      return;
    }
    const params = {
      page: 1,
      entries: 20,
      badge: "certified"
    };
    params.names = connectors.map((c2) => c2.name).join(",");
    if (ChainController.state.activeChain === ConstantsUtil$2.CHAIN.EVM) {
      const rdnsCandidates = [
        ...connectors.flatMap((c2) => {
          var _a;
          return ((_a = c2.connectors) == null ? void 0 : _a.map((sc) => {
            var _a2;
            return (_a2 = sc.info) == null ? void 0 : _a2.rdns;
          })) || [];
        }),
        ...connectors.map((c2) => {
          var _a;
          return (_a = c2.info) == null ? void 0 : _a.rdns;
        })
      ].filter((val) => typeof val === "string" && val.length > 0);
      if (rdnsCandidates.length) {
        params.rdns = rdnsCandidates.join(",");
      }
    }
    const { data } = await ApiController.fetchWallets(params);
    state$e.explorerWallets = data;
    ConnectorController.extendConnectorsWithExplorerWallets(data);
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state$e.explorerFilteredWallets = data.filter((wallet) => {
      var _a;
      return (_a = wallet.chains) == null ? void 0 : _a.some((chain) => caipNetworkIds.includes(chain));
    });
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds } = OptionsController.state;
    if (featuredWalletIds == null ? void 0 : featuredWalletIds.length) {
      const params = {
        ...ApiController._getSdkProperties(),
        page: 1,
        entries: (featuredWalletIds == null ? void 0 : featuredWalletIds.length) ?? recommendedEntries,
        include: featuredWalletIds
      };
      const { data } = await ApiController.fetchWallets(params);
      const sortedData = [...data].sort((a2, b2) => featuredWalletIds.indexOf(a2.id) - featuredWalletIds.indexOf(b2.id));
      const images = sortedData.map((d2) => d2.image_id).filter(Boolean);
      await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
      state$e.featured = sortedData;
      state$e.allFeatured = sortedData;
    }
  },
  async fetchRecommendedWallets() {
    try {
      state$e.isFetchingRecommendedWallets = true;
      const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
      const exclude = [...excludeWalletIds ?? [], ...featuredWalletIds ?? []].filter(Boolean);
      const chains = ChainController.getRequestedCaipNetworkIds().join(",");
      const params = {
        page: 1,
        entries: recommendedEntries,
        include: includeWalletIds,
        exclude,
        chains
      };
      const { data, count } = await ApiController.fetchWallets(params);
      const recent = StorageUtil.getRecentWallets();
      const recommendedImages = data.map((d2) => d2.image_id).filter(Boolean);
      const recentImages = recent.map((r2) => r2.image_id).filter(Boolean);
      await Promise.allSettled([...recommendedImages, ...recentImages].map((id) => ApiController._fetchWalletImage(id)));
      state$e.recommended = data;
      state$e.allRecommended = data;
      state$e.count = count ?? 0;
    } catch {
    } finally {
      state$e.isFetchingRecommendedWallets = false;
    }
  },
  async fetchWalletsByPage({ page }) {
    const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
    const chains = ChainController.getRequestedCaipNetworkIds().join(",");
    const exclude = [
      ...state$e.recommended.map(({ id }) => id),
      ...excludeWalletIds ?? [],
      ...featuredWalletIds ?? []
    ].filter(Boolean);
    const params = {
      page,
      entries,
      include: includeWalletIds,
      exclude,
      chains
    };
    const { data, count, mobileFilteredOutWalletsLength } = await ApiController.fetchWallets(params);
    state$e.mobileFilteredOutWalletsLength = mobileFilteredOutWalletsLength + (state$e.mobileFilteredOutWalletsLength ?? 0);
    const images = data.slice(0, imageCountToFetch).map((w2) => w2.image_id).filter(Boolean);
    await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
    state$e.wallets = CoreHelperUtil.uniqueBy([...state$e.wallets, ...ApiController._filterOutExtensions(data)], "id").filter((w2) => {
      var _a;
      return (_a = w2.chains) == null ? void 0 : _a.some((chain) => chains.includes(chain));
    });
    state$e.count = count > state$e.count ? count : state$e.count;
    state$e.page = page;
  },
  async initializeExcludedWallets({ ids }) {
    const params = {
      page: 1,
      entries: ids.length,
      include: ids
    };
    const { data } = await ApiController.fetchWallets(params);
    if (data) {
      data.forEach((wallet) => {
        state$e.excludedWallets.push({ rdns: wallet.rdns, name: wallet.name });
      });
    }
  },
  async searchWallet({ search, badge }) {
    const { includeWalletIds, excludeWalletIds } = OptionsController.state;
    const chains = ChainController.getRequestedCaipNetworkIds().join(",");
    state$e.search = [];
    const params = {
      page: 1,
      entries: 100,
      search: search == null ? void 0 : search.trim(),
      badge_type: badge,
      include: includeWalletIds,
      exclude: excludeWalletIds,
      chains
    };
    const { data } = await ApiController.fetchWallets(params);
    EventsController.sendEvent({
      type: "track",
      event: "SEARCH_WALLET",
      properties: { badge: badge ?? "", search: search ?? "" }
    });
    const images = data.map((w2) => w2.image_id).filter(Boolean);
    await Promise.allSettled([
      ...images.map((id) => ApiController._fetchWalletImage(id)),
      CoreHelperUtil.wait(300)
    ]);
    state$e.search = ApiController._filterOutExtensions(data);
  },
  initPromise(key, fetchFn) {
    const existingPromise = state$e.promises[key];
    if (existingPromise) {
      return existingPromise;
    }
    return state$e.promises[key] = fetchFn();
  },
  prefetch({ fetchConnectorImages = true, fetchFeaturedWallets = true, fetchRecommendedWallets = true, fetchNetworkImages = true, fetchWalletRanks = true } = {}) {
    const promises = [
      fetchConnectorImages && ApiController.initPromise("connectorImages", ApiController.fetchConnectorImages),
      fetchFeaturedWallets && ApiController.initPromise("featuredWallets", ApiController.fetchFeaturedWallets),
      fetchRecommendedWallets && ApiController.initPromise("recommendedWallets", ApiController.fetchRecommendedWallets),
      fetchNetworkImages && ApiController.initPromise("networkImages", ApiController.fetchNetworkImages),
      fetchWalletRanks && ApiController.initPromise("walletRanks", ApiController.prefetchWalletRanks)
    ].filter(Boolean);
    return Promise.allSettled(promises);
  },
  prefetchAnalyticsConfig() {
    var _a;
    if ((_a = OptionsController.state.features) == null ? void 0 : _a.analytics) {
      ApiController.fetchAnalyticsConfig();
    }
  },
  async fetchAnalyticsConfig() {
    try {
      const { isAnalyticsEnabled } = await api.get({
        path: "/getAnalyticsConfig",
        params: ApiController._getSdkProperties()
      });
      OptionsController.setFeatures({ analytics: isAnalyticsEnabled });
    } catch (error) {
      OptionsController.setFeatures({ analytics: false });
    }
  },
  filterByNamespaces(namespaces) {
    if (!(namespaces == null ? void 0 : namespaces.length)) {
      state$e.featured = state$e.allFeatured;
      state$e.recommended = state$e.allRecommended;
      return;
    }
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state$e.featured = state$e.allFeatured.filter((wallet) => {
      var _a;
      return (_a = wallet.chains) == null ? void 0 : _a.some((chain) => caipNetworkIds.includes(chain));
    });
    state$e.recommended = state$e.allRecommended.filter((wallet) => {
      var _a;
      return (_a = wallet.chains) == null ? void 0 : _a.some((chain) => caipNetworkIds.includes(chain));
    });
    state$e.filteredWallets = state$e.wallets.filter((wallet) => {
      var _a;
      return (_a = wallet.chains) == null ? void 0 : _a.some((chain) => caipNetworkIds.includes(chain));
    });
  },
  clearFilterByNamespaces() {
    state$e.filteredWallets = [];
  },
  setFilterByNamespace(namespace) {
    if (!namespace) {
      state$e.featured = state$e.allFeatured;
      state$e.recommended = state$e.allRecommended;
      return;
    }
    const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
    state$e.featured = state$e.allFeatured.filter((wallet) => {
      var _a;
      return (_a = wallet.chains) == null ? void 0 : _a.some((chain) => caipNetworkIds.includes(chain));
    });
    state$e.recommended = state$e.allRecommended.filter((wallet) => {
      var _a;
      return (_a = wallet.chains) == null ? void 0 : _a.some((chain) => caipNetworkIds.includes(chain));
    });
    state$e.filteredWallets = state$e.wallets.filter((wallet) => {
      var _a;
      return (_a = wallet.chains) == null ? void 0 : _a.some((chain) => caipNetworkIds.includes(chain));
    });
  }
};
const WalletUtil = {
  filterOutDuplicatesByRDNS(wallets) {
    const connectors = OptionsController.state.enableEIP6963 ? ConnectorController.state.connectors : [];
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = connectors.map((connector) => {
      var _a;
      return (_a = connector.info) == null ? void 0 : _a.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => {
      if ((wallet == null ? void 0 : wallet.rdns) && allRDNSs.includes(String(wallet.rdns))) {
        return false;
      }
      if (!(wallet == null ? void 0 : wallet.rdns)) {
        const hasMatchingConnectorName = connectors.some((connector) => connector.name === wallet.name);
        if (hasMatchingConnectorName) {
          return false;
        }
      }
      return true;
    });
    return filtered;
  },
  filterOutDuplicatesByIds(wallets) {
    const connectors = ConnectorController.state.connectors.filter((connector) => connector.type === "ANNOUNCED" || connector.type === "INJECTED" || connector.type === "MULTI_CHAIN");
    const recent = StorageUtil.getRecentWallets();
    const connectorIds = connectors.map((connector) => {
      var _a;
      return connector.explorerId || ((_a = connector.explorerWallet) == null ? void 0 : _a.id) || connector.id;
    });
    const recentIds = recent.map((wallet) => wallet.id);
    const allIds = connectorIds.concat(recentIds);
    const filtered = wallets.filter((wallet) => !allIds.includes(wallet == null ? void 0 : wallet.id));
    return filtered;
  },
  filterOutDuplicateWallets(wallets) {
    const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
    const uniqueWallets = this.filterOutDuplicatesByIds(uniqueByRDNS);
    return uniqueWallets;
  },
  /**
   * Marks wallets as installed based on available connectors and sorts them
   * according to both installation status and featuredWalletIds order.
   *
   * @param wallets - Array of wallets to process
   * @returns Array of wallets marked as installed and sorted by priority
   */
  markWalletsAsInstalled(wallets) {
    const { connectors } = ConnectorController.state;
    const { featuredWalletIds } = OptionsController.state;
    const installedWalletRdnsMap = connectors.filter((connector) => connector.type === "ANNOUNCED").reduce((rdnsMap, connector) => {
      var _a;
      if (!((_a = connector.info) == null ? void 0 : _a.rdns)) {
        return rdnsMap;
      }
      rdnsMap[connector.info.rdns] = true;
      return rdnsMap;
    }, {});
    const walletsWithInstallationStatus = wallets.map((wallet) => ({
      ...wallet,
      installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[wallet.rdns ?? ""])
    }));
    const sortedWallets = walletsWithInstallationStatus.sort((walletA, walletB) => {
      const installationComparison = Number(walletB.installed) - Number(walletA.installed);
      if (installationComparison !== 0) {
        return installationComparison;
      }
      if (featuredWalletIds == null ? void 0 : featuredWalletIds.length) {
        const walletAFeaturedIndex = featuredWalletIds.indexOf(walletA.id);
        const walletBFeaturedIndex = featuredWalletIds.indexOf(walletB.id);
        if (walletAFeaturedIndex !== -1 && walletBFeaturedIndex !== -1) {
          return walletAFeaturedIndex - walletBFeaturedIndex;
        }
        if (walletAFeaturedIndex !== -1) {
          return -1;
        }
        if (walletBFeaturedIndex !== -1) {
          return 1;
        }
      }
      return 0;
    });
    return sortedWallets;
  },
  getConnectOrderMethod(_features, _connectors) {
    var _a;
    const connectMethodOrder = (_features == null ? void 0 : _features.connectMethodsOrder) || ((_a = OptionsController.state.features) == null ? void 0 : _a.connectMethodsOrder);
    const connectors = _connectors || ConnectorController.state.connectors;
    if (connectMethodOrder) {
      return connectMethodOrder;
    }
    const { injected, announced } = ConnectorUtil.getConnectorsByType(connectors, ApiController.state.recommended, ApiController.state.featured);
    const shownInjected = injected.filter(ConnectorUtil.showConnector);
    const shownAnnounced = announced.filter(ConnectorUtil.showConnector);
    if (shownInjected.length || shownAnnounced.length) {
      return ["wallet", "email", "social"];
    }
    return ConstantsUtil$1.DEFAULT_CONNECT_METHOD_ORDER;
  },
  isExcluded(wallet) {
    const isRDNSExcluded = Boolean(wallet.rdns) && ApiController.state.excludedWallets.some((w2) => w2.rdns === wallet.rdns);
    const isNameExcluded = Boolean(wallet.name) && ApiController.state.excludedWallets.some((w2) => HelpersUtil$1.isLowerCaseMatch(w2.name, wallet.name));
    return isRDNSExcluded || isNameExcluded;
  },
  markWalletsWithDisplayIndex(wallets) {
    return wallets.map((w2, index) => ({ ...w2, display_index: index }));
  },
  /**
   * Filters wallets based on WalletConnect support and platform requirements.
   *
   * On mobile only wallets with WalletConnect support and some mandatory wallets are shown.
   * On desktop with Appkit Core only wallets with WalletConnect support are shown.
   * On desktop with Appkit all wallets are shown.
   *
   * @param wallets - Array of wallets to filter
   * @returns Filtered array of wallets based on WalletConnect support and platform
   */
  filterWalletsByWcSupport(wallets) {
    if (ConnectionController.state.wcBasic) {
      return wallets.filter((wallet) => wallet.supports_wc);
    }
    if (CoreHelperUtil.isMobile()) {
      return wallets.filter((wallet) => wallet.supports_wc || ConstantsUtil$1.MANDATORY_WALLET_IDS_ON_MOBILE.includes(wallet.id));
    }
    return wallets;
  },
  getWalletConnectWallets(allWallets) {
    var _a;
    const wallets = [...ApiController.state.featured, ...ApiController.state.recommended];
    if (((_a = ApiController.state.filteredWallets) == null ? void 0 : _a.length) > 0) {
      wallets.push(...ApiController.state.filteredWallets);
    } else {
      wallets.push(...allWallets);
    }
    const uniqueWallets = CoreHelperUtil.uniqueBy(wallets, "id");
    const walletsWithInstalled = WalletUtil.markWalletsAsInstalled(uniqueWallets);
    const walletsByWcSupport = WalletUtil.filterWalletsByWcSupport(walletsWithInstalled);
    return WalletUtil.markWalletsWithDisplayIndex(walletsByWcSupport);
  }
};
const ConnectorUtil = {
  getConnectorsByType(connectors, recommended, featured) {
    const { customWallets } = OptionsController.state;
    const recent = StorageUtil.getRecentWallets();
    const filteredRecommended = WalletUtil.filterOutDuplicateWallets(recommended);
    const filteredFeatured = WalletUtil.filterOutDuplicateWallets(featured);
    const multiChain = connectors.filter((connector) => connector.type === "MULTI_CHAIN");
    const announced = connectors.filter((connector) => connector.type === "ANNOUNCED");
    const injected = connectors.filter((connector) => connector.type === "INJECTED");
    const external = connectors.filter((connector) => connector.type === "EXTERNAL");
    return {
      custom: customWallets,
      recent,
      external,
      multiChain,
      announced,
      injected,
      recommended: filteredRecommended,
      featured: filteredFeatured
    };
  },
  showConnector(connector) {
    var _a;
    const rdns = (_a = connector.info) == null ? void 0 : _a.rdns;
    const isRDNSExcluded = Boolean(rdns) && ApiController.state.excludedWallets.some((wallet) => Boolean(wallet.rdns) && wallet.rdns === rdns);
    const isNameExcluded = Boolean(connector.name) && ApiController.state.excludedWallets.some((wallet) => HelpersUtil$1.isLowerCaseMatch(wallet.name, connector.name));
    if (connector.type === "INJECTED") {
      const isBrowserWallet = connector.name === "Browser Wallet";
      if (isBrowserWallet) {
        if (!CoreHelperUtil.isMobile()) {
          return false;
        }
        if (CoreHelperUtil.isMobile() && !rdns && !ConnectionController.checkInstalled()) {
          return false;
        }
      }
      if (isRDNSExcluded || isNameExcluded) {
        return false;
      }
    }
    if ((connector.type === "ANNOUNCED" || connector.type === "EXTERNAL") && (isRDNSExcluded || isNameExcluded)) {
      return false;
    }
    return true;
  },
  /**
   * Returns true if the user is connected to a WalletConnect connector in the any of the available namespaces.
   * @returns boolean
   */
  getIsConnectedWithWC() {
    const chains = Array.from(ChainController.state.chains.values());
    const isConnectedWithWC = chains.some((chain) => {
      const connectorId = ConnectorController.getConnectorId(chain.namespace);
      return connectorId === ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT;
    });
    return isConnectedWithWC;
  },
  /**
   * Returns the connector positions in the order of the user's preference.
   * @returns ConnectorTypeOrder[]
   */
  getConnectorTypeOrder({ recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = ((_b) => (_b = OptionsController.state.features) == null ? void 0 : _b.connectorTypeOrder)() ?? [] }) {
    const allConnectors = [
      { type: "walletConnect", isEnabled: true },
      { type: "recent", isEnabled: recent.length > 0 },
      { type: "injected", isEnabled: [...injected, ...announced, ...multiChain].length > 0 },
      { type: "featured", isEnabled: featured.length > 0 },
      { type: "custom", isEnabled: custom && custom.length > 0 },
      { type: "external", isEnabled: external.length > 0 },
      { type: "recommended", isEnabled: recommended.length > 0 }
    ];
    const enabledConnectors = allConnectors.filter((option) => option.isEnabled);
    const enabledConnectorTypes = new Set(enabledConnectors.map((option) => option.type));
    const prioritizedConnectors = overriddenConnectors.filter((type) => enabledConnectorTypes.has(type)).map((type) => ({ type, isEnabled: true }));
    const remainingConnectors = enabledConnectors.filter(({ type: enabledConnectorType }) => {
      const hasPrioritizedConnector = prioritizedConnectors.some(({ type: prioritizedConnectorType }) => prioritizedConnectorType === enabledConnectorType);
      return !hasPrioritizedConnector;
    });
    return Array.from(new Set([...prioritizedConnectors, ...remainingConnectors].map(({ type }) => type)));
  },
  sortConnectorsByExplorerWallet(connectors) {
    return [...connectors].sort((a2, b2) => {
      if (a2.explorerWallet && b2.explorerWallet) {
        return (a2.explorerWallet.order ?? 0) - (b2.explorerWallet.order ?? 0);
      }
      if (a2.explorerWallet) {
        return -1;
      }
      if (b2.explorerWallet) {
        return 1;
      }
      return 0;
    });
  },
  /**
   * Returns the priority of a connector. Base Account has highest priority, followed by Coinbase then the rest.
   *
   * This is needed because Base Account and Coinbase share the same explorer wallet ID.
   * Without prioritization, selecting Base Account could incorrectly trigger the Coinbase Wallet extension.
   *
   * @param connector - The connector to get the priority of.
   * @returns The priority of the connector.
   */
  getPriority(connector) {
    if (connector.id === ConstantsUtil$2.CONNECTOR_ID.BASE_ACCOUNT) {
      return 0;
    }
    if (connector.id === ConstantsUtil$2.CONNECTOR_ID.COINBASE || connector.id === ConstantsUtil$2.CONNECTOR_ID.COINBASE_SDK) {
      return 1;
    }
    return 2;
  },
  /**
   * Sorts connectors by priority.
   * @param connectors - The connectors to sort.
   * @returns Sorted connectors.
   */
  sortConnectorsByPriority(connectors) {
    return [...connectors].sort((a2, b2) => ConnectorUtil.getPriority(a2) - ConnectorUtil.getPriority(b2));
  },
  getAuthName({ email, socialUsername, socialProvider }) {
    if (socialUsername) {
      if (socialProvider && socialProvider === "discord" && socialUsername.endsWith("0")) {
        return socialUsername.slice(0, -1);
      }
      return socialUsername;
    }
    return email.length > 30 ? `${email.slice(0, -3)}...` : email;
  },
  async fetchProviderData(connector) {
    var _a, _b;
    try {
      if (connector.name === "Browser Wallet" && !CoreHelperUtil.isMobile()) {
        return { accounts: [], chainId: void 0 };
      }
      if (connector.id === ConstantsUtil$2.CONNECTOR_ID.AUTH) {
        return { accounts: [], chainId: void 0 };
      }
      const [accounts, chainId] = await Promise.all([
        (_a = connector.provider) == null ? void 0 : _a.request({ method: "eth_accounts" }),
        (_b = connector.provider) == null ? void 0 : _b.request({ method: "eth_chainId" }).then((hexChainId) => Number(hexChainId))
      ]);
      return { accounts, chainId };
    } catch (err) {
      console.warn(`Failed to fetch provider data for ${connector.name}`, err);
      return { accounts: [], chainId: void 0 };
    }
  },
  /**
   * Filter out duplicate custom wallets by RDNS
   * @param wallets
   */
  getFilteredCustomWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = ConnectorController.state.connectors.map((connector) => {
      var _a;
      return (_a = connector.info) == null ? void 0 : _a.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  },
  hasWalletConnector(wallet) {
    return ConnectorController.state.connectors.some((connector) => connector.id === wallet.id || connector.name === wallet.name);
  },
  isWalletCompatibleWithCurrentChain(wallet) {
    const currentNamespace = ChainController.state.activeChain;
    if (currentNamespace && wallet.chains) {
      return wallet.chains.some((c2) => {
        const chainNamespace = c2.split(":")[0];
        return currentNamespace === chainNamespace;
      });
    }
    return true;
  },
  getFilteredRecentWallets() {
    const recentWallets = StorageUtil.getRecentWallets();
    const filteredRecentWallets = recentWallets.filter((wallet) => !WalletUtil.isExcluded(wallet)).filter((wallet) => !this.hasWalletConnector(wallet)).filter((wallet) => this.isWalletCompatibleWithCurrentChain(wallet));
    return filteredRecentWallets;
  },
  getCappedRecommendedWallets(wallets) {
    const { connectors } = ConnectorController.state;
    const { customWallets, featuredWalletIds } = OptionsController.state;
    const wcConnector = connectors.find((c2) => c2.id === "walletConnect");
    const injectedConnectors = connectors.filter((c2) => c2.type === "INJECTED" || c2.type === "ANNOUNCED" || c2.type === "MULTI_CHAIN");
    if (!wcConnector && !injectedConnectors.length && !(customWallets == null ? void 0 : customWallets.length)) {
      return [];
    }
    const isEmailEnabled = OptionsUtil.isEmailEnabled();
    const isSocialsEnabled = OptionsUtil.isSocialsEnabled();
    const injectedWallets = injectedConnectors.filter((i2) => i2.name !== "Browser Wallet" && i2.name !== "WalletConnect");
    const featuredWalletAmount = (featuredWalletIds == null ? void 0 : featuredWalletIds.length) || 0;
    const customWalletAmount = (customWallets == null ? void 0 : customWallets.length) || 0;
    const injectedWalletAmount = injectedWallets.length || 0;
    const emailWalletAmount = isEmailEnabled ? 1 : 0;
    const socialWalletAmount = isSocialsEnabled ? 1 : 0;
    const walletsDisplayed = featuredWalletAmount + customWalletAmount + injectedWalletAmount + emailWalletAmount + socialWalletAmount;
    const DISPLAYED_WALLETS_AMOUNT = 4;
    const sliceAmount = Math.max(0, DISPLAYED_WALLETS_AMOUNT - walletsDisplayed);
    if (sliceAmount <= 0) {
      return [];
    }
    const filtered = WalletUtil.filterOutDuplicateWallets(wallets);
    return filtered.slice(0, sliceAmount);
  },
  processConnectorsByType(connectors, shouldFilter = true) {
    const sorted = ConnectorUtil.sortConnectorsByExplorerWallet([...connectors]);
    return shouldFilter ? sorted.filter(ConnectorUtil.showConnector) : sorted;
  },
  connectorList() {
    const byType = ConnectorUtil.getConnectorsByType(ConnectorController.state.connectors, ApiController.state.recommended, ApiController.state.featured);
    const announced = this.processConnectorsByType(byType.announced.filter((c2) => c2.id !== "walletConnect"));
    const injected = this.processConnectorsByType(byType.injected);
    const multiChain = this.processConnectorsByType(byType.multiChain.filter((c2) => c2.name !== "WalletConnect"), false);
    const custom = byType.custom;
    const recent = byType.recent;
    const external = this.processConnectorsByType(byType.external.filter((c2) => c2.id !== ConstantsUtil$2.CONNECTOR_ID.COINBASE_SDK && c2.id !== ConstantsUtil$2.CONNECTOR_ID.BASE_ACCOUNT));
    const recommended = byType.recommended;
    const featured = byType.featured;
    const connectorTypeOrder = ConnectorUtil.getConnectorTypeOrder({
      custom,
      recent,
      announced,
      injected,
      multiChain,
      recommended,
      featured,
      external
    });
    const wcConnector = ConnectorController.state.connectors.find((c2) => c2.id === "walletConnect");
    const isMobile = CoreHelperUtil.isMobile();
    const items = [];
    for (const type of connectorTypeOrder) {
      switch (type) {
        case "walletConnect": {
          if (!isMobile && wcConnector) {
            items.push({ kind: "connector", subtype: "walletConnect", connector: wcConnector });
          }
          break;
        }
        case "recent": {
          const filteredRecent = ConnectorUtil.getFilteredRecentWallets();
          filteredRecent.forEach((w2) => items.push({ kind: "wallet", subtype: "recent", wallet: w2 }));
          break;
        }
        case "injected": {
          multiChain.forEach((c2) => items.push({ kind: "connector", subtype: "multiChain", connector: c2 }));
          announced.forEach((c2) => items.push({ kind: "connector", subtype: "announced", connector: c2 }));
          injected.forEach((c2) => items.push({ kind: "connector", subtype: "injected", connector: c2 }));
          break;
        }
        case "featured": {
          featured.forEach((w2) => items.push({ kind: "wallet", subtype: "featured", wallet: w2 }));
          break;
        }
        case "custom": {
          const filteredCustom = ConnectorUtil.getFilteredCustomWallets(custom ?? []);
          filteredCustom.forEach((w2) => items.push({ kind: "wallet", subtype: "custom", wallet: w2 }));
          break;
        }
        case "external": {
          external.forEach((c2) => items.push({ kind: "connector", subtype: "external", connector: c2 }));
          break;
        }
        case "recommended": {
          const cappedRecommended = ConnectorUtil.getCappedRecommendedWallets(recommended);
          cappedRecommended.forEach((w2) => items.push({ kind: "wallet", subtype: "recommended", wallet: w2 }));
          break;
        }
        default:
          console.warn(`Unknown connector type: ${type}`);
      }
    }
    return items;
  },
  hasInjectedConnectors() {
    return ConnectorController.state.connectors.filter((c2) => (c2.type === "INJECTED" || c2.type === "ANNOUNCED" || c2.type === "MULTI_CHAIN") && c2.name !== "Browser Wallet" && c2.name !== "WalletConnect").length;
  }
};
const RESTRICTED_VIEWS_BASED_ON_USAGE = [
  "ConnectingExternal",
  "ConnectingMultiChain",
  "ConnectingSocial",
  "ConnectingFarcaster"
];
const state$d = proxy({
  view: "Connect",
  history: ["Connect"],
  transactionStack: []
});
const controller$a = {
  state: state$d,
  subscribeKey(key, callback) {
    return subscribeKey(state$d, key, callback);
  },
  pushTransactionStack(action) {
    state$d.transactionStack.push(action);
  },
  popTransactionStack(status) {
    const action = state$d.transactionStack.pop();
    if (!action) {
      return;
    }
    const { onSuccess, onError, onCancel } = action;
    switch (status) {
      case "success":
        onSuccess == null ? void 0 : onSuccess();
        break;
      case "error":
        onError == null ? void 0 : onError();
        RouterController.goBack();
        break;
      case "cancel":
        onCancel == null ? void 0 : onCancel();
        RouterController.goBack();
        break;
    }
  },
  push(view, data) {
    let finalView = view;
    let finalData = data;
    if (ApiController.state.plan.hasExceededUsageLimit && RESTRICTED_VIEWS_BASED_ON_USAGE.includes(view)) {
      finalView = "UsageExceeded";
      finalData = void 0;
    }
    if (finalView !== state$d.view) {
      state$d.view = finalView;
      state$d.history.push(finalView);
      state$d.data = finalData;
    }
  },
  reset(view, data) {
    state$d.view = view;
    state$d.history = [view];
    state$d.data = data;
  },
  replace(view, data) {
    const lastView = state$d.history.at(-1);
    const isSameView = lastView === view;
    if (!isSameView) {
      state$d.view = view;
      state$d.history[state$d.history.length - 1] = view;
      state$d.data = data;
    }
  },
  goBack() {
    var _a, _b;
    const isConnected = ChainController.state.activeCaipAddress;
    const isFarcasterView = RouterController.state.view === "ConnectingFarcaster";
    const shouldReload = !isConnected && isFarcasterView;
    if (state$d.history.length > 1) {
      state$d.history.pop();
      const [last] = state$d.history.slice(-1);
      if (last) {
        const isConnectView = last === "Connect";
        if (isConnected && isConnectView) {
          state$d.view = "Account";
        } else {
          state$d.view = last;
        }
      }
    } else {
      ModalController.close();
    }
    if ((_a = state$d.data) == null ? void 0 : _a.wallet) {
      state$d.data.wallet = void 0;
    }
    if ((_b = state$d.data) == null ? void 0 : _b.redirectView) {
      state$d.data.redirectView = void 0;
    }
    setTimeout(() => {
      var _a2, _b2, _c;
      if (shouldReload) {
        ChainController.setAccountProp("farcasterUrl", void 0, ChainController.state.activeChain);
        const authConnector = ConnectorController.getAuthConnector();
        (_a2 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a2.reload();
        const optionsState = snapshot(OptionsController.state);
        (_c = (_b2 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _b2.syncDappData) == null ? void 0 : _c.call(_b2, {
          metadata: optionsState.metadata,
          sdkVersion: optionsState.sdkVersion,
          projectId: optionsState.projectId,
          sdkType: optionsState.sdkType
        });
      }
    }, 100);
  },
  goBackToIndex(historyIndex) {
    if (state$d.history.length > 1) {
      state$d.history = state$d.history.slice(0, historyIndex + 1);
      const [last] = state$d.history.slice(-1);
      if (last) {
        state$d.view = last;
      }
    }
  },
  goBackOrCloseModal() {
    if (RouterController.state.history.length > 1) {
      RouterController.goBack();
    } else {
      ModalController.close();
    }
  }
};
const RouterController = withErrorBoundary(controller$a);
const state$c = proxy({
  themeMode: "dark",
  themeVariables: {},
  w3mThemeVariables: void 0
});
const controller$9 = {
  state: state$c,
  subscribe(callback) {
    return subscribe(state$c, () => callback(state$c));
  },
  setThemeMode(themeMode) {
    state$c.themeMode = themeMode;
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariables = controller$9.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeMode,
          themeVariables,
          w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  setThemeVariables(themeVariables) {
    state$c.themeVariables = { ...state$c.themeVariables, ...themeVariables };
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariablesSnapshot = controller$9.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeVariables: themeVariablesSnapshot,
          w3mThemeVariables: getW3mThemeVariables(state$c.themeVariables, state$c.themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  getSnapshot() {
    return snapshot(state$c);
  }
};
const ThemeController = withErrorBoundary(controller$9);
const defaultActiveConnectors = Object.fromEntries(AVAILABLE_NAMESPACES.map((namespace) => [namespace, void 0]));
const defaultFilterByNamespaceMap = Object.fromEntries(AVAILABLE_NAMESPACES.map((namespace) => [namespace, true]));
const state$b = proxy({
  allConnectors: [],
  connectors: [],
  activeConnector: void 0,
  filterByNamespace: void 0,
  activeConnectorIds: defaultActiveConnectors,
  filterByNamespaceMap: defaultFilterByNamespaceMap
});
const controller$8 = {
  state: state$b,
  subscribe(callback) {
    return subscribe(state$b, () => {
      callback(state$b);
    });
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$b, key, callback);
  },
  initialize(namespaces) {
    namespaces.forEach((namespace) => {
      const connectorId = StorageUtil.getConnectedConnectorId(namespace);
      if (connectorId) {
        ConnectorController.setConnectorId(connectorId, namespace);
      }
    });
  },
  setActiveConnector(connector) {
    if (connector) {
      state$b.activeConnector = ref(connector);
    }
  },
  setConnectors(connectors) {
    const newConnectors = connectors.filter((newConnector) => !state$b.allConnectors.some((existingConnector) => existingConnector.id === newConnector.id && ConnectorController.getConnectorName(existingConnector.name) === ConnectorController.getConnectorName(newConnector.name) && existingConnector.chain === newConnector.chain));
    newConnectors.forEach((connector) => {
      if (connector.type !== "MULTI_CHAIN") {
        state$b.allConnectors.push(ref(connector));
      }
    });
    const enabledNamespaces = ConnectorController.getEnabledNamespaces();
    const connectorsFilteredByNamespaces = ConnectorController.getEnabledConnectors(enabledNamespaces);
    state$b.connectors = ConnectorController.mergeMultiChainConnectors(connectorsFilteredByNamespaces);
  },
  filterByNamespaces(enabledNamespaces) {
    Object.keys(state$b.filterByNamespaceMap).forEach((namespace) => {
      state$b.filterByNamespaceMap[namespace] = false;
    });
    enabledNamespaces.forEach((namespace) => {
      state$b.filterByNamespaceMap[namespace] = true;
    });
    ConnectorController.updateConnectorsForEnabledNamespaces();
  },
  filterByNamespace(namespace, enabled) {
    state$b.filterByNamespaceMap[namespace] = enabled;
    ConnectorController.updateConnectorsForEnabledNamespaces();
  },
  updateConnectorsForEnabledNamespaces() {
    const enabledNamespaces = ConnectorController.getEnabledNamespaces();
    const enabledConnectors = ConnectorController.getEnabledConnectors(enabledNamespaces);
    const areAllNamespacesEnabled = ConnectorController.areAllNamespacesEnabled();
    state$b.connectors = ConnectorController.mergeMultiChainConnectors(enabledConnectors);
    if (areAllNamespacesEnabled) {
      ApiController.clearFilterByNamespaces();
    } else {
      ApiController.filterByNamespaces(enabledNamespaces);
    }
  },
  getEnabledNamespaces() {
    return Object.entries(state$b.filterByNamespaceMap).filter(([_2, enabled]) => enabled).map(([namespace]) => namespace);
  },
  getEnabledConnectors(enabledNamespaces) {
    return state$b.allConnectors.filter((connector) => enabledNamespaces.includes(connector.chain));
  },
  areAllNamespacesEnabled() {
    return Object.values(state$b.filterByNamespaceMap).every((enabled) => enabled);
  },
  mergeMultiChainConnectors(connectors) {
    const connectorsByNameMap = ConnectorController.generateConnectorMapByName(connectors);
    const mergedConnectors = [];
    connectorsByNameMap.forEach((keyConnectors) => {
      const firstItem = keyConnectors[0];
      const isAuthConnector = (firstItem == null ? void 0 : firstItem.id) === ConstantsUtil$2.CONNECTOR_ID.AUTH;
      if (keyConnectors.length > 1 && firstItem) {
        mergedConnectors.push({
          name: firstItem.name,
          imageUrl: firstItem.imageUrl,
          imageId: firstItem.imageId,
          connectors: [...keyConnectors],
          type: isAuthConnector ? "AUTH" : "MULTI_CHAIN",
          // These values are just placeholders, we don't use them in multi-chain connector select screen
          chain: "eip155",
          id: (firstItem == null ? void 0 : firstItem.id) || ""
        });
      } else if (firstItem) {
        mergedConnectors.push(firstItem);
      }
    });
    return mergedConnectors;
  },
  generateConnectorMapByName(connectors) {
    const connectorsByNameMap = /* @__PURE__ */ new Map();
    connectors.forEach((connector) => {
      const { name } = connector;
      const connectorName = ConnectorController.getConnectorName(name);
      if (!connectorName) {
        return;
      }
      const connectorsByName = connectorsByNameMap.get(connectorName) || [];
      const haveSameConnector = connectorsByName.find((c2) => c2.chain === connector.chain);
      if (!haveSameConnector) {
        connectorsByName.push(connector);
      }
      connectorsByNameMap.set(connectorName, connectorsByName);
    });
    return connectorsByNameMap;
  },
  getConnectorName(name) {
    if (!name) {
      return name;
    }
    const nameOverrideMap = {
      "Trust Wallet": "Trust"
    };
    return nameOverrideMap[name] || name;
  },
  getUniqueConnectorsByName(connectors) {
    const uniqueConnectors = [];
    connectors.forEach((c2) => {
      if (!uniqueConnectors.find((uc) => uc.chain === c2.chain)) {
        uniqueConnectors.push(c2);
      }
    });
    return uniqueConnectors;
  },
  addConnector(connector) {
    var _a, _b, _c;
    if (connector.id === ConstantsUtil$2.CONNECTOR_ID.AUTH) {
      const authConnector = connector;
      const optionsState = snapshot(OptionsController.state);
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      (_b = (_a = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a.syncDappData) == null ? void 0 : _b.call(_a, {
        metadata: optionsState.metadata,
        sdkVersion: optionsState.sdkVersion,
        projectId: optionsState.projectId,
        sdkType: optionsState.sdkType
      });
      (_c = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _c.syncTheme({
        themeMode,
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
      ConnectorController.setConnectors([connector]);
    } else {
      ConnectorController.setConnectors([connector]);
    }
  },
  getAuthConnector(chainNamespace) {
    var _a;
    const activeNamespace = chainNamespace || ChainController.state.activeChain;
    const authConnector = state$b.connectors.find((c2) => c2.id === ConstantsUtil$2.CONNECTOR_ID.AUTH);
    if (!authConnector) {
      return void 0;
    }
    if ((_a = authConnector == null ? void 0 : authConnector.connectors) == null ? void 0 : _a.length) {
      const connector = authConnector.connectors.find((c2) => c2.chain === activeNamespace);
      return connector;
    }
    return authConnector;
  },
  getAnnouncedConnectorRdns() {
    return state$b.connectors.filter((c2) => c2.type === "ANNOUNCED").map((c2) => {
      var _a;
      return (_a = c2.info) == null ? void 0 : _a.rdns;
    });
  },
  getConnectorById(id) {
    const sortedConnectors = ConnectorUtil.sortConnectorsByPriority(state$b.allConnectors);
    return sortedConnectors.find((c2) => c2.id === id);
  },
  getConnector({ id, namespace }) {
    const namespaceToUse = namespace || ChainController.state.activeChain;
    const connectorsByNamespace = state$b.allConnectors.filter((c2) => c2.chain === namespaceToUse);
    const sortedConnectorsByNamespace = ConnectorUtil.sortConnectorsByPriority(connectorsByNamespace);
    const connector = sortedConnectorsByNamespace.find((c2) => c2.id === id || c2.explorerId === id);
    return connector;
  },
  syncIfAuthConnector(connector) {
    var _a, _b;
    if (connector.id !== "AUTH") {
      return;
    }
    const authConnector = connector;
    const optionsState = snapshot(OptionsController.state);
    const themeMode = ThemeController.getSnapshot().themeMode;
    const themeVariables = ThemeController.getSnapshot().themeVariables;
    (_b = (_a = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a.syncDappData) == null ? void 0 : _b.call(_a, {
      metadata: optionsState.metadata,
      sdkVersion: optionsState.sdkVersion,
      sdkType: optionsState.sdkType,
      projectId: optionsState.projectId
    });
    authConnector.provider.syncTheme({
      themeMode,
      themeVariables,
      w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
    });
  },
  /**
   * Returns the connectors filtered by namespace.
   * @param namespace - The namespace to filter the connectors by.
   * @returns ConnectorWithProviders[].
   */
  getConnectorsByNamespace(namespace) {
    const namespaceConnectors = state$b.allConnectors.filter((connector) => connector.chain === namespace);
    return ConnectorController.mergeMultiChainConnectors(namespaceConnectors);
  },
  canSwitchToSmartAccount(namespace) {
    const isSmartAccountEnabled = ChainController.checkIfSmartAccountEnabled();
    return isSmartAccountEnabled && getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;
  },
  selectWalletConnector(wallet) {
    var _a;
    const redirectView = (_a = RouterController.state.data) == null ? void 0 : _a.redirectView;
    const namespace = ChainController.state.activeChain;
    const connector = namespace ? ConnectorController.getConnector({ id: wallet.id, namespace }) : void 0;
    MobileWalletUtil.handleMobileDeeplinkRedirect((connector == null ? void 0 : connector.explorerId) || wallet.id, ChainController.state.activeChain);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector, wallet, redirectView });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet, redirectView });
    }
  },
  /**
   * Returns the connectors. If a namespace is provided, the connectors are filtered by namespace.
   * @param namespace - The namespace to filter the connectors by. If not provided, all connectors are returned.
   * @returns ConnectorWithProviders[].
   */
  getConnectors(namespace) {
    if (namespace) {
      return ConnectorController.getConnectorsByNamespace(namespace);
    }
    return ConnectorController.mergeMultiChainConnectors(state$b.allConnectors);
  },
  /**
   * Sets the filter by namespace and updates the connectors.
   * @param namespace - The namespace to filter the connectors by.
   */
  setFilterByNamespace(namespace) {
    state$b.filterByNamespace = namespace;
    state$b.connectors = ConnectorController.getConnectors(namespace);
    ApiController.setFilterByNamespace(namespace);
  },
  setConnectorId(connectorId, namespace) {
    if (connectorId) {
      state$b.activeConnectorIds = {
        ...state$b.activeConnectorIds,
        [namespace]: connectorId
      };
      StorageUtil.setConnectedConnectorId(namespace, connectorId);
    }
  },
  removeConnectorId(namespace) {
    state$b.activeConnectorIds = {
      ...state$b.activeConnectorIds,
      [namespace]: void 0
    };
    StorageUtil.deleteConnectedConnectorId(namespace);
  },
  getConnectorId(namespace) {
    if (!namespace) {
      return void 0;
    }
    return state$b.activeConnectorIds[namespace];
  },
  isConnected(namespace) {
    if (!namespace) {
      return Object.values(state$b.activeConnectorIds).some((id) => Boolean(id));
    }
    return Boolean(state$b.activeConnectorIds[namespace]);
  },
  resetConnectorIds() {
    state$b.activeConnectorIds = { ...defaultActiveConnectors };
  },
  extendConnectorsWithExplorerWallets(explorerWallets) {
    state$b.allConnectors.forEach((connector) => {
      const explorerWallet = explorerWallets.find((wallet) => {
        var _a;
        return wallet.id === connector.id || wallet.rdns && wallet.rdns === ((_a = connector.info) == null ? void 0 : _a.rdns);
      });
      if (explorerWallet) {
        connector.explorerWallet = explorerWallet;
      }
    });
    const enabledNamespaces = ConnectorController.getEnabledNamespaces();
    const enabledConnectors = ConnectorController.getEnabledConnectors(enabledNamespaces);
    state$b.connectors = ConnectorController.mergeMultiChainConnectors(enabledConnectors);
  },
  /**
   * Opens the connect modal and waits until the user connects their wallet.
   * @param params - Connection parameters.
   * @returns Promise resolving to the connected wallet's CAIP address.
   */
  async connect(params = {}) {
    const { namespace } = params;
    ConnectorController.setFilterByNamespace(namespace);
    RouterController.push("Connect", {
      addWalletForNamespace: namespace
    });
    return new Promise((resolve, reject) => {
      if (namespace) {
        const unsubscribeChainController = ChainController.subscribeChainProp("accountState", (val) => {
          if (val == null ? void 0 : val.caipAddress) {
            resolve({ caipAddress: val == null ? void 0 : val.caipAddress });
            unsubscribeChainController();
          }
        }, namespace);
        const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
          if (!val) {
            reject(new Error("Modal closed"));
            unsubscribeModalController();
          }
        });
      } else {
        const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
          if (val) {
            resolve({ caipAddress: val });
            unsubscribeChainController();
          }
        });
        const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
          if (!val) {
            reject(new Error("Modal closed"));
            unsubscribeModalController();
          }
        });
      }
    });
  }
};
const ConnectorController = withErrorBoundary(controller$8);
const UPDATE_EMAIL_INTERVAL_MS = 1e3;
const ConnectorControllerUtil = {
  checkNamespaceConnectorId(namespace, connectorId) {
    return ConnectorController.getConnectorId(namespace) === connectorId;
  },
  isSocialProvider(socialProvider) {
    return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.socials.includes(socialProvider);
  },
  connectWalletConnect({ walletConnect, connector, closeModalOnConnect = true, redirectViewOnModalClose = "Connect", onOpen, onConnect }) {
    return new Promise((resolve, reject) => {
      if (walletConnect) {
        ConnectorController.setActiveConnector(connector);
      }
      onOpen == null ? void 0 : onOpen(CoreHelperUtil.isMobile() && walletConnect);
      if (redirectViewOnModalClose) {
        const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
          if (!val) {
            if (RouterController.state.view !== redirectViewOnModalClose) {
              RouterController.replace(redirectViewOnModalClose);
            }
            unsubscribeModalController();
            reject(new Error("Modal closed"));
          }
        });
      }
      const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
        if (val) {
          onConnect == null ? void 0 : onConnect();
          if (closeModalOnConnect) {
            ModalController.close();
          }
          unsubscribeChainController();
          resolve(ParseUtil.parseCaipAddress(val));
        }
      });
    });
  },
  connectExternal(connector) {
    return new Promise((resolve, reject) => {
      const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
        if (val) {
          ModalController.close();
          unsubscribeChainController();
          resolve(ParseUtil.parseCaipAddress(val));
        }
      });
      ConnectionController.connectExternal(connector, connector.chain).catch(() => {
        unsubscribeChainController();
        reject(new Error("Connection rejected"));
      });
    });
  },
  connectSocial({ social: socialProvider, namespace, closeModalOnConnect = true, onOpenFarcaster, onConnect }) {
    let socialWindow = void 0;
    let isConnectingSocial = false;
    let popupWindow = null;
    const namespaceToUse = namespace || ChainController.state.activeChain;
    const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
      if (val) {
        if (closeModalOnConnect) {
          ModalController.close();
        }
        unsubscribeChainController();
      }
    });
    return new Promise((resolve, reject) => {
      async function handleSocialConnection(event) {
        var _a;
        if ((_a = event.data) == null ? void 0 : _a.resultUri) {
          if (event.origin === ConstantsUtil$2.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", handleSocialConnection, false);
            try {
              const authConnector = ConnectorController.getAuthConnector(namespaceToUse);
              if (authConnector && !isConnectingSocial) {
                if (socialWindow) {
                  socialWindow.close();
                }
                isConnectingSocial = true;
                const uri = event.data.resultUri;
                EventsController.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: { provider: socialProvider }
                });
                StorageUtil.setConnectedSocialProvider(socialProvider);
                await ConnectionController.connectExternal({
                  id: authConnector.id,
                  type: authConnector.type,
                  socialUri: uri
                }, authConnector.chain);
                const caipAddress = ChainController.state.activeCaipAddress;
                if (!caipAddress) {
                  reject(new Error("Failed to connect"));
                  return;
                }
                resolve(ParseUtil.parseCaipAddress(caipAddress));
                EventsController.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: { provider: socialProvider }
                });
              }
            } catch (err) {
              EventsController.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: { provider: socialProvider, message: CoreHelperUtil.parseError(err) }
              });
              reject(new Error("Failed to connect"));
            }
          } else {
            EventsController.sendEvent({
              type: "track",
              event: "SOCIAL_LOGIN_ERROR",
              properties: { provider: socialProvider, message: "Untrusted Origin" }
            });
          }
        }
      }
      async function connectSocial() {
        EventsController.sendEvent({
          type: "track",
          event: "SOCIAL_LOGIN_STARTED",
          properties: { provider: socialProvider }
        });
        if (socialProvider === "farcaster") {
          onOpenFarcaster == null ? void 0 : onOpenFarcaster();
          const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
            if (!val && socialProvider === "farcaster") {
              reject(new Error("Popup closed"));
              onConnect == null ? void 0 : onConnect();
              unsubscribeModalController();
            }
          });
          const authConnector = ConnectorController.getAuthConnector();
          if (authConnector) {
            const _accountData = ChainController.getAccountData(namespaceToUse);
            if (!(_accountData == null ? void 0 : _accountData.farcasterUrl)) {
              try {
                const { url } = await authConnector.provider.getFarcasterUri();
                ChainController.setAccountProp("farcasterUrl", url, namespaceToUse);
              } catch {
                reject(new Error("Failed to connect to farcaster"));
              }
            }
          }
        } else {
          const authConnector = ConnectorController.getAuthConnector();
          popupWindow = CoreHelperUtil.returnOpenHref(`${ConstantsUtil$2.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
          try {
            if (authConnector) {
              const { uri } = await authConnector.provider.getSocialRedirectUri({
                provider: socialProvider
              });
              if (popupWindow && uri) {
                popupWindow.location.href = uri;
                socialWindow = popupWindow;
                const interval = setInterval(() => {
                  if ((socialWindow == null ? void 0 : socialWindow.closed) && !isConnectingSocial) {
                    reject(new Error("Popup closed"));
                    clearInterval(interval);
                  }
                }, 1e3);
                window.addEventListener("message", handleSocialConnection, false);
              } else {
                popupWindow == null ? void 0 : popupWindow.close();
                reject(new Error("Failed to initiate social connection"));
              }
            }
          } catch {
            reject(new Error("Failed to initiate social connection"));
            popupWindow == null ? void 0 : popupWindow.close();
          }
        }
      }
      connectSocial();
    });
  },
  connectEmail({ closeModalOnConnect = true, redirectViewOnModalClose = "Connect", onOpen, onConnect }) {
    return new Promise((resolve, reject) => {
      onOpen == null ? void 0 : onOpen();
      if (redirectViewOnModalClose) {
        const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
          if (!val) {
            if (RouterController.state.view !== redirectViewOnModalClose) {
              RouterController.replace(redirectViewOnModalClose);
            }
            unsubscribeModalController();
            reject(new Error("Modal closed"));
          }
        });
      }
      const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
        if (val) {
          onConnect == null ? void 0 : onConnect();
          if (closeModalOnConnect) {
            ModalController.close();
          }
          unsubscribeChainController();
          resolve(ParseUtil.parseCaipAddress(val));
        }
      });
    });
  },
  async updateEmail() {
    const connectorId = StorageUtil.getConnectedConnectorId(ChainController.state.activeChain);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      throw new Error("No auth connector found");
    }
    if (connectorId !== ConstantsUtil$2.CONNECTOR_ID.AUTH) {
      throw new Error("Not connected to email or social");
    }
    const initialEmail = authConnector.provider.getEmail() ?? "";
    await ModalController.open({
      view: "UpdateEmailWallet",
      data: {
        email: initialEmail,
        redirectView: void 0
      }
    });
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        const newEmail = authConnector.provider.getEmail() ?? "";
        if (newEmail !== initialEmail) {
          ModalController.close();
          clearInterval(interval);
          unsubscribeModalController();
          resolve({ email: newEmail });
        }
      }, UPDATE_EMAIL_INTERVAL_MS);
      const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
        if (!val) {
          if (RouterController.state.view !== "Connect") {
            RouterController.push("Connect");
          }
          clearInterval(interval);
          unsubscribeModalController();
          reject(new Error("Modal closed"));
        }
      });
    });
  },
  canSwitchToSmartAccount(namespace) {
    const isSmartAccountEnabled = ChainController.checkIfSmartAccountEnabled();
    return isSmartAccountEnabled && getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;
  }
};
function getActiveNetworkTokenAddress() {
  var _a, _b;
  const namespace = ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.chainNamespace) || "eip155";
  const chainId = ((_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.id) || 1;
  const address = ConstantsUtil$1.NATIVE_TOKEN_ADDRESS[namespace];
  return `${namespace}:${chainId}:${address}`;
}
function getNativeTokenAddress(namespace) {
  return ConstantsUtil$1.NATIVE_TOKEN_ADDRESS[namespace];
}
function getPreferredAccountType(namespace) {
  var _a;
  const preferredAccountType = (_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.preferredAccountType;
  return preferredAccountType;
}
function getActiveCaipNetwork(chainNamespace) {
  return ChainController.state.activeCaipNetwork;
}
const ConnectionControllerUtil = {
  getConnectionStatus(connection, namespace) {
    const connectedConnectorId = ConnectorController.state.activeConnectorIds[namespace];
    const connections = ConnectionController.getConnections(namespace);
    const isConnectorConnected = Boolean(connectedConnectorId) && connection.connectorId === connectedConnectorId;
    if (isConnectorConnected) {
      return "connected";
    }
    const isConnectionConnected = connections.some((c2) => c2.connectorId.toLowerCase() === connection.connectorId.toLowerCase());
    if (isConnectionConnected) {
      return "active";
    }
    return "disconnected";
  },
  excludeConnectorAddressFromConnections({ connections, connectorId, addresses }) {
    return connections.map((connection) => {
      const isConnectorMatch = connectorId ? connection.connectorId.toLowerCase() === connectorId.toLowerCase() : false;
      if (isConnectorMatch && addresses) {
        const filteredAccounts = connection.accounts.filter((account) => {
          const isAddressIncluded = addresses.some((address) => address.toLowerCase() === account.address.toLowerCase());
          return !isAddressIncluded;
        });
        return { ...connection, accounts: filteredAccounts };
      }
      return connection;
    });
  },
  excludeExistingConnections(connectorIds, newConnections) {
    const existingConnectorIds = new Set(connectorIds);
    return newConnections.filter((c2) => !existingConnectorIds.has(c2.connectorId));
  },
  getConnectionsByConnectorId(connections, connectorId) {
    return connections.filter((c2) => c2.connectorId.toLowerCase() === connectorId.toLowerCase());
  },
  getConnectionsData(namespace) {
    var _a;
    const isMultiWalletEnabled = Boolean((_a = OptionsController.state.remoteFeatures) == null ? void 0 : _a.multiWallet);
    const activeConnectorId = ConnectorController.state.activeConnectorIds[namespace];
    const connections = ConnectionController.getConnections(namespace);
    const recentConnections = ConnectionController.state.recentConnections.get(namespace) ?? [];
    const recentConnectionsWithCurrentActiveConnectors = recentConnections.filter((connection) => ConnectorController.getConnectorById(connection.connectorId));
    const dedupedRecentConnections = ConnectionControllerUtil.excludeExistingConnections([...connections.map((c2) => c2.connectorId), ...activeConnectorId ? [activeConnectorId] : []], recentConnectionsWithCurrentActiveConnectors);
    if (!isMultiWalletEnabled) {
      return {
        connections: connections.filter((c2) => c2.connectorId.toLowerCase() === (activeConnectorId == null ? void 0 : activeConnectorId.toLowerCase())),
        recentConnections: []
      };
    }
    return {
      connections,
      recentConnections: dedupedRecentConnections
    };
  },
  onConnectMobile(wallet) {
    const wcUri = ConnectionController.state.wcUri;
    if ((wallet == null ? void 0 : wallet.mobile_link) && wcUri) {
      try {
        ConnectionController.setWcError(false);
        const { mobile_link, link_mode, name } = wallet;
        const { redirect, redirectUniversalLink, href } = CoreHelperUtil.formatNativeUrl(mobile_link, wcUri, link_mode);
        const deepLink = redirect;
        const universalLink = redirectUniversalLink;
        const target = CoreHelperUtil.isIframe() ? "_top" : "_self";
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(wallet);
        if (OptionsController.state.experimental_preferUniversalLinks && universalLink) {
          CoreHelperUtil.openHref(universalLink, target);
        } else {
          CoreHelperUtil.openHref(deepLink, target);
        }
      } catch (e2) {
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_PROXY_ERROR",
          properties: {
            message: e2 instanceof Error ? e2.message : "Error parsing the deep link",
            uri: wcUri,
            mobile_link: wallet.mobile_link,
            name: wallet.name
          }
        });
        ConnectionController.setWcError(true);
      }
    }
  }
};
const state$a = proxy({
  loading: false,
  open: false,
  selectedNetworkId: void 0,
  activeChain: void 0,
  initialized: false,
  connectingWallet: void 0
});
const PublicStateController = {
  state: state$a,
  subscribe(callback) {
    return subscribe(state$a, () => callback(state$a));
  },
  subscribeOpen(callback) {
    return subscribeKey(state$a, "open", callback);
  },
  set(newState) {
    Object.assign(state$a, { ...state$a, ...newState });
  }
};
const state$9 = proxy({
  transactions: [],
  transactionsByYear: {},
  lastNetworkInView: void 0,
  loading: false,
  empty: false,
  next: void 0
});
const controller$7 = {
  state: state$9,
  subscribe(callback) {
    return subscribe(state$9, () => callback(state$9));
  },
  setLastNetworkInView(lastNetworkInView) {
    state$9.lastNetworkInView = lastNetworkInView;
  },
  async fetchTransactions(accountAddress) {
    var _a;
    if (!accountAddress) {
      throw new Error("Transactions can't be fetched without an accountAddress");
    }
    state$9.loading = true;
    try {
      const response = await BlockchainApiController.fetchTransactions({
        account: accountAddress,
        cursor: state$9.next,
        chainId: (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId
      });
      const nonSpamTransactions = TransactionsController.filterSpamTransactions(response.data);
      const sameChainTransactions = TransactionsController.filterByConnectedChain(nonSpamTransactions);
      const filteredTransactions = [...state$9.transactions, ...sameChainTransactions];
      state$9.loading = false;
      state$9.transactions = filteredTransactions;
      state$9.transactionsByYear = TransactionsController.groupTransactionsByYearAndMonth(state$9.transactionsByYear, sameChainTransactions);
      state$9.empty = filteredTransactions.length === 0;
      state$9.next = response.next ? response.next : void 0;
    } catch (error) {
      const activeChainNamespace = ChainController.state.activeChain;
      EventsController.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: accountAddress,
          projectId: OptionsController.state.projectId,
          cursor: state$9.next,
          isSmartAccount: getPreferredAccountType(activeChainNamespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      SnackController.showError("Failed to fetch transactions");
      state$9.loading = false;
      state$9.empty = true;
      state$9.next = void 0;
    }
  },
  groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
    const grouped = transactionsMap;
    transactions.forEach((transaction) => {
      const year = new Date(transaction.metadata.minedAt).getFullYear();
      const month = new Date(transaction.metadata.minedAt).getMonth();
      const yearTransactions = grouped[year] ?? {};
      const monthTransactions = yearTransactions[month] ?? [];
      const newMonthTransactions = monthTransactions.filter((tx) => tx.id !== transaction.id);
      grouped[year] = {
        ...yearTransactions,
        [month]: [...newMonthTransactions, transaction].sort((a2, b2) => new Date(b2.metadata.minedAt).getTime() - new Date(a2.metadata.minedAt).getTime())
      };
    });
    return grouped;
  },
  filterSpamTransactions(transactions) {
    return transactions.filter((transaction) => {
      var _a;
      const isAllSpam = (_a = transaction.transfers) == null ? void 0 : _a.every((transfer) => {
        var _a2;
        return ((_a2 = transfer.nft_info) == null ? void 0 : _a2.flags.is_spam) === true;
      });
      return !isAllSpam;
    });
  },
  filterByConnectedChain(transactions) {
    var _a;
    const chainId = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
    const filteredTransactions = transactions.filter((transaction) => transaction.metadata.chain === chainId);
    return filteredTransactions;
  },
  clearCursor() {
    state$9.next = void 0;
  },
  resetTransactions() {
    state$9.transactions = [];
    state$9.transactionsByYear = {};
    state$9.lastNetworkInView = void 0;
    state$9.loading = false;
    state$9.empty = false;
    state$9.next = void 0;
  }
};
const TransactionsController = withErrorBoundary(controller$7, "API_ERROR");
const state$8 = proxy({
  connections: /* @__PURE__ */ new Map(),
  recentConnections: /* @__PURE__ */ new Map(),
  isSwitchingConnection: false,
  wcError: false,
  wcFetchingUri: false,
  buffering: false,
  status: "disconnected"
});
let wcConnectionPromise;
const controller$6 = {
  state: state$8,
  subscribe(callback) {
    return subscribe(state$8, () => callback(state$8));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$8, key, callback);
  },
  _getClient() {
    return state$8._client;
  },
  setClient(client) {
    state$8._client = ref(client);
  },
  initialize(adapters) {
    const namespaces = adapters.filter((a2) => Boolean(a2.namespace)).map((a2) => a2.namespace);
    ConnectionController.syncStorageConnections(namespaces);
  },
  syncStorageConnections(namespaces) {
    const storageConnections = StorageUtil.getConnections();
    const namespacesToSync = namespaces ?? Array.from(ChainController.state.chains.keys());
    for (const namespace of namespacesToSync) {
      const storageConnectionsByNamespace = storageConnections[namespace] ?? [];
      const recentConnectionsMap = new Map(state$8.recentConnections);
      recentConnectionsMap.set(namespace, storageConnectionsByNamespace);
      state$8.recentConnections = recentConnectionsMap;
    }
  },
  getConnections(namespace) {
    return namespace ? state$8.connections.get(namespace) ?? [] : [];
  },
  hasAnyConnection(connectorId) {
    const connections = ConnectionController.state.connections;
    return Array.from(connections.values()).flatMap((_connections) => _connections).some(({ connectorId: _connectorId }) => _connectorId === connectorId);
  },
  async connectWalletConnect({ cache = "auto" } = {}) {
    var _a, _b, _c, _d2;
    state$8.wcFetchingUri = true;
    const isInTelegramOrSafariIos = CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari() && CoreHelperUtil.isIos();
    if (cache === "always" || cache === "auto" && isInTelegramOrSafariIos) {
      if (wcConnectionPromise) {
        await wcConnectionPromise;
        wcConnectionPromise = void 0;
        return;
      }
      if (!CoreHelperUtil.isPairingExpired(state$8 == null ? void 0 : state$8.wcPairingExpiry)) {
        const link = state$8.wcUri;
        state$8.wcUri = link;
        return;
      }
      wcConnectionPromise = (_b = (_a = ConnectionController._getClient()) == null ? void 0 : _a.connectWalletConnect) == null ? void 0 : _b.call(_a).catch(() => void 0);
      ConnectionController.state.status = "connecting";
      await wcConnectionPromise;
      wcConnectionPromise = void 0;
      state$8.wcPairingExpiry = void 0;
      ConnectionController.state.status = "connected";
    } else {
      await ((_d2 = (_c = ConnectionController._getClient()) == null ? void 0 : _c.connectWalletConnect) == null ? void 0 : _d2.call(_c));
    }
  },
  async connectExternal(options, chain, setChain = true) {
    var _a, _b, _c;
    const connectData = await ((_b = (_a = ConnectionController._getClient()) == null ? void 0 : _a.connectExternal) == null ? void 0 : _b.call(_a, options));
    if (setChain) {
      ChainController.setActiveNamespace(chain);
    }
    const connector = ConnectorController.state.allConnectors.find((c2) => c2.id === (options == null ? void 0 : options.id));
    const connectSuccessEventMethod = options.type === "AUTH" ? "email" : "browser";
    EventsController.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: connectSuccessEventMethod,
        name: (connector == null ? void 0 : connector.name) || "Unknown",
        view: RouterController.state.view,
        walletRank: (_c = connector == null ? void 0 : connector.explorerWallet) == null ? void 0 : _c.order
      }
    });
    return connectData;
  },
  async reconnectExternal(options) {
    var _a, _b;
    await ((_b = (_a = ConnectionController._getClient()) == null ? void 0 : _a.reconnectExternal) == null ? void 0 : _b.call(_a, options));
    const namespace = options.chain || ChainController.state.activeChain;
    if (namespace) {
      ConnectorController.setConnectorId(options.id, namespace);
    }
  },
  async setPreferredAccountType(accountType, namespace) {
    var _a;
    if (!namespace) {
      return;
    }
    ModalController.setLoading(true, ChainController.state.activeChain);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    ChainController.setAccountProp("preferredAccountType", accountType, namespace);
    await authConnector.provider.setPreferredAccount(accountType);
    StorageUtil.setPreferredAccountTypes(Object.entries(ChainController.state.chains).reduce((acc, [key, _2]) => {
      const namespace2 = key;
      const accountType2 = getPreferredAccountType(namespace2);
      if (accountType2 !== void 0) {
        acc[namespace2] = accountType2;
      }
      return acc;
    }, {}));
    await ConnectionController.reconnectExternal(authConnector);
    ModalController.setLoading(false, ChainController.state.activeChain);
    EventsController.sendEvent({
      type: "track",
      event: "SET_PREFERRED_ACCOUNT_TYPE",
      properties: {
        accountType,
        network: ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || ""
      }
    });
  },
  async signMessage(message) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.signMessage(message);
  },
  parseUnits(value, decimals) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.parseUnits(value, decimals);
  },
  formatUnits(value, decimals) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.formatUnits(value, decimals);
  },
  updateBalance(namespace) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.updateBalance(namespace);
  },
  async sendTransaction(args) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.sendTransaction(args);
  },
  async getCapabilities(params) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.getCapabilities(params);
  },
  async grantPermissions(params) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.grantPermissions(params);
  },
  async walletGetAssets(params) {
    var _a;
    return ((_a = ConnectionController._getClient()) == null ? void 0 : _a.walletGetAssets(params)) ?? {};
  },
  async estimateGas(args) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.estimateGas(args);
  },
  async writeContract(args) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.writeContract(args);
  },
  async writeSolanaTransaction(args) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.writeSolanaTransaction(args);
  },
  async getEnsAddress(value) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.getEnsAddress(value);
  },
  async getEnsAvatar(value) {
    var _a;
    return (_a = ConnectionController._getClient()) == null ? void 0 : _a.getEnsAvatar(value);
  },
  checkInstalled(ids) {
    var _a, _b;
    return ((_b = (_a = ConnectionController._getClient()) == null ? void 0 : _a.checkInstalled) == null ? void 0 : _b.call(_a, ids)) || false;
  },
  resetWcConnection() {
    state$8.wcUri = void 0;
    state$8.wcPairingExpiry = void 0;
    state$8.wcLinking = void 0;
    state$8.recentWallet = void 0;
    state$8.wcFetchingUri = false;
    state$8.status = "disconnected";
    TransactionsController.resetTransactions();
    StorageUtil.deleteWalletConnectDeepLink();
    StorageUtil.deleteRecentWallet();
    PublicStateController.set({ connectingWallet: void 0 });
  },
  resetUri() {
    state$8.wcUri = void 0;
    state$8.wcPairingExpiry = void 0;
    wcConnectionPromise = void 0;
    state$8.wcFetchingUri = false;
    PublicStateController.set({ connectingWallet: void 0 });
  },
  finalizeWcConnection(address) {
    var _a, _b;
    const { wcLinking, recentWallet } = ConnectionController.state;
    if (wcLinking) {
      StorageUtil.setWalletConnectDeepLink(wcLinking);
    }
    if (recentWallet) {
      StorageUtil.setAppKitRecent(recentWallet);
    }
    if (address) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address,
        properties: {
          method: wcLinking ? "mobile" : "qrcode",
          name: ((_b = (_a = RouterController.state.data) == null ? void 0 : _a.wallet) == null ? void 0 : _b.name) || "Unknown",
          view: RouterController.state.view,
          walletRank: recentWallet == null ? void 0 : recentWallet.order
        }
      });
    }
  },
  setWcBasic(wcBasic) {
    state$8.wcBasic = wcBasic;
  },
  setUri(uri) {
    state$8.wcUri = uri;
    state$8.wcFetchingUri = false;
    state$8.wcPairingExpiry = CoreHelperUtil.getPairingExpiry();
  },
  setWcLinking(wcLinking) {
    state$8.wcLinking = wcLinking;
  },
  setWcError(wcError) {
    state$8.wcError = wcError;
    state$8.wcFetchingUri = false;
    state$8.buffering = false;
  },
  setRecentWallet(wallet) {
    state$8.recentWallet = wallet;
  },
  setBuffering(buffering) {
    state$8.buffering = buffering;
  },
  setStatus(status) {
    state$8.status = status;
  },
  setIsSwitchingConnection(isSwitchingConnection) {
    state$8.isSwitchingConnection = isSwitchingConnection;
  },
  async disconnect({ id, namespace, initialDisconnect } = {}) {
    var _a;
    try {
      await ((_a = ConnectionController._getClient()) == null ? void 0 : _a.disconnect({
        id,
        chainNamespace: namespace,
        initialDisconnect
      }));
    } catch (error) {
      throw new AppKitError("Failed to disconnect", "INTERNAL_SDK_ERROR", error);
    }
  },
  async disconnectConnector({ id, namespace }) {
    var _a;
    try {
      await ((_a = ConnectionController._getClient()) == null ? void 0 : _a.disconnectConnector({ id, namespace }));
    } catch (error) {
      throw new AppKitError("Failed to disconnect connector", "INTERNAL_SDK_ERROR", error);
    }
  },
  setConnections(connections, chainNamespace) {
    const connectionsMap = new Map(state$8.connections);
    connectionsMap.set(chainNamespace, connections);
    state$8.connections = connectionsMap;
  },
  async handleAuthAccountSwitch({ address, namespace }) {
    var _a, _b;
    const accountData = ChainController.getAccountData(namespace);
    const smartAccount = (_b = (_a = accountData == null ? void 0 : accountData.user) == null ? void 0 : _a.accounts) == null ? void 0 : _b.find((c2) => c2.type === "smartAccount");
    const accountType = smartAccount && smartAccount.address.toLowerCase() === address.toLowerCase() && ConnectorControllerUtil.canSwitchToSmartAccount(namespace) ? "smartAccount" : "eoa";
    await ConnectionController.setPreferredAccountType(accountType, namespace);
  },
  async handleActiveConnection({ connection, namespace, address }) {
    const connector = ConnectorController.getConnectorById(connection.connectorId);
    const isAuthConnector = connection.connectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH;
    if (!connector) {
      throw new Error(`No connector found for connection: ${connection.connectorId}`);
    }
    if (!isAuthConnector) {
      const connectData = await ConnectionController.connectExternal({
        id: connector.id,
        type: connector.type,
        provider: connector.provider,
        address,
        chain: namespace
      }, namespace);
      return connectData == null ? void 0 : connectData.address;
    } else if (address) {
      await ConnectionController.handleAuthAccountSwitch({ address, namespace });
    }
    return address;
  },
  async handleDisconnectedConnection({ connection, namespace, address, closeModalOnConnect }) {
    var _a, _b;
    const connector = ConnectorController.getConnectorById(connection.connectorId);
    const authName = (_b = (_a = connection.auth) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase();
    const isAuthConnector = connection.connectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH;
    const isWCConnector = connection.connectorId === ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT;
    if (!connector) {
      throw new Error(`No connector found for connection: ${connection.connectorId}`);
    }
    let newAddress = void 0;
    if (isAuthConnector) {
      if (authName && ConnectorControllerUtil.isSocialProvider(authName)) {
        const { address: socialAddress } = await ConnectorControllerUtil.connectSocial({
          social: authName,
          closeModalOnConnect,
          onOpenFarcaster() {
            ModalController.open({ view: "ConnectingFarcaster" });
          },
          onConnect() {
            RouterController.replace("ProfileWallets");
          }
        });
        newAddress = socialAddress;
      } else {
        const { address: emailAddress } = await ConnectorControllerUtil.connectEmail({
          closeModalOnConnect,
          onOpen() {
            ModalController.open({ view: "EmailLogin" });
          },
          onConnect() {
            RouterController.replace("ProfileWallets");
          }
        });
        newAddress = emailAddress;
      }
    } else if (isWCConnector) {
      const { address: wcAddress } = await ConnectorControllerUtil.connectWalletConnect({
        walletConnect: true,
        connector,
        closeModalOnConnect,
        onOpen(isMobile) {
          const view = isMobile ? "AllWallets" : "ConnectingWalletConnect";
          if (ModalController.state.open) {
            RouterController.push(view);
          } else {
            ModalController.open({ view });
          }
        },
        onConnect() {
          RouterController.replace("ProfileWallets");
        }
      });
      newAddress = wcAddress;
    } else {
      const connectData = await ConnectionController.connectExternal({
        id: connector.id,
        type: connector.type,
        provider: connector.provider,
        chain: namespace
      }, namespace);
      if (connectData) {
        newAddress = connectData.address;
      }
    }
    if (isAuthConnector && address) {
      await ConnectionController.handleAuthAccountSwitch({ address, namespace });
    }
    return newAddress;
  },
  async switchConnection({ connection, address, namespace, closeModalOnConnect, onChange }) {
    var _a;
    let currentAddress = void 0;
    const caipAddress = (_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.caipAddress;
    if (caipAddress) {
      const { address: currentAddressParsed } = ParseUtil.parseCaipAddress(caipAddress);
      currentAddress = currentAddressParsed;
    }
    const status = ConnectionControllerUtil.getConnectionStatus(connection, namespace);
    switch (status) {
      case "connected":
      case "active": {
        const newAddress = await ConnectionController.handleActiveConnection({
          connection,
          namespace,
          address
        });
        if (currentAddress && newAddress) {
          const hasSwitchedAccount = newAddress.toLowerCase() !== currentAddress.toLowerCase();
          onChange == null ? void 0 : onChange({
            address: newAddress,
            namespace,
            hasSwitchedAccount,
            hasSwitchedWallet: status === "active"
          });
        }
        break;
      }
      case "disconnected": {
        const newAddress = await ConnectionController.handleDisconnectedConnection({
          connection,
          namespace,
          address,
          closeModalOnConnect
        });
        if (newAddress) {
          onChange == null ? void 0 : onChange({
            address: newAddress,
            namespace,
            hasSwitchedAccount: true,
            hasSwitchedWallet: true
          });
        }
        break;
      }
      default:
        throw new Error(`Invalid connection status: ${status}`);
    }
  }
};
const ConnectionController = withErrorBoundary(controller$6);
const ERC7811Utils = {
  /**
   * Creates a Balance object from an ERC7811 Asset object
   * @param asset - Asset object to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns Balance object
   */
  createBalance(asset, chainId) {
    const metadata = {
      name: asset.metadata["name"] || "",
      symbol: asset.metadata["symbol"] || "",
      decimals: asset.metadata["decimals"] || 0,
      value: asset.metadata["value"] || 0,
      price: asset.metadata["price"] || 0,
      iconUrl: asset.metadata["iconUrl"] || ""
    };
    return {
      name: metadata.name,
      symbol: metadata.symbol,
      chainId,
      address: asset.address === "native" ? void 0 : this.convertAddressToCAIP10Address(asset.address, chainId),
      value: metadata.value,
      price: metadata.price,
      quantity: {
        decimals: metadata.decimals.toString(),
        numeric: this.convertHexToBalance({
          hex: asset.balance,
          decimals: metadata.decimals
        })
      },
      iconUrl: metadata.iconUrl
    };
  },
  /**
   * Converts a hex string to a Balance object
   * @param hex - Hex string to convert
   * @param decimals - Number of decimals to use
   * @returns Balance object
   */
  convertHexToBalance({ hex, decimals }) {
    return formatUnits(BigInt(hex), decimals);
  },
  /**
   * Converts an address to a CAIP-10 address
   * @param address - Address to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns CAIP-10 address
   */
  convertAddressToCAIP10Address(address, chainId) {
    return `${chainId}:${address}`;
  },
  /**
   *  Creates a CAIP-2 Chain ID from a chain ID and namespace
   * @param chainId  - Chain ID in hex format
   * @param namespace  - Chain namespace
   * @returns
   */
  createCAIP2ChainId(chainId, namespace) {
    return `${namespace}:${parseInt(chainId, 16)}`;
  },
  /**
   * Gets the chain ID in hex format from a CAIP-2 Chain ID
   * @param caip2ChainId - CAIP-2 Chain ID
   * @returns Chain ID in hex format
   */
  getChainIdHexFromCAIP2ChainId(caip2ChainId) {
    const parts = caip2ChainId.split(":");
    if (parts.length < 2 || !parts[1]) {
      return "0x0";
    }
    const chainPart = parts[1];
    const parsed = parseInt(chainPart, 10);
    return isNaN(parsed) ? "0x0" : `0x${parsed.toString(16)}`;
  },
  /**
   * Checks if a response is a valid WalletGetAssetsResponse
   * @param response - The response to check
   * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
   */
  isWalletGetAssetsResponse(response) {
    if (typeof response !== "object" || response === null) {
      return false;
    }
    return Object.values(response).every((value) => Array.isArray(value) && value.every((asset) => this.isValidAsset(asset)));
  },
  /**
   * Checks if an asset object is valid.
   * @param asset - The asset object to check.
   * @returns True if the asset is valid, false otherwise.
   */
  isValidAsset(asset) {
    return typeof asset === "object" && asset !== null && typeof asset.address === "string" && typeof asset.balance === "string" && (asset.type === "ERC20" || asset.type === "NATIVE") && typeof asset.metadata === "object" && asset.metadata !== null && typeof asset.metadata["name"] === "string" && typeof asset.metadata["symbol"] === "string" && typeof asset.metadata["decimals"] === "number" && typeof asset.metadata["price"] === "number" && typeof asset.metadata["iconUrl"] === "string";
  }
};
let cachedViemUtils = void 0;
async function loadViemUtils() {
  if (!cachedViemUtils) {
    const { createPublicClient, http: http2, defineChain } = await __vitePreload(async () => {
      const { createPublicClient: createPublicClient2, http: http3, defineChain: defineChain2 } = await import("./index-BfvYm53x.js");
      return { createPublicClient: createPublicClient2, http: http3, defineChain: defineChain2 };
    }, true ? __vite__mapDeps([0,1,2,3]) : void 0);
    cachedViemUtils = {
      createPublicClient,
      http: http2,
      defineChain
    };
  }
  return cachedViemUtils;
}
const ViemUtil = {
  getBlockchainApiRpcUrl(caipNetworkId, projectId) {
    const url = new URL("https://rpc.walletconnect.org/v1/");
    url.searchParams.set("chainId", caipNetworkId);
    url.searchParams.set("projectId", projectId);
    return url.toString();
  },
  async getViemChain(caipNetwork) {
    const { defineChain } = await loadViemUtils();
    const { chainId } = ParseUtil.parseCaipNetworkId(caipNetwork.caipNetworkId);
    return defineChain({ ...caipNetwork, id: Number(chainId) });
  },
  async createViemPublicClient(caipNetwork) {
    const { createPublicClient, http: http2 } = await loadViemUtils();
    const projectId = OptionsController.state.projectId;
    const viemChain = await ViemUtil.getViemChain(caipNetwork);
    if (!viemChain) {
      throw new Error(`Chain ${caipNetwork.caipNetworkId} not found in viem/chains`);
    }
    return createPublicClient({
      chain: viemChain,
      transport: http2(ViemUtil.getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId))
    });
  }
};
const BalanceUtil = {
  /**
   * Get the balances of the user's tokens. If user connected with Auth provider or and on the EIP155 network,
   * it'll use the `wallet_getAssets` and `wallet_getCapabilities` calls to fetch the balance rather than Blockchain API
   * @param forceUpdate - If true, the balances will be fetched from the server
   * @returns The balances of the user's tokens
   */
  async getMyTokensWithBalance(params = {
    forceUpdate: void 0,
    caipNetwork: ChainController.state.activeCaipNetwork,
    address: ((_c) => (_c = ChainController.getAccountData()) == null ? void 0 : _c.address)()
  }) {
    const { forceUpdate, caipNetwork, address } = params;
    const isAuthConnector = ConnectorController.getConnectorId("eip155") === ConstantsUtil$2.CONNECTOR_ID.AUTH;
    if (!address) {
      return [];
    }
    const caipAddress = caipNetwork ? `${caipNetwork.caipNetworkId}:${address}` : address;
    const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
    if (cachedBalance) {
      return cachedBalance.balances;
    }
    if (caipNetwork && caipNetwork.chainNamespace === ConstantsUtil$2.CHAIN.EVM && isAuthConnector) {
      const eip155Balances = await this.getEIP155Balances(address, caipNetwork);
      if (eip155Balances) {
        return this.filterLowQualityTokens(eip155Balances);
      }
    }
    const response = await BlockchainApiController.getBalance(address, caipNetwork == null ? void 0 : caipNetwork.caipNetworkId, forceUpdate);
    return this.filterLowQualityTokens(response.balances);
  },
  /**
   * Get the balances of the user's tokens on the EIP155 network using native `wallet_getAssets` and `wallet_getCapabilities` calls
   * @param address - The address of the user
   * @param caipNetwork - The CAIP network
   * @returns The balances of the user's tokens on the EIP155 network
   */
  async getEIP155Balances(address, caipNetwork) {
    var _a, _b;
    try {
      const chainIdHex = ERC7811Utils.getChainIdHexFromCAIP2ChainId(caipNetwork.caipNetworkId);
      const walletCapabilities = await ConnectionController.getCapabilities(address);
      if (!((_b = (_a = walletCapabilities == null ? void 0 : walletCapabilities[chainIdHex]) == null ? void 0 : _a["assetDiscovery"]) == null ? void 0 : _b.supported)) {
        return null;
      }
      const walletGetAssetsResponse = await ConnectionController.walletGetAssets({
        account: address,
        chainFilter: [chainIdHex]
      });
      if (!ERC7811Utils.isWalletGetAssetsResponse(walletGetAssetsResponse)) {
        return null;
      }
      const assets = walletGetAssetsResponse[chainIdHex] || [];
      const filteredAssets = assets.map((asset) => ERC7811Utils.createBalance(asset, caipNetwork.caipNetworkId));
      StorageUtil.updateBalanceCache({
        caipAddress: `${caipNetwork.caipNetworkId}:${address}`,
        balance: { balances: filteredAssets },
        timestamp: Date.now()
      });
      return filteredAssets;
    } catch (error) {
      return null;
    }
  },
  /**
   * The 1Inch API includes many low-quality tokens in the balance response,
   * which appear inconsistently. This filter prevents them from being displayed.
   */
  filterLowQualityTokens(balances) {
    return balances.filter((balance) => balance.quantity.decimals !== "0");
  },
  async fetchERC20Balance({ caipAddress, assetAddress, caipNetwork }) {
    const publicClient = await ViemUtil.createViemPublicClient(caipNetwork);
    const { address } = ParseUtil.parseCaipAddress(caipAddress);
    const [{ result: name }, { result: symbol }, { result: balance }, { result: decimals }] = await publicClient.multicall({
      contracts: [
        {
          address: assetAddress,
          functionName: "name",
          args: [],
          abi: erc20Abi
        },
        {
          address: assetAddress,
          functionName: "symbol",
          args: [],
          abi: erc20Abi
        },
        {
          address: assetAddress,
          functionName: "balanceOf",
          args: [address],
          abi: erc20Abi
        },
        {
          address: assetAddress,
          functionName: "decimals",
          args: [],
          abi: erc20Abi
        }
      ]
    });
    return {
      name,
      symbol,
      decimals,
      balance: balance && decimals ? formatUnits(balance, decimals) : "0"
    };
  }
};
const state$7 = {
  adapters: {}
};
const AdapterController = {
  state: state$7,
  initialize(adapters) {
    state$7.adapters = { ...adapters };
  },
  get(namespace) {
    return state$7.adapters[namespace];
  }
};
const CLEAN_PROVIDERS_STATE = {
  eip155: void 0,
  solana: void 0,
  polkadot: void 0,
  bip122: void 0,
  cosmos: void 0,
  sui: void 0,
  stacks: void 0,
  ton: void 0
};
const state$6 = proxy({
  providers: { ...CLEAN_PROVIDERS_STATE },
  providerIds: { ...CLEAN_PROVIDERS_STATE }
});
const ProviderController = {
  state: state$6,
  subscribeKey(key, callback) {
    return subscribeKey(state$6, key, callback);
  },
  subscribe(callback) {
    return subscribe(state$6, () => {
      callback(state$6);
    });
  },
  subscribeProviders(callback) {
    return subscribe(state$6.providers, () => callback(state$6.providers));
  },
  setProvider(chainNamespace, provider) {
    if (chainNamespace && provider) {
      state$6.providers[chainNamespace] = ref(provider);
    }
  },
  getProvider(chainNamespace) {
    if (!chainNamespace) {
      return void 0;
    }
    return state$6.providers[chainNamespace];
  },
  setProviderId(chainNamespace, providerId) {
    if (providerId) {
      state$6.providerIds[chainNamespace] = providerId;
    }
  },
  getProviderId(chainNamespace) {
    if (!chainNamespace) {
      return void 0;
    }
    return state$6.providerIds[chainNamespace];
  },
  reset() {
    state$6.providers = { ...CLEAN_PROVIDERS_STATE };
    state$6.providerIds = { ...CLEAN_PROVIDERS_STATE };
  },
  resetChain(chainNamespace) {
    state$6.providers[chainNamespace] = void 0;
    state$6.providerIds[chainNamespace] = void 0;
  }
};
const SwapApiUtil = {
  async getTokenList(caipNetworkId) {
    var _a;
    const response = await BlockchainApiController.fetchSwapTokens({
      chainId: caipNetworkId
    });
    const tokens2 = ((_a = response == null ? void 0 : response.tokens) == null ? void 0 : _a.map((token) => ({
      ...token,
      eip2612: false,
      quantity: {
        decimals: "0",
        numeric: "0"
      },
      price: 0,
      value: 0
    }))) || [];
    return tokens2;
  },
  async fetchGasPrice() {
    var _a;
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (!caipNetwork) {
      return null;
    }
    try {
      switch (caipNetwork.chainNamespace) {
        case "solana":
          const lamportsPerSignature = (_a = await (ConnectionController == null ? void 0 : ConnectionController.estimateGas({ chainNamespace: "solana" }))) == null ? void 0 : _a.toString();
          return {
            standard: lamportsPerSignature,
            fast: lamportsPerSignature,
            instant: lamportsPerSignature
          };
        case "eip155":
        default:
          return await BlockchainApiController.fetchGasPrice({
            chainId: caipNetwork.caipNetworkId
          });
      }
    } catch {
      return null;
    }
  },
  async fetchSwapAllowance({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
    const response = await BlockchainApiController.fetchSwapAllowance({
      tokenAddress,
      userAddress
    });
    if ((response == null ? void 0 : response.allowance) && sourceTokenAmount && sourceTokenDecimals) {
      const parsedValue = ConnectionController.parseUnits(sourceTokenAmount, sourceTokenDecimals) || 0;
      const hasAllowance = BigInt(response.allowance) >= parsedValue;
      return hasAllowance;
    }
    return false;
  },
  async getMyTokensWithBalance(forceUpdate) {
    var _a;
    const balances = await BalanceUtil.getMyTokensWithBalance({
      forceUpdate,
      caipNetwork: ChainController.state.activeCaipNetwork,
      address: (_a = ChainController.getAccountData()) == null ? void 0 : _a.address
    });
    ChainController.setAccountProp("tokenBalance", balances, ChainController.state.activeChain);
    return this.mapBalancesToSwapTokens(balances);
  },
  /**
   * Maps the balances from Blockchain API to SwapTokenWithBalance array
   * @param balances
   * @returns SwapTokenWithBalance[]
   */
  mapBalancesToSwapTokens(balances) {
    return (balances == null ? void 0 : balances.map((token) => ({
      ...token,
      address: (token == null ? void 0 : token.address) ? token.address : getActiveNetworkTokenAddress(),
      decimals: parseInt(token.quantity.decimals, 10),
      logoUri: token.iconUrl,
      eip2612: false
    }))) || [];
  },
  async handleSwapError(error) {
    var _a, _b;
    try {
      const cause = error == null ? void 0 : error.cause;
      if (!(cause == null ? void 0 : cause.json)) {
        return void 0;
      }
      const response = await cause.json();
      const reason = (_b = (_a = response == null ? void 0 : response.reasons) == null ? void 0 : _a[0]) == null ? void 0 : _b.description;
      if (reason == null ? void 0 : reason.includes("insufficient liquidity")) {
        return "Insufficient liquidity";
      }
      return void 0;
    } catch {
      return void 0;
    }
  }
};
const state$5 = proxy({
  tokenBalances: [],
  loading: false
});
const controller$5 = {
  state: state$5,
  subscribe(callback) {
    return subscribe(state$5, () => callback(state$5));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$5, key, callback);
  },
  setToken(token) {
    if (token) {
      state$5.token = ref(token);
    }
  },
  setTokenAmount(sendTokenAmount) {
    state$5.sendTokenAmount = sendTokenAmount;
  },
  setReceiverAddress(receiverAddress) {
    state$5.receiverAddress = receiverAddress;
  },
  setReceiverProfileImageUrl(receiverProfileImageUrl) {
    state$5.receiverProfileImageUrl = receiverProfileImageUrl;
  },
  setReceiverProfileName(receiverProfileName) {
    state$5.receiverProfileName = receiverProfileName;
  },
  setNetworkBalanceInUsd(networkBalanceInUSD) {
    state$5.networkBalanceInUSD = networkBalanceInUSD;
  },
  setLoading(loading) {
    state$5.loading = loading;
  },
  getSdkEventProperties(error) {
    var _a, _b;
    return {
      message: CoreHelperUtil.parseError(error),
      isSmartAccount: getPreferredAccountType(ChainController.state.activeChain) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
      token: ((_a = state$5.token) == null ? void 0 : _a.symbol) || "",
      amount: state$5.sendTokenAmount ?? 0,
      network: ((_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId) || ""
    };
  },
  async sendToken() {
    var _a;
    try {
      SendController.setLoading(true);
      switch ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.chainNamespace) {
        case "eip155":
          await SendController.sendEvmToken();
          return;
        case "solana":
          await SendController.sendSolanaToken();
          return;
        default:
          throw new Error("Unsupported chain");
      }
    } catch (err) {
      if (ErrorUtil$1.isUserRejectedRequestError(err)) {
        throw new UserRejectedRequestError(err);
      }
      throw err;
    } finally {
      SendController.setLoading(false);
    }
  },
  async sendEvmToken() {
    var _a, _b, _c;
    const activeChainNamespace = ChainController.state.activeChain;
    if (!activeChainNamespace) {
      throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
    }
    const activeAccountType = getPreferredAccountType(activeChainNamespace);
    if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
      throw new Error("An amount and receiver address are required");
    }
    if (!SendController.state.token) {
      throw new Error("A token is required");
    }
    if ((_a = SendController.state.token) == null ? void 0 : _a.address) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: SendController.state.token.address,
          amount: SendController.state.sendTokenAmount,
          network: ((_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId) || ""
        }
      });
      const { hash } = await SendController.sendERC20Token({
        receiverAddress: SendController.state.receiverAddress,
        tokenAddress: SendController.state.token.address,
        sendTokenAmount: SendController.state.sendTokenAmount,
        decimals: SendController.state.token.quantity.decimals
      });
      if (hash) {
        state$5.hash = hash;
      }
    } else {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: SendController.state.token.symbol || "",
          amount: SendController.state.sendTokenAmount,
          network: ((_c = ChainController.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || ""
        }
      });
      const { hash } = await SendController.sendNativeToken({
        receiverAddress: SendController.state.receiverAddress,
        sendTokenAmount: SendController.state.sendTokenAmount,
        decimals: SendController.state.token.quantity.decimals
      });
      if (hash) {
        state$5.hash = hash;
      }
    }
  },
  async fetchTokenBalance(onError) {
    var _a, _b, _c;
    state$5.loading = true;
    const namespace = ChainController.state.activeChain;
    const chainId = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
    const chain = (_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.chainNamespace;
    const caipAddress = ((_c = ChainController.getAccountData(namespace)) == null ? void 0 : _c.caipAddress) ?? ChainController.state.activeCaipAddress;
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    if (state$5.lastRetry && !CoreHelperUtil.isAllowedRetry(state$5.lastRetry, 30 * ConstantsUtil$1.ONE_SEC_MS)) {
      state$5.loading = false;
      return [];
    }
    try {
      if (address && chainId && chain) {
        const balances = await BalanceUtil.getMyTokensWithBalance();
        state$5.tokenBalances = balances;
        state$5.lastRetry = void 0;
        return balances;
      }
    } catch (error) {
      state$5.lastRetry = Date.now();
      onError == null ? void 0 : onError(error);
      SnackController.showError("Token Balance Unavailable");
    } finally {
      state$5.loading = false;
    }
    return [];
  },
  fetchNetworkBalance() {
    if (state$5.tokenBalances.length === 0) {
      return;
    }
    const networkTokenBalances = SwapApiUtil.mapBalancesToSwapTokens(state$5.tokenBalances);
    if (!networkTokenBalances) {
      return;
    }
    const networkToken = networkTokenBalances.find((token) => token.address === getActiveNetworkTokenAddress());
    if (!networkToken) {
      return;
    }
    state$5.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async sendNativeToken(params) {
    var _a, _b, _c, _d2;
    RouterController.pushTransactionStack({});
    const to = params.receiverAddress;
    const address = (_a = ChainController.getAccountData()) == null ? void 0 : _a.address;
    const value = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    const data = "0x";
    const hash = await ConnectionController.sendTransaction({
      chainNamespace: ConstantsUtil$2.CHAIN.EVM,
      to,
      address,
      data,
      value: value ?? BigInt(0)
    });
    EventsController.sendEvent({
      type: "track",
      event: "SEND_SUCCESS",
      properties: {
        isSmartAccount: getPreferredAccountType("eip155") === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_b = SendController.state.token) == null ? void 0 : _b.symbol) || "",
        amount: params.sendTokenAmount,
        network: ((_c = ChainController.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || "",
        hash: hash || ""
      }
    });
    (_d2 = ConnectionController._getClient()) == null ? void 0 : _d2.updateBalance("eip155");
    SendController.resetSend();
    return { hash };
  },
  async sendERC20Token(params) {
    var _a, _b, _c;
    RouterController.pushTransactionStack({
      onSuccess() {
        RouterController.replace("Account");
      }
    });
    const amount = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    const address = (_a = ChainController.getAccountData()) == null ? void 0 : _a.address;
    if (address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
      const tokenAddress = CoreHelperUtil.getPlainAddress(params.tokenAddress);
      if (!tokenAddress) {
        throw new Error("SendController:sendERC20Token - tokenAddress is required");
      }
      const hash = await ConnectionController.writeContract({
        fromAddress: address,
        tokenAddress,
        args: [params.receiverAddress, amount ?? BigInt(0)],
        method: "transfer",
        abi: ContractUtil.getERC20Abi(tokenAddress),
        chainNamespace: ConstantsUtil$2.CHAIN.EVM
      });
      EventsController.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: getPreferredAccountType("eip155") === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b = SendController.state.token) == null ? void 0 : _b.symbol) || "",
          amount: params.sendTokenAmount,
          network: ((_c = ChainController.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || "",
          hash: hash || ""
        }
      });
      SendController.resetSend();
      return { hash };
    }
    return { hash: void 0 };
  },
  async sendSolanaToken() {
    var _a, _b, _c;
    if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) {
      throw new Error("An amount and receiver address are required");
    }
    RouterController.pushTransactionStack({
      onSuccess() {
        RouterController.replace("Account");
      }
    });
    let tokenMint = void 0;
    if (SendController.state.token && SendController.state.token.address !== ConstantsUtil$1.SOLANA_NATIVE_TOKEN_ADDRESS) {
      if (CoreHelperUtil.isCaipAddress(SendController.state.token.address)) {
        tokenMint = CoreHelperUtil.getPlainAddress(SendController.state.token.address);
      } else {
        tokenMint = SendController.state.token.address;
      }
    }
    const hash = await ConnectionController.sendTransaction({
      chainNamespace: "solana",
      tokenMint,
      to: SendController.state.receiverAddress,
      value: SendController.state.sendTokenAmount
    });
    if (hash) {
      state$5.hash = hash;
    }
    (_a = ConnectionController._getClient()) == null ? void 0 : _a.updateBalance("solana");
    EventsController.sendEvent({
      type: "track",
      event: "SEND_SUCCESS",
      properties: {
        isSmartAccount: false,
        token: ((_b = SendController.state.token) == null ? void 0 : _b.symbol) || "",
        amount: SendController.state.sendTokenAmount,
        network: ((_c = ChainController.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || "",
        hash: hash || ""
      }
    });
    SendController.resetSend();
  },
  resetSend() {
    state$5.token = void 0;
    state$5.sendTokenAmount = void 0;
    state$5.receiverAddress = void 0;
    state$5.receiverProfileImageUrl = void 0;
    state$5.receiverProfileName = void 0;
    state$5.loading = false;
    state$5.tokenBalances = [];
  }
};
const SendController = withErrorBoundary(controller$5);
const defaultAccountState = {
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false,
  addressLabels: /* @__PURE__ */ new Map(),
  user: void 0,
  preferredAccountType: void 0
};
const networkState = {
  caipNetwork: void 0,
  supportsAllNetworks: true,
  smartAccountEnabledNetworks: []
};
const state$4 = proxy({
  chains: proxyMap(),
  activeCaipAddress: void 0,
  activeChain: void 0,
  activeCaipNetwork: void 0,
  noAdapters: false,
  universalAdapter: {
    connectionControllerClient: void 0
  },
  isSwitchingNamespace: false
});
const controller$4 = {
  state: state$4,
  subscribe(callback) {
    return subscribe(state$4, () => {
      callback(state$4);
    });
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$4, key, callback);
  },
  subscribeAccountStateProp(property, callback, chain) {
    var _a;
    const activeChain = chain || state$4.activeChain;
    if (!activeChain) {
      return () => void 0;
    }
    return subscribeKey(((_a = state$4.chains.get(activeChain)) == null ? void 0 : _a.accountState) || {}, property, callback);
  },
  subscribeChainProp(property, callback, chain) {
    let prev = void 0;
    return subscribe(state$4.chains, () => {
      var _a;
      const activeChain = chain || state$4.activeChain;
      if (activeChain) {
        const nextValue = (_a = state$4.chains.get(activeChain)) == null ? void 0 : _a[property];
        if (prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      }
    });
  },
  initialize(adapters, caipNetworks, clients) {
    const { chainId: activeChainId, namespace: activeNamespace } = StorageUtil.getActiveNetworkProps();
    const activeCaipNetwork = caipNetworks == null ? void 0 : caipNetworks.find((network) => network.id.toString() === (activeChainId == null ? void 0 : activeChainId.toString()));
    const defaultAdapter = adapters.find((adapter) => (adapter == null ? void 0 : adapter.namespace) === activeNamespace);
    const adapterToActivate = defaultAdapter || (adapters == null ? void 0 : adapters[0]);
    const namespacesFromAdapters = adapters.map((a2) => a2.namespace).filter((n3) => n3 !== void 0);
    const namespaces = OptionsController.state.enableEmbedded ? /* @__PURE__ */ new Set([...namespacesFromAdapters]) : /* @__PURE__ */ new Set([...(caipNetworks == null ? void 0 : caipNetworks.map((network) => network.chainNamespace)) ?? []]);
    if ((adapters == null ? void 0 : adapters.length) === 0 || !adapterToActivate) {
      state$4.noAdapters = true;
    }
    if (!state$4.noAdapters) {
      state$4.activeChain = adapterToActivate == null ? void 0 : adapterToActivate.namespace;
      state$4.activeCaipNetwork = activeCaipNetwork;
      ChainController.setChainNetworkData(adapterToActivate == null ? void 0 : adapterToActivate.namespace, {
        caipNetwork: activeCaipNetwork
      });
      if (state$4.activeChain) {
        PublicStateController.set({ activeChain: adapterToActivate == null ? void 0 : adapterToActivate.namespace });
      }
    }
    namespaces.forEach((namespace) => {
      const namespaceNetworks = caipNetworks == null ? void 0 : caipNetworks.filter((network) => network.chainNamespace === namespace);
      const storedAccountTypes = StorageUtil.getPreferredAccountTypes() || {};
      const defaultTypes = { ...OptionsController.state.defaultAccountTypes, ...storedAccountTypes };
      ChainController.state.chains.set(namespace, {
        namespace,
        networkState: proxy({ ...networkState, caipNetwork: namespaceNetworks == null ? void 0 : namespaceNetworks[0] }),
        accountState: proxy({
          ...defaultAccountState,
          preferredAccountType: defaultTypes[namespace]
        }),
        caipNetworks: namespaceNetworks ?? [],
        ...clients
      });
      ChainController.setRequestedCaipNetworks(namespaceNetworks ?? [], namespace);
    });
  },
  removeAdapter(namespace) {
    var _a, _b;
    if (state$4.activeChain === namespace) {
      const nextAdapter = Array.from(state$4.chains.entries()).find(([chainNamespace]) => chainNamespace !== namespace);
      if (nextAdapter) {
        const caipNetwork = (_b = (_a = nextAdapter[1]) == null ? void 0 : _a.caipNetworks) == null ? void 0 : _b[0];
        if (caipNetwork) {
          ChainController.setActiveCaipNetwork(caipNetwork);
        }
      }
    }
    state$4.chains.delete(namespace);
  },
  addAdapter(adapter, { connectionControllerClient }, caipNetworks) {
    if (!adapter.namespace) {
      throw new Error("ChainController:addAdapter - adapter must have a namespace");
    }
    state$4.chains.set(adapter.namespace, {
      namespace: adapter.namespace,
      networkState: { ...networkState, caipNetwork: caipNetworks[0] },
      accountState: { ...defaultAccountState },
      caipNetworks,
      connectionControllerClient
    });
    ChainController.setRequestedCaipNetworks((caipNetworks == null ? void 0 : caipNetworks.filter((caipNetwork) => caipNetwork.chainNamespace === adapter.namespace)) ?? [], adapter.namespace);
  },
  addNetwork(network) {
    var _a;
    const chainAdapter = state$4.chains.get(network.chainNamespace);
    if (chainAdapter) {
      const newNetworks = [...chainAdapter.caipNetworks || []];
      if (!((_a = chainAdapter.caipNetworks) == null ? void 0 : _a.find((caipNetwork) => caipNetwork.id === network.id))) {
        newNetworks.push(network);
      }
      state$4.chains.set(network.chainNamespace, { ...chainAdapter, caipNetworks: newNetworks });
      ChainController.setRequestedCaipNetworks(newNetworks, network.chainNamespace);
      ConnectorController.filterByNamespace(network.chainNamespace, true);
    }
  },
  removeNetwork(namespace, networkId) {
    var _a, _b, _c;
    const chainAdapter = state$4.chains.get(namespace);
    if (chainAdapter) {
      const isActiveNetwork = ((_a = state$4.activeCaipNetwork) == null ? void 0 : _a.id) === networkId;
      const newCaipNetworksOfAdapter = [
        ...((_b = chainAdapter.caipNetworks) == null ? void 0 : _b.filter((network) => network.id !== networkId)) || []
      ];
      if (isActiveNetwork && ((_c = chainAdapter == null ? void 0 : chainAdapter.caipNetworks) == null ? void 0 : _c[0])) {
        ChainController.setActiveCaipNetwork(chainAdapter.caipNetworks[0]);
      }
      state$4.chains.set(namespace, { ...chainAdapter, caipNetworks: newCaipNetworksOfAdapter });
      ChainController.setRequestedCaipNetworks(newCaipNetworksOfAdapter || [], namespace);
      if (newCaipNetworksOfAdapter.length === 0) {
        ConnectorController.filterByNamespace(namespace, false);
      }
    }
  },
  setAdapterNetworkState(chain, props) {
    const chainAdapter = state$4.chains.get(chain);
    if (chainAdapter) {
      chainAdapter.networkState = {
        ...chainAdapter.networkState || networkState,
        ...props
      };
      state$4.chains.set(chain, chainAdapter);
    }
  },
  setChainAccountData(chain, accountProps, _unknown = true) {
    if (!chain) {
      throw new Error("Chain is required to update chain account data");
    }
    const chainAdapter = state$4.chains.get(chain);
    if (chainAdapter) {
      const newAccountState = {
        ...chainAdapter.accountState || defaultAccountState,
        ...accountProps
      };
      state$4.chains.set(chain, { ...chainAdapter, accountState: newAccountState });
      if (state$4.chains.size === 1 || state$4.activeChain === chain) {
        if (accountProps.caipAddress) {
          state$4.activeCaipAddress = accountProps.caipAddress;
        }
      }
    }
  },
  setChainNetworkData(chain, networkProps) {
    if (!chain) {
      return;
    }
    const chainAdapter = state$4.chains.get(chain);
    if (chainAdapter) {
      const newNetworkState = { ...chainAdapter.networkState || networkState, ...networkProps };
      state$4.chains.set(chain, { ...chainAdapter, networkState: newNetworkState });
    }
  },
  // eslint-disable-next-line max-params
  setAccountProp(prop, value, chain, replaceState = true) {
    ChainController.setChainAccountData(chain, { [prop]: value }, replaceState);
  },
  setActiveNamespace(chain) {
    var _a, _b;
    state$4.activeChain = chain;
    const newAdapter = chain ? state$4.chains.get(chain) : void 0;
    const caipNetwork = (_a = newAdapter == null ? void 0 : newAdapter.networkState) == null ? void 0 : _a.caipNetwork;
    if ((caipNetwork == null ? void 0 : caipNetwork.id) && chain) {
      state$4.activeCaipAddress = (_b = newAdapter == null ? void 0 : newAdapter.accountState) == null ? void 0 : _b.caipAddress;
      state$4.activeCaipNetwork = caipNetwork;
      ChainController.setChainNetworkData(chain, { caipNetwork });
      StorageUtil.setActiveCaipNetworkId(caipNetwork == null ? void 0 : caipNetwork.caipNetworkId);
      PublicStateController.set({
        activeChain: chain,
        selectedNetworkId: caipNetwork == null ? void 0 : caipNetwork.caipNetworkId
      });
    }
  },
  setActiveCaipNetwork(caipNetwork) {
    var _a, _b;
    if (!caipNetwork) {
      return;
    }
    const isSameNamespace = state$4.activeChain === caipNetwork.chainNamespace;
    if (!isSameNamespace) {
      ChainController.setIsSwitchingNamespace(true);
    }
    const newAdapter = state$4.chains.get(caipNetwork.chainNamespace);
    state$4.activeChain = caipNetwork.chainNamespace;
    state$4.activeCaipNetwork = caipNetwork;
    ChainController.setChainNetworkData(caipNetwork.chainNamespace, { caipNetwork });
    let address = (_a = newAdapter == null ? void 0 : newAdapter.accountState) == null ? void 0 : _a.address;
    if (address) {
      state$4.activeCaipAddress = `${caipNetwork.chainNamespace}:${caipNetwork.id}:${address}`;
    } else if (isSameNamespace && state$4.activeCaipAddress) {
      const { address: parsedAddress } = ParseUtil.parseCaipAddress(state$4.activeCaipAddress);
      address = parsedAddress;
      state$4.activeCaipAddress = `${caipNetwork.caipNetworkId}:${address}`;
    } else {
      state$4.activeCaipAddress = void 0;
    }
    ChainController.setChainAccountData(caipNetwork.chainNamespace, {
      address,
      caipAddress: state$4.activeCaipAddress
    });
    SendController.resetSend();
    PublicStateController.set({
      activeChain: state$4.activeChain,
      selectedNetworkId: (_b = state$4.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId
    });
    StorageUtil.setActiveCaipNetworkId(caipNetwork.caipNetworkId);
    const isSupported = ChainController.checkIfSupportedNetwork(caipNetwork.chainNamespace);
    if (!isSupported && OptionsController.state.enableNetworkSwitch && !OptionsController.state.allowUnsupportedChain && !ConnectionController.state.wcBasic) {
      ChainController.showUnsupportedChainUI();
    }
  },
  addCaipNetwork(caipNetwork) {
    var _a;
    if (!caipNetwork) {
      return;
    }
    const chain = state$4.chains.get(caipNetwork.chainNamespace);
    if (chain) {
      (_a = chain == null ? void 0 : chain.caipNetworks) == null ? void 0 : _a.push(caipNetwork);
    }
  },
  async switchActiveNamespace(namespace) {
    var _a;
    if (!namespace) {
      return;
    }
    const isDifferentChain = namespace !== ChainController.state.activeChain;
    const caipNetworkOfNamespace = (_a = ChainController.getNetworkData(namespace)) == null ? void 0 : _a.caipNetwork;
    const firstNetworkWithChain = ChainController.getCaipNetworkByNamespace(namespace, caipNetworkOfNamespace == null ? void 0 : caipNetworkOfNamespace.id);
    if (isDifferentChain && firstNetworkWithChain) {
      await ChainController.switchActiveNetwork(firstNetworkWithChain);
    }
  },
  async switchActiveNetwork(network, { throwOnFailure = false } = {}) {
    var _a;
    const namespace = ChainController.state.activeChain;
    if (!namespace) {
      throw new Error("ChainController:switchActiveNetwork - namespace is required");
    }
    const isAuthProvider = ProviderController.getProviderId(state$4.activeChain) === "AUTH";
    const namespaceAddress = (_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.address;
    const isAuthSupported = ConstantsUtil$2.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(network.chainNamespace);
    try {
      if (namespaceAddress && network.chainNamespace === namespace || isAuthProvider && isAuthSupported) {
        const adapter = AdapterController.get(network.chainNamespace);
        if (!adapter) {
          throw new Error("Adapter not found");
        }
        await adapter.switchNetwork({ caipNetwork: network });
      }
      ChainController.setActiveCaipNetwork(network);
    } catch (error) {
      if (throwOnFailure) {
        throw error;
      }
    }
    EventsController.sendEvent({
      type: "track",
      event: "SWITCH_NETWORK",
      properties: { network: network.caipNetworkId }
    });
  },
  getConnectionControllerClient(_chain) {
    const chain = _chain || state$4.activeChain;
    if (!chain) {
      throw new Error("Chain is required to get connection controller client");
    }
    const chainAdapter = state$4.chains.get(chain);
    if (!(chainAdapter == null ? void 0 : chainAdapter.connectionControllerClient)) {
      throw new Error("ConnectionController client not set");
    }
    return chainAdapter.connectionControllerClient;
  },
  getNetworkProp(key, namespace) {
    var _a;
    const chainNetworkState = (_a = state$4.chains.get(namespace)) == null ? void 0 : _a.networkState;
    if (!chainNetworkState) {
      return void 0;
    }
    return chainNetworkState[key];
  },
  getRequestedCaipNetworks(chainToFilter) {
    const adapter = state$4.chains.get(chainToFilter);
    const { approvedCaipNetworkIds = [], requestedCaipNetworks = [] } = (adapter == null ? void 0 : adapter.networkState) || {};
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    const filteredNetworks = sortedNetworks.filter((network) => network == null ? void 0 : network.id);
    return filteredNetworks;
  },
  getAllRequestedCaipNetworks() {
    const requestedCaipNetworks = [];
    state$4.chains.forEach((chainAdapter) => {
      if (!chainAdapter.namespace) {
        throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
      }
      const caipNetworks = ChainController.getRequestedCaipNetworks(chainAdapter.namespace);
      requestedCaipNetworks.push(...caipNetworks);
    });
    return requestedCaipNetworks;
  },
  setRequestedCaipNetworks(caipNetworks, chain) {
    ChainController.setAdapterNetworkState(chain, { requestedCaipNetworks: caipNetworks });
    const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const namespaces = allRequestedCaipNetworks.map((network) => network.chainNamespace);
    const uniqueNamespaces = Array.from(new Set(namespaces));
    ConnectorController.filterByNamespaces(uniqueNamespaces);
  },
  getAllApprovedCaipNetworkIds() {
    const approvedCaipNetworkIds = [];
    state$4.chains.forEach((chainAdapter) => {
      if (!chainAdapter.namespace) {
        throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
      }
      const approvedIds = ChainController.getApprovedCaipNetworkIds(chainAdapter.namespace);
      approvedCaipNetworkIds.push(...approvedIds);
    });
    return approvedCaipNetworkIds;
  },
  getActiveCaipNetwork(chainNamespace) {
    var _a, _b;
    if (chainNamespace) {
      return (_b = (_a = state$4.chains.get(chainNamespace)) == null ? void 0 : _a.networkState) == null ? void 0 : _b.caipNetwork;
    }
    return state$4.activeCaipNetwork;
  },
  getActiveCaipAddress() {
    return state$4.activeCaipAddress;
  },
  getApprovedCaipNetworkIds(namespace) {
    var _a;
    const adapter = state$4.chains.get(namespace);
    const approvedCaipNetworkIds = ((_a = adapter == null ? void 0 : adapter.networkState) == null ? void 0 : _a.approvedCaipNetworkIds) || [];
    return approvedCaipNetworkIds;
  },
  setApprovedCaipNetworksData(namespace, params) {
    ChainController.setAdapterNetworkState(namespace, params);
  },
  checkIfSupportedNetwork(namespace, caipNetworkId) {
    var _a;
    const activeCaipNetworkId = caipNetworkId || ((_a = state$4.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(namespace);
    if (!requestedCaipNetworks.length) {
      return true;
    }
    return requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.some((network) => network.caipNetworkId === activeCaipNetworkId);
  },
  checkIfSupportedChainId(chainId) {
    if (!state$4.activeChain) {
      return true;
    }
    const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(state$4.activeChain);
    return requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.some((network) => network.id === chainId);
  },
  checkIfSmartAccountEnabled() {
    var _a, _b;
    const networkId = NetworkUtil$1.caipNetworkIdToNumber((_a = state$4.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId);
    const activeChain = state$4.activeChain;
    if (!activeChain || !networkId) {
      return false;
    }
    const smartAccountEnabledNetworks = ((_b = W3mFrameStorage.get(W3mFrameConstants.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : _b.split(",")) || [];
    return Boolean(smartAccountEnabledNetworks == null ? void 0 : smartAccountEnabledNetworks.includes(networkId.toString()));
  },
  showUnsupportedChainUI() {
    ModalController.open({ view: "UnsupportedChain" });
  },
  checkIfNamesSupported() {
    const activeCaipNetwork = state$4.activeCaipNetwork;
    return Boolean((activeCaipNetwork == null ? void 0 : activeCaipNetwork.chainNamespace) && ConstantsUtil$1.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(activeCaipNetwork.chainNamespace));
  },
  resetNetwork(namespace) {
    ChainController.setAdapterNetworkState(namespace, {
      approvedCaipNetworkIds: void 0,
      supportsAllNetworks: true
    });
  },
  resetAccount(chain) {
    var _a, _b;
    const chainToWrite = chain;
    if (!chainToWrite) {
      throw new Error("Chain is required to set account prop");
    }
    const currentAccountType = (_b = (_a = ChainController.state.chains.get(chainToWrite)) == null ? void 0 : _a.accountState) == null ? void 0 : _b.preferredAccountType;
    const optionsAccountType = OptionsController.state.defaultAccountTypes[chainToWrite];
    state$4.activeCaipAddress = void 0;
    ChainController.setChainAccountData(chainToWrite, {
      smartAccountDeployed: false,
      currentTab: 0,
      caipAddress: void 0,
      address: void 0,
      balance: void 0,
      balanceSymbol: void 0,
      profileName: void 0,
      profileImage: void 0,
      addressExplorerUrl: void 0,
      tokenBalance: [],
      connectedWalletInfo: void 0,
      preferredAccountType: optionsAccountType || currentAccountType,
      socialProvider: void 0,
      socialWindow: void 0,
      farcasterUrl: void 0,
      user: void 0,
      status: "disconnected"
    });
    ConnectorController.removeConnectorId(chainToWrite);
  },
  setIsSwitchingNamespace(isSwitchingNamespace) {
    state$4.isSwitchingNamespace = isSwitchingNamespace;
  },
  getFirstCaipNetworkSupportsAuthConnector() {
    var _a, _b;
    const availableChains = [];
    let firstCaipNetwork = void 0;
    state$4.chains.forEach((chain) => {
      if (ConstantsUtil$2.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((ns) => ns === chain.namespace)) {
        if (chain.namespace) {
          availableChains.push(chain.namespace);
        }
      }
    });
    if (availableChains.length > 0) {
      const firstAvailableChain = availableChains[0];
      firstCaipNetwork = firstAvailableChain ? (_b = (_a = state$4.chains.get(firstAvailableChain)) == null ? void 0 : _a.caipNetworks) == null ? void 0 : _b[0] : void 0;
      return firstCaipNetwork;
    }
    return void 0;
  },
  getAccountData(chainNamespace) {
    var _a;
    const namespace = chainNamespace || state$4.activeChain;
    if (!namespace) {
      return void 0;
    }
    return (_a = ChainController.state.chains.get(namespace)) == null ? void 0 : _a.accountState;
  },
  getNetworkData(chainNamespace) {
    var _a;
    const namespace = chainNamespace || state$4.activeChain;
    if (!namespace) {
      return void 0;
    }
    return (_a = ChainController.state.chains.get(namespace)) == null ? void 0 : _a.networkState;
  },
  getCaipNetworkByNamespace(chainNamespace, chainId) {
    var _a, _b, _c;
    if (!chainNamespace) {
      return void 0;
    }
    const chain = ChainController.state.chains.get(chainNamespace);
    const byChainId = (_a = chain == null ? void 0 : chain.caipNetworks) == null ? void 0 : _a.find((network) => network.id.toString() === (chainId == null ? void 0 : chainId.toString()));
    if (byChainId) {
      return byChainId;
    }
    return ((_b = chain == null ? void 0 : chain.networkState) == null ? void 0 : _b.caipNetwork) || ((_c = chain == null ? void 0 : chain.caipNetworks) == null ? void 0 : _c[0]);
  },
  /**
   * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
   * @param namespace - The namespace to get the requested CaipNetwork IDs for
   * @returns The requested CaipNetwork IDs
   */
  getRequestedCaipNetworkIds() {
    const namespace = ConnectorController.state.filterByNamespace;
    const chains = namespace ? [state$4.chains.get(namespace)] : Array.from(state$4.chains.values());
    return chains.flatMap((chain) => (chain == null ? void 0 : chain.caipNetworks) || []).map((caipNetwork) => caipNetwork.caipNetworkId);
  },
  getCaipNetworks(namespace) {
    if (namespace) {
      return ChainController.getRequestedCaipNetworks(namespace);
    }
    return ChainController.getAllRequestedCaipNetworks();
  },
  getCaipNetworkById(id, namespace) {
    return controller$4.getCaipNetworks(namespace).find((n3) => n3.id.toString() === id.toString() || n3.caipNetworkId.toString() === id.toString());
  },
  setLastConnectedSIWECaipNetwork(network) {
    state$4.lastConnectedSIWECaipNetwork = network;
  },
  getLastConnectedSIWECaipNetwork() {
    return state$4.lastConnectedSIWECaipNetwork;
  },
  async fetchTokenBalance(onError) {
    var _a, _b;
    const accountState = ChainController.getAccountData();
    if (!accountState) {
      return [];
    }
    const chainId = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
    const chain = (_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.chainNamespace;
    const caipAddress = ChainController.state.activeCaipAddress;
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    ChainController.setAccountProp("balanceLoading", true, chain);
    if (accountState.lastRetry && !CoreHelperUtil.isAllowedRetry(accountState.lastRetry, 30 * ConstantsUtil$1.ONE_SEC_MS)) {
      ChainController.setAccountProp("balanceLoading", false, chain);
      return [];
    }
    try {
      if (address && chainId && chain) {
        const balance = await BalanceUtil.getMyTokensWithBalance();
        ChainController.setAccountProp("tokenBalance", balance, chain);
        ChainController.setAccountProp("lastRetry", void 0, chain);
        ChainController.setAccountProp("balanceLoading", false, chain);
        return balance;
      }
    } catch (error) {
      ChainController.setAccountProp("lastRetry", Date.now(), chain);
      onError == null ? void 0 : onError(error);
      SnackController.showError("Token Balance Unavailable");
    } finally {
      ChainController.setAccountProp("balanceLoading", false, chain);
    }
    return [];
  },
  isCaipNetworkDisabled(network) {
    var _a;
    const networkNamespace = network.chainNamespace;
    const isNextNamespaceConnected = Boolean((_a = ChainController.getAccountData(networkNamespace)) == null ? void 0 : _a.caipAddress);
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const shouldSupportAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", networkNamespace) !== false;
    const connectorId = ConnectorController.getConnectorId(networkNamespace);
    const authConnector = ConnectorController.getAuthConnector();
    const isConnectedWithAuth = connectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH && authConnector;
    if (!isNextNamespaceConnected || shouldSupportAllNetworks || isConnectedWithAuth) {
      return false;
    }
    return !(approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.caipNetworkId));
  }
};
const ChainController = withErrorBoundary(controller$4);
const NetworkUtil = {
  /**
   * Function to handle the network switch.
   * This function has variety of conditions to handle the network switch depending on the connectors or namespace's connection states.
   * @param args.network - The network to switch to.
   * @param args.shouldConfirmSwitch - Whether to confirm the switch. If true, the user will be asked to confirm the switch if necessary.
   * @returns void
   */
  onSwitchNetwork({ network, ignoreSwitchConfirmation = false }) {
    var _a, _b;
    const currentNetwork = ChainController.state.activeCaipNetwork;
    const currentNamespace = ChainController.state.activeChain;
    const routerData = RouterController.state.data;
    const isSameNetwork = network.id === (currentNetwork == null ? void 0 : currentNetwork.id);
    if (isSameNetwork) {
      return;
    }
    const isCurrentNamespaceConnected = Boolean((_a = ChainController.getAccountData(currentNamespace)) == null ? void 0 : _a.address);
    const isNextNamespaceConnected = Boolean((_b = ChainController.getAccountData(network.chainNamespace)) == null ? void 0 : _b.address);
    const isDifferentNamespace = network.chainNamespace !== currentNamespace;
    const connectorId = ConnectorController.getConnectorId(currentNamespace);
    const isConnectedWithAuth = connectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH;
    const isSupportedForAuthConnector = ConstantsUtil$2.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((c2) => c2 === network.chainNamespace);
    if (ignoreSwitchConfirmation || isConnectedWithAuth && isSupportedForAuthConnector) {
      RouterController.push("SwitchNetwork", { ...routerData, network });
    } else if (
      /**
       * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first.
       */
      isCurrentNamespaceConnected && isDifferentNamespace && !isNextNamespaceConnected
    ) {
      RouterController.push("SwitchActiveChain", {
        switchToChain: network.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network
      });
    } else {
      RouterController.push("SwitchNetwork", { ...routerData, network });
    }
  }
};
const state$3 = proxy({
  loading: false,
  loadingNamespaceMap: /* @__PURE__ */ new Map(),
  open: false,
  shake: false,
  namespace: void 0
});
const controller$3 = {
  state: state$3,
  subscribe(callback) {
    return subscribe(state$3, () => callback(state$3));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$3, key, callback);
  },
  async open(options) {
    var _a, _b;
    const namespace = options == null ? void 0 : options.namespace;
    const currentNamespace = ChainController.state.activeChain;
    const isSwitchingNamespace = namespace && namespace !== currentNamespace;
    const caipAddress = (_a = ChainController.getAccountData(options == null ? void 0 : options.namespace)) == null ? void 0 : _a.caipAddress;
    const hasNoAdapters = ChainController.state.noAdapters;
    if (ConnectionController.state.wcBasic) {
      ApiController.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      });
    } else {
      await ApiController.prefetch();
    }
    ConnectorController.setFilterByNamespace(options == null ? void 0 : options.namespace);
    ModalController.setLoading(true, namespace);
    if (namespace && isSwitchingNamespace) {
      const namespaceNetwork = ((_b = ChainController.getNetworkData(namespace)) == null ? void 0 : _b.caipNetwork) || ChainController.getRequestedCaipNetworks(namespace)[0];
      if (namespaceNetwork) {
        if (hasNoAdapters) {
          await ChainController.switchActiveNetwork(namespaceNetwork);
          RouterController.push("ConnectingWalletConnectBasic");
        } else {
          NetworkUtil.onSwitchNetwork({ network: namespaceNetwork, ignoreSwitchConfirmation: true });
        }
      }
    } else if (OptionsController.state.manualWCControl || hasNoAdapters && !caipAddress) {
      if (CoreHelperUtil.isMobile()) {
        RouterController.reset("AllWallets");
      } else {
        RouterController.reset("ConnectingWalletConnectBasic");
      }
    } else if (options == null ? void 0 : options.view) {
      RouterController.reset(options.view, options.data);
    } else if (caipAddress) {
      RouterController.reset("Account");
    } else {
      RouterController.reset("Connect");
    }
    state$3.open = true;
    PublicStateController.set({ open: true });
    EventsController.sendEvent({
      type: "track",
      event: "MODAL_OPEN",
      properties: { connected: Boolean(caipAddress) }
    });
  },
  close() {
    const isEmbeddedEnabled = OptionsController.state.enableEmbedded;
    const isConnected = Boolean(ChainController.state.activeCaipAddress);
    if (state$3.open) {
      EventsController.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: { connected: isConnected }
      });
    }
    state$3.open = false;
    RouterController.reset("Connect");
    ModalController.clearLoading();
    if (isEmbeddedEnabled) {
      if (isConnected) {
        RouterController.replace("Account");
      } else {
        RouterController.push("Connect");
      }
    } else {
      PublicStateController.set({ open: false });
    }
    ConnectionController.resetUri();
  },
  setLoading(loading, namespace) {
    if (namespace) {
      state$3.loadingNamespaceMap.set(namespace, loading);
    }
    state$3.loading = loading;
    PublicStateController.set({ loading });
  },
  clearLoading() {
    state$3.loadingNamespaceMap.clear();
    state$3.loading = false;
    PublicStateController.set({ loading: false });
  },
  shake() {
    if (state$3.shake) {
      return;
    }
    state$3.shake = true;
    setTimeout(() => {
      state$3.shake = false;
    }, 500);
  }
};
const ModalController = withErrorBoundary(controller$3);
const USDC_CURRENCY_DEFAULT = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
};
const USD_CURRENCY_DEFAULT = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
    }
  ]
};
const defaultState = {
  providers: ONRAMP_PROVIDERS,
  selectedProvider: null,
  error: null,
  purchaseCurrency: USDC_CURRENCY_DEFAULT,
  paymentCurrency: USD_CURRENCY_DEFAULT,
  purchaseCurrencies: [USDC_CURRENCY_DEFAULT],
  paymentCurrencies: [],
  quotesLoading: false
};
const state$2 = proxy(defaultState);
const controller$2 = {
  state: state$2,
  subscribe(callback) {
    return subscribe(state$2, () => callback(state$2));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$2, key, callback);
  },
  setSelectedProvider(provider) {
    var _a, _b;
    if (provider && provider.name === "meld") {
      const activeChain = ChainController.state.activeChain;
      const currency = activeChain === ConstantsUtil$2.CHAIN.SOLANA ? "SOL" : "USDC";
      const address = activeChain ? ((_b = (_a = ChainController.state.chains.get(activeChain)) == null ? void 0 : _a.accountState) == null ? void 0 : _b.address) ?? "" : "";
      const url = new URL(provider.url);
      url.searchParams.append("publicKey", MELD_PUBLIC_KEY);
      url.searchParams.append("destinationCurrencyCode", currency);
      url.searchParams.append("walletAddress", address);
      url.searchParams.append("externalCustomerId", OptionsController.state.projectId);
      state$2.selectedProvider = { ...provider, url: url.toString() };
    } else {
      state$2.selectedProvider = provider;
    }
  },
  setOnrampProviders(providers) {
    if (Array.isArray(providers) && providers.every((item) => typeof item === "string")) {
      const validOnramp = providers;
      const newProviders = ONRAMP_PROVIDERS.filter((provider) => validOnramp.includes(provider.name));
      state$2.providers = newProviders;
    } else {
      state$2.providers = [];
    }
  },
  setPurchaseCurrency(currency) {
    state$2.purchaseCurrency = currency;
  },
  setPaymentCurrency(currency) {
    state$2.paymentCurrency = currency;
  },
  setPurchaseAmount(amount) {
    OnRampController.state.purchaseAmount = amount;
  },
  setPaymentAmount(amount) {
    OnRampController.state.paymentAmount = amount;
  },
  async getAvailableCurrencies() {
    const options = await BlockchainApiController.getOnrampOptions();
    state$2.purchaseCurrencies = options.purchaseCurrencies;
    state$2.paymentCurrencies = options.paymentCurrencies;
    state$2.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
    state$2.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
    await ApiController.fetchCurrencyImages(options.paymentCurrencies.map((currency) => currency.id));
    await ApiController.fetchTokenImages(options.purchaseCurrencies.map((currency) => currency.symbol));
  },
  async getQuote() {
    var _a, _b;
    state$2.quotesLoading = true;
    try {
      const quote = await BlockchainApiController.getOnrampQuote({
        purchaseCurrency: state$2.purchaseCurrency,
        paymentCurrency: state$2.paymentCurrency,
        amount: ((_a = state$2.paymentAmount) == null ? void 0 : _a.toString()) || "0",
        network: (_b = state$2.purchaseCurrency) == null ? void 0 : _b.symbol
      });
      state$2.quotesLoading = false;
      state$2.purchaseAmount = Number(quote == null ? void 0 : quote.purchaseAmount.amount);
      return quote;
    } catch (error) {
      state$2.error = error.message;
      state$2.quotesLoading = false;
      return null;
    } finally {
      state$2.quotesLoading = false;
    }
  },
  resetState() {
    state$2.selectedProvider = null;
    state$2.error = null;
    state$2.purchaseCurrency = USDC_CURRENCY_DEFAULT;
    state$2.paymentCurrency = USD_CURRENCY_DEFAULT;
    state$2.purchaseCurrencies = [USDC_CURRENCY_DEFAULT];
    state$2.paymentCurrencies = [];
    state$2.paymentAmount = void 0;
    state$2.purchaseAmount = void 0;
    state$2.quotesLoading = false;
  }
};
const OnRampController = withErrorBoundary(controller$2);
const SLIP44_MSB = 2147483648;
const EnsUtil = {
  convertEVMChainIdToCoinType(chainId) {
    if (chainId >= SLIP44_MSB) {
      throw new Error("Invalid chainId");
    }
    return (SLIP44_MSB | chainId) >>> 0;
  }
};
const state$1 = proxy({
  suggestions: [],
  loading: false
});
const controller$1 = {
  state: state$1,
  subscribe(callback) {
    return subscribe(state$1, () => callback(state$1));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$1, key, callback);
  },
  async resolveName(name) {
    var _a, _b;
    try {
      return await BlockchainApiController.lookupEnsName(name);
    } catch (e2) {
      const error = e2;
      throw new Error(((_b = (_a = error == null ? void 0 : error.reasons) == null ? void 0 : _a[0]) == null ? void 0 : _b.description) || "Error resolving name");
    }
  },
  async isNameRegistered(name) {
    try {
      await BlockchainApiController.lookupEnsName(name);
      return true;
    } catch {
      return false;
    }
  },
  async getSuggestions(value) {
    try {
      state$1.loading = true;
      state$1.suggestions = [];
      const response = await BlockchainApiController.getEnsNameSuggestions(value);
      state$1.suggestions = response.suggestions || [];
      return state$1.suggestions;
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, "Error fetching name suggestions");
      throw new Error(errorMessage);
    } finally {
      state$1.loading = false;
    }
  },
  async getNamesForAddress(address) {
    try {
      const network = ChainController.state.activeCaipNetwork;
      if (!network) {
        return [];
      }
      const cachedEns = StorageUtil.getEnsFromCacheForAddress(address);
      if (cachedEns) {
        return cachedEns;
      }
      const response = await BlockchainApiController.reverseLookupEnsName({ address });
      StorageUtil.updateEnsCache({
        address,
        ens: response,
        timestamp: Date.now()
      });
      return response;
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, "Error fetching names for address");
      throw new Error(errorMessage);
    }
  },
  async registerName(name) {
    var _a;
    const network = ChainController.state.activeCaipNetwork;
    const address = (_a = ChainController.getAccountData(network == null ? void 0 : network.chainNamespace)) == null ? void 0 : _a.address;
    const emailConnector = ConnectorController.getAuthConnector();
    if (!network) {
      throw new Error("Network not found");
    }
    if (!address || !emailConnector) {
      throw new Error("Address or auth connector not found");
    }
    state$1.loading = true;
    try {
      const message = JSON.stringify({
        name,
        attributes: {},
        // Unix timestamp
        timestamp: Math.floor(Date.now() / 1e3)
      });
      RouterController.pushTransactionStack({
        onCancel() {
          RouterController.replace("RegisterAccountName");
        }
      });
      const signature = await ConnectionController.signMessage(message);
      state$1.loading = false;
      const networkId = network.id;
      if (!networkId) {
        throw new Error("Network not found");
      }
      const coinType = EnsUtil.convertEVMChainIdToCoinType(Number(networkId));
      await BlockchainApiController.registerEnsName({
        coinType,
        address,
        signature,
        message
      });
      ChainController.setAccountProp("profileName", name, network.chainNamespace);
      StorageUtil.updateEnsCache({
        address,
        ens: [
          {
            name,
            registered_at: (/* @__PURE__ */ new Date()).toISOString(),
            updated_at: void 0,
            addresses: {},
            attributes: []
          }
        ],
        timestamp: Date.now()
      });
      RouterController.replace("RegisterAccountNameSuccess");
    } catch (e2) {
      const errorMessage = EnsController.parseEnsApiError(e2, `Error registering name ${name}`);
      RouterController.replace("RegisterAccountName");
      throw new Error(errorMessage);
    } finally {
      state$1.loading = false;
    }
  },
  validateName(name) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(name);
  },
  parseEnsApiError(error, defaultError) {
    var _a, _b;
    const ensError = error;
    return ((_b = (_a = ensError == null ? void 0 : ensError.reasons) == null ? void 0 : _a[0]) == null ? void 0 : _b.description) || defaultError;
  }
};
const EnsController = withErrorBoundary(controller$1);
function parseUrl(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}
function parseSchemelessHostPort(pattern) {
  const parts = pattern.split("/");
  const withoutPath = parts.length > 0 && parts[0] !== void 0 ? parts[0] : "";
  const lastColon = withoutPath.lastIndexOf(":");
  if (lastColon === -1) {
    return { host: withoutPath };
  }
  return {
    host: withoutPath.slice(0, lastColon),
    port: withoutPath.slice(lastColon + 1)
  };
}
function parseOriginRaw(origin) {
  const schemeIdx = origin.indexOf("://");
  if (schemeIdx === -1) {
    return null;
  }
  const scheme = origin.slice(0, schemeIdx);
  const start = schemeIdx + 3;
  let end = origin.indexOf("/", start);
  if (end === -1) {
    end = origin.length;
  }
  const hostPort = origin.slice(start, end);
  const lastColon = hostPort.lastIndexOf(":");
  if (lastColon === -1) {
    return { scheme, host: hostPort };
  }
  return { scheme, host: hostPort.slice(0, lastColon), port: hostPort.slice(lastColon + 1) };
}
function matchNonWildcardPattern(currentOrigin, pattern) {
  if (pattern.includes("://")) {
    const url = parseUrl(pattern);
    return url ? url.origin === currentOrigin : false;
  }
  const { host, port } = parseSchemelessHostPort(pattern);
  const schemeIdx = currentOrigin.indexOf("://");
  if (schemeIdx !== -1) {
    const start = schemeIdx + 3;
    let end = currentOrigin.indexOf("/", start);
    if (end === -1) {
      end = currentOrigin.length;
    }
    const rawHostPort = currentOrigin.slice(start, end);
    if (port !== void 0) {
      return `${host}:${port}` === rawHostPort;
    }
    const rawHostOnly = rawHostPort.split(":")[0];
    return host === rawHostOnly;
  }
  const current = parseUrl(currentOrigin);
  if (!current) {
    return false;
  }
  if (port !== void 0) {
    return host === current.hostname && port === (current.port || void 0);
  }
  return host === current.hostname;
}
function matchWildcardPattern(current, currentOrigin, pattern) {
  let working = pattern;
  let scheme = void 0;
  const schemeIdx = working.indexOf("://");
  if (schemeIdx !== -1) {
    scheme = working.slice(0, schemeIdx);
    working = working.slice(schemeIdx + 3);
  }
  const slashIdx = working.indexOf("/");
  if (slashIdx !== -1) {
    working = working.slice(0, slashIdx);
  }
  let hostPart = working;
  let portPart = void 0;
  const lastColon = hostPart.lastIndexOf(":");
  if (lastColon !== -1) {
    portPart = hostPart.slice(lastColon + 1);
    hostPart = hostPart.slice(0, lastColon);
  }
  const patternLabels = hostPart.split(".");
  for (const label of patternLabels) {
    if (label.includes("*") && label !== "*") {
      return false;
    }
  }
  const currentScheme = current.protocol.replace(/:$/u, "");
  if (scheme && scheme !== currentScheme) {
    return false;
  }
  if (portPart !== void 0) {
    if (portPart !== "*" && portPart !== current.port) {
      return false;
    }
  }
  const raw = parseOriginRaw(currentOrigin);
  const hostForCompare = raw ? raw.host : current.hostname;
  const currentLabels = hostForCompare.split(".");
  if (patternLabels.length !== currentLabels.length) {
    return false;
  }
  for (let i2 = patternLabels.length - 1; i2 >= 0; i2 -= 1) {
    const p2 = patternLabels[i2];
    const c2 = currentLabels[i2];
    if (p2 !== "*" && p2 !== c2) {
      return false;
    }
  }
  return true;
}
const DEFAULT_METHODS = {
  ton: ["ton_sendMessage", "ton_signData"],
  solana: [
    "solana_signMessage",
    "solana_signTransaction",
    "solana_requestAccounts",
    "solana_getAccounts",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction"
  ],
  eip155: [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    // EIP-5792
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    // EIP-7715
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    //EIP-7811
    "wallet_getAssets"
  ],
  bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"]
};
const WcHelpersUtil = {
  RPC_ERROR_CODE: {
    USER_REJECTED: 5e3,
    USER_REJECTED_METHODS: 5002
  },
  /**
   * Retrieves the array of supported methods for a given chain namespace.
   * @param chainNamespace - The chain namespace.
   * @returns An array of method strings.
   */
  getMethodsByChainNamespace(chainNamespace) {
    return DEFAULT_METHODS[chainNamespace] || [];
  },
  /**
   * Creates a default WalletConnect namespace configuration for the given chain namespace.
   * @param chainNamespace - The chain namespace.
   * @returns The default Namespace object.
   */
  createDefaultNamespace(chainNamespace) {
    return {
      methods: this.getMethodsByChainNamespace(chainNamespace),
      events: ["accountsChanged", "chainChanged"],
      chains: [],
      rpcMap: {}
    };
  },
  /**
   * Applies overrides to the base WalletConnect NamespaceConfig.
   * @param baseNamespaces - The base namespace configuration.
   * @param overrides - Optional overrides for methods, chains, events, rpcMap.
   * @returns The resulting NamespaceConfig with overrides applied.
   */
  applyNamespaceOverrides(baseNamespaces, overrides) {
    if (!overrides) {
      return { ...baseNamespaces };
    }
    const result = { ...baseNamespaces };
    const namespacesToOverride = /* @__PURE__ */ new Set();
    if (overrides.methods) {
      Object.keys(overrides.methods).forEach((ns) => namespacesToOverride.add(ns));
    }
    if (overrides.chains) {
      Object.keys(overrides.chains).forEach((ns) => namespacesToOverride.add(ns));
    }
    if (overrides.events) {
      Object.keys(overrides.events).forEach((ns) => namespacesToOverride.add(ns));
    }
    if (overrides.rpcMap) {
      Object.keys(overrides.rpcMap).forEach((chainId) => {
        const [ns] = chainId.split(":");
        if (ns) {
          namespacesToOverride.add(ns);
        }
      });
    }
    namespacesToOverride.forEach((ns) => {
      if (!result[ns]) {
        result[ns] = this.createDefaultNamespace(ns);
      }
    });
    if (overrides.methods) {
      Object.entries(overrides.methods).forEach(([ns, methods]) => {
        if (result[ns]) {
          result[ns].methods = methods;
        }
      });
    }
    if (overrides.chains) {
      Object.entries(overrides.chains).forEach(([ns, chains]) => {
        if (result[ns]) {
          result[ns].chains = chains;
        }
      });
    }
    if (overrides.events) {
      Object.entries(overrides.events).forEach(([ns, events]) => {
        if (result[ns]) {
          result[ns].events = events;
        }
      });
    }
    if (overrides.rpcMap) {
      const processedNamespaces = /* @__PURE__ */ new Set();
      Object.entries(overrides.rpcMap).forEach(([chainId, rpcUrl]) => {
        const [ns, id] = chainId.split(":");
        if (!ns || !id || !result[ns]) {
          return;
        }
        if (!result[ns].rpcMap) {
          result[ns].rpcMap = {};
        }
        if (!processedNamespaces.has(ns)) {
          result[ns].rpcMap = {};
          processedNamespaces.add(ns);
        }
        result[ns].rpcMap[id] = rpcUrl;
      });
    }
    return result;
  },
  /**
   * Creates WalletConnect namespaces based on CAIP network definitions,
   * optionally applying custom overrides.
   * @param caipNetworks - Array of CaipNetwork definitions.
   * @param configOverride - Optional overrides for namespaces.
   * @returns The resulting NamespaceConfig.
   */
  createNamespaces(caipNetworks, configOverride) {
    const defaultNamespaces = caipNetworks.reduce((acc, chain) => {
      const { id, chainNamespace, rpcUrls } = chain;
      const rpcUrl = rpcUrls.default.http[0];
      if (!acc[chainNamespace]) {
        acc[chainNamespace] = this.createDefaultNamespace(chainNamespace);
      }
      const caipNetworkId = `${chainNamespace}:${id}`;
      const namespace = acc[chainNamespace];
      namespace.chains.push(caipNetworkId);
      switch (caipNetworkId) {
        case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
          namespace.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
          break;
        case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
          namespace.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
          break;
      }
      if ((namespace == null ? void 0 : namespace.rpcMap) && rpcUrl) {
        namespace.rpcMap[id] = rpcUrl;
      }
      return acc;
    }, {});
    return this.applyNamespaceOverrides(defaultNamespaces, configOverride);
  },
  /**
   * Resolves a Reown/ENS name to its first matching address across configured networks.
   * @param name - The ENS or Reown name to resolve.
   * @returns The resolved address as a string, or false if not found.
   */
  resolveReownName: async (name) => {
    var _a;
    const wcNameAddress = await EnsController.resolveName(name);
    const networkNameAddresses = (wcNameAddress == null ? void 0 : wcNameAddress.addresses) ? Object.values(wcNameAddress.addresses) : [];
    return ((_a = networkNameAddresses[0]) == null ? void 0 : _a.address) || false;
  },
  /**
   * Extracts all CAIP network IDs used in given WalletConnect namespaces.
   * @param namespaces - WalletConnect Namespaces object.
   * @returns Array of CAIP network IDs (chainNamespace:chainId).
   */
  getChainsFromNamespaces(namespaces = {}) {
    return Object.values(namespaces).flatMap((namespace) => {
      const chains = namespace.chains || [];
      const accountsChains = namespace.accounts.map((account) => {
        const [chainNamespace, chainId] = account.split(":");
        return `${chainNamespace}:${chainId}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...chains, ...accountsChains]));
    });
  },
  /**
   * Type guard to check if an object is a WalletConnect session event data.
   * @param data - The data to check.
   * @returns True if data matches SessionEventData structure.
   */
  isSessionEventData(data) {
    return typeof data === "object" && data !== null && "id" in data && "topic" in data && "params" in data && typeof data.params === "object" && data.params !== null && "chainId" in data.params && "event" in data.params && typeof data.params.event === "object" && data.params.event !== null;
  },
  /**
   * Detects if an error object represents a user-rejected WalletConnect request.
   * @param error - The error object to check.
   * @returns True if user rejected request, otherwise false.
   */
  isUserRejectedRequestError(error) {
    try {
      if (typeof error === "object" && error !== null) {
        const objErr = error;
        const hasCode = typeof objErr["code"] === "number";
        const hasUserRejectedMethods = hasCode && objErr["code"] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        const hasUserRejected = hasCode && objErr["code"] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED;
        return hasUserRejectedMethods || hasUserRejected;
      }
      return false;
    } catch {
      return false;
    }
  },
  /**
   * Checks if a current origin is allowed by configured allowed and default origin patterns.
   * Localhost and 127.0.0.1 are always allowed.
   * @param currentOrigin - The current web origin.
   * @param allowedPatterns - Patterns from project configuration.
   * @param defaultAllowedOrigins - Built-in or default allowed patterns.
   * @returns True if the origin is allowed, false otherwise.
   */
  isOriginAllowed(currentOrigin, allowedPatterns, defaultAllowedOrigins) {
    const patterns = [...allowedPatterns, ...defaultAllowedOrigins];
    if (allowedPatterns.length === 0) {
      return true;
    }
    const current = parseUrl(currentOrigin);
    if (!current) {
      return patterns.some((pattern) => !pattern.includes("*") && pattern === currentOrigin);
    }
    if (current.hostname === "localhost" || current.hostname === "127.0.0.1") {
      return true;
    }
    for (const pattern of patterns) {
      if (pattern.includes("*")) {
        if (matchWildcardPattern(current, currentOrigin, pattern)) {
          return true;
        }
      } else if (matchNonWildcardPattern(currentOrigin, pattern)) {
        return true;
      }
    }
    return false;
  },
  /**
   * Attaches event listeners to a UniversalProvider instance for WalletConnect events.
   * @param params - The listener parameters including handlers for connect, disconnect, etc.
   */
  listenWcProvider({ universalProvider, namespace, onConnect, onDisconnect, onAccountsChanged, onChainChanged, onDisplayUri }) {
    if (onConnect) {
      universalProvider.on("connect", () => {
        const accounts = WcHelpersUtil.getWalletConnectAccounts(universalProvider, namespace);
        onConnect(accounts);
      });
    }
    if (onDisconnect) {
      universalProvider.on("disconnect", () => {
        onDisconnect();
      });
    }
    if (onAccountsChanged) {
      universalProvider.on("accountsChanged", (accounts) => {
        var _a, _b, _c, _d2, _e;
        try {
          const allAccounts = ((_c = (_b = (_a = universalProvider.session) == null ? void 0 : _a.namespaces) == null ? void 0 : _b[namespace]) == null ? void 0 : _c.accounts) || [];
          const defaultChain = (_e = (_d2 = universalProvider.rpcProviders) == null ? void 0 : _d2[namespace]) == null ? void 0 : _e.getDefaultChain();
          const parsedAccounts = accounts.map((account) => {
            const caipAccount = allAccounts.find((acc) => acc.includes(`${namespace}:${defaultChain}:${account}`));
            if (!caipAccount) {
              return void 0;
            }
            const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(caipAccount);
            return {
              address: account,
              chainId,
              chainNamespace
            };
          }).filter((account) => account !== void 0);
          if (parsedAccounts.length > 0) {
            onAccountsChanged(parsedAccounts);
          }
        } catch (error) {
          console.warn("Failed to parse accounts for namespace on accountsChanged event", namespace, accounts, error);
        }
      });
    }
    if (onChainChanged) {
      universalProvider.on("chainChanged", (chainId) => {
        onChainChanged(chainId);
      });
    }
    if (onDisplayUri) {
      universalProvider.on("display_uri", (uri) => {
        onDisplayUri(uri);
      });
    }
  },
  /**
   * Retrieves and parses the unique set of accounts for a given WalletConnect namespace.
   * @param universalProvider - The UniversalProvider instance.
   * @param namespace - The chain namespace to extract accounts for.
   * @returns Array of parsed CaipAddress objects.
   */
  getWalletConnectAccounts(universalProvider, namespace) {
    var _a, _b, _c, _d2;
    const accountsAdded = /* @__PURE__ */ new Set();
    const accounts = (_d2 = (_c = (_b = (_a = universalProvider == null ? void 0 : universalProvider.session) == null ? void 0 : _a.namespaces) == null ? void 0 : _b[namespace]) == null ? void 0 : _c.accounts) == null ? void 0 : _d2.map((account) => ParseUtil.parseCaipAddress(account)).filter(({ address }) => {
      if (accountsAdded.has(address.toLowerCase())) {
        return false;
      }
      accountsAdded.add(address.toLowerCase());
      return true;
    });
    if (accounts && accounts.length > 0) {
      return accounts;
    }
    return [];
  }
};
const IGNORED_CONNECTOR_IDS_FOR_LISTENER = [
  ConstantsUtil$2.CONNECTOR_ID.AUTH,
  ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT
];
class AdapterBlueprint {
  /**
   * Creates an instance of AdapterBlueprint.
   * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
   */
  constructor(params) {
    this.availableConnectors = [];
    this.availableConnections = [];
    this.providerHandlers = {};
    this.eventListeners = /* @__PURE__ */ new Map();
    this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
    this.getConnectorId = (namespace) => ConnectorController.getConnectorId(namespace);
    if (params) {
      this.construct(params);
    }
  }
  /**
   * Initializes the adapter with the given parameters.
   * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
   */
  construct(params) {
    this.projectId = params.projectId;
    this.namespace = params.namespace;
    this.adapterType = params.adapterType;
  }
  /**
   * Gets the available connectors.
   * @returns {Connector[]} An array of available connectors
   */
  get connectors() {
    return this.availableConnectors;
  }
  /**
   * Gets the available connections.
   * @returns {Connection[]} An array of available connections
   */
  get connections() {
    return this.availableConnections;
  }
  /**
   * Gets the supported networks.
   * @returns {CaipNetwork[]} An array of supported networks
   */
  get networks() {
    return this.getCaipNetworks(this.namespace);
  }
  /**
   * Handles the auth connected event.
   * @param {W3mFrameTypes.Responses['FrameGetUserResponse']} user - The user response
   */
  onAuthConnected({ accounts, chainId }) {
    const caipNetwork = this.getCaipNetworks().filter((n3) => n3.chainNamespace === this.namespace).find((n3) => n3.id.toString() === (chainId == null ? void 0 : chainId.toString()));
    if (accounts && caipNetwork) {
      this.addConnection({
        connectorId: ConstantsUtil$2.CONNECTOR_ID.AUTH,
        accounts,
        caipNetwork
      });
    }
  }
  /**
   * Sets the auth provider.
   * @param {W3mFrameProvider} authProvider - The auth provider instance
   */
  setAuthProvider(authProvider) {
    authProvider.onConnect(this.onAuthConnected.bind(this));
    authProvider.onSocialConnected(this.onAuthConnected.bind(this));
    this.addConnector({
      id: ConstantsUtil$2.CONNECTOR_ID.AUTH,
      type: "AUTH",
      name: ConstantsUtil$2.CONNECTOR_NAMES.AUTH,
      provider: authProvider,
      imageId: void 0,
      chain: this.namespace,
      chains: []
    });
  }
  /**
   * Adds one or more connectors to the available connectors list.
   * @param {...Connector} connectors - The connectors to add
   */
  addConnector(...connectors) {
    const connectorsAdded = /* @__PURE__ */ new Set();
    this.availableConnectors = [...connectors, ...this.availableConnectors].filter((connector) => {
      if (connectorsAdded.has(connector.id)) {
        return false;
      }
      connectorsAdded.add(connector.id);
      return true;
    });
    this.emit("connectors", this.availableConnectors);
  }
  /**
   * Adds connections to the available connections list
   * @param {...Connection} connections - The connections to add
   */
  addConnection(...connections) {
    const connectionsAdded = /* @__PURE__ */ new Set();
    this.availableConnections = [...connections, ...this.availableConnections].filter((connection) => {
      if (connectionsAdded.has(connection.connectorId.toLowerCase())) {
        return false;
      }
      connectionsAdded.add(connection.connectorId.toLowerCase());
      return true;
    });
    this.emit("connections", this.availableConnections);
  }
  /**
   * Deletes a connection from the available connections list
   * @param {string} connectorId - The connector ID of the connection to delete
   */
  deleteConnection(connectorId) {
    this.availableConnections = this.availableConnections.filter((c2) => c2.connectorId.toLowerCase() !== connectorId.toLowerCase());
    this.emit("connections", this.availableConnections);
  }
  /**
   * Clears all connections from the available connections list
   * @param {boolean} emit - Whether to emit the connections event
   */
  clearConnections(emit = false) {
    this.availableConnections = [];
    if (emit) {
      this.emit("connections", this.availableConnections);
    }
  }
  setStatus(status, chainNamespace) {
    ChainController.setAccountProp("status", status, chainNamespace);
  }
  /**
   * Adds an event listener for a specific event.
   * @template T
   * @param {T} eventName - The name of the event
   * @param {EventCallback<T>} callback - The callback function to be called when the event is emitted
   */
  on(eventName, callback) {
    var _a;
    if (!this.eventListeners.has(eventName)) {
      this.eventListeners.set(eventName, /* @__PURE__ */ new Set());
    }
    (_a = this.eventListeners.get(eventName)) == null ? void 0 : _a.add(callback);
  }
  /**
   * Removes an event listener for a specific event.
   * @template T
   * @param {T} eventName - The name of the event
   * @param {EventCallback<T>} callback - The callback function to be removed
   */
  off(eventName, callback) {
    const listeners = this.eventListeners.get(eventName);
    if (listeners) {
      listeners.delete(callback);
    }
  }
  /**
   * Removes all event listeners.
   */
  removeAllEventListeners() {
    this.eventListeners.forEach((listeners) => {
      listeners.clear();
    });
  }
  /**
   * Emits an event with the given name and optional data.
   * @template T
   * @param {T} eventName - The name of the event to emit
   * @param {EventData[T]} [data] - The optional data to be passed to the event listeners
   */
  emit(eventName, data) {
    const listeners = this.eventListeners.get(eventName);
    if (listeners) {
      listeners.forEach((callback) => callback(data));
    }
  }
  /**
   * Connects to WalletConnect.
   * @param {number | string} [_chainId] - Optional chain ID to connect to
   */
  async connectWalletConnect(_chainId) {
    try {
      const connector = this.getWalletConnectConnector();
      const result = await connector.connectWalletConnect();
      return { clientId: result.clientId };
    } catch (err) {
      if (WcHelpersUtil.isUserRejectedRequestError(err)) {
        throw new UserRejectedRequestError(err);
      }
      throw err;
    }
  }
  /**
   * Switches the network.
   * @param {AdapterBlueprint.SwitchNetworkParams} params - Network switching parameters
   */
  async switchNetwork(params) {
    var _a;
    const { caipNetwork } = params;
    const providerType = ProviderController.getProviderId(caipNetwork.chainNamespace);
    const provider = ProviderController.getProvider(caipNetwork.chainNamespace);
    if (!provider) {
      throw new Error("Provider not found");
    }
    if (providerType === "WALLET_CONNECT") {
      const walletConnectProvider = provider;
      walletConnectProvider.setDefaultChain(caipNetwork.caipNetworkId);
      return;
    }
    if (providerType === "AUTH") {
      const authProvider = (_a = ConnectorController.getAuthConnector()) == null ? void 0 : _a.provider;
      if (!authProvider) {
        throw new Error("Auth provider not found");
      }
      const preferredAccountType = getPreferredAccountType(caipNetwork.chainNamespace);
      await authProvider.switchNetwork({ chainId: caipNetwork.caipNetworkId });
      const user = await authProvider.getUser({
        chainId: caipNetwork.caipNetworkId,
        preferredAccountType
      });
      this.emit("switchNetwork", user);
    }
  }
  getWalletConnectConnector() {
    const connector = this.connectors.find((c2) => c2.id === "walletConnect");
    if (!connector) {
      throw new Error("WalletConnectConnector not found");
    }
    return connector;
  }
  /**
   * Handles connect event for a specific connector.
   * @param {string[]} accounts - The accounts that changed
   * @param {string} connectorId - The ID of the connector
   */
  onConnect(accounts, connectorId) {
    if (accounts.length > 0) {
      const { address, chainId } = CoreHelperUtil.getAccount(accounts[0]);
      const caipNetwork = this.getCaipNetworks().filter((n3) => n3.chainNamespace === this.namespace).find((n3) => n3.id.toString() === (chainId == null ? void 0 : chainId.toString()));
      const connector = this.connectors.find((c2) => c2.id === connectorId);
      if (address) {
        this.emit("accountChanged", {
          address,
          chainId,
          connector
        });
        this.addConnection({
          connectorId,
          accounts: accounts.map((_account) => {
            const { address: address2 } = CoreHelperUtil.getAccount(_account);
            return { address: address2 };
          }),
          caipNetwork
        });
      }
    }
  }
  /**
   * Handles accounts changed event for a specific connector.
   * @param {string[]} accounts - The accounts that changed
   * @param {string} connectorId - The ID of the connector
   */
  onAccountsChanged(accounts, connectorId, disconnectIfNoAccounts = true) {
    var _a, _b;
    if (accounts.length > 0) {
      const { address } = CoreHelperUtil.getAccount(accounts[0]);
      const connection = this.getConnection({
        connectorId,
        connections: this.connections,
        connectors: this.connectors
      });
      if (address && ((_a = this.getConnectorId(ConstantsUtil$2.CHAIN.EVM)) == null ? void 0 : _a.toLowerCase()) === connectorId.toLowerCase()) {
        this.emit("accountChanged", {
          address,
          chainId: (_b = connection == null ? void 0 : connection.caipNetwork) == null ? void 0 : _b.id,
          connector: connection == null ? void 0 : connection.connector
        });
      }
      this.addConnection({
        connectorId,
        accounts: accounts.map((_account) => {
          const { address: address2 } = CoreHelperUtil.getAccount(_account);
          return { address: address2 };
        }),
        caipNetwork: connection == null ? void 0 : connection.caipNetwork
      });
    } else if (disconnectIfNoAccounts) {
      this.onDisconnect(connectorId);
    }
  }
  /**
   * Handles disconnect event for a specific connector.
   * @param {string} connectorId - The ID of the connector
   */
  onDisconnect(connectorId) {
    var _a;
    this.removeProviderListeners(connectorId);
    this.deleteConnection(connectorId);
    if (((_a = this.getConnectorId(ConstantsUtil$2.CHAIN.EVM)) == null ? void 0 : _a.toLowerCase()) === connectorId.toLowerCase()) {
      this.emitFirstAvailableConnection();
    }
    if (this.connections.length === 0) {
      this.emit("disconnect");
    }
  }
  /**
   * Handles chain changed event for a specific connector.
   * @param {string} chainId - The ID of the chain that changed
   * @param {string} connectorId - The ID of the connector
   */
  onChainChanged(chainId, connectorId) {
    var _a;
    const formattedChainId = typeof chainId === "string" && chainId.startsWith("0x") ? parseInt(chainId, 16).toString() : chainId.toString();
    const connection = this.getConnection({
      connectorId,
      connections: this.connections,
      connectors: this.connectors
    });
    const caipNetwork = this.getCaipNetworks().filter((n3) => n3.chainNamespace === this.namespace).find((n3) => n3.id.toString() === formattedChainId);
    if (connection) {
      this.addConnection({
        connectorId,
        accounts: connection.accounts,
        caipNetwork
      });
    }
    if (((_a = this.getConnectorId(ConstantsUtil$2.CHAIN.EVM)) == null ? void 0 : _a.toLowerCase()) === connectorId.toLowerCase()) {
      this.emit("switchNetwork", { chainId: formattedChainId });
    }
  }
  /**
   * Listens to provider events for a specific connector.
   * @param {string} connectorId - The ID of the connector
   * @param {Provider | CombinedProvider} provider - The provider to listen to
   */
  listenProviderEvents(connectorId, provider) {
    if (IGNORED_CONNECTOR_IDS_FOR_LISTENER.includes(connectorId)) {
      return;
    }
    const accountsChangedHandler = (accounts) => this.onAccountsChanged(accounts, connectorId);
    const chainChangedHandler = (chainId) => this.onChainChanged(chainId, connectorId);
    const disconnectHandler = () => this.onDisconnect(connectorId);
    if (!this.providerHandlers[connectorId]) {
      provider.on("disconnect", disconnectHandler);
      provider.on("accountsChanged", accountsChangedHandler);
      provider.on("chainChanged", chainChangedHandler);
      this.providerHandlers[connectorId] = {
        provider,
        disconnect: disconnectHandler,
        accountsChanged: accountsChangedHandler,
        chainChanged: chainChangedHandler
      };
    }
  }
  /**
   * Removes provider listeners for a specific connector.
   * @param {string} connectorId - The ID of the connector
   */
  removeProviderListeners(connectorId) {
    if (this.providerHandlers[connectorId]) {
      const { provider, disconnect, accountsChanged, chainChanged } = this.providerHandlers[connectorId];
      provider.removeListener("disconnect", disconnect);
      provider.removeListener("accountsChanged", accountsChanged);
      provider.removeListener("chainChanged", chainChanged);
      this.providerHandlers[connectorId] = null;
    }
  }
  /**
   * Emits the first available connection.
   */
  emitFirstAvailableConnection() {
    var _a;
    const connection = this.getConnection({
      connections: this.connections,
      connectors: this.connectors
    });
    if (connection) {
      const [account] = connection.accounts;
      this.emit("accountChanged", {
        address: account == null ? void 0 : account.address,
        chainId: (_a = connection.caipNetwork) == null ? void 0 : _a.id,
        connector: connection.connector
      });
    }
  }
  /**
   * Gets a connection based on provided parameters.
   * If connectorId is provided, returns connection for that specific connector.
   * Otherwise, returns the first available valid connection.
   *
   * @param params - Connection parameters
   * @param params.address - Optional address to filter by
   * @param params.connectorId - Optional connector ID to filter by
   * @param params.connections - List of available connections
   * @param params.connectors - List of available connectors
   * @returns Connection or null if none found
   */
  getConnection({ address, connectorId, connections, connectors }) {
    if (connectorId) {
      const connection = connections.find((c2) => c2.connectorId.toLowerCase() === connectorId.toLowerCase());
      if (!connection) {
        return null;
      }
      const connector = connectors.find((c2) => c2.id.toLowerCase() === connection.connectorId.toLowerCase());
      const account = address ? connection.accounts.find((a2) => a2.address.toLowerCase() === address.toLowerCase()) : connection.accounts[0];
      return { ...connection, account, connector };
    }
    const validConnection = connections.find((c2) => c2.accounts.length > 0 && connectors.some((conn) => conn.id.toLowerCase() === c2.connectorId.toLowerCase()));
    if (validConnection) {
      const [account] = validConnection.accounts;
      const connector = connectors.find((c2) => c2.id.toLowerCase() === validConnection.connectorId.toLowerCase());
      return {
        ...validConnection,
        account,
        connector
      };
    }
    return null;
  }
}
let addEmbeddedWalletSessionPromise = null;
const SIWXUtil = {
  getSIWX() {
    return OptionsController.state.siwx;
  },
  async initializeIfEnabled(caipAddress = ChainController.getActiveCaipAddress()) {
    var _a, _b, _c;
    const siwx = OptionsController.state.siwx;
    if (!(siwx && caipAddress)) {
      return;
    }
    const [namespace, chainId, address] = caipAddress.split(":");
    if (!ChainController.checkIfSupportedNetwork(namespace, `${namespace}:${chainId}`)) {
      return;
    }
    try {
      if ((_a = OptionsController.state.remoteFeatures) == null ? void 0 : _a.emailCapture) {
        const user = (_b = ChainController.getAccountData(namespace)) == null ? void 0 : _b.user;
        await ModalController.open({
          view: "DataCapture",
          data: {
            email: (user == null ? void 0 : user.email) ?? void 0
          }
        });
        return;
      }
      if (addEmbeddedWalletSessionPromise) {
        await addEmbeddedWalletSessionPromise;
      }
      const sessions = await siwx.getSessions(`${namespace}:${chainId}`, address);
      if (sessions.length) {
        return;
      }
      await ModalController.open({
        view: "SIWXSignMessage"
      });
    } catch (error) {
      console.error("SIWXUtil:initializeIfEnabled", error);
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties(error)
      });
      await ((_c = ConnectionController._getClient()) == null ? void 0 : _c.disconnect().catch(console.error));
      RouterController.reset("Connect");
      SnackController.showError("A problem occurred while trying initialize authentication");
    }
  },
  async isAuthenticated(caipAddress = ChainController.getActiveCaipAddress()) {
    const siwx = OptionsController.state.siwx;
    if (!siwx) {
      return true;
    }
    if (!caipAddress) {
      return true;
    }
    const { chainNamespace, chainId, address } = ParseUtil.parseCaipAddress(caipAddress);
    const caipNetworkId = `${chainNamespace}:${chainId}`;
    const sessions = await SIWXUtil.getSessions({
      address,
      caipNetworkId
    });
    return sessions.length > 0;
  },
  async requestSignMessage() {
    const siwx = OptionsController.state.siwx;
    const address = CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress());
    const network = getActiveCaipNetwork();
    if (!siwx) {
      throw new Error("SIWX is not enabled");
    }
    if (!address) {
      throw new Error("No ActiveCaipAddress found");
    }
    if (!network) {
      throw new Error("No ActiveCaipNetwork or client found");
    }
    try {
      const siwxMessage = await siwx.createMessage({
        chainId: network.caipNetworkId,
        accountAddress: address
      });
      const message = siwxMessage.toString();
      let signature = "";
      if (siwx.signMessage) {
        signature = await siwx.signMessage({
          message,
          chainId: network.caipNetworkId,
          accountAddress: address
        });
      } else {
        const connectorId = ConnectorController.getConnectorId(network.chainNamespace);
        if (connectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH) {
          RouterController.pushTransactionStack({});
        }
        signature = await ConnectionController.signMessage(message) || "";
      }
      await siwx.addSession({
        data: siwxMessage,
        message,
        signature
      });
      ChainController.setLastConnectedSIWECaipNetwork(network);
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_SUCCESS",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      if (!ModalController.state.open || RouterController.state.view === "ApproveTransaction") {
        await ModalController.open({
          view: "SIWXSignMessage"
        });
      }
      SnackController.showError("Error signing message");
      EventsController.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties(error)
      });
      console.error("SWIXUtil:requestSignMessage", error);
    }
  },
  async cancelSignMessage() {
    var _a;
    try {
      const siwx = this.getSIWX();
      const isRequired = (_a = siwx == null ? void 0 : siwx.getRequired) == null ? void 0 : _a.call(siwx);
      if (isRequired) {
        const lastNetwork = ChainController.getLastConnectedSIWECaipNetwork();
        if (lastNetwork) {
          const sessions = await (siwx == null ? void 0 : siwx.getSessions(lastNetwork == null ? void 0 : lastNetwork.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || ""));
          if (sessions && sessions.length > 0) {
            await ChainController.switchActiveNetwork(lastNetwork);
          } else {
            await ConnectionController.disconnect();
          }
        } else {
          await ConnectionController.disconnect();
        }
      } else {
        ModalController.close();
      }
      ModalController.close();
      EventsController.sendEvent({
        event: "CLICK_CANCEL_SIWX",
        type: "track",
        properties: this.getSIWXEventProperties()
      });
    } catch (error) {
      console.error("SIWXUtil:cancelSignMessage", error);
    }
  },
  async getAllSessions() {
    const siwx = this.getSIWX();
    const allRequestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const sessions = [];
    await Promise.all(allRequestedCaipNetworks.map(async (caipNetwork) => {
      const session = await (siwx == null ? void 0 : siwx.getSessions(caipNetwork.caipNetworkId, CoreHelperUtil.getPlainAddress(ChainController.getActiveCaipAddress()) || ""));
      if (session) {
        sessions.push(...session);
      }
    }));
    return sessions;
  },
  async getSessions(args) {
    const siwx = OptionsController.state.siwx;
    let address = args == null ? void 0 : args.address;
    if (!address) {
      const activeCaipAddress = ChainController.getActiveCaipAddress();
      address = CoreHelperUtil.getPlainAddress(activeCaipAddress);
    }
    let network = args == null ? void 0 : args.caipNetworkId;
    if (!network) {
      const activeCaipNetwork = ChainController.getActiveCaipNetwork();
      network = activeCaipNetwork == null ? void 0 : activeCaipNetwork.caipNetworkId;
    }
    if (!(siwx && address && network)) {
      return [];
    }
    return siwx.getSessions(network, address);
  },
  async isSIWXCloseDisabled() {
    var _a;
    const siwx = this.getSIWX();
    if (siwx) {
      const isApproveSignScreen = RouterController.state.view === "ApproveTransaction";
      const isSiwxSignMessage = RouterController.state.view === "SIWXSignMessage";
      if (isApproveSignScreen || isSiwxSignMessage) {
        return ((_a = siwx.getRequired) == null ? void 0 : _a.call(siwx)) && (await this.getSessions()).length === 0;
      }
    }
    return false;
  },
  async authConnectorAuthenticate({ authConnector, chainId, socialUri, preferredAccountType, chainNamespace }) {
    var _a;
    const siwx = SIWXUtil.getSIWX();
    const network = getActiveCaipNetwork();
    if (!siwx || !chainNamespace.includes(ConstantsUtil$2.CHAIN.EVM) || // Request to input email and sign message when email capture is enabled
    ((_a = OptionsController.state.remoteFeatures) == null ? void 0 : _a.emailCapture)) {
      const result2 = await authConnector.connect({
        chainId,
        socialUri,
        preferredAccountType
      });
      return {
        address: result2.address,
        chainId: result2.chainId,
        accounts: result2.accounts
      };
    }
    const caipNetwork = `${chainNamespace}:${chainId}`;
    const siwxMessage = await siwx.createMessage({
      chainId: caipNetwork,
      accountAddress: "<<AccountAddress>>"
    });
    const siwxMessageData = {
      accountAddress: siwxMessage.accountAddress,
      chainId: siwxMessage.chainId,
      domain: siwxMessage.domain,
      uri: siwxMessage.uri,
      version: siwxMessage.version,
      nonce: siwxMessage.nonce,
      notBefore: siwxMessage.notBefore,
      statement: siwxMessage.statement,
      resources: siwxMessage.resources,
      requestId: siwxMessage.requestId,
      issuedAt: siwxMessage.issuedAt,
      expirationTime: siwxMessage.expirationTime,
      serializedMessage: siwxMessage.toString()
    };
    const result = await authConnector.connect({
      chainId,
      socialUri,
      siwxMessage: siwxMessageData,
      preferredAccountType
    });
    siwxMessageData.accountAddress = result.address;
    siwxMessageData.serializedMessage = result.message || "";
    if (result.signature && result.message) {
      const promise = SIWXUtil.addEmbeddedWalletSession(siwxMessageData, result.message, result.signature);
      await promise;
    }
    ChainController.setLastConnectedSIWECaipNetwork(network);
    return {
      address: result.address,
      chainId: result.chainId,
      accounts: result.accounts
    };
  },
  async addEmbeddedWalletSession(siwxMessageData, message, signature) {
    if (addEmbeddedWalletSessionPromise) {
      return addEmbeddedWalletSessionPromise;
    }
    const siwx = SIWXUtil.getSIWX();
    if (!siwx) {
      return Promise.resolve();
    }
    addEmbeddedWalletSessionPromise = siwx.addSession({
      data: siwxMessageData,
      message,
      signature
    }).finally(() => {
      addEmbeddedWalletSessionPromise = null;
    });
    return addEmbeddedWalletSessionPromise;
  },
  async universalProviderAuthenticate({ universalProvider, chains, methods }) {
    var _a, _b, _c;
    const siwx = SIWXUtil.getSIWX();
    const network = getActiveCaipNetwork();
    const namespaces = new Set(chains.map((chain) => chain.split(":")[0]));
    if (!siwx || namespaces.size !== 1 || !namespaces.has("eip155")) {
      return false;
    }
    const siwxMessage = await siwx.createMessage({
      chainId: ((_a = getActiveCaipNetwork()) == null ? void 0 : _a.caipNetworkId) || "",
      accountAddress: ""
    });
    const result = await universalProvider.authenticate({
      nonce: siwxMessage.nonce,
      domain: siwxMessage.domain,
      uri: siwxMessage.uri,
      exp: siwxMessage.expirationTime,
      iat: siwxMessage.issuedAt,
      nbf: siwxMessage.notBefore,
      requestId: siwxMessage.requestId,
      version: siwxMessage.version,
      resources: siwxMessage.resources,
      statement: siwxMessage.statement,
      chainId: siwxMessage.chainId,
      methods,
      // The first chainId is what is used for universal provider to build the message
      chains: [siwxMessage.chainId, ...chains.filter((chain) => chain !== siwxMessage.chainId)]
    });
    SnackController.showLoading("Authenticating...", { autoClose: false });
    const walletInfo = {
      ...result.session.peer.metadata,
      name: result.session.peer.metadata.name,
      icon: (_b = result.session.peer.metadata.icons) == null ? void 0 : _b[0],
      type: "WALLET_CONNECT"
    };
    ChainController.setAccountProp("connectedWalletInfo", walletInfo, Array.from(namespaces)[0]);
    if ((_c = result == null ? void 0 : result.auths) == null ? void 0 : _c.length) {
      const sessions = result.auths.map((cacao) => {
        const message = universalProvider.client.formatAuthMessage({
          request: cacao.p,
          iss: cacao.p.iss
        });
        return {
          data: {
            ...cacao.p,
            accountAddress: cacao.p.iss.split(":").slice(-1).join(""),
            chainId: cacao.p.iss.split(":").slice(2, 4).join(":"),
            uri: cacao.p.aud ?? "",
            version: cacao.p.version || siwxMessage.version,
            expirationTime: cacao.p.exp,
            issuedAt: cacao.p.iat,
            notBefore: cacao.p.nbf
          },
          message,
          signature: cacao.s.s,
          cacao
        };
      });
      try {
        await siwx.setSessions(sessions);
        if (network) {
          ChainController.setLastConnectedSIWECaipNetwork(network);
        }
        EventsController.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: SIWXUtil.getSIWXEventProperties()
        });
      } catch (error) {
        console.error("SIWX:universalProviderAuth - failed to set sessions", error);
        EventsController.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: SIWXUtil.getSIWXEventProperties(error)
        });
        await universalProvider.disconnect().catch(console.error);
        throw error;
      } finally {
        SnackController.hide();
      }
    }
    return true;
  },
  getSIWXEventProperties(error) {
    var _a;
    const namespace = ChainController.state.activeChain;
    if (!namespace) {
      throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
    }
    return {
      network: ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || "",
      isSmartAccount: getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
      message: error ? CoreHelperUtil.parseError(error) : void 0
    };
  },
  async clearSessions() {
    const siwx = this.getSIWX();
    if (siwx) {
      await siwx.setSessions([]);
    }
  }
};
class WalletConnectConnector {
  constructor({ provider, namespace }) {
    this.id = ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT;
    this.name = "WalletConnect";
    this.type = "WALLET_CONNECT";
    this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400";
    this.getCaipNetworks = ChainController.getCaipNetworks.bind(ChainController);
    this.caipNetworks = this.getCaipNetworks();
    this.provider = provider;
    this.chain = namespace;
  }
  get chains() {
    return this.getCaipNetworks();
  }
  async connectWalletConnect() {
    const isAuthenticated = await this.authenticate();
    if (!isAuthenticated) {
      const caipNetworks = this.getCaipNetworks();
      const universalProviderConfigOverride = OptionsController.state.universalProviderConfigOverride;
      const namespaces = WcHelpersUtil.createNamespaces(caipNetworks, universalProviderConfigOverride);
      await this.provider.connect({ optionalNamespaces: namespaces });
    }
    return {
      clientId: await this.provider.client.core.crypto.getClientId(),
      session: this.provider.session
    };
  }
  async disconnect() {
    await this.provider.disconnect();
  }
  async authenticate() {
    const chains = this.chains.map((network) => network.caipNetworkId);
    return SIWXUtil.universalProviderAuthenticate({
      universalProvider: this.provider,
      chains,
      methods: OPTIONAL_METHODS
    });
  }
}
const OPTIONAL_METHODS = [
  "eth_accounts",
  "eth_requestAccounts",
  "eth_sendRawTransaction",
  "eth_sign",
  "eth_signTransaction",
  "eth_signTypedData",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "eth_sendTransaction",
  "personal_sign",
  "wallet_switchEthereumChain",
  "wallet_addEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode",
  // EIP-5792
  "wallet_getCallsStatus",
  "wallet_sendCalls",
  "wallet_getCapabilities",
  // EIP-7715
  "wallet_grantPermissions",
  "wallet_revokePermissions",
  //EIP-7811
  "wallet_getAssets"
];
const state = proxy({
  message: "",
  variant: "info",
  open: false
});
const controller = {
  state,
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  open(message, variant) {
    const { debug } = OptionsController.state;
    const { code, displayMessage, debugMessage } = message;
    if (displayMessage && debug) {
      state.message = displayMessage;
      state.variant = variant;
      state.open = true;
    }
    if (debugMessage) {
      {
        return;
      }
    }
  },
  warn(title, description, code) {
    state.open = true;
    state.message = title;
    state.variant = "warning";
    if (description) {
      console.warn(description, code);
    }
  },
  close() {
    state.open = false;
    state.message = "";
    state.variant = "info";
  }
};
const AlertController = withErrorBoundary(controller);
const baseUSDC = {
  asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
};
const baseSepoliaUSDC = {
  asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis, e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$3 = /* @__PURE__ */ new WeakMap();
let n$2 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$2 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$3.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$3.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new n$2("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$3 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$2(o2, t2, s$2);
}, S$1 = (s2, o2) => {
  if (e$2) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$1.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$2, defineProperty: e$1, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$1, getOwnPropertySymbols: o$2, getPrototypeOf: n$1 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i2 = t2;
  switch (s2) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$1 = (t2, s2) => !i$2(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata ?? (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let y$1 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = Symbol(), h2 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== h2 && e$1(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h2 = e2 == null ? void 0 : e2.call(this);
      r2 == null ? void 0 : r2.call(this, s3), this.requestUpdate(t2, h2, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$1(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$1(t3), ...o$2(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a = this.constructor.l) == null ? void 0 : _a.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a = t2.hostConnected) == null ? void 0 : _a.call(t2));
  }
  removeController(t2) {
    var _a;
    (_a = this._$EO) == null ? void 0 : _a.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a = this._$EO) == null ? void 0 : _a.forEach((t2) => {
      var _a2;
      return (_a2 = t2.hostConnected) == null ? void 0 : _a2.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a;
    (_a = this._$EO) == null ? void 0 : _a.forEach((t2) => {
      var _a2;
      return (_a2 = t2.hostDisconnected) == null ? void 0 : _a2.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$ET(t2, s2) {
    var _a;
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const h2 = (void 0 !== ((_a = i2.converter) == null ? void 0 : _a.toAttribute) ? i2.converter : u$1).toAttribute(s2, i2.type);
      this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a, _b;
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a = t3.converter) == null ? void 0 : _a.fromAttribute) ? t3.converter : u$1;
      this._$Em = e2;
      const r2 = h2.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? ((_b = this._$Ej) == null ? void 0 : _b.get(e2)) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2, e2 = false, h2) {
    var _a;
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h2 = this[t2]), i2 ?? (i2 = r2.getPropertyOptions(t2)), !((i2.hasChanged ?? f$1)(h2, s2) || i2.useDefault && i2.reflect && h2 === ((_a = this._$Ej) == null ? void 0 : _a.get(t2)) && !this.hasAttribute(r2._$Eu(t2, i2)))) return;
      this.C(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i2, reflect: e2, wrapped: h2 }, r2) {
    i2 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) {
        const { wrapped: t4 } = i2, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_a = this._$EO) == null ? void 0 : _a.forEach((t3) => {
        var _a2;
        return (_a2 = t3.hostUpdate) == null ? void 0 : _a2.call(t3);
      }), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a;
    (_a = this._$EO) == null ? void 0 : _a.forEach((t3) => {
      var _a2;
      return (_a2 = t3.hostUpdated) == null ? void 0 : _a2.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t3) => this._$ET(t3, this[t3]))), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null ? void 0 : p$1({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ?? (a$1.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis, i$1 = (t2) => t2, s$1 = t.trustedTypes, e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h = "$lit$", o$1 = `lit$${Math.random().toFixed(9).slice(2)}$`, n2 = "?" + o$1, r = `<${n2}>`, l = document, c = () => l.createComment(""), a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u = Array.isArray, d = (t2) => u(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), f = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y2 = /^(?:script|style|textarea|title)$/i, x = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), b = x(1), w = x(2), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
function V(t2, i2) {
  if (!u(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i2) : i2;
}
const N = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let n3, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let a2, u2, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u2 = c2.exec(s3), null !== u2); ) f2 = c2.lastIndex, c2 === v ? "!--" === u2[1] ? c2 = _ : void 0 !== u2[1] ? c2 = m : void 0 !== u2[2] ? (y2.test(u2[2]) && (n3 = RegExp("</" + u2[2], "g")), c2 = p) : void 0 !== u2[3] && (c2 = p) : c2 === p ? ">" === u2[0] ? (c2 = n3 ?? v, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p : '"' === u2[3] ? $ : g) : c2 === $ || c2 === g ? c2 = p : c2 === _ || c2 === m ? c2 = v : (c2 = p, n3 = void 0);
    const x2 = c2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v ? s3 + r : d2 >= 0 ? (e2.push(a2), s3.slice(0, d2) + h + s3.slice(d2) + o$1 + x2) : s3 + o$1 + (-2 === d2 ? i3 : x2);
  }
  return [V(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), e2];
};
class S {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = N(t2, i2);
    if (this.el = S.createElement(f2, e2), P.currentNode = this.el.content, 2 === i2 || 3 === i2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h)) {
          const i3 = v2[a2++], s2 = r2.getAttribute(t3).split(o$1), e3 = /([.?@])?(.*)/.exec(i3);
          d2.push({ type: 1, index: l2, name: e3[2], strings: s2, ctor: "." === e3[1] ? I : "?" === e3[1] ? L : "@" === e3[1] ? z : H }), r2.removeAttribute(t3);
        } else t3.startsWith(o$1) && (d2.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y2.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$1), i3 = t3.length - 1;
          if (i3 > 0) {
            r2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++) r2.append(t3[s2], c()), P.nextNode(), d2.push({ type: 2, index: ++l2 });
            r2.append(t3[i3], c());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n2) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$1, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$1.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function M(t2, i2, s2 = t2, e2) {
  var _a, _b;
  if (i2 === E) return i2;
  let h2 = void 0 !== e2 ? (_a = s2._$Co) == null ? void 0 : _a[e2] : s2._$Cl;
  const o2 = a(i2) ? void 0 : i2._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ?? (s2._$Co = []))[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = M(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
class R {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? l).importNode(i2, true);
    P.currentNode = e2;
    let h2 = P.nextNode(), o2 = 0, n3 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i3;
        2 === r2.type ? i3 = new k(h2, h2.nextSibling, this, t2) : 1 === r2.type ? i3 = new r2.ctor(h2, r2.name, r2.strings, this, t2) : 6 === r2.type && (i3 = new Z(h2, this, t2)), this._$AV.push(i3), r2 = s2[++n3];
      }
      o2 !== (r2 == null ? void 0 : r2.index) && (h2 = P.nextNode(), o2++);
    }
    return P.currentNode = l, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class k {
  get _$AU() {
    var _a;
    return ((_a = this._$AM) == null ? void 0 : _a._$AU) ?? this._$Cv;
  }
  constructor(t2, i2, s2, e2) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = (e2 == null ? void 0 : e2.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = M(this, t2, i2), a(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a;
    const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S.createElement(V(s2.h, s2.h[0]), this.options)), s2);
    if (((_a = this._$AH) == null ? void 0 : _a._$AD) === e2) this._$AH.p(i2);
    else {
      const t3 = new R(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = C.get(t2.strings);
    return void 0 === i2 && C.set(t2.strings, i2 = new S(t2)), i2;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new k(this.O(c()), this.O(c()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    var _a;
    for ((_a = this._$AP) == null ? void 0 : _a.call(this, false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$1(t2).nextSibling;
      i$1(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    var _a;
    void 0 === this._$AM && (this._$Cv = t2, (_a = this._$AP) == null ? void 0 : _a.call(this, t2));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h2) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = M(this, t2, i2, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = M(this, e3[s2 + n3], i2, n3), r2 === E && (r2 = this._$AH[n3]), o2 || (o2 = !a(r2) || r2 !== this._$AH[n3]), r2 === A ? t2 = A : t2 !== A && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
}
class z extends H {
  constructor(t2, i2, s2, e2, h2) {
    super(t2, i2, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = M(this, t2, i2, 0) ?? A) === E) return;
    const s2 = this._$AH, e2 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== A && (s2 === A || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a;
    "function" == typeof this._$AH ? this._$AH.call(((_a = this.options) == null ? void 0 : _a.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M(this, t2);
  }
}
const B = t.litHtmlPolyfillSupport;
B == null ? void 0 : B(S, k), (t.litHtmlVersions ?? (t.litHtmlVersions = [])).push("3.3.2");
const D = (t2, i2, s2) => {
  const e2 = (s2 == null ? void 0 : s2.renderBefore) ?? i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = (s2 == null ? void 0 : s2.renderBefore) ?? null;
    e2._$litPart$ = h2 = new k(i2.insertBefore(c(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a;
    const t2 = super.createRenderRoot();
    return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a;
    super.connectedCallback(), (_a = this._$Do) == null ? void 0 : _a.setConnected(true);
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this._$Do) == null ? void 0 : _a.setConnected(false);
  }
  render() {
    return E;
  }
}
i._$litElement$ = true, i["finalized"] = true, (_d = s.litElementHydrateSupport) == null ? void 0 : _d.call(s, { LitElement: i });
const o = s.litElementPolyfillSupport;
o == null ? void 0 : o({ LitElement: i });
(s.litElementVersions ?? (s.litElementVersions = [])).push("4.2.2");
const colors = {
  black: "#202020",
  white: "#FFFFFF",
  white010: "rgba(255, 255, 255, 0.1)",
  accent010: "rgba(9, 136, 240, 0.1)",
  accent020: "rgba(9, 136, 240, 0.2)",
  accent030: "rgba(9, 136, 240, 0.3)",
  accent040: "rgba(9, 136, 240, 0.4)",
  accent050: "rgba(9, 136, 240, 0.5)",
  accent060: "rgba(9, 136, 240, 0.6)",
  accent070: "rgba(9, 136, 240, 0.7)",
  accent080: "rgba(9, 136, 240, 0.8)",
  accent090: "rgba(9, 136, 240, 0.9)",
  accent100: "rgba(9, 136, 240, 1.0)",
  accentSecondary010: "rgba(199, 185, 148, 0.1)",
  accentSecondary020: "rgba(199, 185, 148, 0.2)",
  accentSecondary030: "rgba(199, 185, 148, 0.3)",
  accentSecondary040: "rgba(199, 185, 148, 0.4)",
  accentSecondary050: "rgba(199, 185, 148, 0.5)",
  accentSecondary060: "rgba(199, 185, 148, 0.6)",
  accentSecondary070: "rgba(199, 185, 148, 0.7)",
  accentSecondary080: "rgba(199, 185, 148, 0.8)",
  accentSecondary090: "rgba(199, 185, 148, 0.9)",
  accentSecondary100: "rgba(199, 185, 148, 1.0)",
  productWalletKit: "#FFB800",
  productAppKit: "#FF573B",
  productCloud: "#0988F0",
  productDocumentation: "#008847",
  neutrals050: "#F6F6F6",
  neutrals100: "#F3F3F3",
  neutrals200: "#E9E9E9",
  neutrals300: "#D0D0D0",
  neutrals400: "#BBB",
  neutrals500: "#9A9A9A",
  neutrals600: "#6C6C6C",
  neutrals700: "#4F4F4F",
  neutrals800: "#363636",
  neutrals900: "#2A2A2A",
  neutrals1000: "#252525",
  semanticSuccess010: "rgba(48, 164, 107, 0.1)",
  semanticSuccess020: "rgba(48, 164, 107, 0.2)",
  semanticSuccess030: "rgba(48, 164, 107, 0.3)",
  semanticSuccess040: "rgba(48, 164, 107, 0.4)",
  semanticSuccess050: "rgba(48, 164, 107, 0.5)",
  semanticSuccess060: "rgba(48, 164, 107, 0.6)",
  semanticSuccess070: "rgba(48, 164, 107, 0.7)",
  semanticSuccess080: "rgba(48, 164, 107, 0.8)",
  semanticSuccess090: "rgba(48, 164, 107, 0.9)",
  semanticSuccess100: "rgba(48, 164, 107, 1.0)",
  semanticError010: "rgba(223, 74, 52, 0.1)",
  semanticError020: "rgba(223, 74, 52, 0.2)",
  semanticError030: "rgba(223, 74, 52, 0.3)",
  semanticError040: "rgba(223, 74, 52, 0.4)",
  semanticError050: "rgba(223, 74, 52, 0.5)",
  semanticError060: "rgba(223, 74, 52, 0.6)",
  semanticError070: "rgba(223, 74, 52, 0.7)",
  semanticError080: "rgba(223, 74, 52, 0.8)",
  semanticError090: "rgba(223, 74, 52, 0.9)",
  semanticError100: "rgba(223, 74, 52, 1.0)",
  semanticWarning010: "rgba(243, 161, 63, 0.1)",
  semanticWarning020: "rgba(243, 161, 63, 0.2)",
  semanticWarning030: "rgba(243, 161, 63, 0.3)",
  semanticWarning040: "rgba(243, 161, 63, 0.4)",
  semanticWarning050: "rgba(243, 161, 63, 0.5)",
  semanticWarning060: "rgba(243, 161, 63, 0.6)",
  semanticWarning070: "rgba(243, 161, 63, 0.7)",
  semanticWarning080: "rgba(243, 161, 63, 0.8)",
  semanticWarning090: "rgba(243, 161, 63, 0.9)",
  semanticWarning100: "rgba(243, 161, 63, 1.0)"
};
const tokens = {
  core: {
    backgroundAccentPrimary: "#0988F0",
    backgroundAccentCertified: "#C7B994",
    backgroundWalletKit: "#FFB800",
    backgroundAppKit: "#FF573B",
    backgroundCloud: "#0988F0",
    backgroundDocumentation: "#008847",
    backgroundSuccess: "rgba(48, 164, 107, 0.20)",
    backgroundError: "rgba(223, 74, 52, 0.20)",
    backgroundWarning: "rgba(243, 161, 63, 0.20)",
    textAccentPrimary: "#0988F0",
    textAccentCertified: "#C7B994",
    textWalletKit: "#FFB800",
    textAppKit: "#FF573B",
    textCloud: "#0988F0",
    textDocumentation: "#008847",
    textSuccess: "#30A46B",
    textError: "#DF4A34",
    textWarning: "#F3A13F",
    borderAccentPrimary: "#0988F0",
    borderSecondary: "#C7B994",
    borderSuccess: "#30A46B",
    borderError: "#DF4A34",
    borderWarning: "#F3A13F",
    foregroundAccent010: "rgba(9, 136, 240, 0.1)",
    foregroundAccent020: "rgba(9, 136, 240, 0.2)",
    foregroundAccent040: "rgba(9, 136, 240, 0.4)",
    foregroundAccent060: "rgba(9, 136, 240, 0.6)",
    foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
    foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
    foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
    iconAccentPrimary: "#0988F0",
    iconAccentCertified: "#C7B994",
    iconSuccess: "#30A46B",
    iconError: "#DF4A34",
    iconWarning: "#F3A13F",
    glass010: "rgba(255, 255, 255, 0.1)",
    zIndex: "9999"
  },
  dark: {
    overlay: "rgba(0, 0, 0, 0.50)",
    backgroundPrimary: "#202020",
    backgroundInvert: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9A9A9A",
    textTertiary: "#BBBBBB",
    textInvert: "#202020",
    borderPrimary: "#2A2A2A",
    borderPrimaryDark: "#363636",
    borderSecondary: "#4F4F4F",
    foregroundPrimary: "#252525",
    foregroundSecondary: "#2A2A2A",
    foregroundTertiary: "#363636",
    iconDefault: "#9A9A9A",
    iconInverse: "#FFFFFF"
  },
  light: {
    overlay: "rgba(230 , 230, 230, 0.5)",
    backgroundPrimary: "#FFFFFF",
    borderPrimaryDark: "#E9E9E9",
    backgroundInvert: "#202020",
    textPrimary: "#202020",
    textSecondary: "#9A9A9A",
    textTertiary: "#6C6C6C",
    textInvert: "#FFFFFF",
    borderPrimary: "#E9E9E9",
    borderSecondary: "#D0D0D0",
    foregroundPrimary: "#F3F3F3",
    foregroundSecondary: "#E9E9E9",
    foregroundTertiary: "#D0D0D0",
    iconDefault: "#9A9A9A",
    iconInverse: "#202020"
  }
};
const borderRadius = {
  "1": "4px",
  "2": "8px",
  "10": "10px",
  "3": "12px",
  "4": "16px",
  "6": "24px",
  "5": "20px",
  "8": "32px",
  "16": "64px",
  "20": "80px",
  "32": "128px",
  "64": "256px",
  "128": "512px",
  round: "9999px"
};
const spacing = {
  "0": "0px",
  "01": "2px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "36px",
  "10": "40px",
  "12": "48px",
  "14": "56px",
  "16": "64px",
  "20": "80px",
  "32": "128px",
  "64": "256px"
};
const fontFamily = {
  regular: "KHTeka",
  mono: "KHTekaMono"
};
const fontWeight = {
  regular: "400",
  medium: "500"
};
const textSize = {
  h1: "50px",
  h2: "44px",
  h3: "38px",
  h4: "32px",
  h5: "26px",
  h6: "20px",
  large: "16px",
  medium: "14px",
  small: "12px"
};
const typography = {
  "h1-regular-mono": { lineHeight: "50px", letterSpacing: "-3px" },
  "h1-regular": { lineHeight: "50px", letterSpacing: "-1px" },
  "h1-medium": { lineHeight: "50px", letterSpacing: "-0.84px" },
  "h2-regular-mono": { lineHeight: "44px", letterSpacing: "-2.64px" },
  "h2-regular": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h2-medium": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h3-regular-mono": { lineHeight: "38px", letterSpacing: "-2.28px" },
  "h3-regular": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h3-medium": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h4-regular-mono": { lineHeight: "32px", letterSpacing: "-1.92px" },
  "h4-regular": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h4-medium": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h5-regular-mono": { lineHeight: "26px", letterSpacing: "-1.56px" },
  "h5-regular": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h5-medium": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h6-regular-mono": { lineHeight: "20px", letterSpacing: "-1.2px" },
  "h6-regular": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "h6-medium": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "lg-regular-mono": { lineHeight: "16px", letterSpacing: "-0.96px" },
  "lg-regular": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "lg-medium": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "md-regular-mono": { lineHeight: "14px", letterSpacing: "-0.84px" },
  "md-regular": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "md-medium": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "sm-regular-mono": { lineHeight: "12px", letterSpacing: "-0.72px" },
  "sm-regular": { lineHeight: "14px", letterSpacing: "-0.12px" },
  "sm-medium": { lineHeight: "14px", letterSpacing: "-0.12px" }
};
const easings = {
  "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
  "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
  "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
  "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
  "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
  "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
};
const durations = {
  xl: "400ms",
  lg: "200ms",
  md: "125ms",
  sm: "75ms"
};
const styles = {
  colors,
  fontFamily,
  fontWeight,
  textSize,
  typography,
  tokens: {
    core: tokens.core,
    theme: tokens.dark
  },
  borderRadius,
  spacing,
  durations,
  easings
};
const PREFIX_VAR = "--apkt";
function normalizeThemeVariables(themeVariables) {
  if (!themeVariables) {
    return {};
  }
  const normalized = {};
  normalized["font-family"] = themeVariables["--apkt-font-family"] ?? themeVariables["--w3m-font-family"] ?? "KHTeka";
  normalized["accent"] = themeVariables["--apkt-accent"] ?? themeVariables["--w3m-accent"] ?? "#0988F0";
  normalized["color-mix"] = themeVariables["--apkt-color-mix"] ?? themeVariables["--w3m-color-mix"] ?? "#000";
  normalized["color-mix-strength"] = themeVariables["--apkt-color-mix-strength"] ?? themeVariables["--w3m-color-mix-strength"] ?? 0;
  normalized["font-size-master"] = themeVariables["--apkt-font-size-master"] ?? themeVariables["--w3m-font-size-master"] ?? "10px";
  normalized["border-radius-master"] = themeVariables["--apkt-border-radius-master"] ?? themeVariables["--w3m-border-radius-master"] ?? "4px";
  if (themeVariables["--apkt-z-index"] !== void 0) {
    normalized["z-index"] = themeVariables["--apkt-z-index"];
  } else if (themeVariables["--w3m-z-index"] !== void 0) {
    normalized["z-index"] = themeVariables["--w3m-z-index"];
  }
  return normalized;
}
const ThemeHelperUtil = {
  createCSSVariables(styles2) {
    const cssVariables = {};
    const cssVariablesVarPrefix = {};
    function createVars(_styles, parent, currentVar = "") {
      for (const [styleKey, styleValue] of Object.entries(_styles)) {
        const variable = currentVar ? `${currentVar}-${styleKey}` : styleKey;
        if (styleValue && typeof styleValue === "object" && Object.keys(styleValue).length) {
          parent[styleKey] = {};
          createVars(styleValue, parent[styleKey], variable);
        } else if (typeof styleValue === "string") {
          parent[styleKey] = `${PREFIX_VAR}-${variable}`;
        }
      }
    }
    function addVarsPrefix(_styles, parent) {
      for (const [key, value] of Object.entries(_styles)) {
        if (value && typeof value === "object") {
          parent[key] = {};
          addVarsPrefix(value, parent[key]);
        } else if (typeof value === "string") {
          parent[key] = `var(${value})`;
        }
      }
    }
    createVars(styles2, cssVariables);
    addVarsPrefix(cssVariables, cssVariablesVarPrefix);
    return { cssVariables, cssVariablesVarPrefix };
  },
  assignCSSVariables(vars2, styles2) {
    const assignedCSSVariables = {};
    function assignVars(_vars, _styles, variable) {
      for (const [varKey, varValue] of Object.entries(_vars)) {
        const nextVariable = variable ? `${variable}-${varKey}` : varKey;
        const styleValues = _styles[varKey];
        if (varValue && typeof varValue === "object") {
          assignVars(varValue, styleValues, nextVariable);
        } else if (typeof styleValues === "string") {
          assignedCSSVariables[`${PREFIX_VAR}-${nextVariable}`] = styleValues;
        }
      }
    }
    assignVars(vars2, styles2);
    return assignedCSSVariables;
  },
  createRootStyles(theme, themeVariables) {
    const styles$1 = {
      ...styles,
      tokens: { ...styles.tokens, theme: theme === "light" ? tokens.light : tokens.dark }
    };
    const { cssVariables } = ThemeHelperUtil.createCSSVariables(styles$1);
    const assignedCSSVariables = ThemeHelperUtil.assignCSSVariables(cssVariables, styles$1);
    const w3mVariables = ThemeHelperUtil.generateW3MVariables(themeVariables);
    const w3mOverrides = ThemeHelperUtil.generateW3MOverrides(themeVariables);
    const scaledVariables = ThemeHelperUtil.generateScaledVariables(themeVariables);
    const baseVariables = ThemeHelperUtil.generateBaseVariables(assignedCSSVariables);
    const allVariables = {
      ...assignedCSSVariables,
      ...baseVariables,
      ...w3mVariables,
      ...w3mOverrides,
      ...scaledVariables
    };
    const colorMixVariables = ThemeHelperUtil.applyColorMixToVariables(themeVariables, allVariables);
    const finalVariables = {
      ...allVariables,
      ...colorMixVariables
    };
    const rootStyles = Object.entries(finalVariables).map(([key, style]) => `${key}:${style.replace("/[:;{}</>]/g", "")};`).join("");
    return `:root {${rootStyles}}`;
  },
  generateW3MVariables(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const normalized = normalizeThemeVariables(themeVariables);
    const variables = {};
    variables["--w3m-font-family"] = normalized["font-family"];
    variables["--w3m-accent"] = normalized["accent"];
    variables["--w3m-color-mix"] = normalized["color-mix"];
    variables["--w3m-color-mix-strength"] = `${normalized["color-mix-strength"]}%`;
    variables["--w3m-font-size-master"] = normalized["font-size-master"];
    variables["--w3m-border-radius-master"] = normalized["border-radius-master"];
    return variables;
  },
  generateW3MOverrides(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const normalized = normalizeThemeVariables(themeVariables);
    const overrides = {};
    if (themeVariables["--apkt-accent"] || themeVariables["--w3m-accent"]) {
      const accentColor = normalized["accent"];
      overrides["--apkt-tokens-core-iconAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-borderAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-textAccentPrimary"] = accentColor;
      overrides["--apkt-tokens-core-backgroundAccentPrimary"] = accentColor;
    }
    if (themeVariables["--apkt-font-family"] || themeVariables["--w3m-font-family"]) {
      overrides["--apkt-fontFamily-regular"] = normalized["font-family"];
    }
    if (normalized["z-index"] !== void 0) {
      overrides["--apkt-tokens-core-zIndex"] = `${normalized["z-index"]}`;
    }
    return overrides;
  },
  generateScaledVariables(themeVariables) {
    if (!themeVariables) {
      return {};
    }
    const normalized = normalizeThemeVariables(themeVariables);
    const scaledVars = {};
    if (themeVariables["--apkt-font-size-master"] || themeVariables["--w3m-font-size-master"]) {
      const masterSize = parseFloat(normalized["font-size-master"].replace("px", ""));
      scaledVars["--apkt-textSize-h1"] = `${Number(masterSize) * 5}px`;
      scaledVars["--apkt-textSize-h2"] = `${Number(masterSize) * 4.4}px`;
      scaledVars["--apkt-textSize-h3"] = `${Number(masterSize) * 3.8}px`;
      scaledVars["--apkt-textSize-h4"] = `${Number(masterSize) * 3.2}px`;
      scaledVars["--apkt-textSize-h5"] = `${Number(masterSize) * 2.6}px`;
      scaledVars["--apkt-textSize-h6"] = `${Number(masterSize) * 2}px`;
      scaledVars["--apkt-textSize-large"] = `${Number(masterSize) * 1.6}px`;
      scaledVars["--apkt-textSize-medium"] = `${Number(masterSize) * 1.4}px`;
      scaledVars["--apkt-textSize-small"] = `${Number(masterSize) * 1.2}px`;
    }
    if (themeVariables["--apkt-border-radius-master"] || themeVariables["--w3m-border-radius-master"]) {
      const masterRadius = parseFloat(normalized["border-radius-master"].replace("px", ""));
      scaledVars["--apkt-borderRadius-1"] = `${Number(masterRadius)}px`;
      scaledVars["--apkt-borderRadius-2"] = `${Number(masterRadius) * 2}px`;
      scaledVars["--apkt-borderRadius-3"] = `${Number(masterRadius) * 3}px`;
      scaledVars["--apkt-borderRadius-4"] = `${Number(masterRadius) * 4}px`;
      scaledVars["--apkt-borderRadius-5"] = `${Number(masterRadius) * 5}px`;
      scaledVars["--apkt-borderRadius-6"] = `${Number(masterRadius) * 6}px`;
      scaledVars["--apkt-borderRadius-8"] = `${Number(masterRadius) * 8}px`;
      scaledVars["--apkt-borderRadius-16"] = `${Number(masterRadius) * 16}px`;
      scaledVars["--apkt-borderRadius-20"] = `${Number(masterRadius) * 20}px`;
      scaledVars["--apkt-borderRadius-32"] = `${Number(masterRadius) * 32}px`;
      scaledVars["--apkt-borderRadius-64"] = `${Number(masterRadius) * 64}px`;
      scaledVars["--apkt-borderRadius-128"] = `${Number(masterRadius) * 128}px`;
    }
    return scaledVars;
  },
  generateColorMixCSS(themeVariables, allVariables) {
    if (!(themeVariables == null ? void 0 : themeVariables["--w3m-color-mix"]) || !themeVariables["--w3m-color-mix-strength"]) {
      return "";
    }
    const colorMix = themeVariables["--w3m-color-mix"];
    const strength = themeVariables["--w3m-color-mix-strength"];
    if (!strength || strength === 0) {
      return "";
    }
    const colorVariables = Object.keys(allVariables || {}).filter((key) => {
      const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon");
      const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
      return isColorToken && !isDimensional;
    });
    if (colorVariables.length === 0) {
      return "";
    }
    const colorMixVariables = colorVariables.map((key) => {
      const originalValue = (allVariables == null ? void 0 : allVariables[key]) || "";
      if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) {
        return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue});`;
      }
      return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}));`;
    }).join("");
    return ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${colorMixVariables}
      }
    }`;
  },
  generateBaseVariables(assignedCSSVariables) {
    const baseVariables = {};
    const themeBackgroundPrimary = assignedCSSVariables["--apkt-tokens-theme-backgroundPrimary"];
    if (themeBackgroundPrimary) {
      baseVariables["--apkt-tokens-theme-backgroundPrimary-base"] = themeBackgroundPrimary;
    }
    const coreBackgroundAccentPrimary = assignedCSSVariables["--apkt-tokens-core-backgroundAccentPrimary"];
    if (coreBackgroundAccentPrimary) {
      baseVariables["--apkt-tokens-core-backgroundAccentPrimary-base"] = coreBackgroundAccentPrimary;
    }
    return baseVariables;
  },
  applyColorMixToVariables(themeVariables, allVariables) {
    const colorMixVariables = {};
    if (allVariables == null ? void 0 : allVariables["--apkt-tokens-theme-backgroundPrimary"]) {
      colorMixVariables["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)";
    }
    if (allVariables == null ? void 0 : allVariables["--apkt-tokens-core-backgroundAccentPrimary"]) {
      colorMixVariables["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)";
    }
    const normalized = normalizeThemeVariables(themeVariables);
    const colorMix = normalized["color-mix"];
    const strength = normalized["color-mix-strength"];
    if (!strength || strength === 0) {
      return colorMixVariables;
    }
    const colorVariables = Object.keys(allVariables || {}).filter((key) => {
      const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon") || key.includes("-tokens-theme-overlay");
      const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
      return isColorToken && !isDimensional;
    });
    if (colorVariables.length === 0) {
      return colorMixVariables;
    }
    colorVariables.forEach((key) => {
      const originalValue = (allVariables == null ? void 0 : allVariables[key]) || "";
      if (key.endsWith("-base")) {
        return;
      }
      if (key === "--apkt-tokens-theme-backgroundPrimary" || key === "--apkt-tokens-core-backgroundAccentPrimary") {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base))`;
      } else if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue})`;
      } else {
        colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}))`;
      }
    });
    return colorMixVariables;
  }
};
const { cssVariablesVarPrefix: vars } = ThemeHelperUtil.createCSSVariables(styles);
function css(strings, ...values) {
  return i$3(strings, ...values.map((value) => typeof value === "function" ? r$2(value(vars)) : r$2(value)));
}
let apktTag = void 0;
let themeTag = void 0;
let darkModeTag = void 0;
let lightModeTag = void 0;
let currentThemeVariables = void 0;
const fonts = {
  "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
  "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
  "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
  "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
  "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
  "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
};
function createAppKitTheme(themeVariables, theme = "dark") {
  if (apktTag) {
    document.head.removeChild(apktTag);
  }
  apktTag = document.createElement("style");
  apktTag.textContent = ThemeHelperUtil.createRootStyles(theme, themeVariables);
  document.head.appendChild(apktTag);
}
function initializeTheming(themeVariables, themeMode = "dark") {
  currentThemeVariables = themeVariables;
  themeTag = document.createElement("style");
  darkModeTag = document.createElement("style");
  lightModeTag = document.createElement("style");
  themeTag.textContent = createRootStyles(themeVariables).core.cssText;
  darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
  lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
  document.head.appendChild(themeTag);
  document.head.appendChild(darkModeTag);
  document.head.appendChild(lightModeTag);
  createAppKitTheme(themeVariables, themeMode);
  setColorTheme(themeMode);
  const hasCustomFont = (themeVariables == null ? void 0 : themeVariables["--apkt-font-family"]) || (themeVariables == null ? void 0 : themeVariables["--w3m-font-family"]);
  if (!hasCustomFont) {
    for (const [key, url] of Object.entries(fonts)) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = url;
      link.as = "font";
      link.type = key.includes("woff2") ? "font/woff2" : "font/woff";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  }
  setColorTheme(themeMode);
}
function setColorTheme(themeMode = "dark") {
  if (darkModeTag && lightModeTag && apktTag) {
    if (themeMode === "light") {
      createAppKitTheme(currentThemeVariables, themeMode);
      darkModeTag.removeAttribute("media");
      lightModeTag.media = "enabled";
    } else {
      createAppKitTheme(currentThemeVariables, themeMode);
      lightModeTag.removeAttribute("media");
      darkModeTag.media = "enabled";
    }
  }
}
function setThemeVariables(_themeVariables) {
  var _a, _b, _c;
  currentThemeVariables = _themeVariables;
  if (themeTag && darkModeTag && lightModeTag) {
    themeTag.textContent = createRootStyles(_themeVariables).core.cssText;
    darkModeTag.textContent = createRootStyles(_themeVariables).dark.cssText;
    lightModeTag.textContent = createRootStyles(_themeVariables).light.cssText;
    const fontFamily2 = (_themeVariables == null ? void 0 : _themeVariables["--apkt-font-family"]) || (_themeVariables == null ? void 0 : _themeVariables["--w3m-font-family"]);
    if (fontFamily2) {
      themeTag.textContent = (_a = themeTag.textContent) == null ? void 0 : _a.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
      darkModeTag.textContent = (_b = darkModeTag.textContent) == null ? void 0 : _b.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
      lightModeTag.textContent = (_c = lightModeTag.textContent) == null ? void 0 : _c.replace("font-family: KHTeka", `font-family: ${fontFamily2}`);
    }
  }
  if (apktTag) {
    const currentMode = (lightModeTag == null ? void 0 : lightModeTag.media) === "enabled" ? "light" : "dark";
    createAppKitTheme(_themeVariables, currentMode);
  }
}
function createRootStyles(_themeVariables) {
  const hasCustomFontFamily = Boolean((_themeVariables == null ? void 0 : _themeVariables["--apkt-font-family"]) || (_themeVariables == null ? void 0 : _themeVariables["--w3m-font-family"]));
  return {
    core: i$3`
      ${hasCustomFontFamily ? i$3`` : i$3`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts["KHTeka-300-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${r$2(fonts["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r$2(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r$2(fonts["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
    dark: i$3`
      :root {
      }
    `,
    light: i$3`
      :root {
      }
    `
  };
}
const resetStyles = i$3`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`;
const elementStyles = i$3`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
const ConstantsUtil = {
  EIP155: ConstantsUtil$2.CHAIN.EVM,
  CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
  CONNECTOR_TYPE_INJECTED: "INJECTED",
  CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
  CONNECTOR_TYPE_AUTH: "AUTH"
};
const PresetsUtil = {
  NetworkImageIds: {
    // Ethereum
    1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    // Arbitrum
    42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
    // Avalanche
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    // Binance Smart Chain
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    // Fantom
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    // Optimism
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    // Polygon
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    // Mantle
    5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
    // Hedera Mainnet
    295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
    // Sepolia
    11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
    // Base Sepolia
    84532: "a18a7ecd-e307-4360-4746-283182228e00",
    // Unichain Sepolia
    1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
    // Unichain Mainnet
    130: "2257980a-3463-48c6-cbac-a42d2a956e00",
    // Monad Testnet
    10143: "0a728e83-bacb-46db-7844-948f05434900",
    // Gnosis
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    // EVMos
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    // ZkSync
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    // Filecoin
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    // Iotx
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    // Metis,
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    // Moonbeam
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    // Moonriver
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    // Zora
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    // Celo
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    // Base
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    // Aurora
    1313161554: "3ff73439-a619-4894-9262-4470c773a100",
    // Ronin Mainnet
    2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    // Saigon Testnet (a.k.a. Ronin)
    2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    // Berachain Mainnet
    80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
    // Abstract Mainnet
    2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
    // Solana networks
    "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    // Bitcoin
    "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
    // Bitcoin Testnet
    "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200",
    // Bitcoin Signet
    "00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700",
    // TON
    "-239": "20f673c0-095e-49b2-07cf-eb5049dcf600",
    // TON Testnet
    "-3": "20f673c0-095e-49b2-07cf-eb5049dcf600"
  }
};
const HelpersUtil = {
  getCaipTokens(tokens2) {
    if (!tokens2) {
      return void 0;
    }
    const caipTokens = {};
    Object.entries(tokens2).forEach(([id, token]) => {
      caipTokens[`${ConstantsUtil.EIP155}:${id}`] = token;
    });
    return caipTokens;
  },
  isLowerCaseMatch(str1, str2) {
    return (str1 == null ? void 0 : str1.toLowerCase()) === (str2 == null ? void 0 : str2.toLowerCase());
  },
  /**
   * Iterates the Auth connector supported chains and returns the namespace that is last connected to the active chain.
   * @returns ChainNamespace | undefined
   */
  getActiveNamespaceConnectedToAuth() {
    const activeChain = ChainController.state.activeChain;
    return ConstantsUtil$2.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain) => ConnectorController.getConnectorId(chain) === ConstantsUtil$2.CONNECTOR_ID.AUTH && chain === activeChain);
  },
  /**
   * Runs a condition function again and again until it returns true or the max number of tries is reached.
   *
   * @param conditionFn - A function (can be async) that returns true when the condition is met.
   * @param intervalMs - Time to wait between tries, in milliseconds.
   * @param maxRetries - Maximum number of times to try before stopping.
   * @returns A Promise that resolves to true if the condition becomes true in time, or false if it doesn't.
   */
  withRetry({ conditionFn, intervalMs, maxRetries }) {
    let attempts = 0;
    return new Promise((resolve) => {
      async function tryCheck() {
        attempts += 1;
        const isConditionMet = await conditionFn();
        if (isConditionMet) {
          return resolve(true);
        }
        if (attempts >= maxRetries) {
          return resolve(false);
        }
        setTimeout(tryCheck, intervalMs);
        return null;
      }
      tryCheck();
    });
  },
  /**
   * Returns the chain namespace from user's chainId which is returned from Auth provider.
   * @param chainId - The chainId to parse.
   * @returns The chain namespace.
   */
  userChainIdToChainNamespace(chainId) {
    if (typeof chainId === "number") {
      return ConstantsUtil$2.CHAIN.EVM;
    }
    const [namespace] = chainId.split(":");
    return namespace;
  },
  /**
   * Get all auth namespaces except the active one
   * @param activeNamespace - The active namespace
   * @returns All auth namespaces except the active one
   */
  getOtherAuthNamespaces(activeNamespace) {
    if (!activeNamespace) {
      return [];
    }
    const authNamespaces = ConstantsUtil$2.AUTH_CONNECTOR_SUPPORTED_CHAINS;
    const otherAuthNamespaces = authNamespaces.filter((ns) => ns !== activeNamespace);
    return otherAuthNamespaces;
  },
  /**
   * Gets the storage info for a connector
   * @param connectorId - The ID of the connector
   * @param namespace - The namespace of the connector
   * @returns
   */
  getConnectorStorageInfo(connectorId, namespace) {
    const storageConnectionsByNamespace = StorageUtil.getConnections();
    const storageConnections = storageConnectionsByNamespace[namespace] ?? [];
    return {
      hasDisconnected: StorageUtil.isConnectorDisconnected(connectorId, namespace),
      hasConnected: storageConnections.some((c2) => HelpersUtil.isLowerCaseMatch(c2.connectorId, connectorId))
    };
  }
};
const abortController = new AbortController();
const ErrorUtil = {
  EmbeddedWalletAbortController: abortController,
  /**
   * Universal Provider errors. Make sure the `message` is matching with the errors thrown by the Universal Provider.
   * We use the `alertErrorKey` to map the error to the correct AppKit alert error.
   */
  UniversalProviderErrors: {
    UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
      message: "Unauthorized: origin not allowed",
      alertErrorKey: "ORIGIN_NOT_ALLOWED"
    },
    JWT_VALIDATION_ERROR: {
      message: "JWT validation error: JWT Token is not yet valid",
      alertErrorKey: "JWT_TOKEN_NOT_VALID"
    },
    INVALID_KEY: {
      message: "Unauthorized: invalid key",
      alertErrorKey: "INVALID_PROJECT_ID"
    }
  },
  ALERT_ERRORS: {
    SWITCH_NETWORK_NOT_FOUND: {
      code: "APKT001",
      displayMessage: "Network Not Found",
      debugMessage: "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."
    },
    ORIGIN_NOT_ALLOWED: {
      code: "APKT002",
      displayMessage: "Invalid App Configuration",
      debugMessage: () => `The origin ${isSafe() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${OptionsController.state.projectId}]`
    },
    IFRAME_LOAD_FAILED: {
      code: "APKT003",
      displayMessage: "Network Error: Wallet Load Failed",
      debugMessage: () => "Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."
    },
    IFRAME_REQUEST_TIMEOUT: {
      code: "APKT004",
      displayMessage: "Wallet Request Timeout",
      debugMessage: () => "The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."
    },
    UNVERIFIED_DOMAIN: {
      code: "APKT005",
      displayMessage: "Unverified Domain",
      debugMessage: () => "Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."
    },
    JWT_TOKEN_NOT_VALID: {
      code: "APKT006",
      displayMessage: "Session Expired",
      debugMessage: "Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."
    },
    INVALID_PROJECT_ID: {
      code: "APKT007",
      displayMessage: "Invalid Project ID",
      debugMessage: "The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."
    },
    PROJECT_ID_NOT_CONFIGURED: {
      code: "APKT008",
      displayMessage: "Project ID Missing",
      debugMessage: "No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."
    },
    SERVER_ERROR_APP_CONFIGURATION: {
      code: "APKT009",
      displayMessage: "Server Error",
      debugMessage: (errorMessage) => `Unable to fetch App Configuration. ${errorMessage}. Please check your network connection and try again shortly. Contact support if the issue persists.`
    },
    RATE_LIMITED_APP_CONFIGURATION: {
      code: "APKT010",
      displayMessage: "Rate Limited",
      debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
    }
  },
  ALERT_WARNINGS: {
    LOCAL_CONFIGURATION_IGNORED: {
      debugMessage: (warningMessage) => `[Reown Config Notice] ${warningMessage}`
    },
    INACTIVE_NAMESPACE_NOT_CONNECTED: {
      code: "APKTW001",
      displayMessage: "Inactive Namespace Not Connected",
      debugMessage: (namespace, errorMessage) => `An error occurred while connecting an inactive namespace ${namespace}: "${errorMessage}"`
    },
    INVALID_EMAIL: {
      code: "APKTW002",
      displayMessage: "Invalid Email Address",
      debugMessage: "Please enter a valid email address"
    }
  }
};
const TokenUtil = {
  TOKEN_ADDRESSES_BY_SYMBOL: {
    USDC: {
      8453: baseUSDC.asset,
      84532: baseSepoliaUSDC.asset
    }
  },
  getTokenSymbolByAddress(tokenAddress) {
    if (!tokenAddress) {
      return void 0;
    }
    const [symbol] = Object.entries(TokenUtil.TOKEN_ADDRESSES_BY_SYMBOL).find(([_2, addressesByChain]) => Object.values(addressesByChain).includes(tokenAddress)) ?? [];
    return symbol;
  }
};
const LoggerUtil = {
  createLogger(onError, level = "error") {
    const loggerOptions = Ge({
      level
    });
    const { logger } = Ue({
      opts: loggerOptions
    });
    logger.error = (...args) => {
      for (const arg of args) {
        if (arg instanceof Error) {
          onError(arg, ...args);
          return;
        }
      }
      onError(void 0, ...args);
    };
    return logger;
  }
};
const RPC_URL_HOST = "rpc.walletconnect.org";
function getBlockchainApiRpcUrl(caipNetworkId, projectId) {
  const url = new URL("https://rpc.walletconnect.org/v1/");
  url.searchParams.set("chainId", caipNetworkId);
  url.searchParams.set("projectId", projectId);
  return url.toString();
}
const WC_HTTP_RPC_SUPPORTED_CHAINS = [
  "near:mainnet",
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  "eip155:1101",
  "eip155:56",
  "eip155:42161",
  "eip155:7777777",
  "eip155:59144",
  "eip155:324",
  "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  "eip155:5000",
  "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
  "eip155:80084",
  "eip155:5003",
  "eip155:100",
  "eip155:8453",
  "eip155:42220",
  "eip155:1313161555",
  "eip155:17000",
  "eip155:1",
  "eip155:300",
  "eip155:1313161554",
  "eip155:1329",
  "eip155:84532",
  "eip155:421614",
  "eip155:11155111",
  "eip155:8217",
  "eip155:43114",
  "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
  "eip155:999999999",
  "eip155:11155420",
  "eip155:80002",
  "eip155:97",
  "eip155:43113",
  "eip155:137",
  "eip155:10",
  "eip155:1301",
  "eip155:80094",
  "eip155:80069",
  "eip155:560048",
  "eip155:31",
  "eip155:2818",
  "eip155:57054",
  "eip155:911867",
  "eip155:534351",
  "eip155:1112",
  "eip155:534352",
  "eip155:1111",
  "eip155:146",
  "eip155:130",
  "eip155:1284",
  "eip155:30",
  "eip155:2810",
  "bip122:000000000019d6689c085ae165831e93",
  "bip122:000000000933ea01ad0ee984209779ba"
];
const CaipNetworksUtil = {
  /**
   * Extends the RPC URL with the project ID if the RPC URL is a Reown URL
   * @param rpcUrl - The RPC URL to extend
   * @param projectId - The project ID to extend the RPC URL with
   * @returns The extended RPC URL
   */
  extendRpcUrlWithProjectId(rpcUrl, projectId) {
    let isReownUrl = false;
    try {
      const url = new URL(rpcUrl);
      isReownUrl = url.host === RPC_URL_HOST;
    } catch (e2) {
      isReownUrl = false;
    }
    if (isReownUrl) {
      const url = new URL(rpcUrl);
      if (!url.searchParams.has("projectId")) {
        url.searchParams.set("projectId", projectId);
      }
      return url.toString();
    }
    return rpcUrl;
  },
  isCaipNetwork(network) {
    return "chainNamespace" in network && "caipNetworkId" in network;
  },
  getChainNamespace(network) {
    if (this.isCaipNetwork(network)) {
      return network.chainNamespace;
    }
    return ConstantsUtil$2.CHAIN.EVM;
  },
  getCaipNetworkId(network) {
    if (this.isCaipNetwork(network)) {
      return network.caipNetworkId;
    }
    return `${ConstantsUtil$2.CHAIN.EVM}:${network.id}`;
  },
  // eslint-disable-next-line max-params
  getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId) {
    var _a, _b, _c;
    const defaultRpcUrl = (_c = (_b = (_a = caipNetwork.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0];
    if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetworkId)) {
      return getBlockchainApiRpcUrl(caipNetworkId, projectId);
    }
    return defaultRpcUrl || "";
  },
  /**
   * Extends the CaipNetwork object with the image ID and image URL if the image ID is not provided
   * @param params - The parameters object
   * @param params.caipNetwork - The CaipNetwork object to extend
   * @param params.networkImageIds - The network image IDs
   * @param params.customNetworkImageUrls - The custom network image URLs
   * @param params.projectId - The project ID
   * @param params.customRpc - Boolean to indicate if the custom RPC URL should be used
   * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
   * @returns The extended array of CaipNetwork objects
   */
  extendCaipNetwork(caipNetwork, { customNetworkImageUrls, projectId, customRpcUrls }) {
    var _a, _b, _c, _d2, _e, _f, _g;
    const chainNamespace = this.getChainNamespace(caipNetwork);
    const caipNetworkId = this.getCaipNetworkId(caipNetwork);
    const networkDefaultRpcUrl = (_c = (_b = (_a = caipNetwork.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0];
    const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId);
    const chainDefaultRpcUrl = ((_f = (_e = (_d2 = caipNetwork == null ? void 0 : caipNetwork.rpcUrls) == null ? void 0 : _d2["chainDefault"]) == null ? void 0 : _e.http) == null ? void 0 : _f[0]) || networkDefaultRpcUrl;
    const customRpcUrlsOfNetwork = ((_g = customRpcUrls == null ? void 0 : customRpcUrls[caipNetworkId]) == null ? void 0 : _g.map((i2) => i2.url)) || [];
    const rpcUrls = [...customRpcUrlsOfNetwork, ...reownRpcUrl ? [reownRpcUrl] : []];
    const rpcUrlsWithoutReown = [...customRpcUrlsOfNetwork];
    if (chainDefaultRpcUrl && !rpcUrlsWithoutReown.includes(chainDefaultRpcUrl)) {
      rpcUrlsWithoutReown.push(chainDefaultRpcUrl);
    }
    return {
      ...caipNetwork,
      chainNamespace,
      caipNetworkId,
      assets: {
        imageId: PresetsUtil.NetworkImageIds[caipNetwork.id],
        imageUrl: customNetworkImageUrls == null ? void 0 : customNetworkImageUrls[caipNetwork.id]
      },
      rpcUrls: {
        ...caipNetwork.rpcUrls,
        default: {
          http: rpcUrls
        },
        // Save the networks original RPC URL default
        chainDefault: {
          http: rpcUrlsWithoutReown
        }
      }
    };
  },
  /**
   * Extends the array of CaipNetwork objects with the image ID and image URL if the image ID is not provided
   * @param caipNetworks - The array of CaipNetwork objects to extend
   * @param params - The parameters object
   * @param params.networkImageIds - The network image IDs
   * @param params.customNetworkImageUrls - The custom network image URLs
   * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
   * @param params.projectId - The project ID
   * @returns The extended array of CaipNetwork objects
   */
  extendCaipNetworks(caipNetworks, { customNetworkImageUrls, projectId, customRpcUrls }) {
    return caipNetworks.map((caipNetwork) => CaipNetworksUtil.extendCaipNetwork(caipNetwork, {
      customNetworkImageUrls,
      customRpcUrls,
      projectId
    }));
  },
  getViemTransport(caipNetwork, projectId, customRpcUrls) {
    var _a, _b, _c;
    const transports = [];
    customRpcUrls == null ? void 0 : customRpcUrls.forEach((rpcUrl) => {
      transports.push(http(rpcUrl.url, rpcUrl.config));
    });
    if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
      transports.push(http(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), {
        /*
         * The Blockchain API uses "Content-Type: text/plain" to avoid OPTIONS preflight requests
         * It will only work for viem >= 2.17.7
         */
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      }));
    }
    (_c = (_b = (_a = caipNetwork == null ? void 0 : caipNetwork.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b.http) == null ? void 0 : _c.forEach((rpcUrl) => {
      transports.push(http(rpcUrl));
    });
    return fallback(transports);
  },
  extendWagmiTransports(caipNetwork, projectId, transport) {
    if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
      const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetwork.caipNetworkId, projectId);
      return fallback([transport, http(reownRpcUrl)]);
    }
    return transport;
  },
  /**
   * Generates the unsupported network object with the given CaipNetwork ID
   * @param caipNetworkId - The CAIP network ID
   * @returns The unsupported CAIP network object
   */
  getUnsupportedNetwork(caipNetworkId) {
    return {
      id: caipNetworkId.split(":")[1],
      caipNetworkId,
      name: ConstantsUtil$2.UNSUPPORTED_NETWORK_NAME,
      chainNamespace: caipNetworkId.split(":")[0],
      nativeCurrency: {
        name: "",
        decimals: 0,
        symbol: ""
      },
      rpcUrls: {
        default: {
          http: []
        }
      }
    };
  },
  /**
   * Gets the CaipNetwork object from the storage if `@appkit/active_caip_network_id` is being set
   * @returns CaipNetwork or undefined
   */
  getCaipNetworkFromStorage(defaultCaipNetwork) {
    var _a;
    const caipNetworkIdFromStorage = StorageUtil.getActiveCaipNetworkId();
    const caipNetworks = ChainController.getAllRequestedCaipNetworks();
    const availableNamespaces = Array.from(((_a = ChainController.state.chains) == null ? void 0 : _a.keys()) || []);
    const namespace = caipNetworkIdFromStorage == null ? void 0 : caipNetworkIdFromStorage.split(":")[0];
    const isNamespaceAvailable = namespace ? availableNamespaces.includes(namespace) : false;
    const caipNetwork = caipNetworks == null ? void 0 : caipNetworks.find((cn) => cn.caipNetworkId === caipNetworkIdFromStorage);
    const isUnsupportedNetwork = isNamespaceAvailable && !caipNetwork && caipNetworkIdFromStorage;
    if (isUnsupportedNetwork) {
      return this.getUnsupportedNetwork(caipNetworkIdFromStorage);
    }
    if (caipNetwork) {
      return caipNetwork;
    }
    if (defaultCaipNetwork) {
      return defaultCaipNetwork;
    }
    return caipNetworks == null ? void 0 : caipNetworks[0];
  }
};
function base(ALPHABET2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  const BASE_MAP = new Uint8Array(256);
  for (let j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (let i2 = 0; i2 < ALPHABET2.length; i2++) {
    const x2 = ALPHABET2.charAt(i2);
    const xc = x2.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc] = i2;
  }
  const BASE = ALPHABET2.length;
  const LEADER = ALPHABET2.charAt(0);
  const FACTOR = Math.log(BASE) / Math.log(256);
  const iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    let zeroes = 0;
    let length = 0;
    let pbegin = 0;
    const pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    const b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      let carry = source[pbegin];
      let i2 = 0;
      for (let it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i2;
      pbegin++;
    }
    let it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    let str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET2.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    let psz = 0;
    let zeroes = 0;
    let length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    const size = (source.length - psz) * FACTOR + 1 >>> 0;
    const b256 = new Uint8Array(size);
    while (psz < source.length) {
      const charCode = source.charCodeAt(psz);
      if (charCode > 255) {
        return;
      }
      let carry = BASE_MAP[charCode];
      if (carry === 255) {
        return;
      }
      let i2 = 0;
      for (let it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i2;
      psz++;
    }
    let it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    const vch = new Uint8Array(zeroes + (size - it4));
    let j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    const buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error("Non-base" + BASE + " character");
  }
  return {
    encode,
    decodeUnsafe,
    decode
  };
}
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const bs58 = base(ALPHABET);
const WcConstantsUtil = {
  ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
  ERROR_CODE_DEFAULT: 5e3,
  ERROR_INVALID_CHAIN_ID: 32603
};
class UniversalAdapter extends AdapterBlueprint {
  async setUniversalProvider(universalProvider) {
    if (!this.namespace) {
      throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
    }
    this.addConnector(new WalletConnectConnector({
      provider: universalProvider,
      caipNetworks: this.getCaipNetworks(),
      namespace: this.namespace
    }));
    return Promise.resolve();
  }
  async connect(params) {
    return Promise.resolve({
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: Number(params.chainId),
      provider: this.provider,
      address: ""
    });
  }
  async disconnect() {
    try {
      const connector = this.getWalletConnectConnector();
      await connector.disconnect();
      this.emit("disconnect");
    } catch (error) {
      console.warn("UniversalAdapter:disconnect - error", error);
    }
    return { connections: [] };
  }
  syncConnections() {
    return Promise.resolve();
  }
  async writeSolanaTransaction() {
    return Promise.resolve({
      hash: ""
    });
  }
  async getAccounts({ namespace }) {
    var _a, _b, _c, _d2;
    const provider = this.provider;
    const addresses = ((_d2 = (_c = (_b = (_a = provider == null ? void 0 : provider.session) == null ? void 0 : _a.namespaces) == null ? void 0 : _b[namespace]) == null ? void 0 : _c.accounts) == null ? void 0 : _d2.map((account) => {
      const [, , address] = account.split(":");
      return address;
    }).filter((address, index, self) => self.indexOf(address) === index)) || [];
    return Promise.resolve({
      accounts: addresses.map((address) => CoreHelperUtil.createAccount(namespace, address, namespace === "bip122" ? "payment" : "eoa"))
    });
  }
  async syncConnectors() {
    return Promise.resolve();
  }
  async getBalance(params) {
    var _a, _b, _c, _d2, _e;
    const isBalanceSupported = params.caipNetwork && ConstantsUtil$1.BALANCE_SUPPORTED_CHAINS.includes((_a = params.caipNetwork) == null ? void 0 : _a.chainNamespace);
    if (!isBalanceSupported || ((_b = params.caipNetwork) == null ? void 0 : _b.testnet)) {
      return {
        balance: "0.00",
        symbol: ((_c = params.caipNetwork) == null ? void 0 : _c.nativeCurrency.symbol) || ""
      };
    }
    const accountData = ChainController.getAccountData();
    if ((accountData == null ? void 0 : accountData.balanceLoading) && params.chainId === ((_d2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _d2.id)) {
      return {
        balance: (accountData == null ? void 0 : accountData.balance) || "0.00",
        symbol: (accountData == null ? void 0 : accountData.balanceSymbol) || ""
      };
    }
    const balances = await ChainController.fetchTokenBalance();
    const balance = balances.find((b2) => {
      var _a2, _b2;
      return b2.chainId === `${(_a2 = params.caipNetwork) == null ? void 0 : _a2.chainNamespace}:${params.chainId}` && b2.symbol === ((_b2 = params.caipNetwork) == null ? void 0 : _b2.nativeCurrency.symbol);
    });
    return {
      balance: (balance == null ? void 0 : balance.quantity.numeric) || "0.00",
      symbol: (balance == null ? void 0 : balance.symbol) || ((_e = params.caipNetwork) == null ? void 0 : _e.nativeCurrency.symbol) || ""
    };
  }
  async signMessage(params) {
    var _a, _b, _c;
    const { provider, message, address } = params;
    if (!provider) {
      throw new Error("UniversalAdapter:signMessage - provider is undefined");
    }
    let signature = "";
    if (((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.chainNamespace) === ConstantsUtil$2.CHAIN.SOLANA) {
      const response = await provider.request({
        method: "solana_signMessage",
        params: {
          message: bs58.encode(new TextEncoder().encode(message)),
          pubkey: address
        }
      }, (_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId);
      signature = response.signature;
    } else {
      signature = await provider.request({
        method: "personal_sign",
        params: [message, address]
      }, (_c = ChainController.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId);
    }
    return { signature };
  }
  // -- Transaction methods ---------------------------------------------------
  /**
   *
   * These methods are supported only on `wagmi` and `ethers` since the Solana SDK does not support them in the same way.
   * These function definition is to have a type parity between the clients. Currently not in use.
   */
  async estimateGas() {
    return Promise.resolve({
      gas: BigInt(0)
    });
  }
  async sendTransaction() {
    return Promise.resolve({
      hash: ""
    });
  }
  walletGetAssets(_params) {
    return Promise.resolve({});
  }
  async writeContract() {
    return Promise.resolve({
      hash: ""
    });
  }
  emitFirstAvailableConnection() {
    return void 0;
  }
  parseUnits() {
    return 0n;
  }
  formatUnits() {
    return "0";
  }
  async getCapabilities() {
    return Promise.resolve({});
  }
  async grantPermissions() {
    return Promise.resolve({});
  }
  async revokePermissions() {
    return Promise.resolve("0x");
  }
  async syncConnection() {
    return Promise.resolve({
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: 1,
      provider: this.provider,
      address: ""
    });
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async switchNetwork(params) {
    var _a, _b, _c, _d2, _e, _f;
    const { caipNetwork } = params;
    const connector = this.getWalletConnectConnector();
    if (caipNetwork.chainNamespace === ConstantsUtil$2.CHAIN.EVM) {
      try {
        await ((_a = connector.provider) == null ? void 0 : _a.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: toHex(caipNetwork.id) }]
        }));
      } catch (switchError) {
        if (switchError.code === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === WcConstantsUtil.ERROR_INVALID_CHAIN_ID || switchError.code === WcConstantsUtil.ERROR_CODE_DEFAULT || ((_c = (_b = switchError == null ? void 0 : switchError.data) == null ? void 0 : _b.originalError) == null ? void 0 : _c.code) === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
          try {
            await ((_f = connector.provider) == null ? void 0 : _f.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: toHex(caipNetwork.id),
                  rpcUrls: [(_d2 = caipNetwork == null ? void 0 : caipNetwork.rpcUrls["chainDefault"]) == null ? void 0 : _d2.http],
                  chainName: caipNetwork.name,
                  nativeCurrency: caipNetwork.nativeCurrency,
                  blockExplorerUrls: [(_e = caipNetwork.blockExplorers) == null ? void 0 : _e.default.url]
                }
              ]
            }));
          } catch (error) {
            throw new Error("Chain is not supported");
          }
        }
      }
    }
    connector.provider.setDefaultChain(caipNetwork.caipNetworkId);
  }
  getWalletConnectProvider() {
    const connector = this.connectors.find((c2) => c2.type === "WALLET_CONNECT");
    const provider = connector == null ? void 0 : connector.provider;
    return provider;
  }
}
const FEATURE_KEYS = [
  "email",
  "socials",
  "swaps",
  "onramp",
  "activity",
  "reownBranding",
  "multiWallet",
  "emailCapture",
  "payWithExchange",
  "payments",
  "reownAuthentication",
  "headless"
];
const featureConfig = {
  email: {
    apiFeatureName: "social_login",
    localFeatureName: "email",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.includes("email");
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.email;
      }
      return Boolean(localValue);
    }
  },
  socials: {
    apiFeatureName: "social_login",
    localFeatureName: "socials",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.length > 0 ? config.filter((s2) => s2 !== "email") : false;
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.socials;
      }
      if (typeof localValue === "boolean") {
        return localValue ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.socials : false;
      }
      return localValue;
    }
  },
  swaps: {
    apiFeatureName: "swap",
    localFeatureName: "swaps",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.swaps;
      }
      if (typeof localValue === "boolean") {
        return localValue ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.swaps : false;
      }
      return localValue;
    }
  },
  onramp: {
    apiFeatureName: "onramp",
    localFeatureName: "onramp",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => {
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      const config = apiConfig.config;
      return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
    },
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.onramp;
      }
      if (typeof localValue === "boolean") {
        return localValue ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.onramp : false;
      }
      return localValue;
    }
  },
  activity: {
    apiFeatureName: "activity",
    localFeatureName: "history",
    returnType: false,
    isLegacy: true,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.activity;
      }
      return Boolean(localValue);
    }
  },
  reownBranding: {
    apiFeatureName: "reown_branding",
    localFeatureName: "reownBranding",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: (localValue) => {
      if (localValue === void 0) {
        return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.reownBranding;
      }
      return Boolean(localValue);
    }
  },
  emailCapture: {
    apiFeatureName: "email_capture",
    localFeatureName: "emailCapture",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => apiConfig.isEnabled && (apiConfig.config ?? []),
    processFallback: (_localValue) => false
  },
  multiWallet: {
    apiFeatureName: "multi_wallet",
    localFeatureName: "multiWallet",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.multiWallet
  },
  payWithExchange: {
    apiFeatureName: "fund_from_exchange",
    localFeatureName: "payWithExchange",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.payWithExchange
  },
  payments: {
    apiFeatureName: "payments",
    localFeatureName: "payments",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.payments
  },
  reownAuthentication: {
    apiFeatureName: "reown_authentication",
    localFeatureName: "reownAuthentication",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: (localValue) => {
      if (typeof localValue === "undefined") {
        return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.reownAuthentication;
      }
      return Boolean(localValue);
    }
  },
  headless: {
    apiFeatureName: "headless",
    localFeatureName: "headless",
    returnType: false,
    isLegacy: false,
    isAvailableOnBasic: false,
    processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
    processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.headless
  }
};
const ConfigUtil = {
  localSettingsOverridden: /* @__PURE__ */ new Set(),
  getApiConfig(id, apiProjectConfig) {
    return apiProjectConfig == null ? void 0 : apiProjectConfig.find((f2) => f2.id === id);
  },
  addWarning(localFeatureValue, featureKey) {
    if (localFeatureValue !== void 0) {
      const config = featureConfig[featureKey];
      const warningName = config.isLegacy ? `"features.${config.localFeatureName}" (now "${featureKey}")` : `"features.${featureKey}"`;
      this.localSettingsOverridden.add(warningName);
    }
  },
  processFeature(featureKey, localFeatures, apiProjectConfig, useApi, isBasic) {
    const config = featureConfig[featureKey];
    const localValue = localFeatures[config.localFeatureName];
    if (isBasic && !config.isAvailableOnBasic) {
      return false;
    }
    if (useApi) {
      const apiConfig = this.getApiConfig(config.apiFeatureName, apiProjectConfig);
      if ((apiConfig == null ? void 0 : apiConfig.config) === null) {
        return this.processFallbackFeature(featureKey, localValue);
      }
      if (!(apiConfig == null ? void 0 : apiConfig.config)) {
        return false;
      }
      if (localValue !== void 0) {
        this.addWarning(localValue, featureKey);
      }
      return this.processApiFeature(featureKey, apiConfig);
    }
    return this.processFallbackFeature(featureKey, localValue);
  },
  processApiFeature(featureKey, apiConfig) {
    return featureConfig[featureKey].processApi(apiConfig);
  },
  processFallbackFeature(featureKey, localValue) {
    return featureConfig[featureKey].processFallback(localValue);
  },
  async fetchRemoteFeatures(config) {
    const isBasic = config.basic ?? false;
    const localFeatures = config.features || {};
    this.localSettingsOverridden.clear();
    let apiProjectConfig = null;
    let shouldUseApiConfig = false;
    try {
      apiProjectConfig = await ApiController.fetchProjectConfig();
      shouldUseApiConfig = apiProjectConfig !== null && apiProjectConfig !== void 0;
    } catch (e2) {
      console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", e2);
    }
    const remoteFeaturesConfig = shouldUseApiConfig && !isBasic ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES : ConstantsUtil$1.DEFAULT_REMOTE_FEATURES_DISABLED;
    try {
      for (const featureKey of FEATURE_KEYS) {
        const result = this.processFeature(featureKey, localFeatures, apiProjectConfig, shouldUseApiConfig, isBasic);
        Object.assign(remoteFeaturesConfig, { [featureKey]: result });
      }
    } catch (e2) {
      console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", e2);
      return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES;
    }
    if (shouldUseApiConfig && this.localSettingsOverridden.size > 0) {
      const warningMessage = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
      AlertController.open({
        debugMessage: ErrorUtil.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(warningMessage)
      }, "warning");
    }
    return remoteFeaturesConfig;
  }
};
class AppKitBaseClient {
  constructor(options) {
    this.chainNamespaces = [];
    this.features = {};
    this.remoteFeatures = {};
    this.reportedAlertErrors = {};
    this.getCaipNetwork = (chainNamespace, id) => {
      var _a, _b, _c;
      if (chainNamespace) {
        const caipNetworkWithId = (_a = ChainController.getCaipNetworks(chainNamespace)) == null ? void 0 : _a.find((c2) => c2.id === id);
        if (caipNetworkWithId) {
          return caipNetworkWithId;
        }
        const namespaceCaipNetwork = (_b = ChainController.getNetworkData(chainNamespace)) == null ? void 0 : _b.caipNetwork;
        if (namespaceCaipNetwork) {
          return namespaceCaipNetwork;
        }
        const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(chainNamespace);
        return (_c = requestedCaipNetworks.filter((c2) => c2.chainNamespace === chainNamespace)) == null ? void 0 : _c[0];
      }
      return ChainController.state.activeCaipNetwork || this.defaultCaipNetwork;
    };
    this.getCaipNetworkId = () => {
      const network = this.getCaipNetwork();
      if (network) {
        return network.id;
      }
      return void 0;
    };
    this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
    this.getActiveChainNamespace = () => ChainController.state.activeChain;
    this.setRequestedCaipNetworks = (requestedCaipNetworks, chain) => {
      ChainController.setRequestedCaipNetworks(requestedCaipNetworks, chain);
    };
    this.getApprovedCaipNetworkIds = () => ChainController.getAllApprovedCaipNetworkIds();
    this.getCaipAddress = (chainNamespace) => {
      var _a, _b;
      if (ChainController.state.activeChain === chainNamespace || !chainNamespace) {
        return ChainController.state.activeCaipAddress;
      }
      return (_b = (_a = ChainController.state.chains.get(chainNamespace)) == null ? void 0 : _a.accountState) == null ? void 0 : _b.caipAddress;
    };
    this.setClientId = (clientId) => {
      BlockchainApiController.setClientId(clientId);
    };
    this.getProvider = (namespace) => ProviderController.getProvider(namespace);
    this.getProviderType = (namespace) => ProviderController.getProviderId(namespace);
    this.getPreferredAccountType = (namespace) => getPreferredAccountType(namespace);
    this.setCaipAddress = (caipAddress, chain, shouldRefresh = false) => {
      ChainController.setAccountProp("caipAddress", caipAddress, chain, shouldRefresh);
      ChainController.setAccountProp("address", CoreHelperUtil.getPlainAddress(caipAddress), chain, shouldRefresh);
    };
    this.setBalance = (balance, balanceSymbol, chain) => {
      ChainController.setAccountProp("balance", balance, chain);
      ChainController.setAccountProp("balanceSymbol", balanceSymbol, chain);
    };
    this.setProfileName = (profileName, chain) => {
      ChainController.setAccountProp("profileName", profileName, chain);
    };
    this.setProfileImage = (profileImage, chain) => {
      ChainController.setAccountProp("profileImage", profileImage, chain);
    };
    this.setUser = (user, chain) => {
      ChainController.setAccountProp("user", user, chain);
    };
    this.resetAccount = (chain) => {
      ChainController.resetAccount(chain);
    };
    this.setCaipNetwork = (caipNetwork) => {
      ChainController.setActiveCaipNetwork(caipNetwork);
    };
    this.setCaipNetworkOfNamespace = (caipNetwork, chainNamespace) => {
      ChainController.setChainNetworkData(chainNamespace, { caipNetwork });
    };
    this.setStatus = (status, chain) => {
      ChainController.setAccountProp("status", status, chain);
      if (ConnectorController.isConnected()) {
        StorageUtil.setConnectionStatus("connected");
      } else {
        StorageUtil.setConnectionStatus("disconnected");
      }
    };
    this.getAddressByChainNamespace = (chainNamespace) => {
      var _a;
      return (_a = ChainController.getAccountData(chainNamespace)) == null ? void 0 : _a.address;
    };
    this.setConnectors = (connectors) => {
      const allConnectors = [...ConnectorController.state.allConnectors, ...connectors];
      ConnectorController.setConnectors(allConnectors);
    };
    this.setConnections = (connections, chainNamespace) => {
      StorageUtil.setConnections(connections, chainNamespace);
      ConnectionController.setConnections(connections, chainNamespace);
    };
    this.fetchIdentity = (request) => BlockchainApiController.fetchIdentity(request);
    this.getReownName = (address) => EnsController.getNamesForAddress(address);
    this.getConnectors = () => ConnectorController.getConnectors();
    this.getConnectorImage = (connector) => AssetUtil.getConnectorImage(connector);
    this.getConnections = (namespace) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$2.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return [];
      }
      return ConnectionControllerUtil.getConnectionsData(namespace).connections;
    };
    this.getRecentConnections = (namespace) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$2.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return [];
      }
      return ConnectionControllerUtil.getConnectionsData(namespace).recentConnections;
    };
    this.switchConnection = async (params) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$2.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return;
      }
      await ConnectionController.switchConnection(params);
    };
    this.deleteConnection = (params) => {
      if (!this.remoteFeatures.multiWallet) {
        AlertController.open(ConstantsUtil$2.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return;
      }
      StorageUtil.deleteAddressFromConnection(params);
      ConnectionController.syncStorageConnections();
    };
    this.setConnectedWalletInfo = (connectedWalletInfo, chain) => {
      const type = ProviderController.getProviderId(chain);
      const walletInfo = connectedWalletInfo ? { ...connectedWalletInfo, type } : void 0;
      ChainController.setAccountProp("connectedWalletInfo", walletInfo, chain);
    };
    this.getIsConnectedState = () => Boolean(ChainController.state.activeCaipAddress);
    this.addAddressLabel = (address, label, chain) => {
      var _a;
      const addressLabels = ((_a = ChainController.getAccountData(chain)) == null ? void 0 : _a.addressLabels) || {};
      ChainController.setAccountProp("addressLabels", { ...addressLabels, [address]: label }, chain);
    };
    this.removeAddressLabel = (address, chain) => {
      var _a;
      const addressLabels = ((_a = ChainController.getAccountData(chain)) == null ? void 0 : _a.addressLabels) || {};
      ChainController.setAccountProp("addressLabels", { ...addressLabels, [address]: void 0 }, chain);
    };
    this.getAddress = (chainNamespace) => {
      var _a;
      const namespace = chainNamespace || ChainController.state.activeChain;
      return (_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.address;
    };
    this.resetNetwork = (namespace) => {
      ChainController.resetNetwork(namespace);
    };
    this.addConnector = (connector) => {
      ConnectorController.addConnector(connector);
    };
    this.resetWcConnection = () => {
      ConnectionController.resetWcConnection();
    };
    this.setAddressExplorerUrl = (addressExplorerUrl, chain) => {
      ChainController.setAccountProp("addressExplorerUrl", addressExplorerUrl, chain);
    };
    this.setSmartAccountDeployed = (isDeployed, chain) => {
      ChainController.setAccountProp("smartAccountDeployed", isDeployed, chain);
    };
    this.setPreferredAccountType = (preferredAccountType, chain) => {
      ChainController.setAccountProp("preferredAccountType", preferredAccountType, chain);
    };
    this.setEIP6963Enabled = (enabled) => {
      OptionsController.setEIP6963Enabled(enabled);
    };
    this.handleUnsafeRPCRequest = () => {
      if (this.isOpen()) {
        if (this.isTransactionStackEmpty()) {
          return;
        }
        this.redirect("ApproveTransaction");
      } else {
        this.open({ view: "ApproveTransaction" });
      }
    };
    this.options = options;
    this.version = options.sdkVersion;
    this.caipNetworks = this.extendCaipNetworks(options);
    this.chainNamespaces = this.getChainNamespacesSet(options.adapters, this.caipNetworks);
    this.defaultCaipNetwork = this.extendDefaultCaipNetwork(options);
    this.chainAdapters = this.createAdapters(options.adapters);
    this.readyPromise = this.initialize(options);
  }
  getChainNamespacesSet(adapters, caipNetworks) {
    const adapterNamespaces = adapters == null ? void 0 : adapters.map((adapter) => adapter.namespace).filter((namespace) => Boolean(namespace));
    if (adapterNamespaces == null ? void 0 : adapterNamespaces.length) {
      return [...new Set(adapterNamespaces)];
    }
    const networkNamespaces = caipNetworks == null ? void 0 : caipNetworks.map((network) => network.chainNamespace);
    return [...new Set(networkNamespaces)];
  }
  async initialize(options) {
    var _a, _b, _c, _d2, _e, _f;
    this.initializeProjectSettings(options);
    this.initControllers(options);
    await this.initChainAdapters();
    this.sendInitializeEvent(options);
    if (((_a = options.features) == null ? void 0 : _a.headless) && !ConnectorUtil.hasInjectedConnectors()) {
      ApiController.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false,
        fetchRecommendedWallets: true
      });
    }
    if (OptionsController.state.enableReconnect) {
      await this.syncExistingConnection();
      await this.syncAdapterConnections();
    } else {
      await this.unSyncExistingConnection();
    }
    if (!options.basic && !options.manualWCControl) {
      this.remoteFeatures = await ConfigUtil.fetchRemoteFeatures(options);
    }
    await ApiController.fetchUsage();
    OptionsController.setRemoteFeatures(this.remoteFeatures);
    if (this.remoteFeatures.onramp) {
      OnRampController.setOnrampProviders(this.remoteFeatures.onramp);
    }
    if (((_b = OptionsController.state.remoteFeatures) == null ? void 0 : _b.email) || Array.isArray((_c = OptionsController.state.remoteFeatures) == null ? void 0 : _c.socials) && ((_d2 = OptionsController.state.remoteFeatures) == null ? void 0 : _d2.socials.length) > 0) {
      await this.checkAllowedOrigins();
    }
    if (((_e = OptionsController.state.features) == null ? void 0 : _e.reownAuthentication) || ((_f = OptionsController.state.remoteFeatures) == null ? void 0 : _f.reownAuthentication)) {
      const { ReownAuthentication } = await __vitePreload(async () => {
        const { ReownAuthentication: ReownAuthentication2 } = await import("./features-R4UuKmd7.js");
        return { ReownAuthentication: ReownAuthentication2 };
      }, true ? __vite__mapDeps([4,1,2]) : void 0);
      const currentSIWX = OptionsController.state.siwx;
      if (!(currentSIWX instanceof ReownAuthentication)) {
        if (currentSIWX) {
          console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden.");
        }
        OptionsController.setSIWX(new ReownAuthentication());
      }
    }
  }
  async openSend(args) {
    var _a;
    const namespaceToUse = args.namespace || ChainController.state.activeChain;
    const caipAddress = this.getCaipAddress(namespaceToUse);
    const chainId = (_a = this.getCaipNetwork(namespaceToUse)) == null ? void 0 : _a.id;
    if (!caipAddress) {
      throw new Error("openSend: caipAddress not found");
    }
    if ((chainId == null ? void 0 : chainId.toString()) !== args.chainId.toString()) {
      const caipNetwork = ChainController.getCaipNetworkById(args.chainId, namespaceToUse);
      if (!caipNetwork) {
        throw new Error(`openSend: caipNetwork with chainId ${args.chainId} not found`);
      }
      await this.switchNetwork(caipNetwork, { throwOnFailure: true });
    }
    try {
      const symbol = TokenUtil.getTokenSymbolByAddress(args.assetAddress);
      if (symbol) {
        await ApiController.fetchTokenImages([symbol]);
      }
    } catch {
    }
    await ModalController.open({
      view: "WalletSend",
      data: { send: args }
    });
    return new Promise((resolve, reject) => {
      const unsubscribe = SendController.subscribeKey("hash", (hash) => {
        if (hash) {
          cleanup();
          resolve({ hash });
        }
      });
      const unsubscribeModal = ModalController.subscribe((modal) => {
        if (!modal.open) {
          cleanup();
          reject(new Error("Modal closed"));
        }
      });
      const cleanup = this.createCleanupHandler([unsubscribe, unsubscribeModal]);
    });
  }
  toModalOptions() {
    function isSwap(options) {
      return (options == null ? void 0 : options.view) === "Swap";
    }
    function isSend(options) {
      return (options == null ? void 0 : options.view) === "WalletSend";
    }
    return {
      isSwap,
      isSend
    };
  }
  async checkAllowedOrigins() {
    try {
      const allowedOrigins = await ApiController.fetchAllowedOrigins();
      if (!CoreHelperUtil.isClient()) {
        return;
      }
      const currentOrigin = window.location.origin;
      const isOriginAllowed = WcHelpersUtil.isOriginAllowed(currentOrigin, allowedOrigins, ConstantsUtil$2.DEFAULT_ALLOWED_ANCESTORS);
      if (!isOriginAllowed) {
        AlertController.open(ErrorUtil.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      }
    } catch (error) {
      if (!(error instanceof Error)) {
        return;
      }
      switch (error.message) {
        case "RATE_LIMITED":
          AlertController.open(ErrorUtil.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
          break;
        case "SERVER_ERROR": {
          const originalError = error.cause instanceof Error ? error.cause : error;
          AlertController.open({
            displayMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
            debugMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(originalError.message)
          }, "error");
          break;
        }
      }
    }
  }
  createCleanupHandler(unsubscribeFunctions) {
    return () => {
      unsubscribeFunctions.forEach((unsubscribe) => {
        try {
          unsubscribe();
        } catch {
        }
      });
    };
  }
  sendInitializeEvent(options) {
    var _a;
    const { ...optionsCopy } = options;
    delete optionsCopy.adapters;
    delete optionsCopy.universalProvider;
    EventsController.sendEvent({
      type: "track",
      event: "INITIALIZE",
      properties: {
        ...optionsCopy,
        networks: options.networks.map((n3) => n3.id),
        siweConfig: {
          options: ((_a = options.siweConfig) == null ? void 0 : _a.options) || {}
        }
      }
    });
  }
  // -- Controllers initialization ---------------------------------------------------
  initControllers(options) {
    this.initializeOptionsController(options);
    this.initializeChainController(options);
    this.initializeThemeController(options);
    this.initializeConnectionController(options);
    this.initializeConnectorController();
  }
  initAdapterController() {
    AdapterController.initialize(this.chainAdapters);
  }
  initializeThemeController(options) {
    if (options.themeMode) {
      ThemeController.setThemeMode(options.themeMode);
    }
    if (options.themeVariables) {
      ThemeController.setThemeVariables(options.themeVariables);
    }
  }
  initializeChainController(options) {
    if (!this.connectionControllerClient) {
      throw new Error("ConnectionControllerClient must be set");
    }
    ChainController.initialize(options.adapters ?? [], this.caipNetworks, {
      connectionControllerClient: this.connectionControllerClient
    });
    const network = this.getDefaultNetwork();
    if (network) {
      ChainController.setActiveCaipNetwork(network);
    }
  }
  initializeConnectionController(options) {
    ConnectionController.initialize(options.adapters ?? []);
    ConnectionController.setWcBasic(options.basic ?? false);
  }
  initializeConnectorController() {
    ConnectorController.initialize(this.chainNamespaces);
  }
  initializeProjectSettings(options) {
    OptionsController.setProjectId(options.projectId);
    OptionsController.setSdkVersion(options.sdkVersion);
  }
  initializeOptionsController(options) {
    var _a;
    OptionsController.setDebug(options.debug !== false);
    OptionsController.setEnableWalletGuide(options.enableWalletGuide !== false);
    OptionsController.setEnableWallets(options.enableWallets !== false);
    OptionsController.setEIP6963Enabled(options.enableEIP6963 !== false);
    OptionsController.setEnableNetworkSwitch(options.enableNetworkSwitch !== false);
    OptionsController.setEnableReconnect(options.enableReconnect !== false);
    OptionsController.setEnableMobileFullScreen(options.enableMobileFullScreen === true);
    OptionsController.setCoinbasePreference(options.coinbasePreference);
    OptionsController.setEnableAuthLogger(options.enableAuthLogger !== false);
    OptionsController.setCustomRpcUrls(options.customRpcUrls);
    OptionsController.setEnableEmbedded(options.enableEmbedded);
    OptionsController.setAllWallets(options.allWallets);
    OptionsController.setIncludeWalletIds(options.includeWalletIds);
    OptionsController.setExcludeWalletIds(options.excludeWalletIds);
    OptionsController.setFeaturedWalletIds(options.featuredWalletIds);
    OptionsController.setTokens(options.tokens);
    OptionsController.setTermsConditionsUrl(options.termsConditionsUrl);
    OptionsController.setPrivacyPolicyUrl(options.privacyPolicyUrl);
    OptionsController.setCustomWallets(options.customWallets);
    OptionsController.setFeatures(options.features);
    OptionsController.setAllowUnsupportedChain(options.allowUnsupportedChain);
    OptionsController.setUniversalProviderConfigOverride(options.universalProviderConfigOverride);
    OptionsController.setPreferUniversalLinks(options.experimental_preferUniversalLinks);
    OptionsController.setDefaultAccountTypes(options.defaultAccountTypes);
    const defaultMetaData = this.getDefaultMetaData();
    if (!options.metadata && defaultMetaData) {
      options.metadata = defaultMetaData;
    }
    OptionsController.setMetadata(options.metadata);
    OptionsController.setDisableAppend(options.disableAppend);
    OptionsController.setEnableEmbedded(options.enableEmbedded);
    OptionsController.setSIWX(options.siwx);
    this.features = OptionsController.state.features ?? {};
    if (!options.projectId) {
      AlertController.open(ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
      return;
    }
    const evmAdapter = (_a = options.adapters) == null ? void 0 : _a.find((adapter) => adapter.namespace === ConstantsUtil$2.CHAIN.EVM);
    if (evmAdapter) {
      if (options.siweConfig) {
        if (options.siwx) {
          throw new Error("Cannot set both `siweConfig` and `siwx` options");
        }
        OptionsController.setSIWX(options.siweConfig.mapToSIWX());
      }
    }
  }
  getDefaultMetaData() {
    var _a, _b, _c, _d2;
    if (CoreHelperUtil.isClient()) {
      return {
        name: ((_b = (_a = document.getElementsByTagName("title")) == null ? void 0 : _a[0]) == null ? void 0 : _b.textContent) || "",
        description: ((_c = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c.content) || "",
        url: window.location.origin,
        icons: [((_d2 = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d2.href) || ""]
      };
    }
    return null;
  }
  // -- Network Initialization ---------------------------------------------------
  setUnsupportedNetwork(chainId) {
    const namespace = this.getActiveChainNamespace();
    if (namespace) {
      const unsupportedNetwork = CaipNetworksUtil.getUnsupportedNetwork(`${namespace}:${chainId}`);
      ChainController.setActiveCaipNetwork(unsupportedNetwork);
    }
  }
  getDefaultNetwork() {
    return CaipNetworksUtil.getCaipNetworkFromStorage(this.defaultCaipNetwork);
  }
  extendCaipNetwork(network, options) {
    const extendedNetwork = CaipNetworksUtil.extendCaipNetwork(network, {
      customNetworkImageUrls: options.chainImages,
      projectId: options.projectId
    });
    return extendedNetwork;
  }
  extendCaipNetworks(options) {
    const extendedNetworks = CaipNetworksUtil.extendCaipNetworks(options.networks, {
      customNetworkImageUrls: options.chainImages,
      customRpcUrls: options.customRpcUrls,
      projectId: options.projectId
    });
    return extendedNetworks;
  }
  extendDefaultCaipNetwork(options) {
    const defaultNetwork = options.networks.find((n3) => {
      var _a;
      return n3.id === ((_a = options.defaultNetwork) == null ? void 0 : _a.id);
    });
    const extendedNetwork = defaultNetwork ? CaipNetworksUtil.extendCaipNetwork(defaultNetwork, {
      customNetworkImageUrls: options.chainImages,
      customRpcUrls: options.customRpcUrls,
      projectId: options.projectId
    }) : void 0;
    return extendedNetwork;
  }
  /**
   * Disconnects a connector with the given namespace and id. If the connector id is not provided, disconnects the adapter (namespace).
   * @param namespace ChainNamespace
   * @param id string
   * @returns
   */
  async disconnectConnector(namespace, id) {
    var _a, _b;
    try {
      this.setLoading(true, namespace);
      let disconnectResult = {
        connections: []
      };
      const adapter = this.getAdapter(namespace);
      const caipAddress = (_b = (_a = ChainController.state.chains.get(namespace)) == null ? void 0 : _a.accountState) == null ? void 0 : _b.caipAddress;
      if ((caipAddress || !OptionsController.state.enableReconnect) && (adapter == null ? void 0 : adapter.disconnect)) {
        disconnectResult = await adapter.disconnect({ id });
      }
      this.setLoading(false, namespace);
      return disconnectResult;
    } catch (error) {
      this.setLoading(false, namespace);
      throw new Error(`Failed to disconnect chains: ${error.message}`);
    }
  }
  // -- Client Initialization ---------------------------------------------------
  createClients() {
    this.connectionControllerClient = {
      connectWalletConnect: async () => {
        var _a;
        const activeChain = ChainController.state.activeChain;
        const adapter = this.getAdapter(activeChain);
        const chainId = (_a = this.getCaipNetwork(activeChain)) == null ? void 0 : _a.id;
        const connections = ConnectionController.getConnections(activeChain);
        const isMultiWallet = this.remoteFeatures.multiWallet;
        const hasConnections = connections.length > 0;
        if (!adapter) {
          throw new Error("Adapter not found");
        }
        const result = await adapter.connectWalletConnect(chainId);
        const shouldClose = !hasConnections || !isMultiWallet;
        if (shouldClose) {
          this.close();
        }
        this.setClientId((result == null ? void 0 : result.clientId) || null);
        StorageUtil.setConnectedNamespaces([...ChainController.state.chains.keys()]);
        await this.syncWalletConnectAccount();
        await SIWXUtil.initializeIfEnabled();
      },
      connectExternal: async (params) => {
        const connectResult = await this.onConnectExternal(params);
        await this.connectInactiveNamespaces(params, connectResult);
        return connectResult ? { address: connectResult.address } : void 0;
      },
      reconnectExternal: async ({ id, info, type, provider }) => {
        var _a;
        const namespace = ChainController.state.activeChain;
        const adapter = this.getAdapter(namespace);
        if (!namespace) {
          throw new Error("reconnectExternal: namespace not found");
        }
        if (!adapter) {
          throw new Error("reconnectExternal: adapter not found");
        }
        if (adapter == null ? void 0 : adapter.reconnect) {
          await (adapter == null ? void 0 : adapter.reconnect({ id, info, type, provider, chainId: (_a = this.getCaipNetwork()) == null ? void 0 : _a.id }));
          StorageUtil.addConnectedNamespace(namespace);
          this.syncConnectedWalletInfo(namespace);
        }
      },
      disconnectConnector: async (params) => {
        await this.disconnectConnector(params.namespace, params.id);
      },
      disconnect: async (params) => {
        var _a;
        const { id: connectorIdParam, chainNamespace, initialDisconnect } = params || {};
        const namespace = chainNamespace || ChainController.state.activeChain;
        const namespaceConnectorId = ConnectorController.getConnectorId(namespace);
        const isAuth = connectorIdParam === ConstantsUtil$2.CONNECTOR_ID.AUTH || namespaceConnectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH;
        const isWalletConnect = connectorIdParam === ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT || namespaceConnectorId === ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT;
        try {
          const namespaces = Array.from(ChainController.state.chains.keys());
          let namespacesToDisconnect = chainNamespace ? [chainNamespace] : namespaces;
          if (isWalletConnect || isAuth) {
            namespacesToDisconnect = namespaces;
          }
          const disconnectPromises = namespacesToDisconnect.map(async (ns) => {
            const currentConnectorId = ConnectorController.getConnectorId(ns);
            const connectorIdToDisconnect = connectorIdParam || currentConnectorId;
            const disconnectData = await this.disconnectConnector(ns, connectorIdToDisconnect);
            if (disconnectData) {
              if (isAuth) {
                StorageUtil.deleteConnectedSocialProvider();
              }
              disconnectData.connections.forEach((connection) => {
                StorageUtil.addDisconnectedConnectorId(connection.connectorId, ns);
              });
            }
            if (initialDisconnect) {
              this.onDisconnectNamespace({ chainNamespace: ns, closeModal: false });
            }
          });
          const disconnectResults = await Promise.allSettled(disconnectPromises);
          SendController.resetSend();
          ConnectionController.resetWcConnection();
          if ((_a = SIWXUtil.getSIWX()) == null ? void 0 : _a.signOutOnDisconnect) {
            await SIWXUtil.clearSessions();
          }
          ConnectorController.setFilterByNamespace(void 0);
          ConnectionController.syncStorageConnections();
          const failures = disconnectResults.filter((result) => result.status === "rejected");
          if (failures.length > 0) {
            throw new Error(failures.map((f2) => f2.reason.message).join(", "));
          }
          EventsController.sendEvent({
            type: "track",
            event: "DISCONNECT_SUCCESS",
            properties: {
              namespace: chainNamespace || "all"
            }
          });
        } catch (error) {
          throw new Error(`Failed to disconnect chains: ${error.message}`);
        }
      },
      checkInstalled: (ids) => {
        if (!ids) {
          return Boolean(window.ethereum);
        }
        return ids.some((id) => {
          var _a;
          return Boolean((_a = window.ethereum) == null ? void 0 : _a[String(id)]);
        });
      },
      signMessage: async (message) => {
        const namespace = ChainController.state.activeChain;
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!namespace) {
          throw new Error("signMessage: namespace not found");
        }
        if (!adapter) {
          throw new Error("signMessage: adapter not found");
        }
        const address = this.getAddress(namespace);
        if (!address) {
          throw new Error("signMessage: address not found");
        }
        const result = await (adapter == null ? void 0 : adapter.signMessage({
          message,
          address,
          provider: ProviderController.getProvider(namespace)
        }));
        return (result == null ? void 0 : result.signature) || "";
      },
      sendTransaction: async (args) => {
        const namespace = args.chainNamespace;
        if (!namespace) {
          throw new Error("sendTransaction: namespace not found");
        }
        if (ConstantsUtil$1.SEND_SUPPORTED_NAMESPACES.includes(namespace)) {
          const adapter = this.getAdapter(namespace);
          if (!adapter) {
            throw new Error("sendTransaction: adapter not found");
          }
          const provider = ProviderController.getProvider(namespace);
          const result = await (adapter == null ? void 0 : adapter.sendTransaction({
            ...args,
            caipNetwork: this.getCaipNetwork(),
            provider
          }));
          return (result == null ? void 0 : result.hash) || "";
        }
        return "";
      },
      estimateGas: async (args) => {
        const namespace = args.chainNamespace;
        if (namespace === ConstantsUtil$2.CHAIN.EVM) {
          const adapter = this.getAdapter(namespace);
          if (!adapter) {
            throw new Error("estimateGas: adapter is required but got undefined");
          }
          const provider = ProviderController.getProvider(namespace);
          const caipNetwork = this.getCaipNetwork();
          if (!caipNetwork) {
            throw new Error("estimateGas: caipNetwork is required but got undefined");
          }
          const result = await (adapter == null ? void 0 : adapter.estimateGas({ ...args, provider, caipNetwork }));
          return (result == null ? void 0 : result.gas) || 0n;
        }
        return 0n;
      },
      getEnsAvatar: async () => {
        var _a;
        const namespace = ChainController.state.activeChain;
        if (!namespace) {
          throw new Error("getEnsAvatar: namespace is required but got undefined");
        }
        const address = this.getAddress(namespace);
        if (!address) {
          throw new Error("getEnsAvatar: address not found");
        }
        await this.syncIdentity({
          address,
          chainId: Number((_a = this.getCaipNetwork()) == null ? void 0 : _a.id),
          chainNamespace: namespace
        });
        const accountData = ChainController.getAccountData();
        return (accountData == null ? void 0 : accountData.profileImage) || false;
      },
      getEnsAddress: async (name) => await WcHelpersUtil.resolveReownName(name),
      writeContract: async (args) => {
        const namespace = ChainController.state.activeChain;
        const adapter = this.getAdapter(namespace);
        if (!namespace) {
          throw new Error("writeContract: namespace is required but got undefined");
        }
        if (!adapter) {
          throw new Error("writeContract: adapter is required but got undefined");
        }
        const caipNetwork = this.getCaipNetwork();
        const caipAddress = this.getCaipAddress();
        const provider = ProviderController.getProvider(namespace);
        if (!caipNetwork || !caipAddress) {
          throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
        }
        const result = await (adapter == null ? void 0 : adapter.writeContract({ ...args, caipNetwork, provider, caipAddress }));
        return result == null ? void 0 : result.hash;
      },
      writeSolanaTransaction: async (args) => {
        const namespace = ChainController.state.activeChain;
        const adapter = this.getAdapter(namespace);
        if (!namespace) {
          throw new Error("writeContract: namespace is required but got undefined");
        }
        if (!adapter) {
          throw new Error("writeContract: adapter is required but got undefined");
        }
        const caipNetwork = this.getCaipNetwork();
        const caipAddress = this.getCaipAddress();
        const provider = ProviderController.getProvider(namespace);
        if (!caipNetwork || !caipAddress) {
          throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
        }
        const result = await (adapter == null ? void 0 : adapter.writeSolanaTransaction({
          ...args,
          caipNetwork,
          provider,
          caipAddress
        }));
        return result == null ? void 0 : result.hash;
      },
      parseUnits: (value, decimals) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("parseUnits: adapter is required but got undefined");
        }
        return (adapter == null ? void 0 : adapter.parseUnits({ value, decimals })) ?? 0n;
      },
      formatUnits: (value, decimals) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("formatUnits: adapter is required but got undefined");
        }
        return (adapter == null ? void 0 : adapter.formatUnits({ value, decimals })) ?? "0";
      },
      getCapabilities: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("getCapabilities: adapter is required but got undefined");
        }
        return await (adapter == null ? void 0 : adapter.getCapabilities(params));
      },
      grantPermissions: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("grantPermissions: adapter is required but got undefined");
        }
        return await (adapter == null ? void 0 : adapter.grantPermissions(params));
      },
      revokePermissions: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("revokePermissions: adapter is required but got undefined");
        }
        if (adapter == null ? void 0 : adapter.revokePermissions) {
          return await adapter.revokePermissions(params);
        }
        return "0x";
      },
      walletGetAssets: async (params) => {
        const adapter = this.getAdapter(ChainController.state.activeChain);
        if (!adapter) {
          throw new Error("walletGetAssets: adapter is required but got undefined");
        }
        return await (adapter == null ? void 0 : adapter.walletGetAssets(params)) ?? {};
      },
      updateBalance: (namespace) => {
        const address = this.getAddress(namespace);
        const caipNetwork = this.getCaipNetwork(namespace);
        if (!caipNetwork || !address) {
          return;
        }
        this.updateNativeBalance(address, caipNetwork == null ? void 0 : caipNetwork.id, namespace);
      }
    };
    ConnectionController.setClient(this.connectionControllerClient);
  }
  async onConnectExternal(params) {
    var _a, _b, _c, _d2, _e, _f, _g, _h;
    const activeChain = ChainController.state.activeChain;
    const namespace = params.chain || activeChain;
    const adapter = this.getAdapter(namespace);
    let shouldUpdateNetwork = true;
    if (params.type === ConstantsUtil.CONNECTOR_TYPE_AUTH) {
      const authNamespaces = ConstantsUtil$2.AUTH_CONNECTOR_SUPPORTED_CHAINS;
      const hasConnectedAuthNamespace = authNamespaces.some((namespace2) => ConnectorController.getConnectorId(namespace2) === ConstantsUtil$2.CONNECTOR_ID.AUTH);
      if (hasConnectedAuthNamespace && params.chain !== activeChain) {
        shouldUpdateNetwork = false;
      }
    }
    if (params.chain && params.chain !== activeChain && !params.caipNetwork) {
      const toConnectNetwork = this.getCaipNetworks().find((network) => network.chainNamespace === params.chain);
      if (toConnectNetwork && shouldUpdateNetwork) {
        this.setCaipNetwork(toConnectNetwork);
      }
    }
    if (!namespace) {
      throw new Error("connectExternal: namespace not found");
    }
    if (!adapter) {
      throw new Error("connectExternal: adapter not found");
    }
    const fallbackCaipNetwork = this.getCaipNetwork(namespace);
    const caipNetworkToUse = params.caipNetwork || fallbackCaipNetwork;
    const res = await adapter.connect({
      id: params.id,
      address: params.address,
      info: params.info,
      type: params.type,
      provider: params.provider,
      socialUri: params.socialUri,
      chainId: ((_a = params.caipNetwork) == null ? void 0 : _a.id) || (fallbackCaipNetwork == null ? void 0 : fallbackCaipNetwork.id),
      rpcUrl: ((_e = (_d2 = (_c = (_b = params.caipNetwork) == null ? void 0 : _b.rpcUrls) == null ? void 0 : _c.default) == null ? void 0 : _d2.http) == null ? void 0 : _e[0]) || ((_h = (_g = (_f = fallbackCaipNetwork == null ? void 0 : fallbackCaipNetwork.rpcUrls) == null ? void 0 : _f.default) == null ? void 0 : _g.http) == null ? void 0 : _h[0])
    });
    if (!res) {
      return void 0;
    }
    StorageUtil.addConnectedNamespace(namespace);
    this.syncProvider({ ...res, chainNamespace: namespace });
    this.setStatus("connected", namespace);
    this.syncConnectedWalletInfo(namespace);
    StorageUtil.removeDisconnectedConnectorId(params.id, namespace);
    return { address: res.address, connectedCaipNetwork: caipNetworkToUse };
  }
  async connectInactiveNamespaces(params, connectResult) {
    var _a;
    const isConnectingToAuth = params.type === ConstantsUtil.CONNECTOR_TYPE_AUTH;
    const otherAuthNamespaces = HelpersUtil.getOtherAuthNamespaces((_a = connectResult == null ? void 0 : connectResult.connectedCaipNetwork) == null ? void 0 : _a.chainNamespace);
    const activeCaipNetwork = ChainController.state.activeCaipNetwork;
    const activeAdapter = this.getAdapter(activeCaipNetwork == null ? void 0 : activeCaipNetwork.chainNamespace);
    if (isConnectingToAuth) {
      await Promise.all(otherAuthNamespaces.map(async (ns) => {
        var _a2, _b, _c;
        try {
          const provider = ProviderController.getProvider(ns);
          const caipNetworkToUse = this.getCaipNetwork(ns);
          const adapter = this.getAdapter(ns);
          const res = await (adapter == null ? void 0 : adapter.connect({
            ...params,
            provider,
            socialUri: void 0,
            chainId: caipNetworkToUse == null ? void 0 : caipNetworkToUse.id,
            rpcUrl: (_c = (_b = (_a2 = caipNetworkToUse == null ? void 0 : caipNetworkToUse.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0]
          }));
          if (res) {
            StorageUtil.addConnectedNamespace(ns);
            StorageUtil.removeDisconnectedConnectorId(params.id, ns);
            this.setStatus("connected", ns);
            this.syncConnectedWalletInfo(ns);
          }
        } catch (error) {
          AlertController.warn(ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(ns, error instanceof Error ? error.message : void 0), ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      }));
      if (activeCaipNetwork) {
        await (activeAdapter == null ? void 0 : activeAdapter.switchNetwork({
          caipNetwork: activeCaipNetwork
        }));
      }
    }
  }
  getApprovedCaipNetworksData() {
    var _a, _b, _c, _d2, _e;
    const providerType = ProviderController.getProviderId(ChainController.state.activeChain);
    if (providerType === ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT) {
      const namespaces = (_b = (_a = this.universalProvider) == null ? void 0 : _a.session) == null ? void 0 : _b.namespaces;
      return {
        /*
         * MetaMask Wallet only returns 1 namespace in the session object. This makes it imposible
         * to switch to other networks. Setting supportsAllNetworks to true for MetaMask Wallet
         * will make it possible to switch to other networks.
         */
        supportsAllNetworks: ((_e = (_d2 = (_c = this.universalProvider) == null ? void 0 : _c.session) == null ? void 0 : _d2.peer) == null ? void 0 : _e.metadata.name) === "MetaMask Wallet",
        approvedCaipNetworkIds: this.getChainsFromNamespaces(namespaces)
      };
    }
    return { supportsAllNetworks: true, approvedCaipNetworkIds: [] };
  }
  async switchCaipNetwork(caipNetwork) {
    const networkNamespace = caipNetwork.chainNamespace;
    const namespaceAddress = this.getAddressByChainNamespace(caipNetwork.chainNamespace);
    if (namespaceAddress) {
      const providerType = ProviderController.getProviderId(networkNamespace);
      if (caipNetwork.chainNamespace === ChainController.state.activeChain) {
        const adapter = this.getAdapter(networkNamespace);
        await (adapter == null ? void 0 : adapter.switchNetwork({ caipNetwork }));
      } else {
        this.setCaipNetwork(caipNetwork);
        if (providerType === ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT) {
          this.syncWalletConnectAccount();
        } else {
          const address = this.getAddressByChainNamespace(networkNamespace);
          if (address) {
            this.syncAccount({
              address,
              chainId: caipNetwork.id,
              chainNamespace: networkNamespace
            });
          }
        }
      }
    } else {
      this.setCaipNetwork(caipNetwork);
    }
  }
  getChainsFromNamespaces(namespaces = {}) {
    return Object.values(namespaces).flatMap((namespace) => {
      const chains = namespace.chains || [];
      const accountsChains = namespace.accounts.map((account) => {
        const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(account);
        return `${chainNamespace}:${chainId}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...chains, ...accountsChains]));
    });
  }
  // -- Adapter Initialization ---------------------------------------------------
  createAdapters(blueprints) {
    this.createClients();
    return this.chainNamespaces.reduce((adapters, namespace) => {
      var _a, _b;
      const blueprint = blueprints == null ? void 0 : blueprints.find((b2) => b2.namespace === namespace);
      if (blueprint) {
        blueprint.construct({
          namespace,
          projectId: (_a = this.options) == null ? void 0 : _a.projectId,
          networks: (_b = this.caipNetworks) == null ? void 0 : _b.filter(({ chainNamespace }) => chainNamespace === namespace)
        });
        adapters[namespace] = blueprint;
      } else {
        adapters[namespace] = new UniversalAdapter({
          namespace,
          networks: this.getCaipNetworks()
        });
      }
      return adapters;
    }, {});
  }
  async initChainAdapter(namespace) {
    this.onConnectors(namespace);
    this.listenAdapter(namespace);
    const adapter = this.getAdapter(namespace);
    if (!adapter) {
      throw new Error("adapter not found");
    }
    await adapter.syncConnectors();
    await this.createUniversalProviderForAdapter(namespace);
  }
  async initChainAdapters() {
    await Promise.all(this.chainNamespaces.map(async (namespace) => {
      await this.initChainAdapter(namespace);
    }));
    this.initAdapterController();
  }
  onConnectors(chainNamespace) {
    const adapter = this.getAdapter(chainNamespace);
    adapter == null ? void 0 : adapter.on("connectors", this.setConnectors.bind(this));
  }
  listenAdapter(chainNamespace) {
    const adapter = this.getAdapter(chainNamespace);
    if (!adapter) {
      return;
    }
    const connectionStatus = StorageUtil.getConnectionStatus();
    if (OptionsController.state.enableReconnect === false) {
      this.setStatus("disconnected", chainNamespace);
    } else if (connectionStatus === "connected") {
      this.setStatus("connecting", chainNamespace);
    } else if (connectionStatus === "disconnected") {
      StorageUtil.clearAddressCache();
      this.setStatus(connectionStatus, chainNamespace);
    } else {
      this.setStatus(connectionStatus, chainNamespace);
    }
    adapter.on("switchNetwork", ({ address, chainId }) => {
      var _a, _b;
      const caipNetwork = this.getCaipNetworks().find((n3) => n3.id.toString() === chainId.toString() || n3.caipNetworkId.toString() === chainId.toString());
      const isSameNamespace = ChainController.state.activeChain === chainNamespace;
      const accountAddress = (_b = (_a = ChainController.state.chains.get(chainNamespace)) == null ? void 0 : _a.accountState) == null ? void 0 : _b.address;
      if (caipNetwork) {
        const account = isSameNamespace && address ? address : accountAddress;
        if (account) {
          this.syncAccount({ address: account, chainId: caipNetwork.id, chainNamespace });
        }
      } else {
        this.setUnsupportedNetwork(chainId);
      }
    });
    adapter.on("disconnect", () => {
      const isMultiWallet = this.remoteFeatures.multiWallet;
      const allConnections = Array.from(ConnectionController.state.connections.values()).flat();
      this.onDisconnectNamespace({
        chainNamespace,
        closeModal: !isMultiWallet || allConnections.length === 0
      });
    });
    adapter.on("connections", (connections) => {
      this.setConnections(connections, chainNamespace);
    });
    adapter.on("pendingTransactions", () => {
      const address = this.getAddress(chainNamespace);
      const activeCaipNetwork = ChainController.state.activeCaipNetwork;
      if (!address || !(activeCaipNetwork == null ? void 0 : activeCaipNetwork.id)) {
        return;
      }
      this.updateNativeBalance(address, activeCaipNetwork.id, activeCaipNetwork.chainNamespace);
    });
    adapter.on("accountChanged", ({ address, chainId, connector }) => {
      var _a, _b;
      this.handlePreviousConnectorConnection(connector);
      const isActiveChain = ChainController.state.activeChain === chainNamespace;
      if (connector == null ? void 0 : connector.provider) {
        this.syncProvider({
          id: connector.id,
          type: connector.type,
          provider: connector == null ? void 0 : connector.provider,
          chainNamespace
        });
        this.syncConnectedWalletInfo(chainNamespace);
      }
      const namespaceNetworkId = (_b = (_a = ChainController.getNetworkData(chainNamespace)) == null ? void 0 : _a.caipNetwork) == null ? void 0 : _b.id;
      const syncAccountChainId = chainId || namespaceNetworkId;
      if (isActiveChain && syncAccountChainId) {
        this.syncAccount({
          address,
          chainId: syncAccountChainId,
          chainNamespace
        });
      } else if (!isActiveChain && syncAccountChainId) {
        this.syncAccountInfo(address, syncAccountChainId, chainNamespace);
        this.syncBalance({ address, chainId: syncAccountChainId, chainNamespace });
      } else {
        this.syncAccountInfo(address, chainId, chainNamespace);
      }
      StorageUtil.addConnectedNamespace(chainNamespace);
    });
  }
  /**
   * Checks the incoming connector and handles the previous connection in the connector's namespace, and if necessary (i.e multi-wallet is disabled) disconnects the previous connector
   * @param connector
   */
  async handlePreviousConnectorConnection(connector) {
    var _a;
    const namespace = connector == null ? void 0 : connector.chain;
    const newConnectorId = connector == null ? void 0 : connector.id;
    const currentConnectorId = ConnectorController.getConnectorId(namespace);
    const isMultiWalletEnabled = (_a = OptionsController.state.remoteFeatures) == null ? void 0 : _a.multiWallet;
    const hasNewConnectorConnected = currentConnectorId !== newConnectorId;
    const shouldDisconnectPreviousConnector = namespace && newConnectorId && currentConnectorId && hasNewConnectorConnected && !isMultiWalletEnabled;
    try {
      if (shouldDisconnectPreviousConnector) {
        await ConnectionController.disconnect({ id: currentConnectorId, namespace });
      }
    } catch (error) {
      console.warn("Error disconnecting previous connector", error);
    }
  }
  async createUniversalProviderForAdapter(chainNamespace) {
    var _a, _b, _c;
    await this.getUniversalProvider();
    if (this.universalProvider) {
      await ((_c = (_b = (_a = this.chainAdapters) == null ? void 0 : _a[chainNamespace]) == null ? void 0 : _b.setUniversalProvider) == null ? void 0 : _c.call(_b, this.universalProvider));
    }
  }
  // -- Connection Sync ---------------------------------------------------
  async syncExistingConnection() {
    await Promise.allSettled(this.chainNamespaces.map((namespace) => this.syncNamespaceConnection(namespace)));
  }
  async unSyncExistingConnection() {
    try {
      await Promise.allSettled(this.chainNamespaces.map((namespace) => ConnectionController.disconnect({ namespace, initialDisconnect: true })));
    } catch (error) {
      console.error("Error disconnecting existing connections:", error);
    }
  }
  async reconnectWalletConnect() {
    await this.syncWalletConnectAccount();
    const address = this.getAddress();
    if (!this.getCaipAddress()) {
      StorageUtil.deleteRecentWallet();
    }
    const recentWallet = StorageUtil.getRecentWallet();
    EventsController.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      address,
      properties: {
        method: CoreHelperUtil.isMobile() ? "mobile" : "qrcode",
        name: (recentWallet == null ? void 0 : recentWallet.name) || "Unknown",
        reconnect: true,
        view: RouterController.state.view,
        walletRank: recentWallet == null ? void 0 : recentWallet.order
      }
    });
  }
  async syncNamespaceConnection(namespace) {
    try {
      if (namespace === ConstantsUtil$2.CHAIN.EVM && CoreHelperUtil.isSafeApp()) {
        ConnectorController.setConnectorId(ConstantsUtil$2.CONNECTOR_ID.SAFE, namespace);
      }
      const connectorId = ConnectorController.getConnectorId(namespace);
      this.setStatus("connecting", namespace);
      switch (connectorId) {
        case ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT:
          await this.reconnectWalletConnect();
          break;
        case ConstantsUtil$2.CONNECTOR_ID.AUTH:
          break;
        default:
          await this.syncAdapterConnection(namespace);
      }
    } catch (err) {
      console.warn("AppKit couldn't sync existing connection", err);
      this.setStatus("disconnected", namespace);
    }
  }
  onDisconnectNamespace(options) {
    const { chainNamespace, closeModal } = options || {};
    ChainController.resetAccount(chainNamespace);
    ChainController.resetNetwork(chainNamespace);
    StorageUtil.removeConnectedNamespace(chainNamespace);
    const namespaces = Array.from(ChainController.state.chains.keys());
    const namespacesToDisconnect = chainNamespace ? [chainNamespace] : namespaces;
    namespacesToDisconnect.forEach((ns) => StorageUtil.addDisconnectedConnectorId(ConnectorController.getConnectorId(ns) || "", ns));
    ConnectorController.removeConnectorId(chainNamespace);
    ProviderController.resetChain(chainNamespace);
    this.setUser(null, chainNamespace);
    this.setStatus("disconnected", chainNamespace);
    this.setConnectedWalletInfo(null, chainNamespace);
    if (closeModal !== false) {
      ModalController.close();
    }
  }
  async syncAdapterConnections() {
    await Promise.allSettled(this.chainNamespaces.map((namespace) => {
      const adapter = this.getAdapter(namespace);
      const caipAddress = this.getCaipAddress(namespace);
      const caipNetwork = this.getCaipNetwork(namespace);
      return adapter == null ? void 0 : adapter.syncConnections({
        connectToFirstConnector: !caipAddress,
        caipNetwork
      });
    }));
  }
  async syncAdapterConnection(namespace) {
    var _a, _b, _c, _d2, _e;
    const adapter = this.getAdapter(namespace);
    const caipNetwork = this.getCaipNetwork(namespace);
    const connectorId = ConnectorController.getConnectorId(namespace);
    const connectors = ConnectorController.getConnectors(namespace);
    const connector = connectors.find((c2) => c2.id === connectorId);
    try {
      if (!adapter || !connector) {
        throw new Error(`Adapter or connector not found for namespace ${namespace}`);
      }
      if (!(caipNetwork == null ? void 0 : caipNetwork.id)) {
        throw new Error("CaipNetwork not found");
      }
      const connection = await (adapter == null ? void 0 : adapter.syncConnection({
        namespace,
        id: connector.id,
        chainId: caipNetwork.id,
        rpcUrl: (_c = (_b = (_a = caipNetwork == null ? void 0 : caipNetwork.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0]
      }));
      if (connection) {
        this.syncProvider({ ...connection, chainNamespace: namespace });
        await this.syncAccount({ ...connection, chainNamespace: namespace });
        this.setStatus("connected", namespace);
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          address: connection.address,
          properties: {
            method: "browser",
            name: ((_d2 = connector.info) == null ? void 0 : _d2.name) || connector.name || "Unknown",
            reconnect: true,
            view: RouterController.state.view,
            walletRank: (_e = connector == null ? void 0 : connector.explorerWallet) == null ? void 0 : _e.order
          }
        });
      } else {
        this.setStatus("disconnected", namespace);
      }
    } catch (e2) {
      this.onDisconnectNamespace({ chainNamespace: namespace, closeModal: false });
    }
  }
  async syncWalletConnectAccount() {
    var _a, _b;
    const sessionNamespaces = Object.keys(((_b = (_a = this.universalProvider) == null ? void 0 : _a.session) == null ? void 0 : _b.namespaces) || {});
    const syncTasks = this.chainNamespaces.map(async (chainNamespace) => {
      var _a2, _b2, _c, _d2, _e;
      const adapter = this.getAdapter(chainNamespace);
      if (!adapter) {
        return;
      }
      const namespaceAccounts = ((_d2 = (_c = (_b2 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces) == null ? void 0 : _c[chainNamespace]) == null ? void 0 : _d2.accounts) || [];
      const activeChainId = (_e = ChainController.state.activeCaipNetwork) == null ? void 0 : _e.id;
      const sessionAddress = namespaceAccounts.find((account) => {
        const { chainId } = ParseUtil.parseCaipAddress(account);
        return chainId === (activeChainId == null ? void 0 : activeChainId.toString());
      }) || namespaceAccounts[0];
      if (sessionAddress) {
        const caipAddress = ParseUtil.validateCaipAddress(sessionAddress);
        const { chainId, address } = ParseUtil.parseCaipAddress(caipAddress);
        ProviderController.setProviderId(chainNamespace, ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT);
        if (this.caipNetworks && ChainController.state.activeCaipNetwork && adapter.namespace !== ConstantsUtil$2.CHAIN.EVM) {
          const provider = adapter.getWalletConnectProvider({
            caipNetworks: this.getCaipNetworks(),
            provider: this.universalProvider,
            activeCaipNetwork: ChainController.state.activeCaipNetwork
          });
          ProviderController.setProvider(chainNamespace, provider);
        } else {
          ProviderController.setProvider(chainNamespace, this.universalProvider);
        }
        ConnectorController.setConnectorId(ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT, chainNamespace);
        StorageUtil.addConnectedNamespace(chainNamespace);
        await this.syncAccount({
          address,
          chainId,
          chainNamespace
        });
      } else if (sessionNamespaces.includes(chainNamespace)) {
        this.setStatus("disconnected", chainNamespace);
      }
      const data = this.getApprovedCaipNetworksData();
      this.syncConnectedWalletInfo(chainNamespace);
      ChainController.setApprovedCaipNetworksData(chainNamespace, {
        approvedCaipNetworkIds: data.approvedCaipNetworkIds,
        supportsAllNetworks: data.supportsAllNetworks
      });
    });
    await Promise.all(syncTasks);
  }
  syncProvider({ type, provider, id, chainNamespace }) {
    ProviderController.setProviderId(chainNamespace, type);
    ProviderController.setProvider(chainNamespace, provider);
    ConnectorController.setConnectorId(id, chainNamespace);
  }
  async syncAccount(params) {
    var _a, _b;
    const isActiveNamespace = params.chainNamespace === ChainController.state.activeChain;
    const networkOfChain = ChainController.getCaipNetworkByNamespace(params.chainNamespace, params.chainId);
    const { address, chainId, chainNamespace } = params;
    const { chainId: activeChainId } = StorageUtil.getActiveNetworkProps();
    const chainIdToUse = (networkOfChain == null ? void 0 : networkOfChain.id) || activeChainId;
    const isUnsupportedNetwork = ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.name) === ConstantsUtil$2.UNSUPPORTED_NETWORK_NAME;
    const shouldSupportAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", chainNamespace);
    this.setStatus("connected", chainNamespace);
    if (isUnsupportedNetwork && !shouldSupportAllNetworks) {
      return;
    }
    if (chainIdToUse) {
      let caipNetwork = this.getCaipNetworks().find((n3) => n3.id.toString() === chainIdToUse.toString());
      let fallbackCaipNetwork = this.getCaipNetworks().find((n3) => n3.chainNamespace === chainNamespace);
      if (!shouldSupportAllNetworks && !caipNetwork && !fallbackCaipNetwork) {
        const caipNetworkIds = this.getApprovedCaipNetworkIds() || [];
        const caipNetworkId = caipNetworkIds.find((id) => {
          var _a2;
          return ((_a2 = ParseUtil.parseCaipNetworkId(id)) == null ? void 0 : _a2.chainId) === chainIdToUse.toString();
        });
        const fallBackCaipNetworkId = caipNetworkIds.find((id) => {
          var _a2;
          return ((_a2 = ParseUtil.parseCaipNetworkId(id)) == null ? void 0 : _a2.chainNamespace) === chainNamespace;
        });
        caipNetwork = this.getCaipNetworks().find((n3) => n3.caipNetworkId === caipNetworkId);
        fallbackCaipNetwork = this.getCaipNetworks().find((n3) => n3.caipNetworkId === fallBackCaipNetworkId || // This is a workaround used in Solana network to support deprecated caipNetworkId
        "deprecatedCaipNetworkId" in n3 && n3.deprecatedCaipNetworkId === fallBackCaipNetworkId);
      }
      const network = caipNetwork || fallbackCaipNetwork;
      if ((network == null ? void 0 : network.chainNamespace) === ChainController.state.activeChain) {
        if (OptionsController.state.enableNetworkSwitch && !OptionsController.state.allowUnsupportedChain && ((_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.name) === ConstantsUtil$2.UNSUPPORTED_NETWORK_NAME) {
          ChainController.showUnsupportedChainUI();
        } else {
          this.setCaipNetwork(network);
        }
      } else if (!isActiveNamespace) {
        if (networkOfChain) {
          this.setCaipNetworkOfNamespace(networkOfChain, chainNamespace);
        }
      }
      this.syncConnectedWalletInfo(chainNamespace);
      const currentAddress = this.getAddress(chainNamespace);
      if (!HelpersUtil.isLowerCaseMatch(address, currentAddress)) {
        this.syncAccountInfo(address, network == null ? void 0 : network.id, chainNamespace);
      }
      if (isActiveNamespace) {
        await this.syncBalance({ address, chainId: network == null ? void 0 : network.id, chainNamespace });
      } else {
        await this.syncBalance({ address, chainId: networkOfChain == null ? void 0 : networkOfChain.id, chainNamespace });
      }
      this.syncIdentity({
        address,
        chainId,
        chainNamespace
      });
    }
  }
  async syncAccountInfo(address, chainId, chainNamespace) {
    const caipAddress = this.getCaipAddress(chainNamespace);
    const newChainId = chainId || (caipAddress == null ? void 0 : caipAddress.split(":")[1]);
    if (!newChainId) {
      return;
    }
    const newCaipAddress = `${chainNamespace}:${newChainId}:${address}`;
    this.setCaipAddress(newCaipAddress, chainNamespace, true);
    await this.syncIdentity({
      address,
      chainId: newChainId,
      chainNamespace
    });
  }
  async syncReownName(address, chainNamespace) {
    try {
      const registeredWcNames = await this.getReownName(address);
      if (registeredWcNames[0]) {
        const wcName = registeredWcNames[0];
        this.setProfileName(wcName.name, chainNamespace);
      } else {
        this.setProfileName(null, chainNamespace);
      }
    } catch {
      this.setProfileName(null, chainNamespace);
    }
  }
  syncConnectedWalletInfo(chainNamespace) {
    var _a;
    const connectorId = ConnectorController.getConnectorId(chainNamespace);
    const providerType = ProviderController.getProviderId(chainNamespace);
    if (providerType === ConstantsUtil.CONNECTOR_TYPE_ANNOUNCED || providerType === ConstantsUtil.CONNECTOR_TYPE_INJECTED) {
      if (connectorId) {
        const connectors = this.getConnectors();
        const connector = connectors.find((c2) => {
          var _a2, _b;
          const isConnectorId = c2.id === connectorId;
          const isRdns = ((_a2 = c2.info) == null ? void 0 : _a2.rdns) === connectorId;
          const hasMultiChainConnector = (_b = c2.connectors) == null ? void 0 : _b.some((_c) => {
            var _a3;
            return _c.id === connectorId || ((_a3 = _c.info) == null ? void 0 : _a3.rdns) === connectorId;
          });
          return isConnectorId || isRdns || Boolean(hasMultiChainConnector);
        });
        if (connector) {
          const { info, name, imageUrl } = connector;
          const icon = imageUrl || this.getConnectorImage(connector);
          this.setConnectedWalletInfo({ name, icon, ...info }, chainNamespace);
        }
      }
    } else if (providerType === ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT) {
      const provider = ProviderController.getProvider(chainNamespace);
      if (provider == null ? void 0 : provider.session) {
        this.setConnectedWalletInfo({
          ...provider.session.peer.metadata,
          name: provider.session.peer.metadata.name,
          icon: (_a = provider.session.peer.metadata.icons) == null ? void 0 : _a[0]
        }, chainNamespace);
      }
    } else if (connectorId) {
      if (connectorId === ConstantsUtil$2.CONNECTOR_ID.COINBASE_SDK || connectorId === ConstantsUtil$2.CONNECTOR_ID.COINBASE) {
        const connector = this.getConnectors().find((c2) => c2.id === connectorId);
        const name = (connector == null ? void 0 : connector.name) || "Coinbase Wallet";
        const icon = (connector == null ? void 0 : connector.imageUrl) || this.getConnectorImage(connector);
        const info = connector == null ? void 0 : connector.info;
        this.setConnectedWalletInfo({
          ...info,
          name,
          icon
        }, chainNamespace);
      }
    }
  }
  async syncBalance(params) {
    const caipNetwork = NetworkUtil$1.getNetworksByNamespace(this.getCaipNetworks(), params.chainNamespace).find((n3) => {
      var _a;
      return n3.id.toString() === ((_a = params.chainId) == null ? void 0 : _a.toString());
    });
    if (!caipNetwork || !params.chainId) {
      return;
    }
    await this.updateNativeBalance(params.address, params.chainId, params.chainNamespace);
  }
  async ready() {
    await this.readyPromise;
  }
  async updateNativeBalance(address, chainId, namespace) {
    const adapter = this.getAdapter(namespace);
    const caipNetwork = ChainController.getCaipNetworkByNamespace(namespace, chainId);
    if (adapter) {
      const balance = await adapter.getBalance({
        address,
        chainId,
        caipNetwork,
        tokens: this.options.tokens
      });
      this.setBalance(balance.balance, balance.symbol, namespace);
      return balance;
    }
    return void 0;
  }
  // -- Universal Provider ---------------------------------------------------
  async initializeUniversalAdapter() {
    var _a, _b, _c, _d2, _e, _f, _g, _h, _i, _j;
    const logger = LoggerUtil.createLogger((error, ...args) => {
      if (error) {
        this.handleAlertError(error);
      }
      console.error(...args);
    });
    const universalProviderOptions = {
      projectId: (_a = this.options) == null ? void 0 : _a.projectId,
      metadata: {
        name: ((_b = this.options) == null ? void 0 : _b.metadata) ? (_c = this.options) == null ? void 0 : _c.metadata.name : "",
        description: ((_d2 = this.options) == null ? void 0 : _d2.metadata) ? (_e = this.options) == null ? void 0 : _e.metadata.description : "",
        url: ((_f = this.options) == null ? void 0 : _f.metadata) ? (_g = this.options) == null ? void 0 : _g.metadata.url : "",
        icons: ((_h = this.options) == null ? void 0 : _h.metadata) ? (_i = this.options) == null ? void 0 : _i.metadata.icons : [""]
      },
      logger
    };
    OptionsController.setManualWCControl(Boolean((_j = this.options) == null ? void 0 : _j.manualWCControl));
    this.universalProvider = this.options.universalProvider ?? await N$1.init(universalProviderOptions);
    const originalDisconnect = this.universalProvider.disconnect.bind(this.universalProvider);
    this.universalProvider.disconnect = async () => {
      try {
        return await originalDisconnect();
      } catch (error) {
        if (error instanceof Error) {
          const isAlreadyDisconnected = error.message.includes("Missing or invalid. Record was recently deleted");
          if (isAlreadyDisconnected) {
            return void 0;
          }
        }
        throw error;
      }
    };
    if (OptionsController.state.enableReconnect === false && this.universalProvider.session) {
      await this.universalProvider.disconnect();
    }
    this.listenWalletConnect();
  }
  listenWalletConnect() {
    if (this.universalProvider) {
      this.chainNamespaces.forEach((namespace) => {
        WcHelpersUtil.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace,
          onDisplayUri: (uri) => {
            ConnectionController.setUri(uri);
          },
          onConnect: (accounts) => {
            const { address } = CoreHelperUtil.getAccount(accounts[0]);
            for (const namespace2 of this.chainNamespaces) {
              StorageUtil.removeDisconnectedConnectorId(ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT, namespace2);
            }
            ConnectionController.finalizeWcConnection(address);
          },
          onDisconnect: () => {
            if (ChainController.state.noAdapters) {
              this.resetAccount(namespace);
            }
            ConnectionController.resetWcConnection();
          },
          onChainChanged: (chainId) => {
            const activeNamespace = ChainController.state.activeChain;
            const isCurrentConnectorWalletConnect = activeNamespace && ConnectorController.state.activeConnectorIds[activeNamespace] === ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT;
            if (activeNamespace === namespace && (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
              const caipNetwork = this.getCaipNetworks().find((n3) => n3.id.toString() === chainId.toString() || n3.caipNetworkId.toString() === chainId.toString());
              const currentCaipNetwork = this.getCaipNetwork();
              if (!caipNetwork) {
                this.setUnsupportedNetwork(chainId);
                return;
              }
              if ((currentCaipNetwork == null ? void 0 : currentCaipNetwork.id.toString()) !== (caipNetwork == null ? void 0 : caipNetwork.id.toString()) && (currentCaipNetwork == null ? void 0 : currentCaipNetwork.chainNamespace) === (caipNetwork == null ? void 0 : caipNetwork.chainNamespace)) {
                this.setCaipNetwork(caipNetwork);
              }
            }
          },
          onAccountsChanged: (accounts) => {
            const activeNamespace = ChainController.state.activeChain;
            const isCurrentConnectorWalletConnect = activeNamespace && ConnectorController.state.activeConnectorIds[activeNamespace] === ConstantsUtil$2.CONNECTOR_ID.WALLET_CONNECT;
            if (activeNamespace === namespace && (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
              const account = accounts == null ? void 0 : accounts[0];
              if (account) {
                this.syncAccount({
                  address: account.address,
                  chainId: account.chainId,
                  chainNamespace: account.chainNamespace
                });
              }
            }
          }
        });
      });
    }
  }
  createUniversalProvider() {
    var _a;
    if (!this.universalProviderInitPromise && CoreHelperUtil.isClient() && ((_a = this.options) == null ? void 0 : _a.projectId)) {
      this.universalProviderInitPromise = this.initializeUniversalAdapter();
    }
    return this.universalProviderInitPromise;
  }
  async getUniversalProvider() {
    if (!this.universalProvider) {
      try {
        await this.createUniversalProvider();
      } catch (err) {
        EventsController.sendEvent({
          type: "error",
          event: "INTERNAL_SDK_ERROR",
          properties: {
            errorType: "UniversalProviderInitError",
            errorMessage: err instanceof Error ? err.message : "Unknown",
            uncaught: false
          }
        });
        console.error("AppKit:getUniversalProvider - Cannot create provider", err);
      }
    }
    return this.universalProvider;
  }
  getDisabledCaipNetworks() {
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks.filter((network) => ChainController.isCaipNetworkDisabled(network));
  }
  // - Utils -------------------------------------------------------------------
  handleAlertError(error) {
    const matchedUniversalProviderError = Object.entries(ErrorUtil.UniversalProviderErrors).find(([, { message: message2 }]) => error.message.includes(message2));
    const [errorKey, errorValue] = matchedUniversalProviderError ?? [];
    const { message, alertErrorKey } = errorValue ?? {};
    if (errorKey && message && !this.reportedAlertErrors[errorKey]) {
      const alertError = ErrorUtil.ALERT_ERRORS[alertErrorKey];
      if (alertError) {
        AlertController.open(alertError, "error");
        this.reportedAlertErrors[errorKey] = true;
      }
    }
  }
  getAdapter(namespace) {
    var _a;
    if (!namespace) {
      return void 0;
    }
    return (_a = this.chainAdapters) == null ? void 0 : _a[namespace];
  }
  createAdapter(blueprint) {
    var _a, _b;
    if (!blueprint) {
      return;
    }
    const namespace = blueprint.namespace;
    if (!namespace) {
      return;
    }
    this.createClients();
    const adapterBlueprint = blueprint;
    adapterBlueprint.namespace = namespace;
    adapterBlueprint.construct({
      namespace,
      projectId: (_a = this.options) == null ? void 0 : _a.projectId,
      networks: (_b = this.caipNetworks) == null ? void 0 : _b.filter(({ chainNamespace }) => chainNamespace === namespace)
    });
    if (!this.chainNamespaces.includes(namespace)) {
      this.chainNamespaces.push(namespace);
    }
    if (this.chainAdapters) {
      this.chainAdapters[namespace] = adapterBlueprint;
    }
  }
  // -- Public -------------------------------------------------------------------
  async open(options) {
    await this.injectModalUi();
    if (options == null ? void 0 : options.uri) {
      ConnectionController.setUri(options.uri);
    }
    const { isSwap, isSend } = this.toModalOptions();
    if (isSwap(options)) {
      return ModalController.open({
        ...options,
        data: { swap: options.arguments }
      });
    } else if (isSend(options)) {
      if (options.arguments) {
        return this.openSend(options.arguments);
      }
    }
    return ModalController.open(options);
  }
  async close() {
    await this.injectModalUi();
    ModalController.close();
  }
  setLoading(loading, namespace) {
    ModalController.setLoading(loading, namespace);
  }
  async disconnect(chainNamespace) {
    await ConnectionController.disconnect({ namespace: chainNamespace });
  }
  getSIWX() {
    return OptionsController.state.siwx;
  }
  // -- review these -------------------------------------------------------------------
  getError() {
    return "";
  }
  getChainId() {
    var _a;
    return (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.id;
  }
  async switchNetwork(appKitNetwork, { throwOnFailure = false } = {}) {
    const network = this.getCaipNetworks().find((n3) => n3.id === appKitNetwork.id);
    if (!network) {
      AlertController.open(ErrorUtil.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
      return;
    }
    await ChainController.switchActiveNetwork(network, { throwOnFailure });
  }
  getWalletProvider() {
    return ChainController.state.activeChain ? ProviderController.state.providers[ChainController.state.activeChain] : null;
  }
  getWalletProviderType() {
    return ProviderController.getProviderId(ChainController.state.activeChain);
  }
  subscribeProviders(callback) {
    return ProviderController.subscribeProviders(callback);
  }
  getThemeMode() {
    return ThemeController.state.themeMode;
  }
  getThemeVariables() {
    return ThemeController.state.themeVariables;
  }
  setThemeMode(themeMode) {
    ThemeController.setThemeMode(themeMode);
    setColorTheme(ThemeController.state.themeMode);
  }
  setTermsConditionsUrl(termsConditionsUrl) {
    OptionsController.setTermsConditionsUrl(termsConditionsUrl);
  }
  setPrivacyPolicyUrl(privacyPolicyUrl) {
    OptionsController.setPrivacyPolicyUrl(privacyPolicyUrl);
  }
  setThemeVariables(themeVariables) {
    ThemeController.setThemeVariables(themeVariables);
    setThemeVariables(ThemeController.state.themeVariables);
  }
  subscribeTheme(callback) {
    return ThemeController.subscribe(callback);
  }
  subscribeConnections(callback) {
    if (!this.remoteFeatures.multiWallet) {
      AlertController.open(ConstantsUtil$2.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
      return () => void 0;
    }
    return ConnectionController.subscribe(callback);
  }
  getWalletInfo(namespace) {
    var _a, _b;
    if (namespace) {
      return (_b = (_a = ChainController.state.chains.get(namespace)) == null ? void 0 : _a.accountState) == null ? void 0 : _b.connectedWalletInfo;
    }
    const accountData = ChainController.getAccountData();
    return accountData == null ? void 0 : accountData.connectedWalletInfo;
  }
  getAccount(_namespace) {
    const namespace = _namespace || ChainController.state.activeChain;
    const authConnector = ConnectorController.getAuthConnector(namespace);
    const accountState = ChainController.getAccountData(namespace);
    const activeConnectorId = StorageUtil.getConnectedConnectorId(ChainController.state.activeChain);
    const connections = ConnectionController.getConnections(namespace);
    if (!namespace) {
      throw new Error("AppKit:getAccount - namespace is required");
    }
    const allAccounts = connections.flatMap((connection) => connection.accounts.map(({ address, type, publicKey }) => CoreHelperUtil.createAccount(namespace, address, type || "eoa", publicKey)));
    if (!accountState) {
      return void 0;
    }
    return {
      allAccounts,
      caipAddress: accountState.caipAddress,
      address: CoreHelperUtil.getPlainAddress(accountState.caipAddress),
      isConnected: Boolean(accountState.caipAddress),
      status: accountState.status,
      embeddedWalletInfo: authConnector && activeConnectorId === ConstantsUtil$2.CONNECTOR_ID.AUTH ? {
        user: accountState.user ? {
          ...accountState.user,
          /*
           * Getting the username from the chain controller works well for social logins,
           * but Farcaster uses a different connection flow and doesn't emit the username via events.
           * Since the username is stored in local storage before the chain controller updates,
           * it's safe to use the local storage value here.
           */
          username: StorageUtil.getConnectedSocialUsername()
        } : void 0,
        authProvider: accountState.socialProvider || "email",
        accountType: getPreferredAccountType(namespace),
        isSmartAccountDeployed: Boolean(accountState.smartAccountDeployed)
      } : void 0
    };
  }
  subscribeAccount(callback, namespace) {
    const unsubArr = [];
    const updateVal = () => {
      const account = this.getAccount(namespace);
      if (!account) {
        return;
      }
      callback(account);
    };
    if (namespace) {
      const unsub2 = ChainController.subscribeChainProp("accountState", updateVal, namespace);
      unsubArr.push(unsub2);
    } else {
      const unsub2 = ChainController.subscribe(updateVal);
      unsubArr.push(unsub2);
    }
    const unsub = ConnectorController.subscribe(updateVal);
    unsubArr.push(unsub);
    return () => {
      unsubArr.forEach((fn) => fn());
    };
  }
  subscribeNetwork(callback) {
    return ChainController.subscribe(({ activeCaipNetwork }) => {
      callback({
        caipNetwork: activeCaipNetwork,
        chainId: activeCaipNetwork == null ? void 0 : activeCaipNetwork.id,
        caipNetworkId: activeCaipNetwork == null ? void 0 : activeCaipNetwork.caipNetworkId
      });
    });
  }
  subscribeWalletInfo(callback, namespace) {
    if (namespace) {
      return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState == null ? void 0 : accountState.connectedWalletInfo), namespace);
    }
    return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState == null ? void 0 : accountState.connectedWalletInfo));
  }
  subscribeShouldUpdateToAddress(callback) {
    return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState == null ? void 0 : accountState.shouldUpdateToAddress));
  }
  subscribeCaipNetworkChange(callback) {
    return ChainController.subscribeKey("activeCaipNetwork", callback);
  }
  getState() {
    return PublicStateController.state;
  }
  getRemoteFeatures() {
    return OptionsController.state.remoteFeatures;
  }
  subscribeState(callback) {
    return PublicStateController.subscribe(callback);
  }
  subscribeRemoteFeatures(callback) {
    return OptionsController.subscribeKey("remoteFeatures", callback);
  }
  showErrorMessage(message) {
    SnackController.showError(message);
  }
  showSuccessMessage(message) {
    SnackController.showSuccess(message);
  }
  getEvent() {
    return { ...EventsController.state };
  }
  subscribeEvents(callback) {
    return EventsController.subscribe(callback);
  }
  replace(route) {
    RouterController.replace(route);
  }
  redirect(route) {
    RouterController.push(route);
  }
  popTransactionStack(status) {
    RouterController.popTransactionStack(status);
  }
  isOpen() {
    return ModalController.state.open;
  }
  isTransactionStackEmpty() {
    return RouterController.state.transactionStack.length === 0;
  }
  static getInstance() {
    return this.instance;
  }
  updateFeatures(newFeatures) {
    OptionsController.setFeatures(newFeatures);
  }
  updateRemoteFeatures(newRemoteFeatures) {
    OptionsController.setRemoteFeatures(newRemoteFeatures);
  }
  updateOptions(newOptions) {
    const currentOptions = OptionsController.state || {};
    const updatedOptions = { ...currentOptions, ...newOptions };
    OptionsController.setOptions(updatedOptions);
  }
  setConnectMethodsOrder(connectMethodsOrder) {
    OptionsController.setConnectMethodsOrder(connectMethodsOrder);
  }
  setWalletFeaturesOrder(walletFeaturesOrder) {
    OptionsController.setWalletFeaturesOrder(walletFeaturesOrder);
  }
  setCollapseWallets(collapseWallets) {
    OptionsController.setCollapseWallets(collapseWallets);
  }
  setSocialsOrder(socialsOrder) {
    OptionsController.setSocialsOrder(socialsOrder);
  }
  getConnectMethodsOrder() {
    return WalletUtil.getConnectOrderMethod(OptionsController.state.features, ConnectorController.getConnectors());
  }
  /**
   * Adds a network to an existing adapter in AppKit.
   * @param namespace - The chain namespace to add the network to (e.g. 'eip155', 'solana')
   * @param network - The network configuration to add
   * @throws Error if adapter for namespace doesn't exist
   */
  addNetwork(namespace, network) {
    if (this.chainAdapters && !this.chainAdapters[namespace]) {
      throw new Error(`Adapter for namespace ${namespace} doesn't exist`);
    }
    const extendedNetwork = this.extendCaipNetwork(network, this.options);
    if (!this.getCaipNetworks().find((n3) => n3.id === extendedNetwork.id)) {
      ChainController.addNetwork(extendedNetwork);
    }
  }
  /**
   * Removes a network from an existing adapter in AppKit.
   * @param namespace - The chain namespace the network belongs to
   * @param networkId - The network ID to remove
   * @throws Error if adapter for namespace doesn't exist or if removing last network
   */
  removeNetwork(namespace, networkId) {
    if (this.chainAdapters && !this.chainAdapters[namespace]) {
      throw new Error(`Adapter for namespace ${namespace} doesn't exist`);
    }
    const networkToRemove = this.getCaipNetworks().find((n3) => n3.id === networkId);
    if (!networkToRemove) {
      return;
    }
    ChainController.removeNetwork(namespace, networkId);
  }
}
let isInitialized = false;
class AppKit extends AppKitBaseClient {
  // -- Overrides --------------------------------------------------------------
  async open(options) {
    const isConnected = ConnectorController.isConnected();
    if (!isConnected) {
      await super.open(options);
    }
  }
  async close() {
    var _a;
    await super.close();
    if (this.options.manualWCControl) {
      const address = (_a = ChainController.getAccountData(this.activeChainNamespace)) == null ? void 0 : _a.address;
      ConnectionController.finalizeWcConnection(address);
    }
  }
  async syncIdentity(_request) {
    return Promise.resolve();
  }
  async syncBalance(_params) {
    return Promise.resolve();
  }
  async injectModalUi() {
    if (!isInitialized && CoreHelperUtil.isClient()) {
      await __vitePreload(() => import("./basic-C7EwvSDA.js"), true ? __vite__mapDeps([5,6,1,2]) : void 0);
      await __vitePreload(() => import("./w3m-modal-CZUfWYoS.js"), true ? __vite__mapDeps([7,6,1,2]) : void 0);
      const isElementCreated = document.querySelector("w3m-modal");
      if (!isElementCreated) {
        const modal = document.createElement("w3m-modal");
        if (!OptionsController.state.disableAppend && !OptionsController.state.enableEmbedded) {
          document.body.insertAdjacentElement("beforeend", modal);
        }
      }
      isInitialized = true;
    }
  }
}
const PACKAGE_VERSION = "1.8.17-wc-circular-dependencies-fix.0";
function createAppKit(options) {
  return new AppKit({
    ...options,
    basic: true,
    sdkVersion: `html-core-${PACKAGE_VERSION}`
  });
}
const core = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AppKit,
  createAppKit
}, Symbol.toStringTag, { value: "Module" }));
export {
  AdapterController as $,
  ApiController as A,
  BlockchainApiController as B,
  ChainController as C,
  ConstantsUtil$1 as D,
  E,
  getActiveNetworkTokenAddress as F,
  ConnectorController as G,
  subscribeKey as H,
  subscribe as I,
  proxy as J,
  SIWXUtil as K,
  ContractUtil as L,
  ModalController as M,
  NetworkUtil$1 as N,
  ParseUtil as O,
  ProviderController as P,
  FetchUtil as Q,
  RouterController as R,
  SafeLocalStorageKeys as S,
  HelpersUtil as T,
  OptionsController as U,
  getNativeTokenAddress as V,
  W3mFrameRpcConstants as W,
  AssetUtil as X,
  AssetController as Y,
  ThemeController as Z,
  initializeTheming as _,
  ConstantsUtil$2 as a,
  ConnectorUtil as a0,
  AppKitError as a1,
  ErrorUtil$1 as a2,
  ConnectionControllerUtil as a3,
  CaipNetworksUtil as a4,
  StorageUtil as a5,
  WalletUtil as a6,
  core as a7,
  SafeLocalStorage as b,
  f$1 as c,
  i as d,
  b as e,
  fallback as f,
  getActiveCaipNetwork as g,
  A as h,
  i$3 as i,
  css as j,
  elementStyles as k,
  NumberUtil as l,
  withErrorBoundary as m,
  SnackController as n,
  ConnectionController as o,
  EventsController as p,
  getPreferredAccountType as q,
  resetStyles as r,
  shouldThrow as s,
  CoreHelperUtil as t,
  u$1 as u,
  vars as v,
  w,
  SwapApiUtil as x,
  AlertController as y,
  BalanceUtil as z
};
//# sourceMappingURL=core-DgKybDfE.js.map
