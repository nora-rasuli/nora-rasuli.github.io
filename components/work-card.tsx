import Link from "next/link";
import type { WorkStory } from "@/lib/content";
export function WorkCard({ item, index }: { item: WorkStory; index: number }) {
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
      </div>
      <Link
        className="work-arrow"
        href={`/work/${item.slug}/`}
        aria-label={`Read ${item.title}`}
      >
        <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
