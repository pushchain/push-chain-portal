import { d as i, G as ConnectorController, A as ApiController, U as OptionsController, t as CoreHelperUtil, o as ConnectionController, a as ConstantsUtil, e as b, p as EventsController, R as RouterController, j as css, Y as AssetController, a0 as ConnectorUtil, X as AssetUtil, T as HelpersUtil, C as ChainController, r as resetStyles, k as elementStyles, Z as ThemeController, n as SnackController, M as ModalController, a1 as AppKitError, a2 as ErrorUtil, a3 as ConnectionControllerUtil, D as ConstantsUtil$1, w, a4 as CaipNetworksUtil, a5 as StorageUtil, h as A, i as i$2, a6 as WalletUtil } from "./core-DgKybDfE.js";
import { n as n$2, r as r$2, c as customElement, o as o$2, U as UiHelperUtil, i as i$1, t, b as e$1, a as networkSvgMd } from "./index-DRIxPGgt.js";
import { cX as getDefaultExportFromCjs } from "./main-DKlTuIns.js";
var __decorate$s = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mAllWalletsWidget = class W3mAllWalletsWidget2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.count = ApiController.state.count;
    this.filteredCount = ApiController.state.filteredWallets.length;
    this.isFetchingRecommendedWallets = ApiController.state.isFetchingRecommendedWallets;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("count", (val) => this.count = val), ApiController.subscribeKey("filteredWallets", (val) => this.filteredCount = val.length), ApiController.subscribeKey("isFetchingRecommendedWallets", (val) => this.isFetchingRecommendedWallets = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const wcConnector = this.connectors.find((c2) => c2.id === "walletConnect");
    const { allWallets } = OptionsController.state;
    if (!wcConnector || allWallets === "HIDE") {
      return null;
    }
    if (allWallets === "ONLY_MOBILE" && !CoreHelperUtil.isMobile()) {
      return null;
    }
    const featuredCount = ApiController.state.featured.length;
    const rawCount = this.count + featuredCount;
    const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
    const count = this.filteredCount > 0 ? this.filteredCount : roundedCount;
    let tagLabel = `${count}`;
    if (this.filteredCount > 0) {
      tagLabel = `${this.filteredCount}`;
    } else if (count < rawCount) {
      tagLabel = `${count}+`;
    }
    const hasWcConnection = ConnectionController.hasAnyConnection(ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);
    return b`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${o$2(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${hasWcConnection}
        size="sm"
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    var _a;
    EventsController.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" });
    RouterController.push("AllWallets", { redirectView: (_a = RouterController.state.data) == null ? void 0 : _a.redirectView });
  }
};
__decorate$s([
  n$2()
], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
__decorate$s([
  r$2()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate$s([
  r$2()
], W3mAllWalletsWidget.prototype, "count", void 0);
__decorate$s([
  r$2()
], W3mAllWalletsWidget.prototype, "filteredCount", void 0);
__decorate$s([
  r$2()
], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
W3mAllWalletsWidget = __decorate$s([
  customElement("w3m-all-wallets-widget")
], W3mAllWalletsWidget);
const styles$i = css`
  :host {
    margin-top: ${({ spacing }) => spacing["1"]};
  }
  wui-separator {
    margin: ${({ spacing }) => spacing["3"]} calc(${({ spacing }) => spacing["3"]} * -1)
      ${({ spacing }) => spacing["2"]} calc(${({ spacing }) => spacing["3"]} * -1);
    width: calc(100% + ${({ spacing }) => spacing["3"]} * 2);
  }
`;
var __decorate$r = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectorList = class W3mConnectorList2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.explorerWallets = ApiController.state.explorerWallets;
    this.connections = ConnectionController.state.connections;
    this.connectorImages = AssetController.state.connectorImages;
    this.loadingTelegram = false;
    this.unsubscribe.push(ConnectionController.subscribeKey("connections", (val) => this.connections = val), AssetController.subscribeKey("connectorImages", (val) => this.connectorImages = val), ApiController.subscribeKey("explorerFilteredWallets", (val) => {
      this.explorerWallets = (val == null ? void 0 : val.length) ? val : ApiController.state.explorerWallets;
    }), ApiController.subscribeKey("explorerWallets", (val) => {
      var _a;
      if (!((_a = this.explorerWallets) == null ? void 0 : _a.length)) {
        this.explorerWallets = val;
      }
    }));
    if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
      this.loadingTelegram = !ConnectionController.state.wcUri;
      this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loadingTelegram = !val));
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return b`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
  }
  connectorListTemplate() {
    return ConnectorUtil.connectorList().map((item, displayIndex) => {
      if (item.kind === "connector") {
        return this.renderConnector(item, displayIndex);
      }
      return this.renderWallet(item, displayIndex);
    });
  }
  getConnectorNamespaces(item) {
    var _a;
    if (item.subtype === "walletConnect") {
      return [];
    }
    if (item.subtype === "multiChain") {
      return ((_a = item.connector.connectors) == null ? void 0 : _a.map((c2) => c2.chain)) || [];
    }
    return [item.connector.chain];
  }
  renderConnector(item, index) {
    var _a, _b;
    const connector = item.connector;
    const imageSrc = AssetUtil.getConnectorImage(connector) || this.connectorImages[(connector == null ? void 0 : connector.imageId) ?? ""];
    const connectionsByNamespace = this.connections.get(connector.chain) ?? [];
    const isAlreadyConnected = connectionsByNamespace.some((c2) => HelpersUtil.isLowerCaseMatch(c2.connectorId, connector.id));
    let tagLabel = void 0;
    let tagVariant = void 0;
    if (item.subtype === "walletConnect") {
      tagLabel = "qr code";
      tagVariant = "accent";
    } else if (item.subtype === "injected" || item.subtype === "announced") {
      tagLabel = isAlreadyConnected ? "connected" : "installed";
      tagVariant = isAlreadyConnected ? "info" : "success";
    } else {
      tagLabel = void 0;
      tagVariant = void 0;
    }
    const hasWcConnection = ConnectionController.hasAnyConnection(ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);
    const disabled = item.subtype === "walletConnect" || item.subtype === "external" ? hasWcConnection : false;
    return b`
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${o$2(imageSrc)}
        .installed=${true}
        name=${connector.name ?? "Unknown"}
        .tagVariant=${tagVariant}
        tagLabel=${o$2(tagLabel)}
        data-testid=${`wallet-selector-${connector.id.toLowerCase()}`}
        size="sm"
        @click=${() => this.onClickConnector(item)}
        tabIdx=${o$2(this.tabIdx)}
        ?disabled=${disabled}
        rdnsId=${o$2(((_a = connector.explorerWallet) == null ? void 0 : _a.rdns) || void 0)}
        walletRank=${o$2((_b = connector.explorerWallet) == null ? void 0 : _b.order)}
        .namespaces=${this.getConnectorNamespaces(item)}
      >
      </w3m-list-wallet>
    `;
  }
  onClickConnector(item) {
    var _a;
    const redirectView = (_a = RouterController.state.data) == null ? void 0 : _a.redirectView;
    if (item.subtype === "walletConnect") {
      ConnectorController.setActiveConnector(item.connector);
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect", { redirectView });
      }
      return;
    }
    if (item.subtype === "multiChain") {
      ConnectorController.setActiveConnector(item.connector);
      RouterController.push("ConnectingMultiChain", { redirectView });
      return;
    }
    if (item.subtype === "injected") {
      ConnectorController.setActiveConnector(item.connector);
      RouterController.push("ConnectingExternal", {
        connector: item.connector,
        redirectView,
        wallet: item.connector.explorerWallet
      });
      return;
    }
    if (item.subtype === "announced") {
      if (item.connector.id === "walletConnect") {
        if (CoreHelperUtil.isMobile()) {
          RouterController.push("AllWallets");
        } else {
          RouterController.push("ConnectingWalletConnect", { redirectView });
        }
        return;
      }
      RouterController.push("ConnectingExternal", {
        connector: item.connector,
        redirectView,
        wallet: item.connector.explorerWallet
      });
      return;
    }
    RouterController.push("ConnectingExternal", {
      connector: item.connector,
      redirectView
    });
  }
  renderWallet(item, index) {
    const wallet = item.wallet;
    const imageSrc = AssetUtil.getWalletImage(wallet);
    const hasWcConnection = ConnectionController.hasAnyConnection(ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);
    const disabled = hasWcConnection;
    const loading = this.loadingTelegram;
    const tagLabel = item.subtype === "recent" ? "recent" : void 0;
    const tagVariant = item.subtype === "recent" ? "info" : void 0;
    return b`
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${o$2(imageSrc)}
        name=${wallet.name ?? "Unknown"}
        @click=${() => this.onClickWallet(item)}
        size="sm"
        data-testid=${`wallet-selector-${wallet.id}`}
        tabIdx=${o$2(this.tabIdx)}
        ?loading=${loading}
        ?disabled=${disabled}
        rdnsId=${o$2(wallet.rdns || void 0)}
        walletRank=${o$2(wallet.order)}
        tagLabel=${o$2(tagLabel)}
        .tagVariant=${tagVariant}
      >
      </w3m-list-wallet>
    `;
  }
  onClickWallet(item) {
    var _a;
    const redirectView = (_a = RouterController.state.data) == null ? void 0 : _a.redirectView;
    const namespace = ChainController.state.activeChain;
    if (item.subtype === "featured") {
      ConnectorController.selectWalletConnector(item.wallet);
      return;
    }
    if (item.subtype === "recent") {
      if (this.loadingTelegram) {
        return;
      }
      ConnectorController.selectWalletConnector(item.wallet);
      return;
    }
    if (item.subtype === "custom") {
      if (this.loadingTelegram) {
        return;
      }
      RouterController.push("ConnectingWalletConnect", { wallet: item.wallet, redirectView });
      return;
    }
    if (this.loadingTelegram) {
      return;
    }
    const connector = namespace ? ConnectorController.getConnector({ id: item.wallet.id, namespace }) : void 0;
    if (connector) {
      RouterController.push("ConnectingExternal", { connector, redirectView });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet: item.wallet, redirectView });
    }
  }
};
W3mConnectorList.styles = styles$i;
__decorate$r([
  n$2({ type: Number })
], W3mConnectorList.prototype, "tabIdx", void 0);
__decorate$r([
  r$2()
], W3mConnectorList.prototype, "explorerWallets", void 0);
__decorate$r([
  r$2()
], W3mConnectorList.prototype, "connections", void 0);
__decorate$r([
  r$2()
], W3mConnectorList.prototype, "connectorImages", void 0);
__decorate$r([
  r$2()
], W3mConnectorList.prototype, "loadingTelegram", void 0);
W3mConnectorList = __decorate$r([
  customElement("w3m-connector-list")
], W3mConnectorList);
const styles$h = css`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    column-gap: ${({ spacing }) => spacing[1]};
    color: ${({ tokens }) => tokens.theme.textSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    background-color: transparent;
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens }) => tokens.theme.textPrimary};
    }
  }
`;
var __decorate$q = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const TEXT_VARIANT_BY_SIZE = {
  lg: "lg-regular",
  md: "md-regular",
  sm: "sm-regular"
};
const ICON_SIZE = {
  lg: "md",
  md: "sm",
  sm: "sm"
};
let WuiTab = class WuiTab2 extends i {
  constructor() {
    super(...arguments);
    this.icon = "mobile";
    this.size = "md";
    this.label = "";
    this.active = false;
  }
  render() {
    return b`
      <button data-active=${this.active}>
        ${this.icon ? b`<wui-icon size=${ICON_SIZE[this.size]} name=${this.icon}></wui-icon>` : ""}
        <wui-text variant=${TEXT_VARIANT_BY_SIZE[this.size]}> ${this.label} </wui-text>
      </button>
    `;
  }
};
WuiTab.styles = [resetStyles, elementStyles, styles$h];
__decorate$q([
  n$2()
], WuiTab.prototype, "icon", void 0);
__decorate$q([
  n$2()
], WuiTab.prototype, "size", void 0);
__decorate$q([
  n$2()
], WuiTab.prototype, "label", void 0);
__decorate$q([
  n$2({ type: Boolean })
], WuiTab.prototype, "active", void 0);
WuiTab = __decorate$q([
  customElement("wui-tab-item")
], WuiTab);
const styles$g = css`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[32]};
    padding: ${({ spacing }) => spacing["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;
var __decorate$p = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiTabs = class WuiTabs2 extends i {
  constructor() {
    super(...arguments);
    this.tabs = [];
    this.onTabChange = () => null;
    this.size = "md";
    this.activeTab = 0;
  }
  render() {
    this.dataset["size"] = this.size;
    return this.tabs.map((tab, index) => {
      var _a;
      const isActive = index === this.activeTab;
      return b`
        <wui-tab-item
          @click=${() => this.onTabClick(index)}
          icon=${tab.icon}
          size=${this.size}
          label=${tab.label}
          ?active=${isActive}
          data-active=${isActive}
          data-testid="tab-${(_a = tab.label) == null ? void 0 : _a.toLowerCase()}"
        ></wui-tab-item>
      `;
    });
  }
  onTabClick(index) {
    this.activeTab = index;
    this.onTabChange(index);
  }
};
WuiTabs.styles = [resetStyles, elementStyles, styles$g];
__decorate$p([
  n$2({ type: Array })
], WuiTabs.prototype, "tabs", void 0);
__decorate$p([
  n$2()
], WuiTabs.prototype, "onTabChange", void 0);
__decorate$p([
  n$2()
], WuiTabs.prototype, "size", void 0);
__decorate$p([
  r$2()
], WuiTabs.prototype, "activeTab", void 0);
WuiTabs = __decorate$p([
  customElement("wui-tabs")
], WuiTabs);
var __decorate$o = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingHeader = class W3mConnectingHeader2 extends i {
  constructor() {
    super(...arguments);
    this.platformTabs = [];
    this.unsubscribe = [];
    this.platforms = [];
    this.onSelectPlatfrom = void 0;
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const tabs = this.generateTabs();
    return b`
      <wui-flex justifyContent="center" .padding=${["0", "0", "4", "0"]}>
        <wui-tabs .tabs=${tabs} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const tabs = this.platforms.map((platform) => {
      if (platform === "browser") {
        return { label: "Browser", icon: "extension", platform: "browser" };
      } else if (platform === "mobile") {
        return { label: "Mobile", icon: "mobile", platform: "mobile" };
      } else if (platform === "qrcode") {
        return { label: "Mobile", icon: "mobile", platform: "qrcode" };
      } else if (platform === "web") {
        return { label: "Webapp", icon: "browser", platform: "web" };
      } else if (platform === "desktop") {
        return { label: "Desktop", icon: "desktop", platform: "desktop" };
      }
      return { label: "Browser", icon: "extension", platform: "unsupported" };
    });
    this.platformTabs = tabs.map(({ platform }) => platform);
    return tabs;
  }
  onTabChange(index) {
    var _a;
    const tab = this.platformTabs[index];
    if (tab) {
      (_a = this.onSelectPlatfrom) == null ? void 0 : _a.call(this, tab);
    }
  }
};
__decorate$o([
  n$2({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate$o([
  n$2()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
W3mConnectingHeader = __decorate$o([
  customElement("w3m-connecting-header")
], W3mConnectingHeader);
const styles$f = css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${(tokens) => tokens.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var __decorate$n = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiLoadingThumbnail = class WuiLoadingThumbnail2 extends i {
  constructor() {
    super(...arguments);
    this.radius = 36;
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const radius = this.radius > 50 ? 50 : this.radius;
    const standardValue = 36;
    const radiusFactor = standardValue - radius;
    const dashArrayStart = 116 + radiusFactor;
    const dashArrayEnd = 245 + radiusFactor;
    const dashOffset = 360 + radiusFactor * 1.75;
    return b`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${dashArrayStart} ${dashArrayEnd}"
          stroke-dashoffset=${dashOffset}
        />
      </svg>
    `;
  }
};
WuiLoadingThumbnail.styles = [resetStyles, styles$f];
__decorate$n([
  n$2({ type: Number })
], WuiLoadingThumbnail.prototype, "radius", void 0);
WuiLoadingThumbnail = __decorate$n([
  customElement("wui-loading-thumbnail")
], WuiLoadingThumbnail);
const styles$e = css`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    padding-left: ${({ spacing }) => spacing[3]};
    padding-right: ${({ spacing }) => spacing[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing }) => spacing[6]};
  }

  wui-text {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;
var __decorate$m = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiCtaButton = class WuiCtaButton2 extends i {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.label = "";
    this.buttonLabel = "";
  }
  render() {
    return b`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
WuiCtaButton.styles = [resetStyles, elementStyles, styles$e];
__decorate$m([
  n$2({ type: Boolean })
], WuiCtaButton.prototype, "disabled", void 0);
__decorate$m([
  n$2()
], WuiCtaButton.prototype, "label", void 0);
__decorate$m([
  n$2()
], WuiCtaButton.prototype, "buttonLabel", void 0);
WuiCtaButton = __decorate$m([
  customElement("wui-cta-button")
], WuiCtaButton);
const styles$d = css`
  :host {
    display: block;
    padding: 0 ${({ spacing }) => spacing["5"]} ${({ spacing }) => spacing["5"]};
  }
`;
var __decorate$l = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mMobileDownloadLinks = class W3mMobileDownloadLinks2 extends i {
  constructor() {
    super(...arguments);
    this.wallet = void 0;
  }
  render() {
    if (!this.wallet) {
      this.style.display = "none";
      return null;
    }
    const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
    const isMobile = CoreHelperUtil.isMobile();
    const isIos = CoreHelperUtil.isIos();
    const isAndroid = CoreHelperUtil.isAndroid();
    const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
    const shortName = UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 12,
      charsEnd: 0,
      truncate: "end"
    });
    if (isMultiple && !isMobile) {
      return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
    }
    if (!isMultiple && homepage) {
      return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (app_store && isIos) {
      return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (play_store && isAndroid) {
      return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    this.style.display = "none";
    return null;
  }
  onAppStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mMobileDownloadLinks.styles = [styles$d];
__decorate$l([
  n$2({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate$l([
  customElement("w3m-mobile-download-links")
], W3mMobileDownloadLinks);
const styles$c = css`
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

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing }) => spacing["1"]} * -1);
    bottom: calc(${({ spacing }) => spacing["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations }) => durations["lg"]};
    transition-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing }) => spacing["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings }) => easings["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;
var __decorate$k = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
class W3mConnectingWidget extends i {
  constructor() {
    var _a, _b, _c, _d, _e;
    super();
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
    this.connector = (_b = RouterController.state.data) == null ? void 0 : _b.connector;
    this.timeout = void 0;
    this.secondaryBtnIcon = "refresh";
    this.onConnect = void 0;
    this.onRender = void 0;
    this.onAutoConnect = void 0;
    this.isWalletConnect = true;
    this.unsubscribe = [];
    this.imageSrc = AssetUtil.getConnectorImage(this.connector) ?? AssetUtil.getWalletImage(this.wallet);
    this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet";
    this.isRetrying = false;
    this.uri = ConnectionController.state.wcUri;
    this.error = ConnectionController.state.wcError;
    this.ready = false;
    this.showRetry = false;
    this.label = void 0;
    this.secondaryBtnLabel = "Try again";
    this.secondaryLabel = "Accept connection request in the wallet";
    this.isLoading = false;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      ConnectionController.subscribeKey("wcUri", (val) => {
        var _a2;
        this.uri = val;
        if (this.isRetrying && this.onRetry) {
          this.isRetrying = false;
          (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
        }
      }),
      ConnectionController.subscribeKey("wcError", (val) => this.error = val)
    ]);
    if ((CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari()) && CoreHelperUtil.isIos() && ConnectionController.state.wcUri) {
      (_e = this.onConnect) == null ? void 0 : _e.call(this);
    }
  }
  firstUpdated() {
    var _a;
    (_a = this.onAutoConnect) == null ? void 0 : _a.call(this);
    this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    ConnectionController.setWcError(false);
    clearTimeout(this.timeout);
  }
  render() {
    var _a;
    (_a = this.onRender) == null ? void 0 : _a.call(this);
    this.onShowRetry();
    const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let label = "";
    if (this.label) {
      label = this.label;
    } else {
      label = `Continue in ${this.name}`;
      if (this.error) {
        label = "Connection declined";
      }
    }
    return b`
      <wui-flex
        data-error=${o$2(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${o$2(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2", "0", "0", "0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error ? "error" : "primary"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? b`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              ` : null}
      </wui-flex>

      ${this.isWalletConnect ? b`
              <wui-flex .padding=${["0", "5", "5", "5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `;
  }
  onShowRetry() {
    var _a;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onTryAgain() {
    var _a, _b;
    ConnectionController.setWcError(false);
    if (this.onRetry) {
      this.isRetrying = true;
      (_a = this.onRetry) == null ? void 0 : _a.call(this);
    } else {
      (_b = this.onConnect) == null ? void 0 : _b.call(this);
    }
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return b`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      if (this.uri) {
        CoreHelperUtil.copyToClopboard(this.uri);
        SnackController.showSuccess("Link copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
}
W3mConnectingWidget.styles = styles$c;
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "isRetrying", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "label", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
__decorate$k([
  r$2()
], W3mConnectingWidget.prototype, "isLoading", void 0);
__decorate$k([
  n$2({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate$k([
  n$2()
], W3mConnectingWidget.prototype, "onRetry", void 0);
var __decorate$j = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcBrowser = class W3mConnectingWcBrowser2 extends W3mConnectingWidget {
  constructor() {
    var _a;
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.wallet.name,
        platform: "browser",
        displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index,
        walletRank: this.wallet.order,
        view: RouterController.state.view
      }
    });
  }
  async onConnectProxy() {
    try {
      this.error = false;
      const { connectors } = ConnectorController.state;
      const connector = connectors.find((c2) => {
        var _a, _b, _c;
        return c2.type === "ANNOUNCED" && ((_a = c2.info) == null ? void 0 : _a.rdns) === ((_b = this.wallet) == null ? void 0 : _b.rdns) || c2.type === "INJECTED" || c2.name === ((_c = this.wallet) == null ? void 0 : _c.name);
      });
      if (connector) {
        await ConnectionController.connectExternal(connector, connector.chain);
      } else {
        throw new Error("w3m-connecting-wc-browser: No connector found");
      }
      ModalController.close();
    } catch (error) {
      const isUserRejectedRequestError = error instanceof AppKitError && error.originalName === ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
      if (isUserRejectedRequestError) {
        EventsController.sendEvent({
          type: "track",
          event: "USER_REJECTED",
          properties: { message: error.message }
        });
      } else {
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_ERROR",
          properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
        });
      }
      this.error = true;
    }
  }
};
W3mConnectingWcBrowser = __decorate$j([
  customElement("w3m-connecting-wc-browser")
], W3mConnectingWcBrowser);
var __decorate$i = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcDesktop = class W3mConnectingWcDesktop2 extends W3mConnectingWidget {
  constructor() {
    var _a;
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.wallet.name,
        platform: "desktop",
        displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index,
        walletRank: this.wallet.order,
        view: RouterController.state.view
      }
    });
  }
  onRenderProxy() {
    var _a;
    if (!this.ready && this.uri) {
      this.ready = true;
      (_a = this.onConnect) == null ? void 0 : _a.call(this);
    }
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.desktop_link) && this.uri) {
      try {
        this.error = false;
        const { desktop_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcDesktop = __decorate$i([
  customElement("w3m-connecting-wc-desktop")
], W3mConnectingWcDesktop);
var __decorate$h = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcMobile = class W3mConnectingWcMobile2 extends W3mConnectingWidget {
  constructor() {
    var _a;
    super();
    this.btnLabelTimeout = void 0;
    this.redirectDeeplink = void 0;
    this.redirectUniversalLink = void 0;
    this.target = void 0;
    this.preferUniversalLinks = OptionsController.state.experimental_preferUniversalLinks;
    this.isLoading = true;
    this.onConnect = () => {
      ConnectionControllerUtil.onConnectMobile(this.wallet);
    };
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    }
    this.secondaryBtnLabel = "Open";
    this.secondaryLabel = ConstantsUtil$1.CONNECT_LABELS.MOBILE;
    this.secondaryBtnIcon = "externalLink";
    this.onHandleURI();
    this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", () => {
      this.onHandleURI();
    }));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.wallet.name,
        platform: "mobile",
        displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index,
        walletRank: this.wallet.order,
        view: RouterController.state.view
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.btnLabelTimeout);
  }
  onHandleURI() {
    var _a;
    this.isLoading = !this.uri;
    if (!this.ready && this.uri) {
      this.ready = true;
      (_a = this.onConnect) == null ? void 0 : _a.call(this);
    }
  }
  onTryAgain() {
    var _a;
    ConnectionController.setWcError(false);
    (_a = this.onConnect) == null ? void 0 : _a.call(this);
  }
};
__decorate$h([
  r$2()
], W3mConnectingWcMobile.prototype, "redirectDeeplink", void 0);
__decorate$h([
  r$2()
], W3mConnectingWcMobile.prototype, "redirectUniversalLink", void 0);
__decorate$h([
  r$2()
], W3mConnectingWcMobile.prototype, "target", void 0);
__decorate$h([
  r$2()
], W3mConnectingWcMobile.prototype, "preferUniversalLinks", void 0);
__decorate$h([
  r$2()
], W3mConnectingWcMobile.prototype, "isLoading", void 0);
W3mConnectingWcMobile = __decorate$h([
  customElement("w3m-connecting-wc-mobile")
], W3mConnectingWcMobile);
var browser = {};
var canPromise;
var hasRequiredCanPromise;
function requireCanPromise() {
  if (hasRequiredCanPromise) return canPromise;
  hasRequiredCanPromise = 1;
  canPromise = function() {
    return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
  };
  return canPromise;
}
var qrcode = {};
var utils$1 = {};
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1) return utils$1;
  hasRequiredUtils$1 = 1;
  let toSJISFunction;
  const CODEWORDS_COUNT = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  utils$1.getSymbolSize = function getSymbolSize(version2) {
    if (!version2) throw new Error('"version" cannot be null or undefined');
    if (version2 < 1 || version2 > 40) throw new Error('"version" should be in range from 1 to 40');
    return version2 * 4 + 17;
  };
  utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
    return CODEWORDS_COUNT[version2];
  };
  utils$1.getBCHDigit = function(data) {
    let digit = 0;
    while (data !== 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  };
  utils$1.setToSJISFunction = function setToSJISFunction(f2) {
    if (typeof f2 !== "function") {
      throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f2;
  };
  utils$1.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== "undefined";
  };
  utils$1.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
  };
  return utils$1;
}
var errorCorrectionLevel = {};
var hasRequiredErrorCorrectionLevel;
function requireErrorCorrectionLevel() {
  if (hasRequiredErrorCorrectionLevel) return errorCorrectionLevel;
  hasRequiredErrorCorrectionLevel = 1;
  (function(exports$1) {
    exports$1.L = { bit: 1 };
    exports$1.M = { bit: 0 };
    exports$1.Q = { bit: 3 };
    exports$1.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports$1.L;
        case "m":
        case "medium":
          return exports$1.M;
        case "q":
        case "quartile":
          return exports$1.Q;
        case "h":
        case "high":
          return exports$1.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports$1.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports$1.from = function from(value, defaultValue) {
      if (exports$1.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  })(errorCorrectionLevel);
  return errorCorrectionLevel;
}
var bitBuffer;
var hasRequiredBitBuffer;
function requireBitBuffer() {
  if (hasRequiredBitBuffer) return bitBuffer;
  hasRequiredBitBuffer = 1;
  function BitBuffer() {
    this.buffer = [];
    this.length = 0;
  }
  BitBuffer.prototype = {
    get: function(index) {
      const bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
      for (let i2 = 0; i2 < length; i2++) {
        this.putBit((num >>> length - i2 - 1 & 1) === 1);
      }
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(bit) {
      const bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 128 >>> this.length % 8;
      }
      this.length++;
    }
  };
  bitBuffer = BitBuffer;
  return bitBuffer;
}
var bitMatrix;
var hasRequiredBitMatrix;
function requireBitMatrix() {
  if (hasRequiredBitMatrix) return bitMatrix;
  hasRequiredBitMatrix = 1;
  function BitMatrix(size) {
    if (!size || size < 1) {
      throw new Error("BitMatrix size must be defined and greater than 0");
    }
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
  }
  BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
  };
  BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
  };
  BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
  };
  BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
  };
  bitMatrix = BitMatrix;
  return bitMatrix;
}
var alignmentPattern = {};
var hasRequiredAlignmentPattern;
function requireAlignmentPattern() {
  if (hasRequiredAlignmentPattern) return alignmentPattern;
  hasRequiredAlignmentPattern = 1;
  (function(exports$1) {
    const getSymbolSize = requireUtils$1().getSymbolSize;
    exports$1.getRowColCoords = function getRowColCoords(version2) {
      if (version2 === 1) return [];
      const posCount = Math.floor(version2 / 7) + 2;
      const size = getSymbolSize(version2);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i2 = 1; i2 < posCount - 1; i2++) {
        positions[i2] = positions[i2 - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports$1.getPositions = function getPositions(version2) {
      const coords = [];
      const pos = exports$1.getRowColCoords(version2);
      const posLength = pos.length;
      for (let i2 = 0; i2 < posLength; i2++) {
        for (let j = 0; j < posLength; j++) {
          if (i2 === 0 && j === 0 || // top-left
          i2 === 0 && j === posLength - 1 || // bottom-left
          i2 === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i2], pos[j]]);
        }
      }
      return coords;
    };
  })(alignmentPattern);
  return alignmentPattern;
}
var finderPattern = {};
var hasRequiredFinderPattern;
function requireFinderPattern() {
  if (hasRequiredFinderPattern) return finderPattern;
  hasRequiredFinderPattern = 1;
  const getSymbolSize = requireUtils$1().getSymbolSize;
  const FINDER_PATTERN_SIZE = 7;
  finderPattern.getPositions = function getPositions(version2) {
    const size = getSymbolSize(version2);
    return [
      // top-left
      [0, 0],
      // top-right
      [size - FINDER_PATTERN_SIZE, 0],
      // bottom-left
      [0, size - FINDER_PATTERN_SIZE]
    ];
  };
  return finderPattern;
}
var maskPattern = {};
var hasRequiredMaskPattern;
function requireMaskPattern() {
  if (hasRequiredMaskPattern) return maskPattern;
  hasRequiredMaskPattern = 1;
  (function(exports$1) {
    exports$1.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports$1.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports$1.from = function from(value) {
      return exports$1.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports$1.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module = data.get(row, col);
          if (module === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module;
            sameCountCol = 1;
          }
          module = data.get(col, row);
          if (module === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports$1.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports$1.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports$1.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i2 = 0; i2 < modulesCount; i2++) darkCount += data.data[i2];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern2, i2, j) {
      switch (maskPattern2) {
        case exports$1.Patterns.PATTERN000:
          return (i2 + j) % 2 === 0;
        case exports$1.Patterns.PATTERN001:
          return i2 % 2 === 0;
        case exports$1.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports$1.Patterns.PATTERN011:
          return (i2 + j) % 3 === 0;
        case exports$1.Patterns.PATTERN100:
          return (Math.floor(i2 / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports$1.Patterns.PATTERN101:
          return i2 * j % 2 + i2 * j % 3 === 0;
        case exports$1.Patterns.PATTERN110:
          return (i2 * j % 2 + i2 * j % 3) % 2 === 0;
        case exports$1.Patterns.PATTERN111:
          return (i2 * j % 3 + (i2 + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern2);
      }
    }
    exports$1.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports$1.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports$1.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports$1.applyMask(p, data);
        const penalty = exports$1.getPenaltyN1(data) + exports$1.getPenaltyN2(data) + exports$1.getPenaltyN3(data) + exports$1.getPenaltyN4(data);
        exports$1.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  })(maskPattern);
  return maskPattern;
}
var errorCorrectionCode = {};
var hasRequiredErrorCorrectionCode;
function requireErrorCorrectionCode() {
  if (hasRequiredErrorCorrectionCode) return errorCorrectionCode;
  hasRequiredErrorCorrectionCode = 1;
  const ECLevel = requireErrorCorrectionLevel();
  const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ];
  const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
    switch (errorCorrectionLevel2) {
      case ECLevel.L:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
      case ECLevel.M:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
      case ECLevel.Q:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
      case ECLevel.H:
        return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
    switch (errorCorrectionLevel2) {
      case ECLevel.L:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
      case ECLevel.M:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
      case ECLevel.Q:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
      case ECLevel.H:
        return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  return errorCorrectionCode;
}
var polynomial = {};
var galoisField = {};
var hasRequiredGaloisField;
function requireGaloisField() {
  if (hasRequiredGaloisField) return galoisField;
  hasRequiredGaloisField = 1;
  const EXP_TABLE = new Uint8Array(512);
  const LOG_TABLE = new Uint8Array(256);
  (function initTables() {
    let x = 1;
    for (let i2 = 0; i2 < 255; i2++) {
      EXP_TABLE[i2] = x;
      LOG_TABLE[x] = i2;
      x <<= 1;
      if (x & 256) {
        x ^= 285;
      }
    }
    for (let i2 = 255; i2 < 512; i2++) {
      EXP_TABLE[i2] = EXP_TABLE[i2 - 255];
    }
  })();
  galoisField.log = function log(n2) {
    if (n2 < 1) throw new Error("log(" + n2 + ")");
    return LOG_TABLE[n2];
  };
  galoisField.exp = function exp(n2) {
    return EXP_TABLE[n2];
  };
  galoisField.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
  };
  return galoisField;
}
var hasRequiredPolynomial;
function requirePolynomial() {
  if (hasRequiredPolynomial) return polynomial;
  hasRequiredPolynomial = 1;
  (function(exports$1) {
    const GF = requireGaloisField();
    exports$1.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i2 = 0; i2 < p1.length; i2++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i2 + j] ^= GF.mul(p1[i2], p2[j]);
        }
      }
      return coeff;
    };
    exports$1.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i2 = 0; i2 < divisor.length; i2++) {
          result[i2] ^= GF.mul(divisor[i2], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports$1.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i2 = 0; i2 < degree; i2++) {
        poly = exports$1.mul(poly, new Uint8Array([1, GF.exp(i2)]));
      }
      return poly;
    };
  })(polynomial);
  return polynomial;
}
var reedSolomonEncoder;
var hasRequiredReedSolomonEncoder;
function requireReedSolomonEncoder() {
  if (hasRequiredReedSolomonEncoder) return reedSolomonEncoder;
  hasRequiredReedSolomonEncoder = 1;
  const Polynomial = requirePolynomial();
  function ReedSolomonEncoder(degree) {
    this.genPoly = void 0;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
  }
  ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
  };
  ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) {
      throw new Error("Encoder not initialized");
    }
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    const start = this.degree - remainder.length;
    if (start > 0) {
      const buff = new Uint8Array(this.degree);
      buff.set(remainder, start);
      return buff;
    }
    return remainder;
  };
  reedSolomonEncoder = ReedSolomonEncoder;
  return reedSolomonEncoder;
}
var version = {};
var mode = {};
var versionCheck = {};
var hasRequiredVersionCheck;
function requireVersionCheck() {
  if (hasRequiredVersionCheck) return versionCheck;
  hasRequiredVersionCheck = 1;
  versionCheck.isValid = function isValid(version2) {
    return !isNaN(version2) && version2 >= 1 && version2 <= 40;
  };
  return versionCheck;
}
var regex = {};
var hasRequiredRegex;
function requireRegex() {
  if (hasRequiredRegex) return regex;
  hasRequiredRegex = 1;
  const numeric = "[0-9]+";
  const alphanumeric = "[A-Z $%*+\\-./:]+";
  let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  kanji = kanji.replace(/u/g, "\\u");
  const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
  regex.KANJI = new RegExp(kanji, "g");
  regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  regex.BYTE = new RegExp(byte, "g");
  regex.NUMERIC = new RegExp(numeric, "g");
  regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
  const TEST_KANJI = new RegExp("^" + kanji + "$");
  const TEST_NUMERIC = new RegExp("^" + numeric + "$");
  const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  regex.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
  };
  regex.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
  };
  regex.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
  };
  return regex;
}
var hasRequiredMode;
function requireMode() {
  if (hasRequiredMode) return mode;
  hasRequiredMode = 1;
  (function(exports$1) {
    const VersionCheck = requireVersionCheck();
    const Regex = requireRegex();
    exports$1.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports$1.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports$1.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports$1.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports$1.MIXED = {
      bit: -1
    };
    exports$1.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
      if (!mode2.ccBits) throw new Error("Invalid mode: " + mode2);
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid version: " + version2);
      }
      if (version2 >= 1 && version2 < 10) return mode2.ccBits[0];
      else if (version2 < 27) return mode2.ccBits[1];
      return mode2.ccBits[2];
    };
    exports$1.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports$1.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports$1.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports$1.KANJI;
      else return exports$1.BYTE;
    };
    exports$1.toString = function toString(mode2) {
      if (mode2 && mode2.id) return mode2.id;
      throw new Error("Invalid mode");
    };
    exports$1.isValid = function isValid(mode2) {
      return mode2 && mode2.bit && mode2.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports$1.NUMERIC;
        case "alphanumeric":
          return exports$1.ALPHANUMERIC;
        case "kanji":
          return exports$1.KANJI;
        case "byte":
          return exports$1.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports$1.from = function from(value, defaultValue) {
      if (exports$1.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  })(mode);
  return mode;
}
var hasRequiredVersion;
function requireVersion() {
  if (hasRequiredVersion) return version;
  hasRequiredVersion = 1;
  (function(exports$1) {
    const Utils = requireUtils$1();
    const ECCode = requireErrorCorrectionCode();
    const ECLevel = requireErrorCorrectionLevel();
    const Mode = requireMode();
    const VersionCheck = requireVersionCheck();
    const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    const G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports$1.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode2, version2) {
      return Mode.getCharCountIndicator(mode2, version2) + 4;
    }
    function getTotalBitsFromDataArray(segments2, version2) {
      let totalBits = 0;
      segments2.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version2);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments2, currentVersion);
        if (length <= exports$1.getCapacity(currentVersion, errorCorrectionLevel2, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports$1.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports$1.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode2 === "undefined") mode2 = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode2 === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
      switch (mode2) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports$1.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel2) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel2, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports$1.getEncodedBits = function getEncodedBits(version2) {
      if (!VersionCheck.isValid(version2) || version2 < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version2 << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version2 << 12 | d;
    };
  })(version);
  return version;
}
var formatInfo = {};
var hasRequiredFormatInfo;
function requireFormatInfo() {
  if (hasRequiredFormatInfo) return formatInfo;
  hasRequiredFormatInfo = 1;
  const Utils = requireUtils$1();
  const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
  const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
  const G15_BCH = Utils.getBCHDigit(G15);
  formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
    const data = errorCorrectionLevel2.bit << 3 | mask;
    let d = data << 10;
    while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
      d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    }
    return (data << 10 | d) ^ G15_MASK;
  };
  return formatInfo;
}
var segments = {};
var numericData;
var hasRequiredNumericData;
function requireNumericData() {
  if (hasRequiredNumericData) return numericData;
  hasRequiredNumericData = 1;
  const Mode = requireMode();
  function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
  }
  NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
  };
  NumericData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
  };
  NumericData.prototype.write = function write(bitBuffer2) {
    let i2, group, value;
    for (i2 = 0; i2 + 3 <= this.data.length; i2 += 3) {
      group = this.data.substr(i2, 3);
      value = parseInt(group, 10);
      bitBuffer2.put(value, 10);
    }
    const remainingNum = this.data.length - i2;
    if (remainingNum > 0) {
      group = this.data.substr(i2);
      value = parseInt(group, 10);
      bitBuffer2.put(value, remainingNum * 3 + 1);
    }
  };
  numericData = NumericData;
  return numericData;
}
var alphanumericData;
var hasRequiredAlphanumericData;
function requireAlphanumericData() {
  if (hasRequiredAlphanumericData) return alphanumericData;
  hasRequiredAlphanumericData = 1;
  const Mode = requireMode();
  const ALPHA_NUM_CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
  }
  AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
  };
  AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
  };
  AlphanumericData.prototype.write = function write(bitBuffer2) {
    let i2;
    for (i2 = 0; i2 + 2 <= this.data.length; i2 += 2) {
      let value = ALPHA_NUM_CHARS.indexOf(this.data[i2]) * 45;
      value += ALPHA_NUM_CHARS.indexOf(this.data[i2 + 1]);
      bitBuffer2.put(value, 11);
    }
    if (this.data.length % 2) {
      bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i2]), 6);
    }
  };
  alphanumericData = AlphanumericData;
  return alphanumericData;
}
var encodeUtf8;
var hasRequiredEncodeUtf8;
function requireEncodeUtf8() {
  if (hasRequiredEncodeUtf8) return encodeUtf8;
  hasRequiredEncodeUtf8 = 1;
  encodeUtf8 = function encodeUtf82(input) {
    var result = [];
    var size = input.length;
    for (var index = 0; index < size; index++) {
      var point = input.charCodeAt(index);
      if (point >= 55296 && point <= 56319 && size > index + 1) {
        var second = input.charCodeAt(index + 1);
        if (second >= 56320 && second <= 57343) {
          point = (point - 55296) * 1024 + second - 56320 + 65536;
          index += 1;
        }
      }
      if (point < 128) {
        result.push(point);
        continue;
      }
      if (point < 2048) {
        result.push(point >> 6 | 192);
        result.push(point & 63 | 128);
        continue;
      }
      if (point < 55296 || point >= 57344 && point < 65536) {
        result.push(point >> 12 | 224);
        result.push(point >> 6 & 63 | 128);
        result.push(point & 63 | 128);
        continue;
      }
      if (point >= 65536 && point <= 1114111) {
        result.push(point >> 18 | 240);
        result.push(point >> 12 & 63 | 128);
        result.push(point >> 6 & 63 | 128);
        result.push(point & 63 | 128);
        continue;
      }
      result.push(239, 191, 189);
    }
    return new Uint8Array(result).buffer;
  };
  return encodeUtf8;
}
var byteData;
var hasRequiredByteData;
function requireByteData() {
  if (hasRequiredByteData) return byteData;
  hasRequiredByteData = 1;
  const encodeUtf82 = requireEncodeUtf8();
  const Mode = requireMode();
  function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === "string") {
      data = encodeUtf82(data);
    }
    this.data = new Uint8Array(data);
  }
  ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
  };
  ByteData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
  };
  ByteData.prototype.write = function(bitBuffer2) {
    for (let i2 = 0, l = this.data.length; i2 < l; i2++) {
      bitBuffer2.put(this.data[i2], 8);
    }
  };
  byteData = ByteData;
  return byteData;
}
var kanjiData;
var hasRequiredKanjiData;
function requireKanjiData() {
  if (hasRequiredKanjiData) return kanjiData;
  hasRequiredKanjiData = 1;
  const Mode = requireMode();
  const Utils = requireUtils$1();
  function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
  }
  KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
  };
  KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
  };
  KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
  };
  KanjiData.prototype.write = function(bitBuffer2) {
    let i2;
    for (i2 = 0; i2 < this.data.length; i2++) {
      let value = Utils.toSJIS(this.data[i2]);
      if (value >= 33088 && value <= 40956) {
        value -= 33088;
      } else if (value >= 57408 && value <= 60351) {
        value -= 49472;
      } else {
        throw new Error(
          "Invalid SJIS character: " + this.data[i2] + "\nMake sure your charset is UTF-8"
        );
      }
      value = (value >>> 8 & 255) * 192 + (value & 255);
      bitBuffer2.put(value, 13);
    }
  };
  kanjiData = KanjiData;
  return kanjiData;
}
var dijkstra = { exports: {} };
var hasRequiredDijkstra;
function requireDijkstra() {
  if (hasRequiredDijkstra) return dijkstra.exports;
  hasRequiredDijkstra = 1;
  (function(module) {
    var dijkstra2 = {
      single_source_shortest_paths: function(graph, s2, d) {
        var predecessors = {};
        var costs = {};
        costs[s2] = 0;
        var open = dijkstra2.PriorityQueue.make();
        open.push(s2, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s2, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        while (u) {
          nodes.push(u);
          predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s2, d) {
        var predecessors = dijkstra2.single_source_shortest_paths(graph, s2, d);
        return dijkstra2.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra2.PriorityQueue, t2 = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t2[key] = T[key];
            }
          }
          t2.queue = [];
          t2.sorter = opts.sorter || T.default_sorter;
          return t2;
        },
        default_sorter: function(a, b2) {
          return a.cost - b2.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    {
      module.exports = dijkstra2;
    }
  })(dijkstra);
  return dijkstra.exports;
}
var hasRequiredSegments;
function requireSegments() {
  if (hasRequiredSegments) return segments;
  hasRequiredSegments = 1;
  (function(exports$1) {
    const Mode = requireMode();
    const NumericData = requireNumericData();
    const AlphanumericData = requireAlphanumericData();
    const ByteData = requireByteData();
    const KanjiData = requireKanjiData();
    const Regex = requireRegex();
    const Utils = requireUtils$1();
    const dijkstra2 = requireDijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex2, mode2, str) {
      const segments2 = [];
      let result;
      while ((result = regex2.exec(str)) !== null) {
        segments2.push({
          data: result[0],
          index: result.index,
          mode: mode2,
          length: result[0].length
        });
      }
      return segments2;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode2) {
      switch (mode2) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i2 = 0; i2 < segs.length; i2++) {
        const seg = segs[i2];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version2) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i2 = 0; i2 < nodes.length; i2++) {
        const nodeGroup = nodes[i2];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i2 + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
            const prevNodeId = prevNodeIds[n2];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version2);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
        graph[prevNodeIds[n2]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode2;
      const bestMode = Mode.getBestModeForData(data);
      mode2 = Mode.from(modesHint, bestMode);
      if (mode2 !== Mode.BYTE && mode2.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode2) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode2 === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode2 = Mode.BYTE;
      }
      switch (mode2) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports$1.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports$1.fromString = function fromString(data, version2) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version2);
      const path = dijkstra2.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i2 = 1; i2 < path.length - 1; i2++) {
        optimizedSegs.push(graph.table[path[i2]].node);
      }
      return exports$1.fromArray(mergeSegments(optimizedSegs));
    };
    exports$1.rawSplit = function rawSplit(data) {
      return exports$1.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  })(segments);
  return segments;
}
var hasRequiredQrcode;
function requireQrcode() {
  if (hasRequiredQrcode) return qrcode;
  hasRequiredQrcode = 1;
  const Utils = requireUtils$1();
  const ECLevel = requireErrorCorrectionLevel();
  const BitBuffer = requireBitBuffer();
  const BitMatrix = requireBitMatrix();
  const AlignmentPattern = requireAlignmentPattern();
  const FinderPattern = requireFinderPattern();
  const MaskPattern = requireMaskPattern();
  const ECCode = requireErrorCorrectionCode();
  const ReedSolomonEncoder = requireReedSolomonEncoder();
  const Version = requireVersion();
  const FormatInfo = requireFormatInfo();
  const Mode = requireMode();
  const Segments = requireSegments();
  function setupFinderPattern(matrix, version2) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version2);
    for (let i2 = 0; i2 < pos.length; i2++) {
      const row = pos[i2][0];
      const col = pos[i2][1];
      for (let r2 = -1; r2 <= 7; r2++) {
        if (row + r2 <= -1 || size <= row + r2) continue;
        for (let c2 = -1; c2 <= 7; c2++) {
          if (col + c2 <= -1 || size <= col + c2) continue;
          if (r2 >= 0 && r2 <= 6 && (c2 === 0 || c2 === 6) || c2 >= 0 && c2 <= 6 && (r2 === 0 || r2 === 6) || r2 >= 2 && r2 <= 4 && c2 >= 2 && c2 <= 4) {
            matrix.set(row + r2, col + c2, true, true);
          } else {
            matrix.set(row + r2, col + c2, false, true);
          }
        }
      }
    }
  }
  function setupTimingPattern(matrix) {
    const size = matrix.size;
    for (let r2 = 8; r2 < size - 8; r2++) {
      const value = r2 % 2 === 0;
      matrix.set(r2, 6, value, true);
      matrix.set(6, r2, value, true);
    }
  }
  function setupAlignmentPattern(matrix, version2) {
    const pos = AlignmentPattern.getPositions(version2);
    for (let i2 = 0; i2 < pos.length; i2++) {
      const row = pos[i2][0];
      const col = pos[i2][1];
      for (let r2 = -2; r2 <= 2; r2++) {
        for (let c2 = -2; c2 <= 2; c2++) {
          if (r2 === -2 || r2 === 2 || c2 === -2 || c2 === 2 || r2 === 0 && c2 === 0) {
            matrix.set(row + r2, col + c2, true, true);
          } else {
            matrix.set(row + r2, col + c2, false, true);
          }
        }
      }
    }
  }
  function setupVersionInfo(matrix, version2) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version2);
    let row, col, mod;
    for (let i2 = 0; i2 < 18; i2++) {
      row = Math.floor(i2 / 3);
      col = i2 % 3 + size - 8 - 3;
      mod = (bits >> i2 & 1) === 1;
      matrix.set(row, col, mod, true);
      matrix.set(col, row, mod, true);
    }
  }
  function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
    let i2, mod;
    for (i2 = 0; i2 < 15; i2++) {
      mod = (bits >> i2 & 1) === 1;
      if (i2 < 6) {
        matrix.set(i2, 8, mod, true);
      } else if (i2 < 8) {
        matrix.set(i2 + 1, 8, mod, true);
      } else {
        matrix.set(size - 15 + i2, 8, mod, true);
      }
      if (i2 < 8) {
        matrix.set(8, size - i2 - 1, mod, true);
      } else if (i2 < 9) {
        matrix.set(8, 15 - i2 - 1 + 1, mod, true);
      } else {
        matrix.set(8, 15 - i2 - 1, mod, true);
      }
    }
    matrix.set(size - 8, 8, 1, true);
  }
  function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for (let col = size - 1; col > 0; col -= 2) {
      if (col === 6) col--;
      while (true) {
        for (let c2 = 0; c2 < 2; c2++) {
          if (!matrix.isReserved(row, col - c2)) {
            let dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) === 1;
            }
            matrix.set(row, col - c2, dark);
            bitIndex--;
            if (bitIndex === -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || size <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
  function createData(version2, errorCorrectionLevel2, segments2) {
    const buffer = new BitBuffer();
    segments2.forEach(function(data) {
      buffer.put(data.mode.bit, 4);
      buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
      data.write(buffer);
    });
    const totalCodewords = Utils.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
      buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 !== 0) {
      buffer.putBit(0);
    }
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for (let i2 = 0; i2 < remainingByte; i2++) {
      buffer.put(i2 % 2 ? 17 : 236, 8);
    }
    return createCodewords(buffer, version2, errorCorrectionLevel2);
  }
  function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
    const totalCodewords = Utils.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer2.buffer);
    for (let b2 = 0; b2 < ecTotalBlocks; b2++) {
      const dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
      dcData[b2] = buffer.slice(offset, offset + dataSize);
      ecData[b2] = rs.encode(dcData[b2]);
      offset += dataSize;
      maxDataSize = Math.max(maxDataSize, dataSize);
    }
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i2, r2;
    for (i2 = 0; i2 < maxDataSize; i2++) {
      for (r2 = 0; r2 < ecTotalBlocks; r2++) {
        if (i2 < dcData[r2].length) {
          data[index++] = dcData[r2][i2];
        }
      }
    }
    for (i2 = 0; i2 < ecCount; i2++) {
      for (r2 = 0; r2 < ecTotalBlocks; r2++) {
        data[index++] = ecData[r2][i2];
      }
    }
    return data;
  }
  function createSymbol(data, version2, errorCorrectionLevel2, maskPattern2) {
    let segments2;
    if (Array.isArray(data)) {
      segments2 = Segments.fromArray(data);
    } else if (typeof data === "string") {
      let estimatedVersion = version2;
      if (!estimatedVersion) {
        const rawSegments = Segments.rawSplit(data);
        estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel2);
      }
      segments2 = Segments.fromString(data, estimatedVersion || 40);
    } else {
      throw new Error("Invalid data");
    }
    const bestVersion = Version.getBestVersionForData(segments2, errorCorrectionLevel2);
    if (!bestVersion) {
      throw new Error("The amount of data is too big to be stored in a QR Code");
    }
    if (!version2) {
      version2 = bestVersion;
    } else if (version2 < bestVersion) {
      throw new Error(
        "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
      );
    }
    const dataBits = createData(version2, errorCorrectionLevel2, segments2);
    const moduleCount = Utils.getSymbolSize(version2);
    const modules = new BitMatrix(moduleCount);
    setupFinderPattern(modules, version2);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version2);
    setupFormatInfo(modules, errorCorrectionLevel2, 0);
    if (version2 >= 7) {
      setupVersionInfo(modules, version2);
    }
    setupData(modules, dataBits);
    if (isNaN(maskPattern2)) {
      maskPattern2 = MaskPattern.getBestMask(
        modules,
        setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
      );
    }
    MaskPattern.applyMask(maskPattern2, modules);
    setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
    return {
      modules,
      version: version2,
      errorCorrectionLevel: errorCorrectionLevel2,
      maskPattern: maskPattern2,
      segments: segments2
    };
  }
  qrcode.create = function create(data, options) {
    if (typeof data === "undefined" || data === "") {
      throw new Error("No input text");
    }
    let errorCorrectionLevel2 = ECLevel.M;
    let version2;
    let mask;
    if (typeof options !== "undefined") {
      errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
      version2 = Version.from(options.version);
      mask = MaskPattern.from(options.maskPattern);
      if (options.toSJISFunc) {
        Utils.setToSJISFunction(options.toSJISFunc);
      }
    }
    return createSymbol(data, version2, errorCorrectionLevel2, mask);
  };
  return qrcode;
}
var canvas = {};
var utils = {};
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  (function(exports$1) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c2) {
          return [c2, c2];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports$1.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports$1.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports$1.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports$1.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports$1.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports$1.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i2 = 0; i2 < symbolSize; i2++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i2 * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i2 >= scaledMargin && j >= scaledMargin && i2 < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i2 - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  })(utils);
  return utils;
}
var hasRequiredCanvas;
function requireCanvas() {
  if (hasRequiredCanvas) return canvas;
  hasRequiredCanvas = 1;
  (function(exports$1) {
    const Utils = requireUtils();
    function clearCanvas(ctx, canvas2, size) {
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      if (!canvas2.style) canvas2.style = {};
      canvas2.height = size;
      canvas2.width = size;
      canvas2.style.height = size + "px";
      canvas2.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e2) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports$1.render = function render(qrData, canvas2, options) {
      let opts = options;
      let canvasEl = canvas2;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!canvas2) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports$1.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports$1.render(qrData, canvas2, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  })(canvas);
  return canvas;
}
var svgTag = {};
var hasRequiredSvgTag;
function requireSvgTag() {
  if (hasRequiredSvgTag) return svgTag;
  hasRequiredSvgTag = 1;
  const Utils = requireUtils();
  function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
  }
  function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== "undefined") str += " " + y;
    return str;
  }
  function qrToPath(data, size, margin) {
    let path = "";
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for (let i2 = 0; i2 < data.length; i2++) {
      const col = Math.floor(i2 % size);
      const row = Math.floor(i2 / size);
      if (!col && !newRow) newRow = true;
      if (data[i2]) {
        lineLength++;
        if (!(i2 > 0 && col > 0 && data[i2 - 1])) {
          path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
          moveBy = 0;
          newRow = false;
        }
        if (!(col + 1 < size && data[i2 + 1])) {
          path += svgCmd("h", lineLength);
          lineLength = 0;
        }
      } else {
        moveBy++;
      }
    }
    return path;
  }
  svgTag.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
    const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
    const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
    if (typeof cb === "function") {
      cb(null, svgTag2);
    }
    return svgTag2;
  };
  return svgTag;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser;
  hasRequiredBrowser = 1;
  const canPromise2 = requireCanPromise();
  const QRCode = requireQrcode();
  const CanvasRenderer = requireCanvas();
  const SvgRenderer = requireSvgTag();
  function renderCanvas(renderFunc, canvas2, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === "function";
    if (!isLastArgCb && !canPromise2()) {
      throw new Error("Callback required as last argument");
    }
    if (isLastArgCb) {
      if (argsNum < 2) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 2) {
        cb = text;
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 3) {
        if (canvas2.getContext && typeof cb === "undefined") {
          cb = opts;
          opts = void 0;
        } else {
          cb = opts;
          opts = text;
          text = canvas2;
          canvas2 = void 0;
        }
      }
    } else {
      if (argsNum < 1) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 1) {
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 2 && !canvas2.getContext) {
        opts = text;
        text = canvas2;
        canvas2 = void 0;
      }
      return new Promise(function(resolve, reject) {
        try {
          const data = QRCode.create(text, opts);
          resolve(renderFunc(data, canvas2, opts));
        } catch (e2) {
          reject(e2);
        }
      });
    }
    try {
      const data = QRCode.create(text, opts);
      cb(null, renderFunc(data, canvas2, opts));
    } catch (e2) {
      cb(e2);
    }
  }
  browser.create = QRCode.create;
  browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
  browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
  browser.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
  });
  return browser;
}
var browserExports = requireBrowser();
const QRCodeUtil = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
const CONNECTING_ERROR_MARGIN = 0.1;
const CIRCLE_SIZE_MODIFIER = 2.5;
const QRCODE_MATRIX_MARGIN = 7;
function isAdjecentDots(cy, otherCy, cellSize) {
  if (cy === otherCy) {
    return false;
  }
  const diff = cy - otherCy < 0 ? otherCy - cy : cy - otherCy;
  return diff <= cellSize + CONNECTING_ERROR_MARGIN;
}
function getMatrix(value, errorCorrectionLevel2) {
  const arr = Array.prototype.slice.call(QRCodeUtil.create(value, { errorCorrectionLevel: errorCorrectionLevel2 }).modules.data, 0);
  const sqrt = Math.sqrt(arr.length);
  return arr.reduce((rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
}
const QrCodeUtil = {
  generate({ uri, size, logoSize, padding = 8, dotColor = "var(--apkt-colors-black)" }) {
    const strokeWidth = 10;
    const dots = [];
    const matrix = getMatrix(uri, "Q");
    const cellSize = (size - 2 * padding) / matrix.length;
    const qrList = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    qrList.forEach(({ x, y }) => {
      const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x + padding;
      const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y + padding;
      const borderRadius = 0.45;
      for (let i2 = 0; i2 < qrList.length; i2 += 1) {
        const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i2 * 2);
        dots.push(w`
            <rect
              fill=${i2 === 2 ? "var(--apkt-colors-black)" : "var(--apkt-colors-white)"}
              width=${i2 === 0 ? dotSize - strokeWidth : dotSize}
              rx= ${i2 === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              ry= ${i2 === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              stroke=${dotColor}
              stroke-width=${i2 === 0 ? strokeWidth : 0}
              height=${i2 === 0 ? dotSize - strokeWidth : dotSize}
              x= ${i2 === 0 ? y1 + cellSize * i2 + strokeWidth / 2 : y1 + cellSize * i2}
              y= ${i2 === 0 ? x1 + cellSize * i2 + strokeWidth / 2 : x1 + cellSize * i2}
            />
          `);
      }
    });
    const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
    const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
    const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
    const circles = [];
    matrix.forEach((row, i2) => {
      row.forEach((_, j) => {
        if (matrix[i2][j]) {
          if (!(i2 < QRCODE_MATRIX_MARGIN && j < QRCODE_MATRIX_MARGIN || i2 > matrix.length - (QRCODE_MATRIX_MARGIN + 1) && j < QRCODE_MATRIX_MARGIN || i2 < QRCODE_MATRIX_MARGIN && j > matrix.length - (QRCODE_MATRIX_MARGIN + 1))) {
            if (!(i2 > matrixMiddleStart && i2 < matrixMiddleEnd && j > matrixMiddleStart && j < matrixMiddleEnd)) {
              const cx = i2 * cellSize + cellSize / 2 + padding;
              const cy = j * cellSize + cellSize / 2 + padding;
              circles.push([cx, cy]);
            }
          }
        }
      });
    });
    const circlesToConnect = {};
    circles.forEach(([cx, cy]) => {
      var _a;
      if (circlesToConnect[cx]) {
        (_a = circlesToConnect[cx]) == null ? void 0 : _a.push(cy);
      } else {
        circlesToConnect[cx] = [cy];
      }
    });
    Object.entries(circlesToConnect).map(([cx, cys]) => {
      const newCys = cys.filter((cy) => cys.every((otherCy) => !isAdjecentDots(cy, otherCy, cellSize)));
      return [Number(cx), newCys];
    }).forEach(([cx, cys]) => {
      cys.forEach((cy) => {
        dots.push(w`<circle cx=${cx} cy=${cy} fill=${dotColor} r=${cellSize / CIRCLE_SIZE_MODIFIER} />`);
      });
    });
    Object.entries(circlesToConnect).filter(([_, cys]) => cys.length > 1).map(([cx, cys]) => {
      const newCys = cys.filter((cy) => cys.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
      return [Number(cx), newCys];
    }).map(([cx, cys]) => {
      cys.sort((a, b2) => a < b2 ? -1 : 1);
      const groups = [];
      for (const cy of cys) {
        const group = groups.find((item) => item.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
        if (group) {
          group.push(cy);
        } else {
          groups.push([cy]);
        }
      }
      return [cx, groups.map((item) => [item[0], item[item.length - 1]])];
    }).forEach(([cx, groups]) => {
      groups.forEach(([y1, y2]) => {
        dots.push(w`
              <line
                x1=${cx}
                x2=${cx}
                y1=${y1}
                y2=${y2}
                stroke=${dotColor}
                stroke-width=${cellSize / (CIRCLE_SIZE_MODIFIER / 2)}
                stroke-linecap="round"
              />
            `);
      });
    });
    return dots;
  }
};
const styles$b = css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ colors }) => colors.white};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  :host {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    display: flex;
    align-items: center;
    justify-content: center;
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
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;
var __decorate$g = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiQrCode = class WuiQrCode2 extends i {
  constructor() {
    super(...arguments);
    this.uri = "";
    this.size = 500;
    this.theme = "dark";
    this.imageSrc = void 0;
    this.alt = void 0;
    this.arenaClear = void 0;
    this.farcaster = void 0;
  }
  render() {
    this.dataset["theme"] = this.theme;
    this.dataset["clear"] = String(this.arenaClear);
    return b`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`;
  }
  templateSvg() {
    return w`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${QrCodeUtil.generate({
      uri: this.uri,
      size: this.size,
      logoSize: this.arenaClear ? 0 : this.size / 4
    })}
      </svg>
    `;
  }
  templateVisual() {
    if (this.imageSrc) {
      return b`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>`;
    }
    if (this.farcaster) {
      return b`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;
    }
    return b`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
WuiQrCode.styles = [resetStyles, styles$b];
__decorate$g([
  n$2()
], WuiQrCode.prototype, "uri", void 0);
__decorate$g([
  n$2({ type: Number })
], WuiQrCode.prototype, "size", void 0);
__decorate$g([
  n$2()
], WuiQrCode.prototype, "theme", void 0);
__decorate$g([
  n$2()
], WuiQrCode.prototype, "imageSrc", void 0);
__decorate$g([
  n$2()
], WuiQrCode.prototype, "alt", void 0);
__decorate$g([
  n$2({ type: Boolean })
], WuiQrCode.prototype, "arenaClear", void 0);
__decorate$g([
  n$2({ type: Boolean })
], WuiQrCode.prototype, "farcaster", void 0);
WuiQrCode = __decorate$g([
  customElement("wui-qr-code")
], WuiQrCode);
const styles$a = css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations }) => durations["xl"]};
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var __decorate$f = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcQrcode = class W3mConnectingWcQrcode2 extends W3mConnectingWidget {
  constructor() {
    super();
    this.basic = false;
  }
  firstUpdated() {
    var _a, _b, _c;
    if (!this.basic) {
      EventsController.sendEvent({
        type: "track",
        event: "SELECT_WALLET",
        properties: {
          name: ((_a = this.wallet) == null ? void 0 : _a.name) ?? "WalletConnect",
          platform: "qrcode",
          displayIndex: (_b = this.wallet) == null ? void 0 : _b.display_index,
          walletRank: (_c = this.wallet) == null ? void 0 : _c.order,
          view: RouterController.state.view
        }
      });
    }
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.unsubscribe) == null ? void 0 : _a.forEach((unsub) => unsub());
  }
  render() {
    this.onRenderProxy();
    return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "5", "5", "5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.ready = true;
    }
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) {
      return null;
    }
    const alt = this.wallet ? this.wallet.name : void 0;
    ConnectionController.setWcLinking(void 0);
    ConnectionController.setRecentWallet(this.wallet);
    const qrColor = ThemeController.state.themeVariables["--apkt-qr-color"] ?? ThemeController.state.themeVariables["--w3m-qr-color"];
    return b` <wui-qr-code
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${o$2(AssetUtil.getWalletImage(this.wallet))}
      color=${o$2(qrColor)}
      alt=${o$2(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const inactive = !this.uri || !this.ready;
    return b`<wui-button
      .disabled=${inactive}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
  }
};
W3mConnectingWcQrcode.styles = styles$a;
__decorate$f([
  n$2({ type: Boolean })
], W3mConnectingWcQrcode.prototype, "basic", void 0);
W3mConnectingWcQrcode = __decorate$f([
  customElement("w3m-connecting-wc-qrcode")
], W3mConnectingWcQrcode);
var __decorate$e = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported2 extends i {
  constructor() {
    var _a, _b, _c;
    super();
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.wallet.name,
        platform: "browser",
        displayIndex: (_b = this.wallet) == null ? void 0 : _b.display_index,
        walletRank: (_c = this.wallet) == null ? void 0 : _c.order,
        view: RouterController.state.view
      }
    });
  }
  render() {
    return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10", "5", "5", "5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${o$2(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
W3mConnectingWcUnsupported = __decorate$e([
  customElement("w3m-connecting-wc-unsupported")
], W3mConnectingWcUnsupported);
var __decorate$d = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcWeb = class W3mConnectingWcWeb2 extends W3mConnectingWidget {
  constructor() {
    var _a, _b;
    super();
    this.isLoading = true;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.secondaryBtnLabel = "Open";
    this.secondaryLabel = ConstantsUtil$1.CONNECT_LABELS.MOBILE;
    this.secondaryBtnIcon = "externalLink";
    this.updateLoadingState();
    this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", () => {
      this.updateLoadingState();
    }));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.wallet.name,
        platform: "web",
        displayIndex: (_a = this.wallet) == null ? void 0 : _a.display_index,
        walletRank: (_b = this.wallet) == null ? void 0 : _b.order,
        view: RouterController.state.view
      }
    });
  }
  updateLoadingState() {
    this.isLoading = !this.uri;
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.webapp_link) && this.uri) {
      try {
        this.error = false;
        const { webapp_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
__decorate$d([
  r$2()
], W3mConnectingWcWeb.prototype, "isLoading", void 0);
W3mConnectingWcWeb = __decorate$d([
  customElement("w3m-connecting-wc-web")
], W3mConnectingWcWeb);
const styles$9 = css`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;
var __decorate$c = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcView = class W3mConnectingWcView2 extends i {
  constructor() {
    var _a;
    super();
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
    this.unsubscribe = [];
    this.platform = void 0;
    this.platforms = [];
    this.isSiwxEnabled = Boolean(OptionsController.state.siwx);
    this.remoteFeatures = OptionsController.state.remoteFeatures;
    this.displayBranding = true;
    this.basic = false;
    this.determinePlatforms();
    this.initializeConnection();
    this.unsubscribe.push(OptionsController.subscribeKey("remoteFeatures", (val) => this.remoteFeatures = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (OptionsController.state.enableMobileFullScreen) {
      this.setAttribute("data-mobile-fullscreen", "true");
    }
    return b`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
  }
  reownBrandingTemplate() {
    var _a;
    if (!((_a = this.remoteFeatures) == null ? void 0 : _a.reownBranding) || !this.displayBranding) {
      return null;
    }
    return b`<wui-ux-by-reown></wui-ux-by-reown>`;
  }
  async initializeConnection(retry = false) {
    var _a, _b;
    if (this.platform === "browser" || OptionsController.state.manualWCControl && !retry) {
      return;
    }
    try {
      const { wcPairingExpiry, status } = ConnectionController.state;
      const { redirectView } = RouterController.state.data ?? {};
      if (retry || OptionsController.state.enableEmbedded || CoreHelperUtil.isPairingExpired(wcPairingExpiry) || status === "connecting") {
        const connectionsByNamespace = ConnectionController.getConnections(ChainController.state.activeChain);
        const isMultiWalletEnabled = (_a = this.remoteFeatures) == null ? void 0 : _a.multiWallet;
        const hasConnections = connectionsByNamespace.length > 0;
        await ConnectionController.connectWalletConnect({ cache: "never" });
        if (!this.isSiwxEnabled) {
          if (hasConnections && isMultiWalletEnabled) {
            RouterController.replace("ProfileWallets");
            SnackController.showSuccess("New Wallet Added");
          } else if (redirectView) {
            RouterController.replace(redirectView);
          } else {
            ModalController.close();
          }
        }
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes("An error occurred when attempting to switch chain") && !OptionsController.state.enableNetworkSwitch) {
        if (ChainController.state.activeChain) {
          ChainController.setActiveCaipNetwork(CaipNetworksUtil.getUnsupportedNetwork(`${ChainController.state.activeChain}:${(_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.id}`));
          ChainController.showUnsupportedChainUI();
          return;
        }
      }
      const isUserRejectedRequestError = error instanceof AppKitError && error.originalName === ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
      if (isUserRejectedRequestError) {
        EventsController.sendEvent({
          type: "track",
          event: "USER_REJECTED",
          properties: { message: error.message }
        });
      } else {
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_ERROR",
          properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
        });
      }
      ConnectionController.setWcError(true);
      SnackController.showError(error.message ?? "Connection error");
      ConnectionController.resetWcConnection();
      RouterController.goBack();
    }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push("qrcode");
      this.platform = "qrcode";
      return;
    }
    if (this.platform) {
      return;
    }
    const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
    const injectedIds = injected == null ? void 0 : injected.map(({ injected_id }) => injected_id).filter(Boolean);
    const browserIds = [...rdns ? [rdns] : injectedIds ?? []];
    const isBrowser = OptionsController.state.isUniversalProvider ? false : browserIds.length;
    const hasMobileWCLink = mobile_link;
    const isWebWc = webapp_link;
    const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
    const isBrowserWc = isBrowser && isBrowserInstalled;
    const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
    if (isBrowserWc && !ChainController.state.noAdapters) {
      this.platforms.push("browser");
    }
    if (hasMobileWCLink) {
      this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
    }
    if (isWebWc) {
      this.platforms.push("web");
    }
    if (isDesktopWc) {
      this.platforms.push("desktop");
    }
    if (!isBrowserWc && isBrowser && !ChainController.state.noAdapters) {
      this.platforms.push("unsupported");
    }
    this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return b`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "web":
        return b`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
      case "desktop":
        return b`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "mobile":
        return b`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return b`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
      default:
        return b`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    const multiPlatform = this.platforms.length > 1;
    if (!multiPlatform) {
      return null;
    }
    return b`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
  }
  async onSelectPlatform(platform) {
    var _a;
    const container = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div");
    if (container) {
      await container.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.platform = platform;
      container.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mConnectingWcView.styles = styles$9;
__decorate$c([
  r$2()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate$c([
  r$2()
], W3mConnectingWcView.prototype, "platforms", void 0);
__decorate$c([
  r$2()
], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
__decorate$c([
  r$2()
], W3mConnectingWcView.prototype, "remoteFeatures", void 0);
__decorate$c([
  n$2({ type: Boolean })
], W3mConnectingWcView.prototype, "displayBranding", void 0);
__decorate$c([
  n$2({ type: Boolean })
], W3mConnectingWcView.prototype, "basic", void 0);
W3mConnectingWcView = __decorate$c([
  customElement("w3m-connecting-wc-view")
], W3mConnectingWcView);
var __decorate$b = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingWcBasicView = class W3mConnectingWcBasicView2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.isMobile = CoreHelperUtil.isMobile();
    this.remoteFeatures = OptionsController.state.remoteFeatures;
    this.unsubscribe.push(OptionsController.subscribeKey("remoteFeatures", (val) => this.remoteFeatures = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (this.isMobile) {
      const { featured, recommended } = ApiController.state;
      const { customWallets } = OptionsController.state;
      const recent = StorageUtil.getRecentWallets();
      const showConnectors = featured.length || recommended.length || (customWallets == null ? void 0 : customWallets.length) || recent.length;
      return b`<wui-flex flexDirection="column" gap="2" .margin=${["1", "3", "3", "3"]}>
        ${showConnectors ? b`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
    }
    return b`<wui-flex flexDirection="column" .padding=${["0", "0", "4", "0"]}>
        <w3m-connecting-wc-view ?basic=${true} .displayBranding=${false}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0", "3", "0", "3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
  }
  reownBrandingTemplate() {
    var _a;
    if (!((_a = this.remoteFeatures) == null ? void 0 : _a.reownBranding)) {
      return null;
    }
    return b` <wui-flex flexDirection="column" .padding=${["1", "0", "1", "0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`;
  }
};
__decorate$b([
  r$2()
], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
__decorate$b([
  r$2()
], W3mConnectingWcBasicView.prototype, "remoteFeatures", void 0);
W3mConnectingWcBasicView = __decorate$b([
  customElement("w3m-connecting-wc-basic-view")
], W3mConnectingWcBasicView);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r$1 = (o2) => void 0 === o2.strings;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = (i2, t2) => {
  var _a;
  const e2 = i2._$AN;
  if (void 0 === e2) return false;
  for (const i3 of e2) (_a = i3._$AO) == null ? void 0 : _a.call(i3, t2, false), s(i3, t2);
  return true;
}, o$1 = (i2) => {
  let t2, e2;
  do {
    if (void 0 === (t2 = i2._$AM)) break;
    e2 = t2._$AN, e2.delete(i2), i2 = t2;
  } while (0 === (e2 == null ? void 0 : e2.size));
}, r = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let e2 = t2._$AN;
    if (void 0 === e2) t2._$AN = e2 = /* @__PURE__ */ new Set();
    else if (e2.has(i2)) break;
    e2.add(i2), c(t2);
  }
};
function h$1(i2) {
  void 0 !== this._$AN ? (o$1(this), this._$AM = i2, r(this)) : this._$AM = i2;
}
function n$1(i2, t2 = false, e2 = 0) {
  const r2 = this._$AH, h2 = this._$AN;
  if (void 0 !== h2 && 0 !== h2.size) if (t2) if (Array.isArray(r2)) for (let i3 = e2; i3 < r2.length; i3++) s(r2[i3], false), o$1(r2[i3]);
  else null != r2 && (s(r2, false), o$1(r2));
  else s(this, i2);
}
const c = (i2) => {
  i2.type == t.CHILD && (i2._$AP ?? (i2._$AP = n$1), i2._$AQ ?? (i2._$AQ = h$1));
};
class f extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, e2) {
    super._$AT(i2, t2, e2), r(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var _a, _b;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (_a = this.reconnected) == null ? void 0 : _a.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), t2 && (s(this, i2), o$1(this));
  }
  setValue(t2) {
    if (r$1(this._$Ct)) this._$Ct._$AI(t2, this);
    else {
      const i2 = [...this._$Ct._$AH];
      i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = () => new h();
class h {
}
const o = /* @__PURE__ */ new WeakMap(), n = e$1(class extends f {
  render(i2) {
    return A;
  }
  update(i2, [s2]) {
    var _a;
    const e2 = s2 !== this.G;
    return e2 && void 0 !== this.G && this.rt(void 0), (e2 || this.lt !== this.ct) && (this.G = s2, this.ht = (_a = i2.options) == null ? void 0 : _a.host, this.rt(this.ct = i2.element)), A;
  }
  rt(t2) {
    if (this.isConnected || (t2 = void 0), "function" == typeof this.G) {
      const i2 = this.ht ?? globalThis;
      let s2 = o.get(i2);
      void 0 === s2 && (s2 = /* @__PURE__ */ new WeakMap(), o.set(i2, s2)), void 0 !== s2.get(this.G) && this.G.call(this.ht, void 0), s2.set(this.G, t2), void 0 !== t2 && this.G.call(this.ht, t2);
    } else this.G.value = t2;
  }
  get lt() {
    var _a, _b;
    return "function" == typeof this.G ? (_a = o.get(this.ht ?? globalThis)) == null ? void 0 : _a.get(this.G) : (_b = this.G) == null ? void 0 : _b.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
const styles$8 = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      color ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      border ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      box-shadow ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      width ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      height ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      transform ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      opacity ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
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
    background-color: ${({ colors }) => colors.neutrals300};
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      color ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      border ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      box-shadow ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      width ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      height ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      transform ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      opacity ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors }) => colors.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors }) => colors.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
  }
`;
var __decorate$a = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiToggle = class WuiToggle2 extends i {
  constructor() {
    super(...arguments);
    this.inputElementRef = e();
    this.checked = false;
    this.disabled = false;
    this.size = "md";
  }
  render() {
    return b`
      <label data-size=${this.size}>
        <input
          ${n(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("switchChange", {
      detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.checked,
      bubbles: true,
      composed: true
    }));
  }
};
WuiToggle.styles = [resetStyles, elementStyles, styles$8];
__decorate$a([
  n$2({ type: Boolean })
], WuiToggle.prototype, "checked", void 0);
__decorate$a([
  n$2({ type: Boolean })
], WuiToggle.prototype, "disabled", void 0);
__decorate$a([
  n$2()
], WuiToggle.prototype, "size", void 0);
WuiToggle = __decorate$a([
  customElement("wui-toggle")
], WuiToggle);
const styles$7 = css`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing }) => spacing["2"]};
    padding: ${({ spacing }) => spacing["2"]} ${({ spacing }) => spacing["3"]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius["4"]};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var __decorate$9 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiCertifiedSwitch = class WuiCertifiedSwitch2 extends i {
  constructor() {
    super(...arguments);
    this.checked = false;
  }
  render() {
    return b`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
  }
  handleToggleChange(event) {
    event.stopPropagation();
    this.checked = event.detail;
    this.dispatchSwitchEvent();
  }
  dispatchSwitchEvent() {
    this.dispatchEvent(new CustomEvent("certifiedSwitchChange", {
      detail: this.checked,
      bubbles: true,
      composed: true
    }));
  }
};
WuiCertifiedSwitch.styles = [resetStyles, elementStyles, styles$7];
__decorate$9([
  n$2({ type: Boolean })
], WuiCertifiedSwitch.prototype, "checked", void 0);
WuiCertifiedSwitch = __decorate$9([
  customElement("wui-certified-switch")
], WuiCertifiedSwitch);
const styles$6 = css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.textPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
    padding: ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[10]};
    font-size: ${({ textSize }) => textSize.large};
    line-height: ${({ typography }) => typography["lg-regular"].lineHeight};
    letter-spacing: ${({ typography }) => typography["lg-regular"].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
  }

  input[data-size='lg'] {
    padding: ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({ spacing }) => spacing[4]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({ spacing }) => spacing[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
var __decorate$8 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiInputText = class WuiInputText2 extends i {
  constructor() {
    super(...arguments);
    this.inputElementRef = e();
    this.disabled = false;
    this.loading = false;
    this.placeholder = "";
    this.type = "text";
    this.value = "";
    this.size = "md";
  }
  render() {
    return b` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${n(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${o$2(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value || ""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`;
  }
  templateLeftIcon() {
    if (this.icon) {
      return b`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;
    }
    return null;
  }
  templateSubmitButton() {
    var _a;
    if (this.onSubmit) {
      return b`<button
        class="wui-input-text-submit-button ${this.loading ? "loading" : ""}"
        @click=${(_a = this.onSubmit) == null ? void 0 : _a.bind(this)}
        ?disabled=${this.disabled || this.loading}
      >
        ${this.loading ? b`<wui-icon name="spinner" size="md"></wui-icon>` : b`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`;
    }
    return null;
  }
  templateError() {
    if (this.errorText) {
      return b`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`;
    }
    return null;
  }
  templateWarning() {
    if (this.warningText) {
      return b`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`;
    }
    return null;
  }
  dispatchInputChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("inputChange", {
      detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.value,
      bubbles: true,
      composed: true
    }));
  }
};
WuiInputText.styles = [resetStyles, elementStyles, styles$6];
__decorate$8([
  n$2()
], WuiInputText.prototype, "icon", void 0);
__decorate$8([
  n$2({ type: Boolean })
], WuiInputText.prototype, "disabled", void 0);
__decorate$8([
  n$2({ type: Boolean })
], WuiInputText.prototype, "loading", void 0);
__decorate$8([
  n$2()
], WuiInputText.prototype, "placeholder", void 0);
__decorate$8([
  n$2()
], WuiInputText.prototype, "type", void 0);
__decorate$8([
  n$2()
], WuiInputText.prototype, "value", void 0);
__decorate$8([
  n$2()
], WuiInputText.prototype, "errorText", void 0);
__decorate$8([
  n$2()
], WuiInputText.prototype, "warningText", void 0);
__decorate$8([
  n$2()
], WuiInputText.prototype, "onSubmit", void 0);
__decorate$8([
  n$2()
], WuiInputText.prototype, "size", void 0);
__decorate$8([
  n$2({ attribute: false })
], WuiInputText.prototype, "onKeyDown", void 0);
WuiInputText = __decorate$8([
  customElement("wui-input-text")
], WuiInputText);
const styles$5 = css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing }) => spacing[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }
`;
var __decorate$7 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiSearchBar = class WuiSearchBar2 extends i {
  constructor() {
    super(...arguments);
    this.inputComponentRef = e();
    this.inputValue = "";
  }
  render() {
    return b`
      <wui-input-text
        ${n(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue ? b`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>` : null}
      </wui-input-text>
    `;
  }
  onInputChange(event) {
    this.inputValue = event.detail || "";
  }
  clearValue() {
    const component = this.inputComponentRef.value;
    const inputElement = component == null ? void 0 : component.inputElementRef.value;
    if (inputElement) {
      inputElement.value = "";
      this.inputValue = "";
      inputElement.focus();
      inputElement.dispatchEvent(new Event("input"));
    }
  }
};
WuiSearchBar.styles = [resetStyles, styles$5];
__decorate$7([
  n$2()
], WuiSearchBar.prototype, "inputValue", void 0);
WuiSearchBar = __decorate$7([
  customElement("wui-search-bar")
], WuiSearchBar);
const styles$4 = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing }) => spacing[2]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens }) => tokens.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var __decorate$6 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiCardSelectLoader = class WuiCardSelectLoader2 extends i {
  constructor() {
    super(...arguments);
    this.type = "wallet";
  }
  render() {
    return b`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    if (this.type === "network") {
      return b` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${networkSvgMd}`;
    }
    return b`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
  }
};
WuiCardSelectLoader.styles = [resetStyles, elementStyles, styles$4];
__decorate$6([
  n$2()
], WuiCardSelectLoader.prototype, "type", void 0);
WuiCardSelectLoader = __decorate$6([
  customElement("wui-card-select-loader")
], WuiCardSelectLoader);
const styles$3 = i$2`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var __decorate$5 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiGrid = class WuiGrid2 extends i {
  render() {
    this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
    return b`<slot></slot>`;
  }
};
WuiGrid.styles = [resetStyles, styles$3];
__decorate$5([
  n$2()
], WuiGrid.prototype, "gridTemplateRows", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "gridTemplateColumns", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "justifyItems", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "alignItems", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "justifyContent", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "alignContent", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "columnGap", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "rowGap", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "gap", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "padding", void 0);
__decorate$5([
  n$2()
], WuiGrid.prototype, "margin", void 0);
WuiGrid = __decorate$5([
  customElement("wui-grid")
], WuiGrid);
const styles$2 = css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing }) => spacing["2"]};
    padding: ${({ spacing }) => spacing["3"]} ${({ spacing }) => spacing["0"]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius["4"]}, 20px);
    transition:
      color ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-1"]},
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]},
      border-radius ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors }) => colors.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors }) => colors.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors }) => colors.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var __decorate$4 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mAllWalletsListItem = class W3mAllWalletsListItem2 extends i {
  constructor() {
    super();
    this.observer = new IntersectionObserver(() => void 0);
    this.visible = false;
    this.imageSrc = void 0;
    this.imageLoading = false;
    this.isImpressed = false;
    this.explorerId = "";
    this.walletQuery = "";
    this.certified = false;
    this.displayIndex = 0;
    this.wallet = void 0;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visible = true;
          this.fetchImageSrc();
          this.sendImpressionEvent();
        } else {
          this.visible = false;
        }
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
    const certified = ((_a = this.wallet) == null ? void 0 : _a.badge_type) === "certified";
    return b`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${o$2(certified ? "certified" : void 0)}
            >${(_b = this.wallet) == null ? void 0 : _b.name}</wui-text
          >
          ${certified ? b`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
  }
  imageTemplate() {
    var _a, _b;
    if (!this.visible && !this.imageSrc || this.imageLoading) {
      return this.shimmerTemplate();
    }
    return b`
      <wui-wallet-image
        size="lg"
        imageSrc=${o$2(this.imageSrc)}
        name=${o$2((_a = this.wallet) == null ? void 0 : _a.name)}
        .installed=${((_b = this.wallet) == null ? void 0 : _b.installed) ?? false}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
  }
  shimmerTemplate() {
    return b`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
  }
  async fetchImageSrc() {
    if (!this.wallet) {
      return;
    }
    this.imageSrc = AssetUtil.getWalletImage(this.wallet);
    if (this.imageSrc) {
      return;
    }
    this.imageLoading = true;
    this.imageSrc = await AssetUtil.fetchWalletImage(this.wallet.image_id);
    this.imageLoading = false;
  }
  sendImpressionEvent() {
    if (!this.wallet || this.isImpressed) {
      return;
    }
    this.isImpressed = true;
    EventsController.sendWalletImpressionEvent({
      name: this.wallet.name,
      walletRank: this.wallet.order,
      explorerId: this.explorerId,
      view: RouterController.state.view,
      query: this.walletQuery,
      certified: this.certified,
      displayIndex: this.displayIndex
    });
  }
};
W3mAllWalletsListItem.styles = styles$2;
__decorate$4([
  r$2()
], W3mAllWalletsListItem.prototype, "visible", void 0);
__decorate$4([
  r$2()
], W3mAllWalletsListItem.prototype, "imageSrc", void 0);
__decorate$4([
  r$2()
], W3mAllWalletsListItem.prototype, "imageLoading", void 0);
__decorate$4([
  r$2()
], W3mAllWalletsListItem.prototype, "isImpressed", void 0);
__decorate$4([
  n$2()
], W3mAllWalletsListItem.prototype, "explorerId", void 0);
__decorate$4([
  n$2()
], W3mAllWalletsListItem.prototype, "walletQuery", void 0);
__decorate$4([
  n$2()
], W3mAllWalletsListItem.prototype, "certified", void 0);
__decorate$4([
  n$2()
], W3mAllWalletsListItem.prototype, "displayIndex", void 0);
__decorate$4([
  n$2({ type: Object })
], W3mAllWalletsListItem.prototype, "wallet", void 0);
W3mAllWalletsListItem = __decorate$4([
  customElement("w3m-all-wallets-list-item")
], W3mAllWalletsListItem);
const styles$1 = css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
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

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations }) => durations["xl"]};
    animation-timing-function: ${({ easings }) => easings["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing }) => spacing["4"]};
    padding-bottom: ${({ spacing }) => spacing["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var __decorate$3 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const PAGINATOR_ID = "local-paginator";
let W3mAllWalletsList = class W3mAllWalletsList2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.loading = !ApiController.state.wallets.length;
    this.wallets = ApiController.state.wallets;
    this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
    this.unsubscribe.push(...[ApiController.subscribeKey("wallets", (val) => this.wallets = val)]);
  }
  firstUpdated() {
    this.initialFetch();
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a = this.paginationObserver) == null ? void 0 : _a.disconnect();
  }
  render() {
    if (this.mobileFullScreen) {
      this.setAttribute("data-mobile-fullscreen", "true");
    }
    return b`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "3", "3", "3"]}
        gap="2"
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
    const gridEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-grid");
    if (gridEl) {
      await ApiController.fetchWalletsByPage({ page: 1 });
      await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.loading = false;
      gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  shimmerTemplate(items, id) {
    return [...Array(items)].map(() => b`
        <wui-card-select-loader type="wallet" id=${o$2(id)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    return WalletUtil.getWalletConnectWallets(this.wallets).map((wallet, index) => b`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${wallet.id}"
          @click=${() => this.onConnectWallet(wallet)}
          .wallet=${wallet}
          explorerId=${wallet.id}
          certified=${this.badge === "certified"}
          displayIndex=${index}
        ></w3m-all-wallets-list-item>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets, recommended, featured, count, mobileFilteredOutWalletsLength } = ApiController.state;
    const columns = window.innerWidth < 352 ? 3 : 4;
    const currentWallets = wallets.length + recommended.length;
    const minimumRows = Math.ceil(currentWallets / columns);
    let shimmerCount = minimumRows * columns - currentWallets + columns;
    shimmerCount -= wallets.length ? featured.length % columns : 0;
    if (count === 0 && featured.length > 0) {
      return null;
    }
    if (count === 0 || [...featured, ...wallets, ...recommended].length < count - (mobileFilteredOutWalletsLength ?? 0)) {
      return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
    }
    return null;
  }
  createPaginationObserver() {
    var _a;
    const loaderEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`#${PAGINATOR_ID}`);
    if (loaderEl) {
      this.paginationObserver = new IntersectionObserver(([element]) => {
        if ((element == null ? void 0 : element.isIntersecting) && !this.loading) {
          const { page, count, wallets } = ApiController.state;
          if (wallets.length < count) {
            ApiController.fetchWalletsByPage({ page: page + 1 });
          }
        }
      });
      this.paginationObserver.observe(loaderEl);
    }
  }
  onConnectWallet(wallet) {
    ConnectorController.selectWalletConnector(wallet);
  }
};
W3mAllWalletsList.styles = styles$1;
__decorate$3([
  r$2()
], W3mAllWalletsList.prototype, "loading", void 0);
__decorate$3([
  r$2()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate$3([
  r$2()
], W3mAllWalletsList.prototype, "badge", void 0);
__decorate$3([
  r$2()
], W3mAllWalletsList.prototype, "mobileFullScreen", void 0);
W3mAllWalletsList = __decorate$3([
  customElement("w3m-all-wallets-list")
], W3mAllWalletsList);
const styles = i$2`
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

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
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
var __decorate$2 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mAllWalletsSearch = class W3mAllWalletsSearch2 extends i {
  constructor() {
    super(...arguments);
    this.prevQuery = "";
    this.prevBadge = void 0;
    this.loading = true;
    this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
    this.query = "";
  }
  render() {
    if (this.mobileFullScreen) {
      this.setAttribute("data-mobile-fullscreen", "true");
    }
    this.onSearch();
    return this.loading ? b`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    if (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) {
      this.prevQuery = this.query;
      this.prevBadge = this.badge;
      this.loading = true;
      await ApiController.searchWallet({ search: this.query, badge: this.badge });
      this.loading = false;
    }
  }
  walletsTemplate() {
    const { search } = ApiController.state;
    const markedInstalledWallets = WalletUtil.markWalletsAsInstalled(search);
    const walletsByWcSupport = WalletUtil.filterWalletsByWcSupport(markedInstalledWallets);
    if (!walletsByWcSupport.length) {
      return b`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
    }
    return b`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "3", "3", "3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${walletsByWcSupport.map((wallet, index) => b`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
              data-testid="wallet-search-item-${wallet.id}"
              explorerId=${wallet.id}
              certified=${this.badge === "certified"}
              walletQuery=${this.query}
              displayIndex=${index}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `;
  }
  onConnectWallet(wallet) {
    ConnectorController.selectWalletConnector(wallet);
  }
};
W3mAllWalletsSearch.styles = styles;
__decorate$2([
  r$2()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate$2([
  r$2()
], W3mAllWalletsSearch.prototype, "mobileFullScreen", void 0);
__decorate$2([
  n$2()
], W3mAllWalletsSearch.prototype, "query", void 0);
__decorate$2([
  n$2()
], W3mAllWalletsSearch.prototype, "badge", void 0);
W3mAllWalletsSearch = __decorate$2([
  customElement("w3m-all-wallets-search")
], W3mAllWalletsSearch);
var __decorate$1 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mAllWalletsView = class W3mAllWalletsView2 extends i {
  constructor() {
    super(...arguments);
    this.search = "";
    this.badge = void 0;
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
  }
  render() {
    const isSearch = this.search.length >= 2;
    return b`
      <wui-flex .padding=${["1", "3", "3", "3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === "certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch || this.badge ? b`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>` : b`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  onCertifiedSwitchChange(event) {
    if (event.detail) {
      this.badge = "certified";
      SnackController.showSvg("Only WalletConnect certified", {
        icon: "walletConnectBrown",
        iconColor: "accent-100"
      });
    } else {
      this.badge = void 0;
    }
  }
  qrButtonTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return b`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  onWalletConnectQr() {
    RouterController.push("ConnectingWalletConnect");
  }
};
__decorate$1([
  r$2()
], W3mAllWalletsView.prototype, "search", void 0);
__decorate$1([
  r$2()
], W3mAllWalletsView.prototype, "badge", void 0);
W3mAllWalletsView = __decorate$1([
  customElement("w3m-all-wallets-view")
], W3mAllWalletsView);
var __decorate = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mDownloadsView = class W3mDownloadsView2 extends i {
  constructor() {
    var _a;
    super(...arguments);
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
  }
  render() {
    if (!this.wallet) {
      throw new Error("w3m-downloads-view");
    }
    return b`
      <wui-flex gap="2" flexDirection="column" .padding=${["3", "3", "4", "3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.chrome_store)) {
      return null;
    }
    return b`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`;
  }
  iosTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.app_store)) {
      return null;
    }
    return b`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`;
  }
  androidTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.play_store)) {
      return null;
    }
    return b`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`;
  }
  homepageTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.homepage)) {
      return null;
    }
    return b`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `;
  }
  openStore(params) {
    if (params.href && this.wallet) {
      EventsController.sendEvent({
        type: "track",
        event: "GET_WALLET",
        properties: {
          name: this.wallet.name,
          walletRank: this.wallet.order,
          explorerId: this.wallet.id,
          type: params.type
        }
      });
      CoreHelperUtil.openHref(params.href, "_blank");
    }
  }
  onChromeStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.chrome_store) {
      this.openStore({ href: this.wallet.chrome_store, type: "chrome_store" });
    }
  }
  onAppStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.app_store) {
      this.openStore({ href: this.wallet.app_store, type: "app_store" });
    }
  }
  onPlayStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.play_store) {
      this.openStore({ href: this.wallet.play_store, type: "play_store" });
    }
  }
  onHomePage() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.homepage) {
      this.openStore({ href: this.wallet.homepage, type: "homepage" });
    }
  }
};
W3mDownloadsView = __decorate([
  customElement("w3m-downloads-view")
], W3mDownloadsView);
export {
  W3mAllWalletsView,
  W3mConnectingWcBasicView,
  W3mDownloadsView
};
//# sourceMappingURL=basic-C7EwvSDA.js.map
