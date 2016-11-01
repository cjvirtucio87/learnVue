'use strict';
const _ = require('lodash');
import { Comment } from '../resources.js';

export const commentItem = {
  props: ['comment'],
  data: function () {
    let vm = this;
    let _params = {
      commentable_type: 'comment',
      commentable_id: vm.comment.id
    };
    let _comments = Comment.where(_params);
    return {
      comments: _comments
    };
  },
  template:
  `
  <div class='card'>
    <div class='card-block'>
      <h5>{{comment.author}}</h5>
      <p>{{comment.body}}</p>
    </div>
  </div>
  `
};
