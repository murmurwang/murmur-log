import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/SiteChrome";
import { ArticleItems, arcfoldArticles } from "../../components/Sections";

export const metadata: Metadata = {
  title: "Arcfold · MurMur Log",
  description: "在共同经历中持续学习和改进，促进人的意图形成与实现。",
  alternates: { canonical: "https://murmurlog.com/projects/arcfold/" },
};

export default function ArcfoldProject() {
  return (
    <PageShell section="projects">
      <section className="section-page shell" aria-labelledby="project-title">
        <header className="post-header">
          <Link className="breadcrumb" href="/#projects">← 首页</Link>
          <h1 id="project-title">Arcfold</h1>
          <p className="project-description">在共同经历中持续学习和改进，促进人的意图形成与实现。</p>
        </header>
        <section className="project-articles" aria-labelledby="project-articles-title">
          <h2 id="project-articles-title">文章</h2>
          <ArticleItems items={arcfoldArticles} />
        </section>
      </section>
    </PageShell>
  );
}
