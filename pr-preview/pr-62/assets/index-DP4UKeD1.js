import{dl as g,dq as v,dm as t,d4 as E,dD as R}from"./main-B-Ex0NZE.js";import{r as C,n as s}from"./class-map-B_ZWESL-.js";import{c as f,a as y,r as W,e as j,U as N}from"./index-hs0bbVBc.js";import"./index-cFcZjfCe.js";import{H as I}from"./HelpersUtil-CtS24QHR.js";import{o as $}from"./if-defined-Clv-Hpr2.js";import"./index-BI5I4uD9.js";import"./index-DGk1TFea.js";const T=f`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var O=function(e,i,r,o){var n=arguments.length,a=n<3?i:o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,i,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(n<3?l(a):n>3?l(i,r,a):l(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a};let S=class extends g{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=v.state.view}firstUpdated(){this.status=I.hasFooter()?"show":"hide",this.unsubscribe.push(v.subscribeKey("view",i=>{this.view=i,this.status=I.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(i=>{for(const r of i)if(r.target===this.getWrapper()){const o=`${r.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",o)}}),this.resizeObserver.observe(this.getWrapper())}render(){return t`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return I.hasFooter()?t` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return t`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return t`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return t` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),v.push("WhatIsANetwork")}getWrapper(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("div.container")}};S.styles=[T];O([C()],S.prototype,"status",void 0);O([C()],S.prototype,"view",void 0);S=O([y("w3m-footer")],S);const L=f`
  :host {
    display: block;
    width: inherit;
  }
`;var A=function(e,i,r,o){var n=arguments.length,a=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,i,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(n<3?l(a):n>3?l(i,r,a):l(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a};let k=class extends g{constructor(){super(),this.unsubscribe=[],this.viewState=v.state.view,this.history=v.state.history.join(","),this.unsubscribe.push(v.subscribeKey("view",()=>{this.history=v.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(i=>i()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return t`${this.templatePageContainer()}`}templatePageContainer(){return t`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=v.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(i){switch(i){case"AccountSettings":return t`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return t`<w3m-account-view></w3m-account-view>`;case"AllWallets":return t`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return t`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return t`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return t`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return t`<w3m-connect-view></w3m-connect-view>`;case"Create":return t`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return t`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return t`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return t`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return t`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return t`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return t`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return t`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return t`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return t`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return t`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return t`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return t`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return t`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return t`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return t`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return t`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return t`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return t`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return t`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return t`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return t`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return t`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return t`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return t`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return t`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return t`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return t`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return t`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return t`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return t`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return t`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return t`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return t`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return t`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return t`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return t`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return t`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return t`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return t`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return t`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return t`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return t`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return t`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return t`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return t`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return t`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return t`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return t`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return t`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return t`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return t`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return t`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return t`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return t`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;default:return t`<w3m-connect-view></w3m-connect-view>`}}};k.styles=[L];A([C()],k.prototype,"viewState",void 0);A([C()],k.prototype,"history",void 0);k=A([y("w3m-router")],k);const B=f`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var d=function(e,i,r,o){var n=arguments.length,a=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,i,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(n<3?l(a):n>3?l(i,r,a):l(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a};let m=class extends g{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return t`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const i=this.icon?t`<wui-icon
          size=${$(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:t`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return t`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${i}
        ${this.enableGreenCircle?t`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return t`
      <wui-text variant="lg-regular" color="primary">
        ${N.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return t`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};m.styles=[W,j,B];d([s()],m.prototype,"address",void 0);d([s()],m.prototype,"profileName",void 0);d([s()],m.prototype,"alt",void 0);d([s()],m.prototype,"imageSrc",void 0);d([s()],m.prototype,"icon",void 0);d([s()],m.prototype,"iconSize",void 0);d([s({type:Boolean})],m.prototype,"enableGreenCircle",void 0);d([s({type:Boolean})],m.prototype,"loading",void 0);d([s({type:Number})],m.prototype,"charsStart",void 0);d([s({type:Number})],m.prototype,"charsEnd",void 0);m=d([y("wui-wallet-switch")],m);const D=f`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var b=function(e,i,r,o){var n=arguments.length,a=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,i,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(n<3?l(a):n>3?l(i,r,a):l(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a};let p=class extends g{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let i="1";return this.size==="lg"?i="4":this.size==="md"?i="2":this.size==="sm"&&(i="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${i});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),t`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?t`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?t`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:t`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};p.styles=[W,D];b([s()],p.prototype,"size",void 0);b([s()],p.prototype,"name",void 0);b([s()],p.prototype,"imageSrc",void 0);b([s()],p.prototype,"walletIcon",void 0);b([s({type:Boolean})],p.prototype,"installed",void 0);b([s()],p.prototype,"badgeSize",void 0);p=b([y("wui-wallet-image")],p);const V=R`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,F=f`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var _=function(e,i,r,o){var n=arguments.length,a=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,i,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(n<3?l(a):n>3?l(i,r,a):l(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a};const P=4;let z=class extends g{constructor(){super(...arguments),this.walletImages=[]}render(){const i=this.walletImages.length<P;return t`${this.walletImages.slice(0,P).map(({src:r,walletName:o})=>t`
          <wui-wallet-image
            size="sm"
            imageSrc=${r}
            name=${$(o)}
          ></wui-wallet-image>
        `)}
    ${i?[...Array(P-this.walletImages.length)].map(()=>t` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};z.styles=[W,F];_([s({type:Array})],z.prototype,"walletImages",void 0);z=_([y("wui-all-wallets-image")],z);const U=f`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var u=function(e,i,r,o){var n=arguments.length,a=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,i,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(n<3?l(a):n>3?l(i,r,a):l(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a};const H={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton",tron:"tron"};let w=class extends g{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,t`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${$(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){var i;return(i=this.namespaces)!=null&&i.length?t`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((r,o)=>{var n;return t`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(((n=this.namespaces)==null?void 0:n.length)??0)*2-o}
              class="namespace-icon"
            >
              <wui-icon
                name=${$(H[r])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`})}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?t` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?t` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?t`<wui-wallet-image
        size=${$(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?t`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?t`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?t`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};w.styles=[W,j,U];u([s({type:Array})],w.prototype,"walletImages",void 0);u([s()],w.prototype,"imageSrc",void 0);u([s()],w.prototype,"name",void 0);u([s()],w.prototype,"size",void 0);u([s()],w.prototype,"tagLabel",void 0);u([s()],w.prototype,"tagVariant",void 0);u([s()],w.prototype,"walletIcon",void 0);u([s()],w.prototype,"tabIdx",void 0);u([s({type:Array})],w.prototype,"namespaces",void 0);u([s({type:Boolean})],w.prototype,"disabled",void 0);u([s({type:Boolean})],w.prototype,"showAllWallets",void 0);u([s({type:Boolean})],w.prototype,"loading",void 0);u([s({type:String})],w.prototype,"loadingSpinnerColor",void 0);w=u([y("wui-list-wallet")],w);const M=R`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,G=R`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,q=f`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var x=function(e,i,r,o){var n=arguments.length,a=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,i,r,o);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(n<3?l(a):n>3?l(i,r,a):l(i,r))||a);return n>3&&a&&Object.defineProperty(i,r,a),a};let h=class extends g{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:G,md:V,lg:M},this.selected=!1,this.round=!1}render(){const i={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${i[this.size]});
    `,t`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?t`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:t`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};h.styles=[W,q];x([s()],h.prototype,"size",void 0);x([s()],h.prototype,"name",void 0);x([s({type:Object})],h.prototype,"networkImagesBySize",void 0);x([s()],h.prototype,"imageSrc",void 0);x([s({type:Boolean})],h.prototype,"selected",void 0);x([s({type:Boolean})],h.prototype,"round",void 0);h=x([y("wui-network-image")],h);export{S as W,k as a,V as n};
//# sourceMappingURL=index-DP4UKeD1.js.map
