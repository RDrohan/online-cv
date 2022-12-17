import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        id="about"
        gradient="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600"
      >
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Online CV{" "}
          <span className="font-extrabold text-red-700 sm:block">
            Ricky Drohan
          </span>
        </h1>

        <p className="mt-12 sm:text-xl sm:leading-relaxed text-justify">
          A hardworking, reliable, and adaptable software developer with over 7
          years&#8217; experience in full stack Web, Database and Business
          Intelligence (BI) development following completion of Higher Diploma
          in Computer Science in 2015. I am seeking a position which will
          utilise the professional and technical skills developed through past
          work experience. I have an organized approach to work and a
          determination to complete tasks timely and accurately.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#skills"
          >
            Work In Progress ...
          </a>
        </div>
      </Hero>
    </>
  );
}

export default App;
