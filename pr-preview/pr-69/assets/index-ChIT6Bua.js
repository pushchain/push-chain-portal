import{di as m,dg as c,dh as d}from"./main-CMQyPyUF.js";import{n as u,o as f}from"./class-map-CRrv7RCZ.js";import{r as h,a as b}from"./index-BIAxeT5E.js";import"./index-Ciwdj98R.js";const v=m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var o=function(l,i,r,a){var s=arguments.length,e=s<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,r):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,i,r,a);else for(var p=l.length-1;p>=0;p--)(n=l[p])&&(e=(s<3?n(e):s>3?n(i,r,e):n(i,r))||e);return s>3&&e&&Object.defineProperty(i,r,e),e};let t=class extends c{constructor(){super(...arguments),this.disabled=!1}render(){return d`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${f(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?d`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};t.styles=[h,v];o([u()],t.prototype,"errorMessage",void 0);o([u({type:Boolean})],t.prototype,"disabled",void 0);o([u()],t.prototype,"value",void 0);o([u()],t.prototype,"tabIdx",void 0);t=o([b("wui-email-input")],t);
//# sourceMappingURL=index-ChIT6Bua.js.map
