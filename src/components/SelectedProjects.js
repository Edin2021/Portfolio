import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import longArrow from "../images/illustarions/long-arrow.svg";
import { projects } from "../data";
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
    <section className="selected-projects">
      <h2>
        Selected Projects <span id="selectedProjects"></span>
      </h2>
      <span className="underline"></span>
      <div className="projects">
        {selectedProjects.map((selectedProject) => (
          <Project key={selectedProject.id} project={selectedProject} />
        ))}
        <div className="view-all-projects">
          <Link to="/projects">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
