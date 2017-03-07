'use strict';
const tool = require('../../common/tool');
const log = require('../../common/log');
const ANIME_GROUP = require('../../enums/anime_group');
const groupType='2';

module.exports=function($,$animeDom,taskId){
    let animeList=[];
    $animeDom.each(function(){
        let $bangumi=$(this);
        let $bangumiInfo=$bangumi.find('td');
        let url=$bangumiInfo.find('a').attr('href');
        let regMobile=/^(http:\/\/)m/;
        let regRelativePath=/^\//;
        if(regMobile.test(url)) url=url.replace(regMobile,'$1www');
        if(regRelativePath.test(url)) url='http://www.dilidili.wang'+url;
        let no=$bangumiInfo.eq(0).text().replace(/第(\d+)话/g,'$1').trim();
        let title=$bangumiInfo.eq(1).find('a').text().trim()||'无标题';
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