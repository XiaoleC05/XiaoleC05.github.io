/**
 * 中文首页：从本地 5 张头图中循环轮换展示，并同步切换副标题。
 * 需配合 _config.fluid.yml：fun_features.typing.scope 不含 home，避免与 Typed.js 冲突。
 */
// REVIEW: 安全校验 — 首页头图 URL 为静态白名单，勿将用户输入拼入 background

(function () {
  'use strict';

  /** @type {{ img: string, text: string }[]} */
  var SLIDES = [
    { img: '/img/banner-space-1.jpg', text: '在星图与代码之间，记录学习与创造。' },
    { img: '/img/banner-space-2.jpg', text: '技术 · 随笔 · 作品集，慢慢生长。' },
    { img: '/img/banner-space-3.jpg', text: '保持好奇，像探测器一样向前多看一公里。' },
    { img: '/img/banner-space-4.jpg', text: '把远方的光与影，收成可读的数据。' },
    { img: '/img/banner-space-5.jpg', text: '愿我们在既定轨道上，仍认真对准每一帧。' }
  ];
  var ROTATE_INTERVAL_MS = 7000;
  var FADE_MS = 900;

  function isBlogIndexPath() {
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path === '/' || path === '/index.html') {
      return true;
    }
    return /^\/page\/\d+$/.test(path);
  }

  function applySlide(banner, sub, slide) {
    var safe = String(slide.img).replace(/'/g, '%27');
    banner.style.background =
      "url('" + safe + "') no-repeat center center / cover";
    sub.textContent = slide.text;
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

    banner.style.transition = 'opacity ' + FADE_MS + 'ms ease';

    var idx = Math.floor(Math.random() * SLIDES.length);
    applySlide(banner, sub, SLIDES[idx]);

    if (SLIDES.length === 1) {
      return;
    }

    setInterval(function () {
      idx = (idx + 1) % SLIDES.length;
      banner.style.opacity = '0.85';
      setTimeout(function () {
        applySlide(banner, sub, SLIDES[idx]);
        banner.style.opacity = '1';
      }, FADE_MS / 2);
    }, ROTATE_INTERVAL_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
