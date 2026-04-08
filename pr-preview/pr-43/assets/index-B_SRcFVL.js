import{ea as ye,dl as oe,dm as w,d3 as pe,eb as F,d5 as xe,dq as Fe,db as Re,d4 as Ne,dt as Le,du as je}from"./main-DWrAXkpk.js";import{n as I,r as Q}from"./class-map-DVW3Bpky.js";import{U as Te,c as se,a as ae,r as Ce}from"./index-BUyzbxfj.js";import"./index-CEAn6Hw0.js";import"./index-DZGbFBFZ.js";import{o as ke}from"./if-defined-BodNwq5H.js";import"./index-BXjuGMlu.js";import"./index-NTuiRovd.js";var me={exports:{}},ze=me.exports,Ie;function Ue(){return Ie||(Ie=1,(function(e,t){(function(i,r){e.exports=r()})(ze,(function(){var i=1e3,r=6e4,o=36e5,n="millisecond",s="second",u="minute",g="hour",p="day",y="week",$="month",j="quarter",D="year",R="date",Y="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ee=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var l=["th","st","nd","rd"],a=h%100;return"["+h+(l[(a-20)%10]||l[a]||l[0])+"]"}},ie=function(h,l,a){var d=String(h);return!d||d.length>=l?h:""+Array(l+1-d.length).join(a)+h},q={s:ie,z:function(h){var l=-h.utcOffset(),a=Math.abs(l),d=Math.floor(a/60),c=a%60;return(l<=0?"+":"-")+ie(d,2,"0")+":"+ie(c,2,"0")},m:function h(l,a){if(l.date()<a.date())return-h(a,l);var d=12*(a.year()-l.year())+(a.month()-l.month()),c=l.clone().add(d,$),m=a-c<0,f=l.clone().add(d+(m?-1:1),$);return+(-(d+(a-c)/(m?c-f:f-c))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:$,y:D,w:y,d:p,D:R,h:g,m:u,s,ms:n,Q:j}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},S="en",O={};O[S]=te;var V="$isDayjsObject",B=function(h){return h instanceof le||!(!h||!h[V])},ce=function h(l,a,d){var c;if(!l)return S;if(typeof l=="string"){var m=l.toLowerCase();O[m]&&(c=m),a&&(O[m]=a,c=m);var f=l.split("-");if(!c&&f.length>1)return h(f[0])}else{var v=l.name;O[v]=l,c=v}return!d&&c&&(S=c),c||!d&&S},_=function(h,l){if(B(h))return h.clone();var a=typeof l=="object"?l:{};return a.date=h,a.args=arguments,new le(a)},x=q;x.l=ce,x.i=B,x.w=function(h,l){return _(h,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var le=(function(){function h(a){this.$L=ce(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[V]=!0}var l=h.prototype;return l.parse=function(a){this.$d=(function(d){var c=d.date,m=d.utc;if(c===null)return new Date(NaN);if(x.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var f=c.match(X);if(f){var v=f[2]-1||0,b=(f[7]||"0").substring(0,3);return m?new Date(Date.UTC(f[1],v,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)):new Date(f[1],v,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)}}return new Date(c)})(a),this.init()},l.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},l.$utils=function(){return x},l.isValid=function(){return this.$d.toString()!==Y},l.isSame=function(a,d){var c=_(a);return this.startOf(d)<=c&&c<=this.endOf(d)},l.isAfter=function(a,d){return _(a)<this.startOf(d)},l.isBefore=function(a,d){return this.endOf(d)<_(a)},l.$g=function(a,d,c){return x.u(a)?this[d]:this.set(c,a)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(a,d){var c=this,m=!!x.u(d)||d,f=x.p(a),v=function(W,A){var z=x.w(c.$u?Date.UTC(c.$y,A,W):new Date(c.$y,A,W),c);return m?z:z.endOf(p)},b=function(W,A){return x.w(c.toDate()[W].apply(c.toDate("s"),(m?[0,0,0,0]:[23,59,59,999]).slice(A)),c)},T=this.$W,M=this.$M,C=this.$D,J="set"+(this.$u?"UTC":"");switch(f){case D:return m?v(1,0):v(31,11);case $:return m?v(1,M):v(0,M+1);case y:var P=this.$locale().weekStart||0,re=(T<P?T+7:T)-P;return v(m?C-re:C+(6-re),M);case p:case R:return b(J+"Hours",0);case g:return b(J+"Minutes",1);case u:return b(J+"Seconds",2);case s:return b(J+"Milliseconds",3);default:return this.clone()}},l.endOf=function(a){return this.startOf(a,!1)},l.$set=function(a,d){var c,m=x.p(a),f="set"+(this.$u?"UTC":""),v=(c={},c[p]=f+"Date",c[R]=f+"Date",c[$]=f+"Month",c[D]=f+"FullYear",c[g]=f+"Hours",c[u]=f+"Minutes",c[s]=f+"Seconds",c[n]=f+"Milliseconds",c)[m],b=m===p?this.$D+(d-this.$W):d;if(m===$||m===D){var T=this.clone().set(R,1);T.$d[v](b),T.init(),this.$d=T.set(R,Math.min(this.$D,T.daysInMonth())).$d}else v&&this.$d[v](b);return this.init(),this},l.set=function(a,d){return this.clone().$set(a,d)},l.get=function(a){return this[x.p(a)]()},l.add=function(a,d){var c,m=this;a=Number(a);var f=x.p(d),v=function(M){var C=_(m);return x.w(C.date(C.date()+Math.round(M*a)),m)};if(f===$)return this.set($,this.$M+a);if(f===D)return this.set(D,this.$y+a);if(f===p)return v(1);if(f===y)return v(7);var b=(c={},c[u]=r,c[g]=o,c[s]=i,c)[f]||1,T=this.$d.getTime()+a*b;return x.w(T,this)},l.subtract=function(a,d){return this.add(-1*a,d)},l.format=function(a){var d=this,c=this.$locale();if(!this.isValid())return c.invalidDate||Y;var m=a||"YYYY-MM-DDTHH:mm:ssZ",f=x.z(this),v=this.$H,b=this.$m,T=this.$M,M=c.weekdays,C=c.months,J=c.meridiem,P=function(A,z,ne,de){return A&&(A[z]||A(d,m))||ne[z].slice(0,de)},re=function(A){return x.s(v%12||12,A,"0")},W=J||function(A,z,ne){var de=A<12?"AM":"PM";return ne?de.toLowerCase():de};return m.replace(ee,(function(A,z){return z||(function(ne){switch(ne){case"YY":return String(d.$y).slice(-2);case"YYYY":return x.s(d.$y,4,"0");case"M":return T+1;case"MM":return x.s(T+1,2,"0");case"MMM":return P(c.monthsShort,T,C,3);case"MMMM":return P(C,T);case"D":return d.$D;case"DD":return x.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return P(c.weekdaysMin,d.$W,M,2);case"ddd":return P(c.weekdaysShort,d.$W,M,3);case"dddd":return M[d.$W];case"H":return String(v);case"HH":return x.s(v,2,"0");case"h":return re(1);case"hh":return re(2);case"a":return W(v,b,!0);case"A":return W(v,b,!1);case"m":return String(b);case"mm":return x.s(b,2,"0");case"s":return String(d.$s);case"ss":return x.s(d.$s,2,"0");case"SSS":return x.s(d.$ms,3,"0");case"Z":return f}return null})(A)||f.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(a,d,c){var m,f=this,v=x.p(d),b=_(a),T=(b.utcOffset()-this.utcOffset())*r,M=this-b,C=function(){return x.m(f,b)};switch(v){case D:m=C()/12;break;case $:m=C();break;case j:m=C()/3;break;case y:m=(M-T)/6048e5;break;case p:m=(M-T)/864e5;break;case g:m=M/o;break;case u:m=M/r;break;case s:m=M/i;break;default:m=M}return c?m:x.a(m)},l.daysInMonth=function(){return this.endOf($).$D},l.$locale=function(){return O[this.$L]},l.locale=function(a,d){if(!a)return this.$L;var c=this.clone(),m=ce(a,d,!0);return m&&(c.$L=m),c},l.clone=function(){return x.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h})(),_e=le.prototype;return _.prototype=_e,[["$ms",n],["$s",s],["$m",u],["$H",g],["$W",p],["$M",$],["$y",D],["$D",R]].forEach((function(h){_e[h[1]]=function(l){return this.$g(l,h[0],h[1])}})),_.extend=function(h,l){return h.$i||(h(l,le,_),h.$i=!0),_},_.locale=ce,_.isDayjs=B,_.unix=function(h){return _(1e3*h)},_.en=O[S],_.Ls=O,_.p={},_}))})(me)),me.exports}var Ee=Ue();const K=ye(Ee);var fe={exports:{}},Ye=fe.exports,Me;function qe(){return Me||(Me=1,(function(e,t){(function(i,r){e.exports=r()})(Ye,(function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var r=["th","st","nd","rd"],o=i%100;return"["+i+(r[(o-20)%10]||r[o]||r[0])+"]"}}}))})(fe)),fe.exports}var Be=qe();const Pe=ye(Be);var ge={exports:{}},We=ge.exports,Se;function He(){return Se||(Se=1,(function(e,t){(function(i,r){e.exports=r()})(We,(function(){return function(i,r,o){i=i||{};var n=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function u(p,y,$,j){return n.fromToBase(p,y,$,j)}o.en.relativeTime=s,n.fromToBase=function(p,y,$,j,D){for(var R,Y,X,ee=$.$locale().relativeTime||s,te=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ie=te.length,q=0;q<ie;q+=1){var S=te[q];S.d&&(R=j?o(p).diff($,S.d,!0):$.diff(p,S.d,!0));var O=(i.rounding||Math.round)(Math.abs(R));if(X=R>0,O<=S.r||!S.r){O<=1&&q>0&&(S=te[q-1]);var V=ee[S.l];D&&(O=D(""+O)),Y=typeof V=="string"?V.replace("%d",O):V(O,y,S.l,X);break}}if(y)return Y;var B=X?ee.future:ee.past;return typeof B=="function"?B(Y):B.replace("%s",Y)},n.to=function(p,y){return u(p,y,this,!0)},n.from=function(p,y){return u(p,y,this)};var g=function(p){return p.$u?o.utc():o()};n.toNow=function(p){return this.to(g(this),p)},n.fromNow=function(p){return this.from(g(this),p)}}}))})(ge)),ge.exports}var Ge=He();const Ve=ye(Ge);var we={exports:{}},Je=we.exports,Oe;function Ze(){return Oe||(Oe=1,(function(e,t){(function(i,r){e.exports=r()})(Je,(function(){return function(i,r,o){o.updateLocale=function(n,s){var u=o.Ls[n];if(u)return(s?Object.keys(s):[]).forEach((function(g){u[g]=s[g]})),u}}}))})(we)),we.exports}var Ke=Ze();const Qe=ye(Ke);K.extend(Ve);K.extend(Qe);const Xe={...Pe,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},et=["January","February","March","April","May","June","July","August","September","October","November","December"];K.locale("en-web3-modal",Xe);const $e={getMonthNameByIndex(e){return et[e]},getYear(e=new Date().toISOString()){return K(e).year()},getRelativeDateFromNow(e){return K(e).locale("en-web3-modal").fromNow(!0)},formatDate(e,t="DD MMM"){return K(e).format(t)}},tt=3,he=.1,it=["receive","deposit","borrow","claim"],rt=["withdraw","repay","burn"],Z={getTransactionGroupTitle(e,t){const i=$e.getYear(),r=$e.getMonthNameByIndex(t);return e===i?r:`${r} ${e}`},getTransactionImages(e){const[t]=e;return(e==null?void 0:e.length)>1?e.map(r=>this.getTransactionImage(r)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:Z.getTransactionTransferTokenType(e),url:Z.getTransactionImageURL(e)}},getTransactionImageURL(e){var o,n,s,u,g;let t;const i=!!(e!=null&&e.nft_info),r=!!(e!=null&&e.fungible_info);return e&&i?t=(s=(n=(o=e==null?void 0:e.nft_info)==null?void 0:o.content)==null?void 0:n.preview)==null?void 0:s.url:e&&r&&(t=(g=(u=e==null?void 0:e.fungible_info)==null?void 0:u.icon)==null?void 0:g.url),t},getTransactionTransferTokenType(e){if(e!=null&&e.fungible_info)return"FUNGIBLE";if(e!=null&&e.nft_info)return"NFT"},getTransactionDescriptions(e,t){var j;const i=(j=e==null?void 0:e.metadata)==null?void 0:j.operationType,r=t||(e==null?void 0:e.transfers),o=r&&r.length>0,n=r&&r.length>1,s=o&&r.every(D=>!!(D!=null&&D.fungible_info)),[u,g]=r||[];let p=this.getTransferDescription(u),y=this.getTransferDescription(g);if(!o)return(i==="send"||i==="receive")&&s?(p=Te.getTruncateString({string:e==null?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),y=Te.getTruncateString({string:e==null?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[p,y]):[e.metadata.status];if(n)return r==null?void 0:r.map(D=>this.getTransferDescription(D));let $="";return it.includes(i)?$="+":rt.includes(i)&&($="-"),p=$.concat(p),[p]},getTransferDescription(e){var i;let t="";return e&&(e!=null&&e.nft_info?t=((i=e==null?void 0:e.nft_info)==null?void 0:i.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var r;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(r=e==null?void 0:e.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},mergeTransfers(e){if((e==null?void 0:e.length)<=1)return e;const i=this.filterGasFeeTransfers(e).reduce((o,n)=>{var g;const s=(g=n==null?void 0:n.fungible_info)==null?void 0:g.name,u=o.find(({fungible_info:p,direction:y})=>s&&s===(p==null?void 0:p.name)&&y===n.direction);if(u){const p=Number(u.quantity.numeric)+Number(n.quantity.numeric);u.quantity.numeric=p.toString(),u.value=(u.value||0)+(n.value||0)}else o.push(n);return o},[]);let r=i;return i.length>2&&(r=i.sort((o,n)=>(n.value||0)-(o.value||0)).slice(0,2)),r=r.sort((o,n)=>o.direction==="out"&&n.direction==="in"?-1:o.direction==="in"&&n.direction==="out"?1:0),r},filterGasFeeTransfers(e){const t=e==null?void 0:e.reduce((r,o)=>{var s;const n=(s=o==null?void 0:o.fungible_info)==null?void 0:s.name;return n&&(r[n]||(r[n]=[]),r[n].push(o)),r},{}),i=[];return Object.values(t??{}).forEach(r=>{if(r.length===1){const o=r[0];o&&i.push(o)}else{const o=r.filter(s=>s.direction==="in"),n=r.filter(s=>s.direction==="out");if(o.length===1&&n.length===1){const s=o[0],u=n[0];let g=!1;if(s&&u){const p=Number(s.quantity.numeric),y=Number(u.quantity.numeric);y<p*he?(i.push(s),g=!0):p<y*he&&(i.push(u),g=!0)}g||i.push(...r)}else{const s=this.filterGasFeesFromTokenGroup(r);i.push(...s)}}}),e==null||e.forEach(r=>{var o;(o=r==null?void 0:r.fungible_info)!=null&&o.name||i.push(r)}),i},filterGasFeesFromTokenGroup(e){if(e.length<=1)return e;const t=e==null?void 0:e.map(u=>Number(u.quantity.numeric)),i=Math.max(...t),r=Math.min(...t),o=.01;if(r<i*o)return e==null?void 0:e.filter(g=>Number(g.quantity.numeric)>=i*o);const n=e==null?void 0:e.filter(u=>u.direction==="in"),s=e==null?void 0:e.filter(u=>u.direction==="out");if(n.length===1&&s.length===1){const u=n[0],g=s[0];if(u&&g){const p=Number(u.quantity.numeric),y=Number(g.quantity.numeric);if(y<p*he)return[u];if(p<y*he)return[g]}}return e},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(tt):null}};var be;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(be||(be={}));const nt=se`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var U=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let N=class extends oe{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(t){return i=>{i.stopPropagation(),this.failedImageUrls.add(t),this.requestUpdate()}}render(){const[t,i]=this.images;this.images.length||(this.dataset.noImages="true");const r=(t==null?void 0:t.type)==="NFT",o=i!=null&&i.url?i.type==="NFT":r,n=r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",s=o?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${s};
    `,w`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images;return this.images.length===2&&(t!=null&&t.url||i!=null&&i.url)?this.renderSwapImages(t,i):t!=null&&t.url&&!this.failedImageUrls.has(t.url)?this.renderSingleImage(t):(t==null?void 0:t.type)==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(t,i){return w`<div class="swap-images-container">
      ${t!=null&&t.url?this.renderImageOrFallback(t,"first",!0):null}
      ${i!=null&&i.url?this.renderImageOrFallback(i,"last",!0):null}
    </div>`}renderSingleImage(t){return this.renderImageOrFallback(t,void 0,!1)}renderImageOrFallback(t,i,r=!1){return t.url?this.failedImageUrls.has(t.url)?r&&i?this.renderFallbackIconInContainer(i):this.renderFallbackIcon():w`<wui-image
      src=${t.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(t.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(t){return w`<div class="swap-fallback-container ${t}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return w`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(t){return w`<wui-icon size="xl" weight="regular" color="default" name=${t}></wui-icon>`}templateIcon(){let t="accent-primary",i;return i=this.getIcon(),this.status&&(t=this.getStatusColor()),i?w`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${i}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};N.styles=[nt];U([I()],N.prototype,"type",void 0);U([I()],N.prototype,"status",void 0);U([I()],N.prototype,"direction",void 0);U([I({type:Boolean})],N.prototype,"onlyDirectionIcon",void 0);U([I({type:Array})],N.prototype,"images",void 0);U([I({type:Object})],N.prototype,"secondImage",void 0);U([Q()],N.prototype,"failedImageUrls",void 0);N=U([ae("wui-transaction-visual")],N);const ot=se`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var E=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let L=class extends oe{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return w`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${ke(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${be[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[0];return t?w`
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[1];return t?w`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}};L.styles=[Ce,ot];E([I()],L.prototype,"type",void 0);E([I({type:Array})],L.prototype,"descriptions",void 0);E([I()],L.prototype,"date",void 0);E([I({type:Boolean})],L.prototype,"onlyDirectionIcon",void 0);E([I()],L.prototype,"status",void 0);E([I()],L.prototype,"direction",void 0);E([I({type:Array})],L.prototype,"images",void 0);L=E([ae("wui-transaction-list-item")],L);const st=se`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var ue=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const ve={sm:"xxs",lg:"md"};let H=class extends oe{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return w`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,i]=this.images;return this.images.length===2&&(t||i)?w`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:t?w`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return w`<wui-icon
      class="fallback-icon"
      size=${ve[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return w`<wui-icon
      class="fallback-icon"
      size=${ve[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?w`<wui-image src=${t} alt="Token image"></wui-image> `:w`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?w`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:w`<wui-icon
      class="direction-icon"
      size=${ve[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};H.styles=[st];ue([I()],H.prototype,"type",void 0);ue([I()],H.prototype,"size",void 0);ue([I()],H.prototype,"statusImageUrl",void 0);ue([I({type:Array})],H.prototype,"images",void 0);H=ue([ae("wui-transaction-thumbnail")],H);const at=se`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var ut=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let De=class extends oe{render(){return w`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};De.styles=[Ce,at];De=ut([ae("wui-transaction-list-item-loader")],De);const ct=se`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var G=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const Ae="last-transaction",lt=7;let k=class extends oe{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=pe.state.activeCaipAddress,this.transactionsByYear=F.state.transactionsByYear,this.loading=F.state.loading,this.empty=F.state.empty,this.next=F.state.next,F.clearCursor(),this.unsubscribe.push(pe.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(F.resetTransactions(),F.fetchTransactions(t)),this.caipAddress=t}),pe.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),F.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return w` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){F.resetTransactions(),this.caipAddress&&F.fetchTransactions(xe.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const r=parseInt(i,10),o=new Array(12).fill(null).map((n,s)=>{var p;const u=Z.getTransactionGroupTitle(r,s),g=(p=this.transactionsByYear[r])==null?void 0:p[s];return{groupTitle:u,transactions:g}}).filter(({transactions:n})=>n).reverse();return o.map(({groupTitle:n,transactions:s},u)=>{const g=u===o.length-1;return s?w`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${g?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${n}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(s,g)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:r,descriptions:o,direction:n,images:s,status:u,type:g,transfers:p,isAllNFT:y}=this.getTransactionListItemProps(t);return w`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${i&&this.next?Ae:""}
        status=${u}
        type=${g}
        .images=${s}
        .onlyDirectionIcon=${y||p.length===1}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((r,o)=>{const n=i&&o===t.length-1;return w`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return w`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return w`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?w`${this.emptyStateAccount()}`:w`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?w` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(lt).fill(w` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){Fe.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=Re.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(F.fetchTransactions(xe.getPlainAddress(this.caipAddress)),Ne.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:xe.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:Le(pe.state.activeChain)===je.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,r,o;(i=this.paginationObserver)==null||i.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${Ae}`);t&&((o=this.paginationObserver)==null||o.observe(t))}getTransactionListItemProps(t){var g,p,y;const i=$e.formatDate((g=t==null?void 0:t.metadata)==null?void 0:g.minedAt),r=Z.mergeTransfers((t==null?void 0:t.transfers)||[]),o=Z.getTransactionDescriptions(t,r),n=r==null?void 0:r[0],s=!!n&&(r==null?void 0:r.every($=>!!$.nft_info)),u=Z.getTransactionImages(r);return{date:i,direction:n==null?void 0:n.direction,descriptions:o,isAllNFT:s,images:u,status:(p=t.metadata)==null?void 0:p.status,transfers:r,type:(y=t.metadata)==null?void 0:y.operationType}}};k.styles=ct;G([I()],k.prototype,"page",void 0);G([Q()],k.prototype,"caipAddress",void 0);G([Q()],k.prototype,"transactionsByYear",void 0);G([Q()],k.prototype,"loading",void 0);G([Q()],k.prototype,"empty",void 0);G([Q()],k.prototype,"next",void 0);k=G([ae("w3m-activity-list")],k);
//# sourceMappingURL=index-B_SRcFVL.js.map
