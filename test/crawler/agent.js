'use strict';
module.exports=function(crawler){
    describe('bilibili', function(){
        it('Crawler mulit result', function (done) {
            crawler(1,1,'http://bangumi.bilibili.com/anime/3271')
            .then(function(result){
                let animeList=[{"url":"http://bangumi.bilibili.com/anime/3271/play#82732","episode_no":1,"episode_name":"夏日祭典的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#82961","episode_no":2,"episode_name":"枫的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#83207","episode_no":3,"episode_name":"堀部营的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#83492","episode_no":4,"episode_name":"纺织的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#83839","episode_no":5,"episode_name":"领导者的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#83872","episode_no":6,"episode_name":"before&after的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#84256","episode_no":7,"episode_name":"死神的时间 前篇"},{"url":"http://bangumi.bilibili.com/anime/3271/play#84495","episode_no":8,"episode_name":"死神的时间 后篇"},{"url":"http://bangumi.bilibili.com/anime/3271/play#84637","episode_no":9,"episode_name":"二周目的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#84987","episode_no":10,"episode_name":"学园祭的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#85199","episode_no":11,"episode_name":"期末的时间 第二学期"},{"url":"http://bangumi.bilibili.com/anime/3271/play#85462","episode_no":12,"episode_name":"空间的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#85711","episode_no":13,"episode_name":"培养的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#85826","episode_no":14,"episode_name":"真面目的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#86696","episode_no":15,"episode_name":"告白的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#86861","episode_no":16,"episode_name":"过去的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#87565","episode_no":17,"episode_name":"分裂的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#87841","episode_no":18,"episode_name":"结果的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#88253","episode_no":19,"episode_name":"宇宙的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#88503","episode_no":20,"episode_name":"情人节的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#88837","episode_no":21,"episode_name":"信赖的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#89135","episode_no":22,"episode_name":"生日快乐的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#89136","episode_no":23,"episode_name":"最终Boss的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#89137","episode_no":24,"episode_name":"毕业的时间"},{"url":"http://bangumi.bilibili.com/anime/3271/play#89138","episode_no":25,"episode_name":"未来的时间"}];
                animeList.forEach(function(item,index){
                    if(item.episode_no!==result[index].episode_no) throw new Error('验证不符合预期');
                    if(item.url!==result[index].url) throw new Error('验证不符合预期');
                    if(item.episode_name!==result[index].episode_name) throw new Error('验证不符合预期');
                })
                done();
            }).catch(function(err){
                done(err);
            })
        })
        it('Crawler with wrong url', function (done) {
            crawler(1,1,'http://bangumi.bilibili.com/anime/test')
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