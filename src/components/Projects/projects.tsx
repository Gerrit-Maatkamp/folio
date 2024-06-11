import Project from "../project/project";
import Company from "../company/company";
import "./projects.scss";
import projects from "./projects.json";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project) => {
        return (
          <>
            <Company
              name={project.name}
              description={project.description}
              linkedin={project.linkedIn}
              website={project.url}
            />
            <div className="projects-list">
              {project.projects.map((p) => {
                return <Project title={p.name} image={p.imageUrl} />;
              })}
            </div>
          </>
        );
      })}

      {/* <Company
        name="Revolution Ordering"
        description="The All-In-One Digital Ordering Partner for Hospitality and Restaurant Companies"
      /> */}
      {/* <div className="projects-list">
        <Project title="Master Item" image={masterItemImage} />
        <Project title="Self Service Sign Up" image={""} />
        <Project title="Doordash SSIO" image={""} />
      </div> */}
      {/* <Company
        name="BlueCart"
        description="The online ordering platform for the hospitality industry, helping wholesale distributors, sales reps, and restaurants!"
      /> */}
      {/* <Project title="Invoice Payment" image={""} />
      <Project title="Inventory" image={""} />
      <Project title={""} image={""} /> */}
    </div>
  );
};

export default Projects;
