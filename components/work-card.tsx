import Link from "next/link";
import type { WorkStory } from "@/lib/content";
export function WorkCard({ item, index }: { item: WorkStory; index: number }) {
  return (
    <article className="work-card">
      <div className="card-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      <p className="eyebrow">{item.eyebrow}</p>
      <h3>
        <Link href={`/work/${item.slug}/`}>{item.title}</Link>
      </h3>
      <p>{item.summary}</p>
      <ul className="tag-list" aria-label="Skills demonstrated">
        {item.skills.slice(0, 4).map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <Link className="text-link" href={`/work/${item.slug}/`}>
        Read the story <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
