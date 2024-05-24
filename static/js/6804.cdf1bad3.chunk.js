"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[6804],{96866:(e,t,o)=>{o.d(t,{B:()=>y});var r=o(10064),n=o(9997),i=o(80292),s=o(35995),l=o(71907),a=o(33397),p=o(25265),u=o(49861),c=o(22892),d=o(53283);function y(e){var t;const o=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,r)=>{const n=function(e,t,o){var r;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,o){const r=(0,a.Oe)(t,o);return{type:String,read:(e,t,o)=>{const n=(0,d.r)(e,t,o);return r.type===String?n:"function"==typeof r.type?new r.type({url:n}):void 0},write:{writer(t,n,l,a){if(null===a||void 0===a||!a.resources)return"string"==typeof t?void(n[l]=(0,d.t)(t,a)):void(n[l]=t.write({},a));const u=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(u,{...a,verifyItemRelativeUrls:null!==a&&void 0!==a&&a.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),h=r.type!==String&&(!(0,i.l)(this)||(null===a||void 0===a?void 0:a.origin)&&this.originIdOf(o)>(0,p.M9)(a.origin)),g={object:this,propertyName:o,value:t,targetUrl:y,dest:n,targetPropertyName:l,context:a,params:e};null!==a&&void 0!==a&&a.portalItem&&y&&!(0,s.YP)(y)?h&&null!==e&&void 0!==e&&e.contentAddressed?v(g):h?function(e){var t;const{context:o,targetUrl:r,params:n,value:i,dest:l,targetPropertyName:a}=e;if(!o.portalItem)return;const p=o.portalItem.resourceFromPath(r),u=m(i,r,o),d=(0,c.B)(u),y=(0,s.Ml)(p.path),h=null!==(t=null===n||void 0===n?void 0:n.compress)&&void 0!==t&&t;d===y?(o.resources&&f({...e,resource:p,content:u,compress:h,updates:o.resources.toUpdate}),l[a]=r):v(e)}(g):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:n}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}(g):null!==a&&void 0!==a&&a.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.jc)(y)||h)?v(g):n[l]=y}}}}(e,t,o);switch(null!==(r=null===e||void 0===e?void 0:e.type)&&void 0!==r?r:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.a;return{read:e,write:t}}}}(e,t,r);for(const e of o){const o=(0,u.CJ)(t,e,r);for(const e in n)o[e]=n[e]}}}function v(e){var t,o,i,a;const{targetUrl:p,params:u,value:y,context:v,dest:h,targetPropertyName:g}=e;if(!v.portalItem)return;const b=(0,d.p)(p),_=m(y,p,v);if(null!==u&&void 0!==u&&u.contentAddressed&&"json"!==_.type)return void(null===(t=v.messages)||void 0===t||t.push(new r.Z("persistable:contentAddressingUnsupported",'Property "'.concat(g,'" is trying to serializing a resource with content of type ').concat(_.type," with content addressing. Content addressing is only supported for json resources."),{content:_})));const x=null!==u&&void 0!==u&&u.contentAddressed&&"json"===_.type?(0,n.F)(_.jsonString):null!==(o=null===b||void 0===b?void 0:b.filename)&&void 0!==o?o:(0,l.DO)(),S=(0,s.v_)(null!==(i=null===u||void 0===u?void 0:u.prefix)&&void 0!==i?i:null===b||void 0===b?void 0:b.prefix,x),w="".concat(S,".").concat((0,c.B)(_));if(null!==u&&void 0!==u&&u.contentAddressed&&v.resources&&"json"===_.type){var C;const e=null!==(C=v.resources.toKeep.find((e=>e.resource.path===w)))&&void 0!==C?C:v.resources.toAdd.find((e=>e.resource.path===w));if(e)return void(h[g]=e.resource.itemRelativeUrl)}const I=v.portalItem.resourceFromPath(w);(0,s.jc)(p)&&v.resources&&v.resources.pendingOperations.push((0,s.gi)(p).then((e=>{I.path="".concat(S,".").concat((0,c.B)({type:"blob",blob:e})),h[g]=I.itemRelativeUrl})).catch((()=>{})));const j=null!==(a=null===u||void 0===u?void 0:u.compress)&&void 0!==a&&a;v.resources&&f({...e,resource:I,content:_,compress:j,updates:v.resources.toAdd}),h[g]=I.itemRelativeUrl}function f(e){let{object:t,propertyName:o,updates:r,resource:n,content:i,compress:s}=e;r.push({resource:n,content:i,compress:s,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function m(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},66804:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var r,n=o(27366),i=o(10064),s=o(32718),l=o(97642),a=o(66978),p=o(94172),u=o(49861),c=(o(25243),o(63780),o(93169),o(38511)),d=o(69912),y=o(96866),v=o(30651),f=o(27961),m=o(11936),h=o(6061),g=o(29598),b=o(56811),_=o(81118),x=o(45948),S=o(34207),w=o(76200),C=o(80987),I=o(46784),j=o(35995),N=o(50149);let T=r=class extends((0,I.eC)(C.Z.ofType(N.Z))){constructor(e){super(e),this.url=null}clone(){return new r({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new r;for(const r of e)o.add(N.Z.fromJSON(r,t));return o}static async fromUrl(e,t,o){const n={url:(0,j.mN)(e),origin:"service"},i=await(0,w.Z)(e,{responseType:"json",signal:null===o||void 0===o?void 0:o.signal}),s=t.toJSON(),l=[];for(const r of i.data)l.push(N.Z.fromJSON({...r,geometry:{...r.geometry,spatialReference:s}},n));return new r({url:e,items:l})}};(0,n._)([(0,u.Cb)({type:String})],T.prototype,"url",void 0),T=r=(0,n._)([(0,d.j)("esri.layers.support.SceneModifications")],T);const R=T;var U=o(74509),P=o(53283);let M=class extends((0,_.Vt)((0,m.Y)((0,h.q)((0,g.I)((0,b.M)((0,l.R)((0,f.V)(v.Z)))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,P.f)(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null===e||void 0===e?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,a.r9)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await R.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(_.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(_.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new i.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,U.LR)(s.Z.getLogger(this),(0,U.Uy)(t,"absolute-height",e)),(0,U.LR)(s.Z.getLogger(this),(0,U.kf)(t,e))}};(0,n._)([(0,u.Cb)({type:String,readOnly:!0})],M.prototype,"geometryType",void 0),(0,n._)([(0,u.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0),(0,n._)([(0,u.Cb)({type:["IntegratedMeshLayer"]})],M.prototype,"operationalLayerType",void 0),(0,n._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],M.prototype,"type",void 0),(0,n._)([(0,u.Cb)({type:S.U4,readOnly:!0})],M.prototype,"nodePages",void 0),(0,n._)([(0,u.Cb)({type:[S.QI],readOnly:!0})],M.prototype,"materialDefinitions",void 0),(0,n._)([(0,u.Cb)({type:[S.Yh],readOnly:!0})],M.prototype,"textureSetDefinitions",void 0),(0,n._)([(0,u.Cb)({type:[S.H3],readOnly:!0})],M.prototype,"geometryDefinitions",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],M.prototype,"serviceUpdateTimeStamp",void 0),(0,n._)([(0,u.Cb)({type:R}),(0,y.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],M.prototype,"modifications",void 0),(0,n._)([(0,c.r)(["web-scene","portal-item"],"modifications")],M.prototype,"readModifications",null),(0,n._)([(0,u.Cb)(x.PV)],M.prototype,"elevationInfo",null),(0,n._)([(0,u.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),M=(0,n._)([(0,d.j)("esri.layers.IntegratedMeshLayer")],M);const Z=M},34207:(e,t,o)=>{o.d(t,{H3:()=>h,QI:()=>c,U4:()=>a,Yh:()=>y});var r=o(27366),n=o(46784),i=o(49861),s=(o(25243),o(63780),o(93169),o(27135)),l=o(69912);let a=class extends n.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,i.Cb)({type:Number})],a.prototype,"nodesPerPage",void 0),(0,r._)([(0,i.Cb)({type:Number})],a.prototype,"rootIndex",void 0),(0,r._)([(0,i.Cb)({type:String})],a.prototype,"lodSelectionMetricType",void 0),a=(0,r._)([(0,l.j)("esri.layer.support.I3SNodePageDefinition")],a);let p=class extends n.wq{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,i.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,r._)([(0,i.Cb)({type:Number})],p.prototype,"factor",void 0),p=(0,r._)([(0,l.j)("esri.layer.support.I3SMaterialTexture")],p);let u=class extends n.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,i.Cb)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,r._)([(0,i.Cb)({type:p})],u.prototype,"baseColorTexture",void 0),(0,r._)([(0,i.Cb)({type:p})],u.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,i.Cb)({type:Number})],u.prototype,"metallicFactor",void 0),(0,r._)([(0,i.Cb)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,r._)([(0,l.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],u);let c=class extends n.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,s.J)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,r._)([(0,i.Cb)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,r._)([(0,i.Cb)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,r._)([(0,s.J)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,r._)([(0,i.Cb)({type:p})],c.prototype,"normalTexture",void 0),(0,r._)([(0,i.Cb)({type:p})],c.prototype,"occlusionTexture",void 0),(0,r._)([(0,i.Cb)({type:p})],c.prototype,"emissiveTexture",void 0),(0,r._)([(0,i.Cb)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,r._)([(0,i.Cb)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,r._)([(0,l.j)("esri.layer.support.I3SMaterialDefinition")],c);let d=class extends n.wq{};(0,r._)([(0,i.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:"".concat(t.index)}}})],d.prototype,"name",void 0),(0,r._)([(0,s.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,l.j)("esri.layer.support.I3STextureFormat")],d);let y=class extends n.wq{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,i.Cb)({type:[d]})],y.prototype,"formats",void 0),(0,r._)([(0,i.Cb)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,l.j)("esri.layer.support.I3STextureSetDefinition")],y);let v=class extends n.wq{};(0,r._)([(0,s.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],v.prototype,"type",void 0),(0,r._)([(0,i.Cb)({type:Number})],v.prototype,"component",void 0),v=(0,r._)([(0,l.j)("esri.layer.support.I3SGeometryAttribute")],v);let f=class extends n.wq{};(0,r._)([(0,s.J)({draco:"draco"})],f.prototype,"encoding",void 0),(0,r._)([(0,i.Cb)({type:[String]})],f.prototype,"attributes",void 0),f=(0,r._)([(0,l.j)("esri.layer.support.I3SGeometryCompressedAttributes")],f);let m=class extends n.wq{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,i.Cb)({type:Number})],m.prototype,"offset",void 0),(0,r._)([(0,i.Cb)({type:v})],m.prototype,"position",void 0),(0,r._)([(0,i.Cb)({type:v})],m.prototype,"normal",void 0),(0,r._)([(0,i.Cb)({type:v})],m.prototype,"uv0",void 0),(0,r._)([(0,i.Cb)({type:v})],m.prototype,"color",void 0),(0,r._)([(0,i.Cb)({type:v})],m.prototype,"uvRegion",void 0),(0,r._)([(0,i.Cb)({type:v})],m.prototype,"featureId",void 0),(0,r._)([(0,i.Cb)({type:v})],m.prototype,"faceRange",void 0),(0,r._)([(0,i.Cb)({type:f})],m.prototype,"compressedAttributes",void 0),m=(0,r._)([(0,l.j)("esri.layer.support.I3SGeometryBuffer")],m);let h=class extends n.wq{};(0,r._)([(0,s.J)({triangle:"triangle"})],h.prototype,"topology",void 0),(0,r._)([(0,i.Cb)()],h.prototype,"geometryBuffers",void 0),h=(0,r._)([(0,l.j)("esri.layer.support.I3SGeometryDefinition")],h)},50149:(e,t,o)=>{o.d(t,{Z:()=>f});var r,n=o(27366),i=(o(59486),o(46784)),s=o(84652),l=o(51370),a=o(49861),p=(o(25243),o(69912)),u=o(31201),c=o(96866),d=o(79803),y=o(80885);let v=r=class extends i.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var n;if(null!==(n=r.layer)&&void 0!==n&&n.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,d.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void((null===r||void 0===r?void 0:r.messages)&&r.messages.push(new l.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const n=new y.Z;(0,d.projectPolygon)(e,n,r.layer.spatialReference),t[o]=n.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,s.d9)(this.geometry),type:this.type})}};(0,n._)([(0,a.Cb)({type:y.Z}),(0,c.B)()],v.prototype,"geometry",void 0),(0,n._)([(0,u.c)(["web-scene","portal-item"],"geometry")],v.prototype,"writeGeometry",null),(0,n._)([(0,a.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,c.B)()],v.prototype,"type",void 0),v=r=(0,n._)([(0,p.j)("esri.layers.support.SceneModification")],v);const f=v},22892:(e,t,o)=>{o.d(t,{B:()=>n});var r=o(35995);function n(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Ml)(e);return a[t]||s}(e.url)}(e)]||l}const i={},s="text/plain",l=i[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const p in a)i[a[p]]=p},74509:(e,t,o)=>{o.d(t,{Jn:()=>a,LR:()=>b,RL:()=>p,Uy:()=>m,VW:()=>l,W_:()=>f,Wb:()=>h,jG:()=>_,kf:()=>g,tR:()=>x,tq:()=>v,vQ:()=>c,zx:()=>d});var r=o(88152);function n(e){return e?_:x}function i(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:n(e).mode}function s(e,t){return null!=t?t:n(e)}function l(e,t){return i(null!=e&&e.hasZ,t)}function a(e,t){return s(null!=e&&!!e.hasZ,t)}function p(e){var t,o;const n=u(e),i=l(e.geometry,n);return{mode:i,offset:null!=n&&"on-the-ground"!==i?(null!==(t=n.offset)&&void 0!==t?t:0)*(0,r.Z7)(null!==(o=n.unit)&&void 0!==o?o:"meters"):0}}function u(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function c(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return y(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function d(e,t,o,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return y(e,t[0],t[1],t.length>2?t[2]:0,o,r,n)}function y(e,t,o,r,n,i){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:a}=v(t,o,r,n,e,i);return function(e,t,o,r,n,i,s,l){var a,p;const u=null!=(null===s||void 0===s?void 0:s.offset)?s.offset:0;switch(l){case"absolute-height":return e-u;case"relative-to-ground":return e-((null!==(a=i.elevationProvider.getElevation(t,o,r,n,"ground"))&&void 0!==a?a:0)+u);case"relative-to-scene":return e-((null!==(p=i.elevationProvider.getElevation(t,o,r,n,"scene"))&&void 0!==p?p:0)+u)}}(a,t,o,r,n,e,s,l)}function v(e,t,o,r,n,i){const s=null!=i.offset?i.offset:0;switch(i.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{var l;const o=null!==(l=n.elevationProvider.getElevation(e,t,0,r,"ground"))&&void 0!==l?l:0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{var a;const i=null!==(a=n.elevationProvider.getElevation(e,t,o,r,"ground"))&&void 0!==a?a:0;return{absoluteZ:o+i+s,elevation:i}}case"relative-to-scene":{var p;const i=null!==(p=n.elevationProvider.getElevation(e,t,o,r,"scene"))&&void 0!==p?p:0;return{absoluteZ:o+i+s,elevation:i}}}}function f(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function m(e,t,o){return o&&o.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function h(e,t,o){return(null===o||void 0===o?void 0:o.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function g(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function b(e,t){t&&e.warn(".elevationInfo=",t)}const _={mode:"absolute-height",offset:0},x={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=6804.cdf1bad3.chunk.js.map