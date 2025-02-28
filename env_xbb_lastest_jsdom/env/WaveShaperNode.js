// WaveShaperNode对象

bodavm.memory.globalobj['WaveShaperNode'] = function WaveShaperNode() {
  console.log_copy('WaveShaperNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WaveShaperNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WaveShaperNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WaveShaperNode'], "WaveShaperNode");
bodavm.memory.globalobj['WaveShaperNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['WaveShaperNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('WaveShaperNode', "curve", {
  configurable: true,
  enumerable: true,
  get: function curve() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WaveShaperNode'].prototype, "WaveShaperNode", "curve_get", arguments);
  },
  set: function curve() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WaveShaperNode'].prototype, "WaveShaperNode", "curve_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WaveShaperNode', "oversample", {
  configurable: true,
  enumerable: true,
  get: function oversample() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WaveShaperNode'].prototype, "WaveShaperNode", "oversample_get", arguments);
  },
  set: function oversample() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WaveShaperNode'].prototype, "WaveShaperNode", "oversample_set", arguments);
  }
}, 'prototype');