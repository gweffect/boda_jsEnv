// PresentationConnectionCloseEvent对象
bodavm.memory.globalobj['PresentationConnectionCloseEvent'] = function PresentationConnectionCloseEvent(){
    if (!(this instanceof PresentationConnectionCloseEvent)) {
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionCloseEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function")
    }; 
    if (arguments.length <2){
        return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionCloseEvent': 2 arguments required, but only 0 present.")}

    }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationConnectionCloseEvent'], "PresentationConnectionCloseEvent");
bodavm.memory.globalobj['PresentationConnectionCloseEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PresentationConnectionCloseEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PresentationConnectionCloseEvent', "reason", {configurable:true, enumerable:true, get:function reason (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionCloseEvent'].prototype, "PresentationConnectionCloseEvent", "reason_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnectionCloseEvent', "message", {configurable:true, enumerable:true, get:function message (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionCloseEvent'].prototype, "PresentationConnectionCloseEvent", "message_get", arguments)}, set:undefined},'prototype');
