// SVGMarkerElement对象

bodavm.memory.globalobj['SVGMarkerElement'] = function SVGMarkerElement() {
  console.log_copy('SVGMarkerElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGMarkerElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGMarkerElement'], "SVGMarkerElement");
bodavm.memory.globalobj['SVGMarkerElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGMarkerElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKERUNITS_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKERUNITS_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKERUNITS_STROKEWIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKER_ORIENT_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKER_ORIENT_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKER_ORIENT_ANGLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "refX", {
  configurable: true,
  enumerable: true,
  get: function refX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "refX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "refY", {
  configurable: true,
  enumerable: true,
  get: function refY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "refY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "markerUnits", {
  configurable: true,
  enumerable: true,
  get: function markerUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "markerUnits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "markerWidth", {
  configurable: true,
  enumerable: true,
  get: function markerWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "markerWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "markerHeight", {
  configurable: true,
  enumerable: true,
  get: function markerHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "markerHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "orientType", {
  configurable: true,
  enumerable: true,
  get: function orientType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "orientType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "orientAngle", {
  configurable: true,
  enumerable: true,
  get: function orientAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "orientAngle_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "viewBox_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKERUNITS_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKERUNITS_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKERUNITS_STROKEWIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKER_ORIENT_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKER_ORIENT_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "SVG_MARKER_ORIENT_ANGLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "setOrientToAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientToAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "setOrientToAngle", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMarkerElement', "setOrientToAuto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientToAuto() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMarkerElement'].prototype, "SVGMarkerElement", "setOrientToAuto", arguments);
  }
}, 'prototype');