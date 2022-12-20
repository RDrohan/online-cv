import React from "react";

import "./Navbar.css";

import { RiArrowDropDownLine } from "react-icons/ri";

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
        <li class="dropdown inline-block relative cursor-pointer">
          <a className="py-2 px-4 inline-flex items-center hover:text-red-600">
            Employment
            <RiArrowDropDownLine className="hover:text-red-600" />
          </a>
          <ul class="dropdown-menu absolute bg-white hidden">
            <li className="hover:text-red-600">
              <a
                class="rounded-t py-2 px-4 block whitespace-no-wrap"
                href="#employment-1"
              >
                Page 1
              </a>
            </li>
            <li className="hover:text-red-600">
              <a
                class="py-2 px-4 block whitespace-no-wrap"
                href="#employment-2"
              >
                Page 2
              </a>
            </li>
            <li className="hover:text-red-600">
              <a
                class="rounded-b py-2 px-4 block whitespace-no-wrap"
                href="#employment-2"
              >
                Page 3
              </a>
            </li>
          </ul>
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
