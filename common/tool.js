'use strict';

/**
 * 请求下个Promise
 * @param  {Object} err  错误信息
 * @param  {Object} data 传递数据
 * @return {Object}      Promise对象
 */
function nextPromise(err,data){  
    return new Promise(function(resolve,reject){
        if(err) reject(err);
        else resolve(data);
    });
}
exports.nextPromise=nextPromise;  
/**
 * 创建Promise分页执行列表
 * @param  {Array}  promiseFuncList Promise函数列表
 * @param  {Number} pageSize        单页个数
 * @return {Object}                 Promise对象
 */
exports.buildPromiseListByPage = function(promiseFuncList,pageSize){  
    if(promiseFuncList.length===0) return nextPromise();
    let resultData=[];
    let roundCount=0;
    let totalRound=Math.ceil(promiseFuncList.length/pageSize);
    let promiseFunc=nextPromise();
    for(let i=0;i<totalRound;i++){
        promiseFunc=promiseFunc.then(function(){
            let promiseList=promiseFuncList.slice(i*pageSize,(i+1)*pageSize).map(function(curFunc){
                return curFunc();
            });
            return Promise.all(promiseList)
            .then(function(result){
                roundCount++;
                resultData=resultData.concat(result);
            });
        });
    }
    return promiseFunc.then(function(){
        return nextPromise(null,[roundCount].concat(resultData));
    });
};

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
};