'use strict';
const Vue = require('vue/dist/vue.js');
const _ = require('lodash');

// HTTP
export const Post = (function ($http, _) {
  let srv = {};
  let _data = {};
  const url = './mock/posts.json';

  function _cacheAll (response) {
    _data.cached = _.cloneDeep(response);
    return _data;
  }

  function _queryAll () {
    return $http.get(url)
      .then(_cacheAll)
      .catch(_logError);
  }

  function _logError (reason) {
    console.error(reason);
    throw new Error ('ERROR: ' + reason);
  }

  srv.all = function (options) {
    if ((options && options.force) || _.isEmpty(_data.cached)) {
      return _queryAll();
    } else {
      return Promise.resolve(_data);
    }
  };

  return srv;
})(Vue.http, _);

export const Comment = (function ($http, _) {
  let srv = {};
  let _data = {};
  const url = './mock/comments.json';

  function _logError (reason) {
    console.error(reason);
    throw new Error ('ERROR: ' + reason);
  }

  function _cacheAll (response) {
    _data.cached = _.cloneDeep (response);
    return _data;
  }

  function _queryAll () {
    return $http.get(url)
      .then(_cacheAll)
      .catch(_logError);
  }

  srv.all = function (options) {
    if (options.force || _.isEmpty(_data.cached)) {
      return _queryAll();
    } else {
      return Promise.resolve(_data);
    }
  };

  return srv;
})(Vue.http, _);
