import { i as N, e as G, r as q, a as O, b as c, C as M, A as z, O as he, c as j, E as ee, R as U, d as Ne, f as K, g as k, S as ht, h as Ci, W as ft, j as Zt, k as yn, T as en, l as Qe, M as oi, m as ri, w as ze, n as xn, o as Ri } from "./core-BMVRSG4c.js";
import { n as u, c as B, o as I, r as E, U as de, e as $i, f as _i, a as Ii } from "./index-B9HTR4Bx.js";
import { n as Ei } from "./main-v_QDCm_K.js";
const Wi = N`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;
var _e = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let fe = class extends O {
  constructor() {
    super(...arguments), this.size = "md", this.name = "", this.installed = false, this.badgeSize = "xs";
  }
  render() {
    let e = "xxs";
    return this.size === "lg" ? e = "m" : this.size === "md" ? e = "xs" : e = "xxs", this.style.cssText = `
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `, this.walletIcon && (this.dataset.walletIcon = this.walletIcon), c`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `;
  }
  templateVisual() {
    return this.imageSrc ? c`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>` : this.walletIcon ? c`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>` : c`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
  }
};
fe.styles = [G, q, Wi];
_e([u()], fe.prototype, "size", void 0);
_e([u()], fe.prototype, "name", void 0);
_e([u()], fe.prototype, "imageSrc", void 0);
_e([u()], fe.prototype, "walletIcon", void 0);
_e([u({ type: Boolean })], fe.prototype, "installed", void 0);
_e([u()], fe.prototype, "badgeSize", void 0);
fe = _e([B("wui-wallet-image")], fe);
const Si = N`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;
var ai = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
const It = 4;
let Xe = class extends O {
  constructor() {
    super(...arguments), this.walletImages = [];
  }
  render() {
    const e = this.walletImages.length < It;
    return c`${this.walletImages.slice(0, It).map(({ src: n, walletName: i }) => c`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${I(i)}
            ></wui-wallet-image>
          `)}
      ${e ? [...Array(It - this.walletImages.length)].map(() => c` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`;
  }
};
Xe.styles = [q, Si];
ai([u({ type: Array })], Xe.prototype, "walletImages", void 0);
Xe = ai([B("wui-all-wallets-image")], Xe);
const Ti = N`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;
var Y = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let F = class extends O {
  constructor() {
    super(...arguments), this.walletImages = [], this.imageSrc = "", this.name = "", this.tabIdx = void 0, this.installed = false, this.disabled = false, this.showAllWallets = false, this.loading = false, this.loadingSpinnerColor = "accent-100";
  }
  render() {
    return c`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `;
  }
  templateAllWallets() {
    return this.showAllWallets && this.imageSrc ? c` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> ` : this.showAllWallets && this.walletIcon ? c` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> ` : null;
  }
  templateWalletImage() {
    return !this.showAllWallets && this.imageSrc ? c`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>` : !this.showAllWallets && !this.imageSrc ? c`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>` : null;
  }
  templateStatus() {
    return this.loading ? c`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>` : this.tagLabel && this.tagVariant ? c`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>` : this.icon ? c`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>` : null;
  }
};
F.styles = [q, G, Ti];
Y([u({ type: Array })], F.prototype, "walletImages", void 0);
Y([u()], F.prototype, "imageSrc", void 0);
Y([u()], F.prototype, "name", void 0);
Y([u()], F.prototype, "tagLabel", void 0);
Y([u()], F.prototype, "tagVariant", void 0);
Y([u()], F.prototype, "icon", void 0);
Y([u()], F.prototype, "walletIcon", void 0);
Y([u()], F.prototype, "tabIdx", void 0);
Y([u({ type: Boolean })], F.prototype, "installed", void 0);
Y([u({ type: Boolean })], F.prototype, "disabled", void 0);
Y([u({ type: Boolean })], F.prototype, "showAllWallets", void 0);
Y([u({ type: Boolean })], F.prototype, "loading", void 0);
Y([u({ type: String })], F.prototype, "loadingSpinnerColor", void 0);
F = Y([B("wui-list-wallet")], F);
var Oe = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let ye = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.count = z.state.count, this.filteredCount = z.state.filteredWallets.length, this.isFetchingRecommendedWallets = z.state.isFetchingRecommendedWallets, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e), z.subscribeKey("count", (e) => this.count = e), z.subscribeKey("filteredWallets", (e) => this.filteredCount = e.length), z.subscribeKey("isFetchingRecommendedWallets", (e) => this.isFetchingRecommendedWallets = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.find((l) => l.id === "walletConnect"), { allWallets: n } = he.state;
    if (!e || n === "HIDE" || n === "ONLY_MOBILE" && !j.isMobile()) return null;
    const i = z.state.featured.length, o = this.count + i, t = o < 10 ? o : Math.floor(o / 10) * 10, a = this.filteredCount > 0 ? this.filteredCount : t;
    let s = `${a}`;
    return this.filteredCount > 0 ? s = `${this.filteredCount}` : a < o && (s = `${a}+`), c`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${I(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets ? "fg-300" : "accent-100"}
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    ee.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" }), U.push("AllWallets");
  }
};
Oe([u()], ye.prototype, "tabIdx", void 0);
Oe([E()], ye.prototype, "connectors", void 0);
Oe([E()], ye.prototype, "count", void 0);
Oe([E()], ye.prototype, "filteredCount", void 0);
Oe([E()], ye.prototype, "isFetchingRecommendedWallets", void 0);
ye = Oe([B("w3m-all-wallets-widget")], ye);
var sn = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Ze = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter((n) => n.type === "ANNOUNCED");
    return (e == null ? void 0 : e.length) ? c`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(Ne.showConnector).map((n) => c`
              <wui-list-wallet
                imageSrc=${I(K.getConnectorImage(n))}
                name=${n.name ?? "Unknown"}
                @click=${() => this.onConnector(n)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${n.id}`}
                .installed=${true}
                tabIdx=${I(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnector(e) {
    e.id === "walletConnect" ? j.isMobile() ? U.push("AllWallets") : U.push("ConnectingWalletConnect") : U.push("ConnectingExternal", { connector: e });
  }
};
sn([u()], Ze.prototype, "tabIdx", void 0);
sn([E()], Ze.prototype, "connectors", void 0);
Ze = sn([B("w3m-connect-announced-widget")], Ze);
var pt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Me = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.loading = false, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e)), j.isTelegram() && j.isIos() && (this.loading = !k.state.wcUri, this.unsubscribe.push(k.subscribeKey("wcUri", (e) => this.loading = !e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { customWallets: e } = he.state;
    if (!(e == null ? void 0 : e.length)) return this.style.cssText = "display: none", null;
    const n = this.filterOutDuplicateWallets(e);
    return c`<wui-flex flexDirection="column" gap="xs">
      ${n.map((i) => c`
          <wui-list-wallet
            imageSrc=${I(K.getWalletImage(i))}
            name=${i.name ?? "Unknown"}
            @click=${() => this.onConnectWallet(i)}
            data-testid=${`wallet-selector-${i.id}`}
            tabIdx=${I(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`;
  }
  filterOutDuplicateWallets(e) {
    const n = ht.getRecentWallets(), i = this.connectors.map((s) => {
      var _a;
      return (_a = s.info) == null ? void 0 : _a.rdns;
    }).filter(Boolean), o = n.map((s) => s.rdns).filter(Boolean), t = i.concat(o);
    if (t.includes("io.metamask.mobile") && j.isMobile()) {
      const s = t.indexOf("io.metamask.mobile");
      t[s] = "io.metamask";
    }
    return e.filter((s) => !t.includes(String(s == null ? void 0 : s.rdns)));
  }
  onConnectWallet(e) {
    this.loading || U.push("ConnectingWalletConnect", { wallet: e });
  }
};
pt([u()], Me.prototype, "tabIdx", void 0);
pt([E()], Me.prototype, "connectors", void 0);
pt([E()], Me.prototype, "loading", void 0);
Me = pt([B("w3m-connect-custom-widget")], Me);
var ln = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let et = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const i = this.connectors.filter((o) => o.type === "EXTERNAL").filter(Ne.showConnector).filter((o) => o.id !== Ci.CONNECTOR_ID.COINBASE_SDK);
    return (i == null ? void 0 : i.length) ? c`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map((o) => c`
            <wui-list-wallet
              imageSrc=${I(K.getConnectorImage(o))}
              .installed=${true}
              name=${o.name ?? "Unknown"}
              data-testid=${`wallet-selector-external-${o.id}`}
              @click=${() => this.onConnector(o)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnector(e) {
    U.push("ConnectingExternal", { connector: e });
  }
};
ln([u()], et.prototype, "tabIdx", void 0);
ln([E()], et.prototype, "connectors", void 0);
et = ln([B("w3m-connect-external-widget")], et);
var cn = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let tt = class extends O {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.wallets = [];
  }
  render() {
    return this.wallets.length ? c`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((e) => c`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${I(K.getWalletImage(e))}
              name=${e.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(e)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnectWallet(e) {
    M.selectWalletConnector(e);
  }
};
cn([u()], tt.prototype, "tabIdx", void 0);
cn([u()], tt.prototype, "wallets", void 0);
tt = cn([B("w3m-connect-featured-widget")], tt);
var un = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let nt = class extends O {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.connectors = [];
  }
  render() {
    const e = this.connectors.filter(Ne.showConnector);
    return e.length === 0 ? (this.style.cssText = "display: none", null) : c`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((n) => c`
            <wui-list-wallet
              imageSrc=${I(K.getConnectorImage(n))}
              .installed=${true}
              name=${n.name ?? "Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${() => this.onConnector(n)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnector(e) {
    M.setActiveConnector(e), U.push("ConnectingExternal", { connector: e });
  }
};
un([u()], nt.prototype, "tabIdx", void 0);
un([u()], nt.prototype, "connectors", void 0);
nt = un([B("w3m-connect-injected-widget")], nt);
var dn = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let it = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter((n) => n.type === "MULTI_CHAIN" && n.name !== "WalletConnect");
    return (e == null ? void 0 : e.length) ? c`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((n) => c`
            <wui-list-wallet
              imageSrc=${I(K.getConnectorImage(n))}
              .installed=${true}
              name=${n.name ?? "Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${() => this.onConnector(n)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnector(e) {
    M.setActiveConnector(e), U.push("ConnectingMultiChain");
  }
};
dn([u()], it.prototype, "tabIdx", void 0);
dn([E()], it.prototype, "connectors", void 0);
it = dn([B("w3m-connect-multi-chain-widget")], it);
var gt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Ue = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.loading = false, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e)), j.isTelegram() && j.isIos() && (this.loading = !k.state.wcUri, this.unsubscribe.push(k.subscribeKey("wcUri", (e) => this.loading = !e)));
  }
  render() {
    const n = ht.getRecentWallets().filter((i) => !ft.isExcluded(i)).filter((i) => !this.hasWalletConnector(i)).filter((i) => this.isWalletCompatibleWithCurrentChain(i));
    return n.length ? c`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map((i) => c`
            <wui-list-wallet
              imageSrc=${I(K.getWalletImage(i))}
              name=${i.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(i)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnectWallet(e) {
    this.loading || M.selectWalletConnector(e);
  }
  hasWalletConnector(e) {
    return this.connectors.some((n) => n.id === e.id || n.name === e.name);
  }
  isWalletCompatibleWithCurrentChain(e) {
    const n = Zt.state.activeChain;
    return n && e.chains ? e.chains.some((i) => {
      const o = i.split(":")[0];
      return n === o;
    }) : true;
  }
};
gt([u()], Ue.prototype, "tabIdx", void 0);
gt([E()], Ue.prototype, "connectors", void 0);
gt([E()], Ue.prototype, "loading", void 0);
Ue = gt([B("w3m-connect-recent-widget")], Ue);
var wt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let qe = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.wallets = [], this.loading = false, j.isTelegram() && j.isIos() && (this.loading = !k.state.wcUri, this.unsubscribe.push(k.subscribeKey("wcUri", (e) => this.loading = !e)));
  }
  render() {
    const { connectors: e } = M.state, { customWallets: n, featuredWalletIds: i } = he.state, o = ht.getRecentWallets(), t = e.find((w) => w.id === "walletConnect"), s = e.filter((w) => w.type === "INJECTED" || w.type === "ANNOUNCED" || w.type === "MULTI_CHAIN").filter((w) => w.name !== "Browser Wallet");
    if (!t) return null;
    if (i || n || !this.wallets.length) return this.style.cssText = "display: none", null;
    const l = s.length + o.length, d = Math.max(0, 2 - l), h = ft.filterOutDuplicateWallets(this.wallets).slice(0, d);
    return h.length ? c`
      <wui-flex flexDirection="column" gap="xs">
        ${h.map((w) => c`
            <wui-list-wallet
              imageSrc=${I(K.getWalletImage(w))}
              name=${(w == null ? void 0 : w.name) ?? "Unknown"}
              @click=${() => this.onConnectWallet(w)}
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnectWallet(e) {
    if (this.loading) return;
    const n = M.getConnector(e.id, e.rdns);
    n ? U.push("ConnectingExternal", { connector: n }) : U.push("ConnectingWalletConnect", { wallet: e });
  }
};
wt([u()], qe.prototype, "tabIdx", void 0);
wt([u()], qe.prototype, "wallets", void 0);
wt([E()], qe.prototype, "loading", void 0);
qe = wt([B("w3m-connect-recommended-widget")], qe);
var mt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Fe = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.connectorImages = yn.state.connectorImages, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e), yn.subscribeKey("connectorImages", (e) => this.connectorImages = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (j.isMobile()) return this.style.cssText = "display: none", null;
    const e = this.connectors.find((i) => i.id === "walletConnect");
    if (!e) return this.style.cssText = "display: none", null;
    const n = e.imageUrl || this.connectorImages[(e == null ? void 0 : e.imageId) ?? ""];
    return c`
      <wui-list-wallet
        imageSrc=${I(n)}
        name=${e.name ?? "Unknown"}
        @click=${() => this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${I(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
  }
  onConnector(e) {
    M.setActiveConnector(e), U.push("ConnectingWalletConnect");
  }
};
mt([u()], Fe.prototype, "tabIdx", void 0);
mt([E()], Fe.prototype, "connectors", void 0);
mt([E()], Fe.prototype, "connectorImages", void 0);
Fe = mt([B("w3m-connect-walletconnect-widget")], Fe);
const Pi = N`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
var Ke = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let xe = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = M.state.connectors, this.recommended = z.state.recommended, this.featured = z.state.featured, this.unsubscribe.push(M.subscribeKey("connectors", (e) => this.connectors = e), z.subscribeKey("recommended", (e) => this.recommended = e), z.subscribeKey("featured", (e) => this.featured = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `;
  }
  connectorListTemplate() {
    const { custom: e, recent: n, announced: i, injected: o, multiChain: t, recommended: a, featured: s, external: l } = Ne.getConnectorsByType(this.connectors, this.recommended, this.featured);
    return Ne.getConnectorTypeOrder({ custom: e, recent: n, announced: i, injected: o, multiChain: t, recommended: a, featured: s, external: l }).map((h) => {
      switch (h) {
        case "injected":
          return c`
            ${t.length ? c`<w3m-connect-multi-chain-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>` : null}
            ${i.length ? c`<w3m-connect-announced-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-announced-widget>` : null}
            ${o.length ? c`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-injected-widget>` : null}
          `;
        case "walletConnect":
          return c`<w3m-connect-walletconnect-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
        case "recent":
          return c`<w3m-connect-recent-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
        case "featured":
          return c`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
        case "custom":
          return c`<w3m-connect-custom-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
        case "external":
          return c`<w3m-connect-external-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-external-widget>`;
        case "recommended":
          return c`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
        default:
          return console.warn(`Unknown connector type: ${h}`), null;
      }
    });
  }
};
xe.styles = Pi;
Ke([u()], xe.prototype, "tabIdx", void 0);
Ke([E()], xe.prototype, "connectors", void 0);
Ke([E()], xe.prototype, "recommended", void 0);
Ke([E()], xe.prototype, "featured", void 0);
xe = Ke([B("w3m-connector-list")], xe);
const Bi = N`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;
var ve = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let oe = class extends O {
  constructor() {
    super(...arguments), this.tabs = [], this.onTabChange = () => null, this.buttons = [], this.disabled = false, this.localTabWidth = "100px", this.activeTab = 0, this.isDense = false;
  }
  render() {
    return this.isDense = this.tabs.length > 3, this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `, this.dataset.type = this.isDense ? "flex" : "block", this.tabs.map((e, n) => {
      var _a;
      const i = n === this.activeTab;
      return c`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(n)}
          data-active=${i}
          data-testid="tab-${(_a = e.label) == null ? void 0 : _a.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `;
    });
  }
  firstUpdated() {
    this.shadowRoot && this.isDense && (this.buttons = [...this.shadowRoot.querySelectorAll("button")], setTimeout(() => {
      this.animateTabs(0, true);
    }, 0));
  }
  iconTemplate(e) {
    return e.icon ? c`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>` : null;
  }
  onTabClick(e) {
    this.buttons && this.animateTabs(e, false), this.activeTab = e, this.onTabChange(e);
  }
  animateTabs(e, n) {
    const i = this.buttons[this.activeTab], o = this.buttons[e], t = i == null ? void 0 : i.querySelector("wui-text"), a = o == null ? void 0 : o.querySelector("wui-text"), s = o == null ? void 0 : o.getBoundingClientRect(), l = a == null ? void 0 : a.getBoundingClientRect();
    i && t && !n && e !== this.activeTab && (t.animate([{ opacity: 0 }], { duration: 50, easing: "ease", fill: "forwards" }), i.animate([{ width: "34px" }], { duration: 500, easing: "ease", fill: "forwards" })), o && s && l && a && (e !== this.activeTab || n) && (this.localTabWidth = `${Math.round(s.width + l.width) + 6}px`, o.animate([{ width: `${s.width + l.width}px` }], { duration: n ? 0 : 500, fill: "forwards", easing: "ease" }), a.animate([{ opacity: 1 }], { duration: n ? 0 : 125, delay: n ? 0 : 200, fill: "forwards", easing: "ease" }));
  }
};
oe.styles = [q, G, Bi];
ve([u({ type: Array })], oe.prototype, "tabs", void 0);
ve([u()], oe.prototype, "onTabChange", void 0);
ve([u({ type: Array })], oe.prototype, "buttons", void 0);
ve([u({ type: Boolean })], oe.prototype, "disabled", void 0);
ve([u()], oe.prototype, "localTabWidth", void 0);
ve([E()], oe.prototype, "activeTab", void 0);
ve([E()], oe.prototype, "isDense", void 0);
oe = ve([B("wui-tabs")], oe);
var hn = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let ot = class extends O {
  constructor() {
    super(...arguments), this.platformTabs = [], this.unsubscribe = [], this.platforms = [], this.onSelectPlatfrom = void 0;
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.generateTabs();
    return c`
      <wui-flex justifyContent="center" .padding=${["0", "0", "l", "0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const e = this.platforms.map((n) => n === "browser" ? { label: "Browser", icon: "extension", platform: "browser" } : n === "mobile" ? { label: "Mobile", icon: "mobile", platform: "mobile" } : n === "qrcode" ? { label: "Mobile", icon: "mobile", platform: "qrcode" } : n === "web" ? { label: "Webapp", icon: "browser", platform: "web" } : n === "desktop" ? { label: "Desktop", icon: "desktop", platform: "desktop" } : { label: "Browser", icon: "extension", platform: "unsupported" });
    return this.platformTabs = e.map(({ platform: n }) => n), e;
  }
  onTabChange(e) {
    var _a;
    const n = this.platformTabs[e];
    n && ((_a = this.onSelectPlatfrom) == null ? void 0 : _a.call(this, n));
  }
};
hn([u({ type: Array })], ot.prototype, "platforms", void 0);
hn([u()], ot.prototype, "onSelectPlatfrom", void 0);
ot = hn([B("w3m-connecting-header")], ot);
const Li = N`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;
var re = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
const Cn = { main: "inverse-100", inverse: "inverse-000", accent: "accent-100", "accent-error": "error-100", "accent-success": "success-100", neutral: "fg-100", disabled: "gray-glass-020" }, Oi = { lg: "paragraph-600", md: "small-600" }, Ai = { lg: "md", md: "md" };
let Q = class extends O {
  constructor() {
    super(...arguments), this.size = "lg", this.disabled = false, this.fullWidth = false, this.loading = false, this.variant = "main", this.hasIconLeft = false, this.hasIconRight = false, this.borderRadius = "m";
  }
  render() {
    this.style.cssText = `
    --local-width: ${this.fullWidth ? "100%" : "auto"};
    --local-opacity-100: ${this.loading ? 0 : 1};
    --local-opacity-000: ${this.loading ? 1 : 0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;
    const e = this.textVariant ?? Oi[this.size];
    return c`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${() => this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${() => this.handleSlotRightChange()}></slot>
      </button>
    `;
  }
  handleSlotLeftChange() {
    this.hasIconLeft = true;
  }
  handleSlotRightChange() {
    this.hasIconRight = true;
  }
  loadingTemplate() {
    if (this.loading) {
      const e = Ai[this.size], n = this.disabled ? Cn.disabled : Cn[this.variant];
      return c`<wui-loading-spinner color=${n} size=${e}></wui-loading-spinner>`;
    }
    return c``;
  }
};
Q.styles = [q, G, Li];
re([u()], Q.prototype, "size", void 0);
re([u({ type: Boolean })], Q.prototype, "disabled", void 0);
re([u({ type: Boolean })], Q.prototype, "fullWidth", void 0);
re([u({ type: Boolean })], Q.prototype, "loading", void 0);
re([u()], Q.prototype, "variant", void 0);
re([u({ type: Boolean })], Q.prototype, "hasIconLeft", void 0);
re([u({ type: Boolean })], Q.prototype, "hasIconRight", void 0);
re([u()], Q.prototype, "borderRadius", void 0);
re([u()], Q.prototype, "textVariant", void 0);
Q = re([B("wui-button")], Q);
const ji = N`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
var bt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Pe = class extends O {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.disabled = false, this.color = "inherit";
  }
  render() {
    return c`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
};
Pe.styles = [q, G, ji];
bt([u()], Pe.prototype, "tabIdx", void 0);
bt([u({ type: Boolean })], Pe.prototype, "disabled", void 0);
bt([u()], Pe.prototype, "color", void 0);
Pe = bt([B("wui-link")], Pe);
const ki = N`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var si = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let rt = class extends O {
  constructor() {
    super(...arguments), this.radius = 36;
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const e = this.radius > 50 ? 50 : this.radius, i = 36 - e, o = 116 + i, t = 245 + i, a = 360 + i * 1.75;
    return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${t}"
          stroke-dashoffset=${a}
        />
      </svg>
    `;
  }
};
rt.styles = [q, ki];
si([u({ type: Number })], rt.prototype, "radius", void 0);
rt = si([B("wui-loading-thumbnail")], rt);
const Di = N`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;
var Ie = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let pe = class extends O {
  constructor() {
    super(...arguments), this.variant = "accent", this.imageSrc = "", this.disabled = false, this.icon = "externalLink", this.size = "md", this.text = "";
  }
  render() {
    const e = this.size === "sm" ? "small-600" : "paragraph-600";
    return c`
      <button
        class=${this.disabled ? "disabled" : ""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc ? c`<wui-image src=${this.imageSrc}></wui-image>` : null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `;
  }
};
pe.styles = [q, G, Di];
Ie([u()], pe.prototype, "variant", void 0);
Ie([u()], pe.prototype, "imageSrc", void 0);
Ie([u({ type: Boolean })], pe.prototype, "disabled", void 0);
Ie([u()], pe.prototype, "icon", void 0);
Ie([u()], pe.prototype, "size", void 0);
Ie([u()], pe.prototype, "text", void 0);
pe = Ie([B("wui-chip-button")], pe);
const zi = N`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
var vt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Be = class extends O {
  constructor() {
    super(...arguments), this.disabled = false, this.label = "", this.buttonLabel = "";
  }
  render() {
    return c`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs", "2l", "1xs", "2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `;
  }
};
Be.styles = [q, G, zi];
vt([u({ type: Boolean })], Be.prototype, "disabled", void 0);
vt([u()], Be.prototype, "label", void 0);
vt([u()], Be.prototype, "buttonLabel", void 0);
Be = vt([B("wui-cta-button")], Be);
const Ni = N`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;
var li = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let at = class extends O {
  constructor() {
    super(...arguments), this.wallet = void 0;
  }
  render() {
    if (!this.wallet) return this.style.display = "none", null;
    const { name: e, app_store: n, play_store: i, chrome_store: o, homepage: t } = this.wallet, a = j.isMobile(), s = j.isIos(), l = j.isAndroid(), d = [n, i, t, o].filter(Boolean).length > 1, h = de.getTruncateString({ string: e, charsStart: 12, charsEnd: 0, truncate: "end" });
    return d && !a ? c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${() => U.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      ` : !d && t ? c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      ` : n && s ? c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      ` : i && l ? c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      ` : (this.style.display = "none", null);
  }
  onAppStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.app_store) && j.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.play_store) && j.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.homepage) && j.openHref(this.wallet.homepage, "_blank");
  }
};
at.styles = [Ni];
li([u({ type: Object })], at.prototype, "wallet", void 0);
at = li([B("w3m-mobile-download-links")], at);
const Mi = N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
var ae = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
class V extends O {
  constructor() {
    var _a, _b, _c, _d, _e2;
    super(), this.wallet = (_a = U.state.data) == null ? void 0 : _a.wallet, this.connector = (_b = U.state.data) == null ? void 0 : _b.connector, this.timeout = void 0, this.secondaryBtnIcon = "refresh", this.onConnect = void 0, this.onRender = void 0, this.onAutoConnect = void 0, this.isWalletConnect = true, this.unsubscribe = [], this.imageSrc = K.getWalletImage(this.wallet) ?? K.getConnectorImage(this.connector), this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet", this.isRetrying = false, this.uri = k.state.wcUri, this.error = k.state.wcError, this.ready = false, this.showRetry = false, this.secondaryBtnLabel = "Try again", this.secondaryLabel = "Accept connection request in the wallet", this.isLoading = false, this.isMobile = false, this.onRetry = void 0, this.unsubscribe.push(k.subscribeKey("wcUri", (e) => {
      var _a2;
      this.uri = e, this.isRetrying && this.onRetry && (this.isRetrying = false, (_a2 = this.onConnect) == null ? void 0 : _a2.call(this));
    }), k.subscribeKey("wcError", (e) => this.error = e)), (j.isTelegram() || j.isSafari()) && j.isIos() && k.state.wcUri && ((_e2 = this.onConnect) == null ? void 0 : _e2.call(this));
  }
  firstUpdated() {
    var _a;
    (_a = this.onAutoConnect) == null ? void 0 : _a.call(this), this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), k.setWcError(false), clearTimeout(this.timeout);
  }
  render() {
    var _a;
    (_a = this.onRender) == null ? void 0 : _a.call(this), this.onShowRetry();
    const e = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let n = `Continue in ${this.name}`;
    return this.error && (n = "Connection declined"), c`
      <wui-flex
        data-error=${I(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${I(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? c`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            ` : null}
      </wui-flex>

      ${this.isWalletConnect ? c`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var _a, _b;
    this.error && !this.showRetry && (this.showRetry = true, (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-button")) == null ? void 0 : _b.animate([{ opacity: 0 }, { opacity: 1 }], { fill: "forwards", easing: "ease" }));
  }
  onTryAgain() {
    var _a, _b;
    k.setWcError(false), this.onRetry ? (this.isRetrying = true, (_a = this.onRetry) == null ? void 0 : _a.call(this)) : (_b = this.onConnect) == null ? void 0 : _b.call(this);
  }
  loaderTemplate() {
    const e = en.state.themeVariables["--w3m-border-radius-master"], n = e ? parseInt(e.replace("px", ""), 10) : 4;
    return c`<wui-loading-thumbnail radius=${n * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      this.uri && (j.copyToClopboard(this.uri), Qe.showSuccess("Link copied"));
    } catch {
      Qe.showError("Failed to copy");
    }
  }
}
V.styles = Mi;
ae([E()], V.prototype, "isRetrying", void 0);
ae([E()], V.prototype, "uri", void 0);
ae([E()], V.prototype, "error", void 0);
ae([E()], V.prototype, "ready", void 0);
ae([E()], V.prototype, "showRetry", void 0);
ae([E()], V.prototype, "secondaryBtnLabel", void 0);
ae([E()], V.prototype, "secondaryLabel", void 0);
ae([E()], V.prototype, "isLoading", void 0);
ae([u({ type: Boolean })], V.prototype, "isMobile", void 0);
ae([u()], V.prototype, "onRetry", void 0);
var Ui = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Rn = class extends V {
  constructor() {
    if (super(), !this.wallet) throw new Error("w3m-connecting-wc-browser: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onAutoConnect = this.onConnectProxy.bind(this), ee.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "browser" } });
  }
  async onConnectProxy() {
    var _a;
    try {
      this.error = false;
      const { connectors: e } = M.state, n = e.find((i) => {
        var _a2, _b, _c;
        return i.type === "ANNOUNCED" && ((_a2 = i.info) == null ? void 0 : _a2.rdns) === ((_b = this.wallet) == null ? void 0 : _b.rdns) || i.type === "INJECTED" || i.name === ((_c = this.wallet) == null ? void 0 : _c.name);
      });
      if (n) await k.connectExternal(n, n.chain);
      else throw new Error("w3m-connecting-wc-browser: No connector found");
      oi.close(), ee.sendEvent({ type: "track", event: "CONNECT_SUCCESS", properties: { method: "browser", name: ((_a = this.wallet) == null ? void 0 : _a.name) || "Unknown" } });
    } catch (e) {
      ee.sendEvent({ type: "track", event: "CONNECT_ERROR", properties: { message: (e == null ? void 0 : e.message) ?? "Unknown" } }), this.error = true;
    }
  }
};
Rn = Ui([B("w3m-connecting-wc-browser")], Rn);
var qi = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let $n = class extends V {
  constructor() {
    if (super(), !this.wallet) throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onRender = this.onRenderProxy.bind(this), ee.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "desktop" } });
  }
  onRenderProxy() {
    var _a;
    !this.ready && this.uri && (this.ready = true, (_a = this.onConnect) == null ? void 0 : _a.call(this));
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.desktop_link) && this.uri) try {
      this.error = false;
      const { desktop_link: e, name: n } = this.wallet, { redirect: i, href: o } = j.formatNativeUrl(e, this.uri);
      k.setWcLinking({ name: n, href: o }), k.setRecentWallet(this.wallet), j.openHref(i, "_blank");
    } catch {
      this.error = true;
    }
  }
};
$n = qi([B("w3m-connecting-wc-desktop")], $n);
var Ae = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Ce = class extends V {
  constructor() {
    if (super(), this.btnLabelTimeout = void 0, this.redirectDeeplink = void 0, this.redirectUniversalLink = void 0, this.target = void 0, this.preferUniversalLinks = he.state.experimental_preferUniversalLinks, this.isLoading = true, this.onConnect = () => {
      var _a;
      if (((_a = this.wallet) == null ? void 0 : _a.mobile_link) && this.uri) try {
        this.error = false;
        const { mobile_link: e, link_mode: n, name: i } = this.wallet, { redirect: o, redirectUniversalLink: t, href: a } = j.formatNativeUrl(e, this.uri, n);
        this.redirectDeeplink = o, this.redirectUniversalLink = t, this.target = j.isIframe() ? "_top" : "_self", k.setWcLinking({ name: i, href: a }), k.setRecentWallet(this.wallet), this.preferUniversalLinks && this.redirectUniversalLink ? j.openHref(this.redirectUniversalLink, this.target) : j.openHref(this.redirectDeeplink, this.target);
      } catch (e) {
        ee.sendEvent({ type: "track", event: "CONNECT_PROXY_ERROR", properties: { message: e instanceof Error ? e.message : "Error parsing the deeplink", uri: this.uri, mobile_link: this.wallet.mobile_link, name: this.wallet.name } }), this.error = true;
      }
    }, !this.wallet) throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    this.secondaryBtnLabel = "Open", this.secondaryLabel = ri.CONNECT_LABELS.MOBILE, this.secondaryBtnIcon = "externalLink", this.onHandleURI(), this.unsubscribe.push(k.subscribeKey("wcUri", () => {
      this.onHandleURI();
    })), ee.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "mobile" } });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearTimeout(this.btnLabelTimeout);
  }
  onHandleURI() {
    var _a;
    this.isLoading = !this.uri, !this.ready && this.uri && (this.ready = true, (_a = this.onConnect) == null ? void 0 : _a.call(this));
  }
  onTryAgain() {
    var _a;
    k.setWcError(false), (_a = this.onConnect) == null ? void 0 : _a.call(this);
  }
};
Ae([E()], Ce.prototype, "redirectDeeplink", void 0);
Ae([E()], Ce.prototype, "redirectUniversalLink", void 0);
Ae([E()], Ce.prototype, "target", void 0);
Ae([E()], Ce.prototype, "preferUniversalLinks", void 0);
Ae([E()], Ce.prototype, "isLoading", void 0);
Ce = Ae([B("w3m-connecting-wc-mobile")], Ce);
var Te = {}, Et, _n;
function Fi() {
  return _n || (_n = 1, Et = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), Et;
}
var Wt = {}, me = {}, In;
function Ee() {
  if (In) return me;
  In = 1;
  let r;
  const e = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
  return me.getSymbolSize = function(i) {
    if (!i) throw new Error('"version" cannot be null or undefined');
    if (i < 1 || i > 40) throw new Error('"version" should be in range from 1 to 40');
    return i * 4 + 17;
  }, me.getSymbolTotalCodewords = function(i) {
    return e[i];
  }, me.getBCHDigit = function(n) {
    let i = 0;
    for (; n !== 0; ) i++, n >>>= 1;
    return i;
  }, me.setToSJISFunction = function(i) {
    if (typeof i != "function") throw new Error('"toSJISFunc" is not a valid function.');
    r = i;
  }, me.isKanjiModeEnabled = function() {
    return typeof r < "u";
  }, me.toSJIS = function(i) {
    return r(i);
  }, me;
}
var St = {}, En;
function fn() {
  return En || (En = 1, (function(r) {
    r.L = { bit: 1 }, r.M = { bit: 0 }, r.Q = { bit: 3 }, r.H = { bit: 2 };
    function e(n) {
      if (typeof n != "string") throw new Error("Param is not a string");
      switch (n.toLowerCase()) {
        case "l":
        case "low":
          return r.L;
        case "m":
        case "medium":
          return r.M;
        case "q":
        case "quartile":
          return r.Q;
        case "h":
        case "high":
          return r.H;
        default:
          throw new Error("Unknown EC Level: " + n);
      }
    }
    r.isValid = function(i) {
      return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
    }, r.from = function(i, o) {
      if (r.isValid(i)) return i;
      try {
        return e(i);
      } catch {
        return o;
      }
    };
  })(St)), St;
}
var Tt, Wn;
function Vi() {
  if (Wn) return Tt;
  Wn = 1;
  function r() {
    this.buffer = [], this.length = 0;
  }
  return r.prototype = { get: function(e) {
    const n = Math.floor(e / 8);
    return (this.buffer[n] >>> 7 - e % 8 & 1) === 1;
  }, put: function(e, n) {
    for (let i = 0; i < n; i++) this.putBit((e >>> n - i - 1 & 1) === 1);
  }, getLengthInBits: function() {
    return this.length;
  }, putBit: function(e) {
    const n = Math.floor(this.length / 8);
    this.buffer.length <= n && this.buffer.push(0), e && (this.buffer[n] |= 128 >>> this.length % 8), this.length++;
  } }, Tt = r, Tt;
}
var Pt, Sn;
function Ki() {
  if (Sn) return Pt;
  Sn = 1;
  function r(e) {
    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  return r.prototype.set = function(e, n, i, o) {
    const t = e * this.size + n;
    this.data[t] = i, o && (this.reservedBit[t] = true);
  }, r.prototype.get = function(e, n) {
    return this.data[e * this.size + n];
  }, r.prototype.xor = function(e, n, i) {
    this.data[e * this.size + n] ^= i;
  }, r.prototype.isReserved = function(e, n) {
    return this.reservedBit[e * this.size + n];
  }, Pt = r, Pt;
}
var Bt = {}, Tn;
function Hi() {
  return Tn || (Tn = 1, (function(r) {
    const e = Ee().getSymbolSize;
    r.getRowColCoords = function(i) {
      if (i === 1) return [];
      const o = Math.floor(i / 7) + 2, t = e(i), a = t === 145 ? 26 : Math.ceil((t - 13) / (2 * o - 2)) * 2, s = [t - 7];
      for (let l = 1; l < o - 1; l++) s[l] = s[l - 1] - a;
      return s.push(6), s.reverse();
    }, r.getPositions = function(i) {
      const o = [], t = r.getRowColCoords(i), a = t.length;
      for (let s = 0; s < a; s++) for (let l = 0; l < a; l++) s === 0 && l === 0 || s === 0 && l === a - 1 || s === a - 1 && l === 0 || o.push([t[s], t[l]]);
      return o;
    };
  })(Bt)), Bt;
}
var Lt = {}, Pn;
function Gi() {
  if (Pn) return Lt;
  Pn = 1;
  const r = Ee().getSymbolSize, e = 7;
  return Lt.getPositions = function(i) {
    const o = r(i);
    return [[0, 0], [o - e, 0], [0, o - e]];
  }, Lt;
}
var Ot = {}, Bn;
function Yi() {
  return Bn || (Bn = 1, (function(r) {
    r.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
    const e = { N1: 3, N2: 3, N3: 40, N4: 10 };
    r.isValid = function(o) {
      return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
    }, r.from = function(o) {
      return r.isValid(o) ? parseInt(o, 10) : void 0;
    }, r.getPenaltyN1 = function(o) {
      const t = o.size;
      let a = 0, s = 0, l = 0, d = null, h = null;
      for (let w = 0; w < t; w++) {
        s = l = 0, d = h = null;
        for (let x = 0; x < t; x++) {
          let p = o.get(w, x);
          p === d ? s++ : (s >= 5 && (a += e.N1 + (s - 5)), d = p, s = 1), p = o.get(x, w), p === h ? l++ : (l >= 5 && (a += e.N1 + (l - 5)), h = p, l = 1);
        }
        s >= 5 && (a += e.N1 + (s - 5)), l >= 5 && (a += e.N1 + (l - 5));
      }
      return a;
    }, r.getPenaltyN2 = function(o) {
      const t = o.size;
      let a = 0;
      for (let s = 0; s < t - 1; s++) for (let l = 0; l < t - 1; l++) {
        const d = o.get(s, l) + o.get(s, l + 1) + o.get(s + 1, l) + o.get(s + 1, l + 1);
        (d === 4 || d === 0) && a++;
      }
      return a * e.N2;
    }, r.getPenaltyN3 = function(o) {
      const t = o.size;
      let a = 0, s = 0, l = 0;
      for (let d = 0; d < t; d++) {
        s = l = 0;
        for (let h = 0; h < t; h++) s = s << 1 & 2047 | o.get(d, h), h >= 10 && (s === 1488 || s === 93) && a++, l = l << 1 & 2047 | o.get(h, d), h >= 10 && (l === 1488 || l === 93) && a++;
      }
      return a * e.N3;
    }, r.getPenaltyN4 = function(o) {
      let t = 0;
      const a = o.data.length;
      for (let l = 0; l < a; l++) t += o.data[l];
      return Math.abs(Math.ceil(t * 100 / a / 5) - 10) * e.N4;
    };
    function n(i, o, t) {
      switch (i) {
        case r.Patterns.PATTERN000:
          return (o + t) % 2 === 0;
        case r.Patterns.PATTERN001:
          return o % 2 === 0;
        case r.Patterns.PATTERN010:
          return t % 3 === 0;
        case r.Patterns.PATTERN011:
          return (o + t) % 3 === 0;
        case r.Patterns.PATTERN100:
          return (Math.floor(o / 2) + Math.floor(t / 3)) % 2 === 0;
        case r.Patterns.PATTERN101:
          return o * t % 2 + o * t % 3 === 0;
        case r.Patterns.PATTERN110:
          return (o * t % 2 + o * t % 3) % 2 === 0;
        case r.Patterns.PATTERN111:
          return (o * t % 3 + (o + t) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + i);
      }
    }
    r.applyMask = function(o, t) {
      const a = t.size;
      for (let s = 0; s < a; s++) for (let l = 0; l < a; l++) t.isReserved(l, s) || t.xor(l, s, n(o, l, s));
    }, r.getBestMask = function(o, t) {
      const a = Object.keys(r.Patterns).length;
      let s = 0, l = 1 / 0;
      for (let d = 0; d < a; d++) {
        t(d), r.applyMask(d, o);
        const h = r.getPenaltyN1(o) + r.getPenaltyN2(o) + r.getPenaltyN3(o) + r.getPenaltyN4(o);
        r.applyMask(d, o), h < l && (l = h, s = d);
      }
      return s;
    };
  })(Ot)), Ot;
}
var Je = {}, Ln;
function ci() {
  if (Ln) return Je;
  Ln = 1;
  const r = fn(), e = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81], n = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
  return Je.getBlocksCount = function(o, t) {
    switch (t) {
      case r.L:
        return e[(o - 1) * 4 + 0];
      case r.M:
        return e[(o - 1) * 4 + 1];
      case r.Q:
        return e[(o - 1) * 4 + 2];
      case r.H:
        return e[(o - 1) * 4 + 3];
      default:
        return;
    }
  }, Je.getTotalCodewordsCount = function(o, t) {
    switch (t) {
      case r.L:
        return n[(o - 1) * 4 + 0];
      case r.M:
        return n[(o - 1) * 4 + 1];
      case r.Q:
        return n[(o - 1) * 4 + 2];
      case r.H:
        return n[(o - 1) * 4 + 3];
      default:
        return;
    }
  }, Je;
}
var At = {}, De = {}, On;
function Ji() {
  if (On) return De;
  On = 1;
  const r = new Uint8Array(512), e = new Uint8Array(256);
  return (function() {
    let i = 1;
    for (let o = 0; o < 255; o++) r[o] = i, e[i] = o, i <<= 1, i & 256 && (i ^= 285);
    for (let o = 255; o < 512; o++) r[o] = r[o - 255];
  })(), De.log = function(i) {
    if (i < 1) throw new Error("log(" + i + ")");
    return e[i];
  }, De.exp = function(i) {
    return r[i];
  }, De.mul = function(i, o) {
    return i === 0 || o === 0 ? 0 : r[e[i] + e[o]];
  }, De;
}
var An;
function Qi() {
  return An || (An = 1, (function(r) {
    const e = Ji();
    r.mul = function(i, o) {
      const t = new Uint8Array(i.length + o.length - 1);
      for (let a = 0; a < i.length; a++) for (let s = 0; s < o.length; s++) t[a + s] ^= e.mul(i[a], o[s]);
      return t;
    }, r.mod = function(i, o) {
      let t = new Uint8Array(i);
      for (; t.length - o.length >= 0; ) {
        const a = t[0];
        for (let l = 0; l < o.length; l++) t[l] ^= e.mul(o[l], a);
        let s = 0;
        for (; s < t.length && t[s] === 0; ) s++;
        t = t.slice(s);
      }
      return t;
    }, r.generateECPolynomial = function(i) {
      let o = new Uint8Array([1]);
      for (let t = 0; t < i; t++) o = r.mul(o, new Uint8Array([1, e.exp(t)]));
      return o;
    };
  })(At)), At;
}
var jt, jn;
function Xi() {
  if (jn) return jt;
  jn = 1;
  const r = Qi();
  function e(n) {
    this.genPoly = void 0, this.degree = n, this.degree && this.initialize(this.degree);
  }
  return e.prototype.initialize = function(i) {
    this.degree = i, this.genPoly = r.generateECPolynomial(this.degree);
  }, e.prototype.encode = function(i) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const o = new Uint8Array(i.length + this.degree);
    o.set(i);
    const t = r.mod(o, this.genPoly), a = this.degree - t.length;
    if (a > 0) {
      const s = new Uint8Array(this.degree);
      return s.set(t, a), s;
    }
    return t;
  }, jt = e, jt;
}
var kt = {}, Dt = {}, zt = {}, kn;
function ui() {
  return kn || (kn = 1, zt.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }), zt;
}
var ie = {}, Dn;
function di() {
  if (Dn) return ie;
  Dn = 1;
  const r = "[0-9]+", e = "[A-Z $%*+\\-./:]+";
  let n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  n = n.replace(/u/g, "\\u");
  const i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + n + `)(?:.|[\r
]))+`;
  ie.KANJI = new RegExp(n, "g"), ie.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), ie.BYTE = new RegExp(i, "g"), ie.NUMERIC = new RegExp(r, "g"), ie.ALPHANUMERIC = new RegExp(e, "g");
  const o = new RegExp("^" + n + "$"), t = new RegExp("^" + r + "$"), a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return ie.testKanji = function(l) {
    return o.test(l);
  }, ie.testNumeric = function(l) {
    return t.test(l);
  }, ie.testAlphanumeric = function(l) {
    return a.test(l);
  }, ie;
}
var zn;
function We() {
  return zn || (zn = 1, (function(r) {
    const e = ui(), n = di();
    r.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }, r.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }, r.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }, r.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }, r.MIXED = { bit: -1 }, r.getCharCountIndicator = function(t, a) {
      if (!t.ccBits) throw new Error("Invalid mode: " + t);
      if (!e.isValid(a)) throw new Error("Invalid version: " + a);
      return a >= 1 && a < 10 ? t.ccBits[0] : a < 27 ? t.ccBits[1] : t.ccBits[2];
    }, r.getBestModeForData = function(t) {
      return n.testNumeric(t) ? r.NUMERIC : n.testAlphanumeric(t) ? r.ALPHANUMERIC : n.testKanji(t) ? r.KANJI : r.BYTE;
    }, r.toString = function(t) {
      if (t && t.id) return t.id;
      throw new Error("Invalid mode");
    }, r.isValid = function(t) {
      return t && t.bit && t.ccBits;
    };
    function i(o) {
      if (typeof o != "string") throw new Error("Param is not a string");
      switch (o.toLowerCase()) {
        case "numeric":
          return r.NUMERIC;
        case "alphanumeric":
          return r.ALPHANUMERIC;
        case "kanji":
          return r.KANJI;
        case "byte":
          return r.BYTE;
        default:
          throw new Error("Unknown mode: " + o);
      }
    }
    r.from = function(t, a) {
      if (r.isValid(t)) return t;
      try {
        return i(t);
      } catch {
        return a;
      }
    };
  })(Dt)), Dt;
}
var Nn;
function Zi() {
  return Nn || (Nn = 1, (function(r) {
    const e = Ee(), n = ci(), i = fn(), o = We(), t = ui(), a = 7973, s = e.getBCHDigit(a);
    function l(x, p, W) {
      for (let v = 1; v <= 40; v++) if (p <= r.getCapacity(v, W, x)) return v;
    }
    function d(x, p) {
      return o.getCharCountIndicator(x, p) + 4;
    }
    function h(x, p) {
      let W = 0;
      return x.forEach(function(v) {
        const S = d(v.mode, p);
        W += S + v.getBitsLength();
      }), W;
    }
    function w(x, p) {
      for (let W = 1; W <= 40; W++) if (h(x, W) <= r.getCapacity(W, p, o.MIXED)) return W;
    }
    r.from = function(p, W) {
      return t.isValid(p) ? parseInt(p, 10) : W;
    }, r.getCapacity = function(p, W, v) {
      if (!t.isValid(p)) throw new Error("Invalid QR Code version");
      typeof v > "u" && (v = o.BYTE);
      const S = e.getSymbolTotalCodewords(p), m = n.getTotalCodewordsCount(p, W), g = (S - m) * 8;
      if (v === o.MIXED) return g;
      const b = g - d(v, p);
      switch (v) {
        case o.NUMERIC:
          return Math.floor(b / 10 * 3);
        case o.ALPHANUMERIC:
          return Math.floor(b / 11 * 2);
        case o.KANJI:
          return Math.floor(b / 13);
        case o.BYTE:
        default:
          return Math.floor(b / 8);
      }
    }, r.getBestVersionForData = function(p, W) {
      let v;
      const S = i.from(W, i.M);
      if (Array.isArray(p)) {
        if (p.length > 1) return w(p, S);
        if (p.length === 0) return 1;
        v = p[0];
      } else v = p;
      return l(v.mode, v.getLength(), S);
    }, r.getEncodedBits = function(p) {
      if (!t.isValid(p) || p < 7) throw new Error("Invalid QR Code version");
      let W = p << 12;
      for (; e.getBCHDigit(W) - s >= 0; ) W ^= a << e.getBCHDigit(W) - s;
      return p << 12 | W;
    };
  })(kt)), kt;
}
var Nt = {}, Mn;
function eo() {
  if (Mn) return Nt;
  Mn = 1;
  const r = Ee(), e = 1335, n = 21522, i = r.getBCHDigit(e);
  return Nt.getEncodedBits = function(t, a) {
    const s = t.bit << 3 | a;
    let l = s << 10;
    for (; r.getBCHDigit(l) - i >= 0; ) l ^= e << r.getBCHDigit(l) - i;
    return (s << 10 | l) ^ n;
  }, Nt;
}
var Mt = {}, Ut, Un;
function to() {
  if (Un) return Ut;
  Un = 1;
  const r = We();
  function e(n) {
    this.mode = r.NUMERIC, this.data = n.toString();
  }
  return e.getBitsLength = function(i) {
    return 10 * Math.floor(i / 3) + (i % 3 ? i % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(i) {
    let o, t, a;
    for (o = 0; o + 3 <= this.data.length; o += 3) t = this.data.substr(o, 3), a = parseInt(t, 10), i.put(a, 10);
    const s = this.data.length - o;
    s > 0 && (t = this.data.substr(o), a = parseInt(t, 10), i.put(a, s * 3 + 1));
  }, Ut = e, Ut;
}
var qt, qn;
function no() {
  if (qn) return qt;
  qn = 1;
  const r = We(), e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
  function n(i) {
    this.mode = r.ALPHANUMERIC, this.data = i;
  }
  return n.getBitsLength = function(o) {
    return 11 * Math.floor(o / 2) + 6 * (o % 2);
  }, n.prototype.getLength = function() {
    return this.data.length;
  }, n.prototype.getBitsLength = function() {
    return n.getBitsLength(this.data.length);
  }, n.prototype.write = function(o) {
    let t;
    for (t = 0; t + 2 <= this.data.length; t += 2) {
      let a = e.indexOf(this.data[t]) * 45;
      a += e.indexOf(this.data[t + 1]), o.put(a, 11);
    }
    this.data.length % 2 && o.put(e.indexOf(this.data[t]), 6);
  }, qt = n, qt;
}
var Ft, Fn;
function io() {
  return Fn || (Fn = 1, Ft = function(e) {
    for (var n = [], i = e.length, o = 0; o < i; o++) {
      var t = e.charCodeAt(o);
      if (t >= 55296 && t <= 56319 && i > o + 1) {
        var a = e.charCodeAt(o + 1);
        a >= 56320 && a <= 57343 && (t = (t - 55296) * 1024 + a - 56320 + 65536, o += 1);
      }
      if (t < 128) {
        n.push(t);
        continue;
      }
      if (t < 2048) {
        n.push(t >> 6 | 192), n.push(t & 63 | 128);
        continue;
      }
      if (t < 55296 || t >= 57344 && t < 65536) {
        n.push(t >> 12 | 224), n.push(t >> 6 & 63 | 128), n.push(t & 63 | 128);
        continue;
      }
      if (t >= 65536 && t <= 1114111) {
        n.push(t >> 18 | 240), n.push(t >> 12 & 63 | 128), n.push(t >> 6 & 63 | 128), n.push(t & 63 | 128);
        continue;
      }
      n.push(239, 191, 189);
    }
    return new Uint8Array(n).buffer;
  }), Ft;
}
var Vt, Vn;
function oo() {
  if (Vn) return Vt;
  Vn = 1;
  const r = io(), e = We();
  function n(i) {
    this.mode = e.BYTE, typeof i == "string" && (i = r(i)), this.data = new Uint8Array(i);
  }
  return n.getBitsLength = function(o) {
    return o * 8;
  }, n.prototype.getLength = function() {
    return this.data.length;
  }, n.prototype.getBitsLength = function() {
    return n.getBitsLength(this.data.length);
  }, n.prototype.write = function(i) {
    for (let o = 0, t = this.data.length; o < t; o++) i.put(this.data[o], 8);
  }, Vt = n, Vt;
}
var Kt, Kn;
function ro() {
  if (Kn) return Kt;
  Kn = 1;
  const r = We(), e = Ee();
  function n(i) {
    this.mode = r.KANJI, this.data = i;
  }
  return n.getBitsLength = function(o) {
    return o * 13;
  }, n.prototype.getLength = function() {
    return this.data.length;
  }, n.prototype.getBitsLength = function() {
    return n.getBitsLength(this.data.length);
  }, n.prototype.write = function(i) {
    let o;
    for (o = 0; o < this.data.length; o++) {
      let t = e.toSJIS(this.data[o]);
      if (t >= 33088 && t <= 40956) t -= 33088;
      else if (t >= 57408 && t <= 60351) t -= 49472;
      else throw new Error("Invalid SJIS character: " + this.data[o] + `
Make sure your charset is UTF-8`);
      t = (t >>> 8 & 255) * 192 + (t & 255), i.put(t, 13);
    }
  }, Kt = n, Kt;
}
var Ht = { exports: {} }, Hn;
function ao() {
  return Hn || (Hn = 1, (function(r) {
    var e = { single_source_shortest_paths: function(n, i, o) {
      var t = {}, a = {};
      a[i] = 0;
      var s = e.PriorityQueue.make();
      s.push(i, 0);
      for (var l, d, h, w, x, p, W, v, S; !s.empty(); ) {
        l = s.pop(), d = l.value, w = l.cost, x = n[d] || {};
        for (h in x) x.hasOwnProperty(h) && (p = x[h], W = w + p, v = a[h], S = typeof a[h] > "u", (S || v > W) && (a[h] = W, s.push(h, W), t[h] = d));
      }
      if (typeof o < "u" && typeof a[o] > "u") {
        var m = ["Could not find a path from ", i, " to ", o, "."].join("");
        throw new Error(m);
      }
      return t;
    }, extract_shortest_path_from_predecessor_list: function(n, i) {
      for (var o = [], t = i; t; ) o.push(t), n[t], t = n[t];
      return o.reverse(), o;
    }, find_path: function(n, i, o) {
      var t = e.single_source_shortest_paths(n, i, o);
      return e.extract_shortest_path_from_predecessor_list(t, o);
    }, PriorityQueue: { make: function(n) {
      var i = e.PriorityQueue, o = {}, t;
      n = n || {};
      for (t in i) i.hasOwnProperty(t) && (o[t] = i[t]);
      return o.queue = [], o.sorter = n.sorter || i.default_sorter, o;
    }, default_sorter: function(n, i) {
      return n.cost - i.cost;
    }, push: function(n, i) {
      var o = { value: n, cost: i };
      this.queue.push(o), this.queue.sort(this.sorter);
    }, pop: function() {
      return this.queue.shift();
    }, empty: function() {
      return this.queue.length === 0;
    } } };
    r.exports = e;
  })(Ht)), Ht.exports;
}
var Gn;
function so() {
  return Gn || (Gn = 1, (function(r) {
    const e = We(), n = to(), i = no(), o = oo(), t = ro(), a = di(), s = Ee(), l = ao();
    function d(m) {
      return unescape(encodeURIComponent(m)).length;
    }
    function h(m, g, b) {
      const f = [];
      let D;
      for (; (D = m.exec(b)) !== null; ) f.push({ data: D[0], index: D.index, mode: g, length: D[0].length });
      return f;
    }
    function w(m) {
      const g = h(a.NUMERIC, e.NUMERIC, m), b = h(a.ALPHANUMERIC, e.ALPHANUMERIC, m);
      let f, D;
      return s.isKanjiModeEnabled() ? (f = h(a.BYTE, e.BYTE, m), D = h(a.KANJI, e.KANJI, m)) : (f = h(a.BYTE_KANJI, e.BYTE, m), D = []), g.concat(b, f, D).sort(function(T, _) {
        return T.index - _.index;
      }).map(function(T) {
        return { data: T.data, mode: T.mode, length: T.length };
      });
    }
    function x(m, g) {
      switch (g) {
        case e.NUMERIC:
          return n.getBitsLength(m);
        case e.ALPHANUMERIC:
          return i.getBitsLength(m);
        case e.KANJI:
          return t.getBitsLength(m);
        case e.BYTE:
          return o.getBitsLength(m);
      }
    }
    function p(m) {
      return m.reduce(function(g, b) {
        const f = g.length - 1 >= 0 ? g[g.length - 1] : null;
        return f && f.mode === b.mode ? (g[g.length - 1].data += b.data, g) : (g.push(b), g);
      }, []);
    }
    function W(m) {
      const g = [];
      for (let b = 0; b < m.length; b++) {
        const f = m[b];
        switch (f.mode) {
          case e.NUMERIC:
            g.push([f, { data: f.data, mode: e.ALPHANUMERIC, length: f.length }, { data: f.data, mode: e.BYTE, length: f.length }]);
            break;
          case e.ALPHANUMERIC:
            g.push([f, { data: f.data, mode: e.BYTE, length: f.length }]);
            break;
          case e.KANJI:
            g.push([f, { data: f.data, mode: e.BYTE, length: d(f.data) }]);
            break;
          case e.BYTE:
            g.push([{ data: f.data, mode: e.BYTE, length: d(f.data) }]);
        }
      }
      return g;
    }
    function v(m, g) {
      const b = {}, f = { start: {} };
      let D = ["start"];
      for (let C = 0; C < m.length; C++) {
        const T = m[C], _ = [];
        for (let y = 0; y < T.length; y++) {
          const L = T[y], R = "" + C + y;
          _.push(R), b[R] = { node: L, lastCount: 0 }, f[R] = {};
          for (let P = 0; P < D.length; P++) {
            const $ = D[P];
            b[$] && b[$].node.mode === L.mode ? (f[$][R] = x(b[$].lastCount + L.length, L.mode) - x(b[$].lastCount, L.mode), b[$].lastCount += L.length) : (b[$] && (b[$].lastCount = L.length), f[$][R] = x(L.length, L.mode) + 4 + e.getCharCountIndicator(L.mode, g));
          }
        }
        D = _;
      }
      for (let C = 0; C < D.length; C++) f[D[C]].end = 0;
      return { map: f, table: b };
    }
    function S(m, g) {
      let b;
      const f = e.getBestModeForData(m);
      if (b = e.from(g, f), b !== e.BYTE && b.bit < f.bit) throw new Error('"' + m + '" cannot be encoded with mode ' + e.toString(b) + `.
 Suggested mode is: ` + e.toString(f));
      switch (b === e.KANJI && !s.isKanjiModeEnabled() && (b = e.BYTE), b) {
        case e.NUMERIC:
          return new n(m);
        case e.ALPHANUMERIC:
          return new i(m);
        case e.KANJI:
          return new t(m);
        case e.BYTE:
          return new o(m);
      }
    }
    r.fromArray = function(g) {
      return g.reduce(function(b, f) {
        return typeof f == "string" ? b.push(S(f, null)) : f.data && b.push(S(f.data, f.mode)), b;
      }, []);
    }, r.fromString = function(g, b) {
      const f = w(g, s.isKanjiModeEnabled()), D = W(f), C = v(D, b), T = l.find_path(C.map, "start", "end"), _ = [];
      for (let y = 1; y < T.length - 1; y++) _.push(C.table[T[y]].node);
      return r.fromArray(p(_));
    }, r.rawSplit = function(g) {
      return r.fromArray(w(g, s.isKanjiModeEnabled()));
    };
  })(Mt)), Mt;
}
var Yn;
function lo() {
  if (Yn) return Wt;
  Yn = 1;
  const r = Ee(), e = fn(), n = Vi(), i = Ki(), o = Hi(), t = Gi(), a = Yi(), s = ci(), l = Xi(), d = Zi(), h = eo(), w = We(), x = so();
  function p(C, T) {
    const _ = C.size, y = t.getPositions(T);
    for (let L = 0; L < y.length; L++) {
      const R = y[L][0], P = y[L][1];
      for (let $ = -1; $ <= 7; $++) if (!(R + $ <= -1 || _ <= R + $)) for (let A = -1; A <= 7; A++) P + A <= -1 || _ <= P + A || ($ >= 0 && $ <= 6 && (A === 0 || A === 6) || A >= 0 && A <= 6 && ($ === 0 || $ === 6) || $ >= 2 && $ <= 4 && A >= 2 && A <= 4 ? C.set(R + $, P + A, true, true) : C.set(R + $, P + A, false, true));
    }
  }
  function W(C) {
    const T = C.size;
    for (let _ = 8; _ < T - 8; _++) {
      const y = _ % 2 === 0;
      C.set(_, 6, y, true), C.set(6, _, y, true);
    }
  }
  function v(C, T) {
    const _ = o.getPositions(T);
    for (let y = 0; y < _.length; y++) {
      const L = _[y][0], R = _[y][1];
      for (let P = -2; P <= 2; P++) for (let $ = -2; $ <= 2; $++) P === -2 || P === 2 || $ === -2 || $ === 2 || P === 0 && $ === 0 ? C.set(L + P, R + $, true, true) : C.set(L + P, R + $, false, true);
    }
  }
  function S(C, T) {
    const _ = C.size, y = d.getEncodedBits(T);
    let L, R, P;
    for (let $ = 0; $ < 18; $++) L = Math.floor($ / 3), R = $ % 3 + _ - 8 - 3, P = (y >> $ & 1) === 1, C.set(L, R, P, true), C.set(R, L, P, true);
  }
  function m(C, T, _) {
    const y = C.size, L = h.getEncodedBits(T, _);
    let R, P;
    for (R = 0; R < 15; R++) P = (L >> R & 1) === 1, R < 6 ? C.set(R, 8, P, true) : R < 8 ? C.set(R + 1, 8, P, true) : C.set(y - 15 + R, 8, P, true), R < 8 ? C.set(8, y - R - 1, P, true) : R < 9 ? C.set(8, 15 - R - 1 + 1, P, true) : C.set(8, 15 - R - 1, P, true);
    C.set(y - 8, 8, 1, true);
  }
  function g(C, T) {
    const _ = C.size;
    let y = -1, L = _ - 1, R = 7, P = 0;
    for (let $ = _ - 1; $ > 0; $ -= 2) for ($ === 6 && $--; ; ) {
      for (let A = 0; A < 2; A++) if (!C.isReserved(L, $ - A)) {
        let we = false;
        P < T.length && (we = (T[P] >>> R & 1) === 1), C.set(L, $ - A, we), R--, R === -1 && (P++, R = 7);
      }
      if (L += y, L < 0 || _ <= L) {
        L -= y, y = -y;
        break;
      }
    }
  }
  function b(C, T, _) {
    const y = new n();
    _.forEach(function(A) {
      y.put(A.mode.bit, 4), y.put(A.getLength(), w.getCharCountIndicator(A.mode, C)), A.write(y);
    });
    const L = r.getSymbolTotalCodewords(C), R = s.getTotalCodewordsCount(C, T), P = (L - R) * 8;
    for (y.getLengthInBits() + 4 <= P && y.put(0, 4); y.getLengthInBits() % 8 !== 0; ) y.putBit(0);
    const $ = (P - y.getLengthInBits()) / 8;
    for (let A = 0; A < $; A++) y.put(A % 2 ? 17 : 236, 8);
    return f(y, C, T);
  }
  function f(C, T, _) {
    const y = r.getSymbolTotalCodewords(T), L = s.getTotalCodewordsCount(T, _), R = y - L, P = s.getBlocksCount(T, _), $ = y % P, A = P - $, we = Math.floor(y / P), ke = Math.floor(R / P), vi = ke + 1, mn = we - ke, yi = new l(mn);
    let Ct = 0;
    const Ye = new Array(P), bn = new Array(P);
    let Rt = 0;
    const xi = new Uint8Array(C.buffer);
    for (let Se = 0; Se < P; Se++) {
      const _t = Se < A ? ke : vi;
      Ye[Se] = xi.slice(Ct, Ct + _t), bn[Se] = yi.encode(Ye[Se]), Ct += _t, Rt = Math.max(Rt, _t);
    }
    const $t = new Uint8Array(y);
    let vn = 0, le, ce;
    for (le = 0; le < Rt; le++) for (ce = 0; ce < P; ce++) le < Ye[ce].length && ($t[vn++] = Ye[ce][le]);
    for (le = 0; le < mn; le++) for (ce = 0; ce < P; ce++) $t[vn++] = bn[ce][le];
    return $t;
  }
  function D(C, T, _, y) {
    let L;
    if (Array.isArray(C)) L = x.fromArray(C);
    else if (typeof C == "string") {
      let we = T;
      if (!we) {
        const ke = x.rawSplit(C);
        we = d.getBestVersionForData(ke, _);
      }
      L = x.fromString(C, we || 40);
    } else throw new Error("Invalid data");
    const R = d.getBestVersionForData(L, _);
    if (!R) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!T) T = R;
    else if (T < R) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + R + `.
`);
    const P = b(T, _, L), $ = r.getSymbolSize(T), A = new i($);
    return p(A, T), W(A), v(A, T), m(A, _, 0), T >= 7 && S(A, T), g(A, P), isNaN(y) && (y = a.getBestMask(A, m.bind(null, A, _))), a.applyMask(y, A), m(A, _, y), { modules: A, version: T, errorCorrectionLevel: _, maskPattern: y, segments: L };
  }
  return Wt.create = function(T, _) {
    if (typeof T > "u" || T === "") throw new Error("No input text");
    let y = e.M, L, R;
    return typeof _ < "u" && (y = e.from(_.errorCorrectionLevel, e.M), L = d.from(_.version), R = a.from(_.maskPattern), _.toSJISFunc && r.setToSJISFunction(_.toSJISFunc)), D(T, L, y, R);
  }, Wt;
}
var Gt = {}, Yt = {}, Jn;
function hi() {
  return Jn || (Jn = 1, (function(r) {
    function e(n) {
      if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
      let i = n.slice().replace("#", "").split("");
      if (i.length < 3 || i.length === 5 || i.length > 8) throw new Error("Invalid hex color: " + n);
      (i.length === 3 || i.length === 4) && (i = Array.prototype.concat.apply([], i.map(function(t) {
        return [t, t];
      }))), i.length === 6 && i.push("F", "F");
      const o = parseInt(i.join(""), 16);
      return { r: o >> 24 & 255, g: o >> 16 & 255, b: o >> 8 & 255, a: o & 255, hex: "#" + i.slice(0, 6).join("") };
    }
    r.getOptions = function(i) {
      i || (i = {}), i.color || (i.color = {});
      const o = typeof i.margin > "u" || i.margin === null || i.margin < 0 ? 4 : i.margin, t = i.width && i.width >= 21 ? i.width : void 0, a = i.scale || 4;
      return { width: t, scale: t ? 4 : a, margin: o, color: { dark: e(i.color.dark || "#000000ff"), light: e(i.color.light || "#ffffffff") }, type: i.type, rendererOpts: i.rendererOpts || {} };
    }, r.getScale = function(i, o) {
      return o.width && o.width >= i + o.margin * 2 ? o.width / (i + o.margin * 2) : o.scale;
    }, r.getImageWidth = function(i, o) {
      const t = r.getScale(i, o);
      return Math.floor((i + o.margin * 2) * t);
    }, r.qrToImageData = function(i, o, t) {
      const a = o.modules.size, s = o.modules.data, l = r.getScale(a, t), d = Math.floor((a + t.margin * 2) * l), h = t.margin * l, w = [t.color.light, t.color.dark];
      for (let x = 0; x < d; x++) for (let p = 0; p < d; p++) {
        let W = (x * d + p) * 4, v = t.color.light;
        if (x >= h && p >= h && x < d - h && p < d - h) {
          const S = Math.floor((x - h) / l), m = Math.floor((p - h) / l);
          v = w[s[S * a + m] ? 1 : 0];
        }
        i[W++] = v.r, i[W++] = v.g, i[W++] = v.b, i[W] = v.a;
      }
    };
  })(Yt)), Yt;
}
var Qn;
function co() {
  return Qn || (Qn = 1, (function(r) {
    const e = hi();
    function n(o, t, a) {
      o.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = a, t.width = a, t.style.height = a + "px", t.style.width = a + "px";
    }
    function i() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    r.render = function(t, a, s) {
      let l = s, d = a;
      typeof l > "u" && (!a || !a.getContext) && (l = a, a = void 0), a || (d = i()), l = e.getOptions(l);
      const h = e.getImageWidth(t.modules.size, l), w = d.getContext("2d"), x = w.createImageData(h, h);
      return e.qrToImageData(x.data, t, l), n(w, d, h), w.putImageData(x, 0, 0), d;
    }, r.renderToDataURL = function(t, a, s) {
      let l = s;
      typeof l > "u" && (!a || !a.getContext) && (l = a, a = void 0), l || (l = {});
      const d = r.render(t, a, l), h = l.type || "image/png", w = l.rendererOpts || {};
      return d.toDataURL(h, w.quality);
    };
  })(Gt)), Gt;
}
var Jt = {}, Xn;
function uo() {
  if (Xn) return Jt;
  Xn = 1;
  const r = hi();
  function e(o, t) {
    const a = o.a / 255, s = t + '="' + o.hex + '"';
    return a < 1 ? s + " " + t + '-opacity="' + a.toFixed(2).slice(1) + '"' : s;
  }
  function n(o, t, a) {
    let s = o + t;
    return typeof a < "u" && (s += " " + a), s;
  }
  function i(o, t, a) {
    let s = "", l = 0, d = false, h = 0;
    for (let w = 0; w < o.length; w++) {
      const x = Math.floor(w % t), p = Math.floor(w / t);
      !x && !d && (d = true), o[w] ? (h++, w > 0 && x > 0 && o[w - 1] || (s += d ? n("M", x + a, 0.5 + p + a) : n("m", l, 0), l = 0, d = false), x + 1 < t && o[w + 1] || (s += n("h", h), h = 0)) : l++;
    }
    return s;
  }
  return Jt.render = function(t, a, s) {
    const l = r.getOptions(a), d = t.modules.size, h = t.modules.data, w = d + l.margin * 2, x = l.color.light.a ? "<path " + e(l.color.light, "fill") + ' d="M0 0h' + w + "v" + w + 'H0z"/>' : "", p = "<path " + e(l.color.dark, "stroke") + ' d="' + i(h, d, l.margin) + '"/>', W = 'viewBox="0 0 ' + w + " " + w + '"', S = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + W + ' shape-rendering="crispEdges">' + x + p + `</svg>
`;
    return typeof s == "function" && s(null, S), S;
  }, Jt;
}
var Zn;
function ho() {
  if (Zn) return Te;
  Zn = 1;
  const r = Fi(), e = lo(), n = co(), i = uo();
  function o(t, a, s, l, d) {
    const h = [].slice.call(arguments, 1), w = h.length, x = typeof h[w - 1] == "function";
    if (!x && !r()) throw new Error("Callback required as last argument");
    if (x) {
      if (w < 2) throw new Error("Too few arguments provided");
      w === 2 ? (d = s, s = a, a = l = void 0) : w === 3 && (a.getContext && typeof d > "u" ? (d = l, l = void 0) : (d = l, l = s, s = a, a = void 0));
    } else {
      if (w < 1) throw new Error("Too few arguments provided");
      return w === 1 ? (s = a, a = l = void 0) : w === 2 && !a.getContext && (l = s, s = a, a = void 0), new Promise(function(p, W) {
        try {
          const v = e.create(s, l);
          p(t(v, a, l));
        } catch (v) {
          W(v);
        }
      });
    }
    try {
      const p = e.create(s, l);
      d(null, t(p, a, l));
    } catch (p) {
      d(p);
    }
  }
  return Te.create = e.create, Te.toCanvas = o.bind(null, n.render), Te.toDataURL = o.bind(null, n.renderToDataURL), Te.toString = o.bind(null, function(t, a, s) {
    return i.render(t, s);
  }), Te;
}
var fo = ho();
const po = Ei(fo), go = 0.1, ei = 2.5, ue = 7;
function Qt(r, e, n) {
  return r === e ? false : (r - e < 0 ? e - r : r - e) <= n + go;
}
function wo(r, e) {
  const n = Array.prototype.slice.call(po.create(r, { errorCorrectionLevel: e }).modules.data, 0), i = Math.sqrt(n.length);
  return n.reduce((o, t, a) => (a % i === 0 ? o.push([t]) : o[o.length - 1].push(t)) && o, []);
}
const mo = { generate({ uri: r, size: e, logoSize: n, dotColor: i = "#141414" }) {
  const o = "transparent", a = [], s = wo(r, "Q"), l = e / s.length, d = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
  d.forEach(({ x: v, y: S }) => {
    const m = (s.length - ue) * l * v, g = (s.length - ue) * l * S, b = 0.45;
    for (let f = 0; f < d.length; f += 1) {
      const D = l * (ue - f * 2);
      a.push(ze`
            <rect
              fill=${f === 2 ? i : o}
              width=${f === 0 ? D - 5 : D}
              rx= ${f === 0 ? (D - 5) * b : D * b}
              ry= ${f === 0 ? (D - 5) * b : D * b}
              stroke=${i}
              stroke-width=${f === 0 ? 5 : 0}
              height=${f === 0 ? D - 5 : D}
              x= ${f === 0 ? g + l * f + 5 / 2 : g + l * f}
              y= ${f === 0 ? m + l * f + 5 / 2 : m + l * f}
            />
          `);
    }
  });
  const h = Math.floor((n + 25) / l), w = s.length / 2 - h / 2, x = s.length / 2 + h / 2 - 1, p = [];
  s.forEach((v, S) => {
    v.forEach((m, g) => {
      if (s[S][g] && !(S < ue && g < ue || S > s.length - (ue + 1) && g < ue || S < ue && g > s.length - (ue + 1)) && !(S > w && S < x && g > w && g < x)) {
        const b = S * l + l / 2, f = g * l + l / 2;
        p.push([b, f]);
      }
    });
  });
  const W = {};
  return p.forEach(([v, S]) => {
    var _a;
    W[v] ? (_a = W[v]) == null ? void 0 : _a.push(S) : W[v] = [S];
  }), Object.entries(W).map(([v, S]) => {
    const m = S.filter((g) => S.every((b) => !Qt(g, b, l)));
    return [Number(v), m];
  }).forEach(([v, S]) => {
    S.forEach((m) => {
      a.push(ze`<circle cx=${v} cy=${m} fill=${i} r=${l / ei} />`);
    });
  }), Object.entries(W).filter(([v, S]) => S.length > 1).map(([v, S]) => {
    const m = S.filter((g) => S.some((b) => Qt(g, b, l)));
    return [Number(v), m];
  }).map(([v, S]) => {
    S.sort((g, b) => g < b ? -1 : 1);
    const m = [];
    for (const g of S) {
      const b = m.find((f) => f.some((D) => Qt(g, D, l)));
      b ? b.push(g) : m.push([g]);
    }
    return [v, m.map((g) => [g[0], g[g.length - 1]])];
  }).forEach(([v, S]) => {
    S.forEach(([m, g]) => {
      a.push(ze`
              <line
                x1=${v}
                x2=${v}
                y1=${m}
                y2=${g}
                stroke=${i}
                stroke-width=${l / (ei / 2)}
                stroke-linecap="round"
              />
            `);
    });
  }), a;
} }, bo = N`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;
var ge = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
const vo = "#3396ff";
let te = class extends O {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.theme = "dark", this.imageSrc = void 0, this.alt = void 0, this.arenaClear = void 0, this.farcaster = void 0;
  }
  render() {
    return this.dataset.theme = this.theme, this.dataset.clear = String(this.arenaClear), this.style.cssText = `
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color ?? vo}
    `, c`${this.templateVisual()} ${this.templateSvg()}`;
  }
  templateSvg() {
    const e = this.theme === "light" ? this.size : this.size - 32;
    return ze`
      <svg height=${e} width=${e}>
        ${mo.generate({ uri: this.uri, size: e, logoSize: this.arenaClear ? 0 : e / 4, dotColor: this.color })}
      </svg>
    `;
  }
  templateVisual() {
    return this.imageSrc ? c`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>` : this.farcaster ? c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>` : c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
te.styles = [q, bo];
ge([u()], te.prototype, "uri", void 0);
ge([u({ type: Number })], te.prototype, "size", void 0);
ge([u()], te.prototype, "theme", void 0);
ge([u()], te.prototype, "imageSrc", void 0);
ge([u()], te.prototype, "alt", void 0);
ge([u()], te.prototype, "color", void 0);
ge([u({ type: Boolean })], te.prototype, "arenaClear", void 0);
ge([u({ type: Boolean })], te.prototype, "farcaster", void 0);
te = ge([B("wui-qr-code")], te);
const yo = N`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;
var He = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Re = class extends O {
  constructor() {
    super(...arguments), this.width = "", this.height = "", this.borderRadius = "m", this.variant = "default";
  }
  render() {
    return this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `, c`<slot></slot>`;
  }
};
Re.styles = [yo];
He([u()], Re.prototype, "width", void 0);
He([u()], Re.prototype, "height", void 0);
He([u()], Re.prototype, "borderRadius", void 0);
He([u()], Re.prototype, "variant", void 0);
Re = He([B("wui-shimmer")], Re);
const xo = "https://reown.com", Co = N`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;
var Ro = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let tn = class extends O {
  render() {
    return c`
      <a href=${xo} rel="noreferrer" target="_blank" style="text-decoration: none;">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0", "0", "l", "0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `;
  }
};
tn.styles = [q, G, Co];
tn = Ro([B("wui-ux-by-reown")], tn);
const $o = N`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;
var _o = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let nn = class extends V {
  constructor() {
    var _a;
    super(), this.forceUpdate = () => {
      this.requestUpdate();
    }, window.addEventListener("resize", this.forceUpdate), ee.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: ((_a = this.wallet) == null ? void 0 : _a.name) ?? "WalletConnect", platform: "qrcode" } });
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.unsubscribe) == null ? void 0 : _a.forEach((e) => e()), window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    return this.onRenderProxy(), c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    !this.ready && this.uri && (this.timeout = setTimeout(() => {
      this.ready = true;
    }, 200));
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) return null;
    const e = this.getBoundingClientRect().width - 40, n = this.wallet ? this.wallet.name : void 0;
    return k.setWcLinking(void 0), k.setRecentWallet(this.wallet), c` <wui-qr-code
      size=${e}
      theme=${en.state.themeMode}
      uri=${this.uri}
      imageSrc=${I(K.getWalletImage(this.wallet))}
      color=${I(en.state.themeVariables["--w3m-qr-color"])}
      alt=${I(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const e = !this.uri || !this.ready;
    return c`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
  }
};
nn.styles = $o;
nn = _o([B("w3m-connecting-wc-qrcode")], nn);
var Io = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let ti = class extends O {
  constructor() {
    var _a;
    if (super(), this.wallet = (_a = U.state.data) == null ? void 0 : _a.wallet, !this.wallet) throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    ee.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "browser" } });
  }
  render() {
    return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${I(K.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
ti = Io([B("w3m-connecting-wc-unsupported")], ti);
var fi = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let on = class extends V {
  constructor() {
    if (super(), this.isLoading = true, !this.wallet) throw new Error("w3m-connecting-wc-web: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.secondaryBtnLabel = "Open", this.secondaryLabel = ri.CONNECT_LABELS.MOBILE, this.secondaryBtnIcon = "externalLink", this.updateLoadingState(), this.unsubscribe.push(k.subscribeKey("wcUri", () => {
      this.updateLoadingState();
    })), ee.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "web" } });
  }
  updateLoadingState() {
    this.isLoading = !this.uri;
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.webapp_link) && this.uri) try {
      this.error = false;
      const { webapp_link: e, name: n } = this.wallet, { redirect: i, href: o } = j.formatUniversalUrl(e, this.uri);
      k.setWcLinking({ name: n, href: o }), k.setRecentWallet(this.wallet), j.openHref(i, "_blank");
    } catch {
      this.error = true;
    }
  }
};
fi([E()], on.prototype, "isLoading", void 0);
on = fi([B("w3m-connecting-wc-web")], on);
var yt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Ve = class extends O {
  constructor() {
    var _a;
    super(), this.wallet = (_a = U.state.data) == null ? void 0 : _a.wallet, this.platform = void 0, this.platforms = [], this.isSiwxEnabled = !!he.state.siwx, this.determinePlatforms(), this.initializeConnection();
  }
  render() {
    return c`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `;
  }
  async initializeConnection(e = false) {
    if (!(this.platform === "browser" || he.state.manualWCControl && !e)) try {
      const { wcPairingExpiry: n, status: i } = k.state;
      (e || he.state.enableEmbedded || j.isPairingExpired(n) || i === "connecting") && (await k.connectWalletConnect(), this.isSiwxEnabled || oi.close());
    } catch (n) {
      ee.sendEvent({ type: "track", event: "CONNECT_ERROR", properties: { message: (n == null ? void 0 : n.message) ?? "Unknown" } }), k.setWcError(true), Qe.showError(n.message ?? "Connection error"), k.resetWcConnection(), U.goBack();
    }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push("qrcode"), this.platform = "qrcode";
      return;
    }
    if (this.platform) return;
    const { mobile_link: e, desktop_link: n, webapp_link: i, injected: o, rdns: t } = this.wallet, a = o == null ? void 0 : o.map(({ injected_id: W }) => W).filter(Boolean), s = [...t ? [t] : a ?? []], l = he.state.isUniversalProvider ? false : s.length, d = e, h = i, w = k.checkInstalled(s), x = l && w, p = n && !j.isMobile();
    x && !Zt.state.noAdapters && this.platforms.push("browser"), d && this.platforms.push(j.isMobile() ? "mobile" : "qrcode"), h && this.platforms.push("web"), p && this.platforms.push("desktop"), !x && l && !Zt.state.noAdapters && this.platforms.push("unsupported"), this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "web":
        return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
      case "desktop":
        return c`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "mobile":
        return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return c`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    return this.platforms.length > 1 ? c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    ` : null;
  }
  async onSelectPlatform(e) {
    var _a;
    const n = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div");
    n && (await n.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.platform = e, n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" }));
  }
};
yt([E()], Ve.prototype, "platform", void 0);
yt([E()], Ve.prototype, "platforms", void 0);
yt([E()], Ve.prototype, "isSiwxEnabled", void 0);
Ve = yt([B("w3m-connecting-wc-view")], Ve);
var pi = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let rn = class extends O {
  constructor() {
    super(...arguments), this.isMobile = j.isMobile();
  }
  render() {
    if (this.isMobile) {
      const { featured: e, recommended: n } = z.state, { customWallets: i } = he.state, o = ht.getRecentWallets(), t = e.length || n.length || (i == null ? void 0 : i.length) || o.length;
      return c`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs", "s", "s", "s"]}
      >
        ${t ? c`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
    }
    return c`<wui-flex flexDirection="column" .padding=${["0", "0", "l", "0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0", "m", "0", "m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`;
  }
};
pi([E()], rn.prototype, "isMobile", void 0);
rn = pi([B("w3m-connecting-wc-basic-view")], rn);
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pn = () => new Eo();
class Eo {
}
const Xt = /* @__PURE__ */ new WeakMap(), gn = $i(class extends _i {
  render(r) {
    return xn;
  }
  update(r, [e]) {
    var _a;
    const n = e !== this.G;
    return n && this.G !== void 0 && this.rt(void 0), (n || this.lt !== this.ct) && (this.G = e, this.ht = (_a = r.options) == null ? void 0 : _a.host, this.rt(this.ct = r.element)), xn;
  }
  rt(r) {
    if (this.isConnected || (r = void 0), typeof this.G == "function") {
      const e = this.ht ?? globalThis;
      let n = Xt.get(e);
      n === void 0 && (n = /* @__PURE__ */ new WeakMap(), Xt.set(e, n)), n.get(this.G) !== void 0 && this.G.call(this.ht, void 0), n.set(this.G, r), r !== void 0 && this.G.call(this.ht, r);
    } else this.G.value = r;
  }
  get lt() {
    var _a, _b;
    return typeof this.G == "function" ? (_a = Xt.get(this.ht ?? globalThis)) == null ? void 0 : _a.get(this.G) : (_b = this.G) == null ? void 0 : _b.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
}), Wo = N`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;
var gi = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let st = class extends O {
  constructor() {
    super(...arguments), this.inputElementRef = pn(), this.checked = void 0;
  }
  render() {
    return c`
      <label>
        <input
          ${gn(this.inputElementRef)}
          type="checkbox"
          ?checked=${I(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("switchChange", { detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.checked, bubbles: true, composed: true }));
  }
};
st.styles = [q, G, Ri, Wo];
gi([u({ type: Boolean })], st.prototype, "checked", void 0);
st = gi([B("wui-switch")], st);
const So = N`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var wi = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let lt = class extends O {
  constructor() {
    super(...arguments), this.checked = void 0;
  }
  render() {
    return c`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${I(this.checked)}></wui-switch>
      </button>
    `;
  }
};
lt.styles = [q, G, So];
wi([u({ type: Boolean })], lt.prototype, "checked", void 0);
lt = wi([B("wui-certified-switch")], lt);
const To = N`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;
var mi = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let ct = class extends O {
  constructor() {
    super(...arguments), this.icon = "copy";
  }
  render() {
    return c`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
ct.styles = [q, G, To];
mi([u()], ct.prototype, "icon", void 0);
ct = mi([B("wui-input-element")], ct);
const Po = N`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;
var se = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let X = class extends O {
  constructor() {
    super(...arguments), this.inputElementRef = pn(), this.size = "md", this.disabled = false, this.placeholder = "", this.type = "text", this.value = "";
  }
  render() {
    const e = `wui-padding-right-${this.inputRightPadding}`, i = { [`wui-size-${this.size}`]: true, [e]: !!this.inputRightPadding };
    return c`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${gn(this.inputElementRef)}
        class=${Ii(i)}
        type=${this.type}
        enterkeyhint=${I(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value || ""}
        tabindex=${I(this.tabIdx)}
      />
      <slot></slot>`;
  }
  templateIcon() {
    return this.icon ? c`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>` : null;
  }
  dispatchInputChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("inputChange", { detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.value, bubbles: true, composed: true }));
  }
};
X.styles = [q, G, Po];
se([u()], X.prototype, "size", void 0);
se([u()], X.prototype, "icon", void 0);
se([u({ type: Boolean })], X.prototype, "disabled", void 0);
se([u()], X.prototype, "placeholder", void 0);
se([u()], X.prototype, "type", void 0);
se([u()], X.prototype, "keyHint", void 0);
se([u()], X.prototype, "value", void 0);
se([u()], X.prototype, "inputRightPadding", void 0);
se([u()], X.prototype, "tabIdx", void 0);
X = se([B("wui-input-text")], X);
const Bo = N`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
var Lo = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let an = class extends O {
  constructor() {
    super(...arguments), this.inputComponentRef = pn();
  }
  render() {
    return c`
      <wui-input-text
        ${gn(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `;
  }
  clearValue() {
    var _a;
    const n = (_a = this.inputComponentRef.value) == null ? void 0 : _a.inputElementRef.value;
    n && (n.value = "", n.focus(), n.dispatchEvent(new Event("input")));
  }
};
an.styles = [q, Bo];
an = Lo([B("wui-search-bar")], an);
const Oo = ze`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`, Ao = N`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var bi = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let ut = class extends O {
  constructor() {
    super(...arguments), this.type = "wallet";
  }
  render() {
    return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    return this.type === "network" ? c` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Oo}` : c`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
};
ut.styles = [q, G, Ao];
bi([u()], ut.prototype, "type", void 0);
ut = bi([B("wui-card-select-loader")], ut);
const jo = N`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var Z = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let H = class extends O {
  render() {
    return this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && de.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && de.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && de.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && de.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && de.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && de.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && de.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && de.getSpacingStyles(this.margin, 3)};
    `, c`<slot></slot>`;
  }
};
H.styles = [q, jo];
Z([u()], H.prototype, "gridTemplateRows", void 0);
Z([u()], H.prototype, "gridTemplateColumns", void 0);
Z([u()], H.prototype, "justifyItems", void 0);
Z([u()], H.prototype, "alignItems", void 0);
Z([u()], H.prototype, "justifyContent", void 0);
Z([u()], H.prototype, "alignContent", void 0);
Z([u()], H.prototype, "columnGap", void 0);
Z([u()], H.prototype, "rowGap", void 0);
Z([u()], H.prototype, "gap", void 0);
Z([u()], H.prototype, "padding", void 0);
Z([u()], H.prototype, "margin", void 0);
H = Z([B("wui-grid")], H);
const ko = N`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var Ge = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let $e = class extends O {
  constructor() {
    super(), this.observer = new IntersectionObserver(() => {
    }), this.visible = false, this.imageSrc = void 0, this.imageLoading = false, this.wallet = void 0, this.observer = new IntersectionObserver((e) => {
      e.forEach((n) => {
        n.isIntersecting ? (this.visible = true, this.fetchImageSrc()) : this.visible = false;
      });
    }, { threshold: 0.01 });
  }
  firstUpdated() {
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    var _a, _b;
    const e = ((_a = this.wallet) == null ? void 0 : _a.badge_type) === "certified";
    return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${I(e ? "certified" : void 0)}
            >${(_b = this.wallet) == null ? void 0 : _b.name}</wui-text
          >
          ${e ? c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
  }
  imageTemplate() {
    var _a, _b;
    return !this.visible && !this.imageSrc || this.imageLoading ? this.shimmerTemplate() : c`
      <wui-wallet-image
        size="md"
        imageSrc=${I(this.imageSrc)}
        name=${(_a = this.wallet) == null ? void 0 : _a.name}
        .installed=${(_b = this.wallet) == null ? void 0 : _b.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
  }
  shimmerTemplate() {
    return c`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
  async fetchImageSrc() {
    this.wallet && (this.imageSrc = K.getWalletImage(this.wallet), !this.imageSrc && (this.imageLoading = true, this.imageSrc = await K.fetchWalletImage(this.wallet.image_id), this.imageLoading = false));
  }
};
$e.styles = ko;
Ge([E()], $e.prototype, "visible", void 0);
Ge([E()], $e.prototype, "imageSrc", void 0);
Ge([E()], $e.prototype, "imageLoading", void 0);
Ge([u()], $e.prototype, "wallet", void 0);
$e = Ge([B("w3m-all-wallets-list-item")], $e);
const Do = N`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var je = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
const ni = "local-paginator";
let be = class extends O {
  constructor() {
    super(), this.unsubscribe = [], this.paginationObserver = void 0, this.loading = !z.state.wallets.length, this.wallets = z.state.wallets, this.recommended = z.state.recommended, this.featured = z.state.featured, this.filteredWallets = z.state.filteredWallets, this.unsubscribe.push(z.subscribeKey("wallets", (e) => this.wallets = e), z.subscribeKey("recommended", (e) => this.recommended = e), z.subscribeKey("featured", (e) => this.featured = e), z.subscribeKey("filteredWallets", (e) => this.filteredWallets = e));
  }
  firstUpdated() {
    this.initialFetch(), this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a;
    this.unsubscribe.forEach((e) => e()), (_a = this.paginationObserver) == null ? void 0 : _a.disconnect();
  }
  render() {
    return c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a;
    this.loading = true;
    const e = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-grid");
    e && (await z.fetchWalletsByPage({ page: 1 }), await e.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.loading = false, e.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" }));
  }
  shimmerTemplate(e, n) {
    return [...Array(e)].map(() => c`
        <wui-card-select-loader type="wallet" id=${I(n)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    var _a;
    const e = ((_a = this.filteredWallets) == null ? void 0 : _a.length) > 0 ? j.uniqueBy([...this.featured, ...this.recommended, ...this.filteredWallets], "id") : j.uniqueBy([...this.featured, ...this.recommended, ...this.wallets], "id");
    return ft.markWalletsAsInstalled(e).map((i) => c`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(i)}
          .wallet=${i}
        ></w3m-all-wallets-list-item>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets: e, recommended: n, featured: i, count: o } = z.state, t = window.innerWidth < 352 ? 3 : 4, a = e.length + n.length;
    let l = Math.ceil(a / t) * t - a + t;
    return l -= e.length ? i.length % t : 0, o === 0 && i.length > 0 ? null : o === 0 || [...i, ...e, ...n].length < o ? this.shimmerTemplate(l, ni) : null;
  }
  createPaginationObserver() {
    var _a;
    const e = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`#${ni}`);
    e && (this.paginationObserver = new IntersectionObserver(([n]) => {
      if ((n == null ? void 0 : n.isIntersecting) && !this.loading) {
        const { page: i, count: o, wallets: t } = z.state;
        t.length < o && z.fetchWalletsByPage({ page: i + 1 });
      }
    }), this.paginationObserver.observe(e));
  }
  onConnectWallet(e) {
    M.selectWalletConnector(e);
  }
};
be.styles = Do;
je([E()], be.prototype, "loading", void 0);
je([E()], be.prototype, "wallets", void 0);
je([E()], be.prototype, "recommended", void 0);
je([E()], be.prototype, "featured", void 0);
je([E()], be.prototype, "filteredWallets", void 0);
be = je([B("w3m-all-wallets-list")], be);
const zo = N`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
var xt = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let Le = class extends O {
  constructor() {
    super(...arguments), this.prevQuery = "", this.prevBadge = void 0, this.loading = true, this.query = "";
  }
  render() {
    return this.onSearch(), this.loading ? c`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) && (this.prevQuery = this.query, this.prevBadge = this.badge, this.loading = true, await z.searchWallet({ search: this.query, badge: this.badge }), this.loading = false);
  }
  walletsTemplate() {
    const { search: e } = z.state, n = ft.markWalletsAsInstalled(e);
    return e.length ? c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "s", "s", "s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${n.map((i) => c`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(i)}
              .wallet=${i}
              data-testid="wallet-search-item-${i.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    ` : c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
  }
  onConnectWallet(e) {
    M.selectWalletConnector(e);
  }
};
Le.styles = zo;
xt([E()], Le.prototype, "loading", void 0);
xt([u()], Le.prototype, "query", void 0);
xt([u()], Le.prototype, "badge", void 0);
Le = xt([B("w3m-all-wallets-search")], Le);
var wn = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let dt = class extends O {
  constructor() {
    super(...arguments), this.search = "", this.onDebouncedSearch = j.debounce((e) => {
      this.search = e;
    });
  }
  render() {
    const e = this.search.length >= 2;
    return c`
      <wui-flex .padding=${["0", "s", "s", "s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e || this.badge ? c`<w3m-all-wallets-search
            query=${this.search}
            badge=${I(this.badge)}
          ></w3m-all-wallets-search>` : c`<w3m-all-wallets-list badge=${I(this.badge)}></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail);
  }
  onClick() {
    if (this.badge === "certified") {
      this.badge = void 0;
      return;
    }
    this.badge = "certified", Qe.showSvg("Only WalletConnect certified", { icon: "walletConnectBrown", iconColor: "accent-100" });
  }
  qrButtonTemplate() {
    return j.isMobile() ? c`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      ` : null;
  }
  onWalletConnectQr() {
    U.push("ConnectingWalletConnect");
  }
};
wn([E()], dt.prototype, "search", void 0);
wn([E()], dt.prototype, "badge", void 0);
dt = wn([B("w3m-all-wallets-view")], dt);
const No = N`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
var ne = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let J = class extends O {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.variant = "icon", this.disabled = false, this.imageSrc = void 0, this.alt = void 0, this.chevron = false, this.loading = false;
  }
  render() {
    return c`
      <button
        ?disabled=${this.loading ? true : !!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${I(this.iconVariant)}
        tabindex=${I(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `;
  }
  visualTemplate() {
    if (this.variant === "image" && this.imageSrc) return c`<wui-image src=${this.imageSrc} alt=${this.alt ?? "list item"}></wui-image>`;
    if (this.iconVariant === "square" && this.icon && this.variant === "icon") return c`<wui-icon name=${this.icon}></wui-icon>`;
    if (this.variant === "icon" && this.icon && this.iconVariant) {
      const e = ["blue", "square-blue"].includes(this.iconVariant) ? "accent-100" : "fg-200", n = this.iconVariant === "square-blue" ? "mdl" : "md", i = this.iconSize ? this.iconSize : n;
      return c`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  loadingTemplate() {
    return this.loading ? c`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>` : c``;
  }
  chevronTemplate() {
    return this.chevron ? c`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>` : null;
  }
};
J.styles = [q, G, No];
ne([u()], J.prototype, "icon", void 0);
ne([u()], J.prototype, "iconSize", void 0);
ne([u()], J.prototype, "tabIdx", void 0);
ne([u()], J.prototype, "variant", void 0);
ne([u()], J.prototype, "iconVariant", void 0);
ne([u({ type: Boolean })], J.prototype, "disabled", void 0);
ne([u()], J.prototype, "imageSrc", void 0);
ne([u()], J.prototype, "alt", void 0);
ne([u({ type: Boolean })], J.prototype, "chevron", void 0);
ne([u({ type: Boolean })], J.prototype, "loading", void 0);
J = ne([B("wui-list-item")], J);
var Mo = function(r, e, n, i) {
  var o = arguments.length, t = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") t = Reflect.decorate(r, e, n, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (t = (o < 3 ? a(t) : o > 3 ? a(e, n, t) : a(e, n)) || t);
  return o > 3 && t && Object.defineProperty(e, n, t), t;
};
let ii = class extends O {
  constructor() {
    var _a;
    super(...arguments), this.wallet = (_a = U.state.data) == null ? void 0 : _a.wallet;
  }
  render() {
    if (!this.wallet) throw new Error("w3m-downloads-view");
    return c`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.chrome_store) ? c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>` : null;
  }
  iosTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.app_store) ? c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>` : null;
  }
  androidTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.play_store) ? c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>` : null;
  }
  homepageTemplate() {
    var _a;
    return ((_a = this.wallet) == null ? void 0 : _a.homepage) ? c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    ` : null;
  }
  onChromeStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.chrome_store) && j.openHref(this.wallet.chrome_store, "_blank");
  }
  onAppStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.app_store) && j.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.play_store) && j.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var _a;
    ((_a = this.wallet) == null ? void 0 : _a.homepage) && j.openHref(this.wallet.homepage, "_blank");
  }
};
ii = Mo([B("w3m-downloads-view")], ii);
export {
  dt as W3mAllWalletsView,
  rn as W3mConnectingWcBasicView,
  ii as W3mDownloadsView
};
