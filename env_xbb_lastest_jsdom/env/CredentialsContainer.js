// CredentialsContainer对象

bodavm.memory.globalobj['CredentialsContainer'] = function CredentialsContainer() {
  console.log_copy('CredentialsContainer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CredentialsContainer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CredentialsContainer'], "CredentialsContainer");
bodavm.toolsFunc.defineProperty('CredentialsContainer', "create", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function create() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CredentialsContainer'].prototype, "CredentialsContainer", "create", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CredentialsContainer', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CredentialsContainer'].prototype, "CredentialsContainer", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CredentialsContainer', "preventSilentAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function preventSilentAccess() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CredentialsContainer'].prototype, "CredentialsContainer", "preventSilentAccess", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CredentialsContainer', "store", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function store() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CredentialsContainer'].prototype, "CredentialsContainer", "store", arguments);
  }
}, 'prototype');