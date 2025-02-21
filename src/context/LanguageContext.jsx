import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

const translations = {
  en: {
    welcome: "Welcome to My Portfolio",
    description:
      "I'm a Frontend Developer with a passion for design & web development.",
    viewProjects: "View My Projects",
    contactMe: "Contact Me",
    projects: "Projects",
    home: "Home",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    contact: "Contact",
    projectsDescription: "Here are some of the projects I've worked on.",
    contactTitle: "Get in Touch",
    contactDescription: "Have a question or want to work together? Reach out!",
    name: "Name",
    message: "Message",
    send: "Send Message",
  },
  sr: {
    welcome: "Dobrodošli u moj Portfolio",
    description: "Ja sam Frontend Developer sa strašću za dizajn i web razvoj.",
    viewProjects: "Pogledaj moje projekte",
    contactMe: "Kontaktiraj Me",
    projects: "Projekti",
    home: "Početna",
    email: "E-mail",
    github: "GitHub",
    linkedin: "LinkedIn",
    contact: "Kontakt",
    projectsDescription: "Ovde su neki od projekata na kojima sam radio.",
    contactTitle: "Stupite u kontakt",
    contactDescription: "Imate pitanje ili želite da sarađujemo? Javite se!",
    name: "Ime",
    message: "Poruka",
    send: "Pošalji Poruku",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "sr" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
