'use strict';
// 系统配置
global.CONFIG = require('./config/');
global.LOG = require('./common/log');

const api = require('./modules/api');
const tool = require('./common/tool');

let taskPeriod = process.env.NODE_TASK_PERIOD || new Date().getDay();

function app(){
    //获取任务列表
    LOG.info('开始获取抓取任务');
    api.getAnimeGroupTask(taskPeriod).then(function(result){
        LOG.info('获取抓取任务数据成功');
        LOG.info(result);
        if(result.content.length===0){
            LOG.info('没有需抓取任务,被忽略');
            return;
        }
    }).catch(function(err){
        LOG.error('抓取任务执行失败');
        LOG.error(err);
    })
}

module.exports=app;