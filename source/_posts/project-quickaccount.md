---
title: GitHub 项目：快账（QuickAccount）本地记账应用
date: 2026-06-02 10:00:00
updated: 2026-06-02 12:00:00
tags:
  - 项目
  - GitHub
  - Qt
  - C++
categories: 项目
author: 陈晓乐
repo: https://github.com/XiaoleC05/QuickAccount
---

> 本文根据 GitHub 远程仓库 [XiaoleC05/QuickAccount](https://github.com/XiaoleC05/QuickAccount) 的 README 与项目结构整理，便于在博客中阅读；最新细节以仓库为准。

## 仓库概览

| 项 | 内容 |
|----|------|
| 仓库 | [github.com/XiaoleC05/QuickAccount](https://github.com/XiaoleC05/QuickAccount) |
| 主语言 | QML / C++ |
| 技术栈 | Qt 6、CMake 3.16+、C++17、SQLite |
| 平台 | Windows 桌面；Android 可源码构建 APK |
| CI | GitHub Actions 自动构建（见仓库徽章） |

**快账**是一款面向个人使用的本地记账桌面应用：数据保存在本机 SQLite 中，无需联网即可记账、查账与简单统计。

## 核心功能（来自仓库说明）

| 能力 | 说明 |
|------|------|
| 记账 | 记录收入或支出，填写金额、日期、分类、支付方式与备注 |
| 查账 | 在「记录」中按关键词、分类、支付方式、日期与金额区间组合筛选 |
| 概览 | 在「首页」查看总收入、总支出与结余 |
| 数据位置 | 在「设置」中查看数据库路径，便于备份或迁移 |

账目数据存储在本机（桌面为用户数据目录；Android 为应用私有目录），应用不会主动上传云端。

## 技术架构

仓库 README 中的技术概览：

- **界面**：Qt Quick（QML）+ Qt Quick Controls，Fusion 风格
- **逻辑**：C++17；界面通过 `TxService` 调用业务层，经 DAO 写入 SQLite
- **结构**：`qml/` 界面、`core/` 模型与数据访问、`android/` Android 包资源

典型流程：QML 触发 → `TransactionService` 校验 → `TransactionDAO` 持久化 → `dataChanged()` 刷新首页与记录页。

## 从源码构建（摘要）

依赖 **CMake 3.16+**、**Qt 6.2+**（Quick、Quick Controls 2、SQL）。Windows 示例：

```powershell
git clone https://github.com/XiaoleC05/QuickAccount.git
cd QuickAccount
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release `
  -DCMAKE_PREFIX_PATH="<本机Qt路径>/mingw_64"
cmake --build build
```

构建产物为 `build/QuickAccount.exe`；分发时需对 exe 执行 `windeployqt` 部署 Qt 依赖。

Android 构建需 Qt for Android、SDK、NDK、JDK，详见仓库 README「Android 自用 APK」章节。

## 为何值得一看

- 完整的 **Qt Quick + C++ 分层**示例（QML / Service / DAO）
- 覆盖桌面与 Android 双端构建说明
- 附带详细的功能使用手册与开发者生命周期文档

**源码与完整文档**：[https://github.com/XiaoleC05/QuickAccount](https://github.com/XiaoleC05/QuickAccount)
