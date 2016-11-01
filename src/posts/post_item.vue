<template>
  <div class='card'>
    <div class='card-block' style='cursor: pointer;' @click='selectPost'>
      <h3 class='card-title'>{{post.title}}</h3>
      <p class='card-text'>{{post.body}}</p>

      <comment-list :comments='getComments()'></comment-list>
    </div>
  </div>
</template>
<script>
  import commentList from '../comments/comment_list.vue';
  import { Comment } from '../comments/comment_service.js';

  function _selectPost () {
    const vm = this;
    vm.onSelect(vm.post.id);
  }

  function _getComments () {
    const vm = this;
    return Comment.where({ commentable_id: vm.post.id, commentable_type: 'post' });
  }

  export default {
    name: 'post-item',
    props: {
      post: Object,
      onSelect: Function
    },
    data: function () {
      return {
        comments: undefined
      };
    },
    components: {
      'comment-list': commentList
    },
    methods: {
      selectPost: _selectPost,
      getComments: _getComments
    }
  };
</script>
