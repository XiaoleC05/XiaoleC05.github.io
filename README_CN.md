# XiaoleC05.github.io

Xiaole Cheng 的个人技术博客与作品集网站，基于 Hexo 构建。

## Features

- Markdown 撰写技术文章
- Material Design 响应式布局
- 文章分类与标签归档

## Architecture

```text
Hexo (static site generator)
  ↓
Fluid Theme (Material Design)
  ↓
GitHub Pages (hosting)
```

## Directory Structure

```text
XiaoleC05.github.io/
├── source/          # Markdown posts and pages
│   └── _posts/      # blog articles
├── themes/          # Fluid theme
├── _config.yml      # site configuration
├── README.md
└── README_CN.md
```

## Requirements

- Node.js 18+
- npm

## Quick Start

```bash
git clone https://github.com/XiaoleC05/XiaoleC05.github.io.git
cd XiaoleC05.github.io

npm install

# local preview
hexo server

# generate static files
hexo generate
```

## Usage

本地预览访问 `http://localhost:4000`。站点部署于 [xiaolec05.github.io](https://xiaolec05.github.io)。

## License

Content &copy; Xiaole Cheng. All rights reserved.
