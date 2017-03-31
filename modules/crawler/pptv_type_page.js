'use strict';
const tool = require('../../common/tool');
const log = require('../../common/log');
const agent = require('./agent');
const ANIME_GROUP = require('../../enums/anime_group');
const groupType='4';

module.exports=function(flipId,totalPage,taskId){
    let promiseList=[];
    for(let i=2;i<=totalPage;i++){
        promiseList.push(agent('http://v.pptv.com/page/flip/'+flipId+'/'+totalPage+'/'+i+'?plt=').then(function($){
            let animeList=[];
            let $animeDom=$('.plist1 a');
            $animeDom.each(function(){
                let $bangumi=$(this);
                let url=$bangumi.attr('href')||'';
                url=url.trim().replace(/(\.html)[\S]+$/,'$1');
                let no=$bangumi.attr('title')||'';
                no=no.trim();
                let title='无标题';
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
        }));
    }
    return Promise.all(promiseList);
};