import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCode,
  faLaptopCode,
  faDatabase,
  faGraduationCap,
  faBriefcase,
  faArrowRight,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import "./About.css";

const strengths = [
  {
    icon: faLaptopCode,
    title: "Frontend Development",
    description: "Modern, responsive user interfaces.",
  },
  {
    icon: faCode,
    title: "Backend Development",
    description: "REST APIs and server-side development.",
  },
  {
    icon: faDatabase,
    title: "Database Management",
    description: "MongoDB, MySQL and PostgreSQL.",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
];

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "about-visible" : ""}`}
    >
      <div className="container about-container">
        {/* Heading */}
        <div className="about-heading">
          <span className="about-eyebrow">
            <span />
            ABOUT ME
          </span>

          <h2 className="about-title">
            Who I <span>Am.</span>
          </h2>

          <p className="about-subtitle">
            A developer focused on building real-world web applications.
          </p>
        </div>

        <div className="row align-items-center g-4">
          {/* Left: Introduction */}
          <div className="col-12 col-lg-7 about-intro-column">
            <div className="about-intro">
              <div className="about-status">
                <span className="about-status-dot" />
                FULL STACK DEVELOPER
              </div>

              <h3 className="about-intro-title">
                Hi, I'm <span>Bablu Joshi.</span>
              </h3>

              <p className="about-description">
                I'm an IT graduate and Full Stack Developer with hands-on
                experience in building web applications using React.js, Node.js,
                Express.js and MongoDB.
              </p>

              <p className="about-description">
                Currently, I'm working at <strong>Dunacademy, Dehradun</strong>,
                where I'm contributing to
                <strong> Retreats & Treks</strong> — a company project built
                with Next.js, TypeScript and Neon PostgreSQL.
              </p>

              {/* Professional Details */}
              <div className="about-details">
                <div className="about-detail">
                  <span className="about-detail-icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <div>
                    <small>EDUCATION</small>
                    <strong>Diploma in IT</strong>
                  </div>
                </div>

                <div className="about-detail">
                  <span className="about-detail-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <div>
                    <small>CURRENT ROLE</small>
                    <strong>Full Stack Developer</strong>
                  </div>
                </div>
              </div>

              {/* Company Project Highlight */}
              <div className="about-company-card">
                <span className="about-company-icon">
                  <FontAwesomeIcon icon={faBuilding} />
                </span>

                <div>
                  <span className="about-company-label">
                    CURRENT COMPANY PROJECT
                  </span>
                  <h4>Retreats & Treks</h4>
                  <p>
                    Contributing to Dunacademy's project using Next.js,
                    TypeScript and Neon PostgreSQL.
                  </p>
                </div>
              </div>

              <a href="#projects" className="about-cta">
                Explore My Work
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>

          {/* Right: Technical Approach */}
          <div className="col-12 col-lg-5 about-approach-column">
            <div className="about-approach">
              <div className="about-approach-heading">
                <span className="about-approach-icon">
                  <FontAwesomeIcon icon={faCode} />
                </span>

                <div>
                  <span>MY EXPERTISE</span>
                  <h4>What I Do</h4>
                </div>
              </div>

              <p className="about-approach-description">
                I work across the frontend and backend to build functional,
                responsive and maintainable applications.
              </p>

              <div className="about-strengths">
                {strengths.map((item) => (
                  <div className="about-strength" key={item.title}>
                    <span className="about-strength-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>

                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-technologies">
                <span className="about-tech-label">
                  TECHNOLOGIES I WORK WITH
                </span>

                <div className="about-tech-tags">
                  {technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bottom-line" />
    </section>
  );
}

export default About;
