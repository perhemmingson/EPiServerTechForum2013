//>>built
define("epi-cms/command/RenameFolder",["dojo/_base/declare","epi","epi-cms/_MultilingualMixin","epi-cms/contentediting/ContentActionSupport","epi/shell/command/_Command"],function(_1,_2,_3,_4,_5){return _1([_5,_3],{label:_2.resources.action.rename,contentActionSupport:null,renameDelegate:null,typeIdentifier:"episerver.core.contentfolder",postscript:function(){this.inherited(arguments);this.contentActionSupport=this.contentActionSupport||_4;},_execute:function(){this.renameDelegate(this.model);},_onModelChange:function(){var _6=this.renameDelegate&&this.model&&this.model.typeIdentifier===this.typeIdentifier&&this.contentActionSupport.hasAccess(this.model.accessMask,_4.accessLevel[_4.action.Edit])&&this._contentExistsInCurrentLanguage(this.model);this.set("canExecute",_6);}});});