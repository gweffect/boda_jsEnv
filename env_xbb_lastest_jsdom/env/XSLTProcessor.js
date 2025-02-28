// XSLTProcessor对象

bodavm.memory.globalobj['XSLTProcessor'] = function XSLTProcessor() {
  console.log_copy('XSLTProcessor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.XSLTProcessor();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XSLTProcessor'], "XSLTProcessor");
bodavm.toolsFunc.defineProperty('XSLTProcessor', "clearParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearParameters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "clearParameters", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XSLTProcessor', "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "getParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XSLTProcessor', "importStylesheet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function importStylesheet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "importStylesheet", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XSLTProcessor', "removeParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "removeParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XSLTProcessor', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XSLTProcessor', "setParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setParameter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "setParameter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XSLTProcessor', "transformToDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformToDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "transformToDocument", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XSLTProcessor', "transformToFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformToFragment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XSLTProcessor'].prototype, "XSLTProcessor", "transformToFragment", arguments);
  }
}, 'prototype');