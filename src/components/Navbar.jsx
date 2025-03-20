import { Link } from "react-router-dom";
import { useLanguage } from "@context/LanguageContext";
import { useTheme } from "@context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import "./Navbar.css";
import logoLight from "@assets/images/logo-light.webp";
import logoDark from "@assets/images/logo-dark.webp";

function Navbar() {
  const { language, toggleLanguage, translations } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Logo"
            className="logo-img"
          />
        </Link>

        {/* Mobile menu button */}
        {isMobile && (
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        <ul className={`nav-links ${isMobile && menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => isMobile && toggleMenu()}>
              {translations[language]?.home || "Home"}
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => isMobile && toggleMenu()}>
              {translations[language]?.projects || "Projects"}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => isMobile && toggleMenu()}>
              {translations[language]?.contact || "Contact"}
            </Link>
          </li>
          <li>
            <button className="language-btn" onClick={toggleLanguage}>
              {language === "en" ? "🇬🇧 EN" : "🇷🇸 SR"}
            </button>
          </li>
          <li>
            <motion.button
              className="theme-btn"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </motion.button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
