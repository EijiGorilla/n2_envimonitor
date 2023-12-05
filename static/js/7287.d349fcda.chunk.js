/*! For license information please see 7287.d349fcda.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[7287],{97287:(t,n,a)=>{a.r(n),a.d(n,{CalciteGraph:()=>c,defineCustomElement:()=>e});var i=a(29849);const c=i.G,e=i.d},29849:(t,n,a)=>{a.d(n,{G:()=>r,d:()=>l});var i=a(51554),c=a(14387),e=a(72021);function h(t,n,a){const i=n[0]-t[0],c=n[1]-t[1];return i?(3*c/i-a)/2:a}function o(t,n,a,i,c){const[e,h]=t,[o,s]=n,r=(o-e)/3,l=c([e+r,h+r*a]).join(","),d=c([o-r,s-r*i]).join(","),g=c([o,s]).join(",");return"C ".concat(l," ").concat(d," ").concat(g)}function s(t){let{data:n,min:a,max:i,t:c}=t;if(0===n.length)return"";const[e,s]=c(n[0]),[r,l]=c(a),[d]=c(i);let g,p,m;const u=n.reduce(((t,a,i)=>{if(p=n[i-2],m=n[i-1],i>1){const n=function(t,n,a){const i=n[0]-t[0],c=a[0]-n[0],e=(n[1]-t[1])/(i||c<0&&0),h=(a[1]-n[1])/(c||i<0&&0),o=(e*c+h*i)/(i+c);return(Math.sign(e)+Math.sign(h))*Math.min(Math.abs(e),Math.abs(h),.5*Math.abs(o))||0}(p,m,a),i=void 0===g?h(p,m,n):g,e=o(p,m,i,n,c);return g=n,"".concat(t," ").concat(e)}return t}),"M ".concat(r,",").concat(l," L ").concat(r,",").concat(s," L ").concat(e,",").concat(s)),f=n[n.length-1],v=o(m,f,g,h(m,f,g),c);return"".concat(u," ").concat(v," L ").concat(d,",").concat(l," Z")}const r=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.graphId="calcite-graph-".concat((0,c.g)()),this.resizeObserver=(0,e.c)("resize",(()=>(0,i.xE)(this))),this.data=[],this.colorStops=void 0,this.highlightMin=void 0,this.highlightMax=void 0,this.min=void 0,this.max=void 0}connectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.observe(this.el)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const{data:t,colorStops:n,el:a,highlightMax:c,highlightMin:e,min:h,max:o}=this,r=this.graphId,{clientHeight:l,clientWidth:d}=a;if(!t||0===t.length)return(0,i.h)("svg",{"aria-hidden":"true",class:"svg",height:l,preserveAspectRatio:"none",viewBox:"0 0 ".concat(d," ").concat(l),width:d});const{min:g,max:p}=function(t){const[n,a]=t[0],i=[n,a],c=[n,a];return t.reduce(((t,n)=>{let{min:a,max:i}=t,[c,e]=n;return{min:[Math.min(a[0],c),Math.min(a[1],e)],max:[Math.max(i[0],c),Math.max(i[1],e)]}}),{min:i,max:c})}(t);let m=g,u=p;(h<g[0]||h>g[0])&&(m=[h,0]),(o>p[0]||o<p[0])&&(u=[o,p[1]]);const f=function(t){let{width:n,height:a,min:i,max:c}=t;const e=c[0]-i[0],h=c[1]-i[1];return t=>[(t[0]-i[0])/e*n,a-t[1]/h*a]}({min:m,max:u,width:d,height:l}),[v]=f([e,u[1]]),[x]=f([c,u[1]]),M=s({data:t,min:g,max:p,t:f}),k=n?"url(#linear-gradient-".concat(r,")"):void 0;return(0,i.h)("svg",{"aria-hidden":"true",class:"svg",height:l,preserveAspectRatio:"none",viewBox:"0 0 ".concat(d," ").concat(l),width:d},n?(0,i.h)("defs",null,(0,i.h)("linearGradient",{id:"linear-gradient-".concat(r),x1:"0",x2:"1",y1:"0",y2:"0"},n.map((t=>{let{offset:n,color:a,opacity:c}=t;return(0,i.h)("stop",{offset:"".concat(100*n,"%"),"stop-color":a,"stop-opacity":c})})))):null,void 0!==e?[(0,i.h)("mask",{height:"100%",id:"".concat(r,"1"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n            M 0,0\n            L ".concat(v-1,",0\n            L ").concat(v-1,",").concat(l,"\n            L 0,").concat(l,"\n            Z\n          "),fill:"white"})),(0,i.h)("mask",{height:"100%",id:"".concat(r,"2"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n            M ".concat(v+1,",0\n            L ").concat(x-1,",0\n            L ").concat(x-1,",").concat(l,"\n            L ").concat(v+1,", ").concat(l,"\n            Z\n          "),fill:"white"})),(0,i.h)("mask",{height:"100%",id:"".concat(r,"3"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n                M ".concat(x+1,",0\n                L ").concat(d,",0\n                L ").concat(d,",").concat(l,"\n                L ").concat(x+1,", ").concat(l,"\n                Z\n              "),fill:"white"})),(0,i.h)("path",{class:"graph-path",d:M,fill:k,mask:"url(#".concat(r,"1)")}),(0,i.h)("path",{class:"graph-path--highlight",d:M,fill:k,mask:"url(#".concat(r,"2)")}),(0,i.h)("path",{class:"graph-path",d:M,fill:k,mask:"url(#".concat(r,"3)")})]:(0,i.h)("path",{class:"graph-path",d:M,fill:k}))}get el(){return this}static get style(){return":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-graph",{data:[16],colorStops:[16],highlightMin:[2,"highlight-min"],highlightMax:[2,"highlight-max"],min:[514],max:[514]}]);function l(){if("undefined"===typeof customElements)return;["calcite-graph"].forEach((t=>{if("calcite-graph"===t)customElements.get(t)||customElements.define(t,r)}))}l()}}]);
//# sourceMappingURL=7287.d349fcda.chunk.js.map