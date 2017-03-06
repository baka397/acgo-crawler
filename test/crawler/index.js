'use strict';
const crawler = require('../../modules/crawler/');
const bilibiliTest = require('./bilibili');
const dilidiliTest = require('./dilidili');
module.exports=function(){
    describe('Common', function(){
        it('Wrong type', function (done) {
            crawler(-1,1,'http://bangumi.bilibili.com/anime/3271')
            .then(function(result){
                done(new Error('验证不符合预期'))
            })
            .catch(function(err){
                console.log(err.message);
                done();
            })
        });
        it('Test empty data alert mail', function (done) {
            this.timeout(4000);
            crawler(1,1,'http://bangumi.bilibili.com/anime/4209')
            .then(function(result){
                if(result.length!==0) throw new Error('验证不符合预期');
                done()
            })
            .catch(function(err){
                console.log(err.message);
                done();
            })
        });
    });
    describe('Crawler Type Test', function(){
        bilibiliTest(crawler);
        dilidiliTest(crawler);
    })
}