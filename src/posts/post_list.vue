<template>
  <div>
    <div class='row'>
      <div class='col-md-12'>
        <post-create class='row' :new-post='newPost' :on-create='createPost'></post-create>
      </div>
    </div>
    <div class='row'>
      <div class='col-md-12'>
        <post-item class='row' v-for='post of posts' :post='post'></post-item>
      </div>
    </div>
  </div>
</template>

<script>
  import * as postCreate from './post_create.vue';
  import * as postItem from './post_item.vue';
  import { Post } from '../resources.js';

  function _create (params) {
    Post.create(params);
  }

  function _initNewPost () {
    return Post.new()
      .then(function (formData) { return formData; });
  }

  function _initData () {
    return {
      newPost: _initNewPost()
    };
  }

  export default {
    name: 'post-list',
    props: {
      posts: Array
    },
    data: function () {
      return _initData();
    },
    components: {
      'post-item': postItem,
      'post-create': postCreate
    },
    methods: {
      createPost: _create
    }
  };
</script>
