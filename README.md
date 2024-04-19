# netPlayer

## 简介

<img src="build/icon.png" width="100px">

![vue](https://img.shields.io/badge/vue.js-2.6.14-green?logo=vue.js)
![Electron](https://img.shields.io/badge/Electron-13-white)
![Antd](https://img.shields.io/badge/Antd-1.7.8-blue)
![axios](https://img.shields.io/badge/axios-1.4-orange)
![crypto-js](https://img.shields.io/badge/crypto_js-4.1.1-yellow)
![bootstrap-icons](https://img.shields.io/badge/bootstrap_icons-1.11.2-purple)

![License](https://img.shields.io/badge/License-MIT-dark_green)

**基于Subsonic API的桌面端播放器**

[**netPlayer Next**](https://github.com/Zhoucheng133/netPlayer-Next) | **★ netPlayer** | [**netPlayer Mobile**](https://github.com/Zhoucheng133/netPlayer-Mobile)

提示：这个版本的netPlayer `v1.x` **不会**再添加功能性更新了，如果软件本身存在致命性的问题我会更新这个仓库，新功能和特性将会在netPlayer Next `v2.0+` 中更新，其源代码见[**netPlayer Next**](https://github.com/Zhoucheng133/netPlayer-Next)

**注意，鉴于Subsonic没有提供“获取所有歌曲”的API，因此“所有歌曲”是通过获取随机歌曲排序后得到的，只能获取500首歌曲**

## 截图
<img src="./build/demo1.png" height="400px"/>

**点击歌曲封面可以查看歌词**

<img src="./build/demo3.png" height="400px"/>

## 快捷键

- `空格`：**播放/暂停**
- `command →`(macOS)或`Ctrl ➡︎`(Windows)：**下一首** (仅适用于`v2.0.6`或更新的版本)
- `command ←`(macOS)或`Ctrl ←`(Windows)：**上一首** (仅适用于`v2.0.6`或更新的版本)
- `command L`(macOS)或`Ctrl L`(Windows)：**显示/隐藏歌词** (仅适用于`v2.0.6`或更新的版本)

## 在你的设备上配置netPlayer

如果你想要查找`v2.0.0`及之后版本的代码和配置指南，跳转到[**netPlayer Next**](https://github.com/Zhoucheng133/netPlayer-Next)，下文的的配置适用于`v1.x`版本

由于本项目没有区分`正在开发的版本`和`发布的版本`，如果你需要获取可以正确执行的代码，**不要直接下载最新的代码! 请在Tag中选择最新的版本下载（或者在Release中下载Source code）**

### 环境配置

- node@16.18.0，**新版本可能无法运行**

- yarn包管理器<sup>*</sup>

  ```bash
  npm install -g yarn
  ```

<sup>*</sup>**如果你处于国内的网络环境，注意配置yarn和Electron的镜像地址或者代理**

### 运行或Debug

1. 进入项目文件夹

   ```bash
   cd net-player
   ```

2. 下载依赖文件

   ```bash
   yarn install
   ```

3. 运行和Debug

   ```bash
   # Debug模式
   yarn run electron:serve
   # 发布模式
   yarn run electron:build
   ```   


## 更新日志

### 2.0.6 (2024/3/28)
- 添加显示/隐藏歌词的快捷键
- 添加Windows上切换歌曲的快捷键
- 修复macOS系统上点击菜单无效的问题

### 2.0.5 (2024/3/18)
- 添加了托盘功能和Windows上的关闭隐藏窗口的功能
- 修复没有登录时歌曲操作的问题

### 2.0.4 (补充更新) (2024/3/10)
- 添加清理封面图片缓存的功能(macOS系统)
- 添加在Windows上Debug的配置开发条件

### 2.0.4 (2024/3/9)
- ~~现在可以复制一些文本~~
- 修复没有进入歌词第一句时的滚动状态问题
- 修复无法在文本框输入空格的问题
- 本地化一些系统控件语言

### 2.0.3 (2024/3/7)
- 修复歌词滚动问题
- 修复macOS语言问题
- 修复macOS从菜单切换页面的问题

### 2.0.2 (2024/3/6)
- 统一Windows和macOS一些组件
- 修复运行在Windows系统上稳定性的问题
- 修复进度条崩溃的问题
- 提高了程序运行效率

### 2.0.1 (2024/2/28)
- 恢复全局搜索功能
- 恢复检查更新功能
- 恢复歌词显示功能
- 修复窗口没有聚焦的问题
- 修复播放栏信息显示问题
- 修复播放栏封面图片圆角问题
- 修复定位图标是否可用没有区分的问题
- 修复Windows上窗口按钮图标错误的问题

### 2.0.0 Beta (2024/2/26, **不在Release中**)
- 使用Flutter重构了整个项目
- 添加单曲循环播放模式
- 添加记住播放模式功能
- 添加了歌曲项中右键菜单
- 改进歌曲显示的布局
- 改进滚动到播放歌曲
- 🚫全局搜索功能暂时无法使用
- 🚫检查更新功能暂时无法使用
- 🚫Windows版隐藏到状态栏暂时无法使用
- 🚫歌词功能暂时无法使用

### ~~1.5.1 (2024/2/20)~~
- ~~改进侧栏显示方式~~
- ~~改进一些动画显示的效果~~

### 1.5.0 (2024/1/26)
- 添加设置界面
- 添加打开软件连接失败是否重试的提示
- 修复Windows上歌词界面无法显示窗口控制
- 修复添加到歌单时没有自动刷新歌单的问题
- 修复歌单没有内容时加载错误的问题
- 修复从一个歌单添加到另外一个歌单时候弹窗没有自动关闭的问题
- 改进歌词滚动效果

### 1.4.0 (2024/1/4)
- 添加歌词显示界面(**点击歌曲封面图即可查看歌词**)
- 添加记住播放模式功能

### 1.3.4 (2023/12/30)
- 添加查看播放位置
- 添加Windows的底部托盘
- 修复艺人显示的问题
- 改进底部播放栏显示效果
- 改进交互UI

### 1.3.3 (2023/11/23)
- 添加所有歌曲≥500首歌曲的提示

### 1.3.2 (合并到1.3.3)
- 修复歌单页面搜索选中问题
- 修复播放时无法自动顺序播放
- 可以在播放栏上star/unstar

### 1.3.1 (2023/11/21)
- 添加完全随机播放
- 自动加载上一次播放的歌曲
- 完善一些图标显示

### 1.3.0 ~~(2023/11/6)~~ (2023/11/7)
- 重构界面结构
- 大幅提高页面切换速度
- 现在刷新歌单不会停止播放了
- 改进进度条样式
- 现在可以“滑动”进度条了
- 修复unstar歌曲的问题

### 1.2.3 (2023/10/28)
- 修复一个布局问题
- 更改显示播放方式

### 1.2.2 (2023/10/22)
- 按照添加顺序显示所有歌曲
- 添加系统控制中心控制音乐播放和显示歌曲信息
- 可以自定义随机播放还是顺序播放

### 1.2.1 (2023/8/30)
- 修复当喜欢的音乐为0无法显示的情况

### 1.2.0 (2023/8/18)
- 在任何地方可以看到喜欢的歌曲
- 可以添加活着取消喜欢歌曲
- 可以新建、删除或重命名播放列表
- 添加一些操作功能，包括
  - 播放当前歌曲
  - 添加到喜欢的歌曲
  - 从喜欢的歌曲中删除
  - 添加到现有的歌单
  - 从现有的歌单中删除

### 1.1.0 (->合并到版本1.2.0)
- 添加搜索功能
- 可以在搜索内容中播放
- 修复一些错误

### 1.0.1 (2023/8/13)
- 可以在歌单中搜索
- 改进菜单

### 1.0.0 (2023/8/12)
- 第一个版本

## Subsonic API

[关于所有的API点此](http://www.subsonic.org/pages/api.jsp)

## 歌词API

[关于歌词的API点此](https://lrclib.net/docs)
