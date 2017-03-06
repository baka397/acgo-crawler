'use strict';
const tool = require('../../common/tool');
const ANIME_GROUP = require('../../enums/anime_group');
const typeBangumi = require('./bilibili_type_bangumi');
const groupType='1';

module.exports=function(taskId,url){
    if(!ANIME_GROUP.type[groupType].taskRegExp.test(url)){
        let err=new Error('错误的任务地址,taskId:'+taskId);
        return tool.nextPromise(err);
    }
    return typeBangumi(taskId,url);
};