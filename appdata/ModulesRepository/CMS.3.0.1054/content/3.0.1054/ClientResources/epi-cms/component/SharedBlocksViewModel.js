//>>built
define("epi-cms/component/SharedBlocksViewModel",["dojo/_base/declare","dojo/_base/lang","dojo/when","epi-cms/widget/ContextualContentForestStoreModel","epi-cms/widget/viewmodel/HierarchicalListViewModel","epi-cms/command/NewContent","epi-cms/command/ShowAllLanguages","epi/i18n!epi/cms/nls/episerver.cms.components.createblock"],function(_1,_2,_3,_4,_5,_6,_7,_8){return _1([_5],{treeStoreModelClass:_4,_updateTreeContextCommandModels:function(_9){this.inherited(arguments);var _a=_2.hitch(this.treeStoreModel,this.treeStoreModel.translate);this._commandRegistry.translate.command.set("model",_9);this._commandRegistry.translate.command.set("executeDelegate",_a);this._commandRegistry.newBlockDefault.command.set("model",_9);},_setupCommands:function(){this.inherited(arguments);var _b={newBlockDefault:{command:new _6({contentType:"episerver.core.blockdata",iconClass:"epi-iconPlus",label:_8.command.label,resources:_8})},allLanguages:{command:new _7({model:this}),order:55}};this._commandRegistry=_2.mixin(this._commandRegistry,_b);this.pseudoContextualCommands.push(this._commandRegistry.newBlockDefault.command);}});});