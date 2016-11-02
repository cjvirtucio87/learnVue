'use strict';
const _ = require('lodash');
const $ = require('jquery');
const Promise = require('bluebird');

export const Comment = (function ($, _) {
  const srv = {};

  const _data = {
    cached: [],
    created: undefined,
    newComment: undefined
  };

  const url = './mock/comments.json';

  function _logError (reason) {
    console.error(reason);
    throw new Error('ERROR: ' + reason);
  }

  function _initNewId () {
    return _.chain(_data.cached)
            .map('id')
            .max()
            .value() + 1;
  }

  function _initNewComment (commentableId, commentableType) {
    const newId = _initNewId();
    const newComment = {
      id: newId,
      author: undefined,
      title: undefined,
      body: undefined,
      commentable_id: commentableId,
      commentable_type: commentableType
    };
    _data.newComment = newComment;
    return _data;
  }

  function _cacheAll (response) {
    _data.cached = JSON.parse(response);
    return _data;
  }

  function _cacheAdd (params) {
    _data.cached.push(params);
    _data.created = params;
    return _data.created;
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

  srv.new = function (commentableId, commentableType) {
    _initNewComment(commentableId, commentableType);
    return _data.newComment;
  };

  srv.create = function (params, options) {
    if (options && options.force) return _queryCreate(params);
    return Promise.resolve(_cacheAdd(params));
  };

  srv.update = function (params) {
    const comment = srv.where({ id: params.id });
    _.cloneDeep(params, comment);
    return comment;
  };

  return srv;
})($, _);
