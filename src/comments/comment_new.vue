<template>
  <div class='card card-block'>
    <form @submit.prevent='createComment'>
      <textarea v-model='clonedNewComment.body'></textarea>
      <input type='submit'>
    </form>
  </div>
</template>

<script>
  const _ = require('lodash');

  function _createComment () {
    const vm = this;
    const newComment = _.cloneDeep(vm.clonedNewComment);
    vm.onCreate(newComment);
  }

  function _cloneNewComment () {
    const vm = this;
    vm.clonedNewComment = _.cloneDeep(vm.newComment);
  }

  export default {
    name: 'comment-new',
    props: {
      newComment: Object,
      onCreate: Function
    },
    data: function () {
      return {
        // Need to sever data binding.
        clonedNewComment: undefined
      };
    },
    created: function () {
      const vm = this;
      vm.cloneNewComment();
    },
    methods: {
      createComment: _createComment,
      cloneNewComment: _cloneNewComment
    }
  };
</script>
