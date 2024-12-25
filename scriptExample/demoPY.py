"""
测试任务
这是测试任务脚本的说明

cron: 5 3 2 1 *
const $ = new Env("Py任务名_测试");
"""
import os
import sys
from sendNotify import send

ckName = 'getCk'
cookie = os.getenv(ckName)

if __name__ == "__main__":
	print('Ck: ', cookie)
	send('标题', '测试推送内容')
