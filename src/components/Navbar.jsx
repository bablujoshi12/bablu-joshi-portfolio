import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faCode,
  faFolderOpen,
  faBriefcase,
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { name: "Home", icon: faHouse, path: "#home" },
  { name: "About", icon: faUser, path: "#about" },
  { name: "Skills", icon: faCode, path: "#skills" },
  { name: "Projects", icon: faFolderOpen, path: "#projects" },
  { name: "Experience", icon: faBriefcase, path: "#experience" },
  { name: "Contact", icon: faEnvelope, path: "#contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const sidebarStyle = {
    width: "min(290px, 78vw)",
    backgroundColor: "#191B21",
    color: "#FFFFFF",
    zIndex: 1050,
  };

  const navButtonStyle = {
    backgroundColor: "#24262E",
    color: "#A5A7B0",
    border: "none",
    padding: "12px",
    fontSize: "15px",
    borderRadius: "7px",
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="navbar navbar-dark fixed-top border-bottom py-3"
        style={{
          backgroundColor: "#101114",
          borderColor: "#30323A",
          minHeight: "84px",
        }}
      >
        <div className="container">
          {/* Brand */}
          <a
            href="#home"
            className="navbar-brand fw-bold fs-4 mb-0"
            onClick={closeMenu}
          >
            Bablu<span style={{ color: "#8B7CFF" }}>.</span>
          </a>

          {/* Desktop Navigation: Resume button removed */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="nav-link text-light"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile and Tablet Menu Button */}
          <button
            type="button"
            className="btn btn-outline-light d-lg-none"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile and Tablet Sidebar */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation menu"
            className="position-fixed top-0 start-0 w-100 h-100 border-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              zIndex: 1040,
            }}
            onClick={closeMenu}
          />

          {/* Sidebar */}
          <aside
            className="position-fixed top-0 start-0 vh-100 overflow-auto p-3"
            style={sidebarStyle}
            aria-label="Mobile navigation"
          >
            {/* Sidebar Header */}
            <div
              className="d-flex justify-content-between align-items-center mb-4 px-1 pb-3 border-bottom"
              style={{ borderColor: "#30323A" }}
            >
              <div>
                <h4 className="fw-bold mb-0">
                  Bablu<span style={{ color: "#8B7CFF" }}>.</span>
                </h4>
                <small style={{ color: "#A5A7B0" }}>Full Stack Developer</small>
              </div>

              {/* Close button stays inside the sidebar */}
              <button
                type="button"
                className="btn btn-outline-light"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* Navigation Heading */}
            <div
              className="small text-uppercase fw-semibold mb-3 px-1"
              style={{ color: "#A5A7B0", letterSpacing: "1px" }}
            >
              Navigation
            </div>

            {/* Navigation Links */}
            <nav className="d-flex flex-column gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={closeMenu}
                  className="d-flex align-items-center gap-3 text-decoration-none"
                  style={navButtonStyle}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    fixedWidth
                    style={{ color: "#8B7CFF" }}
                  />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>

            <hr style={{ borderColor: "#30323A" }} />

            {/* Resume: Mobile and Tablet Only */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="btn w-100 d-flex align-items-center justify-content-center gap-2"
              style={{
                color: "#FFFFFF",
                backgroundColor: "#24262E",
                border: "1px solid #8B7CFF",
                padding: "11px",
              }}
            >
              Resume
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </aside>
        </>
      )}
    </>
  );
}

export default Navbar;
