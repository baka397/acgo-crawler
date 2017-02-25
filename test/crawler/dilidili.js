'use strict';
module.exports=function(crawler){
    describe('dilidili', function(){
        it('Crawler mulit result', function (done) {
            this.timeout(20*1000);
            crawler(2,1,'http://www.dilidili.wang/anime/jojo-daiya/')
            .then(function(result){
                let animeList=[{"url":"http://www.dilidili.wang/watch3/29421/","episode_no":0,"episode_name":"宣传PV"},{"url":"http://www.dilidili.wang/watch3/30677/","episode_no":1,"episode_name":"空条承太郎！遇见东方仗助"},{"url":"http://www.dilidili.wang/watch3/30948/","episode_no":2,"episode_name":"东方仗助!遇见安杰罗"},{"url":"http://www.dilidili.wang/watch3/32835/","episode_no":3,"episode_name":"虹村兄弟 其之1"},{"url":"http://www.dilidili.wang/watch3/34691/","episode_no":4,"episode_name":"虹村兄弟 其之2"},{"url":"http://www.dilidili.wang/watch3/36297/","episode_no":5,"episode_name":"虹村兄弟 其之3"},{"url":"http://www.dilidili.wang/watch3/37574/","episode_no":6,"episode_name":"广濑康一（回声）"},{"url":"http://www.dilidili.wang/watch3/38869/","episode_no":7,"episode_name":"间田敏和(表面)"},{"url":"http://www.dilidili.wang/watch3/39766/","episode_no":8,"episode_name":"山岸由花子谈恋爱 其之一"},{"url":"http://www.dilidili.wang/watch3/40561/","episode_no":9,"episode_name":"山岸由花子谈恋爱 其之2"},{"url":"http://www.dilidili.wang/watch3/41316/","episode_no":10,"episode_name":"去吃意大利菜吧"},{"url":"http://www.dilidili.wang/watch3/41907/","episode_no":11,"episode_name":"辛红辣椒其之1"},{"url":"http://www.dilidili.wang/watch3/42261/","episode_no":12,"episode_name":"辛红辣椒其之2"},{"url":"http://www.dilidili.wang/watch3/43503/","episode_no":13,"episode_name":"捡到了危险之物!"},{"url":"http://www.dilidili.wang/watch3/44185/","episode_no":14,"episode_name":"去漫画家的家里玩吧 其之1"},{"url":"http://www.dilidili.wang/watch3/44782/","episode_no":15,"episode_name":"去漫画家的家里玩吧 其之2"},{"url":"http://www.dilidili.wang/watch3/45407/","episode_no":16,"episode_name":"去打猎吧!"},{"url":"http://www.dilidili.wang/watch3/46034/","episode_no":17,"episode_name":"岸边露伴的冒险"},{"url":"http://www.dilidili.wang/watch3/46614/","episode_no":18,"episode_name":"胖重的收获(收成者)其之一"},{"url":"http://www.dilidili.wang/watch3/46986/","episode_no":19,"episode_name":"胖重的收获(收成者)其之二"},{"url":"http://www.dilidili.wang/watch3/47764/","episode_no":20,"episode_name":"山岸由花子向往灰姑娘"},{"url":"http://www.dilidili.wang/watch3/48355/","episode_no":21,"episode_name":"吉良吉影想要平静地生活"},{"url":"http://www.dilidili.wang/watch3/48815/","episode_no":22,"episode_name":"吉良吉影想要平静地生活 其之2"},{"url":"http://www.dilidili.wang/watch3/49248/","episode_no":23,"episode_name":"穿心攻击 其之1"},{"url":"http://www.dilidili.wang/watch3/49611/","episode_no":24,"episode_name":"穿心攻击 其之2"},{"url":"http://www.dilidili.wang/watch3/49990/","episode_no":25,"episode_name":"原子心之父"},{"url":"http://www.dilidili.wang/watch3/50249/","episode_no":26,"episode_name":"猜拳小子来了！"},{"url":"http://www.dilidili.wang/watch3/50626/","episode_no":27,"episode_name":"我是外星人"},{"url":"http://www.dilidili.wang/watch3/50722/","episode_no":28,"episode_name":"公路之星 其之一"},{"url":"http://www.dilidili.wang/watch3/51195/","episode_no":29,"episode_name":"公路之星 其之二"},{"url":"http://www.dilidili.wang/watch3/51625/","episode_no":30,"episode_name":"猫喜欢吉良吉影"},{"url":"http://www.dilidili.wang/watch3/52033/","episode_no":31,"episode_name":"7月15日(周四)其之一"},{"url":"http://www.dilidili.wang/watch3/52325/","episode_no":32,"episode_name":"7月15日(周四)其之二"},{"url":"http://www.dilidili.wang/watch3/52597/","episode_no":33,"episode_name":"7月15日(周四)13点39分"},{"url":"http://www.dilidili.wang/watch3/52951/","episode_no":34,"episode_name":"7月15日(周四)其之四"},{"url":"http://www.dilidili.wang/watch3/53081/","episode_no":35,"episode_name":"又干掉一个 其之一"},{"url":"http://www.dilidili.wang/watch3/53531/","episode_no":36,"episode_name":"又干掉一个 其之二"},{"url":"http://www.dilidili.wang/watch3/53680/","episode_no":37,"episode_name":"不灭钻石 其之一"},{"url":"http://www.dilidili.wang/watch3/53852/","episode_no":38,"episode_name":"不灭钻石 其之二"},{"url":"http://www.dilidili.wang/watch3/54064/","episode_no":39,"episode_name":"再见杜王町 黄金之心"}];
                animeList.forEach(function(item,index){
                    if(item.episodeNo!==result[index].episode_no) throw new Error('验证不符合预期');
                    if(item.url!==result[index].url) throw new Error('验证不符合预期');
                    if(item.episodeName!==result[index].episode_name) throw new Error('验证不符合预期');
                })
                done();
            }).catch(function(err){
                done(err);
            })
        })
        it('Crawler mulit result with new page style', function (done) {
            this.timeout(20*1000);
            crawler(2,1,'http://www.dilidili.wang/anime/gintama/')
            .then(function(result){
                let animeList=[{
                    "url": "http://www.dilidili.wang/watch/3301/",
                    "episodeNo": 1,
                    "episodeName": "你们这群混蛋！！就这样还能叫“银魂”吗！ 前篇"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3302/",
                    "episodeNo": 2,
                    "episodeName": "你们这群混蛋！！就这样还能叫“银魂”吗！ 后篇"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3303/",
                    "episodeNo": 3,
                    "episodeName": "天然卷的家伙都不是坏人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3304/",
                    "episodeNo": 4,
                    "episodeName": "JUMP有时候周六发售要注意啊"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3305/",
                    "episodeNo": 5,
                    "episodeName": "交朋友就要交那种即使变成老头了也能互叫绰号的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3306/",
                    "episodeNo": 6,
                    "episodeName": "一旦约定至死也要遵守"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3307/",
                    "episodeNo": 7,
                    "episodeName": "宠物的主人要负起责任照顾到最后"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3308/",
                    "episodeNo": 8,
                    "episodeName": "坚韧不屈与死缠烂打只是一纸之隔"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3309/",
                    "episodeNo": 9,
                    "episodeName": "打架的时候就应该漂亮的出拳"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3310/",
                    "episodeNo": 10,
                    "episodeName": "累的时候喝点酸的东西吧"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3311/",
                    "episodeNo": 11,
                    "episodeName": "糟糟的丸子根本就不是丸子你这个笨蛋"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3312/",
                    "episodeNo": 12,
                    "episodeName": "第一印象好的家伙不一定就是好人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3313/",
                    "episodeNo": 13,
                    "episodeName": "COSPLAY的话就连心一起"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3314/",
                    "episodeNo": 14,
                    "episodeName": "敢摸青蛙也是成为真正男人的变态条件"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3315/",
                    "episodeNo": 15,
                    "episodeName": "物似主人形"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3316/",
                    "episodeNo": 16,
                    "episodeName": "仔细想想人生是变成大叔之后才觉得漫长！可怕啊！"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3317/",
                    "episodeNo": 17,
                    "episodeName": "所谓父子就是连讨厌的东西也一样"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3318/",
                    "episodeNo": 18,
                    "episodeName": "唉~还是我家最好啊"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3319/",
                    "episodeNo": 19,
                    "episodeName": "为什么海水这么咸？还不是因为你们这些城市人边游泳边小便！"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3320/",
                    "episodeNo": 20,
                    "episodeName": "要小心传送带"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3321/",
                    "episodeNo": 21,
                    "episodeName": "是男人就要钓旗鱼！ / 开着风扇睡觉会肚子疼的要小心啊！"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3322/",
                    "episodeNo": 22,
                    "episodeName": "所谓结婚就是把错误持续一生"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3323/",
                    "episodeNo": 23,
                    "episodeName": "困难的时候笑一个就好啦笑一个"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3324/",
                    "episodeNo": 24,
                    "episodeName": "可爱的外表下必定隐藏着什么"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3325/",
                    "episodeNo": 25,
                    "episodeName": "火锅就是人生的缩影"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3326/",
                    "episodeNo": 26,
                    "episodeName": "不必害羞，举手报告就是了"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3327/",
                    "episodeNo": 27,
                    "episodeName": "世上也有刀斩不断的东西"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3328/",
                    "episodeNo": 28,
                    "episodeName": "好事不会连续发生可为什么坏事总会接连不断啊"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3329/",
                    "episodeNo": 29,
                    "episodeName": "不要慌！别忘了还有冷静期一说"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3330/",
                    "episodeNo": 30,
                    "episodeName": "所谓的偶像其实跟你也没什么不同"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3331/",
                    "episodeNo": 31,
                    "episodeName": "那些无所谓的小事反而难以忘记"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3332/",
                    "episodeNo": 32,
                    "episodeName": "人生就像传送带一样不停旋转流逝"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3333/",
                    "episodeNo": 33,
                    "episodeName": "弄错别人的姓名是很失礼的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3334/",
                    "episodeNo": 34,
                    "episodeName": "恋爱是不需要指南的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3335/",
                    "episodeNo": 35,
                    "episodeName": "不能以貌取人啊"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3336/",
                    "episodeNo": 36,
                    "episodeName": "心怀鬼胎的人往往能说会道"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3337/",
                    "episodeNo": 37,
                    "episodeName": "一直刻意强调没有圣诞老人的家伙其实打心眼里希望他存在"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3338/",
                    "episodeNo": 38,
                    "episodeName": "只有小孩才会因为下雪而兴奋"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3339/",
                    "episodeNo": 39,
                    "episodeName": "菜单上种类很多的拉面店一般都没有人气"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3340/",
                    "episodeNo": 40,
                    "episodeName": "生小孩要有计划"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3341/",
                    "episodeNo": 41,
                    "episodeName": "光看标题是无法理解电影内容的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3342/",
                    "episodeNo": 42,
                    "episodeName": "朝蚯蚓小便的话你重要的地方就会肿起来"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3343/",
                    "episodeNo": 43,
                    "episodeName": "描绘角色就要做到让读者光凭剪影就能认出来的地步"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3344/",
                    "episodeNo": 44,
                    "episodeName": "老妈我也是很忙的不要对晚饭说三道四"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3345/",
                    "episodeNo": 45,
                    "episodeName": "带爱犬散步要保持适当的速度"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3346/",
                    "episodeNo": 46,
                    "episodeName": "想要玩XX游戏就等20岁以后吧！"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3347/",
                    "episodeNo": 47,
                    "episodeName": "樱花啊 会长成樱花树么？"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3348/",
                    "episodeNo": 48,
                    "episodeName": "两个人相像就会吵架"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3349/",
                    "episodeNo": 49,
                    "episodeName": "没有赌博的人生就像没有放芥末的寿司一样"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3350/",
                    "episodeNo": 50,
                    "episodeName": "撑起收视率"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3351/",
                    "episodeNo": 51,
                    "episodeName": "喂奶要用人体的温度"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3352/",
                    "episodeNo": 52,
                    "episodeName": "和人见面要先预约"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3353/",
                    "episodeNo": 53,
                    "episodeName": "压力是导致秃顶的原因，所以请注意不要压力太大，但这样一来…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3354/",
                    "episodeNo": 54,
                    "episodeName": "天下的娘亲一样亲"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3355/",
                    "episodeNo": 55,
                    "episodeName": "吃东西的时候不要发出咯咯吱吱的声音"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3356/",
                    "episodeNo": 56,
                    "episodeName": "小心一日局长，罗登玛伊亚夫人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3357/",
                    "episodeNo": 57,
                    "episodeName": "寻找丢失的物品时要沿着那天的行动追溯回去"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3358/",
                    "episodeNo": 58,
                    "episodeName": "小卖部里最受欢迎的食物果然还是炸肉饼面包"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3359/",
                    "episodeNo": 59,
                    "episodeName": "注意别忘了把伞带走"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3360/",
                    "episodeNo": 60,
                    "episodeName": "太阳会再升起"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3361/",
                    "episodeNo": 61,
                    "episodeName": "暗夜之虫，会集光中"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3362/",
                    "episodeNo": 62,
                    "episodeName": "适得其反"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3363/",
                    "episodeNo": 63,
                    "episodeName": "JUMP的次回预告是不能相信"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3364/",
                    "episodeNo": 64,
                    "episodeName": "没想到美味棒吃下去还挺饱的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3365/",
                    "episodeNo": 65,
                    "episodeName": "少年将通过独角仙得知生命的尊严"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3366/",
                    "episodeNo": 66,
                    "episodeName": "实质重于外表"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3367/",
                    "episodeNo": 67,
                    "episodeName": "不断奔跑才是人生"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3368/",
                    "episodeNo": 68,
                    "episodeName": "行走世间全都是妖怪"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3369/",
                    "episodeNo": 69,
                    "episodeName": "请协助做好垃圾的分类回收"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3370/",
                    "episodeNo": 70,
                    "episodeName": "可爱的东西太多了也会反胃"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3371/",
                    "episodeNo": 71,
                    "episodeName": "有些数据是删除不掉的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3372/",
                    "episodeNo": 72,
                    "episodeName": "狗的肉球有令人愉悦的香味"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3373/",
                    "episodeNo": 73,
                    "episodeName": "松茸真的那么美味么，再想想吧"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3374/",
                    "episodeNo": 74,
                    "episodeName": "漫画家就要学会存原稿才能独当一面"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3375/",
                    "episodeNo": 75,
                    "episodeName": "工作上的牢骚不要在家里发 要发就到外面去发！话虽如此 还是…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3376/",
                    "episodeNo": 76,
                    "episodeName": "这个时候就默默的煮红豆饭吧"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3377/",
                    "episodeNo": 77,
                    "episodeName": "今天的敌人到了明天还是敌人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3378/",
                    "episodeNo": 78,
                    "episodeName": "对食物的喜好强烈的人对人的喜好也就很直接"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3379/",
                    "episodeNo": 79,
                    "episodeName": "六个臭皮匠 顶两个诸葛亮"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3380/",
                    "episodeNo": 80,
                    "episodeName": "平时带着眼镜的人一旦摘下眼镜就感觉好象少了点什么…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3381/",
                    "episodeNo": 81,
                    "episodeName": "女人的笑容就是最好的化妆"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3382/",
                    "episodeNo": 82,
                    "episodeName": "不是为了拉面而排队 而是为了满足自我而排队"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3383/",
                    "episodeNo": 83,
                    "episodeName": "运气跟身份没关系"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3384/",
                    "episodeNo": 84,
                    "episodeName": "男人的内心有颗坚硬的水煮蛋"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3385/",
                    "episodeNo": 85,
                    "episodeName": "硬鸡蛋打不碎"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3386/",
                    "episodeNo": 86,
                    "episodeName": "数羊数得起劲结果没睡成也是常有的事"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3387/",
                    "episodeNo": 87,
                    "episodeName": "说出我和工作哪个更重要的女人通通一个过肩摔摔出去"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3388/",
                    "episodeNo": 88,
                    "episodeName": "联谊在开始前是最有趣的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3389/",
                    "episodeNo": 89,
                    "episodeName": "事情有过两次就还有三次"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3390/",
                    "episodeNo": 90,
                    "episodeName": "越美味的东西吃坏肚子时越恐怖"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3391/",
                    "episodeNo": 91,
                    "episodeName": "想减肥就给我动起来 不许吃东西"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3392/",
                    "episodeNo": 92,
                    "episodeName": "与其看着别人的短处 不如做个善于发现他人长处的人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3393/",
                    "episodeNo": 93,
                    "episodeName": "英雄也有烦恼时"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3394/",
                    "episodeNo": 94,
                    "episodeName": "搭电车时务必用双手抓住吊环"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3395/",
                    "episodeNo": 95,
                    "episodeName": "男儿便做MADAO"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3396/",
                    "episodeNo": 96,
                    "episodeName": "阿特拉斯的传说"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3397/",
                    "episodeNo": 97,
                    "episodeName": "以前的英雄事迹要夸张三分大家热闹一下就行了"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3398/",
                    "episodeNo": 98,
                    "episodeName": "游戏一天只能一小时"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3399/",
                    "episodeNo": 99,
                    "episodeName": "人生和游戏都充满BUG"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3400/",
                    "episodeNo": 100,
                    "episodeName": "越不招人喜欢越可爱"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3401/",
                    "episodeNo": 101,
                    "episodeName": "规定就是为了被打破而存在的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3402/",
                    "episodeNo": 102,
                    "episodeName": "OTAKU就是话多"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3403/",
                    "episodeNo": 103,
                    "episodeName": "长处和短处只有一纸之隔"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3404/",
                    "episodeNo": 104,
                    "episodeName": "重要的东西总是难以发现"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3405/",
                    "episodeNo": 105,
                    "episodeName": "任何事都要看拍子和时机"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3406/",
                    "episodeNo": 106,
                    "episodeName": "恋爱大体上都是突然死亡的方式"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3407/",
                    "episodeNo": 107,
                    "episodeName": "可怜天下父母心"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3408/",
                    "episodeNo": 108,
                    "episodeName": "有些事还是不说为妙"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3409/",
                    "episodeNo": 109,
                    "episodeName": "人生就是考试"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3410/",
                    "episodeNo": 110,
                    "episodeName": "每个人都是冲破名为「自我」的牢笼的越狱犯"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3411/",
                    "episodeNo": 111,
                    "episodeName": "伪娘物千万别让女朋友发现了"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3412/",
                    "episodeNo": 112,
                    "episodeName": "20岁的生日并没有什么深意"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3413/",
                    "episodeNo": 113,
                    "episodeName": "清洗厕所就是在洗涤心灵"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3414/",
                    "episodeNo": 114,
                    "episodeName": "虽说在布丁上浇上酱油就会有海胆味，但其实在布丁上浇上酱油…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3415/",
                    "episodeNo": 115,
                    "episodeName": "暑假开始前那段时间才是最愉快的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3416/",
                    "episodeNo": 116,
                    "episodeName": "姜还是老的辣"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3417/",
                    "episodeNo": 117,
                    "episodeName": "美丽犹如夏天的果实"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3418/",
                    "episodeNo": 118,
                    "episodeName": "即时折了腰，也要笔直前行"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3419/",
                    "episodeNo": 119,
                    "episodeName": "一包烟里总会掺进一两支马粪味道的东西"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3420/",
                    "episodeNo": 120,
                    "episodeName": "海外的日本料理店的味道大概就是学生食堂的等级"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3421/",
                    "episodeNo": 121,
                    "episodeName": "新手只要一字和十字的螺丝刀就足够了"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3422/",
                    "episodeNo": 122,
                    "episodeName": "想象力应从初二培养"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3423/",
                    "episodeNo": 123,
                    "episodeName": "一直存在于心中的一把螺丝刀"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3424/",
                    "episodeNo": 124,
                    "episodeName": "过分要求就是威胁"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3425/",
                    "episodeNo": 125,
                    "episodeName": "最终章 突入"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3426/",
                    "episodeNo": 126,
                    "episodeName": "也有文字传达不了的事情"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3427/",
                    "episodeNo": 127,
                    "episodeName": "也有不见面就无法了解的东西"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3428/",
                    "episodeNo": 128,
                    "episodeName": "见了面也会有不明白的事"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3429/",
                    "episodeNo": 129,
                    "episodeName": "注意不要随便捡东西吃"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3430/",
                    "episodeNo": 130,
                    "episodeName": "猫派和狗派水火不容"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3431/",
                    "episodeNo": 131,
                    "episodeName": "旅行往往得干架"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3432/",
                    "episodeNo": 132,
                    "episodeName": "紧身内裤无可避免地会沾上大便"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3433/",
                    "episodeNo": 133,
                    "episodeName": "银时与饭桶阁下"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3434/",
                    "episodeNo": 134,
                    "episodeName": "使用幽灵作为题材时要慎重"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3435/",
                    "episodeNo": 135,
                    "episodeName": "在考虑地球之前要考虑更加凶险的银蛋的未来"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3436/",
                    "episodeNo": 136,
                    "episodeName": "自己的屋子自己造"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3437/",
                    "episodeNo": 137,
                    "episodeName": "99%的男生对告白不自信"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3438/",
                    "episodeNo": 138,
                    "episodeName": "偶尔说说过去的故事吧"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3439/",
                    "episodeNo": 139,
                    "episodeName": "不要把钱包放在屁股口袋"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3440/",
                    "episodeNo": 140,
                    "episodeName": "要小心晴天打伞的人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3441/",
                    "episodeNo": 141,
                    "episodeName": "干涉打架是很危险的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3442/",
                    "episodeNo": 142,
                    "episodeName": "人生就是接连不断的选择题"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3443/",
                    "episodeNo": 143,
                    "episodeName": "四条腿走路的是禽兽 两条腿走路的是男人 志气高远"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3444/",
                    "episodeNo": 144,
                    "episodeName": "不能相信枕边话"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3445/",
                    "episodeNo": 145,
                    "episodeName": "羁绊的颜色是十人十色的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3446/",
                    "episodeNo": 146,
                    "episodeName": "白日喝酒别有一番风味"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3447/",
                    "episodeNo": 147,
                    "episodeName": "所有的大人都是小孩子的老师"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3448/",
                    "episodeNo": 148,
                    "episodeName": "拉链要慢慢往上拉"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3449/",
                    "episodeNo": 149,
                    "episodeName": "把棒棒冰一分为二的时候，从切口开始分感觉…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3450/",
                    "episodeNo": 150,
                    "episodeName": "只要结局好一切都完美"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3451/",
                    "episodeNo": 151,
                    "episodeName": "理发师一边剪头发一边和你聊的话题是全世界最无关紧…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3452/",
                    "episodeNo": 152,
                    "episodeName": "天不在人之上造人，而造了发髻"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3453/",
                    "episodeNo": 153,
                    "episodeName": "能睡的孩子长的壮"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3454/",
                    "episodeNo": 154,
                    "episodeName": "生日会上平时的家伙会像换了个人似的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3455/",
                    "episodeNo": 155,
                    "episodeName": "反面的反面的反面还是反面"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3456/",
                    "episodeNo": 156,
                    "episodeName": "走入路边摊需要微妙的勇气"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3457/",
                    "episodeNo": 157,
                    "episodeName": "男人聚集的地方一定会成为战场"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3458/",
                    "episodeNo": 158,
                    "episodeName": "朋友受伤的话，要马上送医院"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3459/",
                    "episodeNo": 159,
                    "episodeName": "只要有一个橘子烂掉 整箱橘子都会在不知不觉中烂掉"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3460/",
                    "episodeNo": 160,
                    "episodeName": "在外国人看来我们是外国人 在宇宙人看来我们也是宇…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3461/",
                    "episodeNo": 161,
                    "episodeName": "无论看多少次都觉得《天空之城》真棒"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3462/",
                    "episodeNo": 162,
                    "episodeName": "爱是无偿的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3463/",
                    "episodeNo": 163,
                    "episodeName": "黑船就算沉的时候也很华丽"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3464/",
                    "episodeNo": 164,
                    "episodeName": "松菇汤比松菇更好味呢"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3465/",
                    "episodeNo": 165,
                    "episodeName": "柳树下面有很多泥鳅"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3466/",
                    "episodeNo": 166,
                    "episodeName": "一个不如两个，一人不如两人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3467/",
                    "episodeNo": 167,
                    "episodeName": "圆滑的多边形能让人的内心圆润"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3468/",
                    "episodeNo": 168,
                    "episodeName": "人的身体就是一个小宇宙"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3469/",
                    "episodeNo": 169,
                    "episodeName": "被引导的笨蛋们"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3470/",
                    "episodeNo": 170,
                    "episodeName": "勇者斗小玉4 传说的终结"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3471/",
                    "episodeNo": 171,
                    "episodeName": "一味地模仿是会被人家起诉的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3472/",
                    "episodeNo": 172,
                    "episodeName": "糖和鞭子要并用"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3473/",
                    "episodeNo": 173,
                    "episodeName": "重要的是内在而不是外表"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3474/",
                    "episodeNo": 174,
                    "episodeName": "现在还有哪种会朝大海喊“混蛋”的人吗"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3475/",
                    "episodeNo": 175,
                    "episodeName": "看牙医这种事情不管长大到多少岁都讨厌"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3476/",
                    "episodeNo": 176,
                    "episodeName": "倒计时开始"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3477/",
                    "episodeNo": 177,
                    "episodeName": "晚上的蜘蛛真不吉利"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3478/",
                    "episodeNo": 178,
                    "episodeName": "一旦被蜘蛛丝缠上的话就难以解脱"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3479/",
                    "episodeNo": 179,
                    "episodeName": "越是吊儿郎当的家伙生起气来越恐怖"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3480/",
                    "episodeNo": 180,
                    "episodeName": "越是重要的行李越沉重越难背负"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3481/",
                    "episodeNo": 181,
                    "episodeName": "酒与女人要一并注意"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3482/",
                    "episodeNo": 182,
                    "episodeName": "人气投票什么的吃粑粑去吧"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3483/",
                    "episodeNo": 183,
                    "episodeName": "人气投票什么的烧成灰吧"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3484/",
                    "episodeNo": 184,
                    "episodeName": "人气投票什么的…"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3485/",
                    "episodeNo": 185,
                    "episodeName": "故乡和乳汁 相隔越远越令人怀念"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3486/",
                    "episodeNo": 186,
                    "episodeName": "要小心死亡预告"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3487/",
                    "episodeNo": 187,
                    "episodeName": "踩到死亡伏笔就该说再见"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3488/",
                    "episodeNo": 188,
                    "episodeName": "观察日记要有始有终"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3489/",
                    "episodeNo": 189,
                    "episodeName": "虽说今年能做的事要在今年之内做完才干净利落但因为反正明年才能完成所以会一拖再拖的就是年终的约定"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3490/",
                    "episodeNo": 190,
                    "episodeName": "找东西的时候就要以它的视线去找"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3491/",
                    "episodeNo": 191,
                    "episodeName": "自由不是无法无天而是按照自己的规则活下去"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3492/",
                    "episodeNo": 192,
                    "episodeName": "歌舞伎町野猫的蓝调"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3493/",
                    "episodeNo": 193,
                    "episodeName": "料理就是毅力"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3494/",
                    "episodeNo": 194,
                    "episodeName": "说到海怪脑中却只会不断浮现出海螺小姐的我真是笨蛋"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3495/",
                    "episodeNo": 195,
                    "episodeName": "不要输给雨"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3496/",
                    "episodeNo": 196,
                    "episodeName": "不输给风"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3497/",
                    "episodeNo": 197,
                    "episodeName": "不输给暴风雨"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3498/",
                    "episodeNo": 198,
                    "episodeName": "不管什么时候都要笑容不断"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3499/",
                    "episodeNo": 199,
                    "episodeName": "我想成为那般坚强美丽的人"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3500/",
                    "episodeNo": 200,
                    "episodeName": "圣诞老人的红色是血染的"
                },
                {
                    "url": "http://www.dilidili.wang/watch/3501/",
                    "episodeNo": 201,
                    "episodeName": "人人都是圣诞老人"
                }];
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
            crawler(2,1,'http://www.dilidili.wang/animetest/jojo-daiya/')
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