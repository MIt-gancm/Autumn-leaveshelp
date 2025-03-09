---
title: 不急慢慢写
createTime: 2025/02/07 14:31:14
permalink: /article/cvo9n6v6/
---
# MCServer 管理脚本文档

本文件提供了 MCServer 管理脚本的详细介绍，该脚本允许用户轻松管理 Minecraft 服务器、安装 Java 以及处理与服务器相关的任务。

## 功能概述

### 1. 目录设置
脚本创建了一个用于管理 Minecraft 服务器的目录结构：

mkdir -p "${HOME}/.termux/gancm/MCserver"
```
该命令会在用户的主目录下创建必要的文件夹，以便存储 Minecraft 服务器的相关文件。

### 2. Java 安装
脚本提示用户选择并安装特定版本的 Java。用户可以选择多个版本，脚本将使用 `apt` 包管理器进行安装。

#### 使用方法

bash ~/.gancm/gancm download_JAVA
```
- **功能**: 提示用户选择 Java 版本。
- **输入验证**: 验证用户输入的选项是否有效。
- **安装**: 安装用户选择的 Java 版本。

### 3. Minecraft 服务器安装
脚本允许用户安装不同类型的 Minecraft 服务器，包括：
- **纯净版（插件支持）**
- **模组版**
- **基岩版**
- **原版**

#### 使用方法
```
bash ~/.gancm/gancm  install_MC_SERVER
```
- **功能**: 提示用户选择服务器类型和版本。
- **下载**: 从快速镜像下载所选服务器版本。

### 4. 启动 Minecraft 服务器
用户可以使用脚本启动已安装的服务器。脚本会检查 Java 是否已安装，并提示用户选择服务器。

#### 使用方法
```
bash ~/.gancm/gancm start_MC_SERVER
```
- **功能**: 列出已安装的服务器，允许用户选择并启动服务器。

### 5. 删除 Minecraft 服务器
脚本提供了删除已安装服务器的功能，并设置确认步骤以防止意外删除。

#### 使用方法
```
bash ~/.gancm/gancm  rm_MC_SERVER
```
- **功能**: 提示用户进行确认，通过简单的数学问题来验证用户的意图。

### 6. MCSManager 集成
脚本集成了 MCSManager，允许用户轻松启动和停止该服务。

#### 使用方法
```
bash ~/.gancm/gancm  startMCSManager
bash ~/.gancm/gancm  stopMCSManager
```
- **功能**: 检查 MCSManager 是否已安装，并根据情况启动或停止服务。

### 7. NapCatQQ 安装与管理
脚本包括安装和管理 NapCatQQ（一个 QQ 机器人）的功能。

#### 使用方法
```
bash ~/.gancm/gancm  installNapCatQQ
bash ~/.gancm/gancm  startNapCatQQ
```

> [!WARNING]
> 检测为proot容器时仅限deb12可用


- **功能**: 根据系统类型安装 NapCatQQ，并允许用户选择以后台或前台方式启动。


## 日志记录
所有操作都会记录到日志中，以便将来参考。脚本中的 `log` 函数用于记录事件和错误信息。
