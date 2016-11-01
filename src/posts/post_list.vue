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

  import { Post } from './post_service.js';
  import * as filters from '../filters.js';

  function _create (params) {
    const vm = this;
    Post.create(params);
    vm.clearSelect();
  }

  function _update (params) {
    const vm = this;
    Post.update(params);
    vm.clearSelect();
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
    vm.$forceUpdate();
  }
  
  export default {
    name: 'post-list',
    props: {
      posts: Array
    },
    data: function () {
      return {
        // Never forget to define your data function. Only the properties defined in the returned
        // object get to be reactive. Properties defined after instantiation are non-reactive and
        // require vm.$forceUpdate().
        newPost: Post.new(),
        selected: undefined
      };
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
