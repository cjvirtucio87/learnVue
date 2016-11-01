<template>
  <div class='card card-block'>
    <h1>Edit your post</h1>
    <form @submit.prevent='updatePost'>
      <label for='post-title'>Title</label><br>
      <input id='post-title' type='text' v-model='post.title' :placeholder="post.title"><br>
      <label for='post-body'>Body</label><br>
      <input id='post-body' type='text' v-model='post.body' :placeholder="post.body"><br>
      <input type='submit'>
    </form>
  </div>
</template>

<script>
  const _ = require('lodash');

  function _updatePost () {
    const vm = this;
    const post = _.cloneDeep(vm.post);
    vm.onUpdate(post);
  }

  export default {
    name: 'post-edit',
    props: {
      post: Object,
      onUpdate: Function
    },
    methods: {
      updatePost: _updatePost
    }
  };
</script>
