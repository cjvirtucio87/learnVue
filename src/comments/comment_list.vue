<template>
  <div>
    <div class='row' v-for='comment of comments'>
      <div class='col-md-6 offset-md-3'>
        {{comment.id}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment-list',
    props: {
      comments: Array
    }
  };
</script>
