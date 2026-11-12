import Link from "next/link";
import { WorkCard } from "@/components/work-card";
import { publicProjects, skillGroups } from "@/lib/content";
export default function HomePage() {
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
            implementation overlap. I use personal projects to explore useful
            products, thoughtful interactions, and the unglamorous edge cases
            that make software feel finished.
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
            <p className="eyebrow">Personal projects</p>
            <h2>Things I’ve designed and built</h2>
          </div>
          <p>
            Independent builds and concept projects. Fictional scenarios are
            labeled clearly when they are used.
          </p>
        </div>
        <div className="work-grid">
          {publicProjects.map((item, index) => (
            <WorkCard item={item} index={index} key={item.slug} />
          ))}
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
