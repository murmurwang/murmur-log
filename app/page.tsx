import { SiteHeader } from "./components/SiteChrome";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-intro shell" aria-labelledby="site-title">
        <h1 id="site-title">
          Learning, writing, and building a system for human intention{" "}
          to emerge and become real.
        </h1>
      </section>
      <div className="home-stream shell">
        <section className="stream-section" id="thoughts" aria-labelledby="thoughts-title">
          <div className="stream-heading">
            <h2 id="thoughts-title">个人思考</h2>
          </div>
          <p className="stream-description">感受、困惑，以及对自己的理解。</p>
          <Link className="stream-row" href="/posts/finding-direction-through-writing/">
            <strong>在表达中找回方向</strong>
            <time className="post-date" dateTime="2026-11-02">2026.11.02</time>
          </Link>
        </section>
        <section className="stream-section" id="reviews" aria-labelledby="reviews-title">
          <div className="stream-heading">
            <h2 id="reviews-title">工作复盘</h2>
          </div>
          <p className="stream-description">回看具体的工作，找到下一步。</p>
          <Link className="stream-row" href="/posts/work-review-1102/">
            <strong>工作复盘 1102｜研究目标是怎么丢掉的</strong>
            <time className="post-date" dateTime="2026-11-02">2026.11.02</time>
          </Link>
        </section>
        <section className="stream-section" id="projects" aria-labelledby="projects-title">
          <div className="stream-heading">
            <h2 id="projects-title">项目</h2>
          </div>
          <p className="stream-description">正在做的事，以及背后的思考。</p>
          <div className="stream-row"><strong>Arcfold</strong></div>
        </section>
      </div>
    </main>
  );
}
