"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[9532],{9532:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ee});var r=o(27366),i=o(44055),n=o(76200),s=o(10064),l=o(84652),a=o(32718),d=o(97642),p=o(18202),u=o(66978),c=o(35995),y=o(49861),f=o(25243),h=o(38511),v=o(69912),b=o(31201),m=o(30651),g=o(27961),C=o(11936),w=o(6061),_=o(29598),T=o(56811),j=o(81118),S=o(27135),x=o(46784);o(63780),o(93169);let I=class extends x.wq{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,r._)([(0,y.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],I.prototype,"field",void 0),(0,r._)([(0,y.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],I.prototype,"type",void 0),I=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudFilter")],I);const V=I;var Z;let R=Z=class extends V{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new Z({field:this.field,requiredClearBits:(0,l.d9)(this.requiredClearBits),requiredSetBits:(0,l.d9)(this.requiredSetBits)})}};(0,r._)([(0,y.Cb)({type:[f.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],R.prototype,"requiredClearBits",void 0),(0,r._)([(0,y.Cb)({type:[f.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],R.prototype,"requiredSetBits",void 0),(0,r._)([(0,S.J)({pointCloudBitfieldFilter:"bitfield"})],R.prototype,"type",void 0),R=Z=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],R);const P=R;var q;let F=q=class extends V{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new q({field:this.field,includedReturns:(0,l.d9)(this.includedReturns)})}};(0,r._)([(0,y.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"includedReturns",void 0),(0,r._)([(0,S.J)({pointCloudReturnFilter:"return"})],F.prototype,"type",void 0),F=q=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],F);const B=F;var z;let N=z=class extends V{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new z({field:this.field,mode:this.mode,values:(0,l.d9)(this.values)})}};(0,r._)([(0,y.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"mode",void 0),(0,r._)([(0,S.J)({pointCloudValueFilter:"value"})],N.prototype,"type",void 0),(0,r._)([(0,y.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"values",void 0),N=z=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],N);const O={key:"type",base:V,typeMap:{value:N,bitfield:P,return:B}};var k,A=o(45948),D=o(83040),E=o(25610),K=o(89860),L=o(21134),M=o(2632);let U=k=class extends M.Z{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new k({...this.cloneProperties(),field:(0,l.d9)(this.field)})}};(0,r._)([(0,S.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],U.prototype,"type",void 0),(0,r._)([(0,y.Cb)({type:String,json:{write:!0}})],U.prototype,"field",void 0),U=k=(0,r._)([(0,v.j)("esri.renderers.PointCloudRGBRenderer")],U);const J=U;var G=o(89431),W=o(87005);const X={key:"type",base:M.Z,typeMap:{"point-cloud-class-breaks":L.Z,"point-cloud-rgb":J,"point-cloud-stretch":G.Z,"point-cloud-unique-value":W.Z},errorContext:"renderer"};var $=o(74509),Q=o(81085);const Y=(0,E.v)();let H=class extends((0,j.Vt)((0,C.Y)((0,w.q)((0,_.I)((0,T.M)((0,d.R)((0,g.V)(m.Z)))))))){constructor(){super(...arguments),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return null!==t&&void 0!==t&&t.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new D.Z;return"FieldTypeInteger"===e.type&&((e=(0,l.d9)(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new D.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,o,r){(0,p.RB)("layerDefinition.drawingInfo.renderer",e.write({},r),t)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.r9).then((()=>this._fetchService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=(0,Q.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var t;const o=this.fieldsIndex.get("RETURNS");if(!o)return;const r=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((e=>e.fieldName===o.name));if(!r)return;const i=new K.Z({name:"pcl-returns-decoded",title:o.alias||o.name,expression:"\n        var returnValue = $feature.".concat(o.name,';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      ')});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var t;const o=this.fieldsIndex.get("RGB");if(!o)return;const r=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((e=>e.fieldName===o.name));if(!r)return;const i=new K.Z({name:"pcl-rgb-decoded",title:o.alias||o.name,expression:"\n        var rgb = $feature.".concat(o.name,';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      ')});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new s.Z("pointcloudlayer:field-unexisting","Field '".concat(e,"' does not exist on the layer"));for(const r of this.attributeStorageInfo)if(r.name===o.name){const e=(0,c.v_)(this.parsedUrl.path,"./statistics/".concat(r.key));return(0,n.Z)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(j.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(j.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,$.LR)(a.Z.getLogger(this),(0,$.Uy)("Point cloud layers","absolute-height",e)),(0,$.LR)(a.Z.getLogger(this),(0,$.kf)("Point cloud layers",e))}};(0,r._)([(0,y.Cb)({type:["PointCloudLayer"]})],H.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.Cb)(A.C_)],H.prototype,"popupEnabled",void 0),(0,r._)([(0,y.Cb)({type:i.Z,json:{name:"popupInfo",write:!0}})],H.prototype,"popupTemplate",void 0),(0,r._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],H.prototype,"defaultPopupTemplate",null),(0,r._)([(0,y.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],H.prototype,"opacity",void 0),(0,r._)([(0,y.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,r._)([(0,y.Cb)({types:[O],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],H.prototype,"filters",void 0),(0,r._)([(0,y.Cb)({type:[D.Z]})],H.prototype,"fields",void 0),(0,r._)([(0,y.Cb)(Y.fieldsIndex)],H.prototype,"fieldsIndex",void 0),(0,r._)([(0,h.r)("service","fields",["fields","attributeStorageInfo"])],H.prototype,"readServiceFields",null),(0,r._)([(0,y.Cb)(Y.outFields)],H.prototype,"outFields",void 0),(0,r._)([(0,y.Cb)({readOnly:!0})],H.prototype,"attributeStorageInfo",void 0),(0,r._)([(0,y.Cb)(A.PV)],H.prototype,"elevationInfo",null),(0,r._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],H.prototype,"path",void 0),(0,r._)([(0,y.Cb)(A.rn)],H.prototype,"legendEnabled",void 0),(0,r._)([(0,y.Cb)({types:X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:X},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],H.prototype,"renderer",void 0),(0,r._)([(0,b.c)("renderer")],H.prototype,"writeRenderer",null),(0,r._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),H=(0,r._)([(0,v.j)("esri.layers.PointCloudLayer")],H);const ee=H},21134:(e,t,o)=>{o.d(t,{Z:()=>m});var r,i=o(27366),n=o(84652),s=o(49861),l=o(25243),a=o(27135),d=o(69912),p=o(2632),u=o(87125),c=o(51995),y=o(46784);let f=r=class extends y.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,n.d9)(this.color)})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],f.prototype,"minValue",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],f.prototype,"maxValue",void 0),(0,i._)([(0,s.Cb)({type:c.Z,json:{type:[l.z8],write:!0}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],f);const h=f;var v;let b=v=class extends p.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new v({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.d9)(this.colorClassBreakInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],b.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],b.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:u.I,json:{write:!0}})],b.prototype,"legendOptions",void 0),(0,i._)([(0,s.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],b.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[h],json:{write:!0}})],b.prototype,"colorClassBreakInfos",void 0),b=v=(0,i._)([(0,d.j)("esri.renderers.PointCloudClassBreaksRenderer")],b);const m=b},2632:(e,t,o)=>{o.d(t,{Z:()=>j});var r,i=o(27366),n=o(43404),s=o(46784),l=o(84652),a=o(49861),d=(o(25243),o(69912));o(63780),o(93169);let p=r=class extends s.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.ColorModulation")],p);const u=p,c=new n.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.wq{};(0,i._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),y=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const f=y;var h,v=o(27135);let b=h=class extends f{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,v.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],b.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],b.prototype,"size",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],b.prototype,"useRealWorldSymbolSizes",void 0),b=h=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],b);const m=b;var g;let C=g=class extends f{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new g({scaleFactor:this.scaleFactor})}};(0,i._)([(0,v.J)({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0),C=g=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C);const w={key:"type",base:f,typeMap:{"fixed-size":m,splat:C}},_=(0,n.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let T=class extends s.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.d9)(this.pointSizeAlgorithm),colorModulation:(0,l.d9)(this.colorModulation),pointsPerInch:(0,l.d9)(this.pointsPerInch)}}};(0,i._)([(0,a.Cb)({type:_.apiValues,readOnly:!0,nonNullable:!0,json:{type:_.jsonValues,read:!1,write:_.write}})],T.prototype,"type",void 0),(0,i._)([(0,a.Cb)({types:w,json:{write:!0}})],T.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,a.Cb)({type:u,json:{write:!0}})],T.prototype,"colorModulation",void 0),(0,i._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],T.prototype,"pointsPerInch",void 0),T=(0,i._)([(0,d.j)("esri.renderers.PointCloudRenderer")],T),(T||(T={})).fieldTransformTypeKebabDict=new n.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const j=T},89431:(e,t,o)=>{o.d(t,{Z:()=>y});var r,i=o(27366),n=o(84652),s=o(49861),l=(o(25243),o(27135)),a=o(69912),d=o(2632),p=o(87125),u=o(57203);let c=r=class extends d.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),stops:(0,n.d9)(this.stops),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,l.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:p.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,i._)([(0,s.Cb)({type:d.Z.fieldTransformTypeKebabDict.apiValues,json:{type:d.Z.fieldTransformTypeKebabDict.jsonValues,read:d.Z.fieldTransformTypeKebabDict.read,write:d.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[u.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,i._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},87005:(e,t,o)=>{o.d(t,{Z:()=>m});var r,i=o(27366),n=o(84652),s=o(49861),l=o(25243),a=o(27135),d=o(69912),p=o(2632),u=o(87125),c=o(51995),y=o(46784);let f=r=class extends y.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,n.d9)(this.values),color:(0,n.d9)(this.color)})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.Cb)({type:[String],json:{write:!0}})],f.prototype,"values",void 0),(0,i._)([(0,s.Cb)({type:c.Z,json:{type:[l.z8],write:!0}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],f);const h=f;var v;let b=v=class extends p.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new v({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,n.d9)(this.colorUniqueValueInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],b.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],b.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],b.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[h],json:{write:!0}})],b.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,s.Cb)({type:u.I,json:{write:!0}})],b.prototype,"legendOptions",void 0),b=v=(0,i._)([(0,d.j)("esri.renderers.PointCloudUniqueValueRenderer")],b);const m=b},74509:(e,t,o)=>{o.d(t,{Jn:()=>a,LR:()=>g,RL:()=>d,Uy:()=>v,VW:()=>l,W_:()=>h,Wb:()=>b,jG:()=>C,kf:()=>m,tR:()=>w,tq:()=>f,vQ:()=>u,zx:()=>c});var r=o(88152);function i(e){return e?C:w}function n(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:i(e).mode}function s(e,t){return null!=t?t:i(e)}function l(e,t){return n(null!=e&&e.hasZ,t)}function a(e,t){return s(null!=e&&!!e.hasZ,t)}function d(e){var t,o;const i=p(e),n=l(e.geometry,i);return{mode:n,offset:null!=i&&"on-the-ground"!==n?(null!==(t=i.offset)&&void 0!==t?t:0)*(0,r.Z7)(null!==(o=i.unit)&&void 0!==o?o:"meters"):0}}function p(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function u(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return y(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function c(e,t,o,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return y(e,t[0],t[1],t.length>2?t[2]:0,o,r,i)}function y(e,t,o,r,i,n){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==n)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:a}=f(t,o,r,i,e,n);return function(e,t,o,r,i,n,s,l){var a,d;const p=null!=(null===s||void 0===s?void 0:s.offset)?s.offset:0;switch(l){case"absolute-height":return e-p;case"relative-to-ground":return e-((null!==(a=n.elevationProvider.getElevation(t,o,r,i,"ground"))&&void 0!==a?a:0)+p);case"relative-to-scene":return e-((null!==(d=n.elevationProvider.getElevation(t,o,r,i,"scene"))&&void 0!==d?d:0)+p)}}(a,t,o,r,i,e,s,l)}function f(e,t,o,r,i,n){const s=null!=n.offset?n.offset:0;switch(n.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{var l;const o=null!==(l=i.elevationProvider.getElevation(e,t,0,r,"ground"))&&void 0!==l?l:0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{var a;const n=null!==(a=i.elevationProvider.getElevation(e,t,o,r,"ground"))&&void 0!==a?a:0;return{absoluteZ:o+n+s,elevation:n}}case"relative-to-scene":{var d;const n=null!==(d=i.elevationProvider.getElevation(e,t,o,r,"scene"))&&void 0!==d?d:0;return{absoluteZ:o+n+s,elevation:n}}}}function h(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function v(e,t,o){return o&&o.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function b(e,t,o){return(null===o||void 0===o?void 0:o.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function m(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function g(e,t){t&&e.warn(".elevationInfo=",t)}const C={mode:"absolute-height",offset:0},w={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=9532.72ecd704.chunk.js.map