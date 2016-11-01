'use strict';
import * as resources from './resources.js';
import * as components from './components.js';

const Vue = require('vue/dist/vue.js');
const $ = require('jquery');

// Bootstrapping the application
const Main = (function ($, Post, Comment, components) {
  let main = {};

  function _cacheResponses (vm) {
    return function (responses) {
      vm.posts = responses[0].cached;
      vm.comments = responses[1].cached;
    };
  }

  main.init = function () {
    return new Vue({
      el: '#vue-app',
      data: {
        posts: undefined,
        comments: undefined,
      },
      components: {
        'post-list': components.postList
      },
      created: function () {
        let vm = this;
        Promise.all([Post.all(), Comment.all()])
          .then(_cacheResponses(vm));
      }
    });
  };

  return main;
})($, resources.Post, resources.Comment, components);

Main.init();
