'use strict';
const tool = require('../../common/tool');
const ANIME_GROUP = require('../../enums/anime_group');
const agent = require('./agent');
const groupType='3';
const typePage = require('./iqiyi_type_page');

module.exports=function(taskId,url){
    if(!ANIME_GROUP.type[groupType].taskRegExp.test(url)){
        let err=new Error('错误的任务地址,taskId:'+taskId);
        return tool.nextPromise(err);
    }
    return agent(url).then(function($){
        let text=$.html();
        let albumIdFindResult=text.match(/albumId\:\s(\d+)\,/);
        let pageSize=$('#block-H .mod-album_tab_num a').length;
        if(albumIdFindResult){
            return typePage(albumIdFindResult[1],pageSize,taskId).then(function(result){
                let animeList=[];
                result.forEach(function(list){
                    animeList=animeList.concat(list);
                });
                return tool.nextPromise(null,animeList);
            });
        }
        //返回空数据邮件报警
        return tool.nextPromise(null,[]);
    });
};