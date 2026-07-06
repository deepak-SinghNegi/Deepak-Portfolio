import React from "react";
import { FaTools } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center shadow-xl">

        <div className="flex justify-center mb-6">
          <FaTools className="text-6xl text-sky-400" />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4">
          Projects
        </h1>

        <p className="text-lg text-gray-300 leading-8 mb-8">
          I'm currently building and refining projects that showcase my skills
          in <span className="font-semibold text-white">Java</span>,
          <span className="font-semibold text-white"> Spring Boot</span>,
          <span className="font-semibold text-white"> React</span>, and
          <span className="font-semibold text-white"> Full-Stack Development</span>.
        </p>

        <div className="bg-sky-500/20 border border-sky-400/30 rounded-xl p-5">
          <h2 className="text-2xl font-semibold text-sky-300">
            🚧 Projects Coming Soon
          </h2>

          <p className="text-gray-300 mt-3">
            This section is currently under development. New projects with live
            demos, GitHub repositories, and technical case studies will be added
            soon.
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Thank you for your patience. Check back soon for updates!
        </p>

      </div>
    </section>
  );
};

export default Projects;