// HTMLAnchorElement对象

bodavm.memory.globalobj['HTMLAnchorElement'] = function HTMLAnchorElement() {
  console.log_copy('HTMLAnchorElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLAnchorElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLAnchorElement'], "HTMLAnchorElement");
bodavm.memory.globalobj['HTMLAnchorElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLAnchorElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "target_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "download", {
  configurable: true,
  enumerable: true,
  get: function download() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "download_get", arguments);
  },
  set: function download() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "download_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "ping", {
  configurable: true,
  enumerable: true,
  get: function ping() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "ping_get", arguments);
  },
  set: function ping() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "ping_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "rel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "relList_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "hreflang", {
  configurable: true,
  enumerable: true,
  get: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hreflang_get", arguments);
  },
  set: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hreflang_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "referrerPolicy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "text_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "coords", {
  configurable: true,
  enumerable: true,
  get: function coords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "coords_get", arguments);
  },
  set: function coords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "coords_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "charset_get", arguments);
  },
  set: function charset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "charset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "rev", {
  configurable: true,
  enumerable: true,
  get: function rev() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "rev_get", arguments);
  },
  set: function rev() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "rev_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "shape", {
  configurable: true,
  enumerable: true,
  get: function shape() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "shape_get", arguments);
  },
  set: function shape() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "shape_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "origin_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "protocol_get", arguments);
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "protocol_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "username_get", arguments);
  },
  set: function username() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "username_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "password_get", arguments);
  },
  set: function password() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "password_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "host_get", arguments);
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "host_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hostname_get", arguments);
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hostname_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "port_get", arguments);
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "port_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "pathname_get", arguments);
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "pathname_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "search_get", arguments);
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "search_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hash_get", arguments);
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hash_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "href_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "toString", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAnchorElement', "hrefTranslate", {
  configurable: true,
  enumerable: true,
  get: function hrefTranslate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hrefTranslate_get", arguments);
  },
  set: function hrefTranslate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAnchorElement'].prototype, "HTMLAnchorElement", "hrefTranslate_set", arguments);
  }
}, 'prototype');