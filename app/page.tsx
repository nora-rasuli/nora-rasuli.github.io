import Link from "next/link";
import { WorkCard } from "@/components/work-card";
import { professionalWork, publicProjects, skillGroups } from "@/lib/content";
export default function HomePage() {
  const featured = publicProjects.filter((item) => item.status === "featured");
  const earlier = publicProjects.filter(
    (item) => item.status === "earlier-work",
  );
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <p className="eyebrow">Frontend/UI Engineer · San Francisco Bay Area</p>
        <h1 id="hero-title">
          I build interfaces that make complex systems <em>understandable.</em>
        </h1>
        <p className="hero-copy">
          Four-plus years shipping React, TypeScript, and Vue products—from
          zero-to-one GenAI workflows to data-heavy geospatial tools—with
          accessibility and performance built in.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore selected work
          </a>
          <Link className="button secondary" href="/resume/">
            View résumé
          </Link>
        </div>
        <dl className="hero-proof">
          <div>
            <dt>4+</dt>
            <dd>years building product UI</dd>
          </div>
          <div>
            <dt>2</dt>
            <dd>zero-to-one GenAI products</dd>
          </div>
          <div>
            <dt>30%</dt>
            <dd>measured load-time improvement</dd>
          </div>
        </dl>
      </section>
      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Products shaped from ambiguity to production</h2>
          </div>
          <p>
            Verified scope and outcomes, with proprietary visuals and customer
            details intentionally omitted.
          </p>
        </div>
        <div className="work-grid">
          {professionalWork.map((item, index) => (
            <WorkCard item={item} index={index} key={item.slug} />
          ))}
        </div>
      </section>
      <section className="section contrast" id="experience">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Engineering with product judgment</h2>
            </div>
          </div>
          <div className="timeline">
            <article>
              <div>
                <p>2024—Present</p>
                <h3>UI Engineer I → UI Engineer II</h3>
                <p>eGain Corporation</p>
              </div>
              <p>
                First frontend engineer on GenAI products for knowledge quality
                and gap discovery. Built complex review workflows in React and
                TypeScript.
              </p>
            </article>
            <article>
              <div>
                <p>2022—2024</p>
                <h3>Frontend Developer</h3>
                <p>GHD Group</p>
              </div>
              <p>
                Rebuilt a civil and environmental platform in Vue and improved
                performance for large geospatial datasets.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Craft, systems, and product delivery</h2>
          </div>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Public builds</p>
            <h2>Small products with inspectable decisions</h2>
          </div>
          <p>
            New flagship work will be added as it ships. Existing work is
            presented with honest scope.
          </p>
        </div>
        <div className="public-grid">
          {featured.map((item, index) => (
            <WorkCard item={item} index={index} key={item.slug} />
          ))}
        </div>
        <details className="earlier-work">
          <summary>View earlier work</summary>
          <div className="earlier-grid">
            {earlier.map((item) => (
              <article key={item.slug}>
                <p className="eyebrow">Earlier work</p>
                <h3>
                  <Link href={`/work/${item.slug}/`}>{item.title}</Link>
                </h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </details>
      </section>
      <section className="section about shell" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>A frontend engineer who likes the difficult middle</h2>
        </div>
        <div>
          <p>
            I’m Nora Rasuli, a frontend/UI engineer based in the San Francisco
            Bay Area. I’m drawn to products where the interface translates
            complex models, dense data, or unfamiliar workflows into something
            people can understand and trust.
          </p>
          <p>
            I work across product thinking, interaction design, component
            architecture, accessibility, and performance—especially the states
            between the mockup and the happy path.
          </p>
        </div>
      </section>
    </main>
  );
}
