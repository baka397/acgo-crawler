'use strict';
let log = require('./log');
// 日志对象
global.LOG = log.logger;
// 系统配置
global.CONFIG = require('./config/');

const api = require('./modules/api');

let taskPeriod = process.env.NODE_TASK_PERIOD || new Date().getDay();

module.exports = app;