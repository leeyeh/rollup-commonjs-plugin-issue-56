// https://github.com/visionmedia/superagent/blob/93b060790e78b6ca088aec57cb3168ee5e248007/lib/request-base.js

exports.clearTimeout = function _clearTimeout(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};
