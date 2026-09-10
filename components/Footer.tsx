const instagramRowOne = [
  { src: "/images/JH-bikes.png", srcSet: "/images/JH-bikes-p-500.png 500w, /images/JH-bikes-p-800.png 800w, /images/JH-bikes.png 1000w", sizes: "(max-width: 1000px) 100vw, 1000px" },
  { src: "/images/SHLI-in-action-10.jpg", srcSet: "/images/SHLI-in-action-10-p-500.jpg 500w, /images/SHLI-in-action-10-p-800.jpg 800w, /images/SHLI-in-action-10.jpg 4000w", sizes: "(max-width: 4000px) 100vw, 4000px" },
  { src: "/images/SAC.png", srcSet: "/images/SAC-p-500.png 500w, /images/SAC.png 750w", sizes: "(max-width: 750px) 100vw, 750px" },
  { src: "/images/SHLI-in-action-16.jpg", srcSet: "/images/SHLI-in-action-16-p-500.jpg 500w, /images/SHLI-in-action-16-p-800.jpg 800w, /images/SHLI-in-action-16.jpg 4000w", sizes: "(max-width: 4000px) 100vw, 4000px" },
  { src: "/images/IG---9.png", srcSet: "/images/IG---9-p-500.png 500w, /images/IG---9-p-800.png 800w, /images/IG---9.png 1080w", sizes: "(max-width: 1080px) 100vw, 1080px" },
];

const instagramRowTwo = [
  { src: "/images/SHLI-in-action-19.jpg", srcSet: "/images/SHLI-in-action-19-p-500.jpg 500w, /images/SHLI-in-action-19-p-800.jpg 800w, /images/SHLI-in-action-19.jpg 3000w", sizes: "(max-width: 3000px) 100vw, 3000px", extraClass: "" },
  { src: "/images/SHLI-table2.png", srcSet: "/images/SHLI-table2-p-500.png 500w, /images/SHLI-table2-p-800.png 800w, /images/SHLI-table2.png 1000w", sizes: "(max-width: 1000px) 100vw, 1000px", extraClass: "bottom-row" },
  { src: "/images/SHLI-in-action-5.jpeg", srcSet: "/images/SHLI-in-action-5-p-500.jpeg 500w, /images/SHLI-in-action-5-p-800.jpeg 800w, /images/SHLI-in-action-5.jpeg 3024w", sizes: "(max-width: 3024px) 100vw, 3024px", extraClass: "bottom-row" },
  { src: "/images/SHLI-table.png", srcSet: "/images/SHLI-table-p-500.png 500w, /images/SHLI-table.png 750w", sizes: "(max-width: 750px) 100vw, 750px", extraClass: "bottom-row" },
  { src: "/images/SHLI-in-action-20.jpeg", srcSet: "/images/SHLI-in-action-20-p-500.jpeg 500w, /images/SHLI-in-action-20-p-800.jpeg 800w, /images/SHLI-in-action-20.jpeg 4032w", sizes: "(max-width: 4032px) 100vw, 4032px", extraClass: "bottom-row" },
];

export default function Footer() {
  return (
    <>
      {/* Instagram photo strip */}
      <div className="footer footer-insta">
        <div className="container insta-container">
          <div className="insta-row row-1">
            {instagramRowOne.map((img, i) => (
              <div key={i} className="insta-post-wrap">
                <img src={img.src} srcSet={img.srcSet} sizes={img.sizes} alt="" className="insta-post-image" />
              </div>
            ))}
          </div>
          <div className="insta-row row-2">
            {instagramRowTwo.map((img, i) => (
              <div key={i} className="insta-post-wrap">
                <img src={img.src} srcSet={img.srcSet} sizes={img.sizes} alt="" className={`insta-post-image${img.extraClass ? " " + img.extraClass : ""}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="insta-section-line">
          <a href="https://x.com/SatcherHealth/" target="_blank" rel="noopener noreferrer" className="social-wrap platform-x w-inline-block">
            <img alt="" src="/images/x-icon.png" className="social-icon" />
            <div className="jumbo-paragraph social-white">@SatcherHealth</div>
          </a>
          <a href="https://www.instagram.com/satcherhealth/" target="_blank" rel="noopener noreferrer" className="social-wrap platform-ig left-social w-inline-block">
            <img alt="" src="/images/instagram.svg" className="social-icon" />
            <div className="jumbo-paragraph social-white">@satcherhealth</div>
          </a>
          <a href="https://www.linkedin.com/company/satcherhealth/" target="_blank" rel="noopener noreferrer" className="social-wrap platform-li w-inline-block">
            <img alt="" src="/images/004-linkedin-logo-button.svg" className="social-icon" />
            <div className="jumbo-paragraph social-white">/company/satcherhealth</div>
          </a>
          <a href="https://www.youtube.com/@SatcherHealth" target="_blank" rel="noopener noreferrer" className="social-wrap platform-yt left-social w-inline-block">
            <img alt="" src="/images/youtube.svg" className="social-icon" />
            <div className="jumbo-paragraph social-white">@SatcherHealth</div>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer footer-section">
        <div className="container footer-container">
          <div className="column">
            <a href="/" className="footer-brand w-nav-brand">
              <img
                src="/images/shli-msm-logo.png"
                srcSet="/images/shli-msm-logo-p-500.png 500w, /images/shli-msm-logo-p-800.png 800w, /images/shli-msm-logo.png 3150w"
                sizes="(max-width: 479px) 98vw, (max-width: 767px) 99vw, 100vw"
                alt="Satcher Health Leadership Institute at Morehouse School of Medicine"
                className="footer-logo"
              />
            </a>
          </div>
          <div className="column">
            <div className="overline footer-label">Contact</div>
            <div className="footer-contact-text">
              720 Westview Drive SW
              <br />
              Atlanta, GA 30310
            </div>
            <div className="_30px-spacer" />
            <div className="footer-contact-text">
              T: (404) 752-8654
              <br />
              F: (404) 752-1040
            </div>
          </div>
          <div className="column">
            <div className="overline footer-label">Reports</div>
            <a href="https://satcherinstitute.org/impact-reports/publications" target="_blank" rel="noopener noreferrer" className="footer-link">Selected Publications</a>
            <a href="https://satcherinstitute.org/impact-reports/grants-and-awards" target="_blank" rel="noopener noreferrer" className="footer-link">Grants and Awards</a>
          </div>
          <div className="column">
            <div className="overline footer-label">Explore</div>
            <a href="https://satcherinstitute.org/about/who-we-are" target="_blank" rel="noopener noreferrer" className="footer-link">Who We Are</a>
            <a href="https://satcherinstitute.org/about/meet-the-team" target="_blank" rel="noopener noreferrer" className="footer-link">Meet the Team</a>
            <a href="https://satcherinstitute.org/initiatives/centers-and-divisions" target="_blank" rel="noopener noreferrer" className="footer-link">Centers and Divisions</a>
            <a href="https://satcherinstitute.org/news" target="_blank" rel="noopener noreferrer" className="footer-link">News</a>
            <a href="https://satcherinstitute.org/events" target="_blank" rel="noopener noreferrer" className="footer-link">Events</a>
          </div>
        </div>
      </div>
    </>
  );
}
