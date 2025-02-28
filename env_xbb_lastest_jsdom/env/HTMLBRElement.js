// HTMLBRElement对象

bodavm.memory.globalobj['HTMLBRElement'] = function HTMLBRElement() {
  console.log_copy('HTMLBRElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLBRElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLBRElement'], "HTMLBRElement");
bodavm.memory.globalobj['HTMLBRElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLBRElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLBRElement', "clear", {
  configurable: true,
  enumerable: true,
  get: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBRElement'].prototype, "HTMLBRElement", "clear_get", arguments);
  },
  set: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBRElement'].prototype, "HTMLBRElement", "clear_set", arguments);
  }
}, 'prototype');