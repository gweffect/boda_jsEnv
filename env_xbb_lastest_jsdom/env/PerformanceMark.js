// PerformanceMark对象

bodavm.memory.globalobj['PerformanceMark'] = function PerformanceMark() {
  console.log_copy('PerformanceMark 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceMark)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PerformanceMark': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceMark'], "PerformanceMark");
bodavm.memory.globalobj['PerformanceMark'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformanceMark'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('PerformanceMark', "detail", {
  configurable: true,
  enumerable: true,
  get: function detail() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceMark'].prototype, "PerformanceMark", "detail_get", arguments);
  },
  set: undefined
}, 'prototype');