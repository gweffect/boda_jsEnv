// TextTrack对象

bodavm.memory.globalobj['TextTrack'] = function TextTrack() {
  console.log_copy('TextTrack 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TextTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextTrack'], "TextTrack");
bodavm.memory.globalobj['TextTrack'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['TextTrack'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('TextTrack', "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "kind_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "label_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "language", {
  configurable: true,
  enumerable: true,
  get: function language() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "language_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "mode_get", arguments);
  },
  set: function mode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "mode_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "cues", {
  configurable: true,
  enumerable: true,
  get: function cues() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "cues_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "activeCues", {
  configurable: true,
  enumerable: true,
  get: function activeCues() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "activeCues_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "oncuechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "addCue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addCue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "addCue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrack', "removeCue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeCue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrack'].prototype, "TextTrack", "removeCue", arguments);
  }
}, 'prototype');