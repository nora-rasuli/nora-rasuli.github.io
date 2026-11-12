export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Let’s build something useful</p>
          <p className="footer-heading">
            Available for frontend, UI, and product-engineering opportunities.
          </p>
        </div>
        <div className="footer-links">
          <a href="mailto:nora.rasuli@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/nora-rasuli/">LinkedIn</a>
          <a href="https://github.com/nora-rasuli">GitHub</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Nora Rasuli</p>
      </div>
    </footer>
  );
}
