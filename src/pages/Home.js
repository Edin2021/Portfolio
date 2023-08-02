import Header from "../components/Header";
import Projects from "../components/Projects";
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
        <Projects />
        <Technologies />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;
