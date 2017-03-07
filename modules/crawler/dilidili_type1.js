'use strict';
const tool = require('../../common/tool');
const log = require('../../common/log');
const ANIME_GROUP = require('../../enums/anime_group');
const groupType='2';

module.exports=function($,$animeDom,taskId){
    let animeList=[];
    $animeDom.each(function(){
        let $bangumi=$(this);
        let url=$bangumi.attr('href');
        let regMobile=/^(http:\/\/)m/;
        if(regMobile.test(url)) url=url.replace(regMobile,'$1www');
        let no=$bangumi.find('em span').text().replace(/第(\d+)话/g,'$1').trim();
        let title=$bangumi.find('em').text().trim()||'无标题';
        title=title.replace(/^[\S\s]+\s第\S+话([\S\s]+)$/i,'$1').trim();
        if(!ANIME_GROUP.type[groupType].itemRegExp.test(url)){
            log.warn('错误的分集地址,被抛弃,taskId:'+taskId+',url:'+url);
            return true;
        }
        if(isNaN(no)){
            log.warn('错误的分集号,被抛弃,taskId:'+taskId+',no:'+no);
            return true;
        }
        animeList.push({
            url:url,
            episodeNo:parseInt(no),
            episodeName:title
        });
    });
    return tool.nextPromise(null,animeList);
};