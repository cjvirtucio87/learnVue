<template>
  <div class='col-md-12'>
    <div class='card'>
      <div class='card-block'>
        <h3 class='card-title'>{{post.title}}</h3>
        <p class='card-text'>{{post.body}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'post-item',
    props: {
      post: Object,
      onUpdate: Function
    }
  };
</script>
