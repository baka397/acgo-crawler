'use strict';

/**
 * 请求下个Promise
 * @param  {Object} err  错误信息
 * @param  {Object} data 传递数据
 * @return {Object}      Promise对象
 */
exports.nextPromise = function(err,data){
    return new Promise(function(resolve,reject){
        if(err) reject(err);
        else resolve(data);
    })
}

/**
 * 格式化日期
 * @param  {string} dateString  日期字符串
 * @param  {string} format      日期格式
 * @return {string}             格式化后的日期
 */
exports.formatDate=function(dateString,format){
    if(!dateString) return '';
    var date=new Date(dateString);
    var year=date.getFullYear();
    var month=(date.getMonth()+1).toString();
    var day=date.getDate().toString();
    var hour=date.getHours().toString();
    var min=date.getMinutes().toString();
    var sec=date.getSeconds().toString();
    if(month.length<2) month='0'+month;
    if(day.length<2) day='0'+day;
    if(min.length<2) min='0'+min;
    if(sec.length<2) sec='0'+sec;
    var return_date=format.replace('YYYY',year);
    return_date=return_date.replace('MM',month);
    return_date=return_date.replace('DD',day);
    return_date=return_date.replace('hh',hour);
    return_date=return_date.replace('mm',min);
    return_date=return_date.replace('ss',sec);
    return return_date;
}