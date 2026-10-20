import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCode,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const highlights = [
  {
    icon: faGraduationCap,
    title: "Education",
    description: "Diploma in Information Technology",
    number: "01",
  },
  {
    icon: faBriefcase,
    title: "Experience",
    description: "4 months of internship experience",
    number: "02",
  },
  {
    icon: faCode,
    title: "Tech Stack",
    description: "React, Node.js, Express and MongoDB",
    number: "03",
  },
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
      {
        threshold: 0.2,
      },
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
        <div className="about-heading text-center">
          <span className="about-eyebrow">GET TO KNOW ME</span>

          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-subtitle">
            A little about my journey into web development.
          </p>

          <div className="about-heading-line" />
        </div>

        <div className="row align-items-center g-5">
          {/* Introduction */}
          <div className="col-12 col-lg-6 about-intro">
            <div className="about-status">
              <span className="about-status-dot" />
              Passionate about building for the web
            </div>

            <h3 className="about-intro-title">
              Turning ideas into
              <span> digital experiences.</span>
            </h3>

            <p className="about-description">
              I'm Bablu Joshi, a Full Stack Developer focused on building
              responsive and user-friendly web applications.
            </p>

            <p className="about-description">
              I have completed my Diploma in Information Technology and gained 4
              months of internship experience in web development. I enjoy
              learning new technologies, solving problems, and creating
              practical projects using the MERN stack.
            </p>

            <div className="about-strengths">
              <div>
                <FontAwesomeIcon icon={faCheck} />
                <span>Responsive UI development</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faCheck} />
                <span>REST API integration</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faCheck} />
                <span>MongoDB and Express.js</span>
              </div>
            </div>

            <a href="#projects" className="about-project-btn">
              Explore My Projects
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>

          {/* Highlight Cards */}
          <div className="col-12 col-lg-6 about-highlights">
            {highlights.map((item, index) => (
              <div
                className="about-card"
                key={item.title}
                style={{ "--card-index": index }}
              >
                <span className="about-card-number">{item.number}</span>

                <div className="about-card-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <div className="about-card-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="about-card-arrow"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
