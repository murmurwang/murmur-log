# MurMur Log

Murphy Wang 的个人博客与项目档案。公开站点是完整内容的原始发布位置，其他平台只承担分发。

## 本地运行

```bash
npm install
npm run dev
```

## 检查与生成静态站点

```bash
npm test
```

构建产物位于 `out/`。每次推送到 `main` 后，GitHub Pages 会自动发布到 [murmurlog.com](https://murmurlog.com)。

## 内容结构

- `app/page.tsx`：首页，文章和项目仅作文字展示，无子页面或跳转入口
- `app/about/`：关于
- `public/feed.xml`：RSS/Atom 订阅

当前内容均为占位，由 Murphy 逐步补充。
