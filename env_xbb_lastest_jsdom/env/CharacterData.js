// CharacterData对象

bodavm.memory.globalobj['CharacterData'] = function CharacterData() {
  console.log_copy('CharacterData 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CharacterData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CharacterData'], "CharacterData");
bodavm.memory.globalobj['CharacterData'].prototype.__proto__ = bodavm.memory.globalobj['Node'].prototype;
bodavm.memory.globalobj['CharacterData'].__proto__ = bodavm.memory.globalobj['Node'];
bodavm.toolsFunc.defineProperty('CharacterData', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "data_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "previousElementSibling", {
  configurable: true,
  enumerable: true,
  get: function previousElementSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "previousElementSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "nextElementSibling", {
  configurable: true,
  enumerable: true,
  get: function nextElementSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "nextElementSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function after() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "after", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "appendData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "appendData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function before() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "before", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "deleteData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "deleteData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "insertData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "insertData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "remove", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "replaceData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "replaceData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceWith() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "replaceWith", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CharacterData', "substringData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function substringData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CharacterData'].prototype, "CharacterData", "substringData", arguments);
  }
}, 'prototype');