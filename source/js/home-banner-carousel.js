/**
 * 中文首页：每次打开/刷新页面，从 SLIDES 中随机选一组 Banner 图与副标题（仅一次，不轮播）。
 * 需配合 _config.fluid.yml：fun_features.typing.scope 不含 home，避免与 Typed.js 冲突。
 * 修改候选：编辑下方 SLIDES（img 为站内路径或可信 HTTPS 图床 URL）。
 */
// REVIEW: 安全校验 — 图片 URL 为静态白名单，勿将用户输入拼入 background

(function () {
  'use strict';

  /** @type {{ img: string, text: string }[]} */
  var SLIDES = [
    { img: '/img/banner.jpg', text: '在星图与代码之间，记录学习与创造。' },
    {
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
      text: '技术 · 随笔 · 作品集 — 慢慢生长。'
    },
    {
      img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=80',
      text: '保持好奇，像探测器一样向前多看一公里。'
    },
    {
      img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80',
      text: '把复杂拆成可验证的小步，再一步步写回去。'
    },
    {
      img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1920&q=80',
      text: '文档与代码同样重要：未来的自己会感谢现在的注释。'
    },
    {
      img: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c49?auto=format&fit=crop&w=1920&q=80',
      text: '开源与分享，让学习路径被更多人看见。'
    }
  ];

  function isBlogIndexPath() {
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path === '/' || path === '/index.html') {
      return true;
    }
    return /^\/page\/\d+$/.test(path);
  }

  function init() {
    if (!isBlogIndexPath()) {
      return;
    }
    if (!document.querySelector('.index-card')) {
      return;
    }
    var banner = document.getElementById('banner');
    var sub = document.getElementById('subtitle');
    if (!banner || !sub || SLIDES.length === 0) {
      return;
    }

    var idx = Math.floor(Math.random() * SLIDES.length);
    var s = SLIDES[idx];
    var safe = String(s.img).replace(/'/g, '%27');
    banner.style.background =
      "url('" + safe + "') no-repeat center center / cover";
    sub.textContent = s.text;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
