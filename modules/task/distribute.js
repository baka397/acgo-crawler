'use strict';
const tool = require('../../common/tool');
const crawler = require('../crawler/');

module.exports=function(groupObj,tasks){
    global.LOG.info('开始分发抓取任务');
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
        return function(){
            return crawler(groupObj[task.group_id].type,task._id,task.url,groupObj[task.group_id].episode_cur).then(function(list){
                let result=list.map(function(item){
                    return Object.assign({},item,{
                        groupId:task.group_id
                    });
                });
                return tool.nextPromise(null,result);
            });
        };
    });
    return tool.buildPromiseListByPage(promiseList,global.CONFIG.maxQuestNum)
    .then(function(items){
        let data=[];
        items.slice(1).forEach(function(item){
            data=data.concat(item);
        });
        return tool.nextPromise(null,[groupObj,data]);
    });
};