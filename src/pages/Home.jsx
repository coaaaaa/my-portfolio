import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const { language, translations } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {translations[language].welcome}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {translations[language].description}
      </motion.p>
      <motion.button
        className="btn-primary"
        onClick={() => navigate("/projects")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {translations[language].viewProjects}
      </motion.button>
    </div>
  );
}

export default Home;
