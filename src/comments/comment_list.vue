<template>
  <div>
    <div class='row'>
      <div class='col-md-8'>
        <label for='new-comment'>reply</label><br>
        <comment-new id='new-comment' :new-comment='newComment' :on-create='createComment' ></comment-new>
      </div>
    </div>
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
  import commentItem from './comment_item.vue';
  import commentNew from './comment_new.vue';
  import { Comment } from './comment_service.js';

  function _getComments () {
    const vm = this;
    const params = { commentable_id: vm.commentableId, commentable_type: vm.commentableType };
    vm.comments = Comment.where(params);
  }

  function _createComment (params) {
    const vm = this;
    Comment.create(params);
    vm.getComments();
  }

  function _buildComment () {
    const vm = this;
    vm.newComment = Comment.new(vm.commentableId, vm.commentableType);
  }

  export default {
    name: 'comment-list',
    props: {
      commentableId: Number,
      commentableType: String
    },
    data: function () {
      return {
        comments: undefined,
        newComment: undefined
      };
    },
    created: function () {
      const vm = this;
      vm.getComments();
      vm.buildComment();
    },
    components: {
      'comment-item': commentItem,
      'comment-new': commentNew
    },
    methods: {
      getComments: _getComments,
      createComment: _createComment,
      buildComment: _buildComment
    }
  };
</script>
