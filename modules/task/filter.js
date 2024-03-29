'use strict';
const tool = require('../../common/tool');

module.exports=function(groupObj,items){
    global.LOG.info('开始筛选抓取数据');
    let needStopGroup=[];
    let needPostItem=items.filter(function(item){
        let group=groupObj[item.groupId];
        if(group.episode_total===item.episodeNo) needStopGroup.push(group.taskId);
        if(group.episode_cur>=item.episodeNo){
            return false;
        }
        return true;
    });
    return tool.nextPromise(null,[needStopGroup,needPostItem]);
};