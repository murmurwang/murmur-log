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
