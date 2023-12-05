"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[8782],{63231:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return u.test(e)}function r(e){var t;return null!==(t=a(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!l.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){var t,n,s,i;const r=u.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,l=+o.month-1,d=+o.day,c=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(s=o.seconds)&&void 0!==s?s:"0");if(c>23)return null;if(p>59)return null;if(f>59)return null;const y=null!==(i=o.ms)&&void 0!==i?i:"0",m=y?+y.padEnd(3,"0").substring(0,3):0;let h;if(o.isUTC||!o.offsetSign)h=Date.UTC(a,l,d,c,p,f,m);else{const e=+o.offsetHours,t=+o.offsetMinutes;h=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(a,l,d,c,p,f,m)}return Number.isNaN(h)?null:h}n.d(t,{mu:()=>i,of:()=>s,sG:()=>r});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},25820:(e,t,n)=>{n.d(t,{S:()=>i,X:()=>s});const s=1;function i(e,t){let n=0;for(const i of t){var s;const t=null===(s=i.attributes)||void 0===s?void 0:s[e];"number"==typeof t&&isFinite(t)&&(n=Math.max(n,t))}return n}},48782:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var s=n(10064),i=n(77981),r=n(92975),o=n(83406),a=n(25820),u=n(68928),l=n(19995),d=n(75878),c=n(63543),p=n(68808),f=n(52410),y=n(85249),m=n(37270),h=n(6701);const g=r.Zn,b={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.Zn},I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function v(e){return(0,i.wp)(e)?null!=e.z:!!e.hasZ}function F(e){return(0,i.wp)(e)?null!=e.m:!!e.hasM}class T{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){var t;const n=[],{features:i}=e,r=this._inferLayerProperties(i,e.fields),o=e.fields||[],p=null!=e.hasM?e.hasM:!!r.hasM,v=null!=e.hasZ?e.hasZ:!!r.hasZ,F=!e.spatialReference&&!r.spatialReference,T=F?g:e.spatialReference||r.spatialReference,E=F?b:null,_=e.geometryType||r.geometryType,j=!_;let R=e.objectIdField||r.objectIdField,q=e.timeInfo;const w=new f.Z(o);if(!j&&(F&&n.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!R)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&R!==r.objectIdField&&(n.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'.concat(R,'" doesn\'t match the field name "').concat(r.objectIdField,'", found in the provided fields')}),R=r.objectIdField),R&&!r.objectIdField){const e=w.get(R);e?(R=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:R,name:R,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const a of o){if(null==a.name&&(a.name=a.alias),null==a.alias&&(a.alias=a.name),!a.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:a});if(a.name===R&&(a.type="esriFieldTypeOID"),!y.v.jsonValues.includes(a.type))throw new s.Z("feature-layer:invalid-field-type",'invalid type for field "'.concat(a.name,'"'),{field:a});null==a.length&&(a.length=(0,m.ZR)(a))}const x={};for(const s of o)if("esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type){const e=(0,m.os)(s);void 0!==e&&(x[s.name]=e)}if(q){if(q.startTimeField){const e=w.get(q.startTimeField);e?(q.startTimeField=e.name,e.type="esriFieldTypeDate"):q.startTimeField=null}if(q.endTimeField){const e=w.get(q.endTimeField);e?(q.endTimeField=e.name,e.type="esriFieldTypeDate"):q.endTimeField=null}if(q.trackIdField){const e=w.get(q.trackIdField);e?q.trackIdField=e.name:(q.trackIdField=null,n.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:q}}))}q.startTimeField||q.endTimeField||(n.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:q}}),q=null)}const S=w.dateFields.length?{timeZoneIANA:null!==(t=e.dateFieldsTimeZone)&&void 0!==t?t:h.pt}:null;this._createDefaultAttributes=(0,c.Dm)(x,R);const D={warnings:n,featureErrors:[],layerDefinition:{...I,drawingInfo:(0,c.bU)(_),templates:(0,c.Hq)(x),extent:E,geometryType:_,objectIdField:R,fields:o,hasZ:v,hasM:p,timeInfo:q,dateFieldsTimeReference:S},assignedObjectIds:{}};if(this._queryEngine=new d.q({fieldsIndex:f.Z.fromLayerJSON({fields:o,timeInfo:q,dateFieldsTimeReference:S}),geometryType:_,hasM:p,hasZ:v,objectIdField:R,spatialReference:T,featureStore:new u.Z({geometryType:_,hasM:p,hasZ:v}),timeInfo:q,cacheSpatialQueries:!0}),null===i||void 0===i||!i.length)return this._nextObjectId=a.X,D;const O=(0,a.S)(R,i);return this._nextObjectId=O+1,await(0,l._W)(i,T),this._loadInitialFeatures(D,i)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,p.b)(t,n),(0,l._W)(e.adds,t),(0,l._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,s,r=null,o=null,a=null;for(const u of e){const e=u.geometry;if(null!=e&&(r||(r=(0,i.Ji)(e)),o||(o=e.spatialReference),null==n&&(n=v(e)),null==s&&(s=F(e)),r&&o&&null!=n&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const n="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,n||s}))&&(a=e.name)}return{geometryType:r,spatialReference:o,objectIdField:a,hasM:s,hasZ:n}}async _loadInitialFeatures(e,t){const{geometryType:n,hasM:s,hasZ:r,objectIdField:a,spatialReference:u,featureStore:d,fieldsIndex:c}=this._queryEngine,f=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&n!==(0,i.Ji)(o.geometry)){e.featureErrors.push((0,p.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,p.O0)(c,t,o.attributes,!0);s?e.featureErrors.push(s):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[a]),null!=o.geometry&&(o.geometry=(0,l.iV)(o.geometry,o.geometry.spatialReference,u)),f.push(o))}d.addMany((0,o.Yn)([],f,n,r,s,a));const{fullExtent:y,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=y,m){const{start:t,end:n}=m;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(null!==t&&void 0!==t&&t.length&&this._applyAddEdits(i,t),null!==n&&void 0!==n&&n.length&&this._applyUpdateEdits(i,n),null!==s&&void 0!==s&&s.length){for(const e of s)i.deleteResults.push((0,p.d1)(e));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:r,hasZ:a,objectIdField:u,spatialReference:d,featureStore:c,fieldsIndex:f}=this._queryEngine,y=[];for(const o of t){if(o.geometry&&s!==(0,i.Ji)(o.geometry)){n.push((0,p.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,p.O0)(f,t,o.attributes);if(r)n.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[u];e.uidToObjectId[o.uid]=t}if(null!=o.geometry){var m;const e=null!==(m=o.geometry.spatialReference)&&void 0!==m?m:d;o.geometry=(0,l.iV)((0,p.og)(o.geometry,e),e,d)}y.push(o),n.push((0,p.d1)(o.attributes[u]))}}c.addMany((0,o.Yn)([],y,s,a,r,u))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:s,hasM:r,hasZ:a,objectIdField:u,spatialReference:d,featureStore:c,fieldsIndex:f}=this._queryEngine;for(const m of t){const{attributes:e,geometry:t}=m,h=null===e||void 0===e?void 0:e[u];if(null==h){n.push((0,p.av)("Identifier field ".concat(u," missing")));continue}if(!c.has(h)){n.push((0,p.av)("Feature with object id ".concat(h," missing")));continue}const g=(0,o.EI)(c.getFeature(h),s,a,r);if(null!=t){var y;if(s!==(0,i.Ji)(t)){n.push((0,p.av)("Incorrect geometry type."));continue}const e=null!==(y=t.spatialReference)&&void 0!==y?y:d;g.geometry=(0,l.iV)((0,p.og)(t,e),e,d)}if(e){const t=(0,p.O0)(f,g.attributes,e);if(t){n.push(t);continue}}c.add((0,o.XA)(g,s,a,r,u)),n.push((0,p.d1)(h))}}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;n&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},63543:(e,t,n)=>{n.d(t,{Dm:()=>d,Hq:()=>c,MS:()=>p,bU:()=>a});var s=n(93169),i=n(84652),r=n(60480),o=n(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(u.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(l++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},68808:(e,t,n)=>{n.d(t,{O0:()=>p,av:()=>u,b:()=>h,d1:()=>d,og:()=>m});var s=n(63231),i=n(92975),r=n(37270);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new l(e)}const c=new Set;function p(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];c.clear();for(const o in n){const i=e.get(o);if(!i)continue;const a=f(i,n[o]);if(c.add(i.name),i&&(s||i.editable)){const e=(0,r.Qc)(i,a);if(e)return u((0,r.vP)(e,i,a));t[i.name]=a}}for(const r of null!==(i=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==i?i:[]){var i;if(!c.has(r.name))return u('missing required field "'.concat(r.name,'"'))}return null}function f(e,t){let n=t;return(0,r.H7)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.qN)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.y2)(e)&&"string"==typeof t&&(n=(0,s.sG)(t)),(0,r.Pz)(n)}let y;function m(e,t){if(!e||!(0,i.JY)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function h(e,t){!(0,i.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([n.e(9058),n.e(3645)]).then(n.bind(n,50309))),y}()}}}]);
//# sourceMappingURL=8782.d0dbb4c3.chunk.js.map