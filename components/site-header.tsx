import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="NR — Nora Rasuli, home">
          NR<span aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/resume/">Résumé</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
