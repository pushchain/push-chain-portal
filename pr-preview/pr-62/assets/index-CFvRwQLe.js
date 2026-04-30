import{dn as m,dl as f,dm as d}from"./main-B0lQGmkl.js";import{n as u}from"./class-map-BinPwY9T.js";import{o as c}from"./if-defined-G7rq2kHa.js";import{r as b,a as h}from"./index-D7y2e4zp.js";import"./index-DMJPMAS9.js";const v=m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var o=function(l,r,i,a){var s=arguments.length,e=s<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,r,i,a);else for(var p=l.length-1;p>=0;p--)(n=l[p])&&(e=(s<3?n(e):s>3?n(r,i,e):n(r,i))||e);return s>3&&e&&Object.defineProperty(r,i,e),e};let t=class extends f{constructor(){super(...arguments),this.disabled=!1}render(){return d`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${c(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?d`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};t.styles=[b,v];o([u()],t.prototype,"errorMessage",void 0);o([u({type:Boolean})],t.prototype,"disabled",void 0);o([u()],t.prototype,"value",void 0);o([u()],t.prototype,"tabIdx",void 0);t=o([h("wui-email-input")],t);
//# sourceMappingURL=index-CFvRwQLe.js.map
