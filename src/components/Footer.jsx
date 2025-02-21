import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-left">
          © 2025 Aleksandar Pajkanovic. All Rights Reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/coaaaaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandar-pajkanovic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="mailto:apajkanovic@gmail.com" aria-label="Email">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
