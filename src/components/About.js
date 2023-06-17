import { sections } from "../data";

function About() {
  return (
    <section className="about">
      <h2>
        About<span id="about"></span>
      </h2>
      <span className="underline"></span>
      <p>{sections.about}</p>
    </section>
  );
}

export default About;
