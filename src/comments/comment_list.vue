<template>
  <div>
    <div class='row' v-for='comment of comments'>
      <div class='col-md-8'>
        <div class='card'>
          <div class='card-block'>
            <comment-item :comment='comment'></comment-item>
            <comment-list :commentable-id='comment.id' :commentable-type="'comment'"></comment-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // const _ = require('lodash');
  import commentItem from './comment_item.vue';
  import { Comment } from './comment_service.js';

  function _getComments () {
    const vm = this;
    const params = { commentable_id: vm.commentableId, commentable_type: vm.commentableType };
    vm.comments = Comment.where(params);
    console.log(vm.comments);
  }

  export default {
    name: 'comment-list',
    props: {
      commentableId: Number,
      commentableType: String
    },
    data: function () {
      return {
        comments: undefined
      };
    },
    created: function () {
      const vm = this;
      vm.getComments();
    },
    components: {
      'comment-item': commentItem
    },
    methods: {
      getComments: _getComments
    }
  };
</script>
