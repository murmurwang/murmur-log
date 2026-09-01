import type { Metadata } from "next";
import { PageShell, Placeholder } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "关于 — MurMur Log",
  description: "关于 Murphy Wang 与 MurMur Log。",
  openGraph: { images: [] },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-intro shell">
        <p className="eyebrow">About</p>
        <h1>关于</h1>
      </section>
      <section className="about-grid shell">
        <h2>Murphy Wang</h2>
        <div className="about-copy">
          <p><Placeholder>个人介绍</Placeholder></p>
          <p><Placeholder>为什么写 MurMur Log</Placeholder></p>
          <p><Placeholder>GitHub 与其他入口</Placeholder></p>
        </div>
      </section>
    </PageShell>
  );
}
