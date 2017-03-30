'use strict';
const request = require('superagent');

module.exports=function(url,callbackName){
    return new Promise(function(resolve,reject){
        request.get(url)
        .timeout({
            response: 5000,  // Wait 5 seconds for the server to start sending,
            deadline: 60000, // but allow 1 minute for the file to finish loading.
        })
        .end(function(err,res){
            if(err&&parseInt(err.statusCode)!==200) return reject(err);
            try{
                let backData=err?err.rawResponse:res.text;
                if(callbackName){
                    let regRule=new RegExp('^try\\{'+callbackName+'\\('+'([\\S\\s]+)$');
                    backData=backData.replace(regRule,'$1');
                    backData=backData.replace(');}catch(e){};','');
                }
                resolve(JSON.parse(backData));
            }catch(parseError){
                reject(parseError);
            }
        });
    });
};