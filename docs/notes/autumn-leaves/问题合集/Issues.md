---
title: Issues
createTime: 2025/02/07 13:20:07
permalink: /article/z6vwebxw/
icon: /issues.svg
---
# 报错脚本出问题了？

# 重装 !!!!

### Termux 环境
```shell
# 使用 GitHub 仓库
rm -rf ~/.gancm
pkg update -y && pkg upgrade -y && pkg install git -y && git clone https://github.com/MIt-gancm/Autumn-leaves ~/.gancm
# 使用 Gitee 仓库
pkg update -y && pkg upgrade -y && pkg install git -y && git clone https://gitee.com/MIt-gancm/Autumn-leaves ~/.gancm
```
### Linux 环境
```shell
# 使用 GitHub 仓库
rm -rf ~/.gancm
apt update -y && apt upgrade -y  && apt install git -y && git clone https://github.com/MIt-gancm/Autumn-leaves ~/.gancm
# 使用 Gitee 仓库
apt update -y && apt upgrade -y && apt install git -y && git clone https://gitee.com/MIt-gancm/Autumn-leaves ~/.gancm
```
注意事项
如果遇到问题，请先查看：
如何提供问题寻求帮助？
提问的智慧！
如果仍有问题，可以截图后询问群友，或者通过临时会话私信联系**Mit**不是**JN**。


## 发现错误 - 在错误界面精准截图
发现错误不要慌：
- 脚本执行带**警告**的部分截图
- 脚本执行带**错误**的部分截图
- 脚本执行带**报错日志**的部分截图
单开一个终端，执行：
```shell
uname -a
```
# 设备基本信息   排除框架问题
发现错误 - 精准描述拒绝无用信息
在截图之后尽可能详细准确地描述你干了什么：
执行脚本的命令是什么
在脚本里选择了什么
您尽可能描述问题，我们就可以更方便地找到错误并更正。
常见错误 - 找不到xxx
像截图找不到wget：
./images/not_fomund_xxx.png
运行以下命令：
Shell复制
```shell
pkg install wget -y
# termux
apt install wget -y
# Linux
# 还不行!?
apt remove wget -y & apt install wget -y
pkg remove wget -y & apt install wget -y
```
# wget 替换找不到的包的名字
常见错误 - 手机管家

> [!WARNING]
> 部分手机可能拦截proot安装或其他操作，冻结手机管家可以缓解问题：自行查找安装软件冻结冻结有风险，**关机一定记得解冻**

手机管家拦截：
<ImageCard
  image="/safedog.png"
  title="手机管家的提示"
  description="部分手机的提示大同小异"
  href="/"
/>




