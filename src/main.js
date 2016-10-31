'use strict';
import { Post, Comment } from './resources.js';

const Vue = require('vue/dist/vue.js');
const $ = require('jquery');

// Components
const postLI = {
  props: ['post', 'onSelect'],
  template:
  `
  <div class='card'>
    <a v-on:click='onSelect({$event: post.id})'>
      <img class='card-img-top' src='http://www.medicalnewstoday.com/content/images/articles/311/311569/coffee.jpg' width='480px' height='300px'>
    </a>

    <div class='card-block'>
      <h4 class='card-title'>{{post.title}}</h4>
      <p class='card-text'>{{post.body}}</p>
    </div>
  </div>
  `
};

const postShow = {
  props: ['post'],
  template:
  `
  <div class='card'>
    <div class='card-header'>
      <&nbsp>
    </div>
    <div class='card-block'>
      <h4 class='card-title'>{{post.title}}</h4>
      <p class='card-text'>{{post.body}}</p>
    </div>
  </div>
  `
};

// Bootstrap application
const Main = (function ($, Post, Comment) {
  let _posts, _comments, main;
  main = {};

  function _instantiate () {
    new Vue({
      el: '#vue-app',
      data: {
        selected: undefined,
        posts: _posts,
        comments: _comments
      },
      computed: {
        matchSelected: function (postId) {
          return function () {
            return this.selected === postId;
          };
        },
        clearSelect: function () {
          this.selected = undefined;
        }
      },
      methods: {
        selectPost: function ($event) {
          this.selected = $event.postId;
        },
      },
      components: {
        'post-li': postLI,
        'post-show': postShow
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
