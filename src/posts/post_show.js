'use strict';
export default (function () {
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
