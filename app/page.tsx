import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-intro shell" aria-labelledby="site-title">
        <h1 id="site-title">
          Learning, writing, and building a system for <em>human intention</em>{" "}
          to emerge and become real.
        </h1>
      </section>

      <section className="home-stream shell" aria-label="Latest from MurMur Log">
        <div className="stream-section">
          <div className="stream-heading">
            <h2>文章</h2>
            <Link href="/essays">全部文章</Link>
          </div>
          <Link className="stream-row" href="/essays">
            <span className="placeholder">第一篇文章标题</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="stream-section">
          <div className="stream-heading">
            <h2>项目</h2>
            <Link href="/projects">全部项目</Link>
          </div>
          <Link className="stream-row" href="/projects/arcfold">
            <strong>Arcfold</strong>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
