import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowRight,
  faDownload,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import profile from "../assets/profile.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="row align-items-center g-5">
          {/* Left: Introduction */}
          <div className="col-lg-7 hero-content">
            {/* Availability Badge */}
            <div className="hero-status slide-left delay-1">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            {/* Introduction */}
            <p className="hero-greeting slide-left delay-2">Hello, I'm</p>

            <h1 className="hero-title slide-left delay-3">
              Bablu <span>Joshi.</span>
            </h1>

            <h2 className="hero-role slide-left delay-4">
              Full Stack Developer
            </h2>

            <p className="hero-description slide-left delay-5">
              I build responsive and scalable web applications using React.js,
              Next.js, Node.js, Express.js, TypeScript, MongoDB and PostgreSQL.
              I enjoy solving real-world problems and creating meaningful
              digital experiences.
            </p>

            {/* Technologies */}
            <div className="hero-tech slide-left delay-6">
              <span>
                <FontAwesomeIcon icon={faCode} />
                MERN Stack
              </span>

              <span>Next.js</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions slide-left delay-7">
              <a href="#projects" className="hero-primary-btn">
                View Projects
                <FontAwesomeIcon icon={faArrowRight} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-btn"
              >
                Resume
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials slide-left delay-8">
              <span className="social-label">CONNECT WITH ME</span>

              <a
                href="https://github.com/bablujoshi12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/bablu-joshi-b519b726a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a href="mailto:bjbablujoshi@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          {/* Right: Profile Section */}
          <div className="col-lg-5 hero-visual slide-right">
            <div className="hero-image-wrapper">
              {/* Background Glow */}
              <div className="hero-image-glow"></div>

              {/* Decorative Rings */}
              <div className="hero-circle circle-one"></div>
              <div className="hero-circle circle-two"></div>

              {/* Profile Image */}
              <div className="hero-image-border">
                <img
                  src={profile}
                  alt="Bablu Joshi - Full Stack Developer"
                  className="hero-profile-image"
                />
              </div>

              {/* Developer Card */}
              <div className="floating-card card-top card-entrance delay-2">
                <span className="floating-icon">{"</>"}</span>

                <div className="floating-card-content">
                  <strong>Developer</strong>
                  <small>Building the web</small>
                </div>
              </div>

              {/* Problem Solver Card */}
              <div className="floating-card card-bottom card-entrance delay-3">
                <span className="online-dot"></span>

                <div className="floating-card-content">
                  <strong>Problem Solver</strong>
                  <small>Always learning</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="hero-bottom-line"></div>
    </section>
  );
}

export default Hero;
