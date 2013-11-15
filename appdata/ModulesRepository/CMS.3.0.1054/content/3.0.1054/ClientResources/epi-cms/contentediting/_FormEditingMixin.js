//>>built
define("epi-cms/contentediting/_FormEditingMixin",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/when","epi-cms/contentediting/SideBySideEditorWrapper","epi/shell/widget/FormContainer"],function(_1,_2,_3,_4,_5,_6){return _2(null,{_form:null,_formWidgets:null,canHandleLeftOver:true,selectFormOnCreation:false,formSettings:null,connectOverlayItemsToFormWidgets:false,_formConnects:null,destroy:function(){this._removeAndDestroyForm();this._formWidgets=null;this.inherited(arguments);},_removeAndDestroyForm:function(){if(this._form){if(this.removeForm(this._form)){this._form.destroy();this._form=null;}var _7;while(_7=this._formConnects.pop()){this.disconnect(_7);_7=null;}this._formConnects=null;this._form=null;}for(var p in this._formWidgets){this._formWidgets[p]=null;}},_setupForm:function(){this._formWidgets={};this._form=new _6(_3.mixin({readOnly:!this.viewModel.canChangeContent(),metadata:this.viewModel.metadata,baseClass:"epi-cmsEditingForm"},this.formSettings));this._formConnects=[];this._formConnects.push(this.connect(this._form,"onFieldCreated",this.onFieldCreated));this._formConnects.push(this.connect(this._form,"onGroupCreated",this.onGroupCreated));this._formConnects.push(this.connect(this._form,"onFormCreated",this.onFormCreated));this.placeForm(this._form);this._formPlaced=true;this._finishFormCreation();},_createFormEditorWrappers:function(){for(var _8 in this._formWidgets){var _9={name:_8,metadata:this.viewModel.getPropertyMetaData(_8)};var _a=_3.clone(this.viewModel.getProperty(_9.name));var _b=new _5({property:_9,propertyName:_8,value:_a,editorWidget:this._formWidgets[_8],contentModel:this.viewModel.contentModel,operation:this.viewModel._operation});_b.editorWidget.set("parent",_b);_b.editorWidget.set("editMode","formedit");this.connect(_b,"onValueChange","_onWrapperValueChange");this.connect(_b,"onCancel","_onWrapperCancel");this.connect(_b,"onStopEdit","_onWrapperStopEdit");this._createMapping(_8,_b);_9=null;_a=null;_b=null;}},_createMapping:function(_c,_d){var _e=_c.split(".");var _f=false;if(this.connectOverlayItemsToFormWidgets){while(_e.length>0){var _10=_e.join(".");var _11=this._mappingManager.find("propertyName",_10);_1.forEach(_11,function(_12){_f=true;_12.propertyName=_c;_12.wrapper=_12.wrapper||_d;});_e.pop();}}if(!_f){this._mappingManager.add({propertyName:_c,wrapper:_d});}},placeForm:function(_13){},removeForm:function(_14){},onFieldCreated:function(_15,_16){this._formWidgets[_15]=_16;if(this._addStateWatch){this._addStateWatch(_16);}},onGroupCreated:function(_17,_18){if(_18.contentViewModel!==undefined){_18.set("contentViewModel",this.viewModel);}},onFormCreated:function(_19){this._formCreated=true;this._finishFormCreation();},_finishFormCreation:function(){if(this._formPlaced&&this._formCreated){_4(this.selectFormOnCreation?this.layoutContainer.selectChild(this._form):null,_3.hitch(this,this._removeLeftOver));this.toolbar.setItemProperty("editmodeswitch","state","");this._createFormEditorWrappers(this._form);this.onSetupEditModeComplete();}},_removeLeftOver:function(){if(this.layoutContainer.leftOver){var _1a=this.layoutContainer.selectedChildWidget===this.layoutContainer.leftOver;_4(_1a?this.layoutContainer.selectChild(this.iframeWithOverlay):null,_3.hitch(this,function(){this.layoutContainer.removeChild(this.layoutContainer.leftOver);this.layoutContainer.leftOver.destroyRecursive();this.layoutContainer.leftOver=null;}));}},onReadySetupEditMode:function(){this.inherited(arguments);this._removeAndDestroyForm();this._setupForm();},remapEditMode:function(){this.inherited(arguments);this._form&&this._form.set("readOnly",!this.viewModel.canChangeContent());}});});