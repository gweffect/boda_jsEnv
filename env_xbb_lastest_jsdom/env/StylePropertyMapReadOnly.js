// StylePropertyMapReadOnly对象

bodavm.memory.globalobj['StylePropertyMapReadOnly'] = function StylePropertyMapReadOnly() {
  console.log_copy('StylePropertyMapReadOnly 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof StylePropertyMapReadOnly)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StylePropertyMapReadOnly'], "StylePropertyMapReadOnly");
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "getAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('StylePropertyMapReadOnly', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StylePropertyMapReadOnly'].prototype, "StylePropertyMapReadOnly", "values", arguments);
  }
}, 'prototype');