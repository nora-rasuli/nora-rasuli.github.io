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
  const currentIndex = allWork.findIndex((work) => work.slug === slug);
  const previous = currentIndex > 0 ? allWork[currentIndex - 1] : undefined;
  const next =
    currentIndex < allWork.length - 1 ? allWork[currentIndex + 1] : undefined;
  const demo = item.links?.find((link) => link.kind === "demo");
  const source = item.links?.find((link) => link.kind === "source");
  return (
    <main id="main" className="work-detail shell">
      <Link className="back-link" href="/#work">
        ← All work
      </Link>
      <header className="detail-hero">
        <p className="eyebrow">{item.eyebrow}</p>
        <h1>{item.title}</h1>
        <p>{item.summary}</p>
        <div className="detail-actions">
          {demo && (
            <a className="button primary" href={demo.href}>
              Open live demo ↗
            </a>
          )}
          {source && (
            <a className="button secondary" href={source.href}>
              View GitHub ↗
            </a>
          )}
        </div>
        {item.disclosure && <p className="disclosure">{item.disclosure}</p>}
      </header>
      <div className="detail-layout">
        <article className="story">
          {item.userStory && (
            <section>
              <p className="eyebrow">The user</p>
              <h2>{item.user}</h2>
              <blockquote>{item.userStory}</blockquote>
              {item.scenario && <p>{item.scenario}</p>}
            </section>
          )}
          <section>
            <p className="eyebrow">Context</p>
            <h2>The product problem</h2>
            <p>{item.context}</p>
          </section>
          {item.demoPath && (
            <section>
              <p className="eyebrow">Product walkthrough</p>
              <h2>The shortest path to value</h2>
              <ol className="demo-steps">
                {item.demoPath.map((step, index) => (
                  <li key={step}>
                    <span aria-hidden="true">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          )}
          <section>
            <p className="eyebrow">Challenge</p>
            <h2>What made it difficult</h2>
            <p>{item.challenge}</p>
          </section>
          <section>
            <p className="eyebrow">Approach</p>
            <h2>How I built it</h2>
            <ol>
              {item.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          {item.decisions && (
            <section>
              <p className="eyebrow">Product decisions</p>
              <h2>What I chose—and why</h2>
              <div className="decision-list">
                {item.decisions.map((decision) => (
                  <div key={decision.title}>
                    <h3>{decision.title}</h3>
                    <p>{decision.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
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
        <aside className="evidence-panel project-facts">
          <p className="eyebrow">Project details</p>
          <dl>
            <div>
              <dt>Type</dt>
              <dd>{item.projectType ?? "Personal project"}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{item.role ?? "Frontend engineering"}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{item.timeline ?? "Independent project"}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{item.skills.join(", ")}</dd>
            </div>
          </dl>
        </aside>
      </div>
      <nav className="project-pagination" aria-label="Project navigation">
        {previous ? (
          <Link href={`/work/${previous.slug}/`}>
            <span>Previous project</span>
            {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}/`}>
            <span>Next project</span>
            {next.title}
          </Link>
        ) : (
          <Link href="/#work">
            <span>Back to</span>
            All projects
          </Link>
        )}
      </nav>
    </main>
  );
}
