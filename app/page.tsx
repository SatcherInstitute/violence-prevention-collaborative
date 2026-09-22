import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EventsList from "@/components/EventsList";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero / Header */}
      <div className="header-wrapper">
        <div className="header-section">
          <div className="vpc-body-container">
            <h1 className="hero-heading vpc-header">
              Violence Prevention Collaborative
              <br />
              of Metro Atlanta
            </h1>

            <h2 className="tagline">
              <em>Bringing science, health systems, and community together to prevent violence</em>
            </h2>

            <div className="w-layout-hflex logo-container">
              <img
                src="/images/kx_600x.webp"
                sizes="120px"
                width="120"
                height="120"
                alt="the king center logo"
                className="vpc-logo tkc"
              />
              <img
                src="/images/shli-msm-logo.png"
                sizes="(max-width: 479px) 100vw, 430px"
                width="430"
                height="120"
                alt="Satcher Institute at Morehouse School of Medicine logo"
                className="vpc-logo shli"
              />
              <img
                src="/images/100-LOGO-5X5-BW---Transparency-white.png"
                alt="100 black men of atlanta logo"
                width="120"
                height="120"
                className="vpc-logo bmoa"
              />
            </div>

            <article id="mission" className="rich-text-block-dark-mode w-richtext">
              <h2>Mission</h2>
              <p>
                The Violence Prevention Collaborative of Metro Atlanta brings
                together community organizations, public health leaders,
                researchers, and civic partners to raise awareness and
                coordinate action around gun violence as a public health
                emergency across the eleven-county metro region.
              </p>
              <p>
                Since 2022, the Collaborative has hosted major regional
                symposiums, conducted community engagement, and developed shared
                data infrastructure to support violence prevention across Metro
                Atlanta. The Collaborative convenes partners, aligns data, and
                amplifies evidence-based approaches to prevent firearm deaths
                and injuries, including homicide, suicide, and unintentional
                injury.
              </p>
              <p>
                By connecting science, health systems, and community leadership,
                the Collaborative aims to build sustained regional infrastructure
                for violence prevention and support strategies that improve
                safety and health across Metro Atlanta.
              </p>
            </article>

            {/* YouTube embed */}
            <div
              style={{ paddingTop: "56.17021276595745%", position: "relative" }}
              className="w-embed-youtubevideo"
            >
              <iframe
                src="https://www.youtube.com/embed/_mP0hm9gHI4?rel=0&controls=1&autoplay=0&mute=0&start=0"
                frameBorder="0"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "auto",
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Reflecting on the Second Annual Violence Prevention Symposium"
              />
            </div>

            <div id="events" style={{ width: "100%" }}><EventsList /></div>

            {/* Member Organizations */}
            <article id="organizations" className="rich-text-block-dark-mode w-richtext">
              <h2>Member Organizations</h2>
              <h3 className="yellow">
                Satcher Institute at Morehouse School of Medicine
              </h3>
              <p>
                The Satcher Institute provides scientific leadership and data strategy for the Collaborative, including the Health Equity Tracker — an accessible tool for analyzing health disparities and gun violence trends across Metro Atlanta.
              </p>
              <h3>100 Black Men of Atlanta</h3>
              <p>
                100 Black Men of Atlanta brings trusted community relationships in neighborhoods most impacted by violence, leading engagement, conflict resolution programming, and the Collaborative&apos;s regional symposiums.
              </p>
              <h3>
                The King Center for Nonviolent Social Change
              </h3>
              <p>
                The King Center grounds the Collaborative&apos;s work in nonviolent principles and values-based leadership, contributing education in conflict resolution and restorative approaches to community safety.
              </p>
              <h3>Public Health Advisors</h3>
              <p>
                Current and former public health leaders from the CDC and Georgia Department of Public Health advise on evidence-based practices, data integration, and regional analysis.
              </p>
              <h2>Our Focus Areas</h2>
              <ul>
                <li><strong>Data &amp; Regional Analysis</strong> — Demographic and geographic analysis across Metro Atlanta to support targeted prevention strategies.</li>
                <li><strong>Education &amp; Training</strong> — Curricula and workshops for students, health professionals, veterans, survivor families, and community leaders.</li>
                <li><strong>Health System &amp; Community Coordination</strong> — Hospital- and community-based interventions that address cycles of violence and suicide risk.</li>
                <li><strong>Public Awareness</strong> — Data-driven communication that frames gun violence as preventable and responsive to coordinated public health action.</li>
              </ul>
            </article>

            {/* Resource Hub Teaser */}
            <div className="resource-hub-teaser">
              <div className="resource-hub-teaser-text">
                <p className="overline" style={{ color: "var(--color-yellow)" }}>Resource Hub</p>
                <h2 className="resource-hub-teaser-heading">
                  Tools, Programs & Partners
                </h2>
                <p className="resource-hub-teaser-body">
                  A curated library of data tools, community programs, training
                  curricula, policy resources, and crisis services — organized
                  to help partners find what they need and connect across Metro
                  Atlanta.
                </p>
              </div>
              <a href="/resources" className="outlined-cta w-inline-block resource-hub-cta">
                <div className="outlined-cta-text">Browse Resources</div>
              </a>
            </div>

          </div>

          {/* Decorative bloom */}
          <img
            src="/images/Bloom-Hero-1.svg"
            loading="lazy"
            alt=""
            className="bloom-image-effect"
          />
        </div>
      </div>

      {/* Connect section — orgs + contact */}
      <section id="contact" className="connect-section">
        <div className="connect-inner">
          <p className="overline connect-overline">Connect</p>
          <h2 className="connect-heading">Member Organizations</h2>

          <div className="connect-org-grid">
            <a href="https://satcherinstitute.org" target="_blank" rel="noopener noreferrer" className="connect-org-card">
              <img src="/images/SHLI_WORDMARKS_SHLI_white_H.avif" alt="Satcher Institute at Morehouse School of Medicine" className="connect-org-logo shli" />
              <div className="connect-org-name">Satcher Institute at Morehouse School of Medicine</div>
              <div className="connect-org-link">satcherinstitute.org ↗</div>
            </a>
            <a href="https://100blackmen-atlanta.org/" target="_blank" rel="noopener noreferrer" className="connect-org-card">
              <img src="/images/100LOGO5X5BW-Transparency-white.webp" alt="100 Black Men of Atlanta" className="connect-org-logo bmoa" />
              <div className="connect-org-name">100 Black Men of Atlanta Inc.</div>
              <div className="connect-org-link">100blackmen-atlanta.org ↗</div>
            </a>
            <a href="https://thekingcenter.org" target="_blank" rel="noopener noreferrer" className="connect-org-card">
              <img src="/images/kx_600x.webp" alt="The King Center for Nonviolent Social Change" className="connect-org-logo tkc" />
              <div className="connect-org-name">The King Center for Nonviolent Social Change</div>
              <div className="connect-org-link">thekingcenter.org ↗</div>
            </a>
          </div>

          <div className="connect-contact">
            <h2 className="connect-heading">Contact</h2>
            <p className="connect-body">For general inquiries or questions about this website:</p>
            <a href="mailto:bhammond@msm.edu" className="contact-email">bhammond@msm.edu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
