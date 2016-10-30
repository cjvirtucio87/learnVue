'use strict';
import { Post, Comment } from './resources.js';

const Vue = require('vue/dist/vue.js');
const $ = require('jquery');
require('bootstrap');

// Components
Vue.component('post-li', {
  props: ['post'],
  template:
  `
  <div class='card'>
    <div class='card-header'>
      Post
    </div>
    <div class='card-block'>
      <h4 class='card-title'>{{post.title}}</h4>
      <p class='card-text'>{{post.body}}</p>
    </div>
  </div>
  `
});

// Bootstrap application
const Main = (function ($, Post, Comment) {
  let _posts, _comments, main;
  main = {};

  function _instantiate () {
    new Vue({
      el: '#vue-app',
      data: {
        posts: _posts,
        comments: _comments
      }
    });
  }

  main.init = function () {
    Promise.all([Post.all(), Comment.all()])
      .then(function(responses) {
        _posts = responses[0];
        _comments = responses[1];
      })
      .then(_instantiate);
  };

  return main;
})($, Post, Comment);

Main.init();
