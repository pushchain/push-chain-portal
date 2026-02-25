const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-On9LzipM.js","assets/main-DXUWbnP1.js","assets/main-BN-Qqfmx.css","assets/ccip-C1JlSwWz.js","assets/features-B6SfIYcA.js","assets/basic-BnnFJCi-.js","assets/index-DcgFhcTQ.js","assets/w3m-modal-LsleGRIU.js"])))=>i.map(i=>d[i]);
import { bk as Hw, aQ as Vw, b0 as zw, cS as Kw, U as Gw, cT as Yw, cU as cs, bK as lp, cQ as aa, by as So, cV as gi, cW as bt, cX as Ra, cY as fe, cZ as z, c_ as Yt, c$ as Zw, d0 as Ut, d1 as Jw, d2 as Ie, d3 as Wi, d4 as ol, d5 as dp, d6 as xr, d7 as up, d8 as Zt, d9 as Xw, da as Qw, db as Jt, dc as Us, dd as mi, de as ud, df as e0, dg as hd, dh as fd, di as Xi, dj as pd, dk as iu, dl as t0, dm as s0, dn as n0, dp as ou, dq as dr, dr as hp, ds as Gs, dt as $s, du as r0, dv as i0, dw as o0, dx as a0, dy as c0, dz as l0, dA as d0, dB as u0, dC as mn, dD as fp, h as _o, cC as au, __tla as __tla_0 } from "./main-DXUWbnP1.js";
let Sp, ne, le, b, me, fi, Np, V, ct, at, De, Es, N0, we, gp, ot, Ue, po, ae, ie, dd, q, i3, an, da, os, Ht, Q3, F, It, Ir, on, ua, Gr, H, jn, sP, re, Bw, oa, Z3, cu, To, et, Fn, X3, tP, bp, ds, Bs, G, pe, as, eP, h0, ee, ad, Wk, J3, uy, jt, md;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _d2;
  cu = function(t, e = {}) {
    const { key: s = "fallback", name: n = "Fallback", rank: r = false, shouldThrow: i = h0, retryCount: o, retryDelay: a } = e;
    return (({ chain: c, pollingInterval: l = 4e3, timeout: d, ...u }) => {
      let h = t, f = () => {
      };
      const g = Hw({
        key: s,
        name: n,
        async request({ method: p, params: m }) {
          let x;
          const T = async (A = 0) => {
            const N = h[A]({
              ...u,
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
              }), i(P) || A === h.length - 1 || (x ?? (x = h.slice(A + 1).some((U) => {
                const { include: B, exclude: L } = U({
                  chain: c
                }).config.methods || {};
                return B ? B.includes(p) : L ? !L.includes(p) : true;
              })), !x)) throw P;
              return T(A + 1);
            }
          };
          return T();
        },
        retryCount: o,
        retryDelay: a,
        type: "fallback"
      }, {
        onResponse: (p) => f = p,
        transports: h.map((p) => p({
          chain: c,
          retryCount: 0
        }))
      });
      if (r) {
        const p = typeof r == "object" ? r : {};
        f0({
          chain: c,
          interval: p.interval ?? l,
          onTransports: (m) => h = m,
          ping: p.ping,
          sampleCount: p.sampleCount,
          timeout: p.timeout,
          transports: h,
          weights: p.weights
        });
      }
      return g;
    });
  };
  h0 = function(t) {
    return !!("code" in t && typeof t.code == "number" && (t.code === Vw.code || t.code === zw.code || t.code === Kw.code || Gw.nodeMessage.test(t.message) || t.code === 5e3));
  };
  function f0({ chain: t, interval: e = 4e3, onTransports: s, ping: n, sampleCount: r = 10, timeout: i = 1e3, transports: o, weights: a = {} }) {
    const { stability: c = 0.7, latency: l = 0.3 } = a, d = [], u = async () => {
      const h = await Promise.all(o.map(async (p) => {
        const m = p({
          chain: t,
          retryCount: 0,
          timeout: i
        }), x = Date.now();
        let T, A;
        try {
          await (n ? n({
            transport: m
          }) : m.request({
            method: "net_listening"
          })), A = 1;
        } catch {
          A = 0;
        } finally {
          T = Date.now();
        }
        return {
          latency: T - x,
          success: A
        };
      }));
      d.push(h), d.length > r && d.shift();
      const f = Math.max(...d.map((p) => Math.max(...p.map(({ latency: m }) => m)))), g = o.map((p, m) => {
        const x = d.map((U) => U[m].latency), A = 1 - x.reduce((U, B) => U + B, 0) / x.length / f, N = d.map((U) => U[m].success), P = N.reduce((U, B) => U + B, 0) / N.length;
        return P === 0 ? [
          0,
          m
        ] : [
          l * A + c * P,
          m
        ];
      }).sort((p, m) => m[0] - p[0]);
      s(g.map(([, p]) => o[p])), await Yw(e), u();
    };
    u();
  }
  const pp = {
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    }
  };
  var lu = {};
  let mp;
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
    SECURE_SITE_SDK_ORIGIN: (typeof cs < "u" && typeof lu < "u" ? lu.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
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
    IS_DEVELOPMENT: typeof cs < "u" && false,
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
  gp = {
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
  mp = [
    "eip155",
    "solana",
    "polkadot",
    "bip122",
    "cosmos",
    "sui",
    "stacks"
  ];
  var p0 = 20, g0 = 1, Ar = 1e6, du = 1e6, m0 = -7, w0 = 21, y0 = false, ho = "[big.js] ", Tr = ho + "Invalid ", $a = Tr + "decimal places", b0 = Tr + "rounding mode", wp = ho + "Division by zero", ke = {}, Ms = void 0, E0 = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function yp() {
    function t(e) {
      var s = this;
      if (!(s instanceof t)) return e === Ms ? yp() : new t(e);
      if (e instanceof t) s.s = e.s, s.e = e.e, s.c = e.c.slice();
      else {
        if (typeof e != "string") {
          if (t.strict === true && typeof e != "bigint") throw TypeError(Tr + "value");
          e = e === 0 && 1 / e < 0 ? "-0" : String(e);
        }
        v0(s, e);
      }
      s.constructor = t;
    }
    return t.prototype = ke, t.DP = p0, t.RM = g0, t.NE = m0, t.PE = w0, t.strict = y0, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t;
  }
  function v0(t, e) {
    var s, n, r;
    if (!E0.test(e)) throw Error(Tr + "number");
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
  function Or(t, e, s, n) {
    var r = t.c;
    if (s === Ms && (s = t.constructor.RM), s !== 0 && s !== 1 && s !== 2 && s !== 3) throw Error(b0);
    if (e < 1) n = s === 3 && (n || !!r[0]) || e === 0 && (s === 1 && r[0] >= 5 || s === 2 && (r[0] > 5 || r[0] === 5 && (n || r[1] !== Ms))), r.length = 1, n ? (t.e = t.e - e + 1, r[0] = 1) : r[0] = t.e = 0;
    else if (e < r.length) {
      if (n = s === 1 && r[e] >= 5 || s === 2 && (r[e] > 5 || r[e] === 5 && (n || r[e + 1] !== Ms || r[e - 1] & 1)) || s === 3 && (n || !!r[0]), r.length = e, n) {
        for (; ++r[--e] > 9; ) if (r[e] = 0, e === 0) {
          ++t.e, r.unshift(1);
          break;
        }
      }
      for (e = r.length; !r[--e]; ) r.pop();
    }
    return t;
  }
  function kr(t, e, s) {
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
  ke.abs = function() {
    var t = new this.constructor(this);
    return t.s = 1, t;
  };
  ke.cmp = function(t) {
    var e, s = this, n = s.c, r = (t = new s.constructor(t)).c, i = s.s, o = t.s, a = s.e, c = t.e;
    if (!n[0] || !r[0]) return n[0] ? i : r[0] ? -o : 0;
    if (i != o) return i;
    if (e = i < 0, a != c) return a > c ^ e ? 1 : -1;
    for (o = (a = n.length) < (c = r.length) ? a : c, i = -1; ++i < o; ) if (n[i] != r[i]) return n[i] > r[i] ^ e ? 1 : -1;
    return a == c ? 0 : a > c ^ e ? 1 : -1;
  };
  ke.div = function(t) {
    var e = this, s = e.constructor, n = e.c, r = (t = new s(t)).c, i = e.s == t.s ? 1 : -1, o = s.DP;
    if (o !== ~~o || o < 0 || o > Ar) throw Error($a);
    if (!r[0]) throw Error(wp);
    if (!n[0]) return t.s = i, t.c = [
      t.e = 0
    ], t;
    var a, c, l, d, u, h = r.slice(), f = a = r.length, g = n.length, p = n.slice(0, a), m = p.length, x = t, T = x.c = [], A = 0, N = o + (x.e = e.e - t.e) + 1;
    for (x.s = i, i = N < 0 ? 0 : N, h.unshift(0); m++ < a; ) p.push(0);
    do {
      for (l = 0; l < 10; l++) {
        if (a != (m = p.length)) d = a > m ? 1 : -1;
        else for (u = -1, d = 0; ++u < a; ) if (r[u] != p[u]) {
          d = r[u] > p[u] ? 1 : -1;
          break;
        }
        if (d < 0) {
          for (c = m == a ? r : h; m; ) {
            if (p[--m] < c[m]) {
              for (u = m; u && !p[--u]; ) p[u] = 9;
              --p[u], p[m] += 10;
            }
            p[m] -= c[m];
          }
          for (; !p[0]; ) p.shift();
        } else break;
      }
      T[A++] = d ? l : ++l, p[0] && d ? p[m] = n[f] || 0 : p = [
        n[f]
      ];
    } while ((f++ < g || p[0] !== Ms) && i--);
    return !T[0] && A != 1 && (T.shift(), x.e--, N--), A > N && Or(x, N, s.RM, p[0] !== Ms), x;
  };
  ke.eq = function(t) {
    return this.cmp(t) === 0;
  };
  ke.gt = function(t) {
    return this.cmp(t) > 0;
  };
  ke.gte = function(t) {
    return this.cmp(t) > -1;
  };
  ke.lt = function(t) {
    return this.cmp(t) < 0;
  };
  ke.lte = function(t) {
    return this.cmp(t) < 1;
  };
  ke.minus = ke.sub = function(t) {
    var e, s, n, r, i = this, o = i.constructor, a = i.s, c = (t = new o(t)).s;
    if (a != c) return t.s = -c, i.plus(t);
    var l = i.c.slice(), d = i.e, u = t.c, h = t.e;
    if (!l[0] || !u[0]) return u[0] ? t.s = -c : l[0] ? t = new o(i) : t.s = 1, t;
    if (a = d - h) {
      for ((r = a < 0) ? (a = -a, n = l) : (h = d, n = u), n.reverse(), c = a; c--; ) n.push(0);
      n.reverse();
    } else for (s = ((r = l.length < u.length) ? l : u).length, a = c = 0; c < s; c++) if (l[c] != u[c]) {
      r = l[c] < u[c];
      break;
    }
    if (r && (n = l, l = u, u = n, t.s = -t.s), (c = (s = u.length) - (e = l.length)) > 0) for (; c--; ) l[e++] = 0;
    for (c = e; s > a; ) {
      if (l[--s] < u[s]) {
        for (e = s; e && !l[--e]; ) l[e] = 9;
        --l[e], l[s] += 10;
      }
      l[s] -= u[s];
    }
    for (; l[--c] === 0; ) l.pop();
    for (; l[0] === 0; ) l.shift(), --h;
    return l[0] || (t.s = 1, l = [
      h = 0
    ]), t.c = l, t.e = h, t;
  };
  ke.mod = function(t) {
    var e, s = this, n = s.constructor, r = s.s, i = (t = new n(t)).s;
    if (!t.c[0]) throw Error(wp);
    return s.s = t.s = 1, e = t.cmp(s) == 1, s.s = r, t.s = i, e ? new n(s) : (r = n.DP, i = n.RM, n.DP = n.RM = 0, s = s.div(t), n.DP = r, n.RM = i, this.minus(s.times(t)));
  };
  ke.neg = function() {
    var t = new this.constructor(this);
    return t.s = -t.s, t;
  };
  ke.plus = ke.add = function(t) {
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
  ke.pow = function(t) {
    var e = this, s = new e.constructor("1"), n = s, r = t < 0;
    if (t !== ~~t || t < -du || t > du) throw Error(Tr + "exponent");
    for (r && (t = -t); t & 1 && (n = n.times(e)), t >>= 1, !!t; ) e = e.times(e);
    return r ? s.div(n) : n;
  };
  ke.prec = function(t, e) {
    if (t !== ~~t || t < 1 || t > Ar) throw Error(Tr + "precision");
    return Or(new this.constructor(this), t, e);
  };
  ke.round = function(t, e) {
    if (t === Ms) t = 0;
    else if (t !== ~~t || t < -Ar || t > Ar) throw Error($a);
    return Or(new this.constructor(this), t + this.e + 1, e);
  };
  ke.sqrt = function() {
    var t, e, s, n = this, r = n.constructor, i = n.s, o = n.e, a = new r("0.5");
    if (!n.c[0]) return new r(n);
    if (i < 0) throw Error(ho + "No square root");
    i = Math.sqrt(+kr(n, true, true)), i === 0 || i === 1 / 0 ? (e = n.c.join(""), e.length + o & 1 || (e += "0"), i = Math.sqrt(e), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), t = new r((i == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + o)) : t = new r(i + ""), o = t.e + (r.DP += 4);
    do
      s = t, t = a.times(s.plus(n.div(s)));
    while (s.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
    return Or(t, (r.DP -= 4) + t.e + 1, r.RM);
  };
  ke.times = ke.mul = function(t) {
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
  ke.toExponential = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Ms) {
      if (t !== ~~t || t < 0 || t > Ar) throw Error($a);
      for (s = Or(new s.constructor(s), ++t, e); s.c.length < t; ) s.c.push(0);
    }
    return kr(s, true, !!n);
  };
  ke.toFixed = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Ms) {
      if (t !== ~~t || t < 0 || t > Ar) throw Error($a);
      for (s = Or(new s.constructor(s), t + s.e + 1, e), t = t + s.e + 1; s.c.length < t; ) s.c.push(0);
    }
    return kr(s, false, !!n);
  };
  ke[Symbol.for("nodejs.util.inspect.custom")] = ke.toJSON = ke.toString = function() {
    var t = this, e = t.constructor;
    return kr(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
  };
  ke.toNumber = function() {
    var t = +kr(this, true, true);
    if (this.constructor.strict === true && !this.eq(t.toString())) throw Error(ho + "Imprecise conversion");
    return t;
  };
  ke.toPrecision = function(t, e) {
    var s = this, n = s.constructor, r = s.c[0];
    if (t !== Ms) {
      if (t !== ~~t || t < 1 || t > Ar) throw Error(Tr + "precision");
      for (s = Or(new n(s), t, e); s.c.length < t; ) s.c.push(0);
    }
    return kr(s, t <= s.e || s.e <= n.NE || s.e >= n.PE, !!r);
  };
  ke.valueOf = function() {
    var t = this, e = t.constructor;
    if (e.strict === true) throw Error(ho + "valueOf disallowed");
    return kr(t, t.e <= e.NE || t.e >= e.PE, true);
  };
  var xs = yp();
  let C0, A0, I0, Ur;
  bp = {
    bigNumber(t, e = {
      safe: false
    }) {
      try {
        return t ? new xs(t) : new xs(0);
      } catch (s) {
        if (e.safe) return new xs(0);
        throw s;
      }
    },
    formatNumber(t, e) {
      const { decimals: s, round: n = 8, safe: r = true } = e;
      return bp.bigNumber(t, {
        safe: r
      }).div(new xs(10).pow(s)).round(n);
    },
    multiply(t, e) {
      if (t === void 0 || e === void 0) return new xs(0);
      const s = new xs(t), n = new xs(e);
      return s.times(n);
    },
    toFixed(t, e = 2) {
      return t === void 0 || t === "" ? new xs(0).toFixed(e) : new xs(t).toFixed(e);
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
      return new xs(e).toNumber();
    }
  };
  C0 = [
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
  A0 = [
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
  I0 = [
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
  N0 = {
    getERC20Abi: (t) => F.USDT_CONTRACT_ADDRESSES.includes(t) ? I0 : C0,
    getSwapAbi: () => A0
  };
  Ur = {
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
  ot = {
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
  on = {
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
      if (on.isRpcProviderError(t)) {
        const e = t.code === on.RPC_ERROR_CODE.USER_REJECTED_REQUEST, s = t.code === on.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        return e || s || on.isUserRejectedMessage(t.message);
      }
      return t instanceof Error ? on.isUserRejectedMessage(t.message) : false;
    }
  };
  class S0 extends Error {
    constructor(e, s) {
      super(s.message, {
        cause: e
      }), this.name = on.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = s.code;
    }
  }
  class Ep extends S0 {
    constructor(e) {
      super(e, {
        code: on.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
        message: "User rejected the request"
      }), this.name = on.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
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
  function nc(t) {
    if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${t}:connected_connector_id`;
  }
  re = {
    setItem(t, e) {
      Ui() && e !== void 0 && localStorage.setItem(t, e);
    },
    getItem(t) {
      if (Ui()) return localStorage.getItem(t) || void 0;
    },
    removeItem(t) {
      Ui() && localStorage.removeItem(t);
    },
    clear() {
      Ui() && localStorage.clear();
    }
  };
  function Ui() {
    return typeof window < "u" && typeof localStorage < "u";
  }
  function ca(t, e) {
    const s = (t == null ? void 0 : t["--apkt-accent"]) ?? (t == null ? void 0 : t["--w3m-accent"]);
    return e === "light" ? {
      "--w3m-accent": s || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    } : {
      "--w3m-accent": s || "hsla(230, 100%, 67%, 1)",
      "--w3m-background": "#202020"
    };
  }
  const _0 = Symbol(), uu = Object.getPrototypeOf, al = /* @__PURE__ */ new WeakMap(), x0 = (t) => t && (al.has(t) ? al.get(t) : uu(t) === Object.prototype || uu(t) === Array.prototype), T0 = (t) => x0(t) && t[_0] || null, hu = (t, e = true) => {
    al.set(t, e);
  }, la = {}, gd = (t) => typeof t == "object" && t !== null, O0 = (t) => gd(t) && !fo.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer) && !(t instanceof Promise), vp = (t, e) => {
    const s = cl.get(t);
    if ((s == null ? void 0 : s[0]) === e) return s[1];
    const n = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
    return hu(n, true), cl.set(t, [
      e,
      n
    ]), Reflect.ownKeys(t).forEach((r) => {
      if (Object.getOwnPropertyDescriptor(n, r)) return;
      const i = Reflect.get(t, r), { enumerable: o } = Reflect.getOwnPropertyDescriptor(t, r), a = {
        value: i,
        enumerable: o,
        configurable: true
      };
      if (fo.has(i)) hu(i, false);
      else if (zn.has(i)) {
        const [c, l] = zn.get(i);
        a.value = vp(c, l());
      }
      Object.defineProperty(n, r, a);
    }), Object.preventExtensions(n);
  }, k0 = (t, e, s, n) => ({
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
      if (c && (fu(l, o) || Qi.has(o) && fu(l, Qi.get(o)))) return true;
      s(i), gd(o) && (o = T0(o) || o);
      const d = !zn.has(o) && R0(o) ? De(o) : o;
      return e(i, d), Reflect.set(r, i, d, a), n([
        "set",
        [
          i
        ],
        o,
        l
      ]), true;
    }
  }), zn = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakSet(), cl = /* @__PURE__ */ new WeakMap(), Xo = [
    1
  ], Qi = /* @__PURE__ */ new WeakMap();
  let fu = Object.is, P0 = (t, e) => new Proxy(t, e), R0 = O0, $0 = vp, U0 = k0;
  De = function(t = {}) {
    if (!gd(t)) throw new Error("object required");
    const e = Qi.get(t);
    if (e) return e;
    let s = Xo[0];
    const n = /* @__PURE__ */ new Set(), r = (m, x = ++Xo[0]) => {
      s !== x && (i = s = x, n.forEach((T) => T(m, x)));
    };
    let i = s;
    const o = (m = Xo[0]) => (i !== m && (i = m, c.forEach(([x]) => {
      const T = x[1](m);
      T > s && (s = T);
    })), s), a = (m) => (x, T) => {
      const A = [
        ...x
      ];
      A[1] = [
        m,
        ...A[1]
      ], r(A, T);
    }, c = /* @__PURE__ */ new Map(), l = (m, x) => {
      const T = !fo.has(x) && zn.get(x);
      if (T) {
        if ((la ? "production" : void 0) !== "production" && c.has(m)) throw new Error("prop listener already exists");
        if (n.size) {
          const A = T[2](a(m));
          c.set(m, [
            T,
            A
          ]);
        } else c.set(m, [
          T
        ]);
      }
    }, d = (m) => {
      var x;
      const T = c.get(m);
      T && (c.delete(m), (x = T[1]) == null || x.call(T));
    }, u = (m) => (n.add(m), n.size === 1 && c.forEach(([T, A], N) => {
      if ((la ? "production" : void 0) !== "production" && A) throw new Error("remove already exists");
      const P = T[2](a(N));
      c.set(N, [
        T,
        P
      ]);
    }), () => {
      n.delete(m), n.size === 0 && c.forEach(([T, A], N) => {
        A && (A(), c.set(N, [
          T
        ]));
      });
    });
    let h = true;
    const f = U0(() => h, l, d, r), g = P0(t, f);
    Qi.set(t, g);
    const p = [
      t,
      o,
      u
    ];
    return zn.set(g, p), Reflect.ownKeys(t).forEach((m) => {
      const x = Object.getOwnPropertyDescriptor(t, m);
      "value" in x && x.writable && (g[m] = t[m]);
    }), h = false, g;
  };
  at = function(t, e, s) {
    const n = zn.get(t);
    (la ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
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
  function eo(t) {
    const e = zn.get(t);
    (la ? "production" : void 0) !== "production" && !e && console.warn("Please use proxy object");
    const [s, n] = e;
    return $0(s, n());
  }
  function to(t) {
    return fo.add(t), t;
  }
  function B0() {
    return {
      proxyStateMap: zn,
      refSet: fo,
      snapCache: cl,
      versionHolder: Xo,
      proxyCache: Qi
    };
  }
  ct = function(t, e, s, n) {
    let r = t[e];
    return at(t, () => {
      const i = t[e];
      Object.is(r, i) || s(r = i);
    });
  };
  const { proxyStateMap: D0, snapCache: L0 } = B0(), xo = (t) => D0.has(t);
  function M0(t) {
    const e = [];
    let s = 0;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = () => {
      const l = L0.get(a), d = l == null ? void 0 : l[1];
      if (d && !r.has(d)) {
        const u = new Map(n);
        r.set(d, u);
      }
    }, o = (l) => r.get(l) || n, a = {
      data: e,
      index: s,
      epoch: 0,
      get size() {
        return xo(this) || i(), o(this).size;
      },
      get(l) {
        const u = o(this).get(l);
        if (u === void 0) {
          this.epoch;
          return;
        }
        return this.data[u];
      },
      has(l) {
        const d = o(this);
        return this.epoch, d.has(l);
      },
      set(l, d) {
        if (!xo(this)) throw new Error("Cannot perform mutations on a snapshot");
        const u = n.get(l);
        return u === void 0 ? (n.set(l, this.index), this.data[this.index++] = d) : this.data[u] = d, this.epoch++, this;
      },
      delete(l) {
        if (!xo(this)) throw new Error("Cannot perform mutations on a snapshot");
        const d = n.get(l);
        return d === void 0 ? false : (delete this.data[d], n.delete(l), this.epoch++, true);
      },
      clear() {
        if (!xo(this)) throw new Error("Cannot perform mutations on a snapshot");
        this.data.length = 0, this.index = 0, this.epoch++, n.clear();
      },
      forEach(l) {
        this.epoch, o(this).forEach((u, h) => {
          l(this.data[u], h, this);
        });
      },
      *entries() {
        this.epoch;
        const l = o(this);
        for (const [d, u] of l) yield [
          d,
          this.data[u]
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
    }, c = De(a);
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
  var pu = {};
  let rc, Cp, F0, Qo, q0, ic;
  rc = (typeof cs < "u" && typeof pu < "u" ? pu.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
  Cp = [
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
  F0 = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
  me = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: rc,
    SECURE_SITE_DASHBOARD: `${rc}/dashboard`,
    SECURE_SITE_FAVICON: `${rc}/images/favicon.png`,
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
      Ur.ConnectorExplorerIds[F.CONNECTOR_ID.COINBASE],
      Ur.ConnectorExplorerIds[F.CONNECTOR_ID.COINBASE_SDK],
      Ur.ConnectorExplorerIds[F.CONNECTOR_ID.BASE_ACCOUNT],
      Ur.ConnectorExplorerIds[F.SOLFLARE_CONNECTOR_NAME],
      Ur.ConnectorExplorerIds[F.PHANTOM_CONNECTOR_NAME],
      Ur.ConnectorExplorerIds[F.BINANCE_CONNECTOR_NAME]
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
        const e = nc(t);
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
        const s = nc(t);
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
        const e = nc(t);
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
            const l = new Set(a.accounts.map((u) => u.address.toLowerCase())), d = o.accounts.filter((u) => !l.has(u.address.toLowerCase()));
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
      return t ? t - Date.now() <= me.TEN_SEC_MS : true;
    },
    isAllowedRetry(t, e = me.ONE_SEC_MS) {
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
      return Date.now() + me.FOUR_MINUTES_MS;
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
      const r = t.length === 0 ? me.ADAPTER_TYPES.UNIVERSAL : t.map((i) => i.adapterType).join(",");
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
  Qo = {
    STORAGE_KEY: "@appkit-wallet/",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
  };
  an = {
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
  q0 = {
    set(t, e) {
      ic.isClient && localStorage.setItem(`${Qo.STORAGE_KEY}${t}`, e);
    },
    get(t) {
      return ic.isClient ? localStorage.getItem(`${Qo.STORAGE_KEY}${t}`) : null;
    },
    delete(t, e) {
      ic.isClient && (e ? localStorage.removeItem(t) : localStorage.removeItem(`${Qo.STORAGE_KEY}${t}`));
    }
  };
  ic = {
    isClient: typeof window < "u"
  };
  async function bi(...t) {
    const e = await fetch(...t);
    if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, {
      cause: e
    });
    return e;
  }
  po = class {
    constructor({ baseUrl: e, clientId: s }) {
      this.baseUrl = e, this.clientId = s;
    }
    async get({ headers: e, signal: s, cache: n, ...r }) {
      const i = this.createUrl(r);
      return (await bi(i, {
        method: "GET",
        headers: e,
        signal: s,
        cache: n
      })).json();
    }
    async getBlob({ headers: e, signal: s, ...n }) {
      const r = this.createUrl(n);
      return (await bi(r, {
        method: "GET",
        headers: e,
        signal: s
      })).blob();
    }
    async post({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await bi(i, {
        method: "POST",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async put({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await bi(i, {
        method: "PUT",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async delete({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await bi(i, {
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
  let ll, oe, or, ze, j0, W0, Ap, vt, H0, V0, z0, K0, wn, G0;
  ll = {
    getFeatureValue(t, e) {
      const s = e == null ? void 0 : e[t];
      return s === void 0 ? me.DEFAULT_FEATURES[t] : s;
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
  oe = De({
    features: me.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: me.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: "all"
  });
  q = {
    state: oe,
    subscribeKey(t, e) {
      return ct(oe, t, e);
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
      oe.remoteFeatures = e, ((_a2 = oe.remoteFeatures) == null ? void 0 : _a2.socials) && (oe.remoteFeatures.socials = ll.filterSocialsByPlatform(oe.remoteFeatures.socials)), ((_b2 = oe.features) == null ? void 0 : _b2.pay) && (oe.remoteFeatures.email = false, oe.remoteFeatures.socials = false);
    },
    setFeatures(t) {
      var _a2;
      if (!t) return;
      oe.features || (oe.features = me.DEFAULT_FEATURES);
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
      if (t) for (const [e, s] of Object.entries(me.SIWX_DEFAULTS)) t[e] ?? (t[e] = s);
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
      return eo(oe);
    }
  };
  or = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: false,
    autoClose: true
  });
  ze = De({
    ...or
  });
  j0 = {
    state: ze,
    subscribeKey(t, e) {
      return ct(ze, t, e);
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
      ze.message = or.message, ze.variant = or.variant, ze.svg = or.svg, ze.open = or.open, ze.autoClose = or.autoClose;
    },
    _showMessage({ message: t, svg: e, variant: s = "success", autoClose: n = or.autoClose }) {
      ze.open ? (ze.open = false, setTimeout(() => {
        ze.message = t, ze.variant = s, ze.svg = e, ze.open = true, ze.autoClose = n;
      }, 150)) : (ze.message = t, ze.variant = s, ze.svg = e, ze.open = true, ze.autoClose = n);
    }
  };
  Bs = j0;
  W0 = {
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
  Ap = ee.getBlockchainApiUrl();
  vt = De({
    clientId: null,
    api: new po({
      baseUrl: Ap,
      clientId: null
    }),
    supportedChains: {
      http: [],
      ws: []
    }
  });
  le = {
    state: vt,
    async get(t) {
      const { st: e, sv: s } = le.getSdkProperties(), n = q.state.projectId, r = {
        ...t.params || {},
        st: e,
        sv: s,
        projectId: n
      };
      return vt.api.get({
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
        vt.supportedChains.http.length || await le.getSupportedNetworks();
      } catch {
        return false;
      }
      return vt.supportedChains.http.includes(t);
    },
    async getSupportedNetworks() {
      try {
        const t = await le.get({
          path: "v1/supported-chains"
        });
        return vt.supportedChains = t, t;
      } catch {
        return vt.supportedChains;
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
      return vt.api.post({
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
      const r = await vt.api.post({
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
      return vt.api.post({
        path: "/v1/convert/build-transaction",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          amount: t,
          eip155: {
            slippage: me.CONVERT_SLIPPAGE_TOLERANCE
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
      if (!await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return Bs.showError("Token Balance Unavailable"), {
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
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? vt.api.post({
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
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? (await vt.api.post({
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
        return W0;
      }
    },
    async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: s, network: n }) {
      var _a2;
      try {
        return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? await vt.api.post({
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
      return await le.isNetworkSupported((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? vt.api.post({
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
      vt.clientId = t, vt.api = new po({
        baseUrl: Ap,
        clientId: t
      });
    }
  };
  H0 = Object.freeze({
    enabled: true,
    events: []
  });
  V0 = new po({
    baseUrl: ee.getAnalyticsUrl(),
    clientId: null
  });
  z0 = 5;
  K0 = 60 * 1e3;
  wn = De({
    ...H0
  });
  G0 = {
    state: wn,
    subscribeKey(t, e) {
      return ct(wn, t, e);
    },
    async sendError(t, e) {
      if (!wn.enabled) return;
      const s = Date.now();
      if (wn.events.filter((i) => {
        const o = new Date(i.properties.timestamp || "").getTime();
        return s - o < K0;
      }).length >= z0) return;
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
      wn.events.push(r);
      try {
        if (typeof window > "u") return;
        const { projectId: i, sdkType: o, sdkVersion: a } = q.state;
        await V0.post({
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
      wn.enabled = true;
    },
    disable() {
      wn.enabled = false;
    },
    clearEvents() {
      wn.events = [];
    }
  };
  Ir = class extends Error {
    constructor(e, s, n) {
      super(e), this.originalName = "AppKitError", this.name = "AppKitError", this.category = s, this.originalError = n, n && n instanceof Error && (this.originalName = n.name), Object.setPrototypeOf(this, Ir.prototype);
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
      r || (Error.captureStackTrace ? Error.captureStackTrace(this, Ir) : this.stack || (this.stack = `${this.name}: ${this.message}`));
    }
  };
  function gu(t, e) {
    let s = "";
    try {
      t instanceof Error ? s = t.message : typeof t == "string" ? s = t : typeof t == "object" && t !== null ? Object.keys(t).length === 0 ? s = "Unknown error" : s = (t == null ? void 0 : t.message) || JSON.stringify(t) : s = String(t);
    } catch (r) {
      s = "Unknown error", console.error("Error parsing error message", r);
    }
    const n = t instanceof Ir ? t : new Ir(s, e, t);
    throw G0.sendError(n, n.category), n;
  }
  ds = function(t, e = "INTERNAL_SDK_ERROR") {
    const s = {};
    return Object.keys(t).forEach((n) => {
      const r = t[n];
      if (typeof r == "function") {
        let i = r;
        r.constructor.name === "AsyncFunction" ? i = async (...o) => {
          try {
            return await r(...o);
          } catch (a) {
            return gu(a, e);
          }
        } : i = (...o) => {
          try {
            return r(...o);
          } catch (a) {
            return gu(a, e);
          }
        }, s[n] = i;
      } else s[n] = r;
    }), s;
  };
  let Mt, Y0, mu, Br, ns, Z0, J0, X0, Q0, ey, wu, qe, ty, Ct, sy, yu, ny, he, ry, Te, iy, Ws, dl, Ip, oy, ve, ay, cy, Ei;
  Mt = De({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
  });
  Y0 = {
    state: Mt,
    subscribeNetworkImages(t) {
      return at(Mt.networkImages, () => t(Mt.networkImages));
    },
    subscribeKey(t, e) {
      return ct(Mt, t, e);
    },
    subscribe(t) {
      return at(Mt, () => t(Mt));
    },
    setWalletImage(t, e) {
      Mt.walletImages[t] = e;
    },
    setNetworkImage(t, e) {
      Mt.networkImages[t] = e;
    },
    setChainImage(t, e) {
      Mt.chainImages[t] = e;
    },
    setConnectorImage(t, e) {
      Mt.connectorImages = {
        ...Mt.connectorImages,
        [t]: e
      };
    },
    setTokenImage(t, e) {
      Mt.tokenImages[t] = e;
    },
    setCurrencyImage(t, e) {
      Mt.currencyImages[t] = e;
    }
  };
  os = ds(Y0);
  mu = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: "",
    sui: "",
    stacks: "",
    ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
  };
  Br = De({
    networkImagePromises: {},
    tokenImagePromises: {}
  });
  da = {
    async fetchWalletImage(t) {
      if (t) return await ne._fetchWalletImage(t), this.getWalletImageById(t);
    },
    async fetchNetworkImage(t) {
      if (!t) return;
      const e = this.getNetworkImageById(t);
      return e || (Br.networkImagePromises[t] || (Br.networkImagePromises[t] = ne._fetchNetworkImage(t)), await Br.networkImagePromises[t], this.getNetworkImageById(t));
    },
    async fetchTokenImage(t) {
      if (t) return Br.tokenImagePromises[t] || (Br.tokenImagePromises[t] = ne._fetchTokenImage(t)), await Br.tokenImagePromises[t], this.getTokenImage(t);
    },
    getWalletImageById(t) {
      if (t) return os.state.walletImages[t];
    },
    getWalletImage(t) {
      if (t == null ? void 0 : t.image_url) return t == null ? void 0 : t.image_url;
      if (t == null ? void 0 : t.image_id) return os.state.walletImages[t.image_id];
    },
    getNetworkImage(t) {
      var _a2, _b2, _c2;
      if ((_a2 = t == null ? void 0 : t.assets) == null ? void 0 : _a2.imageUrl) return (_b2 = t == null ? void 0 : t.assets) == null ? void 0 : _b2.imageUrl;
      if ((_c2 = t == null ? void 0 : t.assets) == null ? void 0 : _c2.imageId) return os.state.networkImages[t.assets.imageId];
    },
    getNetworkImageById(t) {
      if (t) return os.state.networkImages[t];
    },
    getConnectorImage(t) {
      var _a2;
      if (t == null ? void 0 : t.imageUrl) return t.imageUrl;
      if ((_a2 = t == null ? void 0 : t.info) == null ? void 0 : _a2.icon) return t.info.icon;
      if (t == null ? void 0 : t.imageId) return os.state.connectorImages[t.imageId];
    },
    getChainImage(t) {
      return os.state.networkImages[mu[t]];
    },
    getTokenImage(t) {
      if (t) return os.state.tokenImages[t];
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
      return this.getAssetImageUrl(mu[t]);
    },
    async getImageByToken(t, e) {
      if (t === "native") {
        const n = F.NATIVE_IMAGE_IDS_BY_NAMESPACE[e] ?? null;
        return n ? da.fetchNetworkImage(n) : void 0;
      }
      const [, s] = Object.entries(F.TOKEN_SYMBOLS_BY_ADDRESS).find(([n]) => n.toLowerCase() === t.toLowerCase()) ?? [];
      if (s) return da.fetchTokenImage(s);
    }
  };
  ns = {
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
  Z0 = {
    handleMobileDeeplinkRedirect(t, e) {
      const s = window.location.href, n = encodeURIComponent(s);
      if (t === ns.PHANTOM.id && !("phantom" in window)) {
        const r = s.startsWith("https") ? "https" : "http", i = s.split("/")[2], o = encodeURIComponent(`${r}://${i}`);
        window.location.href = `${ns.PHANTOM.url}/ul/browse/${n}?ref=${o}`;
      }
      if (t === ns.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${ns.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`), e === F.CHAIN.SOLANA && t === ns.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${ns.COINBASE.url}/dapp?cb_url=${n}`), e === F.CHAIN.BITCOIN && t === ns.BINANCE.id && !("binancew3w" in window)) {
        const r = b.state.activeCaipNetwork, i = window.btoa("/pages/browser/index"), o = window.btoa(`url=${n}&defaultChainId=${(r == null ? void 0 : r.id) ?? 1}`), a = new URL(ns.BINANCE.deeplink);
        a.searchParams.set("appId", ns.BINANCE.appId), a.searchParams.set("startPagePath", i), a.searchParams.set("startPageQuery", o);
        const c = new URL(ns.BINANCE.url);
        c.searchParams.set("_dp", window.btoa(a.toString())), window.location.href = c.toString();
      }
    }
  };
  J0 = ee.getAnalyticsUrl();
  X0 = new po({
    baseUrl: J0,
    clientId: null
  });
  Q0 = [
    "MODAL_CREATED"
  ];
  ey = 45;
  wu = 1e3 * 10;
  qe = De({
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
  pe = {
    state: qe,
    subscribe(t) {
      return at(qe, () => t(qe));
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
      const t = JSON.stringify(qe.pendingEvents).length / 1024 > ey, e = qe.lastFlush + wu < Date.now();
      return t || e;
    },
    _setPendingEvent(t) {
      var _a2, _b2;
      try {
        let e = (_a2 = b.getAccountData()) == null ? void 0 : _a2.address;
        if ("address" in t.data && t.data.address && (e = t.data.address), Q0.includes(t.data.event) || typeof window > "u") return;
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
        }), qe.reportedErrors.FORBIDDEN = false, pe.shouldFlushEvents() && pe._submitPendingEvents();
      } catch (e) {
        console.warn("_setPendingEvent", e);
      }
    },
    sendEvent(t) {
      var _a2;
      qe.timestamp = Date.now(), qe.data = t;
      const e = [
        "INITIALIZE",
        "CONNECT_SUCCESS",
        "SOCIAL_LOGIN_SUCCESS"
      ];
      (((_a2 = q.state.features) == null ? void 0 : _a2.analytics) || e.includes(t.event)) && pe._setPendingEvent(qe), this.subscribeToFlushTriggers();
    },
    sendWalletImpressionEvent(t) {
      qe.walletImpressions.push(t);
    },
    _transformPendingEventsForBatch(t) {
      try {
        return t.filter((e) => e.props.event !== "WALLET_IMPRESSION_V2");
      } catch {
        return t;
      }
    },
    _submitPendingEvents() {
      if (qe.lastFlush = Date.now(), !(qe.pendingEvents.length === 0 && qe.walletImpressions.length === 0)) try {
        const t = pe._transformPendingEventsForBatch(qe.pendingEvents);
        qe.walletImpressions.length && t.push({
          eventId: ee.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [
              ...qe.walletImpressions
            ]
          }
        }), X0.sendBeacon({
          path: "/batch",
          params: pe.getSdkProperties(),
          body: t
        }), qe.reportedErrors.FORBIDDEN = false, qe.pendingEvents = [], qe.walletImpressions = [];
      } catch {
        qe.reportedErrors.FORBIDDEN = true;
      }
    },
    subscribeToFlushTriggers() {
      var _a2, _b2, _c2;
      qe.subscribedToVisibilityChange || typeof document > "u" || (qe.subscribedToVisibilityChange = true, (_a2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a2.call(document, "visibilitychange", () => {
        document.visibilityState === "hidden" && pe._submitPendingEvents();
      }), (_b2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b2.call(document, "freeze", () => {
        pe._submitPendingEvents();
      }), (_c2 = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c2.call(window, "pagehide", () => {
        pe._submitPendingEvents();
      }), setInterval(() => {
        pe._submitPendingEvents();
      }, wu));
    }
  };
  ty = ee.getApiUrl();
  Ct = new po({
    baseUrl: ty,
    clientId: null
  });
  sy = 40;
  yu = 4;
  ny = 20;
  he = De({
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
    state: he,
    subscribeKey(t, e) {
      return ct(he, t, e);
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
      const e = `${Ct.baseUrl}/getWalletImage/${t}`, s = await Ct.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      os.setWalletImage(t, URL.createObjectURL(s));
    },
    async _fetchNetworkImage(t) {
      const e = `${Ct.baseUrl}/public/getAssetImage/${t}`, s = await Ct.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      os.setNetworkImage(t, URL.createObjectURL(s));
    },
    async _fetchConnectorImage(t) {
      const e = `${Ct.baseUrl}/public/getAssetImage/${t}`, s = await Ct.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      os.setConnectorImage(t, URL.createObjectURL(s));
    },
    async _fetchCurrencyImage(t) {
      const e = `${Ct.baseUrl}/public/getCurrencyImage/${t}`, s = await Ct.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      os.setCurrencyImage(t, URL.createObjectURL(s));
    },
    async _fetchTokenImage(t) {
      const e = `${Ct.baseUrl}/public/getTokenImage/${t}`, s = await Ct.getBlob({
        path: e,
        params: ne._getSdkProperties()
      });
      os.setTokenImage(t, URL.createObjectURL(s));
    },
    _filterWalletsByPlatform(t) {
      const e = t.length, s = ee.isMobile() ? t == null ? void 0 : t.filter((r) => r.mobile_link || r.webapp_link ? true : Object.values(ns).map((o) => o.id).includes(r.id)) : t, n = e - s.length;
      return {
        filteredWallets: s,
        mobileFilteredOutWalletsLength: n
      };
    },
    async fetchProjectConfig() {
      return (await Ct.get({
        path: "/appkit/v1/config",
        params: ne._getSdkProperties()
      })).features;
    },
    async fetchUsage() {
      try {
        const t = await Ct.get({
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
        const { allowedOrigins: t } = await Ct.get({
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
      const e = (_a2 = b.getAllRequestedCaipNetworks()) == null ? void 0 : _a2.map(({ assets: s }) => s == null ? void 0 : s.imageId).filter(Boolean).filter((s) => !da.getNetworkImageById(s));
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
      ne._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(ns).map((o) => o.id));
      const n = await Ct.get({
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
      he.explorerWallets = s, V.extendConnectorsWithExplorerWallets(s);
      const n = b.getRequestedCaipNetworkIds().join(",");
      he.explorerFilteredWallets = s.filter((r) => {
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
          entries: (t == null ? void 0 : t.length) ?? yu,
          include: t
        }, { data: s } = await ne.fetchWallets(e), n = [
          ...s
        ].sort((i, o) => t.indexOf(i.id) - t.indexOf(o.id)), r = n.map((i) => i.image_id).filter(Boolean);
        await Promise.allSettled(r.map((i) => ne._fetchWalletImage(i))), he.featured = n, he.allFeatured = n;
      }
    },
    async fetchRecommendedWallets() {
      try {
        he.isFetchingRecommendedWallets = true;
        const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: s } = q.state, n = [
          ...e ?? [],
          ...s ?? []
        ].filter(Boolean), r = b.getRequestedCaipNetworkIds().join(","), i = {
          page: 1,
          entries: yu,
          include: t,
          exclude: n,
          chains: r
        }, { data: o, count: a } = await ne.fetchWallets(i), c = H.getRecentWallets(), l = o.map((u) => u.image_id).filter(Boolean), d = c.map((u) => u.image_id).filter(Boolean);
        await Promise.allSettled([
          ...l,
          ...d
        ].map((u) => ne._fetchWalletImage(u))), he.recommended = o, he.allRecommended = o, he.count = a ?? 0;
      } catch {
      } finally {
        he.isFetchingRecommendedWallets = false;
      }
    },
    async fetchWalletsByPage({ page: t }) {
      const { includeWalletIds: e, excludeWalletIds: s, featuredWalletIds: n } = q.state, r = b.getRequestedCaipNetworkIds().join(","), i = [
        ...he.recommended.map(({ id: u }) => u),
        ...s ?? [],
        ...n ?? []
      ].filter(Boolean), o = {
        page: t,
        entries: sy,
        include: e,
        exclude: i,
        chains: r
      }, { data: a, count: c, mobileFilteredOutWalletsLength: l } = await ne.fetchWallets(o);
      he.mobileFilteredOutWalletsLength = l + (he.mobileFilteredOutWalletsLength ?? 0);
      const d = a.slice(0, ny).map((u) => u.image_id).filter(Boolean);
      await Promise.allSettled(d.map((u) => ne._fetchWalletImage(u))), he.wallets = ee.uniqueBy([
        ...he.wallets,
        ...ne._filterOutExtensions(a)
      ], "id").filter((u) => {
        var _a2;
        return (_a2 = u.chains) == null ? void 0 : _a2.some((h) => r.includes(h));
      }), he.count = c > he.count ? c : he.count, he.page = t;
    },
    async initializeExcludedWallets({ ids: t }) {
      const e = {
        page: 1,
        entries: t.length,
        include: t
      }, { data: s } = await ne.fetchWallets(e);
      s && s.forEach((n) => {
        he.excludedWallets.push({
          rdns: n.rdns,
          name: n.name
        });
      });
    },
    async searchWallet({ search: t, badge: e }) {
      const { includeWalletIds: s, excludeWalletIds: n } = q.state, r = b.getRequestedCaipNetworkIds().join(",");
      he.search = [];
      const i = {
        page: 1,
        entries: 100,
        search: t == null ? void 0 : t.trim(),
        badge_type: e,
        include: s,
        exclude: n,
        chains: r
      }, { data: o } = await ne.fetchWallets(i);
      pe.sendEvent({
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
      ]), he.search = ne._filterOutExtensions(o);
    },
    initPromise(t, e) {
      const s = he.promises[t];
      return s || (he.promises[t] = e());
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
        const { isAnalyticsEnabled: t } = await Ct.get({
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
        he.featured = he.allFeatured, he.recommended = he.allRecommended;
        return;
      }
      const e = b.getRequestedCaipNetworkIds().join(",");
      he.featured = he.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), he.recommended = he.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), he.filteredWallets = he.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    },
    clearFilterByNamespaces() {
      he.filteredWallets = [];
    },
    setFilterByNamespace(t) {
      if (!t) {
        he.featured = he.allFeatured, he.recommended = he.allRecommended;
        return;
      }
      const e = b.getRequestedCaipNetworkIds().join(",");
      he.featured = he.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), he.recommended = he.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), he.filteredWallets = he.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    }
  };
  jn = {
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
      const { injected: r, announced: i } = It.getConnectorsByType(n, ne.state.recommended, ne.state.featured), o = r.filter(It.showConnector), a = i.filter(It.showConnector);
      return o.length || a.length ? [
        "wallet",
        "email",
        "social"
      ] : me.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(t) {
      const e = !!t.rdns && ne.state.excludedWallets.some((n) => n.rdns === t.rdns), s = !!t.name && ne.state.excludedWallets.some((n) => pp.isLowerCaseMatch(n.name, t.name));
      return e || s;
    },
    markWalletsWithDisplayIndex(t) {
      return t.map((e, s) => ({
        ...e,
        display_index: s
      }));
    },
    filterWalletsByWcSupport(t) {
      return G.state.wcBasic ? t.filter((e) => e.supports_wc) : ee.isMobile() ? t.filter((e) => e.supports_wc || me.MANDATORY_WALLET_IDS_ON_MOBILE.includes(e.id)) : t;
    },
    getWalletConnectWallets(t) {
      var _a2;
      const e = [
        ...ne.state.featured,
        ...ne.state.recommended
      ];
      ((_a2 = ne.state.filteredWallets) == null ? void 0 : _a2.length) > 0 ? e.push(...ne.state.filteredWallets) : e.push(...t);
      const s = ee.uniqueBy(e, "id"), n = jn.markWalletsAsInstalled(s), r = jn.filterWalletsByWcSupport(n);
      return jn.markWalletsWithDisplayIndex(r);
    }
  };
  It = {
    getConnectorsByType(t, e, s) {
      const { customWallets: n } = q.state, r = H.getRecentWallets(), i = jn.filterOutDuplicateWallets(e), o = jn.filterOutDuplicateWallets(s), a = t.filter((u) => u.type === "MULTI_CHAIN"), c = t.filter((u) => u.type === "ANNOUNCED"), l = t.filter((u) => u.type === "INJECTED"), d = t.filter((u) => u.type === "EXTERNAL");
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
      const e = (_a2 = t.info) == null ? void 0 : _a2.rdns, s = !!e && ne.state.excludedWallets.some((r) => !!r.rdns && r.rdns === e), n = !!t.name && ne.state.excludedWallets.some((r) => pp.isLowerCaseMatch(r.name, t.name));
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
      ].filter((g) => g.isEnabled), u = new Set(d.map((g) => g.type)), h = c.filter((g) => u.has(g)).map((g) => ({
        type: g,
        isEnabled: true
      })), f = d.filter(({ type: g }) => !h.some(({ type: m }) => m === g));
      return Array.from(new Set([
        ...h,
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
      ].sort((e, s) => It.getPriority(e) - It.getPriority(s));
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
      return H.getRecentWallets().filter((s) => !jn.isExcluded(s)).filter((s) => !this.hasWalletConnector(s)).filter((s) => this.isWalletCompatibleWithCurrentChain(s));
    },
    getCappedRecommendedWallets(t) {
      const { connectors: e } = V.state, { customWallets: s, featuredWalletIds: n } = q.state, r = e.find((T) => T.id === "walletConnect"), i = e.filter((T) => T.type === "INJECTED" || T.type === "ANNOUNCED" || T.type === "MULTI_CHAIN");
      if (!r && !i.length && !(s == null ? void 0 : s.length)) return [];
      const o = ll.isEmailEnabled(), a = ll.isSocialsEnabled(), c = i.filter((T) => T.name !== "Browser Wallet" && T.name !== "WalletConnect"), l = (n == null ? void 0 : n.length) || 0, d = (s == null ? void 0 : s.length) || 0, u = c.length || 0, h = o ? 1 : 0, f = a ? 1 : 0, g = l + d + u + h + f, m = Math.max(0, 4 - g);
      return m <= 0 ? [] : jn.filterOutDuplicateWallets(t).slice(0, m);
    },
    processConnectorsByType(t, e = true) {
      const s = It.sortConnectorsByExplorerWallet([
        ...t
      ]);
      return e ? s.filter(It.showConnector) : s;
    },
    connectorList() {
      const t = It.getConnectorsByType(V.state.connectors, ne.state.recommended, ne.state.featured), e = this.processConnectorsByType(t.announced.filter((f) => f.id !== "walletConnect")), s = this.processConnectorsByType(t.injected), n = this.processConnectorsByType(t.multiChain.filter((f) => f.name !== "WalletConnect"), false), r = t.custom, i = t.recent, o = this.processConnectorsByType(t.external.filter((f) => f.id !== F.CONNECTOR_ID.COINBASE_SDK && f.id !== F.CONNECTOR_ID.BASE_ACCOUNT)), a = t.recommended, c = t.featured, l = It.getConnectorTypeOrder({
        custom: r,
        recent: i,
        announced: e,
        injected: s,
        multiChain: n,
        recommended: a,
        featured: c,
        external: o
      }), d = V.state.connectors.find((f) => f.id === "walletConnect"), u = ee.isMobile(), h = [];
      for (const f of l) switch (f) {
        case "walletConnect": {
          !u && d && h.push({
            kind: "connector",
            subtype: "walletConnect",
            connector: d
          });
          break;
        }
        case "recent": {
          It.getFilteredRecentWallets().forEach((p) => h.push({
            kind: "wallet",
            subtype: "recent",
            wallet: p
          }));
          break;
        }
        case "injected": {
          n.forEach((g) => h.push({
            kind: "connector",
            subtype: "multiChain",
            connector: g
          })), e.forEach((g) => h.push({
            kind: "connector",
            subtype: "announced",
            connector: g
          })), s.forEach((g) => h.push({
            kind: "connector",
            subtype: "injected",
            connector: g
          }));
          break;
        }
        case "featured": {
          c.forEach((g) => h.push({
            kind: "wallet",
            subtype: "featured",
            wallet: g
          }));
          break;
        }
        case "custom": {
          It.getFilteredCustomWallets(r ?? []).forEach((p) => h.push({
            kind: "wallet",
            subtype: "custom",
            wallet: p
          }));
          break;
        }
        case "external": {
          o.forEach((g) => h.push({
            kind: "connector",
            subtype: "external",
            connector: g
          }));
          break;
        }
        case "recommended": {
          It.getCappedRecommendedWallets(a).forEach((p) => h.push({
            kind: "wallet",
            subtype: "recommended",
            wallet: p
          }));
          break;
        }
        default:
          console.warn(`Unknown connector type: ${f}`);
      }
      return h;
    },
    hasInjectedConnectors() {
      return V.state.connectors.filter((t) => (t.type === "INJECTED" || t.type === "ANNOUNCED" || t.type === "MULTI_CHAIN") && t.name !== "Browser Wallet" && t.name !== "WalletConnect").length;
    }
  };
  ry = [
    "ConnectingExternal",
    "ConnectingMultiChain",
    "ConnectingSocial",
    "ConnectingFarcaster"
  ];
  Te = De({
    view: "Connect",
    history: [
      "Connect"
    ],
    transactionStack: []
  });
  iy = {
    state: Te,
    subscribeKey(t, e) {
      return ct(Te, t, e);
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
      ne.state.plan.hasExceededUsageLimit && ry.includes(t) && (s = "UsageExceeded", n = void 0), s !== Te.view && (Te.view = s, Te.history.push(s), Te.data = n);
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
      } else we.close();
      ((_a2 = Te.data) == null ? void 0 : _a2.wallet) && (Te.data.wallet = void 0), ((_b2 = Te.data) == null ? void 0 : _b2.redirectView) && (Te.data.redirectView = void 0), setTimeout(() => {
        var _a3, _b3, _c2;
        if (s) {
          b.setAccountProp("farcasterUrl", void 0, b.state.activeChain);
          const n = V.getAuthConnector();
          (_a3 = n == null ? void 0 : n.provider) == null ? void 0 : _a3.reload();
          const r = eo(q.state);
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
      ae.state.history.length > 1 ? ae.goBack() : we.close();
    }
  };
  ae = ds(iy);
  Ws = De({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
  });
  dl = {
    state: Ws,
    subscribe(t) {
      return at(Ws, () => t(Ws));
    },
    setThemeMode(t) {
      Ws.themeMode = t;
      try {
        const e = V.getAuthConnector();
        if (e) {
          const s = dl.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeMode: t,
            themeVariables: s,
            w3mThemeVariables: ca(s, t)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(t) {
      Ws.themeVariables = {
        ...Ws.themeVariables,
        ...t
      };
      try {
        const e = V.getAuthConnector();
        if (e) {
          const s = dl.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeVariables: s,
            w3mThemeVariables: ca(Ws.themeVariables, Ws.themeMode)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return eo(Ws);
    }
  };
  Ht = ds(dl);
  Ip = Object.fromEntries(mp.map((t) => [
    t,
    void 0
  ]));
  oy = Object.fromEntries(mp.map((t) => [
    t,
    true
  ]));
  ve = De({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: Ip,
    filterByNamespaceMap: oy
  });
  ay = {
    state: ve,
    subscribe(t) {
      return at(ve, () => {
        t(ve);
      });
    },
    subscribeKey(t, e) {
      return ct(ve, t, e);
    },
    initialize(t) {
      t.forEach((e) => {
        const s = H.getConnectedConnectorId(e);
        s && V.setConnectorId(s, e);
      });
    },
    setActiveConnector(t) {
      t && (ve.activeConnector = to(t));
    },
    setConnectors(t) {
      t.filter((r) => !ve.allConnectors.some((i) => i.id === r.id && V.getConnectorName(i.name) === V.getConnectorName(r.name) && i.chain === r.chain)).forEach((r) => {
        r.type !== "MULTI_CHAIN" && ve.allConnectors.push(to(r));
      });
      const s = V.getEnabledNamespaces(), n = V.getEnabledConnectors(s);
      ve.connectors = V.mergeMultiChainConnectors(n);
    },
    filterByNamespaces(t) {
      Object.keys(ve.filterByNamespaceMap).forEach((e) => {
        ve.filterByNamespaceMap[e] = false;
      }), t.forEach((e) => {
        ve.filterByNamespaceMap[e] = true;
      }), V.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(t, e) {
      ve.filterByNamespaceMap[t] = e, V.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      const t = V.getEnabledNamespaces(), e = V.getEnabledConnectors(t), s = V.areAllNamespacesEnabled();
      ve.connectors = V.mergeMultiChainConnectors(e), s ? ne.clearFilterByNamespaces() : ne.filterByNamespaces(t);
    },
    getEnabledNamespaces() {
      return Object.entries(ve.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t);
    },
    getEnabledConnectors(t) {
      return ve.allConnectors.filter((e) => t.includes(e.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values(ve.filterByNamespaceMap).every((t) => t);
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
        const e = t, s = eo(q.state), n = Ht.getSnapshot().themeMode, r = Ht.getSnapshot().themeVariables;
        (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
          metadata: s.metadata,
          sdkVersion: s.sdkVersion,
          projectId: s.projectId,
          sdkType: s.sdkType
        }), (_c2 = e == null ? void 0 : e.provider) == null ? void 0 : _c2.syncTheme({
          themeMode: n,
          themeVariables: r,
          w3mThemeVariables: ca(r, n)
        }), V.setConnectors([
          t
        ]);
      } else V.setConnectors([
        t
      ]);
    },
    getAuthConnector(t) {
      var _a2;
      const e = t || b.state.activeChain, s = ve.connectors.find((n) => n.id === F.CONNECTOR_ID.AUTH);
      if (s) return ((_a2 = s == null ? void 0 : s.connectors) == null ? void 0 : _a2.length) ? s.connectors.find((r) => r.chain === e) : s;
    },
    getAnnouncedConnectorRdns() {
      return ve.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
        var _a2;
        return (_a2 = t.info) == null ? void 0 : _a2.rdns;
      });
    },
    getConnectorById(t) {
      return It.sortConnectorsByPriority(ve.allConnectors).find((s) => s.id === t);
    },
    getConnector({ id: t, namespace: e }) {
      const s = e || b.state.activeChain, n = ve.allConnectors.filter((o) => o.chain === s);
      return It.sortConnectorsByPriority(n).find((o) => o.id === t || o.explorerId === t);
    },
    syncIfAuthConnector(t) {
      var _a2, _b2;
      if (t.id !== "AUTH") return;
      const e = t, s = eo(q.state), n = Ht.getSnapshot().themeMode, r = Ht.getSnapshot().themeVariables;
      (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
        metadata: s.metadata,
        sdkVersion: s.sdkVersion,
        sdkType: s.sdkType,
        projectId: s.projectId
      }), e.provider.syncTheme({
        themeMode: n,
        themeVariables: r,
        w3mThemeVariables: ca(r, n)
      });
    },
    getConnectorsByNamespace(t) {
      const e = ve.allConnectors.filter((s) => s.chain === t);
      return V.mergeMultiChainConnectors(e);
    },
    canSwitchToSmartAccount(t) {
      return b.checkIfSmartAccountEnabled() && as(t) === an.ACCOUNT_TYPES.EOA;
    },
    selectWalletConnector(t) {
      var _a2;
      const e = (_a2 = ae.state.data) == null ? void 0 : _a2.redirectView, s = b.state.activeChain, n = s ? V.getConnector({
        id: t.id,
        namespace: s
      }) : void 0;
      Z0.handleMobileDeeplinkRedirect((n == null ? void 0 : n.explorerId) || t.id, b.state.activeChain), n ? ae.push("ConnectingExternal", {
        connector: n,
        wallet: t,
        redirectView: e
      }) : ae.push("ConnectingWalletConnect", {
        wallet: t,
        redirectView: e
      });
    },
    getConnectors(t) {
      return t ? V.getConnectorsByNamespace(t) : V.mergeMultiChainConnectors(ve.allConnectors);
    },
    setFilterByNamespace(t) {
      ve.filterByNamespace = t, ve.connectors = V.getConnectors(t), ne.setFilterByNamespace(t);
    },
    setConnectorId(t, e) {
      t && (ve.activeConnectorIds = {
        ...ve.activeConnectorIds,
        [e]: t
      }, H.setConnectedConnectorId(e, t));
    },
    removeConnectorId(t) {
      ve.activeConnectorIds = {
        ...ve.activeConnectorIds,
        [t]: void 0
      }, H.deleteConnectedConnectorId(t);
    },
    getConnectorId(t) {
      if (t) return ve.activeConnectorIds[t];
    },
    isConnected(t) {
      return t ? !!ve.activeConnectorIds[t] : Object.values(ve.activeConnectorIds).some((e) => !!e);
    },
    resetConnectorIds() {
      ve.activeConnectorIds = {
        ...Ip
      };
    },
    extendConnectorsWithExplorerWallets(t) {
      ve.allConnectors.forEach((n) => {
        const r = t.find((i) => {
          var _a2;
          return i.id === n.id || i.rdns && i.rdns === ((_a2 = n.info) == null ? void 0 : _a2.rdns);
        });
        r && (n.explorerWallet = r);
      });
      const e = V.getEnabledNamespaces(), s = V.getEnabledConnectors(e);
      ve.connectors = V.mergeMultiChainConnectors(s);
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
          }, e), i = we.subscribeKey("open", (o) => {
            o || (n(new Error("Modal closed")), i());
          });
        } else {
          const r = b.subscribeKey("activeCaipAddress", (o) => {
            o && (s({
              caipAddress: o
            }), r());
          }), i = we.subscribeKey("open", (o) => {
            o || (n(new Error("Modal closed")), i());
          });
        }
      });
    }
  };
  V = ds(ay);
  cy = 1e3;
  Ei = {
    checkNamespaceConnectorId(t, e) {
      return V.getConnectorId(t) === e;
    },
    isSocialProvider(t) {
      return me.DEFAULT_REMOTE_FEATURES.socials.includes(t);
    },
    connectWalletConnect({ walletConnect: t, connector: e, closeModalOnConnect: s = true, redirectViewOnModalClose: n = "Connect", onOpen: r, onConnect: i }) {
      return new Promise((o, a) => {
        if (t && V.setActiveConnector(e), r == null ? void 0 : r(ee.isMobile() && t), n) {
          const l = we.subscribeKey("open", (d) => {
            d || (ae.state.view !== n && ae.replace(n), l(), a(new Error("Modal closed")));
          });
        }
        const c = b.subscribeKey("activeCaipAddress", (l) => {
          l && (i == null ? void 0 : i(), s && we.close(), c(), o(ot.parseCaipAddress(l)));
        });
      });
    },
    connectExternal(t) {
      return new Promise((e, s) => {
        const n = b.subscribeKey("activeCaipAddress", (r) => {
          r && (we.close(), n(), e(ot.parseCaipAddress(r)));
        });
        G.connectExternal(t, t.chain).catch(() => {
          n(), s(new Error("Connection rejected"));
        });
      });
    },
    connectSocial({ social: t, namespace: e, closeModalOnConnect: s = true, onOpenFarcaster: n, onConnect: r }) {
      let i, o = false, a = null;
      const c = e || b.state.activeChain, l = b.subscribeKey("activeCaipAddress", (d) => {
        d && (s && we.close(), l());
      });
      return new Promise((d, u) => {
        async function h(g) {
          var _a2;
          if ((_a2 = g.data) == null ? void 0 : _a2.resultUri) if (g.origin === F.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", h, false);
            try {
              const p = V.getAuthConnector(c);
              if (p && !o) {
                i && i.close(), o = true;
                const m = g.data.resultUri;
                pe.sendEvent({
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
                const x = b.state.activeCaipAddress;
                if (!x) {
                  u(new Error("Failed to connect"));
                  return;
                }
                d(ot.parseCaipAddress(x)), pe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: {
                    provider: t
                  }
                });
              }
            } catch (p) {
              pe.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: {
                  provider: t,
                  message: ee.parseError(p)
                }
              }), u(new Error("Failed to connect"));
            }
          } else pe.sendEvent({
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
          if (pe.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: {
              provider: t
            }
          }), t === "farcaster") {
            n == null ? void 0 : n();
            const g = we.subscribeKey("open", (m) => {
              !m && t === "farcaster" && (u(new Error("Popup closed")), r == null ? void 0 : r(), g());
            }), p = V.getAuthConnector();
            if (p && !((_a2 = b.getAccountData(c)) == null ? void 0 : _a2.farcasterUrl)) try {
              const { url: x } = await p.provider.getFarcasterUri();
              b.setAccountProp("farcasterUrl", x, c);
            } catch {
              u(new Error("Failed to connect to farcaster"));
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
                    (i == null ? void 0 : i.closed) && !o && (u(new Error("Popup closed")), clearInterval(m));
                  }, 1e3);
                  window.addEventListener("message", h, false);
                } else a == null ? void 0 : a.close(), u(new Error("Failed to initiate social connection"));
              }
            } catch {
              u(new Error("Failed to initiate social connection")), a == null ? void 0 : a.close();
            }
          }
        }
        f();
      });
    },
    connectEmail({ closeModalOnConnect: t = true, redirectViewOnModalClose: e = "Connect", onOpen: s, onConnect: n }) {
      return new Promise((r, i) => {
        if (s == null ? void 0 : s(), e) {
          const a = we.subscribeKey("open", (c) => {
            c || (ae.state.view !== e && ae.replace(e), a(), i(new Error("Modal closed")));
          });
        }
        const o = b.subscribeKey("activeCaipAddress", (a) => {
          a && (n == null ? void 0 : n(), t && we.close(), o(), r(ot.parseCaipAddress(a)));
        });
      });
    },
    async updateEmail() {
      const t = H.getConnectedConnectorId(b.state.activeChain), e = V.getAuthConnector();
      if (!e) throw new Error("No auth connector found");
      if (t !== F.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
      const s = e.provider.getEmail() ?? "";
      return await we.open({
        view: "UpdateEmailWallet",
        data: {
          email: s,
          redirectView: void 0
        }
      }), new Promise((n, r) => {
        const i = setInterval(() => {
          const a = e.provider.getEmail() ?? "";
          a !== s && (we.close(), clearInterval(i), o(), n({
            email: a
          }));
        }, cy), o = we.subscribeKey("open", (a) => {
          a || (ae.state.view !== "Connect" && ae.push("Connect"), clearInterval(i), o(), r(new Error("Modal closed")));
        });
      });
    },
    canSwitchToSmartAccount(t) {
      return b.checkIfSmartAccountEnabled() && as(t) === an.ACCOUNT_TYPES.EOA;
    }
  };
  Np = function() {
    var _a2, _b2;
    const t = ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) || "eip155", e = ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.id) || 1, s = me.NATIVE_TOKEN_ADDRESS[t];
    return `${t}:${e}:${s}`;
  };
  i3 = function(t) {
    return me.NATIVE_TOKEN_ADDRESS[t];
  };
  as = function(t) {
    var _a2;
    return (_a2 = b.getAccountData(t)) == null ? void 0 : _a2.preferredAccountType;
  };
  To = function(t) {
    return b.state.activeCaipNetwork;
  };
  let Dr, Cs, Le, ly, ea, ye;
  ua = {
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
      const e = !!((_a2 = q.state.remoteFeatures) == null ? void 0 : _a2.multiWallet), s = V.state.activeConnectorIds[t], n = G.getConnections(t), i = (G.state.recentConnections.get(t) ?? []).filter((a) => V.getConnectorById(a.connectorId)), o = ua.excludeExistingConnections([
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
        pe.sendEvent({
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
  Dr = De({
    loading: false,
    open: false,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: false,
    connectingWallet: void 0
  });
  Cs = {
    state: Dr,
    subscribe(t) {
      return at(Dr, () => t(Dr));
    },
    subscribeOpen(t) {
      return ct(Dr, "open", t);
    },
    set(t) {
      Object.assign(Dr, {
        ...Dr,
        ...t
      });
    }
  };
  Le = De({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: false,
    empty: false,
    next: void 0
  });
  ly = {
    state: Le,
    subscribe(t) {
      return at(Le, () => t(Le));
    },
    setLastNetworkInView(t) {
      Le.lastNetworkInView = t;
    },
    async fetchTransactions(t) {
      var _a2;
      if (!t) throw new Error("Transactions can't be fetched without an accountAddress");
      Le.loading = true;
      try {
        const e = await le.fetchTransactions({
          account: t,
          cursor: Le.next,
          chainId: (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId
        }), s = ea.filterSpamTransactions(e.data), n = ea.filterByConnectedChain(s), r = [
          ...Le.transactions,
          ...n
        ];
        Le.loading = false, Le.transactions = r, Le.transactionsByYear = ea.groupTransactionsByYearAndMonth(Le.transactionsByYear, n), Le.empty = r.length === 0, Le.next = e.next ? e.next : void 0;
      } catch {
        const s = b.state.activeChain;
        pe.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: t,
            projectId: q.state.projectId,
            cursor: Le.next,
            isSmartAccount: as(s) === an.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }), Bs.showError("Failed to fetch transactions"), Le.loading = false, Le.empty = true, Le.next = void 0;
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
      Le.next = void 0;
    },
    resetTransactions() {
      Le.transactions = [], Le.transactionsByYear = {}, Le.lastNetworkInView = void 0, Le.loading = false, Le.empty = false, Le.next = void 0;
    }
  };
  ea = ds(ly, "API_ERROR");
  ye = De({
    connections: /* @__PURE__ */ new Map(),
    recentConnections: /* @__PURE__ */ new Map(),
    isSwitchingConnection: false,
    wcError: false,
    wcFetchingUri: false,
    buffering: false,
    status: "disconnected"
  });
  let Qn;
  let dy, oc;
  dy = {
    state: ye,
    subscribe(t) {
      return at(ye, () => t(ye));
    },
    subscribeKey(t, e) {
      return ct(ye, t, e);
    },
    _getClient() {
      return ye._client;
    },
    setClient(t) {
      ye._client = to(t);
    },
    initialize(t) {
      const e = t.filter((s) => !!s.namespace).map((s) => s.namespace);
      G.syncStorageConnections(e);
    },
    syncStorageConnections(t) {
      const e = H.getConnections(), s = t ?? Array.from(b.state.chains.keys());
      for (const n of s) {
        const r = e[n] ?? [], i = new Map(ye.recentConnections);
        i.set(n, r), ye.recentConnections = i;
      }
    },
    getConnections(t) {
      return t ? ye.connections.get(t) ?? [] : [];
    },
    hasAnyConnection(t) {
      const e = G.state.connections;
      return Array.from(e.values()).flatMap((s) => s).some(({ connectorId: s }) => s === t);
    },
    async connectWalletConnect({ cache: t = "auto" } = {}) {
      var _a2, _b2, _c2, _d3;
      ye.wcFetchingUri = true;
      const e = ee.isTelegram() || ee.isSafari() && ee.isIos();
      if (t === "always" || t === "auto" && e) {
        if (Qn) {
          await Qn, Qn = void 0;
          return;
        }
        if (!ee.isPairingExpired(ye == null ? void 0 : ye.wcPairingExpiry)) {
          const s = ye.wcUri;
          ye.wcUri = s;
          return;
        }
        Qn = (_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.connectWalletConnect) == null ? void 0 : _b2.call(_a2).catch(() => {
        }), G.state.status = "connecting", await Qn, Qn = void 0, ye.wcPairingExpiry = void 0, G.state.status = "connected";
      } else await ((_d3 = (_c2 = G._getClient()) == null ? void 0 : _c2.connectWalletConnect) == null ? void 0 : _d3.call(_c2));
    },
    async connectExternal(t, e, s = true) {
      var _a2, _b2, _c2;
      const n = await ((_b2 = (_a2 = G._getClient()) == null ? void 0 : _a2.connectExternal) == null ? void 0 : _b2.call(_a2, t));
      s && b.setActiveNamespace(e);
      const r = V.state.allConnectors.find((o) => o.id === (t == null ? void 0 : t.id)), i = t.type === "AUTH" ? "email" : "browser";
      return pe.sendEvent({
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
      we.setLoading(true, b.state.activeChain);
      const s = V.getAuthConnector();
      s && (b.setAccountProp("preferredAccountType", t, e), await s.provider.setPreferredAccount(t), H.setPreferredAccountTypes(Object.entries(b.state.chains).reduce((n, [r, i]) => {
        const o = r, a = as(o);
        return a !== void 0 && (n[o] = a), n;
      }, {})), await G.reconnectExternal(s), we.setLoading(false, b.state.activeChain), pe.sendEvent({
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
      ye.wcUri = void 0, ye.wcPairingExpiry = void 0, ye.wcLinking = void 0, ye.recentWallet = void 0, ye.wcFetchingUri = false, ye.status = "disconnected", ea.resetTransactions(), H.deleteWalletConnectDeepLink(), H.deleteRecentWallet(), Cs.set({
        connectingWallet: void 0
      });
    },
    resetUri() {
      ye.wcUri = void 0, ye.wcPairingExpiry = void 0, Qn = void 0, ye.wcFetchingUri = false, Cs.set({
        connectingWallet: void 0
      });
    },
    finalizeWcConnection(t) {
      var _a2, _b2;
      const { wcLinking: e, recentWallet: s } = G.state;
      e && H.setWalletConnectDeepLink(e), s && H.setAppKitRecent(s), t && pe.sendEvent({
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
      ye.wcBasic = t;
    },
    setUri(t) {
      ye.wcUri = t, ye.wcFetchingUri = false, ye.wcPairingExpiry = ee.getPairingExpiry();
    },
    setWcLinking(t) {
      ye.wcLinking = t;
    },
    setWcError(t) {
      ye.wcError = t, ye.wcFetchingUri = false, ye.buffering = false;
    },
    setRecentWallet(t) {
      ye.recentWallet = t;
    },
    setBuffering(t) {
      ye.buffering = t;
    },
    setStatus(t) {
      ye.status = t;
    },
    setIsSwitchingConnection(t) {
      ye.isSwitchingConnection = t;
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
        throw new Ir("Failed to disconnect", "INTERNAL_SDK_ERROR", n);
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
        throw new Ir("Failed to disconnect connector", "INTERNAL_SDK_ERROR", s);
      }
    },
    setConnections(t, e) {
      const s = new Map(ye.connections);
      s.set(e, t), ye.connections = s;
    },
    async handleAuthAccountSwitch({ address: t, namespace: e }) {
      var _a2, _b2, _c2;
      const n = (_c2 = (_b2 = (_a2 = b.getAccountData(e)) == null ? void 0 : _a2.user) == null ? void 0 : _b2.accounts) == null ? void 0 : _c2.find((i) => i.type === "smartAccount"), r = n && n.address.toLowerCase() === t.toLowerCase() && Ei.canSwitchToSmartAccount(e) ? "smartAccount" : "eoa";
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
      if (o) if (i && Ei.isSocialProvider(i)) {
        const { address: l } = await Ei.connectSocial({
          social: i,
          closeModalOnConnect: n,
          onOpenFarcaster() {
            we.open({
              view: "ConnectingFarcaster"
            });
          },
          onConnect() {
            ae.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const { address: l } = await Ei.connectEmail({
          closeModalOnConnect: n,
          onOpen() {
            we.open({
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
        const { address: l } = await Ei.connectWalletConnect({
          walletConnect: true,
          connector: r,
          closeModalOnConnect: n,
          onOpen(d) {
            const u = d ? "AllWallets" : "ConnectingWalletConnect";
            we.state.open ? ae.push(u) : we.open({
              view: u
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
        const { address: c } = ot.parseCaipAddress(o);
        i = c;
      }
      const a = ua.getConnectionStatus(t, s);
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
  G = ds(dy);
  oc = {
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
      return lp(BigInt(t), e);
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
  let ac;
  async function bu() {
    if (!ac) {
      const { createPublicClient: t, http: e, defineChain: s } = await aa(async () => {
        const { createPublicClient: n, http: r, defineChain: i } = await import("./index-On9LzipM.js");
        return {
          createPublicClient: n,
          http: r,
          defineChain: i
        };
      }, __vite__mapDeps([0,1,2,3]));
      ac = {
        createPublicClient: t,
        http: e,
        defineChain: s
      };
    }
    return ac;
  }
  let ul, cc, ha, Tt, Ce, hy, ge, lc, Oo, Q, _p, fy, Ot, py, Hi, hl, gy, Ae, my, fl;
  ul = {
    getBlockchainApiRpcUrl(t, e) {
      const s = new URL("https://rpc.walletconnect.org/v1/");
      return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
    },
    async getViemChain(t) {
      const { defineChain: e } = await bu(), { chainId: s } = ot.parseCaipNetworkId(t.caipNetworkId);
      return e({
        ...t,
        id: Number(s)
      });
    },
    async createViemPublicClient(t) {
      const { createPublicClient: e, http: s } = await bu(), n = q.state.projectId, r = await ul.getViemChain(t);
      if (!r) throw new Error(`Chain ${t.caipNetworkId} not found in viem/chains`);
      return e({
        chain: r,
        transport: s(ul.getBlockchainApiRpcUrl(t.caipNetworkId, n))
      });
    }
  };
  md = {
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
        const s = oc.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);
        if (!((_c2 = (_b2 = (_a2 = await G.getCapabilities(t)) == null ? void 0 : _a2[s]) == null ? void 0 : _b2.assetDiscovery) == null ? void 0 : _c2.supported)) return null;
        const r = await G.walletGetAssets({
          account: t,
          chainFilter: [
            s
          ]
        });
        if (!oc.isWalletGetAssetsResponse(r)) return null;
        const o = (r[s] || []).map((a) => oc.createBalance(a, e.caipNetworkId));
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
      const n = await ul.createViemPublicClient(s), { address: r } = ot.parseCaipAddress(t), [{ result: i }, { result: o }, { result: a }, { result: c }] = await n.multicall({
        contracts: [
          {
            address: e,
            functionName: "name",
            args: [],
            abi: So
          },
          {
            address: e,
            functionName: "symbol",
            args: [],
            abi: So
          },
          {
            address: e,
            functionName: "balanceOf",
            args: [
              r
            ],
            abi: So
          },
          {
            address: e,
            functionName: "decimals",
            args: [],
            abi: So
          }
        ]
      });
      return {
        name: i,
        symbol: o,
        decimals: c,
        balance: a && c ? lp(a, c) : "0"
      };
    }
  };
  cc = {
    adapters: {}
  };
  Sp = {
    state: cc,
    initialize(t) {
      cc.adapters = {
        ...t
      };
    },
    get(t) {
      return cc.adapters[t];
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
  Tt = De({
    providers: {
      ...ha
    },
    providerIds: {
      ...ha
    }
  });
  Ue = {
    state: Tt,
    subscribeKey(t, e) {
      return ct(Tt, t, e);
    },
    subscribe(t) {
      return at(Tt, () => {
        t(Tt);
      });
    },
    subscribeProviders(t) {
      return at(Tt.providers, () => t(Tt.providers));
    },
    setProvider(t, e) {
      t && e && (Tt.providers[t] = to(e));
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
  uy = {
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
      const e = await md.getMyTokensWithBalance({
        forceUpdate: t,
        caipNetwork: b.state.activeCaipNetwork,
        address: (_a2 = b.getAccountData()) == null ? void 0 : _a2.address
      });
      return b.setAccountProp("tokenBalance", e, b.state.activeChain), this.mapBalancesToSwapTokens(e);
    },
    mapBalancesToSwapTokens(t) {
      return (t == null ? void 0 : t.map((e) => ({
        ...e,
        address: (e == null ? void 0 : e.address) ? e.address : Np(),
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
  Ce = De({
    tokenBalances: [],
    loading: false
  });
  hy = {
    state: Ce,
    subscribe(t) {
      return at(Ce, () => t(Ce));
    },
    subscribeKey(t, e) {
      return ct(Ce, t, e);
    },
    setToken(t) {
      t && (Ce.token = to(t));
    },
    setTokenAmount(t) {
      Ce.sendTokenAmount = t;
    },
    setReceiverAddress(t) {
      Ce.receiverAddress = t;
    },
    setReceiverProfileImageUrl(t) {
      Ce.receiverProfileImageUrl = t;
    },
    setReceiverProfileName(t) {
      Ce.receiverProfileName = t;
    },
    setNetworkBalanceInUsd(t) {
      Ce.networkBalanceInUSD = t;
    },
    setLoading(t) {
      Ce.loading = t;
    },
    getSdkEventProperties(t) {
      var _a2, _b2;
      return {
        message: ee.parseError(t),
        isSmartAccount: as(b.state.activeChain) === an.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_a2 = Ce.token) == null ? void 0 : _a2.symbol) || "",
        amount: Ce.sendTokenAmount ?? 0,
        network: ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
      };
    },
    async sendToken() {
      var _a2;
      try {
        switch (ge.setLoading(true), (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) {
          case "eip155":
            await ge.sendEvmToken();
            return;
          case "solana":
            await ge.sendSolanaToken();
            return;
          default:
            throw new Error("Unsupported chain");
        }
      } catch (t) {
        throw on.isUserRejectedRequestError(t) ? new Ep(t) : t;
      } finally {
        ge.setLoading(false);
      }
    },
    async sendEvmToken() {
      var _a2, _b2, _c2;
      const t = b.state.activeChain;
      if (!t) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
      const e = as(t);
      if (!ge.state.sendTokenAmount || !ge.state.receiverAddress) throw new Error("An amount and receiver address are required");
      if (!ge.state.token) throw new Error("A token is required");
      if ((_a2 = ge.state.token) == null ? void 0 : _a2.address) {
        pe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === an.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ge.state.token.address,
            amount: ge.state.sendTokenAmount,
            network: ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
          }
        });
        const { hash: s } = await ge.sendERC20Token({
          receiverAddress: ge.state.receiverAddress,
          tokenAddress: ge.state.token.address,
          sendTokenAmount: ge.state.sendTokenAmount,
          decimals: ge.state.token.quantity.decimals
        });
        s && (Ce.hash = s);
      } else {
        pe.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === an.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ge.state.token.symbol || "",
            amount: ge.state.sendTokenAmount,
            network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || ""
          }
        });
        const { hash: s } = await ge.sendNativeToken({
          receiverAddress: ge.state.receiverAddress,
          sendTokenAmount: ge.state.sendTokenAmount,
          decimals: ge.state.token.quantity.decimals
        });
        s && (Ce.hash = s);
      }
    },
    async fetchTokenBalance(t) {
      var _a2, _b2, _c2;
      Ce.loading = true;
      const e = b.state.activeChain, s = (_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, n = (_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, r = ((_c2 = b.getAccountData(e)) == null ? void 0 : _c2.caipAddress) ?? b.state.activeCaipAddress, i = r ? ee.getPlainAddress(r) : void 0;
      if (Ce.lastRetry && !ee.isAllowedRetry(Ce.lastRetry, 30 * me.ONE_SEC_MS)) return Ce.loading = false, [];
      try {
        if (i && s && n) {
          const o = await md.getMyTokensWithBalance();
          return Ce.tokenBalances = o, Ce.lastRetry = void 0, o;
        }
      } catch (o) {
        Ce.lastRetry = Date.now(), t == null ? void 0 : t(o), Bs.showError("Token Balance Unavailable");
      } finally {
        Ce.loading = false;
      }
      return [];
    },
    fetchNetworkBalance() {
      if (Ce.tokenBalances.length === 0) return;
      const t = uy.mapBalancesToSwapTokens(Ce.tokenBalances);
      if (!t) return;
      const e = t.find((s) => s.address === Np());
      e && (Ce.networkBalanceInUSD = e ? bp.multiply(e.quantity.numeric, e.price).toString() : "0");
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
      return pe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: as("eip155") === an.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b2 = ge.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: t.sendTokenAmount,
          network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: i || ""
        }
      }), (_d3 = G._getClient()) == null ? void 0 : _d3.updateBalance("eip155"), ge.resetSend(), {
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
          abi: N0.getERC20Abi(n),
          chainNamespace: F.CHAIN.EVM
        });
        return pe.sendEvent({
          type: "track",
          event: "SEND_SUCCESS",
          properties: {
            isSmartAccount: as("eip155") === an.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((_b2 = ge.state.token) == null ? void 0 : _b2.symbol) || "",
            amount: t.sendTokenAmount,
            network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
            hash: r || ""
          }
        }), ge.resetSend(), {
          hash: r
        };
      }
      return {
        hash: void 0
      };
    },
    async sendSolanaToken() {
      var _a2, _b2, _c2;
      if (!ge.state.sendTokenAmount || !ge.state.receiverAddress) throw new Error("An amount and receiver address are required");
      ae.pushTransactionStack({
        onSuccess() {
          ae.replace("Account");
        }
      });
      let t;
      ge.state.token && ge.state.token.address !== me.SOLANA_NATIVE_TOKEN_ADDRESS && (ee.isCaipAddress(ge.state.token.address) ? t = ee.getPlainAddress(ge.state.token.address) : t = ge.state.token.address);
      const e = await G.sendTransaction({
        chainNamespace: "solana",
        tokenMint: t,
        to: ge.state.receiverAddress,
        value: ge.state.sendTokenAmount
      });
      e && (Ce.hash = e), (_a2 = G._getClient()) == null ? void 0 : _a2.updateBalance("solana"), pe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: false,
          token: ((_b2 = ge.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: ge.state.sendTokenAmount,
          network: ((_c2 = b.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: e || ""
        }
      }), ge.resetSend();
    },
    resetSend() {
      Ce.token = void 0, Ce.sendTokenAmount = void 0, Ce.receiverAddress = void 0, Ce.receiverProfileImageUrl = void 0, Ce.receiverProfileName = void 0, Ce.loading = false, Ce.tokenBalances = [];
    }
  };
  ge = ds(hy);
  lc = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    user: void 0,
    preferredAccountType: void 0
  };
  Oo = {
    caipNetwork: void 0,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
  };
  Q = De({
    chains: M0(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: false,
    universalAdapter: {
      connectionControllerClient: void 0
    },
    isSwitchingNamespace: false
  });
  _p = {
    state: Q,
    subscribe(t) {
      return at(Q, () => {
        t(Q);
      });
    },
    subscribeKey(t, e) {
      return ct(Q, t, e);
    },
    subscribeAccountStateProp(t, e, s) {
      var _a2;
      const n = s || Q.activeChain;
      return n ? ct(((_a2 = Q.chains.get(n)) == null ? void 0 : _a2.accountState) || {}, t, e) : () => {
      };
    },
    subscribeChainProp(t, e, s) {
      let n;
      return at(Q.chains, () => {
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
      }), Q.activeChain && Cs.set({
        activeChain: a == null ? void 0 : a.namespace
      })), l.forEach((d) => {
        const u = e == null ? void 0 : e.filter((g) => g.chainNamespace === d), h = H.getPreferredAccountTypes() || {}, f = {
          ...q.state.defaultAccountTypes,
          ...h
        };
        b.state.chains.set(d, {
          namespace: d,
          networkState: De({
            ...Oo,
            caipNetwork: u == null ? void 0 : u[0]
          }),
          accountState: De({
            ...lc,
            preferredAccountType: f[d]
          }),
          caipNetworks: u ?? [],
          ...s
        }), b.setRequestedCaipNetworks(u ?? [], d);
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
          ...Oo,
          caipNetwork: s[0]
        },
        accountState: {
          ...lc
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
        ...s.networkState || Oo,
        ...e
      }, Q.chains.set(t, s));
    },
    setChainAccountData(t, e, s = true) {
      if (!t) throw new Error("Chain is required to update chain account data");
      const n = Q.chains.get(t);
      if (n) {
        const r = {
          ...n.accountState || lc,
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
          ...s.networkState || Oo,
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
      }), H.setActiveCaipNetworkId(s == null ? void 0 : s.caipNetworkId), Cs.set({
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
        const { address: i } = ot.parseCaipAddress(Q.activeCaipAddress);
        n = i, Q.activeCaipAddress = `${t.caipNetworkId}:${n}`;
      } else Q.activeCaipAddress = void 0;
      b.setChainAccountData(t.chainNamespace, {
        address: n,
        caipAddress: Q.activeCaipAddress
      }), ge.resetSend(), Cs.set({
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
      const n = Ue.getProviderId(Q.activeChain) === "AUTH", r = (_a2 = b.getAccountData(s)) == null ? void 0 : _a2.address, i = F.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t.chainNamespace);
      try {
        if (r && t.chainNamespace === s || n && i) {
          const o = Sp.get(t.chainNamespace);
          if (!o) throw new Error("Adapter not found");
          await o.switchNetwork({
            caipNetwork: t
          });
        }
        b.setActiveCaipNetwork(t);
      } catch (o) {
        if (e) throw o;
      }
      pe.sendEvent({
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
      const t = gp.caipNetworkIdToNumber((_a2 = Q.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
      return !Q.activeChain || !t ? false : !!((_c2 = ((_b2 = q0.get(Qo.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : _b2.split(",")) || []) == null ? void 0 : _c2.includes(t.toString()));
    },
    showUnsupportedChainUI() {
      we.open({
        view: "UnsupportedChain"
      });
    },
    checkIfNamesSupported() {
      const t = Q.activeCaipNetwork;
      return !!((t == null ? void 0 : t.chainNamespace) && me.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
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
      return _p.getCaipNetworks(e).find((s) => s.id.toString() === t.toString() || s.caipNetworkId.toString() === t.toString());
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
      if (b.setAccountProp("balanceLoading", true, n), e.lastRetry && !ee.isAllowedRetry(e.lastRetry, 30 * me.ONE_SEC_MS)) return b.setAccountProp("balanceLoading", false, n), [];
      try {
        if (i && s && n) {
          const o = await md.getMyTokensWithBalance();
          return b.setAccountProp("tokenBalance", o, n), b.setAccountProp("lastRetry", void 0, n), b.setAccountProp("balanceLoading", false, n), o;
        }
      } catch (o) {
        b.setAccountProp("lastRetry", Date.now(), n), t == null ? void 0 : t(o), Bs.showError("Token Balance Unavailable");
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
  b = ds(_p);
  fy = {
    onSwitchNetwork({ network: t, ignoreSwitchConfirmation: e = false }) {
      var _a2, _b2;
      const s = b.state.activeCaipNetwork, n = b.state.activeChain, r = ae.state.data;
      if (t.id === (s == null ? void 0 : s.id)) return;
      const o = !!((_a2 = b.getAccountData(n)) == null ? void 0 : _a2.address), a = !!((_b2 = b.getAccountData(t.chainNamespace)) == null ? void 0 : _b2.address), c = t.chainNamespace !== n, d = V.getConnectorId(n) === F.CONNECTOR_ID.AUTH, u = F.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((h) => h === t.chainNamespace);
      e || d && u ? ae.push("SwitchNetwork", {
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
  Ot = De({
    loading: false,
    loadingNamespaceMap: /* @__PURE__ */ new Map(),
    open: false,
    shake: false,
    namespace: void 0
  });
  py = {
    state: Ot,
    subscribe(t) {
      return at(Ot, () => t(Ot));
    },
    subscribeKey(t, e) {
      return ct(Ot, t, e);
    },
    async open(t) {
      var _a2, _b2;
      const e = t == null ? void 0 : t.namespace, s = b.state.activeChain, n = e && e !== s, r = (_a2 = b.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : _a2.caipAddress, i = b.state.noAdapters;
      if (G.state.wcBasic ? ne.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      }) : await ne.prefetch(), V.setFilterByNamespace(t == null ? void 0 : t.namespace), we.setLoading(true, e), e && n) {
        const o = ((_b2 = b.getNetworkData(e)) == null ? void 0 : _b2.caipNetwork) || b.getRequestedCaipNetworks(e)[0];
        o && (i ? (await b.switchActiveNetwork(o), ae.push("ConnectingWalletConnectBasic")) : fy.onSwitchNetwork({
          network: o,
          ignoreSwitchConfirmation: true
        }));
      } else q.state.manualWCControl || i && !r ? ee.isMobile() ? ae.reset("AllWallets") : ae.reset("ConnectingWalletConnectBasic") : (t == null ? void 0 : t.view) ? ae.reset(t.view, t.data) : r ? ae.reset("Account") : ae.reset("Connect");
      Ot.open = true, Cs.set({
        open: true
      }), pe.sendEvent({
        type: "track",
        event: "MODAL_OPEN",
        properties: {
          connected: !!r
        }
      });
    },
    close() {
      const t = q.state.enableEmbedded, e = !!b.state.activeCaipAddress;
      Ot.open && pe.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: {
          connected: e
        }
      }), Ot.open = false, ae.reset("Connect"), we.clearLoading(), t ? e ? ae.replace("Account") : ae.push("Connect") : Cs.set({
        open: false
      }), G.resetUri();
    },
    setLoading(t, e) {
      e && Ot.loadingNamespaceMap.set(e, t), Ot.loading = t, Cs.set({
        loading: t
      });
    },
    clearLoading() {
      Ot.loadingNamespaceMap.clear(), Ot.loading = false, Cs.set({
        loading: false
      });
    },
    shake() {
      Ot.shake || (Ot.shake = true, setTimeout(() => {
        Ot.shake = false;
      }, 500));
    }
  };
  we = ds(py);
  Hi = {
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
  gy = {
    providers: Cp,
    selectedProvider: null,
    error: null,
    purchaseCurrency: Hi,
    paymentCurrency: hl,
    purchaseCurrencies: [
      Hi
    ],
    paymentCurrencies: [],
    quotesLoading: false
  };
  Ae = De(gy);
  my = {
    state: Ae,
    subscribe(t) {
      return at(Ae, () => t(Ae));
    },
    subscribeKey(t, e) {
      return ct(Ae, t, e);
    },
    setSelectedProvider(t) {
      var _a2, _b2;
      if (t && t.name === "meld") {
        const e = b.state.activeChain, s = e === F.CHAIN.SOLANA ? "SOL" : "USDC", n = e ? ((_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address) ?? "" : "", r = new URL(t.url);
        r.searchParams.append("publicKey", F0), r.searchParams.append("destinationCurrencyCode", s), r.searchParams.append("walletAddress", n), r.searchParams.append("externalCustomerId", q.state.projectId), Ae.selectedProvider = {
          ...t,
          url: r.toString()
        };
      } else Ae.selectedProvider = t;
    },
    setOnrampProviders(t) {
      if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
        const e = t, s = Cp.filter((n) => e.includes(n.name));
        Ae.providers = s;
      } else Ae.providers = [];
    },
    setPurchaseCurrency(t) {
      Ae.purchaseCurrency = t;
    },
    setPaymentCurrency(t) {
      Ae.paymentCurrency = t;
    },
    setPurchaseAmount(t) {
      fl.state.purchaseAmount = t;
    },
    setPaymentAmount(t) {
      fl.state.paymentAmount = t;
    },
    async getAvailableCurrencies() {
      const t = await le.getOnrampOptions();
      Ae.purchaseCurrencies = t.purchaseCurrencies, Ae.paymentCurrencies = t.paymentCurrencies, Ae.paymentCurrency = t.paymentCurrencies[0] || hl, Ae.purchaseCurrency = t.purchaseCurrencies[0] || Hi, await ne.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)), await ne.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
    },
    async getQuote() {
      var _a2, _b2;
      Ae.quotesLoading = true;
      try {
        const t = await le.getOnrampQuote({
          purchaseCurrency: Ae.purchaseCurrency,
          paymentCurrency: Ae.paymentCurrency,
          amount: ((_a2 = Ae.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
          network: (_b2 = Ae.purchaseCurrency) == null ? void 0 : _b2.symbol
        });
        return Ae.quotesLoading = false, Ae.purchaseAmount = Number(t == null ? void 0 : t.purchaseAmount.amount), t;
      } catch (t) {
        return Ae.error = t.message, Ae.quotesLoading = false, null;
      } finally {
        Ae.quotesLoading = false;
      }
    },
    resetState() {
      Ae.selectedProvider = null, Ae.error = null, Ae.purchaseCurrency = Hi, Ae.paymentCurrency = hl, Ae.purchaseCurrencies = [
        Hi
      ], Ae.paymentCurrencies = [], Ae.paymentAmount = void 0, Ae.purchaseAmount = void 0, Ae.quotesLoading = false;
    }
  };
  fl = ds(my);
  var wy = Object.defineProperty, yy = (t, e, s) => e in t ? wy(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Eu = (t, e, s) => yy(t, typeof e != "symbol" ? e + "" : e, s);
  let by = class extends gi {
    constructor(e) {
      super(), this.opts = e, Eu(this, "protocol", "wc"), Eu(this, "version", 2);
    }
  };
  var Ey = Object.defineProperty, vy = (t, e, s) => e in t ? Ey(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Cy = (t, e, s) => vy(t, e + "", s);
  let Ay = class extends gi {
    constructor(e, s) {
      super(), this.core = e, this.logger = s, Cy(this, "records", /* @__PURE__ */ new Map());
    }
  }, Iy = class {
    constructor(e, s) {
      this.logger = e, this.core = s;
    }
  }, Ny = class extends gi {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, Sy = class extends gi {
    constructor(e) {
      super();
    }
  }, _y = class {
    constructor(e, s, n, r) {
      this.core = e, this.logger = s, this.name = n;
    }
  }, xy = class extends gi {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, Ty = class extends gi {
    constructor(e, s) {
      super(), this.core = e, this.logger = s;
    }
  }, Oy = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.store = n;
    }
  };
  class ky {
    constructor(e, s) {
      this.projectId = e, this.logger = s;
    }
  }
  let Py = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.telemetryEnabled = n;
    }
  };
  function Ry(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), u = d.charCodeAt(0);
      if (e[u] !== 255) throw new TypeError(d + " is ambiguous");
      e[u] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, u = 0, h = 0;
      const f = l.length;
      for (; h !== f && l[h] === 0; ) h++, d++;
      const g = (f - h) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; h !== f; ) {
        let T = l[h], A = 0;
        for (let N = g - 1; (T !== 0 || A < u) && N !== -1; N--, A++) T += 256 * p[N] >>> 0, p[N] = T % s >>> 0, T = T / s >>> 0;
        if (T !== 0) throw new Error("Non-zero carry");
        u = A, h++;
      }
      let m = g - u;
      for (; m !== g && p[m] === 0; ) m++;
      let x = n.repeat(d);
      for (; m < g; ++m) x += t.charAt(p[m]);
      return x;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === n; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const T = l.charCodeAt(d);
        if (T > 255) return;
        let A = e[T];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < h) && P !== -1; P--, N++) A += s * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        h = N, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(u + (f - p));
      let x = u;
      for (; p !== f; ) m[x++] = g[p++];
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
  var $y = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  Ry($y);
  function Uy(t) {
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
  function By(t, e, s) {
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
  const Dy = new TextEncoder(), Ly = 50;
  function My(t, e, s) {
    Dy.encodeInto(t, e.subarray(s));
  }
  function Fy(t, e, s) {
    t.length > Ly ? My(t, e, s) : By(t, e, s);
  }
  const qy = 4096;
  function xp(t, e, s) {
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
        let u = (a & 7) << 18 | c << 12 | l << 6 | d;
        u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), i.push(u);
      } else i.push(a);
      i.length >= qy && (o += String.fromCharCode(...i), i.length = 0);
    }
    return i.length > 0 && (o += String.fromCharCode(...i)), o;
  }
  const jy = new TextDecoder(), Wy = 200;
  function Hy(t, e, s) {
    const n = t.subarray(e, e + s);
    return jy.decode(n);
  }
  function Vy(t, e, s) {
    return s > Wy ? Hy(t, e, s) : xp(t, e, s);
  }
  class ko {
    constructor(e, s) {
      this.type = e, this.data = s;
    }
  }
  class Vt extends Error {
    constructor(e) {
      super(e);
      const s = Object.create(Vt.prototype);
      Object.setPrototypeOf(this, s), Object.defineProperty(this, "name", {
        configurable: true,
        enumerable: false,
        value: Vt.name
      });
    }
  }
  const vi = 4294967295;
  function zy(t, e, s) {
    const n = s / 4294967296, r = s;
    t.setUint32(e, n), t.setUint32(e + 4, r);
  }
  function Tp(t, e, s) {
    const n = Math.floor(s / 4294967296), r = s;
    t.setUint32(e, n), t.setUint32(e + 4, r);
  }
  function Op(t, e) {
    const s = t.getInt32(e), n = t.getUint32(e + 4);
    return s * 4294967296 + n;
  }
  function Ky(t, e) {
    const s = t.getUint32(e), n = t.getUint32(e + 4);
    return s * 4294967296 + n;
  }
  const Gy = -1, Yy = 4294967296 - 1, Zy = 17179869184 - 1;
  function Jy({ sec: t, nsec: e }) {
    if (t >= 0 && e >= 0 && t <= Zy) if (e === 0 && t <= Yy) {
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
  function Xy(t) {
    const e = t.getTime(), s = Math.floor(e / 1e3), n = (e - s * 1e3) * 1e6, r = Math.floor(n / 1e9);
    return {
      sec: s + r,
      nsec: n - r * 1e9
    };
  }
  function Qy(t) {
    if (t instanceof Date) {
      const e = Xy(t);
      return Jy(e);
    } else return null;
  }
  function eb(t) {
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
        const s = Op(e, 4), n = e.getUint32(0);
        return {
          sec: s,
          nsec: n
        };
      }
      default:
        throw new Vt(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${t.length}`);
    }
  }
  function tb(t) {
    const e = eb(t);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  const sb = {
    type: Gy,
    encode: Qy,
    decode: tb
  };
  class fa {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(sb);
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
            return new ko(o, i);
          }
        }
      }
      for (let n = 0; n < this.encoders.length; n++) {
        const r = this.encoders[n];
        if (r != null) {
          const i = r(e, s);
          if (i != null) {
            const o = n;
            return new ko(o, i);
          }
        }
      }
      return e instanceof ko ? e : null;
    }
    decode(e, s, n) {
      const r = s < 0 ? this.builtInDecoders[-1 - s] : this.decoders[s];
      return r ? r(e, s, n) : new ko(s, e);
    }
  }
  fa.defaultCodec = new fa();
  function nb(t) {
    return t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer;
  }
  function pl(t) {
    return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : nb(t) ? new Uint8Array(t) : Uint8Array.from(t);
  }
  const rb = 100, ib = 2048;
  class wd {
    constructor(e) {
      this.entered = false, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? fa.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? false, this.maxDepth = (e == null ? void 0 : e.maxDepth) ?? rb, this.initialBufferSize = (e == null ? void 0 : e.initialBufferSize) ?? ib, this.sortKeys = (e == null ? void 0 : e.sortKeys) ?? false, this.forceFloat32 = (e == null ? void 0 : e.forceFloat32) ?? false, this.ignoreUndefined = (e == null ? void 0 : e.ignoreUndefined) ?? false, this.forceIntegerToFloat = (e == null ? void 0 : e.forceIntegerToFloat) ?? false, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
      return new wd({
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
      const n = Uy(e);
      this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), Fy(e, this.bytes, this.pos), this.pos += n;
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
      const n = pl(e);
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
      this.ensureBufferSizeToWrite(8), zy(this.view, this.pos, e), this.pos += 8;
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
  function ob(t, e) {
    return new wd(e).encodeSharedRef(t);
  }
  function dc(t) {
    return `${t < 0 ? "-" : ""}0x${Math.abs(t).toString(16).padStart(2, "0")}`;
  }
  const ab = 16, cb = 16;
  class lb {
    constructor(e = ab, s = cb) {
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
      const i = xp(e, s, n), o = Uint8Array.prototype.slice.call(e, s, s + n);
      return this.store(o, i), i;
    }
  }
  const gl = "array", Vi = "map_key", kp = "map_value", db = (t) => {
    if (typeof t == "string" || typeof t == "number") return t;
    throw new Vt("The type of key must be string or number but " + typeof t);
  };
  class ub {
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
      s.type = gl, s.position = 0, s.size = e, s.array = new Array(e);
    }
    pushMapState(e) {
      const s = this.getUninitializedStateFromPool();
      s.type = Vi, s.readCount = 0, s.size = e, s.map = {};
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
      if (e.type === gl) {
        const n = e;
        n.size = 0, n.array = void 0, n.position = 0, n.type = void 0;
      }
      if (e.type === Vi || e.type === kp) {
        const n = e;
        n.size = 0, n.map = void 0, n.readCount = 0, n.type = void 0;
      }
      this.stackHeadPosition--;
    }
    reset() {
      this.stack.length = 0, this.stackHeadPosition = -1;
    }
  }
  const Ci = -1, yd = new DataView(new ArrayBuffer(0)), hb = new Uint8Array(yd.buffer);
  try {
    yd.getInt8(0);
  } catch (t) {
    if (!(t instanceof RangeError)) throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
  }
  const vu = new RangeError("Insufficient data"), fb = new lb();
  class bd {
    constructor(e) {
      this.totalPos = 0, this.pos = 0, this.view = yd, this.bytes = hb, this.headByte = Ci, this.stack = new ub(), this.entered = false, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? fa.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? false, this.rawStrings = (e == null ? void 0 : e.rawStrings) ?? false, this.maxStrLength = (e == null ? void 0 : e.maxStrLength) ?? vi, this.maxBinLength = (e == null ? void 0 : e.maxBinLength) ?? vi, this.maxArrayLength = (e == null ? void 0 : e.maxArrayLength) ?? vi, this.maxMapLength = (e == null ? void 0 : e.maxMapLength) ?? vi, this.maxExtLength = (e == null ? void 0 : e.maxExtLength) ?? vi, this.keyDecoder = (e == null ? void 0 : e.keyDecoder) !== void 0 ? e.keyDecoder : fb, this.mapKeyConverter = (e == null ? void 0 : e.mapKeyConverter) ?? db;
    }
    clone() {
      return new bd({
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
      this.totalPos = 0, this.headByte = Ci, this.stack.reset();
    }
    setBuffer(e) {
      const s = pl(e);
      this.bytes = s, this.view = new DataView(s.buffer, s.byteOffset, s.byteLength), this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte === Ci && !this.hasRemaining(1)) this.setBuffer(e);
      else {
        const s = this.bytes.subarray(this.pos), n = pl(e), r = new Uint8Array(s.length + n.length);
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
        throw new RangeError(`Insufficient data in parsing ${dc(r)} at ${o} (${i} in the current buffer)`);
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
        } else throw new Vt(`Unrecognized type byte: ${dc(e)}`);
        this.complete();
        const n = this.stack;
        for (; n.length > 0; ) {
          const r = n.top();
          if (r.type === gl) if (r.array[r.position] = s, r.position++, r.position === r.size) s = r.array, n.release(r);
          else continue e;
          else if (r.type === Vi) {
            if (s === "__proto__") throw new Vt("The key __proto__ is not allowed");
            r.key = this.mapKeyConverter(s), r.type = kp;
            continue e;
          } else if (r.map[r.key] = s, r.readCount++, r.readCount === r.size) s = r.map, n.release(r);
          else {
            r.key = null, r.type = Vi;
            continue e;
          }
        }
        return s;
      }
    }
    readHeadByte() {
      return this.headByte === Ci && (this.headByte = this.readU8()), this.headByte;
    }
    complete() {
      this.headByte = Ci;
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
          throw new Vt(`Unrecognized array type byte: ${dc(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength) throw new Vt(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      this.stack.pushMapState(e);
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength) throw new Vt(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      this.stack.pushArrayState(e);
    }
    decodeString(e, s) {
      return !this.rawStrings || this.stateIsMapKey() ? this.decodeUtf8String(e, s) : this.decodeBinary(e, s);
    }
    decodeUtf8String(e, s) {
      var _a2;
      if (e > this.maxStrLength) throw new Vt(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      if (this.bytes.byteLength < this.pos + s + e) throw vu;
      const n = this.pos + s;
      let r;
      return this.stateIsMapKey() && ((_a2 = this.keyDecoder) == null ? void 0 : _a2.canBeCached(e)) ? r = this.keyDecoder.decode(this.bytes, n, e) : r = Vy(this.bytes, n, e), this.pos += s + e, r;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack.top().type === Vi : false;
    }
    decodeBinary(e, s) {
      if (e > this.maxBinLength) throw new Vt(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + s)) throw vu;
      const n = this.pos + s, r = this.bytes.subarray(n, n + e);
      return this.pos += s + e, r;
    }
    decodeExtension(e, s) {
      if (e > this.maxExtLength) throw new Vt(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
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
      const e = Ky(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      const e = Op(this.view, this.pos);
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
  function pb(t, e) {
    return new bd(e).decode(t);
  }
  var gb = {};
  const mb = "ReactNative", As = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  }, wb = "js";
  function pa() {
    return typeof cs < "u" && typeof cs.versions < "u" && typeof cs.versions.node < "u";
  }
  function Pr() {
    return !Yt.getDocument() && !!Yt.getNavigator() && navigator.product === mb;
  }
  function yb() {
    return Pr() && typeof fe < "u" && typeof (fe == null ? void 0 : fe.Platform) < "u" && (fe == null ? void 0 : fe.Platform.OS) === "android";
  }
  function bb() {
    return Pr() && typeof fe < "u" && typeof (fe == null ? void 0 : fe.Platform) < "u" && (fe == null ? void 0 : fe.Platform.OS) === "ios";
  }
  function go() {
    return !pa() && !!Yt.getNavigator() && !!Yt.getDocument();
  }
  function Ua() {
    return Pr() ? As.reactNative : pa() ? As.node : go() ? As.browser : As.unknown;
  }
  function Cu() {
    var t;
    try {
      return Pr() && typeof fe < "u" && typeof (fe == null ? void 0 : fe.Application) < "u" ? (t = fe.Application) == null ? void 0 : t.applicationId : void 0;
    } catch {
      return;
    }
  }
  function Eb(t, e) {
    const s = new URLSearchParams(t);
    return Object.entries(e).sort(([n], [r]) => n.localeCompare(r)).forEach(([n, r]) => {
      r != null && s.set(n, String(r));
    }), s.toString();
  }
  function vb() {
    return dp.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function Cb() {
    if (Ua() === As.reactNative && typeof fe < "u" && typeof (fe == null ? void 0 : fe.Platform) < "u") {
      const { OS: s, Version: n } = fe.Platform;
      return [
        s,
        n
      ].join("-");
    }
    const t = Jw();
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
  function Ab() {
    var t;
    const e = Ua();
    return e === As.browser ? [
      e,
      ((t = Yt.getLocation()) == null ? void 0 : t.host) || "unknown"
    ].join(":") : e;
  }
  function Pp(t, e, s) {
    const n = Cb(), r = Ab();
    return [
      [
        t,
        e
      ].join("-"),
      [
        wb,
        s
      ].join("-"),
      n,
      r
    ].join("/");
  }
  function Ib({ protocol: t, version: e, relayUrl: s, sdkVersion: n, auth: r, projectId: i, useOnCloseEvent: o, bundleId: a, packageName: c }) {
    const l = s.split("?"), d = Pp(t, e, n), u = {
      auth: r,
      ua: d,
      projectId: i,
      useOnCloseEvent: o,
      packageName: c || void 0,
      bundleId: a || void 0
    }, h = Eb(l[1] || "", u);
    return l[0] + "?" + h;
  }
  function ml(t) {
    return Object.fromEntries(t.entries());
  }
  function wl(t) {
    return new Map(Object.entries(t));
  }
  function Nb(t = z.FIVE_MINUTES, e) {
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
  function Ds(t, e, s) {
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
  function Rp(t, e) {
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
  function Sb(t) {
    return Rp("topic", t);
  }
  function _b(t) {
    return Rp("id", t);
  }
  function xb(t) {
    const [e, s] = t.split(":"), n = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof s == "string") n.topic = s;
    else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return n;
  }
  function zi(t, e) {
    return z.fromMiliseconds(Date.now() + z.toMiliseconds(t));
  }
  function Au(t) {
    return Date.now() >= z.toMiliseconds(t);
  }
  function uc(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function Iu() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  }
  function $p() {
    return typeof cs < "u" && gb.IS_VITEST === "true";
  }
  function Up(t) {
    return Ie.from(t, "base64").toString("utf-8");
  }
  function Tb(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  const Po = BigInt(2 ** 32 - 1), Nu = BigInt(32);
  function Bp(t, e = false) {
    return e ? {
      h: Number(t & Po),
      l: Number(t >> Nu & Po)
    } : {
      h: Number(t >> Nu & Po) | 0,
      l: Number(t & Po) | 0
    };
  }
  function Dp(t, e = false) {
    const s = t.length;
    let n = new Uint32Array(s), r = new Uint32Array(s);
    for (let i = 0; i < s; i++) {
      const { h: o, l: a } = Bp(t[i], e);
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
  const Su = (t, e, s) => t >>> s, _u = (t, e, s) => t << 32 - s | e >>> s, kn = (t, e, s) => t >>> s | e << 32 - s, Pn = (t, e, s) => t << 32 - s | e >>> s, Bi = (t, e, s) => t << 64 - s | e >>> s - 32, Di = (t, e, s) => t >>> s - 32 | e << 64 - s, Ob = (t, e) => e, kb = (t, e) => t, Pb = (t, e, s) => t << s | e >>> 32 - s, Rb = (t, e, s) => e << s | t >>> 32 - s, $b = (t, e, s) => e << s - 32 | t >>> 64 - s, Ub = (t, e, s) => t << s - 32 | e >>> 64 - s;
  function ws(t, e, s, n) {
    const r = (e >>> 0) + (n >>> 0);
    return {
      h: t + s + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const Ed = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), vd = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, Bb = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), Db = (t, e, s, n, r) => e + s + n + r + (t / 2 ** 32 | 0) | 0, Lb = (t, e, s, n, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0), Mb = (t, e, s, n, r, i) => e + s + n + r + i + (t / 2 ** 32 | 0) | 0, Lr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function Ba(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function pn(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Ns(t, ...e) {
    if (!Ba(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Da(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    pn(t.outputLen), pn(t.blockLen);
  }
  function Kn(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function Cd(t, e) {
    Ns(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function so(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function ls(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function hc(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function Ts(t, e) {
    return t << 32 - e | t >>> e;
  }
  const Lp = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function Mp(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Ys = Lp ? (t) => t : (t) => Mp(t);
  function Fb(t) {
    for (let e = 0; e < t.length; e++) t[e] = Mp(t[e]);
    return t;
  }
  const Rn = Lp ? (t) => t : Fb, Fp = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", qb = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function ti(t) {
    if (Ns(t), Fp) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += qb[t[s]];
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
  function xu(t) {
    if (t >= Hs._0 && t <= Hs._9) return t - Hs._0;
    if (t >= Hs.A && t <= Hs.F) return t - (Hs.A - 10);
    if (t >= Hs.a && t <= Hs.f) return t - (Hs.a - 10);
  }
  function ga(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Fp) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = xu(t.charCodeAt(i)), a = xu(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function qp(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function Is(t) {
    return typeof t == "string" && (t = qp(t)), Ns(t), t;
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
  let La = class {
  };
  function mo(t) {
    const e = (n) => t().update(Is(n)).digest(), s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
  }
  function jb(t) {
    const e = (n, r) => t(r).update(Is(n)).digest(), s = t({});
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  function Rr(t = 32) {
    if (Lr && typeof Lr.getRandomValues == "function") return Lr.getRandomValues(new Uint8Array(t));
    if (Lr && typeof Lr.randomBytes == "function") return Uint8Array.from(Lr.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const Wb = BigInt(0), Ai = BigInt(1), Hb = BigInt(2), Vb = BigInt(7), zb = BigInt(256), Kb = BigInt(113), jp = [], Wp = [], Hp = [];
  for (let t = 0, e = Ai, s = 1, n = 0; t < 24; t++) {
    [s, n] = [
      n,
      (2 * s + 3 * n) % 5
    ], jp.push(2 * (5 * n + s)), Wp.push((t + 1) * (t + 2) / 2 % 64);
    let r = Wb;
    for (let i = 0; i < 7; i++) e = (e << Ai ^ (e >> Vb) * Kb) % zb, e & Hb && (r ^= Ai << (Ai << BigInt(i)) - Ai);
    Hp.push(r);
  }
  const Vp = Dp(Hp, true), Gb = Vp[0], Yb = Vp[1], Tu = (t, e, s) => s > 32 ? $b(t, e, s) : Pb(t, e, s), Ou = (t, e, s) => s > 32 ? Ub(t, e, s) : Rb(t, e, s);
  function Zb(t, e = 24) {
    const s = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], u = Tu(l, d, 1) ^ s[a], h = Ou(l, d, 1) ^ s[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= u, t[o + f + 1] ^= h;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = Wp[o], c = Tu(r, i, a), l = Ou(r, i, a), d = jp[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) s[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
      }
      t[0] ^= Gb[n], t[1] ^= Yb[n];
    }
    ls(s);
  }
  let Jb = class zp extends La {
    constructor(e, s, n, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = r, this.rounds = i, pn(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = so(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Rn(this.state32), Zb(this.state32, this.rounds), Rn(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      Kn(this), e = Is(e), Ns(e);
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
      Kn(this, false), Ns(e), this.finish();
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
      return pn(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Cd(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, ls(this.state);
    }
    _cloneInto(e) {
      const { blockLen: s, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new zp(s, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  };
  const Xb = (t, e, s) => mo(() => new Jb(e, t, s));
  Xb(1, 136, 256 / 8);
  function Qb(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i), c = n ? 4 : 0, l = n ? 0 : 4;
    t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
  }
  function e1(t, e, s) {
    return t & e ^ ~t & s;
  }
  function t1(t, e, s) {
    return t & e ^ t & s ^ e & s;
  }
  let Kp = class extends La {
    constructor(e, s, n, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = hc(this.buffer);
    }
    update(e) {
      Kn(this), e = Is(e), Ns(e);
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
      Kn(this), Cd(e, this), this.finished = true;
      const { buffer: s, view: n, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      s[o++] = 128, ls(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(n, 0), o = 0);
      for (let u = o; u < r; u++) s[u] = 0;
      Qb(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = hc(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let u = 0; u < l; u++) a.setUint32(4 * u, d[u], i);
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
  const yn = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), dt = Uint32Array.from([
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
  ]), ut = Uint32Array.from([
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
  ]), s1 = Uint32Array.from([
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
  ]), bn = new Uint32Array(64);
  let n1 = class extends Kp {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = yn[0] | 0, this.B = yn[1] | 0, this.C = yn[2] | 0, this.D = yn[3] | 0, this.E = yn[4] | 0, this.F = yn[5] | 0, this.G = yn[6] | 0, this.H = yn[7] | 0;
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
      for (let u = 0; u < 16; u++, s += 4) bn[u] = e.getUint32(s, false);
      for (let u = 16; u < 64; u++) {
        const h = bn[u - 15], f = bn[u - 2], g = Ts(h, 7) ^ Ts(h, 18) ^ h >>> 3, p = Ts(f, 17) ^ Ts(f, 19) ^ f >>> 10;
        bn[u] = p + bn[u - 7] + g + bn[u - 16] | 0;
      }
      let { A: n, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let u = 0; u < 64; u++) {
        const h = Ts(a, 6) ^ Ts(a, 11) ^ Ts(a, 25), f = d + h + e1(a, c, l) + s1[u] + bn[u] | 0, g = (Ts(n, 2) ^ Ts(n, 13) ^ Ts(n, 22)) + t1(n, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = n, n = f + g | 0;
      }
      n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, r, i, o, a, c, l, d);
    }
    roundClean() {
      ls(bn);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), ls(this.buffer);
    }
  };
  const Gp = Dp([
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
  ].map((t) => BigInt(t))), r1 = Gp[0], i1 = Gp[1], En = new Uint32Array(80), vn = new Uint32Array(80);
  let Ad = class extends Kp {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = ut[0] | 0, this.Al = ut[1] | 0, this.Bh = ut[2] | 0, this.Bl = ut[3] | 0, this.Ch = ut[4] | 0, this.Cl = ut[5] | 0, this.Dh = ut[6] | 0, this.Dl = ut[7] | 0, this.Eh = ut[8] | 0, this.El = ut[9] | 0, this.Fh = ut[10] | 0, this.Fl = ut[11] | 0, this.Gh = ut[12] | 0, this.Gl = ut[13] | 0, this.Hh = ut[14] | 0, this.Hl = ut[15] | 0;
    }
    get() {
      const { Ah: e, Al: s, Bh: n, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: u, Fl: h, Gh: f, Gl: g, Hh: p, Hl: m } = this;
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
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = u | 0, this.Fl = h | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = m | 0;
    }
    process(e, s) {
      for (let A = 0; A < 16; A++, s += 4) En[A] = e.getUint32(s), vn[A] = e.getUint32(s += 4);
      for (let A = 16; A < 80; A++) {
        const N = En[A - 15] | 0, P = vn[A - 15] | 0, U = kn(N, P, 1) ^ kn(N, P, 8) ^ Su(N, P, 7), B = Pn(N, P, 1) ^ Pn(N, P, 8) ^ _u(N, P, 7), L = En[A - 2] | 0, O = vn[A - 2] | 0, D = kn(L, O, 19) ^ Bi(L, O, 61) ^ Su(L, O, 6), M = Pn(L, O, 19) ^ Di(L, O, 61) ^ _u(L, O, 6), _ = Bb(B, M, vn[A - 7], vn[A - 16]), y = Db(_, U, D, En[A - 7], En[A - 16]);
        En[A] = y | 0, vn[A] = _ | 0;
      }
      let { Ah: n, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: u, El: h, Fh: f, Fl: g, Gh: p, Gl: m, Hh: x, Hl: T } = this;
      for (let A = 0; A < 80; A++) {
        const N = kn(u, h, 14) ^ kn(u, h, 18) ^ Bi(u, h, 41), P = Pn(u, h, 14) ^ Pn(u, h, 18) ^ Di(u, h, 41), U = u & f ^ ~u & p, B = h & g ^ ~h & m, L = Lb(T, P, B, i1[A], vn[A]), O = Mb(L, x, N, U, r1[A], En[A]), D = L | 0, M = kn(n, r, 28) ^ Bi(n, r, 34) ^ Bi(n, r, 39), _ = Pn(n, r, 28) ^ Di(n, r, 34) ^ Di(n, r, 39), y = n & i ^ n & a ^ i & a, E = r & o ^ r & c ^ o & c;
        x = p | 0, T = m | 0, p = f | 0, m = g | 0, f = u | 0, g = h | 0, { h: u, l: h } = ws(l | 0, d | 0, O | 0, D | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = n | 0, o = r | 0;
        const w = Ed(D, _, E);
        n = vd(w, O, M, y), r = w | 0;
      }
      ({ h: n, l: r } = ws(this.Ah | 0, this.Al | 0, n | 0, r | 0)), { h: i, l: o } = ws(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = ws(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = ws(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h: u, l: h } = ws(this.Eh | 0, this.El | 0, u | 0, h | 0), { h: f, l: g } = ws(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: m } = ws(this.Gh | 0, this.Gl | 0, p | 0, m | 0), { h: x, l: T } = ws(this.Hh | 0, this.Hl | 0, x | 0, T | 0), this.set(n, r, i, o, a, c, l, d, u, h, f, g, p, m, x, T);
    }
    roundClean() {
      ls(En, vn);
    }
    destroy() {
      ls(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }, o1 = class extends Ad {
    constructor() {
      super(48), this.Ah = dt[0] | 0, this.Al = dt[1] | 0, this.Bh = dt[2] | 0, this.Bl = dt[3] | 0, this.Ch = dt[4] | 0, this.Cl = dt[5] | 0, this.Dh = dt[6] | 0, this.Dl = dt[7] | 0, this.Eh = dt[8] | 0, this.El = dt[9] | 0, this.Fh = dt[10] | 0, this.Fl = dt[11] | 0, this.Gh = dt[12] | 0, this.Gl = dt[13] | 0, this.Hh = dt[14] | 0, this.Hl = dt[15] | 0;
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
  let a1 = class extends Ad {
    constructor() {
      super(32), this.Ah = ht[0] | 0, this.Al = ht[1] | 0, this.Bh = ht[2] | 0, this.Bl = ht[3] | 0, this.Ch = ht[4] | 0, this.Cl = ht[5] | 0, this.Dh = ht[6] | 0, this.Dl = ht[7] | 0, this.Eh = ht[8] | 0, this.El = ht[9] | 0, this.Fh = ht[10] | 0, this.Fl = ht[11] | 0, this.Gh = ht[12] | 0, this.Gl = ht[13] | 0, this.Hh = ht[14] | 0, this.Hl = ht[15] | 0;
    }
  };
  const Yp = mo(() => new n1()), c1 = mo(() => new Ad()), l1 = mo(() => new o1());
  mo(() => new a1());
  const d1 = Uint8Array.from([
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
  ]), te = new Uint32Array(32);
  function Cn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = te[2 * t], l = te[2 * t + 1], d = te[2 * e], u = te[2 * e + 1], h = te[2 * s], f = te[2 * s + 1], g = te[2 * n], p = te[2 * n + 1], m = Ed(c, d, o);
    l = vd(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: Ob(p, g),
      Dl: kb(p)
    }, { h: f, l: h } = ws(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: kn(u, d, 24),
      Bl: Pn(u, d, 24)
    }, te[2 * t] = c, te[2 * t + 1] = l, te[2 * e] = d, te[2 * e + 1] = u, te[2 * s] = h, te[2 * s + 1] = f, te[2 * n] = g, te[2 * n + 1] = p;
  }
  function An(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = te[2 * t], l = te[2 * t + 1], d = te[2 * e], u = te[2 * e + 1], h = te[2 * s], f = te[2 * s + 1], g = te[2 * n], p = te[2 * n + 1], m = Ed(c, d, o);
    l = vd(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: kn(p, g, 16),
      Dl: Pn(p, g, 16)
    }, { h: f, l: h } = ws(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: Bi(u, d, 63),
      Bl: Di(u, d, 63)
    }, te[2 * t] = c, te[2 * t + 1] = l, te[2 * e] = d, te[2 * e + 1] = u, te[2 * s] = h, te[2 * s + 1] = f, te[2 * n] = g, te[2 * n + 1] = p;
  }
  function u1(t, e = {}, s, n, r) {
    if (pn(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > s)) throw new Error("key length must be undefined or 1.." + s);
    if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  let h1 = class extends La {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, pn(e), pn(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = so(this.buffer);
    }
    update(e) {
      Kn(this), e = Is(e), Ns(e);
      const { blockLen: s, buffer: n, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s && (Rn(r), this.compress(r, 0, false), Rn(r), this.pos = 0);
        const l = Math.min(s - this.pos, i - c), d = o + c;
        if (l === s && !(d % 4) && c + l < i) {
          const u = new Uint32Array(a, d, Math.floor((i - c) / 4));
          Rn(u);
          for (let h = 0; c + s < i; h += r.length, c += s) this.length += s, this.compress(u, h, false);
          Rn(u);
          continue;
        }
        n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      Kn(this), Cd(e, this);
      const { pos: s, buffer32: n } = this;
      this.finished = true, ls(this.buffer.subarray(s)), Rn(n), this.compress(n, 0, true), Rn(n);
      const r = so(e);
      this.get().forEach((i, o) => r[o] = Ys(i));
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
  }, f1 = class extends h1 {
    constructor(e = {}) {
      const s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s), this.v0l = Ke[0] | 0, this.v0h = Ke[1] | 0, this.v1l = Ke[2] | 0, this.v1h = Ke[3] | 0, this.v2l = Ke[4] | 0, this.v2h = Ke[5] | 0, this.v3l = Ke[6] | 0, this.v3h = Ke[7] | 0, this.v4l = Ke[8] | 0, this.v4h = Ke[9] | 0, this.v5l = Ke[10] | 0, this.v5h = Ke[11] | 0, this.v6l = Ke[12] | 0, this.v6h = Ke[13] | 0, this.v7l = Ke[14] | 0, this.v7h = Ke[15] | 0, u1(s, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e, o = 0;
      if (n !== void 0 && (n = Is(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = Is(i);
        const a = so(i);
        this.v4l ^= Ys(a[0]), this.v4h ^= Ys(a[1]), this.v5l ^= Ys(a[2]), this.v5h ^= Ys(a[3]);
      }
      if (r !== void 0) {
        r = Is(r);
        const a = so(r);
        this.v6l ^= Ys(a[0]), this.v6h ^= Ys(a[1]), this.v7l ^= Ys(a[2]), this.v7h ^= Ys(a[3]);
      }
      if (n !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(n), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: s, v1l: n, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: u, v5h: h, v6l: f, v6h: g, v7l: p, v7h: m } = this;
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
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = u | 0, this.v5h = h | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = m | 0;
    }
    compress(e, s, n) {
      this.get().forEach((c, l) => te[l] = c), te.set(Ke, 16);
      let { h: r, l: i } = Bp(BigInt(this.length));
      te[24] = Ke[8] ^ i, te[25] = Ke[9] ^ r, n && (te[28] = ~te[28], te[29] = ~te[29]);
      let o = 0;
      const a = d1;
      for (let c = 0; c < 12; c++) Cn(0, 4, 8, 12, e, s + 2 * a[o++]), An(0, 4, 8, 12, e, s + 2 * a[o++]), Cn(1, 5, 9, 13, e, s + 2 * a[o++]), An(1, 5, 9, 13, e, s + 2 * a[o++]), Cn(2, 6, 10, 14, e, s + 2 * a[o++]), An(2, 6, 10, 14, e, s + 2 * a[o++]), Cn(3, 7, 11, 15, e, s + 2 * a[o++]), An(3, 7, 11, 15, e, s + 2 * a[o++]), Cn(0, 5, 10, 15, e, s + 2 * a[o++]), An(0, 5, 10, 15, e, s + 2 * a[o++]), Cn(1, 6, 11, 12, e, s + 2 * a[o++]), An(1, 6, 11, 12, e, s + 2 * a[o++]), Cn(2, 7, 8, 13, e, s + 2 * a[o++]), An(2, 7, 8, 13, e, s + 2 * a[o++]), Cn(3, 4, 9, 14, e, s + 2 * a[o++]), An(3, 4, 9, 14, e, s + 2 * a[o++]);
      this.v0l ^= te[0] ^ te[16], this.v0h ^= te[1] ^ te[17], this.v1l ^= te[2] ^ te[18], this.v1h ^= te[3] ^ te[19], this.v2l ^= te[4] ^ te[20], this.v2h ^= te[5] ^ te[21], this.v3l ^= te[6] ^ te[22], this.v3h ^= te[7] ^ te[23], this.v4l ^= te[8] ^ te[24], this.v4h ^= te[9] ^ te[25], this.v5l ^= te[10] ^ te[26], this.v5h ^= te[11] ^ te[27], this.v6l ^= te[12] ^ te[28], this.v6h ^= te[13] ^ te[29], this.v7l ^= te[14] ^ te[30], this.v7h ^= te[15] ^ te[31], ls(te);
    }
    destroy() {
      this.destroyed = true, ls(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  jb((t) => new f1(t));
  function Zp(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function yl(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function fc(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Pt(t, ...e) {
    if (!Zp(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function ku(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function p1(t, e) {
    Pt(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function Wn(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function li(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function g1(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const m1 = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function w1(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function bl(t) {
    if (typeof t == "string") t = w1(t);
    else if (Zp(t)) t = El(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function y1(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function b1(t, e) {
    if (t.length !== e.length) return false;
    let s = 0;
    for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
    return s === 0;
  }
  const E1 = (t, e) => {
    function s(n, ...r) {
      if (Pt(n), !m1) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? Pt(l) : Pt(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && Pt(r[1]);
      const o = e(n, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          Pt(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, Pt(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (Pt(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(s, t), s;
  };
  function Pu(t, e, s = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !C1(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function Ru(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i);
    t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
  }
  function v1(t, e, s) {
    yl(s);
    const n = new Uint8Array(16), r = g1(n);
    return Ru(r, 0, BigInt(e), s), Ru(r, 8, BigInt(t), s), n;
  }
  function C1(t) {
    return t.byteOffset % 4 === 0;
  }
  function El(t) {
    return Uint8Array.from(t);
  }
  const Jp = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), A1 = Jp("expand 16-byte k"), I1 = Jp("expand 32-byte k"), N1 = Wn(A1), S1 = Wn(I1);
  function Ne(t, e) {
    return t << e | t >>> 32 - e;
  }
  function vl(t) {
    return t.byteOffset % 4 === 0;
  }
  const Ro = 64, _1 = 16, Xp = 2 ** 32 - 1, $u = new Uint32Array();
  function x1(t, e, s, n, r, i, o, a) {
    const c = r.length, l = new Uint8Array(Ro), d = Wn(l), u = vl(r) && vl(i), h = u ? Wn(r) : $u, f = u ? Wn(i) : $u;
    for (let g = 0; g < c; o++) {
      if (t(e, s, n, d, o, a), o >= Xp) throw new Error("arx: counter overflow");
      const p = Math.min(Ro, c - g);
      if (u && p === Ro) {
        const m = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let x = 0, T; x < _1; x++) T = m + x, f[T] = h[T] ^ d[x];
        g += Ro;
        continue;
      }
      for (let m = 0, x; m < p; m++) x = g + m, i[x] = r[x] ^ l[m];
      g += p;
    }
  }
  function T1(t, e) {
    const { allowShortKeys: s, extendNonceFn: n, counterLength: r, counterRight: i, rounds: o } = y1({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return fc(r), fc(o), yl(i), yl(s), (a, c, l, d, u = 0) => {
      Pt(a), Pt(c), Pt(l);
      const h = l.length;
      if (d === void 0 && (d = new Uint8Array(h)), Pt(d), fc(u), u < 0 || u >= Xp) throw new Error("arx: counter overflow");
      if (d.length < h) throw new Error(`arx: output (${d.length}) is shorter than data (${h})`);
      const f = [];
      let g = a.length, p, m;
      if (g === 32) f.push(p = El(a)), m = S1;
      else if (g === 16 && s) p = new Uint8Array(32), p.set(a), p.set(a, 16), m = N1, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      vl(c) || f.push(c = El(c));
      const x = Wn(p);
      if (n) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        n(m, x, Wn(c.subarray(0, 16)), x), c = c.subarray(16);
      }
      const T = 16 - r;
      if (T !== c.length) throw new Error(`arx: nonce must be ${T} or 16 bytes`);
      if (T !== 12) {
        const N = new Uint8Array(12);
        N.set(c, i ? 0 : 12 - c.length), c = N, f.push(c);
      }
      const A = Wn(c);
      return x1(t, m, x, A, l, d, u, o), li(...f), d;
    };
  }
  const tt = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  let O1 = class {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = bl(e), Pt(e, 32);
      const s = tt(e, 0), n = tt(e, 2), r = tt(e, 4), i = tt(e, 6), o = tt(e, 8), a = tt(e, 10), c = tt(e, 12), l = tt(e, 14);
      this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = tt(e, 16 + 2 * d);
    }
    process(e, s, n = false) {
      const r = n ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], u = o[4], h = o[5], f = o[6], g = o[7], p = o[8], m = o[9], x = tt(e, s + 0), T = tt(e, s + 2), A = tt(e, s + 4), N = tt(e, s + 6), P = tt(e, s + 8), U = tt(e, s + 10), B = tt(e, s + 12), L = tt(e, s + 14);
      let O = i[0] + (x & 8191), D = i[1] + ((x >>> 13 | T << 3) & 8191), M = i[2] + ((T >>> 10 | A << 6) & 8191), _ = i[3] + ((A >>> 7 | N << 9) & 8191), y = i[4] + ((N >>> 4 | P << 12) & 8191), E = i[5] + (P >>> 1 & 8191), w = i[6] + ((P >>> 14 | U << 2) & 8191), v = i[7] + ((U >>> 11 | B << 5) & 8191), I = i[8] + ((B >>> 8 | L << 8) & 8191), k = i[9] + (L >>> 5 | r), C = 0, S = C + O * a + D * (5 * m) + M * (5 * p) + _ * (5 * g) + y * (5 * f);
      C = S >>> 13, S &= 8191, S += E * (5 * h) + w * (5 * u) + v * (5 * d) + I * (5 * l) + k * (5 * c), C += S >>> 13, S &= 8191;
      let R = C + O * c + D * a + M * (5 * m) + _ * (5 * p) + y * (5 * g);
      C = R >>> 13, R &= 8191, R += E * (5 * f) + w * (5 * h) + v * (5 * u) + I * (5 * d) + k * (5 * l), C += R >>> 13, R &= 8191;
      let $ = C + O * l + D * c + M * a + _ * (5 * m) + y * (5 * p);
      C = $ >>> 13, $ &= 8191, $ += E * (5 * g) + w * (5 * f) + v * (5 * h) + I * (5 * u) + k * (5 * d), C += $ >>> 13, $ &= 8191;
      let Y = C + O * d + D * l + M * c + _ * a + y * (5 * m);
      C = Y >>> 13, Y &= 8191, Y += E * (5 * p) + w * (5 * g) + v * (5 * f) + I * (5 * h) + k * (5 * u), C += Y >>> 13, Y &= 8191;
      let K = C + O * u + D * d + M * l + _ * c + y * a;
      C = K >>> 13, K &= 8191, K += E * (5 * m) + w * (5 * p) + v * (5 * g) + I * (5 * f) + k * (5 * h), C += K >>> 13, K &= 8191;
      let j = C + O * h + D * u + M * d + _ * l + y * c;
      C = j >>> 13, j &= 8191, j += E * a + w * (5 * m) + v * (5 * p) + I * (5 * g) + k * (5 * f), C += j >>> 13, j &= 8191;
      let J = C + O * f + D * h + M * u + _ * d + y * l;
      C = J >>> 13, J &= 8191, J += E * c + w * a + v * (5 * m) + I * (5 * p) + k * (5 * g), C += J >>> 13, J &= 8191;
      let Z = C + O * g + D * f + M * h + _ * u + y * d;
      C = Z >>> 13, Z &= 8191, Z += E * l + w * c + v * a + I * (5 * m) + k * (5 * p), C += Z >>> 13, Z &= 8191;
      let de = C + O * p + D * g + M * f + _ * h + y * u;
      C = de >>> 13, de &= 8191, de += E * d + w * l + v * c + I * a + k * (5 * m), C += de >>> 13, de &= 8191;
      let X = C + O * m + D * p + M * g + _ * f + y * h;
      C = X >>> 13, X &= 8191, X += E * u + w * d + v * l + I * c + k * a, C += X >>> 13, X &= 8191, C = (C << 2) + C | 0, C = C + S | 0, S = C & 8191, C = C >>> 13, R += C, i[0] = S, i[1] = R, i[2] = $, i[3] = Y, i[4] = K, i[5] = j, i[6] = J, i[7] = Z, i[8] = de, i[9] = X;
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
      li(n);
    }
    update(e) {
      ku(this), e = bl(e), Pt(e);
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
      li(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      ku(this), p1(e, this), this.finished = true;
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
  function k1(t) {
    const e = (n, r) => t(r).update(bl(n)).digest(), s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  const P1 = k1((t) => new O1(t));
  function R1(t, e, s, n, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], u = e[1], h = e[2], f = e[3], g = e[4], p = e[5], m = e[6], x = e[7], T = r, A = s[0], N = s[1], P = s[2], U = o, B = a, L = c, O = l, D = d, M = u, _ = h, y = f, E = g, w = p, v = m, I = x, k = T, C = A, S = N, R = P;
    for (let Y = 0; Y < i; Y += 2) U = U + D | 0, k = Ne(k ^ U, 16), E = E + k | 0, D = Ne(D ^ E, 12), U = U + D | 0, k = Ne(k ^ U, 8), E = E + k | 0, D = Ne(D ^ E, 7), B = B + M | 0, C = Ne(C ^ B, 16), w = w + C | 0, M = Ne(M ^ w, 12), B = B + M | 0, C = Ne(C ^ B, 8), w = w + C | 0, M = Ne(M ^ w, 7), L = L + _ | 0, S = Ne(S ^ L, 16), v = v + S | 0, _ = Ne(_ ^ v, 12), L = L + _ | 0, S = Ne(S ^ L, 8), v = v + S | 0, _ = Ne(_ ^ v, 7), O = O + y | 0, R = Ne(R ^ O, 16), I = I + R | 0, y = Ne(y ^ I, 12), O = O + y | 0, R = Ne(R ^ O, 8), I = I + R | 0, y = Ne(y ^ I, 7), U = U + M | 0, R = Ne(R ^ U, 16), v = v + R | 0, M = Ne(M ^ v, 12), U = U + M | 0, R = Ne(R ^ U, 8), v = v + R | 0, M = Ne(M ^ v, 7), B = B + _ | 0, k = Ne(k ^ B, 16), I = I + k | 0, _ = Ne(_ ^ I, 12), B = B + _ | 0, k = Ne(k ^ B, 8), I = I + k | 0, _ = Ne(_ ^ I, 7), L = L + y | 0, C = Ne(C ^ L, 16), E = E + C | 0, y = Ne(y ^ E, 12), L = L + y | 0, C = Ne(C ^ L, 8), E = E + C | 0, y = Ne(y ^ E, 7), O = O + D | 0, S = Ne(S ^ O, 16), w = w + S | 0, D = Ne(D ^ w, 12), O = O + D | 0, S = Ne(S ^ O, 8), w = w + S | 0, D = Ne(D ^ w, 7);
    let $ = 0;
    n[$++] = o + U | 0, n[$++] = a + B | 0, n[$++] = c + L | 0, n[$++] = l + O | 0, n[$++] = d + D | 0, n[$++] = u + M | 0, n[$++] = h + _ | 0, n[$++] = f + y | 0, n[$++] = g + E | 0, n[$++] = p + w | 0, n[$++] = m + v | 0, n[$++] = x + I | 0, n[$++] = T + k | 0, n[$++] = A + C | 0, n[$++] = N + S | 0, n[$++] = P + R | 0;
  }
  const $1 = T1(R1, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), U1 = new Uint8Array(16), Uu = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update(U1.subarray(s));
  }, B1 = new Uint8Array(32);
  function Bu(t, e, s, n, r) {
    const i = t(e, s, B1), o = P1.create(i);
    r && Uu(o, r), Uu(o, n);
    const a = v1(n.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return li(i, a), c;
  }
  const D1 = (t) => (e, s, n) => ({
    encrypt(r, i) {
      const o = r.length;
      i = Pu(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      const c = Bu(t, e, s, a, n);
      return i.set(c, o), li(c), i;
    },
    decrypt(r, i) {
      i = Pu(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = Bu(t, e, s, o, n);
      if (!b1(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, s, i, i, 1), li(c), i;
    }
  }), Qp = E1({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, D1($1));
  let eg = class extends La {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, Da(e);
      const n = Is(s);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), ls(i);
    }
    update(e) {
      return Kn(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Kn(this), Ns(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
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
  const Ma = (t, e, s) => new eg(t, e).update(s).digest();
  Ma.create = (t, e) => new eg(t, e);
  function L1(t, e, s) {
    return Da(t), s === void 0 && (s = new Uint8Array(t.outputLen)), Ma(t, Is(s), Is(e));
  }
  const pc = Uint8Array.from([
    0
  ]), Du = Uint8Array.of();
  function M1(t, e, s, n = 32) {
    Da(t), pn(n);
    const r = t.outputLen;
    if (n > 255 * r) throw new Error("Length should be <= 255*HashLen");
    const i = Math.ceil(n / r);
    s === void 0 && (s = Du);
    const o = new Uint8Array(i * r), a = Ma.create(t, e), c = a._cloneInto(), l = new Uint8Array(a.outputLen);
    for (let d = 0; d < i; d++) pc[0] = d + 1, c.update(d === 0 ? Du : l).update(s).update(pc).digestInto(l), o.set(l, r * d), a._cloneInto(c);
    return a.destroy(), c.destroy(), ls(l, pc), o.slice(0, n);
  }
  const F1 = (t, e, s, n, r) => M1(t, L1(t, e, s), n, r), Fa = Yp, Id = BigInt(0), Cl = BigInt(1);
  function ma(t, e = "") {
    if (typeof t != "boolean") {
      const s = e && `"${e}"`;
      throw new Error(s + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function ur(t, e, s = "") {
    const n = Ba(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!n || i && r !== e) {
      const o = s && `"${s}" `, a = i ? ` of length ${e}` : "", c = n ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function $o(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function tg(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Id : BigInt("0x" + t);
  }
  function qa(t) {
    return tg(ti(t));
  }
  function wa(t) {
    return Ns(t), tg(ti(Uint8Array.from(t).reverse()));
  }
  function Nd(t, e) {
    return ga(t.toString(16).padStart(e * 2, "0"));
  }
  function Sd(t, e) {
    return Nd(t, e).reverse();
  }
  function wt(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = ga(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (Ba(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  const gc = (t) => typeof t == "bigint" && Id <= t;
  function q1(t, e, s) {
    return gc(t) && gc(e) && gc(s) && e <= t && t < s;
  }
  function Al(t, e, s, n) {
    if (!q1(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function sg(t) {
    let e;
    for (e = 0; t > Id; t >>= Cl, e += 1) ;
    return e;
  }
  const wo = (t) => (Cl << BigInt(t)) - Cl;
  function j1(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    const n = (h) => new Uint8Array(h), r = (h) => Uint8Array.of(h);
    let i = n(t), o = n(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...h) => s(o, i, ...h), d = (h = n(0)) => {
      o = l(r(0), h), i = l(), h.length !== 0 && (o = l(r(1), h), i = l());
    }, u = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h = 0;
      const f = [];
      for (; h < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), h += i.length;
      }
      return Ln(...f);
    };
    return (h, f) => {
      c(), d(h);
      let g;
      for (; !(g = f(u())); ) d();
      return c(), g;
    };
  }
  function ja(t, e, s = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function n(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => n(r, i, false)), Object.entries(s).forEach(([r, i]) => n(r, i, true));
  }
  function Lu(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  const Bt = BigInt(0), Nt = BigInt(1), hr = BigInt(2), ng = BigInt(3), rg = BigInt(4), ig = BigInt(5), W1 = BigInt(7), og = BigInt(8), H1 = BigInt(9), ag = BigInt(16);
  function zt(t, e) {
    const s = t % e;
    return s >= Bt ? s : e + s;
  }
  function gs(t, e, s) {
    let n = t;
    for (; e-- > Bt; ) n *= n, n %= s;
    return n;
  }
  function Mu(t, e) {
    if (t === Bt) throw new Error("invert: expected non-zero number");
    if (e <= Bt) throw new Error("invert: expected positive modulus, got " + e);
    let s = zt(t, e), n = e, r = Bt, i = Nt;
    for (; s !== Bt; ) {
      const o = n / s, a = n % s, c = r - i * o;
      n = s, s = a, r = i, i = c;
    }
    if (n !== Nt) throw new Error("invert: does not exist");
    return zt(r, e);
  }
  function _d(t, e, s) {
    if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
  }
  function cg(t, e) {
    const s = (t.ORDER + Nt) / rg, n = t.pow(e, s);
    return _d(t, n, e), n;
  }
  function V1(t, e) {
    const s = (t.ORDER - ig) / og, n = t.mul(e, hr), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, hr), r), a = t.mul(i, t.sub(o, t.ONE));
    return _d(t, a, e), a;
  }
  function z1(t) {
    const e = Jn(t), s = lg(t), n = s(e, e.neg(e.ONE)), r = s(e, n), i = s(e, e.neg(n)), o = (t + W1) / ag;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, n);
      const u = a.mul(l, r), h = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(u), c);
      l = a.cmov(l, d, f), d = a.cmov(h, u, g);
      const p = a.eql(a.sqr(d), c), m = a.cmov(l, d, p);
      return _d(a, m, c), m;
    };
  }
  function lg(t) {
    if (t < ng) throw new Error("sqrt is not defined for small field");
    let e = t - Nt, s = 0;
    for (; e % hr === Bt; ) e /= hr, s++;
    let n = hr;
    const r = Jn(t);
    for (; Fu(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return cg;
    let i = r.pow(n, e);
    const o = (e + Nt) / hr;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (Fu(a, c) !== 1) throw new Error("Cannot find square root");
      let l = s, d = a.mul(a.ONE, i), u = a.pow(c, e), h = a.pow(c, o);
      for (; !a.eql(u, a.ONE); ) {
        if (a.is0(u)) return a.ZERO;
        let f = 1, g = a.sqr(u);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = Nt << BigInt(l - f - 1), m = a.pow(d, p);
        l = f, d = a.sqr(m), u = a.mul(u, d), h = a.mul(h, m);
      }
      return h;
    };
  }
  function K1(t) {
    return t % rg === ng ? cg : t % og === ig ? V1 : t % ag === H1 ? z1(t) : lg(t);
  }
  const G1 = [
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
  function Y1(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, s = G1.reduce((n, r) => (n[r] = "function", n), e);
    return ja(t, s), t;
  }
  function Z1(t, e, s) {
    if (s < Bt) throw new Error("invalid exponent, negatives unsupported");
    if (s === Bt) return t.ONE;
    if (s === Nt) return e;
    let n = t.ONE, r = e;
    for (; s > Bt; ) s & Nt && (n = t.mul(n, r)), r = t.sqr(r), s >>= Nt;
    return n;
  }
  function dg(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function Fu(t, e) {
    const s = (t.ORDER - Nt) / hr, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function ug(t, e) {
    e !== void 0 && pn(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Jn(t, e, s = false, n = {}) {
    if (t <= Bt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
      const h = e;
      h.BITS && (r = h.BITS), h.sqrt && (i = h.sqrt), typeof h.isLE == "boolean" && (s = h.isLE), typeof h.modFromBytes == "boolean" && (o = h.modFromBytes), a = h.allowedLengths;
    } else typeof e == "number" && (r = e), n.sqrt && (i = n.sqrt);
    const { nBitLength: c, nByteLength: l } = ug(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const u = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: wo(c),
      ZERO: Bt,
      ONE: Nt,
      allowedLengths: a,
      create: (h) => zt(h, t),
      isValid: (h) => {
        if (typeof h != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof h);
        return Bt <= h && h < t;
      },
      is0: (h) => h === Bt,
      isValidNot0: (h) => !u.is0(h) && u.isValid(h),
      isOdd: (h) => (h & Nt) === Nt,
      neg: (h) => zt(-h, t),
      eql: (h, f) => h === f,
      sqr: (h) => zt(h * h, t),
      add: (h, f) => zt(h + f, t),
      sub: (h, f) => zt(h - f, t),
      mul: (h, f) => zt(h * f, t),
      pow: (h, f) => Z1(u, h, f),
      div: (h, f) => zt(h * Mu(f, t), t),
      sqrN: (h) => h * h,
      addN: (h, f) => h + f,
      subN: (h, f) => h - f,
      mulN: (h, f) => h * f,
      inv: (h) => Mu(h, t),
      sqrt: i || ((h) => (d || (d = K1(t)), d(u, h))),
      toBytes: (h) => s ? Sd(h, l) : Nd(h, l),
      fromBytes: (h, f = true) => {
        if (a) {
          if (!a.includes(h.length) || h.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + h.length);
          const p = new Uint8Array(l);
          p.set(h, s ? 0 : p.length - h.length), h = p;
        }
        if (h.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + h.length);
        let g = s ? wa(h) : qa(h);
        if (o && (g = zt(g, t)), !f && !u.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (h) => dg(u, h),
      cmov: (h, f, g) => g ? f : h
    });
    return Object.freeze(u);
  }
  function hg(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function fg(t) {
    const e = hg(t);
    return e + Math.ceil(e / 2);
  }
  function J1(t, e, s = false) {
    const n = t.length, r = hg(e), i = fg(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? wa(t) : qa(t), a = zt(o, e - Nt) + Nt;
    return s ? Sd(a, r) : Nd(a, r);
  }
  const di = BigInt(0), fr = BigInt(1);
  function ya(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function mc(t, e) {
    const s = dg(t.Fp, e.map((n) => n.Z));
    return e.map((n, r) => t.fromAffine(n.toAffine(s[r])));
  }
  function pg(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function wc(t, e) {
    pg(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = wo(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function qu(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += fr);
    const l = e * n, d = l + Math.abs(a) - 1, u = a === 0, h = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: u,
      isNeg: h,
      isNegF: f,
      offsetF: l
    };
  }
  function X1(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function Q1(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const yc = /* @__PURE__ */ new WeakMap(), gg = /* @__PURE__ */ new WeakMap();
  function bc(t) {
    return gg.get(t) || 1;
  }
  function ju(t) {
    if (t !== di) throw new Error("invalid wNAF");
  }
  let eE = class {
    constructor(e, s) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
    }
    _unsafeLadder(e, s, n = this.ZERO) {
      let r = e;
      for (; s > di; ) s & fr && (n = n.add(r)), r = r.double(), s >>= fr;
      return n;
    }
    precomputeWindow(e, s) {
      const { windows: n, windowSize: r } = wc(s, this.bits), i = [];
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
      const o = wc(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: u, isNegF: h, offsetF: f } = qu(n, a, o);
        n = c, d ? i = i.add(ya(h, s[f])) : r = r.add(ya(u, s[l]));
      }
      return ju(n), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, s, n, r = this.ZERO) {
      const i = wc(e, this.bits);
      for (let o = 0; o < i.windows && n !== di; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = qu(n, o, i);
        if (n = a, !l) {
          const u = s[c];
          r = r.add(d ? u.negate() : u);
        }
      }
      return ju(n), r;
    }
    getPrecomputes(e, s, n) {
      let r = yc.get(s);
      return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (r = n(r)), yc.set(s, r))), r;
    }
    cached(e, s, n) {
      const r = bc(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), s);
    }
    unsafe(e, s, n, r) {
      const i = bc(e);
      return i === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), s, r);
    }
    createCache(e, s) {
      pg(s, this.bits), gg.set(e, s), yc.delete(e);
    }
    hasCache(e) {
      return bc(e) !== 1;
    }
  };
  function tE(t, e, s, n) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; s > di || n > di; ) s & fr && (i = i.add(r)), n & fr && (o = o.add(r)), r = r.double(), s >>= fr, n >>= fr;
    return {
      p1: i,
      p2: o
    };
  }
  function sE(t, e, s, n) {
    X1(s, t), Q1(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = sg(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = wo(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = n[p], x = Number(m >> BigInt(f) & l);
        d[x] = d[x].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function Wu(t, e, s) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return Y1(e), e;
    } else return Jn(t, {
      isLE: s
    });
  }
  function nE(t, e, s = {}, n) {
    if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > di)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = Wu(e.p, s.Fp, n), i = Wu(e.n, s.Fn, n), o = [
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
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), qp("HashToScalar-");
  const Ii = BigInt(0), Mr = BigInt(1), Uo = BigInt(2);
  function rE(t) {
    return ja(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function iE(t) {
    const e = rE(t), { P: s, type: n, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = n === "x25519";
    if (!a && n !== "x448") throw new Error("invalid type");
    const c = o || Rr, l = a ? 255 : 448, d = a ? 32 : 56, u = BigInt(a ? 9 : 5), h = BigInt(a ? 121665 : 39081), f = a ? Uo ** BigInt(254) : Uo ** BigInt(447), g = a ? BigInt(8) * Uo ** BigInt(251) - Mr : BigInt(4) * Uo ** BigInt(445) - Mr, p = f + g + Mr, m = (_) => zt(_, s), x = T(u);
    function T(_) {
      return Sd(m(_), d);
    }
    function A(_) {
      const y = wt("u coordinate", _, d);
      return a && (y[31] &= 127), m(wa(y));
    }
    function N(_) {
      return wa(r(wt("scalar", _, d)));
    }
    function P(_, y) {
      const E = L(A(y), N(_));
      if (E === Ii) throw new Error("invalid private or public key received");
      return T(E);
    }
    function U(_) {
      return P(_, x);
    }
    function B(_, y, E) {
      const w = m(_ * (y - E));
      return y = m(y - w), E = m(E + w), {
        x_2: y,
        x_3: E
      };
    }
    function L(_, y) {
      Al("u", _, Ii, s), Al("scalar", y, f, p);
      const E = y, w = _;
      let v = Mr, I = Ii, k = _, C = Mr, S = Ii;
      for (let $ = BigInt(l - 1); $ >= Ii; $--) {
        const Y = E >> $ & Mr;
        S ^= Y, { x_2: v, x_3: k } = B(S, v, k), { x_2: I, x_3: C } = B(S, I, C), S = Y;
        const K = v + I, j = m(K * K), J = v - I, Z = m(J * J), de = j - Z, X = k + C, ue = k - C, Fe = m(ue * K), We = m(X * J), je = Fe + We, Et = Fe - We;
        k = m(je * je), C = m(w * m(Et * Et)), v = m(j * Z), I = m(de * (j + m(h * de)));
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
      GuBytes: x.slice(),
      lengths: O
    };
  }
  const oE = BigInt(1), Hu = BigInt(2), aE = BigInt(3), cE = BigInt(5);
  BigInt(8);
  const mg = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), lE = {
    p: mg,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function dE(t) {
    const e = BigInt(10), s = BigInt(20), n = BigInt(40), r = BigInt(80), i = mg, o = t * t % i * t % i, a = gs(o, Hu, i) * o % i, c = gs(a, oE, i) * t % i, l = gs(c, cE, i) * c % i, d = gs(l, e, i) * l % i, u = gs(d, s, i) * d % i, h = gs(u, n, i) * u % i, f = gs(h, r, i) * h % i, g = gs(f, r, i) * h % i, p = gs(g, e, i) * l % i;
    return {
      pow_p_5_8: gs(p, Hu, i) * t % i,
      b2: o
    };
  }
  function uE(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const hE = Jn(lE.p, {
    isLE: true
  }), Il = (() => {
    const t = hE.ORDER;
    return iE({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: s, b2: n } = dE(e);
        return zt(gs(s, aE, t) * n, t);
      },
      adjustScalarBytes: uE
    });
  })(), Vu = (t, e) => (t + (t >= 0 ? e : -e) / wg) / e;
  function fE(t, e, s) {
    const [[n, r], [i, o]] = e, a = Vu(o * t, s), c = Vu(-r * t, s);
    let l = t - a * n - c * i, d = -a * r - c * o;
    const u = l < ln, h = d < ln;
    u && (l = -l), h && (d = -d);
    const f = wo(Math.ceil(sg(s) / 2)) + si;
    if (l < ln || l >= f || d < ln || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: u,
      k1: l,
      k2neg: h,
      k2: d
    };
  }
  function Nl(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function Ec(t, e) {
    const s = {};
    for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
    return ma(s.lowS, "lowS"), ma(s.prehash, "prehash"), s.format !== void 0 && Nl(s.format), s;
  }
  let pE = class extends Error {
    constructor(e = "") {
      super(e);
    }
  };
  const sn = {
    Err: pE,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = sn;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = $o(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? $o(r.length / 2 | 128) : "";
        return $o(t) + i + r + e;
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
        if (t < ln) throw new e("integer: negative integers are not allowed");
        let s = $o(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = sn;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return qa(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = sn, r = wt("signature", t), { v: i, l: o } = n.decode(48, r);
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
  }, ln = BigInt(0), si = BigInt(1), wg = BigInt(2), Bo = BigInt(3), gE = BigInt(4);
  function Yr(t, e) {
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
  function mE(t, e = {}) {
    const s = nE("weierstrass", t, e), { Fp: n, Fn: r } = s;
    let i = s.CURVE;
    const { h: o, n: a } = i;
    ja(e, {}, {
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
    const l = bg(n, r);
    function d() {
      if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function u(_, y, E) {
      const { x: w, y: v } = y.toAffine(), I = n.toBytes(w);
      if (ma(E, "isCompressed"), E) {
        d();
        const k = !n.isOdd(v);
        return Ln(yg(k), I);
      } else return Ln(Uint8Array.of(4), I, n.toBytes(v));
    }
    function h(_) {
      ur(_, void 0, "Point");
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
    const f = e.toBytes || u, g = e.fromBytes || h;
    function p(_) {
      const y = n.sqr(_), E = n.mul(y, _);
      return n.add(n.add(E, n.mul(_, i.a)), i.b);
    }
    function m(_, y) {
      const E = n.sqr(y), w = p(_);
      return n.eql(E, w);
    }
    if (!m(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const x = n.mul(n.pow(i.a, Bo), gE), T = n.mul(n.sqr(i.b), BigInt(27));
    if (n.is0(n.add(x, T))) throw new Error("bad curve params: a or b");
    function A(_, y, E = false) {
      if (!n.isValid(y) || E && n.is0(y)) throw new Error(`bad point coordinate ${_}`);
      return y;
    }
    function N(_) {
      if (!(_ instanceof O)) throw new Error("ProjectivePoint expected");
    }
    function P(_) {
      if (!c || !c.basises) throw new Error("no endo");
      return fE(_, c.basises, r.ORDER);
    }
    const U = Lu((_, y) => {
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
    }), B = Lu((_) => {
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
      return E = new O(n.mul(E.X, _), E.Y, E.Z), y = ya(w, y), E = ya(v, E), y.add(E);
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
        const E = O.fromAffine(g(ur(y, void 0, "point")));
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
        return M.createCache(this, y), E || this.multiply(Bo), this;
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
        const { a: y, b: E } = i, w = n.mul(E, Bo), { X: v, Y: I, Z: k } = this;
        let C = n.ZERO, S = n.ZERO, R = n.ZERO, $ = n.mul(v, v), Y = n.mul(I, I), K = n.mul(k, k), j = n.mul(v, I);
        return j = n.add(j, j), R = n.mul(v, k), R = n.add(R, R), C = n.mul(y, R), S = n.mul(w, K), S = n.add(C, S), C = n.sub(Y, S), S = n.add(Y, S), S = n.mul(C, S), C = n.mul(j, C), R = n.mul(w, R), K = n.mul(y, K), j = n.sub($, K), j = n.mul(y, j), j = n.add(j, R), R = n.add($, $), $ = n.add(R, $), $ = n.add($, K), $ = n.mul($, j), S = n.add(S, $), K = n.mul(I, k), K = n.add(K, K), $ = n.mul(K, j), C = n.sub(C, $), R = n.mul(K, Y), R = n.add(R, R), R = n.add(R, R), new O(C, S, R);
      }
      add(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y;
        let S = n.ZERO, R = n.ZERO, $ = n.ZERO;
        const Y = i.a, K = n.mul(i.b, Bo);
        let j = n.mul(E, I), J = n.mul(w, k), Z = n.mul(v, C), de = n.add(E, w), X = n.add(I, k);
        de = n.mul(de, X), X = n.add(j, J), de = n.sub(de, X), X = n.add(E, v);
        let ue = n.add(I, C);
        return X = n.mul(X, ue), ue = n.add(j, Z), X = n.sub(X, ue), ue = n.add(w, v), S = n.add(k, C), ue = n.mul(ue, S), S = n.add(J, Z), ue = n.sub(ue, S), $ = n.mul(Y, X), S = n.mul(K, Z), $ = n.add(S, $), S = n.sub(J, $), $ = n.add(J, $), R = n.mul(S, $), J = n.add(j, j), J = n.add(J, j), Z = n.mul(Y, Z), X = n.mul(K, X), J = n.add(J, Z), Z = n.sub(j, Z), Z = n.mul(Y, Z), X = n.add(X, Z), j = n.mul(J, X), R = n.add(R, j), j = n.mul(ue, X), S = n.mul(de, S), S = n.sub(S, j), j = n.mul(de, J), $ = n.mul(ue, $), $ = n.add($, j), new O(S, R, $);
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
        const I = (k) => M.cached(this, k, (C) => mc(O, C));
        if (E) {
          const { k1neg: k, k1: C, k2neg: S, k2: R } = P(y), { p: $, f: Y } = I(C), { p: K, f: j } = I(R);
          v = Y.add(j), w = L(E.beta, $, K, k, S);
        } else {
          const { p: k, f: C } = I(y);
          w = k, v = C;
        }
        return mc(O, [
          w,
          v
        ])[0];
      }
      multiplyUnsafe(y) {
        const { endo: E } = e, w = this;
        if (!r.isValid(y)) throw new Error("invalid scalar: out of range");
        if (y === ln || w.is0()) return O.ZERO;
        if (y === si) return w;
        if (M.hasCache(this)) return this.multiply(y);
        if (E) {
          const { k1neg: v, k1: I, k2neg: k, k2: C } = P(y), { p1: S, p2: R } = tE(O, w, I, C);
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
        return o === si ? true : y ? y(O, this) : M.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: y } = e;
        return o === si ? this : y ? y(O, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(y = true) {
        return ma(y, "isCompressed"), this.assertValidity(), f(O, this, y);
      }
      toHex(y = true) {
        return ti(this.toBytes(y));
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
        return mc(O, y);
      }
      static msm(y, E) {
        return sE(O, r, y, E);
      }
      static fromPrivateKey(y) {
        return O.BASE.multiply(Yr(r, y));
      }
    }
    O.BASE = new O(i.Gx, i.Gy, n.ONE), O.ZERO = new O(n.ZERO, n.ONE, n.ZERO), O.Fp = n, O.Fn = r;
    const D = r.BITS, M = new eE(O, e.endo ? Math.ceil(D / 2) : D);
    return O.BASE.precompute(8), O;
  }
  function yg(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function bg(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function wE(t, e = {}) {
    const { Fn: s } = t, n = e.randomBytes || Rr, r = Object.assign(bg(t.Fp, s), {
      seed: fg(s.ORDER)
    });
    function i(h) {
      try {
        return !!Yr(s, h);
      } catch {
        return false;
      }
    }
    function o(h, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const m = h.length;
        return f === true && m !== g || f === false && m !== p ? false : !!t.fromBytes(h);
      } catch {
        return false;
      }
    }
    function a(h = n(r.seed)) {
      return J1(ur(h, r.seed, "seed"), s.ORDER);
    }
    function c(h, f = true) {
      return t.BASE.multiply(Yr(s, h)).toBytes(f);
    }
    function l(h) {
      const f = a(h);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(h) {
      if (typeof h == "bigint") return false;
      if (h instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (s.allowedLengths || f === g) return;
      const m = wt("key", h).length;
      return m === g || m === p;
    }
    function u(h, f, g = true) {
      if (d(h) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = Yr(s, h);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: u,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (h) => Yr(s, h),
        precompute(h = 8, f = t.BASE) {
          return f.precompute(h, false);
        }
      },
      lengths: r
    });
  }
  function yE(t, e, s = {}) {
    Da(e), ja(s, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const n = s.randomBytes || Rr, r = s.hmac || ((E, ...w) => Ma(e, E, Ln(...w))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: u, utils: h, lengths: f } = wE(t, s), g = {
      prehash: false,
      lowS: typeof s.lowS == "boolean" ? s.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function m(E) {
      const w = a >> si;
      return E > w;
    }
    function x(E, w) {
      if (!o.isValidNot0(w)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return w;
    }
    function T(E, w) {
      Nl(w);
      const v = f.signature, I = w === "compact" ? v : w === "recovered" ? v + 1 : void 0;
      return ur(E, I, `${w} signature`);
    }
    class A {
      constructor(w, v, I) {
        this.r = x("r", w), this.s = x("s", v), I != null && (this.recovery = I), Object.freeze(this);
      }
      static fromBytes(w, v = p) {
        T(w, v);
        let I;
        if (v === "der") {
          const { r: R, s: $ } = sn.toSig(ur(w));
          return new A(R, $);
        }
        v === "recovered" && (I = w[0], v = "compact", w = w.subarray(1));
        const k = o.BYTES, C = w.subarray(0, k), S = w.subarray(k, k * 2);
        return new A(o.fromBytes(C), o.fromBytes(S), I);
      }
      static fromHex(w, v) {
        return this.fromBytes(ga(w), v);
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
        if (a * wg < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const S = C === 2 || C === 3 ? I + a : I;
        if (!i.isValid(S)) throw new Error("recovery id 2 or 3 invalid");
        const R = i.toBytes(S), $ = t.fromBytes(Ln(yg((C & 1) === 0), R)), Y = o.inv(S), K = P(wt("msgHash", w)), j = o.create(-K * Y), J = o.create(k * Y), Z = t.BASE.multiplyUnsafe(j).add($.multiplyUnsafe(J));
        if (Z.is0()) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return m(this.s);
      }
      toBytes(w = p) {
        if (Nl(w), w === "der") return ga(sn.hexFromSig(this));
        const v = o.toBytes(this.r), I = o.toBytes(this.s);
        if (w === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return Ln(Uint8Array.of(this.recovery), v, I);
        }
        return Ln(v, I);
      }
      toHex(w) {
        return ti(this.toBytes(w));
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
        return ti(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return ti(this.toBytes("compact"));
      }
    }
    const N = s.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const w = qa(E), v = E.length * 8 - c;
      return v > 0 ? w >> BigInt(v) : w;
    }, P = s.bits2int_modN || function(E) {
      return o.create(N(E));
    }, U = wo(c);
    function B(E) {
      return Al("num < 2^" + c, E, ln, U), o.toBytes(E);
    }
    function L(E, w) {
      return ur(E, void 0, "message"), w ? ur(e(E), void 0, "prehashed message") : E;
    }
    function O(E, w, v) {
      if ([
        "recovered",
        "canonical"
      ].some((J) => J in v)) throw new Error("sign() legacy options not supported");
      const { lowS: I, prehash: k, extraEntropy: C } = Ec(v, g);
      E = L(E, k);
      const S = P(E), R = Yr(o, w), $ = [
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
        const de = o.inv(Z), X = t.BASE.multiply(Z).toAffine(), ue = o.create(X.x);
        if (ue === ln) return;
        const Fe = o.create(de * o.create(K + ue * R));
        if (Fe === ln) return;
        let We = (X.x === ue ? 0 : 2) | Number(X.y & si), je = Fe;
        return I && m(Fe) && (je = o.neg(Fe), We ^= 1), new A(ue, je, We);
      }
      return {
        seed: Y,
        k2sig: j
      };
    }
    function D(E, w, v = {}) {
      E = wt("message", E);
      const { seed: I, k2sig: k } = O(E, w, v);
      return j1(e.outputLen, o.BYTES, r)(I, k);
    }
    function M(E) {
      let w;
      const v = typeof E == "string" || Ba(E), I = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !I) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (I) w = new A(E.r, E.s);
      else if (v) {
        try {
          w = A.fromBytes(wt("sig", E), "der");
        } catch (k) {
          if (!(k instanceof sn.Err)) throw k;
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
      const { lowS: k, prehash: C, format: S } = Ec(I, g);
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
      const { prehash: I } = Ec(v, g);
      return w = L(w, I), A.fromBytes(E, "recovered").recoverPublicKey(w).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: u,
      utils: h,
      lengths: f,
      Point: t,
      sign: D,
      verify: _,
      recoverPublicKey: y,
      Signature: A,
      hash: e
    });
  }
  function bE(t) {
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
  function EE(t) {
    const { CURVE: e, curveOpts: s } = bE(t), n = {
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
  function vE(t, e) {
    const s = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: s,
      CURVE: Object.assign({}, t, ug(s.Fn.ORDER, s.Fn.BITS))
    });
  }
  function CE(t) {
    const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: r } = EE(t), i = mE(e, s), o = yE(i, n, r);
    return vE(t, o);
  }
  function Sl(t, e) {
    const s = (n) => CE({
      ...t,
      hash: n
    });
    return {
      ...s(e),
      create: s
    };
  }
  const Eg = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, vg = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, Cg = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, AE = Jn(Eg.p), IE = Jn(vg.p), NE = Jn(Cg.p), SE = Sl({
    ...Eg,
    Fp: AE,
    lowS: false
  }, Yp);
  Sl({
    ...vg,
    Fp: IE,
    lowS: false
  }, l1), Sl({
    ...Cg,
    Fp: NE,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, c1);
  const _E = SE, Ag = "base10", St = "base16", vr = "base64pad", xd = "base64url", yo = "utf8", Ig = 0, wi = 1, Wa = 2, xE = 0, zu = 1, Ki = 12, Td = 32;
  function TE() {
    const t = Il.utils.randomPrivateKey(), e = Il.getPublicKey(t);
    return {
      privateKey: bt(t, St),
      publicKey: bt(e, St)
    };
  }
  function _l() {
    const t = Rr(Td);
    return bt(t, St);
  }
  function OE(t, e) {
    const s = Il.getSharedSecret(Ut(t, St), Ut(e, St)), n = F1(Fa, s, void 0, void 0, Td);
    return bt(n, St);
  }
  function kE(t) {
    const e = Fa(Ut(t, St));
    return bt(e, St);
  }
  function ta(t) {
    const e = Fa(Ut(t, yo));
    return bt(e, St);
  }
  function Ng(t) {
    return Ut(`${t}`, Ag);
  }
  function Nr(t) {
    return Number(bt(t, Ag));
  }
  function Sg(t) {
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function _g(t) {
    const e = t.replace(/-/g, "+").replace(/_/g, "/"), s = (4 - e.length % 4) % 4;
    return e + "=".repeat(s);
  }
  function PE(t) {
    const e = Ng(typeof t.type < "u" ? t.type : Ig);
    if (Nr(e) === wi && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const s = typeof t.senderPublicKey < "u" ? Ut(t.senderPublicKey, St) : void 0, n = typeof t.iv < "u" ? Ut(t.iv, St) : Rr(Ki), r = Ut(t.symKey, St), i = Qp(r, n).encrypt(Ut(t.message, yo)), o = xg({
      type: e,
      sealed: i,
      iv: n,
      senderPublicKey: s
    });
    return t.encoding === xd ? Sg(o) : o;
  }
  function RE(t) {
    const e = Ut(t.symKey, St), { sealed: s, iv: n } = no({
      encoded: t.encoded,
      encoding: t.encoding
    }), r = Qp(e, n).decrypt(s);
    if (r === null) throw new Error("Failed to decrypt");
    return bt(r, yo);
  }
  function $E(t, e) {
    const s = Ng(Wa), n = Rr(Ki), r = Ut(t, yo), i = xg({
      type: s,
      sealed: r,
      iv: n
    });
    return e === xd ? Sg(i) : i;
  }
  function UE(t, e) {
    const { sealed: s } = no({
      encoded: t,
      encoding: e
    });
    return bt(s, yo);
  }
  function xg(t) {
    if (Nr(t.type) === Wa) return bt(Wi([
      t.type,
      t.sealed
    ]), vr);
    if (Nr(t.type) === wi) {
      if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      return bt(Wi([
        t.type,
        t.senderPublicKey,
        t.iv,
        t.sealed
      ]), vr);
    }
    return bt(Wi([
      t.type,
      t.iv,
      t.sealed
    ]), vr);
  }
  function no(t) {
    const e = (t.encoding || vr) === xd ? _g(t.encoded) : t.encoded, s = Ut(e, vr), n = s.slice(xE, zu), r = zu;
    if (Nr(n) === wi) {
      const c = r + Td, l = c + Ki, d = s.slice(r, c), u = s.slice(c, l), h = s.slice(l);
      return {
        type: n,
        sealed: h,
        iv: u,
        senderPublicKey: d
      };
    }
    if (Nr(n) === Wa) {
      const c = s.slice(r), l = Rr(Ki);
      return {
        type: n,
        sealed: c,
        iv: l
      };
    }
    const i = r + Ki, o = s.slice(r, i), a = s.slice(i);
    return {
      type: n,
      sealed: a,
      iv: o
    };
  }
  function BE(t, e) {
    const s = no({
      encoded: t,
      encoding: e == null ? void 0 : e.encoding
    });
    return Tg({
      type: Nr(s.type),
      senderPublicKey: typeof s.senderPublicKey < "u" ? bt(s.senderPublicKey, St) : void 0,
      receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    });
  }
  function Tg(t) {
    const e = (t == null ? void 0 : t.type) || Ig;
    if (e === wi) {
      if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
      if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
    }
    return {
      type: e,
      senderPublicKey: t == null ? void 0 : t.senderPublicKey,
      receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    };
  }
  function Ku(t) {
    return t.type === wi && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
  }
  function Gu(t) {
    return t.type === Wa;
  }
  function DE(t) {
    const e = Ie.from(t.x, "base64"), s = Ie.from(t.y, "base64");
    return Wi([
      new Uint8Array([
        4
      ]),
      e,
      s
    ]);
  }
  function LE(t, e) {
    const [s, n, r] = t.split("."), i = Ie.from(_g(r), "base64");
    if (i.length !== 64) throw new Error("Invalid signature length");
    const o = i.slice(0, 32), a = i.slice(32, 64), c = `${s}.${n}`, l = Fa(c), d = DE(e);
    if (!_E.verify(Wi([
      o,
      a
    ]), l, d)) throw new Error("Invalid signature");
    return ol(t).payload;
  }
  const ME = "irn";
  function ba(t) {
    return (t == null ? void 0 : t.relay) || {
      protocol: ME
    };
  }
  function Zr(t) {
    const e = Zw[t];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e;
  }
  var FE = Object.defineProperty, qE = Object.defineProperties, jE = Object.getOwnPropertyDescriptors, Yu = Object.getOwnPropertySymbols, WE = Object.prototype.hasOwnProperty, HE = Object.prototype.propertyIsEnumerable, Zu = (t, e, s) => e in t ? FE(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, vc = (t, e) => {
    for (var s in e || (e = {})) WE.call(e, s) && Zu(t, s, e[s]);
    if (Yu) for (var s of Yu(e)) HE.call(e, s) && Zu(t, s, e[s]);
    return t;
  }, VE = (t, e) => qE(t, jE(e));
  function zE(t, e = "-") {
    const s = {}, n = "relay" + e;
    return Object.keys(t).forEach((r) => {
      if (r.startsWith(n)) {
        const i = r.replace(n, ""), o = t[r];
        s[i] = o;
      }
    }), s;
  }
  function Ju(t) {
    if (!t.includes("wc:")) {
      const l = Up(t);
      l != null && l.includes("wc:") && (t = l);
    }
    t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e = t.indexOf(":"), s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), r = t.substring(e + 1, s).split("@"), i = typeof s < "u" ? t.substring(s) : "", o = new URLSearchParams(i), a = Object.fromEntries(o.entries()), c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
      protocol: n,
      topic: KE(r[0]),
      version: parseInt(r[1], 10),
      symKey: a.symKey,
      relay: zE(a),
      methods: c,
      expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    };
  }
  function KE(t) {
    return t.startsWith("//") ? t.substring(2) : t;
  }
  function GE(t, e = "-") {
    const s = "relay", n = {};
    return Object.keys(t).forEach((r) => {
      const i = r, o = s + e + i;
      t[i] && (n[o] = t[i]);
    }), n;
  }
  function Xu(t) {
    const e = new URLSearchParams(), s = vc(vc(VE(vc({}, GE(t.relay)), {
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
  const YE = {
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
  }, ZE = {
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
  function Oe(t, e) {
    const { message: s, code: n } = ZE[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Li(t, e) {
    const { message: s, code: n } = YE[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Mi(t) {
    return typeof t > "u";
  }
  function Og(t, e) {
    return typeof t == "string" && !!t.trim().length;
  }
  function JE(t) {
    function e(s) {
      try {
        return typeof new URL(s) < "u";
      } catch {
        return false;
      }
    }
    try {
      if (Og(t, false)) {
        if (e(t)) return true;
        const s = Up(t);
        return e(s);
      }
    } catch {
    }
    return false;
  }
  function XE(t) {
    var e;
    return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
  }
  function QE(t) {
    return t == null ? void 0 : t.topic;
  }
  function Cc(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function Qu() {
    const t = Ua();
    return new Promise((e) => {
      switch (t) {
        case As.browser:
          e(ev());
          break;
        case As.reactNative:
          e(tv());
          break;
        case As.node:
          e(sv());
          break;
        default:
          e(true);
      }
    });
  }
  function ev() {
    return go() && (navigator == null ? void 0 : navigator.onLine);
  }
  async function tv() {
    var _a2;
    return Pr() && typeof fe < "u" && fe != null && fe.NetInfo ? (_a2 = await (fe == null ? void 0 : fe.NetInfo.fetch())) == null ? void 0 : _a2.isConnected : true;
  }
  function sv() {
    return true;
  }
  function nv(t) {
    switch (Ua()) {
      case As.browser:
        rv(t);
        break;
      case As.reactNative:
        iv(t);
        break;
    }
  }
  function rv(t) {
    !Pr() && go() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
  }
  function iv(t) {
    var _a2;
    Pr() && typeof fe < "u" && fe != null && fe.NetInfo && ((_a2 = fe) == null ? void 0 : _a2.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
  }
  function ov() {
    var t;
    return go() && Yt.getDocument() ? ((t = Yt.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : true;
  }
  function av({ logger: t, name: e }) {
    const s = typeof t == "string" ? Ra({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return s.level = typeof t == "string" ? t : t.level, s;
  }
  var cv = {};
  const kg = "wc", Pg = 2, xl = "core", js = `${kg}@2:${xl}:`, lv = {
    logger: "error"
  }, dv = {
    database: ":memory:"
  }, uv = "crypto", eh = "client_ed25519_seed", hv = z.ONE_DAY, fv = "keychain", pv = "0.3", gv = "messages", mv = "0.3", wv = z.SIX_HOURS, yv = "publisher", Rg = "irn", bv = "error", $g = "wss://relay.walletconnect.org", Ev = "relayer", Ve = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
  }, vv = "_subscription", Xt = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
  }, Cv = 0.1, Tl = "2.23.2", Be = {
    link_mode: "link_mode",
    relay: "relay"
  }, sa = {
    inbound: "inbound",
    outbound: "outbound"
  }, Av = "0.3", Iv = "WALLETCONNECT_CLIENT_ID", th = "WALLETCONNECT_LINK_MODE_APPS", Wt = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
  }, Nv = "subscription", Sv = "0.3", _v = "pairing", xv = "0.3", Ni = {
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
  }, ar = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
  }, us = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
  }, Tv = "history", Ov = "0.3", kv = "expirer", rs = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
  }, Pv = "0.3", Rv = "verify-api", $v = "https://verify.walletconnect.com", Ug = "https://verify.walletconnect.org", Gi = Ug, Uv = `${Gi}/v3`, Bv = [
    $v,
    Ug
  ], Dv = "echo", Lv = "https://echo.walletconnect.com", Rs = {
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
  }, Zs = {
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
  }, er = {
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
  }, tr = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve"
  }, Si = {
    no_internet_connection: "no_internet_connection",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
  }, Mv = 0.1, Fv = "event-client", qv = 86400, jv = "https://pulse.walletconnect.org/batch";
  function Wv(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var s = new Uint8Array(256), n = 0; n < s.length; n++) s[n] = 255;
    for (var r = 0; r < t.length; r++) {
      var i = t.charAt(r), o = i.charCodeAt(0);
      if (s[o] !== 255) throw new TypeError(i + " is ambiguous");
      s[o] = r;
    }
    var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
    function u(g) {
      if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (g.length === 0) return "";
      for (var p = 0, m = 0, x = 0, T = g.length; x !== T && g[x] === 0; ) x++, p++;
      for (var A = (T - x) * d + 1 >>> 0, N = new Uint8Array(A); x !== T; ) {
        for (var P = g[x], U = 0, B = A - 1; (P !== 0 || U < m) && B !== -1; B--, U++) P += 256 * N[B] >>> 0, N[B] = P % a >>> 0, P = P / a >>> 0;
        if (P !== 0) throw new Error("Non-zero carry");
        m = U, x++;
      }
      for (var L = A - m; L !== A && N[L] === 0; ) L++;
      for (var O = c.repeat(p); L < A; ++L) O += t.charAt(N[L]);
      return O;
    }
    function h(g) {
      if (typeof g != "string") throw new TypeError("Expected String");
      if (g.length === 0) return new Uint8Array();
      var p = 0;
      if (g[p] !== " ") {
        for (var m = 0, x = 0; g[p] === c; ) m++, p++;
        for (var T = (g.length - p) * l + 1 >>> 0, A = new Uint8Array(T); g[p]; ) {
          var N = s[g.charCodeAt(p)];
          if (N === 255) return;
          for (var P = 0, U = T - 1; (N !== 0 || P < x) && U !== -1; U--, P++) N += a * A[U] >>> 0, A[U] = N % 256 >>> 0, N = N / 256 >>> 0;
          if (N !== 0) throw new Error("Non-zero carry");
          x = P, p++;
        }
        if (g[p] !== " ") {
          for (var B = T - x; B !== T && A[B] === 0; ) B++;
          for (var L = new Uint8Array(m + (T - B)), O = m; B !== T; ) L[O++] = A[B++];
          return L;
        }
      }
    }
    function f(g) {
      var p = h(g);
      if (p) return p;
      throw new Error(`Non-${e} character`);
    }
    return {
      encode: u,
      decodeUnsafe: h,
      decode: f
    };
  }
  var Hv = Wv, Vv = Hv;
  const Bg = (t) => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, zv = (t) => new TextEncoder().encode(t), Kv = (t) => new TextDecoder().decode(t);
  class Gv {
    constructor(e, s, n) {
      this.name = e, this.prefix = s, this.baseEncode = n;
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  }
  class Yv {
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
      return Dg(this, e);
    }
  }
  class Zv {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return Dg(this, e);
    }
    decode(e) {
      const s = e[0], n = this.decoders[s];
      if (n) return n.decode(e);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
  const Dg = (t, e) => new Zv({
    ...t.decoders || {
      [t.prefix]: t
    },
    ...e.decoders || {
      [e.prefix]: e
    }
  });
  let Jv = class {
    constructor(e, s, n, r) {
      this.name = e, this.prefix = s, this.baseEncode = n, this.baseDecode = r, this.encoder = new Gv(e, s, n), this.decoder = new Yv(e, s, r);
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  };
  const Ha = ({ name: t, prefix: e, encode: s, decode: n }) => new Jv(t, e, s, n), bo = ({ prefix: t, name: e, alphabet: s }) => {
    const { encode: n, decode: r } = Vv(s, e);
    return Ha({
      prefix: t,
      name: e,
      encode: n,
      decode: (i) => Bg(r(i))
    });
  }, Xv = (t, e, s, n) => {
    const r = {};
    for (let d = 0; d < e.length; ++d) r[e[d]] = d;
    let i = t.length;
    for (; t[i - 1] === "="; ) --i;
    const o = new Uint8Array(i * s / 8 | 0);
    let a = 0, c = 0, l = 0;
    for (let d = 0; d < i; ++d) {
      const u = r[t[d]];
      if (u === void 0) throw new SyntaxError(`Non-${n} character`);
      c = c << s | u, a += s, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
    }
    if (a >= s || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
    return o;
  }, Qv = (t, e, s) => {
    const n = e[e.length - 1] === "=", r = (1 << s) - 1;
    let i = "", o = 0, a = 0;
    for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > s; ) o -= s, i += e[r & a >> o];
    if (o && (i += e[r & a << s - o]), n) for (; i.length * s & 7; ) i += "=";
    return i;
  }, lt = ({ name: t, prefix: e, bitsPerChar: s, alphabet: n }) => Ha({
    prefix: e,
    name: t,
    encode(r) {
      return Qv(r, n, s);
    },
    decode(r) {
      return Xv(r, n, s, t);
    }
  }), eC = Ha({
    prefix: "\0",
    name: "identity",
    encode: (t) => Kv(t),
    decode: (t) => zv(t)
  });
  var tC = Object.freeze({
    __proto__: null,
    identity: eC
  });
  const sC = lt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });
  var nC = Object.freeze({
    __proto__: null,
    base2: sC
  });
  const rC = lt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });
  var iC = Object.freeze({
    __proto__: null,
    base8: rC
  });
  const oC = bo({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });
  var aC = Object.freeze({
    __proto__: null,
    base10: oC
  });
  const cC = lt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  }), lC = lt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });
  var dC = Object.freeze({
    __proto__: null,
    base16: cC,
    base16upper: lC
  });
  const uC = lt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  }), hC = lt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  }), fC = lt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  }), pC = lt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  }), gC = lt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  }), mC = lt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  }), wC = lt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  }), yC = lt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  }), bC = lt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });
  var EC = Object.freeze({
    __proto__: null,
    base32: uC,
    base32upper: hC,
    base32pad: fC,
    base32padupper: pC,
    base32hex: gC,
    base32hexupper: mC,
    base32hexpad: wC,
    base32hexpadupper: yC,
    base32z: bC
  });
  const vC = bo({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  }), CC = bo({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });
  var AC = Object.freeze({
    __proto__: null,
    base36: vC,
    base36upper: CC
  });
  const IC = bo({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  }), NC = bo({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });
  var SC = Object.freeze({
    __proto__: null,
    base58btc: IC,
    base58flickr: NC
  });
  const _C = lt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  }), xC = lt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  }), TC = lt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  }), OC = lt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });
  var kC = Object.freeze({
    __proto__: null,
    base64: _C,
    base64pad: xC,
    base64url: TC,
    base64urlpad: OC
  });
  const Lg = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), PC = Lg.reduce((t, e, s) => (t[s] = e, t), []), RC = Lg.reduce((t, e, s) => (t[e.codePointAt(0)] = s, t), []);
  function $C(t) {
    return t.reduce((e, s) => (e += PC[s], e), "");
  }
  function UC(t) {
    const e = [];
    for (const s of t) {
      const n = RC[s.codePointAt(0)];
      if (n === void 0) throw new Error(`Non-base256emoji character: ${s}`);
      e.push(n);
    }
    return new Uint8Array(e);
  }
  const BC = Ha({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: $C,
    decode: UC
  });
  var DC = Object.freeze({
    __proto__: null,
    base256emoji: BC
  }), LC = Mg, sh = 128, MC = -128, FC = Math.pow(2, 31);
  function Mg(t, e, s) {
    e = e || [], s = s || 0;
    for (var n = s; t >= FC; ) e[s++] = t & 255 | sh, t /= 128;
    for (; t & MC; ) e[s++] = t & 255 | sh, t >>>= 7;
    return e[s] = t | 0, Mg.bytes = s - n + 1, e;
  }
  var qC = Ol, jC = 128, nh = 127;
  function Ol(t, n) {
    var s = 0, n = n || 0, r = 0, i = n, o, a = t.length;
    do {
      if (i >= a) throw Ol.bytes = 0, new RangeError("Could not decode varint");
      o = t[i++], s += r < 28 ? (o & nh) << r : (o & nh) * Math.pow(2, r), r += 7;
    } while (o >= jC);
    return Ol.bytes = i - n, s;
  }
  var WC = Math.pow(2, 7), HC = Math.pow(2, 14), VC = Math.pow(2, 21), zC = Math.pow(2, 28), KC = Math.pow(2, 35), GC = Math.pow(2, 42), YC = Math.pow(2, 49), ZC = Math.pow(2, 56), JC = Math.pow(2, 63), XC = function(t) {
    return t < WC ? 1 : t < HC ? 2 : t < VC ? 3 : t < zC ? 4 : t < KC ? 5 : t < GC ? 6 : t < YC ? 7 : t < ZC ? 8 : t < JC ? 9 : 10;
  }, QC = {
    encode: LC,
    decode: qC,
    encodingLength: XC
  }, Fg = QC;
  const rh = (t, e, s = 0) => (Fg.encode(t, e, s), e), ih = (t) => Fg.encodingLength(t), kl = (t, e) => {
    const s = e.byteLength, n = ih(t), r = n + ih(s), i = new Uint8Array(r + s);
    return rh(t, i, 0), rh(s, i, n), i.set(e, r), new eA(t, s, e, i);
  };
  let eA = class {
    constructor(e, s, n, r) {
      this.code = e, this.size = s, this.digest = n, this.bytes = r;
    }
  };
  const qg = ({ name: t, code: e, encode: s }) => new tA(t, e, s);
  let tA = class {
    constructor(e, s, n) {
      this.name = e, this.code = s, this.encode = n;
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        const s = this.encode(e);
        return s instanceof Uint8Array ? kl(this.code, s) : s.then((n) => kl(this.code, n));
      } else throw Error("Unknown type, must be binary type");
    }
  };
  const jg = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), sA = qg({
    name: "sha2-256",
    code: 18,
    encode: jg("SHA-256")
  }), nA = qg({
    name: "sha2-512",
    code: 19,
    encode: jg("SHA-512")
  });
  var rA = Object.freeze({
    __proto__: null,
    sha256: sA,
    sha512: nA
  });
  const Wg = 0, iA = "identity", Hg = Bg, oA = (t) => kl(Wg, Hg(t)), aA = {
    code: Wg,
    name: iA,
    encode: Hg,
    digest: oA
  };
  var cA = Object.freeze({
    __proto__: null,
    identity: aA
  });
  new TextEncoder(), new TextDecoder();
  const oh = {
    ...tC,
    ...nC,
    ...iC,
    ...aC,
    ...dC,
    ...EC,
    ...AC,
    ...SC,
    ...kC,
    ...DC
  };
  ({
    ...rA,
    ...cA
  });
  function Vg(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
  }
  function lA(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Vg(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
  }
  function zg(t, e, s, n) {
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
  const ah = zg("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ac = zg("ascii", "a", (t) => {
    let e = "a";
    for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
    return e;
  }, (t) => {
    t = t.substring(1);
    const e = lA(t.length);
    for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
    return e;
  }), dA = {
    utf8: ah,
    "utf-8": ah,
    hex: oh.base16,
    latin1: Ac,
    ascii: Ac,
    binary: Ac,
    ...oh
  };
  function uA(t, e = "utf8") {
    const s = dA[e];
    if (!s) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Vg(globalThis.Buffer.from(t, "utf-8")) : s.decoder.decode(`${s.prefix}${t}`);
  }
  var hA = Object.defineProperty, fA = (t, e, s) => e in t ? hA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Os = (t, e, s) => fA(t, typeof e != "symbol" ? e + "" : e, s);
  let pA = class {
    constructor(e, s) {
      this.core = e, this.logger = s, Os(this, "keychain", /* @__PURE__ */ new Map()), Os(this, "name", fv), Os(this, "version", pv), Os(this, "initialized", false), Os(this, "storagePrefix", js), Os(this, "init", async () => {
        if (!this.initialized) {
          const n = await this.getKeyChain();
          typeof n < "u" && (this.keychain = n), this.initialized = true;
        }
      }), Os(this, "has", (n) => (this.isInitialized(), this.keychain.has(n))), Os(this, "set", async (n, r) => {
        this.isInitialized(), this.keychain.set(n, r), await this.persist();
      }), Os(this, "get", (n) => {
        this.isInitialized();
        const r = this.keychain.get(n);
        if (typeof r > "u") {
          const { message: i } = Oe("NO_MATCHING_KEY", `${this.name}: ${n}`);
          throw new Error(i);
        }
        return r;
      }), Os(this, "del", async (n) => {
        this.isInitialized(), this.keychain.delete(n), await this.persist();
      }), this.core = e, this.logger = Zt(s, this.name);
    }
    get context() {
      return Jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
      await this.core.storage.setItem(this.storageKey, ml(e));
    }
    async getKeyChain() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? wl(e) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var gA = Object.defineProperty, mA = (t, e, s) => e in t ? gA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ze = (t, e, s) => mA(t, typeof e != "symbol" ? e + "" : e, s);
  class wA {
    constructor(e, s, n) {
      this.core = e, this.logger = s, Ze(this, "name", uv), Ze(this, "keychain"), Ze(this, "randomSessionIdentifier", _l()), Ze(this, "initialized", false), Ze(this, "clientId"), Ze(this, "init", async () => {
        this.initialized || (await this.keychain.init(), this.initialized = true);
      }), Ze(this, "hasKeys", (r) => (this.isInitialized(), this.keychain.has(r))), Ze(this, "getClientId", async () => {
        if (this.isInitialized(), this.clientId) return this.clientId;
        const r = await this.getClientSeed(), i = iu(r), o = t0(i.publicKey);
        return this.clientId = o, o;
      }), Ze(this, "generateKeyPair", () => {
        this.isInitialized();
        const r = TE();
        return this.setPrivateKey(r.publicKey, r.privateKey);
      }), Ze(this, "signJWT", async (r) => {
        this.isInitialized();
        const i = await this.getClientSeed(), o = iu(i), a = this.randomSessionIdentifier;
        return await s0(a, r, hv, o);
      }), Ze(this, "generateSharedKey", (r, i, o) => {
        this.isInitialized();
        const a = this.getPrivateKey(r), c = OE(a, i);
        return this.setSymKey(c, o);
      }), Ze(this, "setSymKey", async (r, i) => {
        this.isInitialized();
        const o = i || kE(r);
        return await this.keychain.set(o, r), o;
      }), Ze(this, "deleteKeyPair", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), Ze(this, "deleteSymKey", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), Ze(this, "encode", async (r, i, o) => {
        this.isInitialized();
        const a = Tg(o), c = n0(i);
        if (Gu(a)) return $E(c, o == null ? void 0 : o.encoding);
        if (Ku(a)) {
          const h = a.senderPublicKey, f = a.receiverPublicKey;
          r = await this.generateSharedKey(h, f);
        }
        const l = this.getSymKey(r), { type: d, senderPublicKey: u } = a;
        return PE({
          type: d,
          symKey: l,
          message: c,
          senderPublicKey: u,
          encoding: o == null ? void 0 : o.encoding
        });
      }), Ze(this, "decode", async (r, i, o) => {
        this.isInitialized();
        const a = BE(i, o);
        if (Gu(a)) {
          const c = UE(i, o == null ? void 0 : o.encoding);
          return ou(c);
        }
        if (Ku(a)) {
          const c = a.receiverPublicKey, l = a.senderPublicKey;
          r = await this.generateSharedKey(c, l);
        }
        try {
          const c = this.getSymKey(r), l = RE({
            symKey: c,
            encoded: i,
            encoding: o == null ? void 0 : o.encoding
          });
          return ou(l);
        } catch (c) {
          this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
        }
      }), Ze(this, "getPayloadType", (r, i = vr) => {
        const o = no({
          encoded: r,
          encoding: i
        });
        return Nr(o.type);
      }), Ze(this, "getPayloadSenderPublicKey", (r, i = vr) => {
        const o = no({
          encoded: r,
          encoding: i
        });
        return o.senderPublicKey ? bt(o.senderPublicKey, St) : void 0;
      }), this.core = e, this.logger = Zt(s, this.name), this.keychain = n || new pA(this.core, this.logger);
    }
    get context() {
      return Jt(this.logger);
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
        e = this.keychain.get(eh);
      } catch {
        e = _l(), await this.keychain.set(eh, e);
      }
      return uA(e, "base16");
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var yA = Object.defineProperty, bA = Object.defineProperties, EA = Object.getOwnPropertyDescriptors, ch = Object.getOwnPropertySymbols, vA = Object.prototype.hasOwnProperty, CA = Object.prototype.propertyIsEnumerable, Pl = (t, e, s) => e in t ? yA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, AA = (t, e) => {
    for (var s in e || (e = {})) vA.call(e, s) && Pl(t, s, e[s]);
    if (ch) for (var s of ch(e)) CA.call(e, s) && Pl(t, s, e[s]);
    return t;
  }, IA = (t, e) => bA(t, EA(e)), Ft = (t, e, s) => Pl(t, typeof e != "symbol" ? e + "" : e, s);
  class NA extends Iy {
    constructor(e, s) {
      super(e, s), this.logger = e, this.core = s, Ft(this, "messages", /* @__PURE__ */ new Map()), Ft(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), Ft(this, "name", gv), Ft(this, "version", mv), Ft(this, "initialized", false), Ft(this, "storagePrefix", js), Ft(this, "init", async () => {
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
      }), Ft(this, "set", async (n, r, i) => {
        this.isInitialized();
        const o = ta(r);
        let a = this.messages.get(n);
        if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
        if (a[o] = r, this.messages.set(n, a), i === sa.inbound) {
          const c = this.messagesWithoutClientAck.get(n) || {};
          this.messagesWithoutClientAck.set(n, IA(AA({}, c), {
            [o]: r
          }));
        }
        return await this.persist(), o;
      }), Ft(this, "get", (n) => {
        this.isInitialized();
        let r = this.messages.get(n);
        return typeof r > "u" && (r = {}), r;
      }), Ft(this, "getWithoutAck", (n) => {
        this.isInitialized();
        const r = {};
        for (const i of n) {
          const o = this.messagesWithoutClientAck.get(i) || {};
          r[i] = Object.values(o);
        }
        return r;
      }), Ft(this, "has", (n, r) => {
        this.isInitialized();
        const i = this.get(n), o = ta(r);
        return typeof i[o] < "u";
      }), Ft(this, "ack", async (n, r) => {
        this.isInitialized();
        const i = this.messagesWithoutClientAck.get(n);
        if (typeof i > "u") return;
        const o = ta(r);
        delete i[o], Object.keys(i).length === 0 ? this.messagesWithoutClientAck.delete(n) : this.messagesWithoutClientAck.set(n, i), await this.persist();
      }), Ft(this, "del", async (n) => {
        this.isInitialized(), this.messages.delete(n), this.messagesWithoutClientAck.delete(n), await this.persist();
      }), this.logger = Zt(e, this.name), this.core = s;
    }
    get context() {
      return Jt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get storageKeyWithoutClientAck() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
    }
    async setRelayerMessages(e) {
      await this.core.storage.setItem(this.storageKey, ml(e));
    }
    async setRelayerMessagesWithoutClientAck(e) {
      await this.core.storage.setItem(this.storageKeyWithoutClientAck, ml(e));
    }
    async getRelayerMessages() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? wl(e) : void 0;
    }
    async getRelayerMessagesWithoutClientAck() {
      const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
      return typeof e < "u" ? wl(e) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var SA = Object.defineProperty, _A = Object.defineProperties, xA = Object.getOwnPropertyDescriptors, lh = Object.getOwnPropertySymbols, TA = Object.prototype.hasOwnProperty, OA = Object.prototype.propertyIsEnumerable, Rl = (t, e, s) => e in t ? SA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Fr = (t, e) => {
    for (var s in e || (e = {})) TA.call(e, s) && Rl(t, s, e[s]);
    if (lh) for (var s of lh(e)) OA.call(e, s) && Rl(t, s, e[s]);
    return t;
  }, dh = (t, e) => _A(t, xA(e)), Qt = (t, e, s) => Rl(t, typeof e != "symbol" ? e + "" : e, s);
  let kA = class extends Ny {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, Qt(this, "events", new xr.EventEmitter()), Qt(this, "name", yv), Qt(this, "queue", /* @__PURE__ */ new Map()), Qt(this, "publishTimeout", z.toMiliseconds(z.ONE_MINUTE)), Qt(this, "initialPublishTimeout", z.toMiliseconds(z.ONE_SECOND * 15)), Qt(this, "needsTransportRestart", false), Qt(this, "publish", async (n, r, i) => {
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
        const u = (i == null ? void 0 : i.ttl) || wv, h = (i == null ? void 0 : i.prompt) || false, f = (i == null ? void 0 : i.tag) || 0, g = (i == null ? void 0 : i.id) || dr().toString(), p = Zr(ba().protocol), m = {
          id: g,
          method: (i == null ? void 0 : i.publishMethod) || p.publish,
          params: Fr({
            topic: n,
            message: r,
            ttl: u,
            prompt: h,
            tag: f,
            attestation: i == null ? void 0 : i.attestation
          }, i == null ? void 0 : i.tvf)
        }, x = `Failed to publish payload, please try again. id:${g} tag:${f}`;
        try {
          Mi((o = m.params) == null ? void 0 : o.prompt) && ((a = m.params) == null || delete a.prompt), Mi((c = m.params) == null ? void 0 : c.tag) && ((l = m.params) == null || delete l.tag);
          const T = new Promise(async (A) => {
            const N = ({ id: U }) => {
              var B;
              ((B = m.id) == null ? void 0 : B.toString()) === U.toString() && (this.removeRequestFromQueue(U), this.relayer.events.removeListener(Ve.publish, N), A());
            };
            this.relayer.events.on(Ve.publish, N);
            const P = Ds(new Promise((U, B) => {
              this.rpcPublish(m, i).then(U).catch((L) => {
                this.logger.warn(L, L == null ? void 0 : L.message), B(L);
              });
            }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g} tag:${f}`);
            try {
              await P, this.events.removeListener(Ve.publish, N);
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
          }), await Ds(T, this.publishTimeout, x);
        } catch (T) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(T), (d = i == null ? void 0 : i.internal) != null && d.throwOnFailedPublish) throw T;
        } finally {
          this.queue.delete(g);
        }
      }), Qt(this, "publishCustom", async (n) => {
        var r, i, o, a, c;
        this.logger.debug("Publishing custom payload"), this.logger.trace({
          type: "method",
          method: "publishCustom",
          params: n
        });
        const { payload: l, opts: d = {} } = n, { attestation: u, tvf: h, publishMethod: f, prompt: g, tag: p, ttl: m = z.FIVE_MINUTES } = d, x = d.id || dr().toString(), T = Zr(ba().protocol), A = f || T.publish, N = {
          id: x,
          method: A,
          params: Fr(dh(Fr({}, l), {
            ttl: m,
            prompt: g,
            tag: p,
            attestation: u
          }), h)
        }, P = `Failed to publish custom payload, please try again. id:${x} tag:${p}`;
        try {
          Mi((r = N.params) == null ? void 0 : r.prompt) && ((i = N.params) == null || delete i.prompt), Mi((o = N.params) == null ? void 0 : o.tag) && ((a = N.params) == null || delete a.tag);
          const U = new Promise(async (B) => {
            const L = ({ id: D }) => {
              var M;
              ((M = N.id) == null ? void 0 : M.toString()) === D.toString() && (this.removeRequestFromQueue(D), this.relayer.events.removeListener(Ve.publish, L), B());
            };
            this.relayer.events.on(Ve.publish, L);
            const O = Ds(new Promise((D, M) => {
              this.rpcPublish(N, d).then(D).catch((_) => {
                this.logger.warn(_, _ == null ? void 0 : _.message), M(_);
              });
            }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${A} id:${x} tag:${p}`);
            try {
              await O, this.events.removeListener(Ve.publish, L);
            } catch (D) {
              this.queue.set(x, {
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
              id: x,
              payload: l,
              opts: d
            }
          }), await Ds(U, this.publishTimeout, P);
        } catch (U) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(U), (c = d == null ? void 0 : d.internal) != null && c.throwOnFailedPublish) throw U;
        } finally {
          this.queue.delete(x);
        }
      }), Qt(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Qt(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Qt(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Qt(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.relayer = e, this.logger = Zt(s, this.name), this.registerEventListeners();
    }
    get context() {
      return Jt(this.logger);
    }
    async rpcPublish(e, s) {
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "message",
        direction: "outgoing",
        request: e
      });
      const n = await this.relayer.request(e);
      return this.relayer.events.emit(Ve.publish, Fr(Fr({}, e), s)), this.logger.debug("Successfully Published Payload"), n;
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach(async (e, s) => {
        var n;
        const r = e.attempt + 1;
        this.queue.set(s, dh(Fr({}, e), {
          attempt: r
        })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(n = e.request.params) == null ? void 0 : n.tag}, attempt: ${r}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(mi.pulse, () => {
        if (this.needsTransportRestart) {
          this.needsTransportRestart = false, this.relayer.events.emit(Ve.connection_stalled);
          return;
        }
        this.checkQueue();
      }), this.relayer.on(Ve.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
    }
  };
  var PA = Object.defineProperty, RA = (t, e, s) => e in t ? PA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, qr = (t, e, s) => RA(t, typeof e != "symbol" ? e + "" : e, s);
  class $A {
    constructor() {
      qr(this, "map", /* @__PURE__ */ new Map()), qr(this, "set", (e, s) => {
        const n = this.get(e);
        this.exists(e, s) || this.map.set(e, [
          ...n,
          s
        ]);
      }), qr(this, "get", (e) => this.map.get(e) || []), qr(this, "exists", (e, s) => this.get(e).includes(s)), qr(this, "delete", (e, s) => {
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
      }), qr(this, "clear", () => {
        this.map.clear();
      });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  }
  var UA = Object.defineProperty, BA = Object.defineProperties, DA = Object.getOwnPropertyDescriptors, uh = Object.getOwnPropertySymbols, LA = Object.prototype.hasOwnProperty, MA = Object.prototype.propertyIsEnumerable, $l = (t, e, s) => e in t ? UA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, _i = (t, e) => {
    for (var s in e || (e = {})) LA.call(e, s) && $l(t, s, e[s]);
    if (uh) for (var s of uh(e)) MA.call(e, s) && $l(t, s, e[s]);
    return t;
  }, Ic = (t, e) => BA(t, DA(e)), Pe = (t, e, s) => $l(t, typeof e != "symbol" ? e + "" : e, s);
  class FA extends xy {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, Pe(this, "subscriptions", /* @__PURE__ */ new Map()), Pe(this, "topicMap", new $A()), Pe(this, "events", new xr.EventEmitter()), Pe(this, "name", Nv), Pe(this, "version", Sv), Pe(this, "pending", /* @__PURE__ */ new Map()), Pe(this, "cached", []), Pe(this, "initialized", false), Pe(this, "storagePrefix", js), Pe(this, "subscribeTimeout", z.toMiliseconds(z.ONE_MINUTE)), Pe(this, "initialSubscribeTimeout", z.toMiliseconds(z.ONE_SECOND * 15)), Pe(this, "clientId"), Pe(this, "batchSubscribeTopicsLimit", 500), Pe(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
      }), Pe(this, "subscribe", async (n, r) => {
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
          const o = ba(r), a = {
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
      }), Pe(this, "unsubscribe", async (n, r) => {
        this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(n, r.id, r) : await this.unsubscribeByTopic(n, r);
      }), Pe(this, "isSubscribed", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n));
      })), Pe(this, "isKnownTopic", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n) || this.pending.has(n) || this.cached.some((i) => i.topic === n));
      })), Pe(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Pe(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Pe(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Pe(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), Pe(this, "start", async () => {
        await this.onConnect();
      }), Pe(this, "stop", async () => {
        await this.onDisconnect();
      }), Pe(this, "restart", async () => {
        await this.restore(), await this.onRestart();
      }), Pe(this, "checkPending", async () => {
        if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
        const n = [];
        this.pending.forEach((r) => {
          n.push(r);
        }), await this.batchSubscribe(n);
      }), Pe(this, "registerEventListeners", () => {
        this.relayer.core.heartbeat.on(mi.pulse, async () => {
          await this.checkPending();
        }), this.events.on(Wt.created, async (n) => {
          const r = Wt.created;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        }), this.events.on(Wt.deleted, async (n) => {
          const r = Wt.deleted;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        });
      }), this.relayer = e, this.logger = Zt(s, this.name), this.clientId = "";
    }
    get context() {
      return Jt(this.logger);
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
        const r = ba(n);
        await this.restartToComplete({
          topic: e,
          id: s,
          relay: r
        }), await this.rpcUnsubscribe(e, s, r);
        const i = Li("USER_DISCONNECTED", `${this.name}, ${e}`);
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
      (!n || (n == null ? void 0 : n.transportType) === Be.relay) && await this.restartToComplete({
        topic: e,
        id: e,
        relay: s
      });
      const a = {
        method: Zr(s.protocol).subscribe,
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
        if ((n == null ? void 0 : n.transportType) === Be.link_mode) return setTimeout(() => {
          (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a).catch((u) => this.logger.warn(u));
        }, z.toMiliseconds(z.ONE_SECOND)), o;
        const l = new Promise(async (u) => {
          const h = (f) => {
            f.topic === e && (this.events.removeListener(Wt.created, h), u(f.id));
          };
          this.events.on(Wt.created, h);
          try {
            const f = await Ds(new Promise((g, p) => {
              this.relayer.request(a).catch((m) => {
                this.logger.warn(m, m == null ? void 0 : m.message), p(m);
              }).then(g);
            }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
            this.events.removeListener(Wt.created, h), u(f);
          } catch {
          }
        }), d = await Ds(l, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
        if (!d && c) throw new Error(`Subscribing to ${e} failed, please try again`);
        return d ? o : null;
      } catch (l) {
        if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Ve.connection_stalled), c) throw l;
      }
      return null;
    }
    async rpcBatchSubscribe(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: Zr(s.protocol).batchSubscribe,
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
        await await Ds(new Promise((r) => {
          this.relayer.request(n).catch((i) => this.logger.warn(i)).then(r);
        }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
      } catch {
        this.relayer.events.emit(Ve.connection_stalled);
      }
    }
    async rpcBatchFetchMessages(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: Zr(s.protocol).batchFetchMessages,
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
        r = await await Ds(new Promise((i, o) => {
          this.relayer.request(n).catch((a) => {
            this.logger.warn(a), o(a);
          }).then(i);
        }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
      } catch {
        this.relayer.events.emit(Ve.connection_stalled);
      }
      return r;
    }
    rpcUnsubscribe(e, s, n) {
      const r = {
        method: Zr(n.protocol).unsubscribe,
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
      this.setSubscription(e, Ic(_i({}, s), {
        id: e
      })), this.pending.delete(s.topic);
    }
    onBatchSubscribe(e) {
      e.length && e.forEach((s) => {
        this.setSubscription(s.id, _i({}, s)), this.pending.delete(s.topic);
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
      this.subscriptions.set(e, _i({}, s)), this.topicMap.set(s.topic, e), this.events.emit(Wt.created, s);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"), this.logger.trace({
        type: "method",
        method: "getSubscription",
        id: e
      });
      const s = this.subscriptions.get(e);
      if (!s) {
        const { message: n } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
      this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Wt.deleted, Ic(_i({}, n), {
        reason: s
      }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values), this.events.emit(Wt.sync);
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
      this.events.emit(Wt.resubscribed);
    }
    async restore() {
      try {
        const e = await this.getRelayerSubscriptions();
        if (typeof e > "u" || !e.length) return;
        if (this.subscriptions.size && !e.every((s) => {
          var n;
          return s.topic === ((n = this.subscriptions.get(s.id)) == null ? void 0 : n.topic);
        })) {
          const { message: s } = Oe("RESTORE_WILL_OVERRIDE", this.name);
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
      e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (s) => Ic(_i({}, s), {
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
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
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
      return ta(e + await this.getClientId());
    }
  }
  var qA = Object.defineProperty, hh = Object.getOwnPropertySymbols, jA = Object.prototype.hasOwnProperty, WA = Object.prototype.propertyIsEnumerable, Ul = (t, e, s) => e in t ? qA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, fh = (t, e) => {
    for (var s in e || (e = {})) jA.call(e, s) && Ul(t, s, e[s]);
    if (hh) for (var s of hh(e)) WA.call(e, s) && Ul(t, s, e[s]);
    return t;
  }, Se = (t, e, s) => Ul(t, typeof e != "symbol" ? e + "" : e, s);
  let HA = class extends Sy {
    constructor(e) {
      var s;
      super(e), Se(this, "protocol", "wc"), Se(this, "version", 2), Se(this, "core"), Se(this, "logger"), Se(this, "events", new xr.EventEmitter()), Se(this, "provider"), Se(this, "messages"), Se(this, "subscriber"), Se(this, "publisher"), Se(this, "name", Ev), Se(this, "transportExplicitlyClosed", false), Se(this, "initialized", false), Se(this, "connectionAttemptInProgress", false), Se(this, "relayUrl"), Se(this, "projectId"), Se(this, "packageName"), Se(this, "bundleId"), Se(this, "hasExperiencedNetworkDisruption", false), Se(this, "pingTimeout"), Se(this, "heartBeatTimeout", z.toMiliseconds(z.THIRTY_SECONDS + z.FIVE_SECONDS)), Se(this, "reconnectTimeout"), Se(this, "connectPromise"), Se(this, "reconnectInProgress", false), Se(this, "requestsInFlight", []), Se(this, "connectTimeout", z.toMiliseconds(z.ONE_SECOND * 15)), Se(this, "request", async (n) => {
        var r, i;
        this.logger.debug("Publishing Request Payload");
        const o = n.id || dr().toString();
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
      }), Se(this, "resetPingTimeout", () => {
        pa() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var n, r, i, o;
          try {
            this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o = (i = (r = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : r.socket) == null ? void 0 : i.terminate) == null || o.call(i);
          } catch (a) {
            this.logger.warn(a, a == null ? void 0 : a.message);
          }
        }, this.heartBeatTimeout));
      }), Se(this, "onPayloadHandler", (n) => {
        this.onProviderPayload(n), this.resetPingTimeout();
      }), Se(this, "onConnectHandler", () => {
        this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(Ve.connect);
      }), Se(this, "onDisconnectHandler", () => {
        this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
      }), Se(this, "onProviderErrorHandler", (n) => {
        this.logger.fatal(`Fatal socket error: ${n.message}`), this.events.emit(Ve.error, n), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
      }), Se(this, "registerProviderListeners", () => {
        this.provider.on(Xt.payload, this.onPayloadHandler), this.provider.on(Xt.connect, this.onConnectHandler), this.provider.on(Xt.disconnect, this.onDisconnectHandler), this.provider.on(Xt.error, this.onProviderErrorHandler);
      }), this.core = e.core, this.logger = av({
        logger: (s = e.logger) != null ? s : bv,
        name: this.name
      }), this.messages = new NA(this.logger, e.core), this.subscriber = new FA(this, this.logger), this.publisher = new kA(this, this.logger), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || $g, yb() ? this.packageName = Cu() : bb() && (this.bundleId = Cu()), this.provider = {};
    }
    async init() {
      this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
        this.messages.init(),
        this.subscriber.init()
      ]), this.initialized = true, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
    }
    get context() {
      return Jt(this.logger);
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
        transportType: Be.relay
      }, sa.outbound);
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
        d.topic === e && (this.subscriber.off(Wt.created, l), c());
      };
      return await Promise.all([
        new Promise((d) => {
          c = d, this.subscriber.on(Wt.created, l);
        }),
        new Promise(async (d, u) => {
          a = await this.subscriber.subscribe(e, fh({
            internal: {
              throwOnFailedPublish: o
            }
          }, s)).catch((h) => {
            o && u(h);
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
      this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Ds(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
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
      if (!await Qu()) throw new Error("No internet connection detected. Please restart your network and try again.");
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
        const r = zi(z.FIVE_MINUTES), i = {
          topic: n,
          expiry: r,
          relay: {
            protocol: "irn"
          },
          active: false
        };
        await this.core.pairing.pairings.set(n, i);
      }
      this.events.emit(Ve.message, e), await this.recordMessageEvent(e, sa.inbound);
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
            this.provider.once(Xt.disconnect, i), await Ds(new Promise((o, a) => {
              this.provider.connect().then(o).catch(a);
            }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
              r(o);
            }).finally(() => {
              this.provider.off(Xt.disconnect, i), clearTimeout(this.reconnectTimeout);
            }), await new Promise(async (o, a) => {
              const c = () => {
                r(new Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.once(Xt.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
                this.provider.off(Xt.disconnect, c);
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
      if (pa()) try {
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
      this.provider = new ud(new e0(Ib({
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
        if (!e.method.endsWith(vv)) return;
        const s = e.params, { topic: n, message: r, publishedAt: i, attestation: o } = s.data, a = {
          topic: n,
          message: r,
          publishedAt: i,
          transportType: Be.relay,
          attestation: o
        };
        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(fh({
          type: "event",
          event: s.id
        }, a)), this.events.emit(s.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
      } else fd(e) && this.events.emit(Ve.message_ack, e);
    }
    async onMessageEvent(e) {
      await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, sa.inbound), this.events.emit(Ve.message, e));
    }
    async acknowledgePayload(e) {
      const s = Xi(e.id, true);
      await this.provider.connection.send(s);
    }
    unregisterProviderListeners() {
      this.provider.off(Xt.payload, this.onPayloadHandler), this.provider.off(Xt.connect, this.onConnectHandler), this.provider.off(Xt.disconnect, this.onDisconnectHandler), this.provider.off(Xt.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
      let e = await Qu();
      nv(async (s) => {
        e !== s && (e = s, s ? await this.transportOpen().catch((n) => this.logger.error(n, n == null ? void 0 : n.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
      }), this.core.heartbeat.on(mi.pulse, async () => {
        if (!this.transportExplicitlyClosed && !this.connected && ov()) try {
          await this.confirmOnlineStateOrThrow(), await this.transportOpen();
        } catch (s) {
          this.logger.warn(s, s == null ? void 0 : s.message);
        }
      });
    }
    async onProviderDisconnect() {
      clearTimeout(this.pingTimeout), this.events.emit(Ve.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
        await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
      }, z.toMiliseconds(Cv)))));
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
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
  function VA(t, e) {
    return t === e || Number.isNaN(t) && Number.isNaN(e);
  }
  function ph(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function gh(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const zA = "[object RegExp]", KA = "[object String]", GA = "[object Number]", YA = "[object Boolean]", mh = "[object Arguments]", ZA = "[object Symbol]", JA = "[object Date]", XA = "[object Map]", QA = "[object Set]", eI = "[object Array]", tI = "[object Function]", sI = "[object ArrayBuffer]", Nc = "[object Object]", nI = "[object Error]", rI = "[object DataView]", iI = "[object Uint8Array]", oI = "[object Uint8ClampedArray]", aI = "[object Uint16Array]", cI = "[object Uint32Array]", lI = "[object BigUint64Array]", dI = "[object Int8Array]", uI = "[object Int16Array]", hI = "[object Int32Array]", fI = "[object BigInt64Array]", pI = "[object Float32Array]", gI = "[object Float64Array]";
  function mI() {
  }
  function wh(t) {
    if (!t || typeof t != "object") return false;
    const e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : false;
  }
  function wI(t, e, s) {
    return Fi(t, e, void 0, void 0, void 0, void 0, s);
  }
  function Fi(t, e, s, n, r, i, o) {
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
        return Yi(t, e, i, o);
    }
    return Yi(t, e, i, o);
  }
  function Yi(t, e, s, n) {
    if (Object.is(t, e)) return true;
    let r = gh(t), i = gh(e);
    if (r === mh && (r = Nc), i === mh && (i = Nc), r !== i) return false;
    switch (r) {
      case KA:
        return t.toString() === e.toString();
      case GA: {
        const c = t.valueOf(), l = e.valueOf();
        return VA(c, l);
      }
      case YA:
      case JA:
      case ZA:
        return Object.is(t.valueOf(), e.valueOf());
      case zA:
        return t.source === e.source && t.flags === e.flags;
      case tI:
        return t === e;
    }
    s = s ?? /* @__PURE__ */ new Map();
    const o = s.get(t), a = s.get(e);
    if (o != null && a != null) return o === e;
    s.set(t, e), s.set(e, t);
    try {
      switch (r) {
        case XA: {
          if (t.size !== e.size) return false;
          for (const [c, l] of t.entries()) if (!e.has(c) || !Fi(l, e.get(c), c, t, e, s, n)) return false;
          return true;
        }
        case QA: {
          if (t.size !== e.size) return false;
          const c = Array.from(t.values()), l = Array.from(e.values());
          for (let d = 0; d < c.length; d++) {
            const u = c[d], h = l.findIndex((f) => Fi(u, f, void 0, t, e, s, n));
            if (h === -1) return false;
            l.splice(h, 1);
          }
          return true;
        }
        case eI:
        case iI:
        case oI:
        case aI:
        case cI:
        case lI:
        case dI:
        case uI:
        case hI:
        case fI:
        case pI:
        case gI: {
          if (typeof Ie < "u" && Ie.isBuffer(t) !== Ie.isBuffer(e) || t.length !== e.length) return false;
          for (let c = 0; c < t.length; c++) if (!Fi(t[c], e[c], c, t, e, s, n)) return false;
          return true;
        }
        case sI:
          return t.byteLength !== e.byteLength ? false : Yi(new Uint8Array(t), new Uint8Array(e), s, n);
        case rI:
          return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? false : Yi(new Uint8Array(t), new Uint8Array(e), s, n);
        case nI:
          return t.name === e.name && t.message === e.message;
        case Nc: {
          if (!(Yi(t.constructor, e.constructor, s, n) || wh(t) && wh(e))) return false;
          const c = [
            ...Object.keys(t),
            ...ph(t)
          ], l = [
            ...Object.keys(e),
            ...ph(e)
          ];
          if (c.length !== l.length) return false;
          for (let d = 0; d < c.length; d++) {
            const u = c[d], h = t[u];
            if (!Object.hasOwn(e, u)) return false;
            const f = e[u];
            if (!Fi(h, f, u, t, e, s, n)) return false;
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
  function yI(t, e) {
    return wI(t, e, mI);
  }
  var bI = Object.defineProperty, yh = Object.getOwnPropertySymbols, EI = Object.prototype.hasOwnProperty, vI = Object.prototype.propertyIsEnumerable, Bl = (t, e, s) => e in t ? bI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, bh = (t, e) => {
    for (var s in e || (e = {})) EI.call(e, s) && Bl(t, s, e[s]);
    if (yh) for (var s of yh(e)) vI.call(e, s) && Bl(t, s, e[s]);
    return t;
  }, kt = (t, e, s) => Bl(t, typeof e != "symbol" ? e + "" : e, s);
  let $r = class extends _y {
    constructor(e, s, n, r = js, i = void 0) {
      super(e, s, n, r), this.core = e, this.logger = s, this.name = n, kt(this, "map", /* @__PURE__ */ new Map()), kt(this, "version", Av), kt(this, "cached", []), kt(this, "initialized", false), kt(this, "getKey"), kt(this, "storagePrefix", js), kt(this, "recentlyDeleted", []), kt(this, "recentlyDeletedLimit", 200), kt(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
          this.getKey && o !== null && !Mi(o) ? this.map.set(this.getKey(o), o) : XE(o) ? this.map.set(o.id, o) : QE(o) && this.map.set(o.topic, o);
        }), this.cached = [], this.initialized = true);
      }), kt(this, "set", async (o, a) => {
        this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
          type: "method",
          method: "set",
          key: o,
          value: a
        }), this.map.set(o, a), await this.persist());
      }), kt(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
        type: "method",
        method: "get",
        key: o
      }), this.getData(o))), kt(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => yI(a[c], o[c]))) : this.values)), kt(this, "update", async (o, a) => {
        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
          type: "method",
          method: "update",
          key: o,
          update: a
        });
        const c = bh(bh({}, this.getData(o)), a);
        this.map.set(o, c), await this.persist();
      }), kt(this, "delete", async (o, a) => {
        this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
          type: "method",
          method: "delete",
          key: o,
          reason: a
        }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
      }), this.logger = Zt(s, this.name), this.storagePrefix = r, this.getKey = i;
    }
    get context() {
      return Jt(this.logger);
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
          const { message: r } = Oe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
          throw this.logger.error(r), new Error(r);
        }
        const { message: n } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
          const { message: s } = Oe("RESTORE_WILL_OVERRIDE", this.name);
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
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var CI = Object.defineProperty, AI = (t, e, s) => e in t ? CI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, be = (t, e, s) => AI(t, typeof e != "symbol" ? e + "" : e, s);
  let II = class {
    constructor(e, s) {
      this.core = e, this.logger = s, be(this, "name", _v), be(this, "version", xv), be(this, "events", new pd()), be(this, "pairings"), be(this, "initialized", false), be(this, "storagePrefix", js), be(this, "ignoredPayloadTypes", [
        wi
      ]), be(this, "registeredMethods", []), be(this, "init", async () => {
        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
      }), be(this, "register", ({ methods: n }) => {
        this.isInitialized(), this.registeredMethods = [
          .../* @__PURE__ */ new Set([
            ...this.registeredMethods,
            ...n
          ])
        ];
      }), be(this, "create", async (n) => {
        this.isInitialized();
        const r = _l(), i = await this.core.crypto.setSymKey(r), o = zi(z.FIVE_MINUTES), a = {
          protocol: Rg
        }, c = {
          topic: i,
          expiry: o,
          relay: a,
          active: false,
          methods: n == null ? void 0 : n.methods
        }, l = Xu({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: i,
          symKey: r,
          relay: a,
          expiryTimestamp: o,
          methods: n == null ? void 0 : n.methods
        });
        return this.events.emit(ar.create, c), this.core.expirer.set(i, o), await this.pairings.set(i, c), await this.core.relayer.subscribe(i, {
          transportType: n == null ? void 0 : n.transportType,
          internal: n == null ? void 0 : n.internal
        }), {
          topic: i,
          uri: l
        };
      }), be(this, "pair", async (n) => {
        this.isInitialized();
        const r = this.core.eventClient.createEvent({
          properties: {
            topic: n == null ? void 0 : n.uri,
            trace: [
              Rs.pairing_started
            ]
          }
        });
        this.isValidPair(n, r);
        const { topic: i, symKey: o, relay: a, expiryTimestamp: c, methods: l } = Ju(n.uri);
        r.props.properties.topic = i, r.addTrace(Rs.pairing_uri_validation_success), r.addTrace(Rs.pairing_uri_not_expired);
        let d;
        if (this.pairings.keys.includes(i)) {
          if (d = this.pairings.get(i), r.addTrace(Rs.existing_pairing), d.active) throw r.setError(Zs.active_pairing_already_exists), new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
          r.addTrace(Rs.pairing_not_expired);
        }
        const u = c || zi(z.FIVE_MINUTES), h = {
          topic: i,
          relay: a,
          expiry: u,
          active: false,
          methods: l
        };
        this.core.expirer.set(i, u), await this.pairings.set(i, h), r.addTrace(Rs.store_new_pairing), n.activatePairing && await this.activate({
          topic: i
        }), this.events.emit(ar.create, h), r.addTrace(Rs.emit_inactive_pairing), this.core.crypto.keychain.has(i) || await this.core.crypto.setSymKey(o, i), r.addTrace(Rs.subscribing_pairing_topic);
        try {
          await this.core.relayer.confirmOnlineStateOrThrow();
        } catch {
          r.setError(Zs.no_internet_connection);
        }
        try {
          await this.core.relayer.subscribe(i, {
            relay: a
          });
        } catch (f) {
          throw r.setError(Zs.subscribe_pairing_topic_failure), f;
        }
        return r.addTrace(Rs.subscribe_pairing_topic_success), h;
      }), be(this, "activate", async ({ topic: n }) => {
        this.isInitialized();
        const r = zi(z.FIVE_MINUTES);
        this.core.expirer.set(n, r), await this.pairings.update(n, {
          active: true,
          expiry: r
        });
      }), be(this, "ping", async (n) => {
        this.isInitialized(), await this.isValidPing(n), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
        const { topic: r } = n;
        if (this.pairings.keys.includes(r)) {
          const i = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = Nb();
          this.events.once(uc("pairing_ping", i), ({ error: l }) => {
            l ? c(l) : a();
          }), await o();
        }
      }), be(this, "updateExpiry", async ({ topic: n, expiry: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          expiry: r
        });
      }), be(this, "updateMetadata", async ({ topic: n, metadata: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          peerMetadata: r
        });
      }), be(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), be(this, "disconnect", async (n) => {
        this.isInitialized(), await this.isValidDisconnect(n);
        const { topic: r } = n;
        this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", Li("USER_DISCONNECTED")), await this.deletePairing(r));
      }), be(this, "formatUriFromPairing", (n) => {
        this.isInitialized();
        const { topic: r, relay: i, expiry: o, methods: a } = n, c = this.core.crypto.keychain.get(r);
        return Xu({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: r,
          symKey: c,
          relay: i,
          expiryTimestamp: o,
          methods: a
        });
      }), be(this, "sendRequest", async (n, r, i) => {
        const o = Us(r, i), a = await this.core.crypto.encode(n, o), c = Ni[r].req;
        return this.core.history.set(n, o), this.core.relayer.publish(n, a, c), o.id;
      }), be(this, "sendResult", async (n, r, i) => {
        const o = Xi(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = Ni[c].res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), be(this, "sendError", async (n, r, i) => {
        const o = hp(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = Ni[c] ? Ni[c].res : Ni.unregistered_method.res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), be(this, "deletePairing", async (n, r) => {
        await this.core.relayer.unsubscribe(n), await Promise.all([
          this.pairings.delete(n, Li("USER_DISCONNECTED")),
          this.core.crypto.deleteSymKey(n),
          r ? Promise.resolve() : this.core.expirer.del(n)
        ]);
      }), be(this, "cleanup", async () => {
        const n = this.pairings.getAll().filter((r) => Au(r.expiry));
        await Promise.all(n.map((r) => this.deletePairing(r.topic)));
      }), be(this, "onRelayEventRequest", async (n) => {
        const { topic: r, payload: i } = n;
        switch (i.method) {
          case "wc_pairingPing":
            return await this.onPairingPingRequest(r, i);
          case "wc_pairingDelete":
            return await this.onPairingDeleteRequest(r, i);
          default:
            return await this.onUnknownRpcMethodRequest(r, i);
        }
      }), be(this, "onRelayEventResponse", async (n) => {
        const { topic: r, payload: i } = n, o = (await this.core.history.get(r, i.id)).request.method;
        switch (o) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(r, i);
          default:
            return this.onUnknownRpcMethodResponse(o);
        }
      }), be(this, "onPairingPingRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidPing({
            topic: n
          }), await this.sendResult(i, n, true), this.events.emit(ar.ping, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), be(this, "onPairingPingResponse", (n, r) => {
        const { id: i } = r;
        setTimeout(() => {
          Gs(r) ? this.events.emit(uc("pairing_ping", i), {}) : $s(r) && this.events.emit(uc("pairing_ping", i), {
            error: r.error
          });
        }, 500);
      }), be(this, "onPairingDeleteRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidDisconnect({
            topic: n
          }), await this.deletePairing(n), this.events.emit(ar.delete, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), be(this, "onUnknownRpcMethodRequest", async (n, r) => {
        const { id: i, method: o } = r;
        try {
          if (this.registeredMethods.includes(o)) return;
          const a = Li("WC_METHOD_UNSUPPORTED", o);
          await this.sendError(i, n, a), this.logger.error(a);
        } catch (a) {
          await this.sendError(i, n, a), this.logger.error(a);
        }
      }), be(this, "onUnknownRpcMethodResponse", (n) => {
        this.registeredMethods.includes(n) || this.logger.error(Li("WC_METHOD_UNSUPPORTED", n));
      }), be(this, "isValidPair", (n, r) => {
        var i;
        if (!Cc(n)) {
          const { message: a } = Oe("MISSING_OR_INVALID", `pair() params: ${n}`);
          throw r.setError(Zs.malformed_pairing_uri), new Error(a);
        }
        if (!JE(n.uri)) {
          const { message: a } = Oe("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
          throw r.setError(Zs.malformed_pairing_uri), new Error(a);
        }
        const o = Ju(n == null ? void 0 : n.uri);
        if (!((i = o == null ? void 0 : o.relay) != null && i.protocol)) {
          const { message: a } = Oe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
          throw r.setError(Zs.malformed_pairing_uri), new Error(a);
        }
        if (!(o != null && o.symKey)) {
          const { message: a } = Oe("MISSING_OR_INVALID", "pair() uri#symKey");
          throw r.setError(Zs.malformed_pairing_uri), new Error(a);
        }
        if (o != null && o.expiryTimestamp && z.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
          r.setError(Zs.pairing_expired);
          const { message: a } = Oe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
          throw new Error(a);
        }
      }), be(this, "isValidPing", async (n) => {
        if (!Cc(n)) {
          const { message: i } = Oe("MISSING_OR_INVALID", `ping() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), be(this, "isValidDisconnect", async (n) => {
        if (!Cc(n)) {
          const { message: i } = Oe("MISSING_OR_INVALID", `disconnect() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), be(this, "isValidPairingTopic", async (n) => {
        if (!Og(n)) {
          const { message: r } = Oe("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
          throw new Error(r);
        }
        if (!this.pairings.keys.includes(n)) {
          const { message: r } = Oe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
          throw new Error(r);
        }
        if (Au(this.pairings.get(n).expiry)) {
          await this.deletePairing(n);
          const { message: r } = Oe("EXPIRED", `pairing topic: ${n}`);
          throw new Error(r);
        }
      }), this.core = e, this.logger = Zt(s, this.name), this.pairings = new $r(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
      return Jt(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(Ve.message, async (e) => {
        const { topic: s, message: n, transportType: r } = e;
        if (this.pairings.keys.includes(s) && r !== Be.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))) try {
          const i = await this.core.crypto.decode(s, n);
          hd(i) ? (this.core.history.set(s, i), await this.onRelayEventRequest({
            topic: s,
            payload: i
          })) : fd(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
            topic: s,
            payload: i
          }), this.core.history.delete(s, i.id)), await this.core.relayer.messages.ack(s, n);
        } catch (i) {
          this.logger.error(i);
        }
      });
    }
    registerExpirerEvents() {
      this.core.expirer.on(rs.expired, async (e) => {
        const { topic: s } = xb(e.target);
        s && this.pairings.keys.includes(s) && (await this.deletePairing(s, true), this.events.emit(ar.expire, {
          topic: s
        }));
      });
    }
  };
  var NI = Object.defineProperty, SI = (t, e, s) => e in t ? NI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, st = (t, e, s) => SI(t, typeof e != "symbol" ? e + "" : e, s);
  let _I = class extends Ay {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, st(this, "records", /* @__PURE__ */ new Map()), st(this, "events", new xr.EventEmitter()), st(this, "name", Tv), st(this, "version", Ov), st(this, "cached", []), st(this, "initialized", false), st(this, "storagePrefix", js), st(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), st(this, "set", (n, r, i) => {
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
          expiry: zi(z.THIRTY_DAYS)
        };
        this.records.set(o.id, o), this.persist(), this.events.emit(us.created, o);
      }), st(this, "resolve", async (n) => {
        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
          type: "method",
          method: "update",
          response: n
        }), !this.records.has(n.id)) return;
        const r = await this.getRecord(n.id);
        typeof r.response > "u" && (r.response = $s(n) ? {
          error: n.error
        } : {
          result: n.result
        }, this.records.set(r.id, r), this.persist(), this.events.emit(us.updated, r));
      }), st(this, "get", async (n, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
        type: "method",
        method: "get",
        topic: n,
        id: r
      }), await this.getRecord(r))), st(this, "delete", (n, r) => {
        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
          type: "method",
          method: "delete",
          id: r
        }), this.values.forEach((i) => {
          if (i.topic === n) {
            if (typeof r < "u" && i.id !== r) return;
            this.records.delete(i.id), this.events.emit(us.deleted, i);
          }
        }), this.persist();
      }), st(this, "exists", async (n, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === n : false)), st(this, "on", (n, r) => {
        this.events.on(n, r);
      }), st(this, "once", (n, r) => {
        this.events.once(n, r);
      }), st(this, "off", (n, r) => {
        this.events.off(n, r);
      }), st(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = Zt(s, this.name);
    }
    get context() {
      return Jt(this.logger);
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
          request: Us(s.request.method, s.request.params, s.id),
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
        const { message: n } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(n);
      }
      return s;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(us.sync);
    }
    async restore() {
      try {
        const e = await this.getJsonRpcRecords();
        if (typeof e > "u" || !e.length) return;
        if (this.records.size) {
          const { message: s } = Oe("RESTORE_WILL_OVERRIDE", this.name);
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
      this.events.on(us.created, (e) => {
        const s = us.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(us.updated, (e) => {
        const s = us.updated;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(us.deleted, (e) => {
        const s = us.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.core.heartbeat.on(mi.pulse, () => {
        this.cleanup();
      });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = false;
        this.records.forEach((s) => {
          z.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`), this.records.delete(s.id), this.events.emit(us.deleted, s, false), e = true);
        }), e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var xI = Object.defineProperty, TI = (t, e, s) => e in t ? xI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ft = (t, e, s) => TI(t, typeof e != "symbol" ? e + "" : e, s);
  let OI = class extends Ty {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, ft(this, "expirations", /* @__PURE__ */ new Map()), ft(this, "events", new xr.EventEmitter()), ft(this, "name", kv), ft(this, "version", Pv), ft(this, "cached", []), ft(this, "initialized", false), ft(this, "storagePrefix", js), ft(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), ft(this, "has", (n) => {
        try {
          const r = this.formatTarget(n);
          return typeof this.getExpiration(r) < "u";
        } catch {
          return false;
        }
      }), ft(this, "set", (n, r) => {
        this.isInitialized();
        const i = this.formatTarget(n), o = {
          target: i,
          expiry: r
        };
        this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(rs.created, {
          target: i,
          expiration: o
        });
      }), ft(this, "get", (n) => {
        this.isInitialized();
        const r = this.formatTarget(n);
        return this.getExpiration(r);
      }), ft(this, "del", (n) => {
        if (this.isInitialized(), this.has(n)) {
          const r = this.formatTarget(n), i = this.getExpiration(r);
          this.expirations.delete(r), this.events.emit(rs.deleted, {
            target: r,
            expiration: i
          });
        }
      }), ft(this, "on", (n, r) => {
        this.events.on(n, r);
      }), ft(this, "once", (n, r) => {
        this.events.once(n, r);
      }), ft(this, "off", (n, r) => {
        this.events.off(n, r);
      }), ft(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = Zt(s, this.name);
    }
    get context() {
      return Jt(this.logger);
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
      if (typeof e == "string") return Sb(e);
      if (typeof e == "number") return _b(e);
      const { message: s } = Oe("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(s);
    }
    async setExpirations(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(rs.sync);
    }
    async restore() {
      try {
        const e = await this.getExpirations();
        if (typeof e > "u" || !e.length) return;
        if (this.expirations.size) {
          const { message: s } = Oe("RESTORE_WILL_OVERRIDE", this.name);
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
        const { message: n } = Oe("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.warn(n), new Error(n);
      }
      return s;
    }
    checkExpiry(e, s) {
      const { expiry: n } = s;
      z.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, s);
    }
    expire(e, s) {
      this.expirations.delete(e), this.events.emit(rs.expired, {
        target: e,
        expiration: s
      });
    }
    checkExpirations() {
      this.core.relayer.connected && this.expirations.forEach((e, s) => this.checkExpiry(s, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(mi.pulse, () => this.checkExpirations()), this.events.on(rs.created, (e) => {
        const s = rs.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(rs.expired, (e) => {
        const s = rs.expired;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(rs.deleted, (e) => {
        const s = rs.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = Oe("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  };
  var kI = Object.defineProperty, PI = (t, e, s) => e in t ? kI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, He = (t, e, s) => PI(t, typeof e != "symbol" ? e + "" : e, s);
  let RI = class extends Oy {
    constructor(e, s, n) {
      super(e, s, n), this.core = e, this.logger = s, this.store = n, He(this, "name", Rv), He(this, "abortController"), He(this, "isDevEnv"), He(this, "verifyUrlV3", Uv), He(this, "storagePrefix", js), He(this, "version", Pg), He(this, "publicKey"), He(this, "fetchPromise"), He(this, "init", async () => {
        var r;
        this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && z.toMiliseconds((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
      }), He(this, "register", async (r) => {
        if (!go() || this.isDevEnv) return;
        const i = window.location.origin, { id: o, decryptedId: a } = r, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${i}&id=${o}&decryptedId=${a}`;
        try {
          const l = Yt.getDocument(), d = this.startAbortTimer(z.ONE_SECOND * 5), u = await new Promise((h, f) => {
            const g = () => {
              window.removeEventListener("message", m), l.body.removeChild(p), f("attestation aborted");
            };
            this.abortController.signal.addEventListener("abort", g);
            const p = l.createElement("iframe");
            p.src = c, p.style.display = "none", p.addEventListener("error", g, {
              signal: this.abortController.signal
            });
            const m = (x) => {
              if (x.data && typeof x.data == "string") try {
                const T = JSON.parse(x.data);
                if (T.type === "verify_attestation") {
                  if (ol(T.attestation).payload.id !== o) return;
                  clearInterval(d), l.body.removeChild(p), this.abortController.signal.removeEventListener("abort", g), window.removeEventListener("message", m), h(T.attestation === null ? "" : T.attestation);
                }
              } catch (T) {
                this.logger.warn(T);
              }
            };
            l.body.appendChild(p), window.addEventListener("message", m, {
              signal: this.abortController.signal
            });
          });
          return this.logger.debug(u, "jwt attestation"), u;
        } catch (l) {
          this.logger.warn(l);
        }
        return "";
      }), He(this, "resolve", async (r) => {
        if (this.isDevEnv) return "";
        const { attestationId: i, hash: o, encryptedId: a } = r;
        if (i === "") {
          this.logger.debug("resolve: attestationId is empty, skipping");
          return;
        }
        if (i) {
          if (ol(i).payload.id !== a) return;
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
      }), He(this, "fetchAttestation", async (r, i) => {
        this.logger.debug(`resolving attestation: ${r} from url: ${i}`);
        const o = this.startAbortTimer(z.ONE_SECOND * 5), a = await fetch(`${i}/attestation/${r}?v2Supported=true`, {
          signal: this.abortController.signal
        });
        return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
      }), He(this, "getVerifyUrl", (r) => {
        let i = r || Gi;
        return Bv.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${Gi}`), i = Gi), i;
      }), He(this, "fetchPublicKey", async () => {
        try {
          this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
          const r = this.startAbortTimer(z.FIVE_SECONDS), i = await fetch(`${this.verifyUrlV3}/public-key`, {
            signal: this.abortController.signal
          });
          return clearTimeout(r), await i.json();
        } catch (r) {
          this.logger.warn(r);
        }
      }), He(this, "persistPublicKey", async (r) => {
        this.logger.debug(r, "persisting public key to local storage"), await this.store.setItem(this.storeKey, r), this.publicKey = r;
      }), He(this, "removePublicKey", async () => {
        this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
      }), He(this, "isValidJwtAttestation", async (r) => {
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
      }), He(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), He(this, "fetchAndPersistPublicKey", async () => {
        if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
        this.fetchPromise = new Promise(async (i) => {
          const o = await this.fetchPublicKey();
          o && (await this.persistPublicKey(o), i(o));
        });
        const r = await this.fetchPromise;
        return this.fetchPromise = void 0, r;
      }), He(this, "validateAttestation", (r, i) => {
        const o = LE(r, i.publicKey), a = {
          hasExpired: z.toMiliseconds(o.exp) < Date.now(),
          payload: o
        };
        if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
        return {
          origin: a.payload.origin,
          isScam: a.payload.isScam,
          isVerified: a.payload.isVerified
        };
      }), this.logger = Zt(s, this.name), this.abortController = new AbortController(), this.isDevEnv = $p(), this.init();
    }
    get storeKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
      return Jt(this.logger);
    }
    startAbortTimer(e) {
      return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), z.toMiliseconds(e));
    }
  };
  var $I = Object.defineProperty, UI = (t, e, s) => e in t ? $I(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Eh = (t, e, s) => UI(t, typeof e != "symbol" ? e + "" : e, s);
  let BI = class extends ky {
    constructor(e, s) {
      super(e, s), this.projectId = e, this.logger = s, Eh(this, "context", Dv), Eh(this, "registerDeviceToken", async (n) => {
        const { clientId: r, token: i, notificationType: o, enableEncrypted: a = false } = n, c = `${Lv}/${this.projectId}/clients`;
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
      }), this.logger = Zt(s, this.context);
    }
  };
  var DI = Object.defineProperty, vh = Object.getOwnPropertySymbols, LI = Object.prototype.hasOwnProperty, MI = Object.prototype.propertyIsEnumerable, Dl = (t, e, s) => e in t ? DI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, xi = (t, e) => {
    for (var s in e || (e = {})) LI.call(e, s) && Dl(t, s, e[s]);
    if (vh) for (var s of vh(e)) MI.call(e, s) && Dl(t, s, e[s]);
    return t;
  }, Je = (t, e, s) => Dl(t, typeof e != "symbol" ? e + "" : e, s);
  let FI = class extends Py {
    constructor(e, s, n = true) {
      super(e, s, n), this.core = e, this.logger = s, Je(this, "context", Fv), Je(this, "storagePrefix", js), Je(this, "storageVersion", Mv), Je(this, "events", /* @__PURE__ */ new Map()), Je(this, "shouldPersist", false), Je(this, "init", async () => {
        if (!$p()) try {
          const r = {
            eventId: Iu(),
            timestamp: Date.now(),
            domain: this.getAppDomain(),
            props: {
              event: "INIT",
              type: "",
              properties: {
                client_id: await this.core.crypto.getClientId(),
                user_agent: Pp(this.core.relayer.protocol, this.core.relayer.version, Tl)
              }
            }
          };
          await this.sendEvent([
            r
          ]);
        } catch (r) {
          this.logger.warn(r);
        }
      }), Je(this, "createEvent", (r) => {
        const { event: i = "ERROR", type: o = "", properties: { topic: a, trace: c } } = r, l = Iu(), d = this.core.projectId || "", u = Date.now(), h = xi({
          eventId: l,
          timestamp: u,
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
        return this.telemetryEnabled && (this.events.set(l, h), this.shouldPersist = true), h;
      }), Je(this, "getEvent", (r) => {
        const { eventId: i, topic: o } = r;
        if (i) return this.events.get(i);
        const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
        if (a) return xi(xi({}, a), this.setMethods(a.eventId));
      }), Je(this, "deleteEvent", (r) => {
        const { eventId: i } = r;
        this.events.delete(i), this.shouldPersist = true;
      }), Je(this, "setEventListeners", () => {
        this.core.heartbeat.on(mi.pulse, async () => {
          this.shouldPersist && await this.persist(), this.events.forEach((r) => {
            z.fromMiliseconds(Date.now()) - z.fromMiliseconds(r.timestamp) > qv && (this.events.delete(r.eventId), this.shouldPersist = true);
          });
        });
      }), Je(this, "setMethods", (r) => ({
        addTrace: (i) => this.addTrace(r, i),
        setError: (i) => this.setError(r, i)
      })), Je(this, "addTrace", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.properties.trace.push(i), this.events.set(r, o), this.shouldPersist = true);
      }), Je(this, "setError", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.type = i, o.timestamp = Date.now(), this.events.set(r, o), this.shouldPersist = true);
      }), Je(this, "persist", async () => {
        await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
      }), Je(this, "restore", async () => {
        try {
          const r = await this.core.storage.getItem(this.storageKey) || [];
          if (!r.length) return;
          r.forEach((i) => {
            this.events.set(i.eventId, xi(xi({}, i), this.setMethods(i.eventId)));
          });
        } catch (r) {
          this.logger.warn(r);
        }
      }), Je(this, "submit", async () => {
        if (!this.telemetryEnabled || this.events.size === 0) return;
        const r = [];
        for (const [i, o] of this.events) o.props.type && r.push(o);
        if (r.length !== 0) try {
          if ((await this.sendEvent(r)).ok) for (const i of r) this.events.delete(i.eventId), this.shouldPersist = true;
        } catch (i) {
          this.logger.warn(i);
        }
      }), Je(this, "sendEvent", async (r) => {
        const i = this.getAppDomain() ? "" : "&sp=desktop";
        return await fetch(`${jv}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Tl}${i}`, {
          method: "POST",
          body: JSON.stringify(r)
        });
      }), Je(this, "getAppDomain", () => vb().url), this.logger = Zt(s, this.context), this.telemetryEnabled = n, n ? this.restore().then(async () => {
        await this.submit(), this.setEventListeners();
      }) : this.persist();
    }
    get storageKey() {
      return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
  };
  var qI = Object.defineProperty, Ch = Object.getOwnPropertySymbols, jI = Object.prototype.hasOwnProperty, WI = Object.prototype.propertyIsEnumerable, Ll = (t, e, s) => e in t ? qI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ah = (t, e) => {
    for (var s in e || (e = {})) jI.call(e, s) && Ll(t, s, e[s]);
    if (Ch) for (var s of Ch(e)) WI.call(e, s) && Ll(t, s, e[s]);
    return t;
  }, Re = (t, e, s) => Ll(t, typeof e != "symbol" ? e + "" : e, s);
  let HI = class Kg extends by {
    constructor(e) {
      var s;
      super(e), Re(this, "protocol", kg), Re(this, "version", Pg), Re(this, "name", xl), Re(this, "relayUrl"), Re(this, "projectId"), Re(this, "customStoragePrefix"), Re(this, "events", new xr.EventEmitter()), Re(this, "logger"), Re(this, "heartbeat"), Re(this, "relayer"), Re(this, "crypto"), Re(this, "storage"), Re(this, "history"), Re(this, "expirer"), Re(this, "pairing"), Re(this, "verify"), Re(this, "echoClient"), Re(this, "linkModeSupportedApps"), Re(this, "eventClient"), Re(this, "initialized", false), Re(this, "logChunkController"), Re(this, "on", (a, c) => this.events.on(a, c)), Re(this, "once", (a, c) => this.events.once(a, c)), Re(this, "off", (a, c) => this.events.off(a, c)), Re(this, "removeListener", (a, c) => this.events.removeListener(a, c)), Re(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: l }) => {
        if (!a || !c) return;
        const d = {
          topic: a,
          message: c,
          publishedAt: Date.now(),
          transportType: Be.link_mode
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
      this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || $g, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
      const r = up({
        level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : lv.logger,
        name: xl
      }), { logger: i, chunkLoggerController: o } = Ra({
        opts: r,
        maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes,
        loggerOverride: e == null ? void 0 : e.logger
      });
      this.logChunkController = o, (s = this.logChunkController) != null && s.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
        var a, c;
        (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
          clientId: await this.crypto.getClientId()
        }));
      }), this.logger = Zt(i, this.name), this.heartbeat = new Xw(), this.crypto = new wA(this, this.logger, e == null ? void 0 : e.keychain), this.history = new _I(this, this.logger), this.expirer = new OI(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Qw(Ah(Ah({}, dv), e == null ? void 0 : e.storageOptions)), this.relayer = new HA({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId
      }), this.pairing = new II(this, this.logger), this.verify = new RI(this, this.logger, this.storage), this.echoClient = new BI(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new FI(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
    }
    static async init(e) {
      const s = new Kg(e);
      await s.initialize();
      const n = await s.crypto.getClientId();
      return await s.storage.setItem(Iv, n), s;
    }
    get context() {
      return Jt(this.logger);
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
      this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(th, this.linkModeSupportedApps));
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(th) || [], this.initialized = true, this.logger.info("Core Initialization Success");
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
        return typeof cs < "u" && cv.DISABLE_GLOBAL_CORE === "true";
      } catch {
        return true;
      }
    }
  };
  const VI = HI;
  var zI = Object.defineProperty, KI = (t, e, s) => e in t ? zI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ih = (t, e, s) => KI(t, typeof e != "symbol" ? e + "" : e, s);
  let GI = class {
    constructor(e) {
      this.opts = e, Ih(this, "protocol", "wc"), Ih(this, "version", 2);
    }
  }, YI = class {
    constructor(e) {
      this.client = e;
    }
  };
  const ZI = "0.1.1";
  function JI() {
    return ZI;
  }
  class Me extends Error {
    constructor(e, s = {}) {
      const n = (() => {
        var _a2;
        if (s.cause instanceof Me) {
          if (s.cause.details) return s.cause.details;
          if (s.cause.shortMessage) return s.cause.shortMessage;
        }
        return s.cause && "details" in s.cause && typeof s.cause.details == "string" ? s.cause.details : ((_a2 = s.cause) == null ? void 0 : _a2.message) ? s.cause.message : s.details;
      })(), r = s.cause instanceof Me && s.cause.docsPath || s.docsPath, o = `https://oxlib.sh${r ?? ""}`, a = [
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
        value: `ox@${JI()}`
      }), this.cause = s.cause, this.details = n, this.docs = o, this.docsPath = r, this.shortMessage = e;
    }
    walk(e) {
      return Gg(this, e);
    }
  }
  function Gg(t, e) {
    return (e == null ? void 0 : e(t)) ? t : t && typeof t == "object" && "cause" in t && t.cause ? Gg(t.cause, e) : e ? null : t;
  }
  const Od = BigInt(0), Ml = BigInt(1);
  function Eo(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function kd(t) {
    if (!Eo(t)) throw new Error("Uint8Array expected");
  }
  function ro(t, e) {
    if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
  }
  function Do(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function Yg(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Od : BigInt("0x" + t);
  }
  const Zg = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", XI = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function io(t) {
    if (kd(t), Zg) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += XI[t[s]];
    return e;
  }
  const Vs = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function Nh(t) {
    if (t >= Vs._0 && t <= Vs._9) return t - Vs._0;
    if (t >= Vs.A && t <= Vs.F) return t - (Vs.A - 10);
    if (t >= Vs.a && t <= Vs.f) return t - (Vs.a - 10);
  }
  function Ea(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Zg) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = Nh(t.charCodeAt(i)), a = Nh(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function Cr(t) {
    return Yg(io(t));
  }
  function Jg(t) {
    return kd(t), Yg(io(Uint8Array.from(t).reverse()));
  }
  function vo(t, e) {
    return Ea(t.toString(16).padStart(e * 2, "0"));
  }
  function Xg(t, e) {
    return vo(t, e).reverse();
  }
  function is(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = Ea(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (Eo(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  function va(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      kd(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  const Sc = (t) => typeof t == "bigint" && Od <= t;
  function Pd(t, e, s) {
    return Sc(t) && Sc(e) && Sc(s) && e <= t && t < s;
  }
  function ni(t, e, s, n) {
    if (!Pd(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function QI(t) {
    let e;
    for (e = 0; t > Od; t >>= Ml, e += 1) ;
    return e;
  }
  const Va = (t) => (Ml << BigInt(t)) - Ml, _c = (t) => new Uint8Array(t), Sh = (t) => Uint8Array.from(t);
  function e2(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    let n = _c(t), r = _c(t), i = 0;
    const o = () => {
      n.fill(1), r.fill(0), i = 0;
    }, a = (...u) => s(r, n, ...u), c = (u = _c(0)) => {
      r = a(Sh([
        0
      ]), u), n = a(), u.length !== 0 && (r = a(Sh([
        1
      ]), u), n = a());
    }, l = () => {
      if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let u = 0;
      const h = [];
      for (; u < e; ) {
        n = a();
        const f = n.slice();
        h.push(f), u += n.length;
      }
      return va(...h);
    };
    return (u, h) => {
      o(), c(u);
      let f;
      for (; !(f = h(l())); ) c();
      return o(), f;
    };
  }
  const t2 = {
    bigint: (t) => typeof t == "bigint",
    function: (t) => typeof t == "function",
    boolean: (t) => typeof t == "boolean",
    string: (t) => typeof t == "string",
    stringOrUint8Array: (t) => typeof t == "string" || Eo(t),
    isSafeInteger: (t) => Number.isSafeInteger(t),
    array: (t) => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
  };
  function za(t, e, s = {}) {
    const n = (r, i, o) => {
      const a = t2[i];
      if (typeof a != "function") throw new Error("invalid validator function");
      const c = t[r];
      if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(r) + " is invalid. Expected " + i + ", got " + c);
    };
    for (const [r, i] of Object.entries(e)) n(r, i, false);
    for (const [r, i] of Object.entries(s)) n(r, i, true);
    return t;
  }
  function _h(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  function s2(t, e) {
    if (kh(t) > e) throw new A2({
      givenSize: kh(t),
      maxSize: e
    });
  }
  const zs = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function xh(t) {
    if (t >= zs.zero && t <= zs.nine) return t - zs.zero;
    if (t >= zs.A && t <= zs.F) return t - (zs.A - 10);
    if (t >= zs.a && t <= zs.f) return t - (zs.a - 10);
  }
  function n2(t, e = {}) {
    const { dir: s, size: n = 32 } = e;
    if (n === 0) return t;
    if (t.length > n) throw new I2({
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
  function Qg(t, e) {
    if (Gn(t) > e) throw new f2({
      givenSize: Gn(t),
      maxSize: e
    });
  }
  function r2(t, e) {
    if (typeof e == "number" && e > 0 && e > Gn(t) - 1) throw new sm({
      offset: e,
      position: "start",
      size: Gn(t)
    });
  }
  function i2(t, e, s) {
    if (typeof e == "number" && typeof s == "number" && Gn(t) !== s - e) throw new sm({
      offset: s,
      position: "end",
      size: Gn(t)
    });
  }
  function em(t, e = {}) {
    const { dir: s, size: n = 32 } = e;
    if (n === 0) return t;
    const r = t.replace("0x", "");
    if (r.length > n * 2) throw new p2({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "Hex"
    });
    return `0x${r[s === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
  }
  const o2 = "#__bigint";
  function Rd(t, e, s) {
    return JSON.stringify(t, (n, r) => typeof r == "bigint" ? r.toString() + o2 : r, s);
  }
  const a2 = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function c2(t, e = {}) {
    const { strict: s = false } = e;
    if (!t) throw new Th(t);
    if (typeof t != "string") throw new Th(t);
    if (s && !/^0x[0-9a-fA-F]*$/.test(t)) throw new Oh(t);
    if (!t.startsWith("0x")) throw new Oh(t);
  }
  function l2(...t) {
    return `0x${t.reduce((e, s) => e + s.replace("0x", ""), "")}`;
  }
  function $d(t) {
    return t instanceof Uint8Array ? Ca(t) : Array.isArray(t) ? Ca(new Uint8Array(t)) : t;
  }
  function Ca(t, e = {}) {
    let s = "";
    for (let r = 0; r < t.length; r++) s += a2[t[r]];
    const n = `0x${s}`;
    return typeof e.size == "number" ? (Qg(n, e.size), tm(n, e.size)) : n;
  }
  function xc(t, e = {}) {
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
    return n ? d2(c, n) : c;
  }
  function d2(t, e) {
    return em(t, {
      dir: "left",
      size: e
    });
  }
  function tm(t, e) {
    return em(t, {
      dir: "right",
      size: e
    });
  }
  function en(t, e, s, n = {}) {
    const { strict: r } = n;
    r2(t, e);
    const i = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (s ?? t.length) * 2)}`;
    return r && i2(i, e, s), i;
  }
  function Gn(t) {
    return Math.ceil((t.length - 2) / 2);
  }
  function u2(t, e = {}) {
    const { strict: s = false } = e;
    try {
      return c2(t, {
        strict: s
      }), true;
    } catch {
      return false;
    }
  }
  class h2 extends Me {
    constructor({ max: e, min: s, signed: n, size: r, value: i }) {
      super(`Number \`${i}\` is not in safe${r ? ` ${r * 8}-bit` : ""}${n ? " signed" : " unsigned"} integer range ${e ? `(\`${s}\` to \`${e}\`)` : `(above \`${s}\`)`}`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.IntegerOutOfRangeError"
      });
    }
  }
  class Th extends Me {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Rd(e) : e}\` of type \`${typeof e}\` is an invalid hex type.`, {
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
  class Oh extends Me {
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
  let f2 = class extends Me {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeOverflowError"
      });
    }
  };
  class sm extends Me {
    constructor({ offset: e, position: s, size: n }) {
      super(`Slice ${s === "start" ? "starting" : "ending"} at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SliceOffsetOutOfBoundsError"
      });
    }
  }
  let p2 = class extends Me {
    constructor({ size: e, targetSize: s, type: n }) {
      super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeExceedsPaddingSizeError"
      });
    }
  };
  const g2 = new TextEncoder();
  function m2(t) {
    if (!(t instanceof Uint8Array)) {
      if (!t) throw new Lo(t);
      if (typeof t != "object") throw new Lo(t);
      if (!("BYTES_PER_ELEMENT" in t)) throw new Lo(t);
      if (t.BYTES_PER_ELEMENT !== 1 || t.constructor.name !== "Uint8Array") throw new Lo(t);
    }
  }
  function w2(t) {
    return t instanceof Uint8Array ? t : typeof t == "string" ? b2(t) : y2(t);
  }
  function y2(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  function b2(t, e = {}) {
    const { size: s } = e;
    let n = t;
    s && (Qg(t, s), n = tm(t, s));
    let r = n.slice(2);
    r.length % 2 && (r = `0${r}`);
    const i = r.length / 2, o = new Uint8Array(i);
    for (let a = 0, c = 0; a < i; a++) {
      const l = xh(r.charCodeAt(c++)), d = xh(r.charCodeAt(c++));
      if (l === void 0 || d === void 0) throw new Me(`Invalid byte sequence ("${r[c - 2]}${r[c - 1]}" in "${r}").`);
      o[a] = l * 16 + d;
    }
    return o;
  }
  function E2(t, e = {}) {
    const { size: s } = e, n = g2.encode(t);
    return typeof s == "number" ? (s2(n, s), v2(n, s)) : n;
  }
  function v2(t, e) {
    return n2(t, {
      dir: "right",
      size: e
    });
  }
  function kh(t) {
    return t.length;
  }
  function C2(t) {
    try {
      return m2(t), true;
    } catch {
      return false;
    }
  }
  class Lo extends Me {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Rd(e) : e}\` of type \`${typeof e}\` is an invalid Bytes value.`, {
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
  class A2 extends Me {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeOverflowError"
      });
    }
  }
  class I2 extends Me {
    constructor({ size: e, targetSize: s, type: n }) {
      super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeExceedsPaddingSizeError"
      });
    }
  }
  function nm(t, e = {}) {
    const { as: s = typeof t == "string" ? "Hex" : "Bytes" } = e, n = r0(w2(t));
    return s === "Bytes" ? n : Ca(n);
  }
  class N2 extends Map {
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
  const S2 = {
    checksum: new N2(8192)
  }, Tc = S2.checksum;
  function rm(t, e = {}) {
    const { compressed: s } = e, { prefix: n, x: r, y: i } = t;
    if (s === false || typeof r == "bigint" && typeof i == "bigint") {
      if (n !== 4) throw new Ph({
        prefix: n,
        cause: new P2()
      });
      return;
    }
    if (s === true || typeof r == "bigint" && typeof i > "u") {
      if (n !== 3 && n !== 2) throw new Ph({
        prefix: n,
        cause: new k2()
      });
      return;
    }
    throw new O2({
      publicKey: t
    });
  }
  function _2(t) {
    const e = (() => {
      if (u2(t)) return im(t);
      if (C2(t)) return x2(t);
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
    return rm(e), e;
  }
  function x2(t) {
    return im(Ca(t));
  }
  function im(t) {
    if (t.length !== 132 && t.length !== 130 && t.length !== 68) throw new R2({
      publicKey: t
    });
    if (t.length === 130) {
      const n = BigInt(en(t, 0, 32)), r = BigInt(en(t, 32, 64));
      return {
        prefix: 4,
        x: n,
        y: r
      };
    }
    if (t.length === 132) {
      const n = Number(en(t, 0, 1)), r = BigInt(en(t, 1, 33)), i = BigInt(en(t, 33, 65));
      return {
        prefix: n,
        x: r,
        y: i
      };
    }
    const e = Number(en(t, 0, 1)), s = BigInt(en(t, 1, 33));
    return {
      prefix: e,
      x: s
    };
  }
  function T2(t, e = {}) {
    rm(t);
    const { prefix: s, x: n, y: r } = t, { includePrefix: i = true } = e;
    return l2(i ? xc(s, {
      size: 1
    }) : "0x", xc(n, {
      size: 32
    }), typeof r == "bigint" ? xc(r, {
      size: 32
    }) : "0x");
  }
  class O2 extends Me {
    constructor({ publicKey: e }) {
      super(`Value \`${Rd(e)}\` is not a valid public key.`, {
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
  class Ph extends Me {
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
  class k2 extends Me {
    constructor() {
      super("Prefix must be 2 or 3 for compressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidCompressedPrefixError"
      });
    }
  }
  class P2 extends Me {
    constructor() {
      super("Prefix must be 4 for uncompressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidUncompressedPrefixError"
      });
    }
  }
  let R2 = class extends Me {
    constructor({ publicKey: e }) {
      super(`Value \`${e}\` is an invalid public key size.`, {
        metaMessages: [
          "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
          `Received ${Gn($d(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidSerializedSizeError"
      });
    }
  };
  const $2 = /^0x[a-fA-F0-9]{40}$/;
  function om(t, e = {}) {
    const { strict: s = true } = e;
    if (!$2.test(t)) throw new Rh({
      address: t,
      cause: new D2()
    });
    if (s) {
      if (t.toLowerCase() === t) return;
      if (am(t) !== t) throw new Rh({
        address: t,
        cause: new L2()
      });
    }
  }
  function am(t) {
    if (Tc.has(t)) return Tc.get(t);
    om(t, {
      strict: false
    });
    const e = t.substring(2).toLowerCase(), s = nm(E2(e), {
      as: "Bytes"
    }), n = e.split("");
    for (let i = 0; i < 40; i += 2) s[i >> 1] >> 4 >= 8 && n[i] && (n[i] = n[i].toUpperCase()), (s[i >> 1] & 15) >= 8 && n[i + 1] && (n[i + 1] = n[i + 1].toUpperCase());
    const r = `0x${n.join("")}`;
    return Tc.set(t, r), r;
  }
  function U2(t, e = {}) {
    const { checksum: s = false } = e;
    return om(t), s ? am(t) : t;
  }
  function B2(t, e = {}) {
    const s = nm(`0x${T2(t).slice(4)}`).substring(26);
    return U2(`0x${s}`, e);
  }
  class Rh extends Me {
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
  class D2 extends Me {
    constructor() {
      super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidInputError"
      });
    }
  }
  class L2 extends Me {
    constructor() {
      super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidChecksumError"
      });
    }
  }
  const Dt = BigInt(0), _t = BigInt(1), pr = BigInt(2), M2 = BigInt(3), cm = BigInt(4), lm = BigInt(5), dm = BigInt(8);
  function Rt(t, e) {
    const s = t % e;
    return s >= Dt ? s : e + s;
  }
  function es(t, e, s) {
    let n = t;
    for (; e-- > Dt; ) n *= n, n %= s;
    return n;
  }
  function Fl(t, e) {
    if (t === Dt) throw new Error("invert: expected non-zero number");
    if (e <= Dt) throw new Error("invert: expected positive modulus, got " + e);
    let s = Rt(t, e), n = e, r = Dt, i = _t;
    for (; s !== Dt; ) {
      const a = n / s, c = n % s, l = r - i * a;
      n = s, s = c, r = i, i = l;
    }
    if (n !== _t) throw new Error("invert: does not exist");
    return Rt(r, e);
  }
  function um(t, e) {
    const s = (t.ORDER + _t) / cm, n = t.pow(e, s);
    if (!t.eql(t.sqr(n), e)) throw new Error("Cannot find square root");
    return n;
  }
  function F2(t, e) {
    const s = (t.ORDER - lm) / dm, n = t.mul(e, pr), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, pr), r), a = t.mul(i, t.sub(o, t.ONE));
    if (!t.eql(t.sqr(a), e)) throw new Error("Cannot find square root");
    return a;
  }
  function q2(t) {
    if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
    let e = t - _t, s = 0;
    for (; e % pr === Dt; ) e /= pr, s++;
    let n = pr;
    const r = Ud(t);
    for (; $h(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return um;
    let i = r.pow(n, e);
    const o = (e + _t) / pr;
    return function(c, l) {
      if (c.is0(l)) return l;
      if ($h(c, l) !== 1) throw new Error("Cannot find square root");
      let d = s, u = c.mul(c.ONE, i), h = c.pow(l, e), f = c.pow(l, o);
      for (; !c.eql(h, c.ONE); ) {
        if (c.is0(h)) return c.ZERO;
        let g = 1, p = c.sqr(h);
        for (; !c.eql(p, c.ONE); ) if (g++, p = c.sqr(p), g === d) throw new Error("Cannot find square root");
        const m = _t << BigInt(d - g - 1), x = c.pow(u, m);
        d = g, u = c.sqr(x), h = c.mul(h, u), f = c.mul(f, x);
      }
      return f;
    };
  }
  function j2(t) {
    return t % cm === M2 ? um : t % dm === lm ? F2 : q2(t);
  }
  const W2 = [
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
  function H2(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    }, s = W2.reduce((n, r) => (n[r] = "function", n), e);
    return za(t, s);
  }
  function V2(t, e, s) {
    if (s < Dt) throw new Error("invalid exponent, negatives unsupported");
    if (s === Dt) return t.ONE;
    if (s === _t) return e;
    let n = t.ONE, r = e;
    for (; s > Dt; ) s & _t && (n = t.mul(n, r)), r = t.sqr(r), s >>= _t;
    return n;
  }
  function hm(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function $h(t, e) {
    const s = (t.ORDER - _t) / pr, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function fm(t, e) {
    e !== void 0 && i0(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Ud(t, e, s = false, n = {}) {
    if (t <= Dt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    const { nBitLength: r, nByteLength: i } = fm(t, e);
    if (i > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o;
    const a = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: r,
      BYTES: i,
      MASK: Va(r),
      ZERO: Dt,
      ONE: _t,
      create: (c) => Rt(c, t),
      isValid: (c) => {
        if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
        return Dt <= c && c < t;
      },
      is0: (c) => c === Dt,
      isOdd: (c) => (c & _t) === _t,
      neg: (c) => Rt(-c, t),
      eql: (c, l) => c === l,
      sqr: (c) => Rt(c * c, t),
      add: (c, l) => Rt(c + l, t),
      sub: (c, l) => Rt(c - l, t),
      mul: (c, l) => Rt(c * l, t),
      pow: (c, l) => V2(a, c, l),
      div: (c, l) => Rt(c * Fl(l, t), t),
      sqrN: (c) => c * c,
      addN: (c, l) => c + l,
      subN: (c, l) => c - l,
      mulN: (c, l) => c * l,
      inv: (c) => Fl(c, t),
      sqrt: n.sqrt || ((c) => (o || (o = j2(t)), o(a, c))),
      toBytes: (c) => s ? Xg(c, i) : vo(c, i),
      fromBytes: (c) => {
        if (c.length !== i) throw new Error("Field.fromBytes: expected " + i + " bytes, got " + c.length);
        return s ? Jg(c) : Cr(c);
      },
      invertBatch: (c) => hm(a, c),
      cmov: (c, l, d) => d ? l : c
    });
    return Object.freeze(a);
  }
  function pm(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function gm(t) {
    const e = pm(t);
    return e + Math.ceil(e / 2);
  }
  function z2(t, e, s = false) {
    const n = t.length, r = pm(e), i = gm(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? Jg(t) : Cr(t), a = Rt(o, e - _t) + _t;
    return s ? Xg(a, r) : vo(a, r);
  }
  const Uh = BigInt(0), ql = BigInt(1);
  function Oc(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function mm(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function kc(t, e) {
    mm(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = Va(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function Bh(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += ql);
    const l = e * n, d = l + Math.abs(a) - 1, u = a === 0, h = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: u,
      isNeg: h,
      isNegF: f,
      offsetF: l
    };
  }
  function K2(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function G2(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const Pc = /* @__PURE__ */ new WeakMap(), wm = /* @__PURE__ */ new WeakMap();
  function Rc(t) {
    return wm.get(t) || 1;
  }
  function Y2(t, e) {
    return {
      constTimeNegate: Oc,
      hasPrecomputes(s) {
        return Rc(s) !== 1;
      },
      unsafeLadder(s, n, r = t.ZERO) {
        let i = s;
        for (; n > Uh; ) n & ql && (r = r.add(i)), i = i.double(), n >>= ql;
        return r;
      },
      precomputeWindow(s, n) {
        const { windows: r, windowSize: i } = kc(n, e), o = [];
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
        const a = kc(s, e);
        for (let c = 0; c < a.windows; c++) {
          const { nextN: l, offset: d, isZero: u, isNeg: h, isNegF: f, offsetF: g } = Bh(r, c, a);
          r = l, u ? o = o.add(Oc(f, n[g])) : i = i.add(Oc(h, n[d]));
        }
        return {
          p: i,
          f: o
        };
      },
      wNAFUnsafe(s, n, r, i = t.ZERO) {
        const o = kc(s, e);
        for (let a = 0; a < o.windows && r !== Uh; a++) {
          const { nextN: c, offset: l, isZero: d, isNeg: u } = Bh(r, a, o);
          if (r = c, !d) {
            const h = n[l];
            i = i.add(u ? h.negate() : h);
          }
        }
        return i;
      },
      getPrecomputes(s, n, r) {
        let i = Pc.get(n);
        return i || (i = this.precomputeWindow(n, s), s !== 1 && Pc.set(n, r(i))), i;
      },
      wNAFCached(s, n, r) {
        const i = Rc(s);
        return this.wNAF(i, this.getPrecomputes(i, s, r), n);
      },
      wNAFCachedUnsafe(s, n, r, i) {
        const o = Rc(s);
        return o === 1 ? this.unsafeLadder(s, n, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, s, r), n, i);
      },
      setWindowSize(s, n) {
        mm(n, e), wm.set(s, n), Pc.delete(s);
      }
    };
  }
  function Z2(t, e, s, n) {
    K2(s, t), G2(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = QI(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = Va(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = n[p], x = Number(m >> BigInt(f) & l);
        d[x] = d[x].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function ym(t) {
    return H2(t.Fp), za(t, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    }), Object.freeze({
      ...fm(t.n, t.nBitLength),
      ...t,
      p: t.Fp.ORDER
    });
  }
  function Dh(t) {
    t.lowS !== void 0 && ro("lowS", t.lowS), t.prehash !== void 0 && ro("prehash", t.prehash);
  }
  function J2(t) {
    const e = ym(t);
    za(e, {
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
  class X2 extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const nn = {
    Err: X2,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = nn;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = Do(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? Do(r.length / 2 | 128) : "";
        return Do(t) + i + r + e;
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
        if (t < cn) throw new e("integer: negative integers are not allowed");
        let s = Do(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = nn;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Cr(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = nn, r = is("signature", t), { v: i, l: o } = n.decode(48, r);
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
  };
  function $c(t, e) {
    return io(vo(t, e));
  }
  const cn = BigInt(0), Xe = BigInt(1);
  BigInt(2);
  const Uc = BigInt(3), Q2 = BigInt(4);
  function eN(t) {
    const e = J2(t), { Fp: s } = e, n = Ud(e.n, e.nBitLength), r = e.toBytes || ((A, N, P) => {
      const U = N.toAffine();
      return va(Uint8Array.from([
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
    const c = s.mul(s.pow(e.a, Uc), Q2), l = s.mul(s.sqr(e.b), BigInt(27));
    if (s.is0(s.add(c, l))) throw new Error("bad curve params: a or b");
    function d(A) {
      return Pd(A, Xe, e.n);
    }
    function u(A) {
      const { allowedPrivateKeyLengths: N, nByteLength: P, wrapPrivateKey: U, n: B } = e;
      if (N && typeof A != "bigint") {
        if (Eo(A) && (A = io(A)), typeof A != "string" || !N.includes(A.length)) throw new Error("invalid private key");
        A = A.padStart(P * 2, "0");
      }
      let L;
      try {
        L = typeof A == "bigint" ? A : Cr(is("private key", A, P));
      } catch {
        throw new Error("invalid private key, expected hex or " + P + " bytes, got " + typeof A);
      }
      return U && (L = Rt(L, B)), ni("private key", L, Xe, B), L;
    }
    function h(A) {
      if (!(A instanceof p)) throw new Error("ProjectivePoint expected");
    }
    const f = _h((A, N) => {
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
    }), g = _h((A) => {
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
        const P = p.fromAffine(i(is("pointHex", N)));
        return P.assertValidity(), P;
      }
      static fromPrivateKey(N) {
        return p.BASE.multiply(u(N));
      }
      static msm(N, P) {
        return Z2(p, n, N, P);
      }
      _setWindowSize(N) {
        T.setWindowSize(this, N);
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
        h(N);
        const { px: P, py: U, pz: B } = this, { px: L, py: O, pz: D } = N, M = s.eql(s.mul(P, D), s.mul(L, B)), _ = s.eql(s.mul(U, D), s.mul(O, B));
        return M && _;
      }
      negate() {
        return new p(this.px, s.neg(this.py), this.pz);
      }
      double() {
        const { a: N, b: P } = e, U = s.mul(P, Uc), { px: B, py: L, pz: O } = this;
        let D = s.ZERO, M = s.ZERO, _ = s.ZERO, y = s.mul(B, B), E = s.mul(L, L), w = s.mul(O, O), v = s.mul(B, L);
        return v = s.add(v, v), _ = s.mul(B, O), _ = s.add(_, _), D = s.mul(N, _), M = s.mul(U, w), M = s.add(D, M), D = s.sub(E, M), M = s.add(E, M), M = s.mul(D, M), D = s.mul(v, D), _ = s.mul(U, _), w = s.mul(N, w), v = s.sub(y, w), v = s.mul(N, v), v = s.add(v, _), _ = s.add(y, y), y = s.add(_, y), y = s.add(y, w), y = s.mul(y, v), M = s.add(M, y), w = s.mul(L, O), w = s.add(w, w), y = s.mul(w, v), D = s.sub(D, y), _ = s.mul(w, E), _ = s.add(_, _), _ = s.add(_, _), new p(D, M, _);
      }
      add(N) {
        h(N);
        const { px: P, py: U, pz: B } = this, { px: L, py: O, pz: D } = N;
        let M = s.ZERO, _ = s.ZERO, y = s.ZERO;
        const E = e.a, w = s.mul(e.b, Uc);
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
        return T.wNAFCached(this, N, p.normalizeZ);
      }
      multiplyUnsafe(N) {
        const { endo: P, n: U } = e;
        ni("scalar", N, cn, U);
        const B = p.ZERO;
        if (N === cn) return B;
        if (this.is0() || N === Xe) return this;
        if (!P || T.hasPrecomputes(this)) return T.wNAFCachedUnsafe(this, N, p.normalizeZ);
        let { k1neg: L, k1: O, k2neg: D, k2: M } = P.splitScalar(N), _ = B, y = B, E = this;
        for (; O > cn || M > cn; ) O & Xe && (_ = _.add(E)), M & Xe && (y = y.add(E)), E = E.double(), O >>= Xe, M >>= Xe;
        return L && (_ = _.negate()), D && (y = y.negate()), y = new p(s.mul(y.px, P.beta), y.py, y.pz), _.add(y);
      }
      multiply(N) {
        const { endo: P, n: U } = e;
        ni("scalar", N, Xe, U);
        let B, L;
        if (P) {
          const { k1neg: O, k1: D, k2neg: M, k2: _ } = P.splitScalar(N);
          let { p: y, f: E } = this.wNAF(D), { p: w, f: v } = this.wNAF(_);
          y = T.constTimeNegate(O, y), w = T.constTimeNegate(M, w), w = new p(s.mul(w.px, P.beta), w.py, w.pz), B = y.add(w), L = E.add(v);
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
        const B = p.BASE, L = (D, M) => M === cn || M === Xe || !D.equals(B) ? D.multiplyUnsafe(M) : D.multiply(M), O = L(this, P).add(L(N, U));
        return O.is0() ? void 0 : O;
      }
      toAffine(N) {
        return f(this, N);
      }
      isTorsionFree() {
        const { h: N, isTorsionFree: P } = e;
        if (N === Xe) return true;
        if (P) return P(p, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: N, clearCofactor: P } = e;
        return N === Xe ? this : P ? P(p, this) : this.multiplyUnsafe(e.h);
      }
      toRawBytes(N = true) {
        return ro("isCompressed", N), this.assertValidity(), r(p, this, N);
      }
      toHex(N = true) {
        return ro("isCompressed", N), io(this.toRawBytes(N));
      }
    }
    p.BASE = new p(e.Gx, e.Gy, s.ONE), p.ZERO = new p(s.ZERO, s.ONE, s.ZERO);
    const { endo: m, nBitLength: x } = e, T = Y2(p, m ? Math.ceil(x / 2) : x);
    return {
      CURVE: e,
      ProjectivePoint: p,
      normPrivateKeyToScalar: u,
      weierstrassEquation: o,
      isWithinCurveOrder: d
    };
  }
  function tN(t) {
    const e = ym(t);
    return za(e, {
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
  function sN(t) {
    const e = tN(t), { Fp: s, n, nByteLength: r, nBitLength: i } = e, o = s.BYTES + 1, a = 2 * s.BYTES + 1;
    function c(w) {
      return Rt(w, n);
    }
    function l(w) {
      return Fl(w, n);
    }
    const { ProjectivePoint: d, normPrivateKeyToScalar: u, weierstrassEquation: h, isWithinCurveOrder: f } = eN({
      ...e,
      toBytes(w, v, I) {
        const k = v.toAffine(), C = s.toBytes(k.x), S = va;
        return ro("isCompressed", I), I ? S(Uint8Array.from([
          v.hasEvenY() ? 2 : 3
        ]), C) : S(Uint8Array.from([
          4
        ]), C, s.toBytes(k.y));
      },
      fromBytes(w) {
        const v = w.length, I = w[0], k = w.subarray(1);
        if (v === o && (I === 2 || I === 3)) {
          const C = Cr(k);
          if (!Pd(C, Xe, s.ORDER)) throw new Error("Point is not on curve");
          const S = h(C);
          let R;
          try {
            R = s.sqrt(S);
          } catch (K) {
            const j = K instanceof Error ? ": " + K.message : "";
            throw new Error("Point is not on curve" + j);
          }
          const $ = (R & Xe) === Xe;
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
      const v = n >> Xe;
      return w > v;
    }
    function p(w) {
      return g(w) ? c(-w) : w;
    }
    const m = (w, v, I) => Cr(w.slice(v, I));
    class x {
      constructor(v, I, k) {
        ni("r", v, Xe, n), ni("s", I, Xe, n), this.r = v, this.s = I, k != null && (this.recovery = k), Object.freeze(this);
      }
      static fromCompact(v) {
        const I = r;
        return v = is("compactSignature", v, I * 2), new x(m(v, 0, I), m(v, I, 2 * I));
      }
      static fromDER(v) {
        const { r: I, s: k } = nn.toSig(is("DER", v));
        return new x(I, k);
      }
      assertValidity() {
      }
      addRecoveryBit(v) {
        return new x(this.r, this.s, v);
      }
      recoverPublicKey(v) {
        const { r: I, s: k, recovery: C } = this, S = B(is("msgHash", v));
        if (C == null || ![
          0,
          1,
          2,
          3
        ].includes(C)) throw new Error("recovery id invalid");
        const R = C === 2 || C === 3 ? I + e.n : I;
        if (R >= s.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const $ = (C & 1) === 0 ? "02" : "03", Y = d.fromHex($ + $c(R, s.BYTES)), K = l(R), j = c(-S * K), J = c(k * K), Z = d.BASE.multiplyAndAddUnsafe(Y, j, J);
        if (!Z) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return g(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new x(this.r, c(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return Ea(this.toDERHex());
      }
      toDERHex() {
        return nn.hexFromSig(this);
      }
      toCompactRawBytes() {
        return Ea(this.toCompactHex());
      }
      toCompactHex() {
        const v = r;
        return $c(this.r, v) + $c(this.s, v);
      }
    }
    const T = {
      isValidPrivateKey(w) {
        try {
          return u(w), true;
        } catch {
          return false;
        }
      },
      normPrivateKeyToScalar: u,
      randomPrivateKey: () => {
        const w = gm(e.n);
        return z2(e.randomBytes(w), e.n);
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
      const I = is("key", w).length, k = s.BYTES, C = k + 1, S = 2 * k + 1;
      if (!(e.allowedPrivateKeyLengths || r === C)) return I === C || I === S;
    }
    function P(w, v, I = true) {
      if (N(w) === true) throw new Error("first arg must be private key");
      if (N(v) === false) throw new Error("second arg must be public key");
      return d.fromHex(v).multiply(u(w)).toRawBytes(I);
    }
    const U = e.bits2int || function(w) {
      if (w.length > 8192) throw new Error("input is too large");
      const v = Cr(w), I = w.length * 8 - i;
      return I > 0 ? v >> BigInt(I) : v;
    }, B = e.bits2int_modN || function(w) {
      return c(U(w));
    }, L = Va(i);
    function O(w) {
      return ni("num < 2^" + i, w, cn, L), vo(w, r);
    }
    function D(w, v, I = M) {
      if ([
        "recovered",
        "canonical"
      ].some((X) => X in I)) throw new Error("sign() legacy options not supported");
      const { hash: k, randomBytes: C } = e;
      let { lowS: S, prehash: R, extraEntropy: $ } = I;
      S == null && (S = true), w = is("msgHash", w), Dh(I), R && (w = is("prehashed msgHash", k(w)));
      const Y = B(w), K = u(v), j = [
        O(K),
        O(Y)
      ];
      if ($ != null && $ !== false) {
        const X = $ === true ? C(s.BYTES) : $;
        j.push(is("extraEntropy", X));
      }
      const J = va(...j), Z = Y;
      function de(X) {
        const ue = U(X);
        if (!f(ue)) return;
        const Fe = l(ue), We = d.BASE.multiply(ue).toAffine(), je = c(We.x);
        if (je === cn) return;
        const Et = c(Fe * c(Z + je * K));
        if (Et === cn) return;
        let gn = (We.x === je ? 0 : 2) | Number(We.y & Xe), ru = Et;
        return S && g(Et) && (ru = p(Et), gn ^= 1), new x(je, ru, gn);
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
      return e2(S.hash.outputLen, S.nByteLength, S.hmac)(k, C);
    }
    d.BASE._setWindowSize(8);
    function E(w, v, I, k = _) {
      var _a2;
      const C = w;
      v = is("msgHash", v), I = is("publicKey", I);
      const { lowS: S, prehash: R, format: $ } = k;
      if (Dh(k), "strict" in k) throw new Error("options.strict was renamed to lowS");
      if ($ !== void 0 && $ !== "compact" && $ !== "der") throw new Error("format must be compact or der");
      const Y = typeof C == "string" || Eo(C), K = !Y && !$ && typeof C == "object" && C !== null && typeof C.r == "bigint" && typeof C.s == "bigint";
      if (!Y && !K) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      let j, J;
      try {
        if (K && (j = new x(C.r, C.s)), Y) {
          try {
            $ !== "compact" && (j = x.fromDER(C));
          } catch (gn) {
            if (!(gn instanceof nn.Err)) throw gn;
          }
          !j && $ !== "der" && (j = x.fromCompact(C));
        }
        J = d.fromHex(I);
      } catch {
        return false;
      }
      if (!j || S && j.hasHighS()) return false;
      R && (v = e.hash(v));
      const { r: Z, s: de } = j, X = B(v), ue = l(de), Fe = c(X * ue), We = c(Z * ue), je = (_a2 = d.BASE.multiplyAndAddUnsafe(J, Fe, We)) == null ? void 0 : _a2.toAffine();
      return je ? c(je.x) === Z : false;
    }
    return {
      CURVE: e,
      getPublicKey: A,
      getSharedSecret: P,
      sign: y,
      verify: E,
      ProjectivePoint: d,
      Signature: x,
      utils: T
    };
  }
  function nN(t) {
    return {
      hash: t,
      hmac: (e, ...s) => a0(t, e, c0(...s)),
      randomBytes: o0
    };
  }
  function rN(t, e) {
    const s = (n) => sN({
      ...t,
      ...nN(n)
    });
    return {
      ...s(e),
      create: s
    };
  }
  const bm = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Lh = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), iN = BigInt(0), oN = BigInt(1), jl = BigInt(2), Mh = (t, e) => (t + e / jl) / e;
  function aN(t) {
    const e = bm, s = BigInt(3), n = BigInt(6), r = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), l = t * t * t % e, d = l * l * t % e, u = es(d, s, e) * d % e, h = es(u, s, e) * d % e, f = es(h, jl, e) * l % e, g = es(f, r, e) * f % e, p = es(g, i, e) * g % e, m = es(p, a, e) * p % e, x = es(m, c, e) * m % e, T = es(x, a, e) * p % e, A = es(T, s, e) * d % e, N = es(A, o, e) * g % e, P = es(N, n, e) * l % e, U = es(P, jl, e);
    if (!Wl.eql(Wl.sqr(U), t)) throw new Error("Cannot find square root");
    return U;
  }
  const Wl = Ud(bm, void 0, void 0, {
    sqrt: aN
  }), cN = rN({
    a: iN,
    b: BigInt(7),
    Fp: Wl,
    n: Lh,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (t) => {
        const e = Lh, s = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -oN * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = s, o = BigInt("0x100000000000000000000000000000000"), a = Mh(i * t, e), c = Mh(-n * t, e);
        let l = Rt(t - a * s - c * r, e), d = Rt(-a * n - c * i, e);
        const u = l > o, h = d > o;
        if (u && (l = e - l), h && (d = e - d), l > o || d > o) throw new Error("splitScalar: Endomorphism failed, k=" + t);
        return {
          k1neg: u,
          k1: l,
          k2neg: h,
          k2: d
        };
      }
    }
  }, l0);
  function lN(t) {
    if (t.length !== 130 && t.length !== 132) throw new uN({
      signature: t
    });
    const e = BigInt(en(t, 0, 32)), s = BigInt(en(t, 32, 64)), n = (() => {
      const r = +`0x${t.slice(130)}`;
      if (!Number.isNaN(r)) try {
        return dN(r);
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
  function dN(t) {
    if (t === 0 || t === 27) return 0;
    if (t === 1 || t === 28) return 1;
    if (t >= 35) return t % 2 === 0 ? 1 : 0;
    throw new fN({
      value: t
    });
  }
  class uN extends Me {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          "Expected: 64 bytes or 65 bytes.",
          `Received ${Gn($d(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidSerializedSizeError"
      });
    }
  }
  class hN extends Me {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidYParityError"
      });
    }
  }
  class fN extends Me {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidVError"
      });
    }
  }
  function pN(t) {
    return B2(gN(t));
  }
  function gN(t) {
    const { payload: e, signature: s } = t, { r: n, s: r, yParity: i } = s, a = new cN.Signature(BigInt(n), BigInt(r)).addRecoveryBit(i).recoverPublicKey($d(e).substring(2));
    return _2(a);
  }
  function mN(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), u = d.charCodeAt(0);
      if (e[u] !== 255) throw new TypeError(d + " is ambiguous");
      e[u] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, u = 0, h = 0;
      const f = l.length;
      for (; h !== f && l[h] === 0; ) h++, d++;
      const g = (f - h) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; h !== f; ) {
        let T = l[h], A = 0;
        for (let N = g - 1; (T !== 0 || A < u) && N !== -1; N--, A++) T += 256 * p[N] >>> 0, p[N] = T % s >>> 0, T = T / s >>> 0;
        if (T !== 0) throw new Error("Non-zero carry");
        u = A, h++;
      }
      let m = g - u;
      for (; m !== g && p[m] === 0; ) m++;
      let x = n.repeat(d);
      for (; m < g; ++m) x += t.charAt(p[m]);
      return x;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === n; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const T = l.charCodeAt(d);
        if (T > 255) return;
        let A = e[T];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < h) && P !== -1; P--, N++) A += s * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        h = N, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(u + (f - p));
      let x = u;
      for (; p !== f; ) m[x++] = g[p++];
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
  var wN = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const Co = mN(wN);
  var yN = {};
  const bN = ":";
  function un(t) {
    const [e, s] = t.split(bN);
    return {
      namespace: e,
      reference: s
    };
  }
  function Em(t, e) {
    return t.includes(":") ? [
      t
    ] : e.chains || [];
  }
  var EN = Object.defineProperty, vN = Object.defineProperties, CN = Object.getOwnPropertyDescriptors, Fh = Object.getOwnPropertySymbols, AN = Object.prototype.hasOwnProperty, IN = Object.prototype.propertyIsEnumerable, Hl = (t, e, s) => e in t ? EN(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, qh = (t, e) => {
    for (var s in e || (e = {})) AN.call(e, s) && Hl(t, s, e[s]);
    if (Fh) for (var s of Fh(e)) IN.call(e, s) && Hl(t, s, e[s]);
    return t;
  }, NN = (t, e) => vN(t, CN(e)), jh = (t, e, s) => Hl(t, typeof e != "symbol" ? e + "" : e, s);
  const SN = "ReactNative", Jr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  };
  function vm() {
    return typeof cs < "u" && typeof cs.versions < "u" && typeof cs.versions.node < "u";
  }
  function Cm() {
    return !Yt.getDocument() && !!Yt.getNavigator() && navigator.product === SN;
  }
  function Am() {
    return !vm() && !!Yt.getNavigator() && !!Yt.getDocument();
  }
  function _N() {
    return Cm() ? Jr.reactNative : vm() ? Jr.node : Am() ? Jr.browser : Jr.unknown;
  }
  function xN(t) {
    var e, s;
    const n = TN();
    try {
      return t != null && t.url && n.url && new URL(t.url).host !== new URL(n.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${n.url}. This is probably unintended and can lead to issues.`), t.url = n.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((r) => r !== "")), NN(qh(qh({}, n), t), {
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
    return dp.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function gr(t, e) {
    return t.filter((s) => e.includes(s)).length === t.length;
  }
  function jr(t = z.FIVE_MINUTES, e) {
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
  function ON(t) {
    const [e, s] = t.split(":"), n = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof s == "string") n.topic = s;
    else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return n;
  }
  function At(t, e) {
    return z.fromMiliseconds(Date.now() + z.toMiliseconds(t));
  }
  function $n(t) {
    return Date.now() >= z.toMiliseconds(t);
  }
  function $e(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function Fs(t = [], e = []) {
    return [
      .../* @__PURE__ */ new Set([
        ...t,
        ...e
      ])
    ];
  }
  async function kN({ id: t, topic: e, wcDeepLink: s }) {
    var n;
    try {
      if (!s) return;
      const r = typeof s == "string" ? JSON.parse(s) : s, i = r == null ? void 0 : r.href;
      if (typeof i != "string") return;
      const o = PN(i, t, e), a = _N();
      if (a === Jr.browser) {
        if (!((n = Yt.getDocument()) != null && n.hasFocus())) {
          console.warn("Document does not have focus, skipping deeplink.");
          return;
        }
        RN(o);
      } else a === Jr.reactNative && typeof (fe == null ? void 0 : fe.Linking) < "u" && await fe.Linking.openURL(o);
    } catch (r) {
      console.error(r);
    }
  }
  function PN(t, e, s) {
    const n = `requestId=${e}&sessionTopic=${s}`;
    t.endsWith("/") && (t = t.slice(0, -1));
    let r = `${t}`;
    if (t.startsWith("https://t.me")) {
      const i = t.includes("?") ? "&startapp=" : "?startapp=";
      r = `${r}${i}${LN(n, true)}`;
    } else r = `${r}/wc?${n}`;
    return r;
  }
  function RN(t) {
    let e = "_self";
    DN() ? e = "_top" : (BN() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
  }
  async function $N(t, e) {
    let s = "";
    try {
      if (Am() && (s = localStorage.getItem(e), s)) return s;
      s = await t.getItem(e);
    } catch (n) {
      console.error(n);
    }
    return s;
  }
  function Wh(t, e) {
    if (!t.includes(e)) return null;
    const s = t.split(/([&,?,=])/), n = s.indexOf(e);
    return s[n + 2];
  }
  function UN() {
    return typeof cs < "u" && yN.IS_VITEST === "true";
  }
  function BN() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
  }
  function DN() {
    try {
      return window.self !== window.top;
    } catch {
      return false;
    }
  }
  function LN(t, e = false) {
    const s = Ie.from(t).toString("base64");
    return e ? s.replace(/[=]/g, "") : s;
  }
  class MN {
    constructor({ limit: e }) {
      jh(this, "limit"), jh(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
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
  const Mo = BigInt(2 ** 32 - 1), Hh = BigInt(32);
  function Im(t, e = false) {
    return e ? {
      h: Number(t & Mo),
      l: Number(t >> Hh & Mo)
    } : {
      h: Number(t >> Hh & Mo) | 0,
      l: Number(t & Mo) | 0
    };
  }
  function Nm(t, e = false) {
    const s = t.length;
    let n = new Uint32Array(s), r = new Uint32Array(s);
    for (let i = 0; i < s; i++) {
      const { h: o, l: a } = Im(t[i], e);
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
  const Vh = (t, e, s) => t >>> s, zh = (t, e, s) => t << 32 - s | e >>> s, Un = (t, e, s) => t >>> s | e << 32 - s, Bn = (t, e, s) => t << 32 - s | e >>> s, qi = (t, e, s) => t << 64 - s | e >>> s - 32, ji = (t, e, s) => t >>> s - 32 | e << 64 - s, FN = (t, e) => e, qN = (t, e) => t, jN = (t, e, s) => t << s | e >>> 32 - s, WN = (t, e, s) => e << s | t >>> 32 - s, HN = (t, e, s) => e << s - 32 | t >>> 64 - s, VN = (t, e, s) => t << s - 32 | e >>> 64 - s;
  function ys(t, e, s, n) {
    const r = (e >>> 0) + (n >>> 0);
    return {
      h: t + s + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const Bd = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), Dd = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, zN = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), KN = (t, e, s, n, r) => e + s + n + r + (t / 2 ** 32 | 0) | 0, GN = (t, e, s, n, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0), YN = (t, e, s, n, r, i) => e + s + n + r + i + (t / 2 ** 32 | 0) | 0, Wr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function Ka(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Yn(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function Ss(t, ...e) {
    if (!Ka(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Sm(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    Yn(t.outputLen), Yn(t.blockLen);
  }
  function Zn(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function Ld(t, e) {
    Ss(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function oo(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function _s(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function Bc(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function ks(t, e) {
    return t << 32 - e | t >>> e;
  }
  const _m = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function xm(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const Js = _m ? (t) => t : (t) => xm(t);
  function ZN(t) {
    for (let e = 0; e < t.length; e++) t[e] = xm(t[e]);
    return t;
  }
  const Dn = _m ? (t) => t : ZN, Tm = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", JN = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function ri(t) {
    if (Ss(t), Tm) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += JN[t[s]];
    return e;
  }
  const Ks = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function Kh(t) {
    if (t >= Ks._0 && t <= Ks._9) return t - Ks._0;
    if (t >= Ks.A && t <= Ks.F) return t - (Ks.A - 10);
    if (t >= Ks.a && t <= Ks.f) return t - (Ks.a - 10);
  }
  function Aa(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Tm) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = Kh(t.charCodeAt(i)), a = Kh(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function Om(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function hn(t) {
    return typeof t == "string" && (t = Om(t)), Ss(t), t;
  }
  function Mn(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Ss(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  let Ga = class {
  };
  function Ao(t) {
    const e = (n) => t().update(hn(n)).digest(), s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
  }
  function XN(t) {
    const e = (n, r) => t(r).update(hn(n)).digest(), s = t({});
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  function Md(t = 32) {
    if (Wr && typeof Wr.getRandomValues == "function") return Wr.getRandomValues(new Uint8Array(t));
    if (Wr && typeof Wr.randomBytes == "function") return Uint8Array.from(Wr.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const QN = BigInt(0), Ti = BigInt(1), eS = BigInt(2), tS = BigInt(7), sS = BigInt(256), nS = BigInt(113), km = [], Pm = [], Rm = [];
  for (let t = 0, e = Ti, s = 1, n = 0; t < 24; t++) {
    [s, n] = [
      n,
      (2 * s + 3 * n) % 5
    ], km.push(2 * (5 * n + s)), Pm.push((t + 1) * (t + 2) / 2 % 64);
    let r = QN;
    for (let i = 0; i < 7; i++) e = (e << Ti ^ (e >> tS) * nS) % sS, e & eS && (r ^= Ti << (Ti << BigInt(i)) - Ti);
    Rm.push(r);
  }
  const $m = Nm(Rm, true), rS = $m[0], iS = $m[1], Gh = (t, e, s) => s > 32 ? HN(t, e, s) : jN(t, e, s), Yh = (t, e, s) => s > 32 ? VN(t, e, s) : WN(t, e, s);
  function oS(t, e = 24) {
    const s = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], u = Gh(l, d, 1) ^ s[a], h = Yh(l, d, 1) ^ s[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= u, t[o + f + 1] ^= h;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = Pm[o], c = Gh(r, i, a), l = Yh(r, i, a), d = km[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) s[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
      }
      t[0] ^= rS[n], t[1] ^= iS[n];
    }
    _s(s);
  }
  class Fd extends Ga {
    constructor(e, s, n, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = r, this.rounds = i, Yn(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = oo(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Dn(this.state32), oS(this.state32, this.rounds), Dn(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      Zn(this), e = hn(e), Ss(e);
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
      Zn(this, false), Ss(e), this.finish();
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
      return Yn(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Ld(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, _s(this.state);
    }
    _cloneInto(e) {
      const { blockLen: s, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new Fd(s, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  }
  const aS = (t, e, s) => Ao(() => new Fd(e, t, s)), cS = aS(1, 136, 256 / 8);
  function lS(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i), c = n ? 4 : 0, l = n ? 0 : 4;
    t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
  }
  function dS(t, e, s) {
    return t & e ^ ~t & s;
  }
  function uS(t, e, s) {
    return t & e ^ t & s ^ e & s;
  }
  class Um extends Ga {
    constructor(e, s, n, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Bc(this.buffer);
    }
    update(e) {
      Zn(this), e = hn(e), Ss(e);
      const { view: s, buffer: n, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = Bc(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(s, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      Zn(this), Ld(e, this), this.finished = true;
      const { buffer: s, view: n, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      s[o++] = 128, _s(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(n, 0), o = 0);
      for (let u = o; u < r; u++) s[u] = 0;
      lS(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = Bc(e), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, d = this.get();
      if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
      for (let u = 0; u < l; u++) a.setUint32(4 * u, d[u], i);
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
  const In = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), pt = Uint32Array.from([
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
  ]), gt = Uint32Array.from([
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
  ]), Nn = new Uint32Array(64);
  class fS extends Um {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = In[0] | 0, this.B = In[1] | 0, this.C = In[2] | 0, this.D = In[3] | 0, this.E = In[4] | 0, this.F = In[5] | 0, this.G = In[6] | 0, this.H = In[7] | 0;
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
      for (let u = 0; u < 16; u++, s += 4) Nn[u] = e.getUint32(s, false);
      for (let u = 16; u < 64; u++) {
        const h = Nn[u - 15], f = Nn[u - 2], g = ks(h, 7) ^ ks(h, 18) ^ h >>> 3, p = ks(f, 17) ^ ks(f, 19) ^ f >>> 10;
        Nn[u] = p + Nn[u - 7] + g + Nn[u - 16] | 0;
      }
      let { A: n, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let u = 0; u < 64; u++) {
        const h = ks(a, 6) ^ ks(a, 11) ^ ks(a, 25), f = d + h + dS(a, c, l) + hS[u] + Nn[u] | 0, g = (ks(n, 2) ^ ks(n, 13) ^ ks(n, 22)) + uS(n, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = n, n = f + g | 0;
      }
      n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, r, i, o, a, c, l, d);
    }
    roundClean() {
      _s(Nn);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), _s(this.buffer);
    }
  }
  const Bm = Nm([
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
  ].map((t) => BigInt(t))), pS = Bm[0], gS = Bm[1], Sn = new Uint32Array(80), _n = new Uint32Array(80);
  class qd extends Um {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = gt[0] | 0, this.Al = gt[1] | 0, this.Bh = gt[2] | 0, this.Bl = gt[3] | 0, this.Ch = gt[4] | 0, this.Cl = gt[5] | 0, this.Dh = gt[6] | 0, this.Dl = gt[7] | 0, this.Eh = gt[8] | 0, this.El = gt[9] | 0, this.Fh = gt[10] | 0, this.Fl = gt[11] | 0, this.Gh = gt[12] | 0, this.Gl = gt[13] | 0, this.Hh = gt[14] | 0, this.Hl = gt[15] | 0;
    }
    get() {
      const { Ah: e, Al: s, Bh: n, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: u, Fl: h, Gh: f, Gl: g, Hh: p, Hl: m } = this;
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
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = u | 0, this.Fl = h | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = m | 0;
    }
    process(e, s) {
      for (let A = 0; A < 16; A++, s += 4) Sn[A] = e.getUint32(s), _n[A] = e.getUint32(s += 4);
      for (let A = 16; A < 80; A++) {
        const N = Sn[A - 15] | 0, P = _n[A - 15] | 0, U = Un(N, P, 1) ^ Un(N, P, 8) ^ Vh(N, P, 7), B = Bn(N, P, 1) ^ Bn(N, P, 8) ^ zh(N, P, 7), L = Sn[A - 2] | 0, O = _n[A - 2] | 0, D = Un(L, O, 19) ^ qi(L, O, 61) ^ Vh(L, O, 6), M = Bn(L, O, 19) ^ ji(L, O, 61) ^ zh(L, O, 6), _ = zN(B, M, _n[A - 7], _n[A - 16]), y = KN(_, U, D, Sn[A - 7], Sn[A - 16]);
        Sn[A] = y | 0, _n[A] = _ | 0;
      }
      let { Ah: n, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: u, El: h, Fh: f, Fl: g, Gh: p, Gl: m, Hh: x, Hl: T } = this;
      for (let A = 0; A < 80; A++) {
        const N = Un(u, h, 14) ^ Un(u, h, 18) ^ qi(u, h, 41), P = Bn(u, h, 14) ^ Bn(u, h, 18) ^ ji(u, h, 41), U = u & f ^ ~u & p, B = h & g ^ ~h & m, L = GN(T, P, B, gS[A], _n[A]), O = YN(L, x, N, U, pS[A], Sn[A]), D = L | 0, M = Un(n, r, 28) ^ qi(n, r, 34) ^ qi(n, r, 39), _ = Bn(n, r, 28) ^ ji(n, r, 34) ^ ji(n, r, 39), y = n & i ^ n & a ^ i & a, E = r & o ^ r & c ^ o & c;
        x = p | 0, T = m | 0, p = f | 0, m = g | 0, f = u | 0, g = h | 0, { h: u, l: h } = ys(l | 0, d | 0, O | 0, D | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = n | 0, o = r | 0;
        const w = Bd(D, _, E);
        n = Dd(w, O, M, y), r = w | 0;
      }
      ({ h: n, l: r } = ys(this.Ah | 0, this.Al | 0, n | 0, r | 0)), { h: i, l: o } = ys(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = ys(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = ys(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h: u, l: h } = ys(this.Eh | 0, this.El | 0, u | 0, h | 0), { h: f, l: g } = ys(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: m } = ys(this.Gh | 0, this.Gl | 0, p | 0, m | 0), { h: x, l: T } = ys(this.Hh | 0, this.Hl | 0, x | 0, T | 0), this.set(n, r, i, o, a, c, l, d, u, h, f, g, p, m, x, T);
    }
    roundClean() {
      _s(Sn, _n);
    }
    destroy() {
      _s(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  class mS extends qd {
    constructor() {
      super(48), this.Ah = pt[0] | 0, this.Al = pt[1] | 0, this.Bh = pt[2] | 0, this.Bl = pt[3] | 0, this.Ch = pt[4] | 0, this.Cl = pt[5] | 0, this.Dh = pt[6] | 0, this.Dl = pt[7] | 0, this.Eh = pt[8] | 0, this.El = pt[9] | 0, this.Fh = pt[10] | 0, this.Fl = pt[11] | 0, this.Gh = pt[12] | 0, this.Gl = pt[13] | 0, this.Hh = pt[14] | 0, this.Hl = pt[15] | 0;
    }
  }
  const mt = Uint32Array.from([
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
  class wS extends qd {
    constructor() {
      super(32), this.Ah = mt[0] | 0, this.Al = mt[1] | 0, this.Bh = mt[2] | 0, this.Bl = mt[3] | 0, this.Ch = mt[4] | 0, this.Cl = mt[5] | 0, this.Dh = mt[6] | 0, this.Dl = mt[7] | 0, this.Eh = mt[8] | 0, this.El = mt[9] | 0, this.Fh = mt[10] | 0, this.Fl = mt[11] | 0, this.Gh = mt[12] | 0, this.Gl = mt[13] | 0, this.Hh = mt[14] | 0, this.Hl = mt[15] | 0;
    }
  }
  const Ya = Ao(() => new fS()), yS = Ao(() => new qd()), bS = Ao(() => new mS()), ES = Ao(() => new wS()), vS = Uint8Array.from([
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
  ]), Ge = Uint32Array.from([
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
  function xn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = se[2 * t], l = se[2 * t + 1], d = se[2 * e], u = se[2 * e + 1], h = se[2 * s], f = se[2 * s + 1], g = se[2 * n], p = se[2 * n + 1], m = Bd(c, d, o);
    l = Dd(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: FN(p, g),
      Dl: qN(p)
    }, { h: f, l: h } = ys(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: Un(u, d, 24),
      Bl: Bn(u, d, 24)
    }, se[2 * t] = c, se[2 * t + 1] = l, se[2 * e] = d, se[2 * e + 1] = u, se[2 * s] = h, se[2 * s + 1] = f, se[2 * n] = g, se[2 * n + 1] = p;
  }
  function Tn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = se[2 * t], l = se[2 * t + 1], d = se[2 * e], u = se[2 * e + 1], h = se[2 * s], f = se[2 * s + 1], g = se[2 * n], p = se[2 * n + 1], m = Bd(c, d, o);
    l = Dd(m, l, u, a), c = m | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: Un(p, g, 16),
      Dl: Bn(p, g, 16)
    }, { h: f, l: h } = ys(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: qi(u, d, 63),
      Bl: ji(u, d, 63)
    }, se[2 * t] = c, se[2 * t + 1] = l, se[2 * e] = d, se[2 * e + 1] = u, se[2 * s] = h, se[2 * s + 1] = f, se[2 * n] = g, se[2 * n + 1] = p;
  }
  function CS(t, e = {}, s, n, r) {
    if (Yn(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > s)) throw new Error("key length must be undefined or 1.." + s);
    if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  class AS extends Ga {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, Yn(e), Yn(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = oo(this.buffer);
    }
    update(e) {
      Zn(this), e = hn(e), Ss(e);
      const { blockLen: s, buffer: n, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s && (Dn(r), this.compress(r, 0, false), Dn(r), this.pos = 0);
        const l = Math.min(s - this.pos, i - c), d = o + c;
        if (l === s && !(d % 4) && c + l < i) {
          const u = new Uint32Array(a, d, Math.floor((i - c) / 4));
          Dn(u);
          for (let h = 0; c + s < i; h += r.length, c += s) this.length += s, this.compress(u, h, false);
          Dn(u);
          continue;
        }
        n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      Zn(this), Ld(e, this);
      const { pos: s, buffer32: n } = this;
      this.finished = true, _s(this.buffer.subarray(s)), Dn(n), this.compress(n, 0, true), Dn(n);
      const r = oo(e);
      this.get().forEach((i, o) => r[o] = Js(i));
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
  class IS extends AS {
    constructor(e = {}) {
      const s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s), this.v0l = Ge[0] | 0, this.v0h = Ge[1] | 0, this.v1l = Ge[2] | 0, this.v1h = Ge[3] | 0, this.v2l = Ge[4] | 0, this.v2h = Ge[5] | 0, this.v3l = Ge[6] | 0, this.v3h = Ge[7] | 0, this.v4l = Ge[8] | 0, this.v4h = Ge[9] | 0, this.v5l = Ge[10] | 0, this.v5h = Ge[11] | 0, this.v6l = Ge[12] | 0, this.v6h = Ge[13] | 0, this.v7l = Ge[14] | 0, this.v7h = Ge[15] | 0, CS(s, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e, o = 0;
      if (n !== void 0 && (n = hn(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = hn(i);
        const a = oo(i);
        this.v4l ^= Js(a[0]), this.v4h ^= Js(a[1]), this.v5l ^= Js(a[2]), this.v5h ^= Js(a[3]);
      }
      if (r !== void 0) {
        r = hn(r);
        const a = oo(r);
        this.v6l ^= Js(a[0]), this.v6h ^= Js(a[1]), this.v7l ^= Js(a[2]), this.v7h ^= Js(a[3]);
      }
      if (n !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(n), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: s, v1l: n, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: u, v5h: h, v6l: f, v6h: g, v7l: p, v7h: m } = this;
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
        u,
        h,
        f,
        g,
        p,
        m
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, u, h, f, g, p, m) {
      this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = u | 0, this.v5h = h | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = m | 0;
    }
    compress(e, s, n) {
      this.get().forEach((c, l) => se[l] = c), se.set(Ge, 16);
      let { h: r, l: i } = Im(BigInt(this.length));
      se[24] = Ge[8] ^ i, se[25] = Ge[9] ^ r, n && (se[28] = ~se[28], se[29] = ~se[29]);
      let o = 0;
      const a = vS;
      for (let c = 0; c < 12; c++) xn(0, 4, 8, 12, e, s + 2 * a[o++]), Tn(0, 4, 8, 12, e, s + 2 * a[o++]), xn(1, 5, 9, 13, e, s + 2 * a[o++]), Tn(1, 5, 9, 13, e, s + 2 * a[o++]), xn(2, 6, 10, 14, e, s + 2 * a[o++]), Tn(2, 6, 10, 14, e, s + 2 * a[o++]), xn(3, 7, 11, 15, e, s + 2 * a[o++]), Tn(3, 7, 11, 15, e, s + 2 * a[o++]), xn(0, 5, 10, 15, e, s + 2 * a[o++]), Tn(0, 5, 10, 15, e, s + 2 * a[o++]), xn(1, 6, 11, 12, e, s + 2 * a[o++]), Tn(1, 6, 11, 12, e, s + 2 * a[o++]), xn(2, 7, 8, 13, e, s + 2 * a[o++]), Tn(2, 7, 8, 13, e, s + 2 * a[o++]), xn(3, 4, 9, 14, e, s + 2 * a[o++]), Tn(3, 4, 9, 14, e, s + 2 * a[o++]);
      this.v0l ^= se[0] ^ se[16], this.v0h ^= se[1] ^ se[17], this.v1l ^= se[2] ^ se[18], this.v1h ^= se[3] ^ se[19], this.v2l ^= se[4] ^ se[20], this.v2h ^= se[5] ^ se[21], this.v3l ^= se[6] ^ se[22], this.v3h ^= se[7] ^ se[23], this.v4l ^= se[8] ^ se[24], this.v4h ^= se[9] ^ se[25], this.v5l ^= se[10] ^ se[26], this.v5h ^= se[11] ^ se[27], this.v6l ^= se[12] ^ se[28], this.v6h ^= se[13] ^ se[29], this.v7l ^= se[14] ^ se[30], this.v7h ^= se[15] ^ se[31], _s(se);
    }
    destroy() {
      this.destroyed = true, _s(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const NS = XN((t) => new IS(t)), SS = "https://rpc.walletconnect.org/v1";
  function Dm(t) {
    const e = `Ethereum Signed Message:
${t.length}`, s = new TextEncoder().encode(e + t);
    return "0x" + Ie.from(cS(s)).toString("hex");
  }
  async function _S(t, e, s, n, r, i) {
    switch (s.t) {
      case "eip191":
        return await xS(t, e, s.s);
      case "eip1271":
        return await TS(t, e, s.s, n, r, i);
      default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`);
    }
  }
  function xS(t, e, s) {
    const n = lN(s);
    return pN({
      payload: Dm(e),
      signature: n
    }).toLowerCase() === t.toLowerCase();
  }
  async function TS(t, e, s, n, r, i) {
    const o = un(n);
    if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${n}`);
    try {
      const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", l = s.substring(2), d = (l.length / 2).toString(16).padStart(64, "0"), u = (e.startsWith("0x") ? e : Dm(e)).substring(2), h = a + u + c + d + l, f = await fetch(`${i || SS}/?chainId=${n}&projectId=${r}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          id: OS(),
          jsonrpc: "2.0",
          method: "eth_call",
          params: [
            {
              to: t,
              data: h
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
  function OS() {
    return Date.now() + Math.floor(Math.random() * 1e3);
  }
  function kS(t) {
    const e = atob(t), s = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
    const n = s[0];
    if (n === 0) throw new Error("No signatures found");
    const r = 1 + n * 64;
    if (s.length < r) throw new Error("Transaction data too short for claimed signature count");
    if (s.length < 100) throw new Error("Transaction too short");
    const i = Ie.from(t, "base64").slice(1, 65);
    return Co.encode(i);
  }
  function PS(t) {
    const e = new Uint8Array(Ie.from(t, "base64")), s = Array.from("TransactionData::").map((i) => i.charCodeAt(0)), n = new Uint8Array(s.length + e.length);
    n.set(s), n.set(e, s.length);
    const r = NS(n, {
      dkLen: 32
    });
    return Co.encode(r);
  }
  function Zh(t) {
    const e = new Uint8Array(Ya(RS(t)));
    return Co.encode(e);
  }
  function RS(t) {
    if (t instanceof Uint8Array) return t;
    if (Array.isArray(t)) return new Uint8Array(t);
    if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
    if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
    throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
  }
  function Jh(t) {
    const e = Ie.from(t, "base64"), s = pb(e).txn;
    if (!s) throw new Error("Invalid signed transaction: missing 'txn' field");
    const n = ob(s), r = Ie.from("TX"), i = Ie.concat([
      r,
      Ie.from(n)
    ]), o = ES(i);
    return d0.encode(o).replace(/=+$/, "");
  }
  function Dc(t) {
    const e = [];
    let s = BigInt(t);
    for (; s >= BigInt(128); ) e.push(Number(s & BigInt(127) | BigInt(128))), s >>= BigInt(7);
    return e.push(Number(s)), Ie.from(e);
  }
  function $S(t) {
    const e = Ie.from(t.signed.bodyBytes, "base64"), s = Ie.from(t.signed.authInfoBytes, "base64"), n = Ie.from(t.signature.signature, "base64"), r = [];
    r.push(Ie.from([
      10
    ])), r.push(Dc(e.length)), r.push(e), r.push(Ie.from([
      18
    ])), r.push(Dc(s.length)), r.push(s), r.push(Ie.from([
      26
    ])), r.push(Dc(n.length)), r.push(n);
    const i = Ie.concat(r), o = Ya(i);
    return Ie.from(o).toString("hex").toUpperCase();
  }
  function US(t) {
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
  var BS = Object.defineProperty, DS = Object.defineProperties, LS = Object.getOwnPropertyDescriptors, Xh = Object.getOwnPropertySymbols, MS = Object.prototype.hasOwnProperty, FS = Object.prototype.propertyIsEnumerable, Qh = (t, e, s) => e in t ? BS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, qS = (t, e) => {
    for (var s in e || (e = {})) MS.call(e, s) && Qh(t, s, e[s]);
    if (Xh) for (var s of Xh(e)) FS.call(e, s) && Qh(t, s, e[s]);
    return t;
  }, jS = (t, e) => DS(t, LS(e));
  const Lm = "did:pkh:", WS = {
    eip155: "Ethereum",
    solana: "Solana",
    bip122: "Bitcoin"
  }, HS = (t) => t ? WS[t] || t : "", Za = (t) => t == null ? void 0 : t.split(":"), VS = (t) => {
    const e = t && Za(t);
    if (e) return t.includes(Lm) ? e[3] : e[1];
  }, zS = (t) => {
    const e = t && Za(t);
    if (e) return t.includes(Lm) ? e[2] : e[0];
  }, Vl = (t) => {
    const e = t && Za(t);
    if (e) return e[2] + ":" + e[3];
  }, Ia = (t) => {
    const e = t && Za(t);
    if (e) return e.pop();
  };
  async function ef(t) {
    const { cacao: e, projectId: s } = t, { s: n, p: r } = e, i = Mm(r, r.iss), o = Ia(r.iss);
    return await _S(o, i, n, Vl(r.iss), s);
  }
  const Mm = (t, e) => {
    const s = zS(e);
    if (!s) throw new Error("Invalid issuer: " + e);
    const n = `${t.domain} wants you to sign in with your ${HS(s)} account:`, r = Ia(e);
    if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let i = t.statement || void 0;
    const o = `URI: ${t.aud || t.uri}`, a = `Version: ${t.version}`, c = `Chain ID: ${VS(e)}`, l = `Nonce: ${t.nonce}`, d = `Issued At: ${t.iat}`, u = t.exp ? `Expiration Time: ${t.exp}` : void 0, h = t.nbf ? `Not Before: ${t.nbf}` : void 0, f = t.requestId ? `Request ID: ${t.requestId}` : void 0, g = t.resources ? `Resources:${t.resources.map((m) => `
- ${m}`).join("")}` : void 0, p = na(t.resources);
    if (p) {
      const m = ao(p);
      i = t_(i, m);
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
      u,
      h,
      f,
      g
    ].filter((m) => m != null).join(`
`);
  };
  function KS(t) {
    return Ie.from(JSON.stringify(t)).toString("base64");
  }
  function GS(t) {
    return JSON.parse(Ie.from(t, "base64").toString("utf-8"));
  }
  function Sr(t) {
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
  function YS(t, e, s, n = {}) {
    return s == null ? void 0 : s.sort((r, i) => r.localeCompare(i)), {
      att: {
        [t]: ZS(e, s, n)
      }
    };
  }
  function ZS(t, e, s = {}) {
    e = e == null ? void 0 : e.sort((r, i) => r.localeCompare(i));
    const n = e.map((r) => ({
      [`${t}/${r}`]: [
        s
      ]
    }));
    return Object.assign({}, ...n);
  }
  function Fm(t) {
    return Sr(t), `urn:recap:${KS(t).replace(/=/g, "")}`;
  }
  function ao(t) {
    const e = GS(t.replace("urn:recap:", ""));
    return Sr(e), e;
  }
  function JS(t, e, s) {
    const n = YS(t, e, s);
    return Fm(n);
  }
  function XS(t) {
    return t && t.includes("urn:recap:");
  }
  function QS(t, e) {
    const s = ao(t), n = ao(e), r = e_(s, n);
    return Fm(r);
  }
  function e_(t, e) {
    Sr(t), Sr(e);
    const s = Object.keys(t.att).concat(Object.keys(e.att)).sort((r, i) => r.localeCompare(i)), n = {
      att: {}
    };
    return s.forEach((r) => {
      var i, o;
      Object.keys(((i = t.att) == null ? void 0 : i[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
        var c, l;
        n.att[r] = jS(qS({}, n.att[r]), {
          [a]: ((c = t.att[r]) == null ? void 0 : c[a]) || ((l = e.att[r]) == null ? void 0 : l[a])
        });
      });
    }), n;
  }
  function t_(t = "", e) {
    Sr(e);
    const s = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (t.includes(s)) return t;
    const n = [];
    let r = 0;
    Object.keys(e.att).forEach((a) => {
      const c = Object.keys(e.att[a]).map((u) => ({
        ability: u.split("/")[0],
        action: u.split("/")[1]
      }));
      c.sort((u, h) => u.action.localeCompare(h.action));
      const l = {};
      c.forEach((u) => {
        l[u.ability] || (l[u.ability] = []), l[u.ability].push(u.action);
      });
      const d = Object.keys(l).map((u) => (r++, `(${r}) '${u}': '${l[u].join("', '")}' for '${a}'.`));
      n.push(d.join(", ").replace(".,", "."));
    });
    const i = n.join(" "), o = `${s}${i}`;
    return `${t ? t + " " : ""}${o}`;
  }
  function tf(t) {
    var e;
    const s = ao(t);
    Sr(s);
    const n = (e = s.att) == null ? void 0 : e.eip155;
    return n ? Object.keys(n).map((r) => r.split("/")[1]) : [];
  }
  function sf(t) {
    const e = ao(t);
    Sr(e);
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
  function na(t) {
    if (!t) return;
    const e = t == null ? void 0 : t[t.length - 1];
    return XS(e) ? e : void 0;
  }
  function qm(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function zl(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function Lc(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function $t(t, ...e) {
    if (!qm(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function nf(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function s_(t, e) {
    $t(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function Hn(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function ui(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function n_(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const r_ = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function i_(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function Kl(t) {
    if (typeof t == "string") t = i_(t);
    else if (qm(t)) t = Gl(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function o_(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function a_(t, e) {
    if (t.length !== e.length) return false;
    let s = 0;
    for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
    return s === 0;
  }
  const c_ = (t, e) => {
    function s(n, ...r) {
      if ($t(n), !r_) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? $t(l) : $t(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && $t(r[1]);
      const o = e(n, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          $t(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, $t(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if ($t(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(s, t), s;
  };
  function rf(t, e, s = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !d_(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function of(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i);
    t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
  }
  function l_(t, e, s) {
    zl(s);
    const n = new Uint8Array(16), r = n_(n);
    return of(r, 0, BigInt(e), s), of(r, 8, BigInt(t), s), n;
  }
  function d_(t) {
    return t.byteOffset % 4 === 0;
  }
  function Gl(t) {
    return Uint8Array.from(t);
  }
  const jm = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), u_ = jm("expand 16-byte k"), h_ = jm("expand 32-byte k"), f_ = Hn(u_), p_ = Hn(h_);
  function _e(t, e) {
    return t << e | t >>> 32 - e;
  }
  function Yl(t) {
    return t.byteOffset % 4 === 0;
  }
  const Fo = 64, g_ = 16, Wm = 2 ** 32 - 1, af = new Uint32Array();
  function m_(t, e, s, n, r, i, o, a) {
    const c = r.length, l = new Uint8Array(Fo), d = Hn(l), u = Yl(r) && Yl(i), h = u ? Hn(r) : af, f = u ? Hn(i) : af;
    for (let g = 0; g < c; o++) {
      if (t(e, s, n, d, o, a), o >= Wm) throw new Error("arx: counter overflow");
      const p = Math.min(Fo, c - g);
      if (u && p === Fo) {
        const m = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let x = 0, T; x < g_; x++) T = m + x, f[T] = h[T] ^ d[x];
        g += Fo;
        continue;
      }
      for (let m = 0, x; m < p; m++) x = g + m, i[x] = r[x] ^ l[m];
      g += p;
    }
  }
  function w_(t, e) {
    const { allowShortKeys: s, extendNonceFn: n, counterLength: r, counterRight: i, rounds: o } = o_({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return Lc(r), Lc(o), zl(i), zl(s), (a, c, l, d, u = 0) => {
      $t(a), $t(c), $t(l);
      const h = l.length;
      if (d === void 0 && (d = new Uint8Array(h)), $t(d), Lc(u), u < 0 || u >= Wm) throw new Error("arx: counter overflow");
      if (d.length < h) throw new Error(`arx: output (${d.length}) is shorter than data (${h})`);
      const f = [];
      let g = a.length, p, m;
      if (g === 32) f.push(p = Gl(a)), m = p_;
      else if (g === 16 && s) p = new Uint8Array(32), p.set(a), p.set(a, 16), m = f_, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      Yl(c) || f.push(c = Gl(c));
      const x = Hn(p);
      if (n) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        n(m, x, Hn(c.subarray(0, 16)), x), c = c.subarray(16);
      }
      const T = 16 - r;
      if (T !== c.length) throw new Error(`arx: nonce must be ${T} or 16 bytes`);
      if (T !== 12) {
        const N = new Uint8Array(12);
        N.set(c, i ? 0 : 12 - c.length), c = N, f.push(c);
      }
      const A = Hn(c);
      return m_(t, m, x, A, l, d, u, o), ui(...f), d;
    };
  }
  const nt = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  class y_ {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = Kl(e), $t(e, 32);
      const s = nt(e, 0), n = nt(e, 2), r = nt(e, 4), i = nt(e, 6), o = nt(e, 8), a = nt(e, 10), c = nt(e, 12), l = nt(e, 14);
      this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = nt(e, 16 + 2 * d);
    }
    process(e, s, n = false) {
      const r = n ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], u = o[4], h = o[5], f = o[6], g = o[7], p = o[8], m = o[9], x = nt(e, s + 0), T = nt(e, s + 2), A = nt(e, s + 4), N = nt(e, s + 6), P = nt(e, s + 8), U = nt(e, s + 10), B = nt(e, s + 12), L = nt(e, s + 14);
      let O = i[0] + (x & 8191), D = i[1] + ((x >>> 13 | T << 3) & 8191), M = i[2] + ((T >>> 10 | A << 6) & 8191), _ = i[3] + ((A >>> 7 | N << 9) & 8191), y = i[4] + ((N >>> 4 | P << 12) & 8191), E = i[5] + (P >>> 1 & 8191), w = i[6] + ((P >>> 14 | U << 2) & 8191), v = i[7] + ((U >>> 11 | B << 5) & 8191), I = i[8] + ((B >>> 8 | L << 8) & 8191), k = i[9] + (L >>> 5 | r), C = 0, S = C + O * a + D * (5 * m) + M * (5 * p) + _ * (5 * g) + y * (5 * f);
      C = S >>> 13, S &= 8191, S += E * (5 * h) + w * (5 * u) + v * (5 * d) + I * (5 * l) + k * (5 * c), C += S >>> 13, S &= 8191;
      let R = C + O * c + D * a + M * (5 * m) + _ * (5 * p) + y * (5 * g);
      C = R >>> 13, R &= 8191, R += E * (5 * f) + w * (5 * h) + v * (5 * u) + I * (5 * d) + k * (5 * l), C += R >>> 13, R &= 8191;
      let $ = C + O * l + D * c + M * a + _ * (5 * m) + y * (5 * p);
      C = $ >>> 13, $ &= 8191, $ += E * (5 * g) + w * (5 * f) + v * (5 * h) + I * (5 * u) + k * (5 * d), C += $ >>> 13, $ &= 8191;
      let Y = C + O * d + D * l + M * c + _ * a + y * (5 * m);
      C = Y >>> 13, Y &= 8191, Y += E * (5 * p) + w * (5 * g) + v * (5 * f) + I * (5 * h) + k * (5 * u), C += Y >>> 13, Y &= 8191;
      let K = C + O * u + D * d + M * l + _ * c + y * a;
      C = K >>> 13, K &= 8191, K += E * (5 * m) + w * (5 * p) + v * (5 * g) + I * (5 * f) + k * (5 * h), C += K >>> 13, K &= 8191;
      let j = C + O * h + D * u + M * d + _ * l + y * c;
      C = j >>> 13, j &= 8191, j += E * a + w * (5 * m) + v * (5 * p) + I * (5 * g) + k * (5 * f), C += j >>> 13, j &= 8191;
      let J = C + O * f + D * h + M * u + _ * d + y * l;
      C = J >>> 13, J &= 8191, J += E * c + w * a + v * (5 * m) + I * (5 * p) + k * (5 * g), C += J >>> 13, J &= 8191;
      let Z = C + O * g + D * f + M * h + _ * u + y * d;
      C = Z >>> 13, Z &= 8191, Z += E * l + w * c + v * a + I * (5 * m) + k * (5 * p), C += Z >>> 13, Z &= 8191;
      let de = C + O * p + D * g + M * f + _ * h + y * u;
      C = de >>> 13, de &= 8191, de += E * d + w * l + v * c + I * a + k * (5 * m), C += de >>> 13, de &= 8191;
      let X = C + O * m + D * p + M * g + _ * f + y * h;
      C = X >>> 13, X &= 8191, X += E * u + w * d + v * l + I * c + k * a, C += X >>> 13, X &= 8191, C = (C << 2) + C | 0, C = C + S | 0, S = C & 8191, C = C >>> 13, R += C, i[0] = S, i[1] = R, i[2] = $, i[3] = Y, i[4] = K, i[5] = j, i[6] = J, i[7] = Z, i[8] = de, i[9] = X;
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
      ui(n);
    }
    update(e) {
      nf(this), e = Kl(e), $t(e);
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
      ui(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      nf(this), s_(e, this), this.finished = true;
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
  function b_(t) {
    const e = (n, r) => t(r).update(Kl(n)).digest(), s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  const E_ = b_((t) => new y_(t));
  function v_(t, e, s, n, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], u = e[1], h = e[2], f = e[3], g = e[4], p = e[5], m = e[6], x = e[7], T = r, A = s[0], N = s[1], P = s[2], U = o, B = a, L = c, O = l, D = d, M = u, _ = h, y = f, E = g, w = p, v = m, I = x, k = T, C = A, S = N, R = P;
    for (let Y = 0; Y < i; Y += 2) U = U + D | 0, k = _e(k ^ U, 16), E = E + k | 0, D = _e(D ^ E, 12), U = U + D | 0, k = _e(k ^ U, 8), E = E + k | 0, D = _e(D ^ E, 7), B = B + M | 0, C = _e(C ^ B, 16), w = w + C | 0, M = _e(M ^ w, 12), B = B + M | 0, C = _e(C ^ B, 8), w = w + C | 0, M = _e(M ^ w, 7), L = L + _ | 0, S = _e(S ^ L, 16), v = v + S | 0, _ = _e(_ ^ v, 12), L = L + _ | 0, S = _e(S ^ L, 8), v = v + S | 0, _ = _e(_ ^ v, 7), O = O + y | 0, R = _e(R ^ O, 16), I = I + R | 0, y = _e(y ^ I, 12), O = O + y | 0, R = _e(R ^ O, 8), I = I + R | 0, y = _e(y ^ I, 7), U = U + M | 0, R = _e(R ^ U, 16), v = v + R | 0, M = _e(M ^ v, 12), U = U + M | 0, R = _e(R ^ U, 8), v = v + R | 0, M = _e(M ^ v, 7), B = B + _ | 0, k = _e(k ^ B, 16), I = I + k | 0, _ = _e(_ ^ I, 12), B = B + _ | 0, k = _e(k ^ B, 8), I = I + k | 0, _ = _e(_ ^ I, 7), L = L + y | 0, C = _e(C ^ L, 16), E = E + C | 0, y = _e(y ^ E, 12), L = L + y | 0, C = _e(C ^ L, 8), E = E + C | 0, y = _e(y ^ E, 7), O = O + D | 0, S = _e(S ^ O, 16), w = w + S | 0, D = _e(D ^ w, 12), O = O + D | 0, S = _e(S ^ O, 8), w = w + S | 0, D = _e(D ^ w, 7);
    let $ = 0;
    n[$++] = o + U | 0, n[$++] = a + B | 0, n[$++] = c + L | 0, n[$++] = l + O | 0, n[$++] = d + D | 0, n[$++] = u + M | 0, n[$++] = h + _ | 0, n[$++] = f + y | 0, n[$++] = g + E | 0, n[$++] = p + w | 0, n[$++] = m + v | 0, n[$++] = x + I | 0, n[$++] = T + k | 0, n[$++] = A + C | 0, n[$++] = N + S | 0, n[$++] = P + R | 0;
  }
  const C_ = w_(v_, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), A_ = new Uint8Array(16), cf = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update(A_.subarray(s));
  }, I_ = new Uint8Array(32);
  function lf(t, e, s, n, r) {
    const i = t(e, s, I_), o = E_.create(i);
    r && cf(o, r), cf(o, n);
    const a = l_(n.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return ui(i, a), c;
  }
  const N_ = (t) => (e, s, n) => ({
    encrypt(r, i) {
      const o = r.length;
      i = rf(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      const c = lf(t, e, s, a, n);
      return i.set(c, o), ui(c), i;
    },
    decrypt(r, i) {
      i = rf(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = lf(t, e, s, o, n);
      if (!a_(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, s, i, i, 1), ui(c), i;
    }
  });
  c_({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, N_(C_));
  class Hm extends Ga {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, Sm(e);
      const n = hn(s);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), _s(i);
    }
    update(e) {
      return Zn(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      Zn(this), Ss(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
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
  const Vm = (t, e, s) => new Hm(t, e).update(s).digest();
  Vm.create = (t, e) => new Hm(t, e);
  Uint8Array.from([
    0
  ]);
  const zm = Ya, jd = BigInt(0), Zl = BigInt(1);
  function Na(t, e = "") {
    if (typeof t != "boolean") {
      const s = e && `"${e}"`;
      throw new Error(s + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function mr(t, e, s = "") {
    const n = Ka(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!n || i && r !== e) {
      const o = s && `"${s}" `, a = i ? ` of length ${e}` : "", c = n ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function qo(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function Km(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? jd : BigInt("0x" + t);
  }
  function Ja(t) {
    return Km(ri(t));
  }
  function Sa(t) {
    return Ss(t), Km(ri(Uint8Array.from(t).reverse()));
  }
  function Wd(t, e) {
    return Aa(t.toString(16).padStart(e * 2, "0"));
  }
  function Hd(t, e) {
    return Wd(t, e).reverse();
  }
  function yt(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = Aa(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (Ka(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  const Mc = (t) => typeof t == "bigint" && jd <= t;
  function S_(t, e, s) {
    return Mc(t) && Mc(e) && Mc(s) && e <= t && t < s;
  }
  function Jl(t, e, s, n) {
    if (!S_(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function Gm(t) {
    let e;
    for (e = 0; t > jd; t >>= Zl, e += 1) ;
    return e;
  }
  const Io = (t) => (Zl << BigInt(t)) - Zl;
  function __(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    const n = (h) => new Uint8Array(h), r = (h) => Uint8Array.of(h);
    let i = n(t), o = n(t), a = 0;
    const c = () => {
      i.fill(1), o.fill(0), a = 0;
    }, l = (...h) => s(o, i, ...h), d = (h = n(0)) => {
      o = l(r(0), h), i = l(), h.length !== 0 && (o = l(r(1), h), i = l());
    }, u = () => {
      if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h = 0;
      const f = [];
      for (; h < e; ) {
        i = l();
        const g = i.slice();
        f.push(g), h += i.length;
      }
      return Mn(...f);
    };
    return (h, f) => {
      c(), d(h);
      let g;
      for (; !(g = f(u())); ) d();
      return c(), g;
    };
  }
  function Xa(t, e, s = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function n(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => n(r, i, false)), Object.entries(s).forEach(([r, i]) => n(r, i, true));
  }
  function df(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  const Lt = BigInt(0), xt = BigInt(1), wr = BigInt(2), Ym = BigInt(3), Zm = BigInt(4), Jm = BigInt(5), x_ = BigInt(7), Xm = BigInt(8), T_ = BigInt(9), Qm = BigInt(16);
  function Kt(t, e) {
    const s = t % e;
    return s >= Lt ? s : e + s;
  }
  function ms(t, e, s) {
    let n = t;
    for (; e-- > Lt; ) n *= n, n %= s;
    return n;
  }
  function uf(t, e) {
    if (t === Lt) throw new Error("invert: expected non-zero number");
    if (e <= Lt) throw new Error("invert: expected positive modulus, got " + e);
    let s = Kt(t, e), n = e, r = Lt, i = xt;
    for (; s !== Lt; ) {
      const o = n / s, a = n % s, c = r - i * o;
      n = s, s = a, r = i, i = c;
    }
    if (n !== xt) throw new Error("invert: does not exist");
    return Kt(r, e);
  }
  function Vd(t, e, s) {
    if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
  }
  function ew(t, e) {
    const s = (t.ORDER + xt) / Zm, n = t.pow(e, s);
    return Vd(t, n, e), n;
  }
  function O_(t, e) {
    const s = (t.ORDER - Jm) / Xm, n = t.mul(e, wr), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, wr), r), a = t.mul(i, t.sub(o, t.ONE));
    return Vd(t, a, e), a;
  }
  function k_(t) {
    const e = Xn(t), s = tw(t), n = s(e, e.neg(e.ONE)), r = s(e, n), i = s(e, e.neg(n)), o = (t + x_) / Qm;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, n);
      const u = a.mul(l, r), h = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(u), c);
      l = a.cmov(l, d, f), d = a.cmov(h, u, g);
      const p = a.eql(a.sqr(d), c), m = a.cmov(l, d, p);
      return Vd(a, m, c), m;
    };
  }
  function tw(t) {
    if (t < Ym) throw new Error("sqrt is not defined for small field");
    let e = t - xt, s = 0;
    for (; e % wr === Lt; ) e /= wr, s++;
    let n = wr;
    const r = Xn(t);
    for (; hf(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return ew;
    let i = r.pow(n, e);
    const o = (e + xt) / wr;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (hf(a, c) !== 1) throw new Error("Cannot find square root");
      let l = s, d = a.mul(a.ONE, i), u = a.pow(c, e), h = a.pow(c, o);
      for (; !a.eql(u, a.ONE); ) {
        if (a.is0(u)) return a.ZERO;
        let f = 1, g = a.sqr(u);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = xt << BigInt(l - f - 1), m = a.pow(d, p);
        l = f, d = a.sqr(m), u = a.mul(u, d), h = a.mul(h, m);
      }
      return h;
    };
  }
  function P_(t) {
    return t % Zm === Ym ? ew : t % Xm === Jm ? O_ : t % Qm === T_ ? k_(t) : tw(t);
  }
  const R_ = [
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
  function $_(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, s = R_.reduce((n, r) => (n[r] = "function", n), e);
    return Xa(t, s), t;
  }
  function U_(t, e, s) {
    if (s < Lt) throw new Error("invalid exponent, negatives unsupported");
    if (s === Lt) return t.ONE;
    if (s === xt) return e;
    let n = t.ONE, r = e;
    for (; s > Lt; ) s & xt && (n = t.mul(n, r)), r = t.sqr(r), s >>= xt;
    return n;
  }
  function sw(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function hf(t, e) {
    const s = (t.ORDER - xt) / wr, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function nw(t, e) {
    e !== void 0 && Yn(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Xn(t, e, s = false, n = {}) {
    if (t <= Lt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
      const h = e;
      h.BITS && (r = h.BITS), h.sqrt && (i = h.sqrt), typeof h.isLE == "boolean" && (s = h.isLE), typeof h.modFromBytes == "boolean" && (o = h.modFromBytes), a = h.allowedLengths;
    } else typeof e == "number" && (r = e), n.sqrt && (i = n.sqrt);
    const { nBitLength: c, nByteLength: l } = nw(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const u = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: Io(c),
      ZERO: Lt,
      ONE: xt,
      allowedLengths: a,
      create: (h) => Kt(h, t),
      isValid: (h) => {
        if (typeof h != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof h);
        return Lt <= h && h < t;
      },
      is0: (h) => h === Lt,
      isValidNot0: (h) => !u.is0(h) && u.isValid(h),
      isOdd: (h) => (h & xt) === xt,
      neg: (h) => Kt(-h, t),
      eql: (h, f) => h === f,
      sqr: (h) => Kt(h * h, t),
      add: (h, f) => Kt(h + f, t),
      sub: (h, f) => Kt(h - f, t),
      mul: (h, f) => Kt(h * f, t),
      pow: (h, f) => U_(u, h, f),
      div: (h, f) => Kt(h * uf(f, t), t),
      sqrN: (h) => h * h,
      addN: (h, f) => h + f,
      subN: (h, f) => h - f,
      mulN: (h, f) => h * f,
      inv: (h) => uf(h, t),
      sqrt: i || ((h) => (d || (d = P_(t)), d(u, h))),
      toBytes: (h) => s ? Hd(h, l) : Wd(h, l),
      fromBytes: (h, f = true) => {
        if (a) {
          if (!a.includes(h.length) || h.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + h.length);
          const p = new Uint8Array(l);
          p.set(h, s ? 0 : p.length - h.length), h = p;
        }
        if (h.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + h.length);
        let g = s ? Sa(h) : Ja(h);
        if (o && (g = Kt(g, t)), !f && !u.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (h) => sw(u, h),
      cmov: (h, f, g) => g ? f : h
    });
    return Object.freeze(u);
  }
  function rw(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function iw(t) {
    const e = rw(t);
    return e + Math.ceil(e / 2);
  }
  function B_(t, e, s = false) {
    const n = t.length, r = rw(e), i = iw(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? Sa(t) : Ja(t), a = Kt(o, e - xt) + xt;
    return s ? Hd(a, r) : Wd(a, r);
  }
  const hi = BigInt(0), yr = BigInt(1);
  function _a(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function Fc(t, e) {
    const s = sw(t.Fp, e.map((n) => n.Z));
    return e.map((n, r) => t.fromAffine(n.toAffine(s[r])));
  }
  function ow(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function qc(t, e) {
    ow(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = Io(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function ff(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += yr);
    const l = e * n, d = l + Math.abs(a) - 1, u = a === 0, h = a < 0, f = e % 2 !== 0;
    return {
      nextN: c,
      offset: d,
      isZero: u,
      isNeg: h,
      isNegF: f,
      offsetF: l
    };
  }
  function D_(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function L_(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const jc = /* @__PURE__ */ new WeakMap(), aw = /* @__PURE__ */ new WeakMap();
  function Wc(t) {
    return aw.get(t) || 1;
  }
  function pf(t) {
    if (t !== hi) throw new Error("invalid wNAF");
  }
  class M_ {
    constructor(e, s) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
    }
    _unsafeLadder(e, s, n = this.ZERO) {
      let r = e;
      for (; s > hi; ) s & yr && (n = n.add(r)), r = r.double(), s >>= yr;
      return n;
    }
    precomputeWindow(e, s) {
      const { windows: n, windowSize: r } = qc(s, this.bits), i = [];
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
      const o = qc(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: u, isNegF: h, offsetF: f } = ff(n, a, o);
        n = c, d ? i = i.add(_a(h, s[f])) : r = r.add(_a(u, s[l]));
      }
      return pf(n), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, s, n, r = this.ZERO) {
      const i = qc(e, this.bits);
      for (let o = 0; o < i.windows && n !== hi; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = ff(n, o, i);
        if (n = a, !l) {
          const u = s[c];
          r = r.add(d ? u.negate() : u);
        }
      }
      return pf(n), r;
    }
    getPrecomputes(e, s, n) {
      let r = jc.get(s);
      return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (r = n(r)), jc.set(s, r))), r;
    }
    cached(e, s, n) {
      const r = Wc(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), s);
    }
    unsafe(e, s, n, r) {
      const i = Wc(e);
      return i === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), s, r);
    }
    createCache(e, s) {
      ow(s, this.bits), aw.set(e, s), jc.delete(e);
    }
    hasCache(e) {
      return Wc(e) !== 1;
    }
  }
  function F_(t, e, s, n) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; s > hi || n > hi; ) s & yr && (i = i.add(r)), n & yr && (o = o.add(r)), r = r.double(), s >>= yr, n >>= yr;
    return {
      p1: i,
      p2: o
    };
  }
  function q_(t, e, s, n) {
    D_(s, t), L_(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = Gm(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = Io(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const m = n[p], x = Number(m >> BigInt(f) & l);
        d[x] = d[x].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, m = o; p > 0; p--) m = m.add(d[p]), g = g.add(m);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function gf(t, e, s) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return $_(e), e;
    } else return Xn(t, {
      isLE: s
    });
  }
  function j_(t, e, s = {}, n) {
    if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > hi)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = gf(e.p, s.Fp, n), i = gf(e.n, s.Fn, n), o = [
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
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), Om("HashToScalar-");
  const Oi = BigInt(0), Hr = BigInt(1), jo = BigInt(2);
  function W_(t) {
    return Xa(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function H_(t) {
    const e = W_(t), { P: s, type: n, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = n === "x25519";
    if (!a && n !== "x448") throw new Error("invalid type");
    const c = o || Md, l = a ? 255 : 448, d = a ? 32 : 56, u = BigInt(a ? 9 : 5), h = BigInt(a ? 121665 : 39081), f = a ? jo ** BigInt(254) : jo ** BigInt(447), g = a ? BigInt(8) * jo ** BigInt(251) - Hr : BigInt(4) * jo ** BigInt(445) - Hr, p = f + g + Hr, m = (_) => Kt(_, s), x = T(u);
    function T(_) {
      return Hd(m(_), d);
    }
    function A(_) {
      const y = yt("u coordinate", _, d);
      return a && (y[31] &= 127), m(Sa(y));
    }
    function N(_) {
      return Sa(r(yt("scalar", _, d)));
    }
    function P(_, y) {
      const E = L(A(y), N(_));
      if (E === Oi) throw new Error("invalid private or public key received");
      return T(E);
    }
    function U(_) {
      return P(_, x);
    }
    function B(_, y, E) {
      const w = m(_ * (y - E));
      return y = m(y - w), E = m(E + w), {
        x_2: y,
        x_3: E
      };
    }
    function L(_, y) {
      Jl("u", _, Oi, s), Jl("scalar", y, f, p);
      const E = y, w = _;
      let v = Hr, I = Oi, k = _, C = Hr, S = Oi;
      for (let $ = BigInt(l - 1); $ >= Oi; $--) {
        const Y = E >> $ & Hr;
        S ^= Y, { x_2: v, x_3: k } = B(S, v, k), { x_2: I, x_3: C } = B(S, I, C), S = Y;
        const K = v + I, j = m(K * K), J = v - I, Z = m(J * J), de = j - Z, X = k + C, ue = k - C, Fe = m(ue * K), We = m(X * J), je = Fe + We, Et = Fe - We;
        k = m(je * je), C = m(w * m(Et * Et)), v = m(j * Z), I = m(de * (j + m(h * de)));
      }
      ({ x_2: v, x_3: k } = B(S, v, k)), { x_2: I, x_3: C } = B(S, I, C);
      const R = i(I);
      return m(v * R);
    }
    const O = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, D = (_ = c(d)) => (Ss(_, O.seed), _);
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
      GuBytes: x.slice(),
      lengths: O
    };
  }
  const V_ = BigInt(1), mf = BigInt(2), z_ = BigInt(3), K_ = BigInt(5);
  BigInt(8);
  const cw = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), G_ = {
    p: cw,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function Y_(t) {
    const e = BigInt(10), s = BigInt(20), n = BigInt(40), r = BigInt(80), i = cw, o = t * t % i * t % i, a = ms(o, mf, i) * o % i, c = ms(a, V_, i) * t % i, l = ms(c, K_, i) * c % i, d = ms(l, e, i) * l % i, u = ms(d, s, i) * d % i, h = ms(u, n, i) * u % i, f = ms(h, r, i) * h % i, g = ms(f, r, i) * h % i, p = ms(g, e, i) * l % i;
    return {
      pow_p_5_8: ms(p, mf, i) * t % i,
      b2: o
    };
  }
  function Z_(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const J_ = Xn(G_.p, {
    isLE: true
  });
  (() => {
    const t = J_.ORDER;
    return H_({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: s, b2: n } = Y_(e);
        return Kt(ms(s, z_, t) * n, t);
      },
      adjustScalarBytes: Z_
    });
  })();
  const wf = (t, e) => (t + (t >= 0 ? e : -e) / lw) / e;
  function X_(t, e, s) {
    const [[n, r], [i, o]] = e, a = wf(o * t, s), c = wf(-r * t, s);
    let l = t - a * n - c * i, d = -a * r - c * o;
    const u = l < dn, h = d < dn;
    u && (l = -l), h && (d = -d);
    const f = Io(Math.ceil(Gm(s) / 2)) + ii;
    if (l < dn || l >= f || d < dn || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: u,
      k1: l,
      k2neg: h,
      k2: d
    };
  }
  function Xl(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function Hc(t, e) {
    const s = {};
    for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
    return Na(s.lowS, "lowS"), Na(s.prehash, "prehash"), s.format !== void 0 && Xl(s.format), s;
  }
  class Q_ extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const rn = {
    Err: Q_,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = rn;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = qo(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? qo(r.length / 2 | 128) : "";
        return qo(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = rn;
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
        const { Err: e } = rn;
        if (t < dn) throw new e("integer: negative integers are not allowed");
        let s = qo(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = rn;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Ja(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = rn, r = yt("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = rn, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  }, dn = BigInt(0), ii = BigInt(1), lw = BigInt(2), Wo = BigInt(3), ex = BigInt(4);
  function Xr(t, e) {
    const { BYTES: s } = t;
    let n;
    if (typeof e == "bigint") n = e;
    else {
      let r = yt("private key", e);
      try {
        n = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
    return n;
  }
  function tx(t, e = {}) {
    const s = j_("weierstrass", t, e), { Fp: n, Fn: r } = s;
    let i = s.CURVE;
    const { h: o, n: a } = i;
    Xa(e, {}, {
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
    const l = uw(n, r);
    function d() {
      if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function u(_, y, E) {
      const { x: w, y: v } = y.toAffine(), I = n.toBytes(w);
      if (Na(E, "isCompressed"), E) {
        d();
        const k = !n.isOdd(v);
        return Mn(dw(k), I);
      } else return Mn(Uint8Array.of(4), I, n.toBytes(v));
    }
    function h(_) {
      mr(_, void 0, "Point");
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
    const f = e.toBytes || u, g = e.fromBytes || h;
    function p(_) {
      const y = n.sqr(_), E = n.mul(y, _);
      return n.add(n.add(E, n.mul(_, i.a)), i.b);
    }
    function m(_, y) {
      const E = n.sqr(y), w = p(_);
      return n.eql(E, w);
    }
    if (!m(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const x = n.mul(n.pow(i.a, Wo), ex), T = n.mul(n.sqr(i.b), BigInt(27));
    if (n.is0(n.add(x, T))) throw new Error("bad curve params: a or b");
    function A(_, y, E = false) {
      if (!n.isValid(y) || E && n.is0(y)) throw new Error(`bad point coordinate ${_}`);
      return y;
    }
    function N(_) {
      if (!(_ instanceof O)) throw new Error("ProjectivePoint expected");
    }
    function P(_) {
      if (!c || !c.basises) throw new Error("no endo");
      return X_(_, c.basises, r.ORDER);
    }
    const U = df((_, y) => {
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
    }), B = df((_) => {
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
      return E = new O(n.mul(E.X, _), E.Y, E.Z), y = _a(w, y), E = _a(v, E), y.add(E);
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
        const E = O.fromAffine(g(mr(y, void 0, "point")));
        return E.assertValidity(), E;
      }
      static fromHex(y) {
        return O.fromBytes(yt("pointHex", y));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(y = 8, E = true) {
        return M.createCache(this, y), E || this.multiply(Wo), this;
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
        const { a: y, b: E } = i, w = n.mul(E, Wo), { X: v, Y: I, Z: k } = this;
        let C = n.ZERO, S = n.ZERO, R = n.ZERO, $ = n.mul(v, v), Y = n.mul(I, I), K = n.mul(k, k), j = n.mul(v, I);
        return j = n.add(j, j), R = n.mul(v, k), R = n.add(R, R), C = n.mul(y, R), S = n.mul(w, K), S = n.add(C, S), C = n.sub(Y, S), S = n.add(Y, S), S = n.mul(C, S), C = n.mul(j, C), R = n.mul(w, R), K = n.mul(y, K), j = n.sub($, K), j = n.mul(y, j), j = n.add(j, R), R = n.add($, $), $ = n.add(R, $), $ = n.add($, K), $ = n.mul($, j), S = n.add(S, $), K = n.mul(I, k), K = n.add(K, K), $ = n.mul(K, j), C = n.sub(C, $), R = n.mul(K, Y), R = n.add(R, R), R = n.add(R, R), new O(C, S, R);
      }
      add(y) {
        N(y);
        const { X: E, Y: w, Z: v } = this, { X: I, Y: k, Z: C } = y;
        let S = n.ZERO, R = n.ZERO, $ = n.ZERO;
        const Y = i.a, K = n.mul(i.b, Wo);
        let j = n.mul(E, I), J = n.mul(w, k), Z = n.mul(v, C), de = n.add(E, w), X = n.add(I, k);
        de = n.mul(de, X), X = n.add(j, J), de = n.sub(de, X), X = n.add(E, v);
        let ue = n.add(I, C);
        return X = n.mul(X, ue), ue = n.add(j, Z), X = n.sub(X, ue), ue = n.add(w, v), S = n.add(k, C), ue = n.mul(ue, S), S = n.add(J, Z), ue = n.sub(ue, S), $ = n.mul(Y, X), S = n.mul(K, Z), $ = n.add(S, $), S = n.sub(J, $), $ = n.add(J, $), R = n.mul(S, $), J = n.add(j, j), J = n.add(J, j), Z = n.mul(Y, Z), X = n.mul(K, X), J = n.add(J, Z), Z = n.sub(j, Z), Z = n.mul(Y, Z), X = n.add(X, Z), j = n.mul(J, X), R = n.add(R, j), j = n.mul(ue, X), S = n.mul(de, S), S = n.sub(S, j), j = n.mul(de, J), $ = n.mul(ue, $), $ = n.add($, j), new O(S, R, $);
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
        const I = (k) => M.cached(this, k, (C) => Fc(O, C));
        if (E) {
          const { k1neg: k, k1: C, k2neg: S, k2: R } = P(y), { p: $, f: Y } = I(C), { p: K, f: j } = I(R);
          v = Y.add(j), w = L(E.beta, $, K, k, S);
        } else {
          const { p: k, f: C } = I(y);
          w = k, v = C;
        }
        return Fc(O, [
          w,
          v
        ])[0];
      }
      multiplyUnsafe(y) {
        const { endo: E } = e, w = this;
        if (!r.isValid(y)) throw new Error("invalid scalar: out of range");
        if (y === dn || w.is0()) return O.ZERO;
        if (y === ii) return w;
        if (M.hasCache(this)) return this.multiply(y);
        if (E) {
          const { k1neg: v, k1: I, k2neg: k, k2: C } = P(y), { p1: S, p2: R } = F_(O, w, I, C);
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
        return o === ii ? true : y ? y(O, this) : M.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: y } = e;
        return o === ii ? this : y ? y(O, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(y = true) {
        return Na(y, "isCompressed"), this.assertValidity(), f(O, this, y);
      }
      toHex(y = true) {
        return ri(this.toBytes(y));
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
        return Fc(O, y);
      }
      static msm(y, E) {
        return q_(O, r, y, E);
      }
      static fromPrivateKey(y) {
        return O.BASE.multiply(Xr(r, y));
      }
    }
    O.BASE = new O(i.Gx, i.Gy, n.ONE), O.ZERO = new O(n.ZERO, n.ONE, n.ZERO), O.Fp = n, O.Fn = r;
    const D = r.BITS, M = new M_(O, e.endo ? Math.ceil(D / 2) : D);
    return O.BASE.precompute(8), O;
  }
  function dw(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function uw(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function sx(t, e = {}) {
    const { Fn: s } = t, n = e.randomBytes || Md, r = Object.assign(uw(t.Fp, s), {
      seed: iw(s.ORDER)
    });
    function i(h) {
      try {
        return !!Xr(s, h);
      } catch {
        return false;
      }
    }
    function o(h, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const m = h.length;
        return f === true && m !== g || f === false && m !== p ? false : !!t.fromBytes(h);
      } catch {
        return false;
      }
    }
    function a(h = n(r.seed)) {
      return B_(mr(h, r.seed, "seed"), s.ORDER);
    }
    function c(h, f = true) {
      return t.BASE.multiply(Xr(s, h)).toBytes(f);
    }
    function l(h) {
      const f = a(h);
      return {
        secretKey: f,
        publicKey: c(f)
      };
    }
    function d(h) {
      if (typeof h == "bigint") return false;
      if (h instanceof t) return true;
      const { secretKey: f, publicKey: g, publicKeyUncompressed: p } = r;
      if (s.allowedLengths || f === g) return;
      const m = yt("key", h).length;
      return m === g || m === p;
    }
    function u(h, f, g = true) {
      if (d(h) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = Xr(s, h);
      return t.fromHex(f).multiply(p).toBytes(g);
    }
    return Object.freeze({
      getPublicKey: c,
      getSharedSecret: u,
      keygen: l,
      Point: t,
      utils: {
        isValidSecretKey: i,
        isValidPublicKey: o,
        randomSecretKey: a,
        isValidPrivateKey: i,
        randomPrivateKey: a,
        normPrivateKeyToScalar: (h) => Xr(s, h),
        precompute(h = 8, f = t.BASE) {
          return f.precompute(h, false);
        }
      },
      lengths: r
    });
  }
  function nx(t, e, s = {}) {
    Sm(e), Xa(s, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const n = s.randomBytes || Md, r = s.hmac || ((E, ...w) => Vm(e, E, Mn(...w))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: u, utils: h, lengths: f } = sx(t, s), g = {
      prehash: false,
      lowS: typeof s.lowS == "boolean" ? s.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function m(E) {
      const w = a >> ii;
      return E > w;
    }
    function x(E, w) {
      if (!o.isValidNot0(w)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
      return w;
    }
    function T(E, w) {
      Xl(w);
      const v = f.signature, I = w === "compact" ? v : w === "recovered" ? v + 1 : void 0;
      return mr(E, I, `${w} signature`);
    }
    class A {
      constructor(w, v, I) {
        this.r = x("r", w), this.s = x("s", v), I != null && (this.recovery = I), Object.freeze(this);
      }
      static fromBytes(w, v = p) {
        T(w, v);
        let I;
        if (v === "der") {
          const { r: R, s: $ } = rn.toSig(mr(w));
          return new A(R, $);
        }
        v === "recovered" && (I = w[0], v = "compact", w = w.subarray(1));
        const k = o.BYTES, C = w.subarray(0, k), S = w.subarray(k, k * 2);
        return new A(o.fromBytes(C), o.fromBytes(S), I);
      }
      static fromHex(w, v) {
        return this.fromBytes(Aa(w), v);
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
        if (a * lw < v && C > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const S = C === 2 || C === 3 ? I + a : I;
        if (!i.isValid(S)) throw new Error("recovery id 2 or 3 invalid");
        const R = i.toBytes(S), $ = t.fromBytes(Mn(dw((C & 1) === 0), R)), Y = o.inv(S), K = P(yt("msgHash", w)), j = o.create(-K * Y), J = o.create(k * Y), Z = t.BASE.multiplyUnsafe(j).add($.multiplyUnsafe(J));
        if (Z.is0()) throw new Error("point at infinify");
        return Z.assertValidity(), Z;
      }
      hasHighS() {
        return m(this.s);
      }
      toBytes(w = p) {
        if (Xl(w), w === "der") return Aa(rn.hexFromSig(this));
        const v = o.toBytes(this.r), I = o.toBytes(this.s);
        if (w === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return Mn(Uint8Array.of(this.recovery), v, I);
        }
        return Mn(v, I);
      }
      toHex(w) {
        return ri(this.toBytes(w));
      }
      assertValidity() {
      }
      static fromCompact(w) {
        return A.fromBytes(yt("sig", w), "compact");
      }
      static fromDER(w) {
        return A.fromBytes(yt("sig", w), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new A(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return ri(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return ri(this.toBytes("compact"));
      }
    }
    const N = s.bits2int || function(E) {
      if (E.length > 8192) throw new Error("input is too large");
      const w = Ja(E), v = E.length * 8 - c;
      return v > 0 ? w >> BigInt(v) : w;
    }, P = s.bits2int_modN || function(E) {
      return o.create(N(E));
    }, U = Io(c);
    function B(E) {
      return Jl("num < 2^" + c, E, dn, U), o.toBytes(E);
    }
    function L(E, w) {
      return mr(E, void 0, "message"), w ? mr(e(E), void 0, "prehashed message") : E;
    }
    function O(E, w, v) {
      if ([
        "recovered",
        "canonical"
      ].some((J) => J in v)) throw new Error("sign() legacy options not supported");
      const { lowS: I, prehash: k, extraEntropy: C } = Hc(v, g);
      E = L(E, k);
      const S = P(E), R = Xr(o, w), $ = [
        B(R),
        B(S)
      ];
      if (C != null && C !== false) {
        const J = C === true ? n(f.secretKey) : C;
        $.push(yt("extraEntropy", J));
      }
      const Y = Mn(...$), K = S;
      function j(J) {
        const Z = N(J);
        if (!o.isValidNot0(Z)) return;
        const de = o.inv(Z), X = t.BASE.multiply(Z).toAffine(), ue = o.create(X.x);
        if (ue === dn) return;
        const Fe = o.create(de * o.create(K + ue * R));
        if (Fe === dn) return;
        let We = (X.x === ue ? 0 : 2) | Number(X.y & ii), je = Fe;
        return I && m(Fe) && (je = o.neg(Fe), We ^= 1), new A(ue, je, We);
      }
      return {
        seed: Y,
        k2sig: j
      };
    }
    function D(E, w, v = {}) {
      E = yt("message", E);
      const { seed: I, k2sig: k } = O(E, w, v);
      return __(e.outputLen, o.BYTES, r)(I, k);
    }
    function M(E) {
      let w;
      const v = typeof E == "string" || Ka(E), I = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
      if (!v && !I) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (I) w = new A(E.r, E.s);
      else if (v) {
        try {
          w = A.fromBytes(yt("sig", E), "der");
        } catch (k) {
          if (!(k instanceof rn.Err)) throw k;
        }
        if (!w) try {
          w = A.fromBytes(yt("sig", E), "compact");
        } catch {
          return false;
        }
      }
      return w || false;
    }
    function _(E, w, v, I = {}) {
      const { lowS: k, prehash: C, format: S } = Hc(I, g);
      if (v = yt("publicKey", v), w = L(yt("message", w), C), "strict" in I) throw new Error("options.strict was renamed to lowS");
      const R = S === void 0 ? M(E) : A.fromBytes(yt("sig", E), S);
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
      const { prehash: I } = Hc(v, g);
      return w = L(w, I), A.fromBytes(E, "recovered").recoverPublicKey(w).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: u,
      utils: h,
      lengths: f,
      Point: t,
      sign: D,
      verify: _,
      recoverPublicKey: y,
      Signature: A,
      hash: e
    });
  }
  function rx(t) {
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
    const r = Xn(e.n, {
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
  function ix(t) {
    const { CURVE: e, curveOpts: s } = rx(t), n = {
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
  function ox(t, e) {
    const s = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: s,
      CURVE: Object.assign({}, t, nw(s.Fn.ORDER, s.Fn.BITS))
    });
  }
  function ax(t) {
    const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: r } = ix(t), i = tx(e, s), o = nx(i, n, r);
    return ox(t, o);
  }
  function Ql(t, e) {
    const s = (n) => ax({
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
  }, fw = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, pw = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, cx = Xn(hw.p), lx = Xn(fw.p), dx = Xn(pw.p);
  Ql({
    ...hw,
    Fp: cx,
    lowS: false
  }, Ya);
  Ql({
    ...fw,
    Fp: lx,
    lowS: false
  }, bS), Ql({
    ...pw,
    Fp: dx,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, yS);
  const ed = "base16", sr = "base64pad", ki = "base64url", ux = "utf8", Vc = 1, hx = 2;
  function zc(t) {
    const e = zm(Ut(t, ed));
    return bt(e, ed);
  }
  function On(t) {
    const e = zm(Ut(t, ux));
    return bt(e, ed);
  }
  function Ho(t, e, s) {
    return `${t}?wc_ev=${s}&topic=${e}`;
  }
  var fx = Object.defineProperty, px = Object.defineProperties, gx = Object.getOwnPropertyDescriptors, yf = Object.getOwnPropertySymbols, mx = Object.prototype.hasOwnProperty, wx = Object.prototype.propertyIsEnumerable, bf = (t, e, s) => e in t ? fx(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, yx = (t, e) => {
    for (var s in e || (e = {})) mx.call(e, s) && bf(t, s, e[s]);
    if (yf) for (var s of yf(e)) wx.call(e, s) && bf(t, s, e[s]);
    return t;
  }, bx = (t, e) => px(t, gx(e));
  function yi(t) {
    const e = [];
    return t.forEach((s) => {
      const [n, r] = s.split(":");
      e.push(`${n}:${r}`);
    }), e;
  }
  function gw(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...yi(s.accounts));
    }), [
      ...new Set(e)
    ];
  }
  function Ex(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...s.methods);
    }), [
      ...new Set(e)
    ];
  }
  function vx(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...s.events);
    }), [
      ...new Set(e)
    ];
  }
  function Cx(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      yi(n.accounts).includes(e) && s.push(...n.methods);
    }), s;
  }
  function Ax(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      yi(n.accounts).includes(e) && s.push(...n.events);
    }), s;
  }
  function Qa(t) {
    return t.includes(":");
  }
  function Qr(t) {
    return Qa(t) ? t.split(":")[0] : t;
  }
  function Ef(t) {
    var e, s, n;
    const r = {};
    if (!qs(t)) return r;
    for (const [i, o] of Object.entries(t)) {
      const a = Qa(i) ? [
        i
      ] : o.chains, c = o.methods || [], l = o.events || [], d = Qr(i);
      r[d] = bx(yx({}, r[d]), {
        chains: Fs(a, (e = r[d]) == null ? void 0 : e.chains),
        methods: Fs(c, (s = r[d]) == null ? void 0 : s.methods),
        events: Fs(l, (n = r[d]) == null ? void 0 : n.events)
      });
    }
    return r;
  }
  function Ix(t) {
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
  function vf(t, e) {
    e = e.map((n) => n.replace("did:pkh:", ""));
    const s = Ix(e);
    for (const [n, r] of Object.entries(s)) r.methods ? r.methods = Fs(r.methods, t) : r.methods = t, r.events = [
      "chainChanged",
      "accountsChanged"
    ];
    return s;
  }
  function Nx(t, e) {
    var s, n, r, i, o, a;
    const c = Ef(t), l = Ef(e), d = {}, u = Object.keys(c).concat(Object.keys(l));
    for (const h of u) d[h] = {
      chains: Fs((s = c[h]) == null ? void 0 : s.chains, (n = l[h]) == null ? void 0 : n.chains),
      methods: Fs((r = c[h]) == null ? void 0 : r.methods, (i = l[h]) == null ? void 0 : i.methods),
      events: Fs((o = c[h]) == null ? void 0 : o.events, (a = l[h]) == null ? void 0 : a.events)
    };
    return d;
  }
  const Sx = {
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
  }, _x = {
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
    const { message: s, code: n } = _x[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Ye(t, e) {
    const { message: s, code: n } = Sx[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function fn(t, e) {
    return !!Array.isArray(t);
  }
  function qs(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
  }
  function Gt(t) {
    return typeof t > "u";
  }
  function Qe(t, e) {
    return e && Gt(t) ? true : typeof t == "string" && !!t.trim().length;
  }
  function zd(t, e) {
    return typeof t == "number" && !isNaN(t);
  }
  function xx(t, e) {
    const { requiredNamespaces: s } = e, n = Object.keys(t.namespaces), r = Object.keys(s);
    let i = true;
    return gr(r, n) ? (n.forEach((o) => {
      const { accounts: a, methods: c, events: l } = t.namespaces[o], d = yi(a), u = s[o];
      (!gr(Em(o, u), d) || !gr(u.methods, c) || !gr(u.events, l)) && (i = false);
    }), i) : false;
  }
  function xa(t) {
    return Qe(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
  }
  function Tx(t) {
    if (Qe(t, false) && t.includes(":")) {
      const e = t.split(":");
      if (e.length === 3) {
        const s = e[0] + ":" + e[1];
        return !!e[2] && xa(s);
      }
    }
    return false;
  }
  function Ox(t, e) {
    let s = null;
    return Qe(t == null ? void 0 : t.publicKey, false) || (s = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)), s;
  }
  function Cf(t) {
    let e = true;
    return fn(t) ? t.length && (e = t.every((s) => Qe(s, false))) : e = false, e;
  }
  function kx(t, e, s) {
    let n = null;
    return fn(e) && e.length ? e.forEach((r) => {
      n || xa(r) || (n = Ye("UNSUPPORTED_CHAINS", `${s}, chain ${r} should be a string and conform to "namespace:chainId" format`));
    }) : xa(t) || (n = Ye("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
  }
  function Px(t, e, s) {
    let n = null;
    return Object.entries(t).forEach(([r, i]) => {
      if (n) return;
      const o = kx(r, Em(r, i), `${e} ${s}`);
      o && (n = o);
    }), n;
  }
  function Rx(t, e) {
    let s = null;
    return fn(t) ? t.forEach((n) => {
      s || Tx(n) || (s = Ye("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
    }) : s = Ye("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s;
  }
  function $x(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = Rx(n == null ? void 0 : n.accounts, `${e} namespace`);
      r && (s = r);
    }), s;
  }
  function Ux(t, e) {
    let s = null;
    return Cf(t == null ? void 0 : t.methods) ? Cf(t == null ? void 0 : t.events) || (s = Ye("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = Ye("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), s;
  }
  function mw(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = Ux(n, `${e}, namespace`);
      r && (s = r);
    }), s;
  }
  function Bx(t, e, s) {
    let n = null;
    if (t && qs(t)) {
      const r = mw(t, e);
      r && (n = r);
      const i = Px(t, e, s);
      i && (n = i);
    } else n = ce("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
    return n;
  }
  function Kc(t, e) {
    let s = null;
    if (t && qs(t)) {
      const n = mw(t, e);
      n && (s = n);
      const r = $x(t, e);
      r && (s = r);
    } else s = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return s;
  }
  function ww(t) {
    return Qe(t.protocol, true);
  }
  function Dx(t, e) {
    let s = false;
    return t ? t && fn(t) && t.length && t.forEach((n) => {
      s = ww(n);
    }) : s = true, s;
  }
  function Lx(t) {
    return typeof t == "number";
  }
  function fs(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function Mx(t) {
    return !(!t || typeof t != "object" || !t.code || !zd(t.code) || !t.message || !Qe(t.message, false));
  }
  function Fx(t) {
    return !(Gt(t) || !Qe(t.method, false));
  }
  function qx(t) {
    return !(Gt(t) || Gt(t.result) && Gt(t.error) || !zd(t.id) || !Qe(t.jsonrpc, false));
  }
  function jx(t) {
    return !(Gt(t) || !Qe(t.name, false));
  }
  function Af(t, e) {
    return !(!xa(e) || !gw(t).includes(e));
  }
  function Wx(t, e, s) {
    return Qe(s, false) ? Cx(t, e).includes(s) : false;
  }
  function Hx(t, e, s) {
    return Qe(s, false) ? Ax(t, e).includes(s) : false;
  }
  function If(t, e, s) {
    let n = null;
    const r = Vx(t), i = zx(e), o = Object.keys(r), a = Object.keys(i), c = Nf(Object.keys(t)), l = Nf(Object.keys(e)), d = c.filter((u) => !l.includes(u));
    return d.length && (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), gr(o, a) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((u) => {
      if (!u.includes(":") || n) return;
      const h = yi(e[u].accounts);
      h.includes(u) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${h.toString()}`));
    }), o.forEach((u) => {
      n || (gr(r[u].methods, i[u].methods) ? gr(r[u].events, i[u].events) || (n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${u}`)) : n = ce("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${u}`));
    }), n;
  }
  function Vx(t) {
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
  function Nf(t) {
    return [
      ...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))
    ];
  }
  function zx(t) {
    const e = {};
    return Object.keys(t).forEach((s) => {
      var _a2;
      s.includes(":") ? e[s] = t[s] : (_a2 = yi(t[s].accounts)) == null ? void 0 : _a2.forEach((r) => {
        e[r] = {
          accounts: t[s].accounts.filter((i) => i.includes(`${r}:`)),
          methods: t[s].methods,
          events: t[s].events
        };
      });
    }), e;
  }
  function Kx(t, e) {
    return zd(t) && t <= e.max && t >= e.min;
  }
  const Gc = {};
  class Pi {
    static get(e) {
      return Gc[e];
    }
    static set(e, s) {
      Gc[e] = s;
    }
    static delete(e) {
      delete Gc[e];
    }
  }
  function Gx(t) {
    const e = Co.decode(t);
    if (e.length < 33) throw new Error("Too short to contain a public key");
    return e.slice(1, 33);
  }
  function Yx({ publicKey: t, signature: e, payload: s }) {
    var n;
    const r = td(s.method), i = 128 | parseInt(((n = s.version) == null ? void 0 : n.toString()) || "4"), o = Xx(s.address), a = s.era === "00" ? new Uint8Array([
      0
    ]) : td(s.era);
    if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
    const c = parseInt(s.nonce, 16), l = new Uint8Array([
      c & 255,
      c >> 8 & 255
    ]), d = BigInt(`0x${Jx(s.tip)}`), u = eT(d), h = new Uint8Array([
      0,
      ...t,
      o,
      ...e,
      ...a,
      ...l,
      ...u,
      ...r
    ]), f = Qx(h.length + 1);
    return new Uint8Array([
      ...f,
      i,
      ...h
    ]);
  }
  function Zx(t) {
    const e = td(t), s = u0.blake2b(e, void 0, 32);
    return "0x" + Ie.from(s).toString("hex");
  }
  function td(t) {
    return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
  }
  function Jx(t) {
    return t.startsWith("0x") ? t.slice(2) : t;
  }
  function Xx(t) {
    const e = Co.decode(t)[0];
    return e === 42 ? 0 : e === 60 ? 2 : 1;
  }
  function Qx(t) {
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
  function eT(t) {
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
  function tT(t) {
    const e = Uint8Array.from(Ie.from(t.signature, "hex")), s = Gx(t.transaction.address), n = Yx({
      publicKey: s,
      signature: e,
      payload: t.transaction
    }), r = Ie.from(n).toString("hex");
    return Zx(r);
  }
  function yw({ logger: t, name: e }) {
    const s = typeof t == "string" ? Ra({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return s.level = typeof t == "string" ? t : t.level, s;
  }
  const bw = "wc", Ew = 2, vw = "client", Kd = `${bw}@${Ew}:${vw}:`, Yc = {
    name: vw,
    logger: "error"
  }, Sf = "WALLETCONNECT_DEEPLINK_CHOICE", sT = "proposal", _f = "Proposal expired", nT = "session", Vr = z.SEVEN_DAYS, rT = "engine", rt = {
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
  }, Zc = {
    min: z.FIVE_MINUTES,
    max: z.SEVEN_DAYS
  }, Ps = {
    idle: "IDLE",
    active: "ACTIVE"
  }, iT = {
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
  }, oT = "request", aT = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate"
  ], cT = "wc", lT = "auth", dT = "authKeys", uT = "pairingTopics", hT = "requests", ec = `${cT}@${1.5}:${lT}:`, ra = `${ec}:PUB_KEY`;
  var fT = Object.defineProperty, pT = Object.defineProperties, gT = Object.getOwnPropertyDescriptors, xf = Object.getOwnPropertySymbols, mT = Object.prototype.hasOwnProperty, wT = Object.prototype.propertyIsEnumerable, sd = (t, e, s) => e in t ? fT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, xe = (t, e) => {
    for (var s in e || (e = {})) mT.call(e, s) && sd(t, s, e[s]);
    if (xf) for (var s of xf(e)) wT.call(e, s) && sd(t, s, e[s]);
    return t;
  }, it = (t, e) => pT(t, gT(e)), W = (t, e, s) => sd(t, typeof e != "symbol" ? e + "" : e, s);
  class yT extends YI {
    constructor(e) {
      super(e), W(this, "name", rT), W(this, "events", new pd()), W(this, "initialized", false), W(this, "requestQueue", {
        state: Ps.idle,
        queue: []
      }), W(this, "sessionRequestQueue", {
        state: Ps.idle,
        queue: []
      }), W(this, "emittedSessionRequests", new MN({
        limit: 500
      })), W(this, "requestQueueDelay", z.ONE_SECOND), W(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), W(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), W(this, "recentlyDeletedLimit", 200), W(this, "relayMessageCache", []), W(this, "pendingSessions", /* @__PURE__ */ new Map()), W(this, "init", async () => {
        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
          methods: Object.keys(rt)
        }), this.initialized = true, setTimeout(async () => {
          await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
        }, z.toMiliseconds(this.requestQueueDelay)));
      }), W(this, "connect", async (s) => {
        var n;
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        const r = it(xe({}, s), {
          requiredNamespaces: s.requiredNamespaces || {},
          optionalNamespaces: s.optionalNamespaces || {}
        });
        await this.isValidConnect(r), r.optionalNamespaces = Nx(r.requiredNamespaces, r.optionalNamespaces), r.requiredNamespaces = {};
        const { pairingTopic: i, requiredNamespaces: o, optionalNamespaces: a, sessionProperties: c, scopedProperties: l, relays: d, authentication: u, walletPay: h } = r, f = ((n = u == null ? void 0 : u[0]) == null ? void 0 : n.ttl) || rt.wc_sessionPropose.req.ttl || z.FIVE_MINUTES;
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
        const x = await this.client.core.crypto.generateKeyPair(), T = At(f), A = xe(it(xe(xe({
          requiredNamespaces: o,
          optionalNamespaces: a,
          relays: d ?? [
            {
              protocol: Rg
            }
          ],
          proposer: {
            publicKey: x,
            metadata: this.client.metadata
          },
          expiryTimestamp: T,
          pairingTopic: g
        }, c && {
          sessionProperties: c
        }), l && {
          scopedProperties: l
        }), {
          id: mn()
        }), (u || h) && {
          requests: {
            authentication: u == null ? void 0 : u.map((O) => {
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
            walletPay: h
          }
        }), N = $e("session_connect", A.id), { reject: P, resolve: U, done: B } = jr(f, _f), L = ({ id: O }) => {
          O === A.id && (this.client.events.off("proposal_expire", L), this.pendingSessions.delete(A.id), this.events.emit(N, {
            error: {
              message: _f,
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
          throw o.setError(er.no_internet_connection), D;
        }
        try {
          await this.isValidProposalId(s == null ? void 0 : s.id);
        } catch (D) {
          throw this.client.logger.error(`approve() -> proposal.get(${s == null ? void 0 : s.id}) failed`), o.setError(er.proposal_not_found), D;
        }
        try {
          await this.isValidApprove(s);
        } catch (D) {
          throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(er.session_approve_namespace_validation_failure), D;
        }
        const { id: a, relayProtocol: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: f } = s, g = this.client.proposal.get(a);
        this.client.core.eventClient.deleteEvent({
          eventId: o.eventId
        });
        const { pairingTopic: p, proposer: m, requiredNamespaces: x, optionalNamespaces: T } = g;
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
        const N = await this.client.core.crypto.generateKeyPair(), P = m.publicKey, U = await this.client.core.crypto.generateSharedKey(N, P), B = it(xe(xe(xe({
          relay: {
            protocol: c ?? "irn"
          },
          namespaces: l,
          controller: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiry: At(Vr)
        }, d && {
          sessionProperties: d
        }), u && {
          scopedProperties: u
        }), h && {
          sessionConfig: h
        }), {
          proposalRequestsResponses: f
        }), L = Be.relay;
        A.addTrace(hs.subscribing_session_topic);
        try {
          await this.client.core.relayer.subscribe(U, {
            transportType: L,
            internal: {
              skipSubscribe: true
            }
          });
        } catch (D) {
          throw A.setError(er.subscribe_session_topic_failure), D;
        }
        A.addTrace(hs.subscribe_session_topic_success);
        const O = it(xe({}, B), {
          topic: U,
          requiredNamespaces: x,
          optionalNamespaces: T,
          pairingTopic: p,
          acknowledged: false,
          self: B.controller,
          peer: {
            publicKey: m.publicKey,
            metadata: m.metadata
          },
          controller: N,
          transportType: Be.relay,
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
              tvf: xe({
                correlationId: a
              }, this.getTVFApproveParams(O))
            }
          }), A.addTrace(hs.session_approve_publish_success);
        } catch (D) {
          throw this.client.logger.error(D), this.client.session.delete(U, Ye("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(U), D;
        }
        return this.client.core.eventClient.deleteEvent({
          eventId: A.eventId
        }), await this.client.core.pairing.updateMetadata({
          topic: p,
          metadata: m.metadata
        }), await this.deleteProposal(a), await this.client.core.pairing.activate({
          topic: p
        }), await this.setExpiry(U, At(Vr)), {
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
          rpcOpts: rt.wc_sessionPropose.reject
        }), await this.deleteProposal(n);
      }), W(this, "update", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidUpdate(s);
        } catch (u) {
          throw this.client.logger.error("update() -> isValidUpdate() failed"), u;
        }
        const { topic: n, namespaces: r } = s, { done: i, resolve: o, reject: a } = jr(z.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), c = mn(), l = dr().toString(), d = this.client.session.get(n).namespaces;
        return this.events.once($e("session_update", c), ({ error: u }) => {
          u ? a(u) : o();
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
        }).catch((u) => {
          this.client.logger.error(u), this.client.session.update(n, {
            namespaces: d
          }), a(u);
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
        const { topic: n } = s, r = mn(), { done: i, resolve: o, reject: a } = jr(z.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
        return this.events.once($e("session_extend", r), ({ error: c }) => {
          c ? a(c) : o();
        }), await this.setExpiry(n, At(Vr)), this.sendRequest({
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
        const { chainId: n, request: r, topic: i, expiry: o = rt.wc_sessionRequest.req.ttl } = s, a = this.client.session.get(i);
        (a == null ? void 0 : a.transportType) === Be.relay && await this.confirmOnlineStateOrThrow();
        const c = mn(), l = dr().toString(), { done: d, resolve: u, reject: h } = jr(o, "Request expired. Please try again.");
        this.events.once($e("session_request", c), ({ error: m, result: x }) => {
          m ? h(m) : u(x);
        });
        const f = "wc_sessionRequest", g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
        if (g) return await this.sendRequest({
          clientRpcId: c,
          relayRpcId: l,
          topic: i,
          method: f,
          params: {
            request: it(xe({}, r), {
              expiryTimestamp: At(o)
            }),
            chainId: n
          },
          expiry: o,
          throwOnFailedPublish: true,
          appLink: g
        }).catch((m) => h(m)), this.client.events.emit("session_request_sent", {
          topic: i,
          request: r,
          chainId: n,
          id: c
        }), await d();
        const p = {
          request: it(xe({}, r), {
            expiryTimestamp: At(o)
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
            }).catch((x) => h(x)), this.client.events.emit("session_request_sent", {
              topic: i,
              request: r,
              chainId: n,
              id: c
            }), m();
          }),
          new Promise(async (m) => {
            var x;
            if (!((x = a.sessionConfig) != null && x.disableDeepLink)) {
              const T = await $N(this.client.core.storage, Sf);
              await kN({
                id: c,
                topic: i,
                wcDeepLink: T
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
        } catch (u) {
          throw i.addTrace(u == null ? void 0 : u.message), i.setError(er.session_request_response_validation_failure), u;
        }
        i.addTrace(hs.session_request_response_validation_success);
        const { topic: o, response: a } = s, { id: c } = a, l = this.client.session.get(o);
        l.transportType === Be.relay && await this.confirmOnlineStateOrThrow();
        const d = this.getAppLinkIfEnabled(l.peer.metadata, l.transportType);
        try {
          i.addTrace(hs.session_request_response_publish_started), Gs(a) ? await this.sendResult({
            id: c,
            topic: o,
            result: a.result,
            throwOnFailedPublish: true,
            appLink: d
          }) : $s(a) && await this.sendError({
            id: c,
            topic: o,
            error: a.error,
            appLink: d
          }), this.cleanupAfterResponse(s);
        } catch (u) {
          throw i.addTrace(u == null ? void 0 : u.message), i.setError(er.session_request_response_publish_failure), u;
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
          const r = mn(), i = dr().toString(), { done: o, resolve: a, reject: c } = jr(z.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
          this.events.once($e("session_ping", r), ({ error: l }) => {
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
        const { topic: n, event: r, chainId: i } = s, o = dr().toString(), a = mn();
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
          params: Ye("USER_DISCONNECTED"),
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
      }), W(this, "find", (s) => (this.isInitialized(), this.client.session.getAll().filter((n) => xx(n, s)))), W(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), W(this, "authenticate", async (s, n) => {
        var r;
        this.isInitialized(), this.isValidAuthenticate(s);
        const i = n && this.client.core.linkModeSupportedApps.includes(n) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode), o = i ? Be.link_mode : Be.relay;
        o === Be.relay && await this.confirmOnlineStateOrThrow();
        const { chains: a, statement: c = "", uri: l, domain: d, nonce: u, type: h, exp: f, nbf: g, methods: p = [], expiry: m } = s, x = [
          ...s.resources || []
        ], { topic: T, uri: A } = await this.client.core.pairing.create({
          methods: [
            "wc_sessionAuthenticate"
          ],
          transportType: o
        });
        this.client.logger.info({
          message: "Generated new pairing",
          pairing: {
            topic: T,
            uri: A
          }
        });
        const N = await this.client.core.crypto.generateKeyPair(), P = zc(N);
        if (await Promise.all([
          this.client.auth.authKeys.set(ra, {
            responseTopic: P,
            publicKey: N
          }),
          this.client.auth.pairingTopics.set(P, {
            topic: P,
            pairingTopic: T
          })
        ]), await this.client.core.relayer.subscribe(P, {
          transportType: o
        }), this.client.logger.info(`sending request to new pairing topic: ${T}`), p.length > 0) {
          const { namespace: C } = un(a[0]);
          let S = JS(C, "request", p);
          na(x) && (S = QS(S, x.pop())), x.push(S);
        }
        const U = m && m > rt.wc_sessionAuthenticate.req.ttl ? m : rt.wc_sessionAuthenticate.req.ttl, B = {
          authPayload: {
            type: h ?? "caip122",
            chains: a,
            statement: c,
            aud: l,
            domain: d,
            version: "1",
            nonce: u,
            iat: (/* @__PURE__ */ new Date()).toISOString(),
            exp: f,
            nbf: g,
            resources: x
          },
          requester: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiryTimestamp: At(U)
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
          pairingTopic: T,
          proposer: {
            publicKey: N,
            metadata: this.client.metadata
          },
          expiryTimestamp: At(rt.wc_sessionPropose.req.ttl),
          id: mn()
        }, { done: D, resolve: M, reject: _ } = jr(U, "Request expired"), y = mn(), E = $e("session_connect", O.id), w = $e("session_request", y), v = async ({ error: C, session: S }) => {
          this.events.off(w, I), C ? _(C) : S && M({
            session: S
          });
        }, I = async (C) => {
          var S, R, $;
          if (await this.deletePendingAuthRequest(y, {
            message: "fulfilled",
            code: 0
          }), C.error) {
            const X = Ye("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
            return C.error.code === X.code ? void 0 : (this.events.off(E, v), _(C.error.message));
          }
          await this.deleteProposal(O.id), this.events.off(E, v);
          const { cacaos: Y, responder: K } = C.result, j = [], J = [];
          for (const X of Y) {
            await ef({
              cacao: X,
              projectId: this.client.core.projectId
            }) || (this.client.logger.error(X, "Signature verification failed"), _(Ye("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
            const { p: ue } = X, Fe = na(ue.resources), We = [
              Vl(ue.iss)
            ], je = Ia(ue.iss);
            if (Fe) {
              const Et = tf(Fe), gn = sf(Fe);
              j.push(...Et), We.push(...gn);
            }
            for (const Et of We) J.push(`${Et}:${je}`);
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
            expiry: At(Vr),
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: T,
            namespaces: vf([
              ...new Set(j)
            ], [
              ...new Set(J)
            ]),
            transportType: o
          }, await this.client.core.relayer.subscribe(Z, {
            transportType: o
          }), await this.client.session.set(Z, de), T && await this.client.core.pairing.updateMetadata({
            topic: T,
            metadata: K.metadata
          }), de = this.client.session.get(Z)), (S = this.client.metadata.redirect) != null && S.linkMode && (R = K.metadata.redirect) != null && R.linkMode && ($ = K.metadata.redirect) != null && $.universal && n && (this.client.core.addLinkModeSupportedApp(K.metadata.redirect.universal), this.client.session.update(Z, {
            transportType: Be.link_mode
          })), M({
            auths: Y,
            session: de
          });
        };
        this.events.once(E, v), this.events.once(w, I);
        let k;
        try {
          if (i) {
            const C = Us("wc_sessionAuthenticate", B, y);
            this.client.core.history.set(T, C);
            const S = await this.client.core.crypto.encode("", C, {
              type: hx,
              encoding: ki
            });
            k = Ho(n, T, S);
          } else await Promise.all([
            this.sendRequest({
              topic: T,
              method: "wc_sessionAuthenticate",
              params: B,
              expiry: s.expiry,
              throwOnFailedPublish: true,
              clientRpcId: y
            }),
            this.sendRequest({
              topic: T,
              method: "wc_sessionPropose",
              params: O,
              expiry: rt.wc_sessionPropose.req.ttl,
              throwOnFailedPublish: true,
              clientRpcId: O.id
            })
          ]);
        } catch (C) {
          throw this.events.off(E, v), this.events.off(w, I), C;
        }
        return await this.setProposal(O.id, O), await this.setAuthRequest(y, {
          request: it(xe({}, B), {
            verifyContext: {}
          }),
          pairingTopic: T,
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
              tr.authenticated_session_approve_started
            ]
          }
        });
        try {
          this.isInitialized();
        } catch (m) {
          throw i.setError(Si.no_internet_connection), m;
        }
        const o = this.getPendingAuthRequest(n);
        if (!o) throw i.setError(Si.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${n}`);
        const a = o.transportType || Be.relay;
        a === Be.relay && await this.confirmOnlineStateOrThrow();
        const c = o.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), d = zc(c), u = {
          type: Vc,
          receiverPublicKey: c,
          senderPublicKey: l
        }, h = [], f = [];
        for (const m of r) {
          if (!await ef({
            cacao: m,
            projectId: this.client.core.projectId
          })) {
            i.setError(Si.invalid_cacao);
            const P = Ye("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
            throw await this.sendError({
              id: n,
              topic: d,
              error: P,
              encodeOpts: u
            }), new Error(P.message);
          }
          i.addTrace(tr.cacaos_verified);
          const { p: x } = m, T = na(x.resources), A = [
            Vl(x.iss)
          ], N = Ia(x.iss);
          if (T) {
            const P = tf(T), U = sf(T);
            h.push(...P), A.push(...U);
          }
          for (const P of A) f.push(`${P}:${N}`);
        }
        const g = await this.client.core.crypto.generateSharedKey(l, c);
        i.addTrace(tr.create_authenticated_session_topic);
        let p;
        if ((h == null ? void 0 : h.length) > 0) {
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
            expiry: At(Vr),
            authentication: r,
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: o.pairingTopic,
            namespaces: vf([
              ...new Set(h)
            ], [
              ...new Set(f)
            ]),
            transportType: a
          }, i.addTrace(tr.subscribing_authenticated_session_topic);
          try {
            await this.client.core.relayer.subscribe(g, {
              transportType: a
            });
          } catch (m) {
            throw i.setError(Si.subscribe_authenticated_session_topic_failure), m;
          }
          i.addTrace(tr.subscribe_authenticated_session_topic_success), await this.client.session.set(g, p), i.addTrace(tr.store_authenticated_session), await this.client.core.pairing.updateMetadata({
            topic: o.pairingTopic,
            metadata: o.requester.metadata
          });
        }
        i.addTrace(tr.publishing_authenticated_session_approve);
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
            encodeOpts: u,
            throwOnFailedPublish: true,
            appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
          });
        } catch (m) {
          throw i.setError(Si.authenticated_session_approve_publish_failure), m;
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
        i.transportType === Be.relay && await this.confirmOnlineStateOrThrow();
        const o = i.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = zc(o), l = {
          type: Vc,
          receiverPublicKey: o,
          senderPublicKey: a
        };
        await this.sendError({
          id: n,
          topic: c,
          error: r,
          encodeOpts: l,
          rpcOpts: rt.wc_sessionAuthenticate.reject,
          appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
        }), await this.client.auth.requests.delete(n, {
          message: "rejected",
          code: 0
        }), await this.deleteProposal(n);
      }), W(this, "formatAuthMessage", (s) => {
        this.isInitialized();
        const { request: n, iss: r } = s;
        return Mm(n, r);
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
        await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, Ye("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Sf).catch((l) => this.client.logger.warn(l)), r === ((n = this.sessionRequestQueue.queue[0]) == null ? void 0 : n.topic) && (this.sessionRequestQueue.state = Ps.idle), await Promise.all(this.getPendingSessionRequests().filter((l) => l.topic === r).map((l) => this.deletePendingSessionRequest(l.id, Ye("USER_DISCONNECTED")))), o && this.client.events.emit("session_delete", {
          id: a,
          topic: r
        });
      }), W(this, "deleteProposal", async (s, n) => {
        var _a2;
        if (n) try {
          const r = this.client.proposal.get(s);
          (_a2 = this.client.core.eventClient.getEvent({
            topic: r.pairingTopic
          })) == null ? void 0 : _a2.setError(er.proposal_expired);
        } catch {
        }
        await Promise.all([
          this.client.proposal.delete(s, Ye("USER_DISCONNECTED")),
          n ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "proposal");
      }), W(this, "deletePendingSessionRequest", async (s, n, r = false) => {
        await Promise.all([
          this.client.pendingRequest.delete(s, n),
          r ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== s), r && (this.sessionRequestQueue.state = Ps.idle, this.client.events.emit("session_request_expire", {
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
        this.client.core.expirer.set(s, At(rt.wc_sessionPropose.req.ttl)), await this.client.proposal.set(s, n);
      }), W(this, "setAuthRequest", async (s, n) => {
        const { request: r, pairingTopic: i, transportType: o = Be.relay } = n;
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
        const { id: n, topic: r, params: i, verifyContext: o } = s, a = i.request.expiryTimestamp || At(rt.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(n, a), await this.client.pendingRequest.set(n, {
          id: n,
          topic: r,
          params: i,
          verifyContext: o
        });
      }), W(this, "sendRequest", async (s) => {
        const { topic: n, method: r, params: i, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: d, tvf: u, publishOpts: h = {} } = s, f = Us(r, i, c);
        let g;
        const p = !!d;
        try {
          const T = p ? ki : sr;
          g = await this.client.core.crypto.encode(n, f, {
            encoding: T
          });
        } catch (T) {
          throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${n} failed`), T;
        }
        let m;
        if (aT.includes(r)) {
          const T = On(JSON.stringify(f)), A = On(g);
          m = await this.client.core.verify.register({
            id: A,
            decryptedId: T
          });
        }
        const x = xe(xe({}, rt[r].req), h);
        if (x.attestation = m, o && (x.ttl = o), a && (x.id = a), this.client.core.history.set(n, f), p) {
          const T = Ho(d, n, g);
          await fe.Linking.openURL(T, this.client.name);
        } else x.tvf = it(xe({}, u), {
          correlationId: f.id
        }), l ? (x.internal = it(xe({}, x.internal), {
          throwOnFailedPublish: true
        }), await this.client.core.relayer.publish(n, g, x)) : this.client.core.relayer.publish(n, g, x).catch((T) => this.client.logger.error(T));
        return f.id;
      }), W(this, "sendProposeSession", async (s) => {
        const { proposal: n, publishOpts: r } = s, i = Us("wc_sessionPropose", n, n.id);
        this.client.core.history.set(n.pairingTopic, i);
        const o = await this.client.core.crypto.encode(n.pairingTopic, i, {
          encoding: sr
        }), a = On(JSON.stringify(i)), c = On(o), l = await this.client.core.verify.register({
          id: c,
          decryptedId: a
        });
        await this.client.core.relayer.publishCustom({
          payload: {
            pairingTopic: n.pairingTopic,
            sessionProposal: o
          },
          opts: it(xe({}, r), {
            publishMethod: "wc_proposeSession",
            attestation: l
          })
        });
      }), W(this, "sendApproveSession", async (s) => {
        const { sessionTopic: n, pairingProposalResponse: r, proposal: i, sessionSettleRequest: o, publishOpts: a } = s, c = Xi(i.id, r), l = await this.client.core.crypto.encode(i.pairingTopic, c, {
          encoding: sr
        }), d = Us("wc_sessionSettle", o, a == null ? void 0 : a.id), u = await this.client.core.crypto.encode(n, d, {
          encoding: sr
        });
        this.client.core.history.set(n, d), await this.client.core.relayer.publishCustom({
          payload: {
            sessionTopic: n,
            pairingTopic: i.pairingTopic,
            sessionProposalResponse: l,
            sessionSettlementRequest: u
          },
          opts: it(xe({}, a), {
            publishMethod: "wc_approveSession"
          })
        });
      }), W(this, "sendResult", async (s) => {
        const { id: n, topic: r, result: i, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = s, l = Xi(n, i);
        let d;
        const u = c && typeof (fe == null ? void 0 : fe.Linking) < "u";
        try {
          const g = u ? ki : sr;
          d = await this.client.core.crypto.encode(r, l, it(xe({}, a || {}), {
            encoding: g
          }));
        } catch (g) {
          throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`), g;
        }
        let h, f;
        try {
          h = await this.client.core.history.get(r, n);
          const g = h.request;
          try {
            f = this.getTVFParams(n, g.params, i);
          } catch (p) {
            this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${p == null ? void 0 : p.message}`);
          }
        } catch (g) {
          throw this.client.logger.error(`sendResult() -> history.get(${r}, ${n}) failed`), g;
        }
        if (u) {
          const g = Ho(c, r, d);
          await fe.Linking.openURL(g, this.client.name);
        } else {
          const g = h.request.method, p = rt[g].res;
          p.tvf = it(xe({}, f), {
            correlationId: n
          }), o ? (p.internal = it(xe({}, p.internal), {
            throwOnFailedPublish: true
          }), await this.client.core.relayer.publish(r, d, p)) : this.client.core.relayer.publish(r, d, p).catch((m) => this.client.logger.error(m));
        }
        await this.client.core.history.resolve(l);
      }), W(this, "sendError", async (s) => {
        const { id: n, topic: r, error: i, encodeOpts: o, rpcOpts: a, appLink: c } = s, l = hp(n, i);
        let d;
        const u = c && typeof (fe == null ? void 0 : fe.Linking) < "u";
        try {
          const f = u ? ki : sr;
          d = await this.client.core.crypto.encode(r, l, it(xe({}, o || {}), {
            encoding: f
          }));
        } catch (f) {
          throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`), f;
        }
        let h;
        try {
          h = await this.client.core.history.get(r, n);
        } catch (f) {
          throw this.client.logger.error(`sendError() -> history.get(${r}, ${n}) failed`), f;
        }
        if (u) {
          const f = Ho(c, r, d);
          await fe.Linking.openURL(f, this.client.name);
        } else {
          const f = h.request.method, g = a || rt[f].res;
          this.client.core.relayer.publish(r, d, g);
        }
        await this.client.core.history.resolve(l);
      }), W(this, "cleanup", async () => {
        const s = [], n = [];
        this.client.session.getAll().forEach((r) => {
          let i = false;
          $n(r.expiry) && (i = true), this.client.core.crypto.keychain.has(r.topic) || (i = true), i && s.push(r.topic);
        }), this.client.proposal.getAll().forEach((r) => {
          $n(r.expiryTimestamp) && n.push(r.id);
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
        if (this.requestQueue.state === Ps.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
          this.requestQueue.state = Ps.active;
          const s = this.requestQueue.queue.shift();
          if (s) try {
            await this.processRequest(s);
          } catch (n) {
            this.client.logger.warn(n);
          }
        }
        this.requestQueue.state = Ps.idle;
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
          this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l == null ? void 0 : l.setError(Zs.proposal_listener_not_found)), this.isValidConnect(xe({}, r.params));
          const d = a.expiryTimestamp || At(rt.wc_sessionPropose.req.ttl), u = xe({
            id: c,
            pairingTopic: n,
            expiryTimestamp: d,
            attestation: i,
            encryptedId: o
          }, a);
          await this.setProposal(c, u);
          const h = await this.getVerifyContext({
            attestationId: i,
            hash: On(JSON.stringify(r)),
            encryptedId: o,
            metadata: u.proposer.metadata
          });
          l == null ? void 0 : l.addTrace(Rs.emit_session_proposal), this.client.events.emit("session_proposal", {
            id: c,
            params: u,
            verifyContext: h
          });
        } catch (l) {
          await this.sendError({
            id: c,
            topic: n,
            error: l,
            rpcOpts: rt.wc_sessionPropose.autoReject
          }), this.client.logger.error(l);
        }
      }), W(this, "onSessionProposeResponse", async (s, n, r) => {
        const { id: i } = n;
        if (Gs(n)) {
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
          const u = await this.client.core.relayer.subscribe(d, {
            transportType: r
          });
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: u
          }), await this.client.core.pairing.activate({
            topic: s
          });
        } else if ($s(n)) {
          await this.deleteProposal(i);
          const o = $e("session_connect", i);
          if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
          this.events.emit(o, {
            error: n.error
          });
        }
      }), W(this, "onSessionSettleRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          this.isValidSessionSettleRequest(i);
          const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: f } = n.params, g = [
            ...this.pendingSessions.values()
          ].find((x) => x.sessionTopic === s);
          if (!g) return this.client.logger.error(`Pending session not found for topic ${s}`);
          const p = this.client.proposal.get(g.proposalId), m = it(xe(xe(xe({
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
          }), u && {
            scopedProperties: u
          }), h && {
            sessionConfig: h
          }), {
            transportType: Be.relay,
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
          }), this.events.emit($e("session_connect", g.proposalId), {
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
        Gs(n) ? (await this.client.session.update(s, {
          acknowledged: true
        }), this.events.emit($e("session_approve", r), {})) : $s(n) && (await this.client.session.delete(s, Ye("USER_DISCONNECTED")), this.events.emit($e("session_approve", r), {
          error: n.error
        }));
      }), W(this, "onSessionUpdateRequest", async (s, n) => {
        const { params: r, id: i } = n;
        try {
          const o = `${s}_session_update`, a = Pi.get(o);
          if (a && this.isRequestOutOfSync(a, i)) {
            this.client.logger.warn(`Discarding out of sync request - ${i}`), this.sendError({
              id: i,
              topic: s,
              error: Ye("INVALID_UPDATE_REQUEST")
            });
            return;
          }
          this.isValidUpdate(xe({
            topic: s
          }, r));
          try {
            Pi.set(o, i), await this.client.session.update(s, {
              namespaces: r.namespaces
            }), await this.sendResult({
              id: i,
              topic: s,
              result: true
            });
          } catch (c) {
            throw Pi.delete(o), c;
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
        const { id: r } = n, i = $e("session_update", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Gs(n) ? this.events.emit($e("session_update", r), {}) : $s(n) && this.events.emit($e("session_update", r), {
          error: n.error
        });
      }), W(this, "onSessionExtendRequest", async (s, n) => {
        const { id: r } = n;
        try {
          this.isValidExtend({
            topic: s
          }), await this.setExpiry(s, At(Vr)), await this.sendResult({
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
        const { id: r } = n, i = $e("session_extend", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Gs(n) ? this.events.emit($e("session_extend", r), {}) : $s(n) && this.events.emit($e("session_extend", r), {
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
        const { id: r } = n, i = $e("session_ping", r);
        setTimeout(() => {
          if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners 2176`);
          Gs(n) ? this.events.emit($e("session_ping", r), {}) : $s(n) && this.events.emit($e("session_ping", r), {
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
            error: Ye("USER_DISCONNECTED")
          }), await this.deleteSession({
            topic: s,
            id: r
          });
        } catch (i) {
          this.client.logger.error(i);
        }
      }), W(this, "onSessionRequest", async (s) => {
        var n, r, i;
        const { topic: o, payload: a, attestation: c, encryptedId: l, transportType: d } = s, { id: u, params: h } = a;
        try {
          await this.isValidRequest(xe({
            topic: o
          }, h));
          const f = this.client.session.get(o), g = await this.getVerifyContext({
            attestationId: c,
            hash: On(JSON.stringify(Us("wc_sessionRequest", h, u))),
            encryptedId: l,
            metadata: f.peer.metadata,
            transportType: d
          }), p = {
            id: u,
            topic: o,
            params: h,
            verifyContext: g
          };
          await this.setPendingSessionRequest(p), d === Be.link_mode && (n = f.peer.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp((r = f.peer.metadata.redirect) == null ? void 0 : r.universal), (i = this.client.signConfig) != null && i.disableRequestQueue ? this.emitSessionRequest(p) : (this.addSessionRequestToSessionRequestQueue(p), this.processSessionRequestQueue());
        } catch (f) {
          await this.sendError({
            id: u,
            topic: o,
            error: f
          }), this.client.logger.error(f);
        }
      }), W(this, "onSessionRequestResponse", (s, n) => {
        const { id: r } = n, i = $e("session_request", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Gs(n) ? this.events.emit($e("session_request", r), {
          result: n.result
        }) : $s(n) && this.events.emit($e("session_request", r), {
          error: n.error
        });
      }), W(this, "onSessionEventRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          const o = `${s}_session_event_${i.event.name}`, a = Pi.get(o);
          if (a && this.isRequestOutOfSync(a, r)) {
            this.client.logger.info(`Discarding out of sync request - ${r}`);
            return;
          }
          this.isValidEmit(xe({
            topic: s
          }, i)), this.client.events.emit("session_event", {
            id: r,
            topic: s,
            params: i
          }), Pi.set(o, r);
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
        }), Gs(n) ? this.events.emit($e("session_request", r), {
          result: n.result
        }) : $s(n) && this.events.emit($e("session_request", r), {
          error: n.error
        });
      }), W(this, "onSessionAuthenticateRequest", async (s) => {
        var n;
        const { topic: r, payload: i, attestation: o, encryptedId: a, transportType: c } = s;
        try {
          const { requester: l, authPayload: d, expiryTimestamp: u } = i.params, h = await this.getVerifyContext({
            attestationId: o,
            hash: On(JSON.stringify(i)),
            encryptedId: a,
            metadata: l.metadata,
            transportType: c
          }), f = {
            requester: l,
            pairingTopic: r,
            id: i.id,
            authPayload: d,
            verifyContext: h,
            expiryTimestamp: u
          };
          await this.setAuthRequest(i.id, {
            request: f,
            pairingTopic: r,
            transportType: c
          }), c === Be.link_mode && (n = l.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
            topic: r,
            params: i.params,
            id: i.id,
            verifyContext: h
          });
        } catch (l) {
          this.client.logger.error(l);
          const d = i.params.requester.publicKey, u = await this.client.core.crypto.generateKeyPair(), h = this.getAppLinkIfEnabled(i.params.requester.metadata, c), f = {
            type: Vc,
            receiverPublicKey: d,
            senderPublicKey: u
          };
          await this.sendError({
            id: i.id,
            topic: r,
            error: l,
            encodeOpts: f,
            rpcOpts: rt.wc_sessionAuthenticate.autoReject,
            appLink: h
          });
        }
      }), W(this, "addSessionRequestToSessionRequestQueue", (s) => {
        this.sessionRequestQueue.queue.push(s);
      }), W(this, "cleanupAfterResponse", (s) => {
        this.deletePendingSessionRequest(s.response.id, {
          message: "fulfilled",
          code: 0
        }), setTimeout(() => {
          this.sessionRequestQueue.state = Ps.idle, this.processSessionRequestQueue();
        }, z.toMiliseconds(this.requestQueueDelay));
      }), W(this, "cleanupPendingSentRequestsForTopic", ({ topic: s, error: n }) => {
        const r = this.client.core.history.pending;
        r.length > 0 && r.filter((i) => i.topic === s && i.request.method === "wc_sessionRequest").forEach((i) => {
          this.events.emit($e("session_request", i.request.id), {
            error: n
          });
        });
      }), W(this, "processSessionRequestQueue", () => {
        if (this.sessionRequestQueue.state === Ps.active) {
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
        this.sessionRequestQueue.state = Ps.active, this.emittedSessionRequests.add(s.id), this.client.events.emit("session_request", s);
      }), W(this, "onPairingCreated", (s) => {
        if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods), s.active) return;
        const n = this.client.proposal.getAll().find((r) => r.pairingTopic === s.topic);
        n && this.onSessionProposeRequest({
          topic: s.topic,
          payload: Us("wc_sessionPropose", it(xe({}, n), {
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
        if (!fs(s)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
          throw new Error(l);
        }
        const { pairingTopic: n, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: o, scopedProperties: a, relays: c } = s;
        if (Gt(n) || await this.isValidPairingTopic(n), !Dx(c)) {
          const { message: l } = ce("MISSING_OR_INVALID", `connect() relays: ${c}`);
          throw new Error(l);
        }
        if (r && !Gt(r) && qs(r) !== 0) {
          const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
          [
            "fatal",
            "error",
            "silent"
          ].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(r, "requiredNamespaces");
        }
        if (i && !Gt(i) && qs(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), o && !Gt(o) && this.validateSessionProps(o, "sessionProperties"), a && !Gt(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const l = Object.keys(r || {}).concat(Object.keys(i || {}));
          if (!Object.keys(a).every((d) => l.includes(d.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`);
        }
      }), W(this, "validateNamespaces", (s, n) => {
        const r = Bx(s, "connect()", n);
        if (r) throw new Error(r.message);
      }), W(this, "isValidApprove", async (s) => {
        if (!fs(s)) throw new Error(ce("MISSING_OR_INVALID", `approve() params: ${s}`).message);
        const { id: n, namespaces: r, relayProtocol: i, sessionProperties: o, scopedProperties: a } = s;
        this.checkRecentlyDeleted(n), await this.isValidProposalId(n);
        const c = this.client.proposal.get(n), l = Kc(r, "approve()");
        if (l) throw new Error(l.message);
        const d = If(c.requiredNamespaces, r, "approve()");
        if (d) throw new Error(d.message);
        if (!Qe(i, true)) {
          const { message: u } = ce("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
          throw new Error(u);
        }
        if (o && !Gt(o) && this.validateSessionProps(o, "sessionProperties"), a && !Gt(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const u = new Set(Object.keys(r));
          if (!Object.keys(a).every((h) => u.has(h.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`);
        }
      }), W(this, "isValidReject", async (s) => {
        if (!fs(s)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() params: ${s}`);
          throw new Error(i);
        }
        const { id: n, reason: r } = s;
        if (this.checkRecentlyDeleted(n), await this.isValidProposalId(n), !Mx(r)) {
          const { message: i } = ce("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
          throw new Error(i);
        }
      }), W(this, "isValidSessionSettleRequest", (s) => {
        if (!fs(s)) {
          const { message: l } = ce("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
          throw new Error(l);
        }
        const { relay: n, controller: r, namespaces: i, expiry: o } = s;
        if (!ww(n)) {
          const { message: l } = ce("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
          throw new Error(l);
        }
        const a = Ox(r, "onSessionSettleRequest()");
        if (a) throw new Error(a.message);
        const c = Kc(i, "onSessionSettleRequest()");
        if (c) throw new Error(c.message);
        if ($n(o)) {
          const { message: l } = ce("EXPIRED", "onSessionSettleRequest()");
          throw new Error(l);
        }
      }), W(this, "isValidUpdate", async (s) => {
        if (!fs(s)) {
          const { message: c } = ce("MISSING_OR_INVALID", `update() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, namespaces: r } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const i = this.client.session.get(n), o = Kc(r, "update()");
        if (o) throw new Error(o.message);
        const a = If(i.requiredNamespaces, r, "update()");
        if (a) throw new Error(a.message);
      }), W(this, "isValidExtend", async (s) => {
        if (!fs(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `extend() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
      }), W(this, "isValidRequest", async (s) => {
        if (!fs(s)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, request: r, chainId: i, expiry: o } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const { namespaces: a } = this.client.session.get(n);
        if (!Af(a, i)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() chainId: ${i}`);
          throw new Error(c);
        }
        if (!Fx(r)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
          throw new Error(c);
        }
        if (!Wx(a, i, r.method)) {
          const { message: c } = ce("MISSING_OR_INVALID", `request() method: ${r.method}`);
          throw new Error(c);
        }
        this.validateRequestExpiry(o);
      }), W(this, "isValidRespond", async (s) => {
        var n;
        if (!fs(s)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() params: ${s}`);
          throw new Error(a);
        }
        const { topic: r, response: i } = s;
        try {
          await this.isValidSessionTopic(r);
        } catch (a) {
          throw (n = s == null ? void 0 : s.response) != null && n.id && this.cleanupAfterResponse(s), a;
        }
        if (!qx(i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
          throw new Error(a);
        }
        const o = this.client.pendingRequest.get(i.id);
        if (o.topic !== r) {
          const { message: a } = ce("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i.id}, expected topic: ${o.topic}, received topic: ${r}`);
          throw new Error(a);
        }
      }), W(this, "isValidPing", async (s) => {
        if (!fs(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `ping() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), W(this, "isValidEmit", async (s) => {
        if (!fs(s)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() params: ${s}`);
          throw new Error(a);
        }
        const { topic: n, event: r, chainId: i } = s;
        await this.isValidSessionTopic(n);
        const { namespaces: o } = this.client.session.get(n);
        if (!Af(o, i)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() chainId: ${i}`);
          throw new Error(a);
        }
        if (!jx(r)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
        if (!Hx(o, i, r.name)) {
          const { message: a } = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
      }), W(this, "isValidDisconnect", async (s) => {
        if (!fs(s)) {
          const { message: r } = ce("MISSING_OR_INVALID", `disconnect() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), W(this, "isValidAuthenticate", (s) => {
        const { chains: n, uri: r, domain: i, nonce: o } = s;
        if (!Array.isArray(n) || n.length === 0) throw new Error("chains is required and must be a non-empty array");
        if (!Qe(r, false)) throw new Error("uri is required parameter");
        if (!Qe(i, false)) throw new Error("domain is required parameter");
        if (!Qe(o, false)) throw new Error("nonce is required parameter");
        if ([
          ...new Set(n.map((c) => un(c).namespace))
        ].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
        const { namespace: a } = un(n[0]);
        if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
      }), W(this, "getVerifyContext", async (s) => {
        const { attestationId: n, hash: r, encryptedId: i, metadata: o, transportType: a } = s, c = {
          verified: {
            verifyUrl: o.verifyUrl || Gi,
            validation: "UNKNOWN",
            origin: o.url || ""
          }
        };
        try {
          if (a === Be.link_mode) {
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
        var r, i, o, a, c, l, d, u, h;
        return !s || n !== Be.link_mode ? false : ((i = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : i.linkMode) === true && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((d = s == null ? void 0 : s.redirect) == null ? void 0 : d.universal) !== void 0 && ((u = s == null ? void 0 : s.redirect) == null ? void 0 : u.universal) !== "" && ((h = s == null ? void 0 : s.redirect) == null ? void 0 : h.linkMode) === true && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (fe == null ? void 0 : fe.Linking) < "u";
      }), W(this, "getAppLinkIfEnabled", (s, n) => {
        var r;
        return this.isLinkModeEnabled(s, n) ? (r = s == null ? void 0 : s.redirect) == null ? void 0 : r.universal : void 0;
      }), W(this, "handleLinkModeMessage", ({ url: s }) => {
        if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
        const n = Wh(s, "topic") || "", r = decodeURIComponent(Wh(s, "wc_ev") || ""), i = this.client.session.keys.includes(n);
        i && this.client.session.update(n, {
          transportType: Be.link_mode
        }), this.client.core.dispatchEnvelope({
          topic: n,
          message: r,
          sessionExists: i
        });
      }), W(this, "registerLinkModeListeners", async () => {
        var s;
        if (UN() || Cm() && (s = this.client.metadata.redirect) != null && s.linkMode) {
          const n = fe == null ? void 0 : fe.Linking;
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
          const n = gw(s.namespaces), r = Ex(s.namespaces), i = vx(s.namespaces), o = s.sessionProperties, a = s.scopedProperties;
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
          const i = s.method, o = iT[i];
          if (i === "sui_signTransaction") return [
            PS(n.transactionBytes)
          ];
          if (i === "near_signTransaction") return [
            Zh(n)
          ];
          if (i === "near_signTransactions") return n.map((c) => Zh(c));
          if (i === "xrpl_signTransactionFor" || i === "xrpl_signTransaction") return [
            (r = n.tx_json) == null ? void 0 : r.hash
          ];
          if (i === "polkadot_signTransaction") return [
            tT({
              transaction: s.params.transactionPayload,
              signature: n.signature
            })
          ];
          if (i === "algo_signTxn") return fn(n) ? n.map((c) => Jh(c)) : [
            Jh(n)
          ];
          if (i === "cosmos_signDirect") return [
            $S(n)
          ];
          if (i === "wallet_sendCalls") return US(n);
          if (typeof n == "string") return [
            n
          ];
          const a = n[o.key];
          if (fn(a)) return i === "solana_signAllTransactions" ? a.map((c) => kS(c)) : a;
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
      this.client.core.relayer.on(Ve.message, (e) => {
        this.onProviderMessageEvent(e);
      });
    }
    async onRelayMessage(e) {
      const { topic: s, message: n, attestation: r, transportType: i } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(ra) ? this.client.auth.authKeys.get(ra) : {
        publicKey: void 0
      };
      try {
        const a = await this.client.core.crypto.decode(s, n, {
          receiverPublicKey: o,
          encoding: i === Be.link_mode ? ki : sr
        });
        hd(a) ? (this.client.core.history.set(s, a), await this.onRelayEventRequest({
          topic: s,
          payload: a,
          attestation: r,
          transportType: i,
          encryptedId: On(n)
        })) : fd(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({
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
      this.client.core.expirer.on(rs.expired, async (e) => {
        const { topic: s, id: n } = ON(e.target);
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
      this.client.core.pairing.events.on(ar.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(ar.delete, (e) => {
        this.addToRecentlyDeleted(e.topic, "pairing");
      });
    }
    isValidPairingTopic(e) {
      if (!Qe(e, false)) {
        const { message: s } = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if ($n(this.client.core.pairing.pairings.get(e).expiry)) {
        const { message: s } = ce("EXPIRED", `pairing topic: ${e}`);
        throw new Error(s);
      }
    }
    async isValidSessionTopic(e) {
      if (!Qe(e, false)) {
        const { message: s } = ce("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if ($n(this.client.session.get(e).expiry)) {
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
      else if (Qe(e, false)) {
        const { message: s } = ce("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      } else {
        const { message: s } = ce("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
    }
    async isValidProposalId(e) {
      if (!Lx(e)) {
        const { message: s } = ce("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
        throw new Error(s);
      }
      if (!this.client.proposal.keys.includes(e)) {
        const { message: s } = ce("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
        throw new Error(s);
      }
      if ($n(this.client.proposal.get(e).expiryTimestamp)) {
        await this.deleteProposal(e);
        const { message: s } = ce("EXPIRED", `proposal id: ${e}`);
        throw new Error(s);
      }
    }
    validateRequestExpiry(e) {
      if (e && !Kx(e, Zc)) {
        const { message: s } = ce("MISSING_OR_INVALID", `request() expiry: ${e}. Expiry must be a number (in seconds) between ${Zc.min} and ${Zc.max}`);
        throw new Error(s);
      }
    }
  }
  class bT extends $r {
    constructor(e, s) {
      super(e, s, sT, Kd), this.core = e, this.logger = s;
    }
  }
  let ET = class extends $r {
    constructor(e, s) {
      super(e, s, nT, Kd), this.core = e, this.logger = s;
    }
  };
  class vT extends $r {
    constructor(e, s) {
      super(e, s, oT, Kd, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  class CT extends $r {
    constructor(e, s) {
      super(e, s, dT, ec, () => ra), this.core = e, this.logger = s;
    }
  }
  class AT extends $r {
    constructor(e, s) {
      super(e, s, uT, ec), this.core = e, this.logger = s;
    }
  }
  class IT extends $r {
    constructor(e, s) {
      super(e, s, hT, ec, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  var NT = Object.defineProperty, ST = (t, e, s) => e in t ? NT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Jc = (t, e, s) => ST(t, typeof e != "symbol" ? e + "" : e, s);
  class _T {
    constructor(e, s) {
      this.core = e, this.logger = s, Jc(this, "authKeys"), Jc(this, "pairingTopics"), Jc(this, "requests"), this.authKeys = new CT(this.core, this.logger), this.pairingTopics = new AT(this.core, this.logger), this.requests = new IT(this.core, this.logger);
    }
    async init() {
      await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
  }
  var xT = Object.defineProperty, TT = (t, e, s) => e in t ? xT(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ee = (t, e, s) => TT(t, typeof e != "symbol" ? e + "" : e, s);
  class Gd extends GI {
    constructor(e) {
      super(e), Ee(this, "protocol", bw), Ee(this, "version", Ew), Ee(this, "name", Yc.name), Ee(this, "metadata"), Ee(this, "core"), Ee(this, "logger"), Ee(this, "events", new xr.EventEmitter()), Ee(this, "engine"), Ee(this, "session"), Ee(this, "proposal"), Ee(this, "pendingRequest"), Ee(this, "auth"), Ee(this, "signConfig"), Ee(this, "on", (n, r) => this.events.on(n, r)), Ee(this, "once", (n, r) => this.events.once(n, r)), Ee(this, "off", (n, r) => this.events.off(n, r)), Ee(this, "removeListener", (n, r) => this.events.removeListener(n, r)), Ee(this, "removeAllListeners", (n) => this.events.removeAllListeners(n)), Ee(this, "connect", async (n) => {
        try {
          return await this.engine.connect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "pair", async (n) => {
        try {
          return await this.engine.pair(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "approve", async (n) => {
        try {
          return await this.engine.approve(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "reject", async (n) => {
        try {
          return await this.engine.reject(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "update", async (n) => {
        try {
          return await this.engine.update(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "extend", async (n) => {
        try {
          return await this.engine.extend(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "request", async (n) => {
        try {
          return await this.engine.request(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "respond", async (n) => {
        try {
          return await this.engine.respond(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "ping", async (n) => {
        try {
          return await this.engine.ping(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "emit", async (n) => {
        try {
          return await this.engine.emit(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "disconnect", async (n) => {
        try {
          return await this.engine.disconnect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "find", (n) => {
        try {
          return this.engine.find(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "getPendingSessionRequests", () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (n) {
          throw this.logger.error(n.message), n;
        }
      }), Ee(this, "authenticate", async (n, r) => {
        try {
          return await this.engine.authenticate(n, r);
        } catch (i) {
          throw this.logger.error(i.message), i;
        }
      }), Ee(this, "formatAuthMessage", (n) => {
        try {
          return this.engine.formatAuthMessage(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "approveSessionAuthenticate", async (n) => {
        try {
          return await this.engine.approveSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), Ee(this, "rejectSessionAuthenticate", async (n) => {
        try {
          return await this.engine.rejectSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), this.name = (e == null ? void 0 : e.name) || Yc.name, this.metadata = xN(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
      const s = yw({
        logger: (e == null ? void 0 : e.logger) || Yc.logger,
        name: this.name
      });
      this.logger = s, this.core = (e == null ? void 0 : e.core) || new VI(e), this.session = new ET(this.core, this.logger), this.proposal = new bT(this.core, this.logger), this.pendingRequest = new vT(this.core, this.logger), this.engine = new yT(this), this.auth = new _T(this.core, this.logger);
    }
    static async init(e) {
      const s = new Gd(e);
      return await s.initialize(), s;
    }
    get context() {
      return Jt(this.logger);
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
  const OT = Gd;
  function Yd(t) {
    return t == null || typeof t != "object" && typeof t != "function";
  }
  function Cw(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function Aw(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const kT = "[object RegExp]", Iw = "[object String]", Nw = "[object Number]", Sw = "[object Boolean]", _w = "[object Arguments]", PT = "[object Symbol]", RT = "[object Date]", $T = "[object Map]", UT = "[object Set]", BT = "[object Array]", DT = "[object ArrayBuffer]", LT = "[object Object]", MT = "[object DataView]", FT = "[object Uint8Array]", qT = "[object Uint8ClampedArray]", jT = "[object Uint16Array]", WT = "[object Uint32Array]", HT = "[object Int8Array]", VT = "[object Int16Array]", zT = "[object Int32Array]", KT = "[object Float32Array]", GT = "[object Float64Array]";
  function Zd(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  function YT(t, e) {
    return ei(t, void 0, t, /* @__PURE__ */ new Map(), e);
  }
  function ei(t, e, s, n = /* @__PURE__ */ new Map(), r = void 0) {
    const i = r == null ? void 0 : r(t, e, s, n);
    if (i != null) return i;
    if (Yd(t)) return t;
    if (n.has(t)) return n.get(t);
    if (Array.isArray(t)) {
      const o = new Array(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = ei(t[a], a, s, n, r);
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
      for (const [a, c] of t) o.set(a, ei(c, a, s, n, r));
      return o;
    }
    if (t instanceof Set) {
      const o = /* @__PURE__ */ new Set();
      n.set(t, o);
      for (const a of t) o.add(ei(a, void 0, s, n, r));
      return o;
    }
    if (typeof Ie < "u" && Ie.isBuffer(t)) return t.subarray();
    if (Zd(t)) {
      const o = new (Object.getPrototypeOf(t)).constructor(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = ei(t[a], a, s, n, r);
      return o;
    }
    if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    if (t instanceof DataView) {
      const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
      return n.set(t, o), cr(o, t, s, n, r), o;
    }
    if (typeof File < "u" && t instanceof File) {
      const o = new File([
        t
      ], t.name, {
        type: t.type
      });
      return n.set(t, o), cr(o, t, s, n, r), o;
    }
    if (t instanceof Blob) {
      const o = new Blob([
        t
      ], {
        type: t.type
      });
      return n.set(t, o), cr(o, t, s, n, r), o;
    }
    if (t instanceof Error) {
      const o = new t.constructor();
      return n.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, cr(o, t, s, n, r), o;
    }
    if (typeof t == "object" && ZT(t)) {
      const o = Object.create(Object.getPrototypeOf(t));
      return n.set(t, o), cr(o, t, s, n, r), o;
    }
    return t;
  }
  function cr(t, e, s = t, n, r) {
    const i = [
      ...Object.keys(e),
      ...Cw(e)
    ];
    for (let o = 0; o < i.length; o++) {
      const a = i[o], c = Object.getOwnPropertyDescriptor(t, a);
      (c == null || c.writable) && (t[a] = ei(e[a], a, s, n, r));
    }
  }
  function ZT(t) {
    switch (Aw(t)) {
      case _w:
      case BT:
      case DT:
      case MT:
      case Sw:
      case RT:
      case KT:
      case GT:
      case HT:
      case VT:
      case zT:
      case $T:
      case Nw:
      case LT:
      case kT:
      case UT:
      case Iw:
      case PT:
      case FT:
      case qT:
      case jT:
      case WT:
        return true;
      default:
        return false;
    }
  }
  function JT(t, e) {
    return YT(t, (s, n, r, i) => {
      if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
        case Nw:
        case Iw:
        case Sw: {
          const o = new t.constructor(t == null ? void 0 : t.valueOf());
          return cr(o, t), o;
        }
        case _w: {
          const o = {};
          return cr(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
        }
        default:
          return;
      }
    });
  }
  function Tf(t) {
    return JT(t);
  }
  function Of(t) {
    return t !== null && typeof t == "object" && Aw(t) === "[object Arguments]";
  }
  function kf(t) {
    return typeof t == "object" && t !== null;
  }
  function XT() {
  }
  function QT(t) {
    return Zd(t);
  }
  function eO(t) {
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
  function tO(t) {
    if (Yd(t)) return t;
    if (Array.isArray(t) || Zd(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
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
  function sO(t, ...e) {
    const s = e.slice(0, -1), n = e[e.length - 1];
    let r = t;
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      r = nd(r, o, n, /* @__PURE__ */ new Map());
    }
    return r;
  }
  function nd(t, e, s, n) {
    if (Yd(t) && (t = Object(t)), e == null || typeof e != "object") return t;
    if (n.has(e)) return tO(n.get(e));
    if (n.set(e, t), Array.isArray(e)) {
      e = e.slice();
      for (let i = 0; i < e.length; i++) e[i] = e[i] ?? void 0;
    }
    const r = [
      ...Object.keys(e),
      ...Cw(e)
    ];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = e[o], c = t[o];
      if (Of(a) && (a = {
        ...a
      }), Of(c) && (c = {
        ...c
      }), typeof Ie < "u" && Ie.isBuffer(a) && (a = Tf(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
        const d = [], u = Reflect.ownKeys(c);
        for (let h = 0; h < u.length; h++) {
          const f = u[h];
          d[f] = c[f];
        }
        c = d;
      } else c = [];
      const l = s(c, a, o, t, e, n);
      l != null ? t[o] = l : Array.isArray(a) || kf(c) && kf(a) ? t[o] = nd(c, a, s, n) : c == null && eO(a) ? t[o] = nd({}, a, s, n) : c == null && QT(a) ? t[o] = Tf(a) : (c === void 0 || a !== void 0) && (t[o] = a);
    }
    return t;
  }
  function nO(t, ...e) {
    return sO(t, ...e, XT);
  }
  const Pf = "error", rO = "wss://relay.walletconnect.org", iO = "wc", xw = "universal_provider", Vo = `${iO}@2:${xw}:`, Tw = "https://rpc.walletconnect.org/v1/", Ow = "generic", oO = `${Tw}bundler`, oi = "call_status", aO = 86400, Jd = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
  };
  var cO = Object.defineProperty, lO = Object.defineProperties, dO = Object.getOwnPropertyDescriptors, Rf = Object.getOwnPropertySymbols, uO = Object.prototype.hasOwnProperty, hO = Object.prototype.propertyIsEnumerable, $f = (t, e, s) => e in t ? cO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, zo = (t, e) => {
    for (var s in e || (e = {})) uO.call(e, s) && $f(t, s, e[s]);
    if (Rf) for (var s of Rf(e)) hO.call(e, s) && $f(t, s, e[s]);
    return t;
  }, fO = (t, e) => lO(t, dO(e));
  function kw(t, e, s) {
    var n;
    const r = un(t);
    return ((n = e.rpcMap) == null ? void 0 : n[r.reference]) || `${Tw}?chainId=${r.namespace}:${r.reference}&projectId=${s}`;
  }
  function pO(t) {
    return t.includes(":") ? t.split(":")[1] : t;
  }
  function Pw(t) {
    return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
  }
  function gO(t, e) {
    const s = Object.keys(e.namespaces).filter((r) => r.includes(t));
    if (!s.length) return [];
    const n = [];
    return s.forEach((r) => {
      const i = e.namespaces[r].accounts;
      n.push(...i);
    }), n;
  }
  function Uf(t) {
    return Object.fromEntries(Object.entries(t).filter(([e, s]) => {
      var n, r;
      return ((n = s == null ? void 0 : s.chains) == null ? void 0 : n.length) && ((r = s == null ? void 0 : s.chains) == null ? void 0 : r.length) > 0;
    }));
  }
  function Ko(t = {}, e = {}) {
    const s = Uf(Bf(t)), n = Uf(Bf(e));
    return nO(s, n);
  }
  function Bf(t) {
    var e, s, n, r, i;
    const o = {};
    if (!qs(t)) return o;
    for (const [a, c] of Object.entries(t)) {
      const l = Qa(a) ? [
        a
      ] : c.chains, d = c.methods || [], u = c.events || [], h = c.rpcMap || {}, f = Qr(a);
      o[f] = fO(zo(zo({}, o[f]), c), {
        chains: Fs(l, (e = o[f]) == null ? void 0 : e.chains),
        methods: Fs(d, (s = o[f]) == null ? void 0 : s.methods),
        events: Fs(u, (n = o[f]) == null ? void 0 : n.events)
      }), (qs(h) || qs(((r = o[f]) == null ? void 0 : r.rpcMap) || {})) && (o[f].rpcMap = zo(zo({}, h), (i = o[f]) == null ? void 0 : i.rpcMap));
    }
    return o;
  }
  function Df(t) {
    return t.includes(":") ? t.split(":")[2] : t;
  }
  function Lf(t) {
    const e = {};
    for (const [s, n] of Object.entries(t)) {
      const r = n.methods || [], i = n.events || [], o = n.accounts || [], a = Qa(s) ? [
        s
      ] : n.chains ? n.chains : Pw(n.accounts);
      e[s] = {
        chains: a,
        methods: r,
        events: i,
        accounts: o
      };
    }
    return e;
  }
  function Xc(t) {
    return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
  }
  function mO(t) {
    try {
      const e = JSON.parse(t);
      return typeof e == "object" && e !== null && !Array.isArray(e);
    } catch {
      return false;
    }
  }
  const Rw = {}, ai = (t) => Rw[t], Qc = (t, e) => {
    Rw[t] = e;
  };
  var wO = Object.defineProperty, Mf = Object.getOwnPropertySymbols, yO = Object.prototype.hasOwnProperty, bO = Object.prototype.propertyIsEnumerable, Ff = (t, e, s) => e in t ? wO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, qf = (t, e) => {
    for (var s in e || (e = {})) yO.call(e, s) && Ff(t, s, e[s]);
    if (Mf) for (var s of Mf(e)) bO.call(e, s) && Ff(t, s, e[s]);
    return t;
  };
  const jf = "eip155", EO = [
    "atomic",
    "flow-control",
    "paymasterService",
    "sessionKeys",
    "auxiliaryFunds"
  ], vO = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, el = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, Wf = (t) => Object.keys(t).filter((e) => EO.includes(e)).reduce((e, s) => (e[s] = CO(t[s]), e), {}), CO = (t) => typeof t == "string" && mO(t) ? JSON.parse(t) : t, AO = (t, e, s) => {
    const { sessionProperties: n = {}, scopedProperties: r = {} } = t, i = {};
    if (!qs(r) && !qs(n)) return;
    const o = Wf(n);
    for (const a of s) {
      const c = vO(a);
      if (!c) continue;
      i[el(c)] = o;
      const l = r == null ? void 0 : r[`${jf}:${c}`];
      if (l) {
        const d = l == null ? void 0 : l[`${jf}:${c}:${e}`];
        i[el(c)] = qf(qf({}, i[el(c)]), Wf(d || l));
      }
    }
    for (const [a, c] of Object.entries(i)) Object.keys(c).length === 0 && delete i[a];
    return Object.keys(i).length > 0 ? i : void 0;
  };
  var IO = Object.defineProperty, NO = (t, e, s) => e in t ? IO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, SO = (t, e, s) => NO(t, e + "", s);
  let tl;
  class Xd {
    constructor(e) {
      SO(this, "storage"), this.storage = e;
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
      return tl || (tl = new Xd(e)), tl;
    }
  }
  var _O = Object.defineProperty, xO = Object.defineProperties, TO = Object.getOwnPropertyDescriptors, Hf = Object.getOwnPropertySymbols, OO = Object.prototype.hasOwnProperty, kO = Object.prototype.propertyIsEnumerable, Vf = (t, e, s) => e in t ? _O(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, PO = (t, e) => {
    for (var s in e || (e = {})) OO.call(e, s) && Vf(t, s, e[s]);
    if (Hf) for (var s of Hf(e)) kO.call(e, s) && Vf(t, s, e[s]);
    return t;
  }, RO = (t, e) => xO(t, TO(e));
  async function $O(t, e) {
    const s = un(t.result.capabilities.caip345.caip2), n = t.result.capabilities.caip345.transactionHashes, r = await Promise.allSettled(n.map((u) => UO(s.reference, u, e))), i = r.filter((u) => u.status === "fulfilled").map((u) => u.value).filter((u) => u);
    r.filter((u) => u.status === "rejected").forEach((u) => console.warn("Failed to fetch transaction receipt:", u.reason));
    const o = !i.length || i.some((u) => !u), a = i.every((u) => (u == null ? void 0 : u.status) === "0x1"), c = i.every((u) => (u == null ? void 0 : u.status) === "0x0"), l = i.some((u) => (u == null ? void 0 : u.status) === "0x0");
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
  async function UO(t, e, s) {
    return await s(parseInt(t)).request(Us("eth_getTransactionReceipt", [
      e
    ]));
  }
  async function BO({ sendCalls: t, storage: e }) {
    const s = await e.getItem(oi);
    await e.setItem(oi, RO(PO({}, s), {
      [t.result.id]: {
        request: t.request,
        result: t.result,
        expiry: At(aO)
      }
    }));
  }
  async function DO({ resultId: t, storage: e }) {
    const s = await e.getItem(oi);
    if (s) {
      delete s[t], await e.setItem(oi, s);
      for (const n in s) $n(s[n].expiry) && delete s[n];
      await e.setItem(oi, s);
    }
  }
  async function LO({ resultId: t, storage: e }) {
    const s = await e.getItem(oi), n = s == null ? void 0 : s[t];
    if (n && !$n(n.expiry)) return n;
    await DO({
      resultId: t,
      storage: e
    });
  }
  var MO = Object.defineProperty, FO = Object.defineProperties, qO = Object.getOwnPropertyDescriptors, zf = Object.getOwnPropertySymbols, jO = Object.prototype.hasOwnProperty, WO = Object.prototype.propertyIsEnumerable, rd = (t, e, s) => e in t ? MO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, sl = (t, e) => {
    for (var s in e || (e = {})) jO.call(e, s) && rd(t, s, e[s]);
    if (zf) for (var s of zf(e)) WO.call(e, s) && rd(t, s, e[s]);
    return t;
  }, nl = (t, e) => FO(t, qO(e)), nr = (t, e, s) => rd(t, typeof e != "symbol" ? e + "" : e, s);
  class HO {
    constructor(e) {
      nr(this, "name", "eip155"), nr(this, "client"), nr(this, "chainId"), nr(this, "namespace"), nr(this, "httpProviders"), nr(this, "events"), nr(this, "storage"), this.namespace = e.namespace, this.events = ai("events"), this.client = ai("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = Xd.getStorage(this.client.core.storage);
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
      this.chainId = parseInt(e), this.events.emit(Jd.DEFAULT_CHAIN_CHANGED, {
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
      const n = s || kw(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new ud(new fp(n, ai("disableProviderPing")));
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProviders() {
      const e = {};
      return this.namespace.chains.forEach((s) => {
        var n;
        const r = parseInt(pO(s));
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
      return this.httpProviders[s] || (this.httpProviders = nl(sl({}, this.httpProviders), {
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
      const l = this.client.session.get(e.topic), d = ((o = l == null ? void 0 : l.sessionProperties) == null ? void 0 : o.capabilities) || {}, u = c.length > 0 ? c.join(",") : `0x${this.chainId.toString(16)}`, h = `${a}${u}`, f = d == null ? void 0 : d[h];
      if (f) return f;
      let g;
      try {
        g = AO(l, a, c);
      } catch (m) {
        console.warn("Failed to extract capabilities from session", m);
      }
      if (g) return g;
      const p = await this.client.request(e);
      try {
        await this.client.session.update(e.topic, {
          sessionProperties: nl(sl({}, l.sessionProperties || {}), {
            capabilities: nl(sl({}, d || {}), {
              [h]: p
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
      const c = await LO({
        resultId: (r = e.request.params) == null ? void 0 : r[0],
        storage: this.storage
      });
      if (c) try {
        return await $O(c, this.getHttpProvider.bind(this));
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
        body: JSON.stringify(Us("eth_getUserOperationReceipt", [
          (n = s.request.params) == null ? void 0 : n[0]
        ]))
      });
      if (!i.ok) throw new Error(`Failed to fetch user operation receipt - ${i.status}`);
      return await i.json();
    }
    getBundlerUrl(e, s) {
      return `${oO}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
    }
    async sendCalls(e) {
      var s, n, r;
      const i = await this.client.request(e), o = (s = e.request.params) == null ? void 0 : s[0], a = i == null ? void 0 : i.id, c = (i == null ? void 0 : i.capabilities) || {}, l = (n = c == null ? void 0 : c.caip345) == null ? void 0 : n.caip2, d = (r = c == null ? void 0 : c.caip345) == null ? void 0 : r.transactionHashes;
      return !a || !l || !(d != null && d.length) || await BO({
        sendCalls: {
          request: o,
          result: i
        },
        storage: this.storage
      }), i;
    }
  }
  var VO = Object.defineProperty, zO = (t, e, s) => e in t ? VO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, zr = (t, e, s) => zO(t, typeof e != "symbol" ? e + "" : e, s);
  class KO {
    constructor(e) {
      zr(this, "name", Ow), zr(this, "client"), zr(this, "httpProviders"), zr(this, "events"), zr(this, "namespace"), zr(this, "chainId"), this.namespace = e.namespace, this.events = ai("events"), this.client = ai("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
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
      this.chainId = e, this.events.emit(Jd.DEFAULT_CHAIN_CHANGED, {
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
      return un(e).namespace;
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
        const a = un(r), c = (o = (i = this.namespace) == null ? void 0 : i.rpcMap) == null ? void 0 : o[`${a.namespace}:${a.reference}`];
        n[a.reference] = this.createHttpProvider(r, c);
      }), n;
    }
    getHttpProvider(e) {
      const s = un(e).reference, n = this.httpProviders[s];
      if (typeof n > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
      return n;
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProvider(e, s) {
      const n = s || kw(e, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new ud(new fp(n, ai("disableProviderPing")));
    }
  }
  var GO = Object.defineProperty, YO = Object.defineProperties, ZO = Object.getOwnPropertyDescriptors, Kf = Object.getOwnPropertySymbols, JO = Object.prototype.hasOwnProperty, XO = Object.prototype.propertyIsEnumerable, id = (t, e, s) => e in t ? GO(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ri = (t, e) => {
    for (var s in e || (e = {})) JO.call(e, s) && id(t, s, e[s]);
    if (Kf) for (var s of Kf(e)) XO.call(e, s) && id(t, s, e[s]);
    return t;
  }, Go = (t, e) => YO(t, ZO(e)), qt = (t, e, s) => id(t, typeof e != "symbol" ? e + "" : e, s);
  let QO = class $w {
    constructor(e) {
      qt(this, "client"), qt(this, "namespaces"), qt(this, "optionalNamespaces"), qt(this, "sessionProperties"), qt(this, "scopedProperties"), qt(this, "events", new pd()), qt(this, "rpcProviders", {}), qt(this, "session"), qt(this, "providerOpts"), qt(this, "logger"), qt(this, "uri"), qt(this, "disableProviderPing", false), qt(this, "connectParams");
      var s, n;
      this.providerOpts = e, this.logger = yw({
        logger: (s = e.logger) != null ? s : Pf,
        name: (n = this.providerOpts.name) != null ? n : xw
      }), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || false;
    }
    static async init(e) {
      const s = new $w(e);
      return await s.initialize(), s;
    }
    async request(e, s, n) {
      const [r, i] = this.validateChain(s);
      if (!this.session) throw new Error("Please call connect() before request()");
      return await this.getProvider(r).request({
        request: Ri({}, e),
        chainId: `${r}:${i}`,
        topic: this.session.topic,
        expiry: n
      });
    }
    sendAsync(e, s, n, r) {
      const i = (/* @__PURE__ */ new Date()).getTime();
      this.request(e, n, r).then((o) => s(null, Xi(i, o))).catch((o) => s(o, void 0));
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
        reason: Ye("USER_DISCONNECTED")
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
        const o = Lf(this.session.namespaces);
        this.namespaces = Ko(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
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
      const a = Lf(o.namespaces);
      return this.namespaces = Ko(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
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
        if (!fn(s)) return;
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
      if (this.client = this.providerOpts.client || await OT.init({
        core: this.providerOpts.core,
        logger: this.providerOpts.logger || Pf,
        relayUrl: this.providerOpts.relayUrl || rO,
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
        ...new Set(Object.keys(this.session.namespaces).map((s) => Qr(s)))
      ];
      Qc("client", this.client), Qc("events", this.events), Qc("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
        if (!this.session) return;
        const n = gO(s, this.session);
        if ((n == null ? void 0 : n.length) === 0) return;
        const r = Pw(n), i = Ko(this.namespaces, this.optionalNamespaces), o = Go(Ri({}, i[s]), {
          accounts: n,
          chains: r
        });
        switch (s) {
          case "eip155":
            this.rpcProviders[s] = new HO({
              namespace: o
            });
            break;
          default:
            this.rpcProviders[s] = new KO({
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
          o && fn(o) && this.events.emit("accountsChanged", o.map(Df));
        } else if (i.name === "chainChanged") {
          const o = n.chainId, a = n.event.data, c = Qr(o), l = Xc(o) !== Xc(a) ? `${c}:${Xc(a)}` : o;
          this.onChainChanged({
            currentCaipChainId: l
          });
        } else this.events.emit(i.name, i.data);
        this.events.emit("session_event", e);
      }), this.client.on("session_update", ({ topic: e, params: s }) => {
        var n, r;
        if (e !== ((n = this.session) == null ? void 0 : n.topic)) return;
        const { namespaces: i } = s, o = (r = this.client) == null ? void 0 : r.session.get(e);
        this.session = Go(Ri({}, o), {
          namespaces: i
        }), this.onSessionUpdate(), this.events.emit("session_update", {
          topic: e,
          params: s
        });
      }), this.client.on("session_delete", async (e) => {
        var s;
        e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", Go(Ri({}, Ye("USER_DISCONNECTED")), {
          data: e.topic
        })));
      }), this.on(Jd.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(Go(Ri({}, e), {
          internal: true
        }));
      });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[Ow];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var s;
        this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
      });
    }
    setNamespaces(e) {
      const { namespaces: s = {}, optionalNamespaces: n = {}, sessionProperties: r, scopedProperties: i } = e;
      this.optionalNamespaces = Ko(s, n), this.sessionProperties = r, this.scopedProperties = i;
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
      if (s && !Object.keys(this.namespaces || {}).map((o) => Qr(o)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
      if (s && n) return [
        s,
        n
      ];
      const r = Qr(Object.keys(this.namespaces)[0]), i = this.rpcProviders[r].getDefaultChain();
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
        const a = o.filter((c) => c.includes(`${s}:`)).map(Df);
        if (!fn(a)) return;
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
      await this.client.core.storage.setItem(`${Vo}/${e}${r}`, s);
    }
    async getFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      return await this.client.core.storage.getItem(`${Vo}/${e}${n}`);
    }
    async deleteFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      await this.client.core.storage.removeItem(`${Vo}/${e}${n}`);
    }
    async cleanupStorage() {
      var e;
      try {
        if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
        const s = await this.client.core.storage.getKeys();
        for (const n of s) n.startsWith(Vo) && await this.client.core.storage.removeItem(n);
      } catch (s) {
        this.logger.warn(s, "Failed to cleanup storage");
      }
    }
  };
  const Gf = 2147483648, ek = {
    convertEVMChainIdToCoinType(t) {
      if (t >= Gf) throw new Error("Invalid chainId");
      return (Gf | t) >>> 0;
    }
  }, ts = De({
    suggestions: [],
    loading: false
  }), tk = {
    state: ts,
    subscribe(t) {
      return at(ts, () => t(ts));
    },
    subscribeKey(t, e) {
      return ct(ts, t, e);
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
        ts.loading = true, ts.suggestions = [];
        const e = await le.getEnsNameSuggestions(t);
        return ts.suggestions = e.suggestions || [], ts.suggestions;
      } catch (e) {
        const s = Zi.parseEnsApiError(e, "Error fetching name suggestions");
        throw new Error(s);
      } finally {
        ts.loading = false;
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
        const s = Zi.parseEnsApiError(e, "Error fetching names for address");
        throw new Error(s);
      }
    },
    async registerName(t) {
      var _a2;
      const e = b.state.activeCaipNetwork, s = (_a2 = b.getAccountData(e == null ? void 0 : e.chainNamespace)) == null ? void 0 : _a2.address, n = V.getAuthConnector();
      if (!e) throw new Error("Network not found");
      if (!s || !n) throw new Error("Address or auth connector not found");
      ts.loading = true;
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
        ts.loading = false;
        const o = e.id;
        if (!o) throw new Error("Network not found");
        const a = ek.convertEVMChainIdToCoinType(Number(o));
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
        const i = Zi.parseEnsApiError(r, `Error registering name ${t}`);
        throw ae.replace("RegisterAccountName"), new Error(i);
      } finally {
        ts.loading = false;
      }
    },
    validateName(t) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(t);
    },
    parseEnsApiError(t, e) {
      var _a2, _b2;
      return ((_b2 = (_a2 = t == null ? void 0 : t.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || e;
    }
  }, Zi = ds(tk);
  function od(t) {
    try {
      return new URL(t);
    } catch {
      return null;
    }
  }
  function sk(t) {
    const e = t.split("/"), s = e.length > 0 && e[0] !== void 0 ? e[0] : "", n = s.lastIndexOf(":");
    return n === -1 ? {
      host: s
    } : {
      host: s.slice(0, n),
      port: s.slice(n + 1)
    };
  }
  function nk(t) {
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
  function rk(t, e) {
    if (e.includes("://")) {
      const o = od(e);
      return o ? o.origin === t : false;
    }
    const { host: s, port: n } = sk(e), r = t.indexOf("://");
    if (r !== -1) {
      const o = r + 3;
      let a = t.indexOf("/", o);
      a === -1 && (a = t.length);
      const c = t.slice(o, a);
      if (n !== void 0) return `${s}:${n}` === c;
      const l = c.split(":")[0];
      return s === l;
    }
    const i = od(t);
    return i ? n !== void 0 ? s === i.hostname && n === (i.port || void 0) : s === i.hostname : false;
  }
  function ik(t, e, s) {
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
    const u = t.protocol.replace(/:$/u, "");
    if (r && r !== u || c !== void 0 && c !== "*" && c !== t.port) return false;
    const h = nk(e), g = (h ? h.host : t.hostname).split(".");
    if (d.length !== g.length) return false;
    for (let p = d.length - 1; p >= 0; p -= 1) {
      const m = d[p], x = g[p];
      if (m !== "*" && m !== x) return false;
    }
    return true;
  }
  const ok = {
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
  }, Vn = {
    RPC_ERROR_CODE: {
      USER_REJECTED: 5e3,
      USER_REJECTED_METHODS: 5002
    },
    getMethodsByChainNamespace(t) {
      return ok[t] || [];
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
      const e = await Zi.resolveName(t);
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
          const e = t, s = typeof e.code == "number", n = s && e.code === Vn.RPC_ERROR_CODE.USER_REJECTED_METHODS, r = s && e.code === Vn.RPC_ERROR_CODE.USER_REJECTED;
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
      const r = od(t);
      if (!r) return n.some((i) => !i.includes("*") && i === t);
      if (r.hostname === "localhost" || r.hostname === "127.0.0.1") return true;
      for (const i of n) if (i.includes("*")) {
        if (ik(r, t, i)) return true;
      } else if (rk(t, i)) return true;
      return false;
    },
    listenWcProvider({ universalProvider: t, namespace: e, onConnect: s, onDisconnect: n, onAccountsChanged: r, onChainChanged: i, onDisplayUri: o }) {
      s && t.on("connect", () => {
        const a = Vn.getWalletConnectAccounts(t, e);
        s(a);
      }), n && t.on("disconnect", () => {
        n();
      }), r && t.on("accountsChanged", (a) => {
        var _a2, _b2, _c2, _d3, _e2;
        try {
          const c = ((_c2 = (_b2 = (_a2 = t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) || [], l = (_e2 = (_d3 = t.rpcProviders) == null ? void 0 : _d3[e]) == null ? void 0 : _e2.getDefaultChain(), d = a.map((u) => {
            const h = c.find((p) => p.includes(`${e}:${l}:${u}`));
            if (!h) return;
            const { chainId: f, chainNamespace: g } = ot.parseCaipAddress(h);
            return {
              address: u,
              chainId: f,
              chainNamespace: g
            };
          }).filter((u) => u !== void 0);
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
      const s = /* @__PURE__ */ new Set(), n = (_d3 = (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) == null ? void 0 : _d3.map((r) => ot.parseCaipAddress(r)).filter(({ address: r }) => s.has(r.toLowerCase()) ? false : (s.add(r.toLowerCase()), true));
      return n && n.length > 0 ? n : [];
    }
  }, ak = [
    F.CONNECTOR_ID.AUTH,
    F.CONNECTOR_ID.WALLET_CONNECT
  ];
  class ck {
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
        throw Vn.isUserRejectedRequestError(s) ? new Ep(s) : s;
      }
    }
    async switchNetwork(e) {
      var _a2;
      const { caipNetwork: s } = e, n = Ue.getProviderId(s.chainNamespace), r = Ue.getProvider(s.chainNamespace);
      if (!r) throw new Error("Provider not found");
      if (n === "WALLET_CONNECT") {
        r.setDefaultChain(s.caipNetworkId);
        return;
      }
      if (n === "AUTH") {
        const i = (_a2 = V.getAuthConnector()) == null ? void 0 : _a2.provider;
        if (!i) throw new Error("Auth provider not found");
        const o = as(s.chainNamespace);
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
      if (ak.includes(e)) return;
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
  let rr = null;
  Es = {
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
          await we.open({
            view: "DataCapture",
            data: {
              email: (o == null ? void 0 : o.email) ?? void 0
            }
          });
          return;
        }
        if (rr && await rr, (await e.getSessions(`${s}:${n}`, r)).length) return;
        await we.open({
          view: "SIWXSignMessage"
        });
      } catch (i) {
        console.error("SIWXUtil:initializeIfEnabled", i), pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(i)
        }), await ((_c2 = G._getClient()) == null ? void 0 : _c2.disconnect().catch(console.error)), ae.reset("Connect"), Bs.showError("A problem occurred while trying initialize authentication");
      }
    },
    async isAuthenticated(t = b.getActiveCaipAddress()) {
      if (!q.state.siwx || !t) return true;
      const { chainNamespace: s, chainId: n, address: r } = ot.parseCaipAddress(t), i = `${s}:${n}`;
      return (await Es.getSessions({
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
        }), b.setLastConnectedSIWECaipNetwork(s), we.close(), pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: this.getSIWXEventProperties()
        });
      } catch (n) {
        (!we.state.open || ae.state.view === "ApproveTransaction") && await we.open({
          view: "SIWXSignMessage"
        }), Bs.showError("Error signing message"), pe.sendEvent({
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
        } else we.close();
        we.close(), pe.sendEvent({
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
      const i = Es.getSIWX(), o = To();
      if (!i || !r.includes(F.CHAIN.EVM) || ((_a2 = q.state.remoteFeatures) == null ? void 0 : _a2.emailCapture)) {
        const u = await t.connect({
          chainId: e,
          socialUri: s,
          preferredAccountType: n
        });
        return {
          address: u.address,
          chainId: u.chainId,
          accounts: u.accounts
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
      return l.accountAddress = d.address, l.serializedMessage = d.message || "", d.signature && d.message && await Es.addEmbeddedWalletSession(l, d.message, d.signature), b.setLastConnectedSIWECaipNetwork(o), {
        address: d.address,
        chainId: d.chainId,
        accounts: d.accounts
      };
    },
    async addEmbeddedWalletSession(t, e, s) {
      if (rr) return rr;
      const n = Es.getSIWX();
      return n ? (rr = n.addSession({
        data: t,
        message: e,
        signature: s
      }).finally(() => {
        rr = null;
      }), rr) : Promise.resolve();
    },
    async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: s }) {
      var _a2, _b2, _c2;
      const n = Es.getSIWX(), r = To(), i = new Set(e.map((l) => l.split(":")[0]));
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
      Bs.showLoading("Authenticating...", {
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
          const u = t.client.formatAuthMessage({
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
            message: u,
            signature: d.s.s,
            cacao: d
          };
        });
        try {
          await n.setSessions(l), r && b.setLastConnectedSIWECaipNetwork(r), pe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: Es.getSIWXEventProperties()
          });
        } catch (d) {
          throw console.error("SIWX:universalProviderAuth - failed to set sessions", d), pe.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: Es.getSIWXEventProperties(d)
          }), await t.disconnect().catch(console.error), d;
        } finally {
          Bs.hide();
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
        isSmartAccount: as(e) === an.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: t ? ee.parseError(t) : void 0
      };
    },
    async clearSessions() {
      const t = this.getSIWX();
      t && await t.setSessions([]);
    }
  };
  class lk {
    constructor({ provider: e, namespace: s }) {
      this.id = F.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = b.getCaipNetworks.bind(b), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = s;
    }
    get chains() {
      return this.getCaipNetworks();
    }
    async connectWalletConnect() {
      if (!await this.authenticate()) {
        const s = this.getCaipNetworks(), n = q.state.universalProviderConfigOverride, r = Vn.createNamespaces(s, n);
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
      return Es.universalProviderAuthenticate({
        universalProvider: this.provider,
        chains: e,
        methods: dk
      });
    }
  }
  let dk, ps, uk, hk, fk;
  dk = [
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
  ps = De({
    message: "",
    variant: "info",
    open: false
  });
  uk = {
    state: ps,
    subscribeKey(t, e) {
      return ct(ps, t, e);
    },
    open(t, e) {
      const { debug: s } = q.state, { code: n, displayMessage: r, debugMessage: i } = t;
      r && s && (ps.message = r, ps.variant = e, ps.open = true);
    },
    warn(t, e, s) {
      ps.open = true, ps.message = t, ps.variant = "warning", e && console.warn(e, s);
    },
    close() {
      ps.open = false, ps.message = "", ps.variant = "info";
    }
  };
  jt = ds(uk);
  hk = {
    asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
  };
  fk = {
    asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
  };
  const ia = globalThis, Qd = ia.ShadowRoot && (ia.ShadyCSS === void 0 || ia.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, eu = Symbol(), Yf = /* @__PURE__ */ new WeakMap();
  let Uw = class {
    constructor(e, s, n) {
      if (this._$cssResult$ = true, n !== eu) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = e, this.t = s;
    }
    get styleSheet() {
      let e = this.o;
      const s = this.t;
      if (Qd && e === void 0) {
        const n = s !== void 0 && s.length === 1;
        n && (e = Yf.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Yf.set(s, e));
      }
      return e;
    }
    toString() {
      return this.cssText;
    }
  };
  let bs, pk, Zf;
  bs = (t) => new Uw(typeof t == "string" ? t : t + "", void 0, eu);
  Fn = (t, ...e) => {
    const s = t.length === 1 ? t[0] : e.reduce((n, r, i) => n + ((o) => {
      if (o._$cssResult$ === true) return o.cssText;
      if (typeof o == "number") return o;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(r) + t[i + 1], t[0]);
    return new Uw(s, t, eu);
  };
  pk = (t, e) => {
    if (Qd) t.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    else for (const s of e) {
      const n = document.createElement("style"), r = ia.litNonce;
      r !== void 0 && n.setAttribute("nonce", r), n.textContent = s.cssText, t.appendChild(n);
    }
  };
  Zf = Qd ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
    let s = "";
    for (const n of e.cssRules) s += n.cssText;
    return bs(s);
  })(t) : t;
  let gk, mk, wk, yk, bk, Ek, tc, Jf, vk, Ck, Ji, Xf;
  ({ is: gk, defineProperty: mk, getOwnPropertyDescriptor: wk, getOwnPropertyNames: yk, getOwnPropertySymbols: bk, getPrototypeOf: Ek } = Object);
  tc = globalThis;
  Jf = tc.trustedTypes;
  vk = Jf ? Jf.emptyScript : "";
  Ck = tc.reactiveElementPolyfillSupport;
  Ji = (t, e) => t;
  ad = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? vk : null;
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
  Bw = (t, e) => !gk(t, e);
  Xf = {
    attribute: true,
    type: String,
    converter: ad,
    reflect: false,
    useDefault: false,
    hasChanged: Bw
  };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), tc.litPropertyMetadata ?? (tc.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  let Kr = class extends HTMLElement {
    static addInitializer(e) {
      this._$Ei(), (this.l ?? (this.l = [])).push(e);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [
        ...this._$Eh.keys()
      ];
    }
    static createProperty(e, s = Xf) {
      if (s.state && (s.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((s = Object.create(s)).wrapped = true), this.elementProperties.set(e, s), !s.noAccessor) {
        const n = Symbol(), r = this.getPropertyDescriptor(e, n, s);
        r !== void 0 && mk(this.prototype, e, r);
      }
    }
    static getPropertyDescriptor(e, s, n) {
      const { get: r, set: i } = wk(this.prototype, e) ?? {
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
      return this.elementProperties.get(e) ?? Xf;
    }
    static _$Ei() {
      if (this.hasOwnProperty(Ji("elementProperties"))) return;
      const e = Ek(this);
      e.finalize(), e.l !== void 0 && (this.l = [
        ...e.l
      ]), this.elementProperties = new Map(e.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(Ji("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Ji("properties"))) {
        const s = this.properties, n = [
          ...yk(s),
          ...bk(s)
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
        for (const r of n) s.unshift(Zf(r));
      } else e !== void 0 && s.push(Zf(e));
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
      return pk(e, this.constructor.elementStyles), e;
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
        const i = (((_a2 = n.converter) == null ? void 0 : _a2.toAttribute) !== void 0 ? n.converter : ad).toAttribute(s, n.type);
        this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
      }
    }
    _$AK(e, s) {
      var _a2, _b2;
      const n = this.constructor, r = n._$Eh.get(e);
      if (r !== void 0 && this._$Em !== r) {
        const i = n.getPropertyOptions(r), o = typeof i.converter == "function" ? {
          fromAttribute: i.converter
        } : ((_a2 = i.converter) == null ? void 0 : _a2.fromAttribute) !== void 0 ? i.converter : ad;
        this._$Em = r;
        const a = o.fromAttribute(s, i.type);
        this[r] = a ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(r)) ?? a, this._$Em = null;
      }
    }
    requestUpdate(e, s, n, r = false, i) {
      var _a2;
      if (e !== void 0) {
        const o = this.constructor;
        if (r === false && (i = this[e]), n ?? (n = o.getPropertyOptions(e)), !((n.hasChanged ?? Bw)(i, s) || n.useDefault && n.reflect && i === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(e)) && !this.hasAttribute(o._$Eu(e, n)))) return;
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
  Kr.elementStyles = [], Kr.shadowRootOptions = {
    mode: "open"
  }, Kr[Ji("elementProperties")] = /* @__PURE__ */ new Map(), Kr[Ji("finalized")] = /* @__PURE__ */ new Map(), Ck == null ? void 0 : Ck({
    ReactiveElement: Kr
  }), (tc.reactiveElementVersions ?? (tc.reactiveElementVersions = [])).push("2.1.2");
  let tu, Qf, Ta, ep, Dw, qn, Lw, Ak, _r, co, lo, su, Ik, rl, $i, tp, sp, ir, np, rp, Mw, Fw, ip, br;
  tu = globalThis;
  Qf = (t) => t;
  Ta = tu.trustedTypes;
  ep = Ta ? Ta.createPolicy("lit-html", {
    createHTML: (t) => t
  }) : void 0;
  Dw = "$lit$";
  qn = `lit$${Math.random().toFixed(9).slice(2)}$`;
  Lw = "?" + qn;
  Ak = `<${Lw}>`;
  _r = document;
  co = () => _r.createComment("");
  lo = (t) => t === null || typeof t != "object" && typeof t != "function";
  su = Array.isArray;
  Ik = (t) => su(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function";
  rl = `[ 	
\f\r]`;
  $i = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  tp = /-->/g;
  sp = />/g;
  ir = RegExp(`>|${rl}(?:([^\\s"'>=/]+)(${rl}*=${rl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  np = /'/g;
  rp = /"/g;
  Mw = /^(?:script|style|textarea|title)$/i;
  Fw = (t) => (e, ...s) => ({
    _$litType$: t,
    strings: e,
    values: s
  });
  Z3 = Fw(1);
  J3 = Fw(2);
  fi = Symbol.for("lit-noChange");
  et = Symbol.for("lit-nothing");
  ip = /* @__PURE__ */ new WeakMap();
  br = _r.createTreeWalker(_r, 129);
  function qw(t, e) {
    if (!su(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return ep !== void 0 ? ep.createHTML(e) : e;
  }
  const Nk = (t, e) => {
    const s = t.length - 1, n = [];
    let r, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = $i;
    for (let a = 0; a < s; a++) {
      const c = t[a];
      let l, d, u = -1, h = 0;
      for (; h < c.length && (o.lastIndex = h, d = o.exec(c), d !== null); ) h = o.lastIndex, o === $i ? d[1] === "!--" ? o = tp : d[1] !== void 0 ? o = sp : d[2] !== void 0 ? (Mw.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = ir) : d[3] !== void 0 && (o = ir) : o === ir ? d[0] === ">" ? (o = r ?? $i, u = -1) : d[1] === void 0 ? u = -2 : (u = o.lastIndex - d[2].length, l = d[1], o = d[3] === void 0 ? ir : d[3] === '"' ? rp : np) : o === rp || o === np ? o = ir : o === tp || o === sp ? o = $i : (o = ir, r = void 0);
      const f = o === ir && t[a + 1].startsWith("/>") ? " " : "";
      i += o === $i ? c + Ak : u >= 0 ? (n.push(l), c.slice(0, u) + Dw + c.slice(u) + qn + f) : c + qn + (u === -2 ? a : f);
    }
    return [
      qw(t, i + (t[s] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")),
      n
    ];
  };
  class uo {
    constructor({ strings: e, _$litType$: s }, n) {
      let r;
      this.parts = [];
      let i = 0, o = 0;
      const a = e.length - 1, c = this.parts, [l, d] = Nk(e, s);
      if (this.el = uo.createElement(l, n), br.currentNode = this.el.content, s === 2 || s === 3) {
        const u = this.el.content.firstChild;
        u.replaceWith(...u.childNodes);
      }
      for (; (r = br.nextNode()) !== null && c.length < a; ) {
        if (r.nodeType === 1) {
          if (r.hasAttributes()) for (const u of r.getAttributeNames()) if (u.endsWith(Dw)) {
            const h = d[o++], f = r.getAttribute(u).split(qn), g = /([.?@])?(.*)/.exec(h);
            c.push({
              type: 1,
              index: i,
              name: g[2],
              strings: f,
              ctor: g[1] === "." ? _k : g[1] === "?" ? xk : g[1] === "@" ? Tk : sc
            }), r.removeAttribute(u);
          } else u.startsWith(qn) && (c.push({
            type: 6,
            index: i
          }), r.removeAttribute(u));
          if (Mw.test(r.tagName)) {
            const u = r.textContent.split(qn), h = u.length - 1;
            if (h > 0) {
              r.textContent = Ta ? Ta.emptyScript : "";
              for (let f = 0; f < h; f++) r.append(u[f], co()), br.nextNode(), c.push({
                type: 2,
                index: ++i
              });
              r.append(u[h], co());
            }
          }
        } else if (r.nodeType === 8) if (r.data === Lw) c.push({
          type: 2,
          index: i
        });
        else {
          let u = -1;
          for (; (u = r.data.indexOf(qn, u + 1)) !== -1; ) c.push({
            type: 7,
            index: i
          }), u += qn.length - 1;
        }
        i++;
      }
    }
    static createElement(e, s) {
      const n = _r.createElement("template");
      return n.innerHTML = e, n;
    }
  }
  function pi(t, e, s = t, n) {
    var _a2, _b2;
    if (e === fi) return e;
    let r = n !== void 0 ? (_a2 = s._$Co) == null ? void 0 : _a2[n] : s._$Cl;
    const i = lo(e) ? void 0 : e._$litDirective$;
    return (r == null ? void 0 : r.constructor) !== i && ((_b2 = r == null ? void 0 : r._$AO) == null ? void 0 : _b2.call(r, false), i === void 0 ? r = void 0 : (r = new i(t), r._$AT(t, s, n)), n !== void 0 ? (s._$Co ?? (s._$Co = []))[n] = r : s._$Cl = r), r !== void 0 && (e = pi(t, r._$AS(t, e.values), r, n)), e;
  }
  class Sk {
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
      const { el: { content: s }, parts: n } = this._$AD, r = ((e == null ? void 0 : e.creationScope) ?? _r).importNode(s, true);
      br.currentNode = r;
      let i = br.nextNode(), o = 0, a = 0, c = n[0];
      for (; c !== void 0; ) {
        if (o === c.index) {
          let l;
          c.type === 2 ? l = new No(i, i.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(i, c.name, c.strings, this, e) : c.type === 6 && (l = new Ok(i, this, e)), this._$AV.push(l), c = n[++a];
        }
        o !== (c == null ? void 0 : c.index) && (i = br.nextNode(), o++);
      }
      return br.currentNode = _r, r;
    }
    p(e) {
      let s = 0;
      for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, s), s += n.strings.length - 2) : n._$AI(e[s])), s++;
    }
  }
  class No {
    get _$AU() {
      var _a2;
      return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
    }
    constructor(e, s, n, r) {
      this.type = 2, this._$AH = et, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = n, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? true;
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
      e = pi(this, e, s), lo(e) ? e === et || e == null || e === "" ? (this._$AH !== et && this._$AR(), this._$AH = et) : e !== this._$AH && e !== fi && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ik(e) ? this.k(e) : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
    }
    _(e) {
      this._$AH !== et && lo(this._$AH) ? this._$AA.nextSibling.data = e : this.T(_r.createTextNode(e)), this._$AH = e;
    }
    $(e) {
      var _a2;
      const { values: s, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = uo.createElement(qw(n.h, n.h[0]), this.options)), n);
      if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === r) this._$AH.p(s);
      else {
        const i = new Sk(r, this), o = i.u(this.options);
        i.p(s), this.T(o), this._$AH = i;
      }
    }
    _$AC(e) {
      let s = ip.get(e.strings);
      return s === void 0 && ip.set(e.strings, s = new uo(e)), s;
    }
    k(e) {
      su(this._$AH) || (this._$AH = [], this._$AR());
      const s = this._$AH;
      let n, r = 0;
      for (const i of e) r === s.length ? s.push(n = new No(this.O(co()), this.O(co()), this, this.options)) : n = s[r], n._$AI(i), r++;
      r < s.length && (this._$AR(n && n._$AB.nextSibling, r), s.length = r);
    }
    _$AR(e = this._$AA.nextSibling, s) {
      var _a2;
      for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s); e !== this._$AB; ) {
        const n = Qf(e).nextSibling;
        Qf(e).remove(), e = n;
      }
    }
    setConnected(e) {
      var _a2;
      this._$AM === void 0 && (this._$Cv = e, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, e));
    }
  }
  class sc {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, s, n, r, i) {
      this.type = 1, this._$AH = et, this._$AN = void 0, this.element = e, this.name = s, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = et;
    }
    _$AI(e, s = this, n, r) {
      const i = this.strings;
      let o = false;
      if (i === void 0) e = pi(this, e, s, 0), o = !lo(e) || e !== this._$AH && e !== fi, o && (this._$AH = e);
      else {
        const a = e;
        let c, l;
        for (e = i[0], c = 0; c < i.length - 1; c++) l = pi(this, a[n + c], s, c), l === fi && (l = this._$AH[c]), o || (o = !lo(l) || l !== this._$AH[c]), l === et ? e = et : e !== et && (e += (l ?? "") + i[c + 1]), this._$AH[c] = l;
      }
      o && !r && this.j(e);
    }
    j(e) {
      e === et ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class _k extends sc {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(e) {
      this.element[this.name] = e === et ? void 0 : e;
    }
  }
  class xk extends sc {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== et);
    }
  }
  class Tk extends sc {
    constructor(e, s, n, r, i) {
      super(e, s, n, r, i), this.type = 5;
    }
    _$AI(e, s = this) {
      if ((e = pi(this, e, s, 0) ?? et) === fi) return;
      const n = this._$AH, r = e === et && n !== et || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== et && (n === et || r);
      r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      var _a2;
      typeof this._$AH == "function" ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, e) : this._$AH.handleEvent(e);
    }
  }
  class Ok {
    constructor(e, s, n) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = n;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      pi(this, e);
    }
  }
  const kk = tu.litHtmlPolyfillSupport;
  kk == null ? void 0 : kk(uo, No), (tu.litHtmlVersions ?? (tu.litHtmlVersions = [])).push("3.3.2");
  const Pk = (t, e, s) => {
    const n = (s == null ? void 0 : s.renderBefore) ?? e;
    let r = n._$litPart$;
    if (r === void 0) {
      const i = (s == null ? void 0 : s.renderBefore) ?? null;
      n._$litPart$ = r = new No(e.insertBefore(co(), i), i, void 0, s ?? {});
    }
    return r._$AI(t), r;
  };
  const nu = globalThis;
  oa = class extends Kr {
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
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Pk(s, this.renderRoot, this.renderOptions);
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
      return fi;
    }
  };
  oa._$litElement$ = true, oa.finalized = true, (_d2 = nu.litElementHydrateSupport) == null ? void 0 : _d2.call(nu, {
    LitElement: oa
  });
  const Rk = nu.litElementPolyfillSupport;
  Rk == null ? void 0 : Rk({
    LitElement: oa
  });
  (nu.litElementVersions ?? (nu.litElementVersions = [])).push("4.2.2");
  const $k = {
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
  }, Oa = {
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
  }, Uk = {
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
  }, Bk = {
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
  }, Dk = {
    regular: "KHTeka",
    mono: "KHTekaMono"
  }, Lk = {
    regular: "400",
    medium: "500"
  }, Mk = {
    h1: "50px",
    h2: "44px",
    h3: "38px",
    h4: "32px",
    h5: "26px",
    h6: "20px",
    large: "16px",
    medium: "14px",
    small: "12px"
  }, Fk = {
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
  }, qk = {
    "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
    "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
    "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
    "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
    "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
    "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
  }, jk = {
    xl: "400ms",
    lg: "200ms",
    md: "125ms",
    sm: "75ms"
  }, cd = {
    colors: $k,
    fontFamily: Dk,
    fontWeight: Lk,
    textSize: Mk,
    typography: Fk,
    tokens: {
      core: Oa.core,
      theme: Oa.dark
    },
    borderRadius: Uk,
    spacing: Bk,
    durations: jk,
    easings: qk
  }, op = "--apkt";
  function Yo(t) {
    if (!t) return {};
    const e = {};
    return e["font-family"] = t["--apkt-font-family"] ?? t["--w3m-font-family"] ?? "KHTeka", e.accent = t["--apkt-accent"] ?? t["--w3m-accent"] ?? "#0988F0", e["color-mix"] = t["--apkt-color-mix"] ?? t["--w3m-color-mix"] ?? "#000", e["color-mix-strength"] = t["--apkt-color-mix-strength"] ?? t["--w3m-color-mix-strength"] ?? 0, e["font-size-master"] = t["--apkt-font-size-master"] ?? t["--w3m-font-size-master"] ?? "10px", e["border-radius-master"] = t["--apkt-border-radius-master"] ?? t["--w3m-border-radius-master"] ?? "4px", t["--apkt-z-index"] !== void 0 ? e["z-index"] = t["--apkt-z-index"] : t["--w3m-z-index"] !== void 0 && (e["z-index"] = t["--w3m-z-index"]), e;
  }
  let tn;
  tn = {
    createCSSVariables(t) {
      const e = {}, s = {};
      function n(i, o, a = "") {
        for (const [c, l] of Object.entries(i)) {
          const d = a ? `${a}-${c}` : c;
          l && typeof l == "object" && Object.keys(l).length ? (o[c] = {}, n(l, o[c], d)) : typeof l == "string" && (o[c] = `${op}-${d}`);
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
          c && typeof c == "object" ? n(c, d, l) : typeof d == "string" && (s[`${op}-${l}`] = d);
        }
      }
      return n(t, e), s;
    },
    createRootStyles(t, e) {
      const s = {
        ...cd,
        tokens: {
          ...cd.tokens,
          theme: t === "light" ? Oa.light : Oa.dark
        }
      }, { cssVariables: n } = tn.createCSSVariables(s), r = tn.assignCSSVariables(n, s), i = tn.generateW3MVariables(e), o = tn.generateW3MOverrides(e), a = tn.generateScaledVariables(e), c = tn.generateBaseVariables(r), l = {
        ...r,
        ...c,
        ...i,
        ...o,
        ...a
      }, d = tn.applyColorMixToVariables(e, l), u = {
        ...l,
        ...d
      };
      return `:root {${Object.entries(u).map(([f, g]) => `${f}:${g.replace("/[:;{}</>]/g", "")};`).join("")}}`;
    },
    generateW3MVariables(t) {
      if (!t) return {};
      const e = Yo(t), s = {};
      return s["--w3m-font-family"] = e["font-family"], s["--w3m-accent"] = e.accent, s["--w3m-color-mix"] = e["color-mix"], s["--w3m-color-mix-strength"] = `${e["color-mix-strength"]}%`, s["--w3m-font-size-master"] = e["font-size-master"], s["--w3m-border-radius-master"] = e["border-radius-master"], s;
    },
    generateW3MOverrides(t) {
      if (!t) return {};
      const e = Yo(t), s = {};
      if (t["--apkt-accent"] || t["--w3m-accent"]) {
        const n = e.accent;
        s["--apkt-tokens-core-iconAccentPrimary"] = n, s["--apkt-tokens-core-borderAccentPrimary"] = n, s["--apkt-tokens-core-textAccentPrimary"] = n, s["--apkt-tokens-core-backgroundAccentPrimary"] = n;
      }
      return (t["--apkt-font-family"] || t["--w3m-font-family"]) && (s["--apkt-fontFamily-regular"] = e["font-family"]), e["z-index"] !== void 0 && (s["--apkt-tokens-core-zIndex"] = `${e["z-index"]}`), s;
    },
    generateScaledVariables(t) {
      if (!t) return {};
      const e = Yo(t), s = {};
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
      const n = Yo(t), r = n["color-mix"], i = n["color-mix-strength"];
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
  ({ cssVariablesVarPrefix: Wk } = tn.createCSSVariables(cd));
  X3 = function(t, ...e) {
    return Fn(t, ...e.map((s) => bs(typeof s == "function" ? s(Wk) : s)));
  };
  let lr, Er, Ls, vs, ka;
  const Xs = {
    "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
    "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
    "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
    "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
    "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
    "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
  };
  function Pa(t, e = "dark") {
    lr && document.head.removeChild(lr), lr = document.createElement("style"), lr.textContent = tn.createRootStyles(e, t), document.head.appendChild(lr);
  }
  Q3 = function(t, e = "dark") {
    if (ka = t, Er = document.createElement("style"), Ls = document.createElement("style"), vs = document.createElement("style"), Er.textContent = ci(t).core.cssText, Ls.textContent = ci(t).dark.cssText, vs.textContent = ci(t).light.cssText, document.head.appendChild(Er), document.head.appendChild(Ls), document.head.appendChild(vs), Pa(t, e), ld(e), !((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]))) for (const [n, r] of Object.entries(Xs)) {
      const i = document.createElement("link");
      i.rel = "preload", i.href = r, i.as = "font", i.type = n.includes("woff2") ? "font/woff2" : "font/woff", i.crossOrigin = "anonymous", document.head.appendChild(i);
    }
    ld(e);
  };
  function ld(t = "dark") {
    Ls && vs && lr && (t === "light" ? (Pa(ka, t), Ls.removeAttribute("media"), vs.media = "enabled") : (Pa(ka, t), vs.removeAttribute("media"), Ls.media = "enabled"));
  }
  function Hk(t) {
    var _a2, _b2, _c2;
    if (ka = t, Er && Ls && vs) {
      Er.textContent = ci(t).core.cssText, Ls.textContent = ci(t).dark.cssText, vs.textContent = ci(t).light.cssText;
      const e = (t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]);
      e && (Er.textContent = (_a2 = Er.textContent) == null ? void 0 : _a2.replace("font-family: KHTeka", `font-family: ${e}`), Ls.textContent = (_b2 = Ls.textContent) == null ? void 0 : _b2.replace("font-family: KHTeka", `font-family: ${e}`), vs.textContent = (_c2 = vs.textContent) == null ? void 0 : _c2.replace("font-family: KHTeka", `font-family: ${e}`));
    }
    if (lr) {
      const e = (vs == null ? void 0 : vs.media) === "enabled" ? "light" : "dark";
      Pa(t, e);
    }
  }
  function ci(t) {
    const e = !!((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]));
    return {
      core: Fn`
      ${e ? Fn`` : Fn`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${bs(Xs["KHTeka-400-woff2"])}) format('woff2'),
                url(${bs(Xs["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${bs(Xs["KHTeka-300-woff2"])}) format('woff2'),
                url(${bs(Xs["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${bs(Xs["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${bs(Xs["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${bs(Xs["KHTeka-400-woff2"])}) format('woff2'),
                url(${bs(Xs["KHTeka-400-woff"])}) format('woff');
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
      dark: Fn`
      :root {
      }
    `,
      light: Fn`
      :root {
      }
    `
    };
  }
  let Qs, Vk, zk, ss, jw, Kk, Gk;
  eP = Fn`
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
  tP = Fn`
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
  Qs = {
    EIP155: F.CHAIN.EVM,
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH"
  };
  Vk = {
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
  dd = {
    getCaipTokens(t) {
      if (!t) return;
      const e = {};
      return Object.entries(t).forEach(([s, n]) => {
        e[`${Qs.EIP155}:${s}`] = n;
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
        hasConnected: n.some((r) => dd.isLowerCaseMatch(r.connectorId, t))
      };
    }
  };
  zk = new AbortController();
  ss = {
    EmbeddedWalletAbortController: zk,
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
        debugMessage: () => `The origin ${Ui() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${q.state.projectId}]`
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
  jw = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
      USDC: {
        8453: hk.asset,
        84532: fk.asset
      }
    },
    getTokenSymbolByAddress(t) {
      if (!t) return;
      const [e] = Object.entries(jw.TOKEN_ADDRESSES_BY_SYMBOL).find(([s, n]) => Object.values(n).includes(t)) ?? [];
      return e;
    }
  };
  Kk = {
    createLogger(t, e = "error") {
      const s = up({
        level: e
      }), { logger: n } = Ra({
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
  Gk = "rpc.walletconnect.org";
  function ap(t, e) {
    const s = new URL("https://rpc.walletconnect.org/v1/");
    return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
  }
  let il;
  il = [
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
  Gr = {
    extendRpcUrlWithProjectId(t, e) {
      let s = false;
      try {
        s = new URL(t).host === Gk;
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
      return il.includes(e) ? ap(e, s) : n || "";
    },
    extendCaipNetwork(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2;
      const r = this.getChainNamespace(t), i = this.getCaipNetworkId(t), o = (_c2 = (_b2 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0], a = this.getDefaultRpcUrl(t, i, s), c = ((_f2 = (_e2 = (_d3 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _d3.chainDefault) == null ? void 0 : _e2.http) == null ? void 0 : _f2[0]) || o, l = ((_g2 = n == null ? void 0 : n[i]) == null ? void 0 : _g2.map((h) => h.url)) || [], d = [
        ...l,
        ...a ? [
          a
        ] : []
      ], u = [
        ...l
      ];
      return c && !u.includes(c) && u.push(c), {
        ...t,
        chainNamespace: r,
        caipNetworkId: i,
        assets: {
          imageId: Vk.NetworkImageIds[t.id],
          imageUrl: e == null ? void 0 : e[t.id]
        },
        rpcUrls: {
          ...t.rpcUrls,
          default: {
            http: d
          },
          chainDefault: {
            http: u
          }
        }
      };
    },
    extendCaipNetworks(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
      return t.map((r) => Gr.extendCaipNetwork(r, {
        customNetworkImageUrls: e,
        customRpcUrls: n,
        projectId: s
      }));
    },
    getViemTransport(t, e, s) {
      var _a2, _b2, _c2;
      const n = [];
      return s == null ? void 0 : s.forEach((r) => {
        n.push(_o(r.url, r.config));
      }), il.includes(t.caipNetworkId) && n.push(_o(ap(t.caipNetworkId, e), {
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      })), (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2.forEach((r) => {
        n.push(_o(r));
      }), cu(n);
    },
    extendWagmiTransports(t, e, s) {
      if (il.includes(t.caipNetworkId)) {
        const n = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
        return cu([
          s,
          _o(n)
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
  function Yk(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    const e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++) e[l] = 255;
    for (let l = 0; l < t.length; l++) {
      const d = t.charAt(l), u = d.charCodeAt(0);
      if (e[u] !== 255) throw new TypeError(d + " is ambiguous");
      e[u] = l;
    }
    const s = t.length, n = t.charAt(0), r = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let d = 0, u = 0, h = 0;
      const f = l.length;
      for (; h !== f && l[h] === 0; ) h++, d++;
      const g = (f - h) * i + 1 >>> 0, p = new Uint8Array(g);
      for (; h !== f; ) {
        let T = l[h], A = 0;
        for (let N = g - 1; (T !== 0 || A < u) && N !== -1; N--, A++) T += 256 * p[N] >>> 0, p[N] = T % s >>> 0, T = T / s >>> 0;
        if (T !== 0) throw new Error("Non-zero carry");
        u = A, h++;
      }
      let m = g - u;
      for (; m !== g && p[m] === 0; ) m++;
      let x = n.repeat(d);
      for (; m < g; ++m) x += t.charAt(p[m]);
      return x;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === n; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const T = l.charCodeAt(d);
        if (T > 255) return;
        let A = e[T];
        if (A === 255) return;
        let N = 0;
        for (let P = f - 1; (A !== 0 || N < h) && P !== -1; P--, N++) A += s * g[P] >>> 0, g[P] = A % 256 >>> 0, A = A / 256 >>> 0;
        if (A !== 0) throw new Error("Non-zero carry");
        h = N, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const m = new Uint8Array(u + (f - p));
      let x = u;
      for (; p !== f; ) m[x++] = g[p++];
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
  var Zk = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const Jk = Yk(Zk), Zo = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603
  };
  class Xk extends ck {
    async setUniversalProvider(e) {
      if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
      return this.addConnector(new lk({
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
      if (!(e.caipNetwork && me.BALANCE_SUPPORTED_CHAINS.includes((_a2 = e.caipNetwork) == null ? void 0 : _a2.chainNamespace)) || ((_b2 = e.caipNetwork) == null ? void 0 : _b2.testnet)) return {
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
          message: Jk.encode(new TextEncoder().encode(n)),
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
              chainId: au(s.id)
            }
          ]
        }));
      } catch (r) {
        if (r.code === Zo.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === Zo.ERROR_INVALID_CHAIN_ID || r.code === Zo.ERROR_CODE_DEFAULT || ((_c2 = (_b2 = r == null ? void 0 : r.data) == null ? void 0 : _b2.originalError) == null ? void 0 : _c2.code) === Zo.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
          await ((_f2 = n.provider) == null ? void 0 : _f2.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: au(s.id),
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
  const Qk = [
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
  ], Jo = {
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
      processFallback: (t) => t === void 0 ? me.DEFAULT_REMOTE_FEATURES.email : !!t
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
      processFallback: (t) => t === void 0 ? me.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? me.DEFAULT_REMOTE_FEATURES.socials : false : t
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
      processFallback: (t) => t === void 0 ? me.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? me.DEFAULT_REMOTE_FEATURES.swaps : false : t
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
      processFallback: (t) => t === void 0 ? me.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? me.DEFAULT_REMOTE_FEATURES.onramp : false : t
    },
    activity: {
      apiFeatureName: "activity",
      localFeatureName: "history",
      returnType: false,
      isLegacy: true,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? me.DEFAULT_REMOTE_FEATURES.activity : !!t
    },
    reownBranding: {
      apiFeatureName: "reown_branding",
      localFeatureName: "reownBranding",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? me.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
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
      processFallback: () => me.DEFAULT_REMOTE_FEATURES.multiWallet
    },
    payWithExchange: {
      apiFeatureName: "fund_from_exchange",
      localFeatureName: "payWithExchange",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => me.DEFAULT_REMOTE_FEATURES.payWithExchange
    },
    payments: {
      apiFeatureName: "payments",
      localFeatureName: "payments",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => me.DEFAULT_REMOTE_FEATURES.payments
    },
    reownAuthentication: {
      apiFeatureName: "reown_authentication",
      localFeatureName: "reownAuthentication",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => typeof t > "u" ? me.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!t
    },
    headless: {
      apiFeatureName: "headless",
      localFeatureName: "headless",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => me.DEFAULT_REMOTE_FEATURES.headless
    }
  }, e3 = {
    localSettingsOverridden: /* @__PURE__ */ new Set(),
    getApiConfig(t, e) {
      return e == null ? void 0 : e.find((s) => s.id === t);
    },
    addWarning(t, e) {
      if (t !== void 0) {
        const s = Jo[e], n = s.isLegacy ? `"features.${s.localFeatureName}" (now "${e}")` : `"features.${e}"`;
        this.localSettingsOverridden.add(n);
      }
    },
    processFeature(t, e, s, n, r) {
      const i = Jo[t], o = e[i.localFeatureName];
      if (r && !i.isAvailableOnBasic) return false;
      if (n) {
        const a = this.getApiConfig(i.apiFeatureName, s);
        return (a == null ? void 0 : a.config) === null ? this.processFallbackFeature(t, o) : (a == null ? void 0 : a.config) ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, a)) : false;
      }
      return this.processFallbackFeature(t, o);
    },
    processApiFeature(t, e) {
      return Jo[t].processApi(e);
    },
    processFallbackFeature(t, e) {
      return Jo[t].processFallback(e);
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
      const i = r && !e ? me.DEFAULT_REMOTE_FEATURES : me.DEFAULT_REMOTE_FEATURES_DISABLED;
      try {
        for (const o of Qk) {
          const a = this.processFeature(o, s, n, r, e);
          Object.assign(i, {
            [o]: a
          });
        }
      } catch (o) {
        return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), me.DEFAULT_REMOTE_FEATURES;
      }
      if (r && this.localSettingsOverridden.size > 0) {
        const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
        jt.open({
          debugMessage: ss.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
        }, "warning");
      }
      return i;
    }
  };
  class t3 {
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
      }, this.getProvider = (s) => Ue.getProvider(s), this.getProviderType = (s) => Ue.getProviderId(s), this.getPreferredAccountType = (s) => as(s), this.setCaipAddress = (s, n, r = false) => {
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
      }, this.fetchIdentity = (s) => le.fetchIdentity(s), this.getReownName = (s) => Zi.getNamesForAddress(s), this.getConnectors = () => V.getConnectors(), this.getConnectorImage = (s) => da.getConnectorImage(s), this.getConnections = (s) => this.remoteFeatures.multiWallet ? ua.getConnectionsData(s).connections : (jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (s) => this.remoteFeatures.multiWallet ? ua.getConnectionsData(s).recentConnections : (jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (s) => {
        if (!this.remoteFeatures.multiWallet) {
          jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        await G.switchConnection(s);
      }, this.deleteConnection = (s) => {
        if (!this.remoteFeatures.multiWallet) {
          jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        H.deleteAddressFromConnection(s), G.syncStorageConnections();
      }, this.setConnectedWalletInfo = (s, n) => {
        const r = Ue.getProviderId(n), i = s ? {
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
      if (this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), ((_a2 = e.features) == null ? void 0 : _a2.headless) && !It.hasInjectedConnectors() && ne.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false,
        fetchRecommendedWallets: true
      }), q.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), !e.basic && !e.manualWCControl && (this.remoteFeatures = await e3.fetchRemoteFeatures(e)), await ne.fetchUsage(), q.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && fl.setOnrampProviders(this.remoteFeatures.onramp), (((_b2 = q.state.remoteFeatures) == null ? void 0 : _b2.email) || Array.isArray((_c2 = q.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d3 = q.state.remoteFeatures) == null ? void 0 : _d3.socials.length) > 0) && await this.checkAllowedOrigins(), ((_e2 = q.state.features) == null ? void 0 : _e2.reownAuthentication) || ((_f2 = q.state.remoteFeatures) == null ? void 0 : _f2.reownAuthentication)) {
        const { ReownAuthentication: s } = await aa(async () => {
          const { ReownAuthentication: r } = await import("./features-B6SfIYcA.js");
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
        const i = jw.getTokenSymbolByAddress(e.assetAddress);
        i && await ne.fetchTokenImages([
          i
        ]);
      } catch {
      }
      return await we.open({
        view: "WalletSend",
        data: {
          send: e
        }
      }), new Promise((i, o) => {
        const a = ge.subscribeKey("hash", (d) => {
          d && (l(), i({
            hash: d
          }));
        }), c = we.subscribe((d) => {
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
        Vn.isOriginAllowed(s, e, F.DEFAULT_ALLOWED_ANCESTORS) || jt.open(ss.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      } catch (e) {
        if (!(e instanceof Error)) return;
        switch (e.message) {
          case "RATE_LIMITED":
            jt.open(ss.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
            break;
          case "SERVER_ERROR": {
            const s = e.cause instanceof Error ? e.cause : e;
            jt.open({
              displayMessage: ss.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
              debugMessage: ss.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(s.message)
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
      delete s.adapters, delete s.universalProvider, pe.sendEvent({
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
      Sp.initialize(this.chainAdapters);
    }
    initializeThemeController(e) {
      e.themeMode && Ht.setThemeMode(e.themeMode), e.themeVariables && Ht.setThemeVariables(e.themeVariables);
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
        jt.open(ss.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
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
        const n = Gr.getUnsupportedNetwork(`${s}:${e}`);
        b.setActiveCaipNetwork(n);
      }
    }
    getDefaultNetwork() {
      return Gr.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(e, s) {
      return Gr.extendCaipNetwork(e, {
        customNetworkImageUrls: s.chainImages,
        projectId: s.projectId
      });
    }
    extendCaipNetworks(e) {
      return Gr.extendCaipNetworks(e.networks, {
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
      return s ? Gr.extendCaipNetwork(s, {
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
          ]), await this.syncWalletConnectAccount(), await Es.initializeIfEnabled();
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
            const u = d.map(async (g) => {
              const p = V.getConnectorId(g), m = s || p, x = await this.disconnectConnector(g, m);
              x && (a && H.deleteConnectedSocialProvider(), x.connections.forEach((T) => {
                H.addDisconnectedConnectorId(T.connectorId, g);
              })), r && this.onDisconnectNamespace({
                chainNamespace: g,
                closeModal: false
              });
            }), h = await Promise.allSettled(u);
            ge.resetSend(), G.resetWcConnection(), ((_a2 = Es.getSIWX()) == null ? void 0 : _a2.signOutOnDisconnect) && await Es.clearSessions(), V.setFilterByNamespace(void 0), G.syncStorageConnections();
            const f = h.filter((g) => g.status === "rejected");
            if (f.length > 0) throw new Error(f.map((g) => g.reason.message).join(", "));
            pe.sendEvent({
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
            provider: Ue.getProvider(s)
          }))) == null ? void 0 : _a2.signature) || "";
        },
        sendTransaction: async (e) => {
          var _a2;
          const s = e.chainNamespace;
          if (!s) throw new Error("sendTransaction: namespace not found");
          if (me.SEND_SUPPORTED_NAMESPACES.includes(s)) {
            const n = this.getAdapter(s);
            if (!n) throw new Error("sendTransaction: adapter not found");
            const r = Ue.getProvider(s);
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
            const r = Ue.getProvider(s), i = this.getCaipNetwork();
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
        getEnsAddress: async (e) => await Vn.resolveReownName(e),
        writeContract: async (e) => {
          var _a2;
          const s = b.state.activeChain, n = this.getAdapter(s);
          if (!s) throw new Error("writeContract: namespace is required but got undefined");
          if (!n) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = Ue.getProvider(s);
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
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = Ue.getProvider(s);
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
      if (e.type === Qs.CONNECTOR_TYPE_AUTH && F.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((u) => V.getConnectorId(u) === F.CONNECTOR_ID.AUTH) && e.chain !== s && (i = false), e.chain && e.chain !== s && !e.caipNetwork) {
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
      const n = e.type === Qs.CONNECTOR_TYPE_AUTH, r = dd.getOtherAuthNamespaces((_a2 = s == null ? void 0 : s.connectedCaipNetwork) == null ? void 0 : _a2.chainNamespace), i = b.state.activeCaipNetwork, o = this.getAdapter(i == null ? void 0 : i.chainNamespace);
      n && (await Promise.all(r.map(async (a) => {
        var _a3, _b2, _c2, _d3;
        try {
          const c = Ue.getProvider(a), l = this.getCaipNetwork(a);
          await ((_d3 = this.getAdapter(a)) == null ? void 0 : _d3.connect({
            ...e,
            provider: c,
            socialUri: void 0,
            chainId: l == null ? void 0 : l.id,
            rpcUrl: (_c2 = (_b2 = (_a3 = l == null ? void 0 : l.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
          })) && (H.addConnectedNamespace(a), H.removeDisconnectedConnectorId(e.id, a), this.setStatus("connected", a), this.syncConnectedWalletInfo(a));
        } catch (c) {
          jt.warn(ss.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, ss.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(a, c instanceof Error ? c.message : void 0), ss.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      })), i && await (o == null ? void 0 : o.switchNetwork({
        caipNetwork: i
      })));
    }
    getApprovedCaipNetworksData() {
      var _a2, _b2, _c2, _d3, _e2;
      if (Ue.getProviderId(b.state.activeChain) === Qs.CONNECTOR_TYPE_WALLET_CONNECT) {
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
        const r = Ue.getProviderId(s);
        if (e.chainNamespace === b.state.activeChain) await ((_a2 = this.getAdapter(s)) == null ? void 0 : _a2.switchNetwork({
          caipNetwork: e
        }));
        else if (this.setCaipNetwork(e), r === Qs.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
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
          const { chainId: o, chainNamespace: a } = ot.parseCaipAddress(i);
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
        }), s[n] = r) : s[n] = new Xk({
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
      pe.sendEvent({
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
      ] : r).forEach((o) => H.addDisconnectedConnectorId(V.getConnectorId(o) || "", o)), V.removeConnectorId(s), Ue.resetChain(s), this.setUser(null, s), this.setStatus("disconnected", s), this.setConnectedWalletInfo(null, s), n !== false && we.close();
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
        }), this.setStatus("connected", e), pe.sendEvent({
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
          const { chainId: d } = ot.parseCaipAddress(l);
          return d === (o == null ? void 0 : o.toString());
        }) || i[0];
        if (a) {
          const l = ot.validateCaipAddress(a), { chainId: d, address: u } = ot.parseCaipAddress(l);
          if (Ue.setProviderId(n, Qs.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && b.state.activeCaipNetwork && r.namespace !== F.CHAIN.EVM) {
            const h = r.getWalletConnectProvider({
              caipNetworks: this.getCaipNetworks(),
              provider: this.universalProvider,
              activeCaipNetwork: b.state.activeCaipNetwork
            });
            Ue.setProvider(n, h);
          } else Ue.setProvider(n, this.universalProvider);
          V.setConnectorId(F.CONNECTOR_ID.WALLET_CONNECT, n), H.addConnectedNamespace(n), await this.syncAccount({
            address: u,
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
      Ue.setProviderId(r, e), Ue.setProvider(r, s), V.setConnectorId(n, r);
    }
    async syncAccount(e) {
      var _a2, _b2;
      const s = e.chainNamespace === b.state.activeChain, n = b.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: r, chainId: i, chainNamespace: o } = e, { chainId: a } = H.getActiveNetworkProps(), c = (n == null ? void 0 : n.id) || a, l = ((_a2 = b.state.activeCaipNetwork) == null ? void 0 : _a2.name) === F.UNSUPPORTED_NETWORK_NAME, d = b.getNetworkProp("supportsAllNetworks", o);
      if (this.setStatus("connected", o), !(l && !d) && c) {
        let u = this.getCaipNetworks().find((p) => p.id.toString() === c.toString()), h = this.getCaipNetworks().find((p) => p.chainNamespace === o);
        if (!d && !u && !h) {
          const p = this.getApprovedCaipNetworkIds() || [], m = p.find((T) => {
            var _a3;
            return ((_a3 = ot.parseCaipNetworkId(T)) == null ? void 0 : _a3.chainId) === c.toString();
          }), x = p.find((T) => {
            var _a3;
            return ((_a3 = ot.parseCaipNetworkId(T)) == null ? void 0 : _a3.chainNamespace) === o;
          });
          u = this.getCaipNetworks().find((T) => T.caipNetworkId === m), h = this.getCaipNetworks().find((T) => T.caipNetworkId === x || "deprecatedCaipNetworkId" in T && T.deprecatedCaipNetworkId === x);
        }
        const f = u || h;
        (f == null ? void 0 : f.chainNamespace) === b.state.activeChain ? q.state.enableNetworkSwitch && !q.state.allowUnsupportedChain && ((_b2 = b.state.activeCaipNetwork) == null ? void 0 : _b2.name) === F.UNSUPPORTED_NETWORK_NAME ? b.showUnsupportedChainUI() : this.setCaipNetwork(f) : s || n && this.setCaipNetworkOfNamespace(n, o), this.syncConnectedWalletInfo(o);
        const g = this.getAddress(o);
        dd.isLowerCaseMatch(r, g) || this.syncAccountInfo(r, f == null ? void 0 : f.id, o), s ? await this.syncBalance({
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
      const s = V.getConnectorId(e), n = Ue.getProviderId(e);
      if (n === Qs.CONNECTOR_TYPE_ANNOUNCED || n === Qs.CONNECTOR_TYPE_INJECTED) {
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
      } else if (n === Qs.CONNECTOR_TYPE_WALLET_CONNECT) {
        const r = Ue.getProvider(e);
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
      !gp.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((n) => {
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
      const e = Kk.createLogger((r, ...i) => {
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
      q.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await QO.init(s);
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
        Vn.listenWcProvider({
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
        pe.sendEvent({
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
      const s = Object.entries(ss.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [n, r] = s ?? [], { message: i, alertErrorKey: o } = r ?? {};
      if (n && i && !this.reportedAlertErrors[n]) {
        const a = ss.ALERT_ERRORS[o];
        a && (jt.open(a, "error"), this.reportedAlertErrors[n] = true);
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
      return s(e) ? we.open({
        ...e,
        data: {
          swap: e.arguments
        }
      }) : n(e) && e.arguments ? this.openSend(e.arguments) : we.open(e);
    }
    async close() {
      await this.injectModalUi(), we.close();
    }
    setLoading(e, s) {
      we.setLoading(e, s);
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
        jt.open(ss.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      await b.switchActiveNetwork(n, {
        throwOnFailure: s
      });
    }
    getWalletProvider() {
      return b.state.activeChain ? Ue.state.providers[b.state.activeChain] : null;
    }
    getWalletProviderType() {
      return Ue.getProviderId(b.state.activeChain);
    }
    subscribeProviders(e) {
      return Ue.subscribeProviders(e);
    }
    getThemeMode() {
      return Ht.state.themeMode;
    }
    getThemeVariables() {
      return Ht.state.themeVariables;
    }
    setThemeMode(e) {
      Ht.setThemeMode(e), ld(Ht.state.themeMode);
    }
    setTermsConditionsUrl(e) {
      q.setTermsConditionsUrl(e);
    }
    setPrivacyPolicyUrl(e) {
      q.setPrivacyPolicyUrl(e);
    }
    setThemeVariables(e) {
      Ht.setThemeVariables(e), Hk(Ht.state.themeVariables);
    }
    subscribeTheme(e) {
      return Ht.subscribe(e);
    }
    subscribeConnections(e) {
      return this.remoteFeatures.multiWallet ? G.subscribe(e) : (jt.open(F.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {
      });
    }
    getWalletInfo(e) {
      var _a2, _b2, _c2;
      return e ? (_b2 = (_a2 = b.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.connectedWalletInfo : (_c2 = b.getAccountData()) == null ? void 0 : _c2.connectedWalletInfo;
    }
    getAccount(e) {
      const s = e || b.state.activeChain, n = V.getAuthConnector(s), r = b.getAccountData(s), i = H.getConnectedConnectorId(b.state.activeChain), o = G.getConnections(s);
      if (!s) throw new Error("AppKit:getAccount - namespace is required");
      const a = o.flatMap((c) => c.accounts.map(({ address: l, type: d, publicKey: u }) => ee.createAccount(s, l, d || "eoa", u)));
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
          accountType: as(s),
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
      return Cs.state;
    }
    getRemoteFeatures() {
      return q.state.remoteFeatures;
    }
    subscribeState(e) {
      return Cs.subscribe(e);
    }
    subscribeRemoteFeatures(e) {
      return q.subscribeKey("remoteFeatures", e);
    }
    showErrorMessage(e) {
      Bs.showError(e);
    }
    showSuccessMessage(e) {
      Bs.showSuccess(e);
    }
    getEvent() {
      return {
        ...pe.state
      };
    }
    subscribeEvents(e) {
      return pe.subscribe(e);
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
      return we.state.open;
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
      return jn.getConnectOrderMethod(q.state.features, V.getConnectors());
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
  let cp = false;
  class Ww extends t3 {
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
      if (!cp && ee.isClient()) {
        if (await aa(() => import("./basic-BnnFJCi-.js"), __vite__mapDeps([5,6,1,2])), await aa(() => import("./w3m-modal-LsleGRIU.js"), __vite__mapDeps([7,6,1,2])), !document.querySelector("w3m-modal")) {
          const s = document.createElement("w3m-modal");
          !q.state.disableAppend && !q.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s);
        }
        cp = true;
      }
    }
  }
  const s3 = "1.8.17-wc-circular-dependencies-fix.0";
  function n3(t) {
    return new Ww({
      ...t,
      basic: true,
      sdkVersion: `html-core-${s3}`
    });
  }
  sP = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: Ww,
    createAppKit: n3
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Sp as $,
  ne as A,
  le as B,
  b as C,
  me as D,
  fi as E,
  Np as F,
  V as G,
  ct as H,
  at as I,
  De as J,
  Es as K,
  N0 as L,
  we as M,
  gp as N,
  ot as O,
  Ue as P,
  po as Q,
  ae as R,
  ie as S,
  dd as T,
  q as U,
  i3 as V,
  an as W,
  da as X,
  os as Y,
  Ht as Z,
  Q3 as _,
  __tla,
  F as a,
  It as a0,
  Ir as a1,
  on as a2,
  ua as a3,
  Gr as a4,
  H as a5,
  jn as a6,
  sP as a7,
  re as b,
  Bw as c,
  oa as d,
  Z3 as e,
  cu as f,
  To as g,
  et as h,
  Fn as i,
  X3 as j,
  tP as k,
  bp as l,
  ds as m,
  Bs as n,
  G as o,
  pe as p,
  as as q,
  eP as r,
  h0 as s,
  ee as t,
  ad as u,
  Wk as v,
  J3 as w,
  uy as x,
  jt as y,
  md as z
};
