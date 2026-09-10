"use client";

import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div role="banner" className="nav-bar w-nav">
      <div className="navigation-container">
        <div className="navigation-left-wrapper">
          <a href="/" className="brand w-nav-brand">
            <img
              width="200"
              height="40"
              alt="Violence Prevention Collaborative of Metro Atlanta"
              src="/images/shli-logo_linear__300x80.png"
              className="brand-logo"
            />
          </a>
        </div>
        <div className="navigation-right-wrapper">
          <nav
            role="navigation"
            className={`navigation-menu w-nav-menu${mobileOpen ? " w--nav-menu-open" : ""}`}
          >
            <a href="mailto:bhammond@msm.edu" className="navigation-link w-nav-link">
              Contact
            </a>
          </nav>
          <div
            className="navigation-menu-button w-nav-button"
            aria-label="menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <div className="w-icon-nav-menu" />
          </div>
        </div>
      </div>
    </div>
  );
}
