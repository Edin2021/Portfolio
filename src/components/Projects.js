/* eslint-disable react-hooks/exhaustive-deps */
import { projects } from "../data";
import Project from "./Project";

function SelectedProjects() {

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
