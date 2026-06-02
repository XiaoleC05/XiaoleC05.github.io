---
title: GitHub 项目：宿舍电费守护（DormPowerGuard-Lite）
date: 2026-06-02 10:30:00
updated: 2026-06-02 12:00:00
tags:
  - 项目
  - GitHub
  - Python
  - FastAPI
  - Vue
categories: 项目
author: 陈晓乐
repo: https://github.com/XiaoleC05/dorm-power-guard-lite
---

> 本文根据 GitHub 远程仓库 [XiaoleC05/dorm-power-guard-lite](https://github.com/XiaoleC05/dorm-power-guard-lite) 的 README 整理（该仓库自 Gitee 迁移至 GitHub）。

## 仓库概览

| 项 | 内容 |
|----|------|
| 仓库 | [github.com/XiaoleC05/dorm-power-guard-lite](https://github.com/XiaoleC05/dorm-power-guard-lite) |
| 描述 | Migrated from gitee.com/XiaoleC/dorm-power-guard-lite |
| 主语言 | Python |
| 最近更新 | 2026-06-02 |
| 适用场景 | 西华大学宿舍一卡通用电监控 |

**DormPowerGuard-Lite** 是针对西华大学一卡通宿舍用电小程序的轻量级电费监控系统：Python 爬虫定时抓取数据，余额低于阈值时自动邮件 / QQ 告警。

## 核心功能（来自 GitHub README）

1. **定时爬虫** — 每小时自动抓取电费数据（数据源：`https://ecard.xhu.edu.cn`）
2. **数据存储** — 记录存入 MySQL，支持历史查询
3. **告警通知** — 余额低于阈值时发送邮件或 QQ 消息
4. **监控面板** — Web 界面展示余量、趋势图与告警规则
5. **手动刷新** — 支持手动触发数据获取
6. **单一宿舍监控** — 针对配置中 openid 对应宿舍号监控

## 技术栈

**后端**：Python 3.8+、FastAPI、Uvicorn、SQLAlchemy、APScheduler、Requests  
**前端**：Vue 3、Element Plus、ECharts、Vite、Pinia  
**数据库**：MySQL 5.7+  
**可选**：NoneBot + NapCatQQ（QQ 机器人告警）

## 仓库结构（摘要）

```
dorm-power-guard-lite/
├── backend/          # FastAPI、爬虫、调度、告警
│   ├── app/
│   ├── nonebot_bot/
│   └── scripts/
├── frontend/         # Vue 3 监控面板
├── start-all-complete.bat   # Windows 一键启动
└── README.md
```

主要页面：`Dashboard.vue`（监控面板）、`Records.vue`（历史记录）、`AlertRules.vue` / `AlertLogs.vue`（告警配置与日志）。

## 快速开始（摘要）

```bash
git clone https://github.com/XiaoleC05/dorm-power-guard-lite.git
cd dorm-power-guard-lite/backend
pip install -r requirements.txt
cp .env.example .env   # 配置数据库与爬虫认证信息
python run.py
```

前端：`cd frontend && npm install && npm run dev`，默认 `http://localhost:3000`。

认证信息（`openid`、`JSESSIONID`）需通过 Charles / Fiddler 抓包微信小程序获取，详见仓库 README「抓包获取认证信息」章节。

## 部署与维护

仓库 README 包含完整的 **Windows 本地**、**云服务器（systemd + Nginx）** 以及可选 **NoneBot + NapCatQQ Docker** 部署指南，以及 Git 拉取更新流程。

> 仅供西华大学学生个人学习与使用，请遵守学校相关规定。

**源码与完整文档**：[https://github.com/XiaoleC05/dorm-power-guard-lite](https://github.com/XiaoleC05/dorm-power-guard-lite)
