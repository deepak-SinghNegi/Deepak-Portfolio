import React from "react";
import { FaEnvelope,  FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 p-10 shadow-xl">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact Me
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm currently looking for internship opportunities and exciting
            backend development projects. If you'd like to collaborate or just
            say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <a
            href="mailto:deepaknegi16360@gmail.com"
            className="bg-white/10 hover:bg-white/20 transition duration-300 rounded-2xl p-6 flex items-center gap-5"
          >
            <FaEnvelope className="text-3xl text-sky-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Email</h2>
              <p className="text-gray-300">deepaknegi16360@gmail.com</p>
            </div>
          </a>

         

         

          <a
            href="tel:+917465987345"
            className="bg-white/10 hover:bg-white/20 transition duration-300 rounded-2xl p-6 flex items-center gap-5"
          >
            <FaPhone className="text-3xl text-green-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Phone</h2>
              <p className="text-gray-300">+91 74659 87345</p>
            </div>
          </a>

        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Thanks for visiting my portfolio. I look forward to connecting with
            you!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;