//>>built
define("epi/shell/widget/DelayableStandby",["dojo/_base/declare","dojo/_base/lang","dojox/widget/Standby"],function(_1,_2,_3){return _1([_3],{delayTime:300,showTimeOut:30000,color:"#FFFFFF",_timeoutId:-1,_isShowing:false,show:function(_4,_5){var _6=arguments;this._clearTimeout();this._isShowing=true;if(typeof _4!==undefined&&_4===0){this.inherited(_6);}else{this._timeoutId=setTimeout(_2.hitch(this,function(){var _7=_5||this.showTimeOut;if(_7>=0){this._timeoutId=setTimeout(_2.hitch(this,function(){this.hide();}),_7);}this.inherited(_6);}),_4||this.delayTime);}},hide:function(){this._isShowing=false;this._clearTimeout();this.inherited(arguments);},_clearTimeout:function(){if(this._timeoutId>=0){clearTimeout(this._timeoutId);}},_getIsShowingAttr:function(){return this._isShowing;}});});