import type { ReactNode } from "react";
import Link from "next/link";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="MurMur Log home">
        MurMur <i>Log</i>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/about">关于</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <span>MurMur Log</span>
      <span className="footer-links">
        <Link href="/feed.xml">RSS</Link>
      </span>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function Placeholder({ children = "待写" }: { children?: ReactNode }) {
  return <span className="placeholder">{children}</span>;
}
