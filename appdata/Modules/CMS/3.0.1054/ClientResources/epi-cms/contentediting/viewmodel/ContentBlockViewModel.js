//>>built
define("epi-cms/contentediting/viewmodel/ContentBlockViewModel",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/string","dojo/topic","dojo/Deferred","dojo/when","dojo/promise/all","dojox/html/entities","epi","epi/dependency","./_ViewModelMixin","epi-cms/widget/viewmodel/ContentStatusViewModel","epi/i18n!epi/cms/nls/episerver.cms.contentediting.editors.contentarea.personalize"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){return _1([_d,_c],{label:null,store:null,hasSiblings:true,isVisible:true,settings:{displayOptionsAttributeName:"data-epi-content-display-option",contentGroupAttributeName:"data-contentgroup"},constructor:function(){this.roleIdentities=this.roleIdentities||[];this.attributes={};},postscript:function(){this.inherited(arguments);if(!this.store){var _f=_b.resolve("epi.storeregistry");this.store=_f.get("epi.cms.visitorgroup");}this.set("label",this.name);this._reloadRoles();},serialize:function(){return {contentGroup:this.contentGroup,contentLink:this.contentLink,name:this.name,roleIdentities:this.roleIdentities,typeIdentifier:this.typeIdentifier,attributes:this.attributes};},equals:function(_10){for(var _11 in _10){if(!_a.areEqual(this[_11],_10[_11])){return false;}}return true;},isRoleSelected:function(_12){if(!this.roleIdentities){return false;}return this.roleIdentities.indexOf(_12)>-1;},hasAnyRoles:function(){if(!this.roleIdentities){return false;}return this.roleIdentities.length>0;},moveNext:function(){var _13=this.parent.indexOf(this);this.parent.modify(function(){this.parent.move(this,_13+1);},this);},movePrevious:function(){var _14=this.parent.indexOf(this);this.parent.modify(function(){this.parent.move(this,_14-1);},this);},moveOutsideGroup:function(){if(!this.contentGroup){return;}this.parent.modify(function(){this.parent.moveOutsideGroup(this);},this);},remove:function(){this.parent.modify(function(){this.parent.removeChild(this);},this);},personalize:function(){this.parent.modify(function(){this.parent.personalize(this);},this);},selectRole:function(_15,_16){this.roleIdentities=this.roleIdentities||[];var _17=_2.indexOf(this.roleIdentities,_15);if(_17>=0){if(!_16){this.roleIdentities.splice(_17,1);}}if(_16){this.roleIdentities.push(_15);}this.set("roleIdentities",this.roleIdentities);this._reloadRoles();},resetRoleIdentities:function(){this.set("visible",true);this.set("roleIdentities",null);},_displayOptionSetter:function(_18){this.attributes[this.settings.displayOptionsAttributeName]=_18;},_displayOptionGetter:function(){return this.attributes[this.settings.displayOptionsAttributeName];},_roleIdentitiesSetter:function(_19){this.roleIdentities=_19||[];this._reloadRoles();},_parentSetter:function(_1a){this.parent=_1a;this.set("contentGroup",this.parent.name);},_contentGroupSetter:function(_1b){this.contentGroup=_1b;this.attributes[this.settings.contentGroupAttributeName]=_1b;this._reloadRoles();},_reloadRoles:function(){if(!this.store){return;}var def=new _6();var _1c=_2.map(this.roleIdentities,function(id){return _7(this.store.get(id),function(_1d){return _1d;});},this);_8(_1c).then(_3.hitch(this,function(_1e){this.set("roles",_1e);def.resolve(_1e);}),function(e){def.reject(e);});return def;},_hasSiblingsSetter:function(_1f){this.hasSiblings=_1f;this._updateRolesString();},_selectedSetter:function(_20){this.selected=_20;if(_20){this.emit("selected",this);}},_updateRolesString:function(){if(!this.contentGroup||this.roles===undefined){this.set("rolesString","");return;}if(!this.hasAnyRoles()){if(this.hasSiblings){this.set("rolesString",_e.everyoneelsesee);}else{this.set("rolesString",_e.everyonesees);}return;}var _21=_2.map(this.roles,function(r){return "<em>"+_9.encode(r.name)+"</em>";}).sort().join(", ");var _22=_21.replace(/, (?=[^,]+$)/," "+_e.groupsand);var _23="";if(this.roles.length>1){_23=_3.replace(_e.groupssee,{groupNames:_22});}else{_23=_3.replace(_e.groupsees,{groupNamn:_22});}this.set("rolesString",_23);},_rolesSetter:function(_24){this.roles=_24;this._updateRolesString();}});});