import { FaGithub } from "react-icons/fa";
import { Reveal } from "./Reveal";

function Project({ project }) {
  const { image, techUsed, name, info, repo, demo } = project;
  return (
    <Reveal classes="project">
      <article>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="details">
          <h4 className="tech-used">
            <span>{techUsed}</span>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="repo-link"
            >
              <FaGithub />

              <span className="visually-hidden">Github</span>
            </a>
          </h4>
          <h3 className="name">{name}</h3>
          <p className="info">{info}</p>
          <a className="demo-link" href={demo} target="_blank" rel="noreferrer">
            Live Link
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export default Project;
