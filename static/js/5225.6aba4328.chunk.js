"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[5225],{65225:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var i=r(27366),s=r(52639),o=r(63780),n=r(32718),a=r(92026),l=r(94172),d=r(18722),h=r(49861),u=(r(25243),r(69912)),c=r(11186),p=r(71353),g=r(50628),_=r(5986),v=r(34066),f=r(86372),b=r(93501),y=r(28970),m=r(65618),x=r(55946),E=r(37818),C=r(68391),I=r(18661),w=r(21149),N=r(23037),O=r(46798);class D extends O.q{constructor(e){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:e=>[e.geometryBuffer]},e,{hasInitialize:!0})}}var F=r(42069),S=r(53586),G=r(82607),A=r(831),M=r(91505),P=r(77427);class j extends M.Z{constructor(e,t){super(),this._updateAndCompare=e,this._notifyUpdated=t,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const e=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:e})}this._nodes.clear()}get length(){return this._graphics.size}get(e){return this._graphics.get(e)}getNode(e){return this._nodes.get(e)}hasNode(e){return this._nodes.has(e)}nodes(){return this._nodes.values()}addNode(e,t){this._nodes.set(e,t);const r=t.graphics;if(0===r.length)return;const i=new Set;for(let o=0;o<r.length;o++){const t=r[o],s=t.objectId,n=this._graphics.get(s);if(n){i.add(s),t!==n&&(r[o]=n);const a=this._duplicates.get(s);a?a.push(e):this._duplicates.set(s,[n.nodeIndex,e])}else t.nodeIndex=e,this._graphics.set(s,t)}i.size&&this._updateForeignGraphics(t);const s=i.size>0?r.filter((e=>!i.has(e.objectId))):r;s.length>0&&this.emit("change",{added:s,removed:[]})}removeNode(e){const t=this._nodes.get(e);if(!t)return void console.error("Removing unknown node");this._nodes.delete(e);const r=new Set,i=[];for(const s of t.graphics){const t=s.objectId,o=this._graphics.get(t);if(!o)continue;const n=this._duplicates.get(t);if(n){const i=n.indexOf(e);if(-1===i){console.error("error: removing graphic from node that should not reference it.");continue}if(n.splice(i,1),o.nodeIndex===e){let e=this.getNode(n[0]);for(let t=1;t<n.length;t++){const r=this.getNode(n[t]);(null==e||null!=r&&r.node.level>e.node.level)&&(e=r)}null!=e&&r.add(e)}1===n.length&&this._duplicates.delete(t)}else this._graphics.delete(t),i.push(s)}i.length>0&&this.emit("change",{added:[],removed:i}),r.forEach((e=>this._updateForeignGraphics(e)))}_updateForeignGraphics(e){const t=[],r=e.node.index,i=e.node.level;let s=0;for(;s<e.graphics.length;){const o=e.graphics[s].nodeIndex;if(o===r){s++;continue}let n=1;for(;s+n<e.graphics.length&&e.graphics[s+n].nodeIndex===o;)n++;const a=this.getNode(o);if(null!=a&&a.node.level>i)s+=n;else{for(let i=s;i<s+n;i++){const s=e.graphics[i];s.nodeIndex=r,this._updateAndCompare(s,e,i)&&t.push(s)}s+=n}}this._notifyUpdated(t)}toArray(){return Array.from(this._graphics.values())}find(e){let t;return(0,P.oE)(this._graphics,(r=>!!e(r)&&(t=r,!0))),t}forEach(e){this._graphics.forEach((t=>e(t)))}forEachNode(e){this._nodes.forEach(((t,r)=>e(t,r)))}get nodeCount(){return this._nodes.size}_checkInvariants(){const e=new Map;this._nodes.forEach(((t,r)=>{r!==t.node.index&&console.error("Mismatched node index"),t.graphics.forEach((t=>{var i;e.set(t.objectId,1+(null!==(i=e.get(t.objectId))&&void 0!==i?i:0));const s=this._duplicates.get(t.objectId);s&&!s.includes(r)&&console.error("Node not listed in duplicate list"),s||t.nodeIndex===r||console.error("Unique graphic does not reference owning node index")}))})),this._graphics.size!==e.size&&console.error("Mismatch between actual and expected number of graphics");let t=0;e.forEach(((e,r)=>{t+=e>1?1:0;const i=this._graphics.get(r);if(!i)return void console.error("Missing graphic entry");const s=this._nodes.get(i.nodeIndex);if(!s)return void console.error("Graphic references unkown node");const o=this._duplicates.get(r);o?(o.length!==e&&console.error("Wrong number of entries in duplicate list"),o.forEach((e=>{const t=this._nodes.get(e);t?t.node.level>s.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")}))):e>1&&console.error("Missing duplicates entry")})),this._duplicates.size!==t&&console.error("Mismatch between expected and actual number of duplicate entries")}}var L=r(75162),V=r(44011),q=r(1247),R=r(48252),H=r(23224),Q=r(6777),U=r(94463),Z=r(89414),T=r(58890),k=r(91526),z=r(78485),B=r(17006),W=r(24405),K=r(93463);const J=(0,R.v)();class X{constructor(e,t,r,i){this.graphics=e,this.featureIds=t,this.attributeInfo=r,this.node=i}}let Y=class extends((0,q.l)((0,H.i)((0,F.A)(B.Z)))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this._pendingEditsQueue=Promise.resolve(),this.loadedGraphics=new j(((e,t,r)=>function(e,t,r){const i=t.attributeInfo;if(null==(null===i||void 0===i?void 0:i.loadedAttributes)||null==i.attributeData)return!1;let s=!1;for(const{name:o}of i.loadedAttributes)if(i.attributeData[o]){const t=(0,V.Jx)(i.attributeData[o],r);t!==e.attributes[o]&&(e.attributes[o]=t,s=!0)}return s}(e,t,r)),(e=>this.processor.graphicsCore.recreateGraphics(e))),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(e,t){return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then((()=>{var t;(0,V.tq)(this.layer,e,this._i3sOverrides),this.layer=e,this._i3sOverrides.destroy();const r=null===(t=this.view.resourceController)||void 0===t?void 0:t.memoryController;this._i3sOverrides=new L.v({view:this.view,layer:e,memoryController:r}),(0,a.SC)(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()})):null}initialize(){var e,t;this.addResolvingPromise(this.layer.indexInfo);const i=null===(e=this.view.resourceController)||void 0===e?void 0:e.memoryController;this._i3sOverrides=new L.v({view:this.view,layer:this.layer,memoryController:i}),(0,V.OJ)(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new Q.K({layerView:this}),this._updatingHandles.add((()=>this.layer.rangeInfos),(e=>this._rangeInfosChanged(e)),l.nn),this._updatingHandles.add((()=>this.layer.renderer),((e,t)=>this._rendererChange(e,t))),this._updatingHandles.add((()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted]),(()=>this._filterChange())),this.addHandles((0,l.YP)((()=>U.h.I3S_TREE_SHOW_TILES),(e=>{if(e&&!this._treeDebugger){const e=this._controller.crsIndex;r.e(322).then(r.bind(r,80322)).then((t=>{let{I3STreeDebugger:r}=t;!this._treeDebugger&&U.h.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new r({lv:this,view:this.view,nodeSR:e}))}))}else e||!this._treeDebugger||U.h.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)}),l.nn)),this._set("processor",new S.I({owner:this,preferredUpdatePolicy:z.j.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:e=>this._updateClippingExtent(e)})),null!==(t=this.processor.elevationAlignment)&&void 0!==t&&t.events.on("invalidate-elevation",(e=>this._controller.updateElevationChanged(e.extent,e.spatialReference))),this.supportsHeightUnitConversion&&(this._verticalScale=(0,b.k)("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache("psl-".concat(this.uid)),this._controller=new C.Z({layerView:this,scaleVisibilityEnabled:!1}),(0,V.X5)(this.layer.geometryDefinitions)&&(this._worker=new D((e=>this.view.resourceController.immediate.schedule(e)))),this.addHandles(this.layer.on("apply-edits",(e=>this._updatingHandles.addPromise(e.result)))),this.addHandles(this.layer.on("edits",(e=>{const t=this._pendingEditsQueue.then((()=>this._handleEdits(e))).then();this._pendingEditsQueue=t,this._updatingHandles.addPromise(t)}))),this.when((()=>{this._setupQueryEngine(),this._updatingHandles.add((()=>this.maximumNumberOfFeatures),(e=>this._controller.featureTarget=e),l.nn),this._updatingHandles.add((()=>this.suspended),(e=>{e&&this._removeAllNodeData()}))}))}destroy(){this._treeDebugger=(0,a.SC)(this._treeDebugger),this._i3sOverrides=(0,a.SC)(this._i3sOverrides),this._set("processor",(0,a.SC)(this.processor)),this._controller=(0,a.SC)(this._controller),this._queryEngine=(0,a.SC)(this._queryEngine),this._worker=(0,a.SC)(this._worker),this._memCache=(0,a.SC)(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=(0,a.SC)(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var e,t;return null!==(e=null===(t=this._controller)||void 0===t?void 0:t.updatingProgress)&&void 0!==e?e:1}get requiredFields(){var e,t;return null!==(e=null===(t=this._fieldsHelper)||void 0===t?void 0:t.requiredFields)&&void 0!==e?e:[]}get maximumNumberOfFeatures(){var e,t;const r=null===(e=this.processor)||void 0===e||null===(e=e.graphicsCore)||void 0===e?void 0:e.displayFeatureLimit;return null!==(t=null===r||void 0===r?void 0:r.maximumNumberOfFeatures)&&void 0!==t?t:0}set maximumNumberOfFeatures(e){null!=e?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!(null===(e=this._controller)||void 0===e||!e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort(((e,t)=>e-t)):null}get lodFactor(){return"Labels"===this.layer.semantic?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){var e;return!this.suspended&&!(null===(e=this._controller)||void 0===e||!e.rootNodeVisible)}get legendEnabled(){var e;return this.contentVisible&&!0===(null===(e=this.i3slayer)||void 0===e?void 0:e.legendEnabled)}async whenGraphicAttributes(e,t){return(0,V.bf)(this.layer,e,this._getObjectIdField(),t,(()=>[...this.loadedGraphics.nodes()]))}getHit(e){var t;if(!this.loadedGraphics)return null;const r=(0,E.mW)(this.loadedGraphics.find((t=>t.uid===e)),this.layer),i=this._getObjectIdField();return null!==r&&void 0!==r&&null!==(t=r.attributes)&&void 0!==t&&t[i]?(r.layer=this.layer,r.sourceLayer=this.layer,{type:"graphic",graphic:r,layer:r.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}isUpdating(){var e,t,r;return!!(null!==(e=this._controller)&&void 0!==e&&e.updating||null!==(t=this.processor)&&void 0!==t&&t.updating||null!==(r=this._fieldsHelper)&&void 0!==r&&r.updating||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return(0,A.sw)(this._attributeEditingContext,e)}async _decompressBinaryPointData(e,t){const r={geometryBuffer:e.geometryBuffer};null==this._worker&&(this._worker=new D((e=>this.view.resourceController.immediate.schedule(e))));const i=await this._worker.invoke(r,t);if(null==i)throw new Error("Failed to decompress Draco point data");return{positionData:i.positions,featureIds:i.featureIds}}async addNode(e,t,r){if(!ee(t)&&!function(e){return"pointData"in e}(t))throw new Error;if(this.loadedGraphics.hasNode(e.index))return void n.Z.getLogger(this).error("I3S node "+e.id+" already added");const i=null!=this.layer.fullExtent?function(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,null!=e.zmin&&null!=e.zmax&&(e.zmin-=t,e.zmax+=t),null!=e.mmin&&null!=e.mmax&&(e.mmin-=t,e.mmax+=t),e}(this.layer.fullExtent.clone(),.5):null,s=[],{featureIds:o,pointPositions:a}=ee(t)?await this._extractBinaryPointPositions(e,t,r):this._extractLegacyPointPositions(t);this._validatePositions(e,o,a,i,s);const l=this._controller.crsVertex,d=this.view.spatialReference;(0,g.projectBuffer)(a,l,0,a,d,0,o.length);const h=ee(t)?e.level:0,u=this._createGraphics(o,a,e.index,h),c=new X(u,o,t.attributeDataInfo,e);if(await this._i3sOverrides.applyAttributeOverrides(c.featureIds,t.attributeDataInfo,r),e.numFeatures=c.graphics.length,this._updateNodeMemory(e),te(c),s.length>0&&(this._computeObb(e,s,l),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(c);if(null!=this._verticalScale)for(const n of c.graphics)this._verticalScale(n.geometry);const p=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(null!=p){const e=(0,N.ql)(this.view.map,this.layer.uid);for(let t=0;t<c.featureIds.length;t++){var _;const r=c.featureIds[t];p.setUidToObjectAndLayerId(r,c.graphics[t].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&!e&&(0,W.zc)(this.layer,null===(_=this.view.popup)||void 0===_?void 0:_.defaultPopupTemplateEnabled),c.node.resources.attributes,t)}}this.loadedGraphics.addNode(e.index,c),this._controller.updateLoadStatus(e.index,!0),this._filterNode(c),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,r){const i=this._controller.crsIndex,s=i.isGeographic?this.view.renderSpatialReference:i;(0,g.projectBuffer)(t,r,0,t,s,0,t.length/3),e.serviceObb=(0,Z.Qb)(new k.U(t,3)),i.isGeographic&&(0,_.S)(e.serviceObb.center,s,e.serviceObb.center,i)}isNodeLoaded(e){return this.loadedGraphics.hasNode(e)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(e,t,r){const i=await this._decompressBinaryPointData(t,r),s=i.positionData,o=s.length/3,n=(0,f.bg)(3*o),a=null!=e.serviceObb?e.serviceObb.center:[0,0,0],l=Math.abs(a[2])*2**-20;for(let d=0;d<o;d++){const e=3*d;n[e]=s[e]+a[0],n[e+1]=s[e+1]+a[1],n[e+2]=s[e+2]+a[2],Math.abs(n[e+2])<l&&(n[e+2]=0)}return{featureIds:i.featureIds?(0,f.QZ)(i.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(e){const t=e.pointData.length,r=(0,f.bg)(3*t),i=new Array;for(let l=0;l<t;l++){var s,o,n,a;const t=e.pointData[l],d=t.featureDataPosition,h=d.length,u=null!==(s=null===(o=t.geometries)||void 0===o?void 0:o[0])&&void 0!==s?s:re[h],c=t.featureIds[0];if("Embedded"!==u.type||"points"!==u.params.type||h<2||h>3)continue;const p=null!==(n=null===(a=u.params.vertexAttributes)||void 0===a?void 0:a.position)&&void 0!==n?n:[0,0,0],g=3*i.length;r[g]=d[0]+p[0],r[g+1]=d[1]+p[1],r[g+2]=3===h?d[2]+p[2]:NaN,i.push(c)}return{featureIds:i,pointPositions:r}}_validatePositions(e,t,r,i,s){if(null==i&&e.serviceObb)return;const o=t.length;for(let a=0;a<o;a++){const t=3*a;(0,c.s)(ie,r[t],r[t+1],r[t+2]);const o=!Number.isNaN(r[2]);null==i||(o?(0,v.Qg)(i,ie):(0,v.OQ)(i,ie))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&n.Z.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&n.Z.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObb||s.push(ie[0],ie[1],ie[2])}}_createGraphics(e,t,r,i){const o=e.length,n=this._getObjectIdField(),a=this.processor.graphicsCore,l=new Array,d=this.view.spatialReference;for(let h=0;h<o;h++){const o=e[h],u={};null!=o&&(u[n]=o);const c=null!==o&&void 0!==o?o:s.Z.generateUID(),p=3*h,g=isNaN(t[p+2])?void 0:t[p+2],_=(0,x.T)(t[p],t[p+1],g,d),v=this.loadedGraphics.get(c);if(null!=v)(null==v.level||v.level<i)&&(se.property="geometry",se.graphic=v,se.oldValue=v.geometry,se.newValue=_,v.geometry=_,v.level=i,a.graphicUpdateHandler(se)),l.push(v);else{const e=s.Z.generateUID();l.push({objectId:c,uid:e,geometry:_,attributes:u,visible:!0,nodeIndex:r,level:i})}}return l}_updateNodeMemory(e){e.memory=4096+(null!=e.numFeatures?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce(((e,t)=>(0,m.Xw)(t)+e),(0,d.Xw)(e.featureIds)+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return"".concat(e.index)}_removeAllNodeData(){this.loadedGraphics.forEachNode(((e,t)=>{if(e){const t=e.node;this._updateNodeMemory(t),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)})),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this.loadedGraphics.getNode(e);return null==t?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}async loadCachedNodeData(e){var t;return null===(t=this._memCache)||void 0===t?void 0:t.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,r,i){this.loadedGraphics.hasNode(e.index)?n.Z.getLogger(this).error("I3S node "+e.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(t.featureIds,r,i),this.loadedGraphics.addNode(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),t.attributeInfo=r,this._attributeValuesChanged(t),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this.loadedGraphics.forEachNode((t=>e.push(t.node.id))),e.sort()}getVisibleNodes(){const e=new Array;return this.loadedGraphics.forEachNode((t=>e.push(t.node))),e}getLoadedNodeIndices(e){this.loadedGraphics.forEachNode(((t,r)=>e.push(r)))}getLoadedAttributes(e){const t=this.loadedGraphics.getNode(e);if(null!=(null===t||void 0===t?void 0:t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this.loadedGraphics.getNode(e);if(null!=(null===t||void 0===t?void 0:t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const r=this.loadedGraphics.getNode(e);null!=(null===r||void 0===r?void 0:r.attributeInfo)&&(r.attributeInfo.attributeData=t,this._attributeValuesChanged(r))}async updateAttributes(e,t,r){const i=this.loadedGraphics.getNode(e);null!=i&&(await this._i3sOverrides.applyAttributeOverrides(i.featureIds,t,r),i.attributeInfo=t,this._attributeValuesChanged(i))}_attributeValuesChanged(e){if(te(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map((e=>e.uid));this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||y.d}_getGlobalIdField(){var e;return null===(e=this.layer.associatedLayer)||void 0===e?void 0:e.globalIdField}async _rendererChange(e,t){const{layer:{fieldsIndex:r}}=this,i=new Set;let s,o;e?(await e.collectRequiredFields(i,r),s=Array.from(i).sort()):s=[],i.clear(),t?(await t.collectRequiredFields(i,r),o=Array.from(i).sort()):o=[],s.length===o.length&&s.every(((e,t)=>s[t]===o[t]))||this._reloadAllNodes()}_rangeInfosChanged(e){null!=e&&e.length>0&&n.Z.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode((e=>this._filterNode(e)))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,r=this._excludeObjectIdsSorted,i=this._getObjectIdField();for(const s of e.graphics){const e=s.visible,n=!t||this._evaluateClause(t,s),a=null==r||(0,o.$A)(r,s.attributes[i])<0;s.visible=n&&a,e!==s.visible&&(se.graphic=s,se.property="visible",se.oldValue=e,se.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(se))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new w.Z(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():w.Z.from(e))}_setupQueryEngine(){const e=()=>this.processor.featureStore;this._queryEngine=new G.q({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e()},hasZ:this.hasZ,hasM:this.hasM},priority:K.T8.FEATURE_QUERY_ENGINE})}get usedMemory(){var e,t;return null!==(e=null===(t=this.processor)||void 0===t||null===(t=t.graphicsCore)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}get unloadedMemory(){var e,t,r,i;return.8*((null!==(e=null===(t=this._controller)||void 0===t?void 0:t.unloadedMemoryEstimate)&&void 0!==e?e:0)+(null!==(r=null===(i=this.processor)||void 0===i||null===(i=i.graphicsCore)||void 0===i?void 0:i.unprocessedMemoryEstimate)&&void 0!==r?r:0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}async _handleEdits(e){const t=this._attributeEditingContext,r=await(0,A.Qw)(t,e);(0,A.Z6)(t,r)}get _attributeEditingContext(){var e;const t=this._getObjectIdField(),r=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:t,globalIdField:r,forEachNode:e=>this.loadedGraphics.forEachNode((t=>e(t.node,t.featureIds))),attributeStorageInfo:null!==(e=this.i3slayer.attributeStorageInfo)&&void 0!==e?e:[],i3sOverrides:this._i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,r,i)=>{this._setAttributeData(e,r);const s=this.loadedGraphics.getNode(e);if(null!=i){const e=this.loadedGraphics.get(i.attributes[t]);null!=e&&this.processor.graphicsCore.recreateGraphics([e])}else null!=s&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this.loadedGraphics.nodeCount,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}};(0,i._)([(0,h.Cb)()],Y.prototype,"processor",void 0),(0,i._)([(0,h.Cb)({type:I.Z})],Y.prototype,"filter",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"loadedGraphics",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"i3slayer",null),(0,i._)([(0,h.Cb)()],Y.prototype,"_controller",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"updating",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"suspended",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"holeFilling",void 0),(0,i._)([(0,h.Cb)(T.q)],Y.prototype,"updatingProgress",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"updatingProgressValue",null),(0,i._)([(0,h.Cb)(J.requiredFields)],Y.prototype,"requiredFields",null),(0,i._)([(0,h.Cb)(J.availableFields)],Y.prototype,"availableFields",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"_fieldsHelper",void 0),(0,i._)([(0,h.Cb)({type:Number})],Y.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Y.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,h.Cb)()],Y.prototype,"_excludeObjectIdsSorted",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Y.prototype,"lodFactor",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Y.prototype,"hasM",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Y.prototype,"hasZ",null),(0,i._)([(0,h.Cb)()],Y.prototype,"contentVisible",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Y.prototype,"legendEnabled",null),Y=(0,i._)([(0,u.j)("esri.views.3d.layers.SceneLayerGraphicsView3D")],Y);const $=Y;function ee(e){return"geometryBuffer"in e&&null!==e.geometryBuffer}function te(e){const t=e.attributeInfo,r=e.node.index;if(null!=(null===t||void 0===t?void 0:t.loadedAttributes)&&null!=t.attributeData)for(let i=0;i<e.graphics.length;i++){const s=e.graphics[i];if(s.nodeIndex===r){s.attributes||(s.attributes={});for(const{name:e}of t.loadedAttributes)t.attributeData[e]&&(s.attributes[e]=(0,V.Jx)(t.attributeData[e],i))}}}const re={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},ie=(0,p.c)(),se={graphic:null,property:null,oldValue:null,newValue:null}}}]);
//# sourceMappingURL=5225.6aba4328.chunk.js.map