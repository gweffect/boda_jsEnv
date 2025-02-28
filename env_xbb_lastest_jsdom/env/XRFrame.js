// XRFrame对象

bodavm.memory.globalobj['XRFrame'] = function XRFrame() {
  console.log_copy('XRFrame 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRFrame'], "XRFrame");
bodavm.toolsFunc.defineProperty('XRFrame', "session", {
  configurable: true,
  enumerable: true,
  get: function session() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "session_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "getPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "getPose", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "getViewerPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getViewerPose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "getViewerPose", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "trackedAnchors", {
  configurable: true,
  enumerable: true,
  get: function trackedAnchors() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "trackedAnchors_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "createAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAnchor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "createAnchor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "getDepthInformation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDepthInformation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "getDepthInformation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "getHitTestResults", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getHitTestResults() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "getHitTestResults", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "getHitTestResultsForTransientInput", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getHitTestResultsForTransientInput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "getHitTestResultsForTransientInput", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRFrame', "getLightEstimate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLightEstimate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRFrame'].prototype, "XRFrame", "getLightEstimate", arguments);
  }
}, 'prototype');