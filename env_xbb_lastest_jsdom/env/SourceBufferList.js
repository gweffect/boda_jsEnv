// SourceBufferList对象

bodavm.memory.globalobj['SourceBufferList'] = function SourceBufferList() {
  console.log_copy('SourceBufferList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SourceBufferList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SourceBufferList'], "SourceBufferList");
bodavm.memory.globalobj['SourceBufferList'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['SourceBufferList'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('SourceBufferList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBufferList'].prototype, "SourceBufferList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBufferList', "onaddsourcebuffer", {
  configurable: true,
  enumerable: true,
  get: function onaddsourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBufferList'].prototype, "SourceBufferList", "onaddsourcebuffer_get", arguments);
  },
  set: function onaddsourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBufferList'].prototype, "SourceBufferList", "onaddsourcebuffer_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBufferList', "onremovesourcebuffer", {
  configurable: true,
  enumerable: true,
  get: function onremovesourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBufferList'].prototype, "SourceBufferList", "onremovesourcebuffer_get", arguments);
  },
  set: function onremovesourcebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBufferList'].prototype, "SourceBufferList", "onremovesourcebuffer_set", arguments);
  }
}, 'prototype');