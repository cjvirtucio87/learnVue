const _ = require('lodash');

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
      </div>
      <div class='card-block'>
        <h4 class='card-title'>{{post.title}}</h4>
        <p class='card-text'>{{post.body}}</p>
      </div>
    </div>
    `
  };
})();

export const postList = (function (postItem, postShow) {
  return {
    props: ['posts'],
    data: function () {
      return { selected: undefined };
    },
    components: {
      'post-item': postItem,
      'post-show': postShow
    },
    methods: {
      setSelected: function (id) {
        let vm = this;
        vm.selected = id;
      },
      unselected: function (posts) {
        let vm = this;
        if (vm.selected) {
          return _.filter(posts, {id: vm.selected});
        } else {
          return posts;
        }
      },
      matchSelected: function (id) {
        let vm = this;
        return vm.selected === id;
      }
    },
    template:
    `
    <ul>
      <template v-for='post in unselected(posts)' >
        <post-item :post='post' v-if='!selected' @post-selected='setSelected'></post-item>
        <post-show :post='post' v-if='matchSelected(post.id)'></post-show>
      </template>
    </ul>
    `
  };
})(postItem, postShow);
