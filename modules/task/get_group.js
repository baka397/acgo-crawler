'use strict';
const api = require('../api');
const tool = require('../../common/tool');

module.exports=function(list){
    global.LOG.info('开始组装剧集列表');
    let ids={};
    list.forEach(function(item){
        ids[item.group_id]=item._id;
    });
    return api.getAnimeGroupInfo(Object.keys(ids)).then(function(result){
        if(result.length===0){
            throw new Error('无效的剧集数据列表');
        }else{
            global.LOG.info('开始构建剧集索引');
            let groupList=Object.create(null);
            result.forEach(function(group){
                groupList[group._id]=Object.assign({},group,{
                    taskId:ids[group._id]
                });
            });
            return tool.nextPromise(null,groupList);
        }
    });
};