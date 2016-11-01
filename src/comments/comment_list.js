'use strict';
import { commentItem } from './comment_item.js';

export const commentList = {
  props: ['comments'],
  data: function () {
    return {
      newPost: {
        id: undefined,
        author: undefined,
        title: undefined,
        body: undefined,
        commentable_id: undefined,
        commentable_type: undefined
      }
    };
  },
  components: {
    'comment-item': commentItem
  },
  template:
  `
  <div>
    <div class='row'>
      <div class='col-md-10 offset-md-1 col-xs-12'>
      </div>
    </div>
    <div class='row'>
      <div class='col-md-10 offset-md-1 col-xs-12'>
        <template>
          <div v-for='comment in comments'>
            <comment-item :comment='comment'></comment-item>
          </div>
        </template>
      </div>
    </div>
  </div>
  `
};
