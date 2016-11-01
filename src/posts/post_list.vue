<template>
  <div>
    <div class='row'>
      <div class='col-md-12'>
        <post-new class='row' :new-post='newPost' :on-create='createPost'></post-new>
      </div>
    </div>
    <div class='row'>
      <div class='col-md-12'>
        <post-item class='row' v-for='post of idDesc(posts)' :post='post' :on-update='updatePost'></post-item>
      </div>
    </div>
  </div>
</template>

<script>
  import * as postNew from './post_new.vue';
  import * as postItem from './post_item.vue';
  import { Post } from '../resources.js';
  import * as filters from '../filters.js';

  function _create (params) {
    Post.create(params);
  }

  function _update (params) {
    Post.update(params);
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
      'post-new': postNew
    },
    methods: {
      createPost: _create,
      updatePost: _update,
      idDesc: filters.idDesc
    }
  };
</script>
