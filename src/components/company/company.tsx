import React from "react";
import "./company.scss";
import LinkedinIcon from "../../assets/icons/linkedin";
import { WebsiteIcon } from "../../assets/icons/website";

interface companyProps {
  name: string;
  description?: string;
  linkedin?: string;
  website?: string;
}

const Company: React.FC<companyProps> = ({
  name,
  description,
  linkedin,
  website,
}) => {
  return (
    <div className="company">
      <div className="company-header">
        <h2>{name}</h2>
        <div className="buttongroup">
          {linkedin && (
            <a
              href={linkedin}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          )}
          {website && (
            <a
              href={website}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebsiteIcon />
            </a>
          )}
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Company;
