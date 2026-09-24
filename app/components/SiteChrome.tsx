import type { ReactNode } from "react";
import Link from "next/link";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="MurMur Log home">
        MurMur <i>Log</i>
      </Link>
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
