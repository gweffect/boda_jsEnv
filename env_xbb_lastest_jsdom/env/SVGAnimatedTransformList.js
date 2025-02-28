// SVGAnimatedTransformList对象

bodavm.memory.globalobj['SVGAnimatedTransformList'] = function SVGAnimatedTransformList() {
  console.log_copy('SVGAnimatedTransformList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedTransformList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedTransformList'], "SVGAnimatedTransformList");
bodavm.toolsFunc.defineProperty('SVGAnimatedTransformList', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedTransformList'].prototype, "SVGAnimatedTransformList", "baseVal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedTransformList', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedTransformList'].prototype, "SVGAnimatedTransformList", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');