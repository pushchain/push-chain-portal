import{dl as p,dm as u}from"./main-DmnxHr29.js";import{n as d}from"./class-map-CjR1iay9.js";import{c as m,r as f,a as h}from"./index-B_qPYZGD.js";const g=m`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:t})=>t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }
`;var c=function(t,r,o,a){var n=arguments.length,e=n<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,o):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,r,o,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(e=(n<3?s(e):n>3?s(r,o,e):s(r,o))||e);return n>3&&e&&Object.defineProperty(r,o,e),e};let i=class extends p{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,u`${this.template()}`}template(){return this.text?u`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};i.styles=[f,g];c([d()],i.prototype,"text",void 0);c([d()],i.prototype,"bgColor",void 0);i=c([h("wui-separator")],i);
//# sourceMappingURL=index-Cop285aN.js.map
