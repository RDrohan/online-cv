import React from "react";

function Grid() {
  return (
    <div className="mt-12 sm:text-xl sm:leading-relaxed text-justify">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-left text-xl p-6 bg-gray-100">
          <h3 className="pb-1 font-bold italic text-red-600">
            Programming Languages
          </h3>
          <p>JavaScript, Python, Java, HTML/CSS</p>
        </div>
        <div className="text-left text-xl p-6 bg-gray-100">
          <h3 className="pb-1 font-bold italic text-red-600">
            Technologies & Frameworks
          </h3>
          <p>
            AngularJS, React, jQuery, Vue.js, ExpressJS, SCSS, Sass, Tailwind
          </p>
        </div>
        <div className="text-left text-xl p-6 bg-gray-100">
          <h3 className="pb-1 font-bold italic text-red-600">Databases</h3>
          <p>
            SQL Server, MySQL, PostgreSQL, MongoDB, Firebase, GraphQL, Prisma
          </p>
        </div>
        <div className="text-left text-xl p-6 bg-gray-100">
          <h3 className="pb-1 font-bold italic text-red-600">
            Development Tools
          </h3>
          <p>
            SQL Server Management Studio, SQL Server Integration Services, SQL
            Server Reporting Services, QlikView, QlikSense, Movex, MPower, IBM
            Sterling B2Bi, MS Visual Studio, VS Code, Git, Docker, Crystal
            Reports
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
