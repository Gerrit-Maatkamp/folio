import React, { useState } from "react";
import Project from "../project/project";
import Company from "../company/company";
import "./projects.scss";
import projects from "./projects.json";
import Dialog from "../dialog/dialog";
import { ProjectItem } from "../../interfaces";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const handleProjectClick = (project: ProjectItem) => {
    document.body.classList.add("dialog-open");
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    document.body.classList.remove("dialog-open");
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      {projects.map((project) => {
        return (
          <React.Fragment key={project.name}>
            <Company
              name={project.name}
              description={project.description}
              linkedin={project.linkedIn}
              website={project.url}
            />
            <div className="projects-list">
              {project.projects.map((p: ProjectItem) => {
                return (
                  <div
                    key={p.name}
                    onClick={() => handleProjectClick(p)}
                    className="project-item"
                  >
                    <Project {...p} />
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
      {selectedProject && (
        <Dialog project={selectedProject} onClose={handleCloseDialog} />
      )}
    </div>
  );
};

export default Projects;
