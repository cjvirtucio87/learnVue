'use strict';
const Vue = require('vue/dist/vue.js');
const _ = require('lodash');

let vConfig = {
  el: '#app'
};

vConfig.data = {};
vConfig.data.arr = [1,2,3,4,5];
vConfig.data.message = 'hello world';
vConfig.data.anotherMessage = 'this is another message';
vConfig.data.mapped = _.map(vConfig.data.arr, n => n + 1);

new Vue(vConfig);
