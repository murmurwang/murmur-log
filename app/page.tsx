import { Arrow, SiteFooter, SiteHeader } from "./components/SiteChrome";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" aria-labelledby="site-title">
        <p className="eyebrow">A personal log by Murphy Wang</p>
        <h1 id="site-title">
          Learning, writing, and building
          <br />
          a system for <em>human intention</em>
          <br />
          to emerge and become real.
        </h1>
        <Link className="quiet-link" href="/projects/arcfold">
          Currently building: Arcfold <Arrow />
        </Link>
      </section>

      <section className="index-grid shell" aria-label="Site sections">
        <Link className="index-card" href="/essays">
          <span className="index-number">01</span>
          <span>
            <strong>文章</strong>
            <small>完整的观点与阶段结论</small>
          </span>
          <Arrow />
        </Link>
        <Link className="index-card" href="/projects">
          <span className="index-number">02</span>
          <span>
            <strong>项目</strong>
            <small>持续演进的工作与证据</small>
          </span>
          <Arrow />
        </Link>
        <Link className="index-card" href="/about">
          <span className="index-number">03</span>
          <span>
            <strong>关于</strong>
            <small>Murphy 与这份长期实践</small>
          </span>
          <Arrow />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
