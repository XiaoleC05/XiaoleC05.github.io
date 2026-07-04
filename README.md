# XiaoleC05.github.io

Personal tech blog and portfolio site of Xiaole Cheng, built with Hexo.

## Features

- Technical articles written in Markdown
- Material Design responsive layout
- Category and tag archives

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

Local preview at `http://localhost:4000`. Deployed at [xiaolec05.github.io](https://xiaolec05.github.io).

## License

Content &copy; Xiaole Cheng. All rights reserved.
