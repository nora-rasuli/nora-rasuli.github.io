import Link from "next/link";
import type { WorkStory } from "@/lib/content";
export function WorkCard({ item, index }: { item: WorkStory; index: number }) {
  const demo = item.links?.find((link) => link.kind === "demo");
  const source = item.links?.find((link) => link.kind === "source");

  return (
    <article className="work-card">
      <p className="card-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div className="work-card-copy">
        <p className="eyebrow">{item.eyebrow}</p>
        <h3>
          <Link href={`/work/${item.slug}/`}>{item.title}</Link>
        </h3>
        <p>{item.summary}</p>
        <p className="work-tools">{item.skills.slice(0, 4).join(" · ")}</p>
        <div className="work-actions" aria-label={`${item.title} links`}>
          {demo && (
            <a className="demo-link" href={demo.href}>
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
          <Link href={`/work/${item.slug}/`}>Case study</Link>
          {source && <a href={source.href}>GitHub ↗</a>}
        </div>
      </div>
      {demo ? (
        <a
          className="work-arrow"
          href={demo.href}
          aria-label={`Open the ${item.title} live demo`}
        >
          <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <Link
          className="work-arrow"
          href={`/work/${item.slug}/`}
          aria-label={`Read ${item.title}`}
        >
          <span aria-hidden="true">↗</span>
        </Link>
      )}
    </article>
  );
}
