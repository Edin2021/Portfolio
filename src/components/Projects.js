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
    <section>
      <h2>
        Projects <span id="projects"></span>
      </h2>
      <span className="underline"></span>
      <div className="projects">
        {projects.map((selectedProject) => (
          <Project key={selectedProject.id} project={selectedProject} />
        ))}
      </div>
    </section>
  );
}

export default SelectedProjects;
