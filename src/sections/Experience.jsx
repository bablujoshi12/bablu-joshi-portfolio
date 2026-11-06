import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBriefcase,
  faGraduationCap,
  faCalendarDays,
  faLocationDot,
  faArrowUpRightFromSquare,
  faBuilding,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import "./Experience.css";

const experiences = [
  {
    type: "experience",
    label: "CURRENT POSITION",
    title: "Full Stack Developer",
    organization: "Dunacademy",
    location: "Dehradun, Uttarakhand",
    duration: "September 2026 – Present",
    icon: faBriefcase,

    description:
      "Working on full-stack web development, contributing to frontend interfaces, backend functionality, API integration and database management.",

    project: {
      name: "Retreats & Treks",
      description:
        "Contributing to Dunacademy's company project, built using Next.js, TypeScript and Neon PostgreSQL.",
      technologies: ["Next.js", "TypeScript", "Neon PostgreSQL"],
    },

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
    label: "6 MONTHS INTERNSHIP",
    title: "MERN Stack Developer Intern",
    organization: "Web Development Internship",
    duration: "March 2026 – August 2026",
    icon: faCode,

    description:
      "Completed 6 months of practical web development training and experience, working on responsive interfaces, REST APIs, backend functionality and database integration.",

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
    label: "EDUCATION",
    title: "Diploma in Information Technology",
    organization: "Government Polytechnic Lohaghat",
    location: "Lohaghat, Uttarakhand",
    duration: "2023 – 2026",
    icon: faGraduationCap,

    description:
      "Completed a Diploma in Information Technology, developing a foundation in programming, database management, computer fundamentals and web development.",

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
      { threshold: 0.08 },
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
      <div className="container experience-container">
        {/* Section Heading */}
        <div className="experience-heading">
          <span className="experience-eyebrow">
            <span />
            MY JOURNEY
          </span>

          <h2 className="experience-title">
            Experience <span>& Education.</span>
          </h2>

          <p className="experience-subtitle">
            My professional journey, practical experience and education.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article
              className={`experience-card experience-${item.type}`}
              key={item.type}
              style={{ "--card-index": index }}
            >
              {/* Timeline Icon */}
              <div className="experience-timeline-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>

              {/* Card Content */}
              <div className="experience-card-content">
                {/* Card Header */}
                <div className="experience-card-header">
                  <span className="experience-type">{item.label}</span>

                  <span className="experience-duration">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {item.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="experience-card-title">{item.title}</h3>

                {/* Organization */}
                <div className="experience-organization">
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />
                    {item.organization}
                  </span>

                  {item.location && (
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                      {item.location}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="experience-description">{item.description}</p>

                {/* Company Project Highlight */}
                {item.project && (
                  <div className="experience-project">
                    <div className="experience-project-heading">
                      <span className="experience-project-icon">
                        <FontAwesomeIcon icon={faCode} />
                      </span>

                      <div>
                        <small>COMPANY PROJECT</small>
                        <h4>{item.project.name}</h4>
                      </div>
                    </div>

                    <p>{item.project.description}</p>

                    <div className="experience-project-tech">
                      {item.project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div className="experience-skills-wrapper">
                  <span className="experience-skills-label">
                    TECHNOLOGIES & SKILLS
                  </span>

                  <div className="experience-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Marksheet */}
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

      <div className="experience-bottom-line" />
    </section>
  );
}

export default Experience;
