//>>built
define("epi-cms/contentediting/FlyoutEditorWrapper",["dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/number","epi/shell/widget/IframeWithOverlay","epi/shell/widget/dialog/LightWeight","epi-cms/contentediting/FloatingEditorWrapper"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){return _2([_a],{_eventHandlers:null,_overlayContainer:null,isOverlayDisabled:true,isUndoDisabled:true,constructor:function(){this._eventHandlers=[];},_createDialog:function(_b){var _c=function(_d){if(!this.open||!_d){return;}this._containerNodeCS=this._containerNodeCS||_6.getComputedStyle(this.containerNode);if(!this._dialogChromeSize){this._chromeHeight=_5.getMarginBox(this.domNode).h-_5.getMarginBox(this.containerNode).h;}_5.setMarginBox(this.containerNode,{h:_d.h-this._chromeHeight},this._containerNodeCS);_6.set(this.domNode,{top:_d.t+"px",left:_d.l+"px"});};var _e=new _9({title:this.propertyDisplayName,content:_b,duration:350,draggable:false,closeIconVisible:false,region:"trailing",resize:_c,overlayItem:this.overlayItem,_position:function(){},_size:function(){}});_4.add(_e.domNode,"epi-floatingEditorWrapperDialog");_e.placeAt(this.get("iframeWithOverlay"));_6.set(_e.domNode,{top:"-10000px"});return _e;},_onViewportClick:function(_f){this.tryToStopEditing(false);},_removeEditingFeatures:function(){this.inherited(arguments);this._disconnectLocal(this._eventHandlers);},_disconnectLocal:function(_10){if(_3.isArray(_10)){var _11;while(_11=_10.pop()){_1.disconnect(_11);}}}});});