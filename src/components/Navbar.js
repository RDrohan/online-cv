import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar fixed justify-center bg-base-100 z-50">
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 text-xs sm:text-lg">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <details>
              <summary>Employment</summary>
              <ul class="p-2 bg-base-100 w-full">
                <li>
                  <a href="#employment-1">Page 1</a>
                </li>
                <li>
                  <a href="#employment-2">Page 2</a>
                </li>
                <li>
                  <a href="#employment-2">Page 3</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
