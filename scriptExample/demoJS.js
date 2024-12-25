/*
测试任务
这是测试任务脚本的说明

cron: 4 3 2 1 *
const $ = new Env("Js任务名_测试");
*/
const ckName = 'getCk';
const cookie = process.env[ckName];
const notify = require('./sendNotify');

console.log('Ck: ', cookie)
notify.sendNotify('标题', '测试推送内容');
