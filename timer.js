'use strict';
const log = require('./common/log');
const exec = require('child_process').exec;
const schedule = require('node-schedule');

//定时器任务
schedule.scheduleJob('0 * * * *', function(){
    exec('node day.js',{
        'env':{
            'NODE_ENV':process.env.NODE_ENV||'',
            'LOG_PATH':process.env.LOG_PATH||''
        }
    }, (error, stdout, stderr) => {
        if (error) {
            log.error(error);
        }
        if(stdout){
            log.info(stdout);
        }
        if(stderr){
            log.error(stderr);
        }
    });
});