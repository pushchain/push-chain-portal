import{dI as f,dJ as $,dm as b,dK as g}from"./main-BzOR0tEa.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:f},v=(t=m,e,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),n==="accessor"){const{name:i}=r;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,u,t,!0,a)},init(a){return a!==void 0&&this.C(i,void 0,t,a),a}}}if(n==="setter"){const{name:i}=r;return function(a){const u=this[i];e.call(this,a),this.requestUpdate(i,u,t,!0,a)}}throw Error("Unsupported decorator location: "+n)};function y(t){return(e,r)=>typeof r=="object"?v(t,e,r):((n,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),i?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(t){return y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),_=t=>{if((t==null?void 0:t.r)===p)return t==null?void 0:t._$litStatic$},U=t=>({_$litStatic$:t,r:p}),d=new Map,w=t=>(e,...r)=>{const n=r.length;let o,s;const i=[],a=[];let u,c=0,h=!1;for(;c<n;){for(u=e[c];c<n&&(s=r[c],(o=_(s))!==void 0);)u+=o+e[++c],h=!0;c!==n&&a.push(s),i.push(u),c++}if(c===n&&i.push(e[n]),h){const l=i.join("$$lit$$");(e=d.get(l))===void 0&&(i.raw=i,d.set(l,e=i)),r=a}return t(e,...r)},C=w(b);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T={ATTRIBUTE:1,CHILD:2},A=t=>(...e)=>({_$litDirective$:t,values:e});class j{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=A(class extends j{constructor(t){var e;if(super(t),t.type!==T.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const i=!!e[s];i===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(i?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return g}});export{E as a,A as e,j as i,y as n,S as r,U as s,T as t,C as u};
//# sourceMappingURL=class-map-CTL2kvde.js.map
