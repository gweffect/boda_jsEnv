// CSSFontPaletteValuesRule对象

bodavm.memory.globalobj['CSSFontPaletteValuesRule'] = function CSSFontPaletteValuesRule() {
  console.log_copy('CSSFontPaletteValuesRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSFontPaletteValuesRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSFontPaletteValuesRule'], "CSSFontPaletteValuesRule");
bodavm.memory.globalobj['CSSFontPaletteValuesRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSFontPaletteValuesRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSFontPaletteValuesRule', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSFontPaletteValuesRule'].prototype, "CSSFontPaletteValuesRule", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSFontPaletteValuesRule', "fontFamily", {
  configurable: true,
  enumerable: true,
  get: function fontFamily() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSFontPaletteValuesRule'].prototype, "CSSFontPaletteValuesRule", "fontFamily_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSFontPaletteValuesRule', "basePalette", {
  configurable: true,
  enumerable: true,
  get: function basePalette() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSFontPaletteValuesRule'].prototype, "CSSFontPaletteValuesRule", "basePalette_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSFontPaletteValuesRule', "overrideColors", {
  configurable: true,
  enumerable: true,
  get: function overrideColors() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSFontPaletteValuesRule'].prototype, "CSSFontPaletteValuesRule", "overrideColors_get", arguments);
  },
  set: undefined
}, 'prototype');