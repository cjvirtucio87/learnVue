<template>
  <div>
    <div class='row' v-for='comment of comments'>
      <div class='col-md-8'>
        <div class='card'>
          <div class='card-block'>
            <!-- can't refactor to separate component; leads to circular dependency -->
            <h5 class='text-muted'>comment by {{comment.author}}</h5>
            <p class='card-text'>{{comment.body}}</p>

            <comment-list
            v-if='getChildComments(comment.id).length'
            :comments='getChildComments(comment.id)'>
            </comment-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Comment } from './comment_service.js';

  function _getChildComments (id) {
    return Comment.where({ commentable_id: id, commentable_type: 'comment' });
  }

  export default {
    name: 'comment-list',
    props: {
      comments: Array
    },
    methods: {
      getChildComments: _getChildComments
    }
  };
</script>
