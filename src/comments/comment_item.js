'use strict';
export const commentItem = {
  props: ['comment'],
  template:
  `
  <div class='card'>
    <div class='card-block'>
      <h5>{{comment.author}}</h5>
      <p>{{comment.body}}</p>
    </div>
  </div>
  `
};
