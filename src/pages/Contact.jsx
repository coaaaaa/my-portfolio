import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const { language, translations } = useLanguage();

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1>{translations[language].contactTitle}</h1>
      <p>{translations[language].contactDescription}</p>
      <motion.form
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
          <label htmlFor="name">{translations[language].name}</label>
          <input type="text" id="name" name="name" required />
        </motion.div>

        <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
          <label htmlFor="email">{translations[language].email}</label>
          <input type="email" id="email" name="email" required />
        </motion.div>

        <motion.div className="form-group" whileFocus={{ scale: 1.02 }}>
          <label htmlFor="message">{translations[language].message}</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {translations[language].send}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
