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
  return (
    <section id="home" className="container-fluid hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          {/* Introduction */}
          <div className="col-12 col-lg-7 text-center text-lg-start hero-content">
            <p className="text-uppercase fw-semibold mb-3 hero-animate hero-delay-1 hero-intro">
              Hello, I'm
            </p>

            <h1 className="display-3 fw-bold mb-3 hero-animate hero-delay-2 hero-title">
              Bablu Joshi
            </h1>

            <h2 className="h2 fw-semibold mb-4 hero-animate hero-delay-3 hero-role">
              Full Stack Developer
            </h2>

            <p className="fs-5 mb-4 hero-animate hero-delay-4 hero-description">
              I build responsive and scalable web applications using React.js,
              Next.js, Node.js, Express.js, TypeScript, MongoDB and PostgreSQL.
              I enjoy solving real-world problems and building practical digital
              experiences.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4 hero-animate hero-delay-5">
              <a href="#projects" className="btn btn-lg hero-primary-btn">
                View Projects
                <FontAwesomeIcon icon={faArrowRight} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg hero-resume-btn"
              >
                Resume
                <FontAwesomeIcon icon={faDownload} />
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
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/bablu-joshi-b519b726a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="fs-3 hero-social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="mailto:bjbablujoshi@gmail.com"
                aria-label="Email"
                className="fs-3 hero-social-link"
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
            />

            <p className="small mt-3 mb-0 hero-profile-caption">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
