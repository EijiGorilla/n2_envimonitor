"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[5164],{85164:(e,t,r)=>{r.r(t),r.d(t,{createSymbolSchema:()=>i});var a=r(78915),n=r(80613),l=r(54815);function s(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null===(t=e.color)||void 0===t?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return(0,l.hF)(e)}function i(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,r){const a=(0,l.jj)(n.LW.FILL,t),i=r?o(a):a,c=e.clone(),m=c.outline,h=(0,l.jy)(t.symbologyType);h||(c.outline=null);const u={materialKey:i,hash:c.hash(),...s(c)};if(h)return u;const y=[];if(y.push(u),m){const e=(0,l.jj)(n.LW.LINE,{...t,isOutline:!0}),a={materialKey:r?o(e):e,hash:m.hash(),...s(m)};y.push(a)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,t)=>t.hash+e),"")}}(e,t,r);case"simple-marker":case"picture-marker":return function(e,t,r){if("simple-marker"===e.type&&("path"===e.style||e.outline&&"solid"!==e.outline.style&&"none"!==e.outline.style))return i({type:"CIMSymbolReference",symbol:a.B$.fromSimpleMarker(e)},t,r);const c=(0,l.jj)(n.LW.MARKER,t),m=r?o(c):c,h=s(e);return{materialKey:m,hash:e.hash(),...h,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"simple-line":return function(e,t,r){const a=(0,l.jy)(t.symbologyType)?n.mD.DEFAULT:t.symbologyType,i=(0,l.jj)(n.LW.LINE,{...t,symbologyType:a}),c=r?o(i):i,m=e.clone(),h=m.marker;m.marker=null;const u=[];if(u.push({materialKey:c,hash:m.hash(),...s(m)}),h){var y;const e=(0,l.jj)(n.LW.MARKER,t),a=r?o(e):e;h.color=null!==(y=h.color)&&void 0!==y?y:m.color,u.push({materialKey:a,hash:h.hash(),lineWidth:m.width,...s(h)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}(e,t,r);case"text":return function(e,t,r){const a=(0,l.jj)(n.LW.TEXT,t),i=r?o(a):a,c=s(e);return{materialKey:i,hash:e.hash(),...c,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"label":return function(e,t,r){const a=e.toJSON(),s=(0,l.jj)(n.LW.LABEL,{...t,placement:a.labelPlacement});return{materialKey:r?o(s):s,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error("symbol not supported ".concat(e.type))}}}}]);
//# sourceMappingURL=5164.05717116.chunk.js.map