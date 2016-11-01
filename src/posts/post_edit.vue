<template>
  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <!--Content-->
          <div class="modal-content">
              <!--Header-->
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <!--Body-->
              <div class="modal-body">
                  <!-- edit post-item -->
                  <form>
                    <label for='post-title'>Title</label><br>
                    <input id='post-title' type='text' v-model='post.title'><br>
                    <label for='postbody'>Body</label><br>
                    <input id='post-body' type='text' v-model='post.body'><br>
                    <input type='submit' @click='updatePost()'><br>
                  </form>
              </div>
              <!--Footer-->
              <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-outline-primary float-xs-right">Save changes</button>
              </div>
          </div>
          <!--/.Content-->
      </div>
  </div>
</template>

<script>
  const _ = require('lodash');

  function _updatePost () {
    const vm = this;
    const post = _.cloneDeep(vm.post);
    vm.updatePost(post);
  }

  export default {
    name: 'post-edit',
    props: {
      post: Object,
      onUpdate: Function
    },
    methods: {
      updatePost: _updatePost
    }
  };
</script>
