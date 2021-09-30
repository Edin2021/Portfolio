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
      <div className="logos">
        <div>
          <div>
            <img src={htmlLogo} alt="html logo" />
          </div>
          <div>
            <img src={cssLogo} alt="css logo" />
          </div>
          <div>
            <img src={javascriptLogo} alt="javascript logo" />
          </div>
        </div>
        <div>
          <div>
            <img src={sassLogo} alt="sass logo" />
          </div>
          <div>
            <img src={reactLogo} alt="react logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
