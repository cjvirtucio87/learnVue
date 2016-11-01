<template>
  <div class='card'>
    <div class='card-block' style='cursor: pointer;' @click='selectPost'>
      <h3 class='card-title'>{{post.title}}</h3>
      <p class='card-text'>{{post.body}}</p>
    </div>
  </div>
</template>
<script>
  function _selectPost () {
    const vm = this;
    vm.onSelect(vm.post.id);
  }

  export default {
    name: 'post-item',
    props: {
      post: Object,
      onSelect: Function
    },
    methods: {
      selectPost: _selectPost
    }
  };
</script>
