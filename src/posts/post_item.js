'use strict';
import { Comment } from '../resources.js';
import { commentList } from '../comments/comment_list.js';

// import { commentList } from '../components.js';

export const postItem = {
  props: ['post'],
  data: function () {
    let _comments = Comment.all();
    return {
      comments: _comments.cached
    };
  },
  methods: {
    onSelect: function () {
      // Don't call onSelect because you're waiting for the click event.
      let vm = this;
      vm.$emit('post-selected', vm.post.id);
    }
  },
  components: {
    'comment-list': commentList
  },
  template:
  `
  <div class='card'>
    <a @click='onSelect'>
      <img class='img-fluid' src='http://www.medicalnewstoday.com/content/images/articles/311/311569/coffee.jpg'>
    </a>

    <div class='card-block'>
      <h4 class='card-title'>{{post.title}}</h4>
    </div>

    <comment-list :comments='comments'></comment-list>
  </div>
  `
};
