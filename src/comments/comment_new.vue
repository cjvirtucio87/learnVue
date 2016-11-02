<template>
  <div class='card card-block'>
    <form @submit.prevent='createComment'>
      <textarea v-model='newComment.body'></textarea>
      <input type='submit'>
    </form>
  </div>
</template>

<script>
  const _ = require('lodash');

  export default {
    name: 'comment-new',
    props: {
      newComment: Object,
      onCreate: Function
    },
    methods: {
      createComment: function () {
        const vm = this;
        const newComment = _.cloneDeep(vm.newComment);
        vm.onCreate(newComment);
      }
    }
  };
</script>
