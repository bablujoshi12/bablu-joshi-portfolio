import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCode,
  faLaptopCode,
  faDatabase,
  faServer,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    icon: faLaptopCode,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: faServer,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Joi"],
  },
  {
    title: "Database",
    icon: faDatabase,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Concepts",
    icon: faScrewdriverWrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "EJS",
      "Responsive Design",
      "Render",
      "Resend",
      "Neon",
    ],
  },
];

const FULL_TITLE = "My Skills";

const FULL_SUBTITLE =
  "Technologies and tools I use to build modern web applications.";

function TypewriterText({ text, speed = 65, visible, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!visible || completedRef.current) return;

    if (indexRef.current >= text.length) {
      completedRef.current = true;
      onComplete();
      return;
    }

    const timeout = setTimeout(() => {
      indexRef.current += 1;

      setDisplayedText(text.slice(0, indexRef.current));

      if (indexRef.current >= text.length) {
        completedRef.current = true;
        onComplete();
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [visible, displayedText, text, speed, onComplete]);

  return (
    <span className="skills-typed">
      {displayedText}
      {visible && !completedRef.current && (
        <span className="skills-typing-cursor" aria-hidden="true" />
      )}
    </span>
  );
}

function Skills() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);

  // ========================================
  // INTERSECTION OBSERVER
  // ========================================

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

  // ========================================
  // HEADING TYPEWRITING
  // ========================================

  const handleTitleComplete = useCallback(() => {
    setStage((current) => (current === 0 ? 1 : current));
  }, []);

  const handleSubtitleComplete = useCallback(() => {
    setStage((current) => (current === 1 ? 2 : current));
  }, []);

  // ========================================
  // CARD LOADING ANIMATION
  // One card at a time
  // ========================================

  useEffect(() => {
    if (!visible || stage !== 2) return;

    if (visibleCards >= skillGroups.length) {
      setStage(3);
      return;
    }

    const timeout = setTimeout(() => {
      setVisibleCards((current) => current + 1);
    }, 650);

    return () => clearTimeout(timeout);
  }, [visible, stage, visibleCards]);

  // ========================================
  // REDUCED MOTION
  // ========================================

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setStage(3);
      setVisibleCards(skillGroups.length);
    }
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section ${visible ? "skills-visible" : ""}`}
    >
      <div className="container">
        {/* SECTION HEADING */}

        <div className="skills-heading text-center">
          <span className="skills-eyebrow">WHAT I WORK WITH</span>

          <h2 className="skills-title">
            {stage >= 1 ? "My " : ""}
            <span>
              {stage >= 1 ? (
                <TypewriterText
                  text="Skills"
                  visible={visible && stage === 1}
                  speed={65}
                  onComplete={handleSubtitleComplete}
                />
              ) : null}
            </span>

            {stage === 0 && (
              <TypewriterText
                text={FULL_TITLE}
                visible={visible}
                speed={65}
                onComplete={handleTitleComplete}
              />
            )}
          </h2>

          <p className="skills-subtitle">
            {stage >= 2 ? (
              FULL_SUBTITLE
            ) : stage === 1 ? (
              <TypewriterText
                text={FULL_SUBTITLE}
                visible={visible}
                speed={20}
                onComplete={handleSubtitleComplete}
              />
            ) : null}
          </p>

          <div className="skills-heading-line" />
        </div>

        {/* SKILL CARDS */}

        <div className="row g-4">
          {skillGroups.map((group, index) => {
            const cardVisible = visibleCards > index;

            return (
              <div className="col-12 col-md-6" key={group.title}>
                <article
                  className={`skill-card h-100 ${
                    cardVisible ? "skill-card-visible" : ""
                  }`}
                >
                  {/* CARD HEADING */}

                  <div className="skill-card-heading">
                    <div className="skill-icon">
                      <FontAwesomeIcon icon={group.icon} />
                    </div>

                    <h3>{group.title}</h3>
                  </div>

                  {/* SKILLS - NO TYPEWRITING */}

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        <FontAwesomeIcon icon={faCode} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}

        <p
          className={`skills-note text-center ${
            stage >= 3 ? "skills-note-visible" : ""
          }`}
        >
          Always learning, building, and improving.
        </p>
      </div>
    </section>
  );
}

export default Skills;
