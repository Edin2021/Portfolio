import Header from "../components/Header";
import SelectedProjects from "../components/SelectedProjects";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <SelectedProjects />
        <Technologies />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;
