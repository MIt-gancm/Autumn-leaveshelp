---
title: autumn-leaves安装
createTime: 2025/02/07 10:13:19
permalink: /article/l5cmbbzf/
icon: /dow.svg
---
---
# 安装 Autumn-leaves 脚本
---
首先，确保你的系统满足以下其一要求：
- Termux
- Linux（Debian 系列推荐 Ubuntu 20, 22）

## 在 Termux 中安装

打开命令行终端，运行以下命令：

### Github 源

```bash
pkg update -y && pkg upgrade -y && pkg install git -y && git clone https://github.com/MIt-gancm/Autumn-leaves ~/.gancm
```

### Gitee 源

```bash
pkg update -y && pkg upgrade -y && pkg install git -y && git clone https://gitee.com/MIt-gancm/Autumn-leaves ~/.gancm
```

## 在 Linux 中安装

打开命令行终端，运行以下命令：

### Github 源

```bash
apt update -y && apt upgrade -y && apt install git -y && git clone https://github.com/MIt-gancm/Autumn-leaves ~/.gancm
```

### Gitee 源

```bash
apt update -y && apt upgrade -y && apt install git -y && git clone https://gitee.com/MIt-gancm/Autumn-leaves ~/.gancm
```

## 验证安装

安装完成后，你可以通过以下命令验证安装：

```bash
bash ~/.gancm/gancm
```

如果出现对话框，说明安装完成。
