import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Placeholder } from "../../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Latent Intent — Arcfold — MurMur Log",
  description: "Latent Intent 模块页。",
  openGraph: { images: [] },
};

export default function LatentIntentPage() {
  return (
    <PageShell>
      <article className="project-page shell">
        <header className="project-hero">
          <p className="breadcrumb"><Link href="/projects">项目</Link> / <Link href="/projects/arcfold">Arcfold</Link> / Latent Intent</p>
          <p className="eyebrow">Module · 01</p>
          <h1>Latent Intent</h1>
          <p className="page-deck"><Placeholder>一句话介绍</Placeholder></p>
        </header>

        <div className="project-layout">
          <aside className="project-index" aria-label="模块页目录">
            <span>Note</span>
            <span>Status</span>
            <span>Writing</span>
            <span>Links</span>
          </aside>
          <div className="project-content">
            <section>
              <p className="section-label">Note</p>
              <h2>模块说明</h2>
              <p><Placeholder>由 Murphy 补充</Placeholder></p>
            </section>
            <section>
              <p className="section-label">Status</p>
              <h2>当前进展</h2>
              <p><Placeholder>验证结果与下一步</Placeholder></p>
            </section>
            <section>
              <p className="section-label">Writing</p>
              <h2>相关文章</h2>
              <p><Placeholder>文章链接</Placeholder></p>
            </section>
            <section>
              <p className="section-label">Links</p>
              <h2>文档与代码</h2>
              <p><Placeholder>GitHub、文档与实验记录</Placeholder></p>
            </section>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
