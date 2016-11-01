'use strict';
import { Comment } from '../resources.js';

export const commentItem = {
  props: ['comment'],
  data: function () {
    let vm = this;
    let _params = {
      commentable_type: 'comment',
      commentable_id: vm.comment.id
    };
    let _replies = Comment.where(_params);
    return {
      replies: _replies
    };
  },
  components: {
  },
  template:
  `
  <div class='card'>
    <div class='card-block'>
      <h5>{{comment.author}}</h5>
      <p>{{comment.body}}</p>
    </div>

    <comment-list v-if='replies.length' :comments='replies'></comment-list>
  </div>
  `
};
