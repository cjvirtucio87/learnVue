<template>
  <div class='row'>
    <div class='col-md-12'>
      <div class='row' v-for='post of posts'>
        {{post}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-list',
  props: ['posts']
};
</script>
