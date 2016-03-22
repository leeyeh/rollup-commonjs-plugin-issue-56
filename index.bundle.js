(function () {
  'use strict';

  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

  var requestBase = __commonjs(function (module, exports) {
  // https://github.com/visionmedia/superagent/blob/93b060790e78b6ca088aec57cb3168ee5e248007/lib/request-base.js

  exports.clearTimeout = function _clearTimeout(){
    this._timeout = 0;
    clearTimeout$1(this._timer);
    return this;
  };
  });

  var require$$0 = (requestBase && typeof requestBase === 'object' && 'default' in requestBase ? requestBase['default'] : requestBase);
  var clearTimeout$1 = requestBase.clearTimeout;

  var wrapper = __commonjs(function (module, exports) {
  var requestBase = require$$0;

  exports.test = function (){
    requestBase.clearTimeout();
  };

  // just to ensure the clearTimeout in request-base.js to be converted to clearTimeout$1
  clearTimeout();
  });

  var test = wrapper.test;

  test();

}());