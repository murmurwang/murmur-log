import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PageShell, Placeholder } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "项目 — MurMur Log",
  description: "Murphy Wang 正在进行的项目。",
  openGraph: { images: [] },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="page-intro shell">
        <p className="eyebrow">Projects</p>
        <h1>项目</h1>
        <p className="page-deck">持续演进的工作、状态与证据。</p>
      </section>
      <section className="project-list shell" aria-label="项目列表">
        <Link className="project-row" href="/projects/arcfold">
          <span className="index-number">01</span>
          <div>
            <h2>Arcfold</h2>
            <p><Placeholder>一句话介绍</Placeholder></p>
          </div>
          <span className="project-status">In progress</span>
          <Arrow />
        </Link>
      </section>
    </PageShell>
  );
}
