'use strict';
import { Post, Comment } from './resources.js';
const Vue = require('vue/dist/vue.js');

(function Main (Post, Comment) {
  let posts = Post.all();
  let comments = Comment.all();

  new Vue({
    el: '#vue-app',
    data: {
      posts: posts,
      comments: comments
    }
  });
})(Post, Comment);
