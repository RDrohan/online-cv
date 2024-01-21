import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";

import { GrDocumentText, GrContactInfo } from "react-icons/gr";
import { GiGraduateCap } from "react-icons/gi";
import { CgWorkAlt } from "react-icons/cg";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Hero id="about">
        <div className="m-4 max-w-sm sm:max-w-5xl">
          <div className="inline-block">
            <GrDocumentText size={80} />
          </div>
          <h1 className="text-5xl font-bold">
            Online CV{" "}
            <span className="font-extrabold text-red-700 sm:block">
              Ricky Drohan
            </span>
          </h1>
          <p className="py-6 text-justify">
            A hardworking, reliable, and adaptable software developer with over
            8 years&#8217; experience in full stack Web, Database and Business
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
        </div>
      </Hero>
      <Hero id="skills">
        <div className="m-4 max-w-sm sm:max-w-5xl">
          <div className="inline-block">
            <GrDocumentText size={80} />
          </div>
          <h2 className="text-5xl font-bold">Skills</h2>
          <Grid />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#education"
            >
              See Education
            </a>
          </div>
        </div>
      </Hero>
      <Hero id="education">
        <div className="m-4 max-w-sm sm:max-w-5xl">
          <div className="inline-block">
            <GiGraduateCap size={80} />
          </div>

          <h2 className="text-5xl font-bold">Education</h2>

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
            Accounting, Economics, Information Technology, Buyer Behaviour,
            Market Research, Information Systems and Databases, Intercultural
            Communication, Services Marketing, International Marketing,
            Strategic Global Marketing, Brand Management, Dissertation
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#employment-1"
            >
              See Employment
            </a>
          </div>
        </div>
      </Hero>
      <Hero id="employment-1">
        <div className="m-4 max-w-sm sm:max-w-5xl">
          <div className="inline-block">
            <CgWorkAlt size={80} />
          </div>

          <h2 className="text-5xl font-bold">
            Employment
            <span className="font-extrabold text-red-700 sm:block">Page 1</span>
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-4 font-bold italic text-red-600">
            <div className="text-left col-span-1 text-sm md:text-xl">
              Dawn Meats
            </div>
            <div className="text-center col-span-1 text-sm md:text-xl">
              SQL/BI Developer
            </div>
            <div className="text-right col-span-1 text-sm md:text-xl">
              September 2021–present
            </div>
          </div>
          <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
            <li>
              Performed system configuration, mapping, and management for
              EDI-based transactions
            </li>
            <li>
              Assisted in troubleshooting of EDI transactions and workflows
            </li>
            <li>
              Created and managed reports for the line of business and
              back-office application systems like SSRS, QlikView, QlikSense,
              NPrinting, MPower and Emydex
            </li>
            <li>
              Requirements gathering, analysis and design of new requirements
            </li>
            <li>
              Liaised with BI team to deliver and support database extracts used
              in dashboards and reports
            </li>
            <li>
              Performance tuning of SQL queries and troubleshoot existing SQL
              code in stored procedures, functions, tables, and views
            </li>
            <li>Carried out service support requests in a timely manner</li>
            <li>
              Developed and maintained documentation for EDI, SQL and BI
              processes
            </li>
            <li>Provided out of hours support on a rotational basis</li>
          </ul>

          <div className="mt-4 grid grid-cols-3 gap-4 font-bold italic text-red-600">
            <div className="text-left col-span-1 text-sm md:text-xl">
              Sun Life Financial
            </div>
            <div className="text-center col-span-1 text-sm md:text-xl">
              Data Support Developer
            </div>
            <div className="text-right col-span-1 text-sm md:text-xl">
              June 2021–September 2021
            </div>
          </div>

          <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
            <li>Provided support for Data Lake Cloud cluster issues on AWS</li>
            <li>
              Created and managed reports for the line of business and
              back-office application systems like SSRS, Crystal Reports and
              LOGI
            </li>
            <li>Created and supported ETL jobs using SSIS</li>
            <li>
              Requirements gathering, analysis and design of new requirements
            </li>
            <li>
              Performance tuning of SQL queries and troubleshoot existing SQL
              code in stored procedures, functions, tables, and views
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#employment-2"
            >
              Go to Page 2
            </a>
          </div>
        </div>
      </Hero>
      <Hero id="employment-2">
        <div className="m-4 max-w-sm sm:max-w-5xl">
          <div className="inline-block">
            <CgWorkAlt size={80} />
          </div>

          <h2 className="text-5xl font-bold">
            Employment
            <span className="font-extrabold text-red-700 sm:block">Page 2</span>
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-4 font-bold italic text-red-600">
            <div className="text-left col-span-1 text-sm md:text-xl">
              Dawn Meats
            </div>
            <div className="text-center col-span-1 text-sm md:text-xl">
              Business Intelligence Developer
            </div>
            <div className="text-right col-span-1 text-sm md:text-xl">
              May 2019–June 2021
            </div>
          </div>
          <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
            <li>
              Created and managed reports for the line of business and
              back-office application systems like SSRS, Emydex and QlikView
            </li>
            <li>
              Requirements gathering, analysis and design of new requirements
            </li>
            <li>
              Liaised with BI team to deliver and support database extracts used
              in dashboards and reports
            </li>
            <li>
              Requirements gathering, analysis and design of new requirements
            </li>
            <li>
              Performance tuning of SQL queries and troubleshoot existing SQL
              code in stored procedures, functions, tables, and views
            </li>
            <li>Carried out service support requests in a timely manner</li>
            <li>
              Developed and maintained documentation for EDI, SQL and BI
              processes
            </li>
            <li>Provided out of hours support on a rotational basis</li>
          </ul>

          <div className="mt-4 grid grid-cols-3 gap-4 font-bold italic text-red-600">
            <div className="text-left col-span-1 text-sm md:text-xl">
              Zinnia (formerly SE2)
            </div>
            <div className="text-center col-span-1 text-sm md:text-xl">
              Analyst
            </div>
            <div className="text-right col-span-1 text-sm md:text-xl">
              Jul 2017–Jan 2019
            </div>
          </div>
          <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
            <li>
              Created SQL scripts to rectify sensitive commercial data issues in
              client databases and generate technical reports for third-party
              providers
            </li>
            <li>Performed peer reviewed testing of scripts</li>
            <li>Actively mentored graduates and interns on completing tasks</li>
            <li>Documented processes and procedures for other team members</li>
            <li>
              Worked independently within a team setting, communicating with
              others on progress during stand-ups
            </li>
            <li>
              Produced project deliverables in a timely and accurate manner
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#employment-3"
            >
              Go to Page 3
            </a>
          </div>
        </div>
      </Hero>
      <Hero id="employment-3">
        <div className="m-4 max-w-sm sm:max-w-5xl">
          <div className="inline-block">
            <CgWorkAlt size={80} />
          </div>

          <h2 className="text-5xl font-bold">
            Employment
            <span className="font-extrabold text-red-700 sm:block">Page 3</span>
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-4 font-bold italic text-red-600">
            <div className="text-left col-span-1 text-sm md:text-xl">
              Walton Institute
            </div>
            <div className="text-center col-span-1 text-sm md:text-xl">
              Associate Software Developer
            </div>
            <div className="text-right col-span-1 text-sm md:text-xl">
              Jan 2015–Jan 2017
            </div>
          </div>
          <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
            <li>
              Created and managed reports for the line of business and
              back-office application systems like SSRS, Emydex and QlikView
            </li>
            <li>
              Requirements gathering, analysis and design of new requirements
            </li>
            <li>
              Liaised with BI team to deliver and support database extracts used
              in dashboards and reports
            </li>
            <li>
              Requirements gathering, analysis and design of new requirements
            </li>
            <li>
              Performance tuning of SQL queries and troubleshoot existing SQL
              code in stored procedures, functions, tables, and views
            </li>
            <li>Carried out service support requests in a timely manner</li>
            <li>
              Developed and maintained documentation for EDI, SQL and BI
              processes
            </li>
            <li>Provided out of hours support on a rotational basis</li>
          </ul>

          <div className="mt-4 grid grid-cols-3 gap-4 font-bold italic text-red-600">
            <div className="text-left col-span-1 text-sm md:text-xl">
              Sun Life Financial
            </div>
            <div className="text-center col-span-1 text-sm md:text-xl">
              Operations Specialist
            </div>
            <div className="text-right col-span-1 text-sm md:text-xl">
              Oct 2013–Mar 2014
            </div>
          </div>
          <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
            <li>
              Carried out administrative tasks relating to new accounts, data
              cleansing, fund transfers and scheduling in a timely and accurate
              manner
            </li>
            <li>
              Escalated and prioritises issues that cannot be resolved straight
              away and liaise with staff from other departments to ensure
              queries are responded to in a timely manner
            </li>
            <li>
              Identified process improvements to increase efficiencies and
              streamline processes
            </li>
          </ul>

          <div className="mt-4 grid grid-cols-3 gap-4 font-bold italic text-red-600">
            <div className="text-left col-span-1 text-sm md:text-xl">
              SimplyInsure.ie
            </div>
            <div className="text-center col-span-1 text-sm md:text-xl">
              Digital Marketing Executive
            </div>
            <div className="text-right col-span-1 text-sm md:text-xl">
              Jan 2011–Oct 2013
            </div>
          </div>
          <ul className="mt-4 ml-4 list-disc text-left text-sm md:text-xl">
            <li>
              Designed and implemented digital marketing strategy (Facebook,
              Twitter, SEO, Google AdWords, and blogging) generating a
              significant amount of business inquiries
            </li>
            <li>
              Performed office duties, customer service and administrative tasks
            </li>
            <li>Graphic design of digital and printed materials</li>
            <li>
              Managed company website using WordPress Content Management System
            </li>
            <li>
              Liaised with suppliers, webmaster, fellow colleagues, insurance
              companies and IT support
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Hero>
      <Hero id="contact">
        <div className="m-4 max-w-sm sm:max-w-5xl">
          <div className="inline-block">
            <GrContactInfo size={80} />
          </div>

          <h2 className="text-5xl font-bold">Contact Me</h2>

          <div className="mt-12 sm:text-xl sm:leading-relaxed text-justify">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-left text-2xl p-6 text-center">
                <div className="inline-block text-red-600">
                  <HiOutlineMail size={60} />
                </div>
                <h3 className="pb-1 font-bold italic text-red-600">Email</h3>
                <a href="mailto:rdrohanirl@yahoo.ie">rdrohanirl@yahoo.ie</a>
              </div>
              <div className="text-left text-2xl p-6 text-center">
                <div className="inline-block text-red-600">
                  <HiPhone size={60} />
                </div>
                <h3 className="pb-1 font-bold italic text-red-600">Phone</h3>
                <a href="tel:+353879124961">&#43;353 87 9124961</a>
              </div>
              <div className="text-left text-2xl p-6 text-center">
                <div className="inline-block text-red-600">
                  <FaAddressCard size={60} />
                </div>
                <h3 className="pb-1 font-bold italic text-red-600">Address</h3>
                <p>19 The Moorings, Ballinakill, Waterford, Ireland</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#about"
            >
              Go to Start
            </a>
          </div>
        </div>
      </Hero>
    </>
  );
}

export default App;
