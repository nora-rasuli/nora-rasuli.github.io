import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>This page took a different path.</h1>
      <p>The link may be outdated, but the work is still available.</p>
      <Link className="button primary" href="/">
        Return home
      </Link>
    </main>
  );
}
