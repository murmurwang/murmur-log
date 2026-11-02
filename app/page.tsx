import { ArticleIcon, SiteHeader } from "./components/SiteChrome";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <SiteHeader home />
      <div className="home-stream shell">
        <section className="stream-section" id="thoughts" aria-labelledby="thoughts-title">
          <div className="stream-heading">
            <h2 id="thoughts-title">个人思考</h2>
          </div>
          <Link className="stream-row" href="/posts/finding-direction-through-writing/">
            <span className="article-title"><ArticleIcon /><span>一个工作复盘的方式</span></span>
            <time className="post-date" dateTime="2026-11-02">2026.11.02</time>
          </Link>
        </section>
        <section className="stream-section" id="reviews" aria-labelledby="reviews-title">
          <div className="stream-heading">
            <h2 id="reviews-title">工作复盘</h2>
          </div>
          <Link className="stream-row" href="/posts/work-review-1102/">
            <span className="article-title"><ArticleIcon /><span>工作复盘 1102｜目标是怎么弄丢的</span></span>
            <time className="post-date" dateTime="2026-11-02">2026.11.02</time>
          </Link>
        </section>
        <section className="stream-section" id="projects" aria-labelledby="projects-title">
          <div className="stream-heading">
            <h2 id="projects-title">项目</h2>
          </div>
          <div className="stream-row"><strong>Arcfold</strong></div>
        </section>
      </div>
    </main>
  );
}
