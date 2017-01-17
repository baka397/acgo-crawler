'use strict';
// 系统配置
global.CONFIG = require('./config/');
global.LOG = require('./common/log');
const tool = require('./common/tool');

const taskGetList = require('./modules/task/get_list');
const taskGetGroup = require('./modules/task/get_group');
const taskDistribute = require('./modules/task/distribute');
const taskFilter = require('./modules/task/filter');
const taskPost = require('./modules/task/post');

let taskPeriod = parseInt(process.env.NODE_TASK_PERIOD) || new Date().getDay();
if(taskPeriod===0) taskPeriod=7;

function app(){
    LOG.error('抓取任务开始执行');
    taskGetList(taskPeriod) //获取任务列表
    .then(function(list){ //获取剧集列表
        return Promise.all([taskGetGroup(list),tool.nextPromise(null,list)])
    })
    .then(function(result){ //分发任务
        return taskDistribute(result[0],result[1]);
    })
    .then(function(result){ //筛选任务
        return taskFilter(result[0],result[1]);
    })
    .then(function(items){ //发送结果
        return taskPost(items)
    })
    .then(function(result){
        console.log(JSON.stringify(result));
    })
    .catch(function(err){
        LOG.error('抓取任务执行失败');
        LOG.error(err);
    })
}

module.exports=app;