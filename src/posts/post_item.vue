<template>
  <div class='card'>
    <div class='card-block' @click='selectPost'>
      <h3 class='card-title'>{{post.title}}</h3>
      <p class='card-text' style='cursor: pointer;'>{{post.body}}</p>
      <comment-new :new-comment='newComment' :on-create='createComment'></comment-new>

      <comment-list :comments='comments'></comment-list>
    </div>
  </div>
</template>

<script>
  import commentList from '../comments/comment_list.vue';
  import commentNew from '../comments/comment_new.vue';
  import { Comment } from '../comments/comment_service.js';

  function _selectPost () {
    const vm = this;
    vm.onSelect(vm.post.id);
  }

  function _getComments () {
    const vm = this;
    vm.comments = Comment.where({ commentable_id: vm.post.id, commentable_type: 'post' });
  }

  function _buildComment () {
    const vm = this;
    vm.newComment = Comment.new(vm.post.id, 'post');
  }

  function _createComment (params) {
    Comment.create(params);
  }

  export default {
    name: 'post-item',
    props: {
      post: Object,
      onSelect: Function
    },
    data: function () {
      return {
        comments: undefined,
        newComment: undefined
      };
    },
    created: function () {
      // Need to use the CREATED callback, not mounted. If using mounted, the empty comment
      // doesn't get built in time for use in the <comment-new> component.
      const vm = this;
      // Use instance methods here, not private methods.
      vm.getComments();
      vm.buildComment();
    },
    components: {
      'comment-list': commentList,
      'comment-new': commentNew
    },
    methods: {
      selectPost: _selectPost,
      getComments: _getComments,
      buildComment: _buildComment,
      createComment: _createComment
    }
  };
</script>
