'use strict';
const Vue = require('vue');

let appConfig = {};
appConfig.data = {};
appConfig.el = '#app';


const arr = [1,2,3,4,5];

appConfig.data.arr = arr;

const app = new Vue(appConfig);
