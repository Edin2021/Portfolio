import htmlLogo from "../images/logos/html-logo.svg";
import cssLogo from "../images/logos/css-logo.svg";
import javascriptLogo from "../images/logos/javascript-logo.svg";
import sassLogo from "../images/logos/sass-logo.svg";
import reactLogo from "../images/logos/react-logo.svg";
import angularLogo from "../images/logos/angular-logo.svg";
import gitLogo from "../images/logos/git-logo.svg";

function Technologies() {
  return (
    <section className="technologies">
      <h2>
        Technologies <span id="technologies"></span>
      </h2>
      <span className="underline"></span>
      <div className="logos-wrapper">
        <div className="row">
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
        <div className="row">
          <div className="logo">
            <img src={sassLogo} alt="sass logo" />
          </div>
          <div className="logo">
            <img src={reactLogo} alt="react logo" />
          </div>
          <div className="logo">
            <img src={angularLogo} alt="angular logo" />
          </div>
          <div className="logo">
            <img src={gitLogo} alt="git logo" />
          </div>
        </div>
      </div>
      <p>
        These are the technologies/languages that I am currently using, but I’m
        adding more to the stack as I progress on this career path. My learning
        methodology is based on learning by doing. I usually watch one tutorial
        and read some documentation after which I start doing projects on my
        own, progressively increasing the complexity.
      </p>
    </section>
  );
}

export default Technologies;
