import type { Metadata } from "next";
import { PageShell, Placeholder } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "文章 — MurMur Log",
  description: "Murphy Wang 的文章。",
  openGraph: { images: [] },
};

export default function EssaysPage() {
  return (
    <PageShell>
      <section className="page-intro shell">
        <p className="eyebrow">Essays</p>
        <h1>文章</h1>
        <p className="page-deck">观点、过程中的思考与阶段结论。</p>
      </section>
      <section className="empty-state shell" aria-label="文章列表">
        <span className="index-number">001</span>
        <div>
          <h2><Placeholder>第一篇文章标题</Placeholder></h2>
          <p><Placeholder>摘要与发布日期</Placeholder></p>
        </div>
      </section>
    </PageShell>
  );
}
