//>>built
define("dgrid/util/misc",["put-selector/put"],function(_1){var _2=[],_3,_4,_5,_6=/([^A-Za-z0-9_\u00A0-\uFFFF-])/g;function _7(_8){var _9=_2[_8],i,l;if(_9===undefined){return;}_3[_4](_9);_2[_8]=undefined;for(i=_8+1,l=_2.length;i<l;i++){if(_2[i]>_9){_2[i]--;}}};var _a={defaultDelay:15,throttle:function(cb,_b,_c){var _d=false;_c=_c||_a.defaultDelay;return function(){if(_d){return;}_d=true;cb.apply(_b,arguments);setTimeout(function(){_d=false;},_c);};},throttleDelayed:function(cb,_e,_f){var ran=false;_f=_f||_a.defaultDelay;return function(){if(ran){return;}ran=true;var a=arguments;setTimeout(function(){ran=false;cb.apply(_e,a);},_f);};},debounce:function(cb,_10,_11){var _12;_11=_11||_a.defaultDelay;return function(){if(_12){clearTimeout(_12);_12=null;}var a=arguments;_12=setTimeout(function(){cb.apply(_10,a);},_11);};},each:function(_13,_14,_15){var i,len;if(!_13){return;}if(typeof _13.length==="number"){for(i=0,len=_13.length;i<len;i++){_14.call(_15,_13[i],i,_13);}}else{for(i in _13){_14.call(_15,_13[i],i,_13);}}},addCssRule:function(_16,css){if(!_3){_3=_1(document.getElementsByTagName("head")[0],"style");_3=_3.sheet||_3.styleSheet;_4=_3.deleteRule?"deleteRule":"removeRule";_5=_3.cssRules?"cssRules":"rules";}var _17=_2.length;_2[_17]=(_3.cssRules||_3.rules).length;_3.addRule?_3.addRule(_16,css):_3.insertRule(_16+"{"+css+"}",_2[_17]);return {get:function(_18){return _3[_5][_2[_17]].style[_18];},set:function(_19,_1a){if(typeof _2[_17]!=="undefined"){_3[_5][_2[_17]].style[_19]=_1a;}},remove:function(){_7(_17);}};},escapeCssIdentifier:function(id){return id.replace(_6,"\\$1");}};return _a;});