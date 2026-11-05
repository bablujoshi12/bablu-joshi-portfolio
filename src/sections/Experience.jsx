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
    title: "Full Stack Developer",
    organization: "Dunacademy",
    location: "Dehradun, Uttarakhand",
    duration: "September 2026 – Present",
    icon: faBriefcase,
    description:
      "Working on full-stack web application development, contributing to frontend and backend development, database integration, and building scalable web solutions.",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    type: "internship",
    title: "MERN Stack Developer Intern",
    organization: "Web Development Internship",
    duration: "March 2026 – August 2026",
    icon: faBriefcase,
    description:
      "Gained 6 months of practical experience in full-stack web development, working on responsive interfaces, REST APIs, backend development, and database integration.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "EJS",
      "JavaScript",
    ],
  },
  {
    type: "education",
    title: "Diploma in Information Technology",
    organization: "Government Polytechnic Lohaghat",
    location: "Lohaghat, Uttarakhand",
    duration: "2023 – 2026",
    icon: faGraduationCap,
    description:
      "Completed a Diploma in Information Technology with a focus on programming, computer fundamentals, database management, and web development.",
    skills: [
      "Programming",
      "Web Development",
      "Database Management",
      "Computer Fundamentals",
    ],
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
        {/* Heading */}
        <div className="experience-heading text-center">
          <span className="experience-eyebrow">MY JOURNEY</span>

          <h2 className="experience-title">
            Experience <span>& Education</span>
          </h2>

          <p className="experience-subtitle">
            My professional experience, internship, and educational journey.
          </p>

          <div className="experience-heading-line" />
        </div>

        {/* Experience Timeline */}
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
                      : item.type === "internship"
                        ? "INTERNSHIP"
                        : "EDUCATION"}
                  </span>

                  <span className="experience-duration">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {item.duration}
                  </span>
                </div>

                <h3 className="experience-card-title">{item.title}</h3>

                <p className="experience-organization">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {item.organization}
                  {item.location && ` • ${item.location}`}
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
