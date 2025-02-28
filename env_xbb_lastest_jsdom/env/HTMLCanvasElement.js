// HTMLCanvasElement对象

bodavm.memory.globalobj['HTMLCanvasElement'] = function HTMLCanvasElement() {
  console.log_copy('HTMLCanvasElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLCanvasElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLCanvasElement'], "HTMLCanvasElement");
bodavm.memory.globalobj['HTMLCanvasElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLCanvasElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLCanvasElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLCanvasElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLCanvasElement', "captureStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function captureStream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "captureStream", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLCanvasElement', "getContext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContext() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "getContext", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLCanvasElement', "toBlob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toBlob() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "toBlob", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLCanvasElement', "toDataURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toDataURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "toDataURL", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLCanvasElement', "transferControlToOffscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferControlToOffscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLCanvasElement'].prototype, "HTMLCanvasElement", "transferControlToOffscreen", arguments);
  }
}, 'prototype');