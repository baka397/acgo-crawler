'use strict';
const log = require('./common/log');
const fork = require('child_process').fork;
const schedule = require('node-schedule');

//定时器任务
schedule.scheduleJob('0 * * * *', function(){
    let child=fork('day',{
        'env':{
            'NODE_ENV':process.env.NODE_ENV||'',
            'LOG_PATH':process.env.LOG_PATH||''
        }
    });
    child.on('exit',function(){
        log.info('抓取子进程已完成');
    });
    child.on('close',function(){
        log.info('抓取子进程已关闭');
    });
    child.on('error',function(err){
        log.info('抓取子进程执行错误');
        log.error(err);
    });
});