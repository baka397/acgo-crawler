'use strict';
const tool = require('../../common/tool');
const log = require('../../common/log');
const ANIME_GROUP = require('../../enums/anime_group');
const agent = require('./agent');
const groupType='2';

module.exports=function(taskId,url){
    if(!ANIME_GROUP.type[groupType].taskRegExp.test(url)){
        let err=new Error('错误的任务地址,taskId:'+taskId);
        return tool.nextPromise(err);
    }
    return agent(url).then(function($){
        let animeList=[];
        let $animeDom=$('.swiper-container').eq(0).find('li a');
        $animeDom.each(function(){
            let $bangumi=$(this);
            let url=$bangumi.attr('href');
            let no=$bangumi.find('em span').text().replace(/第(\d+)话/g,'$1').trim();
            let title=$bangumi.find('em').text().trim();
            title=title.replace(/^[\S\s]+\s第\S+话([\S\s]+)$/i,'$1').trim();
            if(!ANIME_GROUP.type[groupType].itemRegExp.test(url)){
                log.error('错误的分集地址,被抛弃,taskId:'+taskId);
                return true;
            }
            if(isNaN(no)){
                log.error('错误的分集号,被抛弃,taskId:'+taskId);
                return true;
            }
            if(!title){
                log.error('错误的分集标题,被抛弃,taskId:'+taskId);
                return true;
            }
            animeList.push({
                url:url,
                episode_no:parseInt(no),
                episode_name:title
            })
        })
        return tool.nextPromise(null,animeList);
    })
}