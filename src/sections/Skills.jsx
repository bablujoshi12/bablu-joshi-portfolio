import { useEffect, useRef, useState } from "react";
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
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: faServer,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Joi"],
  },
  {
    title: "Database",
    icon: faDatabase,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Concepts",
    icon: faScrewdriverWrench,
    skills: ["Git", "GitHub", "Postman", "Cloudinary"],
  },
];

function Skills() {
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
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section ${visible ? "skills-visible" : ""}`}
    >
      <div className="container">
        {/* Heading */}
        <div className="skills-heading text-center">
          <span className="skills-eyebrow">WHAT I WORK WITH</span>

          <h2 className="skills-title">
            My <span>Skills</span>
          </h2>

          <p className="skills-subtitle">
            Technologies and tools I use to build web applications.
          </p>

          <div className="skills-heading-line" />
        </div>

        {/* Skill Cards */}
        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <div
              className="col-12 col-md-6"
              key={group.title}
              style={{ "--skill-index": index }}
            >
              <article className="skill-card h-100">
                <div className="skill-card-heading">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={group.icon} />
                  </div>

                  <h3>{group.title}</h3>
                </div>

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
          ))}
        </div>

        <p className="skills-note text-center">
          Always learning, building, and improving.
        </p>
      </div>
    </section>
  );
}

export default Skills;
