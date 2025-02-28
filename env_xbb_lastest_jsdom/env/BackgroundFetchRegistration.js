// BackgroundFetchRegistration对象

bodavm.memory.globalobj['BackgroundFetchRegistration'] = function BackgroundFetchRegistration() {
  console.log_copy('BackgroundFetchRegistration 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BackgroundFetchRegistration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BackgroundFetchRegistration'], "BackgroundFetchRegistration");
bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['BackgroundFetchRegistration'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "uploadTotal", {
  configurable: true,
  enumerable: true,
  get: function uploadTotal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "uploadTotal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "uploaded", {
  configurable: true,
  enumerable: true,
  get: function uploaded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "uploaded_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "downloadTotal", {
  configurable: true,
  enumerable: true,
  get: function downloadTotal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "downloadTotal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "downloaded", {
  configurable: true,
  enumerable: true,
  get: function downloaded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "downloaded_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "result_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "failureReason", {
  configurable: true,
  enumerable: true,
  get: function failureReason() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "failureReason_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "recordsAvailable", {
  configurable: true,
  enumerable: true,
  get: function recordsAvailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "recordsAvailable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "onprogress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function match() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "match", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRegistration', "matchAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matchAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRegistration'].prototype, "BackgroundFetchRegistration", "matchAll", arguments);
  }
}, 'prototype');