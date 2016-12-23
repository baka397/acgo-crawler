'use strict';
let tool = require('../common/tool');
let pkg = require('../package.json');
let _ = require('lodash');

// 默认配置
let defaultConfig = {
    apiDomain:'127.0.0.1:8000',
    apiAlias:'',
    apiKey:'',
    apiUsername:'',
    apiUserpassword:''
};
// 启动配置，部署环境变量：dev、test、uat、online
let startupConfig = process.env.CFG_PATH || ('./config-' + (process.env.NODE_ENV || 'dev'));
// 获取环境配置
let config = {};
try {console.log('启动配置文件：%s', startupConfig);config = require(startupConfig);} catch(e) {console.error('未找到启动配置：%s', startupConfig)};
// 获取当前部署环境对应配置
config = _.extend({}, defaultConfig, config || {});

module.exports = config;