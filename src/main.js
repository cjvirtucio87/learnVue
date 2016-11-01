'use strict';
import * as resources from './resources.js';
import * as postList from './posts/post_list.vue';
const Vue = require('vue/dist/vue.js');

// Bootstrapping the application
const Main = (function (Post, Comment, postList) {
  const main = {};

  function _storeResources (vm) {
    return function (responses) {
      vm.posts = responses[0].cached;
      vm.comments = responses[1].cached;
    };
  }

  function _initResources (vm) {
    return Promise.all([Post.all(), Comment.all()])
      .then(_storeResources(vm));
  }

  main.init = function () {
    return new Vue({
      el: '#vue-app',
      data: {
        posts: undefined
      },
      components: {
        'post-list': postList
      },
      created: function () {
        const vm = this;
        _initResources(vm);
      }
    });
  };

  return main;
})(resources.Post, resources.Comment, postList);

Main.init();
