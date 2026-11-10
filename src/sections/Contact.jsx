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

const FULL_TITLE = "Let's Work Together";

const FULL_SUBTITLE =
  "Have an opportunity or want to discuss a project? I'd love to hear from you.";

function Contact() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  // Animation stages:
  // 0 = Heading typing
  // 1 = Description typing
  // 2 = Big message card
  // 3 = Small location card
  // 4 = Right contact information card
  // 5 = Inner contact cards one by one
  // 6 = Bottom note
  const [stage, setStage] = useState(0);

  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  const [visibleLinks, setVisibleLinks] = useState(0);

  // ========================================
  // INTERSECTION OBSERVER
  // Pause when section leaves viewport.
  // Resume when section enters viewport again.
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
  // REDUCED MOTION ACCESSIBILITY
  // ========================================

  useEffect(() => {
    if (!visible) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setTitleText(FULL_TITLE);
      setSubtitleText(FULL_SUBTITLE);
      setVisibleLinks(contactLinks.length);
      setStage(6);
    }
  }, [visible]);

  // ========================================
  // STAGE 0: HEADING TYPING
  // ========================================

  useEffect(() => {
    if (!visible || stage !== 0) return;

    if (titleText.length >= FULL_TITLE.length) {
      const timeout = setTimeout(() => {
        setStage(1);
      }, 400);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setTitleText(FULL_TITLE.slice(0, titleText.length + 1));
    }, 75);

    return () => clearTimeout(timeout);
  }, [visible, stage, titleText]);

  // ========================================
  // STAGE 1: DESCRIPTION TYPING
  // ========================================

  useEffect(() => {
    if (!visible || stage !== 1) return;

    if (subtitleText.length >= FULL_SUBTITLE.length) {
      const timeout = setTimeout(() => {
        setStage(2);
      }, 450);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubtitleText(FULL_SUBTITLE.slice(0, subtitleText.length + 1));
    }, 30);

    return () => clearTimeout(timeout);
  }, [visible, stage, subtitleText]);

  // ========================================
  // STAGE 2: BIG MESSAGE CARD
  // ========================================

  useEffect(() => {
    if (!visible || stage !== 2) return;

    const timeout = setTimeout(() => {
      setStage(3);
    }, 750);

    return () => clearTimeout(timeout);
  }, [visible, stage]);

  // ========================================
  // STAGE 3: SMALL LOCATION CARD
  // ========================================

  useEffect(() => {
    if (!visible || stage !== 3) return;

    const timeout = setTimeout(() => {
      setStage(4);
    }, 650);

    return () => clearTimeout(timeout);
  }, [visible, stage]);

  // ========================================
  // STAGE 4: RIGHT SIDE MAIN CARD
  // ========================================

  useEffect(() => {
    if (!visible || stage !== 4) return;

    const timeout = setTimeout(() => {
      setStage(5);
    }, 750);

    return () => clearTimeout(timeout);
  }, [visible, stage]);

  // ========================================
  // STAGE 5: INNER CONTACT CARDS
  // ONE BY ONE
  // ========================================

  useEffect(() => {
    if (!visible || stage !== 5) return;

    if (visibleLinks >= contactLinks.length) {
      setStage(6);
      return;
    }

    const timeout = setTimeout(() => {
      setVisibleLinks((previous) => previous + 1);
    }, 400);

    return () => clearTimeout(timeout);
  }, [visible, stage, visibleLinks]);

  // ========================================
  // RENDER
  // ========================================

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact-section ${visible ? "contact-visible" : ""}`}
    >
      <div className="container">
        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <div className="contact-heading text-center">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2 className="contact-title" aria-label={FULL_TITLE}>
            {titleText.slice(0, 11)}
            <span>{titleText.slice(11)}</span>

            {stage === 0 && (
              <span className="contact-typing-cursor" aria-hidden="true">
                |
              </span>
            )}
          </h2>

          <p className="contact-subtitle" aria-label={FULL_SUBTITLE}>
            {subtitleText}

            {stage === 1 && (
              <span className="contact-typing-cursor" aria-hidden="true">
                |
              </span>
            )}
          </p>

          <div className="contact-heading-line" />
        </div>

        {/* ========================================
            MAIN CONTACT CONTENT
        ======================================== */}

        <div className="contact-content">
          {/* LEFT SIDE */}
          <div className="contact-left">
            {/* BIG MESSAGE CARD */}

            <div
              className={`contact-message contact-reveal ${
                stage >= 2 ? "show" : ""
              }`}
            >
              <div className="contact-message-top">
                <div className="contact-message-icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>

                <span className="contact-small-label">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <h3>
                Let's build something
                <span> great together.</span>
              </h3>

              <p>
                I'm interested in Junior MERN Stack and Full Stack Developer
                opportunities where I can contribute my skills, work with a
                team, and continue growing as a developer.
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

            {/* SMALL LOCATION CARD */}

            <div
              className={`contact-location contact-reveal ${
                stage >= 3 ? "show" : ""
              }`}
            >
              <div className="contact-location-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>

              <div>
                <strong>Location</strong>

                <span>India · Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTACT INFORMATION */}

          <div
            className={`contact-links contact-reveal ${
              stage >= 4 ? "show" : ""
            }`}
          >
            <div className="contact-links-heading">
              <h3>Contact Information</h3>

              <p>Choose your preferred way to connect.</p>
            </div>

            {/* CONTACT CARDS */}

            <div className="contact-links-list">
              {contactLinks.map((item, index) => (
                <a
                  href={item.href}
                  key={item.title}
                  target={item.title === "Email" ? undefined : "_blank"}
                  rel={
                    item.title === "Email" ? undefined : "noopener noreferrer"
                  }
                  className={`contact-link-card ${
                    visibleLinks > index ? "show" : ""
                  }`}
                  style={{
                    "--contact-index": index,
                  }}
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
            </div>
          </div>
        </div>

        {/* ========================================
            BOTTOM NOTE
        ======================================== */}

        <div
          className={`contact-bottom-note contact-reveal ${
            stage >= 6 ? "show" : ""
          }`}
        >
          <span>Have a great idea?</span>

          <span>Let's turn it into reality.</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
