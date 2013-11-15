//>>built
define("epi-cms/contentediting/ContentEditableWrapper",["dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/dom-style","dojo/Deferred","dojo/keys","dojo/on","dojo/query","dojo/when","epi/string","epi-cms/contentediting/_EditorWrapperBase"],function(_1,_2,_3,_4,_5,_6,_7,on,_8,_9,_a,_b){var _c=[];for(var _d in _7){_c.push(_7[_d]);}return _2([_b],{_emptyValue:"&nbsp;",hasInlineEditor:true,destroy:function(){(this.blockDisplayNode&&this.editorWidget)&&_8(this.blockDisplayNode).html(_a.encodeForWebString(this.value,this.editorWidget.uiSafeHtmlTags));this.inherited(arguments);},startEdit:function(){var _e=this.getInherited(arguments);_9(this._getEditor(),_4.hitch(this,function(_f){this._setupDisplay(true);_e.apply(this);this.focus();}));},_getEditor:function(){this._adjustContentSize();if(this._createdEditor){this.editorWidget.set("value",this.value);return this.editorWidget;}var _10=new _6(),_11=this.blockDisplayNode,_12=_a.slashName(this.editorWidgetType),_13=_4.mixin(this.editorParams,{blockDisplayNode:_11,value:this.value});require([_12],_4.hitch(this,function(_14){var _15=this.editorWidget=new _14(_13);this.editorWidget.placeAt(this.overlayItem.domNode);this.own(on(_11,"blur",_4.hitch(this,this._trySaveValue)),on(_11,"keydown",_4.hitch(this,this._onEditorKeyPress)),_15.watch("state",_4.hitch(this,function(_16,_17,_18){this._setupDisplay(_18!=="Error");})));this._createdEditor=true;_10.resolve(_15);}));return _10;},_adjustContentSize:function(){var _19=this.blockDisplayNode;_19.innerHTML=this._emptyValue;_5.set(_19,"minHeight",_5.getComputedStyle(_19).height);},_onEditorKeyPress:function(e){if(this.editing){if(_1.isCopyKey(e)&&!e.altKey){var _1a=e.keyCode?String.fromCharCode(e.keyCode).toLowerCase():"";switch(_1a){case "a":case "c":case "x":case "v":break;default:if(_c.indexOf(e.keyCode)==-1){e.preventDefault();}break;}}else{switch(e.keyCode){case _7.ESCAPE:this.cancel();break;case _7.ENTER:case _7.TAB:_3.stop(e);this._trySaveValue();break;default:this.isModified=true;break;}}}},_trySaveValue:function(){var _1b=_4.hitch(this,function(){if(this.editorWidget&&this.editorWidget.isValid()){this.cancel();}});this.editing&&(this.hasPendingChanges()?this.tryToStopEditing(true):_1b());},_setupDisplay:function(_1c){_5.set(this.overlayItem.domNode,"display",!_1c?"":"none");},_removeEditingFeatures:function(){this._setupDisplay(false);this.blockDisplayNode.blur();this.editorWidget&&this.editorWidget._removeEditingFeatures();}});});