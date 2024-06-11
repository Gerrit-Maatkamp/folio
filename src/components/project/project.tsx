import React from "react";
import "./project.scss";

interface ProjectProps {
  title: string;
  image: string;
}

const Project: React.FC<ProjectProps> = ({ title, image }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Project;

// How did I get the feature request
// -- Was there a wireframe or just words
// Customer request or not (who came up with the feature)
// Did I receive feedback and from who
// Where would I have liked to add user testing

// How far does this portfolio need to be done to start applying.
