import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCalendarDays,
  faLocationDot,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";

const experiences = [
  {
    type: "experience",
    title: "Web Development Intern",
    organization: "Internship",
    duration: "4 Months",
    icon: faBriefcase,
    description:
      "Gained practical experience in web development and worked with modern JavaScript technologies.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    type: "education",
    title: "Diploma in Information Technology",
    organization: "Government Polytechnic Lohaghat",
    duration: "Completed",
    icon: faGraduationCap,
    description:
      "Completed a Diploma in Information Technology with a focus on programming and web development fundamentals.",
    skills: ["Programming", "Web Development", "Database"],
    marksheet: "/marksheet.pdf",
  },
];

function Experience() {
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
      id="experience"
      ref={sectionRef}
      className={`experience-section ${visible ? "experience-visible" : ""}`}
    >
      <div className="container">
        <div className="experience-heading text-center">
          <span className="experience-eyebrow">MY JOURNEY</span>

          <h2 className="experience-title">
            Experience <span>& Education</span>
          </h2>

          <p className="experience-subtitle">
            My learning journey and practical development experience.
          </p>

          <div className="experience-heading-line" />
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article
              className="experience-card"
              key={item.title}
              style={{ "--experience-index": index }}
            >
              <div className="experience-timeline-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>

              <div className="experience-card-content">
                <div className="experience-card-top">
                  <span className="experience-type">
                    {item.type === "experience"
                      ? "WORK EXPERIENCE"
                      : "EDUCATION"}
                  </span>

                  <span className="experience-duration">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {item.duration}
                  </span>
                </div>

                <h3 className="experience-card-title">{item.title}</h3>

                <p className="experience-organization">
                  {item.type === "education" && (
                    <FontAwesomeIcon icon={faLocationDot} />
                  )}
                  {item.organization}
                </p>

                <p className="experience-description">{item.description}</p>

                <div className="experience-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {item.type === "education" && item.marksheet && (
                  <a
                    href={item.marksheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-marksheet-btn"
                  >
                    View Marksheet
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
