<template>
  <div>
    <h5 class='text-muted'>comment by {{comment.author}}</h5>
    <p class='card-text'>{{comment.body}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      comment: Object
    }
  };
</script>
