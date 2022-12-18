import React from "react";

function Navbar() {
  return (
    <nav className="w-full py-4 px-8 fixed top-0 z-50">
      <ul className="max-w-5xl text-md sm:text-2xl mx-auto flex justify-between items-center">
        <li>
          <a href="#about" className="hover:text-red-600">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-red-600">
            Skills
          </a>
        </li>
        <li>
          <a href="#education" className="hover:text-red-600">
            Education
          </a>
        </li>
        <li>
          <a href="#employment" className="hover:text-red-600">
            Employment
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-red-600">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
