import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowUp,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer
      className="text-light py-5"
      style={{
        backgroundColor: "#191B21",
        borderTop: "1px solid #30323A",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <h4 className="fw-bold mb-3">
              Bablu <span style={{ color: "#8B7CFF" }}>Joshi</span>
            </h4>

            <p className="text-secondary mb-3">
              Full Stack Developer passionate about building responsive and
              user-friendly web applications.
            </p>

            <div className="d-flex gap-3">
              <a
                href="https://github.com/bablujoshi12"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/bablu-joshi-b519b726a/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="mailto:bjbablujoshi@gmail.com"
                className="text-light fs-5"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>

            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-secondary text-decoration-none"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-3 col-lg-4">
            <h5 className="fw-semibold mb-3">Let's Connect</h5>

            <p className="text-secondary">
              Have a project or opportunity in mind? Let's talk.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="btn btn-outline-light btn-sm"
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Contact Me
            </a>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-secondary small mb-0 text-center">
            © {new Date().getFullYear()} Bablu Joshi. All rights reserved.
          </p>

          <p className="text-secondary small mb-0 text-center">
            Made with{" "}
            <FontAwesomeIcon icon={faHeart} style={{ color: "#8B7CFF" }} />{" "}
            using React & Bootstrap
          </p>

          <a
            href="#home"
            className="btn btn-sm btn-outline-light"
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
