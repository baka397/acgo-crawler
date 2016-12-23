'use strict';
let pkg = require('../package.json');

// 默认配置
let defaultConfig = {
    apiPath:'http://127.0.0.1:8000/api/v1',
    apiAlias:'crawler',
    apiKey:'585cc9803348b0166cef99fb',
    apiEmail:'crawler@acgo.club',
    apiPwd:'147a4360453c7c338152999d22e429f4',
    apiCode:'585cc9803348b0166cef99fc',
    log: {
        path: './logs/',                                    // 日志路径
        type: 'console',                                    // 日志打印类型：console、fileLog、dateFileLog
        level: 'debug'                                      // 日志打印级别：trace、debug、info、warn、error、fatal
    }
};
// 启动配置，部署环境变量：dev、test、uat、online
let startupConfig = process.env.CFG_PATH || ('./config-' + (process.env.NODE_ENV || 'dev'));
// 获取环境配置
let config = {};
try {console.log('启动配置文件：%s', startupConfig);config = require(startupConfig);} catch(e) {console.error('未找到启动配置：%s', startupConfig)};
// 获取当前部署环境对应配置
config = Object.assign({}, defaultConfig, config || {});

module.exports = config;