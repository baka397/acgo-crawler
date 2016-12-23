'use strict';
let log = require('./log');
// 日志对象
global.LOG = log.logger;
// 系统配置
global.CONFIG = require('./config/');

module.exports = app;