// WebSocket对象

WebSocket = function WebSocket(){let arg=arguments[0];

if (arg!='bobo' && !(this instanceof WebSocket) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WebSocket': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);

if (arg =='bobo'){console.log_copy('WebSocket 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}


bodavm.toolsFunc.safeProto(WebSocket, "WebSocket");

WebSocket.prototype.__proto__=EventTarget.prototype;

WebSocket.__proto__=EventTarget;

bodavm.toolsFunc.defineProperty(WebSocket, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});

bodavm.toolsFunc.defineProperty(WebSocket, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});

bodavm.toolsFunc.defineProperty(WebSocket, "CLOSING", {configurable:false, enumerable:true, writable:false, value:2});

bodavm.toolsFunc.defineProperty(WebSocket, "CLOSED", {configurable:false, enumerable:true, writable:false, value:3});

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "url", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "readyState", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "bufferedAmount", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onopen", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onerror", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onclose", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "extensions", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "protocol", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "onmessage", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "binaryType", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "OPEN", {configurable:false, enumerable:true, writable:false, value:1},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "CLOSING", {configurable:false, enumerable:true, writable:false, value:2},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "CLOSED", {configurable:false, enumerable:true, writable:false, value:3},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "close", arguments)}},);

bodavm.toolsFunc.defineProperty(WebSocket.prototype, "send", {configurable:true, enumerable:true, writable:true, value:function send (){return bodavm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "send", arguments)}},);

