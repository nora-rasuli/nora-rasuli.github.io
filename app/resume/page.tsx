export const metadata = { title: "Résumé" };
export default function ResumePage() {
  return (
    <main id="main" className="resume-page shell">
      <p className="eyebrow">Résumé</p>
      <h1>Frontend engineering grounded in product clarity</h1>
      <p>
        Four-plus years building React, TypeScript, and Vue interfaces for AI
        products and data-heavy workflows.
      </p>
      <div className="hero-actions">
        <a className="button primary" href="/Nora-Rasuli-Resume.pdf" download>
          Download PDF
        </a>
        <a className="button secondary" href="/Nora-Rasuli-Resume.pdf">
          Open in browser
        </a>
      </div>
    </main>
  );
}
