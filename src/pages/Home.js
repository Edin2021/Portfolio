import Header from "../components/Header";
import SelectedProjects from "../components/SelectedProjects";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Contact from "../components/Contact";
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
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;
