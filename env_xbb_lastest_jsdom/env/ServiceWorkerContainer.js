// ServiceWorkerContainer对象

bodavm.memory.globalobj['ServiceWorkerContainer'] = function ServiceWorkerContainer() {
  console.log_copy('ServiceWorkerContainer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ServiceWorkerContainer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ServiceWorkerContainer'], "ServiceWorkerContainer");
bodavm.memory.globalobj['ServiceWorkerContainer'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['ServiceWorkerContainer'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "controller", {
  configurable: true,
  enumerable: true,
  get: function controller() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "controller_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "ready_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "oncontrollerchange", {
  configurable: true,
  enumerable: true,
  get: function oncontrollerchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "oncontrollerchange_get", arguments);
  },
  set: function oncontrollerchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "oncontrollerchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "onmessageerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "getRegistration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRegistration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "getRegistration", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "getRegistrations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRegistrations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "getRegistrations", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function register() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "register", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorkerContainer', "startMessages", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function startMessages() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorkerContainer'].prototype, "ServiceWorkerContainer", "startMessages", arguments);
  }
}, 'prototype');