'use strict';
const tool = require('../../common/tool');
const log = require('../../common/log');
const ANIME_GROUP = require('../../enums/anime_group');
const agentJson = require('./agent_json');
const groupType='1';

module.exports=function(taskId,url){
    let callbackName='seasonListCallback';
    let jsonUrl='http://bangumi.bilibili.com/jsonp/seasoninfo/'+url.replace(/^http:\/\/bangumi.bilibili.com\/anime\/(\d+)(|\/)$/i,'$1')+'.ver?callback='+callbackName+'&jsonp=jsonp&_='+new Date().getTime();
    return agentJson(jsonUrl,callbackName).then(function(result){
        let animeList=[];
        result.result.episodes.sort(function(before,after){
            return parseInt(before.index) - parseInt(after.index);
        }).forEach(function(ep){
            let url=ep.webplay_url;
            let no=parseInt(ep.index);
            let title=ep.index_title;
            if(!ANIME_GROUP.type[groupType].itemRegExp.test(url)){
                log.warn('错误的分集地址,被抛弃,taskId:'+taskId+',url:'+url);
                return true;
            }
            if(isNaN(no)){
                log.warn('错误的分集号,被抛弃,taskId:'+taskId+',no:'+no);
                return true;
            }
            if(!title){
                log.warn('错误的分集标题,被抛弃,taskId:'+taskId+',title:'+title);
                return true;
            }
            animeList.push({
                url:url,
                episodeNo:parseInt(no),
                episodeName:title
            });
        });
        return tool.nextPromise(null,animeList);
    });
};