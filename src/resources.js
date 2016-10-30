'use strict';
const _ = require('lodash');
const $ = require('jquery');

// HTTP
export const Post = (function ($, _) {
  let srv = {};
  let _data = {};
  const url = './mock/posts.json';

  function _cacheAll (response) {
    _data.cached = JSON.parse(response);
    return _data;
  }

  function _queryAll () {
    return $.get(url)
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
})($, _);

export const Comment = (function ($, _) {
  let srv = {};
  let _data = {};
  const url = './mock/comments.json';

  function _logError (reason) {
    console.error(reason);
    throw new Error ('ERROR: ' + reason);
  }

  function _cacheAll (response) {
    _data.cached = JSON.parse(response);
    return _data;
  }

  function _queryAll () {
    return $.get(url)
      .then(_cacheAll)
      .catch(_logError);
  }

  srv.all = function (options) {
    if ((options && options.force) || _.isEmpty(_data.cached)) {
      return _queryAll();
    } else {
      return Promise.resolve(_data);
    }
  };

  return srv;
})($, _);
