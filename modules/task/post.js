'use strict';
const api = require('../api');
const tool = require('../../common/tool');

module.exports=function(needStopGroup,needPostItem){
    global.LOG.info('开始发送抓取结果');
    if(needPostItem.length===0){
        throw new Error('没有需要发送的数据');
    }
    let promiseList=needPostItem.map(function(item){
        return api.addGroupItem(item);
    });
    let stopPromiseList=needStopGroup.map(function(groupId){
        return api.stopGroupTask(groupId);
    });
    let totalRound=Math.ceil(promiseList.length/global.CONFIG.maxQuestNum);
    let promiseFunc=tool.nextPromise(null,null);
    for(let i=0;i<totalRound;i++){
        promiseFunc=promiseFunc.then(function(){
            return Promise.all(promiseList.slice(i*global.CONFIG.maxQuestNum,(i+1)*global.CONFIG.maxQuestNum));
        });
    }
    return promiseFunc.then(function(){
        return Promise.all([stopPromiseList]);
    });
};