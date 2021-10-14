import htmlLogo from "../images/logos/html-logo.png";
import cssLogo from "../images/logos/css-logo.png";
import javascriptLogo from "../images/logos/javascript-logo.png";
import sassLogo from "../images/logos/sass-logo.png";
import reactLogo from "../images/logos/react-logo.png";

function Technologies() {
  return (
    <section className="technologies">
      <h2>Technologies </h2>
      <span className="underline"></span>
      <div className="logos-wrapper">
        <div className="row-1">
          <div className="logo">
            <img src={htmlLogo} alt="html logo" />
          </div>
          <div className="logo">
            <img src={cssLogo} alt="css logo" />
          </div>
          <div className="logo">
            <img src={javascriptLogo} alt="javascript logo" />
          </div>
        </div>
        <div className="row-2">
          <div className="logo">
            <img src={sassLogo} alt="sass logo" />
          </div>
          <div className="logo">
            <img src={reactLogo} alt="react logo" />
          </div>
        </div>
      </div>
      <p>
        This is the current tech stack that I am using, but I’m planning to add
        more technologies/languages to this stack as I progress on this career
        path. My learning methodology is based on learning by doing. I usually
        watch one tutorial and read some documentation after which I start doing
        projects on my own, progressively increasing the complexity.
      </p>
    </section>
  );
}

export default Technologies;
