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
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="projects" >
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;