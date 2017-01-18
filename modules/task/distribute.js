'use strict';
const api = require('../api');
const tool = require('../../common/tool');
const crawler = require('../crawler/');

module.exports=function(groupObj,tasks){
    LOG.info('开始分发抓取任务');
    //筛选
    let onTask=tasks.filter(function(task){
        let group=groupObj[task.group_id];
        let curTime=new Date().getTime();
        if(group.episode_cur>0){
            let updateTime=new Date(group.update_at).getTime();
            let distance=Math.ceil((curTime-updateTime)/(1000*60*60));
            if(distance<=24) return false;
        }
        return true;
    });
    if(onTask.length===0){
        throw new Error('没有抓取的数据');
    }
    let promiseList=onTask.map(function(task){
        return crawler(groupObj[task.group_id].type,task._id,task.url).then(function(list){
            let result=list.map(function(item){
                return Object.assign({},item,{
                    groupId:task.group_id
                })
            })
            return tool.nextPromise(null,result);
        })
    })
    let totalRound=Math.ceil(promiseList.length/CONFIG.maxQuestNum);
    let promiseFunc;
    for(let i=0;i<totalRound;i++){
        promiseFunc=function(result){
            if(!result) result=[];
            return Promise.all(promiseList.slice(i*CONFIG.maxQuestNum,(i+1)*CONFIG.maxQuestNum)).then(function(list){
                list.forEach(function(itemList){
                    result=result.concat(itemList);
                })
                return tool.nextPromise(null,result);
            });
        }
    }
    return promiseFunc().then(function(items){
        return tool.nextPromise(null,[groupObj,items]);
    })
}