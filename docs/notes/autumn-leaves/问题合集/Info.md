---
title: Info
createTime: 2025/02/07 13:07:19
permalink: /article/
icon: /info.svg
---
## 广告
### MC服务器

1.20 以上都能正常玩
java mc.gancmcs.top

PE mcpe.gancmcs.top:46265

离线账户要注册 正版(java 和 登录xbox的基岩版) 免注册
生存 空岛 ~~小游戏一应俱全(其实没几个)~~
## 项目名称：Autumn-leaves
---
Autumn-leaves 是一款专为 Linux 和 Android 环境设计的综合系统管理工具。它提供了一个基于终端的统一界面来管理各种服务，包括 Android 上的 PRoot 容器、Minecraft 服务器和 Linux 上的 QQ 机器人。
<ImageCard
  image="/icon.png"
  title="看板娘"
  description="是看板娘我们有救了(っ´Ι`)っ"
  href="/"
/>
系统用途和范围
该系统用作一体化管理实用程序：

跨平台自动安装和管理服务
通过 PRoot 在 Android 上提供容器化功能
促进 Linux 上的 Minecraft 服务器部署和管理
支持 QQ 机器人设置和作
具有自我更新机制，以保持最新状态
跨环境提供一致的菜单驱动界面

## 关键组件
### 主脚本 （gancm.sh）
脚本是 Autumn-leaves 的核心组件，负责：gancm.sh

提供颜色编码输出以获得更好的用户体验
检测作系统类型 （Android/Linux）
自动安装所需的依赖项
对目录和 Git 配置执行有效性检查
路由到相应的菜单系统
处理命令行参数以直接访问函数
此脚本包含实用程序函数，包括：

- self_install：使用相应的包管理器安装所需的包
- validity_git：设置默认 Git 源存储库
- validity_dir：创建必要的目录
- Modify_the_variable：更新配置变量
- apt_up：定期更新和升级 APT 软件包
#配置系统
##配置系统包括：

- config.sh：包含用户首选项和系统变量
- version：存储版本信息，包括：
1. 当前版本号
2. Git 存储库参考
3. 版本描述
4. 发布日期
5. 系统使用这些文件来跟踪状态并确定何时需要更新。
## 命令行界面
### 特定于 Android 的命令：
- gancm.sh -s Android install proot：安装 PRoot 工具
- gancm.sh -s Android start proot：启动 PRoot 容器
### 特定于 Linux 的命令：
- gancm.sh -s Linux download_JAVA：安装 Java
- gancm.sh -s Linux install_MC_SERVER： 安装 Minecraft 服务器
- gancm.sh -s Linux start_MC_SERVER： 启动 Minecraft 服务器
- gancm.sh -s Linux installMCSManager：安装 Minecraft 服务器 Web 面板
- gancm.sh -s Linux installNapCatQQ： 安装 NapCatQQ 机器人
## 使用方法
### 安装

[安装文档](./Installation.md)

@[bilibili](BV1ifzEYXEx7)
### 更新
- 打开脚本自动检测更新
- 手动更新群里“新版脚本 arm64 amd64“下载最新文件解压放到~/ 并重命名.gancm
### 感谢
| 感谢名单       | 贡献功能      | github/gitee/文档     |
| ------------- |:-------------:| -----:|
| MCSManager      | MCSManager Linux 支持 | [官方网站](http://mcsmanager.com/)  [使用文档](https://docs.mcsmanager.com/#/zh-cn/)  [QQ 群](https://jq.qq.com/?_wv=1027&k=Pgl9ScGw) [TG 群](https://t.me/MCSManager_dev) |
| 墨泽      | MCSManager Linux proot 支持 | [Gitee](https://gitee.com/moze_sz) |
| NapNeko     | NapCatQQ支持 | [Github](https://github.com/NapNeko/NapCatQQ) [使用文档cfpage](https://napneko.pages.dev/) [使用文档gpage](https://napneko.github.io/)[api文档](https://napcat.apifox.cn/)|

### 提交问题

[查看已知问题](./Issues.md)

### 提交问题
[在GitHub上反馈](https://github.com/MIt-gancm/Autumn-leaves/)
[QQ群一（比较死）](https://qm.qq.com/q/FpLOtSUcCs)
[QQ群二（比较活跃）](https://qm.qq.com/q/5cL7WW8SnS)
[QQ群三（比较活跃）](https://qm.qq.com/q/LvdTDYXdu2)
## 目录完整

::: file-tree
- ~ **HOME** 目录
  - .gancm **脚本** 目录
    - .git 无需理会
    - config 配置文件
    - function 部分功能
    - local 主要功能文件夹
    - gancm.sh 脚本入口
    - README.md 说明文档
    - log.log 日志调用了脚本什么功能都在这
  - .termux **自带的配置** 目录
    - gancm 
      - proot 
        - 你的容器
          - root
            - .gancm 回到开头
      - MCserver Linux mc服务器文件夹后续会更改位置
        - 服务器核心
          - 服务器版本
            - 服务器核心
            - start.sh 启动脚本 MC服务器无法启动发这个截图
- …
:::

