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
        <div className="hero-main">
          <p className="eyebrow">Nora Rasuli · Frontend/UI Engineer</p>
          <h1 id="hero-title">I make complicated products feel simple.</h1>
        </div>
        <div className="hero-aside">
          <p>
            I’m a Bay Area frontend engineer working where product design and
            implementation overlap. Recently, that has meant AI review tools,
            dense data, and the unglamorous edge cases that make software feel
            finished.
          </p>
          <p className="availability">
            Open to frontend and design-engineering roles.
          </p>
          <div className="hero-actions">
            <a href="#work">See my work ↓</a>
            <Link href="/resume/">Résumé ↗</Link>
          </div>
        </div>
      </section>
      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A few things I’ve worked through</h2>
          </div>
          <p>
            Professional work, explained without confidential product screens.
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
              <h2>Where I’ve been</h2>
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
            <h2>What I work with</h2>
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
            <h2>Things I make in public</h2>
          </div>
          <p>
            Experiments, useful tools, and concept products built outside work.
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
          <h2>I care about the part after the mockup.</h2>
        </div>
        <div>
          <p>
            I’m Nora, a frontend/UI engineer in the San Francisco Bay Area. I
            like turning a promising design into the real thing: responsive,
            keyboard-friendly, fast, and still coherent when the data gets
            weird.
          </p>
          <p>
            I’m happiest on small product teams where I can ask why, sketch a
            better interaction, build it, and stay around long enough to polish
            it.
          </p>
        </div>
      </section>
    </main>
  );
}
