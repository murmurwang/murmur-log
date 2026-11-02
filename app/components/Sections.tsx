import Link from "next/link";
import { ArticleIcon } from "./SiteChrome";

export const sections = [
  { id: "projects", title: "项目", items: [{ title: "Arcfold", href: "/projects/arcfold/", date: "2026-11-02" }] },
  { id: "reviews", title: "工作复盘", items: [{ title: "研究方法的不断细化让我偏离了最初的研究目标", href: "/posts/work-review-1102/", date: "2026-11-02" }] },
  { id: "thoughts", title: "个人思考", items: [{ title: "用语音输入写工作复盘有助于回归整体目标", href: "/posts/finding-direction-through-writing/", date: "2026-11-02" }] },
] satisfies { id: string; title: string; items: { title: string; href?: string; date?: string }[] }[];

export function SectionItems({ section }: { section: (typeof sections)[number] }) {
  return (
    <div>
      {section.items.map((item) => "href" in item && item.href ? (
        <Link className="stream-row" href={item.href} key={item.title}>
          <span className="article-title"><ArticleIcon /><span>{item.title}</span></span>
          {"date" in item && item.date && <time className="post-date" dateTime={item.date}>{item.date.replaceAll("-", ".")}</time>}
        </Link>
      ) : <div className="stream-row" key={item.title}><strong>{item.title}</strong></div>)}
    </div>
  );
}
