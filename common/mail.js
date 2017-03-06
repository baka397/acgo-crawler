'use strict';
const mailgun = require('mailgun-js');
const config = require('../config/');
const tool = require('./tool');
const log = require('./log');
const mailClient = mailgun({apiKey: config.mailgun.apiKey, domain: config.mailgun.domain});
const sendInfo = {
    from: '宅圈小信使 <messenger@mail.acgo.club>'
};
function getAlertMailContent(type,taskId,url){
    return `
        <p>抓取任务报警:</p>
        <p>任务信息:</p>
        <ul>
            <li>Type:${type}</li>
            <li>TaskId:${taskId}</li>
            <li>Url:${url}</li>
            <li>Time:${tool.formatDate(new Date().getTime(),'YYYY-MM-DD hh:mm:ss')}</li>
        </ul>
    `;
}

function sendMail(subject,html){
    if(!config.mailAlertList||config.mailAlertList.length===0) return tool.nextPromise();
    let data=Object.assign({},sendInfo,{
        to:config.mailAlertList.toString(),
        subject:subject,
        html:html
    });
    return new Promise(function(resolve,reject){
        if(config.closeMail) return resolve();
        mailClient.messages().send(data, function (err, body) {
            if(err){
                log.info('发送信件失败');
                log.err(err);
                return reject(new Error('信件发送失败'));
            }
            log.info('发送信件成功');
            log.info(body);
            resolve();
        });
    });
}

exports.sendAlertMail = function(type,taskId,url){
    let subject='ACGO.club-抓取数据错误';
    let html=getAlertMailContent(type,taskId,url);
    return sendMail(subject,html);
};