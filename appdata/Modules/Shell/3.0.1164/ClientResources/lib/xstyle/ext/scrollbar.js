//>>built
define("xstyle/ext/scrollbar",function(){var _1=/-cssx-scrollbar-(width|height)/;function _2(){var _3={w:15,h:15};var _4=document.createElement("div");_4.style.cssText="width:100px;height:100px;overflow:scroll;bottom:100%;right:100%;position:absolute;visibility:hidden;";document.body.appendChild(_4);try{_3={w:_4.offsetWidth-Math.max(_4.clientWidth,_4.scrollWidth),h:_4.offsetHeight-Math.max(_4.clientHeight,_4.scrollHeight)};document.body.removeChild(_4);}catch(ex){}return _3;};function _5(){var _6=_2();_6={w:_6.w+"px",h:_6.h+"px"};_5=function(){return _6;};return _6;};return {onValue:function(_7,_8,_9){return _7.replace(_1,function(_a,_b){return _b=="width"?_5().w:_5().h;});}};});