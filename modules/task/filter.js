'use strict';
const api = require('../api');
const tool = require('../../common/tool');
const crawler = require('../crawler/');

module.exports=function(groupObj,items){
    LOG.info('开始筛选抓取数据');
    let result=items.filter(function(item){
        let group=groupObj[item.groupId];
        if(group.episode_cur>=item.episodeNo) return false;
        return true;
    })
    return tool.nextPromise(null,result);
}