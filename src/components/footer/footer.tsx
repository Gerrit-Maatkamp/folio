import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ContentCopy } from "@mui/icons-material";
import "./footer.scss";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Email address copied to clipboard");
  });
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="buttongroup-vertical">
        <a
          className="button button-text"
          href="mailto:gerrit.maatkamp@gmail.com?subject=Join%20Us%20for%20an%20Interview%20at%20[Company]"
        >
          <div className="button-text-icon">
            <MailIcon />
          </div>
          Invite for an interview
        </a>
        <div
          className="footer-email-copy"
          onClick={() => copyToClipboard("gerrit.maatkamp@gmail.com")}
        >
          <button className="button">
            <ContentCopy />
          </button>
          gerrit.maatkamp@gmail.com
        </div>
      </div>
      <div className="buttongroup-vertical">
        <a
          className="button button-text"
          href="https://www.linkedin.com/in/gerritmaatkamp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          Check my LinkedIn
        </a>
      </div>
      <a
        className="button button-text"
        href="https://github.com/Gerrit-Maatkamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
        GitHub
      </a>
    </div>
  );
};

export default Footer;
