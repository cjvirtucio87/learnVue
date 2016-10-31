'use strict';
const _ = require('lodash');
import { postItem } from './post_item.js';
import { postShow } from './post_show.js';

export const postList = (function (postItem, postShow) {
  return {
    props: ['posts'],
    data: function () {
      return {
        selected: undefined,
        newPost: {
          id: undefined,
          author: undefined,
          title: undefined,
          body: undefined
        }
      };
    },
    components: {
      'post-item': postItem,
      'post-show': postShow
    },
    methods: {
      // Don't call setSelected yet because you're waiting for the message from the post-item.
      setSelected: function (id) {
        let vm = this;
        vm.selected = id;
      },
      // Call this right away because you're filtering posts.
      unselected: function (posts) {
        let vm = this;
        if (vm.selected) {
          return _.filter(posts, {id: vm.selected});
        } else {
          return posts;
        }
      },
      // Call this right away because you want to only show the matching post.
      matchSelected: function (id) {
        let vm = this;
        return vm.selected === id;
      },
      addPost: function (formData) {
        let vm = this;
        let newPost = _.deepCopy(formData);
        newPost.id = _.chain(vm.posts)
                      .map('id')
                      .max()
                      .value();
        vm.posts.push(newPost);
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