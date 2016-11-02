<template>
  <div>
    <h5 class='text-muted'>comment by {{comment.author}}</h5>
    <p class='card-text'>{{comment.body}}</p>
    <comment-new :new-comment='newComment' :on-create='createComment'></comment-new>
  </div>
</template>

<script>
  import commentNew from './comment_new.vue';
  import { Comment } from './comment_service.js';

  function _createComment (params) {
    const vm = this;
    Comment.create(params);
    vm.onRefresh(vm.comment.id);
  }

  function _buildComment () {
    const vm = this;
    vm.newComment = Comment.new(vm.comment.id, 'comment');
  }

  export default {
    props: {
      comment: Object,
      // Need to pass down callback instead to avoid circular dependency.
      onRefresh: Function
    },
    components: {
      'comment-new': commentNew
    },
    data: function () {
      return {
        newComment: undefined
      };
    },
    created: function () {
      const vm = this;
      vm.buildComment();
    },
    methods: {
      createComment: _createComment,
      buildComment: _buildComment
    }
  };
</script>
