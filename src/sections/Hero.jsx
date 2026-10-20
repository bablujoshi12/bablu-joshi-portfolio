import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import profile from "../assets/profile.png";
import "./Hero.css";

function Hero() {
  const colors = {
    background: "#101114",
    surface: "#191B21",
    accent: "#8B7CFF",
    text: "#FFFFFF",
    secondary: "#A5A7B0",
  };

  return (
    <section
      id="home"
      className="container-fluid d-block hero-section"
      style={{
        backgroundColor: colors.background,
        paddingTop: "100px",
        paddingBottom: "30px",
        scrollMarginTop: "84px",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          {/* Introduction */}
          <div className="col-12 col-lg-7 text-center text-lg-start hero-content">
            <p
              className="text-uppercase fw-semibold mb-3 hero-animate hero-delay-1"
              style={{
                color: colors.accent,
                letterSpacing: "3px",
                fontSize: "14px",
              }}
            >
              Hello, I'm
            </p>

            <h1
              className="display-3 fw-bold mb-3 hero-animate hero-delay-2"
              style={{ color: colors.text }}
            >
              Bablu Joshi
            </h1>

            <h2
              className="h2 fw-semibold mb-4 hero-animate hero-delay-3"
              style={{ color: colors.accent }}
            >
              Full Stack Developer
            </h2>

            <p
              className="fs-5 mb-4 hero-animate hero-delay-4"
              style={{
                color: colors.secondary,
                lineHeight: 1.7,
              }}
            >
              I build responsive web applications using React, Node.js, Express
              and MongoDB. I enjoy turning ideas into practical digital
              experiences.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4 hero-animate hero-delay-5">
              <a
                href="#projects"
                className="btn btn-lg hero-primary-btn"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.text,
                  border: `1px solid ${colors.accent}`,
                }}
              >
                View Projects <FontAwesomeIcon icon={faArrowRight} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg hero-resume-btn"
                style={{
                  backgroundColor: "transparent",
                  color: colors.text,
                  border: `1px solid ${colors.accent}`,
                }}
              >
                Resume <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>

            {/* Social Links */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-0 hero-animate hero-delay-6">
              <a
                href="https://github.com/bablujoshi12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="fs-3 hero-social-link"
                style={{ color: colors.secondary }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/bablu-joshi-b519b726a/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="fs-3 hero-social-link"
                style={{ color: colors.secondary }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="mailto:bjbablujoshi@gmail.com"
                aria-label="Email"
                className="fs-3 hero-social-link"
                style={{ color: colors.secondary }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="col-12 col-lg-4 text-center hero-profile">
            <img
              src={profile}
              alt="Bablu Joshi - Full Stack Developer"
              className="rounded-circle img-fluid hero-profile-image"
              style={{
                width: "min(300px, 75vw)",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                objectPosition: "center 25%",
                border: `3px solid ${colors.accent}`,
                backgroundColor: colors.surface,
              }}
            />

            <p
              className="small mt-3 mb-0 hero-profile-caption"
              style={{ color: colors.secondary }}
            >
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
