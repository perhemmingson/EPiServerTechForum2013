//>>built
define("epi-cms/contentediting/command/Personalize",["dojo/_base/declare","epi-cms/contentediting/viewmodel/PersonalizedGroupViewModel","epi-cms/contentediting/command/_ContentAreaCommand","epi/i18n!epi/cms/nls/episerver.cms.contentediting.editors.contentarea.personalize"],function(_1,_2,_3,_4){return _1([_3],{label:_4.label,iconClass:"epi-iconUsers",category:"menuWithSeparator",_execute:function(){if(!this.model.contentGroup){this.model.personalize();}},_onModelValueChange:function(){this.set("canExecute",!!this.model&&this.model.contentLink&&!this.model.contentGroup&&!this.model.get("readOnly"));}});});