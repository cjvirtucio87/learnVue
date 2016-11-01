<template>
  <div class='row'>
    <div class='col-md-12'>
      <post-item class='row' v-for='post of posts' :post='post'></post-item>
    </div>
  </div>
</template>

<script>
  import * as postItem from './post_item.vue';
  export default {
    name: 'post-list',
    props: {
      posts: Array
    },
    components: {
      'post-item': postItem
    }
  };
</script>
