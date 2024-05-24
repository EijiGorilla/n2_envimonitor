"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[3082],{3082:(e,t,s)=>{s.r(t),s.d(t,{default:()=>M});var r=s(27366),i=s(10064),n=s(94172),o=s(49861),a=(s(25243),s(63780),s(93169),s(69912)),c=(s(59486),s(52639)),l=s(7138),d=s(92026),h=s(67426),u=s(76151),p=s(97463),y=s(5198),_=s(27823);let v=class extends c.Z{getObjectId(){return this.objectId}};(0,r._)([(0,o.Cb)({type:Number,json:{read:!0}})],v.prototype,"objectId",void 0),v=(0,r._)([(0,a.j)("esri.layers.graphics.controllers.StreamGraphic")],v);class m{constructor(e){this.onUpdate=e,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(e){this._idToGraphic.set(e.objectId,e)}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e)}removeById(e){const t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}update(e,t){this.onUpdate(e,t)}get size(){return this._idToGraphic.size}}let g=class extends((0,h.v)(l.Z)){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new y.g,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when((()=>this._startup())))}destroy(){this.clear()}_clearInterval(){null!==this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._clearInterval(),this.connection=(0,d.SC)(this.connection),this.store=(0,d.SC)(this.store),this.graphics.clear(),this.removeAllHandles()}get updating(){return!this.connection||"connected"===this.connection.connectionStatus}_startup(){const{layer:e,layerView:t}=this,{spatialReference:s,definitionExpression:r,geometryDefinition:i,objectIdField:o,timeInfo:a,purgeOptions:c,maxReconnectionAttempts:l,maxReconnectionInterval:d,customParameters:h}=e,y=e.geometryType?_.M.toJSON(e.geometryType):null,v=s,g=t.view.spatialReference,f={geometry:i,where:r};this.clear(),this._set("connection",(0,p.createConnection)(e.parsedUrl,v,g,y,f,l,d,null!==h&&void 0!==h?h:void 0)),this._outSpatialReference=g.toJSON(),this.store=new m(this._onUpdate.bind(this)),this.featuresManager=new u.Qo(this.store,o,a.toJSON(),c);const I="startup-watches";this.removeHandles(I),this.addHandles([e.on("send-message-to-socket",(e=>this.connection.sendMessageToSocket(e))),e.on("send-message-to-client",(e=>this.connection.sendMessageToClient(e))),this.connection.on("data-received",(e=>this._onFeature(e))),this.connection.on("message-received",(e=>this._onWebSocketMessage(e))),(0,n.YP)((()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions]),(()=>this._startup()))],I),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach((e=>this.featuresManager.removeById(e.objectId)))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{null==e.geometry||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=v.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){null!=t&&this.graphics.removeMany(t),null!=e&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval((()=>{const e=performance.now(),s=e-t;if(s>2500){t=e;const r=Math.round(this._updateInfo.client/(s/1e3)),i=Math.round(this._updateInfo.websocket/(s/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:r,websocket:i})}this.featuresManager.checkForUpdates()}),e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}};(0,r._)([(0,o.Cb)()],g.prototype,"isPaused",void 0),(0,r._)([(0,o.Cb)({constructOnly:!0})],g.prototype,"layer",void 0),(0,r._)([(0,o.Cb)({constructOnly:!0})],g.prototype,"layerView",void 0),(0,r._)([(0,o.Cb)()],g.prototype,"connection",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],g.prototype,"updating",null),g=(0,r._)([(0,a.j)("esri.layers.graphics.controllers.StreamController")],g);var f=s(21149),I=s(52552),b=s(42069),S=s(78485),w=s(67581),C=s(18661);const P=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(){super(...arguments),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(e){e?this._doPause():this._isUserPaused||this._doResume()}};return(0,r._)([(0,o.Cb)()],t.prototype,"_isUserPaused",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,r._)([(0,o.Cb)({type:C.Z})],t.prototype,"filter",void 0),t=(0,r._)([(0,a.j)("esri.layers.mixins.StreamLayerView")],t),t};let k=class extends(P((0,I.R)((0,b.A)(w.Z)))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=S.j.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.addHandles((0,n.YP)((()=>this.suspended),(e=>{this.controller&&this._onSuspendedChange(e)})))}get connectionError(){var e;const t=null===(e=this.controller)||void 0===e||null===(e=e.connection)||void 0===e?void 0:e.errorString;return t?new i.Z("stream-controller",t):null}createQuery(){return new f.Z({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}get _streamConnectionStatus(){var e,t;return null!==(e=null===(t=this.controller)||void 0===t||null===(t=t.connection)||void 0===t?void 0:t.connectionStatus)&&void 0!==e?e:"disconnected"}createController(){return new g({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var e;null===(e=this.controller)||void 0===e||e.pauseStream()}_doResume(){var e;null===(e=this.controller)||void 0===e||e.resumeStream()}};(0,r._)([(0,o.Cb)({readOnly:!0})],k.prototype,"updatePolicy",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],k.prototype,"connectionError",null),(0,r._)([(0,o.Cb)()],k.prototype,"controller",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],k.prototype,"hasZ",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],k.prototype,"hasM",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],k.prototype,"_streamConnectionStatus",null),k=(0,r._)([(0,a.j)("esri.views.3d.layers.StreamLayerView3D")],k);const M=k}}]);
//# sourceMappingURL=3082.b46e79c7.chunk.js.map