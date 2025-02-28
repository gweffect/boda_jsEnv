// USBDevice对象

bodavm.memory.globalobj['USBDevice'] = function USBDevice() {
  console.log_copy('USBDevice 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBDevice)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBDevice'], "USBDevice");
bodavm.toolsFunc.defineProperty('USBDevice', "usbVersionMajor", {
  configurable: true,
  enumerable: true,
  get: function usbVersionMajor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "usbVersionMajor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "usbVersionMinor", {
  configurable: true,
  enumerable: true,
  get: function usbVersionMinor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "usbVersionMinor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "usbVersionSubminor", {
  configurable: true,
  enumerable: true,
  get: function usbVersionSubminor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "usbVersionSubminor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "deviceClass", {
  configurable: true,
  enumerable: true,
  get: function deviceClass() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "deviceClass_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "deviceSubclass", {
  configurable: true,
  enumerable: true,
  get: function deviceSubclass() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "deviceSubclass_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "deviceProtocol", {
  configurable: true,
  enumerable: true,
  get: function deviceProtocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "deviceProtocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "vendorId", {
  configurable: true,
  enumerable: true,
  get: function vendorId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "vendorId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "productId", {
  configurable: true,
  enumerable: true,
  get: function productId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "productId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "deviceVersionMajor", {
  configurable: true,
  enumerable: true,
  get: function deviceVersionMajor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "deviceVersionMajor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "deviceVersionMinor", {
  configurable: true,
  enumerable: true,
  get: function deviceVersionMinor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "deviceVersionMinor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "deviceVersionSubminor", {
  configurable: true,
  enumerable: true,
  get: function deviceVersionSubminor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "deviceVersionSubminor_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "manufacturerName", {
  configurable: true,
  enumerable: true,
  get: function manufacturerName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "manufacturerName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "productName", {
  configurable: true,
  enumerable: true,
  get: function productName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "productName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "serialNumber", {
  configurable: true,
  enumerable: true,
  get: function serialNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "serialNumber_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "configuration", {
  configurable: true,
  enumerable: true,
  get: function configuration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "configuration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "configurations", {
  configurable: true,
  enumerable: true,
  get: function configurations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "configurations_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "opened", {
  configurable: true,
  enumerable: true,
  get: function opened() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "opened_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "claimInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function claimInterface() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "claimInterface", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "clearHalt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearHalt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "clearHalt", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "controlTransferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function controlTransferIn() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "controlTransferIn", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "controlTransferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function controlTransferOut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "controlTransferOut", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forget() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "forget", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "isochronousTransferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isochronousTransferIn() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "isochronousTransferIn", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "isochronousTransferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isochronousTransferOut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "isochronousTransferOut", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "open", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "releaseInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseInterface() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "releaseInterface", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "selectAlternateInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectAlternateInterface() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "selectAlternateInterface", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "selectConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectConfiguration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "selectConfiguration", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "transferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferIn() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "transferIn", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBDevice', "transferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferOut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBDevice'].prototype, "USBDevice", "transferOut", arguments);
  }
}, 'prototype');