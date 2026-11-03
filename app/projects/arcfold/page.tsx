import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/SiteChrome";
import { ArticleItems, arcfoldArticles } from "../../components/Sections";

export const metadata: Metadata = {
  title: "Arcfold · MurMur Log",
  description: "探索从共同经历中持续改进理解与行动的个人 AI 助手。",
  alternates: { canonical: "https://murmurlog.com/projects/arcfold/" },
};

export default function ArcfoldProject() {
  return (
    <PageShell section="projects">
      <section className="section-page shell" aria-labelledby="project-title">
        <header className="post-header">
          <Link className="breadcrumb" href="/projects/">← 项目</Link>
          <h1 id="project-title">Arcfold</h1>
          <p className="project-description">探索从共同经历中持续改进理解与行动的个人 AI 助手。</p>
        </header>
        <section className="project-articles" aria-labelledby="project-articles-title">
          <h2 id="project-articles-title">文章</h2>
          <ArticleItems items={arcfoldArticles} />
        </section>
      </section>
    </PageShell>
  );
}
