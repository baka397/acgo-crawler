'use strict';
module.exports=function(crawler){
    describe('PPTV', function(){
        it('Crawler single page result', function (done) {
            this.timeout(20*1000);
            crawler(4,1,'http://v.pptv.com/page/TubhX8ctndsibvCQ.html')
            .then(function(result){
                if(result.length!==26) throw new Error('验证不符合预期');
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
            crawler(4,1,'http://v.pptv.com/page/WIlz8VmicL23QTrY.html')
            .then(function(result){
                if(result.length!==148) throw new Error('验证不符合预期');
                if(!result.every(function(item,index){
                    return item.episodeNo===index+1;
                })) throw new Error('验证不符合预期');
                done();
            }).catch(function(err){
                done(err);
            })
        })
        it('Crawler with wrong url', function (done) {
            crawler(4,1,'http://v.pptv.com/show/TubhX8ctndsibvCQ')
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