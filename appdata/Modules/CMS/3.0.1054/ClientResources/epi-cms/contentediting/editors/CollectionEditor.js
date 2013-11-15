//>>built
require({cache:{"url:epi-cms/contentediting/editors/templates/CollectionEditor.html":"<div class=\"dijitInline\" style=\"width:100%;\">\r\n    <div data-dojo-attach-point=\"commandTargetNode\"></div>\r\n    <div data-dojo-attach-point=\"gridNode\"></div>\r\n</div>"}});define("epi-cms/contentediting/editors/CollectionEditor",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/dom-construct","dojo/dom-class","dojo/json","dojo/on","dojo/Stateful","dojo/when","dijit/_TemplatedMixin","dijit/_Widget","dgrid/Keyboard","dgrid/OnDemandGrid","dgrid/Selection","dgrid/extensions/ColumnResizer","dgrid/extensions/ColumnReorder","put-selector/put","epi/shell/command/builder/ButtonBuilder","epi/shell/dgrid/Formatter","epi/shell/widget/_ModelBindingMixin","epi/shell/widget/FormContainer","epi/string","epi/shell/command/withConfirmation","epi-cms/contentediting/editors/model/CollectionEditorModel","epi-cms/contentediting/editors/model/CollectionEditorItemModel","epi-cms/contentediting/_EditorWrapperBase","epi-cms/dgrid/DnD","epi-cms/dgrid/formatters","epi-cms/dgrid/WithContextMenu","epi-cms/contentediting/editors/DefaultGridAssembler","./_AddItemDialogMixin","dojo/text!./templates/CollectionEditor.html","epi/i18n!epi/cms/nls/episerver.cms.contentediting.editors.collectioneditor"],function(_1,_2,_3,_4,_5,_6,_7,on,_8,_9,_a,_b,_c,_d,_e,_f,_10,put,_11,_12,_13,_14,_15,_16,_17,_18,_19,DnD,_1a,_1b,_1c,_1d,_1e,_1f){return _2([_b,_a,_13,_1d],{templateString:_1e,multiple:true,baseClass:"epi-collection-editor",value:null,model:null,modelType:_17,itemType:null,generateColumns:true,excludedColumns:null,includedColumns:null,gridType:_2([_d,_12,_e,_c,DnD,_f,_10,_1b]),gridAssemblerType:_1c,gridSettings:null,itemModelType:null,itemEditorType:_14,useFullWidth:true,_noDataMessage:"<span><span class=\"dijitReset dijitInline\">"+_1f.noitems+"</span></span>",_currentProviderHandler:null,postMixInProperties:function(){this.inherited(arguments);this.itemModelType=this.itemModelType||_18;this.model=this.model||new this.modelType({itemType:this.itemType,itemModelType:this.itemModelType,data:this.value,availableCommands:this.commands});this.own(on(this.model,"itemsChanged",_3.hitch(this,this._onItemsChanged)));this.gridSettings=_3.mixin(this.gridSettings||{},{noDataMessage:this._noDataMessage});if(this.readOnly){this.allowedDndTypes=[];this.gridSettings.dndDisabled=true;}this.gridSettings.dndParams={copyOnly:true,accept:this.allowedDndTypes||[],creator:_3.hitch(this,this._dndNodeCreator)};},postCreate:function(){this.inherited(arguments);_9(this.model.initialize(),_3.hitch(this,function(){this._setupGrid();}));},onChange:function(_20){},_setValueAttr:function(_21){this._set("value",_21);if(this.model){this.model.set("data",_21);}},_dndNodeCreator:function(_22,_23){var _24=this.allowedDndTypes,_25=_5.create("div").appendChild(document.createTextNode(_22.text));return {"node":_25,"type":_24,"data":_22};},_setupGrid:function(){var _26=this._getGridDefinition();var _27=new this.gridAssemblerType({gridType:this.gridType,gridSettings:this.gridSettings,columnDefinitions:_26,listCommands:this.readOnly?[]:this.model.getListCommands(),itemCommandsFactory:_3.hitch(this,function(_28,_29){return this.readOnly?[]:this.model.getItemCommands(_28,this.commands,_29);})});this.own(this.grid=_27.build(this.gridNode,this.commandTargetNode));_6.add(this.gridNode,"epi-plain-grid--margin-bottom epi-plain-grid--cell-borders");if(!this.gridSettings.dndDisabled){this._setupDnD();}var _2a=this.model.get("items");this.grid.renderArray(_2a);if(!_2a||_2a.length<=0){this._renderNoDataMessage();}this.own(this.grid.on(".dgrid-row:click",_3.hitch(this,this.onGridRowClick)));this.own(this.grid.on(".dgrid-row:dblclick",_3.hitch(this,this.onGridRowDblClick)));},_setupDnD:function(){this.own(_4.after(this.grid.dndSource,"onDropData",_3.hitch(this,this.onDndDrop),true));},onDndDrop:function(_2b,_2c,_2d,_2e){var i;if(this.grid.dndSource===_2c){for(i=0;i<_2d.length;i++){this.model.moveItem(this.grid.dndSource.getItem(_2d[i].id).data,this.grid.dndSource.current!=null?this.grid.dndSource.getItem(this.grid.dndSource.current.id).data:null,this.grid.dndSource.before);}}else{this.onDropping&&this.onDropping();this.onFocus();for(i=0;i<_2b.length;i++){this._addItem(_2b[i]);if(_2c&&_2c.grid&&_2c.grid.consumer&&_2c.grid.consumer!==this){_2c.grid.consumer.model.removeItem(this.grid.dndSource.getItem(_2d[i].id).data);}}}},_addItem:function(_2f){_9(this._dndGetItemData(_2f),_3.hitch(this,function(_30){this.model.addItem(_30,this.grid.dndSource.current!=null?this.grid.dndSource.getItem(this.grid.dndSource.current.id).data:null,this.grid.dndSource.before);}));},_dndGetItemData:function(_31){return _31.data;},_getGridDefinition:function(){var _32=this.generateColumns?this.model.generateColumnsDefinition(this.excludedColumns):this.includedColumns||{};return this.model.generateFormatters(_32);},_onGridRowSelect:function(e){if(!this.grid.itemCommandProviderMap){return;}if(this._currentProviderHandler){this._currentProviderHandler.removeProvider();}var _33=this.grid.row(e).data;this._currentProviderHandler=this.grid.contextMenu.addProvider(this.grid.itemCommandProviderMap[_7.stringify(_33)]);},onGridRowClick:function(e){this._onGridRowSelect(e);},onGridRowDblClick:function(e){var _34={model:this.grid.row(e).data};this.model.editItemDelegate(_34);},_getDialogConfirmActionText:function(){return this.gridSettings.confirmActionText?this.gridSettings.confirmActionText:this.inherited(arguments);},onExecuteDialog:function(){var _35=this._itemEditor.get("value");if(this._editingItemIndex!==undefined){this.model.saveItem(_35,this._editingItemIndex);}else{this.model.addItem(_35);}},_onItemsChanged:function(_36){if(this.grid){for(var _37 in this.grid.itemCommandProviderMap){delete this.grid.itemCommandProviderMap[_37];}this.grid.refresh();this.grid.renderArray(_36);if(!_36||_36.length<=0){this._renderNoDataMessage();}}var _38=this.model.get("data");this._set("value",_38);if(!this.readOnly){this.onChange(_38);if(this.grid&&this.parent instanceof _19&&this.editMode&&this.editMode==="formedit"){this.onBlur();}}},_renderNoDataMessage:function(){this.grid.noDataNode=put(this.grid.contentNode,"div.dgrid-no-data");this.grid.noDataNode.innerHTML=this.grid.noDataMessage;},_onBlur:function(){if(this.grid.contextMenu&&this.grid.contextMenu.isShowingNow){return;}this.inherited(arguments);}});});