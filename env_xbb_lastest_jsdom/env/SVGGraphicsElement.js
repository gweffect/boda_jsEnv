// SVGGraphicsElement对象

bodavm.memory.globalobj['SVGGraphicsElement'] = function SVGGraphicsElement() {
  console.log_copy('SVGGraphicsElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGGraphicsElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGGraphicsElement'], "SVGGraphicsElement");
bodavm.memory.globalobj['SVGGraphicsElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGGraphicsElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "transform", {
  configurable: true,
  enumerable: true,
  get: function transform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "transform_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "nearestViewportElement", {
  configurable: true,
  enumerable: true,
  get: function nearestViewportElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "nearestViewportElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "farthestViewportElement", {
  configurable: true,
  enumerable: true,
  get: function farthestViewportElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "farthestViewportElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: function requiredExtensions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "requiredExtensions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: function systemLanguage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "systemLanguage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "getBBox", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBBox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "getBBox", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "getCTM", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCTM() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "getCTM", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGraphicsElement', "getScreenCTM", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getScreenCTM() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGraphicsElement'].prototype, "SVGGraphicsElement", "getScreenCTM", arguments);
  }
}, 'prototype');