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

- `app/page.tsx`：首页，Agent 项目、工作复盘、个人思考三个模块；石墨灰背景与简洁文字排版
- 首页栏目标题不可点击；右上角导航滚动定位到首页相应栏目，文章返回入口也指向首页栏目。
- `app/[section]/`：保留旧栏目地址兼容已分享链接，站内导航不再进入这些页面
- `app/projects/arcfold/`：Arcfold 项目主页，收录该项目的文章
- `app/projects/arcfold/introduction/`：项目介绍文章，正文来自已确认的 Notion 原文
- 项目是持续容纳内容的单位，以项目名和文件夹图标呈现；文章保留文档图标、概括全文的标题和发布日期。
- `app/posts/`：已发布文章
- `public/feed.xml`：RSS/Atom 订阅

文章由 Murphy 逐步补充；不设独立关于页面。

## 标题规范

标题用一句话直接概括整篇文章的核心意思，让读者看到标题就知道文章在说什么。避免设问、悬念和含糊的文艺表达；栏目和日期由页面单独呈现，不重复塞进标题。
