'use strict';

// 默认配置
let defaultConfig = {
    apiPath:'http://127.0.0.1:8000/api/v1',                 // API地址
    apiAlias:'crawler',                                     // API项目名称
    apiKey:'585cc9803348b0166cef99fb',                      // API秘钥
    apiEmail:'crawler@acgo.club',                           // 账号邮箱
    apiPwd:'147a4360453c7c338152999d22e429f4',              // 账号密码
    apiCode:'585cc9803348b0166cef99fc',                     // 账号邀请码
    log: {
        path: './logs/',                                    // 日志路径
        type: 'console',                                    // 日志打印类型：console、fileLog、dateFileLog
        level: 'debug'                                      // 日志打印级别：trace、debug、info、warn、error、fatal
    },
    mailgun:{                                               //邮件系统配置
        apiKey:'key-4gbycm953yvy11aqupebl9to5u0qapg8',
        domain:'mail.acgo.club'
    },
    mailAlertList:['cqggff@live.com'],                      // 发送报警邮件邮箱
    maxQuestNum:5,                                          // 同时处理的任务数
    intervalTime:30                                         // 执行任务间隔时间(s)
};
// 启动配置，部署环境变量：dev、test、uat、online
let startupConfig = process.env.CFG_PATH || ('./config-' + (process.env.NODE_ENV || 'dev'));
// 获取环境配置
let config = {};
try {
    global.console.log('启动配置文件：%s', startupConfig);config = require(startupConfig);
} catch(e) {
    global.console.error('未找到启动配置：%s', startupConfig);
}
// 获取当前部署环境对应配置
config = Object.assign({}, defaultConfig, config || {});

module.exports = config;