import htmlLogo from "../images/logos/html-logo.svg";
import cssLogo from "../images/logos/css-logo.svg";
import javascriptLogo from "../images/logos/javascript-logo.svg";
import sassLogo from "../images/logos/sass-logo.svg";
import reactLogo from "../images/logos/react-logo.svg";
import vue from "../images/logos/vue.svg";
import gitLogo from "../images/logos/git-logo.svg";
import storyblok from "../images/logos/storyblok.svg";
import tailwind from "../images/logos/tailwind.svg";
import { sections } from "../data";

function Technologies() {
  return (
    <section className="technologies">
      <h2>
        Technologies <span id="technologies"></span>
      </h2>
      <div className="underline">
        <div className="spinner"></div>
      </div>
      <p>{sections.technologies}</p>
      <div className="logos">
        <img src={htmlLogo} alt="html logo" title="Html was one.." />

        <img src={cssLogo} alt="css logo" />

        <img src={javascriptLogo} alt="javascript logo" />

        <img src={sassLogo} alt="sass logo" className="side-padding" />

        <img src={reactLogo} alt="react logo" />

        <img src={vue} alt="vue logo" />

        <img src={tailwind} alt="tailwind logo" className="side-padding" />

        <img src={gitLogo} alt="git logo" className="side-padding" />
      </div>
    </section>
  );
}

export default Technologies;
