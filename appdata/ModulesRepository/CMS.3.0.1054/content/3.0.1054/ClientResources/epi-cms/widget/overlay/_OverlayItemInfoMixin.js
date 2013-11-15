//>>built
define("epi-cms/widget/overlay/_OverlayItemInfoMixin",["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/on","dojo/when","dojo/mouse","epi/shell/TypeDescriptorManager","epi/shell/widget/overlay/OverlayItemInfo","epi-cms/widget/viewmodel/ContentStatusViewModel"],function(_1,_2,_3,on,_4,_5,_6,_7,_8){return _1(null,{disableTooltip:false,useIconOnBlock:false,postCreate:function(){this.own(this.viewModel.watch("contentStatus",_2.hitch(this,"_setupIcon")));this.own(this.viewModel.watch("statusMessage",_2.hitch(this,function(_9,_a,_b){this.set("statusMessage",_b);})));this.subscribe("/dnd/start",_2.hitch(this,function(){if(!this.disableTooltip){this._set("disableTooltip",true);this._showStatusMessage(false);}}));this.subscribe("/dnd/cancel",_2.hitch(this,function(){this._set("disableTooltip",false);}));this.subscribe("/dnd/drop",_2.hitch(this,function(){this._set("disableTooltip",false);}));var _c=this.get("containerDomNode");if(_c){this.own(on(_c,_5.enter,_2.hitch(this,function(){this._showStatusMessage(!this.get("disableTooltip"));})));this.own(on(_c,_5.leave,_2.hitch(this,function(){this._showStatusMessage(false);})));}this.inherited(arguments);},destroy:function(){if(this._overlayItemInfo){this._overlayItemInfo.destroyRecursive();this._overlayItemInfo=null;}this.inherited(arguments);},_setStatusIconAttr:function(_d){var _e=this.get("overlayItemInfo");if(!_e){return;}_e.set("statusIcon",_d);},_setStatusMessageAttr:function(_f){var _10=this.get("overlayItemInfo");if(!_10){return;}_10.set("statusMessage",_f);},_getContainerDomNodeAttr:function(){return this.containerDomNode||this.domNode;},_getOverlayItemInfoAttr:function(){if(!this._overlayItemInfo){this._overlayItemInfo=new _7();_3.place(this._overlayItemInfo.domNode,this.get("containerDomNode"));}return this._overlayItemInfo;},_setupIcon:function(){var _11,_12,_13,_14;_11=this.get("overlayItemInfo");_11.set("class",!this.viewModel.get("isVisibleOnSite")?"epi-overlay-content-invisible":"");var _15=(this.viewModel.content&&this.viewModel.content.typeIdentifier)||this.viewModel.typeIdentifier;if(this.viewModel.get("isVisibleOnSite")&&_15){_12=_6.getValue(_15,"useIconOnBlock");_13=_6.getValue(_15,"iconClass");_14=_6.getValue(_15,"description");if(_12){_11.set("class","epi-overlay-content-info");this.set("useIconOnBlock",true);this.set("statusIcon",_13);this.set("statusMessage",_14);}}},_showStatusMessage:function(_16){if(this._overlayItemInfo){this._overlayItemInfo.showStatusMessage(_16);}}});});