import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <NavBar />

      {/* ONE background for whole site */}
      <div
        className="pt-32 px-4 md:px-10 bg-gradient-to-br 
        from-[#141e30] via-[#243b55] to-[#000000]"
      >
        <section id="home" className="scroll-mt-32">
          <Home />
        </section>

        <section id="about" className="scroll-mt-32 mt-24">
          <About />
        </section>

        <section id="resume" className="scroll-mt-32 mt-24">
          <Resume />
        </section>

        <section id="projects" className="scroll-mt-32 mt-24">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-32 mt-24 pb-24">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;