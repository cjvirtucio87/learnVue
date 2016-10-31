export const postItem = (function () {
  return {
    props: ['post'],
    methods: {
      onSelect: function () {
        // A method should be passed to the template as a regular callback, unlike Angular.
        let vm = this;
        vm.$emit('post-selected', vm.post.id);
      }
    },
    template:
    `
    <div class='card'>
      <a @click='onSelect'>
        <img class='card-img-top' src='http://www.medicalnewstoday.com/content/images/articles/311/311569/coffee.jpg' width='480px' height='300px'>
      </a>

      <div class='card-block'>
        <h4 class='card-title'>{{post.title}}</h4>
        <p class='card-text'>{{post.body}}</p>
      </div>
    </div>
    `
  };
})();

export const postShow = (function () {
  return {
    props: ['post'],
    template:
    `
    <div class='card'>
      <div class='card-header'>
        <&nbsp>
      </div>
      <div class='card-block'>
        <h4 class='card-title'>{{post.title}}</h4>
        <p class='card-text'>{{post.body}}</p>
      </div>
    </div>
    `
  };
})();

export const postList = (function (postItem) {
  return {
    props: ['posts'],
    data: function () {
      return { selected: undefined };
    },
    components: {
      'post-item': postItem
    },
    methods: {
      setSelected: function (id) {
        let vm = this;
        vm.selected = id;
      }
    },
    template:
    `
    <ul>
      <post-item v-for='post in posts.cached' :post='post' @post-selected='setSelected'></post-item>
    </ul>
    `
  };
})(postItem);
