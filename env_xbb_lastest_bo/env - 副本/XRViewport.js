// XRViewport对象
XRViewport = function XRViewport(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof XRViewport) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('XRViewport 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(XRViewport, "XRViewport");
bodavm.toolsFunc.defineProperty(XRViewport.prototype, "x", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(XRViewport.prototype, "y", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(XRViewport.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(XRViewport.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "bodefault_get", arguments)}, set:undefined},);
