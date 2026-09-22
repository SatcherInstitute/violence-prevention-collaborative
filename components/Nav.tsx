"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div role="banner" className="nav-bar">
      <div className="navigation-container">
        <div className="navigation-left-wrapper">
          <a href="/" className="nav-wordmark">
            <span className="nav-wordmark-title">Violence Prevention Collaborative</span>
            <span className="nav-wordmark-sub">of Metro Atlanta</span>
          </a>
        </div>
        <div className="navigation-right-wrapper">
          <nav
            role="navigation"
            className={`navigation-menu${mobileOpen ? " w--nav-menu-open" : ""}`}
          >
            {isHome ? (
              <>
                <a href="#events" className="navigation-link">Events</a>
                <a href="/resources" className="navigation-link">Resources</a>
              </>
            ) : (
              <a href="/" className="navigation-link">Home</a>
            )}
            <a href={isHome ? "#contact" : "/#contact"} className="navigation-link">Contact</a>
          </nav>
          <ThemeToggle />
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
