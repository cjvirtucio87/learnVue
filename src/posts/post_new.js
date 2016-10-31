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
    <div class='card-header'>
      <h3 class='card-title'>New Post</h4>
    </div>
    <div class='card-block'>
      <form>
        <div class='md-form'>
          <label for='new-title'>Title</label>
          <input id='new-title' type='text' v-model='newPost.title'><br>
        </div>

        <div class='md-form'>
          <label for='new-body'>Body</label>
          <textarea id='new-body' class='md-textarea' v-model='newPost.body' rows='5'></textarea><br>
        </div>

        <div class='md-form'>
          <input type='submit' class='btn btn-success float-xs-right' @click.prevent='onCreate()' value='submit'></input>
        </div>
      </form>
    </div>
  </div>
  `
};
