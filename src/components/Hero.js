import Banner from "./Banner";
import ResumeButton from "../components/ResumeButton";
import { useGlobalContext } from "../context";

function Hero() {
  const { headerHeight } = useGlobalContext();

  return (
    <div className="hero">
      <div className="hero-centar" style={{ paddingTop: `${headerHeight}px` }}>
        <Banner />
      </div>
    </div>
  );
}

export default Hero;
