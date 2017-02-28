ACGO crawler Project
============
提供ACGO爬虫服务

采用技术
----------
服务端：nodejs+cheerio+log4js+superagent+cron(定时器)

开发规范
--------
重要文件入口
<br />
-模块控制：modules/
<br />
-枚举：enums/
<br />
-测试用例：test/
<br />
-系统配置：config/config-*.js
<br />
日志采用log4js、全局对象LOG、支持trace、debug、info、warn、error、fatal
<br />

运行
--------
##定义抓取周期
如果未定义,则使用当前服务器时间.
```
//window
set NODE_TASK_PERIOD=6 //设置周期
node day //启动任务
//linux
nodeshell 6 //使用shell配置周期
```