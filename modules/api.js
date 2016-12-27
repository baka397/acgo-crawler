'use strict';
const queryString = require('querystring');
const PATH = CONFIG.apiPath;
const request = require('superagent');
const authTool = require('../common/auth');
const STATUS_CODE = require('../enums/status_code');
const URL = {
    userLogin: PATH+'/user/login/',
    getGrouptask: PATH+'/anime-group/task/',
    getGroupDetail: PATH+'/anime-group/:id',
    addGroupItem: PATH+'/anime-group/item/'
}
let apiTokenParams=authTool.getTokenParams(CONFIG.apiKey,CONFIG.apiAlias);
function getTokenParam(){
    return new Promise(function(resolve,reject){
        if(apiTokenParams['x-req-key']){
            resolve(apiTokenParams);
        }else{
            request.post(URL.userLogin)
            .set(apiTokenParams)
            .send({
                'email':CONFIG.apiEmail,
                'password':authTool.getPassword(CONFIG.apiPwd)
            })
            .end(function(err,res){
                if(err) reject(err);
                else{
                    apiTokenParams['x-req-key']=res.body.data.key;
                    resolve(apiTokenParams);
                }
            });
        }
    })
}

function apiRequest(url,data,method){
    method=method?method.toLowerCase():'get';
    if (method === 'get' && data) {
        url += (/\?/.test(url) ? '&' : '?') + queryString.stringify(data);
    }
    LOG.info('开始请求API,请求类型:',method,',请求地址:'+url);
    return getTokenParam().then(function(token){
        return new Promise(function(resolve,reject){
            let requestObj=request[method](url)
            .timeout({
                response: 5000,  // Wait 5 seconds for the server to start sending,
                deadline: 60000, // but allow 1 minute for the file to finish loading.
            })
            .set(token)
            if(method!=='get'&&data){
                requestObj.send(data);
                LOG.info(data);
            }
            requestObj.end(function(err,res){
                if(err){
                    LOG.error(err);
                    return reject(err);
                }
                LOG.info(res.body);
                if(res.code!==200||res.body.code!==STATUS_CODE.SUCCESS){
                    return resolve(res.body.data);
                }else{
                    let error = new Error(res.body.msg||'API处理错误');
                    error.status = res.body.code||res.status;
                    return reject(error);
                }
            })
        })
    })
}

exports.getAnimeGroupTask=function(taskPeriod){
    taskPeriod=parseInt(taskPeriod);
    if(taskPeriod===0) taskPeriod=7;
    return apiRequest(URL.getGrouptask,{
        taskPeriod:taskPeriod
    })
}

exports.getAnimeGroupInfo=function(groupId){
    let url=URL.getGroupDetail.replace(/\:id$/,groupId)
    return apiRequest(url)
}

exports.addGroupItem=function(data){
    return apiRequest(URL.addGroupItem,data,'post')
}