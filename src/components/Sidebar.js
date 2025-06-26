import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";
import "../styles/Sidebar.css";



function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-icon" data-label="Home">
        <AiFillHome size={24} />
      </Link>
      <Link to="/Project" className="sidebar-icon" data-label="Projects">
        <FaProjectDiagram size={24} />
      </Link>
      <Link to="/Skill" className="sidebar-icon" data-label="Skills">
        <GiSkills size={24} />
      </Link>
      <Link to="/Certificate" className="sidebar-icon" data-label="Certificate">
        <FaCertificate size={24} />
      </Link>
      <Link to="/About" className="sidebar-icon" data-label="About Me">
        <CgProfile size={24} />
      </Link>
      <Link to="/Contact" className="sidebar-icon" data-label="Contact">
        <MdContactPhone size={24} />
      </Link>
    </div>
  );
}

export default Sidebar;