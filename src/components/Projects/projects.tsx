import React, { useState } from "react";
import Project from "../project/project";
import Company from "../company/company";
import "./projects.scss";
import projects from "./projects.json";
import Dialog from "../dialog/dialog";

interface Step {
  heading: string;
  paragraph: string;
  image: string;
}
interface ProjectItem {
  id: string;
  name: string;
  summary?: string;
  imageUrl?: string;
  images?: string[];
  prototype?: string;
  steps?: Step[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
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
                    <Project title={p.name} image={p.imageUrl} />
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
