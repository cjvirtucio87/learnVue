'use strict';
const _ = require('lodash');
const $ = require('jquery');

export const Comment = (function ($, _) {
  const srv = {};
  const _data = {};
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

  srv.new = function (commentableId, commentableType) {
    _initNewComment(commentableId, commentableType);
    return _data.newComment;
  };

  srv.init = function () {
    return srv.all().then((data) => {
      return data;
    });
  };

  return srv;
})($, _);
