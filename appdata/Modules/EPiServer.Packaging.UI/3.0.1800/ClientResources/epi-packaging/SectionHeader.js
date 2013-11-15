//>>built
require({cache:{"url:epi-packaging/templates/SectionHeader.htm":"<div style=\"overflow: auto;\">\r\n    <div class=\"epi-listingTopContainer\" data-dojo-attach-point=\"selectTypeNode\">\r\n        <h1 data-dojo-attach-point=\"_titleNode\">\r\n            ${sectionTitle}</h1>\r\n        <div data-dojo-attach-point=\"_descriptionNode\">\r\n            ${description}</div>\r\n        <div data-dojo-attach-point=\"_restartPlaceholder\">\r\n        </div>\r\n        <div data-dojo-attach-point=\"_successMessageList\" data-dojo-type=\"epi-packaging/StatusMessageList\"\r\n            class=\"epi-packaging-validationSummary epi-packaging-Note\">\r\n        </div>\r\n        <div data-dojo-attach-point=\"_errorMessageList\" data-dojo-type=\"epi-packaging/StatusMessageList\"\r\n            class=\"epi-errorText epi-packaging-validationSummary epi-packaging-Error\">\r\n        </div>\r\n        <div class=\"epi-packaging-preload-error\">\r\n        </div>\r\n        <div class=\"epi-packaging-preload-success\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"}});define("epi-packaging/SectionHeader",["dojo","dijit","dojo/cookie","dojo/html","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/Dialog","epi/shell/widget/HelpButton","epi-packaging/StatusMessageList","epi-packaging/RestartSite","dojox/widget/Standby","dojo/text!./templates/SectionHeader.htm","epi/i18n!epi/packaging/nls/EPiServer.Packaging.UI.SectionHeader"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e){return _1.declare([_5,_6,_7],{res:_e,templateString:_d,sectionTitle:null,description:null,_titleNode:null,_descriptionNode:null,webHelpAlias:null,antiForgeryData:null,_helpButtonWidget:null,_restartWidget:null,_standbyWidget:null,startup:function(){if(this._started){return;}this._helpButtonWidget=new _9({moduleName:"Shell",webHelpAlias:this.webHelpAlias},this._helpButton);this._helpButtonWidget.startup();this._restartWidget=new _b({antiForgeryData:this.antiForgeryData},this._restartPlaceholder);this._restartWidget.startup();this.connect(this._restartWidget,"onRestartFinished",function(){var _f=this._getStoredMessages();if(_f){this._setReloadRequested();window.location.reload(true);}});this.connect(this._restartWidget,"onRestartCheckComplete",function(_10){var _11=this._getStoredMessages();if(_11&&!_10&&!this._isReloadRequested()){this._setReloadRequested();window.location.reload(true);}});this._standbyWidget=new _c({target:this._standbyPlaceholder});document.body.appendChild(this._standbyWidget.domNode);this._standbyWidget.startup();_1.subscribe("onServerError",_1.hitch(this,this._showServerError));_1.subscribe("onReloadRequired",_1.hitch(this,this._storeMessages));this.inherited(arguments);},updateView:function(){_4.set(this._titleNode,this.sectionTitle);_4.set(this._descriptionNode,this.description);this._displayStoredMessage();this._restartWidget.showIfRestartRequired();},_isReloadRequested:function(){var _12=this._getItem("EPiPackagingPageReload");return _12==="true";},_setReloadRequested:function(){this._storeItem("EPiPackagingPageReload","true");},_clearReloadRequested:function(){this._removeItem("EPiPackagingPageReload");},_displayStoredMessage:function(){var _13=this._getStoredMessages();if(this._isReloadRequested()&&_13){this.addSuccessMessages(_13);this._clearReloadRequested();this._clearStoredMessages();}},_storeMessages:function(){var _14=this._successMessageList.messages;if(_14.length>0){this._storeItem("EPiPackagingStatusMessage",_1.toJson(_14));}},_getStoredMessages:function(){var _15=this._getItem("EPiPackagingStatusMessage");if(!_15){return null;}if(_15==""){return null;}return _1.fromJson(_15);},_clearStoredMessages:function(){this._removeItem("EPiPackagingStatusMessage");},_storeItem:function(key,_16){if(localStorage!==undefined){localStorage.setItem(key,_16);}else{_1.cookie(key,_16);}},_getItem:function(key){var _17;if(localStorage!==undefined){_17=localStorage.getItem(key);}else{_17=_1.cookie(key);}return _17;},_removeItem:function(key){if(localStorage!==undefined){localStorage.removeItem(key);}else{_1.cookie(key,"",{expire:-1});}},showStandby:function(){this._standbyWidget.show();},hideStandby:function(){this._standbyWidget.hide();},addErrorMessages:function(_18){if(this._isReloadRequested()){return;}this._errorMessageList.addMessages(_18);},clearErrorMessages:function(){this._errorMessageList.clearMessages();},addSuccessMessages:function(_19){this._successMessageList.addMessages(_19);},clearSuccessMessages:function(){this._successMessageList.clearMessages();},_showServerError:function(_1a){if(_1a.processed){return;}if(this._isReloadRequested()){return;}_1a.processed=true;var _1b;try{_1b=_1a.xhr.getResponseHeader("X-EPiLogOnScreen");}catch(ex){}if(_1b){window.location.reload();return;}var _1c=_1a.xhr.responseText;var div=_1.byId("errorContainerDialog");if(div){_1.destroy(div);}div=_1.create("div",{id:"errorContainerDialog"},_1.body());var _1d=_1.create("iframe",{width:"800px",height:"400px",id:"erroriframe"},div);var _1e=new _8({title:this.res.servererror,style:"width: 820px",content:div});_1e.show();var doc=_1d.contentWindow.document;doc.open();doc.writeln(_1c);doc.close();}});});