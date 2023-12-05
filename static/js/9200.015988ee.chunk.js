"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[9200],{89200:(e,t,l)=>{l.r(t),l.d(t,{default:()=>I});var r,o=l(27366),i=(l(59486),l(76200)),s=l(10064),n=l(97642),a=l(643),p=l(35995),u=l(49861),c=(l(25243),l(63780),l(93169),l(38511)),y=l(69912),h=l(31201),d=l(30651),v=l(6693),m=l(6061),w=l(29598),f=l(71684),b=l(56811),g=l(83690),Z=l(59068),T=l(22824),_=l(4961),C=l(53866),R=l(78952),j=l(585);let S=r=class extends((0,v.h)((0,f.Q)((0,b.M)((0,m.q)((0,w.I)((0,n.R)(d.Z))))))){constructor(){super(...arguments),this.copyright="",this.fullExtent=new C.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,R.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=R.Z.WebMercator,this.subDomains=null,this.tileInfo=new T.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new j.Z({x:-20037508.342787,y:20037508.342787,spatialReference:R.Z.WebMercator}),spatialReference:R.Z.WebMercator,lods:[new Z.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new Z.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new Z.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new Z.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new Z.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new Z.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new Z.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new Z.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new Z.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new Z.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new Z.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new Z.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new Z.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new Z.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new Z.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new Z.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new Z.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new Z.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new Z.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new Z.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new Z.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new Z.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new Z.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new Z.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){var t;const l=new p.R9(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&(null===(t=l.authority)||void 0===t?void 0:t.includes("{subDomain}"))&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s.Z("web-tile-layer:load","WebTileLayer (title: '".concat(this.title,"', id: '").concat(this.id,"') ").concat(e))}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){var l;return e||R.Z.fromJSON(null===(l=t.fullExtent)||void 0===l?void 0:l.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new p.R9(t),o=r.scheme?r.scheme+"://":"//",i=o+r.authority+"/",s=r.authority;if(null!==s&&void 0!==s&&s.includes("{subDomain}")){if(l&&l.length>0&&s.split(".").length>1)for(const n of l)e.push(o+s.replaceAll(/\{subDomain\}/gi,n)+"/")}else e.push(i);return e.map(p.xs)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new p.R9(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,p.oC)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,p.Fv)(e)),t.templateUrl=e}fetchTile(e,t,l){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:o}=r,s=this.getTileUrl(e,t,l),n={responseType:"image",signal:o,query:{...this.refreshParameters}};return(0,i.Z)(s,n).then((e=>e.data))}async fetchImageBitmapTile(e,t,l){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:s}=o;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,l,o);return(0,g.V)(r,e,t,l,s)}const n=this.getTileUrl(e,t,l),a={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:p}=await(0,i.Z)(n,a);return(0,g.V)(p,e,t,l,s)}getTileUrl(e,t,l){const{levelValues:r,tileServers:o,urlPath:i}=this;if(!r||!o||!i)return"";const s=r[e];return o[t%o.length]+(0,a.gx)(i,{level:s,z:s,col:l,x:l,row:t,y:t})}};(0,o._)([(0,u.Cb)({type:String,value:"",json:{write:!0}})],S.prototype,"copyright",void 0),(0,o._)([(0,u.Cb)({type:C.Z,json:{write:!0},nonNullable:!0})],S.prototype,"fullExtent",void 0),(0,o._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"legendEnabled",void 0),(0,o._)([(0,u.Cb)({type:["show","hide"]})],S.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)({json:{read:!0,write:!0}})],S.prototype,"blendMode",void 0),(0,o._)([(0,u.Cb)()],S.prototype,"levelValues",null),(0,o._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],S.prototype,"isReference",void 0),(0,o._)([(0,u.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],S.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"popupEnabled",void 0),(0,o._)([(0,u.Cb)({type:R.Z})],S.prototype,"spatialReference",void 0),(0,o._)([(0,c.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],S.prototype,"readSpatialReference",null),(0,o._)([(0,u.Cb)({type:[String],json:{write:!0}})],S.prototype,"subDomains",void 0),(0,o._)([(0,u.Cb)({type:T.Z,json:{write:!0}})],S.prototype,"tileInfo",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],S.prototype,"tileServers",null),(0,o._)([(0,u.Cb)({json:{read:!1}})],S.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],S.prototype,"urlPath",null),(0,o._)([(0,u.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],S.prototype,"urlTemplate",void 0),(0,o._)([(0,c.r)("urlTemplate",["urlTemplate","templateUrl"])],S.prototype,"readUrlTemplate",null),(0,o._)([(0,h.c)("urlTemplate",{templateUrl:{type:String}})],S.prototype,"writeUrlTemplate",null),(0,o._)([(0,u.Cb)({type:_.B,json:{write:!0}})],S.prototype,"wmtsInfo",void 0),S=r=(0,o._)([(0,y.j)("esri.layers.WebTileLayer")],S);const I=S},4961:(e,t,l)=>{l.d(t,{B:()=>p});var r,o=l(27366),i=l(46784),s=l(84652),n=l(49861),a=(l(25243),l(69912));let p=r=class extends i.wq{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,s.d9)(this.customLayerParameters),customParameters:(0,s.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,o._)([(0,n.Cb)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,o._)([(0,n.Cb)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=r=(0,o._)([(0,a.j)("esri.layer.support.WMTSLayerInfo")],p)},83690:(e,t,l)=>{l.d(t,{V:()=>s,g:()=>i});var r=l(10064),o=l(66978);async function i(e,t,l){let i;try{i=await createImageBitmap(e)}catch(s){throw new r.Z("request:server","Unable to load ".concat(t),{url:t,error:s})}return(0,o.k_)(l),i}async function s(e,t,l,i,s){let n;try{n=await createImageBitmap(e)}catch(a){throw new r.Z("request:server","Unable to load tile ".concat(t,"/").concat(l,"/").concat(i),{error:a,level:t,row:l,col:i})}return(0,o.k_)(s),n}}}]);
//# sourceMappingURL=9200.015988ee.chunk.js.map