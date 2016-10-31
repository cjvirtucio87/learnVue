'use strict';
export const postItem = {
  props: ['post'],
  methods: {
    onSelect: function () {
      // Don't call onSelect because you're waiting for the click event.
      let vm = this;
      vm.$emit('post-selected', vm.post.id);
    }
  },
  template:
  `
  <div class='card'>
    <a @click='onSelect'>
      <img class='img-fluid' src='http://www.medicalnewstoday.com/content/images/articles/311/311569/coffee.jpg'>
    </a>

    <div class='card-block'>
      <h4 class='card-title'>{{post.title}}</h4>
    </div>
  </div>
  `
};
