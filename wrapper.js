var requestBase = require('./request-base');

exports.test = function (){
  requestBase.clearTimeout();
};

// just to ensure the clearTimeout in request-base.js to be converted to clearTimeout$1
clearTimeout();
