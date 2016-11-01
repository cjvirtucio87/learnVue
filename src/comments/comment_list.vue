<template>
  <div>
    <div class='row' v-for='comment of comments'>
      <div class='col-md-4'>
        <div class='card'>
          <div class='card-block'>
            <h5 class='text-muted'>comment by {{comment.author}}</h5>
            <p class='card-text'>{{comment.body}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment-list',
    props: {
      comments: Array
    }
  };
</script>
