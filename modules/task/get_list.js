'use strict';
const api = require('../api');
const tool = require('../../common/tool');

module.exports=function(taskPeriod){
    //获取任务列表
    LOG.info('开始获取抓取任务列表');
    return api.getAnimeGroupTask(taskPeriod).then(function(result){
        //多页处理
        if(result.total>(result.page*result.pageSize)){
            let totalPage=Math.ceil(result.total/(result.pageSize))-1;
            let promiseList=[tool.nextPromise(null,result)];
            for(let i=0;i<totalPage;i++){
                promiseList.push(api.getAnimeGroupTask(taskPeriod,i+1));
                return Promise.all(promiseList);
            }
        }else{
            return tool.nextPromise(null,[result])
        }
    }).then(function(datas){
        LOG.info('开始组装任务列表');
        let list=[];
        datas.forEach(function(data){
            if(data.content.length>0) list=list.concat(data.content);
        });
        if(list.length===0){
            throw new Error('没有抓取任务');
        }else{
            return tool.nextPromise(null,list);
        }
    })
}