import Banner from "./Banner";
import ResumeButton from "../components/ResumeButton";
import heroImage from "../images/hero-image.png";
import { useGlobalContext } from "../context";

function Hero() {
  const { headerHeight } = useGlobalContext();

  return (
    <div className="hero">
      <div className="hero-centar" style={{ paddingTop: `${headerHeight}px` }}>
        <Banner />
      </div>
      <img className="hero-image" src={heroImage} alt="hero background" />
    </div>
  );
}

export default Hero;
