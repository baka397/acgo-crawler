'use strict';
const tool = require('../../common/tool');
const log = require('../../common/log');
const ANIME_GROUP = require('../../enums/anime_group');
const agent = require('./agent');
const groupType='1';

module.exports=function(taskId,url){
    if(!ANIME_GROUP.type[groupType].taskRegExp.test(url)){
        let err=new Error('错误的任务地址,taskId:'+taskId);
        return tool.nextPromise(err);
    }
    return agent(url).then(function($){
        let animeList=[];
        let $animeDom=$('.complete-list .v1-bangumi-list-part-child');
        $animeDom.each(function(){
            let $this=$(this);
            let $bangumi=$this.find('.v1-complete-text');
            let url='http:'+$bangumi.attr('href');
            let no=$bangumi.find('.text-wrp-num-content').text().replace(/第(\d+)话/g,'$1').trim();
            let title=$bangumi.find('.text-wrp-title').text().trim();
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