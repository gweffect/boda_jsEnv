// FontData对象
FontData = function FontData(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof FontData) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('FontData 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(FontData, "FontData");
bodavm.toolsFunc.defineProperty(FontData.prototype, "postscriptName", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(FontData.prototype, "fullName", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(FontData.prototype, "family", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(FontData.prototype, "style", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(FontData.prototype, "blob", {configurable:true, enumerable:true, writable:true, value:function blob (){return bodavm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "blob", arguments)}},);
