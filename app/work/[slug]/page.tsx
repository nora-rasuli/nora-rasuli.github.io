import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allWork, getWorkBySlug } from "@/lib/content";
export function generateStaticParams() {
  return allWork.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  return item ? { title: item.title, description: item.summary } : {};
}
export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();
  return (
    <main id="main" className="work-detail shell">
      <Link className="back-link" href="/#work">
        ← All work
      </Link>
      <header className="detail-hero">
        <p className="eyebrow">{item.eyebrow}</p>
        <h1>{item.title}</h1>
        <p>{item.summary}</p>
        <ul className="tag-list" aria-label="Skills demonstrated">
          {item.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </header>
      <div className="detail-layout">
        <article className="story">
          <section>
            <p className="eyebrow">Context</p>
            <h2>The product problem</h2>
            <p>{item.context}</p>
          </section>
          <section>
            <p className="eyebrow">Challenge</p>
            <h2>What made it difficult</h2>
            <p>{item.challenge}</p>
          </section>
          <section>
            <p className="eyebrow">Approach</p>
            <h2>How I approached it</h2>
            <ol>
              {item.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section>
            <p className="eyebrow">Outcome</p>
            <h2>What changed</h2>
            <p>{item.outcome}</p>
          </section>
          {item.confidentialityNote && (
            <aside className="confidentiality">
              <strong>About the visuals</strong>
              <p>{item.confidentialityNote}</p>
            </aside>
          )}
        </article>
        <aside className="evidence-panel">
          <p className="eyebrow">Evidence</p>
          <h2>What is verified</h2>
          {item.evidence.map((proof) => (
            <div key={proof.label}>
              <h3>{proof.label}</h3>
              <p>{proof.detail}</p>
            </div>
          ))}
          {item.links?.map((link) => (
            <a className="text-link" key={link.href} href={link.href}>
              {link.label} ↗
            </a>
          ))}
        </aside>
      </div>
    </main>
  );
}
