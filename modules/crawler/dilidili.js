'use strict';
const tool = require('../../common/tool');
const ANIME_GROUP = require('../../enums/anime_group');
const agent = require('./agent');
const groupType='2';
const type1 = require('./dilidili_type1');
const type2 = require('./dilidili_type2');

module.exports=function(taskId,url){
    if(!ANIME_GROUP.type[groupType].taskRegExp.test(url)){
        let err=new Error('错误的任务地址,taskId:'+taskId);
        return tool.nextPromise(err);
    }
    return agent(url).then(function($){
        let $animeDom=$('.swiper-container');
        if($animeDom.length>0){
            return type1($,$animeDom.eq(0).find('li a'),taskId);
        }
        $animeDom=$('#tab-main');
        if($animeDom.length>0){
            return type2($,$animeDom.find('table tr'),taskId);
        }
        return tool.nextPromise(new Error('不存在的抓取规则'));
    });
};