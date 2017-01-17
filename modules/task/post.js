'use strict';
const api = require('../api');
const tool = require('../../common/tool');

module.exports=function(items){
    LOG.info('开始发送抓取结果');
    if(items.length>0){
        throw new Error('没有需要发送的数据');
    }
    let promiseList=items.map(function(item){
        return api.addGroupItem(item);
    })
    let totalRound=Math.ceil(promiseList.length/CONFIG.maxQuestNum);
    let promiseFunc;
    for(let i=0;i<totalRound;i++){
        promiseFunc=function(){
            return Promise.all(promiseList.slice(i*CONFIG.maxQuestNum,(i+1)*CONFIG.maxQuestNum));
        }
    }
    return promiseFunc();
}