// SpeechSynthesisUtterance对象

bodavm.memory.globalobj['SpeechSynthesisUtterance'] = function SpeechSynthesisUtterance() {
  console.log_copy('SpeechSynthesisUtterance 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.SpeechSynthesisUtterance();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SpeechSynthesisUtterance'], "SpeechSynthesisUtterance");
bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['SpeechSynthesisUtterance'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "text_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "lang", {
  configurable: true,
  enumerable: true,
  get: function lang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "lang_get", arguments);
  },
  set: function lang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "lang_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "voice", {
  configurable: true,
  enumerable: true,
  get: function voice() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "voice_get", arguments);
  },
  set: function voice() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "voice_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "volume", {
  configurable: true,
  enumerable: true,
  get: function volume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "volume_get", arguments);
  },
  set: function volume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "volume_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "rate", {
  configurable: true,
  enumerable: true,
  get: function rate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "rate_get", arguments);
  },
  set: function rate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "rate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "pitch", {
  configurable: true,
  enumerable: true,
  get: function pitch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "pitch_get", arguments);
  },
  set: function pitch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "pitch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "onstart", {
  configurable: true,
  enumerable: true,
  get: function onstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onstart_get", arguments);
  },
  set: function onstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "onend", {
  configurable: true,
  enumerable: true,
  get: function onend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onend_get", arguments);
  },
  set: function onend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onpause_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "onresume", {
  configurable: true,
  enumerable: true,
  get: function onresume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onresume_get", arguments);
  },
  set: function onresume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onresume_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "onmark", {
  configurable: true,
  enumerable: true,
  get: function onmark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onmark_get", arguments);
  },
  set: function onmark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onmark_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SpeechSynthesisUtterance', "onboundary", {
  configurable: true,
  enumerable: true,
  get: function onboundary() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onboundary_get", arguments);
  },
  set: function onboundary() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisUtterance'].prototype, "SpeechSynthesisUtterance", "onboundary_set", arguments);
  }
}, 'prototype');