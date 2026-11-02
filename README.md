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

- `app/page.tsx`：首页，项目、工作复盘、个人思考三个模块；浅色背景与简洁文字排版
- `app/[section]/`：项目、工作复盘、个人思考的独立栏目页
- `app/posts/`：已发布文章
- `public/feed.xml`：RSS/Atom 订阅

文章由 Murphy 逐步补充；不设独立关于页面。

## 标题规范

标题用一句话直接概括整篇文章的核心意思，让读者看到标题就知道文章在说什么。避免设问、悬念和含糊的文艺表达；栏目和日期由页面单独呈现，不重复塞进标题。
