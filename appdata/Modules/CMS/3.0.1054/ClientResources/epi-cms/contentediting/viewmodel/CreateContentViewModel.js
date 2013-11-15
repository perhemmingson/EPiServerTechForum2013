//>>built
define("epi-cms/contentediting/viewmodel/CreateContentViewModel",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/Stateful","dojo/string","dojo/when","dojo/Deferred","dojo/Evented","epi/dependency","epi/shell/TypeDescriptorManager","epi-cms/core/ContentReference","epi-cms/contentediting/ContentEditingValidator","epi/i18n!epi/cms/nls/episerver.cms.components.requiredproperties"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){return _2([_5,_9],{_topLevelContainerType:"epi/shell/layout/SimpleContainer",_groupContainerType:"epi-cms/layout/CreateContentGroupContainer",_availableContentTypes:null,_waitingAvailableContentTypes:null,_waitingSuggestedContentTypes:null,_suggestedContentTypes:null,contentDataStore:null,contentTypeStore:null,metadataManager:null,typeIdentifierManager:null,validator:null,parent:null,contentTypeId:null,requestedType:null,createAsLocalAsset:null,canChangeLocalAssetName:null,addToDestination:null,wizardStep:0,startWizardStep:0,contentName:null,ignoreDefaultNameWarning:null,properties:null,headingText:null,createAsLocalAssetHelpText:null,namePanelIsVisible:null,headingPanelIsVisible:null,seamlessTopPanel:null,saveButtonIsVisible:null,saveButtonDisabled:null,showAllProperties:null,showCurrentNodeOnBreadcrumb:null,effectiveParentLink:null,metadata:null,postscript:function(){this.inherited(arguments);var _f=null;this.contentDataStore=this.contentDataStore||(_f=_a.resolve("epi.storeregistry")).get("epi.cms.contentdata");this.contentTypeStore=this.contentTypeStore||(_f||_a.resolve("epi.storeregistry")).get("epi.cms.contenttype");this.metadataManager=this.metadataManager||_a.resolve("epi.shell.MetadataManager");this.validator=this.validator||new _d({contextTypeName:"epi.cms.contentdata"});this.set("propertyFilter",_3.hitch(this,this._propertyFilter));},update:function(_10){if(_10){_1.forEach(["requestedType","parent","canChangeLocalAssetName","createAsLocalAsset","addToDestination","contentTypeId"],function(_11){this.set(_11,_10[_11]);},this);}this.set("ignoreDefaultNameWarning",false);this.set("properties",null);this.set("saveButtonIsVisible",false);this.set("wizardStep",this.startWizardStep);if(this.parent){var _12=this.parent.contentLink+"_new_content";this.validator.clearErrorsBySource();this.validator.setContextId(_12);this.set("notificationContext",{contextTypeName:"epi.cms.contentdata",contextId:_12});}},save:function(){this.set("saveButtonDisabled",true);if(!this.ignoreDefaultNameWarning&&(this.canChangeLocalAssetName||!this.createAsLocalAsset)&&(!this.contentName||this.contentName===""||this.contentName===this.defaultName)){this._emitSaveEvent("invalidContentName",this.contentName);return;}this.validator.clearErrorsBySource(this.validator.validationSource.server);_7(this.validator.validate(),_3.hitch(this,function(_13){if(_13){this._emitSaveEvent("validationError");return;}var _14=this.buildContentObject();this.contentDataStore.put(_14).then(_3.hitch(this,this._saveSuccessHandler),_3.hitch(this,this._saveErrorHandler));}),_3.hitch(this,function(){this._emitSaveEvent("validationError");}));},_emitSaveEvent:function(_15,_16){this.set("saveButtonDisabled",false);this.emit(_15,_16);},cancel:function(){this.addToDestination&&(typeof this.addToDestination.cancel==="function")&&this.addToDestination.cancel();},_propertyFilter:function(_17,_18){var _19=_18.originalGroupName!=="EPiServerCMS_SettingsPanel"&&_18.originalGroupName!=="Advanced";var _1a=this._isRequiredProperty(_17,_18);if(this.showAllProperties){return _19||_1a;}else{return _1a;}},_saveSuccessHandler:function(_1b){var ref=new _c(_1b),_1c=ref.createVersionUnspecificReference(),_1d=_3.hitch(this,function(_1e){this._emitSaveEvent("saveSuccess",{newContentLink:_1e,changeContext:true});});_7(this.contentDataStore.refresh(_1b),_3.hitch(this,function(_1f){if(this.addToDestination){this.addToDestination.save({contentLink:_1c.toString(),name:_1f.name,typeIdentifier:this.requestedType});this._emitSaveEvent("saveSuccess",{changeContext:false});}else{_1d(_1c.toString());}}));},_saveErrorHandler:function(err){if(err&&err.responseText){var _20=_4.fromJson(err.responseText);_1.forEach(_20,function(_21){if(_21.propertyName){this.validator.setPropertyErrors(_21.propertyName,[{severity:_21.severity,errorMessage:_21.errorMessage}],this.validator.validationSource.server);}else{this.validator.setGlobalErrors([{severity:_21.severity,errorMessage:_21.errorMessage}],this.validator.validationSource.server);}},this);}else{if(err){this.validator.setGlobalErrors([{severity:this.validator.severity.error,errorMessage:err.message}],this.validator.validationSource.server);}}this._emitSaveEvent("saveError",err);},buildContentObject:function(){return {name:(!this.createAsLocalAsset||this.canChangeLocalAssetName)?_6.trim(this.contentName+""):null,parentLink:this.parent?this.parent.contentLink:null,contentTypeId:this.contentTypeId,properties:this.properties,createAsLocalAsset:this.createAsLocalAsset};},addInvalidProperty:function(_22,_23){this.validator.setPropertyErrors(_22,[{severity:this.validator.severity.error,errorMessage:_23}],this.validator.validationSource.client);},removeInvalidProperty:function(_24){this.validator.clearPropertyErrors(_24);},getAvailableContentTypes:function(){if(this._availableContentTypes){return this._availableContentTypes;}var _25=this._waitingAvailableContentTypes;if(!_25){_25=this._waitingAvailableContentTypes=new _8();_7(this.contentTypeStore.query({query:"getavailablecontenttypes",parentReference:this.effectiveParentLink,requestedTypes:[this.requestedType]}),_3.hitch(this,function(_26){this._availableContentTypes=_26;this._waitingAvailableContentTypes.resolve(this._availableContentTypes);this._waitingAvailableContentTypes=null;}),_3.hitch(this,function(_27){this._availableContentTypes=null;this._waitingAvailableContentTypes.reject(_27);this._waitingAvailableContentTypes=null;}));}return _25.promise;},getSuggestedContentTypes:function(){if(this._suggestedContentTypes){return this._suggestedContentTypes;}var _28=this._waitingSuggestedContentTypes;if(!_28){_28=this._waitingSuggestedContentTypes=new _8();_7(this.contentTypeStore.query({query:"getsuggestedcontenttypes",parentReference:this.effectiveParentLink,requestedTypes:[this.requestedType]}),_3.hitch(this,function(_29){this._suggestedContentTypes=_29;this._waitingSuggestedContentTypes.resolve(this._suggestedContentTypes);this._waitingSuggestedContentTypes=null;}),_3.hitch(this,function(_2a){this._suggestedContentTypes=null;this._waitingSuggestedContentTypes.reject(_2a);this._waitingSuggestedContentTypes=null;}));}return _28.promise;},_contentTypeIdSetter:function(_2b){this.contentTypeId=_2b;if(_2b&&this.parent){_7(this._getMetadata(this.parent.contentLink,_2b),_3.hitch(this,function(_2c){if(!this.canChangeLocalAssetName||this._hasRequiredProperties(_2c)){_2c=this._regroupProperties(_2c);this.set("metadata",_2c);this.set("wizardStep",1);this.set("saveButtonIsVisible",true);}else{this.save();}}));}this._setHeadingText();},_canChangeLocalAssetNameSetter:function(_2d){this.canChangeLocalAssetName=_2d==null?true:_2d;},_createAsLocalAssetSetter:function(_2e){var _2f=this.canChangeLocalAssetName||!_2e;this.set("namePanelIsVisible",_2f);this.set("headingPanelIsVisible",_2f);this.set("showAllProperties",!this.canChangeLocalAssetName);this.set("showCurrentNodeOnBreadcrumb",_2f);this.set("seamlessTopPanel",_2f);if(this.parent){this.set("effectiveParentLink",_2e?this.parent.assetsFolderLink:this.parent.contentLink);}this.createAsLocalAsset=_2e;},_effectiveParentLinkSetter:function(_30){this._clearContentTypesData();this.effectiveParentLink=_30;},_parentSetter:function(_31){this.parent=_31;var _32=this.parent.typeIdentifier,_33=_b.getResourceValue(this.requestedType,"name"),_34=_b.getResourceValue(_32,"name"),_35=_b.getResourceValue(_32,"createaslocalassethelptext");if(_33&&_34){_35=_3.replace(_35,[_33.toLowerCase(),_34.toLowerCase()]);}this.set("createAsLocalAssetHelpText",_35);},_requestedTypeSetter:function(_36){var _37=_b.getResourceValue(_36,"newitemdefaultname");this.defaultName=_37;this.set("contentName",_37);this.requestedType=_36;this._clearContentTypesData();this._setHeadingText();},_hasRequiredProperties:function(_38){return _1.some(_38.properties,function(_39){return this._isRequiredProperty(_38,_39);},this);},_isRequired:function(_3a){return _3a.settings&&_3a.settings.required;},_isRequiredProperty:function(_3b,_3c){var _3d=!_3c.additionalValues.hasValue;var _3e=_3c.showForEdit&&_1.every(_3b.groups,function(_3f){return (_3f.name!==_3c.groupName&&_3f.name!==_3c.originalGroupName)||_3f.displayUI;});var _40=_1.some(_3c.properties,function(_41){return this._isRequiredProperty(_3c,_41);},this);return (this._isRequired(_3c)||_40)&&_3d&&_3e&&(_3c.name!=="icontent_name");},_regroupProperties:function(_42){_42=_3.clone(_42);_42.layoutType=this._topLevelContainerType;_1.forEach(_42.properties,function(_43){var _44=this._isRequiredProperty(_42,_43);_43.originalGroupName=_43.groupName;_43.groupName=_44?"required":"additional";},this);_42.groups=[{name:"required",displayUI:true,title:_e.groups.required,uiType:this._groupContainerType},{name:"additional",displayUI:true,title:_e.groups.additional,uiType:this._groupContainerType}];return _42;},_getMetadata:function(_45,_46){return this.metadataManager.getMetadataForType("EPiServer.Core.ContentData",{parentLink:_45,contentTypeId:_46});},_setHeadingText:function(){var _47=_b.getResourceValue(this.requestedType,"create");this.set("headingText",_47);if(_47&&this.contentTypeId){_7(this.contentTypeStore.get(this.contentTypeId),_3.hitch(this,function(_48){var _49=_48.localizedName||_48.name;if(_49){this.set("headingText",_47+": "+_49);}}));}},_clearContentTypesData:function(){this._availableContentTypes=null;if(this._waitingAvailableContentTypes){this._waitingAvailableContentTypes.cancel();}this._waitingAvailableContentTypes=null;this._suggestedContentTypes=null;if(this._waitingSuggestedContentTypes){this._waitingSuggestedContentTypes.cancel();}this._waitingSuggestedContentTypes=null;}});});