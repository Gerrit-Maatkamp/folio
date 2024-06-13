import React from "react";
import "./dialog.scss";

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

interface DialogProps {
  project: ProjectItem;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ project, onClose }) => {
  console.log("project");
  console.log(project);

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <div className="radial-gradient"></div>
          <div className="dialog-header-overlay">
            <h1>{project?.name}</h1>
          </div>
        </div>
        <div className="dialog-content">
          <p>{project?.summary}</p>

          <div className="dialog-content">
            {project?.steps?.map((step, index) => (
              <div key={index} className="content-section">
                {index % 2 === 0 ? (
                  <>
                    <div className="left-side">
                      <img src={step.image} alt={`Step ${index + 1}`} />
                    </div>
                    <div className="right-side">
                      <h3>{step.heading}</h3>
                      <p>{step.paragraph}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="right-side">
                      <h3>{step.heading}</h3>
                      <p>{step.paragraph}</p>
                    </div>
                    <div className="left-side">
                      <img src={step.image} alt={`Step ${index + 1}`} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          <span className="close-button-back-text">
            Click next to the popup to go back
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dialog;
