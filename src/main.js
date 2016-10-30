'use strict';
import { Post, Comment } from './resources.js';

const Vue = require('vue/dist/vue.js');
const $ = require('jquery');

// Components
Vue.component('post-li', {
  props: ['post'],
  template:
  `
  <div class='card'>
    <img class='card-img-top' src='http://www.medicalnewstoday.com/content/images/articles/311/311569/coffee.jpg' width='480px' height='300px'>

    <div class='card-block'>
      <h4 class='card-title'>{{post.title}}</h4>
      <p class='card-text'>{{post.body}}</p>
    </div>
  </div>
  `
});

Vue.component('post-show', {
  props: ['post'],
  template:
  `
  <div class='card'>
    <div class='card-header'>
      <&nbsp>
    </div>
    <div class='card-block'>
      <h4 class='card-title'>{{post.title}}
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
