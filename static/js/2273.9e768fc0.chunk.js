"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[2273],{63231:(e,t,n)=>{function i(e){return null!=l(e)||null!=o(e)}function s(e){return a.test(e)}function r(e){var t;return null!==(t=l(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!u.test(e[i]),i++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function l(e){var t,n,i,s;const r=a.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,l=+o.year,u=+o.month-1,c=+o.day,d=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(i=o.seconds)&&void 0!==i?i:"0");if(d>23)return null;if(p>59)return null;if(f>59)return null;const h=null!==(s=o.ms)&&void 0!==s?s:"0",m=h?+h.padEnd(3,"0").substring(0,3):0;let g;if(o.isUTC||!o.offsetSign)g=Date.UTC(l,u,c,d,p,f,m);else{const e=+o.offsetHours,t=+o.offsetMinutes;g=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(l,u,c,d,p,f,m)}return Number.isNaN(g)?null:g}n.d(t,{mu:()=>s,of:()=>i,sG:()=>r});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},29616:(e,t,n)=>{n.d(t,{Qc:()=>c,WU:()=>l,lt:()=>u});var i=n(643),s=n(36257);const r={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,s.Kd)(),t=(e=e.toLowerCase())in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,i,o="#,##0.###"]=r[e];return{decimal:n,group:i,pattern:o}}function l(e,t){const n=o((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const i=(n=n||{}).customs.group,s=n.customs.decimal,r=t.split(";"),o=r[0];if((t=r[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("\u2030"))e*=1e3;else{if(t.includes("\xa4"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const l=a,u=o.match(l);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(l,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;s?r=n.places.substring(s+1):+r>=0||(r=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(r))));const o=String(Math.abs(e)).split("."),l=o[1]||"";if(i[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;+e>l.length&&(o[1]=l.padEnd(Number(e),"0")),+r<l.length&&(o[1]=l.substr(0,Number(r)))}else o[1]&&o.pop();const a=i[0].replace(",","");let u=a.indexOf("0");-1!==u&&(u=a.length-u,u>o[0].length&&(o[0]=o[0].padStart(u,"0")),a.includes("#")||(o[0]=o[0].substr(o[0].length-u)));let c,d,p=i[0].lastIndexOf(",");if(-1!==p){c=i[0].length-p-1;const e=i[0].substr(0,p);p=e.lastIndexOf(","),-1!==p&&(d=e.length-p-1)}const f=[];for(let h=o[0];h;){const e=h.length-c;f.push(e>0?h.substr(e):h),h=e>0?h.slice(0,e):"",d&&(c=d,d=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}(e,u[0],{decimal:s,group:i,places:n.places,round:n.round}))}(e,i,t)}const a=/[#0,]*[#0](?:\.0*#*)?/;function u(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,s=t.group,r=t.decimal;let l=1;if(n.includes("%"))l/=100;else if(n.includes("\u2030"))l/=1e3;else if(n.includes("\xa4"))throw new Error("currency notation not supported");const u=n.split(";");1===u.length&&u.push("-"+u[0]);const c=p(u,(t=>(t="(?:"+(0,i.Qs)(t,".")+")").replace(a,(t=>{const n={signed:!1,separator:e.strict?s:[s,""],fractional:e.fractional,decimal:r,exponent:!1},i=t.split(".");let o=e.places;1===i.length&&1!==l&&(i[1]="###"),1===i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&+o<i[1].length&&(o+=","+i[1].length),n.places=o);const a=i[0].split(",");return a.length>1&&(n.groupSize=a.pop().length,a.length>1&&(n.groupSize2=a.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=p(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+p(e.exponent,(t=>t?"([eE]"+d({signed:e.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:c.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:r,factor:l}}function c(e,t){const n=u(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let s=i[1];if(!i[1]){if(!i[2])return NaN;s=i[2],n.factor*=-1}return s=s.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function d(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",p(e.signed,(e=>e?"[-+]":""),!0)+p(e.separator,(t=>{if(!t)return"(?:\\d+)";" "===(t=(0,i.Qs)(t))?t="\\s":"\xa0"===t&&(t="\\s\\xa0");const n=e.groupSize,s=e.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+t+"]\\d{"+s+"})*["+t+"]\\d{"+n+"})";return n-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const p=(e,t,n)=>{if(!(e instanceof Array))return t(e);const i=[];for(let s=0;s<e.length;s++)i.push(t(e[s]));return f(i.join("|"),Boolean(n))},f=(e,t)=>"("+(t?"?:":"")+e+")"},62273:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});n(59486);var i=n(76200),s=n(14921),r=n(63231),o=n(10064),l=n(32718),a=n(66978),u=n(35995),c=n(79803),d=n(40237),p=n(92975),f=n(81753),h=n(3182),m=n(80457),g=n(68928),y=n(19995),v=n(75878),N=n(29616),b=n(37270);const F=/^\s*"([\S\s]*)"\s*$/,x=/""/g,w="\n",I=[","," ",";","|","\t"];function*_(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+t.length,n&&!r.trim()||(yield r)}}function T(e){const t=e.includes("\r\n")?"\r\n":w;return _(e,t,!0)}function E(e,t){return _(e,t,!1)}function S(e,t,n){var i;e=e.trim(),t=null===(i=t)||void 0===i?void 0:i.trim();const s=[],r=Array.from(new Set([null===n||void 0===n?void 0:n.delimiter,...I])).filter((e=>null!=e));for(const a of r){var o;const n=q(e,a).length,i=null!==(o=q(t,a).length)&&void 0!==o?o:n;n>1&&s.push({weight:Math.min(n,i),delimiter:a})}const l=s.sort(((e,t)=>{let{weight:n}=e,{weight:i}=t;return i-n})).map((e=>{let{delimiter:t}=e;return t}));for(const a of l){const t=k(O(e,a).names,null===n||void 0===n?void 0:n.longitudeField,null===n||void 0===n?void 0:n.latitudeField);if(t.longitudeFieldName&&t.latitudeFieldName)return{delimiter:a,locationInfo:t}}return{delimiter:l[0],locationInfo:null}}function C(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>Object.create(null);return function*(){const s=T(e);s.next();let r="",o="",l=0,a=i(),u=0;e:for(const e of s){const s=E(e,n);for(const e of s)if(r+=o+e,o="",l+=D(e),l%2==0){if(l>0){const e=F.exec(r);if(!e){a=i(),u=0,r="",l=0;continue e}a[t[u]]=e[1].replaceAll(x,'"'),u++}else a[t[u]]=r,u++;r="",l=0}else o=n;0===l?(yield a,a=i(),u=0):o=w}}()}function O(e,t){const n=q(e,t).filter((e=>null!=e)),i=n.map((e=>(0,b.q6)(e)));for(let s=i.length-1;s>=0;s--)i[s]||(i.splice(s,1),n.splice(s,1));return{names:i,aliases:n}}function q(e,t){if(null===e||void 0===e||!e.length)return[];const n=[];let i="",s="",r=0;const o=E(e,t);for(const l of o)if(i+=s+l,s="",r+=D(l),r%2==0){if(r>0){const e=F.exec(i);e&&n.push(e[1].replaceAll(x,'"'))}else n.push(i);i="",r=0}else s=t;return n}function D(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function k(e,t,n){var i,s;t=null===(i=(0,b.q6)(t))||void 0===i?void 0:i.toLowerCase(),n=null===(s=(0,b.q6)(n))||void 0===s?void 0:s.toLowerCase();const r=e.map((e=>e.toLowerCase())),o=t?e[r.indexOf(t)]:null,l=n?e[r.indexOf(n)]:null;return{longitudeFieldName:o||e[r.indexOf(R.find((e=>r.includes(e))))],latitudeFieldName:l||e[r.indexOf(j.find((e=>r.includes(e))))]}}function A(e){if(!e.length)return"string";const t=/[^+\-.,0-9]/;return e.map((e=>{if(""!==e){if(!t.test(e)){let t=Z(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!Number.isNaN(t))return"double";if(e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t)))return"double"}}return(0,r.of)(e)?"date":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const Z=function(){const e=(0,N.lt)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return s=>{const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),j=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],R=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];var G=n(63543),P=n(52410),M=n(6701),Q=n(78952);const U=(0,G.bU)("esriGeometryPoint"),V=["csv"],z=[0,0];class L{constructor(e,t){this.x=e,this.y=t}}class ${constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}async load(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions=e;const[i]=await Promise.all([this._fetch(n.signal),this._checkProjection(null===e||void 0===e||null===(t=e.parsingOptions)||void 0===t?void 0:t.spatialReference)]),s=function(e,t){var n,i,s;const r=t.parsingOptions||{},l={delimiter:r.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:r.latitudeField,longitudeFieldName:r.longitudeField}},a=l.layerDefinition={name:(0,u.vt)(t.url,V)||"csv",dateFieldsTimeReference:{timeZoneIANA:M.pt},drawingInfo:U,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:r.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:r.spatialReference||{wkid:4326}}},c=T(e),d=null===(n=c.next().value)||void 0===n?void 0:n.trim(),p=null===(i=c.next().value)||void 0===i?void 0:i.trim();if(!d)throw new o.Z("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:f,locationInfo:h}=S(d,p,r);if(!f)throw new o.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:d,secondLine:p,parsingOptions:r});if(!h)throw new o.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:d,secondLine:p,parsingOptions:r});l.locationInfo=h,l.delimiter=f;const{names:m,aliases:g}=O(d,f),y=function(e,t,n,i,s){const r=[],o=C(e,n,t),l=[];for(const a of o){if(10===l.length)break;l.push(a)}for(let a=0;a<n.length;a++){const e=n[a],t=i[a];if(e===s.longitudeFieldName||e===s.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:t});else{let n;switch(A(l.map((t=>t[e])))){case"integer":n="esriFieldTypeInteger";break;case"double":n="esriFieldTypeDouble";break;case"date":n="esriFieldTypeDate";break;default:n="esriFieldTypeString"}r.push({name:e,type:n,alias:t,length:(0,b.ZR)(n)})}}return r}(e,l.delimiter,m,g,l.locationInfo);if(null!==(s=r.fields)&&void 0!==s&&s.length){const e=new P.Z(r.fields);for(const t of y){const n=e.get(t.name);n&&Object.assign(t,n)}}if(!y.some((e=>"esriFieldTypeOID"===e.type&&(a.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};a.objectIdField=e.name,y.unshift(e)}a.fields=y;const v=new P.Z(a.fields);if(l.locationInfo&&(l.locationInfo.latitudeFieldName=v.get(l.locationInfo.latitudeFieldName).name,l.locationInfo.longitudeFieldName=v.get(l.locationInfo.longitudeFieldName).name),a.timeInfo){const e=a.timeInfo;if(e.startTimeField){const t=v.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=v.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=v.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(a.timeInfo=null)}return l}(i,e);this._locationInfo=s.locationInfo,this._delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const r=await this._createFeatures(i);this._queryEngine.featureStore.addMany(r);const{fullExtent:l,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(s.layerDefinition.extent=l,a){const{start:e,end:t}=a;s.layerDefinition.timeInfo.timeExtent=[e,t]}return s}async applyEdits(){throw new o.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;this._loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,s.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.D_)(e)||l.Z.getLogger("esri.layers.CSVLayer").error(new o.Z("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:i}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions;if(!t)throw new o.Z("csv-layer:invalid-source","url not defined");const s=(0,u.mN)(t);return(await(0,i.Z)(s.path,{query:{...s.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:n,extent:i,timeInfo:s}=e.layerDefinition,r=new g.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new v.q({fieldsIndex:P.Z.fromLayerJSON({fields:n,dateFieldsTimeReference:{timeZoneIANA:M.pt}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:n}=this._locationInfo,{objectIdField:i,fieldsIndex:s,spatialReference:o}=this._queryEngine;let l=[];const a=[],u=s.fields.filter((e=>e.name!==i)).map((e=>e.name));let g=0;const y={};for(const r of s.fields)if("esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type){const e=(0,b.os)(r);void 0!==e&&(y[r.name]=e)}const v=C(e,u,this._delimiter,(0,G.Dm)(y,i));for(const c of v){const e=this._parseCoordinateValue(c[t]),o=this._parseCoordinateValue(c[n]);if(null!=o&&null!=e&&!isNaN(e)&&!isNaN(o)){c[t]=e,c[n]=o;for(const e in c)if(e!==t&&e!==n)if(s.isDateField(e))c[e]=(0,r.sG)(c[e]);else if(s.isNumericField(e)){const t=Z(c[e]);isNaN(t)?c[e]=null:c[e]=t}c[i]=g,g++,l.push(new L(o,e)),a.push(c)}}if(!(0,p.fS)({wkid:4326},o))if((0,p.sS)(o))for(const r of l)[r.x,r.y]=(0,f.hG)(r.x,r.y,z);else l=(0,c.projectMany)(d.N,l,Q.Z.WGS84,o,null,null);const N=[];for(let r=0;r<l.length;r++){const{x:e,y:t}=l[r],n=a[r];n[i]=r+1,N.push(new h.u_(new m.Z([],[e,t]),n,null,n[i]))}return N}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=Z(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await(0,y._W)(p.Zn,e)}catch{throw new o.Z("csv-layer:projection-not-supported","Projection not supported")}}}},63543:(e,t,n)=>{n.d(t,{Dm:()=>c,Hq:()=>d,MS:()=>p,bU:()=>l});var i=n(93169),s=n(84652),r=n(60480),o=n(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const a=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function c(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(a.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=2273.9e768fc0.chunk.js.map