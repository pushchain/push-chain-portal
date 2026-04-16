import{d3 as l,d4 as g,dq as h,dy as m,d6 as w,d5 as c,dG as _,dH as E,ds as R,dl as y,dm as b}from"./main-DydtRt0H.js";import{n as d}from"./class-map-C3eRGC1L.js";import{o as O}from"./if-defined-BV2jFcU6.js";import{c as v,r as C,a as S,e as $}from"./index-DBuGTc5K.js";function I(){try{return c.returnOpenHref(`${R.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function L(){h.push("ConnectingFarcaster");const e=m.getAuthConnector();if(e){const o=l.getAccountData();if(!(o!=null&&o.farcasterUrl))try{const{url:t}=await e.provider.getFarcasterUri();l.setAccountProp("farcasterUrl",t,l.state.activeChain)}catch(t){h.goBack(),w.showError(t)}}}async function T(e){h.push("ConnectingSocial");const o=m.getAuthConnector();let t=null;try{const i=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(o&&e){if(c.isTelegram()||(t=I()),t)l.setAccountProp("socialWindow",_(t),l.state.activeChain);else if(!c.isTelegram())throw new Error("Could not create social popup");const{uri:n}=await o.provider.getSocialRedirectUri({provider:e});if(!n)throw t==null||t.close(),new Error("Could not fetch the social redirect uri");if(t&&(t.location.href=n),c.isTelegram()){E.setTelegramSocialProvider(e);const r=c.formatTelegramSocialLoginUrl(n);c.openHref(r,"_top")}clearTimeout(i)}}catch(i){t==null||t.close();const n=c.parseError(i);w.showError(n),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:n}})}}async function H(e){l.setAccountProp("socialProvider",e,l.state.activeChain),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await L():await T(e)}const U=v`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var x=function(e,o,t,i){var n=arguments.length,r=n<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(o,t,r):a(o,t))||r);return n>3&&r&&Object.defineProperty(o,t,r),r};let p=class extends y{constructor(){super(...arguments),this.logo="google"}render(){return b`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};p.styles=[C,U];x([d()],p.prototype,"logo",void 0);p=x([S("wui-logo")],p);const A=v`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var f=function(e,o,t,i){var n=arguments.length,r=n<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(o,t,r):a(o,t))||r);return n>3&&r&&Object.defineProperty(o,t,r),r};let u=class extends y{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return b`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};u.styles=[C,$,A];f([d()],u.prototype,"logo",void 0);f([d()],u.prototype,"name",void 0);f([d()],u.prototype,"tabIdx",void 0);f([d({type:Boolean})],u.prototype,"disabled",void 0);u=f([S("wui-list-social")],u);export{H as e};
//# sourceMappingURL=index-CQm-V-dp.js.map
