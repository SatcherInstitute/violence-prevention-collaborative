"use client";

import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div role="banner" className="nav-bar">
      <div className="navigation-container">
        <div className="navigation-left-wrapper">
          <a href="/" className="brand nav-wordmark">
            <span className="nav-wordmark-title">Violence Prevention Collaborative</span>
            <span className="nav-wordmark-sub">of Metro Atlanta</span>
          </a>
        </div>
        <div className="navigation-right-wrapper">
          <nav
            role="navigation"
            className={`navigation-menu${mobileOpen ? " w--nav-menu-open" : ""}`}
          >
            <a href="mailto:bhammond@msm.edu" className="navigation-link">
              Contact
            </a>
          </nav>
          <button
            className="navigation-menu-button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <div className="w-icon-nav-menu" />
          </button>
        </div>
      </div>
    </div>
  );
}
