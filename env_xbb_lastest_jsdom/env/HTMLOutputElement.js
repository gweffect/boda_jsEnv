// HTMLOutputElement对象

bodavm.memory.globalobj['HTMLOutputElement'] = function HTMLOutputElement() {
  console.log_copy('HTMLOutputElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLOutputElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLOutputElement'], "HTMLOutputElement");
bodavm.memory.globalobj['HTMLOutputElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLOutputElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "htmlFor", {
  configurable: true,
  enumerable: true,
  get: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "htmlFor_get", arguments);
  },
  set: function htmlFor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "htmlFor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "defaultValue_get", arguments);
  },
  set: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "defaultValue_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "labels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOutputElement', "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOutputElement'].prototype, "HTMLOutputElement", "setCustomValidity", arguments);
  }
}, 'prototype');