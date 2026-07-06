import React from "react";
import DEEPAK_NEGI from "../assets/DEEPAK_NEGI.pdf";

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div
        className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-2xl
                   p-10 text-center shadow-xl border border-white/10"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          My Resume
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          This resume provides an overview of my education, technical skills,
          projects, and experience. It reflects my journey as a Computer Science
          student with a strong interest in backend development, Java, Spring
          Boot, Data Structures & Algorithms, and building scalable software
          solutions.
        </p>

        <a
          href={DEEPAK_NEGI}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-900 font-semibold
                     px-8 py-4 rounded-xl hover:bg-sky-200
                     transition duration-300 hover:scale-105"
        >
          📄 View Resume
        </a>

        <p className="text-sm text-gray-400 mt-6">
          Opens in a new browser tab.
        </p>
      </div>
    </div>
  );
};

export default Resume;