import Link from "next/link";
import { ArticleIcon } from "./SiteChrome";

type Article = { title: string; href: string; date: string };
type Section = { id: string; title: string; items: Article[] };

export const arcfoldArticles: Article[] = [{
  title: "Arcfold 希望在共同经历中持续学习，支持人的意图形成与实现",
  href: "/projects/arcfold/introduction/",
  date: "2026-11-03",
}];

export const sections: Section[] = [
  { id: "projects", title: "开源项目", items: arcfoldArticles },
  { id: "thoughts", title: "个人思考", items: [
    { title: "Agent 观察｜对 DSH 做开源生态的理解", href: "/posts/dsh-open-source-ecosystem/", date: "2026-11-06" },
    { title: "自我观察｜对“如果要高效，反而应该慢下来”的一点体会", href: "/posts/working-mindfully/", date: "2026-11-03" },
    { title: "工作复盘｜研究方法的不断细化让我偏离了最初的研究目标", href: "/posts/work-review-1102/", date: "2026-11-02" },
    { title: "自我观察｜用语音输入写工作复盘有助于回归整体目标", href: "/posts/finding-direction-through-writing/", date: "2026-11-02" },
  ] },
];

export function ArticleItems({ items }: { items: Article[] }) {
  return <div>{items.map((item) => (
    <Link className="stream-row" href={item.href} key={item.href}>
      <span className="article-title"><ArticleIcon /><span>{item.title}</span></span>
      <time className="post-date" dateTime={item.date}>{item.date.replaceAll("-", ".")}</time>
    </Link>
  ))}</div>;
}

export function SectionItems({ section }: { section: Section }) {
  return <ArticleItems items={section.items} />;
}
