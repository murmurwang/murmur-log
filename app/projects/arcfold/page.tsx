import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PageShell, Placeholder } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Arcfold — MurMur Log",
  description: "Arcfold 项目页。",
  openGraph: { images: [] },
};

export default function ArcfoldPage() {
  return (
    <PageShell>
      <article className="project-page shell">
        <header className="project-hero">
          <p className="breadcrumb"><Link href="/projects">项目</Link> / Arcfold</p>
          <p className="eyebrow">In progress</p>
          <h1>Arcfold</h1>
          <p className="page-deck"><Placeholder>一句话介绍</Placeholder></p>
        </header>

        <div className="project-layout">
          <aside className="project-index" aria-label="项目页目录">
            <span>Overview</span>
            <span>Modules</span>
            <span>Writing</span>
            <span>Evidence</span>
          </aside>
          <div className="project-content">
            <section>
              <p className="section-label">Overview</p>
              <h2>项目概览</h2>
              <p><Placeholder>由 Murphy 补充</Placeholder></p>
            </section>
            <section>
              <p className="section-label">Modules · 01</p>
              <Link className="module-card" href="/projects/arcfold/latent-intent">
                <div>
                  <h2>Latent Intent</h2>
                  <p><Placeholder>模块简介与当前状态</Placeholder></p>
                </div>
                <Arrow />
              </Link>
            </section>
            <section>
              <p className="section-label">Writing</p>
              <h2>相关文章</h2>
              <p><Placeholder>文章链接</Placeholder></p>
            </section>
            <section>
              <p className="section-label">Evidence</p>
              <h2>文档与代码</h2>
              <p><Placeholder>GitHub、实验与版本记录</Placeholder></p>
            </section>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
