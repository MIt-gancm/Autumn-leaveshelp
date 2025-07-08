---
title: Linux环境
createTime: 2025/02/07 14:31:14
permalink: /article/cvo9n6v6/
---
## Minecraft 服务器管理
### 相关源文件
目的和范围
本文档提供了有关 Autumn-leaves 系统中 Minecraft 服务器管理功能的技术详细信息。它涵盖了通过 Autumn-leaves 命令行界面安装 Minecraft 服务器、配置、作和删除 Minecraft 服务器。该文档还详细介绍了用于基于 Web 的服务器管理的 MCSManager 集成。

### 系统概述
Minecraft 服务器管理系统是 Autumn-leaves 中 Linux 子系统的一个组件。它提供了一套全面的工具来管理各种类型的 Minecraft 服务器，并支持不同的服务器核心和游戏版本。

### 服务器类型
该系统支持四种主要类型的 Minecraft 服务器：

| 服务器类型 |   描述   | 
| :----: | :----: |
|Pure (Plugin)	|支持插件但不支持 Mod 的服务器	|
|Mod|	支持 Mod 的服务器	|
|Bedrock	|基岩版的服务器	|
|Vanilla	|	未经修改的官方 Minecraft 服务器	|


### 服务器安装详细信息
#### 安装过程使用 FastMirror.net API 检索可用的服务器内核和版本。主要步骤包括：

1. 用户选择服务器类型（pure、mod、bedrock、vanilla）
2. 系统获取该类型的可用内核
3. 用户选择特定内核（例如 Paper、Forge）
4. 系统获取该核心的可用 Minecraft 版本
5. 用户选择特定版本
6. 系统下载服务器 JAR 文件
7. 用户配置内存设置
8. 系统生成启动脚本
9. 服务器文件存储在 中。$HOME/.termux/gancm/MCserver/[CoreType]/[GameVersion]/

### 服务器管理作
#### 启动 Server
该函数管理服务器启动过程：start_MC_SERVER()

检查是否已安装 Java，如果未安装，则提示安装
显示已安装的服务器内核的列表
选择核心后，显示该核心的可用版本
验证启动脚本是否存在，如果不存在，则运行配置过程
执行启动脚本以启动服务器


### 删除服务器
该函数处理服务器删除：rm_MC_SERVER()

显示已安装的服务器内核的列表
选择核心后，显示该核心的可用版本
要求用户解决一个简单的数学问题作为确认
删除服务器目录和所有文件


### Java 管理
Java 安装过程
download_JAVA()


系统可以使用系统存储库中的 OpenJDK 软件包安装多个版本的 Java。功能：download_JAVA()

列出可用的 OpenJDK 软件包
允许用户选择一个或多个版本
使用 apt 安装所选版本
服务器启动会自动检查 Java 安装，如果缺少 Java，则提示安装。

### MCSManager 集成
MCSManager 组件概述


MCSManager 是一个基于 Web 的面板，用于管理 Minecraft 服务器。该系统提供三个主要功能：

- installMCSManager()：使用适合环境的方法安装 MCSManager
- startMCSManager()：启动 MCSManager 服务
- stopMCSManager()：停止 MCSManager 服务
- 系统会检测它是在 proot 容器还是标准 Linux 环境中运行，并使用适当的方法进行安装和服务管理。


#### 环境特定处理
系统根据环境以不同的方式处理 MCSManager：


|环境	|安装方法	|服务管理|
| :----: | :----: | :----: |
|proot 容器	|MCSMFP 设置脚本	|自定义启动/停止脚本|
|标准 Linux|	官方安装脚本	|systemd 服务|


### 服务器配置

#### 检查 Java 安装
对于 Forge 服务器，执行其他安装步骤
提示用户进行内存设置（最小值和最大值）
生成具有适当配置的 start.sh 脚本
自动接受 Minecraft EULA
对 Forge 服务器实施了特殊处理，这些服务器需要额外的安装步骤才能运行。


#### 命令行界面
Minecraft Server Management 功能可以通过菜单驱动和直接命令行界面访问：

#### 菜单驱动的界面
导航至：Linux_menu → MC_Server


|命令	|别名	|描述|
| :----: | :----: | :----: |
|install_MC_SERVER	|imcs	|安装 Minecraft 服务器|
|start_MC_SERVER	|smcs	|启动 Minecraft 服务器|
|rm_MC_SERVER|	rmcs|	删除 Minecraft 服务器|
|installMCSManager	|imcsm	|安装 MCSManager|
|startMCSManager	|startcsm	|启动 MCSManager|
|stopMCSManager	|stopcsm|	停止 MCSManager|
|download_JAVA	|dj	|安装 Java|


## QQ 机器人管理
### 系统概述
QQ 机器人管理系统允许用户通过菜单驱动的界面安装、启动和管理 NapCatQQ 实例。该系统支持标准 Linux 环境和 proot 容器，特别支持 Debian 12 （Bookworm） 容器。

### NapCatQQ 管理
#### 安装
NapCatQQ 是使用 NapCatQQ 项目中的官方安装脚本安装的。安装过程会略有不同，具体取决于您使用的是 proot 容器还是标准 Linux 环境。

安装函数 （） 处理环境检测并执行相应的安装命令：installNapCatQQ
WebUI 访问
NapCatQQ 提供了一个基于 Web 的用户界面来管理机器人。该接口可通过具有身份验证令牌的本地 URL 进行访问。系统可以使用适当的令牌检索和显示此 URL。

从菜单中选择“WebUI 地址”选项时，系统：

从 NapCatQQ 配置文件中读取令牌
显示包含令牌的完整 URL
```url
http://127.0.0.1:6099/webui?token=[token]
```

### 配置
#### QQbot 变量
该变量用于存储启动时传递给 NapCatQQ 的机器人配置参数。如果未设置此值，系统将提示输入该值并将其保存到配置文件中。QQbot


### WebUI 配置
WebUI 配置（包括身份验证令牌）存储在 JSON 文件中，网址为：
```
/opt/QQ/resources/app/app_launcher/napcat/config/webui.json
```
在显示 WebUI URL 时，系统会读取此文件以提取令牌。


### 系统要求和兼容性
#### 支持的环境
NapCatQQ 管理根据环境的不同，具有不同级别的支持：

|环境	|支持状态	|笔记|
| :----: | :----: | :----: |
|Debian 12 （Bookworm） proot 容器	|完全支持|	推荐环境|
|其他 proot 容器	|不支持	|安装将失败|
|Ubuntu 20+（非容器）|	支持	|仅用于安装|
|Debian 10+（非容器）|	支持	|仅用于安装|
|CentOS 9（非容器）|	支持	|仅用于安装|