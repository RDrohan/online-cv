import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";

import { GrDocumentText } from "react-icons/gr";
import { GiSkills, GiGraduateCap } from "react-icons/gi";
import { CgWorkAlt } from "react-icons/cg";

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

        <p className="mt-12 text-xl sm:leading-relaxed text-justify">
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

        <div className="mt-12 grid grid-cols-3 gap-4 font-bold italic text-red-600">
          <div className="text-left col-span-1 text-sm md:text-xl">
            South East Technological University
          </div>
          <div className="text-center col-span-1 text-sm md:text-xl">
            Higher Diploma in Science in Computer Science
          </div>
          <div className="text-right col-span-1 text-sm md:text-xl">
            1.1, 2014-2015
          </div>
        </div>
        <p className="mt-2 text-justify text-sm md:text-xl">
          Course Subjects: Computer Networks (81%), Computer Systems (89%),
          Databases (67%), Development Operations (86%), ICT Skills Studio
          (74%), Mobile Application Development (87%), Programming (82%),
          Security & Forensics (77%), Web Development (92%), Project & Work
          Experience (72%)
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 font-bold italic text-red-600">
          <div className="text-left col-span-1 text-sm md:text-xl">
            South East Technological University
          </div>
          <div className="text-center col-span-1 text-sm md:text-xl">
            MBS By Research
          </div>
          <div className="text-right col-span-1 text-sm md:text-xl">
            Pass Without Corrections, 2008-2010
          </div>
        </div>
        <p className="mt-2 text-justify italic text-sm md:text-xl">
          Exploring the nature of Effective Customer Relationship Management
          (CRM) Capability in the Irish hotel sector (
          <a
            className="text-red-600 font-bold"
            href="https://repository.wit.ie/1622/1/Exploring_the_nature_of_effective_customer_relationship_management_capability_in_the_Irish_hotel_sector.pdf"
          >
            Link Here
          </a>
          )
        </p>
        <p className="mt-2 text-justify text-sm md:text-xl">
          Aim: to explore the characteristics of an effective CRM within the
          hospitality sector through the use of a detailed case study protocol
          for a selected hotel as a means to gain a practical understanding of
          how a CRM was employed
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 font-bold italic text-red-600">
          <div className="text-left col-span-1 text-sm md:text-xl">
            South East Technological University
          </div>
          <div className="text-center col-span-1 text-sm md:text-xl">
            BA (Hons.) in Languages and Marketing
          </div>
          <div className="text-right text-sm md:text-xl">1.1, 2003-2007</div>
        </div>
        <p className="mt-2 text-justify text-sm md:text-xl">
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
            See Employment
          </a>
        </div>
      </Hero>
      <Hero id="employment">
        <div className="inline-block">
          <CgWorkAlt size={80} />
        </div>

        <h2 className="text-3xl font-extrabold sm:text-5xl">Employment</h2>

        <div className="mt-12 grid grid-cols-3 gap-4 font-bold italic text-red-600">
          <div className="text-left col-span-1 text-sm md:text-xl">
            Dawn Meats
          </div>
          <div className="text-center col-span-1 text-sm md:text-xl">
            SQL/BI Developer
          </div>
          <div className="text-right col-span-1 text-sm md:text-xl">
            September 2021– present
          </div>
        </div>
        <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
          <li>
            Performed system configuration, mapping, and management for
            EDI-based transactions
          </li>
          <li>Assisted in troubleshooting of EDI transactions and workflows</li>
          <li>
            Created and managed reports for the line of business and back-office
            application systems like SSRS, QlikView, QlikSense, NPrinting,
            MPower and Emydex
          </li>
          <li>
            Requirements gathering, analysis and design of new requirements
          </li>
          <li>
            Liaised with BI team to deliver and support database extracts used
            in dashboards and reports
          </li>
          <li>
            Performance tuning of SQL queries and troubleshoot existing SQL code
            in stored procedures, functions, tables, and views
          </li>
          <li>Carried out service support requests in a timely manner</li>
          <li>
            Developed and maintained documentation for EDI, SQL and BI processes
          </li>
          <li>Provided out of hours support on a rotational basis</li>
        </ul>

        <div className="mt-8 grid grid-cols-3 gap-4 font-bold italic text-red-600">
          <div className="text-left col-span-1 text-sm md:text-xl">
            Sun Life Financial
          </div>
          <div className="text-center col-span-1 text-sm md:text-xl">
            Data Support Developer
          </div>
          <div className="text-right col-span-1 text-sm md:text-xl">
            June 2021 – September 2021
          </div>
        </div>

        <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
          <li>Provided support for Data Lake Cloud cluster issues on AWS</li>
          <li>
            Created and managed reports for the line of business and back-office
            application systems like SSRS, Crystal Reports and LOGI
          </li>
          <li>Created and supported ETL jobs using SSIS</li>
          <li>
            Requirements gathering, analysis and design of new requirements
          </li>
          <li>
            Performance tuning of SQL queries and troubleshoot existing SQL code
            in stored procedures, functions, tables, and views
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#contact"
          >
            Work In Progress ...
          </a>
        </div>
      </Hero>
    </>
  );
}

export default App;
