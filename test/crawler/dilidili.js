'use strict';
module.exports=function(crawler){
    describe('dilidili', function(){
        it('Crawler mulit result', function (done) {
            crawler(2,1,'http://www.dilidili.com/anime/jojo-daiya/')
            .then(function(result){
                let animeList=[{"url":"http://www.dilidili.com/watch3/29421/","episode_no":0,"episode_name":"宣传PV"},{"url":"http://www.dilidili.com/watch3/30677/","episode_no":1,"episode_name":"空条承太郎！遇见东方仗助"},{"url":"http://www.dilidili.com/watch3/30948/","episode_no":2,"episode_name":"东方仗助!遇见安杰罗"},{"url":"http://www.dilidili.com/watch3/32835/","episode_no":3,"episode_name":"虹村兄弟 其之1"},{"url":"http://www.dilidili.com/watch3/34691/","episode_no":4,"episode_name":"虹村兄弟 其之2"},{"url":"http://www.dilidili.com/watch3/36297/","episode_no":5,"episode_name":"虹村兄弟 其之3"},{"url":"http://www.dilidili.com/watch3/37574/","episode_no":6,"episode_name":"广濑康一（回声）"},{"url":"http://www.dilidili.com/watch3/38869/","episode_no":7,"episode_name":"间田敏和(表面)"},{"url":"http://www.dilidili.com/watch3/39766/","episode_no":8,"episode_name":"山岸由花子谈恋爱 其之一"},{"url":"http://www.dilidili.com/watch3/40561/","episode_no":9,"episode_name":"山岸由花子谈恋爱 其之2"},{"url":"http://www.dilidili.com/watch3/41316/","episode_no":10,"episode_name":"去吃意大利菜吧"},{"url":"http://www.dilidili.com/watch3/41907/","episode_no":11,"episode_name":"辛红辣椒其之1"},{"url":"http://www.dilidili.com/watch3/42261/","episode_no":12,"episode_name":"辛红辣椒其之2"},{"url":"http://www.dilidili.com/watch3/43503/","episode_no":13,"episode_name":"捡到了危险之物!"},{"url":"http://www.dilidili.com/watch3/44185/","episode_no":14,"episode_name":"去漫画家的家里玩吧 其之1"},{"url":"http://www.dilidili.com/watch3/44782/","episode_no":15,"episode_name":"去漫画家的家里玩吧 其之2"},{"url":"http://www.dilidili.com/watch3/45407/","episode_no":16,"episode_name":"去打猎吧!"},{"url":"http://www.dilidili.com/watch3/46034/","episode_no":17,"episode_name":"岸边露伴的冒险"},{"url":"http://www.dilidili.com/watch3/46614/","episode_no":18,"episode_name":"胖重的收获(收成者)其之一"},{"url":"http://www.dilidili.com/watch3/46986/","episode_no":19,"episode_name":"胖重的收获(收成者)其之二"},{"url":"http://www.dilidili.com/watch3/47764/","episode_no":20,"episode_name":"山岸由花子向往灰姑娘"},{"url":"http://www.dilidili.com/watch3/48355/","episode_no":21,"episode_name":"吉良吉影想要平静地生活"},{"url":"http://www.dilidili.com/watch3/48815/","episode_no":22,"episode_name":"吉良吉影想要平静地生活 其之2"},{"url":"http://www.dilidili.com/watch3/49248/","episode_no":23,"episode_name":"穿心攻击 其之1"},{"url":"http://www.dilidili.com/watch3/49611/","episode_no":24,"episode_name":"穿心攻击 其之2"},{"url":"http://www.dilidili.com/watch3/49990/","episode_no":25,"episode_name":"原子心之父"},{"url":"http://www.dilidili.com/watch3/50249/","episode_no":26,"episode_name":"猜拳小子来了！"},{"url":"http://www.dilidili.com/watch3/50626/","episode_no":27,"episode_name":"我是外星人"},{"url":"http://www.dilidili.com/watch3/50722/","episode_no":28,"episode_name":"公路之星 其之一"},{"url":"http://www.dilidili.com/watch3/51195/","episode_no":29,"episode_name":"公路之星 其之二"},{"url":"http://www.dilidili.com/watch3/51625/","episode_no":30,"episode_name":"猫喜欢吉良吉影"},{"url":"http://www.dilidili.com/watch3/52033/","episode_no":31,"episode_name":"7月15日(周四)其之一"},{"url":"http://www.dilidili.com/watch3/52325/","episode_no":32,"episode_name":"7月15日(周四)其之二"},{"url":"http://www.dilidili.com/watch3/52597/","episode_no":33,"episode_name":"7月15日(周四)13点39分"},{"url":"http://www.dilidili.com/watch3/52951/","episode_no":34,"episode_name":"7月15日(周四)其之四"},{"url":"http://www.dilidili.com/watch3/53081/","episode_no":35,"episode_name":"又干掉一个 其之一"},{"url":"http://www.dilidili.com/watch3/53531/","episode_no":36,"episode_name":"又干掉一个 其之二"},{"url":"http://www.dilidili.com/watch3/53680/","episode_no":37,"episode_name":"不灭钻石 其之一"},{"url":"http://www.dilidili.com/watch3/53852/","episode_no":38,"episode_name":"不灭钻石 其之二"},{"url":"http://www.dilidili.com/watch3/54064/","episode_no":39,"episode_name":"再见杜王町 黄金之心"}];
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
            crawler(2,1,'http://www.dilidili.com/animetest/jojo-daiya/')
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