<template>
  <div class='col-md-12'>
    <div class='card'>
      <div class='card-header'>
        <h1>New Post</h1>
      </div>
      <div class='card-block'>
        <form>
          <label for='new-post-title'>Title</label><br>
          <input id='new-post-title' type='text' v-model='newPost.title'><br>
          <label for='new-post-body'>Body</label><br>
          <textarea id='new-post-body' v-model='newPost.body'></textarea>
          <input type='submit' @click.prevent='createPost()'>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-create',
    props: {
      newPost: Object,
      onCreate: Function
    },
    methods: {
      createPost: function () {
        const vm = this;
        vm.onCreate(vm.newPost);
      }
    }
  };
</script>
