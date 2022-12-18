import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";

import { GrDocumentText } from "react-icons/gr";
import { GiSkills, GiGraduateCap } from "react-icons/gi";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        id="about"
        gradient="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600"
      >
        <div className="inline-block">
          <GrDocumentText size={80} />
        </div>

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
            Read On
          </a>
        </div>
      </Hero>
      <Hero id="skills">
        <div className="inline-block">
          <GiSkills size={80} />
        </div>

        <h2 className="text-3xl font-extrabold sm:text-5xl">Skills</h2>

        <Grid />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#education"
          >
            See Education
          </a>
        </div>
      </Hero>
      <Hero
        id="education"
        gradient="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600"
      >
        <div className="inline-block">
          <GiGraduateCap size={80} />
        </div>

        <h2 className="text-3xl font-extrabold sm:text-5xl">Education</h2>

        <div className="mt-12 grid grid-cols-3 gap-4 font-bold italic text-red-600 text-sm">
          <div className="text-left col-span-1">
            South East Technological University
          </div>
          <div className="text-center col-span-1">
            Higher Diploma in Science in Computer Science
          </div>
          <div className="text-right">1.1, 2014-2015</div>
        </div>
        <p className="mt-2 text-justify">
          Course Subjects: Computer Networks (81%), Computer Systems (89%),
          Databases (67%), Development Operations (86%), ICT Skills Studio
          (74%), Mobile Application Development (87%), Programming (82%),
          Security & Forensics (77%), Web Development (92%), Project & Work
          Experience (72%)
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 font-bold italic text-red-600 text-sm">
          <div className="text-left col-span-1">
            South East Technological University
          </div>
          <div className="text-center col-span-1">
            MBS By Research (Pass Without Corrections)
          </div>
          <div className="text-right">N/A, 2008-2010</div>
        </div>
        <p className="mt-2 text-justify italic">
          Exploring the nature of Effective Customer Relationship Management
          (CRM) Capability in the Irish hotel sector
        </p>
        <p className="mt-2 text-justify">
          Aim: to explore the characteristics of an effective CRM within the
          hospitality sector through the use of a detailed case study protocol
          for a selected hotel as a means to gain a practical understanding of
          how a CRM was employed
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 font-bold italic text-red-600 text-sm">
          <div className="text-left col-span-1">
            South East Technological University
          </div>
          <div className="text-center col-span-1">
            BA (Hons.) in Languages and Marketing
          </div>
          <div className="text-right">1.1, 2003-2007</div>
        </div>
        <p className="mt-2 text-justify">
          Course Subjects: French, Spanish, Principles of Marketing, Financial
          Accounting, Economics, Information Technology, Buyer Behaviour, Market
          Research, Information Systems and Databases, Intercultural
          Communication, Services Marketing, International Marketing, Strategic
          Global Marketing, Brand Management, Dissertation
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#employment"
          >
            Work In Progress ...
          </a>
        </div>
      </Hero>
    </>
  );
}

export default App;
