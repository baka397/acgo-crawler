'use strict';
const bilibili=require('./bilibili');
const tool = require('../../common/tool');
/**
 * 抓取任务
 * @param  {Number} type   抓取类型
 * @param  {String} taskId 任务ID
 * @param  {String} url    抓取地址
 * @return {Object}        Promise对象
 */
module.exports=function(type,taskId,url){
    switch(type){
        case 1:
            return bilibili(taskId,url);
        default:
            return tool.nextPromise(new Error('错误的抓取任务类型'));
    }
}