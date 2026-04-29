import{dD as k,dl as W,dm as v}from"./main-DmnxHr29.js";import{n as y}from"./class-map-CjR1iay9.js";import{c as I,r as M,a as O}from"./index-B_qPYZGD.js";import"./index-QdJMk1al.js";import{Q as N}from"./browser-CPHz8H5w.js";const Q=.1,_=2.5,$=7;function x(t,a,d){return t===a?!1:(t-a<0?a-t:t-a)<=d+Q}function A(t,a){const d=Array.prototype.slice.call(N.create(t,{errorCorrectionLevel:a}).modules.data,0),l=Math.sqrt(d.length);return d.reduce((h,f,p)=>(p%l===0?h.push([f]):h[h.length-1].push(f))&&h,[])}const q={generate({uri:t,size:a,logoSize:d,padding:l=8,dotColor:h="var(--apkt-colors-black)"}){const p=[],u=A(t,"Q"),n=(a-2*l)/u.length,E=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];E.forEach(({x:i,y:e})=>{const s=(u.length-$)*n*i+l,r=(u.length-$)*n*e+l,c=.45;for(let o=0;o<E.length;o+=1){const m=n*($-o*2);p.push(k`
            <rect
              fill=${o===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${o===0?m-10:m}
              rx= ${o===0?(m-10)*c:m*c}
              ry= ${o===0?(m-10)*c:m*c}
              stroke=${h}
              stroke-width=${o===0?10:0}
              height=${o===0?m-10:m}
              x= ${o===0?r+n*o+10/2:r+n*o}
              y= ${o===0?s+n*o+10/2:s+n*o}
            />
          `)}});const R=Math.floor((d+25)/n),S=u.length/2-R/2,z=u.length/2+R/2-1,C=[];u.forEach((i,e)=>{i.forEach((s,r)=>{if(u[e][r]&&!(e<$&&r<$||e>u.length-($+1)&&r<$||e<$&&r>u.length-($+1))&&!(e>S&&e<z&&r>S&&r<z)){const c=e*n+n/2+l,o=r*n+n/2+l;C.push([c,o])}})});const b={};return C.forEach(([i,e])=>{var s;b[i]?(s=b[i])==null||s.push(e):b[i]=[e]}),Object.entries(b).map(([i,e])=>{const s=e.filter(r=>e.every(c=>!x(r,c,n)));return[Number(i),s]}).forEach(([i,e])=>{e.forEach(s=>{p.push(k`<circle cx=${i} cy=${s} fill=${h} r=${n/_} />`)})}),Object.entries(b).filter(([i,e])=>e.length>1).map(([i,e])=>{const s=e.filter(r=>e.some(c=>x(r,c,n)));return[Number(i),s]}).map(([i,e])=>{e.sort((r,c)=>r<c?-1:1);const s=[];for(const r of e){const c=s.find(o=>o.some(m=>x(r,m,n)));c?c.push(r):s.push([r])}return[i,s.map(r=>[r[0],r[r.length-1]])]}).forEach(([i,e])=>{e.forEach(([s,r])=>{p.push(k`
              <line
                x1=${i}
                x2=${i}
                y1=${s}
                y2=${r}
                stroke=${h}
                stroke-width=${n/(_/2)}
                stroke-linecap="round"
              />
            `)})}),p}},D=I`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:t})=>t.white};
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:t})=>t[4]};
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
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:t})=>t[2]};
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
`;var w=function(t,a,d,l){var h=arguments.length,f=h<3?a:l===null?l=Object.getOwnPropertyDescriptor(a,d):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(t,a,d,l);else for(var u=t.length-1;u>=0;u--)(p=t[u])&&(f=(h<3?p(f):h>3?p(a,d,f):p(a,d))||f);return h>3&&f&&Object.defineProperty(a,d,f),f};let g=class extends W{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),v`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return k`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${q.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?v`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?v`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:v`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};g.styles=[M,D];w([y()],g.prototype,"uri",void 0);w([y({type:Number})],g.prototype,"size",void 0);w([y()],g.prototype,"theme",void 0);w([y()],g.prototype,"imageSrc",void 0);w([y()],g.prototype,"alt",void 0);w([y({type:Boolean})],g.prototype,"arenaClear",void 0);w([y({type:Boolean})],g.prototype,"farcaster",void 0);g=w([O("wui-qr-code")],g);
//# sourceMappingURL=index-DEFLv8HV.js.map
