# ChenXiaole · Hexo 博客源码

个人博客源码仓库，基于 `Hexo + Fluid` 构建，站点内容以中文技术笔记、随笔和项目展示为主。

## 项目结构

- `source/`：文章、页面与静态资源
- `source/_posts/`：博客文章
- `source/img/`：站点图片（含首页头图 `banner-space-*.jpg`）
- `source/js/home-banner-carousel.js`：首页头图轮播逻辑
- `_config.yml`：Hexo 主配置（站点、插件、部署分支等）
- `_config.fluid.yml`：Fluid 主题配置
- `docs/网站维护指南.md`：维护与排错手册

## 环境要求

- Node.js 18+
- npm 9+
- Git（用于部署到 GitHub Pages）

## 本地开发

安装依赖：

```bash
npm install
```

本地预览：

```bash
npm run server
```

默认访问：`http://localhost:4000`

## 构建与部署

生成静态文件：

```bash
npm run build
```

部署到远程 `page` 分支（GitHub Pages）：

```bash
npm run deploy
```

> 当前仓库约定：发布站点请使用 `hexo deploy` 流程，不要把 Hexo 源码直接推到 `page` 分支。

## 头图轮播说明

- 首页使用 `source/js/home-banner-carousel.js` 控制轮播
- 图片资源放在 `source/img/banner-space-1.jpg` 到 `banner-space-16.jpg`
- 轮播脚本已内置预加载与失败回退，避免灰屏或空白图

## 常用命令速查

```bash
# 清理构建缓存
npm run clean

# 重新构建
npm run build

# 本地调试
npm run server

# 一键部署（按 _config.yml 的 deploy 配置）
npm run deploy
```

## 常见问题

### 1) 报错：`The fluid theme could not be found`

通常是把 Hexo 源码错误推到了 `page` 分支，GitHub Pages 按 Jekyll 方式解析导致。  
处理方式：在源码分支执行 `npm run deploy`，重新发布静态文件到 `page`。

### 2) 头图出现灰图或不轮播

- 先确认 `source/img/banner-space-*.jpg` 文件存在
- 再执行 `npm run build` 检查是否正常生成到 `public/img/`
- 清浏览器缓存后强制刷新（`Ctrl + F5`）

## 维护文档

详细维护流程见：

- [docs/网站维护指南.md](docs/网站维护指南.md)

