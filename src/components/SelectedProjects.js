import { Link } from "react-router-dom";
import tempProjectImage from "../images/project-images/beach-resort.png";
import { FaGithub } from "react-icons/fa";
import guyThinking from "../images/illustarions/guy-thinking.png";
import longArrow from "../images/illustarions/logn-arrow.png";
import demoLinkIcon from "../images/illustarions/demo-link-icon.png";

function SelectedProjects() {
  return (
    <section>
      <h2>
        Selected Projects <span id="selectedProjects"></span>
      </h2>
      <span className="underline"></span>
      <div className="projects">
        <article className="project">
          <div className="image">
            <img src={tempProjectImage} alt="" />
          </div>
          <div className="details">
            <h4 className="tech-used">
              <span>Css/Javascript/ReactJS</span>
              <a href="https://github.com/Edin2021/react-beach-resort.git" target="_blank" rel="noreferrer" className="repo-link">
                <FaGithub />
                <span className="visually-hidden">Github</span>
              </a>
            </h4>
            <h3 className="name">beach resort</h3>
            <p className="info">
              This website contains a home page, rooms page and a room details page.
            </p>
            <a className="demo-link" href="https://9e582d10.react-beach-resort.pages.dev/" target="_blank" rel="noreferrer">
              Live Demo <img src={demoLinkIcon} alt="demo link icon" />
            </a>
          </div>
        </article>
      </div>
      <div className="section-image">
        <img src={guyThinking} alt="guy thinking" />
        <Link to="/projects">
          View All Projects <img src={longArrow} alt="long arrow" />
        </Link>
      </div>
    </section>
  );
}

export default SelectedProjects;
