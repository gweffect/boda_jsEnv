// SVGUseElement对象
SVGUseElement = function SVGUseElement(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGUseElement) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGUseElement 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGUseElement, "SVGUseElement");
SVGUseElement.prototype.__proto__=SVGGraphicsElement.prototype;
SVGUseElement.__proto__=SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "x", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "y", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "href", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "bodefault_get", arguments)}, set:undefined},);
