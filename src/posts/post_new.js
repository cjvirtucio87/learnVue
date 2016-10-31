'use strict';
export const postNew = {
  props: ['newPost'],
  methods: {
    onCreate: function () {
      let vm = this;
      vm.$emit('post-create', vm.newPost);
    }
  },
  template:
  `
  <form>
    <input type='text' placeholder='Title' v-model='newPost.title'><br>
    <input type='text' placeholder='Body' v-model='newPost.body'><br>
    <input type='submit' @click.prevent='onCreate()' value='submit'></input>
  </form>
  `
};
