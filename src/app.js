'use strict';
const Vue = require('vue/dist/vue.js');

let vConfig = {
  el: '#app'
};

vConfig.data = {};
vConfig.data.arr = [1,2,3,4,5];
vConfig.data.message = 'hello world';
vConfig.data.anotherMessage = 'this is another message';

let app = new Vue(vConfig);
