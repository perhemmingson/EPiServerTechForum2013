//>>built
define("epi-cms/widget/ViewSettingsExpandoButton",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-style","dojo/topic","epi/dependency","epi/shell/widget/ExpandoButton"],function(_1,_2,_3,_4,_5,_6,_7){return _1([_7],{_toggleStateInitialized:null,postCreate:function(){this.inherited(arguments);var _8=_6.resolve("epi.viewsettingsmanager");var _9=_3.filter(_8.viewSettingsHashValue,function(_a){return _a.type=="active";})[0];this.isExpand=_9?_9.id==="true":false;_3.forEach(this.containerNode.getChildren(),_2.hitch(this,function(_b){this.connect(_b.childWidget,"onResize","_onChildResize");}));},onChange:function(_c){if(this._toggleStateInitialized){_5.publish("/epi/cms/action/eyetoggle",_c);return;}this._toggleStateInitialized=true;},_onChildResize:function(){if(this.isExpanded()){this._expand();}}});});