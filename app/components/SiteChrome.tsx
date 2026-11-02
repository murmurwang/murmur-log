import type { ReactNode } from "react";
import Link from "next/link";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className={`site-header shell${home ? " site-header--home" : ""}`}>
      {home ? (
        <div>
          <h1 className="site-title"><Link href="/">MurMur Log</Link></h1>
          <p className="site-description">Learning, writing, and building a system for human intention to emerge and become real.</p>
        </div>
      ) : (
        <Link className="wordmark" href="/" aria-label="MurMur Log home">MurMur Log</Link>
      )}
      <nav aria-label="栏目导航">
        <Link href="/#thoughts">个人思考</Link>
        <Link href="/#reviews">工作复盘</Link>
        <Link href="/#projects">项目</Link>
      </nav>
    </header>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
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
