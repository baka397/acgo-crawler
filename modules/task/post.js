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
    return tool.buildPromiseListByPage(promiseList,global.CONFIG.maxQuestNum)
    .then(function(){
        let stopPromiseList=needStopGroup.map(function(groupId){
            return api.stopGroupTask(groupId);
        });
        return Promise.all([stopPromiseList]);
    });
};