//>>built
define("epi-cms/contentediting/command/BlockRemove",["dojo/_base/declare","epi","epi-cms/contentediting/command/_ContentAreaCommand"],function(_1,_2,_3){return _1([_3],{name:"remove",label:_2.resources.action.remove,tooltip:_2.resources.action.remove,iconClass:"epi-iconTrash",_execute:function(){this.model.remove();},_onModelValueChange:function(){this.set("canExecute",!!this.model&&!this.model.get("readOnly"));}});});