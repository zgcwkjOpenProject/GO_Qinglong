# Qinglong-Go

# run & build

## Vue

Env
```
export NODE_OPTIONS=--openssl-legacy-provider
```

Build
```
cd frontend

npm install

npm run build
```

## Golang

Env
```
export CGO_ENABLED=0
export GOOS=linux 
export GOARCH=mipsle

export CGO_ENABLED=0
export GOOS=windows
export GOARCH=amd64

export CGO_ENABLED=0
export GOOS=darwin
export GOARCH=amd64
```

Build
```
go run main.go

go build
```

# 功能实现情况

使用go实现的青龙后端，主要用于学习golang的使用

- [x] 基本的初始化和登录功能
- [x] 定时任务的增删改查以及运行
- [x] 环境变量的增删改查
- [x] 配置文件的编辑
- [x] 脚本文件的增删改查
- [x] 应用授权登录的实现
- [x] 订阅功能的实现
- [x] 日志功能的实现
- [x] 依赖功能的实现
- [x] 推送功能的实现
- [ ] 定时任务的视图筛选功能
- [ ] 热更新的实现

# 安装

+ 在[前端仓库](https://github.com/huoxue1/qinglong/releases)下载静态资源，解压到安装目录
+ 在当前仓库的release下载可执行文件
+ 运行可执行文件

# 脚本适配

+ 不存在**task**,**ql**等相关命令，只能请求api进行执行
+ 程序当前的运行目录可以通过环境变量 **QL_DIR**进行获取，程序的运行端口可以通过环境变量**QL_PORT**获取
+ 程序的**python**,**node**等执行文件的命令可以在config文件中修改，修改后需重启程序

## 特别感谢

+ [huoxue1/qinglong-go](https://github.com/huoxue1/qinglong-go)
+ [whyour/qinglong](https://github.com/whyour/qinglong)
