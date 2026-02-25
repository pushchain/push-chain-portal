const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D_bTLXjD.js","assets/main-Dzlh3jFX.js","assets/main-BN-Qqfmx.css","assets/ccip-DY9EUbEw.js","assets/features-CIMjEz2w.js","assets/basic--1Zacia5.js","assets/index-BgtjNhOi.js","assets/w3m-modal-DvCr32n2.js"])))=>i.map(i=>d[i]);
import { bk as Is, aQ as Ss, b0 as _s, cR as Ts, U as ks, cS as vs, cT as rn, bK as es, cQ as Lt, by as yt, cU as Os, cV as Rs, h as It, cC as _n, cW as Ps, __tla as __tla_0 } from "./main-Dzlh3jFX.js";
let hs, I, P, c, L, rt, ps, g, te, ee, z, we, qs, M, ns, Z, q, Nt, O, k, gn, f, ja, Re, Bt, he, de, Ya, h, re, qe, Oe, Ft, nt, C, xe, Qa, _, ms, xt, qa, Tn, _t, Q, Ue, Ga, Xa, os, Ce, be, E, D, fe, Ja, Us, y, fn, Ta, za, Pr, ce, En;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _d;
  Tn = function(e, t = {}) {
    const { key: n = "fallback", name: s = "Fallback", rank: r = false, shouldThrow: a = Us, retryCount: o, retryDelay: i } = t;
    return (({ chain: d, pollingInterval: l = 4e3, timeout: u, ...p }) => {
      let w = e, S = () => {
      };
      const A = Is({
        key: n,
        name: s,
        async request({ method: m, params: N }) {
          let R;
          const T = async (W = 0) => {
            const V = w[W]({
              ...p,
              chain: d,
              retryCount: 0,
              timeout: u
            });
            try {
              const X = await V.request({
                method: m,
                params: N
              });
              return S({
                method: m,
                params: N,
                response: X,
                transport: V,
                status: "success"
              }), X;
            } catch (X) {
              if (S({
                error: X,
                method: m,
                params: N,
                transport: V,
                status: "error"
              }), a(X) || W === w.length - 1 || (R ?? (R = w.slice(W + 1).some((Se) => {
                const { include: Xe, exclude: Sn } = Se({
                  chain: d
                }).config.methods || {};
                return Xe ? Xe.includes(m) : Sn ? !Sn.includes(m) : true;
              })), !R)) throw X;
              return T(W + 1);
            }
          };
          return T();
        },
        retryCount: o,
        retryDelay: i,
        type: "fallback"
      }, {
        onResponse: (m) => S = m,
        transports: w.map((m) => m({
          chain: d,
          retryCount: 0
        }))
      });
      if (r) {
        const m = typeof r == "object" ? r : {};
        Ds({
          chain: d,
          interval: m.interval ?? l,
          onTransports: (N) => w = N,
          ping: m.ping,
          sampleCount: m.sampleCount,
          timeout: m.timeout,
          transports: w,
          weights: m.weights
        });
      }
      return A;
    });
  };
  Us = function(e) {
    return !!("code" in e && typeof e.code == "number" && (e.code === Ss.code || e.code === _s.code || e.code === Ts.code || ks.nodeMessage.test(e.message) || e.code === 5e3));
  };
  function Ds({ chain: e, interval: t = 4e3, onTransports: n, ping: s, sampleCount: r = 10, timeout: a = 1e3, transports: o, weights: i = {} }) {
    const { stability: d = 0.7, latency: l = 0.3 } = i, u = [], p = async () => {
      const w = await Promise.all(o.map(async (m) => {
        const N = m({
          chain: e,
          retryCount: 0,
          timeout: a
        }), R = Date.now();
        let T, W;
        try {
          await (s ? s({
            transport: N
          }) : N.request({
            method: "net_listening"
          })), W = 1;
        } catch {
          W = 0;
        } finally {
          T = Date.now();
        }
        return {
          latency: T - R,
          success: W
        };
      }));
      u.push(w), u.length > r && u.shift();
      const S = Math.max(...u.map((m) => Math.max(...m.map(({ latency: N }) => N)))), A = o.map((m, N) => {
        const R = u.map((Se) => Se[N].latency), W = 1 - R.reduce((Se, Xe) => Se + Xe, 0) / R.length / S, V = u.map((Se) => Se[N].success), X = V.reduce((Se, Xe) => Se + Xe, 0) / V.length;
        return X === 0 ? [
          0,
          N
        ] : [
          l * W + d * X,
          N
        ];
      }).sort((m, N) => N[0] - m[0]);
      n(A.map(([, m]) => o[m])), await vs(t), p();
    };
    p();
  }
  const ts = {
    isLowerCaseMatch(e, t) {
      return (e == null ? void 0 : e.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
    }
  };
  var kn = {};
  let ss;
  h = {
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
    SECURE_SITE_SDK_ORIGIN: (typeof rn < "u" && typeof kn < "u" ? kn.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
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
    IS_DEVELOPMENT: typeof rn < "u" && false,
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
  ns = {
    caipNetworkIdToNumber(e) {
      return e ? Number(e.split(":")[1]) : void 0;
    },
    parseEvmChainId(e) {
      return typeof e == "string" ? this.caipNetworkIdToNumber(e) : e;
    },
    getNetworksByNamespace(e, t) {
      return (e == null ? void 0 : e.filter((n) => n.chainNamespace === t)) || [];
    },
    getFirstNetworkByNamespace(e, t) {
      return this.getNetworksByNamespace(e, t)[0];
    },
    getNetworkNameByCaipNetworkId(e, t) {
      var _a2;
      if (!t) return;
      const n = e.find((r) => r.caipNetworkId === t);
      if (n) return n.name;
      const [s] = t.split(":");
      return ((_a2 = h.CHAIN_NAME_MAP) == null ? void 0 : _a2[s]) || void 0;
    }
  };
  ss = [
    "eip155",
    "solana",
    "polkadot",
    "bip122",
    "cosmos",
    "sui",
    "stacks"
  ];
  var xs = 20, Ls = 1, Ve = 1e6, vn = 1e6, Ms = -7, Ws = 21, Bs = false, Et = "[big.js] ", Ge = Et + "Invalid ", qt = Ge + "decimal places", Fs = Ge + "rounding mode", rs = Et + "Division by zero", K = {}, Ie = void 0, $s = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function as() {
    function e(t) {
      var n = this;
      if (!(n instanceof e)) return t === Ie ? as() : new e(t);
      if (t instanceof e) n.s = t.s, n.e = t.e, n.c = t.c.slice();
      else {
        if (typeof t != "string") {
          if (e.strict === true && typeof t != "bigint") throw TypeError(Ge + "value");
          t = t === 0 && 1 / t < 0 ? "-0" : String(t);
        }
        Hs(n, t);
      }
      n.constructor = e;
    }
    return e.prototype = K, e.DP = xs, e.RM = Ls, e.NE = Ms, e.PE = Ws, e.strict = Bs, e.roundDown = 0, e.roundHalfUp = 1, e.roundHalfEven = 2, e.roundUp = 3, e;
  }
  function Hs(e, t) {
    var n, s, r;
    if (!$s.test(t)) throw Error(Ge + "number");
    for (e.s = t.charAt(0) == "-" ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (s = t.search(/e/i)) > 0 ? (n < 0 && (n = s), n += +t.slice(s + 1), t = t.substring(0, s)) : n < 0 && (n = t.length), r = t.length, s = 0; s < r && t.charAt(s) == "0"; ) ++s;
    if (s == r) e.c = [
      e.e = 0
    ];
    else {
      for (; r > 0 && t.charAt(--r) == "0"; ) ;
      for (e.e = n - s - 1, e.c = [], n = 0; s <= r; ) e.c[n++] = +t.charAt(s++);
    }
    return e;
  }
  function Ye(e, t, n, s) {
    var r = e.c;
    if (n === Ie && (n = e.constructor.RM), n !== 0 && n !== 1 && n !== 2 && n !== 3) throw Error(Fs);
    if (t < 1) s = n === 3 && (s || !!r[0]) || t === 0 && (n === 1 && r[0] >= 5 || n === 2 && (r[0] > 5 || r[0] === 5 && (s || r[1] !== Ie))), r.length = 1, s ? (e.e = e.e - t + 1, r[0] = 1) : r[0] = e.e = 0;
    else if (t < r.length) {
      if (s = n === 1 && r[t] >= 5 || n === 2 && (r[t] > 5 || r[t] === 5 && (s || r[t + 1] !== Ie || r[t - 1] & 1)) || n === 3 && (s || !!r[0]), r.length = t, s) {
        for (; ++r[--t] > 9; ) if (r[t] = 0, t === 0) {
          ++e.e, r.unshift(1);
          break;
        }
      }
      for (t = r.length; !r[--t]; ) r.pop();
    }
    return e;
  }
  function Je(e, t, n) {
    var s = e.e, r = e.c.join(""), a = r.length;
    if (t) r = r.charAt(0) + (a > 1 ? "." + r.slice(1) : "") + (s < 0 ? "e" : "e+") + s;
    else if (s < 0) {
      for (; ++s; ) r = "0" + r;
      r = "0." + r;
    } else if (s > 0) if (++s > a) for (s -= a; s--; ) r += "0";
    else s < a && (r = r.slice(0, s) + "." + r.slice(s));
    else a > 1 && (r = r.charAt(0) + "." + r.slice(1));
    return e.s < 0 && n ? "-" + r : r;
  }
  K.abs = function() {
    var e = new this.constructor(this);
    return e.s = 1, e;
  };
  K.cmp = function(e) {
    var t, n = this, s = n.c, r = (e = new n.constructor(e)).c, a = n.s, o = e.s, i = n.e, d = e.e;
    if (!s[0] || !r[0]) return s[0] ? a : r[0] ? -o : 0;
    if (a != o) return a;
    if (t = a < 0, i != d) return i > d ^ t ? 1 : -1;
    for (o = (i = s.length) < (d = r.length) ? i : d, a = -1; ++a < o; ) if (s[a] != r[a]) return s[a] > r[a] ^ t ? 1 : -1;
    return i == d ? 0 : i > d ^ t ? 1 : -1;
  };
  K.div = function(e) {
    var t = this, n = t.constructor, s = t.c, r = (e = new n(e)).c, a = t.s == e.s ? 1 : -1, o = n.DP;
    if (o !== ~~o || o < 0 || o > Ve) throw Error(qt);
    if (!r[0]) throw Error(rs);
    if (!s[0]) return e.s = a, e.c = [
      e.e = 0
    ], e;
    var i, d, l, u, p, w = r.slice(), S = i = r.length, A = s.length, m = s.slice(0, i), N = m.length, R = e, T = R.c = [], W = 0, V = o + (R.e = t.e - e.e) + 1;
    for (R.s = a, a = V < 0 ? 0 : V, w.unshift(0); N++ < i; ) m.push(0);
    do {
      for (l = 0; l < 10; l++) {
        if (i != (N = m.length)) u = i > N ? 1 : -1;
        else for (p = -1, u = 0; ++p < i; ) if (r[p] != m[p]) {
          u = r[p] > m[p] ? 1 : -1;
          break;
        }
        if (u < 0) {
          for (d = N == i ? r : w; N; ) {
            if (m[--N] < d[N]) {
              for (p = N; p && !m[--p]; ) m[p] = 9;
              --m[p], m[N] += 10;
            }
            m[N] -= d[N];
          }
          for (; !m[0]; ) m.shift();
        } else break;
      }
      T[W++] = u ? l : ++l, m[0] && u ? m[N] = s[S] || 0 : m = [
        s[S]
      ];
    } while ((S++ < A || m[0] !== Ie) && a--);
    return !T[0] && W != 1 && (T.shift(), R.e--, V--), W > V && Ye(R, V, n.RM, m[0] !== Ie), R;
  };
  K.eq = function(e) {
    return this.cmp(e) === 0;
  };
  K.gt = function(e) {
    return this.cmp(e) > 0;
  };
  K.gte = function(e) {
    return this.cmp(e) > -1;
  };
  K.lt = function(e) {
    return this.cmp(e) < 0;
  };
  K.lte = function(e) {
    return this.cmp(e) < 1;
  };
  K.minus = K.sub = function(e) {
    var t, n, s, r, a = this, o = a.constructor, i = a.s, d = (e = new o(e)).s;
    if (i != d) return e.s = -d, a.plus(e);
    var l = a.c.slice(), u = a.e, p = e.c, w = e.e;
    if (!l[0] || !p[0]) return p[0] ? e.s = -d : l[0] ? e = new o(a) : e.s = 1, e;
    if (i = u - w) {
      for ((r = i < 0) ? (i = -i, s = l) : (w = u, s = p), s.reverse(), d = i; d--; ) s.push(0);
      s.reverse();
    } else for (n = ((r = l.length < p.length) ? l : p).length, i = d = 0; d < n; d++) if (l[d] != p[d]) {
      r = l[d] < p[d];
      break;
    }
    if (r && (s = l, l = p, p = s, e.s = -e.s), (d = (n = p.length) - (t = l.length)) > 0) for (; d--; ) l[t++] = 0;
    for (d = t; n > i; ) {
      if (l[--n] < p[n]) {
        for (t = n; t && !l[--t]; ) l[t] = 9;
        --l[t], l[n] += 10;
      }
      l[n] -= p[n];
    }
    for (; l[--d] === 0; ) l.pop();
    for (; l[0] === 0; ) l.shift(), --w;
    return l[0] || (e.s = 1, l = [
      w = 0
    ]), e.c = l, e.e = w, e;
  };
  K.mod = function(e) {
    var t, n = this, s = n.constructor, r = n.s, a = (e = new s(e)).s;
    if (!e.c[0]) throw Error(rs);
    return n.s = e.s = 1, t = e.cmp(n) == 1, n.s = r, e.s = a, t ? new s(n) : (r = s.DP, a = s.RM, s.DP = s.RM = 0, n = n.div(e), s.DP = r, s.RM = a, this.minus(n.times(e)));
  };
  K.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, e;
  };
  K.plus = K.add = function(e) {
    var t, n, s, r = this, a = r.constructor;
    if (e = new a(e), r.s != e.s) return e.s = -e.s, r.minus(e);
    var o = r.e, i = r.c, d = e.e, l = e.c;
    if (!i[0] || !l[0]) return l[0] || (i[0] ? e = new a(r) : e.s = r.s), e;
    if (i = i.slice(), t = o - d) {
      for (t > 0 ? (d = o, s = l) : (t = -t, s = i), s.reverse(); t--; ) s.push(0);
      s.reverse();
    }
    for (i.length - l.length < 0 && (s = l, l = i, i = s), t = l.length, n = 0; t; i[t] %= 10) n = (i[--t] = i[t] + l[t] + n) / 10 | 0;
    for (n && (i.unshift(n), ++d), t = i.length; i[--t] === 0; ) i.pop();
    return e.c = i, e.e = d, e;
  };
  K.pow = function(e) {
    var t = this, n = new t.constructor("1"), s = n, r = e < 0;
    if (e !== ~~e || e < -vn || e > vn) throw Error(Ge + "exponent");
    for (r && (e = -e); e & 1 && (s = s.times(t)), e >>= 1, !!e; ) t = t.times(t);
    return r ? n.div(s) : s;
  };
  K.prec = function(e, t) {
    if (e !== ~~e || e < 1 || e > Ve) throw Error(Ge + "precision");
    return Ye(new this.constructor(this), e, t);
  };
  K.round = function(e, t) {
    if (e === Ie) e = 0;
    else if (e !== ~~e || e < -Ve || e > Ve) throw Error(qt);
    return Ye(new this.constructor(this), e + this.e + 1, t);
  };
  K.sqrt = function() {
    var e, t, n, s = this, r = s.constructor, a = s.s, o = s.e, i = new r("0.5");
    if (!s.c[0]) return new r(s);
    if (a < 0) throw Error(Et + "No square root");
    a = Math.sqrt(+Je(s, true, true)), a === 0 || a === 1 / 0 ? (t = s.c.join(""), t.length + o & 1 || (t += "0"), a = Math.sqrt(t), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), e = new r((a == 1 / 0 ? "5e" : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + o)) : e = new r(a + ""), o = e.e + (r.DP += 4);
    do
      n = e, e = i.times(n.plus(s.div(n)));
    while (n.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
    return Ye(e, (r.DP -= 4) + e.e + 1, r.RM);
  };
  K.times = K.mul = function(e) {
    var t, n = this, s = n.constructor, r = n.c, a = (e = new s(e)).c, o = r.length, i = a.length, d = n.e, l = e.e;
    if (e.s = n.s == e.s ? 1 : -1, !r[0] || !a[0]) return e.c = [
      e.e = 0
    ], e;
    for (e.e = d + l, o < i && (t = r, r = a, a = t, l = o, o = i, i = l), t = new Array(l = o + i); l--; ) t[l] = 0;
    for (d = i; d--; ) {
      for (i = 0, l = o + d; l > d; ) i = t[l] + a[d] * r[l - d - 1] + i, t[l--] = i % 10, i = i / 10 | 0;
      t[l] = i;
    }
    for (i ? ++e.e : t.shift(), d = t.length; !t[--d]; ) t.pop();
    return e.c = t, e;
  };
  K.toExponential = function(e, t) {
    var n = this, s = n.c[0];
    if (e !== Ie) {
      if (e !== ~~e || e < 0 || e > Ve) throw Error(qt);
      for (n = Ye(new n.constructor(n), ++e, t); n.c.length < e; ) n.c.push(0);
    }
    return Je(n, true, !!s);
  };
  K.toFixed = function(e, t) {
    var n = this, s = n.c[0];
    if (e !== Ie) {
      if (e !== ~~e || e < 0 || e > Ve) throw Error(qt);
      for (n = Ye(new n.constructor(n), e + n.e + 1, t), e = e + n.e + 1; n.c.length < e; ) n.c.push(0);
    }
    return Je(n, false, !!s);
  };
  K[Symbol.for("nodejs.util.inspect.custom")] = K.toJSON = K.toString = function() {
    var e = this, t = e.constructor;
    return Je(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
  };
  K.toNumber = function() {
    var e = +Je(this, true, true);
    if (this.constructor.strict === true && !this.eq(e.toString())) throw Error(Et + "Imprecise conversion");
    return e;
  };
  K.toPrecision = function(e, t) {
    var n = this, s = n.constructor, r = n.c[0];
    if (e !== Ie) {
      if (e !== ~~e || e < 1 || e > Ve) throw Error(Ge + "precision");
      for (n = Ye(new s(n), e, t); n.c.length < e; ) n.c.push(0);
    }
    return Je(n, e <= n.e || n.e <= s.NE || n.e >= s.PE, !!r);
  };
  K.valueOf = function() {
    var e = this, t = e.constructor;
    if (t.strict === true) throw Error(Et + "valueOf disallowed");
    return Je(e, e.e <= t.NE || e.e >= t.PE, true);
  };
  var Ne = as();
  let js, Ks, Vs, Qe;
  os = {
    bigNumber(e, t = {
      safe: false
    }) {
      try {
        return e ? new Ne(e) : new Ne(0);
      } catch (n) {
        if (t.safe) return new Ne(0);
        throw n;
      }
    },
    formatNumber(e, t) {
      const { decimals: n, round: s = 8, safe: r = true } = t;
      return os.bigNumber(e, {
        safe: r
      }).div(new Ne(10).pow(n)).round(s);
    },
    multiply(e, t) {
      if (e === void 0 || t === void 0) return new Ne(0);
      const n = new Ne(e), s = new Ne(t);
      return n.times(s);
    },
    toFixed(e, t = 2) {
      return e === void 0 || e === "" ? new Ne(0).toFixed(t) : new Ne(e).toFixed(t);
    },
    formatNumberToLocalString(e, t = 2) {
      return e === void 0 || e === "" ? "0.00" : typeof e == "number" ? e.toLocaleString("en-US", {
        maximumFractionDigits: t,
        minimumFractionDigits: t,
        roundingMode: "floor"
      }) : parseFloat(e).toLocaleString("en-US", {
        maximumFractionDigits: t,
        minimumFractionDigits: t,
        roundingMode: "floor"
      });
    },
    parseLocalStringToNumber(e) {
      if (e === void 0 || e === "") return 0;
      const t = e.replace(/,/gu, "");
      return new Ne(t).toNumber();
    }
  };
  js = [
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
  Ks = [
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
  Vs = [
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
  qs = {
    getERC20Abi: (e) => h.USDT_CONTRACT_ADDRESSES.includes(e) ? Vs : js,
    getSwapAbi: () => Ks
  };
  Qe = {
    ConnectorExplorerIds: {
      [h.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [h.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [h.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [h.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
      [h.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
      [h.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [h.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      [h.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      [h.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      [h.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      [h.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
      [h.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
      [h.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
      [h.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
      [h.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
      [h.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
      [h.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
      [h.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [h.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
    }
  };
  Z = {
    validateCaipAddress(e) {
      var _a2;
      if (((_a2 = e.split(":")) == null ? void 0 : _a2.length) !== 3) throw new Error("Invalid CAIP Address");
      return e;
    },
    parseCaipAddress(e) {
      const t = e.split(":");
      if (t.length !== 3) throw new Error(`Invalid CAIP-10 address: ${e}`);
      const [n, s, r] = t;
      if (!n || !s || !r) throw new Error(`Invalid CAIP-10 address: ${e}`);
      return {
        chainNamespace: n,
        chainId: s,
        address: r
      };
    },
    parseCaipNetworkId(e) {
      const t = e.split(":");
      if (t.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${e}`);
      const [n, s] = t;
      if (!n || !s) throw new Error(`Invalid CAIP-2 network id: ${e}`);
      return {
        chainNamespace: n,
        chainId: s
      };
    }
  };
  Oe = {
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
    isRpcProviderError(e) {
      try {
        if (typeof e == "object" && e !== null) {
          const t = e, n = typeof t.message == "string", s = typeof t.code == "number";
          return n && s;
        }
        return false;
      } catch {
        return false;
      }
    },
    isUserRejectedMessage(e) {
      return e.toLowerCase().includes("user rejected") || e.toLowerCase().includes("user cancelled") || e.toLowerCase().includes("user canceled");
    },
    isUserRejectedRequestError(e) {
      if (Oe.isRpcProviderError(e)) {
        const t = e.code === Oe.RPC_ERROR_CODE.USER_REJECTED_REQUEST, n = e.code === Oe.RPC_ERROR_CODE.USER_REJECTED_METHODS;
        return t || n || Oe.isUserRejectedMessage(e.message);
      }
      return e instanceof Error ? Oe.isUserRejectedMessage(e.message) : false;
    }
  };
  class zs extends Error {
    constructor(t, n) {
      super(n.message, {
        cause: t
      }), this.name = Oe.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = n.code;
    }
  }
  class is extends zs {
    constructor(t) {
      super(t, {
        code: Oe.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
        message: "User rejected the request"
      }), this.name = Oe.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
  }
  k = {
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
  function Yt(e) {
    if (!e) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${e}:connected_connector_id`;
  }
  _ = {
    setItem(e, t) {
      dt() && t !== void 0 && localStorage.setItem(e, t);
    },
    getItem(e) {
      if (dt()) return localStorage.getItem(e) || void 0;
    },
    removeItem(e) {
      dt() && localStorage.removeItem(e);
    },
    clear() {
      dt() && localStorage.clear();
    }
  };
  function dt() {
    return typeof window < "u" && typeof localStorage < "u";
  }
  function Mt(e, t) {
    const n = (e == null ? void 0 : e["--apkt-accent"]) ?? (e == null ? void 0 : e["--w3m-accent"]);
    return t === "light" ? {
      "--w3m-accent": n || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    } : {
      "--w3m-accent": n || "hsla(230, 100%, 67%, 1)",
      "--w3m-background": "#202020"
    };
  }
  const Gs = Symbol(), On = Object.getPrototypeOf, an = /* @__PURE__ */ new WeakMap(), Ys = (e) => e && (an.has(e) ? an.get(e) : On(e) === Object.prototype || On(e) === Array.prototype), Js = (e) => Ys(e) && e[Gs] || null, Rn = (e, t = true) => {
    an.set(e, t);
  }, Wt = {}, wn = (e) => typeof e == "object" && e !== null, Xs = (e) => wn(e) && !At.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), cs = (e, t) => {
    const n = on.get(e);
    if ((n == null ? void 0 : n[0]) === t) return n[1];
    const s = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
    return Rn(s, true), on.set(e, [
      t,
      s
    ]), Reflect.ownKeys(e).forEach((r) => {
      if (Object.getOwnPropertyDescriptor(s, r)) return;
      const a = Reflect.get(e, r), { enumerable: o } = Reflect.getOwnPropertyDescriptor(e, r), i = {
        value: a,
        enumerable: o,
        configurable: true
      };
      if (At.has(a)) Rn(a, false);
      else if (Me.has(a)) {
        const [d, l] = Me.get(a);
        i.value = cs(d, l());
      }
      Object.defineProperty(s, r, i);
    }), Object.preventExtensions(s);
  }, Qs = (e, t, n, s) => ({
    deleteProperty(r, a) {
      const o = Reflect.get(r, a);
      n(a);
      const i = Reflect.deleteProperty(r, a);
      return i && s([
        "delete",
        [
          a
        ],
        o
      ]), i;
    },
    set(r, a, o, i) {
      const d = !e() && Reflect.has(r, a), l = Reflect.get(r, a, i);
      if (d && (Pn(l, o) || ht.has(o) && Pn(l, ht.get(o)))) return true;
      n(a), wn(o) && (o = Js(o) || o);
      const u = !Me.has(o) && er(o) ? z(o) : o;
      return t(a, u), Reflect.set(r, a, u, i), s([
        "set",
        [
          a
        ],
        o,
        l
      ]), true;
    }
  }), Me = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakSet(), on = /* @__PURE__ */ new WeakMap(), Rt = [
    1
  ], ht = /* @__PURE__ */ new WeakMap();
  let Pn = Object.is, Zs = (e, t) => new Proxy(e, t), er = Xs, tr = cs, nr = Qs;
  z = function(e = {}) {
    if (!wn(e)) throw new Error("object required");
    const t = ht.get(e);
    if (t) return t;
    let n = Rt[0];
    const s = /* @__PURE__ */ new Set(), r = (N, R = ++Rt[0]) => {
      n !== R && (a = n = R, s.forEach((T) => T(N, R)));
    };
    let a = n;
    const o = (N = Rt[0]) => (a !== N && (a = N, d.forEach(([R]) => {
      const T = R[1](N);
      T > n && (n = T);
    })), n), i = (N) => (R, T) => {
      const W = [
        ...R
      ];
      W[1] = [
        N,
        ...W[1]
      ], r(W, T);
    }, d = /* @__PURE__ */ new Map(), l = (N, R) => {
      const T = !At.has(R) && Me.get(R);
      if (T) {
        if ((Wt ? "production" : void 0) !== "production" && d.has(N)) throw new Error("prop listener already exists");
        if (s.size) {
          const W = T[2](i(N));
          d.set(N, [
            T,
            W
          ]);
        } else d.set(N, [
          T
        ]);
      }
    }, u = (N) => {
      var R;
      const T = d.get(N);
      T && (d.delete(N), (R = T[1]) == null || R.call(T));
    }, p = (N) => (s.add(N), s.size === 1 && d.forEach(([T, W], V) => {
      if ((Wt ? "production" : void 0) !== "production" && W) throw new Error("remove already exists");
      const X = T[2](i(V));
      d.set(V, [
        T,
        X
      ]);
    }), () => {
      s.delete(N), s.size === 0 && d.forEach(([T, W], V) => {
        W && (W(), d.set(V, [
          T
        ]));
      });
    });
    let w = true;
    const S = nr(() => w, l, u, r), A = Zs(e, S);
    ht.set(e, A);
    const m = [
      e,
      o,
      p
    ];
    return Me.set(A, m), Reflect.ownKeys(e).forEach((N) => {
      const R = Object.getOwnPropertyDescriptor(e, N);
      "value" in R && R.writable && (A[N] = e[N]);
    }), w = false, A;
  };
  ee = function(e, t, n) {
    const s = Me.get(e);
    (Wt ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
    let r;
    const a = [], o = s[2];
    let i = false;
    const l = o((u) => {
      a.push(u), r || (r = Promise.resolve().then(() => {
        r = void 0, i && t(a.splice(0));
      }));
    });
    return i = true, () => {
      i = false, l();
    };
  };
  function ft(e) {
    const t = Me.get(e);
    (Wt ? "production" : void 0) !== "production" && !t && console.warn("Please use proxy object");
    const [n, s] = t;
    return tr(n, s());
  }
  function Ct(e) {
    return At.add(e), e;
  }
  function sr() {
    return {
      proxyStateMap: Me,
      refSet: At,
      snapCache: on,
      versionHolder: Rt,
      proxyCache: ht
    };
  }
  te = function(e, t, n, s) {
    let r = e[t];
    return ee(e, () => {
      const a = e[t];
      Object.is(r, a) || n(r = a);
    });
  };
  const { proxyStateMap: rr, snapCache: ar } = sr(), St = (e) => rr.has(e);
  function or(e) {
    const t = [];
    let n = 0;
    const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), a = () => {
      const l = ar.get(i), u = l == null ? void 0 : l[1];
      if (u && !r.has(u)) {
        const p = new Map(s);
        r.set(u, p);
      }
    }, o = (l) => r.get(l) || s, i = {
      data: t,
      index: n,
      epoch: 0,
      get size() {
        return St(this) || a(), o(this).size;
      },
      get(l) {
        const p = o(this).get(l);
        if (p === void 0) {
          this.epoch;
          return;
        }
        return this.data[p];
      },
      has(l) {
        const u = o(this);
        return this.epoch, u.has(l);
      },
      set(l, u) {
        if (!St(this)) throw new Error("Cannot perform mutations on a snapshot");
        const p = s.get(l);
        return p === void 0 ? (s.set(l, this.index), this.data[this.index++] = u) : this.data[p] = u, this.epoch++, this;
      },
      delete(l) {
        if (!St(this)) throw new Error("Cannot perform mutations on a snapshot");
        const u = s.get(l);
        return u === void 0 ? false : (delete this.data[u], s.delete(l), this.epoch++, true);
      },
      clear() {
        if (!St(this)) throw new Error("Cannot perform mutations on a snapshot");
        this.data.length = 0, this.index = 0, this.epoch++, s.clear();
      },
      forEach(l) {
        this.epoch, o(this).forEach((p, w) => {
          l(this.data[p], w, this);
        });
      },
      *entries() {
        this.epoch;
        const l = o(this);
        for (const [u, p] of l) yield [
          u,
          this.data[p]
        ];
      },
      *keys() {
        this.epoch;
        const l = o(this);
        for (const u of l.keys()) yield u;
      },
      *values() {
        this.epoch;
        const l = o(this);
        for (const u of l.values()) yield this.data[u];
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
    }, d = z(i);
    return Object.defineProperties(d, {
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
    }), Object.seal(d), d;
  }
  var Un = {};
  let Jt, ds, ir, Pt, cr, Xt;
  Jt = (typeof rn < "u" && typeof Un < "u" ? Un.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
  ds = [
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
  ir = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
  L = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: Jt,
    SECURE_SITE_DASHBOARD: `${Jt}/dashboard`,
    SECURE_SITE_FAVICON: `${Jt}/images/favicon.png`,
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
      h.CHAIN.EVM,
      h.CHAIN.SOLANA
    ],
    SEND_PARAMS_SUPPORTED_CHAINS: [
      h.CHAIN.EVM
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
      h.CHAIN.EVM
    ],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
      h.CHAIN.EVM,
      h.CHAIN.SOLANA
    ],
    PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
      h.CHAIN.EVM,
      h.CHAIN.SOLANA
    ],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
      h.CHAIN.EVM,
      h.CHAIN.TON
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
      h.CHAIN.EVM,
      h.CHAIN.SOLANA
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
      Qe.ConnectorExplorerIds[h.CONNECTOR_ID.COINBASE],
      Qe.ConnectorExplorerIds[h.CONNECTOR_ID.COINBASE_SDK],
      Qe.ConnectorExplorerIds[h.CONNECTOR_ID.BASE_ACCOUNT],
      Qe.ConnectorExplorerIds[h.SOLFLARE_CONNECTOR_NAME],
      Qe.ConnectorExplorerIds[h.PHANTOM_CONNECTOR_NAME],
      Qe.ConnectorExplorerIds[h.BINANCE_CONNECTOR_NAME]
    ],
    DEFAULT_CONNECT_METHOD_ORDER: [
      "email",
      "social",
      "wallet"
    ]
  };
  C = {
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
    isCacheExpired(e, t) {
      return Date.now() - e > t;
    },
    getActiveNetworkProps() {
      const e = C.getActiveNamespace(), t = C.getActiveCaipNetworkId(), n = t ? t.split(":")[1] : void 0, s = n ? isNaN(Number(n)) ? n : Number(n) : void 0;
      return {
        namespace: e,
        caipNetworkId: t,
        chainId: s
      };
    },
    setWalletConnectDeepLink({ name: e, href: t }) {
      try {
        _.setItem(k.DEEPLINK_CHOICE, JSON.stringify({
          href: t,
          name: e
        }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    getWalletConnectDeepLink() {
      try {
        const e = _.getItem(k.DEEPLINK_CHOICE);
        if (e) return JSON.parse(e);
      } catch {
        console.info("Unable to get WalletConnect deep link");
      }
    },
    deleteWalletConnectDeepLink() {
      try {
        _.removeItem(k.DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to delete WalletConnect deep link");
      }
    },
    setActiveNamespace(e) {
      try {
        _.setItem(k.ACTIVE_NAMESPACE, e);
      } catch {
        console.info("Unable to set active namespace");
      }
    },
    setActiveCaipNetworkId(e) {
      try {
        _.setItem(k.ACTIVE_CAIP_NETWORK_ID, e), C.setActiveNamespace(e.split(":")[0]);
      } catch {
        console.info("Unable to set active caip network id");
      }
    },
    getActiveCaipNetworkId() {
      try {
        return _.getItem(k.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to get active caip network id");
        return;
      }
    },
    deleteActiveCaipNetworkId() {
      try {
        _.removeItem(k.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to delete active caip network id");
      }
    },
    deleteConnectedConnectorId(e) {
      try {
        const t = Yt(e);
        _.removeItem(t);
      } catch {
        console.info("Unable to delete connected connector id");
      }
    },
    setAppKitRecent(e) {
      try {
        const t = C.getRecentWallets();
        t.find((s) => s.id === e.id) || (t.unshift(e), t.length > 2 && t.pop(), _.setItem(k.RECENT_WALLETS, JSON.stringify(t)), _.setItem(k.RECENT_WALLET, JSON.stringify(e)));
      } catch {
        console.info("Unable to set AppKit recent");
      }
    },
    getRecentWallets() {
      try {
        const e = _.getItem(k.RECENT_WALLETS);
        return e ? JSON.parse(e) : [];
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return [];
    },
    getRecentWallet() {
      try {
        const e = _.getItem(k.RECENT_WALLET);
        return e ? JSON.parse(e) : null;
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return null;
    },
    deleteRecentWallet() {
      try {
        _.removeItem(k.RECENT_WALLET);
      } catch {
        console.info("Unable to delete AppKit recent");
      }
    },
    setConnectedConnectorId(e, t) {
      try {
        const n = Yt(e);
        _.setItem(n, t);
      } catch {
        console.info("Unable to set Connected Connector Id");
      }
    },
    getActiveNamespace() {
      try {
        return _.getItem(k.ACTIVE_NAMESPACE);
      } catch {
        console.info("Unable to get active namespace");
      }
    },
    getConnectedConnectorId(e) {
      if (e) try {
        const t = Yt(e);
        return _.getItem(t);
      } catch {
        console.info("Unable to get connected connector id in namespace", e);
      }
    },
    setConnectedSocialProvider(e) {
      try {
        _.setItem(k.CONNECTED_SOCIAL, e);
      } catch {
        console.info("Unable to set connected social provider");
      }
    },
    getConnectedSocialProvider() {
      try {
        return _.getItem(k.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to get connected social provider");
      }
    },
    deleteConnectedSocialProvider() {
      try {
        _.removeItem(k.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to delete connected social provider");
      }
    },
    getConnectedSocialUsername() {
      try {
        return _.getItem(k.CONNECTED_SOCIAL_USERNAME);
      } catch {
        console.info("Unable to get connected social username");
      }
    },
    getStoredActiveCaipNetworkId() {
      var _a2, _b;
      return (_b = (_a2 = _.getItem(k.ACTIVE_CAIP_NETWORK_ID)) == null ? void 0 : _a2.split(":")) == null ? void 0 : _b[1];
    },
    setConnectionStatus(e) {
      try {
        _.setItem(k.CONNECTION_STATUS, e);
      } catch {
        console.info("Unable to set connection status");
      }
    },
    getConnectionStatus() {
      try {
        return _.getItem(k.CONNECTION_STATUS);
      } catch {
        return;
      }
    },
    getConnectedNamespaces() {
      try {
        const e = _.getItem(k.CONNECTED_NAMESPACES);
        return (e == null ? void 0 : e.length) ? e.split(",") : [];
      } catch {
        return [];
      }
    },
    setConnectedNamespaces(e) {
      try {
        const t = Array.from(new Set(e));
        _.setItem(k.CONNECTED_NAMESPACES, t.join(","));
      } catch {
        console.info("Unable to set namespaces in storage");
      }
    },
    addConnectedNamespace(e) {
      try {
        const t = C.getConnectedNamespaces();
        t.includes(e) || (t.push(e), C.setConnectedNamespaces(t));
      } catch {
        console.info("Unable to add connected namespace");
      }
    },
    removeConnectedNamespace(e) {
      try {
        const t = C.getConnectedNamespaces(), n = t.indexOf(e);
        n > -1 && (t.splice(n, 1), C.setConnectedNamespaces(t));
      } catch {
        console.info("Unable to remove connected namespace");
      }
    },
    getTelegramSocialProvider() {
      try {
        return _.getItem(k.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        return console.info("Unable to get telegram social provider"), null;
      }
    },
    setTelegramSocialProvider(e) {
      try {
        _.setItem(k.TELEGRAM_SOCIAL_PROVIDER, e);
      } catch {
        console.info("Unable to set telegram social provider");
      }
    },
    removeTelegramSocialProvider() {
      try {
        _.removeItem(k.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        console.info("Unable to remove telegram social provider");
      }
    },
    getBalanceCache() {
      let e = {};
      try {
        const t = _.getItem(k.PORTFOLIO_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return e;
    },
    removeAddressFromBalanceCache(e) {
      try {
        const t = C.getBalanceCache();
        _.setItem(k.PORTFOLIO_CACHE, JSON.stringify({
          ...t,
          [e]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", e);
      }
    },
    getBalanceCacheForCaipAddress(e) {
      try {
        const n = C.getBalanceCache()[e];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.portfolio)) return n.balance;
        C.removeAddressFromBalanceCache(e);
      } catch {
        console.info("Unable to get balance cache for address", e);
      }
    },
    updateBalanceCache(e) {
      try {
        const t = C.getBalanceCache();
        t[e.caipAddress] = e, _.setItem(k.PORTFOLIO_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update balance cache", e);
      }
    },
    getNativeBalanceCache() {
      let e = {};
      try {
        const t = _.getItem(k.NATIVE_BALANCE_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return e;
    },
    removeAddressFromNativeBalanceCache(e) {
      try {
        const t = C.getBalanceCache();
        _.setItem(k.NATIVE_BALANCE_CACHE, JSON.stringify({
          ...t,
          [e]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", e);
      }
    },
    getNativeBalanceCacheForCaipAddress(e) {
      try {
        const n = C.getNativeBalanceCache()[e];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.nativeBalance)) return n;
        console.info("Discarding cache for address", e), C.removeAddressFromBalanceCache(e);
      } catch {
        console.info("Unable to get balance cache for address", e);
      }
    },
    updateNativeBalanceCache(e) {
      try {
        const t = C.getNativeBalanceCache();
        t[e.caipAddress] = e, _.setItem(k.NATIVE_BALANCE_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update balance cache", e);
      }
    },
    getEnsCache() {
      let e = {};
      try {
        const t = _.getItem(k.ENS_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get ens name cache");
      }
      return e;
    },
    getEnsFromCacheForAddress(e) {
      try {
        const n = C.getEnsCache()[e];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.ens)) return n.ens;
        C.removeEnsFromCache(e);
      } catch {
        console.info("Unable to get ens name from cache", e);
      }
    },
    updateEnsCache(e) {
      try {
        const t = C.getEnsCache();
        t[e.address] = e, _.setItem(k.ENS_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update ens name cache", e);
      }
    },
    removeEnsFromCache(e) {
      try {
        const t = C.getEnsCache();
        _.setItem(k.ENS_CACHE, JSON.stringify({
          ...t,
          [e]: void 0
        }));
      } catch {
        console.info("Unable to remove ens name from cache", e);
      }
    },
    getIdentityCache() {
      let e = {};
      try {
        const t = _.getItem(k.IDENTITY_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get identity cache");
      }
      return e;
    },
    getIdentityFromCacheForAddress(e) {
      try {
        const n = C.getIdentityCache()[e];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.identity)) return n.identity;
        C.removeIdentityFromCache(e);
      } catch {
        console.info("Unable to get identity from cache", e);
      }
    },
    updateIdentityCache(e) {
      try {
        const t = C.getIdentityCache();
        t[e.address] = {
          identity: e.identity,
          timestamp: e.timestamp
        }, _.setItem(k.IDENTITY_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update identity cache", e);
      }
    },
    removeIdentityFromCache(e) {
      try {
        const t = C.getIdentityCache();
        _.setItem(k.IDENTITY_CACHE, JSON.stringify({
          ...t,
          [e]: void 0
        }));
      } catch {
        console.info("Unable to remove identity from cache", e);
      }
    },
    getTonWalletsCache() {
      try {
        const e = _.getItem(k.TON_WALLETS_CACHE), t = e ? JSON.parse(e) : void 0;
        if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.tonWallets)) return t;
        C.removeTonWalletsCache();
      } catch {
        console.info("Unable to get ton wallets cache");
      }
    },
    updateTonWalletsCache(e) {
      try {
        const t = C.getTonWalletsCache() || {
          timestamp: 0,
          wallets: []
        };
        t.timestamp = (/* @__PURE__ */ new Date()).getTime(), t.wallets = e, _.setItem(k.TON_WALLETS_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update ton wallets cache", e);
      }
    },
    removeTonWalletsCache() {
      try {
        _.removeItem(k.TON_WALLETS_CACHE);
      } catch {
        console.info("Unable to remove ton wallets cache");
      }
    },
    clearAddressCache() {
      try {
        _.removeItem(k.PORTFOLIO_CACHE), _.removeItem(k.NATIVE_BALANCE_CACHE), _.removeItem(k.ENS_CACHE), _.removeItem(k.IDENTITY_CACHE), _.removeItem(k.HISTORY_TRANSACTIONS_CACHE);
      } catch {
        console.info("Unable to clear address cache");
      }
    },
    setPreferredAccountTypes(e) {
      try {
        _.setItem(k.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
      } catch {
        console.info("Unable to set preferred account types", e);
      }
    },
    getPreferredAccountTypes() {
      try {
        const e = _.getItem(k.PREFERRED_ACCOUNT_TYPES);
        return e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get preferred account types");
      }
      return {};
    },
    setConnections(e, t) {
      try {
        const n = C.getConnections(), s = n[t] ?? [], r = /* @__PURE__ */ new Map();
        for (const o of s) r.set(o.connectorId, {
          ...o
        });
        for (const o of e) {
          const i = r.get(o.connectorId), d = o.connectorId === h.CONNECTOR_ID.AUTH;
          if (i && !d) {
            const l = new Set(i.accounts.map((p) => p.address.toLowerCase())), u = o.accounts.filter((p) => !l.has(p.address.toLowerCase()));
            i.accounts.push(...u);
          } else r.set(o.connectorId, {
            ...o
          });
        }
        const a = {
          ...n,
          [t]: Array.from(r.values())
        };
        _.setItem(k.CONNECTIONS, JSON.stringify(a));
      } catch (n) {
        console.error("Unable to sync connections to storage", n);
      }
    },
    getConnections() {
      try {
        const e = _.getItem(k.CONNECTIONS);
        return e ? JSON.parse(e) : {};
      } catch (e) {
        return console.error("Unable to get connections from storage", e), {};
      }
    },
    deleteAddressFromConnection({ connectorId: e, address: t, namespace: n }) {
      try {
        const s = C.getConnections(), r = s[n] ?? [], a = new Map(r.map((i) => [
          i.connectorId,
          i
        ])), o = a.get(e);
        o && (o.accounts.filter((d) => d.address.toLowerCase() !== t.toLowerCase()).length === 0 ? a.delete(e) : a.set(e, {
          ...o,
          accounts: o.accounts.filter((d) => d.address.toLowerCase() !== t.toLowerCase())
        })), _.setItem(k.CONNECTIONS, JSON.stringify({
          ...s,
          [n]: Array.from(a.values())
        }));
      } catch {
        console.error(`Unable to remove address "${t}" from connector "${e}" in namespace "${n}"`);
      }
    },
    getDisconnectedConnectorIds() {
      try {
        const e = _.getItem(k.DISCONNECTED_CONNECTOR_IDS);
        return e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get disconnected connector ids");
      }
      return {};
    },
    addDisconnectedConnectorId(e, t) {
      try {
        const n = C.getDisconnectedConnectorIds(), s = n[t] ?? [];
        s.push(e), _.setItem(k.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...n,
          [t]: Array.from(new Set(s))
        }));
      } catch {
        console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`);
      }
    },
    removeDisconnectedConnectorId(e, t) {
      try {
        const n = C.getDisconnectedConnectorIds();
        let s = n[t] ?? [];
        s = s.filter((r) => r.toLowerCase() !== e.toLowerCase()), _.setItem(k.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
          ...n,
          [t]: Array.from(new Set(s))
        }));
      } catch {
        console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`);
      }
    },
    isConnectorDisconnected(e, t) {
      try {
        return (C.getDisconnectedConnectorIds()[t] ?? []).some((r) => r.toLowerCase() === e.toLowerCase());
      } catch {
        console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`);
      }
      return false;
    },
    getTransactionsCache() {
      try {
        const e = _.getItem(k.HISTORY_TRANSACTIONS_CACHE);
        return e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get transactions cache");
      }
      return {};
    },
    getTransactionsCacheForAddress({ address: e, chainId: t = "" }) {
      var _a2;
      try {
        const s = (_a2 = C.getTransactionsCache()[e]) == null ? void 0 : _a2[t];
        if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.transactionsHistory)) return s.transactions;
        C.removeTransactionsCache({
          address: e,
          chainId: t
        });
      } catch {
        console.info("Unable to get transactions cache");
      }
    },
    updateTransactionsCache({ address: e, chainId: t = "", timestamp: n, transactions: s }) {
      try {
        const r = C.getTransactionsCache();
        r[e] = {
          ...r[e],
          [t]: {
            timestamp: n,
            transactions: s
          }
        }, _.setItem(k.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(r));
      } catch {
        console.info("Unable to update transactions cache", {
          address: e,
          chainId: t,
          timestamp: n,
          transactions: s
        });
      }
    },
    removeTransactionsCache({ address: e, chainId: t }) {
      try {
        const n = C.getTransactionsCache(), s = (n == null ? void 0 : n[e]) || {}, { [t]: r, ...a } = s;
        _.setItem(k.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
          ...n,
          [e]: a
        }));
      } catch {
        console.info("Unable to remove transactions cache", {
          address: e,
          chainId: t
        });
      }
    },
    getTokenPriceCache() {
      try {
        const e = _.getItem(k.TOKEN_PRICE_CACHE);
        return e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get token price cache");
      }
      return {};
    },
    getTokenPriceCacheForAddresses(e) {
      try {
        const n = C.getTokenPriceCache()[e.join(",")];
        if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.tokenPrice)) return n.tokenPrice;
        C.removeTokenPriceCache(e);
      } catch {
        console.info("Unable to get token price cache for addresses", e);
      }
    },
    updateTokenPriceCache(e) {
      try {
        const t = C.getTokenPriceCache();
        t[e.addresses.join(",")] = {
          timestamp: e.timestamp,
          tokenPrice: e.tokenPrice
        }, _.setItem(k.TOKEN_PRICE_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update token price cache", e);
      }
    },
    removeTokenPriceCache(e) {
      try {
        const t = C.getTokenPriceCache();
        _.setItem(k.TOKEN_PRICE_CACHE, JSON.stringify({
          ...t,
          [e.join(",")]: void 0
        }));
      } catch {
        console.info("Unable to remove token price cache", e);
      }
    },
    getLatestAppKitVersion() {
      try {
        const e = this.getLatestAppKitVersionCache(), t = e == null ? void 0 : e.version;
        return t && !this.isCacheExpired(e.timestamp, this.cacheExpiry.latestAppKitVersion) ? t : void 0;
      } catch {
        console.info("Unable to get latest AppKit version");
      }
    },
    getLatestAppKitVersionCache() {
      try {
        const e = _.getItem(k.LATEST_APPKIT_VERSION);
        return e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get latest AppKit version cache");
      }
      return {};
    },
    updateLatestAppKitVersion(e) {
      try {
        const t = C.getLatestAppKitVersionCache();
        t.timestamp = e.timestamp, t.version = e.version, _.setItem(k.LATEST_APPKIT_VERSION, JSON.stringify(t));
      } catch {
        console.info("Unable to update latest AppKit version on local storage", e);
      }
    }
  };
  y = {
    getWindow() {
      if (!(typeof window > "u")) return window;
    },
    isMobile() {
      var _a2;
      return this.isClient() ? !!((window == null ? void 0 : window.matchMedia) && typeof window.matchMedia == "function" && ((_a2 = window.matchMedia("(pointer:coarse)")) == null ? void 0 : _a2.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : false;
    },
    checkCaipNetwork(e, t = "") {
      return e == null ? void 0 : e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase());
    },
    isAndroid() {
      if (!this.isMobile()) return false;
      const e = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return y.isMobile() && e.includes("android");
    },
    isIos() {
      if (!this.isMobile()) return false;
      const e = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return e.includes("iphone") || e.includes("ipad");
    },
    isSafari() {
      return this.isClient() ? (window == null ? void 0 : window.navigator.userAgent.toLowerCase()).includes("safari") : false;
    },
    isClient() {
      return typeof window < "u";
    },
    isPairingExpired(e) {
      return e ? e - Date.now() <= L.TEN_SEC_MS : true;
    },
    isAllowedRetry(e, t = L.ONE_SEC_MS) {
      return Date.now() - e >= t;
    },
    copyToClopboard(e) {
      navigator.clipboard.writeText(e);
    },
    isIframe() {
      try {
        return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
      } catch {
        return false;
      }
    },
    isSafeApp() {
      var _a2, _b;
      if (y.isClient() && window.self !== window.top) try {
        const e = (_b = (_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.ancestorOrigins) == null ? void 0 : _b[0], t = "https://app.safe.global";
        if (e) {
          const n = new URL(e), s = new URL(t);
          return n.hostname === s.hostname;
        }
      } catch {
        return false;
      }
      return false;
    },
    getPairingExpiry() {
      return Date.now() + L.FOUR_MINUTES_MS;
    },
    getNetworkId(e) {
      return e == null ? void 0 : e.split(":")[1];
    },
    getPlainAddress(e) {
      return e == null ? void 0 : e.split(":")[2];
    },
    async wait(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    debounce(e, t = 500) {
      let n;
      return (...s) => {
        function r() {
          e(...s);
        }
        n && clearTimeout(n), n = setTimeout(r, t);
      };
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    formatNativeUrl(e, t, n = null) {
      if (y.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
      let s = e, r = n;
      s.includes("://") || (s = e.replaceAll("/", "").replaceAll(":", ""), s = `${s}://`), s.endsWith("/") || (s = `${s}/`), r && !(r == null ? void 0 : r.endsWith("/")) && (r = `${r}/`), this.isTelegram() && this.isAndroid() && (t = encodeURIComponent(t));
      const a = encodeURIComponent(t);
      return {
        redirect: `${s}wc?uri=${a}`,
        redirectUniversalLink: r ? `${r}wc?uri=${a}` : void 0,
        href: s
      };
    },
    formatUniversalUrl(e, t) {
      if (!y.isHttpUrl(e)) return this.formatNativeUrl(e, t);
      let n = e;
      n.endsWith("/") || (n = `${n}/`);
      const s = encodeURIComponent(t);
      return {
        redirect: `${n}wc?uri=${s}`,
        href: n
      };
    },
    getOpenTargetForPlatform(e) {
      return e === "popupWindow" ? e : this.isTelegram() ? C.getTelegramSocialProvider() ? "_top" : "_blank" : e;
    },
    openHref(e, t, n) {
      window == null ? void 0 : window.open(e, this.getOpenTargetForPlatform(t), n || "noreferrer noopener");
    },
    returnOpenHref(e, t, n) {
      return window == null ? void 0 : window.open(e, this.getOpenTargetForPlatform(t), n || "noreferrer noopener");
    },
    isTelegram() {
      return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
    },
    isPWA() {
      var _a2, _b;
      if (typeof window > "u") return false;
      const e = (window == null ? void 0 : window.matchMedia) && typeof window.matchMedia == "function" ? (_a2 = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : _a2.matches : false, t = (_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.standalone;
      return !!(e || t);
    },
    async preloadImage(e) {
      const t = new Promise((n, s) => {
        const r = new Image();
        r.onload = n, r.onerror = s, r.crossOrigin = "anonymous", r.src = e;
      });
      return Promise.race([
        t,
        y.wait(2e3)
      ]);
    },
    parseBalance(e, t) {
      let n = "0.000";
      if (typeof e == "string") {
        const d = Number(e);
        if (!isNaN(d)) {
          const l = (Math.floor(d * 1e3) / 1e3).toFixed(3);
          l && (n = l);
        }
      }
      const [s, r] = n.split("."), a = s || "0", o = r || "000";
      return {
        formattedText: `${a}.${o}${t ? ` ${t}` : ""}`,
        value: a,
        decimals: o,
        symbol: t
      };
    },
    getApiUrl() {
      return h.W3M_API_URL;
    },
    getBlockchainApiUrl() {
      return h.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
      return h.PULSE_API_URL;
    },
    getUUID() {
      return (crypto == null ? void 0 : crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
        const t = Math.random() * 16 | 0;
        return (e === "x" ? t : t & 3 | 8).toString(16);
      });
    },
    parseError(e) {
      var _a2, _b;
      return typeof e == "string" ? e : typeof ((_b = (_a2 = e == null ? void 0 : e.issues) == null ? void 0 : _a2[0]) == null ? void 0 : _b.message) == "string" ? e.issues[0].message : e instanceof Error ? e.message : "Unknown error";
    },
    sortRequestedNetworks(e, t = []) {
      const n = {};
      return t && e && (e.forEach((s, r) => {
        n[s] = r;
      }), t.sort((s, r) => {
        const a = n[s.id], o = n[r.id];
        return a !== void 0 && o !== void 0 ? a - o : a !== void 0 ? -1 : o !== void 0 ? 1 : 0;
      })), t;
    },
    calculateBalance(e) {
      let t = 0;
      for (const n of e) t += n.value ?? 0;
      return t;
    },
    formatTokenBalance(e) {
      const t = e.toFixed(2), [n, s] = t.split(".");
      return {
        dollars: n,
        pennies: s
      };
    },
    isAddress(e, t = "eip155") {
      switch (t) {
        case "eip155":
          if (/^(?:0x)?[0-9a-f]{40}$/iu.test(e)) {
            if (/^(?:0x)?[0-9a-f]{40}$/iu.test(e) || /^(?:0x)?[0-9A-F]{40}$/iu.test(e)) return true;
          } else return false;
          return false;
        case "solana":
          return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
        case "bip122": {
          const n = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e), s = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e), r = /^bc1[a-z0-9]{39,87}$/u.test(e), a = /^bc1p[a-z0-9]{58}$/u.test(e);
          return n || s || r || a;
        }
        default:
          return false;
      }
    },
    uniqueBy(e, t) {
      const n = /* @__PURE__ */ new Set();
      return e.filter((s) => {
        const r = s[t];
        return n.has(r) ? false : (n.add(r), true);
      });
    },
    generateSdkVersion(e, t, n) {
      const r = e.length === 0 ? L.ADAPTER_TYPES.UNIVERSAL : e.map((a) => a.adapterType).join(",");
      return `${t}-${r}-${n}`;
    },
    createAccount(e, t, n, s, r) {
      return {
        namespace: e,
        address: t,
        type: n,
        publicKey: s,
        path: r
      };
    },
    isCaipAddress(e) {
      if (typeof e != "string") return false;
      const t = e.split(":"), n = t[0];
      return t.filter(Boolean).length === 3 && n in h.CHAIN_NAME_MAP;
    },
    getAccount(e) {
      return e ? typeof e == "string" ? {
        address: e,
        chainId: void 0
      } : {
        address: e.address,
        chainId: e.chainId
      } : {
        address: void 0,
        chainId: void 0
      };
    },
    isMac() {
      const e = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return e.includes("macintosh") && !e.includes("safari");
    },
    formatTelegramSocialLoginUrl(e) {
      const t = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, n = "state=";
      if (new URL(e).host === "auth.magic.link") {
        const r = "provider_authorization_url=", a = e.substring(e.indexOf(r) + r.length), o = this.injectIntoUrl(decodeURIComponent(a), n, t);
        return e.replace(a, encodeURIComponent(o));
      }
      return this.injectIntoUrl(e, n, t);
    },
    injectIntoUrl(e, t, n) {
      const s = e.indexOf(t);
      if (s === -1) throw new Error(`${t} parameter not found in the URL: ${e}`);
      const r = e.indexOf("&", s), a = t.length, o = r !== -1 ? r : e.length, i = e.substring(0, s + a), d = e.substring(s + a, o), l = e.substring(r), u = d + n;
      return i + u + l;
    },
    isNumber(e) {
      return typeof e != "number" && typeof e != "string" ? false : !isNaN(Number(e));
    }
  };
  Pt = {
    STORAGE_KEY: "@appkit-wallet/",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
  };
  Re = {
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
  cr = {
    set(e, t) {
      Xt.isClient && localStorage.setItem(`${Pt.STORAGE_KEY}${e}`, t);
    },
    get(e) {
      return Xt.isClient ? localStorage.getItem(`${Pt.STORAGE_KEY}${e}`) : null;
    },
    delete(e, t) {
      Xt.isClient && (t ? localStorage.removeItem(e) : localStorage.removeItem(`${Pt.STORAGE_KEY}${e}`));
    }
  };
  Xt = {
    isClient: typeof window < "u"
  };
  async function ot(...e) {
    const t = await fetch(...e);
    if (!t.ok) throw new Error(`HTTP status code: ${t.status}`, {
      cause: t
    });
    return t;
  }
  Nt = class {
    constructor({ baseUrl: t, clientId: n }) {
      this.baseUrl = t, this.clientId = n;
    }
    async get({ headers: t, signal: n, cache: s, ...r }) {
      const a = this.createUrl(r);
      return (await ot(a, {
        method: "GET",
        headers: t,
        signal: n,
        cache: s
      })).json();
    }
    async getBlob({ headers: t, signal: n, ...s }) {
      const r = this.createUrl(s);
      return (await ot(r, {
        method: "GET",
        headers: t,
        signal: n
      })).blob();
    }
    async post({ body: t, headers: n, signal: s, ...r }) {
      const a = this.createUrl(r);
      return (await ot(a, {
        method: "POST",
        headers: n,
        body: t ? JSON.stringify(t) : void 0,
        signal: s
      })).json();
    }
    async put({ body: t, headers: n, signal: s, ...r }) {
      const a = this.createUrl(r);
      return (await ot(a, {
        method: "PUT",
        headers: n,
        body: t ? JSON.stringify(t) : void 0,
        signal: s
      })).json();
    }
    async delete({ body: t, headers: n, signal: s, ...r }) {
      const a = this.createUrl(r);
      return (await ot(a, {
        method: "DELETE",
        headers: n,
        body: t ? JSON.stringify(t) : void 0,
        signal: s
      })).json();
    }
    createUrl({ path: t, params: n }) {
      const s = new URL(t, this.baseUrl);
      return n && Object.entries(n).forEach(([r, a]) => {
        a && s.searchParams.append(r, a);
      }), this.clientId && s.searchParams.append("clientId", this.clientId), s;
    }
    sendBeacon({ body: t, ...n }) {
      const s = this.createUrl(n);
      return navigator.sendBeacon(s.toString(), t ? JSON.stringify(t) : void 0);
    }
  };
  let cn, v, $e, J, dr, lr, ls, ne, ur, pr, hr, fr, Pe, Cr;
  cn = {
    getFeatureValue(e, t) {
      const n = t == null ? void 0 : t[e];
      return n === void 0 ? L.DEFAULT_FEATURES[e] : n;
    },
    filterSocialsByPlatform(e) {
      if (!e || !e.length) return e;
      let t = e;
      return y.isTelegram() && (y.isIos() && (t = t.filter((n) => n !== "google")), y.isMac() && (t = t.filter((n) => n !== "x")), y.isAndroid() && (t = t.filter((n) => ![
        "facebook",
        "x"
      ].includes(n)))), y.isMobile() && (t = t.filter((n) => n !== "facebook")), t;
    },
    isSocialsEnabled() {
      var _a2, _b, _c, _d2;
      return Array.isArray((_a2 = f.state.features) == null ? void 0 : _a2.socials) && ((_b = f.state.features) == null ? void 0 : _b.socials.length) > 0 || Array.isArray((_c = f.state.remoteFeatures) == null ? void 0 : _c.socials) && ((_d2 = f.state.remoteFeatures) == null ? void 0 : _d2.socials.length) > 0;
    },
    isEmailEnabled() {
      var _a2, _b;
      return !!(((_a2 = f.state.features) == null ? void 0 : _a2.email) || ((_b = f.state.remoteFeatures) == null ? void 0 : _b.email));
    }
  };
  v = z({
    features: L.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: L.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false,
    remoteFeatures: {},
    enableMobileFullScreen: false,
    coinbasePreference: "all"
  });
  f = {
    state: v,
    subscribeKey(e, t) {
      return te(v, e, t);
    },
    setOptions(e) {
      Object.assign(v, e);
    },
    setRemoteFeatures(e) {
      var _a2, _b;
      if (!e) return;
      const t = {
        ...v.remoteFeatures,
        ...e
      };
      v.remoteFeatures = t, ((_a2 = v.remoteFeatures) == null ? void 0 : _a2.socials) && (v.remoteFeatures.socials = cn.filterSocialsByPlatform(v.remoteFeatures.socials)), ((_b = v.features) == null ? void 0 : _b.pay) && (v.remoteFeatures.email = false, v.remoteFeatures.socials = false);
    },
    setFeatures(e) {
      var _a2;
      if (!e) return;
      v.features || (v.features = L.DEFAULT_FEATURES);
      const t = {
        ...v.features,
        ...e
      };
      v.features = t, ((_a2 = v.features) == null ? void 0 : _a2.pay) && v.remoteFeatures && (v.remoteFeatures.email = false, v.remoteFeatures.socials = false);
    },
    setProjectId(e) {
      v.projectId = e;
    },
    setCustomRpcUrls(e) {
      v.customRpcUrls = e;
    },
    setAllWallets(e) {
      v.allWallets = e;
    },
    setIncludeWalletIds(e) {
      v.includeWalletIds = e;
    },
    setExcludeWalletIds(e) {
      v.excludeWalletIds = e;
    },
    setFeaturedWalletIds(e) {
      v.featuredWalletIds = e;
    },
    setTokens(e) {
      v.tokens = e;
    },
    setTermsConditionsUrl(e) {
      v.termsConditionsUrl = e;
    },
    setPrivacyPolicyUrl(e) {
      v.privacyPolicyUrl = e;
    },
    setCustomWallets(e) {
      v.customWallets = e;
    },
    setIsSiweEnabled(e) {
      v.isSiweEnabled = e;
    },
    setIsUniversalProvider(e) {
      v.isUniversalProvider = e;
    },
    setSdkVersion(e) {
      v.sdkVersion = e;
    },
    setMetadata(e) {
      v.metadata = e;
    },
    setDisableAppend(e) {
      v.disableAppend = e;
    },
    setEIP6963Enabled(e) {
      v.enableEIP6963 = e;
    },
    setDebug(e) {
      v.debug = e;
    },
    setEnableWalletGuide(e) {
      v.enableWalletGuide = e;
    },
    setEnableAuthLogger(e) {
      v.enableAuthLogger = e;
    },
    setEnableWallets(e) {
      v.enableWallets = e;
    },
    setPreferUniversalLinks(e) {
      v.experimental_preferUniversalLinks = e;
    },
    setSIWX(e) {
      if (e) for (const [t, n] of Object.entries(L.SIWX_DEFAULTS)) e[t] ?? (e[t] = n);
      v.siwx = e;
    },
    setConnectMethodsOrder(e) {
      v.features = {
        ...v.features,
        connectMethodsOrder: e
      };
    },
    setWalletFeaturesOrder(e) {
      v.features = {
        ...v.features,
        walletFeaturesOrder: e
      };
    },
    setSocialsOrder(e) {
      v.remoteFeatures = {
        ...v.remoteFeatures,
        socials: e
      };
    },
    setCollapseWallets(e) {
      v.features = {
        ...v.features,
        collapseWallets: e
      };
    },
    setEnableEmbedded(e) {
      v.enableEmbedded = e;
    },
    setAllowUnsupportedChain(e) {
      v.allowUnsupportedChain = e;
    },
    setManualWCControl(e) {
      v.manualWCControl = e;
    },
    setEnableNetworkSwitch(e) {
      v.enableNetworkSwitch = e;
    },
    setEnableMobileFullScreen(e) {
      v.enableMobileFullScreen = y.isMobile() && e;
    },
    setEnableReconnect(e) {
      v.enableReconnect = e;
    },
    setCoinbasePreference(e) {
      v.coinbasePreference = e;
    },
    setDefaultAccountTypes(e = {}) {
      Object.entries(e).forEach(([t, n]) => {
        n && (v.defaultAccountTypes[t] = n);
      });
    },
    setUniversalProviderConfigOverride(e) {
      v.universalProviderConfigOverride = e;
    },
    getUniversalProviderConfigOverride() {
      return v.universalProviderConfigOverride;
    },
    getSnapshot() {
      return ft(v);
    }
  };
  $e = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: false,
    autoClose: true
  });
  J = z({
    ...$e
  });
  dr = {
    state: J,
    subscribeKey(e, t) {
      return te(J, e, t);
    },
    showLoading(e, t = {}) {
      this._showMessage({
        message: e,
        variant: "loading",
        ...t
      });
    },
    showSuccess(e) {
      this._showMessage({
        message: e,
        variant: "success"
      });
    },
    showSvg(e, t) {
      this._showMessage({
        message: e,
        svg: t
      });
    },
    showError(e) {
      const t = y.parseError(e);
      this._showMessage({
        message: t,
        variant: "error"
      });
    },
    hide() {
      J.message = $e.message, J.variant = $e.variant, J.svg = $e.svg, J.open = $e.open, J.autoClose = $e.autoClose;
    },
    _showMessage({ message: e, svg: t, variant: n = "success", autoClose: s = $e.autoClose }) {
      J.open ? (J.open = false, setTimeout(() => {
        J.message = e, J.variant = n, J.svg = t, J.open = true, J.autoClose = s;
      }, 150)) : (J.message = e, J.variant = n, J.svg = t, J.open = true, J.autoClose = s);
    }
  };
  be = dr;
  lr = {
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
  ls = y.getBlockchainApiUrl();
  ne = z({
    clientId: null,
    api: new Nt({
      baseUrl: ls,
      clientId: null
    }),
    supportedChains: {
      http: [],
      ws: []
    }
  });
  P = {
    state: ne,
    async get(e) {
      const { st: t, sv: n } = P.getSdkProperties(), s = f.state.projectId, r = {
        ...e.params || {},
        st: t,
        sv: n,
        projectId: s
      };
      return ne.api.get({
        ...e,
        params: r
      });
    },
    getSdkProperties() {
      const { sdkType: e, sdkVersion: t } = f.state;
      return {
        st: e || "unknown",
        sv: t || "unknown"
      };
    },
    async isNetworkSupported(e) {
      if (!e) return false;
      try {
        ne.supportedChains.http.length || await P.getSupportedNetworks();
      } catch {
        return false;
      }
      return ne.supportedChains.http.includes(e);
    },
    async getSupportedNetworks() {
      try {
        const e = await P.get({
          path: "v1/supported-chains"
        });
        return ne.supportedChains = e, e;
      } catch {
        return ne.supportedChains;
      }
    },
    async fetchIdentity({ address: e }) {
      const t = C.getIdentityFromCacheForAddress(e);
      if (t) return t;
      const n = await P.get({
        path: `/v1/identity/${e}`,
        params: {
          sender: c.state.activeCaipAddress ? y.getPlainAddress(c.state.activeCaipAddress) : void 0
        }
      });
      return C.updateIdentityCache({
        address: e,
        identity: n,
        timestamp: Date.now()
      }), n;
    },
    async fetchTransactions({ account: e, cursor: t, signal: n, cache: s, chainId: r }) {
      var _a2;
      if (!await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        data: [],
        next: void 0
      };
      const o = C.getTransactionsCacheForAddress({
        address: e,
        chainId: r
      });
      if (o) return o;
      const i = await P.get({
        path: `/v1/account/${e}/history`,
        params: {
          cursor: t,
          chainId: r
        },
        signal: n,
        cache: s
      });
      return C.updateTransactionsCache({
        address: e,
        chainId: r,
        timestamp: Date.now(),
        transactions: i
      }), i;
    },
    async fetchSwapQuote({ amount: e, userAddress: t, from: n, to: s, gasPrice: r }) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? P.get({
        path: "/v1/convert/quotes",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          amount: e,
          userAddress: t,
          from: n,
          to: s,
          gasPrice: r
        }
      }) : {
        quotes: []
      };
    },
    async fetchSwapTokens({ chainId: e }) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? P.get({
        path: "/v1/convert/tokens",
        params: {
          chainId: e
        }
      }) : {
        tokens: []
      };
    },
    async getAddressBalance({ caipNetworkId: e, address: t }) {
      return ne.api.post({
        path: `/v1?chainId=${e}&projectId=${f.state.projectId}`,
        body: {
          id: "1",
          jsonrpc: "2.0",
          method: "getAddressBalance",
          params: {
            address: t
          }
        }
      }).then((n) => n.result);
    },
    async fetchTokenPrice({ addresses: e, caipNetworkId: t = ((_a2) => (_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)() }) {
      if (!await P.isNetworkSupported(t)) return {
        fungibles: []
      };
      const s = C.getTokenPriceCacheForAddresses(e);
      if (s) return s;
      const r = await ne.api.post({
        path: "/v1/fungible/price",
        body: {
          currency: "usd",
          addresses: e,
          projectId: f.state.projectId
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      return C.updateTokenPriceCache({
        addresses: e,
        timestamp: Date.now(),
        tokenPrice: r
      }), r;
    },
    async fetchSwapAllowance({ tokenAddress: e, userAddress: t }) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? P.get({
        path: "/v1/convert/allowance",
        params: {
          tokenAddress: e,
          userAddress: t
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        allowance: "0"
      };
    },
    async fetchGasPrice({ chainId: e }) {
      var _a2;
      const { st: t, sv: n } = P.getSdkProperties();
      if (!await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Gas Price");
      return P.get({
        path: "/v1/convert/gas-price",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          chainId: e,
          st: t,
          sv: n
        }
      });
    },
    async generateSwapCalldata({ amount: e, from: t, to: n, userAddress: s, disableEstimate: r }) {
      var _a2;
      if (!await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return ne.api.post({
        path: "/v1/convert/build-transaction",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          amount: e,
          eip155: {
            slippage: L.CONVERT_SLIPPAGE_TOLERANCE
          },
          projectId: f.state.projectId,
          from: t,
          to: n,
          userAddress: s,
          disableEstimate: r
        }
      });
    },
    async generateApproveCalldata({ from: e, to: t, userAddress: n }) {
      var _a2;
      const { st: s, sv: r } = P.getSdkProperties();
      if (!await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return P.get({
        path: "/v1/convert/build-approve",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          userAddress: n,
          from: e,
          to: t,
          st: s,
          sv: r
        }
      });
    },
    async getBalance(e, t, n) {
      var _a2;
      const { st: s, sv: r } = P.getSdkProperties();
      if (!await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return be.showError("Token Balance Unavailable"), {
        balances: []
      };
      const o = `${t}:${e}`, i = C.getBalanceCacheForCaipAddress(o);
      if (i) return i;
      const d = await P.get({
        path: `/v1/account/${e}/balance`,
        params: {
          currency: "usd",
          chainId: t,
          forceUpdate: n,
          st: s,
          sv: r
        }
      });
      return C.updateBalanceCache({
        caipAddress: o,
        balance: d,
        timestamp: Date.now()
      }), d;
    },
    async lookupEnsName(e) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? P.get({
        path: `/v1/profile/account/${e}`,
        params: {
          apiVersion: "2"
        }
      }) : {
        addresses: {},
        attributes: []
      };
    },
    async reverseLookupEnsName({ address: e }) {
      var _a2, _b;
      if (!await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return [];
      const n = (_b = c.getAccountData()) == null ? void 0 : _b.address;
      return P.get({
        path: `/v1/profile/reverse/${e}`,
        params: {
          sender: n,
          apiVersion: "2"
        }
      });
    },
    async getEnsNameSuggestions(e) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? P.get({
        path: `/v1/profile/suggestions/${e}`,
        params: {
          zone: "reown.id"
        }
      }) : {
        suggestions: []
      };
    },
    async registerEnsName({ coinType: e, address: t, message: n, signature: s }) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? ne.api.post({
        path: "/v1/profile/account",
        body: {
          coin_type: e,
          address: t,
          message: n,
          signature: s
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        success: false
      };
    },
    async generateOnRampURL({ destinationWallets: e, partnerUserId: t, defaultNetwork: n, purchaseAmount: s, paymentAmount: r }) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? (await ne.api.post({
        path: "/v1/generators/onrampurl",
        params: {
          projectId: f.state.projectId
        },
        body: {
          destinationWallets: e,
          defaultNetwork: n,
          partnerUserId: t,
          defaultExperience: "buy",
          presetCryptoAmount: s,
          presetFiatAmount: r
        }
      })).url : "";
    },
    async getOnrampOptions() {
      var _a2;
      if (!await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId)) return {
        paymentCurrencies: [],
        purchaseCurrencies: []
      };
      try {
        return await P.get({
          path: "/v1/onramp/options"
        });
      } catch {
        return lr;
      }
    },
    async getOnrampQuote({ purchaseCurrency: e, paymentCurrency: t, amount: n, network: s }) {
      var _a2;
      try {
        return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? await ne.api.post({
          path: "/v1/onramp/quote",
          params: {
            projectId: f.state.projectId
          },
          body: {
            purchaseCurrency: e,
            paymentCurrency: t,
            amount: n,
            network: s
          }
        }) : null;
      } catch {
        return {
          networkFee: {
            amount: n,
            currency: t.id
          },
          paymentSubtotal: {
            amount: n,
            currency: t.id
          },
          paymentTotal: {
            amount: n,
            currency: t.id
          },
          purchaseAmount: {
            amount: n,
            currency: t.id
          },
          quoteId: "mocked-quote-id"
        };
      }
    },
    async getSmartSessions(e) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? P.get({
        path: `/v1/sessions/${e}`
      }) : [];
    },
    async revokeSmartSession(e, t, n) {
      var _a2;
      return await P.isNetworkSupported((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) ? ne.api.post({
        path: `/v1/sessions/${e}/revoke`,
        params: {
          projectId: f.state.projectId
        },
        body: {
          pci: t,
          signature: n
        }
      }) : {
        success: false
      };
    },
    setClientId(e) {
      ne.clientId = e, ne.api = new Nt({
        baseUrl: ls,
        clientId: e
      });
    }
  };
  ur = Object.freeze({
    enabled: true,
    events: []
  });
  pr = new Nt({
    baseUrl: y.getAnalyticsUrl(),
    clientId: null
  });
  hr = 5;
  fr = 60 * 1e3;
  Pe = z({
    ...ur
  });
  Cr = {
    state: Pe,
    subscribeKey(e, t) {
      return te(Pe, e, t);
    },
    async sendError(e, t) {
      if (!Pe.enabled) return;
      const n = Date.now();
      if (Pe.events.filter((a) => {
        const o = new Date(a.properties.timestamp || "").getTime();
        return n - o < fr;
      }).length >= hr) return;
      const r = {
        type: "error",
        event: t,
        properties: {
          errorType: e.name,
          errorMessage: e.message,
          stackTrace: e.stack,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
      Pe.events.push(r);
      try {
        if (typeof window > "u") return;
        const { projectId: a, sdkType: o, sdkVersion: i } = f.state;
        await pr.post({
          path: "/e",
          params: {
            projectId: a,
            st: o,
            sv: i || "html-wagmi-4.2.2"
          },
          body: {
            eventId: y.getUUID(),
            url: window.location.href,
            domain: window.location.hostname,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            props: {
              type: "error",
              event: t,
              errorType: e.name,
              errorMessage: e.message,
              stackTrace: e.stack
            }
          }
        });
      } catch {
      }
    },
    enable() {
      Pe.enabled = true;
    },
    disable() {
      Pe.enabled = false;
    },
    clearEvents() {
      Pe.events = [];
    }
  };
  qe = class extends Error {
    constructor(t, n, s) {
      super(t), this.originalName = "AppKitError", this.name = "AppKitError", this.category = n, this.originalError = s, s && s instanceof Error && (this.originalName = s.name), Object.setPrototypeOf(this, qe.prototype);
      let r = false;
      if (s instanceof Error && typeof s.stack == "string" && s.stack) {
        const a = s.stack, o = a.indexOf(`
`);
        if (o > -1) {
          const i = a.substring(o + 1);
          this.stack = `${this.name}: ${this.message}
${i}`, r = true;
        }
      }
      r || (Error.captureStackTrace ? Error.captureStackTrace(this, qe) : this.stack || (this.stack = `${this.name}: ${this.message}`));
    }
  };
  function Dn(e, t) {
    let n = "";
    try {
      e instanceof Error ? n = e.message : typeof e == "string" ? n = e : typeof e == "object" && e !== null ? Object.keys(e).length === 0 ? n = "Unknown error" : n = (e == null ? void 0 : e.message) || JSON.stringify(e) : n = String(e);
    } catch (r) {
      n = "Unknown error", console.error("Error parsing error message", r);
    }
    const s = e instanceof qe ? e : new qe(n, t, e);
    throw Cr.sendError(s, s.category), s;
  }
  Ce = function(e, t = "INTERNAL_SDK_ERROR") {
    const n = {};
    return Object.keys(e).forEach((s) => {
      const r = e[s];
      if (typeof r == "function") {
        let a = r;
        r.constructor.name === "AsyncFunction" ? a = async (...o) => {
          try {
            return await r(...o);
          } catch (i) {
            return Dn(i, t);
          }
        } : a = (...o) => {
          try {
            return r(...o);
          } catch (i) {
            return Dn(i, t);
          }
        }, n[s] = a;
      } else n[s] = r;
    }), n;
  };
  let ie, mr, xn, Ze, pe, gr, wr, Er, Ar, Nr, Ln, Y, br, se, yr, Mn, Ir, U, Sr, j, _r, _e, dn, us, Tr, F, kr, vr, it;
  ie = z({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
  });
  mr = {
    state: ie,
    subscribeNetworkImages(e) {
      return ee(ie.networkImages, () => e(ie.networkImages));
    },
    subscribeKey(e, t) {
      return te(ie, e, t);
    },
    subscribe(e) {
      return ee(ie, () => e(ie));
    },
    setWalletImage(e, t) {
      ie.walletImages[e] = t;
    },
    setNetworkImage(e, t) {
      ie.networkImages[e] = t;
    },
    setChainImage(e, t) {
      ie.chainImages[e] = t;
    },
    setConnectorImage(e, t) {
      ie.connectorImages = {
        ...ie.connectorImages,
        [e]: t
      };
    },
    setTokenImage(e, t) {
      ie.tokenImages[e] = t;
    },
    setCurrencyImage(e, t) {
      ie.currencyImages[e] = t;
    }
  };
  he = Ce(mr);
  xn = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: "",
    sui: "",
    stacks: "",
    ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
  };
  Ze = z({
    networkImagePromises: {},
    tokenImagePromises: {}
  });
  Bt = {
    async fetchWalletImage(e) {
      if (e) return await I._fetchWalletImage(e), this.getWalletImageById(e);
    },
    async fetchNetworkImage(e) {
      if (!e) return;
      const t = this.getNetworkImageById(e);
      return t || (Ze.networkImagePromises[e] || (Ze.networkImagePromises[e] = I._fetchNetworkImage(e)), await Ze.networkImagePromises[e], this.getNetworkImageById(e));
    },
    async fetchTokenImage(e) {
      if (e) return Ze.tokenImagePromises[e] || (Ze.tokenImagePromises[e] = I._fetchTokenImage(e)), await Ze.tokenImagePromises[e], this.getTokenImage(e);
    },
    getWalletImageById(e) {
      if (e) return he.state.walletImages[e];
    },
    getWalletImage(e) {
      if (e == null ? void 0 : e.image_url) return e == null ? void 0 : e.image_url;
      if (e == null ? void 0 : e.image_id) return he.state.walletImages[e.image_id];
    },
    getNetworkImage(e) {
      var _a2, _b, _c;
      if ((_a2 = e == null ? void 0 : e.assets) == null ? void 0 : _a2.imageUrl) return (_b = e == null ? void 0 : e.assets) == null ? void 0 : _b.imageUrl;
      if ((_c = e == null ? void 0 : e.assets) == null ? void 0 : _c.imageId) return he.state.networkImages[e.assets.imageId];
    },
    getNetworkImageById(e) {
      if (e) return he.state.networkImages[e];
    },
    getConnectorImage(e) {
      var _a2;
      if (e == null ? void 0 : e.imageUrl) return e.imageUrl;
      if ((_a2 = e == null ? void 0 : e.info) == null ? void 0 : _a2.icon) return e.info.icon;
      if (e == null ? void 0 : e.imageId) return he.state.connectorImages[e.imageId];
    },
    getChainImage(e) {
      return he.state.networkImages[xn[e]];
    },
    getTokenImage(e) {
      if (e) return he.state.tokenImages[e];
    },
    getWalletImageUrl(e) {
      if (!e) return "";
      const { projectId: t, sdkType: n, sdkVersion: s } = f.state, r = new URL(`${h.W3M_API_URL}/getWalletImage/${e}`);
      return r.searchParams.set("projectId", t), r.searchParams.set("st", n), r.searchParams.set("sv", s), r.toString();
    },
    getAssetImageUrl(e) {
      if (!e) return "";
      const { projectId: t, sdkType: n, sdkVersion: s } = f.state, r = new URL(`${h.W3M_API_URL}/public/getAssetImage/${e}`);
      return r.searchParams.set("projectId", t), r.searchParams.set("st", n), r.searchParams.set("sv", s), r.toString();
    },
    getChainNamespaceImageUrl(e) {
      return this.getAssetImageUrl(xn[e]);
    },
    async getImageByToken(e, t) {
      if (e === "native") {
        const s = h.NATIVE_IMAGE_IDS_BY_NAMESPACE[t] ?? null;
        return s ? Bt.fetchNetworkImage(s) : void 0;
      }
      const [, n] = Object.entries(h.TOKEN_SYMBOLS_BY_ADDRESS).find(([s]) => s.toLowerCase() === e.toLowerCase()) ?? [];
      if (n) return Bt.fetchTokenImage(n);
    }
  };
  pe = {
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
  gr = {
    handleMobileDeeplinkRedirect(e, t) {
      const n = window.location.href, s = encodeURIComponent(n);
      if (e === pe.PHANTOM.id && !("phantom" in window)) {
        const r = n.startsWith("https") ? "https" : "http", a = n.split("/")[2], o = encodeURIComponent(`${r}://${a}`);
        window.location.href = `${pe.PHANTOM.url}/ul/browse/${s}?ref=${o}`;
      }
      if (e === pe.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${pe.SOLFLARE.url}/ul/v1/browse/${s}?ref=${s}`), t === h.CHAIN.SOLANA && e === pe.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${pe.COINBASE.url}/dapp?cb_url=${s}`), t === h.CHAIN.BITCOIN && e === pe.BINANCE.id && !("binancew3w" in window)) {
        const r = c.state.activeCaipNetwork, a = window.btoa("/pages/browser/index"), o = window.btoa(`url=${s}&defaultChainId=${(r == null ? void 0 : r.id) ?? 1}`), i = new URL(pe.BINANCE.deeplink);
        i.searchParams.set("appId", pe.BINANCE.appId), i.searchParams.set("startPagePath", a), i.searchParams.set("startPageQuery", o);
        const d = new URL(pe.BINANCE.url);
        d.searchParams.set("_dp", window.btoa(i.toString())), window.location.href = d.toString();
      }
    }
  };
  wr = y.getAnalyticsUrl();
  Er = new Nt({
    baseUrl: wr,
    clientId: null
  });
  Ar = [
    "MODAL_CREATED"
  ];
  Nr = 45;
  Ln = 1e3 * 10;
  Y = z({
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
  D = {
    state: Y,
    subscribe(e) {
      return ee(Y, () => e(Y));
    },
    getSdkProperties() {
      const { projectId: e, sdkType: t, sdkVersion: n } = f.state;
      return {
        projectId: e,
        st: t,
        sv: n || "html-wagmi-4.2.2"
      };
    },
    shouldFlushEvents() {
      const e = JSON.stringify(Y.pendingEvents).length / 1024 > Nr, t = Y.lastFlush + Ln < Date.now();
      return e || t;
    },
    _setPendingEvent(e) {
      var _a2, _b;
      try {
        let t = (_a2 = c.getAccountData()) == null ? void 0 : _a2.address;
        if ("address" in e.data && e.data.address && (t = e.data.address), Ar.includes(e.data.event) || typeof window > "u") return;
        const n = (_b = c.getActiveCaipNetwork()) == null ? void 0 : _b.caipNetworkId;
        this.state.pendingEvents.push({
          eventId: y.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: e.timestamp,
          props: {
            ...e.data,
            address: t,
            properties: {
              ..."properties" in e.data ? e.data.properties : {},
              caipNetworkId: n
            }
          }
        }), Y.reportedErrors.FORBIDDEN = false, D.shouldFlushEvents() && D._submitPendingEvents();
      } catch (t) {
        console.warn("_setPendingEvent", t);
      }
    },
    sendEvent(e) {
      var _a2;
      Y.timestamp = Date.now(), Y.data = e;
      const t = [
        "INITIALIZE",
        "CONNECT_SUCCESS",
        "SOCIAL_LOGIN_SUCCESS"
      ];
      (((_a2 = f.state.features) == null ? void 0 : _a2.analytics) || t.includes(e.event)) && D._setPendingEvent(Y), this.subscribeToFlushTriggers();
    },
    sendWalletImpressionEvent(e) {
      Y.walletImpressions.push(e);
    },
    _transformPendingEventsForBatch(e) {
      try {
        return e.filter((t) => t.props.event !== "WALLET_IMPRESSION_V2");
      } catch {
        return e;
      }
    },
    _submitPendingEvents() {
      if (Y.lastFlush = Date.now(), !(Y.pendingEvents.length === 0 && Y.walletImpressions.length === 0)) try {
        const e = D._transformPendingEventsForBatch(Y.pendingEvents);
        Y.walletImpressions.length && e.push({
          eventId: y.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [
              ...Y.walletImpressions
            ]
          }
        }), Er.sendBeacon({
          path: "/batch",
          params: D.getSdkProperties(),
          body: e
        }), Y.reportedErrors.FORBIDDEN = false, Y.pendingEvents = [], Y.walletImpressions = [];
      } catch {
        Y.reportedErrors.FORBIDDEN = true;
      }
    },
    subscribeToFlushTriggers() {
      var _a2, _b, _c;
      Y.subscribedToVisibilityChange || typeof document > "u" || (Y.subscribedToVisibilityChange = true, (_a2 = document == null ? void 0 : document.addEventListener) == null ? void 0 : _a2.call(document, "visibilitychange", () => {
        document.visibilityState === "hidden" && D._submitPendingEvents();
      }), (_b = document == null ? void 0 : document.addEventListener) == null ? void 0 : _b.call(document, "freeze", () => {
        D._submitPendingEvents();
      }), (_c = window == null ? void 0 : window.addEventListener) == null ? void 0 : _c.call(window, "pagehide", () => {
        D._submitPendingEvents();
      }), setInterval(() => {
        D._submitPendingEvents();
      }, Ln));
    }
  };
  br = y.getApiUrl();
  se = new Nt({
    baseUrl: br,
    clientId: null
  });
  yr = 40;
  Mn = 4;
  Ir = 20;
  U = z({
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
  I = {
    state: U,
    subscribeKey(e, t) {
      return te(U, e, t);
    },
    _getSdkProperties() {
      const { projectId: e, sdkType: t, sdkVersion: n } = f.state;
      return {
        projectId: e,
        st: t || "appkit",
        sv: n || "html-wagmi-4.2.2"
      };
    },
    _filterOutExtensions(e) {
      return f.state.isUniversalProvider ? e.filter((t) => !!(t.mobile_link || t.desktop_link || t.webapp_link)) : e;
    },
    async _fetchWalletImage(e) {
      const t = `${se.baseUrl}/getWalletImage/${e}`, n = await se.getBlob({
        path: t,
        params: I._getSdkProperties()
      });
      he.setWalletImage(e, URL.createObjectURL(n));
    },
    async _fetchNetworkImage(e) {
      const t = `${se.baseUrl}/public/getAssetImage/${e}`, n = await se.getBlob({
        path: t,
        params: I._getSdkProperties()
      });
      he.setNetworkImage(e, URL.createObjectURL(n));
    },
    async _fetchConnectorImage(e) {
      const t = `${se.baseUrl}/public/getAssetImage/${e}`, n = await se.getBlob({
        path: t,
        params: I._getSdkProperties()
      });
      he.setConnectorImage(e, URL.createObjectURL(n));
    },
    async _fetchCurrencyImage(e) {
      const t = `${se.baseUrl}/public/getCurrencyImage/${e}`, n = await se.getBlob({
        path: t,
        params: I._getSdkProperties()
      });
      he.setCurrencyImage(e, URL.createObjectURL(n));
    },
    async _fetchTokenImage(e) {
      const t = `${se.baseUrl}/public/getTokenImage/${e}`, n = await se.getBlob({
        path: t,
        params: I._getSdkProperties()
      });
      he.setTokenImage(e, URL.createObjectURL(n));
    },
    _filterWalletsByPlatform(e) {
      const t = e.length, n = y.isMobile() ? e == null ? void 0 : e.filter((r) => r.mobile_link || r.webapp_link ? true : Object.values(pe).map((o) => o.id).includes(r.id)) : e, s = t - n.length;
      return {
        filteredWallets: n,
        mobileFilteredOutWalletsLength: s
      };
    },
    async fetchProjectConfig() {
      return (await se.get({
        path: "/appkit/v1/config",
        params: I._getSdkProperties()
      })).features;
    },
    async fetchUsage() {
      try {
        const e = await se.get({
          path: "/appkit/v1/project-limits",
          params: I._getSdkProperties()
        }), { tier: t, isAboveMauLimit: n, isAboveRpcLimit: s } = e.planLimits, r = t === "starter", a = n || s;
        I.state.plan = {
          tier: t,
          hasExceededUsageLimit: r && a,
          limits: {
            isAboveRpcLimit: s,
            isAboveMauLimit: n
          }
        };
      } catch (e) {
        console.warn("Failed to fetch usage", e);
      }
    },
    async fetchAllowedOrigins() {
      try {
        const { allowedOrigins: e } = await se.get({
          path: "/projects/v1/origins",
          params: I._getSdkProperties()
        });
        return e;
      } catch (e) {
        if (e instanceof Error && e.cause instanceof Response) {
          const t = e.cause.status;
          if (t === h.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", {
            cause: e
          });
          if (t >= h.HTTP_STATUS_CODES.SERVER_ERROR && t < 600) throw new Error("SERVER_ERROR", {
            cause: e
          });
          return [];
        }
        return [];
      }
    },
    async fetchNetworkImages() {
      var _a2;
      const t = (_a2 = c.getAllRequestedCaipNetworks()) == null ? void 0 : _a2.map(({ assets: n }) => n == null ? void 0 : n.imageId).filter(Boolean).filter((n) => !Bt.getNetworkImageById(n));
      t && await Promise.allSettled(t.map((n) => I._fetchNetworkImage(n)));
    },
    async fetchConnectorImages() {
      const { connectors: e } = g.state, t = e.map(({ imageId: n }) => n).filter(Boolean);
      await Promise.allSettled(t.map((n) => I._fetchConnectorImage(n)));
    },
    async fetchCurrencyImages(e = []) {
      await Promise.allSettled(e.map((t) => I._fetchCurrencyImage(t)));
    },
    async fetchTokenImages(e = []) {
      await Promise.allSettled(e.map((t) => I._fetchTokenImage(t)));
    },
    async fetchWallets(e) {
      var _a2;
      const t = e.exclude ?? [];
      I._getSdkProperties().sv.startsWith("html-core-") && t.push(...Object.values(pe).map((o) => o.id));
      const s = await se.get({
        path: "/getWallets",
        params: {
          ...I._getSdkProperties(),
          ...e,
          page: String(e.page),
          entries: String(e.entries),
          include: (_a2 = e.include) == null ? void 0 : _a2.join(","),
          exclude: t.join(",")
        }
      }), { filteredWallets: r, mobileFilteredOutWalletsLength: a } = I._filterWalletsByPlatform(s == null ? void 0 : s.data);
      return {
        data: r || [],
        count: s == null ? void 0 : s.count,
        mobileFilteredOutWalletsLength: a
      };
    },
    async prefetchWalletRanks() {
      const e = g.state.connectors;
      if (!(e == null ? void 0 : e.length)) return;
      const t = {
        page: 1,
        entries: 20,
        badge: "certified"
      };
      if (t.names = e.map((r) => r.name).join(","), c.state.activeChain === h.CHAIN.EVM) {
        const r = [
          ...e.flatMap((a) => {
            var _a2;
            return ((_a2 = a.connectors) == null ? void 0 : _a2.map((o) => {
              var _a3;
              return (_a3 = o.info) == null ? void 0 : _a3.rdns;
            })) || [];
          }),
          ...e.map((a) => {
            var _a2;
            return (_a2 = a.info) == null ? void 0 : _a2.rdns;
          })
        ].filter((a) => typeof a == "string" && a.length > 0);
        r.length && (t.rdns = r.join(","));
      }
      const { data: n } = await I.fetchWallets(t);
      U.explorerWallets = n, g.extendConnectorsWithExplorerWallets(n);
      const s = c.getRequestedCaipNetworkIds().join(",");
      U.explorerFilteredWallets = n.filter((r) => {
        var _a2;
        return (_a2 = r.chains) == null ? void 0 : _a2.some((a) => s.includes(a));
      });
    },
    async fetchFeaturedWallets() {
      const { featuredWalletIds: e } = f.state;
      if (e == null ? void 0 : e.length) {
        const t = {
          ...I._getSdkProperties(),
          page: 1,
          entries: (e == null ? void 0 : e.length) ?? Mn,
          include: e
        }, { data: n } = await I.fetchWallets(t), s = [
          ...n
        ].sort((a, o) => e.indexOf(a.id) - e.indexOf(o.id)), r = s.map((a) => a.image_id).filter(Boolean);
        await Promise.allSettled(r.map((a) => I._fetchWalletImage(a))), U.featured = s, U.allFeatured = s;
      }
    },
    async fetchRecommendedWallets() {
      try {
        U.isFetchingRecommendedWallets = true;
        const { includeWalletIds: e, excludeWalletIds: t, featuredWalletIds: n } = f.state, s = [
          ...t ?? [],
          ...n ?? []
        ].filter(Boolean), r = c.getRequestedCaipNetworkIds().join(","), a = {
          page: 1,
          entries: Mn,
          include: e,
          exclude: s,
          chains: r
        }, { data: o, count: i } = await I.fetchWallets(a), d = C.getRecentWallets(), l = o.map((p) => p.image_id).filter(Boolean), u = d.map((p) => p.image_id).filter(Boolean);
        await Promise.allSettled([
          ...l,
          ...u
        ].map((p) => I._fetchWalletImage(p))), U.recommended = o, U.allRecommended = o, U.count = i ?? 0;
      } catch {
      } finally {
        U.isFetchingRecommendedWallets = false;
      }
    },
    async fetchWalletsByPage({ page: e }) {
      const { includeWalletIds: t, excludeWalletIds: n, featuredWalletIds: s } = f.state, r = c.getRequestedCaipNetworkIds().join(","), a = [
        ...U.recommended.map(({ id: p }) => p),
        ...n ?? [],
        ...s ?? []
      ].filter(Boolean), o = {
        page: e,
        entries: yr,
        include: t,
        exclude: a,
        chains: r
      }, { data: i, count: d, mobileFilteredOutWalletsLength: l } = await I.fetchWallets(o);
      U.mobileFilteredOutWalletsLength = l + (U.mobileFilteredOutWalletsLength ?? 0);
      const u = i.slice(0, Ir).map((p) => p.image_id).filter(Boolean);
      await Promise.allSettled(u.map((p) => I._fetchWalletImage(p))), U.wallets = y.uniqueBy([
        ...U.wallets,
        ...I._filterOutExtensions(i)
      ], "id").filter((p) => {
        var _a2;
        return (_a2 = p.chains) == null ? void 0 : _a2.some((w) => r.includes(w));
      }), U.count = d > U.count ? d : U.count, U.page = e;
    },
    async initializeExcludedWallets({ ids: e }) {
      const t = {
        page: 1,
        entries: e.length,
        include: e
      }, { data: n } = await I.fetchWallets(t);
      n && n.forEach((s) => {
        U.excludedWallets.push({
          rdns: s.rdns,
          name: s.name
        });
      });
    },
    async searchWallet({ search: e, badge: t }) {
      const { includeWalletIds: n, excludeWalletIds: s } = f.state, r = c.getRequestedCaipNetworkIds().join(",");
      U.search = [];
      const a = {
        page: 1,
        entries: 100,
        search: e == null ? void 0 : e.trim(),
        badge_type: t,
        include: n,
        exclude: s,
        chains: r
      }, { data: o } = await I.fetchWallets(a);
      D.sendEvent({
        type: "track",
        event: "SEARCH_WALLET",
        properties: {
          badge: t ?? "",
          search: e ?? ""
        }
      });
      const i = o.map((d) => d.image_id).filter(Boolean);
      await Promise.allSettled([
        ...i.map((d) => I._fetchWalletImage(d)),
        y.wait(300)
      ]), U.search = I._filterOutExtensions(o);
    },
    initPromise(e, t) {
      const n = U.promises[e];
      return n || (U.promises[e] = t());
    },
    prefetch({ fetchConnectorImages: e = true, fetchFeaturedWallets: t = true, fetchRecommendedWallets: n = true, fetchNetworkImages: s = true, fetchWalletRanks: r = true } = {}) {
      const a = [
        e && I.initPromise("connectorImages", I.fetchConnectorImages),
        t && I.initPromise("featuredWallets", I.fetchFeaturedWallets),
        n && I.initPromise("recommendedWallets", I.fetchRecommendedWallets),
        s && I.initPromise("networkImages", I.fetchNetworkImages),
        r && I.initPromise("walletRanks", I.prefetchWalletRanks)
      ].filter(Boolean);
      return Promise.allSettled(a);
    },
    prefetchAnalyticsConfig() {
      var _a2;
      ((_a2 = f.state.features) == null ? void 0 : _a2.analytics) && I.fetchAnalyticsConfig();
    },
    async fetchAnalyticsConfig() {
      try {
        const { isAnalyticsEnabled: e } = await se.get({
          path: "/getAnalyticsConfig",
          params: I._getSdkProperties()
        });
        f.setFeatures({
          analytics: e
        });
      } catch {
        f.setFeatures({
          analytics: false
        });
      }
    },
    filterByNamespaces(e) {
      if (!(e == null ? void 0 : e.length)) {
        U.featured = U.allFeatured, U.recommended = U.allRecommended;
        return;
      }
      const t = c.getRequestedCaipNetworkIds().join(",");
      U.featured = U.allFeatured.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => t.includes(s));
      }), U.recommended = U.allRecommended.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => t.includes(s));
      }), U.filteredWallets = U.wallets.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => t.includes(s));
      });
    },
    clearFilterByNamespaces() {
      U.filteredWallets = [];
    },
    setFilterByNamespace(e) {
      if (!e) {
        U.featured = U.allFeatured, U.recommended = U.allRecommended;
        return;
      }
      const t = c.getRequestedCaipNetworkIds().join(",");
      U.featured = U.allFeatured.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => t.includes(s));
      }), U.recommended = U.allRecommended.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => t.includes(s));
      }), U.filteredWallets = U.wallets.filter((n) => {
        var _a2;
        return (_a2 = n.chains) == null ? void 0 : _a2.some((s) => t.includes(s));
      });
    }
  };
  xe = {
    filterOutDuplicatesByRDNS(e) {
      const t = f.state.enableEIP6963 ? g.state.connectors : [], n = C.getRecentWallets(), s = t.map((i) => {
        var _a2;
        return (_a2 = i.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), r = n.map((i) => i.rdns).filter(Boolean), a = s.concat(r);
      if (a.includes("io.metamask.mobile") && y.isMobile()) {
        const i = a.indexOf("io.metamask.mobile");
        a[i] = "io.metamask";
      }
      return e.filter((i) => !((i == null ? void 0 : i.rdns) && a.includes(String(i.rdns)) || !(i == null ? void 0 : i.rdns) && t.some((l) => l.name === i.name)));
    },
    filterOutDuplicatesByIds(e) {
      const t = g.state.connectors.filter((i) => i.type === "ANNOUNCED" || i.type === "INJECTED" || i.type === "MULTI_CHAIN"), n = C.getRecentWallets(), s = t.map((i) => {
        var _a2;
        return i.explorerId || ((_a2 = i.explorerWallet) == null ? void 0 : _a2.id) || i.id;
      }), r = n.map((i) => i.id), a = s.concat(r);
      return e.filter((i) => !a.includes(i == null ? void 0 : i.id));
    },
    filterOutDuplicateWallets(e) {
      const t = this.filterOutDuplicatesByRDNS(e);
      return this.filterOutDuplicatesByIds(t);
    },
    markWalletsAsInstalled(e) {
      const { connectors: t } = g.state, { featuredWalletIds: n } = f.state, s = t.filter((o) => o.type === "ANNOUNCED").reduce((o, i) => {
        var _a2;
        return ((_a2 = i.info) == null ? void 0 : _a2.rdns) && (o[i.info.rdns] = true), o;
      }, {});
      return e.map((o) => ({
        ...o,
        installed: !!o.rdns && !!s[o.rdns ?? ""]
      })).sort((o, i) => {
        const d = Number(i.installed) - Number(o.installed);
        if (d !== 0) return d;
        if (n == null ? void 0 : n.length) {
          const l = n.indexOf(o.id), u = n.indexOf(i.id);
          if (l !== -1 && u !== -1) return l - u;
          if (l !== -1) return -1;
          if (u !== -1) return 1;
        }
        return 0;
      });
    },
    getConnectOrderMethod(e, t) {
      var _a2;
      const n = (e == null ? void 0 : e.connectMethodsOrder) || ((_a2 = f.state.features) == null ? void 0 : _a2.connectMethodsOrder), s = t || g.state.connectors;
      if (n) return n;
      const { injected: r, announced: a } = re.getConnectorsByType(s, I.state.recommended, I.state.featured), o = r.filter(re.showConnector), i = a.filter(re.showConnector);
      return o.length || i.length ? [
        "wallet",
        "email",
        "social"
      ] : L.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(e) {
      const t = !!e.rdns && I.state.excludedWallets.some((s) => s.rdns === e.rdns), n = !!e.name && I.state.excludedWallets.some((s) => ts.isLowerCaseMatch(s.name, e.name));
      return t || n;
    },
    markWalletsWithDisplayIndex(e) {
      return e.map((t, n) => ({
        ...t,
        display_index: n
      }));
    },
    filterWalletsByWcSupport(e) {
      return E.state.wcBasic ? e.filter((t) => t.supports_wc) : y.isMobile() ? e.filter((t) => t.supports_wc || L.MANDATORY_WALLET_IDS_ON_MOBILE.includes(t.id)) : e;
    },
    getWalletConnectWallets(e) {
      var _a2;
      const t = [
        ...I.state.featured,
        ...I.state.recommended
      ];
      ((_a2 = I.state.filteredWallets) == null ? void 0 : _a2.length) > 0 ? t.push(...I.state.filteredWallets) : t.push(...e);
      const n = y.uniqueBy(t, "id"), s = xe.markWalletsAsInstalled(n), r = xe.filterWalletsByWcSupport(s);
      return xe.markWalletsWithDisplayIndex(r);
    }
  };
  re = {
    getConnectorsByType(e, t, n) {
      const { customWallets: s } = f.state, r = C.getRecentWallets(), a = xe.filterOutDuplicateWallets(t), o = xe.filterOutDuplicateWallets(n), i = e.filter((p) => p.type === "MULTI_CHAIN"), d = e.filter((p) => p.type === "ANNOUNCED"), l = e.filter((p) => p.type === "INJECTED"), u = e.filter((p) => p.type === "EXTERNAL");
      return {
        custom: s,
        recent: r,
        external: u,
        multiChain: i,
        announced: d,
        injected: l,
        recommended: a,
        featured: o
      };
    },
    showConnector(e) {
      var _a2;
      const t = (_a2 = e.info) == null ? void 0 : _a2.rdns, n = !!t && I.state.excludedWallets.some((r) => !!r.rdns && r.rdns === t), s = !!e.name && I.state.excludedWallets.some((r) => ts.isLowerCaseMatch(r.name, e.name));
      return !(e.type === "INJECTED" && (e.name === "Browser Wallet" && (!y.isMobile() || y.isMobile() && !t && !E.checkInstalled()) || n || s) || (e.type === "ANNOUNCED" || e.type === "EXTERNAL") && (n || s));
    },
    getIsConnectedWithWC() {
      return Array.from(c.state.chains.values()).some((n) => g.getConnectorId(n.namespace) === h.CONNECTOR_ID.WALLET_CONNECT);
    },
    getConnectorTypeOrder({ recommended: e, featured: t, custom: n, recent: s, announced: r, injected: a, multiChain: o, external: i, overriddenConnectors: d = ((_b) => (_b = f.state.features) == null ? void 0 : _b.connectorTypeOrder)() ?? [] }) {
      const u = [
        {
          type: "walletConnect",
          isEnabled: true
        },
        {
          type: "recent",
          isEnabled: s.length > 0
        },
        {
          type: "injected",
          isEnabled: [
            ...a,
            ...r,
            ...o
          ].length > 0
        },
        {
          type: "featured",
          isEnabled: t.length > 0
        },
        {
          type: "custom",
          isEnabled: n && n.length > 0
        },
        {
          type: "external",
          isEnabled: i.length > 0
        },
        {
          type: "recommended",
          isEnabled: e.length > 0
        }
      ].filter((A) => A.isEnabled), p = new Set(u.map((A) => A.type)), w = d.filter((A) => p.has(A)).map((A) => ({
        type: A,
        isEnabled: true
      })), S = u.filter(({ type: A }) => !w.some(({ type: N }) => N === A));
      return Array.from(new Set([
        ...w,
        ...S
      ].map(({ type: A }) => A)));
    },
    sortConnectorsByExplorerWallet(e) {
      return [
        ...e
      ].sort((t, n) => t.explorerWallet && n.explorerWallet ? (t.explorerWallet.order ?? 0) - (n.explorerWallet.order ?? 0) : t.explorerWallet ? -1 : n.explorerWallet ? 1 : 0);
    },
    getPriority(e) {
      return e.id === h.CONNECTOR_ID.BASE_ACCOUNT ? 0 : e.id === h.CONNECTOR_ID.COINBASE || e.id === h.CONNECTOR_ID.COINBASE_SDK ? 1 : 2;
    },
    sortConnectorsByPriority(e) {
      return [
        ...e
      ].sort((t, n) => re.getPriority(t) - re.getPriority(n));
    },
    getAuthName({ email: e, socialUsername: t, socialProvider: n }) {
      return t ? n && n === "discord" && t.endsWith("0") ? t.slice(0, -1) : t : e.length > 30 ? `${e.slice(0, -3)}...` : e;
    },
    async fetchProviderData(e) {
      var _a2, _b;
      try {
        if (e.name === "Browser Wallet" && !y.isMobile()) return {
          accounts: [],
          chainId: void 0
        };
        if (e.id === h.CONNECTOR_ID.AUTH) return {
          accounts: [],
          chainId: void 0
        };
        const [t, n] = await Promise.all([
          (_a2 = e.provider) == null ? void 0 : _a2.request({
            method: "eth_accounts"
          }),
          (_b = e.provider) == null ? void 0 : _b.request({
            method: "eth_chainId"
          }).then((s) => Number(s))
        ]);
        return {
          accounts: t,
          chainId: n
        };
      } catch (t) {
        return console.warn(`Failed to fetch provider data for ${e.name}`, t), {
          accounts: [],
          chainId: void 0
        };
      }
    },
    getFilteredCustomWallets(e) {
      const t = C.getRecentWallets(), n = g.state.connectors.map((o) => {
        var _a2;
        return (_a2 = o.info) == null ? void 0 : _a2.rdns;
      }).filter(Boolean), s = t.map((o) => o.rdns).filter(Boolean), r = n.concat(s);
      if (r.includes("io.metamask.mobile") && y.isMobile()) {
        const o = r.indexOf("io.metamask.mobile");
        r[o] = "io.metamask";
      }
      return e.filter((o) => !r.includes(String(o == null ? void 0 : o.rdns)));
    },
    hasWalletConnector(e) {
      return g.state.connectors.some((t) => t.id === e.id || t.name === e.name);
    },
    isWalletCompatibleWithCurrentChain(e) {
      const t = c.state.activeChain;
      return t && e.chains ? e.chains.some((n) => {
        const s = n.split(":")[0];
        return t === s;
      }) : true;
    },
    getFilteredRecentWallets() {
      return C.getRecentWallets().filter((n) => !xe.isExcluded(n)).filter((n) => !this.hasWalletConnector(n)).filter((n) => this.isWalletCompatibleWithCurrentChain(n));
    },
    getCappedRecommendedWallets(e) {
      const { connectors: t } = g.state, { customWallets: n, featuredWalletIds: s } = f.state, r = t.find((T) => T.id === "walletConnect"), a = t.filter((T) => T.type === "INJECTED" || T.type === "ANNOUNCED" || T.type === "MULTI_CHAIN");
      if (!r && !a.length && !(n == null ? void 0 : n.length)) return [];
      const o = cn.isEmailEnabled(), i = cn.isSocialsEnabled(), d = a.filter((T) => T.name !== "Browser Wallet" && T.name !== "WalletConnect"), l = (s == null ? void 0 : s.length) || 0, u = (n == null ? void 0 : n.length) || 0, p = d.length || 0, w = o ? 1 : 0, S = i ? 1 : 0, A = l + u + p + w + S, N = Math.max(0, 4 - A);
      return N <= 0 ? [] : xe.filterOutDuplicateWallets(e).slice(0, N);
    },
    processConnectorsByType(e, t = true) {
      const n = re.sortConnectorsByExplorerWallet([
        ...e
      ]);
      return t ? n.filter(re.showConnector) : n;
    },
    connectorList() {
      const e = re.getConnectorsByType(g.state.connectors, I.state.recommended, I.state.featured), t = this.processConnectorsByType(e.announced.filter((S) => S.id !== "walletConnect")), n = this.processConnectorsByType(e.injected), s = this.processConnectorsByType(e.multiChain.filter((S) => S.name !== "WalletConnect"), false), r = e.custom, a = e.recent, o = this.processConnectorsByType(e.external.filter((S) => S.id !== h.CONNECTOR_ID.COINBASE_SDK && S.id !== h.CONNECTOR_ID.BASE_ACCOUNT)), i = e.recommended, d = e.featured, l = re.getConnectorTypeOrder({
        custom: r,
        recent: a,
        announced: t,
        injected: n,
        multiChain: s,
        recommended: i,
        featured: d,
        external: o
      }), u = g.state.connectors.find((S) => S.id === "walletConnect"), p = y.isMobile(), w = [];
      for (const S of l) switch (S) {
        case "walletConnect": {
          !p && u && w.push({
            kind: "connector",
            subtype: "walletConnect",
            connector: u
          });
          break;
        }
        case "recent": {
          re.getFilteredRecentWallets().forEach((m) => w.push({
            kind: "wallet",
            subtype: "recent",
            wallet: m
          }));
          break;
        }
        case "injected": {
          s.forEach((A) => w.push({
            kind: "connector",
            subtype: "multiChain",
            connector: A
          })), t.forEach((A) => w.push({
            kind: "connector",
            subtype: "announced",
            connector: A
          })), n.forEach((A) => w.push({
            kind: "connector",
            subtype: "injected",
            connector: A
          }));
          break;
        }
        case "featured": {
          d.forEach((A) => w.push({
            kind: "wallet",
            subtype: "featured",
            wallet: A
          }));
          break;
        }
        case "custom": {
          re.getFilteredCustomWallets(r ?? []).forEach((m) => w.push({
            kind: "wallet",
            subtype: "custom",
            wallet: m
          }));
          break;
        }
        case "external": {
          o.forEach((A) => w.push({
            kind: "connector",
            subtype: "external",
            connector: A
          }));
          break;
        }
        case "recommended": {
          re.getCappedRecommendedWallets(i).forEach((m) => w.push({
            kind: "wallet",
            subtype: "recommended",
            wallet: m
          }));
          break;
        }
        default:
          console.warn(`Unknown connector type: ${S}`);
      }
      return w;
    },
    hasInjectedConnectors() {
      return g.state.connectors.filter((e) => (e.type === "INJECTED" || e.type === "ANNOUNCED" || e.type === "MULTI_CHAIN") && e.name !== "Browser Wallet" && e.name !== "WalletConnect").length;
    }
  };
  Sr = [
    "ConnectingExternal",
    "ConnectingMultiChain",
    "ConnectingSocial",
    "ConnectingFarcaster"
  ];
  j = z({
    view: "Connect",
    history: [
      "Connect"
    ],
    transactionStack: []
  });
  _r = {
    state: j,
    subscribeKey(e, t) {
      return te(j, e, t);
    },
    pushTransactionStack(e) {
      j.transactionStack.push(e);
    },
    popTransactionStack(e) {
      const t = j.transactionStack.pop();
      if (!t) return;
      const { onSuccess: n, onError: s, onCancel: r } = t;
      switch (e) {
        case "success":
          n == null ? void 0 : n();
          break;
        case "error":
          s == null ? void 0 : s(), O.goBack();
          break;
        case "cancel":
          r == null ? void 0 : r(), O.goBack();
          break;
      }
    },
    push(e, t) {
      let n = e, s = t;
      I.state.plan.hasExceededUsageLimit && Sr.includes(e) && (n = "UsageExceeded", s = void 0), n !== j.view && (j.view = n, j.history.push(n), j.data = s);
    },
    reset(e, t) {
      j.view = e, j.history = [
        e
      ], j.data = t;
    },
    replace(e, t) {
      j.history.at(-1) === e || (j.view = e, j.history[j.history.length - 1] = e, j.data = t);
    },
    goBack() {
      var _a2, _b;
      const e = c.state.activeCaipAddress, t = O.state.view === "ConnectingFarcaster", n = !e && t;
      if (j.history.length > 1) {
        j.history.pop();
        const [s] = j.history.slice(-1);
        s && (e && s === "Connect" ? j.view = "Account" : j.view = s);
      } else M.close();
      ((_a2 = j.data) == null ? void 0 : _a2.wallet) && (j.data.wallet = void 0), ((_b = j.data) == null ? void 0 : _b.redirectView) && (j.data.redirectView = void 0), setTimeout(() => {
        var _a3, _b2, _c;
        if (n) {
          c.setAccountProp("farcasterUrl", void 0, c.state.activeChain);
          const s = g.getAuthConnector();
          (_a3 = s == null ? void 0 : s.provider) == null ? void 0 : _a3.reload();
          const r = ft(f.state);
          (_c = (_b2 = s == null ? void 0 : s.provider) == null ? void 0 : _b2.syncDappData) == null ? void 0 : _c.call(_b2, {
            metadata: r.metadata,
            sdkVersion: r.sdkVersion,
            projectId: r.projectId,
            sdkType: r.sdkType
          });
        }
      }, 100);
    },
    goBackToIndex(e) {
      if (j.history.length > 1) {
        j.history = j.history.slice(0, e + 1);
        const [t] = j.history.slice(-1);
        t && (j.view = t);
      }
    },
    goBackOrCloseModal() {
      O.state.history.length > 1 ? O.goBack() : M.close();
    }
  };
  O = Ce(_r);
  _e = z({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
  });
  dn = {
    state: _e,
    subscribe(e) {
      return ee(_e, () => e(_e));
    },
    setThemeMode(e) {
      _e.themeMode = e;
      try {
        const t = g.getAuthConnector();
        if (t) {
          const n = dn.getSnapshot().themeVariables;
          t.provider.syncTheme({
            themeMode: e,
            themeVariables: n,
            w3mThemeVariables: Mt(n, e)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(e) {
      _e.themeVariables = {
        ..._e.themeVariables,
        ...e
      };
      try {
        const t = g.getAuthConnector();
        if (t) {
          const n = dn.getSnapshot().themeVariables;
          t.provider.syncTheme({
            themeVariables: n,
            w3mThemeVariables: Mt(_e.themeVariables, _e.themeMode)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return ft(_e);
    }
  };
  de = Ce(dn);
  us = Object.fromEntries(ss.map((e) => [
    e,
    void 0
  ]));
  Tr = Object.fromEntries(ss.map((e) => [
    e,
    true
  ]));
  F = z({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: us,
    filterByNamespaceMap: Tr
  });
  kr = {
    state: F,
    subscribe(e) {
      return ee(F, () => {
        e(F);
      });
    },
    subscribeKey(e, t) {
      return te(F, e, t);
    },
    initialize(e) {
      e.forEach((t) => {
        const n = C.getConnectedConnectorId(t);
        n && g.setConnectorId(n, t);
      });
    },
    setActiveConnector(e) {
      e && (F.activeConnector = Ct(e));
    },
    setConnectors(e) {
      e.filter((r) => !F.allConnectors.some((a) => a.id === r.id && g.getConnectorName(a.name) === g.getConnectorName(r.name) && a.chain === r.chain)).forEach((r) => {
        r.type !== "MULTI_CHAIN" && F.allConnectors.push(Ct(r));
      });
      const n = g.getEnabledNamespaces(), s = g.getEnabledConnectors(n);
      F.connectors = g.mergeMultiChainConnectors(s);
    },
    filterByNamespaces(e) {
      Object.keys(F.filterByNamespaceMap).forEach((t) => {
        F.filterByNamespaceMap[t] = false;
      }), e.forEach((t) => {
        F.filterByNamespaceMap[t] = true;
      }), g.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(e, t) {
      F.filterByNamespaceMap[e] = t, g.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      const e = g.getEnabledNamespaces(), t = g.getEnabledConnectors(e), n = g.areAllNamespacesEnabled();
      F.connectors = g.mergeMultiChainConnectors(t), n ? I.clearFilterByNamespaces() : I.filterByNamespaces(e);
    },
    getEnabledNamespaces() {
      return Object.entries(F.filterByNamespaceMap).filter(([e, t]) => t).map(([e]) => e);
    },
    getEnabledConnectors(e) {
      return F.allConnectors.filter((t) => e.includes(t.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values(F.filterByNamespaceMap).every((e) => e);
    },
    mergeMultiChainConnectors(e) {
      const t = g.generateConnectorMapByName(e), n = [];
      return t.forEach((s) => {
        const r = s[0], a = (r == null ? void 0 : r.id) === h.CONNECTOR_ID.AUTH;
        s.length > 1 && r ? n.push({
          name: r.name,
          imageUrl: r.imageUrl,
          imageId: r.imageId,
          connectors: [
            ...s
          ],
          type: a ? "AUTH" : "MULTI_CHAIN",
          chain: "eip155",
          id: (r == null ? void 0 : r.id) || ""
        }) : r && n.push(r);
      }), n;
    },
    generateConnectorMapByName(e) {
      const t = /* @__PURE__ */ new Map();
      return e.forEach((n) => {
        const { name: s } = n, r = g.getConnectorName(s);
        if (!r) return;
        const a = t.get(r) || [];
        a.find((i) => i.chain === n.chain) || a.push(n), t.set(r, a);
      }), t;
    },
    getConnectorName(e) {
      return e && ({
        "Trust Wallet": "Trust"
      }[e] || e);
    },
    getUniqueConnectorsByName(e) {
      const t = [];
      return e.forEach((n) => {
        t.find((s) => s.chain === n.chain) || t.push(n);
      }), t;
    },
    addConnector(e) {
      var _a2, _b, _c;
      if (e.id === h.CONNECTOR_ID.AUTH) {
        const t = e, n = ft(f.state), s = de.getSnapshot().themeMode, r = de.getSnapshot().themeVariables;
        (_b = (_a2 = t == null ? void 0 : t.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b.call(_a2, {
          metadata: n.metadata,
          sdkVersion: n.sdkVersion,
          projectId: n.projectId,
          sdkType: n.sdkType
        }), (_c = t == null ? void 0 : t.provider) == null ? void 0 : _c.syncTheme({
          themeMode: s,
          themeVariables: r,
          w3mThemeVariables: Mt(r, s)
        }), g.setConnectors([
          e
        ]);
      } else g.setConnectors([
        e
      ]);
    },
    getAuthConnector(e) {
      var _a2;
      const t = e || c.state.activeChain, n = F.connectors.find((s) => s.id === h.CONNECTOR_ID.AUTH);
      if (n) return ((_a2 = n == null ? void 0 : n.connectors) == null ? void 0 : _a2.length) ? n.connectors.find((r) => r.chain === t) : n;
    },
    getAnnouncedConnectorRdns() {
      return F.connectors.filter((e) => e.type === "ANNOUNCED").map((e) => {
        var _a2;
        return (_a2 = e.info) == null ? void 0 : _a2.rdns;
      });
    },
    getConnectorById(e) {
      return re.sortConnectorsByPriority(F.allConnectors).find((n) => n.id === e);
    },
    getConnector({ id: e, namespace: t }) {
      const n = t || c.state.activeChain, s = F.allConnectors.filter((o) => o.chain === n);
      return re.sortConnectorsByPriority(s).find((o) => o.id === e || o.explorerId === e);
    },
    syncIfAuthConnector(e) {
      var _a2, _b;
      if (e.id !== "AUTH") return;
      const t = e, n = ft(f.state), s = de.getSnapshot().themeMode, r = de.getSnapshot().themeVariables;
      (_b = (_a2 = t == null ? void 0 : t.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b.call(_a2, {
        metadata: n.metadata,
        sdkVersion: n.sdkVersion,
        sdkType: n.sdkType,
        projectId: n.projectId
      }), t.provider.syncTheme({
        themeMode: s,
        themeVariables: r,
        w3mThemeVariables: Mt(r, s)
      });
    },
    getConnectorsByNamespace(e) {
      const t = F.allConnectors.filter((n) => n.chain === e);
      return g.mergeMultiChainConnectors(t);
    },
    canSwitchToSmartAccount(e) {
      return c.checkIfSmartAccountEnabled() && fe(e) === Re.ACCOUNT_TYPES.EOA;
    },
    selectWalletConnector(e) {
      var _a2;
      const t = (_a2 = O.state.data) == null ? void 0 : _a2.redirectView, n = c.state.activeChain, s = n ? g.getConnector({
        id: e.id,
        namespace: n
      }) : void 0;
      gr.handleMobileDeeplinkRedirect((s == null ? void 0 : s.explorerId) || e.id, c.state.activeChain), s ? O.push("ConnectingExternal", {
        connector: s,
        wallet: e,
        redirectView: t
      }) : O.push("ConnectingWalletConnect", {
        wallet: e,
        redirectView: t
      });
    },
    getConnectors(e) {
      return e ? g.getConnectorsByNamespace(e) : g.mergeMultiChainConnectors(F.allConnectors);
    },
    setFilterByNamespace(e) {
      F.filterByNamespace = e, F.connectors = g.getConnectors(e), I.setFilterByNamespace(e);
    },
    setConnectorId(e, t) {
      e && (F.activeConnectorIds = {
        ...F.activeConnectorIds,
        [t]: e
      }, C.setConnectedConnectorId(t, e));
    },
    removeConnectorId(e) {
      F.activeConnectorIds = {
        ...F.activeConnectorIds,
        [e]: void 0
      }, C.deleteConnectedConnectorId(e);
    },
    getConnectorId(e) {
      if (e) return F.activeConnectorIds[e];
    },
    isConnected(e) {
      return e ? !!F.activeConnectorIds[e] : Object.values(F.activeConnectorIds).some((t) => !!t);
    },
    resetConnectorIds() {
      F.activeConnectorIds = {
        ...us
      };
    },
    extendConnectorsWithExplorerWallets(e) {
      F.allConnectors.forEach((s) => {
        const r = e.find((a) => {
          var _a2;
          return a.id === s.id || a.rdns && a.rdns === ((_a2 = s.info) == null ? void 0 : _a2.rdns);
        });
        r && (s.explorerWallet = r);
      });
      const t = g.getEnabledNamespaces(), n = g.getEnabledConnectors(t);
      F.connectors = g.mergeMultiChainConnectors(n);
    },
    async connect(e = {}) {
      const { namespace: t } = e;
      return g.setFilterByNamespace(t), O.push("Connect", {
        addWalletForNamespace: t
      }), new Promise((n, s) => {
        if (t) {
          const r = c.subscribeChainProp("accountState", (o) => {
            (o == null ? void 0 : o.caipAddress) && (n({
              caipAddress: o == null ? void 0 : o.caipAddress
            }), r());
          }, t), a = M.subscribeKey("open", (o) => {
            o || (s(new Error("Modal closed")), a());
          });
        } else {
          const r = c.subscribeKey("activeCaipAddress", (o) => {
            o && (n({
              caipAddress: o
            }), r());
          }), a = M.subscribeKey("open", (o) => {
            o || (s(new Error("Modal closed")), a());
          });
        }
      });
    }
  };
  g = Ce(kr);
  vr = 1e3;
  it = {
    checkNamespaceConnectorId(e, t) {
      return g.getConnectorId(e) === t;
    },
    isSocialProvider(e) {
      return L.DEFAULT_REMOTE_FEATURES.socials.includes(e);
    },
    connectWalletConnect({ walletConnect: e, connector: t, closeModalOnConnect: n = true, redirectViewOnModalClose: s = "Connect", onOpen: r, onConnect: a }) {
      return new Promise((o, i) => {
        if (e && g.setActiveConnector(t), r == null ? void 0 : r(y.isMobile() && e), s) {
          const l = M.subscribeKey("open", (u) => {
            u || (O.state.view !== s && O.replace(s), l(), i(new Error("Modal closed")));
          });
        }
        const d = c.subscribeKey("activeCaipAddress", (l) => {
          l && (a == null ? void 0 : a(), n && M.close(), d(), o(Z.parseCaipAddress(l)));
        });
      });
    },
    connectExternal(e) {
      return new Promise((t, n) => {
        const s = c.subscribeKey("activeCaipAddress", (r) => {
          r && (M.close(), s(), t(Z.parseCaipAddress(r)));
        });
        E.connectExternal(e, e.chain).catch(() => {
          s(), n(new Error("Connection rejected"));
        });
      });
    },
    connectSocial({ social: e, namespace: t, closeModalOnConnect: n = true, onOpenFarcaster: s, onConnect: r }) {
      let a, o = false, i = null;
      const d = t || c.state.activeChain, l = c.subscribeKey("activeCaipAddress", (u) => {
        u && (n && M.close(), l());
      });
      return new Promise((u, p) => {
        async function w(A) {
          var _a2;
          if ((_a2 = A.data) == null ? void 0 : _a2.resultUri) if (A.origin === h.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", w, false);
            try {
              const m = g.getAuthConnector(d);
              if (m && !o) {
                a && a.close(), o = true;
                const N = A.data.resultUri;
                D.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: {
                    provider: e
                  }
                }), C.setConnectedSocialProvider(e), await E.connectExternal({
                  id: m.id,
                  type: m.type,
                  socialUri: N
                }, m.chain);
                const R = c.state.activeCaipAddress;
                if (!R) {
                  p(new Error("Failed to connect"));
                  return;
                }
                u(Z.parseCaipAddress(R)), D.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: {
                    provider: e
                  }
                });
              }
            } catch (m) {
              D.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: {
                  provider: e,
                  message: y.parseError(m)
                }
              }), p(new Error("Failed to connect"));
            }
          } else D.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_ERROR",
            properties: {
              provider: e,
              message: "Untrusted Origin"
            }
          });
        }
        async function S() {
          var _a2;
          if (D.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_STARTED",
            properties: {
              provider: e
            }
          }), e === "farcaster") {
            s == null ? void 0 : s();
            const A = M.subscribeKey("open", (N) => {
              !N && e === "farcaster" && (p(new Error("Popup closed")), r == null ? void 0 : r(), A());
            }), m = g.getAuthConnector();
            if (m && !((_a2 = c.getAccountData(d)) == null ? void 0 : _a2.farcasterUrl)) try {
              const { url: R } = await m.provider.getFarcasterUri();
              c.setAccountProp("farcasterUrl", R, d);
            } catch {
              p(new Error("Failed to connect to farcaster"));
            }
          } else {
            const A = g.getAuthConnector();
            i = y.returnOpenHref(`${h.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
            try {
              if (A) {
                const { uri: m } = await A.provider.getSocialRedirectUri({
                  provider: e
                });
                if (i && m) {
                  i.location.href = m, a = i;
                  const N = setInterval(() => {
                    (a == null ? void 0 : a.closed) && !o && (p(new Error("Popup closed")), clearInterval(N));
                  }, 1e3);
                  window.addEventListener("message", w, false);
                } else i == null ? void 0 : i.close(), p(new Error("Failed to initiate social connection"));
              }
            } catch {
              p(new Error("Failed to initiate social connection")), i == null ? void 0 : i.close();
            }
          }
        }
        S();
      });
    },
    connectEmail({ closeModalOnConnect: e = true, redirectViewOnModalClose: t = "Connect", onOpen: n, onConnect: s }) {
      return new Promise((r, a) => {
        if (n == null ? void 0 : n(), t) {
          const i = M.subscribeKey("open", (d) => {
            d || (O.state.view !== t && O.replace(t), i(), a(new Error("Modal closed")));
          });
        }
        const o = c.subscribeKey("activeCaipAddress", (i) => {
          i && (s == null ? void 0 : s(), e && M.close(), o(), r(Z.parseCaipAddress(i)));
        });
      });
    },
    async updateEmail() {
      const e = C.getConnectedConnectorId(c.state.activeChain), t = g.getAuthConnector();
      if (!t) throw new Error("No auth connector found");
      if (e !== h.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
      const n = t.provider.getEmail() ?? "";
      return await M.open({
        view: "UpdateEmailWallet",
        data: {
          email: n,
          redirectView: void 0
        }
      }), new Promise((s, r) => {
        const a = setInterval(() => {
          const i = t.provider.getEmail() ?? "";
          i !== n && (M.close(), clearInterval(a), o(), s({
            email: i
          }));
        }, vr), o = M.subscribeKey("open", (i) => {
          i || (O.state.view !== "Connect" && O.push("Connect"), clearInterval(a), o(), r(new Error("Modal closed")));
        });
      });
    },
    canSwitchToSmartAccount(e) {
      return c.checkIfSmartAccountEnabled() && fe(e) === Re.ACCOUNT_TYPES.EOA;
    }
  };
  ps = function() {
    var _a2, _b;
    const e = ((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) || "eip155", t = ((_b = c.state.activeCaipNetwork) == null ? void 0 : _b.id) || 1, n = L.NATIVE_TOKEN_ADDRESS[e];
    return `${e}:${t}:${n}`;
  };
  ja = function(e) {
    return L.NATIVE_TOKEN_ADDRESS[e];
  };
  fe = function(e) {
    var _a2;
    return (_a2 = c.getAccountData(e)) == null ? void 0 : _a2.preferredAccountType;
  };
  _t = function(e) {
    return c.state.activeCaipNetwork;
  };
  let et, Ae, G, Or, Ut, B;
  Ft = {
    getConnectionStatus(e, t) {
      const n = g.state.activeConnectorIds[t], s = E.getConnections(t);
      return !!n && e.connectorId === n ? "connected" : s.some((o) => o.connectorId.toLowerCase() === e.connectorId.toLowerCase()) ? "active" : "disconnected";
    },
    excludeConnectorAddressFromConnections({ connections: e, connectorId: t, addresses: n }) {
      return e.map((s) => {
        if ((t ? s.connectorId.toLowerCase() === t.toLowerCase() : false) && n) {
          const a = s.accounts.filter((o) => !n.some((d) => d.toLowerCase() === o.address.toLowerCase()));
          return {
            ...s,
            accounts: a
          };
        }
        return s;
      });
    },
    excludeExistingConnections(e, t) {
      const n = new Set(e);
      return t.filter((s) => !n.has(s.connectorId));
    },
    getConnectionsByConnectorId(e, t) {
      return e.filter((n) => n.connectorId.toLowerCase() === t.toLowerCase());
    },
    getConnectionsData(e) {
      var _a2;
      const t = !!((_a2 = f.state.remoteFeatures) == null ? void 0 : _a2.multiWallet), n = g.state.activeConnectorIds[e], s = E.getConnections(e), a = (E.state.recentConnections.get(e) ?? []).filter((i) => g.getConnectorById(i.connectorId)), o = Ft.excludeExistingConnections([
        ...s.map((i) => i.connectorId),
        ...n ? [
          n
        ] : []
      ], a);
      return t ? {
        connections: s,
        recentConnections: o
      } : {
        connections: s.filter((i) => i.connectorId.toLowerCase() === (n == null ? void 0 : n.toLowerCase())),
        recentConnections: []
      };
    },
    onConnectMobile(e) {
      const t = E.state.wcUri;
      if ((e == null ? void 0 : e.mobile_link) && t) try {
        E.setWcError(false);
        const { mobile_link: n, link_mode: s, name: r } = e, { redirect: a, redirectUniversalLink: o, href: i } = y.formatNativeUrl(n, t, s), d = a, l = o, u = y.isIframe() ? "_top" : "_self";
        E.setWcLinking({
          name: r,
          href: i
        }), E.setRecentWallet(e), f.state.experimental_preferUniversalLinks && l ? y.openHref(l, u) : y.openHref(d, u);
      } catch (n) {
        D.sendEvent({
          type: "track",
          event: "CONNECT_PROXY_ERROR",
          properties: {
            message: n instanceof Error ? n.message : "Error parsing the deep link",
            uri: t,
            mobile_link: e.mobile_link,
            name: e.name
          }
        }), E.setWcError(true);
      }
    }
  };
  et = z({
    loading: false,
    open: false,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: false,
    connectingWallet: void 0
  });
  Ae = {
    state: et,
    subscribe(e) {
      return ee(et, () => e(et));
    },
    subscribeOpen(e) {
      return te(et, "open", e);
    },
    set(e) {
      Object.assign(et, {
        ...et,
        ...e
      });
    }
  };
  G = z({
    transactions: [],
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: false,
    empty: false,
    next: void 0
  });
  Or = {
    state: G,
    subscribe(e) {
      return ee(G, () => e(G));
    },
    setLastNetworkInView(e) {
      G.lastNetworkInView = e;
    },
    async fetchTransactions(e) {
      var _a2;
      if (!e) throw new Error("Transactions can't be fetched without an accountAddress");
      G.loading = true;
      try {
        const t = await P.fetchTransactions({
          account: e,
          cursor: G.next,
          chainId: (_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId
        }), n = Ut.filterSpamTransactions(t.data), s = Ut.filterByConnectedChain(n), r = [
          ...G.transactions,
          ...s
        ];
        G.loading = false, G.transactions = r, G.transactionsByYear = Ut.groupTransactionsByYearAndMonth(G.transactionsByYear, s), G.empty = r.length === 0, G.next = t.next ? t.next : void 0;
      } catch {
        const n = c.state.activeChain;
        D.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: e,
            projectId: f.state.projectId,
            cursor: G.next,
            isSmartAccount: fe(n) === Re.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }), be.showError("Failed to fetch transactions"), G.loading = false, G.empty = true, G.next = void 0;
      }
    },
    groupTransactionsByYearAndMonth(e = {}, t = []) {
      const n = e;
      return t.forEach((s) => {
        const r = new Date(s.metadata.minedAt).getFullYear(), a = new Date(s.metadata.minedAt).getMonth(), o = n[r] ?? {}, d = (o[a] ?? []).filter((l) => l.id !== s.id);
        n[r] = {
          ...o,
          [a]: [
            ...d,
            s
          ].sort((l, u) => new Date(u.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
        };
      }), n;
    },
    filterSpamTransactions(e) {
      return e.filter((t) => {
        var _a2;
        return !((_a2 = t.transfers) == null ? void 0 : _a2.every((s) => {
          var _a3;
          return ((_a3 = s.nft_info) == null ? void 0 : _a3.flags.is_spam) === true;
        }));
      });
    },
    filterByConnectedChain(e) {
      var _a2;
      const t = (_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId;
      return e.filter((s) => s.metadata.chain === t);
    },
    clearCursor() {
      G.next = void 0;
    },
    resetTransactions() {
      G.transactions = [], G.transactionsByYear = {}, G.lastNetworkInView = void 0, G.loading = false, G.empty = false, G.next = void 0;
    }
  };
  Ut = Ce(Or, "API_ERROR");
  B = z({
    connections: /* @__PURE__ */ new Map(),
    recentConnections: /* @__PURE__ */ new Map(),
    isSwitchingConnection: false,
    wcError: false,
    wcFetchingUri: false,
    buffering: false,
    status: "disconnected"
  });
  let We;
  let Rr, Qt;
  Rr = {
    state: B,
    subscribe(e) {
      return ee(B, () => e(B));
    },
    subscribeKey(e, t) {
      return te(B, e, t);
    },
    _getClient() {
      return B._client;
    },
    setClient(e) {
      B._client = Ct(e);
    },
    initialize(e) {
      const t = e.filter((n) => !!n.namespace).map((n) => n.namespace);
      E.syncStorageConnections(t);
    },
    syncStorageConnections(e) {
      const t = C.getConnections(), n = e ?? Array.from(c.state.chains.keys());
      for (const s of n) {
        const r = t[s] ?? [], a = new Map(B.recentConnections);
        a.set(s, r), B.recentConnections = a;
      }
    },
    getConnections(e) {
      return e ? B.connections.get(e) ?? [] : [];
    },
    hasAnyConnection(e) {
      const t = E.state.connections;
      return Array.from(t.values()).flatMap((n) => n).some(({ connectorId: n }) => n === e);
    },
    async connectWalletConnect({ cache: e = "auto" } = {}) {
      var _a2, _b, _c, _d2;
      B.wcFetchingUri = true;
      const t = y.isTelegram() || y.isSafari() && y.isIos();
      if (e === "always" || e === "auto" && t) {
        if (We) {
          await We, We = void 0;
          return;
        }
        if (!y.isPairingExpired(B == null ? void 0 : B.wcPairingExpiry)) {
          const n = B.wcUri;
          B.wcUri = n;
          return;
        }
        We = (_b = (_a2 = E._getClient()) == null ? void 0 : _a2.connectWalletConnect) == null ? void 0 : _b.call(_a2).catch(() => {
        }), E.state.status = "connecting", await We, We = void 0, B.wcPairingExpiry = void 0, E.state.status = "connected";
      } else await ((_d2 = (_c = E._getClient()) == null ? void 0 : _c.connectWalletConnect) == null ? void 0 : _d2.call(_c));
    },
    async connectExternal(e, t, n = true) {
      var _a2, _b, _c;
      const s = await ((_b = (_a2 = E._getClient()) == null ? void 0 : _a2.connectExternal) == null ? void 0 : _b.call(_a2, e));
      n && c.setActiveNamespace(t);
      const r = g.state.allConnectors.find((o) => o.id === (e == null ? void 0 : e.id)), a = e.type === "AUTH" ? "email" : "browser";
      return D.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: {
          method: a,
          name: (r == null ? void 0 : r.name) || "Unknown",
          view: O.state.view,
          walletRank: (_c = r == null ? void 0 : r.explorerWallet) == null ? void 0 : _c.order
        }
      }), s;
    },
    async reconnectExternal(e) {
      var _a2, _b;
      await ((_b = (_a2 = E._getClient()) == null ? void 0 : _a2.reconnectExternal) == null ? void 0 : _b.call(_a2, e));
      const t = e.chain || c.state.activeChain;
      t && g.setConnectorId(e.id, t);
    },
    async setPreferredAccountType(e, t) {
      var _a2;
      if (!t) return;
      M.setLoading(true, c.state.activeChain);
      const n = g.getAuthConnector();
      n && (c.setAccountProp("preferredAccountType", e, t), await n.provider.setPreferredAccount(e), C.setPreferredAccountTypes(Object.entries(c.state.chains).reduce((s, [r, a]) => {
        const o = r, i = fe(o);
        return i !== void 0 && (s[o] = i), s;
      }, {})), await E.reconnectExternal(n), M.setLoading(false, c.state.activeChain), D.sendEvent({
        type: "track",
        event: "SET_PREFERRED_ACCOUNT_TYPE",
        properties: {
          accountType: e,
          network: ((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || ""
        }
      }));
    },
    async signMessage(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.signMessage(e);
    },
    parseUnits(e, t) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.parseUnits(e, t);
    },
    formatUnits(e, t) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.formatUnits(e, t);
    },
    updateBalance(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.updateBalance(e);
    },
    async sendTransaction(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.sendTransaction(e);
    },
    async getCapabilities(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.getCapabilities(e);
    },
    async grantPermissions(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.grantPermissions(e);
    },
    async walletGetAssets(e) {
      var _a2;
      return ((_a2 = E._getClient()) == null ? void 0 : _a2.walletGetAssets(e)) ?? {};
    },
    async estimateGas(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.estimateGas(e);
    },
    async writeContract(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.writeContract(e);
    },
    async writeSolanaTransaction(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.writeSolanaTransaction(e);
    },
    async getEnsAddress(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.getEnsAddress(e);
    },
    async getEnsAvatar(e) {
      var _a2;
      return (_a2 = E._getClient()) == null ? void 0 : _a2.getEnsAvatar(e);
    },
    checkInstalled(e) {
      var _a2, _b;
      return ((_b = (_a2 = E._getClient()) == null ? void 0 : _a2.checkInstalled) == null ? void 0 : _b.call(_a2, e)) || false;
    },
    resetWcConnection() {
      B.wcUri = void 0, B.wcPairingExpiry = void 0, B.wcLinking = void 0, B.recentWallet = void 0, B.wcFetchingUri = false, B.status = "disconnected", Ut.resetTransactions(), C.deleteWalletConnectDeepLink(), C.deleteRecentWallet(), Ae.set({
        connectingWallet: void 0
      });
    },
    resetUri() {
      B.wcUri = void 0, B.wcPairingExpiry = void 0, We = void 0, B.wcFetchingUri = false, Ae.set({
        connectingWallet: void 0
      });
    },
    finalizeWcConnection(e) {
      var _a2, _b;
      const { wcLinking: t, recentWallet: n } = E.state;
      t && C.setWalletConnectDeepLink(t), n && C.setAppKitRecent(n), e && D.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: e,
        properties: {
          method: t ? "mobile" : "qrcode",
          name: ((_b = (_a2 = O.state.data) == null ? void 0 : _a2.wallet) == null ? void 0 : _b.name) || "Unknown",
          view: O.state.view,
          walletRank: n == null ? void 0 : n.order
        }
      });
    },
    setWcBasic(e) {
      B.wcBasic = e;
    },
    setUri(e) {
      B.wcUri = e, B.wcFetchingUri = false, B.wcPairingExpiry = y.getPairingExpiry();
    },
    setWcLinking(e) {
      B.wcLinking = e;
    },
    setWcError(e) {
      B.wcError = e, B.wcFetchingUri = false, B.buffering = false;
    },
    setRecentWallet(e) {
      B.recentWallet = e;
    },
    setBuffering(e) {
      B.buffering = e;
    },
    setStatus(e) {
      B.status = e;
    },
    setIsSwitchingConnection(e) {
      B.isSwitchingConnection = e;
    },
    async disconnect({ id: e, namespace: t, initialDisconnect: n } = {}) {
      var _a2;
      try {
        await ((_a2 = E._getClient()) == null ? void 0 : _a2.disconnect({
          id: e,
          chainNamespace: t,
          initialDisconnect: n
        }));
      } catch (s) {
        throw new qe("Failed to disconnect", "INTERNAL_SDK_ERROR", s);
      }
    },
    async disconnectConnector({ id: e, namespace: t }) {
      var _a2;
      try {
        await ((_a2 = E._getClient()) == null ? void 0 : _a2.disconnectConnector({
          id: e,
          namespace: t
        }));
      } catch (n) {
        throw new qe("Failed to disconnect connector", "INTERNAL_SDK_ERROR", n);
      }
    },
    setConnections(e, t) {
      const n = new Map(B.connections);
      n.set(t, e), B.connections = n;
    },
    async handleAuthAccountSwitch({ address: e, namespace: t }) {
      var _a2, _b, _c;
      const s = (_c = (_b = (_a2 = c.getAccountData(t)) == null ? void 0 : _a2.user) == null ? void 0 : _b.accounts) == null ? void 0 : _c.find((a) => a.type === "smartAccount"), r = s && s.address.toLowerCase() === e.toLowerCase() && it.canSwitchToSmartAccount(t) ? "smartAccount" : "eoa";
      await E.setPreferredAccountType(r, t);
    },
    async handleActiveConnection({ connection: e, namespace: t, address: n }) {
      var _a2;
      const s = g.getConnectorById(e.connectorId), r = e.connectorId === h.CONNECTOR_ID.AUTH;
      if (!s) throw new Error(`No connector found for connection: ${e.connectorId}`);
      if (r) n && await E.handleAuthAccountSwitch({
        address: n,
        namespace: t
      });
      else return (_a2 = await E.connectExternal({
        id: s.id,
        type: s.type,
        provider: s.provider,
        address: n,
        chain: t
      }, t)) == null ? void 0 : _a2.address;
      return n;
    },
    async handleDisconnectedConnection({ connection: e, namespace: t, address: n, closeModalOnConnect: s }) {
      var _a2, _b;
      const r = g.getConnectorById(e.connectorId), a = (_b = (_a2 = e.auth) == null ? void 0 : _a2.name) == null ? void 0 : _b.toLowerCase(), o = e.connectorId === h.CONNECTOR_ID.AUTH, i = e.connectorId === h.CONNECTOR_ID.WALLET_CONNECT;
      if (!r) throw new Error(`No connector found for connection: ${e.connectorId}`);
      let d;
      if (o) if (a && it.isSocialProvider(a)) {
        const { address: l } = await it.connectSocial({
          social: a,
          closeModalOnConnect: s,
          onOpenFarcaster() {
            M.open({
              view: "ConnectingFarcaster"
            });
          },
          onConnect() {
            O.replace("ProfileWallets");
          }
        });
        d = l;
      } else {
        const { address: l } = await it.connectEmail({
          closeModalOnConnect: s,
          onOpen() {
            M.open({
              view: "EmailLogin"
            });
          },
          onConnect() {
            O.replace("ProfileWallets");
          }
        });
        d = l;
      }
      else if (i) {
        const { address: l } = await it.connectWalletConnect({
          walletConnect: true,
          connector: r,
          closeModalOnConnect: s,
          onOpen(u) {
            const p = u ? "AllWallets" : "ConnectingWalletConnect";
            M.state.open ? O.push(p) : M.open({
              view: p
            });
          },
          onConnect() {
            O.replace("ProfileWallets");
          }
        });
        d = l;
      } else {
        const l = await E.connectExternal({
          id: r.id,
          type: r.type,
          provider: r.provider,
          chain: t
        }, t);
        l && (d = l.address);
      }
      return o && n && await E.handleAuthAccountSwitch({
        address: n,
        namespace: t
      }), d;
    },
    async switchConnection({ connection: e, address: t, namespace: n, closeModalOnConnect: s, onChange: r }) {
      var _a2;
      let a;
      const o = (_a2 = c.getAccountData(n)) == null ? void 0 : _a2.caipAddress;
      if (o) {
        const { address: d } = Z.parseCaipAddress(o);
        a = d;
      }
      const i = Ft.getConnectionStatus(e, n);
      switch (i) {
        case "connected":
        case "active": {
          const d = await E.handleActiveConnection({
            connection: e,
            namespace: n,
            address: t
          });
          if (a && d) {
            const l = d.toLowerCase() !== a.toLowerCase();
            r == null ? void 0 : r({
              address: d,
              namespace: n,
              hasSwitchedAccount: l,
              hasSwitchedWallet: i === "active"
            });
          }
          break;
        }
        case "disconnected": {
          const d = await E.handleDisconnectedConnection({
            connection: e,
            namespace: n,
            address: t,
            closeModalOnConnect: s
          });
          d && (r == null ? void 0 : r({
            address: d,
            namespace: n,
            hasSwitchedAccount: true,
            hasSwitchedWallet: true
          }));
          break;
        }
        default:
          throw new Error(`Invalid connection status: ${i}`);
      }
    }
  };
  E = Ce(Rr);
  Qt = {
    createBalance(e, t) {
      const n = {
        name: e.metadata.name || "",
        symbol: e.metadata.symbol || "",
        decimals: e.metadata.decimals || 0,
        value: e.metadata.value || 0,
        price: e.metadata.price || 0,
        iconUrl: e.metadata.iconUrl || ""
      };
      return {
        name: n.name,
        symbol: n.symbol,
        chainId: t,
        address: e.address === "native" ? void 0 : this.convertAddressToCAIP10Address(e.address, t),
        value: n.value,
        price: n.price,
        quantity: {
          decimals: n.decimals.toString(),
          numeric: this.convertHexToBalance({
            hex: e.balance,
            decimals: n.decimals
          })
        },
        iconUrl: n.iconUrl
      };
    },
    convertHexToBalance({ hex: e, decimals: t }) {
      return es(BigInt(e), t);
    },
    convertAddressToCAIP10Address(e, t) {
      return `${t}:${e}`;
    },
    createCAIP2ChainId(e, t) {
      return `${t}:${parseInt(e, 16)}`;
    },
    getChainIdHexFromCAIP2ChainId(e) {
      const t = e.split(":");
      if (t.length < 2 || !t[1]) return "0x0";
      const n = t[1], s = parseInt(n, 10);
      return isNaN(s) ? "0x0" : `0x${s.toString(16)}`;
    },
    isWalletGetAssetsResponse(e) {
      return typeof e != "object" || e === null ? false : Object.values(e).every((t) => Array.isArray(t) && t.every((n) => this.isValidAsset(n)));
    },
    isValidAsset(e) {
      return typeof e == "object" && e !== null && typeof e.address == "string" && typeof e.balance == "string" && (e.type === "ERC20" || e.type === "NATIVE") && typeof e.metadata == "object" && e.metadata !== null && typeof e.metadata.name == "string" && typeof e.metadata.symbol == "string" && typeof e.metadata.decimals == "number" && typeof e.metadata.price == "number" && typeof e.metadata.iconUrl == "string";
    }
  };
  let Zt;
  async function Wn() {
    if (!Zt) {
      const { createPublicClient: e, http: t, defineChain: n } = await Lt(async () => {
        const { createPublicClient: s, http: r, defineChain: a } = await import("./index-D_bTLXjD.js");
        return {
          createPublicClient: s,
          http: r,
          defineChain: a
        };
      }, __vite__mapDeps([0,1,2,3]));
      Zt = {
        createPublicClient: e,
        http: t,
        defineChain: n
      };
    }
    return Zt;
  }
  let ln, en, $t, ae, $, Ur, x, tn, Tt, b, fs, Dr, oe, xr, lt, un, Lr, H, Mr, pn, Bn, Wr, le, Br, ut;
  ln = {
    getBlockchainApiRpcUrl(e, t) {
      const n = new URL("https://rpc.walletconnect.org/v1/");
      return n.searchParams.set("chainId", e), n.searchParams.set("projectId", t), n.toString();
    },
    async getViemChain(e) {
      const { defineChain: t } = await Wn(), { chainId: n } = Z.parseCaipNetworkId(e.caipNetworkId);
      return t({
        ...e,
        id: Number(n)
      });
    },
    async createViemPublicClient(e) {
      const { createPublicClient: t, http: n } = await Wn(), s = f.state.projectId, r = await ln.getViemChain(e);
      if (!r) throw new Error(`Chain ${e.caipNetworkId} not found in viem/chains`);
      return t({
        chain: r,
        transport: n(ln.getBlockchainApiRpcUrl(e.caipNetworkId, s))
      });
    }
  };
  En = {
    async getMyTokensWithBalance(e = {
      forceUpdate: void 0,
      caipNetwork: c.state.activeCaipNetwork,
      address: ((_c) => (_c = c.getAccountData()) == null ? void 0 : _c.address)()
    }) {
      const { forceUpdate: t, caipNetwork: n, address: s } = e, r = g.getConnectorId("eip155") === h.CONNECTOR_ID.AUTH;
      if (!s) return [];
      const a = n ? `${n.caipNetworkId}:${s}` : s, o = C.getBalanceCacheForCaipAddress(a);
      if (o) return o.balances;
      if (n && n.chainNamespace === h.CHAIN.EVM && r) {
        const d = await this.getEIP155Balances(s, n);
        if (d) return this.filterLowQualityTokens(d);
      }
      const i = await P.getBalance(s, n == null ? void 0 : n.caipNetworkId, t);
      return this.filterLowQualityTokens(i.balances);
    },
    async getEIP155Balances(e, t) {
      var _a2, _b, _c;
      try {
        const n = Qt.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);
        if (!((_c = (_b = (_a2 = await E.getCapabilities(e)) == null ? void 0 : _a2[n]) == null ? void 0 : _b.assetDiscovery) == null ? void 0 : _c.supported)) return null;
        const r = await E.walletGetAssets({
          account: e,
          chainFilter: [
            n
          ]
        });
        if (!Qt.isWalletGetAssetsResponse(r)) return null;
        const o = (r[n] || []).map((i) => Qt.createBalance(i, t.caipNetworkId));
        return C.updateBalanceCache({
          caipAddress: `${t.caipNetworkId}:${e}`,
          balance: {
            balances: o
          },
          timestamp: Date.now()
        }), o;
      } catch {
        return null;
      }
    },
    filterLowQualityTokens(e) {
      return e.filter((t) => t.quantity.decimals !== "0");
    },
    async fetchERC20Balance({ caipAddress: e, assetAddress: t, caipNetwork: n }) {
      const s = await ln.createViemPublicClient(n), { address: r } = Z.parseCaipAddress(e), [{ result: a }, { result: o }, { result: i }, { result: d }] = await s.multicall({
        contracts: [
          {
            address: t,
            functionName: "name",
            args: [],
            abi: yt
          },
          {
            address: t,
            functionName: "symbol",
            args: [],
            abi: yt
          },
          {
            address: t,
            functionName: "balanceOf",
            args: [
              r
            ],
            abi: yt
          },
          {
            address: t,
            functionName: "decimals",
            args: [],
            abi: yt
          }
        ]
      });
      return {
        name: a,
        symbol: o,
        decimals: d,
        balance: i && d ? es(i, d) : "0"
      };
    }
  };
  en = {
    adapters: {}
  };
  hs = {
    state: en,
    initialize(e) {
      en.adapters = {
        ...e
      };
    },
    get(e) {
      return en.adapters[e];
    }
  };
  $t = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0,
    sui: void 0,
    stacks: void 0,
    ton: void 0
  };
  ae = z({
    providers: {
      ...$t
    },
    providerIds: {
      ...$t
    }
  });
  q = {
    state: ae,
    subscribeKey(e, t) {
      return te(ae, e, t);
    },
    subscribe(e) {
      return ee(ae, () => {
        e(ae);
      });
    },
    subscribeProviders(e) {
      return ee(ae.providers, () => e(ae.providers));
    },
    setProvider(e, t) {
      e && t && (ae.providers[e] = Ct(t));
    },
    getProvider(e) {
      if (e) return ae.providers[e];
    },
    setProviderId(e, t) {
      t && (ae.providerIds[e] = t);
    },
    getProviderId(e) {
      if (e) return ae.providerIds[e];
    },
    reset() {
      ae.providers = {
        ...$t
      }, ae.providerIds = {
        ...$t
      };
    },
    resetChain(e) {
      ae.providers[e] = void 0, ae.providerIds[e] = void 0;
    }
  };
  Pr = {
    async getTokenList(e) {
      var _a2, _b;
      return ((_b = (_a2 = await P.fetchSwapTokens({
        chainId: e
      })) == null ? void 0 : _a2.tokens) == null ? void 0 : _b.map((s) => ({
        ...s,
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
      const e = c.state.activeCaipNetwork;
      if (!e) return null;
      try {
        switch (e.chainNamespace) {
          case "solana":
            const t = (_a2 = await (E == null ? void 0 : E.estimateGas({
              chainNamespace: "solana"
            }))) == null ? void 0 : _a2.toString();
            return {
              standard: t,
              fast: t,
              instant: t
            };
          case "eip155":
          default:
            return await P.fetchGasPrice({
              chainId: e.caipNetworkId
            });
        }
      } catch {
        return null;
      }
    },
    async fetchSwapAllowance({ tokenAddress: e, userAddress: t, sourceTokenAmount: n, sourceTokenDecimals: s }) {
      const r = await P.fetchSwapAllowance({
        tokenAddress: e,
        userAddress: t
      });
      if ((r == null ? void 0 : r.allowance) && n && s) {
        const a = E.parseUnits(n, s) || 0;
        return BigInt(r.allowance) >= a;
      }
      return false;
    },
    async getMyTokensWithBalance(e) {
      var _a2;
      const t = await En.getMyTokensWithBalance({
        forceUpdate: e,
        caipNetwork: c.state.activeCaipNetwork,
        address: (_a2 = c.getAccountData()) == null ? void 0 : _a2.address
      });
      return c.setAccountProp("tokenBalance", t, c.state.activeChain), this.mapBalancesToSwapTokens(t);
    },
    mapBalancesToSwapTokens(e) {
      return (e == null ? void 0 : e.map((t) => ({
        ...t,
        address: (t == null ? void 0 : t.address) ? t.address : ps(),
        decimals: parseInt(t.quantity.decimals, 10),
        logoUri: t.iconUrl,
        eip2612: false
      }))) || [];
    },
    async handleSwapError(e) {
      var _a2, _b, _c, _d2;
      try {
        const t = e == null ? void 0 : e.cause;
        return (t == null ? void 0 : t.json) && ((_d2 = (_c = (_b = (_a2 = await t.json()) == null ? void 0 : _a2.reasons) == null ? void 0 : _b[0]) == null ? void 0 : _c.description) == null ? void 0 : _d2.includes("insufficient liquidity")) ? "Insufficient liquidity" : void 0;
      } catch {
        return;
      }
    }
  };
  $ = z({
    tokenBalances: [],
    loading: false
  });
  Ur = {
    state: $,
    subscribe(e) {
      return ee($, () => e($));
    },
    subscribeKey(e, t) {
      return te($, e, t);
    },
    setToken(e) {
      e && ($.token = Ct(e));
    },
    setTokenAmount(e) {
      $.sendTokenAmount = e;
    },
    setReceiverAddress(e) {
      $.receiverAddress = e;
    },
    setReceiverProfileImageUrl(e) {
      $.receiverProfileImageUrl = e;
    },
    setReceiverProfileName(e) {
      $.receiverProfileName = e;
    },
    setNetworkBalanceInUsd(e) {
      $.networkBalanceInUSD = e;
    },
    setLoading(e) {
      $.loading = e;
    },
    getSdkEventProperties(e) {
      var _a2, _b;
      return {
        message: y.parseError(e),
        isSmartAccount: fe(c.state.activeChain) === Re.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((_a2 = $.token) == null ? void 0 : _a2.symbol) || "",
        amount: $.sendTokenAmount ?? 0,
        network: ((_b = c.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId) || ""
      };
    },
    async sendToken() {
      var _a2;
      try {
        switch (x.setLoading(true), (_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) {
          case "eip155":
            await x.sendEvmToken();
            return;
          case "solana":
            await x.sendSolanaToken();
            return;
          default:
            throw new Error("Unsupported chain");
        }
      } catch (e) {
        throw Oe.isUserRejectedRequestError(e) ? new is(e) : e;
      } finally {
        x.setLoading(false);
      }
    },
    async sendEvmToken() {
      var _a2, _b, _c;
      const e = c.state.activeChain;
      if (!e) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
      const t = fe(e);
      if (!x.state.sendTokenAmount || !x.state.receiverAddress) throw new Error("An amount and receiver address are required");
      if (!x.state.token) throw new Error("A token is required");
      if ((_a2 = x.state.token) == null ? void 0 : _a2.address) {
        D.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: t === Re.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: x.state.token.address,
            amount: x.state.sendTokenAmount,
            network: ((_b = c.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId) || ""
          }
        });
        const { hash: n } = await x.sendERC20Token({
          receiverAddress: x.state.receiverAddress,
          tokenAddress: x.state.token.address,
          sendTokenAmount: x.state.sendTokenAmount,
          decimals: x.state.token.quantity.decimals
        });
        n && ($.hash = n);
      } else {
        D.sendEvent({
          type: "track",
          event: "SEND_INITIATED",
          properties: {
            isSmartAccount: t === Re.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: x.state.token.symbol || "",
            amount: x.state.sendTokenAmount,
            network: ((_c = c.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || ""
          }
        });
        const { hash: n } = await x.sendNativeToken({
          receiverAddress: x.state.receiverAddress,
          sendTokenAmount: x.state.sendTokenAmount,
          decimals: x.state.token.quantity.decimals
        });
        n && ($.hash = n);
      }
    },
    async fetchTokenBalance(e) {
      var _a2, _b, _c;
      $.loading = true;
      const t = c.state.activeChain, n = (_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, s = (_b = c.state.activeCaipNetwork) == null ? void 0 : _b.chainNamespace, r = ((_c = c.getAccountData(t)) == null ? void 0 : _c.caipAddress) ?? c.state.activeCaipAddress, a = r ? y.getPlainAddress(r) : void 0;
      if ($.lastRetry && !y.isAllowedRetry($.lastRetry, 30 * L.ONE_SEC_MS)) return $.loading = false, [];
      try {
        if (a && n && s) {
          const o = await En.getMyTokensWithBalance();
          return $.tokenBalances = o, $.lastRetry = void 0, o;
        }
      } catch (o) {
        $.lastRetry = Date.now(), e == null ? void 0 : e(o), be.showError("Token Balance Unavailable");
      } finally {
        $.loading = false;
      }
      return [];
    },
    fetchNetworkBalance() {
      if ($.tokenBalances.length === 0) return;
      const e = Pr.mapBalancesToSwapTokens($.tokenBalances);
      if (!e) return;
      const t = e.find((n) => n.address === ps());
      t && ($.networkBalanceInUSD = t ? os.multiply(t.quantity.numeric, t.price).toString() : "0");
    },
    async sendNativeToken(e) {
      var _a2, _b, _c, _d2;
      O.pushTransactionStack({});
      const t = e.receiverAddress, n = (_a2 = c.getAccountData()) == null ? void 0 : _a2.address, s = E.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals)), a = await E.sendTransaction({
        chainNamespace: h.CHAIN.EVM,
        to: t,
        address: n,
        data: "0x",
        value: s ?? BigInt(0)
      });
      return D.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: fe("eip155") === Re.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b = x.state.token) == null ? void 0 : _b.symbol) || "",
          amount: e.sendTokenAmount,
          network: ((_c = c.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || "",
          hash: a || ""
        }
      }), (_d2 = E._getClient()) == null ? void 0 : _d2.updateBalance("eip155"), x.resetSend(), {
        hash: a
      };
    },
    async sendERC20Token(e) {
      var _a2, _b, _c;
      O.pushTransactionStack({
        onSuccess() {
          O.replace("Account");
        }
      });
      const t = E.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals)), n = (_a2 = c.getAccountData()) == null ? void 0 : _a2.address;
      if (n && e.sendTokenAmount && e.receiverAddress && e.tokenAddress) {
        const s = y.getPlainAddress(e.tokenAddress);
        if (!s) throw new Error("SendController:sendERC20Token - tokenAddress is required");
        const r = await E.writeContract({
          fromAddress: n,
          tokenAddress: s,
          args: [
            e.receiverAddress,
            t ?? BigInt(0)
          ],
          method: "transfer",
          abi: qs.getERC20Abi(s),
          chainNamespace: h.CHAIN.EVM
        });
        return D.sendEvent({
          type: "track",
          event: "SEND_SUCCESS",
          properties: {
            isSmartAccount: fe("eip155") === Re.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((_b = x.state.token) == null ? void 0 : _b.symbol) || "",
            amount: e.sendTokenAmount,
            network: ((_c = c.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || "",
            hash: r || ""
          }
        }), x.resetSend(), {
          hash: r
        };
      }
      return {
        hash: void 0
      };
    },
    async sendSolanaToken() {
      var _a2, _b, _c;
      if (!x.state.sendTokenAmount || !x.state.receiverAddress) throw new Error("An amount and receiver address are required");
      O.pushTransactionStack({
        onSuccess() {
          O.replace("Account");
        }
      });
      let e;
      x.state.token && x.state.token.address !== L.SOLANA_NATIVE_TOKEN_ADDRESS && (y.isCaipAddress(x.state.token.address) ? e = y.getPlainAddress(x.state.token.address) : e = x.state.token.address);
      const t = await E.sendTransaction({
        chainNamespace: "solana",
        tokenMint: e,
        to: x.state.receiverAddress,
        value: x.state.sendTokenAmount
      });
      t && ($.hash = t), (_a2 = E._getClient()) == null ? void 0 : _a2.updateBalance("solana"), D.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: false,
          token: ((_b = x.state.token) == null ? void 0 : _b.symbol) || "",
          amount: x.state.sendTokenAmount,
          network: ((_c = c.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || "",
          hash: t || ""
        }
      }), x.resetSend();
    },
    resetSend() {
      $.token = void 0, $.sendTokenAmount = void 0, $.receiverAddress = void 0, $.receiverProfileImageUrl = void 0, $.receiverProfileName = void 0, $.loading = false, $.tokenBalances = [];
    }
  };
  x = Ce(Ur);
  tn = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    user: void 0,
    preferredAccountType: void 0
  };
  Tt = {
    caipNetwork: void 0,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
  };
  b = z({
    chains: or(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: false,
    universalAdapter: {
      connectionControllerClient: void 0
    },
    isSwitchingNamespace: false
  });
  fs = {
    state: b,
    subscribe(e) {
      return ee(b, () => {
        e(b);
      });
    },
    subscribeKey(e, t) {
      return te(b, e, t);
    },
    subscribeAccountStateProp(e, t, n) {
      var _a2;
      const s = n || b.activeChain;
      return s ? te(((_a2 = b.chains.get(s)) == null ? void 0 : _a2.accountState) || {}, e, t) : () => {
      };
    },
    subscribeChainProp(e, t, n) {
      let s;
      return ee(b.chains, () => {
        var _a2;
        const r = n || b.activeChain;
        if (r) {
          const a = (_a2 = b.chains.get(r)) == null ? void 0 : _a2[e];
          s !== a && (s = a, t(a));
        }
      });
    },
    initialize(e, t, n) {
      const { chainId: s, namespace: r } = C.getActiveNetworkProps(), a = t == null ? void 0 : t.find((u) => u.id.toString() === (s == null ? void 0 : s.toString())), i = e.find((u) => (u == null ? void 0 : u.namespace) === r) || (e == null ? void 0 : e[0]), d = e.map((u) => u.namespace).filter((u) => u !== void 0), l = f.state.enableEmbedded ? /* @__PURE__ */ new Set([
        ...d
      ]) : /* @__PURE__ */ new Set([
        ...(t == null ? void 0 : t.map((u) => u.chainNamespace)) ?? []
      ]);
      ((e == null ? void 0 : e.length) === 0 || !i) && (b.noAdapters = true), b.noAdapters || (b.activeChain = i == null ? void 0 : i.namespace, b.activeCaipNetwork = a, c.setChainNetworkData(i == null ? void 0 : i.namespace, {
        caipNetwork: a
      }), b.activeChain && Ae.set({
        activeChain: i == null ? void 0 : i.namespace
      })), l.forEach((u) => {
        const p = t == null ? void 0 : t.filter((A) => A.chainNamespace === u), w = C.getPreferredAccountTypes() || {}, S = {
          ...f.state.defaultAccountTypes,
          ...w
        };
        c.state.chains.set(u, {
          namespace: u,
          networkState: z({
            ...Tt,
            caipNetwork: p == null ? void 0 : p[0]
          }),
          accountState: z({
            ...tn,
            preferredAccountType: S[u]
          }),
          caipNetworks: p ?? [],
          ...n
        }), c.setRequestedCaipNetworks(p ?? [], u);
      });
    },
    removeAdapter(e) {
      var _a2, _b;
      if (b.activeChain === e) {
        const t = Array.from(b.chains.entries()).find(([n]) => n !== e);
        if (t) {
          const n = (_b = (_a2 = t[1]) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b[0];
          n && c.setActiveCaipNetwork(n);
        }
      }
      b.chains.delete(e);
    },
    addAdapter(e, { connectionControllerClient: t }, n) {
      if (!e.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
      b.chains.set(e.namespace, {
        namespace: e.namespace,
        networkState: {
          ...Tt,
          caipNetwork: n[0]
        },
        accountState: {
          ...tn
        },
        caipNetworks: n,
        connectionControllerClient: t
      }), c.setRequestedCaipNetworks((n == null ? void 0 : n.filter((s) => s.chainNamespace === e.namespace)) ?? [], e.namespace);
    },
    addNetwork(e) {
      var _a2;
      const t = b.chains.get(e.chainNamespace);
      if (t) {
        const n = [
          ...t.caipNetworks || []
        ];
        ((_a2 = t.caipNetworks) == null ? void 0 : _a2.find((s) => s.id === e.id)) || n.push(e), b.chains.set(e.chainNamespace, {
          ...t,
          caipNetworks: n
        }), c.setRequestedCaipNetworks(n, e.chainNamespace), g.filterByNamespace(e.chainNamespace, true);
      }
    },
    removeNetwork(e, t) {
      var _a2, _b, _c;
      const n = b.chains.get(e);
      if (n) {
        const s = ((_a2 = b.activeCaipNetwork) == null ? void 0 : _a2.id) === t, r = [
          ...((_b = n.caipNetworks) == null ? void 0 : _b.filter((a) => a.id !== t)) || []
        ];
        s && ((_c = n == null ? void 0 : n.caipNetworks) == null ? void 0 : _c[0]) && c.setActiveCaipNetwork(n.caipNetworks[0]), b.chains.set(e, {
          ...n,
          caipNetworks: r
        }), c.setRequestedCaipNetworks(r || [], e), r.length === 0 && g.filterByNamespace(e, false);
      }
    },
    setAdapterNetworkState(e, t) {
      const n = b.chains.get(e);
      n && (n.networkState = {
        ...n.networkState || Tt,
        ...t
      }, b.chains.set(e, n));
    },
    setChainAccountData(e, t, n = true) {
      if (!e) throw new Error("Chain is required to update chain account data");
      const s = b.chains.get(e);
      if (s) {
        const r = {
          ...s.accountState || tn,
          ...t
        };
        b.chains.set(e, {
          ...s,
          accountState: r
        }), (b.chains.size === 1 || b.activeChain === e) && t.caipAddress && (b.activeCaipAddress = t.caipAddress);
      }
    },
    setChainNetworkData(e, t) {
      if (!e) return;
      const n = b.chains.get(e);
      if (n) {
        const s = {
          ...n.networkState || Tt,
          ...t
        };
        b.chains.set(e, {
          ...n,
          networkState: s
        });
      }
    },
    setAccountProp(e, t, n, s = true) {
      c.setChainAccountData(n, {
        [e]: t
      }, s);
    },
    setActiveNamespace(e) {
      var _a2, _b;
      b.activeChain = e;
      const t = e ? b.chains.get(e) : void 0, n = (_a2 = t == null ? void 0 : t.networkState) == null ? void 0 : _a2.caipNetwork;
      (n == null ? void 0 : n.id) && e && (b.activeCaipAddress = (_b = t == null ? void 0 : t.accountState) == null ? void 0 : _b.caipAddress, b.activeCaipNetwork = n, c.setChainNetworkData(e, {
        caipNetwork: n
      }), C.setActiveCaipNetworkId(n == null ? void 0 : n.caipNetworkId), Ae.set({
        activeChain: e,
        selectedNetworkId: n == null ? void 0 : n.caipNetworkId
      }));
    },
    setActiveCaipNetwork(e) {
      var _a2, _b;
      if (!e) return;
      const t = b.activeChain === e.chainNamespace;
      t || c.setIsSwitchingNamespace(true);
      const n = b.chains.get(e.chainNamespace);
      b.activeChain = e.chainNamespace, b.activeCaipNetwork = e, c.setChainNetworkData(e.chainNamespace, {
        caipNetwork: e
      });
      let s = (_a2 = n == null ? void 0 : n.accountState) == null ? void 0 : _a2.address;
      if (s) b.activeCaipAddress = `${e.chainNamespace}:${e.id}:${s}`;
      else if (t && b.activeCaipAddress) {
        const { address: a } = Z.parseCaipAddress(b.activeCaipAddress);
        s = a, b.activeCaipAddress = `${e.caipNetworkId}:${s}`;
      } else b.activeCaipAddress = void 0;
      c.setChainAccountData(e.chainNamespace, {
        address: s,
        caipAddress: b.activeCaipAddress
      }), x.resetSend(), Ae.set({
        activeChain: b.activeChain,
        selectedNetworkId: (_b = b.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId
      }), C.setActiveCaipNetworkId(e.caipNetworkId), !c.checkIfSupportedNetwork(e.chainNamespace) && f.state.enableNetworkSwitch && !f.state.allowUnsupportedChain && !E.state.wcBasic && c.showUnsupportedChainUI();
    },
    addCaipNetwork(e) {
      var _a2;
      if (!e) return;
      const t = b.chains.get(e.chainNamespace);
      t && ((_a2 = t == null ? void 0 : t.caipNetworks) == null ? void 0 : _a2.push(e));
    },
    async switchActiveNamespace(e) {
      var _a2;
      if (!e) return;
      const t = e !== c.state.activeChain, n = (_a2 = c.getNetworkData(e)) == null ? void 0 : _a2.caipNetwork, s = c.getCaipNetworkByNamespace(e, n == null ? void 0 : n.id);
      t && s && await c.switchActiveNetwork(s);
    },
    async switchActiveNetwork(e, { throwOnFailure: t = false } = {}) {
      var _a2;
      const n = c.state.activeChain;
      if (!n) throw new Error("ChainController:switchActiveNetwork - namespace is required");
      const s = q.getProviderId(b.activeChain) === "AUTH", r = (_a2 = c.getAccountData(n)) == null ? void 0 : _a2.address, a = h.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e.chainNamespace);
      try {
        if (r && e.chainNamespace === n || s && a) {
          const o = hs.get(e.chainNamespace);
          if (!o) throw new Error("Adapter not found");
          await o.switchNetwork({
            caipNetwork: e
          });
        }
        c.setActiveCaipNetwork(e);
      } catch (o) {
        if (t) throw o;
      }
      D.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: {
          network: e.caipNetworkId
        }
      });
    },
    getConnectionControllerClient(e) {
      const t = e || b.activeChain;
      if (!t) throw new Error("Chain is required to get connection controller client");
      const n = b.chains.get(t);
      if (!(n == null ? void 0 : n.connectionControllerClient)) throw new Error("ConnectionController client not set");
      return n.connectionControllerClient;
    },
    getNetworkProp(e, t) {
      var _a2;
      const n = (_a2 = b.chains.get(t)) == null ? void 0 : _a2.networkState;
      if (n) return n[e];
    },
    getRequestedCaipNetworks(e) {
      const t = b.chains.get(e), { approvedCaipNetworkIds: n = [], requestedCaipNetworks: s = [] } = (t == null ? void 0 : t.networkState) || {};
      return y.sortRequestedNetworks(n, s).filter((o) => o == null ? void 0 : o.id);
    },
    getAllRequestedCaipNetworks() {
      const e = [];
      return b.chains.forEach((t) => {
        if (!t.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
        const n = c.getRequestedCaipNetworks(t.namespace);
        e.push(...n);
      }), e;
    },
    setRequestedCaipNetworks(e, t) {
      c.setAdapterNetworkState(t, {
        requestedCaipNetworks: e
      });
      const s = c.getAllRequestedCaipNetworks().map((a) => a.chainNamespace), r = Array.from(new Set(s));
      g.filterByNamespaces(r);
    },
    getAllApprovedCaipNetworkIds() {
      const e = [];
      return b.chains.forEach((t) => {
        if (!t.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
        const n = c.getApprovedCaipNetworkIds(t.namespace);
        e.push(...n);
      }), e;
    },
    getActiveCaipNetwork(e) {
      var _a2, _b;
      return e ? (_b = (_a2 = b.chains.get(e)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.caipNetwork : b.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return b.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(e) {
      var _a2, _b;
      return ((_b = (_a2 = b.chains.get(e)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.approvedCaipNetworkIds) || [];
    },
    setApprovedCaipNetworksData(e, t) {
      c.setAdapterNetworkState(e, t);
    },
    checkIfSupportedNetwork(e, t) {
      var _a2;
      const n = t || ((_a2 = b.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId), s = c.getRequestedCaipNetworks(e);
      return s.length ? s == null ? void 0 : s.some((r) => r.caipNetworkId === n) : true;
    },
    checkIfSupportedChainId(e) {
      var _a2;
      return b.activeChain ? (_a2 = c.getRequestedCaipNetworks(b.activeChain)) == null ? void 0 : _a2.some((n) => n.id === e) : true;
    },
    checkIfSmartAccountEnabled() {
      var _a2, _b, _c;
      const e = ns.caipNetworkIdToNumber((_a2 = b.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
      return !b.activeChain || !e ? false : !!((_c = ((_b = cr.get(Pt.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : _b.split(",")) || []) == null ? void 0 : _c.includes(e.toString()));
    },
    showUnsupportedChainUI() {
      M.open({
        view: "UnsupportedChain"
      });
    },
    checkIfNamesSupported() {
      const e = b.activeCaipNetwork;
      return !!((e == null ? void 0 : e.chainNamespace) && L.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace));
    },
    resetNetwork(e) {
      c.setAdapterNetworkState(e, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: true
      });
    },
    resetAccount(e) {
      var _a2, _b;
      const t = e;
      if (!t) throw new Error("Chain is required to set account prop");
      const n = (_b = (_a2 = c.state.chains.get(t)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b.preferredAccountType, s = f.state.defaultAccountTypes[t];
      b.activeCaipAddress = void 0, c.setChainAccountData(t, {
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
        preferredAccountType: s || n,
        socialProvider: void 0,
        socialWindow: void 0,
        farcasterUrl: void 0,
        user: void 0,
        status: "disconnected"
      }), g.removeConnectorId(t);
    },
    setIsSwitchingNamespace(e) {
      b.isSwitchingNamespace = e;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      var _a2, _b;
      const e = [];
      let t;
      if (b.chains.forEach((n) => {
        h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((s) => s === n.namespace) && n.namespace && e.push(n.namespace);
      }), e.length > 0) {
        const n = e[0];
        return t = n ? (_b = (_a2 = b.chains.get(n)) == null ? void 0 : _a2.caipNetworks) == null ? void 0 : _b[0] : void 0, t;
      }
    },
    getAccountData(e) {
      var _a2;
      const t = e || b.activeChain;
      if (t) return (_a2 = c.state.chains.get(t)) == null ? void 0 : _a2.accountState;
    },
    getNetworkData(e) {
      var _a2;
      const t = e || b.activeChain;
      if (t) return (_a2 = c.state.chains.get(t)) == null ? void 0 : _a2.networkState;
    },
    getCaipNetworkByNamespace(e, t) {
      var _a2, _b, _c;
      if (!e) return;
      const n = c.state.chains.get(e), s = (_a2 = n == null ? void 0 : n.caipNetworks) == null ? void 0 : _a2.find((r) => r.id.toString() === (t == null ? void 0 : t.toString()));
      return s || ((_b = n == null ? void 0 : n.networkState) == null ? void 0 : _b.caipNetwork) || ((_c = n == null ? void 0 : n.caipNetworks) == null ? void 0 : _c[0]);
    },
    getRequestedCaipNetworkIds() {
      const e = g.state.filterByNamespace;
      return (e ? [
        b.chains.get(e)
      ] : Array.from(b.chains.values())).flatMap((n) => (n == null ? void 0 : n.caipNetworks) || []).map((n) => n.caipNetworkId);
    },
    getCaipNetworks(e) {
      return e ? c.getRequestedCaipNetworks(e) : c.getAllRequestedCaipNetworks();
    },
    getCaipNetworkById(e, t) {
      return fs.getCaipNetworks(t).find((n) => n.id.toString() === e.toString() || n.caipNetworkId.toString() === e.toString());
    },
    setLastConnectedSIWECaipNetwork(e) {
      b.lastConnectedSIWECaipNetwork = e;
    },
    getLastConnectedSIWECaipNetwork() {
      return b.lastConnectedSIWECaipNetwork;
    },
    async fetchTokenBalance(e) {
      var _a2, _b;
      const t = c.getAccountData();
      if (!t) return [];
      const n = (_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId, s = (_b = c.state.activeCaipNetwork) == null ? void 0 : _b.chainNamespace, r = c.state.activeCaipAddress, a = r ? y.getPlainAddress(r) : void 0;
      if (c.setAccountProp("balanceLoading", true, s), t.lastRetry && !y.isAllowedRetry(t.lastRetry, 30 * L.ONE_SEC_MS)) return c.setAccountProp("balanceLoading", false, s), [];
      try {
        if (a && n && s) {
          const o = await En.getMyTokensWithBalance();
          return c.setAccountProp("tokenBalance", o, s), c.setAccountProp("lastRetry", void 0, s), c.setAccountProp("balanceLoading", false, s), o;
        }
      } catch (o) {
        c.setAccountProp("lastRetry", Date.now(), s), e == null ? void 0 : e(o), be.showError("Token Balance Unavailable");
      } finally {
        c.setAccountProp("balanceLoading", false, s);
      }
      return [];
    },
    isCaipNetworkDisabled(e) {
      var _a2;
      const t = e.chainNamespace, n = !!((_a2 = c.getAccountData(t)) == null ? void 0 : _a2.caipAddress), s = c.getAllApprovedCaipNetworkIds(), r = c.getNetworkProp("supportsAllNetworks", t) !== false, a = g.getConnectorId(t), o = g.getAuthConnector(), i = a === h.CONNECTOR_ID.AUTH && o;
      return !n || r || i ? false : !(s == null ? void 0 : s.includes(e.caipNetworkId));
    }
  };
  c = Ce(fs);
  Dr = {
    onSwitchNetwork({ network: e, ignoreSwitchConfirmation: t = false }) {
      var _a2, _b;
      const n = c.state.activeCaipNetwork, s = c.state.activeChain, r = O.state.data;
      if (e.id === (n == null ? void 0 : n.id)) return;
      const o = !!((_a2 = c.getAccountData(s)) == null ? void 0 : _a2.address), i = !!((_b = c.getAccountData(e.chainNamespace)) == null ? void 0 : _b.address), d = e.chainNamespace !== s, u = g.getConnectorId(s) === h.CONNECTOR_ID.AUTH, p = h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((w) => w === e.chainNamespace);
      t || u && p ? O.push("SwitchNetwork", {
        ...r,
        network: e
      }) : o && d && !i ? O.push("SwitchActiveChain", {
        switchToChain: e.chainNamespace,
        navigateTo: "Connect",
        navigateWithReplace: true,
        network: e
      }) : O.push("SwitchNetwork", {
        ...r,
        network: e
      });
    }
  };
  oe = z({
    loading: false,
    loadingNamespaceMap: /* @__PURE__ */ new Map(),
    open: false,
    shake: false,
    namespace: void 0
  });
  xr = {
    state: oe,
    subscribe(e) {
      return ee(oe, () => e(oe));
    },
    subscribeKey(e, t) {
      return te(oe, e, t);
    },
    async open(e) {
      var _a2, _b;
      const t = e == null ? void 0 : e.namespace, n = c.state.activeChain, s = t && t !== n, r = (_a2 = c.getAccountData(e == null ? void 0 : e.namespace)) == null ? void 0 : _a2.caipAddress, a = c.state.noAdapters;
      if (E.state.wcBasic ? I.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false
      }) : await I.prefetch(), g.setFilterByNamespace(e == null ? void 0 : e.namespace), M.setLoading(true, t), t && s) {
        const o = ((_b = c.getNetworkData(t)) == null ? void 0 : _b.caipNetwork) || c.getRequestedCaipNetworks(t)[0];
        o && (a ? (await c.switchActiveNetwork(o), O.push("ConnectingWalletConnectBasic")) : Dr.onSwitchNetwork({
          network: o,
          ignoreSwitchConfirmation: true
        }));
      } else f.state.manualWCControl || a && !r ? y.isMobile() ? O.reset("AllWallets") : O.reset("ConnectingWalletConnectBasic") : (e == null ? void 0 : e.view) ? O.reset(e.view, e.data) : r ? O.reset("Account") : O.reset("Connect");
      oe.open = true, Ae.set({
        open: true
      }), D.sendEvent({
        type: "track",
        event: "MODAL_OPEN",
        properties: {
          connected: !!r
        }
      });
    },
    close() {
      const e = f.state.enableEmbedded, t = !!c.state.activeCaipAddress;
      oe.open && D.sendEvent({
        type: "track",
        event: "MODAL_CLOSE",
        properties: {
          connected: t
        }
      }), oe.open = false, O.reset("Connect"), M.clearLoading(), e ? t ? O.replace("Account") : O.push("Connect") : Ae.set({
        open: false
      }), E.resetUri();
    },
    setLoading(e, t) {
      t && oe.loadingNamespaceMap.set(t, e), oe.loading = e, Ae.set({
        loading: e
      });
    },
    clearLoading() {
      oe.loadingNamespaceMap.clear(), oe.loading = false, Ae.set({
        loading: false
      });
    },
    shake() {
      oe.shake || (oe.shake = true, setTimeout(() => {
        oe.shake = false;
      }, 500));
    }
  };
  M = Ce(xr);
  lt = {
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
  un = {
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
  Lr = {
    providers: ds,
    selectedProvider: null,
    error: null,
    purchaseCurrency: lt,
    paymentCurrency: un,
    purchaseCurrencies: [
      lt
    ],
    paymentCurrencies: [],
    quotesLoading: false
  };
  H = z(Lr);
  Mr = {
    state: H,
    subscribe(e) {
      return ee(H, () => e(H));
    },
    subscribeKey(e, t) {
      return te(H, e, t);
    },
    setSelectedProvider(e) {
      var _a2, _b;
      if (e && e.name === "meld") {
        const t = c.state.activeChain, n = t === h.CHAIN.SOLANA ? "SOL" : "USDC", s = t ? ((_b = (_a2 = c.state.chains.get(t)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b.address) ?? "" : "", r = new URL(e.url);
        r.searchParams.append("publicKey", ir), r.searchParams.append("destinationCurrencyCode", n), r.searchParams.append("walletAddress", s), r.searchParams.append("externalCustomerId", f.state.projectId), H.selectedProvider = {
          ...e,
          url: r.toString()
        };
      } else H.selectedProvider = e;
    },
    setOnrampProviders(e) {
      if (Array.isArray(e) && e.every((t) => typeof t == "string")) {
        const t = e, n = ds.filter((s) => t.includes(s.name));
        H.providers = n;
      } else H.providers = [];
    },
    setPurchaseCurrency(e) {
      H.purchaseCurrency = e;
    },
    setPaymentCurrency(e) {
      H.paymentCurrency = e;
    },
    setPurchaseAmount(e) {
      pn.state.purchaseAmount = e;
    },
    setPaymentAmount(e) {
      pn.state.paymentAmount = e;
    },
    async getAvailableCurrencies() {
      const e = await P.getOnrampOptions();
      H.purchaseCurrencies = e.purchaseCurrencies, H.paymentCurrencies = e.paymentCurrencies, H.paymentCurrency = e.paymentCurrencies[0] || un, H.purchaseCurrency = e.purchaseCurrencies[0] || lt, await I.fetchCurrencyImages(e.paymentCurrencies.map((t) => t.id)), await I.fetchTokenImages(e.purchaseCurrencies.map((t) => t.symbol));
    },
    async getQuote() {
      var _a2, _b;
      H.quotesLoading = true;
      try {
        const e = await P.getOnrampQuote({
          purchaseCurrency: H.purchaseCurrency,
          paymentCurrency: H.paymentCurrency,
          amount: ((_a2 = H.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
          network: (_b = H.purchaseCurrency) == null ? void 0 : _b.symbol
        });
        return H.quotesLoading = false, H.purchaseAmount = Number(e == null ? void 0 : e.purchaseAmount.amount), e;
      } catch (e) {
        return H.error = e.message, H.quotesLoading = false, null;
      } finally {
        H.quotesLoading = false;
      }
    },
    resetState() {
      H.selectedProvider = null, H.error = null, H.purchaseCurrency = lt, H.paymentCurrency = un, H.purchaseCurrencies = [
        lt
      ], H.paymentCurrencies = [], H.paymentAmount = void 0, H.purchaseAmount = void 0, H.quotesLoading = false;
    }
  };
  pn = Ce(Mr);
  Bn = 2147483648;
  Wr = {
    convertEVMChainIdToCoinType(e) {
      if (e >= Bn) throw new Error("Invalid chainId");
      return (Bn | e) >>> 0;
    }
  };
  le = z({
    suggestions: [],
    loading: false
  });
  Br = {
    state: le,
    subscribe(e) {
      return ee(le, () => e(le));
    },
    subscribeKey(e, t) {
      return te(le, e, t);
    },
    async resolveName(e) {
      var _a2, _b;
      try {
        return await P.lookupEnsName(e);
      } catch (t) {
        const n = t;
        throw new Error(((_b = (_a2 = n == null ? void 0 : n.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b.description) || "Error resolving name");
      }
    },
    async isNameRegistered(e) {
      try {
        return await P.lookupEnsName(e), true;
      } catch {
        return false;
      }
    },
    async getSuggestions(e) {
      try {
        le.loading = true, le.suggestions = [];
        const t = await P.getEnsNameSuggestions(e);
        return le.suggestions = t.suggestions || [], le.suggestions;
      } catch (t) {
        const n = ut.parseEnsApiError(t, "Error fetching name suggestions");
        throw new Error(n);
      } finally {
        le.loading = false;
      }
    },
    async getNamesForAddress(e) {
      try {
        if (!c.state.activeCaipNetwork) return [];
        const n = C.getEnsFromCacheForAddress(e);
        if (n) return n;
        const s = await P.reverseLookupEnsName({
          address: e
        });
        return C.updateEnsCache({
          address: e,
          ens: s,
          timestamp: Date.now()
        }), s;
      } catch (t) {
        const n = ut.parseEnsApiError(t, "Error fetching names for address");
        throw new Error(n);
      }
    },
    async registerName(e) {
      var _a2;
      const t = c.state.activeCaipNetwork, n = (_a2 = c.getAccountData(t == null ? void 0 : t.chainNamespace)) == null ? void 0 : _a2.address, s = g.getAuthConnector();
      if (!t) throw new Error("Network not found");
      if (!n || !s) throw new Error("Address or auth connector not found");
      le.loading = true;
      try {
        const r = JSON.stringify({
          name: e,
          attributes: {},
          timestamp: Math.floor(Date.now() / 1e3)
        });
        O.pushTransactionStack({
          onCancel() {
            O.replace("RegisterAccountName");
          }
        });
        const a = await E.signMessage(r);
        le.loading = false;
        const o = t.id;
        if (!o) throw new Error("Network not found");
        const i = Wr.convertEVMChainIdToCoinType(Number(o));
        await P.registerEnsName({
          coinType: i,
          address: n,
          signature: a,
          message: r
        }), c.setAccountProp("profileName", e, t.chainNamespace), C.updateEnsCache({
          address: n,
          ens: [
            {
              name: e,
              registered_at: (/* @__PURE__ */ new Date()).toISOString(),
              updated_at: void 0,
              addresses: {},
              attributes: []
            }
          ],
          timestamp: Date.now()
        }), O.replace("RegisterAccountNameSuccess");
      } catch (r) {
        const a = ut.parseEnsApiError(r, `Error registering name ${e}`);
        throw O.replace("RegisterAccountName"), new Error(a);
      } finally {
        le.loading = false;
      }
    },
    validateName(e) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(e);
    },
    parseEnsApiError(e, t) {
      var _a2, _b;
      return ((_b = (_a2 = e == null ? void 0 : e.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b.description) || t;
    }
  };
  ut = Ce(Br);
  function hn(e) {
    try {
      return new URL(e);
    } catch {
      return null;
    }
  }
  function Fr(e) {
    const t = e.split("/"), n = t.length > 0 && t[0] !== void 0 ? t[0] : "", s = n.lastIndexOf(":");
    return s === -1 ? {
      host: n
    } : {
      host: n.slice(0, s),
      port: n.slice(s + 1)
    };
  }
  function $r(e) {
    const t = e.indexOf("://");
    if (t === -1) return null;
    const n = e.slice(0, t), s = t + 3;
    let r = e.indexOf("/", s);
    r === -1 && (r = e.length);
    const a = e.slice(s, r), o = a.lastIndexOf(":");
    return o === -1 ? {
      scheme: n,
      host: a
    } : {
      scheme: n,
      host: a.slice(0, o),
      port: a.slice(o + 1)
    };
  }
  function Hr(e, t) {
    if (t.includes("://")) {
      const o = hn(t);
      return o ? o.origin === e : false;
    }
    const { host: n, port: s } = Fr(t), r = e.indexOf("://");
    if (r !== -1) {
      const o = r + 3;
      let i = e.indexOf("/", o);
      i === -1 && (i = e.length);
      const d = e.slice(o, i);
      if (s !== void 0) return `${n}:${s}` === d;
      const l = d.split(":")[0];
      return n === l;
    }
    const a = hn(e);
    return a ? s !== void 0 ? n === a.hostname && s === (a.port || void 0) : n === a.hostname : false;
  }
  function jr(e, t, n) {
    let s = n, r;
    const a = s.indexOf("://");
    a !== -1 && (r = s.slice(0, a), s = s.slice(a + 3));
    const o = s.indexOf("/");
    o !== -1 && (s = s.slice(0, o));
    let i = s, d;
    const l = i.lastIndexOf(":");
    l !== -1 && (d = i.slice(l + 1), i = i.slice(0, l));
    const u = i.split(".");
    for (const m of u) if (m.includes("*") && m !== "*") return false;
    const p = e.protocol.replace(/:$/u, "");
    if (r && r !== p || d !== void 0 && d !== "*" && d !== e.port) return false;
    const w = $r(t), A = (w ? w.host : e.hostname).split(".");
    if (u.length !== A.length) return false;
    for (let m = u.length - 1; m >= 0; m -= 1) {
      const N = u[m], R = A[m];
      if (N !== "*" && N !== R) return false;
    }
    return true;
  }
  const Kr = {
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
  }, Le = {
    RPC_ERROR_CODE: {
      USER_REJECTED: 5e3,
      USER_REJECTED_METHODS: 5002
    },
    getMethodsByChainNamespace(e) {
      return Kr[e] || [];
    },
    createDefaultNamespace(e) {
      return {
        methods: this.getMethodsByChainNamespace(e),
        events: [
          "accountsChanged",
          "chainChanged"
        ],
        chains: [],
        rpcMap: {}
      };
    },
    applyNamespaceOverrides(e, t) {
      if (!t) return {
        ...e
      };
      const n = {
        ...e
      }, s = /* @__PURE__ */ new Set();
      if (t.methods && Object.keys(t.methods).forEach((r) => s.add(r)), t.chains && Object.keys(t.chains).forEach((r) => s.add(r)), t.events && Object.keys(t.events).forEach((r) => s.add(r)), t.rpcMap && Object.keys(t.rpcMap).forEach((r) => {
        const [a] = r.split(":");
        a && s.add(a);
      }), s.forEach((r) => {
        n[r] || (n[r] = this.createDefaultNamespace(r));
      }), t.methods && Object.entries(t.methods).forEach(([r, a]) => {
        n[r] && (n[r].methods = a);
      }), t.chains && Object.entries(t.chains).forEach(([r, a]) => {
        n[r] && (n[r].chains = a);
      }), t.events && Object.entries(t.events).forEach(([r, a]) => {
        n[r] && (n[r].events = a);
      }), t.rpcMap) {
        const r = /* @__PURE__ */ new Set();
        Object.entries(t.rpcMap).forEach(([a, o]) => {
          const [i, d] = a.split(":");
          !i || !d || !n[i] || (n[i].rpcMap || (n[i].rpcMap = {}), r.has(i) || (n[i].rpcMap = {}, r.add(i)), n[i].rpcMap[d] = o);
        });
      }
      return n;
    },
    createNamespaces(e, t) {
      const n = e.reduce((s, r) => {
        const { id: a, chainNamespace: o, rpcUrls: i } = r, d = i.default.http[0];
        s[o] || (s[o] = this.createDefaultNamespace(o));
        const l = `${o}:${a}`, u = s[o];
        switch (u.chains.push(l), l) {
          case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
            u.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
            break;
          case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
            u.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
            break;
        }
        return (u == null ? void 0 : u.rpcMap) && d && (u.rpcMap[a] = d), s;
      }, {});
      return this.applyNamespaceOverrides(n, t);
    },
    resolveReownName: async (e) => {
      var _a2;
      const t = await ut.resolveName(e);
      return ((_a2 = ((t == null ? void 0 : t.addresses) ? Object.values(t.addresses) : [])[0]) == null ? void 0 : _a2.address) || false;
    },
    getChainsFromNamespaces(e = {}) {
      return Object.values(e).flatMap((t) => {
        const n = t.chains || [], s = t.accounts.map((r) => {
          const [a, o] = r.split(":");
          return `${a}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...n,
          ...s
        ]));
      });
    },
    isSessionEventData(e) {
      return typeof e == "object" && e !== null && "id" in e && "topic" in e && "params" in e && typeof e.params == "object" && e.params !== null && "chainId" in e.params && "event" in e.params && typeof e.params.event == "object" && e.params.event !== null;
    },
    isUserRejectedRequestError(e) {
      try {
        if (typeof e == "object" && e !== null) {
          const t = e, n = typeof t.code == "number", s = n && t.code === Le.RPC_ERROR_CODE.USER_REJECTED_METHODS, r = n && t.code === Le.RPC_ERROR_CODE.USER_REJECTED;
          return s || r;
        }
        return false;
      } catch {
        return false;
      }
    },
    isOriginAllowed(e, t, n) {
      const s = [
        ...t,
        ...n
      ];
      if (t.length === 0) return true;
      const r = hn(e);
      if (!r) return s.some((a) => !a.includes("*") && a === e);
      if (r.hostname === "localhost" || r.hostname === "127.0.0.1") return true;
      for (const a of s) if (a.includes("*")) {
        if (jr(r, e, a)) return true;
      } else if (Hr(e, a)) return true;
      return false;
    },
    listenWcProvider({ universalProvider: e, namespace: t, onConnect: n, onDisconnect: s, onAccountsChanged: r, onChainChanged: a, onDisplayUri: o }) {
      n && e.on("connect", () => {
        const i = Le.getWalletConnectAccounts(e, t);
        n(i);
      }), s && e.on("disconnect", () => {
        s();
      }), r && e.on("accountsChanged", (i) => {
        var _a2, _b, _c, _d2, _e2;
        try {
          const d = ((_c = (_b = (_a2 = e.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b[t]) == null ? void 0 : _c.accounts) || [], l = (_e2 = (_d2 = e.rpcProviders) == null ? void 0 : _d2[t]) == null ? void 0 : _e2.getDefaultChain(), u = i.map((p) => {
            const w = d.find((m) => m.includes(`${t}:${l}:${p}`));
            if (!w) return;
            const { chainId: S, chainNamespace: A } = Z.parseCaipAddress(w);
            return {
              address: p,
              chainId: S,
              chainNamespace: A
            };
          }).filter((p) => p !== void 0);
          u.length > 0 && r(u);
        } catch (d) {
          console.warn("Failed to parse accounts for namespace on accountsChanged event", t, i, d);
        }
      }), a && e.on("chainChanged", (i) => {
        a(i);
      }), o && e.on("display_uri", (i) => {
        o(i);
      });
    },
    getWalletConnectAccounts(e, t) {
      var _a2, _b, _c, _d2;
      const n = /* @__PURE__ */ new Set(), s = (_d2 = (_c = (_b = (_a2 = e == null ? void 0 : e.session) == null ? void 0 : _a2.namespaces) == null ? void 0 : _b[t]) == null ? void 0 : _c.accounts) == null ? void 0 : _d2.map((r) => Z.parseCaipAddress(r)).filter(({ address: r }) => n.has(r.toLowerCase()) ? false : (n.add(r.toLowerCase()), true));
      return s && s.length > 0 ? s : [];
    }
  }, Vr = [
    h.CONNECTOR_ID.AUTH,
    h.CONNECTOR_ID.WALLET_CONNECT
  ];
  class qr {
    constructor(t) {
      this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (n) => c.getCaipNetworks(n), this.getConnectorId = (n) => g.getConnectorId(n), t && this.construct(t);
    }
    construct(t) {
      this.projectId = t.projectId, this.namespace = t.namespace, this.adapterType = t.adapterType;
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
    onAuthConnected({ accounts: t, chainId: n }) {
      const s = this.getCaipNetworks().filter((r) => r.chainNamespace === this.namespace).find((r) => r.id.toString() === (n == null ? void 0 : n.toString()));
      t && s && this.addConnection({
        connectorId: h.CONNECTOR_ID.AUTH,
        accounts: t,
        caipNetwork: s
      });
    }
    setAuthProvider(t) {
      t.onConnect(this.onAuthConnected.bind(this)), t.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
        id: h.CONNECTOR_ID.AUTH,
        type: "AUTH",
        name: h.CONNECTOR_NAMES.AUTH,
        provider: t,
        imageId: void 0,
        chain: this.namespace,
        chains: []
      });
    }
    addConnector(...t) {
      const n = /* @__PURE__ */ new Set();
      this.availableConnectors = [
        ...t,
        ...this.availableConnectors
      ].filter((s) => n.has(s.id) ? false : (n.add(s.id), true)), this.emit("connectors", this.availableConnectors);
    }
    addConnection(...t) {
      const n = /* @__PURE__ */ new Set();
      this.availableConnections = [
        ...t,
        ...this.availableConnections
      ].filter((s) => n.has(s.connectorId.toLowerCase()) ? false : (n.add(s.connectorId.toLowerCase()), true)), this.emit("connections", this.availableConnections);
    }
    deleteConnection(t) {
      this.availableConnections = this.availableConnections.filter((n) => n.connectorId.toLowerCase() !== t.toLowerCase()), this.emit("connections", this.availableConnections);
    }
    clearConnections(t = false) {
      this.availableConnections = [], t && this.emit("connections", this.availableConnections);
    }
    setStatus(t, n) {
      c.setAccountProp("status", t, n);
    }
    on(t, n) {
      var _a2;
      this.eventListeners.has(t) || this.eventListeners.set(t, /* @__PURE__ */ new Set()), (_a2 = this.eventListeners.get(t)) == null ? void 0 : _a2.add(n);
    }
    off(t, n) {
      const s = this.eventListeners.get(t);
      s && s.delete(n);
    }
    removeAllEventListeners() {
      this.eventListeners.forEach((t) => {
        t.clear();
      });
    }
    emit(t, n) {
      const s = this.eventListeners.get(t);
      s && s.forEach((r) => r(n));
    }
    async connectWalletConnect(t) {
      try {
        return {
          clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
        };
      } catch (n) {
        throw Le.isUserRejectedRequestError(n) ? new is(n) : n;
      }
    }
    async switchNetwork(t) {
      var _a2;
      const { caipNetwork: n } = t, s = q.getProviderId(n.chainNamespace), r = q.getProvider(n.chainNamespace);
      if (!r) throw new Error("Provider not found");
      if (s === "WALLET_CONNECT") {
        r.setDefaultChain(n.caipNetworkId);
        return;
      }
      if (s === "AUTH") {
        const a = (_a2 = g.getAuthConnector()) == null ? void 0 : _a2.provider;
        if (!a) throw new Error("Auth provider not found");
        const o = fe(n.chainNamespace);
        await a.switchNetwork({
          chainId: n.caipNetworkId
        });
        const i = await a.getUser({
          chainId: n.caipNetworkId,
          preferredAccountType: o
        });
        this.emit("switchNetwork", i);
      }
    }
    getWalletConnectConnector() {
      const t = this.connectors.find((n) => n.id === "walletConnect");
      if (!t) throw new Error("WalletConnectConnector not found");
      return t;
    }
    onConnect(t, n) {
      if (t.length > 0) {
        const { address: s, chainId: r } = y.getAccount(t[0]), a = this.getCaipNetworks().filter((i) => i.chainNamespace === this.namespace).find((i) => i.id.toString() === (r == null ? void 0 : r.toString())), o = this.connectors.find((i) => i.id === n);
        s && (this.emit("accountChanged", {
          address: s,
          chainId: r,
          connector: o
        }), this.addConnection({
          connectorId: n,
          accounts: t.map((i) => {
            const { address: d } = y.getAccount(i);
            return {
              address: d
            };
          }),
          caipNetwork: a
        }));
      }
    }
    onAccountsChanged(t, n, s = true) {
      var _a2, _b;
      if (t.length > 0) {
        const { address: r } = y.getAccount(t[0]), a = this.getConnection({
          connectorId: n,
          connections: this.connections,
          connectors: this.connectors
        });
        r && ((_a2 = this.getConnectorId(h.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === n.toLowerCase() && this.emit("accountChanged", {
          address: r,
          chainId: (_b = a == null ? void 0 : a.caipNetwork) == null ? void 0 : _b.id,
          connector: a == null ? void 0 : a.connector
        }), this.addConnection({
          connectorId: n,
          accounts: t.map((o) => {
            const { address: i } = y.getAccount(o);
            return {
              address: i
            };
          }),
          caipNetwork: a == null ? void 0 : a.caipNetwork
        });
      } else s && this.onDisconnect(n);
    }
    onDisconnect(t) {
      var _a2;
      this.removeProviderListeners(t), this.deleteConnection(t), ((_a2 = this.getConnectorId(h.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === t.toLowerCase() && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect");
    }
    onChainChanged(t, n) {
      var _a2;
      const s = typeof t == "string" && t.startsWith("0x") ? parseInt(t, 16).toString() : t.toString(), r = this.getConnection({
        connectorId: n,
        connections: this.connections,
        connectors: this.connectors
      }), a = this.getCaipNetworks().filter((o) => o.chainNamespace === this.namespace).find((o) => o.id.toString() === s);
      r && this.addConnection({
        connectorId: n,
        accounts: r.accounts,
        caipNetwork: a
      }), ((_a2 = this.getConnectorId(h.CHAIN.EVM)) == null ? void 0 : _a2.toLowerCase()) === n.toLowerCase() && this.emit("switchNetwork", {
        chainId: s
      });
    }
    listenProviderEvents(t, n) {
      if (Vr.includes(t)) return;
      const s = (o) => this.onAccountsChanged(o, t), r = (o) => this.onChainChanged(o, t), a = () => this.onDisconnect(t);
      this.providerHandlers[t] || (n.on("disconnect", a), n.on("accountsChanged", s), n.on("chainChanged", r), this.providerHandlers[t] = {
        provider: n,
        disconnect: a,
        accountsChanged: s,
        chainChanged: r
      });
    }
    removeProviderListeners(t) {
      if (this.providerHandlers[t]) {
        const { provider: n, disconnect: s, accountsChanged: r, chainChanged: a } = this.providerHandlers[t];
        n.removeListener("disconnect", s), n.removeListener("accountsChanged", r), n.removeListener("chainChanged", a), this.providerHandlers[t] = null;
      }
    }
    emitFirstAvailableConnection() {
      var _a2;
      const t = this.getConnection({
        connections: this.connections,
        connectors: this.connectors
      });
      if (t) {
        const [n] = t.accounts;
        this.emit("accountChanged", {
          address: n == null ? void 0 : n.address,
          chainId: (_a2 = t.caipNetwork) == null ? void 0 : _a2.id,
          connector: t.connector
        });
      }
    }
    getConnection({ address: t, connectorId: n, connections: s, connectors: r }) {
      if (n) {
        const o = s.find((l) => l.connectorId.toLowerCase() === n.toLowerCase());
        if (!o) return null;
        const i = r.find((l) => l.id.toLowerCase() === o.connectorId.toLowerCase()), d = t ? o.accounts.find((l) => l.address.toLowerCase() === t.toLowerCase()) : o.accounts[0];
        return {
          ...o,
          account: d,
          connector: i
        };
      }
      const a = s.find((o) => o.accounts.length > 0 && r.some((i) => i.id.toLowerCase() === o.connectorId.toLowerCase()));
      if (a) {
        const [o] = a.accounts, i = r.find((d) => d.id.toLowerCase() === a.connectorId.toLowerCase());
        return {
          ...a,
          account: o,
          connector: i
        };
      }
      return null;
    }
  }
  let Be = null;
  we = {
    getSIWX() {
      return f.state.siwx;
    },
    async initializeIfEnabled(e = c.getActiveCaipAddress()) {
      var _a2, _b, _c;
      const t = f.state.siwx;
      if (!(t && e)) return;
      const [n, s, r] = e.split(":");
      if (c.checkIfSupportedNetwork(n, `${n}:${s}`)) try {
        if ((_a2 = f.state.remoteFeatures) == null ? void 0 : _a2.emailCapture) {
          const o = (_b = c.getAccountData(n)) == null ? void 0 : _b.user;
          await M.open({
            view: "DataCapture",
            data: {
              email: (o == null ? void 0 : o.email) ?? void 0
            }
          });
          return;
        }
        if (Be && await Be, (await t.getSessions(`${n}:${s}`, r)).length) return;
        await M.open({
          view: "SIWXSignMessage"
        });
      } catch (a) {
        console.error("SIWXUtil:initializeIfEnabled", a), D.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(a)
        }), await ((_c = E._getClient()) == null ? void 0 : _c.disconnect().catch(console.error)), O.reset("Connect"), be.showError("A problem occurred while trying initialize authentication");
      }
    },
    async isAuthenticated(e = c.getActiveCaipAddress()) {
      if (!f.state.siwx || !e) return true;
      const { chainNamespace: n, chainId: s, address: r } = Z.parseCaipAddress(e), a = `${n}:${s}`;
      return (await we.getSessions({
        address: r,
        caipNetworkId: a
      })).length > 0;
    },
    async requestSignMessage() {
      const e = f.state.siwx, t = y.getPlainAddress(c.getActiveCaipAddress()), n = _t();
      if (!e) throw new Error("SIWX is not enabled");
      if (!t) throw new Error("No ActiveCaipAddress found");
      if (!n) throw new Error("No ActiveCaipNetwork or client found");
      try {
        const s = await e.createMessage({
          chainId: n.caipNetworkId,
          accountAddress: t
        }), r = s.toString();
        let a = "";
        e.signMessage ? a = await e.signMessage({
          message: r,
          chainId: n.caipNetworkId,
          accountAddress: t
        }) : (g.getConnectorId(n.chainNamespace) === h.CONNECTOR_ID.AUTH && O.pushTransactionStack({}), a = await E.signMessage(r) || ""), await e.addSession({
          data: s,
          message: r,
          signature: a
        }), c.setLastConnectedSIWECaipNetwork(n), M.close(), D.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: this.getSIWXEventProperties()
        });
      } catch (s) {
        (!M.state.open || O.state.view === "ApproveTransaction") && await M.open({
          view: "SIWXSignMessage"
        }), be.showError("Error signing message"), D.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(s)
        }), console.error("SWIXUtil:requestSignMessage", s);
      }
    },
    async cancelSignMessage() {
      var _a2;
      try {
        const e = this.getSIWX();
        if ((_a2 = e == null ? void 0 : e.getRequired) == null ? void 0 : _a2.call(e)) {
          const n = c.getLastConnectedSIWECaipNetwork();
          if (n) {
            const s = await (e == null ? void 0 : e.getSessions(n == null ? void 0 : n.caipNetworkId, y.getPlainAddress(c.getActiveCaipAddress()) || ""));
            s && s.length > 0 ? await c.switchActiveNetwork(n) : await E.disconnect();
          } else await E.disconnect();
        } else M.close();
        M.close(), D.sendEvent({
          event: "CLICK_CANCEL_SIWX",
          type: "track",
          properties: this.getSIWXEventProperties()
        });
      } catch (e) {
        console.error("SIWXUtil:cancelSignMessage", e);
      }
    },
    async getAllSessions() {
      const e = this.getSIWX(), t = c.getAllRequestedCaipNetworks(), n = [];
      return await Promise.all(t.map(async (s) => {
        const r = await (e == null ? void 0 : e.getSessions(s.caipNetworkId, y.getPlainAddress(c.getActiveCaipAddress()) || ""));
        r && n.push(...r);
      })), n;
    },
    async getSessions(e) {
      var _a2;
      const t = f.state.siwx;
      let n = e == null ? void 0 : e.address;
      if (!n) {
        const r = c.getActiveCaipAddress();
        n = y.getPlainAddress(r);
      }
      let s = e == null ? void 0 : e.caipNetworkId;
      return s || (s = (_a2 = c.getActiveCaipNetwork()) == null ? void 0 : _a2.caipNetworkId), t && n && s ? t.getSessions(s, n) : [];
    },
    async isSIWXCloseDisabled() {
      var _a2;
      const e = this.getSIWX();
      if (e) {
        const t = O.state.view === "ApproveTransaction", n = O.state.view === "SIWXSignMessage";
        if (t || n) return ((_a2 = e.getRequired) == null ? void 0 : _a2.call(e)) && (await this.getSessions()).length === 0;
      }
      return false;
    },
    async authConnectorAuthenticate({ authConnector: e, chainId: t, socialUri: n, preferredAccountType: s, chainNamespace: r }) {
      var _a2;
      const a = we.getSIWX(), o = _t();
      if (!a || !r.includes(h.CHAIN.EVM) || ((_a2 = f.state.remoteFeatures) == null ? void 0 : _a2.emailCapture)) {
        const p = await e.connect({
          chainId: t,
          socialUri: n,
          preferredAccountType: s
        });
        return {
          address: p.address,
          chainId: p.chainId,
          accounts: p.accounts
        };
      }
      const i = `${r}:${t}`, d = await a.createMessage({
        chainId: i,
        accountAddress: "<<AccountAddress>>"
      }), l = {
        accountAddress: d.accountAddress,
        chainId: d.chainId,
        domain: d.domain,
        uri: d.uri,
        version: d.version,
        nonce: d.nonce,
        notBefore: d.notBefore,
        statement: d.statement,
        resources: d.resources,
        requestId: d.requestId,
        issuedAt: d.issuedAt,
        expirationTime: d.expirationTime,
        serializedMessage: d.toString()
      }, u = await e.connect({
        chainId: t,
        socialUri: n,
        siwxMessage: l,
        preferredAccountType: s
      });
      return l.accountAddress = u.address, l.serializedMessage = u.message || "", u.signature && u.message && await we.addEmbeddedWalletSession(l, u.message, u.signature), c.setLastConnectedSIWECaipNetwork(o), {
        address: u.address,
        chainId: u.chainId,
        accounts: u.accounts
      };
    },
    async addEmbeddedWalletSession(e, t, n) {
      if (Be) return Be;
      const s = we.getSIWX();
      return s ? (Be = s.addSession({
        data: e,
        message: t,
        signature: n
      }).finally(() => {
        Be = null;
      }), Be) : Promise.resolve();
    },
    async universalProviderAuthenticate({ universalProvider: e, chains: t, methods: n }) {
      var _a2, _b, _c;
      const s = we.getSIWX(), r = _t(), a = new Set(t.map((l) => l.split(":")[0]));
      if (!s || a.size !== 1 || !a.has("eip155")) return false;
      const o = await s.createMessage({
        chainId: ((_a2 = _t()) == null ? void 0 : _a2.caipNetworkId) || "",
        accountAddress: ""
      }), i = await e.authenticate({
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
        methods: n,
        chains: [
          o.chainId,
          ...t.filter((l) => l !== o.chainId)
        ]
      });
      be.showLoading("Authenticating...", {
        autoClose: false
      });
      const d = {
        ...i.session.peer.metadata,
        name: i.session.peer.metadata.name,
        icon: (_b = i.session.peer.metadata.icons) == null ? void 0 : _b[0],
        type: "WALLET_CONNECT"
      };
      if (c.setAccountProp("connectedWalletInfo", d, Array.from(a)[0]), (_c = i == null ? void 0 : i.auths) == null ? void 0 : _c.length) {
        const l = i.auths.map((u) => {
          const p = e.client.formatAuthMessage({
            request: u.p,
            iss: u.p.iss
          });
          return {
            data: {
              ...u.p,
              accountAddress: u.p.iss.split(":").slice(-1).join(""),
              chainId: u.p.iss.split(":").slice(2, 4).join(":"),
              uri: u.p.aud ?? "",
              version: u.p.version || o.version,
              expirationTime: u.p.exp,
              issuedAt: u.p.iat,
              notBefore: u.p.nbf
            },
            message: p,
            signature: u.s.s,
            cacao: u
          };
        });
        try {
          await s.setSessions(l), r && c.setLastConnectedSIWECaipNetwork(r), D.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: we.getSIWXEventProperties()
          });
        } catch (u) {
          throw console.error("SIWX:universalProviderAuth - failed to set sessions", u), D.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: we.getSIWXEventProperties(u)
          }), await e.disconnect().catch(console.error), u;
        } finally {
          be.hide();
        }
      }
      return true;
    },
    getSIWXEventProperties(e) {
      var _a2;
      const t = c.state.activeChain;
      if (!t) throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
      return {
        network: ((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId) || "",
        isSmartAccount: fe(t) === Re.ACCOUNT_TYPES.SMART_ACCOUNT,
        message: e ? y.parseError(e) : void 0
      };
    },
    async clearSessions() {
      const e = this.getSIWX();
      e && await e.setSessions([]);
    }
  };
  class zr {
    constructor({ provider: t, namespace: n }) {
      this.id = h.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = c.getCaipNetworks.bind(c), this.caipNetworks = this.getCaipNetworks(), this.provider = t, this.chain = n;
    }
    get chains() {
      return this.getCaipNetworks();
    }
    async connectWalletConnect() {
      if (!await this.authenticate()) {
        const n = this.getCaipNetworks(), s = f.state.universalProviderConfigOverride, r = Le.createNamespaces(n, s);
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
      const t = this.chains.map((n) => n.caipNetworkId);
      return we.universalProviderAuthenticate({
        universalProvider: this.provider,
        chains: t,
        methods: Gr
      });
    }
  }
  let Gr, me, Yr, Jr, Xr;
  Gr = [
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
  me = z({
    message: "",
    variant: "info",
    open: false
  });
  Yr = {
    state: me,
    subscribeKey(e, t) {
      return te(me, e, t);
    },
    open(e, t) {
      const { debug: n } = f.state, { code: s, displayMessage: r, debugMessage: a } = e;
      r && n && (me.message = r, me.variant = t, me.open = true);
    },
    warn(e, t, n) {
      me.open = true, me.message = e, me.variant = "warning", t && console.warn(t, n);
    },
    close() {
      me.open = false, me.message = "", me.variant = "info";
    }
  };
  ce = Ce(Yr);
  Jr = {
    asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
  };
  Xr = {
    asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
  };
  const Dt = globalThis, An = Dt.ShadowRoot && (Dt.ShadyCSS === void 0 || Dt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Nn = Symbol(), Fn = /* @__PURE__ */ new WeakMap();
  let Cs = class {
    constructor(t, n, s) {
      if (this._$cssResult$ = true, s !== Nn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = n;
    }
    get styleSheet() {
      let t = this.o;
      const n = this.t;
      if (An && t === void 0) {
        const s = n !== void 0 && n.length === 1;
        s && (t = Fn.get(n)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && Fn.set(n, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  let ge, Qr, $n;
  ge = (e) => new Cs(typeof e == "string" ? e : e + "", void 0, Nn);
  Ue = (e, ...t) => {
    const n = e.length === 1 ? e[0] : t.reduce((s, r, a) => s + ((o) => {
      if (o._$cssResult$ === true) return o.cssText;
      if (typeof o == "number") return o;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(r) + e[a + 1], e[0]);
    return new Cs(n, e, Nn);
  };
  Qr = (e, t) => {
    if (An) e.adoptedStyleSheets = t.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet);
    else for (const n of t) {
      const s = document.createElement("style"), r = Dt.litNonce;
      r !== void 0 && s.setAttribute("nonce", r), s.textContent = n.cssText, e.appendChild(s);
    }
  };
  $n = An ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
    let n = "";
    for (const s of t.cssRules) n += s.cssText;
    return ge(n);
  })(e) : e;
  let Zr, ea, ta, na, sa, ra, zt, Hn, aa, oa, pt, jn;
  ({ is: Zr, defineProperty: ea, getOwnPropertyDescriptor: ta, getOwnPropertyNames: na, getOwnPropertySymbols: sa, getPrototypeOf: ra } = Object);
  zt = globalThis;
  Hn = zt.trustedTypes;
  aa = Hn ? Hn.emptyScript : "";
  oa = zt.reactiveElementPolyfillSupport;
  pt = (e, t) => e;
  fn = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? aa : null;
          break;
        case Object:
        case Array:
          e = e == null ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let n = e;
      switch (t) {
        case Boolean:
          n = e !== null;
          break;
        case Number:
          n = e === null ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            n = JSON.parse(e);
          } catch {
            n = null;
          }
      }
      return n;
    }
  };
  ms = (e, t) => !Zr(e, t);
  jn = {
    attribute: true,
    type: String,
    converter: fn,
    reflect: false,
    useDefault: false,
    hasChanged: ms
  };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), zt.litPropertyMetadata ?? (zt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  let tt = class extends HTMLElement {
    static addInitializer(t) {
      this._$Ei(), (this.l ?? (this.l = [])).push(t);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [
        ...this._$Eh.keys()
      ];
    }
    static createProperty(t, n = jn) {
      if (n.state && (n.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((n = Object.create(n)).wrapped = true), this.elementProperties.set(t, n), !n.noAccessor) {
        const s = Symbol(), r = this.getPropertyDescriptor(t, s, n);
        r !== void 0 && ea(this.prototype, t, r);
      }
    }
    static getPropertyDescriptor(t, n, s) {
      const { get: r, set: a } = ta(this.prototype, t) ?? {
        get() {
          return this[n];
        },
        set(o) {
          this[n] = o;
        }
      };
      return {
        get: r,
        set(o) {
          const i = r == null ? void 0 : r.call(this);
          a == null ? void 0 : a.call(this, o), this.requestUpdate(t, i, s);
        },
        configurable: true,
        enumerable: true
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) ?? jn;
    }
    static _$Ei() {
      if (this.hasOwnProperty(pt("elementProperties"))) return;
      const t = ra(this);
      t.finalize(), t.l !== void 0 && (this.l = [
        ...t.l
      ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(pt("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(pt("properties"))) {
        const n = this.properties, s = [
          ...na(n),
          ...sa(n)
        ];
        for (const r of s) this.createProperty(r, n[r]);
      }
      const t = this[Symbol.metadata];
      if (t !== null) {
        const n = litPropertyMetadata.get(t);
        if (n !== void 0) for (const [s, r] of n) this.elementProperties.set(s, r);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [n, s] of this.elementProperties) {
        const r = this._$Eu(n, s);
        r !== void 0 && this._$Eh.set(r, n);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(t) {
      const n = [];
      if (Array.isArray(t)) {
        const s = new Set(t.flat(1 / 0).reverse());
        for (const r of s) n.unshift($n(r));
      } else t !== void 0 && n.push($n(t));
      return n;
    }
    static _$Eu(t, n) {
      const s = n.attribute;
      return s === false ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a2;
      this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t) => t(this));
    }
    addController(t) {
      var _a2;
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((_a2 = t.hostConnected) == null ? void 0 : _a2.call(t));
    }
    removeController(t) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.delete(t);
    }
    _$E_() {
      const t = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
      for (const s of n.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
      t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
      const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return Qr(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
      var _a2;
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t) => {
        var _a3;
        return (_a3 = t.hostConnected) == null ? void 0 : _a3.call(t);
      });
    }
    enableUpdating(t) {
    }
    disconnectedCallback() {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t) => {
        var _a3;
        return (_a3 = t.hostDisconnected) == null ? void 0 : _a3.call(t);
      });
    }
    attributeChangedCallback(t, n, s) {
      this._$AK(t, s);
    }
    _$ET(t, n) {
      var _a2;
      const s = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, s);
      if (r !== void 0 && s.reflect === true) {
        const a = (((_a2 = s.converter) == null ? void 0 : _a2.toAttribute) !== void 0 ? s.converter : fn).toAttribute(n, s.type);
        this._$Em = t, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
      }
    }
    _$AK(t, n) {
      var _a2, _b;
      const s = this.constructor, r = s._$Eh.get(t);
      if (r !== void 0 && this._$Em !== r) {
        const a = s.getPropertyOptions(r), o = typeof a.converter == "function" ? {
          fromAttribute: a.converter
        } : ((_a2 = a.converter) == null ? void 0 : _a2.fromAttribute) !== void 0 ? a.converter : fn;
        this._$Em = r;
        const i = o.fromAttribute(n, a.type);
        this[r] = i ?? ((_b = this._$Ej) == null ? void 0 : _b.get(r)) ?? i, this._$Em = null;
      }
    }
    requestUpdate(t, n, s, r = false, a) {
      var _a2;
      if (t !== void 0) {
        const o = this.constructor;
        if (r === false && (a = this[t]), s ?? (s = o.getPropertyOptions(t)), !((s.hasChanged ?? ms)(a, n) || s.useDefault && s.reflect && a === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(t)) && !this.hasAttribute(o._$Eu(t, s)))) return;
        this.C(t, n, s);
      }
      this.isUpdatePending === false && (this._$ES = this._$EP());
    }
    C(t, n, { useDefault: s, reflect: r, wrapped: a }, o) {
      s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? n ?? this[t]), a !== true || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (n = void 0), this._$AL.set(t, n)), r === true && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (n) {
        Promise.reject(n);
      }
      const t = this.scheduleUpdate();
      return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a2;
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [r, a] of this._$Ep) this[r] = a;
          this._$Ep = void 0;
        }
        const s = this.constructor.elementProperties;
        if (s.size > 0) for (const [r, a] of s) {
          const { wrapped: o } = a, i = this[r];
          o !== true || this._$AL.has(r) || i === void 0 || this.C(r, void 0, a, i);
        }
      }
      let t = false;
      const n = this._$AL;
      try {
        t = this.shouldUpdate(n), t ? (this.willUpdate(n), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((s) => {
          var _a3;
          return (_a3 = s.hostUpdate) == null ? void 0 : _a3.call(s);
        }), this.update(n)) : this._$EM();
      } catch (s) {
        throw t = false, this._$EM(), s;
      }
      t && this._$AE(n);
    }
    willUpdate(t) {
    }
    _$AE(t) {
      var _a2;
      (_a2 = this._$EO) == null ? void 0 : _a2.forEach((n) => {
        var _a3;
        return (_a3 = n.hostUpdated) == null ? void 0 : _a3.call(n);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
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
    shouldUpdate(t) {
      return true;
    }
    update(t) {
      this._$Eq && (this._$Eq = this._$Eq.forEach((n) => this._$ET(n, this[n]))), this._$EM();
    }
    updated(t) {
    }
    firstUpdated(t) {
    }
  };
  tt.elementStyles = [], tt.shadowRootOptions = {
    mode: "open"
  }, tt[pt("elementProperties")] = /* @__PURE__ */ new Map(), tt[pt("finalized")] = /* @__PURE__ */ new Map(), oa == null ? void 0 : oa({
    ReactiveElement: tt
  }), (zt.reactiveElementVersions ?? (zt.reactiveElementVersions = [])).push("2.1.2");
  let bn, Kn, Ht, Vn, gs, De, ws, ia, ze, mt, gt, yn, ca, nn, ct, qn, zn, Fe, Gn, Yn, Es, As, Jn, je;
  bn = globalThis;
  Kn = (e) => e;
  Ht = bn.trustedTypes;
  Vn = Ht ? Ht.createPolicy("lit-html", {
    createHTML: (e) => e
  }) : void 0;
  gs = "$lit$";
  De = `lit$${Math.random().toFixed(9).slice(2)}$`;
  ws = "?" + De;
  ia = `<${ws}>`;
  ze = document;
  mt = () => ze.createComment("");
  gt = (e) => e === null || typeof e != "object" && typeof e != "function";
  yn = Array.isArray;
  ca = (e) => yn(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function";
  nn = `[ 	
\f\r]`;
  ct = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  qn = /-->/g;
  zn = />/g;
  Fe = RegExp(`>|${nn}(?:([^\\s"'>=/]+)(${nn}*=${nn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  Gn = /'/g;
  Yn = /"/g;
  Es = /^(?:script|style|textarea|title)$/i;
  As = (e) => (t, ...n) => ({
    _$litType$: e,
    strings: t,
    values: n
  });
  qa = As(1);
  za = As(2);
  rt = Symbol.for("lit-noChange");
  Q = Symbol.for("lit-nothing");
  Jn = /* @__PURE__ */ new WeakMap();
  je = ze.createTreeWalker(ze, 129);
  function Ns(e, t) {
    if (!yn(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Vn !== void 0 ? Vn.createHTML(t) : t;
  }
  const da = (e, t) => {
    const n = e.length - 1, s = [];
    let r, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = ct;
    for (let i = 0; i < n; i++) {
      const d = e[i];
      let l, u, p = -1, w = 0;
      for (; w < d.length && (o.lastIndex = w, u = o.exec(d), u !== null); ) w = o.lastIndex, o === ct ? u[1] === "!--" ? o = qn : u[1] !== void 0 ? o = zn : u[2] !== void 0 ? (Es.test(u[2]) && (r = RegExp("</" + u[2], "g")), o = Fe) : u[3] !== void 0 && (o = Fe) : o === Fe ? u[0] === ">" ? (o = r ?? ct, p = -1) : u[1] === void 0 ? p = -2 : (p = o.lastIndex - u[2].length, l = u[1], o = u[3] === void 0 ? Fe : u[3] === '"' ? Yn : Gn) : o === Yn || o === Gn ? o = Fe : o === qn || o === zn ? o = ct : (o = Fe, r = void 0);
      const S = o === Fe && e[i + 1].startsWith("/>") ? " " : "";
      a += o === ct ? d + ia : p >= 0 ? (s.push(l), d.slice(0, p) + gs + d.slice(p) + De + S) : d + De + (p === -2 ? i : S);
    }
    return [
      Ns(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")),
      s
    ];
  };
  class wt {
    constructor({ strings: t, _$litType$: n }, s) {
      let r;
      this.parts = [];
      let a = 0, o = 0;
      const i = t.length - 1, d = this.parts, [l, u] = da(t, n);
      if (this.el = wt.createElement(l, s), je.currentNode = this.el.content, n === 2 || n === 3) {
        const p = this.el.content.firstChild;
        p.replaceWith(...p.childNodes);
      }
      for (; (r = je.nextNode()) !== null && d.length < i; ) {
        if (r.nodeType === 1) {
          if (r.hasAttributes()) for (const p of r.getAttributeNames()) if (p.endsWith(gs)) {
            const w = u[o++], S = r.getAttribute(p).split(De), A = /([.?@])?(.*)/.exec(w);
            d.push({
              type: 1,
              index: a,
              name: A[2],
              strings: S,
              ctor: A[1] === "." ? ua : A[1] === "?" ? pa : A[1] === "@" ? ha : Gt
            }), r.removeAttribute(p);
          } else p.startsWith(De) && (d.push({
            type: 6,
            index: a
          }), r.removeAttribute(p));
          if (Es.test(r.tagName)) {
            const p = r.textContent.split(De), w = p.length - 1;
            if (w > 0) {
              r.textContent = Ht ? Ht.emptyScript : "";
              for (let S = 0; S < w; S++) r.append(p[S], mt()), je.nextNode(), d.push({
                type: 2,
                index: ++a
              });
              r.append(p[w], mt());
            }
          }
        } else if (r.nodeType === 8) if (r.data === ws) d.push({
          type: 2,
          index: a
        });
        else {
          let p = -1;
          for (; (p = r.data.indexOf(De, p + 1)) !== -1; ) d.push({
            type: 7,
            index: a
          }), p += De.length - 1;
        }
        a++;
      }
    }
    static createElement(t, n) {
      const s = ze.createElement("template");
      return s.innerHTML = t, s;
    }
  }
  function at(e, t, n = e, s) {
    var _a2, _b;
    if (t === rt) return t;
    let r = s !== void 0 ? (_a2 = n._$Co) == null ? void 0 : _a2[s] : n._$Cl;
    const a = gt(t) ? void 0 : t._$litDirective$;
    return (r == null ? void 0 : r.constructor) !== a && ((_b = r == null ? void 0 : r._$AO) == null ? void 0 : _b.call(r, false), a === void 0 ? r = void 0 : (r = new a(e), r._$AT(e, n, s)), s !== void 0 ? (n._$Co ?? (n._$Co = []))[s] = r : n._$Cl = r), r !== void 0 && (t = at(e, r._$AS(e, t.values), r, s)), t;
  }
  class la {
    constructor(t, n) {
      this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = n;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      const { el: { content: n }, parts: s } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? ze).importNode(n, true);
      je.currentNode = r;
      let a = je.nextNode(), o = 0, i = 0, d = s[0];
      for (; d !== void 0; ) {
        if (o === d.index) {
          let l;
          d.type === 2 ? l = new bt(a, a.nextSibling, this, t) : d.type === 1 ? l = new d.ctor(a, d.name, d.strings, this, t) : d.type === 6 && (l = new fa(a, this, t)), this._$AV.push(l), d = s[++i];
        }
        o !== (d == null ? void 0 : d.index) && (a = je.nextNode(), o++);
      }
      return je.currentNode = ze, r;
    }
    p(t) {
      let n = 0;
      for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, n), n += s.strings.length - 2) : s._$AI(t[n])), n++;
    }
  }
  class bt {
    get _$AU() {
      var _a2;
      return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
    }
    constructor(t, n, s, r) {
      this.type = 2, this._$AH = Q, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = s, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? true;
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const n = this._$AM;
      return n !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = n.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, n = this) {
      t = at(this, t, n), gt(t) ? t === Q || t == null || t === "" ? (this._$AH !== Q && this._$AR(), this._$AH = Q) : t !== this._$AH && t !== rt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ca(t) ? this.k(t) : this._(t);
    }
    O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
      this._$AH !== Q && gt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ze.createTextNode(t)), this._$AH = t;
    }
    $(t) {
      var _a2;
      const { values: n, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = wt.createElement(Ns(s.h, s.h[0]), this.options)), s);
      if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === r) this._$AH.p(n);
      else {
        const a = new la(r, this), o = a.u(this.options);
        a.p(n), this.T(o), this._$AH = a;
      }
    }
    _$AC(t) {
      let n = Jn.get(t.strings);
      return n === void 0 && Jn.set(t.strings, n = new wt(t)), n;
    }
    k(t) {
      yn(this._$AH) || (this._$AH = [], this._$AR());
      const n = this._$AH;
      let s, r = 0;
      for (const a of t) r === n.length ? n.push(s = new bt(this.O(mt()), this.O(mt()), this, this.options)) : s = n[r], s._$AI(a), r++;
      r < n.length && (this._$AR(s && s._$AB.nextSibling, r), n.length = r);
    }
    _$AR(t = this._$AA.nextSibling, n) {
      var _a2;
      for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, n); t !== this._$AB; ) {
        const s = Kn(t).nextSibling;
        Kn(t).remove(), t = s;
      }
    }
    setConnected(t) {
      var _a2;
      this._$AM === void 0 && (this._$Cv = t, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t));
    }
  }
  class Gt {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, n, s, r, a) {
      this.type = 1, this._$AH = Q, this._$AN = void 0, this.element = t, this.name = n, this._$AM = r, this.options = a, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = Q;
    }
    _$AI(t, n = this, s, r) {
      const a = this.strings;
      let o = false;
      if (a === void 0) t = at(this, t, n, 0), o = !gt(t) || t !== this._$AH && t !== rt, o && (this._$AH = t);
      else {
        const i = t;
        let d, l;
        for (t = a[0], d = 0; d < a.length - 1; d++) l = at(this, i[s + d], n, d), l === rt && (l = this._$AH[d]), o || (o = !gt(l) || l !== this._$AH[d]), l === Q ? t = Q : t !== Q && (t += (l ?? "") + a[d + 1]), this._$AH[d] = l;
      }
      o && !r && this.j(t);
    }
    j(t) {
      t === Q ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
  }
  class ua extends Gt {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t) {
      this.element[this.name] = t === Q ? void 0 : t;
    }
  }
  class pa extends Gt {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== Q);
    }
  }
  class ha extends Gt {
    constructor(t, n, s, r, a) {
      super(t, n, s, r, a), this.type = 5;
    }
    _$AI(t, n = this) {
      if ((t = at(this, t, n, 0) ?? Q) === rt) return;
      const s = this._$AH, r = t === Q && s !== Q || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, a = t !== Q && (s === Q || r);
      r && this.element.removeEventListener(this.name, this, s), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
      var _a2;
      typeof this._$AH == "function" ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t) : this._$AH.handleEvent(t);
    }
  }
  class fa {
    constructor(t, n, s) {
      this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = s;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      at(this, t);
    }
  }
  const Ca = bn.litHtmlPolyfillSupport;
  Ca == null ? void 0 : Ca(wt, bt), (bn.litHtmlVersions ?? (bn.litHtmlVersions = [])).push("3.3.2");
  const ma = (e, t, n) => {
    const s = (n == null ? void 0 : n.renderBefore) ?? t;
    let r = s._$litPart$;
    if (r === void 0) {
      const a = (n == null ? void 0 : n.renderBefore) ?? null;
      s._$litPart$ = r = new bt(t.insertBefore(mt(), a), a, void 0, n ?? {});
    }
    return r._$AI(e), r;
  };
  const In = globalThis;
  xt = class extends tt {
    constructor() {
      super(...arguments), this.renderOptions = {
        host: this
      }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a2;
      const t = super.createRenderRoot();
      return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t.firstChild), t;
    }
    update(t) {
      const n = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ma(n, this.renderRoot, this.renderOptions);
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
      return rt;
    }
  };
  xt._$litElement$ = true, xt.finalized = true, (_d = In.litElementHydrateSupport) == null ? void 0 : _d.call(In, {
    LitElement: xt
  });
  const ga = In.litElementPolyfillSupport;
  ga == null ? void 0 : ga({
    LitElement: xt
  });
  (In.litElementVersions ?? (In.litElementVersions = [])).push("4.2.2");
  const wa = {
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
  }, jt = {
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
  }, Ea = {
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
  }, Aa = {
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
  }, Na = {
    regular: "KHTeka",
    mono: "KHTekaMono"
  }, ba = {
    regular: "400",
    medium: "500"
  }, ya = {
    h1: "50px",
    h2: "44px",
    h3: "38px",
    h4: "32px",
    h5: "26px",
    h6: "20px",
    large: "16px",
    medium: "14px",
    small: "12px"
  }, Ia = {
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
  }, Sa = {
    "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
    "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
    "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
    "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
    "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
    "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
  }, _a = {
    xl: "400ms",
    lg: "200ms",
    md: "125ms",
    sm: "75ms"
  }, Cn = {
    colors: wa,
    fontFamily: Na,
    fontWeight: ba,
    textSize: ya,
    typography: Ia,
    tokens: {
      core: jt.core,
      theme: jt.dark
    },
    borderRadius: Ea,
    spacing: Aa,
    durations: _a,
    easings: Sa
  }, Xn = "--apkt";
  function kt(e) {
    if (!e) return {};
    const t = {};
    return t["font-family"] = e["--apkt-font-family"] ?? e["--w3m-font-family"] ?? "KHTeka", t.accent = e["--apkt-accent"] ?? e["--w3m-accent"] ?? "#0988F0", t["color-mix"] = e["--apkt-color-mix"] ?? e["--w3m-color-mix"] ?? "#000", t["color-mix-strength"] = e["--apkt-color-mix-strength"] ?? e["--w3m-color-mix-strength"] ?? 0, t["font-size-master"] = e["--apkt-font-size-master"] ?? e["--w3m-font-size-master"] ?? "10px", t["border-radius-master"] = e["--apkt-border-radius-master"] ?? e["--w3m-border-radius-master"] ?? "4px", e["--apkt-z-index"] !== void 0 ? t["z-index"] = e["--apkt-z-index"] : e["--w3m-z-index"] !== void 0 && (t["z-index"] = e["--w3m-z-index"]), t;
  }
  let ve;
  ve = {
    createCSSVariables(e) {
      const t = {}, n = {};
      function s(a, o, i = "") {
        for (const [d, l] of Object.entries(a)) {
          const u = i ? `${i}-${d}` : d;
          l && typeof l == "object" && Object.keys(l).length ? (o[d] = {}, s(l, o[d], u)) : typeof l == "string" && (o[d] = `${Xn}-${u}`);
        }
      }
      function r(a, o) {
        for (const [i, d] of Object.entries(a)) d && typeof d == "object" ? (o[i] = {}, r(d, o[i])) : typeof d == "string" && (o[i] = `var(${d})`);
      }
      return s(e, t), r(t, n), {
        cssVariables: t,
        cssVariablesVarPrefix: n
      };
    },
    assignCSSVariables(e, t) {
      const n = {};
      function s(r, a, o) {
        for (const [i, d] of Object.entries(r)) {
          const l = o ? `${o}-${i}` : i, u = a[i];
          d && typeof d == "object" ? s(d, u, l) : typeof u == "string" && (n[`${Xn}-${l}`] = u);
        }
      }
      return s(e, t), n;
    },
    createRootStyles(e, t) {
      const n = {
        ...Cn,
        tokens: {
          ...Cn.tokens,
          theme: e === "light" ? jt.light : jt.dark
        }
      }, { cssVariables: s } = ve.createCSSVariables(n), r = ve.assignCSSVariables(s, n), a = ve.generateW3MVariables(t), o = ve.generateW3MOverrides(t), i = ve.generateScaledVariables(t), d = ve.generateBaseVariables(r), l = {
        ...r,
        ...d,
        ...a,
        ...o,
        ...i
      }, u = ve.applyColorMixToVariables(t, l), p = {
        ...l,
        ...u
      };
      return `:root {${Object.entries(p).map(([S, A]) => `${S}:${A.replace("/[:;{}</>]/g", "")};`).join("")}}`;
    },
    generateW3MVariables(e) {
      if (!e) return {};
      const t = kt(e), n = {};
      return n["--w3m-font-family"] = t["font-family"], n["--w3m-accent"] = t.accent, n["--w3m-color-mix"] = t["color-mix"], n["--w3m-color-mix-strength"] = `${t["color-mix-strength"]}%`, n["--w3m-font-size-master"] = t["font-size-master"], n["--w3m-border-radius-master"] = t["border-radius-master"], n;
    },
    generateW3MOverrides(e) {
      if (!e) return {};
      const t = kt(e), n = {};
      if (e["--apkt-accent"] || e["--w3m-accent"]) {
        const s = t.accent;
        n["--apkt-tokens-core-iconAccentPrimary"] = s, n["--apkt-tokens-core-borderAccentPrimary"] = s, n["--apkt-tokens-core-textAccentPrimary"] = s, n["--apkt-tokens-core-backgroundAccentPrimary"] = s;
      }
      return (e["--apkt-font-family"] || e["--w3m-font-family"]) && (n["--apkt-fontFamily-regular"] = t["font-family"]), t["z-index"] !== void 0 && (n["--apkt-tokens-core-zIndex"] = `${t["z-index"]}`), n;
    },
    generateScaledVariables(e) {
      if (!e) return {};
      const t = kt(e), n = {};
      if (e["--apkt-font-size-master"] || e["--w3m-font-size-master"]) {
        const s = parseFloat(t["font-size-master"].replace("px", ""));
        n["--apkt-textSize-h1"] = `${Number(s) * 5}px`, n["--apkt-textSize-h2"] = `${Number(s) * 4.4}px`, n["--apkt-textSize-h3"] = `${Number(s) * 3.8}px`, n["--apkt-textSize-h4"] = `${Number(s) * 3.2}px`, n["--apkt-textSize-h5"] = `${Number(s) * 2.6}px`, n["--apkt-textSize-h6"] = `${Number(s) * 2}px`, n["--apkt-textSize-large"] = `${Number(s) * 1.6}px`, n["--apkt-textSize-medium"] = `${Number(s) * 1.4}px`, n["--apkt-textSize-small"] = `${Number(s) * 1.2}px`;
      }
      if (e["--apkt-border-radius-master"] || e["--w3m-border-radius-master"]) {
        const s = parseFloat(t["border-radius-master"].replace("px", ""));
        n["--apkt-borderRadius-1"] = `${Number(s)}px`, n["--apkt-borderRadius-2"] = `${Number(s) * 2}px`, n["--apkt-borderRadius-3"] = `${Number(s) * 3}px`, n["--apkt-borderRadius-4"] = `${Number(s) * 4}px`, n["--apkt-borderRadius-5"] = `${Number(s) * 5}px`, n["--apkt-borderRadius-6"] = `${Number(s) * 6}px`, n["--apkt-borderRadius-8"] = `${Number(s) * 8}px`, n["--apkt-borderRadius-16"] = `${Number(s) * 16}px`, n["--apkt-borderRadius-20"] = `${Number(s) * 20}px`, n["--apkt-borderRadius-32"] = `${Number(s) * 32}px`, n["--apkt-borderRadius-64"] = `${Number(s) * 64}px`, n["--apkt-borderRadius-128"] = `${Number(s) * 128}px`;
      }
      return n;
    },
    generateColorMixCSS(e, t) {
      if (!(e == null ? void 0 : e["--w3m-color-mix"]) || !e["--w3m-color-mix-strength"]) return "";
      const n = e["--w3m-color-mix"], s = e["--w3m-color-mix-strength"];
      if (!s || s === 0) return "";
      const r = Object.keys(t || {}).filter((o) => {
        const i = o.includes("-tokens-core-background") || o.includes("-tokens-core-text") || o.includes("-tokens-core-border") || o.includes("-tokens-core-foreground") || o.includes("-tokens-core-icon") || o.includes("-tokens-theme-background") || o.includes("-tokens-theme-text") || o.includes("-tokens-theme-border") || o.includes("-tokens-theme-foreground") || o.includes("-tokens-theme-icon"), d = o.includes("-borderRadius-") || o.includes("-spacing-") || o.includes("-textSize-") || o.includes("-fontFamily-") || o.includes("-fontWeight-") || o.includes("-typography-") || o.includes("-duration-") || o.includes("-ease-") || o.includes("-path-") || o.includes("-width-") || o.includes("-height-") || o.includes("-visual-size-") || o.includes("-modal-width") || o.includes("-cover");
        return i && !d;
      });
      return r.length === 0 ? "" : ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${r.map((o) => {
        const i = (t == null ? void 0 : t[o]) || "";
        return i.includes("color-mix") || i.startsWith("#") || i.startsWith("rgb") ? `${o}: color-mix(in srgb, ${n} ${s}%, ${i});` : `${o}: color-mix(in srgb, ${n} ${s}%, var(${o}-base, ${i}));`;
      }).join("")}
      }
    }`;
    },
    generateBaseVariables(e) {
      const t = {}, n = e["--apkt-tokens-theme-backgroundPrimary"];
      n && (t["--apkt-tokens-theme-backgroundPrimary-base"] = n);
      const s = e["--apkt-tokens-core-backgroundAccentPrimary"];
      return s && (t["--apkt-tokens-core-backgroundAccentPrimary-base"] = s), t;
    },
    applyColorMixToVariables(e, t) {
      const n = {};
      (t == null ? void 0 : t["--apkt-tokens-theme-backgroundPrimary"]) && (n["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)"), (t == null ? void 0 : t["--apkt-tokens-core-backgroundAccentPrimary"]) && (n["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)");
      const s = kt(e), r = s["color-mix"], a = s["color-mix-strength"];
      if (!a || a === 0) return n;
      const o = Object.keys(t || {}).filter((i) => {
        const d = i.includes("-tokens-core-background") || i.includes("-tokens-core-text") || i.includes("-tokens-core-border") || i.includes("-tokens-core-foreground") || i.includes("-tokens-core-icon") || i.includes("-tokens-theme-background") || i.includes("-tokens-theme-text") || i.includes("-tokens-theme-border") || i.includes("-tokens-theme-foreground") || i.includes("-tokens-theme-icon") || i.includes("-tokens-theme-overlay"), l = i.includes("-borderRadius-") || i.includes("-spacing-") || i.includes("-textSize-") || i.includes("-fontFamily-") || i.includes("-fontWeight-") || i.includes("-typography-") || i.includes("-duration-") || i.includes("-ease-") || i.includes("-path-") || i.includes("-width-") || i.includes("-height-") || i.includes("-visual-size-") || i.includes("-modal-width") || i.includes("-cover");
        return d && !l;
      });
      return o.length === 0 || o.forEach((i) => {
        const d = (t == null ? void 0 : t[i]) || "";
        i.endsWith("-base") || (i === "--apkt-tokens-theme-backgroundPrimary" || i === "--apkt-tokens-core-backgroundAccentPrimary" ? n[i] = `color-mix(in srgb, ${r} ${a}%, var(${i}-base))` : d.includes("color-mix") || d.startsWith("#") || d.startsWith("rgb") ? n[i] = `color-mix(in srgb, ${r} ${a}%, ${d})` : n[i] = `color-mix(in srgb, ${r} ${a}%, var(${i}-base, ${d}))`);
      }), n;
    }
  };
  ({ cssVariablesVarPrefix: Ta } = ve.createCSSVariables(Cn));
  Ga = function(e, ...t) {
    return Ue(e, ...t.map((n) => ge(typeof n == "function" ? n(Ta) : n)));
  };
  let He, Ke, ye, Ee, Kt;
  const Te = {
    "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
    "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
    "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
    "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
    "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
    "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
    "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
  };
  function Vt(e, t = "dark") {
    He && document.head.removeChild(He), He = document.createElement("style"), He.textContent = ve.createRootStyles(t, e), document.head.appendChild(He);
  }
  Ya = function(e, t = "dark") {
    if (Kt = e, Ke = document.createElement("style"), ye = document.createElement("style"), Ee = document.createElement("style"), Ke.textContent = st(e).core.cssText, ye.textContent = st(e).dark.cssText, Ee.textContent = st(e).light.cssText, document.head.appendChild(Ke), document.head.appendChild(ye), document.head.appendChild(Ee), Vt(e, t), mn(t), !((e == null ? void 0 : e["--apkt-font-family"]) || (e == null ? void 0 : e["--w3m-font-family"]))) for (const [s, r] of Object.entries(Te)) {
      const a = document.createElement("link");
      a.rel = "preload", a.href = r, a.as = "font", a.type = s.includes("woff2") ? "font/woff2" : "font/woff", a.crossOrigin = "anonymous", document.head.appendChild(a);
    }
    mn(t);
  };
  function mn(e = "dark") {
    ye && Ee && He && (e === "light" ? (Vt(Kt, e), ye.removeAttribute("media"), Ee.media = "enabled") : (Vt(Kt, e), Ee.removeAttribute("media"), ye.media = "enabled"));
  }
  function ka(e) {
    var _a2, _b, _c;
    if (Kt = e, Ke && ye && Ee) {
      Ke.textContent = st(e).core.cssText, ye.textContent = st(e).dark.cssText, Ee.textContent = st(e).light.cssText;
      const t = (e == null ? void 0 : e["--apkt-font-family"]) || (e == null ? void 0 : e["--w3m-font-family"]);
      t && (Ke.textContent = (_a2 = Ke.textContent) == null ? void 0 : _a2.replace("font-family: KHTeka", `font-family: ${t}`), ye.textContent = (_b = ye.textContent) == null ? void 0 : _b.replace("font-family: KHTeka", `font-family: ${t}`), Ee.textContent = (_c = Ee.textContent) == null ? void 0 : _c.replace("font-family: KHTeka", `font-family: ${t}`));
    }
    if (He) {
      const t = (Ee == null ? void 0 : Ee.media) === "enabled" ? "light" : "dark";
      Vt(e, t);
    }
  }
  function st(e) {
    const t = !!((e == null ? void 0 : e["--apkt-font-family"]) || (e == null ? void 0 : e["--w3m-font-family"]));
    return {
      core: Ue`
      ${t ? Ue`` : Ue`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ge(Te["KHTeka-400-woff2"])}) format('woff2'),
                url(${ge(Te["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ge(Te["KHTeka-300-woff2"])}) format('woff2'),
                url(${ge(Te["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${ge(Te["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${ge(Te["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ge(Te["KHTeka-400-woff2"])}) format('woff2'),
                url(${ge(Te["KHTeka-400-woff"])}) format('woff');
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
      dark: Ue`
      :root {
      }
    `,
      light: Ue`
      :root {
      }
    `
    };
  }
  let ke, va, Oa, ue, bs, Ra, Pa;
  Ja = Ue`
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
  Xa = Ue`
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
  ke = {
    EIP155: h.CHAIN.EVM,
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH"
  };
  va = {
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
  gn = {
    getCaipTokens(e) {
      if (!e) return;
      const t = {};
      return Object.entries(e).forEach(([n, s]) => {
        t[`${ke.EIP155}:${n}`] = s;
      }), t;
    },
    isLowerCaseMatch(e, t) {
      return (e == null ? void 0 : e.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
    },
    getActiveNamespaceConnectedToAuth() {
      const e = c.state.activeChain;
      return h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((t) => g.getConnectorId(t) === h.CONNECTOR_ID.AUTH && t === e);
    },
    withRetry({ conditionFn: e, intervalMs: t, maxRetries: n }) {
      let s = 0;
      return new Promise((r) => {
        async function a() {
          return s += 1, await e() ? r(true) : s >= n ? r(false) : (setTimeout(a, t), null);
        }
        a();
      });
    },
    userChainIdToChainNamespace(e) {
      if (typeof e == "number") return h.CHAIN.EVM;
      const [t] = e.split(":");
      return t;
    },
    getOtherAuthNamespaces(e) {
      return e ? h.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((s) => s !== e) : [];
    },
    getConnectorStorageInfo(e, t) {
      const s = C.getConnections()[t] ?? [];
      return {
        hasDisconnected: C.isConnectorDisconnected(e, t),
        hasConnected: s.some((r) => gn.isLowerCaseMatch(r.connectorId, e))
      };
    }
  };
  Oa = new AbortController();
  ue = {
    EmbeddedWalletAbortController: Oa,
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
        debugMessage: () => `The origin ${dt() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${f.state.projectId}]`
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
        debugMessage: (e) => `Unable to fetch App Configuration. ${e}. Please check your network connection and try again shortly. Contact support if the issue persists.`
      },
      RATE_LIMITED_APP_CONFIGURATION: {
        code: "APKT010",
        displayMessage: "Rate Limited",
        debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
      }
    },
    ALERT_WARNINGS: {
      LOCAL_CONFIGURATION_IGNORED: {
        debugMessage: (e) => `[Reown Config Notice] ${e}`
      },
      INACTIVE_NAMESPACE_NOT_CONNECTED: {
        code: "APKTW001",
        displayMessage: "Inactive Namespace Not Connected",
        debugMessage: (e, t) => `An error occurred while connecting an inactive namespace ${e}: "${t}"`
      },
      INVALID_EMAIL: {
        code: "APKTW002",
        displayMessage: "Invalid Email Address",
        debugMessage: "Please enter a valid email address"
      }
    }
  };
  bs = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
      USDC: {
        8453: Jr.asset,
        84532: Xr.asset
      }
    },
    getTokenSymbolByAddress(e) {
      if (!e) return;
      const [t] = Object.entries(bs.TOKEN_ADDRESSES_BY_SYMBOL).find(([n, s]) => Object.values(s).includes(e)) ?? [];
      return t;
    }
  };
  Ra = {
    createLogger(e, t = "error") {
      const n = Os({
        level: t
      }), { logger: s } = Rs({
        opts: n
      });
      return s.error = (...r) => {
        for (const a of r) if (a instanceof Error) {
          e(a, ...r);
          return;
        }
        e(void 0, ...r);
      }, s;
    }
  };
  Pa = "rpc.walletconnect.org";
  function Qn(e, t) {
    const n = new URL("https://rpc.walletconnect.org/v1/");
    return n.searchParams.set("chainId", e), n.searchParams.set("projectId", t), n.toString();
  }
  let sn;
  sn = [
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
  nt = {
    extendRpcUrlWithProjectId(e, t) {
      let n = false;
      try {
        n = new URL(e).host === Pa;
      } catch {
        n = false;
      }
      if (n) {
        const s = new URL(e);
        return s.searchParams.has("projectId") || s.searchParams.set("projectId", t), s.toString();
      }
      return e;
    },
    isCaipNetwork(e) {
      return "chainNamespace" in e && "caipNetworkId" in e;
    },
    getChainNamespace(e) {
      return this.isCaipNetwork(e) ? e.chainNamespace : h.CHAIN.EVM;
    },
    getCaipNetworkId(e) {
      return this.isCaipNetwork(e) ? e.caipNetworkId : `${h.CHAIN.EVM}:${e.id}`;
    },
    getDefaultRpcUrl(e, t, n) {
      var _a2, _b, _c;
      const s = (_c = (_b = (_a2 = e.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0];
      return sn.includes(t) ? Qn(t, n) : s || "";
    },
    extendCaipNetwork(e, { customNetworkImageUrls: t, projectId: n, customRpcUrls: s }) {
      var _a2, _b, _c, _d2, _e2, _f, _g;
      const r = this.getChainNamespace(e), a = this.getCaipNetworkId(e), o = (_c = (_b = (_a2 = e.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0], i = this.getDefaultRpcUrl(e, a, n), d = ((_f = (_e2 = (_d2 = e == null ? void 0 : e.rpcUrls) == null ? void 0 : _d2.chainDefault) == null ? void 0 : _e2.http) == null ? void 0 : _f[0]) || o, l = ((_g = s == null ? void 0 : s[a]) == null ? void 0 : _g.map((w) => w.url)) || [], u = [
        ...l,
        ...i ? [
          i
        ] : []
      ], p = [
        ...l
      ];
      return d && !p.includes(d) && p.push(d), {
        ...e,
        chainNamespace: r,
        caipNetworkId: a,
        assets: {
          imageId: va.NetworkImageIds[e.id],
          imageUrl: t == null ? void 0 : t[e.id]
        },
        rpcUrls: {
          ...e.rpcUrls,
          default: {
            http: u
          },
          chainDefault: {
            http: p
          }
        }
      };
    },
    extendCaipNetworks(e, { customNetworkImageUrls: t, projectId: n, customRpcUrls: s }) {
      return e.map((r) => nt.extendCaipNetwork(r, {
        customNetworkImageUrls: t,
        customRpcUrls: s,
        projectId: n
      }));
    },
    getViemTransport(e, t, n) {
      var _a2, _b, _c;
      const s = [];
      return n == null ? void 0 : n.forEach((r) => {
        s.push(It(r.url, r.config));
      }), sn.includes(e.caipNetworkId) && s.push(It(Qn(e.caipNetworkId, t), {
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      })), (_c = (_b = (_a2 = e == null ? void 0 : e.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b.http) == null ? void 0 : _c.forEach((r) => {
        s.push(It(r));
      }), Tn(s);
    },
    extendWagmiTransports(e, t, n) {
      if (sn.includes(e.caipNetworkId)) {
        const s = this.getDefaultRpcUrl(e, e.caipNetworkId, t);
        return Tn([
          n,
          It(s)
        ]);
      }
      return n;
    },
    getUnsupportedNetwork(e) {
      return {
        id: e.split(":")[1],
        caipNetworkId: e,
        name: h.UNSUPPORTED_NETWORK_NAME,
        chainNamespace: e.split(":")[0],
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
    getCaipNetworkFromStorage(e) {
      var _a2;
      const t = C.getActiveCaipNetworkId(), n = c.getAllRequestedCaipNetworks(), s = Array.from(((_a2 = c.state.chains) == null ? void 0 : _a2.keys()) || []), r = t == null ? void 0 : t.split(":")[0], a = r ? s.includes(r) : false, o = n == null ? void 0 : n.find((d) => d.caipNetworkId === t);
      return a && !o && t ? this.getUnsupportedNetwork(t) : o || e || (n == null ? void 0 : n[0]);
    }
  };
  function Ua(e) {
    if (e.length >= 255) throw new TypeError("Alphabet too long");
    const t = new Uint8Array(256);
    for (let l = 0; l < t.length; l++) t[l] = 255;
    for (let l = 0; l < e.length; l++) {
      const u = e.charAt(l), p = u.charCodeAt(0);
      if (t[p] !== 255) throw new TypeError(u + " is ambiguous");
      t[p] = l;
    }
    const n = e.length, s = e.charAt(0), r = Math.log(n) / Math.log(256), a = Math.log(256) / Math.log(n);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let u = 0, p = 0, w = 0;
      const S = l.length;
      for (; w !== S && l[w] === 0; ) w++, u++;
      const A = (S - w) * a + 1 >>> 0, m = new Uint8Array(A);
      for (; w !== S; ) {
        let T = l[w], W = 0;
        for (let V = A - 1; (T !== 0 || W < p) && V !== -1; V--, W++) T += 256 * m[V] >>> 0, m[V] = T % n >>> 0, T = T / n >>> 0;
        if (T !== 0) throw new Error("Non-zero carry");
        p = W, w++;
      }
      let N = A - p;
      for (; N !== A && m[N] === 0; ) N++;
      let R = s.repeat(u);
      for (; N < A; ++N) R += e.charAt(m[N]);
      return R;
    }
    function i(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let u = 0, p = 0, w = 0;
      for (; l[u] === s; ) p++, u++;
      const S = (l.length - u) * r + 1 >>> 0, A = new Uint8Array(S);
      for (; u < l.length; ) {
        const T = l.charCodeAt(u);
        if (T > 255) return;
        let W = t[T];
        if (W === 255) return;
        let V = 0;
        for (let X = S - 1; (W !== 0 || V < w) && X !== -1; X--, V++) W += n * A[X] >>> 0, A[X] = W % 256 >>> 0, W = W / 256 >>> 0;
        if (W !== 0) throw new Error("Non-zero carry");
        w = V, u++;
      }
      let m = S - w;
      for (; m !== S && A[m] === 0; ) m++;
      const N = new Uint8Array(p + (S - m));
      let R = p;
      for (; m !== S; ) N[R++] = A[m++];
      return N;
    }
    function d(l) {
      const u = i(l);
      if (u) return u;
      throw new Error("Non-base" + n + " character");
    }
    return {
      encode: o,
      decodeUnsafe: i,
      decode: d
    };
  }
  var Da = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const xa = Ua(Da), vt = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603
  };
  class La extends qr {
    async setUniversalProvider(t) {
      if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
      return this.addConnector(new zr({
        provider: t,
        caipNetworks: this.getCaipNetworks(),
        namespace: this.namespace
      })), Promise.resolve();
    }
    async connect(t) {
      return Promise.resolve({
        id: "WALLET_CONNECT",
        type: "WALLET_CONNECT",
        chainId: Number(t.chainId),
        provider: this.provider,
        address: ""
      });
    }
    async disconnect() {
      try {
        await this.getWalletConnectConnector().disconnect(), this.emit("disconnect");
      } catch (t) {
        console.warn("UniversalAdapter:disconnect - error", t);
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
    async getAccounts({ namespace: t }) {
      var _a2, _b, _c, _d2, _e2;
      const s = ((_e2 = (_d2 = (_c = (_b = (_a2 = this.provider) == null ? void 0 : _a2.session) == null ? void 0 : _b.namespaces) == null ? void 0 : _c[t]) == null ? void 0 : _d2.accounts) == null ? void 0 : _e2.map((r) => {
        const [, , a] = r.split(":");
        return a;
      }).filter((r, a, o) => o.indexOf(r) === a)) || [];
      return Promise.resolve({
        accounts: s.map((r) => y.createAccount(t, r, t === "bip122" ? "payment" : "eoa"))
      });
    }
    async syncConnectors() {
      return Promise.resolve();
    }
    async getBalance(t) {
      var _a2, _b, _c, _d2, _e2;
      if (!(t.caipNetwork && L.BALANCE_SUPPORTED_CHAINS.includes((_a2 = t.caipNetwork) == null ? void 0 : _a2.chainNamespace)) || ((_b = t.caipNetwork) == null ? void 0 : _b.testnet)) return {
        balance: "0.00",
        symbol: ((_c = t.caipNetwork) == null ? void 0 : _c.nativeCurrency.symbol) || ""
      };
      const s = c.getAccountData();
      if ((s == null ? void 0 : s.balanceLoading) && t.chainId === ((_d2 = c.state.activeCaipNetwork) == null ? void 0 : _d2.id)) return {
        balance: (s == null ? void 0 : s.balance) || "0.00",
        symbol: (s == null ? void 0 : s.balanceSymbol) || ""
      };
      const a = (await c.fetchTokenBalance()).find((o) => {
        var _a3, _b2;
        return o.chainId === `${(_a3 = t.caipNetwork) == null ? void 0 : _a3.chainNamespace}:${t.chainId}` && o.symbol === ((_b2 = t.caipNetwork) == null ? void 0 : _b2.nativeCurrency.symbol);
      });
      return {
        balance: (a == null ? void 0 : a.quantity.numeric) || "0.00",
        symbol: (a == null ? void 0 : a.symbol) || ((_e2 = t.caipNetwork) == null ? void 0 : _e2.nativeCurrency.symbol) || ""
      };
    }
    async signMessage(t) {
      var _a2, _b, _c;
      const { provider: n, message: s, address: r } = t;
      if (!n) throw new Error("UniversalAdapter:signMessage - provider is undefined");
      let a = "";
      return ((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.chainNamespace) === h.CHAIN.SOLANA ? a = (await n.request({
        method: "solana_signMessage",
        params: {
          message: xa.encode(new TextEncoder().encode(s)),
          pubkey: r
        }
      }, (_b = c.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId)).signature : a = await n.request({
        method: "personal_sign",
        params: [
          s,
          r
        ]
      }, (_c = c.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId), {
        signature: a
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
    walletGetAssets(t) {
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
    async switchNetwork(t) {
      var _a2, _b, _c, _d2, _e2, _f;
      const { caipNetwork: n } = t, s = this.getWalletConnectConnector();
      if (n.chainNamespace === h.CHAIN.EVM) try {
        await ((_a2 = s.provider) == null ? void 0 : _a2.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: _n(n.id)
            }
          ]
        }));
      } catch (r) {
        if (r.code === vt.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === vt.ERROR_INVALID_CHAIN_ID || r.code === vt.ERROR_CODE_DEFAULT || ((_c = (_b = r == null ? void 0 : r.data) == null ? void 0 : _b.originalError) == null ? void 0 : _c.code) === vt.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
          await ((_f = s.provider) == null ? void 0 : _f.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: _n(n.id),
                rpcUrls: [
                  (_d2 = n == null ? void 0 : n.rpcUrls.chainDefault) == null ? void 0 : _d2.http
                ],
                chainName: n.name,
                nativeCurrency: n.nativeCurrency,
                blockExplorerUrls: [
                  (_e2 = n.blockExplorers) == null ? void 0 : _e2.default.url
                ]
              }
            ]
          }));
        } catch {
          throw new Error("Chain is not supported");
        }
      }
      s.provider.setDefaultChain(n.caipNetworkId);
    }
    getWalletConnectProvider() {
      var _a2;
      return (_a2 = this.connectors.find((s) => s.type === "WALLET_CONNECT")) == null ? void 0 : _a2.provider;
    }
  }
  const Ma = [
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
  ], Ot = {
    email: {
      apiFeatureName: "social_login",
      localFeatureName: "email",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => {
        if (!(e == null ? void 0 : e.config)) return false;
        const t = e.config;
        return !!e.isEnabled && t.includes("email");
      },
      processFallback: (e) => e === void 0 ? L.DEFAULT_REMOTE_FEATURES.email : !!e
    },
    socials: {
      apiFeatureName: "social_login",
      localFeatureName: "socials",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => {
        if (!(e == null ? void 0 : e.config)) return false;
        const t = e.config;
        return e.isEnabled && t.length > 0 ? t.filter((n) => n !== "email") : false;
      },
      processFallback: (e) => e === void 0 ? L.DEFAULT_REMOTE_FEATURES.socials : typeof e == "boolean" ? e ? L.DEFAULT_REMOTE_FEATURES.socials : false : e
    },
    swaps: {
      apiFeatureName: "swap",
      localFeatureName: "swaps",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => {
        if (!(e == null ? void 0 : e.config)) return false;
        const t = e.config;
        return e.isEnabled && t.length > 0 ? t : false;
      },
      processFallback: (e) => e === void 0 ? L.DEFAULT_REMOTE_FEATURES.swaps : typeof e == "boolean" ? e ? L.DEFAULT_REMOTE_FEATURES.swaps : false : e
    },
    onramp: {
      apiFeatureName: "onramp",
      localFeatureName: "onramp",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => {
        if (!(e == null ? void 0 : e.config)) return false;
        const t = e.config;
        return e.isEnabled && t.length > 0 ? t : false;
      },
      processFallback: (e) => e === void 0 ? L.DEFAULT_REMOTE_FEATURES.onramp : typeof e == "boolean" ? e ? L.DEFAULT_REMOTE_FEATURES.onramp : false : e
    },
    activity: {
      apiFeatureName: "activity",
      localFeatureName: "history",
      returnType: false,
      isLegacy: true,
      isAvailableOnBasic: false,
      processApi: (e) => !!e.isEnabled,
      processFallback: (e) => e === void 0 ? L.DEFAULT_REMOTE_FEATURES.activity : !!e
    },
    reownBranding: {
      apiFeatureName: "reown_branding",
      localFeatureName: "reownBranding",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => !!e.isEnabled,
      processFallback: (e) => e === void 0 ? L.DEFAULT_REMOTE_FEATURES.reownBranding : !!e
    },
    emailCapture: {
      apiFeatureName: "email_capture",
      localFeatureName: "emailCapture",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => e.isEnabled && (e.config ?? []),
      processFallback: (e) => false
    },
    multiWallet: {
      apiFeatureName: "multi_wallet",
      localFeatureName: "multiWallet",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => !!e.isEnabled,
      processFallback: () => L.DEFAULT_REMOTE_FEATURES.multiWallet
    },
    payWithExchange: {
      apiFeatureName: "fund_from_exchange",
      localFeatureName: "payWithExchange",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => !!e.isEnabled,
      processFallback: () => L.DEFAULT_REMOTE_FEATURES.payWithExchange
    },
    payments: {
      apiFeatureName: "payments",
      localFeatureName: "payments",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => !!e.isEnabled,
      processFallback: () => L.DEFAULT_REMOTE_FEATURES.payments
    },
    reownAuthentication: {
      apiFeatureName: "reown_authentication",
      localFeatureName: "reownAuthentication",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => !!e.isEnabled,
      processFallback: (e) => typeof e > "u" ? L.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!e
    },
    headless: {
      apiFeatureName: "headless",
      localFeatureName: "headless",
      returnType: false,
      isLegacy: false,
      isAvailableOnBasic: false,
      processApi: (e) => !!e.isEnabled,
      processFallback: () => L.DEFAULT_REMOTE_FEATURES.headless
    }
  }, Wa = {
    localSettingsOverridden: /* @__PURE__ */ new Set(),
    getApiConfig(e, t) {
      return t == null ? void 0 : t.find((n) => n.id === e);
    },
    addWarning(e, t) {
      if (e !== void 0) {
        const n = Ot[t], s = n.isLegacy ? `"features.${n.localFeatureName}" (now "${t}")` : `"features.${t}"`;
        this.localSettingsOverridden.add(s);
      }
    },
    processFeature(e, t, n, s, r) {
      const a = Ot[e], o = t[a.localFeatureName];
      if (r && !a.isAvailableOnBasic) return false;
      if (s) {
        const i = this.getApiConfig(a.apiFeatureName, n);
        return (i == null ? void 0 : i.config) === null ? this.processFallbackFeature(e, o) : (i == null ? void 0 : i.config) ? (o !== void 0 && this.addWarning(o, e), this.processApiFeature(e, i)) : false;
      }
      return this.processFallbackFeature(e, o);
    },
    processApiFeature(e, t) {
      return Ot[e].processApi(t);
    },
    processFallbackFeature(e, t) {
      return Ot[e].processFallback(t);
    },
    async fetchRemoteFeatures(e) {
      const t = e.basic ?? false, n = e.features || {};
      this.localSettingsOverridden.clear();
      let s = null, r = false;
      try {
        s = await I.fetchProjectConfig(), r = s != null;
      } catch (o) {
        console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
      }
      const a = r && !t ? L.DEFAULT_REMOTE_FEATURES : L.DEFAULT_REMOTE_FEATURES_DISABLED;
      try {
        for (const o of Ma) {
          const i = this.processFeature(o, n, s, r, t);
          Object.assign(a, {
            [o]: i
          });
        }
      } catch (o) {
        return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), L.DEFAULT_REMOTE_FEATURES;
      }
      if (r && this.localSettingsOverridden.size > 0) {
        const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
        ce.open({
          debugMessage: ue.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
        }, "warning");
      }
      return a;
    }
  };
  class Ba {
    constructor(t) {
      this.chainNamespaces = [], this.features = {}, this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (n, s) => {
        var _a2, _b, _c;
        if (n) {
          const r = (_a2 = c.getCaipNetworks(n)) == null ? void 0 : _a2.find((i) => i.id === s);
          if (r) return r;
          const a = (_b = c.getNetworkData(n)) == null ? void 0 : _b.caipNetwork;
          return a || ((_c = c.getRequestedCaipNetworks(n).filter((i) => i.chainNamespace === n)) == null ? void 0 : _c[0]);
        }
        return c.state.activeCaipNetwork || this.defaultCaipNetwork;
      }, this.getCaipNetworkId = () => {
        const n = this.getCaipNetwork();
        if (n) return n.id;
      }, this.getCaipNetworks = (n) => c.getCaipNetworks(n), this.getActiveChainNamespace = () => c.state.activeChain, this.setRequestedCaipNetworks = (n, s) => {
        c.setRequestedCaipNetworks(n, s);
      }, this.getApprovedCaipNetworkIds = () => c.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (n) => {
        var _a2, _b;
        return c.state.activeChain === n || !n ? c.state.activeCaipAddress : (_b = (_a2 = c.state.chains.get(n)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b.caipAddress;
      }, this.setClientId = (n) => {
        P.setClientId(n);
      }, this.getProvider = (n) => q.getProvider(n), this.getProviderType = (n) => q.getProviderId(n), this.getPreferredAccountType = (n) => fe(n), this.setCaipAddress = (n, s, r = false) => {
        c.setAccountProp("caipAddress", n, s, r), c.setAccountProp("address", y.getPlainAddress(n), s, r);
      }, this.setBalance = (n, s, r) => {
        c.setAccountProp("balance", n, r), c.setAccountProp("balanceSymbol", s, r);
      }, this.setProfileName = (n, s) => {
        c.setAccountProp("profileName", n, s);
      }, this.setProfileImage = (n, s) => {
        c.setAccountProp("profileImage", n, s);
      }, this.setUser = (n, s) => {
        c.setAccountProp("user", n, s);
      }, this.resetAccount = (n) => {
        c.resetAccount(n);
      }, this.setCaipNetwork = (n) => {
        c.setActiveCaipNetwork(n);
      }, this.setCaipNetworkOfNamespace = (n, s) => {
        c.setChainNetworkData(s, {
          caipNetwork: n
        });
      }, this.setStatus = (n, s) => {
        c.setAccountProp("status", n, s), g.isConnected() ? C.setConnectionStatus("connected") : C.setConnectionStatus("disconnected");
      }, this.getAddressByChainNamespace = (n) => {
        var _a2;
        return (_a2 = c.getAccountData(n)) == null ? void 0 : _a2.address;
      }, this.setConnectors = (n) => {
        const s = [
          ...g.state.allConnectors,
          ...n
        ];
        g.setConnectors(s);
      }, this.setConnections = (n, s) => {
        C.setConnections(n, s), E.setConnections(n, s);
      }, this.fetchIdentity = (n) => P.fetchIdentity(n), this.getReownName = (n) => ut.getNamesForAddress(n), this.getConnectors = () => g.getConnectors(), this.getConnectorImage = (n) => Bt.getConnectorImage(n), this.getConnections = (n) => this.remoteFeatures.multiWallet ? Ft.getConnectionsData(n).connections : (ce.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (n) => this.remoteFeatures.multiWallet ? Ft.getConnectionsData(n).recentConnections : (ce.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (n) => {
        if (!this.remoteFeatures.multiWallet) {
          ce.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        await E.switchConnection(n);
      }, this.deleteConnection = (n) => {
        if (!this.remoteFeatures.multiWallet) {
          ce.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
          return;
        }
        C.deleteAddressFromConnection(n), E.syncStorageConnections();
      }, this.setConnectedWalletInfo = (n, s) => {
        const r = q.getProviderId(s), a = n ? {
          ...n,
          type: r
        } : void 0;
        c.setAccountProp("connectedWalletInfo", a, s);
      }, this.getIsConnectedState = () => !!c.state.activeCaipAddress, this.addAddressLabel = (n, s, r) => {
        var _a2;
        const a = ((_a2 = c.getAccountData(r)) == null ? void 0 : _a2.addressLabels) || {};
        c.setAccountProp("addressLabels", {
          ...a,
          [n]: s
        }, r);
      }, this.removeAddressLabel = (n, s) => {
        var _a2;
        const r = ((_a2 = c.getAccountData(s)) == null ? void 0 : _a2.addressLabels) || {};
        c.setAccountProp("addressLabels", {
          ...r,
          [n]: void 0
        }, s);
      }, this.getAddress = (n) => {
        var _a2;
        const s = n || c.state.activeChain;
        return (_a2 = c.getAccountData(s)) == null ? void 0 : _a2.address;
      }, this.resetNetwork = (n) => {
        c.resetNetwork(n);
      }, this.addConnector = (n) => {
        g.addConnector(n);
      }, this.resetWcConnection = () => {
        E.resetWcConnection();
      }, this.setAddressExplorerUrl = (n, s) => {
        c.setAccountProp("addressExplorerUrl", n, s);
      }, this.setSmartAccountDeployed = (n, s) => {
        c.setAccountProp("smartAccountDeployed", n, s);
      }, this.setPreferredAccountType = (n, s) => {
        c.setAccountProp("preferredAccountType", n, s);
      }, this.setEIP6963Enabled = (n) => {
        f.setEIP6963Enabled(n);
      }, this.handleUnsafeRPCRequest = () => {
        if (this.isOpen()) {
          if (this.isTransactionStackEmpty()) return;
          this.redirect("ApproveTransaction");
        } else this.open({
          view: "ApproveTransaction"
        });
      }, this.options = t, this.version = t.sdkVersion, this.caipNetworks = this.extendCaipNetworks(t), this.chainNamespaces = this.getChainNamespacesSet(t.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(t), this.chainAdapters = this.createAdapters(t.adapters), this.readyPromise = this.initialize(t);
    }
    getChainNamespacesSet(t, n) {
      const s = t == null ? void 0 : t.map((a) => a.namespace).filter((a) => !!a);
      if (s == null ? void 0 : s.length) return [
        ...new Set(s)
      ];
      const r = n == null ? void 0 : n.map((a) => a.chainNamespace);
      return [
        ...new Set(r)
      ];
    }
    async initialize(t) {
      var _a2, _b, _c, _d2, _e2, _f;
      if (this.initializeProjectSettings(t), this.initControllers(t), await this.initChainAdapters(), this.sendInitializeEvent(t), ((_a2 = t.features) == null ? void 0 : _a2.headless) && !re.hasInjectedConnectors() && I.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false,
        fetchWalletRanks: false,
        fetchRecommendedWallets: true
      }), f.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), !t.basic && !t.manualWCControl && (this.remoteFeatures = await Wa.fetchRemoteFeatures(t)), await I.fetchUsage(), f.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && pn.setOnrampProviders(this.remoteFeatures.onramp), (((_b = f.state.remoteFeatures) == null ? void 0 : _b.email) || Array.isArray((_c = f.state.remoteFeatures) == null ? void 0 : _c.socials) && ((_d2 = f.state.remoteFeatures) == null ? void 0 : _d2.socials.length) > 0) && await this.checkAllowedOrigins(), ((_e2 = f.state.features) == null ? void 0 : _e2.reownAuthentication) || ((_f = f.state.remoteFeatures) == null ? void 0 : _f.reownAuthentication)) {
        const { ReownAuthentication: n } = await Lt(async () => {
          const { ReownAuthentication: r } = await import("./features-CIMjEz2w.js");
          return {
            ReownAuthentication: r
          };
        }, __vite__mapDeps([4,1,2])), s = f.state.siwx;
        s instanceof n || (s && console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden."), f.setSIWX(new n()));
      }
    }
    async openSend(t) {
      var _a2;
      const n = t.namespace || c.state.activeChain, s = this.getCaipAddress(n), r = (_a2 = this.getCaipNetwork(n)) == null ? void 0 : _a2.id;
      if (!s) throw new Error("openSend: caipAddress not found");
      if ((r == null ? void 0 : r.toString()) !== t.chainId.toString()) {
        const a = c.getCaipNetworkById(t.chainId, n);
        if (!a) throw new Error(`openSend: caipNetwork with chainId ${t.chainId} not found`);
        await this.switchNetwork(a, {
          throwOnFailure: true
        });
      }
      try {
        const a = bs.getTokenSymbolByAddress(t.assetAddress);
        a && await I.fetchTokenImages([
          a
        ]);
      } catch {
      }
      return await M.open({
        view: "WalletSend",
        data: {
          send: t
        }
      }), new Promise((a, o) => {
        const i = x.subscribeKey("hash", (u) => {
          u && (l(), a({
            hash: u
          }));
        }), d = M.subscribe((u) => {
          u.open || (l(), o(new Error("Modal closed")));
        }), l = this.createCleanupHandler([
          i,
          d
        ]);
      });
    }
    toModalOptions() {
      function t(s) {
        return (s == null ? void 0 : s.view) === "Swap";
      }
      function n(s) {
        return (s == null ? void 0 : s.view) === "WalletSend";
      }
      return {
        isSwap: t,
        isSend: n
      };
    }
    async checkAllowedOrigins() {
      try {
        const t = await I.fetchAllowedOrigins();
        if (!y.isClient()) return;
        const n = window.location.origin;
        Le.isOriginAllowed(n, t, h.DEFAULT_ALLOWED_ANCESTORS) || ce.open(ue.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
      } catch (t) {
        if (!(t instanceof Error)) return;
        switch (t.message) {
          case "RATE_LIMITED":
            ce.open(ue.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
            break;
          case "SERVER_ERROR": {
            const n = t.cause instanceof Error ? t.cause : t;
            ce.open({
              displayMessage: ue.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
              debugMessage: ue.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(n.message)
            }, "error");
            break;
          }
        }
      }
    }
    createCleanupHandler(t) {
      return () => {
        t.forEach((n) => {
          try {
            n();
          } catch {
          }
        });
      };
    }
    sendInitializeEvent(t) {
      var _a2;
      const { ...n } = t;
      delete n.adapters, delete n.universalProvider, D.sendEvent({
        type: "track",
        event: "INITIALIZE",
        properties: {
          ...n,
          networks: t.networks.map((s) => s.id),
          siweConfig: {
            options: ((_a2 = t.siweConfig) == null ? void 0 : _a2.options) || {}
          }
        }
      });
    }
    initControllers(t) {
      this.initializeOptionsController(t), this.initializeChainController(t), this.initializeThemeController(t), this.initializeConnectionController(t), this.initializeConnectorController();
    }
    initAdapterController() {
      hs.initialize(this.chainAdapters);
    }
    initializeThemeController(t) {
      t.themeMode && de.setThemeMode(t.themeMode), t.themeVariables && de.setThemeVariables(t.themeVariables);
    }
    initializeChainController(t) {
      if (!this.connectionControllerClient) throw new Error("ConnectionControllerClient must be set");
      c.initialize(t.adapters ?? [], this.caipNetworks, {
        connectionControllerClient: this.connectionControllerClient
      });
      const n = this.getDefaultNetwork();
      n && c.setActiveCaipNetwork(n);
    }
    initializeConnectionController(t) {
      E.initialize(t.adapters ?? []), E.setWcBasic(t.basic ?? false);
    }
    initializeConnectorController() {
      g.initialize(this.chainNamespaces);
    }
    initializeProjectSettings(t) {
      f.setProjectId(t.projectId), f.setSdkVersion(t.sdkVersion);
    }
    initializeOptionsController(t) {
      var _a2;
      f.setDebug(t.debug !== false), f.setEnableWalletGuide(t.enableWalletGuide !== false), f.setEnableWallets(t.enableWallets !== false), f.setEIP6963Enabled(t.enableEIP6963 !== false), f.setEnableNetworkSwitch(t.enableNetworkSwitch !== false), f.setEnableReconnect(t.enableReconnect !== false), f.setEnableMobileFullScreen(t.enableMobileFullScreen === true), f.setCoinbasePreference(t.coinbasePreference), f.setEnableAuthLogger(t.enableAuthLogger !== false), f.setCustomRpcUrls(t.customRpcUrls), f.setEnableEmbedded(t.enableEmbedded), f.setAllWallets(t.allWallets), f.setIncludeWalletIds(t.includeWalletIds), f.setExcludeWalletIds(t.excludeWalletIds), f.setFeaturedWalletIds(t.featuredWalletIds), f.setTokens(t.tokens), f.setTermsConditionsUrl(t.termsConditionsUrl), f.setPrivacyPolicyUrl(t.privacyPolicyUrl), f.setCustomWallets(t.customWallets), f.setFeatures(t.features), f.setAllowUnsupportedChain(t.allowUnsupportedChain), f.setUniversalProviderConfigOverride(t.universalProviderConfigOverride), f.setPreferUniversalLinks(t.experimental_preferUniversalLinks), f.setDefaultAccountTypes(t.defaultAccountTypes);
      const n = this.getDefaultMetaData();
      if (!t.metadata && n && (t.metadata = n), f.setMetadata(t.metadata), f.setDisableAppend(t.disableAppend), f.setEnableEmbedded(t.enableEmbedded), f.setSIWX(t.siwx), this.features = f.state.features ?? {}, !t.projectId) {
        ce.open(ue.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
        return;
      }
      if (((_a2 = t.adapters) == null ? void 0 : _a2.find((r) => r.namespace === h.CHAIN.EVM)) && t.siweConfig) {
        if (t.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
        f.setSIWX(t.siweConfig.mapToSIWX());
      }
    }
    getDefaultMetaData() {
      var _a2, _b, _c, _d2;
      return y.isClient() ? {
        name: ((_b = (_a2 = document.getElementsByTagName("title")) == null ? void 0 : _a2[0]) == null ? void 0 : _b.textContent) || "",
        description: ((_c = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c.content) || "",
        url: window.location.origin,
        icons: [
          ((_d2 = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d2.href) || ""
        ]
      } : null;
    }
    setUnsupportedNetwork(t) {
      const n = this.getActiveChainNamespace();
      if (n) {
        const s = nt.getUnsupportedNetwork(`${n}:${t}`);
        c.setActiveCaipNetwork(s);
      }
    }
    getDefaultNetwork() {
      return nt.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(t, n) {
      return nt.extendCaipNetwork(t, {
        customNetworkImageUrls: n.chainImages,
        projectId: n.projectId
      });
    }
    extendCaipNetworks(t) {
      return nt.extendCaipNetworks(t.networks, {
        customNetworkImageUrls: t.chainImages,
        customRpcUrls: t.customRpcUrls,
        projectId: t.projectId
      });
    }
    extendDefaultCaipNetwork(t) {
      const n = t.networks.find((r) => {
        var _a2;
        return r.id === ((_a2 = t.defaultNetwork) == null ? void 0 : _a2.id);
      });
      return n ? nt.extendCaipNetwork(n, {
        customNetworkImageUrls: t.chainImages,
        customRpcUrls: t.customRpcUrls,
        projectId: t.projectId
      }) : void 0;
    }
    async disconnectConnector(t, n) {
      var _a2, _b;
      try {
        this.setLoading(true, t);
        let s = {
          connections: []
        };
        const r = this.getAdapter(t);
        return (((_b = (_a2 = c.state.chains.get(t)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b.caipAddress) || !f.state.enableReconnect) && (r == null ? void 0 : r.disconnect) && (s = await r.disconnect({
          id: n
        })), this.setLoading(false, t), s;
      } catch (s) {
        throw this.setLoading(false, t), new Error(`Failed to disconnect chains: ${s.message}`);
      }
    }
    createClients() {
      this.connectionControllerClient = {
        connectWalletConnect: async () => {
          var _a2;
          const t = c.state.activeChain, n = this.getAdapter(t), s = (_a2 = this.getCaipNetwork(t)) == null ? void 0 : _a2.id, r = E.getConnections(t), a = this.remoteFeatures.multiWallet, o = r.length > 0;
          if (!n) throw new Error("Adapter not found");
          const i = await n.connectWalletConnect(s);
          (!o || !a) && this.close(), this.setClientId((i == null ? void 0 : i.clientId) || null), C.setConnectedNamespaces([
            ...c.state.chains.keys()
          ]), await this.syncWalletConnectAccount(), await we.initializeIfEnabled();
        },
        connectExternal: async (t) => {
          const n = await this.onConnectExternal(t);
          return await this.connectInactiveNamespaces(t, n), n ? {
            address: n.address
          } : void 0;
        },
        reconnectExternal: async ({ id: t, info: n, type: s, provider: r }) => {
          var _a2;
          const a = c.state.activeChain, o = this.getAdapter(a);
          if (!a) throw new Error("reconnectExternal: namespace not found");
          if (!o) throw new Error("reconnectExternal: adapter not found");
          (o == null ? void 0 : o.reconnect) && (await (o == null ? void 0 : o.reconnect({
            id: t,
            info: n,
            type: s,
            provider: r,
            chainId: (_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id
          })), C.addConnectedNamespace(a), this.syncConnectedWalletInfo(a));
        },
        disconnectConnector: async (t) => {
          await this.disconnectConnector(t.namespace, t.id);
        },
        disconnect: async (t) => {
          var _a2;
          const { id: n, chainNamespace: s, initialDisconnect: r } = t || {}, a = s || c.state.activeChain, o = g.getConnectorId(a), i = n === h.CONNECTOR_ID.AUTH || o === h.CONNECTOR_ID.AUTH, d = n === h.CONNECTOR_ID.WALLET_CONNECT || o === h.CONNECTOR_ID.WALLET_CONNECT;
          try {
            const l = Array.from(c.state.chains.keys());
            let u = s ? [
              s
            ] : l;
            (d || i) && (u = l);
            const p = u.map(async (A) => {
              const m = g.getConnectorId(A), N = n || m, R = await this.disconnectConnector(A, N);
              R && (i && C.deleteConnectedSocialProvider(), R.connections.forEach((T) => {
                C.addDisconnectedConnectorId(T.connectorId, A);
              })), r && this.onDisconnectNamespace({
                chainNamespace: A,
                closeModal: false
              });
            }), w = await Promise.allSettled(p);
            x.resetSend(), E.resetWcConnection(), ((_a2 = we.getSIWX()) == null ? void 0 : _a2.signOutOnDisconnect) && await we.clearSessions(), g.setFilterByNamespace(void 0), E.syncStorageConnections();
            const S = w.filter((A) => A.status === "rejected");
            if (S.length > 0) throw new Error(S.map((A) => A.reason.message).join(", "));
            D.sendEvent({
              type: "track",
              event: "DISCONNECT_SUCCESS",
              properties: {
                namespace: s || "all"
              }
            });
          } catch (l) {
            throw new Error(`Failed to disconnect chains: ${l.message}`);
          }
        },
        checkInstalled: (t) => t ? t.some((n) => {
          var _a2;
          return !!((_a2 = window.ethereum) == null ? void 0 : _a2[String(n)]);
        }) : !!window.ethereum,
        signMessage: async (t) => {
          var _a2;
          const n = c.state.activeChain, s = this.getAdapter(c.state.activeChain);
          if (!n) throw new Error("signMessage: namespace not found");
          if (!s) throw new Error("signMessage: adapter not found");
          const r = this.getAddress(n);
          if (!r) throw new Error("signMessage: address not found");
          return ((_a2 = await (s == null ? void 0 : s.signMessage({
            message: t,
            address: r,
            provider: q.getProvider(n)
          }))) == null ? void 0 : _a2.signature) || "";
        },
        sendTransaction: async (t) => {
          var _a2;
          const n = t.chainNamespace;
          if (!n) throw new Error("sendTransaction: namespace not found");
          if (L.SEND_SUPPORTED_NAMESPACES.includes(n)) {
            const s = this.getAdapter(n);
            if (!s) throw new Error("sendTransaction: adapter not found");
            const r = q.getProvider(n);
            return ((_a2 = await (s == null ? void 0 : s.sendTransaction({
              ...t,
              caipNetwork: this.getCaipNetwork(),
              provider: r
            }))) == null ? void 0 : _a2.hash) || "";
          }
          return "";
        },
        estimateGas: async (t) => {
          var _a2;
          const n = t.chainNamespace;
          if (n === h.CHAIN.EVM) {
            const s = this.getAdapter(n);
            if (!s) throw new Error("estimateGas: adapter is required but got undefined");
            const r = q.getProvider(n), a = this.getCaipNetwork();
            if (!a) throw new Error("estimateGas: caipNetwork is required but got undefined");
            return ((_a2 = await (s == null ? void 0 : s.estimateGas({
              ...t,
              provider: r,
              caipNetwork: a
            }))) == null ? void 0 : _a2.gas) || 0n;
          }
          return 0n;
        },
        getEnsAvatar: async () => {
          var _a2, _b;
          const t = c.state.activeChain;
          if (!t) throw new Error("getEnsAvatar: namespace is required but got undefined");
          const n = this.getAddress(t);
          if (!n) throw new Error("getEnsAvatar: address not found");
          return await this.syncIdentity({
            address: n,
            chainId: Number((_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id),
            chainNamespace: t
          }), ((_b = c.getAccountData()) == null ? void 0 : _b.profileImage) || false;
        },
        getEnsAddress: async (t) => await Le.resolveReownName(t),
        writeContract: async (t) => {
          var _a2;
          const n = c.state.activeChain, s = this.getAdapter(n);
          if (!n) throw new Error("writeContract: namespace is required but got undefined");
          if (!s) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), a = this.getCaipAddress(), o = q.getProvider(n);
          if (!r || !a) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (s == null ? void 0 : s.writeContract({
            ...t,
            caipNetwork: r,
            provider: o,
            caipAddress: a
          }))) == null ? void 0 : _a2.hash;
        },
        writeSolanaTransaction: async (t) => {
          var _a2;
          const n = c.state.activeChain, s = this.getAdapter(n);
          if (!n) throw new Error("writeContract: namespace is required but got undefined");
          if (!s) throw new Error("writeContract: adapter is required but got undefined");
          const r = this.getCaipNetwork(), a = this.getCaipAddress(), o = q.getProvider(n);
          if (!r || !a) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
          return (_a2 = await (s == null ? void 0 : s.writeSolanaTransaction({
            ...t,
            caipNetwork: r,
            provider: o,
            caipAddress: a
          }))) == null ? void 0 : _a2.hash;
        },
        parseUnits: (t, n) => {
          const s = this.getAdapter(c.state.activeChain);
          if (!s) throw new Error("parseUnits: adapter is required but got undefined");
          return (s == null ? void 0 : s.parseUnits({
            value: t,
            decimals: n
          })) ?? 0n;
        },
        formatUnits: (t, n) => {
          const s = this.getAdapter(c.state.activeChain);
          if (!s) throw new Error("formatUnits: adapter is required but got undefined");
          return (s == null ? void 0 : s.formatUnits({
            value: t,
            decimals: n
          })) ?? "0";
        },
        getCapabilities: async (t) => {
          const n = this.getAdapter(c.state.activeChain);
          if (!n) throw new Error("getCapabilities: adapter is required but got undefined");
          return await (n == null ? void 0 : n.getCapabilities(t));
        },
        grantPermissions: async (t) => {
          const n = this.getAdapter(c.state.activeChain);
          if (!n) throw new Error("grantPermissions: adapter is required but got undefined");
          return await (n == null ? void 0 : n.grantPermissions(t));
        },
        revokePermissions: async (t) => {
          const n = this.getAdapter(c.state.activeChain);
          if (!n) throw new Error("revokePermissions: adapter is required but got undefined");
          return (n == null ? void 0 : n.revokePermissions) ? await n.revokePermissions(t) : "0x";
        },
        walletGetAssets: async (t) => {
          const n = this.getAdapter(c.state.activeChain);
          if (!n) throw new Error("walletGetAssets: adapter is required but got undefined");
          return await (n == null ? void 0 : n.walletGetAssets(t)) ?? {};
        },
        updateBalance: (t) => {
          const n = this.getAddress(t), s = this.getCaipNetwork(t);
          !s || !n || this.updateNativeBalance(n, s == null ? void 0 : s.id, t);
        }
      }, E.setClient(this.connectionControllerClient);
    }
    async onConnectExternal(t) {
      var _a2, _b, _c, _d2, _e2, _f, _g, _h;
      const n = c.state.activeChain, s = t.chain || n, r = this.getAdapter(s);
      let a = true;
      if (t.type === ke.CONNECTOR_TYPE_AUTH && h.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((p) => g.getConnectorId(p) === h.CONNECTOR_ID.AUTH) && t.chain !== n && (a = false), t.chain && t.chain !== n && !t.caipNetwork) {
        const l = this.getCaipNetworks().find((u) => u.chainNamespace === t.chain);
        l && a && this.setCaipNetwork(l);
      }
      if (!s) throw new Error("connectExternal: namespace not found");
      if (!r) throw new Error("connectExternal: adapter not found");
      const o = this.getCaipNetwork(s), i = t.caipNetwork || o, d = await r.connect({
        id: t.id,
        address: t.address,
        info: t.info,
        type: t.type,
        provider: t.provider,
        socialUri: t.socialUri,
        chainId: ((_a2 = t.caipNetwork) == null ? void 0 : _a2.id) || (o == null ? void 0 : o.id),
        rpcUrl: ((_e2 = (_d2 = (_c = (_b = t.caipNetwork) == null ? void 0 : _b.rpcUrls) == null ? void 0 : _c.default) == null ? void 0 : _d2.http) == null ? void 0 : _e2[0]) || ((_h = (_g = (_f = o == null ? void 0 : o.rpcUrls) == null ? void 0 : _f.default) == null ? void 0 : _g.http) == null ? void 0 : _h[0])
      });
      if (d) return C.addConnectedNamespace(s), this.syncProvider({
        ...d,
        chainNamespace: s
      }), this.setStatus("connected", s), this.syncConnectedWalletInfo(s), C.removeDisconnectedConnectorId(t.id, s), {
        address: d.address,
        connectedCaipNetwork: i
      };
    }
    async connectInactiveNamespaces(t, n) {
      var _a2;
      const s = t.type === ke.CONNECTOR_TYPE_AUTH, r = gn.getOtherAuthNamespaces((_a2 = n == null ? void 0 : n.connectedCaipNetwork) == null ? void 0 : _a2.chainNamespace), a = c.state.activeCaipNetwork, o = this.getAdapter(a == null ? void 0 : a.chainNamespace);
      s && (await Promise.all(r.map(async (i) => {
        var _a3, _b, _c, _d2;
        try {
          const d = q.getProvider(i), l = this.getCaipNetwork(i);
          await ((_d2 = this.getAdapter(i)) == null ? void 0 : _d2.connect({
            ...t,
            provider: d,
            socialUri: void 0,
            chainId: l == null ? void 0 : l.id,
            rpcUrl: (_c = (_b = (_a3 = l == null ? void 0 : l.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0]
          })) && (C.addConnectedNamespace(i), C.removeDisconnectedConnectorId(t.id, i), this.setStatus("connected", i), this.syncConnectedWalletInfo(i));
        } catch (d) {
          ce.warn(ue.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, ue.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(i, d instanceof Error ? d.message : void 0), ue.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
        }
      })), a && await (o == null ? void 0 : o.switchNetwork({
        caipNetwork: a
      })));
    }
    getApprovedCaipNetworksData() {
      var _a2, _b, _c, _d2, _e2;
      if (q.getProviderId(c.state.activeChain) === ke.CONNECTOR_TYPE_WALLET_CONNECT) {
        const n = (_b = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b.namespaces;
        return {
          supportsAllNetworks: ((_e2 = (_d2 = (_c = this.universalProvider) == null ? void 0 : _c.session) == null ? void 0 : _d2.peer) == null ? void 0 : _e2.metadata.name) === "MetaMask Wallet",
          approvedCaipNetworkIds: this.getChainsFromNamespaces(n)
        };
      }
      return {
        supportsAllNetworks: true,
        approvedCaipNetworkIds: []
      };
    }
    async switchCaipNetwork(t) {
      var _a2;
      const n = t.chainNamespace;
      if (this.getAddressByChainNamespace(t.chainNamespace)) {
        const r = q.getProviderId(n);
        if (t.chainNamespace === c.state.activeChain) await ((_a2 = this.getAdapter(n)) == null ? void 0 : _a2.switchNetwork({
          caipNetwork: t
        }));
        else if (this.setCaipNetwork(t), r === ke.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
        else {
          const a = this.getAddressByChainNamespace(n);
          a && this.syncAccount({
            address: a,
            chainId: t.id,
            chainNamespace: n
          });
        }
      } else this.setCaipNetwork(t);
    }
    getChainsFromNamespaces(t = {}) {
      return Object.values(t).flatMap((n) => {
        const s = n.chains || [], r = n.accounts.map((a) => {
          const { chainId: o, chainNamespace: i } = Z.parseCaipAddress(a);
          return `${i}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...s,
          ...r
        ]));
      });
    }
    createAdapters(t) {
      return this.createClients(), this.chainNamespaces.reduce((n, s) => {
        var _a2, _b;
        const r = t == null ? void 0 : t.find((a) => a.namespace === s);
        return r ? (r.construct({
          namespace: s,
          projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
          networks: (_b = this.caipNetworks) == null ? void 0 : _b.filter(({ chainNamespace: a }) => a === s)
        }), n[s] = r) : n[s] = new La({
          namespace: s,
          networks: this.getCaipNetworks()
        }), n;
      }, {});
    }
    async initChainAdapter(t) {
      this.onConnectors(t), this.listenAdapter(t);
      const n = this.getAdapter(t);
      if (!n) throw new Error("adapter not found");
      await n.syncConnectors(), await this.createUniversalProviderForAdapter(t);
    }
    async initChainAdapters() {
      await Promise.all(this.chainNamespaces.map(async (t) => {
        await this.initChainAdapter(t);
      })), this.initAdapterController();
    }
    onConnectors(t) {
      var _a2;
      (_a2 = this.getAdapter(t)) == null ? void 0 : _a2.on("connectors", this.setConnectors.bind(this));
    }
    listenAdapter(t) {
      const n = this.getAdapter(t);
      if (!n) return;
      const s = C.getConnectionStatus();
      f.state.enableReconnect === false ? this.setStatus("disconnected", t) : s === "connected" ? this.setStatus("connecting", t) : s === "disconnected" ? (C.clearAddressCache(), this.setStatus(s, t)) : this.setStatus(s, t), n.on("switchNetwork", ({ address: r, chainId: a }) => {
        var _a2, _b;
        const o = this.getCaipNetworks().find((l) => l.id.toString() === a.toString() || l.caipNetworkId.toString() === a.toString()), i = c.state.activeChain === t, d = (_b = (_a2 = c.state.chains.get(t)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b.address;
        if (o) {
          const l = i && r ? r : d;
          l && this.syncAccount({
            address: l,
            chainId: o.id,
            chainNamespace: t
          });
        } else this.setUnsupportedNetwork(a);
      }), n.on("disconnect", () => {
        const r = this.remoteFeatures.multiWallet, a = Array.from(E.state.connections.values()).flat();
        this.onDisconnectNamespace({
          chainNamespace: t,
          closeModal: !r || a.length === 0
        });
      }), n.on("connections", (r) => {
        this.setConnections(r, t);
      }), n.on("pendingTransactions", () => {
        const r = this.getAddress(t), a = c.state.activeCaipNetwork;
        !r || !(a == null ? void 0 : a.id) || this.updateNativeBalance(r, a.id, a.chainNamespace);
      }), n.on("accountChanged", ({ address: r, chainId: a, connector: o }) => {
        var _a2, _b;
        this.handlePreviousConnectorConnection(o);
        const i = c.state.activeChain === t;
        (o == null ? void 0 : o.provider) && (this.syncProvider({
          id: o.id,
          type: o.type,
          provider: o == null ? void 0 : o.provider,
          chainNamespace: t
        }), this.syncConnectedWalletInfo(t));
        const d = (_b = (_a2 = c.getNetworkData(t)) == null ? void 0 : _a2.caipNetwork) == null ? void 0 : _b.id, l = a || d;
        i && l ? this.syncAccount({
          address: r,
          chainId: l,
          chainNamespace: t
        }) : !i && l ? (this.syncAccountInfo(r, l, t), this.syncBalance({
          address: r,
          chainId: l,
          chainNamespace: t
        })) : this.syncAccountInfo(r, a, t), C.addConnectedNamespace(t);
      });
    }
    async handlePreviousConnectorConnection(t) {
      var _a2;
      const n = t == null ? void 0 : t.chain, s = t == null ? void 0 : t.id, r = g.getConnectorId(n), a = (_a2 = f.state.remoteFeatures) == null ? void 0 : _a2.multiWallet, i = n && s && r && r !== s && !a;
      try {
        i && await E.disconnect({
          id: r,
          namespace: n
        });
      } catch (d) {
        console.warn("Error disconnecting previous connector", d);
      }
    }
    async createUniversalProviderForAdapter(t) {
      var _a2, _b, _c;
      await this.getUniversalProvider(), this.universalProvider && await ((_c = (_b = (_a2 = this.chainAdapters) == null ? void 0 : _a2[t]) == null ? void 0 : _b.setUniversalProvider) == null ? void 0 : _c.call(_b, this.universalProvider));
    }
    async syncExistingConnection() {
      await Promise.allSettled(this.chainNamespaces.map((t) => this.syncNamespaceConnection(t)));
    }
    async unSyncExistingConnection() {
      try {
        await Promise.allSettled(this.chainNamespaces.map((t) => E.disconnect({
          namespace: t,
          initialDisconnect: true
        })));
      } catch (t) {
        console.error("Error disconnecting existing connections:", t);
      }
    }
    async reconnectWalletConnect() {
      await this.syncWalletConnectAccount();
      const t = this.getAddress();
      this.getCaipAddress() || C.deleteRecentWallet();
      const n = C.getRecentWallet();
      D.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: t,
        properties: {
          method: y.isMobile() ? "mobile" : "qrcode",
          name: (n == null ? void 0 : n.name) || "Unknown",
          reconnect: true,
          view: O.state.view,
          walletRank: n == null ? void 0 : n.order
        }
      });
    }
    async syncNamespaceConnection(t) {
      try {
        t === h.CHAIN.EVM && y.isSafeApp() && g.setConnectorId(h.CONNECTOR_ID.SAFE, t);
        const n = g.getConnectorId(t);
        switch (this.setStatus("connecting", t), n) {
          case h.CONNECTOR_ID.WALLET_CONNECT:
            await this.reconnectWalletConnect();
            break;
          case h.CONNECTOR_ID.AUTH:
            break;
          default:
            await this.syncAdapterConnection(t);
        }
      } catch (n) {
        console.warn("AppKit couldn't sync existing connection", n), this.setStatus("disconnected", t);
      }
    }
    onDisconnectNamespace(t) {
      const { chainNamespace: n, closeModal: s } = t || {};
      c.resetAccount(n), c.resetNetwork(n), C.removeConnectedNamespace(n);
      const r = Array.from(c.state.chains.keys());
      (n ? [
        n
      ] : r).forEach((o) => C.addDisconnectedConnectorId(g.getConnectorId(o) || "", o)), g.removeConnectorId(n), q.resetChain(n), this.setUser(null, n), this.setStatus("disconnected", n), this.setConnectedWalletInfo(null, n), s !== false && M.close();
    }
    async syncAdapterConnections() {
      await Promise.allSettled(this.chainNamespaces.map((t) => {
        const n = this.getAdapter(t), s = this.getCaipAddress(t), r = this.getCaipNetwork(t);
        return n == null ? void 0 : n.syncConnections({
          connectToFirstConnector: !s,
          caipNetwork: r
        });
      }));
    }
    async syncAdapterConnection(t) {
      var _a2, _b, _c, _d2, _e2;
      const n = this.getAdapter(t), s = this.getCaipNetwork(t), r = g.getConnectorId(t), o = g.getConnectors(t).find((i) => i.id === r);
      try {
        if (!n || !o) throw new Error(`Adapter or connector not found for namespace ${t}`);
        if (!(s == null ? void 0 : s.id)) throw new Error("CaipNetwork not found");
        const i = await (n == null ? void 0 : n.syncConnection({
          namespace: t,
          id: o.id,
          chainId: s.id,
          rpcUrl: (_c = (_b = (_a2 = s == null ? void 0 : s.rpcUrls) == null ? void 0 : _a2.default) == null ? void 0 : _b.http) == null ? void 0 : _c[0]
        }));
        i ? (this.syncProvider({
          ...i,
          chainNamespace: t
        }), await this.syncAccount({
          ...i,
          chainNamespace: t
        }), this.setStatus("connected", t), D.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          address: i.address,
          properties: {
            method: "browser",
            name: ((_d2 = o.info) == null ? void 0 : _d2.name) || o.name || "Unknown",
            reconnect: true,
            view: O.state.view,
            walletRank: (_e2 = o == null ? void 0 : o.explorerWallet) == null ? void 0 : _e2.order
          }
        })) : this.setStatus("disconnected", t);
      } catch {
        this.onDisconnectNamespace({
          chainNamespace: t,
          closeModal: false
        });
      }
    }
    async syncWalletConnectAccount() {
      var _a2, _b;
      const t = Object.keys(((_b = (_a2 = this.universalProvider) == null ? void 0 : _a2.session) == null ? void 0 : _b.namespaces) || {}), n = this.chainNamespaces.map(async (s) => {
        var _a3, _b2, _c, _d2, _e2;
        const r = this.getAdapter(s);
        if (!r) return;
        const a = ((_d2 = (_c = (_b2 = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b2.namespaces) == null ? void 0 : _c[s]) == null ? void 0 : _d2.accounts) || [], o = (_e2 = c.state.activeCaipNetwork) == null ? void 0 : _e2.id, i = a.find((l) => {
          const { chainId: u } = Z.parseCaipAddress(l);
          return u === (o == null ? void 0 : o.toString());
        }) || a[0];
        if (i) {
          const l = Z.validateCaipAddress(i), { chainId: u, address: p } = Z.parseCaipAddress(l);
          if (q.setProviderId(s, ke.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && c.state.activeCaipNetwork && r.namespace !== h.CHAIN.EVM) {
            const w = r.getWalletConnectProvider({
              caipNetworks: this.getCaipNetworks(),
              provider: this.universalProvider,
              activeCaipNetwork: c.state.activeCaipNetwork
            });
            q.setProvider(s, w);
          } else q.setProvider(s, this.universalProvider);
          g.setConnectorId(h.CONNECTOR_ID.WALLET_CONNECT, s), C.addConnectedNamespace(s), await this.syncAccount({
            address: p,
            chainId: u,
            chainNamespace: s
          });
        } else t.includes(s) && this.setStatus("disconnected", s);
        const d = this.getApprovedCaipNetworksData();
        this.syncConnectedWalletInfo(s), c.setApprovedCaipNetworksData(s, {
          approvedCaipNetworkIds: d.approvedCaipNetworkIds,
          supportsAllNetworks: d.supportsAllNetworks
        });
      });
      await Promise.all(n);
    }
    syncProvider({ type: t, provider: n, id: s, chainNamespace: r }) {
      q.setProviderId(r, t), q.setProvider(r, n), g.setConnectorId(s, r);
    }
    async syncAccount(t) {
      var _a2, _b;
      const n = t.chainNamespace === c.state.activeChain, s = c.getCaipNetworkByNamespace(t.chainNamespace, t.chainId), { address: r, chainId: a, chainNamespace: o } = t, { chainId: i } = C.getActiveNetworkProps(), d = (s == null ? void 0 : s.id) || i, l = ((_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.name) === h.UNSUPPORTED_NETWORK_NAME, u = c.getNetworkProp("supportsAllNetworks", o);
      if (this.setStatus("connected", o), !(l && !u) && d) {
        let p = this.getCaipNetworks().find((m) => m.id.toString() === d.toString()), w = this.getCaipNetworks().find((m) => m.chainNamespace === o);
        if (!u && !p && !w) {
          const m = this.getApprovedCaipNetworkIds() || [], N = m.find((T) => {
            var _a3;
            return ((_a3 = Z.parseCaipNetworkId(T)) == null ? void 0 : _a3.chainId) === d.toString();
          }), R = m.find((T) => {
            var _a3;
            return ((_a3 = Z.parseCaipNetworkId(T)) == null ? void 0 : _a3.chainNamespace) === o;
          });
          p = this.getCaipNetworks().find((T) => T.caipNetworkId === N), w = this.getCaipNetworks().find((T) => T.caipNetworkId === R || "deprecatedCaipNetworkId" in T && T.deprecatedCaipNetworkId === R);
        }
        const S = p || w;
        (S == null ? void 0 : S.chainNamespace) === c.state.activeChain ? f.state.enableNetworkSwitch && !f.state.allowUnsupportedChain && ((_b = c.state.activeCaipNetwork) == null ? void 0 : _b.name) === h.UNSUPPORTED_NETWORK_NAME ? c.showUnsupportedChainUI() : this.setCaipNetwork(S) : n || s && this.setCaipNetworkOfNamespace(s, o), this.syncConnectedWalletInfo(o);
        const A = this.getAddress(o);
        gn.isLowerCaseMatch(r, A) || this.syncAccountInfo(r, S == null ? void 0 : S.id, o), n ? await this.syncBalance({
          address: r,
          chainId: S == null ? void 0 : S.id,
          chainNamespace: o
        }) : await this.syncBalance({
          address: r,
          chainId: s == null ? void 0 : s.id,
          chainNamespace: o
        }), this.syncIdentity({
          address: r,
          chainId: a,
          chainNamespace: o
        });
      }
    }
    async syncAccountInfo(t, n, s) {
      const r = this.getCaipAddress(s), a = n || (r == null ? void 0 : r.split(":")[1]);
      if (!a) return;
      const o = `${s}:${a}:${t}`;
      this.setCaipAddress(o, s, true), await this.syncIdentity({
        address: t,
        chainId: a,
        chainNamespace: s
      });
    }
    async syncReownName(t, n) {
      try {
        const s = await this.getReownName(t);
        if (s[0]) {
          const r = s[0];
          this.setProfileName(r.name, n);
        } else this.setProfileName(null, n);
      } catch {
        this.setProfileName(null, n);
      }
    }
    syncConnectedWalletInfo(t) {
      var _a2;
      const n = g.getConnectorId(t), s = q.getProviderId(t);
      if (s === ke.CONNECTOR_TYPE_ANNOUNCED || s === ke.CONNECTOR_TYPE_INJECTED) {
        if (n) {
          const a = this.getConnectors().find((o) => {
            var _a3, _b;
            const i = o.id === n, d = ((_a3 = o.info) == null ? void 0 : _a3.rdns) === n, l = (_b = o.connectors) == null ? void 0 : _b.some((u) => {
              var _a4;
              return u.id === n || ((_a4 = u.info) == null ? void 0 : _a4.rdns) === n;
            });
            return i || d || !!l;
          });
          if (a) {
            const { info: o, name: i, imageUrl: d } = a, l = d || this.getConnectorImage(a);
            this.setConnectedWalletInfo({
              name: i,
              icon: l,
              ...o
            }, t);
          }
        }
      } else if (s === ke.CONNECTOR_TYPE_WALLET_CONNECT) {
        const r = q.getProvider(t);
        (r == null ? void 0 : r.session) && this.setConnectedWalletInfo({
          ...r.session.peer.metadata,
          name: r.session.peer.metadata.name,
          icon: (_a2 = r.session.peer.metadata.icons) == null ? void 0 : _a2[0]
        }, t);
      } else if (n && (n === h.CONNECTOR_ID.COINBASE_SDK || n === h.CONNECTOR_ID.COINBASE)) {
        const r = this.getConnectors().find((d) => d.id === n), a = (r == null ? void 0 : r.name) || "Coinbase Wallet", o = (r == null ? void 0 : r.imageUrl) || this.getConnectorImage(r), i = r == null ? void 0 : r.info;
        this.setConnectedWalletInfo({
          ...i,
          name: a,
          icon: o
        }, t);
      }
    }
    async syncBalance(t) {
      !ns.getNetworksByNamespace(this.getCaipNetworks(), t.chainNamespace).find((s) => {
        var _a2;
        return s.id.toString() === ((_a2 = t.chainId) == null ? void 0 : _a2.toString());
      }) || !t.chainId || await this.updateNativeBalance(t.address, t.chainId, t.chainNamespace);
    }
    async ready() {
      await this.readyPromise;
    }
    async updateNativeBalance(t, n, s) {
      const r = this.getAdapter(s), a = c.getCaipNetworkByNamespace(s, n);
      if (r) {
        const o = await r.getBalance({
          address: t,
          chainId: n,
          caipNetwork: a,
          tokens: this.options.tokens
        });
        return this.setBalance(o.balance, o.symbol, s), o;
      }
    }
    async initializeUniversalAdapter() {
      var _a2, _b, _c, _d2, _e2, _f, _g, _h, _i, _j;
      const t = Ra.createLogger((r, ...a) => {
        r && this.handleAlertError(r), console.error(...a);
      }), n = {
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        metadata: {
          name: ((_b = this.options) == null ? void 0 : _b.metadata) ? (_c = this.options) == null ? void 0 : _c.metadata.name : "",
          description: ((_d2 = this.options) == null ? void 0 : _d2.metadata) ? (_e2 = this.options) == null ? void 0 : _e2.metadata.description : "",
          url: ((_f = this.options) == null ? void 0 : _f.metadata) ? (_g = this.options) == null ? void 0 : _g.metadata.url : "",
          icons: ((_h = this.options) == null ? void 0 : _h.metadata) ? (_i = this.options) == null ? void 0 : _i.metadata.icons : [
            ""
          ]
        },
        logger: t
      };
      f.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await Ps.init(n);
      const s = this.universalProvider.disconnect.bind(this.universalProvider);
      this.universalProvider.disconnect = async () => {
        try {
          return await s();
        } catch (r) {
          if (r instanceof Error && r.message.includes("Missing or invalid. Record was recently deleted")) return;
          throw r;
        }
      }, f.state.enableReconnect === false && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect();
    }
    listenWalletConnect() {
      this.universalProvider && this.chainNamespaces.forEach((t) => {
        Le.listenWcProvider({
          universalProvider: this.universalProvider,
          namespace: t,
          onDisplayUri: (n) => {
            E.setUri(n);
          },
          onConnect: (n) => {
            const { address: s } = y.getAccount(n[0]);
            for (const r of this.chainNamespaces) C.removeDisconnectedConnectorId(h.CONNECTOR_ID.WALLET_CONNECT, r);
            E.finalizeWcConnection(s);
          },
          onDisconnect: () => {
            c.state.noAdapters && this.resetAccount(t), E.resetWcConnection();
          },
          onChainChanged: (n) => {
            const s = c.state.activeChain, r = s && g.state.activeConnectorIds[s] === h.CONNECTOR_ID.WALLET_CONNECT;
            if (s === t && (c.state.noAdapters || r)) {
              const a = this.getCaipNetworks().find((i) => i.id.toString() === n.toString() || i.caipNetworkId.toString() === n.toString()), o = this.getCaipNetwork();
              if (!a) {
                this.setUnsupportedNetwork(n);
                return;
              }
              (o == null ? void 0 : o.id.toString()) !== (a == null ? void 0 : a.id.toString()) && (o == null ? void 0 : o.chainNamespace) === (a == null ? void 0 : a.chainNamespace) && this.setCaipNetwork(a);
            }
          },
          onAccountsChanged: (n) => {
            const s = c.state.activeChain, r = s && g.state.activeConnectorIds[s] === h.CONNECTOR_ID.WALLET_CONNECT;
            if (s === t && (c.state.noAdapters || r)) {
              const a = n == null ? void 0 : n[0];
              a && this.syncAccount({
                address: a.address,
                chainId: a.chainId,
                chainNamespace: a.chainNamespace
              });
            }
          }
        });
      });
    }
    createUniversalProvider() {
      var _a2;
      return !this.universalProviderInitPromise && y.isClient() && ((_a2 = this.options) == null ? void 0 : _a2.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
      if (!this.universalProvider) try {
        await this.createUniversalProvider();
      } catch (t) {
        D.sendEvent({
          type: "error",
          event: "INTERNAL_SDK_ERROR",
          properties: {
            errorType: "UniversalProviderInitError",
            errorMessage: t instanceof Error ? t.message : "Unknown",
            uncaught: false
          }
        }), console.error("AppKit:getUniversalProvider - Cannot create provider", t);
      }
      return this.universalProvider;
    }
    getDisabledCaipNetworks() {
      const t = c.getAllApprovedCaipNetworkIds(), n = c.getAllRequestedCaipNetworks();
      return y.sortRequestedNetworks(t, n).filter((r) => c.isCaipNetworkDisabled(r));
    }
    handleAlertError(t) {
      const n = Object.entries(ue.UniversalProviderErrors).find(([, { message: i }]) => t.message.includes(i)), [s, r] = n ?? [], { message: a, alertErrorKey: o } = r ?? {};
      if (s && a && !this.reportedAlertErrors[s]) {
        const i = ue.ALERT_ERRORS[o];
        i && (ce.open(i, "error"), this.reportedAlertErrors[s] = true);
      }
    }
    getAdapter(t) {
      var _a2;
      if (t) return (_a2 = this.chainAdapters) == null ? void 0 : _a2[t];
    }
    createAdapter(t) {
      var _a2, _b;
      if (!t) return;
      const n = t.namespace;
      if (!n) return;
      this.createClients();
      const s = t;
      s.namespace = n, s.construct({
        namespace: n,
        projectId: (_a2 = this.options) == null ? void 0 : _a2.projectId,
        networks: (_b = this.caipNetworks) == null ? void 0 : _b.filter(({ chainNamespace: r }) => r === n)
      }), this.chainNamespaces.includes(n) || this.chainNamespaces.push(n), this.chainAdapters && (this.chainAdapters[n] = s);
    }
    async open(t) {
      await this.injectModalUi(), (t == null ? void 0 : t.uri) && E.setUri(t.uri);
      const { isSwap: n, isSend: s } = this.toModalOptions();
      return n(t) ? M.open({
        ...t,
        data: {
          swap: t.arguments
        }
      }) : s(t) && t.arguments ? this.openSend(t.arguments) : M.open(t);
    }
    async close() {
      await this.injectModalUi(), M.close();
    }
    setLoading(t, n) {
      M.setLoading(t, n);
    }
    async disconnect(t) {
      await E.disconnect({
        namespace: t
      });
    }
    getSIWX() {
      return f.state.siwx;
    }
    getError() {
      return "";
    }
    getChainId() {
      var _a2;
      return (_a2 = c.state.activeCaipNetwork) == null ? void 0 : _a2.id;
    }
    async switchNetwork(t, { throwOnFailure: n = false } = {}) {
      const s = this.getCaipNetworks().find((r) => r.id === t.id);
      if (!s) {
        ce.open(ue.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      await c.switchActiveNetwork(s, {
        throwOnFailure: n
      });
    }
    getWalletProvider() {
      return c.state.activeChain ? q.state.providers[c.state.activeChain] : null;
    }
    getWalletProviderType() {
      return q.getProviderId(c.state.activeChain);
    }
    subscribeProviders(t) {
      return q.subscribeProviders(t);
    }
    getThemeMode() {
      return de.state.themeMode;
    }
    getThemeVariables() {
      return de.state.themeVariables;
    }
    setThemeMode(t) {
      de.setThemeMode(t), mn(de.state.themeMode);
    }
    setTermsConditionsUrl(t) {
      f.setTermsConditionsUrl(t);
    }
    setPrivacyPolicyUrl(t) {
      f.setPrivacyPolicyUrl(t);
    }
    setThemeVariables(t) {
      de.setThemeVariables(t), ka(de.state.themeVariables);
    }
    subscribeTheme(t) {
      return de.subscribe(t);
    }
    subscribeConnections(t) {
      return this.remoteFeatures.multiWallet ? E.subscribe(t) : (ce.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {
      });
    }
    getWalletInfo(t) {
      var _a2, _b, _c;
      return t ? (_b = (_a2 = c.state.chains.get(t)) == null ? void 0 : _a2.accountState) == null ? void 0 : _b.connectedWalletInfo : (_c = c.getAccountData()) == null ? void 0 : _c.connectedWalletInfo;
    }
    getAccount(t) {
      const n = t || c.state.activeChain, s = g.getAuthConnector(n), r = c.getAccountData(n), a = C.getConnectedConnectorId(c.state.activeChain), o = E.getConnections(n);
      if (!n) throw new Error("AppKit:getAccount - namespace is required");
      const i = o.flatMap((d) => d.accounts.map(({ address: l, type: u, publicKey: p }) => y.createAccount(n, l, u || "eoa", p)));
      if (r) return {
        allAccounts: i,
        caipAddress: r.caipAddress,
        address: y.getPlainAddress(r.caipAddress),
        isConnected: !!r.caipAddress,
        status: r.status,
        embeddedWalletInfo: s && a === h.CONNECTOR_ID.AUTH ? {
          user: r.user ? {
            ...r.user,
            username: C.getConnectedSocialUsername()
          } : void 0,
          authProvider: r.socialProvider || "email",
          accountType: fe(n),
          isSmartAccountDeployed: !!r.smartAccountDeployed
        } : void 0
      };
    }
    subscribeAccount(t, n) {
      const s = [], r = () => {
        const o = this.getAccount(n);
        o && t(o);
      };
      if (n) {
        const o = c.subscribeChainProp("accountState", r, n);
        s.push(o);
      } else {
        const o = c.subscribe(r);
        s.push(o);
      }
      const a = g.subscribe(r);
      return s.push(a), () => {
        s.forEach((o) => o());
      };
    }
    subscribeNetwork(t) {
      return c.subscribe(({ activeCaipNetwork: n }) => {
        t({
          caipNetwork: n,
          chainId: n == null ? void 0 : n.id,
          caipNetworkId: n == null ? void 0 : n.caipNetworkId
        });
      });
    }
    subscribeWalletInfo(t, n) {
      return n ? c.subscribeChainProp("accountState", (s) => t(s == null ? void 0 : s.connectedWalletInfo), n) : c.subscribeChainProp("accountState", (s) => t(s == null ? void 0 : s.connectedWalletInfo));
    }
    subscribeShouldUpdateToAddress(t) {
      return c.subscribeChainProp("accountState", (n) => t(n == null ? void 0 : n.shouldUpdateToAddress));
    }
    subscribeCaipNetworkChange(t) {
      return c.subscribeKey("activeCaipNetwork", t);
    }
    getState() {
      return Ae.state;
    }
    getRemoteFeatures() {
      return f.state.remoteFeatures;
    }
    subscribeState(t) {
      return Ae.subscribe(t);
    }
    subscribeRemoteFeatures(t) {
      return f.subscribeKey("remoteFeatures", t);
    }
    showErrorMessage(t) {
      be.showError(t);
    }
    showSuccessMessage(t) {
      be.showSuccess(t);
    }
    getEvent() {
      return {
        ...D.state
      };
    }
    subscribeEvents(t) {
      return D.subscribe(t);
    }
    replace(t) {
      O.replace(t);
    }
    redirect(t) {
      O.push(t);
    }
    popTransactionStack(t) {
      O.popTransactionStack(t);
    }
    isOpen() {
      return M.state.open;
    }
    isTransactionStackEmpty() {
      return O.state.transactionStack.length === 0;
    }
    static getInstance() {
      return this.instance;
    }
    updateFeatures(t) {
      f.setFeatures(t);
    }
    updateRemoteFeatures(t) {
      f.setRemoteFeatures(t);
    }
    updateOptions(t) {
      const s = {
        ...f.state || {},
        ...t
      };
      f.setOptions(s);
    }
    setConnectMethodsOrder(t) {
      f.setConnectMethodsOrder(t);
    }
    setWalletFeaturesOrder(t) {
      f.setWalletFeaturesOrder(t);
    }
    setCollapseWallets(t) {
      f.setCollapseWallets(t);
    }
    setSocialsOrder(t) {
      f.setSocialsOrder(t);
    }
    getConnectMethodsOrder() {
      return xe.getConnectOrderMethod(f.state.features, g.getConnectors());
    }
    addNetwork(t, n) {
      if (this.chainAdapters && !this.chainAdapters[t]) throw new Error(`Adapter for namespace ${t} doesn't exist`);
      const s = this.extendCaipNetwork(n, this.options);
      this.getCaipNetworks().find((r) => r.id === s.id) || c.addNetwork(s);
    }
    removeNetwork(t, n) {
      if (this.chainAdapters && !this.chainAdapters[t]) throw new Error(`Adapter for namespace ${t} doesn't exist`);
      this.getCaipNetworks().find((r) => r.id === n) && c.removeNetwork(t, n);
    }
  }
  let Zn = false;
  class ys extends Ba {
    async open(t) {
      g.isConnected() || await super.open(t);
    }
    async close() {
      var _a2;
      if (await super.close(), this.options.manualWCControl) {
        const t = (_a2 = c.getAccountData(this.activeChainNamespace)) == null ? void 0 : _a2.address;
        E.finalizeWcConnection(t);
      }
    }
    async syncIdentity(t) {
      return Promise.resolve();
    }
    async syncBalance(t) {
      return Promise.resolve();
    }
    async injectModalUi() {
      if (!Zn && y.isClient()) {
        if (await Lt(() => import("./basic--1Zacia5.js"), __vite__mapDeps([5,6,1,2])), await Lt(() => import("./w3m-modal-DvCr32n2.js"), __vite__mapDeps([7,6,1,2])), !document.querySelector("w3m-modal")) {
          const n = document.createElement("w3m-modal");
          !f.state.disableAppend && !f.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", n);
        }
        Zn = true;
      }
    }
  }
  const Fa = "1.8.17-wc-circular-dependencies-fix.0";
  function $a(e) {
    return new ys({
      ...e,
      basic: true,
      sdkVersion: `html-core-${Fa}`
    });
  }
  Qa = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: ys,
    createAppKit: $a
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  hs as $,
  I as A,
  P as B,
  c as C,
  L as D,
  rt as E,
  ps as F,
  g as G,
  te as H,
  ee as I,
  z as J,
  we as K,
  qs as L,
  M,
  ns as N,
  Z as O,
  q as P,
  Nt as Q,
  O as R,
  k as S,
  gn as T,
  f as U,
  ja as V,
  Re as W,
  Bt as X,
  he as Y,
  de as Z,
  Ya as _,
  __tla,
  h as a,
  re as a0,
  qe as a1,
  Oe as a2,
  Ft as a3,
  nt as a4,
  C as a5,
  xe as a6,
  Qa as a7,
  _ as b,
  ms as c,
  xt as d,
  qa as e,
  Tn as f,
  _t as g,
  Q as h,
  Ue as i,
  Ga as j,
  Xa as k,
  os as l,
  Ce as m,
  be as n,
  E as o,
  D as p,
  fe as q,
  Ja as r,
  Us as s,
  y as t,
  fn as u,
  Ta as v,
  za as w,
  Pr as x,
  ce as y,
  En as z
};
