// SVGSVGElement对象

bodavm.memory.globalobj['SVGSVGElement'] = function SVGSVGElement() {
  console.log_copy('SVGSVGElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGSVGElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGSVGElement'], "SVGSVGElement");
bodavm.memory.globalobj['SVGSVGElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGSVGElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];
bodavm.toolsFunc.defineProperty('SVGSVGElement', "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGSVGElement', "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGSVGElement', "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGSVGElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "currentScale", {
  configurable: true,
  enumerable: true,
  get: function currentScale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "currentScale_get", arguments);
  },
  set: function currentScale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "currentScale_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "currentTranslate", {
  configurable: true,
  enumerable: true,
  get: function currentTranslate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "currentTranslate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "viewBox_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "zoomAndPan", {
  configurable: true,
  enumerable: true,
  get: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "zoomAndPan_get", arguments);
  },
  set: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "zoomAndPan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "animationsPaused", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function animationsPaused() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "animationsPaused", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "checkEnclosure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkEnclosure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "checkEnclosure", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "checkIntersection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkIntersection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "checkIntersection", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGAngle", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGLength", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGMatrix", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGNumber", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGNumber", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGPoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGRect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGTransform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "createSVGTransformFromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGTransformFromMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "createSVGTransformFromMatrix", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "deselectAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deselectAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "deselectAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "forceRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forceRedraw() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "forceRedraw", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "getCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCurrentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "getCurrentTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementById() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "getElementById", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "getEnclosureList", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEnclosureList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "getEnclosureList", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "getIntersectionList", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getIntersectionList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "getIntersectionList", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "pauseAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pauseAnimations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "pauseAnimations", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "setCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCurrentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "setCurrentTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "suspendRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function suspendRedraw() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "suspendRedraw", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "unpauseAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unpauseAnimations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "unpauseAnimations", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "unsuspendRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsuspendRedraw() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "unsuspendRedraw", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGSVGElement', "unsuspendRedrawAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsuspendRedrawAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGSVGElement'].prototype, "SVGSVGElement", "unsuspendRedrawAll", arguments);
  }
}, 'prototype');