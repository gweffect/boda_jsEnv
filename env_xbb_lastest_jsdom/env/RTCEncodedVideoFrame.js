// RTCEncodedVideoFrame对象

bodavm.memory.globalobj['RTCEncodedVideoFrame'] = function RTCEncodedVideoFrame() {
  console.log_copy('RTCEncodedVideoFrame 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCEncodedVideoFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCEncodedVideoFrame'], "RTCEncodedVideoFrame");
bodavm.toolsFunc.defineProperty('RTCEncodedVideoFrame', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedVideoFrame'].prototype, "RTCEncodedVideoFrame", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCEncodedVideoFrame', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedVideoFrame'].prototype, "RTCEncodedVideoFrame", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCEncodedVideoFrame', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedVideoFrame'].prototype, "RTCEncodedVideoFrame", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedVideoFrame'].prototype, "RTCEncodedVideoFrame", "data_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCEncodedVideoFrame', "getMetadata", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getMetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedVideoFrame'].prototype, "RTCEncodedVideoFrame", "getMetadata", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCEncodedVideoFrame', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedVideoFrame'].prototype, "RTCEncodedVideoFrame", "toString", arguments);
  }
}, 'prototype');