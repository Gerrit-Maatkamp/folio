import React from "react";
import "./dialog.scss";
import ImageStepper from "../image-stepper/image-stepper";
import FigmaIcon from "../../assets/icons/figma";
import { ProjectItem } from "../../interfaces";
import { WebsiteIcon } from "../../assets/icons/website";

interface DialogProps {
  project: ProjectItem;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ project, onClose }) => {
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
          <p className="dialog-content-paragraph">{project?.summary}</p>
          {project?.steps?.map((step, index) => (
            <div key={index} className="content-section">
              <h3>{step.heading}</h3>
              <div className="content-section-content">
                {index % 2 === 0 ? (
                  <>
                    <div className="left-side">
                      <ImageStepper images={step.images} />
                    </div>
                    <div className="right-side">
                      <p>{step.paragraph}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="right-side">
                      <p>{step.paragraph}</p>
                    </div>
                    <div className="left-side">
                      <ImageStepper images={step.images} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="dialog-content-paragraph">
            <h3>{project?.prototypeHeader}</h3>
            <p>{project?.prototypeText}</p>
            <div className="dialog-content-paragraph-actions">
              <button
                className="prototype-button"
                onClick={() => window.open(project?.prototype, "_blank")}
              >
                <FigmaIcon size="3em" />
                Check Out the {project.name} Prototype
              </button>
              {project.url && (
                <button
                  className="prototype-button"
                  onClick={() => window.open(project?.url, "_blank")}
                >
                  <WebsiteIcon /> {project.name}
                </button>
              )}
            </div>
          </div>
          <div className="filler"></div>
        </div>
        <button className="close-button" onClick={onClose}>
          <span className="close-button-back-text">
            Click outside the popup to go back
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dialog;
