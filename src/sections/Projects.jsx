import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUsers,
  faArrowUpRightFromSquare,
  faCode,
  faLayerGroup,
  faPlane,
  faGraduationCap,
  faCalculator,
  faCloudSun,
  faTicket,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const projects = [
  {
    title: "ShopSphere",
    category: "Full Stack E-Commerce",
    description:
      "A full-stack e-commerce application featuring product management, search, filters, cart, wishlist, authentication, order management, and Razorpay integration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    icon: faCartShopping,
    number: "01",
    status: "In Development",
    github: "https://github.com/bablujoshi12/shopsphere-mern-ecommerce",
    live: "https://shopsphere-mern-ecommerce-dxyg.onrender.com/",
  },
  {
    title: "Social Connect",
    category: "Full Stack Social Media",
    description:
      "A social media application with user authentication, profiles, image posts, likes, comments, follow/unfollow, and a personalized feed.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: faUsers,
    number: "02",
    status: "In Development",
    github: "https://github.com/bablujoshi12/social-media-app",
    live: "https://social-media-frontend-yob8.onrender.com/",
  },
  {
    title: "Wanderlust",
    category: "Travel Listing Application",
    description:
      "A travel listing web application where users can explore accommodation listings, view property details, and manage listings with authentication and validation.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Passport.js",
      "Joi",
    ],
    icon: faPlane,
    number: "03",
    status: "Built as a Project",
    github: "https://github.com/bablujoshi12/wanderlust",
    live: "https://wanderlust-kn0c.onrender.com/listings",
  },
  {
    title: "MERN Authentication Project",
    category: "Authentication System",
    description:
      "A full-stack authentication project demonstrating user signup, login, password hashing, JWT-based authentication, and protected routes.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: faShieldHalved,
    number: "04",
    status: "Built as a Project",
    github: "https://github.com/bablujoshi12/MERN-AUTHENTICATION-PROJECT",
    live: "https://mern-auth-frontend-l40o.onrender.com/login",
  },
  {
    title: "Student Management System",
    category: "CRUD Web Application",
    description:
      "A student management system built with Node.js, Express.js, EJS, and MongoDB to create, view, update, and delete student records.",
    technologies: ["Node.js", "Express.js", "EJS", "MongoDB"],
    icon: faGraduationCap,
    number: "05",
    status: "Built as a Project",
    github:
      "https://github.com/bablujoshi12/Student-Management-System-NodeJS-EJS-MongoDB",
    live: "",
  },
  {
    title: "User Management System",
    category: "CRUD Web Application",
    description:
      "A user management application built with Node.js, Express.js, EJS, and MySQL to manage user records using CRUD operations.",
    technologies: ["Node.js", "Express.js", "EJS", "MySQL"],
    icon: faUsers,
    number: "06",
    status: "Built as a Project",
    github: "https://github.com/bablujoshi12/User-Management-System",
    live: "",
  },
  {
    title: "Student Management System",
    category: "CRUD Web Application",
    description:
      "A student management application built with Node.js, Express.js, and EJS with full CRUD functionality.",
    technologies: ["Node.js", "Express.js", "EJS"],
    icon: faGraduationCap,
    number: "07",
    status: "Built as a Project",
    github: "https://github.com/bablujoshi12/student-management-system",
    live: "",
  },
  {
    title: "React Basic Lottery Game",
    category: "React Mini Project",
    description:
      "A simple lottery game that generates a ticket, calculates the sum of its numbers, and checks whether it matches the winning sum.",
    technologies: ["React.js", "JavaScript", "CSS"],
    icon: faTicket,
    number: "08",
    status: "Built as a Project",
    github: "https://github.com/bablujoshi12/React-Basic-Lottery-Game",
    live: "",
  },
  {
    title: "Simple Calculator",
    category: "Frontend Mini Project",
    description:
      "A simple calculator project built with HTML. Update the description if your repository includes additional functionality.",
    technologies: ["HTML"],
    icon: faCalculator,
    number: "09",
    status: "Built as a Project",
    github: "https://github.com/bablujoshi12/simple-calculator",
    live: "",
  },
  {
    title: "Weather App",
    category: "Weather Application",
    description:
      "A weather application project. Add the actual features and technologies based on your implementation.",
    technologies: ["JavaScript"],
    icon: faCloudSun,
    number: "10",
    status: "Built as a Project",
    github: "https://github.com/bablujoshi12/weather-app",
    live: "",
  },
];

function Projects() {
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
      { threshold: 0.05 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects-section ${visible ? "projects-visible" : ""}`}
    >
      <div className="container">
        <div className="projects-heading text-center">
          <span className="projects-eyebrow">WHAT I'VE BUILT</span>

          <h2 className="projects-title">
            Featured <span>Projects</span>
          </h2>

          <p className="projects-subtitle">
            A selection of my full-stack applications and practice projects.
          </p>

          <div className="projects-heading-line" />
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-12 col-lg-6"
              key={project.number}
              style={{ "--project-index": index }}
            >
              <article className="project-card h-100">
                <div className="project-card-top">
                  <div className="project-icon">
                    <FontAwesomeIcon icon={project.icon} />
                  </div>

                  <span className="project-number">{project.number}</span>
                </div>

                <div className="project-category">
                  <FontAwesomeIcon icon={faLayerGroup} />
                  <span>{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="project-tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span className="project-status">
                    <span className="project-status-dot" />
                    {project.status}
                  </span>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        Code
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="project-link-arrow"
                        />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="project-link"
                      >
                        Live Demo
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="project-link-arrow"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <p className="projects-note text-center">
          Built with curiosity. Improved with every iteration.
        </p>
      </div>
    </section>
  );
}

export default Projects;
