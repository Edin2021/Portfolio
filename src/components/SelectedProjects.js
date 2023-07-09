import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";
import Project from "./Project";

function SelectedProjects() {
  const [selectedProjects, setSelectedProjects] = useState([]);

  useEffect(() => {
    setSelectedProjects(projects.filter((project) => project.selected));
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
