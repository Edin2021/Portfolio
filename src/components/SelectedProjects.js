import { Link } from "react-router-dom";
import tempImage from "../images/temp-project-image.png";
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
            <img src={tempImage} alt="" />
          </div>
          <div className="details">
            <h4 className="tech-used">
              <span>Sass/Javascript/ReactJS</span>
              <a href="/temp" className="repo-link">
                <FaGithub />
                <span className="visually-hidden">Github</span>
              </a>
            </h4>
            <h3 className="name">audiophile e-commerce</h3>
            <p className="info">
              This website contains multiple pages, a cart and more.
            </p>
            <a className="demo-link" href="/temp">
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
