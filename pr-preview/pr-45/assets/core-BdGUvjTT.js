const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BBAT_Pyg.js","assets/main-BUnYNz0E.js","assets/main-BN-Qqfmx.css","assets/ccip-DXeEGVi7.js","assets/features-CCJpsT7n.js","assets/basic-CujsewwU.js","assets/index-BnKRcV4P.js","assets/w3m-modal-leneXEQj.js"])))=>i.map(i=>d[i]);
import { bk as $f, aQ as Df, b0 as Bf, cS as Lf, U as Mf, cT as Ff, cU as un, bK as Vu, cQ as Zi, by as Ci, cV as Cr, cW as qf, cX as Wf, cY as jf, cZ as Hf, c_ as zf, c$ as Vf, d0 as Ic, d1 as Kf, d2 as Yt, d3 as St, d4 as K, d5 as zs, d6 as Gf, d7 as Yf, d8 as Ee, d9 as Wr, da as Ta, db as Jf, dc as Zf, dd as Hn, de as Ku, df as Dt, dg as Xf, dh as Qf, di as Bt, dj as ms, dk as vr, dl as Nc, dm as eg, dn as Sc, dp as _c, dq as Jr, dr as Tc, ds as dl, dt as tg, du as sg, dv as ng, dw as ul, dx as kn, dy as Gu, dz as Os, dA as gs, dB as Gs, dC as Yu, h as vi, cC as hl, __tla as __tla_0 } from "./main-BUnYNz0E.js";
let ch, Z, re, m, he, br, ah, q, tt, et, Re, is, wg, pe, Zu, Qe, xe, di, se, ee, Ac, U, W_, Ms, eo, Gt, Pt, gT, P, ht, Fn, Ls, to, or, L, dn, yT, X, _f, Ji, hT, pl, Ii, Ge, cn, fT, wT, th, Xt, ys, z, de, Jt, mT, rg, Y, Ec, S_, pT, nm, kt, kc;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _d2;
  pl = function(t, e = {}) {
    const { key: s = "fallback", name: n = "Fallback", rank: r = false, shouldThrow: i = rg, retryCount: o, retryDelay: a } = e;
    return (({ chain: c, pollingInterval: l = 4e3, timeout: d, ...u }) => {
      let h = t, f = () => {
      };
      const g = $f({
        key: s,
        name: n,
        async request({ method: p, params: w }) {
          let A;
          const I = async (v = 0) => {
            const b = h[v]({
              ...u,
              chain: c,
              retryCount: 0,
              timeout: d
            });
            try {
              const T = await b.request({
                method: p,
                params: w
              });
              return f({
                method: p,
                params: w,
                response: T,
                transport: b,
                status: "success"
              }), T;
            } catch (T) {
              if (f({
                error: T,
                method: p,
                params: w,
                transport: b,
                status: "error"
              }), i(T) || v === h.length - 1 || (A ?? (A = h.slice(v + 1).some((R) => {
                const { include: D, exclude: M } = R({
                  chain: c
                }).config.methods || {};
                return D ? D.includes(p) : M ? !M.includes(p) : true;
              })), !A)) throw T;
              return I(v + 1);
            }
          };
          return I();
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
        ig({
          chain: c,
          interval: p.interval ?? l,
          onTransports: (w) => h = w,
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
  rg = function(t) {
    return !!("code" in t && typeof t.code == "number" && (t.code === Df.code || t.code === Bf.code || t.code === Lf.code || Mf.nodeMessage.test(t.message) || t.code === 5e3));
  };
  function ig({ chain: t, interval: e = 4e3, onTransports: s, ping: n, sampleCount: r = 10, timeout: i = 1e3, transports: o, weights: a = {} }) {
    const { stability: c = 0.7, latency: l = 0.3 } = a, d = [], u = async () => {
      const h = await Promise.all(o.map(async (p) => {
        const w = p({
          chain: t,
          retryCount: 0,
          timeout: i
        }), A = Date.now();
        let I, v;
        try {
          await (n ? n({
            transport: w
          }) : w.request({
            method: "net_listening"
          })), v = 1;
        } catch {
          v = 0;
        } finally {
          I = Date.now();
        }
        return {
          latency: I - A,
          success: v
        };
      }));
      d.push(h), d.length > r && d.shift();
      const f = Math.max(...d.map((p) => Math.max(...p.map(({ latency: w }) => w)))), g = o.map((p, w) => {
        const A = d.map((R) => R[w].latency), v = 1 - A.reduce((R, D) => R + D, 0) / A.length / f, b = d.map((R) => R[w].success), T = b.reduce((R, D) => R + D, 0) / b.length;
        return T === 0 ? [
          0,
          w
        ] : [
          l * v + c * T,
          w
        ];
      }).sort((p, w) => w[0] - p[0]);
      s(g.map(([, p]) => o[p])), await Ff(e), u();
    };
    u();
  }
  const Ju = {
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    }
  };
  var fl = {};
  let Xu;
  P = {
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
    SECURE_SITE_SDK_ORIGIN: (typeof un < "u" && typeof fl < "u" ? fl.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
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
    IS_DEVELOPMENT: typeof un < "u" && false,
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
  Zu = {
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
      return ((_a2 = P.CHAIN_NAME_MAP) == null ? void 0 : _a2[n]) || void 0;
    }
  };
  Xu = [
    "eip155",
    "solana",
    "polkadot",
    "bip122",
    "cosmos",
    "sui",
    "stacks"
  ];
  var og = 20, ag = 1, Mn = 1e6, gl = 1e6, cg = -7, lg = 21, dg = false, ci = "[big.js] ", zn = ci + "Invalid ", Eo = zn + "decimal places", ug = zn + "rounding mode", Qu = ci + "Division by zero", _e = {}, Cs = void 0, hg = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function eh() {
    function t(e) {
      var s = this;
      if (!(s instanceof t)) return e === Cs ? eh() : new t(e);
      if (e instanceof t) s.s = e.s, s.e = e.e, s.c = e.c.slice();
      else {
        if (typeof e != "string") {
          if (t.strict === true && typeof e != "bigint") throw TypeError(zn + "value");
          e = e === 0 && 1 / e < 0 ? "-0" : String(e);
        }
        pg(s, e);
      }
      s.constructor = t;
    }
    return t.prototype = _e, t.DP = og, t.RM = ag, t.NE = cg, t.PE = lg, t.strict = dg, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t;
  }
  function pg(t, e) {
    var s, n, r;
    if (!hg.test(e)) throw Error(zn + "number");
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
  function Vn(t, e, s, n) {
    var r = t.c;
    if (s === Cs && (s = t.constructor.RM), s !== 0 && s !== 1 && s !== 2 && s !== 3) throw Error(ug);
    if (e < 1) n = s === 3 && (n || !!r[0]) || e === 0 && (s === 1 && r[0] >= 5 || s === 2 && (r[0] > 5 || r[0] === 5 && (n || r[1] !== Cs))), r.length = 1, n ? (t.e = t.e - e + 1, r[0] = 1) : r[0] = t.e = 0;
    else if (e < r.length) {
      if (n = s === 1 && r[e] >= 5 || s === 2 && (r[e] > 5 || r[e] === 5 && (n || r[e + 1] !== Cs || r[e - 1] & 1)) || s === 3 && (n || !!r[0]), r.length = e, n) {
        for (; ++r[--e] > 9; ) if (r[e] = 0, e === 0) {
          ++t.e, r.unshift(1);
          break;
        }
      }
      for (e = r.length; !r[--e]; ) r.pop();
    }
    return t;
  }
  function Kn(t, e, s) {
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
  _e.abs = function() {
    var t = new this.constructor(this);
    return t.s = 1, t;
  };
  _e.cmp = function(t) {
    var e, s = this, n = s.c, r = (t = new s.constructor(t)).c, i = s.s, o = t.s, a = s.e, c = t.e;
    if (!n[0] || !r[0]) return n[0] ? i : r[0] ? -o : 0;
    if (i != o) return i;
    if (e = i < 0, a != c) return a > c ^ e ? 1 : -1;
    for (o = (a = n.length) < (c = r.length) ? a : c, i = -1; ++i < o; ) if (n[i] != r[i]) return n[i] > r[i] ^ e ? 1 : -1;
    return a == c ? 0 : a > c ^ e ? 1 : -1;
  };
  _e.div = function(t) {
    var e = this, s = e.constructor, n = e.c, r = (t = new s(t)).c, i = e.s == t.s ? 1 : -1, o = s.DP;
    if (o !== ~~o || o < 0 || o > Mn) throw Error(Eo);
    if (!r[0]) throw Error(Qu);
    if (!n[0]) return t.s = i, t.c = [
      t.e = 0
    ], t;
    var a, c, l, d, u, h = r.slice(), f = a = r.length, g = n.length, p = n.slice(0, a), w = p.length, A = t, I = A.c = [], v = 0, b = o + (A.e = e.e - t.e) + 1;
    for (A.s = i, i = b < 0 ? 0 : b, h.unshift(0); w++ < a; ) p.push(0);
    do {
      for (l = 0; l < 10; l++) {
        if (a != (w = p.length)) d = a > w ? 1 : -1;
        else for (u = -1, d = 0; ++u < a; ) if (r[u] != p[u]) {
          d = r[u] > p[u] ? 1 : -1;
          break;
        }
        if (d < 0) {
          for (c = w == a ? r : h; w; ) {
            if (p[--w] < c[w]) {
              for (u = w; u && !p[--u]; ) p[u] = 9;
              --p[u], p[w] += 10;
            }
            p[w] -= c[w];
          }
          for (; !p[0]; ) p.shift();
        } else break;
      }
      I[v++] = d ? l : ++l, p[0] && d ? p[w] = n[f] || 0 : p = [
        n[f]
      ];
    } while ((f++ < g || p[0] !== Cs) && i--);
    return !I[0] && v != 1 && (I.shift(), A.e--, b--), v > b && Vn(A, b, s.RM, p[0] !== Cs), A;
  };
  _e.eq = function(t) {
    return this.cmp(t) === 0;
  };
  _e.gt = function(t) {
    return this.cmp(t) > 0;
  };
  _e.gte = function(t) {
    return this.cmp(t) > -1;
  };
  _e.lt = function(t) {
    return this.cmp(t) < 0;
  };
  _e.lte = function(t) {
    return this.cmp(t) < 1;
  };
  _e.minus = _e.sub = function(t) {
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
  _e.mod = function(t) {
    var e, s = this, n = s.constructor, r = s.s, i = (t = new n(t)).s;
    if (!t.c[0]) throw Error(Qu);
    return s.s = t.s = 1, e = t.cmp(s) == 1, s.s = r, t.s = i, e ? new n(s) : (r = n.DP, i = n.RM, n.DP = n.RM = 0, s = s.div(t), n.DP = r, n.RM = i, this.minus(s.times(t)));
  };
  _e.neg = function() {
    var t = new this.constructor(this);
    return t.s = -t.s, t;
  };
  _e.plus = _e.add = function(t) {
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
  _e.pow = function(t) {
    var e = this, s = new e.constructor("1"), n = s, r = t < 0;
    if (t !== ~~t || t < -gl || t > gl) throw Error(zn + "exponent");
    for (r && (t = -t); t & 1 && (n = n.times(e)), t >>= 1, !!t; ) e = e.times(e);
    return r ? s.div(n) : n;
  };
  _e.prec = function(t, e) {
    if (t !== ~~t || t < 1 || t > Mn) throw Error(zn + "precision");
    return Vn(new this.constructor(this), t, e);
  };
  _e.round = function(t, e) {
    if (t === Cs) t = 0;
    else if (t !== ~~t || t < -Mn || t > Mn) throw Error(Eo);
    return Vn(new this.constructor(this), t + this.e + 1, e);
  };
  _e.sqrt = function() {
    var t, e, s, n = this, r = n.constructor, i = n.s, o = n.e, a = new r("0.5");
    if (!n.c[0]) return new r(n);
    if (i < 0) throw Error(ci + "No square root");
    i = Math.sqrt(+Kn(n, true, true)), i === 0 || i === 1 / 0 ? (e = n.c.join(""), e.length + o & 1 || (e += "0"), i = Math.sqrt(e), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), t = new r((i == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + o)) : t = new r(i + ""), o = t.e + (r.DP += 4);
    do
      s = t, t = a.times(s.plus(n.div(s)));
    while (s.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
    return Vn(t, (r.DP -= 4) + t.e + 1, r.RM);
  };
  _e.times = _e.mul = function(t) {
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
  _e.toExponential = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Cs) {
      if (t !== ~~t || t < 0 || t > Mn) throw Error(Eo);
      for (s = Vn(new s.constructor(s), ++t, e); s.c.length < t; ) s.c.push(0);
    }
    return Kn(s, true, !!n);
  };
  _e.toFixed = function(t, e) {
    var s = this, n = s.c[0];
    if (t !== Cs) {
      if (t !== ~~t || t < 0 || t > Mn) throw Error(Eo);
      for (s = Vn(new s.constructor(s), t + s.e + 1, e), t = t + s.e + 1; s.c.length < t; ) s.c.push(0);
    }
    return Kn(s, false, !!n);
  };
  _e[Symbol.for("nodejs.util.inspect.custom")] = _e.toJSON = _e.toString = function() {
    var t = this, e = t.constructor;
    return Kn(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
  };
  _e.toNumber = function() {
    var t = +Kn(this, true, true);
    if (this.constructor.strict === true && !this.eq(t.toString())) throw Error(ci + "Imprecise conversion");
    return t;
  };
  _e.toPrecision = function(t, e) {
    var s = this, n = s.constructor, r = s.c[0];
    if (t !== Cs) {
      if (t !== ~~t || t < 1 || t > Mn) throw Error(zn + "precision");
      for (s = Vn(new n(s), t, e); s.c.length < t; ) s.c.push(0);
    }
    return Kn(s, t <= s.e || s.e <= n.NE || s.e >= n.PE, !!r);
  };
  _e.valueOf = function() {
    var t = this, e = t.constructor;
    if (e.strict === true) throw Error(ci + "valueOf disallowed");
    return Kn(t, t.e <= e.NE || t.e >= e.PE, true);
  };
  var ds = eh();
  let fg, gg, mg, Jn;
  th = {
    bigNumber(t, e = {
      safe: false
    }) {
      try {
        return t ? new ds(t) : new ds(0);
      } catch (s) {
        if (e.safe) return new ds(0);
        throw s;
      }
    },
    formatNumber(t, e) {
      const { decimals: s, round: n = 8, safe: r = true } = e;
      return th.bigNumber(t, {
        safe: r
      }).div(new ds(10).pow(s)).round(n);
    },
    multiply(t, e) {
      if (t === void 0 || e === void 0) return new ds(0);
      const s = new ds(t), n = new ds(e);
      return s.times(n);
    },
    toFixed(t, e = 2) {
      return t === void 0 || t === "" ? new ds(0).toFixed(e) : new ds(t).toFixed(e);
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
      return new ds(e).toNumber();
    }
  };
  fg = [
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
  gg = [
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
  mg = [
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
  wg = {
    getERC20Abi: (t) => P.USDT_CONTRACT_ADDRESSES.includes(t) ? mg : fg,
    getSwapAbi: () => gg
  };
  Jn = {
    ConnectorExplorerIds: {
      [P.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [P.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [P.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [P.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
      [P.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
      [P.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [P.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      [P.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      [P.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      [P.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      [P.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
      [P.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
      [P.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
      [P.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
      [P.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
      [P.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
      [P.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
      [P.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [P.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
    }
  };
  Qe = {
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
  Ls = {
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
      if (Ls.isRpcProviderError(t)) {
        const e = t.code === Ls.RPC_ERROR_CODE.USER_REJECTED_REQUEST, s = t.code === Ls.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        return e || s || Ls.isUserRejectedMessage(t.message);
      }
      return t instanceof Error ? Ls.isUserRejectedMessage(t.message) : false;
    }
  };
  class yg extends Error {
    constructor(e, s) {
      super(s.message, {
        cause: e
      }), this.name = Ls.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = s.code;
    }
  }
  class sh extends yg {
    constructor(e) {
      super(e, {
        code: Ls.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
        message: "User rejected the request"
      }), this.name = Ls.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
  }
  ee = {
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
  function Bo(t) {
    if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${t}:connected_connector_id`;
  }
  X = {
    setItem(t, e) {
      Lr() && e !== void 0 && localStorage.setItem(t, e);
    },
    getItem(t) {
      if (Lr()) return localStorage.getItem(t) || void 0;
    },
    removeItem(t) {
      Lr() && localStorage.removeItem(t);
    },
    clear() {
      Lr() && localStorage.clear();
    }
  };
  function Lr() {
    return typeof window < "u" && typeof localStorage < "u";
  }
  function Xi(t, e) {
    const s = (t == null ? void 0 : t["--apkt-accent"]) ?? (t == null ? void 0 : t["--w3m-accent"]);
    return e === "light" ? {
      "--w3m-accent": s || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    } : {
      "--w3m-accent": s || "hsla(230, 100%, 67%, 1)",
      "--w3m-background": "#202020"
    };
  }
  const bg = Symbol(), ml = Object.getPrototypeOf, Oa = /* @__PURE__ */ new WeakMap(), Eg = (t) => t && (Oa.has(t) ? Oa.get(t) : ml(t) === Object.prototype || ml(t) === Array.prototype), Cg = (t) => Eg(t) && t[bg] || null, wl = (t, e = true) => {
    Oa.set(t, e);
  }, Qi = {}, Oc = (t) => typeof t == "object" && t !== null, vg = (t) => Oc(t) && !li.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer) && !(t instanceof Promise), nh = (t, e) => {
    const s = ka.get(t);
    if ((s == null ? void 0 : s[0]) === e) return s[1];
    const n = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
    return wl(n, true), ka.set(t, [
      e,
      n
    ]), Reflect.ownKeys(t).forEach((r) => {
      if (Object.getOwnPropertyDescriptor(n, r)) return;
      const i = Reflect.get(t, r), { enumerable: o } = Reflect.getOwnPropertyDescriptor(t, r), a = {
        value: i,
        enumerable: o,
        configurable: true
      };
      if (li.has(i)) wl(i, false);
      else if (fn.has(i)) {
        const [c, l] = fn.get(i);
        a.value = nh(c, l());
      }
      Object.defineProperty(n, r, a);
    }), Object.preventExtensions(n);
  }, Ag = (t, e, s, n) => ({
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
      if (c && (yl(l, o) || Zr.has(o) && yl(l, Zr.get(o)))) return true;
      s(i), Oc(o) && (o = Cg(o) || o);
      const d = !fn.has(o) && Ng(o) ? Re(o) : o;
      return e(i, d), Reflect.set(r, i, d, a), n([
        "set",
        [
          i
        ],
        o,
        l
      ]), true;
    }
  }), fn = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakSet(), ka = /* @__PURE__ */ new WeakMap(), Wi = [
    1
  ], Zr = /* @__PURE__ */ new WeakMap();
  let yl = Object.is, Ig = (t, e) => new Proxy(t, e), Ng = vg, Sg = nh, _g = Ag;
  Re = function(t = {}) {
    if (!Oc(t)) throw new Error("object required");
    const e = Zr.get(t);
    if (e) return e;
    let s = Wi[0];
    const n = /* @__PURE__ */ new Set(), r = (w, A = ++Wi[0]) => {
      s !== A && (i = s = A, n.forEach((I) => I(w, A)));
    };
    let i = s;
    const o = (w = Wi[0]) => (i !== w && (i = w, c.forEach(([A]) => {
      const I = A[1](w);
      I > s && (s = I);
    })), s), a = (w) => (A, I) => {
      const v = [
        ...A
      ];
      v[1] = [
        w,
        ...v[1]
      ], r(v, I);
    }, c = /* @__PURE__ */ new Map(), l = (w, A) => {
      const I = !li.has(A) && fn.get(A);
      if (I) {
        if ((Qi ? "production" : void 0) !== "production" && c.has(w)) throw new Error("prop listener already exists");
        if (n.size) {
          const v = I[2](a(w));
          c.set(w, [
            I,
            v
          ]);
        } else c.set(w, [
          I
        ]);
      }
    }, d = (w) => {
      var A;
      const I = c.get(w);
      I && (c.delete(w), (A = I[1]) == null || A.call(I));
    }, u = (w) => (n.add(w), n.size === 1 && c.forEach(([I, v], b) => {
      if ((Qi ? "production" : void 0) !== "production" && v) throw new Error("remove already exists");
      const T = I[2](a(b));
      c.set(b, [
        I,
        T
      ]);
    }), () => {
      n.delete(w), n.size === 0 && c.forEach(([I, v], b) => {
        v && (v(), c.set(b, [
          I
        ]));
      });
    });
    let h = true;
    const f = _g(() => h, l, d, r), g = Ig(t, f);
    Zr.set(t, g);
    const p = [
      t,
      o,
      u
    ];
    return fn.set(g, p), Reflect.ownKeys(t).forEach((w) => {
      const A = Object.getOwnPropertyDescriptor(t, w);
      "value" in A && A.writable && (g[w] = t[w]);
    }), h = false, g;
  };
  et = function(t, e, s) {
    const n = fn.get(t);
    (Qi ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
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
  function Xr(t) {
    const e = fn.get(t);
    (Qi ? "production" : void 0) !== "production" && !e && console.warn("Please use proxy object");
    const [s, n] = e;
    return Sg(s, n());
  }
  function Qr(t) {
    return li.add(t), t;
  }
  function Tg() {
    return {
      proxyStateMap: fn,
      refSet: li,
      snapCache: ka,
      versionHolder: Wi,
      proxyCache: Zr
    };
  }
  tt = function(t, e, s, n) {
    let r = t[e];
    return et(t, () => {
      const i = t[e];
      Object.is(r, i) || s(r = i);
    });
  };
  const { proxyStateMap: Og, snapCache: kg } = Tg(), Ai = (t) => Og.has(t);
  function xg(t) {
    const e = [];
    let s = 0;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = () => {
      const l = kg.get(a), d = l == null ? void 0 : l[1];
      if (d && !r.has(d)) {
        const u = new Map(n);
        r.set(d, u);
      }
    }, o = (l) => r.get(l) || n, a = {
      data: e,
      index: s,
      epoch: 0,
      get size() {
        return Ai(this) || i(), o(this).size;
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
        if (!Ai(this)) throw new Error("Cannot perform mutations on a snapshot");
        const u = n.get(l);
        return u === void 0 ? (n.set(l, this.index), this.data[this.index++] = d) : this.data[u] = d, this.epoch++, this;
      },
      delete(l) {
        if (!Ai(this)) throw new Error("Cannot perform mutations on a snapshot");
        const d = n.get(l);
        return d === void 0 ? false : (delete this.data[d], n.delete(l), this.epoch++, true);
      },
      clear() {
        if (!Ai(this)) throw new Error("Cannot perform mutations on a snapshot");
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
    }, c = Re(a);
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
  var bl = {};
  let Lo, rh, Pg, ji, Rg, Mo;
  Lo = (typeof un < "u" && typeof bl < "u" ? bl.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
  rh = [
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
  Pg = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
  he = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: Lo,
    SECURE_SITE_DASHBOARD: `${Lo}/dashboard`,
    SECURE_SITE_FAVICON: `${Lo}/images/favicon.png`,
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
      P.CHAIN.EVM,
      P.CHAIN.SOLANA
    ],
    SEND_PARAMS_SUPPORTED_CHAINS: [
      P.CHAIN.EVM
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
      P.CHAIN.EVM
    ],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
      P.CHAIN.EVM,
      P.CHAIN.SOLANA
    ],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
      P.CHAIN.EVM,
      P.CHAIN.SOLANA
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
      P.CHAIN.EVM,
      P.CHAIN.TON
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
      P.CHAIN.EVM,
      P.CHAIN.SOLANA
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
      Jn.ConnectorExplorerIds[P.CONNECTOR_ID.COINBASE],
      Jn.ConnectorExplorerIds[P.CONNECTOR_ID.COINBASE_SDK],
      Jn.ConnectorExplorerIds[P.CONNECTOR_ID.BASE_ACCOUNT],
      Jn.ConnectorExplorerIds[P.SOLFLARE_CONNECTOR_NAME],
      Jn.ConnectorExplorerIds[P.PHANTOM_CONNECTOR_NAME],
      Jn.ConnectorExplorerIds[P.BINANCE_CONNECTOR_NAME]
    ],
    DEFAULT_CONNECT_METHOD_ORDER: [
      "email",
      "social",
      "wallet"
    ]
  };
  L = {
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
      const t = L.getActiveNamespace(), e = L.getActiveCaipNetworkId(), s = e ? e.split(":")[1] : void 0, n = s ? isNaN(Number(s)) ? s : Number(s) : void 0;
      return {
        namespace: t,
        caipNetworkId: e,
        chainId: n
      };
    },
    setWalletConnectDeepLink({ name: t, href: e }) {
      try {
        X.setItem(ee.DEEPLINK_CHOICE, JSON.stringify({
          href: e,
          name: t
        }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    getWalletConnectDeepLink() {
      try {
        const t = X.getItem(ee.DEEPLINK_CHOICE);
        if (t) return JSON.parse(t);
      } catch {
        console.info("Unable to get WalletConnect deep link");
      }
    },
    deleteWalletConnectDeepLink() {
      try {
        X.removeItem(ee.DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to delete WalletConnect deep link");
      }
    },
    setActiveNamespace(t) {
      try {
        X.setItem(ee.ACTIVE_NAMESPACE, t);
      } catch {
        console.info("Unable to set active namespace");
      }
    },
    setActiveCaipNetworkId(t) {
      try {
        X.setItem(ee.ACTIVE_CAIP_NETWORK_ID, t), L.setActiveNamespace(t.split(":")[0]);
      } catch {
        console.info("Unable to set active caip network id");
      }
    },
    getActiveCaipNetworkId() {
      try {
        return X.getItem(ee.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to get active caip network id");
        return;
      }
    },
    deleteActiveCaipNetworkId() {
      try {
        X.removeItem(ee.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to delete active caip network id");
      }
    },
    deleteConnectedConnectorId(t) {
      try {
        const e = Bo(t);
        X.removeItem(e);
      } catch {
        console.info("Unable to delete connected connector id");
      }
    },
    setAppKitRecent(t) {
      try {
        const e = L.getRecentWallets();
        e.find((n) => n.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), X.setItem(ee.RECENT_WALLETS, JSON.stringify(e)), X.setItem(ee.RECENT_WALLET, JSON.stringify(t)));
      } catch {
        console.info("Unable to set AppKit recent");
      }
    },
    getRecentWallets() {
      try {
        const t = X.getItem(ee.RECENT_WALLETS);
        return t ? JSON.parse(t) : [];
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return [];
    },
    getRecentWallet() {
      try {
        const t = X.getItem(ee.RECENT_WALLET);
        return t ? JSON.parse(t) : null;
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return null;
    },
    deleteRecentWallet() {
      try {
        X.removeItem(ee.RECENT_WALLET);
      } catch {
        console.info("Unable to delete AppKit recent");
      }
    },
    setConnectedConnectorId(t, e) {
      try {
        const s = Bo(t);
        X.setItem(s, e);
      } catch {
        console.info("Unable to set Connected Connector Id");
      }
    },
    getActiveNamespace() {
      try {
        return X.getItem(ee.ACTIVE_NAMESPACE);
      } catch {
        console.info("Unable to get active namespace");
      }
    },
    getConnectedConnectorId(t) {
      if (t) try {
        const e = Bo(t);
        return X.getItem(e);
      } catch {
        console.info("Unable to get connected connector id in namespace", t);
      }
    },
    setConnectedSocialProvider(t) {
      try {
        X.setItem(ee.CONNECTED_SOCIAL, t);
      } catch {
        console.info("Unable to set connected social provider");
      }
    },
    getConnectedSocialProvider() {
      try {
        return X.getItem(ee.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to get connected social provider");
      }
    },
    deleteConnectedSocialProvider() {
      try {
        X.removeItem(ee.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to delete connected social provider");
      }
    },
    getConnectedSocialUsername() {
      try {
        return X.getItem(ee.CONNECTED_SOCIAL_USERNAME);
      } catch {
        console.info("Unable to get connected social username");
      }
    },
    getStoredActiveCaipNetworkId() {
      var _a2, _b2;
      return (_b2 = (_a2 = X.getItem(ee.ACTIVE_CAIP_NETWORK_ID)) == null ? void 0 : _a2.split(":")) == null ? void 0 : _b2[1];
    },
    setConnectionStatus(t) {
      try {
        X.setItem(ee.CONNECTION_STATUS, t);
      } catch {
        console.info("Unable to set connection status");
      }
    },
    getConnectionStatus() {
      try {
        return X.getItem(ee.CONNECTION_STATUS);
      } catch {
        return;
      }
    },
    getConnectedNamespaces() {
      try {
        const t = X.getItem(ee.CONNECTED_NAMESPACES);
        return (t == null ? void 0 : t.length) ? t.split(",") : [];
      } catch {
        return [];
      }
    },
    setConnectedNamespaces(t) {
      try {
        const e = Array.from(new Set(t));
        X.setItem(ee.CONNECTED_NAMESPACES, e.join(","));
      } catch {
        console.info("Unable to set namespaces in storage");
      }
    },
    addConnectedNamespace(t) {
      try {
        const e = L.getConnectedNamespaces();
        e.includes(t) || (e.push(t), L.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to add connected namespace");
      }
    },
    removeConnectedNamespace(t) {
      try {
        const e = L.getConnectedNamespaces(), s = e.indexOf(t);
        s > -1 && (e.splice(s, 1), L.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to remove connected namespace");
      }
    },
    getTelegramSocialProvider() {
      try {
        return X.getItem(ee.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        return console.info("Unable to get telegram social provider"), null;
      }
    },
    setTelegramSocialProvider(t) {
      try {
        X.setItem(ee.TELEGRAM_SOCIAL_PROVIDER, t);
      } catch {
        console.info("Unable to set telegram social provider");
      }
    },
    removeTelegramSocialProvider() {
      try {
        X.removeItem(ee.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        console.info("Unable to remove telegram social provider");
      }
    },
    getBalanceCache() {
      let t = {};
      try {
        const e = X.getItem(ee.PORTFOLIO_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromBalanceCache(t) {
      try {
        const e = L.getBalanceCache();
        X.setItem(ee.PORTFOLIO_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getBalanceCacheForCaipAddress(t) {
      try {
        const s = L.getBalanceCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.portfolio)) return s.balance;
        L.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateBalanceCache(t) {
      try {
        const e = L.getBalanceCache();
        e[t.caipAddress] = t, X.setItem(ee.PORTFOLIO_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getNativeBalanceCache() {
      let t = {};
      try {
        const e = X.getItem(ee.NATIVE_BALANCE_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromNativeBalanceCache(t) {
      try {
        const e = L.getBalanceCache();
        X.setItem(ee.NATIVE_BALANCE_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getNativeBalanceCacheForCaipAddress(t) {
      try {
        const s = L.getNativeBalanceCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.nativeBalance)) return s;
        console.info("Discarding cache for address", t), L.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateNativeBalanceCache(t) {
      try {
        const e = L.getNativeBalanceCache();
        e[t.caipAddress] = t, X.setItem(ee.NATIVE_BALANCE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getEnsCache() {
      let t = {};
      try {
        const e = X.getItem(ee.ENS_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get ens name cache");
      }
      return t;
    },
    getEnsFromCacheForAddress(t) {
      try {
        const s = L.getEnsCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.ens)) return s.ens;
        L.removeEnsFromCache(t);
      } catch {
        console.info("Unable to get ens name from cache", t);
      }
    },
    updateEnsCache(t) {
      try {
        const e = L.getEnsCache();
        e[t.address] = t, X.setItem(ee.ENS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ens name cache", t);
      }
    },
    removeEnsFromCache(t) {
      try {
        const e = L.getEnsCache();
        X.setItem(ee.ENS_CACHE, JSON.stringify({
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
        const e = X.getItem(ee.IDENTITY_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get identity cache");
      }
      return t;
    },
    getIdentityFromCacheForAddress(t) {
      try {
        const s = L.getIdentityCache()[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.identity)) return s.identity;
        L.removeIdentityFromCache(t);
      } catch {
        console.info("Unable to get identity from cache", t);
      }
    },
    updateIdentityCache(t) {
      try {
        const e = L.getIdentityCache();
        e[t.address] = {
          identity: t.identity,
          timestamp: t.timestamp
        }, X.setItem(ee.IDENTITY_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update identity cache", t);
      }
    },
    removeIdentityFromCache(t) {
      try {
        const e = L.getIdentityCache();
        X.setItem(ee.IDENTITY_CACHE, JSON.stringify({
          ...e,
          [t]: void 0
        }));
      } catch {
        console.info("Unable to remove identity from cache", t);
      }
    },
    getTonWalletsCache() {
      try {
        const t = X.getItem(ee.TON_WALLETS_CACHE), e = t ? JSON.parse(t) : void 0;
        if (e && !this.isCacheExpired(e.timestamp, this.cacheExpiry.tonWallets)) return e;
        L.removeTonWalletsCache();
      } catch {
        console.info("Unable to get ton wallets cache");
      }
    },
    updateTonWalletsCache(t) {
      try {
        const e = L.getTonWalletsCache() || {
          timestamp: 0,
          wallets: []
        };
        e.timestamp = (/* @__PURE__ */ new Date()).getTime(), e.wallets = t, X.setItem(ee.TON_WALLETS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ton wallets cache", t);
      }
    },
    removeTonWalletsCache() {
      try {
        X.removeItem(ee.TON_WALLETS_CACHE);
      } catch {
        console.info("Unable to remove ton wallets cache");
      }
    },
    clearAddressCache() {
      try {
        X.removeItem(ee.PORTFOLIO_CACHE), X.removeItem(ee.NATIVE_BALANCE_CACHE), X.removeItem(ee.ENS_CACHE), X.removeItem(ee.IDENTITY_CACHE), X.removeItem(ee.HISTORY_TRANSACTIONS_CACHE);
      } catch {
        console.info("Unable to clear address cache");
      }
    },
    setPreferredAccountTypes(t) {
      try {
        X.setItem(ee.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
      } catch {
        console.info("Unable to set preferred account types", t);
      }
    },
    getPreferredAccountTypes() {
      try {
        const t = X.getItem(ee.PREFERRED_ACCOUNT_TYPES);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get preferred account types");
      }
      return {};
    },
    setConnections(t, e) {
      try {
        const s = L.getConnections(), n = s[e] ?? [], r = /* @__PURE__ */ new Map();
        for (const o of n) r.set(o.connectorId, {
          ...o
        });
        for (const o of t) {
          const a = r.get(o.connectorId), c = o.connectorId === P.CONNECTOR_ID.AUTH;
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
        X.setItem(ee.CONNECTIONS, JSON.stringify(i));
      } catch (s) {
        console.error("Unable to sync connections to storage", s);
      }
    },
    getConnections() {
      try {
        const t = X.getItem(ee.CONNECTIONS);
        return t ? JSON.parse(t) : {};
      } catch (t) {
        return console.error("Unable to get connections from storage", t), {};
      }
    },
    deleteAddressFromConnection({ connectorId: t, address: e, namespace: s }) {
      try {
        const n = L.getConnections(), r = n[s] ?? [], i = new Map(r.map((a) => [
          a.connectorId,
          a
        ])), o = i.get(t);
        o && (o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase()).length === 0 ? i.delete(t) : i.set(t, {
          ...o,
          accounts: o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase())
        })), X.setItem(ee.CONNECTIONS, JSON.stringify({
          ...n,
          [s]: Array.from(i.values())
        }));
      } catch {
        console.error(`Unable to remove address "${e}" from connector "${t}" in namespace "${s}"`);
      }
    },
    getDisconnectedConnectorIds() {
      try {
        const t = X.getItem(ee.DISCONNECTED_CONNECTOR_IDS);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get disconnected connector ids");
      }
      return {};
    },
    addDisconnectedConnectorId(t, e) {
      try {
        const s = L.getDisconnectedConnectorIds(), n = s[e] ?? [];
        n.push(t), X.setItem(ee.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...s,
          [e]: Array.from(new Set(n))
        }));
      } catch {
        console.error(`Unable to set disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    removeDisconnectedConnectorId(t, e) {
      try {
        const s = L.getDisconnectedConnectorIds();
        let n = s[e] ?? [];
        n = n.filter((r) => r.toLowerCase() !== t.toLowerCase()), X.setItem(ee.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...s,
          [e]: Array.from(new Set(n))
        }));
      } catch {
        console.error(`Unable to remove disconnected connector id "${t}" for namespace "${e}"`);
      }
    },
    isConnectorDisconnected(t, e) {
      try {
        return (L.getDisconnectedConnectorIds()[e] ?? []).some((r) => r.toLowerCase() === t.toLowerCase());
      } catch {
        console.info(`Unable to get disconnected connector id "${t}" for namespace "${e}"`);
      }
      return false;
    },
    getTransactionsCache() {
      try {
        const t = X.getItem(ee.HISTORY_TRANSACTIONS_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get transactions cache");
      }
      return {};
    },
    getTransactionsCacheForAddress({ address: t, chainId: e = "" }) {
      var _a2;
      try {
        const n = (_a2 = L.getTransactionsCache()[t]) == null ? void 0 : _a2[e];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.transactionsHistory)) return n.transactions;
        L.removeTransactionsCache({
          address: t,
          chainId: e
        });
      } catch {
        console.info("Unable to get transactions cache");
      }
    },
    updateTransactionsCache({ address: t, chainId: e = "", timestamp: s, transactions: n }) {
      try {
        const r = L.getTransactionsCache();
        r[t] = {
          ...r[t],
          [e]: {
            timestamp: s,
            transactions: n
          }
        }, X.setItem(ee.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(r));
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
        const s = L.getTransactionsCache(), n = (s == null ? void 0 : s[t]) || {}, { [e]: r, ...i } = n;
        X.setItem(ee.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
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
        const t = X.getItem(ee.TOKEN_PRICE_CACHE);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get token price cache");
      }
      return {};
    },
    getTokenPriceCacheForAddresses(t) {
      try {
        const s = L.getTokenPriceCache()[t.join(",")];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.tokenPrice)) return s.tokenPrice;
        L.removeTokenPriceCache(t);
      } catch {
        console.info("Unable to get token price cache for addresses", t);
      }
    },
    updateTokenPriceCache(t) {
      try {
        const e = L.getTokenPriceCache();
        e[t.addresses.join(",")] = {
          timestamp: t.timestamp,
          tokenPrice: t.tokenPrice
        }, X.setItem(ee.TOKEN_PRICE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update token price cache", t);
      }
    },
    removeTokenPriceCache(t) {
      try {
        const e = L.getTokenPriceCache();
        X.setItem(ee.TOKEN_PRICE_CACHE, JSON.stringify({
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
        const t = X.getItem(ee.LATEST_APPKIT_VERSION);
        return t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get latest AppKit version cache");
      }
      return {};
    },
    updateLatestAppKitVersion(t) {
      try {
        const e = L.getLatestAppKitVersionCache();
        e.timestamp = t.timestamp, e.version = t.version, X.setItem(ee.LATEST_APPKIT_VERSION, JSON.stringify(e));
      } catch {
        console.info("Unable to update latest AppKit version on local storage", t);
      }
    }
  };
  Y = {
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
      return Y.isMobile() && t.includes("android");
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
      return t ? t - Date.now() <= he.TEN_SEC_MS : true;
    },
    isAllowedRetry(t, e = he.ONE_SEC_MS) {
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
      if (Y.isClient() && window.self !== window.top) try {
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
      return Date.now() + he.FOUR_MINUTES_MS;
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
      if (Y.isHttpUrl(t)) return this.formatUniversalUrl(t, e);
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
      if (!Y.isHttpUrl(t)) return this.formatNativeUrl(t, e);
      let s = t;
      s.endsWith("/") || (s = `${s}/`);
      const n = encodeURIComponent(e);
      return {
        redirect: `${s}wc?uri=${n}`,
        href: s
      };
    },
    getOpenTargetForPlatform(t) {
      return t === "popupWindow" ? t : this.isTelegram() ? L.getTelegramSocialProvider() ? "_top" : "_blank" : t;
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
        Y.wait(2e3)
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
      return P.W3M_API_URL;
    },
    getBlockchainApiUrl() {
      return P.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
      return P.PULSE_API_URL;
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
      const r = t.length === 0 ? he.ADAPTER_TYPES.UNIVERSAL : t.map((i) => i.adapterType).join(",");
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
      return e.filter(Boolean).length === 3 && s in P.CHAIN_NAME_MAP;
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
  ji = {
    STORAGE_KEY: "@appkit-wallet/",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
  };
  Ms = {
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
  Rg = {
    set(t, e) {
      Mo.isClient && localStorage.setItem(`${ji.STORAGE_KEY}${t}`, e);
    },
    get(t) {
      return Mo.isClient ? localStorage.getItem(`${ji.STORAGE_KEY}${t}`) : null;
    },
    delete(t, e) {
      Mo.isClient && (e ? localStorage.removeItem(t) : localStorage.removeItem(`${ji.STORAGE_KEY}${t}`));
    }
  };
  Mo = {
    isClient: typeof window < "u"
  };
  async function Nr(...t) {
    const e = await fetch(...t);
    if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, {
      cause: e
    });
    return e;
  }
  di = class {
    constructor({ baseUrl: e, clientId: s }) {
      this.baseUrl = e, this.clientId = s;
    }
    async get({ headers: e, signal: s, cache: n, ...r }) {
      const i = this.createUrl(r);
      return (await Nr(i, {
        method: "GET",
        headers: e,
        signal: s,
        cache: n
      })).json();
    }
    async getBlob({ headers: e, signal: s, ...n }) {
      const r = this.createUrl(n);
      return (await Nr(r, {
        method: "GET",
        headers: e,
        signal: s
      })).blob();
    }
    async post({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await Nr(i, {
        method: "POST",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async put({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await Nr(i, {
        method: "PUT",
        headers: s,
        body: e ? JSON.stringify(e) : void 0,
        signal: n
      })).json();
    }
    async delete({ body: e, headers: s, signal: n, ...r }) {
      const i = this.createUrl(r);
      return (await Nr(i, {
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
  let xa, te, Nn, We, Ug, $g, ih, dt, Dg, Bg, Lg, Mg, Ys, Fg;
  xa = {
    getFeatureValue(t, e) {
      const s = e == null ? void 0 : e[t];
      return s === void 0 ? he.DEFAULT_FEATURES[t] : s;
    },
    filterSocialsByPlatform(t) {
      if (!t || !t.length) return t;
      let e = t;
      return Y.isTelegram() && (Y.isIos() && (e = e.filter((s) => s !== "google")), Y.isMac() && (e = e.filter((s) => s !== "x")), Y.isAndroid() && (e = e.filter((s) => ![
        "facebook",
        "x"
      ].includes(s)))), Y.isMobile() && (e = e.filter((s) => s !== "facebook")), e;
    },
    isSocialsEnabled() {
      var _a2, _b2, _c2, _d3;
      return Array.isArray((_a2 = U.state.features) == null ? void 0 : _a2.socials) && ((_b2 = U.state.features) == null ? void 0 : _b2.socials.length) > 0 || Array.isArray((_c2 = U.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d3 = U.state.remoteFeatures) == null ? void 0 : _d3.socials.length) > 0;
    },
    isEmailEnabled() {
      var _a2, _b2;
      return !!(((_a2 = U.state.features) == null ? void 0 : _a2.email) || ((_b2 = U.state.remoteFeatures) == null ? void 0 : _b2.email));
    }
  };
  te = Re({
    features: he.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: he.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: "all"
  });
  U = {
    state: te,
    subscribeKey(t, e) {
      return tt(te, t, e);
    },
    setOptions(t) {
      Object.assign(te, t);
    },
    setRemoteFeatures(t) {
      var _a2, _b2;
      if (!t) return;
      const e = {
        ...te.remoteFeatures,
        ...t
      };
      te.remoteFeatures = e, ((_a2 = te.remoteFeatures) == null ? void 0 : _a2.socials) && (te.remoteFeatures.socials = xa.filterSocialsByPlatform(te.remoteFeatures.socials)), ((_b2 = te.features) == null ? void 0 : _b2.pay) && (te.remoteFeatures.email = false, te.remoteFeatures.socials = false);
    },
    setFeatures(t) {
      var _a2;
      if (!t) return;
      te.features || (te.features = he.DEFAULT_FEATURES);
      const e = {
        ...te.features,
        ...t
      };
      te.features = e, ((_a2 = te.features) == null ? void 0 : _a2.pay) && te.remoteFeatures && (te.remoteFeatures.email = false, te.remoteFeatures.socials = false);
    },
    setProjectId(t) {
      te.projectId = t;
    },
    setCustomRpcUrls(t) {
      te.customRpcUrls = t;
    },
    setAllWallets(t) {
      te.allWallets = t;
    },
    setIncludeWalletIds(t) {
      te.includeWalletIds = t;
    },
    setExcludeWalletIds(t) {
      te.excludeWalletIds = t;
    },
    setFeaturedWalletIds(t) {
      te.featuredWalletIds = t;
    },
    setTokens(t) {
      te.tokens = t;
    },
    setTermsConditionsUrl(t) {
      te.termsConditionsUrl = t;
    },
    setPrivacyPolicyUrl(t) {
      te.privacyPolicyUrl = t;
    },
    setCustomWallets(t) {
      te.customWallets = t;
    },
    setIsSiweEnabled(t) {
      te.isSiweEnabled = t;
    },
    setIsUniversalProvider(t) {
      te.isUniversalProvider = t;
    },
    setSdkVersion(t) {
      te.sdkVersion = t;
    },
    setMetadata(t) {
      te.metadata = t;
    },
    setDisableAppend(t) {
      te.disableAppend = t;
    },
    setEIP6963Enabled(t) {
      te.enableEIP6963 = t;
    },
    setDebug(t) {
      te.debug = t;
    },
    setEnableWalletGuide(t) {
      te.enableWalletGuide = t;
    },
    setEnableAuthLogger(t) {
      te.enableAuthLogger = t;
    },
    setEnableWallets(t) {
      te.enableWallets = t;
    },
    setPreferUniversalLinks(t) {
      te.experimental_preferUniversalLinks = t;
    },
    setSIWX(t) {
      if (t) for (const [e, s] of Object.entries(he.SIWX_DEFAULTS)) t[e] ?? (t[e] = s);
      te.siwx = t;
    },
    setConnectMethodsOrder(t) {
      te.features = {
        ...te.features,
        connectMethodsOrder: t
      };
    },
    setWalletFeaturesOrder(t) {
      te.features = {
        ...te.features,
        walletFeaturesOrder: t
      };
    },
    setSocialsOrder(t) {
      te.remoteFeatures = {
        ...te.remoteFeatures,
        socials: t
      };
    },
    setCollapseWallets(t) {
      te.features = {
        ...te.features,
        collapseWallets: t
      };
    },
    setEnableEmbedded(t) {
      te.enableEmbedded = t;
    },
    setAllowUnsupportedChain(t) {
      te.allowUnsupportedChain = t;
    },
    setManualWCControl(t) {
      te.manualWCControl = t;
    },
    setEnableNetworkSwitch(t) {
      te.enableNetworkSwitch = t;
    },
    setEnableMobileFullScreen(t) {
      te.enableMobileFullScreen = Y.isMobile() && t;
    },
    setEnableReconnect(t) {
      te.enableReconnect = t;
    },
    setCoinbasePreference(t) {
      te.coinbasePreference = t;
    },
    setDefaultAccountTypes(t = {}) {
      Object.entries(t).forEach(([e, s]) => {
        s && (te.defaultAccountTypes[e] = s);
      });
    },
    setUniversalProviderConfigOverride(t) {
      te.universalProviderConfigOverride = t;
    },
    getUniversalProviderConfigOverride() {
      return te.universalProviderConfigOverride;
    },
    getSnapshot() {
      return Xr(te);
    }
  };
  Nn = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: false,
    autoClose: true
  });
  We = Re({
    ...Nn
  });
  Ug = {
    state: We,
    subscribeKey(t, e) {
      return tt(We, t, e);
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
      const e = Y.parseError(t);
      this._showMessage({
        message: e,
        variant: "error"
      });
    },
    hide() {
      We.message = Nn.message, We.variant = Nn.variant, We.svg = Nn.svg, We.open = Nn.open, We.autoClose = Nn.autoClose;
    },
    _showMessage({ message: t, svg: e, variant: s = "success", autoClose: n = Nn.autoClose }) {
      We.open ? (We.open = false, setTimeout(() => {
        We.message = t, We.variant = s, We.svg = e, We.open = true, We.autoClose = n;
      }, 150)) : (We.message = t, We.variant = s, We.svg = e, We.open = true, We.autoClose = n);
    }
  };
  ys = Ug;
  $g = {
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
  ih = Y.getBlockchainApiUrl();
  dt = Re({
    clientId: null,
    api: new di({
      baseUrl: ih,
      clientId: null
    }),
    supportedChains: {
      http: [],
      ws: []
    }
  });
  re = {
    state: dt,
    async get(t) {
      const { st: e, sv: s } = re.getSdkProperties(), n = U.state.projectId, r = {
        ...t.params || {},
        st: e,
        sv: s,
        projectId: n
      };
      return dt.api.get({
        ...t,
        params: r
      });
    },
    getSdkProperties() {
      const { sdkType: t, sdkVersion: e } = U.state;
      return {
        st: t || "unknown",
        sv: e || "unknown"
      };
    },
    async isNetworkSupported(t) {
      if (!t) return false;
      try {
        dt.supportedChains.http.length || await re.getSupportedNetworks();
      } catch {
        return false;
      }
      return dt.supportedChains.http.includes(t);
    },
    async getSupportedNetworks() {
      try {
        const t = await re.get({
          path: "v1/supported-chains"
        });
        return dt.supportedChains = t, t;
      } catch {
        return dt.supportedChains;
      }
    },
    async fetchIdentity({ address: t }) {
      const e = L.getIdentityFromCacheForAddress(t);
      if (e) return e;
      const s = await re.get({
        path: `/v1/identity/${t}`,
        params: {
          sender: m.state.activeCaipAddress ? Y.getPlainAddress(m.state.activeCaipAddress) : void 0
        }
      });
      return L.updateIdentityCache({
        address: t,
        identity: s,
        timestamp: Date.now()
      }), s;
    },
    async fetchTransactions({ account: t, cursor: e, signal: s, cache: n, chainId: r }) {
      var _a2;
      if (!await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        data: [],
        next: void 0
      };
      const o = L.getTransactionsCacheForAddress({
        address: t,
        chainId: r
      });
      if (o) return o;
      const a = await re.get({
        path: `/v1/account/${t}/history`,
        params: {
          cursor: e,
          chainId: r
        },
        signal: s,
        cache: n
      });
      return L.updateTransactionsCache({
        address: t,
        chainId: r,
        timestamp: Date.now(),
        transactions: a
      }), a;
    },
    async fetchSwapQuote({ amount: t, userAddress: e, from: s, to: n, gasPrice: r }) {
      var _a2;
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? re.get({
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
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? re.get({
        path: "/v1/convert/tokens",
        params: {
          chainId: t
        }
      }) : {
        tokens: []
      };
    },
    async getAddressBalance({ caipNetworkId: t, address: e }) {
      return dt.api.post({
        path: `/v1?chainId=${t}&projectId=${U.state.projectId}`,
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
    async fetchTokenPrice({ addresses: t, caipNetworkId: e = ((_a2) => (_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)() }) {
      if (!await re.isNetworkSupported(e)) return {
        fungibles: []
      };
      const n = L.getTokenPriceCacheForAddresses(t);
      if (n) return n;
      const r = await dt.api.post({
        path: "/v1/fungible/price",
        body: {
          currency: "usd",
          addresses: t,
          projectId: U.state.projectId
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      return L.updateTokenPriceCache({
        addresses: t,
        timestamp: Date.now(),
        tokenPrice: r
      }), r;
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
      var _a2;
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? re.get({
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
      const { st: e, sv: s } = re.getSdkProperties();
      if (!await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Gas Price");
      return re.get({
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
      if (!await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return dt.api.post({
        path: "/v1/convert/build-transaction",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          amount: t,
          eip155: {
            slippage: he.CONVERT_SLIPPAGE_TOLERANCE
          },
          projectId: U.state.projectId,
          from: e,
          to: s,
          userAddress: n,
          disableEstimate: r
        }
      });
    },
    async generateApproveCalldata({ from: t, to: e, userAddress: s }) {
      var _a2;
      const { st: n, sv: r } = re.getSdkProperties();
      if (!await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return re.get({
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
      const { st: n, sv: r } = re.getSdkProperties();
      if (!await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return ys.showError("Token Balance Unavailable"), {
        balances: []
      };
      const o = `${e}:${t}`, a = L.getBalanceCacheForCaipAddress(o);
      if (a) return a;
      const c = await re.get({
        path: `/v1/account/${t}/balance`,
        params: {
          currency: "usd",
          chainId: e,
          forceUpdate: s,
          st: n,
          sv: r
        }
      });
      return L.updateBalanceCache({
        caipAddress: o,
        balance: c,
        timestamp: Date.now()
      }), c;
    },
    async lookupEnsName(t) {
      var _a2;
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? re.get({
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
      if (!await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return [];
      const s = (_b2 = m.getAccountData()) == null ? void 0 : _b2.address;
      return re.get({
        path: `/v1/profile/reverse/${t}`,
        params: {
          sender: s,
          apiVersion: "2"
        }
      });
    },
    async getEnsNameSuggestions(t) {
      var _a2;
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? re.get({
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
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? dt.api.post({
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
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? (await dt.api.post({
        path: "/v1/generators/onrampurl",
        params: {
          projectId: U.state.projectId
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
      if (!await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        paymentCurrencies: [],
        purchaseCurrencies: []
      };
      try {
        return await re.get({
          path: "/v1/onramp/options"
        });
      } catch {
        return $g;
      }
    },
    async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: s, network: n }) {
      var _a2;
      try {
        return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? await dt.api.post({
          path: "/v1/onramp/quote",
          params: {
            projectId: U.state.projectId
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
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? re.get({
        path: `/v1/sessions/${t}`
      }) : [];
    },
    async revokeSmartSession(t, e, s) {
      var _a2;
      return await re.isNetworkSupported((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? dt.api.post({
        path: `/v1/sessions/${t}/revoke`,
        params: {
          projectId: U.state.projectId
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
      dt.clientId = t, dt.api = new di({
        baseUrl: ih,
        clientId: t
      });
    }
  };
  Dg = Object.freeze({
    enabled: true,
    events: []
  });
  Bg = new di({
    baseUrl: Y.getAnalyticsUrl(),
    clientId: null
  });
  Lg = 5;
  Mg = 60 * 1e3;
  Ys = Re({
    ...Dg
  });
  Fg = {
    state: Ys,
    subscribeKey(t, e) {
      return tt(Ys, t, e);
    },
    async sendError(t, e) {
      if (!Ys.enabled) return;
      const s = Date.now();
      if (Ys.events.filter((i) => {
        const o = new Date(i.properties.timestamp || "").getTime();
        return s - o < Mg;
      }).length >= Lg) return;
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
      Ys.events.push(r);
      try {
        if (typeof window > "u") return;
        const { projectId: i, sdkType: o, sdkVersion: a } = U.state;
        await Bg.post({
          path: "/e",
          params: {
            projectId: i,
            st: o,
            sv: a || "html-wagmi-4.2.2"
          },
          body: {
            eventId: Y.getUUID(),
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
      Ys.enabled = true;
    },
    disable() {
      Ys.enabled = false;
    },
    clearEvents() {
      Ys.events = [];
    }
  };
  Fn = class extends Error {
    constructor(e, s, n) {
      super(e), this.originalName = "AppKitError", this.name = "AppKitError", this.category = s, this.originalError = n, n && n instanceof Error && (this.originalName = n.name), Object.setPrototypeOf(this, Fn.prototype);
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
      r || (Error.captureStackTrace ? Error.captureStackTrace(this, Fn) : this.stack || (this.stack = `${this.name}: ${this.message}`));
    }
  };
  function El(t, e) {
    let s = "";
    try {
      t instanceof Error ? s = t.message : typeof t == "string" ? s = t : typeof t == "object" && t !== null ? Object.keys(t).length === 0 ? s = "Unknown error" : s = (t == null ? void 0 : t.message) || JSON.stringify(t) : s = String(t);
    } catch (r) {
      s = "Unknown error", console.error("Error parsing error message", r);
    }
    const n = t instanceof Fn ? t : new Fn(s, e, t);
    throw Fg.sendError(n, n.category), n;
  }
  Xt = function(t, e = "INTERNAL_SDK_ERROR") {
    const s = {};
    return Object.keys(t).forEach((n) => {
      const r = t[n];
      if (typeof r == "function") {
        let i = r;
        r.constructor.name === "AsyncFunction" ? i = async (...o) => {
          try {
            return await r(...o);
          } catch (a) {
            return El(a, e);
          }
        } : i = (...o) => {
          try {
            return r(...o);
          } catch (a) {
            return El(a, e);
          }
        }, s[n] = i;
      } else s[n] = r;
    }), s;
  };
  let _t, qg, Cl, Zn, Ht, Wg, jg, Hg, zg, Vg, vl, Be, Kg, ut, Gg, Al, Yg, oe, Jg, Ie, Zg, Ns, Pa, oh, Xg, we, Qg, em, Sr;
  _t = Re({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
  });
  qg = {
    state: _t,
    subscribeNetworkImages(t) {
      return et(_t.networkImages, () => t(_t.networkImages));
    },
    subscribeKey(t, e) {
      return tt(_t, t, e);
    },
    subscribe(t) {
      return et(_t, () => t(_t));
    },
    setWalletImage(t, e) {
      _t.walletImages[t] = e;
    },
    setNetworkImage(t, e) {
      _t.networkImages[t] = e;
    },
    setChainImage(t, e) {
      _t.chainImages[t] = e;
    },
    setConnectorImage(t, e) {
      _t.connectorImages = {
        ..._t.connectorImages,
        [t]: e
      };
    },
    setTokenImage(t, e) {
      _t.tokenImages[t] = e;
    },
    setCurrencyImage(t, e) {
      _t.currencyImages[t] = e;
    }
  };
  Gt = Xt(qg);
  Cl = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: "",
    sui: "",
    stacks: "",
    ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
  };
  Zn = Re({
    networkImagePromises: {},
    tokenImagePromises: {}
  });
  eo = {
    async fetchWalletImage(t) {
      if (t) return await Z._fetchWalletImage(t), this.getWalletImageById(t);
    },
    async fetchNetworkImage(t) {
      if (!t) return;
      const e = this.getNetworkImageById(t);
      return e || (Zn.networkImagePromises[t] || (Zn.networkImagePromises[t] = Z._fetchNetworkImage(t)), await Zn.networkImagePromises[t], this.getNetworkImageById(t));
    },
    async fetchTokenImage(t) {
      if (t) return Zn.tokenImagePromises[t] || (Zn.tokenImagePromises[t] = Z._fetchTokenImage(t)), await Zn.tokenImagePromises[t], this.getTokenImage(t);
    },
    getWalletImageById(t) {
      if (t) return Gt.state.walletImages[t];
    },
    getWalletImage(t) {
      if (t == null ? void 0 : t.image_url) return t == null ? void 0 : t.image_url;
      if (t == null ? void 0 : t.image_id) return Gt.state.walletImages[t.image_id];
    },
    getNetworkImage(t) {
      var _a2, _b2, _c2;
      if ((_a2 = t == null ? void 0 : t.assets) == null ? void 0 : _a2.imageUrl) return (_b2 = t == null ? void 0 : t.assets) == null ? void 0 : _b2.imageUrl;
      if ((_c2 = t == null ? void 0 : t.assets) == null ? void 0 : _c2.imageId) return Gt.state.networkImages[t.assets.imageId];
    },
    getNetworkImageById(t) {
      if (t) return Gt.state.networkImages[t];
    },
    getConnectorImage(t) {
      var _a2;
      if (t == null ? void 0 : t.imageUrl) return t.imageUrl;
      if ((_a2 = t == null ? void 0 : t.info) == null ? void 0 : _a2.icon) return t.info.icon;
      if (t == null ? void 0 : t.imageId) return Gt.state.connectorImages[t.imageId];
    },
    getChainImage(t) {
      return Gt.state.networkImages[Cl[t]];
    },
    getTokenImage(t) {
      if (t) return Gt.state.tokenImages[t];
    },
    getWalletImageUrl(t) {
      if (!t) return "";
      const { projectId: e, sdkType: s, sdkVersion: n } = U.state, r = new URL(`${P.W3M_API_URL}/getWalletImage/${t}`);
      return r.searchParams.set("projectId", e), r.searchParams.set("st", s), r.searchParams.set("sv", n), r.toString();
    },
    getAssetImageUrl(t) {
      if (!t) return "";
      const { projectId: e, sdkType: s, sdkVersion: n } = U.state, r = new URL(`${P.W3M_API_URL}/public/getAssetImage/${t}`);
      return r.searchParams.set("projectId", e), r.searchParams.set("st", s), r.searchParams.set("sv", n), r.toString();
    },
    getChainNamespaceImageUrl(t) {
      return this.getAssetImageUrl(Cl[t]);
    },
    async getImageByToken(t, e) {
      if (t === "native") {
        const n = P.NATIVE_IMAGE_IDS_BY_NAMESPACE[e] ?? null;
        return n ? eo.fetchNetworkImage(n) : void 0;
      }
      const [, s] = Object.entries(P.TOKEN_SYMBOLS_BY_ADDRESS).find(([n]) => n.toLowerCase() === t.toLowerCase()) ?? [];
      if (s) return eo.fetchTokenImage(s);
    }
  };
  Ht = {
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
  Wg = {
    handleMobileDeeplinkRedirect(t, e) {
      const s = window.location.href, n = encodeURIComponent(s);
      if (t === Ht.PHANTOM.id && !("phantom" in window)) {
        const r = s.startsWith("https") ? "https" : "http", i = s.split("/")[2], o = encodeURIComponent(`${r}://${i}`);
        window.location.href = `${Ht.PHANTOM.url}/ul/browse/${n}?ref=${o}`;
      }
      if (t === Ht.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${Ht.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`), e === P.CHAIN.SOLANA && t === Ht.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${Ht.COINBASE.url}/dapp?cb_url=${n}`), e === P.CHAIN.BITCOIN && t === Ht.BINANCE.id && !("binancew3w" in window)) {
        const r = m.state.activeCaipNetwork, i = window.btoa("/pages/browser/index"), o = window.btoa(`url=${n}&defaultChainId=${(r == null ? void 0 : r.id) ?? 1}`), a = new URL(Ht.BINANCE.deeplink);
        a.searchParams.set("appId", Ht.BINANCE.appId), a.searchParams.set("startPagePath", i), a.searchParams.set("startPageQuery", o);
        const c = new URL(Ht.BINANCE.url);
        c.searchParams.set("_dp", window.btoa(a.toString())), window.location.href = c.toString();
      }
    }
  };
  jg = Y.getAnalyticsUrl();
  Hg = new di({
    baseUrl: jg,
    clientId: null
  });
  zg = [
    "MODAL_CREATED"
  ];
  Vg = 45;
  vl = 1e3 * 10;
  Be = Re({
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
  de = {
    state: Be,
    subscribe(t) {
      return et(Be, () => t(Be));
    },
    getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: s } = U.state;
      return {
        projectId: t,
        st: e,
        sv: s || "html-wagmi-4.2.2"
      };
    },
    shouldFlushEvents() {
      const t = JSON.stringify(Be.pendingEvents).length / 1024 > Vg, e = Be.lastFlush + vl < Date.now();
      return t || e;
    },
    _setPendingEvent(t) {
      var _a2, _b2;
      try {
        let e = (_a2 = m.getAccountData()) == null ? void 0 : _a2.address;
        if ("address" in t.data && t.data.address && (e = t.data.address), zg.includes(t.data.event) || typeof window > "u") return;
        const s = (_b2 = m.getActiveCaipNetwork()) == null ? void 0 : _b2.caipNetworkId;
        this.state.pendingEvents.push({
          eventId: Y.getUUID(),
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
        }), Be.reportedErrors.FORBIDDEN = false, de.shouldFlushEvents() && de._submitPendingEvents();
      } catch (e) {
        console.warn("_setPendingEvent", e);
      }
    },
    sendEvent(t) {
      var _a2;
      Be.timestamp = Date.now(), Be.data = t;
      const e = [
        "INITIALIZE",
        "CONNECT_SUCCESS",
        "SOCIAL_LOGIN_SUCCESS"
      ];
      (((_a2 = U.state.features) == null ? void 0 : _a2.analytics) || e.includes(t.event)) && de._setPendingEvent(Be), this.subscribeToFlushTriggers();
    },
    sendWalletImpressionEvent(t) {
      Be.walletImpressions.push(t);
    },
    _transformPendingEventsForBatch(t) {
      try {
        return t.filter((e) => e.props.event !== "WALLET_IMPRESSION_V2");
      } catch {
        return t;
      }
    },
    _submitPendingEvents() {
      if (Be.lastFlush = Date.now(), !(Be.pendingEvents.length === 0 && Be.walletImpressions.length === 0)) try {
        const t = de._transformPendingEventsForBatch(Be.pendingEvents);
        Be.walletImpressions.length && t.push({
          eventId: Y.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [
              ...Be.walletImpressions
            ]
          }
        }), Hg.sendBeacon({
          path: "/batch",
          params: de.getSdkProperties(),
          body: t
        }), Be.reportedErrors.FORBIDDEN = false, Be.pendingEvents = [], Be.walletImpressions = [];
      } catch {
        Be.reportedErrors.FORBIDDEN = true;
      }
    },
    subscribeToFlushTriggers() {
      var _a2, _b2, _c2;
      Be.subscribedToVisibilityChange || typeof document > "u" || (Be.subscribedToVisibilityChange = true, (_a2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a2.call(document, "visibilitychange", () => {
        document.visibilityState === "hidden" && de._submitPendingEvents();
      }), (_b2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b2.call(document, "freeze", () => {
        de._submitPendingEvents();
      }), (_c2 = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c2.call(window, "pagehide", () => {
        de._submitPendingEvents();
      }), setInterval(() => {
        de._submitPendingEvents();
      }, vl));
    }
  };
  Kg = Y.getApiUrl();
  ut = new di({
    baseUrl: Kg,
    clientId: null
  });
  Gg = 40;
  Al = 4;
  Yg = 20;
  oe = Re({
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
  Z = {
    state: oe,
    subscribeKey(t, e) {
      return tt(oe, t, e);
    },
    _getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: s } = U.state;
      return {
        projectId: t,
        st: e || "appkit",
        sv: s || "html-wagmi-4.2.2"
      };
    },
    _filterOutExtensions(t) {
      return U.state.isUniversalProvider ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t;
    },
    async _fetchWalletImage(t) {
      const e = `${ut.baseUrl}/getWalletImage/${t}`, s = await ut.getBlob({
        path: e,
        params: Z._getSdkProperties()
      });
      Gt.setWalletImage(t, URL.createObjectURL(s));
    },
    async _fetchNetworkImage(t) {
      const e = `${ut.baseUrl}/public/getAssetImage/${t}`, s = await ut.getBlob({
        path: e,
        params: Z._getSdkProperties()
      });
      Gt.setNetworkImage(t, URL.createObjectURL(s));
    },
    async _fetchConnectorImage(t) {
      const e = `${ut.baseUrl}/public/getAssetImage/${t}`, s = await ut.getBlob({
        path: e,
        params: Z._getSdkProperties()
      });
      Gt.setConnectorImage(t, URL.createObjectURL(s));
    },
    async _fetchCurrencyImage(t) {
      const e = `${ut.baseUrl}/public/getCurrencyImage/${t}`, s = await ut.getBlob({
        path: e,
        params: Z._getSdkProperties()
      });
      Gt.setCurrencyImage(t, URL.createObjectURL(s));
    },
    async _fetchTokenImage(t) {
      const e = `${ut.baseUrl}/public/getTokenImage/${t}`, s = await ut.getBlob({
        path: e,
        params: Z._getSdkProperties()
      });
      Gt.setTokenImage(t, URL.createObjectURL(s));
    },
    _filterWalletsByPlatform(t) {
      const e = t.length, s = Y.isMobile() ? t == null ? void 0 : t.filter((r) => r.mobile_link || r.webapp_link ? true : Object.values(Ht).map((o) => o.id).includes(r.id)) : t, n = e - s.length;
      return {
        filteredWallets: s,
        mobileFilteredOutWalletsLength: n
      };
    },
    async fetchProjectConfig() {
      return (await ut.get({
        path: "/appkit/v1/config",
        params: Z._getSdkProperties()
      })).features;
    },
    async fetchUsage() {
      try {
        const t = await ut.get({
          path: "/appkit/v1/project-limits",
          params: Z._getSdkProperties()
        }), { tier: e, isAboveMauLimit: s, isAboveRpcLimit: n } = t.planLimits, r = e === "starter", i = s || n;
        Z.state.plan = {
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
        const { allowedOrigins: t } = await ut.get({
          path: "/projects/v1/origins",
          params: Z._getSdkProperties()
        });
        return t;
      } catch (t) {
        if (t instanceof Error && t.cause instanceof Response) {
          const e = t.cause.status;
          if (e === P.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", {
            cause: t
          });
          if (e >= P.HTTP_STATUS_CODES.SERVER_ERROR && e < 600) throw new Error("SERVER_ERROR", {
            cause: t
          });
          return [];
        }
        return [];
      }
    },
    async fetchNetworkImages() {
      var _a2;
      const e = (_a2 = m.getAllRequestedCaipNetworks()) == null ? void 0 : _a2.map(({ assets: s }) => s == null ? void 0 : s.imageId).filter(Boolean).filter((s) => !eo.getNetworkImageById(s));
      e && await Promise.allSettled(e.map((s) => Z._fetchNetworkImage(s)));
    },
    async fetchConnectorImages() {
      const { connectors: t } = q.state, e = t.map(({ imageId: s }) => s).filter(Boolean);
      await Promise.allSettled(e.map((s) => Z._fetchConnectorImage(s)));
    },
    async fetchCurrencyImages(t = []) {
      await Promise.allSettled(t.map((e) => Z._fetchCurrencyImage(e)));
    },
    async fetchTokenImages(t = []) {
      await Promise.allSettled(t.map((e) => Z._fetchTokenImage(e)));
    },
    async fetchWallets(t) {
      var _a2;
      const e = t.exclude ?? [];
      Z._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(Ht).map((o) => o.id));
      const n = await ut.get({
        path: "/getWallets",
        params: {
          ...Z._getSdkProperties(),
          ...t,
          page: String(t.page),
          entries: String(t.entries),
          include: (_a2 = t.include) == null ? void 0 : _a2.join(","),
          exclude: e.join(",")
        }
      }), { filteredWallets: r, mobileFilteredOutWalletsLength: i } = Z._filterWalletsByPlatform(n == null ? void 0 : n.data);
      return {
        data: r || [],
        count: n == null ? void 0 : n.count,
        mobileFilteredOutWalletsLength: i
      };
    },
    async prefetchWalletRanks() {
      const t = q.state.connectors;
      if (!(t == null ? void 0 : t.length)) return;
      const e = {
        page: 1,
        entries: 20,
        badge: "certified"
      };
      if (e.names = t.map((r) => r.name).join(","), m.state.activeChain === P.CHAIN.EVM) {
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
      const { data: s } = await Z.fetchWallets(e);
      oe.explorerWallets = s, q.extendConnectorsWithExplorerWallets(s);
      const n = m.getRequestedCaipNetworkIds().join(",");
      oe.explorerFilteredWallets = s.filter((r) => {
        var _a2;
        return (_a2 = r.chains) == null ? void 0 : _a2.some((i) => n.includes(i));
      });
    },
    async fetchFeaturedWallets() {
      const { featuredWalletIds: t } = U.state;
      if (t == null ? void 0 : t.length) {
        const e = {
          ...Z._getSdkProperties(),
          page: 1,
          entries: (t == null ? void 0 : t.length) ?? Al,
          include: t
        }, { data: s } = await Z.fetchWallets(e), n = [
          ...s
        ].sort((i, o) => t.indexOf(i.id) - t.indexOf(o.id)), r = n.map((i) => i.image_id).filter(Boolean);
        await Promise.allSettled(r.map((i) => Z._fetchWalletImage(i))), oe.featured = n, oe.allFeatured = n;
      }
    },
    async fetchRecommendedWallets() {
      try {
        oe.isFetchingRecommendedWallets = true;
        const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: s } = U.state, n = [
          ...e ?? [],
          ...s ?? []
        ].filter(Boolean), r = m.getRequestedCaipNetworkIds().join(","), i = {
          page: 1,
          entries: Al,
          include: t,
          exclude: n,
          chains: r
        }, { data: o, count: a } = await Z.fetchWallets(i), c = L.getRecentWallets(), l = o.map((u) => u.image_id).filter(Boolean), d = c.map((u) => u.image_id).filter(Boolean);
        await Promise.allSettled([
          ...l,
          ...d
        ].map((u) => Z._fetchWalletImage(u))), oe.recommended = o, oe.allRecommended = o, oe.count = a ?? 0;
      } catch {
      } finally {
        oe.isFetchingRecommendedWallets = false;
      }
    },
    async fetchWalletsByPage({ page: t }) {
      const { includeWalletIds: e, excludeWalletIds: s, featuredWalletIds: n } = U.state, r = m.getRequestedCaipNetworkIds().join(","), i = [
        ...oe.recommended.map(({ id: u }) => u),
        ...s ?? [],
        ...n ?? []
      ].filter(Boolean), o = {
        page: t,
        entries: Gg,
        include: e,
        exclude: i,
        chains: r
      }, { data: a, count: c, mobileFilteredOutWalletsLength: l } = await Z.fetchWallets(o);
      oe.mobileFilteredOutWalletsLength = l + (oe.mobileFilteredOutWalletsLength ?? 0);
      const d = a.slice(0, Yg).map((u) => u.image_id).filter(Boolean);
      await Promise.allSettled(d.map((u) => Z._fetchWalletImage(u))), oe.wallets = Y.uniqueBy([
        ...oe.wallets,
        ...Z._filterOutExtensions(a)
      ], "id").filter((u) => {
        var _a2;
        return (_a2 = u.chains) == null ? void 0 : _a2.some((h) => r.includes(h));
      }), oe.count = c > oe.count ? c : oe.count, oe.page = t;
    },
    async initializeExcludedWallets({ ids: t }) {
      const e = {
        page: 1,
        entries: t.length,
        include: t
      }, { data: s } = await Z.fetchWallets(e);
      s && s.forEach((n) => {
        oe.excludedWallets.push({
          rdns: n.rdns,
          name: n.name
        });
      });
    },
    async searchWallet({ search: t, badge: e }) {
      const { includeWalletIds: s, excludeWalletIds: n } = U.state, r = m.getRequestedCaipNetworkIds().join(",");
      oe.search = [];
      const i = {
        page: 1,
        entries: 100,
        search: t == null ? void 0 : t.trim(),
        badge_type: e,
        include: s,
        exclude: n,
        chains: r
      }, { data: o } = await Z.fetchWallets(i);
      de.sendEvent({
        type: "track",
        event: "SEARCH_WALLET",
        properties: {
          badge: e ?? "",
          search: t ?? ""
        }
      });
      const a = o.map((c) => c.image_id).filter(Boolean);
      await Promise.allSettled([
        ...a.map((c) => Z._fetchWalletImage(c)),
        Y.wait(300)
      ]), oe.search = Z._filterOutExtensions(o);
    },
    initPromise(t, e) {
      const s = oe.promises[t];
      return s || (oe.promises[t] = e());
    },
    prefetch({ fetchConnectorImages: t = true, fetchFeaturedWallets: e = true, fetchRecommendedWallets: s = true, fetchNetworkImages: n = true, fetchWalletRanks: r = true } = {}) {
      const i = [
        t && Z.initPromise("connectorImages", Z.fetchConnectorImages),
        e && Z.initPromise("featuredWallets", Z.fetchFeaturedWallets),
        s && Z.initPromise("recommendedWallets", Z.fetchRecommendedWallets),
        n && Z.initPromise("networkImages", Z.fetchNetworkImages),
        r && Z.initPromise("walletRanks", Z.prefetchWalletRanks)
      ].filter(Boolean);
      return Promise.allSettled(i);
    },
    prefetchAnalyticsConfig() {
      var _a2;
      ((_a2 = U.state.features) == null ? void 0 : _a2.analytics) && Z.fetchAnalyticsConfig();
    },
    async fetchAnalyticsConfig() {
      try {
        const { isAnalyticsEnabled: t } = await ut.get({
          path: "/getAnalyticsConfig",
          params: Z._getSdkProperties()
        });
        U.setFeatures({
          analytics: t
        });
      } catch {
        U.setFeatures({
          analytics: false
        });
      }
    },
    filterByNamespaces(t) {
      if (!(t == null ? void 0 : t.length)) {
        oe.featured = oe.allFeatured, oe.recommended = oe.allRecommended;
        return;
      }
      const e = m.getRequestedCaipNetworkIds().join(",");
      oe.featured = oe.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), oe.recommended = oe.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), oe.filteredWallets = oe.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    },
    clearFilterByNamespaces() {
      oe.filteredWallets = [];
    },
    setFilterByNamespace(t) {
      if (!t) {
        oe.featured = oe.allFeatured, oe.recommended = oe.allRecommended;
        return;
      }
      const e = m.getRequestedCaipNetworkIds().join(",");
      oe.featured = oe.allFeatured.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), oe.recommended = oe.allRecommended.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      }), oe.filteredWallets = oe.wallets.filter((s) => {
        var _a2;
        return (_a2 = s.chains) == null ? void 0 : _a2.some((n) => e.includes(n));
      });
    }
  };
  dn = {
    filterOutDuplicatesByRDNS(t) {
      const e = U.state.enableEIP6963 ? q.state.connectors : [], s = L.getRecentWallets(), n = e.map((a) => {
        var _a2;
        return (_a2 = a.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), r = s.map((a) => a.rdns).filter(Boolean), i = n.concat(r);
      if (i.includes("io.metamask.mobile") && Y.isMobile()) {
        const a = i.indexOf("io.metamask.mobile");
        i[a] = "io.metamask";
      }
      return t.filter((a) => !((a == null ? void 0 : a.rdns) && i.includes(String(a.rdns)) || !(a == null ? void 0 : a.rdns) && e.some((l) => l.name === a.name)));
    },
    filterOutDuplicatesByIds(t) {
      const e = q.state.connectors.filter((a) => a.type === "ANNOUNCED" || a.type === "INJECTED" || a.type === "MULTI_CHAIN"), s = L.getRecentWallets(), n = e.map((a) => {
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
      const { connectors: e } = q.state, { featuredWalletIds: s } = U.state, n = e.filter((o) => o.type === "ANNOUNCED").reduce((o, a) => {
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
      const s = (t == null ? void 0 : t.connectMethodsOrder) || ((_a2 = U.state.features) == null ? void 0 : _a2.connectMethodsOrder), n = e || q.state.connectors;
      if (s) return s;
      const { injected: r, announced: i } = ht.getConnectorsByType(n, Z.state.recommended, Z.state.featured), o = r.filter(ht.showConnector), a = i.filter(ht.showConnector);
      return o.length || a.length ? [
        "wallet",
        "email",
        "social"
      ] : he.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(t) {
      const e = !!t.rdns && Z.state.excludedWallets.some((n) => n.rdns === t.rdns), s = !!t.name && Z.state.excludedWallets.some((n) => Ju.isLowerCaseMatch(n.name, t.name));
      return e || s;
    },
    markWalletsWithDisplayIndex(t) {
      return t.map((e, s) => ({
        ...e,
        display_index: s
      }));
    },
    filterWalletsByWcSupport(t) {
      return z.state.wcBasic ? t.filter((e) => e.supports_wc) : Y.isMobile() ? t.filter((e) => e.supports_wc || he.MANDATORY_WALLET_IDS_ON_MOBILE.includes(e.id)) : t;
    },
    getWalletConnectWallets(t) {
      var _a2;
      const e = [
        ...Z.state.featured,
        ...Z.state.recommended
      ];
      ((_a2 = Z.state.filteredWallets) == null ? void 0 : _a2.length) > 0 ? e.push(...Z.state.filteredWallets) : e.push(...t);
      const s = Y.uniqueBy(e, "id"), n = dn.markWalletsAsInstalled(s), r = dn.filterWalletsByWcSupport(n);
      return dn.markWalletsWithDisplayIndex(r);
    }
  };
  ht = {
    getConnectorsByType(t, e, s) {
      const { customWallets: n } = U.state, r = L.getRecentWallets(), i = dn.filterOutDuplicateWallets(e), o = dn.filterOutDuplicateWallets(s), a = t.filter((u) => u.type === "MULTI_CHAIN"), c = t.filter((u) => u.type === "ANNOUNCED"), l = t.filter((u) => u.type === "INJECTED"), d = t.filter((u) => u.type === "EXTERNAL");
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
      const e = (_a2 = t.info) == null ? void 0 : _a2.rdns, s = !!e && Z.state.excludedWallets.some((r) => !!r.rdns && r.rdns === e), n = !!t.name && Z.state.excludedWallets.some((r) => Ju.isLowerCaseMatch(r.name, t.name));
      return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!Y.isMobile() || Y.isMobile() && !e && !z.checkInstalled()) || s || n) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (s || n));
    },
    getIsConnectedWithWC() {
      return Array.from(m.state.chains.values()).some((s) => q.getConnectorId(s.namespace) === P.CONNECTOR_ID.WALLET_CONNECT);
    },
    getConnectorTypeOrder({ recommended: t, featured: e, custom: s, recent: n, announced: r, injected: i, multiChain: o, external: a, overriddenConnectors: c = ((_b2) => (_b2 = U.state.features) == null ? void 0 : _b2.connectorTypeOrder)() ?? [] }) {
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
      })), f = d.filter(({ type: g }) => !h.some(({ type: w }) => w === g));
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
      return t.id === P.CONNECTOR_ID.BASE_ACCOUNT ? 0 : t.id === P.CONNECTOR_ID.COINBASE || t.id === P.CONNECTOR_ID.COINBASE_SDK ? 1 : 2;
    },
    sortConnectorsByPriority(t) {
      return [
        ...t
      ].sort((e, s) => ht.getPriority(e) - ht.getPriority(s));
    },
    getAuthName({ email: t, socialUsername: e, socialProvider: s }) {
      return e ? s && s === "discord" && e.endsWith("0") ? e.slice(0, -1) : e : t.length > 30 ? `${t.slice(0, -3)}...` : t;
    },
    async fetchProviderData(t) {
      var _a2, _b2;
      try {
        if (t.name === "Browser Wallet" && !Y.isMobile()) return {
          accounts: [],
          chainId: void 0
        };
        if (t.id === P.CONNECTOR_ID.AUTH) return {
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
      const e = L.getRecentWallets(), s = q.state.connectors.map((o) => {
        var _a2;
        return (_a2 = o.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), n = e.map((o) => o.rdns).filter(Boolean), r = s.concat(n);
      if (r.includes("io.metamask.mobile") && Y.isMobile()) {
        const o = r.indexOf("io.metamask.mobile");
        r[o] = "io.metamask";
      }
      return t.filter((o) => !r.includes(String(o == null ? void 0 : o.rdns)));
    },
    hasWalletConnector(t) {
      return q.state.connectors.some((e) => e.id === t.id || e.name === t.name);
    },
    isWalletCompatibleWithCurrentChain(t) {
      const e = m.state.activeChain;
      return e && t.chains ? t.chains.some((s) => {
        const n = s.split(":")[0];
        return e === n;
      }) : true;
    },
    getFilteredRecentWallets() {
      return L.getRecentWallets().filter((s) => !dn.isExcluded(s)).filter((s) => !this.hasWalletConnector(s)).filter((s) => this.isWalletCompatibleWithCurrentChain(s));
    },
    getCappedRecommendedWallets(t) {
      const { connectors: e } = q.state, { customWallets: s, featuredWalletIds: n } = U.state, r = e.find((I) => I.id === "walletConnect"), i = e.filter((I) => I.type === "INJECTED" || I.type === "ANNOUNCED" || I.type === "MULTI_CHAIN");
      if (!r && !i.length && !(s == null ? void 0 : s.length)) return [];
      const o = xa.isEmailEnabled(), a = xa.isSocialsEnabled(), c = i.filter((I) => I.name !== "Browser Wallet" && I.name !== "WalletConnect"), l = (n == null ? void 0 : n.length) || 0, d = (s == null ? void 0 : s.length) || 0, u = c.length || 0, h = o ? 1 : 0, f = a ? 1 : 0, g = l + d + u + h + f, w = Math.max(0, 4 - g);
      return w <= 0 ? [] : dn.filterOutDuplicateWallets(t).slice(0, w);
    },
    processConnectorsByType(t, e = true) {
      const s = ht.sortConnectorsByExplorerWallet([
        ...t
      ]);
      return e ? s.filter(ht.showConnector) : s;
    },
    connectorList() {
      const t = ht.getConnectorsByType(q.state.connectors, Z.state.recommended, Z.state.featured), e = this.processConnectorsByType(t.announced.filter((f) => f.id !== "walletConnect")), s = this.processConnectorsByType(t.injected), n = this.processConnectorsByType(t.multiChain.filter((f) => f.name !== "WalletConnect"), false), r = t.custom, i = t.recent, o = this.processConnectorsByType(t.external.filter((f) => f.id !== P.CONNECTOR_ID.COINBASE_SDK && f.id !== P.CONNECTOR_ID.BASE_ACCOUNT)), a = t.recommended, c = t.featured, l = ht.getConnectorTypeOrder({
        custom: r,
        recent: i,
        announced: e,
        injected: s,
        multiChain: n,
        recommended: a,
        featured: c,
        external: o
      }), d = q.state.connectors.find((f) => f.id === "walletConnect"), u = Y.isMobile(), h = [];
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
          ht.getFilteredRecentWallets().forEach((p) => h.push({
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
          ht.getFilteredCustomWallets(r ?? []).forEach((p) => h.push({
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
          ht.getCappedRecommendedWallets(a).forEach((p) => h.push({
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
      return q.state.connectors.filter((t) => (t.type === "INJECTED" || t.type === "ANNOUNCED" || t.type === "MULTI_CHAIN") && t.name !== "Browser Wallet" && t.name !== "WalletConnect").length;
    }
  };
  Jg = [
    "ConnectingExternal",
    "ConnectingMultiChain",
    "ConnectingSocial",
    "ConnectingFarcaster"
  ];
  Ie = Re({
    view: "Connect",
    history: [
      "Connect"
    ],
    transactionStack: []
  });
  Zg = {
    state: Ie,
    subscribeKey(t, e) {
      return tt(Ie, t, e);
    },
    pushTransactionStack(t) {
      Ie.transactionStack.push(t);
    },
    popTransactionStack(t) {
      const e = Ie.transactionStack.pop();
      if (!e) return;
      const { onSuccess: s, onError: n, onCancel: r } = e;
      switch (t) {
        case "success":
          s == null ? void 0 : s();
          break;
        case "error":
          n == null ? void 0 : n(), se.goBack();
          break;
        case "cancel":
          r == null ? void 0 : r(), se.goBack();
          break;
      }
    },
    push(t, e) {
      let s = t, n = e;
      Z.state.plan.hasExceededUsageLimit && Jg.includes(t) && (s = "UsageExceeded", n = void 0), s !== Ie.view && (Ie.view = s, Ie.history.push(s), Ie.data = n);
    },
    reset(t, e) {
      Ie.view = t, Ie.history = [
        t
      ], Ie.data = e;
    },
    replace(t, e) {
      Ie.history.at(-1) === t || (Ie.view = t, Ie.history[Ie.history.length - 1] = t, Ie.data = e);
    },
    goBack() {
      var _a2, _b2;
      const t = m.state.activeCaipAddress, e = se.state.view === "ConnectingFarcaster", s = !t && e;
      if (Ie.history.length > 1) {
        Ie.history.pop();
        const [n] = Ie.history.slice(-1);
        n && (t && n === "Connect" ? Ie.view = "Account" : Ie.view = n);
      } else pe.close();
      ((_a2 = Ie.data) == null ? void 0 : _a2.wallet) && (Ie.data.wallet = void 0), ((_b2 = Ie.data) == null ? void 0 : _b2.redirectView) && (Ie.data.redirectView = void 0), setTimeout(() => {
        var _a3, _b3, _c2;
        if (s) {
          m.setAccountProp("farcasterUrl", void 0, m.state.activeChain);
          const n = q.getAuthConnector();
          (_a3 = n == null ? void 0 : n.provider) == null ? void 0 : _a3.reload();
          const r = Xr(U.state);
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
      if (Ie.history.length > 1) {
        Ie.history = Ie.history.slice(0, t + 1);
        const [e] = Ie.history.slice(-1);
        e && (Ie.view = e);
      }
    },
    goBackOrCloseModal() {
      se.state.history.length > 1 ? se.goBack() : pe.close();
    }
  };
  se = Xt(Zg);
  Ns = Re({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
  });
  Pa = {
    state: Ns,
    subscribe(t) {
      return et(Ns, () => t(Ns));
    },
    setThemeMode(t) {
      Ns.themeMode = t;
      try {
        const e = q.getAuthConnector();
        if (e) {
          const s = Pa.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeMode: t,
            themeVariables: s,
            w3mThemeVariables: Xi(s, t)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(t) {
      Ns.themeVariables = {
        ...Ns.themeVariables,
        ...t
      };
      try {
        const e = q.getAuthConnector();
        if (e) {
          const s = Pa.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeVariables: s,
            w3mThemeVariables: Xi(Ns.themeVariables, Ns.themeMode)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return Xr(Ns);
    }
  };
  Pt = Xt(Pa);
  oh = Object.fromEntries(Xu.map((t) => [
    t,
    void 0
  ]));
  Xg = Object.fromEntries(Xu.map((t) => [
    t,
    true
  ]));
  we = Re({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: oh,
    filterByNamespaceMap: Xg
  });
  Qg = {
    state: we,
    subscribe(t) {
      return et(we, () => {
        t(we);
      });
    },
    subscribeKey(t, e) {
      return tt(we, t, e);
    },
    initialize(t) {
      t.forEach((e) => {
        const s = L.getConnectedConnectorId(e);
        s && q.setConnectorId(s, e);
      });
    },
    setActiveConnector(t) {
      t && (we.activeConnector = Qr(t));
    },
    setConnectors(t) {
      t.filter((r) => !we.allConnectors.some((i) => i.id === r.id && q.getConnectorName(i.name) === q.getConnectorName(r.name) && i.chain === r.chain)).forEach((r) => {
        r.type !== "MULTI_CHAIN" && we.allConnectors.push(Qr(r));
      });
      const s = q.getEnabledNamespaces(), n = q.getEnabledConnectors(s);
      we.connectors = q.mergeMultiChainConnectors(n);
    },
    filterByNamespaces(t) {
      Object.keys(we.filterByNamespaceMap).forEach((e) => {
        we.filterByNamespaceMap[e] = false;
      }), t.forEach((e) => {
        we.filterByNamespaceMap[e] = true;
      }), q.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(t, e) {
      we.filterByNamespaceMap[t] = e, q.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      const t = q.getEnabledNamespaces(), e = q.getEnabledConnectors(t), s = q.areAllNamespacesEnabled();
      we.connectors = q.mergeMultiChainConnectors(e), s ? Z.clearFilterByNamespaces() : Z.filterByNamespaces(t);
    },
    getEnabledNamespaces() {
      return Object.entries(we.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t);
    },
    getEnabledConnectors(t) {
      return we.allConnectors.filter((e) => t.includes(e.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values(we.filterByNamespaceMap).every((t) => t);
    },
    mergeMultiChainConnectors(t) {
      const e = q.generateConnectorMapByName(t), s = [];
      return e.forEach((n) => {
        const r = n[0], i = (r == null ? void 0 : r.id) === P.CONNECTOR_ID.AUTH;
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
        const { name: n } = s, r = q.getConnectorName(n);
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
      if (t.id === P.CONNECTOR_ID.AUTH) {
        const e = t, s = Xr(U.state), n = Pt.getSnapshot().themeMode, r = Pt.getSnapshot().themeVariables;
        (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
          metadata: s.metadata,
          sdkVersion: s.sdkVersion,
          projectId: s.projectId,
          sdkType: s.sdkType
        }), (_c2 = e == null ? void 0 : e.provider) == null ? void 0 : _c2.syncTheme({
          themeMode: n,
          themeVariables: r,
          w3mThemeVariables: Xi(r, n)
        }), q.setConnectors([
          t
        ]);
      } else q.setConnectors([
        t
      ]);
    },
    getAuthConnector(t) {
      var _a2;
      const e = t || m.state.activeChain, s = we.connectors.find((n) => n.id === P.CONNECTOR_ID.AUTH);
      if (s) return ((_a2 = s == null ? void 0 : s.connectors) == null ? void 0 : _a2.length) ? s.connectors.find((r) => r.chain === e) : s;
    },
    getAnnouncedConnectorRdns() {
      return we.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
        var _a2;
        return (_a2 = t.info) == null ? void 0 : _a2.rdns;
      });
    },
    getConnectorById(t) {
      return ht.sortConnectorsByPriority(we.allConnectors).find((s) => s.id === t);
    },
    getConnector({ id: t, namespace: e }) {
      const s = e || m.state.activeChain, n = we.allConnectors.filter((o) => o.chain === s);
      return ht.sortConnectorsByPriority(n).find((o) => o.id === t || o.explorerId === t);
    },
    syncIfAuthConnector(t) {
      var _a2, _b2;
      if (t.id !== "AUTH") return;
      const e = t, s = Xr(U.state), n = Pt.getSnapshot().themeMode, r = Pt.getSnapshot().themeVariables;
      (_b2 = (_a2 = e == null ? void 0 : e.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b2.call(_a2, {
        metadata: s.metadata,
        sdkVersion: s.sdkVersion,
        sdkType: s.sdkType,
        projectId: s.projectId
      }), e.provider.syncTheme({
        themeMode: n,
        themeVariables: r,
        w3mThemeVariables: Xi(r, n)
      });
    },
    getConnectorsByNamespace(t) {
      const e = we.allConnectors.filter((s) => s.chain === t);
      return q.mergeMultiChainConnectors(e);
    },
    canSwitchToSmartAccount(t) {
      return m.checkIfSmartAccountEnabled() && Jt(t) === Ms.ACCOUNT_TYPES.EOA;
    },
    selectWalletConnector(t) {
      var _a2;
      const e = (_a2 = se.state.data) == null ? void 0 : _a2.redirectView, s = m.state.activeChain, n = s ? q.getConnector({
        id: t.id,
        namespace: s
      }) : void 0;
      Wg.handleMobileDeeplinkRedirect((n == null ? void 0 : n.explorerId) || t.id, m.state.activeChain), n ? se.push("ConnectingExternal", {
        connector: n,
        wallet: t,
        redirectView: e
      }) : se.push("ConnectingWalletConnect", {
        wallet: t,
        redirectView: e
      });
    },
    getConnectors(t) {
      return t ? q.getConnectorsByNamespace(t) : q.mergeMultiChainConnectors(we.allConnectors);
    },
    setFilterByNamespace(t) {
      we.filterByNamespace = t, we.connectors = q.getConnectors(t), Z.setFilterByNamespace(t);
    },
    setConnectorId(t, e) {
      t && (we.activeConnectorIds = {
        ...we.activeConnectorIds,
        [e]: t
      }, L.setConnectedConnectorId(e, t));
    },
    removeConnectorId(t) {
      we.activeConnectorIds = {
        ...we.activeConnectorIds,
        [t]: void 0
      }, L.deleteConnectedConnectorId(t);
    },
    getConnectorId(t) {
      if (t) return we.activeConnectorIds[t];
    },
    isConnected(t) {
      return t ? !!we.activeConnectorIds[t] : Object.values(we.activeConnectorIds).some((e) => !!e);
    },
    resetConnectorIds() {
      we.activeConnectorIds = {
        ...oh
      };
    },
    extendConnectorsWithExplorerWallets(t) {
      we.allConnectors.forEach((n) => {
        const r = t.find((i) => {
          var _a2;
          return i.id === n.id || i.rdns && i.rdns === ((_a2 = n.info) == null ? void 0 : _a2.rdns);
        });
        r && (n.explorerWallet = r);
      });
      const e = q.getEnabledNamespaces(), s = q.getEnabledConnectors(e);
      we.connectors = q.mergeMultiChainConnectors(s);
    },
    async connect(t = {}) {
      const { namespace: e } = t;
      return q.setFilterByNamespace(e), se.push("Connect", {
        addWalletForNamespace: e
      }), new Promise((s, n) => {
        if (e) {
          const r = m.subscribeChainProp("accountState", (o) => {
            (o == null ? void 0 : o.caipAddress) && (s({
              caipAddress: o == null ? void 0 : o.caipAddress
            }), r());
          }, e), i = pe.subscribeKey("open", (o) => {
            o || (n(new Error("Modal closed")), i());
          });
        } else {
          const r = m.subscribeKey("activeCaipAddress", (o) => {
            o && (s({
              caipAddress: o
            }), r());
          }), i = pe.subscribeKey("open", (o) => {
            o || (n(new Error("Modal closed")), i());
          });
        }
      });
    }
  };
  q = Xt(Qg);
  em = 1e3;
  Sr = {
    checkNamespaceConnectorId(t, e) {
      return q.getConnectorId(t) === e;
    },
    isSocialProvider(t) {
      return he.DEFAULT_REMOTE_FEATURES.socials.includes(t);
    },
    connectWalletConnect({ walletConnect: t, connector: e, closeModalOnConnect: s = true, redirectViewOnModalClose: n = "Connect", onOpen: r, onConnect: i }) {
      return new Promise((o, a) => {
        if (t && q.setActiveConnector(e), r == null ? void 0 : r(Y.isMobile() && t), n) {
          const l = pe.subscribeKey("open", (d) => {
            d || (se.state.view !== n && se.replace(n), l(), a(new Error("Modal closed")));
          });
        }
        const c = m.subscribeKey("activeCaipAddress", (l) => {
          l && (i == null ? void 0 : i(), s && pe.close(), c(), o(Qe.parseCaipAddress(l)));
        });
      });
    },
    connectExternal(t) {
      return new Promise((e, s) => {
        const n = m.subscribeKey("activeCaipAddress", (r) => {
          r && (pe.close(), n(), e(Qe.parseCaipAddress(r)));
        });
        z.connectExternal(t, t.chain).catch(() => {
          n(), s(new Error("Connection rejected"));
        });
      });
    },
    connectSocial({ social: t, namespace: e, closeModalOnConnect: s = true, onOpenFarcaster: n, onConnect: r }) {
      let i, o = false, a = null;
      const c = e || m.state.activeChain, l = m.subscribeKey("activeCaipAddress", (d) => {
        d && (s && pe.close(), l());
      });
      return new Promise((d, u) => {
        async function h(g) {
          var _a2;
          if ((_a2 = g.data) == null ? void 0 : _a2.resultUri) if (g.origin === P.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", h, false);
            try {
              const p = q.getAuthConnector(c);
              if (p && !o) {
                i && i.close(), o = true;
                const w = g.data.resultUri;
                de.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: {
                    provider: t
                  }
                }), L.setConnectedSocialProvider(t), await z.connectExternal({
                  id: p.id,
                  type: p.type,
                  socialUri: w
                }, p.chain);
                const A = m.state.activeCaipAddress;
                if (!A) {
                  u(new Error("Failed to connect"));
                  return;
                }
                d(Qe.parseCaipAddress(A)), de.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: {
                    provider: t
                  }
                });
              }
            } catch (p) {
              de.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: {
                  provider: t,
                  message: Y.parseError(p)
                }
              }), u(new Error("Failed to connect"));
            }
          } else de.sendEvent({
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
          if (de.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: {
              provider: t
            }
          }), t === "farcaster") {
            n == null ? void 0 : n();
            const g = pe.subscribeKey("open", (w) => {
              !w && t === "farcaster" && (u(new Error("Popup closed")), r == null ? void 0 : r(), g());
            }), p = q.getAuthConnector();
            if (p && !((_a2 = m.getAccountData(c)) == null ? void 0 : _a2.farcasterUrl)) try {
              const { url: A } = await p.provider.getFarcasterUri();
              m.setAccountProp("farcasterUrl", A, c);
            } catch {
              u(new Error("Failed to connect to farcaster"));
            }
          } else {
            const g = q.getAuthConnector();
            a = Y.returnOpenHref(`${P.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
            try {
              if (g) {
                const { uri: p } = await g.provider.getSocialRedirectUri({
                  provider: t
                });
                if (a && p) {
                  a.location.href = p, i = a;
                  const w = setInterval(() => {
                    (i == null ? void 0 : i.closed) && !o && (u(new Error("Popup closed")), clearInterval(w));
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
          const a = pe.subscribeKey("open", (c) => {
            c || (se.state.view !== e && se.replace(e), a(), i(new Error("Modal closed")));
          });
        }
        const o = m.subscribeKey("activeCaipAddress", (a) => {
          a && (n == null ? void 0 : n(), t && pe.close(), o(), r(Qe.parseCaipAddress(a)));
        });
      });
    },
    async updateEmail() {
      const t = L.getConnectedConnectorId(m.state.activeChain), e = q.getAuthConnector();
      if (!e) throw new Error("No auth connector found");
      if (t !== P.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
      const s = e.provider.getEmail() ?? "";
      return await pe.open({
        view: "UpdateEmailWallet",
        data: {
          email: s,
          redirectView: void 0
        }
      }), new Promise((n, r) => {
        const i = setInterval(() => {
          const a = e.provider.getEmail() ?? "";
          a !== s && (pe.close(), clearInterval(i), o(), n({
            email: a
          }));
        }, em), o = pe.subscribeKey("open", (a) => {
          a || (se.state.view !== "Connect" && se.push("Connect"), clearInterval(i), o(), r(new Error("Modal closed")));
        });
      });
    },
    canSwitchToSmartAccount(t) {
      return m.checkIfSmartAccountEnabled() && Jt(t) === Ms.ACCOUNT_TYPES.EOA;
    }
  };
  ah = function() {
    var _a2, _b2;
    const t = ((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) || "eip155", e = ((_b2 = m.state.activeCaipNetwork) == null ? void 0 : _b2.id) || 1, s = he.NATIVE_TOKEN_ADDRESS[t];
    return `${t}:${e}:${s}`;
  };
  W_ = function(t) {
    return he.NATIVE_TOKEN_ADDRESS[t];
  };
  Jt = function(t) {
    var _a2;
    return (_a2 = m.getAccountData(t)) == null ? void 0 : _a2.preferredAccountType;
  };
  Ii = function(t) {
    return m.state.activeCaipNetwork;
  };
  let Xn, as, Ue, tm, Hi, fe;
  to = {
    getConnectionStatus(t, e) {
      const s = q.state.activeConnectorIds[e], n = z.getConnections(e);
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
      const e = !!((_a2 = U.state.remoteFeatures) == null ? void 0 : _a2.multiWallet), s = q.state.activeConnectorIds[t], n = z.getConnections(t), i = (z.state.recentConnections.get(t) ?? []).filter((a) => q.getConnectorById(a.connectorId)), o = to.excludeExistingConnections([
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
      const e = z.state.wcUri;
      if ((t == null ? void 0 : t.mobile_link) && e) try {
        z.setWcError(false);
        const { mobile_link: s, link_mode: n, name: r } = t, { redirect: i, redirectUniversalLink: o, href: a } = Y.formatNativeUrl(s, e, n), c = i, l = o, d = Y.isIframe() ? "_top" : "_self";
        z.setWcLinking({
          name: r,
          href: a
        }), z.setRecentWallet(t), U.state.experimental_preferUniversalLinks && l ? Y.openHref(l, d) : Y.openHref(c, d);
      } catch (s) {
        de.sendEvent({
          type: "track",
          event: "CONNECT_PROXY_ERROR",
          properties: {
            message: s instanceof Error ? s.message : "Error parsing the deep link",
            uri: e,
            mobile_link: t.mobile_link,
            name: t.name
          }
        }), z.setWcError(true);
      }
    }
  };
  Xn = Re({
    loading: false,
    open: false,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: false,
    connectingWallet: void 0
  });
  as = {
    state: Xn,
    subscribe(t) {
      return et(Xn, () => t(Xn));
    },
    subscribeOpen(t) {
      return tt(Xn, "open", t);
    },
    set(t) {
      Object.assign(Xn, {
        ...Xn,
        ...t
      });
    }
  };
  Ue = Re({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: false,
    empty: false,
    next: void 0
  });
  tm = {
    state: Ue,
    subscribe(t) {
      return et(Ue, () => t(Ue));
    },
    setLastNetworkInView(t) {
      Ue.lastNetworkInView = t;
    },
    async fetchTransactions(t) {
      var _a2;
      if (!t) throw new Error("Transactions can't be fetched without an accountAddress");
      Ue.loading = true;
      try {
        const e = await re.fetchTransactions({
          account: t,
          cursor: Ue.next,
          chainId: (_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId
        }), s = Hi.filterSpamTransactions(e.data), n = Hi.filterByConnectedChain(s), r = [
          ...Ue.transactions,
          ...n
        ];
        Ue.loading = false, Ue.transactions = r, Ue.transactionsByYear = Hi.groupTransactionsByYearAndMonth(Ue.transactionsByYear, n), Ue.empty = r.length === 0, Ue.next = e.next ? e.next : void 0;
      } catch {
        const s = m.state.activeChain;
        de.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: t,
            projectId: U.state.projectId,
            cursor: Ue.next,
            isSmartAccount: Jt(s) === Ms.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }), ys.showError("Failed to fetch transactions"), Ue.loading = false, Ue.empty = true, Ue.next = void 0;
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
      const e = (_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
      return t.filter((n) => n.metadata.chain === e);
    },
    clearCursor() {
      Ue.next = void 0;
    },
    resetTransactions() {
      Ue.transactions = [], Ue.transactionsByYear = {}, Ue.lastNetworkInView = void 0, Ue.loading = false, Ue.empty = false, Ue.next = void 0;
    }
  };
  Hi = Xt(tm, "API_ERROR");
  fe = Re({
    connections: /* @__PURE__ */ new Map(),
    recentConnections: /* @__PURE__ */ new Map(),
    isSwitchingConnection: false,
    wcError: false,
    wcFetchingUri: false,
    buffering: false,
    status: "disconnected"
  });
  let bn;
  let sm, Fo;
  sm = {
    state: fe,
    subscribe(t) {
      return et(fe, () => t(fe));
    },
    subscribeKey(t, e) {
      return tt(fe, t, e);
    },
    _getClient() {
      return fe._client;
    },
    setClient(t) {
      fe._client = Qr(t);
    },
    initialize(t) {
      const e = t.filter((s) => !!s.namespace).map((s) => s.namespace);
      z.syncStorageConnections(e);
    },
    syncStorageConnections(t) {
      const e = L.getConnections(), s = t ?? Array.from(m.state.chains.keys());
      for (const n of s) {
        const r = e[n] ?? [], i = new Map(fe.recentConnections);
        i.set(n, r), fe.recentConnections = i;
      }
    },
    getConnections(t) {
      return t ? fe.connections.get(t) ?? [] : [];
    },
    hasAnyConnection(t) {
      const e = z.state.connections;
      return Array.from(e.values()).flatMap((s) => s).some(({ connectorId: s }) => s === t);
    },
    async connectWalletConnect({ cache: t = "auto" } = {}) {
      var _a2, _b2, _c2, _d3;
      fe.wcFetchingUri = true;
      const e = Y.isTelegram() || Y.isSafari() && Y.isIos();
      if (t === "always" || t === "auto" && e) {
        if (bn) {
          await bn, bn = void 0;
          return;
        }
        if (!Y.isPairingExpired(fe == null ? void 0 : fe.wcPairingExpiry)) {
          const s = fe.wcUri;
          fe.wcUri = s;
          return;
        }
        bn = (_b2 = (_a2 = z._getClient()) == null ? void 0 : _a2.connectWalletConnect) == null ? void 0 : _b2.call(_a2).catch(() => {
        }), z.state.status = "connecting", await bn, bn = void 0, fe.wcPairingExpiry = void 0, z.state.status = "connected";
      } else await ((_d3 = (_c2 = z._getClient()) == null ? void 0 : _c2.connectWalletConnect) == null ? void 0 : _d3.call(_c2));
    },
    async connectExternal(t, e, s = true) {
      var _a2, _b2, _c2;
      const n = await ((_b2 = (_a2 = z._getClient()) == null ? void 0 : _a2.connectExternal) == null ? void 0 : _b2.call(_a2, t));
      s && m.setActiveNamespace(e);
      const r = q.state.allConnectors.find((o) => o.id === (t == null ? void 0 : t.id)), i = t.type === "AUTH" ? "email" : "browser";
      return de.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: {
          method: i,
          name: (r == null ? void 0 : r.name) || "Unknown",
          view: se.state.view,
          walletRank: (_c2 = r == null ? void 0 : r.explorerWallet) == null ? void 0 : _c2.order
        }
      }), n;
    },
    async reconnectExternal(t) {
      var _a2, _b2;
      await ((_b2 = (_a2 = z._getClient()) == null ? void 0 : _a2.reconnectExternal) == null ? void 0 : _b2.call(_a2, t));
      const e = t.chain || m.state.activeChain;
      e && q.setConnectorId(t.id, e);
    },
    async setPreferredAccountType(t, e) {
      var _a2;
      if (!e) return;
      pe.setLoading(true, m.state.activeChain);
      const s = q.getAuthConnector();
      s && (m.setAccountProp("preferredAccountType", t, e), await s.provider.setPreferredAccount(t), L.setPreferredAccountTypes(Object.entries(m.state.chains).reduce((n, [r, i]) => {
        const o = r, a = Jt(o);
        return a !== void 0 && (n[o] = a), n;
      }, {})), await z.reconnectExternal(s), pe.setLoading(false, m.state.activeChain), de.sendEvent({
        type: "track",
        event: "SET_PREFERRED_ACCOUNT_TYPE",
        properties: {
          accountType: t,
          network: ((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || ""
        }
      }));
    },
    async signMessage(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.signMessage(t);
    },
    parseUnits(t, e) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.parseUnits(t, e);
    },
    formatUnits(t, e) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.formatUnits(t, e);
    },
    updateBalance(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.updateBalance(t);
    },
    async sendTransaction(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.sendTransaction(t);
    },
    async getCapabilities(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.getCapabilities(t);
    },
    async grantPermissions(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.grantPermissions(t);
    },
    async walletGetAssets(t) {
      var _a2;
      return ((_a2 = z._getClient()) == null ? void 0 : _a2.walletGetAssets(t)) ?? {};
    },
    async estimateGas(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.estimateGas(t);
    },
    async writeContract(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.writeContract(t);
    },
    async writeSolanaTransaction(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.writeSolanaTransaction(t);
    },
    async getEnsAddress(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.getEnsAddress(t);
    },
    async getEnsAvatar(t) {
      var _a2;
      return (_a2 = z._getClient()) == null ? void 0 : _a2.getEnsAvatar(t);
    },
    checkInstalled(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = z._getClient()) == null ? void 0 : _a2.checkInstalled) == null ? void 0 : _b2.call(_a2, t)) || false;
    },
    resetWcConnection() {
      fe.wcUri = void 0, fe.wcPairingExpiry = void 0, fe.wcLinking = void 0, fe.recentWallet = void 0, fe.wcFetchingUri = false, fe.status = "disconnected", Hi.resetTransactions(), L.deleteWalletConnectDeepLink(), L.deleteRecentWallet(), as.set({
        connectingWallet: void 0
      });
    },
    resetUri() {
      fe.wcUri = void 0, fe.wcPairingExpiry = void 0, bn = void 0, fe.wcFetchingUri = false, as.set({
        connectingWallet: void 0
      });
    },
    finalizeWcConnection(t) {
      var _a2, _b2;
      const { wcLinking: e, recentWallet: s } = z.state;
      e && L.setWalletConnectDeepLink(e), s && L.setAppKitRecent(s), t && de.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: t,
        properties: {
          method: e ? "mobile" : "qrcode",
          name: ((_b2 = (_a2 = se.state.data) == null ? void 0 : _a2.wallet) == null ? void 0 : _b2.name) || "Unknown",
          view: se.state.view,
          walletRank: s == null ? void 0 : s.order
        }
      });
    },
    setWcBasic(t) {
      fe.wcBasic = t;
    },
    setUri(t) {
      fe.wcUri = t, fe.wcFetchingUri = false, fe.wcPairingExpiry = Y.getPairingExpiry();
    },
    setWcLinking(t) {
      fe.wcLinking = t;
    },
    setWcError(t) {
      fe.wcError = t, fe.wcFetchingUri = false, fe.buffering = false;
    },
    setRecentWallet(t) {
      fe.recentWallet = t;
    },
    setBuffering(t) {
      fe.buffering = t;
    },
    setStatus(t) {
      fe.status = t;
    },
    setIsSwitchingConnection(t) {
      fe.isSwitchingConnection = t;
    },
    async disconnect({ id: t, namespace: e, initialDisconnect: s } = {}) {
      var _a2;
      try {
        await ((_a2 = z._getClient()) == null ? void 0 : _a2.disconnect({
          id: t,
          chainNamespace: e,
          initialDisconnect: s
        }));
      } catch (n) {
        throw new Fn("Failed to disconnect", "INTERNAL_SDK_ERROR", n);
      }
    },
    async disconnectConnector({ id: t, namespace: e }) {
      var _a2;
      try {
        await ((_a2 = z._getClient()) == null ? void 0 : _a2.disconnectConnector({
          id: t,
          namespace: e
        }));
      } catch (s) {
        throw new Fn("Failed to disconnect connector", "INTERNAL_SDK_ERROR", s);
      }
    },
    setConnections(t, e) {
      const s = new Map(fe.connections);
      s.set(e, t), fe.connections = s;
    },
    async handleAuthAccountSwitch({ address: t, namespace: e }) {
      var _a2, _b2, _c2;
      const n = (_c2 = (_b2 = (_a2 = m.getAccountData(e)) == null ? void 0 : _a2.user) == null ? void 0 : _b2.accounts) == null ? void 0 : _c2.find((i) => i.type === "smartAccount"), r = n && n.address.toLowerCase() === t.toLowerCase() && Sr.canSwitchToSmartAccount(e) ? "smartAccount" : "eoa";
      await z.setPreferredAccountType(r, e);
    },
    async handleActiveConnection({ connection: t, namespace: e, address: s }) {
      var _a2;
      const n = q.getConnectorById(t.connectorId), r = t.connectorId === P.CONNECTOR_ID.AUTH;
      if (!n) throw new Error(`No connector found for connection: ${t.connectorId}`);
      if (r) s && await z.handleAuthAccountSwitch({
        address: s,
        namespace: e
      });
      else return (_a2 = await z.connectExternal({
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
      const r = q.getConnectorById(t.connectorId), i = (_b2 = (_a2 = t.auth) == null ? void 0 : _a2.name) == null ? void 0 : _b2.toLowerCase(), o = t.connectorId === P.CONNECTOR_ID.AUTH, a = t.connectorId === P.CONNECTOR_ID.WALLET_CONNECT;
      if (!r) throw new Error(`No connector found for connection: ${t.connectorId}`);
      let c;
      if (o) if (i && Sr.isSocialProvider(i)) {
        const { address: l } = await Sr.connectSocial({
          social: i,
          closeModalOnConnect: n,
          onOpenFarcaster() {
            pe.open({
              view: "ConnectingFarcaster"
            });
          },
          onConnect() {
            se.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const { address: l } = await Sr.connectEmail({
          closeModalOnConnect: n,
          onOpen() {
            pe.open({
              view: "EmailLogin"
            });
          },
          onConnect() {
            se.replace("ProfileWallets");
          }
        });
        c = l;
      }
      else if (a) {
        const { address: l } = await Sr.connectWalletConnect({
          walletConnect: true,
          connector: r,
          closeModalOnConnect: n,
          onOpen(d) {
            const u = d ? "AllWallets" : "ConnectingWalletConnect";
            pe.state.open ? se.push(u) : pe.open({
              view: u
            });
          },
          onConnect() {
            se.replace("ProfileWallets");
          }
        });
        c = l;
      } else {
        const l = await z.connectExternal({
          id: r.id,
          type: r.type,
          provider: r.provider,
          chain: e
        }, e);
        l && (c = l.address);
      }
      return o && s && await z.handleAuthAccountSwitch({
        address: s,
        namespace: e
      }), c;
    },
    async switchConnection({ connection: t, address: e, namespace: s, closeModalOnConnect: n, onChange: r }) {
      var _a2;
      let i;
      const o = (_a2 = m.getAccountData(s)) == null ? void 0 : _a2.caipAddress;
      if (o) {
        const { address: c } = Qe.parseCaipAddress(o);
        i = c;
      }
      const a = to.getConnectionStatus(t, s);
      switch (a) {
        case "connected":
        case "active": {
          const c = await z.handleActiveConnection({
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
          const c = await z.handleDisconnectedConnection({
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
  z = Xt(sm);
  Fo = {
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
      return Vu(BigInt(t), e);
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
  let qo;
  async function Il() {
    if (!qo) {
      const { createPublicClient: t, http: e, defineChain: s } = await Zi(async () => {
        const { createPublicClient: n, http: r, defineChain: i } = await import("./index-BBAT_Pyg.js");
        return {
          createPublicClient: n,
          http: r,
          defineChain: i
        };
      }, __vite__mapDeps([0,1,2,3]));
      qo = {
        createPublicClient: t,
        http: e,
        defineChain: s
      };
    }
    return qo;
  }
  let Ra, Wo, so, wt, ye, rm, ue, jo, Ni, G, lh, im, yt, om, jr, Ua, am, be, cm, $a;
  Ra = {
    getBlockchainApiRpcUrl(t, e) {
      const s = new URL("https://rpc.walletconnect.org/v1/");
      return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
    },
    async getViemChain(t) {
      const { defineChain: e } = await Il(), { chainId: s } = Qe.parseCaipNetworkId(t.caipNetworkId);
      return e({
        ...t,
        id: Number(s)
      });
    },
    async createViemPublicClient(t) {
      const { createPublicClient: e, http: s } = await Il(), n = U.state.projectId, r = await Ra.getViemChain(t);
      if (!r) throw new Error(`Chain ${t.caipNetworkId} not found in viem/chains`);
      return e({
        chain: r,
        transport: s(Ra.getBlockchainApiRpcUrl(t.caipNetworkId, n))
      });
    }
  };
  kc = {
    async getMyTokensWithBalance(t = {
      forceUpdate: void 0,
      caipNetwork: m.state.activeCaipNetwork,
      address: ((_c2) => (_c2 = m.getAccountData()) == null ? void 0 : _c2.address)()
    }) {
      const { forceUpdate: e, caipNetwork: s, address: n } = t, r = q.getConnectorId("eip155") === P.CONNECTOR_ID.AUTH;
      if (!n) return [];
      const i = s ? `${s.caipNetworkId}:${n}` : n, o = L.getBalanceCacheForCaipAddress(i);
      if (o) return o.balances;
      if (s && s.chainNamespace === P.CHAIN.EVM && r) {
        const c = await this.getEIP155Balances(n, s);
        if (c) return this.filterLowQualityTokens(c);
      }
      const a = await re.getBalance(n, s == null ? void 0 : s.caipNetworkId, e);
      return this.filterLowQualityTokens(a.balances);
    },
    async getEIP155Balances(t, e) {
      var _a2, _b2, _c2;
      try {
        const s = Fo.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);
        if (!((_c2 = (_b2 = (_a2 = await z.getCapabilities(t)) == null ? void 0 : _a2[s]) == null ? void 0 : _b2.assetDiscovery) == null ? void 0 : _c2.supported)) return null;
        const r = await z.walletGetAssets({
          account: t,
          chainFilter: [
            s
          ]
        });
        if (!Fo.isWalletGetAssetsResponse(r)) return null;
        const o = (r[s] || []).map((a) => Fo.createBalance(a, e.caipNetworkId));
        return L.updateBalanceCache({
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
      const n = await Ra.createViemPublicClient(s), { address: r } = Qe.parseCaipAddress(t), [{ result: i }, { result: o }, { result: a }, { result: c }] = await n.multicall({
        contracts: [
          {
            address: e,
            functionName: "name",
            args: [],
            abi: Ci
          },
          {
            address: e,
            functionName: "symbol",
            args: [],
            abi: Ci
          },
          {
            address: e,
            functionName: "balanceOf",
            args: [
              r
            ],
            abi: Ci
          },
          {
            address: e,
            functionName: "decimals",
            args: [],
            abi: Ci
          }
        ]
      });
      return {
        name: i,
        symbol: o,
        decimals: c,
        balance: a && c ? Vu(a, c) : "0"
      };
    }
  };
  Wo = {
    adapters: {}
  };
  ch = {
    state: Wo,
    initialize(t) {
      Wo.adapters = {
        ...t
      };
    },
    get(t) {
      return Wo.adapters[t];
    }
  };
  so = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0,
    sui: void 0,
    stacks: void 0,
    ton: void 0
  };
  wt = Re({
    providers: {
      ...so
    },
    providerIds: {
      ...so
    }
  });
  xe = {
    state: wt,
    subscribeKey(t, e) {
      return tt(wt, t, e);
    },
    subscribe(t) {
      return et(wt, () => {
        t(wt);
      });
    },
    subscribeProviders(t) {
      return et(wt.providers, () => t(wt.providers));
    },
    setProvider(t, e) {
      t && e && (wt.providers[t] = Qr(e));
    },
    getProvider(t) {
      if (t) return wt.providers[t];
    },
    setProviderId(t, e) {
      e && (wt.providerIds[t] = e);
    },
    getProviderId(t) {
      if (t) return wt.providerIds[t];
    },
    reset() {
      wt.providers = {
        ...so
      }, wt.providerIds = {
        ...so
      };
    },
    resetChain(t) {
      wt.providers[t] = void 0, wt.providerIds[t] = void 0;
    }
  };
  nm = {
    async getTokenList(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = await re.fetchSwapTokens({
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
      const t = m.state.activeCaipNetwork;
      if (!t) return null;
      try {
        switch (t.chainNamespace) {
          case "solana":
            const e = (_a2 = await (z == null ? void 0 : z.estimateGas({
              chainNamespace: "solana"
            }))) == null ? void 0 : _a2.toString();
            return {
              standard: e,
              fast: e,
              instant: e
            };
          case "eip155":
          default:
            return await re.fetchGasPrice({
              chainId: t.caipNetworkId
            });
        }
      } catch {
        return null;
      }
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e, sourceTokenAmount: s, sourceTokenDecimals: n }) {
      const r = await re.fetchSwapAllowance({
        tokenAddress: t,
        userAddress: e
      });
      if ((r == null ? void 0 : r.allowance) && s && n) {
        const i = z.parseUnits(s, n) || 0;
        return BigInt(r.allowance) >= i;
      }
      return false;
    },
    async getMyTokensWithBalance(t) {
      var _a2;
      const e = await kc.getMyTokensWithBalance({
        forceUpdate: t,
        caipNetwork: m.state.activeCaipNetwork,
        address: (_a2 = m.getAccountData()) == null ? void 0 : _a2.address
      });
      return m.setAccountProp("tokenBalance", e, m.state.activeChain), this.mapBalancesToSwapTokens(e);
    },
    mapBalancesToSwapTokens(t) {
      return (t == null ? void 0 : t.map((e) => ({
        ...e,
        address: (e == null ? void 0 : e.address) ? e.address : ah(),
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
  ye = Re({
    tokenBalances: [],
    loading: false
  });
  rm = {
    state: ye,
    subscribe(t) {
      return et(ye, () => t(ye));
    },
    subscribeKey(t, e) {
      return tt(ye, t, e);
    },
    setToken(t) {
      t && (ye.token = Qr(t));
    },
    setTokenAmount(t) {
      ye.sendTokenAmount = t;
    },
    setReceiverAddress(t) {
      ye.receiverAddress = t;
    },
    setReceiverProfileImageUrl(t) {
      ye.receiverProfileImageUrl = t;
    },
    setReceiverProfileName(t) {
      ye.receiverProfileName = t;
    },
    setNetworkBalanceInUsd(t) {
      ye.networkBalanceInUSD = t;
    },
    setLoading(t) {
      ye.loading = t;
    },
    getSdkEventProperties(t) {
      var _a2, _b2;
      return {
        message: Y.parseError(t),
        isSmartAccount: Jt(m.state.activeChain) === Ms.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_a2 = ye.token) == null ? void 0 : _a2.symbol) || "",
        amount: ye.sendTokenAmount ?? 0,
        network: ((_b2 = m.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
      };
    },
    async sendToken() {
      var _a2;
      try {
        switch (ue.setLoading(true), (_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) {
          case "eip155":
            await ue.sendEvmToken();
            return;
          case "solana":
            await ue.sendSolanaToken();
            return;
          default:
            throw new Error("Unsupported chain");
        }
      } catch (t) {
        throw Ls.isUserRejectedRequestError(t) ? new sh(t) : t;
      } finally {
        ue.setLoading(false);
      }
    },
    async sendEvmToken() {
      var _a2, _b2, _c2;
      const t = m.state.activeChain;
      if (!t) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
      const e = Jt(t);
      if (!ue.state.sendTokenAmount || !ue.state.receiverAddress) throw new Error("An amount and receiver address are required");
      if (!ue.state.token) throw new Error("A token is required");
      if ((_a2 = ue.state.token) == null ? void 0 : _a2.address) {
        de.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === Ms.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ue.state.token.address,
            amount: ue.state.sendTokenAmount,
            network: ((_b2 = m.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId) || ""
          }
        });
        const { hash: s } = await ue.sendERC20Token({
          receiverAddress: ue.state.receiverAddress,
          tokenAddress: ue.state.token.address,
          sendTokenAmount: ue.state.sendTokenAmount,
          decimals: ue.state.token.quantity.decimals
        });
        s && (ye.hash = s);
      } else {
        de.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: e === Ms.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ue.state.token.symbol || "",
            amount: ue.state.sendTokenAmount,
            network: ((_c2 = m.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || ""
          }
        });
        const { hash: s } = await ue.sendNativeToken({
          receiverAddress: ue.state.receiverAddress,
          sendTokenAmount: ue.state.sendTokenAmount,
          decimals: ue.state.token.quantity.decimals
        });
        s && (ye.hash = s);
      }
    },
    async fetchTokenBalance(t) {
      var _a2, _b2, _c2;
      ye.loading = true;
      const e = m.state.activeChain, s = (_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, n = (_b2 = m.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, r = ((_c2 = m.getAccountData(e)) == null ? void 0 : _c2.caipAddress) ?? m.state.activeCaipAddress, i = r ? Y.getPlainAddress(r) : void 0;
      if (ye.lastRetry && !Y.isAllowedRetry(ye.lastRetry, 30 * he.ONE_SEC_MS)) return ye.loading = false, [];
      try {
        if (i && s && n) {
          const o = await kc.getMyTokensWithBalance();
          return ye.tokenBalances = o, ye.lastRetry = void 0, o;
        }
      } catch (o) {
        ye.lastRetry = Date.now(), t == null ? void 0 : t(o), ys.showError("Token Balance Unavailable");
      } finally {
        ye.loading = false;
      }
      return [];
    },
    fetchNetworkBalance() {
      if (ye.tokenBalances.length === 0) return;
      const t = nm.mapBalancesToSwapTokens(ye.tokenBalances);
      if (!t) return;
      const e = t.find((s) => s.address === ah());
      e && (ye.networkBalanceInUSD = e ? th.multiply(e.quantity.numeric, e.price).toString() : "0");
    },
    async sendNativeToken(t) {
      var _a2, _b2, _c2, _d3;
      se.pushTransactionStack({});
      const e = t.receiverAddress, s = (_a2 = m.getAccountData()) == null ? void 0 : _a2.address, n = z.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), i = await z.sendTransaction({
        chainNamespace: P.CHAIN.EVM,
        to: e,
        address: s,
        data: "0x",
        value: n ?? BigInt(0)
      });
      return de.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: Jt("eip155") === Ms.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b2 = ue.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: t.sendTokenAmount,
          network: ((_c2 = m.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: i || ""
        }
      }), (_d3 = z._getClient()) == null ? void 0 : _d3.updateBalance("eip155"), ue.resetSend(), {
        hash: i
      };
    },
    async sendERC20Token(t) {
      var _a2, _b2, _c2;
      se.pushTransactionStack({
        onSuccess() {
          se.replace("Account");
        }
      });
      const e = z.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), s = (_a2 = m.getAccountData()) == null ? void 0 : _a2.address;
      if (s && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
        const n = Y.getPlainAddress(t.tokenAddress);
        if (!n) throw new Error("SendController:sendERC20Token - tokenAddress is required");
        const r = await z.writeContract({
          fromAddress: s,
          tokenAddress: n,
          args: [
            t.receiverAddress,
            e ?? BigInt(0)
          ],
          method: "transfer",
          abi: wg.getERC20Abi(n),
          chainNamespace: P.CHAIN.EVM
        });
        return de.sendEvent({
          type: "track",
          event: "SEND_SUCCESS",
          properties: {
            isSmartAccount: Jt("eip155") === Ms.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((_b2 = ue.state.token) == null ? void 0 : _b2.symbol) || "",
            amount: t.sendTokenAmount,
            network: ((_c2 = m.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
            hash: r || ""
          }
        }), ue.resetSend(), {
          hash: r
        };
      }
      return {
        hash: void 0
      };
    },
    async sendSolanaToken() {
      var _a2, _b2, _c2;
      if (!ue.state.sendTokenAmount || !ue.state.receiverAddress) throw new Error("An amount and receiver address are required");
      se.pushTransactionStack({
        onSuccess() {
          se.replace("Account");
        }
      });
      let t;
      ue.state.token && ue.state.token.address !== he.SOLANA_NATIVE_TOKEN_ADDRESS && (Y.isCaipAddress(ue.state.token.address) ? t = Y.getPlainAddress(ue.state.token.address) : t = ue.state.token.address);
      const e = await z.sendTransaction({
        chainNamespace: "solana",
        tokenMint: t,
        to: ue.state.receiverAddress,
        value: ue.state.sendTokenAmount
      });
      e && (ye.hash = e), (_a2 = z._getClient()) == null ? void 0 : _a2.updateBalance("solana"), de.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: false,
          token: ((_b2 = ue.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: ue.state.sendTokenAmount,
          network: ((_c2 = m.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "",
          hash: e || ""
        }
      }), ue.resetSend();
    },
    resetSend() {
      ye.token = void 0, ye.sendTokenAmount = void 0, ye.receiverAddress = void 0, ye.receiverProfileImageUrl = void 0, ye.receiverProfileName = void 0, ye.loading = false, ye.tokenBalances = [];
    }
  };
  ue = Xt(rm);
  jo = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    user: void 0,
    preferredAccountType: void 0
  };
  Ni = {
    caipNetwork: void 0,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
  };
  G = Re({
    chains: xg(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: false,
    universalAdapter: {
      connectionControllerClient: void 0
    },
    isSwitchingNamespace: false
  });
  lh = {
    state: G,
    subscribe(t) {
      return et(G, () => {
        t(G);
      });
    },
    subscribeKey(t, e) {
      return tt(G, t, e);
    },
    subscribeAccountStateProp(t, e, s) {
      var _a2;
      const n = s || G.activeChain;
      return n ? tt(((_a2 = G.chains.get(n)) == null ? void 0 : _a2.accountState) || {}, t, e) : () => {
      };
    },
    subscribeChainProp(t, e, s) {
      let n;
      return et(G.chains, () => {
        var _a2;
        const r = s || G.activeChain;
        if (r) {
          const i = (_a2 = G.chains.get(r)) == null ? void 0 : _a2[t];
          n !== i && (n = i, e(i));
        }
      });
    },
    initialize(t, e, s) {
      const { chainId: n, namespace: r } = L.getActiveNetworkProps(), i = e == null ? void 0 : e.find((d) => d.id.toString() === (n == null ? void 0 : n.toString())), a = t.find((d) => (d == null ? void 0 : d.namespace) === r) || (t == null ? void 0 : t[0]), c = t.map((d) => d.namespace).filter((d) => d !== void 0), l = U.state.enableEmbedded ? /* @__PURE__ */ new Set([
        ...c
      ]) : /* @__PURE__ */ new Set([
        ...(e == null ? void 0 : e.map((d) => d.chainNamespace)) ?? []
      ]);
      ((t == null ? void 0 : t.length) === 0 || !a) && (G.noAdapters = true), G.noAdapters || (G.activeChain = a == null ? void 0 : a.namespace, G.activeCaipNetwork = i, m.setChainNetworkData(a == null ? void 0 : a.namespace, {
        caipNetwork: i
      }), G.activeChain && as.set({
        activeChain: a == null ? void 0 : a.namespace
      })), l.forEach((d) => {
        const u = e == null ? void 0 : e.filter((g) => g.chainNamespace === d), h = L.getPreferredAccountTypes() || {}, f = {
          ...U.state.defaultAccountTypes,
          ...h
        };
        m.state.chains.set(d, {
          namespace: d,
          networkState: Re({
            ...Ni,
            caipNetwork: u == null ? void 0 : u[0]
          }),
          accountState: Re({
            ...jo,
            preferredAccountType: f[d]
          }),
          caipNetworks: u ?? [],
          ...s
        }), m.setRequestedCaipNetworks(u ?? [], d);
      });
    },
    removeAdapter(t) {
      var _a2, _b2;
      if (G.activeChain === t) {
        const e = Array.from(G.chains.entries()).find(([s]) => s !== t);
        if (e) {
          const s = (_b2 = (_a2 = e[1]) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0];
          s && m.setActiveCaipNetwork(s);
        }
      }
      G.chains.delete(t);
    },
    addAdapter(t, { connectionControllerClient: e }, s) {
      if (!t.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
      G.chains.set(t.namespace, {
        namespace: t.namespace,
        networkState: {
          ...Ni,
          caipNetwork: s[0]
        },
        accountState: {
          ...jo
        },
        caipNetworks: s,
        connectionControllerClient: e
      }), m.setRequestedCaipNetworks((s == null ? void 0 : s.filter((n) => n.chainNamespace === t.namespace)) ?? [], t.namespace);
    },
    addNetwork(t) {
      var _a2;
      const e = G.chains.get(t.chainNamespace);
      if (e) {
        const s = [
          ...e.caipNetworks || []
        ];
        ((_a2 = e.caipNetworks) == null ? void 0 : _a2.find((n) => n.id === t.id)) || s.push(t), G.chains.set(t.chainNamespace, {
          ...e,
          caipNetworks: s
        }), m.setRequestedCaipNetworks(s, t.chainNamespace), q.filterByNamespace(t.chainNamespace, true);
      }
    },
    removeNetwork(t, e) {
      var _a2, _b2, _c2;
      const s = G.chains.get(t);
      if (s) {
        const n = ((_a2 = G.activeCaipNetwork) == null ? void 0 : _a2.id) === e, r = [
          ...((_b2 = s.caipNetworks) == null ? void 0 : _b2.filter((i) => i.id !== e)) || []
        ];
        n && ((_c2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _c2[0]) && m.setActiveCaipNetwork(s.caipNetworks[0]), G.chains.set(t, {
          ...s,
          caipNetworks: r
        }), m.setRequestedCaipNetworks(r || [], t), r.length === 0 && q.filterByNamespace(t, false);
      }
    },
    setAdapterNetworkState(t, e) {
      const s = G.chains.get(t);
      s && (s.networkState = {
        ...s.networkState || Ni,
        ...e
      }, G.chains.set(t, s));
    },
    setChainAccountData(t, e, s = true) {
      if (!t) throw new Error("Chain is required to update chain account data");
      const n = G.chains.get(t);
      if (n) {
        const r = {
          ...n.accountState || jo,
          ...e
        };
        G.chains.set(t, {
          ...n,
          accountState: r
        }), (G.chains.size === 1 || G.activeChain === t) && e.caipAddress && (G.activeCaipAddress = e.caipAddress);
      }
    },
    setChainNetworkData(t, e) {
      if (!t) return;
      const s = G.chains.get(t);
      if (s) {
        const n = {
          ...s.networkState || Ni,
          ...e
        };
        G.chains.set(t, {
          ...s,
          networkState: n
        });
      }
    },
    setAccountProp(t, e, s, n = true) {
      m.setChainAccountData(s, {
        [t]: e
      }, n);
    },
    setActiveNamespace(t) {
      var _a2, _b2;
      G.activeChain = t;
      const e = t ? G.chains.get(t) : void 0, s = (_a2 = e == null ? void 0 : e.networkState) == null ? void 0 : _a2.caipNetwork;
      (s == null ? void 0 : s.id) && t && (G.activeCaipAddress = (_b2 = e == null ? void 0 : e.accountState) == null ? void 0 : _b2.caipAddress, G.activeCaipNetwork = s, m.setChainNetworkData(t, {
        caipNetwork: s
      }), L.setActiveCaipNetworkId(s == null ? void 0 : s.caipNetworkId), as.set({
        activeChain: t,
        selectedNetworkId: s == null ? void 0 : s.caipNetworkId
      }));
    },
    setActiveCaipNetwork(t) {
      var _a2, _b2;
      if (!t) return;
      const e = G.activeChain === t.chainNamespace;
      e || m.setIsSwitchingNamespace(true);
      const s = G.chains.get(t.chainNamespace);
      G.activeChain = t.chainNamespace, G.activeCaipNetwork = t, m.setChainNetworkData(t.chainNamespace, {
        caipNetwork: t
      });
      let n = (_a2 = s == null ? void 0 : s.accountState) == null ? void 0 : _a2.address;
      if (n) G.activeCaipAddress = `${t.chainNamespace}:${t.id}:${n}`;
      else if (e && G.activeCaipAddress) {
        const { address: i } = Qe.parseCaipAddress(G.activeCaipAddress);
        n = i, G.activeCaipAddress = `${t.caipNetworkId}:${n}`;
      } else G.activeCaipAddress = void 0;
      m.setChainAccountData(t.chainNamespace, {
        address: n,
        caipAddress: G.activeCaipAddress
      }), ue.resetSend(), as.set({
        activeChain: G.activeChain,
        selectedNetworkId: (_b2 = G.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId
      }), L.setActiveCaipNetworkId(t.caipNetworkId), !m.checkIfSupportedNetwork(t.chainNamespace) && U.state.enableNetworkSwitch && !U.state.allowUnsupportedChain && !z.state.wcBasic && m.showUnsupportedChainUI();
    },
    addCaipNetwork(t) {
      var _a2;
      if (!t) return;
      const e = G.chains.get(t.chainNamespace);
      e && ((_a2 = e == null ? void 0 : e.caipNetworks) == null ? void 0 : _a2.push(t));
    },
    async switchActiveNamespace(t) {
      var _a2;
      if (!t) return;
      const e = t !== m.state.activeChain, s = (_a2 = m.getNetworkData(t)) == null ? void 0 : _a2.caipNetwork, n = m.getCaipNetworkByNamespace(t, s == null ? void 0 : s.id);
      e && n && await m.switchActiveNetwork(n);
    },
    async switchActiveNetwork(t, { throwOnFailure: e = false } = {}) {
      var _a2;
      const s = m.state.activeChain;
      if (!s) throw new Error("ChainController:switchActiveNetwork - namespace is required");
      const n = xe.getProviderId(G.activeChain) === "AUTH", r = (_a2 = m.getAccountData(s)) == null ? void 0 : _a2.address, i = P.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t.chainNamespace);
      try {
        if (r && t.chainNamespace === s || n && i) {
          const o = ch.get(t.chainNamespace);
          if (!o) throw new Error("Adapter not found");
          await o.switchNetwork({
            caipNetwork: t
          });
        }
        m.setActiveCaipNetwork(t);
      } catch (o) {
        if (e) throw o;
      }
      de.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: {
          network: t.caipNetworkId
        }
      });
    },
    getConnectionControllerClient(t) {
      const e = t || G.activeChain;
      if (!e) throw new Error("Chain is required to get connection controller client");
      const s = G.chains.get(e);
      if (!(s == null ? void 0 : s.connectionControllerClient)) throw new Error("ConnectionController client not set");
      return s.connectionControllerClient;
    },
    getNetworkProp(t, e) {
      var _a2;
      const s = (_a2 = G.chains.get(e)) == null ? void 0 : _a2.networkState;
      if (s) return s[t];
    },
    getRequestedCaipNetworks(t) {
      const e = G.chains.get(t), { approvedCaipNetworkIds: s = [], requestedCaipNetworks: n = [] } = (e == null ? void 0 : e.networkState) || {};
      return Y.sortRequestedNetworks(s, n).filter((o) => o == null ? void 0 : o.id);
    },
    getAllRequestedCaipNetworks() {
      const t = [];
      return G.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
        const s = m.getRequestedCaipNetworks(e.namespace);
        t.push(...s);
      }), t;
    },
    setRequestedCaipNetworks(t, e) {
      m.setAdapterNetworkState(e, {
        requestedCaipNetworks: t
      });
      const n = m.getAllRequestedCaipNetworks().map((i) => i.chainNamespace), r = Array.from(new Set(n));
      q.filterByNamespaces(r);
    },
    getAllApprovedCaipNetworkIds() {
      const t = [];
      return G.chains.forEach((e) => {
        if (!e.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
        const s = m.getApprovedCaipNetworkIds(e.namespace);
        t.push(...s);
      }), t;
    },
    getActiveCaipNetwork(t) {
      var _a2, _b2;
      return t ? (_b2 = (_a2 = G.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b2.caipNetwork : G.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return G.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(t) {
      var _a2, _b2;
      return ((_b2 = (_a2 = G.chains.get(t)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b2.approvedCaipNetworkIds) || [];
    },
    setApprovedCaipNetworksData(t, e) {
      m.setAdapterNetworkState(t, e);
    },
    checkIfSupportedNetwork(t, e) {
      var _a2;
      const s = e || ((_a2 = G.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId), n = m.getRequestedCaipNetworks(t);
      return n.length ? n == null ? void 0 : n.some((r) => r.caipNetworkId === s) : true;
    },
    checkIfSupportedChainId(t) {
      var _a2;
      return G.activeChain ? (_a2 = m.getRequestedCaipNetworks(G.activeChain)) == null ? void 0 : _a2.some((s) => s.id === t) : true;
    },
    checkIfSmartAccountEnabled() {
      var _a2, _b2, _c2;
      const t = Zu.caipNetworkIdToNumber((_a2 = G.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
      return !G.activeChain || !t ? false : !!((_c2 = ((_b2 = Rg.get(ji.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : _b2.split(",")) || []) == null ? void 0 : _c2.includes(t.toString()));
    },
    showUnsupportedChainUI() {
      pe.open({
        view: "UnsupportedChain"
      });
    },
    checkIfNamesSupported() {
      const t = G.activeCaipNetwork;
      return !!((t == null ? void 0 : t.chainNamespace) && he.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
    },
    resetNetwork(t) {
      m.setAdapterNetworkState(t, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: true
      });
    },
    resetAccount(t) {
      var _a2, _b2;
      const e = t;
      if (!e) throw new Error("Chain is required to set account prop");
      const s = (_b2 = (_a2 = m.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.preferredAccountType, n = U.state.defaultAccountTypes[e];
      G.activeCaipAddress = void 0, m.setChainAccountData(e, {
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
      }), q.removeConnectorId(e);
    },
    setIsSwitchingNamespace(t) {
      G.isSwitchingNamespace = t;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      var _a2, _b2;
      const t = [];
      let e;
      if (G.chains.forEach((s) => {
        P.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((n) => n === s.namespace) && s.namespace && t.push(s.namespace);
      }), t.length > 0) {
        const s = t[0];
        return e = s ? (_b2 = (_a2 = G.chains.get(s)) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b2[0] : void 0, e;
      }
    },
    getAccountData(t) {
      var _a2;
      const e = t || G.activeChain;
      if (e) return (_a2 = m.state.chains.get(e)) == null ? void 0 : _a2.accountState;
    },
    getNetworkData(t) {
      var _a2;
      const e = t || G.activeChain;
      if (e) return (_a2 = m.state.chains.get(e)) == null ? void 0 : _a2.networkState;
    },
    getCaipNetworkByNamespace(t, e) {
      var _a2, _b2, _c2;
      if (!t) return;
      const s = m.state.chains.get(t), n = (_a2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _a2.find((r) => r.id.toString() === (e == null ? void 0 : e.toString()));
      return n || ((_b2 = s == null ? void 0 : s.networkState) == null ? void 0 : _b2.caipNetwork) || ((_c2 = s == null ? void 0 : s.caipNetworks) == null ? void 0 : _c2[0]);
    },
    getRequestedCaipNetworkIds() {
      const t = q.state.filterByNamespace;
      return (t ? [
        G.chains.get(t)
      ] : Array.from(G.chains.values())).flatMap((s) => (s == null ? void 0 : s.caipNetworks) || []).map((s) => s.caipNetworkId);
    },
    getCaipNetworks(t) {
      return t ? m.getRequestedCaipNetworks(t) : m.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(t, e) {
      return lh.getCaipNetworks(e).find((s) => s.id.toString() === t.toString() || s.caipNetworkId.toString() === t.toString());
    },
    setLastConnectedSIWECaipNetwork(t) {
      G.lastConnectedSIWECaipNetwork = t;
    },
    getLastConnectedSIWECaipNetwork() {
      return G.lastConnectedSIWECaipNetwork;
    },
    async fetchTokenBalance(t) {
      var _a2, _b2;
      const e = m.getAccountData();
      if (!e) return [];
      const s = (_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, n = (_b2 = m.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, r = m.state.activeCaipAddress, i = r ? Y.getPlainAddress(r) : void 0;
      if (m.setAccountProp("balanceLoading", true, n), e.lastRetry && !Y.isAllowedRetry(e.lastRetry, 30 * he.ONE_SEC_MS)) return m.setAccountProp("balanceLoading", false, n), [];
      try {
        if (i && s && n) {
          const o = await kc.getMyTokensWithBalance();
          return m.setAccountProp("tokenBalance", o, n), m.setAccountProp("lastRetry", void 0, n), m.setAccountProp("balanceLoading", false, n), o;
        }
      } catch (o) {
        m.setAccountProp("lastRetry", Date.now(), n), t == null ? void 0 : t(o), ys.showError("Token Balance Unavailable");
      } finally {
        m.setAccountProp("balanceLoading", false, n);
      }
      return [];
    },
    isCaipNetworkDisabled(t) {
      var _a2;
      const e = t.chainNamespace, s = !!((_a2 = m.getAccountData(e)) == null ? void 0 : _a2.caipAddress), n = m.getAllApprovedCaipNetworkIds(), r = m.getNetworkProp("supportsAllNetworks", e) !== false, i = q.getConnectorId(e), o = q.getAuthConnector(), a = i === P.CONNECTOR_ID.AUTH && o;
      return !s || r || a ? false : !(n == null ? void 0 : n.includes(t.caipNetworkId));
    }
  };
  m = Xt(lh);
  im = {
    onSwitchNetwork({ network: t, ignoreSwitchConfirmation: e = false }) {
      var _a2, _b2;
      const s = m.state.activeCaipNetwork, n = m.state.activeChain, r = se.state.data;
      if (t.id === (s == null ? void 0 : s.id)) return;
      const o = !!((_a2 = m.getAccountData(n)) == null ? void 0 : _a2.address), a = !!((_b2 = m.getAccountData(t.chainNamespace)) == null ? void 0 : _b2.address), c = t.chainNamespace !== n, d = q.getConnectorId(n) === P.CONNECTOR_ID.AUTH, u = P.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((h) => h === t.chainNamespace);
      e || d && u ? se.push("SwitchNetwork", {
        ...r,
        network: t
      }) : o && c && !a ? se.push("SwitchActiveChain", {
        switchToChain: t.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network: t
      }) : se.push("SwitchNetwork", {
        ...r,
        network: t
      });
    }
  };
  yt = Re({
    loading: false,
    loadingNamespaceMap: /* @__PURE__ */ new Map(),
    open: false,
    shake: false,
    namespace: void 0
  });
  om = {
    state: yt,
    subscribe(t) {
      return et(yt, () => t(yt));
    },
    subscribeKey(t, e) {
      return tt(yt, t, e);
    },
    async open(t) {
      var _a2, _b2;
      const e = t == null ? void 0 : t.namespace, s = m.state.activeChain, n = e && e !== s, r = (_a2 = m.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : _a2.caipAddress, i = m.state.noAdapters;
      if (z.state.wcBasic ? Z.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      }) : await Z.prefetch(), q.setFilterByNamespace(t == null ? void 0 : t.namespace), pe.setLoading(true, e), e && n) {
        const o = ((_b2 = m.getNetworkData(e)) == null ? void 0 : _b2.caipNetwork) || m.getRequestedCaipNetworks(e)[0];
        o && (i ? (await m.switchActiveNetwork(o), se.push("ConnectingWalletConnectBasic")) : im.onSwitchNetwork({
          network: o,
          ignoreSwitchConfirmation: true
        }));
      } else U.state.manualWCControl || i && !r ? Y.isMobile() ? se.reset("AllWallets") : se.reset("ConnectingWalletConnectBasic") : (t == null ? void 0 : t.view) ? se.reset(t.view, t.data) : r ? se.reset("Account") : se.reset("Connect");
      yt.open = true, as.set({
        open: true
      }), de.sendEvent({
        type: "track",
        event: "MODAL_OPEN",
        properties: {
          connected: !!r
        }
      });
    },
    close() {
      const t = U.state.enableEmbedded, e = !!m.state.activeCaipAddress;
      yt.open && de.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: {
          connected: e
        }
      }), yt.open = false, se.reset("Connect"), pe.clearLoading(), t ? e ? se.replace("Account") : se.push("Connect") : as.set({
        open: false
      }), z.resetUri();
    },
    setLoading(t, e) {
      e && yt.loadingNamespaceMap.set(e, t), yt.loading = t, as.set({
        loading: t
      });
    },
    clearLoading() {
      yt.loadingNamespaceMap.clear(), yt.loading = false, as.set({
        loading: false
      });
    },
    shake() {
      yt.shake || (yt.shake = true, setTimeout(() => {
        yt.shake = false;
      }, 500));
    }
  };
  pe = Xt(om);
  jr = {
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
  Ua = {
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
  am = {
    providers: rh,
    selectedProvider: null,
    error: null,
    purchaseCurrency: jr,
    paymentCurrency: Ua,
    purchaseCurrencies: [
      jr
    ],
    paymentCurrencies: [],
    quotesLoading: false
  };
  be = Re(am);
  cm = {
    state: be,
    subscribe(t) {
      return et(be, () => t(be));
    },
    subscribeKey(t, e) {
      return tt(be, t, e);
    },
    setSelectedProvider(t) {
      var _a2, _b2;
      if (t && t.name === "meld") {
        const e = m.state.activeChain, s = e === P.CHAIN.SOLANA ? "SOL" : "USDC", n = e ? ((_b2 = (_a2 = m.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address) ?? "" : "", r = new URL(t.url);
        r.searchParams.append("publicKey", Pg), r.searchParams.append("destinationCurrencyCode", s), r.searchParams.append("walletAddress", n), r.searchParams.append("externalCustomerId", U.state.projectId), be.selectedProvider = {
          ...t,
          url: r.toString()
        };
      } else be.selectedProvider = t;
    },
    setOnrampProviders(t) {
      if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
        const e = t, s = rh.filter((n) => e.includes(n.name));
        be.providers = s;
      } else be.providers = [];
    },
    setPurchaseCurrency(t) {
      be.purchaseCurrency = t;
    },
    setPaymentCurrency(t) {
      be.paymentCurrency = t;
    },
    setPurchaseAmount(t) {
      $a.state.purchaseAmount = t;
    },
    setPaymentAmount(t) {
      $a.state.paymentAmount = t;
    },
    async getAvailableCurrencies() {
      const t = await re.getOnrampOptions();
      be.purchaseCurrencies = t.purchaseCurrencies, be.paymentCurrencies = t.paymentCurrencies, be.paymentCurrency = t.paymentCurrencies[0] || Ua, be.purchaseCurrency = t.purchaseCurrencies[0] || jr, await Z.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)), await Z.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
    },
    async getQuote() {
      var _a2, _b2;
      be.quotesLoading = true;
      try {
        const t = await re.getOnrampQuote({
          purchaseCurrency: be.purchaseCurrency,
          paymentCurrency: be.paymentCurrency,
          amount: ((_a2 = be.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
          network: (_b2 = be.purchaseCurrency) == null ? void 0 : _b2.symbol
        });
        return be.quotesLoading = false, be.purchaseAmount = Number(t == null ? void 0 : t.purchaseAmount.amount), t;
      } catch (t) {
        return be.error = t.message, be.quotesLoading = false, null;
      } finally {
        be.quotesLoading = false;
      }
    },
    resetState() {
      be.selectedProvider = null, be.error = null, be.purchaseCurrency = jr, be.paymentCurrency = Ua, be.purchaseCurrencies = [
        jr
      ], be.paymentCurrencies = [], be.paymentAmount = void 0, be.purchaseAmount = void 0, be.quotesLoading = false;
    }
  };
  $a = Xt(cm);
  var lm = Object.defineProperty, dm = (t, e, s) => e in t ? lm(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Nl = (t, e, s) => dm(t, typeof e != "symbol" ? e + "" : e, s);
  let um = class extends Cr {
    constructor(e) {
      super(), this.opts = e, Nl(this, "protocol", "wc"), Nl(this, "version", 2);
    }
  };
  var hm = Object.defineProperty, pm = (t, e, s) => e in t ? hm(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, fm = (t, e, s) => pm(t, e + "", s);
  let gm = class extends Cr {
    constructor(e, s) {
      super(), this.core = e, this.logger = s, fm(this, "records", /* @__PURE__ */ new Map());
    }
  }, mm = class {
    constructor(e, s) {
      this.logger = e, this.core = s;
    }
  }, wm = class extends Cr {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, ym = class extends Cr {
    constructor(e) {
      super();
    }
  }, bm = class {
    constructor(e, s, n, r) {
      this.core = e, this.logger = s, this.name = n;
    }
  }, Em = class extends Cr {
    constructor(e, s) {
      super(), this.relayer = e, this.logger = s;
    }
  }, Cm = class extends Cr {
    constructor(e, s) {
      super(), this.core = e, this.logger = s;
    }
  }, vm = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.store = n;
    }
  };
  class Am {
    constructor(e, s) {
      this.projectId = e, this.logger = s;
    }
  }
  let Im = class {
    constructor(e, s, n) {
      this.core = e, this.logger = s, this.telemetryEnabled = n;
    }
  };
  var Nm = Object.defineProperty, Sm = (t, e, s) => e in t ? Nm(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Sl = (t, e, s) => Sm(t, typeof e != "symbol" ? e + "" : e, s);
  let _m = class {
    constructor(e) {
      this.opts = e, Sl(this, "protocol", "wc"), Sl(this, "version", 2);
    }
  }, Tm = class {
    constructor(e) {
      this.client = e;
    }
  };
  const Om = "0.1.1";
  function km() {
    return Om;
  }
  class De extends Error {
    constructor(e, s = {}) {
      const n = (() => {
        var _a2;
        if (s.cause instanceof De) {
          if (s.cause.details) return s.cause.details;
          if (s.cause.shortMessage) return s.cause.shortMessage;
        }
        return s.cause && "details" in s.cause && typeof s.cause.details == "string" ? s.cause.details : ((_a2 = s.cause) == null ? void 0 : _a2.message) ? s.cause.message : s.details;
      })(), r = s.cause instanceof De && s.cause.docsPath || s.docsPath, o = `https://oxlib.sh${r ?? ""}`, a = [
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
        value: `ox@${km()}`
      }), this.cause = s.cause, this.details = n, this.docs = o, this.docsPath = r, this.shortMessage = e;
    }
    walk(e) {
      return dh(this, e);
    }
  }
  function dh(t, e) {
    return (e == null ? void 0 : e(t)) ? t : t && typeof t == "object" && "cause" in t && t.cause ? dh(t.cause, e) : e ? null : t;
  }
  const xc = BigInt(0), Da = BigInt(1);
  function ui(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Pc(t) {
    if (!ui(t)) throw new Error("Uint8Array expected");
  }
  function ei(t, e) {
    if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
  }
  function Si(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function uh(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? xc : BigInt("0x" + t);
  }
  const hh = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", xm = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function ti(t) {
    if (Pc(t), hh) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += xm[t[s]];
    return e;
  }
  const Ss = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function _l(t) {
    if (t >= Ss._0 && t <= Ss._9) return t - Ss._0;
    if (t >= Ss.A && t <= Ss.F) return t - (Ss.A - 10);
    if (t >= Ss.a && t <= Ss.f) return t - (Ss.a - 10);
  }
  function no(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (hh) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = _l(t.charCodeAt(i)), a = _l(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function Ln(t) {
    return uh(ti(t));
  }
  function ph(t) {
    return Pc(t), uh(ti(Uint8Array.from(t).reverse()));
  }
  function hi(t, e) {
    return no(t.toString(16).padStart(e * 2, "0"));
  }
  function fh(t, e) {
    return hi(t, e).reverse();
  }
  function Vt(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = no(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (ui(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  function ro(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Pc(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  const Ho = (t) => typeof t == "bigint" && xc <= t;
  function Rc(t, e, s) {
    return Ho(t) && Ho(e) && Ho(s) && e <= t && t < s;
  }
  function ur(t, e, s, n) {
    if (!Rc(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function Pm(t) {
    let e;
    for (e = 0; t > xc; t >>= Da, e += 1) ;
    return e;
  }
  const Co = (t) => (Da << BigInt(t)) - Da, zo = (t) => new Uint8Array(t), Tl = (t) => Uint8Array.from(t);
  function Rm(t, e, s) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof s != "function") throw new Error("hmacFn must be a function");
    let n = zo(t), r = zo(t), i = 0;
    const o = () => {
      n.fill(1), r.fill(0), i = 0;
    }, a = (...u) => s(r, n, ...u), c = (u = zo(0)) => {
      r = a(Tl([
        0
      ]), u), n = a(), u.length !== 0 && (r = a(Tl([
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
      return ro(...h);
    };
    return (u, h) => {
      o(), c(u);
      let f;
      for (; !(f = h(l())); ) c();
      return o(), f;
    };
  }
  const Um = {
    bigint: (t) => typeof t == "bigint",
    function: (t) => typeof t == "function",
    boolean: (t) => typeof t == "boolean",
    string: (t) => typeof t == "string",
    stringOrUint8Array: (t) => typeof t == "string" || ui(t),
    isSafeInteger: (t) => Number.isSafeInteger(t),
    array: (t) => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
  };
  function vo(t, e, s = {}) {
    const n = (r, i, o) => {
      const a = Um[i];
      if (typeof a != "function") throw new Error("invalid validator function");
      const c = t[r];
      if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(r) + " is invalid. Expected " + i + ", got " + c);
    };
    for (const [r, i] of Object.entries(e)) n(r, i, false);
    for (const [r, i] of Object.entries(s)) n(r, i, true);
    return t;
  }
  function Ol(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  function $m(t, e) {
    if (Rl(t) > e) throw new sw({
      givenSize: Rl(t),
      maxSize: e
    });
  }
  const _s = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function kl(t) {
    if (t >= _s.zero && t <= _s.nine) return t - _s.zero;
    if (t >= _s.A && t <= _s.F) return t - (_s.A - 10);
    if (t >= _s.a && t <= _s.f) return t - (_s.a - 10);
  }
  function Dm(t, e = {}) {
    const { dir: s, size: n = 32 } = e;
    if (n === 0) return t;
    if (t.length > n) throw new nw({
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
  function gh(t, e) {
    if (gn(t) > e) throw new Vm({
      givenSize: gn(t),
      maxSize: e
    });
  }
  function Bm(t, e) {
    if (typeof e == "number" && e > 0 && e > gn(t) - 1) throw new yh({
      offset: e,
      position: "start",
      size: gn(t)
    });
  }
  function Lm(t, e, s) {
    if (typeof e == "number" && typeof s == "number" && gn(t) !== s - e) throw new yh({
      offset: s,
      position: "end",
      size: gn(t)
    });
  }
  function mh(t, e = {}) {
    const { dir: s, size: n = 32 } = e;
    if (n === 0) return t;
    const r = t.replace("0x", "");
    if (r.length > n * 2) throw new Km({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "Hex"
    });
    return `0x${r[s === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
  }
  const Mm = "#__bigint";
  function Uc(t, e, s) {
    return JSON.stringify(t, (n, r) => typeof r == "bigint" ? r.toString() + Mm : r, s);
  }
  const Fm = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function qm(t, e = {}) {
    const { strict: s = false } = e;
    if (!t) throw new xl(t);
    if (typeof t != "string") throw new xl(t);
    if (s && !/^0x[0-9a-fA-F]*$/.test(t)) throw new Pl(t);
    if (!t.startsWith("0x")) throw new Pl(t);
  }
  function Wm(...t) {
    return `0x${t.reduce((e, s) => e + s.replace("0x", ""), "")}`;
  }
  function $c(t) {
    return t instanceof Uint8Array ? io(t) : Array.isArray(t) ? io(new Uint8Array(t)) : t;
  }
  function io(t, e = {}) {
    let s = "";
    for (let r = 0; r < t.length; r++) s += Fm[t[r]];
    const n = `0x${s}`;
    return typeof e.size == "number" ? (gh(n, e.size), wh(n, e.size)) : n;
  }
  function Vo(t, e = {}) {
    const { signed: s, size: n } = e, r = BigInt(t);
    let i;
    n ? s ? i = (1n << BigInt(n) * 8n - 1n) - 1n : i = 2n ** (BigInt(n) * 8n) - 1n : typeof t == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof i == "bigint" && s ? -i - 1n : 0;
    if (i && r > i || r < o) {
      const l = typeof t == "bigint" ? "n" : "";
      throw new zm({
        max: i ? `${i}${l}` : void 0,
        min: `${o}${l}`,
        signed: s,
        size: n,
        value: `${t}${l}`
      });
    }
    const c = `0x${(s && r < 0 ? (1n << BigInt(n * 8)) + BigInt(r) : r).toString(16)}`;
    return n ? jm(c, n) : c;
  }
  function jm(t, e) {
    return mh(t, {
      dir: "left",
      size: e
    });
  }
  function wh(t, e) {
    return mh(t, {
      dir: "right",
      size: e
    });
  }
  function Us(t, e, s, n = {}) {
    const { strict: r } = n;
    Bm(t, e);
    const i = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (s ?? t.length) * 2)}`;
    return r && Lm(i, e, s), i;
  }
  function gn(t) {
    return Math.ceil((t.length - 2) / 2);
  }
  function Hm(t, e = {}) {
    const { strict: s = false } = e;
    try {
      return qm(t, {
        strict: s
      }), true;
    } catch {
      return false;
    }
  }
  class zm extends De {
    constructor({ max: e, min: s, signed: n, size: r, value: i }) {
      super(`Number \`${i}\` is not in safe${r ? ` ${r * 8}-bit` : ""}${n ? " signed" : " unsigned"} integer range ${e ? `(\`${s}\` to \`${e}\`)` : `(above \`${s}\`)`}`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.IntegerOutOfRangeError"
      });
    }
  }
  class xl extends De {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Uc(e) : e}\` of type \`${typeof e}\` is an invalid hex type.`, {
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
  class Pl extends De {
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
  let Vm = class extends De {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeOverflowError"
      });
    }
  };
  class yh extends De {
    constructor({ offset: e, position: s, size: n }) {
      super(`Slice ${s === "start" ? "starting" : "ending"} at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SliceOffsetOutOfBoundsError"
      });
    }
  }
  let Km = class extends De {
    constructor({ size: e, targetSize: s, type: n }) {
      super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeExceedsPaddingSizeError"
      });
    }
  };
  const Gm = new TextEncoder();
  function Ym(t) {
    if (!(t instanceof Uint8Array)) {
      if (!t) throw new _i(t);
      if (typeof t != "object") throw new _i(t);
      if (!("BYTES_PER_ELEMENT" in t)) throw new _i(t);
      if (t.BYTES_PER_ELEMENT !== 1 || t.constructor.name !== "Uint8Array") throw new _i(t);
    }
  }
  function Jm(t) {
    return t instanceof Uint8Array ? t : typeof t == "string" ? Xm(t) : Zm(t);
  }
  function Zm(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  function Xm(t, e = {}) {
    const { size: s } = e;
    let n = t;
    s && (gh(t, s), n = wh(t, s));
    let r = n.slice(2);
    r.length % 2 && (r = `0${r}`);
    const i = r.length / 2, o = new Uint8Array(i);
    for (let a = 0, c = 0; a < i; a++) {
      const l = kl(r.charCodeAt(c++)), d = kl(r.charCodeAt(c++));
      if (l === void 0 || d === void 0) throw new De(`Invalid byte sequence ("${r[c - 2]}${r[c - 1]}" in "${r}").`);
      o[a] = l * 16 + d;
    }
    return o;
  }
  function Qm(t, e = {}) {
    const { size: s } = e, n = Gm.encode(t);
    return typeof s == "number" ? ($m(n, s), ew(n, s)) : n;
  }
  function ew(t, e) {
    return Dm(t, {
      dir: "right",
      size: e
    });
  }
  function Rl(t) {
    return t.length;
  }
  function tw(t) {
    try {
      return Ym(t), true;
    } catch {
      return false;
    }
  }
  class _i extends De {
    constructor(e) {
      super(`Value \`${typeof e == "object" ? Uc(e) : e}\` of type \`${typeof e}\` is an invalid Bytes value.`, {
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
  class sw extends De {
    constructor({ givenSize: e, maxSize: s }) {
      super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeOverflowError"
      });
    }
  }
  class nw extends De {
    constructor({ size: e, targetSize: s, type: n }) {
      super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeExceedsPaddingSizeError"
      });
    }
  }
  function bh(t, e = {}) {
    const { as: s = typeof t == "string" ? "Hex" : "Bytes" } = e, n = qf(Jm(t));
    return s === "Bytes" ? n : io(n);
  }
  class rw extends Map {
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
  const iw = {
    checksum: new rw(8192)
  }, Ko = iw.checksum;
  function Eh(t, e = {}) {
    const { compressed: s } = e, { prefix: n, x: r, y: i } = t;
    if (s === false || typeof r == "bigint" && typeof i == "bigint") {
      if (n !== 4) throw new Ul({
        prefix: n,
        cause: new uw()
      });
      return;
    }
    if (s === true || typeof r == "bigint" && typeof i > "u") {
      if (n !== 3 && n !== 2) throw new Ul({
        prefix: n,
        cause: new dw()
      });
      return;
    }
    throw new lw({
      publicKey: t
    });
  }
  function ow(t) {
    const e = (() => {
      if (Hm(t)) return Ch(t);
      if (tw(t)) return aw(t);
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
    return Eh(e), e;
  }
  function aw(t) {
    return Ch(io(t));
  }
  function Ch(t) {
    if (t.length !== 132 && t.length !== 130 && t.length !== 68) throw new hw({
      publicKey: t
    });
    if (t.length === 130) {
      const n = BigInt(Us(t, 0, 32)), r = BigInt(Us(t, 32, 64));
      return {
        prefix: 4,
        x: n,
        y: r
      };
    }
    if (t.length === 132) {
      const n = Number(Us(t, 0, 1)), r = BigInt(Us(t, 1, 33)), i = BigInt(Us(t, 33, 65));
      return {
        prefix: n,
        x: r,
        y: i
      };
    }
    const e = Number(Us(t, 0, 1)), s = BigInt(Us(t, 1, 33));
    return {
      prefix: e,
      x: s
    };
  }
  function cw(t, e = {}) {
    Eh(t);
    const { prefix: s, x: n, y: r } = t, { includePrefix: i = true } = e;
    return Wm(i ? Vo(s, {
      size: 1
    }) : "0x", Vo(n, {
      size: 32
    }), typeof r == "bigint" ? Vo(r, {
      size: 32
    }) : "0x");
  }
  class lw extends De {
    constructor({ publicKey: e }) {
      super(`Value \`${Uc(e)}\` is not a valid public key.`, {
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
  class Ul extends De {
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
  class dw extends De {
    constructor() {
      super("Prefix must be 2 or 3 for compressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidCompressedPrefixError"
      });
    }
  }
  class uw extends De {
    constructor() {
      super("Prefix must be 4 for uncompressed public keys."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidUncompressedPrefixError"
      });
    }
  }
  let hw = class extends De {
    constructor({ publicKey: e }) {
      super(`Value \`${e}\` is an invalid public key size.`, {
        metaMessages: [
          "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
          `Received ${gn($c(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidSerializedSizeError"
      });
    }
  };
  const pw = /^0x[a-fA-F0-9]{40}$/;
  function vh(t, e = {}) {
    const { strict: s = true } = e;
    if (!pw.test(t)) throw new $l({
      address: t,
      cause: new mw()
    });
    if (s) {
      if (t.toLowerCase() === t) return;
      if (Ah(t) !== t) throw new $l({
        address: t,
        cause: new ww()
      });
    }
  }
  function Ah(t) {
    if (Ko.has(t)) return Ko.get(t);
    vh(t, {
      strict: false
    });
    const e = t.substring(2).toLowerCase(), s = bh(Qm(e), {
      as: "Bytes"
    }), n = e.split("");
    for (let i = 0; i < 40; i += 2) s[i >> 1] >> 4 >= 8 && n[i] && (n[i] = n[i].toUpperCase()), (s[i >> 1] & 15) >= 8 && n[i + 1] && (n[i + 1] = n[i + 1].toUpperCase());
    const r = `0x${n.join("")}`;
    return Ko.set(t, r), r;
  }
  function fw(t, e = {}) {
    const { checksum: s = false } = e;
    return vh(t), s ? Ah(t) : t;
  }
  function gw(t, e = {}) {
    const s = bh(`0x${cw(t).slice(4)}`).substring(26);
    return fw(`0x${s}`, e);
  }
  class $l extends De {
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
  class mw extends De {
    constructor() {
      super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidInputError"
      });
    }
  }
  class ww extends De {
    constructor() {
      super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidChecksumError"
      });
    }
  }
  const It = BigInt(0), pt = BigInt(1), xn = BigInt(2), yw = BigInt(3), Ih = BigInt(4), Nh = BigInt(5), Sh = BigInt(8);
  function Ct(t, e) {
    const s = t % e;
    return s >= It ? s : e + s;
  }
  function Mt(t, e, s) {
    let n = t;
    for (; e-- > It; ) n *= n, n %= s;
    return n;
  }
  function Ba(t, e) {
    if (t === It) throw new Error("invert: expected non-zero number");
    if (e <= It) throw new Error("invert: expected positive modulus, got " + e);
    let s = Ct(t, e), n = e, r = It, i = pt;
    for (; s !== It; ) {
      const a = n / s, c = n % s, l = r - i * a;
      n = s, s = c, r = i, i = l;
    }
    if (n !== pt) throw new Error("invert: does not exist");
    return Ct(r, e);
  }
  function _h(t, e) {
    const s = (t.ORDER + pt) / Ih, n = t.pow(e, s);
    if (!t.eql(t.sqr(n), e)) throw new Error("Cannot find square root");
    return n;
  }
  function bw(t, e) {
    const s = (t.ORDER - Nh) / Sh, n = t.mul(e, xn), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, xn), r), a = t.mul(i, t.sub(o, t.ONE));
    if (!t.eql(t.sqr(a), e)) throw new Error("Cannot find square root");
    return a;
  }
  function Ew(t) {
    if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
    let e = t - pt, s = 0;
    for (; e % xn === It; ) e /= xn, s++;
    let n = xn;
    const r = Dc(t);
    for (; Dl(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return _h;
    let i = r.pow(n, e);
    const o = (e + pt) / xn;
    return function(c, l) {
      if (c.is0(l)) return l;
      if (Dl(c, l) !== 1) throw new Error("Cannot find square root");
      let d = s, u = c.mul(c.ONE, i), h = c.pow(l, e), f = c.pow(l, o);
      for (; !c.eql(h, c.ONE); ) {
        if (c.is0(h)) return c.ZERO;
        let g = 1, p = c.sqr(h);
        for (; !c.eql(p, c.ONE); ) if (g++, p = c.sqr(p), g === d) throw new Error("Cannot find square root");
        const w = pt << BigInt(d - g - 1), A = c.pow(u, w);
        d = g, u = c.sqr(A), h = c.mul(h, u), f = c.mul(f, A);
      }
      return f;
    };
  }
  function Cw(t) {
    return t % Ih === yw ? _h : t % Sh === Nh ? bw : Ew(t);
  }
  const vw = [
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
  function Aw(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    }, s = vw.reduce((n, r) => (n[r] = "function", n), e);
    return vo(t, s);
  }
  function Iw(t, e, s) {
    if (s < It) throw new Error("invalid exponent, negatives unsupported");
    if (s === It) return t.ONE;
    if (s === pt) return e;
    let n = t.ONE, r = e;
    for (; s > It; ) s & pt && (n = t.mul(n, r)), r = t.sqr(r), s >>= pt;
    return n;
  }
  function Th(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function Dl(t, e) {
    const s = (t.ORDER - pt) / xn, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function Oh(t, e) {
    e !== void 0 && Wf(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function Dc(t, e, s = false, n = {}) {
    if (t <= It) throw new Error("invalid field: expected ORDER > 0, got " + t);
    const { nBitLength: r, nByteLength: i } = Oh(t, e);
    if (i > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o;
    const a = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: r,
      BYTES: i,
      MASK: Co(r),
      ZERO: It,
      ONE: pt,
      create: (c) => Ct(c, t),
      isValid: (c) => {
        if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
        return It <= c && c < t;
      },
      is0: (c) => c === It,
      isOdd: (c) => (c & pt) === pt,
      neg: (c) => Ct(-c, t),
      eql: (c, l) => c === l,
      sqr: (c) => Ct(c * c, t),
      add: (c, l) => Ct(c + l, t),
      sub: (c, l) => Ct(c - l, t),
      mul: (c, l) => Ct(c * l, t),
      pow: (c, l) => Iw(a, c, l),
      div: (c, l) => Ct(c * Ba(l, t), t),
      sqrN: (c) => c * c,
      addN: (c, l) => c + l,
      subN: (c, l) => c - l,
      mulN: (c, l) => c * l,
      inv: (c) => Ba(c, t),
      sqrt: n.sqrt || ((c) => (o || (o = Cw(t)), o(a, c))),
      toBytes: (c) => s ? fh(c, i) : hi(c, i),
      fromBytes: (c) => {
        if (c.length !== i) throw new Error("Field.fromBytes: expected " + i + " bytes, got " + c.length);
        return s ? ph(c) : Ln(c);
      },
      invertBatch: (c) => Th(a, c),
      cmov: (c, l, d) => d ? l : c
    });
    return Object.freeze(a);
  }
  function kh(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function xh(t) {
    const e = kh(t);
    return e + Math.ceil(e / 2);
  }
  function Nw(t, e, s = false) {
    const n = t.length, r = kh(e), i = xh(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? ph(t) : Ln(t), a = Ct(o, e - pt) + pt;
    return s ? fh(a, r) : hi(a, r);
  }
  const Bl = BigInt(0), La = BigInt(1);
  function Go(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function Ph(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function Yo(t, e) {
    Ph(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = Co(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function Ll(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += La);
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
  function Sw(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function _w(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const Jo = /* @__PURE__ */ new WeakMap(), Rh = /* @__PURE__ */ new WeakMap();
  function Zo(t) {
    return Rh.get(t) || 1;
  }
  function Tw(t, e) {
    return {
      constTimeNegate: Go,
      hasPrecomputes(s) {
        return Zo(s) !== 1;
      },
      unsafeLadder(s, n, r = t.ZERO) {
        let i = s;
        for (; n > Bl; ) n & La && (r = r.add(i)), i = i.double(), n >>= La;
        return r;
      },
      precomputeWindow(s, n) {
        const { windows: r, windowSize: i } = Yo(n, e), o = [];
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
        const a = Yo(s, e);
        for (let c = 0; c < a.windows; c++) {
          const { nextN: l, offset: d, isZero: u, isNeg: h, isNegF: f, offsetF: g } = Ll(r, c, a);
          r = l, u ? o = o.add(Go(f, n[g])) : i = i.add(Go(h, n[d]));
        }
        return {
          p: i,
          f: o
        };
      },
      wNAFUnsafe(s, n, r, i = t.ZERO) {
        const o = Yo(s, e);
        for (let a = 0; a < o.windows && r !== Bl; a++) {
          const { nextN: c, offset: l, isZero: d, isNeg: u } = Ll(r, a, o);
          if (r = c, !d) {
            const h = n[l];
            i = i.add(u ? h.negate() : h);
          }
        }
        return i;
      },
      getPrecomputes(s, n, r) {
        let i = Jo.get(n);
        return i || (i = this.precomputeWindow(n, s), s !== 1 && Jo.set(n, r(i))), i;
      },
      wNAFCached(s, n, r) {
        const i = Zo(s);
        return this.wNAF(i, this.getPrecomputes(i, s, r), n);
      },
      wNAFCachedUnsafe(s, n, r, i) {
        const o = Zo(s);
        return o === 1 ? this.unsafeLadder(s, n, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, s, r), n, i);
      },
      setWindowSize(s, n) {
        Ph(n, e), Rh.set(s, n), Jo.delete(s);
      }
    };
  }
  function Ow(t, e, s, n) {
    Sw(s, t), _w(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = Pm(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = Co(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const w = n[p], A = Number(w >> BigInt(f) & l);
        d[A] = d[A].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, w = o; p > 0; p--) w = w.add(d[p]), g = g.add(w);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function Uh(t) {
    return Aw(t.Fp), vo(t, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    }), Object.freeze({
      ...Oh(t.n, t.nBitLength),
      ...t,
      p: t.Fp.ORDER
    });
  }
  function Ml(t) {
    t.lowS !== void 0 && ei("lowS", t.lowS), t.prehash !== void 0 && ei("prehash", t.prehash);
  }
  function kw(t) {
    const e = Uh(t);
    vo(e, {
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
  class xw extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const Ds = {
    Err: xw,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = Ds;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = Si(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? Si(r.length / 2 | 128) : "";
        return Si(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = Ds;
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
        const { Err: e } = Ds;
        if (t < Fs) throw new e("integer: negative integers are not allowed");
        let s = Si(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = Ds;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return Ln(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = Ds, r = Vt("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = Ds, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  };
  function Xo(t, e) {
    return ti(hi(t, e));
  }
  const Fs = BigInt(0), Ve = BigInt(1);
  BigInt(2);
  const Qo = BigInt(3), Pw = BigInt(4);
  function Rw(t) {
    const e = kw(t), { Fp: s } = e, n = Dc(e.n, e.nBitLength), r = e.toBytes || ((v, b, T) => {
      const R = b.toAffine();
      return ro(Uint8Array.from([
        4
      ]), s.toBytes(R.x), s.toBytes(R.y));
    }), i = e.fromBytes || ((v) => {
      const b = v.subarray(1), T = s.fromBytes(b.subarray(0, s.BYTES)), R = s.fromBytes(b.subarray(s.BYTES, 2 * s.BYTES));
      return {
        x: T,
        y: R
      };
    });
    function o(v) {
      const { a: b, b: T } = e, R = s.sqr(v), D = s.mul(R, v);
      return s.add(s.add(D, s.mul(v, b)), T);
    }
    function a(v, b) {
      const T = s.sqr(b), R = o(v);
      return s.eql(T, R);
    }
    if (!a(e.Gx, e.Gy)) throw new Error("bad curve params: generator point");
    const c = s.mul(s.pow(e.a, Qo), Pw), l = s.mul(s.sqr(e.b), BigInt(27));
    if (s.is0(s.add(c, l))) throw new Error("bad curve params: a or b");
    function d(v) {
      return Rc(v, Ve, e.n);
    }
    function u(v) {
      const { allowedPrivateKeyLengths: b, nByteLength: T, wrapPrivateKey: R, n: D } = e;
      if (b && typeof v != "bigint") {
        if (ui(v) && (v = ti(v)), typeof v != "string" || !b.includes(v.length)) throw new Error("invalid private key");
        v = v.padStart(T * 2, "0");
      }
      let M;
      try {
        M = typeof v == "bigint" ? v : Ln(Vt("private key", v, T));
      } catch {
        throw new Error("invalid private key, expected hex or " + T + " bytes, got " + typeof v);
      }
      return R && (M = Ct(M, D)), ur("private key", M, Ve, D), M;
    }
    function h(v) {
      if (!(v instanceof p)) throw new Error("ProjectivePoint expected");
    }
    const f = Ol((v, b) => {
      const { px: T, py: R, pz: D } = v;
      if (s.eql(D, s.ONE)) return {
        x: T,
        y: R
      };
      const M = v.is0();
      b == null && (b = M ? s.ONE : s.inv(D));
      const k = s.mul(T, b), F = s.mul(R, b), j = s.mul(D, b);
      if (M) return {
        x: s.ZERO,
        y: s.ZERO
      };
      if (!s.eql(j, s.ONE)) throw new Error("invZ was invalid");
      return {
        x: k,
        y: F
      };
    }), g = Ol((v) => {
      if (v.is0()) {
        if (e.allowInfinityPoint && !s.is0(v.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: b, y: T } = v.toAffine();
      if (!s.isValid(b) || !s.isValid(T)) throw new Error("bad point: x or y not FE");
      if (!a(b, T)) throw new Error("bad point: equation left != right");
      if (!v.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    class p {
      constructor(b, T, R) {
        if (b == null || !s.isValid(b)) throw new Error("x required");
        if (T == null || !s.isValid(T) || s.is0(T)) throw new Error("y required");
        if (R == null || !s.isValid(R)) throw new Error("z required");
        this.px = b, this.py = T, this.pz = R, Object.freeze(this);
      }
      static fromAffine(b) {
        const { x: T, y: R } = b || {};
        if (!b || !s.isValid(T) || !s.isValid(R)) throw new Error("invalid affine point");
        if (b instanceof p) throw new Error("projective point not allowed");
        const D = (M) => s.eql(M, s.ZERO);
        return D(T) && D(R) ? p.ZERO : new p(T, R, s.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static normalizeZ(b) {
        const T = Th(s, b.map((R) => R.pz));
        return b.map((R, D) => R.toAffine(T[D])).map(p.fromAffine);
      }
      static fromHex(b) {
        const T = p.fromAffine(i(Vt("pointHex", b)));
        return T.assertValidity(), T;
      }
      static fromPrivateKey(b) {
        return p.BASE.multiply(u(b));
      }
      static msm(b, T) {
        return Ow(p, n, b, T);
      }
      _setWindowSize(b) {
        I.setWindowSize(this, b);
      }
      assertValidity() {
        g(this);
      }
      hasEvenY() {
        const { y: b } = this.toAffine();
        if (s.isOdd) return !s.isOdd(b);
        throw new Error("Field doesn't support isOdd");
      }
      equals(b) {
        h(b);
        const { px: T, py: R, pz: D } = this, { px: M, py: k, pz: F } = b, j = s.eql(s.mul(T, F), s.mul(M, D)), x = s.eql(s.mul(R, F), s.mul(k, D));
        return j && x;
      }
      negate() {
        return new p(this.px, s.neg(this.py), this.pz);
      }
      double() {
        const { a: b, b: T } = e, R = s.mul(T, Qo), { px: D, py: M, pz: k } = this;
        let F = s.ZERO, j = s.ZERO, x = s.ZERO, C = s.mul(D, D), S = s.mul(M, M), y = s.mul(k, k), E = s.mul(D, M);
        return E = s.add(E, E), x = s.mul(D, k), x = s.add(x, x), F = s.mul(b, x), j = s.mul(R, y), j = s.add(F, j), F = s.sub(S, j), j = s.add(S, j), j = s.mul(F, j), F = s.mul(E, F), x = s.mul(R, x), y = s.mul(b, y), E = s.sub(C, y), E = s.mul(b, E), E = s.add(E, x), x = s.add(C, C), C = s.add(x, C), C = s.add(C, y), C = s.mul(C, E), j = s.add(j, C), y = s.mul(M, k), y = s.add(y, y), C = s.mul(y, E), F = s.sub(F, C), x = s.mul(y, S), x = s.add(x, x), x = s.add(x, x), new p(F, j, x);
      }
      add(b) {
        h(b);
        const { px: T, py: R, pz: D } = this, { px: M, py: k, pz: F } = b;
        let j = s.ZERO, x = s.ZERO, C = s.ZERO;
        const S = e.a, y = s.mul(e.b, Qo);
        let E = s.mul(T, M), _ = s.mul(R, k), $ = s.mul(D, F), N = s.add(T, R), O = s.add(M, k);
        N = s.mul(N, O), O = s.add(E, _), N = s.sub(N, O), O = s.add(T, D);
        let W = s.add(M, F);
        return O = s.mul(O, W), W = s.add(E, $), O = s.sub(O, W), W = s.add(R, D), j = s.add(k, F), W = s.mul(W, j), j = s.add(_, $), W = s.sub(W, j), C = s.mul(S, O), j = s.mul(y, $), C = s.add(j, C), j = s.sub(_, C), C = s.add(_, C), x = s.mul(j, C), _ = s.add(E, E), _ = s.add(_, E), $ = s.mul(S, $), O = s.mul(y, O), _ = s.add(_, $), $ = s.sub(E, $), $ = s.mul(S, $), O = s.add(O, $), E = s.mul(_, O), x = s.add(x, E), E = s.mul(W, O), j = s.mul(N, j), j = s.sub(j, E), E = s.mul(N, _), C = s.mul(W, C), C = s.add(C, E), new p(j, x, C);
      }
      subtract(b) {
        return this.add(b.negate());
      }
      is0() {
        return this.equals(p.ZERO);
      }
      wNAF(b) {
        return I.wNAFCached(this, b, p.normalizeZ);
      }
      multiplyUnsafe(b) {
        const { endo: T, n: R } = e;
        ur("scalar", b, Fs, R);
        const D = p.ZERO;
        if (b === Fs) return D;
        if (this.is0() || b === Ve) return this;
        if (!T || I.hasPrecomputes(this)) return I.wNAFCachedUnsafe(this, b, p.normalizeZ);
        let { k1neg: M, k1: k, k2neg: F, k2: j } = T.splitScalar(b), x = D, C = D, S = this;
        for (; k > Fs || j > Fs; ) k & Ve && (x = x.add(S)), j & Ve && (C = C.add(S)), S = S.double(), k >>= Ve, j >>= Ve;
        return M && (x = x.negate()), F && (C = C.negate()), C = new p(s.mul(C.px, T.beta), C.py, C.pz), x.add(C);
      }
      multiply(b) {
        const { endo: T, n: R } = e;
        ur("scalar", b, Ve, R);
        let D, M;
        if (T) {
          const { k1neg: k, k1: F, k2neg: j, k2: x } = T.splitScalar(b);
          let { p: C, f: S } = this.wNAF(F), { p: y, f: E } = this.wNAF(x);
          C = I.constTimeNegate(k, C), y = I.constTimeNegate(j, y), y = new p(s.mul(y.px, T.beta), y.py, y.pz), D = C.add(y), M = S.add(E);
        } else {
          const { p: k, f: F } = this.wNAF(b);
          D = k, M = F;
        }
        return p.normalizeZ([
          D,
          M
        ])[0];
      }
      multiplyAndAddUnsafe(b, T, R) {
        const D = p.BASE, M = (F, j) => j === Fs || j === Ve || !F.equals(D) ? F.multiplyUnsafe(j) : F.multiply(j), k = M(this, T).add(M(b, R));
        return k.is0() ? void 0 : k;
      }
      toAffine(b) {
        return f(this, b);
      }
      isTorsionFree() {
        const { h: b, isTorsionFree: T } = e;
        if (b === Ve) return true;
        if (T) return T(p, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: b, clearCofactor: T } = e;
        return b === Ve ? this : T ? T(p, this) : this.multiplyUnsafe(e.h);
      }
      toRawBytes(b = true) {
        return ei("isCompressed", b), this.assertValidity(), r(p, this, b);
      }
      toHex(b = true) {
        return ei("isCompressed", b), ti(this.toRawBytes(b));
      }
    }
    p.BASE = new p(e.Gx, e.Gy, s.ONE), p.ZERO = new p(s.ZERO, s.ONE, s.ZERO);
    const { endo: w, nBitLength: A } = e, I = Tw(p, w ? Math.ceil(A / 2) : A);
    return {
      CURVE: e,
      ProjectivePoint: p,
      normPrivateKeyToScalar: u,
      weierstrassEquation: o,
      isWithinCurveOrder: d
    };
  }
  function Uw(t) {
    const e = Uh(t);
    return vo(e, {
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
  function $w(t) {
    const e = Uw(t), { Fp: s, n, nByteLength: r, nBitLength: i } = e, o = s.BYTES + 1, a = 2 * s.BYTES + 1;
    function c(y) {
      return Ct(y, n);
    }
    function l(y) {
      return Ba(y, n);
    }
    const { ProjectivePoint: d, normPrivateKeyToScalar: u, weierstrassEquation: h, isWithinCurveOrder: f } = Rw({
      ...e,
      toBytes(y, E, _) {
        const $ = E.toAffine(), N = s.toBytes($.x), O = ro;
        return ei("isCompressed", _), _ ? O(Uint8Array.from([
          E.hasEvenY() ? 2 : 3
        ]), N) : O(Uint8Array.from([
          4
        ]), N, s.toBytes($.y));
      },
      fromBytes(y) {
        const E = y.length, _ = y[0], $ = y.subarray(1);
        if (E === o && (_ === 2 || _ === 3)) {
          const N = Ln($);
          if (!Rc(N, Ve, s.ORDER)) throw new Error("Point is not on curve");
          const O = h(N);
          let W;
          try {
            W = s.sqrt(O);
          } catch (ne) {
            const Q = ne instanceof Error ? ": " + ne.message : "";
            throw new Error("Point is not on curve" + Q);
          }
          const H = (W & Ve) === Ve;
          return (_ & 1) === 1 !== H && (W = s.neg(W)), {
            x: N,
            y: W
          };
        } else if (E === a && _ === 4) {
          const N = s.fromBytes($.subarray(0, s.BYTES)), O = s.fromBytes($.subarray(s.BYTES, 2 * s.BYTES));
          return {
            x: N,
            y: O
          };
        } else {
          const N = o, O = a;
          throw new Error("invalid Point, expected length of " + N + ", or uncompressed " + O + ", got " + E);
        }
      }
    });
    function g(y) {
      const E = n >> Ve;
      return y > E;
    }
    function p(y) {
      return g(y) ? c(-y) : y;
    }
    const w = (y, E, _) => Ln(y.slice(E, _));
    class A {
      constructor(E, _, $) {
        ur("r", E, Ve, n), ur("s", _, Ve, n), this.r = E, this.s = _, $ != null && (this.recovery = $), Object.freeze(this);
      }
      static fromCompact(E) {
        const _ = r;
        return E = Vt("compactSignature", E, _ * 2), new A(w(E, 0, _), w(E, _, 2 * _));
      }
      static fromDER(E) {
        const { r: _, s: $ } = Ds.toSig(Vt("DER", E));
        return new A(_, $);
      }
      assertValidity() {
      }
      addRecoveryBit(E) {
        return new A(this.r, this.s, E);
      }
      recoverPublicKey(E) {
        const { r: _, s: $, recovery: N } = this, O = D(Vt("msgHash", E));
        if (N == null || ![
          0,
          1,
          2,
          3
        ].includes(N)) throw new Error("recovery id invalid");
        const W = N === 2 || N === 3 ? _ + e.n : _;
        if (W >= s.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const H = (N & 1) === 0 ? "02" : "03", ae = d.fromHex(H + Xo(W, s.BYTES)), ne = l(W), Q = c(-O * ne), le = c($ * ne), ie = d.BASE.multiplyAndAddUnsafe(ae, Q, le);
        if (!ie) throw new Error("point at infinify");
        return ie.assertValidity(), ie;
      }
      hasHighS() {
        return g(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new A(this.r, c(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return no(this.toDERHex());
      }
      toDERHex() {
        return Ds.hexFromSig(this);
      }
      toCompactRawBytes() {
        return no(this.toCompactHex());
      }
      toCompactHex() {
        const E = r;
        return Xo(this.r, E) + Xo(this.s, E);
      }
    }
    const I = {
      isValidPrivateKey(y) {
        try {
          return u(y), true;
        } catch {
          return false;
        }
      },
      normPrivateKeyToScalar: u,
      randomPrivateKey: () => {
        const y = xh(e.n);
        return Nw(e.randomBytes(y), e.n);
      },
      precompute(y = 8, E = d.BASE) {
        return E._setWindowSize(y), E.multiply(BigInt(3)), E;
      }
    };
    function v(y, E = true) {
      return d.fromPrivateKey(y).toRawBytes(E);
    }
    function b(y) {
      if (typeof y == "bigint") return false;
      if (y instanceof d) return true;
      const _ = Vt("key", y).length, $ = s.BYTES, N = $ + 1, O = 2 * $ + 1;
      if (!(e.allowedPrivateKeyLengths || r === N)) return _ === N || _ === O;
    }
    function T(y, E, _ = true) {
      if (b(y) === true) throw new Error("first arg must be private key");
      if (b(E) === false) throw new Error("second arg must be public key");
      return d.fromHex(E).multiply(u(y)).toRawBytes(_);
    }
    const R = e.bits2int || function(y) {
      if (y.length > 8192) throw new Error("input is too large");
      const E = Ln(y), _ = y.length * 8 - i;
      return _ > 0 ? E >> BigInt(_) : E;
    }, D = e.bits2int_modN || function(y) {
      return c(R(y));
    }, M = Co(i);
    function k(y) {
      return ur("num < 2^" + i, y, Fs, M), hi(y, r);
    }
    function F(y, E, _ = j) {
      if ([
        "recovered",
        "canonical"
      ].some((ce) => ce in _)) throw new Error("sign() legacy options not supported");
      const { hash: $, randomBytes: N } = e;
      let { lowS: O, prehash: W, extraEntropy: H } = _;
      O == null && (O = true), y = Vt("msgHash", y), Ml(_), W && (y = Vt("prehashed msgHash", $(y)));
      const ae = D(y), ne = u(E), Q = [
        k(ne),
        k(ae)
      ];
      if (H != null && H !== false) {
        const ce = H === true ? N(s.BYTES) : H;
        Q.push(Vt("extraEntropy", ce));
      }
      const le = ro(...Q), ie = ae;
      function Ne(ce) {
        const Te = R(ce);
        if (!f(Te)) return;
        const ct = l(Te), mt = d.BASE.multiply(Te).toAffine(), lt = c(mt.x);
        if (lt === Fs) return;
        const Lt = c(ct * c(ie + lt * ne));
        if (Lt === Fs) return;
        let Ks = (mt.x === lt ? 0 : 2) | Number(mt.y & Ve), ll = Lt;
        return O && g(Lt) && (ll = p(Lt), Ks ^= 1), new A(lt, ll, Ks);
      }
      return {
        seed: le,
        k2sig: Ne
      };
    }
    const j = {
      lowS: e.lowS,
      prehash: false
    }, x = {
      lowS: e.lowS,
      prehash: false
    };
    function C(y, E, _ = j) {
      const { seed: $, k2sig: N } = F(y, E, _), O = e;
      return Rm(O.hash.outputLen, O.nByteLength, O.hmac)($, N);
    }
    d.BASE._setWindowSize(8);
    function S(y, E, _, $ = x) {
      var _a2;
      const N = y;
      E = Vt("msgHash", E), _ = Vt("publicKey", _);
      const { lowS: O, prehash: W, format: H } = $;
      if (Ml($), "strict" in $) throw new Error("options.strict was renamed to lowS");
      if (H !== void 0 && H !== "compact" && H !== "der") throw new Error("format must be compact or der");
      const ae = typeof N == "string" || ui(N), ne = !ae && !H && typeof N == "object" && N !== null && typeof N.r == "bigint" && typeof N.s == "bigint";
      if (!ae && !ne) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      let Q, le;
      try {
        if (ne && (Q = new A(N.r, N.s)), ae) {
          try {
            H !== "compact" && (Q = A.fromDER(N));
          } catch (Ks) {
            if (!(Ks instanceof Ds.Err)) throw Ks;
          }
          !Q && H !== "der" && (Q = A.fromCompact(N));
        }
        le = d.fromHex(_);
      } catch {
        return false;
      }
      if (!Q || O && Q.hasHighS()) return false;
      W && (E = e.hash(E));
      const { r: ie, s: Ne } = Q, ce = D(E), Te = l(Ne), ct = c(ce * Te), mt = c(ie * Te), lt = (_a2 = d.BASE.multiplyAndAddUnsafe(le, ct, mt)) == null ? void 0 : _a2.toAffine();
      return lt ? c(lt.x) === ie : false;
    }
    return {
      CURVE: e,
      getPublicKey: v,
      getSharedSecret: T,
      sign: C,
      verify: S,
      ProjectivePoint: d,
      Signature: A,
      utils: I
    };
  }
  function Dw(t) {
    return {
      hash: t,
      hmac: (e, ...s) => Hf(t, e, zf(...s)),
      randomBytes: jf
    };
  }
  function Bw(t, e) {
    const s = (n) => $w({
      ...t,
      ...Dw(n)
    });
    return {
      ...s(e),
      create: s
    };
  }
  const $h = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Fl = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Lw = BigInt(0), Mw = BigInt(1), Ma = BigInt(2), ql = (t, e) => (t + e / Ma) / e;
  function Fw(t) {
    const e = $h, s = BigInt(3), n = BigInt(6), r = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), l = t * t * t % e, d = l * l * t % e, u = Mt(d, s, e) * d % e, h = Mt(u, s, e) * d % e, f = Mt(h, Ma, e) * l % e, g = Mt(f, r, e) * f % e, p = Mt(g, i, e) * g % e, w = Mt(p, a, e) * p % e, A = Mt(w, c, e) * w % e, I = Mt(A, a, e) * p % e, v = Mt(I, s, e) * d % e, b = Mt(v, o, e) * g % e, T = Mt(b, n, e) * l % e, R = Mt(T, Ma, e);
    if (!Fa.eql(Fa.sqr(R), t)) throw new Error("Cannot find square root");
    return R;
  }
  const Fa = Dc($h, void 0, void 0, {
    sqrt: Fw
  }), qw = Bw({
    a: Lw,
    b: BigInt(7),
    Fp: Fa,
    n: Fl,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (t) => {
        const e = Fl, s = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -Mw * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = s, o = BigInt("0x100000000000000000000000000000000"), a = ql(i * t, e), c = ql(-n * t, e);
        let l = Ct(t - a * s - c * r, e), d = Ct(-a * n - c * i, e);
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
  }, Vf);
  function Ww(t) {
    if (t.length !== 130 && t.length !== 132) throw new Hw({
      signature: t
    });
    const e = BigInt(Us(t, 0, 32)), s = BigInt(Us(t, 32, 64)), n = (() => {
      const r = +`0x${t.slice(130)}`;
      if (!Number.isNaN(r)) try {
        return jw(r);
      } catch {
        throw new zw({
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
  function jw(t) {
    if (t === 0 || t === 27) return 0;
    if (t === 1 || t === 28) return 1;
    if (t >= 35) return t % 2 === 0 ? 1 : 0;
    throw new Vw({
      value: t
    });
  }
  class Hw extends De {
    constructor({ signature: e }) {
      super(`Value \`${e}\` is an invalid signature size.`, {
        metaMessages: [
          "Expected: 64 bytes or 65 bytes.",
          `Received ${gn($c(e))} bytes.`
        ]
      }), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidSerializedSizeError"
      });
    }
  }
  class zw extends De {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidYParityError"
      });
    }
  }
  class Vw extends De {
    constructor({ value: e }) {
      super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`), Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidVError"
      });
    }
  }
  function Kw(t) {
    return gw(Gw(t));
  }
  function Gw(t) {
    const { payload: e, signature: s } = t, { r: n, s: r, yParity: i } = s, a = new qw.Signature(BigInt(n), BigInt(r)).addRecoveryBit(i).recoverPublicKey($c(e).substring(2));
    return ow(a);
  }
  function Yw(t) {
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
        let I = l[h], v = 0;
        for (let b = g - 1; (I !== 0 || v < u) && b !== -1; b--, v++) I += 256 * p[b] >>> 0, p[b] = I % s >>> 0, I = I / s >>> 0;
        if (I !== 0) throw new Error("Non-zero carry");
        u = v, h++;
      }
      let w = g - u;
      for (; w !== g && p[w] === 0; ) w++;
      let A = n.repeat(d);
      for (; w < g; ++w) A += t.charAt(p[w]);
      return A;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === n; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const I = l.charCodeAt(d);
        if (I > 255) return;
        let v = e[I];
        if (v === 255) return;
        let b = 0;
        for (let T = f - 1; (v !== 0 || b < h) && T !== -1; T--, b++) v += s * g[T] >>> 0, g[T] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0) throw new Error("Non-zero carry");
        h = b, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const w = new Uint8Array(u + (f - p));
      let A = u;
      for (; p !== f; ) w[A++] = g[p++];
      return w;
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
  var Jw = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const pi = Yw(Jw);
  function Zw(t) {
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
  function Xw(t, e, s) {
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
  const Qw = new TextEncoder(), ey = 50;
  function ty(t, e, s) {
    Qw.encodeInto(t, e.subarray(s));
  }
  function sy(t, e, s) {
    t.length > ey ? ty(t, e, s) : Xw(t, e, s);
  }
  const ny = 4096;
  function Dh(t, e, s) {
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
      i.length >= ny && (o += String.fromCharCode(...i), i.length = 0);
    }
    return i.length > 0 && (o += String.fromCharCode(...i)), o;
  }
  const ry = new TextDecoder(), iy = 200;
  function oy(t, e, s) {
    const n = t.subarray(e, e + s);
    return ry.decode(n);
  }
  function ay(t, e, s) {
    return s > iy ? oy(t, e, s) : Dh(t, e, s);
  }
  class Ti {
    constructor(e, s) {
      this.type = e, this.data = s;
    }
  }
  class Rt extends Error {
    constructor(e) {
      super(e);
      const s = Object.create(Rt.prototype);
      Object.setPrototypeOf(this, s), Object.defineProperty(this, "name", {
        configurable: true,
        enumerable: false,
        value: Rt.name
      });
    }
  }
  const _r = 4294967295;
  function cy(t, e, s) {
    const n = s / 4294967296, r = s;
    t.setUint32(e, n), t.setUint32(e + 4, r);
  }
  function Bh(t, e, s) {
    const n = Math.floor(s / 4294967296), r = s;
    t.setUint32(e, n), t.setUint32(e + 4, r);
  }
  function Lh(t, e) {
    const s = t.getInt32(e), n = t.getUint32(e + 4);
    return s * 4294967296 + n;
  }
  function ly(t, e) {
    const s = t.getUint32(e), n = t.getUint32(e + 4);
    return s * 4294967296 + n;
  }
  const dy = -1, uy = 4294967296 - 1, hy = 17179869184 - 1;
  function py({ sec: t, nsec: e }) {
    if (t >= 0 && e >= 0 && t <= hy) if (e === 0 && t <= uy) {
      const s = new Uint8Array(4);
      return new DataView(s.buffer).setUint32(0, t), s;
    } else {
      const s = t / 4294967296, n = t & 4294967295, r = new Uint8Array(8), i = new DataView(r.buffer);
      return i.setUint32(0, e << 2 | s & 3), i.setUint32(4, n), r;
    }
    else {
      const s = new Uint8Array(12), n = new DataView(s.buffer);
      return n.setUint32(0, e), Bh(n, 4, t), s;
    }
  }
  function fy(t) {
    const e = t.getTime(), s = Math.floor(e / 1e3), n = (e - s * 1e3) * 1e6, r = Math.floor(n / 1e9);
    return {
      sec: s + r,
      nsec: n - r * 1e9
    };
  }
  function gy(t) {
    if (t instanceof Date) {
      const e = fy(t);
      return py(e);
    } else return null;
  }
  function my(t) {
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
        const s = Lh(e, 4), n = e.getUint32(0);
        return {
          sec: s,
          nsec: n
        };
      }
      default:
        throw new Rt(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${t.length}`);
    }
  }
  function wy(t) {
    const e = my(t);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  const yy = {
    type: dy,
    encode: gy,
    decode: wy
  };
  class oo {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(yy);
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
            return new Ti(o, i);
          }
        }
      }
      for (let n = 0; n < this.encoders.length; n++) {
        const r = this.encoders[n];
        if (r != null) {
          const i = r(e, s);
          if (i != null) {
            const o = n;
            return new Ti(o, i);
          }
        }
      }
      return e instanceof Ti ? e : null;
    }
    decode(e, s, n) {
      const r = s < 0 ? this.builtInDecoders[-1 - s] : this.decoders[s];
      return r ? r(e, s, n) : new Ti(s, e);
    }
  }
  oo.defaultCodec = new oo();
  function by(t) {
    return t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer;
  }
  function qa(t) {
    return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : by(t) ? new Uint8Array(t) : Uint8Array.from(t);
  }
  const Ey = 100, Cy = 2048;
  class Bc {
    constructor(e) {
      this.entered = false, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? oo.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? false, this.maxDepth = (e == null ? void 0 : e.maxDepth) ?? Ey, this.initialBufferSize = (e == null ? void 0 : e.initialBufferSize) ?? Cy, this.sortKeys = (e == null ? void 0 : e.sortKeys) ?? false, this.forceFloat32 = (e == null ? void 0 : e.forceFloat32) ?? false, this.ignoreUndefined = (e == null ? void 0 : e.ignoreUndefined) ?? false, this.forceIntegerToFloat = (e == null ? void 0 : e.forceIntegerToFloat) ?? false, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
      return new Bc({
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
      const n = Zw(e);
      this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), sy(e, this.bytes, this.pos), this.pos += n;
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
      const n = qa(e);
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
      this.ensureBufferSizeToWrite(8), cy(this.view, this.pos, e), this.pos += 8;
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8), Bh(this.view, this.pos, e), this.pos += 8;
    }
    writeBigUint64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setBigUint64(this.pos, e), this.pos += 8;
    }
    writeBigInt64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setBigInt64(this.pos, e), this.pos += 8;
    }
  }
  function vy(t, e) {
    return new Bc(e).encodeSharedRef(t);
  }
  function ea(t) {
    return `${t < 0 ? "-" : ""}0x${Math.abs(t).toString(16).padStart(2, "0")}`;
  }
  const Ay = 16, Iy = 16;
  class Ny {
    constructor(e = Ay, s = Iy) {
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
      const i = Dh(e, s, n), o = Uint8Array.prototype.slice.call(e, s, s + n);
      return this.store(o, i), i;
    }
  }
  const Wa = "array", Hr = "map_key", Mh = "map_value", Sy = (t) => {
    if (typeof t == "string" || typeof t == "number") return t;
    throw new Rt("The type of key must be string or number but " + typeof t);
  };
  class _y {
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
      s.type = Wa, s.position = 0, s.size = e, s.array = new Array(e);
    }
    pushMapState(e) {
      const s = this.getUninitializedStateFromPool();
      s.type = Hr, s.readCount = 0, s.size = e, s.map = {};
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
      if (e.type === Wa) {
        const n = e;
        n.size = 0, n.array = void 0, n.position = 0, n.type = void 0;
      }
      if (e.type === Hr || e.type === Mh) {
        const n = e;
        n.size = 0, n.map = void 0, n.readCount = 0, n.type = void 0;
      }
      this.stackHeadPosition--;
    }
    reset() {
      this.stack.length = 0, this.stackHeadPosition = -1;
    }
  }
  const Tr = -1, Lc = new DataView(new ArrayBuffer(0)), Ty = new Uint8Array(Lc.buffer);
  try {
    Lc.getInt8(0);
  } catch (t) {
    if (!(t instanceof RangeError)) throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
  }
  const Wl = new RangeError("Insufficient data"), Oy = new Ny();
  class Mc {
    constructor(e) {
      this.totalPos = 0, this.pos = 0, this.view = Lc, this.bytes = Ty, this.headByte = Tr, this.stack = new _y(), this.entered = false, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? oo.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? false, this.rawStrings = (e == null ? void 0 : e.rawStrings) ?? false, this.maxStrLength = (e == null ? void 0 : e.maxStrLength) ?? _r, this.maxBinLength = (e == null ? void 0 : e.maxBinLength) ?? _r, this.maxArrayLength = (e == null ? void 0 : e.maxArrayLength) ?? _r, this.maxMapLength = (e == null ? void 0 : e.maxMapLength) ?? _r, this.maxExtLength = (e == null ? void 0 : e.maxExtLength) ?? _r, this.keyDecoder = (e == null ? void 0 : e.keyDecoder) !== void 0 ? e.keyDecoder : Oy, this.mapKeyConverter = (e == null ? void 0 : e.mapKeyConverter) ?? Sy;
    }
    clone() {
      return new Mc({
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
      this.totalPos = 0, this.headByte = Tr, this.stack.reset();
    }
    setBuffer(e) {
      const s = qa(e);
      this.bytes = s, this.view = new DataView(s.buffer, s.byteOffset, s.byteLength), this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte === Tr && !this.hasRemaining(1)) this.setBuffer(e);
      else {
        const s = this.bytes.subarray(this.pos), n = qa(e), r = new Uint8Array(s.length + n.length);
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
        throw new RangeError(`Insufficient data in parsing ${ea(r)} at ${o} (${i} in the current buffer)`);
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
        } else throw new Rt(`Unrecognized type byte: ${ea(e)}`);
        this.complete();
        const n = this.stack;
        for (; n.length > 0; ) {
          const r = n.top();
          if (r.type === Wa) if (r.array[r.position] = s, r.position++, r.position === r.size) s = r.array, n.release(r);
          else continue e;
          else if (r.type === Hr) {
            if (s === "__proto__") throw new Rt("The key __proto__ is not allowed");
            r.key = this.mapKeyConverter(s), r.type = Mh;
            continue e;
          } else if (r.map[r.key] = s, r.readCount++, r.readCount === r.size) s = r.map, n.release(r);
          else {
            r.key = null, r.type = Hr;
            continue e;
          }
        }
        return s;
      }
    }
    readHeadByte() {
      return this.headByte === Tr && (this.headByte = this.readU8()), this.headByte;
    }
    complete() {
      this.headByte = Tr;
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
          throw new Rt(`Unrecognized array type byte: ${ea(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength) throw new Rt(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      this.stack.pushMapState(e);
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength) throw new Rt(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      this.stack.pushArrayState(e);
    }
    decodeString(e, s) {
      return !this.rawStrings || this.stateIsMapKey() ? this.decodeUtf8String(e, s) : this.decodeBinary(e, s);
    }
    decodeUtf8String(e, s) {
      var _a2;
      if (e > this.maxStrLength) throw new Rt(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      if (this.bytes.byteLength < this.pos + s + e) throw Wl;
      const n = this.pos + s;
      let r;
      return this.stateIsMapKey() && ((_a2 = this.keyDecoder) == null ? void 0 : _a2.canBeCached(e)) ? r = this.keyDecoder.decode(this.bytes, n, e) : r = ay(this.bytes, n, e), this.pos += s + e, r;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack.top().type === Hr : false;
    }
    decodeBinary(e, s) {
      if (e > this.maxBinLength) throw new Rt(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + s)) throw Wl;
      const n = this.pos + s, r = this.bytes.subarray(n, n + e);
      return this.pos += s + e, r;
    }
    decodeExtension(e, s) {
      if (e > this.maxExtLength) throw new Rt(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
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
      const e = ly(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      const e = Lh(this.view, this.pos);
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
  function ky(t, e) {
    return new Mc(e).decode(t);
  }
  var xy = {};
  const Py = ":";
  function Ws(t) {
    const [e, s] = t.split(Py);
    return {
      namespace: e,
      reference: s
    };
  }
  function Fh(t, e) {
    return t.includes(":") ? [
      t
    ] : e.chains || [];
  }
  var Ry = Object.defineProperty, Uy = Object.defineProperties, $y = Object.getOwnPropertyDescriptors, jl = Object.getOwnPropertySymbols, Dy = Object.prototype.hasOwnProperty, By = Object.prototype.propertyIsEnumerable, ja = (t, e, s) => e in t ? Ry(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Hl = (t, e) => {
    for (var s in e || (e = {})) Dy.call(e, s) && ja(t, s, e[s]);
    if (jl) for (var s of jl(e)) By.call(e, s) && ja(t, s, e[s]);
    return t;
  }, Ly = (t, e) => Uy(t, $y(e)), zl = (t, e, s) => ja(t, typeof e != "symbol" ? e + "" : e, s);
  const My = "ReactNative", $t = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
  }, Fy = "js";
  function ao() {
    return typeof un < "u" && typeof un.versions < "u" && typeof un.versions.node < "u";
  }
  function wn() {
    return !zs.getDocument() && !!zs.getNavigator() && navigator.product === My;
  }
  function qy() {
    return wn() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "android";
  }
  function Wy() {
    return wn() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "ios";
  }
  function Ar() {
    return !ao() && !!zs.getNavigator() && !!zs.getDocument();
  }
  function fi() {
    return wn() ? $t.reactNative : ao() ? $t.node : Ar() ? $t.browser : $t.unknown;
  }
  function Vl() {
    var t;
    try {
      return wn() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Application) < "u" ? (t = globalThis.Application) == null ? void 0 : t.applicationId : void 0;
    } catch {
      return;
    }
  }
  function jy(t, e) {
    const s = new URLSearchParams(t);
    return Object.entries(e).sort(([n], [r]) => n.localeCompare(r)).forEach(([n, r]) => {
      r != null && s.set(n, String(r));
    }), s.toString();
  }
  function Hy(t) {
    var e, s;
    const n = qh();
    try {
      return t != null && t.url && n.url && new URL(t.url).host !== new URL(n.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${n.url}. This is probably unintended and can lead to issues.`), t.url = n.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((r) => r !== "")), Ly(Hl(Hl({}, n), t), {
        url: (t == null ? void 0 : t.url) || n.url,
        name: (t == null ? void 0 : t.name) || n.name,
        description: (t == null ? void 0 : t.description) || n.description,
        icons: (s = t == null ? void 0 : t.icons) != null && s.length && t.icons.length > 0 ? t.icons : n.icons
      });
    } catch (r) {
      return console.warn("Error populating app metadata", r), t || n;
    }
  }
  function qh() {
    return Kf.getWindowMetadata() || {
      name: "",
      description: "",
      url: "",
      icons: [
        ""
      ]
    };
  }
  function zy() {
    if (fi() === $t.reactNative && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u") {
      const { OS: s, Version: n } = globalThis.Platform;
      return [
        s,
        n
      ].join("-");
    }
    const t = Yf();
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
  function Vy() {
    var t;
    const e = fi();
    return e === $t.browser ? [
      e,
      ((t = zs.getLocation()) == null ? void 0 : t.host) || "unknown"
    ].join(":") : e;
  }
  function Wh(t, e, s) {
    const n = zy(), r = Vy();
    return [
      [
        t,
        e
      ].join("-"),
      [
        Fy,
        s
      ].join("-"),
      n,
      r
    ].join("/");
  }
  function Ky({ protocol: t, version: e, relayUrl: s, sdkVersion: n, auth: r, projectId: i, useOnCloseEvent: o, bundleId: a, packageName: c }) {
    const l = s.split("?"), d = Wh(t, e, n), u = {
      auth: r,
      ua: d,
      projectId: i,
      useOnCloseEvent: o,
      packageName: c || void 0,
      bundleId: a || void 0
    }, h = jy(l[1] || "", u);
    return l[0] + "?" + h;
  }
  function Pn(t, e) {
    return t.filter((s) => e.includes(s)).length === t.length;
  }
  function Ha(t) {
    return Object.fromEntries(t.entries());
  }
  function za(t) {
    return new Map(Object.entries(t));
  }
  function Sn(t = K.FIVE_MINUTES, e) {
    const s = K.toMiliseconds(t || K.FIVE_MINUTES);
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
  function bs(t, e, s) {
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
  function jh(t, e) {
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
  function Gy(t) {
    return jh("topic", t);
  }
  function Yy(t) {
    return jh("id", t);
  }
  function Hh(t) {
    const [e, s] = t.split(":"), n = {
      id: void 0,
      topic: void 0
    };
    if (e === "topic" && typeof s == "string") n.topic = s;
    else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
    return n;
  }
  function Me(t, e) {
    return K.fromMiliseconds(Date.now() + K.toMiliseconds(t));
  }
  function ws(t) {
    return Date.now() >= K.toMiliseconds(t);
  }
  function Se(t, e) {
    return `${t}${e ? `:${e}` : ""}`;
  }
  function vs(t = [], e = []) {
    return [
      .../* @__PURE__ */ new Set([
        ...t,
        ...e
      ])
    ];
  }
  async function Jy({ id: t, topic: e, wcDeepLink: s }) {
    var n;
    try {
      if (!s) return;
      const r = typeof s == "string" ? JSON.parse(s) : s, i = r == null ? void 0 : r.href;
      if (typeof i != "string") return;
      const o = Zy(i, t, e), a = fi();
      if (a === $t.browser) {
        if (!((n = zs.getDocument()) != null && n.hasFocus())) {
          console.warn("Document does not have focus, skipping deeplink.");
          return;
        }
        Xy(o);
      } else a === $t.reactNative && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u" && await globalThis.Linking.openURL(o);
    } catch (r) {
      console.error(r);
    }
  }
  function Zy(t, e, s) {
    const n = `requestId=${e}&sessionTopic=${s}`;
    t.endsWith("/") && (t = t.slice(0, -1));
    let r = `${t}`;
    if (t.startsWith("https://t.me")) {
      const i = t.includes("?") ? "&startapp=" : "?startapp=";
      r = `${r}${i}${s0(n, true)}`;
    } else r = `${r}/wc?${n}`;
    return r;
  }
  function Xy(t) {
    let e = "_self";
    t0() ? e = "_top" : (e0() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
  }
  async function Qy(t, e) {
    let s = "";
    try {
      if (Ar() && (s = localStorage.getItem(e), s)) return s;
      s = await t.getItem(e);
    } catch (n) {
      console.error(n);
    }
    return s;
  }
  function Kl(t, e) {
    if (!t.includes(e)) return null;
    const s = t.split(/([&,?,=])/), n = s.indexOf(e);
    return s[n + 2];
  }
  function Gl() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  }
  function Fc() {
    return typeof un < "u" && xy.IS_VITEST === "true";
  }
  function e0() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
  }
  function t0() {
    try {
      return window.self !== window.top;
    } catch {
      return false;
    }
  }
  function s0(t, e = false) {
    const s = Ee.from(t).toString("base64");
    return e ? s.replace(/[=]/g, "") : s;
  }
  function zh(t) {
    return Ee.from(t, "base64").toString("utf-8");
  }
  function n0(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  let r0 = class {
    constructor({ limit: e }) {
      zl(this, "limit"), zl(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
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
  };
  const Oi = BigInt(2 ** 32 - 1), Yl = BigInt(32);
  function Vh(t, e = false) {
    return e ? {
      h: Number(t & Oi),
      l: Number(t >> Yl & Oi)
    } : {
      h: Number(t >> Yl & Oi) | 0,
      l: Number(t & Oi) | 0
    };
  }
  function Kh(t, e = false) {
    const s = t.length;
    let n = new Uint32Array(s), r = new Uint32Array(s);
    for (let i = 0; i < s; i++) {
      const { h: o, l: a } = Vh(t[i], e);
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
  const Jl = (t, e, s) => t >>> s, Zl = (t, e, s) => t << 32 - s | e >>> s, sn = (t, e, s) => t >>> s | e << 32 - s, nn = (t, e, s) => t << 32 - s | e >>> s, Mr = (t, e, s) => t << 64 - s | e >>> s - 32, Fr = (t, e, s) => t >>> s - 32 | e << 64 - s, i0 = (t, e) => e, o0 = (t, e) => t, a0 = (t, e, s) => t << s | e >>> 32 - s, c0 = (t, e, s) => e << s | t >>> 32 - s, l0 = (t, e, s) => e << s - 32 | t >>> 64 - s, d0 = (t, e, s) => t << s - 32 | e >>> 64 - s;
  function ns(t, e, s, n) {
    const r = (e >>> 0) + (n >>> 0);
    return {
      h: t + s + (r / 2 ** 32 | 0) | 0,
      l: r | 0
    };
  }
  const qc = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), Wc = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, u0 = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), h0 = (t, e, s, n, r) => e + s + n + r + (t / 2 ** 32 | 0) | 0, p0 = (t, e, s, n, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (r >>> 0), f0 = (t, e, s, n, r, i) => e + s + n + r + i + (t / 2 ** 32 | 0) | 0, Qn = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function Ao(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Vs(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function ls(t, ...e) {
    if (!Ao(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function Io(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    Vs(t.outputLen), Vs(t.blockLen);
  }
  function mn(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function jc(t, e) {
    ls(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function si(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function Zt(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function ta(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function us(t, e) {
    return t << 32 - e | t >>> e;
  }
  const Gh = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function Yh(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  const ks = Gh ? (t) => t : (t) => Yh(t);
  function g0(t) {
    for (let e = 0; e < t.length; e++) t[e] = Yh(t[e]);
    return t;
  }
  const rn = Gh ? (t) => t : g0, Jh = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", m0 = Array.from({
    length: 256
  }, (t, e) => e.toString(16).padStart(2, "0"));
  function hr(t) {
    if (ls(t), Jh) return t.toHex();
    let e = "";
    for (let s = 0; s < t.length; s++) e += m0[t[s]];
    return e;
  }
  const Ts = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function Xl(t) {
    if (t >= Ts._0 && t <= Ts._9) return t - Ts._0;
    if (t >= Ts.A && t <= Ts.F) return t - (Ts.A - 10);
    if (t >= Ts.a && t <= Ts.f) return t - (Ts.a - 10);
  }
  function co(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (Jh) return Uint8Array.fromHex(t);
    const e = t.length, s = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(s);
    for (let r = 0, i = 0; r < s; r++, i += 2) {
      const o = Xl(t.charCodeAt(i)), a = Xl(t.charCodeAt(i + 1));
      if (o === void 0 || a === void 0) {
        const c = t[i] + t[i + 1];
        throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
      }
      n[r] = o * 16 + a;
    }
    return n;
  }
  function Zh(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function cs(t) {
    return typeof t == "string" && (t = Zh(t)), ls(t), t;
  }
  function on(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      ls(r), e += r.length;
    }
    const s = new Uint8Array(e);
    for (let n = 0, r = 0; n < t.length; n++) {
      const i = t[n];
      s.set(i, r), r += i.length;
    }
    return s;
  }
  let No = class {
  };
  function gi(t) {
    const e = (n) => t().update(cs(n)).digest(), s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
  }
  function w0(t) {
    const e = (n, r) => t(r).update(cs(n)).digest(), s = t({});
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  function Gn(t = 32) {
    if (Qn && typeof Qn.getRandomValues == "function") return Qn.getRandomValues(new Uint8Array(t));
    if (Qn && typeof Qn.randomBytes == "function") return Uint8Array.from(Qn.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  const y0 = BigInt(0), Or = BigInt(1), b0 = BigInt(2), E0 = BigInt(7), C0 = BigInt(256), v0 = BigInt(113), Xh = [], Qh = [], ep = [];
  for (let t = 0, e = Or, s = 1, n = 0; t < 24; t++) {
    [s, n] = [
      n,
      (2 * s + 3 * n) % 5
    ], Xh.push(2 * (5 * n + s)), Qh.push((t + 1) * (t + 2) / 2 % 64);
    let r = y0;
    for (let i = 0; i < 7; i++) e = (e << Or ^ (e >> E0) * v0) % C0, e & b0 && (r ^= Or << (Or << BigInt(i)) - Or);
    ep.push(r);
  }
  const tp = Kh(ep, true), A0 = tp[0], I0 = tp[1], Ql = (t, e, s) => s > 32 ? l0(t, e, s) : a0(t, e, s), ed = (t, e, s) => s > 32 ? d0(t, e, s) : c0(t, e, s);
  function N0(t, e = 24) {
    const s = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], u = Ql(l, d, 1) ^ s[a], h = ed(l, d, 1) ^ s[a + 1];
        for (let f = 0; f < 50; f += 10) t[o + f] ^= u, t[o + f + 1] ^= h;
      }
      let r = t[2], i = t[3];
      for (let o = 0; o < 24; o++) {
        const a = Qh[o], c = Ql(r, i, a), l = ed(r, i, a), d = Xh[o];
        r = t[d], i = t[d + 1], t[d] = c, t[d + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) s[a] = t[o + a];
        for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
      }
      t[0] ^= A0[n], t[1] ^= I0[n];
    }
    Zt(s);
  }
  let S0 = class sp extends No {
    constructor(e, s, n, r = false, i = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = r, this.rounds = i, Vs(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = si(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      rn(this.state32), N0(this.state32, this.rounds), rn(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      mn(this), e = cs(e), ls(e);
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
      mn(this, false), ls(e), this.finish();
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
      return Vs(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (jc(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, Zt(this.state);
    }
    _cloneInto(e) {
      const { blockLen: s, suffix: n, outputLen: r, rounds: i, enableXOF: o } = this;
      return e || (e = new sp(s, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
    }
  };
  const _0 = (t, e, s) => gi(() => new S0(e, t, s)), T0 = _0(1, 136, 256 / 8);
  function O0(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i), c = n ? 4 : 0, l = n ? 0 : 4;
    t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
  }
  function k0(t, e, s) {
    return t & e ^ ~t & s;
  }
  function x0(t, e, s) {
    return t & e ^ t & s ^ e & s;
  }
  let np = class extends No {
    constructor(e, s, n, r) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = ta(this.buffer);
    }
    update(e) {
      mn(this), e = cs(e), ls(e);
      const { view: s, buffer: n, blockLen: r } = this, i = e.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(r - this.pos, i - o);
        if (a === r) {
          const c = ta(e);
          for (; r <= i - o; o += r) this.process(c, o);
          continue;
        }
        n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(s, 0), this.pos = 0);
      }
      return this.length += e.length, this.roundClean(), this;
    }
    digestInto(e) {
      mn(this), jc(e, this), this.finished = true;
      const { buffer: s, view: n, blockLen: r, isLE: i } = this;
      let { pos: o } = this;
      s[o++] = 128, Zt(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(n, 0), o = 0);
      for (let u = o; u < r; u++) s[u] = 0;
      O0(n, r - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = ta(e), c = this.outputLen;
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
  const Js = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), nt = Uint32Array.from([
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
  ]), rt = Uint32Array.from([
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
  ]), P0 = Uint32Array.from([
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
  ]), Zs = new Uint32Array(64);
  class R0 extends np {
    constructor(e = 32) {
      super(64, e, 8, false), this.A = Js[0] | 0, this.B = Js[1] | 0, this.C = Js[2] | 0, this.D = Js[3] | 0, this.E = Js[4] | 0, this.F = Js[5] | 0, this.G = Js[6] | 0, this.H = Js[7] | 0;
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
      for (let u = 0; u < 16; u++, s += 4) Zs[u] = e.getUint32(s, false);
      for (let u = 16; u < 64; u++) {
        const h = Zs[u - 15], f = Zs[u - 2], g = us(h, 7) ^ us(h, 18) ^ h >>> 3, p = us(f, 17) ^ us(f, 19) ^ f >>> 10;
        Zs[u] = p + Zs[u - 7] + g + Zs[u - 16] | 0;
      }
      let { A: n, B: r, C: i, D: o, E: a, F: c, G: l, H: d } = this;
      for (let u = 0; u < 64; u++) {
        const h = us(a, 6) ^ us(a, 11) ^ us(a, 25), f = d + h + k0(a, c, l) + P0[u] + Zs[u] | 0, g = (us(n, 2) ^ us(n, 13) ^ us(n, 22)) + x0(n, r, i) | 0;
        d = l, l = c, c = a, a = o + f | 0, o = i, i = r, r = n, n = f + g | 0;
      }
      n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, r, i, o, a, c, l, d);
    }
    roundClean() {
      Zt(Zs);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), Zt(this.buffer);
    }
  }
  const rp = Kh([
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
  ].map((t) => BigInt(t))), U0 = rp[0], $0 = rp[1], Xs = new Uint32Array(80), Qs = new Uint32Array(80);
  let Hc = class extends np {
    constructor(e = 64) {
      super(128, e, 16, false), this.Ah = rt[0] | 0, this.Al = rt[1] | 0, this.Bh = rt[2] | 0, this.Bl = rt[3] | 0, this.Ch = rt[4] | 0, this.Cl = rt[5] | 0, this.Dh = rt[6] | 0, this.Dl = rt[7] | 0, this.Eh = rt[8] | 0, this.El = rt[9] | 0, this.Fh = rt[10] | 0, this.Fl = rt[11] | 0, this.Gh = rt[12] | 0, this.Gl = rt[13] | 0, this.Hh = rt[14] | 0, this.Hl = rt[15] | 0;
    }
    get() {
      const { Ah: e, Al: s, Bh: n, Bl: r, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: u, Fl: h, Gh: f, Gl: g, Hh: p, Hl: w } = this;
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
        w
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, u, h, f, g, p, w) {
      this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = r | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = u | 0, this.Fl = h | 0, this.Gh = f | 0, this.Gl = g | 0, this.Hh = p | 0, this.Hl = w | 0;
    }
    process(e, s) {
      for (let v = 0; v < 16; v++, s += 4) Xs[v] = e.getUint32(s), Qs[v] = e.getUint32(s += 4);
      for (let v = 16; v < 80; v++) {
        const b = Xs[v - 15] | 0, T = Qs[v - 15] | 0, R = sn(b, T, 1) ^ sn(b, T, 8) ^ Jl(b, T, 7), D = nn(b, T, 1) ^ nn(b, T, 8) ^ Zl(b, T, 7), M = Xs[v - 2] | 0, k = Qs[v - 2] | 0, F = sn(M, k, 19) ^ Mr(M, k, 61) ^ Jl(M, k, 6), j = nn(M, k, 19) ^ Fr(M, k, 61) ^ Zl(M, k, 6), x = u0(D, j, Qs[v - 7], Qs[v - 16]), C = h0(x, R, F, Xs[v - 7], Xs[v - 16]);
        Xs[v] = C | 0, Qs[v] = x | 0;
      }
      let { Ah: n, Al: r, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: u, El: h, Fh: f, Fl: g, Gh: p, Gl: w, Hh: A, Hl: I } = this;
      for (let v = 0; v < 80; v++) {
        const b = sn(u, h, 14) ^ sn(u, h, 18) ^ Mr(u, h, 41), T = nn(u, h, 14) ^ nn(u, h, 18) ^ Fr(u, h, 41), R = u & f ^ ~u & p, D = h & g ^ ~h & w, M = p0(I, T, D, $0[v], Qs[v]), k = f0(M, A, b, R, U0[v], Xs[v]), F = M | 0, j = sn(n, r, 28) ^ Mr(n, r, 34) ^ Mr(n, r, 39), x = nn(n, r, 28) ^ Fr(n, r, 34) ^ Fr(n, r, 39), C = n & i ^ n & a ^ i & a, S = r & o ^ r & c ^ o & c;
        A = p | 0, I = w | 0, p = f | 0, w = g | 0, f = u | 0, g = h | 0, { h: u, l: h } = ns(l | 0, d | 0, k | 0, F | 0), l = a | 0, d = c | 0, a = i | 0, c = o | 0, i = n | 0, o = r | 0;
        const y = qc(F, x, S);
        n = Wc(y, k, j, C), r = y | 0;
      }
      ({ h: n, l: r } = ns(this.Ah | 0, this.Al | 0, n | 0, r | 0)), { h: i, l: o } = ns(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = ns(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = ns(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h: u, l: h } = ns(this.Eh | 0, this.El | 0, u | 0, h | 0), { h: f, l: g } = ns(this.Fh | 0, this.Fl | 0, f | 0, g | 0), { h: p, l: w } = ns(this.Gh | 0, this.Gl | 0, p | 0, w | 0), { h: A, l: I } = ns(this.Hh | 0, this.Hl | 0, A | 0, I | 0), this.set(n, r, i, o, a, c, l, d, u, h, f, g, p, w, A, I);
    }
    roundClean() {
      Zt(Xs, Qs);
    }
    destroy() {
      Zt(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  class D0 extends Hc {
    constructor() {
      super(48), this.Ah = nt[0] | 0, this.Al = nt[1] | 0, this.Bh = nt[2] | 0, this.Bl = nt[3] | 0, this.Ch = nt[4] | 0, this.Cl = nt[5] | 0, this.Dh = nt[6] | 0, this.Dl = nt[7] | 0, this.Eh = nt[8] | 0, this.El = nt[9] | 0, this.Fh = nt[10] | 0, this.Fl = nt[11] | 0, this.Gh = nt[12] | 0, this.Gl = nt[13] | 0, this.Hh = nt[14] | 0, this.Hl = nt[15] | 0;
    }
  }
  const it = Uint32Array.from([
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
  class B0 extends Hc {
    constructor() {
      super(32), this.Ah = it[0] | 0, this.Al = it[1] | 0, this.Bh = it[2] | 0, this.Bl = it[3] | 0, this.Ch = it[4] | 0, this.Cl = it[5] | 0, this.Dh = it[6] | 0, this.Dl = it[7] | 0, this.Eh = it[8] | 0, this.El = it[9] | 0, this.Fh = it[10] | 0, this.Fl = it[11] | 0, this.Gh = it[12] | 0, this.Gl = it[13] | 0, this.Hh = it[14] | 0, this.Hl = it[15] | 0;
    }
  }
  const So = gi(() => new R0()), L0 = gi(() => new Hc()), M0 = gi(() => new D0()), F0 = gi(() => new B0()), q0 = Uint8Array.from([
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
  ]), je = Uint32Array.from([
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
  ]), J = new Uint32Array(32);
  function en(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = J[2 * t], l = J[2 * t + 1], d = J[2 * e], u = J[2 * e + 1], h = J[2 * s], f = J[2 * s + 1], g = J[2 * n], p = J[2 * n + 1], w = qc(c, d, o);
    l = Wc(w, l, u, a), c = w | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: i0(p, g),
      Dl: o0(p)
    }, { h: f, l: h } = ns(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: sn(u, d, 24),
      Bl: nn(u, d, 24)
    }, J[2 * t] = c, J[2 * t + 1] = l, J[2 * e] = d, J[2 * e + 1] = u, J[2 * s] = h, J[2 * s + 1] = f, J[2 * n] = g, J[2 * n + 1] = p;
  }
  function tn(t, e, s, n, r, i) {
    const o = r[i], a = r[i + 1];
    let c = J[2 * t], l = J[2 * t + 1], d = J[2 * e], u = J[2 * e + 1], h = J[2 * s], f = J[2 * s + 1], g = J[2 * n], p = J[2 * n + 1], w = qc(c, d, o);
    l = Wc(w, l, u, a), c = w | 0, { Dh: p, Dl: g } = {
      Dh: p ^ l,
      Dl: g ^ c
    }, { Dh: p, Dl: g } = {
      Dh: sn(p, g, 16),
      Dl: nn(p, g, 16)
    }, { h: f, l: h } = ns(f, h, p, g), { Bh: u, Bl: d } = {
      Bh: u ^ f,
      Bl: d ^ h
    }, { Bh: u, Bl: d } = {
      Bh: Mr(u, d, 63),
      Bl: Fr(u, d, 63)
    }, J[2 * t] = c, J[2 * t + 1] = l, J[2 * e] = d, J[2 * e + 1] = u, J[2 * s] = h, J[2 * s + 1] = f, J[2 * n] = g, J[2 * n + 1] = p;
  }
  function W0(t, e = {}, s, n, r) {
    if (Vs(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
    const { key: i, salt: o, personalization: a } = e;
    if (i !== void 0 && (i.length < 1 || i.length > s)) throw new Error("key length must be undefined or 1.." + s);
    if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
    if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
  }
  class j0 extends No {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, Vs(e), Vs(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = si(this.buffer);
    }
    update(e) {
      mn(this), e = cs(e), ls(e);
      const { blockLen: s, buffer: n, buffer32: r } = this, i = e.length, o = e.byteOffset, a = e.buffer;
      for (let c = 0; c < i; ) {
        this.pos === s && (rn(r), this.compress(r, 0, false), rn(r), this.pos = 0);
        const l = Math.min(s - this.pos, i - c), d = o + c;
        if (l === s && !(d % 4) && c + l < i) {
          const u = new Uint32Array(a, d, Math.floor((i - c) / 4));
          rn(u);
          for (let h = 0; c + s < i; h += r.length, c += s) this.length += s, this.compress(u, h, false);
          rn(u);
          continue;
        }
        n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
      }
      return this;
    }
    digestInto(e) {
      mn(this), jc(e, this);
      const { pos: s, buffer32: n } = this;
      this.finished = true, Zt(this.buffer.subarray(s)), rn(n), this.compress(n, 0, true), rn(n);
      const r = si(e);
      this.get().forEach((i, o) => r[o] = ks(i));
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
  class H0 extends j0 {
    constructor(e = {}) {
      const s = e.dkLen === void 0 ? 64 : e.dkLen;
      super(128, s), this.v0l = je[0] | 0, this.v0h = je[1] | 0, this.v1l = je[2] | 0, this.v1h = je[3] | 0, this.v2l = je[4] | 0, this.v2h = je[5] | 0, this.v3l = je[6] | 0, this.v3h = je[7] | 0, this.v4l = je[8] | 0, this.v4h = je[9] | 0, this.v5l = je[10] | 0, this.v5h = je[11] | 0, this.v6l = je[12] | 0, this.v6h = je[13] | 0, this.v7l = je[14] | 0, this.v7h = je[15] | 0, W0(s, e, 64, 16, 16);
      let { key: n, personalization: r, salt: i } = e, o = 0;
      if (n !== void 0 && (n = cs(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, i !== void 0) {
        i = cs(i);
        const a = si(i);
        this.v4l ^= ks(a[0]), this.v4h ^= ks(a[1]), this.v5l ^= ks(a[2]), this.v5h ^= ks(a[3]);
      }
      if (r !== void 0) {
        r = cs(r);
        const a = si(r);
        this.v6l ^= ks(a[0]), this.v6h ^= ks(a[1]), this.v7l ^= ks(a[2]), this.v7h ^= ks(a[3]);
      }
      if (n !== void 0) {
        const a = new Uint8Array(this.blockLen);
        a.set(n), this.update(a);
      }
    }
    get() {
      let { v0l: e, v0h: s, v1l: n, v1h: r, v2l: i, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: u, v5h: h, v6l: f, v6h: g, v7l: p, v7h: w } = this;
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
        w
      ];
    }
    set(e, s, n, r, i, o, a, c, l, d, u, h, f, g, p, w) {
      this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = r | 0, this.v2l = i | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = u | 0, this.v5h = h | 0, this.v6l = f | 0, this.v6h = g | 0, this.v7l = p | 0, this.v7h = w | 0;
    }
    compress(e, s, n) {
      this.get().forEach((c, l) => J[l] = c), J.set(je, 16);
      let { h: r, l: i } = Vh(BigInt(this.length));
      J[24] = je[8] ^ i, J[25] = je[9] ^ r, n && (J[28] = ~J[28], J[29] = ~J[29]);
      let o = 0;
      const a = q0;
      for (let c = 0; c < 12; c++) en(0, 4, 8, 12, e, s + 2 * a[o++]), tn(0, 4, 8, 12, e, s + 2 * a[o++]), en(1, 5, 9, 13, e, s + 2 * a[o++]), tn(1, 5, 9, 13, e, s + 2 * a[o++]), en(2, 6, 10, 14, e, s + 2 * a[o++]), tn(2, 6, 10, 14, e, s + 2 * a[o++]), en(3, 7, 11, 15, e, s + 2 * a[o++]), tn(3, 7, 11, 15, e, s + 2 * a[o++]), en(0, 5, 10, 15, e, s + 2 * a[o++]), tn(0, 5, 10, 15, e, s + 2 * a[o++]), en(1, 6, 11, 12, e, s + 2 * a[o++]), tn(1, 6, 11, 12, e, s + 2 * a[o++]), en(2, 7, 8, 13, e, s + 2 * a[o++]), tn(2, 7, 8, 13, e, s + 2 * a[o++]), en(3, 4, 9, 14, e, s + 2 * a[o++]), tn(3, 4, 9, 14, e, s + 2 * a[o++]);
      this.v0l ^= J[0] ^ J[16], this.v0h ^= J[1] ^ J[17], this.v1l ^= J[2] ^ J[18], this.v1h ^= J[3] ^ J[19], this.v2l ^= J[4] ^ J[20], this.v2h ^= J[5] ^ J[21], this.v3l ^= J[6] ^ J[22], this.v3h ^= J[7] ^ J[23], this.v4l ^= J[8] ^ J[24], this.v4h ^= J[9] ^ J[25], this.v5l ^= J[10] ^ J[26], this.v5h ^= J[11] ^ J[27], this.v6l ^= J[12] ^ J[28], this.v6h ^= J[13] ^ J[29], this.v7l ^= J[14] ^ J[30], this.v7h ^= J[15] ^ J[31], Zt(J);
    }
    destroy() {
      this.destroyed = true, Zt(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const z0 = w0((t) => new H0(t)), V0 = "https://rpc.walletconnect.org/v1";
  function ip(t) {
    const e = `Ethereum Signed Message:
${t.length}`, s = new TextEncoder().encode(e + t);
    return "0x" + Ee.from(T0(s)).toString("hex");
  }
  async function K0(t, e, s, n, r, i) {
    switch (s.t) {
      case "eip191":
        return await G0(t, e, s.s);
      case "eip1271":
        return await Y0(t, e, s.s, n, r, i);
      default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`);
    }
  }
  function G0(t, e, s) {
    const n = Ww(s);
    return Kw({
      payload: ip(e),
      signature: n
    }).toLowerCase() === t.toLowerCase();
  }
  async function Y0(t, e, s, n, r, i) {
    const o = Ws(n);
    if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${n}`);
    try {
      const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", l = s.substring(2), d = (l.length / 2).toString(16).padStart(64, "0"), u = (e.startsWith("0x") ? e : ip(e)).substring(2), h = a + u + c + d + l, f = await fetch(`${i || V0}/?chainId=${n}&projectId=${r}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          id: J0(),
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
  function J0() {
    return Date.now() + Math.floor(Math.random() * 1e3);
  }
  function Z0(t) {
    const e = atob(t), s = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
    const n = s[0];
    if (n === 0) throw new Error("No signatures found");
    const r = 1 + n * 64;
    if (s.length < r) throw new Error("Transaction data too short for claimed signature count");
    if (s.length < 100) throw new Error("Transaction too short");
    const i = Ee.from(t, "base64").slice(1, 65);
    return pi.encode(i);
  }
  function X0(t) {
    const e = new Uint8Array(Ee.from(t, "base64")), s = Array.from("TransactionData::").map((i) => i.charCodeAt(0)), n = new Uint8Array(s.length + e.length);
    n.set(s), n.set(e, s.length);
    const r = z0(n, {
      dkLen: 32
    });
    return pi.encode(r);
  }
  function td(t) {
    const e = new Uint8Array(So(Q0(t)));
    return pi.encode(e);
  }
  function Q0(t) {
    if (t instanceof Uint8Array) return t;
    if (Array.isArray(t)) return new Uint8Array(t);
    if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
    if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
    throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
  }
  function sd(t) {
    const e = Ee.from(t, "base64"), s = ky(e).txn;
    if (!s) throw new Error("Invalid signed transaction: missing 'txn' field");
    const n = vy(s), r = Ee.from("TX"), i = Ee.concat([
      r,
      Ee.from(n)
    ]), o = F0(i);
    return Jf.encode(o).replace(/=+$/, "");
  }
  function sa(t) {
    const e = [];
    let s = BigInt(t);
    for (; s >= BigInt(128); ) e.push(Number(s & BigInt(127) | BigInt(128))), s >>= BigInt(7);
    return e.push(Number(s)), Ee.from(e);
  }
  function eb(t) {
    const e = Ee.from(t.signed.bodyBytes, "base64"), s = Ee.from(t.signed.authInfoBytes, "base64"), n = Ee.from(t.signature.signature, "base64"), r = [];
    r.push(Ee.from([
      10
    ])), r.push(sa(e.length)), r.push(e), r.push(Ee.from([
      18
    ])), r.push(sa(s.length)), r.push(s), r.push(Ee.from([
      26
    ])), r.push(sa(n.length)), r.push(n);
    const i = Ee.concat(r), o = So(i);
    return Ee.from(o).toString("hex").toUpperCase();
  }
  function tb(t) {
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
  var sb = Object.defineProperty, nb = Object.defineProperties, rb = Object.getOwnPropertyDescriptors, nd = Object.getOwnPropertySymbols, ib = Object.prototype.hasOwnProperty, ob = Object.prototype.propertyIsEnumerable, rd = (t, e, s) => e in t ? sb(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ab = (t, e) => {
    for (var s in e || (e = {})) ib.call(e, s) && rd(t, s, e[s]);
    if (nd) for (var s of nd(e)) ob.call(e, s) && rd(t, s, e[s]);
    return t;
  }, cb = (t, e) => nb(t, rb(e));
  const op = "did:pkh:", lb = {
    eip155: "Ethereum",
    solana: "Solana",
    bip122: "Bitcoin"
  }, db = (t) => t ? lb[t] || t : "", _o = (t) => t == null ? void 0 : t.split(":"), ub = (t) => {
    const e = t && _o(t);
    if (e) return t.includes(op) ? e[3] : e[1];
  }, hb = (t) => {
    const e = t && _o(t);
    if (e) return t.includes(op) ? e[2] : e[0];
  }, Va = (t) => {
    const e = t && _o(t);
    if (e) return e[2] + ":" + e[3];
  }, lo = (t) => {
    const e = t && _o(t);
    if (e) return e.pop();
  };
  async function id(t) {
    const { cacao: e, projectId: s } = t, { s: n, p: r } = e, i = ap(r, r.iss), o = lo(r.iss);
    return await K0(o, i, n, Va(r.iss), s);
  }
  const ap = (t, e) => {
    const s = hb(e);
    if (!s) throw new Error("Invalid issuer: " + e);
    const n = `${t.domain} wants you to sign in with your ${db(s)} account:`, r = lo(e);
    if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let i = t.statement || void 0;
    const o = `URI: ${t.aud || t.uri}`, a = `Version: ${t.version}`, c = `Chain ID: ${ub(e)}`, l = `Nonce: ${t.nonce}`, d = `Issued At: ${t.iat}`, u = t.exp ? `Expiration Time: ${t.exp}` : void 0, h = t.nbf ? `Not Before: ${t.nbf}` : void 0, f = t.requestId ? `Request ID: ${t.requestId}` : void 0, g = t.resources ? `Resources:${t.resources.map((w) => `
- ${w}`).join("")}` : void 0, p = zi(t.resources);
    if (p) {
      const w = ni(p);
      i = Cb(i, w);
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
    ].filter((w) => w != null).join(`
`);
  };
  function pb(t) {
    return Ee.from(JSON.stringify(t)).toString("base64");
  }
  function fb(t) {
    return JSON.parse(Ee.from(t, "base64").toString("utf-8"));
  }
  function qn(t) {
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
  function gb(t, e, s, n = {}) {
    return s == null ? void 0 : s.sort((r, i) => r.localeCompare(i)), {
      att: {
        [t]: mb(e, s, n)
      }
    };
  }
  function mb(t, e, s = {}) {
    e = e == null ? void 0 : e.sort((r, i) => r.localeCompare(i));
    const n = e.map((r) => ({
      [`${t}/${r}`]: [
        s
      ]
    }));
    return Object.assign({}, ...n);
  }
  function cp(t) {
    return qn(t), `urn:recap:${pb(t).replace(/=/g, "")}`;
  }
  function ni(t) {
    const e = fb(t.replace("urn:recap:", ""));
    return qn(e), e;
  }
  function wb(t, e, s) {
    const n = gb(t, e, s);
    return cp(n);
  }
  function yb(t) {
    return t && t.includes("urn:recap:");
  }
  function bb(t, e) {
    const s = ni(t), n = ni(e), r = Eb(s, n);
    return cp(r);
  }
  function Eb(t, e) {
    qn(t), qn(e);
    const s = Object.keys(t.att).concat(Object.keys(e.att)).sort((r, i) => r.localeCompare(i)), n = {
      att: {}
    };
    return s.forEach((r) => {
      var i, o;
      Object.keys(((i = t.att) == null ? void 0 : i[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
        var c, l;
        n.att[r] = cb(ab({}, n.att[r]), {
          [a]: ((c = t.att[r]) == null ? void 0 : c[a]) || ((l = e.att[r]) == null ? void 0 : l[a])
        });
      });
    }), n;
  }
  function Cb(t = "", e) {
    qn(e);
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
  function od(t) {
    var e;
    const s = ni(t);
    qn(s);
    const n = (e = s.att) == null ? void 0 : e.eip155;
    return n ? Object.keys(n).map((r) => r.split("/")[1]) : [];
  }
  function ad(t) {
    const e = ni(t);
    qn(e);
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
  function zi(t) {
    if (!t) return;
    const e = t == null ? void 0 : t[t.length - 1];
    return yb(e) ? e : void 0;
  }
  function lp(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  function Ka(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  function na(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  function vt(t, ...e) {
    if (!lp(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
  }
  function cd(t, e = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called");
  }
  function vb(t, e) {
    vt(t);
    const s = e.outputLen;
    if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
  }
  function hn(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  function wr(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function Ab(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  const Ib = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  function Nb(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function Ga(t) {
    if (typeof t == "string") t = Nb(t);
    else if (lp(t)) t = Ya(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  function Sb(t, e) {
    if (e == null || typeof e != "object") throw new Error("options must be defined");
    return Object.assign(t, e);
  }
  function _b(t, e) {
    if (t.length !== e.length) return false;
    let s = 0;
    for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
    return s === 0;
  }
  const Tb = (t, e) => {
    function s(n, ...r) {
      if (vt(n), !Ib) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const l = r[0];
        if (!l) throw new Error("nonce / iv required");
        t.varSizeNonce ? vt(l) : vt(l, t.nonceLength);
      }
      const i = t.tagLength;
      i && r[1] !== void 0 && vt(r[1]);
      const o = e(n, ...r), a = (l, d) => {
        if (d !== void 0) {
          if (l !== 2) throw new Error("cipher output not supported");
          vt(d);
        }
      };
      let c = false;
      return {
        encrypt(l, d) {
          if (c) throw new Error("cannot encrypt() twice with same key + nonce");
          return c = true, vt(l), a(o.encrypt.length, d), o.encrypt(l, d);
        },
        decrypt(l, d) {
          if (vt(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
          return a(o.decrypt.length, d), o.decrypt(l, d);
        }
      };
    }
    return Object.assign(s, t), s;
  };
  function ld(t, e, s = true) {
    if (e === void 0) return new Uint8Array(t);
    if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
    if (s && !kb(e)) throw new Error("invalid output, must be aligned");
    return e;
  }
  function dd(t, e, s, n) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
    const r = BigInt(32), i = BigInt(4294967295), o = Number(s >> r & i), a = Number(s & i);
    t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
  }
  function Ob(t, e, s) {
    Ka(s);
    const n = new Uint8Array(16), r = Ab(n);
    return dd(r, 0, BigInt(e), s), dd(r, 8, BigInt(t), s), n;
  }
  function kb(t) {
    return t.byteOffset % 4 === 0;
  }
  function Ya(t) {
    return Uint8Array.from(t);
  }
  const dp = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), xb = dp("expand 16-byte k"), Pb = dp("expand 32-byte k"), Rb = hn(xb), Ub = hn(Pb);
  function Ce(t, e) {
    return t << e | t >>> 32 - e;
  }
  function Ja(t) {
    return t.byteOffset % 4 === 0;
  }
  const ki = 64, $b = 16, up = 2 ** 32 - 1, ud = new Uint32Array();
  function Db(t, e, s, n, r, i, o, a) {
    const c = r.length, l = new Uint8Array(ki), d = hn(l), u = Ja(r) && Ja(i), h = u ? hn(r) : ud, f = u ? hn(i) : ud;
    for (let g = 0; g < c; o++) {
      if (t(e, s, n, d, o, a), o >= up) throw new Error("arx: counter overflow");
      const p = Math.min(ki, c - g);
      if (u && p === ki) {
        const w = g / 4;
        if (g % 4 !== 0) throw new Error("arx: invalid block position");
        for (let A = 0, I; A < $b; A++) I = w + A, f[I] = h[I] ^ d[A];
        g += ki;
        continue;
      }
      for (let w = 0, A; w < p; w++) A = g + w, i[A] = r[A] ^ l[w];
      g += p;
    }
  }
  function Bb(t, e) {
    const { allowShortKeys: s, extendNonceFn: n, counterLength: r, counterRight: i, rounds: o } = Sb({
      allowShortKeys: false,
      counterLength: 8,
      counterRight: false,
      rounds: 20
    }, e);
    if (typeof t != "function") throw new Error("core must be a function");
    return na(r), na(o), Ka(i), Ka(s), (a, c, l, d, u = 0) => {
      vt(a), vt(c), vt(l);
      const h = l.length;
      if (d === void 0 && (d = new Uint8Array(h)), vt(d), na(u), u < 0 || u >= up) throw new Error("arx: counter overflow");
      if (d.length < h) throw new Error(`arx: output (${d.length}) is shorter than data (${h})`);
      const f = [];
      let g = a.length, p, w;
      if (g === 32) f.push(p = Ya(a)), w = Ub;
      else if (g === 16 && s) p = new Uint8Array(32), p.set(a), p.set(a, 16), w = Rb, f.push(p);
      else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
      Ja(c) || f.push(c = Ya(c));
      const A = hn(p);
      if (n) {
        if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        n(w, A, hn(c.subarray(0, 16)), A), c = c.subarray(16);
      }
      const I = 16 - r;
      if (I !== c.length) throw new Error(`arx: nonce must be ${I} or 16 bytes`);
      if (I !== 12) {
        const b = new Uint8Array(12);
        b.set(c, i ? 0 : 12 - c.length), c = b, f.push(c);
      }
      const v = hn(c);
      return Db(t, w, A, v, l, d, u, o), wr(...f), d;
    };
  }
  const Ye = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
  class Lb {
    constructor(e) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = Ga(e), vt(e, 32);
      const s = Ye(e, 0), n = Ye(e, 2), r = Ye(e, 4), i = Ye(e, 6), o = Ye(e, 8), a = Ye(e, 10), c = Ye(e, 12), l = Ye(e, 14);
      this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
      for (let d = 0; d < 8; d++) this.pad[d] = Ye(e, 16 + 2 * d);
    }
    process(e, s, n = false) {
      const r = n ? 0 : 2048, { h: i, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], u = o[4], h = o[5], f = o[6], g = o[7], p = o[8], w = o[9], A = Ye(e, s + 0), I = Ye(e, s + 2), v = Ye(e, s + 4), b = Ye(e, s + 6), T = Ye(e, s + 8), R = Ye(e, s + 10), D = Ye(e, s + 12), M = Ye(e, s + 14);
      let k = i[0] + (A & 8191), F = i[1] + ((A >>> 13 | I << 3) & 8191), j = i[2] + ((I >>> 10 | v << 6) & 8191), x = i[3] + ((v >>> 7 | b << 9) & 8191), C = i[4] + ((b >>> 4 | T << 12) & 8191), S = i[5] + (T >>> 1 & 8191), y = i[6] + ((T >>> 14 | R << 2) & 8191), E = i[7] + ((R >>> 11 | D << 5) & 8191), _ = i[8] + ((D >>> 8 | M << 8) & 8191), $ = i[9] + (M >>> 5 | r), N = 0, O = N + k * a + F * (5 * w) + j * (5 * p) + x * (5 * g) + C * (5 * f);
      N = O >>> 13, O &= 8191, O += S * (5 * h) + y * (5 * u) + E * (5 * d) + _ * (5 * l) + $ * (5 * c), N += O >>> 13, O &= 8191;
      let W = N + k * c + F * a + j * (5 * w) + x * (5 * p) + C * (5 * g);
      N = W >>> 13, W &= 8191, W += S * (5 * f) + y * (5 * h) + E * (5 * u) + _ * (5 * d) + $ * (5 * l), N += W >>> 13, W &= 8191;
      let H = N + k * l + F * c + j * a + x * (5 * w) + C * (5 * p);
      N = H >>> 13, H &= 8191, H += S * (5 * g) + y * (5 * f) + E * (5 * h) + _ * (5 * u) + $ * (5 * d), N += H >>> 13, H &= 8191;
      let ae = N + k * d + F * l + j * c + x * a + C * (5 * w);
      N = ae >>> 13, ae &= 8191, ae += S * (5 * p) + y * (5 * g) + E * (5 * f) + _ * (5 * h) + $ * (5 * u), N += ae >>> 13, ae &= 8191;
      let ne = N + k * u + F * d + j * l + x * c + C * a;
      N = ne >>> 13, ne &= 8191, ne += S * (5 * w) + y * (5 * p) + E * (5 * g) + _ * (5 * f) + $ * (5 * h), N += ne >>> 13, ne &= 8191;
      let Q = N + k * h + F * u + j * d + x * l + C * c;
      N = Q >>> 13, Q &= 8191, Q += S * a + y * (5 * w) + E * (5 * p) + _ * (5 * g) + $ * (5 * f), N += Q >>> 13, Q &= 8191;
      let le = N + k * f + F * h + j * u + x * d + C * l;
      N = le >>> 13, le &= 8191, le += S * c + y * a + E * (5 * w) + _ * (5 * p) + $ * (5 * g), N += le >>> 13, le &= 8191;
      let ie = N + k * g + F * f + j * h + x * u + C * d;
      N = ie >>> 13, ie &= 8191, ie += S * l + y * c + E * a + _ * (5 * w) + $ * (5 * p), N += ie >>> 13, ie &= 8191;
      let Ne = N + k * p + F * g + j * f + x * h + C * u;
      N = Ne >>> 13, Ne &= 8191, Ne += S * d + y * l + E * c + _ * a + $ * (5 * w), N += Ne >>> 13, Ne &= 8191;
      let ce = N + k * w + F * p + j * g + x * f + C * h;
      N = ce >>> 13, ce &= 8191, ce += S * u + y * d + E * l + _ * c + $ * a, N += ce >>> 13, ce &= 8191, N = (N << 2) + N | 0, N = N + O | 0, O = N & 8191, N = N >>> 13, W += N, i[0] = O, i[1] = W, i[2] = H, i[3] = ae, i[4] = ne, i[5] = Q, i[6] = le, i[7] = ie, i[8] = Ne, i[9] = ce;
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
      wr(n);
    }
    update(e) {
      cd(this), e = Ga(e), vt(e);
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
      wr(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e) {
      cd(this), vb(e, this), this.finished = true;
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
  function Mb(t) {
    const e = (n, r) => t(r).update(Ga(n)).digest(), s = t(new Uint8Array(32));
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
  }
  const Fb = Mb((t) => new Lb(t));
  function qb(t, e, s, n, r, i = 20) {
    let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], u = e[1], h = e[2], f = e[3], g = e[4], p = e[5], w = e[6], A = e[7], I = r, v = s[0], b = s[1], T = s[2], R = o, D = a, M = c, k = l, F = d, j = u, x = h, C = f, S = g, y = p, E = w, _ = A, $ = I, N = v, O = b, W = T;
    for (let ae = 0; ae < i; ae += 2) R = R + F | 0, $ = Ce($ ^ R, 16), S = S + $ | 0, F = Ce(F ^ S, 12), R = R + F | 0, $ = Ce($ ^ R, 8), S = S + $ | 0, F = Ce(F ^ S, 7), D = D + j | 0, N = Ce(N ^ D, 16), y = y + N | 0, j = Ce(j ^ y, 12), D = D + j | 0, N = Ce(N ^ D, 8), y = y + N | 0, j = Ce(j ^ y, 7), M = M + x | 0, O = Ce(O ^ M, 16), E = E + O | 0, x = Ce(x ^ E, 12), M = M + x | 0, O = Ce(O ^ M, 8), E = E + O | 0, x = Ce(x ^ E, 7), k = k + C | 0, W = Ce(W ^ k, 16), _ = _ + W | 0, C = Ce(C ^ _, 12), k = k + C | 0, W = Ce(W ^ k, 8), _ = _ + W | 0, C = Ce(C ^ _, 7), R = R + j | 0, W = Ce(W ^ R, 16), E = E + W | 0, j = Ce(j ^ E, 12), R = R + j | 0, W = Ce(W ^ R, 8), E = E + W | 0, j = Ce(j ^ E, 7), D = D + x | 0, $ = Ce($ ^ D, 16), _ = _ + $ | 0, x = Ce(x ^ _, 12), D = D + x | 0, $ = Ce($ ^ D, 8), _ = _ + $ | 0, x = Ce(x ^ _, 7), M = M + C | 0, N = Ce(N ^ M, 16), S = S + N | 0, C = Ce(C ^ S, 12), M = M + C | 0, N = Ce(N ^ M, 8), S = S + N | 0, C = Ce(C ^ S, 7), k = k + F | 0, O = Ce(O ^ k, 16), y = y + O | 0, F = Ce(F ^ y, 12), k = k + F | 0, O = Ce(O ^ k, 8), y = y + O | 0, F = Ce(F ^ y, 7);
    let H = 0;
    n[H++] = o + R | 0, n[H++] = a + D | 0, n[H++] = c + M | 0, n[H++] = l + k | 0, n[H++] = d + F | 0, n[H++] = u + j | 0, n[H++] = h + x | 0, n[H++] = f + C | 0, n[H++] = g + S | 0, n[H++] = p + y | 0, n[H++] = w + E | 0, n[H++] = A + _ | 0, n[H++] = I + $ | 0, n[H++] = v + N | 0, n[H++] = b + O | 0, n[H++] = T + W | 0;
  }
  const Wb = Bb(qb, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
  }), jb = new Uint8Array(16), hd = (t, e) => {
    t.update(e);
    const s = e.length % 16;
    s && t.update(jb.subarray(s));
  }, Hb = new Uint8Array(32);
  function pd(t, e, s, n, r) {
    const i = t(e, s, Hb), o = Fb.create(i);
    r && hd(o, r), hd(o, n);
    const a = Ob(n.length, r ? r.length : 0, true);
    o.update(a);
    const c = o.digest();
    return wr(i, a), c;
  }
  const zb = (t) => (e, s, n) => ({
    encrypt(r, i) {
      const o = r.length;
      i = ld(o + 16, i, false), i.set(r);
      const a = i.subarray(0, -16);
      t(e, s, a, a, 1);
      const c = pd(t, e, s, a, n);
      return i.set(c, o), wr(c), i;
    },
    decrypt(r, i) {
      i = ld(r.length - 16, i, false);
      const o = r.subarray(0, -16), a = r.subarray(-16), c = pd(t, e, s, o, n);
      if (!_b(a, c)) throw new Error("invalid tag");
      return i.set(r.subarray(0, -16)), t(e, s, i, i, 1), wr(c), i;
    }
  }), hp = Tb({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
  }, zb(Wb));
  let pp = class extends No {
    constructor(e, s) {
      super(), this.finished = false, this.destroyed = false, Io(e);
      const n = cs(s);
      if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const r = this.blockLen, i = new Uint8Array(r);
      i.set(n.length > r ? e.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = e.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), Zt(i);
    }
    update(e) {
      return mn(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      mn(this), ls(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
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
  const To = (t, e, s) => new pp(t, e).update(s).digest();
  To.create = (t, e) => new pp(t, e);
  function Vb(t, e, s) {
    return Io(t), s === void 0 && (s = new Uint8Array(t.outputLen)), To(t, cs(s), cs(e));
  }
  const ra = Uint8Array.from([
    0
  ]), fd = Uint8Array.of();
  function Kb(t, e, s, n = 32) {
    Io(t), Vs(n);
    const r = t.outputLen;
    if (n > 255 * r) throw new Error("Length should be <= 255*HashLen");
    const i = Math.ceil(n / r);
    s === void 0 && (s = fd);
    const o = new Uint8Array(i * r), a = To.create(t, e), c = a._cloneInto(), l = new Uint8Array(a.outputLen);
    for (let d = 0; d < i; d++) ra[0] = d + 1, c.update(d === 0 ? fd : l).update(s).update(ra).digestInto(l), o.set(l, r * d), a._cloneInto(c);
    return a.destroy(), c.destroy(), Zt(l, ra), o.slice(0, n);
  }
  const Gb = (t, e, s, n, r) => Kb(t, Vb(t, e, s), n, r), Oo = So, zc = BigInt(0), Za = BigInt(1);
  function uo(t, e = "") {
    if (typeof t != "boolean") {
      const s = e && `"${e}"`;
      throw new Error(s + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  function Rn(t, e, s = "") {
    const n = Ao(t), r = t == null ? void 0 : t.length, i = e !== void 0;
    if (!n || i && r !== e) {
      const o = s && `"${s}" `, a = i ? ` of length ${e}` : "", c = n ? `length=${r}` : `type=${typeof t}`;
      throw new Error(o + "expected Uint8Array" + a + ", got " + c);
    }
    return t;
  }
  function xi(t) {
    const e = t.toString(16);
    return e.length & 1 ? "0" + e : e;
  }
  function fp(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? zc : BigInt("0x" + t);
  }
  function ko(t) {
    return fp(hr(t));
  }
  function ho(t) {
    return ls(t), fp(hr(Uint8Array.from(t).reverse()));
  }
  function Vc(t, e) {
    return co(t.toString(16).padStart(e * 2, "0"));
  }
  function Kc(t, e) {
    return Vc(t, e).reverse();
  }
  function at(t, e, s) {
    let n;
    if (typeof e == "string") try {
      n = co(e);
    } catch (i) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
    }
    else if (Ao(e)) n = Uint8Array.from(e);
    else throw new Error(t + " must be hex string or Uint8Array");
    const r = n.length;
    if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
    return n;
  }
  const ia = (t) => typeof t == "bigint" && zc <= t;
  function Yb(t, e, s) {
    return ia(t) && ia(e) && ia(s) && e <= t && t < s;
  }
  function Xa(t, e, s, n) {
    if (!Yb(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
  }
  function gp(t) {
    let e;
    for (e = 0; t > zc; t >>= Za, e += 1) ;
    return e;
  }
  const mi = (t) => (Za << BigInt(t)) - Za;
  function Jb(t, e, s) {
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
      return on(...f);
    };
    return (h, f) => {
      c(), d(h);
      let g;
      for (; !(g = f(u())); ) d();
      return c(), g;
    };
  }
  function xo(t, e, s = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function n(r, i, o) {
      const a = t[r];
      if (o && a === void 0) return;
      const c = typeof a;
      if (c !== i || a === null) throw new Error(`param "${r}" is invalid: expected ${i}, got ${c}`);
    }
    Object.entries(e).forEach(([r, i]) => n(r, i, false)), Object.entries(s).forEach(([r, i]) => n(r, i, true));
  }
  function gd(t) {
    const e = /* @__PURE__ */ new WeakMap();
    return (s, ...n) => {
      const r = e.get(s);
      if (r !== void 0) return r;
      const i = t(s, ...n);
      return e.set(s, i), i;
    };
  }
  const Nt = BigInt(0), ft = BigInt(1), Un = BigInt(2), mp = BigInt(3), wp = BigInt(4), yp = BigInt(5), Zb = BigInt(7), bp = BigInt(8), Xb = BigInt(9), Ep = BigInt(16);
  function Ut(t, e) {
    const s = t % e;
    return s >= Nt ? s : e + s;
  }
  function ss(t, e, s) {
    let n = t;
    for (; e-- > Nt; ) n *= n, n %= s;
    return n;
  }
  function md(t, e) {
    if (t === Nt) throw new Error("invert: expected non-zero number");
    if (e <= Nt) throw new Error("invert: expected positive modulus, got " + e);
    let s = Ut(t, e), n = e, r = Nt, i = ft;
    for (; s !== Nt; ) {
      const o = n / s, a = n % s, c = r - i * o;
      n = s, s = a, r = i, i = c;
    }
    if (n !== ft) throw new Error("invert: does not exist");
    return Ut(r, e);
  }
  function Gc(t, e, s) {
    if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
  }
  function Cp(t, e) {
    const s = (t.ORDER + ft) / wp, n = t.pow(e, s);
    return Gc(t, n, e), n;
  }
  function Qb(t, e) {
    const s = (t.ORDER - yp) / bp, n = t.mul(e, Un), r = t.pow(n, s), i = t.mul(e, r), o = t.mul(t.mul(i, Un), r), a = t.mul(i, t.sub(o, t.ONE));
    return Gc(t, a, e), a;
  }
  function eE(t) {
    const e = yn(t), s = vp(t), n = s(e, e.neg(e.ONE)), r = s(e, n), i = s(e, e.neg(n)), o = (t + Zb) / Ep;
    return (a, c) => {
      let l = a.pow(c, o), d = a.mul(l, n);
      const u = a.mul(l, r), h = a.mul(l, i), f = a.eql(a.sqr(d), c), g = a.eql(a.sqr(u), c);
      l = a.cmov(l, d, f), d = a.cmov(h, u, g);
      const p = a.eql(a.sqr(d), c), w = a.cmov(l, d, p);
      return Gc(a, w, c), w;
    };
  }
  function vp(t) {
    if (t < mp) throw new Error("sqrt is not defined for small field");
    let e = t - ft, s = 0;
    for (; e % Un === Nt; ) e /= Un, s++;
    let n = Un;
    const r = yn(t);
    for (; wd(r, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (s === 1) return Cp;
    let i = r.pow(n, e);
    const o = (e + ft) / Un;
    return function(a, c) {
      if (a.is0(c)) return c;
      if (wd(a, c) !== 1) throw new Error("Cannot find square root");
      let l = s, d = a.mul(a.ONE, i), u = a.pow(c, e), h = a.pow(c, o);
      for (; !a.eql(u, a.ONE); ) {
        if (a.is0(u)) return a.ZERO;
        let f = 1, g = a.sqr(u);
        for (; !a.eql(g, a.ONE); ) if (f++, g = a.sqr(g), f === l) throw new Error("Cannot find square root");
        const p = ft << BigInt(l - f - 1), w = a.pow(d, p);
        l = f, d = a.sqr(w), u = a.mul(u, d), h = a.mul(h, w);
      }
      return h;
    };
  }
  function tE(t) {
    return t % wp === mp ? Cp : t % bp === yp ? Qb : t % Ep === Xb ? eE(t) : vp(t);
  }
  const sE = [
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
  function nE(t) {
    const e = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "number",
      BITS: "number"
    }, s = sE.reduce((n, r) => (n[r] = "function", n), e);
    return xo(t, s), t;
  }
  function rE(t, e, s) {
    if (s < Nt) throw new Error("invalid exponent, negatives unsupported");
    if (s === Nt) return t.ONE;
    if (s === ft) return e;
    let n = t.ONE, r = e;
    for (; s > Nt; ) s & ft && (n = t.mul(n, r)), r = t.sqr(r), s >>= ft;
    return n;
  }
  function Ap(t, e, s = false) {
    const n = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), i = t.inv(r);
    return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), i), n;
  }
  function wd(t, e) {
    const s = (t.ORDER - ft) / Un, n = t.pow(e, s), r = t.eql(n, t.ONE), i = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
    if (!r && !i && !o) throw new Error("invalid Legendre symbol result");
    return r ? 1 : i ? 0 : -1;
  }
  function Ip(t, e) {
    e !== void 0 && Vs(e);
    const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
    return {
      nBitLength: s,
      nByteLength: n
    };
  }
  function yn(t, e, s = false, n = {}) {
    if (t <= Nt) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let r, i, o = false, a;
    if (typeof e == "object" && e != null) {
      if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
      const h = e;
      h.BITS && (r = h.BITS), h.sqrt && (i = h.sqrt), typeof h.isLE == "boolean" && (s = h.isLE), typeof h.modFromBytes == "boolean" && (o = h.modFromBytes), a = h.allowedLengths;
    } else typeof e == "number" && (r = e), n.sqrt && (i = n.sqrt);
    const { nBitLength: c, nByteLength: l } = Ip(t, r);
    if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let d;
    const u = Object.freeze({
      ORDER: t,
      isLE: s,
      BITS: c,
      BYTES: l,
      MASK: mi(c),
      ZERO: Nt,
      ONE: ft,
      allowedLengths: a,
      create: (h) => Ut(h, t),
      isValid: (h) => {
        if (typeof h != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof h);
        return Nt <= h && h < t;
      },
      is0: (h) => h === Nt,
      isValidNot0: (h) => !u.is0(h) && u.isValid(h),
      isOdd: (h) => (h & ft) === ft,
      neg: (h) => Ut(-h, t),
      eql: (h, f) => h === f,
      sqr: (h) => Ut(h * h, t),
      add: (h, f) => Ut(h + f, t),
      sub: (h, f) => Ut(h - f, t),
      mul: (h, f) => Ut(h * f, t),
      pow: (h, f) => rE(u, h, f),
      div: (h, f) => Ut(h * md(f, t), t),
      sqrN: (h) => h * h,
      addN: (h, f) => h + f,
      subN: (h, f) => h - f,
      mulN: (h, f) => h * f,
      inv: (h) => md(h, t),
      sqrt: i || ((h) => (d || (d = tE(t)), d(u, h))),
      toBytes: (h) => s ? Kc(h, l) : Vc(h, l),
      fromBytes: (h, f = true) => {
        if (a) {
          if (!a.includes(h.length) || h.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + h.length);
          const p = new Uint8Array(l);
          p.set(h, s ? 0 : p.length - h.length), h = p;
        }
        if (h.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + h.length);
        let g = s ? ho(h) : ko(h);
        if (o && (g = Ut(g, t)), !f && !u.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
        return g;
      },
      invertBatch: (h) => Ap(u, h),
      cmov: (h, f, g) => g ? f : h
    });
    return Object.freeze(u);
  }
  function Np(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8);
  }
  function Sp(t) {
    const e = Np(t);
    return e + Math.ceil(e / 2);
  }
  function iE(t, e, s = false) {
    const n = t.length, r = Np(e), i = Sp(e);
    if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
    const o = s ? ho(t) : ko(t), a = Ut(o, e - ft) + ft;
    return s ? Kc(a, r) : Vc(a, r);
  }
  const yr = BigInt(0), $n = BigInt(1);
  function po(t, e) {
    const s = e.negate();
    return t ? s : e;
  }
  function oa(t, e) {
    const s = Ap(t.Fp, e.map((n) => n.Z));
    return e.map((n, r) => t.fromAffine(n.toAffine(s[r])));
  }
  function _p(t, e) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
  }
  function aa(t, e) {
    _p(t, e);
    const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), r = 2 ** t, i = mi(t), o = BigInt(t);
    return {
      windows: s,
      windowSize: n,
      mask: i,
      maxNumber: r,
      shiftBy: o
    };
  }
  function yd(t, e, s) {
    const { windowSize: n, mask: r, maxNumber: i, shiftBy: o } = s;
    let a = Number(t & r), c = t >> o;
    a > n && (a -= i, c += $n);
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
  function oE(t, e) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((s, n) => {
      if (!(s instanceof e)) throw new Error("invalid point at index " + n);
    });
  }
  function aE(t, e) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((s, n) => {
      if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
    });
  }
  const ca = /* @__PURE__ */ new WeakMap(), Tp = /* @__PURE__ */ new WeakMap();
  function la(t) {
    return Tp.get(t) || 1;
  }
  function bd(t) {
    if (t !== yr) throw new Error("invalid wNAF");
  }
  class cE {
    constructor(e, s) {
      this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
    }
    _unsafeLadder(e, s, n = this.ZERO) {
      let r = e;
      for (; s > yr; ) s & $n && (n = n.add(r)), r = r.double(), s >>= $n;
      return n;
    }
    precomputeWindow(e, s) {
      const { windows: n, windowSize: r } = aa(s, this.bits), i = [];
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
      const o = aa(e, this.bits);
      for (let a = 0; a < o.windows; a++) {
        const { nextN: c, offset: l, isZero: d, isNeg: u, isNegF: h, offsetF: f } = yd(n, a, o);
        n = c, d ? i = i.add(po(h, s[f])) : r = r.add(po(u, s[l]));
      }
      return bd(n), {
        p: r,
        f: i
      };
    }
    wNAFUnsafe(e, s, n, r = this.ZERO) {
      const i = aa(e, this.bits);
      for (let o = 0; o < i.windows && n !== yr; o++) {
        const { nextN: a, offset: c, isZero: l, isNeg: d } = yd(n, o, i);
        if (n = a, !l) {
          const u = s[c];
          r = r.add(d ? u.negate() : u);
        }
      }
      return bd(n), r;
    }
    getPrecomputes(e, s, n) {
      let r = ca.get(s);
      return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (r = n(r)), ca.set(s, r))), r;
    }
    cached(e, s, n) {
      const r = la(e);
      return this.wNAF(r, this.getPrecomputes(r, e, n), s);
    }
    unsafe(e, s, n, r) {
      const i = la(e);
      return i === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), s, r);
    }
    createCache(e, s) {
      _p(s, this.bits), Tp.set(e, s), ca.delete(e);
    }
    hasCache(e) {
      return la(e) !== 1;
    }
  }
  function lE(t, e, s, n) {
    let r = e, i = t.ZERO, o = t.ZERO;
    for (; s > yr || n > yr; ) s & $n && (i = i.add(r)), n & $n && (o = o.add(r)), r = r.double(), s >>= $n, n >>= $n;
    return {
      p1: i,
      p2: o
    };
  }
  function dE(t, e, s, n) {
    oE(s, t), aE(n, e);
    const r = s.length, i = n.length;
    if (r !== i) throw new Error("arrays of points and scalars must have equal length");
    const o = t.ZERO, a = gp(BigInt(r));
    let c = 1;
    a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
    const l = mi(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
    let h = o;
    for (let f = u; f >= 0; f -= c) {
      d.fill(o);
      for (let p = 0; p < i; p++) {
        const w = n[p], A = Number(w >> BigInt(f) & l);
        d[A] = d[A].add(s[p]);
      }
      let g = o;
      for (let p = d.length - 1, w = o; p > 0; p--) w = w.add(d[p]), g = g.add(w);
      if (h = h.add(g), f !== 0) for (let p = 0; p < c; p++) h = h.double();
    }
    return h;
  }
  function Ed(t, e, s) {
    if (e) {
      if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return nE(e), e;
    } else return yn(t, {
      isLE: s
    });
  }
  function uE(t, e, s = {}, n) {
    if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const a of [
      "p",
      "n",
      "h"
    ]) {
      const c = e[a];
      if (!(typeof c == "bigint" && c > yr)) throw new Error(`CURVE.${a} must be positive bigint`);
    }
    const r = Ed(e.p, s.Fp, n), i = Ed(e.n, s.Fn, n), o = [
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
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), Zh("HashToScalar-");
  const kr = BigInt(0), er = BigInt(1), Pi = BigInt(2);
  function hE(t) {
    return xo(t, {
      adjustScalarBytes: "function",
      powPminus2: "function"
    }), Object.freeze({
      ...t
    });
  }
  function pE(t) {
    const e = hE(t), { P: s, type: n, adjustScalarBytes: r, powPminus2: i, randomBytes: o } = e, a = n === "x25519";
    if (!a && n !== "x448") throw new Error("invalid type");
    const c = o || Gn, l = a ? 255 : 448, d = a ? 32 : 56, u = BigInt(a ? 9 : 5), h = BigInt(a ? 121665 : 39081), f = a ? Pi ** BigInt(254) : Pi ** BigInt(447), g = a ? BigInt(8) * Pi ** BigInt(251) - er : BigInt(4) * Pi ** BigInt(445) - er, p = f + g + er, w = (x) => Ut(x, s), A = I(u);
    function I(x) {
      return Kc(w(x), d);
    }
    function v(x) {
      const C = at("u coordinate", x, d);
      return a && (C[31] &= 127), w(ho(C));
    }
    function b(x) {
      return ho(r(at("scalar", x, d)));
    }
    function T(x, C) {
      const S = M(v(C), b(x));
      if (S === kr) throw new Error("invalid private or public key received");
      return I(S);
    }
    function R(x) {
      return T(x, A);
    }
    function D(x, C, S) {
      const y = w(x * (C - S));
      return C = w(C - y), S = w(S + y), {
        x_2: C,
        x_3: S
      };
    }
    function M(x, C) {
      Xa("u", x, kr, s), Xa("scalar", C, f, p);
      const S = C, y = x;
      let E = er, _ = kr, $ = x, N = er, O = kr;
      for (let H = BigInt(l - 1); H >= kr; H--) {
        const ae = S >> H & er;
        O ^= ae, { x_2: E, x_3: $ } = D(O, E, $), { x_2: _, x_3: N } = D(O, _, N), O = ae;
        const ne = E + _, Q = w(ne * ne), le = E - _, ie = w(le * le), Ne = Q - ie, ce = $ + N, Te = $ - N, ct = w(Te * ne), mt = w(ce * le), lt = ct + mt, Lt = ct - mt;
        $ = w(lt * lt), N = w(y * w(Lt * Lt)), E = w(Q * ie), _ = w(Ne * (Q + w(h * Ne)));
      }
      ({ x_2: E, x_3: $ } = D(O, E, $)), { x_2: _, x_3: N } = D(O, _, N);
      const W = i(_);
      return w(E * W);
    }
    const k = {
      secretKey: d,
      publicKey: d,
      seed: d
    }, F = (x = c(d)) => (ls(x, k.seed), x);
    function j(x) {
      const C = F(x);
      return {
        secretKey: C,
        publicKey: R(C)
      };
    }
    return {
      keygen: j,
      getSharedSecret: (x, C) => T(x, C),
      getPublicKey: (x) => R(x),
      scalarMult: T,
      scalarMultBase: R,
      utils: {
        randomSecretKey: F,
        randomPrivateKey: F
      },
      GuBytes: A.slice(),
      lengths: k
    };
  }
  const fE = BigInt(1), Cd = BigInt(2), gE = BigInt(3), mE = BigInt(5);
  BigInt(8);
  const Op = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), wE = {
    p: Op,
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
  };
  function yE(t) {
    const e = BigInt(10), s = BigInt(20), n = BigInt(40), r = BigInt(80), i = Op, o = t * t % i * t % i, a = ss(o, Cd, i) * o % i, c = ss(a, fE, i) * t % i, l = ss(c, mE, i) * c % i, d = ss(l, e, i) * l % i, u = ss(d, s, i) * d % i, h = ss(u, n, i) * u % i, f = ss(h, r, i) * h % i, g = ss(f, r, i) * h % i, p = ss(g, e, i) * l % i;
    return {
      pow_p_5_8: ss(p, Cd, i) * t % i,
      b2: o
    };
  }
  function bE(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  const EE = yn(wE.p, {
    isLE: true
  }), Qa = (() => {
    const t = EE.ORDER;
    return pE({
      P: t,
      type: "x25519",
      powPminus2: (e) => {
        const { pow_p_5_8: s, b2: n } = yE(e);
        return Ut(ss(s, gE, t) * n, t);
      },
      adjustScalarBytes: bE
    });
  })(), vd = (t, e) => (t + (t >= 0 ? e : -e) / kp) / e;
  function CE(t, e, s) {
    const [[n, r], [i, o]] = e, a = vd(o * t, s), c = vd(-r * t, s);
    let l = t - a * n - c * i, d = -a * r - c * o;
    const u = l < qs, h = d < qs;
    u && (l = -l), h && (d = -d);
    const f = mi(Math.ceil(gp(s) / 2)) + pr;
    if (l < qs || l >= f || d < qs || d >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return {
      k1neg: u,
      k1: l,
      k2neg: h,
      k2: d
    };
  }
  function ec(t) {
    if (![
      "compact",
      "recovered",
      "der"
    ].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  function da(t, e) {
    const s = {};
    for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
    return uo(s.lowS, "lowS"), uo(s.prehash, "prehash"), s.format !== void 0 && ec(s.format), s;
  }
  class vE extends Error {
    constructor(e = "") {
      super(e);
    }
  }
  const Bs = {
    Err: vE,
    _tlv: {
      encode: (t, e) => {
        const { Err: s } = Bs;
        if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
        if (e.length & 1) throw new s("tlv.encode: unpadded data");
        const n = e.length / 2, r = xi(n);
        if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
        const i = n > 127 ? xi(r.length / 2 | 128) : "";
        return xi(t) + i + r + e;
      },
      decode(t, e) {
        const { Err: s } = Bs;
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
        const { Err: e } = Bs;
        if (t < qs) throw new e("integer: negative integers are not allowed");
        let s = xi(t);
        if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
        return s;
      },
      decode(t) {
        const { Err: e } = Bs;
        if (t[0] & 128) throw new e("invalid signature integer: negative");
        if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
        return ko(t);
      }
    },
    toSig(t) {
      const { Err: e, _int: s, _tlv: n } = Bs, r = at("signature", t), { v: i, l: o } = n.decode(48, r);
      if (o.length) throw new e("invalid signature: left bytes after parsing");
      const { v: a, l: c } = n.decode(2, i), { v: l, l: d } = n.decode(2, c);
      if (d.length) throw new e("invalid signature: left bytes after parsing");
      return {
        r: s.decode(a),
        s: s.decode(l)
      };
    },
    hexFromSig(t) {
      const { _tlv: e, _int: s } = Bs, n = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), i = n + r;
      return e.encode(48, i);
    }
  }, qs = BigInt(0), pr = BigInt(1), kp = BigInt(2), Ri = BigInt(3), AE = BigInt(4);
  function ar(t, e) {
    const { BYTES: s } = t;
    let n;
    if (typeof e == "bigint") n = e;
    else {
      let r = at("private key", e);
      try {
        n = t.fromBytes(r);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
      }
    }
    if (!t.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
    return n;
  }
  function IE(t, e = {}) {
    const s = uE("weierstrass", t, e), { Fp: n, Fn: r } = s;
    let i = s.CURVE;
    const { h: o, n: a } = i;
    xo(e, {}, {
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
    const l = Pp(n, r);
    function d() {
      if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    function u(x, C, S) {
      const { x: y, y: E } = C.toAffine(), _ = n.toBytes(y);
      if (uo(S, "isCompressed"), S) {
        d();
        const $ = !n.isOdd(E);
        return on(xp($), _);
      } else return on(Uint8Array.of(4), _, n.toBytes(E));
    }
    function h(x) {
      Rn(x, void 0, "Point");
      const { publicKey: C, publicKeyUncompressed: S } = l, y = x.length, E = x[0], _ = x.subarray(1);
      if (y === C && (E === 2 || E === 3)) {
        const $ = n.fromBytes(_);
        if (!n.isValid($)) throw new Error("bad point: is not on curve, wrong x");
        const N = p($);
        let O;
        try {
          O = n.sqrt(N);
        } catch (H) {
          const ae = H instanceof Error ? ": " + H.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + ae);
        }
        d();
        const W = n.isOdd(O);
        return (E & 1) === 1 !== W && (O = n.neg(O)), {
          x: $,
          y: O
        };
      } else if (y === S && E === 4) {
        const $ = n.BYTES, N = n.fromBytes(_.subarray(0, $)), O = n.fromBytes(_.subarray($, $ * 2));
        if (!w(N, O)) throw new Error("bad point: is not on curve");
        return {
          x: N,
          y: O
        };
      } else throw new Error(`bad point: got length ${y}, expected compressed=${C} or uncompressed=${S}`);
    }
    const f = e.toBytes || u, g = e.fromBytes || h;
    function p(x) {
      const C = n.sqr(x), S = n.mul(C, x);
      return n.add(n.add(S, n.mul(x, i.a)), i.b);
    }
    function w(x, C) {
      const S = n.sqr(C), y = p(x);
      return n.eql(S, y);
    }
    if (!w(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
    const A = n.mul(n.pow(i.a, Ri), AE), I = n.mul(n.sqr(i.b), BigInt(27));
    if (n.is0(n.add(A, I))) throw new Error("bad curve params: a or b");
    function v(x, C, S = false) {
      if (!n.isValid(C) || S && n.is0(C)) throw new Error(`bad point coordinate ${x}`);
      return C;
    }
    function b(x) {
      if (!(x instanceof k)) throw new Error("ProjectivePoint expected");
    }
    function T(x) {
      if (!c || !c.basises) throw new Error("no endo");
      return CE(x, c.basises, r.ORDER);
    }
    const R = gd((x, C) => {
      const { X: S, Y: y, Z: E } = x;
      if (n.eql(E, n.ONE)) return {
        x: S,
        y
      };
      const _ = x.is0();
      C == null && (C = _ ? n.ONE : n.inv(E));
      const $ = n.mul(S, C), N = n.mul(y, C), O = n.mul(E, C);
      if (_) return {
        x: n.ZERO,
        y: n.ZERO
      };
      if (!n.eql(O, n.ONE)) throw new Error("invZ was invalid");
      return {
        x: $,
        y: N
      };
    }), D = gd((x) => {
      if (x.is0()) {
        if (e.allowInfinityPoint && !n.is0(x.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: C, y: S } = x.toAffine();
      if (!n.isValid(C) || !n.isValid(S)) throw new Error("bad point: x or y not field elements");
      if (!w(C, S)) throw new Error("bad point: equation left != right");
      if (!x.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function M(x, C, S, y, E) {
      return S = new k(n.mul(S.X, x), S.Y, S.Z), C = po(y, C), S = po(E, S), C.add(S);
    }
    class k {
      constructor(C, S, y) {
        this.X = v("x", C), this.Y = v("y", S, true), this.Z = v("z", y), Object.freeze(this);
      }
      static CURVE() {
        return i;
      }
      static fromAffine(C) {
        const { x: S, y } = C || {};
        if (!C || !n.isValid(S) || !n.isValid(y)) throw new Error("invalid affine point");
        if (C instanceof k) throw new Error("projective point not allowed");
        return n.is0(S) && n.is0(y) ? k.ZERO : new k(S, y, n.ONE);
      }
      static fromBytes(C) {
        const S = k.fromAffine(g(Rn(C, void 0, "point")));
        return S.assertValidity(), S;
      }
      static fromHex(C) {
        return k.fromBytes(at("pointHex", C));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(C = 8, S = true) {
        return j.createCache(this, C), S || this.multiply(Ri), this;
      }
      assertValidity() {
        D(this);
      }
      hasEvenY() {
        const { y: C } = this.toAffine();
        if (!n.isOdd) throw new Error("Field doesn't support isOdd");
        return !n.isOdd(C);
      }
      equals(C) {
        b(C);
        const { X: S, Y: y, Z: E } = this, { X: _, Y: $, Z: N } = C, O = n.eql(n.mul(S, N), n.mul(_, E)), W = n.eql(n.mul(y, N), n.mul($, E));
        return O && W;
      }
      negate() {
        return new k(this.X, n.neg(this.Y), this.Z);
      }
      double() {
        const { a: C, b: S } = i, y = n.mul(S, Ri), { X: E, Y: _, Z: $ } = this;
        let N = n.ZERO, O = n.ZERO, W = n.ZERO, H = n.mul(E, E), ae = n.mul(_, _), ne = n.mul($, $), Q = n.mul(E, _);
        return Q = n.add(Q, Q), W = n.mul(E, $), W = n.add(W, W), N = n.mul(C, W), O = n.mul(y, ne), O = n.add(N, O), N = n.sub(ae, O), O = n.add(ae, O), O = n.mul(N, O), N = n.mul(Q, N), W = n.mul(y, W), ne = n.mul(C, ne), Q = n.sub(H, ne), Q = n.mul(C, Q), Q = n.add(Q, W), W = n.add(H, H), H = n.add(W, H), H = n.add(H, ne), H = n.mul(H, Q), O = n.add(O, H), ne = n.mul(_, $), ne = n.add(ne, ne), H = n.mul(ne, Q), N = n.sub(N, H), W = n.mul(ne, ae), W = n.add(W, W), W = n.add(W, W), new k(N, O, W);
      }
      add(C) {
        b(C);
        const { X: S, Y: y, Z: E } = this, { X: _, Y: $, Z: N } = C;
        let O = n.ZERO, W = n.ZERO, H = n.ZERO;
        const ae = i.a, ne = n.mul(i.b, Ri);
        let Q = n.mul(S, _), le = n.mul(y, $), ie = n.mul(E, N), Ne = n.add(S, y), ce = n.add(_, $);
        Ne = n.mul(Ne, ce), ce = n.add(Q, le), Ne = n.sub(Ne, ce), ce = n.add(S, E);
        let Te = n.add(_, N);
        return ce = n.mul(ce, Te), Te = n.add(Q, ie), ce = n.sub(ce, Te), Te = n.add(y, E), O = n.add($, N), Te = n.mul(Te, O), O = n.add(le, ie), Te = n.sub(Te, O), H = n.mul(ae, ce), O = n.mul(ne, ie), H = n.add(O, H), O = n.sub(le, H), H = n.add(le, H), W = n.mul(O, H), le = n.add(Q, Q), le = n.add(le, Q), ie = n.mul(ae, ie), ce = n.mul(ne, ce), le = n.add(le, ie), ie = n.sub(Q, ie), ie = n.mul(ae, ie), ce = n.add(ce, ie), Q = n.mul(le, ce), W = n.add(W, Q), Q = n.mul(Te, ce), O = n.mul(Ne, O), O = n.sub(O, Q), Q = n.mul(Ne, le), H = n.mul(Te, H), H = n.add(H, Q), new k(O, W, H);
      }
      subtract(C) {
        return this.add(C.negate());
      }
      is0() {
        return this.equals(k.ZERO);
      }
      multiply(C) {
        const { endo: S } = e;
        if (!r.isValidNot0(C)) throw new Error("invalid scalar: out of range");
        let y, E;
        const _ = ($) => j.cached(this, $, (N) => oa(k, N));
        if (S) {
          const { k1neg: $, k1: N, k2neg: O, k2: W } = T(C), { p: H, f: ae } = _(N), { p: ne, f: Q } = _(W);
          E = ae.add(Q), y = M(S.beta, H, ne, $, O);
        } else {
          const { p: $, f: N } = _(C);
          y = $, E = N;
        }
        return oa(k, [
          y,
          E
        ])[0];
      }
      multiplyUnsafe(C) {
        const { endo: S } = e, y = this;
        if (!r.isValid(C)) throw new Error("invalid scalar: out of range");
        if (C === qs || y.is0()) return k.ZERO;
        if (C === pr) return y;
        if (j.hasCache(this)) return this.multiply(C);
        if (S) {
          const { k1neg: E, k1: _, k2neg: $, k2: N } = T(C), { p1: O, p2: W } = lE(k, y, _, N);
          return M(S.beta, O, W, E, $);
        } else return j.unsafe(y, C);
      }
      multiplyAndAddUnsafe(C, S, y) {
        const E = this.multiplyUnsafe(S).add(C.multiplyUnsafe(y));
        return E.is0() ? void 0 : E;
      }
      toAffine(C) {
        return R(this, C);
      }
      isTorsionFree() {
        const { isTorsionFree: C } = e;
        return o === pr ? true : C ? C(k, this) : j.unsafe(this, a).is0();
      }
      clearCofactor() {
        const { clearCofactor: C } = e;
        return o === pr ? this : C ? C(k, this) : this.multiplyUnsafe(o);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(o).is0();
      }
      toBytes(C = true) {
        return uo(C, "isCompressed"), this.assertValidity(), f(k, this, C);
      }
      toHex(C = true) {
        return hr(this.toBytes(C));
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
      toRawBytes(C = true) {
        return this.toBytes(C);
      }
      _setWindowSize(C) {
        this.precompute(C);
      }
      static normalizeZ(C) {
        return oa(k, C);
      }
      static msm(C, S) {
        return dE(k, r, C, S);
      }
      static fromPrivateKey(C) {
        return k.BASE.multiply(ar(r, C));
      }
    }
    k.BASE = new k(i.Gx, i.Gy, n.ONE), k.ZERO = new k(n.ZERO, n.ONE, n.ZERO), k.Fp = n, k.Fn = r;
    const F = r.BITS, j = new cE(k, e.endo ? Math.ceil(F / 2) : F);
    return k.BASE.precompute(8), k;
  }
  function xp(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  function Pp(t, e) {
    return {
      secretKey: e.BYTES,
      publicKey: 1 + t.BYTES,
      publicKeyUncompressed: 1 + 2 * t.BYTES,
      publicKeyHasPrefix: true,
      signature: 2 * e.BYTES
    };
  }
  function NE(t, e = {}) {
    const { Fn: s } = t, n = e.randomBytes || Gn, r = Object.assign(Pp(t.Fp, s), {
      seed: Sp(s.ORDER)
    });
    function i(h) {
      try {
        return !!ar(s, h);
      } catch {
        return false;
      }
    }
    function o(h, f) {
      const { publicKey: g, publicKeyUncompressed: p } = r;
      try {
        const w = h.length;
        return f === true && w !== g || f === false && w !== p ? false : !!t.fromBytes(h);
      } catch {
        return false;
      }
    }
    function a(h = n(r.seed)) {
      return iE(Rn(h, r.seed, "seed"), s.ORDER);
    }
    function c(h, f = true) {
      return t.BASE.multiply(ar(s, h)).toBytes(f);
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
      const w = at("key", h).length;
      return w === g || w === p;
    }
    function u(h, f, g = true) {
      if (d(h) === true) throw new Error("first arg must be private key");
      if (d(f) === false) throw new Error("second arg must be public key");
      const p = ar(s, h);
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
        normPrivateKeyToScalar: (h) => ar(s, h),
        precompute(h = 8, f = t.BASE) {
          return f.precompute(h, false);
        }
      },
      lengths: r
    });
  }
  function SE(t, e, s = {}) {
    Io(e), xo(s, {}, {
      hmac: "function",
      lowS: "boolean",
      randomBytes: "function",
      bits2int: "function",
      bits2int_modN: "function"
    });
    const n = s.randomBytes || Gn, r = s.hmac || ((S, ...y) => To(e, S, on(...y))), { Fp: i, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: u, utils: h, lengths: f } = NE(t, s), g = {
      prehash: false,
      lowS: typeof s.lowS == "boolean" ? s.lowS : false,
      format: void 0,
      extraEntropy: false
    }, p = "compact";
    function w(S) {
      const y = a >> pr;
      return S > y;
    }
    function A(S, y) {
      if (!o.isValidNot0(y)) throw new Error(`invalid signature ${S}: out of range 1..Point.Fn.ORDER`);
      return y;
    }
    function I(S, y) {
      ec(y);
      const E = f.signature, _ = y === "compact" ? E : y === "recovered" ? E + 1 : void 0;
      return Rn(S, _, `${y} signature`);
    }
    class v {
      constructor(y, E, _) {
        this.r = A("r", y), this.s = A("s", E), _ != null && (this.recovery = _), Object.freeze(this);
      }
      static fromBytes(y, E = p) {
        I(y, E);
        let _;
        if (E === "der") {
          const { r: W, s: H } = Bs.toSig(Rn(y));
          return new v(W, H);
        }
        E === "recovered" && (_ = y[0], E = "compact", y = y.subarray(1));
        const $ = o.BYTES, N = y.subarray(0, $), O = y.subarray($, $ * 2);
        return new v(o.fromBytes(N), o.fromBytes(O), _);
      }
      static fromHex(y, E) {
        return this.fromBytes(co(y), E);
      }
      addRecoveryBit(y) {
        return new v(this.r, this.s, y);
      }
      recoverPublicKey(y) {
        const E = i.ORDER, { r: _, s: $, recovery: N } = this;
        if (N == null || ![
          0,
          1,
          2,
          3
        ].includes(N)) throw new Error("recovery id invalid");
        if (a * kp < E && N > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const O = N === 2 || N === 3 ? _ + a : _;
        if (!i.isValid(O)) throw new Error("recovery id 2 or 3 invalid");
        const W = i.toBytes(O), H = t.fromBytes(on(xp((N & 1) === 0), W)), ae = o.inv(O), ne = T(at("msgHash", y)), Q = o.create(-ne * ae), le = o.create($ * ae), ie = t.BASE.multiplyUnsafe(Q).add(H.multiplyUnsafe(le));
        if (ie.is0()) throw new Error("point at infinify");
        return ie.assertValidity(), ie;
      }
      hasHighS() {
        return w(this.s);
      }
      toBytes(y = p) {
        if (ec(y), y === "der") return co(Bs.hexFromSig(this));
        const E = o.toBytes(this.r), _ = o.toBytes(this.s);
        if (y === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return on(Uint8Array.of(this.recovery), E, _);
        }
        return on(E, _);
      }
      toHex(y) {
        return hr(this.toBytes(y));
      }
      assertValidity() {
      }
      static fromCompact(y) {
        return v.fromBytes(at("sig", y), "compact");
      }
      static fromDER(y) {
        return v.fromBytes(at("sig", y), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new v(this.r, o.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return hr(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return hr(this.toBytes("compact"));
      }
    }
    const b = s.bits2int || function(S) {
      if (S.length > 8192) throw new Error("input is too large");
      const y = ko(S), E = S.length * 8 - c;
      return E > 0 ? y >> BigInt(E) : y;
    }, T = s.bits2int_modN || function(S) {
      return o.create(b(S));
    }, R = mi(c);
    function D(S) {
      return Xa("num < 2^" + c, S, qs, R), o.toBytes(S);
    }
    function M(S, y) {
      return Rn(S, void 0, "message"), y ? Rn(e(S), void 0, "prehashed message") : S;
    }
    function k(S, y, E) {
      if ([
        "recovered",
        "canonical"
      ].some((le) => le in E)) throw new Error("sign() legacy options not supported");
      const { lowS: _, prehash: $, extraEntropy: N } = da(E, g);
      S = M(S, $);
      const O = T(S), W = ar(o, y), H = [
        D(W),
        D(O)
      ];
      if (N != null && N !== false) {
        const le = N === true ? n(f.secretKey) : N;
        H.push(at("extraEntropy", le));
      }
      const ae = on(...H), ne = O;
      function Q(le) {
        const ie = b(le);
        if (!o.isValidNot0(ie)) return;
        const Ne = o.inv(ie), ce = t.BASE.multiply(ie).toAffine(), Te = o.create(ce.x);
        if (Te === qs) return;
        const ct = o.create(Ne * o.create(ne + Te * W));
        if (ct === qs) return;
        let mt = (ce.x === Te ? 0 : 2) | Number(ce.y & pr), lt = ct;
        return _ && w(ct) && (lt = o.neg(ct), mt ^= 1), new v(Te, lt, mt);
      }
      return {
        seed: ae,
        k2sig: Q
      };
    }
    function F(S, y, E = {}) {
      S = at("message", S);
      const { seed: _, k2sig: $ } = k(S, y, E);
      return Jb(e.outputLen, o.BYTES, r)(_, $);
    }
    function j(S) {
      let y;
      const E = typeof S == "string" || Ao(S), _ = !E && S !== null && typeof S == "object" && typeof S.r == "bigint" && typeof S.s == "bigint";
      if (!E && !_) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (_) y = new v(S.r, S.s);
      else if (E) {
        try {
          y = v.fromBytes(at("sig", S), "der");
        } catch ($) {
          if (!($ instanceof Bs.Err)) throw $;
        }
        if (!y) try {
          y = v.fromBytes(at("sig", S), "compact");
        } catch {
          return false;
        }
      }
      return y || false;
    }
    function x(S, y, E, _ = {}) {
      const { lowS: $, prehash: N, format: O } = da(_, g);
      if (E = at("publicKey", E), y = M(at("message", y), N), "strict" in _) throw new Error("options.strict was renamed to lowS");
      const W = O === void 0 ? j(S) : v.fromBytes(at("sig", S), O);
      if (W === false) return false;
      try {
        const H = t.fromBytes(E);
        if ($ && W.hasHighS()) return false;
        const { r: ae, s: ne } = W, Q = T(y), le = o.inv(ne), ie = o.create(Q * le), Ne = o.create(ae * le), ce = t.BASE.multiplyUnsafe(ie).add(H.multiplyUnsafe(Ne));
        return ce.is0() ? false : o.create(ce.x) === ae;
      } catch {
        return false;
      }
    }
    function C(S, y, E = {}) {
      const { prehash: _ } = da(E, g);
      return y = M(y, _), v.fromBytes(S, "recovered").recoverPublicKey(y).toBytes();
    }
    return Object.freeze({
      keygen: l,
      getPublicKey: d,
      getSharedSecret: u,
      utils: h,
      lengths: f,
      Point: t,
      sign: F,
      verify: x,
      recoverPublicKey: C,
      Signature: v,
      hash: e
    });
  }
  function _E(t) {
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
    const r = yn(e.n, {
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
  function TE(t) {
    const { CURVE: e, curveOpts: s } = _E(t), n = {
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
  function OE(t, e) {
    const s = e.Point;
    return Object.assign({}, e, {
      ProjectivePoint: s,
      CURVE: Object.assign({}, t, Ip(s.Fn.ORDER, s.Fn.BITS))
    });
  }
  function kE(t) {
    const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: r } = TE(t), i = IE(e, s), o = SE(i, n, r);
    return OE(t, o);
  }
  function tc(t, e) {
    const s = (n) => kE({
      ...t,
      hash: n
    });
    return {
      ...s(e),
      create: s
    };
  }
  const Rp = {
    p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    h: BigInt(1),
    a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
    b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
  }, Up = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
    n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
    h: BigInt(1),
    a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
    b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
    Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
    Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
  }, $p = {
    p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
    h: BigInt(1),
    a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
    b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
    Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
    Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
  }, xE = yn(Rp.p), PE = yn(Up.p), RE = yn($p.p), UE = tc({
    ...Rp,
    Fp: xE,
    lowS: false
  }, So);
  tc({
    ...Up,
    Fp: PE,
    lowS: false
  }, M0), tc({
    ...$p,
    Fp: RE,
    lowS: false,
    allowedPrivateKeyLengths: [
      130,
      131,
      132
    ]
  }, L0);
  const $E = UE, Dp = "base10", gt = "base16", At = "base64pad", an = "base64url", wi = "utf8", Bp = 0, js = 1, yi = 2, DE = 0, Ad = 1, zr = 12, Yc = 32;
  function BE() {
    const t = Qa.utils.randomPrivateKey(), e = Qa.getPublicKey(t);
    return {
      privateKey: St(t, gt),
      publicKey: St(e, gt)
    };
  }
  function sc() {
    const t = Gn(Yc);
    return St(t, gt);
  }
  function LE(t, e) {
    const s = Qa.getSharedSecret(Yt(t, gt), Yt(e, gt)), n = Gb(Oo, s, void 0, void 0, Yc);
    return St(n, gt);
  }
  function Vi(t) {
    const e = Oo(Yt(t, gt));
    return St(e, gt);
  }
  function Kt(t) {
    const e = Oo(Yt(t, wi));
    return St(e, gt);
  }
  function Lp(t) {
    return Yt(`${t}`, Dp);
  }
  function Wn(t) {
    return Number(St(t, Dp));
  }
  function Mp(t) {
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function Fp(t) {
    const e = t.replace(/-/g, "+").replace(/_/g, "/"), s = (4 - e.length % 4) % 4;
    return e + "=".repeat(s);
  }
  function ME(t) {
    const e = Lp(typeof t.type < "u" ? t.type : Bp);
    if (Wn(e) === js && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const s = typeof t.senderPublicKey < "u" ? Yt(t.senderPublicKey, gt) : void 0, n = typeof t.iv < "u" ? Yt(t.iv, gt) : Gn(zr), r = Yt(t.symKey, gt), i = hp(r, n).encrypt(Yt(t.message, wi)), o = qp({
      type: e,
      sealed: i,
      iv: n,
      senderPublicKey: s
    });
    return t.encoding === an ? Mp(o) : o;
  }
  function FE(t) {
    const e = Yt(t.symKey, gt), { sealed: s, iv: n } = ri({
      encoded: t.encoded,
      encoding: t.encoding
    }), r = hp(e, n).decrypt(s);
    if (r === null) throw new Error("Failed to decrypt");
    return St(r, wi);
  }
  function qE(t, e) {
    const s = Lp(yi), n = Gn(zr), r = Yt(t, wi), i = qp({
      type: s,
      sealed: r,
      iv: n
    });
    return e === an ? Mp(i) : i;
  }
  function WE(t, e) {
    const { sealed: s } = ri({
      encoded: t,
      encoding: e
    });
    return St(s, wi);
  }
  function qp(t) {
    if (Wn(t.type) === yi) return St(Wr([
      t.type,
      t.sealed
    ]), At);
    if (Wn(t.type) === js) {
      if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      return St(Wr([
        t.type,
        t.senderPublicKey,
        t.iv,
        t.sealed
      ]), At);
    }
    return St(Wr([
      t.type,
      t.iv,
      t.sealed
    ]), At);
  }
  function ri(t) {
    const e = (t.encoding || At) === an ? Fp(t.encoded) : t.encoded, s = Yt(e, At), n = s.slice(DE, Ad), r = Ad;
    if (Wn(n) === js) {
      const c = r + Yc, l = c + zr, d = s.slice(r, c), u = s.slice(c, l), h = s.slice(l);
      return {
        type: n,
        sealed: h,
        iv: u,
        senderPublicKey: d
      };
    }
    if (Wn(n) === yi) {
      const c = s.slice(r), l = Gn(zr);
      return {
        type: n,
        sealed: c,
        iv: l
      };
    }
    const i = r + zr, o = s.slice(r, i), a = s.slice(i);
    return {
      type: n,
      sealed: a,
      iv: o
    };
  }
  function jE(t, e) {
    const s = ri({
      encoded: t,
      encoding: e == null ? void 0 : e.encoding
    });
    return Wp({
      type: Wn(s.type),
      senderPublicKey: typeof s.senderPublicKey < "u" ? St(s.senderPublicKey, gt) : void 0,
      receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    });
  }
  function Wp(t) {
    const e = (t == null ? void 0 : t.type) || Bp;
    if (e === js) {
      if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
      if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
    }
    return {
      type: e,
      senderPublicKey: t == null ? void 0 : t.senderPublicKey,
      receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    };
  }
  function Id(t) {
    return t.type === js && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
  }
  function Nd(t) {
    return t.type === yi;
  }
  function HE(t) {
    const e = Ee.from(t.x, "base64"), s = Ee.from(t.y, "base64");
    return Wr([
      new Uint8Array([
        4
      ]),
      e,
      s
    ]);
  }
  function zE(t, e) {
    const [s, n, r] = t.split("."), i = Ee.from(Fp(r), "base64");
    if (i.length !== 64) throw new Error("Invalid signature length");
    const o = i.slice(0, 32), a = i.slice(32, 64), c = `${s}.${n}`, l = Oo(c), d = HE(e);
    if (!$E.verify(Wr([
      o,
      a
    ]), l, d)) throw new Error("Invalid signature");
    return Ta(t).payload;
  }
  const VE = "irn";
  function fo(t) {
    return (t == null ? void 0 : t.relay) || {
      protocol: VE
    };
  }
  function cr(t) {
    const e = Gf[t];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e;
  }
  var KE = Object.defineProperty, GE = Object.defineProperties, YE = Object.getOwnPropertyDescriptors, Sd = Object.getOwnPropertySymbols, JE = Object.prototype.hasOwnProperty, ZE = Object.prototype.propertyIsEnumerable, _d = (t, e, s) => e in t ? KE(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ua = (t, e) => {
    for (var s in e || (e = {})) JE.call(e, s) && _d(t, s, e[s]);
    if (Sd) for (var s of Sd(e)) ZE.call(e, s) && _d(t, s, e[s]);
    return t;
  }, XE = (t, e) => GE(t, YE(e));
  function QE(t, e = "-") {
    const s = {}, n = "relay" + e;
    return Object.keys(t).forEach((r) => {
      if (r.startsWith(n)) {
        const i = r.replace(n, ""), o = t[r];
        s[i] = o;
      }
    }), s;
  }
  function Td(t) {
    if (!t.includes("wc:")) {
      const l = zh(t);
      l != null && l.includes("wc:") && (t = l);
    }
    t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e = t.indexOf(":"), s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), r = t.substring(e + 1, s).split("@"), i = typeof s < "u" ? t.substring(s) : "", o = new URLSearchParams(i), a = Object.fromEntries(o.entries()), c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
      protocol: n,
      topic: eC(r[0]),
      version: parseInt(r[1], 10),
      symKey: a.symKey,
      relay: QE(a),
      methods: c,
      expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    };
  }
  function eC(t) {
    return t.startsWith("//") ? t.substring(2) : t;
  }
  function tC(t, e = "-") {
    const s = "relay", n = {};
    return Object.keys(t).forEach((r) => {
      const i = r, o = s + e + i;
      t[i] && (n[o] = t[i]);
    }), n;
  }
  function Od(t) {
    const e = new URLSearchParams(), s = ua(ua(XE(ua({}, tC(t.relay)), {
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
  function Ui(t, e, s) {
    return `${t}?wc_ev=${s}&topic=${e}`;
  }
  var sC = Object.defineProperty, nC = Object.defineProperties, rC = Object.getOwnPropertyDescriptors, kd = Object.getOwnPropertySymbols, iC = Object.prototype.hasOwnProperty, oC = Object.prototype.propertyIsEnumerable, xd = (t, e, s) => e in t ? sC(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, aC = (t, e) => {
    for (var s in e || (e = {})) iC.call(e, s) && xd(t, s, e[s]);
    if (kd) for (var s of kd(e)) oC.call(e, s) && xd(t, s, e[s]);
    return t;
  }, cC = (t, e) => nC(t, rC(e));
  function Ir(t) {
    const e = [];
    return t.forEach((s) => {
      const [n, r] = s.split(":");
      e.push(`${n}:${r}`);
    }), e;
  }
  function jp(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...Ir(s.accounts));
    }), [
      ...new Set(e)
    ];
  }
  function lC(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...s.methods);
    }), [
      ...new Set(e)
    ];
  }
  function dC(t) {
    const e = [];
    return Object.values(t).forEach((s) => {
      e.push(...s.events);
    }), [
      ...new Set(e)
    ];
  }
  function uC(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      Ir(n.accounts).includes(e) && s.push(...n.methods);
    }), s;
  }
  function hC(t, e) {
    const s = [];
    return Object.values(t).forEach((n) => {
      Ir(n.accounts).includes(e) && s.push(...n.events);
    }), s;
  }
  function Po(t) {
    return t.includes(":");
  }
  function lr(t) {
    return Po(t) ? t.split(":")[0] : t;
  }
  function Pd(t) {
    var e, s, n;
    const r = {};
    if (!As(t)) return r;
    for (const [i, o] of Object.entries(t)) {
      const a = Po(i) ? [
        i
      ] : o.chains, c = o.methods || [], l = o.events || [], d = lr(i);
      r[d] = cC(aC({}, r[d]), {
        chains: vs(a, (e = r[d]) == null ? void 0 : e.chains),
        methods: vs(c, (s = r[d]) == null ? void 0 : s.methods),
        events: vs(l, (n = r[d]) == null ? void 0 : n.events)
      });
    }
    return r;
  }
  function pC(t) {
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
  function Rd(t, e) {
    e = e.map((n) => n.replace("did:pkh:", ""));
    const s = pC(e);
    for (const [n, r] of Object.entries(s)) r.methods ? r.methods = vs(r.methods, t) : r.methods = t, r.events = [
      "chainChanged",
      "accountsChanged"
    ];
    return s;
  }
  function fC(t, e) {
    var s, n, r, i, o, a;
    const c = Pd(t), l = Pd(e), d = {}, u = Object.keys(c).concat(Object.keys(l));
    for (const h of u) d[h] = {
      chains: vs((s = c[h]) == null ? void 0 : s.chains, (n = l[h]) == null ? void 0 : n.chains),
      methods: vs((r = c[h]) == null ? void 0 : r.methods, (i = l[h]) == null ? void 0 : i.methods),
      events: vs((o = c[h]) == null ? void 0 : o.events, (a = l[h]) == null ? void 0 : a.events)
    };
    return d;
  }
  const gC = {
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
  }, mC = {
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
  function V(t, e) {
    const { message: s, code: n } = mC[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function $e(t, e) {
    const { message: s, code: n } = gC[t];
    return {
      message: e ? `${s} ${e}` : s,
      code: n
    };
  }
  function Hs(t, e) {
    return !!Array.isArray(t);
  }
  function As(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
  }
  function Ke(t) {
    return typeof t > "u";
  }
  function qe(t, e) {
    return e && Ke(t) ? true : typeof t == "string" && !!t.trim().length;
  }
  function Jc(t, e) {
    return typeof t == "number" && !isNaN(t);
  }
  function wC(t, e) {
    const { requiredNamespaces: s } = e, n = Object.keys(t.namespaces), r = Object.keys(s);
    let i = true;
    return Pn(r, n) ? (n.forEach((o) => {
      const { accounts: a, methods: c, events: l } = t.namespaces[o], d = Ir(a), u = s[o];
      (!Pn(Fh(o, u), d) || !Pn(u.methods, c) || !Pn(u.events, l)) && (i = false);
    }), i) : false;
  }
  function go(t) {
    return qe(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
  }
  function yC(t) {
    if (qe(t, false) && t.includes(":")) {
      const e = t.split(":");
      if (e.length === 3) {
        const s = e[0] + ":" + e[1];
        return !!e[2] && go(s);
      }
    }
    return false;
  }
  function bC(t) {
    function e(s) {
      try {
        return typeof new URL(s) < "u";
      } catch {
        return false;
      }
    }
    try {
      if (qe(t, false)) {
        if (e(t)) return true;
        const s = zh(t);
        return e(s);
      }
    } catch {
    }
    return false;
  }
  function EC(t) {
    var e;
    return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
  }
  function CC(t) {
    return t == null ? void 0 : t.topic;
  }
  function vC(t, e) {
    let s = null;
    return qe(t == null ? void 0 : t.publicKey, false) || (s = V("MISSING_OR_INVALID", `${e} controller public key should be a string`)), s;
  }
  function Ud(t) {
    let e = true;
    return Hs(t) ? t.length && (e = t.every((s) => qe(s, false))) : e = false, e;
  }
  function AC(t, e, s) {
    let n = null;
    return Hs(e) && e.length ? e.forEach((r) => {
      n || go(r) || (n = $e("UNSUPPORTED_CHAINS", `${s}, chain ${r} should be a string and conform to "namespace:chainId" format`));
    }) : go(t) || (n = $e("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
  }
  function IC(t, e, s) {
    let n = null;
    return Object.entries(t).forEach(([r, i]) => {
      if (n) return;
      const o = AC(r, Fh(r, i), `${e} ${s}`);
      o && (n = o);
    }), n;
  }
  function NC(t, e) {
    let s = null;
    return Hs(t) ? t.forEach((n) => {
      s || yC(n) || (s = $e("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
    }) : s = $e("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s;
  }
  function SC(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = NC(n == null ? void 0 : n.accounts, `${e} namespace`);
      r && (s = r);
    }), s;
  }
  function _C(t, e) {
    let s = null;
    return Ud(t == null ? void 0 : t.methods) ? Ud(t == null ? void 0 : t.events) || (s = $e("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = $e("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), s;
  }
  function Hp(t, e) {
    let s = null;
    return Object.values(t).forEach((n) => {
      if (s) return;
      const r = _C(n, `${e}, namespace`);
      r && (s = r);
    }), s;
  }
  function TC(t, e, s) {
    let n = null;
    if (t && As(t)) {
      const r = Hp(t, e);
      r && (n = r);
      const i = IC(t, e, s);
      i && (n = i);
    } else n = V("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
    return n;
  }
  function ha(t, e) {
    let s = null;
    if (t && As(t)) {
      const n = Hp(t, e);
      n && (s = n);
      const r = SC(t, e);
      r && (s = r);
    } else s = V("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return s;
  }
  function zp(t) {
    return qe(t.protocol, true);
  }
  function OC(t, e) {
    let s = false;
    return t ? t && Hs(t) && t.length && t.forEach((n) => {
      s = zp(n);
    }) : s = true, s;
  }
  function kC(t) {
    return typeof t == "number";
  }
  function Et(t) {
    return typeof t < "u" && typeof t !== null;
  }
  function xC(t) {
    return !(!t || typeof t != "object" || !t.code || !Jc(t.code) || !t.message || !qe(t.message, false));
  }
  function PC(t) {
    return !(Ke(t) || !qe(t.method, false));
  }
  function RC(t) {
    return !(Ke(t) || Ke(t.result) && Ke(t.error) || !Jc(t.id) || !qe(t.jsonrpc, false));
  }
  function UC(t) {
    return !(Ke(t) || !qe(t.name, false));
  }
  function $d(t, e) {
    return !(!go(e) || !jp(t).includes(e));
  }
  function $C(t, e, s) {
    return qe(s, false) ? uC(t, e).includes(s) : false;
  }
  function DC(t, e, s) {
    return qe(s, false) ? hC(t, e).includes(s) : false;
  }
  function Dd(t, e, s) {
    let n = null;
    const r = BC(t), i = LC(e), o = Object.keys(r), a = Object.keys(i), c = Bd(Object.keys(t)), l = Bd(Object.keys(e)), d = c.filter((u) => !l.includes(u));
    return d.length && (n = V("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), Pn(o, a) || (n = V("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((u) => {
      if (!u.includes(":") || n) return;
      const h = Ir(e[u].accounts);
      h.includes(u) || (n = V("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${h.toString()}`));
    }), o.forEach((u) => {
      n || (Pn(r[u].methods, i[u].methods) ? Pn(r[u].events, i[u].events) || (n = V("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${u}`)) : n = V("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${u}`));
    }), n;
  }
  function BC(t) {
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
  function Bd(t) {
    return [
      ...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))
    ];
  }
  function LC(t) {
    const e = {};
    return Object.keys(t).forEach((s) => {
      var _a2;
      s.includes(":") ? e[s] = t[s] : (_a2 = Ir(t[s].accounts)) == null ? void 0 : _a2.forEach((r) => {
        e[r] = {
          accounts: t[s].accounts.filter((i) => i.includes(`${r}:`)),
          methods: t[s].methods,
          events: t[s].events
        };
      });
    }), e;
  }
  function MC(t, e) {
    return Jc(t) && t <= e.max && t >= e.min;
  }
  function Ld() {
    const t = fi();
    return new Promise((e) => {
      switch (t) {
        case $t.browser:
          e(FC());
          break;
        case $t.reactNative:
          e(qC());
          break;
        case $t.node:
          e(WC());
          break;
        default:
          e(true);
      }
    });
  }
  function FC() {
    return Ar() && (navigator == null ? void 0 : navigator.onLine);
  }
  async function qC() {
    var _a2;
    return wn() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo ? (_a2 = await (globalThis == null ? void 0 : globalThis.NetInfo.fetch())) == null ? void 0 : _a2.isConnected : true;
  }
  function WC() {
    return true;
  }
  function jC(t) {
    switch (fi()) {
      case $t.browser:
        HC(t);
        break;
      case $t.reactNative:
        zC(t);
        break;
    }
  }
  function HC(t) {
    !wn() && Ar() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
  }
  function zC(t) {
    wn() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo && (globalThis == null ? void 0 : globalThis.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
  }
  function VC() {
    var t;
    return Ar() && zs.getDocument() ? ((t = zs.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : true;
  }
  const pa = {};
  class xr {
    static get(e) {
      return pa[e];
    }
    static set(e, s) {
      pa[e] = s;
    }
    static delete(e) {
      delete pa[e];
    }
  }
  function KC(t) {
    const e = pi.decode(t);
    if (e.length < 33) throw new Error("Too short to contain a public key");
    return e.slice(1, 33);
  }
  function GC({ publicKey: t, signature: e, payload: s }) {
    var n;
    const r = nc(s.method), i = 128 | parseInt(((n = s.version) == null ? void 0 : n.toString()) || "4"), o = ZC(s.address), a = s.era === "00" ? new Uint8Array([
      0
    ]) : nc(s.era);
    if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
    const c = parseInt(s.nonce, 16), l = new Uint8Array([
      c & 255,
      c >> 8 & 255
    ]), d = BigInt(`0x${JC(s.tip)}`), u = QC(d), h = new Uint8Array([
      0,
      ...t,
      o,
      ...e,
      ...a,
      ...l,
      ...u,
      ...r
    ]), f = XC(h.length + 1);
    return new Uint8Array([
      ...f,
      i,
      ...h
    ]);
  }
  function YC(t) {
    const e = nc(t), s = Zf.blake2b(e, void 0, 32);
    return "0x" + Ee.from(s).toString("hex");
  }
  function nc(t) {
    return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
  }
  function JC(t) {
    return t.startsWith("0x") ? t.slice(2) : t;
  }
  function ZC(t) {
    const e = pi.decode(t)[0];
    return e === 42 ? 0 : e === 60 ? 2 : 1;
  }
  function XC(t) {
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
  function QC(t) {
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
  function ev(t) {
    const e = Uint8Array.from(Ee.from(t.signature, "hex")), s = KC(t.transaction.address), n = GC({
      publicKey: s,
      signature: e,
      payload: t.transaction
    }), r = Ee.from(n).toString("hex");
    return YC(r);
  }
  function Zc({ logger: t, name: e }) {
    const s = typeof t == "string" ? Ic({
      opts: {
        level: t,
        name: e
      }
    }).logger : t;
    return s.level = typeof t == "string" ? t : t.level, s;
  }
  var tv = {};
  const Vp = "wc", Kp = 2, rc = "core", Is = `${Vp}@2:${rc}:`, sv = {
    logger: "error"
  }, nv = {
    database: ":memory:"
  }, rv = "crypto", Md = "client_ed25519_seed", iv = K.ONE_DAY, ov = "keychain", av = "0.3", cv = "messages", lv = "0.3", dv = K.SIX_HOURS, uv = "publisher", Gp = "irn", hv = "error", Yp = "wss://relay.walletconnect.org", pv = "relayer", Fe = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
  }, fv = "_subscription", Ft = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
  }, gv = 0.1, ic = "2.23.2", Pe = {
    link_mode: "link_mode",
    relay: "relay"
  }, Ki = {
    inbound: "inbound",
    outbound: "outbound"
  }, mv = "0.3", wv = "WALLETCONNECT_CLIENT_ID", Fd = "WALLETCONNECT_LINK_MODE_APPS", xt = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
  }, yv = "subscription", bv = "0.3", Ev = "pairing", Cv = "0.3", Pr = {
    wc_pairingDelete: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1e3
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1001
      }
    },
    wc_pairingPing: {
      req: {
        ttl: K.THIRTY_SECONDS,
        prompt: false,
        tag: 1002
      },
      res: {
        ttl: K.THIRTY_SECONDS,
        prompt: false,
        tag: 1003
      }
    },
    unregistered_method: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 0
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 0
      }
    }
  }, _n = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
  }, Qt = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
  }, vv = "history", Av = "0.3", Iv = "expirer", zt = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
  }, Nv = "0.3", Sv = "verify-api", _v = "https://verify.walletconnect.com", Jp = "https://verify.walletconnect.org", Vr = Jp, Tv = `${Vr}/v3`, Ov = [
    _v,
    Jp
  ], kv = "echo", xv = "https://echo.walletconnect.com", fs = {
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
  }, xs = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
  }, es = {
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
  }, En = {
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
  }, Cn = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve"
  }, Rr = {
    no_internet_connection: "no_internet_connection",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
  }, Pv = 0.1, Rv = "event-client", Uv = 86400, $v = "https://pulse.walletconnect.org/batch";
  function Dv(t, e) {
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
      for (var p = 0, w = 0, A = 0, I = g.length; A !== I && g[A] === 0; ) A++, p++;
      for (var v = (I - A) * d + 1 >>> 0, b = new Uint8Array(v); A !== I; ) {
        for (var T = g[A], R = 0, D = v - 1; (T !== 0 || R < w) && D !== -1; D--, R++) T += 256 * b[D] >>> 0, b[D] = T % a >>> 0, T = T / a >>> 0;
        if (T !== 0) throw new Error("Non-zero carry");
        w = R, A++;
      }
      for (var M = v - w; M !== v && b[M] === 0; ) M++;
      for (var k = c.repeat(p); M < v; ++M) k += t.charAt(b[M]);
      return k;
    }
    function h(g) {
      if (typeof g != "string") throw new TypeError("Expected String");
      if (g.length === 0) return new Uint8Array();
      var p = 0;
      if (g[p] !== " ") {
        for (var w = 0, A = 0; g[p] === c; ) w++, p++;
        for (var I = (g.length - p) * l + 1 >>> 0, v = new Uint8Array(I); g[p]; ) {
          var b = s[g.charCodeAt(p)];
          if (b === 255) return;
          for (var T = 0, R = I - 1; (b !== 0 || T < A) && R !== -1; R--, T++) b += a * v[R] >>> 0, v[R] = b % 256 >>> 0, b = b / 256 >>> 0;
          if (b !== 0) throw new Error("Non-zero carry");
          A = T, p++;
        }
        if (g[p] !== " ") {
          for (var D = I - A; D !== I && v[D] === 0; ) D++;
          for (var M = new Uint8Array(w + (I - D)), k = w; D !== I; ) M[k++] = v[D++];
          return M;
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
  var Bv = Dv, Lv = Bv;
  const Zp = (t) => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, Mv = (t) => new TextEncoder().encode(t), Fv = (t) => new TextDecoder().decode(t);
  class qv {
    constructor(e, s, n) {
      this.name = e, this.prefix = s, this.baseEncode = n;
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  }
  class Wv {
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
      return Xp(this, e);
    }
  }
  class jv {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return Xp(this, e);
    }
    decode(e) {
      const s = e[0], n = this.decoders[s];
      if (n) return n.decode(e);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
  const Xp = (t, e) => new jv({
    ...t.decoders || {
      [t.prefix]: t
    },
    ...e.decoders || {
      [e.prefix]: e
    }
  });
  class Hv {
    constructor(e, s, n, r) {
      this.name = e, this.prefix = s, this.baseEncode = n, this.baseDecode = r, this.encoder = new qv(e, s, n), this.decoder = new Wv(e, s, r);
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  }
  const Ro = ({ name: t, prefix: e, encode: s, decode: n }) => new Hv(t, e, s, n), bi = ({ prefix: t, name: e, alphabet: s }) => {
    const { encode: n, decode: r } = Lv(s, e);
    return Ro({
      prefix: t,
      name: e,
      encode: n,
      decode: (i) => Zp(r(i))
    });
  }, zv = (t, e, s, n) => {
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
  }, Vv = (t, e, s) => {
    const n = e[e.length - 1] === "=", r = (1 << s) - 1;
    let i = "", o = 0, a = 0;
    for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > s; ) o -= s, i += e[r & a >> o];
    if (o && (i += e[r & a << s - o]), n) for (; i.length * s & 7; ) i += "=";
    return i;
  }, st = ({ name: t, prefix: e, bitsPerChar: s, alphabet: n }) => Ro({
    prefix: e,
    name: t,
    encode(r) {
      return Vv(r, n, s);
    },
    decode(r) {
      return zv(r, n, s, t);
    }
  }), Kv = Ro({
    prefix: "\0",
    name: "identity",
    encode: (t) => Fv(t),
    decode: (t) => Mv(t)
  });
  var Gv = Object.freeze({
    __proto__: null,
    identity: Kv
  });
  const Yv = st({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });
  var Jv = Object.freeze({
    __proto__: null,
    base2: Yv
  });
  const Zv = st({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });
  var Xv = Object.freeze({
    __proto__: null,
    base8: Zv
  });
  const Qv = bi({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });
  var e1 = Object.freeze({
    __proto__: null,
    base10: Qv
  });
  const t1 = st({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  }), s1 = st({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });
  var n1 = Object.freeze({
    __proto__: null,
    base16: t1,
    base16upper: s1
  });
  const r1 = st({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  }), i1 = st({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  }), o1 = st({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  }), a1 = st({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  }), c1 = st({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  }), l1 = st({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  }), d1 = st({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  }), u1 = st({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  }), h1 = st({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });
  var p1 = Object.freeze({
    __proto__: null,
    base32: r1,
    base32upper: i1,
    base32pad: o1,
    base32padupper: a1,
    base32hex: c1,
    base32hexupper: l1,
    base32hexpad: d1,
    base32hexpadupper: u1,
    base32z: h1
  });
  const f1 = bi({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  }), g1 = bi({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });
  var m1 = Object.freeze({
    __proto__: null,
    base36: f1,
    base36upper: g1
  });
  const w1 = bi({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  }), y1 = bi({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });
  var b1 = Object.freeze({
    __proto__: null,
    base58btc: w1,
    base58flickr: y1
  });
  const E1 = st({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  }), C1 = st({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  }), v1 = st({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  }), A1 = st({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });
  var I1 = Object.freeze({
    __proto__: null,
    base64: E1,
    base64pad: C1,
    base64url: v1,
    base64urlpad: A1
  });
  const Qp = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), N1 = Qp.reduce((t, e, s) => (t[s] = e, t), []), S1 = Qp.reduce((t, e, s) => (t[e.codePointAt(0)] = s, t), []);
  function _1(t) {
    return t.reduce((e, s) => (e += N1[s], e), "");
  }
  function T1(t) {
    const e = [];
    for (const s of t) {
      const n = S1[s.codePointAt(0)];
      if (n === void 0) throw new Error(`Non-base256emoji character: ${s}`);
      e.push(n);
    }
    return new Uint8Array(e);
  }
  const O1 = Ro({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: _1,
    decode: T1
  });
  var k1 = Object.freeze({
    __proto__: null,
    base256emoji: O1
  }), x1 = ef, qd = 128, P1 = -128, R1 = Math.pow(2, 31);
  function ef(t, e, s) {
    e = e || [], s = s || 0;
    for (var n = s; t >= R1; ) e[s++] = t & 255 | qd, t /= 128;
    for (; t & P1; ) e[s++] = t & 255 | qd, t >>>= 7;
    return e[s] = t | 0, ef.bytes = s - n + 1, e;
  }
  var U1 = oc, $1 = 128, Wd = 127;
  function oc(t, n) {
    var s = 0, n = n || 0, r = 0, i = n, o, a = t.length;
    do {
      if (i >= a) throw oc.bytes = 0, new RangeError("Could not decode varint");
      o = t[i++], s += r < 28 ? (o & Wd) << r : (o & Wd) * Math.pow(2, r), r += 7;
    } while (o >= $1);
    return oc.bytes = i - n, s;
  }
  var D1 = Math.pow(2, 7), B1 = Math.pow(2, 14), L1 = Math.pow(2, 21), M1 = Math.pow(2, 28), F1 = Math.pow(2, 35), q1 = Math.pow(2, 42), W1 = Math.pow(2, 49), j1 = Math.pow(2, 56), H1 = Math.pow(2, 63), z1 = function(t) {
    return t < D1 ? 1 : t < B1 ? 2 : t < L1 ? 3 : t < M1 ? 4 : t < F1 ? 5 : t < q1 ? 6 : t < W1 ? 7 : t < j1 ? 8 : t < H1 ? 9 : 10;
  }, V1 = {
    encode: x1,
    decode: U1,
    encodingLength: z1
  }, tf = V1;
  const jd = (t, e, s = 0) => (tf.encode(t, e, s), e), Hd = (t) => tf.encodingLength(t), ac = (t, e) => {
    const s = e.byteLength, n = Hd(t), r = n + Hd(s), i = new Uint8Array(r + s);
    return jd(t, i, 0), jd(s, i, n), i.set(e, r), new K1(t, s, e, i);
  };
  class K1 {
    constructor(e, s, n, r) {
      this.code = e, this.size = s, this.digest = n, this.bytes = r;
    }
  }
  const sf = ({ name: t, code: e, encode: s }) => new G1(t, e, s);
  class G1 {
    constructor(e, s, n) {
      this.name = e, this.code = s, this.encode = n;
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        const s = this.encode(e);
        return s instanceof Uint8Array ? ac(this.code, s) : s.then((n) => ac(this.code, n));
      } else throw Error("Unknown type, must be binary type");
    }
  }
  const nf = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), Y1 = sf({
    name: "sha2-256",
    code: 18,
    encode: nf("SHA-256")
  }), J1 = sf({
    name: "sha2-512",
    code: 19,
    encode: nf("SHA-512")
  });
  var Z1 = Object.freeze({
    __proto__: null,
    sha256: Y1,
    sha512: J1
  });
  const rf = 0, X1 = "identity", of = Zp, Q1 = (t) => ac(rf, of(t)), eA = {
    code: rf,
    name: X1,
    encode: of,
    digest: Q1
  };
  var tA = Object.freeze({
    __proto__: null,
    identity: eA
  });
  new TextEncoder(), new TextDecoder();
  const zd = {
    ...Gv,
    ...Jv,
    ...Xv,
    ...e1,
    ...n1,
    ...p1,
    ...m1,
    ...b1,
    ...I1,
    ...k1
  };
  ({
    ...Z1,
    ...tA
  });
  function af(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
  }
  function sA(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? af(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
  }
  function cf(t, e, s, n) {
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
  const Vd = cf("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), fa = cf("ascii", "a", (t) => {
    let e = "a";
    for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
    return e;
  }, (t) => {
    t = t.substring(1);
    const e = sA(t.length);
    for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
    return e;
  }), nA = {
    utf8: Vd,
    "utf-8": Vd,
    hex: zd.base16,
    latin1: fa,
    ascii: fa,
    binary: fa,
    ...zd
  };
  function rA(t, e = "utf8") {
    const s = nA[e];
    if (!s) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? af(globalThis.Buffer.from(t, "utf-8")) : s.decoder.decode(`${s.prefix}${t}`);
  }
  var iA = Object.defineProperty, oA = (t, e, s) => e in t ? iA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, hs = (t, e, s) => oA(t, typeof e != "symbol" ? e + "" : e, s);
  class aA {
    constructor(e, s) {
      this.core = e, this.logger = s, hs(this, "keychain", /* @__PURE__ */ new Map()), hs(this, "name", ov), hs(this, "version", av), hs(this, "initialized", false), hs(this, "storagePrefix", Is), hs(this, "init", async () => {
        if (!this.initialized) {
          const n = await this.getKeyChain();
          typeof n < "u" && (this.keychain = n), this.initialized = true;
        }
      }), hs(this, "has", (n) => (this.isInitialized(), this.keychain.has(n))), hs(this, "set", async (n, r) => {
        this.isInitialized(), this.keychain.set(n, r), await this.persist();
      }), hs(this, "get", (n) => {
        this.isInitialized();
        const r = this.keychain.get(n);
        if (typeof r > "u") {
          const { message: i } = V("NO_MATCHING_KEY", `${this.name}: ${n}`);
          throw new Error(i);
        }
        return r;
      }), hs(this, "del", async (n) => {
        this.isInitialized(), this.keychain.delete(n), await this.persist();
      }), this.core = e, this.logger = Dt(s, this.name);
    }
    get context() {
      return Bt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
      await this.core.storage.setItem(this.storageKey, Ha(e));
    }
    async getKeyChain() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? za(e) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var cA = Object.defineProperty, lA = (t, e, s) => e in t ? cA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, He = (t, e, s) => lA(t, typeof e != "symbol" ? e + "" : e, s);
  class dA {
    constructor(e, s, n) {
      this.core = e, this.logger = s, He(this, "name", rv), He(this, "keychain"), He(this, "randomSessionIdentifier", sc()), He(this, "initialized", false), He(this, "clientId"), He(this, "init", async () => {
        this.initialized || (await this.keychain.init(), this.initialized = true);
      }), He(this, "hasKeys", (r) => (this.isInitialized(), this.keychain.has(r))), He(this, "getClientId", async () => {
        if (this.isInitialized(), this.clientId) return this.clientId;
        const r = await this.getClientSeed(), i = dl(r), o = tg(i.publicKey);
        return this.clientId = o, o;
      }), He(this, "generateKeyPair", () => {
        this.isInitialized();
        const r = BE();
        return this.setPrivateKey(r.publicKey, r.privateKey);
      }), He(this, "signJWT", async (r) => {
        this.isInitialized();
        const i = await this.getClientSeed(), o = dl(i), a = this.randomSessionIdentifier;
        return await sg(a, r, iv, o);
      }), He(this, "generateSharedKey", (r, i, o) => {
        this.isInitialized();
        const a = this.getPrivateKey(r), c = LE(a, i);
        return this.setSymKey(c, o);
      }), He(this, "setSymKey", async (r, i) => {
        this.isInitialized();
        const o = i || Vi(r);
        return await this.keychain.set(o, r), o;
      }), He(this, "deleteKeyPair", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), He(this, "deleteSymKey", async (r) => {
        this.isInitialized(), await this.keychain.del(r);
      }), He(this, "encode", async (r, i, o) => {
        this.isInitialized();
        const a = Wp(o), c = ng(i);
        if (Nd(a)) return qE(c, o == null ? void 0 : o.encoding);
        if (Id(a)) {
          const h = a.senderPublicKey, f = a.receiverPublicKey;
          r = await this.generateSharedKey(h, f);
        }
        const l = this.getSymKey(r), { type: d, senderPublicKey: u } = a;
        return ME({
          type: d,
          symKey: l,
          message: c,
          senderPublicKey: u,
          encoding: o == null ? void 0 : o.encoding
        });
      }), He(this, "decode", async (r, i, o) => {
        this.isInitialized();
        const a = jE(i, o);
        if (Nd(a)) {
          const c = WE(i, o == null ? void 0 : o.encoding);
          return ul(c);
        }
        if (Id(a)) {
          const c = a.receiverPublicKey, l = a.senderPublicKey;
          r = await this.generateSharedKey(c, l);
        }
        try {
          const c = this.getSymKey(r), l = FE({
            symKey: c,
            encoded: i,
            encoding: o == null ? void 0 : o.encoding
          });
          return ul(l);
        } catch (c) {
          this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
        }
      }), He(this, "getPayloadType", (r, i = At) => {
        const o = ri({
          encoded: r,
          encoding: i
        });
        return Wn(o.type);
      }), He(this, "getPayloadSenderPublicKey", (r, i = At) => {
        const o = ri({
          encoded: r,
          encoding: i
        });
        return o.senderPublicKey ? St(o.senderPublicKey, gt) : void 0;
      }), this.core = e, this.logger = Dt(s, this.name), this.keychain = n || new aA(this.core, this.logger);
    }
    get context() {
      return Bt(this.logger);
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
        e = this.keychain.get(Md);
      } catch {
        e = sc(), await this.keychain.set(Md, e);
      }
      return rA(e, "base16");
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var uA = Object.defineProperty, hA = Object.defineProperties, pA = Object.getOwnPropertyDescriptors, Kd = Object.getOwnPropertySymbols, fA = Object.prototype.hasOwnProperty, gA = Object.prototype.propertyIsEnumerable, cc = (t, e, s) => e in t ? uA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, mA = (t, e) => {
    for (var s in e || (e = {})) fA.call(e, s) && cc(t, s, e[s]);
    if (Kd) for (var s of Kd(e)) gA.call(e, s) && cc(t, s, e[s]);
    return t;
  }, wA = (t, e) => hA(t, pA(e)), Tt = (t, e, s) => cc(t, typeof e != "symbol" ? e + "" : e, s);
  class yA extends mm {
    constructor(e, s) {
      super(e, s), this.logger = e, this.core = s, Tt(this, "messages", /* @__PURE__ */ new Map()), Tt(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), Tt(this, "name", cv), Tt(this, "version", lv), Tt(this, "initialized", false), Tt(this, "storagePrefix", Is), Tt(this, "init", async () => {
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
      }), Tt(this, "set", async (n, r, i) => {
        this.isInitialized();
        const o = Kt(r);
        let a = this.messages.get(n);
        if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
        if (a[o] = r, this.messages.set(n, a), i === Ki.inbound) {
          const c = this.messagesWithoutClientAck.get(n) || {};
          this.messagesWithoutClientAck.set(n, wA(mA({}, c), {
            [o]: r
          }));
        }
        return await this.persist(), o;
      }), Tt(this, "get", (n) => {
        this.isInitialized();
        let r = this.messages.get(n);
        return typeof r > "u" && (r = {}), r;
      }), Tt(this, "getWithoutAck", (n) => {
        this.isInitialized();
        const r = {};
        for (const i of n) {
          const o = this.messagesWithoutClientAck.get(i) || {};
          r[i] = Object.values(o);
        }
        return r;
      }), Tt(this, "has", (n, r) => {
        this.isInitialized();
        const i = this.get(n), o = Kt(r);
        return typeof i[o] < "u";
      }), Tt(this, "ack", async (n, r) => {
        this.isInitialized();
        const i = this.messagesWithoutClientAck.get(n);
        if (typeof i > "u") return;
        const o = Kt(r);
        delete i[o], Object.keys(i).length === 0 ? this.messagesWithoutClientAck.delete(n) : this.messagesWithoutClientAck.set(n, i), await this.persist();
      }), Tt(this, "del", async (n) => {
        this.isInitialized(), this.messages.delete(n), this.messagesWithoutClientAck.delete(n), await this.persist();
      }), this.logger = Dt(e, this.name), this.core = s;
    }
    get context() {
      return Bt(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get storageKeyWithoutClientAck() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
    }
    async setRelayerMessages(e) {
      await this.core.storage.setItem(this.storageKey, Ha(e));
    }
    async setRelayerMessagesWithoutClientAck(e) {
      await this.core.storage.setItem(this.storageKeyWithoutClientAck, Ha(e));
    }
    async getRelayerMessages() {
      const e = await this.core.storage.getItem(this.storageKey);
      return typeof e < "u" ? za(e) : void 0;
    }
    async getRelayerMessagesWithoutClientAck() {
      const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
      return typeof e < "u" ? za(e) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var bA = Object.defineProperty, EA = Object.defineProperties, CA = Object.getOwnPropertyDescriptors, Gd = Object.getOwnPropertySymbols, vA = Object.prototype.hasOwnProperty, AA = Object.prototype.propertyIsEnumerable, lc = (t, e, s) => e in t ? bA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, tr = (t, e) => {
    for (var s in e || (e = {})) vA.call(e, s) && lc(t, s, e[s]);
    if (Gd) for (var s of Gd(e)) AA.call(e, s) && lc(t, s, e[s]);
    return t;
  }, Yd = (t, e) => EA(t, CA(e)), qt = (t, e, s) => lc(t, typeof e != "symbol" ? e + "" : e, s);
  class IA extends wm {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, qt(this, "events", new Hn.EventEmitter()), qt(this, "name", uv), qt(this, "queue", /* @__PURE__ */ new Map()), qt(this, "publishTimeout", K.toMiliseconds(K.ONE_MINUTE)), qt(this, "initialPublishTimeout", K.toMiliseconds(K.ONE_SECOND * 15)), qt(this, "needsTransportRestart", false), qt(this, "publish", async (n, r, i) => {
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
        const u = (i == null ? void 0 : i.ttl) || dv, h = (i == null ? void 0 : i.prompt) || false, f = (i == null ? void 0 : i.tag) || 0, g = (i == null ? void 0 : i.id) || kn().toString(), p = cr(fo().protocol), w = {
          id: g,
          method: (i == null ? void 0 : i.publishMethod) || p.publish,
          params: tr({
            topic: n,
            message: r,
            ttl: u,
            prompt: h,
            tag: f,
            attestation: i == null ? void 0 : i.attestation
          }, i == null ? void 0 : i.tvf)
        }, A = `Failed to publish payload, please try again. id:${g} tag:${f}`;
        try {
          Ke((o = w.params) == null ? void 0 : o.prompt) && ((a = w.params) == null || delete a.prompt), Ke((c = w.params) == null ? void 0 : c.tag) && ((l = w.params) == null || delete l.tag);
          const I = new Promise(async (v) => {
            const b = ({ id: R }) => {
              var D;
              ((D = w.id) == null ? void 0 : D.toString()) === R.toString() && (this.removeRequestFromQueue(R), this.relayer.events.removeListener(Fe.publish, b), v());
            };
            this.relayer.events.on(Fe.publish, b);
            const T = bs(new Promise((R, D) => {
              this.rpcPublish(w, i).then(R).catch((M) => {
                this.logger.warn(M, M == null ? void 0 : M.message), D(M);
              });
            }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g} tag:${f}`);
            try {
              await T, this.events.removeListener(Fe.publish, b);
            } catch (R) {
              this.queue.set(g, {
                request: w,
                opts: i,
                attempt: 1
              }), this.logger.warn(R, R == null ? void 0 : R.message);
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
          }), await bs(I, this.publishTimeout, A);
        } catch (I) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(I), (d = i == null ? void 0 : i.internal) != null && d.throwOnFailedPublish) throw I;
        } finally {
          this.queue.delete(g);
        }
      }), qt(this, "publishCustom", async (n) => {
        var r, i, o, a, c;
        this.logger.debug("Publishing custom payload"), this.logger.trace({
          type: "method",
          method: "publishCustom",
          params: n
        });
        const { payload: l, opts: d = {} } = n, { attestation: u, tvf: h, publishMethod: f, prompt: g, tag: p, ttl: w = K.FIVE_MINUTES } = d, A = d.id || kn().toString(), I = cr(fo().protocol), v = f || I.publish, b = {
          id: A,
          method: v,
          params: tr(Yd(tr({}, l), {
            ttl: w,
            prompt: g,
            tag: p,
            attestation: u
          }), h)
        }, T = `Failed to publish custom payload, please try again. id:${A} tag:${p}`;
        try {
          Ke((r = b.params) == null ? void 0 : r.prompt) && ((i = b.params) == null || delete i.prompt), Ke((o = b.params) == null ? void 0 : o.tag) && ((a = b.params) == null || delete a.tag);
          const R = new Promise(async (D) => {
            const M = ({ id: F }) => {
              var j;
              ((j = b.id) == null ? void 0 : j.toString()) === F.toString() && (this.removeRequestFromQueue(F), this.relayer.events.removeListener(Fe.publish, M), D());
            };
            this.relayer.events.on(Fe.publish, M);
            const k = bs(new Promise((F, j) => {
              this.rpcPublish(b, d).then(F).catch((x) => {
                this.logger.warn(x, x == null ? void 0 : x.message), j(x);
              });
            }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${v} id:${A} tag:${p}`);
            try {
              await k, this.events.removeListener(Fe.publish, M);
            } catch (F) {
              this.queue.set(A, {
                request: b,
                opts: d,
                attempt: 1
              }), this.logger.warn(F, F == null ? void 0 : F.message);
            }
          });
          this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              id: A,
              payload: l,
              opts: d
            }
          }), await bs(R, this.publishTimeout, T);
        } catch (R) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(R), (c = d == null ? void 0 : d.internal) != null && c.throwOnFailedPublish) throw R;
        } finally {
          this.queue.delete(A);
        }
      }), qt(this, "on", (n, r) => {
        this.events.on(n, r);
      }), qt(this, "once", (n, r) => {
        this.events.once(n, r);
      }), qt(this, "off", (n, r) => {
        this.events.off(n, r);
      }), qt(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.relayer = e, this.logger = Dt(s, this.name), this.registerEventListeners();
    }
    get context() {
      return Bt(this.logger);
    }
    async rpcPublish(e, s) {
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
        type: "message",
        direction: "outgoing",
        request: e
      });
      const n = await this.relayer.request(e);
      return this.relayer.events.emit(Fe.publish, tr(tr({}, e), s)), this.logger.debug("Successfully Published Payload"), n;
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach(async (e, s) => {
        var n;
        const r = e.attempt + 1;
        this.queue.set(s, Yd(tr({}, e), {
          attempt: r
        })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(n = e.request.params) == null ? void 0 : n.tag}, attempt: ${r}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(vr.pulse, () => {
        if (this.needsTransportRestart) {
          this.needsTransportRestart = false, this.relayer.events.emit(Fe.connection_stalled);
          return;
        }
        this.checkQueue();
      }), this.relayer.on(Fe.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
    }
  }
  var NA = Object.defineProperty, SA = (t, e, s) => e in t ? NA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, sr = (t, e, s) => SA(t, typeof e != "symbol" ? e + "" : e, s);
  class _A {
    constructor() {
      sr(this, "map", /* @__PURE__ */ new Map()), sr(this, "set", (e, s) => {
        const n = this.get(e);
        this.exists(e, s) || this.map.set(e, [
          ...n,
          s
        ]);
      }), sr(this, "get", (e) => this.map.get(e) || []), sr(this, "exists", (e, s) => this.get(e).includes(s)), sr(this, "delete", (e, s) => {
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
      }), sr(this, "clear", () => {
        this.map.clear();
      });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  }
  var TA = Object.defineProperty, OA = Object.defineProperties, kA = Object.getOwnPropertyDescriptors, Jd = Object.getOwnPropertySymbols, xA = Object.prototype.hasOwnProperty, PA = Object.prototype.propertyIsEnumerable, dc = (t, e, s) => e in t ? TA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ur = (t, e) => {
    for (var s in e || (e = {})) xA.call(e, s) && dc(t, s, e[s]);
    if (Jd) for (var s of Jd(e)) PA.call(e, s) && dc(t, s, e[s]);
    return t;
  }, ga = (t, e) => OA(t, kA(e)), Oe = (t, e, s) => dc(t, typeof e != "symbol" ? e + "" : e, s);
  class RA extends Em {
    constructor(e, s) {
      super(e, s), this.relayer = e, this.logger = s, Oe(this, "subscriptions", /* @__PURE__ */ new Map()), Oe(this, "topicMap", new _A()), Oe(this, "events", new Hn.EventEmitter()), Oe(this, "name", yv), Oe(this, "version", bv), Oe(this, "pending", /* @__PURE__ */ new Map()), Oe(this, "cached", []), Oe(this, "initialized", false), Oe(this, "storagePrefix", Is), Oe(this, "subscribeTimeout", K.toMiliseconds(K.ONE_MINUTE)), Oe(this, "initialSubscribeTimeout", K.toMiliseconds(K.ONE_SECOND * 15)), Oe(this, "clientId"), Oe(this, "batchSubscribeTopicsLimit", 500), Oe(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
      }), Oe(this, "subscribe", async (n, r) => {
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
          const o = fo(r), a = {
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
      }), Oe(this, "unsubscribe", async (n, r) => {
        this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(n, r.id, r) : await this.unsubscribeByTopic(n, r);
      }), Oe(this, "isSubscribed", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n));
      })), Oe(this, "isKnownTopic", (n) => new Promise((r) => {
        r(this.topicMap.topics.includes(n) || this.pending.has(n) || this.cached.some((i) => i.topic === n));
      })), Oe(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Oe(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Oe(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Oe(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), Oe(this, "start", async () => {
        await this.onConnect();
      }), Oe(this, "stop", async () => {
        await this.onDisconnect();
      }), Oe(this, "restart", async () => {
        await this.restore(), await this.onRestart();
      }), Oe(this, "checkPending", async () => {
        if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
        const n = [];
        this.pending.forEach((r) => {
          n.push(r);
        }), await this.batchSubscribe(n);
      }), Oe(this, "registerEventListeners", () => {
        this.relayer.core.heartbeat.on(vr.pulse, async () => {
          await this.checkPending();
        }), this.events.on(xt.created, async (n) => {
          const r = xt.created;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        }), this.events.on(xt.deleted, async (n) => {
          const r = xt.deleted;
          this.logger.info(`Emitting ${r}`), this.logger.debug({
            type: "event",
            event: r,
            data: n
          }), await this.persist();
        });
      }), this.relayer = e, this.logger = Dt(s, this.name), this.clientId = "";
    }
    get context() {
      return Bt(this.logger);
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
        const r = fo(n);
        await this.restartToComplete({
          topic: e,
          id: s,
          relay: r
        }), await this.rpcUnsubscribe(e, s, r);
        const i = $e("USER_DISCONNECTED", `${this.name}, ${e}`);
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
      (!n || (n == null ? void 0 : n.transportType) === Pe.relay) && await this.restartToComplete({
        topic: e,
        id: e,
        relay: s
      });
      const a = {
        method: cr(s.protocol).subscribe,
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
        if ((n == null ? void 0 : n.transportType) === Pe.link_mode) return setTimeout(() => {
          (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a).catch((u) => this.logger.warn(u));
        }, K.toMiliseconds(K.ONE_SECOND)), o;
        const l = new Promise(async (u) => {
          const h = (f) => {
            f.topic === e && (this.events.removeListener(xt.created, h), u(f.id));
          };
          this.events.on(xt.created, h);
          try {
            const f = await bs(new Promise((g, p) => {
              this.relayer.request(a).catch((w) => {
                this.logger.warn(w, w == null ? void 0 : w.message), p(w);
              }).then(g);
            }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
            this.events.removeListener(xt.created, h), u(f);
          } catch {
          }
        }), d = await bs(l, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
        if (!d && c) throw new Error(`Subscribing to ${e} failed, please try again`);
        return d ? o : null;
      } catch (l) {
        if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Fe.connection_stalled), c) throw l;
      }
      return null;
    }
    async rpcBatchSubscribe(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: cr(s.protocol).batchSubscribe,
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
        await await bs(new Promise((r) => {
          this.relayer.request(n).catch((i) => this.logger.warn(i)).then(r);
        }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
      } catch {
        this.relayer.events.emit(Fe.connection_stalled);
      }
    }
    async rpcBatchFetchMessages(e) {
      if (!e.length) return;
      const s = e[0].relay, n = {
        method: cr(s.protocol).batchFetchMessages,
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
        r = await await bs(new Promise((i, o) => {
          this.relayer.request(n).catch((a) => {
            this.logger.warn(a), o(a);
          }).then(i);
        }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
      } catch {
        this.relayer.events.emit(Fe.connection_stalled);
      }
      return r;
    }
    rpcUnsubscribe(e, s, n) {
      const r = {
        method: cr(n.protocol).unsubscribe,
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
      this.setSubscription(e, ga(Ur({}, s), {
        id: e
      })), this.pending.delete(s.topic);
    }
    onBatchSubscribe(e) {
      e.length && e.forEach((s) => {
        this.setSubscription(s.id, Ur({}, s)), this.pending.delete(s.topic);
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
      this.subscriptions.set(e, Ur({}, s)), this.topicMap.set(s.topic, e), this.events.emit(xt.created, s);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"), this.logger.trace({
        type: "method",
        method: "getSubscription",
        id: e
      });
      const s = this.subscriptions.get(e);
      if (!s) {
        const { message: n } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
      this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(xt.deleted, ga(Ur({}, n), {
        reason: s
      }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values), this.events.emit(xt.sync);
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
      this.events.emit(xt.resubscribed);
    }
    async restore() {
      try {
        const e = await this.getRelayerSubscriptions();
        if (typeof e > "u" || !e.length) return;
        if (this.subscriptions.size && !e.every((s) => {
          var n;
          return s.topic === ((n = this.subscriptions.get(s.id)) == null ? void 0 : n.topic);
        })) {
          const { message: s } = V("RESTORE_WILL_OVERRIDE", this.name);
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
      e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (s) => ga(Ur({}, s), {
        id: await this.getSubscriptionId(s.topic)
      })))));
    }
    async batchFetchMessages(e) {
      if (!e.length) return;
      this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
      const s = await this.rpcBatchFetchMessages(e);
      s && s.messages && (await n0(K.toMiliseconds(K.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(s.messages));
    }
    async onConnect() {
      await this.restart(), this.reset();
    }
    onDisconnect() {
      this.onDisable();
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
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
      return Kt(e + await this.getClientId());
    }
  }
  var UA = Object.defineProperty, Zd = Object.getOwnPropertySymbols, $A = Object.prototype.hasOwnProperty, DA = Object.prototype.propertyIsEnumerable, uc = (t, e, s) => e in t ? UA(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Xd = (t, e) => {
    for (var s in e || (e = {})) $A.call(e, s) && uc(t, s, e[s]);
    if (Zd) for (var s of Zd(e)) DA.call(e, s) && uc(t, s, e[s]);
    return t;
  }, ve = (t, e, s) => uc(t, typeof e != "symbol" ? e + "" : e, s);
  class BA extends ym {
    constructor(e) {
      var s;
      super(e), ve(this, "protocol", "wc"), ve(this, "version", 2), ve(this, "core"), ve(this, "logger"), ve(this, "events", new Hn.EventEmitter()), ve(this, "provider"), ve(this, "messages"), ve(this, "subscriber"), ve(this, "publisher"), ve(this, "name", pv), ve(this, "transportExplicitlyClosed", false), ve(this, "initialized", false), ve(this, "connectionAttemptInProgress", false), ve(this, "relayUrl"), ve(this, "projectId"), ve(this, "packageName"), ve(this, "bundleId"), ve(this, "hasExperiencedNetworkDisruption", false), ve(this, "pingTimeout"), ve(this, "heartBeatTimeout", K.toMiliseconds(K.THIRTY_SECONDS + K.FIVE_SECONDS)), ve(this, "reconnectTimeout"), ve(this, "connectPromise"), ve(this, "reconnectInProgress", false), ve(this, "requestsInFlight", []), ve(this, "connectTimeout", K.toMiliseconds(K.ONE_SECOND * 15)), ve(this, "request", async (n) => {
        var r, i;
        this.logger.debug("Publishing Request Payload");
        const o = n.id || kn().toString();
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
      }), ve(this, "resetPingTimeout", () => {
        ao() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var n, r, i, o;
          try {
            this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o = (i = (r = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : r.socket) == null ? void 0 : i.terminate) == null || o.call(i);
          } catch (a) {
            this.logger.warn(a, a == null ? void 0 : a.message);
          }
        }, this.heartBeatTimeout));
      }), ve(this, "onPayloadHandler", (n) => {
        this.onProviderPayload(n), this.resetPingTimeout();
      }), ve(this, "onConnectHandler", () => {
        this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(Fe.connect);
      }), ve(this, "onDisconnectHandler", () => {
        this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
      }), ve(this, "onProviderErrorHandler", (n) => {
        this.logger.fatal(`Fatal socket error: ${n.message}`), this.events.emit(Fe.error, n), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
      }), ve(this, "registerProviderListeners", () => {
        this.provider.on(Ft.payload, this.onPayloadHandler), this.provider.on(Ft.connect, this.onConnectHandler), this.provider.on(Ft.disconnect, this.onDisconnectHandler), this.provider.on(Ft.error, this.onProviderErrorHandler);
      }), this.core = e.core, this.logger = Zc({
        logger: (s = e.logger) != null ? s : hv,
        name: this.name
      }), this.messages = new yA(this.logger, e.core), this.subscriber = new RA(this, this.logger), this.publisher = new IA(this, this.logger), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Yp, qy() ? this.packageName = Vl() : Wy() && (this.bundleId = Vl()), this.provider = {};
    }
    async init() {
      this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
        this.messages.init(),
        this.subscriber.init()
      ]), this.initialized = true, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
    }
    get context() {
      return Bt(this.logger);
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
        transportType: Pe.relay
      }, Ki.outbound);
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
        d.topic === e && (this.subscriber.off(xt.created, l), c());
      };
      return await Promise.all([
        new Promise((d) => {
          c = d, this.subscriber.on(xt.created, l);
        }),
        new Promise(async (d, u) => {
          a = await this.subscriber.subscribe(e, Xd({
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
      this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await bs(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
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
      if (!await Ld()) throw new Error("No internet connection detected. Please restart your network and try again.");
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
        const r = Me(K.FIVE_MINUTES), i = {
          topic: n,
          expiry: r,
          relay: {
            protocol: "irn"
          },
          active: false
        };
        await this.core.pairing.pairings.set(n, i);
      }
      this.events.emit(Fe.message, e), await this.recordMessageEvent(e, Ki.inbound);
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
            this.provider.once(Ft.disconnect, i), await bs(new Promise((o, a) => {
              this.provider.connect().then(o).catch(a);
            }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
              r(o);
            }).finally(() => {
              this.provider.off(Ft.disconnect, i), clearTimeout(this.reconnectTimeout);
            }), await new Promise(async (o, a) => {
              const c = () => {
                r(new Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.once(Ft.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
                this.provider.off(Ft.disconnect, c);
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
        await new Promise((n) => setTimeout(n, K.toMiliseconds(s * 1))), s++;
      }
    }
    startPingTimeout() {
      var e, s, n, r, i;
      if (ao()) try {
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
      this.provider = new Nc(new eg(Ky({
        sdkVersion: ic,
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
      }), Sc(e)) {
        if (!e.method.endsWith(fv)) return;
        const s = e.params, { topic: n, message: r, publishedAt: i, attestation: o } = s.data, a = {
          topic: n,
          message: r,
          publishedAt: i,
          transportType: Pe.relay,
          attestation: o
        };
        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Xd({
          type: "event",
          event: s.id
        }, a)), this.events.emit(s.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
      } else _c(e) && this.events.emit(Fe.message_ack, e);
    }
    async onMessageEvent(e) {
      await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, Ki.inbound), this.events.emit(Fe.message, e));
    }
    async acknowledgePayload(e) {
      const s = Jr(e.id, true);
      await this.provider.connection.send(s);
    }
    unregisterProviderListeners() {
      this.provider.off(Ft.payload, this.onPayloadHandler), this.provider.off(Ft.connect, this.onConnectHandler), this.provider.off(Ft.disconnect, this.onDisconnectHandler), this.provider.off(Ft.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
      let e = await Ld();
      jC(async (s) => {
        e !== s && (e = s, s ? await this.transportOpen().catch((n) => this.logger.error(n, n == null ? void 0 : n.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
      }), this.core.heartbeat.on(vr.pulse, async () => {
        if (!this.transportExplicitlyClosed && !this.connected && VC()) try {
          await this.confirmOnlineStateOrThrow(), await this.transportOpen();
        } catch (s) {
          this.logger.warn(s, s == null ? void 0 : s.message);
        }
      });
    }
    async onProviderDisconnect() {
      clearTimeout(this.pingTimeout), this.events.emit(Fe.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
        await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
      }, K.toMiliseconds(gv)))));
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
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
  }
  function LA(t, e) {
    return t === e || Number.isNaN(t) && Number.isNaN(e);
  }
  function Qd(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function eu(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const MA = "[object RegExp]", FA = "[object String]", qA = "[object Number]", WA = "[object Boolean]", tu = "[object Arguments]", jA = "[object Symbol]", HA = "[object Date]", zA = "[object Map]", VA = "[object Set]", KA = "[object Array]", GA = "[object Function]", YA = "[object ArrayBuffer]", ma = "[object Object]", JA = "[object Error]", ZA = "[object DataView]", XA = "[object Uint8Array]", QA = "[object Uint8ClampedArray]", eI = "[object Uint16Array]", tI = "[object Uint32Array]", sI = "[object BigUint64Array]", nI = "[object Int8Array]", rI = "[object Int16Array]", iI = "[object Int32Array]", oI = "[object BigInt64Array]", aI = "[object Float32Array]", cI = "[object Float64Array]";
  function lI() {
  }
  function su(t) {
    if (!t || typeof t != "object") return false;
    const e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : false;
  }
  function dI(t, e, s) {
    return qr(t, e, void 0, void 0, void 0, void 0, s);
  }
  function qr(t, e, s, n, r, i, o) {
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
        return Kr(t, e, i, o);
    }
    return Kr(t, e, i, o);
  }
  function Kr(t, e, s, n) {
    if (Object.is(t, e)) return true;
    let r = eu(t), i = eu(e);
    if (r === tu && (r = ma), i === tu && (i = ma), r !== i) return false;
    switch (r) {
      case FA:
        return t.toString() === e.toString();
      case qA: {
        const c = t.valueOf(), l = e.valueOf();
        return LA(c, l);
      }
      case WA:
      case HA:
      case jA:
        return Object.is(t.valueOf(), e.valueOf());
      case MA:
        return t.source === e.source && t.flags === e.flags;
      case GA:
        return t === e;
    }
    s = s ?? /* @__PURE__ */ new Map();
    const o = s.get(t), a = s.get(e);
    if (o != null && a != null) return o === e;
    s.set(t, e), s.set(e, t);
    try {
      switch (r) {
        case zA: {
          if (t.size !== e.size) return false;
          for (const [c, l] of t.entries()) if (!e.has(c) || !qr(l, e.get(c), c, t, e, s, n)) return false;
          return true;
        }
        case VA: {
          if (t.size !== e.size) return false;
          const c = Array.from(t.values()), l = Array.from(e.values());
          for (let d = 0; d < c.length; d++) {
            const u = c[d], h = l.findIndex((f) => qr(u, f, void 0, t, e, s, n));
            if (h === -1) return false;
            l.splice(h, 1);
          }
          return true;
        }
        case KA:
        case XA:
        case QA:
        case eI:
        case tI:
        case sI:
        case nI:
        case rI:
        case iI:
        case oI:
        case aI:
        case cI: {
          if (typeof Ee < "u" && Ee.isBuffer(t) !== Ee.isBuffer(e) || t.length !== e.length) return false;
          for (let c = 0; c < t.length; c++) if (!qr(t[c], e[c], c, t, e, s, n)) return false;
          return true;
        }
        case YA:
          return t.byteLength !== e.byteLength ? false : Kr(new Uint8Array(t), new Uint8Array(e), s, n);
        case ZA:
          return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? false : Kr(new Uint8Array(t), new Uint8Array(e), s, n);
        case JA:
          return t.name === e.name && t.message === e.message;
        case ma: {
          if (!(Kr(t.constructor, e.constructor, s, n) || su(t) && su(e))) return false;
          const c = [
            ...Object.keys(t),
            ...Qd(t)
          ], l = [
            ...Object.keys(e),
            ...Qd(e)
          ];
          if (c.length !== l.length) return false;
          for (let d = 0; d < c.length; d++) {
            const u = c[d], h = t[u];
            if (!Object.hasOwn(e, u)) return false;
            const f = e[u];
            if (!qr(h, f, u, t, e, s, n)) return false;
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
  function uI(t, e) {
    return dI(t, e, lI);
  }
  var hI = Object.defineProperty, nu = Object.getOwnPropertySymbols, pI = Object.prototype.hasOwnProperty, fI = Object.prototype.propertyIsEnumerable, hc = (t, e, s) => e in t ? hI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ru = (t, e) => {
    for (var s in e || (e = {})) pI.call(e, s) && hc(t, s, e[s]);
    if (nu) for (var s of nu(e)) fI.call(e, s) && hc(t, s, e[s]);
    return t;
  }, bt = (t, e, s) => hc(t, typeof e != "symbol" ? e + "" : e, s);
  class Yn extends bm {
    constructor(e, s, n, r = Is, i = void 0) {
      super(e, s, n, r), this.core = e, this.logger = s, this.name = n, bt(this, "map", /* @__PURE__ */ new Map()), bt(this, "version", mv), bt(this, "cached", []), bt(this, "initialized", false), bt(this, "getKey"), bt(this, "storagePrefix", Is), bt(this, "recentlyDeleted", []), bt(this, "recentlyDeletedLimit", 200), bt(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
          this.getKey && o !== null && !Ke(o) ? this.map.set(this.getKey(o), o) : EC(o) ? this.map.set(o.id, o) : CC(o) && this.map.set(o.topic, o);
        }), this.cached = [], this.initialized = true);
      }), bt(this, "set", async (o, a) => {
        this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
          type: "method",
          method: "set",
          key: o,
          value: a
        }), this.map.set(o, a), await this.persist());
      }), bt(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
        type: "method",
        method: "get",
        key: o
      }), this.getData(o))), bt(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => uI(a[c], o[c]))) : this.values)), bt(this, "update", async (o, a) => {
        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
          type: "method",
          method: "update",
          key: o,
          update: a
        });
        const c = ru(ru({}, this.getData(o)), a);
        this.map.set(o, c), await this.persist();
      }), bt(this, "delete", async (o, a) => {
        this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
          type: "method",
          method: "delete",
          key: o,
          reason: a
        }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
      }), this.logger = Dt(s, this.name), this.storagePrefix = r, this.getKey = i;
    }
    get context() {
      return Bt(this.logger);
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
          const { message: r } = V("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
          throw this.logger.error(r), new Error(r);
        }
        const { message: n } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
          const { message: s } = V("RESTORE_WILL_OVERRIDE", this.name);
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
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var gI = Object.defineProperty, mI = (t, e, s) => e in t ? gI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ge = (t, e, s) => mI(t, typeof e != "symbol" ? e + "" : e, s);
  class wI {
    constructor(e, s) {
      this.core = e, this.logger = s, ge(this, "name", Ev), ge(this, "version", Cv), ge(this, "events", new Tc()), ge(this, "pairings"), ge(this, "initialized", false), ge(this, "storagePrefix", Is), ge(this, "ignoredPayloadTypes", [
        js
      ]), ge(this, "registeredMethods", []), ge(this, "init", async () => {
        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
      }), ge(this, "register", ({ methods: n }) => {
        this.isInitialized(), this.registeredMethods = [
          .../* @__PURE__ */ new Set([
            ...this.registeredMethods,
            ...n
          ])
        ];
      }), ge(this, "create", async (n) => {
        this.isInitialized();
        const r = sc(), i = await this.core.crypto.setSymKey(r), o = Me(K.FIVE_MINUTES), a = {
          protocol: Gp
        }, c = {
          topic: i,
          expiry: o,
          relay: a,
          active: false,
          methods: n == null ? void 0 : n.methods
        }, l = Od({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: i,
          symKey: r,
          relay: a,
          expiryTimestamp: o,
          methods: n == null ? void 0 : n.methods
        });
        return this.events.emit(_n.create, c), this.core.expirer.set(i, o), await this.pairings.set(i, c), await this.core.relayer.subscribe(i, {
          transportType: n == null ? void 0 : n.transportType,
          internal: n == null ? void 0 : n.internal
        }), {
          topic: i,
          uri: l
        };
      }), ge(this, "pair", async (n) => {
        this.isInitialized();
        const r = this.core.eventClient.createEvent({
          properties: {
            topic: n == null ? void 0 : n.uri,
            trace: [
              fs.pairing_started
            ]
          }
        });
        this.isValidPair(n, r);
        const { topic: i, symKey: o, relay: a, expiryTimestamp: c, methods: l } = Td(n.uri);
        r.props.properties.topic = i, r.addTrace(fs.pairing_uri_validation_success), r.addTrace(fs.pairing_uri_not_expired);
        let d;
        if (this.pairings.keys.includes(i)) {
          if (d = this.pairings.get(i), r.addTrace(fs.existing_pairing), d.active) throw r.setError(xs.active_pairing_already_exists), new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
          r.addTrace(fs.pairing_not_expired);
        }
        const u = c || Me(K.FIVE_MINUTES), h = {
          topic: i,
          relay: a,
          expiry: u,
          active: false,
          methods: l
        };
        this.core.expirer.set(i, u), await this.pairings.set(i, h), r.addTrace(fs.store_new_pairing), n.activatePairing && await this.activate({
          topic: i
        }), this.events.emit(_n.create, h), r.addTrace(fs.emit_inactive_pairing), this.core.crypto.keychain.has(i) || await this.core.crypto.setSymKey(o, i), r.addTrace(fs.subscribing_pairing_topic);
        try {
          await this.core.relayer.confirmOnlineStateOrThrow();
        } catch {
          r.setError(xs.no_internet_connection);
        }
        try {
          await this.core.relayer.subscribe(i, {
            relay: a
          });
        } catch (f) {
          throw r.setError(xs.subscribe_pairing_topic_failure), f;
        }
        return r.addTrace(fs.subscribe_pairing_topic_success), h;
      }), ge(this, "activate", async ({ topic: n }) => {
        this.isInitialized();
        const r = Me(K.FIVE_MINUTES);
        this.core.expirer.set(n, r), await this.pairings.update(n, {
          active: true,
          expiry: r
        });
      }), ge(this, "ping", async (n) => {
        this.isInitialized(), await this.isValidPing(n), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
        const { topic: r } = n;
        if (this.pairings.keys.includes(r)) {
          const i = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = Sn();
          this.events.once(Se("pairing_ping", i), ({ error: l }) => {
            l ? c(l) : a();
          }), await o();
        }
      }), ge(this, "updateExpiry", async ({ topic: n, expiry: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          expiry: r
        });
      }), ge(this, "updateMetadata", async ({ topic: n, metadata: r }) => {
        this.isInitialized(), await this.pairings.update(n, {
          peerMetadata: r
        });
      }), ge(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), ge(this, "disconnect", async (n) => {
        this.isInitialized(), await this.isValidDisconnect(n);
        const { topic: r } = n;
        this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", $e("USER_DISCONNECTED")), await this.deletePairing(r));
      }), ge(this, "formatUriFromPairing", (n) => {
        this.isInitialized();
        const { topic: r, relay: i, expiry: o, methods: a } = n, c = this.core.crypto.keychain.get(r);
        return Od({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: r,
          symKey: c,
          relay: i,
          expiryTimestamp: o,
          methods: a
        });
      }), ge(this, "sendRequest", async (n, r, i) => {
        const o = ms(r, i), a = await this.core.crypto.encode(n, o), c = Pr[r].req;
        return this.core.history.set(n, o), this.core.relayer.publish(n, a, c), o.id;
      }), ge(this, "sendResult", async (n, r, i) => {
        const o = Jr(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = Pr[c].res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), ge(this, "sendError", async (n, r, i) => {
        const o = Gu(n, i), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, n)).request.method, l = Pr[c] ? Pr[c].res : Pr.unregistered_method.res;
        await this.core.relayer.publish(r, a, l), await this.core.history.resolve(o);
      }), ge(this, "deletePairing", async (n, r) => {
        await this.core.relayer.unsubscribe(n), await Promise.all([
          this.pairings.delete(n, $e("USER_DISCONNECTED")),
          this.core.crypto.deleteSymKey(n),
          r ? Promise.resolve() : this.core.expirer.del(n)
        ]);
      }), ge(this, "cleanup", async () => {
        const n = this.pairings.getAll().filter((r) => ws(r.expiry));
        await Promise.all(n.map((r) => this.deletePairing(r.topic)));
      }), ge(this, "onRelayEventRequest", async (n) => {
        const { topic: r, payload: i } = n;
        switch (i.method) {
          case "wc_pairingPing":
            return await this.onPairingPingRequest(r, i);
          case "wc_pairingDelete":
            return await this.onPairingDeleteRequest(r, i);
          default:
            return await this.onUnknownRpcMethodRequest(r, i);
        }
      }), ge(this, "onRelayEventResponse", async (n) => {
        const { topic: r, payload: i } = n, o = (await this.core.history.get(r, i.id)).request.method;
        switch (o) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(r, i);
          default:
            return this.onUnknownRpcMethodResponse(o);
        }
      }), ge(this, "onPairingPingRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidPing({
            topic: n
          }), await this.sendResult(i, n, true), this.events.emit(_n.ping, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), ge(this, "onPairingPingResponse", (n, r) => {
        const { id: i } = r;
        setTimeout(() => {
          Os(r) ? this.events.emit(Se("pairing_ping", i), {}) : gs(r) && this.events.emit(Se("pairing_ping", i), {
            error: r.error
          });
        }, 500);
      }), ge(this, "onPairingDeleteRequest", async (n, r) => {
        const { id: i } = r;
        try {
          this.isValidDisconnect({
            topic: n
          }), await this.deletePairing(n), this.events.emit(_n.delete, {
            id: i,
            topic: n
          });
        } catch (o) {
          await this.sendError(i, n, o), this.logger.error(o);
        }
      }), ge(this, "onUnknownRpcMethodRequest", async (n, r) => {
        const { id: i, method: o } = r;
        try {
          if (this.registeredMethods.includes(o)) return;
          const a = $e("WC_METHOD_UNSUPPORTED", o);
          await this.sendError(i, n, a), this.logger.error(a);
        } catch (a) {
          await this.sendError(i, n, a), this.logger.error(a);
        }
      }), ge(this, "onUnknownRpcMethodResponse", (n) => {
        this.registeredMethods.includes(n) || this.logger.error($e("WC_METHOD_UNSUPPORTED", n));
      }), ge(this, "isValidPair", (n, r) => {
        var i;
        if (!Et(n)) {
          const { message: a } = V("MISSING_OR_INVALID", `pair() params: ${n}`);
          throw r.setError(xs.malformed_pairing_uri), new Error(a);
        }
        if (!bC(n.uri)) {
          const { message: a } = V("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
          throw r.setError(xs.malformed_pairing_uri), new Error(a);
        }
        const o = Td(n == null ? void 0 : n.uri);
        if (!((i = o == null ? void 0 : o.relay) != null && i.protocol)) {
          const { message: a } = V("MISSING_OR_INVALID", "pair() uri#relay-protocol");
          throw r.setError(xs.malformed_pairing_uri), new Error(a);
        }
        if (!(o != null && o.symKey)) {
          const { message: a } = V("MISSING_OR_INVALID", "pair() uri#symKey");
          throw r.setError(xs.malformed_pairing_uri), new Error(a);
        }
        if (o != null && o.expiryTimestamp && K.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
          r.setError(xs.pairing_expired);
          const { message: a } = V("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
          throw new Error(a);
        }
      }), ge(this, "isValidPing", async (n) => {
        if (!Et(n)) {
          const { message: i } = V("MISSING_OR_INVALID", `ping() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), ge(this, "isValidDisconnect", async (n) => {
        if (!Et(n)) {
          const { message: i } = V("MISSING_OR_INVALID", `disconnect() params: ${n}`);
          throw new Error(i);
        }
        const { topic: r } = n;
        await this.isValidPairingTopic(r);
      }), ge(this, "isValidPairingTopic", async (n) => {
        if (!qe(n, false)) {
          const { message: r } = V("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
          throw new Error(r);
        }
        if (!this.pairings.keys.includes(n)) {
          const { message: r } = V("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
          throw new Error(r);
        }
        if (ws(this.pairings.get(n).expiry)) {
          await this.deletePairing(n);
          const { message: r } = V("EXPIRED", `pairing topic: ${n}`);
          throw new Error(r);
        }
      }), this.core = e, this.logger = Dt(s, this.name), this.pairings = new Yn(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
      return Bt(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(Fe.message, async (e) => {
        const { topic: s, message: n, transportType: r } = e;
        if (this.pairings.keys.includes(s) && r !== Pe.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))) try {
          const i = await this.core.crypto.decode(s, n);
          Sc(i) ? (this.core.history.set(s, i), await this.onRelayEventRequest({
            topic: s,
            payload: i
          })) : _c(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
            topic: s,
            payload: i
          }), this.core.history.delete(s, i.id)), await this.core.relayer.messages.ack(s, n);
        } catch (i) {
          this.logger.error(i);
        }
      });
    }
    registerExpirerEvents() {
      this.core.expirer.on(zt.expired, async (e) => {
        const { topic: s } = Hh(e.target);
        s && this.pairings.keys.includes(s) && (await this.deletePairing(s, true), this.events.emit(_n.expire, {
          topic: s
        }));
      });
    }
  }
  var yI = Object.defineProperty, bI = (t, e, s) => e in t ? yI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Je = (t, e, s) => bI(t, typeof e != "symbol" ? e + "" : e, s);
  class EI extends gm {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, Je(this, "records", /* @__PURE__ */ new Map()), Je(this, "events", new Hn.EventEmitter()), Je(this, "name", vv), Je(this, "version", Av), Je(this, "cached", []), Je(this, "initialized", false), Je(this, "storagePrefix", Is), Je(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), Je(this, "set", (n, r, i) => {
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
          expiry: Me(K.THIRTY_DAYS)
        };
        this.records.set(o.id, o), this.persist(), this.events.emit(Qt.created, o);
      }), Je(this, "resolve", async (n) => {
        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
          type: "method",
          method: "update",
          response: n
        }), !this.records.has(n.id)) return;
        const r = await this.getRecord(n.id);
        typeof r.response > "u" && (r.response = gs(n) ? {
          error: n.error
        } : {
          result: n.result
        }, this.records.set(r.id, r), this.persist(), this.events.emit(Qt.updated, r));
      }), Je(this, "get", async (n, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
        type: "method",
        method: "get",
        topic: n,
        id: r
      }), await this.getRecord(r))), Je(this, "delete", (n, r) => {
        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
          type: "method",
          method: "delete",
          id: r
        }), this.values.forEach((i) => {
          if (i.topic === n) {
            if (typeof r < "u" && i.id !== r) return;
            this.records.delete(i.id), this.events.emit(Qt.deleted, i);
          }
        }), this.persist();
      }), Je(this, "exists", async (n, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === n : false)), Je(this, "on", (n, r) => {
        this.events.on(n, r);
      }), Je(this, "once", (n, r) => {
        this.events.once(n, r);
      }), Je(this, "off", (n, r) => {
        this.events.off(n, r);
      }), Je(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = Dt(s, this.name);
    }
    get context() {
      return Bt(this.logger);
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
          request: ms(s.request.method, s.request.params, s.id),
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
        const { message: n } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(n);
      }
      return s;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(Qt.sync);
    }
    async restore() {
      try {
        const e = await this.getJsonRpcRecords();
        if (typeof e > "u" || !e.length) return;
        if (this.records.size) {
          const { message: s } = V("RESTORE_WILL_OVERRIDE", this.name);
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
      this.events.on(Qt.created, (e) => {
        const s = Qt.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(Qt.updated, (e) => {
        const s = Qt.updated;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.events.on(Qt.deleted, (e) => {
        const s = Qt.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          record: e
        });
      }), this.core.heartbeat.on(vr.pulse, () => {
        this.cleanup();
      });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = false;
        this.records.forEach((s) => {
          K.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`), this.records.delete(s.id), this.events.emit(Qt.deleted, s, false), e = true);
        }), e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var CI = Object.defineProperty, vI = (t, e, s) => e in t ? CI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ot = (t, e, s) => vI(t, typeof e != "symbol" ? e + "" : e, s);
  class AI extends Cm {
    constructor(e, s) {
      super(e, s), this.core = e, this.logger = s, ot(this, "expirations", /* @__PURE__ */ new Map()), ot(this, "events", new Hn.EventEmitter()), ot(this, "name", Iv), ot(this, "version", Nv), ot(this, "cached", []), ot(this, "initialized", false), ot(this, "storagePrefix", Is), ot(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), ot(this, "has", (n) => {
        try {
          const r = this.formatTarget(n);
          return typeof this.getExpiration(r) < "u";
        } catch {
          return false;
        }
      }), ot(this, "set", (n, r) => {
        this.isInitialized();
        const i = this.formatTarget(n), o = {
          target: i,
          expiry: r
        };
        this.expirations.set(i, o), this.checkExpiry(i, o), this.events.emit(zt.created, {
          target: i,
          expiration: o
        });
      }), ot(this, "get", (n) => {
        this.isInitialized();
        const r = this.formatTarget(n);
        return this.getExpiration(r);
      }), ot(this, "del", (n) => {
        if (this.isInitialized(), this.has(n)) {
          const r = this.formatTarget(n), i = this.getExpiration(r);
          this.expirations.delete(r), this.events.emit(zt.deleted, {
            target: r,
            expiration: i
          });
        }
      }), ot(this, "on", (n, r) => {
        this.events.on(n, r);
      }), ot(this, "once", (n, r) => {
        this.events.once(n, r);
      }), ot(this, "off", (n, r) => {
        this.events.off(n, r);
      }), ot(this, "removeListener", (n, r) => {
        this.events.removeListener(n, r);
      }), this.logger = Dt(s, this.name);
    }
    get context() {
      return Bt(this.logger);
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
      if (typeof e == "string") return Gy(e);
      if (typeof e == "number") return Yy(e);
      const { message: s } = V("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(s);
    }
    async setExpirations(e) {
      await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(zt.sync);
    }
    async restore() {
      try {
        const e = await this.getExpirations();
        if (typeof e > "u" || !e.length) return;
        if (this.expirations.size) {
          const { message: s } = V("RESTORE_WILL_OVERRIDE", this.name);
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
        const { message: n } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw this.logger.warn(n), new Error(n);
      }
      return s;
    }
    checkExpiry(e, s) {
      const { expiry: n } = s;
      K.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, s);
    }
    expire(e, s) {
      this.expirations.delete(e), this.events.emit(zt.expired, {
        target: e,
        expiration: s
      });
    }
    checkExpirations() {
      this.core.relayer.connected && this.expirations.forEach((e, s) => this.checkExpiry(s, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on(vr.pulse, () => this.checkExpirations()), this.events.on(zt.created, (e) => {
        const s = zt.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(zt.expired, (e) => {
        const s = zt.expired;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      }), this.events.on(zt.deleted, (e) => {
        const s = zt.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({
          type: "event",
          event: s,
          data: e
        }), this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  }
  var II = Object.defineProperty, NI = (t, e, s) => e in t ? II(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Le = (t, e, s) => NI(t, typeof e != "symbol" ? e + "" : e, s);
  class SI extends vm {
    constructor(e, s, n) {
      super(e, s, n), this.core = e, this.logger = s, this.store = n, Le(this, "name", Sv), Le(this, "abortController"), Le(this, "isDevEnv"), Le(this, "verifyUrlV3", Tv), Le(this, "storagePrefix", Is), Le(this, "version", Kp), Le(this, "publicKey"), Le(this, "fetchPromise"), Le(this, "init", async () => {
        var r;
        this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && K.toMiliseconds((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
      }), Le(this, "register", async (r) => {
        if (!Ar() || this.isDevEnv) return;
        const i = window.location.origin, { id: o, decryptedId: a } = r, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${i}&id=${o}&decryptedId=${a}`;
        try {
          const l = zs.getDocument(), d = this.startAbortTimer(K.ONE_SECOND * 5), u = await new Promise((h, f) => {
            const g = () => {
              window.removeEventListener("message", w), l.body.removeChild(p), f("attestation aborted");
            };
            this.abortController.signal.addEventListener("abort", g);
            const p = l.createElement("iframe");
            p.src = c, p.style.display = "none", p.addEventListener("error", g, {
              signal: this.abortController.signal
            });
            const w = (A) => {
              if (A.data && typeof A.data == "string") try {
                const I = JSON.parse(A.data);
                if (I.type === "verify_attestation") {
                  if (Ta(I.attestation).payload.id !== o) return;
                  clearInterval(d), l.body.removeChild(p), this.abortController.signal.removeEventListener("abort", g), window.removeEventListener("message", w), h(I.attestation === null ? "" : I.attestation);
                }
              } catch (I) {
                this.logger.warn(I);
              }
            };
            l.body.appendChild(p), window.addEventListener("message", w, {
              signal: this.abortController.signal
            });
          });
          return this.logger.debug(u, "jwt attestation"), u;
        } catch (l) {
          this.logger.warn(l);
        }
        return "";
      }), Le(this, "resolve", async (r) => {
        if (this.isDevEnv) return "";
        const { attestationId: i, hash: o, encryptedId: a } = r;
        if (i === "") {
          this.logger.debug("resolve: attestationId is empty, skipping");
          return;
        }
        if (i) {
          if (Ta(i).payload.id !== a) return;
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
      }), Le(this, "fetchAttestation", async (r, i) => {
        this.logger.debug(`resolving attestation: ${r} from url: ${i}`);
        const o = this.startAbortTimer(K.ONE_SECOND * 5), a = await fetch(`${i}/attestation/${r}?v2Supported=true`, {
          signal: this.abortController.signal
        });
        return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
      }), Le(this, "getVerifyUrl", (r) => {
        let i = r || Vr;
        return Ov.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${Vr}`), i = Vr), i;
      }), Le(this, "fetchPublicKey", async () => {
        try {
          this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
          const r = this.startAbortTimer(K.FIVE_SECONDS), i = await fetch(`${this.verifyUrlV3}/public-key`, {
            signal: this.abortController.signal
          });
          return clearTimeout(r), await i.json();
        } catch (r) {
          this.logger.warn(r);
        }
      }), Le(this, "persistPublicKey", async (r) => {
        this.logger.debug(r, "persisting public key to local storage"), await this.store.setItem(this.storeKey, r), this.publicKey = r;
      }), Le(this, "removePublicKey", async () => {
        this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
      }), Le(this, "isValidJwtAttestation", async (r) => {
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
      }), Le(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), Le(this, "fetchAndPersistPublicKey", async () => {
        if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
        this.fetchPromise = new Promise(async (i) => {
          const o = await this.fetchPublicKey();
          o && (await this.persistPublicKey(o), i(o));
        });
        const r = await this.fetchPromise;
        return this.fetchPromise = void 0, r;
      }), Le(this, "validateAttestation", (r, i) => {
        const o = zE(r, i.publicKey), a = {
          hasExpired: K.toMiliseconds(o.exp) < Date.now(),
          payload: o
        };
        if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
        return {
          origin: a.payload.origin,
          isScam: a.payload.isScam,
          isVerified: a.payload.isVerified
        };
      }), this.logger = Dt(s, this.name), this.abortController = new AbortController(), this.isDevEnv = Fc(), this.init();
    }
    get storeKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
      return Bt(this.logger);
    }
    startAbortTimer(e) {
      return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), K.toMiliseconds(e));
    }
  }
  var _I = Object.defineProperty, TI = (t, e, s) => e in t ? _I(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, iu = (t, e, s) => TI(t, typeof e != "symbol" ? e + "" : e, s);
  class OI extends Am {
    constructor(e, s) {
      super(e, s), this.projectId = e, this.logger = s, iu(this, "context", kv), iu(this, "registerDeviceToken", async (n) => {
        const { clientId: r, token: i, notificationType: o, enableEncrypted: a = false } = n, c = `${xv}/${this.projectId}/clients`;
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
      }), this.logger = Dt(s, this.context);
    }
  }
  var kI = Object.defineProperty, ou = Object.getOwnPropertySymbols, xI = Object.prototype.hasOwnProperty, PI = Object.prototype.propertyIsEnumerable, pc = (t, e, s) => e in t ? kI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, $r = (t, e) => {
    for (var s in e || (e = {})) xI.call(e, s) && pc(t, s, e[s]);
    if (ou) for (var s of ou(e)) PI.call(e, s) && pc(t, s, e[s]);
    return t;
  }, ze = (t, e, s) => pc(t, typeof e != "symbol" ? e + "" : e, s);
  class RI extends Im {
    constructor(e, s, n = true) {
      super(e, s, n), this.core = e, this.logger = s, ze(this, "context", Rv), ze(this, "storagePrefix", Is), ze(this, "storageVersion", Pv), ze(this, "events", /* @__PURE__ */ new Map()), ze(this, "shouldPersist", false), ze(this, "init", async () => {
        if (!Fc()) try {
          const r = {
            eventId: Gl(),
            timestamp: Date.now(),
            domain: this.getAppDomain(),
            props: {
              event: "INIT",
              type: "",
              properties: {
                client_id: await this.core.crypto.getClientId(),
                user_agent: Wh(this.core.relayer.protocol, this.core.relayer.version, ic)
              }
            }
          };
          await this.sendEvent([
            r
          ]);
        } catch (r) {
          this.logger.warn(r);
        }
      }), ze(this, "createEvent", (r) => {
        const { event: i = "ERROR", type: o = "", properties: { topic: a, trace: c } } = r, l = Gl(), d = this.core.projectId || "", u = Date.now(), h = $r({
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
      }), ze(this, "getEvent", (r) => {
        const { eventId: i, topic: o } = r;
        if (i) return this.events.get(i);
        const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
        if (a) return $r($r({}, a), this.setMethods(a.eventId));
      }), ze(this, "deleteEvent", (r) => {
        const { eventId: i } = r;
        this.events.delete(i), this.shouldPersist = true;
      }), ze(this, "setEventListeners", () => {
        this.core.heartbeat.on(vr.pulse, async () => {
          this.shouldPersist && await this.persist(), this.events.forEach((r) => {
            K.fromMiliseconds(Date.now()) - K.fromMiliseconds(r.timestamp) > Uv && (this.events.delete(r.eventId), this.shouldPersist = true);
          });
        });
      }), ze(this, "setMethods", (r) => ({
        addTrace: (i) => this.addTrace(r, i),
        setError: (i) => this.setError(r, i)
      })), ze(this, "addTrace", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.properties.trace.push(i), this.events.set(r, o), this.shouldPersist = true);
      }), ze(this, "setError", (r, i) => {
        const o = this.events.get(r);
        o && (o.props.type = i, o.timestamp = Date.now(), this.events.set(r, o), this.shouldPersist = true);
      }), ze(this, "persist", async () => {
        await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
      }), ze(this, "restore", async () => {
        try {
          const r = await this.core.storage.getItem(this.storageKey) || [];
          if (!r.length) return;
          r.forEach((i) => {
            this.events.set(i.eventId, $r($r({}, i), this.setMethods(i.eventId)));
          });
        } catch (r) {
          this.logger.warn(r);
        }
      }), ze(this, "submit", async () => {
        if (!this.telemetryEnabled || this.events.size === 0) return;
        const r = [];
        for (const [i, o] of this.events) o.props.type && r.push(o);
        if (r.length !== 0) try {
          if ((await this.sendEvent(r)).ok) for (const i of r) this.events.delete(i.eventId), this.shouldPersist = true;
        } catch (i) {
          this.logger.warn(i);
        }
      }), ze(this, "sendEvent", async (r) => {
        const i = this.getAppDomain() ? "" : "&sp=desktop";
        return await fetch(`${$v}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${ic}${i}`, {
          method: "POST",
          body: JSON.stringify(r)
        });
      }), ze(this, "getAppDomain", () => qh().url), this.logger = Dt(s, this.context), this.telemetryEnabled = n, n ? this.restore().then(async () => {
        await this.submit(), this.setEventListeners();
      }) : this.persist();
    }
    get storageKey() {
      return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
  }
  var UI = Object.defineProperty, au = Object.getOwnPropertySymbols, $I = Object.prototype.hasOwnProperty, DI = Object.prototype.propertyIsEnumerable, fc = (t, e, s) => e in t ? UI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, cu = (t, e) => {
    for (var s in e || (e = {})) $I.call(e, s) && fc(t, s, e[s]);
    if (au) for (var s of au(e)) DI.call(e, s) && fc(t, s, e[s]);
    return t;
  }, ke = (t, e, s) => fc(t, typeof e != "symbol" ? e + "" : e, s);
  let BI = class lf extends um {
    constructor(e) {
      var s;
      super(e), ke(this, "protocol", Vp), ke(this, "version", Kp), ke(this, "name", rc), ke(this, "relayUrl"), ke(this, "projectId"), ke(this, "customStoragePrefix"), ke(this, "events", new Hn.EventEmitter()), ke(this, "logger"), ke(this, "heartbeat"), ke(this, "relayer"), ke(this, "crypto"), ke(this, "storage"), ke(this, "history"), ke(this, "expirer"), ke(this, "pairing"), ke(this, "verify"), ke(this, "echoClient"), ke(this, "linkModeSupportedApps"), ke(this, "eventClient"), ke(this, "initialized", false), ke(this, "logChunkController"), ke(this, "on", (a, c) => this.events.on(a, c)), ke(this, "once", (a, c) => this.events.once(a, c)), ke(this, "off", (a, c) => this.events.off(a, c)), ke(this, "removeListener", (a, c) => this.events.removeListener(a, c)), ke(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: l }) => {
        if (!a || !c) return;
        const d = {
          topic: a,
          message: c,
          publishedAt: Date.now(),
          transportType: Pe.link_mode
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
      this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Yp, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
      const r = Ku({
        level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : sv.logger,
        name: rc
      }), { logger: i, chunkLoggerController: o } = Ic({
        opts: r,
        maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes,
        loggerOverride: e == null ? void 0 : e.logger
      });
      this.logChunkController = o, (s = this.logChunkController) != null && s.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
        var a, c;
        (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
          clientId: await this.crypto.getClientId()
        }));
      }), this.logger = Dt(i, this.name), this.heartbeat = new Xf(), this.crypto = new dA(this, this.logger, e == null ? void 0 : e.keychain), this.history = new EI(this, this.logger), this.expirer = new AI(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Qf(cu(cu({}, nv), e == null ? void 0 : e.storageOptions)), this.relayer = new BA({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId
      }), this.pairing = new wI(this, this.logger), this.verify = new SI(this, this.logger, this.storage), this.echoClient = new OI(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new RI(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
    }
    static async init(e) {
      const s = new lf(e);
      await s.initialize();
      const n = await s.crypto.getClientId();
      return await s.storage.setItem(wv, n), s;
    }
    get context() {
      return Bt(this.logger);
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
      this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(Fd, this.linkModeSupportedApps));
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Fd) || [], this.initialized = true, this.logger.info("Core Initialization Success");
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
        return typeof un < "u" && tv.DISABLE_GLOBAL_CORE === "true";
      } catch {
        return true;
      }
    }
  };
  const LI = BI, df = "wc", uf = 2, hf = "client", Xc = `${df}@${uf}:${hf}:`, wa = {
    name: hf,
    logger: "error"
  }, lu = "WALLETCONNECT_DEEPLINK_CHOICE", MI = "proposal", du = "Proposal expired", FI = "session", nr = K.SEVEN_DAYS, qI = "engine", Ze = {
    wc_sessionPropose: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: true,
        tag: 1100
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1101
      },
      reject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1120
      },
      autoReject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1121
      }
    },
    wc_sessionSettle: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1102
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1103
      }
    },
    wc_sessionUpdate: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1104
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1105
      }
    },
    wc_sessionExtend: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1106
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1107
      }
    },
    wc_sessionRequest: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: true,
        tag: 1108
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1109
      }
    },
    wc_sessionEvent: {
      req: {
        ttl: K.FIVE_MINUTES,
        prompt: true,
        tag: 1110
      },
      res: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1111
      }
    },
    wc_sessionDelete: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1112
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1113
      }
    },
    wc_sessionPing: {
      req: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1114
      },
      res: {
        ttl: K.ONE_DAY,
        prompt: false,
        tag: 1115
      }
    },
    wc_sessionAuthenticate: {
      req: {
        ttl: K.ONE_HOUR,
        prompt: true,
        tag: 1116
      },
      res: {
        ttl: K.ONE_HOUR,
        prompt: false,
        tag: 1117
      },
      reject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1118
      },
      autoReject: {
        ttl: K.FIVE_MINUTES,
        prompt: false,
        tag: 1119
      }
    }
  }, ya = {
    min: K.FIVE_MINUTES,
    max: K.SEVEN_DAYS
  }, ps = {
    idle: "IDLE",
    active: "ACTIVE"
  }, WI = {
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
  }, jI = "request", HI = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate"
  ], zI = "wc", VI = "auth", KI = "authKeys", GI = "pairingTopics", YI = "requests", Uo = `${zI}@${1.5}:${VI}:`, Gi = `${Uo}:PUB_KEY`;
  var JI = Object.defineProperty, ZI = Object.defineProperties, XI = Object.getOwnPropertyDescriptors, uu = Object.getOwnPropertySymbols, QI = Object.prototype.hasOwnProperty, eN = Object.prototype.propertyIsEnumerable, gc = (t, e, s) => e in t ? JI(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ae = (t, e) => {
    for (var s in e || (e = {})) QI.call(e, s) && gc(t, s, e[s]);
    if (uu) for (var s of uu(e)) eN.call(e, s) && gc(t, s, e[s]);
    return t;
  }, Xe = (t, e) => ZI(t, XI(e)), B = (t, e, s) => gc(t, typeof e != "symbol" ? e + "" : e, s);
  class tN extends Tm {
    constructor(e) {
      super(e), B(this, "name", qI), B(this, "events", new Tc()), B(this, "initialized", false), B(this, "requestQueue", {
        state: ps.idle,
        queue: []
      }), B(this, "sessionRequestQueue", {
        state: ps.idle,
        queue: []
      }), B(this, "emittedSessionRequests", new r0({
        limit: 500
      })), B(this, "requestQueueDelay", K.ONE_SECOND), B(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), B(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), B(this, "recentlyDeletedLimit", 200), B(this, "relayMessageCache", []), B(this, "pendingSessions", /* @__PURE__ */ new Map()), B(this, "init", async () => {
        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
          methods: Object.keys(Ze)
        }), this.initialized = true, setTimeout(async () => {
          await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
        }, K.toMiliseconds(this.requestQueueDelay)));
      }), B(this, "connect", async (s) => {
        var n;
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        const r = Xe(Ae({}, s), {
          requiredNamespaces: s.requiredNamespaces || {},
          optionalNamespaces: s.optionalNamespaces || {}
        });
        await this.isValidConnect(r), r.optionalNamespaces = fC(r.requiredNamespaces, r.optionalNamespaces), r.requiredNamespaces = {};
        const { pairingTopic: i, requiredNamespaces: o, optionalNamespaces: a, sessionProperties: c, scopedProperties: l, relays: d, authentication: u, walletPay: h } = r, f = ((n = u == null ? void 0 : u[0]) == null ? void 0 : n.ttl) || Ze.wc_sessionPropose.req.ttl || K.FIVE_MINUTES;
        this.validateRequestExpiry(f);
        let g = i, p, w = false;
        try {
          if (g) {
            const k = this.client.core.pairing.pairings.get(g);
            this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), w = k.active;
          }
        } catch (k) {
          throw this.client.logger.error(`connect() -> pairing.get(${g}) failed`), k;
        }
        if (!g || !w) {
          const { topic: k, uri: F } = await this.client.core.pairing.create({
            internal: {
              skipSubscribe: true
            }
          });
          g = k, p = F;
        }
        if (!g) {
          const { message: k } = V("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
          throw new Error(k);
        }
        const A = await this.client.core.crypto.generateKeyPair(), I = Me(f), v = Ae(Xe(Ae(Ae({
          requiredNamespaces: o,
          optionalNamespaces: a,
          relays: d ?? [
            {
              protocol: Gp
            }
          ],
          proposer: {
            publicKey: A,
            metadata: this.client.metadata
          },
          expiryTimestamp: I,
          pairingTopic: g
        }, c && {
          sessionProperties: c
        }), l && {
          scopedProperties: l
        }), {
          id: Gs()
        }), (u || h) && {
          requests: {
            authentication: u == null ? void 0 : u.map((k) => {
              const { domain: F, chains: j, nonce: x, uri: C, exp: S, nbf: y, type: E, statement: _, requestId: $, resources: N, signatureTypes: O } = k;
              return {
                domain: F,
                chains: j,
                nonce: x,
                type: E ?? "caip122",
                aud: C,
                version: "1",
                iat: (/* @__PURE__ */ new Date()).toISOString(),
                exp: S,
                nbf: y,
                statement: _,
                requestId: $,
                resources: N,
                signatureTypes: O
              };
            }),
            walletPay: h
          }
        }), b = Se("session_connect", v.id), { reject: T, resolve: R, done: D } = Sn(f, du), M = ({ id: k }) => {
          k === v.id && (this.client.events.off("proposal_expire", M), this.pendingSessions.delete(v.id), this.events.emit(b, {
            error: {
              message: du,
              code: 0
            }
          }));
        };
        return this.client.events.on("proposal_expire", M), this.events.once(b, ({ error: k, session: F }) => {
          this.client.events.off("proposal_expire", M), k ? T(k) : F && R(F);
        }), await this.setProposal(v.id, v), await this.sendProposeSession({
          proposal: v,
          publishOpts: {
            internal: {
              throwOnFailedPublish: true
            },
            tvf: {
              correlationId: v.id
            }
          }
        }).catch((k) => {
          throw this.deleteProposal(v.id), k;
        }), {
          uri: p,
          approval: D
        };
      }), B(this, "pair", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          return await this.client.core.pairing.pair(s);
        } catch (n) {
          throw this.client.logger.error("pair() failed"), n;
        }
      }), B(this, "approve", async (s) => {
        var n, r, i;
        const o = this.client.core.eventClient.createEvent({
          properties: {
            topic: (n = s == null ? void 0 : s.id) == null ? void 0 : n.toString(),
            trace: [
              es.session_approve_started
            ]
          }
        });
        try {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
        } catch (F) {
          throw o.setError(En.no_internet_connection), F;
        }
        try {
          await this.isValidProposalId(s == null ? void 0 : s.id);
        } catch (F) {
          throw this.client.logger.error(`approve() -> proposal.get(${s == null ? void 0 : s.id}) failed`), o.setError(En.proposal_not_found), F;
        }
        try {
          await this.isValidApprove(s);
        } catch (F) {
          throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(En.session_approve_namespace_validation_failure), F;
        }
        const { id: a, relayProtocol: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: f } = s, g = this.client.proposal.get(a);
        this.client.core.eventClient.deleteEvent({
          eventId: o.eventId
        });
        const { pairingTopic: p, proposer: w, requiredNamespaces: A, optionalNamespaces: I } = g;
        let v = (r = this.client.core.eventClient) == null ? void 0 : r.getEvent({
          topic: p
        });
        v || (v = (i = this.client.core.eventClient) == null ? void 0 : i.createEvent({
          type: es.session_approve_started,
          properties: {
            topic: p,
            trace: [
              es.session_approve_started,
              es.session_namespaces_validation_success
            ]
          }
        }));
        const b = await this.client.core.crypto.generateKeyPair(), T = w.publicKey, R = await this.client.core.crypto.generateSharedKey(b, T), D = Xe(Ae(Ae(Ae({
          relay: {
            protocol: c ?? "irn"
          },
          namespaces: l,
          controller: {
            publicKey: b,
            metadata: this.client.metadata
          },
          expiry: Me(nr)
        }, d && {
          sessionProperties: d
        }), u && {
          scopedProperties: u
        }), h && {
          sessionConfig: h
        }), {
          proposalRequestsResponses: f
        }), M = Pe.relay;
        v.addTrace(es.subscribing_session_topic);
        try {
          await this.client.core.relayer.subscribe(R, {
            transportType: M,
            internal: {
              skipSubscribe: true
            }
          });
        } catch (F) {
          throw v.setError(En.subscribe_session_topic_failure), F;
        }
        v.addTrace(es.subscribe_session_topic_success);
        const k = Xe(Ae({}, D), {
          topic: R,
          requiredNamespaces: A,
          optionalNamespaces: I,
          pairingTopic: p,
          acknowledged: false,
          self: D.controller,
          peer: {
            publicKey: w.publicKey,
            metadata: w.metadata
          },
          controller: b,
          transportType: Pe.relay,
          authentication: f == null ? void 0 : f.authentication,
          walletPayResult: f == null ? void 0 : f.walletPay
        });
        await this.client.session.set(R, k), v.addTrace(es.store_session);
        try {
          await this.sendApproveSession({
            sessionTopic: R,
            proposal: g,
            pairingProposalResponse: {
              relay: {
                protocol: c ?? "irn"
              },
              responderPublicKey: b
            },
            sessionSettleRequest: D,
            publishOpts: {
              internal: {
                throwOnFailedPublish: true
              },
              tvf: Ae({
                correlationId: a
              }, this.getTVFApproveParams(k))
            }
          }), v.addTrace(es.session_approve_publish_success);
        } catch (F) {
          throw this.client.logger.error(F), this.client.session.delete(R, $e("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(R), F;
        }
        return this.client.core.eventClient.deleteEvent({
          eventId: v.eventId
        }), await this.client.core.pairing.updateMetadata({
          topic: p,
          metadata: w.metadata
        }), await this.deleteProposal(a), await this.client.core.pairing.activate({
          topic: p
        }), await this.setExpiry(R, Me(nr)), {
          topic: R,
          acknowledged: () => Promise.resolve(this.client.session.get(R))
        };
      }), B(this, "reject", async (s) => {
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
          rpcOpts: Ze.wc_sessionPropose.reject
        }), await this.deleteProposal(n);
      }), B(this, "update", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidUpdate(s);
        } catch (u) {
          throw this.client.logger.error("update() -> isValidUpdate() failed"), u;
        }
        const { topic: n, namespaces: r } = s, { done: i, resolve: o, reject: a } = Sn(K.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), c = Gs(), l = kn().toString(), d = this.client.session.get(n).namespaces;
        return this.events.once(Se("session_update", c), ({ error: u }) => {
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
      }), B(this, "extend", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidExtend(s);
        } catch (c) {
          throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
        }
        const { topic: n } = s, r = Gs(), { done: i, resolve: o, reject: a } = Sn(K.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
        return this.events.once(Se("session_extend", r), ({ error: c }) => {
          c ? a(c) : o();
        }), await this.setExpiry(n, Me(nr)), this.sendRequest({
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
      }), B(this, "request", async (s) => {
        this.isInitialized();
        try {
          await this.isValidRequest(s);
        } catch (w) {
          throw this.client.logger.error("request() -> isValidRequest() failed"), w;
        }
        const { chainId: n, request: r, topic: i, expiry: o = Ze.wc_sessionRequest.req.ttl } = s, a = this.client.session.get(i);
        (a == null ? void 0 : a.transportType) === Pe.relay && await this.confirmOnlineStateOrThrow();
        const c = Gs(), l = kn().toString(), { done: d, resolve: u, reject: h } = Sn(o, "Request expired. Please try again.");
        this.events.once(Se("session_request", c), ({ error: w, result: A }) => {
          w ? h(w) : u(A);
        });
        const f = "wc_sessionRequest", g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
        if (g) return await this.sendRequest({
          clientRpcId: c,
          relayRpcId: l,
          topic: i,
          method: f,
          params: {
            request: Xe(Ae({}, r), {
              expiryTimestamp: Me(o)
            }),
            chainId: n
          },
          expiry: o,
          throwOnFailedPublish: true,
          appLink: g
        }).catch((w) => h(w)), this.client.events.emit("session_request_sent", {
          topic: i,
          request: r,
          chainId: n,
          id: c
        }), await d();
        const p = {
          request: Xe(Ae({}, r), {
            expiryTimestamp: Me(o)
          }),
          chainId: n
        };
        return await Promise.all([
          new Promise(async (w) => {
            await this.sendRequest({
              clientRpcId: c,
              relayRpcId: l,
              topic: i,
              method: f,
              params: p,
              expiry: o,
              throwOnFailedPublish: true,
              tvf: this.getTVFParams(c, p)
            }).catch((A) => h(A)), this.client.events.emit("session_request_sent", {
              topic: i,
              request: r,
              chainId: n,
              id: c
            }), w();
          }),
          new Promise(async (w) => {
            var A;
            if (!((A = a.sessionConfig) != null && A.disableDeepLink)) {
              const I = await Qy(this.client.core.storage, lu);
              await Jy({
                id: c,
                topic: i,
                wcDeepLink: I
              });
            }
            w();
          }),
          d()
        ]).then((w) => w[2]);
      }), B(this, "respond", async (s) => {
        var n, r;
        this.isInitialized();
        const i = this.client.core.eventClient.createEvent({
          properties: {
            topic: (s == null ? void 0 : s.topic) || ((r = (n = s == null ? void 0 : s.response) == null ? void 0 : n.id) == null ? void 0 : r.toString()),
            trace: [
              es.session_request_response_started
            ]
          }
        });
        try {
          await this.isValidRespond(s);
        } catch (u) {
          throw i.addTrace(u == null ? void 0 : u.message), i.setError(En.session_request_response_validation_failure), u;
        }
        i.addTrace(es.session_request_response_validation_success);
        const { topic: o, response: a } = s, { id: c } = a, l = this.client.session.get(o);
        l.transportType === Pe.relay && await this.confirmOnlineStateOrThrow();
        const d = this.getAppLinkIfEnabled(l.peer.metadata, l.transportType);
        try {
          i.addTrace(es.session_request_response_publish_started), Os(a) ? await this.sendResult({
            id: c,
            topic: o,
            result: a.result,
            throwOnFailedPublish: true,
            appLink: d
          }) : gs(a) && await this.sendError({
            id: c,
            topic: o,
            error: a.error,
            appLink: d
          }), this.cleanupAfterResponse(s);
        } catch (u) {
          throw i.addTrace(u == null ? void 0 : u.message), i.setError(En.session_request_response_publish_failure), u;
        }
      }), B(this, "ping", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidPing(s);
        } catch (r) {
          throw this.client.logger.error("ping() -> isValidPing() failed"), r;
        }
        const { topic: n } = s;
        if (this.client.session.keys.includes(n)) {
          const r = Gs(), i = kn().toString(), { done: o, resolve: a, reject: c } = Sn(K.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
          this.events.once(Se("session_ping", r), ({ error: l }) => {
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
      }), B(this, "emit", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(s);
        const { topic: n, event: r, chainId: i } = s, o = kn().toString(), a = Gs();
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
      }), B(this, "disconnect", async (s) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(s);
        const { topic: n } = s;
        if (this.client.session.keys.includes(n)) await this.sendRequest({
          topic: n,
          method: "wc_sessionDelete",
          params: $e("USER_DISCONNECTED"),
          throwOnFailedPublish: true
        }), await this.deleteSession({
          topic: n,
          emitEvent: false
        });
        else if (this.client.core.pairing.pairings.keys.includes(n)) await this.client.core.pairing.disconnect({
          topic: n
        });
        else {
          const { message: r } = V("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
          throw new Error(r);
        }
      }), B(this, "find", (s) => (this.isInitialized(), this.client.session.getAll().filter((n) => wC(n, s)))), B(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), B(this, "authenticate", async (s, n) => {
        var r;
        this.isInitialized(), this.isValidAuthenticate(s);
        const i = n && this.client.core.linkModeSupportedApps.includes(n) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode), o = i ? Pe.link_mode : Pe.relay;
        o === Pe.relay && await this.confirmOnlineStateOrThrow();
        const { chains: a, statement: c = "", uri: l, domain: d, nonce: u, type: h, exp: f, nbf: g, methods: p = [], expiry: w } = s, A = [
          ...s.resources || []
        ], { topic: I, uri: v } = await this.client.core.pairing.create({
          methods: [
            "wc_sessionAuthenticate"
          ],
          transportType: o
        });
        this.client.logger.info({
          message: "Generated new pairing",
          pairing: {
            topic: I,
            uri: v
          }
        });
        const b = await this.client.core.crypto.generateKeyPair(), T = Vi(b);
        if (await Promise.all([
          this.client.auth.authKeys.set(Gi, {
            responseTopic: T,
            publicKey: b
          }),
          this.client.auth.pairingTopics.set(T, {
            topic: T,
            pairingTopic: I
          })
        ]), await this.client.core.relayer.subscribe(T, {
          transportType: o
        }), this.client.logger.info(`sending request to new pairing topic: ${I}`), p.length > 0) {
          const { namespace: N } = Ws(a[0]);
          let O = wb(N, "request", p);
          zi(A) && (O = bb(O, A.pop())), A.push(O);
        }
        const R = w && w > Ze.wc_sessionAuthenticate.req.ttl ? w : Ze.wc_sessionAuthenticate.req.ttl, D = {
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
            resources: A
          },
          requester: {
            publicKey: b,
            metadata: this.client.metadata
          },
          expiryTimestamp: Me(R)
        }, M = {
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
        }, k = {
          requiredNamespaces: {},
          optionalNamespaces: M,
          relays: [
            {
              protocol: "irn"
            }
          ],
          pairingTopic: I,
          proposer: {
            publicKey: b,
            metadata: this.client.metadata
          },
          expiryTimestamp: Me(Ze.wc_sessionPropose.req.ttl),
          id: Gs()
        }, { done: F, resolve: j, reject: x } = Sn(R, "Request expired"), C = Gs(), S = Se("session_connect", k.id), y = Se("session_request", C), E = async ({ error: N, session: O }) => {
          this.events.off(y, _), N ? x(N) : O && j({
            session: O
          });
        }, _ = async (N) => {
          var O, W, H;
          if (await this.deletePendingAuthRequest(C, {
            message: "fulfilled",
            code: 0
          }), N.error) {
            const ce = $e("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
            return N.error.code === ce.code ? void 0 : (this.events.off(S, E), x(N.error.message));
          }
          await this.deleteProposal(k.id), this.events.off(S, E);
          const { cacaos: ae, responder: ne } = N.result, Q = [], le = [];
          for (const ce of ae) {
            await id({
              cacao: ce,
              projectId: this.client.core.projectId
            }) || (this.client.logger.error(ce, "Signature verification failed"), x($e("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
            const { p: Te } = ce, ct = zi(Te.resources), mt = [
              Va(Te.iss)
            ], lt = lo(Te.iss);
            if (ct) {
              const Lt = od(ct), Ks = ad(ct);
              Q.push(...Lt), mt.push(...Ks);
            }
            for (const Lt of mt) le.push(`${Lt}:${lt}`);
          }
          const ie = await this.client.core.crypto.generateSharedKey(b, ne.publicKey);
          let Ne;
          Q.length > 0 && (Ne = {
            topic: ie,
            acknowledged: true,
            self: {
              publicKey: b,
              metadata: this.client.metadata
            },
            peer: ne,
            controller: ne.publicKey,
            expiry: Me(nr),
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: I,
            namespaces: Rd([
              ...new Set(Q)
            ], [
              ...new Set(le)
            ]),
            transportType: o
          }, await this.client.core.relayer.subscribe(ie, {
            transportType: o
          }), await this.client.session.set(ie, Ne), I && await this.client.core.pairing.updateMetadata({
            topic: I,
            metadata: ne.metadata
          }), Ne = this.client.session.get(ie)), (O = this.client.metadata.redirect) != null && O.linkMode && (W = ne.metadata.redirect) != null && W.linkMode && (H = ne.metadata.redirect) != null && H.universal && n && (this.client.core.addLinkModeSupportedApp(ne.metadata.redirect.universal), this.client.session.update(ie, {
            transportType: Pe.link_mode
          })), j({
            auths: ae,
            session: Ne
          });
        };
        this.events.once(S, E), this.events.once(y, _);
        let $;
        try {
          if (i) {
            const N = ms("wc_sessionAuthenticate", D, C);
            this.client.core.history.set(I, N);
            const O = await this.client.core.crypto.encode("", N, {
              type: yi,
              encoding: an
            });
            $ = Ui(n, I, O);
          } else await Promise.all([
            this.sendRequest({
              topic: I,
              method: "wc_sessionAuthenticate",
              params: D,
              expiry: s.expiry,
              throwOnFailedPublish: true,
              clientRpcId: C
            }),
            this.sendRequest({
              topic: I,
              method: "wc_sessionPropose",
              params: k,
              expiry: Ze.wc_sessionPropose.req.ttl,
              throwOnFailedPublish: true,
              clientRpcId: k.id
            })
          ]);
        } catch (N) {
          throw this.events.off(S, E), this.events.off(y, _), N;
        }
        return await this.setProposal(k.id, k), await this.setAuthRequest(C, {
          request: Xe(Ae({}, D), {
            verifyContext: {}
          }),
          pairingTopic: I,
          transportType: o
        }), {
          uri: $ ?? v,
          response: F
        };
      }), B(this, "approveSessionAuthenticate", async (s) => {
        const { id: n, auths: r } = s, i = this.client.core.eventClient.createEvent({
          properties: {
            topic: n.toString(),
            trace: [
              Cn.authenticated_session_approve_started
            ]
          }
        });
        try {
          this.isInitialized();
        } catch (w) {
          throw i.setError(Rr.no_internet_connection), w;
        }
        const o = this.getPendingAuthRequest(n);
        if (!o) throw i.setError(Rr.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${n}`);
        const a = o.transportType || Pe.relay;
        a === Pe.relay && await this.confirmOnlineStateOrThrow();
        const c = o.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), d = Vi(c), u = {
          type: js,
          receiverPublicKey: c,
          senderPublicKey: l
        }, h = [], f = [];
        for (const w of r) {
          if (!await id({
            cacao: w,
            projectId: this.client.core.projectId
          })) {
            i.setError(Rr.invalid_cacao);
            const T = $e("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
            throw await this.sendError({
              id: n,
              topic: d,
              error: T,
              encodeOpts: u
            }), new Error(T.message);
          }
          i.addTrace(Cn.cacaos_verified);
          const { p: A } = w, I = zi(A.resources), v = [
            Va(A.iss)
          ], b = lo(A.iss);
          if (I) {
            const T = od(I), R = ad(I);
            h.push(...T), v.push(...R);
          }
          for (const T of v) f.push(`${T}:${b}`);
        }
        const g = await this.client.core.crypto.generateSharedKey(l, c);
        i.addTrace(Cn.create_authenticated_session_topic);
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
            expiry: Me(nr),
            authentication: r,
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: {
              protocol: "irn"
            },
            pairingTopic: o.pairingTopic,
            namespaces: Rd([
              ...new Set(h)
            ], [
              ...new Set(f)
            ]),
            transportType: a
          }, i.addTrace(Cn.subscribing_authenticated_session_topic);
          try {
            await this.client.core.relayer.subscribe(g, {
              transportType: a
            });
          } catch (w) {
            throw i.setError(Rr.subscribe_authenticated_session_topic_failure), w;
          }
          i.addTrace(Cn.subscribe_authenticated_session_topic_success), await this.client.session.set(g, p), i.addTrace(Cn.store_authenticated_session), await this.client.core.pairing.updateMetadata({
            topic: o.pairingTopic,
            metadata: o.requester.metadata
          });
        }
        i.addTrace(Cn.publishing_authenticated_session_approve);
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
        } catch (w) {
          throw i.setError(Rr.authenticated_session_approve_publish_failure), w;
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
      }), B(this, "rejectSessionAuthenticate", async (s) => {
        this.isInitialized();
        const { id: n, reason: r } = s, i = this.getPendingAuthRequest(n);
        if (!i) throw new Error(`Could not find pending auth request with id ${n}`);
        i.transportType === Pe.relay && await this.confirmOnlineStateOrThrow();
        const o = i.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = Vi(o), l = {
          type: js,
          receiverPublicKey: o,
          senderPublicKey: a
        };
        await this.sendError({
          id: n,
          topic: c,
          error: r,
          encodeOpts: l,
          rpcOpts: Ze.wc_sessionAuthenticate.reject,
          appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
        }), await this.client.auth.requests.delete(n, {
          message: "rejected",
          code: 0
        }), await this.deleteProposal(n);
      }), B(this, "formatAuthMessage", (s) => {
        this.isInitialized();
        const { request: n, iss: r } = s;
        return ap(n, r);
      }), B(this, "processRelayMessageCache", () => {
        setTimeout(async () => {
          if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
            const s = this.relayMessageCache.shift();
            s && await this.onRelayMessage(s);
          } catch (s) {
            this.client.logger.error(s);
          }
        }, 50);
      }), B(this, "cleanupDuplicatePairings", async (s) => {
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
      }), B(this, "deleteSession", async (s) => {
        var n;
        const { topic: r, expirerHasDeleted: i = false, emitEvent: o = true, id: a = 0 } = s, { self: c } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, $e("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(lu).catch((l) => this.client.logger.warn(l)), r === ((n = this.sessionRequestQueue.queue[0]) == null ? void 0 : n.topic) && (this.sessionRequestQueue.state = ps.idle), await Promise.all(this.getPendingSessionRequests().filter((l) => l.topic === r).map((l) => this.deletePendingSessionRequest(l.id, $e("USER_DISCONNECTED")))), o && this.client.events.emit("session_delete", {
          id: a,
          topic: r
        });
      }), B(this, "deleteProposal", async (s, n) => {
        var _a2;
        if (n) try {
          const r = this.client.proposal.get(s);
          (_a2 = this.client.core.eventClient.getEvent({
            topic: r.pairingTopic
          })) == null ? void 0 : _a2.setError(En.proposal_expired);
        } catch {
        }
        await Promise.all([
          this.client.proposal.delete(s, $e("USER_DISCONNECTED")),
          n ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "proposal");
      }), B(this, "deletePendingSessionRequest", async (s, n, r = false) => {
        await Promise.all([
          this.client.pendingRequest.delete(s, n),
          r ? Promise.resolve() : this.client.core.expirer.del(s)
        ]), this.addToRecentlyDeleted(s, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== s), r && (this.sessionRequestQueue.state = ps.idle, this.client.events.emit("session_request_expire", {
          id: s
        }));
      }), B(this, "deletePendingAuthRequest", async (s, n, r = false) => {
        await Promise.all([
          this.client.auth.requests.delete(s, n),
          r ? Promise.resolve() : this.client.core.expirer.del(s)
        ]);
      }), B(this, "setExpiry", async (s, n) => {
        this.client.session.keys.includes(s) && (this.client.core.expirer.set(s, n), await this.client.session.update(s, {
          expiry: n
        }));
      }), B(this, "setProposal", async (s, n) => {
        this.client.core.expirer.set(s, Me(Ze.wc_sessionPropose.req.ttl)), await this.client.proposal.set(s, n);
      }), B(this, "setAuthRequest", async (s, n) => {
        const { request: r, pairingTopic: i, transportType: o = Pe.relay } = n;
        this.client.core.expirer.set(s, r.expiryTimestamp), await this.client.auth.requests.set(s, {
          authPayload: r.authPayload,
          requester: r.requester,
          expiryTimestamp: r.expiryTimestamp,
          id: s,
          pairingTopic: i,
          verifyContext: r.verifyContext,
          transportType: o
        });
      }), B(this, "setPendingSessionRequest", async (s) => {
        const { id: n, topic: r, params: i, verifyContext: o } = s, a = i.request.expiryTimestamp || Me(Ze.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(n, a), await this.client.pendingRequest.set(n, {
          id: n,
          topic: r,
          params: i,
          verifyContext: o
        });
      }), B(this, "sendRequest", async (s) => {
        const { topic: n, method: r, params: i, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: d, tvf: u, publishOpts: h = {} } = s, f = ms(r, i, c);
        let g;
        const p = !!d;
        try {
          const I = p ? an : At;
          g = await this.client.core.crypto.encode(n, f, {
            encoding: I
          });
        } catch (I) {
          throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${n} failed`), I;
        }
        let w;
        if (HI.includes(r)) {
          const I = Kt(JSON.stringify(f)), v = Kt(g);
          w = await this.client.core.verify.register({
            id: v,
            decryptedId: I
          });
        }
        const A = Ae(Ae({}, Ze[r].req), h);
        if (A.attestation = w, o && (A.ttl = o), a && (A.id = a), this.client.core.history.set(n, f), p) {
          const I = Ui(d, n, g);
          await globalThis.Linking.openURL(I, this.client.name);
        } else A.tvf = Xe(Ae({}, u), {
          correlationId: f.id
        }), l ? (A.internal = Xe(Ae({}, A.internal), {
          throwOnFailedPublish: true
        }), await this.client.core.relayer.publish(n, g, A)) : this.client.core.relayer.publish(n, g, A).catch((I) => this.client.logger.error(I));
        return f.id;
      }), B(this, "sendProposeSession", async (s) => {
        const { proposal: n, publishOpts: r } = s, i = ms("wc_sessionPropose", n, n.id);
        this.client.core.history.set(n.pairingTopic, i);
        const o = await this.client.core.crypto.encode(n.pairingTopic, i, {
          encoding: At
        }), a = Kt(JSON.stringify(i)), c = Kt(o), l = await this.client.core.verify.register({
          id: c,
          decryptedId: a
        });
        await this.client.core.relayer.publishCustom({
          payload: {
            pairingTopic: n.pairingTopic,
            sessionProposal: o
          },
          opts: Xe(Ae({}, r), {
            publishMethod: "wc_proposeSession",
            attestation: l
          })
        });
      }), B(this, "sendApproveSession", async (s) => {
        const { sessionTopic: n, pairingProposalResponse: r, proposal: i, sessionSettleRequest: o, publishOpts: a } = s, c = Jr(i.id, r), l = await this.client.core.crypto.encode(i.pairingTopic, c, {
          encoding: At
        }), d = ms("wc_sessionSettle", o, a == null ? void 0 : a.id), u = await this.client.core.crypto.encode(n, d, {
          encoding: At
        });
        this.client.core.history.set(n, d), await this.client.core.relayer.publishCustom({
          payload: {
            sessionTopic: n,
            pairingTopic: i.pairingTopic,
            sessionProposalResponse: l,
            sessionSettlementRequest: u
          },
          opts: Xe(Ae({}, a), {
            publishMethod: "wc_approveSession"
          })
        });
      }), B(this, "sendResult", async (s) => {
        const { id: n, topic: r, result: i, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = s, l = Jr(n, i);
        let d;
        const u = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const g = u ? an : At;
          d = await this.client.core.crypto.encode(r, l, Xe(Ae({}, a || {}), {
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
          const g = Ui(c, r, d);
          await globalThis.Linking.openURL(g, this.client.name);
        } else {
          const g = h.request.method, p = Ze[g].res;
          p.tvf = Xe(Ae({}, f), {
            correlationId: n
          }), o ? (p.internal = Xe(Ae({}, p.internal), {
            throwOnFailedPublish: true
          }), await this.client.core.relayer.publish(r, d, p)) : this.client.core.relayer.publish(r, d, p).catch((w) => this.client.logger.error(w));
        }
        await this.client.core.history.resolve(l);
      }), B(this, "sendError", async (s) => {
        const { id: n, topic: r, error: i, encodeOpts: o, rpcOpts: a, appLink: c } = s, l = Gu(n, i);
        let d;
        const u = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const f = u ? an : At;
          d = await this.client.core.crypto.encode(r, l, Xe(Ae({}, o || {}), {
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
          const f = Ui(c, r, d);
          await globalThis.Linking.openURL(f, this.client.name);
        } else {
          const f = h.request.method, g = a || Ze[f].res;
          this.client.core.relayer.publish(r, d, g);
        }
        await this.client.core.history.resolve(l);
      }), B(this, "cleanup", async () => {
        const s = [], n = [];
        this.client.session.getAll().forEach((r) => {
          let i = false;
          ws(r.expiry) && (i = true), this.client.core.crypto.keychain.has(r.topic) || (i = true), i && s.push(r.topic);
        }), this.client.proposal.getAll().forEach((r) => {
          ws(r.expiryTimestamp) && n.push(r.id);
        }), await Promise.all([
          ...s.map((r) => this.deleteSession({
            topic: r
          })),
          ...n.map((r) => this.deleteProposal(r))
        ]);
      }), B(this, "onProviderMessageEvent", async (s) => {
        !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(s) : await this.onRelayMessage(s);
      }), B(this, "onRelayEventRequest", async (s) => {
        this.requestQueue.queue.push(s), await this.processRequestsQueue();
      }), B(this, "processRequestsQueue", async () => {
        if (this.requestQueue.state === ps.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
          this.requestQueue.state = ps.active;
          const s = this.requestQueue.queue.shift();
          if (s) try {
            await this.processRequest(s);
          } catch (n) {
            this.client.logger.warn(n);
          }
        }
        this.requestQueue.state = ps.idle;
      }), B(this, "processRequest", async (s) => {
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
      }), B(this, "onRelayEventResponse", async (s) => {
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
      }), B(this, "onRelayEventUnknownPayload", (s) => {
        const { topic: n } = s, { message: r } = V("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
        throw new Error(r);
      }), B(this, "shouldIgnorePairingRequest", (s) => {
        const { topic: n, requestMethod: r } = s, i = this.expectedPairingMethodMap.get(n);
        return !i || i.includes(r) ? false : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
      }), B(this, "onSessionProposeRequest", async (s) => {
        const { topic: n, payload: r, attestation: i, encryptedId: o } = s, { params: a, id: c } = r;
        try {
          const l = this.client.core.eventClient.getEvent({
            topic: n
          });
          this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l == null ? void 0 : l.setError(xs.proposal_listener_not_found)), this.isValidConnect(Ae({}, r.params));
          const d = a.expiryTimestamp || Me(Ze.wc_sessionPropose.req.ttl), u = Ae({
            id: c,
            pairingTopic: n,
            expiryTimestamp: d,
            attestation: i,
            encryptedId: o
          }, a);
          await this.setProposal(c, u);
          const h = await this.getVerifyContext({
            attestationId: i,
            hash: Kt(JSON.stringify(r)),
            encryptedId: o,
            metadata: u.proposer.metadata
          });
          l == null ? void 0 : l.addTrace(fs.emit_session_proposal), this.client.events.emit("session_proposal", {
            id: c,
            params: u,
            verifyContext: h
          });
        } catch (l) {
          await this.sendError({
            id: c,
            topic: n,
            error: l,
            rpcOpts: Ze.wc_sessionPropose.autoReject
          }), this.client.logger.error(l);
        }
      }), B(this, "onSessionProposeResponse", async (s, n, r) => {
        const { id: i } = n;
        if (Os(n)) {
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
        } else if (gs(n)) {
          await this.deleteProposal(i);
          const o = Se("session_connect", i);
          if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
          this.events.emit(o, {
            error: n.error
          });
        }
      }), B(this, "onSessionSettleRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          this.isValidSessionSettleRequest(i);
          const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: f } = n.params, g = [
            ...this.pendingSessions.values()
          ].find((A) => A.sessionTopic === s);
          if (!g) return this.client.logger.error(`Pending session not found for topic ${s}`);
          const p = this.client.proposal.get(g.proposalId), w = Xe(Ae(Ae(Ae({
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
            transportType: Pe.relay,
            authentication: f == null ? void 0 : f.authentication,
            walletPayResult: f == null ? void 0 : f.walletPay
          });
          await this.client.session.set(w.topic, w), await this.setExpiry(w.topic, w.expiry), await this.client.core.pairing.updateMetadata({
            topic: g.pairingTopic,
            metadata: w.peer.metadata
          }), this.pendingSessions.delete(g.proposalId), this.deleteProposal(g.proposalId, false), this.cleanupDuplicatePairings(w), await this.sendResult({
            id: n.id,
            topic: s,
            throwOnFailedPublish: true,
            result: true
          }), this.client.events.emit("session_connect", {
            session: w
          }), this.events.emit(Se("session_connect", g.proposalId), {
            session: w
          });
        } catch (o) {
          await this.sendError({
            id: r,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), B(this, "onSessionSettleResponse", async (s, n) => {
        const { id: r } = n;
        Os(n) ? (await this.client.session.update(s, {
          acknowledged: true
        }), this.events.emit(Se("session_approve", r), {})) : gs(n) && (await this.client.session.delete(s, $e("USER_DISCONNECTED")), this.events.emit(Se("session_approve", r), {
          error: n.error
        }));
      }), B(this, "onSessionUpdateRequest", async (s, n) => {
        const { params: r, id: i } = n;
        try {
          const o = `${s}_session_update`, a = xr.get(o);
          if (a && this.isRequestOutOfSync(a, i)) {
            this.client.logger.warn(`Discarding out of sync request - ${i}`), this.sendError({
              id: i,
              topic: s,
              error: $e("INVALID_UPDATE_REQUEST")
            });
            return;
          }
          this.isValidUpdate(Ae({
            topic: s
          }, r));
          try {
            xr.set(o, i), await this.client.session.update(s, {
              namespaces: r.namespaces
            }), await this.sendResult({
              id: i,
              topic: s,
              result: true
            });
          } catch (c) {
            throw xr.delete(o), c;
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
      }), B(this, "isRequestOutOfSync", (s, n) => n.toString().slice(0, -3) < s.toString().slice(0, -3)), B(this, "onSessionUpdateResponse", (s, n) => {
        const { id: r } = n, i = Se("session_update", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Os(n) ? this.events.emit(Se("session_update", r), {}) : gs(n) && this.events.emit(Se("session_update", r), {
          error: n.error
        });
      }), B(this, "onSessionExtendRequest", async (s, n) => {
        const { id: r } = n;
        try {
          this.isValidExtend({
            topic: s
          }), await this.setExpiry(s, Me(nr)), await this.sendResult({
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
      }), B(this, "onSessionExtendResponse", (s, n) => {
        const { id: r } = n, i = Se("session_extend", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Os(n) ? this.events.emit(Se("session_extend", r), {}) : gs(n) && this.events.emit(Se("session_extend", r), {
          error: n.error
        });
      }), B(this, "onSessionPingRequest", async (s, n) => {
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
      }), B(this, "onSessionPingResponse", (s, n) => {
        const { id: r } = n, i = Se("session_ping", r);
        setTimeout(() => {
          if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners 2176`);
          Os(n) ? this.events.emit(Se("session_ping", r), {}) : gs(n) && this.events.emit(Se("session_ping", r), {
            error: n.error
          });
        }, 500);
      }), B(this, "onSessionDeleteRequest", async (s, n) => {
        const { id: r } = n;
        try {
          await this.isValidDisconnect({
            topic: s,
            reason: n.params
          }), this.cleanupPendingSentRequestsForTopic({
            topic: s,
            error: $e("USER_DISCONNECTED")
          }), await this.deleteSession({
            topic: s,
            id: r
          });
        } catch (i) {
          this.client.logger.error(i);
        }
      }), B(this, "onSessionRequest", async (s) => {
        var n, r, i;
        const { topic: o, payload: a, attestation: c, encryptedId: l, transportType: d } = s, { id: u, params: h } = a;
        try {
          await this.isValidRequest(Ae({
            topic: o
          }, h));
          const f = this.client.session.get(o), g = await this.getVerifyContext({
            attestationId: c,
            hash: Kt(JSON.stringify(ms("wc_sessionRequest", h, u))),
            encryptedId: l,
            metadata: f.peer.metadata,
            transportType: d
          }), p = {
            id: u,
            topic: o,
            params: h,
            verifyContext: g
          };
          await this.setPendingSessionRequest(p), d === Pe.link_mode && (n = f.peer.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp((r = f.peer.metadata.redirect) == null ? void 0 : r.universal), (i = this.client.signConfig) != null && i.disableRequestQueue ? this.emitSessionRequest(p) : (this.addSessionRequestToSessionRequestQueue(p), this.processSessionRequestQueue());
        } catch (f) {
          await this.sendError({
            id: u,
            topic: o,
            error: f
          }), this.client.logger.error(f);
        }
      }), B(this, "onSessionRequestResponse", (s, n) => {
        const { id: r } = n, i = Se("session_request", r);
        if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
        Os(n) ? this.events.emit(Se("session_request", r), {
          result: n.result
        }) : gs(n) && this.events.emit(Se("session_request", r), {
          error: n.error
        });
      }), B(this, "onSessionEventRequest", async (s, n) => {
        const { id: r, params: i } = n;
        try {
          const o = `${s}_session_event_${i.event.name}`, a = xr.get(o);
          if (a && this.isRequestOutOfSync(a, r)) {
            this.client.logger.info(`Discarding out of sync request - ${r}`);
            return;
          }
          this.isValidEmit(Ae({
            topic: s
          }, i)), this.client.events.emit("session_event", {
            id: r,
            topic: s,
            params: i
          }), xr.set(o, r);
        } catch (o) {
          await this.sendError({
            id: r,
            topic: s,
            error: o
          }), this.client.logger.error(o);
        }
      }), B(this, "onSessionAuthenticateResponse", (s, n) => {
        const { id: r } = n;
        this.client.logger.trace({
          type: "method",
          method: "onSessionAuthenticateResponse",
          topic: s,
          payload: n
        }), Os(n) ? this.events.emit(Se("session_request", r), {
          result: n.result
        }) : gs(n) && this.events.emit(Se("session_request", r), {
          error: n.error
        });
      }), B(this, "onSessionAuthenticateRequest", async (s) => {
        var n;
        const { topic: r, payload: i, attestation: o, encryptedId: a, transportType: c } = s;
        try {
          const { requester: l, authPayload: d, expiryTimestamp: u } = i.params, h = await this.getVerifyContext({
            attestationId: o,
            hash: Kt(JSON.stringify(i)),
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
          }), c === Pe.link_mode && (n = l.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
            topic: r,
            params: i.params,
            id: i.id,
            verifyContext: h
          });
        } catch (l) {
          this.client.logger.error(l);
          const d = i.params.requester.publicKey, u = await this.client.core.crypto.generateKeyPair(), h = this.getAppLinkIfEnabled(i.params.requester.metadata, c), f = {
            type: js,
            receiverPublicKey: d,
            senderPublicKey: u
          };
          await this.sendError({
            id: i.id,
            topic: r,
            error: l,
            encodeOpts: f,
            rpcOpts: Ze.wc_sessionAuthenticate.autoReject,
            appLink: h
          });
        }
      }), B(this, "addSessionRequestToSessionRequestQueue", (s) => {
        this.sessionRequestQueue.queue.push(s);
      }), B(this, "cleanupAfterResponse", (s) => {
        this.deletePendingSessionRequest(s.response.id, {
          message: "fulfilled",
          code: 0
        }), setTimeout(() => {
          this.sessionRequestQueue.state = ps.idle, this.processSessionRequestQueue();
        }, K.toMiliseconds(this.requestQueueDelay));
      }), B(this, "cleanupPendingSentRequestsForTopic", ({ topic: s, error: n }) => {
        const r = this.client.core.history.pending;
        r.length > 0 && r.filter((i) => i.topic === s && i.request.method === "wc_sessionRequest").forEach((i) => {
          this.events.emit(Se("session_request", i.request.id), {
            error: n
          });
        });
      }), B(this, "processSessionRequestQueue", () => {
        if (this.sessionRequestQueue.state === ps.active) {
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
      }), B(this, "emitSessionRequest", (s) => {
        if (this.emittedSessionRequests.has(s.id)) {
          this.client.logger.warn({
            id: s.id
          }, `Skipping emitting \`session_request\` event for duplicate request. id: ${s.id}`);
          return;
        }
        this.sessionRequestQueue.state = ps.active, this.emittedSessionRequests.add(s.id), this.client.events.emit("session_request", s);
      }), B(this, "onPairingCreated", (s) => {
        if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods), s.active) return;
        const n = this.client.proposal.getAll().find((r) => r.pairingTopic === s.topic);
        n && this.onSessionProposeRequest({
          topic: s.topic,
          payload: ms("wc_sessionPropose", Xe(Ae({}, n), {
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
      }), B(this, "isValidConnect", async (s) => {
        if (!Et(s)) {
          const { message: l } = V("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
          throw new Error(l);
        }
        const { pairingTopic: n, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: o, scopedProperties: a, relays: c } = s;
        if (Ke(n) || await this.isValidPairingTopic(n), !OC(c)) {
          const { message: l } = V("MISSING_OR_INVALID", `connect() relays: ${c}`);
          throw new Error(l);
        }
        if (r && !Ke(r) && As(r) !== 0) {
          const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
          [
            "fatal",
            "error",
            "silent"
          ].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(r, "requiredNamespaces");
        }
        if (i && !Ke(i) && As(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), o && !Ke(o) && this.validateSessionProps(o, "sessionProperties"), a && !Ke(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const l = Object.keys(r || {}).concat(Object.keys(i || {}));
          if (!Object.keys(a).every((d) => l.includes(d.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`);
        }
      }), B(this, "validateNamespaces", (s, n) => {
        const r = TC(s, "connect()", n);
        if (r) throw new Error(r.message);
      }), B(this, "isValidApprove", async (s) => {
        if (!Et(s)) throw new Error(V("MISSING_OR_INVALID", `approve() params: ${s}`).message);
        const { id: n, namespaces: r, relayProtocol: i, sessionProperties: o, scopedProperties: a } = s;
        this.checkRecentlyDeleted(n), await this.isValidProposalId(n);
        const c = this.client.proposal.get(n), l = ha(r, "approve()");
        if (l) throw new Error(l.message);
        const d = Dd(c.requiredNamespaces, r, "approve()");
        if (d) throw new Error(d.message);
        if (!qe(i, true)) {
          const { message: u } = V("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
          throw new Error(u);
        }
        if (o && !Ke(o) && this.validateSessionProps(o, "sessionProperties"), a && !Ke(a)) {
          this.validateSessionProps(a, "scopedProperties");
          const u = new Set(Object.keys(r));
          if (!Object.keys(a).every((h) => u.has(h.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`);
        }
      }), B(this, "isValidReject", async (s) => {
        if (!Et(s)) {
          const { message: i } = V("MISSING_OR_INVALID", `reject() params: ${s}`);
          throw new Error(i);
        }
        const { id: n, reason: r } = s;
        if (this.checkRecentlyDeleted(n), await this.isValidProposalId(n), !xC(r)) {
          const { message: i } = V("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
          throw new Error(i);
        }
      }), B(this, "isValidSessionSettleRequest", (s) => {
        if (!Et(s)) {
          const { message: l } = V("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
          throw new Error(l);
        }
        const { relay: n, controller: r, namespaces: i, expiry: o } = s;
        if (!zp(n)) {
          const { message: l } = V("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
          throw new Error(l);
        }
        const a = vC(r, "onSessionSettleRequest()");
        if (a) throw new Error(a.message);
        const c = ha(i, "onSessionSettleRequest()");
        if (c) throw new Error(c.message);
        if (ws(o)) {
          const { message: l } = V("EXPIRED", "onSessionSettleRequest()");
          throw new Error(l);
        }
      }), B(this, "isValidUpdate", async (s) => {
        if (!Et(s)) {
          const { message: c } = V("MISSING_OR_INVALID", `update() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, namespaces: r } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const i = this.client.session.get(n), o = ha(r, "update()");
        if (o) throw new Error(o.message);
        const a = Dd(i.requiredNamespaces, r, "update()");
        if (a) throw new Error(a.message);
      }), B(this, "isValidExtend", async (s) => {
        if (!Et(s)) {
          const { message: r } = V("MISSING_OR_INVALID", `extend() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
      }), B(this, "isValidRequest", async (s) => {
        if (!Et(s)) {
          const { message: c } = V("MISSING_OR_INVALID", `request() params: ${s}`);
          throw new Error(c);
        }
        const { topic: n, request: r, chainId: i, expiry: o } = s;
        this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
        const { namespaces: a } = this.client.session.get(n);
        if (!$d(a, i)) {
          const { message: c } = V("MISSING_OR_INVALID", `request() chainId: ${i}`);
          throw new Error(c);
        }
        if (!PC(r)) {
          const { message: c } = V("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
          throw new Error(c);
        }
        if (!$C(a, i, r.method)) {
          const { message: c } = V("MISSING_OR_INVALID", `request() method: ${r.method}`);
          throw new Error(c);
        }
        this.validateRequestExpiry(o);
      }), B(this, "isValidRespond", async (s) => {
        var n;
        if (!Et(s)) {
          const { message: a } = V("MISSING_OR_INVALID", `respond() params: ${s}`);
          throw new Error(a);
        }
        const { topic: r, response: i } = s;
        try {
          await this.isValidSessionTopic(r);
        } catch (a) {
          throw (n = s == null ? void 0 : s.response) != null && n.id && this.cleanupAfterResponse(s), a;
        }
        if (!RC(i)) {
          const { message: a } = V("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
          throw new Error(a);
        }
        const o = this.client.pendingRequest.get(i.id);
        if (o.topic !== r) {
          const { message: a } = V("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i.id}, expected topic: ${o.topic}, received topic: ${r}`);
          throw new Error(a);
        }
      }), B(this, "isValidPing", async (s) => {
        if (!Et(s)) {
          const { message: r } = V("MISSING_OR_INVALID", `ping() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), B(this, "isValidEmit", async (s) => {
        if (!Et(s)) {
          const { message: a } = V("MISSING_OR_INVALID", `emit() params: ${s}`);
          throw new Error(a);
        }
        const { topic: n, event: r, chainId: i } = s;
        await this.isValidSessionTopic(n);
        const { namespaces: o } = this.client.session.get(n);
        if (!$d(o, i)) {
          const { message: a } = V("MISSING_OR_INVALID", `emit() chainId: ${i}`);
          throw new Error(a);
        }
        if (!UC(r)) {
          const { message: a } = V("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
        if (!DC(o, i, r.name)) {
          const { message: a } = V("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
          throw new Error(a);
        }
      }), B(this, "isValidDisconnect", async (s) => {
        if (!Et(s)) {
          const { message: r } = V("MISSING_OR_INVALID", `disconnect() params: ${s}`);
          throw new Error(r);
        }
        const { topic: n } = s;
        await this.isValidSessionOrPairingTopic(n);
      }), B(this, "isValidAuthenticate", (s) => {
        const { chains: n, uri: r, domain: i, nonce: o } = s;
        if (!Array.isArray(n) || n.length === 0) throw new Error("chains is required and must be a non-empty array");
        if (!qe(r, false)) throw new Error("uri is required parameter");
        if (!qe(i, false)) throw new Error("domain is required parameter");
        if (!qe(o, false)) throw new Error("nonce is required parameter");
        if ([
          ...new Set(n.map((c) => Ws(c).namespace))
        ].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
        const { namespace: a } = Ws(n[0]);
        if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
      }), B(this, "getVerifyContext", async (s) => {
        const { attestationId: n, hash: r, encryptedId: i, metadata: o, transportType: a } = s, c = {
          verified: {
            verifyUrl: o.verifyUrl || Vr,
            validation: "UNKNOWN",
            origin: o.url || ""
          }
        };
        try {
          if (a === Pe.link_mode) {
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
      }), B(this, "validateSessionProps", (s, n) => {
        Object.values(s).forEach((r, i) => {
          if (r == null) {
            const { message: o } = V("MISSING_OR_INVALID", `${n} must contain an existing value for each key. Received: ${r} for key ${Object.keys(s)[i]}`);
            throw new Error(o);
          }
        });
      }), B(this, "getPendingAuthRequest", (s) => {
        const n = this.client.auth.requests.get(s);
        return typeof n == "object" ? n : void 0;
      }), B(this, "addToRecentlyDeleted", (s, n) => {
        if (this.recentlyDeletedMap.set(s, n), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
          let r = 0;
          const i = this.recentlyDeletedLimit / 2;
          for (const o of this.recentlyDeletedMap.keys()) {
            if (r++ >= i) break;
            this.recentlyDeletedMap.delete(o);
          }
        }
      }), B(this, "checkRecentlyDeleted", (s) => {
        const n = this.recentlyDeletedMap.get(s);
        if (n) {
          const { message: r } = V("MISSING_OR_INVALID", `Record was recently deleted - ${n}: ${s}`);
          throw new Error(r);
        }
      }), B(this, "isLinkModeEnabled", (s, n) => {
        var r, i, o, a, c, l, d, u, h;
        return !s || n !== Pe.link_mode ? false : ((i = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : i.linkMode) === true && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((d = s == null ? void 0 : s.redirect) == null ? void 0 : d.universal) !== void 0 && ((u = s == null ? void 0 : s.redirect) == null ? void 0 : u.universal) !== "" && ((h = s == null ? void 0 : s.redirect) == null ? void 0 : h.linkMode) === true && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
      }), B(this, "getAppLinkIfEnabled", (s, n) => {
        var r;
        return this.isLinkModeEnabled(s, n) ? (r = s == null ? void 0 : s.redirect) == null ? void 0 : r.universal : void 0;
      }), B(this, "handleLinkModeMessage", ({ url: s }) => {
        if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
        const n = Kl(s, "topic") || "", r = decodeURIComponent(Kl(s, "wc_ev") || ""), i = this.client.session.keys.includes(n);
        i && this.client.session.update(n, {
          transportType: Pe.link_mode
        }), this.client.core.dispatchEnvelope({
          topic: n,
          message: r,
          sessionExists: i
        });
      }), B(this, "registerLinkModeListeners", async () => {
        var s;
        if (Fc() || wn() && (s = this.client.metadata.redirect) != null && s.linkMode) {
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
      }), B(this, "getTVFApproveParams", (s) => {
        try {
          const n = jp(s.namespaces), r = lC(s.namespaces), i = dC(s.namespaces), o = s.sessionProperties, a = s.scopedProperties;
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
      }), B(this, "getTVFParams", (s, n, r) => {
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
      }), B(this, "isValidContractData", (s) => {
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
      }), B(this, "extractTxHashesFromResult", (s, n) => {
        var r;
        try {
          if (!n) return [];
          const i = s.method, o = WI[i];
          if (i === "sui_signTransaction") return [
            X0(n.transactionBytes)
          ];
          if (i === "near_signTransaction") return [
            td(n)
          ];
          if (i === "near_signTransactions") return n.map((c) => td(c));
          if (i === "xrpl_signTransactionFor" || i === "xrpl_signTransaction") return [
            (r = n.tx_json) == null ? void 0 : r.hash
          ];
          if (i === "polkadot_signTransaction") return [
            ev({
              transaction: s.params.transactionPayload,
              signature: n.signature
            })
          ];
          if (i === "algo_signTxn") return Hs(n) ? n.map((c) => sd(c)) : [
            sd(n)
          ];
          if (i === "cosmos_signDirect") return [
            eb(n)
          ];
          if (i === "wallet_sendCalls") return tb(n);
          if (typeof n == "string") return [
            n
          ];
          const a = n[o.key];
          if (Hs(a)) return i === "solana_signAllTransactions" ? a.map((c) => Z0(c)) : a;
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
        const { message: e } = V("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    async confirmOnlineStateOrThrow() {
      await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(Fe.message, (e) => {
        this.onProviderMessageEvent(e);
      });
    }
    async onRelayMessage(e) {
      const { topic: s, message: n, attestation: r, transportType: i } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(Gi) ? this.client.auth.authKeys.get(Gi) : {
        publicKey: void 0
      };
      try {
        const a = await this.client.core.crypto.decode(s, n, {
          receiverPublicKey: o,
          encoding: i === Pe.link_mode ? an : At
        });
        Sc(a) ? (this.client.core.history.set(s, a), await this.onRelayEventRequest({
          topic: s,
          payload: a,
          attestation: r,
          transportType: i,
          encryptedId: Kt(n)
        })) : _c(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({
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
      this.client.core.expirer.on(zt.expired, async (e) => {
        const { topic: s, id: n } = Hh(e.target);
        if (n && this.client.pendingRequest.keys.includes(n)) return await this.deletePendingSessionRequest(n, V("EXPIRED"), true);
        if (n && this.client.auth.requests.keys.includes(n)) return await this.deletePendingAuthRequest(n, V("EXPIRED"), true);
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
      this.client.core.pairing.events.on(_n.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(_n.delete, (e) => {
        this.addToRecentlyDeleted(e.topic, "pairing");
      });
    }
    isValidPairingTopic(e) {
      if (!qe(e, false)) {
        const { message: s } = V("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        const { message: s } = V("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (ws(this.client.core.pairing.pairings.get(e).expiry)) {
        const { message: s } = V("EXPIRED", `pairing topic: ${e}`);
        throw new Error(s);
      }
    }
    async isValidSessionTopic(e) {
      if (!qe(e, false)) {
        const { message: s } = V("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
        throw new Error(s);
      }
      if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
        const { message: s } = V("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (ws(this.client.session.get(e).expiry)) {
        await this.deleteSession({
          topic: e
        });
        const { message: s } = V("EXPIRED", `session topic: ${e}`);
        throw new Error(s);
      }
      if (!this.client.core.crypto.keychain.has(e)) {
        const { message: s } = V("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
        throw await this.deleteSession({
          topic: e
        }), new Error(s);
      }
    }
    async isValidSessionOrPairingTopic(e) {
      if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
      else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
      else if (qe(e, false)) {
        const { message: s } = V("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
        throw new Error(s);
      } else {
        const { message: s } = V("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
        throw new Error(s);
      }
    }
    async isValidProposalId(e) {
      if (!kC(e)) {
        const { message: s } = V("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
        throw new Error(s);
      }
      if (!this.client.proposal.keys.includes(e)) {
        const { message: s } = V("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
        throw new Error(s);
      }
      if (ws(this.client.proposal.get(e).expiryTimestamp)) {
        await this.deleteProposal(e);
        const { message: s } = V("EXPIRED", `proposal id: ${e}`);
        throw new Error(s);
      }
    }
    validateRequestExpiry(e) {
      if (e && !MC(e, ya)) {
        const { message: s } = V("MISSING_OR_INVALID", `request() expiry: ${e}. Expiry must be a number (in seconds) between ${ya.min} and ${ya.max}`);
        throw new Error(s);
      }
    }
  }
  class sN extends Yn {
    constructor(e, s) {
      super(e, s, MI, Xc), this.core = e, this.logger = s;
    }
  }
  let nN = class extends Yn {
    constructor(e, s) {
      super(e, s, FI, Xc), this.core = e, this.logger = s;
    }
  };
  class rN extends Yn {
    constructor(e, s) {
      super(e, s, jI, Xc, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  class iN extends Yn {
    constructor(e, s) {
      super(e, s, KI, Uo, () => Gi), this.core = e, this.logger = s;
    }
  }
  class oN extends Yn {
    constructor(e, s) {
      super(e, s, GI, Uo), this.core = e, this.logger = s;
    }
  }
  class aN extends Yn {
    constructor(e, s) {
      super(e, s, YI, Uo, (n) => n.id), this.core = e, this.logger = s;
    }
  }
  var cN = Object.defineProperty, lN = (t, e, s) => e in t ? cN(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, ba = (t, e, s) => lN(t, typeof e != "symbol" ? e + "" : e, s);
  class dN {
    constructor(e, s) {
      this.core = e, this.logger = s, ba(this, "authKeys"), ba(this, "pairingTopics"), ba(this, "requests"), this.authKeys = new iN(this.core, this.logger), this.pairingTopics = new oN(this.core, this.logger), this.requests = new aN(this.core, this.logger);
    }
    async init() {
      await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
  }
  var uN = Object.defineProperty, hN = (t, e, s) => e in t ? uN(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, me = (t, e, s) => hN(t, typeof e != "symbol" ? e + "" : e, s);
  class Qc extends _m {
    constructor(e) {
      super(e), me(this, "protocol", df), me(this, "version", uf), me(this, "name", wa.name), me(this, "metadata"), me(this, "core"), me(this, "logger"), me(this, "events", new Hn.EventEmitter()), me(this, "engine"), me(this, "session"), me(this, "proposal"), me(this, "pendingRequest"), me(this, "auth"), me(this, "signConfig"), me(this, "on", (n, r) => this.events.on(n, r)), me(this, "once", (n, r) => this.events.once(n, r)), me(this, "off", (n, r) => this.events.off(n, r)), me(this, "removeListener", (n, r) => this.events.removeListener(n, r)), me(this, "removeAllListeners", (n) => this.events.removeAllListeners(n)), me(this, "connect", async (n) => {
        try {
          return await this.engine.connect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "pair", async (n) => {
        try {
          return await this.engine.pair(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "approve", async (n) => {
        try {
          return await this.engine.approve(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "reject", async (n) => {
        try {
          return await this.engine.reject(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "update", async (n) => {
        try {
          return await this.engine.update(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "extend", async (n) => {
        try {
          return await this.engine.extend(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "request", async (n) => {
        try {
          return await this.engine.request(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "respond", async (n) => {
        try {
          return await this.engine.respond(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "ping", async (n) => {
        try {
          return await this.engine.ping(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "emit", async (n) => {
        try {
          return await this.engine.emit(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "disconnect", async (n) => {
        try {
          return await this.engine.disconnect(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "find", (n) => {
        try {
          return this.engine.find(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "getPendingSessionRequests", () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (n) {
          throw this.logger.error(n.message), n;
        }
      }), me(this, "authenticate", async (n, r) => {
        try {
          return await this.engine.authenticate(n, r);
        } catch (i) {
          throw this.logger.error(i.message), i;
        }
      }), me(this, "formatAuthMessage", (n) => {
        try {
          return this.engine.formatAuthMessage(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "approveSessionAuthenticate", async (n) => {
        try {
          return await this.engine.approveSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), me(this, "rejectSessionAuthenticate", async (n) => {
        try {
          return await this.engine.rejectSessionAuthenticate(n);
        } catch (r) {
          throw this.logger.error(r.message), r;
        }
      }), this.name = (e == null ? void 0 : e.name) || wa.name, this.metadata = Hy(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
      const s = Zc({
        logger: (e == null ? void 0 : e.logger) || wa.logger,
        name: this.name
      });
      this.logger = s, this.core = (e == null ? void 0 : e.core) || new LI(e), this.session = new nN(this.core, this.logger), this.proposal = new sN(this.core, this.logger), this.pendingRequest = new rN(this.core, this.logger), this.engine = new tN(this), this.auth = new dN(this.core, this.logger);
    }
    static async init(e) {
      const s = new Qc(e);
      return await s.initialize(), s;
    }
    get context() {
      return Bt(this.logger);
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
  const pN = Qc;
  function el(t) {
    return t == null || typeof t != "object" && typeof t != "function";
  }
  function pf(t) {
    return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
  }
  function ff(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  const fN = "[object RegExp]", gf = "[object String]", mf = "[object Number]", wf = "[object Boolean]", yf = "[object Arguments]", gN = "[object Symbol]", mN = "[object Date]", wN = "[object Map]", yN = "[object Set]", bN = "[object Array]", EN = "[object ArrayBuffer]", CN = "[object Object]", vN = "[object DataView]", AN = "[object Uint8Array]", IN = "[object Uint8ClampedArray]", NN = "[object Uint16Array]", SN = "[object Uint32Array]", _N = "[object Int8Array]", TN = "[object Int16Array]", ON = "[object Int32Array]", kN = "[object Float32Array]", xN = "[object Float64Array]";
  function tl(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  function PN(t, e) {
    return dr(t, void 0, t, /* @__PURE__ */ new Map(), e);
  }
  function dr(t, e, s, n = /* @__PURE__ */ new Map(), r = void 0) {
    const i = r == null ? void 0 : r(t, e, s, n);
    if (i != null) return i;
    if (el(t)) return t;
    if (n.has(t)) return n.get(t);
    if (Array.isArray(t)) {
      const o = new Array(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = dr(t[a], a, s, n, r);
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
      for (const [a, c] of t) o.set(a, dr(c, a, s, n, r));
      return o;
    }
    if (t instanceof Set) {
      const o = /* @__PURE__ */ new Set();
      n.set(t, o);
      for (const a of t) o.add(dr(a, void 0, s, n, r));
      return o;
    }
    if (typeof Ee < "u" && Ee.isBuffer(t)) return t.subarray();
    if (tl(t)) {
      const o = new (Object.getPrototypeOf(t)).constructor(t.length);
      n.set(t, o);
      for (let a = 0; a < t.length; a++) o[a] = dr(t[a], a, s, n, r);
      return o;
    }
    if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    if (t instanceof DataView) {
      const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
      return n.set(t, o), Tn(o, t, s, n, r), o;
    }
    if (typeof File < "u" && t instanceof File) {
      const o = new File([
        t
      ], t.name, {
        type: t.type
      });
      return n.set(t, o), Tn(o, t, s, n, r), o;
    }
    if (t instanceof Blob) {
      const o = new Blob([
        t
      ], {
        type: t.type
      });
      return n.set(t, o), Tn(o, t, s, n, r), o;
    }
    if (t instanceof Error) {
      const o = new t.constructor();
      return n.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, Tn(o, t, s, n, r), o;
    }
    if (typeof t == "object" && RN(t)) {
      const o = Object.create(Object.getPrototypeOf(t));
      return n.set(t, o), Tn(o, t, s, n, r), o;
    }
    return t;
  }
  function Tn(t, e, s = t, n, r) {
    const i = [
      ...Object.keys(e),
      ...pf(e)
    ];
    for (let o = 0; o < i.length; o++) {
      const a = i[o], c = Object.getOwnPropertyDescriptor(t, a);
      (c == null || c.writable) && (t[a] = dr(e[a], a, s, n, r));
    }
  }
  function RN(t) {
    switch (ff(t)) {
      case yf:
      case bN:
      case EN:
      case vN:
      case wf:
      case mN:
      case kN:
      case xN:
      case _N:
      case TN:
      case ON:
      case wN:
      case mf:
      case CN:
      case fN:
      case yN:
      case gf:
      case gN:
      case AN:
      case IN:
      case NN:
      case SN:
        return true;
      default:
        return false;
    }
  }
  function UN(t, e) {
    return PN(t, (s, n, r, i) => {
      if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
        case mf:
        case gf:
        case wf: {
          const o = new t.constructor(t == null ? void 0 : t.valueOf());
          return Tn(o, t), o;
        }
        case yf: {
          const o = {};
          return Tn(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
        }
        default:
          return;
      }
    });
  }
  function hu(t) {
    return UN(t);
  }
  function pu(t) {
    return t !== null && typeof t == "object" && ff(t) === "[object Arguments]";
  }
  function fu(t) {
    return typeof t == "object" && t !== null;
  }
  function $N() {
  }
  function DN(t) {
    return tl(t);
  }
  function BN(t) {
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
  function LN(t) {
    if (el(t)) return t;
    if (Array.isArray(t) || tl(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
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
  function MN(t, ...e) {
    const s = e.slice(0, -1), n = e[e.length - 1];
    let r = t;
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      r = mc(r, o, n, /* @__PURE__ */ new Map());
    }
    return r;
  }
  function mc(t, e, s, n) {
    if (el(t) && (t = Object(t)), e == null || typeof e != "object") return t;
    if (n.has(e)) return LN(n.get(e));
    if (n.set(e, t), Array.isArray(e)) {
      e = e.slice();
      for (let i = 0; i < e.length; i++) e[i] = e[i] ?? void 0;
    }
    const r = [
      ...Object.keys(e),
      ...pf(e)
    ];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = e[o], c = t[o];
      if (pu(a) && (a = {
        ...a
      }), pu(c) && (c = {
        ...c
      }), typeof Ee < "u" && Ee.isBuffer(a) && (a = hu(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
        const d = [], u = Reflect.ownKeys(c);
        for (let h = 0; h < u.length; h++) {
          const f = u[h];
          d[f] = c[f];
        }
        c = d;
      } else c = [];
      const l = s(c, a, o, t, e, n);
      l != null ? t[o] = l : Array.isArray(a) || fu(c) && fu(a) ? t[o] = mc(c, a, s, n) : c == null && BN(a) ? t[o] = mc({}, a, s, n) : c == null && DN(a) ? t[o] = hu(a) : (c === void 0 || a !== void 0) && (t[o] = a);
    }
    return t;
  }
  function FN(t, ...e) {
    return MN(t, ...e, $N);
  }
  const gu = "error", qN = "wss://relay.walletconnect.org", WN = "wc", bf = "universal_provider", $i = `${WN}@2:${bf}:`, Ef = "https://rpc.walletconnect.org/v1/", Cf = "generic", jN = `${Ef}bundler`, fr = "call_status", HN = 86400, sl = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
  };
  var zN = Object.defineProperty, VN = Object.defineProperties, KN = Object.getOwnPropertyDescriptors, mu = Object.getOwnPropertySymbols, GN = Object.prototype.hasOwnProperty, YN = Object.prototype.propertyIsEnumerable, wu = (t, e, s) => e in t ? zN(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Di = (t, e) => {
    for (var s in e || (e = {})) GN.call(e, s) && wu(t, s, e[s]);
    if (mu) for (var s of mu(e)) YN.call(e, s) && wu(t, s, e[s]);
    return t;
  }, JN = (t, e) => VN(t, KN(e));
  function vf(t, e, s) {
    var n;
    const r = Ws(t);
    return ((n = e.rpcMap) == null ? void 0 : n[r.reference]) || `${Ef}?chainId=${r.namespace}:${r.reference}&projectId=${s}`;
  }
  function ZN(t) {
    return t.includes(":") ? t.split(":")[1] : t;
  }
  function Af(t) {
    return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
  }
  function XN(t, e) {
    const s = Object.keys(e.namespaces).filter((r) => r.includes(t));
    if (!s.length) return [];
    const n = [];
    return s.forEach((r) => {
      const i = e.namespaces[r].accounts;
      n.push(...i);
    }), n;
  }
  function yu(t) {
    return Object.fromEntries(Object.entries(t).filter(([e, s]) => {
      var n, r;
      return ((n = s == null ? void 0 : s.chains) == null ? void 0 : n.length) && ((r = s == null ? void 0 : s.chains) == null ? void 0 : r.length) > 0;
    }));
  }
  function Bi(t = {}, e = {}) {
    const s = yu(bu(t)), n = yu(bu(e));
    return FN(s, n);
  }
  function bu(t) {
    var e, s, n, r, i;
    const o = {};
    if (!As(t)) return o;
    for (const [a, c] of Object.entries(t)) {
      const l = Po(a) ? [
        a
      ] : c.chains, d = c.methods || [], u = c.events || [], h = c.rpcMap || {}, f = lr(a);
      o[f] = JN(Di(Di({}, o[f]), c), {
        chains: vs(l, (e = o[f]) == null ? void 0 : e.chains),
        methods: vs(d, (s = o[f]) == null ? void 0 : s.methods),
        events: vs(u, (n = o[f]) == null ? void 0 : n.events)
      }), (As(h) || As(((r = o[f]) == null ? void 0 : r.rpcMap) || {})) && (o[f].rpcMap = Di(Di({}, h), (i = o[f]) == null ? void 0 : i.rpcMap));
    }
    return o;
  }
  function Eu(t) {
    return t.includes(":") ? t.split(":")[2] : t;
  }
  function Cu(t) {
    const e = {};
    for (const [s, n] of Object.entries(t)) {
      const r = n.methods || [], i = n.events || [], o = n.accounts || [], a = Po(s) ? [
        s
      ] : n.chains ? n.chains : Af(n.accounts);
      e[s] = {
        chains: a,
        methods: r,
        events: i,
        accounts: o
      };
    }
    return e;
  }
  function Ea(t) {
    return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
  }
  function QN(t) {
    try {
      const e = JSON.parse(t);
      return typeof e == "object" && e !== null && !Array.isArray(e);
    } catch {
      return false;
    }
  }
  const If = {}, gr = (t) => If[t], Ca = (t, e) => {
    If[t] = e;
  };
  var eS = Object.defineProperty, vu = Object.getOwnPropertySymbols, tS = Object.prototype.hasOwnProperty, sS = Object.prototype.propertyIsEnumerable, Au = (t, e, s) => e in t ? eS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Iu = (t, e) => {
    for (var s in e || (e = {})) tS.call(e, s) && Au(t, s, e[s]);
    if (vu) for (var s of vu(e)) sS.call(e, s) && Au(t, s, e[s]);
    return t;
  };
  const Nu = "eip155", nS = [
    "atomic",
    "flow-control",
    "paymasterService",
    "sessionKeys",
    "auxiliaryFunds"
  ], rS = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, va = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, Su = (t) => Object.keys(t).filter((e) => nS.includes(e)).reduce((e, s) => (e[s] = iS(t[s]), e), {}), iS = (t) => typeof t == "string" && QN(t) ? JSON.parse(t) : t, oS = (t, e, s) => {
    const { sessionProperties: n = {}, scopedProperties: r = {} } = t, i = {};
    if (!As(r) && !As(n)) return;
    const o = Su(n);
    for (const a of s) {
      const c = rS(a);
      if (!c) continue;
      i[va(c)] = o;
      const l = r == null ? void 0 : r[`${Nu}:${c}`];
      if (l) {
        const d = l == null ? void 0 : l[`${Nu}:${c}:${e}`];
        i[va(c)] = Iu(Iu({}, i[va(c)]), Su(d || l));
      }
    }
    for (const [a, c] of Object.entries(i)) Object.keys(c).length === 0 && delete i[a];
    return Object.keys(i).length > 0 ? i : void 0;
  };
  var aS = Object.defineProperty, cS = (t, e, s) => e in t ? aS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, lS = (t, e, s) => cS(t, e + "", s);
  let Aa;
  class nl {
    constructor(e) {
      lS(this, "storage"), this.storage = e;
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
      return Aa || (Aa = new nl(e)), Aa;
    }
  }
  var dS = Object.defineProperty, uS = Object.defineProperties, hS = Object.getOwnPropertyDescriptors, _u = Object.getOwnPropertySymbols, pS = Object.prototype.hasOwnProperty, fS = Object.prototype.propertyIsEnumerable, Tu = (t, e, s) => e in t ? dS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, gS = (t, e) => {
    for (var s in e || (e = {})) pS.call(e, s) && Tu(t, s, e[s]);
    if (_u) for (var s of _u(e)) fS.call(e, s) && Tu(t, s, e[s]);
    return t;
  }, mS = (t, e) => uS(t, hS(e));
  async function wS(t, e) {
    const s = Ws(t.result.capabilities.caip345.caip2), n = t.result.capabilities.caip345.transactionHashes, r = await Promise.allSettled(n.map((u) => yS(s.reference, u, e))), i = r.filter((u) => u.status === "fulfilled").map((u) => u.value).filter((u) => u);
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
  async function yS(t, e, s) {
    return await s(parseInt(t)).request(ms("eth_getTransactionReceipt", [
      e
    ]));
  }
  async function bS({ sendCalls: t, storage: e }) {
    const s = await e.getItem(fr);
    await e.setItem(fr, mS(gS({}, s), {
      [t.result.id]: {
        request: t.request,
        result: t.result,
        expiry: Me(HN)
      }
    }));
  }
  async function ES({ resultId: t, storage: e }) {
    const s = await e.getItem(fr);
    if (s) {
      delete s[t], await e.setItem(fr, s);
      for (const n in s) ws(s[n].expiry) && delete s[n];
      await e.setItem(fr, s);
    }
  }
  async function CS({ resultId: t, storage: e }) {
    const s = await e.getItem(fr), n = s == null ? void 0 : s[t];
    if (n && !ws(n.expiry)) return n;
    await ES({
      resultId: t,
      storage: e
    });
  }
  var vS = Object.defineProperty, AS = Object.defineProperties, IS = Object.getOwnPropertyDescriptors, Ou = Object.getOwnPropertySymbols, NS = Object.prototype.hasOwnProperty, SS = Object.prototype.propertyIsEnumerable, wc = (t, e, s) => e in t ? vS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Ia = (t, e) => {
    for (var s in e || (e = {})) NS.call(e, s) && wc(t, s, e[s]);
    if (Ou) for (var s of Ou(e)) SS.call(e, s) && wc(t, s, e[s]);
    return t;
  }, Na = (t, e) => AS(t, IS(e)), vn = (t, e, s) => wc(t, typeof e != "symbol" ? e + "" : e, s);
  class _S {
    constructor(e) {
      vn(this, "name", "eip155"), vn(this, "client"), vn(this, "chainId"), vn(this, "namespace"), vn(this, "httpProviders"), vn(this, "events"), vn(this, "storage"), this.namespace = e.namespace, this.events = gr("events"), this.client = gr("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = nl.getStorage(this.client.core.storage);
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
      this.chainId = parseInt(e), this.events.emit(sl.DEFAULT_CHAIN_CHANGED, {
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
      const n = s || vf(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Nc(new Yu(n, gr("disableProviderPing")));
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProviders() {
      const e = {};
      return this.namespace.chains.forEach((s) => {
        var n;
        const r = parseInt(ZN(s));
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
      return this.httpProviders[s] || (this.httpProviders = Na(Ia({}, this.httpProviders), {
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
        g = oS(l, a, c);
      } catch (w) {
        console.warn("Failed to extract capabilities from session", w);
      }
      if (g) return g;
      const p = await this.client.request(e);
      try {
        await this.client.session.update(e.topic, {
          sessionProperties: Na(Ia({}, l.sessionProperties || {}), {
            capabilities: Na(Ia({}, d || {}), {
              [h]: p
            })
          })
        });
      } catch (w) {
        console.warn("Failed to update session with capabilities", w);
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
      const c = await CS({
        resultId: (r = e.request.params) == null ? void 0 : r[0],
        storage: this.storage
      });
      if (c) try {
        return await wS(c, this.getHttpProvider.bind(this));
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
        body: JSON.stringify(ms("eth_getUserOperationReceipt", [
          (n = s.request.params) == null ? void 0 : n[0]
        ]))
      });
      if (!i.ok) throw new Error(`Failed to fetch user operation receipt - ${i.status}`);
      return await i.json();
    }
    getBundlerUrl(e, s) {
      return `${jN}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
    }
    async sendCalls(e) {
      var s, n, r;
      const i = await this.client.request(e), o = (s = e.request.params) == null ? void 0 : s[0], a = i == null ? void 0 : i.id, c = (i == null ? void 0 : i.capabilities) || {}, l = (n = c == null ? void 0 : c.caip345) == null ? void 0 : n.caip2, d = (r = c == null ? void 0 : c.caip345) == null ? void 0 : r.transactionHashes;
      return !a || !l || !(d != null && d.length) || await bS({
        sendCalls: {
          request: o,
          result: i
        },
        storage: this.storage
      }), i;
    }
  }
  var TS = Object.defineProperty, OS = (t, e, s) => e in t ? TS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, rr = (t, e, s) => OS(t, typeof e != "symbol" ? e + "" : e, s);
  class kS {
    constructor(e) {
      rr(this, "name", Cf), rr(this, "client"), rr(this, "httpProviders"), rr(this, "events"), rr(this, "namespace"), rr(this, "chainId"), this.namespace = e.namespace, this.events = gr("events"), this.client = gr("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
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
      this.chainId = e, this.events.emit(sl.DEFAULT_CHAIN_CHANGED, {
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
      return Ws(e).namespace;
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
        const a = Ws(r), c = (o = (i = this.namespace) == null ? void 0 : i.rpcMap) == null ? void 0 : o[`${a.namespace}:${a.reference}`];
        n[a.reference] = this.createHttpProvider(r, c);
      }), n;
    }
    getHttpProvider(e) {
      const s = Ws(e).reference, n = this.httpProviders[s];
      if (typeof n > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
      return n;
    }
    setHttpProvider(e, s) {
      const n = this.createHttpProvider(e, s);
      n && (this.httpProviders[e] = n);
    }
    createHttpProvider(e, s) {
      const n = s || vf(e, this.namespace, this.client.core.projectId);
      if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Nc(new Yu(n, gr("disableProviderPing")));
    }
  }
  var xS = Object.defineProperty, PS = Object.defineProperties, RS = Object.getOwnPropertyDescriptors, ku = Object.getOwnPropertySymbols, US = Object.prototype.hasOwnProperty, $S = Object.prototype.propertyIsEnumerable, yc = (t, e, s) => e in t ? xS(t, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: s
  }) : t[e] = s, Dr = (t, e) => {
    for (var s in e || (e = {})) US.call(e, s) && yc(t, s, e[s]);
    if (ku) for (var s of ku(e)) $S.call(e, s) && yc(t, s, e[s]);
    return t;
  }, Li = (t, e) => PS(t, RS(e)), Ot = (t, e, s) => yc(t, typeof e != "symbol" ? e + "" : e, s);
  let DS = class Nf {
    constructor(e) {
      Ot(this, "client"), Ot(this, "namespaces"), Ot(this, "optionalNamespaces"), Ot(this, "sessionProperties"), Ot(this, "scopedProperties"), Ot(this, "events", new Tc()), Ot(this, "rpcProviders", {}), Ot(this, "session"), Ot(this, "providerOpts"), Ot(this, "logger"), Ot(this, "uri"), Ot(this, "disableProviderPing", false), Ot(this, "connectParams");
      var s, n;
      this.providerOpts = e, this.logger = Zc({
        logger: (s = e.logger) != null ? s : gu,
        name: (n = this.providerOpts.name) != null ? n : bf
      }), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || false;
    }
    static async init(e) {
      const s = new Nf(e);
      return await s.initialize(), s;
    }
    async request(e, s, n) {
      const [r, i] = this.validateChain(s);
      if (!this.session) throw new Error("Please call connect() before request()");
      return await this.getProvider(r).request({
        request: Dr({}, e),
        chainId: `${r}:${i}`,
        topic: this.session.topic,
        expiry: n
      });
    }
    sendAsync(e, s, n, r) {
      const i = (/* @__PURE__ */ new Date()).getTime();
      this.request(e, n, r).then((o) => s(null, Jr(i, o))).catch((o) => s(o, void 0));
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
        reason: $e("USER_DISCONNECTED")
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
        const o = Cu(this.session.namespaces);
        this.namespaces = Bi(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
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
      const a = Cu(o.namespaces);
      return this.namespaces = Bi(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
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
        if (!Hs(s)) return;
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
      if (this.client = this.providerOpts.client || await pN.init({
        core: this.providerOpts.core,
        logger: this.providerOpts.logger || gu,
        relayUrl: this.providerOpts.relayUrl || qN,
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
        ...new Set(Object.keys(this.session.namespaces).map((s) => lr(s)))
      ];
      Ca("client", this.client), Ca("events", this.events), Ca("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
        if (!this.session) return;
        const n = XN(s, this.session);
        if ((n == null ? void 0 : n.length) === 0) return;
        const r = Af(n), i = Bi(this.namespaces, this.optionalNamespaces), o = Li(Dr({}, i[s]), {
          accounts: n,
          chains: r
        });
        switch (s) {
          case "eip155":
            this.rpcProviders[s] = new _S({
              namespace: o
            });
            break;
          default:
            this.rpcProviders[s] = new kS({
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
          o && Hs(o) && this.events.emit("accountsChanged", o.map(Eu));
        } else if (i.name === "chainChanged") {
          const o = n.chainId, a = n.event.data, c = lr(o), l = Ea(o) !== Ea(a) ? `${c}:${Ea(a)}` : o;
          this.onChainChanged({
            currentCaipChainId: l
          });
        } else this.events.emit(i.name, i.data);
        this.events.emit("session_event", e);
      }), this.client.on("session_update", ({ topic: e, params: s }) => {
        var n, r;
        if (e !== ((n = this.session) == null ? void 0 : n.topic)) return;
        const { namespaces: i } = s, o = (r = this.client) == null ? void 0 : r.session.get(e);
        this.session = Li(Dr({}, o), {
          namespaces: i
        }), this.onSessionUpdate(), this.events.emit("session_update", {
          topic: e,
          params: s
        });
      }), this.client.on("session_delete", async (e) => {
        var s;
        e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", Li(Dr({}, $e("USER_DISCONNECTED")), {
          data: e.topic
        })));
      }), this.on(sl.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(Li(Dr({}, e), {
          internal: true
        }));
      });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[Cf];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var s;
        this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
      });
    }
    setNamespaces(e) {
      const { namespaces: s = {}, optionalNamespaces: n = {}, sessionProperties: r, scopedProperties: i } = e;
      this.optionalNamespaces = Bi(s, n), this.sessionProperties = r, this.scopedProperties = i;
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
      if (s && !Object.keys(this.namespaces || {}).map((o) => lr(o)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
      if (s && n) return [
        s,
        n
      ];
      const r = lr(Object.keys(this.namespaces)[0]), i = this.rpcProviders[r].getDefaultChain();
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
        const a = o.filter((c) => c.includes(`${s}:`)).map(Eu);
        if (!Hs(a)) return;
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
      await this.client.core.storage.setItem(`${$i}/${e}${r}`, s);
    }
    async getFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      return await this.client.core.storage.getItem(`${$i}/${e}${n}`);
    }
    async deleteFromStore(e) {
      var s;
      const n = ((s = this.session) == null ? void 0 : s.topic) || "";
      await this.client.core.storage.removeItem(`${$i}/${e}${n}`);
    }
    async cleanupStorage() {
      var e;
      try {
        if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
        const s = await this.client.core.storage.getKeys();
        for (const n of s) n.startsWith($i) && await this.client.core.storage.removeItem(n);
      } catch (s) {
        this.logger.warn(s, "Failed to cleanup storage");
      }
    }
  };
  const xu = 2147483648, BS = {
    convertEVMChainIdToCoinType(t) {
      if (t >= xu) throw new Error("Invalid chainId");
      return (xu | t) >>> 0;
    }
  }, Wt = Re({
    suggestions: [],
    loading: false
  }), LS = {
    state: Wt,
    subscribe(t) {
      return et(Wt, () => t(Wt));
    },
    subscribeKey(t, e) {
      return tt(Wt, t, e);
    },
    async resolveName(t) {
      var _a2, _b2;
      try {
        return await re.lookupEnsName(t);
      } catch (e) {
        const s = e;
        throw new Error(((_b2 = (_a2 = s == null ? void 0 : s.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || "Error resolving name");
      }
    },
    async isNameRegistered(t) {
      try {
        return await re.lookupEnsName(t), true;
      } catch {
        return false;
      }
    },
    async getSuggestions(t) {
      try {
        Wt.loading = true, Wt.suggestions = [];
        const e = await re.getEnsNameSuggestions(t);
        return Wt.suggestions = e.suggestions || [], Wt.suggestions;
      } catch (e) {
        const s = Gr.parseEnsApiError(e, "Error fetching name suggestions");
        throw new Error(s);
      } finally {
        Wt.loading = false;
      }
    },
    async getNamesForAddress(t) {
      try {
        if (!m.state.activeCaipNetwork) return [];
        const s = L.getEnsFromCacheForAddress(t);
        if (s) return s;
        const n = await re.reverseLookupEnsName({
          address: t
        });
        return L.updateEnsCache({
          address: t,
          ens: n,
          timestamp: Date.now()
        }), n;
      } catch (e) {
        const s = Gr.parseEnsApiError(e, "Error fetching names for address");
        throw new Error(s);
      }
    },
    async registerName(t) {
      var _a2;
      const e = m.state.activeCaipNetwork, s = (_a2 = m.getAccountData(e == null ? void 0 : e.chainNamespace)) == null ? void 0 : _a2.address, n = q.getAuthConnector();
      if (!e) throw new Error("Network not found");
      if (!s || !n) throw new Error("Address or auth connector not found");
      Wt.loading = true;
      try {
        const r = JSON.stringify({
          name: t,
          attributes: {},
          timestamp: Math.floor(Date.now() / 1e3)
        });
        se.pushTransactionStack({
          onCancel() {
            se.replace("RegisterAccountName");
          }
        });
        const i = await z.signMessage(r);
        Wt.loading = false;
        const o = e.id;
        if (!o) throw new Error("Network not found");
        const a = BS.convertEVMChainIdToCoinType(Number(o));
        await re.registerEnsName({
          coinType: a,
          address: s,
          signature: i,
          message: r
        }), m.setAccountProp("profileName", t, e.chainNamespace), L.updateEnsCache({
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
        }), se.replace("RegisterAccountNameSuccess");
      } catch (r) {
        const i = Gr.parseEnsApiError(r, `Error registering name ${t}`);
        throw se.replace("RegisterAccountName"), new Error(i);
      } finally {
        Wt.loading = false;
      }
    },
    validateName(t) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(t);
    },
    parseEnsApiError(t, e) {
      var _a2, _b2;
      return ((_b2 = (_a2 = t == null ? void 0 : t.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.description) || e;
    }
  }, Gr = Xt(LS);
  function bc(t) {
    try {
      return new URL(t);
    } catch {
      return null;
    }
  }
  function MS(t) {
    const e = t.split("/"), s = e.length > 0 && e[0] !== void 0 ? e[0] : "", n = s.lastIndexOf(":");
    return n === -1 ? {
      host: s
    } : {
      host: s.slice(0, n),
      port: s.slice(n + 1)
    };
  }
  function FS(t) {
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
  function qS(t, e) {
    if (e.includes("://")) {
      const o = bc(e);
      return o ? o.origin === t : false;
    }
    const { host: s, port: n } = MS(e), r = t.indexOf("://");
    if (r !== -1) {
      const o = r + 3;
      let a = t.indexOf("/", o);
      a === -1 && (a = t.length);
      const c = t.slice(o, a);
      if (n !== void 0) return `${s}:${n}` === c;
      const l = c.split(":")[0];
      return s === l;
    }
    const i = bc(t);
    return i ? n !== void 0 ? s === i.hostname && n === (i.port || void 0) : s === i.hostname : false;
  }
  function WS(t, e, s) {
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
    const h = FS(e), g = (h ? h.host : t.hostname).split(".");
    if (d.length !== g.length) return false;
    for (let p = d.length - 1; p >= 0; p -= 1) {
      const w = d[p], A = g[p];
      if (w !== "*" && w !== A) return false;
    }
    return true;
  }
  const jS = {
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
  }, pn = {
    RPC_ERROR_CODE: {
      USER_REJECTED: 5e3,
      USER_REJECTED_METHODS: 5002
    },
    getMethodsByChainNamespace(t) {
      return jS[t] || [];
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
      const e = await Gr.resolveName(t);
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
          const e = t, s = typeof e.code == "number", n = s && e.code === pn.RPC_ERROR_CODE.USER_REJECTED_METHODS, r = s && e.code === pn.RPC_ERROR_CODE.USER_REJECTED;
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
      const r = bc(t);
      if (!r) return n.some((i) => !i.includes("*") && i === t);
      if (r.hostname === "localhost" || r.hostname === "127.0.0.1") return true;
      for (const i of n) if (i.includes("*")) {
        if (WS(r, t, i)) return true;
      } else if (qS(t, i)) return true;
      return false;
    },
    listenWcProvider({ universalProvider: t, namespace: e, onConnect: s, onDisconnect: n, onAccountsChanged: r, onChainChanged: i, onDisplayUri: o }) {
      s && t.on("connect", () => {
        const a = pn.getWalletConnectAccounts(t, e);
        s(a);
      }), n && t.on("disconnect", () => {
        n();
      }), r && t.on("accountsChanged", (a) => {
        var _a2, _b2, _c2, _d3, _e2;
        try {
          const c = ((_c2 = (_b2 = (_a2 = t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) || [], l = (_e2 = (_d3 = t.rpcProviders) == null ? void 0 : _d3[e]) == null ? void 0 : _e2.getDefaultChain(), d = a.map((u) => {
            const h = c.find((p) => p.includes(`${e}:${l}:${u}`));
            if (!h) return;
            const { chainId: f, chainNamespace: g } = Qe.parseCaipAddress(h);
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
      const s = /* @__PURE__ */ new Set(), n = (_d3 = (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b2[e]) == null ? void 0 : _c2.accounts) == null ? void 0 : _d3.map((r) => Qe.parseCaipAddress(r)).filter(({ address: r }) => s.has(r.toLowerCase()) ? false : (s.add(r.toLowerCase()), true));
      return n && n.length > 0 ? n : [];
    }
  }, HS = [
    P.CONNECTOR_ID.AUTH,
    P.CONNECTOR_ID.WALLET_CONNECT
  ];
  class zS {
    constructor(e) {
      this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (s) => m.getCaipNetworks(s), this.getConnectorId = (s) => q.getConnectorId(s), e && this.construct(e);
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
        connectorId: P.CONNECTOR_ID.AUTH,
        accounts: e,
        caipNetwork: n
      });
    }
    setAuthProvider(e) {
      e.onConnect(this.onAuthConnected.bind(this)), e.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
        id: P.CONNECTOR_ID.AUTH,
        type: "AUTH",
        name: P.CONNECTOR_NAMES.AUTH,
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
      m.setAccountProp("status", e, s);
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
        throw pn.isUserRejectedRequestError(s) ? new sh(s) : s;
      }
    }
    async switchNetwork(e) {
      var _a2;
      const { caipNetwork: s } = e, n = xe.getProviderId(s.chainNamespace), r = xe.getProvider(s.chainNamespace);
      if (!r) throw new Error("Provider not found");
      if (n === "WALLET_CONNECT") {
        r.setDefaultChain(s.caipNetworkId);
        return;
      }
      if (n === "AUTH") {
        const i = (_a2 = q.getAuthConnector()) == null ? void 0 : _a2.provider;
        if (!i) throw new Error("Auth provider not found");
        const o = Jt(s.chainNamespace);
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
        const { address: n, chainId: r } = Y.getAccount(e[0]), i = this.getCaipNetworks().filter((a) => a.chainNamespace === this.namespace).find((a) => a.id.toString() === (r == null ? void 0 : r.toString())), o = this.connectors.find((a) => a.id === s);
        n && (this.emit("accountChanged", {
          address: n,
          chainId: r,
          connector: o
        }), this.addConnection({
          connectorId: s,
          accounts: e.map((a) => {
            const { address: c } = Y.getAccount(a);
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
        const { address: r } = Y.getAccount(e[0]), i = this.getConnection({
          connectorId: s,
          connections: this.connections,
          connectors: this.connectors
        });
        r && ((_a2 = this.getConnectorId(P.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === s.toLowerCase() && this.emit("accountChanged", {
          address: r,
          chainId: (_b2 = i == null ? void 0 : i.caipNetwork) == null ? void 0 : _b2.id,
          connector: i == null ? void 0 : i.connector
        }), this.addConnection({
          connectorId: s,
          accounts: e.map((o) => {
            const { address: a } = Y.getAccount(o);
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
      this.removeProviderListeners(e), this.deleteConnection(e), ((_a2 = this.getConnectorId(P.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === e.toLowerCase() && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect");
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
      }), ((_a2 = this.getConnectorId(P.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === s.toLowerCase() && this.emit("switchNetwork", {
        chainId: n
      });
    }
    listenProviderEvents(e, s) {
      if (HS.includes(e)) return;
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
  let An = null;
  is = {
    getSIWX() {
      return U.state.siwx;
    },
    async initializeIfEnabled(t = m.getActiveCaipAddress()) {
      var _a2, _b2, _c2;
      const e = U.state.siwx;
      if (!(e && t)) return;
      const [s, n, r] = t.split(":");
      if (m.checkIfSupportedNetwork(s, `${s}:${n}`)) try {
        if ((_a2 = U.state.remoteFeatures) == null ? void 0 : _a2.emailCapture) {
          const o = (_b2 = m.getAccountData(s)) == null ? void 0 : _b2.user;
          await pe.open({
            view: "DataCapture",
            data: {
              email: (o == null ? void 0 : o.email) ?? void 0
            }
          });
          return;
        }
        if (An && await An, (await e.getSessions(`${s}:${n}`, r)).length) return;
        await pe.open({
          view: "SIWXSignMessage"
        });
      } catch (i) {
        console.error("SIWXUtil:initializeIfEnabled", i), de.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(i)
        }), await ((_c2 = z._getClient()) == null ? void 0 : _c2.disconnect().catch(console.error)), se.reset("Connect"), ys.showError("A problem occurred while trying initialize authentication");
      }
    },
    async isAuthenticated(t = m.getActiveCaipAddress()) {
      if (!U.state.siwx || !t) return true;
      const { chainNamespace: s, chainId: n, address: r } = Qe.parseCaipAddress(t), i = `${s}:${n}`;
      return (await is.getSessions({
        address: r,
        caipNetworkId: i
      })).length > 0;
    },
    async requestSignMessage() {
      const t = U.state.siwx, e = Y.getPlainAddress(m.getActiveCaipAddress()), s = Ii();
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
        }) : (q.getConnectorId(s.chainNamespace) === P.CONNECTOR_ID.AUTH && se.pushTransactionStack({}), i = await z.signMessage(r) || ""), await t.addSession({
          data: n,
          message: r,
          signature: i
        }), m.setLastConnectedSIWECaipNetwork(s), pe.close(), de.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: this.getSIWXEventProperties()
        });
      } catch (n) {
        (!pe.state.open || se.state.view === "ApproveTransaction") && await pe.open({
          view: "SIWXSignMessage"
        }), ys.showError("Error signing message"), de.sendEvent({
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
          const s = m.getLastConnectedSIWECaipNetwork();
          if (s) {
            const n = await (t == null ? void 0 : t.getSessions(s == null ? void 0 : s.caipNetworkId, Y.getPlainAddress(m.getActiveCaipAddress()) || ""));
            n && n.length > 0 ? await m.switchActiveNetwork(s) : await z.disconnect();
          } else await z.disconnect();
        } else pe.close();
        pe.close(), de.sendEvent({
          event: "CLICK_CANCEL_SIWX",
          type: "track",
          properties: this.getSIWXEventProperties()
        });
      } catch (t) {
        console.error("SIWXUtil:cancelSignMessage", t);
      }
    },
    async getAllSessions() {
      const t = this.getSIWX(), e = m.getAllRequestedCaipNetworks(), s = [];
      return await Promise.all(e.map(async (n) => {
        const r = await (t == null ? void 0 : t.getSessions(n.caipNetworkId, Y.getPlainAddress(m.getActiveCaipAddress()) || ""));
        r && s.push(...r);
      })), s;
    },
    async getSessions(t) {
      var _a2;
      const e = U.state.siwx;
      let s = t == null ? void 0 : t.address;
      if (!s) {
        const r = m.getActiveCaipAddress();
        s = Y.getPlainAddress(r);
      }
      let n = t == null ? void 0 : t.caipNetworkId;
      return n || (n = (_a2 = m.getActiveCaipNetwork()) == null ? void 0 : _a2.caipNetworkId), e && s && n ? e.getSessions(n, s) : [];
    },
    async isSIWXCloseDisabled() {
      var _a2;
      const t = this.getSIWX();
      if (t) {
        const e = se.state.view === "ApproveTransaction", s = se.state.view === "SIWXSignMessage";
        if (e || s) return ((_a2 = t.getRequired) == null ? void 0 : _a2.call(t)) && (await this.getSessions()).length === 0;
      }
      return false;
    },
    async authConnectorAuthenticate({ authConnector: t, chainId: e, socialUri: s, preferredAccountType: n, chainNamespace: r }) {
      var _a2;
      const i = is.getSIWX(), o = Ii();
      if (!i || !r.includes(P.CHAIN.EVM) || ((_a2 = U.state.remoteFeatures) == null ? void 0 : _a2.emailCapture)) {
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
      return l.accountAddress = d.address, l.serializedMessage = d.message || "", d.signature && d.message && await is.addEmbeddedWalletSession(l, d.message, d.signature), m.setLastConnectedSIWECaipNetwork(o), {
        address: d.address,
        chainId: d.chainId,
        accounts: d.accounts
      };
    },
    async addEmbeddedWalletSession(t, e, s) {
      if (An) return An;
      const n = is.getSIWX();
      return n ? (An = n.addSession({
        data: t,
        message: e,
        signature: s
      }).finally(() => {
        An = null;
      }), An) : Promise.resolve();
    },
    async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: s }) {
      var _a2, _b2, _c2;
      const n = is.getSIWX(), r = Ii(), i = new Set(e.map((l) => l.split(":")[0]));
      if (!n || i.size !== 1 || !i.has("eip155")) return false;
      const o = await n.createMessage({
        chainId: ((_a2 = Ii()) == null ? void 0 : _a2.caipNetworkId) || "",
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
      ys.showLoading("Authenticating...", {
        autoClose: false
      });
      const c = {
        ...a.session.peer.metadata,
        name: a.session.peer.metadata.name,
        icon: (_b2 = a.session.peer.metadata.icons) == null ? void 0 : _b2[0],
        type: "WALLET_CONNECT"
      };
      if (m.setAccountProp("connectedWalletInfo", c, Array.from(i)[0]), (_c2 = a == null ? void 0 : a.auths) == null ? void 0 : _c2.length) {
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
          await n.setSessions(l), r && m.setLastConnectedSIWECaipNetwork(r), de.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: is.getSIWXEventProperties()
          });
        } catch (d) {
          throw console.error("SIWX:universalProviderAuth - failed to set sessions", d), de.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: is.getSIWXEventProperties(d)
          }), await t.disconnect().catch(console.error), d;
        } finally {
          ys.hide();
        }
      }
      return true;
    },
    getSIWXEventProperties(t) {
      var _a2;
      const e = m.state.activeChain;
      if (!e) throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
      return {
        network: ((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || "",
        isSmartAccount: Jt(e) === Ms.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: t ? Y.parseError(t) : void 0
      };
    },
    async clearSessions() {
      const t = this.getSIWX();
      t && await t.setSessions([]);
    }
  };
  class VS {
    constructor({ provider: e, namespace: s }) {
      this.id = P.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = m.getCaipNetworks.bind(m), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = s;
    }
    get chains() {
      return this.getCaipNetworks();
    }
    async connectWalletConnect() {
      if (!await this.authenticate()) {
        const s = this.getCaipNetworks(), n = U.state.universalProviderConfigOverride, r = pn.createNamespaces(s, n);
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
      return is.universalProviderAuthenticate({
        universalProvider: this.provider,
        chains: e,
        methods: KS
      });
    }
  }
  let KS, ts, GS, YS, JS;
  KS = [
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
  ts = Re({
    message: "",
    variant: "info",
    open: false
  });
  GS = {
    state: ts,
    subscribeKey(t, e) {
      return tt(ts, t, e);
    },
    open(t, e) {
      const { debug: s } = U.state, { code: n, displayMessage: r, debugMessage: i } = t;
      r && s && (ts.message = r, ts.variant = e, ts.open = true);
    },
    warn(t, e, s) {
      ts.open = true, ts.message = t, ts.variant = "warning", e && console.warn(e, s);
    },
    close() {
      ts.open = false, ts.message = "", ts.variant = "info";
    }
  };
  kt = Xt(GS);
  YS = {
    asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
  };
  JS = {
    asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
  };
  const Yi = globalThis, rl = Yi.ShadowRoot && (Yi.ShadyCSS === void 0 || Yi.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, il = Symbol(), Pu = /* @__PURE__ */ new WeakMap();
  let Sf = class {
    constructor(e, s, n) {
      if (this._$cssResult$ = true, n !== il) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = e, this.t = s;
    }
    get styleSheet() {
      let e = this.o;
      const s = this.t;
      if (rl && e === void 0) {
        const n = s !== void 0 && s.length === 1;
        n && (e = Pu.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Pu.set(s, e));
      }
      return e;
    }
    toString() {
      return this.cssText;
    }
  };
  let rs, ZS, Ru;
  rs = (t) => new Sf(typeof t == "string" ? t : t + "", void 0, il);
  cn = (t, ...e) => {
    const s = t.length === 1 ? t[0] : e.reduce((n, r, i) => n + ((o) => {
      if (o._$cssResult$ === true) return o.cssText;
      if (typeof o == "number") return o;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(r) + t[i + 1], t[0]);
    return new Sf(s, t, il);
  };
  ZS = (t, e) => {
    if (rl) t.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    else for (const s of e) {
      const n = document.createElement("style"), r = Yi.litNonce;
      r !== void 0 && n.setAttribute("nonce", r), n.textContent = s.cssText, t.appendChild(n);
    }
  };
  Ru = rl ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
    let s = "";
    for (const n of e.cssRules) s += n.cssText;
    return rs(s);
  })(t) : t;
  let XS, QS, e_, t_, s_, n_, $o, Uu, r_, i_, Yr, $u;
  ({ is: XS, defineProperty: QS, getOwnPropertyDescriptor: e_, getOwnPropertyNames: t_, getOwnPropertySymbols: s_, getPrototypeOf: n_ } = Object);
  $o = globalThis;
  Uu = $o.trustedTypes;
  r_ = Uu ? Uu.emptyScript : "";
  i_ = $o.reactiveElementPolyfillSupport;
  Yr = (t, e) => t;
  Ec = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? r_ : null;
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
  _f = (t, e) => !XS(t, e);
  $u = {
    attribute: true,
    type: String,
    converter: Ec,
    reflect: false,
    useDefault: false,
    hasChanged: _f
  };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), $o.litPropertyMetadata ?? ($o.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  let ir = class extends HTMLElement {
    static addInitializer(e) {
      this._$Ei(), (this.l ?? (this.l = [])).push(e);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [
        ...this._$Eh.keys()
      ];
    }
    static createProperty(e, s = $u) {
      if (s.state && (s.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((s = Object.create(s)).wrapped = true), this.elementProperties.set(e, s), !s.noAccessor) {
        const n = Symbol(), r = this.getPropertyDescriptor(e, n, s);
        r !== void 0 && QS(this.prototype, e, r);
      }
    }
    static getPropertyDescriptor(e, s, n) {
      const { get: r, set: i } = e_(this.prototype, e) ?? {
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
      return this.elementProperties.get(e) ?? $u;
    }
    static _$Ei() {
      if (this.hasOwnProperty(Yr("elementProperties"))) return;
      const e = n_(this);
      e.finalize(), e.l !== void 0 && (this.l = [
        ...e.l
      ]), this.elementProperties = new Map(e.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(Yr("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Yr("properties"))) {
        const s = this.properties, n = [
          ...t_(s),
          ...s_(s)
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
        for (const r of n) s.unshift(Ru(r));
      } else e !== void 0 && s.push(Ru(e));
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
      return ZS(e, this.constructor.elementStyles), e;
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
        const i = (((_a2 = n.converter) == null ? void 0 : _a2.toAttribute) !== void 0 ? n.converter : Ec).toAttribute(s, n.type);
        this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
      }
    }
    _$AK(e, s) {
      var _a2, _b2;
      const n = this.constructor, r = n._$Eh.get(e);
      if (r !== void 0 && this._$Em !== r) {
        const i = n.getPropertyOptions(r), o = typeof i.converter == "function" ? {
          fromAttribute: i.converter
        } : ((_a2 = i.converter) == null ? void 0 : _a2.fromAttribute) !== void 0 ? i.converter : Ec;
        this._$Em = r;
        const a = o.fromAttribute(s, i.type);
        this[r] = a ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(r)) ?? a, this._$Em = null;
      }
    }
    requestUpdate(e, s, n, r = false, i) {
      var _a2;
      if (e !== void 0) {
        const o = this.constructor;
        if (r === false && (i = this[e]), n ?? (n = o.getPropertyOptions(e)), !((n.hasChanged ?? _f)(i, s) || n.useDefault && n.reflect && i === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(e)) && !this.hasAttribute(o._$Eu(e, n)))) return;
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
  ir.elementStyles = [], ir.shadowRootOptions = {
    mode: "open"
  }, ir[Yr("elementProperties")] = /* @__PURE__ */ new Map(), ir[Yr("finalized")] = /* @__PURE__ */ new Map(), i_ == null ? void 0 : i_({
    ReactiveElement: ir
  }), ($o.reactiveElementVersions ?? ($o.reactiveElementVersions = [])).push("2.1.2");
  let ol, Du, mo, Bu, Tf, ln, Of, o_, jn, ii, oi, al, a_, Sa, Br, Lu, Mu, In, Fu, qu, kf, xf, Wu, Dn;
  ol = globalThis;
  Du = (t) => t;
  mo = ol.trustedTypes;
  Bu = mo ? mo.createPolicy("lit-html", {
    createHTML: (t) => t
  }) : void 0;
  Tf = "$lit$";
  ln = `lit$${Math.random().toFixed(9).slice(2)}$`;
  Of = "?" + ln;
  o_ = `<${Of}>`;
  jn = document;
  ii = () => jn.createComment("");
  oi = (t) => t === null || typeof t != "object" && typeof t != "function";
  al = Array.isArray;
  a_ = (t) => al(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function";
  Sa = `[ 	
\f\r]`;
  Br = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  Lu = /-->/g;
  Mu = />/g;
  In = RegExp(`>|${Sa}(?:([^\\s"'>=/]+)(${Sa}*=${Sa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  Fu = /'/g;
  qu = /"/g;
  kf = /^(?:script|style|textarea|title)$/i;
  xf = (t) => (e, ...s) => ({
    _$litType$: t,
    strings: e,
    values: s
  });
  hT = xf(1);
  pT = xf(2);
  br = Symbol.for("lit-noChange");
  Ge = Symbol.for("lit-nothing");
  Wu = /* @__PURE__ */ new WeakMap();
  Dn = jn.createTreeWalker(jn, 129);
  function Pf(t, e) {
    if (!al(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Bu !== void 0 ? Bu.createHTML(e) : e;
  }
  const c_ = (t, e) => {
    const s = t.length - 1, n = [];
    let r, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = Br;
    for (let a = 0; a < s; a++) {
      const c = t[a];
      let l, d, u = -1, h = 0;
      for (; h < c.length && (o.lastIndex = h, d = o.exec(c), d !== null); ) h = o.lastIndex, o === Br ? d[1] === "!--" ? o = Lu : d[1] !== void 0 ? o = Mu : d[2] !== void 0 ? (kf.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = In) : d[3] !== void 0 && (o = In) : o === In ? d[0] === ">" ? (o = r ?? Br, u = -1) : d[1] === void 0 ? u = -2 : (u = o.lastIndex - d[2].length, l = d[1], o = d[3] === void 0 ? In : d[3] === '"' ? qu : Fu) : o === qu || o === Fu ? o = In : o === Lu || o === Mu ? o = Br : (o = In, r = void 0);
      const f = o === In && t[a + 1].startsWith("/>") ? " " : "";
      i += o === Br ? c + o_ : u >= 0 ? (n.push(l), c.slice(0, u) + Tf + c.slice(u) + ln + f) : c + ln + (u === -2 ? a : f);
    }
    return [
      Pf(t, i + (t[s] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")),
      n
    ];
  };
  class ai {
    constructor({ strings: e, _$litType$: s }, n) {
      let r;
      this.parts = [];
      let i = 0, o = 0;
      const a = e.length - 1, c = this.parts, [l, d] = c_(e, s);
      if (this.el = ai.createElement(l, n), Dn.currentNode = this.el.content, s === 2 || s === 3) {
        const u = this.el.content.firstChild;
        u.replaceWith(...u.childNodes);
      }
      for (; (r = Dn.nextNode()) !== null && c.length < a; ) {
        if (r.nodeType === 1) {
          if (r.hasAttributes()) for (const u of r.getAttributeNames()) if (u.endsWith(Tf)) {
            const h = d[o++], f = r.getAttribute(u).split(ln), g = /([.?@])?(.*)/.exec(h);
            c.push({
              type: 1,
              index: i,
              name: g[2],
              strings: f,
              ctor: g[1] === "." ? d_ : g[1] === "?" ? u_ : g[1] === "@" ? h_ : Do
            }), r.removeAttribute(u);
          } else u.startsWith(ln) && (c.push({
            type: 6,
            index: i
          }), r.removeAttribute(u));
          if (kf.test(r.tagName)) {
            const u = r.textContent.split(ln), h = u.length - 1;
            if (h > 0) {
              r.textContent = mo ? mo.emptyScript : "";
              for (let f = 0; f < h; f++) r.append(u[f], ii()), Dn.nextNode(), c.push({
                type: 2,
                index: ++i
              });
              r.append(u[h], ii());
            }
          }
        } else if (r.nodeType === 8) if (r.data === Of) c.push({
          type: 2,
          index: i
        });
        else {
          let u = -1;
          for (; (u = r.data.indexOf(ln, u + 1)) !== -1; ) c.push({
            type: 7,
            index: i
          }), u += ln.length - 1;
        }
        i++;
      }
    }
    static createElement(e, s) {
      const n = jn.createElement("template");
      return n.innerHTML = e, n;
    }
  }
  function Er(t, e, s = t, n) {
    var _a2, _b2;
    if (e === br) return e;
    let r = n !== void 0 ? (_a2 = s._$Co) == null ? void 0 : _a2[n] : s._$Cl;
    const i = oi(e) ? void 0 : e._$litDirective$;
    return (r == null ? void 0 : r.constructor) !== i && ((_b2 = r == null ? void 0 : r._$AO) == null ? void 0 : _b2.call(r, false), i === void 0 ? r = void 0 : (r = new i(t), r._$AT(t, s, n)), n !== void 0 ? (s._$Co ?? (s._$Co = []))[n] = r : s._$Cl = r), r !== void 0 && (e = Er(t, r._$AS(t, e.values), r, n)), e;
  }
  class l_ {
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
      const { el: { content: s }, parts: n } = this._$AD, r = ((e == null ? void 0 : e.creationScope) ?? jn).importNode(s, true);
      Dn.currentNode = r;
      let i = Dn.nextNode(), o = 0, a = 0, c = n[0];
      for (; c !== void 0; ) {
        if (o === c.index) {
          let l;
          c.type === 2 ? l = new Ei(i, i.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(i, c.name, c.strings, this, e) : c.type === 6 && (l = new p_(i, this, e)), this._$AV.push(l), c = n[++a];
        }
        o !== (c == null ? void 0 : c.index) && (i = Dn.nextNode(), o++);
      }
      return Dn.currentNode = jn, r;
    }
    p(e) {
      let s = 0;
      for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, s), s += n.strings.length - 2) : n._$AI(e[s])), s++;
    }
  }
  class Ei {
    get _$AU() {
      var _a2;
      return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
    }
    constructor(e, s, n, r) {
      this.type = 2, this._$AH = Ge, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = n, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? true;
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
      e = Er(this, e, s), oi(e) ? e === Ge || e == null || e === "" ? (this._$AH !== Ge && this._$AR(), this._$AH = Ge) : e !== this._$AH && e !== br && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : a_(e) ? this.k(e) : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
    }
    _(e) {
      this._$AH !== Ge && oi(this._$AH) ? this._$AA.nextSibling.data = e : this.T(jn.createTextNode(e)), this._$AH = e;
    }
    $(e) {
      var _a2;
      const { values: s, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ai.createElement(Pf(n.h, n.h[0]), this.options)), n);
      if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === r) this._$AH.p(s);
      else {
        const i = new l_(r, this), o = i.u(this.options);
        i.p(s), this.T(o), this._$AH = i;
      }
    }
    _$AC(e) {
      let s = Wu.get(e.strings);
      return s === void 0 && Wu.set(e.strings, s = new ai(e)), s;
    }
    k(e) {
      al(this._$AH) || (this._$AH = [], this._$AR());
      const s = this._$AH;
      let n, r = 0;
      for (const i of e) r === s.length ? s.push(n = new Ei(this.O(ii()), this.O(ii()), this, this.options)) : n = s[r], n._$AI(i), r++;
      r < s.length && (this._$AR(n && n._$AB.nextSibling, r), s.length = r);
    }
    _$AR(e = this._$AA.nextSibling, s) {
      var _a2;
      for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s); e !== this._$AB; ) {
        const n = Du(e).nextSibling;
        Du(e).remove(), e = n;
      }
    }
    setConnected(e) {
      var _a2;
      this._$AM === void 0 && (this._$Cv = e, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, e));
    }
  }
  class Do {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, s, n, r, i) {
      this.type = 1, this._$AH = Ge, this._$AN = void 0, this.element = e, this.name = s, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Ge;
    }
    _$AI(e, s = this, n, r) {
      const i = this.strings;
      let o = false;
      if (i === void 0) e = Er(this, e, s, 0), o = !oi(e) || e !== this._$AH && e !== br, o && (this._$AH = e);
      else {
        const a = e;
        let c, l;
        for (e = i[0], c = 0; c < i.length - 1; c++) l = Er(this, a[n + c], s, c), l === br && (l = this._$AH[c]), o || (o = !oi(l) || l !== this._$AH[c]), l === Ge ? e = Ge : e !== Ge && (e += (l ?? "") + i[c + 1]), this._$AH[c] = l;
      }
      o && !r && this.j(e);
    }
    j(e) {
      e === Ge ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class d_ extends Do {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(e) {
      this.element[this.name] = e === Ge ? void 0 : e;
    }
  }
  class u_ extends Do {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== Ge);
    }
  }
  class h_ extends Do {
    constructor(e, s, n, r, i) {
      super(e, s, n, r, i), this.type = 5;
    }
    _$AI(e, s = this) {
      if ((e = Er(this, e, s, 0) ?? Ge) === br) return;
      const n = this._$AH, r = e === Ge && n !== Ge || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== Ge && (n === Ge || r);
      r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      var _a2;
      typeof this._$AH == "function" ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, e) : this._$AH.handleEvent(e);
    }
  }
  class p_ {
    constructor(e, s, n) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = n;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      Er(this, e);
    }
  }
  const f_ = ol.litHtmlPolyfillSupport;
  f_ == null ? void 0 : f_(ai, Ei), (ol.litHtmlVersions ?? (ol.litHtmlVersions = [])).push("3.3.2");
  const g_ = (t, e, s) => {
    const n = (s == null ? void 0 : s.renderBefore) ?? e;
    let r = n._$litPart$;
    if (r === void 0) {
      const i = (s == null ? void 0 : s.renderBefore) ?? null;
      n._$litPart$ = r = new Ei(e.insertBefore(ii(), i), i, void 0, s ?? {});
    }
    return r._$AI(t), r;
  };
  const cl = globalThis;
  Ji = class extends ir {
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
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = g_(s, this.renderRoot, this.renderOptions);
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
      return br;
    }
  };
  Ji._$litElement$ = true, Ji.finalized = true, (_d2 = cl.litElementHydrateSupport) == null ? void 0 : _d2.call(cl, {
    LitElement: Ji
  });
  const m_ = cl.litElementPolyfillSupport;
  m_ == null ? void 0 : m_({
    LitElement: Ji
  });
  (cl.litElementVersions ?? (cl.litElementVersions = [])).push("4.2.2");
  const w_ = {
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
  }, wo = {
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
  }, y_ = {
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
  }, b_ = {
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
  }, E_ = {
    regular: "KHTeka",
    mono: "KHTekaMono"
  }, C_ = {
    regular: "400",
    medium: "500"
  }, v_ = {
    h1: "50px",
    h2: "44px",
    h3: "38px",
    h4: "32px",
    h5: "26px",
    h6: "20px",
    large: "16px",
    medium: "14px",
    small: "12px"
  }, A_ = {
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
  }, I_ = {
    "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
    "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
    "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
    "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
    "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
    "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
  }, N_ = {
    xl: "400ms",
    lg: "200ms",
    md: "125ms",
    sm: "75ms"
  }, Cc = {
    colors: w_,
    fontFamily: E_,
    fontWeight: C_,
    textSize: v_,
    typography: A_,
    tokens: {
      core: wo.core,
      theme: wo.dark
    },
    borderRadius: y_,
    spacing: b_,
    durations: N_,
    easings: I_
  }, ju = "--apkt";
  function Mi(t) {
    if (!t) return {};
    const e = {};
    return e["font-family"] = t["--apkt-font-family"] ?? t["--w3m-font-family"] ?? "KHTeka", e.accent = t["--apkt-accent"] ?? t["--w3m-accent"] ?? "#0988F0", e["color-mix"] = t["--apkt-color-mix"] ?? t["--w3m-color-mix"] ?? "#000", e["color-mix-strength"] = t["--apkt-color-mix-strength"] ?? t["--w3m-color-mix-strength"] ?? 0, e["font-size-master"] = t["--apkt-font-size-master"] ?? t["--w3m-font-size-master"] ?? "10px", e["border-radius-master"] = t["--apkt-border-radius-master"] ?? t["--w3m-border-radius-master"] ?? "4px", t["--apkt-z-index"] !== void 0 ? e["z-index"] = t["--apkt-z-index"] : t["--w3m-z-index"] !== void 0 && (e["z-index"] = t["--w3m-z-index"]), e;
  }
  let $s;
  $s = {
    createCSSVariables(t) {
      const e = {}, s = {};
      function n(i, o, a = "") {
        for (const [c, l] of Object.entries(i)) {
          const d = a ? `${a}-${c}` : c;
          l && typeof l == "object" && Object.keys(l).length ? (o[c] = {}, n(l, o[c], d)) : typeof l == "string" && (o[c] = `${ju}-${d}`);
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
          c && typeof c == "object" ? n(c, d, l) : typeof d == "string" && (s[`${ju}-${l}`] = d);
        }
      }
      return n(t, e), s;
    },
    createRootStyles(t, e) {
      const s = {
        ...Cc,
        tokens: {
          ...Cc.tokens,
          theme: t === "light" ? wo.light : wo.dark
        }
      }, { cssVariables: n } = $s.createCSSVariables(s), r = $s.assignCSSVariables(n, s), i = $s.generateW3MVariables(e), o = $s.generateW3MOverrides(e), a = $s.generateScaledVariables(e), c = $s.generateBaseVariables(r), l = {
        ...r,
        ...c,
        ...i,
        ...o,
        ...a
      }, d = $s.applyColorMixToVariables(e, l), u = {
        ...l,
        ...d
      };
      return `:root {${Object.entries(u).map(([f, g]) => `${f}:${g.replace("/[:;{}</>]/g", "")};`).join("")}}`;
    },
    generateW3MVariables(t) {
      if (!t) return {};
      const e = Mi(t), s = {};
      return s["--w3m-font-family"] = e["font-family"], s["--w3m-accent"] = e.accent, s["--w3m-color-mix"] = e["color-mix"], s["--w3m-color-mix-strength"] = `${e["color-mix-strength"]}%`, s["--w3m-font-size-master"] = e["font-size-master"], s["--w3m-border-radius-master"] = e["border-radius-master"], s;
    },
    generateW3MOverrides(t) {
      if (!t) return {};
      const e = Mi(t), s = {};
      if (t["--apkt-accent"] || t["--w3m-accent"]) {
        const n = e.accent;
        s["--apkt-tokens-core-iconAccentPrimary"] = n, s["--apkt-tokens-core-borderAccentPrimary"] = n, s["--apkt-tokens-core-textAccentPrimary"] = n, s["--apkt-tokens-core-backgroundAccentPrimary"] = n;
      }
      return (t["--apkt-font-family"] || t["--w3m-font-family"]) && (s["--apkt-fontFamily-regular"] = e["font-family"]), e["z-index"] !== void 0 && (s["--apkt-tokens-core-zIndex"] = `${e["z-index"]}`), s;
    },
    generateScaledVariables(t) {
      if (!t) return {};
      const e = Mi(t), s = {};
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
      const n = Mi(t), r = n["color-mix"], i = n["color-mix-strength"];
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
  ({ cssVariablesVarPrefix: S_ } = $s.createCSSVariables(Cc));
  fT = function(t, ...e) {
    return cn(t, ...e.map((s) => rs(typeof s == "function" ? s(S_) : s)));
  };
  let On, Bn, Es, os, yo;
  const Ps = {
    "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
    "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
    "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
    "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
    "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
    "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
  };
  function bo(t, e = "dark") {
    On && document.head.removeChild(On), On = document.createElement("style"), On.textContent = $s.createRootStyles(e, t), document.head.appendChild(On);
  }
  gT = function(t, e = "dark") {
    if (yo = t, Bn = document.createElement("style"), Es = document.createElement("style"), os = document.createElement("style"), Bn.textContent = mr(t).core.cssText, Es.textContent = mr(t).dark.cssText, os.textContent = mr(t).light.cssText, document.head.appendChild(Bn), document.head.appendChild(Es), document.head.appendChild(os), bo(t, e), vc(e), !((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]))) for (const [n, r] of Object.entries(Ps)) {
      const i = document.createElement("link");
      i.rel = "preload", i.href = r, i.as = "font", i.type = n.includes("woff2") ? "font/woff2" : "font/woff", i.crossOrigin = "anonymous", document.head.appendChild(i);
    }
    vc(e);
  };
  function vc(t = "dark") {
    Es && os && On && (t === "light" ? (bo(yo, t), Es.removeAttribute("media"), os.media = "enabled") : (bo(yo, t), os.removeAttribute("media"), Es.media = "enabled"));
  }
  function __(t) {
    var _a2, _b2, _c2;
    if (yo = t, Bn && Es && os) {
      Bn.textContent = mr(t).core.cssText, Es.textContent = mr(t).dark.cssText, os.textContent = mr(t).light.cssText;
      const e = (t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]);
      e && (Bn.textContent = (_a2 = Bn.textContent) == null ? void 0 : _a2.replace("font-family: KHTeka", `font-family: ${e}`), Es.textContent = (_b2 = Es.textContent) == null ? void 0 : _b2.replace("font-family: KHTeka", `font-family: ${e}`), os.textContent = (_c2 = os.textContent) == null ? void 0 : _c2.replace("font-family: KHTeka", `font-family: ${e}`));
    }
    if (On) {
      const e = (os == null ? void 0 : os.media) === "enabled" ? "light" : "dark";
      bo(t, e);
    }
  }
  function mr(t) {
    const e = !!((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]));
    return {
      core: cn`
      ${e ? cn`` : cn`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${rs(Ps["KHTeka-400-woff2"])}) format('woff2'),
                url(${rs(Ps["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${rs(Ps["KHTeka-300-woff2"])}) format('woff2'),
                url(${rs(Ps["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${rs(Ps["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${rs(Ps["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${rs(Ps["KHTeka-400-woff2"])}) format('woff2'),
                url(${rs(Ps["KHTeka-400-woff"])}) format('woff');
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
      dark: cn`
      :root {
      }
    `,
      light: cn`
      :root {
      }
    `
    };
  }
  let Rs, T_, O_, jt, Rf, k_, x_;
  mT = cn`
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
  wT = cn`
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
  Rs = {
    EIP155: P.CHAIN.EVM,
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH"
  };
  T_ = {
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
  Ac = {
    getCaipTokens(t) {
      if (!t) return;
      const e = {};
      return Object.entries(t).forEach(([s, n]) => {
        e[`${Rs.EIP155}:${s}`] = n;
      }), e;
    },
    isLowerCaseMatch(t, e) {
      return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
    },
    getActiveNamespaceConnectedToAuth() {
      const t = m.state.activeChain;
      return P.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e) => q.getConnectorId(e) === P.CONNECTOR_ID.AUTH && e === t);
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
      if (typeof t == "number") return P.CHAIN.EVM;
      const [e] = t.split(":");
      return e;
    },
    getOtherAuthNamespaces(t) {
      return t ? P.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((n) => n !== t) : [];
    },
    getConnectorStorageInfo(t, e) {
      const n = L.getConnections()[e] ?? [];
      return {
        hasDisconnected: L.isConnectorDisconnected(t, e),
        hasConnected: n.some((r) => Ac.isLowerCaseMatch(r.connectorId, t))
      };
    }
  };
  O_ = new AbortController();
  jt = {
    EmbeddedWalletAbortController: O_,
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
        debugMessage: () => `The origin ${Lr() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${U.state.projectId}]`
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
  Rf = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
      USDC: {
        8453: YS.asset,
        84532: JS.asset
      }
    },
    getTokenSymbolByAddress(t) {
      if (!t) return;
      const [e] = Object.entries(Rf.TOKEN_ADDRESSES_BY_SYMBOL).find(([s, n]) => Object.values(n).includes(t)) ?? [];
      return e;
    }
  };
  k_ = {
    createLogger(t, e = "error") {
      const s = Ku({
        level: e
      }), { logger: n } = Ic({
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
  x_ = "rpc.walletconnect.org";
  function Hu(t, e) {
    const s = new URL("https://rpc.walletconnect.org/v1/");
    return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
  }
  let _a;
  _a = [
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
  or = {
    extendRpcUrlWithProjectId(t, e) {
      let s = false;
      try {
        s = new URL(t).host === x_;
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
      return this.isCaipNetwork(t) ? t.chainNamespace : P.CHAIN.EVM;
    },
    getCaipNetworkId(t) {
      return this.isCaipNetwork(t) ? t.caipNetworkId : `${P.CHAIN.EVM}:${t.id}`;
    },
    getDefaultRpcUrl(t, e, s) {
      var _a2, _b2, _c2;
      const n = (_c2 = (_b2 = (_a2 = t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0];
      return _a.includes(e) ? Hu(e, s) : n || "";
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
          imageId: T_.NetworkImageIds[t.id],
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
      return t.map((r) => or.extendCaipNetwork(r, {
        customNetworkImageUrls: e,
        customRpcUrls: n,
        projectId: s
      }));
    },
    getViemTransport(t, e, s) {
      var _a2, _b2, _c2;
      const n = [];
      return s == null ? void 0 : s.forEach((r) => {
        n.push(vi(r.url, r.config));
      }), _a.includes(t.caipNetworkId) && n.push(vi(Hu(t.caipNetworkId, e), {
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      })), (_c2 = (_b2 = (_a2 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2.forEach((r) => {
        n.push(vi(r));
      }), pl(n);
    },
    extendWagmiTransports(t, e, s) {
      if (_a.includes(t.caipNetworkId)) {
        const n = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
        return pl([
          s,
          vi(n)
        ]);
      }
      return s;
    },
    getUnsupportedNetwork(t) {
      return {
        id: t.split(":")[1],
        caipNetworkId: t,
        name: P.UNSUPPORTED_NETWORK_NAME,
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
      const e = L.getActiveCaipNetworkId(), s = m.getAllRequestedCaipNetworks(), n = Array.from(((_a2 = m.state.chains) == null ? void 0 : _a2.keys()) || []), r = e == null ? void 0 : e.split(":")[0], i = r ? n.includes(r) : false, o = s == null ? void 0 : s.find((c) => c.caipNetworkId === e);
      return i && !o && e ? this.getUnsupportedNetwork(e) : o || t || (s == null ? void 0 : s[0]);
    }
  };
  function P_(t) {
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
        let I = l[h], v = 0;
        for (let b = g - 1; (I !== 0 || v < u) && b !== -1; b--, v++) I += 256 * p[b] >>> 0, p[b] = I % s >>> 0, I = I / s >>> 0;
        if (I !== 0) throw new Error("Non-zero carry");
        u = v, h++;
      }
      let w = g - u;
      for (; w !== g && p[w] === 0; ) w++;
      let A = n.repeat(d);
      for (; w < g; ++w) A += t.charAt(p[w]);
      return A;
    }
    function a(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let d = 0, u = 0, h = 0;
      for (; l[d] === n; ) u++, d++;
      const f = (l.length - d) * r + 1 >>> 0, g = new Uint8Array(f);
      for (; d < l.length; ) {
        const I = l.charCodeAt(d);
        if (I > 255) return;
        let v = e[I];
        if (v === 255) return;
        let b = 0;
        for (let T = f - 1; (v !== 0 || b < h) && T !== -1; T--, b++) v += s * g[T] >>> 0, g[T] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0) throw new Error("Non-zero carry");
        h = b, d++;
      }
      let p = f - h;
      for (; p !== f && g[p] === 0; ) p++;
      const w = new Uint8Array(u + (f - p));
      let A = u;
      for (; p !== f; ) w[A++] = g[p++];
      return w;
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
  var R_ = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const U_ = P_(R_), Fi = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603
  };
  class $_ extends zS {
    async setUniversalProvider(e) {
      if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
      return this.addConnector(new VS({
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
        accounts: n.map((r) => Y.createAccount(e, r, e === "bip122" ? "payment" : "eoa"))
      });
    }
    async syncConnectors() {
      return Promise.resolve();
    }
    async getBalance(e) {
      var _a2, _b2, _c2, _d3, _e2;
      if (!(e.caipNetwork && he.BALANCE_SUPPORTED_CHAINS.includes((_a2 = e.caipNetwork) == null ? void 0 : _a2.chainNamespace)) || ((_b2 = e.caipNetwork) == null ? void 0 : _b2.testnet)) return {
        balance: "0.00",
        symbol: ((_c2 = e.caipNetwork) == null ? void 0 : _c2.nativeCurrency.symbol) || ""
      };
      const n = m.getAccountData();
      if ((n == null ? void 0 : n.balanceLoading) && e.chainId === ((_d3 = m.state.activeCaipNetwork) == null ? void 0 : _d3.id)) return {
        balance: (n == null ? void 0 : n.balance) || "0.00",
        symbol: (n == null ? void 0 : n.balanceSymbol) || ""
      };
      const i = (await m.fetchTokenBalance()).find((o) => {
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
      return ((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) === P.CHAIN.SOLANA ? i = (await s.request({
        method: "solana_signMessage",
        params: {
          message: U_.encode(new TextEncoder().encode(n)),
          pubkey: r
        }
      }, (_b2 = m.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId)).signature : i = await s.request({
        method: "personal_sign",
        params: [
          n,
          r
        ]
      }, (_c2 = m.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId), {
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
      if (s.chainNamespace === P.CHAIN.EVM) try {
        await ((_a2 = n.provider) == null ? void 0 : _a2.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: hl(s.id)
            }
          ]
        }));
      } catch (r) {
        if (r.code === Fi.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === Fi.ERROR_INVALID_CHAIN_ID || r.code === Fi.ERROR_CODE_DEFAULT || ((_c2 = (_b2 = r == null ? void 0 : r.data) == null ? void 0 : _b2.originalError) == null ? void 0 : _c2.code) === Fi.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
          await ((_f2 = n.provider) == null ? void 0 : _f2.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: hl(s.id),
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
  const D_ = [
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
  ], qi = {
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
      processFallback: (t) => t === void 0 ? he.DEFAULT_REMOTE_FEATURES.email : !!t
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
      processFallback: (t) => t === void 0 ? he.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? he.DEFAULT_REMOTE_FEATURES.socials : false : t
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
      processFallback: (t) => t === void 0 ? he.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? he.DEFAULT_REMOTE_FEATURES.swaps : false : t
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
      processFallback: (t) => t === void 0 ? he.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? he.DEFAULT_REMOTE_FEATURES.onramp : false : t
    },
    activity: {
      apiFeatureName: "activity",
      localFeatureName: "history",
      returnType: false,
      isLegacy: true,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? he.DEFAULT_REMOTE_FEATURES.activity : !!t
    },
    reownBranding: {
      apiFeatureName: "reown_branding",
      localFeatureName: "reownBranding",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => t === void 0 ? he.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
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
      processFallback: () => he.DEFAULT_REMOTE_FEATURES.multiWallet
    },
    payWithExchange: {
      apiFeatureName: "fund_from_exchange",
      localFeatureName: "payWithExchange",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => he.DEFAULT_REMOTE_FEATURES.payWithExchange
    },
    payments: {
      apiFeatureName: "payments",
      localFeatureName: "payments",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => he.DEFAULT_REMOTE_FEATURES.payments
    },
    reownAuthentication: {
      apiFeatureName: "reown_authentication",
      localFeatureName: "reownAuthentication",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: (t) => typeof t > "u" ? he.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!t
    },
    headless: {
      apiFeatureName: "headless",
      localFeatureName: "headless",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (t) => !!t.isEnabled,
      processFallback: () => he.DEFAULT_REMOTE_FEATURES.headless
    }
  }, B_ = {
    localSettingsOverridden: /* @__PURE__ */ new Set(),
    getApiConfig(t, e) {
      return e == null ? void 0 : e.find((s) => s.id === t);
    },
    addWarning(t, e) {
      if (t !== void 0) {
        const s = qi[e], n = s.isLegacy ? `"features.${s.localFeatureName}" (now "${e}")` : `"features.${e}"`;
        this.localSettingsOverridden.add(n);
      }
    },
    processFeature(t, e, s, n, r) {
      const i = qi[t], o = e[i.localFeatureName];
      if (r && !i.isAvailableOnBasic) return false;
      if (n) {
        const a = this.getApiConfig(i.apiFeatureName, s);
        return (a == null ? void 0 : a.config) === null ? this.processFallbackFeature(t, o) : (a == null ? void 0 : a.config) ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, a)) : false;
      }
      return this.processFallbackFeature(t, o);
    },
    processApiFeature(t, e) {
      return qi[t].processApi(e);
    },
    processFallbackFeature(t, e) {
      return qi[t].processFallback(e);
    },
    async fetchRemoteFeatures(t) {
      const e = t.basic ?? false, s = t.features || {};
      this.localSettingsOverridden.clear();
      let n = null, r = false;
      try {
        n = await Z.fetchProjectConfig(), r = n != null;
      } catch (o) {
        console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
      }
      const i = r && !e ? he.DEFAULT_REMOTE_FEATURES : he.DEFAULT_REMOTE_FEATURES_DISABLED;
      try {
        for (const o of D_) {
          const a = this.processFeature(o, s, n, r, e);
          Object.assign(i, {
            [o]: a
          });
        }
      } catch (o) {
        return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), he.DEFAULT_REMOTE_FEATURES;
      }
      if (r && this.localSettingsOverridden.size > 0) {
        const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
        kt.open({
          debugMessage: jt.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
        }, "warning");
      }
      return i;
    }
  };
  class L_ {
    constructor(e) {
      this.chainNamespaces = [], this.features = {}, this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (s, n) => {
        var _a2, _b2, _c2;
        if (s) {
          const r = (_a2 = m.getCaipNetworks(s)) == null ? void 0 : _a2.find((a) => a.id === n);
          if (r) return r;
          const i = (_b2 = m.getNetworkData(s)) == null ? void 0 : _b2.caipNetwork;
          return i || ((_c2 = m.getRequestedCaipNetworks(s).filter((a) => a.chainNamespace === s)) == null ? void 0 : _c2[0]);
        }
        return m.state.activeCaipNetwork || this.defaultCaipNetwork;
      }, this.getCaipNetworkId = () => {
        const s = this.getCaipNetwork();
        if (s) return s.id;
      }, this.getCaipNetworks = (s) => m.getCaipNetworks(s), this.getActiveChainNamespace = () => m.state.activeChain, this.setRequestedCaipNetworks = (s, n) => {
        m.setRequestedCaipNetworks(s, n);
      }, this.getApprovedCaipNetworkIds = () => m.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (s) => {
        var _a2, _b2;
        return m.state.activeChain === s || !s ? m.state.activeCaipAddress : (_b2 = (_a2 = m.state.chains.get(s)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress;
      }, this.setClientId = (s) => {
        re.setClientId(s);
      }, this.getProvider = (s) => xe.getProvider(s), this.getProviderType = (s) => xe.getProviderId(s), this.getPreferredAccountType = (s) => Jt(s), this.setCaipAddress = (s, n, r = false) => {
        m.setAccountProp("caipAddress", s, n, r), m.setAccountProp("address", Y.getPlainAddress(s), n, r);
      }, this.setBalance = (s, n, r) => {
        m.setAccountProp("balance", s, r), m.setAccountProp("balanceSymbol", n, r);
      }, this.setProfileName = (s, n) => {
        m.setAccountProp("profileName", s, n);
      }, this.setProfileImage = (s, n) => {
        m.setAccountProp("profileImage", s, n);
      }, this.setUser = (s, n) => {
        m.setAccountProp("user", s, n);
      }, this.resetAccount = (s) => {
        m.resetAccount(s);
      }, this.setCaipNetwork = (s) => {
        m.setActiveCaipNetwork(s);
      }, this.setCaipNetworkOfNamespace = (s, n) => {
        m.setChainNetworkData(n, {
          caipNetwork: s
        });
      }, this.setStatus = (s, n) => {
        m.setAccountProp("status", s, n), q.isConnected() ? L.setConnectionStatus("connected") : L.setConnectionStatus("disconnected");
      }, this.getAddressByChainNamespace = (s) => {
        var _a2;
        return (_a2 = m.getAccountData(s)) == null ? void 0 : _a2.address;
      }, this.setConnectors = (s) => {
        const n = [
          ...q.state.allConnectors,
          ...s
        ];
        q.setConnectors(n);
      }, this.setConnections = (s, n) => {
        L.setConnections(s, n), z.setConnections(s, n);
      }, this.fetchIdentity = (s) => re.fetchIdentity(s), this.getReownName = (s) => Gr.getNamesForAddress(s), this.getConnectors = () => q.getConnectors(), this.getConnectorImage = (s) => eo.getConnectorImage(s), this.getConnections = (s) => this.remoteFeatures.multiWallet ? to.getConnectionsData(s).connections : (kt.open(P.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (s) => this.remoteFeatures.multiWallet ? to.getConnectionsData(s).recentConnections : (kt.open(P.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (s) => {
        if (!this.remoteFeatures.multiWallet) {
          kt.open(P.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        await z.switchConnection(s);
      }, this.deleteConnection = (s) => {
        if (!this.remoteFeatures.multiWallet) {
          kt.open(P.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        L.deleteAddressFromConnection(s), z.syncStorageConnections();
      }, this.setConnectedWalletInfo = (s, n) => {
        const r = xe.getProviderId(n), i = s ? {
          ...s,
          type: r
        } : void 0;
        m.setAccountProp("connectedWalletInfo", i, n);
      }, this.getIsConnectedState = () => !!m.state.activeCaipAddress, this.addAddressLabel = (s, n, r) => {
        var _a2;
        const i = ((_a2 = m.getAccountData(r)) == null ? void 0 : _a2.addressLabels) || {};
        m.setAccountProp("addressLabels", {
          ...i,
          [s]: n
        }, r);
      }, this.removeAddressLabel = (s, n) => {
        var _a2;
        const r = ((_a2 = m.getAccountData(n)) == null ? void 0 : _a2.addressLabels) || {};
        m.setAccountProp("addressLabels", {
          ...r,
          [s]: void 0
        }, n);
      }, this.getAddress = (s) => {
        var _a2;
        const n = s || m.state.activeChain;
        return (_a2 = m.getAccountData(n)) == null ? void 0 : _a2.address;
      }, this.resetNetwork = (s) => {
        m.resetNetwork(s);
      }, this.addConnector = (s) => {
        q.addConnector(s);
      }, this.resetWcConnection = () => {
        z.resetWcConnection();
      }, this.setAddressExplorerUrl = (s, n) => {
        m.setAccountProp("addressExplorerUrl", s, n);
      }, this.setSmartAccountDeployed = (s, n) => {
        m.setAccountProp("smartAccountDeployed", s, n);
      }, this.setPreferredAccountType = (s, n) => {
        m.setAccountProp("preferredAccountType", s, n);
      }, this.setEIP6963Enabled = (s) => {
        U.setEIP6963Enabled(s);
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
      if (this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), ((_a2 = e.features) == null ? void 0 : _a2.headless) && !ht.hasInjectedConnectors() && Z.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false,
        fetchRecommendedWallets: true
      }), U.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), !e.basic && !e.manualWCControl && (this.remoteFeatures = await B_.fetchRemoteFeatures(e)), await Z.fetchUsage(), U.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && $a.setOnrampProviders(this.remoteFeatures.onramp), (((_b2 = U.state.remoteFeatures) == null ? void 0 : _b2.email) || Array.isArray((_c2 = U.state.remoteFeatures) == null ? void 0 : _c2.socials) && ((_d3 = U.state.remoteFeatures) == null ? void 0 : _d3.socials.length) > 0) && await this.checkAllowedOrigins(), ((_e2 = U.state.features) == null ? void 0 : _e2.reownAuthentication) || ((_f2 = U.state.remoteFeatures) == null ? void 0 : _f2.reownAuthentication)) {
        const { ReownAuthentication: s } = await Zi(async () => {
          const { ReownAuthentication: r } = await import("./features-CCJpsT7n.js");
          return {
            ReownAuthentication: r
          };
        }, __vite__mapDeps([4,1,2])), n = U.state.siwx;
        n instanceof s || (n && console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden."), U.setSIWX(new s()));
      }
    }
    async openSend(e) {
      var _a2;
      const s = e.namespace || m.state.activeChain, n = this.getCaipAddress(s), r = (_a2 = this.getCaipNetwork(s)) == null ? void 0 : _a2.id;
      if (!n) throw new Error("openSend: caipAddress not found");
      if ((r == null ? void 0 : r.toString()) !== e.chainId.toString()) {
        const i = m.getCaipNetworkById(e.chainId, s);
        if (!i) throw new Error(`openSend: caipNetwork with chainId ${e.chainId} not found`);
        await this.switchNetwork(i, {
          throwOnFailure: true
        });
      }
      try {
        const i = Rf.getTokenSymbolByAddress(e.assetAddress);
        i && await Z.fetchTokenImages([
          i
        ]);
      } catch {
      }
      return await pe.open({
        view: "WalletSend",
        data: {
          send: e
        }
      }), new Promise((i, o) => {
        const a = ue.subscribeKey("hash", (d) => {
          d && (l(), i({
            hash: d
          }));
        }), c = pe.subscribe((d) => {
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
        const e = await Z.fetchAllowedOrigins();
        if (!Y.isClient()) return;
        const s = window.location.origin;
        pn.isOriginAllowed(s, e, P.DEFAULT_ALLOWED_ANCESTORS) || kt.open(jt.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      } catch (e) {
        if (!(e instanceof Error)) return;
        switch (e.message) {
          case "RATE_LIMITED":
            kt.open(jt.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
            break;
          case "SERVER_ERROR": {
            const s = e.cause instanceof Error ? e.cause : e;
            kt.open({
              displayMessage: jt.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
              debugMessage: jt.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(s.message)
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
      delete s.adapters, delete s.universalProvider, de.sendEvent({
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
      ch.initialize(this.chainAdapters);
    }
    initializeThemeController(e) {
      e.themeMode && Pt.setThemeMode(e.themeMode), e.themeVariables && Pt.setThemeVariables(e.themeVariables);
    }
    initializeChainController(e) {
      if (!this.connectionControllerClient) throw new Error("ConnectionControllerClient must be set");
      m.initialize(e.adapters ?? [], this.caipNetworks, {
        connectionControllerClient: this.connectionControllerClient
      });
      const s = this.getDefaultNetwork();
      s && m.setActiveCaipNetwork(s);
    }
    initializeConnectionController(e) {
      z.initialize(e.adapters ?? []), z.setWcBasic(e.basic ?? false);
    }
    initializeConnectorController() {
      q.initialize(this.chainNamespaces);
    }
    initializeProjectSettings(e) {
      U.setProjectId(e.projectId), U.setSdkVersion(e.sdkVersion);
    }
    initializeOptionsController(e) {
      var _a2;
      U.setDebug(e.debug !== false), U.setEnableWalletGuide(e.enableWalletGuide !== false), U.setEnableWallets(e.enableWallets !== false), U.setEIP6963Enabled(e.enableEIP6963 !== false), U.setEnableNetworkSwitch(e.enableNetworkSwitch !== false), U.setEnableReconnect(e.enableReconnect !== false), U.setEnableMobileFullScreen(e.enableMobileFullScreen === true), U.setCoinbasePreference(e.coinbasePreference), U.setEnableAuthLogger(e.enableAuthLogger !== false), U.setCustomRpcUrls(e.customRpcUrls), U.setEnableEmbedded(e.enableEmbedded), U.setAllWallets(e.allWallets), U.setIncludeWalletIds(e.includeWalletIds), U.setExcludeWalletIds(e.excludeWalletIds), U.setFeaturedWalletIds(e.featuredWalletIds), U.setTokens(e.tokens), U.setTermsConditionsUrl(e.termsConditionsUrl), U.setPrivacyPolicyUrl(e.privacyPolicyUrl), U.setCustomWallets(e.customWallets), U.setFeatures(e.features), U.setAllowUnsupportedChain(e.allowUnsupportedChain), U.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), U.setPreferUniversalLinks(e.experimental_preferUniversalLinks), U.setDefaultAccountTypes(e.defaultAccountTypes);
      const s = this.getDefaultMetaData();
      if (!e.metadata && s && (e.metadata = s), U.setMetadata(e.metadata), U.setDisableAppend(e.disableAppend), U.setEnableEmbedded(e.enableEmbedded), U.setSIWX(e.siwx), this.features = U.state.features ?? {}, !e.projectId) {
        kt.open(jt.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
        return;
      }
      if (((_a2 = e.adapters) == null ? void 0 : _a2.find((r) => r.namespace === P.CHAIN.EVM)) && e.siweConfig) {
        if (e.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
        U.setSIWX(e.siweConfig.mapToSIWX());
      }
    }
    getDefaultMetaData() {
      var _a2, _b2, _c2, _d3;
      return Y.isClient() ? {
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
        const n = or.getUnsupportedNetwork(`${s}:${e}`);
        m.setActiveCaipNetwork(n);
      }
    }
    getDefaultNetwork() {
      return or.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(e, s) {
      return or.extendCaipNetwork(e, {
        customNetworkImageUrls: s.chainImages,
        projectId: s.projectId
      });
    }
    extendCaipNetworks(e) {
      return or.extendCaipNetworks(e.networks, {
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
      return s ? or.extendCaipNetwork(s, {
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
        return (((_b2 = (_a2 = m.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.caipAddress) || !U.state.enableReconnect) && (r == null ? void 0 : r.disconnect) && (n = await r.disconnect({
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
          const e = m.state.activeChain, s = this.getAdapter(e), n = (_a2 = this.getCaipNetwork(e)) == null ? void 0 : _a2.id, r = z.getConnections(e), i = this.remoteFeatures.multiWallet, o = r.length > 0;
          if (!s) throw new Error("Adapter not found");
          const a = await s.connectWalletConnect(n);
          (!o || !i) && this.close(), this.setClientId((a == null ? void 0 : a.clientId) || null), L.setConnectedNamespaces([
            ...m.state.chains.keys()
          ]), await this.syncWalletConnectAccount(), await is.initializeIfEnabled();
        },
        connectExternal: async (e) => {
          const s = await this.onConnectExternal(e);
          return await this.connectInactiveNamespaces(e, s), s ? {
            address: s.address
          } : void 0;
        },
        reconnectExternal: async ({ id: e, info: s, type: n, provider: r }) => {
          var _a2;
          const i = m.state.activeChain, o = this.getAdapter(i);
          if (!i) throw new Error("reconnectExternal: namespace not found");
          if (!o) throw new Error("reconnectExternal: adapter not found");
          (o == null ? void 0 : o.reconnect) && (await (o == null ? void 0 : o.reconnect({
            id: e,
            info: s,
            type: n,
            provider: r,
            chainId: (_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id
          })), L.addConnectedNamespace(i), this.syncConnectedWalletInfo(i));
        },
        disconnectConnector: async (e) => {
          await this.disconnectConnector(e.namespace, e.id);
        },
        disconnect: async (e) => {
          var _a2;
          const { id: s, chainNamespace: n, initialDisconnect: r } = e || {}, i = n || m.state.activeChain, o = q.getConnectorId(i), a = s === P.CONNECTOR_ID.AUTH || o === P.CONNECTOR_ID.AUTH, c = s === P.CONNECTOR_ID.WALLET_CONNECT || o === P.CONNECTOR_ID.WALLET_CONNECT;
          try {
            const l = Array.from(m.state.chains.keys());
            let d = n ? [
              n
            ] : l;
            (c || a) && (d = l);
            const u = d.map(async (g) => {
              const p = q.getConnectorId(g), w = s || p, A = await this.disconnectConnector(g, w);
              A && (a && L.deleteConnectedSocialProvider(), A.connections.forEach((I) => {
                L.addDisconnectedConnectorId(I.connectorId, g);
              })), r && this.onDisconnectNamespace({
                chainNamespace: g,
                closeModal: false
              });
            }), h = await Promise.allSettled(u);
            ue.resetSend(), z.resetWcConnection(), ((_a2 = is.getSIWX()) == null ? void 0 : _a2.signOutOnDisconnect) && await is.clearSessions(), q.setFilterByNamespace(void 0), z.syncStorageConnections();
            const f = h.filter((g) => g.status === "rejected");
            if (f.length > 0) throw new Error(f.map((g) => g.reason.message).join(", "));
            de.sendEvent({
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
          const s = m.state.activeChain, n = this.getAdapter(m.state.activeChain);
          if (!s) throw new Error("signMessage: namespace not found");
          if (!n) throw new Error("signMessage: adapter not found");
          const r = this.getAddress(s);
          if (!r) throw new Error("signMessage: address not found");
          return ((_a2 = await (n == null ? void 0 : n.signMessage({
            message: e,
            address: r,
            provider: xe.getProvider(s)
          }))) == null ? void 0 : _a2.signature) || "";
        },
        sendTransaction: async (e) => {
          var _a2;
          const s = e.chainNamespace;
          if (!s) throw new Error("sendTransaction: namespace not found");
          if (he.SEND_SUPPORTED_NAMESPACES.includes(s)) {
            const n = this.getAdapter(s);
            if (!n) throw new Error("sendTransaction: adapter not found");
            const r = xe.getProvider(s);
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
          if (s === P.CHAIN.EVM) {
            const n = this.getAdapter(s);
            if (!n) throw new Error("estimateGas: adapter is required but got undefined");
            const r = xe.getProvider(s), i = this.getCaipNetwork();
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
          const e = m.state.activeChain;
          if (!e) throw new Error("getEnsAvatar: namespace is required but got undefined");
          const s = this.getAddress(e);
          if (!s) throw new Error("getEnsAvatar: address not found");
          return await this.syncIdentity({
            address: s,
            chainId: Number((_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id),
            chainNamespace: e
          }), ((_b2 = m.getAccountData()) == null ? void 0 : _b2.profileImage) || false;
        },
        getEnsAddress: async (e) => await pn.resolveReownName(e),
        writeContract: async (e) => {
          var _a2;
          const s = m.state.activeChain, n = this.getAdapter(s);
          if (!s) throw new Error("writeContract: namespace is required but got undefined");
          if (!n) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = xe.getProvider(s);
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
          const s = m.state.activeChain, n = this.getAdapter(s);
          if (!s) throw new Error("writeContract: namespace is required but got undefined");
          if (!n) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), i = this.getCaipAddress(), o = xe.getProvider(s);
          if (!r || !i) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (n == null ? void 0 : n.writeSolanaTransaction({
            ...e,
            caipNetwork: r,
            provider: o,
            caipAddress: i
          }))) == null ? void 0 : _a2.hash;
        },
        parseUnits: (e, s) => {
          const n = this.getAdapter(m.state.activeChain);
          if (!n) throw new Error("parseUnits: adapter is required but got undefined");
          return (n == null ? void 0 : n.parseUnits({
            value: e,
            decimals: s
          })) ?? 0n;
        },
        formatUnits: (e, s) => {
          const n = this.getAdapter(m.state.activeChain);
          if (!n) throw new Error("formatUnits: adapter is required but got undefined");
          return (n == null ? void 0 : n.formatUnits({
            value: e,
            decimals: s
          })) ?? "0";
        },
        getCapabilities: async (e) => {
          const s = this.getAdapter(m.state.activeChain);
          if (!s) throw new Error("getCapabilities: adapter is required but got undefined");
          return await (s == null ? void 0 : s.getCapabilities(e));
        },
        grantPermissions: async (e) => {
          const s = this.getAdapter(m.state.activeChain);
          if (!s) throw new Error("grantPermissions: adapter is required but got undefined");
          return await (s == null ? void 0 : s.grantPermissions(e));
        },
        revokePermissions: async (e) => {
          const s = this.getAdapter(m.state.activeChain);
          if (!s) throw new Error("revokePermissions: adapter is required but got undefined");
          return (s == null ? void 0 : s.revokePermissions) ? await s.revokePermissions(e) : "0x";
        },
        walletGetAssets: async (e) => {
          const s = this.getAdapter(m.state.activeChain);
          if (!s) throw new Error("walletGetAssets: adapter is required but got undefined");
          return await (s == null ? void 0 : s.walletGetAssets(e)) ?? {};
        },
        updateBalance: (e) => {
          const s = this.getAddress(e), n = this.getCaipNetwork(e);
          !n || !s || this.updateNativeBalance(s, n == null ? void 0 : n.id, e);
        }
      }, z.setClient(this.connectionControllerClient);
    }
    async onConnectExternal(e) {
      var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h2;
      const s = m.state.activeChain, n = e.chain || s, r = this.getAdapter(n);
      let i = true;
      if (e.type === Rs.CONNECTOR_TYPE_AUTH && P.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((u) => q.getConnectorId(u) === P.CONNECTOR_ID.AUTH) && e.chain !== s && (i = false), e.chain && e.chain !== s && !e.caipNetwork) {
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
      if (c) return L.addConnectedNamespace(n), this.syncProvider({
        ...c,
        chainNamespace: n
      }), this.setStatus("connected", n), this.syncConnectedWalletInfo(n), L.removeDisconnectedConnectorId(e.id, n), {
        address: c.address,
        connectedCaipNetwork: a
      };
    }
    async connectInactiveNamespaces(e, s) {
      var _a2;
      const n = e.type === Rs.CONNECTOR_TYPE_AUTH, r = Ac.getOtherAuthNamespaces((_a2 = s == null ? void 0 : s.connectedCaipNetwork) == null ? void 0 : _a2.chainNamespace), i = m.state.activeCaipNetwork, o = this.getAdapter(i == null ? void 0 : i.chainNamespace);
      n && (await Promise.all(r.map(async (a) => {
        var _a3, _b2, _c2, _d3;
        try {
          const c = xe.getProvider(a), l = this.getCaipNetwork(a);
          await ((_d3 = this.getAdapter(a)) == null ? void 0 : _d3.connect({
            ...e,
            provider: c,
            socialUri: void 0,
            chainId: l == null ? void 0 : l.id,
            rpcUrl: (_c2 = (_b2 = (_a3 = l == null ? void 0 : l.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b2.http) == null ? void 0 : _c2[0]
          })) && (L.addConnectedNamespace(a), L.removeDisconnectedConnectorId(e.id, a), this.setStatus("connected", a), this.syncConnectedWalletInfo(a));
        } catch (c) {
          kt.warn(jt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, jt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(a, c instanceof Error ? c.message : void 0), jt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      })), i && await (o == null ? void 0 : o.switchNetwork({
        caipNetwork: i
      })));
    }
    getApprovedCaipNetworksData() {
      var _a2, _b2, _c2, _d3, _e2;
      if (xe.getProviderId(m.state.activeChain) === Rs.CONNECTOR_TYPE_WALLET_CONNECT) {
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
        const r = xe.getProviderId(s);
        if (e.chainNamespace === m.state.activeChain) await ((_a2 = this.getAdapter(s)) == null ? void 0 : _a2.switchNetwork({
          caipNetwork: e
        }));
        else if (this.setCaipNetwork(e), r === Rs.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
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
          const { chainId: o, chainNamespace: a } = Qe.parseCaipAddress(i);
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
        }), s[n] = r) : s[n] = new $_({
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
      const n = L.getConnectionStatus();
      U.state.enableReconnect === false ? this.setStatus("disconnected", e) : n === "connected" ? this.setStatus("connecting", e) : n === "disconnected" ? (L.clearAddressCache(), this.setStatus(n, e)) : this.setStatus(n, e), s.on("switchNetwork", ({ address: r, chainId: i }) => {
        var _a2, _b2;
        const o = this.getCaipNetworks().find((l) => l.id.toString() === i.toString() || l.caipNetworkId.toString() === i.toString()), a = m.state.activeChain === e, c = (_b2 = (_a2 = m.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.address;
        if (o) {
          const l = a && r ? r : c;
          l && this.syncAccount({
            address: l,
            chainId: o.id,
            chainNamespace: e
          });
        } else this.setUnsupportedNetwork(i);
      }), s.on("disconnect", () => {
        const r = this.remoteFeatures.multiWallet, i = Array.from(z.state.connections.values()).flat();
        this.onDisconnectNamespace({
          chainNamespace: e,
          closeModal: !r || i.length === 0
        });
      }), s.on("connections", (r) => {
        this.setConnections(r, e);
      }), s.on("pendingTransactions", () => {
        const r = this.getAddress(e), i = m.state.activeCaipNetwork;
        !r || !(i == null ? void 0 : i.id) || this.updateNativeBalance(r, i.id, i.chainNamespace);
      }), s.on("accountChanged", ({ address: r, chainId: i, connector: o }) => {
        var _a2, _b2;
        this.handlePreviousConnectorConnection(o);
        const a = m.state.activeChain === e;
        (o == null ? void 0 : o.provider) && (this.syncProvider({
          id: o.id,
          type: o.type,
          provider: o == null ? void 0 : o.provider,
          chainNamespace: e
        }), this.syncConnectedWalletInfo(e));
        const c = (_b2 = (_a2 = m.getNetworkData(e)) == null ? void 0 : _a2.caipNetwork) == null ? void 0 : _b2.id, l = i || c;
        a && l ? this.syncAccount({
          address: r,
          chainId: l,
          chainNamespace: e
        }) : !a && l ? (this.syncAccountInfo(r, l, e), this.syncBalance({
          address: r,
          chainId: l,
          chainNamespace: e
        })) : this.syncAccountInfo(r, i, e), L.addConnectedNamespace(e);
      });
    }
    async handlePreviousConnectorConnection(e) {
      var _a2;
      const s = e == null ? void 0 : e.chain, n = e == null ? void 0 : e.id, r = q.getConnectorId(s), i = (_a2 = U.state.remoteFeatures) == null ? void 0 : _a2.multiWallet, a = s && n && r && r !== n && !i;
      try {
        a && await z.disconnect({
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
        await Promise.allSettled(this.chainNamespaces.map((e) => z.disconnect({
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
      this.getCaipAddress() || L.deleteRecentWallet();
      const s = L.getRecentWallet();
      de.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: e,
        properties: {
          method: Y.isMobile() ? "mobile" : "qrcode",
          name: (s == null ? void 0 : s.name) || "Unknown",
          reconnect: true,
          view: se.state.view,
          walletRank: s == null ? void 0 : s.order
        }
      });
    }
    async syncNamespaceConnection(e) {
      try {
        e === P.CHAIN.EVM && Y.isSafeApp() && q.setConnectorId(P.CONNECTOR_ID.SAFE, e);
        const s = q.getConnectorId(e);
        switch (this.setStatus("connecting", e), s) {
          case P.CONNECTOR_ID.WALLET_CONNECT:
            await this.reconnectWalletConnect();
            break;
          case P.CONNECTOR_ID.AUTH:
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
      m.resetAccount(s), m.resetNetwork(s), L.removeConnectedNamespace(s);
      const r = Array.from(m.state.chains.keys());
      (s ? [
        s
      ] : r).forEach((o) => L.addDisconnectedConnectorId(q.getConnectorId(o) || "", o)), q.removeConnectorId(s), xe.resetChain(s), this.setUser(null, s), this.setStatus("disconnected", s), this.setConnectedWalletInfo(null, s), n !== false && pe.close();
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
      const s = this.getAdapter(e), n = this.getCaipNetwork(e), r = q.getConnectorId(e), o = q.getConnectors(e).find((a) => a.id === r);
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
        }), this.setStatus("connected", e), de.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          address: a.address,
          properties: {
            method: "browser",
            name: ((_d3 = o.info) == null ? void 0 : _d3.name) || o.name || "Unknown",
            reconnect: true,
            view: se.state.view,
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
        const i = ((_d3 = (_c2 = (_b3 = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b3.namespaces) == null ? void 0 : _c2[n]) == null ? void 0 : _d3.accounts) || [], o = (_e2 = m.state.activeCaipNetwork) == null ? void 0 : _e2.id, a = i.find((l) => {
          const { chainId: d } = Qe.parseCaipAddress(l);
          return d === (o == null ? void 0 : o.toString());
        }) || i[0];
        if (a) {
          const l = Qe.validateCaipAddress(a), { chainId: d, address: u } = Qe.parseCaipAddress(l);
          if (xe.setProviderId(n, Rs.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && m.state.activeCaipNetwork && r.namespace !== P.CHAIN.EVM) {
            const h = r.getWalletConnectProvider({
              caipNetworks: this.getCaipNetworks(),
              provider: this.universalProvider,
              activeCaipNetwork: m.state.activeCaipNetwork
            });
            xe.setProvider(n, h);
          } else xe.setProvider(n, this.universalProvider);
          q.setConnectorId(P.CONNECTOR_ID.WALLET_CONNECT, n), L.addConnectedNamespace(n), await this.syncAccount({
            address: u,
            chainId: d,
            chainNamespace: n
          });
        } else e.includes(n) && this.setStatus("disconnected", n);
        const c = this.getApprovedCaipNetworksData();
        this.syncConnectedWalletInfo(n), m.setApprovedCaipNetworksData(n, {
          approvedCaipNetworkIds: c.approvedCaipNetworkIds,
          supportsAllNetworks: c.supportsAllNetworks
        });
      });
      await Promise.all(s);
    }
    syncProvider({ type: e, provider: s, id: n, chainNamespace: r }) {
      xe.setProviderId(r, e), xe.setProvider(r, s), q.setConnectorId(n, r);
    }
    async syncAccount(e) {
      var _a2, _b2;
      const s = e.chainNamespace === m.state.activeChain, n = m.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: r, chainId: i, chainNamespace: o } = e, { chainId: a } = L.getActiveNetworkProps(), c = (n == null ? void 0 : n.id) || a, l = ((_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.name) === P.UNSUPPORTED_NETWORK_NAME, d = m.getNetworkProp("supportsAllNetworks", o);
      if (this.setStatus("connected", o), !(l && !d) && c) {
        let u = this.getCaipNetworks().find((p) => p.id.toString() === c.toString()), h = this.getCaipNetworks().find((p) => p.chainNamespace === o);
        if (!d && !u && !h) {
          const p = this.getApprovedCaipNetworkIds() || [], w = p.find((I) => {
            var _a3;
            return ((_a3 = Qe.parseCaipNetworkId(I)) == null ? void 0 : _a3.chainId) === c.toString();
          }), A = p.find((I) => {
            var _a3;
            return ((_a3 = Qe.parseCaipNetworkId(I)) == null ? void 0 : _a3.chainNamespace) === o;
          });
          u = this.getCaipNetworks().find((I) => I.caipNetworkId === w), h = this.getCaipNetworks().find((I) => I.caipNetworkId === A || "deprecatedCaipNetworkId" in I && I.deprecatedCaipNetworkId === A);
        }
        const f = u || h;
        (f == null ? void 0 : f.chainNamespace) === m.state.activeChain ? U.state.enableNetworkSwitch && !U.state.allowUnsupportedChain && ((_b2 = m.state.activeCaipNetwork) == null ? void 0 : _b2.name) === P.UNSUPPORTED_NETWORK_NAME ? m.showUnsupportedChainUI() : this.setCaipNetwork(f) : s || n && this.setCaipNetworkOfNamespace(n, o), this.syncConnectedWalletInfo(o);
        const g = this.getAddress(o);
        Ac.isLowerCaseMatch(r, g) || this.syncAccountInfo(r, f == null ? void 0 : f.id, o), s ? await this.syncBalance({
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
      const s = q.getConnectorId(e), n = xe.getProviderId(e);
      if (n === Rs.CONNECTOR_TYPE_ANNOUNCED || n === Rs.CONNECTOR_TYPE_INJECTED) {
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
      } else if (n === Rs.CONNECTOR_TYPE_WALLET_CONNECT) {
        const r = xe.getProvider(e);
        (r == null ? void 0 : r.session) && this.setConnectedWalletInfo({
          ...r.session.peer.metadata,
          name: r.session.peer.metadata.name,
          icon: (_a2 = r.session.peer.metadata.icons) == null ? void 0 : _a2[0]
        }, e);
      } else if (s && (s === P.CONNECTOR_ID.COINBASE_SDK || s === P.CONNECTOR_ID.COINBASE)) {
        const r = this.getConnectors().find((c) => c.id === s), i = (r == null ? void 0 : r.name) || "Coinbase Wallet", o = (r == null ? void 0 : r.imageUrl) || this.getConnectorImage(r), a = r == null ? void 0 : r.info;
        this.setConnectedWalletInfo({
          ...a,
          name: i,
          icon: o
        }, e);
      }
    }
    async syncBalance(e) {
      !Zu.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((n) => {
        var _a2;
        return n.id.toString() === ((_a2 = e.chainId) == null ? void 0 : _a2.toString());
      }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace);
    }
    async ready() {
      await this.readyPromise;
    }
    async updateNativeBalance(e, s, n) {
      const r = this.getAdapter(n), i = m.getCaipNetworkByNamespace(n, s);
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
      const e = k_.createLogger((r, ...i) => {
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
      U.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await DS.init(s);
      const n = this.universalProvider.disconnect.bind(this.universalProvider);
      this.universalProvider.disconnect = async () => {
        try {
          return await n();
        } catch (r) {
          if (r instanceof Error && r.message.includes("Missing or invalid. Record was recently deleted")) return;
          throw r;
        }
      }, U.state.enableReconnect === false && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect();
    }
    listenWalletConnect() {
      this.universalProvider && this.chainNamespaces.forEach((e) => {
        pn.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace: e,
          onDisplayUri: (s) => {
            z.setUri(s);
          },
          onConnect: (s) => {
            const { address: n } = Y.getAccount(s[0]);
            for (const r of this.chainNamespaces) L.removeDisconnectedConnectorId(P.CONNECTOR_ID.WALLET_CONNECT, r);
            z.finalizeWcConnection(n);
          },
          onDisconnect: () => {
            m.state.noAdapters && this.resetAccount(e), z.resetWcConnection();
          },
          onChainChanged: (s) => {
            const n = m.state.activeChain, r = n && q.state.activeConnectorIds[n] === P.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (m.state.noAdapters || r)) {
              const i = this.getCaipNetworks().find((a) => a.id.toString() === s.toString() || a.caipNetworkId.toString() === s.toString()), o = this.getCaipNetwork();
              if (!i) {
                this.setUnsupportedNetwork(s);
                return;
              }
              (o == null ? void 0 : o.id.toString()) !== (i == null ? void 0 : i.id.toString()) && (o == null ? void 0 : o.chainNamespace) === (i == null ? void 0 : i.chainNamespace) && this.setCaipNetwork(i);
            }
          },
          onAccountsChanged: (s) => {
            const n = m.state.activeChain, r = n && q.state.activeConnectorIds[n] === P.CONNECTOR_ID.WALLET_CONNECT;
            if (n === e && (m.state.noAdapters || r)) {
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
      return !this.universalProviderInitPromise && Y.isClient() && ((_a2 = this.options) == null ? void 0 : _a2.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
      if (!this.universalProvider) try {
        await this.createUniversalProvider();
      } catch (e) {
        de.sendEvent({
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
      const e = m.getAllApprovedCaipNetworkIds(), s = m.getAllRequestedCaipNetworks();
      return Y.sortRequestedNetworks(e, s).filter((r) => m.isCaipNetworkDisabled(r));
    }
    handleAlertError(e) {
      const s = Object.entries(jt.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [n, r] = s ?? [], { message: i, alertErrorKey: o } = r ?? {};
      if (n && i && !this.reportedAlertErrors[n]) {
        const a = jt.ALERT_ERRORS[o];
        a && (kt.open(a, "error"), this.reportedAlertErrors[n] = true);
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
      await this.injectModalUi(), (e == null ? void 0 : e.uri) && z.setUri(e.uri);
      const { isSwap: s, isSend: n } = this.toModalOptions();
      return s(e) ? pe.open({
        ...e,
        data: {
          swap: e.arguments
        }
      }) : n(e) && e.arguments ? this.openSend(e.arguments) : pe.open(e);
    }
    async close() {
      await this.injectModalUi(), pe.close();
    }
    setLoading(e, s) {
      pe.setLoading(e, s);
    }
    async disconnect(e) {
      await z.disconnect({
        namespace: e
      });
    }
    getSIWX() {
      return U.state.siwx;
    }
    getError() {
      return "";
    }
    getChainId() {
      var _a2;
      return (_a2 = m.state.activeCaipNetwork) == null ? void 0 : _a2.id;
    }
    async switchNetwork(e, { throwOnFailure: s = false } = {}) {
      const n = this.getCaipNetworks().find((r) => r.id === e.id);
      if (!n) {
        kt.open(jt.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      await m.switchActiveNetwork(n, {
        throwOnFailure: s
      });
    }
    getWalletProvider() {
      return m.state.activeChain ? xe.state.providers[m.state.activeChain] : null;
    }
    getWalletProviderType() {
      return xe.getProviderId(m.state.activeChain);
    }
    subscribeProviders(e) {
      return xe.subscribeProviders(e);
    }
    getThemeMode() {
      return Pt.state.themeMode;
    }
    getThemeVariables() {
      return Pt.state.themeVariables;
    }
    setThemeMode(e) {
      Pt.setThemeMode(e), vc(Pt.state.themeMode);
    }
    setTermsConditionsUrl(e) {
      U.setTermsConditionsUrl(e);
    }
    setPrivacyPolicyUrl(e) {
      U.setPrivacyPolicyUrl(e);
    }
    setThemeVariables(e) {
      Pt.setThemeVariables(e), __(Pt.state.themeVariables);
    }
    subscribeTheme(e) {
      return Pt.subscribe(e);
    }
    subscribeConnections(e) {
      return this.remoteFeatures.multiWallet ? z.subscribe(e) : (kt.open(P.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {
      });
    }
    getWalletInfo(e) {
      var _a2, _b2, _c2;
      return e ? (_b2 = (_a2 = m.state.chains.get(e)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b2.connectedWalletInfo : (_c2 = m.getAccountData()) == null ? void 0 : _c2.connectedWalletInfo;
    }
    getAccount(e) {
      const s = e || m.state.activeChain, n = q.getAuthConnector(s), r = m.getAccountData(s), i = L.getConnectedConnectorId(m.state.activeChain), o = z.getConnections(s);
      if (!s) throw new Error("AppKit:getAccount - namespace is required");
      const a = o.flatMap((c) => c.accounts.map(({ address: l, type: d, publicKey: u }) => Y.createAccount(s, l, d || "eoa", u)));
      if (r) return {
        allAccounts: a,
        caipAddress: r.caipAddress,
        address: Y.getPlainAddress(r.caipAddress),
        isConnected: !!r.caipAddress,
        status: r.status,
        embeddedWalletInfo: n && i === P.CONNECTOR_ID.AUTH ? {
          user: r.user ? {
            ...r.user,
            username: L.getConnectedSocialUsername()
          } : void 0,
          authProvider: r.socialProvider || "email",
          accountType: Jt(s),
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
        const o = m.subscribeChainProp("accountState", r, s);
        n.push(o);
      } else {
        const o = m.subscribe(r);
        n.push(o);
      }
      const i = q.subscribe(r);
      return n.push(i), () => {
        n.forEach((o) => o());
      };
    }
    subscribeNetwork(e) {
      return m.subscribe(({ activeCaipNetwork: s }) => {
        e({
          caipNetwork: s,
          chainId: s == null ? void 0 : s.id,
          caipNetworkId: s == null ? void 0 : s.caipNetworkId
        });
      });
    }
    subscribeWalletInfo(e, s) {
      return s ? m.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo), s) : m.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo));
    }
    subscribeShouldUpdateToAddress(e) {
      return m.subscribeChainProp("accountState", (s) => e(s == null ? void 0 : s.shouldUpdateToAddress));
    }
    subscribeCaipNetworkChange(e) {
      return m.subscribeKey("activeCaipNetwork", e);
    }
    getState() {
      return as.state;
    }
    getRemoteFeatures() {
      return U.state.remoteFeatures;
    }
    subscribeState(e) {
      return as.subscribe(e);
    }
    subscribeRemoteFeatures(e) {
      return U.subscribeKey("remoteFeatures", e);
    }
    showErrorMessage(e) {
      ys.showError(e);
    }
    showSuccessMessage(e) {
      ys.showSuccess(e);
    }
    getEvent() {
      return {
        ...de.state
      };
    }
    subscribeEvents(e) {
      return de.subscribe(e);
    }
    replace(e) {
      se.replace(e);
    }
    redirect(e) {
      se.push(e);
    }
    popTransactionStack(e) {
      se.popTransactionStack(e);
    }
    isOpen() {
      return pe.state.open;
    }
    isTransactionStackEmpty() {
      return se.state.transactionStack.length === 0;
    }
    static getInstance() {
      return this.instance;
    }
    updateFeatures(e) {
      U.setFeatures(e);
    }
    updateRemoteFeatures(e) {
      U.setRemoteFeatures(e);
    }
    updateOptions(e) {
      const n = {
        ...U.state || {},
        ...e
      };
      U.setOptions(n);
    }
    setConnectMethodsOrder(e) {
      U.setConnectMethodsOrder(e);
    }
    setWalletFeaturesOrder(e) {
      U.setWalletFeaturesOrder(e);
    }
    setCollapseWallets(e) {
      U.setCollapseWallets(e);
    }
    setSocialsOrder(e) {
      U.setSocialsOrder(e);
    }
    getConnectMethodsOrder() {
      return dn.getConnectOrderMethod(U.state.features, q.getConnectors());
    }
    addNetwork(e, s) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      const n = this.extendCaipNetwork(s, this.options);
      this.getCaipNetworks().find((r) => r.id === n.id) || m.addNetwork(n);
    }
    removeNetwork(e, s) {
      if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
      this.getCaipNetworks().find((r) => r.id === s) && m.removeNetwork(e, s);
    }
  }
  let zu = false;
  class Uf extends L_ {
    async open(e) {
      q.isConnected() || await super.open(e);
    }
    async close() {
      var _a2;
      if (await super.close(), this.options.manualWCControl) {
        const e = (_a2 = m.getAccountData(this.activeChainNamespace)) == null ? void 0 : _a2.address;
        z.finalizeWcConnection(e);
      }
    }
    async syncIdentity(e) {
      return Promise.resolve();
    }
    async syncBalance(e) {
      return Promise.resolve();
    }
    async injectModalUi() {
      if (!zu && Y.isClient()) {
        if (await Zi(() => import("./basic-CujsewwU.js"), __vite__mapDeps([5,6,1,2])), await Zi(() => import("./w3m-modal-leneXEQj.js"), __vite__mapDeps([7,6,1,2])), !document.querySelector("w3m-modal")) {
          const s = document.createElement("w3m-modal");
          !U.state.disableAppend && !U.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s);
        }
        zu = true;
      }
    }
  }
  const M_ = "1.8.17-wc-circular-dependencies-fix.0";
  function F_(t) {
    return new Uf({
      ...t,
      basic: true,
      sdkVersion: `html-core-${M_}`
    });
  }
  yT = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: Uf,
    createAppKit: F_
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  ch as $,
  Z as A,
  re as B,
  m as C,
  he as D,
  br as E,
  ah as F,
  q as G,
  tt as H,
  et as I,
  Re as J,
  is as K,
  wg as L,
  pe as M,
  Zu as N,
  Qe as O,
  xe as P,
  di as Q,
  se as R,
  ee as S,
  Ac as T,
  U,
  W_ as V,
  Ms as W,
  eo as X,
  Gt as Y,
  Pt as Z,
  gT as _,
  __tla,
  P as a,
  ht as a0,
  Fn as a1,
  Ls as a2,
  to as a3,
  or as a4,
  L as a5,
  dn as a6,
  yT as a7,
  X as b,
  _f as c,
  Ji as d,
  hT as e,
  pl as f,
  Ii as g,
  Ge as h,
  cn as i,
  fT as j,
  wT as k,
  th as l,
  Xt as m,
  ys as n,
  z as o,
  de as p,
  Jt as q,
  mT as r,
  rg as s,
  Y as t,
  Ec as u,
  S_ as v,
  pT as w,
  nm as x,
  kt as y,
  kc as z
};
