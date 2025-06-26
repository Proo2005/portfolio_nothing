import React from "react";
import "../styles/Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">MYPORTFOLIO</div>
      <div className="nav-right">
        <a href="https://github.com/Proo2005" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/prodipta-chakraborty-5484b722a/" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <FaLinkedin size={28} />
        </a>
      </div>


    </div>
  );
}

export default Navbar;
