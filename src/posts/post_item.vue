<template>
  <div class='card'>
    <div class='card-block' style='cursor: pointer;' @click='onSelect(post.id)'>
      <h3 class='card-title'>{{post.title}}</h3>
      <p class='card-text'>{{post.body}}</p>
    </div>
  </div>
</template>
<script>
  function _toggleEdit () {
    const vm = this;
    vm.onToggle();
  }

  export default {
    name: 'post-item',
    props: {
      post: Object,
      onSelect: Function
    },
    methods: {
      toggleEdit: _toggleEdit
    }
  };
</script>
