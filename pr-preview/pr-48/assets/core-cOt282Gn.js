const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BP1CgxJZ.js","assets/main-DPovFUr7.js","assets/main-BN-Qqfmx.css","assets/ccip-DaaRBCBc.js","assets/features-Crq6eZbo.js","assets/basic-CIRqadzE.js","assets/index-Cxkxw-nt.js","assets/w3m-modal-BJNcHPTg.js"])))=>i.map(i=>d[i]);
import { bk as Ww, aQ as Hw, b0 as Vw, cS as zw, U as Kw, cT as Gw, cU as as, bK as cp, cQ as oa, by as No, cV as pi, cW as yt, cX as Pa, cY as z, cZ as Gt, c_ as Yw, c$ as $t, d0 as Zw, d1 as Ae, d2 as ji, d3 as il, d4 as lp, d5 as _r, d6 as dp, d7 as Yt, d8 as Jw, d9 as Xw, da as Zt, db as $s, dc as gi, dd, de as Qw, df as hd, dg as ud, dh as Ji, di as fd, dj as rh, dk as ey, dl as ty, dm as sy, dn as ih, dp as lr, dq as hp, dr as Ks, ds as Rs, dt as ny, du as ry, dv as iy, dw as oy, dx as ay, dy as cy, dz as ly, dA as dy, dB as gn, dC as up, h as So, cC as oh, __tla as __tla_0 } from "./main-DPovFUr7.js";
let Np, ne, le, b, ge, ui, Ip, V, at, ot, Be, bs, Iy, me, pp, it, $e, fo, ae, ie, ld, q, r3, on, la, is, Wt, X3, F, At, Ar, rn, da, Kr, H, qn, tP, re, Uw, ia, Y3, ah, To, Qe, Mn, J3, eP, yp, ls, Us, G, fe, os, Q3, hy, ee, od, jk, Z3, d0, qt, gd;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _d2;
  ah = function(t, e = {}) {
    const { key: s = "fallback", name: n = "Fallback", rank: r = false, shouldThrow: i = hy, retryCount: o, retryDelay: a } = e;
    return (({ chain: c, pollingInterval: l = 4e3, timeout: d, ...h }) => {
      let u = t, f = () => {
      };
      const g = Ww({
        key: s,
        name: n,
        async request({ method: p, params: m }) {
          let T;
          const x = async (A = 0) => {
            const N = u[A]({
              ...h,
              chain: c,
              retryCount: 0,
              timeout: d
            });
            try {
              const P = await N.request({
                method: p,
                params: m
              });
              return f({
                method: p,
                params: m,
                response: P,
                transport: N,
                status: "success"
              }), P;
            } catch (P) {
              if (f({
                error: P,
                method: p,
                params: m,
                transport: N,
                status: "error"
              }), i(P) || A === u.length - 1 || (T ?? (T = u.slice(A + 1).some((U) => {
                const { include: B, exclude: L } = U({
                  chain: c
                }).config.methods || {};
                return B ? B.includes(p) : L ? !L.includes(p) : true;
              })), !T)) throw P;
              return x(A + 1);
            }
          };
          return x();
        },
        retryCount: o,
        retryDelay: a,
        type: "fallback"
      }, {
        onResponse: (p) => f = p,
        transports: u.map((p) => p({
          chain: c,
          retryCount: 0
        }))
      });
      if (r) {
        const p = typeof r == "object" ? r : {};
        uy({
          chain: c,
          interval: p.interval ?? l,
          onTransports: (m) => u = m,
          ping: p.ping,
          sampleCount: p.sampleCount,
          timeout: p.timeout,
          transports: u,
          weights: p.weights
        });
      }
      return g;
    });
  };
  hy = function(t) {
    return !!("code" in t && typeof t.code == "number" && (t.code === Hw.code || t.code === Vw.code || t.code === zw.code || Kw.nodeMessage.test(t.message) || t.code === 5e3));
  };
  function uy({ chain: t, interval: e = 4e3, onTransports: s, ping: n, sampleCount: r = 10, timeout: i = 1e3, transports: o, weights: a = {} }) {
    const { stability: c = 0.7, latency: l = 0.3 } = a, d = [], h = async () => {
      const u = await Promise.all(o.map(async (p) => {
        const m = p({
          chain: t,
          retryCount: 0,
          timeout: i
        }), T = Date.now();
        let x, A;
        try {
          await (n ? n({
            transport: m
          }) : m.request({
            method: "net_listening"
          })), A = 1;
        } catch {
          A = 0;
        } finally {
          x = Date.now();
        }
        return {
          latency: x - T,
          success: A
        };
      }));
      d.push(u), d.length > r && d.shift();
      const f = Math.max(...d.map((p) => Math.max(...p.map(({ latency: m }) => m)))), g = o.map((p, m) => {
        const T = d.map((U) => U[m].latency), A = 1 - T.reduce((U, B) => U + B, 0) / T.length / f, N = d.map((U) => U[m].success), P = N.reduce((U, B) => U + B, 0) / N.length;
        return P === 0 ? [
          0,
          m
        ] : [
          l * A + c * P,
          m
        ];
      }).sort((p, m) => m[0] - p[0]);
      s(g.map(([, p]) => o[p])), await Gw(e), h();
    };
    h();
  }
  const fp = {
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    }
  };
  var ch = {};
  let gp;
  F = {
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
    AUTH_CONNECTOR_SUPPORTED_CHAINS: [
      "eip155",
      "solana"
    ],
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
    SECURE_SITE_SDK_ORIGIN: (typeof as < "u" && typeof ch < "u" ? ch.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
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
    IS_DEVELOPMENT: typeof as < "u" && false,
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
  pp = {
    caipNetworkIdToNumber(t) {
      return t ? Number(t.split(":")[1]) : void 0;
    },
    parseEvmChainId(t) {
      return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t;
    },
    getNetworksByNamespace(t, e) {
      return (t == null ? void 0 : t.filter((s) => s.chainNamespace === e)) || [];
    },
    getFirstNetworkByNamespace(t, e) {
      return this.getNetworksByNamespace(t, e)[0];
    },
    getNetworkNameByCaipNetworkId(t, e) {
      var _a2;
      if (!e) return;
      const s = t.find((r) => r.caipNetworkId === e);
      if (s) return s.name;
      const [n] = e.split(":");
      return ((_a2 = F.CHAIN_NAME_MAP) == null ? void 0 : _a2[n]) || void 0;
    }
  };
  gp = [
    "eip155",
    "solana",
    "polkadot",
    "bip122",
    "cosmos",
    "sui",
    "stacks"
  ];
  var fy = 20, py = 1, Cr = 1e6, lh = 1e6, gy = -7, my = 21, wy = false, ho = "[big.js] ", Tr = ho + "Invalid ", Ra = Tr + "decimal places", yy = Tr + "rounding mode", mp = ho + "Division by zero", Oe = {}, Ls = void 0, by = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function wp() {
    function t(e) {
      var s = this;
      if (!(s instanceof t)) return e === Ls ? wp() : new t(e);
      if (e instanceof t) s.s = e.s, s.e = e.e, s.c = e.c.slice();
      else {
        if (typeof e != "string") {
          if (t.strict === true && typeof e != "bigint") throw TypeError(Tr + "value");
          e = e === 0 && 1 / e < 0 ? "-0" : String(e);
        }
        Ey(s, e);
      }
      s.constructor = t;
    }
    return t.prototype = Oe, t.DP = fy, t.RM = py, t.NE = gy, t.PE = my, t.strict = wy, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t;
  }
  function Ey(t, e) {
    var s, n, r;
    if (!by.test(e)) throw Error(Tr + "number");
    for (t.s = e.charAt(0) == "-" ? (e = e.slice(1), -1) : 1, (s = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (s < 0 && (s = n), s += +e.slice(n + 1), e = e.substring(0, n)) : s < 0 && (s = e.length), r = e.length, n = 0; n < r && e.charAt(n) == "0"; ) ++n;
    if (n == r) t.c = [
      t.e = 0
    ];
    else {
      for (; r > 0 && e.charAt(--r) == "0"; ) ;
      for (t.e = s - n - 1, t.c = [], s = 0; n <= r; ) t.c[s++] = +e.charAt(n++);
    }
    return t;
  }
  function xr(t, e, s, n) {
    var r = t.c;
    if (s === Ls && (s = t.constructor.RM), s !== 0 && s !== 1 && s !== 2 && s !== 3) throw Error(yy);
    if (e < 1) n = s === 3 && (n || !!r[0]) || e === 0 && (s === 1 && r[0] >= 5 || s === 2 && (r[0] > 5 || r[0] === 5 && (n || r[1] !== Ls))), r.length = 1, n ? (t.e = t.e - e + 1, r[0] = 1) : r[0] = t.e = 0;
    else if (e < r.length) {
      if (n = s === 1 && r[e] >= 5 || s === 2 && (r[e] > 5 || r[e] === 5 && (n || r[e + 1] !== Ls || r[e - 1] & 1)) || s === 3 && (n || !!r[0]), r.length = e, n) {
        for (; ++r[--e] > 9; ) if (r[e] = 0, e === 0) {
          ++t.e, r.unshift(1);
          break;
        }
      }
      for (e = r.length; !r[--e]; ) r.pop();
    }
    return t;
  }
  function Or(t, e, s) {
    var n = t.e, r = t.c.join(""), i = r.length;
    if (e) r = r.charAt(0) + (i > 1 ? "." + r.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
    else if (n < 0) {
      for (; ++n; ) r = "0" + r;
      r = "0." + r;
    } else if (n > 0) if (++n > i) for (n -= i; n--; ) r += "0";
    else n < i && (r = r.slice(0, n) + "." + r.slice(n));
    else i > 1 && (r = r.charAt(0) + "." + r.slice(1));
    return t.s < 0 && s ? "-" + r : r;
  }
  Oe.abs = function() {
    var t = new this.constructor(this);
    return t.s = 1, t;
  };
  Oe.cmp = function(t) {
    var e, s = this, n = s.c, r = (t = new s.constructor(t)).c, i = s.s, o = t.s, a = s.e, c = t.e;
    if (!n[0] || !r[0]) return n[0] ? i : r[0] ? -o : 0;
    if (i != o) return i;
    if (e = i < 0, a != c) return a > c ^ e ? 1 : -1;
    for (o = (a = n.length) < (c = r.length) ? a : c, i = -1; ++i < o; ) if (n[i] != r[i]) return n[i] > r[i] ^ e ? 1 : -1;
    return a == c ? 0 : a > c ^ e ? 1 : -1;
  };
  Oe.div = function(t) {
    var e = this, s = e.constructor, n = e.c, r = (t = new s(t)).c, i = e.s == t.s ? 1 : -1, o = s.DP;
    if (o !== ~~o || o < 0 || o > Cr) throw Error(Ra);
    if (!r[0]) throw Error(mp);
    if (!n[0]) return t.s = i, t.c = [
      t.e = 0
    ], t;
    var a, c, l, d, h, u = r.slice(), f = a = r.length, g = n.length, p = n.slice(0, a), m = p.length, T = t, x = T.c = [], A = 0, N = o + (T.e = e.e - t.e) + 1;
    for (T.s = i, i = N < 0 ? 0 : N, u.unshift(0); m++ < a; ) p.push(0);
    do {
      for (l = 0; l < 10; l++) {
        if (a != (m = p.length)) d = a > m ? 1 : -1;
        else for (h = -1, d = 0; ++h < a; ) if (r[h] != p[h]) {
          d = r[h] > p[h] ? 1 : -1;
          break;
        }
        if (d < 0) {
          for (c = m == a ? r : u; m; ) {
            if (p[--m] < c[m]) {
              for (h = m; h && !p[--h]; ) p[h] = 9;
              --p[h], p[m] += 10;
            }
            p[m] -= c[m];
          }
          for (; !p[0]; ) p.shift();
        } else break;
      }
      x[A++] = d ? l : ++l, p[0] && d ? p[m] = n[f] || 0 : p = [
        n[f]
      ];
    } while ((f++ < g || p[0] !== Ls) && i--);
    return !x[0] && A != 1 && (x.shift(), T.e--, N--), A > N && xr(T, N, s.RM, p[0] !== Ls), T;
  };
  Oe.eq = function(t) {
    return this.cmp(t) === 0;
  };
  Oe.gt = function(t) {
    return this.cmp(t) > 0;
  };
  Oe.gte = function(t) {
    return this.cmp(t) > -1;
  };
  Oe.lt = function(t) {
    return this.cmp(t) < 0;
  };
  Oe.lte = function(t) {
    return this.cmp(t) < 1;
  };
  Oe.minus = Oe.sub = function(t) {
    var e, s, n, r, i = this, o = i.constructor, a = i.s, c = (t = new o(t)).s;
    if (a != c) return t.s = -c, i.plus(t);
    var l = i.c.slice(), d = i.e, h = t.c, u = t.e;
    if (!l[0] || !h[0]) return h[0] ? t.s = -c : l[0] ? t = new o(i) : t.s = 1, t;
    if (a = d - u) {
      for ((r = a < 0) ? (a = -a, n = l) : (u = d, n = h), n.reverse(), c = a; c--; ) n.push(0);
      n.reverse();
    } else for (s = ((r = l.length < h.length) ? l : h).length, a = c = 0; c < s; c++) if (l[c] != h[c]) {
      r = l[c] < h[c];
      break;
    }
    if (r && (n = l, l = h, h = n, t.s = -t.s), (c = (s = h.length) - (e = l.length)) > 0) for (; c--; ) l[e++] = 0;
    for (c = e; s > a; ) {
      if (l[--s] < h[s]) {
        for (e = s; e && !l[--e]; ) l[e] = 9;
        --l[e], l[s] += 10;
      }
      l[s] -= h[s];
    }
    for (; l[--c] === 0; ) l.pop();
    for (; l[0] === 0; ) l.shift(), --u;
    return l[0] || (t.s = 1, l = [
      u = 0
    ]), t.c = l, t.e = u, t;
  };
  Oe.mod = function(t) {
    var e, s = this, n = s.constructor, r = s.s, i = (t = new n(t)).s;
    if (!t.c[0]) throw Error(mp);
    return s.s = t.s = 1, e = t.cmp(s) == 1, s.s = r, t.s = i, e ? new n(s) : (r = n.DP, i = n.RM, n.DP = n.RM = 0, s = s.div(t), n.DP = r, n.RM = i, this.minus(s.times(t)));
  };
  Oe.neg = function() {
    var t = new this.constructor(this);
    return t.s = -t.s, t;
  };
  Oe.plus = Oe.add = function(t) {
    var e, s, n, r = this, i = r.constructor;
    if (t = new i(t), r.s != t.s) return t.s = -t.s, r.minus(t);
    var o = r.e, a = r.c, c = t.e, l = t.c;
    if (!a[0] || !l[0]) return l[0] || (a[0] ? t = new i(r) : t.s = r.s), t;
    if (a = a.slice(), e = o - c) {
      for (e > 0 ? (c = o, n = l) : (e = -e, n = a), n.reverse(); e--; ) n.push(0);
      n.reverse();
    }
    for (a.length - l.length < 0 && (n = l, l = a, a = n), e = l.length, s = 0; e; a[e] %= 10) s = (a[--e] = a[e] + l[e] + s) / 10 | 0;
    for (s && (a.unshift(s), ++c), e = a.length; a[--e] === 0; ) a.pop();
    return t.c = a, t.e = c, t;
  };
  Oe.pow = function(t) {
    var e = this, s = new e.constructor("1"), n = s, r = t < 0;
    if (t !== ~~t || t < -lh || t > lh) throw Error(Tr + "exponent");
    for (r && (t = -t); t & 1 && (n = n.times(e)), t >>= 1, !!t; ) e = e.times(e);
    return r ? s.div(n) : n;
  };
  Oe.prec = function(t, e) {
    if (t !== ~~t || t < 1 || t > Cr) throw Error(Tr + "precision");
    return xr(new this.constructor(this), t, e);
  };
  Oe.round = function(t, e) {
    if (t === Ls) t = 0;
    else if (t !== ~~t || t < -Cr || t > Cr) throw Error(Ra);
    return xr(new this.constructor(this), t + this.e + 1, e);
  };
  Oe.sqrt = function() {
    var t, e, s, n = this, r = n.constructor, i = n.s, o = n.e, a = new r("0.5");
    if (!n.c[0]) return new r(n);
    if (i < 0) throw Error(ho + "No square root");
    i = Math.sqrt(+Or(n, true, true)), i === 0 || i === 1 / 0 ? (e = n.c.join(""), e.length + o & 1 || (e += "0"), i = Math.sqrt(e), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), t = new r((i == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + o)) : t = new r(i + ""), o = t.e + (r.DP += 4);
    do
      s = t, t = a.times(s.plus(n.div(s)));
    while (s.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
    return xr(t, (r.DP -= 4) + t.e + 1, r.RM);
  };
  Oe.times = Oe.mul = function(t) {
    var e, s = this, n = s.constructor, r = s.c, i = (t = new n(t)).c, o = r.length, a = i.length, c = s.e, l = t.e;
    if (t.s = s.s == t.s ? 1 : -1, !r[0] || !i[0]) return t.c = [
      t.e = 0
    ], t;
    for (t.e = c + l, o < a && (e = r, r = i, i = e, l = o, o = a, a = l), e = new Array(l = o + a); l--; ) e[l] = 0;
    for (c = a; c--; ) {
      for (a = 0, l = o + c; l > c; ) a = e[l] + i[c] * r[l - c - 1] + a, e[l--] = a % 10, a = a / 10 | 0;
      e[l] = a;
    }
    for (a ? ++t.e : e.shift(), c = e.length; !e[--c]; ) e.pop();
    return t.c = e, t;
  };
  Oe.toExponential = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Ls) {
      if (t !== ~~t || t < 0 || t > Cr) throw Error(Ra);
      for (s = xr(new s.constructor(s), ++t, e); s.c.length < t; ) s.c.push(0);
    }
    return Or(s, true, !!n);
  };
  Oe.toFixed = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Ls) {
      if (t !== ~~t || t < 0 || t > Cr) throw Error(Ra);
      for (s = xr(new s.constructor(s), t + s.e + 1, e), t = t + s.e + 1; s.c.length < t; ) s.c.push(0);
    }
    return Or(s, false, !!n);
  };
  Oe[Symbol.for("nodejs.util.inspect.custom")] = Oe.toJSON = Oe.toString = function() {
    var t = this, e = t.constructor;
    return Or(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
  };
  Oe.toNumber = function() {
    var t = +Or(this, true, true);
    if (this.constructor.strict === true && !this.eq(t.toString())) throw Error(ho + "Imprecise conversion");
    return t;
  };
  Oe.toPrecision = function(t, e) {
    var s = this, n = s.constructor, r = s.c[0];
    if (t !== Ls) {
      if (t !== ~~t || t < 1 || t > Cr) throw Error(Tr + "precision");
      for (s = xr(new n(s), t, e); s.c.length < t; ) s.c.push(0);
    }
    return Or(s, t <= s.e || s.e <= n.NE || s.e >= n.PE, !!r);
  };
  Oe.valueOf = function() {
    var t = this, e = t.constructor;
    if (e.strict === true) throw Error(ho + "valueOf disallowed");
    return Or(t, t.e <= e.NE || t.e >= e.PE, true);
  };
  var _s = wp();
  let vy, Cy, Ay, $r;
  yp = {
    bigNumber(t, e = {
      safe: false
    }) {
      try {
        return t ? new _s(t) : new _s(0);
      } catch (s) {
        if (e.safe) return new _s(0);
        throw s;
      }
    },
    formatNumber(t, e) {
      const { decimals: s, round: n = 8, safe: r = true } = e;
      return yp.bigNumber(t, {
        safe: r
      }).div(new _s(10).pow(s)).round(n);
    },
    multiply(t, e) {
      if (t === void 0 || e === void 0) return new _s(0);
      const s = new _s(t), n = new _s(e);
      return s.times(n);
    },
    toFixed(t, e = 2) {
      return t === void 0 || t === "" ? new _s(0).toFixed(e) : new _s(t).toFixed(e);
    },
    formatNumberToLocalString(t, e = 2) {
      return t === void 0 || t === "" ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", {
        maximumFractionDigits: e,
        minimumFractionDigits: e,
        roundingMode: "floor"
      }) : parseFloat(t).toLocaleString("en-US", {
        maximumFractionDigits: e,
        minimumFractionDigits: e,
        roundingMode: "floor"
      });
    },
    parseLocalStringToNumber(t) {
      if (t === void 0 || t === "") return 0;
      const e = t.replace(/,/gu, "");
      return new _s(e).toNumber();
    }
  };
  vy = [
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
  Cy = [
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        {
          name: "spender",
          type: "address"
        },
        {
          name: "amount",
          type: "uint256"
        }
      ],
      outputs: [
        {
          type: "bool"
        }
      ]
    }
  ];
  Ay = [
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
  Iy = {
    getERC20Abi: (t) => F.USDT_CONTRACT_ADDRESSES.includes(t) ? Ay : vy,
    getSwapAbi: () => Cy
  };
  $r = {
    ConnectorExplorerIds: {
      [F.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [F.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [F.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [F.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
      [F.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
      [F.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [F.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      [F.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      [F.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      [F.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      [F.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
      [F.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
      [F.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
      [F.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
      [F.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
      [F.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
      [F.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
      [F.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [F.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
    }
  };
  it = {
    validateCaipAddress(t) {
      var _a2;
      if (((_a2 = t.split(":")) == null ? void 0 : _a2.length) !== 3) throw new Error("Invalid CAIP Address");
      return t;
    },
    parseCaipAddress(t) {
      const e = t.split(":");
      if (e.length !== 3) throw new Error(`Invalid CAIP-10 address: ${t}`);
      const [s, n, r] = e;
      if (!s || !n || !r) throw new Error(`Invalid CAIP-10 address: ${t}`);
      return {
        chainNamespace: s,
        chainId: n,
        address: r
      };
    },
    parseCaipNetworkId(t) {
      const e = t.split(":");
      if (e.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${t}`);
      const [s, n] = e;
      if (!s || !n) throw new Error(`Invalid CAIP-2 network id: ${t}`);
      return {
        chainNamespace: s,
        chainId: n
      };
    }
  };
  rn = {
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
    isRpcProviderError(t) {
      try {
        if (typeof t == "object" && t !== null) {
          const e = t, s = typeof e.message == "string", n = typeof e.code == "number";
          return s && n;
        }
        return false;
      } catch {
        return false;
      }
    },
    isUserRejectedMessage(t) {
      return t.toLowerCase().includes("user rejected") || t.toLowerCase().includes("user cancelled") || t.toLowerCase().includes("user canceled");
    },
    isUserRejectedRequestError(t) {
      if (rn.isRpcProviderError(t)) {
        const e = t.code === rn.RPC_ERROR_CODE.USER_REJECTED_REQUEST, s = t.code === rn.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        return e || s || rn.isUserRejectedMessage(t.message);
      }
      return t instanceof Error ? rn.isUserRejectedMessage(t.message) : false;
    }
  };
  class Ny extends Error {
    constructor(e, s) {
      super(s.message, {
        cause: e
      }), this.name = rn.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = s.code;
    }
  }
  class bp extends Ny {
    constructor(e) {
      super(e, {
        code: rn.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
        message: "User rejected the request"
      }), this.name = rn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
  }
  ie = {
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
  function sc(t) {
    if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${t}:connected_connector_id`;
  }
  re = {
    setItem(t, e) {
      $i() && e !== void 0 && localStorage.setItem(t, e);
    },
    getItem(t) {
      if ($i()) return localStorage.getItem(t) || void 0;
    },
    removeItem(t) {
      $i() && localStorage.removeItem(t);
    },
    clear() {
      $i() && localStorage.clear();
    }
  };
  function $i() {
    return typeof window < "u" && typeof localStorage < "u";
  }
  function aa(t, e) {
    const s = (t == null ? void 0 : t["--apkt-accent"]) ?? (t == null ? void 0 : t["--w3m-accent"]);
    return e === "light" ? {
      "--w3m-accent": s || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    } : {
      "--w3m-accent": s || "hsla(230, 100%, 67%, 1)",
      "--w3m-background": "#202020"
    };
  }
  const Sy = Symbol(), dh = Object.getPrototypeOf, ol = /* @__PURE__ */ new WeakMap(), _y = (t) => t && (ol.has(t) ? ol.get(t) : dh(t) === Object.prototype || dh(t) === Array.prototype), Ty = (t) => _y(t) && t[Sy] || null, hh = (t, e = true) => {
    ol.set(t, e);
  }, ca = {}, pd = (t) => typeof t == "object" && t !== null, xy = (t) => pd(t) && !uo.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer) && !(t instanceof Promise), Ep = (t, e) => {
    const s = al.get(t);
    if ((s == null ? void 0 : s[0]) === e) return s[1];
    const n = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
    return hh(n, true), al.set(t, [
      e,
      n
    ]), Reflect.ownKeys(t).forEach((r) => {
      if (Object.getOwnPropertyDescriptor(n, r)) return;
      const i = Reflect.get(t, r), { enumerable: o } = Reflect.getOwnPropertyDescriptor(t, r), a = {
        value: i,
        enumerable: o,
        configurable: true
      };
      if (uo.has(i)) hh(i, false);
      else if (Vn.has(i)) {
        const [c, l] = Vn.get(i);
        a.value = Ep(c, l());
      }
      Object.defineProperty(n, r, a);
    }), Object.preventExtensions(n);
  }, Oy = (t, e, s, n) => ({
    deleteProperty(r, i) {
      const o = Reflect.get(r, i);
      s(i);
      const a = Reflect.deleteProperty(r, i);
      return a && n([
        "delete",
        [
          i
        ],
        o
      ]), a;
    },
    set(r, i, o, a) {
      const c = !t() && Reflect.has(r, i), l = Reflect.get(r, i, a);
      if (c && (uh(l, o) || Xi.has(o) && uh(l, Xi.get(o)))) return true;
      s(i), pd(o) && (o = Ty(o) || o);
      const d = !Vn.has(o) && Py(o) ? Be(o) : o;
      return e(i, d), Reflect.set(r, i, d, a), n([
        "set",
        [
          i
        ],
        o,
        l
      ]), true;
    }
  }), Vn = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakSet(), al = /* @__PURE__ */ new WeakMap(), Jo = [
    1
  ], Xi = /* @__PURE__ */ new WeakMap();
  let uh = Object.is, ky = (t, e) => new Proxy(t, e), Py = xy, Ry = Ep, $y = Oy;
  Be = function(t = {}) {
    if (!pd(t)) throw new Error("object required");
    const e = Xi.get(t);
    if (e) return e;
    let s = Jo[0];
    const n = /* @__PURE__ */ new Set(), r = (m, T = ++Jo[0]) => {
      s !== T && (i = s = T, n.forEach((x) => x(m, T)));
    };
    let i = s;
    const o = (m = Jo[0]) => (i !== m && (i = m, c.forEach(([T]) => {
      const x = T[1](m);
      x > s && (s = x);
    })), s), a = (m) => (T, x) => {
      const A = [
        ...T
      ];
      A[1] = [
        m,
        ...A[1]
      ], r(A, x);
    }, c = /* @__PURE__ */ new Map(), l = (m, T) => {
      const x = !uo.has(T) && Vn.get(T);
      if (x) {
        if ((ca ? "production" : void 0) !== "production" && c.has(m)) throw new Error("prop listener already exists");
        if (n.size) {
          const A = x[2](a(m));
          c.set(m, [
            x,
            A
          ]);
        } else c.set(m, [
          x
        ]);
      }
    }, d = (m) => {
      var T;
      const x = c.get(m);
      x && (c.delete(m), (T = x[1]) == null || T.call(x));
    }, h = (m) => (n.add(m), n.size === 1 && c.forEach(([x, A], N) => {
      if ((ca ? "production" : void 0) !== "production" && A) throw new Error("remove already exists");
      const P = x[2](a(N));
      c.set(N, [
        x,
        P
      ]);
    }), () => {
      n.delete(m), n.size === 0 && c.forEach(([x, A], N) => {
        A && (A(), c.set(N, [
          x
        ]));
      });
    });
    let u = true;
    const f = $y(() => u, l, d, r), g = ky(t, f);
    Xi.set(t, g);
    const p = [
      t,
      o,
      h
    ];
    return Vn.set(g, p), Reflect.ownKeys(t).forEach((m) => {
      const T = Object.getOwnPropertyDescriptor(t, m);
      "value" in T && T.writable && (g[m] = t[m]);
    }), u = false, g;
  };
  ot = function(t, e, s) {
    const n = Vn.get(t);
    (ca ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
    let r;
    const i = [], o = n[2];
    let a = false;
    const l = o((d) => {
      i.push(d), r || (r = Promise.resolve().then(() => {
        r = void 0, a && e(i.splice(0));
      }));
    });
    return a = true, () => {
      a = false, l();
    };
  };
  function Qi(t) {
    const e = Vn.get(t);
    (ca ? "production" : void 0) !== "production" && !e && console.warn("Please use proxy object");
    const [s, n] = e;
    return Ry(s, n());
  }
  function eo(t) {
    return uo.add(t), t;
  }
  function Uy() {
    return {
      proxyStateMap: Vn,
      refSet: uo,
      snapCache: al,
      versionHolder: Jo,
      proxyCache: Xi
    };
  }
  at = function(t, e, s, n) {
    let r = t[e];
    return ot(t, () => {
      const i = t[e];
      Object.is(r, i) || s(r = i);
    });
  };
  const { proxyStateMap: By, snapCache: Dy } = Uy(), _o = (t) => By.has(t);
  function Ly(t) {
    const e = [];
    let s = 0;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = () => {
      const l = Dy.get(a), d = l == null ? void 0 : l[1];
      if (d && !r.has(d)) {
        const h = new Map(n);
        r.set(d, h);
      }
    }, o = (l) => r.get(l) || n, a = {
      data: e,
      index: s,
      epoch: 0,
      get size() {
        return _o(this) || i(), o(this).size;
      },
      get(l) {
        const h = o(this).get(l);
        if (h === void 0) {
          this.epoch;
          return;
        }
        return this.data[h];
      },
      has(l) {
        const d = o(this);
        return this.epoch, d.has(l);
      },
      set(l, d) {
        if (!_o(this)) throw new Error("Cannot perform mutations on a snapshot");
        const h = n.get(l);
        return h === void 0 ? (n.set(l, this.index), this.data[this.index++] = d) : this.data[h] = d, this.epoch++, this;
      },
      delete(l) {
        if (!_o(this)) throw new Error("Cannot perform mutations on a snapshot");
        const d = n.get(l);
        return d === void 0 ? false : (delete this.data[d], n.delete(l), this.epoch++, true);
      },
      clear() {
        if (!_o(this)) throw new Error("Cannot perform mutations on a snapshot");
        this.data.length = 0, this.index = 0, this.epoch++, n.clear();
      },
      forEach(l) {
        this.epoch, o(this).forEach((h, u) => {
          l(this.data[h], u, this);
        });
      },
      *entries() {
        this.epoch;
        const l = o(this);
        for (const [d, h] of l) yield [
          d,
          this.data[h]
        ];
      },
      *keys() {
        this.epoch;
        const l = o(this);
        for (const d of l.keys()) yield d;
      },
      *values() {
        this.epoch;
        const l = o(this);
        for (const d of l.values()) yield this.data[d];
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
    }, c = Be(a);
    return Object.defineProperties(c, {
      size: {
        enumerable: false
      },
      index: {
        enumerable: false
      },
      epoch: {
        enumerable: false
      },
      data: {
        enumerable: false
      },
      toJSON: {
        enumerable: false
      }
    }), Object.seal(c), c;
  }
  var fh = {};
  let nc, vp, My, Xo, Fy, rc;
  nc = (typeof as < "u" && typeof fh < "u" ? fh.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
  vp = [
    {
      label: "Meld.io",
      name: "meld",
      feeRange: "1-2%",
      url: "https://meldcrypto.com",
      supportedChains: [
        "eip155",
        "solana"
      ]
    }
  ];
  My = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
  ge = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: nc,
    SECURE_SITE_DASHBOARD: `${nc}/dashboard`,
    SECURE_SITE_FAVICON: `${nc}/images/favicon.png`,
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
      "eip155:42161": [
        "USD\u20AE0"
      ]
    },
    BALANCE_SUPPORTED_CHAINS: [
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
    ],
    SEND_PARAMS_SUPPORTED_CHAINS: [
      F.CHAIN.EVM
    ],
    SWAP_SUPPORTED_NETWORKS: [
      "eip155:1",
      "eip155:42161",
      "eip155:10",
      "eip155:324",
      "eip155:8453",
      "eip155:56",
      "eip155:137",
      "eip155:100",
      "eip155:43114",
      "eip155:250",
      "eip155:8217",
      "eip155:1313161554"
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: [
      F.CHAIN.EVM
    ],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
    ],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
      F.CHAIN.EVM,
      F.CHAIN.TON
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
      F.CHAIN.EVM,
      F.CHAIN.SOLANA
    ],
    DEFAULT_REMOTE_FEATURES: {
      swaps: [
        "1inch"
      ],
      onramp: [
        "meld"
      ],
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
      walletFeaturesOrder: [
        "onramp",
        "swaps",
        "receive",
        "send"
      ],
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
      $r.ConnectorExplorerIds[F.CONNECTOR_ID.COINBASE],
      $r.ConnectorExplorerIds[F.CONNECTOR_ID.COINBASE_SDK],
      $r.ConnectorExplorerIds[F.CONNECTOR_ID.BASE_ACCOUNT],
      $r.ConnectorExplorerIds[F.SOLFLARE_CONNECTOR_NAME],
      $r.ConnectorExplorerIds[F.PHANTOM_CONNECTOR_NAME],
      $r.ConnectorExplorerIds[F.BINANCE_CONNECTOR_NAME]
    ],
    DEFAULT_CONNECT_METHOD_ORDER: [
      "email",
      "social",
      "wallet"
    ]
  };
  H = {
    cacheExpiry: {
      portfolio: 3e4,
      nativeBalance: 3e4,
      ens: 3e5,
      identity: 3e5,
      transactionsHistory: 15e3,
      tokenPrice: 15e3,
      latestAppKitVersion: 6048e5,
      tonWallets: 864e5
    },
    isCacheExpired(t, e) {
      return Date.now() - t > e;
    },
    getActiveNetworkProps() {
      const t = H.getActiveNamespace(), e = H.getActiveCaipNetworkId(), s = e ? e.split(":")[1] : void 0, n = s ? isNaN(Number(s)) ? s : Number(s) : void 0;
      return {
        namespace: t,
        caipNetworkId: e,
        chainId: n
      };
    },
    setWalletConnectDeepLink({ name: t, href: e }) {
      try {
        re.setItem(ie.DEEPLINK_CHOICE, JSON.stringify({
          href: e,
          name: t
        }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    getWalletConnectDeepLink() {
      try {
        const t = re.getItem(ie.DEEPLINK_CHOICE);
        if (t) return JSON.parse(t);
      } catch {
        console.info("Unable to get WalletConnect deep link");
      }
    },
    deleteWalletConnectDeepLink() {
      try {
        re.removeItem(ie.DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to delete WalletConnect deep link");
      }
    },
    setActiveNamespace(t) {
      try {
        re.setItem(ie.ACTIVE_NAMESPACE, t);
      } catch {
        console.info("Unable to set active namespace");
      }
    },
    setActiveCaipNetworkId(t) {
      try {
        re.setItem(ie.ACTIVE_CAIP_NETWORK_ID, t), H.setActiveNamespace(t.split(":")[0]);
      } catch {
        console.info("Unable to set active caip network id");
      }
    },
    getActiveCaipNetworkId() {
      try {
        return re.getItem(ie.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to get active caip network id");
        return;
      }
    },
    deleteActiveCaipNetworkId() {
      try {
        re.removeItem(ie.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to delete active caip network id");
      }
    },
    deleteConnectedConnectorId(t) {
      try {
        const e = sc(t);
        re.removeItem(e);
      } catch {
        console.info("Unable to delete connected connector id");
      }
    },
    setAppKitRecent(t) {
      try {
        const e = H.getRecentWallets();
        e.find((n) => n.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), re.setItem(ie.RECENT_WALLETS, JSON.stringify(e)), re.setItem(ie.RECENT_WALLET, JSON.stringify(t)));
      } catch {
        console.info("Unable to set AppKit recent");
      }
    },
    getRecentWallets() {
      try {
        const t = re.getItem(ie.RECENT_WALLETS);
        return t ? JSON.parse(t) : [];
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return [];
    },
    getRecentWallet() {
      try {
        const t = re.getItem(ie.RECENT_WALLET);
        return t ? JSON.parse(t) : null;
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return null;
    },
    deleteRecentWallet() {
      try {
        re.removeItem(ie.RECENT_WALLET);
      } catch {
        console.info("Unable to delete AppKit recent");
      }
    },
    setConnectedConnectorId(t, e) {
      try {
        const s = sc(t);
        re.setItem(s, e);
      } catch {
        console.info("Unable to set Connected Connector Id");
      }
    },
    getActiveNamespace() {
      try {
        return re.getItem(ie.ACTIVE_NAMESPACE);
      } catch {
        console.info("Unable to get active namespace");
      }
    },
    getConnectedConnectorId(t) {
      if (t) try {
        const e = sc(t);
        return re.getItem(e);
      } catch {
        console.info("Unable to get connected connector id in namespace", t);
      }
    },
    setConnectedSocialProvider(t) {
      try {
        re.setItem(ie.CONNECTED_SOCIAL, t);
      } catch {
        console.info("Unable to set connected social provider");
      }
    },
    getConnectedSocialProvider() {
      try {
        return re.getItem(ie.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to get connected social provider");
      }
    },
    deleteConnectedSocialProvider() {
      try {
        re.removeItem(ie.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to delete connected social provider");
      }
    },
    getConnectedSocialUsername() {
      try {
        return re.getItem(ie.CONNECTED_SOCIAL_USERNAME);
      } catch {
        console.info("Unable to get connected social username");
      }
    },
    getStoredActiveCaipNetworkId() {
      var _a2, _b2;
      return (_b2 = (_a2 = re.getItem(ie.ACTIVE_CAIP_NETWORK_ID)) == null ? void 0 : _a2.split(":")) == null ? void 0 : _b2[1];
    },
    setConnectionStatus(t) {
      try {
        re.setItem(ie.CONNECTION_STATUS, t);
      } catch {
        console.info("Unable to set connection status");
      }
    },
    getConnectionStatus() {
      try {
        return re.getItem(ie.CONNECTION_STATUS);
      } catch {
        return;
      }
    },
    getConnectedNamespaces() {
      try {
        const t = re.getItem(ie.CONNECTED_NAMESPACES);
        return (t == null ? void 0 : t.length) ? t.split(",") : [];
      } catch {
        return [];
      }
    },
    setConnectedNamespaces(t) {
      try {
        const e = Array.from(new Set(t));
        re.setItem(ie.CONNECTED_NAMESPACES, e.join(","));
      } catch {
        console.info("Unable to set namespaces in storage");
      }
    },
    addConnectedNamespace(t) {
      try {
        const e = H.getConnectedNamespaces();
        e.includes(t) || (e.push(t), H.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to add connected namespace");
      }
    },
    removeConnectedNamespace(t) {
      try {
        const e = H.getConnectedNamespaces(), s = e.indexOf(t);
        s > -1 && (e.splice(s, 1), H.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to remove connected namespace");
      }
    },
    getTelegramSocialProvider() {
      try {
        return re.getItem(ie.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        return console.info("Unable to get telegram social provider"), null;
      }
    },
    setTelegramSocialProvider(t) {
      try {
        re.setItem(ie.TELEGRAM_SOCIAL_PROVIDER, t);
      } catch {
        console.info("Unable to set telegram social provider");
      }
    },
    removeTelegramSocialProvider() {
      try {
        re.removeItem(ie.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        console.info("Unable to remove telegram social provider");
      }
    },
    getBalanceCache() {
      let t = {};
      try {
        const e = re.getItem(ie.PORTFOLIO_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromBalanceCache(t) {
      try {
        const e = H.getBalanceCache();
        re.setItem(ie.PORTFOLIO_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getBalanceCacheForCaipAddress(t) {
      try {
        const s = H.getBalanceCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.portfolio)) return s.balance;
        H.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateBalanceCache(t) {
      try {
        const e = H.getBalanceCache();
        e[t.caipAddress] = t, re.setItem(ie.PORTFOLIO_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getNativeBalanceCache() {
      let t = {};
      try {
        const e = re.getItem(ie.NATIVE_BALANCE_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromNativeBalanceCache(t) {
      try {
        const e = H.getBalanceCache();
        re.setItem(ie.NATIVE_BALANCE_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getNativeBalanceCacheForCaipAddress(t) {
      try {
        const s = H.getNativeBalanceCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.nativeBalance)) return s;
        console.info("Discarding cache for address", t), H.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateNativeBalanceCache(t) {
      try {
        const e = H.getNativeBalanceCache();
        e[t.caipAddress] = t, re.setItem(ie.NATIVE_BALANCE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getEnsCache() {
      let t = {};
      try {
        const e = re.getItem(ie.ENS_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get ens name cache");
      }
      return t;
    },
    getEnsFromCacheForAddress(t) {
      try {
        const s = H.getEnsCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.ens)) return s.ens;
        H.removeEnsFromCache(t);
      } catch {
        console.info("Unable to get ens name from cache", t);
      }
    },
    updateEnsCache(t) {
      try {
        const e = H.getEnsCache();
        e[t.address] = t, re.setItem(ie.ENS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ens name cache", t);
      }
    },
    removeEnsFromCache(t) {
      try {
        const e = H.getEnsCache();
        re.setItem(ie.ENS_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove ens name from cache", t);
      }
    },
    getIdentityCache() {
      let t = {};
      try {
        const e = re.getItem(ie.IDENTITY_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get identity cache");
      }
      return t;
    },
    getIdentityFromCacheForAddress(t) {
      try {
        const s = H.getIdentityCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.identity)) return s.identity;
        H.removeIdentityFromCache(t);
      } catch {
        console.info("Unable to get identity from cache", t);
      }
    },
    updateIdentityCache(t) {
      try {
        const e = H.getIdentityCache();
        e[t.address] = {
          identity: t.identity,
          timestamp: t.timestamp
        }, re.setItem(ie.IDENTITY_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update identity cache", t);
      }
    },
    removeIdentityFromCache(t) {
      try {
        const e = H.getIdentityCache();
        re.setItem(ie.IDENTITY_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove identity from cache", t);
      }
    },
    getTonWalletsCache() {
      try {
        const t = re.getItem(ie.TON_WALLETS_CACHE), e = t ? JSON.parse(t) : void 0;
        if (e && !this.isCacheExpired(e.timestamp, this.cacheExpiry.tonWallets)) return e;
        H.removeTonWalletsCache();
      } catch {
        console.info("Unable to get ton wallets cache");
      }
    },
    updateTonWalletsCache(t) {
      try {
        const e = H.getTonWalletsCache() || {
          timestamp: 0,
          wallets: []
        };
        e.timestamp = (/* @__PURE__ */ new Date()).getTime(), e.wallets = t, re.setItem(ie.TON_WALLETS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ton wallets cache", t);
      }
    },
    removeTonWalletsCache() {
      try {
        re.removeItem(ie.TON_WALLETS_CACHE);
      } catch {
        console.info("Unable to remove ton wallets cache");
      }
    },
    clearAddressCache() {
      try {
        re.removeItem(ie.PORTFOLIO_CACHE), re.removeItem(ie.NATIVE_BALANCE_CACHE), re.removeItem(ie.ENS_CACHE), re.removeItem(ie.IDENTITY_CACHE), re.removeItem(ie.HISTORY_TRANSACTIONS_CACHE);
      } catch {
        console.info("Unable to clear address cache");
      }
    },
    setPreferredAccountTypes(t) {
      try {
        re.setItem(ie.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
      } catch {
        console.info("Unable to set preferred account types", t);
      }
    },
    getPreferredAccountTypes() {
      try {
        const t = re.getItem(ie.PREFERRED_ACCOUNT_TYPES);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get preferred account types");
      }
      return {};
    },
    setConnections(t, e) {
      try {
        const s = H.getConnections(), n = s[e] ?? [], r = /* @__PURE__ */ new Map();
        for (const o of n) r.set(o.connectorId, {
          ...o
        });
        for (const o of t) {
          const a = r.get(o.connectorId), c = o.connectorId === F.CONNECTOR_ID.AUTH;
          if (a && !c) {
            const l = new Set(a.accounts.map((h) => h.address.toLowerCase())), d = o.accounts.filter((h) => !l.has(h.address.toLowerCase()));
            a.accounts.push(...d);
          } else r.set(o.connectorId, {
            ...o
          });
        }
        const i = {
          ...s,
          [e]: Array.from(r.values())
        };
        re.setItem(ie.CONNECTIONS, JSON.stringify(i));
      } catch (s) {
        console.error("Unable to sync connections to storage", s);
      }
    },
    getConnections() {
      try {
        const t = re.getItem(ie.CONNECTIONS);
        return t ? JSON.parse(t) : {};
      } catch (t) {
        return console.error("Unable to get connections from storage", t), {};
      }
    },
    deleteAddressFromConnection({ connectorId: t, address: e, namespace: s }) {
      try {
        const n = H.getConnections(), r = n[s] ?? [], i = new Map(r.map((a) => [
          a.connectorId,
          a
        ])), o = i.get(t);
        o && (o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase()).length === 0 ? i.delete(t) : i.set(t, {
          ...o,
          accounts: o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase())
        })), re.setItem(ie.CONNECTIONS, JSON.stringify({
          ...n,
          [s]: Array.from(i.values())
        }));
      } catch {
        console.error(`Unable to remove address "${e}" from connector "${t}" in namespace "${s}"`);
      }
    },
    getDisconnectedConnectorIds() {
      try {
        const t = re.getItem(ie.DISCONNECTED_CONNECTOR_IDS);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get disconnected connector ids");
      }
      return {};
    },
    addDisconnectedConnectorId(t, e) {
      try {
        const s = H.getDisconnectedConnectorIds(), n = s[e] ?? [];
        n.push(t), re.setItem(ie.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...s,
          [e]: Array.from(new Set(n))
        }));
      } catch {
        console.error(`Unable to set disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    removeDisconnectedConnectorId(t, e) {
      try {
        const s = H.getDisconnectedConnectorIds();
        let n = s[e] ?? [];
        n = n.filter((r) => r.toLowerCase() !== t.toLowerCase()), re.setItem(ie.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...s,
          [e]: Array.from(new Set(n))
        }));
      } catch {
        console.error(`Unable to remove disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    isConnectorDisconnected(t, e) {
      try {
        return (H.getDisconnectedConnectorIds()[e] ?? []).some((r) => r.toLowerCase() === t.toLowerCase());
      } catch {
        console.info(`Unable to get disconnected connector id "${t}" for namespace "${e}"`);
      }
      return false;
    },
    getTransactionsCache() {
      try {
        const t = re.getItem(ie.HISTORY_TRANSACTIONS_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get transactions cache");
      }
      return {};
    },
    getTransactionsCacheForAddress({ address: t, chainId: e = "" }) {
      var _a2;
      try {
        const n = (_a2 = H.getTransactionsCache()[t]) == null ? void 0 : _a2[e];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.transactionsHistory)) return n.transactions;
        H.removeTransactionsCache({
          address: t,
          chainId: e
        });
      } catch {
        console.info("Unable to get transactions cache");
      }
    },
    updateTransactionsCache({ address: t, chainId: e = "", timestamp: s, transactions: n }) {
      try {
        const r = H.getTransactionsCache();
        r[t] = {
          ...r[t],
          [e]: {
            timestamp: s,
            transactions: n
          }
        }, re.setItem(ie.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(r));
      } catch {
        console.info("Unable to update transactions cache", {
          address: t,
          chainId: e,
          timestamp: s,
          transactions: n
        });
      }
    },
    removeTransactionsCache({ address: t, chainId: e }) {
      try {
        const s = H.getTransactionsCache(), n = (s == null ? void 0 : s[t]) || {}, { [e]: r, ...i } = n;
        re.setItem(ie.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
          ...s,
          [t]: i
        }));
      } catch {
        console.info("Unable to remove transactions cache", {
          address: t,
          chainId: e
        });
      }
    },
    getTokenPriceCache() {
      try {
        const t = re.getItem(ie.TOKEN_PRICE_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get token price cache");
      }
      return {};
    },
    getTokenPriceCacheForAddresses(t) {
      try {
        const s = H.getTokenPriceCache()[t.join(",")];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.tokenPrice)) return s.tokenPrice;
        H.removeTokenPriceCache(t);
      } catch {
        console.info("Unable to get token price cache for addresses", t);
      }
    },
    updateTokenPriceCache(t) {
      try {
        const e = H.getTokenPriceCache();
        e[t.addresses.join(",")] = {
          timestamp: t.timestamp,
          tokenPrice: t.tokenPrice
        }, re.setItem(ie.TOKEN_PRICE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update token price cache", t);
      }
    },
    removeTokenPriceCache(t) {
      try {
        const e = H.getTokenPriceCache();
        re.setItem(ie.TOKEN_PRICE_CACHE, JSON.stringify({
          ...e,
          [t.join(",")]: void 0
        }));
      } catch {
        console.info("Unable to remove token price cache", t);
      }
    },
    getLatestAppKitVersion() {
      try {
        const t = this.getLatestAppKitVersionCache(), e = t == null ? void 0 : t.version;
        return e && !this.isCacheExpired(t.timestamp, this.cacheExpiry.latestAppKitVersion) ? e : void 0;
      } catch {
        console.info("Unable to get latest AppKit version");
      }
    },
    getLatestAppKitVersionCache() {
      try {
        const t = re.getItem(ie.LATEST_APPKIT_VERSION);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get latest AppKit version cache");
      }
      return {};
    },
    updateLatestAppKitVersion(t) {
      try {
        const e = H.getLatestAppKitVersionCache();
        e.timestamp = t.timestamp, e.version = t.version, re.setItem(ie.LATEST_APPKIT_VERSION, JSON.stringify(e));
      } catch {
        console.info("Unable to update latest AppKit version on local storage", t);
      }
    }
  };
  ee = {
    getWindow() {
      if (!(typeof window > "u")) return window;
    },
    isMobile() {
      var _a2;
      return this.isClient() ? !!((window == null ? void 0 : window.matchMedia) && typeof window.matchMedia == "function" && ((_a2 = window.matchMedia("(pointer:coarse)")) == null ? void 0 : _a2.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : false;
    },
    checkCaipNetwork(t, e = "") {
      return t == null ? void 0 : t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase());
    },
    isAndroid() {
      if (!this.isMobile()) return false;
      const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return ee.isMobile() && t.includes("android");
    },
    isIos() {
      if (!this.isMobile()) return false;
      const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return t.includes("iphone") || t.includes("ipad");
    },
    isSafari() {
      return this.isClient() ? (window == null ? void 0 : window.navigator.userAgent.toLowerCase()).includes("safari") : false;
    },
    isClient() {
      return typeof window < "u";
    },
    isPairingExpired(t) {
      return t ? t - Date.now() <= ge.TEN_SEC_MS : true;
    },
    isAllowedRetry(t, e = ge.ONE_SEC_MS) {
      return Date.now() - t >= e;
    },
    copyToClopboard(t) {
      navigator.clipboard.writeText(t);
    },
    isIframe() {
      try {
        return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
      } catch {
        return false;
      }
    },
    isSafeApp() {
      var _a2, _b2;
      if (ee.isClient() && window.self !== window.top) try {
        const t = (_b2 = (_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.ancestorOrigins) == null ? void 0 : _b2[0], e = "https://app.safe.global";
        if (t) {
          const s = new URL(t), n = new URL(e);
          return s.hostname === n.hostname;
        }
      } catch {
        return false;
      }
      return false;
    },
    getPairingExpiry() {
      return Date.now() + ge.FOUR_MINUTES_MS;
    },
    getNetworkId(t) {
      return t == null ? void 0 : t.split(":")[1];
    },
    getPlainAddress(t) {
      return t == null ? void 0 : t.split(":")[2];
    },
    async wait(t) {
      return new Promise((e) => {
        setTimeout(e, t);
      });
    },
    debounce(t, e = 500) {
      let s;
      return (...n) => {
        function r() {
          t(...n);
        }
        s && clearTimeout(s), s = setTimeout(r, e);
      };
    },
    isHttpUrl(t) {
      return t.startsWith("http://") || t.startsWith("https://");
    },
    formatNativeUrl(t, e, s = null) {
      if (ee.isHttpUrl(t)) return this.formatUniversalUrl(t, e);
      let n = t, r = s;
      n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), r && !(r == null ? void 0 : r.endsWith("/")) && (r = `${r}/`), this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
      const i = encodeURIComponent(e);
      return {
        redirect: `${n}wc?uri=${i}`,
        redirectUniversalLink: r ? `${r}wc?uri=${i}` : void 0,
        href: n
      };
    },
    formatUniversalUrl(t, e) {
      if (!ee.isHttpUrl(t)) return this.formatNativeUrl(t, e);
      let s = t;
      s.endsWith("/") || (s = `${s}/`);
      const n = encodeURIComponent(e);
      return {
        redirect: `${s}wc?uri=${n}`,
        href: s
      };
    },
    getOpenTargetForPlatform(t) {
      return t === "popupWindow" ? t : this.isTelegram() ? H.getTelegramSocialProvider() ? "_top" : "_blank" : t;
    },
    openHref(t, e, s) {
      window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
    },
    returnOpenHref(t, e, s) {
      return window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
    },
    isTelegram() {
      return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
    },
    isPWA() {
      var _a2, _b2;
      if (typeof window > "u") return false;
      const t = (window == null ? void 0 : window.matchMedia) && typeof window.matchMedia == "function" ? (_a2 = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : _a2.matches : false, e = (_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.standalone;
      return !!(t || e);
    },
    async preloadImage(t) {
      const e = new Promise((s, n) => {
        const r = new Image();
        r.onload = s, r.onerror = n, r.crossOrigin = "anonymous", r.src = t;
      });
      return Promise.race([
        e,
        ee.wait(2e3)
      ]);
    },
    parseBalance(t, e) {
      let s = "0.000";
      if (typeof t == "string") {
        const c = Number(t);
        if (!isNaN(c)) {
          const l = (Math.floor(c * 1e3) / 1e3).toFixed(3);
          l && (s = l);
        }
      }
      const [n, r] = s.split("."), i = n || "0", o = r || "000";
      return {
        formattedText: `${i}.${o}${e ? ` ${e}` : ""}`,
        value: i,
        decimals: o,
        symbol: e
      };
    },
    getApiUrl() {
      return F.W3M_API_URL;
    },
    getBlockchainApiUrl() {
      return F.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
      return F.PULSE_API_URL;
    },
    getUUID() {
      return (crypto == null ? void 0 : crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
        const e = Math.random() * 16 | 0;
        return (t === "x" ? e : e & 3 | 8).toString(16);
      });
    },
    parseError(t) {
      var _a2, _b2;
      return typeof t == "string" ? t : typeof ((_b2 = (_a2 = t == null ? void 0 : t.issues) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.message) == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error";
    },
    sortRequestedNetworks(t, e = []) {
      const s = {};
      return e && t && (t.forEach((n, r) => {
        s[n] = r;
      }), e.sort((n, r) => {
        const i = s[n.id], o = s[r.id];
        return i !== void 0 && o !== void 0 ? i - o : i !== void 0 ? -1 : o !== void 0 ? 1 : 0;
      })), e;
    },
    calculateBalance(t) {
      let e = 0;
      for (const s of t) e += s.value ?? 0;
      return e;
    },
    formatTokenBalance(t) {
      const e = t.toFixed(2), [s, n] = e.split(".");
      return {
        dollars: s,
        pennies: n
      };
    },
    isAddress(t, e = "eip155") {
      switch (e) {
        case "eip155":
          if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
            if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t) || /^(?:0x)?[0-9A-F]{40}$/iu.test(t)) return true;
          } else return false;
          return false;
        case "solana":
          return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
        case "bip122": {
          const s = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(t), n = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(t), r = /^bc1[a-z0-9]{39,87}$/u.test(t), i = /^bc1p[a-z0-9]{58}$/u.test(t);
          return s || n || r || i;
        }
        default:
          return false;
      }
    },
    uniqueBy(t, e) {
      const s = /* @__PURE__ */ new Set();
      return t.filter((n) => {
        const r = n[e];
        return s.has(r) ? false : (s.add(r), true);
      });
    },
    generateSdkVersion(t, e, s) {
      const r = t.length === 0 ? ge.ADAPTER_TYPES.UNIVERSAL : t.map((i) => i.adapterType).join(",");
      return `${e}-${r}-${s}`;
    },
    createAccount(t, e, s, n, r) {
      return {
        namespace: t,
        address: e,
        type: s,
        publicKey: n,
        path: r
      };
    },
    isCaipAddress(t) {
      if (typeof t != "string") return false;
      const e = t.split(":"), s = e[0];
      return e.filter(Boolean).length === 3 && s in F.CHAIN_NAME_MAP;
    },
    getAccount(t) {
      return t ? typeof t == "string" ? {
        address: t,
        chainId: void 0
      } : {
        address: t.address,
        chainId: t.chainId
      } : {
        address: void 0,
        chainId: void 0
      };
    },
    isMac() {
      const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return t.includes("macintosh") && !t.includes("safari");
    },
    formatTelegramSocialLoginUrl(t) {
      const e = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, s = "state=";
      if (new URL(t).host === "auth.magic.link") {
        const r = "provider_authorization_url=", i = t.substring(t.indexOf(r) + r.length), o = this.injectIntoUrl(decodeURIComponent(i), s, e);
        return t.replace(i, encodeURIComponent(o));
      }
      return this.injectIntoUrl(t, s, e);
    },
    injectIntoUrl(t, e, s) {
      const n = t.indexOf(e);
      if (n === -1) throw new Error(`${e} parameter not found in the URL: ${t}`);
      const r = t.indexOf("&", n), i = e.length, o = r !== -1 ? r : t.length, a = t.substring(0, n + i), c = t.substring(n + i, o), l = t.substring(r), d = c + s;
      return a + d + l;
    },
    isNumber(t) {
      return typeof t != "number" && typeof t != "string" ? false : !isNaN(Number(t));
    }
  };
  Xo = {
    STORAGE_KEY: "@appkit-wallet/",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
  };
  on = {
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
  Fy = {
    set(t, e) {
      rc.isClient && localStorage.setItem(`${Xo.STORAGE_KEY}${t}`, e);
    },
    get(t) {
      return rc.isClient ? localStorage.getItem(`${Xo.STORAGE_KEY}${t}`) : null;
    },
    delete(t, e) {
      rc.isClient && (e ? localStorage.removeItem(t) : localStorage.removeItem(`${Xo.STORAGE_KEY}${t}`));
    }
  };
  rc = {
    isClient: typeof window < "u"
  };
  async function yi(...t) {
    const e = await fetch(...t);
    if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, {
      cause: e
    });
    return e;
  }
  fo = class {
    constructor({ baseUrl: e, clientId: s }) {
      this.baseUrl = e, this.clientId = s;
    }
    async get({ headers: e, signal: s, cache: n, ...r }) {
      const i = this.createUrl(r);
      return (await yi(i, {
        method: "GET",
        headers: e,
        signal: s,
        cache: n
      })).json();
    }
    async getBlob({ headers: e, signal: s, ...n }) {
      const r = this.createUrl(n);
      return (await yi(r, {
        method: "GET",
        headers: e,
        signal: s
      })).blob();
    }
    async post({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await yi(i, {
        method: "POST",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async put({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await yi(i, {
        method: "PUT",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async delete({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await yi(i, {
        method: "DELETE",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    createUrl({ path: e, params: s }) {
      const n = new URL(e, this.baseUrl);
      return s && Object.entries(s).forEach(([r, i]) => {
        i && n.searchParams.append(r, i);
      }), this.clientId && n.searchParams.append("clientId", this.clientId), n;
    }
    sendBeacon({ body: e, ...s }) {
      const n = this.createUrl(s);
      return navigator.sendBeacon(n.toString(), e ? JSON.stringify(e) : void 0);
    }
  };
  let cl, oe, ir, Ve, qy, jy, Cp, Et, Wy, Hy, Vy, zy, mn, Ky;
  cl = {
    getFeatureValue(t, e) {
      const s = e == null ? void 0 : e[t];
      return s === void 0 ? ge.DEFAULT_FEATURES[t] : s;
    },
    filterSocialsByPlatform(t) {
      if (!t || !t.length) return t;
      let e = t;
      return ee.isTelegram() && (ee.isIos() && (e = e.filter((s) => s !== "google")), ee.isMac() && (e = e.filter((s) => s !== "x")), ee.isAndroid() && (e = e.filter((s) => ![
        "facebook",
        "x"
      ].includes(s)))), ee.isMobile() && (e = e.filter((s) => s !== "facebook")), e;
    },
    isSocialsEnabled() {
      var _a2, _b2, _c2, _d3;
      return Array.isArray((_a2 = q.state.features) == null ? void 0 : _a2.socials) && ((_b2 = q.state.features) == null ? void 0 : _b2.socials.length) > 0 || Array.isArray((_c2 = q.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d3 = q.state.remoteFeatures) == null ? void 0 : _d3.socials.length) > 0;
    },
    isEmailEnabled() {
      var _a2, _b2;
      return !!(((_a2 = q.state.features) == null ? void 0 : _a2.email) || ((_b2 = q.state.remoteFeatures) == null ? void 0 : _b2.email));
    }
  };
  oe = Be({
    features: ge.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: ge.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: "all"
  });
  q = {
    state: oe,
    subscribeKey(t, e) {
      return at(oe, t, e);
    },
    setOptions(t) {
      Object.assign(oe, t);
    },
    setRemoteFeatures(t) {
      var _a2, _b2;
      if (!t) return;
      const e = {
        ...oe.remoteFeatures,
        ...t
      };
      oe.remoteFeatures = e, ((_a2 = oe.remoteFeatures) == null ? void 0 : _a2.socials) && (oe.remoteFeatures.socials = cl.filterSocialsByPlatform(oe.remoteFeatures.socials)), ((_b2 = oe.features) == null ? void 0 : _b2.pay) && (oe.remoteFeatures.email = false, oe.remoteFeatures.socials = false);
    },
    setFeatures(t) {
      var _a2;
      if (!t) return;
      oe.features || (oe.features = ge.DEFAULT_FEATURES);
      const e = {
        ...oe.features,
        ...t
      };
      oe.features = e, ((_a2 = oe.features) == null ? void 0 : _a2.pay) && oe.remoteFeatures && (oe.remoteFeatures.email = false, oe.remoteFeatures.socials = false);
    },
    setProjectId(t) {
      oe.projectId = t;
    },
    setCustomRpcUrls(t) {
      oe.customRpcUrls = t;
    },
    setAllWallets(t) {
      oe.allWallets = t;
    },
    setIncludeWalletIds(t) {
      oe.includeWalletIds = t;
    },
    setExcludeWalletIds(t) {
      oe.excludeWalletIds = t;
    },
    setFeaturedWalletIds(t) {
      oe.featuredWalletIds = t;
    },
    setTokens(t) {
      oe.tokens = t;
    },
    setTermsConditionsUrl(t) {
      oe.termsConditionsUrl = t;
    },
    setPrivacyPolicyUrl(t) {
      oe.privacyPolicyUrl = t;
    },
    setCustomWallets(t) {
      oe.customWallets = t;
    },
    setIsSiweEnabled(t) {
      oe.isSiweEnabled = t;
    },
    setIsUniversalProvider(t) {
      oe.isUniversalProvider = t;
    },
    setSdkVersion(t) {
      oe.sdkVersion = t;
    },
    setMetadata(t) {
      oe.metadata = t;
    },
    setDisableAppend(t) {
      oe.disableAppend = t;
    },
    setEIP6963Enabled(t) {
      oe.enableEIP6963 = t;
    },
    setDebug(t) {
      oe.debug = t;
    },
    setEnableWalletGuide(t) {
      oe.enableWalletGuide = t;
    },
    setEnableAuthLogger(t) {
      oe.enableAuthLogger = t;
    },
    setEnableWallets(t) {
      oe.enableWallets = t;
    },
    setPreferUniversalLinks(t) {
      oe.experimental_preferUniversalLinks = t;
    },
    setSIWX(t) {
      if (t) for (const [e, s] of Object.entries(ge.SIWX_DEFAULTS)) t[e] ?? (t[e] = s);
      oe.siwx = t;
    },
    setConnectMethodsOrder(t) {
      oe.features = {
        ...oe.features,
        connectMethodsOrder: t
      };
    },
    setWalletFeaturesOrder(t) {
      oe.features = {
        ...oe.features,
        walletFeaturesOrder: t
      };
    },
    setSocialsOrder(t) {
      oe.remoteFeatures = {
        ...oe.remoteFeatures,
        socials: t
      };
    },
    setCollapseWallets(t) {
      oe.features = {
        ...oe.features,
        collapseWallets: t
      };
    },
    setEnableEmbedded(t) {
      oe.enableEmbedded = t;
    },
    setAllowUnsupportedChain(t) {
      oe.allowUnsupportedChain = t;
    },
    setManualWCControl(t) {
      oe.manualWCControl = t;
    },
    setEnableNetworkSwitch(t) {
      oe.enableNetworkSwitch = t;
    },
    setEnableMobileFullScreen(t) {
      oe.enableMobileFullScreen = ee.isMobile() && t;
    },
    setEnableReconnect(t) {
      oe.enableReconnect = t;
    },
    setCoinbasePreference(t) {
      oe.coinbasePreference = t;
    },
    setDefaultAccountTypes(t = {}) {
      Object.entries(t).forEach(([e, s]) => {
        s && (oe.defaultAccountTypes[e] = s);
      });
    },
    setUniversalProviderConfigOverride(t) {
      oe.universalProviderConfigOverride = t;
    },
    getUniversalProviderConfigOverride() {
      return oe.universalProviderConfigOverride;
    },
    getSnapshot() {
      return Qi(oe);
    }
  };
  ir = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: false,
    autoClose: true
  });
  Ve = Be({
    ...ir
  });
  qy = {
    state: Ve,
    subscribeKey(t, e) {
      return at(Ve, t, e);
    },
    showLoading(t, e = {}) {
      this._showMessage({
        message: t,
        variant: "loading",
        ...e
      });
    },
    showSuccess(t) {
      this._showMessage({
        message: t,
        variant: "success"
      });
    },
    showSvg(t, e) {
      this._showMessage({
        message: t,
        svg: e
      });
    },
    showError(t) {
      const e = ee.parseError(t);
      this._showMessage({
        message: e,
        variant: "error"
      });
    },
    hide() {
      Ve.message = ir.message, Ve.variant = ir.variant, Ve.svg = ir.svg, Ve.open = ir.open, Ve.autoClose = ir.autoClose;
    },
    _showMessage({ message: t, svg: e, variant: s = "success", autoClose: n = ir.autoClose }) {
      Ve.open ? (Ve.open = false, setTimeout(() => {
        Ve.message = t, Ve.variant = s, Ve.svg = e, Ve.open = true, Ve.autoClose = n;
      }, 150)) : (Ve.message = t, Ve.variant = s, Ve.svg = e, Ve.open = true, Ve.autoClose = n);
    }
  };
  Us = qy;
  jy = {
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
  Cp = ee.getBlockchainApiUrl();
  Et = Be({
    clientId: null,
    api: new fo({
      baseUrl: Cp,
      clientId: null
    }),
    supportedChains: {
      http: [],
      ws: []
    }
  });
  le = {
    state: Et,
    async get(t) {
      const { st: e, sv: s } = le.getSdkProperties(), n = q.state.projectId, r = {
        ...t.params || {},
        st: e,
        sv: s,
        projectId: n
      };
      return Et.api.get({
        ...t,
        params: r
      });
    },
    getSdkProperties() {
      const { sdkType: t, sdkVersion: e } = q.state;
      return {
        st: t || "unknown",
        sv: e || "unknown"
      };
    },
    async isNetworkSupported(t) {
      if (!t) return false;
      try {
        Et.supportedChains.http.length || await le.getSupportedNetworks();
      } catch {
        return false;
      }
      return Et.supportedChains.http.includes(t);
    },
    async getSupportedNetworks() {
      try {
        const t = await le.get({
          path: "v1/supported-chains"
        });
        return Et.supportedChains = t, t;
      } catch {
        return Et.supportedChains;
      }
    },
    async fetchIdentity({ address: t }) {
      const e = H.getIdentityFromCacheForAddress(t);
      if (e) return e;
      const s = await le.get({
        path: `/v1/identity/${t}`,
        params: {
          sender: b.state.activeCaipAddress ? ee.getPlainAddress(b.state.activeCaipAddress) : void 0
        }
      });
      return H.updateIdentityCache({
        address: t,
        identity: s,
        timestamp: Date.now()
      }), s;
    },
    async fetchTransactions({ account: t, cursor: e, signal: s, cache: n, chainId: r }) {
      var _a2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        data: [],
        next: void 0
      };
      const o = H.getTransactionsCacheForAddress({
        address: t,
        chainId: r
      });
      if (o) return o;
      const a = await le.get({
        path: `/v1/account/${t}/history`,
        params: {
          cursor: e,
          chainId: r
        },
        signal: s,
        cache: n
      });
      return H.updateTransactionsCache({
        address: t,
        chainId: r,
        timestamp: Date.now(),
        transactions: a
      }), a;
    },
    async fetchSwapQuote({ amount: t, userAddress: e, from: s, to: n, gasPrice: r }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: "/v1/convert/quotes",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          amount: t,
          userAddress: e,
          from: s,
          to: n,
          gasPrice: r
        }
      }) : {
        quotes: []
      };
    },
    async fetchSwapTokens({ chainId: t }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: "/v1/convert/tokens",
        params: {
          chainId: t
        }
      }) : {
        tokens: []
      };
    },
    async getAddressBalance({ caipNetworkId: t, address: e }) {
      return Et.api.post({
        path: `/v1?chainId=${t}&projectId=${q.state.projectId}`,
        body: {
          id: "1",
          jsonrpc: "2.0",
          method: "getAddressBalance",
          params: {
            address: e
          }
        }
      }).then((s) => s.result);
    },
    async fetchTokenPrice({ addresses: t, caipNetworkId: e = ((_a2) => (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)() }) {
      if (!await le.isNetworkSupported(e)) return {
        fungibles: []
      };
      const n = H.getTokenPriceCacheForAddresses(t);
      if (n) return n;
      const r = await Et.api.post({
        path: "/v1/fungible/price",
        body: {
          currency: "usd",
          addresses: t,
          projectId: q.state.projectId
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      return H.updateTokenPriceCache({
        addresses: t,
        timestamp: Date.now(),
        tokenPrice: r
      }), r;
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: "/v1/convert/allowance",
        params: {
          tokenAddress: t,
          userAddress: e
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        allowance: "0"
      };
    },
    async fetchGasPrice({ chainId: t }) {
      var _a2;
      const { st: e, sv: s } = le.getSdkProperties();
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Gas Price");
      return le.get({
        path: "/v1/convert/gas-price",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          chainId: t,
          st: e,
          sv: s
        }
      });
    },
    async generateSwapCalldata({ amount: t, from: e, to: s, userAddress: n, disableEstimate: r }) {
      var _a2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return Et.api.post({
        path: "/v1/convert/build-transaction",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          amount: t,
          eip155: {
            slippage: ge.CONVERT_SLIPPAGE_TOLERANCE
          },
          projectId: q.state.projectId,
          from: e,
          to: s,
          userAddress: n,
          disableEstimate: r
        }
      });
    },
    async generateApproveCalldata({ from: t, to: e, userAddress: s }) {
      var _a2;
      const { st: n, sv: r } = le.getSdkProperties();
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return le.get({
        path: "/v1/convert/build-approve",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          userAddress: s,
          from: t,
          to: e,
          st: n,
          sv: r
        }
      });
    },
    async getBalance(t, e, s) {
      var _a2;
      const { st: n, sv: r } = le.getSdkProperties();
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return Us.showError("Token Balance Unavailable"), {
        balances: []
      };
      const o = `${e}:${t}`, a = H.getBalanceCacheForCaipAddress(o);
      if (a) return a;
      const c = await le.get({
        path: `/v1/account/${t}/balance`,
        params: {
          currency: "usd",
          chainId: e,
          forceUpdate: s,
          st: n,
          sv: r
        }
      });
      return H.updateBalanceCache({
        caipAddress: o,
        balance: c,
        timestamp: Date.now()
      }), c;
    },
    async lookupEnsName(t) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: `/v1/profile/account/${t}`,
        params: {
          apiVersion: "2"
        }
      }) : {
        addresses: {},
        attributes: []
      };
    },
    async reverseLookupEnsName({ address: t }) {
      var _a2, _b2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return [];
      const s = (_b2 = b.getAccountData()) == null ? void 0 : _b2.address;
      return le.get({
        path: `/v1/profile/reverse/${t}`,
        params: {
          sender: s,
          apiVersion: "2"
        }
      });
    },
    async getEnsNameSuggestions(t) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: `/v1/profile/suggestions/${t}`,
        params: {
          zone: "reown.id"
        }
      }) : {
        suggestions: []
      };
    },
    async registerEnsName({ coinType: t, address: e, message: s, signature: n }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? Et.api.post({
        path: "/v1/profile/account",
        body: {
          coin_type: t,
          address: e,
          message: s,
          signature: n
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        success: false
      };
    },
    async generateOnRampURL({ destinationWallets: t, partnerUserId: e, defaultNetwork: s, purchaseAmount: n, paymentAmount: r }) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? (await Et.api.post({
        path: "/v1/generators/onrampurl",
        params: {
          projectId: q.state.projectId
        },
        body: {
          destinationWallets: t,
          defaultNetwork: s,
          partnerUserId: e,
          defaultExperience: "buy",
          presetCryptoAmount: n,
          presetFiatAmount: r
        }
      })).url : "";
    },
    async getOnrampOptions() {
      var _a2;
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        paymentCurrencies: [],
        purchaseCurrencies: []
      };
      try {
        return await le.get({
          path: "/v1/onramp/options"
        });
      } catch {
        return jy;
      }
    },
    async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: s, network: n }) {
      var _a2;
      try {
        return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? await Et.api.post({
          path: "/v1/onramp/quote",
          params: {
            projectId: q.state.projectId
          },
          body: {
            purchaseCurrency: t,
            paymentCurrency: e,
            amount: s,
            network: n
          }
        }) : null;
      } catch {
        return {
          networkFee: {
            amount: s,
            currency: e.id
          },
          paymentSubtotal: {
            amount: s,
            currency: e.id
          },
          paymentTotal: {
            amount: s,
            currency: e.id
          },
          purchaseAmount: {
            amount: s,
            currency: e.id
          },
          quoteId: "mocked-quote-id"
        };
      }
    },
    async getSmartSessions(t) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? le.get({
        path: `/v1/sessions/${t}`
      }) : [];
    },
    async revokeSmartSession(t, e, s) {
      var _a2;
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? Et.api.post({
        path: `/v1/sessions/${t}/revoke`,
        params: {
          projectId: q.state.projectId
        },
        body: {
          pci: e,
          signature: s
        }
      }) : {
        success: false
      };
    },
    setClientId(t) {
      Et.clientId = t, Et.api = new fo({
        baseUrl: Cp,
        clientId: t
      });
    }
  };
  Wy = Object.freeze({
    enabled: true,
    events: []
  });
  Hy = new fo({
    baseUrl: ee.getAnalyticsUrl(),
    clientId: null
  });
  Vy = 5;
  zy = 60 * 1e3;
  mn = Be({
    ...Wy
  });
  Ky = {
    state: mn,
    subscribeKey(t, e) {
      return at(mn, t, e);
    },
    async sendError(t, e) {
      if (!mn.enabled) return;
      const s = Date.now();
      if (mn.events.filter((i) => {
        const o = new Date(i.properties.timestamp || "").getTime();
        return s - o < zy;
      }).length >= Vy) return;
      const r = {
        type: "error",
        event: e,
        properties: {
          errorType: t.name,
          errorMessage: t.message,
          stackTrace: t.stack,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
      mn.events.push(r);
      try {
        if (typeof window > "u") return;
        const { projectId: i, sdkType: o, sdkVersion: a } = q.state;
        await Hy.post({
          path: "/e",
          params: {
            projectId: i,
            st: o,
            sv: a || "html-wagmi-4.2.2"
          },
          body: {
            eventId: ee.getUUID(),
            url: window.location.href,
            domain: window.location.hostname,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            props: {
              type: "error",
              event: e,
              errorType: t.name,
              errorMessage: t.message,
              stackTrace: t.stack
            }
          }
        });
      } catch {
      }
    },
    enable() {
      mn.enabled = true;
    },
    disable() {
      mn.enabled = false;
    },
    clearEvents() {
      mn.events = [];
    }
  };
  Ar = class extends Error {
    constructor(e, s, n) {
      super(e), this.originalName = "AppKitError", this.name = "AppKitError", this.category = s, this.originalError = n, n && n instanceof Error && (this.originalName = n.name), Object.setPrototypeOf(this, Ar.prototype);
      let r = false;
      if (n instanceof Error && typeof n.stack == "string" && n.stack) {
        const i = n.stack, o = i.indexOf(`
`);
        if (o > -1) {
          const a = i.substring(o + 1);
          this.stack = `${this.name}: ${this.message}
${a}`, r = true;
        }
      }
      r || (Error.captureStackTrace ? Error.captureStackTrace(this, Ar) : this.stack || (this.stack = `${this.name}: ${this.message}`));
    }
  };
  function ph(t, e) {
    let s = "";
    try {
      t instanceof Error ? s = t.message : typeof t == "string" ? s = t : typeof t == "object" && t !== null ? Object.keys(t).length === 0 ? s = "Unknown error" : s = (t == null ? void 0 : t.message) || JSON.stringify(t) : s = String(t);
    } catch (r) {
      s = "Unknown error", console.error("Error parsing error message", r);
    }
    const n = t instanceof Ar ? t : new Ar(s, e, t);
    throw Ky.sendError(n, n.category), n;
  }
  ls = function(t, e = "INTERNAL_SDK_ERROR") {
    const s = {};
    return Object.keys(t).forEach((n) => {
      const r = t[n];
      if (typeof r == "function") {
        let i = r;
        r.constructor.name === "AsyncFunction" ? i = async (...o) => {
          try {
            return await r(...o);
          } catch (a) {
            return ph(a, e);
          }
        } : i = (...o) => {
          try {
            return r(...o);
          } catch (a) {
            return ph(a, e);
          }
        }, s[n] = i;
      } else s[n] = r;
    }), s;
  };
  let Lt, Gy, gh, Ur, ss, Yy, Zy, Jy, Xy, Qy, mh, Fe, e0, vt, t0, wh, s0, ue, n0, Te, r0, js, ll, Ap, i0, Ee, o0, a0, bi;
  Lt = Be({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
  });
  Gy = {
    state: Lt,
    subscribeNetworkImages(t) {
      return ot(Lt.networkImages, () => t(Lt.networkImages));
    },
    subscribeKey(t, e) {
      return at(Lt, t, e);
    },
    subscribe(t) {
      return ot(Lt, () => t(Lt));
    },
    setWalletImage(t, e) {
      Lt.walletImages[t] = e;
    },
    setNetworkImage(t, e) {
      Lt.networkImages[t] = e;
    },
    setChainImage(t, e) {
      Lt.chainImages[t] = e;
    },
    setConnectorImage(t, e) {
      Lt.connectorImages = {
        ...Lt.connectorImages,
        [t]: e
      };
    },
    setTokenImage(t, e) {
      Lt.tokenImages[t] = e;
    },
    setCurrencyImage(t, e) {
      Lt.currencyImages[t] = e;
    }
  };
  is = ls(Gy);
  gh = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: "",
    sui: "",
    stacks: "",
    ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
  };
  Ur = Be({
    networkImagePromises: {},
    tokenImagePromises: {}
  });
  la = {
    async fetchWalletImage(t) {
      if (t) return await ne._fetchWalletImage(t), this.getWalletImageById(t);
    },
    async fetchNetworkImage(t) {
      if (!t) return;
      const e = this.getNetworkImageById(t);
      return e || (Ur.networkImagePromises[t] || (Ur.networkImagePromises[t] = ne._fetchNetworkImage(t)), await Ur.networkImagePromises[t], this.getNetworkImageById(t));
    },
    async fetchTokenImage(t) {
      if (t) return Ur.tokenImagePromises[t] || (Ur.tokenImagePromises[t] = ne._fetchTokenImage(t)), await Ur.tokenImagePromises[t], this.getTokenImage(t);
    },
    getWalletImageById(t) {
      if (t) return is.state.walletImages[t];
    },
    getWalletImage(t) {
      if (t == null ? void 0 : t.image_url) return t == null ? void 0 : t.image_url;
      if (t == null ? void 0 : t.image_id) return is.state.walletImages[t.image_id];
    },
    getNetworkImage(t) {
      var _a2, _b2, _c2;
      if ((_a2 = t == null ? void 0 : t.assets) == null ? void 0 : _a2.imageUrl) return (_b2 = t == null ? void 0 : t.assets) == null ? void 0 : _b2.imageUrl;
      if ((_c2 = t == null ? void 0 : t.assets) == null ? void 0 : _c2.imageId) return is.state.networkImages[t.assets.imageId];
    },
    getNetworkImageById(t) {
      if (t) return is.state.networkImages[t];
    },
    getConnectorImage(t) {
      var _a2;
      if (t == null ? void 0 : t.imageUrl) return t.imageUrl;
      if ((_a2 = t == null ? void 0 : t.info) == null ? void 0 : _a2.icon) return t.info.icon;
      if (t == null ? void 0 : t.imageId) return is.state.connectorImages[t.imageId];
    },
    getChainImage(t) {
      return is.state.networkImages[gh[t]];
    },
    getTokenImage(t) {
      if (t) return is.state.tokenImages[t];
    },
    getWalletImageUrl(t) {
      if (!t) return "";
      const { projectId: e, sdkType: s, sdkVersion: n } = q.state, r = new URL(`${F.W3M_API_URL}/getWalletImage/${t}`);
      return r.searchParams.set("projectId", e), r.searchParams.set("st", s), r.searchParams.set("sv", n), r.toString();
    },
    getAssetImageUrl(t) {
      if (!t) return "";
      const { projectId: e, sdkType: s, sdkVersion: n } = q.state, r = new URL(`${F.W3M_API_URL}/public/getAssetImage/${t}`);
      return r.searchParams.set("projectId", e), r.searchParams.set("st", s), r.searchParams.set("sv", n), r.toString();
    },
    getChainNamespaceImageUrl(t) {
      return this.getAssetImageUrl(gh[t]);
    },
    async getImageByToken(t, e) {
      if (t === "native") {
        const n = F.NATIVE_IMAGE_IDS_BY_NAMESPACE[e] ?? null;
        return n ? la.fetchNetworkImage(n) : void 0;
      }
      const [, s] = Object.entries(F.TOKEN_SYMBOLS_BY_ADDRESS).find(([n]) => n.toLowerCase() === t.toLowerCase()) ?? [];
      if (s) return la.fetchTokenImage(s);
    }
  };
  ss = {
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
    BINANCE: {
      id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
      appId: "yFK5FCqYprrXDiVFbhyRx7",
      deeplink: "bnc://app.binance.com/mp/app",
      url: "https://app.binance.com/en/download"
    }
  };
  Yy = {
    handleMobileDeeplinkRedirect(t, e) {
      const s = window.location.href, n = encodeURIComponent(s);
      if (t === ss.PHANTOM.id && !("phantom" in window)) {
        const r = s.startsWith("https") ? "https" : "http", i = s.split("/")[2], o = encodeURIComponent(`${r}://${i}`);
        window.location.href = `${ss.PHANTOM.url}/ul/browse/${n}?ref=${o}`;
      }
      if (t === ss.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${ss.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`), e === F.CHAIN.SOLANA && t === ss.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${ss.COINBASE.url}/dapp?cb_url=${n}`), e === F.CHAIN.BITCOIN && t === ss.BINANCE.id && !("binancew3w" in window)) {
        const r = b.state.activeCaipNetwork, i = window.btoa("/pages/browser/index"), o = window.btoa(`url=${n}&defaultChainId=${(r == null ? void 0 : r.id) ?? 1}`), a = new URL(ss.BINANCE.deeplink);
        a.searchParams.set("appId", ss.BINANCE.appId), a.searchParams.set("startPagePath", i), a.searchParams.set("startPageQuery", o);
        const c = new URL(ss.BINANCE.url);
        c.searchParams.set("_dp", window.btoa(a.toString())), window.location.href = c.toString();
      }
    }
  };
  Zy = ee.getAnalyticsUrl();
  Jy = new fo({
    baseUrl: Zy,
    clientId: null
  });
  Xy = [
    "MODAL_CREATED"
  ];
  Qy = 45;
  mh = 1e3 * 10;
  Fe = Be({
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
  fe = {
    state: Fe,
    subscribe(t) {
      return ot(Fe, () => t(Fe));
    },
    getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: s } = q.state;
      return {
        projectId: t,
        st: e,
        sv: s || "html-wagmi-4.2.2"
      };
    },
    shouldFlushEvents() {
      const t = JSON.stringify(Fe.pendingEvents).length / 1024 > Qy, e = Fe.lastFlush + mh < Date.now();
      return t || e;
    },
    _setPendingEvent(t) {
      var _a2, _b2;
      try {
        let e = (_a2 = b.getAccountData()) == null ? void 0 : _a2.address;
        if ("address" in t.data && t.data.address && (e = t.data.address), Xy.includes(t.data.event) || typeof window > "u") return;
        const s = (_b2 = b.getActiveCaipNetwork()) == null ? void 0 : _b2.caipNetworkId;
        this.state.pendingEvents.push({
          eventId: ee.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: t.timestamp,
          props: {
            ...t.data,
            address: e,
            properties: {
              ..."properties" in t.data ? t.data.properties : {},
              caipNetworkId: s
            }
          }
        }), Fe.reportedErrors.FORBIDDEN = false, fe.shouldFlushEvents() && fe._submitPendingEvents();
      } catch (e) {
        console.warn("_setPendingEvent", e);
      }
    },
    sendEvent(t) {
      var _a2;
      Fe.timestamp = Date.now(), Fe.data = t;
      const e = [
        "INITIALIZE",
        "CONNECT_SUCCESS",
        "SOCIAL_LOGIN_SUCCESS"
      ];
      (((_a2 = q.state.features) == null ? void 0 : _a2.analytics) || e.includes(t.event)) && fe._setPendingEvent(Fe), this.subscribeToFlushTriggers();
    },
    sendWalletImpressionEvent(t) {
      Fe.walletImpressions.push(t);
    },
    _transformPendingEventsForBatch(t) {
      try {
        return t.filter((e) => e.props.event !== "WALLET_IMPRESSION_V2");
      } catch {
        return t;
      }
    },
    _submitPendingEvents() {
      if (Fe.lastFlush = Date.now(), !(Fe.pendingEvents.length === 0 && Fe.walletImpressions.length === 0)) try {
        const t = fe._transformPendingEventsForBatch(Fe.pendingEvents);
        Fe.walletImpressions.length && t.push({
          eventId: ee.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [
              ...Fe.walletImpressions
            ]
          }
        }), Jy.sendBeacon({
          path: "/batch",
          params: fe.getSdkProperties(),
          body: t
        }), Fe.reportedErrors.FORBIDDEN = false, Fe.pendingEvents = [], Fe.walletImpressions = [];
      } catch {
        Fe.reportedErrors.FORBIDDEN = true;
      }
    },
    subscribeToFlushTriggers() {
      var _a2, _b2, _c2;
      Fe.subscribedToVisibilityChange || typeof document > "u" || (Fe.subscribedToVisibilityChange = true, (_a2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a2.call(document, "visibilitychange", () => {
        document.visibilityState === "hidden" && fe._submitPendingEvents();
      }), (_b2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b2.call(document, "freeze", () => {
        fe._submitPendingEvents();
      }), (_c2 = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c2.call(window, "pagehide", () => {
        fe._submitPendingEvents();
      }), setInterval(() => {
        fe._submitPendingEvents();
      }, mh));
    }
  };
  e0 = ee.getApiUrl();
  vt = new fo({
    baseUrl: e0,
    clientId: null
  });
  t0 = 40;
  wh = 4;
  s0 = 20;
  ue = Be({
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
  ne = {
    state: ue,
    subscribeKey(t, e) {
      return at(ue, t, e);
    },
    _getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: s } = q.state;
      return {
        projectId: t,
        st: e || "appkit",
        sv: s || "html-wagmi-4.2.2"
      };
    },
    _filterOutExtensions(t) {
      return q.state.isUniversalProvider ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t;
    },
    async _fetchWalletImage(t) {
      const e = `${vt.baseUrl}/getWalletImage/${t}`, s = await vt.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      is.setWalletImage(t, URL.createObjectURL(s));
    },
    async _fetchNetworkImage(t) {
      const e = `${vt.baseUrl}/public/getAssetImage/${t}`, s = await vt.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      is.setNetworkImage(t, URL.createObjectURL(s));
    },
    async _fetchConnectorImage(t) {
      const e = `${vt.baseUrl}/public/getAssetImage/${t}`, s = await vt.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      is.setConnectorImage(t, URL.createObjectURL(s));
    },
    async _fetchCurrencyImage(t) {
      const e = `${vt.baseUrl}/public/getCurrencyImage/${t}`, s = await vt.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      is.setCurrencyImage(t, URL.createObjectURL(s));
    },
    async _fetchTokenImage(t) {
      const e = `${vt.baseUrl}/public/getTokenImage/${t}`, s = await vt.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      is.setTokenImage(t, URL.createObjectURL(s));
    },
    _filterWalletsByPlatform(t) {
      const e = t.length, s = ee.isMobile() ? t == null ? void 0 : t.filter((r) => r.mobile_link || r.webapp_link ? true : Object.values(ss).map((o) => o.id).includes(r.id)) : t, n = e - s.length;
      return {
        filteredWallets: s,
        mobileFilteredOutWalletsLength: n
      };
    },
    async fetchProjectConfig() {
      return (await vt.get({
        path: "/appkit/v1/config",
        params: ne._getSdkProperties()
      })).features;
    },
    async fetchUsage() {
      try {
        const t = await vt.get({
          path: "/appkit/v1/project-limits",
          params: ne._getSdkProperties()
        }), { tier: e, isAboveMauLimit: s, isAboveRpcLimit: n } = t.planLimits, r = e === "starter", i = s || n;
        ne.state.plan = {
          tier: e,
          hasExceededUsageLimit: r && i,
          limits: {
            isAboveRpcLimit: n,
            isAboveMauLimit: s
          }
        };
      } catch (t) {
        console.warn("Failed to fetch usage", t);
      }
    },
    async fetchAllowedOrigins() {
      try {
        const { allowedOrigins: t } = await vt.get({
          path: "/projects/v1/origins",
          params: ne._getSdkProperties()
        });
        return t;
      } catch (t) {
        if (t instanceof Error && t.cause instanceof Response) {
          const e = t.cause.status;
          if (e === F.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", {
            cause: t
          });
          if (e >= F.HTTP_STATUS_CODES.SERVER_ERROR && e < 600) throw new Error("SERVER_ERROR", {
            cause: t
          });
          return [];
        }
        return [];
      }
    },
    async fetchNetworkImages() {
      var _a2;
      const e = (_a2 = b.getAllRequestedCaipNetworks()) == null ? void 0 : _a2.map(({ assets: s }) => s == null ? void 0 : s.imageId).filter(Boolean).filter((s) => !la.getNetworkImageById(s));
      e && await Promise.allSettled(e.map((s) => ne._fetchNetworkImage(s)));
    },
    async fetchConnectorImages() {
      const { connectors: t } = V.state, e = t.map(({ imageId: s }) => s).filter(Boolean);
      await Promise.allSettled(e.map((s) => ne._fetchConnectorImage(s)));
    },
    async fetchCurrencyImages(t = []) {
      await Promise.allSettled(t.map((e) => ne._fetchCurrencyImage(e)));
    },
    async fetchTokenImages(t = []) {
      await Promise.allSettled(t.map((e) => ne._fetchTokenImage(e)));
    },
    async fetchWallets(t) {
      var _a2;
      const e = t.exclude ?? [];
      ne._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(ss).map((o) => o.id));
      const n = await vt.get({
        path: "/getWallets",
        params: {
          ...ne._getSdkProperties(),
          ...t,
          page: String(t.page),
          entries: String(t.entries),
          include: (_a2 = t.include) == null ? void 0 : _a2.join(","),
          exclude: e.join(",")
        }
      }), { filteredWallets: r, mobileFilteredOutWalletsLength: i } = ne._filterWalletsByPlatform(n == null ? void 0 : n.data);
      return {
        data: r || [],
        count: n == null ? void 0 : n.count,
        mobileFilteredOutWalletsLength: i
      };
    },
    async prefetchWalletRanks() {
      const t = V.state.connectors;
      if (!(t == null ? void 0 : t.length)) return;
      const e = {
        page: 1,
        entries: 20,
        badge: "certified"
      };
      if (e.names = t.map((r) => r.name).join(","), b.state.activeChain === F.CHAIN.EVM) {
        const r = [
          ...t.flatMap((i) => {
            var _a2;
            return ((_a2 = i.connectors) == null ? void 0 : _a2.map((o) => {
              var _a3;
              return (_a3 = o.info) == null ? void 0 : _a3.rdns;
            })) || [];
          }),
          ...t.map((i) => {
            var _a2;
            return (_a2 = i.info) == null ? void 0 : _a2.rdns;
          })
        ].filter((i) => typeof i == "string" && i.length > 0);
        r.length && (e.rdns = r.join(","));
      }
      const { data: s } = await ne.fetchWallets(e);
      ue.explorerWallets = s, V.extendConnectorsWithExplorerWallets(s);
      const n = b.getRequestedCaipNetworkIds().join(",");
      ue.explorerFilteredWallets = s.filter((r) => {
        var _a2;
        return (_a2 = r.chains) == null ? void 0 : _a2.some((i) => n.includes(i));
      });
    },
    async fetchFeaturedWallets() {
      const { featuredWalletIds: t } = q.state;
      if (t == null ? void 0 : t.length) {
        const e = {
          ...ne._getSdkProperties(),
          page: 1,
          entries: (t == null ? void 0 : t.length) ?? wh,
          include: t
        }, { data: s } = await ne.fetchWallets(e), n = [
          ...s
        ].sort((i, o) => t.indexOf(i.id) - t.indexOf(o.id)), r = n.map((i) => i.image_id).filter(Boolean);
        await Promise.allSettled(r.map((i) => ne._fetchWalletImage(i))), ue.featured = n, ue.allFeatured = n;
      }
    },
    async fetchRecommendedWallets() {
      try {
        ue.isFetchingRecommendedWallets = true;
        const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: s } = q.state, n = [
          ...e ?? [],
          ...s ?? []
        ].filter(Boolean), r = b.getRequestedCaipNetworkIds().join(","), i = {
          page: 1,
          entries: wh,
          include: t,
          exclude: n,
          chains: r
        }, { data: o, count: a } = await ne.fetchWallets(i), c = H.getRecentWallets(), l = o.map((h) => h.image_id).filter(Boolean), d = c.map((h) => h.image_id).filter(Boolean);
        await Promise.allSettled([
          ...l,
          ...d
        ].map((h) => ne._fetchWalletImage(h))), ue.recommended = o, ue.allRecommended = o, ue.count = a ?? 0;
      } catch {
      } finally {
        ue.isFetchingRecommendedWallets = false;
      }
    },
    async fetchWalletsByPage({ page: t }) {
      const { includeWalletIds: e, excludeWalletIds: s, featuredWalletIds: n } = q.state, r = b.getRequestedCaipNetworkIds().join(","), i = [
        ...ue.recommended.map(({ id: h }) => h),
        ...s ?? [],
        ...n ?? []
      ].filter(Boolean), o = {
        page: t,
        entries: t0,
        include: e,
        exclude: i,
        chains: r
      }, { data: a, count: c, mobileFilteredOutWalletsLength: l } = await ne.fetchWallets(o);
      ue.mobileFilteredOutWalletsLength = l + (ue.mobileFilteredOutWalletsLength ?? 0);
      const d = a.slice(0, s0).map((h) => h.image_id).filter(Boolean);
      await Promise.allSettled(d.map((h) => ne._fetchWalletImage(h))), ue.wallets = ee.uniqueBy([
        ...ue.wallets,
        ...ne._filterOutExtensions(a)
      ], "id").filter((h) => {
        var _a2;
        return (_a2 = h.chains) == null ? void 0 : _a2.some((u) => r.includes(u));
      }), ue.count = c > ue.count ? c : ue.count, ue.page = t;
    },
    async initializeExcludedWallets({ ids: t }) {
      const e = {
        page: 1,
        entries: t.length,
        include: t
      }, { data: s } = await ne.fetchWallets(e);
      s && s.forEach((n) => {
        ue.excludedWallets.push({
          rdns: n.rdns,
          name: n.name
        });
      });
    },
    async searchWallet({ search: t, badge: e }) {
      const { includeWalletIds: s, excludeWalletIds: n } = q.state, r = b.getRequestedCaipNetworkIds().join(",");
      ue.search = [];
      const i = {
        page: 1,
        entries: 100,
        search: t == null ? void 0 : t.trim(),
        badge_type: e,
        include: s,
        exclude: n,
        chains: r
      }, { data: o } = await ne.fetchWallets(i);
      fe.sendEvent({
        type: "track",
        event: "SEARCH_WALLET",
        properties: {
          badge: e ?? "",
          search: t ?? ""
        }
      });
      const a = o.map((c) => c.image_id).filter(Boolean);
      await Promise.allSettled([
        ...a.map((c) => ne._fetchWalletImage(c)),
        ee.wait(300)
      ]), ue.search = ne._filterOutExtensions(o);
    },
    initPromise(t, e) {
      const s = ue.promises[t];
      return s || (ue.promises[t] = e());
    },
    prefetch({ fetchConnectorImages: t = true, fetchFeaturedWallets: e = true, fetchRecommendedWallets: s = true, fetchNetworkImages: n = true, fetchWalletRanks: r = true } = {}) {
      const i = [
        t && ne.initPromise("connectorImages", ne.fetchConnectorImages),
        e && ne.initPromise("featuredWallets", ne.fetchFeaturedWallets),
        s && ne.initPromise("recommendedWallets", ne.fetchRecommendedWallets),
        n && ne.initPromise("networkImages", ne.fetchNetworkImages),
        r && ne.initPromise("walletRanks", ne.prefetchWalletRanks)
      ].filter(Boolean);
      return Promise.allSettled(i);
    },
    prefetchAnalyticsConfig() {
      var _a2;
      ((_a2 = q.state.features) == null ? void 0 : _a2.analytics) && ne.fetchAnalyticsConfig();
    },
    async fetchAnalyticsConfig() {
      try {
        const { isAnalyticsEnabled: t } = await vt.get({
          path: "/getAnalyticsConfig",
          params: ne._getSdkProperties()
        });
        q.setFeatures({
          analytics: t
        });
      } catch {
        q.setFeatures({
          analytics: false
        });
      }
    },
    filterByNamespaces(t) {
      if (!(t == null ? void 0 : t.length)) {
        ue.featured = ue.allFeatured, ue.recommended = ue.allRecommended;
        return;
      }
      const e = b.getRequestedCaipNetworkIds().join(",");
      ue.featured = ue.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.recommended = ue.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.filteredWallets = ue.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    },
    clearFilterByNamespaces() {
      ue.filteredWallets = [];
    },
    setFilterByNamespace(t) {
      if (!t) {
        ue.featured = ue.allFeatured, ue.recommended = ue.allRecommended;
        return;
      }
      const e = b.getRequestedCaipNetworkIds().join(",");
      ue.featured = ue.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.recommended = ue.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), ue.filteredWallets = ue.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    }
  };
  qn = {
    filterOutDuplicatesByRDNS(t) {
      const e = q.state.enableEIP6963 ? V.state.connectors : [], s = H.getRecentWallets(), n = e.map((a) => {
        var _a2;
        return (_a2 = a.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), r = s.map((a) => a.rdns).filter(Boolean), i = n.concat(r);
      if (i.includes("io.metamask.mobile") && ee.isMobile()) {
        const a = i.indexOf("io.metamask.mobile");
        i[a] = "io.metamask";
      }
      return t.filter((a) => !((a == null ? void 0 : a.rdns) && i.includes(String(a.rdns)) || !(a == null ? void 0 : a.rdns) && e.some((l) => l.name === a.name)));
    },
    filterOutDuplicatesByIds(t) {
      const e = V.state.connectors.filter((a) => a.type === "ANNOUNCED" || a.type === "INJECTED" || a.type === "MULTI_CHAIN"), s = H.getRecentWallets(), n = e.map((a) => {
        var _a2;
        return a.explorerId || ((_a2 = a.explorerWallet) == null ? void 0 : _a2.id) || a.id;
      }), r = s.map((a) => a.id), i = n.concat(r);
      return t.filter((a) => !i.includes(a == null ? void 0 : a.id));
    },
    filterOutDuplicateWallets(t) {
      const e = this.filterOutDuplicatesByRDNS(t);
      return this.filterOutDuplicatesByIds(e);
    },
    markWalletsAsInstalled(t) {
      const { connectors: e } = V.state, { featuredWalletIds: s } = q.state, n = e.filter((o) => o.type === "ANNOUNCED").reduce((o, a) => {
        var _a2;
        return ((_a2 = a.info) == null ? void 0 : _a2.rdns) && (o[a.info.rdns] = true), o;
      }, {});
      return t.map((o) => ({
        ...o,
        installed: !!o.rdns && !!n[o.rdns ?? ""]
      })).sort((o, a) => {
        const c = Number(a.installed) - Number(o.installed);
        if (c !== 0) return c;
        if (s == null ? void 0 : s.length) {
          const l = s.indexOf(o.id), d = s.indexOf(a.id);
          if (l !== -1 && d !== -1) return l - d;
          if (l !== -1) return -1;
          if (d !== -1) return 1;
        }
        return 0;
      });
    },
    getConnectOrderMethod(t, e) {
      var _a2;
      const s = (t == null ? void 0 : t.connectMethodsOrder) || ((_a2 = q.state.features) == null ? void 0 : _a2.connectMethodsOrder), n = e || V.state.connectors;
      if (s) return s;
      const { injected: r, announced: i } = At.getConnectorsByType(n, ne.state.recommended, ne.state.featured), o = r.filter(At.showConnector), a = i.filter(At.showConnector);
      return o.length || a.length ? [
        "wallet",
        "email",
        "social"
      ] : ge.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(t) {
      const e = !!t.rdns && ne.state.excludedWallets.some((n) => n.rdns === t.rdns), s = !!t.name && ne.state.excludedWallets.some((n) => fp.isLowerCaseMatch(n.name, t.name));
      return e || s;
    },
    markWalletsWithDisplayIndex(t) {
      return t.map((e, s) => ({
        ...e,
        display_index: s
      }));
    },
    filterWalletsByWcSupport(t) {
      return G.state.wcBasic ? t.filter((e) => e.supports_wc) : ee.isMobile() ? t.filter((e) => e.supports_wc || ge.MANDATORY_WALLET_IDS_ON_MOBILE.includes(e.id)) : t;
    },
    getWalletConnectWallets(t) {
      var _a2;
      const e = [
        ...ne.state.featured,
        ...ne.state.recommended
      ];
      ((_a2 = ne.state.filteredWallets) == null ? void 0 : _a2.length) > 0 ? e.push(...ne.state.filteredWallets) : e.push(...t);
      const s = ee.uniqueBy(e, "id"), n = qn.markWalletsAsInstalled(s), r = qn.filterWalletsByWcSupport(n);
      return qn.markWalletsWithDisplayIndex(r);
    }
  };
  At = {
    getConnectorsByType(t, e, s) {
      const { customWallets: n } = q.state, r = H.getRecentWallets(), i = qn.filterOutDuplicateWallets(e), o = qn.filterOutDuplicateWallets(s), a = t.filter((h) => h.type === "MULTI_CHAIN"), c = t.filter((h) => h.type === "ANNOUNCED"), l = t.filter((h) => h.type === "INJECTED"), d = t.filter((h) => h.type === "EXTERNAL");
      return {
        custom: n,
        recent: r,
        external: d,
        multiChain: a,
        announced: c,
        injected: l,
        recommended: i,
        featured: o
      };
    },
    showConnector(t) {
      var _a2;
      const e = (_a2 = t.info) == null ? void 0 : _a2.rdns, s = !!e && ne.state.excludedWallets.some((r) => !!r.rdns && r.rdns === e), n = !!t.name && ne.state.excludedWallets.some((r) => fp.isLowerCaseMatch(r.name, t.name));
      return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!ee.isMobile() || ee.isMobile() && !e && !G.checkInstalled()) || s || n) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (s || n));
    },
    getIsConnectedWithWC() {
      return Array.from(b.state.chains.values()).some((s) => V.getConnectorId(s.namespace) === F.CONNECTOR_ID.WALLET_CONNECT);
    },
    getConnectorTypeOrder({ recommended: t, featured: e, custom: s, recent: n, announced: r, injected: i, multiChain: o, external: a, overriddenConnectors: c = ((_b2) => (_b2 = q.state.features) == null ? void 0 : _b2.connectorTypeOrder)() ?? [] }) {
      const d = [
        {
          type: "walletConnect",
          isEnabled: true
        },
        {
          type: "recent",
          isEnabled: n.length > 0
        },
        {
          type: "injected",
          isEnabled: [
            ...i,
            ...r,
            ...o
          ].length > 0
        },
        {
          type: "featured",
          isEnabled: e.length > 0
        },
        {
          type: "custom",
          isEnabled: s && s.length > 0
        },
        {
          type: "external",
          isEnabled: a.length > 0
        },
        {
          type: "recommended",
          isEnabled: t.length > 0
        }
      ].filter((g) => g.isEnabled), h = new Set(d.map((g) => g.type)), u = c.filter((g) => h.has(g)).map((g) => ({
        type: g,
        isEnabled: true
      })), f = d.filter(({ type: g }) => !u.some(({ type: m }) => m === g));
      return Array.from(new Set([
        ...u,
        ...f
      ].map(({ type: g }) => g)));
    },
    sortConnectorsByExplorerWallet(t) {
      return [
        ...t
      ].sort((e, s) => e.explorerWallet && s.explorerWallet ? (e.explorerWallet.order ?? 0) - (s.explorerWallet.order ?? 0) : e.explorerWallet ? -1 : s.explorerWallet ? 1 : 0);
    },
    getPriority(t) {
      return t.id === F.CONNECTOR_ID.BASE_ACCOUNT ? 0 : t.id === F.CONNECTOR_ID.COINBASE || t.id === F.CONNECTOR_ID.COINBASE_SDK ? 1 : 2;
    },
    sortConnectorsByPriority(t) {
      return [
        ...t
      ].sort((e, s) => At.getPriority(e) - At.getPriority(s));
    },
    getAuthName({ email: t, socialUsername: e, socialProvider: s }) {
      return e ? s && s === "discord" && e.endsWith("0") ? e.slice(0, -1) : e : t.length > 30 ? `${t.slice(0, -3)}...` : t;
    },
    async fetchProviderData(t) {
      var _a2, _b2;
      try {
        if (t.name === "Browser Wallet" && !ee.isMobile()) return {
          accounts: [],
          chainId: void 0
        };
        if (t.id === F.CONNECTOR_ID.AUTH) return {
          accounts: [],
          chainId: void 0
        };
        const [e, s] = await Promise.all([
          (_a2 = t.provider) == null ? void 0 : _a2.request({
            method: "eth_accounts"
          }),
          (_b2 = t.provider) == null ? void 0 : _b2.request({
            method: "eth_chainId"
          }).then((n) => Number(n))
        ]);
        return {
          accounts: e,
          chainId: s
        };
      } catch (e) {
        return console.warn(`Failed to fetch provider data for ${t.name}`, e), {
          accounts: [],
          chainId: void 0
        };
      }
    },
    getFilteredCustomWallets(t) {
      const e = H.getRecentWallets(), s = V.state.connectors.map((o) => {
        var _a2;
        return (_a2 = o.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), n = e.map((o) => o.rdns).filter(Boolean), r = s.concat(n);
      if (r.includes("io.metamask.mobile") && ee.isMobile()) {
        const o = r.indexOf("io.metamask.mobile");
        r[o] = "io.metamask";
      }
      return t.filter((o) => !r.includes(String(o == null ? void 0 : o.rdns)));
    },
    hasWalletConnector(t) {
      return V.state.connectors.some((e) => e.id === t.id || e.name === t.name);
    },
    isWalletCompatibleWithCurrentChain(t) {
      const e = b.state.activeChain;
      return e && t.chains ? t.chains.some((s) => {
        const n = s.split(":")[0];
        return e === n;
      }) : true;
    },
    getFilteredRecentWallets() {
      return H.getRecentWallets().filter((s) => !qn.isExcluded(s)).filter((s) => !this.hasWalletConnector(s)).filter((s) => this.isWalletCompatibleWithCurrentChain(s));
    },
    getCappedRecommendedWallets(t) {
      const { connectors: e } = V.state, { customWallets: s, featuredWalletIds: n } = q.state, r = e.find((x) => x.id === "walletConnect"), i = e.filter((x) => x.type === "INJECTED" || x.type === "ANNOUNCED" || x.type === "MULTI_CHAIN");
      if (!r && !i.length && !(s == null ? void 0 : s.length)) return [];
      const o = cl.isEmailEnabled(), a = cl.isSocialsEnabled(), c = i.filter((x) => x.name !== "Browser Wallet" && x.name !== "WalletConnect"), l = (n == null ? void 0 : n.length) || 0, d = (s == null ? void 0 : s.length) || 0, h = c.length || 0, u = o ? 1 : 0, f = a ? 1 : 0, g = l + d + h + u + f, m = Math.max(0, 4 - g);
      return m <= 0 ? [] : qn.filterOutDuplicateWallets(t).slice(0, m);
    },
    processConnectorsByType(t, e = true) {
      const s = At.sortConnectorsByExplorerWallet([
        ...t
      ]);
      return e ? s.filter(At.showConnector) : s;
    },
    connectorList() {
      const t = At.getConnectorsByType(V.state.connectors, ne.state.recommended, ne.state.featured), e = this.processConnectorsByType(t.announced.filter((f) => f.id !== "walletConnect")), s = this.processConnectorsByType(t.injected), n = this.processConnectorsByType(t.multiChain.filter((f) => f.name !== "WalletConnect"), false), r = t.custom, i = t.recent, o = this.processConnectorsByType(t.external.filter((f) => f.id !== F.CONNECTOR_ID.COINBASE_SDK && f.id !== F.CONNECTOR_ID.BASE_ACCOUNT)), a = t.recommended, c = t.featured, l = At.getConnectorTypeOrder({
        custom: r,
        recent: i,
        announced: e,
        injected: s,
        multiChain: n,
        recommended: a,
        featured: c,
        external: o
      }), d = V.state.connectors.find((f) => f.id === "walletConnect"), h = ee.isMobile(), u = [];
      for (const f of l) switch (f) {
        case "walletConnect": {
          !h && d && u.push({
            kind: "connector",
            subtype: "walletConnect",
            connector: d
          });
          break;
        }
        case "recent": {
          At.getFilteredRecentWallets().forEach((p) => u.push({
            kind: "wallet",
            subtype: "recent",
            wallet: p
          }));
          break;
        }
        case "injected": {
          n.forEach((g) => u.push({
            kind: "connector",
            subtype: "multiChain",
            connector: g
          })), e.forEach((g) => u.push({
            kind: "connector",
            subtype: "announced",
            connector: g
          })), s.forEach((g) => u.push({
            kind: "connector",
            subtype: "injected",
            connector: g
          }));
          break;
        }
        case "featured": {
          c.forEach((g) => u.push({
            kind: "wallet",
            subtype: "featured",
            wallet: g
          }));
          break;
        }
        case "custom": {
          At.getFilteredCustomWallets(r ?? []).forEach((p) => u.push({
            kind: "wallet",
            subtype: "custom",
            wallet: p
          }));
          break;
        }
        case "external": {
          o.forEach((g) => u.push({
            kind: "connector",
            subtype: "external",
            connector: g
          }));
          break;
        }
        case "recommended": {
          At.getCappedRecommendedWallets(a).forEach((p) => u.push({
            kind: "wallet",
            subtype: "recommended",
            wallet: p
          }));
          break;
        }
        default:
          console.warn(`Unknown connector type: ${f}`);
      }
      return u;
    },
    hasInjectedConnectors() {
      return V.state.connectors.filter((t) => (t.type === "INJECTED" || t.type === "ANNOUNCED" || t.type === "MULTI_CHAIN") && t.name !== "Browser Wallet" && t.name !== "WalletConnect").length;
    }
  };
  n0 = [
    "ConnectingExternal",
    "ConnectingMultiChain",
    "ConnectingSocial",
    "ConnectingFarcaster"
  ];
  Te = Be({
    view: "Connect",
    history: [
      "Connect"
    ],
    transactionStack: []
  });
  r0 = {
    state: Te,
    subscribeKey(t, e) {
      return at(Te, t, e);
    },
    pushTransactionStack(t) {
      Te.transactionStack.push(t);
    },
    popTransactionStack(t) {
      const e = Te.transactionStack.pop();
      if (!e) return;
      const { onSuccess: s, onError: n, onCancel: r } = e;
      switch (t) {
        case "success":
          s == null ? void 0 : s();
          break;
        case "error":
          n == null ? void 0 : n(), ae.goBack();
          break;
        case "cancel":
          r == null ? void 0 : r(), ae.goBack();
          break;
      }
    },
    push(t, e) {
      let s = t, n = e;
      ne.state.plan.hasExceededUsageLimit && n0.includes(t) && (s = "UsageExceeded", n = void 0), s !== Te.view && (Te.view = s, Te.history.push(s), Te.data = n);
    },
    reset(t, e) {
      Te.view = t, Te.history = [
        t
      ], Te.data = e;
    },
    replace(t, e) {
      Te.history.at(-1) === t || (Te.view = t, Te.history[Te.history.length - 1] = t, Te.data = e);
    },
    goBack() {
      var _a2, _b2;
      const t = b.state.activeCaipAddress, e = ae.state.view === "ConnectingFarcaster", s = !t && e;
      if (Te.history.length > 1) {
        Te.history.pop();
        const [n] = Te.history.slice(-1);
        n && (t && n === "Connect" ? Te.view = "Account" : Te.view = n);
      } else me.close();
      ((_a2 = Te.data) == null ? void 0 : _a2.wallet) && (Te.data.wallet = void 0), ((_b2 = Te.data) == null ? void 0 : _b2.redirectView) && (Te.data.redirectView = void 0), setTimeout(() => {
        var _a3, _b3, _c2;
        if (s) {
          b.setAccountProp("farcasterUrl", void 0, b.state.activeChain);
          const n = V.getAuthConnector();
          (_a3 = n == null ? void 0 : n.provider) == null ? void 0 : _a3.reload();
          const r = Qi(q.state);
          (_c2 = (_b3 = n == null ? void 0 : n.provider) == null ? void 0 : _b3.syncDappData) == null ? void 0 : _c2.call(_b3, {
            metadata: r.metadata,
            sdkVersion: r.sdkVersion,
            projectId: r.projectId,
            sdkType: r.sdkType
          });
        }
      }, 100);
    },
    goBackToIndex(t) {
      if (Te.history.length > 1) {
        Te.history = Te.history.slice(0, t + 1);
        const [e] = Te.history.slice(-1);
        e && (Te.view = e);
      }
    },
    goBackOrCloseModal() {
      ae.state.history.length > 1 ? ae.goBack() : me.close();
    }
  };
  ae = ls(r0);
  js = Be({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
  });
  ll = {
    state: js,
    subscribe(t) {
      return ot(js, () => t(js));
    },
    setThemeMode(t) {
      js.themeMode = t;
      try {
        const e = V.getAuthConnector();
        if (e) {
          const s = ll.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeMode: t,
            themeVariables: s,
            w3mThemeVariables: aa(s, t)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(t) {
      js.themeVariables = {
        ...js.themeVariables,
        ...t
      };
      try {
        const e = V.getAuthConnector();
        if (e) {
          const s = ll.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeVariables: s,
            w3mThemeVariables: aa(js.themeVariables, js.themeMode)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return Qi(js);
    }
  };
  Wt = ls(ll);
  Ap = Object.fromEntries(gp.map((t) => [
    t,
    void 0
  ]));
  i0 = Object.fromEntries(gp.map((t) => [
    t,
    true
  ]));
  Ee = Be({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: Ap,
    filterByNamespaceMap: i0
  });
  o0 = {
    state: Ee,
    subscribe(t) {
      return ot(Ee, () => {
        t(Ee);
      });
    },
    subscribeKey(t, e) {
      return at(Ee, t, e);
    },
    initialize(t) {
      t.forEach((e) => {
        const s = H.getConnectedConnectorId(e);
        s && V.setConnectorId(s, e);
      });
    },
    setActiveConnector(t) {
      t && (Ee.activeConnector = eo(t));
    },
    setConnectors(t) {
      t.filter((r) => !Ee.allConnectors.some((i) => i.id === r.id && V.getConnectorName(i.name) === V.getConnectorName(r.name) && i.chain === r.chain)).forEach((r) => {
        r.type !== "MULTI_CHAIN" && Ee.allConnectors.push(eo(r));
      });
      const s = V.getEnabledNamespaces(), n = V.getEnabledConnectors(s);
      Ee.connectors = V.mergeMultiChainConnectors(n);
    },
    filterByNamespaces(t) {
      Object.keys(Ee.filterByNamespaceMap).forEach((e) => {
        Ee.filterByNamespaceMap[e] = false;
      }), t.forEach((e) => {
        Ee.filterByNamespaceMap[e] = true;
      }), V.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(t, e) {
      Ee.filterByNamespaceMap[t] = e, V.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      const t = V.getEnabledNamespaces(), e = V.getEnabledConnectors(t), s = V.areAllNamespacesEnabled();
      Ee.connectors = V.mergeMultiChainConnectors(e), s ? ne.clearFilterByNamespaces() : ne.filterByNamespaces(t);
    },
    getEnabledNamespaces() {
      return Object.entries(Ee.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t);
    },
    getEnabledConnectors(t) {
      return Ee.allConnectors.filter((e) => t.includes(e.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values(Ee.filterByNamespaceMap).every((t) => t);
    },
    mergeMultiChainConnectors(t) {
      const e = V.generateConnectorMapByName(t), s = [];
      return e.forEach((n) => {
        const r = n[0], i = (r == null ? void 0 : r.id) === F.CONNECTOR_ID.AUTH;
        n.length > 1 && r ? s.push({
          name: r.name,
          imageUrl: r.imageUrl,
          imageId: r.imageId,
          connectors: [
            ...n
          ],
          type: i ? "AUTH" : "MULTI_CHAIN",
          chain: "eip155",
          id: (r == null ? void 0 : r.id) || ""
        }) : r && s.push(r);
      }), s;
    },
    generateConnectorMapByName(t) {
      const e = /* @__PURE__ */ new Map();
      return t.forEach((s) => {
        const { name: n } = s, r = V.getConnectorName(n);
        if (!r) return;
        const i = e.get(r) || [];
        i.find((a) => a.chain === s.chain) || i.push(s), e.set(r, i);
      }), e;
    },
    getConnectorName(t) {
      return t && ({
        "Trust Wallet": "Trust"
      }[t] || t);
    },
    getUniqueConnectorsByName(t) {
      const e = [];
      return t.forEach((s) => {
        e.find((n) => n.chain === s.chain) || e.push(s);
      }), e;
    },
    addConnector(t) {
      var _a2, _b2, _c2;
      if (t.id === F.CONNECTOR_ID.AUTH) {
        const e = t, s = Qi(q.state), n = Wt.getSnapshot().themeMode, r = Wt.getSnapshot().themeVariables;
        (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
          metadata: s.metadata,
          sdkVersion: s.sdkVersion,
          projectId: s.projectId,
          sdkType: s.sdkType
        }), (_c2 = e == null ? void 0 : e.provider) == null ? void 0 : _c2.syncTheme({
          themeMode: n,
          themeVariables: r,
          w3mThemeVariables: aa(r, n)
        }), V.setConnectors([
          t
        ]);
      } else V.setConnectors([
        t
      ]);
    },
    getAuthConnector(t) {
      var _a2;
      const e = t || b.state.activeChain, s = Ee.connectors.find((n) => n.id === F.CONNECTOR_ID.AUTH);
      if (s) return ((_a2 = s == null ? void 0 : s.connectors) == null ? void 0 : _a2.length) ? s.connectors.find((r) => r.chain === e) : s;
    },
    getAnnouncedConnectorRdns() {
      return Ee.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
        var _a2;
        return (_a2 = t.info) == null ? void 0 : _a2.rdns;
      });
    },
    getConnectorById(t) {
      return At.sortConnectorsByPriority(Ee.allConnectors).find((s) => s.id === t);
    },
    getConnector({ id: t, namespace: e }) {
      const s = e || b.state.activeChain, n = Ee.allConnectors.filter((o) => o.chain === s);
      return At.sortConnectorsByPriority(n).find((o) => o.id === t || o.explorerId === t);
    },
    syncIfAuthConnector(t) {
      var _a2, _b2;
      if (t.id !== "AUTH") return;
      const e = t, s = Qi(q.state), n = Wt.getSnapshot().themeMode, r = Wt.getSnapshot().themeVariables;
      (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
        metadata: s.metadata,
        sdkVersion: s.sdkVersion,
        sdkType: s.sdkType,
        projectId: s.projectId
      }), e.provider.syncTheme({
        themeMode: n,
        themeVariables: r,
        w3mThemeVariables: aa(r, n)
      });
    },
    getConnectorsByNamespace(t) {
      const e = Ee.allConnectors.filter((s) => s.chain === t);
      return V.mergeMultiChainConnectors(e);
    },
    canSwitchToSmartAccount(t) {
      return b.checkIfSmartAccountEnabled() && os(t) === on.ACCOUNT_TYPES.EOA;
    },
    selectWalletConnector(t) {
      var _a2;
      const e = (_a2 = ae.state.data) == null ? void 0 : _a2.redirectView, s = b.state.activeChain, n = s ? V.getConnector({
        id: t.id,
        namespace: s
      }) : void 0;
      Yy.handleMobileDeeplinkRedirect((n == null ? void 0 : n.explorerId) || t.id, b.state.activeChain), n ? ae.push("ConnectingExternal", {
        connector: n,
        wallet: t,
        redirectView: e
      }) : ae.push("ConnectingWalletConnect", {
        wallet: t,
        redirectView: e
      });
    },
    getConnectors(t) {
      return t ? V.getConnectorsByNamespace(t) : V.mergeMultiChainConnectors(Ee.allConnectors);
    },
    setFilterByNamespace(t) {
      Ee.filterByNamespace = t, Ee.connectors = V.getConnectors(t), ne.setFilterByNamespace(t);
    },
    setConnectorId(t, e) {
      t && (Ee.activeConnectorIds = {
        ...Ee.activeConnectorIds,
        [e]: t
      }, H.setConnectedConnectorId(e, t));
    },
    removeConnectorId(t) {
      Ee.activeConnectorIds = {
        ...Ee.activeConnectorIds,
        [t]: void 0
      }, H.deleteConnectedConnectorId(t);
    },
    getConnectorId(t) {
      if (t) return Ee.activeConnectorIds[t];
    },
    isConnected(t) {
      return t ? !!Ee.activeConnectorIds[t] : Object.values(Ee.activeConnectorIds).some((e) => !!e);
    },
    resetConnectorIds() {
      Ee.activeConnectorIds = {
        ...Ap
      };
    },
    extendConnectorsWithExplorerWallets(t) {
      Ee.allConnectors.forEach((n) => {
        const r = t.find((i) => {
          var _a2;
          return i.id === n.id || i.rdns && i.rdns === ((_a2 = n.info) == null ? void 0 : _a2.rdns);
        });
        r && (n.explorerWallet = r);
      });
      const e = V.getEnabledNamespaces(), s = V.getEnabledConnectors(e);
      Ee.connectors = V.mergeMultiChainConnectors(s);
    },
    async connect(t = {}) {
      const { namespace: e } = t;
      return V.setFilterByNamespace(e), ae.push("Connect", {
        addWalletForNamespace: e
      }), new Promise((s, n) => {
        if (e) {
          const r = b.subscribeChainProp("accountState", (o) => {
            (o == null ? void 0 : o.caipAddress) && (s({
              caipAddress: o == null ? void 0 : o.caipAddress
            }), r());
          }, e), i = me.subscribeKey("open", (o) => {
            o || (n(new Error("Modal closed")), i());
          });
        } else {
          const r = b.subscribeKey("activeCaipAddress", (o) => {
            o && (s({
              caipAddress: o
            }), r());
          }), i = me.subscribeKey("open", (o) => {
            o || (n(new Error("Modal closed")), i());
          });
        }
      });
    }
  };
  V = ls(o0);
  a0 = 1e3;
  bi = {
    checkNamespaceConnectorId(t, e) {
      return V.getConnectorId(t) === e;
    },
    isSocialProvider(t) {
      return ge.DEFAULT_REMOTE_FEATURES.socials.includes(t);
    },
    connectWalletConnect({ walletConnect: t, connector: e, closeModalOnConnect: s = true, redirectViewOnModalClose: n = "Connect", onOpen: r, onConnect: i }) {
      return new Promise((o, a) => {
        if (t && V.setActiveConnector(e), r == null ? void 0 : r(ee.isMobile() && t), n) {
          const l = me.subscribeKey("open", (d) => {
            d || (ae.state.view !== n && ae.replace(n), l(), a(new Error("Modal closed")));
          });
        }
        const c = b.subscribeKey("activeCaipAddress", (l) => {
          l && (i == null ? void 0 : i(), s && me.close(), c(), o(it.parseCaipAddress(l)));
        });
      });
    },
    connectExternal(t) {
      return new Promise((e, s) => {
        const n = b.subscribeKey("activeCaipAddress", (r) => {
          r && (me.close(), n(), e(it.parseCaipAddress(r)));
        });
        G.connectExternal(t, t.chain).catch(() => {
          n(), s(new Error("Connection rejected"));
        });
      });
    },
    connectSocial({ social: t, namespace: e, closeModalOnConnect: s = true, onOpenFarcaster: n, onConnect: r }) {
      let i, o = false, a = null;
      const c = e || b.state.activeChain, l = b.subscribeKey("activeCaipAddress", (d) => {
        d && (s && me.close(), l());
      });
      return new Promise((d, h) => {
        async function u(g) {
          var _a2;
          if ((_a2 = g.data) == null ? void 0 : _a2.resultUri) if (g.origin === F.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", u, false);
            try {
              const p = V.getAuthConnector(c);
              if (p && !o) {
                i && i.close(), o = true;
                const m = g.data.resultUri;
                fe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: {
                    provider: t
                  }
                }), H.setConnectedSocialProvider(t), await G.connectExternal({
                  id: p.id,
                  type: p.type,
                  socialUri: m
                }, p.chain);
                const T = b.state.activeCaipAddress;
                if (!T) {
                  h(new Error("Failed to connect"));
                  return;
                }
                d(it.parseCaipAddress(T)), fe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: {
                    provider: t
                  }
                });
              }
            } catch (p) {
              fe.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: {
                  provider: t,
                  message: ee.parseError(p)
                }
              }), h(new Error("Failed to connect"));
            }
          } else fe.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_ERROR",
            properties: {
              provider: t,
              message: "Untrusted Origin"
            }
          });
        }
        async function f() {
          var _a2;
          if (fe.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: {
              provider: t
            }
          }), t === "farcaster") {
            n == null ? void 0 : n();
            const g = me.subscribeKey("open", (m) => {
              !m && t === "farcaster" && (h(new Error("Popup closed")), r == null ? void 0 : r(), g());
            }), p = V.getAuthConnector();
            if (p && !((_a2 = b.getAccountData(c)) == null ? void 0 : _a2.farcasterUrl)) try {
              const { url: T } = await p.provider.getFarcasterUri();
              b.setAccountProp("farcasterUrl", T, c);
            } catch {
              h(new Error("Failed to connect to farcaster"));
            }
          } else {
            const g = V.getAuthConnector();
            a = ee.returnOpenHref(`${F.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
            try {
              if (g) {
                const { uri: p } = await g.provider.getSocialRedirectUri({
                  provider: t
                });
                if (a && p) {
                  a.location.href = p, i = a;
                  const m = setInterval(() => {
                    (i == null ? void 0 : i.closed) && !o && (h(new Error("Popup closed")), clearInterval(m));
                  }, 1e3);
                  window.addEventListener("message", u, false);
                } else a == null ? void 0 : a.close(), h(new Error("Failed to initiate social connection"));
              }
            } catch {
              h(new Error("Failed to initiate social connection")), a == null ? void 0 : a.close();
            }
          }
        }
        f();
      });
    },
    connectEmail({ closeModalOnConnect: t = true, redirectViewOnModalClose: e = "Connect", onOpen: s, onConnect: n }) {
      return new Promise((r, i) => {
        if (s == null ? void 0 : s(), e) {
          const a = me.subscribeKey("open", (c) => {
            c || (ae.state.view !== e && ae.replace(e), a(), i(new Error("Modal closed")));
          });
        }
        const o = b.subscribeKey("activeCaipAddress", (a) => {
          a && (n == null ? void 0 : n(), t && me.close(), o(), r(it.parseCaipAddress(a)));
        });
      });
    },
    async updateEmail() {
      const t = H.getConnectedConnectorId(b.state.activeChain), e = V.getAuthConnector();
      if (!e) throw new Error("No auth connector found");
      if (t !== F.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
      const s = e.provider.getEmail() ?? "";
      return await me.open({
        view: "UpdateEmailWallet",
        data: {
          email: s,
          redirectView: void 0
        }
      }), new Promise((n, r) => {
        const i = setInterval(() => {
          const a = e.provider.getEmail() ?? "";
          a !== s && (me.close(), clearInterval(i), o(), n({
            email: a
          }));
        }, a0), o = me.subscribeKey("open", (a) => {
          a || (ae.state.view !== "Connect" && ae.push("Connect"), clearInterval(i), o(), r(new Error("Modal closed")));
        });
      });
    },
    canSwitchToSmartAccount(t) {
      return b.checkIfSmartAccountEnabled() && os(t) === on.ACCOUNT_TYPES.EOA;
    }
  };
  Ip = function() {
    var _a2, _b2;
    const t = ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) || "eip155", e = ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.id) || 1, s = ge.NATIVE_TOKEN_ADDRESS[t];
    return `${t}:${e}:${s}`;
  };
  r3 = function(t) {
    return ge.NATIVE_TOKEN_ADDRESS[t];
  };
  os = function(t) {
    var _a2;
    return (_a2 = b.getAccountData(t)) == null ? void 0 : _a2.preferredAccountType;
  };
  To = function(t) {
    return b.state.activeCaipNetwork;
  };
  let Br, vs, De, c0, Qo, we;
  da = {
    getConnectionStatus(t, e) {
      const s = V.state.activeConnectorIds[e], n = G.getConnections(e);
      return !!s && t.connectorId === s ? "connected" : n.some((o) => o.connectorId.toLowerCase() === t.connectorId.toLowerCase()) ? "active" : "disconnected";
    },
    excludeConnectorAddressFromConnections({ connections: t, connectorId: e, addresses: s }) {
      return t.map((n) => {
        if ((e ? n.connectorId.toLowerCase() === e.toLowerCase() : false) && s) {
          const i = n.accounts.filter((o) => !s.some((c) => c.toLowerCase() === o.address.toLowerCase()));
          return {
            ...n,
            accounts: i
          };
        }
        return n;
      });
    },
    excludeExistingConnections(t, e) {
      const s = new Set(t);
      return e.filter((n) => !s.has(n.connectorId));
    },
    getConnectionsByConnectorId(t, e) {
      return t.filter((s) => s.connectorId.toLowerCase() === e.toLowerCase());
    },
    getConnectionsData(t) {
      var _a2;
      const e = !!((_a2 = q.state.remoteFeatures) == null ? void 0 : _a2.multiWallet), s = V.state.activeConnectorIds[t], n = G.getConnections(t), i = (G.state.recentConnections.get(t) ?? []).filter((a) => V.getConnectorById(a.connectorId)), o = da.excludeExistingConnections([
        ...n.map((a) => a.connectorId),
        ...s ? [
          s
        ] : []
      ], i);
      return e ? {
        connections: n,
        recentConnections: o
      } : {
        connections: n.filter((a) => a.connectorId.toLowerCase() === (s == null ? void 0 : s.toLowerCase())),
        recentConnections: []
      };
    },
    onConnectMobile(t) {
      const e = G.state.wcUri;
      if ((t == null ? void 0 : t.mobile_link) && e) try {
        G.setWcError(false);
        const { mobile_link: s, link_mode: n, name: r } = t, { redirect: i, redirectUniversalLink: o, href: a } = ee.formatNativeUrl(s, e, n), c = i, l = o, d = ee.isIframe() ? "_top" : "_self";
        G.setWcLinking({
          name: r,
          href: a
        }), G.setRecentWallet(t), q.state.experimental_preferUniversalLinks && l ? ee.openHref(l, d) : ee.openHref(c, d);
      } catch (s) {
        fe.sendEvent({
          type: "track",
          event: "CONNECT_PROXY_ERROR",
          properties: {
            message: s instanceof Error ? s.message : "Error parsing the deep link",
            uri: e,
            mobile_link: t.mobile_link,
            name: t.name
          }
        }), G.setWcError(true);
      }
    }
  };
  Br = Be({
    loading: false,
    open: false,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: false,
    connectingWallet: void 0
  });
  vs = {
    state: Br,
    subscribe(t) {
      return ot(Br, () => t(Br));
    },
    subscribeOpen(t) {
      return at(Br, "open", t);
    },
    set(t) {
      Object.assign(Br, {
        ...Br,
        ...t
      });
    }
  };
  De = Be({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: false,
    empty: false,
    next: void 0
  });
  c0 = {
    state: De,
    subscribe(t) {
      return ot(De, () => t(De));
    },
    setLastNetworkInView(t) {
      De.lastNetworkInView = t;
    },
    async fetchTransactions(t) {
      var _a2;
      if (!t) throw new Error("Transactions can't be fetched without an accountAddress");
      De.loading = true;
      try {
        const e = await le.fetchTransactions({
          account: t,
          cursor: De.next,
          chainId: (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId
        }), s = Qo.filterSpamTransactions(e.data), n = Qo.filterByConnectedChain(s), r = [
          ...De.transactions,
          ...n
        ];
        De.loading = false, De.transactions = r, De.transactionsByYear = Qo.groupTransactionsByYearAndMonth(De.transactionsByYear, n), De.empty = r.length === 0, De.next = e.next ? e.next : void 0;
      } catch {
        const s = b.state.activeChain;
        fe.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: t,
            projectId: q.state.projectId,
            cursor: De.next,
            isSmartAccount: os(s) === on.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }), Us.showError("Failed to fetch transactions"), De.loading = false, De.empty = true, De.next = void 0;
      }
    },
    groupTransactionsByYearAndMonth(t = {}, e = []) {
      const s = t;
      return e.forEach((n) => {
        const r = new Date(n.metadata.minedAt).getFullYear(), i = new Date(n.metadata.minedAt).getMonth(), o = s[r] ?? {}, c = (o[i] ?? []).filter((l) => l.id !== n.id);
        s[r] = {
          ...o,
          [i]: [
            ...c,
            n
          ].sort((l, d) => new Date(d.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
        };
      }), s;
    },
    filterSpamTransactions(t) {
      return t.filter((e) => {
        var _a2;
        return !((_a2 = e.transfers) == null ? void 0 : _a2.every((n) => {
          var _a3;
          return ((_a3 = n.nft_info) == null ? void 0 : _a3.flags.is_spam) === true;
        }));
      });
    },
    filterByConnectedChain(t) {
      var _a2;
      const e = (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
      return t.filter((n) => n.metadata.chain === e);
    },
    clearCursor() {
      De.next = void 0;
    },
    resetTransactions() {
      De.transactions = [], De.transactionsByYear = {}, De.lastNetworkInView = void 0, De.loading = false, De.empty = false, De.next = void 0;
    }
  };
  Qo = ls(c0, "API_ERROR");
  we = Be({
    connections: /* @__PURE__ */ new Map(),
    recentConnections: /* @__PURE__ */ new Map(),
    isSwitchingConnection: false,
    wcError: false,
    wcFetchingUri: false,
    buffering: false,
    status: "disconnected"
  });
  let Xn;
  let l0, ic;
  l0 = {
    state: we,
    subscribe(t) {
      return ot(we, () => t(we));
    },
    subscribeKey(t, e) {
      return at(we, t, e);
    },
    _getClient() {
      return we._client;
    },
    setClient(t) {
      we._client = eo(t);
    },
    initialize(t) {
      const e = t.filter((s) => !!s.namespace).map((s) => s.namespace);
      G.syncStorageConnections(e);
    },
    syncStorageConnections(t) {
      const e = H.getConnections(), s = t ?? Array.from(b.state.chains.keys());
      for (const n of s) {
        const r = e[n] ?? [], i = new Map(we.recentConnections);
        i.set(n, r), we.recentConnections = i;
      }
    },
    getConnections(t) {
      return t ? we.connections.get(t) ?? [] : [];
    },
    hasAnyConnection(t) {
      const e = G.state.connections;
      return Array.from(e.values()).flatMap((s) => s).some(({ connectorId: s }) => s === t);
    },
    async connectWalletConnect({ cache: t = "auto" } = {}) {
      var _a2, _b2, _c2, _d3;
      we.wcFetchingUri = true;
      const e = ee.isTelegram() || ee.isSafari() && ee.isIos();
      if (t === "always" || t === "auto" && e) {
        if (Xn) {
          await Xn, Xn = void 0;
          return;
        }
        if (!ee.isPairingExpired(we == null ? void 0 : we.wcPairingExpiry)) {
          const s = we.wcUri;
          we.wcUri = s;
          return;
        }
        Xn = (_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.connectWalletConnect) == null ? void 0 : _b2.call(_a2).catch(() => {
        }), G.state.status = "connecting", await Xn, Xn = void 0, we.wcPairingExpiry = void 0, G.state.status = "connected";
      } else await ((_d3 = (_c2 = G._getClient()) == null ? void 0 : _c2.connectWalletConnect) == null ? void 0 : _d3.call(_c2));
    },
    async connectExternal(t, e, s = true) {
      var _a2, _b2, _c2;
      const n = await ((_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.connectExternal) == null ? void 0 : _b2.call(_a2, t));
      s && b.setActiveNamespace(e);
      const r = V.state.allConnectors.find((o) => o.id === (t == null ? void 0 : t.id)), i = t.type === "AUTH" ? "email" : "browser";
      return fe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: {
          method: i,
          name: (r == null ? void 0 : r.name) || "Unknown",
          view: ae.state.view,
          walletRank: (_c2 = r == null ? void 0 : r.explorerWallet) == null ? void 0 : _c2.order
        }
      }), n;
    },
    async reconnectExternal(t) {
      var _a2, _b2;
      await ((_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.reconnectExternal) == null ? void 0 : _b2.call(_a2, t));
      const e = t.chain || b.state.activeChain;
      e && V.setConnectorId(t.id, e);
    },
    async setPreferredAccountType(t, e) {
      var _a2;
      if (!e) return;
      me.setLoading(true, b.state.activeChain);
      const s = V.getAuthConnector();
      s && (b.setAccountProp("preferredAccountType", t, e), await s.provider.setPreferredAccount(t), H.setPreferredAccountTypes(Object.entries(b.state.chains).reduce((n, [r, i]) => {
        const o = r, a = os(o);
        return a !== void 0 && (n[o] = a), n;
      }, {})), await G.reconnectExternal(s), me.setLoading(false, b.state.activeChain), fe.sendEvent({
        type: "track",
        event: "SET_PREFERRED_ACCOUNT_TYPE",
        properties: {
          accountType: t,
          network: ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || ""
        }
      }));
    },
    async signMessage(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.signMessage(t);
    },
    parseUnits(t, e) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.parseUnits(t, e);
    },
    formatUnits(t, e) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.formatUnits(t, e);
    },
    updateBalance(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.updateBalance(t);
    },
    async sendTransaction(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.sendTransaction(t);
    },
    async getCapabilities(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.getCapabilities(t);
    },
    async grantPermissions(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.grantPermissions(t);
    },
    async walletGetAssets(t) {
      var _a2;
      return ((_a2 = G._getClient()) == null ? void 0 : _a2.walletGetAssets(t)) ?? {};
    },
    async estimateGas(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.estimateGas(t);
    },
    async writeContract(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.writeContract(t);
    },
    async writeSolanaTransaction(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.writeSolanaTransaction(t);
    },
    async getEnsAddress(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.getEnsAddress(t);
    },
    async getEnsAvatar(t) {
      var _a2;
      return (_a2 = G._getClient()) == null ? void 0 : _a2.getEnsAvatar(t);
    },
    checkInstalled(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.checkInstalled) == null ? void 0 : _b2.call(_a2, t)) || false;
    },
    resetWcConnection() {
      we.wcUri = void 0, we.wcPairingExpiry = void 0, we.wcLinking = void 0, we.recentWallet = void 0, we.wcFetchingUri = false, we.status = "disconnected", Qo.resetTransactions(), H.deleteWalletConnectDeepLink(), H.deleteRecentWallet(), vs.set({
        connectingWallet: void 0
      });
    },
    resetUri() {
      we.wcUri = void 0, we.wcPairingExpiry = void 0, Xn = void 0, we.wcFetchingUri = false, vs.set({
        connectingWallet: void 0
      });
    },
    finalizeWcConnection(t) {
      var _a2, _b2;
      const { wcLinking: e, recentWallet: s } = G.state;
      e && H.setWalletConnectDeepLink(e), s && H.setAppKitRecent(s), t && fe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: t,
        properties: {
          method: e ? "mobile" : "qrcode",
          name: ((_b2 = (_a2 = ae.state.data) == null ? void 0 : _a2.wallet) == null ? void 0 : _b2.name) || "Unknown",
          view: ae.state.view,
          walletRank: s == null ? void 0 : s.order
        }
      });
    },
    setWcBasic(t) {
      we.wcBasic = t;
    },
    setUri(t) {
      we.wcUri = t, we.wcFetchingUri = false, we.wcPairingExpiry = ee.getPairingExpiry();
    },
    setWcLinking(t) {
      we.wcLinking = t;
    },
    setWcError(t) {
      we.wcError = t, we.wcFetchingUri = false, we.buffering = false;
    },
    setRecentWallet(t) {
      we.recentWallet = t;
    },
    setBuffering(t) {
      we.buffering = t;
    },
    setStatus(t) {
      we.status = t;
    },
    setIsSwitchingConnection(t) {
      we.isSwitchingConnection = t;
    },
    async disconnect({ id: t, namespace: e, initialDisconnect: s } = {}) {
      var _a2;
      try {
        await ((_a2 = G._getClient()) == null ? void 0 : _a2.disconnect({
          id: t,
          chainNamespace: e,
          initialDisconnect: s
        }));
      } catch (n) {
        throw new Ar("Failed to disconnect", "INTERNAL_SDK_ERROR", n);
      }
    },
    async disconnectConnector({ id: t, namespace: e }) {
      var _a2;
      try {
        await ((_a2 = G._getClient()) == null ? void 0 : _a2.disconnectConnector({
          id: t,
          namespace: e
        }));
      } catch (s) {
        throw new Ar("Failed to disconnect connector", "INTERNAL_SDK_ERROR", s);
      }
    },
    setConnections(t, e) {
      const s = new Map(we.connections);
      s.set(e, t), we.connections = s;
    },
    async handleAuthAccountSwitch({ address: t, namespace: e }) {
      var _a2, _b2, _c2;
      const n = (_c2 = (_b2 = (_a2 = b.getAccountData(e)) == null ? void 0 : _a2.user) == null ? void 0 : _b2.accounts) == null ? void 0 : _c2.find((i) => i.type === "smartAccount"), r = n && n.address.toLowerCase() === t.toLowerCase() && bi.canSwitchToSmartAccount(e) ? "smartAccount" : "eoa";
      await G.setPreferredAccountType(r, e);
    },
    async handleActiveConnection({ connection: t, namespace: e, address: s }) {
      var _a2;
      const n = V.getConnectorById(t.connectorId), r = t.connectorId === F.CONNECTOR_ID.AUTH;
      if (!n) throw new Error(`No connector found for connection: ${t.connectorId}`);
      if (r) s && await G.handleAuthAccountSwitch({
        address: s,
        namespace: e
      });
      else return (_a2 = await G.connectExternal({
        id: n.id,
        type: n.type,
        provider: n.provider,
        address: s,
        chain: e
      }, e)) == null ? void 0 : _a2.address;
      return s;
    },
    async handleDisconnectedConnection({ connection: t, namespace: e, address: s, closeModalOnConnect: n }) {
      var _a2, _b2;
      const r = V.getConnectorById(t.connectorId), i = (_b2 = (_a2 = t.auth) == null ? void 0 : _a2.name) == null ? void 0 : _b2.toLowerCase(), o = t.connectorId === F.CONNECTOR_ID.AUTH, a = t.connectorId === F.CONNECTOR_ID.WALLET_CONNECT;
      if (!r) throw new Error(`No connector found for connection: ${t.connectorId}`);
      let c;
      if (o) if (i && bi.isSocialProvider(i)) {
        const { address: l } = await bi.connectSocial({
          social: i,
          closeModalOnConnect: n,
          onOpenFarcaster() {
            me.open({
              view: "ConnectingFarcaster"
            });
          },
          onConnect() {
            ae.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const { address: l } = await bi.connectEmail({
          closeModalOnConnect: n,
          onOpen() {
            me.open({
              view: "EmailLogin"
            });
          },
          onConnect() {
            ae.replace("ProfileWallets");
          }
        });
        c = l;
      }
      else if (a) {
        const { address: l } = await bi.connectWalletConnect({
          walletConnect: true,
          connector: r,
          closeModalOnConnect: n,
          onOpen(d) {
            const h = d ? "AllWallets" : "ConnectingWalletConnect";
            me.state.open ? ae.push(h) : me.open({
              view: h
            });
          },
          onConnect() {
            ae.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const l = await G.connectExternal({
          id: r.id,
          type: r.type,
          provider: r.provider,
          chain: e
        }, e);
        l && (c = l.address);
      }
      return o && s && await G.handleAuthAccountSwitch({
        address: s,
        namespace: e
      }), c;
    },
    async switchConnection({ connection: t, address: e, namespace: s, closeModalOnConnect: n, onChange: r }) {
      var _a2;
      let i;
      const o = (_a2 = b.getAccountData(s)) == null ? void 0 : _a2.caipAddress;
      if (o) {
        const { address: c } = it.parseCaipAddress(o);
        i = c;
      }
      const a = da.getConnectionStatus(t, s);
      switch (a) {
        case "connected":
        case "active": {
          const c = await G.handleActiveConnection({
            connection: t,
            namespace: s,
            address: e
          });
          if (i && c) {
            const l = c.toLowerCase() !== i.toLowerCase();
            r == null ? void 0 : r({
              address: c,
              namespace: s,
              hasSwitchedAccount: l,
              hasSwitchedWallet: a === "active"
            });
          }
          break;
        }
        case "disconnected": {
          const c = await G.handleDisconnectedConnection({
            connection: t,
            namespace: s,
            address: e,
            closeModalOnConnect: n
          });
          c && (r == null ? void 0 : r({
            address: c,
            namespace: s,
            hasSwitchedAccount: true,
            hasSwitchedWallet: true
          }));
          break;
        }
        default:
          throw new Error(`Invalid connection status: ${a}`);
      }
    }
  };
  G = ls(l0);
  ic = {
    createBalance(t, e) {
      const s = {
        name: t.metadata.name || "",
        symbol: t.metadata.symbol || "",
        decimals: t.metadata.decimals || 0,
        value: t.metadata.value || 0,
        price: t.metadata.price || 0,
        iconUrl: t.metadata.iconUrl || ""
      };
      return {
        name: s.name,
        symbol: s.symbol,
        chainId: e,
        address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e),
        value: s.value,
        price: s.price,
        quantity: {
          decimals: s.decimals.toString(),
          numeric: this.convertHexToBalance({
            hex: t.balance,
            decimals: s.decimals
          })
        },
        iconUrl: s.iconUrl
      };
    },
    convertHexToBalance({ hex: t, decimals: e }) {
      return cp(BigInt(t), e);
    },
    convertAddressToCAIP10Address(t, e) {
      return `${e}:${t}`;
    },
    createCAIP2ChainId(t, e) {
      return `${e}:${parseInt(t, 16)}`;
    },
    getChainIdHexFromCAIP2ChainId(t) {
      const e = t.split(":");
      if (e.length < 2 || !e[1]) return "0x0";
      const s = e[1], n = parseInt(s, 10);
      return isNaN(n) ? "0x0" : `0x${n.toString(16)}`;
    },
    isWalletGetAssetsResponse(t) {
      return typeof t != "object" || t === null ? false : Object.values(t).every((e) => Array.isArray(e) && e.every((s) => this.isValidAsset(s)));
    },
    isValidAsset(t) {
      return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string";
    }
  };
  let oc;
  async function yh() {
    if (!oc) {
      const { createPublicClient: t, http: e, defineChain: s } = await oa(async () => {
        const { createPublicClient: n, http: r, defineChain: i } = await import("./index-BP1CgxJZ.js");
        return {
          createPublicClient: n,
          http: r,
          defineChain: i
        };
      }, __vite__mapDeps([0,1,2,3]));
      oc = {
        createPublicClient: t,
        http: e,
        defineChain: s
      };
    }
    return oc;
  }
  let dl, ac, ha, Tt, ve, h0, pe, cc, xo, Q, Sp, u0, xt, f0, Wi, hl, p0, Ce, g0, ul;
  dl = {
    getBlockchainApiRpcUrl(t, e) {
      const s = new URL("https://rpc.walletconnect.org/v1/");
      return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
    },
    async getViemChain(t) {
      const { defineChain: e } = await yh(), { chainId: s } = it.parseCaipNetworkId(t.caipNetworkId);
      return e({
        ...t,
        id: Number(s)
      });
    },
    async createViemPublicClient(t) {
      const { createPublicClient: e, http: s } = await yh(), n = q.state.projectId, r = await dl.getViemChain(t);
      if (!r) throw new Error(`Chain ${t.caipNetworkId} not found in viem/chains`);
      return e({
        chain: r,
        transport: s(dl.getBlockchainApiRpcUrl(t.caipNetworkId, n))
      });
    }
  };
  gd = {
    async getMyTokensWithBalance(t = {
      forceUpdate: void 0,
      caipNetwork: b.state.activeCaipNetwork,
      address: ((_c2) => (_c2 = b.getAccountData()) == null ? void 0 : _c2.address)()
    }) {
      const { forceUpdate: e, caipNetwork: s, address: n } = t, r = V.getConnectorId("eip155") === F.CONNECTOR_ID.AUTH;
      if (!n) return [];
      const i = s ? `${s.caipNetworkId}:${n}` : n, o = H.getBalanceCacheForCaipAddress(i);
      if (o) return o.balances;
      if (s && s.chainNamespace === F.CHAIN.EVM && r) {
        const c = await this.getEIP155Balances(n, s);
        if (c) return this.filterLowQualityTokens(c);
      }
      const a = await le.getBalance(n, s == null ? void 0 : s.caipNetworkId, e);
      return this.filterLowQualityTokens(a.balances);
    },
    async getEIP155Balances(t, e) {
      var _a2, _b2, _c2;
      try {
        const s = ic.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);
        if (!((_c2 = (_b2 = (_a2 = await G.getCapabilities(t)) == null ? void 0 : _a2[s]) == null ? void 0 : _b2.assetDiscovery) == null ? void 0 : _c2.supported)) return null;
        const r = await G.walletGetAssets({
          account: t,
          chainFilter: [
            s
          ]
        });
        if (!ic.isWalletGetAssetsResponse(r)) return null;
        const o = (r[s] || []).map((a) => ic.createBalance(a, e.caipNetworkId));
        return H.updateBalanceCache({
          caipAddress: `${e.caipNetworkId}:${t}`,
          balance: {
            balances: o
          },
          timestamp: Date.now()
        }), o;
      } catch {
        return null;
      }
    },
    filterLowQualityTokens(t) {
      return t.filter((e) => e.quantity.decimals !== "0");
    },
    async fetchERC20Balance({ caipAddress: t, assetAddress: e, caipNetwork: s }) {
      const n = await dl.createViemPublicClient(s), { address: r } = it.parseCaipAddress(t), [{ result: i }, { result: o }, { result: a }, { result: c }] = await n.multicall({
        contracts: [
          {
            address: e,
            functionName: "name",
            args: [],
            abi: No
          },
          {
            address: e,
            functionName: "symbol",
            args: [],
            abi: No
          },
          {
            address: e,
            functionName: "balanceOf",
            args: [
              r
            ],
            abi: No
          },
          {
            address: e,
            functionName: "decimals",
            args: [],
            abi: No
          }
        ]
      });
      return {
        name: i,
        symbol: o,
        decimals: c,
        balance: a && c ? cp(a, c) : "0"
      };
    }
  };
  ac = {
    adapters: {}
  };
  Np = {
    state: ac,
    initialize(t) {
      ac.adapters = {
        ...t
      };
    },
    get(t) {
      return ac.adapters[t];
    }
  };
  ha = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0,
    sui: void 0,
    stacks: void 0,
    ton: void 0
  };
  Tt = Be({
    providers: {
      ...ha
    },
    providerIds: {
      ...ha
    }
  });
  $e = {
    state: Tt,
    subscribeKey(t, e) {
      return at(Tt, t, e);
    },
    subscribe(t) {
      return ot(Tt, () => {
        t(Tt);
      });
    },
    subscribeProviders(t) {
      return ot(Tt.providers, () => t(Tt.providers));
    },
    setProvider(t, e) {
      t && e && (Tt.providers[t] = eo(e));
    },
    getProvider(t) {
      if (t) return Tt.providers[t];
    },
    setProviderId(t, e) {
      e && (Tt.providerIds[t] = e);
    },
    getProviderId(t) {
      if (t) return Tt.providerIds[t];
    },
    reset() {
      Tt.providers = {
        ...ha
      }, Tt.providerIds = {
        ...ha
      };
    },
    resetChain(t) {
      Tt.providers[t] = void 0, Tt.providerIds[t] = void 0;
    }
  };
  d0 = {
    async getTokenList(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = await le.fetchSwapTokens({
        chainId: t
      })) == null ? void 0 : _a2.tokens) == null ? void 0 : _b2.map((n) => ({
        ...n,
        eip2612: false,
        quantity: {
          decimals: "0",
          numeric: "0"
        },
        price: 0,
        value: 0
      }))) || [];
    },
    async fetchGasPrice() {
      var _a2;
      const t = b.state.activeCaipNetwork;
      if (!t) return null;
      try {
        switch (t.chainNamespace) {
          case "solana":
            const e = (_a2 = await (G == null ? void 0 : G.estimateGas({
              chainNamespace: "solana"
            }))) == null ? void 0 : _a2.toString();
            return {
              standard: e,
              fast: e,
              instant: e
            };
          case "eip155":
          default:
            return await le.fetchGasPrice({
              chainId: t.caipNetworkId
            });
        }
      } catch {
        return null;
      }
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e, sourceTokenAmount: s, sourceTokenDecimals: n }) {
      const r = await le.fetchSwapAllowance({
        tokenAddress: t,
        userAddress: e
      });
      if ((r == null ? void 0 : r.allowance) && s && n) {
        const i = G.parseUnits(s, n) || 0;
        return BigInt(r.allowance) >= i;
      }
      return false;
    },
    async getMyTokensWithBalance(t) {
      var _a2;
      const e = await gd.getMyTokensWithBalance({
        forceUpdate: t,
        caipNetwork: b.state.activeCaipNetwork,
        address: (_a2 = b.getAccountData()) == null ? void 0 : _a2.address
      });
      return b.setAccountProp("tokenBalance", e, b.state.activeChain), this.mapBalancesToSwapTokens(e);
    },
    mapBalancesToSwapTokens(t) {
      return (t == null ? void 0 : t.map((e) => ({
        ...e,
        address: (e == null ? void 0 : e.address) ? e.address : Ip(),
        decimals: parseInt(e.quantity.decimals, 10),
        logoUri: e.iconUrl,
        eip2612: false
      }))) || [];
    },
    async handleSwapError(t) {
      var _a2, _b2, _c2, _d3;
      try {
        const e = t == null ? void 0 : t.cause;
        return (e == null ? void 0 : e.json) && ((_d3 = (_c2 = (_b2 = (_a2 = await e.json()) == null ? void 0 : _a2.reasons) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.description) == null ? void 0 : _d3.includes("insufficient liquidity")) ? "Insufficient liquidity" : void 0;
      } catch {
        return;
      }
    }
  };
  ve = Be({
    tokenBalances: [],
    loading: false
  });
  h0 = {
    state: ve,
    subscribe(t) {
      return ot(ve, () => t(ve));
    },
    subscribeKey(t, e) {
      return at(ve, t, e);
    },
    setToken(t) {
      t && (ve.token = eo(t));
    },
    setTokenAmount(t) {
      ve.sendTokenAmount = t;
    },
    setReceiverAddress(t) {
      ve.receiverAddress = t;
    },
    setReceiverProfileImageUrl(t) {
      ve.receiverProfileImageUrl = t;
    },
    setReceiverProfileName(t) {
      ve.receiverProfileName = t;
    },
    setNetworkBalanceInUsd(t) {
      ve.networkBalanceInUSD = t;
    },
    setLoading(t) {
      ve.loading = t;
    },
    getSdkEventProperties(t) {
      var _a2, _b2;
      return {
        message: ee.parseError(t),
        isSmartAccount: os(b.state.activeChain) === on.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_a2 = ve.token) == null ? void 0 : _a2.symbol) || "",
        amount: ve.sendTokenAmount ?? 0,
        network: ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
      };
    },
    async sendToken() {
      var _a2;
      try {
        switch (pe.setLoading(true), (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) {
          case "eip155":
            await pe.sendEvmToken();
            return;
          case "solana":
            await pe.sendSolanaToken();
            return;
          default:
            throw new Error("Unsupported chain");
        }
      } catch (t) {
        throw rn.isUserRejectedRequestError(t) ? new bp(t) : t;
      } finally {
        pe.setLoading(false);
      }
    },
    async sendEvmToken() {
      var _a2, _b2, _c2;
      const t = b.state.activeChain;
      if (!t) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
      const e = os(t);
      if (!pe.state.sendTokenAmount || !pe.state.receiverAddress) throw new Error("An amount and receiver address are required");
      if (!pe.state.token) throw new Error("A token is required");
      if ((_a2 = pe.state.token) == null ? void 0 : _a2.address) {
        fe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === on.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: pe.state.token.address,
            amount: pe.state.sendTokenAmount,
            network: ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
          }
        });
        const { hash: s } = await pe.sendERC20Token({
          receiverAddress: pe.state.receiverAddress,
          tokenAddress: pe.state.token.address,
          sendTokenAmount: pe.state.sendTokenAmount,
          decimals: pe.state.token.quantity.decimals
        });
        s && (ve.hash = s);
      } else {
        fe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === on.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: pe.state.token.symbol || "",
            amount: pe.state.sendTokenAmount,
            network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || ""
          }
        });
        const { hash: s } = await pe.sendNativeToken({
          receiverAddress: pe.state.receiverAddress,
          sendTokenAmount: pe.state.sendTokenAmount,
          decimals: pe.state.token.quantity.decimals
        });
        s && (ve.hash = s);
      }
    },
    async fetchTokenBalance(t) {
      var _a2, _b2, _c2;
      ve.loading = true;
      const e = b.state.activeChain, s = (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, n = (_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, r = ((_c2 = b.getAccountData(e)) == null ? void 0 : _c2.caipAddress) ?? b.state.activeCaipAddress, i = r ? ee.getPlainAddress(r) : void 0;
      if (ve.lastRetry && !ee.isAllowedRetry(ve.lastRetry, 30 * ge.ONE_SEC_MS)) return ve.loading = false, [];
      try {
        if (i && s && n) {
          const o = await gd.getMyTokensWithBalance();
          return ve.tokenBalances = o, ve.lastRetry = void 0, o;
        }
      } catch (o) {
        ve.lastRetry = Date.now(), t == null ? void 0 : t(o), Us.showError("Token Balance Unavailable");
      } finally {
        ve.loading = false;
      }
      return [];
    },
    fetchNetworkBalance() {
      if (ve.tokenBalances.length === 0) return;
      const t = d0.mapBalancesToSwapTokens(ve.tokenBalances);
      if (!t) return;
      const e = t.find((s) => s.address === Ip());
      e && (ve.networkBalanceInUSD = e ? yp.multiply(e.quantity.numeric, e.price).toString() : "0");
    },
    async sendNativeToken(t) {
      var _a2, _b2, _c2, _d3;
      ae.pushTransactionStack({});
      const e = t.receiverAddress, s = (_a2 = b.getAccountData()) == null ? void 0 : _a2.address, n = G.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), i = await G.sendTransaction({
        chainNamespace: F.CHAIN.EVM,
        to: e,
        address: s,
        data: "0x",
        value: n ?? BigInt(0)
      });
      return fe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: os("eip155") === on.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b2 = pe.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: t.sendTokenAmount,
          network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: i || ""
        }
      }), (_d3 = G._getClient()) == null ? void 0 : _d3.updateBalance("eip155"), pe.resetSend(), {
        hash: i
      };
    },
    async sendERC20Token(t) {
      var _a2, _b2, _c2;
      ae.pushTransactionStack({
        onSuccess() {
          ae.replace("Account");
        }
      });
      const e = G.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), s = (_a2 = b.getAccountData()) == null ? void 0 : _a2.address;
      if (s && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
        const n = ee.getPlainAddress(t.tokenAddress);
        if (!n) throw new Error("SendController:sendERC20Token - tokenAddress is required");
        const r = await G.writeContract({
          fromAddress: s,
          tokenAddress: n,
          args: [
            t.receiverAddress,
            e ?? BigInt(0)
          ],
          method: "transfer",
          abi: Iy.getERC20Abi(n),
          chainNamespace: F.CHAIN.EVM
        });
        return fe.sendEvent({
          type: "track",
          event: "SEND_SUCCESS",
          properties: {
            isSmartAccount: os("eip155") === on.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((_b2 = pe.state.token) == null ? void 0 : _b2.symbol) || "",
            amount: t.sendTokenAmount,
            network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
            hash: r || ""
          }
        }), pe.resetSend(), {
          hash: r
        };
      }
      return {
        hash: void 0
      };
    },
    async sendSolanaToken() {
      var _a2, _b2, _c2;
      if (!pe.state.sendTokenAmount || !pe.state.receiverAddress) throw new Error("An amount and receiver address are required");
      ae.pushTransactionStack({
        onSuccess() {
          ae.replace("Account");
        }
      });
      let t;
      pe.state.token && pe.state.token.address !== ge.SOLANA_NATIVE_TOKEN_ADDRESS && (ee.isCaipAddress(pe.state.token.address) ? t = ee.getPlainAddress(pe.state.token.address) : t = pe.state.token.address);
      const e = await G.sendTransaction({
        chainNamespace: "solana",
        tokenMint: t,
        to: pe.state.receiverAddress,
        value: pe.state.sendTokenAmount
      });
      e && (ve.hash = e), (_a2 = G._getClient()) == null ? void 0 : _a2.updateBalance("solana"), fe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: false,
          token: ((_b2 = pe.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: pe.state.sendTokenAmount,
          network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: e || ""
        }
      }), pe.resetSend();
    },
    resetSend() {
      ve.token = void 0, ve.sendTokenAmount = void 0, ve.receiverAddress = void 0, ve.receiverProfileImageUrl = void 0, ve.receiverProfileName = void 0, ve.loading = false, ve.tokenBalances = [];
    }
  };
  pe = ls(h0);
  cc = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    user: void 0,
    preferredAccountType: void 0
  };
  xo = {
    caipNetwork: void 0,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
  };
  Q = Be({
    chains: Ly(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: false,
    universalAdapter: {
      connectionControllerClient: void 0
    },
    isSwitchingNamespace: false
  });
  Sp = {
    state: Q,
    subscribe(t) {
      return ot(Q, () => {
        t(Q);
      });
    },
    subscribeKey(t, e) {
      return at(Q, t, e);
    },
    subscribeAccountStateProp(t, e, s) {
      var _a2;
      const n = s || Q.activeChain;
      return n ? at(((_a2 = Q.chains.get(n)) == null ? void 0 : _a2.accountState) || {}, t, e) : () => {
      };
    },
    subscribeChainProp(t, e, s) {
      let n;
      return ot(Q.chains, () => {
        var _a2;
        const r = s || Q.activeChain;
        if (r) {
          const i = (_a2 = Q.chains.get(r)) == null ? void 0 : _a2[t];
          n !== i && (n = i, e(i));
        }
      });
    },
    initialize(t, e, s) {
      const { chainId: n, namespace: r } = H.getActiveNetworkProps(), i = e == null ? void 0 : e.find((d) => d.id.toString() === (n == null ? void 0 : n.toString())), a = t.find((d) => (d == null ? void 0 : d.namespace) === r) || (t == null ? void 0 : t[0]), c = t.map((d) => d.namespace).filter((d) => d !== void 0), l = q.state.enableEmbedded ? /* @__PURE__ */ new Set([
        ...c
      ]) : /* @__PURE__ */ new Set([
        ...(e == null ? void 0 : e.map((d) => d.chainNamespace)) ?? []
      ]);
      ((t == null ? void 0 : t.length) === 0 || !a) && (Q.noAdapters = true), Q.noAdapters || (Q.activeChain = a == null ? void 0 : a.namespace, Q.activeCaipNetwork = i, b.setChainNetworkData(a == null ? void 0 : a.namespace, {
        caipNetwork: i
      }), Q.activeChain && vs.set({
        activeChain: a == null ? void 0 : a.namespace
      })), l.forEach((d) => {
        const h = e == null ? void 0 : e.filter((g) => g.chainNamespace === d), u = H.getPreferredAccountTypes() || {}, f = {
          ...q.state.defaultAccountTypes,
          ...u
        };
        b.state.chains.set(d, {
          namespace: d,
          networkState: Be({
            ...xo,
            caipNetwork: h == null ? void 0 : h[0]
          }),
          accountState: Be({
            ...cc,
            preferredAccountType: f[d]
          }),
          caipNetworks: h ?? [],
          ...s
        }), b.setRequestedCaipNetworks(h ?? [], d);
      });
    },
    removeAdapter(t) {
      var _a2, _b2;
      if (Q.activeChain === t) {
        const e = Array.from(Q.chains.entries()).find(([s]) => s !== t);
        if (e) {
          const s = (_b2 = (_a2 = e[1]) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0];
          s && b.setActiveCaipNetwork(s);
        }
      }
      Q.chains.delete(t);
    },
    addAdapter(t, { connectionControllerClient: e }, s) {
      if (!t.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
      Q.chains.set(t.namespace, {
        namespace: t.namespace,
        networkState: {
          ...xo,
          caipNetwork: s[0]
        },
        accountState: {
          ...cc
        },
        caipNetworks: s,
        connectionControllerClient: e
      }), b.setRequestedCaipNetworks((s == null ? void 0 : s.filter((n) => n.chainNamespace === t.namespace)) ?? [], t.namespace);
    },
    addNetwork(t) {
      var _a2;
      const e = Q.chains.get(t.chainNamespace);
      if (e) {
        const s = [
          ...e.caipNetworks || []
        ];
        ((_a2 = e.caipNetworks) == null ? void 0 : _a2.find((n) => n.id === t.id)) || s.push(t), Q.chains.set(t.chainNamespace, {
          ...e,
          caipNetworks: s
        }), b.setRequestedCaipNetworks(s, t.chainNamespace), V.filterByNamespace(t.chainNamespace, true);
      }
    },
    removeNetwork(t, e) {
      var _a2, _b2, _c2;
      const s = Q.chains.get(t);
      if (s) {
        const n = ((_a2 = Q.activeCaipNetwork) == null ? void 0 : _a2.id) === e, r = [
          ...((_b2 = s.caipNetworks) == null ? void 0 : _b2.filter((i) => i.id !== e)) || []
        ];
        n && ((_c2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _c2[0]) && b.setActiveCaipNetwork(s.caipNetworks[0]), Q.chains.set(t, {
          ...s,
          caipNetworks: r
        }), b.setRequestedCaipNetworks(r || [], t), r.length === 0 && V.filterByNamespace(t, false);
      }
    },
    setAdapterNetworkState(t, e) {
      const s = Q.chains.get(t);
      s && (s.networkState = {
        ...s.networkState || xo,
        ...e
      }, Q.chains.set(t, s));
    },
    setChainAccountData(t, e, s = true) {
      if (!t) throw new Error("Chain is required to update chain account data");
      const n = Q.chains.get(t);
      if (n) {
        const r = {
          ...n.accountState || cc,
          ...e
        };
        Q.chains.set(t, {
          ...n,
          accountState: r
        }), (Q.chains.size === 1 || Q.activeChain === t) && e.caipAddress && (Q.activeCaipAddress = e.caipAddress);
      }
    },
    setChainNetworkData(t, e) {
      if (!t) return;
      const s = Q.chains.get(t);
      if (s) {
        const n = {
          ...s.networkState || xo,
          ...e
        };
        Q.chains.set(t, {
          ...s,
          networkState: n
        });
      }
    },
    setAccountProp(t, e, s, n = true) {
      b.setChainAccountData(s, {
        [t]: e
      }, n);
    },
    setActiveNamespace(t) {
      var _a2, _b2;
      Q.activeChain = t;
      const e = t ? Q.chains.get(t) : void 0, s = (_a2 = e == null ? void 0 : e.networkState) == null ? void 0 : _a2.caipNetwork;
      (s == null ? void 0 : s.id) && t && (Q.activeCaipAddress = (_b2 = e == null ? void 0 : e.accountState) == null ? void 0 : _b2.caipAddress, Q.activeCaipNetwork = s, b.setChainNetworkData(t, {
        caipNetwork: s
      }), H.setActiveCaipNetworkId(s == null ? void 0 : s.caipNetworkId), vs.set({
        activeChain: t,
        selectedNetworkId: s == null ? void 0 : s.caipNetworkId
      }));
    },
    setActiveCaipNetwork(t) {
      var _a2, _b2;
      if (!t) return;
      const e = Q.activeChain === t.chainNamespace;
      e || b.setIsSwitchingNamespace(true);
      const s = Q.chains.get(t.chainNamespace);
      Q.activeChain = t.chainNamespace, Q.activeCaipNetwork = t, b.setChainNetworkData(t.chainNamespace, {
        caipNetwork: t
      });
      let n = (_a2 = s == null ? void 0 : s.accountState) == null ? void 0 : _a2.address;
      if (n) Q.activeCaipAddress = `${t.chainNamespace}:${t.id}:${n}`;
      else if (e && Q.activeCaipAddress) {
        const { address: i } = it.parseCaipAddress(Q.activeCaipAddress);
        n = i, Q.activeCaipAddress = `${t.caipNetworkId}:${n}`;
      } else Q.activeCaipAddress = void 0;
      b.setChainAccountData(t.chainNamespace, {
        address: n,
        caipAddress: Q.activeCaipAddress
      }), pe.resetSend(), vs.set({
        activeChain: Q.activeChain,
        selectedNetworkId: (_b2 = Q.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId
      }), H.setActiveCaipNetworkId(t.caipNetworkId), !b.checkIfSupportedNetwork(t.chainNamespace) && q.state.enableNetworkSwitch && !q.state.allowUnsupportedChain && !G.state.wcBasic && b.showUnsupportedChainUI();
    },
    addCaipNetwork(t) {
      var _a2;
      if (!t) return;
      const e = Q.chains.get(t.chainNamespace);
      e && ((_a2 = e == null ? void 0 : e.caipNetworks) == null ? void 0 : _a2.push(t));
    },
    async switchActiveNamespace(t) {
      var _a2;
      if (!t) return;
      const e = t !== b.state.activeChain, s = (_a2 = b.getNetworkData(t)) == null ? void 0 : _a2.caipNetwork, n = b.getCaipNetworkByNamespace(t, s == null ? void 0 : s.id);
      e && n && await b.switchActiveNetwork(n);
    },
    async switchActiveNetwork(t, { throwOnFailure: e = false } = {}) {
      var _a2;
      const s = b.state.activeChain;
      if (!s) throw new Error("ChainController:switchActiveNetwork - namespace is required");
      const n = $e.getProviderId(Q.activeChain) === "AUTH", r = (_a2 = b.getAccountData(s)) == null ? void 0 : _a2.address, i = F.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t.chainNamespace);
      try {
        if (r && t.chainNamespace === s || n && i) {
          const o = Np.get(t.chainNamespace);
          if (!o) throw new Error("Adapter not found");
          await o.switchNetwork({
            caipNetwork: t
          });
        }
        b.setActiveCaipNetwork(t);
      } catch (o) {
        if (e) throw o;
      }
      fe.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: {
          network: t.caipNetworkId
        }
      });
    },
    getConnectionControllerClient(t) {
      const e = t || Q.activeChain;
      if (!e) throw new Error("Chain is required to get connection controller client");
      const s = Q.chains.get(e);
      if (!(s == null ? void 0 : s.connectionControllerClient)) throw new Error("ConnectionController client not set");
      return s.connectionControllerClient;
    },
    getNetworkProp(t, e) {
      var _a2;
      const s = (_a2 = Q.chains.get(e)) == null ? void 0 : _a2.networkState;
      if (s) return s[t];
    },
    getRequestedCaipNetworks(t) {
      const e = Q.chains.get(t), { approvedCaipNetworkIds: s = [], requestedCaipNetworks: n = [] } = (e == null ? void 0 : e.networkState) || {};
      return ee.sortRequestedNetworks(s, n).filter((o) => o == null ? void 0 : o.id);
    },
    getAllRequestedCaipNetworks() {
      const t = [];
      return Q.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
        const s = b.getRequestedCaipNetworks(e.namespace);
        t.push(...s);
      }), t;
    },
    setRequestedCaipNetworks(t, e) {
      b.setAdapterNetworkState(e, {
        requestedCaipNetworks: t
      });
      const n = b.getAllRequestedCaipNetworks().map((i) => i.chainNamespace), r = Array.from(new Set(n));
      V.filterByNamespaces(r);
    },
    getAllApprovedCaipNetworkIds() {
      const t = [];
      return Q.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
        const s = b.getApprovedCaipNetworkIds(e.namespace);
        t.push(...s);
      }), t;
    },
    getActiveCaipNetwork(t) {
      var _a2, _b2;
      return t ? (_b2 = (_a2 = Q.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b2.caipNetwork : Q.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return Q.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = Q.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b2.approvedCaipNetworkIds) || [];
    },
    setApprovedCaipNetworksData(t, e) {
      b.setAdapterNetworkState(t, e);
    },
    checkIfSupportedNetwork(t, e) {
      var _a2;
      const s = e || ((_a2 = Q.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId), n = b.getRequestedCaipNetworks(t);
      return n.length ? n == null ? void 0 : n.some((r) => r.caipNetworkId === s) : true;
    },
    checkIfSupportedChainId(t) {
      var _a2;
      return Q.activeChain ? (_a2 = b.getRequestedCaipNetworks(Q.activeChain)) == null ? void 0 : _a2.some((s) => s.id === t) : true;
    },
    checkIfSmartAccountEnabled() {
      var _a2, _b2, _c2;
      const t = pp.caipNetworkIdToNumber((_a2 = Q.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
      return !Q.activeChain || !t ? false : !!((_c2 = ((_b2 = Fy.get(Xo.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : _b2.split(",")) || []) == null ? void 0 : _c2.includes(t.toString()));
    },
    showUnsupportedChainUI() {
      me.open({
        view: "UnsupportedChain"
      });
    },
    checkIfNamesSupported() {
      const t = Q.activeCaipNetwork;
      return !!((t == null ? void 0 : t.chainNamespace) && ge.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
    },
    resetNetwork(t) {
      b.setAdapterNetworkState(t, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: true
      });
    },
    resetAccount(t) {
      var _a2, _b2;
      const e = t;
      if (!e) throw new Error("Chain is required to set account prop");
      const s = (_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.preferredAccountType, n = q.state.defaultAccountTypes[e];
      Q.activeCaipAddress = void 0, b.setChainAccountData(e, {
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
        preferredAccountType: n || s,
        socialProvider: void 0,
        socialWindow: void 0,
        farcasterUrl: void 0,
        user: void 0,
        status: "disconnected"
      }), V.removeConnectorId(e);
    },
    setIsSwitchingNamespace(t) {
      Q.isSwitchingNamespace = t;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      var _a2, _b2;
      const t = [];
      let e;
      if (Q.chains.forEach((s) => {
        F.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((n) => n === s.namespace) && s.namespace && t.push(s.namespace);
      }), t.length > 0) {
        const s = t[0];
        return e = s ? (_b2 = (_a2 = Q.chains.get(s)) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0] : void 0, e;
      }
    },
    getAccountData(t) {
      var _a2;
      const e = t || Q.activeChain;
      if (e) return (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState;
    },
    getNetworkData(t) {
      var _a2;
      const e = t || Q.activeChain;
      if (e) return (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.networkState;
    },
    getCaipNetworkByNamespace(t, e) {
      var _a2, _b2, _c2;
      if (!t) return;
      const s = b.state.chains.get(t), n = (_a2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _a2.find((r) => r.id.toString() === (e == null ? void 0 : e.toString()));
      return n || ((_b2 = s == null ? void 0 : s.networkState) == null ? void 0 : _b2.caipNetwork) || ((_c2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _c2[0]);
    },
    getRequestedCaipNetworkIds() {
      const t = V.state.filterByNamespace;
      return (t ? [
        Q.chains.get(t)
      ] : Array.from(Q.chains.values())).flatMap((s) => (s == null ? void 0 : s.caipNetworks) || []).map((s) => s.caipNetworkId);
    },
    getCaipNetworks(t) {
      return t ? b.getRequestedCaipNetworks(t) : b.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(t, e) {
      return Sp.getCaipNetworks(e).find((s) => s.id.toString() === t.toString() || s.caipNetworkId.toString() === t.toString());
    },
    setLastConnectedSIWECaipNetwork(t) {
      Q.lastConnectedSIWECaipNetwork = t;
    },
    getLastConnectedSIWECaipNetwork() {
      return Q.lastConnectedSIWECaipNetwork;
    },
    async fetchTokenBalance(t) {
      var _a2, _b2;
      const e = b.getAccountData();
      if (!e) return [];
      const s = (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, n = (_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, r = b.state.activeCaipAddress, i = r ? ee.getPlainAddress(r) : void 0;
      if (b.setAccountProp("balanceLoading", true, n), e.lastRetry && !ee.isAllowedRetry(e.lastRetry, 30 * ge.ONE_SEC_MS)) return b.setAccountProp("balanceLoading", false, n), [];
      try {
        if (i && s && n) {
          const o = await gd.getMyTokensWithBalance();
          return b.setAccountProp("tokenBalance", o, n), b.setAccountProp("lastRetry", void 0, n), b.setAccountProp("balanceLoading", false, n), o;
        }
      } catch (o) {
        b.setAccountProp("lastRetry", Date.now(), n), t == null ? void 0 : t(o), Us.showError("Token Balance Unavailable");
      } finally {
        b.setAccountProp("balanceLoading", false, n);
      }
      return [];
    },
    isCaipNetworkDisabled(t) {
      var _a2;
      const e = t.chainNamespace, s = !!((_a2 = b.getAccountData(e)) == null ? void 0 : _a2.caipAddress), n = b.getAllApprovedCaipNetworkIds(), r = b.getNetworkProp("supportsAllNetworks", e) !== false, i = V.getConnectorId(e), o = V.getAuthConnector(), a = i === F.CONNECTOR_ID.AUTH && o;
      return !s || r || a ? false : !(n == null ? void 0 : n.includes(t.caipNetworkId));
    }
  };
  b = ls(Sp);
  u0 = {
    onSwitchNetwork({ network: t, ignoreSwitchConfirmation: e = false }) {
      var _a2, _b2;
      const s = b.state.activeCaipNetwork, n = b.state.activeChain, r = ae.state.data;
      if (t.id === (s == null ? void 0 : s.id)) return;
      const o = !!((_a2 = b.getAccountData(n)) == null ? void 0 : _a2.address), a = !!((_b2 = b.getAccountData(t.chainNamespace)) == null ? void 0 : _b2.address), c = t.chainNamespace !== n, d = V.getConnectorId(n) === F.CONNECTOR_ID.AUTH, h = F.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((u) => u === t.chainNamespace);
      e || d && h ? ae.push("SwitchNetwork", {
        ...r,
        network: t
      }) : o && c && !a ? ae.push("SwitchActiveChain", {
        switchToChain: t.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network: t
      }) : ae.push("SwitchNetwork", {
        ...r,
        network: t
      });
    }
  };
  xt = Be({
    loading: false,
    loadingNamespaceMap: /* @__PURE__ */ new Map(),
    open: false,
    shake: false,
    namespace: void 0
  });
  f0 = {
    state: xt,
    subscribe(t) {
      return ot(xt, () => t(xt));
    },
    subscribeKey(t, e) {
      return at(xt, t, e);
    },
    async open(t) {
      var _a2, _b2;
      const e = t == null ? void 0 : t.namespace, s = b.state.activeChain, n = e && e !== s, r = (_a2 = b.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : _a2.caipAddress, i = b.state.noAdapters;
      if (G.state.wcBasic ? ne.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      }) : await ne.prefetch(), V.setFilterByNamespace(t == null ? void 0 : t.namespace), me.setLoading(true, e), e && n) {
        const o = ((_b2 = b.getNetworkData(e)) == null ? void 0 : _b2.caipNetwork) || b.getRequestedCaipNetworks(e)[0];
        o && (i ? (await b.switchActiveNetwork(o), ae.push("ConnectingWalletConnectBasic")) : u0.onSwitchNetwork({
          network: o,
          ignoreSwitchConfirmation: true
        }));
      } else q.state.manualWCControl || i && !r ? ee.isMobile() ? ae.reset("AllWallets") : ae.reset("ConnectingWalletConnectBasic") : (t == null ? void 0 : t.view) ? ae.reset(t.view, t.data) : r ? ae.reset("Account") : ae.reset("Connect");
      xt.open = true, vs.set({
        open: true
      }), fe.sendEvent({
        type: "track",
        event: "MODAL_OPEN",
        properties: {
          connected: !!r
        }
      });
    },
    close() {
      const t = q.state.enableEmbedded, e = !!b.state.activeCaipAddress;
      xt.open && fe.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: {
          connected: e
        }
      }), xt.open = false, ae.reset("Connect"), me.clearLoading(), t ? e ? ae.replace("Account") : ae.push("Connect") : vs.set({
        open: false
      }), G.resetUri();
    },
    setLoading(t, e) {
      e && xt.loadingNamespaceMap.set(e, t), xt.loading = t, vs.set({
        loading: t
      });
    },
    clearLoading() {
      xt.loadingNamespaceMap.clear(), xt.loading = false, vs.set({
        loading: false
      });
    },
    shake() {
      xt.shake || (xt.shake = true, setTimeout(() => {
        xt.shake = false;
      }, 500));
    }
  };
  me = ls(f0);
  Wi = {
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
  hl = {
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
  p0 = {
    providers: vp,
    selectedProvider: null,
    error: null,
    purchaseCurrency: Wi,
    paymentCurrency: hl,
    purchaseCurrencies: [
      Wi
    ],
    paymentCurrencies: [],
    quotesLoading: false
  };
  Ce = Be(p0);
  g0 = {
    state: Ce,
    subscribe(t) {
      return ot(Ce, () => t(Ce));
    },
    subscribeKey(t, e) {
      return at(Ce, t, e);
    },
    setSelectedProvider(t) {
      var _a2, _b2;
      if (t && t.name === "meld") {
        const e = b.state.activeChain, s = e === F.CHAIN.SOLANA ? "SOL" : "USDC", n = e ? ((_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address) ?? "" : "", r = new URL(t.url);
        r.searchParams.append("publicKey", My), r.searchParams.append("destinationCurrencyCode", s), r.searchParams.append("walletAddress", n), r.searchParams.append("externalCustomerId", q.state.projectId), Ce.selectedProvider = {
          ...t,
          url: r.toString()
        };
      } else Ce.selectedProvider = t;
    },
    setOnrampProviders(t) {
      if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
        const e = t, s = vp.filter((n) => e.includes(n.name));
        Ce.providers = s;
      } else Ce.providers = [];
    },
    setPurchaseCurrency(t) {
      Ce.purchaseCurrency = t;
    },
    setPaymentCurrency(t) {
      Ce.paymentCurrency = t;
    },
    setPurchaseAmount(t) {
      ul.state.purchaseAmount = t;
    },
    setPaymentAmount(t) {
      ul.state.paymentAmount = t;
    },
    async getAvailableCurrencies() {
      const t = await le.getOnrampOptions();
      Ce.purchaseCurrencies = t.purchaseCurrencies, Ce.paymentCurrencies = t.paymentCurrencies, Ce.paymentCurrency = t.paymentCurrencies[0] || hl, Ce.purchaseCurrency = t.purchaseCurrencies[0] || Wi, await ne.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)), await ne.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
    },
    async getQuote() {
      var _a2, _b2;
      Ce.quotesLoading = true;
      try {
        const t = await le.getOnrampQuote({
          purchaseCurrency: Ce.purchaseCurrency,
          paymentCurrency: Ce.paymentCurrency,
          amount: ((_a2 = Ce.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
          network: (_b2 = Ce.purchaseCurrency) == null ? void 0 : _b2.symbol
        });
        return Ce.quotesLoading = false, Ce.purchaseAmount = Number(t == null ? void 0 : t.purchaseAmount.amount), t;
      } catch (t) {
        return Ce.error = t.message, Ce.quotesLoading = false, null;
      } finally {
        Ce.quotesLoading = false;
      }
    },
    resetState() {
      Ce.selectedProvider = null, Ce.error = null, Ce.purchaseCurrency = Wi, Ce.paymentCurrency = hl, Ce.purchaseCurrencies = [
        Wi
      ], Ce.paymentCurrencies = [], Ce.paymentAmount = void 0, Ce.purchaseAmount = void 0, Ce.quotesLoading = false;
    }
  };
  ul = ls(g0);
  var m0 = Object.defineProperty, w0 = (t, e, s) => e in t ? m0(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, bh = (t, e, s) => w0(t, typeof e != "symbol" ? e + "" : e, s);
  let y0 = class extends pi {
    constructor(e) {
      super(), this.opts = e, bh(this, "protocol", "wc"), bh(this, "version", 2);
    }
  };
  var b0 = Object.defineProperty, E0 = (t, e, s) => e in t ? b0(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, v0 = (t, e, s) => E0(t, e + "", s);
  let C0 = class extends pi {
    constructor(e, s) {
      super(), this.core = e, this.logger = s, v0(this, "records", /* @__PURE__ */ new Map());
    }
  }, A0 = class {
    constructor(e, s) {
      this.logger = e, this.core = s;
    }
  }, I0 = class extends pi {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, N0 = class extends pi {
    constructor(e) {
      super();
    }
  }, S0 = class {
    constructor(e, s, n, r) {
      this.core = e, this.logger = s, this.name = n;
    }
  }, _0 = class extends pi {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, T0 = class extends pi {
    constructor(e, s) {
      super(), this.core = e, this.logger = s;
    }
  }, x0 = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.store = n;
    }
  };
  class O0 {
    constructor(e, s) {
      this.projectId = e, this.logger = s;
    }
  }
  let k0 = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.telemetryEnabled = n;
    }
  };
  function P0(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), h = d.charCodeAt(0);
      if (e[h] !== 255) throw new TypeError(d + " is ambiguous");
      e[h] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, h = 0, u = 0;
      const f = l.length;
      for (; u !== f && l[u] === 0; ) u++, d++;
      const g = (f - u) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; u !== f; ) {
        let x = l[u], A = 0;
        for (let N = g - 1; (x !== 0 || A < h) && N !== -1; N--, A++) x += 256 * p[N] >>> 0, p[N] = x % s >>> 0, x = x / s >>> 0;
        if (x !== 0) throw new Error("Non-zero carry");
        h = A, u++;
      }
      let m = g - h;
      for (; m !== g && p[m] === 0; ) m++;
      let T = n.repeat(d);
      for (; m < g; ++m) T += t.charAt(p[m]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, h = 0, u = 0;
      for (; l[d] === n; ) h++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const x = l.charCodeAt(d);
        if (x > 255) return;
        let A = e[x];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < u) && P !== -1; P--, N++) A += s * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        u = N, d++;
      }
      let p = f - u;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(h + (f - p));
      let T = h;
      for (; p !== f; ) m[T++] = g[p++];
      return m;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var R0 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  P0(R0);
  function $0(t) {
    const e = t.length;
    let s = 0, n = 0;
    for (; n < e; ) {
      let r = t.charCodeAt(n++);
      if ((r & 4294967168) === 0) {
        s++;
        continue;
      } else if ((r & 4294965248) === 0) s += 2;
      else {
        if (r >= 55296 && r <= 56319 && n < e) {
          const i = t.charCodeAt(n);
          (i & 64512) === 56320 && (++n, r = ((r & 1023) << 10) + (i & 1023) + 65536);
        }
        (r & 4294901760) === 0 ? s += 3 : s += 4;
      }
    }
    return s;
  }
  function U0(t, e, s) {
    const n = t.length;
    let r = s, i = 0;
    for (; i < n; ) {
      let o = t.charCodeAt(i++);
      if ((o & 4294967168) === 0) {
        e[r++] = o;
        continue;
      } else if ((o & 4294965248) === 0) e[r++] = o >> 6 & 31 | 192;
      else {
        if (o >= 55296 && o <= 56319 && i < n) {
          const a = t.charCodeAt(i);
          (a & 64512) === 56320 && (++i, o = ((o & 1023) << 10) + (a & 1023) + 65536);
        }
        (o & 4294901760) === 0 ? (e[r++] = o >> 12 & 15 | 224, e[r++] = o >> 6 & 63 | 128) : (e[r++] = o >> 18 & 7 | 240, e[r++] = o >> 12 & 63 | 128, e[r++] = o >> 6 & 63 | 128);
      }
      e[r++] = o & 63 | 128;
    }
  }
  const B0 = new TextEncoder(), D0 = 50;
  function L0(t, e, s) {
    B0.encodeInto(t, e.subarray(s));
  }
  function M0(t, e, s) {
    t.length > D0 ? L0(t, e, s) : U0(t, e, s);
  }
  const F0 = 4096;
  function _p(t, e, s) {
    let n = e;
    const r = n + s, i = [];
    let o = "";
    for (; n < r; ) {
      const a = t[n++];
      if ((a & 128) === 0) i.push(a);
      else if ((a & 224) === 192) {
        const c = t[n++] & 63;
        i.push((a & 31) << 6 | c);
      } else if ((a & 240) === 224) {
        const c = t[n++] & 63, l = t[n++] & 63;
        i.push((a & 31) << 12 | c << 6 | l);
      } else if ((a & 248) === 240) {
        const c = t[n++] & 63, l = t[n++] & 63, d = t[n++] & 63;
        let h = (a & 7) << 18 | c << 12 | l << 6 | d;
        h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), i.push(h);
      } else i.push(a);
      i.length >= F0 && (o += String.fromCharCode(...i), i.length = 0);
    }
    return i.length > 0 && (o += String.fromCharCode(...i)), o;
  }
  const q0 = new TextDecoder(), j0 = 200;
  function W0(t, e, s) {
    const n = t.subarray(e, e + s);
    return q0.decode(n);
  }
  function H0(t, e, s) {
    return s > j0 ? W0(t, e, s) : _p(t, e, s);
  }
  class Oo {
    constructor(e, s) {
      this.type = e, this.data = s;
    }
  }
  class Ht extends Error {
    constructor(e) {
      super(e);
      const s = Object.create(Ht.prototype);
      Object.setPrototypeOf(this, s), Object.defineProperty(this, "name", {
        configurable: true,
        enumerable: false,
        value: Ht.name
      });
    }
  }
  const Ei = 4294967295;
  function V0(t, e, s) {
    const n = s / 4294967296, r = s;
    t.setUint32(e, n), t.setUint32(e + 4, r);
  }
  function Tp(t, e, s) {
    const n = Math.floor(s / 4294967296), r = s;
    t.setUint32(e, n), t.setUint32(e + 4, r);
  }
  function xp(t, e) {
    const s = t.getInt32(e), n = t.getUint32(e + 4);
    return s * 4294967296 + n;
  }
  function z0(t, e) {
    const s = t.getUint32(e), n = t.getUint32(e + 4);
    return s * 4294967296 + n;
  }
  const K0 = -1, G0 = 4294967296 - 1, Y0 = 17179869184 - 1;
  function Z0({ sec: t, nsec: e }) {
    if (t >= 0 && e >= 0 && t <= Y0) if (e === 0 && t <= G0) {
      const s = new Uint8Array(4);
      return new DataView(s.buffer).setUint32(0, t), s;
    } else {
      const s = t / 4294967296, n = t & 4294967295, r = new Uint8Array(8), i = new DataView(r.buffer);
      return i.setUint32(0, e << 2 | s & 3), i.setUint32(4, n), r;
    }
    else {
      const s = new Uint8Array(12), n = new DataView(s.buffer);
      return n.setUint32(0, e), Tp(n, 4, t), s;
    }
  }
  function J0(t) {
    const e = t.getTime(), s = Math.floor(e / 1e3), n = (e - s * 1e3) * 1e6, r = Math.floor(n / 1e9);
    return {
      sec: s + r,
      nsec: n - r * 1e9
    };
  }
  function X0(t) {
    if (t instanceof Date) {
      const e = J0(t);
      return Z0(e);
    } else return null;
  }
  function Q0(t) {
    const e = new DataView(t.buffer, t.byteOffset, t.byteLength);
    switch (t.byteLength) {
      case 4:
        return {
          sec: e.getUint32(0),
          nsec: 0
        };
      case 8: {
        const s = e.getUint32(0), n = e.getUint32(4), r = (s & 3) * 4294967296 + n, i = s >>> 2;
        return {
          sec: r,
          nsec: i
        };
      }
      case 12: {
        const s = xp(e, 4), n = e.getUint32(0);
        return {
          sec: s,
          nsec: n
        };
      }
      default:
        throw new Ht(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${t.length}`);
    }
  }
  function eb(t) {
    const e = Q0(t);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  const tb = {
    type: K0,
    encode: X0,
    decode: eb
  };
  class ua {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(tb);
    }
    register({ type: e, encode: s, decode: n }) {
      if (e >= 0) this.encoders[e] = s, this.decoders[e] = n;
      else {
        const r = -1 - e;
        this.builtInEncoders[r] = s, this.builtInDecoders[r] = n;
      }
    }
    tryToEncode(e, s) {
      for (let n = 0; n < this.builtInEncoders.length; n++) {
        const r = this.builtInEncoders[n];
        if (r != null) {
          const i = r(e, s);
          if (i != null) {
            const o = -1 - n;
            return new Oo(o, i);
          }
        }
      }
      for (let n = 0; n < this.encoders.length; n++) {
        const r = this.encoders[n];
        if (r != null) {
          const i = r(e, s);
          if (i != null) {
            const o = n;
            return new Oo(o, i);
          }
        }
      }
      return e instanceof Oo ? e : null;
    }
    decode(e, s, n) {
      const r = s < 0 ? this.builtInDecoders[-1 - s] : this.decoders[s];
      return r ? r(e, s, n) : new Oo(s, e);
    }
  }
  ua.defaultCodec = new ua();
  function sb(t) {
    return t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer;
  }
  function fl(t) {
    return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : sb(t) ? new Uint8Array(t) : Uint8Array.from(t);
  }
  const nb = 100, rb = 2048;
  class md {
    constructor(e) {
      this.entered = false, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? ua.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? false, this.maxDepth = (e == null ? void 0 : e.maxDepth) ?? nb, this.initialBufferSize = (e == null ? void 0 : e.initialBufferSize) ?? rb, this.sortKeys = (e == null ? void 0 : e.sortKeys) ?? false, this.forceFloat32 = (e == null ? void 0 : e.forceFloat32) ?? false, this.ignoreUndefined = (e == null ? void 0 : e.ignoreUndefined) ?? false, this.forceIntegerToFloat = (e == null ? void 0 : e.forceIntegerToFloat) ?? false, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
      return new md({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        maxDepth: this.maxDepth,
        initialBufferSize: this.initialBufferSize,
        sortKeys: this.sortKeys,
        forceFloat32: this.forceFloat32,
        ignoreUndefined: this.ignoreUndefined,
        forceIntegerToFloat: this.forceIntegerToFloat
      });
    }
    reinitializeState() {
      this.pos = 0;
    }
    encodeSharedRef(e) {
      if (this.entered) return this.clone().encodeSharedRef(e);
      try {
        return this.entered = true, this.reinitializeState(), this.doEncode(e, 1), this.bytes.subarray(0, this.pos);
      } finally {
        this.entered = false;
      }
    }
    encode(e) {
      if (this.entered) return this.clone().encode(e);
      try {
        return this.entered = true, this.reinitializeState(), this.doEncode(e, 1), this.bytes.slice(0, this.pos);
      } finally {
        this.entered = false;
      }
    }
    doEncode(e, s) {
      if (s > this.maxDepth) throw new Error(`Too deep objects in depth ${s}`);
      e == null ? this.encodeNil() : typeof e == "boolean" ? this.encodeBoolean(e) : typeof e == "number" ? this.forceIntegerToFloat ? this.encodeNumberAsFloat(e) : this.encodeNumber(e) : typeof e == "string" ? this.encodeString(e) : this.useBigInt64 && typeof e == "bigint" ? this.encodeBigInt64(e) : this.encodeObject(e, s);
    }
    ensureBufferSizeToWrite(e) {
      const s = this.pos + e;
      this.view.byteLength < s && this.resizeBuffer(s * 2);
    }
    resizeBuffer(e) {
      const s = new ArrayBuffer(e), n = new Uint8Array(s), r = new DataView(s);
      n.set(this.bytes), this.view = r, this.bytes = n;
    }
    encodeNil() {
      this.writeU8(192);
    }
    encodeBoolean(e) {
      e === false ? this.writeU8(194) : this.writeU8(195);
    }
    encodeNumber(e) {
      !this.forceIntegerToFloat && Number.isSafeInteger(e) ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : this.useBigInt64 ? this.encodeNumberAsFloat(e) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : this.useBigInt64 ? this.encodeNumberAsFloat(e) : (this.writeU8(211), this.writeI64(e)) : this.encodeNumberAsFloat(e);
    }
    encodeNumberAsFloat(e) {
      this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
    }
    encodeBigInt64(e) {
      e >= BigInt(0) ? (this.writeU8(207), this.writeBigUint64(e)) : (this.writeU8(211), this.writeBigInt64(e));
    }
    writeStringHeader(e) {
      if (e < 32) this.writeU8(160 + e);
      else if (e < 256) this.writeU8(217), this.writeU8(e);
      else if (e < 65536) this.writeU8(218), this.writeU16(e);
      else if (e < 4294967296) this.writeU8(219), this.writeU32(e);
      else throw new Error(`Too long string: ${e} bytes in UTF-8`);
    }
    encodeString(e) {
      const n = $0(e);
      this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), M0(e, this.bytes, this.pos), this.pos += n;
    }
    encodeObject(e, s) {
      const n = this.extensionCodec.tryToEncode(e, this.context);
      if (n != null) this.encodeExtension(n);
      else if (Array.isArray(e)) this.encodeArray(e, s);
      else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
      else if (typeof e == "object") this.encodeMap(e, s);
      else throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
    }
    encodeBinary(e) {
      const s = e.byteLength;
      if (s < 256) this.writeU8(196), this.writeU8(s);
      else if (s < 65536) this.writeU8(197), this.writeU16(s);
      else if (s < 4294967296) this.writeU8(198), this.writeU32(s);
      else throw new Error(`Too large binary: ${s}`);
      const n = fl(e);
      this.writeU8a(n);
    }
    encodeArray(e, s) {
      const n = e.length;
      if (n < 16) this.writeU8(144 + n);
      else if (n < 65536) this.writeU8(220), this.writeU16(n);
      else if (n < 4294967296) this.writeU8(221), this.writeU32(n);
      else throw new Error(`Too large array: ${n}`);
      for (const r of e) this.doEncode(r, s + 1);
    }
    countWithoutUndefined(e, s) {
      let n = 0;
      for (const r of s) e[r] !== void 0 && n++;
      return n;
    }
    encodeMap(e, s) {
      const n = Object.keys(e);
      this.sortKeys && n.sort();
      const r = this.ignoreUndefined ? this.countWithoutUndefined(e, n) : n.length;
      if (r < 16) this.writeU8(128 + r);
      else if (r < 65536) this.writeU8(222), this.writeU16(r);
      else if (r < 4294967296) this.writeU8(223), this.writeU32(r);
      else throw new Error(`Too large map object: ${r}`);
      for (const i of n) {
        const o = e[i];
        this.ignoreUndefined && o === void 0 || (this.encodeString(i), this.doEncode(o, s + 1));
      }
    }
    encodeExtension(e) {
      if (typeof e.data == "function") {
        const n = e.data(this.pos + 6), r = n.length;
        if (r >= 4294967296) throw new Error(`Too large extension object: ${r}`);
        this.writeU8(201), this.writeU32(r), this.writeI8(e.type), this.writeU8a(n);
        return;
      }
      const s = e.data.length;
      if (s === 1) this.writeU8(212);
      else if (s === 2) this.writeU8(213);
      else if (s === 4) this.writeU8(214);
      else if (s === 8) this.writeU8(215);
      else if (s === 16) this.writeU8(216);
      else if (s < 256) this.writeU8(199), this.writeU8(s);
      else if (s < 65536) this.writeU8(200), this.writeU16(s);
      else if (s < 4294967296) this.writeU8(201), this.writeU32(s);
      else throw new Error(`Too large extension object: ${s}`);
      this.writeI8(e.type), this.writeU8a(e.data);
    }
    writeU8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
    }
    writeU8a(e) {
      const s = e.length;
      this.ensureBufferSizeToWrite(s), this.bytes.set(e, this.pos), this.pos += s;
    }
    writeI8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
    }
    writeU16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
    }
    writeI16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
    }
    writeU32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
    }
    writeI32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
    }
    writeF32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
    }
    writeF64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
    }
    writeU64(e) {
      this.ensureBufferSizeToWrite(8), V0(this.view, this.pos, e), this.pos += 8;
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8), Tp(this.view, this.pos, e), this.pos += 8;
    }
    writeBigUint64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setBigUint64(this.pos, e), this.pos += 8;
    }
    writeBigInt64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setBigInt64(this.pos, e), this.pos += 8;
    }
  }
  function ib(t, e) {
    return new md(e).encodeSharedRef(t);
  }
  function lc(t) {
    return `${t < 0 ? "-" : ""}0x${Math.abs(t).toString(16).padStart(2, "0")}`;
  }
  const ob = 16, ab = 16;
  class cb {
    constructor(e = ob, s = ab) {
      this.hit = 0, this.miss = 0, this.maxKeyLength = e, this.maxLengthPerKey = s, this.caches = [];
      for (let n = 0; n < this.maxKeyLength; n++) this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, s, n) {
      const r = this.caches[n - 1];
      e: for (const i of r) {
        const o = i.bytes;
        for (let a = 0; a < n; a++) if (o[a] !== e[s + a]) continue e;
        return i.str;
      }
      return null;
    }
    store(e, s) {
      const n = this.caches[e.length - 1], r = {
        bytes: e,
        str: s
      };
      n.length >= this.maxLengthPerKey ? n[Math.random() * n.length | 0] = r : n.push(r);
    }
    decode(e, s, n) {
      const r = this.find(e, s, n);
      if (r != null) return this.hit++, r;
      this.miss++;
      const i = _p(e, s, n), o = Uint8Array.prototype.slice.call(e, s, s + n);
      return this.store(o, i), i;
    }
  }
  const pl = "array", Hi = "map_key", Op = "map_value", lb = (t) => {
    if (typeof t == "string" || typeof t == "number") return t;
    throw new Ht("The type of key must be string or number but " + typeof t);
  };
  class db {
    constructor() {
      this.stack = [], this.stackHeadPosition = -1;
    }
    get length() {
      return this.stackHeadPosition + 1;
    }
    top() {
      return this.stack[this.stackHeadPosition];
    }
    pushArrayState(e) {
      const s = this.getUninitializedStateFromPool();
      s.type = pl, s.position = 0, s.size = e, s.array = new Array(e);
    }
    pushMapState(e) {
      const s = this.getUninitializedStateFromPool();
      s.type = Hi, s.readCount = 0, s.size = e, s.map = {};
    }
    getUninitializedStateFromPool() {
      if (this.stackHeadPosition++, this.stackHeadPosition === this.stack.length) {
        const e = {
          type: void 0,
          size: 0,
          array: void 0,
          position: 0,
          readCount: 0,
          map: void 0,
          key: null
        };
        this.stack.push(e);
      }
      return this.stack[this.stackHeadPosition];
    }
    release(e) {
      if (this.stack[this.stackHeadPosition] !== e) throw new Error("Invalid stack state. Released state is not on top of the stack.");
      if (e.type === pl) {
        const n = e;
        n.size = 0, n.array = void 0, n.position = 0, n.type = void 0;
      }
      if (e.type === Hi || e.type === Op) {
        const n = e;
        n.size = 0, n.map = void 0, n.readCount = 0, n.type = void 0;
      }
      this.stackHeadPosition--;
    }
    reset() {
      this.stack.length = 0, this.stackHeadPosition = -1;
    }
  }
  const vi = -1, wd = new DataView(new ArrayBuffer(0)), hb = new Uint8Array(wd.buffer);
  try {
    wd.getInt8(0);
  } catch (t) {
    if (!(t instanceof RangeError)) throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
  }
  const Eh = new RangeError("Insufficient data"), ub = new cb();
  class yd {
    constructor(e) {
      this.totalPos = 0, this.pos = 0, this.view = wd, this.bytes = hb, this.headByte = vi, this.stack = new db(), this.entered = false, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? ua.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? false, this.rawStrings = (e == null ? void 0 : e.rawStrings) ?? false, this.maxStrLength = (e == null ? void 0 : e.maxStrLength) ?? Ei, this.maxBinLength = (e == null ? void 0 : e.maxBinLength) ?? Ei, this.maxArrayLength = (e == null ? void 0 : e.maxArrayLength) ?? Ei, this.maxMapLength = (e == null ? void 0 : e.maxMapLength) ?? Ei, this.maxExtLength = (e == null ? void 0 : e.maxExtLength) ?? Ei, this.keyDecoder = (e == null ? void 0 : e.keyDecoder) !== void 0 ? e.keyDecoder : ub, this.mapKeyConverter = (e == null ? void 0 : e.mapKeyConverter) ?? lb;
    }
    clone() {
      return new yd({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        rawStrings: this.rawStrings,
        maxStrLength: this.maxStrLength,
        maxBinLength: this.maxBinLength,
        maxArrayLength: this.maxArrayLength,
        maxMapLength: this.maxMapLength,
        maxExtLength: this.maxExtLength,
        keyDecoder: this.keyDecoder
      });
    }
    reinitializeState() {
      this.totalPos = 0, this.headByte = vi, this.stack.reset();
    }
    setBuffer(e) {
      const s = fl(e);
      this.bytes = s, this.view = new DataView(s.buffer, s.byteOffset, s.byteLength), this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte === vi && !this.hasRemaining(1)) this.setBuffer(e);
      else {
        const s = this.bytes.subarray(this.pos), n = fl(e), r = new Uint8Array(s.length + n.length);
        r.set(s), r.set(n, s.length), this.setBuffer(r);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      const { view: s, pos: n } = this;
      return new RangeError(`Extra ${s.byteLength - n} of ${s.byteLength} byte(s) found at buffer[${e}]`);
    }
    decode(e) {
      if (this.entered) return this.clone().decode(e);
      try {
        this.entered = true, this.reinitializeState(), this.setBuffer(e);
        const s = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return s;
      } finally {
        this.entered = false;
      }
    }
    *decodeMulti(e) {
      if (this.entered) {
        yield* this.clone().decodeMulti(e);
        return;
      }
      try {
        for (this.entered = true, this.reinitializeState(), this.setBuffer(e); this.hasRemaining(1); ) yield this.doDecodeSync();
      } finally {
        this.entered = false;
      }
    }
    async decodeAsync(e) {
      if (this.entered) return this.clone().decodeAsync(e);
      try {
        this.entered = true;
        let s = false, n;
        for await (const a of e) {
          if (s) throw this.entered = false, this.createExtraByteError(this.totalPos);
          this.appendBuffer(a);
          try {
            n = this.doDecodeSync(), s = true;
          } catch (c) {
            if (!(c instanceof RangeError)) throw c;
          }
          this.totalPos += this.pos;
        }
        if (s) {
          if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
          return n;
        }
        const { headByte: r, pos: i, totalPos: o } = this;
        throw new RangeError(`Insufficient data in parsing ${lc(r)} at ${o} (${i} in the current buffer)`);
      } finally {
        this.entered = false;
      }
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, true);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, false);
    }
    async *decodeMultiAsync(e, s) {
      if (this.entered) {
        yield* this.clone().decodeMultiAsync(e, s);
        return;
      }
      try {
        this.entered = true;
        let n = s, r = -1;
        for await (const i of e) {
          if (s && r === 0) throw this.createExtraByteError(this.totalPos);
          this.appendBuffer(i), n && (r = this.readArraySize(), n = false, this.complete());
          try {
            for (; yield this.doDecodeSync(), --r !== 0; ) ;
          } catch (o) {
            if (!(o instanceof RangeError)) throw o;
          }
          this.totalPos += this.pos;
        }
      } finally {
        this.entered = false;
      }
    }
    doDecodeSync() {
      e: for (; ; ) {
        const e = this.readHeadByte();
        let s;
        if (e >= 224) s = e - 256;
        else if (e < 192) if (e < 128) s = e;
        else if (e < 144) {
          const r = e - 128;
          if (r !== 0) {
            this.pushMapState(r), this.complete();
            continue e;
          } else s = {};
        } else if (e < 160) {
          const r = e - 144;
          if (r !== 0) {
            this.pushArrayState(r), this.complete();
            continue e;
          } else s = [];
        } else {
          const r = e - 160;
          s = this.decodeString(r, 0);
        }
        else if (e === 192) s = null;
        else if (e === 194) s = false;
        else if (e === 195) s = true;
        else if (e === 202) s = this.readF32();
        else if (e === 203) s = this.readF64();
        else if (e === 204) s = this.readU8();
        else if (e === 205) s = this.readU16();
        else if (e === 206) s = this.readU32();
        else if (e === 207) this.useBigInt64 ? s = this.readU64AsBigInt() : s = this.readU64();
        else if (e === 208) s = this.readI8();
        else if (e === 209) s = this.readI16();
        else if (e === 210) s = this.readI32();
        else if (e === 211) this.useBigInt64 ? s = this.readI64AsBigInt() : s = this.readI64();
        else if (e === 217) {
          const r = this.lookU8();
          s = this.decodeString(r, 1);
        } else if (e === 218) {
          const r = this.lookU16();
          s = this.decodeString(r, 2);
        } else if (e === 219) {
          const r = this.lookU32();
          s = this.decodeString(r, 4);
        } else if (e === 220) {
          const r = this.readU16();
          if (r !== 0) {
            this.pushArrayState(r), this.complete();
            continue e;
          } else s = [];
        } else if (e === 221) {
          const r = this.readU32();
          if (r !== 0) {
            this.pushArrayState(r), this.complete();
            continue e;
          } else s = [];
        } else if (e === 222) {
          const r = this.readU16();
          if (r !== 0) {
            this.pushMapState(r), this.complete();
            continue e;
          } else s = {};
        } else if (e === 223) {
          const r = this.readU32();
          if (r !== 0) {
            this.pushMapState(r), this.complete();
            continue e;
          } else s = {};
        } else if (e === 196) {
          const r = this.lookU8();
          s = this.decodeBinary(r, 1);
        } else if (e === 197) {
          const r = this.lookU16();
          s = this.decodeBinary(r, 2);
        } else if (e === 198) {
          const r = this.lookU32();
          s = this.decodeBinary(r, 4);
        } else if (e === 212) s = this.decodeExtension(1, 0);
        else if (e === 213) s = this.decodeExtension(2, 0);
        else if (e === 214) s = this.decodeExtension(4, 0);
        else if (e === 215) s = this.decodeExtension(8, 0);
        else if (e === 216) s = this.decodeExtension(16, 0);
        else if (e === 199) {
          const r = this.lookU8();
          s = this.decodeExtension(r, 1);
        } else if (e === 200) {
          const r = this.lookU16();
          s = this.decodeExtension(r, 2);
        } else if (e === 201) {
          const r = this.lookU32();
          s = this.decodeExtension(r, 4);
        } else throw new Ht(`Unrecognized type byte: ${lc(e)}`);
        this.complete();
        const n = this.stack;
        for (; n.length > 0; ) {
          const r = n.top();
          if (r.type === pl) if (r.array[r.position] = s, r.position++, r.position === r.size) s = r.array, n.release(r);
          else continue e;
          else if (r.type === Hi) {
            if (s === "__proto__") throw new Ht("The key __proto__ is not allowed");
            r.key = this.mapKeyConverter(s), r.type = Op;
            continue e;
          } else if (r.map[r.key] = s, r.readCount++, r.readCount === r.size) s = r.map, n.release(r);
          else {
            r.key = null, r.type = Hi;
            continue e;
          }
        }
        return s;
      }
    }
    readHeadByte() {
      return this.headByte === vi && (this.headByte = this.readU8()), this.headByte;
    }
    complete() {
      this.headByte = vi;
    }
    readArraySize() {
      const e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default: {
          if (e < 160) return e - 144;
          throw new Ht(`Unrecognized array type byte: ${lc(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength) throw new Ht(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      this.stack.pushMapState(e);
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength) throw new Ht(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      this.stack.pushArrayState(e);
    }
    decodeString(e, s) {
      return !this.rawStrings || this.stateIsMapKey() ? this.decodeUtf8String(e, s) : this.decodeBinary(e, s);
    }
    decodeUtf8String(e, s) {
      var _a2;
      if (e > this.maxStrLength) throw new Ht(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      if (this.bytes.byteLength < this.pos + s + e) throw Eh;
      const n = this.pos + s;
      let r;
      return this.stateIsMapKey() && ((_a2 = this.keyDecoder) == null ? void 0 : _a2.canBeCached(e)) ? r = this.keyDecoder.decode(this.bytes, n, e) : r = H0(this.bytes, n, e), this.pos += s + e, r;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack.top().type === Hi : false;
    }
    decodeBinary(e, s) {
      if (e > this.maxBinLength) throw new Ht(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + s)) throw Eh;
      const n = this.pos + s, r = this.bytes.subarray(n, n + e);
      return this.pos += s + e, r;
    }
    decodeExtension(e, s) {
      if (e > this.maxExtLength) throw new Ht(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
      const n = this.view.getInt8(this.pos + s), r = this.decodeBinary(e, s + 1);
      return this.extensionCodec.decode(r, n, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      const e = this.view.getUint8(this.pos);
      return this.pos++, e;
    }
    readI8() {
      const e = this.view.getInt8(this.pos);
      return this.pos++, e;
    }
    readU16() {
      const e = this.view.getUint16(this.pos);
      return this.pos += 2, e;
    }
    readI16() {
      const e = this.view.getInt16(this.pos);
      return this.pos += 2, e;
    }
    readU32() {
      const e = this.view.getUint32(this.pos);
      return this.pos += 4, e;
    }
    readI32() {
      const e = this.view.getInt32(this.pos);
      return this.pos += 4, e;
    }
    readU64() {
      const e = z0(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      const e = xp(this.view, this.pos);
      return this.pos += 8, e;
    }
    readU64AsBigInt() {
      const e = this.view.getBigUint64(this.pos);
      return this.pos += 8, e;
    }
    readI64AsBigInt() {
      const e = this.view.getBigInt64(this.pos);
      return this.pos += 8, e;
    }
    readF32() {
      const e = this.view.getFloat32(this.pos);
      return this.pos += 4, e;
    }
    readF64() {
      const e = this.view.getFloat64(this.pos);
      return this.pos += 8, e;
    }
  }
  function fb(t, e) {
    return new yd(e).decode(t);
  }
  var pb = {};
  const gb = "ReactNative", Cs = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  }, mb = "js";
  function fa() {
    return typeof as < "u" && typeof as.versions < "u" && typeof as.versions.node < "u";
  }
  function kr() {
    return !Gt.getDocument() && !!Gt.getNavigator() && navigator.product === gb;
  }
  function wb() {
    return kr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "android";
  }
  function yb() {
    return kr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "ios";
  }
  function po() {
    return !fa() && !!Gt.getNavigator() && !!Gt.getDocument();
  }
  function $a() {
    return kr() ? Cs.reactNative : fa() ? Cs.node : po() ? Cs.browser : Cs.unknown;
  }
  function vh() {
    var t;
    try {
      return kr() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Application) < "u" ? (t = globalThis.Application) == null ? void 0 : t.applicationId : void 0;
    } catch {
      return;
    }
  }
  function bb(t, e) {
    const s = new URLSearchParams(t);
    return Object.entries(e).sort(([n], [r]) => n.localeCompare(r)).forEach(([n, r]) => {
      r != null && s.set(n, String(r));
    }), s.toString();
  }
  function Eb() {
    return lp.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function vb() {
    if ($a() === Cs.reactNative && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u") {
      const { OS: s, Version: n } = globalThis.Platform;
      return [
        s,
        n
      ].join("-");
    }
    const t = Zw();
    if (t === null) return "unknown";
    const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
    return t.type === "browser" ? [
      e,
      t.name,
      t.version
    ].join("-") : [
      e,
      t.version
    ].join("-");
  }
  function Cb() {
    var t;
    const e = $a();
    return e === Cs.browser ? [
      e,
      ((t = Gt.getLocation()) == null ? void 0 : t.host) || "unknown"
    ].join(":") : e;
  }
  function kp(t, e, s) {
    const n = vb(), r = Cb();
    return [
      [
        t,
        e
      ].join("-"),
      [
        mb,
        s
      ].join("-"),
      n,
      r
    ].join("/");
  }
  function Ab({ protocol: t, version: e, relayUrl: s, sdkVersion: n, auth: r, projectId: i, useOnCloseEvent: o, bundleId: a, packageName: c }) {
    const l = s.split("?"), d = kp(t, e, n), h = {
      auth: r,
      ua: d,
      projectId: i,
      useOnCloseEvent: o,
      packageName: c || void 0,
      bundleId: a || void 0
    }, u = bb(l[1] || "", h);
    return l[0] + "?" + u;
  }
  function gl(t) {
    return Object.fromEntries(t.entries());
  }
  function ml(t) {
    return new Map(Object.entries(t));
  }
  function Ib(t = z.FIVE_MINUTES, e) {
    const s = z.toMiliseconds(t || z.FIVE_MINUTES);
    let n, r, i, o;
    return {
      resolve: (a) => {
        i && n && (clearTimeout(i), n(a), o = Promise.resolve(a));
      },
      reject: (a) => {
        i && r && (clearTimeout(i), r(a));
      },
      done: () => new Promise((a, c) => {
        if (o) return a(o);
        i = setTimeout(() => {
          const l = new Error(e);
          o = Promise.reject(l), c(l);
        }, s), n = a, r = c;
      })
    };
  }
  function Bs(t, e, s) {
    return new Promise(async (n, r) => {
      const i = setTimeout(() => r(new Error(s)), e);
      try {
        const o = await t;
        n(o);
      } catch (o) {
        r(o);
      }
      clearTimeout(i);
    });
  }
  function Pp(t, e) {
    if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
    if (t.toLowerCase() === "topic") {
      if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
      return `topic:${e}`;
    } else if (t.toLowerCase() === "id") {
      if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
      return `id:${e}`;
    }
    throw new Error(`Unknown expirer target type: ${t}`);
  }
  function Nb(t) {
    return Pp("topic", t);
  }
  function Sb(t) {
    return Pp("id", t);
  }
  function _b(t) {
    const [e, s] = t.split(":"), n = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof s == "string") n.topic = s;
    else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return n;
  }
  function Vi(t, e) {
    return z.fromMiliseconds(Date.now() + z.toMiliseconds(t));
  }
  function Ch(t) {
    return Date.now() >= z.toMiliseconds(t);
  }
  function dc(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function Ah() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  }
  function Rp() {
    return typeof as < "u" && pb.IS_VITEST === "true";
  }
  function $p(t) {
    return Ae.from(t, "base64").toString("utf-8");
  }
  function Tb(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  const ko = BigInt(2 ** 32 - 1), Ih = BigInt(32);
  function Up(t, e = false) {
    return e ? {
      h: Number(t & ko),
      l: Number(t >> Ih & ko)
    } : {
      h: Number(t >> Ih & ko) | 0,
      l: Number(t & ko) | 0
    };
  }
  function Bp(t, e = false) {
    const s = t.length;
    let n = new Uint32Array(s), r = new Uint32Array(s);
    for (let i = 0; i < s; i++) {
      const { h: o, l: a } = Up(t[i], e);
      [n[i], r[i]] = [
        o,
        a
      ];
    }
    return [
      n,
      r
    ];
  }
  const Nh = (t, e, s) => t >>> s, Sh = (t, e, s) => t << 32 - s | e >>> s, On = (t, e, s) => t >>> s | e << 32 - s, kn = (t, e, s) => t << 32 - s | e >>> s, Ui = (t, e, s) => t << 64 - s | e >>> s - 32, Bi = (t, e, s) => t >>> s - 32 | e << 64 - s, xb = (t, e) => e, Ob = (t, e) => t, kb = (t, e, s) => t << s | e >>> 32 - s, Pb = (t, e, s) => e << s | t >>> 32 - s, Rb = (t, e, s) => e << s - 32 | t >>> 64 - s, $b = (t, e, s) => t << s - 32 | e >>> 64 - s;
  function ms(t, e, s, n) {
    const r = (e >>> 0) + (n >>> 0);
    return {
      h: t + s + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const bd = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), Ed = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, Ub = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), Bb = (t, e, s, n, r) => e + s + n + r + (t / 2 ** 32 | 0) | 0, Db = (t, e, s, n, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0), Lb = (t, e, s, n, r, i) => e + s + n + r + i + (t / 2 ** 32 | 0) | 0, Dr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function Ua(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function fn(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Is(t, ...e) {
    if (!Ua(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Ba(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    fn(t.outputLen), fn(t.blockLen);
  }
  function zn(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function vd(t, e) {
    Is(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function to(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function cs(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function hc(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function Ts(t, e) {
    return t << 32 - e | t >>> e;
  }
  const Dp = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function Lp(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Gs = Dp ? (t) => t : (t) => Lp(t);
  function Mb(t) {
    for (let e = 0; e < t.length; e++) t[e] = Lp(t[e]);
    return t;
  }
  const Pn = Dp ? (t) => t : Mb, Mp = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Fb = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function ei(t) {
    if (Is(t), Mp) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += Fb[t[s]];
    return e;
  }
  const Ws = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function _h(t) {
    if (t >= Ws._0 && t <= Ws._9) return t - Ws._0;
    if (t >= Ws.A && t <= Ws.F) return t - (Ws.A - 10);
    if (t >= Ws.a && t <= Ws.f) return t - (Ws.a - 10);
  }
  function pa(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Mp) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = _h(t.charCodeAt(i)), a = _h(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function Fp(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function As(t) {
    return typeof t == "string" && (t = Fp(t)), Is(t), t;
  }
  function Dn(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Is(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  let Da = class {
  };
  function go(t) {
    const e = (n) => t().update(As(n)).digest(), s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
  }
  function qb(t) {
    const e = (n, r) => t(r).update(As(n)).digest(), s = t({});
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  function Pr(t = 32) {
    if (Dr && typeof Dr.getRandomValues == "function") return Dr.getRandomValues(new Uint8Array(t));
    if (Dr && typeof Dr.randomBytes == "function") return Uint8Array.from(Dr.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const jb = BigInt(0), Ci = BigInt(1), Wb = BigInt(2), Hb = BigInt(7), Vb = BigInt(256), zb = BigInt(113), qp = [], jp = [], Wp = [];
  for (let t = 0, e = Ci, s = 1, n = 0; t < 24; t++) {
    [s, n] = [
      n,
      (2 * s + 3 * n) % 5
    ], qp.push(2 * (5 * n + s)), jp.push((t + 1) * (t + 2) / 2 % 64);
    let r = jb;
    for (let i = 0; i < 7; i++) e = (e << Ci ^ (e >> Hb) * zb) % Vb, e & Wb && (r ^= Ci << (Ci << BigInt(i)) - Ci);
    Wp.push(r);
  }
  const Hp = Bp(Wp, true), Kb = Hp[0], Gb = Hp[1], Th = (t, e, s) => s > 32 ? Rb(t, e, s) : kb(t, e, s), xh = (t, e, s) => s > 32 ? $b(t, e, s) : Pb(t, e, s);
  function Yb(t, e = 24) {
    const s = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], h = Th(l, d, 1) ^ s[a], u = xh(l, d, 1) ^ s[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= h, t[o + f + 1] ^= u;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = jp[o], c = Th(r, i, a), l = xh(r, i, a), d = qp[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) s[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
      }
      t[0] ^= Kb[n], t[1] ^= Gb[n];
    }
    cs(s);
  }
  let Zb = class Vp extends Da {
    constructor(e, s, n, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = r, this.rounds = i, fn(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = to(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Pn(this.state32), Yb(this.state32, this.rounds), Pn(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      zn(this), e = As(e), Is(e);
      const { blockLen: s, state: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(s - this.pos, r - i);
        for (let a = 0; a < o; a++) n[this.pos++] ^= e[i++];
        this.pos === s && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: s, pos: n, blockLen: r } = this;
      e[n] ^= s, (s & 128) !== 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      zn(this, false), Is(e), this.finish();
      const s = this.state, { blockLen: n } = this;
      for (let r = 0, i = e.length; r < i; ) {
        this.posOut >= n && this.keccak();
        const o = Math.min(n - this.posOut, i - r);
        e.set(s.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return fn(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (vd(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, cs(this.state);
    }
    _cloneInto(e) {
      const { blockLen: s, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new Vp(s, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  };
  const Jb = (t, e, s) => go(() => new Zb(e, t, s));
  Jb(1, 136, 256 / 8);
  function Xb(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i), c = n ? 4 : 0, l = n ? 0 : 4;
    t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
  }
  function Qb(t, e, s) {
    return t & e ^ ~t & s;
  }
  function e1(t, e, s) {
    return t & e ^ t & s ^ e & s;
  }
  let zp = class extends Da {
    constructor(e, s, n, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = hc(this.buffer);
    }
    update(e) {
      zn(this), e = As(e), Is(e);
      const { view: s, buffer: n, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = hc(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(s, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      zn(this), vd(e, this), this.finished = true;
      const { buffer: s, view: n, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      s[o++] = 128, cs(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(n, 0), o = 0);
      for (let h = o; h < r; h++) s[h] = 0;
      Xb(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = hc(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let h = 0; h < l; h++) a.setUint32(4 * h, d[h], i);
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: s, buffer: n, length: r, finished: i, destroyed: o, pos: a } = this;
      return e.destroyed = o, e.finished = i, e.length = r, e.pos = a, r % s && e.buffer.set(n), e;
    }
    clone() {
      return this._cloneInto();
    }
  };
  const wn = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), lt = Uint32Array.from([
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ]), dt = Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]), t1 = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), yn = new Uint32Array(64);
  let s1 = class extends zp {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = wn[0] | 0, this.B = wn[1] | 0, this.C = wn[2] | 0, this.D = wn[3] | 0, this.E = wn[4] | 0, this.F = wn[5] | 0, this.G = wn[6] | 0, this.H = wn[7] | 0;
    }
    get() {
      const { A: e, B: s, C: n, D: r, E: i, F: o, G: a, H: c } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c
      ];
    }
    set(e, s, n, r, i, o, a, c) {
      this.A = e | 0, this.B = s | 0, this.C = n | 0, this.D = r | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
    }
    process(e, s) {
      for (let h = 0; h < 16; h++, s += 4) yn[h] = e.getUint32(s, false);
      for (let h = 16; h < 64; h++) {
        const u = yn[h - 15], f = yn[h - 2], g = Ts(u, 7) ^ Ts(u, 18) ^ u >>> 3, p = Ts(f, 17) ^ Ts(f, 19) ^ f >>> 10;
        yn[h] = p + yn[h - 7] + g + yn[h - 16] | 0;
      }
      let { A: n, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let h = 0; h < 64; h++) {
        const u = Ts(a, 6) ^ Ts(a, 11) ^ Ts(a, 25), f = d + u + Qb(a, c, l) + t1[h] + yn[h] | 0, g = (Ts(n, 2) ^ Ts(n, 13) ^ Ts(n, 22)) + e1(n, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = n, n = f + g | 0;
      }
      n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, r, i, o, a, c, l, d);
    }
    roundClean() {
      cs(yn);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), cs(this.buffer);
    }
  };
  const Kp = Bp([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((t) => BigInt(t))), n1 = Kp[0], r1 = Kp[1], bn = new Uint32Array(80), En = new Uint32Array(80);
  let Cd = class extends zp {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = dt[0] | 0, this.Al = dt[1] | 0, this.Bh = dt[2] | 0, this.Bl = dt[3] | 0, this.Ch = dt[4] | 0, this.Cl = dt[5] | 0, this.Dh = dt[6] | 0, this.Dl = dt[7] | 0, this.Eh = dt[8] | 0, this.El = dt[9] | 0, this.Fh = dt[10] | 0, this.Fl = dt[11] | 0, this.Gh = dt[12] | 0, this.Gl = dt[13] | 0, this.Hh = dt[14] | 0, this.Hl = dt[15] | 0;
    }
    get() {
      const { Ah: e, Al: s, Bh: n, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: h, Fl: u, Gh: f, Gl: g, Hh: p, Hl: m } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, m) {
      this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = h | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = m | 0;
    }
    process(e, s) {
      for (let A = 0; A < 16; A++, s += 4) bn[A] = e.getUint32(s), En[A] = e.getUint32(s += 4);
      for (let A = 16; A < 80; A++) {
        const N = bn[A - 15] | 0, P = En[A - 15] | 0, U = On(N, P, 1) ^ On(N, P, 8) ^ Nh(N, P, 7), B = kn(N, P, 1) ^ kn(N, P, 8) ^ Sh(N, P, 7), L = bn[A - 2] | 0, O = En[A - 2] | 0, D = On(L, O, 19) ^ Ui(L, O, 61) ^ Nh(L, O, 6), M = kn(L, O, 19) ^ Bi(L, O, 61) ^ Sh(L, O, 6), _ = Ub(B, M, En[A - 7], En[A - 16]), y = Bb(_, U, D, bn[A - 7], bn[A - 16]);
        bn[A] = y | 0, En[A] = _ | 0;
      }
      let { Ah: n, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: h, El: u, Fh: f, Fl: g, Gh: p, Gl: m, Hh: T, Hl: x } = this;
      for (let A = 0; A < 80; A++) {
        const N = On(h, u, 14) ^ On(h, u, 18) ^ Ui(h, u, 41), P = kn(h, u, 14) ^ kn(h, u, 18) ^ Bi(h, u, 41), U = h & f ^ ~h & p, B = u & g ^ ~u & m, L = Db(x, P, B, r1[A], En[A]), O = Lb(L, T, N, U, n1[A], bn[A]), D = L | 0, M = On(n, r, 28) ^ Ui(n, r, 34) ^ Ui(n, r, 39), _ = kn(n, r, 28) ^ Bi(n, r, 34) ^ Bi(n, r, 39), y = n & i ^ n & a ^ i & a, E = r & o ^ r & c ^ o & c;
        T = p | 0, x = m | 0, p = f | 0, m = g | 0, f = h | 0, g = u | 0, { h, l: u } = ms(l | 0, d | 0, O | 0, D | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = n | 0, o = r | 0;
        const w = bd(D, _, E);
        n = Ed(w, O, M, y), r = w | 0;
      }
      ({ h: n, l: r } = ms(this.Ah | 0, this.Al | 0, n | 0, r | 0)), { h: i, l: o } = ms(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = ms(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = ms(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h, l: u } = ms(this.Eh | 0, this.El | 0, h | 0, u | 0), { h: f, l: g } = ms(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: m } = ms(this.Gh | 0, this.Gl | 0, p | 0, m | 0), { h: T, l: x } = ms(this.Hh | 0, this.Hl | 0, T | 0, x | 0), this.set(n, r, i, o, a, c, l, d, h, u, f, g, p, m, T, x);
    }
    roundClean() {
      cs(bn, En);
    }
    destroy() {
      cs(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }, i1 = class extends Cd {
    constructor() {
      super(48), this.Ah = lt[0] | 0, this.Al = lt[1] | 0, this.Bh = lt[2] | 0, this.Bl = lt[3] | 0, this.Ch = lt[4] | 0, this.Cl = lt[5] | 0, this.Dh = lt[6] | 0, this.Dl = lt[7] | 0, this.Eh = lt[8] | 0, this.El = lt[9] | 0, this.Fh = lt[10] | 0, this.Fl = lt[11] | 0, this.Gh = lt[12] | 0, this.Gl = lt[13] | 0, this.Hh = lt[14] | 0, this.Hl = lt[15] | 0;
    }
  };
  const ht = Uint32Array.from([
    573645204,
    4230739756,
    2673172387,
    3360449730,
    596883563,
    1867755857,
    2520282905,
    1497426621,
    2519219938,
    2827943907,
    3193839141,
    1401305490,
    721525244,
    746961066,
    246885852,
    2177182882
  ]);
  let o1 = class extends Cd {
    constructor() {
      super(32), this.Ah = ht[0] | 0, this.Al = ht[1] | 0, this.Bh = ht[2] | 0, this.Bl = ht[3] | 0, this.Ch = ht[4] | 0, this.Cl = ht[5] | 0, this.Dh = ht[6] | 0, this.Dl = ht[7] | 0, this.Eh = ht[8] | 0, this.El = ht[9] | 0, this.Fh = ht[10] | 0, this.Fl = ht[11] | 0, this.Gh = ht[12] | 0, this.Gl = ht[13] | 0, this.Hh = ht[14] | 0, this.Hl = ht[15] | 0;
    }
  };
  const Gp = go(() => new s1()), a1 = go(() => new Cd()), c1 = go(() => new i1());
  go(() => new o1());
  const l1 = Uint8Array.from([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9,
    12,
    5,
    1,
    15,
    14,
    13,
    4,
    10,
    0,
    7,
    6,
    3,
    9,
    2,
    8,
    11,
    13,
    11,
    7,
    14,
    12,
    1,
    3,
    9,
    5,
    0,
    15,
    4,
    8,
    6,
    2,
    10,
    6,
    15,
    14,
    9,
    11,
    3,
    0,
    8,
    12,
    2,
    13,
    7,
    1,
    4,
    10,
    5,
    10,
    2,
    8,
    4,
    7,
    6,
    1,
    5,
    15,
    11,
    9,
    14,
    3,
    12,
    13,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9
  ]), ze = Uint32Array.from([
    4089235720,
    1779033703,
    2227873595,
    3144134277,
    4271175723,
    1013904242,
    1595750129,
    2773480762,
    2917565137,
    1359893119,
    725511199,
    2600822924,
    4215389547,
    528734635,
    327033209,
    1541459225
  ]), te = new Uint32Array(32);
  function vn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = te[2 * t], l = te[2 * t + 1], d = te[2 * e], h = te[2 * e + 1], u = te[2 * s], f = te[2 * s + 1], g = te[2 * n], p = te[2 * n + 1], m = bd(c, d, o);
    l = Ed(m, l, h, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: xb(p, g),
      Dl: Ob(p)
    }, { h: f, l: u } = ms(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: On(h, d, 24),
      Bl: kn(h, d, 24)
    }, te[2 * t] = c, te[2 * t + 1] = l, te[2 * e] = d, te[2 * e + 1] = h, te[2 * s] = u, te[2 * s + 1] = f, te[2 * n] = g, te[2 * n + 1] = p;
  }
  function Cn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = te[2 * t], l = te[2 * t + 1], d = te[2 * e], h = te[2 * e + 1], u = te[2 * s], f = te[2 * s + 1], g = te[2 * n], p = te[2 * n + 1], m = bd(c, d, o);
    l = Ed(m, l, h, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: On(p, g, 16),
      Dl: kn(p, g, 16)
    }, { h: f, l: u } = ms(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: Ui(h, d, 63),
      Bl: Bi(h, d, 63)
    }, te[2 * t] = c, te[2 * t + 1] = l, te[2 * e] = d, te[2 * e + 1] = h, te[2 * s] = u, te[2 * s + 1] = f, te[2 * n] = g, te[2 * n + 1] = p;
  }
  function d1(t, e = {}, s, n, r) {
    if (fn(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > s)) throw new Error("key length must be undefined or 1.." + s);
    if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  let h1 = class extends Da {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, fn(e), fn(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = to(this.buffer);
    }
    update(e) {
      zn(this), e = As(e), Is(e);
      const { blockLen: s, buffer: n, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s && (Pn(r), this.compress(r, 0, false), Pn(r), this.pos = 0);
        const l = Math.min(s - this.pos, i - c), d = o + c;
        if (l === s && !(d % 4) && c + l < i) {
          const h = new Uint32Array(a, d, Math.floor((i - c) / 4));
          Pn(h);
          for (let u = 0; c + s < i; u += r.length, c += s) this.length += s, this.compress(h, u, false);
          Pn(h);
          continue;
        }
        n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      zn(this), vd(e, this);
      const { pos: s, buffer32: n } = this;
      this.finished = true, cs(this.buffer.subarray(s)), Pn(n), this.compress(n, 0, true), Pn(n);
      const r = to(e);
      this.get().forEach((i, o) => r[o] = Gs(i));
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      const { buffer: s, length: n, finished: r, destroyed: i, outputLen: o, pos: a } = this;
      return e || (e = new this.constructor({
        dkLen: o
      })), e.set(...this.get()), e.buffer.set(s), e.destroyed = i, e.finished = r, e.length = n, e.pos = a, e.outputLen = o, e;
    }
    clone() {
      return this._cloneInto();
    }
  }, u1 = class extends h1 {
    constructor(e = {}) {
      const s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s), this.v0l = ze[0] | 0, this.v0h = ze[1] | 0, this.v1l = ze[2] | 0, this.v1h = ze[3] | 0, this.v2l = ze[4] | 0, this.v2h = ze[5] | 0, this.v3l = ze[6] | 0, this.v3h = ze[7] | 0, this.v4l = ze[8] | 0, this.v4h = ze[9] | 0, this.v5l = ze[10] | 0, this.v5h = ze[11] | 0, this.v6l = ze[12] | 0, this.v6h = ze[13] | 0, this.v7l = ze[14] | 0, this.v7h = ze[15] | 0, d1(s, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e, o = 0;
      if (n !== void 0 && (n = As(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = As(i);
        const a = to(i);
        this.v4l ^= Gs(a[0]), this.v4h ^= Gs(a[1]), this.v5l ^= Gs(a[2]), this.v5h ^= Gs(a[3]);
      }
      if (r !== void 0) {
        r = As(r);
        const a = to(r);
        this.v6l ^= Gs(a[0]), this.v6h ^= Gs(a[1]), this.v7l ^= Gs(a[2]), this.v7h ^= Gs(a[3]);
      }
      if (n !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(n), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: s, v1l: n, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: h, v5h: u, v6l: f, v6h: g, v7l: p, v7h: m } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, m) {
      this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = h | 0, this.v5h = u | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = m | 0;
    }
    compress(e, s, n) {
      this.get().forEach((c, l) => te[l] = c), te.set(ze, 16);
      let { h: r, l: i } = Up(BigInt(this.length));
      te[24] = ze[8] ^ i, te[25] = ze[9] ^ r, n && (te[28] = ~te[28], te[29] = ~te[29]);
      let o = 0;
      const a = l1;
      for (let c = 0; c < 12; c++) vn(0, 4, 8, 12, e, s + 2 * a[o++]), Cn(0, 4, 8, 12, e, s + 2 * a[o++]), vn(1, 5, 9, 13, e, s + 2 * a[o++]), Cn(1, 5, 9, 13, e, s + 2 * a[o++]), vn(2, 6, 10, 14, e, s + 2 * a[o++]), Cn(2, 6, 10, 14, e, s + 2 * a[o++]), vn(3, 7, 11, 15, e, s + 2 * a[o++]), Cn(3, 7, 11, 15, e, s + 2 * a[o++]), vn(0, 5, 10, 15, e, s + 2 * a[o++]), Cn(0, 5, 10, 15, e, s + 2 * a[o++]), vn(1, 6, 11, 12, e, s + 2 * a[o++]), Cn(1, 6, 11, 12, e, s + 2 * a[o++]), vn(2, 7, 8, 13, e, s + 2 * a[o++]), Cn(2, 7, 8, 13, e, s + 2 * a[o++]), vn(3, 4, 9, 14, e, s + 2 * a[o++]), Cn(3, 4, 9, 14, e, s + 2 * a[o++]);
      this.v0l ^= te[0] ^ te[16], this.v0h ^= te[1] ^ te[17], this.v1l ^= te[2] ^ te[18], this.v1h ^= te[3] ^ te[19], this.v2l ^= te[4] ^ te[20], this.v2h ^= te[5] ^ te[21], this.v3l ^= te[6] ^ te[22], this.v3h ^= te[7] ^ te[23], this.v4l ^= te[8] ^ te[24], this.v4h ^= te[9] ^ te[25], this.v5l ^= te[10] ^ te[26], this.v5h ^= te[11] ^ te[27], this.v6l ^= te[12] ^ te[28], this.v6h ^= te[13] ^ te[29], this.v7l ^= te[14] ^ te[30], this.v7h ^= te[15] ^ te[31], cs(te);
    }
    destroy() {
      this.destroyed = true, cs(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  qb((t) => new u1(t));
  function Yp(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function wl(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function uc(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function kt(t, ...e) {
    if (!Yp(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Oh(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function f1(t, e) {
    kt(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function jn(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function ci(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function p1(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const g1 = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function m1(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function yl(t) {
    if (typeof t == "string") t = m1(t);
    else if (Yp(t)) t = bl(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function w1(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function y1(t, e) {
    if (t.length !== e.length) return false;
    let s = 0;
    for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
    return s === 0;
  }
  const b1 = (t, e) => {
    function s(n, ...r) {
      if (kt(n), !g1) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? kt(l) : kt(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && kt(r[1]);
      const o = e(n, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          kt(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, kt(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (kt(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(s, t), s;
  };
  function kh(t, e, s = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !v1(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function Ph(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i);
    t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
  }
  function E1(t, e, s) {
    wl(s);
    const n = new Uint8Array(16), r = p1(n);
    return Ph(r, 0, BigInt(e), s), Ph(r, 8, BigInt(t), s), n;
  }
  function v1(t) {
    return t.byteOffset % 4 === 0;
  }
  function bl(t) {
    return Uint8Array.from(t);
  }
  const Zp = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), C1 = Zp("expand 16-byte k"), A1 = Zp("expand 32-byte k"), I1 = jn(C1), N1 = jn(A1);
  function Ie(t, e) {
    return t << e | t >>> 32 - e;
  }
  function El(t) {
    return t.byteOffset % 4 === 0;
  }
  const Po = 64, S1 = 16, Jp = 2 ** 32 - 1, Rh = new Uint32Array();
  function _1(t, e, s, n, r, i, o, a) {
    const c = r.length, l = new Uint8Array(Po), d = jn(l), h = El(r) && El(i), u = h ? jn(r) : Rh, f = h ? jn(i) : Rh;
    for (let g = 0; g < c; o++) {
      if (t(e, s, n, d, o, a), o >= Jp) throw new Error("arx: counter overflow");
      const p = Math.min(Po, c - g);
      if (h && p === Po) {
        const m = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let T = 0, x; T < S1; T++) x = m + T, f[x] = u[x] ^ d[T];
        g += Po;
        continue;
      }
      for (let m = 0, T; m < p; m++) T = g + m, i[T] = r[T] ^ l[m];
      g += p;
    }
  }
  function T1(t, e) {
    const { allowShortKeys: s, extendNonceFn: n, counterLength: r, counterRight: i, rounds: o } = w1({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return uc(r), uc(o), wl(i), wl(s), (a, c, l, d, h = 0) => {
      kt(a), kt(c), kt(l);
      const u = l.length;
      if (d === void 0 && (d = new Uint8Array(u)), kt(d), uc(h), h < 0 || h >= Jp) throw new Error("arx: counter overflow");
      if (d.length < u) throw new Error(`arx: output (${d.length}) is shorter than data (${u})`);
      const f = [];
      let g = a.length, p, m;
      if (g === 32) f.push(p = bl(a)), m = N1;
      else if (g === 16 && s) p = new Uint8Array(32), p.set(a), p.set(a, 16), m = I1, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      El(c) || f.push(c = bl(c));
      const T = jn(p);
      if (n) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        n(m, T, jn(c.subarray(0, 16)), T), c = c.subarray(16);
      }
      const x = 16 - r;
      if (x !== c.length) throw new Error(`arx: nonce must be ${x} or 16 bytes`);
      if (x !== 12) {
        const N = new Uint8Array(12);
        N.set(c, i ? 0 : 12 - c.length), c = N, f.push(c);
      }
      const A = jn(c);
      return _1(t, m, T, A, l, d, h, o), ci(...f), d;
    };
  }
  const et = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  let x1 = class {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = yl(e), kt(e, 32);
      const s = et(e, 0), n = et(e, 2), r = et(e, 4), i = et(e, 6), o = et(e, 8), a = et(e, 10), c = et(e, 12), l = et(e, 14);
      this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = et(e, 16 + 2 * d);
    }
    process(e, s, n = false) {
      const r = n ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], h = o[4], u = o[5], f = o[6], g = o[7], p = o[8], m = o[9], T = et(e, s + 0), x = et(e, s + 2), A = et(e, s + 4), N = et(e, s + 6), P = et(e, s + 8), U = et(e, s + 10), B = et(e, s + 12), L = et(e, s + 14);
      let O = i[0] + (T & 8191), D = i[1] + ((T >>> 13 | x << 3) & 8191), M = i[2] + ((x >>> 10 | A << 6) & 8191), _ = i[3] + ((A >>> 7 | N << 9) & 8191), y = i[4] + ((N >>> 4 | P << 12) & 8191), E = i[5] + (P >>> 1 & 8191), w = i[6] + ((P >>> 14 | U << 2) & 8191), v = i[7] + ((U >>> 11 | B << 5) & 8191), I = i[8] + ((B >>> 8 | L << 8) & 8191), k = i[9] + (L >>> 5 | r), C = 0, S = C + O * a + D * (5 * m) + M * (5 * p) + _ * (5 * g) + y * (5 * f);
      C = S >>> 13, S &= 8191, S += E * (5 * u) + w * (5 * h) + v * (5 * d) + I * (5 * l) + k * (5 * c), C += S >>> 13, S &= 8191;
      let R = C + O * c + D * a + M * (5 * m) + _ * (5 * p) + y * (5 * g);
      C = R >>> 13, R &= 8191, R += E * (5 * f) + w * (5 * u) + v * (5 * h) + I * (5 * d) + k * (5 * l), C += R >>> 13, R &= 8191;
      let $ = C + O * l + D * c + M * a + _ * (5 * m) + y * (5 * p);
      C = $ >>> 13, $ &= 8191, $ += E * (5 * g) + w * (5 * f) + v * (5 * u) + I * (5 * h) + k * (5 * d), C += $ >>> 13, $ &= 8191;
      let Y = C + O * d + D * l + M * c + _ * a + y * (5 * m);
      C = Y >>> 13, Y &= 8191, Y += E * (5 * p) + w * (5 * g) + v * (5 * f) + I * (5 * u) + k * (5 * h), C += Y >>> 13, Y &= 8191;
      let K = C + O * h + D * d + M * l + _ * c + y * a;
      C = K >>> 13, K &= 8191, K += E * (5 * m) + w * (5 * p) + v * (5 * g) + I * (5 * f) + k * (5 * u), C += K >>> 13, K &= 8191;
      let j = C + O * u + D * h + M * d + _ * l + y * c;
      C = j >>> 13, j &= 8191, j += E * a + w * (5 * m) + v * (5 * p) + I * (5 * g) + k * (5 * f), C += j >>> 13, j &= 8191;
      let J = C + O * f + D * u + M * h + _ * d + y * l;
      C = J >>> 13, J &= 8191, J += E * c + w * a + v * (5 * m) + I * (5 * p) + k * (5 * g), C += J >>> 13, J &= 8191;
      let Z = C + O * g + D * f + M * u + _ * h + y * d;
      C = Z >>> 13, Z &= 8191, Z += E * l + w * c + v * a + I * (5 * m) + k * (5 * p), C += Z >>> 13, Z &= 8191;
      let de = C + O * p + D * g + M * f + _ * u + y * h;
      C = de >>> 13, de &= 8191, de += E * d + w * l + v * c + I * a + k * (5 * m), C += de >>> 13, de &= 8191;
      let X = C + O * m + D * p + M * g + _ * f + y * u;
      C = X >>> 13, X &= 8191, X += E * h + w * d + v * l + I * c + k * a, C += X >>> 13, X &= 8191, C = (C << 2) + C | 0, C = C + S | 0, S = C & 8191, C = C >>> 13, R += C, i[0] = S, i[1] = R, i[2] = $, i[3] = Y, i[4] = K, i[5] = j, i[6] = J, i[7] = Z, i[8] = de, i[9] = X;
    }
    finalize() {
      const { h: e, pad: s } = this, n = new Uint16Array(10);
      let r = e[1] >>> 13;
      e[1] &= 8191;
      for (let a = 2; a < 10; a++) e[a] += r, r = e[a] >>> 13, e[a] &= 8191;
      e[0] += r * 5, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, n[0] = e[0] + 5, r = n[0] >>> 13, n[0] &= 8191;
      for (let a = 1; a < 10; a++) n[a] = e[a] + r, r = n[a] >>> 13, n[a] &= 8191;
      n[9] -= 8192;
      let i = (r ^ 1) - 1;
      for (let a = 0; a < 10; a++) n[a] &= i;
      i = ~i;
      for (let a = 0; a < 10; a++) e[a] = e[a] & i | n[a];
      e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
      let o = e[0] + s[0];
      e[0] = o & 65535;
      for (let a = 1; a < 8; a++) o = (e[a] + s[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
      ci(n);
    }
    update(e) {
      Oh(this), e = yl(e), kt(e);
      const { buffer: s, blockLen: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(n - this.pos, r - i);
        if (o === n) {
          for (; n <= r - i; i += n) this.process(e, i);
          continue;
        }
        s.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n && (this.process(s, 0, false), this.pos = 0);
      }
      return this;
    }
    destroy() {
      ci(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      Oh(this), f1(e, this), this.finished = true;
      const { buffer: s, h: n } = this;
      let { pos: r } = this;
      if (r) {
        for (s[r++] = 1; r < 16; r++) s[r] = 0;
        this.process(s, 0, true);
      }
      this.finalize();
      let i = 0;
      for (let o = 0; o < 8; o++) e[i++] = n[o] >>> 0, e[i++] = n[o] >>> 8;
      return e;
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
  };
  function O1(t) {
    const e = (n, r) => t(r).update(yl(n)).digest(), s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  const k1 = O1((t) => new x1(t));
  function P1(t, e, s, n, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], h = e[1], u = e[2], f = e[3], g = e[4], p = e[5], m = e[6], T = e[7], x = r, A = s[0], N = s[1], P = s[2], U = o, B = a, L = c, O = l, D = d, M = h, _ = u, y = f, E = g, w = p, v = m, I = T, k = x, C = A, S = N, R = P;
    for (let Y = 0; Y < i; Y += 2) U = U + D | 0, k = Ie(k ^ U, 16), E = E + k | 0, D = Ie(D ^ E, 12), U = U + D | 0, k = Ie(k ^ U, 8), E = E + k | 0, D = Ie(D ^ E, 7), B = B + M | 0, C = Ie(C ^ B, 16), w = w + C | 0, M = Ie(M ^ w, 12), B = B + M | 0, C = Ie(C ^ B, 8), w = w + C | 0, M = Ie(M ^ w, 7), L = L + _ | 0, S = Ie(S ^ L, 16), v = v + S | 0, _ = Ie(_ ^ v, 12), L = L + _ | 0, S = Ie(S ^ L, 8), v = v + S | 0, _ = Ie(_ ^ v, 7), O = O + y | 0, R = Ie(R ^ O, 16), I = I + R | 0, y = Ie(y ^ I, 12), O = O + y | 0, R = Ie(R ^ O, 8), I = I + R | 0, y = Ie(y ^ I, 7), U = U + M | 0, R = Ie(R ^ U, 16), v = v + R | 0, M = Ie(M ^ v, 12), U = U + M | 0, R = Ie(R ^ U, 8), v = v + R | 0, M = Ie(M ^ v, 7), B = B + _ | 0, k = Ie(k ^ B, 16), I = I + k | 0, _ = Ie(_ ^ I, 12), B = B + _ | 0, k = Ie(k ^ B, 8), I = I + k | 0, _ = Ie(_ ^ I, 7), L = L + y | 0, C = Ie(C ^ L, 16), E = E + C | 0, y = Ie(y ^ E, 12), L = L + y | 0, C = Ie(C ^ L, 8), E = E + C | 0, y = Ie(y ^ E, 7), O = O + D | 0, S = Ie(S ^ O, 16), w = w + S | 0, D = Ie(D ^ w, 12), O = O + D | 0, S = Ie(S ^ O, 8), w = w + S | 0, D = Ie(D ^ w, 7);
    let $ = 0;
    n[$++] = o + U | 0, n[$++] = a + B | 0, n[$++] = c + L | 0, n[$++] = l + O | 0, n[$++] = d + D | 0, n[$++] = h + M | 0, n[$++] = u + _ | 0, n[$++] = f + y | 0, n[$++] = g + E | 0, n[$++] = p + w | 0, n[$++] = m + v | 0, n[$++] = T + I | 0, n[$++] = x + k | 0, n[$++] = A + C | 0, n[$++] = N + S | 0, n[$++] = P + R | 0;
  }
  const R1 = T1(P1, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), $1 = new Uint8Array(16), $h = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update($1.subarray(s));
  }, U1 = new Uint8Array(32);
  function Uh(t, e, s, n, r) {
    const i = t(e, s, U1), o = k1.create(i);
    r && $h(o, r), $h(o, n);
    const a = E1(n.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return ci(i, a), c;
  }
  const B1 = (t) => (e, s, n) => ({
    encrypt(r, i) {
      const o = r.length;
      i = kh(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      const c = Uh(t, e, s, a, n);
      return i.set(c, o), ci(c), i;
    },
    decrypt(r, i) {
      i = kh(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = Uh(t, e, s, o, n);
      if (!y1(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, s, i, i, 1), ci(c), i;
    }
  }), Xp = b1({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, B1(R1));
  let Qp = class extends Da {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, Ba(e);
      const n = As(s);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), cs(i);
    }
    update(e) {
      return zn(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      zn(this), Is(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: s, iHash: n, finished: r, destroyed: i, blockLen: o, outputLen: a } = this;
      return e = e, e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = s._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  };
  const La = (t, e, s) => new Qp(t, e).update(s).digest();
  La.create = (t, e) => new Qp(t, e);
  function D1(t, e, s) {
    return Ba(t), s === void 0 && (s = new Uint8Array(t.outputLen)), La(t, As(s), As(e));
  }
  const fc = Uint8Array.from([
    0
  ]), Bh = Uint8Array.of();
  function L1(t, e, s, n = 32) {
    Ba(t), fn(n);
    const r = t.outputLen;
    if (n > 255 * r) throw new Error("Length should be <= 255*HashLen");
    const i = Math.ceil(n / r);
    s === void 0 && (s = Bh);
    const o = new Uint8Array(i * r), a = La.create(t, e), c = a._cloneInto(), l = new Uint8Array(a.outputLen);
    for (let d = 0; d < i; d++) fc[0] = d + 1, c.update(d === 0 ? Bh : l).update(s).update(fc).digestInto(l), o.set(l, r * d), a._cloneInto(c);
    return a.destroy(), c.destroy(), cs(l, fc), o.slice(0, n);
  }
  const M1 = (t, e, s, n, r) => L1(t, D1(t, e, s), n, r), Ma = Gp, Ad = BigInt(0), vl = BigInt(1);
  function ga(t, e = "") {
    if (typeof t != "boolean") {
      const s = e && `"${e}"`;
      throw new Error(s + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function dr(t, e, s = "") {
    const n = Ua(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!n || i && r !== e) {
      const o = s && `"${s}" `, a = i ? ` of length ${e}` : "", c = n ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function Ro(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function eg(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Ad : BigInt("0x" + t);
  }
  function Fa(t) {
    return eg(ei(t));
  }
  function ma(t) {
    return Is(t), eg(ei(Uint8Array.from(t).reverse()));
  }
  function Id(t, e) {
    return pa(t.toString(16).padStart(e * 2, "0"));
  }
  function Nd(t, e) {
    return Id(t, e).reverse();
  }
  function mt(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = pa(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (Ua(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  const pc = (t) => typeof t == "bigint" && Ad <= t;
  function F1(t, e, s) {
    return pc(t) && pc(e) && pc(s) && e <= t && t < s;
  }
  function Cl(t, e, s, n) {
    if (!F1(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function tg(t) {
    let e;
    for (e = 0; t > Ad; t >>= vl, e += 1) ;
    return e;
  }
  const mo = (t) => (vl << BigInt(t)) - vl;
  function q1(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    const n = (u) => new Uint8Array(u), r = (u) => Uint8Array.of(u);
    let i = n(t), o = n(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...u) => s(o, i, ...u), d = (u = n(0)) => {
      o = l(r(0), u), i = l(), u.length !== 0 && (o = l(r(1), u), i = l());
    }, h = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let u = 0;
      const f = [];
      for (; u < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), u += i.length;
      }
      return Dn(...f);
    };
    return (u, f) => {
      c(), d(u);
      let g;
      for (; !(g = f(h())); ) d();
      return c(), g;
    };
  }
  function qa(t, e, s = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function n(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => n(r, i, false)), Object.entries(s).forEach(([r, i]) => n(r, i, true));
  }
  function Dh(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  const Ut = BigInt(0), It = BigInt(1), hr = BigInt(2), sg = BigInt(3), ng = BigInt(4), rg = BigInt(5), j1 = BigInt(7), ig = BigInt(8), W1 = BigInt(9), og = BigInt(16);
  function Vt(t, e) {
    const s = t % e;
    return s >= Ut ? s : e + s;
  }
  function ps(t, e, s) {
    let n = t;
    for (; e-- > Ut; ) n *= n, n %= s;
    return n;
  }
  function Lh(t, e) {
    if (t === Ut) throw new Error("invert: expected non-zero number");
    if (e <= Ut) throw new Error("invert: expected positive modulus, got " + e);
    let s = Vt(t, e), n = e, r = Ut, i = It;
    for (; s !== Ut; ) {
      const o = n / s, a = n % s, c = r - i * o;
      n = s, s = a, r = i, i = c;
    }
    if (n !== It) throw new Error("invert: does not exist");
    return Vt(r, e);
  }
  function Sd(t, e, s) {
    if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
  }
  function ag(t, e) {
    const s = (t.ORDER + It) / ng, n = t.pow(e, s);
    return Sd(t, n, e), n;
  }
  function H1(t, e) {
    const s = (t.ORDER - rg) / ig, n = t.mul(e, hr), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, hr), r), a = t.mul(i, t.sub(o, t.ONE));
    return Sd(t, a, e), a;
  }
  function V1(t) {
    const e = Zn(t), s = cg(t), n = s(e, e.neg(e.ONE)), r = s(e, n), i = s(e, e.neg(n)), o = (t + j1) / og;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, n);
      const h = a.mul(l, r), u = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(h), c);
      l = a.cmov(l, d, f), d = a.cmov(u, h, g);
      const p = a.eql(a.sqr(d), c), m = a.cmov(l, d, p);
      return Sd(a, m, c), m;
    };
  }
  function cg(t) {
    if (t < sg) throw new Error("sqrt is not defined for small field");
    let e = t - It, s = 0;
    for (; e % hr === Ut; ) e /= hr, s++;
    let n = hr;
    const r = Zn(t);
    for (; Mh(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return ag;
    let i = r.pow(n, e);
    const o = (e + It) / hr;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (Mh(a, c) !== 1) throw new Error("Cannot find square root");
      let l = s, d = a.mul(a.ONE, i), h = a.pow(c, e), u = a.pow(c, o);
      for (; !a.eql(h, a.ONE); ) {
        if (a.is0(h)) return a.ZERO;
        let f = 1, g = a.sqr(h);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = It << BigInt(l - f - 1), m = a.pow(d, p);
        l = f, d = a.sqr(m), h = a.mul(h, d), u = a.mul(u, m);
      }
      return u;
    };
  }
  function z1(t) {
    return t % ng === sg ? ag : t % ig === rg ? H1 : t % og === W1 ? V1(t) : cg(t);
  }
  const K1 = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function G1(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, s = K1.reduce((n, r) => (n[r] = "function", n), e);
    return qa(t, s), t;
  }
  function Y1(t, e, s) {
    if (s < Ut) throw new Error("invalid exponent, negatives unsupported");
    if (s === Ut) return t.ONE;
    if (s === It) return e;
    let n = t.ONE, r = e;
    for (; s > Ut; ) s & It && (n = t.mul(n, r)), r = t.sqr(r), s >>= It;
    return n;
  }
  function lg(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function Mh(t, e) {
    const s = (t.ORDER - It) / hr, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function dg(t, e) {
    e !== void 0 && fn(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Zn(t, e, s = false, n = {}) {
    if (t <= Ut) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
      const u = e;
      u.BITS && (r = u.BITS), u.sqrt && (i = u.sqrt), typeof u.isLE == "boolean" && (s = u.isLE), typeof u.modFromBytes == "boolean" && (o = u.modFromBytes), a = u.allowedLengths;
    } else typeof e == "number" && (r = e), n.sqrt && (i = n.sqrt);
    const { nBitLength: c, nByteLength: l } = dg(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const h = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: mo(c),
      ZERO: Ut,
      ONE: It,
      allowedLengths: a,
      create: (u) => Vt(u, t),
      isValid: (u) => {
        if (typeof u != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof u);
        return Ut <= u && u < t;
      },
      is0: (u) => u === Ut,
      isValidNot0: (u) => !h.is0(u) && h.isValid(u),
      isOdd: (u) => (u & It) === It,
      neg: (u) => Vt(-u, t),
      eql: (u, f) => u === f,
      sqr: (u) => Vt(u * u, t),
      add: (u, f) => Vt(u + f, t),
      sub: (u, f) => Vt(u - f, t),
      mul: (u, f) => Vt(u * f, t),
      pow: (u, f) => Y1(h, u, f),
      div: (u, f) => Vt(u * Lh(f, t), t),
      sqrN: (u) => u * u,
      addN: (u, f) => u + f,
      subN: (u, f) => u - f,
      mulN: (u, f) => u * f,
      inv: (u) => Lh(u, t),
      sqrt: i || ((u) => (d || (d = z1(t)), d(h, u))),
      toBytes: (u) => s ? Nd(u, l) : Id(u, l),
      fromBytes: (u, f = true) => {
        if (a) {
          if (!a.includes(u.length) || u.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + u.length);
          const p = new Uint8Array(l);
          p.set(u, s ? 0 : p.length - u.length), u = p;
        }
        if (u.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + u.length);
        let g = s ? ma(u) : Fa(u);
        if (o && (g = Vt(g, t)), !f && !h.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (u) => lg(h, u),
      cmov: (u, f, g) => g ? f : u
    });
    return Object.freeze(h);
  }
  function hg(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function ug(t) {
    const e = hg(t);
    return e + Math.ceil(e / 2);
  }
  function Z1(t, e, s = false) {
    const n = t.length, r = hg(e), i = ug(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? ma(t) : Fa(t), a = Vt(o, e - It) + It;
    return s ? Nd(a, r) : Id(a, r);
  }
  const li = BigInt(0), ur = BigInt(1);
  function wa(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function gc(t, e) {
    const s = lg(t.Fp, e.map((n) => n.Z));
    return e.map((n, r) => t.fromAffine(n.toAffine(s[r])));
  }
  function fg(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function mc(t, e) {
    fg(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = mo(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function Fh(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += ur);
    const l = e * n, d = l + Math.abs(a) - 1, h = a === 0, u = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: h,
      isNeg: u,
      isNegF: f,
      offsetF: l
    };
  }
  function J1(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function X1(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const wc = /* @__PURE__ */ new WeakMap(), pg = /* @__PURE__ */ new WeakMap();
  function yc(t) {
    return pg.get(t) || 1;
  }
  function qh(t) {
    if (t !== li) throw new Error("invalid wNAF");
  }
  let Q1 = class {
    constructor(e, s) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
    }
    _unsafeLadder(e, s, n = this.ZERO) {
      let r = e;
      for (; s > li; ) s & ur && (n = n.add(r)), r = r.double(), s >>= ur;
      return n;
    }
    precomputeWindow(e, s) {
      const { windows: n, windowSize: r } = mc(s, this.bits), i = [];
      let o = e, a = o;
      for (let c = 0; c < n; c++) {
        a = o, i.push(a);
        for (let l = 1; l < r; l++) a = a.add(o), i.push(a);
        o = a.double();
      }
      return i;
    }
    wNAF(e, s, n) {
      if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
      let r = this.ZERO, i = this.BASE;
      const o = mc(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: h, isNegF: u, offsetF: f } = Fh(n, a, o);
        n = c, d ? i = i.add(wa(u, s[f])) : r = r.add(wa(h, s[l]));
      }
      return qh(n), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, s, n, r = this.ZERO) {
      const i = mc(e, this.bits);
      for (let o = 0; o < i.windows && n !== li; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = Fh(n, o, i);
        if (n = a, !l) {
          const h = s[c];
          r = r.add(d ? h.negate() : h);
        }
      }
      return qh(n), r;
    }
    getPrecomputes(e, s, n) {
      let r = wc.get(s);
      return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (r = n(r)), wc.set(s, r))), r;
    }
    cached(e, s, n) {
      const r = yc(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), s);
    }
    unsafe(e, s, n, r) {
      const i = yc(e);
      return i === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), s, r);
    }
    createCache(e, s) {
      fg(s, this.bits), pg.set(e, s), wc.delete(e);
    }
    hasCache(e) {
      return yc(e) !== 1;
    }
  };
  function eE(t, e, s, n) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; s > li || n > li; ) s & ur && (i = i.add(r)), n & ur && (o = o.add(r)), r = r.double(), s >>= ur, n >>= ur;
    return {
      p1: i,
      p2: o
    };
  }
  function tE(t, e, s, n) {
    J1(s, t), X1(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = tg(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = mo(c), d = new Array(Number(l) + 1).fill(o), h = Math.floor((e.BITS - 1) / c) * c;
    let u = o;
    for (let f = h; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = n[p], T = Number(m >> BigInt(f) & l);
        d[T] = d[T].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (u = u.add(g), f !== 0) for (let p = 0; p < c; p++) u = u.double();
    }
    return u;
  }
  function jh(t, e, s) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return G1(e), e;
    } else return Zn(t, {
      isLE: s
    });
  }
  function sE(t, e, s = {}, n) {
    if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > li)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = jh(e.p, s.Fp, n), i = jh(e.n, s.Fn, n), o = [
      "Gx",
      "Gy",
      "a",
      "b"
    ];
    for (const a of o) if (!r.isValid(e[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
    return e = Object.freeze(Object.assign({}, e)), {
      CURVE: e,
      Fp: r,
      Fn: i
    };
  }
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), Fp("HashToScalar-");
  const Ai = BigInt(0), Lr = BigInt(1), $o = BigInt(2);
  function nE(t) {
    return qa(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function rE(t) {
    const e = nE(t), { P: s, type: n, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = n === "x25519";
    if (!a && n !== "x448") throw new Error("invalid type");
    const c = o || Pr, l = a ? 255 : 448, d = a ? 32 : 56, h = BigInt(a ? 9 : 5), u = BigInt(a ? 121665 : 39081), f = a ? $o ** BigInt(254) : $o ** BigInt(447), g = a ? BigInt(8) * $o ** BigInt(251) - Lr : BigInt(4) * $o ** BigInt(445) - Lr, p = f + g + Lr, m = (_) => Vt(_, s), T = x(h);
    function x(_) {
      return Nd(m(_), d);
    }
    function A(_) {
      const y = mt("u coordinate", _, d);
      return a && (y[31] &= 127), m(ma(y));
    }
    function N(_) {
      return ma(r(mt("scalar", _, d)));
    }
    function P(_, y) {
      const E = L(A(y), N(_));
      if (E === Ai) throw new Error("invalid private or public key received");
      return x(E);
    }
    function U(_) {
      return P(_, T);
    }
    function B(_, y, E) {
      const w = m(_ * (y - E));
      return y = m(y - w), E = m(E + w), {
        x_2: y,
        x_3: E
      };
    }
    function L(_, y) {
      Cl("u", _, Ai, s), Cl("scalar", y, f, p);
      const E = y, w = _;
      let v = Lr, I = Ai, k = _, C = Lr, S = Ai;
      for (let $ = BigInt(l - 1); $ >= Ai; $--) {
        const Y = E >> $ & Lr;
        S ^= Y, { x_2: v, x_3: k } = B(S, v, k), { x_2: I, x_3: C } = B(S, I, C), S = Y;
        const K = v + I, j = m(K * K), J = v - I, Z = m(J * J), de = j - Z, X = k + C, he = k - C, Me = m(he * K), je = m(X * J), qe = Me + je, bt = Me - je;
        k = m(qe * qe), C = m(w * m(bt * bt)), v = m(j * Z), I = m(de * (j + m(u * de)));
      }
      ({ x_2: v, x_3: k } = B(S, v, k)), { x_2: I, x_3: C } = B(S, I, C);
      const R = i(I);
      return m(v * R);
    }
    const O = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, D = (_ = c(d)) => (Is(_, O.seed), _);
    function M(_) {
      const y = D(_);
      return {
        secretKey: y,
        publicKey: U(y)
      };
    }
    return {
      keygen: M,
      getSharedSecret: (_, y) => P(_, y),
      getPublicKey: (_) => U(_),
      scalarMult: P,
      scalarMultBase: U,
      utils: {
        randomSecretKey: D,
        randomPrivateKey: D
      },
      GuBytes: T.slice(),
      lengths: O
    };
  }
  const iE = BigInt(1), Wh = BigInt(2), oE = BigInt(3), aE = BigInt(5);
  BigInt(8);
  const gg = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), cE = {
    p: gg,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function lE(t) {
    const e = BigInt(10), s = BigInt(20), n = BigInt(40), r = BigInt(80), i = gg, o = t * t % i * t % i, a = ps(o, Wh, i) * o % i, c = ps(a, iE, i) * t % i, l = ps(c, aE, i) * c % i, d = ps(l, e, i) * l % i, h = ps(d, s, i) * d % i, u = ps(h, n, i) * h % i, f = ps(u, r, i) * u % i, g = ps(f, r, i) * u % i, p = ps(g, e, i) * l % i;
    return {
      pow_p_5_8: ps(p, Wh, i) * t % i,
      b2: o
    };
  }
  function dE(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const hE = Zn(cE.p, {
    isLE: true
  }), Al = (() => {
    const t = hE.ORDER;
    return rE({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: s, b2: n } = lE(e);
        return Vt(ps(s, oE, t) * n, t);
      },
      adjustScalarBytes: dE
    });
  })(), Hh = (t, e) => (t + (t >= 0 ? e : -e) / mg) / e;
  function uE(t, e, s) {
    const [[n, r], [i, o]] = e, a = Hh(o * t, s), c = Hh(-r * t, s);
    let l = t - a * n - c * i, d = -a * r - c * o;
    const h = l < cn, u = d < cn;
    h && (l = -l), u && (d = -d);
    const f = mo(Math.ceil(tg(s) / 2)) + ti;
    if (l < cn || l >= f || d < cn || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: h,
      k1: l,
      k2neg: u,
      k2: d
    };
  }
  function Il(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function bc(t, e) {
    const s = {};
    for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
    return ga(s.lowS, "lowS"), ga(s.prehash, "prehash"), s.format !== void 0 && Il(s.format), s;
  }
  let fE = class extends Error {
    constructor(e = "") {
      super(e);
    }
  };
  const tn = {
    Err: fE,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = tn;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = Ro(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? Ro(r.length / 2 | 128) : "";
        return Ro(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = tn;
        let n = 0;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length < 2 || e[n++] !== t) throw new s("tlv.decode: wrong tlv");
        const r = e[n++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new s("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new s("tlv.decode(long): byte length is too big");
          const l = e.subarray(n, n + c);
          if (l.length !== c) throw new s("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (n += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(n, n + o);
        if (a.length !== o) throw new s("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(n + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = tn;
        if (t < cn) throw new e("integer: negative integers are not allowed");
        let s = Ro(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = tn;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Fa(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = tn, r = mt("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = tn, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  }, cn = BigInt(0), ti = BigInt(1), mg = BigInt(2), Uo = BigInt(3), pE = BigInt(4);
  function Gr(t, e) {
    const { BYTES: s } = t;
    let n;
    if (typeof e == "bigint") n = e;
    else {
      let r = mt("private key", e);
      try {
        n = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
    return n;
  }
  function gE(t, e = {}) {
    const s = sE("weierstrass", t, e), { Fp: n, Fn: r } = s;
    let i = s.CURVE;
    const { h: o, n: a } = i;
    qa(e, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean"
    });
    const { endo: c } = e;
    if (c && (!n.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const l = yg(n, r);
    function d() {
      if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function h(_, y, E) {
      const { x: w, y: v } = y.toAffine(), I = n.toBytes(w);
      if (ga(E, "isCompressed"), E) {
        d();
        const k = !n.isOdd(v);
        return Dn(wg(k), I);
      } else return Dn(Uint8Array.of(4), I, n.toBytes(v));
    }
    function u(_) {
      dr(_, void 0, "Point");
      const { publicKey: y, publicKeyUncompressed: E } = l, w = _.length, v = _[0], I = _.subarray(1);
      if (w === y && (v === 2 || v === 3)) {
        const k = n.fromBytes(I);
        if (!n.isValid(k)) throw new Error("bad point: is not on curve, wrong x");
        const C = p(k);
        let S;
        try {
          S = n.sqrt(C);
        } catch ($) {
          const Y = $ instanceof Error ? ": " + $.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + Y);
        }
        d();
        const R = n.isOdd(S);
        return (v & 1) === 1 !== R && (S = n.neg(S)), {
          x: k,
          y: S
        };
      } else if (w === E && v === 4) {
        const k = n.BYTES, C = n.fromBytes(I.subarray(0, k)), S = n.fromBytes(I.subarray(k, k * 2));
        if (!m(C, S)) throw new Error("bad point: is not on curve");
        return {
          x: C,
          y: S
        };
      } else throw new Error(`bad point: got length ${w}, expected compressed=${y} or uncompressed=${E}`);
    }
    const f = e.toBytes || h, g = e.fromBytes || u;
    function p(_) {
      const y = n.sqr(_), E = n.mul(y, _);
      return n.add(n.add(E, n.mul(_, i.a)), i.b);
    }
    function m(_, y) {
      const E = n.sqr(y), w = p(_);
      return n.eql(E, w);
    }
    if (!m(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const T = n.mul(n.pow(i.a, Uo), pE), x = n.mul(n.sqr(i.b), BigInt(27));
    if (n.is0(n.add(T, x))) throw new Error("bad curve params: a or b");
    function A(_, y, E = false) {
      if (!n.isValid(y) || E && n.is0(y)) throw new Error(`bad point coordinate ${_}`);
      return y;
    }
    function N(_) {
      if (!(_ instanceof O)) throw new Error("ProjectivePoint expected");
    }
    function P(_) {
      if (!c || !c.basises) throw new Error("no endo");
      return uE(_, c.basises, r.ORDER);
    }
    const U = Dh((_, y) => {
      const { X: E, Y: w, Z: v } = _;
      if (n.eql(v, n.ONE)) return {
        x: E,
        y: w
      };
      const I = _.is0();
      y == null && (y = I ? n.ONE : n.inv(v));
      const k = n.mul(E, y), C = n.mul(w, y), S = n.mul(v, y);
      if (I) return {
        x: n.ZERO,
        y: n.ZERO
      };
      if (!n.eql(S, n.ONE)) throw new Error("invZ was invalid");
      return {
        x: k,
        y: C
      };
    }), B = Dh((_) => {
      if (_.is0()) {
        if (e.allowInfinityPoint && !n.is0(_.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: y, y: E } = _.toAffine();
      if (!n.isValid(y) || !n.isValid(E)) throw new Error("bad point: x or y not field elements");
      if (!m(y, E)) throw new Error("bad point: equation left != right");
      if (!_.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function L(_, y, E, w, v) {
      return E = new O(n.mul(E.X, _), E.Y, E.Z), y = wa(w, y), E = wa(v, E), y.add(E);
    }
    class O {
      constructor(y, E, w) {
        this.X = A("x", y), this.Y = A("y", E, true), this.Z = A("z", w), Object.freeze(this);
      }
      static CURVE() {
        return i;
      }
      static fromAffine(y) {
        const { x: E, y: w } = y || {};
        if (!y || !n.isValid(E) || !n.isValid(w)) throw new Error("invalid affine point");
        if (y instanceof O) throw new Error("projective point not allowed");
        return n.is0(E) && n.is0(w) ? O.ZERO : new O(E, w, n.ONE);
      }
      static fromBytes(y) {
        const E = O.fromAffine(g(dr(y, void 0, "point")));
        return E.assertValidity(), E;
      }
      static fromHex(y) {
        return O.fromBytes(mt("pointHex", y));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(y = 8, E = true) {
        return M.createCache(this, y), E || this.multiply(Uo), this;
      }
      assertValidity() {
        B(this);
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (!n.isOdd) throw new Error("Field doesn't support isOdd");
        return !n.isOdd(y);
      }
      equals(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y, S = n.eql(n.mul(E, C), n.mul(I, v)), R = n.eql(n.mul(w, C), n.mul(k, v));
        return S && R;
      }
      negate() {
        return new O(this.X, n.neg(this.Y), this.Z);
      }
      double() {
        const { a: y, b: E } = i, w = n.mul(E, Uo), { X: v, Y: I, Z: k } = this;
        let C = n.ZERO, S = n.ZERO, R = n.ZERO, $ = n.mul(v, v), Y = n.mul(I, I), K = n.mul(k, k), j = n.mul(v, I);
        return j = n.add(j, j), R = n.mul(v, k), R = n.add(R, R), C = n.mul(y, R), S = n.mul(w, K), S = n.add(C, S), C = n.sub(Y, S), S = n.add(Y, S), S = n.mul(C, S), C = n.mul(j, C), R = n.mul(w, R), K = n.mul(y, K), j = n.sub($, K), j = n.mul(y, j), j = n.add(j, R), R = n.add($, $), $ = n.add(R, $), $ = n.add($, K), $ = n.mul($, j), S = n.add(S, $), K = n.mul(I, k), K = n.add(K, K), $ = n.mul(K, j), C = n.sub(C, $), R = n.mul(K, Y), R = n.add(R, R), R = n.add(R, R), new O(C, S, R);
      }
      add(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y;
        let S = n.ZERO, R = n.ZERO, $ = n.ZERO;
        const Y = i.a, K = n.mul(i.b, Uo);
        let j = n.mul(E, I), J = n.mul(w, k), Z = n.mul(v, C), de = n.add(E, w), X = n.add(I, k);
        de = n.mul(de, X), X = n.add(j, J), de = n.sub(de, X), X = n.add(E, v);
        let he = n.add(I, C);
        return X = n.mul(X, he), he = n.add(j, Z), X = n.sub(X, he), he = n.add(w, v), S = n.add(k, C), he = n.mul(he, S), S = n.add(J, Z), he = n.sub(he, S), $ = n.mul(Y, X), S = n.mul(K, Z), $ = n.add(S, $), S = n.sub(J, $), $ = n.add(J, $), R = n.mul(S, $), J = n.add(j, j), J = n.add(J, j), Z = n.mul(Y, Z), X = n.mul(K, X), J = n.add(J, Z), Z = n.sub(j, Z), Z = n.mul(Y, Z), X = n.add(X, Z), j = n.mul(J, X), R = n.add(R, j), j = n.mul(he, X), S = n.mul(de, S), S = n.sub(S, j), j = n.mul(de, J), $ = n.mul(he, $), $ = n.add($, j), new O(S, R, $);
      }
      subtract(y) {
        return this.add(y.negate());
      }
      is0() {
        return this.equals(O.ZERO);
      }
      multiply(y) {
        const { endo: E } = e;
        if (!r.isValidNot0(y)) throw new Error("invalid scalar: out of range");
        let w, v;
        const I = (k) => M.cached(this, k, (C) => gc(O, C));
        if (E) {
          const { k1neg: k, k1: C, k2neg: S, k2: R } = P(y), { p: $, f: Y } = I(C), { p: K, f: j } = I(R);
          v = Y.add(j), w = L(E.beta, $, K, k, S);
        } else {
          const { p: k, f: C } = I(y);
          w = k, v = C;
        }
        return gc(O, [
          w,
          v
        ])[0];
      }
      multiplyUnsafe(y) {
        const { endo: E } = e, w = this;
        if (!r.isValid(y)) throw new Error("invalid scalar: out of range");
        if (y === cn || w.is0()) return O.ZERO;
        if (y === ti) return w;
        if (M.hasCache(this)) return this.multiply(y);
        if (E) {
          const { k1neg: v, k1: I, k2neg: k, k2: C } = P(y), { p1: S, p2: R } = eE(O, w, I, C);
          return L(E.beta, S, R, v, k);
        } else return M.unsafe(w, y);
      }
      multiplyAndAddUnsafe(y, E, w) {
        const v = this.multiplyUnsafe(E).add(y.multiplyUnsafe(w));
        return v.is0() ? void 0 : v;
      }
      toAffine(y) {
        return U(this, y);
      }
      isTorsionFree() {
        const { isTorsionFree: y } = e;
        return o === ti ? true : y ? y(O, this) : M.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: y } = e;
        return o === ti ? this : y ? y(O, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(y = true) {
        return ga(y, "isCompressed"), this.assertValidity(), f(O, this, y);
      }
      toHex(y = true) {
        return ei(this.toBytes(y));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
      get px() {
        return this.X;
      }
      get py() {
        return this.X;
      }
      get pz() {
        return this.Z;
      }
      toRawBytes(y = true) {
        return this.toBytes(y);
      }
      _setWindowSize(y) {
        this.precompute(y);
      }
      static normalizeZ(y) {
        return gc(O, y);
      }
      static msm(y, E) {
        return tE(O, r, y, E);
      }
      static fromPrivateKey(y) {
        return O.BASE.multiply(Gr(r, y));
      }
    }
    O.BASE = new O(i.Gx, i.Gy, n.ONE), O.ZERO = new O(n.ZERO, n.ONE, n.ZERO), O.Fp = n, O.Fn = r;
    const D = r.BITS, M = new Q1(O, e.endo ? Math.ceil(D / 2) : D);
    return O.BASE.precompute(8), O;
  }
  function wg(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function yg(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function mE(t, e = {}) {
    const { Fn: s } = t, n = e.randomBytes || Pr, r = Object.assign(yg(t.Fp, s), {
      seed: ug(s.ORDER)
    });
    function i(u) {
      try {
        return !!Gr(s, u);
      } catch {
        return false;
      }
    }
    function o(u, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const m = u.length;
        return f === true && m !== g || f === false && m !== p ? false : !!t.fromBytes(u);
      } catch {
        return false;
      }
    }
    function a(u = n(r.seed)) {
      return Z1(dr(u, r.seed, "seed"), s.ORDER);
    }
    function c(u, f = true) {
      return t.BASE.multiply(Gr(s, u)).toBytes(f);
    }
    function l(u) {
      const f = a(u);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(u) {
      if (typeof u == "bigint") return false;
      if (u instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (s.allowedLengths || f === g) return;
      const m = mt("key", u).length;
      return m === g || m === p;
    }
    function h(u, f, g = true) {
      if (d(u) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = Gr(s, u);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: h,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (u) => Gr(s, u),
        precompute(u = 8, f = t.BASE) {
          return f.precompute(u, false);
        }
      },
      lengths: r
    });
  }
  function wE(t, e, s = {}) {
    Ba(e), qa(s, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const n = s.randomBytes || Pr, r = s.hmac || ((E, ...w) => La(e, E, Dn(...w))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: h, utils: u, lengths: f } = mE(t, s), g = {
      prehash: false,
      lowS: typeof s.lowS == "boolean" ? s.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function m(E) {
      const w = a >> ti;
      return E > w;
    }
    function T(E, w) {
      if (!o.isValidNot0(w)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return w;
    }
    function x(E, w) {
      Il(w);
      const v = f.signature, I = w === "compact" ? v : w === "recovered" ? v + 1 : void 0;
      return dr(E, I, `${w} signature`);
    }
    class A {
      constructor(w, v, I) {
        this.r = T("r", w), this.s = T("s", v), I != null && (this.recovery = I), Object.freeze(this);
      }
      static fromBytes(w, v = p) {
        x(w, v);
        let I;
        if (v === "der") {
          const { r: R, s: $ } = tn.toSig(dr(w));
          return new A(R, $);
        }
        v === "recovered" && (I = w[0], v = "compact", w = w.subarray(1));
        const k = o.BYTES, C = w.subarray(0, k), S = w.subarray(k, k * 2);
        return new A(o.fromBytes(C), o.fromBytes(S), I);
      }
      static fromHex(w, v) {
        return this.fromBytes(pa(w), v);
      }
      addRecoveryBit(w) {
        return new A(this.r, this.s, w);
      }
      recoverPublicKey(w) {
        const v = i.ORDER, { r: I, s: k, recovery: C } = this;
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        if (a * mg < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const S = C === 2 || C === 3 ? I + a : I;
        if (!i.isValid(S)) throw new Error("recovery id 2 or 3 invalid");
        const R = i.toBytes(S), $ = t.fromBytes(Dn(wg((C & 1) === 0), R)), Y = o.inv(S), K = P(mt("msgHash", w)), j = o.create(-K * Y), J = o.create(k * Y), Z = t.BASE.multiplyUnsafe(j).add($.multiplyUnsafe(J));
        if (Z.is0()) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return m(this.s);
      }
      toBytes(w = p) {
        if (Il(w), w === "der") return pa(tn.hexFromSig(this));
        const v = o.toBytes(this.r), I = o.toBytes(this.s);
        if (w === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return Dn(Uint8Array.of(this.recovery), v, I);
        }
        return Dn(v, I);
      }
      toHex(w) {
        return ei(this.toBytes(w));
      }
      assertValidity() {
      }
      static fromCompact(w) {
        return A.fromBytes(mt("sig", w), "compact");
      }
      static fromDER(w) {
        return A.fromBytes(mt("sig", w), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new A(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return ei(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return ei(this.toBytes("compact"));
      }
    }
    const N = s.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const w = Fa(E), v = E.length * 8 - c;
      return v > 0 ? w >> BigInt(v) : w;
    }, P = s.bits2int_modN || function(E) {
      return o.create(N(E));
    }, U = mo(c);
    function B(E) {
      return Cl("num < 2^" + c, E, cn, U), o.toBytes(E);
    }
    function L(E, w) {
      return dr(E, void 0, "message"), w ? dr(e(E), void 0, "prehashed message") : E;
    }
    function O(E, w, v) {
      if ([
        "recovered",
        "canonical"
      ].some((J) => J in v)) throw new Error("sign() legacy options not supported");
      const { lowS: I, prehash: k, extraEntropy: C } = bc(v, g);
      E = L(E, k);
      const S = P(E), R = Gr(o, w), $ = [
        B(R),
        B(S)
      ];
      if (C != null && C !== false) {
        const J = C === true ? n(f.secretKey) : C;
        $.push(mt("extraEntropy", J));
      }
      const Y = Dn(...$), K = S;
      function j(J) {
        const Z = N(J);
        if (!o.isValidNot0(Z)) return;
        const de = o.inv(Z), X = t.BASE.multiply(Z).toAffine(), he = o.create(X.x);
        if (he === cn) return;
        const Me = o.create(de * o.create(K + he * R));
        if (Me === cn) return;
        let je = (X.x === he ? 0 : 2) | Number(X.y & ti), qe = Me;
        return I && m(Me) && (qe = o.neg(Me), je ^= 1), new A(he, qe, je);
      }
      return {
        seed: Y,
        k2sig: j
      };
    }
    function D(E, w, v = {}) {
      E = mt("message", E);
      const { seed: I, k2sig: k } = O(E, w, v);
      return q1(e.outputLen, o.BYTES, r)(I, k);
    }
    function M(E) {
      let w;
      const v = typeof E == "string" || Ua(E), I = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !I) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (I) w = new A(E.r, E.s);
      else if (v) {
        try {
          w = A.fromBytes(mt("sig", E), "der");
        } catch (k) {
          if (!(k instanceof tn.Err)) throw k;
        }
        if (!w) try {
          w = A.fromBytes(mt("sig", E), "compact");
        } catch {
          return false;
        }
      }
      return w || false;
    }
    function _(E, w, v, I = {}) {
      const { lowS: k, prehash: C, format: S } = bc(I, g);
      if (v = mt("publicKey", v), w = L(mt("message", w), C), "strict" in I) throw new Error("options.strict was renamed to lowS");
      const R = S === void 0 ? M(E) : A.fromBytes(mt("sig", E), S);
      if (R === false) return false;
      try {
        const $ = t.fromBytes(v);
        if (k && R.hasHighS()) return false;
        const { r: Y, s: K } = R, j = P(w), J = o.inv(K), Z = o.create(j * J), de = o.create(Y * J), X = t.BASE.multiplyUnsafe(Z).add($.multiplyUnsafe(de));
        return X.is0() ? false : o.create(X.x) === Y;
      } catch {
        return false;
      }
    }
    function y(E, w, v = {}) {
      const { prehash: I } = bc(v, g);
      return w = L(w, I), A.fromBytes(E, "recovered").recoverPublicKey(w).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: h,
      utils: u,
      lengths: f,
      Point: t,
      sign: D,
      verify: _,
      recoverPublicKey: y,
      Signature: A,
      hash: e
    });
  }
  function yE(t) {
    const e = {
      a: t.a,
      b: t.b,
      p: t.Fp.ORDER,
      n: t.n,
      h: t.h,
      Gx: t.Gx,
      Gy: t.Gy
    }, s = t.Fp;
    let n = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
    const r = Zn(e.n, {
      BITS: t.nBitLength,
      allowedLengths: n,
      modFromBytes: t.wrapPrivateKey
    }), i = {
      Fp: s,
      Fn: r,
      allowInfinityPoint: t.allowInfinityPoint,
      endo: t.endo,
      isTorsionFree: t.isTorsionFree,
      clearCofactor: t.clearCofactor,
      fromBytes: t.fromBytes,
      toBytes: t.toBytes
    };
    return {
      CURVE: e,
      curveOpts: i
    };
  }
  function bE(t) {
    const { CURVE: e, curveOpts: s } = yE(t), n = {
      hmac: t.hmac,
      randomBytes: t.randomBytes,
      lowS: t.lowS,
      bits2int: t.bits2int,
      bits2int_modN: t.bits2int_modN
    };
    return {
      CURVE: e,
      curveOpts: s,
      hash: t.hash,
      ecdsaOpts: n
    };
  }
  function EE(t, e) {
    const s = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: s,
      CURVE: Object.assign({}, t, dg(s.Fn.ORDER, s.Fn.BITS))
    });
  }
  function vE(t) {
    const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: r } = bE(t), i = gE(e, s), o = wE(i, n, r);
    return EE(t, o);
  }
  function Nl(t, e) {
    const s = (n) => vE({
      ...t,
      hash: n
    });
    return {
      ...s(e),
      create: s
    };
  }
  const bg = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, Eg = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, vg = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, CE = Zn(bg.p), AE = Zn(Eg.p), IE = Zn(vg.p), NE = Nl({
    ...bg,
    Fp: CE,
    lowS: false
  }, Gp);
  Nl({
    ...Eg,
    Fp: AE,
    lowS: false
  }, c1), Nl({
    ...vg,
    Fp: IE,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, a1);
  const SE = NE, Cg = "base10", Nt = "base16", Er = "base64pad", _d = "base64url", wo = "utf8", Ag = 0, mi = 1, ja = 2, _E = 0, Vh = 1, zi = 12, Td = 32;
  function TE() {
    const t = Al.utils.randomPrivateKey(), e = Al.getPublicKey(t);
    return {
      privateKey: yt(t, Nt),
      publicKey: yt(e, Nt)
    };
  }
  function Sl() {
    const t = Pr(Td);
    return yt(t, Nt);
  }
  function xE(t, e) {
    const s = Al.getSharedSecret($t(t, Nt), $t(e, Nt)), n = M1(Ma, s, void 0, void 0, Td);
    return yt(n, Nt);
  }
  function OE(t) {
    const e = Ma($t(t, Nt));
    return yt(e, Nt);
  }
  function ea(t) {
    const e = Ma($t(t, wo));
    return yt(e, Nt);
  }
  function Ig(t) {
    return $t(`${t}`, Cg);
  }
  function Ir(t) {
    return Number(yt(t, Cg));
  }
  function Ng(t) {
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function Sg(t) {
    const e = t.replace(/-/g, "+").replace(/_/g, "/"), s = (4 - e.length % 4) % 4;
    return e + "=".repeat(s);
  }
  function kE(t) {
    const e = Ig(typeof t.type < "u" ? t.type : Ag);
    if (Ir(e) === mi && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const s = typeof t.senderPublicKey < "u" ? $t(t.senderPublicKey, Nt) : void 0, n = typeof t.iv < "u" ? $t(t.iv, Nt) : Pr(zi), r = $t(t.symKey, Nt), i = Xp(r, n).encrypt($t(t.message, wo)), o = _g({
      type: e,
      sealed: i,
      iv: n,
      senderPublicKey: s
    });
    return t.encoding === _d ? Ng(o) : o;
  }
  function PE(t) {
    const e = $t(t.symKey, Nt), { sealed: s, iv: n } = so({
      encoded: t.encoded,
      encoding: t.encoding
    }), r = Xp(e, n).decrypt(s);
    if (r === null) throw new Error("Failed to decrypt");
    return yt(r, wo);
  }
  function RE(t, e) {
    const s = Ig(ja), n = Pr(zi), r = $t(t, wo), i = _g({
      type: s,
      sealed: r,
      iv: n
    });
    return e === _d ? Ng(i) : i;
  }
  function $E(t, e) {
    const { sealed: s } = so({
      encoded: t,
      encoding: e
    });
    return yt(s, wo);
  }
  function _g(t) {
    if (Ir(t.type) === ja) return yt(ji([
      t.type,
      t.sealed
    ]), Er);
    if (Ir(t.type) === mi) {
      if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      return yt(ji([
        t.type,
        t.senderPublicKey,
        t.iv,
        t.sealed
      ]), Er);
    }
    return yt(ji([
      t.type,
      t.iv,
      t.sealed
    ]), Er);
  }
  function so(t) {
    const e = (t.encoding || Er) === _d ? Sg(t.encoded) : t.encoded, s = $t(e, Er), n = s.slice(_E, Vh), r = Vh;
    if (Ir(n) === mi) {
      const c = r + Td, l = c + zi, d = s.slice(r, c), h = s.slice(c, l), u = s.slice(l);
      return {
        type: n,
        sealed: u,
        iv: h,
        senderPublicKey: d
      };
    }
    if (Ir(n) === ja) {
      const c = s.slice(r), l = Pr(zi);
      return {
        type: n,
        sealed: c,
        iv: l
      };
    }
    const i = r + zi, o = s.slice(r, i), a = s.slice(i);
    return {
      type: n,
      sealed: a,
      iv: o
    };
  }
  function UE(t, e) {
    const s = so({
      encoded: t,
      encoding: e == null ? void 0 : e.encoding
    });
    return Tg({
      type: Ir(s.type),
      senderPublicKey: typeof s.senderPublicKey < "u" ? yt(s.senderPublicKey, Nt) : void 0,
      receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    });
  }
  function Tg(t) {
    const e = (t == null ? void 0 : t.type) || Ag;
    if (e === mi) {
      if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
      if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
    }
    return {
      type: e,
      senderPublicKey: t == null ? void 0 : t.senderPublicKey,
      receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    };
  }
  function zh(t) {
    return t.type === mi && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
  }
  function Kh(t) {
    return t.type === ja;
  }
  function BE(t) {
    const e = Ae.from(t.x, "base64"), s = Ae.from(t.y, "base64");
    return ji([
      new Uint8Array([
        4
      ]),
      e,
      s
    ]);
  }
  function DE(t, e) {
    const [s, n, r] = t.split("."), i = Ae.from(Sg(r), "base64");
    if (i.length !== 64) throw new Error("Invalid signature length");
    const o = i.slice(0, 32), a = i.slice(32, 64), c = `${s}.${n}`, l = Ma(c), d = BE(e);
    if (!SE.verify(ji([
      o,
      a
    ]), l, d)) throw new Error("Invalid signature");
    return il(t).payload;
  }
  const LE = "irn";
  function ya(t) {
    return (t == null ? void 0 : t.relay) || {
      protocol: LE
    };
  }
  function Yr(t) {
    const e = Yw[t];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e;
  }
  var ME = Object.defineProperty, FE = Object.defineProperties, qE = Object.getOwnPropertyDescriptors, Gh = Object.getOwnPropertySymbols, jE = Object.prototype.hasOwnProperty, WE = Object.prototype.propertyIsEnumerable, Yh = (t, e, s) => e in t ? ME(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ec = (t, e) => {
    for (var s in e || (e = {})) jE.call(e, s) && Yh(t, s, e[s]);
    if (Gh) for (var s of Gh(e)) WE.call(e, s) && Yh(t, s, e[s]);
    return t;
  }, HE = (t, e) => FE(t, qE(e));
  function VE(t, e = "-") {
    const s = {}, n = "relay" + e;
    return Object.keys(t).forEach((r) => {
      if (r.startsWith(n)) {
        const i = r.replace(n, ""), o = t[r];
        s[i] = o;
      }
    }), s;
  }
  function Zh(t) {
    if (!t.includes("wc:")) {
      const l = $p(t);
      l != null && l.includes("wc:") && (t = l);
    }
    t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e = t.indexOf(":"), s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), r = t.substring(e + 1, s).split("@"), i = typeof s < "u" ? t.substring(s) : "", o = new URLSearchParams(i), a = Object.fromEntries(o.entries()), c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
      protocol: n,
      topic: zE(r[0]),
      version: parseInt(r[1], 10),
      symKey: a.symKey,
      relay: VE(a),
      methods: c,
      expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    };
  }
  function zE(t) {
    return t.startsWith("//") ? t.substring(2) : t;
  }
  function KE(t, e = "-") {
    const s = "relay", n = {};
    return Object.keys(t).forEach((r) => {
      const i = r, o = s + e + i;
      t[i] && (n[o] = t[i]);
    }), n;
  }
  function Jh(t) {
    const e = new URLSearchParams(), s = Ec(Ec(HE(Ec({}, KE(t.relay)), {
      symKey: t.symKey
    }), t.expiryTimestamp && {
      expiryTimestamp: t.expiryTimestamp.toString()
    }), t.methods && {
      methods: t.methods.join(",")
    });
    return Object.entries(s).sort(([n], [r]) => n.localeCompare(r)).forEach(([n, r]) => {
      r !== void 0 && e.append(n, String(r));
    }), `${t.protocol}:${t.topic}@${t.version}?${e}`;
  }
  const GE = {
    INVALID_METHOD: {
      message: "Invalid method.",
      code: 1001
    },
    INVALID_EVENT: {
      message: "Invalid event.",
      code: 1002
    },
    INVALID_UPDATE_REQUEST: {
      message: "Invalid update request.",
      code: 1003
    },
    INVALID_EXTEND_REQUEST: {
      message: "Invalid extend request.",
      code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005
    },
    UNAUTHORIZED_METHOD: {
      message: "Unauthorized method.",
      code: 3001
    },
    UNAUTHORIZED_EVENT: {
      message: "Unauthorized event.",
      code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004
    },
    USER_REJECTED: {
      message: "User rejected.",
      code: 5e3
    },
    USER_REJECTED_CHAINS: {
      message: "User rejected chains.",
      code: 5001
    },
    USER_REJECTED_METHODS: {
      message: "User rejected methods.",
      code: 5002
    },
    USER_REJECTED_EVENTS: {
      message: "User rejected events.",
      code: 5003
    },
    UNSUPPORTED_CHAINS: {
      message: "Unsupported chains.",
      code: 5100
    },
    UNSUPPORTED_METHODS: {
      message: "Unsupported methods.",
      code: 5101
    },
    UNSUPPORTED_EVENTS: {
      message: "Unsupported events.",
      code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
      message: "Unsupported accounts.",
      code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104
    },
    USER_DISCONNECTED: {
      message: "User disconnected.",
      code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
      message: "Unsupported wc_ method.",
      code: 10001
    }
  }, YE = {
    NOT_INITIALIZED: {
      message: "Not initialized.",
      code: 1
    },
    NO_MATCHING_KEY: {
      message: "No matching key.",
      code: 2
    },
    RESTORE_WILL_OVERRIDE: {
      message: "Restore will override.",
      code: 3
    },
    RESUBSCRIBED: {
      message: "Resubscribed.",
      code: 4
    },
    MISSING_OR_INVALID: {
      message: "Missing or invalid.",
      code: 5
    },
    EXPIRED: {
      message: "Expired.",
      code: 6
    },
    UNKNOWN_TYPE: {
      message: "Unknown type.",
      code: 7
    },
    MISMATCHED_TOPIC: {
      message: "Mismatched topic.",
      code: 8
    },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9
    }
  };
  function xe(t, e) {
    const { message: s, code: n } = YE[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Di(t, e) {
    const { message: s, code: n } = GE[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Li(t) {
    return typeof t > "u";
  }
  function xg(t, e) {
    return typeof t == "string" && !!t.trim().length;
  }
  function ZE(t) {
    function e(s) {
      try {
        return typeof new URL(s) < "u";
      } catch {
        return false;
      }
    }
    try {
      if (xg(t, false)) {
        if (e(t)) return true;
        const s = $p(t);
        return e(s);
      }
    } catch {
    }
    return false;
  }
  function JE(t) {
    var e;
    return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
  }
  function XE(t) {
    return t == null ? void 0 : t.topic;
  }
  function vc(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function Xh() {
    const t = $a();
    return new Promise((e) => {
      switch (t) {
        case Cs.browser:
          e(QE());
          break;
        case Cs.reactNative:
          e(ev());
          break;
        case Cs.node:
          e(tv());
          break;
        default:
          e(true);
      }
    });
  }
  function QE() {
    return po() && (navigator == null ? void 0 : navigator.onLine);
  }
  async function ev() {
    var _a2;
    return kr() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo ? (_a2 = await (globalThis == null ? void 0 : globalThis.NetInfo.fetch())) == null ? void 0 : _a2.isConnected : true;
  }
  function tv() {
    return true;
  }
  function sv(t) {
    switch ($a()) {
      case Cs.browser:
        nv(t);
        break;
      case Cs.reactNative:
        rv(t);
        break;
    }
  }
  function nv(t) {
    !kr() && po() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
  }
  function rv(t) {
    kr() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo && (globalThis == null ? void 0 : globalThis.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
  }
  function iv() {
    var t;
    return po() && Gt.getDocument() ? ((t = Gt.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : true;
  }
  function ov({ logger: t, name: e }) {
    const s = typeof t == "string" ? Pa({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return s.level = typeof t == "string" ? t : t.level, s;
  }
  var av = {};
  const Og = "wc", kg = 2, _l = "core", qs = `${Og}@2:${_l}:`, cv = {
    logger: "error"
  }, lv = {
    database: ":memory:"
  }, dv = "crypto", Qh = "client_ed25519_seed", hv = z.ONE_DAY, uv = "keychain", fv = "0.3", pv = "messages", gv = "0.3", mv = z.SIX_HOURS, wv = "publisher", Pg = "irn", yv = "error", Rg = "wss://relay.walletconnect.org", bv = "relayer", He = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
  }, Ev = "_subscription", Jt = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
  }, vv = 0.1, Tl = "2.23.2", Ue = {
    link_mode: "link_mode",
    relay: "relay"
  }, ta = {
    inbound: "inbound",
    outbound: "outbound"
  }, Cv = "0.3", Av = "WALLETCONNECT_CLIENT_ID", eu = "WALLETCONNECT_LINK_MODE_APPS", jt = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
  }, Iv = "subscription", Nv = "0.3", Sv = "pairing", _v = "0.3", Ii = {
    wc_pairingDelete: {
      req: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1e3
      },
      res: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1001
      }
    },
    wc_pairingPing: {
      req: {
        ttl: z.THIRTY_SECONDS,
        prompt: false,
        tag: 1002
      },
      res: {
        ttl: z.THIRTY_SECONDS,
        prompt: false,
        tag: 1003
      }
    },
    unregistered_method: {
      req: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 0
      },
      res: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 0
      }
    }
  }, or = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
  }, ds = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
  }, Tv = "history", xv = "0.3", Ov = "expirer", ns = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
  }, kv = "0.3", Pv = "verify-api", Rv = "https://verify.walletconnect.com", $g = "https://verify.walletconnect.org", Ki = $g, $v = `${Ki}/v3`, Uv = [
    Rv,
    $g
  ], Bv = "echo", Dv = "https://echo.walletconnect.com", Ps = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
  }, Ys = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
  }, hs = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success: "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success",
    session_request_response_started: "session_request_response_started",
    session_request_response_validation_success: "session_request_response_validation_success",
    session_request_response_publish_started: "session_request_response_publish_started"
  }, Qn = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found",
    session_request_response_validation_failure: "session_request_response_validation_failure",
    session_request_response_publish_failure: "session_request_response_publish_failure"
  }, er = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve"
  }, Ni = {
    no_internet_connection: "no_internet_connection",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
  }, Lv = 0.1, Mv = "event-client", Fv = 86400, qv = "https://pulse.walletconnect.org/batch";
  function jv(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var s = new Uint8Array(256), n = 0; n < s.length; n++) s[n] = 255;
    for (var r = 0; r < t.length; r++) {
      var i = t.charAt(r), o = i.charCodeAt(0);
      if (s[o] !== 255) throw new TypeError(i + " is ambiguous");
      s[o] = r;
    }
    var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
    function h(g) {
      if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (g.length === 0) return "";
      for (var p = 0, m = 0, T = 0, x = g.length; T !== x && g[T] === 0; ) T++, p++;
      for (var A = (x - T) * d + 1 >>> 0, N = new Uint8Array(A); T !== x; ) {
        for (var P = g[T], U = 0, B = A - 1; (P !== 0 || U < m) && B !== -1; B--, U++) P += 256 * N[B] >>> 0, N[B] = P % a >>> 0, P = P / a >>> 0;
        if (P !== 0) throw new Error("Non-zero carry");
        m = U, T++;
      }
      for (var L = A - m; L !== A && N[L] === 0; ) L++;
      for (var O = c.repeat(p); L < A; ++L) O += t.charAt(N[L]);
      return O;
    }
    function u(g) {
      if (typeof g != "string") throw new TypeError("Expected String");
      if (g.length === 0) return new Uint8Array();
      var p = 0;
      if (g[p] !== " ") {
        for (var m = 0, T = 0; g[p] === c; ) m++, p++;
        for (var x = (g.length - p) * l + 1 >>> 0, A = new Uint8Array(x); g[p]; ) {
          var N = s[g.charCodeAt(p)];
          if (N === 255) return;
          for (var P = 0, U = x - 1; (N !== 0 || P < T) && U !== -1; U--, P++) N += a * A[U] >>> 0, A[U] = N % 256 >>> 0, N = N / 256 >>> 0;
          if (N !== 0) throw new Error("Non-zero carry");
          T = P, p++;
        }
        if (g[p] !== " ") {
          for (var B = x - T; B !== x && A[B] === 0; ) B++;
          for (var L = new Uint8Array(m + (x - B)), O = m; B !== x; ) L[O++] = A[B++];
          return L;
        }
      }
    }
    function f(g) {
      var p = u(g);
      if (p) return p;
      throw new Error(`Non-${e} character`);
    }
    return {
      encode: h,
      decodeUnsafe: u,
      decode: f
    };
  }
  var Wv = jv, Hv = Wv;
  const Ug = (t) => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, Vv = (t) => new TextEncoder().encode(t), zv = (t) => new TextDecoder().decode(t);
  class Kv {
    constructor(e, s, n) {
      this.name = e, this.prefix = s, this.baseEncode = n;
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  }
  class Gv {
    constructor(e, s, n) {
      if (this.name = e, this.prefix = s, s.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
      this.prefixCodePoint = s.codePointAt(0), this.baseDecode = n;
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return Bg(this, e);
    }
  }
  class Yv {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return Bg(this, e);
    }
    decode(e) {
      const s = e[0], n = this.decoders[s];
      if (n) return n.decode(e);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
  const Bg = (t, e) => new Yv({
    ...t.decoders || {
      [t.prefix]: t
    },
    ...e.decoders || {
      [e.prefix]: e
    }
  });
  let Zv = class {
    constructor(e, s, n, r) {
      this.name = e, this.prefix = s, this.baseEncode = n, this.baseDecode = r, this.encoder = new Kv(e, s, n), this.decoder = new Gv(e, s, r);
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  };
  const Wa = ({ name: t, prefix: e, encode: s, decode: n }) => new Zv(t, e, s, n), yo = ({ prefix: t, name: e, alphabet: s }) => {
    const { encode: n, decode: r } = Hv(s, e);
    return Wa({
      prefix: t,
      name: e,
      encode: n,
      decode: (i) => Ug(r(i))
    });
  }, Jv = (t, e, s, n) => {
    const r = {};
    for (let d = 0; d < e.length; ++d) r[e[d]] = d;
    let i = t.length;
    for (; t[i - 1] === "="; ) --i;
    const o = new Uint8Array(i * s / 8 | 0);
    let a = 0, c = 0, l = 0;
    for (let d = 0; d < i; ++d) {
      const h = r[t[d]];
      if (h === void 0) throw new SyntaxError(`Non-${n} character`);
      c = c << s | h, a += s, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
    }
    if (a >= s || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
    return o;
  }, Xv = (t, e, s) => {
    const n = e[e.length - 1] === "=", r = (1 << s) - 1;
    let i = "", o = 0, a = 0;
    for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > s; ) o -= s, i += e[r & a >> o];
    if (o && (i += e[r & a << s - o]), n) for (; i.length * s & 7; ) i += "=";
    return i;
  }, ct = ({ name: t, prefix: e, bitsPerChar: s, alphabet: n }) => Wa({
    prefix: e,
    name: t,
    encode(r) {
      return Xv(r, n, s);
    },
    decode(r) {
      return Jv(r, n, s, t);
    }
  }), Qv = Wa({
    prefix: "\0",
    name: "identity",
    encode: (t) => zv(t),
    decode: (t) => Vv(t)
  });
  var eC = Object.freeze({
    __proto__: null,
    identity: Qv
  });
  const tC = ct({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });
  var sC = Object.freeze({
    __proto__: null,
    base2: tC
  });
  const nC = ct({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });
  var rC = Object.freeze({
    __proto__: null,
    base8: nC
  });
  const iC = yo({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });
  var oC = Object.freeze({
    __proto__: null,
    base10: iC
  });
  const aC = ct({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  }), cC = ct({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });
  var lC = Object.freeze({
    __proto__: null,
    base16: aC,
    base16upper: cC
  });
  const dC = ct({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  }), hC = ct({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  }), uC = ct({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  }), fC = ct({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  }), pC = ct({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  }), gC = ct({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  }), mC = ct({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  }), wC = ct({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  }), yC = ct({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });
  var bC = Object.freeze({
    __proto__: null,
    base32: dC,
    base32upper: hC,
    base32pad: uC,
    base32padupper: fC,
    base32hex: pC,
    base32hexupper: gC,
    base32hexpad: mC,
    base32hexpadupper: wC,
    base32z: yC
  });
  const EC = yo({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  }), vC = yo({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });
  var CC = Object.freeze({
    __proto__: null,
    base36: EC,
    base36upper: vC
  });
  const AC = yo({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  }), IC = yo({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });
  var NC = Object.freeze({
    __proto__: null,
    base58btc: AC,
    base58flickr: IC
  });
  const SC = ct({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  }), _C = ct({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  }), TC = ct({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  }), xC = ct({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });
  var OC = Object.freeze({
    __proto__: null,
    base64: SC,
    base64pad: _C,
    base64url: TC,
    base64urlpad: xC
  });
  const Dg = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), kC = Dg.reduce((t, e, s) => (t[s] = e, t), []), PC = Dg.reduce((t, e, s) => (t[e.codePointAt(0)] = s, t), []);
  function RC(t) {
    return t.reduce((e, s) => (e += kC[s], e), "");
  }
  function $C(t) {
    const e = [];
    for (const s of t) {
      const n = PC[s.codePointAt(0)];
      if (n === void 0) throw new Error(`Non-base256emoji character: ${s}`);
      e.push(n);
    }
    return new Uint8Array(e);
  }
  const UC = Wa({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: RC,
    decode: $C
  });
  var BC = Object.freeze({
    __proto__: null,
    base256emoji: UC
  }), DC = Lg, tu = 128, LC = -128, MC = Math.pow(2, 31);
  function Lg(t, e, s) {
    e = e || [], s = s || 0;
    for (var n = s; t >= MC; ) e[s++] = t & 255 | tu, t /= 128;
    for (; t & LC; ) e[s++] = t & 255 | tu, t >>>= 7;
    return e[s] = t | 0, Lg.bytes = s - n + 1, e;
  }
  var FC = xl, qC = 128, su = 127;
  function xl(t, n) {
    var s = 0, n = n || 0, r = 0, i = n, o, a = t.length;
    do {
      if (i >= a) throw xl.bytes = 0, new RangeError("Could not decode varint");
      o = t[i++], s += r < 28 ? (o & su) << r : (o & su) * Math.pow(2, r), r += 7;
    } while (o >= qC);
    return xl.bytes = i - n, s;
  }
  var jC = Math.pow(2, 7), WC = Math.pow(2, 14), HC = Math.pow(2, 21), VC = Math.pow(2, 28), zC = Math.pow(2, 35), KC = Math.pow(2, 42), GC = Math.pow(2, 49), YC = Math.pow(2, 56), ZC = Math.pow(2, 63), JC = function(t) {
    return t < jC ? 1 : t < WC ? 2 : t < HC ? 3 : t < VC ? 4 : t < zC ? 5 : t < KC ? 6 : t < GC ? 7 : t < YC ? 8 : t < ZC ? 9 : 10;
  }, XC = {
    encode: DC,
    decode: FC,
    encodingLength: JC
  }, Mg = XC;
  const nu = (t, e, s = 0) => (Mg.encode(t, e, s), e), ru = (t) => Mg.encodingLength(t), Ol = (t, e) => {
    const s = e.byteLength, n = ru(t), r = n + ru(s), i = new Uint8Array(r + s);
    return nu(t, i, 0), nu(s, i, n), i.set(e, r), new QC(t, s, e, i);
  };
  let QC = class {
    constructor(e, s, n, r) {
      this.code = e, this.size = s, this.digest = n, this.bytes = r;
    }
  };
  const Fg = ({ name: t, code: e, encode: s }) => new eA(t, e, s);
  let eA = class {
    constructor(e, s, n) {
      this.name = e, this.code = s, this.encode = n;
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        const s = this.encode(e);
        return s instanceof Uint8Array ? Ol(this.code, s) : s.then((n) => Ol(this.code, n));
      } else throw Error("Unknown type, must be binary type");
    }
  };
  const qg = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), tA = Fg({
    name: "sha2-256",
    code: 18,
    encode: qg("SHA-256")
  }), sA = Fg({
    name: "sha2-512",
    code: 19,
    encode: qg("SHA-512")
  });
  var nA = Object.freeze({
    __proto__: null,
    sha256: tA,
    sha512: sA
  });
  const jg = 0, rA = "identity", Wg = Ug, iA = (t) => Ol(jg, Wg(t)), oA = {
    code: jg,
    name: rA,
    encode: Wg,
    digest: iA
  };
  var aA = Object.freeze({
    __proto__: null,
    identity: oA
  });
  new TextEncoder(), new TextDecoder();
  const iu = {
    ...eC,
    ...sC,
    ...rC,
    ...oC,
    ...lC,
    ...bC,
    ...CC,
    ...NC,
    ...OC,
    ...BC
  };
  ({
    ...nA,
    ...aA
  });
  function Hg(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
  }
  function cA(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Hg(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
  }
  function Vg(t, e, s, n) {
    return {
      name: t,
      prefix: e,
      encoder: {
        name: t,
        prefix: e,
        encode: s
      },
      decoder: {
        decode: n
      }
    };
  }
  const ou = Vg("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Cc = Vg("ascii", "a", (t) => {
    let e = "a";
    for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
    return e;
  }, (t) => {
    t = t.substring(1);
    const e = cA(t.length);
    for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
    return e;
  }), lA = {
    utf8: ou,
    "utf-8": ou,
    hex: iu.base16,
    latin1: Cc,
    ascii: Cc,
    binary: Cc,
    ...iu
  };
  function dA(t, e = "utf8") {
    const s = lA[e];
    if (!s) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Hg(globalThis.Buffer.from(t, "utf-8")) : s.decoder.decode(`${s.prefix}${t}`);
  }
  var hA = Object.defineProperty, uA = (t, e, s) => e in t ? hA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, xs = (t, e, s) => uA(t, typeof e != "symbol" ? e + "" : e, s);
  let fA = class {
    constructor(e, s) {
      this.core = e, this.logger = s, xs(this, "keychain", /* @__PURE__ */ new Map()), xs(this, "name", uv), xs(this, "version", fv), xs(this, "initialized", false), xs(this, "storagePrefix", qs), xs(this, "init", async () => {
        if (!this.initialized) {
          const n = await this.getKeyChain();
          typeof n < "u" && (this.keychain = n), this.initialized = true;
        }
      }), xs(this, "has", (n) => (this.isInitialized(), this.keychain.has(n))), xs(this, "set", async (n, r) => {
        this.isInitialized(), this.keychain.set(n, r), await this.persist();
      }), xs(this, "get", (n) => {
        this.isInitialized();
        const r = this.keychain.get(n);
        if (typeof r > "u") {
          const { message: i } = xe("NO_MATCHING_KEY", `${this.name}: ${n}`);
          throw new Error(i);
        }
        return r;
      }), xs(this, "del", async (n) => {
        this.isInitialized(), this.keychain.delete(n), await this.persist();
      }), this.core = e, this.logger = Yt(s, this.name);
    }
    get context() {
      return Zt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
      await this.core.storage.setItem(this.storageKey, gl(e));
    }
    async getKeyChain() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? ml(e) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var pA = Object.defineProperty, gA = (t, e, s) => e in t ? pA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ye = (t, e, s) => gA(t, typeof e != "symbol" ? e + "" : e, s);
  class mA {
    constructor(e, s, n) {
      this.core = e, this.logger = s, Ye(this, "name", dv), Ye(this, "keychain"), Ye(this, "randomSessionIdentifier", Sl()), Ye(this, "initialized", false), Ye(this, "clientId"), Ye(this, "init", async () => {
        this.initialized || (await this.keychain.init(), this.initialized = true);
      }), Ye(this, "hasKeys", (r) => (this.isInitialized(), this.keychain.has(r))), Ye(this, "getClientId", async () => {
        if (this.isInitialized(), this.clientId) return this.clientId;
        const r = await this.getClientSeed(), i = rh(r), o = ey(i.publicKey);
        return this.clientId = o, o;
      }), Ye(this, "generateKeyPair", () => {
        this.isInitialized();
        const r = TE();
        return this.setPrivateKey(r.publicKey, r.privateKey);
      }), Ye(this, "signJWT", async (r) => {
        this.isInitialized();
        const i = await this.getClientSeed(), o = rh(i), a = this.randomSessionIdentifier;
        return await ty(a, r, hv, o);
      }), Ye(this, "generateSharedKey", (r, i, o) => {
        this.isInitialized();
        const a = this.getPrivateKey(r), c = xE(a, i);
        return this.setSymKey(c, o);
      }), Ye(this, "setSymKey", async (r, i) => {
        this.isInitialized();
        const o = i || OE(r);
        return await this.keychain.set(o, r), o;
      }), Ye(this, "deleteKeyPair", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), Ye(this, "deleteSymKey", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), Ye(this, "encode", async (r, i, o) => {
        this.isInitialized();
        const a = Tg(o), c = sy(i);
        if (Kh(a)) return RE(c, o == null ? void 0 : o.encoding);
        if (zh(a)) {
          const u = a.senderPublicKey, f = a.receiverPublicKey;
          r = await this.generateSharedKey(u, f);
        }
        const l = this.getSymKey(r), { type: d, senderPublicKey: h } = a;
        return kE({
          type: d,
          symKey: l,
          message: c,
          senderPublicKey: h,
          encoding: o == null ? void 0 : o.encoding
        });
      }), Ye(this, "decode", async (r, i, o) => {
        this.isInitialized();
        const a = UE(i, o);
        if (Kh(a)) {
          const c = $E(i, o == null ? void 0 : o.encoding);
          return ih(c);
        }
        if (zh(a)) {
          const c = a.receiverPublicKey, l = a.senderPublicKey;
          r = await this.generateSharedKey(c, l);
        }
        try {
          const c = this.getSymKey(r), l = PE({
            symKey: c,
            encoded: i,
            encoding: o == null ? void 0 : o.encoding
          });
          return ih(l);
        } catch (c) {
          this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
        }
      }), Ye(this, "getPayloadType", (r, i = Er) => {
        const o = so({
          encoded: r,
          encoding: i
        });
        return Ir(o.type);
      }), Ye(this, "getPayloadSenderPublicKey", (r, i = Er) => {
        const o = so({
          encoded: r,
          encoding: i
        });
        return o.senderPublicKey ? yt(o.senderPublicKey, Nt) : void 0;
      }), this.core = e, this.logger = Yt(s, this.name), this.keychain = n || new fA(this.core, this.logger);
    }
    get context() {
      return Zt(this.logger);
    }
    async setPrivateKey(e, s) {
      return await this.keychain.set(e, s), e;
    }
    getPrivateKey(e) {
      return this.keychain.get(e);
    }
    async getClientSeed() {
      let e = "";
      try {
        e = this.keychain.get(Qh);
      } catch {
        e = Sl(), await this.keychain.set(Qh, e);
      }
      return dA(e, "base16");
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var wA = Object.defineProperty, yA = Object.defineProperties, bA = Object.getOwnPropertyDescriptors, au = Object.getOwnPropertySymbols, EA = Object.prototype.hasOwnProperty, vA = Object.prototype.propertyIsEnumerable, kl = (t, e, s) => e in t ? wA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, CA = (t, e) => {
    for (var s in e || (e = {})) EA.call(e, s) && kl(t, s, e[s]);
    if (au) for (var s of au(e)) vA.call(e, s) && kl(t, s, e[s]);
    return t;
  }, AA = (t, e) => yA(t, bA(e)), Mt = (t, e, s) => kl(t, typeof e != "symbol" ? e + "" : e, s);
  class IA extends A0 {
    constructor(e, s) {
      super(e, s), this.logger = e, this.core = s, Mt(this, "messages", /* @__PURE__ */ new Map()), Mt(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), Mt(this, "name", pv), Mt(this, "version", gv), Mt(this, "initialized", false), Mt(this, "storagePrefix", qs), Mt(this, "init", async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const n = await this.getRelayerMessages();
            typeof n < "u" && (this.messages = n);
            const r = await this.getRelayerMessagesWithoutClientAck();
            typeof r < "u" && (this.messagesWithoutClientAck = r), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
              type: "method",
              method: "restore",
              size: this.messages.size
            });
          } catch (n) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n);
          } finally {
            this.initialized = true;
          }
        }
      }), Mt(this, "set", async (n, r, i) => {
        this.isInitialized();
        const o = ea(r);
        let a = this.messages.get(n);
        if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
        if (a[o] = r, this.messages.set(n, a), i === ta.inbound) {
          const c = this.messagesWithoutClientAck.get(n) || {};
          this.messagesWithoutClientAck.set(n, AA(CA({}, c), {
            [o]: r
          }));
        }
        return await this.persist(), o;
      }), Mt(this, "get", (n) => {
        this.isInitialized();
        let r = this.messages.get(n);
        return typeof r > "u" && (r = {}), r;
      }), Mt(this, "getWithoutAck", (n) => {
        this.isInitialized();
        const r = {};
        for (const i of n) {
          const o = this.messagesWithoutClientAck.get(i) || {};
          r[i] = Object.values(o);
        }
        return r;
      }), Mt(this, "has", (n, r) => {
        this.isInitialized();
        const i = this.get(n), o = ea(r);
        return typeof i[o] < "u";
      }), Mt(this, "ack", async (n, r) => {
        this.isInitialized();
        const i = this.messagesWithoutClientAck.get(n);
        if (typeof i > "u") return;
        const o = ea(r);
        delete i[o], Object.keys(i).length === 0 ? this.messagesWithoutClientAck.delete(n) : this.messagesWithoutClientAck.set(n, i), await this.persist();
      }), Mt(this, "del", async (n) => {
        this.isInitialized(), this.messages.delete(n), this.messagesWithoutClientAck.delete(n), await this.persist();
      }), this.logger = Yt(e, this.name), this.core = s;
    }
    get context() {
      return Zt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get storageKeyWithoutClientAck() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
    }
    async setRelayerMessages(e) {
      await this.core.storage.setItem(this.storageKey, gl(e));
    }
    async setRelayerMessagesWithoutClientAck(e) {
      await this.core.storage.setItem(this.storageKeyWithoutClientAck, gl(e));
    }
    async getRelayerMessages() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? ml(e) : void 0;
    }
    async getRelayerMessagesWithoutClientAck() {
      const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
      return typeof e < "u" ? ml(e) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var NA = Object.defineProperty, SA = Object.defineProperties, _A = Object.getOwnPropertyDescriptors, cu = Object.getOwnPropertySymbols, TA = Object.prototype.hasOwnProperty, xA = Object.prototype.propertyIsEnumerable, Pl = (t, e, s) => e in t ? NA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Mr = (t, e) => {
    for (var s in e || (e = {})) TA.call(e, s) && Pl(t, s, e[s]);
    if (cu) for (var s of cu(e)) xA.call(e, s) && Pl(t, s, e[s]);
    return t;
  }, lu = (t, e) => SA(t, _A(e)), Xt = (t, e, s) => Pl(t, typeof e != "symbol" ? e + "" : e, s);
  let OA = class extends I0 {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, Xt(this, "events", new _r.EventEmitter()), Xt(this, "name", wv), Xt(this, "queue", /* @__PURE__ */ new Map()), Xt(this, "publishTimeout", z.toMiliseconds(z.ONE_MINUTE)), Xt(this, "initialPublishTimeout", z.toMiliseconds(z.ONE_SECOND * 15)), Xt(this, "needsTransportRestart", false), Xt(this, "publish", async (n, r, i) => {
        var o, a, c, l, d;
        this.logger.debug("Publishing Payload"), this.logger.trace({
          type: "method",
          method: "publish",
          params: {
            topic: n,
            message: r,
            opts: i
          }
        });
        const h = (i == null ? void 0 : i.ttl) || mv, u = (i == null ? void 0 : i.prompt) || false, f = (i == null ? void 0 : i.tag) || 0, g = (i == null ? void 0 : i.id) || lr().toString(), p = Yr(ya().protocol), m = {
          id: g,
          method: (i == null ? void 0 : i.publishMethod) || p.publish,
          params: Mr({
            topic: n,
            message: r,
            ttl: h,
            prompt: u,
            tag: f,
            attestation: i == null ? void 0 : i.attestation
          }, i == null ? void 0 : i.tvf)
        }, T = `Failed to publish payload, please try again. id:${g} tag:${f}`;
        try {
          Li((o = m.params) == null ? void 0 : o.prompt) && ((a = m.params) == null || delete a.prompt), Li((c = m.params) == null ? void 0 : c.tag) && ((l = m.params) == null || delete l.tag);
          const x = new Promise(async (A) => {
            const N = ({ id: U }) => {
              var B;
              ((B = m.id) == null ? void 0 : B.toString()) === U.toString() && (this.removeRequestFromQueue(U), this.relayer.events.removeListener(He.publish, N), A());
            };
            this.relayer.events.on(He.publish, N);
            const P = Bs(new Promise((U, B) => {
              this.rpcPublish(m, i).then(U).catch((L) => {
                this.logger.warn(L, L == null ? void 0 : L.message), B(L);
              });
            }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g} tag:${f}`);
            try {
              await P, this.events.removeListener(He.publish, N);
            } catch (U) {
              this.queue.set(g, {
                request: m,
                opts: i,
                attempt: 1
              }), this.logger.warn(U, U == null ? void 0 : U.message);
            }
          });
          this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              id: g,
              topic: n,
              message: r,
              opts: i
            }
          }), await Bs(x, this.publishTimeout, T);
        } catch (x) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(x), (d = i == null ? void 0 : i.internal) != null && d.throwOnFailedPublish) throw x;
        } finally {
          this.queue.delete(g);
        }
      }), Xt(this, "publishCustom", async (n) => {
        var r, i, o, a, c;
        this.logger.debug("Publishing custom payload"), this.logger.trace({
          type: "method",
          method: "publishCustom",
          params: n
        });
        const { payload: l, opts: d = {} } = n, { attestation: h, tvf: u, publishMethod: f, prompt: g, tag: p, ttl: m = z.FIVE_MINUTES } = d, T = d.id || lr().toString(), x = Yr(ya().protocol), A = f || x.publish, N = {
          id: T,
          method: A,
          params: Mr(lu(Mr({}, l), {
            ttl: m,
            prompt: g,
            tag: p,
            attestation: h
          }), u)
        }, P = `Failed to publish custom payload, please try again. id:${T} tag:${p}`;
        try {
          Li((r = N.params) == null ? void 0 : r.prompt) && ((i = N.params) == null || delete i.prompt), Li((o = N.params) == null ? void 0 : o.tag) && ((a = N.params) == null || delete a.tag);
          const U = new Promise(async (B) => {
            const L = ({ id: D }) => {
              var M;
              ((M = N.id) == null ? void 0 : M.toString()) === D.toString() && (this.removeRequestFromQueue(D), this.relayer.events.removeListener(He.publish, L), B());
            };
            this.relayer.events.on(He.publish, L);
            const O = Bs(new Promise((D, M) => {
              this.rpcPublish(N, d).then(D).catch((_) => {
                this.logger.warn(_, _ == null ? void 0 : _.message), M(_);
              });
            }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${A} id:${T} tag:${p}`);
            try {
              await O, this.events.removeListener(He.publish, L);
            } catch (D) {
              this.queue.set(T, {
                request: N,
                opts: d,
                attempt: 1
              }), this.logger.warn(D, D == null ? void 0 : D.message);
            }
          });
          this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              id: T,
              payload: l,
              opts: d
            }
          }), await Bs(U, this.publishTimeout, P);
        } catch (U) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(U), (c = d == null ? void 0 : d.internal) != null && c.throwOnFailedPublish) throw U;
        } finally {
          this.queue.delete(T);
        }
      }), Xt(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Xt(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Xt(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Xt(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.relayer = e, this.logger = Yt(s, this.name), this.registerEventListeners();
    }
    get context() {
      return Zt(this.logger);
    }
    async rpcPublish(e, s) {
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "message",
        direction: "outgoing",
        request: e
      });
      const n = await this.relayer.request(e);
      return this.relayer.events.emit(He.publish, Mr(Mr({}, e), s)), this.logger.debug("Successfully Published Payload"), n;
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach(async (e, s) => {
        var n;
        const r = e.attempt + 1;
        this.queue.set(s, lu(Mr({}, e), {
          attempt: r
        })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(n = e.request.params) == null ? void 0 : n.tag}, attempt: ${r}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(gi.pulse, () => {
        if (this.needsTransportRestart) {
          this.needsTransportRestart = false, this.relayer.events.emit(He.connection_stalled);
          return;
        }
        this.checkQueue();
      }), this.relayer.on(He.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
    }
  };
  var kA = Object.defineProperty, PA = (t, e, s) => e in t ? kA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Fr = (t, e, s) => PA(t, typeof e != "symbol" ? e + "" : e, s);
  class RA {
    constructor() {
      Fr(this, "map", /* @__PURE__ */ new Map()), Fr(this, "set", (e, s) => {
        const n = this.get(e);
        this.exists(e, s) || this.map.set(e, [
          ...n,
          s
        ]);
      }), Fr(this, "get", (e) => this.map.get(e) || []), Fr(this, "exists", (e, s) => this.get(e).includes(s)), Fr(this, "delete", (e, s) => {
        if (typeof s > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const n = this.get(e);
        if (!this.exists(e, s)) return;
        const r = n.filter((i) => i !== s);
        if (!r.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, r);
      }), Fr(this, "clear", () => {
        this.map.clear();
      });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  }
  var $A = Object.defineProperty, UA = Object.defineProperties, BA = Object.getOwnPropertyDescriptors, du = Object.getOwnPropertySymbols, DA = Object.prototype.hasOwnProperty, LA = Object.prototype.propertyIsEnumerable, Rl = (t, e, s) => e in t ? $A(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Si = (t, e) => {
    for (var s in e || (e = {})) DA.call(e, s) && Rl(t, s, e[s]);
    if (du) for (var s of du(e)) LA.call(e, s) && Rl(t, s, e[s]);
    return t;
  }, Ac = (t, e) => UA(t, BA(e)), ke = (t, e, s) => Rl(t, typeof e != "symbol" ? e + "" : e, s);
  class MA extends _0 {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, ke(this, "subscriptions", /* @__PURE__ */ new Map()), ke(this, "topicMap", new RA()), ke(this, "events", new _r.EventEmitter()), ke(this, "name", Iv), ke(this, "version", Nv), ke(this, "pending", /* @__PURE__ */ new Map()), ke(this, "cached", []), ke(this, "initialized", false), ke(this, "storagePrefix", qs), ke(this, "subscribeTimeout", z.toMiliseconds(z.ONE_MINUTE)), ke(this, "initialSubscribeTimeout", z.toMiliseconds(z.ONE_SECOND * 15)), ke(this, "clientId"), ke(this, "batchSubscribeTopicsLimit", 500), ke(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
      }), ke(this, "subscribe", async (n, r) => {
        var i;
        this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
          type: "method",
          method: "subscribe",
          params: {
            topic: n,
            opts: r
          }
        });
        try {
          const o = ya(r), a = {
            topic: n,
            relay: o,
            transportType: r == null ? void 0 : r.transportType
          };
          (i = r == null ? void 0 : r.internal) != null && i.skipSubscribe || this.pending.set(n, a);
          const c = await this.rpcSubscribe(n, o, r);
          return typeof c == "string" && (this.onSubscribe(c, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
            type: "method",
            method: "subscribe",
            params: {
              topic: n,
              opts: r
            }
          })), c;
        } catch (o) {
          throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o), o;
        }
      }), ke(this, "unsubscribe", async (n, r) => {
        this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(n, r.id, r) : await this.unsubscribeByTopic(n, r);
      }), ke(this, "isSubscribed", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n));
      })), ke(this, "isKnownTopic", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n) || this.pending.has(n) || this.cached.some((i) => i.topic === n));
      })), ke(this, "on", (n, r) => {
        this.events.on(n, r);
      }), ke(this, "once", (n, r) => {
        this.events.once(n, r);
      }), ke(this, "off", (n, r) => {
        this.events.off(n, r);
      }), ke(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), ke(this, "start", async () => {
        await this.onConnect();
      }), ke(this, "stop", async () => {
        await this.onDisconnect();
      }), ke(this, "restart", async () => {
        await this.restore(), await this.onRestart();
      }), ke(this, "checkPending", async () => {
        if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
        const n = [];
        this.pending.forEach((r) => {
          n.push(r);
        }), await this.batchSubscribe(n);
      }), ke(this, "registerEventListeners", () => {
        this.relayer.core.heartbeat.on(gi.pulse, async () => {
          await this.checkPending();
        }), this.events.on(jt.created, async (n) => {
          const r = jt.created;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        }), this.events.on(jt.deleted, async (n) => {
          const r = jt.deleted;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        });
      }), this.relayer = e, this.logger = Yt(s, this.name), this.clientId = "";
    }
    get context() {
      return Zt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.subscriptions.size;
    }
    get ids() {
      return Array.from(this.subscriptions.keys());
    }
    get values() {
      return Array.from(this.subscriptions.values());
    }
    get topics() {
      return this.topicMap.topics;
    }
    get hasAnyTopics() {
      return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
    }
    hasSubscription(e, s) {
      let n = false;
      try {
        n = this.getSubscription(e).topic === s;
      } catch {
      }
      return n;
    }
    reset() {
      this.cached = [], this.initialized = true;
    }
    onDisable() {
      this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, s) {
      const n = this.topicMap.get(e);
      await Promise.all(n.map(async (r) => await this.unsubscribeById(e, r, s)));
    }
    async unsubscribeById(e, s, n) {
      this.logger.debug("Unsubscribing Topic"), this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: {
          topic: e,
          id: s,
          opts: n
        }
      });
      try {
        const r = ya(n);
        await this.restartToComplete({
          topic: e,
          id: s,
          relay: r
        }), await this.rpcUnsubscribe(e, s, r);
        const i = Di("USER_DISCONNECTED", `${this.name}, ${e}`);
        await this.onUnsubscribe(e, s, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: {
            topic: e,
            id: s,
            opts: n
          }
        });
      } catch (r) {
        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(r), r;
      }
    }
    async rpcSubscribe(e, s, n) {
      var r, i;
      const o = await this.getSubscriptionId(e);
      if ((r = n == null ? void 0 : n.internal) != null && r.skipSubscribe) return o;
      (!n || (n == null ? void 0 : n.transportType) === Ue.relay) && await this.restartToComplete({
        topic: e,
        id: e,
        relay: s
      });
      const a = {
        method: Yr(s.protocol).subscribe,
        params: {
          topic: e
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: a
      });
      const c = (i = n == null ? void 0 : n.internal) == null ? void 0 : i.throwOnFailedPublish;
      try {
        if ((n == null ? void 0 : n.transportType) === Ue.link_mode) return setTimeout(() => {
          (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a).catch((h) => this.logger.warn(h));
        }, z.toMiliseconds(z.ONE_SECOND)), o;
        const l = new Promise(async (h) => {
          const u = (f) => {
            f.topic === e && (this.events.removeListener(jt.created, u), h(f.id));
          };
          this.events.on(jt.created, u);
          try {
            const f = await Bs(new Promise((g, p) => {
              this.relayer.request(a).catch((m) => {
                this.logger.warn(m, m == null ? void 0 : m.message), p(m);
              }).then(g);
            }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
            this.events.removeListener(jt.created, u), h(f);
          } catch {
          }
        }), d = await Bs(l, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
        if (!d && c) throw new Error(`Subscribing to ${e} failed, please try again`);
        return d ? o : null;
      } catch (l) {
        if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(He.connection_stalled), c) throw l;
      }
      return null;
    }
    async rpcBatchSubscribe(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: Yr(s.protocol).batchSubscribe,
        params: {
          topics: e.map((r) => r.topic)
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: n
      });
      try {
        await await Bs(new Promise((r) => {
          this.relayer.request(n).catch((i) => this.logger.warn(i)).then(r);
        }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
      } catch {
        this.relayer.events.emit(He.connection_stalled);
      }
    }
    async rpcBatchFetchMessages(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: Yr(s.protocol).batchFetchMessages,
        params: {
          topics: e.map((i) => i.topic)
        }
      };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: n
      });
      let r;
      try {
        r = await await Bs(new Promise((i, o) => {
          this.relayer.request(n).catch((a) => {
            this.logger.warn(a), o(a);
          }).then(i);
        }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
      } catch {
        this.relayer.events.emit(He.connection_stalled);
      }
      return r;
    }
    rpcUnsubscribe(e, s, n) {
      const r = {
        method: Yr(n.protocol).unsubscribe,
        params: {
          topic: e,
          id: s
        }
      };
      return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "outgoing",
        request: r
      }), this.relayer.request(r);
    }
    onSubscribe(e, s) {
      this.setSubscription(e, Ac(Si({}, s), {
        id: e
      })), this.pending.delete(s.topic);
    }
    onBatchSubscribe(e) {
      e.length && e.forEach((s) => {
        this.setSubscription(s.id, Si({}, s)), this.pending.delete(s.topic);
      });
    }
    async onUnsubscribe(e, s, n) {
      this.events.removeAllListeners(s), this.hasSubscription(s, e) && this.deleteSubscription(s, n), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
      await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
      return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, s) {
      this.logger.debug("Setting subscription"), this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: s
      }), this.addSubscription(e, s);
    }
    addSubscription(e, s) {
      this.subscriptions.set(e, Si({}, s)), this.topicMap.set(s.topic, e), this.events.emit(jt.created, s);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"), this.logger.trace({
        type: "method",
        method: "getSubscription",
        id: e
      });
      const s = this.subscriptions.get(e);
      if (!s) {
        const { message: n } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(n);
      }
      return s;
    }
    deleteSubscription(e, s) {
      this.logger.debug("Deleting subscription"), this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: s
      });
      const n = this.getSubscription(e);
      this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(jt.deleted, Ac(Si({}, n), {
        reason: s
      }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values), this.events.emit(jt.sync);
    }
    async onRestart() {
      if (this.cached.length) {
        const e = [
          ...this.cached
        ], s = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
        for (let n = 0; n < s; n++) {
          const r = e.splice(0, this.batchSubscribeTopicsLimit);
          await this.batchSubscribe(r);
        }
      }
      this.events.emit(jt.resubscribed);
    }
    async restore() {
      try {
        const e = await this.getRelayerSubscriptions();
        if (typeof e > "u" || !e.length) return;
        if (this.subscriptions.size && !e.every((s) => {
          var n;
          return s.topic === ((n = this.subscriptions.get(s.id)) == null ? void 0 : n.topic);
        })) {
          const { message: s } = xe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
      }
    }
    async batchSubscribe(e) {
      e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (s) => Ac(Si({}, s), {
        id: await this.getSubscriptionId(s.topic)
      })))));
    }
    async batchFetchMessages(e) {
      if (!e.length) return;
      this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
      const s = await this.rpcBatchFetchMessages(e);
      s && s.messages && (await Tb(z.toMiliseconds(z.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(s.messages));
    }
    async onConnect() {
      await this.restart(), this.reset();
    }
    onDisconnect() {
      this.onDisable();
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    async restartToComplete(e) {
      !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
    }
    async getClientId() {
      return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
    }
    async getSubscriptionId(e) {
      return ea(e + await this.getClientId());
    }
  }
  var FA = Object.defineProperty, hu = Object.getOwnPropertySymbols, qA = Object.prototype.hasOwnProperty, jA = Object.prototype.propertyIsEnumerable, $l = (t, e, s) => e in t ? FA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, uu = (t, e) => {
    for (var s in e || (e = {})) qA.call(e, s) && $l(t, s, e[s]);
    if (hu) for (var s of hu(e)) jA.call(e, s) && $l(t, s, e[s]);
    return t;
  }, Ne = (t, e, s) => $l(t, typeof e != "symbol" ? e + "" : e, s);
  let WA = class extends N0 {
    constructor(e) {
      var s;
      super(e), Ne(this, "protocol", "wc"), Ne(this, "version", 2), Ne(this, "core"), Ne(this, "logger"), Ne(this, "events", new _r.EventEmitter()), Ne(this, "provider"), Ne(this, "messages"), Ne(this, "subscriber"), Ne(this, "publisher"), Ne(this, "name", bv), Ne(this, "transportExplicitlyClosed", false), Ne(this, "initialized", false), Ne(this, "connectionAttemptInProgress", false), Ne(this, "relayUrl"), Ne(this, "projectId"), Ne(this, "packageName"), Ne(this, "bundleId"), Ne(this, "hasExperiencedNetworkDisruption", false), Ne(this, "pingTimeout"), Ne(this, "heartBeatTimeout", z.toMiliseconds(z.THIRTY_SECONDS + z.FIVE_SECONDS)), Ne(this, "reconnectTimeout"), Ne(this, "connectPromise"), Ne(this, "reconnectInProgress", false), Ne(this, "requestsInFlight", []), Ne(this, "connectTimeout", z.toMiliseconds(z.ONE_SECOND * 15)), Ne(this, "request", async (n) => {
        var r, i;
        this.logger.debug("Publishing Request Payload");
        const o = n.id || lr().toString();
        await this.toEstablishConnection();
        try {
          this.logger.trace({
            id: o,
            method: n.method,
            topic: (r = n.params) == null ? void 0 : r.topic
          }, "relayer.request - publishing...");
          const a = `${o}:${((i = n.params) == null ? void 0 : i.tag) || ""}`;
          this.requestsInFlight.push(a);
          const c = await this.provider.request(n);
          return this.requestsInFlight = this.requestsInFlight.filter((l) => l !== a), c;
        } catch (a) {
          throw this.logger.debug(`Failed to Publish Request: ${o}`), a;
        }
      }), Ne(this, "resetPingTimeout", () => {
        fa() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var n, r, i, o;
          try {
            this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o = (i = (r = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : r.socket) == null ? void 0 : i.terminate) == null || o.call(i);
          } catch (a) {
            this.logger.warn(a, a == null ? void 0 : a.message);
          }
        }, this.heartBeatTimeout));
      }), Ne(this, "onPayloadHandler", (n) => {
        this.onProviderPayload(n), this.resetPingTimeout();
      }), Ne(this, "onConnectHandler", () => {
        this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(He.connect);
      }), Ne(this, "onDisconnectHandler", () => {
        this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
      }), Ne(this, "onProviderErrorHandler", (n) => {
        this.logger.fatal(`Fatal socket error: ${n.message}`), this.events.emit(He.error, n), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
      }), Ne(this, "registerProviderListeners", () => {
        this.provider.on(Jt.payload, this.onPayloadHandler), this.provider.on(Jt.connect, this.onConnectHandler), this.provider.on(Jt.disconnect, this.onDisconnectHandler), this.provider.on(Jt.error, this.onProviderErrorHandler);
      }), this.core = e.core, this.logger = ov({
        logger: (s = e.logger) != null ? s : yv,
        name: this.name
      }), this.messages = new IA(this.logger, e.core), this.subscriber = new MA(this, this.logger), this.publisher = new OA(this, this.logger), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Rg, wb() ? this.packageName = vh() : yb() && (this.bundleId = vh()), this.provider = {};
    }
    async init() {
      this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
        this.messages.init(),
        this.subscriber.init()
      ]), this.initialized = true, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
    }
    get context() {
      return Zt(this.logger);
    }
    get connected() {
      var e, s, n;
      return ((n = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : n.readyState) === 1 || false;
    }
    get connecting() {
      var e, s, n;
      return ((n = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : n.readyState) === 0 || this.connectPromise !== void 0 || false;
    }
    async publish(e, s, n) {
      this.isInitialized(), await this.publisher.publish(e, s, n), await this.recordMessageEvent({
        topic: e,
        message: s,
        publishedAt: Date.now(),
        transportType: Ue.relay
      }, ta.outbound);
    }
    async publishCustom(e) {
      this.isInitialized(), await this.publisher.publishCustom(e);
    }
    async subscribe(e, s) {
      var n, r, i;
      this.isInitialized(), (!(s != null && s.transportType) || (s == null ? void 0 : s.transportType) === "relay") && await this.toEstablishConnection();
      const o = typeof ((n = s == null ? void 0 : s.internal) == null ? void 0 : n.throwOnFailedPublish) > "u" ? true : (r = s == null ? void 0 : s.internal) == null ? void 0 : r.throwOnFailedPublish;
      let a = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", c;
      const l = (d) => {
        d.topic === e && (this.subscriber.off(jt.created, l), c());
      };
      return await Promise.all([
        new Promise((d) => {
          c = d, this.subscriber.on(jt.created, l);
        }),
        new Promise(async (d, h) => {
          a = await this.subscriber.subscribe(e, uu({
            internal: {
              throwOnFailedPublish: o
            }
          }, s)).catch((u) => {
            o && h(u);
          }) || a, d();
        })
      ]), a;
    }
    async unsubscribe(e, s) {
      this.isInitialized(), await this.subscriber.unsubscribe(e, s);
    }
    on(e, s) {
      this.events.on(e, s);
    }
    once(e, s) {
      this.events.once(e, s);
    }
    off(e, s) {
      this.events.off(e, s);
    }
    removeListener(e, s) {
      this.events.removeListener(e, s);
    }
    async transportDisconnect() {
      this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Bs(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
      this.transportExplicitlyClosed = true, await this.transportDisconnect();
    }
    async transportOpen(e) {
      if (!this.subscriber.hasAnyTopics) {
        this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
        return;
      }
      if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (s, n) => {
        await this.connect(e).then(s).catch(n).finally(() => {
          this.connectPromise = void 0;
        });
      }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
    }
    async restartTransport(e) {
      this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
      if (!await Xh()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    async handleBatchMessageEvents(e) {
      if ((e == null ? void 0 : e.length) === 0) {
        this.logger.trace("Batch message events is empty. Ignoring...");
        return;
      }
      const s = e.sort((n, r) => n.publishedAt - r.publishedAt);
      this.logger.debug(`Batch of ${s.length} message events sorted`);
      for (const n of s) try {
        await this.onMessageEvent(n);
      } catch (r) {
        this.logger.warn(r, "Error while processing batch message event: " + (r == null ? void 0 : r.message));
      }
      this.logger.trace(`Batch of ${s.length} message events processed`);
    }
    async onLinkMessageEvent(e, s) {
      const { topic: n } = e;
      if (!s.sessionExists) {
        const r = Vi(z.FIVE_MINUTES), i = {
          topic: n,
          expiry: r,
          relay: {
            protocol: "irn"
          },
          active: false
        };
        await this.core.pairing.pairings.set(n, i);
      }
      this.events.emit(He.message, e), await this.recordMessageEvent(e, ta.inbound);
    }
    async connect(e) {
      await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
      let s = 1;
      for (; s < 6; ) {
        try {
          if (this.transportExplicitlyClosed) break;
          this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${s}...`), await this.createProvider(), await new Promise(async (n, r) => {
            const i = () => {
              r(new Error("Connection interrupted while trying to connect"));
            };
            this.provider.once(Jt.disconnect, i), await Bs(new Promise((o, a) => {
              this.provider.connect().then(o).catch(a);
            }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
              r(o);
            }).finally(() => {
              this.provider.off(Jt.disconnect, i), clearTimeout(this.reconnectTimeout);
            }), await new Promise(async (o, a) => {
              const c = () => {
                r(new Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.once(Jt.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
                this.provider.off(Jt.disconnect, c);
              });
            }), this.hasExperiencedNetworkDisruption = false, n();
          });
        } catch (n) {
          await this.subscriber.stop();
          const r = n;
          this.logger.warn({}, r.message), this.hasExperiencedNetworkDisruption = true;
        } finally {
          this.connectionAttemptInProgress = false;
        }
        if (this.connected) {
          this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${s}`);
          break;
        }
        await new Promise((n) => setTimeout(n, z.toMiliseconds(s * 1))), s++;
      }
    }
    startPingTimeout() {
      var e, s, n, r, i;
      if (fa()) try {
        (s = (e = this.provider) == null ? void 0 : e.connection) != null && s.socket && ((i = (r = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : r.socket) == null || i.on("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (o) {
        this.logger.warn(o, o == null ? void 0 : o.message);
      }
    }
    async createProvider() {
      this.provider.connection && this.unregisterProviderListeners();
      const e = await this.core.crypto.signJWT(this.relayUrl);
      this.provider = new dd(new Qw(Ab({
        sdkVersion: Tl,
        protocol: this.protocol,
        version: this.version,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
        auth: e,
        useOnCloseEvent: true,
        bundleId: this.bundleId,
        packageName: this.packageName
      }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e, s) {
      const { topic: n, message: r } = e;
      await this.messages.set(n, r, s);
    }
    async shouldIgnoreMessageEvent(e) {
      const { topic: s, message: n } = e;
      if (!n || n.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${n}`), true;
      if (!await this.subscriber.isKnownTopic(s)) return this.logger.warn(`Ignoring message for unknown topic ${s}`), true;
      const r = this.messages.has(s, n);
      return r && this.logger.warn(`Ignoring duplicate message: ${n}`), r;
    }
    async onProviderPayload(e) {
      if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
        type: "payload",
        direction: "incoming",
        payload: e
      }), hd(e)) {
        if (!e.method.endsWith(Ev)) return;
        const s = e.params, { topic: n, message: r, publishedAt: i, attestation: o } = s.data, a = {
          topic: n,
          message: r,
          publishedAt: i,
          transportType: Ue.relay,
          attestation: o
        };
        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(uu({
          type: "event",
          event: s.id
        }, a)), this.events.emit(s.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
      } else ud(e) && this.events.emit(He.message_ack, e);
    }
    async onMessageEvent(e) {
      await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, ta.inbound), this.events.emit(He.message, e));
    }
    async acknowledgePayload(e) {
      const s = Ji(e.id, true);
      await this.provider.connection.send(s);
    }
    unregisterProviderListeners() {
      this.provider.off(Jt.payload, this.onPayloadHandler), this.provider.off(Jt.connect, this.onConnectHandler), this.provider.off(Jt.disconnect, this.onDisconnectHandler), this.provider.off(Jt.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
      let e = await Xh();
      sv(async (s) => {
        e !== s && (e = s, s ? await this.transportOpen().catch((n) => this.logger.error(n, n == null ? void 0 : n.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
      }), this.core.heartbeat.on(gi.pulse, async () => {
        if (!this.transportExplicitlyClosed && !this.connected && iv()) try {
          await this.confirmOnlineStateOrThrow(), await this.transportOpen();
        } catch (s) {
          this.logger.warn(s, s == null ? void 0 : s.message);
        }
      });
    }
    async onProviderDisconnect() {
      clearTimeout(this.pingTimeout), this.events.emit(He.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
        await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
      }, z.toMiliseconds(vv)))));
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    async toEstablishConnection() {
      if (await this.confirmOnlineStateOrThrow(), !this.connected) {
        if (this.connectPromise) {
          await this.connectPromise;
          return;
        }
        await this.connect();
      }
    }
  };
  function HA(t, e) {
    return t === e || Number.isNaN(t) && Number.isNaN(e);
  }
  function fu(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function pu(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const VA = "[object RegExp]", zA = "[object String]", KA = "[object Number]", GA = "[object Boolean]", gu = "[object Arguments]", YA = "[object Symbol]", ZA = "[object Date]", JA = "[object Map]", XA = "[object Set]", QA = "[object Array]", eI = "[object Function]", tI = "[object ArrayBuffer]", Ic = "[object Object]", sI = "[object Error]", nI = "[object DataView]", rI = "[object Uint8Array]", iI = "[object Uint8ClampedArray]", oI = "[object Uint16Array]", aI = "[object Uint32Array]", cI = "[object BigUint64Array]", lI = "[object Int8Array]", dI = "[object Int16Array]", hI = "[object Int32Array]", uI = "[object BigInt64Array]", fI = "[object Float32Array]", pI = "[object Float64Array]";
  function gI() {
  }
  function mu(t) {
    if (!t || typeof t != "object") return false;
    const e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : false;
  }
  function mI(t, e, s) {
    return Mi(t, e, void 0, void 0, void 0, void 0, s);
  }
  function Mi(t, e, s, n, r, i, o) {
    const a = o(t, e, s, n, r, i);
    if (a !== void 0) return a;
    if (typeof t == typeof e) switch (typeof t) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return t === e;
      case "number":
        return t === e || Object.is(t, e);
      case "function":
        return t === e;
      case "object":
        return Gi(t, e, i, o);
    }
    return Gi(t, e, i, o);
  }
  function Gi(t, e, s, n) {
    if (Object.is(t, e)) return true;
    let r = pu(t), i = pu(e);
    if (r === gu && (r = Ic), i === gu && (i = Ic), r !== i) return false;
    switch (r) {
      case zA:
        return t.toString() === e.toString();
      case KA: {
        const c = t.valueOf(), l = e.valueOf();
        return HA(c, l);
      }
      case GA:
      case ZA:
      case YA:
        return Object.is(t.valueOf(), e.valueOf());
      case VA:
        return t.source === e.source && t.flags === e.flags;
      case eI:
        return t === e;
    }
    s = s ?? /* @__PURE__ */ new Map();
    const o = s.get(t), a = s.get(e);
    if (o != null && a != null) return o === e;
    s.set(t, e), s.set(e, t);
    try {
      switch (r) {
        case JA: {
          if (t.size !== e.size) return false;
          for (const [c, l] of t.entries()) if (!e.has(c) || !Mi(l, e.get(c), c, t, e, s, n)) return false;
          return true;
        }
        case XA: {
          if (t.size !== e.size) return false;
          const c = Array.from(t.values()), l = Array.from(e.values());
          for (let d = 0; d < c.length; d++) {
            const h = c[d], u = l.findIndex((f) => Mi(h, f, void 0, t, e, s, n));
            if (u === -1) return false;
            l.splice(u, 1);
          }
          return true;
        }
        case QA:
        case rI:
        case iI:
        case oI:
        case aI:
        case cI:
        case lI:
        case dI:
        case hI:
        case uI:
        case fI:
        case pI: {
          if (typeof Ae < "u" && Ae.isBuffer(t) !== Ae.isBuffer(e) || t.length !== e.length) return false;
          for (let c = 0; c < t.length; c++) if (!Mi(t[c], e[c], c, t, e, s, n)) return false;
          return true;
        }
        case tI:
          return t.byteLength !== e.byteLength ? false : Gi(new Uint8Array(t), new Uint8Array(e), s, n);
        case nI:
          return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? false : Gi(new Uint8Array(t), new Uint8Array(e), s, n);
        case sI:
          return t.name === e.name && t.message === e.message;
        case Ic: {
          if (!(Gi(t.constructor, e.constructor, s, n) || mu(t) && mu(e))) return false;
          const c = [
            ...Object.keys(t),
            ...fu(t)
          ], l = [
            ...Object.keys(e),
            ...fu(e)
          ];
          if (c.length !== l.length) return false;
          for (let d = 0; d < c.length; d++) {
            const h = c[d], u = t[h];
            if (!Object.hasOwn(e, h)) return false;
            const f = e[h];
            if (!Mi(u, f, h, t, e, s, n)) return false;
          }
          return true;
        }
        default:
          return false;
      }
    } finally {
      s.delete(t), s.delete(e);
    }
  }
  function wI(t, e) {
    return mI(t, e, gI);
  }
  var yI = Object.defineProperty, wu = Object.getOwnPropertySymbols, bI = Object.prototype.hasOwnProperty, EI = Object.prototype.propertyIsEnumerable, Ul = (t, e, s) => e in t ? yI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, yu = (t, e) => {
    for (var s in e || (e = {})) bI.call(e, s) && Ul(t, s, e[s]);
    if (wu) for (var s of wu(e)) EI.call(e, s) && Ul(t, s, e[s]);
    return t;
  }, Ot = (t, e, s) => Ul(t, typeof e != "symbol" ? e + "" : e, s);
  let Rr = class extends S0 {
    constructor(e, s, n, r = qs, i = void 0) {
      super(e, s, n, r), this.core = e, this.logger = s, this.name = n, Ot(this, "map", /* @__PURE__ */ new Map()), Ot(this, "version", Cv), Ot(this, "cached", []), Ot(this, "initialized", false), Ot(this, "getKey"), Ot(this, "storagePrefix", qs), Ot(this, "recentlyDeleted", []), Ot(this, "recentlyDeletedLimit", 200), Ot(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
          this.getKey && o !== null && !Li(o) ? this.map.set(this.getKey(o), o) : JE(o) ? this.map.set(o.id, o) : XE(o) && this.map.set(o.topic, o);
        }), this.cached = [], this.initialized = true);
      }), Ot(this, "set", async (o, a) => {
        this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
          type: "method",
          method: "set",
          key: o,
          value: a
        }), this.map.set(o, a), await this.persist());
      }), Ot(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
        type: "method",
        method: "get",
        key: o
      }), this.getData(o))), Ot(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => wI(a[c], o[c]))) : this.values)), Ot(this, "update", async (o, a) => {
        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
          type: "method",
          method: "update",
          key: o,
          update: a
        });
        const c = yu(yu({}, this.getData(o)), a);
        this.map.set(o, c), await this.persist();
      }), Ot(this, "delete", async (o, a) => {
        this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
          type: "method",
          method: "delete",
          key: o,
          reason: a
        }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
      }), this.logger = Yt(s, this.name), this.storagePrefix = r, this.getKey = i;
    }
    get context() {
      return Zt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.map.size;
    }
    get keys() {
      return Array.from(this.map.keys());
    }
    get values() {
      return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
      this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
      const s = this.map.get(e);
      if (!s) {
        if (this.recentlyDeleted.includes(e)) {
          const { message: r } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
          throw this.logger.error(r), new Error(r);
        }
        const { message: n } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.error(n), new Error(n);
      }
      return s;
    }
    async persist() {
      await this.setDataStore(this.values);
    }
    async restore() {
      try {
        const e = await this.getDataStore();
        if (typeof e > "u" || !e.length) return;
        if (this.map.size) {
          const { message: s } = xe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var vI = Object.defineProperty, CI = (t, e, s) => e in t ? vI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ye = (t, e, s) => CI(t, typeof e != "symbol" ? e + "" : e, s);
  let AI = class {
    constructor(e, s) {
      this.core = e, this.logger = s, ye(this, "name", Sv), ye(this, "version", _v), ye(this, "events", new fd()), ye(this, "pairings"), ye(this, "initialized", false), ye(this, "storagePrefix", qs), ye(this, "ignoredPayloadTypes", [
        mi
      ]), ye(this, "registeredMethods", []), ye(this, "init", async () => {
        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
      }), ye(this, "register", ({ methods: n }) => {
        this.isInitialized(), this.registeredMethods = [
          .../* @__PURE__ */ new Set([
            ...this.registeredMethods,
            ...n
          ])
        ];
      }), ye(this, "create", async (n) => {
        this.isInitialized();
        const r = Sl(), i = await this.core.crypto.setSymKey(r), o = Vi(z.FIVE_MINUTES), a = {
          protocol: Pg
        }, c = {
          topic: i,
          expiry: o,
          relay: a,
          active: false,
          methods: n == null ? void 0 : n.methods
        }, l = Jh({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: i,
          symKey: r,
          relay: a,
          expiryTimestamp: o,
          methods: n == null ? void 0 : n.methods
        });
        return this.events.emit(or.create, c), this.core.expirer.set(i, o), await this.pairings.set(i, c), await this.core.relayer.subscribe(i, {
          transportType: n == null ? void 0 : n.transportType,
          internal: n == null ? void 0 : n.internal
        }), {
          topic: i,
          uri: l
        };
      }), ye(this, "pair", async (n) => {
        this.isInitialized();
        const r = this.core.eventClient.createEvent({
          properties: {
            topic: n == null ? void 0 : n.uri,
            trace: [
              Ps.pairing_started
            ]
          }
        });
        this.isValidPair(n, r);
        const { topic: i, symKey: o, relay: a, expiryTimestamp: c, methods: l } = Zh(n.uri);
        r.props.properties.topic = i, r.addTrace(Ps.pairing_uri_validation_success), r.addTrace(Ps.pairing_uri_not_expired);
        let d;
        if (this.pairings.keys.includes(i)) {
          if (d = this.pairings.get(i), r.addTrace(Ps.existing_pairing), d.active) throw r.setError(Ys.active_pairing_already_exists), new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
          r.addTrace(Ps.pairing_not_expired);
        }
        const h = c || Vi(z.FIVE_MINUTES), u = {
          topic: i,
          relay: a,
          expiry: h,
          active: false,
          methods: l
        };
        this.core.expirer.set(i, h), await this.pairings.set(i, u), r.addTrace(Ps.store_new_pairing), n.activatePairing && await this.activate({
          topic: i
        }), this.events.emit(or.create, u), r.addTrace(Ps.emit_inactive_pairing), this.core.crypto.keychain.has(i) || await this.core.crypto.setSymKey(o, i), r.addTrace(Ps.subscribing_pairing_topic);
        try {
          await this.core.relayer.confirmOnlineStateOrThrow();
        } catch {
          r.setError(Ys.no_internet_connection);
        }
        try {
          await this.core.relayer.subscribe(i, {
            relay: a
          });
        } catch (f) {
          throw r.setError(Ys.subscribe_pairing_topic_failure), f;
        }
        return r.addTrace(Ps.subscribe_pairing_topic_success), u;
      }), ye(this, "activate", async ({ topic: n }) => {
        this.isInitialized();
        const r = Vi(z.FIVE_MINUTES);
        this.core.expirer.set(n, r), await this.pairings.update(n, {
          active: true,
          expiry: r
        });
      }), ye(this, "ping", async (n) => {
        this.isInitialized(), await this.isValidPing(n), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
        const { topic: r } = n;
        if (this.pairings.keys.includes(r)) {
          const i = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = Ib();
          this.events.once(dc("pairing_ping", i), ({ error: l }) => {
            l ? c(l) : a();
          }), await o();
        }
      }), ye(this, "updateExpiry", async ({ topic: n, expiry: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          expiry: r
        });
      }), ye(this, "updateMetadata", async ({ topic: n, metadata: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          peerMetadata: r
        });
      }), ye(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), ye(this, "disconnect", async (n) => {
        this.isInitialized(), await this.isValidDisconnect(n);
        const { topic: r } = n;
        this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", Di("USER_DISCONNECTED")), await this.deletePairing(r));
      }), ye(this, "formatUriFromPairing", (n) => {
        this.isInitialized();
        const { topic: r, relay: i, expiry: o, methods: a } = n, c = this.core.crypto.keychain.get(r);
        return Jh({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: r,
          symKey: c,
          relay: i,
          expiryTimestamp: o,
          methods: a
        });
      }), ye(this, "sendRequest", async (n, r, i) => {
        const o = $s(r, i), a = await this.core.crypto.encode(n, o), c = Ii[r].req;
        return this.core.history.set(n, o), this.core.relayer.publish(n, a, c), o.id;
      }), ye(this, "sendResult", async (n, r, i) => {
        const o = Ji(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = Ii[c].res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), ye(this, "sendError", async (n, r, i) => {
        const o = hp(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = Ii[c] ? Ii[c].res : Ii.unregistered_method.res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), ye(this, "deletePairing", async (n, r) => {
        await this.core.relayer.unsubscribe(n), await Promise.all([
          this.pairings.delete(n, Di("USER_DISCONNECTED")),
          this.core.crypto.deleteSymKey(n),
          r ? Promise.resolve() : this.core.expirer.del(n)
        ]);
      }), ye(this, "cleanup", async () => {
        const n = this.pairings.getAll().filter((r) => Ch(r.expiry));
        await Promise.all(n.map((r) => this.deletePairing(r.topic)));
      }), ye(this, "onRelayEventRequest", async (n) => {
        const { topic: r, payload: i } = n;
        switch (i.method) {
          case "wc_pairingPing":
            return await this.onPairingPingRequest(r, i);
          case "wc_pairingDelete":
            return await this.onPairingDeleteRequest(r, i);
          default:
            return await this.onUnknownRpcMethodRequest(r, i);
        }
      }), ye(this, "onRelayEventResponse", async (n) => {
        const { topic: r, payload: i } = n, o = (await this.core.history.get(r, i.id)).request.method;
        switch (o) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(r, i);
          default:
            return this.onUnknownRpcMethodResponse(o);
        }
      }), ye(this, "onPairingPingRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidPing({
            topic: n
          }), await this.sendResult(i, n, true), this.events.emit(or.ping, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), ye(this, "onPairingPingResponse", (n, r) => {
        const { id: i } = r;
        setTimeout(() => {
          Ks(r) ? this.events.emit(dc("pairing_ping", i), {}) : Rs(r) && this.events.emit(dc("pairing_ping", i), {
            error: r.error
          });
        }, 500);
      }), ye(this, "onPairingDeleteRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidDisconnect({
            topic: n
          }), await this.deletePairing(n), this.events.emit(or.delete, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), ye(this, "onUnknownRpcMethodRequest", async (n, r) => {
        const { id: i, method: o } = r;
        try {
          if (this.registeredMethods.includes(o)) return;
          const a = Di("WC_METHOD_UNSUPPORTED", o);
          await this.sendError(i, n, a), this.logger.error(a);
        } catch (a) {
          await this.sendError(i, n, a), this.logger.error(a);
        }
      }), ye(this, "onUnknownRpcMethodResponse", (n) => {
        this.registeredMethods.includes(n) || this.logger.error(Di("WC_METHOD_UNSUPPORTED", n));
      }), ye(this, "isValidPair", (n, r) => {
        var i;
        if (!vc(n)) {
          const { message: a } = xe("MISSING_OR_INVALID", `pair() params: ${n}`);
          throw r.setError(Ys.malformed_pairing_uri), new Error(a);
        }
        if (!ZE(n.uri)) {
          const { message: a } = xe("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
          throw r.setError(Ys.malformed_pairing_uri), new Error(a);
        }
        const o = Zh(n == null ? void 0 : n.uri);
        if (!((i = o == null ? void 0 : o.relay) != null && i.protocol)) {
          const { message: a } = xe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
          throw r.setError(Ys.malformed_pairing_uri), new Error(a);
        }
        if (!(o != null && o.symKey)) {
          const { message: a } = xe("MISSING_OR_INVALID", "pair() uri#symKey");
          throw r.setError(Ys.malformed_pairing_uri), new Error(a);
        }
        if (o != null && o.expiryTimestamp && z.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
          r.setError(Ys.pairing_expired);
          const { message: a } = xe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
          throw new Error(a);
        }
      }), ye(this, "isValidPing", async (n) => {
        if (!vc(n)) {
          const { message: i } = xe("MISSING_OR_INVALID", `ping() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), ye(this, "isValidDisconnect", async (n) => {
        if (!vc(n)) {
          const { message: i } = xe("MISSING_OR_INVALID", `disconnect() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), ye(this, "isValidPairingTopic", async (n) => {
        if (!xg(n)) {
          const { message: r } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
          throw new Error(r);
        }
        if (!this.pairings.keys.includes(n)) {
          const { message: r } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
          throw new Error(r);
        }
        if (Ch(this.pairings.get(n).expiry)) {
          await this.deletePairing(n);
          const { message: r } = xe("EXPIRED", `pairing topic: ${n}`);
          throw new Error(r);
        }
      }), this.core = e, this.logger = Yt(s, this.name), this.pairings = new Rr(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
      return Zt(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(He.message, async (e) => {
        const { topic: s, message: n, transportType: r } = e;
        if (this.pairings.keys.includes(s) && r !== Ue.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))) try {
          const i = await this.core.crypto.decode(s, n);
          hd(i) ? (this.core.history.set(s, i), await this.onRelayEventRequest({
            topic: s,
            payload: i
          })) : ud(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
            topic: s,
            payload: i
          }), this.core.history.delete(s, i.id)), await this.core.relayer.messages.ack(s, n);
        } catch (i) {
          this.logger.error(i);
        }
      });
    }
    registerExpirerEvents() {
      this.core.expirer.on(ns.expired, async (e) => {
        const { topic: s } = _b(e.target);
        s && this.pairings.keys.includes(s) && (await this.deletePairing(s, true), this.events.emit(or.expire, {
          topic: s
        }));
      });
    }
  };
  var II = Object.defineProperty, NI = (t, e, s) => e in t ? II(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, tt = (t, e, s) => NI(t, typeof e != "symbol" ? e + "" : e, s);
  let SI = class extends C0 {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, tt(this, "records", /* @__PURE__ */ new Map()), tt(this, "events", new _r.EventEmitter()), tt(this, "name", Tv), tt(this, "version", xv), tt(this, "cached", []), tt(this, "initialized", false), tt(this, "storagePrefix", qs), tt(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), tt(this, "set", (n, r, i) => {
        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
          type: "method",
          method: "set",
          topic: n,
          request: r,
          chainId: i
        }), this.records.has(r.id)) return;
        const o = {
          id: r.id,
          topic: n,
          request: {
            method: r.method,
            params: r.params || null
          },
          chainId: i,
          expiry: Vi(z.THIRTY_DAYS)
        };
        this.records.set(o.id, o), this.persist(), this.events.emit(ds.created, o);
      }), tt(this, "resolve", async (n) => {
        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
          type: "method",
          method: "update",
          response: n
        }), !this.records.has(n.id)) return;
        const r = await this.getRecord(n.id);
        typeof r.response > "u" && (r.response = Rs(n) ? {
          error: n.error
        } : {
          result: n.result
        }, this.records.set(r.id, r), this.persist(), this.events.emit(ds.updated, r));
      }), tt(this, "get", async (n, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
        type: "method",
        method: "get",
        topic: n,
        id: r
      }), await this.getRecord(r))), tt(this, "delete", (n, r) => {
        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
          type: "method",
          method: "delete",
          id: r
        }), this.values.forEach((i) => {
          if (i.topic === n) {
            if (typeof r < "u" && i.id !== r) return;
            this.records.delete(i.id), this.events.emit(ds.deleted, i);
          }
        }), this.persist();
      }), tt(this, "exists", async (n, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === n : false)), tt(this, "on", (n, r) => {
        this.events.on(n, r);
      }), tt(this, "once", (n, r) => {
        this.events.once(n, r);
      }), tt(this, "off", (n, r) => {
        this.events.off(n, r);
      }), tt(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = Yt(s, this.name);
    }
    get context() {
      return Zt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
      return this.records.size;
    }
    get keys() {
      return Array.from(this.records.keys());
    }
    get values() {
      return Array.from(this.records.values());
    }
    get pending() {
      const e = [];
      return this.values.forEach((s) => {
        if (typeof s.response < "u") return;
        const n = {
          topic: s.topic,
          request: $s(s.request.method, s.request.params, s.id),
          chainId: s.chainId
        };
        return e.push(n);
      }), e;
    }
    async setJsonRpcRecords(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
      this.isInitialized();
      const s = this.records.get(e);
      if (!s) {
        const { message: n } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(n);
      }
      return s;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(ds.sync);
    }
    async restore() {
      try {
        const e = await this.getJsonRpcRecords();
        if (typeof e > "u" || !e.length) return;
        if (this.records.size) {
          const { message: s } = xe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
      }
    }
    registerEventListeners() {
      this.events.on(ds.created, (e) => {
        const s = ds.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(ds.updated, (e) => {
        const s = ds.updated;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(ds.deleted, (e) => {
        const s = ds.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.core.heartbeat.on(gi.pulse, () => {
        this.cleanup();
      });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = false;
        this.records.forEach((s) => {
          z.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`), this.records.delete(s.id), this.events.emit(ds.deleted, s, false), e = true);
        }), e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var _I = Object.defineProperty, TI = (t, e, s) => e in t ? _I(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ut = (t, e, s) => TI(t, typeof e != "symbol" ? e + "" : e, s);
  let xI = class extends T0 {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, ut(this, "expirations", /* @__PURE__ */ new Map()), ut(this, "events", new _r.EventEmitter()), ut(this, "name", Ov), ut(this, "version", kv), ut(this, "cached", []), ut(this, "initialized", false), ut(this, "storagePrefix", qs), ut(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), ut(this, "has", (n) => {
        try {
          const r = this.formatTarget(n);
          return typeof this.getExpiration(r) < "u";
        } catch {
          return false;
        }
      }), ut(this, "set", (n, r) => {
        this.isInitialized();
        const i = this.formatTarget(n), o = {
          target: i,
          expiry: r
        };
        this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(ns.created, {
          target: i,
          expiration: o
        });
      }), ut(this, "get", (n) => {
        this.isInitialized();
        const r = this.formatTarget(n);
        return this.getExpiration(r);
      }), ut(this, "del", (n) => {
        if (this.isInitialized(), this.has(n)) {
          const r = this.formatTarget(n), i = this.getExpiration(r);
          this.expirations.delete(r), this.events.emit(ns.deleted, {
            target: r,
            expiration: i
          });
        }
      }), ut(this, "on", (n, r) => {
        this.events.on(n, r);
      }), ut(this, "once", (n, r) => {
        this.events.once(n, r);
      }), ut(this, "off", (n, r) => {
        this.events.off(n, r);
      }), ut(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = Yt(s, this.name);
    }
    get context() {
      return Zt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.expirations.size;
    }
    get keys() {
      return Array.from(this.expirations.keys());
    }
    get values() {
      return Array.from(this.expirations.values());
    }
    formatTarget(e) {
      if (typeof e == "string") return Nb(e);
      if (typeof e == "number") return Sb(e);
      const { message: s } = xe("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(s);
    }
    async setExpirations(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(ns.sync);
    }
    async restore() {
      try {
        const e = await this.getExpirations();
        if (typeof e > "u" || !e.length) return;
        if (this.expirations.size) {
          const { message: s } = xe("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(s), new Error(s);
        }
        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values
        });
      } catch (e) {
        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
      }
    }
    getExpiration(e) {
      const s = this.expirations.get(e);
      if (!s) {
        const { message: n } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.warn(n), new Error(n);
      }
      return s;
    }
    checkExpiry(e, s) {
      const { expiry: n } = s;
      z.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, s);
    }
    expire(e, s) {
      this.expirations.delete(e), this.events.emit(ns.expired, {
        target: e,
        expiration: s
      });
    }
    checkExpirations() {
      this.core.relayer.connected && this.expirations.forEach((e, s) => this.checkExpiry(s, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(gi.pulse, () => this.checkExpirations()), this.events.on(ns.created, (e) => {
        const s = ns.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(ns.expired, (e) => {
        const s = ns.expired;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(ns.deleted, (e) => {
        const s = ns.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = xe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var OI = Object.defineProperty, kI = (t, e, s) => e in t ? OI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, We = (t, e, s) => kI(t, typeof e != "symbol" ? e + "" : e, s);
  let PI = class extends x0 {
    constructor(e, s, n) {
      super(e, s, n), this.core = e, this.logger = s, this.store = n, We(this, "name", Pv), We(this, "abortController"), We(this, "isDevEnv"), We(this, "verifyUrlV3", $v), We(this, "storagePrefix", qs), We(this, "version", kg), We(this, "publicKey"), We(this, "fetchPromise"), We(this, "init", async () => {
        var r;
        this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && z.toMiliseconds((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
      }), We(this, "register", async (r) => {
        if (!po() || this.isDevEnv) return;
        const i = window.location.origin, { id: o, decryptedId: a } = r, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${i}&id=${o}&decryptedId=${a}`;
        try {
          const l = Gt.getDocument(), d = this.startAbortTimer(z.ONE_SECOND * 5), h = await new Promise((u, f) => {
            const g = () => {
              window.removeEventListener("message", m), l.body.removeChild(p), f("attestation aborted");
            };
            this.abortController.signal.addEventListener("abort", g);
            const p = l.createElement("iframe");
            p.src = c, p.style.display = "none", p.addEventListener("error", g, {
              signal: this.abortController.signal
            });
            const m = (T) => {
              if (T.data && typeof T.data == "string") try {
                const x = JSON.parse(T.data);
                if (x.type === "verify_attestation") {
                  if (il(x.attestation).payload.id !== o) return;
                  clearInterval(d), l.body.removeChild(p), this.abortController.signal.removeEventListener("abort", g), window.removeEventListener("message", m), u(x.attestation === null ? "" : x.attestation);
                }
              } catch (x) {
                this.logger.warn(x);
              }
            };
            l.body.appendChild(p), window.addEventListener("message", m, {
              signal: this.abortController.signal
            });
          });
          return this.logger.debug(h, "jwt attestation"), h;
        } catch (l) {
          this.logger.warn(l);
        }
        return "";
      }), We(this, "resolve", async (r) => {
        if (this.isDevEnv) return "";
        const { attestationId: i, hash: o, encryptedId: a } = r;
        if (i === "") {
          this.logger.debug("resolve: attestationId is empty, skipping");
          return;
        }
        if (i) {
          if (il(i).payload.id !== a) return;
          const l = await this.isValidJwtAttestation(i);
          if (l) {
            if (!l.isVerified) {
              this.logger.warn("resolve: jwt attestation: origin url not verified");
              return;
            }
            return l;
          }
        }
        if (!o) return;
        const c = this.getVerifyUrl(r == null ? void 0 : r.verifyUrl);
        return this.fetchAttestation(o, c);
      }), We(this, "fetchAttestation", async (r, i) => {
        this.logger.debug(`resolving attestation: ${r} from url: ${i}`);
        const o = this.startAbortTimer(z.ONE_SECOND * 5), a = await fetch(`${i}/attestation/${r}?v2Supported=true`, {
          signal: this.abortController.signal
        });
        return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
      }), We(this, "getVerifyUrl", (r) => {
        let i = r || Ki;
        return Uv.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${Ki}`), i = Ki), i;
      }), We(this, "fetchPublicKey", async () => {
        try {
          this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
          const r = this.startAbortTimer(z.FIVE_SECONDS), i = await fetch(`${this.verifyUrlV3}/public-key`, {
            signal: this.abortController.signal
          });
          return clearTimeout(r), await i.json();
        } catch (r) {
          this.logger.warn(r);
        }
      }), We(this, "persistPublicKey", async (r) => {
        this.logger.debug(r, "persisting public key to local storage"), await this.store.setItem(this.storeKey, r), this.publicKey = r;
      }), We(this, "removePublicKey", async () => {
        this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
      }), We(this, "isValidJwtAttestation", async (r) => {
        const i = await this.getPublicKey();
        try {
          if (i) return this.validateAttestation(r, i);
        } catch (a) {
          this.logger.error(a), this.logger.warn("error validating attestation");
        }
        const o = await this.fetchAndPersistPublicKey();
        try {
          if (o) return this.validateAttestation(r, o);
        } catch (a) {
          this.logger.error(a), this.logger.warn("error validating attestation");
        }
      }), We(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), We(this, "fetchAndPersistPublicKey", async () => {
        if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
        this.fetchPromise = new Promise(async (i) => {
          const o = await this.fetchPublicKey();
          o && (await this.persistPublicKey(o), i(o));
        });
        const r = await this.fetchPromise;
        return this.fetchPromise = void 0, r;
      }), We(this, "validateAttestation", (r, i) => {
        const o = DE(r, i.publicKey), a = {
          hasExpired: z.toMiliseconds(o.exp) < Date.now(),
          payload: o
        };
        if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
        return {
          origin: a.payload.origin,
          isScam: a.payload.isScam,
          isVerified: a.payload.isVerified
        };
      }), this.logger = Yt(s, this.name), this.abortController = new AbortController(), this.isDevEnv = Rp(), this.init();
    }
    get storeKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
      return Zt(this.logger);
    }
    startAbortTimer(e) {
      return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), z.toMiliseconds(e));
    }
  };
  var RI = Object.defineProperty, $I = (t, e, s) => e in t ? RI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, bu = (t, e, s) => $I(t, typeof e != "symbol" ? e + "" : e, s);
  let UI = class extends O0 {
    constructor(e, s) {
      super(e, s), this.projectId = e, this.logger = s, bu(this, "context", Bv), bu(this, "registerDeviceToken", async (n) => {
        const { clientId: r, token: i, notificationType: o, enableEncrypted: a = false } = n, c = `${Dv}/${this.projectId}/clients`;
        await fetch(c, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            client_id: r,
            type: o,
            token: i,
            always_raw: a
          })
        });
      }), this.logger = Yt(s, this.context);
    }
  };
  var BI = Object.defineProperty, Eu = Object.getOwnPropertySymbols, DI = Object.prototype.hasOwnProperty, LI = Object.prototype.propertyIsEnumerable, Bl = (t, e, s) => e in t ? BI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, _i = (t, e) => {
    for (var s in e || (e = {})) DI.call(e, s) && Bl(t, s, e[s]);
    if (Eu) for (var s of Eu(e)) LI.call(e, s) && Bl(t, s, e[s]);
    return t;
  }, Ze = (t, e, s) => Bl(t, typeof e != "symbol" ? e + "" : e, s);
  let MI = class extends k0 {
    constructor(e, s, n = true) {
      super(e, s, n), this.core = e, this.logger = s, Ze(this, "context", Mv), Ze(this, "storagePrefix", qs), Ze(this, "storageVersion", Lv), Ze(this, "events", /* @__PURE__ */ new Map()), Ze(this, "shouldPersist", false), Ze(this, "init", async () => {
        if (!Rp()) try {
          const r = {
            eventId: Ah(),
            timestamp: Date.now(),
            domain: this.getAppDomain(),
            props: {
              event: "INIT",
              type: "",
              properties: {
                client_id: await this.core.crypto.getClientId(),
                user_agent: kp(this.core.relayer.protocol, this.core.relayer.version, Tl)
              }
            }
          };
          await this.sendEvent([
            r
          ]);
        } catch (r) {
          this.logger.warn(r);
        }
      }), Ze(this, "createEvent", (r) => {
        const { event: i = "ERROR", type: o = "", properties: { topic: a, trace: c } } = r, l = Ah(), d = this.core.projectId || "", h = Date.now(), u = _i({
          eventId: l,
          timestamp: h,
          props: {
            event: i,
            type: o,
            properties: {
              topic: a,
              trace: c
            }
          },
          bundleId: d,
          domain: this.getAppDomain()
        }, this.setMethods(l));
        return this.telemetryEnabled && (this.events.set(l, u), this.shouldPersist = true), u;
      }), Ze(this, "getEvent", (r) => {
        const { eventId: i, topic: o } = r;
        if (i) return this.events.get(i);
        const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
        if (a) return _i(_i({}, a), this.setMethods(a.eventId));
      }), Ze(this, "deleteEvent", (r) => {
        const { eventId: i } = r;
        this.events.delete(i), this.shouldPersist = true;
      }), Ze(this, "setEventListeners", () => {
        this.core.heartbeat.on(gi.pulse, async () => {
          this.shouldPersist && await this.persist(), this.events.forEach((r) => {
            z.fromMiliseconds(Date.now()) - z.fromMiliseconds(r.timestamp) > Fv && (this.events.delete(r.eventId), this.shouldPersist = true);
          });
        });
      }), Ze(this, "setMethods", (r) => ({
        addTrace: (i) => this.addTrace(r, i),
        setError: (i) => this.setError(r, i)
      })), Ze(this, "addTrace", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.properties.trace.push(i), this.events.set(r, o), this.shouldPersist = true);
      }), Ze(this, "setError", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.type = i, o.timestamp = Date.now(), this.events.set(r, o), this.shouldPersist = true);
      }), Ze(this, "persist", async () => {
        await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
      }), Ze(this, "restore", async () => {
        try {
          const r = await this.core.storage.getItem(this.storageKey) || [];
          if (!r.length) return;
          r.forEach((i) => {
            this.events.set(i.eventId, _i(_i({}, i), this.setMethods(i.eventId)));
          });
        } catch (r) {
          this.logger.warn(r);
        }
      }), Ze(this, "submit", async () => {
        if (!this.telemetryEnabled || this.events.size === 0) return;
        const r = [];
        for (const [i, o] of this.events) o.props.type && r.push(o);
        if (r.length !== 0) try {
          if ((await this.sendEvent(r)).ok) for (const i of r) this.events.delete(i.eventId), this.shouldPersist = true;
        } catch (i) {
          this.logger.warn(i);
        }
      }), Ze(this, "sendEvent", async (r) => {
        const i = this.getAppDomain() ? "" : "&sp=desktop";
        return await fetch(`${qv}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Tl}${i}`, {
          method: "POST",
          body: JSON.stringify(r)
        });
      }), Ze(this, "getAppDomain", () => Eb().url), this.logger = Yt(s, this.context), this.telemetryEnabled = n, n ? this.restore().then(async () => {
        await this.submit(), this.setEventListeners();
      }) : this.persist();
    }
    get storageKey() {
      return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
  };
  var FI = Object.defineProperty, vu = Object.getOwnPropertySymbols, qI = Object.prototype.hasOwnProperty, jI = Object.prototype.propertyIsEnumerable, Dl = (t, e, s) => e in t ? FI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Cu = (t, e) => {
    for (var s in e || (e = {})) qI.call(e, s) && Dl(t, s, e[s]);
    if (vu) for (var s of vu(e)) jI.call(e, s) && Dl(t, s, e[s]);
    return t;
  }, Pe = (t, e, s) => Dl(t, typeof e != "symbol" ? e + "" : e, s);
  let WI = class zg extends y0 {
    constructor(e) {
      var s;
      super(e), Pe(this, "protocol", Og), Pe(this, "version", kg), Pe(this, "name", _l), Pe(this, "relayUrl"), Pe(this, "projectId"), Pe(this, "customStoragePrefix"), Pe(this, "events", new _r.EventEmitter()), Pe(this, "logger"), Pe(this, "heartbeat"), Pe(this, "relayer"), Pe(this, "crypto"), Pe(this, "storage"), Pe(this, "history"), Pe(this, "expirer"), Pe(this, "pairing"), Pe(this, "verify"), Pe(this, "echoClient"), Pe(this, "linkModeSupportedApps"), Pe(this, "eventClient"), Pe(this, "initialized", false), Pe(this, "logChunkController"), Pe(this, "on", (a, c) => this.events.on(a, c)), Pe(this, "once", (a, c) => this.events.once(a, c)), Pe(this, "off", (a, c) => this.events.off(a, c)), Pe(this, "removeListener", (a, c) => this.events.removeListener(a, c)), Pe(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: l }) => {
        if (!a || !c) return;
        const d = {
          topic: a,
          message: c,
          publishedAt: Date.now(),
          transportType: Ue.link_mode
        };
        this.relayer.onLinkMessageEvent(d, {
          sessionExists: l
        });
      });
      const n = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
      if (n) try {
        return this.customStoragePrefix = n.customStoragePrefix, this.logger = n.logger, this.heartbeat = n.heartbeat, this.crypto = n.crypto, this.history = n.history, this.expirer = n.expirer, this.storage = n.storage, this.relayer = n.relayer, this.pairing = n.pairing, this.verify = n.verify, this.echoClient = n.echoClient, this.linkModeSupportedApps = n.linkModeSupportedApps, this.eventClient = n.eventClient, this.initialized = n.initialized, this.logChunkController = n.logChunkController, n;
      } catch (a) {
        console.warn("Failed to copy global core", a);
      }
      this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Rg, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
      const r = dp({
        level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : cv.logger,
        name: _l
      }), { logger: i, chunkLoggerController: o } = Pa({
        opts: r,
        maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes,
        loggerOverride: e == null ? void 0 : e.logger
      });
      this.logChunkController = o, (s = this.logChunkController) != null && s.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
        var a, c;
        (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
          clientId: await this.crypto.getClientId()
        }));
      }), this.logger = Yt(i, this.name), this.heartbeat = new Jw(), this.crypto = new mA(this, this.logger, e == null ? void 0 : e.keychain), this.history = new SI(this, this.logger), this.expirer = new xI(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Xw(Cu(Cu({}, lv), e == null ? void 0 : e.storageOptions)), this.relayer = new WA({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId
      }), this.pairing = new AI(this, this.logger), this.verify = new PI(this, this.logger, this.storage), this.echoClient = new UI(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new MI(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
    }
    static async init(e) {
      const s = new zg(e);
      await s.initialize();
      const n = await s.crypto.getClientId();
      return await s.storage.setItem(Av, n), s;
    }
    get context() {
      return Zt(this.logger);
    }
    async start() {
      this.initialized || await this.initialize();
    }
    async getLogsBlob() {
      var e;
      return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
        clientId: await this.crypto.getClientId()
      });
    }
    async addLinkModeSupportedApp(e) {
      this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(eu, this.linkModeSupportedApps));
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(eu) || [], this.initialized = true, this.logger.info("Core Initialization Success");
      } catch (e) {
        throw this.logger.warn(e, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e.message), e;
      }
    }
    getGlobalCore(e = "") {
      try {
        if (this.isGlobalCoreDisabled()) return;
        const s = `_walletConnectCore_${e}`, n = `${s}_count`;
        return globalThis[n] = (globalThis[n] || 0) + 1, globalThis[n] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[n]} times.`), globalThis[s];
      } catch (s) {
        console.warn("Failed to get global WalletConnect core", s);
        return;
      }
    }
    setGlobalCore(e) {
      var s;
      try {
        if (this.isGlobalCoreDisabled()) return;
        const n = `_walletConnectCore_${((s = e.opts) == null ? void 0 : s.customStoragePrefix) || ""}`;
        globalThis[n] = e;
      } catch (n) {
        console.warn("Failed to set global WalletConnect core", n);
      }
    }
    isGlobalCoreDisabled() {
      try {
        return typeof as < "u" && av.DISABLE_GLOBAL_CORE === "true";
      } catch {
        return true;
      }
    }
  };
  const HI = WI;
  var VI = Object.defineProperty, zI = (t, e, s) => e in t ? VI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Au = (t, e, s) => zI(t, typeof e != "symbol" ? e + "" : e, s);
  let KI = class {
    constructor(e) {
      this.opts = e, Au(this, "protocol", "wc"), Au(this, "version", 2);
    }
  }, GI = class {
    constructor(e) {
      this.client = e;
    }
  };
  const YI = "0.1.1";
  function ZI() {
    return YI;
  }
  class Le extends Error {
    constructor(e, s = {}) {
      const n = (() => {
        var _a2;
        if (s.cause instanceof Le) {
          if (s.cause.details) return s.cause.details;
          if (s.cause.shortMessage) return s.cause.shortMessage;
        }
        return s.cause && "details" in s.cause && typeof s.cause.details == "string" ? s.cause.details : ((_a2 = s.cause) == null ? void 0 : _a2.message) ? s.cause.message : s.details;
      })(), r = s.cause instanceof Le && s.cause.docsPath || s.docsPath, o = `https://oxlib.sh${r ?? ""}`, a = [
        e || "An error occurred.",
        ...s.metaMessages ? [
          "",
          ...s.metaMessages
        ] : [],
        ...n || r ? [
          "",
          n ? `Details: ${n}` : void 0,
          r ? `See: ${o}` : void 0
        ] : []
      ].filter((c) => typeof c == "string").join(`
`);
      super(a, s.cause ? {
        cause: s.cause
      } : void 0), Object.defineProperty(this, "details", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "docs", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "docsPath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "shortMessage", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "cause", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "BaseError"
      }), Object.defineProperty(this, "version", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: `ox@${ZI()}`
      }), this.cause = s.cause, this.details = n, this.docs = o, this.docsPath = r, this.shortMessage = e;
    }
    walk(e) {
      return Kg(this, e);
    }
  }
  function Kg(t, e) {
    return (e == null ? void 0 : e(t)) ? t : t && typeof t == "object" && "cause" in t && t.cause ? Kg(t.cause, e) : e ? null : t;
  }
  const xd = BigInt(0), Ll = BigInt(1);
  function bo(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Od(t) {
    if (!bo(t)) throw new Error("Uint8Array expected");
  }
  function no(t, e) {
    if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
  }
  function Bo(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function Gg(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? xd : BigInt("0x" + t);
  }
  const Yg = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", JI = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function ro(t) {
    if (Od(t), Yg) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += JI[t[s]];
    return e;
  }
  const Hs = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function Iu(t) {
    if (t >= Hs._0 && t <= Hs._9) return t - Hs._0;
    if (t >= Hs.A && t <= Hs.F) return t - (Hs.A - 10);
    if (t >= Hs.a && t <= Hs.f) return t - (Hs.a - 10);
  }
  function ba(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Yg) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = Iu(t.charCodeAt(i)), a = Iu(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function vr(t) {
    return Gg(ro(t));
  }
  function Zg(t) {
    return Od(t), Gg(ro(Uint8Array.from(t).reverse()));
  }
  function Eo(t, e) {
    return ba(t.toString(16).padStart(e * 2, "0"));
  }
  function Jg(t, e) {
    return Eo(t, e).reverse();
  }
  function rs(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = ba(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (bo(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  function Ea(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Od(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  const Nc = (t) => typeof t == "bigint" && xd <= t;
  function kd(t, e, s) {
    return Nc(t) && Nc(e) && Nc(s) && e <= t && t < s;
  }
  function si(t, e, s, n) {
    if (!kd(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function XI(t) {
    let e;
    for (e = 0; t > xd; t >>= Ll, e += 1) ;
    return e;
  }
  const Ha = (t) => (Ll << BigInt(t)) - Ll, Sc = (t) => new Uint8Array(t), Nu = (t) => Uint8Array.from(t);
  function QI(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    let n = Sc(t), r = Sc(t), i = 0;
    const o = () => {
      n.fill(1), r.fill(0), i = 0;
    }, a = (...h) => s(r, n, ...h), c = (h = Sc(0)) => {
      r = a(Nu([
        0
      ]), h), n = a(), h.length !== 0 && (r = a(Nu([
        1
      ]), h), n = a());
    }, l = () => {
      if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h = 0;
      const u = [];
      for (; h < e; ) {
        n = a();
        const f = n.slice();
        u.push(f), h += n.length;
      }
      return Ea(...u);
    };
    return (h, u) => {
      o(), c(h);
      let f;
      for (; !(f = u(l())); ) c();
      return o(), f;
    };
  }
  const e2 = {
    bigint: (t) => typeof t == "bigint",
    function: (t) => typeof t == "function",
    boolean: (t) => typeof t == "boolean",
    string: (t) => typeof t == "string",
    stringOrUint8Array: (t) => typeof t == "string" || bo(t),
    isSafeInteger: (t) => Number.isSafeInteger(t),
    array: (t) => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
  };
  function Va(t, e, s = {}) {
    const n = (r, i, o) => {
      const a = e2[i];
      if (typeof a != "function") throw new Error("invalid validator function");
      const c = t[r];
      if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(r) + " is invalid. Expected " + i + ", got " + c);
    };
    for (const [r, i] of Object.entries(e)) n(r, i, false);
    for (const [r, i] of Object.entries(s)) n(r, i, true);
    return t;
  }
  function Su(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  function t2(t, e) {
    if (Ou(t) > e) throw new C2({
      givenSize: Ou(t),
      maxSize: e
    });
  }
  const Vs = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function _u(t) {
    if (t >= Vs.zero && t <= Vs.nine) return t - Vs.zero;
    if (t >= Vs.A && t <= Vs.F) return t - (Vs.A - 10);
    if (t >= Vs.a && t <= Vs.f) return t - (Vs.a - 10);
  }
  function s2(t, e = {}) {
    const { dir: s, size: n = 32 } = e;
    if (n === 0) return t;
    if (t.length > n) throw new A2({
      size: t.length,
      targetSize: n,
      type: "Bytes"
    });
    const r = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      const o = s === "right";
      r[o ? i : n - i - 1] = t[o ? i : t.length - i - 1];
    }
    return r;
  }
  function Xg(t, e) {
    if (Kn(t) > e) throw new u2({
      givenSize: Kn(t),
      maxSize: e
    });
  }
  function n2(t, e) {
    if (typeof e == "number" && e > 0 && e > Kn(t) - 1) throw new tm({
      offset: e,
      position: "start",
      size: Kn(t)
    });
  }
  function r2(t, e, s) {
    if (typeof e == "number" && typeof s == "number" && Kn(t) !== s - e) throw new tm({
      offset: s,
      position: "end",
      size: Kn(t)
    });
  }
  function Qg(t, e = {}) {
    const { dir: s, size: n = 32 } = e;
    if (n === 0) return t;
    const r = t.replace("0x", "");
    if (r.length > n * 2) throw new f2({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "Hex"
    });
    return `0x${r[s === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
  }
  const i2 = "#__bigint";
  function Pd(t, e, s) {
    return JSON.stringify(t, (n, r) => typeof r == "bigint" ? r.toString() + i2 : r, s);
  }
  const o2 = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function a2(t, e = {}) {
    const { strict: s = false } = e;
    if (!t) throw new Tu(t);
    if (typeof t != "string") throw new Tu(t);
    if (s && !/^0x[0-9a-fA-F]*$/.test(t)) throw new xu(t);
    if (!t.startsWith("0x")) throw new xu(t);
  }
  function c2(...t) {
    return `0x${t.reduce((e, s) => e + s.replace("0x", ""), "")}`;
  }
  function Rd(t) {
    return t instanceof Uint8Array ? va(t) : Array.isArray(t) ? va(new Uint8Array(t)) : t;
  }
  function va(t, e = {}) {
    let s = "";
    for (let r = 0; r < t.length; r++) s += o2[t[r]];
    const n = `0x${s}`;
    return typeof e.size == "number" ? (Xg(n, e.size), em(n, e.size)) : n;
  }
  function _c(t, e = {}) {
    const { signed: s, size: n } = e, r = BigInt(t);
    let i;
    n ? s ? i = (1n << BigInt(n) * 8n - 1n) - 1n : i = 2n ** (BigInt(n) * 8n) - 1n : typeof t == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof i == "bigint" && s ? -i - 1n : 0;
    if (i && r > i || r < o) {
      const l = typeof t == "bigint" ? "n" : "";
      throw new h2({
        max: i ? `${i}${l}` : void 0,
        min: `${o}${l}`,
        signed: s,
        size: n,
        value: `${t}${l}`
      });
    }
    const c = `0x${(s && r < 0 ? (1n << BigInt(n * 8)) + BigInt(r) : r).toString(16)}`;
    return n ? l2(c, n) : c;
  }
  function l2(t, e) {
    return Qg(t, {
      dir: "left",
      size: e
    });
  }
  function em(t, e) {
    return Qg(t, {
      dir: "right",
      size: e
    });
  }
  function Qs(t, e, s, n = {}) {
    const { strict: r } = n;
    n2(t, e);
    const i = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (s ?? t.length) * 2)}`;
    return r && r2(i, e, s), i;
  }
  function Kn(t) {
    return Math.ceil((t.length - 2) / 2);
  }
  function d2(t, e = {}) {
    const { strict: s = false } = e;
    try {
      return a2(t, {
        strict: s
      }), true;
    } catch {
      return false;
    }
  }
  class h2 extends Le {
    constructor({ max: e, min: s, signed: n, size: r, value: i }) {
      super(`Number \`${i}\` is not in safe${r ? ` ${r * 8}-bit` : ""}${n ? " signed" : " unsigned"} integer range ${e ? `(\`${s}\` to \`${e}\`)` : `(above \`${s}\`)`}`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.IntegerOutOfRangeError"
      });
    }
  }
  class Tu extends Le {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Pd(e) : e}\` of type \`${typeof e}\` is an invalid hex type.`, {
        metaMessages: [
          'Hex types must be represented as `"0x${string}"`.'
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.InvalidHexTypeError"
      });
    }
  }
  class xu extends Le {
    constructor(e) {
      super(`Value \`${e}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.InvalidHexValueError"
      });
    }
  }
  let u2 = class extends Le {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeOverflowError"
      });
    }
  };
  class tm extends Le {
    constructor({ offset: e, position: s, size: n }) {
      super(`Slice ${s === "start" ? "starting" : "ending"} at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SliceOffsetOutOfBoundsError"
      });
    }
  }
  let f2 = class extends Le {
    constructor({ size: e, targetSize: s, type: n }) {
      super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeExceedsPaddingSizeError"
      });
    }
  };
  const p2 = new TextEncoder();
  function g2(t) {
    if (!(t instanceof Uint8Array)) {
      if (!t) throw new Do(t);
      if (typeof t != "object") throw new Do(t);
      if (!("BYTES_PER_ELEMENT" in t)) throw new Do(t);
      if (t.BYTES_PER_ELEMENT !== 1 || t.constructor.name !== "Uint8Array") throw new Do(t);
    }
  }
  function m2(t) {
    return t instanceof Uint8Array ? t : typeof t == "string" ? y2(t) : w2(t);
  }
  function w2(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  function y2(t, e = {}) {
    const { size: s } = e;
    let n = t;
    s && (Xg(t, s), n = em(t, s));
    let r = n.slice(2);
    r.length % 2 && (r = `0${r}`);
    const i = r.length / 2, o = new Uint8Array(i);
    for (let a = 0, c = 0; a < i; a++) {
      const l = _u(r.charCodeAt(c++)), d = _u(r.charCodeAt(c++));
      if (l === void 0 || d === void 0) throw new Le(`Invalid byte sequence ("${r[c - 2]}${r[c - 1]}" in "${r}").`);
      o[a] = l * 16 + d;
    }
    return o;
  }
  function b2(t, e = {}) {
    const { size: s } = e, n = p2.encode(t);
    return typeof s == "number" ? (t2(n, s), E2(n, s)) : n;
  }
  function E2(t, e) {
    return s2(t, {
      dir: "right",
      size: e
    });
  }
  function Ou(t) {
    return t.length;
  }
  function v2(t) {
    try {
      return g2(t), true;
    } catch {
      return false;
    }
  }
  class Do extends Le {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Pd(e) : e}\` of type \`${typeof e}\` is an invalid Bytes value.`, {
        metaMessages: [
          "Bytes values must be of type `Bytes`."
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.InvalidBytesTypeError"
      });
    }
  }
  class C2 extends Le {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeOverflowError"
      });
    }
  }
  class A2 extends Le {
    constructor({ size: e, targetSize: s, type: n }) {
      super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeExceedsPaddingSizeError"
      });
    }
  }
  function sm(t, e = {}) {
    const { as: s = typeof t == "string" ? "Hex" : "Bytes" } = e, n = ny(m2(t));
    return s === "Bytes" ? n : va(n);
  }
  class I2 extends Map {
    constructor(e) {
      super(), Object.defineProperty(this, "maxSize", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      }), this.maxSize = e;
    }
    get(e) {
      const s = super.get(e);
      return super.has(e) && s !== void 0 && (this.delete(e), super.set(e, s)), s;
    }
    set(e, s) {
      if (super.set(e, s), this.maxSize && this.size > this.maxSize) {
        const n = this.keys().next().value;
        n && this.delete(n);
      }
      return this;
    }
  }
  const N2 = {
    checksum: new I2(8192)
  }, Tc = N2.checksum;
  function nm(t, e = {}) {
    const { compressed: s } = e, { prefix: n, x: r, y: i } = t;
    if (s === false || typeof r == "bigint" && typeof i == "bigint") {
      if (n !== 4) throw new ku({
        prefix: n,
        cause: new k2()
      });
      return;
    }
    if (s === true || typeof r == "bigint" && typeof i > "u") {
      if (n !== 3 && n !== 2) throw new ku({
        prefix: n,
        cause: new O2()
      });
      return;
    }
    throw new x2({
      publicKey: t
    });
  }
  function S2(t) {
    const e = (() => {
      if (d2(t)) return rm(t);
      if (v2(t)) return _2(t);
      const { prefix: s, x: n, y: r } = t;
      return typeof n == "bigint" && typeof r == "bigint" ? {
        prefix: s ?? 4,
        x: n,
        y: r
      } : {
        prefix: s,
        x: n
      };
    })();
    return nm(e), e;
  }
  function _2(t) {
    return rm(va(t));
  }
  function rm(t) {
    if (t.length !== 132 && t.length !== 130 && t.length !== 68) throw new P2({
      publicKey: t
    });
    if (t.length === 130) {
      const n = BigInt(Qs(t, 0, 32)), r = BigInt(Qs(t, 32, 64));
      return {
        prefix: 4,
        x: n,
        y: r
      };
    }
    if (t.length === 132) {
      const n = Number(Qs(t, 0, 1)), r = BigInt(Qs(t, 1, 33)), i = BigInt(Qs(t, 33, 65));
      return {
        prefix: n,
        x: r,
        y: i
      };
    }
    const e = Number(Qs(t, 0, 1)), s = BigInt(Qs(t, 1, 33));
    return {
      prefix: e,
      x: s
    };
  }
  function T2(t, e = {}) {
    nm(t);
    const { prefix: s, x: n, y: r } = t, { includePrefix: i = true } = e;
    return c2(i ? _c(s, {
      size: 1
    }) : "0x", _c(n, {
      size: 32
    }), typeof r == "bigint" ? _c(r, {
      size: 32
    }) : "0x");
  }
  class x2 extends Le {
    constructor({ publicKey: e }) {
      super(`Value \`${Pd(e)}\` is not a valid public key.`, {
        metaMessages: [
          "Public key must contain:",
          "- an `x` and `prefix` value (compressed)",
          "- an `x`, `y`, and `prefix` value (uncompressed)"
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidError"
      });
    }
  }
  class ku extends Le {
    constructor({ prefix: e, cause: s }) {
      super(`Prefix "${e}" is invalid.`, {
        cause: s
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidPrefixError"
      });
    }
  }
  class O2 extends Le {
    constructor() {
      super("Prefix must be 2 or 3 for compressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidCompressedPrefixError"
      });
    }
  }
  class k2 extends Le {
    constructor() {
      super("Prefix must be 4 for uncompressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidUncompressedPrefixError"
      });
    }
  }
  let P2 = class extends Le {
    constructor({ publicKey: e }) {
      super(`Value \`${e}\` is an invalid public key size.`, {
        metaMessages: [
          "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
          `Received ${Kn(Rd(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidSerializedSizeError"
      });
    }
  };
  const R2 = /^0x[a-fA-F0-9]{40}$/;
  function im(t, e = {}) {
    const { strict: s = true } = e;
    if (!R2.test(t)) throw new Pu({
      address: t,
      cause: new B2()
    });
    if (s) {
      if (t.toLowerCase() === t) return;
      if (om(t) !== t) throw new Pu({
        address: t,
        cause: new D2()
      });
    }
  }
  function om(t) {
    if (Tc.has(t)) return Tc.get(t);
    im(t, {
      strict: false
    });
    const e = t.substring(2).toLowerCase(), s = sm(b2(e), {
      as: "Bytes"
    }), n = e.split("");
    for (let i = 0; i < 40; i += 2) s[i >> 1] >> 4 >= 8 && n[i] && (n[i] = n[i].toUpperCase()), (s[i >> 1] & 15) >= 8 && n[i + 1] && (n[i + 1] = n[i + 1].toUpperCase());
    const r = `0x${n.join("")}`;
    return Tc.set(t, r), r;
  }
  function $2(t, e = {}) {
    const { checksum: s = false } = e;
    return im(t), s ? om(t) : t;
  }
  function U2(t, e = {}) {
    const s = sm(`0x${T2(t).slice(4)}`).substring(26);
    return $2(`0x${s}`, e);
  }
  class Pu extends Le {
    constructor({ address: e, cause: s }) {
      super(`Address "${e}" is invalid.`, {
        cause: s
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidAddressError"
      });
    }
  }
  class B2 extends Le {
    constructor() {
      super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidInputError"
      });
    }
  }
  class D2 extends Le {
    constructor() {
      super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidChecksumError"
      });
    }
  }
  const Bt = BigInt(0), St = BigInt(1), fr = BigInt(2), L2 = BigInt(3), am = BigInt(4), cm = BigInt(5), lm = BigInt(8);
  function Pt(t, e) {
    const s = t % e;
    return s >= Bt ? s : e + s;
  }
  function Qt(t, e, s) {
    let n = t;
    for (; e-- > Bt; ) n *= n, n %= s;
    return n;
  }
  function Ml(t, e) {
    if (t === Bt) throw new Error("invert: expected non-zero number");
    if (e <= Bt) throw new Error("invert: expected positive modulus, got " + e);
    let s = Pt(t, e), n = e, r = Bt, i = St;
    for (; s !== Bt; ) {
      const a = n / s, c = n % s, l = r - i * a;
      n = s, s = c, r = i, i = l;
    }
    if (n !== St) throw new Error("invert: does not exist");
    return Pt(r, e);
  }
  function dm(t, e) {
    const s = (t.ORDER + St) / am, n = t.pow(e, s);
    if (!t.eql(t.sqr(n), e)) throw new Error("Cannot find square root");
    return n;
  }
  function M2(t, e) {
    const s = (t.ORDER - cm) / lm, n = t.mul(e, fr), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, fr), r), a = t.mul(i, t.sub(o, t.ONE));
    if (!t.eql(t.sqr(a), e)) throw new Error("Cannot find square root");
    return a;
  }
  function F2(t) {
    if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
    let e = t - St, s = 0;
    for (; e % fr === Bt; ) e /= fr, s++;
    let n = fr;
    const r = $d(t);
    for (; Ru(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return dm;
    let i = r.pow(n, e);
    const o = (e + St) / fr;
    return function(c, l) {
      if (c.is0(l)) return l;
      if (Ru(c, l) !== 1) throw new Error("Cannot find square root");
      let d = s, h = c.mul(c.ONE, i), u = c.pow(l, e), f = c.pow(l, o);
      for (; !c.eql(u, c.ONE); ) {
        if (c.is0(u)) return c.ZERO;
        let g = 1, p = c.sqr(u);
        for (; !c.eql(p, c.ONE); ) if (g++, p = c.sqr(p), g === d) throw new Error("Cannot find square root");
        const m = St << BigInt(d - g - 1), T = c.pow(h, m);
        d = g, h = c.sqr(T), u = c.mul(u, h), f = c.mul(f, T);
      }
      return f;
    };
  }
  function q2(t) {
    return t % am === L2 ? dm : t % lm === cm ? M2 : F2(t);
  }
  const j2 = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function W2(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    }, s = j2.reduce((n, r) => (n[r] = "function", n), e);
    return Va(t, s);
  }
  function H2(t, e, s) {
    if (s < Bt) throw new Error("invalid exponent, negatives unsupported");
    if (s === Bt) return t.ONE;
    if (s === St) return e;
    let n = t.ONE, r = e;
    for (; s > Bt; ) s & St && (n = t.mul(n, r)), r = t.sqr(r), s >>= St;
    return n;
  }
  function hm(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function Ru(t, e) {
    const s = (t.ORDER - St) / fr, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function um(t, e) {
    e !== void 0 && ry(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function $d(t, e, s = false, n = {}) {
    if (t <= Bt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    const { nBitLength: r, nByteLength: i } = um(t, e);
    if (i > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o;
    const a = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: r,
      BYTES: i,
      MASK: Ha(r),
      ZERO: Bt,
      ONE: St,
      create: (c) => Pt(c, t),
      isValid: (c) => {
        if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
        return Bt <= c && c < t;
      },
      is0: (c) => c === Bt,
      isOdd: (c) => (c & St) === St,
      neg: (c) => Pt(-c, t),
      eql: (c, l) => c === l,
      sqr: (c) => Pt(c * c, t),
      add: (c, l) => Pt(c + l, t),
      sub: (c, l) => Pt(c - l, t),
      mul: (c, l) => Pt(c * l, t),
      pow: (c, l) => H2(a, c, l),
      div: (c, l) => Pt(c * Ml(l, t), t),
      sqrN: (c) => c * c,
      addN: (c, l) => c + l,
      subN: (c, l) => c - l,
      mulN: (c, l) => c * l,
      inv: (c) => Ml(c, t),
      sqrt: n.sqrt || ((c) => (o || (o = q2(t)), o(a, c))),
      toBytes: (c) => s ? Jg(c, i) : Eo(c, i),
      fromBytes: (c) => {
        if (c.length !== i) throw new Error("Field.fromBytes: expected " + i + " bytes, got " + c.length);
        return s ? Zg(c) : vr(c);
      },
      invertBatch: (c) => hm(a, c),
      cmov: (c, l, d) => d ? l : c
    });
    return Object.freeze(a);
  }
  function fm(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function pm(t) {
    const e = fm(t);
    return e + Math.ceil(e / 2);
  }
  function V2(t, e, s = false) {
    const n = t.length, r = fm(e), i = pm(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? Zg(t) : vr(t), a = Pt(o, e - St) + St;
    return s ? Jg(a, r) : Eo(a, r);
  }
  const $u = BigInt(0), Fl = BigInt(1);
  function xc(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function gm(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function Oc(t, e) {
    gm(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = Ha(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function Uu(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += Fl);
    const l = e * n, d = l + Math.abs(a) - 1, h = a === 0, u = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: h,
      isNeg: u,
      isNegF: f,
      offsetF: l
    };
  }
  function z2(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function K2(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const kc = /* @__PURE__ */ new WeakMap(), mm = /* @__PURE__ */ new WeakMap();
  function Pc(t) {
    return mm.get(t) || 1;
  }
  function G2(t, e) {
    return {
      constTimeNegate: xc,
      hasPrecomputes(s) {
        return Pc(s) !== 1;
      },
      unsafeLadder(s, n, r = t.ZERO) {
        let i = s;
        for (; n > $u; ) n & Fl && (r = r.add(i)), i = i.double(), n >>= Fl;
        return r;
      },
      precomputeWindow(s, n) {
        const { windows: r, windowSize: i } = Oc(n, e), o = [];
        let a = s, c = a;
        for (let l = 0; l < r; l++) {
          c = a, o.push(c);
          for (let d = 1; d < i; d++) c = c.add(a), o.push(c);
          a = c.double();
        }
        return o;
      },
      wNAF(s, n, r) {
        let i = t.ZERO, o = t.BASE;
        const a = Oc(s, e);
        for (let c = 0; c < a.windows; c++) {
          const { nextN: l, offset: d, isZero: h, isNeg: u, isNegF: f, offsetF: g } = Uu(r, c, a);
          r = l, h ? o = o.add(xc(f, n[g])) : i = i.add(xc(u, n[d]));
        }
        return {
          p: i,
          f: o
        };
      },
      wNAFUnsafe(s, n, r, i = t.ZERO) {
        const o = Oc(s, e);
        for (let a = 0; a < o.windows && r !== $u; a++) {
          const { nextN: c, offset: l, isZero: d, isNeg: h } = Uu(r, a, o);
          if (r = c, !d) {
            const u = n[l];
            i = i.add(h ? u.negate() : u);
          }
        }
        return i;
      },
      getPrecomputes(s, n, r) {
        let i = kc.get(n);
        return i || (i = this.precomputeWindow(n, s), s !== 1 && kc.set(n, r(i))), i;
      },
      wNAFCached(s, n, r) {
        const i = Pc(s);
        return this.wNAF(i, this.getPrecomputes(i, s, r), n);
      },
      wNAFCachedUnsafe(s, n, r, i) {
        const o = Pc(s);
        return o === 1 ? this.unsafeLadder(s, n, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, s, r), n, i);
      },
      setWindowSize(s, n) {
        gm(n, e), mm.set(s, n), kc.delete(s);
      }
    };
  }
  function Y2(t, e, s, n) {
    z2(s, t), K2(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = XI(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = Ha(c), d = new Array(Number(l) + 1).fill(o), h = Math.floor((e.BITS - 1) / c) * c;
    let u = o;
    for (let f = h; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = n[p], T = Number(m >> BigInt(f) & l);
        d[T] = d[T].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (u = u.add(g), f !== 0) for (let p = 0; p < c; p++) u = u.double();
    }
    return u;
  }
  function wm(t) {
    return W2(t.Fp), Va(t, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    }), Object.freeze({
      ...um(t.n, t.nBitLength),
      ...t,
      p: t.Fp.ORDER
    });
  }
  function Bu(t) {
    t.lowS !== void 0 && no("lowS", t.lowS), t.prehash !== void 0 && no("prehash", t.prehash);
  }
  function Z2(t) {
    const e = wm(t);
    Va(e, {
      a: "field",
      b: "field"
    }, {
      allowInfinityPoint: "boolean",
      allowedPrivateKeyLengths: "array",
      clearCofactor: "function",
      fromBytes: "function",
      isTorsionFree: "function",
      toBytes: "function",
      wrapPrivateKey: "boolean"
    });
    const { endo: s, Fp: n, a: r } = e;
    if (s) {
      if (!n.eql(r, n.ZERO)) throw new Error("invalid endo: CURVE.a must be 0");
      if (typeof s != "object" || typeof s.beta != "bigint" || typeof s.splitScalar != "function") throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
    }
    return Object.freeze({
      ...e
    });
  }
  class J2 extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const sn = {
    Err: J2,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = sn;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = Bo(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? Bo(r.length / 2 | 128) : "";
        return Bo(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = sn;
        let n = 0;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length < 2 || e[n++] !== t) throw new s("tlv.decode: wrong tlv");
        const r = e[n++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new s("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new s("tlv.decode(long): byte length is too big");
          const l = e.subarray(n, n + c);
          if (l.length !== c) throw new s("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (n += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(n, n + o);
        if (a.length !== o) throw new s("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(n + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = sn;
        if (t < an) throw new e("integer: negative integers are not allowed");
        let s = Bo(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = sn;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return vr(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = sn, r = rs("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = sn, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  };
  function Rc(t, e) {
    return ro(Eo(t, e));
  }
  const an = BigInt(0), Je = BigInt(1);
  BigInt(2);
  const $c = BigInt(3), X2 = BigInt(4);
  function Q2(t) {
    const e = Z2(t), { Fp: s } = e, n = $d(e.n, e.nBitLength), r = e.toBytes || ((A, N, P) => {
      const U = N.toAffine();
      return Ea(Uint8Array.from([
        4
      ]), s.toBytes(U.x), s.toBytes(U.y));
    }), i = e.fromBytes || ((A) => {
      const N = A.subarray(1), P = s.fromBytes(N.subarray(0, s.BYTES)), U = s.fromBytes(N.subarray(s.BYTES, 2 * s.BYTES));
      return {
        x: P,
        y: U
      };
    });
    function o(A) {
      const { a: N, b: P } = e, U = s.sqr(A), B = s.mul(U, A);
      return s.add(s.add(B, s.mul(A, N)), P);
    }
    function a(A, N) {
      const P = s.sqr(N), U = o(A);
      return s.eql(P, U);
    }
    if (!a(e.Gx, e.Gy)) throw new Error("bad curve params: generator point");
    const c = s.mul(s.pow(e.a, $c), X2), l = s.mul(s.sqr(e.b), BigInt(27));
    if (s.is0(s.add(c, l))) throw new Error("bad curve params: a or b");
    function d(A) {
      return kd(A, Je, e.n);
    }
    function h(A) {
      const { allowedPrivateKeyLengths: N, nByteLength: P, wrapPrivateKey: U, n: B } = e;
      if (N && typeof A != "bigint") {
        if (bo(A) && (A = ro(A)), typeof A != "string" || !N.includes(A.length)) throw new Error("invalid private key");
        A = A.padStart(P * 2, "0");
      }
      let L;
      try {
        L = typeof A == "bigint" ? A : vr(rs("private key", A, P));
      } catch {
        throw new Error("invalid private key, expected hex or " + P + " bytes, got " + typeof A);
      }
      return U && (L = Pt(L, B)), si("private key", L, Je, B), L;
    }
    function u(A) {
      if (!(A instanceof p)) throw new Error("ProjectivePoint expected");
    }
    const f = Su((A, N) => {
      const { px: P, py: U, pz: B } = A;
      if (s.eql(B, s.ONE)) return {
        x: P,
        y: U
      };
      const L = A.is0();
      N == null && (N = L ? s.ONE : s.inv(B));
      const O = s.mul(P, N), D = s.mul(U, N), M = s.mul(B, N);
      if (L) return {
        x: s.ZERO,
        y: s.ZERO
      };
      if (!s.eql(M, s.ONE)) throw new Error("invZ was invalid");
      return {
        x: O,
        y: D
      };
    }), g = Su((A) => {
      if (A.is0()) {
        if (e.allowInfinityPoint && !s.is0(A.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: N, y: P } = A.toAffine();
      if (!s.isValid(N) || !s.isValid(P)) throw new Error("bad point: x or y not FE");
      if (!a(N, P)) throw new Error("bad point: equation left != right");
      if (!A.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    class p {
      constructor(N, P, U) {
        if (N == null || !s.isValid(N)) throw new Error("x required");
        if (P == null || !s.isValid(P) || s.is0(P)) throw new Error("y required");
        if (U == null || !s.isValid(U)) throw new Error("z required");
        this.px = N, this.py = P, this.pz = U, Object.freeze(this);
      }
      static fromAffine(N) {
        const { x: P, y: U } = N || {};
        if (!N || !s.isValid(P) || !s.isValid(U)) throw new Error("invalid affine point");
        if (N instanceof p) throw new Error("projective point not allowed");
        const B = (L) => s.eql(L, s.ZERO);
        return B(P) && B(U) ? p.ZERO : new p(P, U, s.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static normalizeZ(N) {
        const P = hm(s, N.map((U) => U.pz));
        return N.map((U, B) => U.toAffine(P[B])).map(p.fromAffine);
      }
      static fromHex(N) {
        const P = p.fromAffine(i(rs("pointHex", N)));
        return P.assertValidity(), P;
      }
      static fromPrivateKey(N) {
        return p.BASE.multiply(h(N));
      }
      static msm(N, P) {
        return Y2(p, n, N, P);
      }
      _setWindowSize(N) {
        x.setWindowSize(this, N);
      }
      assertValidity() {
        g(this);
      }
      hasEvenY() {
        const { y: N } = this.toAffine();
        if (s.isOdd) return !s.isOdd(N);
        throw new Error("Field doesn't support isOdd");
      }
      equals(N) {
        u(N);
        const { px: P, py: U, pz: B } = this, { px: L, py: O, pz: D } = N, M = s.eql(s.mul(P, D), s.mul(L, B)), _ = s.eql(s.mul(U, D), s.mul(O, B));
        return M && _;
      }
      negate() {
        return new p(this.px, s.neg(this.py), this.pz);
      }
      double() {
        const { a: N, b: P } = e, U = s.mul(P, $c), { px: B, py: L, pz: O } = this;
        let D = s.ZERO, M = s.ZERO, _ = s.ZERO, y = s.mul(B, B), E = s.mul(L, L), w = s.mul(O, O), v = s.mul(B, L);
        return v = s.add(v, v), _ = s.mul(B, O), _ = s.add(_, _), D = s.mul(N, _), M = s.mul(U, w), M = s.add(D, M), D = s.sub(E, M), M = s.add(E, M), M = s.mul(D, M), D = s.mul(v, D), _ = s.mul(U, _), w = s.mul(N, w), v = s.sub(y, w), v = s.mul(N, v), v = s.add(v, _), _ = s.add(y, y), y = s.add(_, y), y = s.add(y, w), y = s.mul(y, v), M = s.add(M, y), w = s.mul(L, O), w = s.add(w, w), y = s.mul(w, v), D = s.sub(D, y), _ = s.mul(w, E), _ = s.add(_, _), _ = s.add(_, _), new p(D, M, _);
      }
      add(N) {
        u(N);
        const { px: P, py: U, pz: B } = this, { px: L, py: O, pz: D } = N;
        let M = s.ZERO, _ = s.ZERO, y = s.ZERO;
        const E = e.a, w = s.mul(e.b, $c);
        let v = s.mul(P, L), I = s.mul(U, O), k = s.mul(B, D), C = s.add(P, U), S = s.add(L, O);
        C = s.mul(C, S), S = s.add(v, I), C = s.sub(C, S), S = s.add(P, B);
        let R = s.add(L, D);
        return S = s.mul(S, R), R = s.add(v, k), S = s.sub(S, R), R = s.add(U, B), M = s.add(O, D), R = s.mul(R, M), M = s.add(I, k), R = s.sub(R, M), y = s.mul(E, S), M = s.mul(w, k), y = s.add(M, y), M = s.sub(I, y), y = s.add(I, y), _ = s.mul(M, y), I = s.add(v, v), I = s.add(I, v), k = s.mul(E, k), S = s.mul(w, S), I = s.add(I, k), k = s.sub(v, k), k = s.mul(E, k), S = s.add(S, k), v = s.mul(I, S), _ = s.add(_, v), v = s.mul(R, S), M = s.mul(C, M), M = s.sub(M, v), v = s.mul(C, I), y = s.mul(R, y), y = s.add(y, v), new p(M, _, y);
      }
      subtract(N) {
        return this.add(N.negate());
      }
      is0() {
        return this.equals(p.ZERO);
      }
      wNAF(N) {
        return x.wNAFCached(this, N, p.normalizeZ);
      }
      multiplyUnsafe(N) {
        const { endo: P, n: U } = e;
        si("scalar", N, an, U);
        const B = p.ZERO;
        if (N === an) return B;
        if (this.is0() || N === Je) return this;
        if (!P || x.hasPrecomputes(this)) return x.wNAFCachedUnsafe(this, N, p.normalizeZ);
        let { k1neg: L, k1: O, k2neg: D, k2: M } = P.splitScalar(N), _ = B, y = B, E = this;
        for (; O > an || M > an; ) O & Je && (_ = _.add(E)), M & Je && (y = y.add(E)), E = E.double(), O >>= Je, M >>= Je;
        return L && (_ = _.negate()), D && (y = y.negate()), y = new p(s.mul(y.px, P.beta), y.py, y.pz), _.add(y);
      }
      multiply(N) {
        const { endo: P, n: U } = e;
        si("scalar", N, Je, U);
        let B, L;
        if (P) {
          const { k1neg: O, k1: D, k2neg: M, k2: _ } = P.splitScalar(N);
          let { p: y, f: E } = this.wNAF(D), { p: w, f: v } = this.wNAF(_);
          y = x.constTimeNegate(O, y), w = x.constTimeNegate(M, w), w = new p(s.mul(w.px, P.beta), w.py, w.pz), B = y.add(w), L = E.add(v);
        } else {
          const { p: O, f: D } = this.wNAF(N);
          B = O, L = D;
        }
        return p.normalizeZ([
          B,
          L
        ])[0];
      }
      multiplyAndAddUnsafe(N, P, U) {
        const B = p.BASE, L = (D, M) => M === an || M === Je || !D.equals(B) ? D.multiplyUnsafe(M) : D.multiply(M), O = L(this, P).add(L(N, U));
        return O.is0() ? void 0 : O;
      }
      toAffine(N) {
        return f(this, N);
      }
      isTorsionFree() {
        const { h: N, isTorsionFree: P } = e;
        if (N === Je) return true;
        if (P) return P(p, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: N, clearCofactor: P } = e;
        return N === Je ? this : P ? P(p, this) : this.multiplyUnsafe(e.h);
      }
      toRawBytes(N = true) {
        return no("isCompressed", N), this.assertValidity(), r(p, this, N);
      }
      toHex(N = true) {
        return no("isCompressed", N), ro(this.toRawBytes(N));
      }
    }
    p.BASE = new p(e.Gx, e.Gy, s.ONE), p.ZERO = new p(s.ZERO, s.ONE, s.ZERO);
    const { endo: m, nBitLength: T } = e, x = G2(p, m ? Math.ceil(T / 2) : T);
    return {
      CURVE: e,
      ProjectivePoint: p,
      normPrivateKeyToScalar: h,
      weierstrassEquation: o,
      isWithinCurveOrder: d
    };
  }
  function eN(t) {
    const e = wm(t);
    return Va(e, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    }), Object.freeze({
      lowS: true,
      ...e
    });
  }
  function tN(t) {
    const e = eN(t), { Fp: s, n, nByteLength: r, nBitLength: i } = e, o = s.BYTES + 1, a = 2 * s.BYTES + 1;
    function c(w) {
      return Pt(w, n);
    }
    function l(w) {
      return Ml(w, n);
    }
    const { ProjectivePoint: d, normPrivateKeyToScalar: h, weierstrassEquation: u, isWithinCurveOrder: f } = Q2({
      ...e,
      toBytes(w, v, I) {
        const k = v.toAffine(), C = s.toBytes(k.x), S = Ea;
        return no("isCompressed", I), I ? S(Uint8Array.from([
          v.hasEvenY() ? 2 : 3
        ]), C) : S(Uint8Array.from([
          4
        ]), C, s.toBytes(k.y));
      },
      fromBytes(w) {
        const v = w.length, I = w[0], k = w.subarray(1);
        if (v === o && (I === 2 || I === 3)) {
          const C = vr(k);
          if (!kd(C, Je, s.ORDER)) throw new Error("Point is not on curve");
          const S = u(C);
          let R;
          try {
            R = s.sqrt(S);
          } catch (K) {
            const j = K instanceof Error ? ": " + K.message : "";
            throw new Error("Point is not on curve" + j);
          }
          const $ = (R & Je) === Je;
          return (I & 1) === 1 !== $ && (R = s.neg(R)), {
            x: C,
            y: R
          };
        } else if (v === a && I === 4) {
          const C = s.fromBytes(k.subarray(0, s.BYTES)), S = s.fromBytes(k.subarray(s.BYTES, 2 * s.BYTES));
          return {
            x: C,
            y: S
          };
        } else {
          const C = o, S = a;
          throw new Error("invalid Point, expected length of " + C + ", or uncompressed " + S + ", got " + v);
        }
      }
    });
    function g(w) {
      const v = n >> Je;
      return w > v;
    }
    function p(w) {
      return g(w) ? c(-w) : w;
    }
    const m = (w, v, I) => vr(w.slice(v, I));
    class T {
      constructor(v, I, k) {
        si("r", v, Je, n), si("s", I, Je, n), this.r = v, this.s = I, k != null && (this.recovery = k), Object.freeze(this);
      }
      static fromCompact(v) {
        const I = r;
        return v = rs("compactSignature", v, I * 2), new T(m(v, 0, I), m(v, I, 2 * I));
      }
      static fromDER(v) {
        const { r: I, s: k } = sn.toSig(rs("DER", v));
        return new T(I, k);
      }
      assertValidity() {
      }
      addRecoveryBit(v) {
        return new T(this.r, this.s, v);
      }
      recoverPublicKey(v) {
        const { r: I, s: k, recovery: C } = this, S = B(rs("msgHash", v));
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        const R = C === 2 || C === 3 ? I + e.n : I;
        if (R >= s.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const $ = (C & 1) === 0 ? "02" : "03", Y = d.fromHex($ + Rc(R, s.BYTES)), K = l(R), j = c(-S * K), J = c(k * K), Z = d.BASE.multiplyAndAddUnsafe(Y, j, J);
        if (!Z) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return g(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new T(this.r, c(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return ba(this.toDERHex());
      }
      toDERHex() {
        return sn.hexFromSig(this);
      }
      toCompactRawBytes() {
        return ba(this.toCompactHex());
      }
      toCompactHex() {
        const v = r;
        return Rc(this.r, v) + Rc(this.s, v);
      }
    }
    const x = {
      isValidPrivateKey(w) {
        try {
          return h(w), true;
        } catch {
          return false;
        }
      },
      normPrivateKeyToScalar: h,
      randomPrivateKey: () => {
        const w = pm(e.n);
        return V2(e.randomBytes(w), e.n);
      },
      precompute(w = 8, v = d.BASE) {
        return v._setWindowSize(w), v.multiply(BigInt(3)), v;
      }
    };
    function A(w, v = true) {
      return d.fromPrivateKey(w).toRawBytes(v);
    }
    function N(w) {
      if (typeof w == "bigint") return false;
      if (w instanceof d) return true;
      const I = rs("key", w).length, k = s.BYTES, C = k + 1, S = 2 * k + 1;
      if (!(e.allowedPrivateKeyLengths || r === C)) return I === C || I === S;
    }
    function P(w, v, I = true) {
      if (N(w) === true) throw new Error("first arg must be private key");
      if (N(v) === false) throw new Error("second arg must be public key");
      return d.fromHex(v).multiply(h(w)).toRawBytes(I);
    }
    const U = e.bits2int || function(w) {
      if (w.length > 8192) throw new Error("input is too large");
      const v = vr(w), I = w.length * 8 - i;
      return I > 0 ? v >> BigInt(I) : v;
    }, B = e.bits2int_modN || function(w) {
      return c(U(w));
    }, L = Ha(i);
    function O(w) {
      return si("num < 2^" + i, w, an, L), Eo(w, r);
    }
    function D(w, v, I = M) {
      if ([
        "recovered",
        "canonical"
      ].some((X) => X in I)) throw new Error("sign() legacy options not supported");
      const { hash: k, randomBytes: C } = e;
      let { lowS: S, prehash: R, extraEntropy: $ } = I;
      S == null && (S = true), w = rs("msgHash", w), Bu(I), R && (w = rs("prehashed msgHash", k(w)));
      const Y = B(w), K = h(v), j = [
        O(K),
        O(Y)
      ];
      if ($ != null && $ !== false) {
        const X = $ === true ? C(s.BYTES) : $;
        j.push(rs("extraEntropy", X));
      }
      const J = Ea(...j), Z = Y;
      function de(X) {
        const he = U(X);
        if (!f(he)) return;
        const Me = l(he), je = d.BASE.multiply(he).toAffine(), qe = c(je.x);
        if (qe === an) return;
        const bt = c(Me * c(Z + qe * K));
        if (bt === an) return;
        let pn = (je.x === qe ? 0 : 2) | Number(je.y & Je), nh = bt;
        return S && g(bt) && (nh = p(bt), pn ^= 1), new T(qe, nh, pn);
      }
      return {
        seed: J,
        k2sig: de
      };
    }
    const M = {
      lowS: e.lowS,
      prehash: false
    }, _ = {
      lowS: e.lowS,
      prehash: false
    };
    function y(w, v, I = M) {
      const { seed: k, k2sig: C } = D(w, v, I), S = e;
      return QI(S.hash.outputLen, S.nByteLength, S.hmac)(k, C);
    }
    d.BASE._setWindowSize(8);
    function E(w, v, I, k = _) {
      var _a2;
      const C = w;
      v = rs("msgHash", v), I = rs("publicKey", I);
      const { lowS: S, prehash: R, format: $ } = k;
      if (Bu(k), "strict" in k) throw new Error("options.strict was renamed to lowS");
      if ($ !== void 0 && $ !== "compact" && $ !== "der") throw new Error("format must be compact or der");
      const Y = typeof C == "string" || bo(C), K = !Y && !$ && typeof C == "object" && C !== null && typeof C.r == "bigint" && typeof C.s == "bigint";
      if (!Y && !K) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      let j, J;
      try {
        if (K && (j = new T(C.r, C.s)), Y) {
          try {
            $ !== "compact" && (j = T.fromDER(C));
          } catch (pn) {
            if (!(pn instanceof sn.Err)) throw pn;
          }
          !j && $ !== "der" && (j = T.fromCompact(C));
        }
        J = d.fromHex(I);
      } catch {
        return false;
      }
      if (!j || S && j.hasHighS()) return false;
      R && (v = e.hash(v));
      const { r: Z, s: de } = j, X = B(v), he = l(de), Me = c(X * he), je = c(Z * he), qe = (_a2 = d.BASE.multiplyAndAddUnsafe(J, Me, je)) == null ? void 0 : _a2.toAffine();
      return qe ? c(qe.x) === Z : false;
    }
    return {
      CURVE: e,
      getPublicKey: A,
      getSharedSecret: P,
      sign: y,
      verify: E,
      ProjectivePoint: d,
      Signature: T,
      utils: x
    };
  }
  function sN(t) {
    return {
      hash: t,
      hmac: (e, ...s) => oy(t, e, ay(...s)),
      randomBytes: iy
    };
  }
  function nN(t, e) {
    const s = (n) => tN({
      ...t,
      ...sN(n)
    });
    return {
      ...s(e),
      create: s
    };
  }
  const ym = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Du = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), rN = BigInt(0), iN = BigInt(1), ql = BigInt(2), Lu = (t, e) => (t + e / ql) / e;
  function oN(t) {
    const e = ym, s = BigInt(3), n = BigInt(6), r = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), l = t * t * t % e, d = l * l * t % e, h = Qt(d, s, e) * d % e, u = Qt(h, s, e) * d % e, f = Qt(u, ql, e) * l % e, g = Qt(f, r, e) * f % e, p = Qt(g, i, e) * g % e, m = Qt(p, a, e) * p % e, T = Qt(m, c, e) * m % e, x = Qt(T, a, e) * p % e, A = Qt(x, s, e) * d % e, N = Qt(A, o, e) * g % e, P = Qt(N, n, e) * l % e, U = Qt(P, ql, e);
    if (!jl.eql(jl.sqr(U), t)) throw new Error("Cannot find square root");
    return U;
  }
  const jl = $d(ym, void 0, void 0, {
    sqrt: oN
  }), aN = nN({
    a: rN,
    b: BigInt(7),
    Fp: jl,
    n: Du,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (t) => {
        const e = Du, s = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -iN * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = s, o = BigInt("0x100000000000000000000000000000000"), a = Lu(i * t, e), c = Lu(-n * t, e);
        let l = Pt(t - a * s - c * r, e), d = Pt(-a * n - c * i, e);
        const h = l > o, u = d > o;
        if (h && (l = e - l), u && (d = e - d), l > o || d > o) throw new Error("splitScalar: Endomorphism failed, k=" + t);
        return {
          k1neg: h,
          k1: l,
          k2neg: u,
          k2: d
        };
      }
    }
  }, cy);
  function cN(t) {
    if (t.length !== 130 && t.length !== 132) throw new dN({
      signature: t
    });
    const e = BigInt(Qs(t, 0, 32)), s = BigInt(Qs(t, 32, 64)), n = (() => {
      const r = +`0x${t.slice(130)}`;
      if (!Number.isNaN(r)) try {
        return lN(r);
      } catch {
        throw new hN({
          value: r
        });
      }
    })();
    return typeof n > "u" ? {
      r: e,
      s
    } : {
      r: e,
      s,
      yParity: n
    };
  }
  function lN(t) {
    if (t === 0 || t === 27) return 0;
    if (t === 1 || t === 28) return 1;
    if (t >= 35) return t % 2 === 0 ? 1 : 0;
    throw new uN({
      value: t
    });
  }
  class dN extends Le {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          "Expected: 64 bytes or 65 bytes.",
          `Received ${Kn(Rd(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidSerializedSizeError"
      });
    }
  }
  class hN extends Le {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidYParityError"
      });
    }
  }
  class uN extends Le {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidVError"
      });
    }
  }
  function fN(t) {
    return U2(pN(t));
  }
  function pN(t) {
    const { payload: e, signature: s } = t, { r: n, s: r, yParity: i } = s, a = new aN.Signature(BigInt(n), BigInt(r)).addRecoveryBit(i).recoverPublicKey(Rd(e).substring(2));
    return S2(a);
  }
  function gN(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), h = d.charCodeAt(0);
      if (e[h] !== 255) throw new TypeError(d + " is ambiguous");
      e[h] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, h = 0, u = 0;
      const f = l.length;
      for (; u !== f && l[u] === 0; ) u++, d++;
      const g = (f - u) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; u !== f; ) {
        let x = l[u], A = 0;
        for (let N = g - 1; (x !== 0 || A < h) && N !== -1; N--, A++) x += 256 * p[N] >>> 0, p[N] = x % s >>> 0, x = x / s >>> 0;
        if (x !== 0) throw new Error("Non-zero carry");
        h = A, u++;
      }
      let m = g - h;
      for (; m !== g && p[m] === 0; ) m++;
      let T = n.repeat(d);
      for (; m < g; ++m) T += t.charAt(p[m]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, h = 0, u = 0;
      for (; l[d] === n; ) h++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const x = l.charCodeAt(d);
        if (x > 255) return;
        let A = e[x];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < u) && P !== -1; P--, N++) A += s * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        u = N, d++;
      }
      let p = f - u;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(h + (f - p));
      let T = h;
      for (; p !== f; ) m[T++] = g[p++];
      return m;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var mN = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const vo = gN(mN);
  var wN = {};
  const yN = ":";
  function dn(t) {
    const [e, s] = t.split(yN);
    return {
      namespace: e,
      reference: s
    };
  }
  function bm(t, e) {
    return t.includes(":") ? [
      t
    ] : e.chains || [];
  }
  var bN = Object.defineProperty, EN = Object.defineProperties, vN = Object.getOwnPropertyDescriptors, Mu = Object.getOwnPropertySymbols, CN = Object.prototype.hasOwnProperty, AN = Object.prototype.propertyIsEnumerable, Wl = (t, e, s) => e in t ? bN(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Fu = (t, e) => {
    for (var s in e || (e = {})) CN.call(e, s) && Wl(t, s, e[s]);
    if (Mu) for (var s of Mu(e)) AN.call(e, s) && Wl(t, s, e[s]);
    return t;
  }, IN = (t, e) => EN(t, vN(e)), qu = (t, e, s) => Wl(t, typeof e != "symbol" ? e + "" : e, s);
  const NN = "ReactNative", Zr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  };
  function Em() {
    return typeof as < "u" && typeof as.versions < "u" && typeof as.versions.node < "u";
  }
  function vm() {
    return !Gt.getDocument() && !!Gt.getNavigator() && navigator.product === NN;
  }
  function Cm() {
    return !Em() && !!Gt.getNavigator() && !!Gt.getDocument();
  }
  function SN() {
    return vm() ? Zr.reactNative : Em() ? Zr.node : Cm() ? Zr.browser : Zr.unknown;
  }
  function _N(t) {
    var e, s;
    const n = TN();
    try {
      return t != null && t.url && n.url && new URL(t.url).host !== new URL(n.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${n.url}. This is probably unintended and can lead to issues.`), t.url = n.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((r) => r !== "")), IN(Fu(Fu({}, n), t), {
        url: (t == null ? void 0 : t.url) || n.url,
        name: (t == null ? void 0 : t.name) || n.name,
        description: (t == null ? void 0 : t.description) || n.description,
        icons: (s = t == null ? void 0 : t.icons) != null && s.length && t.icons.length > 0 ? t.icons : n.icons
      });
    } catch (r) {
      return console.warn("Error populating app metadata", r), t || n;
    }
  }
  function TN() {
    return lp.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function pr(t, e) {
    return t.filter((s) => e.includes(s)).length === t.length;
  }
  function qr(t = z.FIVE_MINUTES, e) {
    const s = z.toMiliseconds(t || z.FIVE_MINUTES);
    let n, r, i, o;
    return {
      resolve: (a) => {
        i && n && (clearTimeout(i), n(a), o = Promise.resolve(a));
      },
      reject: (a) => {
        i && r && (clearTimeout(i), r(a));
      },
      done: () => new Promise((a, c) => {
        if (o) return a(o);
        i = setTimeout(() => {
          const l = new Error(e);
          o = Promise.reject(l), c(l);
        }, s), n = a, r = c;
      })
    };
  }
  function xN(t) {
    const [e, s] = t.split(":"), n = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof s == "string") n.topic = s;
    else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return n;
  }
  function Ct(t, e) {
    return z.fromMiliseconds(Date.now() + z.toMiliseconds(t));
  }
  function Rn(t) {
    return Date.now() >= z.toMiliseconds(t);
  }
  function Re(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function Ms(t = [], e = []) {
    return [
      .../* @__PURE__ */ new Set([
        ...t,
        ...e
      ])
    ];
  }
  async function ON({ id: t, topic: e, wcDeepLink: s }) {
    var n;
    try {
      if (!s) return;
      const r = typeof s == "string" ? JSON.parse(s) : s, i = r == null ? void 0 : r.href;
      if (typeof i != "string") return;
      const o = kN(i, t, e), a = SN();
      if (a === Zr.browser) {
        if (!((n = Gt.getDocument()) != null && n.hasFocus())) {
          console.warn("Document does not have focus, skipping deeplink.");
          return;
        }
        PN(o);
      } else a === Zr.reactNative && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u" && await globalThis.Linking.openURL(o);
    } catch (r) {
      console.error(r);
    }
  }
  function kN(t, e, s) {
    const n = `requestId=${e}&sessionTopic=${s}`;
    t.endsWith("/") && (t = t.slice(0, -1));
    let r = `${t}`;
    if (t.startsWith("https://t.me")) {
      const i = t.includes("?") ? "&startapp=" : "?startapp=";
      r = `${r}${i}${DN(n, true)}`;
    } else r = `${r}/wc?${n}`;
    return r;
  }
  function PN(t) {
    let e = "_self";
    BN() ? e = "_top" : (UN() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
  }
  async function RN(t, e) {
    let s = "";
    try {
      if (Cm() && (s = localStorage.getItem(e), s)) return s;
      s = await t.getItem(e);
    } catch (n) {
      console.error(n);
    }
    return s;
  }
  function ju(t, e) {
    if (!t.includes(e)) return null;
    const s = t.split(/([&,?,=])/), n = s.indexOf(e);
    return s[n + 2];
  }
  function $N() {
    return typeof as < "u" && wN.IS_VITEST === "true";
  }
  function UN() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
  }
  function BN() {
    try {
      return window.self !== window.top;
    } catch {
      return false;
    }
  }
  function DN(t, e = false) {
    const s = Ae.from(t).toString("base64");
    return e ? s.replace(/[=]/g, "") : s;
  }
  class LN {
    constructor({ limit: e }) {
      qu(this, "limit"), qu(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
    }
    add(e) {
      if (!this.set.has(e)) {
        if (this.set.size >= this.limit) {
          const s = this.set.values().next().value;
          s && this.set.delete(s);
        }
        this.set.add(e);
      }
    }
    has(e) {
      return this.set.has(e);
    }
  }
  const Lo = BigInt(2 ** 32 - 1), Wu = BigInt(32);
  function Am(t, e = false) {
    return e ? {
      h: Number(t & Lo),
      l: Number(t >> Wu & Lo)
    } : {
      h: Number(t >> Wu & Lo) | 0,
      l: Number(t & Lo) | 0
    };
  }
  function Im(t, e = false) {
    const s = t.length;
    let n = new Uint32Array(s), r = new Uint32Array(s);
    for (let i = 0; i < s; i++) {
      const { h: o, l: a } = Am(t[i], e);
      [n[i], r[i]] = [
        o,
        a
      ];
    }
    return [
      n,
      r
    ];
  }
  const Hu = (t, e, s) => t >>> s, Vu = (t, e, s) => t << 32 - s | e >>> s, $n = (t, e, s) => t >>> s | e << 32 - s, Un = (t, e, s) => t << 32 - s | e >>> s, Fi = (t, e, s) => t << 64 - s | e >>> s - 32, qi = (t, e, s) => t >>> s - 32 | e << 64 - s, MN = (t, e) => e, FN = (t, e) => t, qN = (t, e, s) => t << s | e >>> 32 - s, jN = (t, e, s) => e << s | t >>> 32 - s, WN = (t, e, s) => e << s - 32 | t >>> 64 - s, HN = (t, e, s) => t << s - 32 | e >>> 64 - s;
  function ws(t, e, s, n) {
    const r = (e >>> 0) + (n >>> 0);
    return {
      h: t + s + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const Ud = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), Bd = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, VN = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), zN = (t, e, s, n, r) => e + s + n + r + (t / 2 ** 32 | 0) | 0, KN = (t, e, s, n, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0), GN = (t, e, s, n, r, i) => e + s + n + r + i + (t / 2 ** 32 | 0) | 0, jr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function za(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Gn(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Ns(t, ...e) {
    if (!za(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Nm(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    Gn(t.outputLen), Gn(t.blockLen);
  }
  function Yn(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function Dd(t, e) {
    Ns(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function io(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function Ss(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function Uc(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function Os(t, e) {
    return t << 32 - e | t >>> e;
  }
  const Sm = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function _m(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Zs = Sm ? (t) => t : (t) => _m(t);
  function YN(t) {
    for (let e = 0; e < t.length; e++) t[e] = _m(t[e]);
    return t;
  }
  const Bn = Sm ? (t) => t : YN, Tm = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", ZN = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function ni(t) {
    if (Ns(t), Tm) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += ZN[t[s]];
    return e;
  }
  const zs = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function zu(t) {
    if (t >= zs._0 && t <= zs._9) return t - zs._0;
    if (t >= zs.A && t <= zs.F) return t - (zs.A - 10);
    if (t >= zs.a && t <= zs.f) return t - (zs.a - 10);
  }
  function Ca(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Tm) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = zu(t.charCodeAt(i)), a = zu(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function xm(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function hn(t) {
    return typeof t == "string" && (t = xm(t)), Ns(t), t;
  }
  function Ln(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Ns(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  let Ka = class {
  };
  function Co(t) {
    const e = (n) => t().update(hn(n)).digest(), s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
  }
  function JN(t) {
    const e = (n, r) => t(r).update(hn(n)).digest(), s = t({});
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  function Ld(t = 32) {
    if (jr && typeof jr.getRandomValues == "function") return jr.getRandomValues(new Uint8Array(t));
    if (jr && typeof jr.randomBytes == "function") return Uint8Array.from(jr.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const XN = BigInt(0), Ti = BigInt(1), QN = BigInt(2), eS = BigInt(7), tS = BigInt(256), sS = BigInt(113), Om = [], km = [], Pm = [];
  for (let t = 0, e = Ti, s = 1, n = 0; t < 24; t++) {
    [s, n] = [
      n,
      (2 * s + 3 * n) % 5
    ], Om.push(2 * (5 * n + s)), km.push((t + 1) * (t + 2) / 2 % 64);
    let r = XN;
    for (let i = 0; i < 7; i++) e = (e << Ti ^ (e >> eS) * sS) % tS, e & QN && (r ^= Ti << (Ti << BigInt(i)) - Ti);
    Pm.push(r);
  }
  const Rm = Im(Pm, true), nS = Rm[0], rS = Rm[1], Ku = (t, e, s) => s > 32 ? WN(t, e, s) : qN(t, e, s), Gu = (t, e, s) => s > 32 ? HN(t, e, s) : jN(t, e, s);
  function iS(t, e = 24) {
    const s = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], h = Ku(l, d, 1) ^ s[a], u = Gu(l, d, 1) ^ s[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= h, t[o + f + 1] ^= u;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = km[o], c = Ku(r, i, a), l = Gu(r, i, a), d = Om[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) s[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
      }
      t[0] ^= nS[n], t[1] ^= rS[n];
    }
    Ss(s);
  }
  class Md extends Ka {
    constructor(e, s, n, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = r, this.rounds = i, Gn(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = io(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Bn(this.state32), iS(this.state32, this.rounds), Bn(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      Yn(this), e = hn(e), Ns(e);
      const { blockLen: s, state: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(s - this.pos, r - i);
        for (let a = 0; a < o; a++) n[this.pos++] ^= e[i++];
        this.pos === s && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: s, pos: n, blockLen: r } = this;
      e[n] ^= s, (s & 128) !== 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      Yn(this, false), Ns(e), this.finish();
      const s = this.state, { blockLen: n } = this;
      for (let r = 0, i = e.length; r < i; ) {
        this.posOut >= n && this.keccak();
        const o = Math.min(n - this.posOut, i - r);
        e.set(s.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return Gn(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Dd(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, Ss(this.state);
    }
    _cloneInto(e) {
      const { blockLen: s, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new Md(s, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  }
  const oS = (t, e, s) => Co(() => new Md(e, t, s)), aS = oS(1, 136, 256 / 8);
  function cS(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i), c = n ? 4 : 0, l = n ? 0 : 4;
    t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
  }
  function lS(t, e, s) {
    return t & e ^ ~t & s;
  }
  function dS(t, e, s) {
    return t & e ^ t & s ^ e & s;
  }
  class $m extends Ka {
    constructor(e, s, n, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Uc(this.buffer);
    }
    update(e) {
      Yn(this), e = hn(e), Ns(e);
      const { view: s, buffer: n, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = Uc(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(s, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      Yn(this), Dd(e, this), this.finished = true;
      const { buffer: s, view: n, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      s[o++] = 128, Ss(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(n, 0), o = 0);
      for (let h = o; h < r; h++) s[h] = 0;
      cS(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = Uc(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let h = 0; h < l; h++) a.setUint32(4 * h, d[h], i);
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      const { blockLen: s, buffer: n, length: r, finished: i, destroyed: o, pos: a } = this;
      return e.destroyed = o, e.finished = i, e.length = r, e.pos = a, r % s && e.buffer.set(n), e;
    }
    clone() {
      return this._cloneInto();
    }
  }
  const An = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), ft = Uint32Array.from([
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ]), pt = Uint32Array.from([
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ]), hS = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), In = new Uint32Array(64);
  class uS extends $m {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = An[0] | 0, this.B = An[1] | 0, this.C = An[2] | 0, this.D = An[3] | 0, this.E = An[4] | 0, this.F = An[5] | 0, this.G = An[6] | 0, this.H = An[7] | 0;
    }
    get() {
      const { A: e, B: s, C: n, D: r, E: i, F: o, G: a, H: c } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c
      ];
    }
    set(e, s, n, r, i, o, a, c) {
      this.A = e | 0, this.B = s | 0, this.C = n | 0, this.D = r | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
    }
    process(e, s) {
      for (let h = 0; h < 16; h++, s += 4) In[h] = e.getUint32(s, false);
      for (let h = 16; h < 64; h++) {
        const u = In[h - 15], f = In[h - 2], g = Os(u, 7) ^ Os(u, 18) ^ u >>> 3, p = Os(f, 17) ^ Os(f, 19) ^ f >>> 10;
        In[h] = p + In[h - 7] + g + In[h - 16] | 0;
      }
      let { A: n, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let h = 0; h < 64; h++) {
        const u = Os(a, 6) ^ Os(a, 11) ^ Os(a, 25), f = d + u + lS(a, c, l) + hS[h] + In[h] | 0, g = (Os(n, 2) ^ Os(n, 13) ^ Os(n, 22)) + dS(n, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = n, n = f + g | 0;
      }
      n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, r, i, o, a, c, l, d);
    }
    roundClean() {
      Ss(In);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), Ss(this.buffer);
    }
  }
  const Um = Im([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((t) => BigInt(t))), fS = Um[0], pS = Um[1], Nn = new Uint32Array(80), Sn = new Uint32Array(80);
  class Fd extends $m {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = pt[0] | 0, this.Al = pt[1] | 0, this.Bh = pt[2] | 0, this.Bl = pt[3] | 0, this.Ch = pt[4] | 0, this.Cl = pt[5] | 0, this.Dh = pt[6] | 0, this.Dl = pt[7] | 0, this.Eh = pt[8] | 0, this.El = pt[9] | 0, this.Fh = pt[10] | 0, this.Fl = pt[11] | 0, this.Gh = pt[12] | 0, this.Gl = pt[13] | 0, this.Hh = pt[14] | 0, this.Hl = pt[15] | 0;
    }
    get() {
      const { Ah: e, Al: s, Bh: n, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: h, Fl: u, Gh: f, Gl: g, Hh: p, Hl: m } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, m) {
      this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = h | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = m | 0;
    }
    process(e, s) {
      for (let A = 0; A < 16; A++, s += 4) Nn[A] = e.getUint32(s), Sn[A] = e.getUint32(s += 4);
      for (let A = 16; A < 80; A++) {
        const N = Nn[A - 15] | 0, P = Sn[A - 15] | 0, U = $n(N, P, 1) ^ $n(N, P, 8) ^ Hu(N, P, 7), B = Un(N, P, 1) ^ Un(N, P, 8) ^ Vu(N, P, 7), L = Nn[A - 2] | 0, O = Sn[A - 2] | 0, D = $n(L, O, 19) ^ Fi(L, O, 61) ^ Hu(L, O, 6), M = Un(L, O, 19) ^ qi(L, O, 61) ^ Vu(L, O, 6), _ = VN(B, M, Sn[A - 7], Sn[A - 16]), y = zN(_, U, D, Nn[A - 7], Nn[A - 16]);
        Nn[A] = y | 0, Sn[A] = _ | 0;
      }
      let { Ah: n, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: h, El: u, Fh: f, Fl: g, Gh: p, Gl: m, Hh: T, Hl: x } = this;
      for (let A = 0; A < 80; A++) {
        const N = $n(h, u, 14) ^ $n(h, u, 18) ^ Fi(h, u, 41), P = Un(h, u, 14) ^ Un(h, u, 18) ^ qi(h, u, 41), U = h & f ^ ~h & p, B = u & g ^ ~u & m, L = KN(x, P, B, pS[A], Sn[A]), O = GN(L, T, N, U, fS[A], Nn[A]), D = L | 0, M = $n(n, r, 28) ^ Fi(n, r, 34) ^ Fi(n, r, 39), _ = Un(n, r, 28) ^ qi(n, r, 34) ^ qi(n, r, 39), y = n & i ^ n & a ^ i & a, E = r & o ^ r & c ^ o & c;
        T = p | 0, x = m | 0, p = f | 0, m = g | 0, f = h | 0, g = u | 0, { h, l: u } = ws(l | 0, d | 0, O | 0, D | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = n | 0, o = r | 0;
        const w = Ud(D, _, E);
        n = Bd(w, O, M, y), r = w | 0;
      }
      ({ h: n, l: r } = ws(this.Ah | 0, this.Al | 0, n | 0, r | 0)), { h: i, l: o } = ws(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = ws(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = ws(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h, l: u } = ws(this.Eh | 0, this.El | 0, h | 0, u | 0), { h: f, l: g } = ws(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: m } = ws(this.Gh | 0, this.Gl | 0, p | 0, m | 0), { h: T, l: x } = ws(this.Hh | 0, this.Hl | 0, T | 0, x | 0), this.set(n, r, i, o, a, c, l, d, h, u, f, g, p, m, T, x);
    }
    roundClean() {
      Ss(Nn, Sn);
    }
    destroy() {
      Ss(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  class gS extends Fd {
    constructor() {
      super(48), this.Ah = ft[0] | 0, this.Al = ft[1] | 0, this.Bh = ft[2] | 0, this.Bl = ft[3] | 0, this.Ch = ft[4] | 0, this.Cl = ft[5] | 0, this.Dh = ft[6] | 0, this.Dl = ft[7] | 0, this.Eh = ft[8] | 0, this.El = ft[9] | 0, this.Fh = ft[10] | 0, this.Fl = ft[11] | 0, this.Gh = ft[12] | 0, this.Gl = ft[13] | 0, this.Hh = ft[14] | 0, this.Hl = ft[15] | 0;
    }
  }
  const gt = Uint32Array.from([
    573645204,
    4230739756,
    2673172387,
    3360449730,
    596883563,
    1867755857,
    2520282905,
    1497426621,
    2519219938,
    2827943907,
    3193839141,
    1401305490,
    721525244,
    746961066,
    246885852,
    2177182882
  ]);
  class mS extends Fd {
    constructor() {
      super(32), this.Ah = gt[0] | 0, this.Al = gt[1] | 0, this.Bh = gt[2] | 0, this.Bl = gt[3] | 0, this.Ch = gt[4] | 0, this.Cl = gt[5] | 0, this.Dh = gt[6] | 0, this.Dl = gt[7] | 0, this.Eh = gt[8] | 0, this.El = gt[9] | 0, this.Fh = gt[10] | 0, this.Fl = gt[11] | 0, this.Gh = gt[12] | 0, this.Gl = gt[13] | 0, this.Hh = gt[14] | 0, this.Hl = gt[15] | 0;
    }
  }
  const Ga = Co(() => new uS()), wS = Co(() => new Fd()), yS = Co(() => new gS()), bS = Co(() => new mS()), ES = Uint8Array.from([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9,
    12,
    5,
    1,
    15,
    14,
    13,
    4,
    10,
    0,
    7,
    6,
    3,
    9,
    2,
    8,
    11,
    13,
    11,
    7,
    14,
    12,
    1,
    3,
    9,
    5,
    0,
    15,
    4,
    8,
    6,
    2,
    10,
    6,
    15,
    14,
    9,
    11,
    3,
    0,
    8,
    12,
    2,
    13,
    7,
    1,
    4,
    10,
    5,
    10,
    2,
    8,
    4,
    7,
    6,
    1,
    5,
    15,
    11,
    9,
    14,
    3,
    12,
    13,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9
  ]), Ke = Uint32Array.from([
    4089235720,
    1779033703,
    2227873595,
    3144134277,
    4271175723,
    1013904242,
    1595750129,
    2773480762,
    2917565137,
    1359893119,
    725511199,
    2600822924,
    4215389547,
    528734635,
    327033209,
    1541459225
  ]), se = new Uint32Array(32);
  function _n(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = se[2 * t], l = se[2 * t + 1], d = se[2 * e], h = se[2 * e + 1], u = se[2 * s], f = se[2 * s + 1], g = se[2 * n], p = se[2 * n + 1], m = Ud(c, d, o);
    l = Bd(m, l, h, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: MN(p, g),
      Dl: FN(p)
    }, { h: f, l: u } = ws(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: $n(h, d, 24),
      Bl: Un(h, d, 24)
    }, se[2 * t] = c, se[2 * t + 1] = l, se[2 * e] = d, se[2 * e + 1] = h, se[2 * s] = u, se[2 * s + 1] = f, se[2 * n] = g, se[2 * n + 1] = p;
  }
  function Tn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = se[2 * t], l = se[2 * t + 1], d = se[2 * e], h = se[2 * e + 1], u = se[2 * s], f = se[2 * s + 1], g = se[2 * n], p = se[2 * n + 1], m = Ud(c, d, o);
    l = Bd(m, l, h, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: $n(p, g, 16),
      Dl: Un(p, g, 16)
    }, { h: f, l: u } = ws(f, u, p, g), { Bh: h, Bl: d } = {
      Bh: h ^ f,
      Bl: d ^ u
    }, { Bh: h, Bl: d } = {
      Bh: Fi(h, d, 63),
      Bl: qi(h, d, 63)
    }, se[2 * t] = c, se[2 * t + 1] = l, se[2 * e] = d, se[2 * e + 1] = h, se[2 * s] = u, se[2 * s + 1] = f, se[2 * n] = g, se[2 * n + 1] = p;
  }
  function vS(t, e = {}, s, n, r) {
    if (Gn(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > s)) throw new Error("key length must be undefined or 1.." + s);
    if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  class CS extends Ka {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, Gn(e), Gn(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = io(this.buffer);
    }
    update(e) {
      Yn(this), e = hn(e), Ns(e);
      const { blockLen: s, buffer: n, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s && (Bn(r), this.compress(r, 0, false), Bn(r), this.pos = 0);
        const l = Math.min(s - this.pos, i - c), d = o + c;
        if (l === s && !(d % 4) && c + l < i) {
          const h = new Uint32Array(a, d, Math.floor((i - c) / 4));
          Bn(h);
          for (let u = 0; c + s < i; u += r.length, c += s) this.length += s, this.compress(h, u, false);
          Bn(h);
          continue;
        }
        n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      Yn(this), Dd(e, this);
      const { pos: s, buffer32: n } = this;
      this.finished = true, Ss(this.buffer.subarray(s)), Bn(n), this.compress(n, 0, true), Bn(n);
      const r = io(e);
      this.get().forEach((i, o) => r[o] = Zs(i));
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      const { buffer: s, length: n, finished: r, destroyed: i, outputLen: o, pos: a } = this;
      return e || (e = new this.constructor({
        dkLen: o
      })), e.set(...this.get()), e.buffer.set(s), e.destroyed = i, e.finished = r, e.length = n, e.pos = a, e.outputLen = o, e;
    }
    clone() {
      return this._cloneInto();
    }
  }
  class AS extends CS {
    constructor(e = {}) {
      const s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s), this.v0l = Ke[0] | 0, this.v0h = Ke[1] | 0, this.v1l = Ke[2] | 0, this.v1h = Ke[3] | 0, this.v2l = Ke[4] | 0, this.v2h = Ke[5] | 0, this.v3l = Ke[6] | 0, this.v3h = Ke[7] | 0, this.v4l = Ke[8] | 0, this.v4h = Ke[9] | 0, this.v5l = Ke[10] | 0, this.v5h = Ke[11] | 0, this.v6l = Ke[12] | 0, this.v6h = Ke[13] | 0, this.v7l = Ke[14] | 0, this.v7h = Ke[15] | 0, vS(s, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e, o = 0;
      if (n !== void 0 && (n = hn(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = hn(i);
        const a = io(i);
        this.v4l ^= Zs(a[0]), this.v4h ^= Zs(a[1]), this.v5l ^= Zs(a[2]), this.v5h ^= Zs(a[3]);
      }
      if (r !== void 0) {
        r = hn(r);
        const a = io(r);
        this.v6l ^= Zs(a[0]), this.v6h ^= Zs(a[1]), this.v7l ^= Zs(a[2]), this.v7h ^= Zs(a[3]);
      }
      if (n !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(n), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: s, v1l: n, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: h, v5h: u, v6l: f, v6h: g, v7l: p, v7h: m } = this;
      return [
        e,
        s,
        n,
        r,
        i,
        o,
        a,
        c,
        l,
        d,
        h,
        u,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, h, u, f, g, p, m) {
      this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = h | 0, this.v5h = u | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = m | 0;
    }
    compress(e, s, n) {
      this.get().forEach((c, l) => se[l] = c), se.set(Ke, 16);
      let { h: r, l: i } = Am(BigInt(this.length));
      se[24] = Ke[8] ^ i, se[25] = Ke[9] ^ r, n && (se[28] = ~se[28], se[29] = ~se[29]);
      let o = 0;
      const a = ES;
      for (let c = 0; c < 12; c++) _n(0, 4, 8, 12, e, s + 2 * a[o++]), Tn(0, 4, 8, 12, e, s + 2 * a[o++]), _n(1, 5, 9, 13, e, s + 2 * a[o++]), Tn(1, 5, 9, 13, e, s + 2 * a[o++]), _n(2, 6, 10, 14, e, s + 2 * a[o++]), Tn(2, 6, 10, 14, e, s + 2 * a[o++]), _n(3, 7, 11, 15, e, s + 2 * a[o++]), Tn(3, 7, 11, 15, e, s + 2 * a[o++]), _n(0, 5, 10, 15, e, s + 2 * a[o++]), Tn(0, 5, 10, 15, e, s + 2 * a[o++]), _n(1, 6, 11, 12, e, s + 2 * a[o++]), Tn(1, 6, 11, 12, e, s + 2 * a[o++]), _n(2, 7, 8, 13, e, s + 2 * a[o++]), Tn(2, 7, 8, 13, e, s + 2 * a[o++]), _n(3, 4, 9, 14, e, s + 2 * a[o++]), Tn(3, 4, 9, 14, e, s + 2 * a[o++]);
      this.v0l ^= se[0] ^ se[16], this.v0h ^= se[1] ^ se[17], this.v1l ^= se[2] ^ se[18], this.v1h ^= se[3] ^ se[19], this.v2l ^= se[4] ^ se[20], this.v2h ^= se[5] ^ se[21], this.v3l ^= se[6] ^ se[22], this.v3h ^= se[7] ^ se[23], this.v4l ^= se[8] ^ se[24], this.v4h ^= se[9] ^ se[25], this.v5l ^= se[10] ^ se[26], this.v5h ^= se[11] ^ se[27], this.v6l ^= se[12] ^ se[28], this.v6h ^= se[13] ^ se[29], this.v7l ^= se[14] ^ se[30], this.v7h ^= se[15] ^ se[31], Ss(se);
    }
    destroy() {
      this.destroyed = true, Ss(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const IS = JN((t) => new AS(t)), NS = "https://rpc.walletconnect.org/v1";
  function Bm(t) {
    const e = `Ethereum Signed Message:
${t.length}`, s = new TextEncoder().encode(e + t);
    return "0x" + Ae.from(aS(s)).toString("hex");
  }
  async function SS(t, e, s, n, r, i) {
    switch (s.t) {
      case "eip191":
        return await _S(t, e, s.s);
      case "eip1271":
        return await TS(t, e, s.s, n, r, i);
      default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`);
    }
  }
  function _S(t, e, s) {
    const n = cN(s);
    return fN({
      payload: Bm(e),
      signature: n
    }).toLowerCase() === t.toLowerCase();
  }
  async function TS(t, e, s, n, r, i) {
    const o = dn(n);
    if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${n}`);
    try {
      const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", l = s.substring(2), d = (l.length / 2).toString(16).padStart(64, "0"), h = (e.startsWith("0x") ? e : Bm(e)).substring(2), u = a + h + c + d + l, f = await fetch(`${i || NS}/?chainId=${n}&projectId=${r}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          id: xS(),
          jsonrpc: "2.0",
          method: "eth_call",
          params: [
            {
              to: t,
              data: u
            },
            "latest"
          ]
        })
      }), { result: g } = await f.json();
      return g ? g.slice(0, a.length).toLowerCase() === a.toLowerCase() : false;
    } catch (a) {
      return console.error("isValidEip1271Signature: ", a), false;
    }
  }
  function xS() {
    return Date.now() + Math.floor(Math.random() * 1e3);
  }
  function OS(t) {
    const e = atob(t), s = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
    const n = s[0];
    if (n === 0) throw new Error("No signatures found");
    const r = 1 + n * 64;
    if (s.length < r) throw new Error("Transaction data too short for claimed signature count");
    if (s.length < 100) throw new Error("Transaction too short");
    const i = Ae.from(t, "base64").slice(1, 65);
    return vo.encode(i);
  }
  function kS(t) {
    const e = new Uint8Array(Ae.from(t, "base64")), s = Array.from("TransactionData::").map((i) => i.charCodeAt(0)), n = new Uint8Array(s.length + e.length);
    n.set(s), n.set(e, s.length);
    const r = IS(n, {
      dkLen: 32
    });
    return vo.encode(r);
  }
  function Yu(t) {
    const e = new Uint8Array(Ga(PS(t)));
    return vo.encode(e);
  }
  function PS(t) {
    if (t instanceof Uint8Array) return t;
    if (Array.isArray(t)) return new Uint8Array(t);
    if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
    if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
    throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
  }
  function Zu(t) {
    const e = Ae.from(t, "base64"), s = fb(e).txn;
    if (!s) throw new Error("Invalid signed transaction: missing 'txn' field");
    const n = ib(s), r = Ae.from("TX"), i = Ae.concat([
      r,
      Ae.from(n)
    ]), o = bS(i);
    return ly.encode(o).replace(/=+$/, "");
  }
  function Bc(t) {
    const e = [];
    let s = BigInt(t);
    for (; s >= BigInt(128); ) e.push(Number(s & BigInt(127) | BigInt(128))), s >>= BigInt(7);
    return e.push(Number(s)), Ae.from(e);
  }
  function RS(t) {
    const e = Ae.from(t.signed.bodyBytes, "base64"), s = Ae.from(t.signed.authInfoBytes, "base64"), n = Ae.from(t.signature.signature, "base64"), r = [];
    r.push(Ae.from([
      10
    ])), r.push(Bc(e.length)), r.push(e), r.push(Ae.from([
      18
    ])), r.push(Bc(s.length)), r.push(s), r.push(Ae.from([
      26
    ])), r.push(Bc(n.length)), r.push(n);
    const i = Ae.concat(r), o = Ga(i);
    return Ae.from(o).toString("hex").toUpperCase();
  }
  function $S(t) {
    var e, s;
    const n = [];
    try {
      if (typeof t == "string") return n.push(t), n;
      if (typeof t != "object") return n;
      t != null && t.id && n.push(t.id);
      const r = (s = (e = t == null ? void 0 : t.capabilities) == null ? void 0 : e.caip345) == null ? void 0 : s.transactionHashes;
      r && n.push(...r);
    } catch (r) {
      console.warn("getWalletSendCallsHashes failed: ", r);
    }
    return n;
  }
  var US = Object.defineProperty, BS = Object.defineProperties, DS = Object.getOwnPropertyDescriptors, Ju = Object.getOwnPropertySymbols, LS = Object.prototype.hasOwnProperty, MS = Object.prototype.propertyIsEnumerable, Xu = (t, e, s) => e in t ? US(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, FS = (t, e) => {
    for (var s in e || (e = {})) LS.call(e, s) && Xu(t, s, e[s]);
    if (Ju) for (var s of Ju(e)) MS.call(e, s) && Xu(t, s, e[s]);
    return t;
  }, qS = (t, e) => BS(t, DS(e));
  const Dm = "did:pkh:", jS = {
    eip155: "Ethereum",
    solana: "Solana",
    bip122: "Bitcoin"
  }, WS = (t) => t ? jS[t] || t : "", Ya = (t) => t == null ? void 0 : t.split(":"), HS = (t) => {
    const e = t && Ya(t);
    if (e) return t.includes(Dm) ? e[3] : e[1];
  }, VS = (t) => {
    const e = t && Ya(t);
    if (e) return t.includes(Dm) ? e[2] : e[0];
  }, Hl = (t) => {
    const e = t && Ya(t);
    if (e) return e[2] + ":" + e[3];
  }, Aa = (t) => {
    const e = t && Ya(t);
    if (e) return e.pop();
  };
  async function Qu(t) {
    const { cacao: e, projectId: s } = t, { s: n, p: r } = e, i = Lm(r, r.iss), o = Aa(r.iss);
    return await SS(o, i, n, Hl(r.iss), s);
  }
  const Lm = (t, e) => {
    const s = VS(e);
    if (!s) throw new Error("Invalid issuer: " + e);
    const n = `${t.domain} wants you to sign in with your ${WS(s)} account:`, r = Aa(e);
    if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let i = t.statement || void 0;
    const o = `URI: ${t.aud || t.uri}`, a = `Version: ${t.version}`, c = `Chain ID: ${HS(e)}`, l = `Nonce: ${t.nonce}`, d = `Issued At: ${t.iat}`, h = t.exp ? `Expiration Time: ${t.exp}` : void 0, u = t.nbf ? `Not Before: ${t.nbf}` : void 0, f = t.requestId ? `Request ID: ${t.requestId}` : void 0, g = t.resources ? `Resources:${t.resources.map((m) => `
- ${m}`).join("")}` : void 0, p = sa(t.resources);
    if (p) {
      const m = oo(p);
      i = e_(i, m);
    }
    return [
      n,
      r,
      "",
      i,
      "",
      o,
      a,
      c,
      l,
      d,
      h,
      u,
      f,
      g
    ].filter((m) => m != null).join(`
`);
  };
  function zS(t) {
    return Ae.from(JSON.stringify(t)).toString("base64");
  }
  function KS(t) {
    return JSON.parse(Ae.from(t, "base64").toString("utf-8"));
  }
  function Nr(t) {
    if (!t) throw new Error("No recap provided, value is undefined");
    if (!t.att) throw new Error("No `att` property found");
    const e = Object.keys(t.att);
    if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
    e.forEach((s) => {
      const n = t.att[s];
      if (Array.isArray(n)) throw new Error(`Resource must be an object: ${s}`);
      if (typeof n != "object") throw new Error(`Resource must be an object: ${s}`);
      if (!Object.keys(n).length) throw new Error(`Resource object is empty: ${s}`);
      Object.keys(n).forEach((r) => {
        const i = n[r];
        if (!Array.isArray(i)) throw new Error(`Ability limits ${r} must be an array of objects, found: ${i}`);
        if (!i.length) throw new Error(`Value of ${r} is empty array, must be an array with objects`);
        i.forEach((o) => {
          if (typeof o != "object") throw new Error(`Ability limits (${r}) must be an array of objects, found: ${o}`);
        });
      });
    });
  }
  function GS(t, e, s, n = {}) {
    return s == null ? void 0 : s.sort((r, i) => r.localeCompare(i)), {
      att: {
        [t]: YS(e, s, n)
      }
    };
  }
  function YS(t, e, s = {}) {
    e = e == null ? void 0 : e.sort((r, i) => r.localeCompare(i));
    const n = e.map((r) => ({
      [`${t}/${r}`]: [
        s
      ]
    }));
    return Object.assign({}, ...n);
  }
  function Mm(t) {
    return Nr(t), `urn:recap:${zS(t).replace(/=/g, "")}`;
  }
  function oo(t) {
    const e = KS(t.replace("urn:recap:", ""));
    return Nr(e), e;
  }
  function ZS(t, e, s) {
    const n = GS(t, e, s);
    return Mm(n);
  }
  function JS(t) {
    return t && t.includes("urn:recap:");
  }
  function XS(t, e) {
    const s = oo(t), n = oo(e), r = QS(s, n);
    return Mm(r);
  }
  function QS(t, e) {
    Nr(t), Nr(e);
    const s = Object.keys(t.att).concat(Object.keys(e.att)).sort((r, i) => r.localeCompare(i)), n = {
      att: {}
    };
    return s.forEach((r) => {
      var i, o;
      Object.keys(((i = t.att) == null ? void 0 : i[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
        var c, l;
        n.att[r] = qS(FS({}, n.att[r]), {
          [a]: ((c = t.att[r]) == null ? void 0 : c[a]) || ((l = e.att[r]) == null ? void 0 : l[a])
        });
      });
    }), n;
  }
  function e_(t = "", e) {
    Nr(e);
    const s = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (t.includes(s)) return t;
    const n = [];
    let r = 0;
    Object.keys(e.att).forEach((a) => {
      const c = Object.keys(e.att[a]).map((h) => ({
        ability: h.split("/")[0],
        action: h.split("/")[1]
      }));
      c.sort((h, u) => h.action.localeCompare(u.action));
      const l = {};
      c.forEach((h) => {
        l[h.ability] || (l[h.ability] = []), l[h.ability].push(h.action);
      });
      const d = Object.keys(l).map((h) => (r++, `(${r}) '${h}': '${l[h].join("', '")}' for '${a}'.`));
      n.push(d.join(", ").replace(".,", "."));
    });
    const i = n.join(" "), o = `${s}${i}`;
    return `${t ? t + " " : ""}${o}`;
  }
  function ef(t) {
    var e;
    const s = oo(t);
    Nr(s);
    const n = (e = s.att) == null ? void 0 : e.eip155;
    return n ? Object.keys(n).map((r) => r.split("/")[1]) : [];
  }
  function tf(t) {
    const e = oo(t);
    Nr(e);
    const s = [];
    return Object.values(e.att).forEach((n) => {
      Object.values(n).forEach((r) => {
        var i;
        (i = r == null ? void 0 : r[0]) != null && i.chains && s.push(r[0].chains);
      });
    }), [
      ...new Set(s.flat())
    ];
  }
  function sa(t) {
    if (!t) return;
    const e = t == null ? void 0 : t[t.length - 1];
    return JS(e) ? e : void 0;
  }
  function Fm(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Vl(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function Dc(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Rt(t, ...e) {
    if (!Fm(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function sf(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function t_(t, e) {
    Rt(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function Wn(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function di(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function s_(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const n_ = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function r_(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function zl(t) {
    if (typeof t == "string") t = r_(t);
    else if (Fm(t)) t = Kl(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function i_(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function o_(t, e) {
    if (t.length !== e.length) return false;
    let s = 0;
    for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
    return s === 0;
  }
  const a_ = (t, e) => {
    function s(n, ...r) {
      if (Rt(n), !n_) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? Rt(l) : Rt(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && Rt(r[1]);
      const o = e(n, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          Rt(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, Rt(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (Rt(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(s, t), s;
  };
  function nf(t, e, s = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !l_(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function rf(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i);
    t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
  }
  function c_(t, e, s) {
    Vl(s);
    const n = new Uint8Array(16), r = s_(n);
    return rf(r, 0, BigInt(e), s), rf(r, 8, BigInt(t), s), n;
  }
  function l_(t) {
    return t.byteOffset % 4 === 0;
  }
  function Kl(t) {
    return Uint8Array.from(t);
  }
  const qm = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), d_ = qm("expand 16-byte k"), h_ = qm("expand 32-byte k"), u_ = Wn(d_), f_ = Wn(h_);
  function Se(t, e) {
    return t << e | t >>> 32 - e;
  }
  function Gl(t) {
    return t.byteOffset % 4 === 0;
  }
  const Mo = 64, p_ = 16, jm = 2 ** 32 - 1, of = new Uint32Array();
  function g_(t, e, s, n, r, i, o, a) {
    const c = r.length, l = new Uint8Array(Mo), d = Wn(l), h = Gl(r) && Gl(i), u = h ? Wn(r) : of, f = h ? Wn(i) : of;
    for (let g = 0; g < c; o++) {
      if (t(e, s, n, d, o, a), o >= jm) throw new Error("arx: counter overflow");
      const p = Math.min(Mo, c - g);
      if (h && p === Mo) {
        const m = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let T = 0, x; T < p_; T++) x = m + T, f[x] = u[x] ^ d[T];
        g += Mo;
        continue;
      }
      for (let m = 0, T; m < p; m++) T = g + m, i[T] = r[T] ^ l[m];
      g += p;
    }
  }
  function m_(t, e) {
    const { allowShortKeys: s, extendNonceFn: n, counterLength: r, counterRight: i, rounds: o } = i_({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return Dc(r), Dc(o), Vl(i), Vl(s), (a, c, l, d, h = 0) => {
      Rt(a), Rt(c), Rt(l);
      const u = l.length;
      if (d === void 0 && (d = new Uint8Array(u)), Rt(d), Dc(h), h < 0 || h >= jm) throw new Error("arx: counter overflow");
      if (d.length < u) throw new Error(`arx: output (${d.length}) is shorter than data (${u})`);
      const f = [];
      let g = a.length, p, m;
      if (g === 32) f.push(p = Kl(a)), m = f_;
      else if (g === 16 && s) p = new Uint8Array(32), p.set(a), p.set(a, 16), m = u_, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      Gl(c) || f.push(c = Kl(c));
      const T = Wn(p);
      if (n) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        n(m, T, Wn(c.subarray(0, 16)), T), c = c.subarray(16);
      }
      const x = 16 - r;
      if (x !== c.length) throw new Error(`arx: nonce must be ${x} or 16 bytes`);
      if (x !== 12) {
        const N = new Uint8Array(12);
        N.set(c, i ? 0 : 12 - c.length), c = N, f.push(c);
      }
      const A = Wn(c);
      return g_(t, m, T, A, l, d, h, o), di(...f), d;
    };
  }
  const st = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  class w_ {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = zl(e), Rt(e, 32);
      const s = st(e, 0), n = st(e, 2), r = st(e, 4), i = st(e, 6), o = st(e, 8), a = st(e, 10), c = st(e, 12), l = st(e, 14);
      this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = st(e, 16 + 2 * d);
    }
    process(e, s, n = false) {
      const r = n ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], h = o[4], u = o[5], f = o[6], g = o[7], p = o[8], m = o[9], T = st(e, s + 0), x = st(e, s + 2), A = st(e, s + 4), N = st(e, s + 6), P = st(e, s + 8), U = st(e, s + 10), B = st(e, s + 12), L = st(e, s + 14);
      let O = i[0] + (T & 8191), D = i[1] + ((T >>> 13 | x << 3) & 8191), M = i[2] + ((x >>> 10 | A << 6) & 8191), _ = i[3] + ((A >>> 7 | N << 9) & 8191), y = i[4] + ((N >>> 4 | P << 12) & 8191), E = i[5] + (P >>> 1 & 8191), w = i[6] + ((P >>> 14 | U << 2) & 8191), v = i[7] + ((U >>> 11 | B << 5) & 8191), I = i[8] + ((B >>> 8 | L << 8) & 8191), k = i[9] + (L >>> 5 | r), C = 0, S = C + O * a + D * (5 * m) + M * (5 * p) + _ * (5 * g) + y * (5 * f);
      C = S >>> 13, S &= 8191, S += E * (5 * u) + w * (5 * h) + v * (5 * d) + I * (5 * l) + k * (5 * c), C += S >>> 13, S &= 8191;
      let R = C + O * c + D * a + M * (5 * m) + _ * (5 * p) + y * (5 * g);
      C = R >>> 13, R &= 8191, R += E * (5 * f) + w * (5 * u) + v * (5 * h) + I * (5 * d) + k * (5 * l), C += R >>> 13, R &= 8191;
      let $ = C + O * l + D * c + M * a + _ * (5 * m) + y * (5 * p);
      C = $ >>> 13, $ &= 8191, $ += E * (5 * g) + w * (5 * f) + v * (5 * u) + I * (5 * h) + k * (5 * d), C += $ >>> 13, $ &= 8191;
      let Y = C + O * d + D * l + M * c + _ * a + y * (5 * m);
      C = Y >>> 13, Y &= 8191, Y += E * (5 * p) + w * (5 * g) + v * (5 * f) + I * (5 * u) + k * (5 * h), C += Y >>> 13, Y &= 8191;
      let K = C + O * h + D * d + M * l + _ * c + y * a;
      C = K >>> 13, K &= 8191, K += E * (5 * m) + w * (5 * p) + v * (5 * g) + I * (5 * f) + k * (5 * u), C += K >>> 13, K &= 8191;
      let j = C + O * u + D * h + M * d + _ * l + y * c;
      C = j >>> 13, j &= 8191, j += E * a + w * (5 * m) + v * (5 * p) + I * (5 * g) + k * (5 * f), C += j >>> 13, j &= 8191;
      let J = C + O * f + D * u + M * h + _ * d + y * l;
      C = J >>> 13, J &= 8191, J += E * c + w * a + v * (5 * m) + I * (5 * p) + k * (5 * g), C += J >>> 13, J &= 8191;
      let Z = C + O * g + D * f + M * u + _ * h + y * d;
      C = Z >>> 13, Z &= 8191, Z += E * l + w * c + v * a + I * (5 * m) + k * (5 * p), C += Z >>> 13, Z &= 8191;
      let de = C + O * p + D * g + M * f + _ * u + y * h;
      C = de >>> 13, de &= 8191, de += E * d + w * l + v * c + I * a + k * (5 * m), C += de >>> 13, de &= 8191;
      let X = C + O * m + D * p + M * g + _ * f + y * u;
      C = X >>> 13, X &= 8191, X += E * h + w * d + v * l + I * c + k * a, C += X >>> 13, X &= 8191, C = (C << 2) + C | 0, C = C + S | 0, S = C & 8191, C = C >>> 13, R += C, i[0] = S, i[1] = R, i[2] = $, i[3] = Y, i[4] = K, i[5] = j, i[6] = J, i[7] = Z, i[8] = de, i[9] = X;
    }
    finalize() {
      const { h: e, pad: s } = this, n = new Uint16Array(10);
      let r = e[1] >>> 13;
      e[1] &= 8191;
      for (let a = 2; a < 10; a++) e[a] += r, r = e[a] >>> 13, e[a] &= 8191;
      e[0] += r * 5, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, n[0] = e[0] + 5, r = n[0] >>> 13, n[0] &= 8191;
      for (let a = 1; a < 10; a++) n[a] = e[a] + r, r = n[a] >>> 13, n[a] &= 8191;
      n[9] -= 8192;
      let i = (r ^ 1) - 1;
      for (let a = 0; a < 10; a++) n[a] &= i;
      i = ~i;
      for (let a = 0; a < 10; a++) e[a] = e[a] & i | n[a];
      e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
      let o = e[0] + s[0];
      e[0] = o & 65535;
      for (let a = 1; a < 8; a++) o = (e[a] + s[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
      di(n);
    }
    update(e) {
      sf(this), e = zl(e), Rt(e);
      const { buffer: s, blockLen: n } = this, r = e.length;
      for (let i = 0; i < r; ) {
        const o = Math.min(n - this.pos, r - i);
        if (o === n) {
          for (; n <= r - i; i += n) this.process(e, i);
          continue;
        }
        s.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n && (this.process(s, 0, false), this.pos = 0);
      }
      return this;
    }
    destroy() {
      di(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      sf(this), t_(e, this), this.finished = true;
      const { buffer: s, h: n } = this;
      let { pos: r } = this;
      if (r) {
        for (s[r++] = 1; r < 16; r++) s[r] = 0;
        this.process(s, 0, true);
      }
      this.finalize();
      let i = 0;
      for (let o = 0; o < 8; o++) e[i++] = n[o] >>> 0, e[i++] = n[o] >>> 8;
      return e;
    }
    digest() {
      const { buffer: e, outputLen: s } = this;
      this.digestInto(e);
      const n = e.slice(0, s);
      return this.destroy(), n;
    }
  }
  function y_(t) {
    const e = (n, r) => t(r).update(zl(n)).digest(), s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  const b_ = y_((t) => new w_(t));
  function E_(t, e, s, n, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], h = e[1], u = e[2], f = e[3], g = e[4], p = e[5], m = e[6], T = e[7], x = r, A = s[0], N = s[1], P = s[2], U = o, B = a, L = c, O = l, D = d, M = h, _ = u, y = f, E = g, w = p, v = m, I = T, k = x, C = A, S = N, R = P;
    for (let Y = 0; Y < i; Y += 2) U = U + D | 0, k = Se(k ^ U, 16), E = E + k | 0, D = Se(D ^ E, 12), U = U + D | 0, k = Se(k ^ U, 8), E = E + k | 0, D = Se(D ^ E, 7), B = B + M | 0, C = Se(C ^ B, 16), w = w + C | 0, M = Se(M ^ w, 12), B = B + M | 0, C = Se(C ^ B, 8), w = w + C | 0, M = Se(M ^ w, 7), L = L + _ | 0, S = Se(S ^ L, 16), v = v + S | 0, _ = Se(_ ^ v, 12), L = L + _ | 0, S = Se(S ^ L, 8), v = v + S | 0, _ = Se(_ ^ v, 7), O = O + y | 0, R = Se(R ^ O, 16), I = I + R | 0, y = Se(y ^ I, 12), O = O + y | 0, R = Se(R ^ O, 8), I = I + R | 0, y = Se(y ^ I, 7), U = U + M | 0, R = Se(R ^ U, 16), v = v + R | 0, M = Se(M ^ v, 12), U = U + M | 0, R = Se(R ^ U, 8), v = v + R | 0, M = Se(M ^ v, 7), B = B + _ | 0, k = Se(k ^ B, 16), I = I + k | 0, _ = Se(_ ^ I, 12), B = B + _ | 0, k = Se(k ^ B, 8), I = I + k | 0, _ = Se(_ ^ I, 7), L = L + y | 0, C = Se(C ^ L, 16), E = E + C | 0, y = Se(y ^ E, 12), L = L + y | 0, C = Se(C ^ L, 8), E = E + C | 0, y = Se(y ^ E, 7), O = O + D | 0, S = Se(S ^ O, 16), w = w + S | 0, D = Se(D ^ w, 12), O = O + D | 0, S = Se(S ^ O, 8), w = w + S | 0, D = Se(D ^ w, 7);
    let $ = 0;
    n[$++] = o + U | 0, n[$++] = a + B | 0, n[$++] = c + L | 0, n[$++] = l + O | 0, n[$++] = d + D | 0, n[$++] = h + M | 0, n[$++] = u + _ | 0, n[$++] = f + y | 0, n[$++] = g + E | 0, n[$++] = p + w | 0, n[$++] = m + v | 0, n[$++] = T + I | 0, n[$++] = x + k | 0, n[$++] = A + C | 0, n[$++] = N + S | 0, n[$++] = P + R | 0;
  }
  const v_ = m_(E_, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), C_ = new Uint8Array(16), af = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update(C_.subarray(s));
  }, A_ = new Uint8Array(32);
  function cf(t, e, s, n, r) {
    const i = t(e, s, A_), o = b_.create(i);
    r && af(o, r), af(o, n);
    const a = c_(n.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return di(i, a), c;
  }
  const I_ = (t) => (e, s, n) => ({
    encrypt(r, i) {
      const o = r.length;
      i = nf(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      const c = cf(t, e, s, a, n);
      return i.set(c, o), di(c), i;
    },
    decrypt(r, i) {
      i = nf(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = cf(t, e, s, o, n);
      if (!o_(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, s, i, i, 1), di(c), i;
    }
  });
  a_({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, I_(v_));
  class Wm extends Ka {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, Nm(e);
      const n = hn(s);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), Ss(i);
    }
    update(e) {
      return Yn(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Yn(this), Ns(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
    }
    digest() {
      const e = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e), e;
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: s, iHash: n, finished: r, destroyed: i, blockLen: o, outputLen: a } = this;
      return e = e, e.finished = r, e.destroyed = i, e.blockLen = o, e.outputLen = a, e.oHash = s._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  const Hm = (t, e, s) => new Wm(t, e).update(s).digest();
  Hm.create = (t, e) => new Wm(t, e);
  Uint8Array.from([
    0
  ]);
  const Vm = Ga, qd = BigInt(0), Yl = BigInt(1);
  function Ia(t, e = "") {
    if (typeof t != "boolean") {
      const s = e && `"${e}"`;
      throw new Error(s + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function gr(t, e, s = "") {
    const n = za(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!n || i && r !== e) {
      const o = s && `"${s}" `, a = i ? ` of length ${e}` : "", c = n ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function Fo(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function zm(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? qd : BigInt("0x" + t);
  }
  function Za(t) {
    return zm(ni(t));
  }
  function Na(t) {
    return Ns(t), zm(ni(Uint8Array.from(t).reverse()));
  }
  function jd(t, e) {
    return Ca(t.toString(16).padStart(e * 2, "0"));
  }
  function Wd(t, e) {
    return jd(t, e).reverse();
  }
  function wt(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = Ca(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (za(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  const Lc = (t) => typeof t == "bigint" && qd <= t;
  function N_(t, e, s) {
    return Lc(t) && Lc(e) && Lc(s) && e <= t && t < s;
  }
  function Zl(t, e, s, n) {
    if (!N_(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function Km(t) {
    let e;
    for (e = 0; t > qd; t >>= Yl, e += 1) ;
    return e;
  }
  const Ao = (t) => (Yl << BigInt(t)) - Yl;
  function S_(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    const n = (u) => new Uint8Array(u), r = (u) => Uint8Array.of(u);
    let i = n(t), o = n(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...u) => s(o, i, ...u), d = (u = n(0)) => {
      o = l(r(0), u), i = l(), u.length !== 0 && (o = l(r(1), u), i = l());
    }, h = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let u = 0;
      const f = [];
      for (; u < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), u += i.length;
      }
      return Ln(...f);
    };
    return (u, f) => {
      c(), d(u);
      let g;
      for (; !(g = f(h())); ) d();
      return c(), g;
    };
  }
  function Ja(t, e, s = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function n(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => n(r, i, false)), Object.entries(s).forEach(([r, i]) => n(r, i, true));
  }
  function lf(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  const Dt = BigInt(0), _t = BigInt(1), mr = BigInt(2), Gm = BigInt(3), Ym = BigInt(4), Zm = BigInt(5), __ = BigInt(7), Jm = BigInt(8), T_ = BigInt(9), Xm = BigInt(16);
  function zt(t, e) {
    const s = t % e;
    return s >= Dt ? s : e + s;
  }
  function gs(t, e, s) {
    let n = t;
    for (; e-- > Dt; ) n *= n, n %= s;
    return n;
  }
  function df(t, e) {
    if (t === Dt) throw new Error("invert: expected non-zero number");
    if (e <= Dt) throw new Error("invert: expected positive modulus, got " + e);
    let s = zt(t, e), n = e, r = Dt, i = _t;
    for (; s !== Dt; ) {
      const o = n / s, a = n % s, c = r - i * o;
      n = s, s = a, r = i, i = c;
    }
    if (n !== _t) throw new Error("invert: does not exist");
    return zt(r, e);
  }
  function Hd(t, e, s) {
    if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
  }
  function Qm(t, e) {
    const s = (t.ORDER + _t) / Ym, n = t.pow(e, s);
    return Hd(t, n, e), n;
  }
  function x_(t, e) {
    const s = (t.ORDER - Zm) / Jm, n = t.mul(e, mr), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, mr), r), a = t.mul(i, t.sub(o, t.ONE));
    return Hd(t, a, e), a;
  }
  function O_(t) {
    const e = Jn(t), s = ew(t), n = s(e, e.neg(e.ONE)), r = s(e, n), i = s(e, e.neg(n)), o = (t + __) / Xm;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, n);
      const h = a.mul(l, r), u = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(h), c);
      l = a.cmov(l, d, f), d = a.cmov(u, h, g);
      const p = a.eql(a.sqr(d), c), m = a.cmov(l, d, p);
      return Hd(a, m, c), m;
    };
  }
  function ew(t) {
    if (t < Gm) throw new Error("sqrt is not defined for small field");
    let e = t - _t, s = 0;
    for (; e % mr === Dt; ) e /= mr, s++;
    let n = mr;
    const r = Jn(t);
    for (; hf(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return Qm;
    let i = r.pow(n, e);
    const o = (e + _t) / mr;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (hf(a, c) !== 1) throw new Error("Cannot find square root");
      let l = s, d = a.mul(a.ONE, i), h = a.pow(c, e), u = a.pow(c, o);
      for (; !a.eql(h, a.ONE); ) {
        if (a.is0(h)) return a.ZERO;
        let f = 1, g = a.sqr(h);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = _t << BigInt(l - f - 1), m = a.pow(d, p);
        l = f, d = a.sqr(m), h = a.mul(h, d), u = a.mul(u, m);
      }
      return u;
    };
  }
  function k_(t) {
    return t % Ym === Gm ? Qm : t % Jm === Zm ? x_ : t % Xm === T_ ? O_(t) : ew(t);
  }
  const P_ = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function R_(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, s = P_.reduce((n, r) => (n[r] = "function", n), e);
    return Ja(t, s), t;
  }
  function $_(t, e, s) {
    if (s < Dt) throw new Error("invalid exponent, negatives unsupported");
    if (s === Dt) return t.ONE;
    if (s === _t) return e;
    let n = t.ONE, r = e;
    for (; s > Dt; ) s & _t && (n = t.mul(n, r)), r = t.sqr(r), s >>= _t;
    return n;
  }
  function tw(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function hf(t, e) {
    const s = (t.ORDER - _t) / mr, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function sw(t, e) {
    e !== void 0 && Gn(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Jn(t, e, s = false, n = {}) {
    if (t <= Dt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
      const u = e;
      u.BITS && (r = u.BITS), u.sqrt && (i = u.sqrt), typeof u.isLE == "boolean" && (s = u.isLE), typeof u.modFromBytes == "boolean" && (o = u.modFromBytes), a = u.allowedLengths;
    } else typeof e == "number" && (r = e), n.sqrt && (i = n.sqrt);
    const { nBitLength: c, nByteLength: l } = sw(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const h = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: Ao(c),
      ZERO: Dt,
      ONE: _t,
      allowedLengths: a,
      create: (u) => zt(u, t),
      isValid: (u) => {
        if (typeof u != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof u);
        return Dt <= u && u < t;
      },
      is0: (u) => u === Dt,
      isValidNot0: (u) => !h.is0(u) && h.isValid(u),
      isOdd: (u) => (u & _t) === _t,
      neg: (u) => zt(-u, t),
      eql: (u, f) => u === f,
      sqr: (u) => zt(u * u, t),
      add: (u, f) => zt(u + f, t),
      sub: (u, f) => zt(u - f, t),
      mul: (u, f) => zt(u * f, t),
      pow: (u, f) => $_(h, u, f),
      div: (u, f) => zt(u * df(f, t), t),
      sqrN: (u) => u * u,
      addN: (u, f) => u + f,
      subN: (u, f) => u - f,
      mulN: (u, f) => u * f,
      inv: (u) => df(u, t),
      sqrt: i || ((u) => (d || (d = k_(t)), d(h, u))),
      toBytes: (u) => s ? Wd(u, l) : jd(u, l),
      fromBytes: (u, f = true) => {
        if (a) {
          if (!a.includes(u.length) || u.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + u.length);
          const p = new Uint8Array(l);
          p.set(u, s ? 0 : p.length - u.length), u = p;
        }
        if (u.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + u.length);
        let g = s ? Na(u) : Za(u);
        if (o && (g = zt(g, t)), !f && !h.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (u) => tw(h, u),
      cmov: (u, f, g) => g ? f : u
    });
    return Object.freeze(h);
  }
  function nw(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function rw(t) {
    const e = nw(t);
    return e + Math.ceil(e / 2);
  }
  function U_(t, e, s = false) {
    const n = t.length, r = nw(e), i = rw(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? Na(t) : Za(t), a = zt(o, e - _t) + _t;
    return s ? Wd(a, r) : jd(a, r);
  }
  const hi = BigInt(0), wr = BigInt(1);
  function Sa(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function Mc(t, e) {
    const s = tw(t.Fp, e.map((n) => n.Z));
    return e.map((n, r) => t.fromAffine(n.toAffine(s[r])));
  }
  function iw(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function Fc(t, e) {
    iw(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = Ao(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function uf(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += wr);
    const l = e * n, d = l + Math.abs(a) - 1, h = a === 0, u = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: h,
      isNeg: u,
      isNegF: f,
      offsetF: l
    };
  }
  function B_(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function D_(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const qc = /* @__PURE__ */ new WeakMap(), ow = /* @__PURE__ */ new WeakMap();
  function jc(t) {
    return ow.get(t) || 1;
  }
  function ff(t) {
    if (t !== hi) throw new Error("invalid wNAF");
  }
  class L_ {
    constructor(e, s) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
    }
    _unsafeLadder(e, s, n = this.ZERO) {
      let r = e;
      for (; s > hi; ) s & wr && (n = n.add(r)), r = r.double(), s >>= wr;
      return n;
    }
    precomputeWindow(e, s) {
      const { windows: n, windowSize: r } = Fc(s, this.bits), i = [];
      let o = e, a = o;
      for (let c = 0; c < n; c++) {
        a = o, i.push(a);
        for (let l = 1; l < r; l++) a = a.add(o), i.push(a);
        o = a.double();
      }
      return i;
    }
    wNAF(e, s, n) {
      if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
      let r = this.ZERO, i = this.BASE;
      const o = Fc(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: h, isNegF: u, offsetF: f } = uf(n, a, o);
        n = c, d ? i = i.add(Sa(u, s[f])) : r = r.add(Sa(h, s[l]));
      }
      return ff(n), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, s, n, r = this.ZERO) {
      const i = Fc(e, this.bits);
      for (let o = 0; o < i.windows && n !== hi; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = uf(n, o, i);
        if (n = a, !l) {
          const h = s[c];
          r = r.add(d ? h.negate() : h);
        }
      }
      return ff(n), r;
    }
    getPrecomputes(e, s, n) {
      let r = qc.get(s);
      return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (r = n(r)), qc.set(s, r))), r;
    }
    cached(e, s, n) {
      const r = jc(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), s);
    }
    unsafe(e, s, n, r) {
      const i = jc(e);
      return i === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), s, r);
    }
    createCache(e, s) {
      iw(s, this.bits), ow.set(e, s), qc.delete(e);
    }
    hasCache(e) {
      return jc(e) !== 1;
    }
  }
  function M_(t, e, s, n) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; s > hi || n > hi; ) s & wr && (i = i.add(r)), n & wr && (o = o.add(r)), r = r.double(), s >>= wr, n >>= wr;
    return {
      p1: i,
      p2: o
    };
  }
  function F_(t, e, s, n) {
    B_(s, t), D_(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = Km(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = Ao(c), d = new Array(Number(l) + 1).fill(o), h = Math.floor((e.BITS - 1) / c) * c;
    let u = o;
    for (let f = h; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = n[p], T = Number(m >> BigInt(f) & l);
        d[T] = d[T].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (u = u.add(g), f !== 0) for (let p = 0; p < c; p++) u = u.double();
    }
    return u;
  }
  function pf(t, e, s) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return R_(e), e;
    } else return Jn(t, {
      isLE: s
    });
  }
  function q_(t, e, s = {}, n) {
    if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > hi)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = pf(e.p, s.Fp, n), i = pf(e.n, s.Fn, n), o = [
      "Gx",
      "Gy",
      "a",
      "b"
    ];
    for (const a of o) if (!r.isValid(e[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
    return e = Object.freeze(Object.assign({}, e)), {
      CURVE: e,
      Fp: r,
      Fn: i
    };
  }
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), xm("HashToScalar-");
  const xi = BigInt(0), Wr = BigInt(1), qo = BigInt(2);
  function j_(t) {
    return Ja(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function W_(t) {
    const e = j_(t), { P: s, type: n, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = n === "x25519";
    if (!a && n !== "x448") throw new Error("invalid type");
    const c = o || Ld, l = a ? 255 : 448, d = a ? 32 : 56, h = BigInt(a ? 9 : 5), u = BigInt(a ? 121665 : 39081), f = a ? qo ** BigInt(254) : qo ** BigInt(447), g = a ? BigInt(8) * qo ** BigInt(251) - Wr : BigInt(4) * qo ** BigInt(445) - Wr, p = f + g + Wr, m = (_) => zt(_, s), T = x(h);
    function x(_) {
      return Wd(m(_), d);
    }
    function A(_) {
      const y = wt("u coordinate", _, d);
      return a && (y[31] &= 127), m(Na(y));
    }
    function N(_) {
      return Na(r(wt("scalar", _, d)));
    }
    function P(_, y) {
      const E = L(A(y), N(_));
      if (E === xi) throw new Error("invalid private or public key received");
      return x(E);
    }
    function U(_) {
      return P(_, T);
    }
    function B(_, y, E) {
      const w = m(_ * (y - E));
      return y = m(y - w), E = m(E + w), {
        x_2: y,
        x_3: E
      };
    }
    function L(_, y) {
      Zl("u", _, xi, s), Zl("scalar", y, f, p);
      const E = y, w = _;
      let v = Wr, I = xi, k = _, C = Wr, S = xi;
      for (let $ = BigInt(l - 1); $ >= xi; $--) {
        const Y = E >> $ & Wr;
        S ^= Y, { x_2: v, x_3: k } = B(S, v, k), { x_2: I, x_3: C } = B(S, I, C), S = Y;
        const K = v + I, j = m(K * K), J = v - I, Z = m(J * J), de = j - Z, X = k + C, he = k - C, Me = m(he * K), je = m(X * J), qe = Me + je, bt = Me - je;
        k = m(qe * qe), C = m(w * m(bt * bt)), v = m(j * Z), I = m(de * (j + m(u * de)));
      }
      ({ x_2: v, x_3: k } = B(S, v, k)), { x_2: I, x_3: C } = B(S, I, C);
      const R = i(I);
      return m(v * R);
    }
    const O = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, D = (_ = c(d)) => (Ns(_, O.seed), _);
    function M(_) {
      const y = D(_);
      return {
        secretKey: y,
        publicKey: U(y)
      };
    }
    return {
      keygen: M,
      getSharedSecret: (_, y) => P(_, y),
      getPublicKey: (_) => U(_),
      scalarMult: P,
      scalarMultBase: U,
      utils: {
        randomSecretKey: D,
        randomPrivateKey: D
      },
      GuBytes: T.slice(),
      lengths: O
    };
  }
  const H_ = BigInt(1), gf = BigInt(2), V_ = BigInt(3), z_ = BigInt(5);
  BigInt(8);
  const aw = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), K_ = {
    p: aw,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function G_(t) {
    const e = BigInt(10), s = BigInt(20), n = BigInt(40), r = BigInt(80), i = aw, o = t * t % i * t % i, a = gs(o, gf, i) * o % i, c = gs(a, H_, i) * t % i, l = gs(c, z_, i) * c % i, d = gs(l, e, i) * l % i, h = gs(d, s, i) * d % i, u = gs(h, n, i) * h % i, f = gs(u, r, i) * u % i, g = gs(f, r, i) * u % i, p = gs(g, e, i) * l % i;
    return {
      pow_p_5_8: gs(p, gf, i) * t % i,
      b2: o
    };
  }
  function Y_(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const Z_ = Jn(K_.p, {
    isLE: true
  });
  (() => {
    const t = Z_.ORDER;
    return W_({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: s, b2: n } = G_(e);
        return zt(gs(s, V_, t) * n, t);
      },
      adjustScalarBytes: Y_
    });
  })();
  const mf = (t, e) => (t + (t >= 0 ? e : -e) / cw) / e;
  function J_(t, e, s) {
    const [[n, r], [i, o]] = e, a = mf(o * t, s), c = mf(-r * t, s);
    let l = t - a * n - c * i, d = -a * r - c * o;
    const h = l < ln, u = d < ln;
    h && (l = -l), u && (d = -d);
    const f = Ao(Math.ceil(Km(s) / 2)) + ri;
    if (l < ln || l >= f || d < ln || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: h,
      k1: l,
      k2neg: u,
      k2: d
    };
  }
  function Jl(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function Wc(t, e) {
    const s = {};
    for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
    return Ia(s.lowS, "lowS"), Ia(s.prehash, "prehash"), s.format !== void 0 && Jl(s.format), s;
  }
  class X_ extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const nn = {
    Err: X_,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = nn;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = Fo(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? Fo(r.length / 2 | 128) : "";
        return Fo(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = nn;
        let n = 0;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length < 2 || e[n++] !== t) throw new s("tlv.decode: wrong tlv");
        const r = e[n++], i = !!(r & 128);
        let o = 0;
        if (!i) o = r;
        else {
          const c = r & 127;
          if (!c) throw new s("tlv.decode(long): indefinite length not supported");
          if (c > 4) throw new s("tlv.decode(long): byte length is too big");
          const l = e.subarray(n, n + c);
          if (l.length !== c) throw new s("tlv.decode: length bytes not complete");
          if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
          for (const d of l) o = o << 8 | d;
          if (n += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
        }
        const a = e.subarray(n, n + o);
        if (a.length !== o) throw new s("tlv.decode: wrong value length");
        return {
          v: a,
          l: e.subarray(n + o)
        };
      }
    },
    _int: {
      encode(t) {
        const { Err: e } = nn;
        if (t < ln) throw new e("integer: negative integers are not allowed");
        let s = Fo(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = nn;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Za(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = nn, r = wt("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = nn, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  }, ln = BigInt(0), ri = BigInt(1), cw = BigInt(2), jo = BigInt(3), Q_ = BigInt(4);
  function Jr(t, e) {
    const { BYTES: s } = t;
    let n;
    if (typeof e == "bigint") n = e;
    else {
      let r = wt("private key", e);
      try {
        n = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
    return n;
  }
  function eT(t, e = {}) {
    const s = q_("weierstrass", t, e), { Fp: n, Fn: r } = s;
    let i = s.CURVE;
    const { h: o, n: a } = i;
    Ja(e, {}, {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean"
    });
    const { endo: c } = e;
    if (c && (!n.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const l = dw(n, r);
    function d() {
      if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function h(_, y, E) {
      const { x: w, y: v } = y.toAffine(), I = n.toBytes(w);
      if (Ia(E, "isCompressed"), E) {
        d();
        const k = !n.isOdd(v);
        return Ln(lw(k), I);
      } else return Ln(Uint8Array.of(4), I, n.toBytes(v));
    }
    function u(_) {
      gr(_, void 0, "Point");
      const { publicKey: y, publicKeyUncompressed: E } = l, w = _.length, v = _[0], I = _.subarray(1);
      if (w === y && (v === 2 || v === 3)) {
        const k = n.fromBytes(I);
        if (!n.isValid(k)) throw new Error("bad point: is not on curve, wrong x");
        const C = p(k);
        let S;
        try {
          S = n.sqrt(C);
        } catch ($) {
          const Y = $ instanceof Error ? ": " + $.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + Y);
        }
        d();
        const R = n.isOdd(S);
        return (v & 1) === 1 !== R && (S = n.neg(S)), {
          x: k,
          y: S
        };
      } else if (w === E && v === 4) {
        const k = n.BYTES, C = n.fromBytes(I.subarray(0, k)), S = n.fromBytes(I.subarray(k, k * 2));
        if (!m(C, S)) throw new Error("bad point: is not on curve");
        return {
          x: C,
          y: S
        };
      } else throw new Error(`bad point: got length ${w}, expected compressed=${y} or uncompressed=${E}`);
    }
    const f = e.toBytes || h, g = e.fromBytes || u;
    function p(_) {
      const y = n.sqr(_), E = n.mul(y, _);
      return n.add(n.add(E, n.mul(_, i.a)), i.b);
    }
    function m(_, y) {
      const E = n.sqr(y), w = p(_);
      return n.eql(E, w);
    }
    if (!m(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const T = n.mul(n.pow(i.a, jo), Q_), x = n.mul(n.sqr(i.b), BigInt(27));
    if (n.is0(n.add(T, x))) throw new Error("bad curve params: a or b");
    function A(_, y, E = false) {
      if (!n.isValid(y) || E && n.is0(y)) throw new Error(`bad point coordinate ${_}`);
      return y;
    }
    function N(_) {
      if (!(_ instanceof O)) throw new Error("ProjectivePoint expected");
    }
    function P(_) {
      if (!c || !c.basises) throw new Error("no endo");
      return J_(_, c.basises, r.ORDER);
    }
    const U = lf((_, y) => {
      const { X: E, Y: w, Z: v } = _;
      if (n.eql(v, n.ONE)) return {
        x: E,
        y: w
      };
      const I = _.is0();
      y == null && (y = I ? n.ONE : n.inv(v));
      const k = n.mul(E, y), C = n.mul(w, y), S = n.mul(v, y);
      if (I) return {
        x: n.ZERO,
        y: n.ZERO
      };
      if (!n.eql(S, n.ONE)) throw new Error("invZ was invalid");
      return {
        x: k,
        y: C
      };
    }), B = lf((_) => {
      if (_.is0()) {
        if (e.allowInfinityPoint && !n.is0(_.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: y, y: E } = _.toAffine();
      if (!n.isValid(y) || !n.isValid(E)) throw new Error("bad point: x or y not field elements");
      if (!m(y, E)) throw new Error("bad point: equation left != right");
      if (!_.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function L(_, y, E, w, v) {
      return E = new O(n.mul(E.X, _), E.Y, E.Z), y = Sa(w, y), E = Sa(v, E), y.add(E);
    }
    class O {
      constructor(y, E, w) {
        this.X = A("x", y), this.Y = A("y", E, true), this.Z = A("z", w), Object.freeze(this);
      }
      static CURVE() {
        return i;
      }
      static fromAffine(y) {
        const { x: E, y: w } = y || {};
        if (!y || !n.isValid(E) || !n.isValid(w)) throw new Error("invalid affine point");
        if (y instanceof O) throw new Error("projective point not allowed");
        return n.is0(E) && n.is0(w) ? O.ZERO : new O(E, w, n.ONE);
      }
      static fromBytes(y) {
        const E = O.fromAffine(g(gr(y, void 0, "point")));
        return E.assertValidity(), E;
      }
      static fromHex(y) {
        return O.fromBytes(wt("pointHex", y));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(y = 8, E = true) {
        return M.createCache(this, y), E || this.multiply(jo), this;
      }
      assertValidity() {
        B(this);
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (!n.isOdd) throw new Error("Field doesn't support isOdd");
        return !n.isOdd(y);
      }
      equals(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y, S = n.eql(n.mul(E, C), n.mul(I, v)), R = n.eql(n.mul(w, C), n.mul(k, v));
        return S && R;
      }
      negate() {
        return new O(this.X, n.neg(this.Y), this.Z);
      }
      double() {
        const { a: y, b: E } = i, w = n.mul(E, jo), { X: v, Y: I, Z: k } = this;
        let C = n.ZERO, S = n.ZERO, R = n.ZERO, $ = n.mul(v, v), Y = n.mul(I, I), K = n.mul(k, k), j = n.mul(v, I);
        return j = n.add(j, j), R = n.mul(v, k), R = n.add(R, R), C = n.mul(y, R), S = n.mul(w, K), S = n.add(C, S), C = n.sub(Y, S), S = n.add(Y, S), S = n.mul(C, S), C = n.mul(j, C), R = n.mul(w, R), K = n.mul(y, K), j = n.sub($, K), j = n.mul(y, j), j = n.add(j, R), R = n.add($, $), $ = n.add(R, $), $ = n.add($, K), $ = n.mul($, j), S = n.add(S, $), K = n.mul(I, k), K = n.add(K, K), $ = n.mul(K, j), C = n.sub(C, $), R = n.mul(K, Y), R = n.add(R, R), R = n.add(R, R), new O(C, S, R);
      }
      add(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y;
        let S = n.ZERO, R = n.ZERO, $ = n.ZERO;
        const Y = i.a, K = n.mul(i.b, jo);
        let j = n.mul(E, I), J = n.mul(w, k), Z = n.mul(v, C), de = n.add(E, w), X = n.add(I, k);
        de = n.mul(de, X), X = n.add(j, J), de = n.sub(de, X), X = n.add(E, v);
        let he = n.add(I, C);
        return X = n.mul(X, he), he = n.add(j, Z), X = n.sub(X, he), he = n.add(w, v), S = n.add(k, C), he = n.mul(he, S), S = n.add(J, Z), he = n.sub(he, S), $ = n.mul(Y, X), S = n.mul(K, Z), $ = n.add(S, $), S = n.sub(J, $), $ = n.add(J, $), R = n.mul(S, $), J = n.add(j, j), J = n.add(J, j), Z = n.mul(Y, Z), X = n.mul(K, X), J = n.add(J, Z), Z = n.sub(j, Z), Z = n.mul(Y, Z), X = n.add(X, Z), j = n.mul(J, X), R = n.add(R, j), j = n.mul(he, X), S = n.mul(de, S), S = n.sub(S, j), j = n.mul(de, J), $ = n.mul(he, $), $ = n.add($, j), new O(S, R, $);
      }
      subtract(y) {
        return this.add(y.negate());
      }
      is0() {
        return this.equals(O.ZERO);
      }
      multiply(y) {
        const { endo: E } = e;
        if (!r.isValidNot0(y)) throw new Error("invalid scalar: out of range");
        let w, v;
        const I = (k) => M.cached(this, k, (C) => Mc(O, C));
        if (E) {
          const { k1neg: k, k1: C, k2neg: S, k2: R } = P(y), { p: $, f: Y } = I(C), { p: K, f: j } = I(R);
          v = Y.add(j), w = L(E.beta, $, K, k, S);
        } else {
          const { p: k, f: C } = I(y);
          w = k, v = C;
        }
        return Mc(O, [
          w,
          v
        ])[0];
      }
      multiplyUnsafe(y) {
        const { endo: E } = e, w = this;
        if (!r.isValid(y)) throw new Error("invalid scalar: out of range");
        if (y === ln || w.is0()) return O.ZERO;
        if (y === ri) return w;
        if (M.hasCache(this)) return this.multiply(y);
        if (E) {
          const { k1neg: v, k1: I, k2neg: k, k2: C } = P(y), { p1: S, p2: R } = M_(O, w, I, C);
          return L(E.beta, S, R, v, k);
        } else return M.unsafe(w, y);
      }
      multiplyAndAddUnsafe(y, E, w) {
        const v = this.multiplyUnsafe(E).add(y.multiplyUnsafe(w));
        return v.is0() ? void 0 : v;
      }
      toAffine(y) {
        return U(this, y);
      }
      isTorsionFree() {
        const { isTorsionFree: y } = e;
        return o === ri ? true : y ? y(O, this) : M.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: y } = e;
        return o === ri ? this : y ? y(O, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(y = true) {
        return Ia(y, "isCompressed"), this.assertValidity(), f(O, this, y);
      }
      toHex(y = true) {
        return ni(this.toBytes(y));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
      get px() {
        return this.X;
      }
      get py() {
        return this.X;
      }
      get pz() {
        return this.Z;
      }
      toRawBytes(y = true) {
        return this.toBytes(y);
      }
      _setWindowSize(y) {
        this.precompute(y);
      }
      static normalizeZ(y) {
        return Mc(O, y);
      }
      static msm(y, E) {
        return F_(O, r, y, E);
      }
      static fromPrivateKey(y) {
        return O.BASE.multiply(Jr(r, y));
      }
    }
    O.BASE = new O(i.Gx, i.Gy, n.ONE), O.ZERO = new O(n.ZERO, n.ONE, n.ZERO), O.Fp = n, O.Fn = r;
    const D = r.BITS, M = new L_(O, e.endo ? Math.ceil(D / 2) : D);
    return O.BASE.precompute(8), O;
  }
  function lw(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function dw(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function tT(t, e = {}) {
    const { Fn: s } = t, n = e.randomBytes || Ld, r = Object.assign(dw(t.Fp, s), {
      seed: rw(s.ORDER)
    });
    function i(u) {
      try {
        return !!Jr(s, u);
      } catch {
        return false;
      }
    }
    function o(u, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const m = u.length;
        return f === true && m !== g || f === false && m !== p ? false : !!t.fromBytes(u);
      } catch {
        return false;
      }
    }
    function a(u = n(r.seed)) {
      return U_(gr(u, r.seed, "seed"), s.ORDER);
    }
    function c(u, f = true) {
      return t.BASE.multiply(Jr(s, u)).toBytes(f);
    }
    function l(u) {
      const f = a(u);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(u) {
      if (typeof u == "bigint") return false;
      if (u instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (s.allowedLengths || f === g) return;
      const m = wt("key", u).length;
      return m === g || m === p;
    }
    function h(u, f, g = true) {
      if (d(u) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = Jr(s, u);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: h,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (u) => Jr(s, u),
        precompute(u = 8, f = t.BASE) {
          return f.precompute(u, false);
        }
      },
      lengths: r
    });
  }
  function sT(t, e, s = {}) {
    Nm(e), Ja(s, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const n = s.randomBytes || Ld, r = s.hmac || ((E, ...w) => Hm(e, E, Ln(...w))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: h, utils: u, lengths: f } = tT(t, s), g = {
      prehash: false,
      lowS: typeof s.lowS == "boolean" ? s.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function m(E) {
      const w = a >> ri;
      return E > w;
    }
    function T(E, w) {
      if (!o.isValidNot0(w)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return w;
    }
    function x(E, w) {
      Jl(w);
      const v = f.signature, I = w === "compact" ? v : w === "recovered" ? v + 1 : void 0;
      return gr(E, I, `${w} signature`);
    }
    class A {
      constructor(w, v, I) {
        this.r = T("r", w), this.s = T("s", v), I != null && (this.recovery = I), Object.freeze(this);
      }
      static fromBytes(w, v = p) {
        x(w, v);
        let I;
        if (v === "der") {
          const { r: R, s: $ } = nn.toSig(gr(w));
          return new A(R, $);
        }
        v === "recovered" && (I = w[0], v = "compact", w = w.subarray(1));
        const k = o.BYTES, C = w.subarray(0, k), S = w.subarray(k, k * 2);
        return new A(o.fromBytes(C), o.fromBytes(S), I);
      }
      static fromHex(w, v) {
        return this.fromBytes(Ca(w), v);
      }
      addRecoveryBit(w) {
        return new A(this.r, this.s, w);
      }
      recoverPublicKey(w) {
        const v = i.ORDER, { r: I, s: k, recovery: C } = this;
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        if (a * cw < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const S = C === 2 || C === 3 ? I + a : I;
        if (!i.isValid(S)) throw new Error("recovery id 2 or 3 invalid");
        const R = i.toBytes(S), $ = t.fromBytes(Ln(lw((C & 1) === 0), R)), Y = o.inv(S), K = P(wt("msgHash", w)), j = o.create(-K * Y), J = o.create(k * Y), Z = t.BASE.multiplyUnsafe(j).add($.multiplyUnsafe(J));
        if (Z.is0()) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return m(this.s);
      }
      toBytes(w = p) {
        if (Jl(w), w === "der") return Ca(nn.hexFromSig(this));
        const v = o.toBytes(this.r), I = o.toBytes(this.s);
        if (w === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return Ln(Uint8Array.of(this.recovery), v, I);
        }
        return Ln(v, I);
      }
      toHex(w) {
        return ni(this.toBytes(w));
      }
      assertValidity() {
      }
      static fromCompact(w) {
        return A.fromBytes(wt("sig", w), "compact");
      }
      static fromDER(w) {
        return A.fromBytes(wt("sig", w), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new A(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return ni(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return ni(this.toBytes("compact"));
      }
    }
    const N = s.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const w = Za(E), v = E.length * 8 - c;
      return v > 0 ? w >> BigInt(v) : w;
    }, P = s.bits2int_modN || function(E) {
      return o.create(N(E));
    }, U = Ao(c);
    function B(E) {
      return Zl("num < 2^" + c, E, ln, U), o.toBytes(E);
    }
    function L(E, w) {
      return gr(E, void 0, "message"), w ? gr(e(E), void 0, "prehashed message") : E;
    }
    function O(E, w, v) {
      if ([
        "recovered",
        "canonical"
      ].some((J) => J in v)) throw new Error("sign() legacy options not supported");
      const { lowS: I, prehash: k, extraEntropy: C } = Wc(v, g);
      E = L(E, k);
      const S = P(E), R = Jr(o, w), $ = [
        B(R),
        B(S)
      ];
      if (C != null && C !== false) {
        const J = C === true ? n(f.secretKey) : C;
        $.push(wt("extraEntropy", J));
      }
      const Y = Ln(...$), K = S;
      function j(J) {
        const Z = N(J);
        if (!o.isValidNot0(Z)) return;
        const de = o.inv(Z), X = t.BASE.multiply(Z).toAffine(), he = o.create(X.x);
        if (he === ln) return;
        const Me = o.create(de * o.create(K + he * R));
        if (Me === ln) return;
        let je = (X.x === he ? 0 : 2) | Number(X.y & ri), qe = Me;
        return I && m(Me) && (qe = o.neg(Me), je ^= 1), new A(he, qe, je);
      }
      return {
        seed: Y,
        k2sig: j
      };
    }
    function D(E, w, v = {}) {
      E = wt("message", E);
      const { seed: I, k2sig: k } = O(E, w, v);
      return S_(e.outputLen, o.BYTES, r)(I, k);
    }
    function M(E) {
      let w;
      const v = typeof E == "string" || za(E), I = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !I) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (I) w = new A(E.r, E.s);
      else if (v) {
        try {
          w = A.fromBytes(wt("sig", E), "der");
        } catch (k) {
          if (!(k instanceof nn.Err)) throw k;
        }
        if (!w) try {
          w = A.fromBytes(wt("sig", E), "compact");
        } catch {
          return false;
        }
      }
      return w || false;
    }
    function _(E, w, v, I = {}) {
      const { lowS: k, prehash: C, format: S } = Wc(I, g);
      if (v = wt("publicKey", v), w = L(wt("message", w), C), "strict" in I) throw new Error("options.strict was renamed to lowS");
      const R = S === void 0 ? M(E) : A.fromBytes(wt("sig", E), S);
      if (R === false) return false;
      try {
        const $ = t.fromBytes(v);
        if (k && R.hasHighS()) return false;
        const { r: Y, s: K } = R, j = P(w), J = o.inv(K), Z = o.create(j * J), de = o.create(Y * J), X = t.BASE.multiplyUnsafe(Z).add($.multiplyUnsafe(de));
        return X.is0() ? false : o.create(X.x) === Y;
      } catch {
        return false;
      }
    }
    function y(E, w, v = {}) {
      const { prehash: I } = Wc(v, g);
      return w = L(w, I), A.fromBytes(E, "recovered").recoverPublicKey(w).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: h,
      utils: u,
      lengths: f,
      Point: t,
      sign: D,
      verify: _,
      recoverPublicKey: y,
      Signature: A,
      hash: e
    });
  }
  function nT(t) {
    const e = {
      a: t.a,
      b: t.b,
      p: t.Fp.ORDER,
      n: t.n,
      h: t.h,
      Gx: t.Gx,
      Gy: t.Gy
    }, s = t.Fp;
    let n = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
    const r = Jn(e.n, {
      BITS: t.nBitLength,
      allowedLengths: n,
      modFromBytes: t.wrapPrivateKey
    }), i = {
      Fp: s,
      Fn: r,
      allowInfinityPoint: t.allowInfinityPoint,
      endo: t.endo,
      isTorsionFree: t.isTorsionFree,
      clearCofactor: t.clearCofactor,
      fromBytes: t.fromBytes,
      toBytes: t.toBytes
    };
    return {
      CURVE: e,
      curveOpts: i
    };
  }
  function rT(t) {
    const { CURVE: e, curveOpts: s } = nT(t), n = {
      hmac: t.hmac,
      randomBytes: t.randomBytes,
      lowS: t.lowS,
      bits2int: t.bits2int,
      bits2int_modN: t.bits2int_modN
    };
    return {
      CURVE: e,
      curveOpts: s,
      hash: t.hash,
      ecdsaOpts: n
    };
  }
  function iT(t, e) {
    const s = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: s,
      CURVE: Object.assign({}, t, sw(s.Fn.ORDER, s.Fn.BITS))
    });
  }
  function oT(t) {
    const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: r } = rT(t), i = eT(e, s), o = sT(i, n, r);
    return iT(t, o);
  }
  function Xl(t, e) {
    const s = (n) => oT({
      ...t,
      hash: n
    });
    return {
      ...s(e),
      create: s
    };
  }
  const hw = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, uw = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, fw = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, aT = Jn(hw.p), cT = Jn(uw.p), lT = Jn(fw.p);
  Xl({
    ...hw,
    Fp: aT,
    lowS: false
  }, Ga);
  Xl({
    ...uw,
    Fp: cT,
    lowS: false
  }, yS), Xl({
    ...fw,
    Fp: lT,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, wS);
  const Ql = "base16", tr = "base64pad", Oi = "base64url", dT = "utf8", Hc = 1, hT = 2;
  function Vc(t) {
    const e = Vm($t(t, Ql));
    return yt(e, Ql);
  }
  function xn(t) {
    const e = Vm($t(t, dT));
    return yt(e, Ql);
  }
  function Wo(t, e, s) {
    return `${t}?wc_ev=${s}&topic=${e}`;
  }
  var uT = Object.defineProperty, fT = Object.defineProperties, pT = Object.getOwnPropertyDescriptors, wf = Object.getOwnPropertySymbols, gT = Object.prototype.hasOwnProperty, mT = Object.prototype.propertyIsEnumerable, yf = (t, e, s) => e in t ? uT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, wT = (t, e) => {
    for (var s in e || (e = {})) gT.call(e, s) && yf(t, s, e[s]);
    if (wf) for (var s of wf(e)) mT.call(e, s) && yf(t, s, e[s]);
    return t;
  }, yT = (t, e) => fT(t, pT(e));
  function wi(t) {
    const e = [];
    return t.forEach((s) => {
      const [n, r] = s.split(":");
      e.push(`${n}:${r}`);
    }), e;
  }
  function pw(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...wi(s.accounts));
    }), [
      ...new Set(e)
    ];
  }
  function bT(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...s.methods);
    }), [
      ...new Set(e)
    ];
  }
  function ET(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...s.events);
    }), [
      ...new Set(e)
    ];
  }
  function vT(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      wi(n.accounts).includes(e) && s.push(...n.methods);
    }), s;
  }
  function CT(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      wi(n.accounts).includes(e) && s.push(...n.events);
    }), s;
  }
  function Xa(t) {
    return t.includes(":");
  }
  function Xr(t) {
    return Xa(t) ? t.split(":")[0] : t;
  }
  function bf(t) {
    var e, s, n;
    const r = {};
    if (!Fs(t)) return r;
    for (const [i, o] of Object.entries(t)) {
      const a = Xa(i) ? [
        i
      ] : o.chains, c = o.methods || [], l = o.events || [], d = Xr(i);
      r[d] = yT(wT({}, r[d]), {
        chains: Ms(a, (e = r[d]) == null ? void 0 : e.chains),
        methods: Ms(c, (s = r[d]) == null ? void 0 : s.methods),
        events: Ms(l, (n = r[d]) == null ? void 0 : n.events)
      });
    }
    return r;
  }
  function AT(t) {
    const e = {};
    return t == null ? void 0 : t.forEach((s) => {
      var n;
      const [r, i] = s.split(":");
      e[r] || (e[r] = {
        accounts: [],
        chains: [],
        events: [],
        methods: []
      }), e[r].accounts.push(s), (n = e[r].chains) == null || n.push(`${r}:${i}`);
    }), e;
  }
  function Ef(t, e) {
    e = e.map((n) => n.replace("did:pkh:", ""));
    const s = AT(e);
    for (const [n, r] of Object.entries(s)) r.methods ? r.methods = Ms(r.methods, t) : r.methods = t, r.events = [
      "chainChanged",
      "accountsChanged"
    ];
    return s;
  }
  function IT(t, e) {
    var s, n, r, i, o, a;
    const c = bf(t), l = bf(e), d = {}, h = Object.keys(c).concat(Object.keys(l));
    for (const u of h) d[u] = {
      chains: Ms((s = c[u]) == null ? void 0 : s.chains, (n = l[u]) == null ? void 0 : n.chains),
      methods: Ms((r = c[u]) == null ? void 0 : r.methods, (i = l[u]) == null ? void 0 : i.methods),
      events: Ms((o = c[u]) == null ? void 0 : o.events, (a = l[u]) == null ? void 0 : a.events)
    };
    return d;
  }
  const NT = {
    INVALID_METHOD: {
      message: "Invalid method.",
      code: 1001
    },
    INVALID_EVENT: {
      message: "Invalid event.",
      code: 1002
    },
    INVALID_UPDATE_REQUEST: {
      message: "Invalid update request.",
      code: 1003
    },
    INVALID_EXTEND_REQUEST: {
      message: "Invalid extend request.",
      code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005
    },
    UNAUTHORIZED_METHOD: {
      message: "Unauthorized method.",
      code: 3001
    },
    UNAUTHORIZED_EVENT: {
      message: "Unauthorized event.",
      code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004
    },
    USER_REJECTED: {
      message: "User rejected.",
      code: 5e3
    },
    USER_REJECTED_CHAINS: {
      message: "User rejected chains.",
      code: 5001
    },
    USER_REJECTED_METHODS: {
      message: "User rejected methods.",
      code: 5002
    },
    USER_REJECTED_EVENTS: {
      message: "User rejected events.",
      code: 5003
    },
    UNSUPPORTED_CHAINS: {
      message: "Unsupported chains.",
      code: 5100
    },
    UNSUPPORTED_METHODS: {
      message: "Unsupported methods.",
      code: 5101
    },
    UNSUPPORTED_EVENTS: {
      message: "Unsupported events.",
      code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
      message: "Unsupported accounts.",
      code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104
    },
    USER_DISCONNECTED: {
      message: "User disconnected.",
      code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
      message: "Unsupported wc_ method.",
      code: 10001
    }
  }, ST = {
    NOT_INITIALIZED: {
      message: "Not initialized.",
      code: 1
    },
    NO_MATCHING_KEY: {
      message: "No matching key.",
      code: 2
    },
    RESTORE_WILL_OVERRIDE: {
      message: "Restore will override.",
      code: 3
    },
    RESUBSCRIBED: {
      message: "Resubscribed.",
      code: 4
    },
    MISSING_OR_INVALID: {
      message: "Missing or invalid.",
      code: 5
    },
    EXPIRED: {
      message: "Expired.",
      code: 6
    },
    UNKNOWN_TYPE: {
      message: "Unknown type.",
      code: 7
    },
    MISMATCHED_TOPIC: {
      message: "Mismatched topic.",
      code: 8
    },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9
    }
  };
  function ce(t, e) {
    const { message: s, code: n } = ST[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Ge(t, e) {
    const { message: s, code: n } = NT[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function un(t, e) {
    return !!Array.isArray(t);
  }
  function Fs(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
  }
  function Kt(t) {
    return typeof t > "u";
  }
  function Xe(t, e) {
    return e && Kt(t) ? true : typeof t == "string" && !!t.trim().length;
  }
  function Vd(t, e) {
    return typeof t == "number" && !isNaN(t);
  }
  function _T(t, e) {
    const { requiredNamespaces: s } = e, n = Object.keys(t.namespaces), r = Object.keys(s);
    let i = true;
    return pr(r, n) ? (n.forEach((o) => {
      const { accounts: a, methods: c, events: l } = t.namespaces[o], d = wi(a), h = s[o];
      (!pr(bm(o, h), d) || !pr(h.methods, c) || !pr(h.events, l)) && (i = false);
    }), i) : false;
  }
  function _a(t) {
    return Xe(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
  }
  function TT(t) {
    if (Xe(t, false) && t.includes(":")) {
      const e = t.split(":");
      if (e.length === 3) {
        const s = e[0] + ":" + e[1];
        return !!e[2] && _a(s);
      }
    }
    return false;
  }
  function xT(t, e) {
    let s = null;
    return Xe(t == null ? void 0 : t.publicKey, false) || (s = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)), s;
  }
  function vf(t) {
    let e = true;
    return un(t) ? t.length && (e = t.every((s) => Xe(s, false))) : e = false, e;
  }
  function OT(t, e, s) {
    let n = null;
    return un(e) && e.length ? e.forEach((r) => {
      n || _a(r) || (n = Ge("UNSUPPORTED_CHAINS", `${s}, chain ${r} should be a string and conform to "namespace:chainId" format`));
    }) : _a(t) || (n = Ge("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
  }
  function kT(t, e, s) {
    let n = null;
    return Object.entries(t).forEach(([r, i]) => {
      if (n) return;
      const o = OT(r, bm(r, i), `${e} ${s}`);
      o && (n = o);
    }), n;
  }
  function PT(t, e) {
    let s = null;
    return un(t) ? t.forEach((n) => {
      s || TT(n) || (s = Ge("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
    }) : s = Ge("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s;
  }
  function RT(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = PT(n == null ? void 0 : n.accounts, `${e} namespace`);
      r && (s = r);
    }), s;
  }
  function $T(t, e) {
    let s = null;
    return vf(t == null ? void 0 : t.methods) ? vf(t == null ? void 0 : t.events) || (s = Ge("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = Ge("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), s;
  }
  function gw(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = $T(n, `${e}, namespace`);
      r && (s = r);
    }), s;
  }
  function UT(t, e, s) {
    let n = null;
    if (t && Fs(t)) {
      const r = gw(t, e);
      r && (n = r);
      const i = kT(t, e, s);
      i && (n = i);
    } else n = ce("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
    return n;
  }
  function zc(t, e) {
    let s = null;
    if (t && Fs(t)) {
      const n = gw(t, e);
      n && (s = n);
      const r = RT(t, e);
      r && (s = r);
    } else s = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return s;
  }
  function mw(t) {
    return Xe(t.protocol, true);
  }
  function BT(t, e) {
    let s = false;
    return t ? t && un(t) && t.length && t.forEach((n) => {
      s = mw(n);
    }) : s = true, s;
  }
  function DT(t) {
    return typeof t == "number";
  }
  function us(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function LT(t) {
    return !(!t || typeof t != "object" || !t.code || !Vd(t.code) || !t.message || !Xe(t.message, false));
  }
  function MT(t) {
    return !(Kt(t) || !Xe(t.method, false));
  }
  function FT(t) {
    return !(Kt(t) || Kt(t.result) && Kt(t.error) || !Vd(t.id) || !Xe(t.jsonrpc, false));
  }
  function qT(t) {
    return !(Kt(t) || !Xe(t.name, false));
  }
  function Cf(t, e) {
    return !(!_a(e) || !pw(t).includes(e));
  }
  function jT(t, e, s) {
    return Xe(s, false) ? vT(t, e).includes(s) : false;
  }
  function WT(t, e, s) {
    return Xe(s, false) ? CT(t, e).includes(s) : false;
  }
  function Af(t, e, s) {
    let n = null;
    const r = HT(t), i = VT(e), o = Object.keys(r), a = Object.keys(i), c = If(Object.keys(t)), l = If(Object.keys(e)), d = c.filter((h) => !l.includes(h));
    return d.length && (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), pr(o, a) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((h) => {
      if (!h.includes(":") || n) return;
      const u = wi(e[h].accounts);
      u.includes(h) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${h}
        Required: ${h}
        Approved: ${u.toString()}`));
    }), o.forEach((h) => {
      n || (pr(r[h].methods, i[h].methods) ? pr(r[h].events, i[h].events) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${h}`)) : n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${h}`));
    }), n;
  }
  function HT(t) {
    const e = {};
    return Object.keys(t).forEach((s) => {
      var n;
      s.includes(":") ? e[s] = t[s] : (n = t[s].chains) == null || n.forEach((r) => {
        e[r] = {
          methods: t[s].methods,
          events: t[s].events
        };
      });
    }), e;
  }
  function If(t) {
    return [
      ...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))
    ];
  }
  function VT(t) {
    const e = {};
    return Object.keys(t).forEach((s) => {
      var _a2;
      s.includes(":") ? e[s] = t[s] : (_a2 = wi(t[s].accounts)) == null ? void 0 : _a2.forEach((r) => {
        e[r] = {
          accounts: t[s].accounts.filter((i) => i.includes(`${r}:`)),
          methods: t[s].methods,
          events: t[s].events
        };
      });
    }), e;
  }
  function zT(t, e) {
    return Vd(t) && t <= e.max && t >= e.min;
  }
  const Kc = {};
  class ki {
    static get(e) {
      return Kc[e];
    }
    static set(e, s) {
      Kc[e] = s;
    }
    static delete(e) {
      delete Kc[e];
    }
  }
  function KT(t) {
    const e = vo.decode(t);
    if (e.length < 33) throw new Error("Too short to contain a public key");
    return e.slice(1, 33);
  }
  function GT({ publicKey: t, signature: e, payload: s }) {
    var n;
    const r = ed(s.method), i = 128 | parseInt(((n = s.version) == null ? void 0 : n.toString()) || "4"), o = JT(s.address), a = s.era === "00" ? new Uint8Array([
      0
    ]) : ed(s.era);
    if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
    const c = parseInt(s.nonce, 16), l = new Uint8Array([
      c & 255,
      c >> 8 & 255
    ]), d = BigInt(`0x${ZT(s.tip)}`), h = QT(d), u = new Uint8Array([
      0,
      ...t,
      o,
      ...e,
      ...a,
      ...l,
      ...h,
      ...r
    ]), f = XT(u.length + 1);
    return new Uint8Array([
      ...f,
      i,
      ...u
    ]);
  }
  function YT(t) {
    const e = ed(t), s = dy.blake2b(e, void 0, 32);
    return "0x" + Ae.from(s).toString("hex");
  }
  function ed(t) {
    return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
  }
  function ZT(t) {
    return t.startsWith("0x") ? t.slice(2) : t;
  }
  function JT(t) {
    const e = vo.decode(t)[0];
    return e === 42 ? 0 : e === 60 ? 2 : 1;
  }
  function XT(t) {
    if (t < 64) return new Uint8Array([
      t << 2
    ]);
    if (t < 16384) {
      const e = t << 2 | 1;
      return new Uint8Array([
        e & 255,
        e >> 8 & 255
      ]);
    } else if (t < 1 << 30) {
      const e = t << 2 | 2;
      return new Uint8Array([
        e & 255,
        e >> 8 & 255,
        e >> 16 & 255,
        e >> 24 & 255
      ]);
    } else throw new Error("Compact encoding > 2^30 not supported");
  }
  function QT(t) {
    if (t < BigInt(1) << BigInt(6)) return new Uint8Array([
      Number(t << BigInt(2))
    ]);
    if (t < BigInt(1) << BigInt(14)) {
      const e = t << BigInt(2) | BigInt(1);
      return new Uint8Array([
        Number(e & BigInt(255)),
        Number(e >> BigInt(8) & BigInt(255))
      ]);
    } else if (t < BigInt(1) << BigInt(30)) {
      const e = t << BigInt(2) | BigInt(2);
      return new Uint8Array([
        Number(e & BigInt(255)),
        Number(e >> BigInt(8) & BigInt(255)),
        Number(e >> BigInt(16) & BigInt(255)),
        Number(e >> BigInt(24) & BigInt(255))
      ]);
    } else throw new Error("BigInt compact encoding not supported > 2^30");
  }
  function ex(t) {
    const e = Uint8Array.from(Ae.from(t.signature, "hex")), s = KT(t.transaction.address), n = GT({
      publicKey: s,
      signature: e,
      payload: t.transaction
    }), r = Ae.from(n).toString("hex");
    return YT(r);
  }
  function ww({ logger: t, name: e }) {
    const s = typeof t == "string" ? Pa({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return s.level = typeof t == "string" ? t : t.level, s;
  }
  const yw = "wc", bw = 2, Ew = "client", zd = `${yw}@${bw}:${Ew}:`, Gc = {
    name: Ew,
    logger: "error"
  }, Nf = "WALLETCONNECT_DEEPLINK_CHOICE", tx = "proposal", Sf = "Proposal expired", sx = "session", Hr = z.SEVEN_DAYS, nx = "engine", nt = {
    wc_sessionPropose: {
      req: {
        ttl: z.FIVE_MINUTES,
        prompt: true,
        tag: 1100
      },
      res: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1101
      },
      reject: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1120
      },
      autoReject: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1121
      }
    },
    wc_sessionSettle: {
      req: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1102
      },
      res: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1103
      }
    },
    wc_sessionUpdate: {
      req: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1104
      },
      res: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1105
      }
    },
    wc_sessionExtend: {
      req: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1106
      },
      res: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1107
      }
    },
    wc_sessionRequest: {
      req: {
        ttl: z.FIVE_MINUTES,
        prompt: true,
        tag: 1108
      },
      res: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1109
      }
    },
    wc_sessionEvent: {
      req: {
        ttl: z.FIVE_MINUTES,
        prompt: true,
        tag: 1110
      },
      res: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1111
      }
    },
    wc_sessionDelete: {
      req: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1112
      },
      res: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1113
      }
    },
    wc_sessionPing: {
      req: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1114
      },
      res: {
        ttl: z.ONE_DAY,
        prompt: false,
        tag: 1115
      }
    },
    wc_sessionAuthenticate: {
      req: {
        ttl: z.ONE_HOUR,
        prompt: true,
        tag: 1116
      },
      res: {
        ttl: z.ONE_HOUR,
        prompt: false,
        tag: 1117
      },
      reject: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1118
      },
      autoReject: {
        ttl: z.FIVE_MINUTES,
        prompt: false,
        tag: 1119
      }
    }
  }, Yc = {
    min: z.FIVE_MINUTES,
    max: z.SEVEN_DAYS
  }, ks = {
    idle: "IDLE",
    active: "ACTIVE"
  }, rx = {
    eth_sendTransaction: {
      key: ""
    },
    eth_sendRawTransaction: {
      key: ""
    },
    wallet_sendCalls: {
      key: ""
    },
    solana_signTransaction: {
      key: "signature"
    },
    solana_signAllTransactions: {
      key: "transactions"
    },
    solana_signAndSendTransaction: {
      key: "signature"
    },
    sui_signAndExecuteTransaction: {
      key: "digest"
    },
    sui_signTransaction: {
      key: ""
    },
    hedera_signAndExecuteTransaction: {
      key: "transactionId"
    },
    hedera_executeTransaction: {
      key: "transactionId"
    },
    near_signTransaction: {
      key: ""
    },
    near_signTransactions: {
      key: ""
    },
    tron_signTransaction: {
      key: "txID"
    },
    xrpl_signTransaction: {
      key: ""
    },
    xrpl_signTransactionFor: {
      key: ""
    },
    algo_signTxn: {
      key: ""
    },
    sendTransfer: {
      key: "txid"
    },
    stacks_stxTransfer: {
      key: "txId"
    },
    polkadot_signTransaction: {
      key: ""
    },
    cosmos_signDirect: {
      key: ""
    }
  }, ix = "request", ox = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate"
  ], ax = "wc", cx = "auth", lx = "authKeys", dx = "pairingTopics", hx = "requests", Qa = `${ax}@${1.5}:${cx}:`, na = `${Qa}:PUB_KEY`;
  var ux = Object.defineProperty, fx = Object.defineProperties, px = Object.getOwnPropertyDescriptors, _f = Object.getOwnPropertySymbols, gx = Object.prototype.hasOwnProperty, mx = Object.prototype.propertyIsEnumerable, td = (t, e, s) => e in t ? ux(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, _e = (t, e) => {
    for (var s in e || (e = {})) gx.call(e, s) && td(t, s, e[s]);
    if (_f) for (var s of _f(e)) mx.call(e, s) && td(t, s, e[s]);
    return t;
  }, rt = (t, e) => fx(t, px(e)), W = (t, e, s) => td(t, typeof e != "symbol" ? e + "" : e, s);
  class wx extends GI {
    constructor(e) {
      super(e), W(this, "name", nx), W(this, "events", new fd()), W(this, "initialized", false), W(this, "requestQueue", {
        state: ks.idle,
        queue: []
      }), W(this, "sessionRequestQueue", {
        state: ks.idle,
        queue: []
      }), W(this, "emittedSessionRequests", new LN({
        limit: 500
      })), W(this, "requestQueueDelay", z.ONE_SECOND), W(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), W(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), W(this, "recentlyDeletedLimit", 200), W(this, "relayMessageCache", []), W(this, "pendingSessions", /* @__PURE__ */ new Map()), W(this, "init", async () => {
        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
          methods: Object.keys(nt)
        }), this.initialized = true, setTimeout(async () => {
          await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
        }, z.toMiliseconds(this.requestQueueDelay)));
      }), W(this, "connect", async (s) => {
        var n;
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        const r = rt(_e({}, s), {
          requiredNamespaces: s.requiredNamespaces || {},
          optionalNamespaces: s.optionalNamespaces || {}
        });
        await this.isValidConnect(r), r.optionalNamespaces = IT(r.requiredNamespaces, r.optionalNamespaces), r.requiredNamespaces = {};
        const { pairingTopic: i, requiredNamespaces: o, optionalNamespaces: a, sessionProperties: c, scopedProperties: l, relays: d, authentication: h, walletPay: u } = r, f = ((n = h == null ? void 0 : h[0]) == null ? void 0 : n.ttl) || nt.wc_sessionPropose.req.ttl || z.FIVE_MINUTES;
        this.validateRequestExpiry(f);
        let g = i, p, m = false;
        try {
          if (g) {
            const O = this.client.core.pairing.pairings.get(g);
            this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), m = O.active;
          }
        } catch (O) {
          throw this.client.logger.error(`connect() -> pairing.get(${g}) failed`), O;
        }
        if (!g || !m) {
          const { topic: O, uri: D } = await this.client.core.pairing.create({
            internal: {
              skipSubscribe: true
            }
          });
          g = O, p = D;
        }
        if (!g) {
          const { message: O } = ce("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
          throw new Error(O);
        }
        const T = await this.client.core.crypto.generateKeyPair(), x = Ct(f), A = _e(rt(_e(_e({
          requiredNamespaces: o,
          optionalNamespaces: a,
          relays: d ?? [
            {
              protocol: Pg
            }
          ],
          proposer: {
            publicKey: T,
            metadata: this.client.metadata
          },
          expiryTimestamp: x,
          pairingTopic: g
        }, c && {
          sessionProperties: c
        }), l && {
          scopedProperties: l
        }), {
          id: gn()
        }), (h || u) && {
          requests: {
            authentication: h == null ? void 0 : h.map((O) => {
              const { domain: D, chains: M, nonce: _, uri: y, exp: E, nbf: w, type: v, statement: I, requestId: k, resources: C, signatureTypes: S } = O;
              return {
                domain: D,
                chains: M,
                nonce: _,
                type: v ?? "caip122",
                aud: y,
                version: "1",
                iat: (/* @__PURE__ */ new Date()).toISOString(),
                exp: E,
                nbf: w,
                statement: I,
                requestId: k,
                resources: C,
                signatureTypes: S
              };
            }),
            walletPay: u
          }
        }), N = Re("session_connect", A.id), { reject: P, resolve: U, done: B } = qr(f, Sf), L = ({ id: O }) => {
          O === A.id && (this.client.events.off("proposal_expire", L), this.pendingSessions.delete(A.id), this.events.emit(N, {
            error: {
              message: Sf,
              code: 0
            }
          }));
        };
        return this.client.events.on("proposal_expire", L), this.events.once(N, ({ error: O, session: D }) => {
          this.client.events.off("proposal_expire", L), O ? P(O) : D && U(D);
        }), await this.setProposal(A.id, A), await this.sendProposeSession({
          proposal: A,
          publishOpts: {
            internal: {
              throwOnFailedPublish: true
            },
            tvf: {
              correlationId: A.id
            }
          }
        }).catch((O) => {
          throw this.deleteProposal(A.id), O;
        }), {
          uri: p,
          approval: B
        };
      }), W(this, "pair", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          return await this.client.core.pairing.pair(s);
        } catch (n) {
          throw this.client.logger.error("pair() failed"), n;
        }
      }), W(this, "approve", async (s) => {
        var n, r, i;
        const o = this.client.core.eventClient.createEvent({
          properties: {
            topic: (n = s == null ? void 0 : s.id) == null ? void 0 : n.toString(),
            trace: [
              hs.session_approve_started
            ]
          }
        });
        try {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
        } catch (D) {
          throw o.setError(Qn.no_internet_connection), D;
        }
        try {
          await this.isValidProposalId(s == null ? void 0 : s.id);
        } catch (D) {
          throw this.client.logger.error(`approve() -> proposal.get(${s == null ? void 0 : s.id}) failed`), o.setError(Qn.proposal_not_found), D;
        }
        try {
          await this.isValidApprove(s);
        } catch (D) {
          throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(Qn.session_approve_namespace_validation_failure), D;
        }
        const { id: a, relayProtocol: c, namespaces: l, sessionProperties: d, scopedProperties: h, sessionConfig: u, proposalRequestsResponses: f } = s, g = this.client.proposal.get(a);
        this.client.core.eventClient.deleteEvent({
          eventId: o.eventId
        });
        const { pairingTopic: p, proposer: m, requiredNamespaces: T, optionalNamespaces: x } = g;
        let A = (r = this.client.core.eventClient) == null ? void 0 : r.getEvent({
          topic: p
        });
        A || (A = (i = this.client.core.eventClient) == null ? void 0 : i.createEvent({
          type: hs.session_approve_started,
          properties: {
            topic: p,
            trace: [
              hs.session_approve_started,
              hs.session_namespaces_validation_success
            ]
          }
        }));
        const N = await this.client.core.crypto.generateKeyPair(), P = m.publicKey, U = await this.client.core.crypto.generateSharedKey(N, P), B = rt(_e(_e(_e({
          relay: {
            protocol: c ?? "irn"
          },
          namespaces: l,
          controller: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiry: Ct(Hr)
        }, d && {
          sessionProperties: d
        }), h && {
          scopedProperties: h
        }), u && {
          sessionConfig: u
        }), {
          proposalRequestsResponses: f
        }), L = Ue.relay;
        A.addTrace(hs.subscribing_session_topic);
        try {
          await this.client.core.relayer.subscribe(U, {
            transportType: L,
            internal: {
              skipSubscribe: true
            }
          });
        } catch (D) {
          throw A.setError(Qn.subscribe_session_topic_failure), D;
        }
        A.addTrace(hs.subscribe_session_topic_success);
        const O = rt(_e({}, B), {
          topic: U,
          requiredNamespaces: T,
          optionalNamespaces: x,
          pairingTopic: p,
          acknowledged: false,
          self: B.controller,
          peer: {
            publicKey: m.publicKey,
            metadata: m.metadata
          },
          controller: N,
          transportType: Ue.relay,
          authentication: f == null ? void 0 : f.authentication,
          walletPayResult: f == null ? void 0 : f.walletPay
        });
        await this.client.session.set(U, O), A.addTrace(hs.store_session);
        try {
          await this.sendApproveSession({
            sessionTopic: U,
            proposal: g,
            pairingProposalResponse: {
              relay: {
                protocol: c ?? "irn"
              },
              responderPublicKey: N
            },
            sessionSettleRequest: B,
            publishOpts: {
              internal: {
                throwOnFailedPublish: true
              },
              tvf: _e({
                correlationId: a
              }, this.getTVFApproveParams(O))
            }
          }), A.addTrace(hs.session_approve_publish_success);
        } catch (D) {
          throw this.client.logger.error(D), this.client.session.delete(U, Ge("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(U), D;
        }
        return this.client.core.eventClient.deleteEvent({
          eventId: A.eventId
        }), await this.client.core.pairing.updateMetadata({
          topic: p,
          metadata: m.metadata
        }), await this.deleteProposal(a), await this.client.core.pairing.activate({
          topic: p
        }), await this.setExpiry(U, Ct(Hr)), {
          topic: U,
          acknowledged: () => Promise.resolve(this.client.session.get(U))
        };
      }), W(this, "reject", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidReject(s);
        } catch (o) {
          throw this.client.logger.error("reject() -> isValidReject() failed"), o;
        }
        const { id: n, reason: r } = s;
        let i;
        try {
          i = this.client.proposal.get(n).pairingTopic;
        } catch (o) {
          throw this.client.logger.error(`reject() -> proposal.get(${n}) failed`), o;
        }
        i && await this.sendError({
          id: n,
          topic: i,
          error: r,
          rpcOpts: nt.wc_sessionPropose.reject
        }), await this.deleteProposal(n);
      }), W(this, "update", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidUpdate(s);
        } catch (h) {
          throw this.client.logger.error("update() -> isValidUpdate() failed"), h;
        }
        const { topic: n, namespaces: r } = s, { done: i, resolve: o, reject: a } = qr(z.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), c = gn(), l = lr().toString(), d = this.client.session.get(n).namespaces;
        return this.events.once(Re("session_update", c), ({ error: h }) => {
          h ? a(h) : o();
        }), await this.client.session.update(n, {
          namespaces: r
        }), await this.sendRequest({
          topic: n,
          method: "wc_sessionUpdate",
          params: {
            namespaces: r
          },
          throwOnFailedPublish: true,
          clientRpcId: c,
          relayRpcId: l
        }).catch((h) => {
          this.client.logger.error(h), this.client.session.update(n, {
            namespaces: d
          }), a(h);
        }), {
          acknowledged: i
        };
      }), W(this, "extend", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidExtend(s);
        } catch (c) {
          throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
        }
        const { topic: n } = s, r = gn(), { done: i, resolve: o, reject: a } = qr(z.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
        return this.events.once(Re("session_extend", r), ({ error: c }) => {
          c ? a(c) : o();
        }), await this.setExpiry(n, Ct(Hr)), this.sendRequest({
          topic: n,
          method: "wc_sessionExtend",
          params: {},
          clientRpcId: r,
          throwOnFailedPublish: true
        }).catch((c) => {
          a(c);
        }), {
          acknowledged: i
        };
      }), W(this, "request", async (s) => {
        this.isInitialized();
        try {
          await this.isValidRequest(s);
        } catch (m) {
          throw this.client.logger.error("request() -> isValidRequest() failed"), m;
        }
        const { chainId: n, request: r, topic: i, expiry: o = nt.wc_sessionRequest.req.ttl } = s, a = this.client.session.get(i);
        (a == null ? void 0 : a.transportType) === Ue.relay && await this.confirmOnlineStateOrThrow();
        const c = gn(), l = lr().toString(), { done: d, resolve: h, reject: u } = qr(o, "Request expired. Please try again.");
        this.events.once(Re("session_request", c), ({ error: m, result: T }) => {
          m ? u(m) : h(T);
        });
        const f = "wc_sessionRequest", g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
        if (g) return await this.sendRequest({
          clientRpcId: c,
          relayRpcId: l,
          topic: i,
          method: f,
          params: {
            request: rt(_e({}, r), {
              expiryTimestamp: Ct(o)
            }),
            chainId: n
          },
          expiry: o,
          throwOnFailedPublish: true,
          appLink: g
        }).catch((m) => u(m)), this.client.events.emit("session_request_sent", {
          topic: i,
          request: r,
          chainId: n,
          id: c
        }), await d();
        const p = {
          request: rt(_e({}, r), {
            expiryTimestamp: Ct(o)
          }),
          chainId: n
        };
        return await Promise.all([
          new Promise(async (m) => {
            await this.sendRequest({
              clientRpcId: c,
              relayRpcId: l,
              topic: i,
              method: f,
              params: p,
              expiry: o,
              throwOnFailedPublish: true,
              tvf: this.getTVFParams(c, p)
            }).catch((T) => u(T)), this.client.events.emit("session_request_sent", {
              topic: i,
              request: r,
              chainId: n,
              id: c
            }), m();
          }),
          new Promise(async (m) => {
            var T;
            if (!((T = a.sessionConfig) != null && T.disableDeepLink)) {
              const x = await RN(this.client.core.storage, Nf);
              await ON({
                id: c,
                topic: i,
                wcDeepLink: x
              });
            }
            m();
          }),
          d()
        ]).then((m) => m[2]);
      }), W(this, "respond", async (s) => {
        var n, r;
        this.isInitialized();
        const i = this.client.core.eventClient.createEvent({
          properties: {
            topic: (s == null ? void 0 : s.topic) || ((r = (n = s == null ? void 0 : s.response) == null ? void 0 : n.id) == null ? void 0 : r.toString()),
            trace: [
              hs.session_request_response_started
            ]
          }
        });
        try {
          await this.isValidRespond(s);
        } catch (h) {
          throw i.addTrace(h == null ? void 0 : h.message), i.setError(Qn.session_request_response_validation_failure), h;
        }
        i.addTrace(hs.session_request_response_validation_success);
        const { topic: o, response: a } = s, { id: c } = a, l = this.client.session.get(o);
        l.transportType === Ue.relay && await this.confirmOnlineStateOrThrow();
        const d = this.getAppLinkIfEnabled(l.peer.metadata, l.transportType);
        try {
          i.addTrace(hs.session_request_response_publish_started), Ks(a) ? await this.sendResult({
            id: c,
            topic: o,
            result: a.result,
            throwOnFailedPublish: true,
            appLink: d
          }) : Rs(a) && await this.sendError({
            id: c,
            topic: o,
            error: a.error,
            appLink: d
          }), this.cleanupAfterResponse(s);
        } catch (h) {
          throw i.addTrace(h == null ? void 0 : h.message), i.setError(Qn.session_request_response_publish_failure), h;
        }
      }), W(this, "ping", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidPing(s);
        } catch (r) {
          throw this.client.logger.error("ping() -> isValidPing() failed"), r;
        }
        const { topic: n } = s;
        if (this.client.session.keys.includes(n)) {
          const r = gn(), i = lr().toString(), { done: o, resolve: a, reject: c } = qr(z.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
          this.events.once(Re("session_ping", r), ({ error: l }) => {
            l ? c(l) : a();
          }), await Promise.all([
            this.sendRequest({
              topic: n,
              method: "wc_sessionPing",
              params: {},
              throwOnFailedPublish: true,
              clientRpcId: r,
              relayRpcId: i
            }),
            o()
          ]);
        } else this.client.core.pairing.pairings.keys.includes(n) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({
          topic: n
        }));
      }), W(this, "emit", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(s);
        const { topic: n, event: r, chainId: i } = s, o = lr().toString(), a = gn();
        await this.sendRequest({
          topic: n,
          method: "wc_sessionEvent",
          params: {
            event: r,
            chainId: i
          },
          throwOnFailedPublish: true,
          relayRpcId: o,
          clientRpcId: a
        });
      }), W(this, "disconnect", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(s);
        const { topic: n } = s;
        if (this.client.session.keys.includes(n)) await this.sendRequest({
          topic: n,
          method: "wc_sessionDelete",
          params: Ge("USER_DISCONNECTED"),
          throwOnFailedPublish: true
        }), await this.deleteSession({
          topic: n,
          emitEvent: false
        });
        else if (this.client.core.pairing.pairings.keys.includes(n)) await this.client.core.pairing.disconnect({
          topic: n
        });
        else {
          const { message: r } = ce("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
          throw new Error(r);
        }
      }), W(this, "find", (s) => (this.isInitialized(), this.client.session.getAll().filter((n) => _T(n, s)))), W(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), W(this, "authenticate", async (s, n) => {
        var r;
        this.isInitialized(), this.isValidAuthenticate(s);
        const i = n && this.client.core.linkModeSupportedApps.includes(n) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode), o = i ? Ue.link_mode : Ue.relay;
        o === Ue.relay && await this.confirmOnlineStateOrThrow();
        const { chains: a, statement: c = "", uri: l, domain: d, nonce: h, type: u, exp: f, nbf: g, methods: p = [], expiry: m } = s, T = [
          ...s.resources || []
        ], { topic: x, uri: A } = await this.client.core.pairing.create({
          methods: [
            "wc_sessionAuthenticate"
          ],
          transportType: o
        });
        this.client.logger.info({
          message: "Generated new pairing",
          pairing: {
            topic: x,
            uri: A
          }
        });
        const N = await this.client.core.crypto.generateKeyPair(), P = Vc(N);
        if (await Promise.all([
          this.client.auth.authKeys.set(na, {
            responseTopic: P,
            publicKey: N
          }),
          this.client.auth.pairingTopics.set(P, {
            topic: P,
            pairingTopic: x
          })
        ]), await this.client.core.relayer.subscribe(P, {
          transportType: o
        }), this.client.logger.info(`sending request to new pairing topic: ${x}`), p.length > 0) {
          const { namespace: C } = dn(a[0]);
          let S = ZS(C, "request", p);
          sa(T) && (S = XS(S, T.pop())), T.push(S);
        }
        const U = m && m > nt.wc_sessionAuthenticate.req.ttl ? m : nt.wc_sessionAuthenticate.req.ttl, B = {
          authPayload: {
            type: u ?? "caip122",
            chains: a,
            statement: c,
            aud: l,
            domain: d,
            version: "1",
            nonce: h,
            iat: (/* @__PURE__ */ new Date()).toISOString(),
            exp: f,
            nbf: g,
            resources: T
          },
          requester: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiryTimestamp: Ct(U)
        }, L = {
          eip155: {
            chains: a,
            methods: [
              .../* @__PURE__ */ new Set([
                "personal_sign",
                ...p
              ])
            ],
            events: [
              "chainChanged",
              "accountsChanged"
            ]
          }
        }, O = {
          requiredNamespaces: {},
          optionalNamespaces: L,
          relays: [
            {
              protocol: "irn"
            }
          ],
          pairingTopic: x,
          proposer: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiryTimestamp: Ct(nt.wc_sessionPropose.req.ttl),
          id: gn()
        }, { done: D, resolve: M, reject: _ } = qr(U, "Request expired"), y = gn(), E = Re("session_connect", O.id), w = Re("session_request", y), v = async ({ error: C, session: S }) => {
          this.events.off(w, I), C ? _(C) : S && M({
            session: S
          });
        }, I = async (C) => {
          var S, R, $;
          if (await this.deletePendingAuthRequest(y, {
            message: "fulfilled",
            code: 0
          }), C.error) {
            const X = Ge("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
            return C.error.code === X.code ? void 0 : (this.events.off(E, v), _(C.error.message));
          }
          await this.deleteProposal(O.id), this.events.off(E, v);
          const { cacaos: Y, responder: K } = C.result, j = [], J = [];
          for (const X of Y) {
            await Qu({
              cacao: X,
              projectId: this.client.core.projectId
            }) || (this.client.logger.error(X, "Signature verification failed"), _(Ge("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
            const { p: he } = X, Me = sa(he.resources), je = [
              Hl(he.iss)
            ], qe = Aa(he.iss);
            if (Me) {
              const bt = ef(Me), pn = tf(Me);
              j.push(...bt), je.push(...pn);
            }
            for (const bt of je) J.push(`${bt}:${qe}`);
          }
          const Z = await this.client.core.crypto.generateSharedKey(N, K.publicKey);
          let de;
          j.length > 0 && (de = {
            topic: Z,
            acknowledged: true,
            self: {
              publicKey: N,
              metadata: this.client.metadata
            },
            peer: K,
            controller: K.publicKey,
            expiry: Ct(Hr),
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: x,
            namespaces: Ef([
              ...new Set(j)
            ], [
              ...new Set(J)
            ]),
            transportType: o
          }, await this.client.core.relayer.subscribe(Z, {
            transportType: o
          }), await this.client.session.set(Z, de), x && await this.client.core.pairing.updateMetadata({
            topic: x,
            metadata: K.metadata
          }), de = this.client.session.get(Z)), (S = this.client.metadata.redirect) != null && S.linkMode && (R = K.metadata.redirect) != null && R.linkMode && ($ = K.metadata.redirect) != null && $.universal && n && (this.client.core.addLinkModeSupportedApp(K.metadata.redirect.universal), this.client.session.update(Z, {
            transportType: Ue.link_mode
          })), M({
            auths: Y,
            session: de
          });
        };
        this.events.once(E, v), this.events.once(w, I);
        let k;
        try {
          if (i) {
            const C = $s("wc_sessionAuthenticate", B, y);
            this.client.core.history.set(x, C);
            const S = await this.client.core.crypto.encode("", C, {
              type: hT,
              encoding: Oi
            });
            k = Wo(n, x, S);
          } else await Promise.all([
            this.sendRequest({
              topic: x,
              method: "wc_sessionAuthenticate",
              params: B,
              expiry: s.expiry,
              throwOnFailedPublish: true,
              clientRpcId: y
            }),
            this.sendRequest({
              topic: x,
              method: "wc_sessionPropose",
              params: O,
              expiry: nt.wc_sessionPropose.req.ttl,
              throwOnFailedPublish: true,
              clientRpcId: O.id
            })
          ]);
        } catch (C) {
          throw this.events.off(E, v), this.events.off(w, I), C;
        }
        return await this.setProposal(O.id, O), await this.setAuthRequest(y, {
          request: rt(_e({}, B), {
            verifyContext: {}
          }),
          pairingTopic: x,
          transportType: o
        }), {
          uri: k ?? A,
          response: D
        };
      }), W(this, "approveSessionAuthenticate", async (s) => {
        const { id: n, auths: r } = s, i = this.client.core.eventClient.createEvent({
          properties: {
            topic: n.toString(),
            trace: [
              er.authenticated_session_approve_started
            ]
          }
        });
        try {
          this.isInitialized();
        } catch (m) {
          throw i.setError(Ni.no_internet_connection), m;
        }
        const o = this.getPendingAuthRequest(n);
        if (!o) throw i.setError(Ni.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${n}`);
        const a = o.transportType || Ue.relay;
        a === Ue.relay && await this.confirmOnlineStateOrThrow();
        const c = o.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), d = Vc(c), h = {
          type: Hc,
          receiverPublicKey: c,
          senderPublicKey: l
        }, u = [], f = [];
        for (const m of r) {
          if (!await Qu({
            cacao: m,
            projectId: this.client.core.projectId
          })) {
            i.setError(Ni.invalid_cacao);
            const P = Ge("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
            throw await this.sendError({
              id: n,
              topic: d,
              error: P,
              encodeOpts: h
            }), new Error(P.message);
          }
          i.addTrace(er.cacaos_verified);
          const { p: T } = m, x = sa(T.resources), A = [
            Hl(T.iss)
          ], N = Aa(T.iss);
          if (x) {
            const P = ef(x), U = tf(x);
            u.push(...P), A.push(...U);
          }
          for (const P of A) f.push(`${P}:${N}`);
        }
        const g = await this.client.core.crypto.generateSharedKey(l, c);
        i.addTrace(er.create_authenticated_session_topic);
        let p;
        if ((u == null ? void 0 : u.length) > 0) {
          p = {
            topic: g,
            acknowledged: true,
            self: {
              publicKey: l,
              metadata: this.client.metadata
            },
            peer: {
              publicKey: c,
              metadata: o.requester.metadata
            },
            controller: c,
            expiry: Ct(Hr),
            authentication: r,
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: o.pairingTopic,
            namespaces: Ef([
              ...new Set(u)
            ], [
              ...new Set(f)
            ]),
            transportType: a
          }, i.addTrace(er.subscribing_authenticated_session_topic);
          try {
            await this.client.core.relayer.subscribe(g, {
              transportType: a
            });
          } catch (m) {
            throw i.setError(Ni.subscribe_authenticated_session_topic_failure), m;
          }
          i.addTrace(er.subscribe_authenticated_session_topic_success), await this.client.session.set(g, p), i.addTrace(er.store_authenticated_session), await this.client.core.pairing.updateMetadata({
            topic: o.pairingTopic,
            metadata: o.requester.metadata
          });
        }
        i.addTrace(er.publishing_authenticated_session_approve);
        try {
          await this.sendResult({
            topic: d,
            id: n,
            result: {
              cacaos: r,
              responder: {
                publicKey: l,
                metadata: this.client.metadata
              }
            },
            encodeOpts: h,
            throwOnFailedPublish: true,
            appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
          });
        } catch (m) {
          throw i.setError(Ni.authenticated_session_approve_publish_failure), m;
        }
        return await this.client.auth.requests.delete(n, {
          message: "fulfilled",
          code: 0
        }), await this.client.core.pairing.activate({
          topic: o.pairingTopic
        }), this.client.core.eventClient.deleteEvent({
          eventId: i.eventId
        }), {
          session: p
        };
      }), W(this, "rejectSessionAuthenticate", async (s) => {
        this.isInitialized();
        const { id: n, reason: r } = s, i = this.getPendingAuthRequest(n);
        if (!i) throw new Error(`Could not find pending auth request with id ${n}`);
        i.transportType === Ue.relay && await this.confirmOnlineStateOrThrow();
        const o = i.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = Vc(o), l = {
          type: Hc,
          receiverPublicKey: o,
          senderPublicKey: a
        };
        await this.sendError({
          id: n,
          topic: c,
          error: r,
          encodeOpts: l,
          rpcOpts: nt.wc_sessionAuthenticate.reject,
          appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
        }), await this.client.auth.requests.delete(n, {
          message: "rejected",
          code: 0
        }), await this.deleteProposal(n);
      }), W(this, "formatAuthMessage", (s) => {
        this.isInitialized();
        const { request: n, iss: r } = s;
        return Lm(n, r);
      }), W(this, "processRelayMessageCache", () => {
        setTimeout(async () => {
          if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
            const s = this.relayMessageCache.shift();
            s && await this.onRelayMessage(s);
          } catch (s) {
            this.client.logger.error(s);
          }
        }, 50);
      }), W(this, "cleanupDuplicatePairings", async (s) => {
        if (s.pairingTopic) try {
          const n = this.client.core.pairing.pairings.get(s.pairingTopic), r = this.client.core.pairing.pairings.getAll().filter((i) => {
            var o, a;
            return ((o = i.peerMetadata) == null ? void 0 : o.url) && ((a = i.peerMetadata) == null ? void 0 : a.url) === s.peer.metadata.url && i.topic && i.topic !== n.topic;
          });
          if (r.length === 0) return;
          this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((i) => this.client.core.pairing.disconnect({
            topic: i.topic
          }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
      }), W(this, "deleteSession", async (s) => {
        var n;
        const { topic: r, expirerHasDeleted: i = false, emitEvent: o = true, id: a = 0 } = s, { self: c } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, Ge("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Nf).catch((l) => this.client.logger.warn(l)), r === ((n = this.sessionRequestQueue.queue[0]) == null ? void 0 : n.topic) && (this.sessionRequestQueue.state = ks.idle), await Promise.all(this.getPendingSessionRequests().filter((l) => l.topic === r).map((l) => this.deletePendingSessionRequest(l.id, Ge("USER_DISCONNECTED")))), o && this.client.events.emit("session_delete", {
          id: a,
          topic: r
        });
      }), W(this, "deleteProposal", async (s, n) => {
        var _a2;
        if (n) try {
          const r = this.client.proposal.get(s);
          (_a2 = this.client.core.eventClient.getEvent({
            topic: r.pairingTopic
          })) == null ? void 0 : _a2.setError(Qn.proposal_expired);
        } catch {
        }
        await Promise.all([
          this.client.proposal.delete(s, Ge("USER_DISCONNECTED")),
          n ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "proposal");
      }), W(this, "deletePendingSessionRequest", async (s, n, r = false) => {
        await Promise.all([
          this.client.pendingRequest.delete(s, n),
          r ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== s), r && (this.sessionRequestQueue.state = ks.idle, this.client.events.emit("session_request_expire", {
          id: s
        }));
      }), W(this, "deletePendingAuthRequest", async (s, n, r = false) => {
        await Promise.all([
          this.client.auth.requests.delete(s, n),
          r ? Promise.resolve() : this.client.core.expirer.del(s)
        ]);
      }), W(this, "setExpiry", async (s, n) => {
        this.client.session.keys.includes(s) && (this.client.core.expirer.set(s, n), await this.client.session.update(s, {
          expiry: n
        }));
      }), W(this, "setProposal", async (s, n) => {
        this.client.core.expirer.set(s, Ct(nt.wc_sessionPropose.req.ttl)), await this.client.proposal.set(s, n);
      }), W(this, "setAuthRequest", async (s, n) => {
        const { request: r, pairingTopic: i, transportType: o = Ue.relay } = n;
        this.client.core.expirer.set(s, r.expiryTimestamp), await this.client.auth.requests.set(s, {
          authPayload: r.authPayload,
          requester: r.requester,
          expiryTimestamp: r.expiryTimestamp,
          id: s,
          pairingTopic: i,
          verifyContext: r.verifyContext,
          transportType: o
        });
      }), W(this, "setPendingSessionRequest", async (s) => {
        const { id: n, topic: r, params: i, verifyContext: o } = s, a = i.request.expiryTimestamp || Ct(nt.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(n, a), await this.client.pendingRequest.set(n, {
          id: n,
          topic: r,
          params: i,
          verifyContext: o
        });
      }), W(this, "sendRequest", async (s) => {
        const { topic: n, method: r, params: i, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: d, tvf: h, publishOpts: u = {} } = s, f = $s(r, i, c);
        let g;
        const p = !!d;
        try {
          const x = p ? Oi : tr;
          g = await this.client.core.crypto.encode(n, f, {
            encoding: x
          });
        } catch (x) {
          throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${n} failed`), x;
        }
        let m;
        if (ox.includes(r)) {
          const x = xn(JSON.stringify(f)), A = xn(g);
          m = await this.client.core.verify.register({
            id: A,
            decryptedId: x
          });
        }
        const T = _e(_e({}, nt[r].req), u);
        if (T.attestation = m, o && (T.ttl = o), a && (T.id = a), this.client.core.history.set(n, f), p) {
          const x = Wo(d, n, g);
          await globalThis.Linking.openURL(x, this.client.name);
        } else T.tvf = rt(_e({}, h), {
          correlationId: f.id
        }), l ? (T.internal = rt(_e({}, T.internal), {
          throwOnFailedPublish: true
        }), await this.client.core.relayer.publish(n, g, T)) : this.client.core.relayer.publish(n, g, T).catch((x) => this.client.logger.error(x));
        return f.id;
      }), W(this, "sendProposeSession", async (s) => {
        const { proposal: n, publishOpts: r } = s, i = $s("wc_sessionPropose", n, n.id);
        this.client.core.history.set(n.pairingTopic, i);
        const o = await this.client.core.crypto.encode(n.pairingTopic, i, {
          encoding: tr
        }), a = xn(JSON.stringify(i)), c = xn(o), l = await this.client.core.verify.register({
          id: c,
          decryptedId: a
        });
        await this.client.core.relayer.publishCustom({
          payload: {
            pairingTopic: n.pairingTopic,
            sessionProposal: o
          },
          opts: rt(_e({}, r), {
            publishMethod: "wc_proposeSession",
            attestation: l
          })
        });
      }), W(this, "sendApproveSession", async (s) => {
        const { sessionTopic: n, pairingProposalResponse: r, proposal: i, sessionSettleRequest: o, publishOpts: a } = s, c = Ji(i.id, r), l = await this.client.core.crypto.encode(i.pairingTopic, c, {
          encoding: tr
        }), d = $s("wc_sessionSettle", o, a == null ? void 0 : a.id), h = await this.client.core.crypto.encode(n, d, {
          encoding: tr
        });
        this.client.core.history.set(n, d), await this.client.core.relayer.publishCustom({
          payload: {
            sessionTopic: n,
            pairingTopic: i.pairingTopic,
            sessionProposalResponse: l,
            sessionSettlementRequest: h
          },
          opts: rt(_e({}, a), {
            publishMethod: "wc_approveSession"
          })
        });
      }), W(this, "sendResult", async (s) => {
        const { id: n, topic: r, result: i, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = s, l = Ji(n, i);
        let d;
        const h = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const g = h ? Oi : tr;
          d = await this.client.core.crypto.encode(r, l, rt(_e({}, a || {}), {
            encoding: g
          }));
        } catch (g) {
          throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`), g;
        }
        let u, f;
        try {
          u = await this.client.core.history.get(r, n);
          const g = u.request;
          try {
            f = this.getTVFParams(n, g.params, i);
          } catch (p) {
            this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${p == null ? void 0 : p.message}`);
          }
        } catch (g) {
          throw this.client.logger.error(`sendResult() -> history.get(${r}, ${n}) failed`), g;
        }
        if (h) {
          const g = Wo(c, r, d);
          await globalThis.Linking.openURL(g, this.client.name);
        } else {
          const g = u.request.method, p = nt[g].res;
          p.tvf = rt(_e({}, f), {
            correlationId: n
          }), o ? (p.internal = rt(_e({}, p.internal), {
            throwOnFailedPublish: true
          }), await this.client.core.relayer.publish(r, d, p)) : this.client.core.relayer.publish(r, d, p).catch((m) => this.client.logger.error(m));
        }
        await this.client.core.history.resolve(l);
      }), W(this, "sendError", async (s) => {
        const { id: n, topic: r, error: i, encodeOpts: o, rpcOpts: a, appLink: c } = s, l = hp(n, i);
        let d;
        const h = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const f = h ? Oi : tr;
          d = await this.client.core.crypto.encode(r, l, rt(_e({}, o || {}), {
            encoding: f
          }));
        } catch (f) {
          throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`), f;
        }
        let u;
        try {
          u = await this.client.core.history.get(r, n);
        } catch (f) {
          throw this.client.logger.error(`sendError() -> history.get(${r}, ${n}) failed`), f;
        }
        if (h) {
          const f = Wo(c, r, d);
          await globalThis.Linking.openURL(f, this.client.name);
        } else {
          const f = u.request.method, g = a || nt[f].res;
          this.client.core.relayer.publish(r, d, g);
        }
        await this.client.core.history.resolve(l);
      }), W(this, "cleanup", async () => {
        const s = [], n = [];
        this.client.session.getAll().forEach((r) => {
          let i = false;
          Rn(r.expiry) && (i = true), this.client.core.crypto.keychain.has(r.topic) || (i = true), i && s.push(r.topic);
        }), this.client.proposal.getAll().forEach((r) => {
          Rn(r.expiryTimestamp) && n.push(r.id);
        }), await Promise.all([
          ...s.map((r) => this.deleteSession({
            topic: r
          })),
          ...n.map((r) => this.deleteProposal(r))
        ]);
      }), W(this, "onProviderMessageEvent", async (s) => {
        !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(s) : await this.onRelayMessage(s);
      }), W(this, "onRelayEventRequest", async (s) => {
        this.requestQueue.queue.push(s), await this.processRequestsQueue();
      }), W(this, "processRequestsQueue", async () => {
        if (this.requestQueue.state === ks.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
          this.requestQueue.state = ks.active;
          const s = this.requestQueue.queue.shift();
          if (s) try {
            await this.processRequest(s);
          } catch (n) {
            this.client.logger.warn(n);
          }
        }
        this.requestQueue.state = ks.idle;
      }), W(this, "processRequest", async (s) => {
        const { topic: n, payload: r, attestation: i, transportType: o, encryptedId: a } = s, c = r.method;
        if (!this.shouldIgnorePairingRequest({
          topic: n,
          requestMethod: c
        })) switch (c) {
          case "wc_sessionPropose":
            return await this.onSessionProposeRequest({
              topic: n,
              payload: r,
              attestation: i,
              encryptedId: a
            });
          case "wc_sessionSettle":
            return await this.onSessionSettleRequest(n, r);
          case "wc_sessionUpdate":
            return await this.onSessionUpdateRequest(n, r);
          case "wc_sessionExtend":
            return await this.onSessionExtendRequest(n, r);
          case "wc_sessionPing":
            return await this.onSessionPingRequest(n, r);
          case "wc_sessionDelete":
            return await this.onSessionDeleteRequest(n, r);
          case "wc_sessionRequest":
            return await this.onSessionRequest({
              topic: n,
              payload: r,
              attestation: i,
              encryptedId: a,
              transportType: o
            });
          case "wc_sessionEvent":
            return await this.onSessionEventRequest(n, r);
          case "wc_sessionAuthenticate":
            return await this.onSessionAuthenticateRequest({
              topic: n,
              payload: r,
              attestation: i,
              encryptedId: a,
              transportType: o
            });
          default:
            return this.client.logger.info(`Unsupported request method ${c}`);
        }
      }), W(this, "onRelayEventResponse", async (s) => {
        const { topic: n, payload: r, transportType: i } = s, o = (await this.client.core.history.get(n, r.id)).request.method;
        switch (o) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(n, r, i);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(n, r);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(n, r);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(n, r);
          case "wc_sessionPing":
            return this.onSessionPingResponse(n, r);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(n, r);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateResponse(n, r);
          default:
            return this.client.logger.info(`Unsupported response method ${o}`);
        }
      }), W(this, "onRelayEventUnknownPayload", (s) => {
        const { topic: n } = s, { message: r } = ce("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
        throw new Error(r);
      }), W(this, "shouldIgnorePairingRequest", (s) => {
        const { topic: n, requestMethod: r } = s, i = this.expectedPairingMethodMap.get(n);
        return !i || i.includes(r) ? false : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
      }), W(this, "onSessionProposeRequest", async (s) => {
        const { topic: n, payload: r, attestation: i, encryptedId: o } = s, { params: a, id: c } = r;
        try {
          const l = this.client.core.eventClient.getEvent({
            topic: n
          });
          this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l == null ? void 0 : l.setError(Ys.proposal_listener_not_found)), this.isValidConnect(_e({}, r.params));
          const d = a.expiryTimestamp || Ct(nt.wc_sessionPropose.req.ttl), h = _e({
            id: c,
            pairingTopic: n,
            expiryTimestamp: d,
            attestation: i,
            encryptedId: o
          }, a);
          await this.setProposal(c, h);
          const u = await this.getVerifyContext({
            attestationId: i,
            hash: xn(JSON.stringify(r)),
            encryptedId: o,
            metadata: h.proposer.metadata
          });
          l == null ? void 0 : l.addTrace(Ps.emit_session_proposal), this.client.events.emit("session_proposal", {
            id: c,
            params: h,
            verifyContext: u
          });
        } catch (l) {
          await this.sendError({
            id: c,
            topic: n,
            error: l,
            rpcOpts: nt.wc_sessionPropose.autoReject
          }), this.client.logger.error(l);
        }
      }), W(this, "onSessionProposeResponse", async (s, n, r) => {
        const { id: i } = n;
        if (Ks(n)) {
          const { result: o } = n;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: o
          });
          const a = this.client.proposal.get(i);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: a
          });
          const c = a.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: c
          });
          const l = o.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: l
          });
          const d = await this.client.core.crypto.generateSharedKey(c, l);
          this.pendingSessions.set(i, {
            sessionTopic: d,
            pairingTopic: s,
            proposalId: i,
            publicKey: c
          });
          const h = await this.client.core.relayer.subscribe(d, {
            transportType: r
          });
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: h
          }), await this.client.core.pairing.activate({
            topic: s
          });
        } else if (Rs(n)) {
          await this.deleteProposal(i);
          const o = Re("session_connect", i);
          if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
          this.events.emit(o, {
            error: n.error
          });
        }
      }), W(this, "onSessionSettleRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          this.isValidSessionSettleRequest(i);
          const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, scopedProperties: h, sessionConfig: u, proposalRequestsResponses: f } = n.params, g = [
            ...this.pendingSessions.values()
          ].find((T) => T.sessionTopic === s);
          if (!g) return this.client.logger.error(`Pending session not found for topic ${s}`);
          const p = this.client.proposal.get(g.proposalId), m = rt(_e(_e(_e({
            topic: s,
            relay: o,
            expiry: c,
            namespaces: l,
            acknowledged: true,
            pairingTopic: g.pairingTopic,
            requiredNamespaces: p.requiredNamespaces,
            optionalNamespaces: p.optionalNamespaces,
            controller: a.publicKey,
            self: {
              publicKey: g.publicKey,
              metadata: this.client.metadata
            },
            peer: {
              publicKey: a.publicKey,
              metadata: a.metadata
            }
          }, d && {
            sessionProperties: d
          }), h && {
            scopedProperties: h
          }), u && {
            sessionConfig: u
          }), {
            transportType: Ue.relay,
            authentication: f == null ? void 0 : f.authentication,
            walletPayResult: f == null ? void 0 : f.walletPay
          });
          await this.client.session.set(m.topic, m), await this.setExpiry(m.topic, m.expiry), await this.client.core.pairing.updateMetadata({
            topic: g.pairingTopic,
            metadata: m.peer.metadata
          }), this.pendingSessions.delete(g.proposalId), this.deleteProposal(g.proposalId, false), this.cleanupDuplicatePairings(m), await this.sendResult({
            id: n.id,
            topic: s,
            throwOnFailedPublish: true,
            result: true
          }), this.client.events.emit("session_connect", {
            session: m
          }), this.events.emit(Re("session_connect", g.proposalId), {
            session: m
          });
        } catch (o) {
          await this.sendError({
            id: r,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), W(this, "onSessionSettleResponse", async (s, n) => {
        const { id: r } = n;
        Ks(n) ? (await this.client.session.update(s, {
          acknowledged: true
        }), this.events.emit(Re("session_approve", r), {})) : Rs(n) && (await this.client.session.delete(s, Ge("USER_DISCONNECTED")), this.events.emit(Re("session_approve", r), {
          error: n.error
        }));
      }), W(this, "onSessionUpdateRequest", async (s, n) => {
        const { params: r, id: i } = n;
        try {
          const o = `${s}_session_update`, a = ki.get(o);
          if (a && this.isRequestOutOfSync(a, i)) {
            this.client.logger.warn(`Discarding out of sync request - ${i}`), this.sendError({
              id: i,
              topic: s,
              error: Ge("INVALID_UPDATE_REQUEST")
            });
            return;
          }
          this.isValidUpdate(_e({
            topic: s
          }, r));
          try {
            ki.set(o, i), await this.client.session.update(s, {
              namespaces: r.namespaces
            }), await this.sendResult({
              id: i,
              topic: s,
              result: true
            });
          } catch (c) {
            throw ki.delete(o), c;
          }
          this.client.events.emit("session_update", {
            id: i,
            topic: s,
            params: r
          });
        } catch (o) {
          await this.sendError({
            id: i,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), W(this, "isRequestOutOfSync", (s, n) => n.toString().slice(0, -3) < s.toString().slice(0, -3)), W(this, "onSessionUpdateResponse", (s, n) => {
        const { id: r } = n, i = Re("session_update", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Ks(n) ? this.events.emit(Re("session_update", r), {}) : Rs(n) && this.events.emit(Re("session_update", r), {
          error: n.error
        });
      }), W(this, "onSessionExtendRequest", async (s, n) => {
        const { id: r } = n;
        try {
          this.isValidExtend({
            topic: s
          }), await this.setExpiry(s, Ct(Hr)), await this.sendResult({
            id: r,
            topic: s,
            result: true
          }), this.client.events.emit("session_extend", {
            id: r,
            topic: s
          });
        } catch (i) {
          await this.sendError({
            id: r,
            topic: s,
            error: i
          }), this.client.logger.error(i);
        }
      }), W(this, "onSessionExtendResponse", (s, n) => {
        const { id: r } = n, i = Re("session_extend", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Ks(n) ? this.events.emit(Re("session_extend", r), {}) : Rs(n) && this.events.emit(Re("session_extend", r), {
          error: n.error
        });
      }), W(this, "onSessionPingRequest", async (s, n) => {
        const { id: r } = n;
        try {
          this.isValidPing({
            topic: s
          }), await this.sendResult({
            id: r,
            topic: s,
            result: true,
            throwOnFailedPublish: true
          }), this.client.events.emit("session_ping", {
            id: r,
            topic: s
          });
        } catch (i) {
          await this.sendError({
            id: r,
            topic: s,
            error: i
          }), this.client.logger.error(i);
        }
      }), W(this, "onSessionPingResponse", (s, n) => {
        const { id: r } = n, i = Re("session_ping", r);
        setTimeout(() => {
          if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners 2176`);
          Ks(n) ? this.events.emit(Re("session_ping", r), {}) : Rs(n) && this.events.emit(Re("session_ping", r), {
            error: n.error
          });
        }, 500);
      }), W(this, "onSessionDeleteRequest", async (s, n) => {
        const { id: r } = n;
        try {
          await this.isValidDisconnect({
            topic: s,
            reason: n.params
          }), this.cleanupPendingSentRequestsForTopic({
            topic: s,
            error: Ge("USER_DISCONNECTED")
          }), await this.deleteSession({
            topic: s,
            id: r
          });
        } catch (i) {
          this.client.logger.error(i);
        }
      }), W(this, "onSessionRequest", async (s) => {
        var n, r, i;
        const { topic: o, payload: a, attestation: c, encryptedId: l, transportType: d } = s, { id: h, params: u } = a;
        try {
          await this.isValidRequest(_e({
            topic: o
          }, u));
          const f = this.client.session.get(o), g = await this.getVerifyContext({
            attestationId: c,
            hash: xn(JSON.stringify($s("wc_sessionRequest", u, h))),
            encryptedId: l,
            metadata: f.peer.metadata,
            transportType: d
          }), p = {
            id: h,
            topic: o,
            params: u,
            verifyContext: g
          };
          await this.setPendingSessionRequest(p), d === Ue.link_mode && (n = f.peer.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp((r = f.peer.metadata.redirect) == null ? void 0 : r.universal), (i = this.client.signConfig) != null && i.disableRequestQueue ? this.emitSessionRequest(p) : (this.addSessionRequestToSessionRequestQueue(p), this.processSessionRequestQueue());
        } catch (f) {
          await this.sendError({
            id: h,
            topic: o,
            error: f
          }), this.client.logger.error(f);
        }
      }), W(this, "onSessionRequestResponse", (s, n) => {
        const { id: r } = n, i = Re("session_request", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Ks(n) ? this.events.emit(Re("session_request", r), {
          result: n.result
        }) : Rs(n) && this.events.emit(Re("session_request", r), {
          error: n.error
        });
      }), W(this, "onSessionEventRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          const o = `${s}_session_event_${i.event.name}`, a = ki.get(o);
          if (a && this.isRequestOutOfSync(a, r)) {
            this.client.logger.info(`Discarding out of sync request - ${r}`);
            return;
          }
          this.isValidEmit(_e({
            topic: s
          }, i)), this.client.events.emit("session_event", {
            id: r,
            topic: s,
            params: i
          }), ki.set(o, r);
        } catch (o) {
          await this.sendError({
            id: r,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), W(this, "onSessionAuthenticateResponse", (s, n) => {
        const { id: r } = n;
        this.client.logger.trace({
          type: "method",
          method: "onSessionAuthenticateResponse",
          topic: s,
          payload: n
        }), Ks(n) ? this.events.emit(Re("session_request", r), {
          result: n.result
        }) : Rs(n) && this.events.emit(Re("session_request", r), {
          error: n.error
        });
      }), W(this, "onSessionAuthenticateRequest", async (s) => {
        var n;
        const { topic: r, payload: i, attestation: o, encryptedId: a, transportType: c } = s;
        try {
          const { requester: l, authPayload: d, expiryTimestamp: h } = i.params, u = await this.getVerifyContext({
            attestationId: o,
            hash: xn(JSON.stringify(i)),
            encryptedId: a,
            metadata: l.metadata,
            transportType: c
          }), f = {
            requester: l,
            pairingTopic: r,
            id: i.id,
            authPayload: d,
            verifyContext: u,
            expiryTimestamp: h
          };
          await this.setAuthRequest(i.id, {
            request: f,
            pairingTopic: r,
            transportType: c
          }), c === Ue.link_mode && (n = l.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
            topic: r,
            params: i.params,
            id: i.id,
            verifyContext: u
          });
        } catch (l) {
          this.client.logger.error(l);
          const d = i.params.requester.publicKey, h = await this.client.core.crypto.generateKeyPair(), u = this.getAppLinkIfEnabled(i.params.requester.metadata, c), f = {
            type: Hc,
            receiverPublicKey: d,
            senderPublicKey: h
          };
          await this.sendError({
            id: i.id,
            topic: r,
            error: l,
            encodeOpts: f,
            rpcOpts: nt.wc_sessionAuthenticate.autoReject,
            appLink: u
          });
        }
      }), W(this, "addSessionRequestToSessionRequestQueue", (s) => {
        this.sessionRequestQueue.queue.push(s);
      }), W(this, "cleanupAfterResponse", (s) => {
        this.deletePendingSessionRequest(s.response.id, {
          message: "fulfilled",
          code: 0
        }), setTimeout(() => {
          this.sessionRequestQueue.state = ks.idle, this.processSessionRequestQueue();
        }, z.toMiliseconds(this.requestQueueDelay));
      }), W(this, "cleanupPendingSentRequestsForTopic", ({ topic: s, error: n }) => {
        const r = this.client.core.history.pending;
        r.length > 0 && r.filter((i) => i.topic === s && i.request.method === "wc_sessionRequest").forEach((i) => {
          this.events.emit(Re("session_request", i.request.id), {
            error: n
          });
        });
      }), W(this, "processSessionRequestQueue", () => {
        if (this.sessionRequestQueue.state === ks.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const s = this.sessionRequestQueue.queue[0];
        if (!s) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          this.emitSessionRequest(s);
        } catch (n) {
          this.client.logger.error(n);
        }
      }), W(this, "emitSessionRequest", (s) => {
        if (this.emittedSessionRequests.has(s.id)) {
          this.client.logger.warn({
            id: s.id
          }, `Skipping emitting \`session_request\` event for duplicate request. id: ${s.id}`);
          return;
        }
        this.sessionRequestQueue.state = ks.active, this.emittedSessionRequests.add(s.id), this.client.events.emit("session_request", s);
      }), W(this, "onPairingCreated", (s) => {
        if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods), s.active) return;
        const n = this.client.proposal.getAll().find((r) => r.pairingTopic === s.topic);
        n && this.onSessionProposeRequest({
          topic: s.topic,
          payload: $s("wc_sessionPropose", rt(_e({}, n), {
            requiredNamespaces: n.requiredNamespaces,
            optionalNamespaces: n.optionalNamespaces,
            relays: n.relays,
            proposer: n.proposer,
            sessionProperties: n.sessionProperties,
            scopedProperties: n.scopedProperties
          }), n.id),
          attestation: n.attestation,
          encryptedId: n.encryptedId
        });
      }), W(this, "isValidConnect", async (s) => {
        if (!us(s)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
          throw new Error(l);
        }
        const { pairingTopic: n, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: o, scopedProperties: a, relays: c } = s;
        if (Kt(n) || await this.isValidPairingTopic(n), !BT(c)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() relays: ${c}`);
          throw new Error(l);
        }
        if (r && !Kt(r) && Fs(r) !== 0) {
          const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
          [
            "fatal",
            "error",
            "silent"
          ].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(r, "requiredNamespaces");
        }
        if (i && !Kt(i) && Fs(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), o && !Kt(o) && this.validateSessionProps(o, "sessionProperties"), a && !Kt(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const l = Object.keys(r || {}).concat(Object.keys(i || {}));
          if (!Object.keys(a).every((d) => l.includes(d.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`);
        }
      }), W(this, "validateNamespaces", (s, n) => {
        const r = UT(s, "connect()", n);
        if (r) throw new Error(r.message);
      }), W(this, "isValidApprove", async (s) => {
        if (!us(s)) throw new Error(ce("MISSING_OR_INVALID", `approve() params: ${s}`).message);
        const { id: n, namespaces: r, relayProtocol: i, sessionProperties: o, scopedProperties: a } = s;
        this.checkRecentlyDeleted(n), await this.isValidProposalId(n);
        const c = this.client.proposal.get(n), l = zc(r, "approve()");
        if (l) throw new Error(l.message);
        const d = Af(c.requiredNamespaces, r, "approve()");
        if (d) throw new Error(d.message);
        if (!Xe(i, true)) {
          const { message: h } = ce("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
          throw new Error(h);
        }
        if (o && !Kt(o) && this.validateSessionProps(o, "sessionProperties"), a && !Kt(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const h = new Set(Object.keys(r));
          if (!Object.keys(a).every((u) => h.has(u.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(h).join(", ")}`);
        }
      }), W(this, "isValidReject", async (s) => {
        if (!us(s)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() params: ${s}`);
          throw new Error(i);
        }
        const { id: n, reason: r } = s;
        if (this.checkRecentlyDeleted(n), await this.isValidProposalId(n), !LT(r)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
          throw new Error(i);
        }
      }), W(this, "isValidSessionSettleRequest", (s) => {
        if (!us(s)) {
          const { message: l } = ce("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
          throw new Error(l);
        }
        const { relay: n, controller: r, namespaces: i, expiry: o } = s;
        if (!mw(n)) {
          const { message: l } = ce("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
          throw new Error(l);
        }
        const a = xT(r, "onSessionSettleRequest()");
        if (a) throw new Error(a.message);
        const c = zc(i, "onSessionSettleRequest()");
        if (c) throw new Error(c.message);
        if (Rn(o)) {
          const { message: l } = ce("EXPIRED", "onSessionSettleRequest()");
          throw new Error(l);
        }
      }), W(this, "isValidUpdate", async (s) => {
        if (!us(s)) {
          const { message: c } = ce("MISSING_OR_INVALID", `update() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, namespaces: r } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const i = this.client.session.get(n), o = zc(r, "update()");
        if (o) throw new Error(o.message);
        const a = Af(i.requiredNamespaces, r, "update()");
        if (a) throw new Error(a.message);
      }), W(this, "isValidExtend", async (s) => {
        if (!us(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `extend() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
      }), W(this, "isValidRequest", async (s) => {
        if (!us(s)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, request: r, chainId: i, expiry: o } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const { namespaces: a } = this.client.session.get(n);
        if (!Cf(a, i)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() chainId: ${i}`);
          throw new Error(c);
        }
        if (!MT(r)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
          throw new Error(c);
        }
        if (!jT(a, i, r.method)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() method: ${r.method}`);
          throw new Error(c);
        }
        this.validateRequestExpiry(o);
      }), W(this, "isValidRespond", async (s) => {
        var n;
        if (!us(s)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() params: ${s}`);
          throw new Error(a);
        }
        const { topic: r, response: i } = s;
        try {
          await this.isValidSessionTopic(r);
        } catch (a) {
          throw (n = s == null ? void 0 : s.response) != null && n.id && this.cleanupAfterResponse(s), a;
        }
        if (!FT(i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
          throw new Error(a);
        }
        const o = this.client.pendingRequest.get(i.id);
        if (o.topic !== r) {
          const { message: a } = ce("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i.id}, expected topic: ${o.topic}, received topic: ${r}`);
          throw new Error(a);
        }
      }), W(this, "isValidPing", async (s) => {
        if (!us(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `ping() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), W(this, "isValidEmit", async (s) => {
        if (!us(s)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() params: ${s}`);
          throw new Error(a);
        }
        const { topic: n, event: r, chainId: i } = s;
        await this.isValidSessionTopic(n);
        const { namespaces: o } = this.client.session.get(n);
        if (!Cf(o, i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() chainId: ${i}`);
          throw new Error(a);
        }
        if (!qT(r)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
        if (!WT(o, i, r.name)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
      }), W(this, "isValidDisconnect", async (s) => {
        if (!us(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `disconnect() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), W(this, "isValidAuthenticate", (s) => {
        const { chains: n, uri: r, domain: i, nonce: o } = s;
        if (!Array.isArray(n) || n.length === 0) throw new Error("chains is required and must be a non-empty array");
        if (!Xe(r, false)) throw new Error("uri is required parameter");
        if (!Xe(i, false)) throw new Error("domain is required parameter");
        if (!Xe(o, false)) throw new Error("nonce is required parameter");
        if ([
          ...new Set(n.map((c) => dn(c).namespace))
        ].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
        const { namespace: a } = dn(n[0]);
        if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
      }), W(this, "getVerifyContext", async (s) => {
        const { attestationId: n, hash: r, encryptedId: i, metadata: o, transportType: a } = s, c = {
          verified: {
            verifyUrl: o.verifyUrl || Ki,
            validation: "UNKNOWN",
            origin: o.url || ""
          }
        };
        try {
          if (a === Ue.link_mode) {
            const d = this.getAppLinkIfEnabled(o, a);
            return c.verified.validation = d && new URL(d).origin === new URL(o.url).origin ? "VALID" : "INVALID", c;
          }
          const l = await this.client.core.verify.resolve({
            attestationId: n,
            hash: r,
            encryptedId: i,
            verifyUrl: o.verifyUrl
          });
          l && (c.verified.origin = l.origin, c.verified.isScam = l.isScam, c.verified.validation = l.origin === new URL(o.url).origin ? "VALID" : "INVALID");
        } catch (l) {
          this.client.logger.warn(l);
        }
        return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
      }), W(this, "validateSessionProps", (s, n) => {
        Object.values(s).forEach((r, i) => {
          if (r == null) {
            const { message: o } = ce("MISSING_OR_INVALID", `${n} must contain an existing value for each key. Received: ${r} for key ${Object.keys(s)[i]}`);
            throw new Error(o);
          }
        });
      }), W(this, "getPendingAuthRequest", (s) => {
        const n = this.client.auth.requests.get(s);
        return typeof n == "object" ? n : void 0;
      }), W(this, "addToRecentlyDeleted", (s, n) => {
        if (this.recentlyDeletedMap.set(s, n), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
          let r = 0;
          const i = this.recentlyDeletedLimit / 2;
          for (const o of this.recentlyDeletedMap.keys()) {
            if (r++ >= i) break;
            this.recentlyDeletedMap.delete(o);
          }
        }
      }), W(this, "checkRecentlyDeleted", (s) => {
        const n = this.recentlyDeletedMap.get(s);
        if (n) {
          const { message: r } = ce("MISSING_OR_INVALID", `Record was recently deleted - ${n}: ${s}`);
          throw new Error(r);
        }
      }), W(this, "isLinkModeEnabled", (s, n) => {
        var r, i, o, a, c, l, d, h, u;
        return !s || n !== Ue.link_mode ? false : ((i = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : i.linkMode) === true && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((d = s == null ? void 0 : s.redirect) == null ? void 0 : d.universal) !== void 0 && ((h = s == null ? void 0 : s.redirect) == null ? void 0 : h.universal) !== "" && ((u = s == null ? void 0 : s.redirect) == null ? void 0 : u.linkMode) === true && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
      }), W(this, "getAppLinkIfEnabled", (s, n) => {
        var r;
        return this.isLinkModeEnabled(s, n) ? (r = s == null ? void 0 : s.redirect) == null ? void 0 : r.universal : void 0;
      }), W(this, "handleLinkModeMessage", ({ url: s }) => {
        if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
        const n = ju(s, "topic") || "", r = decodeURIComponent(ju(s, "wc_ev") || ""), i = this.client.session.keys.includes(n);
        i && this.client.session.update(n, {
          transportType: Ue.link_mode
        }), this.client.core.dispatchEnvelope({
          topic: n,
          message: r,
          sessionExists: i
        });
      }), W(this, "registerLinkModeListeners", async () => {
        var s;
        if ($N() || vm() && (s = this.client.metadata.redirect) != null && s.linkMode) {
          const n = globalThis == null ? void 0 : globalThis.Linking;
          if (typeof n < "u") {
            n.addEventListener("url", this.handleLinkModeMessage, this.client.name);
            const r = await n.getInitialURL();
            r && setTimeout(() => {
              this.handleLinkModeMessage({
                url: r
              });
            }, 50);
          }
        }
      }), W(this, "getTVFApproveParams", (s) => {
        try {
          const n = pw(s.namespaces), r = bT(s.namespaces), i = ET(s.namespaces), o = s.sessionProperties, a = s.scopedProperties;
          return {
            approvedChains: n,
            approvedMethods: r,
            approvedEvents: i,
            sessionProperties: o,
            scopedProperties: a
          };
        } catch (n) {
          return this.client.logger.warn(n, "Error getting TVF approve params"), {};
        }
      }), W(this, "getTVFParams", (s, n, r) => {
        var i, o, a;
        if (!((i = n.request) != null && i.method)) return {};
        const c = {
          correlationId: s,
          rpcMethods: [
            n.request.method
          ],
          chainId: n.chainId
        };
        try {
          const l = this.extractTxHashesFromResult(n.request, r);
          c.txHashes = l, c.contractAddresses = this.isValidContractData(n.request.params) ? [
            (a = (o = n.request.params) == null ? void 0 : o[0]) == null ? void 0 : a.to
          ] : [];
        } catch (l) {
          this.client.logger.warn(l, "Error getting TVF params");
        }
        return c;
      }), W(this, "isValidContractData", (s) => {
        var n;
        if (!s) return false;
        try {
          const r = (s == null ? void 0 : s.data) || ((n = s == null ? void 0 : s[0]) == null ? void 0 : n.data);
          if (!r.startsWith("0x")) return false;
          const i = r.slice(2);
          return /^[0-9a-fA-F]*$/.test(i) ? i.length % 2 === 0 : false;
        } catch {
        }
        return false;
      }), W(this, "extractTxHashesFromResult", (s, n) => {
        var r;
        try {
          if (!n) return [];
          const i = s.method, o = rx[i];
          if (i === "sui_signTransaction") return [
            kS(n.transactionBytes)
          ];
          if (i === "near_signTransaction") return [
            Yu(n)
          ];
          if (i === "near_signTransactions") return n.map((c) => Yu(c));
          if (i === "xrpl_signTransactionFor" || i === "xrpl_signTransaction") return [
            (r = n.tx_json) == null ? void 0 : r.hash
          ];
          if (i === "polkadot_signTransaction") return [
            ex({
              transaction: s.params.transactionPayload,
              signature: n.signature
            })
          ];
          if (i === "algo_signTxn") return un(n) ? n.map((c) => Zu(c)) : [
            Zu(n)
          ];
          if (i === "cosmos_signDirect") return [
            RS(n)
          ];
          if (i === "wallet_sendCalls") return $S(n);
          if (typeof n == "string") return [
            n
          ];
          const a = n[o.key];
          if (un(a)) return i === "solana_signAllTransactions" ? a.map((c) => OS(c)) : a;
          if (typeof a == "string") return [
            a
          ];
        } catch (i) {
          this.client.logger.warn(i, "Error extracting tx hashes from result");
        }
        return [];
      });
    }
    async processPendingMessageEvents() {
      try {
        const e = this.client.session.keys, s = this.client.core.relayer.messages.getWithoutAck(e);
        for (const [n, r] of Object.entries(s)) for (const i of r) try {
          await this.onProviderMessageEvent({
            topic: n,
            message: i,
            publishedAt: Date.now()
          });
        } catch {
          this.client.logger.warn(`Error processing pending message event for topic: ${n}, message: ${i}`);
        }
      } catch (e) {
        this.client.logger.warn(e, "processPendingMessageEvents failed");
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = ce("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    async confirmOnlineStateOrThrow() {
      await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(He.message, (e) => {
        this.onProviderMessageEvent(e);
      });
    }
    async onRelayMessage(e) {
      const { topic: s, message: n, attestation: r, transportType: i } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(na) ? this.client.auth.authKeys.get(na) : {
        publicKey: void 0
      };
      try {
        const a = await this.client.core.crypto.decode(s, n, {
          receiverPublicKey: o,
          encoding: i === Ue.link_mode ? Oi : tr
        });
        hd(a) ? (this.client.core.history.set(s, a), await this.onRelayEventRequest({
          topic: s,
          payload: a,
          attestation: r,
          transportType: i,
          encryptedId: xn(n)
        })) : ud(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({
          topic: s,
          payload: a,
          transportType: i
        }), this.client.core.history.delete(s, a.id)) : (this.client.logger.error(`onRelayMessage() -> unknown payload: ${JSON.stringify(a)}`), await this.onRelayEventUnknownPayload({
          topic: s,
          payload: a,
          transportType: i
        })), await this.client.core.relayer.messages.ack(s, n);
      } catch (a) {
        this.client.logger.error(`onRelayMessage() -> failed to process an inbound message: ${n}`), this.client.logger.error(a);
      }
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(ns.expired, async (e) => {
        const { topic: s, id: n } = xN(e.target);
        if (n && this.client.pendingRequest.keys.includes(n)) return await this.deletePendingSessionRequest(n, ce("EXPIRED"), true);
        if (n && this.client.auth.requests.keys.includes(n)) return await this.deletePendingAuthRequest(n, ce("EXPIRED"), true);
        s ? this.client.session.keys.includes(s) && (await this.deleteSession({
          topic: s,
          expirerHasDeleted: true
        }), this.client.events.emit("session_expire", {
          topic: s
        })) : n && (await this.deleteProposal(n, true), this.client.events.emit("proposal_expire", {
          id: n
        }));
      });
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(or.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(or.delete, (e) => {
        this.addToRecentlyDeleted(e.topic, "pairing");
      });
    }
    isValidPairingTopic(e) {
      if (!Xe(e, false)) {
        const { message: s } = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (Rn(this.client.core.pairing.pairings.get(e).expiry)) {
        const { message: s } = ce("EXPIRED", `pairing topic: ${e}`);
        throw new Error(s);
      }
    }
    async isValidSessionTopic(e) {
      if (!Xe(e, false)) {
        const { message: s } = ce("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (Rn(this.client.session.get(e).expiry)) {
        await this.deleteSession({
          topic: e
        });
        const { message: s } = ce("EXPIRED", `session topic: ${e}`);
        throw new Error(s);
      }
      if (!this.client.core.crypto.keychain.has(e)) {
        const { message: s } = ce("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
        throw await this.deleteSession({
          topic: e
        }), new Error(s);
      }
    }
    async isValidSessionOrPairingTopic(e) {
      if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
      else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
      else if (Xe(e, false)) {
        const { message: s } = ce("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      } else {
        const { message: s } = ce("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
    }
    async isValidProposalId(e) {
      if (!DT(e)) {
        const { message: s } = ce("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
        throw new Error(s);
      }
      if (!this.client.proposal.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (Rn(this.client.proposal.get(e).expiryTimestamp)) {
        await this.deleteProposal(e);
        const { message: s } = ce("EXPIRED", `proposal id: ${e}`);
        throw new Error(s);
      }
    }
    validateRequestExpiry(e) {
      if (e && !zT(e, Yc)) {
        const { message: s } = ce("MISSING_OR_INVALID", `request() expiry: ${e}. Expiry must be a number (in seconds) between ${Yc.min} and ${Yc.max}`);
        throw new Error(s);
      }
    }
  }
  class yx extends Rr {
    constructor(e, s) {
      super(e, s, tx, zd), this.core = e, this.logger = s;
    }
  }
  let bx = class extends Rr {
    constructor(e, s) {
      super(e, s, sx, zd), this.core = e, this.logger = s;
    }
  };
  class Ex extends Rr {
    constructor(e, s) {
      super(e, s, ix, zd, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  class vx extends Rr {
    constructor(e, s) {
      super(e, s, lx, Qa, () => na), this.core = e, this.logger = s;
    }
  }
  class Cx extends Rr {
    constructor(e, s) {
      super(e, s, dx, Qa), this.core = e, this.logger = s;
    }
  }
  class Ax extends Rr {
    constructor(e, s) {
      super(e, s, hx, Qa, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  var Ix = Object.defineProperty, Nx = (t, e, s) => e in t ? Ix(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Zc = (t, e, s) => Nx(t, typeof e != "symbol" ? e + "" : e, s);
  class Sx {
    constructor(e, s) {
      this.core = e, this.logger = s, Zc(this, "authKeys"), Zc(this, "pairingTopics"), Zc(this, "requests"), this.authKeys = new vx(this.core, this.logger), this.pairingTopics = new Cx(this.core, this.logger), this.requests = new Ax(this.core, this.logger);
    }
    async init() {
      await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
  }
  var _x = Object.defineProperty, Tx = (t, e, s) => e in t ? _x(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, be = (t, e, s) => Tx(t, typeof e != "symbol" ? e + "" : e, s);
  class Kd extends KI {
    constructor(e) {
      super(e), be(this, "protocol", yw), be(this, "version", bw), be(this, "name", Gc.name), be(this, "metadata"), be(this, "core"), be(this, "logger"), be(this, "events", new _r.EventEmitter()), be(this, "engine"), be(this, "session"), be(this, "proposal"), be(this, "pendingRequest"), be(this, "auth"), be(this, "signConfig"), be(this, "on", (n, r) => this.events.on(n, r)), be(this, "once", (n, r) => this.events.once(n, r)), be(this, "off", (n, r) => this.events.off(n, r)), be(this, "removeListener", (n, r) => this.events.removeListener(n, r)), be(this, "removeAllListeners", (n) => this.events.removeAllListeners(n)), be(this, "connect", async (n) => {
        try {
          return await this.engine.connect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "pair", async (n) => {
        try {
          return await this.engine.pair(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "approve", async (n) => {
        try {
          return await this.engine.approve(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "reject", async (n) => {
        try {
          return await this.engine.reject(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "update", async (n) => {
        try {
          return await this.engine.update(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "extend", async (n) => {
        try {
          return await this.engine.extend(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "request", async (n) => {
        try {
          return await this.engine.request(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "respond", async (n) => {
        try {
          return await this.engine.respond(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "ping", async (n) => {
        try {
          return await this.engine.ping(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "emit", async (n) => {
        try {
          return await this.engine.emit(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "disconnect", async (n) => {
        try {
          return await this.engine.disconnect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "find", (n) => {
        try {
          return this.engine.find(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "getPendingSessionRequests", () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (n) {
          throw this.logger.error(n.message), n;
        }
      }), be(this, "authenticate", async (n, r) => {
        try {
          return await this.engine.authenticate(n, r);
        } catch (i) {
          throw this.logger.error(i.message), i;
        }
      }), be(this, "formatAuthMessage", (n) => {
        try {
          return this.engine.formatAuthMessage(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "approveSessionAuthenticate", async (n) => {
        try {
          return await this.engine.approveSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), be(this, "rejectSessionAuthenticate", async (n) => {
        try {
          return await this.engine.rejectSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), this.name = (e == null ? void 0 : e.name) || Gc.name, this.metadata = _N(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
      const s = ww({
        logger: (e == null ? void 0 : e.logger) || Gc.logger,
        name: this.name
      });
      this.logger = s, this.core = (e == null ? void 0 : e.core) || new HI(e), this.session = new bx(this.core, this.logger), this.proposal = new yx(this.core, this.logger), this.pendingRequest = new Ex(this.core, this.logger), this.engine = new wx(this), this.auth = new Sx(this.core, this.logger);
    }
    static async init(e) {
      const s = new Kd(e);
      return await s.initialize(), s;
    }
    get context() {
      return Zt(this.logger);
    }
    get pairing() {
      return this.core.pairing.pairings;
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
      } catch (e) {
        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
      }
    }
  }
  const xx = Kd;
  function Gd(t) {
    return t == null || typeof t != "object" && typeof t != "function";
  }
  function vw(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function Cw(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const Ox = "[object RegExp]", Aw = "[object String]", Iw = "[object Number]", Nw = "[object Boolean]", Sw = "[object Arguments]", kx = "[object Symbol]", Px = "[object Date]", Rx = "[object Map]", $x = "[object Set]", Ux = "[object Array]", Bx = "[object ArrayBuffer]", Dx = "[object Object]", Lx = "[object DataView]", Mx = "[object Uint8Array]", Fx = "[object Uint8ClampedArray]", qx = "[object Uint16Array]", jx = "[object Uint32Array]", Wx = "[object Int8Array]", Hx = "[object Int16Array]", Vx = "[object Int32Array]", zx = "[object Float32Array]", Kx = "[object Float64Array]";
  function Yd(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  function Gx(t, e) {
    return Qr(t, void 0, t, /* @__PURE__ */ new Map(), e);
  }
  function Qr(t, e, s, n = /* @__PURE__ */ new Map(), r = void 0) {
    const i = r == null ? void 0 : r(t, e, s, n);
    if (i != null) return i;
    if (Gd(t)) return t;
    if (n.has(t)) return n.get(t);
    if (Array.isArray(t)) {
      const o = new Array(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = Qr(t[a], a, s, n, r);
      return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
    }
    if (t instanceof Date) return new Date(t.getTime());
    if (t instanceof RegExp) {
      const o = new RegExp(t.source, t.flags);
      return o.lastIndex = t.lastIndex, o;
    }
    if (t instanceof Map) {
      const o = /* @__PURE__ */ new Map();
      n.set(t, o);
      for (const [a, c] of t) o.set(a, Qr(c, a, s, n, r));
      return o;
    }
    if (t instanceof Set) {
      const o = /* @__PURE__ */ new Set();
      n.set(t, o);
      for (const a of t) o.add(Qr(a, void 0, s, n, r));
      return o;
    }
    if (typeof Ae < "u" && Ae.isBuffer(t)) return t.subarray();
    if (Yd(t)) {
      const o = new (Object.getPrototypeOf(t)).constructor(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = Qr(t[a], a, s, n, r);
      return o;
    }
    if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    if (t instanceof DataView) {
      const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
      return n.set(t, o), ar(o, t, s, n, r), o;
    }
    if (typeof File < "u" && t instanceof File) {
      const o = new File([
        t
      ], t.name, {
        type: t.type
      });
      return n.set(t, o), ar(o, t, s, n, r), o;
    }
    if (t instanceof Blob) {
      const o = new Blob([
        t
      ], {
        type: t.type
      });
      return n.set(t, o), ar(o, t, s, n, r), o;
    }
    if (t instanceof Error) {
      const o = new t.constructor();
      return n.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, ar(o, t, s, n, r), o;
    }
    if (typeof t == "object" && Yx(t)) {
      const o = Object.create(Object.getPrototypeOf(t));
      return n.set(t, o), ar(o, t, s, n, r), o;
    }
    return t;
  }
  function ar(t, e, s = t, n, r) {
    const i = [
      ...Object.keys(e),
      ...vw(e)
    ];
    for (let o = 0; o < i.length; o++) {
      const a = i[o], c = Object.getOwnPropertyDescriptor(t, a);
      (c == null || c.writable) && (t[a] = Qr(e[a], a, s, n, r));
    }
  }
  function Yx(t) {
    switch (Cw(t)) {
      case Sw:
      case Ux:
      case Bx:
      case Lx:
      case Nw:
      case Px:
      case zx:
      case Kx:
      case Wx:
      case Hx:
      case Vx:
      case Rx:
      case Iw:
      case Dx:
      case Ox:
      case $x:
      case Aw:
      case kx:
      case Mx:
      case Fx:
      case qx:
      case jx:
        return true;
      default:
        return false;
    }
  }
  function Zx(t, e) {
    return Gx(t, (s, n, r, i) => {
      if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
        case Iw:
        case Aw:
        case Nw: {
          const o = new t.constructor(t == null ? void 0 : t.valueOf());
          return ar(o, t), o;
        }
        case Sw: {
          const o = {};
          return ar(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
        }
        default:
          return;
      }
    });
  }
  function Tf(t) {
    return Zx(t);
  }
  function xf(t) {
    return t !== null && typeof t == "object" && Cw(t) === "[object Arguments]";
  }
  function Of(t) {
    return typeof t == "object" && t !== null;
  }
  function Jx() {
  }
  function Xx(t) {
    return Yd(t);
  }
  function Qx(t) {
    var _a2;
    if (typeof t != "object" || t == null) return false;
    if (Object.getPrototypeOf(t) === null) return true;
    if (Object.prototype.toString.call(t) !== "[object Object]") {
      const s = t[Symbol.toStringTag];
      return s == null || !((_a2 = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) == null ? void 0 : _a2.writable) ? false : t.toString() === `[object ${s}]`;
    }
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
  }
  function eO(t) {
    if (Gd(t)) return t;
    if (Array.isArray(t) || Yd(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    const e = Object.getPrototypeOf(t), s = e.constructor;
    if (t instanceof Date || t instanceof Map || t instanceof Set) return new s(t);
    if (t instanceof RegExp) {
      const n = new s(t);
      return n.lastIndex = t.lastIndex, n;
    }
    if (t instanceof DataView) return new s(t.buffer.slice(0));
    if (t instanceof Error) {
      const n = new s(t.message);
      return n.stack = t.stack, n.name = t.name, n.cause = t.cause, n;
    }
    if (typeof File < "u" && t instanceof File) return new s([
      t
    ], t.name, {
      type: t.type,
      lastModified: t.lastModified
    });
    if (typeof t == "object") {
      const n = Object.create(e);
      return Object.assign(n, t);
    }
    return t;
  }
  function tO(t, ...e) {
    const s = e.slice(0, -1), n = e[e.length - 1];
    let r = t;
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      r = sd(r, o, n, /* @__PURE__ */ new Map());
    }
    return r;
  }
  function sd(t, e, s, n) {
    if (Gd(t) && (t = Object(t)), e == null || typeof e != "object") return t;
    if (n.has(e)) return eO(n.get(e));
    if (n.set(e, t), Array.isArray(e)) {
      e = e.slice();
      for (let i = 0; i < e.length; i++) e[i] = e[i] ?? void 0;
    }
    const r = [
      ...Object.keys(e),
      ...vw(e)
    ];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = e[o], c = t[o];
      if (xf(a) && (a = {
        ...a
      }), xf(c) && (c = {
        ...c
      }), typeof Ae < "u" && Ae.isBuffer(a) && (a = Tf(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
        const d = [], h = Reflect.ownKeys(c);
        for (let u = 0; u < h.length; u++) {
          const f = h[u];
          d[f] = c[f];
        }
        c = d;
      } else c = [];
      const l = s(c, a, o, t, e, n);
      l != null ? t[o] = l : Array.isArray(a) || Of(c) && Of(a) ? t[o] = sd(c, a, s, n) : c == null && Qx(a) ? t[o] = sd({}, a, s, n) : c == null && Xx(a) ? t[o] = Tf(a) : (c === void 0 || a !== void 0) && (t[o] = a);
    }
    return t;
  }
  function sO(t, ...e) {
    return tO(t, ...e, Jx);
  }
  const kf = "error", nO = "wss://relay.walletconnect.org", rO = "wc", _w = "universal_provider", Ho = `${rO}@2:${_w}:`, Tw = "https://rpc.walletconnect.org/v1/", xw = "generic", iO = `${Tw}bundler`, ii = "call_status", oO = 86400, Zd = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
  };
  var aO = Object.defineProperty, cO = Object.defineProperties, lO = Object.getOwnPropertyDescriptors, Pf = Object.getOwnPropertySymbols, dO = Object.prototype.hasOwnProperty, hO = Object.prototype.propertyIsEnumerable, Rf = (t, e, s) => e in t ? aO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Vo = (t, e) => {
    for (var s in e || (e = {})) dO.call(e, s) && Rf(t, s, e[s]);
    if (Pf) for (var s of Pf(e)) hO.call(e, s) && Rf(t, s, e[s]);
    return t;
  }, uO = (t, e) => cO(t, lO(e));
  function Ow(t, e, s) {
    var n;
    const r = dn(t);
    return ((n = e.rpcMap) == null ? void 0 : n[r.reference]) || `${Tw}?chainId=${r.namespace}:${r.reference}&projectId=${s}`;
  }
  function fO(t) {
    return t.includes(":") ? t.split(":")[1] : t;
  }
  function kw(t) {
    return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
  }
  function pO(t, e) {
    const s = Object.keys(e.namespaces).filter((r) => r.includes(t));
    if (!s.length) return [];
    const n = [];
    return s.forEach((r) => {
      const i = e.namespaces[r].accounts;
      n.push(...i);
    }), n;
  }
  function $f(t) {
    return Object.fromEntries(Object.entries(t).filter(([e, s]) => {
      var n, r;
      return ((n = s == null ? void 0 : s.chains) == null ? void 0 : n.length) && ((r = s == null ? void 0 : s.chains) == null ? void 0 : r.length) > 0;
    }));
  }
  function zo(t = {}, e = {}) {
    const s = $f(Uf(t)), n = $f(Uf(e));
    return sO(s, n);
  }
  function Uf(t) {
    var e, s, n, r, i;
    const o = {};
    if (!Fs(t)) return o;
    for (const [a, c] of Object.entries(t)) {
      const l = Xa(a) ? [
        a
      ] : c.chains, d = c.methods || [], h = c.events || [], u = c.rpcMap || {}, f = Xr(a);
      o[f] = uO(Vo(Vo({}, o[f]), c), {
        chains: Ms(l, (e = o[f]) == null ? void 0 : e.chains),
        methods: Ms(d, (s = o[f]) == null ? void 0 : s.methods),
        events: Ms(h, (n = o[f]) == null ? void 0 : n.events)
      }), (Fs(u) || Fs(((r = o[f]) == null ? void 0 : r.rpcMap) || {})) && (o[f].rpcMap = Vo(Vo({}, u), (i = o[f]) == null ? void 0 : i.rpcMap));
    }
    return o;
  }
  function Bf(t) {
    return t.includes(":") ? t.split(":")[2] : t;
  }
  function Df(t) {
    const e = {};
    for (const [s, n] of Object.entries(t)) {
      const r = n.methods || [], i = n.events || [], o = n.accounts || [], a = Xa(s) ? [
        s
      ] : n.chains ? n.chains : kw(n.accounts);
      e[s] = {
        chains: a,
        methods: r,
        events: i,
        accounts: o
      };
    }
    return e;
  }
  function Jc(t) {
    return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
  }
  function gO(t) {
    try {
      const e = JSON.parse(t);
      return typeof e == "object" && e !== null && !Array.isArray(e);
    } catch {
      return false;
    }
  }
  const Pw = {}, oi = (t) => Pw[t], Xc = (t, e) => {
    Pw[t] = e;
  };
  var mO = Object.defineProperty, Lf = Object.getOwnPropertySymbols, wO = Object.prototype.hasOwnProperty, yO = Object.prototype.propertyIsEnumerable, Mf = (t, e, s) => e in t ? mO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ff = (t, e) => {
    for (var s in e || (e = {})) wO.call(e, s) && Mf(t, s, e[s]);
    if (Lf) for (var s of Lf(e)) yO.call(e, s) && Mf(t, s, e[s]);
    return t;
  };
  const qf = "eip155", bO = [
    "atomic",
    "flow-control",
    "paymasterService",
    "sessionKeys",
    "auxiliaryFunds"
  ], EO = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, Qc = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, jf = (t) => Object.keys(t).filter((e) => bO.includes(e)).reduce((e, s) => (e[s] = vO(t[s]), e), {}), vO = (t) => typeof t == "string" && gO(t) ? JSON.parse(t) : t, CO = (t, e, s) => {
    const { sessionProperties: n = {}, scopedProperties: r = {} } = t, i = {};
    if (!Fs(r) && !Fs(n)) return;
    const o = jf(n);
    for (const a of s) {
      const c = EO(a);
      if (!c) continue;
      i[Qc(c)] = o;
      const l = r == null ? void 0 : r[`${qf}:${c}`];
      if (l) {
        const d = l == null ? void 0 : l[`${qf}:${c}:${e}`];
        i[Qc(c)] = Ff(Ff({}, i[Qc(c)]), jf(d || l));
      }
    }
    for (const [a, c] of Object.entries(i)) Object.keys(c).length === 0 && delete i[a];
    return Object.keys(i).length > 0 ? i : void 0;
  };
  var AO = Object.defineProperty, IO = (t, e, s) => e in t ? AO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, NO = (t, e, s) => IO(t, e + "", s);
  let el;
  class Jd {
    constructor(e) {
      NO(this, "storage"), this.storage = e;
    }
    async getItem(e) {
      return await this.storage.getItem(e);
    }
    async setItem(e, s) {
      return await this.storage.setItem(e, s);
    }
    async removeItem(e) {
      return await this.storage.removeItem(e);
    }
    static getStorage(e) {
      return el || (el = new Jd(e)), el;
    }
  }
  var SO = Object.defineProperty, _O = Object.defineProperties, TO = Object.getOwnPropertyDescriptors, Wf = Object.getOwnPropertySymbols, xO = Object.prototype.hasOwnProperty, OO = Object.prototype.propertyIsEnumerable, Hf = (t, e, s) => e in t ? SO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, kO = (t, e) => {
    for (var s in e || (e = {})) xO.call(e, s) && Hf(t, s, e[s]);
    if (Wf) for (var s of Wf(e)) OO.call(e, s) && Hf(t, s, e[s]);
    return t;
  }, PO = (t, e) => _O(t, TO(e));
  async function RO(t, e) {
    const s = dn(t.result.capabilities.caip345.caip2), n = t.result.capabilities.caip345.transactionHashes, r = await Promise.allSettled(n.map((h) => $O(s.reference, h, e))), i = r.filter((h) => h.status === "fulfilled").map((h) => h.value).filter((h) => h);
    r.filter((h) => h.status === "rejected").forEach((h) => console.warn("Failed to fetch transaction receipt:", h.reason));
    const o = !i.length || i.some((h) => !h), a = i.every((h) => (h == null ? void 0 : h.status) === "0x1"), c = i.every((h) => (h == null ? void 0 : h.status) === "0x0"), l = i.some((h) => (h == null ? void 0 : h.status) === "0x0");
    let d;
    return o ? d = 100 : a ? d = 200 : c ? d = 500 : l && (d = 600), {
      id: t.result.id,
      version: t.request.version,
      atomic: t.request.atomicRequired,
      chainId: t.request.chainId,
      capabilities: t.result.capabilities,
      receipts: i,
      status: d
    };
  }
  async function $O(t, e, s) {
    return await s(parseInt(t)).request($s("eth_getTransactionReceipt", [
      e
    ]));
  }
  async function UO({ sendCalls: t, storage: e }) {
    const s = await e.getItem(ii);
    await e.setItem(ii, PO(kO({}, s), {
      [t.result.id]: {
        request: t.request,
        result: t.result,
        expiry: Ct(oO)
      }
    }));
  }
  async function BO({ resultId: t, storage: e }) {
    const s = await e.getItem(ii);
    if (s) {
      delete s[t], await e.setItem(ii, s);
      for (const n in s) Rn(s[n].expiry) && delete s[n];
      await e.setItem(ii, s);
    }
  }
  async function DO({ resultId: t, storage: e }) {
    const s = await e.getItem(ii), n = s == null ? void 0 : s[t];
    if (n && !Rn(n.expiry)) return n;
    await BO({
      resultId: t,
      storage: e
    });
  }
  var LO = Object.defineProperty, MO = Object.defineProperties, FO = Object.getOwnPropertyDescriptors, Vf = Object.getOwnPropertySymbols, qO = Object.prototype.hasOwnProperty, jO = Object.prototype.propertyIsEnumerable, nd = (t, e, s) => e in t ? LO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, tl = (t, e) => {
    for (var s in e || (e = {})) qO.call(e, s) && nd(t, s, e[s]);
    if (Vf) for (var s of Vf(e)) jO.call(e, s) && nd(t, s, e[s]);
    return t;
  }, sl = (t, e) => MO(t, FO(e)), sr = (t, e, s) => nd(t, typeof e != "symbol" ? e + "" : e, s);
  class WO {
    constructor(e) {
      sr(this, "name", "eip155"), sr(this, "client"), sr(this, "chainId"), sr(this, "namespace"), sr(this, "httpProviders"), sr(this, "events"), sr(this, "storage"), this.namespace = e.namespace, this.events = oi("events"), this.client = oi("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = Jd.getStorage(this.client.core.storage);
    }
    async request(e) {
      switch (e.request.method) {
        case "eth_requestAccounts":
          return this.getAccounts();
        case "eth_accounts":
          return this.getAccounts();
        case "wallet_switchEthereumChain":
          return await this.handleSwitchChain(e);
        case "eth_chainId":
          return parseInt(this.getDefaultChain());
        case "wallet_getCapabilities":
          return await this.getCapabilities(e);
        case "wallet_getCallsStatus":
          return await this.getCallStatus(e);
        case "wallet_sendCalls":
          return await this.sendCalls(e);
      }
      return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    setDefaultChain(e, s) {
      this.httpProviders[e] || this.setHttpProvider(parseInt(e), s);
      const n = this.chainId;
      this.chainId = parseInt(e), this.events.emit(Zd.DEFAULT_CHAIN_CHANGED, {
        currentCaipChainId: `${this.name}:${e}`,
        previousCaipChainId: `${this.name}:${n}`
      });
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId.toString();
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      const e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    createHttpProvider(e, s) {
      const n = s || Ow(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new dd(new up(n, oi("disableProviderPing")));
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProviders() {
      const e = {};
      return this.namespace.chains.forEach((s) => {
        var n;
        const r = parseInt(fO(s));
        e[r] = this.createHttpProvider(r, (n = this.namespace.rpcMap) == null ? void 0 : n[s]);
      }), e;
    }
    getAccounts() {
      const e = this.namespace.accounts;
      return e ? [
        ...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))
      ] : [];
    }
    getHttpProvider(e) {
      const s = e || this.chainId;
      return this.httpProviders[s] || (this.httpProviders = sl(tl({}, this.httpProviders), {
        [s]: this.createHttpProvider(s)
      }), this.httpProviders[s]);
    }
    async handleSwitchChain(e) {
      var s, n;
      let r = e.request.params ? (s = e.request.params[0]) == null ? void 0 : s.chainId : "0x0";
      r = r.startsWith("0x") ? r : `0x${r}`;
      const i = parseInt(r, 16);
      if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
      else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
        topic: e.topic,
        request: {
          method: e.request.method,
          params: [
            {
              chainId: r
            }
          ]
        },
        chainId: (n = this.namespace.chains) == null ? void 0 : n[0]
      }), this.setDefaultChain(`${i}`);
      else throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
      return null;
    }
    isChainApproved(e) {
      return this.namespace.chains.includes(`${this.name}:${e}`);
    }
    async getCapabilities(e) {
      var s, n, r, i, o;
      const a = (n = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : n[0], c = ((i = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : i[1]) || [];
      if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
      const l = this.client.session.get(e.topic), d = ((o = l == null ? void 0 : l.sessionProperties) == null ? void 0 : o.capabilities) || {}, h = c.length > 0 ? c.join(",") : `0x${this.chainId.toString(16)}`, u = `${a}${h}`, f = d == null ? void 0 : d[u];
      if (f) return f;
      let g;
      try {
        g = CO(l, a, c);
      } catch (m) {
        console.warn("Failed to extract capabilities from session", m);
      }
      if (g) return g;
      const p = await this.client.request(e);
      try {
        await this.client.session.update(e.topic, {
          sessionProperties: sl(tl({}, l.sessionProperties || {}), {
            capabilities: sl(tl({}, d || {}), {
              [u]: p
            })
          })
        });
      } catch (m) {
        console.warn("Failed to update session with capabilities", m);
      }
      return p;
    }
    async getCallStatus(e) {
      var s, n, r;
      const i = this.client.session.get(e.topic), o = (s = i.sessionProperties) == null ? void 0 : s.bundler_name;
      if (o) {
        const l = this.getBundlerUrl(e.chainId, o);
        try {
          return await this.getUserOperationReceipt(l, e);
        } catch (d) {
          console.warn("Failed to fetch call status from bundler", d, l);
        }
      }
      const a = (n = i.sessionProperties) == null ? void 0 : n.bundler_url;
      if (a) try {
        return await this.getUserOperationReceipt(a, e);
      } catch (l) {
        console.warn("Failed to fetch call status from custom bundler", l, a);
      }
      const c = await DO({
        resultId: (r = e.request.params) == null ? void 0 : r[0],
        storage: this.storage
      });
      if (c) try {
        return await RO(c, this.getHttpProvider.bind(this));
      } catch (l) {
        console.warn("Failed to fetch call status from stored send calls", l, c);
      }
      if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
      throw new Error("Fetching call status not approved by the wallet.");
    }
    async getUserOperationReceipt(e, s) {
      var n;
      const r = new URL(e), i = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify($s("eth_getUserOperationReceipt", [
          (n = s.request.params) == null ? void 0 : n[0]
        ]))
      });
      if (!i.ok) throw new Error(`Failed to fetch user operation receipt - ${i.status}`);
      return await i.json();
    }
    getBundlerUrl(e, s) {
      return `${iO}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
    }
    async sendCalls(e) {
      var s, n, r;
      const i = await this.client.request(e), o = (s = e.request.params) == null ? void 0 : s[0], a = i == null ? void 0 : i.id, c = (i == null ? void 0 : i.capabilities) || {}, l = (n = c == null ? void 0 : c.caip345) == null ? void 0 : n.caip2, d = (r = c == null ? void 0 : c.caip345) == null ? void 0 : r.transactionHashes;
      return !a || !l || !(d != null && d.length) || await UO({
        sendCalls: {
          request: o,
          result: i
        },
        storage: this.storage
      }), i;
    }
  }
  var HO = Object.defineProperty, VO = (t, e, s) => e in t ? HO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Vr = (t, e, s) => VO(t, typeof e != "symbol" ? e + "" : e, s);
  class zO {
    constructor(e) {
      Vr(this, "name", xw), Vr(this, "client"), Vr(this, "httpProviders"), Vr(this, "events"), Vr(this, "namespace"), Vr(this, "chainId"), this.namespace = e.namespace, this.events = oi("events"), this.client = oi("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(e) {
      this.namespace.chains = [
        ...new Set((this.namespace.chains || []).concat(e.chains || []))
      ], this.namespace.accounts = [
        ...new Set((this.namespace.accounts || []).concat(e.accounts || []))
      ], this.namespace.methods = [
        ...new Set((this.namespace.methods || []).concat(e.methods || []))
      ], this.namespace.events = [
        ...new Set((this.namespace.events || []).concat(e.events || []))
      ], this.httpProviders = this.createHttpProviders();
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
    }
    setDefaultChain(e, s) {
      this.httpProviders[e] || this.setHttpProvider(e, s);
      const n = this.chainId;
      this.chainId = e, this.events.emit(Zd.DEFAULT_CHAIN_CHANGED, {
        currentCaipChainId: `${this.name}:${e}`,
        previousCaipChainId: `${this.name}:${n}`
      });
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      const e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getNamespaceName() {
      const e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return dn(e).namespace;
    }
    getAccounts() {
      const e = this.namespace.accounts;
      return e ? [
        ...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))
      ] : [];
    }
    createHttpProviders() {
      var e, s;
      const n = {};
      return (s = (e = this.namespace) == null ? void 0 : e.accounts) == null || s.forEach((r) => {
        var i, o;
        const a = dn(r), c = (o = (i = this.namespace) == null ? void 0 : i.rpcMap) == null ? void 0 : o[`${a.namespace}:${a.reference}`];
        n[a.reference] = this.createHttpProvider(r, c);
      }), n;
    }
    getHttpProvider(e) {
      const s = dn(e).reference, n = this.httpProviders[s];
      if (typeof n > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
      return n;
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProvider(e, s) {
      const n = s || Ow(e, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new dd(new up(n, oi("disableProviderPing")));
    }
  }
  var KO = Object.defineProperty, GO = Object.defineProperties, YO = Object.getOwnPropertyDescriptors, zf = Object.getOwnPropertySymbols, ZO = Object.prototype.hasOwnProperty, JO = Object.prototype.propertyIsEnumerable, rd = (t, e, s) => e in t ? KO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Pi = (t, e) => {
    for (var s in e || (e = {})) ZO.call(e, s) && rd(t, s, e[s]);
    if (zf) for (var s of zf(e)) JO.call(e, s) && rd(t, s, e[s]);
    return t;
  }, Ko = (t, e) => GO(t, YO(e)), Ft = (t, e, s) => rd(t, typeof e != "symbol" ? e + "" : e, s);
  let XO = class Rw {
    constructor(e) {
      Ft(this, "client"), Ft(this, "namespaces"), Ft(this, "optionalNamespaces"), Ft(this, "sessionProperties"), Ft(this, "scopedProperties"), Ft(this, "events", new fd()), Ft(this, "rpcProviders", {}), Ft(this, "session"), Ft(this, "providerOpts"), Ft(this, "logger"), Ft(this, "uri"), Ft(this, "disableProviderPing", false), Ft(this, "connectParams");
      var s, n;
      this.providerOpts = e, this.logger = ww({
        logger: (s = e.logger) != null ? s : kf,
        name: (n = this.providerOpts.name) != null ? n : _w
      }), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || false;
    }
    static async init(e) {
      const s = new Rw(e);
      return await s.initialize(), s;
    }
    async request(e, s, n) {
      const [r, i] = this.validateChain(s);
      if (!this.session) throw new Error("Please call connect() before request()");
      return await this.getProvider(r).request({
        request: Pi({}, e),
        chainId: `${r}:${i}`,
        topic: this.session.topic,
        expiry: n
      });
    }
    sendAsync(e, s, n, r) {
      const i = (/* @__PURE__ */ new Date()).getTime();
      this.request(e, n, r).then((o) => s(null, Ji(i, o))).catch((o) => s(o, void 0));
    }
    async enable() {
      if (!this.client) throw new Error("Sign Client not initialized");
      return this.session || await this.connect({
        namespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
        scopedProperties: this.scopedProperties
      }), await this.requestAccounts();
    }
    async disconnect() {
      var e;
      if (!this.session) throw new Error("Please call connect() before enable()");
      await this.client.disconnect({
        topic: (e = this.session) == null ? void 0 : e.topic,
        reason: Ge("USER_DISCONNECTED")
      }), await this.cleanup();
    }
    async connect(e) {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (this.connectParams = e, this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
    }
    async authenticate(e, s) {
      if (!this.client) throw new Error("Sign Client not initialized");
      this.setNamespaces(e), await this.cleanupPendingPairings();
      const { uri: n, response: r } = await this.client.authenticate(e, s);
      n && (this.uri = n, this.events.emit("display_uri", n));
      const i = await r();
      if (this.session = i.session, this.session) {
        const o = Df(this.session.namespaces);
        this.namespaces = zo(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
      }
      return i;
    }
    on(e, s) {
      this.events.on(e, s);
    }
    once(e, s) {
      this.events.once(e, s);
    }
    removeListener(e, s) {
      this.events.removeListener(e, s);
    }
    off(e, s) {
      this.events.off(e, s);
    }
    get isWalletConnect() {
      return true;
    }
    async pair(e) {
      var s, n;
      const { uri: r, approval: i } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
        scopedProperties: this.scopedProperties,
        authentication: (s = this.connectParams) == null ? void 0 : s.authentication,
        walletPay: (n = this.connectParams) == null ? void 0 : n.walletPay
      });
      r && (this.uri = r, this.events.emit("display_uri", r));
      const o = await i();
      this.session = o;
      const a = Df(o.namespaces);
      return this.namespaces = zo(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
    }
    setDefaultChain(e, s) {
      try {
        if (!this.session) return;
        const [n, r] = this.validateChain(e);
        this.getProvider(n).setDefaultChain(r, s);
      } catch (n) {
        if (!/Please call connect/.test(n.message)) throw n;
      }
    }
    async cleanupPendingPairings(e = {}) {
      try {
        this.logger.info("Cleaning up inactive pairings...");
        const s = this.client.pairing.getAll();
        if (!un(s)) return;
        for (const n of s) e.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
        this.logger.info(`Inactive pairings cleared: ${s.length}`);
      } catch (s) {
        this.logger.warn(s, "Failed to cleanup pending pairings");
      }
    }
    abortPairingAttempt() {
      this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
    }
    async checkStorage() {
      this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
    }
    async initialize() {
      this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
    }
    async createClient() {
      var e, s;
      if (this.client = this.providerOpts.client || await xx.init({
        core: this.providerOpts.core,
        logger: this.providerOpts.logger || kf,
        relayUrl: this.providerOpts.relayUrl || nO,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
        customStoragePrefix: this.providerOpts.customStoragePrefix,
        telemetryEnabled: this.providerOpts.telemetryEnabled
      }), this.providerOpts.session) try {
        this.session = this.client.session.get(this.providerOpts.session.topic);
      } catch (n) {
        throw this.logger.error(n, "Failed to get session"), new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`);
      }
      else {
        const n = this.client.session.getAll();
        this.session = n[0];
      }
      this.logger.trace("SignClient Initialized");
    }
    createProviders() {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
      const e = [
        ...new Set(Object.keys(this.session.namespaces).map((s) => Xr(s)))
      ];
      Xc("client", this.client), Xc("events", this.events), Xc("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
        if (!this.session) return;
        const n = pO(s, this.session);
        if ((n == null ? void 0 : n.length) === 0) return;
        const r = kw(n), i = zo(this.namespaces, this.optionalNamespaces), o = Ko(Pi({}, i[s]), {
          accounts: n,
          chains: r
        });
        switch (s) {
          case "eip155":
            this.rpcProviders[s] = new WO({
              namespace: o
            });
            break;
          default:
            this.rpcProviders[s] = new zO({
              namespace: o
            });
        }
      });
    }
    registerEventListeners() {
      if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
      this.client.on("session_ping", (e) => {
        var s;
        const { topic: n } = e;
        n === ((s = this.session) == null ? void 0 : s.topic) && this.events.emit("session_ping", e);
      }), this.client.on("session_event", (e) => {
        var s;
        const { params: n, topic: r } = e;
        if (r !== ((s = this.session) == null ? void 0 : s.topic)) return;
        const { event: i } = n;
        if (i.name === "accountsChanged") {
          const o = i.data;
          o && un(o) && this.events.emit("accountsChanged", o.map(Bf));
        } else if (i.name === "chainChanged") {
          const o = n.chainId, a = n.event.data, c = Xr(o), l = Jc(o) !== Jc(a) ? `${c}:${Jc(a)}` : o;
          this.onChainChanged({
            currentCaipChainId: l
          });
        } else this.events.emit(i.name, i.data);
        this.events.emit("session_event", e);
      }), this.client.on("session_update", ({ topic: e, params: s }) => {
        var n, r;
        if (e !== ((n = this.session) == null ? void 0 : n.topic)) return;
        const { namespaces: i } = s, o = (r = this.client) == null ? void 0 : r.session.get(e);
        this.session = Ko(Pi({}, o), {
          namespaces: i
        }), this.onSessionUpdate(), this.events.emit("session_update", {
          topic: e,
          params: s
        });
      }), this.client.on("session_delete", async (e) => {
        var s;
        e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", Ko(Pi({}, Ge("USER_DISCONNECTED")), {
          data: e.topic
        })));
      }), this.on(Zd.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(Ko(Pi({}, e), {
          internal: true
        }));
      });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[xw];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var s;
        this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
      });
    }
    setNamespaces(e) {
      const { namespaces: s = {}, optionalNamespaces: n = {}, sessionProperties: r, scopedProperties: i } = e;
      this.optionalNamespaces = zo(s, n), this.sessionProperties = r, this.scopedProperties = i;
    }
    validateChain(e) {
      const [s, n] = (e == null ? void 0 : e.split(":")) || [
        "",
        ""
      ];
      if (!this.namespaces || !Object.keys(this.namespaces).length) return [
        s,
        n
      ];
      if (s && !Object.keys(this.namespaces || {}).map((o) => Xr(o)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
      if (s && n) return [
        s,
        n
      ];
      const r = Xr(Object.keys(this.namespaces)[0]), i = this.rpcProviders[r].getDefaultChain();
      return [
        r,
        i
      ];
    }
    async requestAccounts() {
      const [e] = this.validateChain();
      return await this.getProvider(e).requestAccounts();
    }
    async onChainChanged({ currentCaipChainId: e, previousCaipChainId: s, internal: n = false }) {
      if (!this.namespaces) return;
      const [r, i] = this.validateChain(e);
      i && (this.updateNamespaceChain(r, i), n ? (this.events.emit("chainChanged", i), this.emitAccountsChangedOnChainChange({
        namespace: r,
        currentCaipChainId: e,
        previousCaipChainId: s
      })) : this.getProvider(r).setDefaultChain(i), await this.persist("namespaces", this.namespaces));
    }
    emitAccountsChangedOnChainChange({ namespace: e, currentCaipChainId: s, previousCaipChainId: n }) {
      var r, i;
      try {
        if (n === s) return;
        const o = (i = (r = this.session) == null ? void 0 : r.namespaces[e]) == null ? void 0 : i.accounts;
        if (!o) return;
        const a = o.filter((c) => c.includes(`${s}:`)).map(Bf);
        if (!un(a)) return;
        this.events.emit("accountsChanged", a);
      } catch (o) {
        this.logger.warn(o, "Failed to emit accountsChanged on chain change");
      }
    }
    updateNamespaceChain(e, s) {
      if (!this.namespaces) return;
      const n = this.namespaces[e] ? e : `${e}:${s}`, r = {
        chains: [],
        methods: [],
        events: [],
        defaultChain: s
      };
      this.namespaces[n] ? this.namespaces[n] && (this.namespaces[n].defaultChain = s) : this.namespaces[n] = r;
    }
    onConnect() {
      this.createProviders(), this.events.emit("connect", {
        session: this.session
      });
    }
    async cleanup() {
      this.connectParams = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({
        deletePairings: true
      }), await this.cleanupStorage();
    }
    async persist(e, s) {
      var n;
      const r = ((n = this.session) == null ? void 0 : n.topic) || "";
      await this.client.core.storage.setItem(`${Ho}/${e}${r}`, s);
    }
    async getFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      return await this.client.core.storage.getItem(`${Ho}/${e}${n}`);
    }
    async deleteFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      await this.client.core.storage.removeItem(`${Ho}/${e}${n}`);
    }
    async cleanupStorage() {
      var e;
      try {
        if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
        const s = await this.client.core.storage.getKeys();
        for (const n of s) n.startsWith(Ho) && await this.client.core.storage.removeItem(n);
      } catch (s) {
        this.logger.warn(s, "Failed to cleanup storage");
      }
    }
  };
  const Kf = 2147483648, QO = {
    convertEVMChainIdToCoinType(t) {
      if (t >= Kf) throw new Error("Invalid chainId");
      return (Kf | t) >>> 0;
    }
  }, es = Be({
    suggestions: [],
    loading: false
  }), ek = {
    state: es,
    subscribe(t) {
      return ot(es, () => t(es));
    },
    subscribeKey(t, e) {
      return at(es, t, e);
    },
    async resolveName(t) {
      var _a2, _b2;
      try {
        return await le.lookupEnsName(t);
      } catch (e) {
        const s = e;
        throw new Error(((_b2 = (_a2 = s == null ? void 0 : s.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || "Error resolving name");
      }
    },
    async isNameRegistered(t) {
      try {
        return await le.lookupEnsName(t), true;
      } catch {
        return false;
      }
    },
    async getSuggestions(t) {
      try {
        es.loading = true, es.suggestions = [];
        const e = await le.getEnsNameSuggestions(t);
        return es.suggestions = e.suggestions || [], es.suggestions;
      } catch (e) {
        const s = Yi.parseEnsApiError(e, "Error fetching name suggestions");
        throw new Error(s);
      } finally {
        es.loading = false;
      }
    },
    async getNamesForAddress(t) {
      try {
        if (!b.state.activeCaipNetwork) return [];
        const s = H.getEnsFromCacheForAddress(t);
        if (s) return s;
        const n = await le.reverseLookupEnsName({
          address: t
        });
        return H.updateEnsCache({
          address: t,
          ens: n,
          timestamp: Date.now()
        }), n;
      } catch (e) {
        const s = Yi.parseEnsApiError(e, "Error fetching names for address");
        throw new Error(s);
      }
    },
    async registerName(t) {
      var _a2;
      const e = b.state.activeCaipNetwork, s = (_a2 = b.getAccountData(e == null ? void 0 : e.chainNamespace)) == null ? void 0 : _a2.address, n = V.getAuthConnector();
      if (!e) throw new Error("Network not found");
      if (!s || !n) throw new Error("Address or auth connector not found");
      es.loading = true;
      try {
        const r = JSON.stringify({
          name: t,
          attributes: {},
          timestamp: Math.floor(Date.now() / 1e3)
        });
        ae.pushTransactionStack({
          onCancel() {
            ae.replace("RegisterAccountName");
          }
        });
        const i = await G.signMessage(r);
        es.loading = false;
        const o = e.id;
        if (!o) throw new Error("Network not found");
        const a = QO.convertEVMChainIdToCoinType(Number(o));
        await le.registerEnsName({
          coinType: a,
          address: s,
          signature: i,
          message: r
        }), b.setAccountProp("profileName", t, e.chainNamespace), H.updateEnsCache({
          address: s,
          ens: [
            {
              name: t,
              registered_at: (/* @__PURE__ */ new Date()).toISOString(),
              updated_at: void 0,
              addresses: {},
              attributes: []
            }
          ],
          timestamp: Date.now()
        }), ae.replace("RegisterAccountNameSuccess");
      } catch (r) {
        const i = Yi.parseEnsApiError(r, `Error registering name ${t}`);
        throw ae.replace("RegisterAccountName"), new Error(i);
      } finally {
        es.loading = false;
      }
    },
    validateName(t) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(t);
    },
    parseEnsApiError(t, e) {
      var _a2, _b2;
      return ((_b2 = (_a2 = t == null ? void 0 : t.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || e;
    }
  }, Yi = ls(ek);
  function id(t) {
    try {
      return new URL(t);
    } catch {
      return null;
    }
  }
  function tk(t) {
    const e = t.split("/"), s = e.length > 0 && e[0] !== void 0 ? e[0] : "", n = s.lastIndexOf(":");
    return n === -1 ? {
      host: s
    } : {
      host: s.slice(0, n),
      port: s.slice(n + 1)
    };
  }
  function sk(t) {
    const e = t.indexOf("://");
    if (e === -1) return null;
    const s = t.slice(0, e), n = e + 3;
    let r = t.indexOf("/", n);
    r === -1 && (r = t.length);
    const i = t.slice(n, r), o = i.lastIndexOf(":");
    return o === -1 ? {
      scheme: s,
      host: i
    } : {
      scheme: s,
      host: i.slice(0, o),
      port: i.slice(o + 1)
    };
  }
  function nk(t, e) {
    if (e.includes("://")) {
      const o = id(e);
      return o ? o.origin === t : false;
    }
    const { host: s, port: n } = tk(e), r = t.indexOf("://");
    if (r !== -1) {
      const o = r + 3;
      let a = t.indexOf("/", o);
      a === -1 && (a = t.length);
      const c = t.slice(o, a);
      if (n !== void 0) return `${s}:${n}` === c;
      const l = c.split(":")[0];
      return s === l;
    }
    const i = id(t);
    return i ? n !== void 0 ? s === i.hostname && n === (i.port || void 0) : s === i.hostname : false;
  }
  function rk(t, e, s) {
    let n = s, r;
    const i = n.indexOf("://");
    i !== -1 && (r = n.slice(0, i), n = n.slice(i + 3));
    const o = n.indexOf("/");
    o !== -1 && (n = n.slice(0, o));
    let a = n, c;
    const l = a.lastIndexOf(":");
    l !== -1 && (c = a.slice(l + 1), a = a.slice(0, l));
    const d = a.split(".");
    for (const p of d) if (p.includes("*") && p !== "*") return false;
    const h = t.protocol.replace(/:$/u, "");
    if (r && r !== h || c !== void 0 && c !== "*" && c !== t.port) return false;
    const u = sk(e), g = (u ? u.host : t.hostname).split(".");
    if (d.length !== g.length) return false;
    for (let p = d.length - 1; p >= 0; p -= 1) {
      const m = d[p], T = g[p];
      if (m !== "*" && m !== T) return false;
    }
    return true;
  }
  const ik = {
    ton: [
      "ton_sendMessage",
      "ton_signData"
    ],
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
      "wallet_getCallsStatus",
      "wallet_showCallsStatus",
      "wallet_sendCalls",
      "wallet_getCapabilities",
      "wallet_grantPermissions",
      "wallet_revokePermissions",
      "wallet_getAssets"
    ],
    bip122: [
      "sendTransfer",
      "signMessage",
      "signPsbt",
      "getAccountAddresses"
    ]
  }, Hn = {
    RPC_ERROR_CODE: {
      USER_REJECTED: 5e3,
      USER_REJECTED_METHODS: 5002
    },
    getMethodsByChainNamespace(t) {
      return ik[t] || [];
    },
    createDefaultNamespace(t) {
      return {
        methods: this.getMethodsByChainNamespace(t),
        events: [
          "accountsChanged",
          "chainChanged"
        ],
        chains: [],
        rpcMap: {}
      };
    },
    applyNamespaceOverrides(t, e) {
      if (!e) return {
        ...t
      };
      const s = {
        ...t
      }, n = /* @__PURE__ */ new Set();
      if (e.methods && Object.keys(e.methods).forEach((r) => n.add(r)), e.chains && Object.keys(e.chains).forEach((r) => n.add(r)), e.events && Object.keys(e.events).forEach((r) => n.add(r)), e.rpcMap && Object.keys(e.rpcMap).forEach((r) => {
        const [i] = r.split(":");
        i && n.add(i);
      }), n.forEach((r) => {
        s[r] || (s[r] = this.createDefaultNamespace(r));
      }), e.methods && Object.entries(e.methods).forEach(([r, i]) => {
        s[r] && (s[r].methods = i);
      }), e.chains && Object.entries(e.chains).forEach(([r, i]) => {
        s[r] && (s[r].chains = i);
      }), e.events && Object.entries(e.events).forEach(([r, i]) => {
        s[r] && (s[r].events = i);
      }), e.rpcMap) {
        const r = /* @__PURE__ */ new Set();
        Object.entries(e.rpcMap).forEach(([i, o]) => {
          const [a, c] = i.split(":");
          !a || !c || !s[a] || (s[a].rpcMap || (s[a].rpcMap = {}), r.has(a) || (s[a].rpcMap = {}, r.add(a)), s[a].rpcMap[c] = o);
        });
      }
      return s;
    },
    createNamespaces(t, e) {
      const s = t.reduce((n, r) => {
        const { id: i, chainNamespace: o, rpcUrls: a } = r, c = a.default.http[0];
        n[o] || (n[o] = this.createDefaultNamespace(o));
        const l = `${o}:${i}`, d = n[o];
        switch (d.chains.push(l), l) {
          case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
            d.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
            break;
          case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
            d.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
            break;
        }
        return (d == null ? void 0 : d.rpcMap) && c && (d.rpcMap[i] = c), n;
      }, {});
      return this.applyNamespaceOverrides(s, e);
    },
    resolveReownName: async (t) => {
      var _a2;
      const e = await Yi.resolveName(t);
      return ((_a2 = ((e == null ? void 0 : e.addresses) ? Object.values(e.addresses) : [])[0]) == null ? void 0 : _a2.address) || false;
    },
    getChainsFromNamespaces(t = {}) {
      return Object.values(t).flatMap((e) => {
        const s = e.chains || [], n = e.accounts.map((r) => {
          const [i, o] = r.split(":");
          return `${i}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...s,
          ...n
        ]));
      });
    },
    isSessionEventData(t) {
      return typeof t == "object" && t !== null && "id" in t && "topic" in t && "params" in t && typeof t.params == "object" && t.params !== null && "chainId" in t.params && "event" in t.params && typeof t.params.event == "object" && t.params.event !== null;
    },
    isUserRejectedRequestError(t) {
      try {
        if (typeof t == "object" && t !== null) {
          const e = t, s = typeof e.code == "number", n = s && e.code === Hn.RPC_ERROR_CODE.USER_REJECTED_METHODS, r = s && e.code === Hn.RPC_ERROR_CODE.USER_REJECTED;
          return n || r;
        }
        return false;
      } catch {
        return false;
      }
    },
    isOriginAllowed(t, e, s) {
      const n = [
        ...e,
        ...s
      ];
      if (e.length === 0) return true;
      const r = id(t);
      if (!r) return n.some((i) => !i.includes("*") && i === t);
      if (r.hostname === "localhost" || r.hostname === "127.0.0.1") return true;
      for (const i of n) if (i.includes("*")) {
        if (rk(r, t, i)) return true;
      } else if (nk(t, i)) return true;
      return false;
    },
    listenWcProvider({ universalProvider: t, namespace: e, onConnect: s, onDisconnect: n, onAccountsChanged: r, onChainChanged: i, onDisplayUri: o }) {
      s && t.on("connect", () => {
        const a = Hn.getWalletConnectAccounts(t, e);
        s(a);
      }), n && t.on("disconnect", () => {
        n();
      }), r && t.on("accountsChanged", (a) => {
        var _a2, _b2, _c2, _d3, _e2;
        try {
          const c = ((_c2 = (_b2 = (_a2 = t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) || [], l = (_e2 = (_d3 = t.rpcProviders) == null ? void 0 : _d3[e]) == null ? void 0 : _e2.getDefaultChain(), d = a.map((h) => {
            const u = c.find((p) => p.includes(`${e}:${l}:${h}`));
            if (!u) return;
            const { chainId: f, chainNamespace: g } = it.parseCaipAddress(u);
            return {
              address: h,
              chainId: f,
              chainNamespace: g
            };
          }).filter((h) => h !== void 0);
          d.length > 0 && r(d);
        } catch (c) {
          console.warn("Failed to parse accounts for namespace on accountsChanged event", e, a, c);
        }
      }), i && t.on("chainChanged", (a) => {
        i(a);
      }), o && t.on("display_uri", (a) => {
        o(a);
      });
    },
    getWalletConnectAccounts(t, e) {
      var _a2, _b2, _c2, _d3;
      const s = /* @__PURE__ */ new Set(), n = (_d3 = (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) == null ? void 0 : _d3.map((r) => it.parseCaipAddress(r)).filter(({ address: r }) => s.has(r.toLowerCase()) ? false : (s.add(r.toLowerCase()), true));
      return n && n.length > 0 ? n : [];
    }
  }, ok = [
    F.CONNECTOR_ID.AUTH,
    F.CONNECTOR_ID.WALLET_CONNECT
  ];
  class ak {
    constructor(e) {
      this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (s) => b.getCaipNetworks(s), this.getConnectorId = (s) => V.getConnectorId(s), e && this.construct(e);
    }
    construct(e) {
      this.projectId = e.projectId, this.namespace = e.namespace, this.adapterType = e.adapterType;
    }
    get connectors() {
      return this.availableConnectors;
    }
    get connections() {
      return this.availableConnections;
    }
    get networks() {
      return this.getCaipNetworks(this.namespace);
    }
    onAuthConnected({ accounts: e, chainId: s }) {
      const n = this.getCaipNetworks().filter((r) => r.chainNamespace === this.namespace).find((r) => r.id.toString() === (s == null ? void 0 : s.toString()));
      e && n && this.addConnection({
        connectorId: F.CONNECTOR_ID.AUTH,
        accounts: e,
        caipNetwork: n
      });
    }
    setAuthProvider(e) {
      e.onConnect(this.onAuthConnected.bind(this)), e.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
        id: F.CONNECTOR_ID.AUTH,
        type: "AUTH",
        name: F.CONNECTOR_NAMES.AUTH,
        provider: e,
        imageId: void 0,
        chain: this.namespace,
        chains: []
      });
    }
    addConnector(...e) {
      const s = /* @__PURE__ */ new Set();
      this.availableConnectors = [
        ...e,
        ...this.availableConnectors
      ].filter((n) => s.has(n.id) ? false : (s.add(n.id), true)), this.emit("connectors", this.availableConnectors);
    }
    addConnection(...e) {
      const s = /* @__PURE__ */ new Set();
      this.availableConnections = [
        ...e,
        ...this.availableConnections
      ].filter((n) => s.has(n.connectorId.toLowerCase()) ? false : (s.add(n.connectorId.toLowerCase()), true)), this.emit("connections", this.availableConnections);
    }
    deleteConnection(e) {
      this.availableConnections = this.availableConnections.filter((s) => s.connectorId.toLowerCase() !== e.toLowerCase()), this.emit("connections", this.availableConnections);
    }
    clearConnections(e = false) {
      this.availableConnections = [], e && this.emit("connections", this.availableConnections);
    }
    setStatus(e, s) {
      b.setAccountProp("status", e, s);
    }
    on(e, s) {
      var _a2;
      this.eventListeners.has(e) || this.eventListeners.set(e, /* @__PURE__ */ new Set()), (_a2 = this.eventListeners.get(e)) == null ? void 0 : _a2.add(s);
    }
    off(e, s) {
      const n = this.eventListeners.get(e);
      n && n.delete(s);
    }
    removeAllEventListeners() {
      this.eventListeners.forEach((e) => {
        e.clear();
      });
    }
    emit(e, s) {
      const n = this.eventListeners.get(e);
      n && n.forEach((r) => r(s));
    }
    async connectWalletConnect(e) {
      try {
        return {
          clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
        };
      } catch (s) {
        throw Hn.isUserRejectedRequestError(s) ? new bp(s) : s;
      }
    }
    async switchNetwork(e) {
      var _a2;
      const { caipNetwork: s } = e, n = $e.getProviderId(s.chainNamespace), r = $e.getProvider(s.chainNamespace);
      if (!r) throw new Error("Provider not found");
      if (n === "WALLET_CONNECT") {
        r.setDefaultChain(s.caipNetworkId);
        return;
      }
      if (n === "AUTH") {
        const i = (_a2 = V.getAuthConnector()) == null ? void 0 : _a2.provider;
        if (!i) throw new Error("Auth provider not found");
        const o = os(s.chainNamespace);
        await i.switchNetwork({
          chainId: s.caipNetworkId
        });
        const a = await i.getUser({
          chainId: s.caipNetworkId,
          preferredAccountType: o
        });
        this.emit("switchNetwork", a);
      }
    }
    getWalletConnectConnector() {
      const e = this.connectors.find((s) => s.id === "walletConnect");
      if (!e) throw new Error("WalletConnectConnector not found");
      return e;
    }
    onConnect(e, s) {
      if (e.length > 0) {
        const { address: n, chainId: r } = ee.getAccount(e[0]), i = this.getCaipNetworks().filter((a) => a.chainNamespace === this.namespace).find((a) => a.id.toString() === (r == null ? void 0 : r.toString())), o = this.connectors.find((a) => a.id === s);
        n && (this.emit("accountChanged", {
          address: n,
          chainId: r,
          connector: o
        }), this.addConnection({
          connectorId: s,
          accounts: e.map((a) => {
            const { address: c } = ee.getAccount(a);
            return {
              address: c
            };
          }),
          caipNetwork: i
        }));
      }
    }
    onAccountsChanged(e, s, n = true) {
      var _a2, _b2;
      if (e.length > 0) {
        const { address: r } = ee.getAccount(e[0]), i = this.getConnection({
          connectorId: s,
          connections: this.connections,
          connectors: this.connectors
        });
        r && ((_a2 = this.getConnectorId(F.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === s.toLowerCase() && this.emit("accountChanged", {
          address: r,
          chainId: (_b2 = i == null ? void 0 : i.caipNetwork) == null ? void 0 : _b2.id,
          connector: i == null ? void 0 : i.connector
        }), this.addConnection({
          connectorId: s,
          accounts: e.map((o) => {
            const { address: a } = ee.getAccount(o);
            return {
              address: a
            };
          }),
          caipNetwork: i == null ? void 0 : i.caipNetwork
        });
      } else n && this.onDisconnect(s);
    }
    onDisconnect(e) {
      var _a2;
      this.removeProviderListeners(e), this.deleteConnection(e), ((_a2 = this.getConnectorId(F.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === e.toLowerCase() && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect");
    }
    onChainChanged(e, s) {
      var _a2;
      const n = typeof e == "string" && e.startsWith("0x") ? parseInt(e, 16).toString() : e.toString(), r = this.getConnection({
        connectorId: s,
        connections: this.connections,
        connectors: this.connectors
      }), i = this.getCaipNetworks().filter((o) => o.chainNamespace === this.namespace).find((o) => o.id.toString() === n);
      r && this.addConnection({
        connectorId: s,
        accounts: r.accounts,
        caipNetwork: i
      }), ((_a2 = this.getConnectorId(F.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === s.toLowerCase() && this.emit("switchNetwork", {
        chainId: n
      });
    }
    listenProviderEvents(e, s) {
      if (ok.includes(e)) return;
      const n = (o) => this.onAccountsChanged(o, e), r = (o) => this.onChainChanged(o, e), i = () => this.onDisconnect(e);
      this.providerHandlers[e] || (s.on("disconnect", i), s.on("accountsChanged", n), s.on("chainChanged", r), this.providerHandlers[e] = {
        provider: s,
        disconnect: i,
        accountsChanged: n,
        chainChanged: r
      });
    }
    removeProviderListeners(e) {
      if (this.providerHandlers[e]) {
        const { provider: s, disconnect: n, accountsChanged: r, chainChanged: i } = this.providerHandlers[e];
        s.removeListener("disconnect", n), s.removeListener("accountsChanged", r), s.removeListener("chainChanged", i), this.providerHandlers[e] = null;
      }
    }
    emitFirstAvailableConnection() {
      var _a2;
      const e = this.getConnection({
        connections: this.connections,
        connectors: this.connectors
      });
      if (e) {
        const [s] = e.accounts;
        this.emit("accountChanged", {
          address: s == null ? void 0 : s.address,
          chainId: (_a2 = e.caipNetwork) == null ? void 0 : _a2.id,
          connector: e.connector
        });
      }
    }
    getConnection({ address: e, connectorId: s, connections: n, connectors: r }) {
      if (s) {
        const o = n.find((l) => l.connectorId.toLowerCase() === s.toLowerCase());
        if (!o) return null;
        const a = r.find((l) => l.id.toLowerCase() === o.connectorId.toLowerCase()), c = e ? o.accounts.find((l) => l.address.toLowerCase() === e.toLowerCase()) : o.accounts[0];
        return {
          ...o,
          account: c,
          connector: a
        };
      }
      const i = n.find((o) => o.accounts.length > 0 && r.some((a) => a.id.toLowerCase() === o.connectorId.toLowerCase()));
      if (i) {
        const [o] = i.accounts, a = r.find((c) => c.id.toLowerCase() === i.connectorId.toLowerCase());
        return {
          ...i,
          account: o,
          connector: a
        };
      }
      return null;
    }
  }
  let nr = null;
  bs = {
    getSIWX() {
      return q.state.siwx;
    },
    async initializeIfEnabled(t = b.getActiveCaipAddress()) {
      var _a2, _b2, _c2;
      const e = q.state.siwx;
      if (!(e && t)) return;
      const [s, n, r] = t.split(":");
      if (b.checkIfSupportedNetwork(s, `${s}:${n}`)) try {
        if ((_a2 = q.state.remoteFeatures) == null ? void 0 : _a2.emailCapture) {
          const o = (_b2 = b.getAccountData(s)) == null ? void 0 : _b2.user;
          await me.open({
            view: "DataCapture",
            data: {
              email: (o == null ? void 0 : o.email) ?? void 0
            }
          });
          return;
        }
        if (nr && await nr, (await e.getSessions(`${s}:${n}`, r)).length) return;
        await me.open({
          view: "SIWXSignMessage"
        });
      } catch (i) {
        console.error("SIWXUtil:initializeIfEnabled", i), fe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(i)
        }), await ((_c2 = G._getClient()) == null ? void 0 : _c2.disconnect().catch(console.error)), ae.reset("Connect"), Us.showError("A problem occurred while trying initialize authentication");
      }
    },
    async isAuthenticated(t = b.getActiveCaipAddress()) {
      if (!q.state.siwx || !t) return true;
      const { chainNamespace: s, chainId: n, address: r } = it.parseCaipAddress(t), i = `${s}:${n}`;
      return (await bs.getSessions({
        address: r,
        caipNetworkId: i
      })).length > 0;
    },
    async requestSignMessage() {
      const t = q.state.siwx, e = ee.getPlainAddress(b.getActiveCaipAddress()), s = To();
      if (!t) throw new Error("SIWX is not enabled");
      if (!e) throw new Error("No ActiveCaipAddress found");
      if (!s) throw new Error("No ActiveCaipNetwork or client found");
      try {
        const n = await t.createMessage({
          chainId: s.caipNetworkId,
          accountAddress: e
        }), r = n.toString();
        let i = "";
        t.signMessage ? i = await t.signMessage({
          message: r,
          chainId: s.caipNetworkId,
          accountAddress: e
        }) : (V.getConnectorId(s.chainNamespace) === F.CONNECTOR_ID.AUTH && ae.pushTransactionStack({}), i = await G.signMessage(r) || ""), await t.addSession({
          data: n,
          message: r,
          signature: i
        }), b.setLastConnectedSIWECaipNetwork(s), me.close(), fe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: this.getSIWXEventProperties()
        });
      } catch (n) {
        (!me.state.open || ae.state.view === "ApproveTransaction") && await me.open({
          view: "SIWXSignMessage"
        }), Us.showError("Error signing message"), fe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(n)
        }), console.error("SWIXUtil:requestSignMessage", n);
      }
    },
    async cancelSignMessage() {
      var _a2;
      try {
        const t = this.getSIWX();
        if ((_a2 = t == null ? void 0 : t.getRequired) == null ? void 0 : _a2.call(t)) {
          const s = b.getLastConnectedSIWECaipNetwork();
          if (s) {
            const n = await (t == null ? void 0 : t.getSessions(s == null ? void 0 : s.caipNetworkId, ee.getPlainAddress(b.getActiveCaipAddress()) || ""));
            n && n.length > 0 ? await b.switchActiveNetwork(s) : await G.disconnect();
          } else await G.disconnect();
        } else me.close();
        me.close(), fe.sendEvent({
          event: "CLICK_CANCEL_SIWX",
          type: "track",
          properties: this.getSIWXEventProperties()
        });
      } catch (t) {
        console.error("SIWXUtil:cancelSignMessage", t);
      }
    },
    async getAllSessions() {
      const t = this.getSIWX(), e = b.getAllRequestedCaipNetworks(), s = [];
      return await Promise.all(e.map(async (n) => {
        const r = await (t == null ? void 0 : t.getSessions(n.caipNetworkId, ee.getPlainAddress(b.getActiveCaipAddress()) || ""));
        r && s.push(...r);
      })), s;
    },
    async getSessions(t) {
      var _a2;
      const e = q.state.siwx;
      let s = t == null ? void 0 : t.address;
      if (!s) {
        const r = b.getActiveCaipAddress();
        s = ee.getPlainAddress(r);
      }
      let n = t == null ? void 0 : t.caipNetworkId;
      return n || (n = (_a2 = b.getActiveCaipNetwork()) == null ? void 0 : _a2.caipNetworkId), e && s && n ? e.getSessions(n, s) : [];
    },
    async isSIWXCloseDisabled() {
      var _a2;
      const t = this.getSIWX();
      if (t) {
        const e = ae.state.view === "ApproveTransaction", s = ae.state.view === "SIWXSignMessage";
        if (e || s) return ((_a2 = t.getRequired) == null ? void 0 : _a2.call(t)) && (await this.getSessions()).length === 0;
      }
      return false;
    },
    async authConnectorAuthenticate({ authConnector: t, chainId: e, socialUri: s, preferredAccountType: n, chainNamespace: r }) {
      var _a2;
      const i = bs.getSIWX(), o = To();
      if (!i || !r.includes(F.CHAIN.EVM) || ((_a2 = q.state.remoteFeatures) == null ? void 0 : _a2.emailCapture)) {
        const h = await t.connect({
          chainId: e,
          socialUri: s,
          preferredAccountType: n
        });
        return {
          address: h.address,
          chainId: h.chainId,
          accounts: h.accounts
        };
      }
      const a = `${r}:${e}`, c = await i.createMessage({
        chainId: a,
        accountAddress: "<<AccountAddress>>"
      }), l = {
        accountAddress: c.accountAddress,
        chainId: c.chainId,
        domain: c.domain,
        uri: c.uri,
        version: c.version,
        nonce: c.nonce,
        notBefore: c.notBefore,
        statement: c.statement,
        resources: c.resources,
        requestId: c.requestId,
        issuedAt: c.issuedAt,
        expirationTime: c.expirationTime,
        serializedMessage: c.toString()
      }, d = await t.connect({
        chainId: e,
        socialUri: s,
        siwxMessage: l,
        preferredAccountType: n
      });
      return l.accountAddress = d.address, l.serializedMessage = d.message || "", d.signature && d.message && await bs.addEmbeddedWalletSession(l, d.message, d.signature), b.setLastConnectedSIWECaipNetwork(o), {
        address: d.address,
        chainId: d.chainId,
        accounts: d.accounts
      };
    },
    async addEmbeddedWalletSession(t, e, s) {
      if (nr) return nr;
      const n = bs.getSIWX();
      return n ? (nr = n.addSession({
        data: t,
        message: e,
        signature: s
      }).finally(() => {
        nr = null;
      }), nr) : Promise.resolve();
    },
    async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: s }) {
      var _a2, _b2, _c2;
      const n = bs.getSIWX(), r = To(), i = new Set(e.map((l) => l.split(":")[0]));
      if (!n || i.size !== 1 || !i.has("eip155")) return false;
      const o = await n.createMessage({
        chainId: ((_a2 = To()) == null ? void 0 : _a2.caipNetworkId) || "",
        accountAddress: ""
      }), a = await t.authenticate({
        nonce: o.nonce,
        domain: o.domain,
        uri: o.uri,
        exp: o.expirationTime,
        iat: o.issuedAt,
        nbf: o.notBefore,
        requestId: o.requestId,
        version: o.version,
        resources: o.resources,
        statement: o.statement,
        chainId: o.chainId,
        methods: s,
        chains: [
          o.chainId,
          ...e.filter((l) => l !== o.chainId)
        ]
      });
      Us.showLoading("Authenticating...", {
        autoClose: false
      });
      const c = {
        ...a.session.peer.metadata,
        name: a.session.peer.metadata.name,
        icon: (_b2 = a.session.peer.metadata.icons) == null ? void 0 : _b2[0],
        type: "WALLET_CONNECT"
      };
      if (b.setAccountProp("connectedWalletInfo", c, Array.from(i)[0]), (_c2 = a == null ? void 0 : a.auths) == null ? void 0 : _c2.length) {
        const l = a.auths.map((d) => {
          const h = t.client.formatAuthMessage({
            request: d.p,
            iss: d.p.iss
          });
          return {
            data: {
              ...d.p,
              accountAddress: d.p.iss.split(":").slice(-1).join(""),
              chainId: d.p.iss.split(":").slice(2, 4).join(":"),
              uri: d.p.aud ?? "",
              version: d.p.version || o.version,
              expirationTime: d.p.exp,
              issuedAt: d.p.iat,
              notBefore: d.p.nbf
            },
            message: h,
            signature: d.s.s,
            cacao: d
          };
        });
        try {
          await n.setSessions(l), r && b.setLastConnectedSIWECaipNetwork(r), fe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: bs.getSIWXEventProperties()
          });
        } catch (d) {
          throw console.error("SIWX:universalProviderAuth - failed to set sessions", d), fe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: bs.getSIWXEventProperties(d)
          }), await t.disconnect().catch(console.error), d;
        } finally {
          Us.hide();
        }
      }
      return true;
    },
    getSIWXEventProperties(t) {
      var _a2;
      const e = b.state.activeChain;
      if (!e) throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
      return {
        network: ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || "",
        isSmartAccount: os(e) === on.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: t ? ee.parseError(t) : void 0
      };
    },
    async clearSessions() {
      const t = this.getSIWX();
      t && await t.setSessions([]);
    }
  };
  class ck {
    constructor({ provider: e, namespace: s }) {
      this.id = F.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = b.getCaipNetworks.bind(b), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = s;
    }
    get chains() {
      return this.getCaipNetworks();
    }
    async connectWalletConnect() {
      if (!await this.authenticate()) {
        const s = this.getCaipNetworks(), n = q.state.universalProviderConfigOverride, r = Hn.createNamespaces(s, n);
        await this.provider.connect({
          optionalNamespaces: r
        });
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
      const e = this.chains.map((s) => s.caipNetworkId);
      return bs.universalProviderAuthenticate({
        universalProvider: this.provider,
        chains: e,
        methods: lk
      });
    }
  }
  let lk, fs, dk, hk, uk;
  lk = [
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
    "wallet_getCallsStatus",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    "wallet_getAssets"
  ];
  fs = Be({
    message: "",
    variant: "info",
    open: false
  });
  dk = {
    state: fs,
    subscribeKey(t, e) {
      return at(fs, t, e);
    },
    open(t, e) {
      const { debug: s } = q.state, { code: n, displayMessage: r, debugMessage: i } = t;
      r && s && (fs.message = r, fs.variant = e, fs.open = true);
    },
    warn(t, e, s) {
      fs.open = true, fs.message = t, fs.variant = "warning", e && console.warn(e, s);
    },
    close() {
      fs.open = false, fs.message = "", fs.variant = "info";
    }
  };
  qt = ls(dk);
  hk = {
    asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
  };
  uk = {
    asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
  };
  const ra = globalThis, Xd = ra.ShadowRoot && (ra.ShadyCSS === void 0 || ra.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Qd = Symbol(), Gf = /* @__PURE__ */ new WeakMap();
  let $w = class {
    constructor(e, s, n) {
      if (this._$cssResult$ = true, n !== Qd) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = e, this.t = s;
    }
    get styleSheet() {
      let e = this.o;
      const s = this.t;
      if (Xd && e === void 0) {
        const n = s !== void 0 && s.length === 1;
        n && (e = Gf.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Gf.set(s, e));
      }
      return e;
    }
    toString() {
      return this.cssText;
    }
  };
  let ys, fk, Yf;
  ys = (t) => new $w(typeof t == "string" ? t : t + "", void 0, Qd);
  Mn = (t, ...e) => {
    const s = t.length === 1 ? t[0] : e.reduce((n, r, i) => n + ((o) => {
      if (o._$cssResult$ === true) return o.cssText;
      if (typeof o == "number") return o;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(r) + t[i + 1], t[0]);
    return new $w(s, t, Qd);
  };
  fk = (t, e) => {
    if (Xd) t.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    else for (const s of e) {
      const n = document.createElement("style"), r = ra.litNonce;
      r !== void 0 && n.setAttribute("nonce", r), n.textContent = s.cssText, t.appendChild(n);
    }
  };
  Yf = Xd ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
    let s = "";
    for (const n of e.cssRules) s += n.cssText;
    return ys(s);
  })(t) : t;
  let pk, gk, mk, wk, yk, bk, ec, Zf, Ek, vk, Zi, Jf;
  ({ is: pk, defineProperty: gk, getOwnPropertyDescriptor: mk, getOwnPropertyNames: wk, getOwnPropertySymbols: yk, getPrototypeOf: bk } = Object);
  ec = globalThis;
  Zf = ec.trustedTypes;
  Ek = Zf ? Zf.emptyScript : "";
  vk = ec.reactiveElementPolyfillSupport;
  Zi = (t, e) => t;
  od = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? Ek : null;
          break;
        case Object:
        case Array:
          t = t == null ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let s = t;
      switch (e) {
        case Boolean:
          s = t !== null;
          break;
        case Number:
          s = t === null ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch {
            s = null;
          }
      }
      return s;
    }
  };
  Uw = (t, e) => !pk(t, e);
  Jf = {
    attribute: true,
    type: String,
    converter: od,
    reflect: false,
    useDefault: false,
    hasChanged: Uw
  };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ec.litPropertyMetadata ?? (ec.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  let zr = class extends HTMLElement {
    static addInitializer(e) {
      this._$Ei(), (this.l ?? (this.l = [])).push(e);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [
        ...this._$Eh.keys()
      ];
    }
    static createProperty(e, s = Jf) {
      if (s.state && (s.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((s = Object.create(s)).wrapped = true), this.elementProperties.set(e, s), !s.noAccessor) {
        const n = Symbol(), r = this.getPropertyDescriptor(e, n, s);
        r !== void 0 && gk(this.prototype, e, r);
      }
    }
    static getPropertyDescriptor(e, s, n) {
      const { get: r, set: i } = mk(this.prototype, e) ?? {
        get() {
          return this[s];
        },
        set(o) {
          this[s] = o;
        }
      };
      return {
        get: r,
        set(o) {
          const a = r == null ? void 0 : r.call(this);
          i == null ? void 0 : i.call(this, o), this.requestUpdate(e, a, n);
        },
        configurable: true,
        enumerable: true
      };
    }
    static getPropertyOptions(e) {
      return this.elementProperties.get(e) ?? Jf;
    }
    static _$Ei() {
      if (this.hasOwnProperty(Zi("elementProperties"))) return;
      const e = bk(this);
      e.finalize(), e.l !== void 0 && (this.l = [
        ...e.l
      ]), this.elementProperties = new Map(e.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(Zi("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Zi("properties"))) {
        const s = this.properties, n = [
          ...wk(s),
          ...yk(s)
        ];
        for (const r of n) this.createProperty(r, s[r]);
      }
      const e = this[Symbol.metadata];
      if (e !== null) {
        const s = litPropertyMetadata.get(e);
        if (s !== void 0) for (const [n, r] of s) this.elementProperties.set(n, r);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [s, n] of this.elementProperties) {
        const r = this._$Eu(s, n);
        r !== void 0 && this._$Eh.set(r, s);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(e) {
      const s = [];
      if (Array.isArray(e)) {
        const n = new Set(e.flat(1 / 0).reverse());
        for (const r of n) s.unshift(Yf(r));
      } else e !== void 0 && s.push(Yf(e));
      return s;
    }
    static _$Eu(e, s) {
      const n = s.attribute;
      return n === false ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a2;
      this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((e) => e(this));
    }
    addController(e) {
      var _a2;
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((_a2 = e.hostConnected) == null ? void 0 : _a2.call(e));
    }
    removeController(e) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.delete(e);
    }
    _$E_() {
      const e = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
      for (const n of s.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
      e.size > 0 && (this._$Ep = e);
    }
    createRenderRoot() {
      const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return fk(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
      var _a2;
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((e) => {
        var _a3;
        return (_a3 = e.hostConnected) == null ? void 0 : _a3.call(e);
      });
    }
    enableUpdating(e) {
    }
    disconnectedCallback() {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((e) => {
        var _a3;
        return (_a3 = e.hostDisconnected) == null ? void 0 : _a3.call(e);
      });
    }
    attributeChangedCallback(e, s, n) {
      this._$AK(e, n);
    }
    _$ET(e, s) {
      var _a2;
      const n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
      if (r !== void 0 && n.reflect === true) {
        const i = (((_a2 = n.converter) == null ? void 0 : _a2.toAttribute) !== void 0 ? n.converter : od).toAttribute(s, n.type);
        this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
      }
    }
    _$AK(e, s) {
      var _a2, _b2;
      const n = this.constructor, r = n._$Eh.get(e);
      if (r !== void 0 && this._$Em !== r) {
        const i = n.getPropertyOptions(r), o = typeof i.converter == "function" ? {
          fromAttribute: i.converter
        } : ((_a2 = i.converter) == null ? void 0 : _a2.fromAttribute) !== void 0 ? i.converter : od;
        this._$Em = r;
        const a = o.fromAttribute(s, i.type);
        this[r] = a ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(r)) ?? a, this._$Em = null;
      }
    }
    requestUpdate(e, s, n, r = false, i) {
      var _a2;
      if (e !== void 0) {
        const o = this.constructor;
        if (r === false && (i = this[e]), n ?? (n = o.getPropertyOptions(e)), !((n.hasChanged ?? Uw)(i, s) || n.useDefault && n.reflect && i === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(e)) && !this.hasAttribute(o._$Eu(e, n)))) return;
        this.C(e, s, n);
      }
      this.isUpdatePending === false && (this._$ES = this._$EP());
    }
    C(e, s, { useDefault: n, reflect: r, wrapped: i }, o) {
      n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? s ?? this[e]), i !== true || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (s = void 0), this._$AL.set(e, s)), r === true && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (s) {
        Promise.reject(s);
      }
      const e = this.scheduleUpdate();
      return e != null && await e, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a2;
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [r, i] of this._$Ep) this[r] = i;
          this._$Ep = void 0;
        }
        const n = this.constructor.elementProperties;
        if (n.size > 0) for (const [r, i] of n) {
          const { wrapped: o } = i, a = this[r];
          o !== true || this._$AL.has(r) || a === void 0 || this.C(r, void 0, i, a);
        }
      }
      let e = false;
      const s = this._$AL;
      try {
        e = this.shouldUpdate(s), e ? (this.willUpdate(s), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((n) => {
          var _a3;
          return (_a3 = n.hostUpdate) == null ? void 0 : _a3.call(n);
        }), this.update(s)) : this._$EM();
      } catch (n) {
        throw e = false, this._$EM(), n;
      }
      e && this._$AE(s);
    }
    willUpdate(e) {
    }
    _$AE(e) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((s) => {
        var _a3;
        return (_a3 = s.hostUpdated) == null ? void 0 : _a3.call(s);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(e)), this.updated(e);
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
    shouldUpdate(e) {
      return true;
    }
    update(e) {
      this._$Eq && (this._$Eq = this._$Eq.forEach((s) => this._$ET(s, this[s]))), this._$EM();
    }
    updated(e) {
    }
    firstUpdated(e) {
    }
  };
  zr.elementStyles = [], zr.shadowRootOptions = {
    mode: "open"
  }, zr[Zi("elementProperties")] = /* @__PURE__ */ new Map(), zr[Zi("finalized")] = /* @__PURE__ */ new Map(), vk == null ? void 0 : vk({
    ReactiveElement: zr
  }), (ec.reactiveElementVersions ?? (ec.reactiveElementVersions = [])).push("2.1.2");
  let eh, Xf, Ta, Qf, Bw, Fn, Dw, Ck, Sr, ao, co, th, Ak, nl, Ri, ep, tp, rr, sp, np, Lw, Mw, rp, yr;
  eh = globalThis;
  Xf = (t) => t;
  Ta = eh.trustedTypes;
  Qf = Ta ? Ta.createPolicy("lit-html", {
    createHTML: (t) => t
  }) : void 0;
  Bw = "$lit$";
  Fn = `lit$${Math.random().toFixed(9).slice(2)}$`;
  Dw = "?" + Fn;
  Ck = `<${Dw}>`;
  Sr = document;
  ao = () => Sr.createComment("");
  co = (t) => t === null || typeof t != "object" && typeof t != "function";
  th = Array.isArray;
  Ak = (t) => th(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function";
  nl = `[ 	
\f\r]`;
  Ri = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  ep = /-->/g;
  tp = />/g;
  rr = RegExp(`>|${nl}(?:([^\\s"'>=/]+)(${nl}*=${nl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  sp = /'/g;
  np = /"/g;
  Lw = /^(?:script|style|textarea|title)$/i;
  Mw = (t) => (e, ...s) => ({
    _$litType$: t,
    strings: e,
    values: s
  });
  Y3 = Mw(1);
  Z3 = Mw(2);
  ui = Symbol.for("lit-noChange");
  Qe = Symbol.for("lit-nothing");
  rp = /* @__PURE__ */ new WeakMap();
  yr = Sr.createTreeWalker(Sr, 129);
  function Fw(t, e) {
    if (!th(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Qf !== void 0 ? Qf.createHTML(e) : e;
  }
  const Ik = (t, e) => {
    const s = t.length - 1, n = [];
    let r, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = Ri;
    for (let a = 0; a < s; a++) {
      const c = t[a];
      let l, d, h = -1, u = 0;
      for (; u < c.length && (o.lastIndex = u, d = o.exec(c), d !== null); ) u = o.lastIndex, o === Ri ? d[1] === "!--" ? o = ep : d[1] !== void 0 ? o = tp : d[2] !== void 0 ? (Lw.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = rr) : d[3] !== void 0 && (o = rr) : o === rr ? d[0] === ">" ? (o = r ?? Ri, h = -1) : d[1] === void 0 ? h = -2 : (h = o.lastIndex - d[2].length, l = d[1], o = d[3] === void 0 ? rr : d[3] === '"' ? np : sp) : o === np || o === sp ? o = rr : o === ep || o === tp ? o = Ri : (o = rr, r = void 0);
      const f = o === rr && t[a + 1].startsWith("/>") ? " " : "";
      i += o === Ri ? c + Ck : h >= 0 ? (n.push(l), c.slice(0, h) + Bw + c.slice(h) + Fn + f) : c + Fn + (h === -2 ? a : f);
    }
    return [
      Fw(t, i + (t[s] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")),
      n
    ];
  };
  class lo {
    constructor({ strings: e, _$litType$: s }, n) {
      let r;
      this.parts = [];
      let i = 0, o = 0;
      const a = e.length - 1, c = this.parts, [l, d] = Ik(e, s);
      if (this.el = lo.createElement(l, n), yr.currentNode = this.el.content, s === 2 || s === 3) {
        const h = this.el.content.firstChild;
        h.replaceWith(...h.childNodes);
      }
      for (; (r = yr.nextNode()) !== null && c.length < a; ) {
        if (r.nodeType === 1) {
          if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(Bw)) {
            const u = d[o++], f = r.getAttribute(h).split(Fn), g = /([.?@])?(.*)/.exec(u);
            c.push({
              type: 1,
              index: i,
              name: g[2],
              strings: f,
              ctor: g[1] === "." ? Sk : g[1] === "?" ? _k : g[1] === "@" ? Tk : tc
            }), r.removeAttribute(h);
          } else h.startsWith(Fn) && (c.push({
            type: 6,
            index: i
          }), r.removeAttribute(h));
          if (Lw.test(r.tagName)) {
            const h = r.textContent.split(Fn), u = h.length - 1;
            if (u > 0) {
              r.textContent = Ta ? Ta.emptyScript : "";
              for (let f = 0; f < u; f++) r.append(h[f], ao()), yr.nextNode(), c.push({
                type: 2,
                index: ++i
              });
              r.append(h[u], ao());
            }
          }
        } else if (r.nodeType === 8) if (r.data === Dw) c.push({
          type: 2,
          index: i
        });
        else {
          let h = -1;
          for (; (h = r.data.indexOf(Fn, h + 1)) !== -1; ) c.push({
            type: 7,
            index: i
          }), h += Fn.length - 1;
        }
        i++;
      }
    }
    static createElement(e, s) {
      const n = Sr.createElement("template");
      return n.innerHTML = e, n;
    }
  }
  function fi(t, e, s = t, n) {
    var _a2, _b2;
    if (e === ui) return e;
    let r = n !== void 0 ? (_a2 = s._$Co) == null ? void 0 : _a2[n] : s._$Cl;
    const i = co(e) ? void 0 : e._$litDirective$;
    return (r == null ? void 0 : r.constructor) !== i && ((_b2 = r == null ? void 0 : r._$AO) == null ? void 0 : _b2.call(r, false), i === void 0 ? r = void 0 : (r = new i(t), r._$AT(t, s, n)), n !== void 0 ? (s._$Co ?? (s._$Co = []))[n] = r : s._$Cl = r), r !== void 0 && (e = fi(t, r._$AS(t, e.values), r, n)), e;
  }
  class Nk {
    constructor(e, s) {
      this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = s;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(e) {
      const { el: { content: s }, parts: n } = this._$AD, r = ((e == null ? void 0 : e.creationScope) ?? Sr).importNode(s, true);
      yr.currentNode = r;
      let i = yr.nextNode(), o = 0, a = 0, c = n[0];
      for (; c !== void 0; ) {
        if (o === c.index) {
          let l;
          c.type === 2 ? l = new Io(i, i.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(i, c.name, c.strings, this, e) : c.type === 6 && (l = new xk(i, this, e)), this._$AV.push(l), c = n[++a];
        }
        o !== (c == null ? void 0 : c.index) && (i = yr.nextNode(), o++);
      }
      return yr.currentNode = Sr, r;
    }
    p(e) {
      let s = 0;
      for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, s), s += n.strings.length - 2) : n._$AI(e[s])), s++;
    }
  }
  class Io {
    get _$AU() {
      var _a2;
      return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
    }
    constructor(e, s, n, r) {
      this.type = 2, this._$AH = Qe, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = n, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? true;
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const s = this._$AM;
      return s !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = s.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, s = this) {
      e = fi(this, e, s), co(e) ? e === Qe || e == null || e === "" ? (this._$AH !== Qe && this._$AR(), this._$AH = Qe) : e !== this._$AH && e !== ui && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ak(e) ? this.k(e) : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
    }
    _(e) {
      this._$AH !== Qe && co(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Sr.createTextNode(e)), this._$AH = e;
    }
    $(e) {
      var _a2;
      const { values: s, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = lo.createElement(Fw(n.h, n.h[0]), this.options)), n);
      if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === r) this._$AH.p(s);
      else {
        const i = new Nk(r, this), o = i.u(this.options);
        i.p(s), this.T(o), this._$AH = i;
      }
    }
    _$AC(e) {
      let s = rp.get(e.strings);
      return s === void 0 && rp.set(e.strings, s = new lo(e)), s;
    }
    k(e) {
      th(this._$AH) || (this._$AH = [], this._$AR());
      const s = this._$AH;
      let n, r = 0;
      for (const i of e) r === s.length ? s.push(n = new Io(this.O(ao()), this.O(ao()), this, this.options)) : n = s[r], n._$AI(i), r++;
      r < s.length && (this._$AR(n && n._$AB.nextSibling, r), s.length = r);
    }
    _$AR(e = this._$AA.nextSibling, s) {
      var _a2;
      for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s); e !== this._$AB; ) {
        const n = Xf(e).nextSibling;
        Xf(e).remove(), e = n;
      }
    }
    setConnected(e) {
      var _a2;
      this._$AM === void 0 && (this._$Cv = e, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, e));
    }
  }
  class tc {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, s, n, r, i) {
      this.type = 1, this._$AH = Qe, this._$AN = void 0, this.element = e, this.name = s, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Qe;
    }
    _$AI(e, s = this, n, r) {
      const i = this.strings;
      let o = false;
      if (i === void 0) e = fi(this, e, s, 0), o = !co(e) || e !== this._$AH && e !== ui, o && (this._$AH = e);
      else {
        const a = e;
        let c, l;
        for (e = i[0], c = 0; c < i.length - 1; c++) l = fi(this, a[n + c], s, c), l === ui && (l = this._$AH[c]), o || (o = !co(l) || l !== this._$AH[c]), l === Qe ? e = Qe : e !== Qe && (e += (l ?? "") + i[c + 1]), this._$AH[c] = l;
      }
      o && !r && this.j(e);
    }
    j(e) {
      e === Qe ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class Sk extends tc {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(e) {
      this.element[this.name] = e === Qe ? void 0 : e;
    }
  }
  class _k extends tc {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== Qe);
    }
  }
  class Tk extends tc {
    constructor(e, s, n, r, i) {
      super(e, s, n, r, i), this.type = 5;
    }
    _$AI(e, s = this) {
      if ((e = fi(this, e, s, 0) ?? Qe) === ui) return;
      const n = this._$AH, r = e === Qe && n !== Qe || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== Qe && (n === Qe || r);
      r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      var _a2;
      typeof this._$AH == "function" ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, e) : this._$AH.handleEvent(e);
    }
  }
  class xk {
    constructor(e, s, n) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = n;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      fi(this, e);
    }
  }
  const Ok = eh.litHtmlPolyfillSupport;
  Ok == null ? void 0 : Ok(lo, Io), (eh.litHtmlVersions ?? (eh.litHtmlVersions = [])).push("3.3.2");
  const kk = (t, e, s) => {
    const n = (s == null ? void 0 : s.renderBefore) ?? e;
    let r = n._$litPart$;
    if (r === void 0) {
      const i = (s == null ? void 0 : s.renderBefore) ?? null;
      n._$litPart$ = r = new Io(e.insertBefore(ao(), i), i, void 0, s ?? {});
    }
    return r._$AI(t), r;
  };
  const sh = globalThis;
  ia = class extends zr {
    constructor() {
      super(...arguments), this.renderOptions = {
        host: this
      }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a2;
      const e = super.createRenderRoot();
      return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = e.firstChild), e;
    }
    update(e) {
      const s = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = kk(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var _a2;
      super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
    }
    disconnectedCallback() {
      var _a2;
      super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
    }
    render() {
      return ui;
    }
  };
  ia._$litElement$ = true, ia.finalized = true, (_d2 = sh.litElementHydrateSupport) == null ? void 0 : _d2.call(sh, {
    LitElement: ia
  });
  const Pk = sh.litElementPolyfillSupport;
  Pk == null ? void 0 : Pk({
    LitElement: ia
  });
  (sh.litElementVersions ?? (sh.litElementVersions = [])).push("4.2.2");
  const Rk = {
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
  }, xa = {
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
  }, $k = {
    1: "4px",
    2: "8px",
    10: "10px",
    3: "12px",
    4: "16px",
    6: "24px",
    5: "20px",
    8: "32px",
    16: "64px",
    20: "80px",
    32: "128px",
    64: "256px",
    128: "512px",
    round: "9999px"
  }, Uk = {
    0: "0px",
    "01": "2px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    12: "48px",
    14: "56px",
    16: "64px",
    20: "80px",
    32: "128px",
    64: "256px"
  }, Bk = {
    regular: "KHTeka",
    mono: "KHTekaMono"
  }, Dk = {
    regular: "400",
    medium: "500"
  }, Lk = {
    h1: "50px",
    h2: "44px",
    h3: "38px",
    h4: "32px",
    h5: "26px",
    h6: "20px",
    large: "16px",
    medium: "14px",
    small: "12px"
  }, Mk = {
    "h1-regular-mono": {
      lineHeight: "50px",
      letterSpacing: "-3px"
    },
    "h1-regular": {
      lineHeight: "50px",
      letterSpacing: "-1px"
    },
    "h1-medium": {
      lineHeight: "50px",
      letterSpacing: "-0.84px"
    },
    "h2-regular-mono": {
      lineHeight: "44px",
      letterSpacing: "-2.64px"
    },
    "h2-regular": {
      lineHeight: "44px",
      letterSpacing: "-0.88px"
    },
    "h2-medium": {
      lineHeight: "44px",
      letterSpacing: "-0.88px"
    },
    "h3-regular-mono": {
      lineHeight: "38px",
      letterSpacing: "-2.28px"
    },
    "h3-regular": {
      lineHeight: "38px",
      letterSpacing: "-0.76px"
    },
    "h3-medium": {
      lineHeight: "38px",
      letterSpacing: "-0.76px"
    },
    "h4-regular-mono": {
      lineHeight: "32px",
      letterSpacing: "-1.92px"
    },
    "h4-regular": {
      lineHeight: "32px",
      letterSpacing: "-0.32px"
    },
    "h4-medium": {
      lineHeight: "32px",
      letterSpacing: "-0.32px"
    },
    "h5-regular-mono": {
      lineHeight: "26px",
      letterSpacing: "-1.56px"
    },
    "h5-regular": {
      lineHeight: "26px",
      letterSpacing: "-0.26px"
    },
    "h5-medium": {
      lineHeight: "26px",
      letterSpacing: "-0.26px"
    },
    "h6-regular-mono": {
      lineHeight: "20px",
      letterSpacing: "-1.2px"
    },
    "h6-regular": {
      lineHeight: "20px",
      letterSpacing: "-0.6px"
    },
    "h6-medium": {
      lineHeight: "20px",
      letterSpacing: "-0.6px"
    },
    "lg-regular-mono": {
      lineHeight: "16px",
      letterSpacing: "-0.96px"
    },
    "lg-regular": {
      lineHeight: "18px",
      letterSpacing: "-0.16px"
    },
    "lg-medium": {
      lineHeight: "18px",
      letterSpacing: "-0.16px"
    },
    "md-regular-mono": {
      lineHeight: "14px",
      letterSpacing: "-0.84px"
    },
    "md-regular": {
      lineHeight: "16px",
      letterSpacing: "-0.14px"
    },
    "md-medium": {
      lineHeight: "16px",
      letterSpacing: "-0.14px"
    },
    "sm-regular-mono": {
      lineHeight: "12px",
      letterSpacing: "-0.72px"
    },
    "sm-regular": {
      lineHeight: "14px",
      letterSpacing: "-0.12px"
    },
    "sm-medium": {
      lineHeight: "14px",
      letterSpacing: "-0.12px"
    }
  }, Fk = {
    "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
    "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
    "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
    "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
    "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
    "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
  }, qk = {
    xl: "400ms",
    lg: "200ms",
    md: "125ms",
    sm: "75ms"
  }, ad = {
    colors: Rk,
    fontFamily: Bk,
    fontWeight: Dk,
    textSize: Lk,
    typography: Mk,
    tokens: {
      core: xa.core,
      theme: xa.dark
    },
    borderRadius: $k,
    spacing: Uk,
    durations: qk,
    easings: Fk
  }, ip = "--apkt";
  function Go(t) {
    if (!t) return {};
    const e = {};
    return e["font-family"] = t["--apkt-font-family"] ?? t["--w3m-font-family"] ?? "KHTeka", e.accent = t["--apkt-accent"] ?? t["--w3m-accent"] ?? "#0988F0", e["color-mix"] = t["--apkt-color-mix"] ?? t["--w3m-color-mix"] ?? "#000", e["color-mix-strength"] = t["--apkt-color-mix-strength"] ?? t["--w3m-color-mix-strength"] ?? 0, e["font-size-master"] = t["--apkt-font-size-master"] ?? t["--w3m-font-size-master"] ?? "10px", e["border-radius-master"] = t["--apkt-border-radius-master"] ?? t["--w3m-border-radius-master"] ?? "4px", t["--apkt-z-index"] !== void 0 ? e["z-index"] = t["--apkt-z-index"] : t["--w3m-z-index"] !== void 0 && (e["z-index"] = t["--w3m-z-index"]), e;
  }
  let en;
  en = {
    createCSSVariables(t) {
      const e = {}, s = {};
      function n(i, o, a = "") {
        for (const [c, l] of Object.entries(i)) {
          const d = a ? `${a}-${c}` : c;
          l && typeof l == "object" && Object.keys(l).length ? (o[c] = {}, n(l, o[c], d)) : typeof l == "string" && (o[c] = `${ip}-${d}`);
        }
      }
      function r(i, o) {
        for (const [a, c] of Object.entries(i)) c && typeof c == "object" ? (o[a] = {}, r(c, o[a])) : typeof c == "string" && (o[a] = `var(${c})`);
      }
      return n(t, e), r(e, s), {
        cssVariables: e,
        cssVariablesVarPrefix: s
      };
    },
    assignCSSVariables(t, e) {
      const s = {};
      function n(r, i, o) {
        for (const [a, c] of Object.entries(r)) {
          const l = o ? `${o}-${a}` : a, d = i[a];
          c && typeof c == "object" ? n(c, d, l) : typeof d == "string" && (s[`${ip}-${l}`] = d);
        }
      }
      return n(t, e), s;
    },
    createRootStyles(t, e) {
      const s = {
        ...ad,
        tokens: {
          ...ad.tokens,
          theme: t === "light" ? xa.light : xa.dark
        }
      }, { cssVariables: n } = en.createCSSVariables(s), r = en.assignCSSVariables(n, s), i = en.generateW3MVariables(e), o = en.generateW3MOverrides(e), a = en.generateScaledVariables(e), c = en.generateBaseVariables(r), l = {
        ...r,
        ...c,
        ...i,
        ...o,
        ...a
      }, d = en.applyColorMixToVariables(e, l), h = {
        ...l,
        ...d
      };
      return `:root {${Object.entries(h).map(([f, g]) => `${f}:${g.replace("/[:;{}</>]/g", "")};`).join("")}}`;
    },
    generateW3MVariables(t) {
      if (!t) return {};
      const e = Go(t), s = {};
      return s["--w3m-font-family"] = e["font-family"], s["--w3m-accent"] = e.accent, s["--w3m-color-mix"] = e["color-mix"], s["--w3m-color-mix-strength"] = `${e["color-mix-strength"]}%`, s["--w3m-font-size-master"] = e["font-size-master"], s["--w3m-border-radius-master"] = e["border-radius-master"], s;
    },
    generateW3MOverrides(t) {
      if (!t) return {};
      const e = Go(t), s = {};
      if (t["--apkt-accent"] || t["--w3m-accent"]) {
        const n = e.accent;
        s["--apkt-tokens-core-iconAccentPrimary"] = n, s["--apkt-tokens-core-borderAccentPrimary"] = n, s["--apkt-tokens-core-textAccentPrimary"] = n, s["--apkt-tokens-core-backgroundAccentPrimary"] = n;
      }
      return (t["--apkt-font-family"] || t["--w3m-font-family"]) && (s["--apkt-fontFamily-regular"] = e["font-family"]), e["z-index"] !== void 0 && (s["--apkt-tokens-core-zIndex"] = `${e["z-index"]}`), s;
    },
    generateScaledVariables(t) {
      if (!t) return {};
      const e = Go(t), s = {};
      if (t["--apkt-font-size-master"] || t["--w3m-font-size-master"]) {
        const n = parseFloat(e["font-size-master"].replace("px", ""));
        s["--apkt-textSize-h1"] = `${Number(n) * 5}px`, s["--apkt-textSize-h2"] = `${Number(n) * 4.4}px`, s["--apkt-textSize-h3"] = `${Number(n) * 3.8}px`, s["--apkt-textSize-h4"] = `${Number(n) * 3.2}px`, s["--apkt-textSize-h5"] = `${Number(n) * 2.6}px`, s["--apkt-textSize-h6"] = `${Number(n) * 2}px`, s["--apkt-textSize-large"] = `${Number(n) * 1.6}px`, s["--apkt-textSize-medium"] = `${Number(n) * 1.4}px`, s["--apkt-textSize-small"] = `${Number(n) * 1.2}px`;
      }
      if (t["--apkt-border-radius-master"] || t["--w3m-border-radius-master"]) {
        const n = parseFloat(e["border-radius-master"].replace("px", ""));
        s["--apkt-borderRadius-1"] = `${Number(n)}px`, s["--apkt-borderRadius-2"] = `${Number(n) * 2}px`, s["--apkt-borderRadius-3"] = `${Number(n) * 3}px`, s["--apkt-borderRadius-4"] = `${Number(n) * 4}px`, s["--apkt-borderRadius-5"] = `${Number(n) * 5}px`, s["--apkt-borderRadius-6"] = `${Number(n) * 6}px`, s["--apkt-borderRadius-8"] = `${Number(n) * 8}px`, s["--apkt-borderRadius-16"] = `${Number(n) * 16}px`, s["--apkt-borderRadius-20"] = `${Number(n) * 20}px`, s["--apkt-borderRadius-32"] = `${Number(n) * 32}px`, s["--apkt-borderRadius-64"] = `${Number(n) * 64}px`, s["--apkt-borderRadius-128"] = `${Number(n) * 128}px`;
      }
      return s;
    },
    generateColorMixCSS(t, e) {
      if (!(t == null ? void 0 : t["--w3m-color-mix"]) || !t["--w3m-color-mix-strength"]) return "";
      const s = t["--w3m-color-mix"], n = t["--w3m-color-mix-strength"];
      if (!n || n === 0) return "";
      const r = Object.keys(e || {}).filter((o) => {
        const a = o.includes("-tokens-core-background") || o.includes("-tokens-core-text") || o.includes("-tokens-core-border") || o.includes("-tokens-core-foreground") || o.includes("-tokens-core-icon") || o.includes("-tokens-theme-background") || o.includes("-tokens-theme-text") || o.includes("-tokens-theme-border") || o.includes("-tokens-theme-foreground") || o.includes("-tokens-theme-icon"), c = o.includes("-borderRadius-") || o.includes("-spacing-") || o.includes("-textSize-") || o.includes("-fontFamily-") || o.includes("-fontWeight-") || o.includes("-typography-") || o.includes("-duration-") || o.includes("-ease-") || o.includes("-path-") || o.includes("-width-") || o.includes("-height-") || o.includes("-visual-size-") || o.includes("-modal-width") || o.includes("-cover");
        return a && !c;
      });
      return r.length === 0 ? "" : ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${r.map((o) => {
        const a = (e == null ? void 0 : e[o]) || "";
        return a.includes("color-mix") || a.startsWith("#") || a.startsWith("rgb") ? `${o}: color-mix(in srgb, ${s} ${n}%, ${a});` : `${o}: color-mix(in srgb, ${s} ${n}%, var(${o}-base, ${a}));`;
      }).join("")}
      }
    }`;
    },
    generateBaseVariables(t) {
      const e = {}, s = t["--apkt-tokens-theme-backgroundPrimary"];
      s && (e["--apkt-tokens-theme-backgroundPrimary-base"] = s);
      const n = t["--apkt-tokens-core-backgroundAccentPrimary"];
      return n && (e["--apkt-tokens-core-backgroundAccentPrimary-base"] = n), e;
    },
    applyColorMixToVariables(t, e) {
      const s = {};
      (e == null ? void 0 : e["--apkt-tokens-theme-backgroundPrimary"]) && (s["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)"), (e == null ? void 0 : e["--apkt-tokens-core-backgroundAccentPrimary"]) && (s["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)");
      const n = Go(t), r = n["color-mix"], i = n["color-mix-strength"];
      if (!i || i === 0) return s;
      const o = Object.keys(e || {}).filter((a) => {
        const c = a.includes("-tokens-core-background") || a.includes("-tokens-core-text") || a.includes("-tokens-core-border") || a.includes("-tokens-core-foreground") || a.includes("-tokens-core-icon") || a.includes("-tokens-theme-background") || a.includes("-tokens-theme-text") || a.includes("-tokens-theme-border") || a.includes("-tokens-theme-foreground") || a.includes("-tokens-theme-icon") || a.includes("-tokens-theme-overlay"), l = a.includes("-borderRadius-") || a.includes("-spacing-") || a.includes("-textSize-") || a.includes("-fontFamily-") || a.includes("-fontWeight-") || a.includes("-typography-") || a.includes("-duration-") || a.includes("-ease-") || a.includes("-path-") || a.includes("-width-") || a.includes("-height-") || a.includes("-visual-size-") || a.includes("-modal-width") || a.includes("-cover");
        return c && !l;
      });
      return o.length === 0 || o.forEach((a) => {
        const c = (e == null ? void 0 : e[a]) || "";
        a.endsWith("-base") || (a === "--apkt-tokens-theme-backgroundPrimary" || a === "--apkt-tokens-core-backgroundAccentPrimary" ? s[a] = `color-mix(in srgb, ${r} ${i}%, var(${a}-base))` : c.includes("color-mix") || c.startsWith("#") || c.startsWith("rgb") ? s[a] = `color-mix(in srgb, ${r} ${i}%, ${c})` : s[a] = `color-mix(in srgb, ${r} ${i}%, var(${a}-base, ${c}))`);
      }), s;
    }
  };
  ({ cssVariablesVarPrefix: jk } = en.createCSSVariables(ad));
  J3 = function(t, ...e) {
    return Mn(t, ...e.map((s) => ys(typeof s == "function" ? s(jk) : s)));
  };
  let cr, br, Ds, Es, Oa;
  const Js = {
    "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
    "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
    "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
    "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
    "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
    "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
  };
  function ka(t, e = "dark") {
    cr && document.head.removeChild(cr), cr = document.createElement("style"), cr.textContent = en.createRootStyles(e, t), document.head.appendChild(cr);
  }
  X3 = function(t, e = "dark") {
    if (Oa = t, br = document.createElement("style"), Ds = document.createElement("style"), Es = document.createElement("style"), br.textContent = ai(t).core.cssText, Ds.textContent = ai(t).dark.cssText, Es.textContent = ai(t).light.cssText, document.head.appendChild(br), document.head.appendChild(Ds), document.head.appendChild(Es), ka(t, e), cd(e), !((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]))) for (const [n, r] of Object.entries(Js)) {
      const i = document.createElement("link");
      i.rel = "preload", i.href = r, i.as = "font", i.type = n.includes("woff2") ? "font/woff2" : "font/woff", i.crossOrigin = "anonymous", document.head.appendChild(i);
    }
    cd(e);
  };
  function cd(t = "dark") {
    Ds && Es && cr && (t === "light" ? (ka(Oa, t), Ds.removeAttribute("media"), Es.media = "enabled") : (ka(Oa, t), Es.removeAttribute("media"), Ds.media = "enabled"));
  }
  function Wk(t) {
    var _a2, _b2, _c2;
    if (Oa = t, br && Ds && Es) {
      br.textContent = ai(t).core.cssText, Ds.textContent = ai(t).dark.cssText, Es.textContent = ai(t).light.cssText;
      const e = (t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]);
      e && (br.textContent = (_a2 = br.textContent) == null ? void 0 : _a2.replace("font-family: KHTeka", `font-family: ${e}`), Ds.textContent = (_b2 = Ds.textContent) == null ? void 0 : _b2.replace("font-family: KHTeka", `font-family: ${e}`), Es.textContent = (_c2 = Es.textContent) == null ? void 0 : _c2.replace("font-family: KHTeka", `font-family: ${e}`));
    }
    if (cr) {
      const e = (Es == null ? void 0 : Es.media) === "enabled" ? "light" : "dark";
      ka(t, e);
    }
  }
  function ai(t) {
    const e = !!((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]));
    return {
      core: Mn`
      ${e ? Mn`` : Mn`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ys(Js["KHTeka-400-woff2"])}) format('woff2'),
                url(${ys(Js["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ys(Js["KHTeka-300-woff2"])}) format('woff2'),
                url(${ys(Js["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${ys(Js["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${ys(Js["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ys(Js["KHTeka-400-woff2"])}) format('woff2'),
                url(${ys(Js["KHTeka-400-woff"])}) format('woff');
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
      dark: Mn`
      :root {
      }
    `,
      light: Mn`
      :root {
      }
    `
    };
  }
  let Xs, Hk, Vk, ts, qw, zk, Kk;
  Q3 = Mn`
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
  eP = Mn`
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
  Xs = {
    EIP155: F.CHAIN.EVM,
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH"
  };
  Hk = {
    NetworkImageIds: {
      1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
      42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
      43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
      56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
      250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
      10: "ab9c186a-c52f-464b-2906-ca59d760a400",
      137: "41d04d42-da3b-4453-8506-668cc0727900",
      5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
      295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
      11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
      84532: "a18a7ecd-e307-4360-4746-283182228e00",
      1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
      130: "2257980a-3463-48c6-cbac-a42d2a956e00",
      10143: "0a728e83-bacb-46db-7844-948f05434900",
      100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
      9001: "f926ff41-260d-4028-635e-91913fc28e00",
      324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
      314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
      4689: "34e68754-e536-40da-c153-6ef2e7188a00",
      1088: "3897a66d-40b9-4833-162f-a2c90531c900",
      1284: "161038da-44ae-4ec7-1208-0ea569454b00",
      1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
      7777777: "845c60df-d429-4991-e687-91ae45791600",
      42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
      8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
      1313161554: "3ff73439-a619-4894-9262-4470c773a100",
      2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
      2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
      80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
      2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
      "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
      "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
      EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
      "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
      "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200",
      "00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700",
      "-239": "20f673c0-095e-49b2-07cf-eb5049dcf600",
      "-3": "20f673c0-095e-49b2-07cf-eb5049dcf600"
    }
  };
  ld = {
    getCaipTokens(t) {
      if (!t) return;
      const e = {};
      return Object.entries(t).forEach(([s, n]) => {
        e[`${Xs.EIP155}:${s}`] = n;
      }), e;
    },
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    },
    getActiveNamespaceConnectedToAuth() {
      const t = b.state.activeChain;
      return F.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e) => V.getConnectorId(e) === F.CONNECTOR_ID.AUTH && e === t);
    },
    withRetry({ conditionFn: t, intervalMs: e, maxRetries: s }) {
      let n = 0;
      return new Promise((r) => {
        async function i() {
          return n += 1, await t() ? r(true) : n >= s ? r(false) : (setTimeout(i, e), null);
        }
        i();
      });
    },
    userChainIdToChainNamespace(t) {
      if (typeof t == "number") return F.CHAIN.EVM;
      const [e] = t.split(":");
      return e;
    },
    getOtherAuthNamespaces(t) {
      return t ? F.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((n) => n !== t) : [];
    },
    getConnectorStorageInfo(t, e) {
      const n = H.getConnections()[e] ?? [];
      return {
        hasDisconnected: H.isConnectorDisconnected(t, e),
        hasConnected: n.some((r) => ld.isLowerCaseMatch(r.connectorId, t))
      };
    }
  };
  Vk = new AbortController();
  ts = {
    EmbeddedWalletAbortController: Vk,
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
        debugMessage: () => `The origin ${$i() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${q.state.projectId}]`
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
        debugMessage: "Your session is invalid or expired. Please check your system\u2019s date and time settings, then reconnect."
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
        debugMessage: (t) => `Unable to fetch App Configuration. ${t}. Please check your network connection and try again shortly. Contact support if the issue persists.`
      },
      RATE_LIMITED_APP_CONFIGURATION: {
        code: "APKT010",
        displayMessage: "Rate Limited",
        debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
      }
    },
    ALERT_WARNINGS: {
      LOCAL_CONFIGURATION_IGNORED: {
        debugMessage: (t) => `[Reown Config Notice] ${t}`
      },
      INACTIVE_NAMESPACE_NOT_CONNECTED: {
        code: "APKTW001",
        displayMessage: "Inactive Namespace Not Connected",
        debugMessage: (t, e) => `An error occurred while connecting an inactive namespace ${t}: "${e}"`
      },
      INVALID_EMAIL: {
        code: "APKTW002",
        displayMessage: "Invalid Email Address",
        debugMessage: "Please enter a valid email address"
      }
    }
  };
  qw = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
      USDC: {
        8453: hk.asset,
        84532: uk.asset
      }
    },
    getTokenSymbolByAddress(t) {
      if (!t) return;
      const [e] = Object.entries(qw.TOKEN_ADDRESSES_BY_SYMBOL).find(([s, n]) => Object.values(n).includes(t)) ?? [];
      return e;
    }
  };
  zk = {
    createLogger(t, e = "error") {
      const s = dp({
        level: e
      }), { logger: n } = Pa({
        opts: s
      });
      return n.error = (...r) => {
        for (const i of r) if (i instanceof Error) {
          t(i, ...r);
          return;
        }
        t(void 0, ...r);
      }, n;
    }
  };
  Kk = "rpc.walletconnect.org";
  function op(t, e) {
    const s = new URL("https://rpc.walletconnect.org/v1/");
    return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
  }
  let rl;
  rl = [
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
  Kr = {
    extendRpcUrlWithProjectId(t, e) {
      let s = false;
      try {
        s = new URL(t).host === Kk;
      } catch {
        s = false;
      }
      if (s) {
        const n = new URL(t);
        return n.searchParams.has("projectId") || n.searchParams.set("projectId", e), n.toString();
      }
      return t;
    },
    isCaipNetwork(t) {
      return "chainNamespace" in t && "caipNetworkId" in t;
    },
    getChainNamespace(t) {
      return this.isCaipNetwork(t) ? t.chainNamespace : F.CHAIN.EVM;
    },
    getCaipNetworkId(t) {
      return this.isCaipNetwork(t) ? t.caipNetworkId : `${F.CHAIN.EVM}:${t.id}`;
    },
    getDefaultRpcUrl(t, e, s) {
      var _a2, _b2, _c2;
      const n = (_c2 = (_b2 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0];
      return rl.includes(e) ? op(e, s) : n || "";
    },
    extendCaipNetwork(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2;
      const r = this.getChainNamespace(t), i = this.getCaipNetworkId(t), o = (_c2 = (_b2 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0], a = this.getDefaultRpcUrl(t, i, s), c = ((_f2 = (_e2 = (_d3 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _d3.chainDefault) == null ? void 0 : _e2.http) == null ? void 0 : _f2[0]) || o, l = ((_g2 = n == null ? void 0 : n[i]) == null ? void 0 : _g2.map((u) => u.url)) || [], d = [
        ...l,
        ...a ? [
          a
        ] : []
      ], h = [
        ...l
      ];
      return c && !h.includes(c) && h.push(c), {
        ...t,
        chainNamespace: r,
        caipNetworkId: i,
        assets: {
          imageId: Hk.NetworkImageIds[t.id],
          imageUrl: e == null ? void 0 : e[t.id]
        },
        rpcUrls: {
          ...t.rpcUrls,
          default: {
            http: d
          },
          chainDefault: {
            http: h
          }
        }
      };
    },
    extendCaipNetworks(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
      return t.map((r) => Kr.extendCaipNetwork(r, {
        customNetworkImageUrls: e,
        customRpcUrls: n,
        projectId: s
      }));
    },
    getViemTransport(t, e, s) {
      var _a2, _b2, _c2;
      const n = [];
      return s == null ? void 0 : s.forEach((r) => {
        n.push(So(r.url, r.config));
      }), rl.includes(t.caipNetworkId) && n.push(So(op(t.caipNetworkId, e), {
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      })), (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2.forEach((r) => {
        n.push(So(r));
      }), ah(n);
    },
    extendWagmiTransports(t, e, s) {
      if (rl.includes(t.caipNetworkId)) {
        const n = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
        return ah([
          s,
          So(n)
        ]);
      }
      return s;
    },
    getUnsupportedNetwork(t) {
      return {
        id: t.split(":")[1],
        caipNetworkId: t,
        name: F.UNSUPPORTED_NETWORK_NAME,
        chainNamespace: t.split(":")[0],
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
    getCaipNetworkFromStorage(t) {
      var _a2;
      const e = H.getActiveCaipNetworkId(), s = b.getAllRequestedCaipNetworks(), n = Array.from(((_a2 = b.state.chains) == null ? void 0 : _a2.keys()) || []), r = e == null ? void 0 : e.split(":")[0], i = r ? n.includes(r) : false, o = s == null ? void 0 : s.find((c) => c.caipNetworkId === e);
      return i && !o && e ? this.getUnsupportedNetwork(e) : o || t || (s == null ? void 0 : s[0]);
    }
  };
  function Gk(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), h = d.charCodeAt(0);
      if (e[h] !== 255) throw new TypeError(d + " is ambiguous");
      e[h] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, h = 0, u = 0;
      const f = l.length;
      for (; u !== f && l[u] === 0; ) u++, d++;
      const g = (f - u) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; u !== f; ) {
        let x = l[u], A = 0;
        for (let N = g - 1; (x !== 0 || A < h) && N !== -1; N--, A++) x += 256 * p[N] >>> 0, p[N] = x % s >>> 0, x = x / s >>> 0;
        if (x !== 0) throw new Error("Non-zero carry");
        h = A, u++;
      }
      let m = g - h;
      for (; m !== g && p[m] === 0; ) m++;
      let T = n.repeat(d);
      for (; m < g; ++m) T += t.charAt(p[m]);
      return T;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, h = 0, u = 0;
      for (; l[d] === n; ) h++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const x = l.charCodeAt(d);
        if (x > 255) return;
        let A = e[x];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < u) && P !== -1; P--, N++) A += s * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        u = N, d++;
      }
      let p = f - u;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(h + (f - p));
      let T = h;
      for (; p !== f; ) m[T++] = g[p++];
      return m;
    }
    function c(l) {
      const d = a(l);
      if (d) return d;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: o,
      decodeUnsafe: a,
      decode: c
    };
  }
  var Yk = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const Zk = Gk(Yk), Yo = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603
  };
  class Jk extends ak {
    async setUniversalProvider(e) {
      if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
      return this.addConnector(new ck({
        provider: e,
        caipNetworks: this.getCaipNetworks(),
        namespace: this.namespace
      })), Promise.resolve();
    }
    async connect(e) {
      return Promise.resolve({
        id: "WALLET_CONNECT",
        type: "WALLET_CONNECT",
        chainId: Number(e.chainId),
        provider: this.provider,
        address: ""
      });
    }
    async disconnect() {
      try {
        await this.getWalletConnectConnector().disconnect(), this.emit("disconnect");
      } catch (e) {
        console.warn("UniversalAdapter:disconnect - error", e);
      }
      return {
        connections: []
      };
    }
    syncConnections() {
      return Promise.resolve();
    }
    async writeSolanaTransaction() {
      return Promise.resolve({
        hash: ""
      });
    }
    async getAccounts({ namespace: e }) {
      var _a2, _b2, _c2, _d3, _e2;
      const n = ((_e2 = (_d3 = (_c2 = (_b2 = (_a2 = this.provider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces) == null ? void 0 : _c2[e]) == null ? void 0 : _d3.accounts) == null ? void 0 : _e2.map((r) => {
        const [, , i] = r.split(":");
        return i;
      }).filter((r, i, o) => o.indexOf(r) === i)) || [];
      return Promise.resolve({
        accounts: n.map((r) => ee.createAccount(e, r, e === "bip122" ? "payment" : "eoa"))
      });
    }
    async syncConnectors() {
      return Promise.resolve();
    }
    async getBalance(e) {
      var _a2, _b2, _c2, _d3, _e2;
      if (!(e.caipNetwork && ge.BALANCE_SUPPORTED_CHAINS.includes((_a2 = e.caipNetwork) == null ? void 0 : _a2.chainNamespace)) || ((_b2 = e.caipNetwork) == null ? void 0 : _b2.testnet)) return {
        balance: "0.00",
        symbol: ((_c2 = e.caipNetwork) == null ? void 0 : _c2.nativeCurrency.symbol) || ""
      };
      const n = b.getAccountData();
      if ((n == null ? void 0 : n.balanceLoading) && e.chainId === ((_d3 = b.state.activeCaipNetwork) == null ? void 0 : _d3.id)) return {
        balance: (n == null ? void 0 : n.balance) || "0.00",
        symbol: (n == null ? void 0 : n.balanceSymbol) || ""
      };
      const i = (await b.fetchTokenBalance()).find((o) => {
        var _a3, _b3;
        return o.chainId === `${(_a3 = e.caipNetwork) == null ? void 0 : _a3.chainNamespace}:${e.chainId}` && o.symbol === ((_b3 = e.caipNetwork) == null ? void 0 : _b3.nativeCurrency.symbol);
      });
      return {
        balance: (i == null ? void 0 : i.quantity.numeric) || "0.00",
        symbol: (i == null ? void 0 : i.symbol) || ((_e2 = e.caipNetwork) == null ? void 0 : _e2.nativeCurrency.symbol) || ""
      };
    }
    async signMessage(e) {
      var _a2, _b2, _c2;
      const { provider: s, message: n, address: r } = e;
      if (!s) throw new Error("UniversalAdapter:signMessage - provider is undefined");
      let i = "";
      return ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) === F.CHAIN.SOLANA ? i = (await s.request({
        method: "solana_signMessage",
        params: {
          message: Zk.encode(new TextEncoder().encode(n)),
          pubkey: r
        }
      }, (_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId)).signature : i = await s.request({
        method: "personal_sign",
        params: [
          n,
          r
        ]
      }, (_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId), {
        signature: i
      };
    }
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
    walletGetAssets(e) {
      return Promise.resolve({});
    }
    async writeContract() {
      return Promise.resolve({
        hash: ""
      });
    }
    emitFirstAvailableConnection() {
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
    async switchNetwork(e) {
      var _a2, _b2, _c2, _d3, _e2, _f2;
      const { caipNetwork: s } = e, n = this.getWalletConnectConnector();
      if (s.chainNamespace === F.CHAIN.EVM) try {
        await ((_a2 = n.provider) == null ? void 0 : _a2.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: oh(s.id)
            }
          ]
        }));
      } catch (r) {
        if (r.code === Yo.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === Yo.ERROR_INVALID_CHAIN_ID || r.code === Yo.ERROR_CODE_DEFAULT || ((_c2 = (_b2 = r == null ? void 0 : r.data) == null ? void 0 : _b2.originalError) == null ? void 0 : _c2.code) === Yo.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
          await ((_f2 = n.provider) == null ? void 0 : _f2.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: oh(s.id),
                rpcUrls: [
                  (_d3 = s == null ? void 0 : s.rpcUrls.chainDefault) == null ? void 0 : _d3.http
                ],
                chainName: s.name,
                nativeCurrency: s.nativeCurrency,
                blockExplorerUrls: [
                  (_e2 = s.blockExplorers) == null ? void 0 : _e2.default.url
                ]
              }
            ]
          }));
        } catch {
          throw new Error("Chain is not supported");
        }
      }
      n.provider.setDefaultChain(s.caipNetworkId);
    }
    getWalletConnectProvider() {
      var _a2;
      return (_a2 = this.connectors.find((n) => n.type === "WALLET_CONNECT")) == null ? void 0 : _a2.provider;
    }
  }
  const Xk = [
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
  ], Zo = {
    email: {
      apiFeatureName: "social_login",
      localFeatureName: "email",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return !!t.isEnabled && e.includes("email");
      },
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.email : !!t
    },
    socials: {
      apiFeatureName: "social_login",
      localFeatureName: "socials",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return t.isEnabled && e.length > 0 ? e.filter((s) => s !== "email") : false;
      },
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? ge.DEFAULT_REMOTE_FEATURES.socials : false : t
    },
    swaps: {
      apiFeatureName: "swap",
      localFeatureName: "swaps",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return t.isEnabled && e.length > 0 ? e : false;
      },
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? ge.DEFAULT_REMOTE_FEATURES.swaps : false : t
    },
    onramp: {
      apiFeatureName: "onramp",
      localFeatureName: "onramp",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => {
        if (!(t == null ? void 0 : t.config)) return false;
        const e = t.config;
        return t.isEnabled && e.length > 0 ? e : false;
      },
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? ge.DEFAULT_REMOTE_FEATURES.onramp : false : t
    },
    activity: {
      apiFeatureName: "activity",
      localFeatureName: "history",
      returnType: false,
      isLegacy: true,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.activity : !!t
    },
    reownBranding: {
      apiFeatureName: "reown_branding",
      localFeatureName: "reownBranding",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? ge.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
    },
    emailCapture: {
      apiFeatureName: "email_capture",
      localFeatureName: "emailCapture",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => t.isEnabled && (t.config ?? []),
      processFallback: (t) => false
    },
    multiWallet: {
      apiFeatureName: "multi_wallet",
      localFeatureName: "multiWallet",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.multiWallet
    },
    payWithExchange: {
      apiFeatureName: "fund_from_exchange",
      localFeatureName: "payWithExchange",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.payWithExchange
    },
    payments: {
      apiFeatureName: "payments",
      localFeatureName: "payments",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.payments
    },
    reownAuthentication: {
      apiFeatureName: "reown_authentication",
      localFeatureName: "reownAuthentication",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => typeof t > "u" ? ge.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!t
    },
    headless: {
      apiFeatureName: "headless",
      localFeatureName: "headless",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => ge.DEFAULT_REMOTE_FEATURES.headless
    }
  }, Qk = {
    localSettingsOverridden: /* @__PURE__ */ new Set(),
    getApiConfig(t, e) {
      return e == null ? void 0 : e.find((s) => s.id === t);
    },
    addWarning(t, e) {
      if (t !== void 0) {
        const s = Zo[e], n = s.isLegacy ? `"features.${s.localFeatureName}" (now "${e}")` : `"features.${e}"`;
        this.localSettingsOverridden.add(n);
      }
    },
    processFeature(t, e, s, n, r) {
      const i = Zo[t], o = e[i.localFeatureName];
      if (r && !i.isAvailableOnBasic) return false;
      if (n) {
        const a = this.getApiConfig(i.apiFeatureName, s);
        return (a == null ? void 0 : a.config) === null ? this.processFallbackFeature(t, o) : (a == null ? void 0 : a.config) ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, a)) : false;
      }
      return this.processFallbackFeature(t, o);
    },
    processApiFeature(t, e) {
      return Zo[t].processApi(e);
    },
    processFallbackFeature(t, e) {
      return Zo[t].processFallback(e);
    },
    async fetchRemoteFeatures(t) {
      const e = t.basic ?? false, s = t.features || {};
      this.localSettingsOverridden.clear();
      let n = null, r = false;
      try {
        n = await ne.fetchProjectConfig(), r = n != null;
      } catch (o) {
        console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
      }
      const i = r && !e ? ge.DEFAULT_REMOTE_FEATURES : ge.DEFAULT_REMOTE_FEATURES_DISABLED;
      try {
        for (const o of Xk) {
          const a = this.processFeature(o, s, n, r, e);
          Object.assign(i, {
            [o]: a
          });
        }
      } catch (o) {
        return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), ge.DEFAULT_REMOTE_FEATURES;
      }
      if (r && this.localSettingsOverridden.size > 0) {
        const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
        qt.open({
          debugMessage: ts.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
        }, "warning");
      }
      return i;
    }
  };
  class e3 {
    constructor(e) {
      this.chainNamespaces = [], this.features = {}, this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (s, n) => {
        var _a2, _b2, _c2;
        if (s) {
          const r = (_a2 = b.getCaipNetworks(s)) == null ? void 0 : _a2.find((a) => a.id === n);
          if (r) return r;
          const i = (_b2 = b.getNetworkData(s)) == null ? void 0 : _b2.caipNetwork;
          return i || ((_c2 = b.getRequestedCaipNetworks(s).filter((a) => a.chainNamespace === s)) == null ? void 0 : _c2[0]);
        }
        return b.state.activeCaipNetwork || this.defaultCaipNetwork;
      }, this.getCaipNetworkId = () => {
        const s = this.getCaipNetwork();
        if (s) return s.id;
      }, this.getCaipNetworks = (s) => b.getCaipNetworks(s), this.getActiveChainNamespace = () => b.state.activeChain, this.setRequestedCaipNetworks = (s, n) => {
        b.setRequestedCaipNetworks(s, n);
      }, this.getApprovedCaipNetworkIds = () => b.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (s) => {
        var _a2, _b2;
        return b.state.activeChain === s || !s ? b.state.activeCaipAddress : (_b2 = (_a2 = b.state.chains.get(s)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress;
      }, this.setClientId = (s) => {
        le.setClientId(s);
      }, this.getProvider = (s) => $e.getProvider(s), this.getProviderType = (s) => $e.getProviderId(s), this.getPreferredAccountType = (s) => os(s), this.setCaipAddress = (s, n, r = false) => {
        b.setAccountProp("caipAddress", s, n, r), b.setAccountProp("address", ee.getPlainAddress(s), n, r);
      }, this.setBalance = (s, n, r) => {
        b.setAccountProp("balance", s, r), b.setAccountProp("balanceSymbol", n, r);
      }, this.setProfileName = (s, n) => {
        b.setAccountProp("profileName", s, n);
      }, this.setProfileImage = (s, n) => {
        b.setAccountProp("profileImage", s, n);
      }, this.setUser = (s, n) => {
        b.setAccountProp("user", s, n);
      }, this.resetAccount = (s) => {
        b.resetAccount(s);
      }, this.setCaipNetwork = (s) => {
        b.setActiveCaipNetwork(s);
      }, this.setCaipNetworkOfNamespace = (s, n) => {
        b.setChainNetworkData(n, {
          caipNetwork: s
        });
      }, this.setStatus = (s, n) => {
        b.setAccountProp("status", s, n), V.isConnected() ? H.setConnectionStatus("connected") : H.setConnectionStatus("disconnected");
      }, this.getAddressByChainNamespace = (s) => {
        var _a2;
        return (_a2 = b.getAccountData(s)) == null ? void 0 : _a2.address;
      }, this.setConnectors = (s) => {
        const n = [
          ...V.state.allConnectors,
          ...s
        ];
        V.setConnectors(n);
      }, this.setConnections = (s, n) => {
        H.setConnections(s, n), G.setConnections(s, n);
      }, this.fetchIdentity = (s) => le.fetchIdentity(s), this.getReownName = (s) => Yi.getNamesForAddress(s), this.getConnectors = () => V.getConnectors(), this.getConnectorImage = (s) => la.getConnectorImage(s), this.getConnections = (s) => this.remoteFeatures.multiWallet ? da.getConnectionsData(s).connections : (qt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (s) => this.remoteFeatures.multiWallet ? da.getConnectionsData(s).recentConnections : (qt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (s) => {
        if (!this.remoteFeatures.multiWallet) {
          qt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        await G.switchConnection(s);
      }, this.deleteConnection = (s) => {
        if (!this.remoteFeatures.multiWallet) {
          qt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        H.deleteAddressFromConnection(s), G.syncStorageConnections();
      }, this.setConnectedWalletInfo = (s, n) => {
        const r = $e.getProviderId(n), i = s ? {
          ...s,
          type: r
        } : void 0;
        b.setAccountProp("connectedWalletInfo", i, n);
      }, this.getIsConnectedState = () => !!b.state.activeCaipAddress, this.addAddressLabel = (s, n, r) => {
        var _a2;
        const i = ((_a2 = b.getAccountData(r)) == null ? void 0 : _a2.addressLabels) || {};
        b.setAccountProp("addressLabels", {
          ...i,
          [s]: n
        }, r);
      }, this.removeAddressLabel = (s, n) => {
        var _a2;
        const r = ((_a2 = b.getAccountData(n)) == null ? void 0 : _a2.addressLabels) || {};
        b.setAccountProp("addressLabels", {
          ...r,
          [s]: void 0
        }, n);
      }, this.getAddress = (s) => {
        var _a2;
        const n = s || b.state.activeChain;
        return (_a2 = b.getAccountData(n)) == null ? void 0 : _a2.address;
      }, this.resetNetwork = (s) => {
        b.resetNetwork(s);
      }, this.addConnector = (s) => {
        V.addConnector(s);
      }, this.resetWcConnection = () => {
        G.resetWcConnection();
      }, this.setAddressExplorerUrl = (s, n) => {
        b.setAccountProp("addressExplorerUrl", s, n);
      }, this.setSmartAccountDeployed = (s, n) => {
        b.setAccountProp("smartAccountDeployed", s, n);
      }, this.setPreferredAccountType = (s, n) => {
        b.setAccountProp("preferredAccountType", s, n);
      }, this.setEIP6963Enabled = (s) => {
        q.setEIP6963Enabled(s);
      }, this.handleUnsafeRPCRequest = () => {
        if (this.isOpen()) {
          if (this.isTransactionStackEmpty()) return;
          this.redirect("ApproveTransaction");
        } else this.open({
          view: "ApproveTransaction"
        });
      }, this.options = e, this.version = e.sdkVersion, this.caipNetworks = this.extendCaipNetworks(e), this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e), this.chainAdapters = this.createAdapters(e.adapters), this.readyPromise = this.initialize(e);
    }
    getChainNamespacesSet(e, s) {
      const n = e == null ? void 0 : e.map((i) => i.namespace).filter((i) => !!i);
      if (n == null ? void 0 : n.length) return [
        ...new Set(n)
      ];
      const r = s == null ? void 0 : s.map((i) => i.chainNamespace);
      return [
        ...new Set(r)
      ];
    }
    async initialize(e) {
      var _a2, _b2, _c2, _d3, _e2, _f2;
      if (this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), ((_a2 = e.features) == null ? void 0 : _a2.headless) && !At.hasInjectedConnectors() && ne.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false,
        fetchRecommendedWallets: true
      }), q.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), !e.basic && !e.manualWCControl && (this.remoteFeatures = await Qk.fetchRemoteFeatures(e)), await ne.fetchUsage(), q.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && ul.setOnrampProviders(this.remoteFeatures.onramp), (((_b2 = q.state.remoteFeatures) == null ? void 0 : _b2.email) || Array.isArray((_c2 = q.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d3 = q.state.remoteFeatures) == null ? void 0 : _d3.socials.length) > 0) && await this.checkAllowedOrigins(), ((_e2 = q.state.features) == null ? void 0 : _e2.reownAuthentication) || ((_f2 = q.state.remoteFeatures) == null ? void 0 : _f2.reownAuthentication)) {
        const { ReownAuthentication: s } = await oa(async () => {
          const { ReownAuthentication: r } = await import("./features-Crq6eZbo.js");
          return {
            ReownAuthentication: r
          };
        }, __vite__mapDeps([4,1,2])), n = q.state.siwx;
        n instanceof s || (n && console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden."), q.setSIWX(new s()));
      }
    }
    async openSend(e) {
      var _a2;
      const s = e.namespace || b.state.activeChain, n = this.getCaipAddress(s), r = (_a2 = this.getCaipNetwork(s)) == null ? void 0 : _a2.id;
      if (!n) throw new Error("openSend: caipAddress not found");
      if ((r == null ? void 0 : r.toString()) !== e.chainId.toString()) {
        const i = b.getCaipNetworkById(e.chainId, s);
        if (!i) throw new Error(`openSend: caipNetwork with chainId ${e.chainId} not found`);
        await this.switchNetwork(i, {
          throwOnFailure: true
        });
      }
      try {
        const i = qw.getTokenSymbolByAddress(e.assetAddress);
        i && await ne.fetchTokenImages([
          i
        ]);
      } catch {
      }
      return await me.open({
        view: "WalletSend",
        data: {
          send: e
        }
      }), new Promise((i, o) => {
        const a = pe.subscribeKey("hash", (d) => {
          d && (l(), i({
            hash: d
          }));
        }), c = me.subscribe((d) => {
          d.open || (l(), o(new Error("Modal closed")));
        }), l = this.createCleanupHandler([
          a,
          c
        ]);
      });
    }
    toModalOptions() {
      function e(n) {
        return (n == null ? void 0 : n.view) === "Swap";
      }
      function s(n) {
        return (n == null ? void 0 : n.view) === "WalletSend";
      }
      return {
        isSwap: e,
        isSend: s
      };
    }
    async checkAllowedOrigins() {
      try {
        const e = await ne.fetchAllowedOrigins();
        if (!ee.isClient()) return;
        const s = window.location.origin;
        Hn.isOriginAllowed(s, e, F.DEFAULT_ALLOWED_ANCESTORS) || qt.open(ts.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      } catch (e) {
        if (!(e instanceof Error)) return;
        switch (e.message) {
          case "RATE_LIMITED":
            qt.open(ts.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
            break;
          case "SERVER_ERROR": {
            const s = e.cause instanceof Error ? e.cause : e;
            qt.open({
              displayMessage: ts.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
              debugMessage: ts.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(s.message)
            }, "error");
            break;
          }
        }
      }
    }
    createCleanupHandler(e) {
      return () => {
        e.forEach((s) => {
          try {
            s();
          } catch {
          }
        });
      };
    }
    sendInitializeEvent(e) {
      var _a2;
      const { ...s } = e;
      delete s.adapters, delete s.universalProvider, fe.sendEvent({
        type: "track",
        event: "INITIALIZE",
        properties: {
          ...s,
          networks: e.networks.map((n) => n.id),
          siweConfig: {
            options: ((_a2 = e.siweConfig) == null ? void 0 : _a2.options) || {}
          }
        }
      });
    }
    initControllers(e) {
      this.initializeOptionsController(e), this.initializeChainController(e), this.initializeThemeController(e), this.initializeConnectionController(e), this.initializeConnectorController();
    }
    initAdapterController() {
      Np.initialize(this.chainAdapters);
    }
    initializeThemeController(e) {
      e.themeMode && Wt.setThemeMode(e.themeMode), e.themeVariables && Wt.setThemeVariables(e.themeVariables);
    }
    initializeChainController(e) {
      if (!this.connectionControllerClient) throw new Error("ConnectionControllerClient must be set");
      b.initialize(e.adapters ?? [], this.caipNetworks, {
        connectionControllerClient: this.connectionControllerClient
      });
      const s = this.getDefaultNetwork();
      s && b.setActiveCaipNetwork(s);
    }
    initializeConnectionController(e) {
      G.initialize(e.adapters ?? []), G.setWcBasic(e.basic ?? false);
    }
    initializeConnectorController() {
      V.initialize(this.chainNamespaces);
    }
    initializeProjectSettings(e) {
      q.setProjectId(e.projectId), q.setSdkVersion(e.sdkVersion);
    }
    initializeOptionsController(e) {
      var _a2;
      q.setDebug(e.debug !== false), q.setEnableWalletGuide(e.enableWalletGuide !== false), q.setEnableWallets(e.enableWallets !== false), q.setEIP6963Enabled(e.enableEIP6963 !== false), q.setEnableNetworkSwitch(e.enableNetworkSwitch !== false), q.setEnableReconnect(e.enableReconnect !== false), q.setEnableMobileFullScreen(e.enableMobileFullScreen === true), q.setCoinbasePreference(e.coinbasePreference), q.setEnableAuthLogger(e.enableAuthLogger !== false), q.setCustomRpcUrls(e.customRpcUrls), q.setEnableEmbedded(e.enableEmbedded), q.setAllWallets(e.allWallets), q.setIncludeWalletIds(e.includeWalletIds), q.setExcludeWalletIds(e.excludeWalletIds), q.setFeaturedWalletIds(e.featuredWalletIds), q.setTokens(e.tokens), q.setTermsConditionsUrl(e.termsConditionsUrl), q.setPrivacyPolicyUrl(e.privacyPolicyUrl), q.setCustomWallets(e.customWallets), q.setFeatures(e.features), q.setAllowUnsupportedChain(e.allowUnsupportedChain), q.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), q.setPreferUniversalLinks(e.experimental_preferUniversalLinks), q.setDefaultAccountTypes(e.defaultAccountTypes);
      const s = this.getDefaultMetaData();
      if (!e.metadata && s && (e.metadata = s), q.setMetadata(e.metadata), q.setDisableAppend(e.disableAppend), q.setEnableEmbedded(e.enableEmbedded), q.setSIWX(e.siwx), this.features = q.state.features ?? {}, !e.projectId) {
        qt.open(ts.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
        return;
      }
      if (((_a2 = e.adapters) == null ? void 0 : _a2.find((r) => r.namespace === F.CHAIN.EVM)) && e.siweConfig) {
        if (e.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
        q.setSIWX(e.siweConfig.mapToSIWX());
      }
    }
    getDefaultMetaData() {
      var _a2, _b2, _c2, _d3;
      return ee.isClient() ? {
        name: ((_b2 = (_a2 = document.getElementsByTagName("title")) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.textContent) || "",
        description: ((_c2 = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c2.content) || "",
        url: window.location.origin,
        icons: [
          ((_d3 = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d3.href) || ""
        ]
      } : null;
    }
    setUnsupportedNetwork(e) {
      const s = this.getActiveChainNamespace();
      if (s) {
        const n = Kr.getUnsupportedNetwork(`${s}:${e}`);
        b.setActiveCaipNetwork(n);
      }
    }
    getDefaultNetwork() {
      return Kr.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(e, s) {
      return Kr.extendCaipNetwork(e, {
        customNetworkImageUrls: s.chainImages,
        projectId: s.projectId
      });
    }
    extendCaipNetworks(e) {
      return Kr.extendCaipNetworks(e.networks, {
        customNetworkImageUrls: e.chainImages,
        customRpcUrls: e.customRpcUrls,
        projectId: e.projectId
      });
    }
    extendDefaultCaipNetwork(e) {
      const s = e.networks.find((r) => {
        var _a2;
        return r.id === ((_a2 = e.defaultNetwork) == null ? void 0 : _a2.id);
      });
      return s ? Kr.extendCaipNetwork(s, {
        customNetworkImageUrls: e.chainImages,
        customRpcUrls: e.customRpcUrls,
        projectId: e.projectId
      }) : void 0;
    }
    async disconnectConnector(e, s) {
      var _a2, _b2;
      try {
        this.setLoading(true, e);
        let n = {
          connections: []
        };
        const r = this.getAdapter(e);
        return (((_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress) || !q.state.enableReconnect) && (r == null ? void 0 : r.disconnect) && (n = await r.disconnect({
          id: s
        })), this.setLoading(false, e), n;
      } catch (n) {
        throw this.setLoading(false, e), new Error(`Failed to disconnect chains: ${n.message}`);
      }
    }
    createClients() {
      this.connectionControllerClient = {
        connectWalletConnect: async () => {
          var _a2;
          const e = b.state.activeChain, s = this.getAdapter(e), n = (_a2 = this.getCaipNetwork(e)) == null ? void 0 : _a2.id, r = G.getConnections(e), i = this.remoteFeatures.multiWallet, o = r.length > 0;
          if (!s) throw new Error("Adapter not found");
          const a = await s.connectWalletConnect(n);
          (!o || !i) && this.close(), this.setClientId((a == null ? void 0 : a.clientId) || null), H.setConnectedNamespaces([
            ...b.state.chains.keys()
          ]), await this.syncWalletConnectAccount(), await bs.initializeIfEnabled();
        },
        connectExternal: async (e) => {
          const s = await this.onConnectExternal(e);
          return await this.connectInactiveNamespaces(e, s), s ? {
            address: s.address
          } : void 0;
        },
        reconnectExternal: async ({ id: e, info: s, type: n, provider: r }) => {
          var _a2;
          const i = b.state.activeChain, o = this.getAdapter(i);
          if (!i) throw new Error("reconnectExternal: namespace not found");
          if (!o) throw new Error("reconnectExternal: adapter not found");
          (o == null ? void 0 : o.reconnect) && (await (o == null ? void 0 : o.reconnect({
            id: e,
            info: s,
            type: n,
            provider: r,
            chainId: (_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id
          })), H.addConnectedNamespace(i), this.syncConnectedWalletInfo(i));
        },
        disconnectConnector: async (e) => {
          await this.disconnectConnector(e.namespace, e.id);
        },
        disconnect: async (e) => {
          var _a2;
          const { id: s, chainNamespace: n, initialDisconnect: r } = e || {}, i = n || b.state.activeChain, o = V.getConnectorId(i), a = s === F.CONNECTOR_ID.AUTH || o === F.CONNECTOR_ID.AUTH, c = s === F.CONNECTOR_ID.WALLET_CONNECT || o === F.CONNECTOR_ID.WALLET_CONNECT;
          try {
            const l = Array.from(b.state.chains.keys());
            let d = n ? [
              n
            ] : l;
            (c || a) && (d = l);
            const h = d.map(async (g) => {
              const p = V.getConnectorId(g), m = s || p, T = await this.disconnectConnector(g, m);
              T && (a && H.deleteConnectedSocialProvider(), T.connections.forEach((x) => {
                H.addDisconnectedConnectorId(x.connectorId, g);
              })), r && this.onDisconnectNamespace({
                chainNamespace: g,
                closeModal: false
              });
            }), u = await Promise.allSettled(h);
            pe.resetSend(), G.resetWcConnection(), ((_a2 = bs.getSIWX()) == null ? void 0 : _a2.signOutOnDisconnect) && await bs.clearSessions(), V.setFilterByNamespace(void 0), G.syncStorageConnections();
            const f = u.filter((g) => g.status === "rejected");
            if (f.length > 0) throw new Error(f.map((g) => g.reason.message).join(", "));
            fe.sendEvent({
              type: "track",
              event: "DISCONNECT_SUCCESS",
              properties: {
                namespace: n || "all"
              }
            });
          } catch (l) {
            throw new Error(`Failed to disconnect chains: ${l.message}`);
          }
        },
        checkInstalled: (e) => e ? e.some((s) => {
          var _a2;
          return !!((_a2 = window.ethereum) == null ? void 0 : _a2[String(s)]);
        }) : !!window.ethereum,
        signMessage: async (e) => {
          var _a2;
          const s = b.state.activeChain, n = this.getAdapter(b.state.activeChain);
          if (!s) throw new Error("signMessage: namespace not found");
          if (!n) throw new Error("signMessage: adapter not found");
          const r = this.getAddress(s);
          if (!r) throw new Error("signMessage: address not found");
          return ((_a2 = await (n == null ? void 0 : n.signMessage({
            message: e,
            address: r,
            provider: $e.getProvider(s)
          }))) == null ? void 0 : _a2.signature) || "";
        },
        sendTransaction: async (e) => {
          var _a2;
          const s = e.chainNamespace;
          if (!s) throw new Error("sendTransaction: namespace not found");
          if (ge.SEND_SUPPORTED_NAMESPACES.includes(s)) {
            const n = this.getAdapter(s);
            if (!n) throw new Error("sendTransaction: adapter not found");
            const r = $e.getProvider(s);
            return ((_a2 = await (n == null ? void 0 : n.sendTransaction({
              ...e,
              caipNetwork: this.getCaipNetwork(),
              provider: r
            }))) == null ? void 0 : _a2.hash) || "";
          }
          return "";
        },
        estimateGas: async (e) => {
          var _a2;
          const s = e.chainNamespace;
          if (s === F.CHAIN.EVM) {
            const n = this.getAdapter(s);
            if (!n) throw new Error("estimateGas: adapter is required but got undefined");
            const r = $e.getProvider(s), i = this.getCaipNetwork();
            if (!i) throw new Error("estimateGas: caipNetwork is required but got undefined");
            return ((_a2 = await (n == null ? void 0 : n.estimateGas({
              ...e,
              provider: r,
              caipNetwork: i
            }))) == null ? void 0 : _a2.gas) || 0n;
          }
          return 0n;
        },
        getEnsAvatar: async () => {
          var _a2, _b2;
          const e = b.state.activeChain;
          if (!e) throw new Error("getEnsAvatar: namespace is required but got undefined");
          const s = this.getAddress(e);
          if (!s) throw new Error("getEnsAvatar: address not found");
          return await this.syncIdentity({
            address: s,
            chainId: Number((_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id),
            chainNamespace: e
          }), ((_b2 = b.getAccountData()) == null ? void 0 : _b2.profileImage) || false;
        },
        getEnsAddress: async (e) => await Hn.resolveReownName(e),
        writeContract: async (e) => {
          var _a2;
          const s = b.state.activeChain, n = this.getAdapter(s);
          if (!s) throw new Error("writeContract: namespace is required but got undefined");
          if (!n) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = $e.getProvider(s);
          if (!r || !i) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (n == null ? void 0 : n.writeContract({
            ...e,
            caipNetwork: r,
            provider: o,
            caipAddress: i
          }))) == null ? void 0 : _a2.hash;
        },
        writeSolanaTransaction: async (e) => {
          var _a2;
          const s = b.state.activeChain, n = this.getAdapter(s);
          if (!s) throw new Error("writeContract: namespace is required but got undefined");
          if (!n) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = $e.getProvider(s);
          if (!r || !i) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (n == null ? void 0 : n.writeSolanaTransaction({
            ...e,
            caipNetwork: r,
            provider: o,
            caipAddress: i
          }))) == null ? void 0 : _a2.hash;
        },
        parseUnits: (e, s) => {
          const n = this.getAdapter(b.state.activeChain);
          if (!n) throw new Error("parseUnits: adapter is required but got undefined");
          return (n == null ? void 0 : n.parseUnits({
            value: e,
            decimals: s
          })) ?? 0n;
        },
        formatUnits: (e, s) => {
          const n = this.getAdapter(b.state.activeChain);
          if (!n) throw new Error("formatUnits: adapter is required but got undefined");
          return (n == null ? void 0 : n.formatUnits({
            value: e,
            decimals: s
          })) ?? "0";
        },
        getCapabilities: async (e) => {
          const s = this.getAdapter(b.state.activeChain);
          if (!s) throw new Error("getCapabilities: adapter is required but got undefined");
          return await (s == null ? void 0 : s.getCapabilities(e));
        },
        grantPermissions: async (e) => {
          const s = this.getAdapter(b.state.activeChain);
          if (!s) throw new Error("grantPermissions: adapter is required but got undefined");
          return await (s == null ? void 0 : s.grantPermissions(e));
        },
        revokePermissions: async (e) => {
          const s = this.getAdapter(b.state.activeChain);
          if (!s) throw new Error("revokePermissions: adapter is required but got undefined");
          return (s == null ? void 0 : s.revokePermissions) ? await s.revokePermissions(e) : "0x";
        },
        walletGetAssets: async (e) => {
          const s = this.getAdapter(b.state.activeChain);
          if (!s) throw new Error("walletGetAssets: adapter is required but got undefined");
          return await (s == null ? void 0 : s.walletGetAssets(e)) ?? {};
        },
        updateBalance: (e) => {
          const s = this.getAddress(e), n = this.getCaipNetwork(e);
          !n || !s || this.updateNativeBalance(s, n == null ? void 0 : n.id, e);
        }
      }, G.setClient(this.connectionControllerClient);
    }
    async onConnectExternal(e) {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h2;
      const s = b.state.activeChain, n = e.chain || s, r = this.getAdapter(n);
      let i = true;
      if (e.type === Xs.CONNECTOR_TYPE_AUTH && F.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((h) => V.getConnectorId(h) === F.CONNECTOR_ID.AUTH) && e.chain !== s && (i = false), e.chain && e.chain !== s && !e.caipNetwork) {
        const l = this.getCaipNetworks().find((d) => d.chainNamespace === e.chain);
        l && i && this.setCaipNetwork(l);
      }
      if (!n) throw new Error("connectExternal: namespace not found");
      if (!r) throw new Error("connectExternal: adapter not found");
      const o = this.getCaipNetwork(n), a = e.caipNetwork || o, c = await r.connect({
        id: e.id,
        address: e.address,
        info: e.info,
        type: e.type,
        provider: e.provider,
        socialUri: e.socialUri,
        chainId: ((_a2 = e.caipNetwork) == null ? void 0 : _a2.id) || (o == null ? void 0 : o.id),
        rpcUrl: ((_e2 = (_d3 = (_c2 = (_b2 = e.caipNetwork) == null ? void 0 : _b2.rpcUrls) == null ? void 0 : _c2.default) == null ? void 0 : _d3.http) == null ? void 0 : _e2[0]) || ((_h2 = (_g2 = (_f2 = o == null ? void 0 : o.rpcUrls) == null ? void 0 : _f2.default) == null ? void 0 : _g2.http) == null ? void 0 : _h2[0])
      });
      if (c) return H.addConnectedNamespace(n), this.syncProvider({
        ...c,
        chainNamespace: n
      }), this.setStatus("connected", n), this.syncConnectedWalletInfo(n), H.removeDisconnectedConnectorId(e.id, n), {
        address: c.address,
        connectedCaipNetwork: a
      };
    }
    async connectInactiveNamespaces(e, s) {
      var _a2;
      const n = e.type === Xs.CONNECTOR_TYPE_AUTH, r = ld.getOtherAuthNamespaces((_a2 = s == null ? void 0 : s.connectedCaipNetwork) == null ? void 0 : _a2.chainNamespace), i = b.state.activeCaipNetwork, o = this.getAdapter(i == null ? void 0 : i.chainNamespace);
      n && (await Promise.all(r.map(async (a) => {
        var _a3, _b2, _c2, _d3;
        try {
          const c = $e.getProvider(a), l = this.getCaipNetwork(a);
          await ((_d3 = this.getAdapter(a)) == null ? void 0 : _d3.connect({
            ...e,
            provider: c,
            socialUri: void 0,
            chainId: l == null ? void 0 : l.id,
            rpcUrl: (_c2 = (_b2 = (_a3 = l == null ? void 0 : l.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
          })) && (H.addConnectedNamespace(a), H.removeDisconnectedConnectorId(e.id, a), this.setStatus("connected", a), this.syncConnectedWalletInfo(a));
        } catch (c) {
          qt.warn(ts.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, ts.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(a, c instanceof Error ? c.message : void 0), ts.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      })), i && await (o == null ? void 0 : o.switchNetwork({
        caipNetwork: i
      })));
    }
    getApprovedCaipNetworksData() {
      var _a2, _b2, _c2, _d3, _e2;
      if ($e.getProviderId(b.state.activeChain) === Xs.CONNECTOR_TYPE_WALLET_CONNECT) {
        const s = (_b2 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces;
        return {
          supportsAllNetworks: ((_e2 = (_d3 = (_c2 = this.universalProvider) == null ? void 0 : _c2.session) == null ? void 0 : _d3.peer) == null ? void 0 : _e2.metadata.name) === "MetaMask Wallet",
          approvedCaipNetworkIds: this.getChainsFromNamespaces(s)
        };
      }
      return {
        supportsAllNetworks: true,
        approvedCaipNetworkIds: []
      };
    }
    async switchCaipNetwork(e) {
      var _a2;
      const s = e.chainNamespace;
      if (this.getAddressByChainNamespace(e.chainNamespace)) {
        const r = $e.getProviderId(s);
        if (e.chainNamespace === b.state.activeChain) await ((_a2 = this.getAdapter(s)) == null ? void 0 : _a2.switchNetwork({
          caipNetwork: e
        }));
        else if (this.setCaipNetwork(e), r === Xs.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
        else {
          const i = this.getAddressByChainNamespace(s);
          i && this.syncAccount({
            address: i,
            chainId: e.id,
            chainNamespace: s
          });
        }
      } else this.setCaipNetwork(e);
    }
    getChainsFromNamespaces(e = {}) {
      return Object.values(e).flatMap((s) => {
        const n = s.chains || [], r = s.accounts.map((i) => {
          const { chainId: o, chainNamespace: a } = it.parseCaipAddress(i);
          return `${a}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...n,
          ...r
        ]));
      });
    }
    createAdapters(e) {
      return this.createClients(), this.chainNamespaces.reduce((s, n) => {
        var _a2, _b2;
        const r = e == null ? void 0 : e.find((i) => i.namespace === n);
        return r ? (r.construct({
          namespace: n,
          projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
          networks: (_b2 = this.caipNetworks) == null ? void 0 : _b2.filter(({ chainNamespace: i }) => i === n)
        }), s[n] = r) : s[n] = new Jk({
          namespace: n,
          networks: this.getCaipNetworks()
        }), s;
      }, {});
    }
    async initChainAdapter(e) {
      this.onConnectors(e), this.listenAdapter(e);
      const s = this.getAdapter(e);
      if (!s) throw new Error("adapter not found");
      await s.syncConnectors(), await this.createUniversalProviderForAdapter(e);
    }
    async initChainAdapters() {
      await Promise.all(this.chainNamespaces.map(async (e) => {
        await this.initChainAdapter(e);
      })), this.initAdapterController();
    }
    onConnectors(e) {
      var _a2;
      (_a2 = this.getAdapter(e)) == null ? void 0 : _a2.on("connectors", this.setConnectors.bind(this));
    }
    listenAdapter(e) {
      const s = this.getAdapter(e);
      if (!s) return;
      const n = H.getConnectionStatus();
      q.state.enableReconnect === false ? this.setStatus("disconnected", e) : n === "connected" ? this.setStatus("connecting", e) : n === "disconnected" ? (H.clearAddressCache(), this.setStatus(n, e)) : this.setStatus(n, e), s.on("switchNetwork", ({ address: r, chainId: i }) => {
        var _a2, _b2;
        const o = this.getCaipNetworks().find((l) => l.id.toString() === i.toString() || l.caipNetworkId.toString() === i.toString()), a = b.state.activeChain === e, c = (_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address;
        if (o) {
          const l = a && r ? r : c;
          l && this.syncAccount({
            address: l,
            chainId: o.id,
            chainNamespace: e
          });
        } else this.setUnsupportedNetwork(i);
      }), s.on("disconnect", () => {
        const r = this.remoteFeatures.multiWallet, i = Array.from(G.state.connections.values()).flat();
        this.onDisconnectNamespace({
          chainNamespace: e,
          closeModal: !r || i.length === 0
        });
      }), s.on("connections", (r) => {
        this.setConnections(r, e);
      }), s.on("pendingTransactions", () => {
        const r = this.getAddress(e), i = b.state.activeCaipNetwork;
        !r || !(i == null ? void 0 : i.id) || this.updateNativeBalance(r, i.id, i.chainNamespace);
      }), s.on("accountChanged", ({ address: r, chainId: i, connector: o }) => {
        var _a2, _b2;
        this.handlePreviousConnectorConnection(o);
        const a = b.state.activeChain === e;
        (o == null ? void 0 : o.provider) && (this.syncProvider({
          id: o.id,
          type: o.type,
          provider: o == null ? void 0 : o.provider,
          chainNamespace: e
        }), this.syncConnectedWalletInfo(e));
        const c = (_b2 = (_a2 = b.getNetworkData(e)) == null ? void 0 : _a2.caipNetwork) == null ? void 0 : _b2.id, l = i || c;
        a && l ? this.syncAccount({
          address: r,
          chainId: l,
          chainNamespace: e
        }) : !a && l ? (this.syncAccountInfo(r, l, e), this.syncBalance({
          address: r,
          chainId: l,
          chainNamespace: e
        })) : this.syncAccountInfo(r, i, e), H.addConnectedNamespace(e);
      });
    }
    async handlePreviousConnectorConnection(e) {
      var _a2;
      const s = e == null ? void 0 : e.chain, n = e == null ? void 0 : e.id, r = V.getConnectorId(s), i = (_a2 = q.state.remoteFeatures) == null ? void 0 : _a2.multiWallet, a = s && n && r && r !== n && !i;
      try {
        a && await G.disconnect({
          id: r,
          namespace: s
        });
      } catch (c) {
        console.warn("Error disconnecting previous connector", c);
      }
    }
    async createUniversalProviderForAdapter(e) {
      var _a2, _b2, _c2;
      await this.getUniversalProvider(), this.universalProvider && await ((_c2 = (_b2 = (_a2 = this.chainAdapters) == null ? void 0 : _a2[e]) == null ? void 0 : _b2.setUniversalProvider) == null ? void 0 : _c2.call(_b2, this.universalProvider));
    }
    async syncExistingConnection() {
      await Promise.allSettled(this.chainNamespaces.map((e) => this.syncNamespaceConnection(e)));
    }
    async unSyncExistingConnection() {
      try {
        await Promise.allSettled(this.chainNamespaces.map((e) => G.disconnect({
          namespace: e,
          initialDisconnect: true
        })));
      } catch (e) {
        console.error("Error disconnecting existing connections:", e);
      }
    }
    async reconnectWalletConnect() {
      await this.syncWalletConnectAccount();
      const e = this.getAddress();
      this.getCaipAddress() || H.deleteRecentWallet();
      const s = H.getRecentWallet();
      fe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: e,
        properties: {
          method: ee.isMobile() ? "mobile" : "qrcode",
          name: (s == null ? void 0 : s.name) || "Unknown",
          reconnect: true,
          view: ae.state.view,
          walletRank: s == null ? void 0 : s.order
        }
      });
    }
    async syncNamespaceConnection(e) {
      try {
        e === F.CHAIN.EVM && ee.isSafeApp() && V.setConnectorId(F.CONNECTOR_ID.SAFE, e);
        const s = V.getConnectorId(e);
        switch (this.setStatus("connecting", e), s) {
          case F.CONNECTOR_ID.WALLET_CONNECT:
            await this.reconnectWalletConnect();
            break;
          case F.CONNECTOR_ID.AUTH:
            break;
          default:
            await this.syncAdapterConnection(e);
        }
      } catch (s) {
        console.warn("AppKit couldn't sync existing connection", s), this.setStatus("disconnected", e);
      }
    }
    onDisconnectNamespace(e) {
      const { chainNamespace: s, closeModal: n } = e || {};
      b.resetAccount(s), b.resetNetwork(s), H.removeConnectedNamespace(s);
      const r = Array.from(b.state.chains.keys());
      (s ? [
        s
      ] : r).forEach((o) => H.addDisconnectedConnectorId(V.getConnectorId(o) || "", o)), V.removeConnectorId(s), $e.resetChain(s), this.setUser(null, s), this.setStatus("disconnected", s), this.setConnectedWalletInfo(null, s), n !== false && me.close();
    }
    async syncAdapterConnections() {
      await Promise.allSettled(this.chainNamespaces.map((e) => {
        const s = this.getAdapter(e), n = this.getCaipAddress(e), r = this.getCaipNetwork(e);
        return s == null ? void 0 : s.syncConnections({
          connectToFirstConnector: !n,
          caipNetwork: r
        });
      }));
    }
    async syncAdapterConnection(e) {
      var _a2, _b2, _c2, _d3, _e2;
      const s = this.getAdapter(e), n = this.getCaipNetwork(e), r = V.getConnectorId(e), o = V.getConnectors(e).find((a) => a.id === r);
      try {
        if (!s || !o) throw new Error(`Adapter or connector not found for namespace ${e}`);
        if (!(n == null ? void 0 : n.id)) throw new Error("CaipNetwork not found");
        const a = await (s == null ? void 0 : s.syncConnection({
          namespace: e,
          id: o.id,
          chainId: n.id,
          rpcUrl: (_c2 = (_b2 = (_a2 = n == null ? void 0 : n.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
        }));
        a ? (this.syncProvider({
          ...a,
          chainNamespace: e
        }), await this.syncAccount({
          ...a,
          chainNamespace: e
        }), this.setStatus("connected", e), fe.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          address: a.address,
          properties: {
            method: "browser",
            name: ((_d3 = o.info) == null ? void 0 : _d3.name) || o.name || "Unknown",
            reconnect: true,
            view: ae.state.view,
            walletRank: (_e2 = o == null ? void 0 : o.explorerWallet) == null ? void 0 : _e2.order
          }
        })) : this.setStatus("disconnected", e);
      } catch {
        this.onDisconnectNamespace({
          chainNamespace: e,
          closeModal: false
        });
      }
    }
    async syncWalletConnectAccount() {
      var _a2, _b2;
      const e = Object.keys(((_b2 = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b2.namespaces) || {}), s = this.chainNamespaces.map(async (n) => {
        var _a3, _b3, _c2, _d3, _e2;
        const r = this.getAdapter(n);
        if (!r) return;
        const i = ((_d3 = (_c2 = (_b3 = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b3.namespaces) == null ? void 0 : _c2[n]) == null ? void 0 : _d3.accounts) || [], o = (_e2 = b.state.activeCaipNetwork) == null ? void 0 : _e2.id, a = i.find((l) => {
          const { chainId: d } = it.parseCaipAddress(l);
          return d === (o == null ? void 0 : o.toString());
        }) || i[0];
        if (a) {
          const l = it.validateCaipAddress(a), { chainId: d, address: h } = it.parseCaipAddress(l);
          if ($e.setProviderId(n, Xs.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && b.state.activeCaipNetwork && r.namespace !== F.CHAIN.EVM) {
            const u = r.getWalletConnectProvider({
              caipNetworks: this.getCaipNetworks(),
              provider: this.universalProvider,
              activeCaipNetwork: b.state.activeCaipNetwork
            });
            $e.setProvider(n, u);
          } else $e.setProvider(n, this.universalProvider);
          V.setConnectorId(F.CONNECTOR_ID.WALLET_CONNECT, n), H.addConnectedNamespace(n), await this.syncAccount({
            address: h,
            chainId: d,
            chainNamespace: n
          });
        } else e.includes(n) && this.setStatus("disconnected", n);
        const c = this.getApprovedCaipNetworksData();
        this.syncConnectedWalletInfo(n), b.setApprovedCaipNetworksData(n, {
          approvedCaipNetworkIds: c.approvedCaipNetworkIds,
          supportsAllNetworks: c.supportsAllNetworks
        });
      });
      await Promise.all(s);
    }
    syncProvider({ type: e, provider: s, id: n, chainNamespace: r }) {
      $e.setProviderId(r, e), $e.setProvider(r, s), V.setConnectorId(n, r);
    }
    async syncAccount(e) {
      var _a2, _b2;
      const s = e.chainNamespace === b.state.activeChain, n = b.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: r, chainId: i, chainNamespace: o } = e, { chainId: a } = H.getActiveNetworkProps(), c = (n == null ? void 0 : n.id) || a, l = ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.name) === F.UNSUPPORTED_NETWORK_NAME, d = b.getNetworkProp("supportsAllNetworks", o);
      if (this.setStatus("connected", o), !(l && !d) && c) {
        let h = this.getCaipNetworks().find((p) => p.id.toString() === c.toString()), u = this.getCaipNetworks().find((p) => p.chainNamespace === o);
        if (!d && !h && !u) {
          const p = this.getApprovedCaipNetworkIds() || [], m = p.find((x) => {
            var _a3;
            return ((_a3 = it.parseCaipNetworkId(x)) == null ? void 0 : _a3.chainId) === c.toString();
          }), T = p.find((x) => {
            var _a3;
            return ((_a3 = it.parseCaipNetworkId(x)) == null ? void 0 : _a3.chainNamespace) === o;
          });
          h = this.getCaipNetworks().find((x) => x.caipNetworkId === m), u = this.getCaipNetworks().find((x) => x.caipNetworkId === T || "deprecatedCaipNetworkId" in x && x.deprecatedCaipNetworkId === T);
        }
        const f = h || u;
        (f == null ? void 0 : f.chainNamespace) === b.state.activeChain ? q.state.enableNetworkSwitch && !q.state.allowUnsupportedChain && ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.name) === F.UNSUPPORTED_NETWORK_NAME ? b.showUnsupportedChainUI() : this.setCaipNetwork(f) : s || n && this.setCaipNetworkOfNamespace(n, o), this.syncConnectedWalletInfo(o);
        const g = this.getAddress(o);
        ld.isLowerCaseMatch(r, g) || this.syncAccountInfo(r, f == null ? void 0 : f.id, o), s ? await this.syncBalance({
          address: r,
          chainId: f == null ? void 0 : f.id,
          chainNamespace: o
        }) : await this.syncBalance({
          address: r,
          chainId: n == null ? void 0 : n.id,
          chainNamespace: o
        }), this.syncIdentity({
          address: r,
          chainId: i,
          chainNamespace: o
        });
      }
    }
    async syncAccountInfo(e, s, n) {
      const r = this.getCaipAddress(n), i = s || (r == null ? void 0 : r.split(":")[1]);
      if (!i) return;
      const o = `${n}:${i}:${e}`;
      this.setCaipAddress(o, n, true), await this.syncIdentity({
        address: e,
        chainId: i,
        chainNamespace: n
      });
    }
    async syncReownName(e, s) {
      try {
        const n = await this.getReownName(e);
        if (n[0]) {
          const r = n[0];
          this.setProfileName(r.name, s);
        } else this.setProfileName(null, s);
      } catch {
        this.setProfileName(null, s);
      }
    }
    syncConnectedWalletInfo(e) {
      var _a2;
      const s = V.getConnectorId(e), n = $e.getProviderId(e);
      if (n === Xs.CONNECTOR_TYPE_ANNOUNCED || n === Xs.CONNECTOR_TYPE_INJECTED) {
        if (s) {
          const i = this.getConnectors().find((o) => {
            var _a3, _b2;
            const a = o.id === s, c = ((_a3 = o.info) == null ? void 0 : _a3.rdns) === s, l = (_b2 = o.connectors) == null ? void 0 : _b2.some((d) => {
              var _a4;
              return d.id === s || ((_a4 = d.info) == null ? void 0 : _a4.rdns) === s;
            });
            return a || c || !!l;
          });
          if (i) {
            const { info: o, name: a, imageUrl: c } = i, l = c || this.getConnectorImage(i);
            this.setConnectedWalletInfo({
              name: a,
              icon: l,
              ...o
            }, e);
          }
        }
      } else if (n === Xs.CONNECTOR_TYPE_WALLET_CONNECT) {
        const r = $e.getProvider(e);
        (r == null ? void 0 : r.session) && this.setConnectedWalletInfo({
          ...r.session.peer.metadata,
          name: r.session.peer.metadata.name,
          icon: (_a2 = r.session.peer.metadata.icons) == null ? void 0 : _a2[0]
        }, e);
      } else if (s && (s === F.CONNECTOR_ID.COINBASE_SDK || s === F.CONNECTOR_ID.COINBASE)) {
        const r = this.getConnectors().find((c) => c.id === s), i = (r == null ? void 0 : r.name) || "Coinbase Wallet", o = (r == null ? void 0 : r.imageUrl) || this.getConnectorImage(r), a = r == null ? void 0 : r.info;
        this.setConnectedWalletInfo({
          ...a,
          name: i,
          icon: o
        }, e);
      }
    }
    async syncBalance(e) {
      !pp.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((n) => {
        var _a2;
        return n.id.toString() === ((_a2 = e.chainId) == null ? void 0 : _a2.toString());
      }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace);
    }
    async ready() {
      await this.readyPromise;
    }
    async updateNativeBalance(e, s, n) {
      const r = this.getAdapter(n), i = b.getCaipNetworkByNamespace(n, s);
      if (r) {
        const o = await r.getBalance({
          address: e,
          chainId: s,
          caipNetwork: i,
          tokens: this.options.tokens
        });
        return this.setBalance(o.balance, o.symbol, n), o;
      }
    }
    async initializeUniversalAdapter() {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h2, _i2, _j;
      const e = zk.createLogger((r, ...i) => {
        r && this.handleAlertError(r), console.error(...i);
      }), s = {
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        metadata: {
          name: ((_b2 = this.options) == null ? void 0 : _b2.metadata) ? (_c2 = this.options) == null ? void 0 : _c2.metadata.name : "",
          description: ((_d3 = this.options) == null ? void 0 : _d3.metadata) ? (_e2 = this.options) == null ? void 0 : _e2.metadata.description : "",
          url: ((_f2 = this.options) == null ? void 0 : _f2.metadata) ? (_g2 = this.options) == null ? void 0 : _g2.metadata.url : "",
          icons: ((_h2 = this.options) == null ? void 0 : _h2.metadata) ? (_i2 = this.options) == null ? void 0 : _i2.metadata.icons : [
            ""
          ]
        },
        logger: e
      };
      q.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await XO.init(s);
      const n = this.universalProvider.disconnect.bind(this.universalProvider);
      this.universalProvider.disconnect = async () => {
        try {
          return await n();
        } catch (r) {
          if (r instanceof Error && r.message.includes("Missing or invalid. Record was recently deleted")) return;
          throw r;
        }
      }, q.state.enableReconnect === false && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect();
    }
    listenWalletConnect() {
      this.universalProvider && this.chainNamespaces.forEach((e) => {
        Hn.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace: e,
          onDisplayUri: (s) => {
            G.setUri(s);
          },
          onConnect: (s) => {
            const { address: n } = ee.getAccount(s[0]);
            for (const r of this.chainNamespaces) H.removeDisconnectedConnectorId(F.CONNECTOR_ID.WALLET_CONNECT, r);
            G.finalizeWcConnection(n);
          },
          onDisconnect: () => {
            b.state.noAdapters && this.resetAccount(e), G.resetWcConnection();
          },
          onChainChanged: (s) => {
            const n = b.state.activeChain, r = n && V.state.activeConnectorIds[n] === F.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (b.state.noAdapters || r)) {
              const i = this.getCaipNetworks().find((a) => a.id.toString() === s.toString() || a.caipNetworkId.toString() === s.toString()), o = this.getCaipNetwork();
              if (!i) {
                this.setUnsupportedNetwork(s);
                return;
              }
              (o == null ? void 0 : o.id.toString()) !== (i == null ? void 0 : i.id.toString()) && (o == null ? void 0 : o.chainNamespace) === (i == null ? void 0 : i.chainNamespace) && this.setCaipNetwork(i);
            }
          },
          onAccountsChanged: (s) => {
            const n = b.state.activeChain, r = n && V.state.activeConnectorIds[n] === F.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (b.state.noAdapters || r)) {
              const i = s == null ? void 0 : s[0];
              i && this.syncAccount({
                address: i.address,
                chainId: i.chainId,
                chainNamespace: i.chainNamespace
              });
            }
          }
        });
      });
    }
    createUniversalProvider() {
      var _a2;
      return !this.universalProviderInitPromise && ee.isClient() && ((_a2 = this.options) == null ? void 0 : _a2.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
      if (!this.universalProvider) try {
        await this.createUniversalProvider();
      } catch (e) {
        fe.sendEvent({
          type: "error",
          event: "INTERNAL_SDK_ERROR",
          properties: {
            errorType: "UniversalProviderInitError",
            errorMessage: e instanceof Error ? e.message : "Unknown",
            uncaught: false
          }
        }), console.error("AppKit:getUniversalProvider - Cannot create provider", e);
      }
      return this.universalProvider;
    }
    getDisabledCaipNetworks() {
      const e = b.getAllApprovedCaipNetworkIds(), s = b.getAllRequestedCaipNetworks();
      return ee.sortRequestedNetworks(e, s).filter((r) => b.isCaipNetworkDisabled(r));
    }
    handleAlertError(e) {
      const s = Object.entries(ts.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [n, r] = s ?? [], { message: i, alertErrorKey: o } = r ?? {};
      if (n && i && !this.reportedAlertErrors[n]) {
        const a = ts.ALERT_ERRORS[o];
        a && (qt.open(a, "error"), this.reportedAlertErrors[n] = true);
      }
    }
    getAdapter(e) {
      var _a2;
      if (e) return (_a2 = this.chainAdapters) == null ? void 0 : _a2[e];
    }
    createAdapter(e) {
      var _a2, _b2;
      if (!e) return;
      const s = e.namespace;
      if (!s) return;
      this.createClients();
      const n = e;
      n.namespace = s, n.construct({
        namespace: s,
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        networks: (_b2 = this.caipNetworks) == null ? void 0 : _b2.filter(({ chainNamespace: r }) => r === s)
      }), this.chainNamespaces.includes(s) || this.chainNamespaces.push(s), this.chainAdapters && (this.chainAdapters[s] = n);
    }
    async open(e) {
      await this.injectModalUi(), (e == null ? void 0 : e.uri) && G.setUri(e.uri);
      const { isSwap: s, isSend: n } = this.toModalOptions();
      return s(e) ? me.open({
        ...e,
        data: {
          swap: e.arguments
        }
      }) : n(e) && e.arguments ? this.openSend(e.arguments) : me.open(e);
    }
    async close() {
      await this.injectModalUi(), me.close();
    }
    setLoading(e, s) {
      me.setLoading(e, s);
    }
    async disconnect(e) {
      await G.disconnect({
        namespace: e
      });
    }
    getSIWX() {
      return q.state.siwx;
    }
    getError() {
      return "";
    }
    getChainId() {
      var _a2;
      return (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.id;
    }
    async switchNetwork(e, { throwOnFailure: s = false } = {}) {
      const n = this.getCaipNetworks().find((r) => r.id === e.id);
      if (!n) {
        qt.open(ts.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      await b.switchActiveNetwork(n, {
        throwOnFailure: s
      });
    }
    getWalletProvider() {
      return b.state.activeChain ? $e.state.providers[b.state.activeChain] : null;
    }
    getWalletProviderType() {
      return $e.getProviderId(b.state.activeChain);
    }
    subscribeProviders(e) {
      return $e.subscribeProviders(e);
    }
    getThemeMode() {
      return Wt.state.themeMode;
    }
    getThemeVariables() {
      return Wt.state.themeVariables;
    }
    setThemeMode(e) {
      Wt.setThemeMode(e), cd(Wt.state.themeMode);
    }
    setTermsConditionsUrl(e) {
      q.setTermsConditionsUrl(e);
    }
    setPrivacyPolicyUrl(e) {
      q.setPrivacyPolicyUrl(e);
    }
    setThemeVariables(e) {
      Wt.setThemeVariables(e), Wk(Wt.state.themeVariables);
    }
    subscribeTheme(e) {
      return Wt.subscribe(e);
    }
    subscribeConnections(e) {
      return this.remoteFeatures.multiWallet ? G.subscribe(e) : (qt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {
      });
    }
    getWalletInfo(e) {
      var _a2, _b2, _c2;
      return e ? (_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.connectedWalletInfo : (_c2 = b.getAccountData()) == null ? void 0 : _c2.connectedWalletInfo;
    }
    getAccount(e) {
      const s = e || b.state.activeChain, n = V.getAuthConnector(s), r = b.getAccountData(s), i = H.getConnectedConnectorId(b.state.activeChain), o = G.getConnections(s);
      if (!s) throw new Error("AppKit:getAccount - namespace is required");
      const a = o.flatMap((c) => c.accounts.map(({ address: l, type: d, publicKey: h }) => ee.createAccount(s, l, d || "eoa", h)));
      if (r) return {
        allAccounts: a,
        caipAddress: r.caipAddress,
        address: ee.getPlainAddress(r.caipAddress),
        isConnected: !!r.caipAddress,
        status: r.status,
        embeddedWalletInfo: n && i === F.CONNECTOR_ID.AUTH ? {
          user: r.user ? {
            ...r.user,
            username: H.getConnectedSocialUsername()
          } : void 0,
          authProvider: r.socialProvider || "email",
          accountType: os(s),
          isSmartAccountDeployed: !!r.smartAccountDeployed
        } : void 0
      };
    }
    subscribeAccount(e, s) {
      const n = [], r = () => {
        const o = this.getAccount(s);
        o && e(o);
      };
      if (s) {
        const o = b.subscribeChainProp("accountState", r, s);
        n.push(o);
      } else {
        const o = b.subscribe(r);
        n.push(o);
      }
      const i = V.subscribe(r);
      return n.push(i), () => {
        n.forEach((o) => o());
      };
    }
    subscribeNetwork(e) {
      return b.subscribe(({ activeCaipNetwork: s }) => {
        e({
          caipNetwork: s,
          chainId: s == null ? void 0 : s.id,
          caipNetworkId: s == null ? void 0 : s.caipNetworkId
        });
      });
    }
    subscribeWalletInfo(e, s) {
      return s ? b.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo), s) : b.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo));
    }
    subscribeShouldUpdateToAddress(e) {
      return b.subscribeChainProp("accountState", (s) => e(s == null ? void 0 : s.shouldUpdateToAddress));
    }
    subscribeCaipNetworkChange(e) {
      return b.subscribeKey("activeCaipNetwork", e);
    }
    getState() {
      return vs.state;
    }
    getRemoteFeatures() {
      return q.state.remoteFeatures;
    }
    subscribeState(e) {
      return vs.subscribe(e);
    }
    subscribeRemoteFeatures(e) {
      return q.subscribeKey("remoteFeatures", e);
    }
    showErrorMessage(e) {
      Us.showError(e);
    }
    showSuccessMessage(e) {
      Us.showSuccess(e);
    }
    getEvent() {
      return {
        ...fe.state
      };
    }
    subscribeEvents(e) {
      return fe.subscribe(e);
    }
    replace(e) {
      ae.replace(e);
    }
    redirect(e) {
      ae.push(e);
    }
    popTransactionStack(e) {
      ae.popTransactionStack(e);
    }
    isOpen() {
      return me.state.open;
    }
    isTransactionStackEmpty() {
      return ae.state.transactionStack.length === 0;
    }
    static getInstance() {
      return this.instance;
    }
    updateFeatures(e) {
      q.setFeatures(e);
    }
    updateRemoteFeatures(e) {
      q.setRemoteFeatures(e);
    }
    updateOptions(e) {
      const n = {
        ...q.state || {},
        ...e
      };
      q.setOptions(n);
    }
    setConnectMethodsOrder(e) {
      q.setConnectMethodsOrder(e);
    }
    setWalletFeaturesOrder(e) {
      q.setWalletFeaturesOrder(e);
    }
    setCollapseWallets(e) {
      q.setCollapseWallets(e);
    }
    setSocialsOrder(e) {
      q.setSocialsOrder(e);
    }
    getConnectMethodsOrder() {
      return qn.getConnectOrderMethod(q.state.features, V.getConnectors());
    }
    addNetwork(e, s) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      const n = this.extendCaipNetwork(s, this.options);
      this.getCaipNetworks().find((r) => r.id === n.id) || b.addNetwork(n);
    }
    removeNetwork(e, s) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      this.getCaipNetworks().find((r) => r.id === s) && b.removeNetwork(e, s);
    }
  }
  let ap = false;
  class jw extends e3 {
    async open(e) {
      V.isConnected() || await super.open(e);
    }
    async close() {
      var _a2;
      if (await super.close(), this.options.manualWCControl) {
        const e = (_a2 = b.getAccountData(this.activeChainNamespace)) == null ? void 0 : _a2.address;
        G.finalizeWcConnection(e);
      }
    }
    async syncIdentity(e) {
      return Promise.resolve();
    }
    async syncBalance(e) {
      return Promise.resolve();
    }
    async injectModalUi() {
      if (!ap && ee.isClient()) {
        if (await oa(() => import("./basic-CIRqadzE.js"), __vite__mapDeps([5,6,1,2])), await oa(() => import("./w3m-modal-BJNcHPTg.js"), __vite__mapDeps([7,6,1,2])), !document.querySelector("w3m-modal")) {
          const s = document.createElement("w3m-modal");
          !q.state.disableAppend && !q.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s);
        }
        ap = true;
      }
    }
  }
  const t3 = "1.8.17-wc-circular-dependencies-fix.0";
  function s3(t) {
    return new jw({
      ...t,
      basic: true,
      sdkVersion: `html-core-${t3}`
    });
  }
  tP = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: jw,
    createAppKit: s3
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Np as $,
  ne as A,
  le as B,
  b as C,
  ge as D,
  ui as E,
  Ip as F,
  V as G,
  at as H,
  ot as I,
  Be as J,
  bs as K,
  Iy as L,
  me as M,
  pp as N,
  it as O,
  $e as P,
  fo as Q,
  ae as R,
  ie as S,
  ld as T,
  q as U,
  r3 as V,
  on as W,
  la as X,
  is as Y,
  Wt as Z,
  X3 as _,
  __tla,
  F as a,
  At as a0,
  Ar as a1,
  rn as a2,
  da as a3,
  Kr as a4,
  H as a5,
  qn as a6,
  tP as a7,
  re as b,
  Uw as c,
  ia as d,
  Y3 as e,
  ah as f,
  To as g,
  Qe as h,
  Mn as i,
  J3 as j,
  eP as k,
  yp as l,
  ls as m,
  Us as n,
  G as o,
  fe as p,
  os as q,
  Q3 as r,
  hy as s,
  ee as t,
  od as u,
  jk as v,
  Z3 as w,
  d0 as x,
  qt as y,
  gd as z
};
