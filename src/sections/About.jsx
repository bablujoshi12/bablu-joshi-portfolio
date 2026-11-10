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
  const [headingText, setHeadingText] = useState("");
  const [introText, setIntroText] = useState("");
  const [headingDone, setHeadingDone] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [sequence, setSequence] = useState(-1);

  // Detect About section visibility
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Heading typewriter - Pause and Resume
  useEffect(() => {
    if (!visible || headingDone) return;

    const heading = "Who I Am.";

    if (headingText.length >= heading.length) {
      setHeadingDone(true);
      return;
    }

    const timeout = setTimeout(
      () => {
        const nextText = heading.slice(0, headingText.length + 1);

        setHeadingText(nextText);

        if (nextText.length === heading.length) {
          setHeadingDone(true);
        }
      },
      headingText.length === 0 ? 200 : 65,
    );

    return () => clearTimeout(timeout);
  }, [visible, headingText, headingDone]);

  // Start sequence after heading typing
  useEffect(() => {
    if (headingDone) {
      setSequence((current) => (current < 0 ? 0 : current));
    }
  }, [headingDone]);

  // Sequential animation controller - Pause and Resume
  useEffect(() => {
    if (!visible || sequence < 0 || sequence === 3 || sequence >= 24) {
      return;
    }

    const delays = {
      0: 300,
      1: 500,
      2: 350,
      4: 350,
      5: 350,
      6: 450,
      7: 450,
      8: 400,
      9: 600,
      10: 350,
      11: 350,
      12: 250,
      13: 250,
      14: 400,
      15: 350,
    };

    const timeout = setTimeout(() => {
      setSequence((current) => current + 1);
    }, delays[sequence] ?? 180);

    return () => clearTimeout(timeout);
  }, [visible, sequence]);

  // Intro typewriter - Pause and Resume
  useEffect(() => {
    if (!visible || sequence !== 3 || introDone) return;

    const intro = "Hi, I'm Bablu Joshi.";

    if (introText.length >= intro.length) {
      setIntroDone(true);
      setSequence(4);
      return;
    }

    const timeout = setTimeout(
      () => {
        const nextText = intro.slice(0, introText.length + 1);

        setIntroText(nextText);

        if (nextText.length === intro.length) {
          setIntroDone(true);
          setSequence(4);
        }
      },
      introText.length === 0 ? 150 : 55,
    );

    return () => clearTimeout(timeout);
  }, [visible, sequence, introText, introDone]);

  // Helper for sequential reveal
  const show = (step) => sequence >= step;

  const headingPrefix = "Who I ";
  const introPrefix = "Hi, I'm ";

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "about-visible" : ""}`}
    >
      <div className="container about-container mt-5">
        {/* Heading */}
        <div className="about-heading">
          <span className="about-eyebrow">
            <span />
            ABOUT ME
          </span>

          <h2 className="about-title">
            {headingText.length <= headingPrefix.length ? (
              headingText
            ) : (
              <>
                {headingPrefix}
                <span>{headingText.slice(headingPrefix.length)}</span>
              </>
            )}

            {!headingDone && visible && <span className="typing-cursor" />}
          </h2>

          <p className={`about-subtitle ${show(0) ? "is-shown" : ""}`}>
            A developer focused on building real-world web applications.
          </p>
        </div>

        <div className="row align-items-center g-4">
          {/* Left: Introduction */}
          <div
            className={`col-12 col-lg-7 about-intro-column ${
              show(1) ? "is-shown" : ""
            }`}
          >
            <div className="about-intro">
              <div className={`about-status ${show(2) ? "is-shown" : ""}`}>
                <span className="about-status-dot" />
                FULL STACK DEVELOPER
              </div>

              <h3 className="about-intro-title">
                {introText.length <= introPrefix.length ? (
                  introText
                ) : (
                  <>
                    {introPrefix}
                    <span>{introText.slice(introPrefix.length)}</span>
                  </>
                )}

                {!introDone && sequence === 3 && (
                  <span className="typing-cursor intro-cursor" />
                )}
              </h3>

              <p className={`about-description ${show(4) ? "is-shown" : ""}`}>
                I'm an IT graduate and Full Stack Developer with hands-on
                experience in building web applications using React.js, Node.js,
                Express.js and MongoDB.
              </p>

              <p className={`about-description ${show(5) ? "is-shown" : ""}`}>
                Currently, I'm working at <strong>Dunacademy, Dehradun</strong>,
                where I'm contributing to
                <strong> Retreats & Treks</strong> — a company project built
                with Next.js, TypeScript and Neon PostgreSQL.
              </p>

              {/* Professional Details */}
              <div className={`about-details ${show(6) ? "is-shown" : ""}`}>
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

              {/* Company Project */}
              <div
                className={`about-company-card ${show(7) ? "is-shown" : ""}`}
              >
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

              {/* CTA */}
              <a
                href="#projects"
                className={`about-cta ${show(8) ? "is-shown" : ""}`}
              >
                Explore My Work
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>

          {/* Right: Technical Approach */}
          <div
            className={`col-12 col-lg-5 about-approach-column ${
              show(9) ? "is-shown" : ""
            }`}
          >
            <div className="about-approach">
              <div
                className={`about-approach-heading ${
                  show(10) ? "is-shown" : ""
                }`}
              >
                <span className="about-approach-icon">
                  <FontAwesomeIcon icon={faCode} />
                </span>

                <div>
                  <span>MY EXPERTISE</span>
                  <h4>What I Do</h4>
                </div>
              </div>

              <p
                className={`about-approach-description ${
                  show(11) ? "is-shown" : ""
                }`}
              >
                I work across the frontend and backend to build functional,
                responsive and maintainable applications.
              </p>

              <div className="about-strengths">
                {strengths.map((item, index) => (
                  <div
                    className={`about-strength ${
                      show(12 + index) ? "is-shown" : ""
                    }`}
                    key={item.title}
                  >
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

              <div
                className={`about-technologies ${show(15) ? "is-shown" : ""}`}
              >
                <span className="about-tech-label">
                  TECHNOLOGIES I WORK WITH
                </span>

                <div className="about-tech-tags">
                  {technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={show(16 + index) ? "is-shown" : ""}
                    >
                      {tech}
                    </span>
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
