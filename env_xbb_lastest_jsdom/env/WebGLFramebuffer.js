// WebGLFramebuffer对象

bodavm.memory.globalobj['WebGLFramebuffer'] = function WebGLFramebuffer() {
  console.log_copy('WebGLFramebuffer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGLFramebuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGLFramebuffer'], "WebGLFramebuffer");