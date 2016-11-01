<template>
  <div>
    <div class='row'>
      <div class='col-md-12'>
        <post-new :new-post='newPost' :on-create='createPost'></post-new>
      </div>
    </div>
    <div class='row' v-for='post of idDesc(posts)'>
      <div class='col-md-12'>
        <post-edit v-show='checkSelected(post.id)' :post='post' :on-update='updatePost'></post-edit>
        <post-item v-show='!selected' :post='post' :on-select='select'></post-item>
      </div>
    </div>
  </div>
</template>

<script>
  // Post components
  import * as postItem from './post_item.vue';
  import * as postNew from './post_new.vue';
  import * as postEdit from './post_edit.vue';

  import { Post } from '../resources.js';
  import * as filters from '../filters.js';

  function _create (params) {
    Post.create(params);
  }

  function _update (params) {
    const vm = this;
    Post.update(params);
    vm.clearSelect();
  }

  function _initNewPost () {
    return Post.new()
      .then(function (formData) { return formData; });
  }

  function _checkSelected (id) {
    const vm = this;
    return vm.selected && vm.selected === id;
  }

  function _clearSelect () {
    const vm = this;
    vm.selected = undefined;
  }

  function _select (id) {
    const vm = this;
    vm.selected = id;
  }

  function _initData () {
    return {
      newPost: _initNewPost(),
      selected: undefined
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
      'post-new': postNew,
      'post-edit': postEdit,
      'post-item': postItem
    },
    methods: {
      createPost: _create,
      updatePost: _update,
      select: _select,
      checkSelected: _checkSelected,
      clearSelect: _clearSelect,
      idDesc: filters.idDesc
    }
  };
</script>
