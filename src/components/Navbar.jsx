import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  const { language, toggleLanguage, translations } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        {/* Hamburger Menu Icon */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <AnimatePresence>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                {translations[language].home}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                {translations[language].projects}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                {translations[language].contact}
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
                {theme === "light" ? (
                  <FaMoon className="theme-icon" />
                ) : (
                  <FaSun className="theme-icon" />
                )}
              </motion.button>
            </li>
          </ul>
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
