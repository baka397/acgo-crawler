'use strict';
const app = require('./app');
const schedule = require('node-schedule');

//定时器任务
let job = schedule.scheduleJob('0 * * * *', function(){
    app();
});