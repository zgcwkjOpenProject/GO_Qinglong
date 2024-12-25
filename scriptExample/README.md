# 青龙任务脚本开发示例库

> 拉取代码

```
ql repo https://github.com/zgcwkjOpenProject/QLScriptExample.git "" "sendNotify" "sendNotify" "main"
```

> 说明

- 黑名单是用来排除生成任务的
- 依赖是表明需要的执行代码

> 命令

```
# 更新并重启青龙
ql update

# 运行自定义脚本extra.sh
ql extra

# 添加单个脚本文件
ql raw <file_url>

# 添加单个仓库的指定脚本
ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch> <extensions>

# 删除旧日志
ql rmlog <days>

# 启动tg-bot
ql bot

# 检测青龙环境并修复
ql check

# 重置登录错误次数
ql resetlet

# 禁用两步登录
ql resettfa
```
