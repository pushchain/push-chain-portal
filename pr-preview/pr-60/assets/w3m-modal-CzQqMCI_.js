import{dM as N,ee as et,dq as g,dr as W,dl as x,dm as l,dw as we,ds as U,ef as lt,eg as dt,eh as k,d5 as G,ei as ut,ej as L,db as F,dc as P,ek as Fe,d3 as f,di as pt,dE as _,d4 as Q,d6 as $,dx as ht,dg as mt,dh as ft,dy as T,dn as tt,e6 as wt,dQ as me,dF as gt,el as yt}from"./main-CqmH1KpY.js";import{n as p,r as u,a as it}from"./class-map-CahFoLLT.js";import{o as y}from"./if-defined-0bFqHmnk.js";import{c as E,r as oe,a as b,e as nt,v as de,U as Re,i as bt}from"./index-DiG5bk4e.js";import"./index-B5IDWDhA.js";import{H as ze}from"./HelpersUtil-BZ5sOFas.js";import{C as Ee}from"./ConstantsUtil-Bs3PXOXa.js";import"./index-CS07OQzO.js";import"./index-CRk6vQyw.js";import"./index-Chg4mVtz.js";import"./index-CgiNqmmI.js";import"./index-BxWVbvoz.js";import"./index-xfNxCShZ.js";import"./index-DYozaOVK.js";import{M as je}from"./index-B6oO8Ohh.js";import"./index-B8fGnPzI.js";import{S as xt}from"./SwapController-Dhz_M2c5.js";import"./index-BAefpmC0.js";import"./index-BPavEk7k.js";const st={isUnsupportedChainView(){return g.state.view==="UnsupportedChain"||g.state.view==="SwitchNetwork"&&g.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){N.shake();return}if(await et.isSIWXCloseDisabled()){N.shake();return}(g.state.view==="DataCapture"||g.state.view==="DataCaptureOtpConfirm")&&W.disconnect(),N.close()}},vt=E`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var At=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let Ce=class extends x{render(){return l`<slot></slot>`}};Ce.styles=[oe,vt];Ce=At([b("wui-card")],Ce);const Et=E`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var Oe=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const kt={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let ue=class extends x{constructor(){super(...arguments),this.message="",this.type="info"}render(){return l`
      <wui-flex
        data-type=${y(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${kt[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){we.close()}};ue.styles=[oe,Et];Oe([p()],ue.prototype,"message",void 0);Oe([p()],ue.prototype,"type",void 0);ue=Oe([b("wui-alertbar")],ue);const It=E`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var ot=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const St={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let ge=class extends x{constructor(){super(),this.unsubscribe=[],this.open=we.state.open,this.onOpen(!0),this.unsubscribe.push(we.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:i}=we.state,n=St[i];return l`
      <wui-alertbar
        message=${t}
        backgroundColor=${n==null?void 0:n.backgroundColor}
        iconColor=${n==null?void 0:n.iconColor}
        icon=${n==null?void 0:n.icon}
        type=${i}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};ge.styles=It;ot([u()],ge.prototype,"open",void 0);ge=ot([b("w3m-alertbar")],ge);const Ct=E`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Z=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let z=class extends x{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return l`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${y(this.iconSize)}></wui-icon>
    </button>`}};z.styles=[oe,nt,Ct];Z([p()],z.prototype,"icon",void 0);Z([p()],z.prototype,"variant",void 0);Z([p()],z.prototype,"type",void 0);Z([p()],z.prototype,"size",void 0);Z([p()],z.prototype,"iconSize",void 0);Z([p({type:Boolean})],z.prototype,"fullWidth",void 0);Z([p({type:Boolean})],z.prototype,"disabled",void 0);z=Z([b("wui-icon-button")],z);const Nt=E`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var re=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const $t={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Pt={lg:"lg",md:"md",sm:"sm"};let K=class extends x{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return l`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=$t[this.size];return this.text?l`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return l`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=Pt[this.size];return l` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};K.styles=[oe,nt,Nt];re([p()],K.prototype,"imageSrc",void 0);re([p()],K.prototype,"text",void 0);re([p()],K.prototype,"size",void 0);re([p()],K.prototype,"type",void 0);re([p({type:Boolean})],K.prototype,"disabled",void 0);K=re([b("wui-select")],K);const h={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"},Y={[h.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[h.INVALID_RECIPIENT]:"Invalid recipient address",[h.INVALID_ASSET]:"Invalid asset specified",[h.INVALID_AMOUNT]:"Invalid payment amount",[h.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[h.UNKNOWN_ERROR]:"Unknown payment error occurred",[h.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[h.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[h.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[h.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[h.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[h.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[h.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[h.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[h.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[h.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"};class w extends Error{get message(){return Y[this.code]}constructor(t,i){super(Y[t]),this.name="AppKitPayError",this.code=t,this.details=i,Error.captureStackTrace&&Error.captureStackTrace(this,w)}}const Tt="https://rpc.walletconnect.org/v1/json-rpc",qe="reown_test";function _t(){const{chainNamespace:e}=k.parseCaipNetworkId(d.state.paymentAsset.network);if(!G.isAddress(d.state.recipient,e))throw new w(h.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${e}"`)}async function Rt(e,t,i){var a;if(t!==U.CHAIN.EVM)throw new w(h.INVALID_CHAIN_NAMESPACE);if(!i.fromAddress)throw new w(h.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");const n=typeof i.amount=="string"?parseFloat(i.amount):i.amount;if(isNaN(n))throw new w(h.INVALID_PAYMENT_CONFIG);const o=((a=e.metadata)==null?void 0:a.decimals)??18,s=W.parseUnits(n.toString(),o);if(typeof s!="bigint")throw new w(h.GENERIC_PAYMENT_ERROR);return await W.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:s,data:"0x"})??void 0}async function Ot(e,t){if(!t.fromAddress)throw new w(h.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");const i=e.asset,n=t.recipient,o=Number(e.metadata.decimals),s=W.parseUnits(t.amount.toString(),o);if(s===void 0)throw new w(h.GENERIC_PAYMENT_ERROR);return await W.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[n,s],method:"transfer",abi:dt.getERC20Abi(i),chainNamespace:U.CHAIN.EVM})??void 0}async function Ut(e,t){if(e!==U.CHAIN.SOLANA)throw new w(h.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new w(h.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");const i=typeof t.amount=="string"?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new w(h.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!lt.getProvider(e))throw new w(h.GENERIC_PAYMENT_ERROR,"No Solana provider available.");const o=await W.sendTransaction({chainNamespace:U.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!o)throw new w(h.GENERIC_PAYMENT_ERROR,"Transaction failed.");return o}catch(n){throw n instanceof w?n:new w(h.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${n}`)}}async function Lt({sourceToken:e,toToken:t,amount:i,recipient:n}){const o=W.parseUnits(i,e.metadata.decimals),s=W.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:$e,origin:{amount:(o==null?void 0:o.toString())??"0",currency:e},destination:{amount:(s==null?void 0:s.toString())??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:$e,type:"deposit",deposit:{amount:(o==null?void 0:o.toString())??"0",currency:e.asset,receiver:n}}],timeInSeconds:6})}function Ne(e){if(!e)return null;const t=e.steps[0];return!t||t.type!==Kt?null:t}function ke(e,t=0){if(!e)return[];const i=e.steps.filter(o=>o.type===Xt),n=i.filter((o,s)=>s+1>t);return i.length>0&&i.length<3?n:[]}const Ue=new ut({baseUrl:G.getApiUrl(),clientId:null});class Wt extends Error{}function Dt(){const e=F.getSnapshot().projectId;return`${Tt}?projectId=${e}`}function Le(){const{projectId:e,sdkType:t,sdkVersion:i}=F.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function We(e,t){const i=Dt(),{sdkType:n,sdkVersion:o,projectId:s}=F.getSnapshot(),r={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:n,sv:o,projectId:s}},m=await(await fetch(i,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})).json();if(m.error)throw new Wt(m.error.message);return m}async function Me(e){return(await We("reown_getExchanges",e)).result}async function Ve(e){return(await We("reown_getExchangePayUrl",e)).result}async function Bt(e){return(await We("reown_getExchangeBuyStatus",e)).result}async function Ft(e){const t=P.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:n}=k.parseCaipNetworkId(e.sourceToken.network),{chainId:o,chainNamespace:s}=k.parseCaipNetworkId(e.toToken.network),r=e.sourceToken.asset==="native"?Fe(n):e.sourceToken.asset,a=e.toToken.asset==="native"?Fe(s):e.toToken.asset;return await Ue.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:r,destinationChainId:o.toString(),destinationCurrency:a,recipient:e.recipient,amount:t},params:Le()})}async function zt(e){const t=L.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=L.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?Lt(e):Ft(e)}async function jt(e){return await Ue.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...Le()}})}async function qt(e){return await Ue.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:Le()})}const Mt=["eip155","solana"],Vt={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},He={56:"714",204:"714"};function Ie(e,t){const{chainNamespace:i,chainId:n}=k.parseCaipNetworkId(e),o=Vt[i];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let s=o.native.assetNamespace,r=o.native.assetReference;return t!=="native"?(s=o.defaultTokenNamespace,r=t):i==="eip155"&&He[n]&&(r=He[n]),`${`${i}:${n}`}/${s}:${r}`}function Ht(e){const{chainNamespace:t}=k.parseCaipNetworkId(e);return Mt.includes(t)}function Gt(e){const i=f.getAllRequestedCaipNetworks().find(o=>o.caipNetworkId===e.chainId);let n=e.address;if(!i)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(L.isLowerCaseMatch(e.symbol,i.nativeCurrency.symbol))n="native";else if(G.isCaipAddress(n)){const{address:o}=k.parseCaipAddress(n);n=o}else if(!n)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:i.caipNetworkId,asset:n,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}function Yt(e){return{chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:e.metadata.decimals.toString()}}}function ye(e){const t=P.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}function Qt(e){const i=f.getAllRequestedCaipNetworks().find(n=>n.caipNetworkId===e.network);return i?!!i.testnet:!1}const Ge=0,Se="unknown",$e="direct-transfer",Kt="deposit",Xt="transaction",c=pt({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[U.CHAIN.EVM]:[],[U.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),d={state:c,subscribe(e){return ft(c,()=>e(c))},subscribeKey(e,t){return mt(c,e,t)},async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),_t(),await this.prepareTokenLogo(),c.isConfigured=!0,Q.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:c.exchanges,configuration:{network:c.paymentAsset.network,asset:c.paymentAsset.asset,recipient:c.recipient,amount:c.amount}}}),await N.open({view:"Pay"})},resetState(){c.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},c.recipient="0x0",c.amount=0,c.isConfigured=!1,c.error=null,c.isPaymentInProgress=!1,c.isLoading=!1,c.currentPayment=void 0,c.selectedExchange=void 0,c.exchangeUrlForQuote=void 0,c.requestId=void 0},resetQuoteState(){c.quote=void 0,c.quoteStatus="waiting",c.quoteError=null,c.isFetchingQuote=!1,c.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new w(h.INVALID_PAYMENT_CONFIG);try{c.choice=e.choice??"pay",c.paymentAsset=e.paymentAsset,c.recipient=e.recipient,c.amount=e.amount,c.openInNewTab=e.openInNewTab??!0,c.redirectUrl=e.redirectUrl,c.payWithExchange=e.payWithExchange,c.error=null}catch(t){throw new w(h.INVALID_PAYMENT_CONFIG,t.message)}},setSelectedPaymentAsset(e){c.selectedPaymentAsset=e},setSelectedExchange(e){c.selectedExchange=e},setRequestId(e){c.requestId=e},setPaymentInProgress(e){c.isPaymentInProgress=e},getPaymentAsset(){return c.paymentAsset},getExchanges(){return c.exchanges},async fetchExchanges(){try{c.isLoading=!0;const e=await Me({page:Ge});c.exchanges=e.exchanges.slice(0,2)}catch{throw $.showError(Y.UNABLE_TO_GET_EXCHANGES),new w(h.UNABLE_TO_GET_EXCHANGES)}finally{c.isLoading=!1}},async getAvailableExchanges(e){var t;try{const i=e!=null&&e.asset&&(e!=null&&e.network)?Ie(e.network,e.asset):void 0;return await Me({page:(e==null?void 0:e.page)??Ge,asset:i,amount:(t=e==null?void 0:e.amount)==null?void 0:t.toString()})}catch{throw new w(h.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,i=!1){try{const n=Number(t.amount),o=await Ve({exchangeId:e,asset:Ie(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return Q.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),Q.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:c.paymentId||Se,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e}}})),o}catch(n){throw n instanceof Error&&n.message.includes("is not supported")?new w(h.ASSET_NOT_SUPPORTED):new Error(n.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:i,recipient:n}){const o=await Ve({exchangeId:e,asset:Ie(t.network,t.asset),amount:i.toString(),recipient:n});c.exchangeSessionId=o.sessionId,c.exchangeUrlForQuote=o.url},async openPayUrl(e,t,i=!1){try{const n=await this.getPayUrl(e.exchangeId,t,i);if(!n)throw new w(h.UNABLE_TO_GET_PAY_URL);const s=e.openInNewTab??!0?"_blank":"_self";return G.openHref(n.url,s),n}catch(n){throw n instanceof w?c.error=n.message:c.error=Y.GENERIC_PAYMENT_ERROR,new w(h.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:n,paymentAsset:o}){if(c.currentPayment={type:"wallet",status:"IN_PROGRESS"},!c.isPaymentInProgress)try{this.initiatePayment();const r=f.getAllRequestedCaipNetworks().find(m=>m.caipNetworkId===o.network);if(!r)throw new Error("Target network not found");const a=f.state.activeCaipNetwork;switch(L.isLowerCaseMatch(a==null?void 0:a.caipNetworkId,r.caipNetworkId)||await f.switchActiveNetwork(r),e){case U.CHAIN.EVM:o.asset==="native"&&(c.currentPayment.result=await Rt(o,e,{recipient:i,amount:n,fromAddress:t})),o.asset.startsWith("0x")&&(c.currentPayment.result=await Ot(o,{recipient:i,amount:n,fromAddress:t})),c.currentPayment.status="SUCCESS";break;case U.CHAIN.SOLANA:c.currentPayment.result=await Ut(e,{recipient:i,amount:n,fromAddress:t,tokenMint:o.asset==="native"?void 0:o.asset}),c.currentPayment.status="SUCCESS";break;default:throw new w(h.INVALID_CHAIN_NAMESPACE)}}catch(s){throw s instanceof w?c.error=s.message:c.error=Y.GENERIC_PAYMENT_ERROR,c.currentPayment.status="FAILED",$.showError(c.error),s}finally{c.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:i}=e;d.initiatePayment();const o=f.getAllRequestedCaipNetworks().find(r=>{var a;return r.caipNetworkId===((a=c.paymentAsset)==null?void 0:a.network)});if(!o)throw new Error("Target network not found");const s=f.state.activeCaipNetwork;if(L.isLowerCaseMatch(s==null?void 0:s.caipNetworkId,o.caipNetworkId)||await f.switchActiveNetwork(o),t===U.CHAIN.EVM){const{from:r,to:a,data:m,value:v}=i.transaction;await W.sendTransaction({address:r,to:a,data:m,value:BigInt(v),chainNamespace:t})}else if(t===U.CHAIN.SOLANA){const{instructions:r}=i.transaction;await W.writeSolanaTransaction({instructions:r})}}catch(t){throw t instanceof w?c.error=t.message:c.error=Y.GENERIC_PAYMENT_ERROR,$.showError(c.error),t}finally{c.isPaymentInProgress=!1}},getExchangeById(e){return c.exchanges.find(t=>t.id===e)},validatePayConfig(e){const{paymentAsset:t,recipient:i,amount:n}=e;if(!t)throw new w(h.INVALID_PAYMENT_CONFIG);if(!i)throw new w(h.INVALID_RECIPIENT);if(!t.asset)throw new w(h.INVALID_ASSET);if(n==null||n<=0)throw new w(h.INVALID_AMOUNT)},async handlePayWithExchange(e){try{c.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:i}=c.paymentAsset,n={network:t,asset:i,amount:c.amount,recipient:c.recipient},o=await this.getPayUrl(e,n);if(!o)throw new w(h.UNABLE_TO_INITIATE_PAYMENT);return c.currentPayment.sessionId=o.sessionId,c.currentPayment.status="IN_PROGRESS",c.currentPayment.exchangeId=e,this.initiatePayment(),{url:o.url,openInNewTab:c.openInNewTab}}catch(t){return t instanceof w?c.error=t.message:c.error=Y.GENERIC_PAYMENT_ERROR,c.isPaymentInProgress=!1,$.showError(c.error),null}},async getBuyStatus(e,t){var i,n;try{const o=await Bt({sessionId:t,exchangeId:e});return(o.status==="SUCCESS"||o.status==="FAILED")&&Q.sendEvent({type:"track",event:o.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:o.status==="FAILED"?G.parseError(c.error):void 0,source:"pay",paymentId:c.paymentId||Se,configuration:{network:c.paymentAsset.network,asset:c.paymentAsset.asset,recipient:c.recipient,amount:c.amount},currentPayment:{type:"exchange",exchangeId:(i=c.currentPayment)==null?void 0:i.exchangeId,sessionId:(n=c.currentPayment)==null?void 0:n.sessionId,result:o.txHash}}}),o}catch{throw new w(h.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}){if(!e)return[];const{address:n}=k.parseCaipAddress(e);let o=t;return i===U.CHAIN.EVM&&(o=void 0),await ht.getMyTokensWithBalance({address:n,caipNetwork:o})},async fetchTokensFromExchange(){if(!c.selectedExchange)return[];const e=await qt(c.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map(async n=>{const o=Yt(n),{chainNamespace:s}=k.parseCaipNetworkId(o.chainId);let r=o.address;if(G.isCaipAddress(r)){const{address:m}=k.parseCaipAddress(r);r=m}const a=await _.getImageByToken(r??"",s).catch(()=>{});return o.iconUrl=a??"",o}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){try{c.isFetchingTokenBalances=!0;const s=await(!!c.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}));c.tokenBalances={...c.tokenBalances,[i]:s}}catch(n){const o=n instanceof Error?n.message:"Unable to get token balances";$.showError(o)}finally{c.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:i,toToken:n,recipient:o}){try{d.resetQuoteState(),c.isFetchingQuote=!0;const s=await zt({amount:e,address:c.selectedExchange?void 0:t,sourceToken:i,toToken:n,recipient:o});if(c.selectedExchange){const r=Ne(s);if(r){const a=`${i.network}:${r.deposit.receiver}`,m=P.formatNumber(r.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await d.generateExchangeUrlForQuote({exchangeId:c.selectedExchange.id,paymentAsset:i,amount:m.toString(),recipient:a})}}c.quote=s}catch(s){let r=Y.UNABLE_TO_GET_QUOTE;if(s instanceof Error&&s.cause&&s.cause instanceof Response)try{const a=await s.cause.json();a.error&&typeof a.error=="string"&&(r=a.error)}catch{}throw c.quoteError=r,$.showError(r),new w(h.UNABLE_TO_GET_QUOTE)}finally{c.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===$e){const i=c.selectedExchange,n=c.exchangeSessionId;if(i&&n){switch((await this.getBuyStatus(i.id,n)).status){case"IN_PROGRESS":c.quoteStatus="waiting";break;case"SUCCESS":c.quoteStatus="success",c.isPaymentInProgress=!1;break;case"FAILED":c.quoteStatus="failure",c.isPaymentInProgress=!1;break;case"UNKNOWN":c.quoteStatus="waiting";break;default:c.quoteStatus="waiting";break}return}c.quoteStatus="success";return}const{status:t}=await jt({requestId:e});c.quoteStatus=t}catch{throw c.quoteStatus="failure",new w(h.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){c.isPaymentInProgress=!0,c.paymentId=crypto.randomUUID()},initializeAnalytics(){c.analyticsSet||(c.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{var t;if((t=c.currentPayment)!=null&&t.status&&c.currentPayment.status!=="UNKNOWN"){const i={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[c.currentPayment.status];Q.sendEvent({type:"track",event:i,properties:{message:c.currentPayment.status==="FAILED"?G.parseError(c.error):void 0,source:"pay",paymentId:c.paymentId||Se,configuration:{network:c.paymentAsset.network,asset:c.paymentAsset.asset,recipient:c.recipient,amount:c.amount},currentPayment:{type:c.currentPayment.type,exchangeId:c.currentPayment.exchangeId,sessionId:c.currentPayment.sessionId,result:c.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!c.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=k.parseCaipNetworkId(c.paymentAsset.network),t=await _.getImageByToken(c.paymentAsset.asset,e);c.paymentAsset.metadata.logoURI=t}catch{}}},Zt=E`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`;var J=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let j=class extends x{constructor(){super(),this.unsubscribe=[],this.amount=d.state.amount,this.namespace=void 0,this.paymentAsset=d.state.paymentAsset,this.activeConnectorIds=T.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=d.state.exchanges,this.isLoading=d.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(d.subscribeKey("amount",t=>this.amount=t)),this.unsubscribe.push(T.subscribeKey("activeConnectorIds",t=>this.activeConnectorIds=t)),this.unsubscribe.push(d.subscribeKey("exchanges",t=>this.exchanges=t)),this.unsubscribe.push(d.subscribeKey("isLoading",t=>this.isLoading=t)),d.fetchExchanges(),d.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return l`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var i;const t=f.state.activeChain;this.namespace=t,this.caipAddress=(i=f.getAccountData(t))==null?void 0:i.caipAddress,this.unsubscribe.push(f.subscribeChainProp("accountState",n=>{this.caipAddress=n==null?void 0:n.caipAddress},t))}paymentDetailsTemplate(){const i=f.getAllRequestedCaipNetworks().find(n=>n.caipNetworkId===this.paymentAsset.network);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${ye(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${(i==null?void 0:i.name)||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${y(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${y(_.getNetworkImage(i))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return Ht(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():l``}connectedWalletTemplate(){const{name:t,image:i}=this.getWalletProperties({namespace:this.namespace});return l`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${y(i)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${t}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return l`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return l`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const t=this.exchanges.filter(i=>Qt(this.paymentAsset)?i.id===qe:i.id!==qe);return t.length===0?l`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:t.map(i=>l`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(i)}
          data-testid="exchange-option-${i.id}"
          ?chevron=${!0}
          imageSrc=${y(i.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${i.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return l`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?g.push("PayQuote"):(await T.connect(),await N.open({view:"PayQuote"}))}onExchangePayment(t){d.setSelectedExchange(t),g.push("PayQuote")}async onDisconnect(){try{await W.disconnect(),await N.open({view:"Pay"})}catch{console.error("Failed to disconnect"),$.showError("Failed to disconnect")}}getWalletProperties({namespace:t}){if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const n=T.getConnector({id:i,namespace:t});if(!n)return{name:void 0,image:void 0};const o=_.getConnectorImage(n);return{name:n.name,image:o}}};j.styles=Zt;J([u()],j.prototype,"amount",void 0);J([u()],j.prototype,"namespace",void 0);J([u()],j.prototype,"paymentAsset",void 0);J([u()],j.prototype,"activeConnectorIds",void 0);J([u()],j.prototype,"caipAddress",void 0);J([u()],j.prototype,"exchanges",void 0);J([u()],j.prototype,"isLoading",void 0);j=J([b("w3m-pay-view")],j);const Jt=E`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var ae=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const ei=3,ti=2,ii=.3,ni="200px",si={"accent-primary":de.tokens.core.backgroundAccentPrimary};let X=class extends x{constructor(){super(...arguments),this.rings=ei,this.duration=ti,this.opacity=ii,this.size=ni,this.variant="accent-primary"}render(){const t=si[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${t};
      --pulse-opacity: ${this.opacity};
    `;const i=Array.from({length:this.rings},(n,o)=>this.renderRing(o,this.rings));return l`
      <div class="pulse-container">
        <div class="pulse-rings">${i}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(t,i){const o=`animation-delay: ${t/i*this.duration}s;`;return l`<div class="pulse-ring" style=${o}></div>`}};X.styles=[oe,Jt];ae([p({type:Number})],X.prototype,"rings",void 0);ae([p({type:Number})],X.prototype,"duration",void 0);ae([p({type:Number})],X.prototype,"opacity",void 0);ae([p()],X.prototype,"size",void 0);ae([p()],X.prototype,"variant",void 0);X=ae([b("wui-pulse")],X);const Ye=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],Qe=["success","submitted","failure","timeout","refund"],oi=E`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`;var M=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const ri={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},ai=3e3;let R=class extends x{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=d.state.paymentAsset,this.quoteStatus=d.state.quoteStatus,this.quote=d.state.quote,this.amount=d.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=T.state.activeConnectorIds,this.selectedExchange=d.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(d.subscribeKey("quoteStatus",t=>this.quoteStatus=t),d.subscribeKey("quote",t=>this.quote=t),T.subscribeKey("activeConnectorIds",t=>this.activeConnectorIds=t),d.subscribeKey("selectedExchange",t=>this.selectedExchange=t))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const t=ye(this.amount||"0"),i=this.paymentAsset.metadata.symbol??"Unknown",o=f.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network),s=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";return this.quoteStatus==="success"||this.quoteStatus==="submitted"?l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:s?l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:l`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${y(_.getNetworkImage(o))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${t} ${i}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return l`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const t=this.getStepsWithStatus();return l`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${t.map(i=>this.renderStep(i))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var o;const t=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund",i=this.quoteStatus==="success"||this.quoteStatus==="submitted";if(t)return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(i)return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const n=((o=this.quote)==null?void 0:o.timeInSeconds)??0;return l`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${n} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var r,a,m;const i=f.getAllRequestedCaipNetworks().find(v=>{var ie;const B=(ie=this.quote)==null?void 0:ie.origin.currency.network;if(!B)return!1;const{chainId:te}=k.parseCaipNetworkId(B);return L.isLowerCaseMatch(v.id.toString(),te.toString())}),n=P.formatNumber(((r=this.quote)==null?void 0:r.origin.amount)||"0",{decimals:((a=this.quote)==null?void 0:a.origin.currency.metadata.decimals)??0}).toString(),o=ye(n),s=((m=this.quote)==null?void 0:m.origin.currency.metadata.symbol)??"Unknown";return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${o}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${s}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${y(_.getNetworkImage(i))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${i==null?void 0:i.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var o;const{image:t}=this.getWalletProperties({namespace:this.namespace}),{address:i}=this.caipAddress?k.parseCaipAddress(this.caipAddress):{},n=(o=this.selectedExchange)==null?void 0:o.name;return this.selectedExchange?l`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${n}</wui-text>
          <wui-image src=${y(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:l`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${Re.getTruncateString({string:this.profileName||i||n||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${y(t)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund"?Ye.map(i=>({...i,status:"failed"})):Ye.map(i=>{const o=(ri[i.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...i,status:o}})}renderStep({title:t,icon:i,status:n}){return l`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${i} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${it({"step-icon-box":!0,success:n==="completed"})}>
            ${this.renderStatusIndicator(n)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(t){return t==="completed"?l`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:t==="failed"?l`<wui-icon size="sm" color="error" name="close"></wui-icon>`:t==="pending"?l`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},ai))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const t=d.state.requestId;if(!t||Qe.includes(this.quoteStatus))this.stopPolling();else try{await d.fetchQuoteStatus({requestId:t}),Qe.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){var i,n;const t=f.state.activeChain;this.namespace=t,this.caipAddress=(i=f.getAccountData(t))==null?void 0:i.caipAddress,this.profileName=((n=f.getAccountData(t))==null?void 0:n.profileName)??null,this.unsubscribe.push(f.subscribeChainProp("accountState",o=>{this.caipAddress=o==null?void 0:o.caipAddress,this.profileName=(o==null?void 0:o.profileName)??null},t))}getWalletProperties({namespace:t}){if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const n=T.getConnector({id:i,namespace:t});if(!n)return{name:void 0,image:void 0};const o=_.getConnectorImage(n);return{name:n.name,image:o}}};R.styles=oi;M([u()],R.prototype,"paymentAsset",void 0);M([u()],R.prototype,"quoteStatus",void 0);M([u()],R.prototype,"quote",void 0);M([u()],R.prototype,"amount",void 0);M([u()],R.prototype,"namespace",void 0);M([u()],R.prototype,"caipAddress",void 0);M([u()],R.prototype,"profileName",void 0);M([u()],R.prototype,"activeConnectorIds",void 0);M([u()],R.prototype,"selectedExchange",void 0);R=M([b("w3m-pay-loading-view")],R);const ci=tt`
  :host {
    display: block;
  }
`;var li=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let Pe=class extends x{render(){return l`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};Pe.styles=[ci];Pe=li([b("w3m-pay-fees-skeleton")],Pe);const di=E`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var rt=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let be=class extends x{constructor(){super(),this.unsubscribe=[],this.quote=d.state.quote,this.unsubscribe.push(d.subscribeKey("quote",t=>this.quote=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var i,n,o;const t=P.formatNumber(((i=this.quote)==null?void 0:i.origin.amount)||"0",{decimals:((n=this.quote)==null?void 0:n.origin.currency.metadata.decimals)??0,round:6}).toString();return l`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${t} ${((o=this.quote)==null?void 0:o.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(s=>this.renderFee(s)):null}
      </wui-flex>
    `}renderFee(t){const i=t.id==="network",n=P.formatNumber(t.amount||"0",{decimals:t.currency.metadata.decimals??0,round:6}).toString();if(i){const s=f.getAllRequestedCaipNetworks().find(r=>L.isLowerCaseMatch(r.caipNetworkId,t.currency.network));return l`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${t.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${n} ${t.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${y(_.getNetworkImage(s))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(s==null?void 0:s.name)||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${t.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${n} ${t.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};be.styles=[di];rt([u()],be.prototype,"quote",void 0);be=rt([b("w3m-pay-fees")],be);const ui=E`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var at=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let xe=class extends x{constructor(){super(),this.unsubscribe=[],this.selectedExchange=d.state.selectedExchange,this.unsubscribe.push(d.subscribeKey("selectedExchange",t=>this.selectedExchange=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=!!this.selectedExchange;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${t?null:l`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};xe.styles=[ui];at([p({type:Array})],xe.prototype,"selectedExchange",void 0);xe=at([b("w3m-pay-options-empty")],xe);const pi=E`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var hi=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let Te=class extends x{render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Te.styles=[pi];Te=hi([b("w3m-pay-options-skeleton")],Te);const mi=E`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Ae=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const fi=300;let se=class extends x{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var i,n;this.unsubscribe.forEach(o=>o()),(i=this.resizeObserver)==null||i.disconnect();const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".pay-options-container");t==null||t.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var i,n;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".pay-options-container");t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),t==null||t.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),(n=this.resizeObserver)==null||n.observe(t),this.handleOptionsListScroll())}render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(t=>this.payOptionTemplate(t))}
      </wui-flex>
    `}payOptionTemplate(t){var ce,le;const{network:i,metadata:n,asset:o,amount:s="0"}=t,a=f.getAllRequestedCaipNetworks().find(ne=>ne.caipNetworkId===i),m=`${i}:${o}`,v=`${(ce=this.selectedPaymentAsset)==null?void 0:ce.network}:${(le=this.selectedPaymentAsset)==null?void 0:le.asset}`,B=m===v,te=P.bigNumber(s,{safe:!0}),ie=te.gt(0);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>{var ne;return(ne=this.onSelect)==null?void 0:ne.call(this,t)}}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${y(n.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${y(_.getNetworkImage(a))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${n.symbol}</wui-text>
            ${ie?l`<wui-text variant="sm-regular" color="secondary">
                  ${te.round(6).toString()} ${n.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${B?l`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".pay-options-container");if(!t)return;t.scrollHeight>fi?(t.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--options-scroll--top-opacity",je.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--options-scroll--bottom-opacity",je.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--options-mask-image","none"),t.style.setProperty("--options-scroll--top-opacity","0"),t.style.setProperty("--options-scroll--bottom-opacity","0"))}};se.styles=[mi];Ae([p({type:Array})],se.prototype,"options",void 0);Ae([p()],se.prototype,"selectedPaymentAsset",void 0);Ae([p()],se.prototype,"onSelect",void 0);se=Ae([b("w3m-pay-options")],se);const wi=E`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var S=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const fe={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},gi={eip155:{icon:fe.eip155,label:"EVM"},solana:{icon:fe.solana,label:"Solana"},bip122:{icon:fe.bip122,label:"Bitcoin"},ton:{icon:fe.ton,label:"Ton"}};let A=class extends x{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=d.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=d.state.amount,this.recipient=d.state.recipient,this.activeConnectorIds=T.state.activeConnectorIds,this.selectedPaymentAsset=d.state.selectedPaymentAsset,this.selectedExchange=d.state.selectedExchange,this.isFetchingQuote=d.state.isFetchingQuote,this.quoteError=d.state.quoteError,this.quote=d.state.quote,this.isFetchingTokenBalances=d.state.isFetchingTokenBalances,this.tokenBalances=d.state.tokenBalances,this.isPaymentInProgress=d.state.isPaymentInProgress,this.exchangeUrlForQuote=d.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(d.subscribeKey("paymentAsset",t=>this.paymentAsset=t)),this.unsubscribe.push(d.subscribeKey("tokenBalances",t=>this.onTokenBalancesChanged(t))),this.unsubscribe.push(d.subscribeKey("isFetchingTokenBalances",t=>this.isFetchingTokenBalances=t)),this.unsubscribe.push(T.subscribeKey("activeConnectorIds",t=>this.activeConnectorIds=t)),this.unsubscribe.push(d.subscribeKey("selectedPaymentAsset",t=>this.selectedPaymentAsset=t)),this.unsubscribe.push(d.subscribeKey("isFetchingQuote",t=>this.isFetchingQuote=t)),this.unsubscribe.push(d.subscribeKey("quoteError",t=>this.quoteError=t)),this.unsubscribe.push(d.subscribeKey("quote",t=>this.quote=t)),this.unsubscribe.push(d.subscribeKey("amount",t=>this.amount=t)),this.unsubscribe.push(d.subscribeKey("recipient",t=>this.recipient=t)),this.unsubscribe.push(d.subscribeKey("isPaymentInProgress",t=>this.isPaymentInProgress=t)),this.unsubscribe.push(d.subscribeKey("selectedExchange",t=>this.selectedExchange=t)),this.unsubscribe.push(d.subscribeKey("exchangeUrlForQuote",t=>this.exchangeUrlForQuote=t)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(t=>t())}updated(t){super.updated(t),t.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return l`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){var r,a;if(this.selectedExchange){const m=P.formatNumber((r=this.quote)==null?void 0:r.origin.amount,{decimals:((a=this.quote)==null?void 0:a.origin.currency.metadata.decimals)??0}).toString();return l`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?l`<wui-text variant="lg-regular" color="primary">
                ${P.bigNumber(m,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:l`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const t=G.getPlainAddress(this.caipAddress)??"",{name:i,image:n}=this.getWalletProperties({namespace:this.namespace}),{icon:o,label:s}=gi[this.namespace]??{};return l`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${y(this.profileName)}
          address=${y(t)}
          imageSrc=${y(n)}
          alt=${y(i)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${y(s)}
          address=${y(t)}
          icon=${y(o)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${y(s)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var i,n;const t=f.state.activeChain;this.namespace=t,this.caipAddress=(i=f.getAccountData(t))==null?void 0:i.caipAddress,this.profileName=((n=f.getAccountData(t))==null?void 0:n.profileName)??null,this.unsubscribe.push(f.subscribeChainProp("accountState",o=>this.onAccountStateChanged(o),t))}async fetchTokens(){if(this.namespace){let t;if(this.caipAddress){const{chainId:i,chainNamespace:n}=k.parseCaipAddress(this.caipAddress),o=`${n}:${i}`;t=f.getAllRequestedCaipNetworks().find(r=>r.caipNetworkId===o)}await d.fetchTokens({caipAddress:this.caipAddress,caipNetwork:t,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:t}=this.caipAddress?k.parseCaipAddress(this.caipAddress):{};d.fetchQuote({amount:this.amount.toString(),address:t,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:t}){if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const n=T.getConnector({id:i,namespace:t});if(!n)return{name:void 0,image:void 0};const o=_.getConnectorImage(n);return{name:n.name,image:o}}paymentOptionsViewTemplate(){return l`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const t=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return l`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(t.length===0)return l`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const i={disabled:this.isFetchingQuote};return l`<w3m-pay-options
      class=${it(i)}
      .options=${t}
      .selectedPaymentAsset=${y(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?l`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:l`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var o,s,r;const t=this.isFetchingQuote||this.isFetchingTokenBalances,i=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,n=P.formatNumber(((o=this.quote)==null?void 0:o.origin.amount)??0,{decimals:((s=this.quote)==null?void 0:s.origin.currency.metadata.decimals)??0}).toString();return this.selectedExchange?t||i?l`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:l`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${t||i?l`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:l`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${ye(n)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${((r=this.quote)==null?void 0:r.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:t,isDisabled:i})}
      </wui-flex>
    `}actionButtonTemplate(t){const i=ke(this.quote),{isLoading:n,isDisabled:o}=t;let s="Pay";return i.length>1&&this.completedTransactionsCount===0&&(s="Approve"),l`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${n||this.isPaymentInProgress}
        ?disabled=${o||this.isPaymentInProgress}
        @click=${()=>{i.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${s}
        ${n?null:l`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(o=>{try{return Gt(o)}catch{return null}}).filter(o=>!!o).filter(o=>{const{chainId:s}=k.parseCaipNetworkId(o.network),{chainId:r}=k.parseCaipNetworkId(this.paymentAsset.network);return L.isLowerCaseMatch(o.asset,this.paymentAsset.asset)?!0:this.selectedExchange?!L.isLowerCaseMatch(s.toString(),r.toString()):!0}):[]}onTokenBalancesChanged(t){this.tokenBalances=t;const[i]=this.getPaymentAssetFromTokenBalances();i&&d.setSelectedPaymentAsset(i)}async onConnectOtherWallet(){await T.connect(),await N.open({view:"PayQuote"})}onAccountStateChanged(t){const{address:i}=this.caipAddress?k.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=t==null?void 0:t.caipAddress,this.profileName=(t==null?void 0:t.profileName)??null,i){const{address:n}=this.caipAddress?k.parseCaipAddress(this.caipAddress):{};n?L.isLowerCaseMatch(n,i)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):N.close()}}onSelectedPaymentAssetChanged(t){this.isFetchingQuote||d.setSelectedPaymentAsset(t)}async onTransfer(){var i,n,o;const t=Ne(this.quote);if(t){if(!L.isLowerCaseMatch((i=this.selectedPaymentAsset)==null?void 0:i.asset,t.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const r=((n=this.selectedPaymentAsset)==null?void 0:n.amount)??"0",a=P.formatNumber(t.deposit.amount,{decimals:((o=this.selectedPaymentAsset)==null?void 0:o.metadata.decimals)??0}).toString();if(!P.bigNumber(r).gte(a)){$.showError("Insufficient funds");return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:v}=k.parseCaipAddress(this.caipAddress);await d.onTransfer({chainNamespace:this.namespace,fromAddress:v,toAddress:t.deposit.receiver,amount:a,paymentAsset:this.selectedPaymentAsset}),d.setRequestId(t.requestId),g.push("PayLoading")}}}async onSendTransactions(){var r,a,m;const t=((r=this.selectedPaymentAsset)==null?void 0:r.amount)??"0",i=P.formatNumber(((a=this.quote)==null?void 0:a.origin.amount)??0,{decimals:((m=this.selectedPaymentAsset)==null?void 0:m.metadata.decimals)??0}).toString();if(!P.bigNumber(t).gte(i)){$.showError("Insufficient funds");return}const o=ke(this.quote),[s]=ke(this.quote,this.completedTransactionsCount);s&&this.namespace&&(await d.onSendTransaction({namespace:this.namespace,transactionStep:s}),this.completedTransactionsCount+=1,this.completedTransactionsCount===o.length&&(d.setRequestId(s.requestId),g.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){const t=G.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!t)throw new Error("Could not create popup window");t.location.href=this.exchangeUrlForQuote;const i=Ne(this.quote);i&&d.setRequestId(i.requestId),d.initiatePayment(),g.push("PayLoading")}}resetAssetsState(){d.setSelectedPaymentAsset(null)}resetQuoteState(){d.resetQuoteState()}};A.styles=wi;S([u()],A.prototype,"profileName",void 0);S([u()],A.prototype,"paymentAsset",void 0);S([u()],A.prototype,"namespace",void 0);S([u()],A.prototype,"caipAddress",void 0);S([u()],A.prototype,"amount",void 0);S([u()],A.prototype,"recipient",void 0);S([u()],A.prototype,"activeConnectorIds",void 0);S([u()],A.prototype,"selectedPaymentAsset",void 0);S([u()],A.prototype,"selectedExchange",void 0);S([u()],A.prototype,"isFetchingQuote",void 0);S([u()],A.prototype,"quoteError",void 0);S([u()],A.prototype,"quote",void 0);S([u()],A.prototype,"isFetchingTokenBalances",void 0);S([u()],A.prototype,"tokenBalances",void 0);S([u()],A.prototype,"isPaymentInProgress",void 0);S([u()],A.prototype,"exchangeUrlForQuote",void 0);S([u()],A.prototype,"completedTransactionsCount",void 0);A=S([b("w3m-pay-quote-view")],A);const yi=E`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`;var De=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let pe=class extends x{constructor(){super(),this.unsubscribe=[],this.paymentAsset=d.state.paymentAsset,this.amount=d.state.amount,this.unsubscribe.push(d.subscribeKey("paymentAsset",t=>{this.paymentAsset=t}),d.subscribeKey("amount",t=>{this.amount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const i=f.getAllRequestedCaipNetworks().find(n=>n.caipNetworkId===this.paymentAsset.network);return l`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${y(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${(i==null?void 0:i.name)??"Unknown"}
      </wui-text>
    </wui-flex>`}};pe.styles=[yi];De([p()],pe.prototype,"paymentAsset",void 0);De([p()],pe.prototype,"amount",void 0);pe=De([b("w3m-pay-header")],pe);const bi=E`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var ee=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const xi=["SmartSessionList"],vi={PayWithExchange:de.tokens.theme.foregroundPrimary};function Ke(){var m,v,B,te,ie,ce,le,ne;const e=(v=(m=g.state.data)==null?void 0:m.connector)==null?void 0:v.name,t=(te=(B=g.state.data)==null?void 0:B.wallet)==null?void 0:te.name,i=(ce=(ie=g.state.data)==null?void 0:ie.network)==null?void 0:ce.name,n=t??e,o=T.getConnectors(),s=o.length===1&&((le=o[0])==null?void 0:le.id)==="w3m-email",r=(ne=f.getAccountData())==null?void 0:ne.socialProvider,a=r?r.charAt(0).toUpperCase()+r.slice(1):"Connect Social";return{Connect:`Connect ${s?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:n?`Get ${n}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:i??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:a,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let q=class extends x{constructor(){super(),this.unsubscribe=[],this.heading=Ke()[g.state.view],this.network=f.state.activeCaipNetwork,this.networkImage=_.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=g.state.view,this.viewDirection="",this.unsubscribe.push(wt.subscribeNetworkImages(()=>{this.networkImage=_.getNetworkImage(this.network)}),g.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.heading=Ke()[t]},Ee.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),f.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=_.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=vi[g.state.view]??de.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),l`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){Q.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),g.push("WhatIsAWallet")}async onClose(){await st.safeClose()}rightHeaderTemplate(){var i,n,o;const t=(o=(n=(i=F)==null?void 0:i.state)==null?void 0:n.features)==null?void 0:o.smartSessions;return g.state.view!=="Account"||!t?this.closeButtonTemplate():l`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>g.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return l`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if(this.view==="PayQuote")return l`<w3m-pay-header></w3m-pay-header>`;const t=xi.includes(this.view);return l`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${t?l`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var v;const{view:t}=g.state,i=t==="Connect",n=F.state.enableEmbedded,o=t==="ApproveTransaction",s=t==="ConnectingSiwe",r=t==="Account",a=F.state.enableNetworkSwitch,m=o||s||i&&n;return r&&a?l`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${y((v=this.network)==null?void 0:v.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${y(this.networkImage)}
      ></wui-select>`:this.showBack&&!m?l`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:l`<wui-icon-button
      data-hidden=${!i}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(Q.sendEvent({type:"track",event:"CLICK_NETWORKS"}),g.push("Networks"))}isAllowedNetworkSwitch(){const t=f.getAllRequestedCaipNetworks(),i=t?t.length>1:!1,n=t==null?void 0:t.find(({id:o})=>{var s;return o===((s=this.network)==null?void 0:s.id)});return i||!n}onViewChange(){const{history:t}=g.state;let i=Ee.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(i=Ee.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=i}async onHistoryChange(){var n;const{history:t}=g.state,i=(n=this.shadowRoot)==null?void 0:n.querySelector("#dynamic");t.length>1&&!this.showBack&&i?(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){g.goBack()}};q.styles=bi;ee([u()],q.prototype,"heading",void 0);ee([u()],q.prototype,"network",void 0);ee([u()],q.prototype,"networkImage",void 0);ee([u()],q.prototype,"showBack",void 0);ee([u()],q.prototype,"prevHistoryLength",void 0);ee([u()],q.prototype,"view",void 0);ee([u()],q.prototype,"viewDirection",void 0);q=ee([b("w3m-header")],q);const Ai=E`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var Be=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let he=class extends x{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return l`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},i={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:l`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${i[this.variant]}
    ></wui-icon-box>`}};he.styles=[oe,Ai];Be([p()],he.prototype,"message",void 0);Be([p()],he.prototype,"variant",void 0);he=Be([b("wui-snackbar")],he);const Ei=tt`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ct=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let ve=class extends x{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=$.state.open,this.unsubscribe.push($.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:i}=$.state;return l` <wui-snackbar message=${t} variant=${i}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),$.state.autoClose&&(this.timeout=setTimeout(()=>$.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ve.styles=Ei;ct([u()],ve.prototype,"open",void 0);ve=ct([b("w3m-snackbar")],ve);const ki=E`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

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

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var V=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const Xe="scroll-lock",Ii={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class D extends x{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=F.state.enableEmbedded,this.open=N.state.open,this.caipAddress=f.state.activeCaipAddress,this.caipNetwork=f.state.activeCaipNetwork,this.shake=N.state.shake,this.filterByNamespace=T.state.filterByNamespace,this.padding=de.spacing[1],this.mobileFullScreen=F.state.enableMobileFullScreen,this.initializeTheming(),me.prefetchAnalyticsConfig(),this.unsubscribe.push(N.subscribeKey("open",t=>t?this.onOpen():this.onClose()),N.subscribeKey("shake",t=>this.shake=t),f.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),f.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),F.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),T.subscribeKey("filterByNamespace",t=>{var i;this.filterByNamespace!==t&&!((i=f.getAccountData(t))!=null&&i.caipAddress)&&(me.fetchRecommendedWallets(),this.filterByNamespace=t)}),g.subscribeKey("view",()=>{this.dataset.border=ze.hasFooter()?"true":"false",this.padding=Ii[g.state.view]??de.spacing[1]}))}firstUpdated(){if(this.dataset.border=ze.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){N.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?l`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?l`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return l` <wui-card
      shake="${this.shake}"
      data-embedded="${y(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){if(t.target===t.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await st.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:i}=gt.state,n=Re.getColorTheme(i);bt(t,n)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),$.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=Xe,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${Xe}"]`);t&&t.remove()}onAddKeyboardListener(){var i;this.abortController=new AbortController;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",n=>{if(n.key==="Escape")this.handleClose();else if(n.key==="Tab"){const{tagName:o}=n.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const i=f.state.isSwitchingNamespace,n=g.state.view==="ProfileWallets";!t&&!i&&!n&&N.close(),await et.initializeIfEnabled(t),this.caipAddress=t,f.setIsSwitchingNamespace(!1)}onNewNetwork(t){var v,B;const i=this.caipNetwork,n=(v=i==null?void 0:i.caipNetworkId)==null?void 0:v.toString(),o=(B=t==null?void 0:t.caipNetworkId)==null?void 0:B.toString(),s=n!==o,r=g.state.view==="UnsupportedChain",a=N.state.open;let m=!1;this.enableEmbedded&&g.state.view==="SwitchNetwork"&&(m=!0),s&&xt.resetState(),a&&r&&(m=!0),m&&g.state.view!=="SIWXSignMessage"&&g.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(me.prefetch(),me.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}D.styles=ki;V([p({type:Boolean})],D.prototype,"enableEmbedded",void 0);V([u()],D.prototype,"open",void 0);V([u()],D.prototype,"caipAddress",void 0);V([u()],D.prototype,"caipNetwork",void 0);V([u()],D.prototype,"shake",void 0);V([u()],D.prototype,"filterByNamespace",void 0);V([u()],D.prototype,"padding",void 0);V([u()],D.prototype,"mobileFullScreen",void 0);let Ze=class extends D{};Ze=V([b("w3m-modal")],Ze);let Je=class extends D{};Je=V([b("appkit-modal")],Je);const Si=E`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`;var Ci=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let _e=class extends x{constructor(){super()}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){g.goBack()}};_e.styles=Si;_e=Ci([b("w3m-usage-exceeded-view")],_e);const Ni=E`
  :host {
    width: 100%;
  }
`;var C=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let I=class extends x{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(t){super.updated(t),(t.has("name")||t.has("imageSrc")||t.has("walletRank"))&&(this.hasImpressionSent=!1),t.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&Q.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:g.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(yt.state.adapters).length>1?this.namespaces:[]}render(){return l`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${y(this.imageSrc)}
        name=${this.name}
        size=${y(this.size)}
        tagLabel=${y(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};I.styles=Ni;C([p({type:Array})],I.prototype,"walletImages",void 0);C([p()],I.prototype,"imageSrc",void 0);C([p()],I.prototype,"name",void 0);C([p()],I.prototype,"size",void 0);C([p()],I.prototype,"tagLabel",void 0);C([p()],I.prototype,"tagVariant",void 0);C([p()],I.prototype,"walletIcon",void 0);C([p()],I.prototype,"tabIdx",void 0);C([p({type:Boolean})],I.prototype,"disabled",void 0);C([p({type:Boolean})],I.prototype,"showAllWallets",void 0);C([p({type:Boolean})],I.prototype,"loading",void 0);C([p({type:String})],I.prototype,"loadingSpinnerColor",void 0);C([p()],I.prototype,"rdnsId",void 0);C([p()],I.prototype,"displayIndex",void 0);C([p()],I.prototype,"walletRank",void 0);C([p({type:Array})],I.prototype,"namespaces",void 0);I=C([b("w3m-list-wallet")],I);const $i=E`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var H=function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const Pi=60;let O=class extends x{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=F.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(t){if(t.has("history")){const i=this.history;this.historyState!==""&&this.historyState!==i&&this.onViewChange(i)}t.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),t.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var t;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(i=>{var n;for(const o of i)if(o.target===this.getWrapper()){let s=o.contentRect.height;const r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){const a=((n=window.visualViewport)==null?void 0:n.height)||window.innerHeight,m=this.getHeaderHeight();s=a-m-r,this.style.setProperty("--local-border-bottom-radius","0px")}else s=s+r,this.style.setProperty("--local-border-bottom-radius",r?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${s}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${s}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var i;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),(i=window.visualViewport)==null||i.removeEventListener("resize",this.onViewportResize)}render(){return l`
      <div class="container" data-mobile-fullscreen="${y(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${y(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(t){const i=t.split(",").filter(Boolean),n=this.historyState.split(",").filter(Boolean),o=n.length,s=i.length,r=i[i.length-1]||"",a=Re.cssDurationToNumber(this.transitionDuration);let m="";s>o?m="next":s<o?m="prev":s===o&&i[s-1]!==n[o-1]&&(m="next"),this.viewDirection=`${m}-${r}`,setTimeout(()=>{var v;this.historyState=t,(v=this.setView)==null||v.call(this,r)},a),setTimeout(()=>{this.viewDirection=""},a*2)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.page")}updateContainerHeight(){var o;const t=this.getWrapper();if(!t)return;const i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let n=0;if(this.mobileFullScreen){const s=((o=window.visualViewport)==null?void 0:o.height)||window.innerHeight,r=this.getHeaderHeight();n=s-r-i,this.style.setProperty("--local-border-bottom-radius","0px")}else n=t.getBoundingClientRect().height+i,this.style.setProperty("--local-border-bottom-radius",i?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${n}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${n}px`}getHeaderHeight(){return Pi}};O.styles=[$i];H([p({type:String})],O.prototype,"transitionDuration",void 0);H([p({type:String})],O.prototype,"transitionFunction",void 0);H([p({type:String})],O.prototype,"history",void 0);H([p({type:String})],O.prototype,"view",void 0);H([p({attribute:!1})],O.prototype,"setView",void 0);H([u()],O.prototype,"viewDirection",void 0);H([u()],O.prototype,"historyState",void 0);H([u()],O.prototype,"previousHeight",void 0);H([u()],O.prototype,"mobileFullScreen",void 0);O=H([b("w3m-router-container")],O);export{Je as AppKitModal,I as W3mListWallet,Ze as W3mModal,D as W3mModalBase,O as W3mRouterContainer,_e as W3mUsageExceededView};
//# sourceMappingURL=w3m-modal-CzQqMCI_.js.map
