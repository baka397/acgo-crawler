'use strict';
const api = require('../api');
const tool = require('../../common/tool');

module.exports=function(needStopGroup,needPostItem){
    LOG.info('开始发送抓取结果');
    if(needPostItem.length===0){
        throw new Error('没有需要发送的数据');
    }
    let promiseList=needPostItem.map(function(item){
        return api.addGroupItem(item);
    })
    let stopPromiseList=needStopGroup.map(function(groupId){
        return api.stopGroupTask(groupId);
    })
    let totalRound=Math.ceil(promiseList.length/CONFIG.maxQuestNum);
    let promiseFunc;
    for(let i=0;i<totalRound;i++){
        promiseFunc=function(){
            return Promise.all(promiseList.slice(i*CONFIG.maxQuestNum,(i+1)*CONFIG.maxQuestNum));
        }
    }
    return promiseFunc().then(function(){
        return Promise.all([stopPromiseList]);
    });
}