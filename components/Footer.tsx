export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        <div className="footer-col footer-col--brand">
          <p className="footer-org-name">Violence Prevention Collaborative of Metro Atlanta</p>
<a href="mailto:bhammond@msm.edu" className="footer-contact-link">
            bhammond@msm.edu
          </a>
        </div>

        <div className="footer-col">
          <div className="overline footer-label">Member Organizations</div>
          <a href="https://satcherinstitute.org" target="_blank" rel="noopener noreferrer" className="footer-link">
            Satcher Health Leadership Institute
          </a>
          <a href="https://100blackmen-atlanta.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
            100 Black Men of Atlanta
          </a>
          <a href="https://thekingcenter.org" target="_blank" rel="noopener noreferrer" className="footer-link">
            The King Center
          </a>
        </div>

        <div className="footer-col">
          <div className="overline footer-label">Get Involved</div>
          <a href="mailto:bhammond@msm.edu" className="footer-link">Contact Us</a>
          <a href="https://satcherinstitute.org" target="_blank" rel="noopener noreferrer" className="footer-link">
            Satcher Institute
          </a>
          <a href="https://healthequitytracker.org" target="_blank" rel="noopener noreferrer" className="footer-link">
            Health Equity Tracker
          </a>
        </div>

      </div>

      <div className="site-footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Violence Prevention Collaborative of Metro Atlanta
        </p>
      </div>
    </footer>
  );
}
