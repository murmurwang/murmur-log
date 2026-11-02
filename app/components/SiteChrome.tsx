import type { ReactNode } from "react";
import Link from "next/link";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader({ home = false, section }: { home?: boolean; section?: string }) {
  return (
    <header className={`site-header shell${home ? " site-header--home" : ""}`}>
      {home ? (
        <h1 className="site-title"><Link href="/">MurMur Log</Link></h1>
      ) : (
        <Link className="wordmark" href="/" aria-label="MurMur Log home">MurMur Log</Link>
      )}
      <nav aria-label="栏目导航">
        <Link href="/projects/" aria-current={section === "projects" ? "page" : undefined}>项目</Link>
        <span aria-hidden="true">|</span>
        <Link href="/reviews/" aria-current={section === "reviews" ? "page" : undefined}>工作复盘</Link>
        <span aria-hidden="true">|</span>
        <Link href="/thoughts/" aria-current={section === "thoughts" ? "page" : undefined}>个人思考</Link>
      </nav>
    </header>
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
