import React from "react";
import "./project.scss";
import { ProjectItem } from "../../interfaces";

const getBase = () => {
  if (typeof process !== "undefined" && process.env && process.env.PUBLIC_URL) {
    return process.env.PUBLIC_URL;
  } else {
    return "/src";
  }
};

const baseUrl = getBase();

const Project: React.FC<ProjectItem> = (project) => {
  console.log("baseUrl + project.imageUrl");
  console.log(baseUrl + project.imageUrl);

  return (
    <div className="project">
      {/* <div className="project-image">
        <img src={baseUrl + project.imageUrl} alt={project.name} />
      </div> */}
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
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
