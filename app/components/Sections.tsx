import Link from "next/link";
import { ArticleIcon, ProjectIcon } from "./SiteChrome";

type Article = { title: string; href: string; date: string };
type Project = { title: string; href: string; articles: Article[] };
type Section = { id: string; title: string } & (
  { kind: "projects"; items: Project[] } | { kind: "articles"; items: Article[] }
);

export const arcfoldArticles: Article[] = [{
  title: "Arcfold 希望从共同经历中学习，帮助人形成并实现自己的方向",
  href: "/projects/arcfold/introduction/",
  date: "2026-11-02",
}];

export const sections: Section[] = [
  { id: "projects", title: "Agent 项目", kind: "projects", items: [{ title: "Arcfold", href: "/projects/arcfold/", articles: arcfoldArticles }] },
  { id: "reviews", title: "工作复盘", kind: "articles", items: [{ title: "研究方法的不断细化让我偏离了最初的研究目标", href: "/posts/work-review-1102/", date: "2026-11-02" }] },
  { id: "thoughts", title: "个人思考", kind: "articles", items: [{ title: "对“如果要高效，反而应该慢下来”的一点体会", href: "/posts/working-mindfully/", date: "2026-11-03" }, { title: "用语音输入写工作复盘有助于回归整体目标", href: "/posts/finding-direction-through-writing/", date: "2026-11-02" }] },
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
  if (section.kind === "projects") {
    return <div>{section.items.map((project) => (
      <div className="project-group" key={project.href}>
        <Link className="project-row" href={project.href}><ProjectIcon /><span>{project.title}</span></Link>
        <div className="project-children"><ArticleItems items={project.articles} /></div>
      </div>
    ))}</div>;
  }
  return <ArticleItems items={section.items} />;
}
