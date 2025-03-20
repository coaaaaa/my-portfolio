import "./Projects.css";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: { en: "Photo Gallery", sr: "Galerija Fotografija" },
    description: {
      en: "An interactive photo gallery with filtering and fullscreen view.",
      sr: "Interaktivna galerija sa filtriranjem i prikazom preko celog ekrana.",
    },
    technologies: ["React", "CSS", "Unsplash API"],
    link: "https://github.com/yourgithub/photo-gallery",
    demo: "https://photo-gallery-demo.vercel.app/",
  },
  {
    id: 2,
    title: { en: "Task Manager", sr: "Menadžer Zadataka" },
    description: {
      en: "A simple task manager app to track daily tasks with local storage.",
      sr: "Jednostavna aplikacija za upravljanje zadacima sa lokalnim skladištem.",
    },
    technologies: ["React", "useState", "LocalStorage"],
    link: "https://github.com/coaaaaa/task-manager",
    demo: "https://task-manager-nine-bice.vercel.app",
  },
  {
    id: 3,
    title: { en: "E-commerce Shop", sr: "E-trgovina" },
    description: {
      en: "A basic e-commerce site using fake API for product listings.",
      sr: "Osnovna e-trgovina koristeći lažni API za prikaz proizvoda.",
    },
    technologies: ["React", "React Router", "FakeStore API"],
    link: "https://github.com/yourgithub/ecommerce-shop",
    demo: "https://ecommerce-demo.vercel.app/",
  },
];

function Projects() {
  const { language, translations } = useLanguage();

  return (
    <div className="projects-container">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {translations[language].projects}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {translations[language].projectsDescription}
      </motion.p>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>{project.title[language]}</h2>
            <p>{project.description[language]}</p>

            {/* Technologies used */}
            <ul className="tech-list">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            {/* GitHub and Live Demo links */}
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
