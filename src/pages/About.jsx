import React from "react";
import profilePhoto from "../assets/profilePhoto.png";

const About = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Cards */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="bg-white/10 p-4 rounded-2xl">
              <p className="text-2xl lg:text-3xl font-black mb-2 text-white">
                Technical Focus
              </p>
              <p className="font-mono text-base lg:text-lg text-white/90">
                Java, Spring Boot, REST APIs, MongoDB, MySQL — designing scalable backend systems.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <p className="text-2xl lg:text-3xl font-black mb-2 text-white">
                What I Practice
              </p>
              <p className="font-mono text-base lg:text-lg text-white/90">
                LeetCode problems, strong in Data Structures & OOP, backend development.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <p className="text-2xl lg:text-3xl font-black mb-2 text-white">
                Core Technologies
              </p>
              <p className="font-mono text-base lg:text-lg text-white/90">
                HTML5, CSS, Tailwind, JavaScript, React, MongoDB, MySQL, Git, GitHub, Java, Spring Boot
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <p className="text-2xl lg:text-3xl font-black mb-2 text-white">
                What I Bring
              </p>
              <p className="font-mono text-base lg:text-lg text-white/90">
                Problem-solving discipline, backend-first thinking, ability to contribute to real-world codebases.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/3">
          <img
            className="rounded-full object-cover
                       w-40 h-40 lg:w-52 lg:h-52 lg:w-60 lg:h-60
                       ring-2 ring-white/20"
            src={profilePhoto}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default About;