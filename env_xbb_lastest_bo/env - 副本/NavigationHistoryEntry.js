// NavigationHistoryEntry对象
NavigationHistoryEntry = function NavigationHistoryEntry(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof NavigationHistoryEntry) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('NavigationHistoryEntry 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(NavigationHistoryEntry, "NavigationHistoryEntry");
NavigationHistoryEntry.prototype.__proto__=EventTarget.prototype;
NavigationHistoryEntry.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(NavigationHistoryEntry.prototype, "key", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigationHistoryEntry.prototype, "id", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigationHistoryEntry.prototype, "url", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigationHistoryEntry.prototype, "index", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigationHistoryEntry.prototype, "sameDocument", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NavigationHistoryEntry.prototype, "ondispose", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(NavigationHistoryEntry.prototype, "getState", {configurable:true, enumerable:true, writable:true, value:function getState (){return bodavm.toolsFunc.dispatch(this, NavigationHistoryEntry.prototype, "NavigationHistoryEntry", "getState", arguments)}},);
