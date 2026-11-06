import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
  faPaperPlane,
  faLocationDot,
  faBriefcase,
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
    href: "https://www.linkedin.com/in/bablu-joshi-b519b726a/",
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
      { threshold: 0.1 },
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
        {/* Section Heading */}
        <div className="contact-heading text-center">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2 className="contact-title">
            Let's Work <span>Together</span>
          </h2>

          <p className="contact-subtitle">
            Have an opportunity or want to discuss a project? I'd love to hear
            from you.
          </p>

          <div className="contact-heading-line" />
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Left Side */}
          <div className="contact-message">
            <div className="contact-message-top">
              <div className="contact-message-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>

              <span className="contact-small-label">OPEN TO OPPORTUNITIES</span>
            </div>

            <h3>
              Let's build something
              <span> great together.</span>
            </h3>

            <p>
              I'm interested in Junior MERN Stack and Full Stack Developer
              opportunities where I can contribute my skills, work with a team,
              and continue growing as a developer.
            </p>

            <a
              href="mailto:bjbablujoshi@gmail.com?subject=Job%20Opportunity"
              className="contact-primary-btn"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Let's Connect
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="contact-btn-arrow"
              />
            </a>

            <div className="contact-availability">
              <span className="availability-dot" />
              Available for suitable opportunities
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-links">
            <div className="contact-links-heading">
              <h3>Contact Information</h3>
              <p>Choose your preferred way to connect.</p>
            </div>

            {contactLinks.map((item, index) => (
              <a
                href={item.href}
                key={item.title}
                target={item.title === "Email" ? undefined : "_blank"}
                rel={item.title === "Email" ? undefined : "noopener noreferrer"}
                className="contact-link-card"
                style={{ "--contact-index": index }}
                aria-label={`Connect via ${item.title}`}
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
              <div className="contact-location-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>

              <div>
                <strong>Location</strong>
                <span>India · Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="contact-bottom-note">
          <span>Have a great idea?</span>
          <span>Let's turn it into reality.</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
