// HTMLOListElement对象

bodavm.memory.globalobj['HTMLOListElement'] = function HTMLOListElement() {
  console.log_copy('HTMLOListElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLOListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLOListElement'], "HTMLOListElement");
bodavm.memory.globalobj['HTMLOListElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLOListElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLOListElement', "reversed", {
  configurable: true,
  enumerable: true,
  get: function reversed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "reversed_get", arguments);
  },
  set: function reversed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "reversed_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOListElement', "start", {
  configurable: true,
  enumerable: true,
  get: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "start_get", arguments);
  },
  set: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "start_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOListElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOListElement', "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOListElement'].prototype, "HTMLOListElement", "compact_set", arguments);
  }
}, 'prototype');