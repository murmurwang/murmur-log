import type { ReactNode } from "react";
import Link from "next/link";
import { ContactLinks } from "./ContactLinks";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader({ home = false, section }: { home?: boolean; section?: string }) {
  return (
    <>
    <header className={`site-header shell${home ? " site-header--home" : ""}`}>
      {home ? (
        <h1 className="site-title"><Link href="/">MurMur Log</Link></h1>
      ) : (
        <Link className="wordmark" href="/" aria-label="MurMur Log home">MurMur Log</Link>
      )}
      <nav aria-label="栏目导航">
        <a href={home ? "#projects" : "/#projects"} aria-current={section === "projects" ? "location" : undefined}>开源项目</a>
        <span aria-hidden="true">|</span>
        <a href={home ? "#thoughts" : "/#thoughts"} aria-current={section === "thoughts" ? "location" : undefined}>个人思考</a>
      </nav>
    </header>
    {home && <div className="home-intro shell">
      <p className="site-description">Agent 独立开发者，<br />构建让人的意图逐渐清晰并成为现实的系统，也在首先让自己成为这个系统。</p>
      <ContactLinks />
    </div>}
    </>
  );
}

export function PageShell({ children, section }: { children: ReactNode; section?: string }) {
  return (
    <main>
      <SiteHeader section={section} />
      {children}
    </main>
  );
}

export function Placeholder({ children = "待写" }: { children?: ReactNode }) {
  return <span className="placeholder">{children}</span>;
}

export function ArticleIcon() {
  return (
    <svg className="article-icon" width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
      <path d="M3 1.5h6l4 4v11H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9 1.5v4h4M5.5 9h5M5.5 12h5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectIcon() {
  return (
    <svg className="project-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 5h6l2 2h8v9H2V5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
