'use strict';
const crypto = require('crypto');
const tool = require('../../common/tool');
const log = require('../../common/log');
const agent = require('./agent_json_try');
const ANIME_GROUP = require('../../enums/anime_group');
const groupType='3';

function md5Hash(str){
    let hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex').substring(0,8);
}
module.exports=function(albumId,totalPage,taskId){
    let promiseList=[];
    for(let i=1;i<=totalPage;i++){
        let callbackName='window.Q.__callbacks__.'+md5Hash(new Date().getTime().toString());
        promiseList.push(agent('http://cache.video.qiyi.com/jp/avlist/'+albumId+'/'+i+'/50/?albumId='+albumId+'&pageNum=50&pageNo='+i+'&callback='+callbackName,callbackName).then(function(data){
            let animeList=[];
            data.data.vlist.forEach(function(item){
                let url=item.vurl;
                let no=item.pd;
                let title=item.vt||'无标题';
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