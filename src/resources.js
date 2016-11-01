'use strict';
const _ = require('lodash');
const $ = require('jquery');

// HTTP
export const Post = (function ($, _) {
  const srv = {};
  const _data = {
    cached: [],
    created: undefined
  };
  const url = './mock/posts.json';

  function _cacheAll (response) {
    _data.cached = JSON.parse(response);
    return _data;
  }

  function _cacheAdd (params) {
    _data.cached.push(params);
    _data.created = params;
    return _data;
  }

  function _initNewPost (data) {
    const newId = _.chain(data.cached)
                   .map('id')
                   .max()
                   .value() + 1;
    return {
      id: newId,
      author: undefined,
      title: undefined,
      body: undefined
    };
  }

  function _queryAll () {
    return $.get(url)
      .then(_cacheAll)
      .catch(_logError);
  }

  function _queryCreate (params) {
    return $.post(url, params)
      .then(_cacheAdd)
      .catch(_logError);
  }

  function _logError (reason) {
    console.error(reason);
    throw new Error('ERROR: ' + reason);
  }

  srv.all = function (options) {
    if ((options && options.force) || _.isEmpty(_data.cached)) {
      return _queryAll();
    } else {
      return Promise.resolve(_data);
    }
  };

  srv.where = function (params) {
    if (_.isEmpty(_data.cached)) return undefined;
    return _.chain(_data.cached)
            .filter(params)
            .value();
  };

  srv.create = function (params, options) {
    if ((options && options.force)) {
      return _queryCreate(params);
    } else {
      return Promise.resolve(_cacheAdd(params));
    }
  };

  srv.new = function () {
    return srv.all().then(_initNewPost);
  };

  srv.update = function (params) {
    const post = srv.where({ id: params.id });
    _.cloneDeep(params, post);
    return post;
  };

  return srv;
})($, _);

export const Comment = (function ($, _) {
  const srv = {};
  const _data = {};
  const url = './mock/comments.json';

  function _logError (reason) {
    console.error(reason);
    throw new Error('ERROR: ' + reason);
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

  srv.where = function (params) {
    if (_.isEmpty(_data.cached)) return undefined;
    return _.chain(_data.cached)
            .filter(params)
            .value();
  };

  srv.update = function (params) {
    const comment = srv.where({ id: params.id });
    _.cloneDeep(params, comment);
    return comment;
  };

  return srv;
})($, _);
