// PerformanceNavigationTiming对象

bodavm.memory.globalobj['PerformanceNavigationTiming'] = function PerformanceNavigationTiming() {
  console.log_copy('PerformanceNavigationTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceNavigationTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceNavigationTiming'], "PerformanceNavigationTiming");
bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceResourceTiming'].prototype;
bodavm.memory.globalobj['PerformanceNavigationTiming'].__proto__ = bodavm.memory.globalobj['PerformanceResourceTiming'];
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "unloadEventStart", {
  configurable: true,
  enumerable: true,
  get: function unloadEventStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "unloadEventStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "unloadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function unloadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "unloadEventEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "domInteractive", {
  configurable: true,
  enumerable: true,
  get: function domInteractive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "domInteractive_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "domContentLoadedEventStart", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "domContentLoadedEventStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "domContentLoadedEventEnd", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "domContentLoadedEventEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "domComplete", {
  configurable: true,
  enumerable: true,
  get: function domComplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "domComplete_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "loadEventStart", {
  configurable: true,
  enumerable: true,
  get: function loadEventStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "loadEventStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "loadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function loadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "loadEventEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "redirectCount", {
  configurable: true,
  enumerable: true,
  get: function redirectCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "redirectCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigationTiming', "activationStart", {
  configurable: true,
  enumerable: true,
  get: function activationStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigationTiming'].prototype, "PerformanceNavigationTiming", "activationStart_get", arguments);
  },
  set: undefined
}, 'prototype');