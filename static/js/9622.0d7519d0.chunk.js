"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[9622],{69622:(e,t,r)=>{r.r(t),r.d(t,{default:()=>X});var o=r(27366),i=(r(59486),r(52639)),l=(r(51508),r(80987)),n=r(10064),a=r(84652),s=r(97642),y=r(18202),p=r(51370),u=r(49861),d=(r(25243),r(38511)),c=r(69912),m=r(31201),f=r(79803),h=r(65156),b=r(91340),g=r(92975),S=r(64326),v=(r(63780),r(93169),r(68748)),C=r(30651),O=r(6693),_=r(56811),w=r(78983),N=r(64575);let L=class extends((0,O.h)((0,_.M)(C.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new w.J,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,o._)([(0,u.Cb)({type:N.Z})],L.prototype,"elevationInfo",void 0),(0,o._)([(0,u.Cb)((0,v.z)(w.J,"graphics"))],L.prototype,"graphics",void 0),(0,o._)([(0,u.Cb)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)()],L.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],L.prototype,"type",void 0),(0,o._)([(0,u.Cb)({constructOnly:!0})],L.prototype,"internal",void 0),L=(0,o._)([(0,c.j)("esri.layers.GraphicsLayer")],L);const J=L;var M=r(25820),x=r(6061),T=r(29598),I=r(83040),j=r(61459),Z=r(16851),E=r(16072),R=r(58009),D=r(78952),P=r(53866);function G(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!F(e)))}function F(e){var t;let{layerDefinition:r,featureSet:o}=e;const i=null!==(t=r.geometryType)&&void 0!==t?t:o.geometryType;return H.find((e=>{var t;return i===e.geometryTypeJSON&&(null===(t=r.drawingInfo)||void 0===t||null===(t=t.renderer)||void 0===t||null===(t=t.symbol)||void 0===t?void 0:t.type)===e.identifyingSymbol.type}))}function B(){return new P.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const k=new I.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),z=new I.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let A=class extends J{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference,r=this.fullBounds;return t?null==r?(0,f.projectOrLoad)(B(),t).geometry:(0,h.HH)(r,t):null}get fullBounds(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference;if(!t)return null;const r=(0,h.cS)();return this.graphics.forEach((e=>{const o=null!=e.geometry?(0,f.projectOrLoad)(e.geometry,t).geometry:null;null!=o&&(0,h.jn)(r,"point"===o.type?o:o.extent,r)})),(0,h.fS)(r,h.G_)?null:r}get sublayers(){return this.graphics}};(0,o._)([(0,u.Cb)({readOnly:!0})],A.prototype,"fullExtent",null),(0,o._)([(0,u.Cb)({readOnly:!0})],A.prototype,"fullBounds",null),(0,o._)([(0,u.Cb)({readOnly:!0})],A.prototype,"sublayers",null),(0,o._)([(0,u.Cb)()],A.prototype,"layer",void 0),(0,o._)([(0,u.Cb)()],A.prototype,"layerId",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],A.prototype,"visibilityMode",void 0),A=(0,o._)([(0,c.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],A);const H=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new j.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new Z.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new E.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new E.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new R.Z).toJSON()}];let W=class extends((0,O.h)((0,_.M)((0,x.q)((0,T.I)((0,s.R)(C.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=D.Z.WGS84,this.sublayers=new l.Z(H.map((e=>new A({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!G(t)&&"portal-item"!==(null===r||void 0===r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!G(t))return null;const o=t.layers.map((e=>{const t=new S.default;return t.read(e,r),t}));return new l.Z({items:o})}readLegacyfeatureCollectionJSON(e,t){return G(t)?(0,a.d9)(t.featureCollection):null}get fullExtent(){var e;const t=this.spatialReference,r=(0,h.cS)();return null!=this.sublayers?this.sublayers.forEach((e=>{let{fullBounds:t}=e;return null!=t?(0,h.jn)(r,t,r):r}),r):null!==(e=this.featureCollectionJSON)&&void 0!==e&&e.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((e=>{const o=(0,f.projectOrLoad)(e.layerDefinition.extent,t).geometry;null!=o&&(0,h.jn)(r,o,r)})),(0,h.fS)(r,h.G_)?(0,f.projectOrLoad)(B(),t).geometry:(0,h.HH)(r,t)}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?D.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):D.Z.WGS84}readSublayers(e,t,r){if(G(t))return null;const o=[];let n=t.layers.reduce(((e,t)=>{var r;return Math.max(e,null!==(r=t.layerDefinition.id)&&void 0!==r?r:-1)}),-1)+1;for(const l of t.layers){var a;const{layerDefinition:e,featureSet:t}=l,r=null!==(a=e.id)&&void 0!==a?a:n++,s=F(l);if(null!=s){const l=new A({id:s.id,title:e.name,layerId:r,layer:this,graphics:t.features.map((e=>{let{geometry:t,symbol:r,attributes:o,popupInfo:l}=e;return i.Z.fromJSON({attributes:o,geometry:t,symbol:r,popupTemplate:l})}))});o.push(l)}}return new l.Z(o)}writeSublayers(e,t,r,o){var i;const{minScale:l,maxScale:a}=this;if(null==e)return;const s=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&(null===o||void 0===o||null===(i=o.messages)||void 0===i||i.push(new n.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let u=this.spatialReference.toJSON();e:for(const n of e)for(const e of n.graphics)if(null!=e.geometry){u=e.geometry.spatialReference.toJSON();break e}for(const n of H){const t=e.find((e=>n.id===e.id));this._writeMapNoteSublayer(p,t,n,l,a,u,o)}(0,y.RB)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(null!=r.geometry){const o=r.geometry;e?(0,g.fS)(o.spatialReference,e)||((0,f.canProjectWithoutEngine)(o.spatialReference,e)||(0,f.isLoaded)()||await(0,f.load)(),r.geometry=(0,f.project)(o,e)):e=o.spatialReference,t.push(r)}const r=await(0,b.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return null==this.sublayers?null:null!==(t=null===(r=this.sublayers)||void 0===r?void 0:r.find((t=>t.id===e)))&&void 0!==t?t:null}_writeMapNoteSublayer(e,t,r,o,i,l,n){const s=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(s,e,r.geometryType,n);this._normalizeObjectIds(s,k),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[k.toJSON(),z.toJSON()],spatialReference:l},featureSet:{features:s,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){var i,l;if(null==t)return;const{geometry:n,symbol:a,popupTemplate:s}=t;if(null==n)return;if(n.type!==r)return void(null===o||void 0===o||null===(i=o.messages)||void 0===i||i.push(new p.Z("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(n.type,'" cannot be saved in "').concat(r,'" layer'),{graphic:t})));if(null==a)return void(null===o||void 0===o||null===(l=o.messages)||void 0===l||l.push(new p.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:n.toJSON(),symbol:a.toJSON()};null!=s&&(y.popupInfo=s.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,M.S)(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r])}}};(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"capabilities",void 0),(0,o._)([(0,d.r)(["portal-item","web-map"],"capabilities",["layers"])],W.prototype,"readCapabilities",null),(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"featureCollections",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"featureCollections",["layers"])],W.prototype,"readFeatureCollections",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],W.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],W.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],W.prototype,"featureCollectionType",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"fullExtent",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],W.prototype,"legendEnabled",void 0),(0,o._)([(0,u.Cb)({type:["show","hide","hide-children"]})],W.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],W.prototype,"minScale",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"minScale",["layers"])],W.prototype,"readMinScale",null),(0,o._)([(0,u.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],W.prototype,"maxScale",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"maxScale",["layers"])],W.prototype,"readMaxScale",null),(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"multipointLayer",null),(0,o._)([(0,u.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],W.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"pointLayer",null),(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"polygonLayer",null),(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"polylineLayer",null),(0,o._)([(0,u.Cb)({type:D.Z})],W.prototype,"spatialReference",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"spatialReference",["layers"])],W.prototype,"readSpatialReference",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],W.prototype,"sublayers",void 0),(0,o._)([(0,d.r)("web-map","sublayers",["layers"])],W.prototype,"readSublayers",null),(0,o._)([(0,m.c)("web-map","sublayers")],W.prototype,"writeSublayers",null),(0,o._)([(0,u.Cb)({readOnly:!0})],W.prototype,"textLayer",null),(0,o._)([(0,u.Cb)()],W.prototype,"title",void 0),(0,o._)([(0,u.Cb)({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),W=(0,o._)([(0,c.j)("esri.layers.MapNotesLayer")],W);const X=W},25820:(e,t,r)=>{r.d(t,{S:()=>i,X:()=>o});const o=1;function i(e,t){let r=0;for(const i of t){var o;const t=null===(o=i.attributes)||void 0===o?void 0:o[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);
//# sourceMappingURL=9622.0d7519d0.chunk.js.map