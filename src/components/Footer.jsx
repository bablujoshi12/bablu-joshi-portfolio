import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowUp,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const quickLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Bablu <span>Joshi</span>
            </a>

            <p className="footer-description">
              Full Stack Developer passionate about building responsive,
              user-friendly, and meaningful web applications.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/bablujoshi12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/bablu-joshi-b519b726a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="mailto:bjbablujoshi@gmail.com"
                aria-label="Email"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-navigation">
            <h5 className="footer-heading">Quick Links</h5>

            <ul className="footer-nav-list">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="footer-nav-link">
                    <span>{label}</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-connect">
            <h5 className="footer-heading">Let's Connect</h5>

            <p>
              Have an opportunity or a project in mind? Feel free to reach out.
            </p>

            <a
              href="mailto:bjbablujoshi@gmail.com?subject=Let's%20Connect"
              className="footer-contact-btn"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact Me
              <FontAwesomeIcon
                icon={faArrowRight}
                className="footer-contact-arrow"
              />
            </a>

            <span className="footer-email">bjbablujoshi@gmail.com</span>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <strong>Bablu Joshi.</strong> All rights reserved.
          </p>

          <p className="footer-made-with">
            Made with
            <FontAwesomeIcon icon={faHeart} />
            using React & Bootstrap
          </p>

          <a href="#home" className="footer-back-top">
            <span>Back to top</span>
            <span className="footer-back-top-icon">
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
