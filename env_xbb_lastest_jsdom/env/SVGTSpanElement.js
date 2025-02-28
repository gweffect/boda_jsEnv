// SVGTSpanElement对象

bodavm.memory.globalobj['SVGTSpanElement'] = function SVGTSpanElement() {
  console.log_copy('SVGTSpanElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGTSpanElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTSpanElement'], "SVGTSpanElement");
bodavm.memory.globalobj['SVGTSpanElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGTextPositioningElement'].prototype;
bodavm.memory.globalobj['SVGTSpanElement'].__proto__ = bodavm.memory.globalobj['SVGTextPositioningElement'];
bodavm.toolsFunc.defineProperty('SVGTSpanElement', "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGTSpanElement', "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGTSpanElement', "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});