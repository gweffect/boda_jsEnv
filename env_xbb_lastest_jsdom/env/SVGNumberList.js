// SVGNumberList对象

bodavm.memory.globalobj['SVGNumberList'] = function SVGNumberList() {
  console.log_copy('SVGNumberList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGNumberList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGNumberList'], "SVGNumberList");
bodavm.toolsFunc.defineProperty('SVGNumberList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "numberOfItems_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "appendItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "getItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "initialize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "insertItemBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "removeItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGNumberList', "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGNumberList'].prototype, "SVGNumberList", "replaceItem", arguments);
  }
}, 'prototype');