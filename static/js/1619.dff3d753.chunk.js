/*! For license information please see 1619.dff3d753.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_envimonitor=self.webpackChunkn2_envimonitor||[]).push([[1619],{1619:(e,t,i)=>{i.r(t),i.d(t,{CalcitePickListItem:()=>s,defineCustomElement:()=>n});var a=i(9742);const s=a.P,n=a.d},9742:(e,t,i)=>{i.d(t,{C:()=>v,P:()=>b,S:()=>f,d:()=>k});var a=i(51554),s=i(19432),n=i(92358),c=i(13160),l=i(47242),o=i(46895),r=i(52655),d=i(99095),h=i(65138),m=i(57601),u=i(91438);const v={actions:"actions",actionsEnd:"actions--end",actionsStart:"actions--start",description:"description",handle:"handle",handleActivated:"handle--activated",highlight:"highlight",icon:"icon",iconDot:"icon-dot",label:"label",remove:"remove",title:"title",textContainer:"text-container"},g="check",p="x",f={actionsEnd:"actions-end",actionsStart:"actions-start"},b=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemChange=(0,a.yM)(this,"calciteListItemChange",6),this.calciteListItemRemove=(0,a.yM)(this,"calciteListItemRemove",7),this.calciteInternalListItemPropsChange=(0,a.yM)(this,"calciteInternalListItemPropsChange",6),this.calciteInternalListItemValueChange=(0,a.yM)(this,"calciteInternalListItemValueChange",6),this.pickListClickHandler=e=>{this.disabled||this.deselectDisabled&&this.selected||this.nonInteractive||(this.shiftPressed=e.shiftKey,this.selected=!this.selected)},this.pickListKeyDownHandler=e=>{if(" "===e.key){if(e.preventDefault(),this.deselectDisabled&&this.selected||this.nonInteractive)return;this.selected=!this.selected}},this.removeClickHandler=()=>{this.calciteListItemRemove.emit()},this.description=void 0,this.disabled=!1,this.deselectDisabled=!1,this.nonInteractive=!1,this.icon=null,this.iconFlipRtl=!1,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.metadata=void 0,this.removable=!1,this.selected=!1,this.value=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}descriptionWatchHandler(){this.calciteInternalListItemPropsChange.emit()}labelWatchHandler(){this.calciteInternalListItemPropsChange.emit()}onMessagesChange(){}metadataWatchHandler(){this.calciteInternalListItemPropsChange.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1}valueWatchHandler(e,t){this.calciteInternalListItemValueChange.emit({oldValue:t,newValue:e})}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,c.c)(this),(0,o.c)(this),(0,r.c)(this),(0,s.c)(this)}async componentWillLoad(){await(0,r.s)(this),(0,l.a)(this)}componentDidLoad(){(0,l.s)(this)}disconnectedCallback(){(0,c.d)(this),(0,o.d)(this),(0,r.d)(this),(0,s.d)(this)}componentDidRender(){(0,c.u)(this,!!this.el.closest("calcite-pick-list")&&"managed")}async toggleSelected(e){this.selected="boolean"===typeof e?e:!this.selected}async setFocus(){var e;await(0,l.c)(this),null===(e=this.focusEl)||void 0===e||e.focus()}renderIcon(){const{icon:e,iconFlipRtl:t}=this;return e?(0,a.h)("span",{class:{[v.icon]:!0,[v.iconDot]:e===d.I.circle},onClick:this.pickListClickHandler},e===d.I.square?(0,a.h)("calcite-icon",{flipRtl:t,icon:g,scale:"s"}):null):null}renderRemoveAction(){return this.removable?(0,a.h)("calcite-action",{class:v.remove,icon:p,onClick:this.removeClickHandler,slot:f.actionsEnd,text:this.messages.remove}):null}renderActionsStart(){const{el:e}=this;return(0,n.g)(e,f.actionsStart)?(0,a.h)("div",{class:{[v.actions]:!0,[v.actionsStart]:!0}},(0,a.h)("slot",{name:f.actionsStart})):null}renderActionsEnd(){const{el:e,removable:t}=this;return(0,n.g)(e,f.actionsEnd)||t?(0,a.h)("div",{class:{[v.actions]:!0,[v.actionsEnd]:!0}},(0,a.h)("slot",{name:f.actionsEnd}),this.renderRemoveAction()):null}render(){const{description:e,label:t}=this;return(0,a.h)(a.HY,null,this.renderIcon(),this.renderActionsStart(),(0,a.h)("label",{"aria-label":t,class:v.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,ref:e=>this.focusEl=e},(0,a.h)("div",{"aria-checked":(0,n.t)(this.selected),class:v.textContainer,role:"menuitemcheckbox"},(0,a.h)("span",{class:v.title},t),e?(0,a.h)("span",{class:v.description},e):null)),this.renderActionsEnd())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],defaultMessages:["onMessagesChange"],messageOverrides:["onMessagesChange"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin:0px;margin-block-end:1px;box-sizing:border-box;display:flex;align-items:stretch;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{box-sizing:border-box}.label{display:flex;flex:1 1 auto;cursor:pointer;align-items:center;background-color:transparent;outline-color:transparent}.label:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-block:0px;display:flex;cursor:pointer;align-items:center;padding:0.25rem;color:var(--calcite-ui-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{display:flex;inline-size:1.5rem;align-items:center;padding:0.5rem}.icon-dot:before{opacity:0;content:"\u2022"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.actions{margin:0px;display:flex;flex:0 1 auto;align-items:stretch;justify-content:flex-end}.actions--start~.label{padding-inline-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-pick-list-item",{description:[513],disabled:[516],deselectDisabled:[516,"deselect-disabled"],nonInteractive:[516,"non-interactive"],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],label:[513],messageOverrides:[1040],messages:[1040],metadata:[16],removable:[516],selected:[1540],value:[8],defaultMessages:[32],effectiveLocale:[32],toggleSelected:[64],setFocus:[64]}]);function k(){if("undefined"===typeof customElements)return;["calcite-pick-list-item","calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-pick-list-item":customElements.get(e)||customElements.define(e,b);break;case"calcite-action":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,m.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)()}}))}k()},99095:(e,t,i)=>{i.d(t,{C:()=>a,I:()=>s,S:()=>n});const a={sticky:"sticky-pos"};var s;!function(e){e.circle="circle",e.square="square",e.grip="grip"}(s||(s={}));const n={menuActions:"menu-actions"}}}]);
//# sourceMappingURL=1619.dff3d753.chunk.js.map