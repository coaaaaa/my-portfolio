import { useState } from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="project-card">
      {!loaded && <div className="image-placeholder">Učitavanje...</div>}
      <img
        src={image}
        alt={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`project-image ${loaded ? "visible" : "hidden"}`}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
