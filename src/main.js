'use strict';
import * as resources from './resources.js';
import * as components from './components.js';

const Vue = require('vue/dist/vue.js');
const $ = require('jquery');

// Bootstrapping the application
const Main = (function ($, Post, Comment, components) {
  let _posts, _comments, main;
  main = {};

  function _cacheResponses (responses) {
    _posts = responses[0];
    _comments = responses[1];
  }

  function _instantiate () {
    return new Vue({
      el: '#vue-app',
      data: {
        posts: _posts.cached,
        comments: _comments.cached,
      },
      components: {
        'post-list': components.postList
      }
    });
  }

  main.init = function () {
    Promise.all([Post.all(), Comment.all()])
      .then(_cacheResponses)
      .then(_instantiate);
  };

  return main;
})($, resources.Post, resources.Comment, components);

Main.init();
