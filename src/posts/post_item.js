'use strict';
import { commentList } from '../comments/comment_list.js';
import { Comment } from '../resources.js';

export const postItem = {
  props: ['post'],
  data: function () {
    let vm = this;
    let _params = {
      commentable_type: 'post',
      commentable_id: vm.post.id
    };
    let _comments = Comment.where(_params);
    return {
      comments: _comments
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
