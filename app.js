'use strict';
// 系统配置
global.CONFIG = require('./config/');

const api = require('./modules/api');

global.taskPeriod = process.env.NODE_TASK_PERIOD || new Date().getDay();

module.exports = app;