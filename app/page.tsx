import { SiteHeader } from "./components/SiteChrome";
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
          </div>
          <Link className="stream-row" href="/posts/work-review-1102/">
            <strong>工作复盘 1102｜研究目标是怎么丢掉的</strong>
            <time className="post-date" dateTime="2026-11-02">2026.11.02</time>
          </Link>
        </div>

        <div className="stream-section">
          <div className="stream-heading">
            <h2>项目</h2>
          </div>
          <div className="stream-row">
            <strong>Arcfold</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
