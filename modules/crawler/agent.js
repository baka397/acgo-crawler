'use strict';
const cheerio=require('cheerio');
const request = require('superagent');

module.exports=function(url){
    return new Promise(function(resolve,reject){
        request.get(url)
        .set({'Accept-Encoding' : 'gzip,sdch'})
        .timeout({
            response: 5000,  // Wait 5 seconds for the server to start sending,
            deadline: 60000, // but allow 1 minute for the file to finish loading.
        })
        .end(function(err,res){
            if(err) return reject(err);
            let $=cheerio.load(res.text);
            resolve($);
        });
    });
};