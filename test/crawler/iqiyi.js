'use strict';
module.exports=function(crawler){
    describe('iqiyi', function(){
        it('Crawler single page result', function (done) {
            this.timeout(20*1000);
            crawler(3,1,'http://www.iqiyi.com/a_19rrhbyz99.html')
            .then(function(result){
                if(result.length!==12) throw new Error('验证不符合预期');
                if(!result.every(function(item,index){
                    return item.episodeNo===index+1;
                })) throw new Error('验证不符合预期');
                done();
            }).catch(function(err){
                done(err);
            })
        })
        it('Crawler mulit page result', function (done) {
            this.timeout(20*1000);
            crawler(3,1,'http://www.iqiyi.com/a_19rrk4anph.html')
            .then(function(result){
                if(result.length!==178) throw new Error('验证不符合预期');
                if(!result.every(function(item,index){
                    return item.episodeNo===index+1;
                })) throw new Error('验证不符合预期');
                done();
            }).catch(function(err){
                done(err);
            })
        })
        it('Crawler with wrong url', function (done) {
            crawler(3,1,'http://www.iqiyi.com/a_19rrk4anph')
            .then(function(result){
                done(new Error('验证不符合预期'))
            })
            .catch(function(err){
                console.log(err.message);
                done();
            })
        })
    })
}