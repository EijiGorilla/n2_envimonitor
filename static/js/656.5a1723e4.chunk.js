"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[656],{80656:(e,n,t)=>{t.d(n,{fetchCIMSymbolReference:()=>u});var a=t(71277),l=t(10064),r=t(66978),o=t(35995),s=t(7575),i=t(53283),c=t(38048),m=t(19951);async function u(e,n,t){if(!e.name)throw new l.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,n){const a=c.wm.replaceAll(/\{SymbolName\}/gi,e.name);try{const e=await(0,c.EJ)(a,n);return(0,c.KV)(e.data)}catch(t){return(0,r.r9)(t),null}}(e,t);try{return async function(e,n,t,u){const y={portal:null!=(null===t||void 0===t?void 0:t.portal)?t.portal:s.Z.getDefault(),url:(0,o.mN)(e.baseUrl),origin:"portal-item"},f=(0,m.m)(n,e.data);if(!f)throw new l.Z("symbolstyleutils:symbol-name-not-found","The symbol name '".concat(n,"' could not be found"),{symbolName:n});let b=(0,i.f)((0,c.v9)(f,"cimRef"),y);(0,a.XO)()&&(b=(0,a.pJ)(b));try{const e=await(0,c.EJ)(b,u);return(0,c.KV)(e.data)}catch(h){return(0,r.r9)(h),null}}(await(0,c.n2)(e,n,t),e.name,n,t)}catch(u){return(0,r.r9)(u),null}}}}]);
//# sourceMappingURL=656.5a1723e4.chunk.js.map