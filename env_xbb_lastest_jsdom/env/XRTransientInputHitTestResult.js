// XRTransientInputHitTestResult对象

bodavm.memory.globalobj['XRTransientInputHitTestResult'] = function XRTransientInputHitTestResult() {
  console.log_copy('XRTransientInputHitTestResult 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRTransientInputHitTestResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRTransientInputHitTestResult'], "XRTransientInputHitTestResult");
bodavm.toolsFunc.defineProperty('XRTransientInputHitTestResult', "inputSource", {
  configurable: true,
  enumerable: true,
  get: function inputSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRTransientInputHitTestResult'].prototype, "XRTransientInputHitTestResult", "inputSource_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRTransientInputHitTestResult', "results", {
  configurable: true,
  enumerable: true,
  get: function results() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRTransientInputHitTestResult'].prototype, "XRTransientInputHitTestResult", "results_get", arguments);
  },
  set: undefined
}, 'prototype');