'use strict';
const bilibili=require('./bilibili');
const dilidili=require('./dilidili');
const pptv=require('./pptv');
const tool = require('../../common/tool');
const mail = require('../../common/mail');

/**
 * 抓取任务
 * @param  {Number} type    抓取类型
 * @param  {String} taskId  任务ID
 * @param  {String} url     抓取地址
 * @param  {String} startNo 抓取地址
 * @return {Object}         Promise对象
 */
module.exports=function(type,taskId,url,startNo){
    function checkAnimeList(animeList){
        if(animeList.length===0&&startNo>0){
            return mail.sendAlertMail(type,taskId,url).then(function(){
                return tool.nextPromise(null,animeList);
            });   
        }
        return tool.nextPromise(null,animeList);
    }
    switch(type){
    case 1:
        return bilibili(taskId,url).then(checkAnimeList);
    case 2:
        return dilidili(taskId,url).then(checkAnimeList);
    case 4:
        return pptv(taskId,url).then(checkAnimeList);
    default:
        return tool.nextPromise(new Error('错误的抓取任务类型'));
    }
};