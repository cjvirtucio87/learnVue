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
