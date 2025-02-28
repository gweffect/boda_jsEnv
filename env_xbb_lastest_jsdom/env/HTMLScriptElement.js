// HTMLScriptElement对象

bodavm.memory.globalobj['HTMLScriptElement'] = function HTMLScriptElement() {
  console.log_copy('HTMLScriptElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLScriptElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLScriptElement'], "HTMLScriptElement");
bodavm.memory.globalobj['HTMLScriptElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLScriptElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "supports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function supports() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].undefined, "HTMLScriptElement", "supports", arguments);
  }
});
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "noModule", {
  configurable: true,
  enumerable: true,
  get: function noModule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "noModule_get", arguments);
  },
  set: function noModule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "noModule_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "charset_get", arguments);
  },
  set: function charset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "charset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "async", {
  configurable: true,
  enumerable: true,
  get: function async() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "async_get", arguments);
  },
  set: function async() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "async_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "defer", {
  configurable: true,
  enumerable: true,
  get: function defer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "defer_get", arguments);
  },
  set: function defer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "defer_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "crossOrigin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "text_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "referrerPolicy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "event", {
  configurable: true,
  enumerable: true,
  get: function event() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "event_get", arguments);
  },
  set: function event() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "event_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "htmlFor", {
  configurable: true,
  enumerable: true,
  get: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "htmlFor_get", arguments);
  },
  set: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "htmlFor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "integrity", {
  configurable: true,
  enumerable: true,
  get: function integrity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "integrity_get", arguments);
  },
  set: function integrity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "integrity_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "fetchPriority_get", arguments);
  },
  set: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "fetchPriority_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLScriptElement', "blocking", {
  configurable: true,
  enumerable: true,
  get: function blocking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "blocking_get", arguments);
  },
  set: function blocking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLScriptElement'].prototype, "HTMLScriptElement", "blocking_set", arguments);
  }
}, 'prototype');