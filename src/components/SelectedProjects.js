import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import guyThinking from "../images/illustarions/guy-thinking.svg";
import longArrow from "../images/illustarions/long-arrow.svg";
import projects from "../data";
// import Loading from "./Loading";
import Project from "./Project";

function SelectedProjects() {
  const [selectedProjects, setSelectedProjects] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelectedProjects(projects.filter((project) => project.selected));
    // setLoading((loading) => !loading);
  }, []);

  return (
    <section>
      <h2>
        Selected Projects <span id="selectedProjects"></span>
      </h2>
      <span className="underline"></span>
      <div className="projects">
        {selectedProjects.map((selectedProject) => (
          <Project key={selectedProject.id} project={selectedProject} />
        ))}
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
