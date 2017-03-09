'use strict';
const tool = require('../../common/tool');
const ANIME_GROUP = require('../../enums/anime_group');
const agent = require('./agent');
const groupType='4';
const typeSingle = require('./ppty_type_single');
const typePage = require('./ppty_type_page');

module.exports=function(taskId,url){
    if(!ANIME_GROUP.type[groupType].taskRegExp.test(url)){
        let err=new Error('错误的任务地址,taskId:'+taskId);
        return tool.nextPromise(err);
    }
    return agent(url).then(function($){
        let $animeListDom=$('#juji_jlist1 a');
        if($animeListDom.length===0){
            return typeSingle($,$('#juji_1 a'),taskId);
        }else{
            var text=$.html();
            let flipIdFindResult=text.match(/\{\"id\"\:(\d+)\,\"id_encode\"/);
            if(flipIdFindResult){
                return typeSingle($,$('#juji_1 a'),taskId).then(function(singleList){
                    return Promise.all([tool.nextPromise(null,singleList),typePage(flipIdFindResult[1],$animeListDom.length,taskId)]);
                }).then(function(result){
                    let animeList=[].concat(result[0]);
                    result[1].forEach(function(list){
                        animeList=animeList.concat(list);
                    });
                    return tool.nextPromise(null,animeList);
                });
            }
        }
        //返回空数据邮件报警
        return tool.nextPromise(null,[]);
    });
};