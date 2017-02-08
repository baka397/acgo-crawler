'use strict';
const authTool = require('./common/auth');
const config = require('./config');
const request = require('superagent');
let apiTokenParams=authTool.getTokenParams(config.apiKey,config.apiAlias);
request.post(config.apiPath+'/user/')
.send({
    'email':config.apiEmail,
    'nickname':'acgo爬虫',
    'password':authTool.getPassword(config.apiPwd),
    'code':config.apiCode
})
.set(apiTokenParams)
.end(function(err){
    if(err){
        global.console.log(err);
    }else{
        global.console.log('应用初始化完成');
    }
    process.exit(1);
});