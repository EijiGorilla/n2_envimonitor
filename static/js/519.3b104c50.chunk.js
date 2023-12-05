"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[519,3139],{28458:(e,r,a)=>{a.d(r,{L:()=>n});var t=a(41226);class n{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(e,r){const a=this._serviceMetadatas.get(e);if(a)return a;const n=await(0,t.T)(e,r);return this._serviceMetadatas.set(e,n),n}}},84076:(e,r,a)=>{a.d(r,{w:()=>y});var t=a(19545),n=a(76200),i=a(10064),l=a(66978),o=a(25899),c=a(7575),s=a(98995);async function y(e,r){var a,y;const L=(0,o.Qc)(e);if(!L)throw new i.Z("invalid-url","Invalid scene service url");const v={...r,sceneServerUrl:L.url.path,layerId:null!==(a=L.sublayer)&&void 0!==a?a:void 0};if(null!==(y=v.sceneLayerItem)&&void 0!==y||(v.sceneLayerItem=await async function(e){const r=(await u(e)).serviceItemId;if(!r)return null;const a=new s.default({id:r,apiKey:e.apiKey}),i=await async function(e){const r=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==r&&void 0!==r&&r.owningSystemUrl)return r.owningSystemUrl;const a=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const r=(await(0,n.Z)(a,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(r)return r}catch(p){(0,l.r9)(p)}return null}(e);null!=i&&(a.portal=new c.Z({url:i}));try{return a.load({signal:e.signal})}catch(f){return(0,l.r9)(f),null}}(v)),null==v.sceneLayerItem)return d(v.sceneServerUrl.replace("/SceneServer","/FeatureServer"),v);const p=await async function(e){let{sceneLayerItem:r,signal:a}=e;if(!r)return null;try{const e=(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new s.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,l.r9)(t),null}}(v);if(null===p||void 0===p||!p.url)throw new i.Z("related-service-not-found","Could not find feature service through portal item relationship");const f=await d(p.url,v);return f.portalItem=p,f}async function u(e){if(e.rootDocument)return e.rootDocument;const r={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const a=await(0,n.Z)(e.sceneServerUrl,r);e.rootDocument=a.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,r){const a=(0,o.Qc)(e);if(!a)throw new i.Z("invalid-feature-service-url","Invalid feature service url");const t=a.url.path,l=r.layerId;if(null==l)return{serverUrl:t};const c=u(r),s=e=>{const a={query:{f:"json"},responseType:"json",authMode:e,signal:r.signal};return(0,n.Z)(t,a)},y=s("anonymous").catch((()=>s("no-prompt"))),[d,L]=await Promise.all([y,c]),v=null===L||void 0===L?void 0:L.layers,p=d.data&&d.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(v)){for(let n=0;n<Math.min(v.length,p.length);n++)if(v[n].id===l)return{serverUrl:t,layerId:p[n].id}}else if(null!=l&&l<p.length)return{serverUrl:t,layerId:p[l].id};throw new Error("could not find matching associated sublayer")}},20519:(e,r,a)=>{a.d(r,{k:()=>G,populateOperationalLayers:()=>y});var t=a(80987),n=(a(93169),a(28458)),i=a(19610),l=a(98995);function o(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var c=a(43139),s=a(21371);async function y(e,r,a){if(!r)return;const t=[];for(const i of r)t.push(g(i,a));const n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},v={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},m={...p,LinkChartLayer:"LinkChartLayer"},I={...f},w={...S};async function g(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await G(t,r,a):M(r)?function(e,r,a){r.itemId&&(e.portalItem=new l.default({id:r.itemId,portal:null===a||void 0===a?void 0:a.portal}),e.when((()=>{var t,n;const i=t=>{var n;const i=t.layerId;A(t,e,r,i,a);const l=null===(n=r.featureCollection)||void 0===n||null===(n=n.layers)||void 0===n?void 0:n[i];l&&t.read(l,a)};null!==(t=e.layers)&&void 0!==t&&t.forEach(i),null===(n=e.tables)||void 0===n||n.forEach(i)})))}(t,r,a.context):h(r)&&await async function(e,r,a){var t;const n=i.T.FeatureLayer,l=await n(),o=r.featureCollection,c=null===o||void 0===o?void 0:o.showLegend,s=null===o||void 0===o||null===(t=o.layers)||void 0===t?void 0:t.map(((t,n)=>{const i=new l;i.read(t,a);const o={...a,ignoreDefaults:!0};return A(i,e,r,n,o),null!=c&&i.read({showLegend:c},o),i}));e.layers.addMany(null!==s&&void 0!==s?s:[])}(t,r,a.context)),await(0,s.y)(t,a.context),t}(await T(e,r),e,r)}async function T(e,r){var a,t;const s=r.context,y=b(s);let u=e.layerType||e.type;!u&&(null===r||void 0===r?void 0:r.defaultLayerType)&&(u=r.defaultLayerType);const d=y[u];let L=d?i.T[d]:i.T.UnknownLayer;if(M(e)){const r=null===s||void 0===s?void 0:s.portal;if(e.itemId){const a=new l.default({id:e.itemId,portal:r});await a.load();const t=(await(0,c.v)(a,new n.L)).className||"UnknownLayer";L=i.T[t]}}else"ArcGISFeatureLayer"===u?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?L=i.T.MapNotesLayer:function(e){return o(e,"route")}(e)?L=i.T.RouteLayer:h(e)&&(L=i.T.GroupLayer):null!==(a=e.wmtsInfo)&&void 0!==a&&a.url&&e.wmtsInfo.layerIdentifier?L=i.T.WMTSLayer:"WFS"===u&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(L=i.T.UnsupportedLayer);return L()}function h(e){var r,a;return"ArcGISFeatureLayer"===e.layerType&&!M(e)&&(null!==(r=null===(a=e.featureCollection)||void 0===a||null===(a=a.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1}function M(e){return"Feature Collection"===e.type}function b(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=v;break;case"ground":r=d;break;case"tables":r=L;break;default:r=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=w;break;case"tables":r=I;break;default:r=m}break;default:switch(e.layerContainerType){case"basemap":r=S;break;case"tables":r=f;break;default:r=p}}return r}async function G(e,r,a){const n=new t.Z,i=y(n,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(l){e.destroy();for(const e of n)e.destroy();throw l}}catch(l){throw l}}function A(e,r,a,t,n){var i,l;e.read({id:"".concat(r.id,"-sublayer-").concat(t),visibility:null===(i=null===(l=a.visibleLayers)||void 0===l?void 0:l.includes(t))||void 0===i||i},n)}},97827:(e,r,a)=>{a.d(r,{$O:()=>i,CD:()=>y,Ok:()=>l,Q4:()=>o,XX:()=>c,_Y:()=>s,bS:()=>n});var t=a(84076);function n(e){const r={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(r.layerType="OrientedImageryLayer"),r}async function i(e,r,a){var t,i;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(i=e)||void 0===i?void 0:i.tables)){var l,o;const t=await a.fetchServiceMetadata(r);(e=e||{}).layers=e.layers||(null===t||void 0===t||null===(l=t.layers)||void 0===l?void 0:l.map(n)),e.tables=e.tables||(null===t||void 0===t||null===(o=t.tables)||void 0===o?void 0:o.map(n))}return e}function l(e){const r=e.layers;if(null!==r&&void 0!==r&&r.length)return r[0].id;const a=e.tables;return null!==a&&void 0!==a&&a.length?a[0].id:null}function o(e){var r,a,t,n;return(null!==(r=null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)+(null!==(t=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==t?t:0)}function c(e){var r;const a=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function s(e){var r;return null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.filter((e=>{let{layerType:r}=e;return"OrientedImageryLayer"===r})).map((e=>{let{id:r}=e;return r}))}async function y(e,r,a){var i,l;if(null===e||void 0===e||!e.url)return null!==(i=r)&&void 0!==i?i:{};if(null!==(l=r)&&void 0!==l||(r={}),!r.layers){var o;const t=await a.fetchServiceMetadata(e.url);r.layers=null===(o=t.layers)||void 0===o?void 0:o.map(n)}const{serverUrl:c,portalItem:s}=await(0,t.w)(e.url,{sceneLayerItem:e}).catch((()=>({serverUrl:null,portalItem:null})));if(null==c)return r.tables=[],r;if(!r.tables&&s){const e=await s.fetchData();if(null!==e&&void 0!==e&&e.tables)r.tables=e.tables.map(n);else{var y;const e=await a.fetchServiceMetadata(c);r.tables=null===e||void 0===e||null===(y=e.tables)||void 0===y?void 0:y.map(n)}}if(r.tables)for(const t of r.tables)t.url="".concat(c,"/").concat(t.id);return r}},43139:(e,r,a)=>{a.d(r,{fromItem:()=>u,v:()=>d});var t=a(10064),n=a(84076),i=a(28458),l=a(37933),o=a(19610),c=a(98995),s=a(97827),y=a(73117);async function u(e){!e.portalItem||e.portalItem instanceof c.default||(e={...e,portalItem:new c.default(e.portalItem)});const r=await async function(e){await e.load();const r=new i.L;return async function(e){const r=e.className,a=o.T[r];return{constructor:await a(),properties:e.properties}}(await d(e,r))}(e.portalItem);return new(0,r.constructor)({portalItem:e.portalItem,...r.properties})}async function d(e,r){switch(e.type){case"Map Service":return async function(e,r){return await async function(e,r){return(await r.fetchServiceMetadata(e.url)).tileInfo}(e,r)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,r);case"Feature Service":return async function(e,r){const a=await L(e,r);if("object"==typeof a){const e={};return null!=a.id&&(e.layerId=a.id),{className:a.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e,r);case"Feature Collection":return async function(e){await e.load();const r=(0,y._$)(e,"Map Notes"),a=(0,y._$)(e,"Markup");if(r||a)return{className:"MapNotesLayer"};if((0,y._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,s.Q4)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e,r){const a=await L(e,r,(async()=>{try{var a;if(!e.url)return[];const{serverUrl:t}=await(0,n.w)(e.url,{sceneLayerItem:e}),i=await r.fetchServiceMetadata(t);return null!==(a=null===i||void 0===i?void 0:i.tables)&&void 0!==a?a:[]}catch{return[]}}));if("object"==typeof a){var t;const n={};let i;if(null!=a.id?(n.layerId=a.id,i="".concat(e.url,"/layers/").concat(a.id)):i=e.url,null!==(t=e.typeKeywords)&&void 0!==t&&t.length)for(const r of Object.keys(l.fb))if(e.typeKeywords.includes(r))return{className:l.fb[r]};const o=await r.fetchServiceMetadata(i);return{className:l.fb[null===o||void 0===o?void 0:o.layerType]||"SceneLayer",properties:n}}if(!1===a){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===(null===a||void 0===a?void 0:a.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,r);case"Image Service":return async function(e,r){var a,t,n,i;await e.load();const l=null!==(a=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==a?a:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const o=await e.fetchData(),c=null===o||void 0===o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===c)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===c)return{className:"ImageryLayer"};const s=await r.fetchServiceMetadata(e.url),y=null===(n=s.cacheType)||void 0===n?void 0:n.toLowerCase(),u=null===(i=s.capabilities)||void 0===i?void 0:i.toLowerCase().includes("tilesonly");return"map"===y||u?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,r);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function L(e,r,a){const t=e.url;if(!t||/\/\d+$/.test(t))return{};await e.load();let n=await e.fetchData();if("Feature Service"===e.type){const e=await(0,s.$O)(n,t,r),a=v(e);if("object"==typeof a){const r=(0,s.XX)(e),t=(0,s._Y)(e);a.className=null!=a.id&&r.includes(a.id)?"SubtypeGroupLayer":null!=a.id&&null!==t&&void 0!==t&&t.includes(a.id)?"OrientedImageryLayer":"FeatureLayer"}return a}if("Scene Service"===e.type&&(n=await(0,s.CD)(e,n,r)),(0,s.Q4)(n)>0)return v(n);const i=await r.fetchServiceMetadata(t);return a&&(i.tables=await a()),v(i)}function v(e){return 1===(0,s.Q4)(e)&&{id:(0,s.Ok)(e)}}},41226:(e,r,a)=>{a.d(r,{T:()=>n});var t=a(76200);async function n(e,r){const{data:a}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...null===r||void 0===r?void 0:r.customParameters,token:null===r||void 0===r?void 0:r.apiKey}});return a}}}]);
//# sourceMappingURL=519.3b104c50.chunk.js.map