// PaymentRequest对象

bodavm.memory.globalobj['PaymentRequest'] = function PaymentRequest() {
  console.log_copy('PaymentRequest 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PaymentRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PaymentRequest': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PaymentRequest'], "PaymentRequest");
bodavm.memory.globalobj['PaymentRequest'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['PaymentRequest'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('PaymentRequest', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "shippingAddress", {
  configurable: true,
  enumerable: true,
  get: function shippingAddress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "shippingAddress_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "shippingOption", {
  configurable: true,
  enumerable: true,
  get: function shippingOption() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "shippingOption_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "shippingType", {
  configurable: true,
  enumerable: true,
  get: function shippingType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "shippingType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "onshippingaddresschange", {
  configurable: true,
  enumerable: true,
  get: function onshippingaddresschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "onshippingaddresschange_get", arguments);
  },
  set: function onshippingaddresschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "onshippingaddresschange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "onshippingoptionchange", {
  configurable: true,
  enumerable: true,
  get: function onshippingoptionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "onshippingoptionchange_get", arguments);
  },
  set: function onshippingoptionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "onshippingoptionchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "canMakePayment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canMakePayment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "canMakePayment", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "hasEnrolledInstrument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasEnrolledInstrument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "hasEnrolledInstrument", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function show() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "show", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentRequest', "onpaymentmethodchange", {
  configurable: true,
  enumerable: true,
  get: function onpaymentmethodchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "onpaymentmethodchange_get", arguments);
  },
  set: function onpaymentmethodchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequest'].prototype, "PaymentRequest", "onpaymentmethodchange_set", arguments);
  }
}, 'prototype');