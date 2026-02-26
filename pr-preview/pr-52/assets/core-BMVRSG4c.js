const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/basic-CS46loq2.js","assets/index-B9HTR4Bx.js","assets/main-v_QDCm_K.js","assets/main-BN-Qqfmx.css","assets/w3m-modal-CihAaYIo.js"])))=>i.map(i=>d[i]);
import { c as Fr, T as Hr, U as zr, W as Vr, E as qr, w as Kr, p as Jr, f as Yr, k as Gr, A as Xr, h as At, t as er, x as Zr, _ as tr, __tla as __tla_0 } from "./main-v_QDCm_K.js";
let y, Ur, m, Kt, K, Ge, Bn, G, h, R, b, le, qt, _t, Rn, T, kt, Ln, Tr, k, A, Je, i, we, ge, ee, Q, Mn, he, te, Wn, re, J, Ve, Zs, Dn, it, N, $n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _b;
  function rr(e, t = {}) {
    const { key: r = "fallback", name: s = "Fallback", rank: n = false, shouldThrow: a = Qr, retryCount: o, retryDelay: c } = t;
    return (({ chain: d, pollingInterval: l = 4e3, timeout: u, ...p }) => {
      let g = e, v = () => {
      };
      const P = Fr({
        key: r,
        name: s,
        async request({ method: w, params: C }) {
          let _;
          const H = async (W = 0) => {
            const q = g[W]({
              ...p,
              chain: d,
              retryCount: 0,
              timeout: u
            });
            try {
              const X = await q.request({
                method: w,
                params: C
              });
              return v({
                method: w,
                params: C,
                response: X,
                transport: q,
                status: "success"
              }), X;
            } catch (X) {
              if (v({
                error: X,
                method: w,
                params: C,
                transport: q,
                status: "error"
              }), a(X) || W === g.length - 1 || (_ ?? (_ = g.slice(W + 1).some((me) => {
                const { include: fe, exclude: Nt } = me({
                  chain: d
                }).config.methods || {};
                return fe ? fe.includes(w) : Nt ? !Nt.includes(w) : true;
              })), !_)) throw X;
              return H(W + 1);
            }
          };
          return H();
        },
        retryCount: o,
        retryDelay: c,
        type: "fallback"
      }, {
        onResponse: (w) => v = w,
        transports: g.map((w) => w({
          chain: d,
          retryCount: 0
        }))
      });
      if (n) {
        const w = typeof n == "object" ? n : {};
        es({
          chain: d,
          interval: w.interval ?? l,
          onTransports: (C) => g = C,
          ping: w.ping,
          sampleCount: w.sampleCount,
          timeout: w.timeout,
          transports: g,
          weights: w.weights
        });
      }
      return P;
    });
  }
  function Qr(e) {
    return !!("code" in e && typeof e.code == "number" && (e.code === Hr.code || e.code === zr.code || e.code === Vr.code || qr.nodeMessage.test(e.message) || e.code === 5e3));
  }
  function es({ chain: e, interval: t = 4e3, onTransports: r, ping: s, sampleCount: n = 10, timeout: a = 1e3, transports: o, weights: c = {} }) {
    const { stability: d = 0.7, latency: l = 0.3 } = c, u = [], p = async () => {
      const g = await Promise.all(o.map(async (w) => {
        const C = w({
          chain: e,
          retryCount: 0,
          timeout: a
        }), _ = Date.now();
        let H, W;
        try {
          await (s ? s({
            transport: C
          }) : C.request({
            method: "net_listening"
          })), W = 1;
        } catch {
          W = 0;
        } finally {
          H = Date.now();
        }
        return {
          latency: H - _,
          success: W
        };
      }));
      u.push(g), u.length > n && u.shift();
      const v = Math.max(...u.map((w) => Math.max(...w.map(({ latency: C }) => C)))), P = o.map((w, C) => {
        const _ = u.map((me) => me[C].latency), W = 1 - _.reduce((me, fe) => me + fe, 0) / _.length / v, q = u.map((me) => me[C].success), X = q.reduce((me, fe) => me + fe, 0) / q.length;
        return X === 0 ? [
          0,
          C
        ] : [
          l * W + d * X,
          C
        ];
      }).sort((w, C) => C[0] - w[0]);
      r(P.map(([, w]) => o[w])), await Kr(t), p();
    };
    p();
  }
  const Ir = {
    caipNetworkIdToNumber(e) {
      return e ? Number(e.split(":")[1]) : void 0;
    },
    parseEvmChainId(e) {
      return typeof e == "string" ? this.caipNetworkIdToNumber(e) : e;
    },
    getNetworksByNamespace(e, t) {
      return (e == null ? void 0 : e.filter((r) => r.chainNamespace === t)) || [];
    },
    getFirstNetworkByNamespace(e, t) {
      return this.getNetworksByNamespace(e, t)[0];
    }
  };
  var ts = 20, rs = 1, $e = 1e6, sr = 1e6, ss = -7, ns = 21, as = false, gt = "[big.js] ", Me = gt + "Invalid ", Ut = Me + "decimal places", os = Me + "rounding mode", _r = gt + "Division by zero", F = {}, Ce = void 0, is = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function Sr() {
    function e(t) {
      var r = this;
      if (!(r instanceof e)) return t === Ce ? Sr() : new e(t);
      if (t instanceof e) r.s = t.s, r.e = t.e, r.c = t.c.slice();
      else {
        if (typeof t != "string") {
          if (e.strict === true && typeof t != "bigint") throw TypeError(Me + "value");
          t = t === 0 && 1 / t < 0 ? "-0" : String(t);
        }
        cs(r, t);
      }
      r.constructor = e;
    }
    return e.prototype = F, e.DP = ts, e.RM = rs, e.NE = ss, e.PE = ns, e.strict = as, e.roundDown = 0, e.roundHalfUp = 1, e.roundHalfEven = 2, e.roundUp = 3, e;
  }
  function cs(e, t) {
    var r, s, n;
    if (!is.test(t)) throw Error(Me + "number");
    for (e.s = t.charAt(0) == "-" ? (t = t.slice(1), -1) : 1, (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (s = t.search(/e/i)) > 0 ? (r < 0 && (r = s), r += +t.slice(s + 1), t = t.substring(0, s)) : r < 0 && (r = t.length), n = t.length, s = 0; s < n && t.charAt(s) == "0"; ) ++s;
    if (s == n) e.c = [
      e.e = 0
    ];
    else {
      for (; n > 0 && t.charAt(--n) == "0"; ) ;
      for (e.e = r - s - 1, e.c = [], r = 0; s <= n; ) e.c[r++] = +t.charAt(s++);
    }
    return e;
  }
  function Be(e, t, r, s) {
    var n = e.c;
    if (r === Ce && (r = e.constructor.RM), r !== 0 && r !== 1 && r !== 2 && r !== 3) throw Error(os);
    if (t < 1) s = r === 3 && (s || !!n[0]) || t === 0 && (r === 1 && n[0] >= 5 || r === 2 && (n[0] > 5 || n[0] === 5 && (s || n[1] !== Ce))), n.length = 1, s ? (e.e = e.e - t + 1, n[0] = 1) : n[0] = e.e = 0;
    else if (t < n.length) {
      if (s = r === 1 && n[t] >= 5 || r === 2 && (n[t] > 5 || n[t] === 5 && (s || n[t + 1] !== Ce || n[t - 1] & 1)) || r === 3 && (s || !!n[0]), n.length = t, s) {
        for (; ++n[--t] > 9; ) if (n[t] = 0, t === 0) {
          ++e.e, n.unshift(1);
          break;
        }
      }
      for (t = n.length; !n[--t]; ) n.pop();
    }
    return e;
  }
  function je(e, t, r) {
    var s = e.e, n = e.c.join(""), a = n.length;
    if (t) n = n.charAt(0) + (a > 1 ? "." + n.slice(1) : "") + (s < 0 ? "e" : "e+") + s;
    else if (s < 0) {
      for (; ++s; ) n = "0" + n;
      n = "0." + n;
    } else if (s > 0) if (++s > a) for (s -= a; s--; ) n += "0";
    else s < a && (n = n.slice(0, s) + "." + n.slice(s));
    else a > 1 && (n = n.charAt(0) + "." + n.slice(1));
    return e.s < 0 && r ? "-" + n : n;
  }
  F.abs = function() {
    var e = new this.constructor(this);
    return e.s = 1, e;
  };
  F.cmp = function(e) {
    var t, r = this, s = r.c, n = (e = new r.constructor(e)).c, a = r.s, o = e.s, c = r.e, d = e.e;
    if (!s[0] || !n[0]) return s[0] ? a : n[0] ? -o : 0;
    if (a != o) return a;
    if (t = a < 0, c != d) return c > d ^ t ? 1 : -1;
    for (o = (c = s.length) < (d = n.length) ? c : d, a = -1; ++a < o; ) if (s[a] != n[a]) return s[a] > n[a] ^ t ? 1 : -1;
    return c == d ? 0 : c > d ^ t ? 1 : -1;
  };
  F.div = function(e) {
    var t = this, r = t.constructor, s = t.c, n = (e = new r(e)).c, a = t.s == e.s ? 1 : -1, o = r.DP;
    if (o !== ~~o || o < 0 || o > $e) throw Error(Ut);
    if (!n[0]) throw Error(_r);
    if (!s[0]) return e.s = a, e.c = [
      e.e = 0
    ], e;
    var c, d, l, u, p, g = n.slice(), v = c = n.length, P = s.length, w = s.slice(0, c), C = w.length, _ = e, H = _.c = [], W = 0, q = o + (_.e = t.e - e.e) + 1;
    for (_.s = a, a = q < 0 ? 0 : q, g.unshift(0); C++ < c; ) w.push(0);
    do {
      for (l = 0; l < 10; l++) {
        if (c != (C = w.length)) u = c > C ? 1 : -1;
        else for (p = -1, u = 0; ++p < c; ) if (n[p] != w[p]) {
          u = n[p] > w[p] ? 1 : -1;
          break;
        }
        if (u < 0) {
          for (d = C == c ? n : g; C; ) {
            if (w[--C] < d[C]) {
              for (p = C; p && !w[--p]; ) w[p] = 9;
              --w[p], w[C] += 10;
            }
            w[C] -= d[C];
          }
          for (; !w[0]; ) w.shift();
        } else break;
      }
      H[W++] = u ? l : ++l, w[0] && u ? w[C] = s[v] || 0 : w = [
        s[v]
      ];
    } while ((v++ < P || w[0] !== Ce) && a--);
    return !H[0] && W != 1 && (H.shift(), _.e--, q--), W > q && Be(_, q, r.RM, w[0] !== Ce), _;
  };
  F.eq = function(e) {
    return this.cmp(e) === 0;
  };
  F.gt = function(e) {
    return this.cmp(e) > 0;
  };
  F.gte = function(e) {
    return this.cmp(e) > -1;
  };
  F.lt = function(e) {
    return this.cmp(e) < 0;
  };
  F.lte = function(e) {
    return this.cmp(e) < 1;
  };
  F.minus = F.sub = function(e) {
    var t, r, s, n, a = this, o = a.constructor, c = a.s, d = (e = new o(e)).s;
    if (c != d) return e.s = -d, a.plus(e);
    var l = a.c.slice(), u = a.e, p = e.c, g = e.e;
    if (!l[0] || !p[0]) return p[0] ? e.s = -d : l[0] ? e = new o(a) : e.s = 1, e;
    if (c = u - g) {
      for ((n = c < 0) ? (c = -c, s = l) : (g = u, s = p), s.reverse(), d = c; d--; ) s.push(0);
      s.reverse();
    } else for (r = ((n = l.length < p.length) ? l : p).length, c = d = 0; d < r; d++) if (l[d] != p[d]) {
      n = l[d] < p[d];
      break;
    }
    if (n && (s = l, l = p, p = s, e.s = -e.s), (d = (r = p.length) - (t = l.length)) > 0) for (; d--; ) l[t++] = 0;
    for (d = t; r > c; ) {
      if (l[--r] < p[r]) {
        for (t = r; t && !l[--t]; ) l[t] = 9;
        --l[t], l[r] += 10;
      }
      l[r] -= p[r];
    }
    for (; l[--d] === 0; ) l.pop();
    for (; l[0] === 0; ) l.shift(), --g;
    return l[0] || (e.s = 1, l = [
      g = 0
    ]), e.c = l, e.e = g, e;
  };
  F.mod = function(e) {
    var t, r = this, s = r.constructor, n = r.s, a = (e = new s(e)).s;
    if (!e.c[0]) throw Error(_r);
    return r.s = e.s = 1, t = e.cmp(r) == 1, r.s = n, e.s = a, t ? new s(r) : (n = s.DP, a = s.RM, s.DP = s.RM = 0, r = r.div(e), s.DP = n, s.RM = a, this.minus(r.times(e)));
  };
  F.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, e;
  };
  F.plus = F.add = function(e) {
    var t, r, s, n = this, a = n.constructor;
    if (e = new a(e), n.s != e.s) return e.s = -e.s, n.minus(e);
    var o = n.e, c = n.c, d = e.e, l = e.c;
    if (!c[0] || !l[0]) return l[0] || (c[0] ? e = new a(n) : e.s = n.s), e;
    if (c = c.slice(), t = o - d) {
      for (t > 0 ? (d = o, s = l) : (t = -t, s = c), s.reverse(); t--; ) s.push(0);
      s.reverse();
    }
    for (c.length - l.length < 0 && (s = l, l = c, c = s), t = l.length, r = 0; t; c[t] %= 10) r = (c[--t] = c[t] + l[t] + r) / 10 | 0;
    for (r && (c.unshift(r), ++d), t = c.length; c[--t] === 0; ) c.pop();
    return e.c = c, e.e = d, e;
  };
  F.pow = function(e) {
    var t = this, r = new t.constructor("1"), s = r, n = e < 0;
    if (e !== ~~e || e < -sr || e > sr) throw Error(Me + "exponent");
    for (n && (e = -e); e & 1 && (s = s.times(t)), e >>= 1, !!e; ) t = t.times(t);
    return n ? r.div(s) : s;
  };
  F.prec = function(e, t) {
    if (e !== ~~e || e < 1 || e > $e) throw Error(Me + "precision");
    return Be(new this.constructor(this), e, t);
  };
  F.round = function(e, t) {
    if (e === Ce) e = 0;
    else if (e !== ~~e || e < -$e || e > $e) throw Error(Ut);
    return Be(new this.constructor(this), e + this.e + 1, t);
  };
  F.sqrt = function() {
    var e, t, r, s = this, n = s.constructor, a = s.s, o = s.e, c = new n("0.5");
    if (!s.c[0]) return new n(s);
    if (a < 0) throw Error(gt + "No square root");
    a = Math.sqrt(+je(s, true, true)), a === 0 || a === 1 / 0 ? (t = s.c.join(""), t.length + o & 1 || (t += "0"), a = Math.sqrt(t), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), e = new n((a == 1 / 0 ? "5e" : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + o)) : e = new n(a + ""), o = e.e + (n.DP += 4);
    do
      r = e, e = c.times(r.plus(s.div(r)));
    while (r.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
    return Be(e, (n.DP -= 4) + e.e + 1, n.RM);
  };
  F.times = F.mul = function(e) {
    var t, r = this, s = r.constructor, n = r.c, a = (e = new s(e)).c, o = n.length, c = a.length, d = r.e, l = e.e;
    if (e.s = r.s == e.s ? 1 : -1, !n[0] || !a[0]) return e.c = [
      e.e = 0
    ], e;
    for (e.e = d + l, o < c && (t = n, n = a, a = t, l = o, o = c, c = l), t = new Array(l = o + c); l--; ) t[l] = 0;
    for (d = c; d--; ) {
      for (c = 0, l = o + d; l > d; ) c = t[l] + a[d] * n[l - d - 1] + c, t[l--] = c % 10, c = c / 10 | 0;
      t[l] = c;
    }
    for (c ? ++e.e : t.shift(), d = t.length; !t[--d]; ) t.pop();
    return e.c = t, e;
  };
  F.toExponential = function(e, t) {
    var r = this, s = r.c[0];
    if (e !== Ce) {
      if (e !== ~~e || e < 0 || e > $e) throw Error(Ut);
      for (r = Be(new r.constructor(r), ++e, t); r.c.length < e; ) r.c.push(0);
    }
    return je(r, true, !!s);
  };
  F.toFixed = function(e, t) {
    var r = this, s = r.c[0];
    if (e !== Ce) {
      if (e !== ~~e || e < 0 || e > $e) throw Error(Ut);
      for (r = Be(new r.constructor(r), e + r.e + 1, t), e = e + r.e + 1; r.c.length < e; ) r.c.push(0);
    }
    return je(r, false, !!s);
  };
  F[Symbol.for("nodejs.util.inspect.custom")] = F.toJSON = F.toString = function() {
    var e = this, t = e.constructor;
    return je(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
  };
  F.toNumber = function() {
    var e = +je(this, true, true);
    if (this.constructor.strict === true && !this.eq(e.toString())) throw Error(gt + "Imprecise conversion");
    return e;
  };
  F.toPrecision = function(e, t) {
    var r = this, s = r.constructor, n = r.c[0];
    if (e !== Ce) {
      if (e !== ~~e || e < 1 || e > $e) throw Error(Me + "precision");
      for (r = Be(new s(r), e, t); r.c.length < e; ) r.c.push(0);
    }
    return je(r, e <= r.e || r.e <= s.NE || r.e >= s.PE, !!n);
  };
  F.valueOf = function() {
    var e = this, t = e.constructor;
    if (t.strict === true) throw Error(gt + "valueOf disallowed");
    return je(e, e.e <= t.NE || e.e >= t.PE, true);
  };
  var Qe = Sr();
  const ls = {
    bigNumber(e) {
      return e ? new Qe(e) : new Qe(0);
    },
    multiply(e, t) {
      if (e === void 0 || t === void 0) return new Qe(0);
      const r = new Qe(e), s = new Qe(t);
      return r.times(s);
    },
    formatNumberToLocalString(e, t = 2) {
      return e === void 0 ? "0.00" : typeof e == "number" ? e.toLocaleString("en-US", {
        maximumFractionDigits: t,
        minimumFractionDigits: t
      }) : parseFloat(e).toLocaleString("en-US", {
        maximumFractionDigits: t,
        minimumFractionDigits: t
      });
    },
    parseLocalStringToNumber(e) {
      return e === void 0 ? 0 : parseFloat(e.replace(/,/gu, ""));
    }
  }, ds = [
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
  ], us = [
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
  ], ps = [
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
  var nr = {};
  let hs, Ee, x;
  A = {
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
      SAFE: "safe",
      LEDGER: "ledger",
      OKX: "okx",
      EIP6963: "eip6963",
      AUTH: "ID_AUTH"
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
      BITCOIN: "bip122"
    },
    CHAIN_NAME_MAP: {
      eip155: "EVM Networks",
      solana: "Solana",
      polkadot: "Polkadot",
      bip122: "Bitcoin",
      cosmos: "Cosmos"
    },
    ADAPTER_TYPES: {
      BITCOIN: "bitcoin",
      SOLANA: "solana",
      WAGMI: "wagmi",
      ETHERS: "ethers",
      ETHERS5: "ethers5"
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
    HTTP_STATUS_CODES: {
      SERVICE_UNAVAILABLE: 503,
      FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: "Unknown Network",
    SECURE_SITE_SDK_ORIGIN: (typeof Jr < "u" && typeof nr < "u" ? nr.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org"
  };
  hs = {
    getERC20Abi: (e) => A.USDT_CONTRACT_ADDRESSES.includes(e) ? ps : ds,
    getSwapAbi: () => us
  };
  Ee = {
    validateCaipAddress(e) {
      var _a;
      if (((_a = e.split(":")) == null ? void 0 : _a.length) !== 3) throw new Error("Invalid CAIP Address");
      return e;
    },
    parseCaipAddress(e) {
      const t = e.split(":");
      if (t.length !== 3) throw new Error(`Invalid CAIP-10 address: ${e}`);
      const [r, s, n] = t;
      if (!r || !s || !n) throw new Error(`Invalid CAIP-10 address: ${e}`);
      return {
        chainNamespace: r,
        chainId: s,
        address: n
      };
    },
    parseCaipNetworkId(e) {
      const t = e.split(":");
      if (t.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${e}`);
      const [r, s] = t;
      if (!r || !s) throw new Error(`Invalid CAIP-2 network id: ${e}`);
      return {
        chainNamespace: r,
        chainId: s
      };
    }
  };
  x = {
    WALLET_ID: "@appkit/wallet_id",
    WALLET_NAME: "@appkit/wallet_name",
    SOLANA_WALLET: "@appkit/solana_wallet",
    SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
    ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
    CONNECTED_SOCIAL: "@appkit/connected_social",
    CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
    RECENT_WALLETS: "@appkit/recent_wallets",
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
    CONNECTIONS: "@appkit/connections"
  };
  function $t(e) {
    if (!e) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
    return `@appkit/${e}:connected_connector_id`;
  }
  const S = {
    setItem(e, t) {
      rt() && t !== void 0 && localStorage.setItem(e, t);
    },
    getItem(e) {
      if (rt()) return localStorage.getItem(e) || void 0;
    },
    removeItem(e) {
      rt() && localStorage.removeItem(e);
    },
    clear() {
      rt() && localStorage.clear();
    }
  };
  function rt() {
    return typeof window < "u" && typeof localStorage < "u";
  }
  function Te(e, t) {
    return t === "light" ? {
      "--w3m-accent": (e == null ? void 0 : e["--w3m-accent"]) || "hsla(231, 100%, 70%, 1)",
      "--w3m-background": "#fff"
    } : {
      "--w3m-accent": (e == null ? void 0 : e["--w3m-accent"]) || "hsla(230, 100%, 67%, 1)",
      "--w3m-background": "#121313"
    };
  }
  const fs = Symbol(), ar = Object.getPrototypeOf, zt = /* @__PURE__ */ new WeakMap(), ws = (e) => e && (zt.has(e) ? zt.get(e) : ar(e) === Object.prototype || ar(e) === Array.prototype), gs = (e) => ws(e) && e[fs] || null, or = (e, t = true) => {
    zt.set(e, t);
  }, Tt = {}, Wt = (e) => typeof e == "object" && e !== null, _e = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakSet(), ms = (e = Object.is, t = (l, u) => new Proxy(l, u), r = (l) => Wt(l) && !st.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), s = (l) => {
    switch (l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw l.reason;
      default:
        throw l;
    }
  }, n = /* @__PURE__ */ new WeakMap(), a = (l, u, p = s) => {
    const g = n.get(l);
    if ((g == null ? void 0 : g[0]) === u) return g[1];
    const v = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
    return or(v, true), n.set(l, [
      u,
      v
    ]), Reflect.ownKeys(l).forEach((P) => {
      if (Object.getOwnPropertyDescriptor(v, P)) return;
      const w = Reflect.get(l, P), { enumerable: C } = Reflect.getOwnPropertyDescriptor(l, P), _ = {
        value: w,
        enumerable: C,
        configurable: true
      };
      if (st.has(w)) or(w, false);
      else if (w instanceof Promise) delete _.value, _.get = () => p(w);
      else if (_e.has(w)) {
        const [H, W] = _e.get(w);
        _.value = a(H, W(), p);
      }
      Object.defineProperty(v, P, _);
    }), Object.preventExtensions(v);
  }, o = /* @__PURE__ */ new WeakMap(), c = [
    1,
    1
  ], d = (l) => {
    if (!Wt(l)) throw new Error("object required");
    const u = o.get(l);
    if (u) return u;
    let p = c[0];
    const g = /* @__PURE__ */ new Set(), v = (M, D = ++c[0]) => {
      p !== D && (p = D, g.forEach((U) => U(M, D)));
    };
    let P = c[1];
    const w = (M = ++c[1]) => (P !== M && !g.size && (P = M, _.forEach(([D]) => {
      const U = D[1](M);
      U > p && (p = U);
    })), p), C = (M) => (D, U) => {
      const se = [
        ...D
      ];
      se[1] = [
        M,
        ...se[1]
      ], v(se, U);
    }, _ = /* @__PURE__ */ new Map(), H = (M, D) => {
      if ((Tt ? "production" : void 0) !== "production" && _.has(M)) throw new Error("prop listener already exists");
      if (g.size) {
        const U = D[3](C(M));
        _.set(M, [
          D,
          U
        ]);
      } else _.set(M, [
        D
      ]);
    }, W = (M) => {
      var D;
      const U = _.get(M);
      U && (_.delete(M), (D = U[1]) == null || D.call(U));
    }, q = (M) => (g.add(M), g.size === 1 && _.forEach(([U, se], Fe) => {
      if ((Tt ? "production" : void 0) !== "production" && se) throw new Error("remove already exists");
      const Ze = U[3](C(Fe));
      _.set(Fe, [
        U,
        Ze
      ]);
    }), () => {
      g.delete(M), g.size === 0 && _.forEach(([U, se], Fe) => {
        se && (se(), _.set(Fe, [
          U
        ]));
      });
    }), X = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), fe = t(X, {
      deleteProperty(M, D) {
        const U = Reflect.get(M, D);
        W(D);
        const se = Reflect.deleteProperty(M, D);
        return se && v([
          "delete",
          [
            D
          ],
          U
        ]), se;
      },
      set(M, D, U, se) {
        const Fe = Reflect.has(M, D), Ze = Reflect.get(M, D, se);
        if (Fe && (e(Ze, U) || o.has(U) && e(Ze, o.get(U)))) return true;
        W(D), Wt(U) && (U = gs(U) || U);
        let vt = U;
        if (U instanceof Promise) U.then((Ae) => {
          U.status = "fulfilled", U.value = Ae, v([
            "resolve",
            [
              D
            ],
            Ae
          ]);
        }).catch((Ae) => {
          U.status = "rejected", U.reason = Ae, v([
            "reject",
            [
              D
            ],
            Ae
          ]);
        });
        else {
          !_e.has(U) && r(U) && (vt = d(U));
          const Ae = !st.has(vt) && _e.get(vt);
          Ae && H(D, Ae);
        }
        return Reflect.set(M, D, vt, se), v([
          "set",
          [
            D
          ],
          U,
          Ze
        ]), true;
      }
    });
    o.set(l, fe);
    const Nt = [
      X,
      w,
      a,
      q
    ];
    return _e.set(fe, Nt), Reflect.ownKeys(l).forEach((M) => {
      const D = Object.getOwnPropertyDescriptor(l, M);
      "value" in D && (fe[M] = l[M], delete D.value, delete D.writable), Object.defineProperty(X, M, D);
    }), fe;
  }) => [
    d,
    _e,
    st,
    e,
    t,
    r,
    s,
    n,
    a,
    o,
    c
  ], [Cs] = ms();
  J = function(e = {}) {
    return Cs(e);
  };
  te = function(e, t, r) {
    const s = _e.get(e);
    (Tt ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
    let n;
    const a = [], o = s[3];
    let c = false;
    const l = o((u) => {
      a.push(u), n || (n = Promise.resolve().then(() => {
        n = void 0, c && t(a.splice(0));
      }));
    });
    return c = true, () => {
      c = false, l();
    };
  };
  function ut(e, t) {
    const r = _e.get(e);
    (Tt ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
    const [s, n, a] = r;
    return a(s, n(), t);
  }
  function We(e) {
    return st.add(e), e;
  }
  re = function(e, t, r, s) {
    let n = e[t];
    return te(e, () => {
      const a = e[t];
      Object.is(n, a) || r(n = a);
    });
  };
  function bs(e) {
    const t = J({
      data: Array.from([]),
      has(r) {
        return this.data.some((s) => s[0] === r);
      },
      set(r, s) {
        const n = this.data.find((a) => a[0] === r);
        return n ? n[1] = s : this.data.push([
          r,
          s
        ]), this;
      },
      get(r) {
        var s;
        return (s = this.data.find((n) => n[0] === r)) == null ? void 0 : s[1];
      },
      delete(r) {
        const s = this.data.findIndex((n) => n[0] === r);
        return s === -1 ? false : (this.data.splice(s, 1), true);
      },
      clear() {
        this.data.splice(0);
      },
      get size() {
        return this.data.length;
      },
      toJSON() {
        return new Map(this.data);
      },
      forEach(r) {
        this.data.forEach((s) => {
          r(s[1], s[0], this);
        });
      },
      keys() {
        return this.data.map((r) => r[0]).values();
      },
      values() {
        return this.data.map((r) => r[1]).values();
      },
      entries() {
        return new Map(this.data).entries();
      },
      get [Symbol.toStringTag]() {
        return "Map";
      },
      [Symbol.iterator]() {
        return this.entries();
      }
    });
    return Object.defineProperties(t, {
      data: {
        enumerable: false
      },
      size: {
        enumerable: false
      },
      toJSON: {
        enumerable: false
      }
    }), Object.seal(t), t;
  }
  ee = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    ONE_SEC_MS: 1e3,
    BALANCE_SUPPORTED_CHAINS: [
      "eip155",
      "solana"
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: [
      "eip155"
    ],
    NATIVE_TOKEN_ADDRESS: {
      eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      solana: "So11111111111111111111111111111111111111111",
      polkadot: "0x",
      bip122: "0x",
      cosmos: "0x"
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: {
      MOBILE: "Open and continue in the wallet app"
    },
    SEND_SUPPORTED_NAMESPACES: [
      "eip155",
      "solana"
    ],
    DEFAULT_FEATURES: {
      swaps: true,
      onramp: true,
      receive: true,
      send: true,
      email: true,
      emailShowWallets: true,
      socials: [
        "google",
        "x",
        "discord",
        "farcaster",
        "github",
        "apple",
        "facebook"
      ],
      connectorTypeOrder: [
        "walletConnect",
        "recent",
        "injected",
        "featured",
        "custom",
        "external",
        "recommended"
      ],
      history: true,
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
      pay: false
    },
    DEFAULT_ACCOUNT_TYPES: {
      bip122: "payment",
      eip155: "smartAccount",
      polkadot: "eoa",
      solana: "eoa"
    },
    ADAPTER_TYPES: {
      UNIVERSAL: "universal"
    }
  };
  b = {
    cacheExpiry: {
      portfolio: 3e4,
      nativeBalance: 3e4,
      ens: 3e5,
      identity: 3e5
    },
    isCacheExpired(e, t) {
      return Date.now() - e > t;
    },
    getActiveNetworkProps() {
      const e = b.getActiveNamespace(), t = b.getActiveCaipNetworkId(), r = t ? t.split(":")[1] : void 0, s = r ? isNaN(Number(r)) ? r : Number(r) : void 0;
      return {
        namespace: e,
        caipNetworkId: t,
        chainId: s
      };
    },
    setWalletConnectDeepLink({ name: e, href: t }) {
      try {
        S.setItem(x.DEEPLINK_CHOICE, JSON.stringify({
          href: t,
          name: e
        }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    getWalletConnectDeepLink() {
      try {
        const e = S.getItem(x.DEEPLINK_CHOICE);
        if (e) return JSON.parse(e);
      } catch {
        console.info("Unable to get WalletConnect deep link");
      }
    },
    deleteWalletConnectDeepLink() {
      try {
        S.removeItem(x.DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to delete WalletConnect deep link");
      }
    },
    setActiveNamespace(e) {
      try {
        S.setItem(x.ACTIVE_NAMESPACE, e);
      } catch {
        console.info("Unable to set active namespace");
      }
    },
    setActiveCaipNetworkId(e) {
      try {
        S.setItem(x.ACTIVE_CAIP_NETWORK_ID, e), b.setActiveNamespace(e.split(":")[0]);
      } catch {
        console.info("Unable to set active caip network id");
      }
    },
    getActiveCaipNetworkId() {
      try {
        return S.getItem(x.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to get active caip network id");
        return;
      }
    },
    deleteActiveCaipNetworkId() {
      try {
        S.removeItem(x.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to delete active caip network id");
      }
    },
    deleteConnectedConnectorId(e) {
      try {
        const t = $t(e);
        S.removeItem(t);
      } catch {
        console.info("Unable to delete connected connector id");
      }
    },
    setAppKitRecent(e) {
      try {
        const t = b.getRecentWallets();
        t.find((s) => s.id === e.id) || (t.unshift(e), t.length > 2 && t.pop(), S.setItem(x.RECENT_WALLETS, JSON.stringify(t)));
      } catch {
        console.info("Unable to set AppKit recent");
      }
    },
    getRecentWallets() {
      try {
        const e = S.getItem(x.RECENT_WALLETS);
        return e ? JSON.parse(e) : [];
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return [];
    },
    setConnectedConnectorId(e, t) {
      try {
        const r = $t(e);
        S.setItem(r, t);
      } catch {
        console.info("Unable to set Connected Connector Id");
      }
    },
    getActiveNamespace() {
      try {
        return S.getItem(x.ACTIVE_NAMESPACE);
      } catch {
        console.info("Unable to get active namespace");
      }
    },
    getConnectedConnectorId(e) {
      if (e) try {
        const t = $t(e);
        return S.getItem(t);
      } catch {
        console.info("Unable to get connected connector id in namespace ", e);
      }
    },
    setConnectedSocialProvider(e) {
      try {
        S.setItem(x.CONNECTED_SOCIAL, e);
      } catch {
        console.info("Unable to set connected social provider");
      }
    },
    getConnectedSocialProvider() {
      try {
        return S.getItem(x.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to get connected social provider");
      }
    },
    deleteConnectedSocialProvider() {
      try {
        S.removeItem(x.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to delete connected social provider");
      }
    },
    getConnectedSocialUsername() {
      try {
        return S.getItem(x.CONNECTED_SOCIAL_USERNAME);
      } catch {
        console.info("Unable to get connected social username");
      }
    },
    getStoredActiveCaipNetworkId() {
      var _a, _b2;
      return (_b2 = (_a = S.getItem(x.ACTIVE_CAIP_NETWORK_ID)) == null ? void 0 : _a.split(":")) == null ? void 0 : _b2[1];
    },
    setConnectionStatus(e) {
      try {
        S.setItem(x.CONNECTION_STATUS, e);
      } catch {
        console.info("Unable to set connection status");
      }
    },
    getConnectionStatus() {
      try {
        return S.getItem(x.CONNECTION_STATUS);
      } catch {
        return;
      }
    },
    getConnectedNamespaces() {
      try {
        const e = S.getItem(x.CONNECTED_NAMESPACES);
        return (e == null ? void 0 : e.length) ? e.split(",") : [];
      } catch {
        return [];
      }
    },
    setConnectedNamespaces(e) {
      try {
        const t = Array.from(new Set(e));
        S.setItem(x.CONNECTED_NAMESPACES, t.join(","));
      } catch {
        console.info("Unable to set namespaces in storage");
      }
    },
    addConnectedNamespace(e) {
      try {
        const t = b.getConnectedNamespaces();
        t.includes(e) || (t.push(e), b.setConnectedNamespaces(t));
      } catch {
        console.info("Unable to add connected namespace");
      }
    },
    removeConnectedNamespace(e) {
      try {
        const t = b.getConnectedNamespaces(), r = t.indexOf(e);
        r > -1 && (t.splice(r, 1), b.setConnectedNamespaces(t));
      } catch {
        console.info("Unable to remove connected namespace");
      }
    },
    getTelegramSocialProvider() {
      try {
        return S.getItem(x.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        return console.info("Unable to get telegram social provider"), null;
      }
    },
    setTelegramSocialProvider(e) {
      try {
        S.setItem(x.TELEGRAM_SOCIAL_PROVIDER, e);
      } catch {
        console.info("Unable to set telegram social provider");
      }
    },
    removeTelegramSocialProvider() {
      try {
        S.removeItem(x.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        console.info("Unable to remove telegram social provider");
      }
    },
    getBalanceCache() {
      let e = {};
      try {
        const t = S.getItem(x.PORTFOLIO_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return e;
    },
    removeAddressFromBalanceCache(e) {
      try {
        const t = b.getBalanceCache();
        S.setItem(x.PORTFOLIO_CACHE, JSON.stringify({
          ...t,
          [e]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", e);
      }
    },
    getBalanceCacheForCaipAddress(e) {
      try {
        const r = b.getBalanceCache()[e];
        if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.portfolio)) return r.balance;
        b.removeAddressFromBalanceCache(e);
      } catch {
        console.info("Unable to get balance cache for address", e);
      }
    },
    updateBalanceCache(e) {
      try {
        const t = b.getBalanceCache();
        t[e.caipAddress] = e, S.setItem(x.PORTFOLIO_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update balance cache", e);
      }
    },
    getNativeBalanceCache() {
      let e = {};
      try {
        const t = S.getItem(x.NATIVE_BALANCE_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return e;
    },
    removeAddressFromNativeBalanceCache(e) {
      try {
        const t = b.getBalanceCache();
        S.setItem(x.NATIVE_BALANCE_CACHE, JSON.stringify({
          ...t,
          [e]: void 0
        }));
      } catch {
        console.info("Unable to remove address from balance cache", e);
      }
    },
    getNativeBalanceCacheForCaipAddress(e) {
      try {
        const r = b.getNativeBalanceCache()[e];
        if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.nativeBalance)) return r;
        console.info("Discarding cache for address", e), b.removeAddressFromBalanceCache(e);
      } catch {
        console.info("Unable to get balance cache for address", e);
      }
    },
    updateNativeBalanceCache(e) {
      try {
        const t = b.getNativeBalanceCache();
        t[e.caipAddress] = e, S.setItem(x.NATIVE_BALANCE_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update balance cache", e);
      }
    },
    getEnsCache() {
      let e = {};
      try {
        const t = S.getItem(x.ENS_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get ens name cache");
      }
      return e;
    },
    getEnsFromCacheForAddress(e) {
      try {
        const r = b.getEnsCache()[e];
        if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.ens)) return r.ens;
        b.removeEnsFromCache(e);
      } catch {
        console.info("Unable to get ens name from cache", e);
      }
    },
    updateEnsCache(e) {
      try {
        const t = b.getEnsCache();
        t[e.address] = e, S.setItem(x.ENS_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update ens name cache", e);
      }
    },
    removeEnsFromCache(e) {
      try {
        const t = b.getEnsCache();
        S.setItem(x.ENS_CACHE, JSON.stringify({
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
        const t = S.getItem(x.IDENTITY_CACHE);
        e = t ? JSON.parse(t) : {};
      } catch {
        console.info("Unable to get identity cache");
      }
      return e;
    },
    getIdentityFromCacheForAddress(e) {
      try {
        const r = b.getIdentityCache()[e];
        if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.identity)) return r.identity;
        b.removeIdentityFromCache(e);
      } catch {
        console.info("Unable to get identity from cache", e);
      }
    },
    updateIdentityCache(e) {
      try {
        const t = b.getIdentityCache();
        t[e.address] = {
          identity: e.identity,
          timestamp: e.timestamp
        }, S.setItem(x.IDENTITY_CACHE, JSON.stringify(t));
      } catch {
        console.info("Unable to update identity cache", e);
      }
    },
    removeIdentityFromCache(e) {
      try {
        const t = b.getIdentityCache();
        S.setItem(x.IDENTITY_CACHE, JSON.stringify({
          ...t,
          [e]: void 0
        }));
      } catch {
        console.info("Unable to remove identity from cache", e);
      }
    },
    clearAddressCache() {
      try {
        S.removeItem(x.PORTFOLIO_CACHE), S.removeItem(x.NATIVE_BALANCE_CACHE), S.removeItem(x.ENS_CACHE), S.removeItem(x.IDENTITY_CACHE);
      } catch {
        console.info("Unable to clear address cache");
      }
    },
    setPreferredAccountTypes(e) {
      try {
        S.setItem(x.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
      } catch {
        console.info("Unable to set preferred account types", e);
      }
    },
    getPreferredAccountTypes() {
      try {
        const e = S.getItem(x.PREFERRED_ACCOUNT_TYPES);
        return e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get preferred account types");
      }
      return {};
    },
    setConnections(e, t) {
      try {
        const r = {
          ...b.getConnections(),
          [t]: e
        };
        S.setItem(x.CONNECTIONS, JSON.stringify(r));
      } catch (r) {
        console.error("Unable to sync connections to storage", r);
      }
    },
    getConnections() {
      try {
        const e = S.getItem(x.CONNECTIONS);
        return e ? JSON.parse(e) : {};
      } catch (e) {
        return console.error("Unable to get connections from storage", e), {};
      }
    }
  };
  T = {
    isMobile() {
      var _a;
      return this.isClient() ? !!(((_a = window == null ? void 0 : window.matchMedia("(pointer:coarse)")) == null ? void 0 : _a.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : false;
    },
    checkCaipNetwork(e, t = "") {
      return e == null ? void 0 : e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase());
    },
    isAndroid() {
      if (!this.isMobile()) return false;
      const e = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return T.isMobile() && e.includes("android");
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
      return e ? e - Date.now() <= ee.TEN_SEC_MS : true;
    },
    isAllowedRetry(e, t = ee.ONE_SEC_MS) {
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
    getPairingExpiry() {
      return Date.now() + ee.FOUR_MINUTES_MS;
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
      let r;
      return (...s) => {
        function n() {
          e(...s);
        }
        r && clearTimeout(r), r = setTimeout(n, t);
      };
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    formatNativeUrl(e, t, r = null) {
      if (T.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
      let s = e, n = r;
      s.includes("://") || (s = e.replaceAll("/", "").replaceAll(":", ""), s = `${s}://`), s.endsWith("/") || (s = `${s}/`), n && !(n == null ? void 0 : n.endsWith("/")) && (n = `${n}/`), this.isTelegram() && this.isAndroid() && (t = encodeURIComponent(t));
      const a = encodeURIComponent(t);
      return {
        redirect: `${s}wc?uri=${a}`,
        redirectUniversalLink: n ? `${n}wc?uri=${a}` : void 0,
        href: s
      };
    },
    formatUniversalUrl(e, t) {
      if (!T.isHttpUrl(e)) return this.formatNativeUrl(e, t);
      let r = e;
      r.endsWith("/") || (r = `${r}/`);
      const s = encodeURIComponent(t);
      return {
        redirect: `${r}wc?uri=${s}`,
        href: r
      };
    },
    getOpenTargetForPlatform(e) {
      return e === "popupWindow" ? e : this.isTelegram() ? b.getTelegramSocialProvider() ? "_top" : "_blank" : e;
    },
    openHref(e, t, r) {
      window == null ? void 0 : window.open(e, this.getOpenTargetForPlatform(t), r || "noreferrer noopener");
    },
    returnOpenHref(e, t, r) {
      return window == null ? void 0 : window.open(e, this.getOpenTargetForPlatform(t), r || "noreferrer noopener");
    },
    isTelegram() {
      return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
    },
    isPWA() {
      var _a, _b2, _c;
      if (typeof window > "u") return false;
      const e = (_b2 = (_a = window.matchMedia) == null ? void 0 : _a.call(window, "(display-mode: standalone)")) == null ? void 0 : _b2.matches, t = (_c = window == null ? void 0 : window.navigator) == null ? void 0 : _c.standalone;
      return !!(e || t);
    },
    async preloadImage(e) {
      const t = new Promise((r, s) => {
        const n = new Image();
        n.onload = r, n.onerror = s, n.crossOrigin = "anonymous", n.src = e;
      });
      return Promise.race([
        t,
        T.wait(2e3)
      ]);
    },
    formatBalance(e, t) {
      let r = "0.000";
      if (typeof e == "string") {
        const s = Number(e);
        if (s) {
          const n = Math.floor(s * 1e3) / 1e3;
          n && (r = n.toString());
        }
      }
      return `${r}${t ? ` ${t}` : ""}`;
    },
    formatBalance2(e, t) {
      var _a;
      let r;
      if (e === "0") r = "0";
      else if (typeof e == "string") {
        const s = Number(e);
        s && (r = (_a = s.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : _a[0]);
      }
      return {
        value: r ?? "0",
        rest: r === "0" ? "000" : "",
        symbol: t
      };
    },
    getApiUrl() {
      return A.W3M_API_URL;
    },
    getBlockchainApiUrl() {
      return A.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
      return A.PULSE_API_URL;
    },
    getUUID() {
      return (crypto == null ? void 0 : crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
        const t = Math.random() * 16 | 0;
        return (e === "x" ? t : t & 3 | 8).toString(16);
      });
    },
    parseError(e) {
      var _a, _b2;
      return typeof e == "string" ? e : typeof ((_b2 = (_a = e == null ? void 0 : e.issues) == null ? void 0 : _a[0]) == null ? void 0 : _b2.message) == "string" ? e.issues[0].message : e instanceof Error ? e.message : "Unknown error";
    },
    sortRequestedNetworks(e, t = []) {
      const r = {};
      return t && e && (e.forEach((s, n) => {
        r[s] = n;
      }), t.sort((s, n) => {
        const a = r[s.id], o = r[n.id];
        return a !== void 0 && o !== void 0 ? a - o : a !== void 0 ? -1 : o !== void 0 ? 1 : 0;
      })), t;
    },
    calculateBalance(e) {
      let t = 0;
      for (const r of e) t += r.value ?? 0;
      return t;
    },
    formatTokenBalance(e) {
      const t = e.toFixed(2), [r, s] = t.split(".");
      return {
        dollars: r,
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
        default:
          return false;
      }
    },
    uniqueBy(e, t) {
      const r = /* @__PURE__ */ new Set();
      return e.filter((s) => {
        const n = s[t];
        return r.has(n) ? false : (r.add(n), true);
      });
    },
    generateSdkVersion(e, t, r) {
      const n = e.length === 0 ? ee.ADAPTER_TYPES.UNIVERSAL : e.map((a) => a.adapterType).join(",");
      return `${t}-${n}-${r}`;
    },
    createAccount(e, t, r, s, n) {
      return {
        namespace: e,
        address: t,
        type: r,
        publicKey: s,
        path: n
      };
    },
    isCaipAddress(e) {
      if (typeof e != "string") return false;
      const t = e.split(":"), r = t[0];
      return t.filter(Boolean).length === 3 && r in A.CHAIN_NAME_MAP;
    },
    isMac() {
      const e = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return e.includes("macintosh") && !e.includes("safari");
    },
    formatTelegramSocialLoginUrl(e) {
      const t = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, r = "state=";
      if (new URL(e).host === "auth.magic.link") {
        const n = "provider_authorization_url=", a = e.substring(e.indexOf(n) + n.length), o = this.injectIntoUrl(decodeURIComponent(a), r, t);
        return e.replace(a, encodeURIComponent(o));
      }
      return this.injectIntoUrl(e, r, t);
    },
    injectIntoUrl(e, t, r) {
      const s = e.indexOf(t);
      if (s === -1) throw new Error(`${t} parameter not found in the URL: ${e}`);
      const n = e.indexOf("&", s), a = t.length, o = n !== -1 ? n : e.length, c = e.substring(0, s + a), d = e.substring(s + a, o), l = e.substring(n), u = d + r;
      return c + u + l;
    }
  };
  async function et(...e) {
    const t = await fetch(...e);
    if (!t.ok) throw new Error(`HTTP status code: ${t.status}`, {
      cause: t
    });
    return t;
  }
  class mt {
    constructor({ baseUrl: t, clientId: r }) {
      this.baseUrl = t, this.clientId = r;
    }
    async get({ headers: t, signal: r, cache: s, ...n }) {
      const a = this.createUrl(n);
      return (await et(a, {
        method: "GET",
        headers: t,
        signal: r,
        cache: s
      })).json();
    }
    async getBlob({ headers: t, signal: r, ...s }) {
      const n = this.createUrl(s);
      return (await et(n, {
        method: "GET",
        headers: t,
        signal: r
      })).blob();
    }
    async post({ body: t, headers: r, signal: s, ...n }) {
      const a = this.createUrl(n);
      return (await et(a, {
        method: "POST",
        headers: r,
        body: t ? JSON.stringify(t) : void 0,
        signal: s
      })).json();
    }
    async put({ body: t, headers: r, signal: s, ...n }) {
      const a = this.createUrl(n);
      return (await et(a, {
        method: "PUT",
        headers: r,
        body: t ? JSON.stringify(t) : void 0,
        signal: s
      })).json();
    }
    async delete({ body: t, headers: r, signal: s, ...n }) {
      const a = this.createUrl(n);
      return (await et(a, {
        method: "DELETE",
        headers: r,
        body: t ? JSON.stringify(t) : void 0,
        signal: s
      })).json();
    }
    createUrl({ path: t, params: r }) {
      const s = new URL(t, this.baseUrl);
      return r && Object.entries(r).forEach(([n, a]) => {
        a && s.searchParams.append(n, a);
      }), this.clientId && s.searchParams.append("clientId", this.clientId), s;
    }
  }
  let Ns, E, vs, As, Es, ys, ye, ks;
  Ns = {
    getFeatureValue(e, t) {
      const r = t == null ? void 0 : t[e];
      return r === void 0 ? ee.DEFAULT_FEATURES[e] : r;
    },
    filterSocialsByPlatform(e) {
      if (!e || !e.length) return e;
      if (T.isTelegram()) {
        if (T.isIos()) return e.filter((t) => t !== "google");
        if (T.isMac()) return e.filter((t) => t !== "x");
        if (T.isAndroid()) return e.filter((t) => ![
          "facebook",
          "x"
        ].includes(t));
      }
      return e;
    }
  };
  E = J({
    features: ee.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: ee.DEFAULT_ACCOUNT_TYPES,
    enableNetworkSwitch: true,
    experimental_preferUniversalLinks: false
  });
  h = {
    state: E,
    subscribeKey(e, t) {
      return re(E, e, t);
    },
    setOptions(e) {
      Object.assign(E, e);
    },
    setFeatures(e) {
      if (!e) return;
      E.features || (E.features = ee.DEFAULT_FEATURES);
      const t = {
        ...E.features,
        ...e
      };
      E.features = t, E.features.socials && (E.features.socials = Ns.filterSocialsByPlatform(E.features.socials));
    },
    setProjectId(e) {
      E.projectId = e;
    },
    setCustomRpcUrls(e) {
      E.customRpcUrls = e;
    },
    setAllWallets(e) {
      E.allWallets = e;
    },
    setIncludeWalletIds(e) {
      E.includeWalletIds = e;
    },
    setExcludeWalletIds(e) {
      E.excludeWalletIds = e;
    },
    setFeaturedWalletIds(e) {
      E.featuredWalletIds = e;
    },
    setTokens(e) {
      E.tokens = e;
    },
    setTermsConditionsUrl(e) {
      E.termsConditionsUrl = e;
    },
    setPrivacyPolicyUrl(e) {
      E.privacyPolicyUrl = e;
    },
    setCustomWallets(e) {
      E.customWallets = e;
    },
    setIsSiweEnabled(e) {
      E.isSiweEnabled = e;
    },
    setIsUniversalProvider(e) {
      E.isUniversalProvider = e;
    },
    setSdkVersion(e) {
      E.sdkVersion = e;
    },
    setMetadata(e) {
      E.metadata = e;
    },
    setDisableAppend(e) {
      E.disableAppend = e;
    },
    setEIP6963Enabled(e) {
      E.enableEIP6963 = e;
    },
    setDebug(e) {
      E.debug = e;
    },
    setEnableWalletConnect(e) {
      E.enableWalletConnect = e;
    },
    setEnableWalletGuide(e) {
      E.enableWalletGuide = e;
    },
    setEnableAuthLogger(e) {
      E.enableAuthLogger = e;
    },
    setEnableWallets(e) {
      E.enableWallets = e;
    },
    setPreferUniversalLinks(e) {
      E.experimental_preferUniversalLinks = e;
    },
    setHasMultipleAddresses(e) {
      E.hasMultipleAddresses = e;
    },
    setSIWX(e) {
      E.siwx = e;
    },
    setConnectMethodsOrder(e) {
      E.features = {
        ...E.features,
        connectMethodsOrder: e
      };
    },
    setWalletFeaturesOrder(e) {
      E.features = {
        ...E.features,
        walletFeaturesOrder: e
      };
    },
    setSocialsOrder(e) {
      E.features = {
        ...E.features,
        socials: e
      };
    },
    setCollapseWallets(e) {
      E.features = {
        ...E.features,
        collapseWallets: e
      };
    },
    setEnableEmbedded(e) {
      E.enableEmbedded = e;
    },
    setAllowUnsupportedChain(e) {
      E.allowUnsupportedChain = e;
    },
    setManualWCControl(e) {
      E.manualWCControl = e;
    },
    setEnableNetworkSwitch(e) {
      E.enableNetworkSwitch = e;
    },
    setDefaultAccountTypes(e = {}) {
      Object.entries(e).forEach(([t, r]) => {
        r && (E.defaultAccountTypes[t] = r);
      });
    },
    setUniversalProviderConfigOverride(e) {
      E.universalProviderConfigOverride = e;
    },
    getUniversalProviderConfigOverride() {
      return E.universalProviderConfigOverride;
    },
    getSnapshot() {
      return ut(E);
    }
  };
  vs = Object.freeze({
    enabled: true,
    events: []
  });
  As = new mt({
    baseUrl: T.getAnalyticsUrl(),
    clientId: null
  });
  Es = 5;
  ys = 60 * 1e3;
  ye = J({
    ...vs
  });
  ks = {
    state: ye,
    subscribeKey(e, t) {
      return re(ye, e, t);
    },
    async sendError(e, t) {
      if (!ye.enabled) return;
      const r = Date.now();
      if (ye.events.filter((a) => {
        const o = new Date(a.properties.timestamp || "").getTime();
        return r - o < ys;
      }).length >= Es) return;
      const n = {
        type: "error",
        event: t,
        properties: {
          errorType: e.name,
          errorMessage: e.message,
          stackTrace: e.stack,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
      ye.events.push(n);
      try {
        if (typeof window > "u") return;
        const { projectId: a, sdkType: o, sdkVersion: c } = h.state;
        await As.post({
          path: "/e",
          params: {
            projectId: a,
            st: o,
            sv: c || "html-wagmi-4.2.2"
          },
          body: {
            eventId: T.getUUID(),
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
      } catch (a) {
        console.error("Error sending telemetry event:", a);
      }
    },
    enable() {
      ye.enabled = true;
    },
    disable() {
      ye.enabled = false;
    },
    clearEvents() {
      ye.events = [];
    }
  };
  class pt extends Error {
    constructor(t, r, s) {
      super(t), this.name = "AppKitError", this.category = r, this.originalError = s, Error.captureStackTrace && Error.captureStackTrace(this, pt);
    }
  }
  function ir(e, t) {
    const r = e instanceof pt ? e : new pt(e instanceof Error ? e.message : String(e), t, e);
    throw ks.sendError(r, r.category), r;
  }
  he = function(e, t = "INTERNAL_SDK_ERROR") {
    const r = {};
    return Object.keys(e).forEach((s) => {
      const n = e[s];
      if (typeof n == "function") {
        let a = n;
        n.constructor.name === "AsyncFunction" ? a = async (...o) => {
          try {
            return await n(...o);
          } catch (c) {
            return ir(c, t);
          }
        } : a = (...o) => {
          try {
            return n(...o);
          } catch (c) {
            return ir(c, t);
          }
        }, r[s] = a;
      } else r[s] = n;
    }), r;
  };
  let Is, ie, _s, Ss, Lt, ke, Ts, xs, Os, Ps, be, Mt, Us, ce, Rs, cr, Ds, O, B, $s, Ne, Vt, xr, $, Ws;
  Is = {
    handleMobileDeeplinkRedirect(e) {
      const t = window.location.href, r = encodeURIComponent(t);
      if (e === "Phantom" && !("phantom" in window)) {
        const s = t.startsWith("https") ? "https" : "http", n = t.split("/")[2], a = encodeURIComponent(`${s}://${n}`);
        window.location.href = `https://phantom.app/ul/browse/${r}?ref=${a}`;
      }
      i.state.activeChain === A.CHAIN.SOLANA && e === "Coinbase Wallet" && !("coinbaseSolana" in window) && (window.location.href = `https://go.cb-w.com/dapp?cb_url=${r}`);
    }
  };
  ie = J({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {}
  });
  _s = {
    state: ie,
    subscribeNetworkImages(e) {
      return te(ie.networkImages, () => e(ie.networkImages));
    },
    subscribeKey(e, t) {
      return re(ie, e, t);
    },
    subscribe(e) {
      return te(ie, () => e(ie));
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
  we = he(_s);
  Ss = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
    cosmos: ""
  };
  Lt = J({
    networkImagePromises: {}
  });
  Tr = {
    async fetchWalletImage(e) {
      if (e) return await y._fetchWalletImage(e), this.getWalletImageById(e);
    },
    async fetchNetworkImage(e) {
      if (!e) return;
      const t = this.getNetworkImageById(e);
      return t || (Lt.networkImagePromises[e] || (Lt.networkImagePromises[e] = y._fetchNetworkImage(e)), await Lt.networkImagePromises[e], this.getNetworkImageById(e));
    },
    getWalletImageById(e) {
      if (e) return we.state.walletImages[e];
    },
    getWalletImage(e) {
      if (e == null ? void 0 : e.image_url) return e == null ? void 0 : e.image_url;
      if (e == null ? void 0 : e.image_id) return we.state.walletImages[e.image_id];
    },
    getNetworkImage(e) {
      var _a, _b2, _c;
      if ((_a = e == null ? void 0 : e.assets) == null ? void 0 : _a.imageUrl) return (_b2 = e == null ? void 0 : e.assets) == null ? void 0 : _b2.imageUrl;
      if ((_c = e == null ? void 0 : e.assets) == null ? void 0 : _c.imageId) return we.state.networkImages[e.assets.imageId];
    },
    getNetworkImageById(e) {
      if (e) return we.state.networkImages[e];
    },
    getConnectorImage(e) {
      if (e == null ? void 0 : e.imageUrl) return e.imageUrl;
      if (e == null ? void 0 : e.imageId) return we.state.connectorImages[e.imageId];
    },
    getChainImage(e) {
      return we.state.networkImages[Ss[e]];
    }
  };
  ke = J({
    message: "",
    variant: "info",
    open: false
  });
  Ts = {
    state: ke,
    subscribeKey(e, t) {
      return re(ke, e, t);
    },
    open(e, t) {
      const { debug: r } = h.state, { shortMessage: s, longMessage: n } = e;
      r && (ke.message = s, ke.variant = t, ke.open = true), n && console.error(typeof n == "function" ? n() : n);
    },
    close() {
      ke.open = false, ke.message = "", ke.variant = "info";
    }
  };
  Ve = he(Ts);
  xs = T.getAnalyticsUrl();
  Os = new mt({
    baseUrl: xs,
    clientId: null
  });
  Ps = [
    "MODAL_CREATED"
  ];
  be = J({
    timestamp: Date.now(),
    reportedErrors: {},
    data: {
      type: "track",
      event: "MODAL_CREATED"
    }
  });
  K = {
    state: be,
    subscribe(e) {
      return te(be, () => e(be));
    },
    getSdkProperties() {
      const { projectId: e, sdkType: t, sdkVersion: r } = h.state;
      return {
        projectId: e,
        st: t,
        sv: r || "html-wagmi-4.2.2"
      };
    },
    async _sendAnalyticsEvent(e) {
      try {
        const t = N.state.address;
        if (Ps.includes(e.data.event) || typeof window > "u") return;
        await Os.post({
          path: "/e",
          params: K.getSdkProperties(),
          body: {
            eventId: T.getUUID(),
            url: window.location.href,
            domain: window.location.hostname,
            timestamp: e.timestamp,
            props: {
              ...e.data,
              address: t
            }
          }
        }), be.reportedErrors.FORBIDDEN = false;
      } catch (t) {
        t instanceof Error && t.cause instanceof Response && t.cause.status === A.HTTP_STATUS_CODES.FORBIDDEN && !be.reportedErrors.FORBIDDEN && (Ve.open({
          shortMessage: "Invalid App Configuration",
          longMessage: `Origin ${rt() ? window.origin : "uknown"} not found on Allowlist - update configuration on cloud.reown.com`
        }, "error"), be.reportedErrors.FORBIDDEN = true);
      }
    },
    sendEvent(e) {
      var _a;
      be.timestamp = Date.now(), be.data = e, ((_a = h.state.features) == null ? void 0 : _a.analytics) && K._sendAnalyticsEvent(be);
    }
  };
  Mt = {
    PHANTOM: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    COINBASE: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393"
  };
  Us = T.getApiUrl();
  ce = new mt({
    baseUrl: Us,
    clientId: null
  });
  Rs = 40;
  cr = 4;
  Ds = 20;
  O = J({
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
    isFetchingRecommendedWallets: false
  });
  y = {
    state: O,
    subscribeKey(e, t) {
      return re(O, e, t);
    },
    _getSdkProperties() {
      const { projectId: e, sdkType: t, sdkVersion: r } = h.state;
      return {
        projectId: e,
        st: t || "appkit",
        sv: r || "html-wagmi-4.2.2"
      };
    },
    _filterOutExtensions(e) {
      return h.state.isUniversalProvider ? e.filter((t) => !!(t.mobile_link || t.desktop_link || t.webapp_link)) : e;
    },
    async _fetchWalletImage(e) {
      const t = `${ce.baseUrl}/getWalletImage/${e}`, r = await ce.getBlob({
        path: t,
        params: y._getSdkProperties()
      });
      we.setWalletImage(e, URL.createObjectURL(r));
    },
    async _fetchNetworkImage(e) {
      const t = `${ce.baseUrl}/public/getAssetImage/${e}`, r = await ce.getBlob({
        path: t,
        params: y._getSdkProperties()
      });
      we.setNetworkImage(e, URL.createObjectURL(r));
    },
    async _fetchConnectorImage(e) {
      const t = `${ce.baseUrl}/public/getAssetImage/${e}`, r = await ce.getBlob({
        path: t,
        params: y._getSdkProperties()
      });
      we.setConnectorImage(e, URL.createObjectURL(r));
    },
    async _fetchCurrencyImage(e) {
      const t = `${ce.baseUrl}/public/getCurrencyImage/${e}`, r = await ce.getBlob({
        path: t,
        params: y._getSdkProperties()
      });
      we.setCurrencyImage(e, URL.createObjectURL(r));
    },
    async _fetchTokenImage(e) {
      const t = `${ce.baseUrl}/public/getTokenImage/${e}`, r = await ce.getBlob({
        path: t,
        params: y._getSdkProperties()
      });
      we.setTokenImage(e, URL.createObjectURL(r));
    },
    _filterWalletsByPlatform(e) {
      return T.isMobile() ? e == null ? void 0 : e.filter((r) => r.mobile_link || r.id === Mt.COINBASE || r.id === Mt.PHANTOM && i.state.activeChain === "solana") : e;
    },
    async fetchAllowedOrigins() {
      try {
        const { allowedOrigins: e } = await ce.get({
          path: "/projects/v1/origins",
          params: y._getSdkProperties()
        });
        return e;
      } catch {
        return [];
      }
    },
    async fetchNetworkImages() {
      var _a;
      const t = (_a = i.getAllRequestedCaipNetworks()) == null ? void 0 : _a.map(({ assets: r }) => r == null ? void 0 : r.imageId).filter(Boolean).filter((r) => !Tr.getNetworkImageById(r));
      t && await Promise.allSettled(t.map((r) => y._fetchNetworkImage(r)));
    },
    async fetchConnectorImages() {
      const { connectors: e } = m.state, t = e.map(({ imageId: r }) => r).filter(Boolean);
      await Promise.allSettled(t.map((r) => y._fetchConnectorImage(r)));
    },
    async fetchCurrencyImages(e = []) {
      await Promise.allSettled(e.map((t) => y._fetchCurrencyImage(t)));
    },
    async fetchTokenImages(e = []) {
      await Promise.allSettled(e.map((t) => y._fetchTokenImage(t)));
    },
    async fetchWallets(e) {
      var _a;
      const t = e.exclude ?? [];
      y._getSdkProperties().sv.startsWith("html-core-") && t.push(...Object.values(Mt));
      const s = await ce.get({
        path: "/getWallets",
        params: {
          ...y._getSdkProperties(),
          ...e,
          page: String(e.page),
          entries: String(e.entries),
          include: (_a = e.include) == null ? void 0 : _a.join(","),
          exclude: t.join(",")
        }
      });
      return {
        data: y._filterWalletsByPlatform(s == null ? void 0 : s.data) || [],
        count: s == null ? void 0 : s.count
      };
    },
    async fetchFeaturedWallets() {
      const { featuredWalletIds: e } = h.state;
      if (e == null ? void 0 : e.length) {
        const t = {
          ...y._getSdkProperties(),
          page: 1,
          entries: (e == null ? void 0 : e.length) ?? cr,
          include: e
        }, { data: r } = await y.fetchWallets(t);
        r.sort((n, a) => e.indexOf(n.id) - e.indexOf(a.id));
        const s = r.map((n) => n.image_id).filter(Boolean);
        await Promise.allSettled(s.map((n) => y._fetchWalletImage(n))), O.featured = r, O.allFeatured = r;
      }
    },
    async fetchRecommendedWallets() {
      try {
        O.isFetchingRecommendedWallets = true;
        const { includeWalletIds: e, excludeWalletIds: t, featuredWalletIds: r } = h.state, s = [
          ...t ?? [],
          ...r ?? []
        ].filter(Boolean), n = i.getRequestedCaipNetworkIds().join(","), a = {
          page: 1,
          entries: cr,
          include: e,
          exclude: s,
          chains: n
        }, { data: o, count: c } = await y.fetchWallets(a), d = b.getRecentWallets(), l = o.map((p) => p.image_id).filter(Boolean), u = d.map((p) => p.image_id).filter(Boolean);
        await Promise.allSettled([
          ...l,
          ...u
        ].map((p) => y._fetchWalletImage(p))), O.recommended = o, O.allRecommended = o, O.count = c ?? 0;
      } catch {
      } finally {
        O.isFetchingRecommendedWallets = false;
      }
    },
    async fetchWalletsByPage({ page: e }) {
      const { includeWalletIds: t, excludeWalletIds: r, featuredWalletIds: s } = h.state, n = i.getRequestedCaipNetworkIds().join(","), a = [
        ...O.recommended.map(({ id: u }) => u),
        ...r ?? [],
        ...s ?? []
      ].filter(Boolean), o = {
        page: e,
        entries: Rs,
        include: t,
        exclude: a,
        chains: n
      }, { data: c, count: d } = await y.fetchWallets(o), l = c.slice(0, Ds).map((u) => u.image_id).filter(Boolean);
      await Promise.allSettled(l.map((u) => y._fetchWalletImage(u))), O.wallets = T.uniqueBy([
        ...O.wallets,
        ...y._filterOutExtensions(c)
      ], "id").filter((u) => {
        var _a;
        return (_a = u.chains) == null ? void 0 : _a.some((p) => n.includes(p));
      }), O.count = d > O.count ? d : O.count, O.page = e;
    },
    async initializeExcludedWallets({ ids: e }) {
      const t = {
        page: 1,
        entries: e.length,
        include: e
      }, { data: r } = await y.fetchWallets(t);
      r && r.forEach((s) => {
        O.excludedWallets.push({
          rdns: s.rdns,
          name: s.name
        });
      });
    },
    async searchWallet({ search: e, badge: t }) {
      const { includeWalletIds: r, excludeWalletIds: s } = h.state, n = i.getRequestedCaipNetworkIds().join(",");
      O.search = [];
      const a = {
        page: 1,
        entries: 100,
        search: e == null ? void 0 : e.trim(),
        badge_type: t,
        include: r,
        exclude: s,
        chains: n
      }, { data: o } = await y.fetchWallets(a);
      K.sendEvent({
        type: "track",
        event: "SEARCH_WALLET",
        properties: {
          badge: t ?? "",
          search: e ?? ""
        }
      });
      const c = o.map((d) => d.image_id).filter(Boolean);
      await Promise.allSettled([
        ...c.map((d) => y._fetchWalletImage(d)),
        T.wait(300)
      ]), O.search = y._filterOutExtensions(o);
    },
    initPromise(e, t) {
      const r = O.promises[e];
      return r || (O.promises[e] = t());
    },
    prefetch({ fetchConnectorImages: e = true, fetchFeaturedWallets: t = true, fetchRecommendedWallets: r = true, fetchNetworkImages: s = true } = {}) {
      const n = [
        e && y.initPromise("connectorImages", y.fetchConnectorImages),
        t && y.initPromise("featuredWallets", y.fetchFeaturedWallets),
        r && y.initPromise("recommendedWallets", y.fetchRecommendedWallets),
        s && y.initPromise("networkImages", y.fetchNetworkImages)
      ].filter(Boolean);
      return Promise.allSettled(n);
    },
    prefetchAnalyticsConfig() {
      var _a;
      ((_a = h.state.features) == null ? void 0 : _a.analytics) && y.fetchAnalyticsConfig();
    },
    async fetchAnalyticsConfig() {
      try {
        const { isAnalyticsEnabled: e } = await ce.get({
          path: "/getAnalyticsConfig",
          params: y._getSdkProperties()
        });
        h.setFeatures({
          analytics: e
        });
      } catch {
        h.setFeatures({
          analytics: false
        });
      }
    },
    filterByNamespaces(e) {
      if (!(e == null ? void 0 : e.length)) {
        O.featured = O.allFeatured, O.recommended = O.allRecommended;
        return;
      }
      const t = i.getRequestedCaipNetworkIds().join(",");
      O.featured = O.allFeatured.filter((r) => {
        var _a;
        return (_a = r.chains) == null ? void 0 : _a.some((s) => t.includes(s));
      }), O.recommended = O.allRecommended.filter((r) => {
        var _a;
        return (_a = r.chains) == null ? void 0 : _a.some((s) => t.includes(s));
      }), O.filteredWallets = O.wallets.filter((r) => {
        var _a;
        return (_a = r.chains) == null ? void 0 : _a.some((s) => t.includes(s));
      });
    },
    clearFilterByNamespaces() {
      O.filteredWallets = [];
    },
    setFilterByNamespace(e) {
      if (!e) {
        O.featured = O.allFeatured, O.recommended = O.allRecommended;
        return;
      }
      const t = i.getRequestedCaipNetworkIds().join(",");
      O.featured = O.allFeatured.filter((r) => {
        var _a;
        return (_a = r.chains) == null ? void 0 : _a.some((s) => t.includes(s));
      }), O.recommended = O.allRecommended.filter((r) => {
        var _a;
        return (_a = r.chains) == null ? void 0 : _a.some((s) => t.includes(s));
      }), O.filteredWallets = O.wallets.filter((r) => {
        var _a;
        return (_a = r.chains) == null ? void 0 : _a.some((s) => t.includes(s));
      });
    }
  };
  B = J({
    view: "Connect",
    history: [
      "Connect"
    ],
    transactionStack: []
  });
  $s = {
    state: B,
    subscribeKey(e, t) {
      return re(B, e, t);
    },
    pushTransactionStack(e) {
      B.transactionStack.push(e);
    },
    popTransactionStack(e) {
      var _a, _b2;
      const t = B.transactionStack.pop();
      if (t) if (e) R.goBack(), (_a = t == null ? void 0 : t.onCancel) == null ? void 0 : _a.call(t);
      else {
        if (t.goBack) R.goBack();
        else if (t.replace) {
          const s = B.history.indexOf("ConnectingSiwe");
          s > 0 ? R.goBackToIndex(s - 1) : (G.close(true), B.history = []);
        } else t.view && R.reset(t.view);
        (_b2 = t == null ? void 0 : t.onSuccess) == null ? void 0 : _b2.call(t);
      }
    },
    push(e, t) {
      e !== B.view && (B.view = e, B.history.push(e), B.data = t);
    },
    reset(e, t) {
      B.view = e, B.history = [
        e
      ], B.data = t;
    },
    replace(e, t) {
      B.history.at(-1) === e || (B.view = e, B.history[B.history.length - 1] = e, B.data = t);
    },
    goBack() {
      var _a;
      const e = !i.state.activeCaipAddress && R.state.view === "ConnectingFarcaster";
      if (B.history.length > 1 && !B.history.includes("UnsupportedChain")) {
        B.history.pop();
        const [t] = B.history.slice(-1);
        t && (B.view = t);
      } else G.close();
      ((_a = B.data) == null ? void 0 : _a.wallet) && (B.data.wallet = void 0), setTimeout(() => {
        var _a2, _b2, _c;
        if (e) {
          N.setFarcasterUrl(void 0, i.state.activeChain);
          const t = m.getAuthConnector();
          (_a2 = t == null ? void 0 : t.provider) == null ? void 0 : _a2.reload();
          const r = ut(h.state);
          (_c = (_b2 = t == null ? void 0 : t.provider) == null ? void 0 : _b2.syncDappData) == null ? void 0 : _c.call(_b2, {
            metadata: r.metadata,
            sdkVersion: r.sdkVersion,
            projectId: r.projectId,
            sdkType: r.sdkType
          });
        }
      }, 100);
    },
    goBackToIndex(e) {
      if (B.history.length > 1) {
        B.history = B.history.slice(0, e + 1);
        const [t] = B.history.slice(-1);
        t && (B.view = t);
      }
    }
  };
  R = he($s);
  Ne = J({
    themeMode: "dark",
    themeVariables: {},
    w3mThemeVariables: void 0
  });
  Vt = {
    state: Ne,
    subscribe(e) {
      return te(Ne, () => e(Ne));
    },
    setThemeMode(e) {
      Ne.themeMode = e;
      try {
        const t = m.getAuthConnector();
        if (t) {
          const r = Vt.getSnapshot().themeVariables;
          t.provider.syncTheme({
            themeMode: e,
            themeVariables: r,
            w3mThemeVariables: Te(r, e)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(e) {
      Ne.themeVariables = {
        ...Ne.themeVariables,
        ...e
      };
      try {
        const t = m.getAuthConnector();
        if (t) {
          const r = Vt.getSnapshot().themeVariables;
          t.provider.syncTheme({
            themeVariables: r,
            w3mThemeVariables: Te(Ne.themeVariables, Ne.themeMode)
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return ut(Ne);
    }
  };
  le = he(Vt);
  xr = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0
  };
  $ = J({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: {
      ...xr
    },
    filterByNamespaceMap: {
      eip155: true,
      solana: true,
      polkadot: true,
      bip122: true,
      cosmos: true
    }
  });
  Ws = {
    state: $,
    subscribe(e) {
      return te($, () => {
        e($);
      });
    },
    subscribeKey(e, t) {
      return re($, e, t);
    },
    initialize(e) {
      e.forEach((t) => {
        const r = b.getConnectedConnectorId(t);
        r && m.setConnectorId(r, t);
      });
    },
    setActiveConnector(e) {
      e && ($.activeConnector = We(e));
    },
    setConnectors(e) {
      e.filter((n) => !$.allConnectors.some((a) => a.id === n.id && m.getConnectorName(a.name) === m.getConnectorName(n.name) && a.chain === n.chain)).forEach((n) => {
        n.type !== "MULTI_CHAIN" && $.allConnectors.push(We(n));
      });
      const r = m.getEnabledNamespaces(), s = m.getEnabledConnectors(r);
      $.connectors = m.mergeMultiChainConnectors(s);
    },
    filterByNamespaces(e) {
      Object.keys($.filterByNamespaceMap).forEach((t) => {
        $.filterByNamespaceMap[t] = false;
      }), e.forEach((t) => {
        $.filterByNamespaceMap[t] = true;
      }), m.updateConnectorsForEnabledNamespaces();
    },
    filterByNamespace(e, t) {
      $.filterByNamespaceMap[e] = t, m.updateConnectorsForEnabledNamespaces();
    },
    updateConnectorsForEnabledNamespaces() {
      const e = m.getEnabledNamespaces(), t = m.getEnabledConnectors(e), r = m.areAllNamespacesEnabled();
      $.connectors = m.mergeMultiChainConnectors(t), r ? y.clearFilterByNamespaces() : y.filterByNamespaces(e);
    },
    getEnabledNamespaces() {
      return Object.entries($.filterByNamespaceMap).filter(([e, t]) => t).map(([e]) => e);
    },
    getEnabledConnectors(e) {
      return $.allConnectors.filter((t) => e.includes(t.chain));
    },
    areAllNamespacesEnabled() {
      return Object.values($.filterByNamespaceMap).every((e) => e);
    },
    mergeMultiChainConnectors(e) {
      const t = m.generateConnectorMapByName(e), r = [];
      return t.forEach((s) => {
        const n = s[0], a = (n == null ? void 0 : n.id) === A.CONNECTOR_ID.AUTH;
        s.length > 1 && n ? r.push({
          name: n.name,
          imageUrl: n.imageUrl,
          imageId: n.imageId,
          connectors: [
            ...s
          ],
          type: a ? "AUTH" : "MULTI_CHAIN",
          chain: "eip155",
          id: (n == null ? void 0 : n.id) || ""
        }) : n && r.push(n);
      }), r;
    },
    generateConnectorMapByName(e) {
      const t = /* @__PURE__ */ new Map();
      return e.forEach((r) => {
        const { name: s } = r, n = m.getConnectorName(s);
        if (!n) return;
        const a = t.get(n) || [];
        a.find((c) => c.chain === r.chain) || a.push(r), t.set(n, a);
      }), t;
    },
    getConnectorName(e) {
      return e && ({
        "Trust Wallet": "Trust"
      }[e] || e);
    },
    getUniqueConnectorsByName(e) {
      const t = [];
      return e.forEach((r) => {
        t.find((s) => s.chain === r.chain) || t.push(r);
      }), t;
    },
    addConnector(e) {
      var _a, _b2, _c;
      if (e.id === A.CONNECTOR_ID.AUTH) {
        const t = e, r = ut(h.state), s = le.getSnapshot().themeMode, n = le.getSnapshot().themeVariables;
        (_b2 = (_a = t == null ? void 0 : t.provider) == null ? void 0 : _a.syncDappData) == null ? void 0 : _b2.call(_a, {
          metadata: r.metadata,
          sdkVersion: r.sdkVersion,
          projectId: r.projectId,
          sdkType: r.sdkType
        }), (_c = t == null ? void 0 : t.provider) == null ? void 0 : _c.syncTheme({
          themeMode: s,
          themeVariables: n,
          w3mThemeVariables: Te(n, s)
        }), m.setConnectors([
          e
        ]);
      } else m.setConnectors([
        e
      ]);
    },
    getAuthConnector(e) {
      var _a;
      const t = e || i.state.activeChain, r = $.connectors.find((s) => s.id === A.CONNECTOR_ID.AUTH);
      if (r) return ((_a = r == null ? void 0 : r.connectors) == null ? void 0 : _a.length) ? r.connectors.find((n) => n.chain === t) : r;
    },
    getAnnouncedConnectorRdns() {
      return $.connectors.filter((e) => e.type === "ANNOUNCED").map((e) => {
        var _a;
        return (_a = e.info) == null ? void 0 : _a.rdns;
      });
    },
    getConnectorById(e) {
      return $.allConnectors.find((t) => t.id === e);
    },
    getConnector(e, t) {
      return $.allConnectors.filter((s) => s.chain === i.state.activeChain).find((s) => {
        var _a;
        return s.explorerId === e || ((_a = s.info) == null ? void 0 : _a.rdns) === t;
      });
    },
    syncIfAuthConnector(e) {
      var _a, _b2;
      if (e.id !== "ID_AUTH") return;
      const t = e, r = ut(h.state), s = le.getSnapshot().themeMode, n = le.getSnapshot().themeVariables;
      (_b2 = (_a = t == null ? void 0 : t.provider) == null ? void 0 : _a.syncDappData) == null ? void 0 : _b2.call(_a, {
        metadata: r.metadata,
        sdkVersion: r.sdkVersion,
        sdkType: r.sdkType,
        projectId: r.projectId
      }), t.provider.syncTheme({
        themeMode: s,
        themeVariables: n,
        w3mThemeVariables: Te(n, s)
      });
    },
    getConnectorsByNamespace(e) {
      const t = $.allConnectors.filter((r) => r.chain === e);
      return m.mergeMultiChainConnectors(t);
    },
    selectWalletConnector(e) {
      const t = m.getConnector(e.id, e.rdns);
      Is.handleMobileDeeplinkRedirect((t == null ? void 0 : t.name) || e.name || ""), t ? R.push("ConnectingExternal", {
        connector: t
      }) : R.push("ConnectingWalletConnect", {
        wallet: e
      });
    },
    getConnectors(e) {
      return e ? m.getConnectorsByNamespace(e) : m.mergeMultiChainConnectors($.allConnectors);
    },
    setFilterByNamespace(e) {
      $.filterByNamespace = e, $.connectors = m.getConnectors(e), y.setFilterByNamespace(e);
    },
    setConnectorId(e, t) {
      e && ($.activeConnectorIds = {
        ...$.activeConnectorIds,
        [t]: e
      }, b.setConnectedConnectorId(t, e));
    },
    removeConnectorId(e) {
      $.activeConnectorIds = {
        ...$.activeConnectorIds,
        [e]: void 0
      }, b.deleteConnectedConnectorId(e);
    },
    getConnectorId(e) {
      if (e) return $.activeConnectorIds[e];
    },
    isConnected(e) {
      return e ? !!$.activeConnectorIds[e] : Object.values($.activeConnectorIds).some((t) => !!t);
    },
    resetConnectorIds() {
      $.activeConnectorIds = {
        ...xr
      };
    }
  };
  m = he(Ws);
  function Et(e, t) {
    return m.getConnectorId(e) === t;
  }
  function Ls(e) {
    const t = Array.from(i.state.chains.keys());
    let r = [];
    return e ? (r.push([
      e,
      i.state.chains.get(e)
    ]), Et(e, A.CONNECTOR_ID.WALLET_CONNECT) ? t.forEach((s) => {
      s !== e && Et(s, A.CONNECTOR_ID.WALLET_CONNECT) && r.push([
        s,
        i.state.chains.get(s)
      ]);
    }) : Et(e, A.CONNECTOR_ID.AUTH) && t.forEach((s) => {
      s !== e && Et(s, A.CONNECTOR_ID.AUTH) && r.push([
        s,
        i.state.chains.get(s)
      ]);
    })) : r = Array.from(i.state.chains.entries()), r;
  }
  let ot, Re, Z, Ms, z, Bs, nt, V;
  ot = {
    ACCOUNT_TYPES: {
      SMART_ACCOUNT: "smartAccount"
    }
  };
  Re = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: false,
    autoClose: true
  });
  Z = J({
    ...Re
  });
  Ms = {
    state: Z,
    subscribeKey(e, t) {
      return re(Z, e, t);
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
      const t = T.parseError(e);
      this._showMessage({
        message: t,
        variant: "error"
      });
    },
    hide() {
      Z.message = Re.message, Z.variant = Re.variant, Z.svg = Re.svg, Z.open = Re.open, Z.autoClose = Re.autoClose;
    },
    _showMessage({ message: e, svg: t, variant: r = "success", autoClose: s = Re.autoClose }) {
      Z.open ? (Z.open = false, setTimeout(() => {
        Z.message = e, Z.variant = r, Z.svg = t, Z.open = true, Z.autoClose = s;
      }, 150)) : (Z.message = e, Z.variant = r, Z.svg = t, Z.open = true, Z.autoClose = s);
    }
  };
  ge = Ms;
  it = {
    getSIWX() {
      return h.state.siwx;
    },
    async initializeIfEnabled() {
      var _a;
      const e = h.state.siwx, t = i.getActiveCaipAddress();
      if (!(e && t)) return;
      const [r, s, n] = t.split(":");
      if (i.checkIfSupportedNetwork(r)) try {
        if ((await e.getSessions(`${r}:${s}`, n)).length) return;
        await G.open({
          view: "SIWXSignMessage"
        });
      } catch (a) {
        console.error("SIWXUtil:initializeIfEnabled", a), K.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties()
        }), await ((_a = k._getClient()) == null ? void 0 : _a.disconnect().catch(console.error)), R.reset("Connect"), ge.showError("A problem occurred while trying initialize authentication");
      }
    },
    async requestSignMessage() {
      const e = h.state.siwx, t = T.getPlainAddress(i.getActiveCaipAddress()), r = i.getActiveCaipNetwork(), s = k._getClient();
      if (!e) throw new Error("SIWX is not enabled");
      if (!t) throw new Error("No ActiveCaipAddress found");
      if (!r) throw new Error("No ActiveCaipNetwork or client found");
      if (!s) throw new Error("No ConnectionController client found");
      try {
        const n = await e.createMessage({
          chainId: r.caipNetworkId,
          accountAddress: t
        }), a = n.toString();
        m.getConnectorId(r.chainNamespace) === A.CONNECTOR_ID.AUTH && R.pushTransactionStack({
          view: null,
          goBack: false,
          replace: true
        });
        const c = await s.signMessage(a);
        await e.addSession({
          data: n,
          message: a,
          signature: c
        }), G.close(), K.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: this.getSIWXEventProperties()
        });
      } catch (n) {
        const a = this.getSIWXEventProperties();
        (!G.state.open || R.state.view === "ApproveTransaction") && await G.open({
          view: "SIWXSignMessage"
        }), a.isSmartAccount ? ge.showError("This application might not support Smart Accounts") : ge.showError("Signature declined"), K.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: a
        }), console.error("SWIXUtil:requestSignMessage", n);
      }
    },
    async cancelSignMessage() {
      var _a, _b2;
      try {
        ((_b2 = (_a = this.getSIWX()) == null ? void 0 : _a.getRequired) == null ? void 0 : _b2.call(_a)) ? await k.disconnect() : G.close(), R.reset("Connect"), K.sendEvent({
          event: "CLICK_CANCEL_SIWX",
          type: "track",
          properties: this.getSIWXEventProperties()
        });
      } catch (e) {
        console.error("SIWXUtil:cancelSignMessage", e);
      }
    },
    async getSessions() {
      const e = h.state.siwx, t = T.getPlainAddress(i.getActiveCaipAddress()), r = i.getActiveCaipNetwork();
      return e && t && r ? e.getSessions(r.caipNetworkId, t) : [];
    },
    async isSIWXCloseDisabled() {
      var _a;
      const e = this.getSIWX();
      if (e) {
        const t = R.state.view === "ApproveTransaction", r = R.state.view === "SIWXSignMessage";
        if (t || r) return ((_a = e.getRequired) == null ? void 0 : _a.call(e)) && (await this.getSessions()).length === 0;
      }
      return false;
    },
    async universalProviderAuthenticate({ universalProvider: e, chains: t, methods: r }) {
      var _a, _b2, _c;
      const s = it.getSIWX(), n = new Set(t.map((c) => c.split(":")[0]));
      if (!s || n.size !== 1 || !n.has("eip155")) return false;
      const a = await s.createMessage({
        chainId: ((_a = i.getActiveCaipNetwork()) == null ? void 0 : _a.caipNetworkId) || "",
        accountAddress: ""
      }), o = await e.authenticate({
        nonce: a.nonce,
        domain: a.domain,
        uri: a.uri,
        exp: a.expirationTime,
        iat: a.issuedAt,
        nbf: a.notBefore,
        requestId: a.requestId,
        version: a.version,
        resources: a.resources,
        statement: a.statement,
        chainId: a.chainId,
        methods: r,
        chains: [
          a.chainId,
          ...t.filter((c) => c !== a.chainId)
        ]
      });
      if (ge.showLoading("Authenticating...", {
        autoClose: false
      }), N.setConnectedWalletInfo({
        ...o.session.peer.metadata,
        name: o.session.peer.metadata.name,
        icon: (_b2 = o.session.peer.metadata.icons) == null ? void 0 : _b2[0],
        type: "WALLET_CONNECT"
      }, Array.from(n)[0]), (_c = o == null ? void 0 : o.auths) == null ? void 0 : _c.length) {
        const c = o.auths.map((d) => {
          const l = e.client.formatAuthMessage({
            request: d.p,
            iss: d.p.iss
          });
          return {
            data: {
              ...d.p,
              accountAddress: d.p.iss.split(":").slice(-1).join(""),
              chainId: d.p.iss.split(":").slice(2, 4).join(":"),
              uri: d.p.aud,
              version: d.p.version || a.version,
              expirationTime: d.p.exp,
              issuedAt: d.p.iat,
              notBefore: d.p.nbf
            },
            message: l,
            signature: d.s.s,
            cacao: d
          };
        });
        try {
          await s.setSessions(c), K.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: it.getSIWXEventProperties()
          });
        } catch (d) {
          throw console.error("SIWX:universalProviderAuth - failed to set sessions", d), K.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: it.getSIWXEventProperties()
          }), await e.disconnect().catch(console.error), d;
        } finally {
          ge.hide();
        }
      }
      return true;
    },
    getSIWXEventProperties() {
      var _a, _b2;
      const e = i.state.activeChain;
      return {
        network: ((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || "",
        isSmartAccount: ((_b2 = N.state.preferredAccountTypes) == null ? void 0 : _b2[e]) === ot.ACCOUNT_TYPES.SMART_ACCOUNT
      };
    },
    async clearSessions() {
      const e = this.getSIWX();
      e && await e.setSessions([]);
    }
  };
  z = J({
    transactions: [],
    coinbaseTransactions: {},
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: false,
    empty: false,
    next: void 0
  });
  Bs = {
    state: z,
    subscribe(e) {
      return te(z, () => e(z));
    },
    setLastNetworkInView(e) {
      z.lastNetworkInView = e;
    },
    async fetchTransactions(e, t) {
      var _a, _b2;
      if (!e) throw new Error("Transactions can't be fetched without an accountAddress");
      z.loading = true;
      try {
        const r = await I.fetchTransactions({
          account: e,
          cursor: z.next,
          onramp: t,
          cache: t === "coinbase" ? "no-cache" : void 0,
          chainId: (_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId
        }), s = nt.filterSpamTransactions(r.data), n = nt.filterByConnectedChain(s), a = [
          ...z.transactions,
          ...n
        ];
        z.loading = false, t === "coinbase" ? z.coinbaseTransactions = nt.groupTransactionsByYearAndMonth(z.coinbaseTransactions, r.data) : (z.transactions = a, z.transactionsByYear = nt.groupTransactionsByYearAndMonth(z.transactionsByYear, n)), z.empty = a.length === 0, z.next = r.next ? r.next : void 0;
      } catch {
        const s = i.state.activeChain;
        K.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: e,
            projectId: h.state.projectId,
            cursor: z.next,
            isSmartAccount: ((_b2 = N.state.preferredAccountTypes) == null ? void 0 : _b2[s]) === ot.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        }), ge.showError("Failed to fetch transactions"), z.loading = false, z.empty = true, z.next = void 0;
      }
    },
    groupTransactionsByYearAndMonth(e = {}, t = []) {
      const r = e;
      return t.forEach((s) => {
        const n = new Date(s.metadata.minedAt).getFullYear(), a = new Date(s.metadata.minedAt).getMonth(), o = r[n] ?? {}, d = (o[a] ?? []).filter((l) => l.id !== s.id);
        r[n] = {
          ...o,
          [a]: [
            ...d,
            s
          ].sort((l, u) => new Date(u.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
        };
      }), r;
    },
    filterSpamTransactions(e) {
      return e.filter((t) => !t.transfers.every((s) => {
        var _a;
        return ((_a = s.nft_info) == null ? void 0 : _a.flags.is_spam) === true;
      }));
    },
    filterByConnectedChain(e) {
      var _a;
      const t = (_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
      return e.filter((s) => s.metadata.chain === t);
    },
    clearCursor() {
      z.next = void 0;
    },
    resetTransactions() {
      z.transactions = [], z.transactionsByYear = {}, z.lastNetworkInView = void 0, z.loading = false, z.empty = false, z.next = void 0;
    }
  };
  nt = he(Bs, "API_ERROR");
  V = J({
    connections: /* @__PURE__ */ new Map(),
    wcError: false,
    buffering: false,
    status: "disconnected"
  });
  let Pe;
  let js, He, ve, Bt, lr, j, Fs, L, jt, yt, f, Hs, zs, Or, ne, I, de, Vs, ae, qs, dr, Ks, ue, Js, ct, Ie, xt, Jt;
  js = {
    state: V,
    subscribeKey(e, t) {
      return re(V, e, t);
    },
    _getClient() {
      return V._client;
    },
    setClient(e) {
      V._client = We(e);
    },
    async connectWalletConnect() {
      var _a, _b2, _c, _d;
      if (T.isTelegram() || T.isSafari() && T.isIos()) {
        if (Pe) {
          await Pe, Pe = void 0;
          return;
        }
        if (!T.isPairingExpired(V == null ? void 0 : V.wcPairingExpiry)) {
          const e = V.wcUri;
          V.wcUri = e;
          return;
        }
        Pe = (_b2 = (_a = k._getClient()) == null ? void 0 : _a.connectWalletConnect) == null ? void 0 : _b2.call(_a).catch(() => {
        }), k.state.status = "connecting", await Pe, Pe = void 0, V.wcPairingExpiry = void 0, k.state.status = "connected";
      } else await ((_d = (_c = k._getClient()) == null ? void 0 : _c.connectWalletConnect) == null ? void 0 : _d.call(_c));
    },
    async connectExternal(e, t, r = true) {
      var _a, _b2;
      await ((_b2 = (_a = k._getClient()) == null ? void 0 : _a.connectExternal) == null ? void 0 : _b2.call(_a, e)), r && i.setActiveNamespace(t);
    },
    async reconnectExternal(e) {
      var _a, _b2;
      await ((_b2 = (_a = k._getClient()) == null ? void 0 : _a.reconnectExternal) == null ? void 0 : _b2.call(_a, e));
      const t = e.chain || i.state.activeChain;
      t && m.setConnectorId(e.id, t);
    },
    async setPreferredAccountType(e, t) {
      var _a;
      G.setLoading(true, i.state.activeChain);
      const r = m.getAuthConnector();
      r && (N.setPreferredAccountType(e, t), await r.provider.setPreferredAccount(e), b.setPreferredAccountTypes(N.state.preferredAccountTypes ?? {
        [t]: e
      }), await k.reconnectExternal(r), G.setLoading(false, i.state.activeChain), K.sendEvent({
        type: "track",
        event: "SET_PREFERRED_ACCOUNT_TYPE",
        properties: {
          accountType: e,
          network: ((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || ""
        }
      }));
    },
    async signMessage(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.signMessage(e);
    },
    parseUnits(e, t) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.parseUnits(e, t);
    },
    formatUnits(e, t) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.formatUnits(e, t);
    },
    async sendTransaction(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.sendTransaction(e);
    },
    async getCapabilities(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.getCapabilities(e);
    },
    async grantPermissions(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.grantPermissions(e);
    },
    async walletGetAssets(e) {
      var _a;
      return ((_a = k._getClient()) == null ? void 0 : _a.walletGetAssets(e)) ?? {};
    },
    async estimateGas(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.estimateGas(e);
    },
    async writeContract(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.writeContract(e);
    },
    async getEnsAddress(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.getEnsAddress(e);
    },
    async getEnsAvatar(e) {
      var _a;
      return (_a = k._getClient()) == null ? void 0 : _a.getEnsAvatar(e);
    },
    checkInstalled(e) {
      var _a, _b2;
      return ((_b2 = (_a = k._getClient()) == null ? void 0 : _a.checkInstalled) == null ? void 0 : _b2.call(_a, e)) || false;
    },
    resetWcConnection() {
      V.wcUri = void 0, V.wcPairingExpiry = void 0, V.wcLinking = void 0, V.recentWallet = void 0, V.status = "disconnected", nt.resetTransactions(), b.deleteWalletConnectDeepLink();
    },
    resetUri() {
      V.wcUri = void 0, V.wcPairingExpiry = void 0, Pe = void 0;
    },
    finalizeWcConnection() {
      var _a, _b2;
      const { wcLinking: e, recentWallet: t } = k.state;
      e && b.setWalletConnectDeepLink(e), t && b.setAppKitRecent(t), K.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: {
          method: e ? "mobile" : "qrcode",
          name: ((_b2 = (_a = R.state.data) == null ? void 0 : _a.wallet) == null ? void 0 : _b2.name) || "Unknown"
        }
      });
    },
    setWcBasic(e) {
      V.wcBasic = e;
    },
    setUri(e) {
      V.wcUri = e, V.wcPairingExpiry = T.getPairingExpiry();
    },
    setWcLinking(e) {
      V.wcLinking = e;
    },
    setWcError(e) {
      V.wcError = e, V.buffering = false;
    },
    setRecentWallet(e) {
      V.recentWallet = e;
    },
    setBuffering(e) {
      V.buffering = e;
    },
    setStatus(e) {
      V.status = e;
    },
    async disconnect(e) {
      try {
        G.setLoading(true, e), await it.clearSessions(), await i.disconnect(e), G.setLoading(false, e), m.setFilterByNamespace(void 0);
      } catch (t) {
        throw new pt("Failed to disconnect", "INTERNAL_SDK_ERROR", t);
      }
    },
    setConnections(e, t) {
      V.connections.set(t, e);
    },
    switchAccount({ connection: e, address: t, namespace: r }) {
      if (m.state.activeConnectorIds[r] === e.connectorId) {
        const a = i.state.activeCaipNetwork;
        if (a) {
          const o = `${r}:${a.id}:${t}`;
          N.setCaipAddress(o, r);
        } else console.warn(`No current network found for namespace "${r}"`);
      } else {
        const a = m.getConnector(e.connectorId);
        a ? k.connectExternal(a, r) : console.warn(`No connector found for namespace "${r}"`);
      }
    }
  };
  k = he(js);
  He = J({
    loading: false,
    open: false,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: false
  });
  ve = {
    state: He,
    subscribe(e) {
      return te(He, () => e(He));
    },
    subscribeOpen(e) {
      return re(He, "open", e);
    },
    set(e) {
      Object.assign(He, {
        ...He,
        ...e
      });
    }
  };
  Bt = {
    createBalance(e, t) {
      const r = {
        name: e.metadata.name || "",
        symbol: e.metadata.symbol || "",
        decimals: e.metadata.decimals || 0,
        value: e.metadata.value || 0,
        price: e.metadata.price || 0,
        iconUrl: e.metadata.iconUrl || ""
      };
      return {
        name: r.name,
        symbol: r.symbol,
        chainId: t,
        address: e.address === "native" ? void 0 : this.convertAddressToCAIP10Address(e.address, t),
        value: r.value,
        price: r.price,
        quantity: {
          decimals: r.decimals.toString(),
          numeric: this.convertHexToBalance({
            hex: e.balance,
            decimals: r.decimals
          })
        },
        iconUrl: r.iconUrl
      };
    },
    convertHexToBalance({ hex: e, decimals: t }) {
      return Yr(BigInt(e), t);
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
      const r = t[1], s = parseInt(r, 10);
      return isNaN(s) ? "0x0" : `0x${s.toString(16)}`;
    },
    isWalletGetAssetsResponse(e) {
      return typeof e != "object" || e === null ? false : Object.values(e).every((t) => Array.isArray(t) && t.every((r) => this.isValidAsset(r)));
    },
    isValidAsset(e) {
      return typeof e == "object" && e !== null && typeof e.address == "string" && typeof e.balance == "string" && (e.type === "ERC20" || e.type === "NATIVE") && typeof e.metadata == "object" && e.metadata !== null && typeof e.metadata.name == "string" && typeof e.metadata.symbol == "string" && typeof e.metadata.decimals == "number" && typeof e.metadata.price == "number" && typeof e.metadata.iconUrl == "string";
    }
  };
  lr = {
    async getMyTokensWithBalance(e) {
      const t = N.state.address, r = i.state.activeCaipNetwork;
      if (!t || !r) return [];
      if (r.chainNamespace === "eip155") {
        const n = await this.getEIP155Balances(t, r);
        if (n) return this.filterLowQualityTokens(n);
      }
      const s = await I.getBalance(t, r.caipNetworkId, e);
      return this.filterLowQualityTokens(s.balances);
    },
    async getEIP155Balances(e, t) {
      var _a, _b2, _c;
      try {
        const r = Bt.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);
        if (!((_c = (_b2 = (_a = await k.getCapabilities(e)) == null ? void 0 : _a[r]) == null ? void 0 : _b2.assetDiscovery) == null ? void 0 : _c.supported)) return null;
        const n = await k.walletGetAssets({
          account: e,
          chainFilter: [
            r
          ]
        });
        return Bt.isWalletGetAssetsResponse(n) ? (n[r] || []).map((o) => Bt.createBalance(o, t.caipNetworkId)) : null;
      } catch {
        return null;
      }
    },
    filterLowQualityTokens(e) {
      return e.filter((t) => t.quantity.decimals !== "0");
    },
    mapBalancesToSwapTokens(e) {
      return (e == null ? void 0 : e.map((t) => ({
        ...t,
        address: (t == null ? void 0 : t.address) ? t.address : i.getActiveNetworkTokenAddress(),
        decimals: parseInt(t.quantity.decimals, 10),
        logoUri: t.iconUrl,
        eip2612: false
      }))) || [];
    }
  };
  j = J({
    tokenBalances: [],
    loading: false
  });
  Fs = {
    state: j,
    subscribe(e) {
      return te(j, () => e(j));
    },
    subscribeKey(e, t) {
      return re(j, e, t);
    },
    setToken(e) {
      e && (j.token = We(e));
    },
    setTokenAmount(e) {
      j.sendTokenAmount = e;
    },
    setReceiverAddress(e) {
      j.receiverAddress = e;
    },
    setReceiverProfileImageUrl(e) {
      j.receiverProfileImageUrl = e;
    },
    setReceiverProfileName(e) {
      j.receiverProfileName = e;
    },
    setNetworkBalanceInUsd(e) {
      j.networkBalanceInUSD = e;
    },
    setLoading(e) {
      j.loading = e;
    },
    async sendToken() {
      var _a;
      try {
        switch (L.setLoading(true), (_a = i.state.activeCaipNetwork) == null ? void 0 : _a.chainNamespace) {
          case "eip155":
            await L.sendEvmToken();
            return;
          case "solana":
            await L.sendSolanaToken();
            return;
          default:
            throw new Error("Unsupported chain");
        }
      } finally {
        L.setLoading(false);
      }
    },
    async sendEvmToken() {
      var _a, _b2, _c, _d;
      const e = i.state.activeChain, t = (_a = N.state.preferredAccountTypes) == null ? void 0 : _a[e];
      if (!L.state.sendTokenAmount || !L.state.receiverAddress) throw new Error("An amount and receiver address are required");
      if (!L.state.token) throw new Error("A token is required");
      ((_b2 = L.state.token) == null ? void 0 : _b2.address) ? (K.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: t === ot.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: L.state.token.address,
          amount: L.state.sendTokenAmount,
          network: ((_c = i.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || ""
        }
      }), await L.sendERC20Token({
        receiverAddress: L.state.receiverAddress,
        tokenAddress: L.state.token.address,
        sendTokenAmount: L.state.sendTokenAmount,
        decimals: L.state.token.quantity.decimals
      })) : (K.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: t === ot.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: L.state.token.symbol || "",
          amount: L.state.sendTokenAmount,
          network: ((_d = i.state.activeCaipNetwork) == null ? void 0 : _d.caipNetworkId) || ""
        }
      }), await L.sendNativeToken({
        receiverAddress: L.state.receiverAddress,
        sendTokenAmount: L.state.sendTokenAmount,
        decimals: L.state.token.quantity.decimals
      }));
    },
    async fetchTokenBalance(e) {
      var _a, _b2;
      j.loading = true;
      const t = (_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId, r = (_b2 = i.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, s = i.state.activeCaipAddress, n = s ? T.getPlainAddress(s) : void 0;
      if (j.lastRetry && !T.isAllowedRetry(j.lastRetry, 30 * ee.ONE_SEC_MS)) return j.loading = false, [];
      try {
        if (n && t && r) {
          const a = await lr.getMyTokensWithBalance();
          return j.tokenBalances = a, j.lastRetry = void 0, a;
        }
      } catch (a) {
        j.lastRetry = Date.now(), e == null ? void 0 : e(a), ge.showError("Token Balance Unavailable");
      } finally {
        j.loading = false;
      }
      return [];
    },
    fetchNetworkBalance() {
      if (j.tokenBalances.length === 0) return;
      const e = lr.mapBalancesToSwapTokens(j.tokenBalances);
      if (!e) return;
      const t = e.find((r) => r.address === i.getActiveNetworkTokenAddress());
      t && (j.networkBalanceInUSD = t ? ls.multiply(t.quantity.numeric, t.price).toString() : "0");
    },
    async sendNativeToken(e) {
      var _a, _b2, _c, _d;
      R.pushTransactionStack({
        view: null,
        goBack: false
      });
      const t = e.receiverAddress, r = N.state.address, s = k.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals));
      await k.sendTransaction({
        chainNamespace: "eip155",
        to: t,
        address: r,
        data: "0x",
        value: s ?? BigInt(0)
      }), K.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: ((_a = N.state.preferredAccountTypes) == null ? void 0 : _a.eip155) === ot.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_b2 = L.state.token) == null ? void 0 : _b2.symbol) || "",
          amount: e.sendTokenAmount,
          network: ((_c = i.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || ""
        }
      }), (_d = k._getClient()) == null ? void 0 : _d.updateBalance("eip155"), L.resetSend();
    },
    async sendERC20Token(e) {
      R.pushTransactionStack({
        view: "Account",
        goBack: false
      });
      const t = k.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals));
      if (N.state.address && e.sendTokenAmount && e.receiverAddress && e.tokenAddress) {
        const r = T.getPlainAddress(e.tokenAddress);
        await k.writeContract({
          fromAddress: N.state.address,
          tokenAddress: r,
          args: [
            e.receiverAddress,
            t ?? BigInt(0)
          ],
          method: "transfer",
          abi: hs.getERC20Abi(r),
          chainNamespace: "eip155"
        }), L.resetSend();
      }
    },
    async sendSolanaToken() {
      var _a;
      if (!L.state.sendTokenAmount || !L.state.receiverAddress) throw new Error("An amount and receiver address are required");
      R.pushTransactionStack({
        view: "Account",
        goBack: false
      }), await k.sendTransaction({
        chainNamespace: "solana",
        to: L.state.receiverAddress,
        value: L.state.sendTokenAmount
      }), (_a = k._getClient()) == null ? void 0 : _a.updateBalance("solana"), L.resetSend();
    },
    resetSend() {
      j.token = void 0, j.sendTokenAmount = void 0, j.receiverAddress = void 0, j.receiverProfileImageUrl = void 0, j.receiverProfileName = void 0, j.loading = false, j.tokenBalances = [];
    }
  };
  L = he(Fs);
  jt = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    allAccounts: [],
    user: void 0
  };
  yt = {
    caipNetwork: void 0,
    supportsAllNetworks: true,
    smartAccountEnabledNetworks: []
  };
  f = J({
    chains: bs(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: false,
    universalAdapter: {
      networkControllerClient: void 0,
      connectionControllerClient: void 0
    },
    isSwitchingNamespace: false
  });
  Hs = {
    state: f,
    subscribe(e) {
      return te(f, () => {
        e(f);
      });
    },
    subscribeKey(e, t) {
      return re(f, e, t);
    },
    subscribeChainProp(e, t, r) {
      let s;
      return te(f.chains, () => {
        var _a;
        const n = r || f.activeChain;
        if (n) {
          const a = (_a = f.chains.get(n)) == null ? void 0 : _a[e];
          s !== a && (s = a, t(a));
        }
      });
    },
    initialize(e, t, r) {
      const { chainId: s, namespace: n } = b.getActiveNetworkProps(), a = t == null ? void 0 : t.find((u) => u.id.toString() === (s == null ? void 0 : s.toString())), c = e.find((u) => (u == null ? void 0 : u.namespace) === n) || (e == null ? void 0 : e[0]), d = e.map((u) => u.namespace).filter((u) => u !== void 0), l = h.state.enableEmbedded ? /* @__PURE__ */ new Set([
        ...d
      ]) : /* @__PURE__ */ new Set([
        ...(t == null ? void 0 : t.map((u) => u.chainNamespace)) ?? []
      ]);
      ((e == null ? void 0 : e.length) === 0 || !c) && (f.noAdapters = true), f.noAdapters || (f.activeChain = c == null ? void 0 : c.namespace, f.activeCaipNetwork = a, i.setChainNetworkData(c == null ? void 0 : c.namespace, {
        caipNetwork: a
      }), f.activeChain && ve.set({
        activeChain: c == null ? void 0 : c.namespace
      })), l.forEach((u) => {
        const p = t == null ? void 0 : t.filter((g) => g.chainNamespace === u);
        i.state.chains.set(u, {
          namespace: u,
          networkState: J({
            ...yt,
            caipNetwork: p == null ? void 0 : p[0]
          }),
          accountState: J(jt),
          caipNetworks: p ?? [],
          ...r
        }), i.setRequestedCaipNetworks(p ?? [], u);
      });
    },
    removeAdapter(e) {
      var _a, _b2;
      if (f.activeChain === e) {
        const t = Array.from(f.chains.entries()).find(([r]) => r !== e);
        if (t) {
          const r = (_b2 = (_a = t[1]) == null ? void 0 : _a.caipNetworks) == null ? void 0 : _b2[0];
          r && i.setActiveCaipNetwork(r);
        }
      }
      f.chains.delete(e);
    },
    addAdapter(e, { networkControllerClient: t, connectionControllerClient: r }, s) {
      f.chains.set(e.namespace, {
        namespace: e.namespace,
        networkState: {
          ...yt,
          caipNetwork: s[0]
        },
        accountState: jt,
        caipNetworks: s,
        connectionControllerClient: r,
        networkControllerClient: t
      }), i.setRequestedCaipNetworks((s == null ? void 0 : s.filter((n) => n.chainNamespace === e.namespace)) ?? [], e.namespace);
    },
    addNetwork(e) {
      var _a;
      const t = f.chains.get(e.chainNamespace);
      if (t) {
        const r = [
          ...t.caipNetworks || []
        ];
        ((_a = t.caipNetworks) == null ? void 0 : _a.find((s) => s.id === e.id)) || r.push(e), f.chains.set(e.chainNamespace, {
          ...t,
          caipNetworks: r
        }), i.setRequestedCaipNetworks(r, e.chainNamespace), m.filterByNamespace(e.chainNamespace, true);
      }
    },
    removeNetwork(e, t) {
      var _a, _b2, _c;
      const r = f.chains.get(e);
      if (r) {
        const s = ((_a = f.activeCaipNetwork) == null ? void 0 : _a.id) === t, n = [
          ...((_b2 = r.caipNetworks) == null ? void 0 : _b2.filter((a) => a.id !== t)) || []
        ];
        s && ((_c = r == null ? void 0 : r.caipNetworks) == null ? void 0 : _c[0]) && i.setActiveCaipNetwork(r.caipNetworks[0]), f.chains.set(e, {
          ...r,
          caipNetworks: n
        }), i.setRequestedCaipNetworks(n || [], e), n.length === 0 && m.filterByNamespace(e, false);
      }
    },
    setAdapterNetworkState(e, t) {
      const r = f.chains.get(e);
      r && (r.networkState = {
        ...r.networkState || yt,
        ...t
      }, f.chains.set(e, r));
    },
    setChainAccountData(e, t, r = true) {
      if (!e) throw new Error("Chain is required to update chain account data");
      const s = f.chains.get(e);
      if (s) {
        const n = {
          ...s.accountState || jt,
          ...t
        };
        f.chains.set(e, {
          ...s,
          accountState: n
        }), (f.chains.size === 1 || f.activeChain === e) && (t.caipAddress && (f.activeCaipAddress = t.caipAddress), N.replaceState(n));
      }
    },
    setChainNetworkData(e, t) {
      if (!e) return;
      const r = f.chains.get(e);
      if (r) {
        const s = {
          ...r.networkState || yt,
          ...t
        };
        f.chains.set(e, {
          ...r,
          networkState: s
        });
      }
    },
    setAccountProp(e, t, r, s = true) {
      i.setChainAccountData(r, {
        [e]: t
      }, s), e === "status" && t === "disconnected" && r && m.removeConnectorId(r);
    },
    setActiveNamespace(e) {
      var _a, _b2;
      f.activeChain = e;
      const t = e ? f.chains.get(e) : void 0, r = (_a = t == null ? void 0 : t.networkState) == null ? void 0 : _a.caipNetwork;
      (r == null ? void 0 : r.id) && e && (f.activeCaipAddress = (_b2 = t == null ? void 0 : t.accountState) == null ? void 0 : _b2.caipAddress, f.activeCaipNetwork = r, i.setChainNetworkData(e, {
        caipNetwork: r
      }), b.setActiveCaipNetworkId(r == null ? void 0 : r.caipNetworkId), ve.set({
        activeChain: e,
        selectedNetworkId: r == null ? void 0 : r.caipNetworkId
      }));
    },
    setActiveCaipNetwork(e) {
      var _a, _b2, _c;
      if (!e) return;
      f.activeChain !== e.chainNamespace && i.setIsSwitchingNamespace(true);
      const t = f.chains.get(e.chainNamespace);
      f.activeChain = e.chainNamespace, f.activeCaipNetwork = e, i.setChainNetworkData(e.chainNamespace, {
        caipNetwork: e
      }), ((_a = t == null ? void 0 : t.accountState) == null ? void 0 : _a.address) ? f.activeCaipAddress = `${e.chainNamespace}:${e.id}:${(_b2 = t == null ? void 0 : t.accountState) == null ? void 0 : _b2.address}` : f.activeCaipAddress = void 0, i.setAccountProp("caipAddress", f.activeCaipAddress, e.chainNamespace), t && N.replaceState(t.accountState), L.resetSend(), ve.set({
        activeChain: f.activeChain,
        selectedNetworkId: (_c = f.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId
      }), b.setActiveCaipNetworkId(e.caipNetworkId), !i.checkIfSupportedNetwork(e.chainNamespace) && h.state.enableNetworkSwitch && !h.state.allowUnsupportedChain && !k.state.wcBasic && i.showUnsupportedChainUI();
    },
    addCaipNetwork(e) {
      var _a;
      if (!e) return;
      const t = f.chains.get(e.chainNamespace);
      t && ((_a = t == null ? void 0 : t.caipNetworks) == null ? void 0 : _a.push(e));
    },
    async switchActiveNamespace(e) {
      var _a;
      if (!e) return;
      const t = e !== i.state.activeChain, r = (_a = i.getNetworkData(e)) == null ? void 0 : _a.caipNetwork, s = i.getCaipNetworkByNamespace(e, r == null ? void 0 : r.id);
      t && s && await i.switchActiveNetwork(s);
    },
    async switchActiveNetwork(e) {
      var _a, _b2;
      !((_b2 = (_a = i.state.chains.get(i.state.activeChain)) == null ? void 0 : _a.caipNetworks) == null ? void 0 : _b2.some((n) => {
        var _a2;
        return n.id === ((_a2 = f.activeCaipNetwork) == null ? void 0 : _a2.id);
      })) && R.goBack();
      const s = i.getNetworkControllerClient(e.chainNamespace);
      s && (await s.switchCaipNetwork(e), K.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: {
          network: e.caipNetworkId
        }
      }));
    },
    getNetworkControllerClient(e) {
      const t = e || f.activeChain, r = f.chains.get(t);
      if (!r) throw new Error("Chain adapter not found");
      if (!r.networkControllerClient) throw new Error("NetworkController client not set");
      return r.networkControllerClient;
    },
    getConnectionControllerClient(e) {
      const t = e || f.activeChain;
      if (!t) throw new Error("Chain is required to get connection controller client");
      const r = f.chains.get(t);
      if (!(r == null ? void 0 : r.connectionControllerClient)) throw new Error("ConnectionController client not set");
      return r.connectionControllerClient;
    },
    getAccountProp(e, t) {
      var _a;
      let r = f.activeChain;
      if (t && (r = t), !r) return;
      const s = (_a = f.chains.get(r)) == null ? void 0 : _a.accountState;
      if (s) return s[e];
    },
    getNetworkProp(e, t) {
      var _a;
      const r = (_a = f.chains.get(t)) == null ? void 0 : _a.networkState;
      if (r) return r[e];
    },
    getRequestedCaipNetworks(e) {
      const t = f.chains.get(e), { approvedCaipNetworkIds: r = [], requestedCaipNetworks: s = [] } = (t == null ? void 0 : t.networkState) || {};
      return T.sortRequestedNetworks(r, s);
    },
    getAllRequestedCaipNetworks() {
      const e = [];
      return f.chains.forEach((t) => {
        const r = i.getRequestedCaipNetworks(t.namespace);
        e.push(...r);
      }), e;
    },
    setRequestedCaipNetworks(e, t) {
      i.setAdapterNetworkState(t, {
        requestedCaipNetworks: e
      });
      const s = i.getAllRequestedCaipNetworks().map((a) => a.chainNamespace), n = Array.from(new Set(s));
      m.filterByNamespaces(n);
    },
    getAllApprovedCaipNetworkIds() {
      const e = [];
      return f.chains.forEach((t) => {
        const r = i.getApprovedCaipNetworkIds(t.namespace);
        e.push(...r);
      }), e;
    },
    getActiveCaipNetwork() {
      return f.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return f.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(e) {
      var _a, _b2;
      return ((_b2 = (_a = f.chains.get(e)) == null ? void 0 : _a.networkState) == null ? void 0 : _b2.approvedCaipNetworkIds) || [];
    },
    async setApprovedCaipNetworksData(e) {
      var _a;
      const r = await ((_a = i.getNetworkControllerClient()) == null ? void 0 : _a.getApprovedCaipNetworksData());
      i.setAdapterNetworkState(e, {
        approvedCaipNetworkIds: r == null ? void 0 : r.approvedCaipNetworkIds,
        supportsAllNetworks: r == null ? void 0 : r.supportsAllNetworks
      });
    },
    checkIfSupportedNetwork(e, t) {
      const r = t || f.activeCaipNetwork, s = i.getRequestedCaipNetworks(e);
      return s.length ? s == null ? void 0 : s.some((n) => n.id === (r == null ? void 0 : r.id)) : true;
    },
    checkIfSupportedChainId(e) {
      var _a;
      return f.activeChain ? (_a = i.getRequestedCaipNetworks(f.activeChain)) == null ? void 0 : _a.some((r) => r.id === e) : true;
    },
    setSmartAccountEnabledNetworks(e, t) {
      i.setAdapterNetworkState(t, {
        smartAccountEnabledNetworks: e
      });
    },
    checkIfSmartAccountEnabled() {
      var _a, _b2;
      const e = Ir.caipNetworkIdToNumber((_a = f.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId), t = f.activeChain;
      return !t || !e ? false : !!((_b2 = i.getNetworkProp("smartAccountEnabledNetworks", t)) == null ? void 0 : _b2.includes(Number(e)));
    },
    getActiveNetworkTokenAddress() {
      var _a, _b2;
      const e = ((_a = f.activeCaipNetwork) == null ? void 0 : _a.chainNamespace) || "eip155", t = ((_b2 = f.activeCaipNetwork) == null ? void 0 : _b2.id) || 1, r = ee.NATIVE_TOKEN_ADDRESS[e];
      return `${e}:${t}:${r}`;
    },
    showUnsupportedChainUI() {
      G.open({
        view: "UnsupportedChain"
      });
    },
    checkIfNamesSupported() {
      const e = f.activeCaipNetwork;
      return !!((e == null ? void 0 : e.chainNamespace) && ee.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace));
    },
    resetNetwork(e) {
      i.setAdapterNetworkState(e, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: true,
        smartAccountEnabledNetworks: []
      });
    },
    resetAccount(e) {
      const t = e;
      if (!t) throw new Error("Chain is required to set account prop");
      f.activeCaipAddress = void 0, i.setChainAccountData(t, {
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
        preferredAccountTypes: void 0,
        socialProvider: void 0,
        socialWindow: void 0,
        farcasterUrl: void 0,
        allAccounts: [],
        user: void 0,
        status: "disconnected"
      }), m.removeConnectorId(t);
    },
    async disconnect(e) {
      const t = Ls(e);
      try {
        L.resetSend();
        const r = await Promise.allSettled(t.map(async ([n, a]) => {
          var _a;
          try {
            const { caipAddress: o } = i.getAccountData(n) || {};
            o && ((_a = a.connectionControllerClient) == null ? void 0 : _a.disconnect) && await a.connectionControllerClient.disconnect(n), i.resetAccount(n), i.resetNetwork(n);
          } catch (o) {
            throw new Error(`Failed to disconnect chain ${n}: ${o.message}`);
          }
        }));
        k.resetWcConnection();
        const s = r.filter((n) => n.status === "rejected");
        if (s.length > 0) throw new Error(s.map((n) => n.reason.message).join(", "));
        b.deleteConnectedSocialProvider(), e ? m.removeConnectorId(e) : m.resetConnectorIds(), K.sendEvent({
          type: "track",
          event: "DISCONNECT_SUCCESS",
          properties: {
            namespace: e || "all"
          }
        });
      } catch (r) {
        console.error(r.message || "Failed to disconnect chains"), K.sendEvent({
          type: "track",
          event: "DISCONNECT_ERROR",
          properties: {
            message: r.message || "Failed to disconnect chains"
          }
        });
      }
    },
    setIsSwitchingNamespace(e) {
      f.isSwitchingNamespace = e;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      var _a, _b2;
      const e = [];
      let t;
      if (f.chains.forEach((r) => {
        A.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((s) => s === r.namespace) && r.namespace && e.push(r.namespace);
      }), e.length > 0) {
        const r = e[0];
        return t = r ? (_b2 = (_a = f.chains.get(r)) == null ? void 0 : _a.caipNetworks) == null ? void 0 : _b2[0] : void 0, t;
      }
    },
    getAccountData(e) {
      var _a;
      return e ? (_a = i.state.chains.get(e)) == null ? void 0 : _a.accountState : N.state;
    },
    getNetworkData(e) {
      var _a;
      const t = e || f.activeChain;
      if (t) return (_a = i.state.chains.get(t)) == null ? void 0 : _a.networkState;
    },
    getCaipNetworkByNamespace(e, t) {
      var _a, _b2, _c;
      if (!e) return;
      const r = i.state.chains.get(e), s = (_a = r == null ? void 0 : r.caipNetworks) == null ? void 0 : _a.find((n) => n.id === t);
      return s || ((_b2 = r == null ? void 0 : r.networkState) == null ? void 0 : _b2.caipNetwork) || ((_c = r == null ? void 0 : r.caipNetworks) == null ? void 0 : _c[0]);
    },
    getRequestedCaipNetworkIds() {
      const e = m.state.filterByNamespace;
      return (e ? [
        f.chains.get(e)
      ] : Array.from(f.chains.values())).flatMap((r) => (r == null ? void 0 : r.caipNetworks) || []).map((r) => r.caipNetworkId);
    },
    getCaipNetworks(e) {
      return e ? i.getRequestedCaipNetworks(e) : i.getAllRequestedCaipNetworks();
    }
  };
  i = he(Hs);
  zs = {
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
  Or = T.getBlockchainApiUrl();
  ne = J({
    clientId: null,
    api: new mt({
      baseUrl: Or,
      clientId: null
    }),
    supportedChains: {
      http: [],
      ws: []
    }
  });
  I = {
    state: ne,
    async get(e) {
      const { st: t, sv: r } = I.getSdkProperties(), s = h.state.projectId, n = {
        ...e.params || {},
        st: t,
        sv: r,
        projectId: s
      };
      return ne.api.get({
        ...e,
        params: n
      });
    },
    getSdkProperties() {
      const { sdkType: e, sdkVersion: t } = h.state;
      return {
        st: e || "unknown",
        sv: t || "unknown"
      };
    },
    async isNetworkSupported(e) {
      if (!e) return false;
      try {
        ne.supportedChains.http.length || await I.getSupportedNetworks();
      } catch {
        return false;
      }
      return ne.supportedChains.http.includes(e);
    },
    async getSupportedNetworks() {
      try {
        const e = await I.get({
          path: "v1/supported-chains"
        });
        return ne.supportedChains = e, e;
      } catch {
        return ne.supportedChains;
      }
    },
    async fetchIdentity({ address: e, caipNetworkId: t }) {
      if (!await I.isNetworkSupported(t)) return {
        avatar: "",
        name: ""
      };
      const s = b.getIdentityFromCacheForAddress(e);
      if (s) return s;
      const n = await I.get({
        path: `/v1/identity/${e}`,
        params: {
          sender: i.state.activeCaipAddress ? T.getPlainAddress(i.state.activeCaipAddress) : void 0
        }
      });
      return b.updateIdentityCache({
        address: e,
        identity: n,
        timestamp: Date.now()
      }), n;
    },
    async fetchTransactions({ account: e, cursor: t, onramp: r, signal: s, cache: n, chainId: a }) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
        path: `/v1/account/${e}/history`,
        params: {
          cursor: t,
          onramp: r,
          chainId: a
        },
        signal: s,
        cache: n
      }) : {
        data: [],
        next: void 0
      };
    },
    async fetchSwapQuote({ amount: e, userAddress: t, from: r, to: s, gasPrice: n }) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
        path: "/v1/convert/quotes",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          amount: e,
          userAddress: t,
          from: r,
          to: s,
          gasPrice: n
        }
      }) : {
        quotes: []
      };
    },
    async fetchSwapTokens({ chainId: e }) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
        path: "/v1/convert/tokens",
        params: {
          chainId: e
        }
      }) : {
        tokens: []
      };
    },
    async fetchTokenPrice({ addresses: e }) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? ne.api.post({
        path: "/v1/fungible/price",
        body: {
          currency: "usd",
          addresses: e,
          projectId: h.state.projectId
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        fungibles: []
      };
    },
    async fetchSwapAllowance({ tokenAddress: e, userAddress: t }) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
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
      var _a;
      const { st: t, sv: r } = I.getSdkProperties();
      if (!await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId)) throw new Error("Network not supported for Gas Price");
      return I.get({
        path: "/v1/convert/gas-price",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          chainId: e,
          st: t,
          sv: r
        }
      });
    },
    async generateSwapCalldata({ amount: e, from: t, to: r, userAddress: s, disableEstimate: n }) {
      var _a;
      if (!await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return ne.api.post({
        path: "/v1/convert/build-transaction",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          amount: e,
          eip155: {
            slippage: ee.CONVERT_SLIPPAGE_TOLERANCE
          },
          projectId: h.state.projectId,
          from: t,
          to: r,
          userAddress: s,
          disableEstimate: n
        }
      });
    },
    async generateApproveCalldata({ from: e, to: t, userAddress: r }) {
      var _a;
      const { st: s, sv: n } = I.getSdkProperties();
      if (!await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId)) throw new Error("Network not supported for Swaps");
      return I.get({
        path: "/v1/convert/build-approve",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          userAddress: r,
          from: e,
          to: t,
          st: s,
          sv: n
        }
      });
    },
    async getBalance(e, t, r) {
      var _a;
      const { st: s, sv: n } = I.getSdkProperties();
      if (!await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId)) return ge.showError("Token Balance Unavailable"), {
        balances: []
      };
      const o = `${t}:${e}`, c = b.getBalanceCacheForCaipAddress(o);
      if (c) return c;
      const d = await I.get({
        path: `/v1/account/${e}/balance`,
        params: {
          currency: "usd",
          chainId: t,
          forceUpdate: r,
          st: s,
          sv: n
        }
      });
      return b.updateBalanceCache({
        caipAddress: o,
        balance: d,
        timestamp: Date.now()
      }), d;
    },
    async lookupEnsName(e) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
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
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
        path: `/v1/profile/reverse/${e}`,
        params: {
          sender: N.state.address,
          apiVersion: "2"
        }
      }) : [];
    },
    async getEnsNameSuggestions(e) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
        path: `/v1/profile/suggestions/${e}`,
        params: {
          zone: "reown.id"
        }
      }) : {
        suggestions: []
      };
    },
    async registerEnsName({ coinType: e, address: t, message: r, signature: s }) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? ne.api.post({
        path: "/v1/profile/account",
        body: {
          coin_type: e,
          address: t,
          message: r,
          signature: s
        },
        headers: {
          "Content-Type": "application/json"
        }
      }) : {
        success: false
      };
    },
    async generateOnRampURL({ destinationWallets: e, partnerUserId: t, defaultNetwork: r, purchaseAmount: s, paymentAmount: n }) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? (await ne.api.post({
        path: "/v1/generators/onrampurl",
        params: {
          projectId: h.state.projectId
        },
        body: {
          destinationWallets: e,
          defaultNetwork: r,
          partnerUserId: t,
          defaultExperience: "buy",
          presetCryptoAmount: s,
          presetFiatAmount: n
        }
      })).url : "";
    },
    async getOnrampOptions() {
      var _a;
      if (!await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId)) return {
        paymentCurrencies: [],
        purchaseCurrencies: []
      };
      try {
        return await I.get({
          path: "/v1/onramp/options"
        });
      } catch {
        return zs;
      }
    },
    async getOnrampQuote({ purchaseCurrency: e, paymentCurrency: t, amount: r, network: s }) {
      var _a;
      try {
        return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? await ne.api.post({
          path: "/v1/onramp/quote",
          params: {
            projectId: h.state.projectId
          },
          body: {
            purchaseCurrency: e,
            paymentCurrency: t,
            amount: r,
            network: s
          }
        }) : null;
      } catch {
        return {
          coinbaseFee: {
            amount: r,
            currency: t.id
          },
          networkFee: {
            amount: r,
            currency: t.id
          },
          paymentSubtotal: {
            amount: r,
            currency: t.id
          },
          paymentTotal: {
            amount: r,
            currency: t.id
          },
          purchaseAmount: {
            amount: r,
            currency: t.id
          },
          quoteId: "mocked-quote-id"
        };
      }
    },
    async getSmartSessions(e) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? I.get({
        path: `/v1/sessions/${e}`
      }) : [];
    },
    async revokeSmartSession(e, t, r) {
      var _a;
      return await I.isNetworkSupported((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) ? ne.api.post({
        path: `/v1/sessions/${e}/revoke`,
        params: {
          projectId: h.state.projectId
        },
        body: {
          pci: t,
          signature: r
        }
      }) : {
        success: false
      };
    },
    setClientId(e) {
      ne.clientId = e, ne.api = new mt({
        baseUrl: Or,
        clientId: e
      });
    }
  };
  de = J({
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: false,
    addressLabels: /* @__PURE__ */ new Map(),
    allAccounts: []
  });
  Vs = {
    state: de,
    replaceState(e) {
      e && Object.assign(de, We(e));
    },
    subscribe(e) {
      return i.subscribeChainProp("accountState", (t) => {
        if (t) return e(t);
      });
    },
    subscribeKey(e, t, r) {
      let s;
      return i.subscribeChainProp("accountState", (n) => {
        if (n) {
          const a = n[e];
          s !== a && (s = a, t(a));
        }
      }, r);
    },
    setStatus(e, t) {
      i.setAccountProp("status", e, t);
    },
    getCaipAddress(e) {
      return i.getAccountProp("caipAddress", e);
    },
    setCaipAddress(e, t) {
      const r = e ? T.getPlainAddress(e) : void 0;
      t === i.state.activeChain && (i.state.activeCaipAddress = e), i.setAccountProp("caipAddress", e, t), i.setAccountProp("address", r, t);
    },
    setBalance(e, t, r) {
      i.setAccountProp("balance", e, r), i.setAccountProp("balanceSymbol", t, r);
    },
    setProfileName(e, t) {
      i.setAccountProp("profileName", e, t);
    },
    setProfileImage(e, t) {
      i.setAccountProp("profileImage", e, t);
    },
    setUser(e, t) {
      i.setAccountProp("user", e, t);
    },
    setAddressExplorerUrl(e, t) {
      i.setAccountProp("addressExplorerUrl", e, t);
    },
    setSmartAccountDeployed(e, t) {
      i.setAccountProp("smartAccountDeployed", e, t);
    },
    setCurrentTab(e) {
      i.setAccountProp("currentTab", e, i.state.activeChain);
    },
    setTokenBalance(e, t) {
      e && i.setAccountProp("tokenBalance", e, t);
    },
    setShouldUpdateToAddress(e, t) {
      i.setAccountProp("shouldUpdateToAddress", e, t);
    },
    setAllAccounts(e, t) {
      i.setAccountProp("allAccounts", e, t);
    },
    addAddressLabel(e, t, r) {
      const s = i.getAccountProp("addressLabels", r) || /* @__PURE__ */ new Map();
      s.set(e, t), i.setAccountProp("addressLabels", s, r);
    },
    removeAddressLabel(e, t) {
      const r = i.getAccountProp("addressLabels", t) || /* @__PURE__ */ new Map();
      r.delete(e), i.setAccountProp("addressLabels", r, t);
    },
    setConnectedWalletInfo(e, t) {
      i.setAccountProp("connectedWalletInfo", e, t, false);
    },
    setPreferredAccountType(e, t) {
      i.setAccountProp("preferredAccountTypes", {
        ...de.preferredAccountTypes,
        [t]: e
      }, t);
    },
    setPreferredAccountTypes(e) {
      de.preferredAccountTypes = e;
    },
    setSocialProvider(e, t) {
      e && i.setAccountProp("socialProvider", e, t);
    },
    setSocialWindow(e, t) {
      i.setAccountProp("socialWindow", e ? We(e) : void 0, t);
    },
    setFarcasterUrl(e, t) {
      i.setAccountProp("farcasterUrl", e, t);
    },
    async fetchTokenBalance(e) {
      var _a, _b2;
      de.balanceLoading = true;
      const t = (_a = i.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId, r = (_b2 = i.state.activeCaipNetwork) == null ? void 0 : _b2.chainNamespace, s = i.state.activeCaipAddress, n = s ? T.getPlainAddress(s) : void 0;
      if (de.lastRetry && !T.isAllowedRetry(de.lastRetry, 30 * ee.ONE_SEC_MS)) return de.balanceLoading = false, [];
      try {
        if (n && t && r) {
          const o = (await I.getBalance(n, t)).balances.filter((c) => c.quantity.decimals !== "0");
          return N.setTokenBalance(o, r), de.lastRetry = void 0, de.balanceLoading = false, o;
        }
      } catch (a) {
        de.lastRetry = Date.now(), e == null ? void 0 : e(a), ge.showError("Token Balance Unavailable");
      } finally {
        de.balanceLoading = false;
      }
      return [];
    },
    resetAccount(e) {
      i.resetAccount(e);
    }
  };
  N = he(Vs);
  ae = J({
    loading: false,
    loadingNamespaceMap: /* @__PURE__ */ new Map(),
    open: false,
    shake: false,
    namespace: void 0
  });
  qs = {
    state: ae,
    subscribe(e) {
      return te(ae, () => e(ae));
    },
    subscribeKey(e, t) {
      return re(ae, e, t);
    },
    async open(e) {
      var _a;
      const t = N.state.status === "connected";
      k.state.wcBasic ? y.prefetch({
        fetchNetworkImages: false,
        fetchConnectorImages: false
      }) : await y.prefetch({
        fetchConnectorImages: !t,
        fetchFeaturedWallets: !t,
        fetchRecommendedWallets: !t
      }), (e == null ? void 0 : e.namespace) ? (await i.switchActiveNamespace(e.namespace), G.setLoading(true, e.namespace)) : G.setLoading(true), m.setFilterByNamespace(e == null ? void 0 : e.namespace);
      const r = (_a = i.getAccountData(e == null ? void 0 : e.namespace)) == null ? void 0 : _a.caipAddress, s = i.state.noAdapters;
      h.state.manualWCControl || s && !r ? T.isMobile() ? R.reset("AllWallets") : R.reset("ConnectingWalletConnectBasic") : (e == null ? void 0 : e.view) ? R.reset(e.view, e.data) : r ? R.reset("Account") : R.reset("Connect"), ae.open = true, ve.set({
        open: true
      }), K.sendEvent({
        type: "track",
        event: "MODAL_OPEN",
        properties: {
          connected: !!r
        }
      });
    },
    close(e = false) {
      if (e || R.state.view !== "ApproveTransaction") {
        const t = h.state.enableEmbedded, r = !!i.state.activeCaipAddress;
        ae.open && K.sendEvent({
          type: "track",
          event: "MODAL_CLOSE",
          properties: {
            connected: r
          }
        }), ae.open = false, G.clearLoading(), t ? r ? R.replace("Account") : R.push("Connect") : ve.set({
          open: false
        });
      }
      k.resetUri();
    },
    setLoading(e, t) {
      t && ae.loadingNamespaceMap.set(t, e), ae.loading = e, ve.set({
        loading: e
      });
    },
    clearLoading() {
      ae.loadingNamespaceMap.clear(), ae.loading = false;
    },
    shake() {
      ae.shake || (ae.shake = true, setTimeout(() => {
        ae.shake = false;
      }, 500));
    }
  };
  G = he(qs);
  dr = 2147483648;
  Ks = {
    convertEVMChainIdToCoinType(e) {
      if (e >= dr) throw new Error("Invalid chainId");
      return (dr | e) >>> 0;
    }
  };
  ue = J({
    suggestions: [],
    loading: false
  });
  Js = {
    state: ue,
    subscribe(e) {
      return te(ue, () => e(ue));
    },
    subscribeKey(e, t) {
      return re(ue, e, t);
    },
    async resolveName(e) {
      var _a, _b2;
      try {
        return await I.lookupEnsName(e);
      } catch (t) {
        const r = t;
        throw new Error(((_b2 = (_a = r == null ? void 0 : r.reasons) == null ? void 0 : _a[0]) == null ? void 0 : _b2.description) || "Error resolving name");
      }
    },
    async isNameRegistered(e) {
      try {
        return await I.lookupEnsName(e), true;
      } catch {
        return false;
      }
    },
    async getSuggestions(e) {
      try {
        ue.loading = true, ue.suggestions = [];
        const t = await I.getEnsNameSuggestions(e);
        return ue.suggestions = t.suggestions.map((r) => ({
          ...r,
          name: r.name
        })) || [], ue.suggestions;
      } catch (t) {
        const r = ct.parseEnsApiError(t, "Error fetching name suggestions");
        throw new Error(r);
      } finally {
        ue.loading = false;
      }
    },
    async getNamesForAddress(e) {
      try {
        if (!i.state.activeCaipNetwork) return [];
        const r = b.getEnsFromCacheForAddress(e);
        if (r) return r;
        const s = await I.reverseLookupEnsName({
          address: e
        });
        return b.updateEnsCache({
          address: e,
          ens: s,
          timestamp: Date.now()
        }), s;
      } catch (t) {
        const r = ct.parseEnsApiError(t, "Error fetching names for address");
        throw new Error(r);
      }
    },
    async registerName(e) {
      const t = i.state.activeCaipNetwork;
      if (!t) throw new Error("Network not found");
      const r = N.state.address, s = m.getAuthConnector();
      if (!r || !s) throw new Error("Address or auth connector not found");
      ue.loading = true;
      try {
        const n = JSON.stringify({
          name: e,
          attributes: {},
          timestamp: Math.floor(Date.now() / 1e3)
        });
        R.pushTransactionStack({
          view: "RegisterAccountNameSuccess",
          goBack: false,
          replace: true,
          onCancel() {
            ue.loading = false;
          }
        });
        const a = await k.signMessage(n), o = t.id;
        if (!o) throw new Error("Network not found");
        const c = Ks.convertEVMChainIdToCoinType(Number(o));
        await I.registerEnsName({
          coinType: c,
          address: r,
          signature: a,
          message: n
        }), N.setProfileName(e, t.chainNamespace), R.replace("RegisterAccountNameSuccess");
      } catch (n) {
        const a = ct.parseEnsApiError(n, `Error registering name ${e}`);
        throw R.replace("RegisterAccountName"), new Error(a);
      } finally {
        ue.loading = false;
      }
    },
    validateName(e) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(e);
    },
    parseEnsApiError(e, t) {
      var _a, _b2;
      return ((_b2 = (_a = e == null ? void 0 : e.reasons) == null ? void 0 : _a[0]) == null ? void 0 : _b2.description) || t;
    }
  };
  ct = he(Js);
  Ie = {
    EIP155: "eip155",
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED"
  };
  xt = {
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
      "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200"
    },
    ConnectorImageIds: {
      [A.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
      [A.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
      [A.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
      [A.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
      [A.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
      [A.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
    },
    ConnectorNamesMap: {
      [A.CONNECTOR_ID.INJECTED]: "Browser Wallet",
      [A.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
      [A.CONNECTOR_ID.COINBASE]: "Coinbase",
      [A.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
      [A.CONNECTOR_ID.LEDGER]: "Ledger",
      [A.CONNECTOR_ID.SAFE]: "Safe"
    }
  };
  Jt = {
    getCaipTokens(e) {
      if (!e) return;
      const t = {};
      return Object.entries(e).forEach(([r, s]) => {
        t[`${Ie.EIP155}:${r}`] = s;
      }), t;
    },
    isLowerCaseMatch(e, t) {
      return (e == null ? void 0 : e.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
    }
  };
  new AbortController();
  const ze = {
    UniversalProviderErrors: {
      UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
        message: "Unauthorized: origin not allowed",
        alertErrorKey: "INVALID_APP_CONFIGURATION"
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
        shortMessage: "Network Not Found",
        longMessage: "Network not found - please make sure it is included in 'networks' array in createAppKit function"
      },
      INVALID_APP_CONFIGURATION: {
        shortMessage: "Invalid App Configuration",
        longMessage: () => `Origin ${Ys() ? window.origin : "unknown"} not found on Allowlist - update configuration on cloud.reown.com`
      },
      IFRAME_LOAD_FAILED: {
        shortMessage: "Network Error - Could not load embedded wallet",
        longMessage: () => "There was an issue loading the embedded wallet. Please try again later."
      },
      IFRAME_REQUEST_TIMEOUT: {
        shortMessage: "Embedded Wallet Request Timed Out",
        longMessage: () => "There was an issue doing the request to the embedded wallet. Please try again later."
      },
      UNVERIFIED_DOMAIN: {
        shortMessage: "Invalid App Configuration",
        longMessage: () => "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"
      },
      JWT_TOKEN_NOT_VALID: {
        shortMessage: "Session Expired",
        longMessage: "Invalid session found on UniversalProvider - please check your time settings and connect again"
      },
      INVALID_PROJECT_ID: {
        shortMessage: "Invalid App Configuration",
        longMessage: "Invalid Project ID - update configuration"
      },
      PROJECT_ID_NOT_CONFIGURED: {
        shortMessage: "Project ID Not Configured",
        longMessage: "Project ID Not Configured - update configuration on cloud.reown.com"
      }
    }
  };
  function Ys() {
    return typeof window < "u";
  }
  const Gs = {
    createLogger(e, t = "error") {
      const r = Gr({
        level: t
      }), { logger: s } = Xr({
        opts: r
      });
      return s.error = (...n) => {
        for (const a of n) if (a instanceof Error) {
          e(a, ...n);
          return;
        }
        e(void 0, ...n);
      }, s;
    }
  }, Xs = "rpc.walletconnect.org";
  function ur(e, t) {
    const r = new URL("https://rpc.walletconnect.org/v1/");
    return r.searchParams.set("chainId", e), r.searchParams.set("projectId", t), r.toString();
  }
  let Ft, qe, Ot, oe, Y;
  Ft = [
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
    "bip122:000000000019d6689c085ae165831e93",
    "bip122:000000000933ea01ad0ee984209779ba"
  ];
  qe = {
    extendRpcUrlWithProjectId(e, t) {
      let r = false;
      try {
        r = new URL(e).host === Xs;
      } catch {
        r = false;
      }
      if (r) {
        const s = new URL(e);
        return s.searchParams.has("projectId") || s.searchParams.set("projectId", t), s.toString();
      }
      return e;
    },
    isCaipNetwork(e) {
      return "chainNamespace" in e && "caipNetworkId" in e;
    },
    getChainNamespace(e) {
      return this.isCaipNetwork(e) ? e.chainNamespace : A.CHAIN.EVM;
    },
    getCaipNetworkId(e) {
      return this.isCaipNetwork(e) ? e.caipNetworkId : `${A.CHAIN.EVM}:${e.id}`;
    },
    getDefaultRpcUrl(e, t, r) {
      var _a, _b2, _c;
      const s = (_c = (_b2 = (_a = e.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b2.http) == null ? void 0 : _c[0];
      return Ft.includes(t) ? ur(t, r) : s || "";
    },
    extendCaipNetwork(e, { customNetworkImageUrls: t, projectId: r, customRpcUrls: s }) {
      var _a, _b2, _c, _d, _e2;
      const n = this.getChainNamespace(e), a = this.getCaipNetworkId(e), o = (_a = e.rpcUrls.default.http) == null ? void 0 : _a[0], c = this.getDefaultRpcUrl(e, a, r), d = ((_d = (_c = (_b2 = e == null ? void 0 : e.rpcUrls) == null ? void 0 : _b2.chainDefault) == null ? void 0 : _c.http) == null ? void 0 : _d[0]) || o, l = ((_e2 = s == null ? void 0 : s[a]) == null ? void 0 : _e2.map((g) => g.url)) || [], u = [
        ...l,
        c
      ], p = [
        ...l
      ];
      return d && !p.includes(d) && p.push(d), {
        ...e,
        chainNamespace: n,
        caipNetworkId: a,
        assets: {
          imageId: xt.NetworkImageIds[e.id],
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
    extendCaipNetworks(e, { customNetworkImageUrls: t, projectId: r, customRpcUrls: s }) {
      return e.map((n) => qe.extendCaipNetwork(n, {
        customNetworkImageUrls: t,
        customRpcUrls: s,
        projectId: r
      }));
    },
    getViemTransport(e, t, r) {
      var _a, _b2, _c;
      const s = [];
      return r == null ? void 0 : r.forEach((n) => {
        s.push(At(n.url, n.config));
      }), Ft.includes(e.caipNetworkId) && s.push(At(ur(e.caipNetworkId, t), {
        fetchOptions: {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      })), (_c = (_b2 = (_a = e == null ? void 0 : e.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b2.http) == null ? void 0 : _c.forEach((n) => {
        s.push(At(n));
      }), rr(s);
    },
    extendWagmiTransports(e, t, r) {
      if (Ft.includes(e.caipNetworkId)) {
        const s = this.getDefaultRpcUrl(e, e.caipNetworkId, t);
        return rr([
          r,
          At(s)
        ]);
      }
      return r;
    },
    getUnsupportedNetwork(e) {
      return {
        id: e.split(":")[1],
        caipNetworkId: e,
        name: A.UNSUPPORTED_NETWORK_NAME,
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
      var _a;
      const t = b.getActiveCaipNetworkId(), r = i.getAllRequestedCaipNetworks(), s = Array.from(((_a = i.state.chains) == null ? void 0 : _a.keys()) || []), n = t == null ? void 0 : t.split(":")[0], a = n ? s.includes(n) : false, o = r == null ? void 0 : r.find((d) => d.caipNetworkId === t);
      return a && !o && t ? this.getUnsupportedNetwork(t) : o || e || (r == null ? void 0 : r[0]);
    }
  };
  Ot = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0
  };
  oe = J({
    providers: {
      ...Ot
    },
    providerIds: {
      ...Ot
    }
  });
  Y = {
    state: oe,
    subscribeKey(e, t) {
      return re(oe, e, t);
    },
    subscribe(e) {
      return te(oe, () => {
        e(oe);
      });
    },
    subscribeProviders(e) {
      return te(oe.providers, () => e(oe.providers));
    },
    setProvider(e, t) {
      t && (oe.providers[e] = We(t));
    },
    getProvider(e) {
      return oe.providers[e];
    },
    setProviderId(e, t) {
      t && (oe.providerIds[e] = t);
    },
    getProviderId(e) {
      if (e) return oe.providerIds[e];
    },
    reset() {
      oe.providers = {
        ...Ot
      }, oe.providerIds = {
        ...Ot
      };
    },
    resetChain(e) {
      oe.providers[e] = void 0, oe.providerIds[e] = void 0;
    }
  };
  Zs = {
    VIEW_DIRECTION: {
      Next: "next",
      Prev: "prev"
    },
    DEFAULT_CONNECT_METHOD_ORDER: [
      "email",
      "social",
      "wallet"
    ],
    ANIMATION_DURATIONS: {
      HeaderText: 120,
      ModalHeight: 150,
      ViewTransition: 150
    }
  };
  qt = {
    filterOutDuplicatesByRDNS(e) {
      const t = h.state.enableEIP6963 ? m.state.connectors : [], r = b.getRecentWallets(), s = t.map((c) => {
        var _a;
        return (_a = c.info) == null ? void 0 : _a.rdns;
      }).filter(Boolean), n = r.map((c) => c.rdns).filter(Boolean), a = s.concat(n);
      if (a.includes("io.metamask.mobile") && T.isMobile()) {
        const c = a.indexOf("io.metamask.mobile");
        a[c] = "io.metamask";
      }
      return e.filter((c) => !a.includes(String(c == null ? void 0 : c.rdns)));
    },
    filterOutDuplicatesByIds(e) {
      const t = m.state.connectors.filter((c) => c.type === "ANNOUNCED" || c.type === "INJECTED"), r = b.getRecentWallets(), s = t.map((c) => c.explorerId), n = r.map((c) => c.id), a = s.concat(n);
      return e.filter((c) => !a.includes(c == null ? void 0 : c.id));
    },
    filterOutDuplicateWallets(e) {
      const t = this.filterOutDuplicatesByRDNS(e);
      return this.filterOutDuplicatesByIds(t);
    },
    markWalletsAsInstalled(e) {
      const { connectors: t } = m.state, r = t.filter((a) => a.type === "ANNOUNCED").reduce((a, o) => {
        var _a;
        return ((_a = o.info) == null ? void 0 : _a.rdns) && (a[o.info.rdns] = true), a;
      }, {});
      return e.map((a) => ({
        ...a,
        installed: !!a.rdns && !!r[a.rdns ?? ""]
      })).sort((a, o) => Number(o.installed) - Number(a.installed));
    },
    getConnectOrderMethod(e, t) {
      var _a;
      const r = (e == null ? void 0 : e.connectMethodsOrder) || ((_a = h.state.features) == null ? void 0 : _a.connectMethodsOrder), s = t || m.state.connectors;
      if (r) return r;
      const { injected: n, announced: a } = kt.getConnectorsByType(s, y.state.recommended, y.state.featured), o = n.filter(kt.showConnector), c = a.filter(kt.showConnector);
      return o.length || c.length ? [
        "wallet",
        "email",
        "social"
      ] : Zs.DEFAULT_CONNECT_METHOD_ORDER;
    },
    isExcluded(e) {
      const t = !!e.rdns && y.state.excludedWallets.some((s) => s.rdns === e.rdns), r = !!e.name && y.state.excludedWallets.some((s) => Jt.isLowerCaseMatch(s.name, e.name));
      return t || r;
    }
  };
  kt = {
    getConnectorsByType(e, t, r) {
      const { customWallets: s } = h.state, n = b.getRecentWallets(), a = qt.filterOutDuplicateWallets(t), o = qt.filterOutDuplicateWallets(r), c = e.filter((p) => p.type === "MULTI_CHAIN"), d = e.filter((p) => p.type === "ANNOUNCED"), l = e.filter((p) => p.type === "INJECTED"), u = e.filter((p) => p.type === "EXTERNAL");
      return {
        custom: s,
        recent: n,
        external: u,
        multiChain: c,
        announced: d,
        injected: l,
        recommended: a,
        featured: o
      };
    },
    showConnector(e) {
      var _a;
      const t = (_a = e.info) == null ? void 0 : _a.rdns, r = !!t && y.state.excludedWallets.some((n) => !!n.rdns && n.rdns === t), s = !!e.name && y.state.excludedWallets.some((n) => Jt.isLowerCaseMatch(n.name, e.name));
      return !(e.type === "INJECTED" && (e.name === "Browser Wallet" && (!T.isMobile() || T.isMobile() && !t && !k.checkInstalled()) || r || s) || (e.type === "ANNOUNCED" || e.type === "EXTERNAL") && (r || s));
    },
    getIsConnectedWithWC() {
      return Array.from(i.state.chains.values()).some((r) => m.getConnectorId(r.namespace) === A.CONNECTOR_ID.WALLET_CONNECT);
    },
    getConnectorTypeOrder({ recommended: e, featured: t, custom: r, recent: s, announced: n, injected: a, multiChain: o, external: c, overriddenConnectors: d = ((_a) => (_a = h.state.features) == null ? void 0 : _a.connectorTypeOrder)() ?? [] }) {
      const l = kt.getIsConnectedWithWC(), g = [
        {
          type: "walletConnect",
          isEnabled: h.state.enableWalletConnect && !l
        },
        {
          type: "recent",
          isEnabled: s.length > 0
        },
        {
          type: "injected",
          isEnabled: [
            ...a,
            ...n,
            ...o
          ].length > 0
        },
        {
          type: "featured",
          isEnabled: t.length > 0
        },
        {
          type: "custom",
          isEnabled: r && r.length > 0
        },
        {
          type: "external",
          isEnabled: c.length > 0
        },
        {
          type: "recommended",
          isEnabled: e.length > 0
        }
      ].filter((C) => C.isEnabled), v = new Set(g.map((C) => C.type)), P = d.filter((C) => v.has(C)).map((C) => ({
        type: C,
        isEnabled: true
      })), w = g.filter(({ type: C }) => !P.some(({ type: H }) => H === C));
      return Array.from(new Set([
        ...P,
        ...w
      ].map(({ type: C }) => C)));
    }
  };
  const It = globalThis, Yt = It.ShadowRoot && (It.ShadyCSS === void 0 || It.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Gt = Symbol(), pr = /* @__PURE__ */ new WeakMap();
  let Pr = class {
    constructor(t, r, s) {
      if (this._$cssResult$ = true, s !== Gt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t, this.t = r;
    }
    get styleSheet() {
      let t = this.o;
      const r = this.t;
      if (Yt && t === void 0) {
        const s = r !== void 0 && r.length === 1;
        s && (t = pr.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && pr.set(r, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  let pe, Qs, hr;
  pe = (e) => new Pr(typeof e == "string" ? e : e + "", void 0, Gt);
  Je = (e, ...t) => {
    const r = e.length === 1 ? e[0] : t.reduce((s, n, a) => s + ((o) => {
      if (o._$cssResult$ === true) return o.cssText;
      if (typeof o == "number") return o;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(n) + e[a + 1], e[0]);
    return new Pr(r, e, Gt);
  };
  Qs = (e, t) => {
    if (Yt) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
    else for (const r of t) {
      const s = document.createElement("style"), n = It.litNonce;
      n !== void 0 && s.setAttribute("nonce", n), s.textContent = r.cssText, e.appendChild(s);
    }
  };
  hr = Yt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
    let r = "";
    for (const s of t.cssRules) r += s.cssText;
    return pe(r);
  })(e) : e;
  let en, tn, rn, sn, nn, an, Rt, fr, on, cn, lt, wr;
  ({ is: en, defineProperty: tn, getOwnPropertyDescriptor: rn, getOwnPropertyNames: sn, getOwnPropertySymbols: nn, getPrototypeOf: an } = Object);
  Rt = globalThis;
  fr = Rt.trustedTypes;
  on = fr ? fr.emptyScript : "";
  cn = Rt.reactiveElementPolyfillSupport;
  lt = (e, t) => e;
  Kt = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? on : null;
          break;
        case Object:
        case Array:
          e = e == null ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let r = e;
      switch (t) {
        case Boolean:
          r = e !== null;
          break;
        case Number:
          r = e === null ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(e);
          } catch {
            r = null;
          }
      }
      return r;
    }
  };
  Ur = (e, t) => !en(e, t);
  wr = {
    attribute: true,
    type: String,
    converter: Kt,
    reflect: false,
    useDefault: false,
    hasChanged: Ur
  };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Rt.litPropertyMetadata ?? (Rt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  let Ke = class extends HTMLElement {
    static addInitializer(t) {
      this._$Ei(), (this.l ?? (this.l = [])).push(t);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [
        ...this._$Eh.keys()
      ];
    }
    static createProperty(t, r = wr) {
      if (r.state && (r.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = true), this.elementProperties.set(t, r), !r.noAccessor) {
        const s = Symbol(), n = this.getPropertyDescriptor(t, s, r);
        n !== void 0 && tn(this.prototype, t, n);
      }
    }
    static getPropertyDescriptor(t, r, s) {
      const { get: n, set: a } = rn(this.prototype, t) ?? {
        get() {
          return this[r];
        },
        set(o) {
          this[r] = o;
        }
      };
      return {
        get: n,
        set(o) {
          const c = n == null ? void 0 : n.call(this);
          a == null ? void 0 : a.call(this, o), this.requestUpdate(t, c, s);
        },
        configurable: true,
        enumerable: true
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) ?? wr;
    }
    static _$Ei() {
      if (this.hasOwnProperty(lt("elementProperties"))) return;
      const t = an(this);
      t.finalize(), t.l !== void 0 && (this.l = [
        ...t.l
      ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(lt("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(lt("properties"))) {
        const r = this.properties, s = [
          ...sn(r),
          ...nn(r)
        ];
        for (const n of s) this.createProperty(n, r[n]);
      }
      const t = this[Symbol.metadata];
      if (t !== null) {
        const r = litPropertyMetadata.get(t);
        if (r !== void 0) for (const [s, n] of r) this.elementProperties.set(s, n);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [r, s] of this.elementProperties) {
        const n = this._$Eu(r, s);
        n !== void 0 && this._$Eh.set(n, r);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(t) {
      const r = [];
      if (Array.isArray(t)) {
        const s = new Set(t.flat(1 / 0).reverse());
        for (const n of s) r.unshift(hr(n));
      } else t !== void 0 && r.push(hr(t));
      return r;
    }
    static _$Eu(t, r) {
      const s = r.attribute;
      return s === false ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a;
      this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a = this.constructor.l) == null ? void 0 : _a.forEach((t) => t(this));
    }
    addController(t) {
      var _a;
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((_a = t.hostConnected) == null ? void 0 : _a.call(t));
    }
    removeController(t) {
      var _a;
      (_a = this._$EO) == null ? void 0 : _a.delete(t);
    }
    _$E_() {
      const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
      for (const s of r.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
      t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
      const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return Qs(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
      var _a;
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a = this._$EO) == null ? void 0 : _a.forEach((t) => {
        var _a2;
        return (_a2 = t.hostConnected) == null ? void 0 : _a2.call(t);
      });
    }
    enableUpdating(t) {
    }
    disconnectedCallback() {
      var _a;
      (_a = this._$EO) == null ? void 0 : _a.forEach((t) => {
        var _a2;
        return (_a2 = t.hostDisconnected) == null ? void 0 : _a2.call(t);
      });
    }
    attributeChangedCallback(t, r, s) {
      this._$AK(t, s);
    }
    _$ET(t, r) {
      var _a;
      const s = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, s);
      if (n !== void 0 && s.reflect === true) {
        const a = (((_a = s.converter) == null ? void 0 : _a.toAttribute) !== void 0 ? s.converter : Kt).toAttribute(r, s.type);
        this._$Em = t, a == null ? this.removeAttribute(n) : this.setAttribute(n, a), this._$Em = null;
      }
    }
    _$AK(t, r) {
      var _a, _b2;
      const s = this.constructor, n = s._$Eh.get(t);
      if (n !== void 0 && this._$Em !== n) {
        const a = s.getPropertyOptions(n), o = typeof a.converter == "function" ? {
          fromAttribute: a.converter
        } : ((_a = a.converter) == null ? void 0 : _a.fromAttribute) !== void 0 ? a.converter : Kt;
        this._$Em = n;
        const c = o.fromAttribute(r, a.type);
        this[n] = c ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(n)) ?? c, this._$Em = null;
      }
    }
    requestUpdate(t, r, s, n = false, a) {
      var _a;
      if (t !== void 0) {
        const o = this.constructor;
        if (n === false && (a = this[t]), s ?? (s = o.getPropertyOptions(t)), !((s.hasChanged ?? Ur)(a, r) || s.useDefault && s.reflect && a === ((_a = this._$Ej) == null ? void 0 : _a.get(t)) && !this.hasAttribute(o._$Eu(t, s)))) return;
        this.C(t, r, s);
      }
      this.isUpdatePending === false && (this._$ES = this._$EP());
    }
    C(t, r, { useDefault: s, reflect: n, wrapped: a }, o) {
      s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? r ?? this[t]), a !== true || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (r = void 0), this._$AL.set(t, r)), n === true && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (r) {
        Promise.reject(r);
      }
      const t = this.scheduleUpdate();
      return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a;
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [n, a] of this._$Ep) this[n] = a;
          this._$Ep = void 0;
        }
        const s = this.constructor.elementProperties;
        if (s.size > 0) for (const [n, a] of s) {
          const { wrapped: o } = a, c = this[n];
          o !== true || this._$AL.has(n) || c === void 0 || this.C(n, void 0, a, c);
        }
      }
      let t = false;
      const r = this._$AL;
      try {
        t = this.shouldUpdate(r), t ? (this.willUpdate(r), (_a = this._$EO) == null ? void 0 : _a.forEach((s) => {
          var _a2;
          return (_a2 = s.hostUpdate) == null ? void 0 : _a2.call(s);
        }), this.update(r)) : this._$EM();
      } catch (s) {
        throw t = false, this._$EM(), s;
      }
      t && this._$AE(r);
    }
    willUpdate(t) {
    }
    _$AE(t) {
      var _a;
      (_a = this._$EO) == null ? void 0 : _a.forEach((r) => {
        var _a2;
        return (_a2 = r.hostUpdated) == null ? void 0 : _a2.call(r);
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
      this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
    }
    updated(t) {
    }
    firstUpdated(t) {
    }
  };
  Ke.elementStyles = [], Ke.shadowRootOptions = {
    mode: "open"
  }, Ke[lt("elementProperties")] = /* @__PURE__ */ new Map(), Ke[lt("finalized")] = /* @__PURE__ */ new Map(), cn == null ? void 0 : cn({
    ReactiveElement: Ke
  }), (Rt.reactiveElementVersions ?? (Rt.reactiveElementVersions = [])).push("2.1.2");
  let Xt, gr, Pt, mr, Rr, Se, Dr, ln, Le, ht, ft, Zt, dn, Ht, tt, Cr, br, Ue, Nr, vr, $r, Wr, Ar, De;
  Xt = globalThis;
  gr = (e) => e;
  Pt = Xt.trustedTypes;
  mr = Pt ? Pt.createPolicy("lit-html", {
    createHTML: (e) => e
  }) : void 0;
  Rr = "$lit$";
  Se = `lit$${Math.random().toFixed(9).slice(2)}$`;
  Dr = "?" + Se;
  ln = `<${Dr}>`;
  Le = document;
  ht = () => Le.createComment("");
  ft = (e) => e === null || typeof e != "object" && typeof e != "function";
  Zt = Array.isArray;
  dn = (e) => Zt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function";
  Ht = `[ 	
\f\r]`;
  tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  Cr = /-->/g;
  br = />/g;
  Ue = RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  Nr = /'/g;
  vr = /"/g;
  $r = /^(?:script|style|textarea|title)$/i;
  Wr = (e) => (t, ...r) => ({
    _$litType$: e,
    strings: t,
    values: r
  });
  Rn = Wr(1);
  Dn = Wr(2);
  Ge = Symbol.for("lit-noChange");
  Q = Symbol.for("lit-nothing");
  Ar = /* @__PURE__ */ new WeakMap();
  De = Le.createTreeWalker(Le, 129);
  function Lr(e, t) {
    if (!Zt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return mr !== void 0 ? mr.createHTML(t) : t;
  }
  const un = (e, t) => {
    const r = e.length - 1, s = [];
    let n, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = tt;
    for (let c = 0; c < r; c++) {
      const d = e[c];
      let l, u, p = -1, g = 0;
      for (; g < d.length && (o.lastIndex = g, u = o.exec(d), u !== null); ) g = o.lastIndex, o === tt ? u[1] === "!--" ? o = Cr : u[1] !== void 0 ? o = br : u[2] !== void 0 ? ($r.test(u[2]) && (n = RegExp("</" + u[2], "g")), o = Ue) : u[3] !== void 0 && (o = Ue) : o === Ue ? u[0] === ">" ? (o = n ?? tt, p = -1) : u[1] === void 0 ? p = -2 : (p = o.lastIndex - u[2].length, l = u[1], o = u[3] === void 0 ? Ue : u[3] === '"' ? vr : Nr) : o === vr || o === Nr ? o = Ue : o === Cr || o === br ? o = tt : (o = Ue, n = void 0);
      const v = o === Ue && e[c + 1].startsWith("/>") ? " " : "";
      a += o === tt ? d + ln : p >= 0 ? (s.push(l), d.slice(0, p) + Rr + d.slice(p) + Se + v) : d + Se + (p === -2 ? c : v);
    }
    return [
      Lr(e, a + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")),
      s
    ];
  };
  class wt {
    constructor({ strings: t, _$litType$: r }, s) {
      let n;
      this.parts = [];
      let a = 0, o = 0;
      const c = t.length - 1, d = this.parts, [l, u] = un(t, r);
      if (this.el = wt.createElement(l, s), De.currentNode = this.el.content, r === 2 || r === 3) {
        const p = this.el.content.firstChild;
        p.replaceWith(...p.childNodes);
      }
      for (; (n = De.nextNode()) !== null && d.length < c; ) {
        if (n.nodeType === 1) {
          if (n.hasAttributes()) for (const p of n.getAttributeNames()) if (p.endsWith(Rr)) {
            const g = u[o++], v = n.getAttribute(p).split(Se), P = /([.?@])?(.*)/.exec(g);
            d.push({
              type: 1,
              index: a,
              name: P[2],
              strings: v,
              ctor: P[1] === "." ? hn : P[1] === "?" ? fn : P[1] === "@" ? wn : Dt
            }), n.removeAttribute(p);
          } else p.startsWith(Se) && (d.push({
            type: 6,
            index: a
          }), n.removeAttribute(p));
          if ($r.test(n.tagName)) {
            const p = n.textContent.split(Se), g = p.length - 1;
            if (g > 0) {
              n.textContent = Pt ? Pt.emptyScript : "";
              for (let v = 0; v < g; v++) n.append(p[v], ht()), De.nextNode(), d.push({
                type: 2,
                index: ++a
              });
              n.append(p[g], ht());
            }
          }
        } else if (n.nodeType === 8) if (n.data === Dr) d.push({
          type: 2,
          index: a
        });
        else {
          let p = -1;
          for (; (p = n.data.indexOf(Se, p + 1)) !== -1; ) d.push({
            type: 7,
            index: a
          }), p += Se.length - 1;
        }
        a++;
      }
    }
    static createElement(t, r) {
      const s = Le.createElement("template");
      return s.innerHTML = t, s;
    }
  }
  function Xe(e, t, r = e, s) {
    var _a, _b2;
    if (t === Ge) return t;
    let n = s !== void 0 ? (_a = r._$Co) == null ? void 0 : _a[s] : r._$Cl;
    const a = ft(t) ? void 0 : t._$litDirective$;
    return (n == null ? void 0 : n.constructor) !== a && ((_b2 = n == null ? void 0 : n._$AO) == null ? void 0 : _b2.call(n, false), a === void 0 ? n = void 0 : (n = new a(e), n._$AT(e, r, s)), s !== void 0 ? (r._$Co ?? (r._$Co = []))[s] = n : r._$Cl = n), n !== void 0 && (t = Xe(e, n._$AS(e, t.values), n, s)), t;
  }
  class pn {
    constructor(t, r) {
      this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      const { el: { content: r }, parts: s } = this._$AD, n = ((t == null ? void 0 : t.creationScope) ?? Le).importNode(r, true);
      De.currentNode = n;
      let a = De.nextNode(), o = 0, c = 0, d = s[0];
      for (; d !== void 0; ) {
        if (o === d.index) {
          let l;
          d.type === 2 ? l = new Ct(a, a.nextSibling, this, t) : d.type === 1 ? l = new d.ctor(a, d.name, d.strings, this, t) : d.type === 6 && (l = new gn(a, this, t)), this._$AV.push(l), d = s[++c];
        }
        o !== (d == null ? void 0 : d.index) && (a = De.nextNode(), o++);
      }
      return De.currentNode = Le, n;
    }
    p(t) {
      let r = 0;
      for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, r), r += s.strings.length - 2) : s._$AI(t[r])), r++;
    }
  }
  class Ct {
    get _$AU() {
      var _a;
      return ((_a = this._$AM) == null ? void 0 : _a._$AU) ?? this._$Cv;
    }
    constructor(t, r, s, n) {
      this.type = 2, this._$AH = Q, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = s, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? true;
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const r = this._$AM;
      return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, r = this) {
      t = Xe(this, t, r), ft(t) ? t === Q || t == null || t === "" ? (this._$AH !== Q && this._$AR(), this._$AH = Q) : t !== this._$AH && t !== Ge && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : dn(t) ? this.k(t) : this._(t);
    }
    O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
      this._$AH !== Q && ft(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Le.createTextNode(t)), this._$AH = t;
    }
    $(t) {
      var _a;
      const { values: r, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = wt.createElement(Lr(s.h, s.h[0]), this.options)), s);
      if (((_a = this._$AH) == null ? void 0 : _a._$AD) === n) this._$AH.p(r);
      else {
        const a = new pn(n, this), o = a.u(this.options);
        a.p(r), this.T(o), this._$AH = a;
      }
    }
    _$AC(t) {
      let r = Ar.get(t.strings);
      return r === void 0 && Ar.set(t.strings, r = new wt(t)), r;
    }
    k(t) {
      Zt(this._$AH) || (this._$AH = [], this._$AR());
      const r = this._$AH;
      let s, n = 0;
      for (const a of t) n === r.length ? r.push(s = new Ct(this.O(ht()), this.O(ht()), this, this.options)) : s = r[n], s._$AI(a), n++;
      n < r.length && (this._$AR(s && s._$AB.nextSibling, n), r.length = n);
    }
    _$AR(t = this._$AA.nextSibling, r) {
      var _a;
      for ((_a = this._$AP) == null ? void 0 : _a.call(this, false, true, r); t !== this._$AB; ) {
        const s = gr(t).nextSibling;
        gr(t).remove(), t = s;
      }
    }
    setConnected(t) {
      var _a;
      this._$AM === void 0 && (this._$Cv = t, (_a = this._$AP) == null ? void 0 : _a.call(this, t));
    }
  }
  class Dt {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, r, s, n, a) {
      this.type = 1, this._$AH = Q, this._$AN = void 0, this.element = t, this.name = r, this._$AM = n, this.options = a, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = Q;
    }
    _$AI(t, r = this, s, n) {
      const a = this.strings;
      let o = false;
      if (a === void 0) t = Xe(this, t, r, 0), o = !ft(t) || t !== this._$AH && t !== Ge, o && (this._$AH = t);
      else {
        const c = t;
        let d, l;
        for (t = a[0], d = 0; d < a.length - 1; d++) l = Xe(this, c[s + d], r, d), l === Ge && (l = this._$AH[d]), o || (o = !ft(l) || l !== this._$AH[d]), l === Q ? t = Q : t !== Q && (t += (l ?? "") + a[d + 1]), this._$AH[d] = l;
      }
      o && !n && this.j(t);
    }
    j(t) {
      t === Q ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
  }
  class hn extends Dt {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t) {
      this.element[this.name] = t === Q ? void 0 : t;
    }
  }
  class fn extends Dt {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== Q);
    }
  }
  class wn extends Dt {
    constructor(t, r, s, n, a) {
      super(t, r, s, n, a), this.type = 5;
    }
    _$AI(t, r = this) {
      if ((t = Xe(this, t, r, 0) ?? Q) === Ge) return;
      const s = this._$AH, n = t === Q && s !== Q || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, a = t !== Q && (s === Q || n);
      n && this.element.removeEventListener(this.name, this, s), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
      var _a;
      typeof this._$AH == "function" ? this._$AH.call(((_a = this.options) == null ? void 0 : _a.host) ?? this.element, t) : this._$AH.handleEvent(t);
    }
  }
  class gn {
    constructor(t, r, s) {
      this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = s;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      Xe(this, t);
    }
  }
  const mn = Xt.litHtmlPolyfillSupport;
  mn == null ? void 0 : mn(wt, Ct), (Xt.litHtmlVersions ?? (Xt.litHtmlVersions = [])).push("3.3.2");
  const Cn = (e, t, r) => {
    const s = (r == null ? void 0 : r.renderBefore) ?? t;
    let n = s._$litPart$;
    if (n === void 0) {
      const a = (r == null ? void 0 : r.renderBefore) ?? null;
      s._$litPart$ = n = new Ct(t.insertBefore(ht(), a), a, void 0, r ?? {});
    }
    return n._$AI(e), n;
  };
  const Qt = globalThis;
  _t = class extends Ke {
    constructor() {
      super(...arguments), this.renderOptions = {
        host: this
      }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a;
      const t = super.createRenderRoot();
      return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t.firstChild), t;
    }
    update(t) {
      const r = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Cn(r, this.renderRoot, this.renderOptions);
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
      return Ge;
    }
  };
  _t._$litElement$ = true, _t.finalized = true, (_b = Qt.litElementHydrateSupport) == null ? void 0 : _b.call(Qt, {
    LitElement: _t
  });
  const bn = Qt.litElementPolyfillSupport;
  bn == null ? void 0 : bn({
    LitElement: _t
  });
  (Qt.litElementVersions ?? (Qt.litElementVersions = [])).push("4.2.2");
  let dt, xe, Oe;
  $n = function(e, t) {
    dt = document.createElement("style"), xe = document.createElement("style"), Oe = document.createElement("style"), dt.textContent = Ye(e).core.cssText, xe.textContent = Ye(e).dark.cssText, Oe.textContent = Ye(e).light.cssText, document.head.appendChild(dt), document.head.appendChild(xe), document.head.appendChild(Oe), Mr(t);
  };
  function Mr(e) {
    xe && Oe && (e === "light" ? (xe.removeAttribute("media"), Oe.media = "enabled") : (Oe.removeAttribute("media"), xe.media = "enabled"));
  }
  function Nn(e) {
    dt && xe && Oe && (dt.textContent = Ye(e).core.cssText, xe.textContent = Ye(e).dark.cssText, Oe.textContent = Ye(e).light.cssText);
  }
  function Ye(e) {
    return {
      core: Je`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${pe((e == null ? void 0 : e["--w3m-color-mix-strength"]) ? `${e["--w3m-color-mix-strength"]}%` : "0%")};
        --w3m-font-family: ${pe((e == null ? void 0 : e["--w3m-font-family"]) || "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${pe((e == null ? void 0 : e["--w3m-font-size-master"]) || "10px")};
        --w3m-border-radius-master: ${pe((e == null ? void 0 : e["--w3m-border-radius-master"]) || "4px")};
        --w3m-z-index: ${pe((e == null ? void 0 : e["--w3m-z-index"]) || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
      light: Je`
      :root {
        --w3m-color-mix: ${pe((e == null ? void 0 : e["--w3m-color-mix"]) || "#fff")};
        --w3m-accent: ${pe(Te(e, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${pe(Te(e, "dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
      dark: Je`
      :root {
        --w3m-color-mix: ${pe((e == null ? void 0 : e["--w3m-color-mix"]) || "#000")};
        --w3m-accent: ${pe(Te(e, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${pe(Te(e, "light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `
    };
  }
  Wn = Je`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`;
  Ln = Je`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
  Mn = Je`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;
  function vn(e) {
    if (e.length >= 255) throw new TypeError("Alphabet too long");
    const t = new Uint8Array(256);
    for (let l = 0; l < t.length; l++) t[l] = 255;
    for (let l = 0; l < e.length; l++) {
      const u = e.charAt(l), p = u.charCodeAt(0);
      if (t[p] !== 255) throw new TypeError(u + " is ambiguous");
      t[p] = l;
    }
    const r = e.length, s = e.charAt(0), n = Math.log(r) / Math.log(256), a = Math.log(256) / Math.log(r);
    function o(l) {
      if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (l.length === 0) return "";
      let u = 0, p = 0, g = 0;
      const v = l.length;
      for (; g !== v && l[g] === 0; ) g++, u++;
      const P = (v - g) * a + 1 >>> 0, w = new Uint8Array(P);
      for (; g !== v; ) {
        let H = l[g], W = 0;
        for (let q = P - 1; (H !== 0 || W < p) && q !== -1; q--, W++) H += 256 * w[q] >>> 0, w[q] = H % r >>> 0, H = H / r >>> 0;
        if (H !== 0) throw new Error("Non-zero carry");
        p = W, g++;
      }
      let C = P - p;
      for (; C !== P && w[C] === 0; ) C++;
      let _ = s.repeat(u);
      for (; C < P; ++C) _ += e.charAt(w[C]);
      return _;
    }
    function c(l) {
      if (typeof l != "string") throw new TypeError("Expected String");
      if (l.length === 0) return new Uint8Array();
      let u = 0, p = 0, g = 0;
      for (; l[u] === s; ) p++, u++;
      const v = (l.length - u) * n + 1 >>> 0, P = new Uint8Array(v);
      for (; u < l.length; ) {
        const H = l.charCodeAt(u);
        if (H > 255) return;
        let W = t[H];
        if (W === 255) return;
        let q = 0;
        for (let X = v - 1; (W !== 0 || q < g) && X !== -1; X--, q++) W += r * P[X] >>> 0, P[X] = W % 256 >>> 0, W = W / 256 >>> 0;
        if (W !== 0) throw new Error("Non-zero carry");
        g = q, u++;
      }
      let w = v - g;
      for (; w !== v && P[w] === 0; ) w++;
      const C = new Uint8Array(p + (v - w));
      let _ = p;
      for (; w !== v; ) C[_++] = P[w++];
      return C;
    }
    function d(l) {
      const u = c(l);
      if (u) return u;
      throw new Error("Non-base" + r + " character");
    }
    return {
      encode: o,
      decodeUnsafe: c,
      decode: d
    };
  }
  var An = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const En = vn(An), at = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603,
    DEFAULT_ALLOWED_ANCESTORS: [
      "http://localhost:*",
      "https://*.pages.dev",
      "https://*.vercel.app",
      "https://*.ngrok-free.app",
      "https://secure-mobile.walletconnect.com",
      "https://secure-mobile.walletconnect.org"
    ]
  };
  function bt(e) {
    return {
      formatters: void 0,
      fees: void 0,
      serializers: void 0,
      ...e
    };
  }
  const Er = bt({
    id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    name: "Solana",
    network: "solana-mainnet",
    nativeCurrency: {
      name: "Solana",
      symbol: "SOL",
      decimals: 9
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1"
        ]
      }
    },
    blockExplorers: {
      default: {
        name: "Solscan",
        url: "https://solscan.io"
      }
    },
    testnet: false,
    chainNamespace: "solana",
    caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"
  }), yr = bt({
    id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    name: "Solana Devnet",
    network: "solana-devnet",
    nativeCurrency: {
      name: "Solana",
      symbol: "SOL",
      decimals: 9
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1"
        ]
      }
    },
    blockExplorers: {
      default: {
        name: "Solscan",
        url: "https://solscan.io"
      }
    },
    testnet: true,
    chainNamespace: "solana",
    caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"
  });
  bt({
    id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
    name: "Solana Testnet",
    network: "solana-testnet",
    nativeCurrency: {
      name: "Solana",
      symbol: "SOL",
      decimals: 9
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1"
        ]
      }
    },
    blockExplorers: {
      default: {
        name: "Solscan",
        url: "https://solscan.io"
      }
    },
    testnet: true,
    chainNamespace: "solana",
    caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
  });
  bt({
    id: "000000000019d6689c085ae165831e93",
    caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
    chainNamespace: "bip122",
    name: "Bitcoin",
    nativeCurrency: {
      name: "Bitcoin",
      symbol: "BTC",
      decimals: 8
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1"
        ]
      }
    }
  });
  bt({
    id: "000000000933ea01ad0ee984209779ba",
    caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
    chainNamespace: "bip122",
    name: "Bitcoin Testnet",
    nativeCurrency: {
      name: "Bitcoin",
      symbol: "BTC",
      decimals: 8
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1"
        ]
      }
    },
    testnet: true
  });
  const yn = {
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
  }, St = {
    getMethodsByChainNamespace(e) {
      return yn[e] || [];
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
      const r = {
        ...e
      }, s = /* @__PURE__ */ new Set();
      if (t.methods && Object.keys(t.methods).forEach((n) => s.add(n)), t.chains && Object.keys(t.chains).forEach((n) => s.add(n)), t.events && Object.keys(t.events).forEach((n) => s.add(n)), t.rpcMap && Object.keys(t.rpcMap).forEach((n) => {
        const [a] = n.split(":");
        a && s.add(a);
      }), s.forEach((n) => {
        r[n] || (r[n] = this.createDefaultNamespace(n));
      }), t.methods && Object.entries(t.methods).forEach(([n, a]) => {
        r[n] && (r[n].methods = a);
      }), t.chains && Object.entries(t.chains).forEach(([n, a]) => {
        r[n] && (r[n].chains = a);
      }), t.events && Object.entries(t.events).forEach(([n, a]) => {
        r[n] && (r[n].events = a);
      }), t.rpcMap) {
        const n = /* @__PURE__ */ new Set();
        Object.entries(t.rpcMap).forEach(([a, o]) => {
          const [c, d] = a.split(":");
          !c || !d || !r[c] || (r[c].rpcMap || (r[c].rpcMap = {}), n.has(c) || (r[c].rpcMap = {}, n.add(c)), r[c].rpcMap[d] = o);
        });
      }
      return r;
    },
    createNamespaces(e, t) {
      const r = e.reduce((s, n) => {
        const { id: a, chainNamespace: o, rpcUrls: c } = n, d = c.default.http[0];
        s[o] || (s[o] = this.createDefaultNamespace(o));
        const l = `${o}:${a}`, u = s[o];
        switch (u.chains.push(l), l) {
          case Er.caipNetworkId:
            u.chains.push(Er.deprecatedCaipNetworkId);
            break;
          case yr.caipNetworkId:
            u.chains.push(yr.deprecatedCaipNetworkId);
            break;
        }
        return (u == null ? void 0 : u.rpcMap) && d && (u.rpcMap[a] = d), s;
      }, {});
      return this.applyNamespaceOverrides(r, t);
    },
    resolveReownName: async (e) => {
      var _a;
      const t = await ct.resolveName(e);
      return ((_a = (Object.values(t == null ? void 0 : t.addresses) || [])[0]) == null ? void 0 : _a.address) || false;
    },
    getChainsFromNamespaces(e = {}) {
      return Object.values(e).flatMap((t) => {
        const r = t.chains || [], s = t.accounts.map((n) => {
          const [a, o] = n.split(":");
          return `${a}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...r,
          ...s
        ]));
      });
    },
    isSessionEventData(e) {
      return typeof e == "object" && e !== null && "id" in e && "topic" in e && "params" in e && typeof e.params == "object" && e.params !== null && "chainId" in e.params && "event" in e.params && typeof e.params.event == "object" && e.params.event !== null;
    },
    isOriginAllowed(e, t, r) {
      for (const s of [
        ...t,
        ...r
      ]) if (s.includes("*")) {
        const a = `^${s.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&").replace(/\\\*/gu, ".*")}$`;
        if (new RegExp(a, "u").test(e)) return true;
      } else if (s === e) return true;
      return false;
    }
  };
  class Br {
    constructor({ provider: t, namespace: r }) {
      this.id = A.CONNECTOR_ID.WALLET_CONNECT, this.name = xt.ConnectorNamesMap[A.CONNECTOR_ID.WALLET_CONNECT], this.type = "WALLET_CONNECT", this.imageId = xt.ConnectorImageIds[A.CONNECTOR_ID.WALLET_CONNECT], this.getCaipNetworks = i.getCaipNetworks.bind(i), this.caipNetworks = this.getCaipNetworks(), this.provider = t, this.chain = r;
    }
    get chains() {
      return this.getCaipNetworks();
    }
    async connectWalletConnect() {
      if (!await this.authenticate()) {
        const r = this.getCaipNetworks(), s = h.state.universalProviderConfigOverride, n = St.createNamespaces(r, s);
        await this.provider.connect({
          optionalNamespaces: n
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
      const t = this.chains.map((r) => r.caipNetworkId);
      return it.universalProviderAuthenticate({
        universalProvider: this.provider,
        chains: t,
        methods: kn
      });
    }
  }
  const kn = [
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
  class In {
    constructor(t) {
      this.availableConnectors = [], this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (r) => i.getCaipNetworks(r), t && this.construct(t);
    }
    construct(t) {
      this.projectId = t.projectId, this.namespace = t.namespace, this.adapterType = t.adapterType;
    }
    get connectors() {
      return this.availableConnectors;
    }
    get networks() {
      return this.getCaipNetworks(this.namespace);
    }
    setAuthProvider(t) {
      this.addConnector({
        id: A.CONNECTOR_ID.AUTH,
        type: "AUTH",
        name: A.CONNECTOR_NAMES.AUTH,
        provider: t,
        imageId: xt.ConnectorImageIds[A.CONNECTOR_ID.AUTH],
        chain: this.namespace,
        chains: []
      });
    }
    addConnector(...t) {
      const r = /* @__PURE__ */ new Set();
      this.availableConnectors = [
        ...t,
        ...this.availableConnectors
      ].filter((s) => r.has(s.id) ? false : (r.add(s.id), true)), this.emit("connectors", this.availableConnectors);
    }
    setStatus(t, r) {
      N.setStatus(t, r);
    }
    on(t, r) {
      var _a;
      this.eventListeners.has(t) || this.eventListeners.set(t, /* @__PURE__ */ new Set()), (_a = this.eventListeners.get(t)) == null ? void 0 : _a.add(r);
    }
    off(t, r) {
      const s = this.eventListeners.get(t);
      s && s.delete(r);
    }
    removeAllEventListeners() {
      this.eventListeners.forEach((t) => {
        t.clear();
      });
    }
    emit(t, r) {
      const s = this.eventListeners.get(t);
      s && s.forEach((n) => n(r));
    }
    async connectWalletConnect(t) {
      return {
        clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
      };
    }
    async switchNetwork(t) {
      var _a;
      const { caipNetwork: r, providerType: s } = t;
      if (!t.provider) return;
      const n = "provider" in t.provider ? t.provider.provider : t.provider;
      if (s === "WALLET_CONNECT") {
        n.setDefaultChain(r.caipNetworkId);
        return;
      }
      if (n && s === "AUTH") {
        const a = n, o = (_a = N.state.preferredAccountTypes) == null ? void 0 : _a[r.chainNamespace];
        await a.switchNetwork(r.caipNetworkId);
        const c = await a.getUser({
          chainId: r.caipNetworkId,
          preferredAccountType: o
        });
        this.emit("switchNetwork", c);
      }
    }
    getWalletConnectConnector() {
      const t = this.connectors.find((r) => r instanceof Br);
      if (!t) throw new Error("WalletConnectConnector not found");
      return t;
    }
  }
  class _n extends In {
    setUniversalProvider(t) {
      this.addConnector(new Br({
        provider: t,
        caipNetworks: this.getCaipNetworks(),
        namespace: this.namespace
      }));
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
        await this.getWalletConnectConnector().disconnect();
      } catch (t) {
        console.warn("UniversalAdapter:disconnect - error", t);
      }
    }
    async getAccounts({ namespace: t }) {
      var _a, _b2, _c, _d, _e2;
      const s = ((_e2 = (_d = (_c = (_b2 = (_a = this.provider) == null ? void 0 : _a.session) == null ? void 0 : _b2.namespaces) == null ? void 0 : _c[t]) == null ? void 0 : _d.accounts) == null ? void 0 : _e2.map((n) => {
        const [, , a] = n.split(":");
        return a;
      }).filter((n, a, o) => o.indexOf(n) === a)) || [];
      return Promise.resolve({
        accounts: s.map((n) => T.createAccount(t, n, t === "bip122" ? "payment" : "eoa"))
      });
    }
    async syncConnectors() {
      return Promise.resolve();
    }
    async getBalance(t) {
      var _a, _b2, _c, _d, _e2;
      if (!(t.caipNetwork && ee.BALANCE_SUPPORTED_CHAINS.includes((_a = t.caipNetwork) == null ? void 0 : _a.chainNamespace)) || ((_b2 = t.caipNetwork) == null ? void 0 : _b2.testnet)) return {
        balance: "0.00",
        symbol: ((_c = t.caipNetwork) == null ? void 0 : _c.nativeCurrency.symbol) || ""
      };
      if (N.state.balanceLoading && t.chainId === ((_d = i.state.activeCaipNetwork) == null ? void 0 : _d.id)) return {
        balance: N.state.balance || "0.00",
        symbol: N.state.balanceSymbol || ""
      };
      const n = (await N.fetchTokenBalance()).find((a) => {
        var _a2, _b3;
        return a.chainId === `${(_a2 = t.caipNetwork) == null ? void 0 : _a2.chainNamespace}:${t.chainId}` && a.symbol === ((_b3 = t.caipNetwork) == null ? void 0 : _b3.nativeCurrency.symbol);
      });
      return {
        balance: (n == null ? void 0 : n.quantity.numeric) || "0.00",
        symbol: (n == null ? void 0 : n.symbol) || ((_e2 = t.caipNetwork) == null ? void 0 : _e2.nativeCurrency.symbol) || ""
      };
    }
    async signMessage(t) {
      var _a, _b2, _c;
      const { provider: r, message: s, address: n } = t;
      if (!r) throw new Error("UniversalAdapter:signMessage - provider is undefined");
      let a = "";
      return ((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.chainNamespace) === A.CHAIN.SOLANA ? a = (await r.request({
        method: "solana_signMessage",
        params: {
          message: En.encode(new TextEncoder().encode(s)),
          pubkey: n
        }
      }, (_b2 = i.state.activeCaipNetwork) == null ? void 0 : _b2.caipNetworkId)).signature : a = await r.request({
        method: "personal_sign",
        params: [
          s,
          n
        ]
      }, (_c = i.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId), {
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
      var _a, _b2, _c, _d, _e2, _f;
      const { caipNetwork: r } = t, s = this.getWalletConnectConnector();
      if (r.chainNamespace === A.CHAIN.EVM) try {
        await ((_a = s.provider) == null ? void 0 : _a.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: er(r.id)
            }
          ]
        }));
      } catch (n) {
        if (n.code === at.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || n.code === at.ERROR_INVALID_CHAIN_ID || n.code === at.ERROR_CODE_DEFAULT || ((_c = (_b2 = n == null ? void 0 : n.data) == null ? void 0 : _b2.originalError) == null ? void 0 : _c.code) === at.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
          await ((_f = s.provider) == null ? void 0 : _f.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: er(r.id),
                rpcUrls: [
                  (_d = r == null ? void 0 : r.rpcUrls.chainDefault) == null ? void 0 : _d.http
                ],
                chainName: r.name,
                nativeCurrency: r.nativeCurrency,
                blockExplorerUrls: [
                  (_e2 = r.blockExplorers) == null ? void 0 : _e2.default.url
                ]
              }
            ]
          }));
        } catch {
          throw new Error("Chain is not supported");
        }
      }
      s.provider.setDefaultChain(r.caipNetworkId);
    }
    getWalletConnectProvider() {
      var _a;
      return (_a = this.connectors.find((s) => s.type === "WALLET_CONNECT")) == null ? void 0 : _a.provider;
    }
  }
  class Sn {
    constructor(t) {
      this.chainNamespaces = [], this.reportedAlertErrors = {}, this.getCaipNetwork = (r, s) => {
        var _a, _b2, _c, _d;
        if (r) {
          const n = (_b2 = (_a = i.getNetworkData(r)) == null ? void 0 : _a.requestedCaipNetworks) == null ? void 0 : _b2.find((c) => c.id === s);
          if (n) return n;
          const a = (_c = i.getNetworkData(r)) == null ? void 0 : _c.caipNetwork;
          return a || ((_d = i.getRequestedCaipNetworks(r).filter((c) => c.chainNamespace === r)) == null ? void 0 : _d[0]);
        }
        return i.state.activeCaipNetwork || this.defaultCaipNetwork;
      }, this.getCaipNetworkId = () => {
        const r = this.getCaipNetwork();
        if (r) return r.id;
      }, this.getCaipNetworks = (r) => i.getCaipNetworks(r), this.getActiveChainNamespace = () => i.state.activeChain, this.setRequestedCaipNetworks = (r, s) => {
        i.setRequestedCaipNetworks(r, s);
      }, this.getApprovedCaipNetworkIds = () => i.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (r) => i.state.activeChain === r || !r ? i.state.activeCaipAddress : i.getAccountProp("caipAddress", r), this.setClientId = (r) => {
        I.setClientId(r);
      }, this.getProvider = (r) => Y.getProvider(r), this.getProviderType = (r) => Y.getProviderId(r), this.getPreferredAccountType = (r) => {
        var _a;
        return (_a = N.state.preferredAccountTypes) == null ? void 0 : _a[r];
      }, this.setCaipAddress = (r, s) => {
        N.setCaipAddress(r, s);
      }, this.setBalance = (r, s, n) => {
        N.setBalance(r, s, n);
      }, this.setProfileName = (r, s) => {
        N.setProfileName(r, s);
      }, this.setProfileImage = (r, s) => {
        N.setProfileImage(r, s);
      }, this.setUser = (r, s) => {
        N.setUser(r, s), h.state.enableEmbedded && G.close();
      }, this.resetAccount = (r) => {
        N.resetAccount(r);
      }, this.setCaipNetwork = (r) => {
        i.setActiveCaipNetwork(r);
      }, this.setCaipNetworkOfNamespace = (r, s) => {
        i.setChainNetworkData(s, {
          caipNetwork: r
        });
      }, this.setAllAccounts = (r, s) => {
        N.setAllAccounts(r, s), h.setHasMultipleAddresses((r == null ? void 0 : r.length) > 1);
      }, this.setStatus = (r, s) => {
        N.setStatus(r, s), m.isConnected() ? b.setConnectionStatus("connected") : b.setConnectionStatus("disconnected");
      }, this.getAddressByChainNamespace = (r) => i.getAccountProp("address", r), this.setConnectors = (r) => {
        const s = [
          ...m.state.allConnectors,
          ...r
        ];
        m.setConnectors(s);
      }, this.setConnections = (r, s) => {
        k.setConnections(r, s);
      }, this.fetchIdentity = (r) => I.fetchIdentity(r), this.getReownName = (r) => ct.getNamesForAddress(r), this.getConnectors = () => m.getConnectors(), this.getConnectorImage = (r) => Tr.getConnectorImage(r), this.setConnectedWalletInfo = (r, s) => {
        const n = Y.getProviderId(s), a = r ? {
          ...r,
          type: n
        } : void 0;
        N.setConnectedWalletInfo(a, s);
      }, this.getIsConnectedState = () => !!i.state.activeCaipAddress, this.addAddressLabel = (r, s, n) => {
        N.addAddressLabel(r, s, n);
      }, this.removeAddressLabel = (r, s) => {
        N.removeAddressLabel(r, s);
      }, this.getAddress = (r) => i.state.activeChain === r || !r ? N.state.address : i.getAccountProp("address", r), this.setApprovedCaipNetworksData = (r) => i.setApprovedCaipNetworksData(r), this.resetNetwork = (r) => {
        i.resetNetwork(r);
      }, this.addConnector = (r) => {
        m.addConnector(r);
      }, this.resetWcConnection = () => {
        k.resetWcConnection();
      }, this.setAddressExplorerUrl = (r, s) => {
        N.setAddressExplorerUrl(r, s);
      }, this.setSmartAccountDeployed = (r, s) => {
        N.setSmartAccountDeployed(r, s);
      }, this.setSmartAccountEnabledNetworks = (r, s) => {
        i.setSmartAccountEnabledNetworks(r, s);
      }, this.setPreferredAccountType = (r, s) => {
        N.setPreferredAccountType(r, s);
      }, this.setEIP6963Enabled = (r) => {
        h.setEIP6963Enabled(r);
      }, this.handleUnsafeRPCRequest = () => {
        if (this.isOpen()) {
          if (this.isTransactionStackEmpty()) return;
          this.redirect("ApproveTransaction");
        } else this.open({
          view: "ApproveTransaction"
        });
      }, this.options = t, this.version = t.sdkVersion, this.caipNetworks = this.extendCaipNetworks(t), this.chainNamespaces = this.getChainNamespacesSet(t.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(t), this.chainAdapters = this.createAdapters(t.adapters), this.initialize(t);
    }
    getChainNamespacesSet(t, r) {
      const s = t == null ? void 0 : t.map((a) => a.namespace).filter((a) => !!a);
      if (s == null ? void 0 : s.length) return [
        ...new Set(s)
      ];
      const n = r == null ? void 0 : r.map((a) => a.chainNamespace);
      return [
        ...new Set(n)
      ];
    }
    async initialize(t) {
      var _a, _b2, _c;
      this.initControllers(t), await this.initChainAdapters(), await this.injectModalUi(), this.sendInitializeEvent(t), ve.set({
        initialized: true
      }), await this.syncExistingConnection(), (((_a = h.state.features) == null ? void 0 : _a.email) || Array.isArray((_b2 = h.state.features) == null ? void 0 : _b2.socials) && ((_c = h.state.features) == null ? void 0 : _c.socials.length) > 0) && await this.checkAllowedOrigins();
    }
    async checkAllowedOrigins() {
      const t = await y.fetchAllowedOrigins();
      if (t && T.isClient()) {
        const r = window.location.origin;
        St.isOriginAllowed(r, t, at.DEFAULT_ALLOWED_ANCESTORS) || Ve.open(ze.ALERT_ERRORS.INVALID_APP_CONFIGURATION, "error");
      } else Ve.open(ze.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
    }
    sendInitializeEvent(t) {
      var _a;
      const { ...r } = t;
      delete r.adapters, delete r.universalProvider, K.sendEvent({
        type: "track",
        event: "INITIALIZE",
        properties: {
          ...r,
          networks: t.networks.map((s) => s.id),
          siweConfig: {
            options: ((_a = t.siweConfig) == null ? void 0 : _a.options) || {}
          }
        }
      });
    }
    initControllers(t) {
      this.initializeOptionsController(t), this.initializeChainController(t), this.initializeThemeController(t), this.initializeConnectionController(t), this.initializeConnectorController();
    }
    initializeThemeController(t) {
      t.themeMode && le.setThemeMode(t.themeMode), t.themeVariables && le.setThemeVariables(t.themeVariables);
    }
    initializeChainController(t) {
      if (!this.connectionControllerClient || !this.networkControllerClient) throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");
      i.initialize(t.adapters ?? [], this.caipNetworks, {
        connectionControllerClient: this.connectionControllerClient,
        networkControllerClient: this.networkControllerClient
      });
      const r = this.getDefaultNetwork();
      r && i.setActiveCaipNetwork(r);
    }
    initializeConnectionController(t) {
      k.setWcBasic(t.basic ?? false);
    }
    initializeConnectorController() {
      m.initialize(this.chainNamespaces);
    }
    initializeOptionsController(t) {
      var _a;
      h.setDebug(t.debug !== false), h.setEnableWalletConnect(t.enableWalletConnect !== false), h.setEnableWalletGuide(t.enableWalletGuide !== false), h.setEnableWallets(t.enableWallets !== false), h.setEIP6963Enabled(t.enableEIP6963 !== false), h.setEnableNetworkSwitch(t.enableNetworkSwitch !== false), h.setEnableAuthLogger(t.enableAuthLogger !== false), h.setCustomRpcUrls(t.customRpcUrls), h.setSdkVersion(t.sdkVersion), h.setProjectId(t.projectId), h.setEnableEmbedded(t.enableEmbedded), h.setAllWallets(t.allWallets), h.setIncludeWalletIds(t.includeWalletIds), h.setExcludeWalletIds(t.excludeWalletIds), h.setFeaturedWalletIds(t.featuredWalletIds), h.setTokens(t.tokens), h.setTermsConditionsUrl(t.termsConditionsUrl), h.setPrivacyPolicyUrl(t.privacyPolicyUrl), h.setCustomWallets(t.customWallets), h.setFeatures(t.features), h.setAllowUnsupportedChain(t.allowUnsupportedChain), h.setUniversalProviderConfigOverride(t.universalProviderConfigOverride), h.setPreferUniversalLinks(t.experimental_preferUniversalLinks), h.setDefaultAccountTypes(t.defaultAccountTypes);
      const r = b.getPreferredAccountTypes() || {}, s = {
        ...h.state.defaultAccountTypes,
        ...r
      };
      N.setPreferredAccountTypes(s);
      const n = this.getDefaultMetaData();
      if (!t.metadata && n && (t.metadata = n), h.setMetadata(t.metadata), h.setDisableAppend(t.disableAppend), h.setEnableEmbedded(t.enableEmbedded), h.setSIWX(t.siwx), !t.projectId) {
        Ve.open(ze.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
        return;
      }
      if (((_a = t.adapters) == null ? void 0 : _a.find((o) => o.namespace === A.CHAIN.EVM)) && t.siweConfig) {
        if (t.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
        h.setSIWX(t.siweConfig.mapToSIWX());
      }
    }
    getDefaultMetaData() {
      var _a, _b2, _c, _d;
      return typeof window < "u" && typeof document < "u" ? {
        name: ((_b2 = (_a = document.getElementsByTagName("title")) == null ? void 0 : _a[0]) == null ? void 0 : _b2.textContent) || "",
        description: ((_c = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c.content) || "",
        url: window.location.origin,
        icons: [
          ((_d = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d.href) || ""
        ]
      } : null;
    }
    setUnsupportedNetwork(t) {
      const r = this.getActiveChainNamespace();
      if (r) {
        const s = qe.getUnsupportedNetwork(`${r}:${t}`);
        i.setActiveCaipNetwork(s);
      }
    }
    getDefaultNetwork() {
      return qe.getCaipNetworkFromStorage(this.defaultCaipNetwork);
    }
    extendCaipNetwork(t, r) {
      return qe.extendCaipNetwork(t, {
        customNetworkImageUrls: r.chainImages,
        projectId: r.projectId
      });
    }
    extendCaipNetworks(t) {
      return qe.extendCaipNetworks(t.networks, {
        customNetworkImageUrls: t.chainImages,
        customRpcUrls: t.customRpcUrls,
        projectId: t.projectId
      });
    }
    extendDefaultCaipNetwork(t) {
      const r = t.networks.find((n) => {
        var _a;
        return n.id === ((_a = t.defaultNetwork) == null ? void 0 : _a.id);
      });
      return r ? qe.extendCaipNetwork(r, {
        customNetworkImageUrls: t.chainImages,
        customRpcUrls: t.customRpcUrls,
        projectId: t.projectId
      }) : void 0;
    }
    createClients() {
      this.connectionControllerClient = {
        connectWalletConnect: async () => {
          var _a;
          const t = i.state.activeChain, r = this.getAdapter(t), s = (_a = this.getCaipNetwork(t)) == null ? void 0 : _a.id;
          if (!r) throw new Error("Adapter not found");
          const n = await r.connectWalletConnect(s);
          this.close(), this.setClientId((n == null ? void 0 : n.clientId) || null), b.setConnectedNamespaces([
            ...i.state.chains.keys()
          ]), this.chainNamespaces.forEach((a) => {
            m.setConnectorId(Ie.CONNECTOR_TYPE_WALLET_CONNECT, a);
          }), await this.syncWalletConnectAccount();
        },
        connectExternal: async ({ id: t, info: r, type: s, provider: n, chain: a, caipNetwork: o, socialUri: c }) => {
          var _a, _b2, _c, _d, _e2, _f;
          const d = i.state.activeChain, l = a || d, u = this.getAdapter(l);
          if (a && a !== d && !o) {
            const w = this.getCaipNetworks().find((C) => C.chainNamespace === a);
            w && this.setCaipNetwork(w);
          }
          if (!u) throw new Error("Adapter not found");
          const p = this.getCaipNetwork(l), g = await u.connect({
            id: t,
            info: r,
            type: s,
            provider: n,
            socialUri: c,
            chainId: (o == null ? void 0 : o.id) || (p == null ? void 0 : p.id),
            rpcUrl: ((_c = (_b2 = (_a = o == null ? void 0 : o.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b2.http) == null ? void 0 : _c[0]) || ((_f = (_e2 = (_d = p == null ? void 0 : p.rpcUrls) == null ? void 0 : _d.default) == null ? void 0 : _e2.http) == null ? void 0 : _f[0])
          });
          if (!g) return;
          b.addConnectedNamespace(l), this.syncProvider({
            ...g,
            chainNamespace: l
          });
          const v = N.state.allAccounts, { accounts: P } = (v == null ? void 0 : v.length) > 0 ? {
            accounts: [
              ...v
            ]
          } : await u.getAccounts({
            namespace: l,
            id: t
          });
          this.setAllAccounts(P, l), this.setStatus("connected", l), this.syncConnectedWalletInfo(l);
        },
        reconnectExternal: async ({ id: t, info: r, type: s, provider: n }) => {
          var _a;
          const a = i.state.activeChain, o = this.getAdapter(a);
          (o == null ? void 0 : o.reconnect) && (await (o == null ? void 0 : o.reconnect({
            id: t,
            info: r,
            type: s,
            provider: n,
            chainId: (_a = this.getCaipNetwork()) == null ? void 0 : _a.id
          })), b.addConnectedNamespace(a), this.syncConnectedWalletInfo(a));
        },
        disconnect: async (t) => {
          const r = t || i.state.activeChain, s = this.getAdapter(r), n = Y.getProvider(r), a = Y.getProviderId(r);
          await (s == null ? void 0 : s.disconnect({
            provider: n,
            providerType: a
          })), b.removeConnectedNamespace(r), Y.resetChain(r), this.setUser(void 0, r), this.setStatus("disconnected", r), this.setConnectedWalletInfo(void 0, r);
        },
        checkInstalled: (t) => t ? t.some((r) => {
          var _a;
          return !!((_a = window.ethereum) == null ? void 0 : _a[String(r)]);
        }) : !!window.ethereum,
        signMessage: async (t) => {
          var _a, _b2;
          return ((_b2 = await ((_a = this.getAdapter(i.state.activeChain)) == null ? void 0 : _a.signMessage({
            message: t,
            address: N.state.address,
            provider: Y.getProvider(i.state.activeChain)
          }))) == null ? void 0 : _b2.signature) || "";
        },
        sendTransaction: async (t) => {
          var _a;
          const r = t.chainNamespace;
          if (ee.SEND_SUPPORTED_NAMESPACES.includes(r)) {
            const s = this.getAdapter(i.state.activeChain), n = Y.getProvider(r);
            return ((_a = await (s == null ? void 0 : s.sendTransaction({
              ...t,
              caipNetwork: this.getCaipNetwork(),
              provider: n
            }))) == null ? void 0 : _a.hash) || "";
          }
          return "";
        },
        estimateGas: async (t) => {
          var _a;
          if (t.chainNamespace === A.CHAIN.EVM) {
            const r = this.getAdapter(i.state.activeChain), s = Y.getProvider(i.state.activeChain), n = this.getCaipNetwork();
            if (!n) throw new Error("CaipNetwork is undefined");
            return ((_a = await (r == null ? void 0 : r.estimateGas({
              ...t,
              provider: s,
              caipNetwork: n
            }))) == null ? void 0 : _a.gas) || 0n;
          }
          return 0n;
        },
        getEnsAvatar: async () => {
          var _a;
          return await this.syncIdentity({
            address: N.state.address,
            chainId: Number((_a = this.getCaipNetwork()) == null ? void 0 : _a.id),
            chainNamespace: i.state.activeChain
          }), N.state.profileImage || false;
        },
        getEnsAddress: async (t) => await St.resolveReownName(t),
        writeContract: async (t) => {
          var _a;
          const r = this.getAdapter(i.state.activeChain), s = this.getCaipNetwork(), n = this.getCaipAddress(), a = Y.getProvider(i.state.activeChain);
          if (!s || !n) throw new Error("CaipNetwork or CaipAddress is undefined");
          return (_a = await (r == null ? void 0 : r.writeContract({
            ...t,
            caipNetwork: s,
            provider: a,
            caipAddress: n
          }))) == null ? void 0 : _a.hash;
        },
        parseUnits: (t, r) => {
          var _a;
          return ((_a = this.getAdapter(i.state.activeChain)) == null ? void 0 : _a.parseUnits({
            value: t,
            decimals: r
          })) ?? 0n;
        },
        formatUnits: (t, r) => {
          var _a;
          return ((_a = this.getAdapter(i.state.activeChain)) == null ? void 0 : _a.formatUnits({
            value: t,
            decimals: r
          })) ?? "0";
        },
        getCapabilities: async (t) => {
          var _a;
          return await ((_a = this.getAdapter(i.state.activeChain)) == null ? void 0 : _a.getCapabilities(t));
        },
        grantPermissions: async (t) => {
          var _a;
          return await ((_a = this.getAdapter(i.state.activeChain)) == null ? void 0 : _a.grantPermissions(t));
        },
        revokePermissions: async (t) => {
          const r = this.getAdapter(i.state.activeChain);
          return (r == null ? void 0 : r.revokePermissions) ? await r.revokePermissions(t) : "0x";
        },
        walletGetAssets: async (t) => {
          var _a;
          return await ((_a = this.getAdapter(i.state.activeChain)) == null ? void 0 : _a.walletGetAssets(t)) ?? {};
        },
        updateBalance: (t) => {
          const r = this.getCaipNetwork(t);
          !r || !N.state.address || this.updateNativeBalance(N.state.address, r == null ? void 0 : r.id, t);
        }
      }, this.networkControllerClient = {
        switchCaipNetwork: async (t) => await this.switchCaipNetwork(t),
        getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData()
      }, k.setClient(this.connectionControllerClient);
    }
    getApprovedCaipNetworksData() {
      var _a, _b2, _c, _d, _e2;
      if (Y.getProviderId(i.state.activeChain) === Ie.CONNECTOR_TYPE_WALLET_CONNECT) {
        const r = (_b2 = (_a = this.universalProvider) == null ? void 0 : _a.session) == null ? void 0 : _b2.namespaces;
        return {
          supportsAllNetworks: ((_e2 = (_d = (_c = this.universalProvider) == null ? void 0 : _c.session) == null ? void 0 : _d.peer) == null ? void 0 : _e2.metadata.name) === "MetaMask Wallet",
          approvedCaipNetworkIds: this.getChainsFromNamespaces(r)
        };
      }
      return {
        supportsAllNetworks: true,
        approvedCaipNetworkIds: []
      };
    }
    async switchCaipNetwork(t) {
      var _a;
      if (!t) return;
      const r = t.chainNamespace;
      if (this.getAddressByChainNamespace(t.chainNamespace)) {
        const n = Y.getProvider(r), a = Y.getProviderId(r);
        if (t.chainNamespace === i.state.activeChain) await ((_a = this.getAdapter(r)) == null ? void 0 : _a.switchNetwork({
          caipNetwork: t,
          provider: n,
          providerType: a
        }));
        else if (this.setCaipNetwork(t), a === Ie.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
        else {
          const o = this.getAddressByChainNamespace(r);
          o && this.syncAccount({
            address: o,
            chainId: t.id,
            chainNamespace: r
          });
        }
      } else this.setCaipNetwork(t);
    }
    getChainsFromNamespaces(t = {}) {
      return Object.values(t).flatMap((r) => {
        const s = r.chains || [], n = r.accounts.map((a) => {
          const { chainId: o, chainNamespace: c } = Ee.parseCaipAddress(a);
          return `${c}:${o}`;
        });
        return Array.from(/* @__PURE__ */ new Set([
          ...s,
          ...n
        ]));
      });
    }
    createAdapters(t) {
      return this.createClients(), this.chainNamespaces.reduce((r, s) => {
        var _a;
        const n = t == null ? void 0 : t.find((a) => a.namespace === s);
        return n ? (n.construct({
          namespace: s,
          projectId: (_a = this.options) == null ? void 0 : _a.projectId,
          networks: this.getCaipNetworks()
        }), r[s] = n) : r[s] = new _n({
          namespace: s,
          networks: this.getCaipNetworks()
        }), r;
      }, {});
    }
    async initChainAdapter(t) {
      var _a;
      this.onConnectors(t), this.listenAdapter(t), (_a = this.chainAdapters) == null ? void 0 : _a[t].syncConnectors(this.options, this), await this.createUniversalProviderForAdapter(t);
    }
    async initChainAdapters() {
      await Promise.all(this.chainNamespaces.map(async (t) => {
        await this.initChainAdapter(t);
      }));
    }
    onConnectors(t) {
      var _a;
      (_a = this.getAdapter(t)) == null ? void 0 : _a.on("connectors", this.setConnectors.bind(this));
    }
    listenAdapter(t) {
      const r = this.getAdapter(t);
      if (!r) return;
      const s = b.getConnectionStatus();
      s === "connected" ? this.setStatus("connecting", t) : s === "disconnected" ? (b.clearAddressCache(), this.setStatus(s, t)) : this.setStatus(s, t), r.on("switchNetwork", ({ address: n, chainId: a }) => {
        const o = this.getCaipNetworks().find((l) => l.id === a || l.caipNetworkId === a), c = i.state.activeChain === t, d = i.getAccountProp("address", t);
        if (o) {
          const l = c && n ? n : d;
          l && this.syncAccount({
            address: l,
            chainId: o.id,
            chainNamespace: t
          });
        } else this.setUnsupportedNetwork(a);
      }), r.on("disconnect", this.disconnect.bind(this, t)), r.on("connections", (n) => {
        this.setConnections(n, t);
      }), r.on("pendingTransactions", () => {
        const n = N.state.address, a = i.state.activeCaipNetwork;
        !n || !(a == null ? void 0 : a.id) || this.updateNativeBalance(n, a.id, a.chainNamespace);
      }), r.on("accountChanged", ({ address: n, chainId: a }) => {
        var _a, _b2;
        const o = i.state.activeChain === t;
        o && a ? this.syncAccount({
          address: n,
          chainId: a,
          chainNamespace: t
        }) : o && ((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.id) ? this.syncAccount({
          address: n,
          chainId: (_b2 = i.state.activeCaipNetwork) == null ? void 0 : _b2.id,
          chainNamespace: t
        }) : this.syncAccountInfo(n, a, t), this.syncAllAccounts(t);
      });
    }
    async createUniversalProviderForAdapter(t) {
      var _a, _b2, _c;
      await this.getUniversalProvider(), this.universalProvider && ((_c = (_b2 = (_a = this.chainAdapters) == null ? void 0 : _a[t]) == null ? void 0 : _b2.setUniversalProvider) == null ? void 0 : _c.call(_b2, this.universalProvider));
    }
    async syncExistingConnection() {
      await Promise.allSettled(this.chainNamespaces.map((t) => this.syncNamespaceConnection(t)));
    }
    async syncNamespaceConnection(t) {
      try {
        const r = m.getConnectorId(t);
        switch (this.setStatus("connecting", t), r) {
          case A.CONNECTOR_ID.WALLET_CONNECT:
            await this.syncWalletConnectAccount();
            break;
          case A.CONNECTOR_ID.AUTH:
            break;
          default:
            await this.syncAdapterConnection(t);
        }
      } catch (r) {
        console.warn("AppKit couldn't sync existing connection", r), this.setStatus("disconnected", t);
      }
    }
    async syncAdapterConnection(t) {
      var _a, _b2, _c;
      const r = this.getAdapter(t), s = m.getConnectorId(t), n = this.getCaipNetwork(t), a = m.getConnectors(t).find((o) => o.id === s);
      try {
        if (!r || !a) throw new Error(`Adapter or connector not found for namespace ${t}`);
        if (!(n == null ? void 0 : n.id)) throw new Error("CaipNetwork not found");
        const o = await (r == null ? void 0 : r.syncConnection({
          namespace: t,
          id: a.id,
          chainId: n.id,
          rpcUrl: (_c = (_b2 = (_a = n == null ? void 0 : n.rpcUrls) == null ? void 0 : _a.default) == null ? void 0 : _b2.http) == null ? void 0 : _c[0]
        }));
        if (o) {
          const c = await (r == null ? void 0 : r.getAccounts({
            namespace: t,
            id: a.id
          }));
          c && c.accounts.length > 0 ? this.setAllAccounts(c.accounts, t) : this.setAllAccounts([
            T.createAccount(t, o.address, "eoa")
          ], t), this.syncProvider({
            ...o,
            chainNamespace: t
          }), await this.syncAccount({
            ...o,
            chainNamespace: t
          }), this.setStatus("connected", t);
        } else this.setStatus("disconnected", t);
      } catch {
        this.setStatus("disconnected", t);
      }
    }
    async syncWalletConnectAccount() {
      const t = this.chainNamespaces.map(async (r) => {
        var _a, _b2, _c, _d, _e2;
        const s = this.getAdapter(r), n = ((_d = (_c = (_b2 = (_a = this.universalProvider) == null ? void 0 : _a.session) == null ? void 0 : _b2.namespaces) == null ? void 0 : _c[r]) == null ? void 0 : _d.accounts) || [], a = (_e2 = i.state.activeCaipNetwork) == null ? void 0 : _e2.id, o = n.find((c) => {
          const { chainId: d } = Ee.parseCaipAddress(c);
          return d === (a == null ? void 0 : a.toString());
        }) || n[0];
        if (o) {
          const c = Ee.validateCaipAddress(o), { chainId: d, address: l } = Ee.parseCaipAddress(c);
          if (Y.setProviderId(r, Ie.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && i.state.activeCaipNetwork && (s == null ? void 0 : s.namespace) !== A.CHAIN.EVM) {
            const u = s == null ? void 0 : s.getWalletConnectProvider({
              caipNetworks: this.getCaipNetworks(),
              provider: this.universalProvider,
              activeCaipNetwork: i.state.activeCaipNetwork
            });
            Y.setProvider(r, u);
          } else Y.setProvider(r, this.universalProvider);
          m.setConnectorId(A.CONNECTOR_ID.WALLET_CONNECT, r), b.addConnectedNamespace(r), this.syncWalletConnectAccounts(r), await this.syncAccount({
            address: l,
            chainId: d,
            chainNamespace: r
          });
        } else this.setStatus("disconnected", r);
        this.syncConnectedWalletInfo(r), await i.setApprovedCaipNetworksData(r);
      });
      await Promise.all(t);
    }
    syncWalletConnectAccounts(t) {
      var _a, _b2, _c, _d, _e2;
      const r = (_e2 = (_d = (_c = (_b2 = (_a = this.universalProvider) == null ? void 0 : _a.session) == null ? void 0 : _b2.namespaces) == null ? void 0 : _c[t]) == null ? void 0 : _d.accounts) == null ? void 0 : _e2.map((s) => {
        const { address: n } = Ee.parseCaipAddress(s);
        return n;
      }).filter((s, n, a) => a.indexOf(s) === n);
      r && this.setAllAccounts(r.map((s) => T.createAccount(t, s, t === "bip122" ? "payment" : "eoa")), t);
    }
    syncProvider({ type: t, provider: r, id: s, chainNamespace: n }) {
      Y.setProviderId(n, t), Y.setProvider(n, r), m.setConnectorId(s, n);
    }
    async syncAllAccounts(t) {
      var _a;
      const r = m.getConnectorId(t);
      if (!r) return;
      const n = await ((_a = this.getAdapter(t)) == null ? void 0 : _a.getAccounts({
        namespace: t,
        id: r
      }));
      n && n.accounts.length > 0 && this.setAllAccounts(n.accounts, t);
    }
    async syncAccount(t) {
      var _a, _b2;
      const r = t.chainNamespace === i.state.activeChain, s = i.getCaipNetworkByNamespace(t.chainNamespace, t.chainId), { address: n, chainId: a, chainNamespace: o } = t, { chainId: c } = b.getActiveNetworkProps(), d = a || c, l = ((_a = i.state.activeCaipNetwork) == null ? void 0 : _a.name) === A.UNSUPPORTED_NETWORK_NAME, u = i.getNetworkProp("supportsAllNetworks", o);
      if (this.setStatus("connected", o), !(l && !u) && d) {
        let p = this.getCaipNetworks().find((P) => P.id.toString() === d.toString()), g = this.getCaipNetworks().find((P) => P.chainNamespace === o);
        if (!u && !p && !g) {
          const P = this.getApprovedCaipNetworkIds() || [], w = P.find((_) => {
            var _a2;
            return ((_a2 = Ee.parseCaipNetworkId(_)) == null ? void 0 : _a2.chainId) === d.toString();
          }), C = P.find((_) => {
            var _a2;
            return ((_a2 = Ee.parseCaipNetworkId(_)) == null ? void 0 : _a2.chainNamespace) === o;
          });
          p = this.getCaipNetworks().find((_) => _.caipNetworkId === w), g = this.getCaipNetworks().find((_) => _.caipNetworkId === C || "deprecatedCaipNetworkId" in _ && _.deprecatedCaipNetworkId === C);
        }
        const v = p || g;
        (v == null ? void 0 : v.chainNamespace) === i.state.activeChain ? h.state.enableNetworkSwitch && !h.state.allowUnsupportedChain && ((_b2 = i.state.activeCaipNetwork) == null ? void 0 : _b2.name) === A.UNSUPPORTED_NETWORK_NAME ? i.showUnsupportedChainUI() : this.setCaipNetwork(v) : r || s && this.setCaipNetworkOfNamespace(s, o), this.syncConnectedWalletInfo(o), Jt.isLowerCaseMatch(n, N.state.address) || this.syncAccountInfo(n, v == null ? void 0 : v.id, o), r ? await this.syncBalance({
          address: n,
          chainId: v == null ? void 0 : v.id,
          chainNamespace: o
        }) : await this.syncBalance({
          address: n,
          chainId: s == null ? void 0 : s.id,
          chainNamespace: o
        });
      }
    }
    async syncAccountInfo(t, r, s) {
      const n = this.getCaipAddress(s), a = r || (n == null ? void 0 : n.split(":")[1]);
      if (!a) return;
      const o = `${s}:${a}:${t}`;
      this.setCaipAddress(o, s), await this.syncIdentity({
        address: t,
        chainId: a,
        chainNamespace: s
      });
    }
    async syncReownName(t, r) {
      try {
        const s = await this.getReownName(t);
        if (s[0]) {
          const n = s[0];
          this.setProfileName(n.name, r);
        } else this.setProfileName(null, r);
      } catch {
        this.setProfileName(null, r);
      }
    }
    syncConnectedWalletInfo(t) {
      var _a;
      const r = m.getConnectorId(t), s = Y.getProviderId(t);
      if (s === Ie.CONNECTOR_TYPE_ANNOUNCED || s === Ie.CONNECTOR_TYPE_INJECTED) {
        if (r) {
          const n = this.getConnectors().find((a) => a.id === r);
          if (n) {
            const { info: a, name: o, imageUrl: c } = n, d = c || this.getConnectorImage(n);
            this.setConnectedWalletInfo({
              name: o,
              icon: d,
              ...a
            }, t);
          }
        }
      } else if (s === Ie.CONNECTOR_TYPE_WALLET_CONNECT) {
        const n = Y.getProvider(t);
        (n == null ? void 0 : n.session) && this.setConnectedWalletInfo({
          ...n.session.peer.metadata,
          name: n.session.peer.metadata.name,
          icon: (_a = n.session.peer.metadata.icons) == null ? void 0 : _a[0]
        }, t);
      } else if (r && r === A.CONNECTOR_ID.COINBASE) {
        const n = this.getConnectors().find((a) => a.id === A.CONNECTOR_ID.COINBASE);
        this.setConnectedWalletInfo({
          name: "Coinbase Wallet",
          icon: this.getConnectorImage(n)
        }, t);
      }
    }
    async syncBalance(t) {
      !Ir.getNetworksByNamespace(this.getCaipNetworks(), t.chainNamespace).find((s) => {
        var _a;
        return s.id.toString() === ((_a = t.chainId) == null ? void 0 : _a.toString());
      }) || !t.chainId || await this.updateNativeBalance(t.address, t.chainId, t.chainNamespace);
    }
    async updateNativeBalance(t, r, s) {
      const n = this.getAdapter(s), a = i.getCaipNetworkByNamespace(s, r);
      if (n) {
        const o = await n.getBalance({
          address: t,
          chainId: r,
          caipNetwork: a,
          tokens: this.options.tokens
        });
        return this.setBalance(o.balance, o.symbol, s), o;
      }
    }
    async initializeUniversalAdapter() {
      var _a, _b2, _c, _d, _e2, _f, _g, _h, _i, _j;
      const t = Gs.createLogger((s, ...n) => {
        s && this.handleAlertError(s), console.error(...n);
      }), r = {
        projectId: (_a = this.options) == null ? void 0 : _a.projectId,
        metadata: {
          name: ((_b2 = this.options) == null ? void 0 : _b2.metadata) ? (_c = this.options) == null ? void 0 : _c.metadata.name : "",
          description: ((_d = this.options) == null ? void 0 : _d.metadata) ? (_e2 = this.options) == null ? void 0 : _e2.metadata.description : "",
          url: ((_f = this.options) == null ? void 0 : _f.metadata) ? (_g = this.options) == null ? void 0 : _g.metadata.url : "",
          icons: ((_h = this.options) == null ? void 0 : _h.metadata) ? (_i = this.options) == null ? void 0 : _i.metadata.icons : [
            ""
          ]
        },
        logger: t
      };
      h.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await Zr.init(r), this.listenWalletConnect();
    }
    listenWalletConnect() {
      this.universalProvider && (this.universalProvider.on("display_uri", (t) => {
        k.setUri(t);
      }), this.universalProvider.on("connect", k.finalizeWcConnection), this.universalProvider.on("disconnect", () => {
        this.chainNamespaces.forEach((t) => {
          this.resetAccount(t);
        }), k.resetWcConnection();
      }), this.universalProvider.on("chainChanged", (t) => {
        const r = this.getCaipNetworks().find((n) => n.id == t), s = this.getCaipNetwork();
        if (!r) {
          this.setUnsupportedNetwork(t);
          return;
        }
        (s == null ? void 0 : s.id) !== (r == null ? void 0 : r.id) && this.setCaipNetwork(r);
      }), this.universalProvider.on("session_event", (t) => {
        if (St.isSessionEventData(t)) {
          const { name: r, data: s } = t.params.event;
          r === "accountsChanged" && Array.isArray(s) && T.isCaipAddress(s[0]) && this.syncAccount(Ee.parseCaipAddress(s[0]));
        }
      }));
    }
    createUniversalProvider() {
      var _a;
      return !this.universalProviderInitPromise && T.isClient() && ((_a = this.options) == null ? void 0 : _a.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
    }
    async getUniversalProvider() {
      if (!this.universalProvider) try {
        await this.createUniversalProvider();
      } catch (t) {
        K.sendEvent({
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
    handleAlertError(t) {
      const r = Object.entries(ze.UniversalProviderErrors).find(([, { message: c }]) => t.message.includes(c)), [s, n] = r ?? [], { message: a, alertErrorKey: o } = n ?? {};
      if (s && a && !this.reportedAlertErrors[s]) {
        const c = ze.ALERT_ERRORS[o];
        c && (Ve.open(c, "error"), this.reportedAlertErrors[s] = true);
      }
    }
    getAdapter(t) {
      var _a;
      if (t) return (_a = this.chainAdapters) == null ? void 0 : _a[t];
    }
    createAdapter(t) {
      var _a;
      if (!t) return;
      const r = t.namespace;
      if (!r) return;
      this.createClients();
      const s = t;
      s.namespace = r, s.construct({
        namespace: r,
        projectId: (_a = this.options) == null ? void 0 : _a.projectId,
        networks: this.getCaipNetworks()
      }), this.chainNamespaces.includes(r) || this.chainNamespaces.push(r), this.chainAdapters && (this.chainAdapters[r] = s);
    }
    async open(t) {
      if (await this.injectModalUi(), (t == null ? void 0 : t.uri) && k.setUri(t.uri), t == null ? void 0 : t.arguments) switch (t == null ? void 0 : t.view) {
        case "Swap":
          return G.open({
            ...t,
            data: {
              swap: t.arguments
            }
          });
      }
      return G.open(t);
    }
    async close(t = false) {
      await this.injectModalUi(), G.close(t);
    }
    setLoading(t, r) {
      G.setLoading(t, r);
    }
    async disconnect(t) {
      await k.disconnect(t);
    }
    getSIWX() {
      return h.state.siwx;
    }
    getError() {
      return "";
    }
    getChainId() {
      var _a;
      return (_a = i.state.activeCaipNetwork) == null ? void 0 : _a.id;
    }
    async switchNetwork(t) {
      const r = this.getCaipNetworks().find((s) => s.id === t.id);
      if (!r) {
        Ve.open(ze.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        return;
      }
      await i.switchActiveNetwork(r);
    }
    getWalletProvider() {
      return i.state.activeChain ? Y.state.providers[i.state.activeChain] : null;
    }
    getWalletProviderType() {
      return Y.getProviderId(i.state.activeChain);
    }
    subscribeProviders(t) {
      return Y.subscribeProviders(t);
    }
    getThemeMode() {
      return le.state.themeMode;
    }
    getThemeVariables() {
      return le.state.themeVariables;
    }
    setThemeMode(t) {
      le.setThemeMode(t), Mr(le.state.themeMode);
    }
    setTermsConditionsUrl(t) {
      h.setTermsConditionsUrl(t);
    }
    setPrivacyPolicyUrl(t) {
      h.setPrivacyPolicyUrl(t);
    }
    setThemeVariables(t) {
      le.setThemeVariables(t), Nn(le.state.themeVariables);
    }
    subscribeTheme(t) {
      return le.subscribe(t);
    }
    getWalletInfo() {
      return N.state.connectedWalletInfo;
    }
    getAccount(t) {
      var _a;
      const r = m.getAuthConnector(t), s = i.getAccountData(t), n = i.state.activeChain, a = b.getConnectedConnectorId(t);
      if (s) return {
        allAccounts: s.allAccounts,
        caipAddress: s.caipAddress,
        address: T.getPlainAddress(s.caipAddress),
        isConnected: !!s.caipAddress,
        status: s.status,
        embeddedWalletInfo: r && a === A.CONNECTOR_ID.AUTH ? {
          user: s.user ? {
            ...s.user,
            username: b.getConnectedSocialUsername()
          } : void 0,
          authProvider: s.socialProvider || "email",
          accountType: (_a = s.preferredAccountTypes) == null ? void 0 : _a[t || n],
          isSmartAccountDeployed: !!s.smartAccountDeployed
        } : void 0
      };
    }
    subscribeAccount(t, r) {
      const s = () => {
        const n = this.getAccount(r);
        n && t(n);
      };
      r ? i.subscribeChainProp("accountState", s, r) : i.subscribe(s), m.subscribe(s);
    }
    subscribeNetwork(t) {
      return i.subscribe(({ activeCaipNetwork: r }) => {
        t({
          caipNetwork: r,
          chainId: r == null ? void 0 : r.id,
          caipNetworkId: r == null ? void 0 : r.caipNetworkId
        });
      });
    }
    subscribeWalletInfo(t) {
      return N.subscribeKey("connectedWalletInfo", t);
    }
    subscribeShouldUpdateToAddress(t) {
      N.subscribeKey("shouldUpdateToAddress", t);
    }
    subscribeCaipNetworkChange(t) {
      i.subscribeKey("activeCaipNetwork", t);
    }
    getState() {
      return ve.state;
    }
    subscribeState(t) {
      return ve.subscribe(t);
    }
    showErrorMessage(t) {
      ge.showError(t);
    }
    showSuccessMessage(t) {
      ge.showSuccess(t);
    }
    getEvent() {
      return {
        ...K.state
      };
    }
    subscribeEvents(t) {
      return K.subscribe(t);
    }
    replace(t) {
      R.replace(t);
    }
    redirect(t) {
      R.push(t);
    }
    popTransactionStack(t) {
      R.popTransactionStack(t);
    }
    isOpen() {
      return G.state.open;
    }
    isTransactionStackEmpty() {
      return R.state.transactionStack.length === 0;
    }
    isTransactionShouldReplaceView() {
      var _a;
      return (_a = R.state.transactionStack[R.state.transactionStack.length - 1]) == null ? void 0 : _a.replace;
    }
    static getInstance() {
      return this.instance;
    }
    updateFeatures(t) {
      h.setFeatures(t);
    }
    updateOptions(t) {
      const s = {
        ...h.state || {},
        ...t
      };
      h.setOptions(s);
    }
    setConnectMethodsOrder(t) {
      h.setConnectMethodsOrder(t);
    }
    setWalletFeaturesOrder(t) {
      h.setWalletFeaturesOrder(t);
    }
    setCollapseWallets(t) {
      h.setCollapseWallets(t);
    }
    setSocialsOrder(t) {
      h.setSocialsOrder(t);
    }
    getConnectMethodsOrder() {
      return qt.getConnectOrderMethod(h.state.features, m.getConnectors());
    }
    addNetwork(t, r) {
      if (this.chainAdapters && !this.chainAdapters[t]) throw new Error(`Adapter for namespace ${t} doesn't exist`);
      const s = this.extendCaipNetwork(r, this.options);
      this.getCaipNetworks().find((n) => n.id === s.id) || i.addNetwork(s);
    }
    removeNetwork(t, r) {
      if (this.chainAdapters && !this.chainAdapters[t]) throw new Error(`Adapter for namespace ${t} doesn't exist`);
      this.getCaipNetworks().find((n) => n.id === r) && i.removeNetwork(t, r);
    }
  }
  let kr = false;
  class jr extends Sn {
    async open(t) {
      m.isConnected() || await super.open(t);
    }
    async close() {
      await super.close(), this.options.manualWCControl && k.finalizeWcConnection();
    }
    async syncIdentity(t) {
      return Promise.resolve();
    }
    async syncBalance(t) {
      return Promise.resolve();
    }
    async injectModalUi() {
      if (!kr && T.isClient()) {
        if (await tr(() => import("./basic-CS46loq2.js"), __vite__mapDeps([0,1,2,3])), await tr(() => import("./w3m-modal-CihAaYIo.js"), __vite__mapDeps([4,1,2,3])), !document.querySelector("w3m-modal")) {
          const r = document.createElement("w3m-modal");
          !h.state.disableAppend && !h.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", r);
        }
        kr = true;
      }
    }
  }
  const Tn = "1.7.6";
  function xn(e) {
    return new jr({
      ...e,
      basic: true,
      sdkVersion: `html-core-${Tn}`
    });
  }
  Bn = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppKit: jr,
    createAppKit: xn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  y as A,
  Ur as B,
  m as C,
  Kt as D,
  K as E,
  Ge as F,
  Bn as G,
  G as M,
  h as O,
  R,
  b as S,
  le as T,
  qt as W,
  __tla,
  _t as a,
  Rn as b,
  T as c,
  kt as d,
  Ln as e,
  Tr as f,
  k as g,
  A as h,
  Je as i,
  i as j,
  we as k,
  ge as l,
  ee as m,
  Q as n,
  Mn as o,
  he as p,
  te as q,
  Wn as r,
  re as s,
  J as t,
  Ve as u,
  Zs as v,
  Dn as w,
  it as x,
  N as y,
  $n as z
};
