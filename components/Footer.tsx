function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm4.5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        <div className="footer-col footer-col--brand">
          <p className="footer-org-name">
            Violence Prevention Collaborative
            <br />
            <span className="footer-org-subtitle">of Metro Atlanta</span>
          </p>
          <div className="footer-email-section">
            <div className="overline footer-label">Email Us</div>
            <a href="mailto:bhammond@msm.edu" className="footer-email-link">
              <IconEmail />
              bhammond@msm.edu
            </a>
          </div>
        </div>

        <div className="footer-col">

          <div className="footer-org-group">
            <a href="https://satcherinstitute.org" target="_blank" rel="noopener noreferrer" className="footer-link">
              Satcher Institute
            </a>
            <div className="footer-social-row">
              <a href="https://www.instagram.com/satcherhealth/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Satcher Institute on Instagram"><IconInstagram /></a>
              <a href="https://www.linkedin.com/company/satcherhealth/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Satcher Institute on LinkedIn"><IconLinkedIn /></a>
              <a href="https://www.youtube.com/@SatcherHealth" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Satcher Institute on YouTube"><IconYouTube /></a>
            </div>
          </div>

          <div className="footer-org-group">
            <a href="https://100blackmen-atlanta.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
              100 Black Men of Atlanta
            </a>
            <div className="footer-social-row">
              <a href="https://www.instagram.com/100blackmenatl/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="100 Black Men of Atlanta on Instagram"><IconInstagram /></a>
              <a href="https://www.facebook.com/100BlackMenofAtlanta/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="100 Black Men of Atlanta on Facebook"><IconFacebook /></a>
              <a href="https://www.linkedin.com/company/100blackmenatlanta/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="100 Black Men of Atlanta on LinkedIn"><IconLinkedIn /></a>
              <a href="https://www.youtube.com/c/100BlackMenofAtlantaInc" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="100 Black Men of Atlanta on YouTube"><IconYouTube /></a>
            </div>
          </div>

          <div className="footer-org-group">
            <a href="https://thekingcenter.org" target="_blank" rel="noopener noreferrer" className="footer-link">
              The King Center
            </a>
            <div className="footer-social-row">
              <a href="https://www.facebook.com/thekingcenter" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="The King Center on Facebook"><IconFacebook /></a>
              <a href="https://www.linkedin.com/company/the-king-center-for-nonviolent-social-change/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="The King Center on LinkedIn"><IconLinkedIn /></a>
              <a href="https://www.youtube.com/user/TheKingCenter" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="The King Center on YouTube"><IconYouTube /></a>
            </div>
          </div>
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
