import { useEffect, useState } from "react";

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
  const [greeting, setGreeting] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionDone, setDescriptionDone] = useState(false);

  // Sequential typing animation
  useEffect(() => {
    const fullDescription =
      "I build responsive and scalable web applications using React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB and PostgreSQL. I enjoy solving real-world problems and creating meaningful digital experiences.";

    let timeoutId;
    let cancelled = false;

    const wait = (ms) =>
      new Promise((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });

    const typeText = async (text, setter, speed) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;

        setter(text.slice(0, i));
        await wait(speed);
      }
    };

    const startTyping = async () => {
      setGreeting("");
      setFirstName("");
      setLastName("");
      setRole("");
      setDescription("");
      setDescriptionDone(false);

      // Step 1: Greeting
      await typeText("Hello, I'm", setGreeting, 100);
      if (cancelled) return;

      await wait(250);

      // Step 2: Name
      await typeText("Bablu", setFirstName, 120);
      if (cancelled) return;

      await wait(100);

      await typeText("Joshi", setLastName, 120);
      if (cancelled) return;

      await wait(250);

      // Step 3: Developer Role
      await typeText("Full Stack Developer", setRole, 90);
      if (cancelled) return;

      await wait(250);

      // Step 4: Description
      await typeText(fullDescription, setDescription, 14);
      if (cancelled) return;

      // Start lower section animations only after description
      setDescriptionDone(true);
    };

    startTyping();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

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

            {/* Greeting */}
            <p className="hero-greeting slide-left delay-2">{greeting}</p>

            {/* Name */}
            <h1 className="hero-title slide-left delay-3">
              {firstName} <span>{lastName}</span>
            </h1>

            {/* Developer Role */}
            <h2 className="hero-role slide-left delay-4">{role}</h2>

            {/* Description */}
            <p className="hero-description slide-left delay-5">{description}</p>

            {/* Technologies */}
            <div
              className={`hero-tech ${
                descriptionDone ? "sequence-visible" : "sequence-hidden"
              }`}
            >
              <span className="stagger-item">
                <FontAwesomeIcon icon={faCode} />
                MERN Stack
              </span>

              <span className="stagger-item">Next.js</span>

              <span className="stagger-item">TypeScript</span>

              <span className="stagger-item">PostgreSQL</span>
            </div>

            {/* Action Buttons */}
            <div
              className={`hero-actions ${
                descriptionDone ? "sequence-visible" : "sequence-hidden"
              }`}
            >
              <a href="#projects" className="hero-primary-btn stagger-item">
                View Projects
                <FontAwesomeIcon icon={faArrowRight} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-btn stagger-item"
              >
                Resume
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`hero-socials ${
                descriptionDone ? "sequence-visible" : "sequence-hidden"
              }`}
            >
              <span className="social-label stagger-item">CONNECT WITH ME</span>

              <a
                href="https://github.com/bablujoshi12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="stagger-item"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/bablu-joshi-b519b726a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="stagger-item"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="mailto:bjbablujoshi@gmail.com"
                aria-label="Email"
                className="stagger-item"
              >
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

                {/* Hand-drawn Reveal Outline */}
                <svg
                  className="profile-draw-outline"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle
                    className="profile-draw-path"
                    cx="50"
                    cy="50"
                    r="48"
                    pathLength="100"
                  />
                </svg>
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
