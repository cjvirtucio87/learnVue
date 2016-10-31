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
  <div class='card'>
    <div class='card-block'>
      <h4 class='card-title'>New Post</h4>
      <form>
        <div class='form-group'>
          <input type='text' class='form-control' placeholder='Title' v-model='newPost.title'><br>
          <textarea class='form-control' placeholder='Body' v-model='newPost.body'></textarea><br>
          <input type='submit' class='btn btn-success float-xs-right' @click.prevent='onCreate()' value='submit'></input>
        </div>
      </form>
    </div>
  </div>
  `
};
