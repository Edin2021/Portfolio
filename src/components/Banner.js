import bannerImage from "../images/illustarions/guy-waving.svg";
import ResumeButton from "./ResumeButton";

function Banner() {
  return (
    <section className="banner">
      <h1>
        <span>Hello There.</span>
        <p>
          I am Edin Sikira, an ambitious front end developer on an endless
          learning journey.
        </p>
        <ResumeButton />
      </h1>
      <div className="image">
        <img src={bannerImage} alt="banner illustration" />
      </div>
    </section>
  );
}

export default Banner;
