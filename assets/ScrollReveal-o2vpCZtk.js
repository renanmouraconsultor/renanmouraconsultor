import{c as p,e as g,r as h,j as v,m}from"./index-Cz7SnfNY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=p("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=p("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),w={some:0,all:1};function I(n,s,{root:r,margin:o,amount:e="some"}={}){const l=g(n),a=new WeakMap,u=c=>{c.forEach(t=>{const f=a.get(t.target);if(t.isIntersecting!==!!f)if(t.isIntersecting){const d=s(t.target,t);typeof d=="function"?a.set(t.target,d):i.unobserve(t.target)}else typeof f=="function"&&(f(t),a.delete(t.target))})},i=new IntersectionObserver(u,{root:r,rootMargin:o,threshold:typeof e=="number"?e:w[e]});return l.forEach(c=>i.observe(c)),()=>i.disconnect()}function E(n,{root:s,margin:r,amount:o,once:e=!1,initial:l=!1}={}){const[a,u]=h.useState(l);return h.useEffect(()=>{if(!n.current||e&&a)return;const i=()=>(u(!0),e?void 0:()=>u(!1)),c={root:s&&s.current||void 0,margin:r,amount:o};return I(n.current,i,c)},[s,n,r,e,o]),a}function V({children:n,delay:s=0,className:r}){const o=h.useRef(null),e=E(o,{once:!0,margin:"-100px"});return v.jsx(m.div,{ref:o,initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.6,delay:s,ease:[.4,0,.2,1]},className:r,children:n})}export{b as A,V as S,y as W};
