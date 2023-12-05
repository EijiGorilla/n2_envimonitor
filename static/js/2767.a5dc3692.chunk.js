"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[2767],{36700:(e,t,r)=>{r.d(t,{x:()=>o});var i=r(44179),n=r(75691),s=r(61309);class o extends n.a{constructor(e){super({...e,constraint:new i.Hk(e.targetPoint)})}get hints(){return[new s.n(this.targetPoint,this.isDraped,this.domain)]}}},92767:(e,t,r)=>{r.r(t),r.d(t,{SceneLayerSnappingSource:()=>H});var i=r(27366),n=r(7138),s=r(63780),o=r(66978),a=r(49861),d=(r(25243),r(93169),r(69912)),c=r(42537),l=r(92026),u=r(46634),h=r(7494),p=r(71353),y=r(46798),_=r(23470),g=r(38054),w=r(95905),v=r(36700);let S=class extends n.Z{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new C(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:i}=e,n=b;this.renderCoordsHelper.toRenderCoords(i,r.spatialReference,n);const s=e.distance,o="number"==typeof s?s:s.distance,a=await this._workerHandle.invoke({bounds:(0,_.f)(n[0],n[1],n[2],o),returnEdge:e.returnEdge,returnVertex:"none"!==e.vertexMode},t);return a.candidates.sort(((e,t)=>e.distance-t.distance)),a.candidates.map((e=>this._convertCandidate(r,e)))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new w.L({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new v.x({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate(e,t){let{spatialReference:r}=e;const i=(0,p.c)();return this.renderCoordsHelper.fromRenderCoords(t,i,r),(0,g.uo)(i)}async _fetchAllEdgeLocations(e,t){const r=[],i=[];for(const{id:n,uid:s}of e.components)this._ids.has(n)&&r.push((async()=>{const e=await this.fetchEdgeLocations(n,t.signal),r=e.locations.buffer;return i.push(r),{id:n,uid:s,objectIds:e.objectIds,locations:r,origin:e.origin,type:e.type}})());return{result:{components:(await Promise.all(r)).filter((e=>{let{id:t}=e;return this._ids.has(t)}))},transferList:i}}};(0,i._)([(0,a.Cb)({constructOnly:!0})],S.prototype,"renderCoordsHelper",void 0),(0,i._)([(0,a.Cb)({constructOnly:!0})],S.prototype,"fetchEdgeLocations",void 0),(0,i._)([(0,a.Cb)({constructOnly:!0})],S.prototype,"schedule",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],S.prototype,"availability",void 0),S=(0,i._)([(0,d.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],S);class C extends y.q{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const b=(0,p.c)();let f=class extends n.Z{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new u.R,this._abortController=new AbortController}destroy(){this._tracker=(0,l.hw)(this._tracker),this._abortController=(0,l.IM)(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new h.D(k(t)),this._workerHandle=new S({renderCoordsHelper:this.view.renderCoordsHelper,schedule:k(t),fetchEdgeLocations:async(e,t)=>{if(null==this._tracker)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(e,this._edgeWorker,t)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([(0,c.ed)(this._workerHandle),(0,c.ed)(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){var e;if(this.destroyed)return;const t=null===(e=this._abortController)||void 0===e?void 0:e.signal,r=await this.getLayerView();null==r||(0,o.Hc)(t)||(this._tracker=r.trackSnappingSources({add:(e,r)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:e,bounds:r},t))},remove:e=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:e},t))}}))}};function k(e){return t=>e.immediate.schedule(t)}(0,i._)([(0,a.Cb)({constructOnly:!0})],f.prototype,"getLayerView",void 0),(0,i._)([(0,a.Cb)({constructOnly:!0})],f.prototype,"view",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],f.prototype,"updating",null),(0,i._)([(0,a.Cb)({readOnly:!0})],f.prototype,"availability",void 0),f=(0,i._)([(0,d.j)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],f);let H=class extends n.Z{get updating(){return this._i3sSources.some((e=>e.updating))}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach((e=>e.destroy())),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map((r=>r.fetchCandidates(e,t))));return(0,o.k_)(t),r.flat()}refresh(){this._i3sSources.forEach((e=>e.refresh()))}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map((r=>"building-component"===r.type?new f({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null)).filter(s.pC)}_getSceneLayerI3SSource(e,t){return new f({getLayerView:async()=>{const r=await e.whenLayerView(t);return"scene-layer-graphics-3d"===r.type?void 0:r},view:e})}};(0,i._)([(0,a.Cb)({constructOnly:!0})],H.prototype,"layerSource",void 0),(0,i._)([(0,a.Cb)({constructOnly:!0})],H.prototype,"view",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],H.prototype,"updating",null),(0,i._)([(0,a.Cb)({readOnly:!0})],H.prototype,"availability",void 0),H=(0,i._)([(0,d.j)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],H)}}]);
//# sourceMappingURL=2767.a5dc3692.chunk.js.map