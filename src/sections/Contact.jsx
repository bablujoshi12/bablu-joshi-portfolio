import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
  faPaperPlane,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const contactLinks = [
  {
    title: "Email",
    value: "bjbablujoshi@gmail.com",
    icon: faEnvelope,
    href: "mailto:bjbablujoshi@gmail.com",
  },
  {
    title: "GitHub",
    value: "bablujoshi12",
    icon: faGithub,
    href: "https://github.com/bablujoshi12/",
  },
  {
    title: "LinkedIn",
    value: "Bablu Joshi",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/bablu-joshi-b519b726a/?isSelfProfile=true",
  },
];

function Contact() {
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
      id="contact"
      ref={sectionRef}
      className={`contact-section ${visible ? "contact-visible" : ""}`}
    >
      <div className="container">
        <div className="contact-heading text-center">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2 className="contact-title">
            Let's Work <span>Together</span>
          </h2>

          <p className="contact-subtitle">
            Looking for a junior developer? Let's connect and discuss
            opportunities to build something meaningful.
          </p>

          <div className="contact-heading-line" />
        </div>

        <div className="contact-content">
          <div className="contact-message">
            <span className="contact-small-label">HAVE AN OPPORTUNITY?</span>

            <h3>
              Let's build something
              <span> great together.</span>
            </h3>

            <p>
              I'm interested in junior MERN Stack and Full Stack Developer
              opportunities where I can contribute, learn, and grow as a
              developer.
            </p>

            <a
              href="mailto:your-email@example.com?subject=Job%20Opportunity"
              className="contact-primary-btn"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Contact Me
            </a>
          </div>

          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                href={item.href}
                key={item.title}
                target={item.title === "Email" ? undefined : "_blank"}
                rel={item.title === "Email" ? undefined : "noopener noreferrer"}
                className="contact-link-card"
              >
                <div className="contact-link-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <div className="contact-link-info">
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>

                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="contact-link-arrow"
                />
              </a>
            ))}

            <div className="contact-location">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>India · Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
