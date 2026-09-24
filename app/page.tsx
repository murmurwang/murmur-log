import { SiteHeader } from "./components/SiteChrome";

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
          <div className="stream-row">
            <span className="placeholder">第一篇文章标题</span>
          </div>
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
