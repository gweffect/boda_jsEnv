// MimeTypeArray对象

bodavm.memory.globalobj['MimeTypeArray'] = function MimeTypeArray() {
  console.log_copy('MimeTypeArray 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MimeTypeArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MimeTypeArray'], "MimeTypeArray");
bodavm.toolsFunc.defineProperty('MimeTypeArray', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeTypeArray'].prototype, "MimeTypeArray", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MimeTypeArray', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeTypeArray'].prototype, "MimeTypeArray", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MimeTypeArray', "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeTypeArray'].prototype, "MimeTypeArray", "namedItem", arguments);
  }
}, 'prototype');