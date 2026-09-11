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

            <article className="rich-text-block-dark-mode w-richtext">
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

            <EventsList />

            {/* Member Organizations */}
            <article className="rich-text-block-dark-mode w-richtext">
              <h2>Member Organizations</h2>
              <h3 className="yellow">
                Satcher Institute at Morehouse School of Medicine
              </h3>
              <p>
                The Satcher Institute at Morehouse School of Medicine advances health
                equity research, policy, leadership development, and data
                transparency. Within the Collaborative, the Satcher Institute provides scientific
                leadership and public health framing for violence prevention
                efforts. The Institute leads data strategy and dashboard
                development, integrates violence prevention into medical and
                public health education, and connects regional efforts to broader
                national health equity research. The Institute&apos;s Health
                Equity Tracker supports this work by providing accessible,
                data-driven analysis of health disparities and prevention
                opportunities, including gun violence.
              </p>
              <p>&nbsp;</p>
              <h3>100 Black Men of Atlanta</h3>
              <p>
                100 Black Men of Atlanta is a longstanding leader in mentoring,
                youth development, and civic engagement, with deep and trusted
                relationships in communities most impacted by violence. Within
                the Collaborative, the organization leads community engagement
                and conflict resolution programming, elevates youth voice and
                lived experience, and convenes regional symposiums and awareness
                events. Its Anti-Gun Violence initiatives bridge public health
                strategy with on-the-ground community action.
              </p>
              <p>&nbsp;</p>
              <h3>
                The Martin Luther King Jr. Center for Nonviolent Social Change
              </h3>
              <p>
                Founded on the philosophy and teachings of Dr. Martin Luther
                King Jr., The King Center advances nonviolence as a practical
                framework for social change. In the Collaborative, The King
                Center anchors violence prevention efforts in values-based
                leadership and nonviolent principles, provides education on
                conflict resolution and restorative approaches, and supports
                public dialogue grounded in dignity and respect.
              </p>
              <p>&nbsp;</p>
              <h3>Public Health Advisors</h3>
              <p>
                The Collaborative includes current and former public health
                leaders from federal, state, and local agencies, including
                professionals with experience at the Centers for Disease Control
                and Prevention and the Georgia Department of Public Health.
                These advisors help ensure alignment with evidence-based public
                health practices, guide data integration and regional analysis,
                and support evaluation to promote measurable impact.
              </p>
              <p>&nbsp;</p>
              <h2>
                <strong>Our Focus Areas</strong>
              </h2>
              <h3 className="yellow">
                <strong>Data &amp; Regional Analysis</strong>
              </h3>
              <p>
                Coordinating demographic and geographic analysis across Metro
                Atlanta to support targeted, measurable prevention strategies.
              </p>
              <p>&nbsp;</p>
              <h3>
                <strong>Education &amp; Training</strong>
              </h3>
              <p>
                Developing curricula and workshops for students, health
                professionals, veterans, survivor families, and community
                leaders.
              </p>
              <p>&nbsp;</p>
              <h3>
                <strong>Health System &amp; Community Coordination</strong>
              </h3>
              <p>
                Supporting hospital- and community-based intervention approaches
                that address cycles of violence and suicide risk.
              </p>
              <p>&nbsp;</p>
              <h3>
                <strong>Public Awareness</strong>
              </h3>
              <p>
                Promoting clear, data-driven communication that frames gun
                violence as preventable and responsive to coordinated public
                health action.
              </p>
            </article>

            {/* Get Involved */}
            <article className="rich-text-block-dark-mode w-richtext">
              <h2>Get Involved</h2>
              <p>
                The Collaborative welcomes anyone committed to preventing
                violence across Metro Atlanta, including organizations,
                researchers, health professionals, educators, policymakers, and
                community members.
              </p>
              <p>
                To learn more or explore partnership opportunities, please{" "}
                <a href="mailto:bhammond@msm.edu" className="dark-mode-link">
                  reach out by email
                </a>{" "}
                or visit our member orgs&apos; websites using the buttons below.
              </p>
              <p>&nbsp;</p>
              <blockquote>
                Together, we can strengthen coordination, expand awareness, and
                support prevention efforts across Metro Atlanta.
              </blockquote>
            </article>

            {/* Partner CTA Cards */}
            <div className="w-layout-hflex vpc-cta-buttons-container">
              <div className="w-layout-grid vpc-card-grid">
                <div className="vpc-card shli">
                  <div className="vpc-logo-frame">
                    <img
                      src="/images/SHLI_WORDMARKS_SHLI_white_H.avif"
                      alt="Satcher Institute at Morehouse School of Medicine logo"
                      width="200"
                      height="120"
                      className="vpc-logo-card shli"
                    />
                  </div>
                  <div className="org-and-button-container">
                    <h6 className="h6-heading vpc-card-heading">
                      Satcher Institute
                    </h6>
                    <a
                      href="https://satcherinstitute.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outlined-cta w-inline-block"
                    >
                      <div className="outlined-cta-text">Learn More</div>
                      <div className="open-in-new-icon shli-blue w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="currentColor"
                        >
                          <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="vpc-card bmoa">
                  <div className="vpc-logo-frame">
                    <img
                      src="/images/100LOGO5X5BW-Transparency-white.webp"
                      alt="100 black men of atlanta logo"
                      width="120"
                      height="120"
                      className="vpc-logo-card bmoa"
                    />
                  </div>
                  <div className="org-and-button-container">
                    <h6 className="h6-heading vpc-card-heading">
                      100 Black Men of Atlanta Inc.
                    </h6>
                    <a
                      href="https://100blackmen-atlanta.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outlined-cta w-inline-block"
                    >
                      <div className="outlined-cta-text">Learn More</div>
                      <div className="open-in-new-icon shli-blue w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="currentColor"
                        >
                          <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="vpc-card tkc">
                  <div className="vpc-logo-frame">
                    <img
                      src="/images/kx_600x.webp"
                      sizes="(max-width: 479px) 47vw, 120px"
                      width="120"
                      height="120"
                      alt="the king center logo"
                      className="vpc-logo-card tkc"
                    />
                  </div>
                  <div className="org-and-button-container">
                    <h6 className="h6-heading vpc-card-heading">
                      The King Center
                    </h6>
                    <a
                      href="https://thekingcenter.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outlined-cta w-inline-block"
                    >
                      <div className="outlined-cta-text">Learn More</div>
                      <div className="open-in-new-icon shli-blue w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="currentColor"
                        >
                          <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
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

      <Footer />
    </>
  );
}
