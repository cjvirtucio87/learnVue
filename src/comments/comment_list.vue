<template>
  <div>
    <div class='row' v-for='comment of clonedComments'>
      <div class='col-md-8'>
        <div class='card'>
          <div class='card-block'>
            <comment-item :comment='comment' :on-refresh='refreshChildComments'></comment-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // const _ = require('lodash');
  // import commentItem from './comment_item.vue';
  // import { Comment } from './comment_service.js';
  // Need to completely rework how you're getting and presenting child comments.

  export default {
    name: 'comment-list',
    props: {
      comments: Array
    },
    components: {
      'comment-item': commentItem
    }
  };
</script>
